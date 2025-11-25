import { OperateCard, useProviderContext } from '@agentscope-ai/chat';
import { SparkMemoryLine } from '@agentscope-ai/icons';

export interface IThinkingProps {
  /**
   * @description 标题
   * @descriptionEn Title
   * @default ''
   */
  title: string;
  /**
   * @description 副标题
   * @descriptionEn Subtitle
   * @default ''
   */
  subTitle?: string;
  /**
   * @description 思考内容
   * @descriptionEn Thinking Content
   * @default ''
   */
  content: string;
}
export default function (props: IThinkingProps) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');


  return <OperateCard

    header={{
      icon: <SparkMemoryLine />,
      title: props.title,
      description: props.subTitle,
    }}
    body={{
      defaultOpen: true,
      children: <OperateCard.LineBody>
        <div className={`${prefixCls}-thinking`}>
          {props.content}
        </div>
      </OperateCard.LineBody>
    }}
  />
}