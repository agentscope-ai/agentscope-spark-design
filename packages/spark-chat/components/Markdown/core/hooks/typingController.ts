/** A bounded text queue: idle time never earns credit for future chunks. */
export function createTypingController(onChange: (text: string) => void) {
  let source = '';
  let visible = '';
  let delay = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let nextTick = 0;

  function stop() {
    if (timer !== undefined) clearTimeout(timer);
    timer = undefined;
    nextTick = 0;
  }

  function schedule() {
    if (!delay || timer !== undefined || visible.length >= source.length)
      return;
    if (!nextTick) nextTick = Date.now() + delay;
    timer = setTimeout(() => {
      timer = undefined;
      // Catch up after a delayed render without accumulating idle-time credit.
      const now = Date.now();
      let count = Math.max(1, Math.floor((now - nextTick) / delay) + 1);
      nextTick += count * delay;
      while (count-- > 0 && visible.length < source.length) {
        const point = source.codePointAt(visible.length)!;
        visible = source.slice(0, visible.length + (point > 0xffff ? 2 : 1));
      }
      onChange(visible);
      if (visible.length >= source.length) nextTick = 0;
      schedule();
    }, Math.max(1, nextTick - Date.now()));
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
