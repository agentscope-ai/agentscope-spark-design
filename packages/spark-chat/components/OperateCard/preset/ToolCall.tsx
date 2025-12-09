
import { OperateCard, useProviderContext } from '@agentscope-ai/chat';
import { SparkCopyLine, SparkLoadingLine, SparkToolLine, SparkTrueLine } from '@agentscope-ai/icons';
import { CodeBlock, CollapsePanel, IconButton } from '@agentscope-ai/design';
import { useRef, useState } from 'react';


function Block(props: {
  title: string;
  content: string | Record<string, any>
}) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');
  const contentString = typeof props.content === 'string' ? props.content : JSON.stringify(props.content);
  const [copied, setCopied] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  return <div className={`${prefixCls}-tool-call-block`}>
    <CollapsePanel
      title={
        props.title
      }
      collapsedHeight={100}
      expandOnPanelClick={true}
      extra={
        <IconButton
          size="small"
          style={{ marginRight: '-6px' }}
          icon={copied ? <SparkTrueLine /> : <SparkCopyLine />}
          bordered={false}
          onClick={() => {
            clearTimeout(timer.current);
            navigator.clipboard.writeText(contentString);
            setCopied(true);
            timer.current = setTimeout(() => {
              setCopied(false);
            }, 2000);
          }} />
      }
    >
      <CodeBlock language={'json'} value={contentString} readOnly={true} />
    </CollapsePanel>
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
        <Block title="Input" content={props.input} />
        <Block title="Output" content={props.output} />
      </OperateCard.LineBody>
    }}
  >
  </OperateCard>
}