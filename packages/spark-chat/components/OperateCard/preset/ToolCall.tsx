
import { OperateCard, useProviderContext } from '@agentscope-ai/chat';
import { SparkCopyLine, SparkLoadingLine, SparkToolLine, SparkTrueLine } from '@agentscope-ai/icons';
import { CodeBlock, IconButton } from '@agentscope-ai/design';
import { copy } from '../../Util/copy';
import { useRef, useState } from 'react';


function Block(props: {
  title: string;
  content: string | Record<string, any>
  expandEnabled?: boolean;
  language?: 'json' | 'text';
}) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');
  const { expandEnabled = false, language = 'json' } = props;
  const contentString = typeof props.content === 'string' ? props.content : JSON.stringify(props.content);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(expandEnabled === true ? false : true);
  const timer = useRef<NodeJS.Timeout | null>(null);

  return <div className={`${prefixCls}-tool-call-block`}>
    <div
      className={`${prefixCls}-tool-call-block-header`}
      onClick={() => {
        if (expandEnabled === true) {
          setExpanded(prev => !prev);
        }
      }}
    >
      <span className={`${prefixCls}-tool-call-block-title`}>{props.title}</span>
      <div
        className={`${prefixCls}-tool-call-block-extra`}
        onClick={e => e.stopPropagation()}
      >
        <IconButton
          size="small"
          style={{ marginRight: '-6px' }}
          icon={copied ? <SparkTrueLine /> : <SparkCopyLine />}
          bordered={false}
          onClick={() => {
            copy(contentString).then(() => {
              clearTimeout(timer.current);
              setCopied(true);
              timer.current = setTimeout(() => {
                setCopied(false);
              }, 2000);
            }).catch(() => {
              console.warn('Copy failed');
            });
          }} />
      </div>
    </div>
    {expanded && (
      <div className={`${prefixCls}-tool-call-block-content`}>
        {/* @ts-ignore */}
        <CodeBlock language={language} value={contentString} readOnly={true} basicSetup={{ lineNumbers: false, foldGutter: false }} />
      </div>
    )}
  </div>
}

export interface IToolCallProps {
  /**
   * @description 标题
   * @descriptionEn Title
   * @default 'Call Tool'
   */
  title?: string;
  /**
   * @description 副标题
   * @descriptionEn Subtitle
   * @default ''
   */
  subTitle?: string;
  /**
   * @description 工具调用入参
   * @descriptionEn Tool Call Input
   * @default ''
   */
  input: string | Record<string, any>;
  /**
   * @description 工具调用输出
   * @descriptionEn Tool Call Output
   * @default ''
   */
  output: string | Record<string, any>;
  /**
   * @description 默认展开
   * @descriptionEn Default Open
   */
  defaultOpen?: boolean;
  /**
   * @description 是否正在生成
   * @descriptionEn Whether is generating
   * @default false
   */
  loading?: boolean;
  
  outputBlock?: { language?: 'json' | 'text' }
  inputBlock?: { language?: 'json' | 'text' }
}

export default function (props: IToolCallProps) {

  const { title = 'Call Tool', subTitle, defaultOpen = true, loading = false } = props;

  return <OperateCard

    header={{
      icon: loading ? <SparkLoadingLine spin /> : <SparkToolLine />,
      title: title,
      description: subTitle,
    }}

    body={{
      defaultOpen: defaultOpen,
      children: <OperateCard.LineBody>
        <Block title="Input" content={props.input} language={props.inputBlock?.language} />
        <Block title="Output" content={props.output} language={props.outputBlock?.language} />
      </OperateCard.LineBody>
    }}
  >
  </OperateCard>
}