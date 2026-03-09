import React from 'react';
import { Avatar } from 'antd';
import { useProviderContext } from '@agentscope-ai/chat';
import { SparkRightArrowLine } from '@agentscope-ai/icons';
import Style from './style';

export interface IWelcomePromptsProps {
  /**
   * @description 欢迎语
   * @descriptionEn Greeting text
   */
  greeting?: string | React.ReactElement;
  /**
   * @description 描述信息
   * @descriptionEn Description text
   */
  description?: string | React.ReactElement;
  /**
   * @description 头像
   * @descriptionEn Avatar
   */
  avatar?: string | React.ReactElement;
  /**
   * @description 提示语列表
   * @descriptionEn Prompt list
   */
  prompts?: (
    | { label?: string; value: string; icon?: React.ReactElement }
    | string
  )[];
  /**
   * @description 点击提示语时的回调
   * @descriptionEn Callback when a prompt is clicked
   */
  onClick?: (query: string) => void;
}

export default function WelcomePrompts(props: IWelcomePromptsProps) {
  const { greeting, avatar, description, prompts, onClick } = props;
  const prefixCls = useProviderContext().getPrefixCls('welcome-prompts');

  return <>
    <Style />
    <div className={prefixCls}>
      {avatar && (
        typeof avatar === 'string'
          ? <Avatar src={avatar} shape="square" size={64} />
          : avatar
      )}
      {greeting && <div className={`${prefixCls}-greeting`}>{greeting}</div>}
      {description && <div className={`${prefixCls}-description`}>{description}</div>}
      {prompts?.length > 0 && (
        <div className={`${prefixCls}-prompts`}>
          {prompts.map(item => {
            const prompt = typeof item === 'string'
              ? { label: item, value: item }
              : { ...item, label: item.label || item.value, value: item.value };

            return (
              <Prompt key={prompt.value} prompt={prompt} prefixCls={prefixCls} onClick={onClick} />
            );
          })}
        </div>
      )}
    </div>
  </>;
}

function Prompt(props: {
  prompt: { label: string; value: string; icon?: React.ReactElement };
  prefixCls: string;
  onClick?: (query: string) => void;
}) {
  const { prefixCls } = props;

  return (
    <div className={`${prefixCls}-prompt`} onClick={() => props.onClick?.(props.prompt.value)}>
      <img
        className={`${prefixCls}-prompt-icon`}
        src="https://img.alicdn.com/imgextra/i3/O1CN01822qqr1PVyaK7MYtn_!!6000000001847-2-tps-40-40.png"
        alt=""
      />
      <span className={`${prefixCls}-prompt-label`}>
        {props.prompt.label}
      </span>
      <SparkRightArrowLine />
    </div>
  );
}
