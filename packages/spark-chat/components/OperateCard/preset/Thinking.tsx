import { OperateCard, useProviderContext } from '@agentscope-ai/chat';
import { SparkLoadingLine, SparkMemoryLine } from '@agentscope-ai/icons';

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
  /**
   * @description 默认展开
   * @descriptionEn Default Open
   * @default true
   */
  defaultOpen?: boolean;
  /**
   * @description 是否正在生成
   * @descriptionEn Whether is generating
   * @default false
   */
  loading?: boolean;
}
export default function (props: IThinkingProps) {
  const { getPrefixCls } = useProviderContext();
  const { defaultOpen = true, loading = false } = props;
  const prefixCls = getPrefixCls('operate-card');


  return <OperateCard

    header={{
      icon: loading ? <SparkLoadingLine spin /> : <SparkMemoryLine />,
      title: props.title,
      description: props.subTitle,
    }}
    body={{
      defaultOpen,
      children: <OperateCard.LineBody>
        <div className={`${prefixCls}-thinking`}>
          {props.content}
        </div>
      </OperateCard.LineBody>
    }}
  />
}