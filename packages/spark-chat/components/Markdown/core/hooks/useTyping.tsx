import { useEffect, useRef, useState } from 'react';

const useTyping = ({ content, typing }) => {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (typing) {
      timer.current = setInterval(() => {
        setIndex((v) => v + 1);
      }, typeof typing === 'number' ? typing : 5);
    } else {
      timer.current && clearInterval(timer.current);
    }

    return () => clearInterval(timer.current);
  }, [typing]);

  if (!typing) return content;

  return content.slice(0, index);
};


export default useTyping;