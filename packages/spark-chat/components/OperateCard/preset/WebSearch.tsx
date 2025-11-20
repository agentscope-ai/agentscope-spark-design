import { OperateCard, useProviderContext } from '@agentscope-ai/chat';
import { SparkSearchLine } from '@agentscope-ai/icons';
import classNames from 'classnames';


export interface IWebSearchProps {
  /**
   * @description 标题
   * @descriptionEn Title
   * @default '联网搜索'
   */
  title?: string;
  /**
   * @description 副标题
   * @descriptionEn Subtitle
   * @default ''
   */
  subTitle?: string;
  /**
   * @description 列表
   * @descriptionEn List
   * @default []
   */
  list: {
    title: string;
    subTitle?: string;
    link: string;
    icon: string;
  }[]
}
export default function (props: IWebSearchProps) {

  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');
  const { title = '联网搜索', subTitle } = props;


  return <OperateCard
    header={{
      icon: <SparkSearchLine />,
      title: title,
      description: subTitle,
    }}
    body={{
      defaultOpen: true,
      children: <OperateCard.LineBody>{
        props.list.map((item) => {
          return <div key={item.title} className={classNames({
            [`${prefixCls}-web-search-item`]: true,
          })} onClick={() => {
            window.open(item.link, '_blank');
          }}>
            <img className={`${prefixCls}-web-search-item-icon`} src={item.icon} alt={item.title} />

            <div className={`${prefixCls}-web-search-item-title`}>{item.title}</div>
            {
              item.subTitle && <div className={`${prefixCls}-web-search-item-subTitle`}>{item.subTitle}</div>
            }
          </div>
        })

      }</OperateCard.LineBody>
    }}
  />
}