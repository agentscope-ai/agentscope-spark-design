interface AttachmentUploadState {
  response?: {
    url?: string;
  };
}

export function hasSubmittableAttachments(
  fileList: readonly AttachmentUploadState[],
): boolean {
  return fileList.some((file) => Boolean(file.response?.url));
}
