
import { OperateCard, useProviderContext } from '@agentscope-ai/chat';
import { SparkToolLine } from '@agentscope-ai/icons';


function Block(props: {
  title: string;
  content: string | Record<string, any>
}) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');
  const contentString = typeof props.content === 'string' ? props.content : JSON.stringify(props.content, null, 2);
  return <div className={`${prefixCls}-tool-call-block`}>
    <div className={`${prefixCls}-tool-call-block-title`}>{props.title}</div>
    <div className={`${prefixCls}-tool-call-block-content`}>{contentString}</div>
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
}

export default function (props: IToolCallProps) {

  const { title = 'Call Tool', subTitle } = props;

  return <OperateCard

    header={{
      icon: <SparkToolLine />,
      title: title,
      description: subTitle,
    }}

    body={{
      defaultOpen: true,
      children: <OperateCard.LineBody>
        <Block title="Input" content={props.input} />
        <Block title="Output" content={props.output} />
      </OperateCard.LineBody>
    }}
  >
  </OperateCard>
}