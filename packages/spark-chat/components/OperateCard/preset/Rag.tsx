import { OperateCard, useProviderContext, Markdown } from '@agentscope-ai/chat';
import { SparkBookLine } from '@agentscope-ai/icons';
import { ConfigProvider, Image } from 'antd';
import { Locale } from "antd/es/locale";

export interface IRagProps {
  /**
   * @description 标题
   * @descriptionEn Title
   * @default '知识库检索'
   */
  title?: string;
  /**
   * @description 副标题
   * @descriptionEn Subtitle
   * @default ''
   */
  subTitle?: string;
  /**
   * @description 召回知识列表
   * @descriptionEn RAG List
   * @default []
   */
  list: {
    title: string;
    content: string;
    footer: string;
    images?: string[];
    link?: string;
  }[]
}

function Images({ images }: { images: string[] }) {
  const { getPrefixCls } = useProviderContext();

  const prefixCls = getPrefixCls('operate-card');

  return <ConfigProvider
    locale={{
      Image: { preview: '' }
    } as Locale}
  >
    <Image.PreviewGroup>
      <div className={`${prefixCls}-rag-item-images`}>
        {images.map((image, index) => <Image src={image} key={index} />)}
      </div>
    </Image.PreviewGroup>
  </ConfigProvider>


}


export default function (props: IRagProps) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');
  const { title = '知识库检索', subTitle } = props;

  return <OperateCard
    header={{
      icon: <SparkBookLine />,
      title: title,
      description: subTitle,
    }}
    body={{
      defaultOpen: true,
      children: <OperateCard.LineBody>
        {props.list.map((item, index) => {
          return <div key={index} className={`${prefixCls}-rag-item`}>
            <div className={`${prefixCls}-rag-item-title`}>{item.title}</div>
            <div className={`${prefixCls}-rag-item-content`}>
              <Markdown content={item.content} />

              {
                item.images && <Images images={item.images} />
              }

              {
                item.link ? <a onClick={() => {
                  window.open(item.link, '_blank');
                }} className={`${prefixCls}-rag-item-footer`} href={item.link} target="_blank">{item.footer}</a> :
                  <div className={`${prefixCls}-rag-item-footer`}>{item.footer}</div>
              }
            </div>
          </div>
        })}
      </OperateCard.LineBody>
    }}
  />
}