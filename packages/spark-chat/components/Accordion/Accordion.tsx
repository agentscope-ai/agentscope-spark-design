import React, { useMemo, useRef } from 'react';
import cls from 'classnames';
import BodyContent from './BodyContent';
import SoftLightTitle from './SoftLightTitle';
import Style from './style';
import { useProviderContext } from '../Provider';
import { SparkCheckCircleFill, SparkErrorCircleFill, SparkDownLine, SparkUpLine, SparkLoadingLine, SparkStopCircleLine } from '@agentscope-ai/icons';
import { Transition } from 'react-transition-group';

export interface IAccordionProps {
  /**
   * @description 组件的当前执行状态，用于显示不同的图标和样式
   * @descriptionEn Current execution status of the component, used to display different icons and styles
   */
  status?: 'finished' | 'interrupted' | 'generating' | 'error';
  /**
   * @description 组件的标题内容，支持文本或React元素
   * @descriptionEn Title content of the component, supports text or React elements
   */
  title: string | React.ReactElement;
  /**
   * @description 组件展开时显示的主要内容
   * @descriptionEn Main content displayed when the component is expanded
   */
  children?: string | React.ReactElement;
  /**
   * @description 自定义图标，会覆盖默认的状态图标
   * @descriptionEn Custom icon that overrides the default status icon
   */
  icon?: string | React.ReactElement;
  /**
   * @description 是否显示图标与内容之间的连接线
   * @descriptionEn Whether to display the connecting line between the icon and content
   */
  iconLine?: boolean;
  /**
   * @description 组件的唯一标识符，用于React的key属性
   * @descriptionEn Unique identifier for the component, used for React's key prop
   */
  id?: string;
  /**
   * @description 显示在标题右侧的额外内容
   * @descriptionEn Additional content displayed on the right side of the title
   */
  rightChildren?: string | React.ReactElement;
  /**
   * @description 子步骤数组，支持递归嵌套结构
   * @descriptionEn Array of child steps, supports recursive nested structure
   */
  steps?: IAccordionProps[];
  /**
   * @description 组件初始化时是否默认展开
   * @descriptionEn Whether the component is expanded by default when initialized
   */
  defaultOpen?: boolean;
  /**
   * @description 受控模式：控制组件是否展开
   * @descriptionEn Controlled mode: controls whether the component is expanded
   */
  open?: boolean;
  /**
   * @description 内容区域的样式对象
   * @descriptionEn Style object for the content area
   */
  bodyStyle?: React.CSSProperties;
  /**
   * @description 是否使用内联模式，影响布局和交互方式
   * @descriptionEn Whether to use inline mode, affects layout and interaction behavior
   */
  inline?: boolean;
}


function Item(props: IAccordionProps) {
  const { getPrefixCls } = useProviderContext();

  const prefixCls = getPrefixCls('accordion-group');
  const [stateOpen, setStateOpen] = React.useState(props.defaultOpen);
  
  // 支持受控模式：如果提供了 open prop，则使用它；否则使用内部状态
  const isOpen = props.open !== undefined ? props.open : stateOpen;
  const status = props.inline ? 'close' : (isOpen ? 'open' : 'close');

  const icon = useMemo(() => {
    if (props.icon) return props.icon;
    if (props.status === 'generating') return <SparkLoadingLine className={`${prefixCls}-icon-loading`} spin />;
    if (props.status === 'finished') return <SparkCheckCircleFill className={`${prefixCls}-icon-success`} />;
    if (props.status === 'interrupted') return <SparkStopCircleLine />
    if (props.status === 'error') return <SparkErrorCircleFill className={`${prefixCls}-icon-error`} />;

  }, [props.status, props.icon]);


  const content = useMemo(() => {
    if (props.steps) {
      return props.steps.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === props.steps.length - 1;

        // @ts-ignore
        return <Item key={item.id || index} {...item} isFirst={isFirst} isLast={isLast} />
      })
    } else {
      return props.children
    }
  }, [props.steps, props.children]);


  return <div className={cls(`${prefixCls}`, `${prefixCls}-${status}`)}>
    <div
      className={cls(`${prefixCls}-header`, `${prefixCls}-header-${status}`)}
      onClick={() => content && props.open === undefined && setStateOpen(!stateOpen)}>
      {icon ? <div className={cls(`${prefixCls}-header-icon`, {
        [`${prefixCls}-header-icon-line`]: props.iconLine,
        // @ts-ignore
        [`${prefixCls}-header-icon-first`]: props.isFirst,
        // @ts-ignore
        [`${prefixCls}-header-icon-last`]: props.isLast && status === 'close' || props.level,
      })}>{icon}</div> : null}
      <div>
        {props.title}
      </div>
      {content && <div className={cls(`${prefixCls}-header-arrow`)}>
        {!isOpen ? <SparkDownLine /> : <SparkUpLine />}
      </div>}
      {<>
        <span style={{ flex: 1 }}></span>
        {props.rightChildren}
      </>}
    </div>

    <Children
      prefixCls={prefixCls}
      stateOpen={isOpen}
      status={status}
      inline={props.inline}
      content={content}
      bodyStyle={props.bodyStyle}
      // @ts-ignore
      level={props.level}
    />
  </div>
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function Children(props: any) {
  const nodeRef = useRef(null);
  if (!props.content) return null;

  const prefixCls = props.prefixCls;
  const stateOpen = props.stateOpen;
  const inline = props.inline;
  const bodyStyle = props.bodyStyle;
  const level = props.level;

  return <Transition nodeRef={nodeRef} in={stateOpen} timeout={300}>

    {state => (
      <div
        style={{
          ...bodyStyle,
          ...(level ? { marginTop: 0 } : {}),
          transition: `opacity ${300}ms ease-in-out`,
          ...transitionStyles[state]

        }}
        className={cls(`${prefixCls}-body`, `${prefixCls}-body-${stateOpen ? 'open' : 'close'}`, {
          [`${prefixCls}-body-inline`]: inline
        })}
      >
        {props.content}
      </div>
    )}


  </Transition>




}

function Accordion(props: IAccordionProps) {
  // @ts-ignore
  const { level = 1, isFirst = true, isLast = true } = props;
  return <>
    <Style />
    {/* @ts-ignore */}
    <Item {...props} level={level} isFirst={isFirst} isLast={isLast} />
  </>
}


Accordion.BodyContent = BodyContent;
Accordion.SoftLightTitle = SoftLightTitle

export default Accordion;