import { buildSync } from 'esbuild';
import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

// Exercise shipped TypeScript without requiring a test-only DOM or TS runtime.
async function loadSource(relativePath) {
  const result = buildSync({
    entryPoints: [fileURLToPath(new URL(relativePath, import.meta.url))],
    bundle: true,
    write: false,
    platform: 'node',
    format: 'esm',
  });
  return import(
    `data:text/javascript;base64,${Buffer.from(
      result.outputFiles[0].text,
    ).toString('base64')}`
  );
}

const { isLatestBubble } = await loadSource(
  '../components/Bubble/bubbleListOrder.ts',
);
const {
  assertInputAttachmentsReady,
  getInputSubmissionCleanup,
  hasUploadingInputAttachments,
  hasSubmittableAttachments,
  hasUploadingAttachments,
  isSubmittableAttachment,
  submitInputWithAcceptance,
} = await loadSource(
  '../components/AgentScopeRuntimeWebUI/core/Chat/Input/submission.ts',
);

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((yes, no) => {
    resolve = yes;
    reject = no;
  });
  return { promise, resolve, reject };
}

const doneFile = {
  uid: 'sent-file',
  status: 'done',
  response: { url: '/sent.png' },
};
const snapshot = {
  contentRevision: 4,
  mentionsRevision: 2,
  attachmentUids: [doneFile.uid],
};

test('regenerate belongs to the newest message in ascending and descending lists', () => {
  const chronological = [
    'old-user',
    'old-response',
    'new-user',
    'new-response',
  ];
  for (const order of ['asc', 'desc']) {
    const items =
      order === 'asc' ? chronological : [...chronological].reverse();
    assert.deepEqual(
      items.filter((_, index) => isLatestBubble(index, items.length, order)),
      ['new-response'],
    );
    assert.equal(isLatestBubble(0, 1, order), true);
    assert.equal(isLatestBubble(0, 0, order), false);
  }
});

test('uploading blocks even when a previous upload response URL exists', () => {
  const uploading = {
    uid: 'uploading',
    status: 'uploading',
    response: { url: '/stale.png' },
  };
  assert.equal(hasUploadingAttachments([doneFile, uploading]), true);
  assert.equal(isSubmittableAttachment(uploading), false);
  assert.equal(hasSubmittableAttachments([uploading]), false);
  assert.equal(hasUploadingAttachments([doneFile]), false);
  assert.equal(hasSubmittableAttachments([doneFile]), true);
});

test('failed and removed files are retained for correction, not submitted', () => {
  for (const status of ['error', 'removed']) {
    assert.equal(isSubmittableAttachment({ ...doneFile, status }), false);
  }
  assert.equal(
    isSubmittableAttachment({ uid: 'missing-url', status: 'done' }),
    false,
  );
  assert.equal(
    isSubmittableAttachment({ response: { url: '/custom.png' } }),
    true,
  );
});

test('acceptance clears only the submitted files and unchanged draft', () => {
  const addedFile = { uid: 'new-file', status: 'uploading' };
  const cleanup = getInputSubmissionCleanup(snapshot, {
    contentRevision: 4,
    mentionsRevision: 2,
    fileList: [doneFile, addedFile],
  });
  assert.equal(cleanup.clearContent, true);
  assert.deepEqual(cleanup.fileList, [addedFile]);
  assert.equal(cleanup.fileList[0], addedFile);
});

test('edits, including editing back to the same text, protect the new draft', () => {
  for (const revisions of [
    { contentRevision: 5, mentionsRevision: 2 },
    { contentRevision: 6, mentionsRevision: 2 },
    { contentRevision: 4, mentionsRevision: 3 },
  ]) {
    const cleanup = getInputSubmissionCleanup(snapshot, {
      ...revisions,
      fileList: [doneFile],
    });
    assert.equal(cleanup.clearContent, false);
    assert.deepEqual(cleanup.fileList, []);
  }
});

test('acceptance consumes before stream completion and never consumes the later draft', async () => {
  const stream = deferred();
  let accept;
  let consumed = 0;
  let draft = 'sent';
  const submission = submitInputWithAcceptance(
    (onAccepted) => {
      accept = onAccepted;
      return stream.promise;
    },
    () => {
      consumed += 1;
      draft = '';
    },
  );
  assert.equal(draft, 'sent');
  accept();
  assert.equal(draft, '');
  draft = 'next draft';
  stream.resolve();
  await submission;
  accept();
  assert.equal(consumed, 1);
  assert.equal(draft, 'next draft');
});

