import { useEffect, useRef, useState } from 'react';
import { createTypingController } from './typingController';

const useTyping = ({
  content,
  typing,
}: {
  content?: string;
  typing?: boolean | number;
}) => {
  const [visible, setVisible] = useState('');
  const controller = useRef<ReturnType<typeof createTypingController>>();
  if (!controller.current)
    controller.current = createTypingController(setVisible);

  useEffect(() => {
    controller.current!.update(content || '', typing);
  }, [content, typing]);

  useEffect(() => () => controller.current!.stop(), []);

  const enabled =
    typing === true ||
    (typeof typing === 'number' && Number.isFinite(typing) && typing > 0);
  if (!enabled) return content;
  // Never render stale text for a replacement while its effect is pending.
  return (content || '').startsWith(visible) ? visible : '';
};

export default useTyping;
