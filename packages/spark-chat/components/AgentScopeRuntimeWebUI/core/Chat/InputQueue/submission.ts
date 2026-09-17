interface ActiveInputQueueSubmission {
  token: symbol;
  cancel: () => void;
}

const activeSubmissions = new Map<string, ActiveInputQueueSubmission>();

export function registerInputQueueSubmission(
  queueSessionId: string | undefined,
  cancel: () => void,
) {
  if (!queueSessionId) return () => {};

  const submission: ActiveInputQueueSubmission = {
    token: Symbol(queueSessionId),
    cancel,
  };
  activeSubmissions.set(queueSessionId, submission);

  return () => {
    if (activeSubmissions.get(queueSessionId)?.token === submission.token) {
      activeSubmissions.delete(queueSessionId);
    }
  };
}

export function cancelInputQueueSubmission(queueSessionId: string | undefined) {
  if (!queueSessionId) return false;
  const submission = activeSubmissions.get(queueSessionId);
  if (!submission) return false;
  submission.cancel();
  return true;
}

export function isInputQueueSubmissionActive(
  queueSessionId: string | undefined,
) {
  return !!queueSessionId && activeSubmissions.has(queueSessionId);
}
