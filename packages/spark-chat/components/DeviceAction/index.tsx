
import { OperateCard, useProviderContext } from '@agentscope-ai/chat';
import { ConfigProvider, Image } from 'antd';
import { Locale } from 'antd/es/locale';
import actionMap from './actionMap';

export interface IDeviceActionProps {
  /**
   * @description 时间
   * @descriptionEn Time
   * @default ''
   */
  time?: string;
  /**
   * @description 动作
   * @descriptionEn Action
   * @default ''
   */
  action: 'Click' | 'Swipe' | 'Type' | 'Back' | 'Home' | 'Done' | 'Wait' | 'click' | 'right click' | 'open app' | 'computer_double_click' | 'hotkey' | 'presskey' | 'scroll' | 'drag' | 'type_with_clear_enter_pos' | 'triple_click' | 'drag_end' | 'type' | 'hscroll' | 'done' | 'wait' | 'call_user',
  /**
   * @description 动作名称，通常不用传入，会根据 action 自动生成
   * @descriptionEn Action Name, usually not passed in, will be generated automatically based on action
   * @default ''
   */
  actionName?: string;
  /**
   * @description 描述
   * @descriptionEn Description
   * @default ''
   */
  description: string;
  /**
   * @description 操作截图
   * @descriptionEn Operation Screenshot
   * @default ''
   */
  image?: string;
}


export default function (props: IDeviceActionProps) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');


  return <div>
    <div className={`${prefixCls}-device-action-time`}>{props.time}</div>

    <OperateCard header={{
      className: `${prefixCls}-device-action`,
      icon: <div className={`${prefixCls}-device-action-icon`}>{actionMap[props.action]?.icon}</div>,
      title: <div className={`${prefixCls}-device-action-content`}>
        <div className={`${prefixCls}-device-action-description`}>
          <span>
            {props.actionName || actionMap[props.action]?.name}
          </span>
          <span>
            {props.description}
          </span>
        </div>

        <div className={`${prefixCls}-device-action-image`} >
          <ConfigProvider
            locale={{
              Image: { preview: '' }
            } as Locale}
          >
            <Image src={props.image} alt={props.description} width={'100%'} height={'100%'} />

          </ConfigProvider>
        </div>
      </div>,
    }} />
  </div>;
}