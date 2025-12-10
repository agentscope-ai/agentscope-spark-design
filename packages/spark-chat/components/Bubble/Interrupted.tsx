import { createGlobalStyle } from 'antd-style';
import { useProviderContext } from '@agentscope-ai/chat';
import { SparkErrorCircleFill, SparkStopCircleLine } from '@agentscope-ai/icons';

const Style = createGlobalStyle`
.${p => p.theme.prefixCls}-interrupted {
  display: inline-flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0px;
  background-color: ${p => p.theme.colorFillSecondary};
  padding: 10px 12px;
  border-radius: 8px;
  gap: 8px;
}
.${p => p.theme.prefixCls}-interrupted-desc {
  font-weight: normal;
  word-break: break-word;
}

.${p => p.theme.prefixCls}-interrupted-header {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${p => p.theme.colorText};

  &-icon-wrapper {
    width: 16px;
    height: 16px;
    flex: 0 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-error {
    color: ${p => p.theme.colorError};
    font-size: 16px;
  }

  &-interrupted {
    font-size: 16px;
  }
  
}

`

interface IProps {

  title?: string;
  type?: 'error' | 'interrupted';
  desc?: string;
}


export default function Interrupted(props: IProps) {
  const { title = 'Answers have stopped', type = 'interrupted', desc } = props;
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('interrupted');


  return <>
    <Style />
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-icon-wrapper`}>
          {
            type === 'interrupted' ? <SparkStopCircleLine className={`${prefixCls}-header-interrupted`} /> : <SparkErrorCircleFill className={`${prefixCls}-header-error`} />
          }
        </div>
        <span>{title}</span>
      </div>
      {
        desc && <div className={`${prefixCls}-desc`}>{desc}</div>
      }
    </div>
  </>
}