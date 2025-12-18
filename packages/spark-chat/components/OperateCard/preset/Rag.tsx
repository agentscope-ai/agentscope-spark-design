import { OperateCard, useProviderContext, Markdown } from '@agentscope-ai/chat';
import { Empty, IconButton, Tag } from '@agentscope-ai/design';
import { SparkBookLine, SparkDownLine, SparkUpLine, SparkWarningCircleFill } from '@agentscope-ai/icons';
import { ConfigProvider, Flex, Image } from 'antd';
import { Locale } from "antd/es/locale";
import { ReactNode, useState } from 'react';

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
   * @description 检索词
   * @descriptionEn Query
   */
  query: string;
  /**
   * @description 检索词前缀
   * @descriptionEn Query Title
   * @default '检索 Query：'
   */
  queryTitle?: string;
  /**
   * @description 检索图片列表
   * @descriptionEn Query Images
   * @default []
   */
  images?: string[];
  /**
   * @description 召回知识列表
   * @descriptionEn RAG List
   * @default []
   */
  list: {
    score?: number | string | ReactNode;
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
  /**
   * @description 空状态占位内容
   * @descriptionEn Empty Placeholder
   * @default '暂无数据'
   */
  placeholder?: string;
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
      {images.map((image, index) => <Image src={image} key={index} width={44} height={44} />)}
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
        item.score || null
      }

      <IconButton
        bordered={false}
        size="small"
        icon={open ? <SparkUpLine /> : <SparkDownLine />}

      />
    </div>
    {
      open && <div className={`${prefixCls}-rag-item-content`}>
        <div className={`${prefixCls}-rag-item-content-text`}>{item.content}</div>

        {
          item.images &&
          <div className={`${prefixCls}-rag-item-images`}>
            <Images images={item.images} />
          </div>
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
  const {
    title = '知识库检索',
    subTitle,
    defaultOpen = true,
    placeholder = '未查询到与提问相关知识库',
    query,
    queryTitle = '检索 Query：',
    images,
  } = props;
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');


  const children = props.list.length ? <OperateCard.LineBody>
    {
      props.list.map((item, index) => {
        return <Item key={index} item={item} />
      })
    }
  </OperateCard.LineBody> : <Flex align="center" justify="center" gap={8} className={`${prefixCls}-rag-empty-placeholder`}>
    <SparkWarningCircleFill /><span>{placeholder}</span>
  </Flex>

  return <OperateCard
    header={{
      icon: <SparkBookLine />,
      title: title,
      description: subTitle,
    }}
    body={{
      defaultOpen,
      children: <>
        {
          query ? <div className={`${prefixCls}-rag-query`}>
            <span className={`${prefixCls}-rag-query-title`}>{queryTitle}</span>
            {query}
          </div> : null
        }
        {
          images?.length ? <div className={`${prefixCls}-rag-query-images`}>
            <Images images={images} />
          </div> : null
        }
        {children}
      </>
    }}
  />
}