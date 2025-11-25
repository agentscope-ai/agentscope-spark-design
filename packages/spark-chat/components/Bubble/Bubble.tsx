import classnames from 'classnames';
import React from 'react';
import type { BubbleProps } from './interface';
import Style from './style/index';
import { Markdown, useProviderContext } from '@agentscope-ai/chat';
import Cards from './Cards';
import Spin from './Spin';
import Avatar from './Avatar';

export interface BubbleRef {
  /**
   * @description 气泡组件的原生DOM元素引用，用于直接操作DOM
   * @descriptionEn Native DOM element reference of the bubble component for direct DOM manipulation
   */
  nativeElement: HTMLElement;
}

export interface BubbleContextProps {
  /**
   * @description 气泡内容更新时的回调函数，用于触发重新渲染
   * @descriptionEn Callback function when bubble content updates for triggering re-render
   */
  onUpdate?: VoidFunction;
}

export const BubbleContext = React.createContext<BubbleContextProps>({});

const Bubble: React.FC<BubbleProps> = (props) => {

  const {
    isLast,
    className,
    rootClassName,
    style,
    classNames = {},
    styles = {},
    avatar,
    content = '',
    cards,
    msgStatus,
    id,
    role,
    // @ts-ignore
    variant,
  } = props;

  const placement = {
    'assistant': 'start',
    'user': 'end',
  }[role] || 'start'
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('bubble');

  const mergedCls = classnames(
    prefixCls,
    rootClassName,
    className,
    `${prefixCls}-${placement}`,
  );

  let contentNode;
  // @ts-ignore
  const isEmpty = !content?.length && !cards?.length;
  if (props.msgStatus === 'generating' && (isEmpty)) {
    contentNode = <Spin />
  } else {
    contentNode = content ? (
      <Markdown
        content={content as string}
        cursor={props.msgStatus === 'generating'}
      />
    ) : null
  }

  const isAssistant = placement === 'assistant' || placement === 'start';
  const variantClassname = `${prefixCls}-content-${variant || (isAssistant ? 'borderless' : 'filled')}`;
  let fullContent: React.ReactNode = (
    <div
      style={!isAssistant && contentNode ? { flexDirection: 'column-reverse' } : {}}
      className={`${prefixCls}-content-wrapper`}
    >
      <Cards cards={cards} id={id} isLast={isLast} className={classnames(
        `${prefixCls}-content`,
        `${prefixCls}-content-wrapper-card`,
        variantClassname,
        classNames.content,
      )} />

      {
        contentNode && <div
          style={{
            ...styles.content,
          }}
          className={classnames(
            `${prefixCls}-content`,
            `${prefixCls}-content-wrapper-card`,
            variantClassname,
            classNames.content,
          )}
        >
          {contentNode}
        </div>
      }
    </div>);

  return <>
    <Style />
    <div
      style={style}
      className={mergedCls}
      id={id}
      data-role={role}
    >
      {
        avatar && <Avatar
          avatar={avatar}
          msgStatus={msgStatus}
          isAssistant={isAssistant}
          prefixCls={prefixCls}
          className={classNames.avatar}
          style={styles.avatar}
        />
      }

      {fullContent}
    </div>
  </>
};


export default React.memo(Bubble);
