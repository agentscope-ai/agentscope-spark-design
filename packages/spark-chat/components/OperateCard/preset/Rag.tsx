import { OperateCard, useProviderContext, Markdown } from '@agentscope-ai/chat';
import { Empty, IconButton, Tag } from '@agentscope-ai/design';
import { SparkBookLine, SparkDownLine, SparkUpLine, SparkWarningCircleFill } from '@agentscope-ai/icons';
import { ConfigProvider, Flex, Image } from 'antd';
import { Locale } from "antd/es/locale";
import React from 'react';
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


  query: string;
  /**
   * @description 检索图片列表
   * @descriptionEn Query Images
   * @default []
   */
  images?: string[];
  filters?: string;
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
        item.score ? <Tag color="mauve" size="small" className={`${prefixCls}-rag-item-score`}>
          得分 <b>{item.score}</b>
        </Tag> : null
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
    images,
    query,
    filters
  } = props;
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');

  const children = <OperateCard.LineBody>

    <div>
      <div className={`${prefixCls}-rag-group-title`}>检索 Query</div>
      <div className={`${prefixCls}-rag-group-content`}>{query}</div>
    </div>

    {
      images?.length ? <div>
        <div className={`${prefixCls}-rag-group-title`}>检索图片</div>
        <div className={`${prefixCls}-rag-group-content ${prefixCls}-rag-group-content-images`}>
          <Images images={images} />
        </div>
      </div> : null
    }

    {
      filters ? <div>
        <div className={`${prefixCls}-rag-group-title`}>过滤条件</div>
        <div className={`${prefixCls}-rag-group-content`}>{filters}</div>
      </div> : null
    }



    {props.list.length ? <div><div className={`${prefixCls}-rag-group-title`}>Output</div>
      {
        props.list.map((item, index) => {
          return <Item key={index} item={item} />
        })
      }</div> : <>
      <div className={`${prefixCls}-rag-group-title`}>Output</div>
      <Flex align="center" justify="center" gap={8} className={`${prefixCls}-rag-empty-placeholder`}>
        <SparkWarningCircleFill /><span>{placeholder}</span>
      </Flex></>}
  </OperateCard.LineBody>;

  return <OperateCard
    header={{
      icon: <SparkBookLine />,
      title: title,
      description: subTitle,
    }}
    body={{
      defaultOpen,
      children: <div className={`${prefixCls}-rag-children`}>
        {children}
      </div>
    }}
  />
}