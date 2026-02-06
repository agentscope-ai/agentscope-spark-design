import { SparkCheckCircleFill, SparkCheckCircleLine, SparkErrorCircleFill, SparkErrorCircleLine, SparkStopCircleFill, SparkStopCircleLine, SparkTrueLine, SparkWarningCircleFill, SparkWarningCircleLine } from '@agentscope-ai/icons';
import { useProviderContext } from '../Provider';
import Style from './style';
import classNames from 'classnames';
import { ButtonProps } from 'antd';
import { Button } from '@agentscope-ai/design';

export interface IStatusCardProps {
  /**
   * @description 标题
   * @descriptionEn Title
   */
  title: string | React.ReactNode;
  /**
   * @description 状态
   * @descriptionEn Status
   */
  status: 'success' | 'error' | 'warning' | 'info';
  /**
   * @description 描述
   * @descriptionEn Description
   */
  description?: string;
  /**
   * @description 图标
   * @descriptionEn Icon
   */
  icon?: React.ReactNode;
  /**
   * @description 子元素
   * @descriptionEn Children
   */
  children?: React.ReactNode;
}



function StatusCard(props: IStatusCardProps) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('status-card');

  const icon = props.icon || {
    'success': <SparkCheckCircleFill />,
    'error': <SparkErrorCircleFill />,
    'warning': <SparkStopCircleLine />,
    'info': <SparkWarningCircleFill />,
  }[props.status];


  return <>
    <Style />
    <div className={classNames(prefixCls, `${prefixCls}-${props.status}`)}>
      <div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-header-top`}>
          <div className={`${prefixCls}-header-icon`}>{icon}</div>
          <div className={`${prefixCls}-header-title`}>{props.title}</div>
        </div>
        {
          props.description && <div className={`${prefixCls}-header-description`}>{props.description}</div>
        }
      </div>
      {
        props.children && <div className={`${prefixCls}-body`}>{props.children}</div>
      }
    </div>
  </>
}


export interface IStatusCardHITLProps {
  /**
   * @description 标题
   * @descriptionEn Title
   */
  title: string | React.ReactNode;
  /**
   * @description 描述
   * @descriptionEn Description
   * @default '需要用户人工干预'
   */
  description?: string;
  /**
   * @description 等待按钮文本
   * @descriptionEn Wait Button Text
   * @default '我已完成，继续任务'
   */
  waitButtonText?: string;
  /**
   * @description 完成按钮文本
   * @descriptionEn Done Button Text
   * @default '用户已确认'
   */
  doneButtonText?: string;
  /**
   * @description 是否完成
   * @descriptionEn Done
   */
  done: boolean;
  /**
   * @description 完成回调
   * @descriptionEn Done Callback
   */
  onDone: () => void;
  /**
   * @description 操作按钮
   * @descriptionEn Actions
   */
  actions?: React.ReactNode;
}


StatusCard.HITL = function (props: IStatusCardHITLProps) {
  const { title = '需要用户人工干预', description, waitButtonText = '我已完成，继续任务', doneButtonText = '用户已确认' } = props;

  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('status-card');

  const button = props.actions !== undefined ? props.actions : (props.done ?
    <Button onClick={props.onDone} type="primary" disabled icon={<SparkTrueLine />}>{doneButtonText}</Button> :
    <Button onClick={props.onDone} type="primary" >{waitButtonText}</Button>);


  return <StatusCard
    status={props.done ? 'success' : 'info'}
    title={title}
  >
    {
      description || button ? <div className={`${prefixCls}-HITL`}>
        {
          description && <div className={`${prefixCls}-HITL-desc`}>{description}</div>
        }

        <div className={`${prefixCls}-HITL-button`}>
          {button}
        </div>
      </div> : null
    }
  </StatusCard>
}

export interface IStatusCardStatisticProps {
  /**
   * @description 统计数据
   * @descriptionEn Values
   */
  values: {
    title: string;
    value: string;
  }[];
}


StatusCard.Statistic = function (props: IStatusCardStatisticProps) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('status-card');

  return <div className={`${prefixCls}-statistic`}>
    {props.values.map(item => {
      return <div className={`${prefixCls}-statistic-item`}>
        <div className={`${prefixCls}-statistic-item-title`}>{item.title}</div>
        <div className={`${prefixCls}-statistic-item-value`}>{item.value}</div>
      </div>
    })}
  </div>
}


export default StatusCard;