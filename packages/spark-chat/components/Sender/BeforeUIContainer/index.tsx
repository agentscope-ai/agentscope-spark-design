import { useProviderContext } from '@agentscope-ai/chat'
import Style from './style';
import { useMemo } from 'react';


interface IBeforeUIContainerProps {
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  children?: React.ReactNode;
}



export default function BeforeUIContainer({ leftChildren, rightChildren, children }: IBeforeUIContainerProps) {
  const prefixCls = useProviderContext().getPrefixCls('sender-before-ui-container');

  const left = useMemo(() => {
    if (leftChildren) return <div className={`${prefixCls}-left`}>{leftChildren}</div>;
    return null;
  }, [leftChildren]);

  const right = useMemo(() => {
    if (rightChildren) return <div className={`${prefixCls}-right`}>{rightChildren}</div>;
    return null;
  }, [rightChildren]);

  return (
    <>
      <Style />
      <div className={prefixCls}>
        <div className={`${prefixCls}-content`}>
          <div className={`${prefixCls}-content-children`}>
            {children || <>
              {left}
              {right}
            </>}
          </div>
        </div>
      </div>
    </>
  );
}