test('a stream aborted after acceptance does not restore or clear a later draft', async () => {
  const stream = deferred();
  let accept;
  let current = {
    contentRevision: 4,
    mentionsRevision: 2,
    fileList: [doneFile],
  };
  let clearCount = 0;
  const submission = submitInputWithAcceptance(
    (onAccepted) => {
      accept = onAccepted;
      return stream.promise;
    },
    () => {
      const cleanup = getInputSubmissionCleanup(snapshot, current);
      if (cleanup.clearContent) clearCount += 1;
      current = { ...current, contentRevision: 5, fileList: cleanup.fileList };
    },
  );
  accept();
  const addedFile = { uid: 'next-file', status: 'uploading' };
  current = { ...current, contentRevision: 6, fileList: [addedFile] };
  stream.reject(new Error('route local-id replaced by UUID'));
  await assert.rejects(submission, /local-id replaced/);
  assert.equal(clearCount, 1);
  assert.deepEqual(current.fileList, [addedFile]);
});

test('a rejected submission or enqueue keeps the complete draft', async () => {
  let consumed = 0;
  await assert.rejects(
    submitInputWithAcceptance(
      async () => {
        throw new Error('backend unavailable before acceptance');
      },
      () => {
        consumed += 1;
      },
    ),
    /backend unavailable/,
  );
  await submitInputWithAcceptance(
    async () => ({ ok: false }),
    () => {
      consumed += 1;
    },
  );
  assert.equal(consumed, 0);
});

test('successful legacy and enqueue results consume once', async () => {
  for (const result of [undefined, { ok: true }]) {
    let consumed = 0;
    await submitInputWithAcceptance(
      async () => result,
      () => {
        consumed += 1;
      },
    );
    assert.equal(consumed, 1);
  }
});

test('public input and queue payloads reject uploading files before dispatch', () => {
  const uploading = { ...doneFile, status: 'uploading' };
  for (const data of [
    { fileList: [uploading] },
    { attachments: [uploading] },
    { fileList: [doneFile], attachments: [uploading] },
  ]) {
    assert.throws(
      () => assertInputAttachmentsReady(data),
      /upload is still in progress/,
    );
  }
  assert.doesNotThrow(() =>
    assertInputAttachmentsReady({
      fileList: [{ response: { url: '/legacy.png' } }],
    }),
  );
  assert.doesNotThrow(() => assertInputAttachmentsReady({}));
});

test('beforeSubmit transformation cannot consume attachments added while it is pending', async () => {
  const beforeSubmit = deferred();
  const transformedFile = {
    uid: 'transformed-sent-file',
    response: { url: '/converted.png' },
  };
  const nextFile = { uid: 'next-draft-file', status: 'uploading' };
  let current = {
    contentRevision: 4,
    mentionsRevision: 2,
    fileList: [doneFile],
  };
  const captured = {
    ...snapshot,
    attachmentUids: [...snapshot.attachmentUids],
  };
  const data = { query: 'original', fileList: [doneFile] };
  const submission = (async () => {
    await beforeSubmit.promise;
    data.fileList = [transformedFile];
    assertInputAttachmentsReady(data);
    await submitInputWithAcceptance(
      (accept) => {
        accept();
      },
      () => {
        const cleanup = getInputSubmissionCleanup(captured, current);
        assert.equal(cleanup.clearContent, false);
        current = { ...current, fileList: cleanup.fileList };
      },
    );
  })();
  current = {
    contentRevision: 5,
    mentionsRevision: 2,
    fileList: [doneFile, nextFile],
  };
  beforeSubmit.resolve();
  await submission;
  assert.deepEqual(current.fileList, [nextFile]);
  assert.deepEqual(data.fileList, [transformedFile]);
  assert.equal(hasUploadingInputAttachments({ fileList: [nextFile] }), true);
});

test('acceptance callbacks do not swallow request or consumer exceptions', async () => {
  const requestError = new Error('real request exception after acceptance');
  await assert.rejects(
    submitInputWithAcceptance(
      (accept) => {
        accept();
        throw requestError;
      },
      () => {},
    ),
    (error) => error === requestError,
  );
  const consumeError = new Error('consumer callback failed');
  await assert.rejects(
    submitInputWithAcceptance(
      (accept) => {
        accept();
      },
      () => {
        throw consumeError;
      },
    ),
    (error) => error === consumeError,
  );
});
