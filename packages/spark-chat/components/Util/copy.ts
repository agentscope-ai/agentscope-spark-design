export async function copy(text: string): Promise<void> {
  if (window.isSecureContext && navigator.clipboard) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.cssText = 'position:fixed;left:-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy', true);
  } finally {
    document.body.removeChild(textarea);
  }
}
