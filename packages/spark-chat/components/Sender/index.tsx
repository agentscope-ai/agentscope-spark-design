import { Button, Flex, Input } from 'antd';
import classnames from 'classnames';
import { useMergedState } from 'rc-util';
import pickAttrs from 'rc-util/lib/pickAttrs';
import getValue from 'rc-util/lib/utils/get';
import React, { useState } from 'react';
import useProxyImperativeHandle from '../Util/hooks/use-proxy-imperative-handle';
import { useProviderContext } from '@agentscope-ai/chat';
import SenderHeader, { SendHeaderContext } from './SenderHeader';
import { ActionButtonContext } from './components/ActionButton';
import ClearButton from './components/ClearButton';
import LoadingButton from './components/LoadingButton';
import SendButton from './components/SendButton';
import SpeechButton from './components/SpeechButton';
import Style from './style';
import useSpeech, { type AllowSpeech } from './useSpeech';
import ModeSelect from './ModeSelect';
import type { InputRef as AntdInputRef, ButtonProps, GetProps } from 'antd';
import { SparkEnlargeLine, SparkShrinkLine } from '@agentscope-ai/icons';
import { IconButton } from '@agentscope-ai/design';

export type SubmitType = 'enter' | 'shiftEnter' | false;

type TextareaProps = GetProps<typeof Input.TextArea>;

export interface SenderComponents {
  input?: React.ComponentType<TextareaProps>;
}

export type ActionsRender = (
  ori: React.ReactNode,
  info: {
    components: {
      SendButton: React.ComponentType<ButtonProps>;
      ClearButton: React.ComponentType<ButtonProps>;
      LoadingButton: React.ComponentType<ButtonProps>;
    };
  },
) => React.ReactNode;

export interface SenderProps extends Pick<TextareaProps, 'placeholder' | 'onKeyPress' | 'onFocus' | 'onBlur'> {
  /**
   * @description 输入框的默认初始值，仅在非受控模式下生效
   * @descriptionEn Default initial value for the input field, only effective in uncontrolled mode
   */
  defaultValue?: string;

  /**
   * @description 输入框的当前值，用于受控组件模式
   * @descriptionEn Current value of the input field for controlled component mode
   */
  value?: string;

  /**
   * @description 是否显示回复中的加载状态，影响按钮和输入框的交互
   * @descriptionEn Whether to display loading state during reply, affects button and input interaction
   */
  loading?: boolean;
  /**
   * @description 是否将输入框设置为只读模式，禁止用户编辑
   * @descriptionEn Whether to set the input field to read-only mode, preventing user editing
   */
  readOnly?: boolean;

  /**
   * @description 消息提交的方式，影响发送按钮的行为和快捷键
   * @descriptionEn Method for message submission, affects send button behavior and keyboard shortcuts
   */
  submitType?: SubmitType;

  /**
   * @description 是否禁用整个发送器组件，包括输入框和按钮
   * @descriptionEn Whether to disable the entire sender component, including input field and buttons
   */
  disabled?: boolean;

  /**
   * @description 用户提交消息时的回调函数，接收消息内容作为参数
   * @descriptionEn Callback function when user submits a message, receives message content as parameter
   */
  onSubmit?: (message: string) => void;

