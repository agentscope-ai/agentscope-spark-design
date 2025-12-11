import { OperateCard, useProviderContext, Markdown } from '@agentscope-ai/chat';
import { IconButton, Tag } from '@agentscope-ai/design';
import { SparkBookLine, SparkDownLine, SparkUpLine } from '@agentscope-ai/icons';
import { ConfigProvider, Image } from 'antd';
import { Locale } from "antd/es/locale";
import { useState } from 'react';

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
    score?: number;
    title: string;
    content: string;
    footer: string;
    images?: string[];
    link?: string;
  }[]
  /**
   * @description 默认展开
   * @descriptionEn Default Open
   * @default true
   */
  defaultOpen?: boolean;
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
        {images.map((image, index) => <Image src={image} key={index} width={44} height={44} />)}
      </div>
    </Image.PreviewGroup>
  </ConfigProvider>


}

function Item({ item }) {
  const [open, setOpen] = useState(false);
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');

  return <div className={`${prefixCls}-rag-item`}>
    <div className={`${prefixCls}-rag-item-title`} onClick={() => {
      setOpen(!open);
    }}>
      <span>
        {item.title}
      </span>
      <span style={{ flex: 1 }}></span>
      {
        item.score && <Tag color="blue">{item.score}</Tag>
      }

      <IconButton
        bordered={false}
        size="small"
        icon={open ? <SparkUpLine /> : <SparkDownLine />}

      />
    </div>
    {
      open && <div className={`${prefixCls}-rag-item-content`}>
        <div>{item.content}</div>

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
    }

  </div>
}


export default function (props: IRagProps) {
  const { title = '知识库检索', subTitle, defaultOpen = true } = props;

  return <OperateCard
    header={{
      icon: <SparkBookLine />,
      title: title,
      description: subTitle,
    }}
    body={{
      defaultOpen,
      children: <OperateCard.LineBody>
        {props.list.map((item, index) => {
          return <Item key={index} item={item} />
        })}
      </OperateCard.LineBody>
    }}
  />
}