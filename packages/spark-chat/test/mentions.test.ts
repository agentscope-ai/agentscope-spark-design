import assert from 'node:assert/strict';
import test from 'node:test';
import {
  findMentionRange,
  remapSelectedMentions,
  type SelectedMention,
} from '../components/AgentScopeRuntimeWebUI/core/Chat/Input/mentionUtils';

const fileMention: SelectedMention = {
  id: 1,
  item: { value: 'src/app.ts', type: 'file' },
  text: '@ src/app.ts',
  start: 7,
  end: 19,
};

test('findMentionRange replaces the complete token around the cursor', () => {
  assert.deepEqual(findMentionRange('check @source later', 10, '@'), {
    start: 6,
    end: 13,
    keyword: 'sou',
  });
});

test('findMentionRange closes when the cursor leaves a mention token', () => {
  assert.equal(findMentionRange('check @source later', 19, '@'), null);
});

test('remapSelectedMentions shifts exact ranges after an earlier edit', () => {
  assert.deepEqual(
    remapSelectedMentions('check: @ src/app.ts', 'please check: @ src/app.ts', [
      fileMention,
    ]),
    [{ ...fileMention, start: 14, end: 26 }],
  );
});

test('remapSelectedMentions removes a token edited in place', () => {
  assert.deepEqual(
    remapSelectedMentions('check: @ src/app.ts', 'check: @ src/app.js', [
      fileMention,
    ]),
    [],
  );
});

test('remapSelectedMentions does not retain substring matches elsewhere', () => {
  assert.deepEqual(
    remapSelectedMentions('@ src/app @ src/app.ts', '@ src/app.ts', [
      {
        ...fileMention,
        start: 10,
        end: 22,
      },
    ]),
    [],
  );
});
