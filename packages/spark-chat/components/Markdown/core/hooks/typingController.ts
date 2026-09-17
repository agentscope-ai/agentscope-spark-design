/** A bounded text queue: idle time never earns credit for future chunks. */
export function createTypingController(onChange: (text: string) => void) {
  let source = '';
  let visible = '';
  let delay = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;

  function stop() {
    if (timer !== undefined) clearTimeout(timer);
    timer = undefined;
  }

  function schedule() {
    if (!delay || timer !== undefined || visible.length >= source.length)
      return;
    timer = setTimeout(() => {
      timer = undefined;
      // Move by a Unicode code point, never splitting an emoji surrogate pair.
      const point = source.codePointAt(visible.length);
      if (point !== undefined) {
        visible = source.slice(0, visible.length + (point > 0xffff ? 2 : 1));
        onChange(visible);
      }
      schedule();
    }, delay);
  }

  return {
    update(content: string, typing?: boolean | number) {
      const nextDelay =
        typing === true
          ? 5
          : typeof typing === 'number' && Number.isFinite(typing) && typing > 0
          ? Math.max(1, typing)
          : 0;
      const replacement = !content.startsWith(source);
      if (nextDelay !== delay || replacement) stop();
      delay = nextDelay;
      source = content;
      const nextVisible = !delay ? source : replacement ? '' : visible;
      if (nextVisible !== visible) {
        visible = nextVisible;
        onChange(visible);
      }
      schedule();
    },
    stop,
  };
}
