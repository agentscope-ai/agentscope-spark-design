import { useState } from 'react';
import { useProviderContext } from '../Provider';
import Style from './style';
import classNames from 'classnames';
import { SparkDownLine, SparkUpLine } from '@agentscope-ai/icons';
import { IconButton } from '@agentscope-ai/design';


export interface IOperateCardProps {
  /**
   * @description 头部配置
   * @descriptionEn Header Config
   * @default {}
   */
  header: {
    className?: string;
    style?: React.CSSProperties;
    icon: React.ReactNode;
    title: React.ReactNode | string;
    description?: React.ReactNode | string;
  },
  /**
   * @description 内容配置
   * @descriptionEn Body Config
   * @default {}
   */
  body?: {
    children?: React.ReactNode;
    defaultOpen?: boolean;
  }
}

function LineBody(props: {
  children?: React.ReactNode;
}) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');
  return <>
    <div className={`${prefixCls}-line-body`}>
      {props.children}
    </div>
  </>
}


function OperateCard(props: IOperateCardProps) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');
  const [open, setOpen] = useState(props.body?.defaultOpen || false);

  return <>
    <Style />
    <div className={prefixCls}>
      <div className={classNames(`${prefixCls}-header`, props.header.className, {
        [`${prefixCls}-header-has-body`]: props.body
      })} onClick={() => {
        if (props.body) {
          setOpen(!open)
        }
      }}>
        <div className={`${prefixCls}-header-icon`}>
          {props.header.icon}
        </div>
        {
          typeof props.header.title === 'string' ? <div className={`${prefixCls}-header-title`}>{props.header.title}</div> : props.header.title
        }
        {
          props.header.description && <div className={`${prefixCls}-header-description`}>
            {props.header.description}
          </div>
        }

        {
          props.body && <IconButton
            size="small"
            bordered={false}
            className={`${prefixCls}-header-arrow`}
            icon={open ? <SparkUpLine /> : <SparkDownLine />}
          />
        }
      </div>
      {
        props.body && open && <div className={`${prefixCls}-body`}>
          {props.body.children}
        </div>
      }
    </div >
  </>
}

OperateCard.LineBody = LineBody;

export default OperateCard;