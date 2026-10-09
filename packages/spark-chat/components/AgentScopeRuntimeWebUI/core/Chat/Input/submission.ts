interface AttachmentUploadState {
  status?: string;
  response?: {
    url?: string;
  };
}

export function hasUploadingAttachments(
  fileList: readonly AttachmentUploadState[],
): boolean {
  return fileList.some((file) => file.status === 'uploading');
}

interface InputAttachments {
  fileList?: readonly AttachmentUploadState[];
  attachments?: readonly AttachmentUploadState[];
}

export function hasUploadingInputAttachments(data: InputAttachments): boolean {
  return (
    hasUploadingAttachments(data.fileList || []) ||
    hasUploadingAttachments(data.attachments || [])
  );
}

/** Public submit/execute/queue callers may bypass the built-in composer. */
export function assertInputAttachmentsReady(data: InputAttachments): void {
  if (hasUploadingInputAttachments(data)) {
    throw new Error('Attachment upload is still in progress.');
  }
}

export function isSubmittableAttachment(file: AttachmentUploadState): boolean {
  return (
    Boolean(file.response?.url) &&
    file.status !== 'uploading' &&
    file.status !== 'error' &&
    file.status !== 'removed'
  );
}

export function hasSubmittableAttachments(
  fileList: readonly AttachmentUploadState[],
): boolean {
  return fileList.some(isSubmittableAttachment);
}

export interface InputSubmissionSnapshot {
  contentRevision: number;
  mentionsRevision: number;
  attachmentUids: readonly string[];
}

/** Only consume the draft and attachments that belonged to this submission. */
export function getInputSubmissionCleanup<T extends { uid: string }>(
  snapshot: InputSubmissionSnapshot,
  current: {
    contentRevision: number;
    mentionsRevision: number;
    fileList: readonly T[];
  },
) {
  const submittedUids = new Set(snapshot.attachmentUids);
  return {
    clearContent:
      current.contentRevision === snapshot.contentRevision &&
      current.mentionsRevision === snapshot.mentionsRevision,
    fileList: current.fileList.filter((file) => !submittedUids.has(file.uid)),
  };
}

/** Acceptance consumes a draft once; stream completion is a separate lifecycle. */
export async function submitInputWithAcceptance<
  T extends void | { ok: boolean },
>(
  submit: (onAccepted: () => void) => T | Promise<T>,
  consumeInput: () => void,
): Promise<T> {
  let accepted = false;
  const onAccepted = () => {
    if (accepted) return;
    accepted = true;
    consumeInput();
  };
  const result = await submit(onAccepted);
  // Legacy submitters and enqueue-only consumers may only return their result.
  if (!result || result.ok) onAccepted();
  return result;
}