  /**
   * @description 输入框值发生变化时的回调函数，用于实时处理用户输入
   * @descriptionEn Callback function when input value changes, for real-time processing of user input
   */
  onChange?: (
    value: string,
    event?: React.FormEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  /**
   * @description 用户取消操作时的回调函数，通常用于清空输入或重置状态
   * @descriptionEn Callback function when user cancels operation, usually for clearing input or resetting state
   */
  onCancel?: VoidFunction;

  /**
   * @description 键盘事件处理函数，用于自定义键盘快捷键和特殊按键行为
   * @descriptionEn Keyboard event handler for custom keyboard shortcuts and special key behaviors
   */
  onKeyDown?: React.KeyboardEventHandler<any>;
  /**
   * @description 语义化样式对象，用于精确控制不同区域的样式
   * @descriptionEn Semantic style object for precise control of different area styles
   */
  styles?: {
    prefix?: React.CSSProperties;
    input?: React.CSSProperties;
    actions?: React.CSSProperties;
  };
  /**
   * @description 自定义根容器的CSS类名，用于覆盖默认样式
   * @descriptionEn Custom CSS class name for the root container to override default styles
   */
  rootClassName?: string;
  /**
   * @description 语义化CSS类名，用于为不同区域添加自定义类名
   * @descriptionEn Semantic CSS class names for adding custom classes to different areas
   */
  classNames?: {
    prefix?: string;
    input?: string;
    actions?: string;
  };
  /**
   * @description 样式
   * @descriptionEn Style
   */
  style?: React.CSSProperties;

  /**
   * @description 类名
   * @descriptionEn Classname
   */
  className?: string;

  /**
   * @description 前缀 UI
   * @descriptionEn Prefix UI
   */
  prefix?: React.ReactNode | React.ReactNode[];
  /**
   * @description 头部 UI
   * @descriptionEn Header UI
   */
  header?: React.ReactNode;
  /**
   * @description 最大文本长度
   * @descriptionEn Max content length
   */
  maxLength?: number;
  /**
   * @description 是否可缩放
   * @descriptionEn scalable
   */
  scalable?: boolean;

  /**
   * @description 初始行数，默认 2，移动端使用建议设置 1 行
   * @descriptionEn Initial rows, default 2, recommend 1 for mobile
   */
  initialRows?: number;
  /**
   * @description 是否支持语音输入
   * @descriptionEn Allow speech input
   */
  allowSpeech?: boolean;
  // prefixCls?: string;
  // onPaste?: React.ClipboardEventHandler<HTMLElement>;
  // onPasteFile?: (file: File) => void;
  // components?: SenderComponents;
}

export type SenderRef = {
  nativeElement: HTMLDivElement;
} & Pick<AntdInputRef, 'focus' | 'blur'>;

function getComponent<T>(
  components: SenderComponents | undefined,
  path: string[],
  defaultComponent: React.ComponentType<T>,
): React.ComponentType<T> {
  return getValue(components, path) || defaultComponent;
}

const ForwardSender = React.forwardRef<SenderRef, SenderProps>((props, ref) => {
  const {
    styles = {},
    classNames = {},
    className,
    rootClassName,
    style,
    defaultValue,
    value,
    readOnly,
    submitType = 'enter',
    onSubmit,
    loading,
    onCancel,
    onChange,
    onFocus,
    onBlur,
    // @ts-ignore
    actions,
    onKeyPress,
    onKeyDown,
    disabled,
    header,
    // @ts-ignore
    onPaste,
    // @ts-ignore
    allowSpeech,
    // @ts-ignore
    onPasteFile,
    // @ts-ignore
    components,
    initialRows = 2,
    scalable,
    ...rest
  } = props as (SenderProps & { zoomable?: boolean });


  const zoomable = scalable;

  const [zoom, setZoom] = useState(zoomable ? false : undefined);

  const autoSize = React.useMemo(() => {
    return zoom ? { maxRows: 10, minRows: 10 } : { maxRows: 10, minRows: initialRows };
  }, [zoomable, zoom]);




  const { direction, getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('sender');

  const containerRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<AntdInputRef>(null);

  useProxyImperativeHandle(ref, () => ({
    nativeElement: containerRef.current!,
    focus: inputRef.current?.focus!,
    blur: inputRef.current?.blur!,
  }));

  const inputCls = `${prefixCls}-input`;

  const mergedCls = classnames(
    prefixCls,
    className,
    rootClassName,
    {
      [`${prefixCls}-rtl`]: direction === 'rtl',
      [`${prefixCls}-disabled`]: disabled,
    },
  );

  const actionBtnCls = `${prefixCls}-actions-btn`;
  const actionListCls = `${prefixCls}-actions-list`;

  const [innerValue, setInnerValue] = useMergedState(defaultValue || '', {
    value,
  });

  const triggerValueChange: SenderProps['onChange'] = (nextValue, event) => {
    setInnerValue(nextValue);

    if (onChange) {
      onChange(nextValue, event);
    }
  };

  const [speechPermission, triggerSpeech, speechRecording] = useSpeech((transcript) => {
    triggerValueChange(`${innerValue} ${transcript}`);
  }, allowSpeech);

  const InputTextArea = getComponent(components, ['input'], Input.TextArea);

  const domProps = pickAttrs(rest, {
    attr: true,
    aria: true,
    data: true,
  });

  const inputProps: typeof domProps = {
    ...domProps,
    ref: inputRef,
  };

  // ============================ Events ============================
  const triggerSend = () => {
    if (innerValue && onSubmit && !loading) {
      onSubmit(innerValue);
    }
  };

  const triggerClear = () => {
    triggerValueChange('');
  };

  // ============================ Submit ============================
  const isCompositionRef = React.useRef(false);

  const onInternalCompositionStart = () => {
    isCompositionRef.current = true;
  };

  const onInternalCompositionEnd = () => {
    isCompositionRef.current = false;
  };

  const onInternalKeyPress: TextareaProps['onKeyPress'] = (e) => {
    const canSubmit = e.key === 'Enter' && !isCompositionRef.current;

    // Check for `submitType` to submit
    switch (submitType) {
      case 'enter':
        if (canSubmit && !e.shiftKey) {
          e.preventDefault();
          triggerSend();
        }
        break;

      case 'shiftEnter':
        if (canSubmit && e.shiftKey) {
          e.preventDefault();
          triggerSend();
        }
        break;
    }

    if (onKeyPress) {
      onKeyPress(e);
    }
  };

  const onInternalPaste: React.ClipboardEventHandler<HTMLElement> = (e) => {
    // Get file
    const file = e.clipboardData?.files[0];
    if (file && onPasteFile) {
      onPasteFile(file);
      e.preventDefault();
    }

    onPaste?.(e);
  };

  // ============================ Focus =============================
  const onContentMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // If input focused but click on the container,
    // input will lose focus.
    // We call `preventDefault` to prevent this behavior
    if (e.target !== containerRef.current?.querySelector(`.${inputCls}`)) {
      e.preventDefault();
    }

    inputRef.current?.focus();
  };

  const prefix = React.useMemo(() => {
    const nodes = Array.isArray(props.prefix) ? [...props.prefix] : [props.prefix];

    if (zoomable) {
      nodes.push(
        <IconButton
          key="zoom"
          onClick={() => setZoom(!zoom)}
          bordered={false}
          icon={zoom ? <SparkShrinkLine /> : <SparkEnlargeLine />}
        />
      )
    }
    return nodes;
  }, [props.prefix, zoomable, zoom, allowSpeech])

  let actionNode: React.ReactNode = (
    <Flex className={`${actionListCls}-presets`}>
      {loading ? <LoadingButton /> : <SendButton />}
    </Flex>
  );

  if (typeof actions === 'function') {
    actionNode = actions(actionNode, {
      components: {
        SendButton,
        ClearButton,
        LoadingButton,
      },
    });
  } else if (actions) {
    actionNode = actions;
  }

  const contextValue = {
    prefixCls: actionBtnCls,
    onSend: triggerSend,
    onSendDisabled: !innerValue,
    onClear: triggerClear,
    onClearDisabled: !innerValue,
    onCancel,
    onCancelDisabled: !loading,
    onSpeech: () => triggerSpeech(false),
    onSpeechDisabled: !speechPermission,
    speechRecording,
    disabled,

  }

  return <>
    <Style />

    <div ref={containerRef} className={mergedCls} style={style}>
      {header && (
        <SendHeaderContext.Provider value={{ prefixCls }}>{header}</SendHeaderContext.Provider>
      )}

      <div className={`${prefixCls}-content`}>
        <InputTextArea
          {...inputProps}
          disabled={disabled}
          style={styles.input}
          className={classnames(inputCls, classNames.input)}
          autoSize={autoSize}
          value={innerValue.slice(0, props.maxLength || Number.MAX_SAFE_INTEGER)}
          onChange={(event) => {
            triggerValueChange(
              (event.target as HTMLTextAreaElement).value,
              event as React.ChangeEvent<HTMLTextAreaElement>,
            );
            triggerSpeech(true);
          }}
          onPressEnter={onInternalKeyPress}
          onCompositionStart={onInternalCompositionStart}
          onCompositionEnd={onInternalCompositionEnd}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onPaste={onInternalPaste}
          variant="borderless"
          readOnly={readOnly}
        />

        <div className={`${prefixCls}-content-bottom`}>
          {prefix.length > 0 && (
            <div
              className={classnames(
                `${prefixCls}-prefix`,
                classNames.prefix,
              )}
              style={styles.prefix}
            >
              <Flex gap={8}>
                {allowSpeech && <ActionButtonContext.Provider
                  value={contextValue}
                >
                  <SpeechButton />
                </ActionButtonContext.Provider>}
                {prefix}
              </Flex>
            </div>
          )}
          <div
            className={classnames(
              actionListCls,
              classNames.actions,
            )}
            style={styles.actions}
          >
            {
              props.maxLength ? <div className={`${actionListCls}-length`}>
                {innerValue.length}/{props.maxLength}
              </div> : null
            }
            <ActionButtonContext.Provider
              value={contextValue}
            >
              {actionNode}
            </ActionButtonContext.Provider>
          </div>
        </div>
      </div>
    </div>
  </>
});

type CompoundedSender = typeof ForwardSender & {
  Header: typeof SenderHeader;
  ModeSelect: typeof ModeSelect;
};

const Sender = ForwardSender as CompoundedSender;
Sender.Header = SenderHeader;
Sender.ModeSelect = ModeSelect;

export default Sender;
