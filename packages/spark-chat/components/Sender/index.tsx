import { Button, Flex, Input } from 'antd';
import { Suggestion } from '@ant-design/x';
import classnames from 'classnames';
import { useMergedState } from 'rc-util';
import pickAttrs from 'rc-util/lib/pickAttrs';
import getValue from 'rc-util/lib/utils/get';
import React, { useState } from 'react';
import { useFocusWithin, useEventListener } from 'ahooks';
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
import type { InputRef as AntdInputRef, ButtonProps, GetProp, GetProps } from 'antd';
import BeforeUIContainer from './BeforeUIContainer';


export type SubmitType = 'enter' | 'shiftEnter' | false;

type TextareaProps = GetProps<typeof Input.TextArea>;
type SuggestionItems = Exclude<GetProp<typeof Suggestion, 'items'>, () => void>;

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

export interface SenderProps extends Pick<TextareaProps, 'placeholder' | 'onKeyPress'> {
  /**
   * @description 建议列表
   * @descriptionEn Suggestions list
   * @example [
   *   { label: 'Draw a picture', value: 'draw' },
   *   { label: 'Check some knowledge', value: 'knowledge' },
   * ]
   */
  suggestions?: { label?: string | React.ReactNode; value: string }[];


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
  loading?: boolean | string;
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
  disabled?: boolean | string;

  /**
   * @description 是否禁用发送按钮
   * @descriptionEn Whether to disable the send button
   */
  sendDisabled?: boolean;

  /**
   * @description 是否允许在输入框为空时触发发送
   * @descriptionEn Whether to allow sending when input is empty
   */
  allowEmptySubmit?: boolean;

  /**
   * @description 是否启用用户focus时展开输入框组件
   * @descriptionEn Whether to enable the user focus to expand the input box component
   */
  enableFocusExpand?: boolean;

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
   * @description 用户blur时回调函数
   * @descriptionEn Callback function when user blurs
   */
  onBlur?: VoidFunction;
  /**
   * @description 用户focus时回调函数
   * @descriptionEn Callback function when user focuses
   */
  onFocus?: VoidFunction;
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
   * @description 是否支持语音输入
   * @descriptionEn Allow speech input
   */
  allowSpeech?: boolean;
  /**
   * @description 粘贴事件处理函数
   * @descriptionEn Paste event handler
   */
  onPaste?: React.ClipboardEventHandler<HTMLElement>;
  /**
   * @description 粘贴文件时的回调函数，当用户粘贴文件时触发
   * @descriptionEn Callback function when user pastes a file
   */
  onPasteFile?: (file: File) => void;
  // prefixCls?: string;
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

function getSlashCommandKeyword(inputValue: string): string | null {
  if (!inputValue.startsWith('/')) {
    return null;
  }

  const contentAfterSlash = inputValue.slice(1);
  if (!contentAfterSlash) {
    return '';
  }

  // Only keep suggestion mode before the first whitespace.
  if (/\s/.test(contentAfterSlash)) {
    return null;
  }

  return contentAfterSlash.trim().toLowerCase();
}

function filterSuggestionsByKeyword(
  suggestions: SenderProps['suggestions'] | undefined,
  keyword: string | null,
): SuggestionItems | undefined {
  if (!Array.isArray(suggestions) || suggestions.length === 0) {
    return suggestions as SuggestionItems | undefined;
  }

  if (keyword === null || keyword === '') {
    return suggestions as SuggestionItems;
  }

  return suggestions.filter((item) => {
    const valueText = typeof item.value === 'string' ? item.value.toLowerCase() : '';
    const labelText =
      typeof item.label === 'string' || typeof item.label === 'number'
        ? String(item.label).toLowerCase()
        : '';

    return valueText.includes(keyword) || labelText.includes(keyword);
  }) as SuggestionItems;
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
    enableFocusExpand = false,
    sendDisabled = false,
    allowEmptySubmit = false,
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
    suggestions,
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
    ...rest
  } = props;

  const [focus, setFocus] = useState(false);
  const autoSize = React.useMemo(() => ({ maxRows: 5, minRows: 2 }), []);

  const { direction, getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('sender');

  const containerRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<AntdInputRef>(null);

  useProxyImperativeHandle(ref, () => ({
    nativeElement: containerRef.current!,
    focus: inputRef.current?.focus!,
    blur: inputRef.current?.blur!,
  }));

  useFocusWithin(containerRef, {
    onFocus: (e) => {
      setFocus(true);
      onFocus?.();
    },
    onBlur: () => {
      if (containerRef.current && !containerRef.current.contains(document.activeElement)) {
        setFocus(false);
        onBlur?.();
      }
    }
  });

  useEventListener('click', (e) => {
    setFocus(true);
    onFocus?.();
  }, {
    target: containerRef,
  });

  const inputCls = `${prefixCls}-input`;

  const mergedCls = classnames(
    prefixCls,
    className,
    rootClassName,
    {
      [`${prefixCls}-rtl`]: direction === 'rtl',
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-focus`]: focus && enableFocusExpand,
      [`${prefixCls}-blur`]: !focus && enableFocusExpand,
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
  const hasSuggestions = Array.isArray(suggestions) && suggestions.length > 0;
  const slashCommandKeyword = React.useMemo(() => getSlashCommandKeyword(innerValue), [innerValue]);

  const filteredSuggestions = React.useMemo(() => {
    return filterSuggestionsByKeyword(suggestions, slashCommandKeyword);
  }, [suggestions, slashCommandKeyword]);
  const hasFilteredSuggestions = Array.isArray(filteredSuggestions) && filteredSuggestions.length > 0;

  const findSuggestionValueByLabel = React.useCallback((items: SuggestionItems | undefined, label: string): string | undefined => {
    if (!items?.length) {
      return undefined;
    }

    for (const item of items as any[]) {
      if (!item || typeof item !== 'object') {
        continue;
      }

      if (item.label === label && typeof item.value === 'string') {
        return item.value;
      }

      const childValue = findSuggestionValueByLabel(item.children, label);
      if (childValue) {
        return childValue;
      }
    }

    return undefined;
  }, []);

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
    if (!contextValue.onSendDisabled && onSubmit && !loading) {
      onSubmit(innerValue);
    }
  };

  const triggerClear = () => {
    triggerValueChange('');
  };

  // ============================ Submit ============================
  const isCompositionRef = React.useRef(false);
  const suggestionOpenRef = React.useRef(false);

  const onInternalCompositionStart = () => {
    isCompositionRef.current = true;
  };

  const onInternalCompositionEnd = (e: React.CompositionEvent<HTMLTextAreaElement>) => {
    isCompositionRef.current = false;
    if (props.maxLength) {
      const currentValue = (e.target as HTMLTextAreaElement).value;
      if (currentValue.length > props.maxLength) {
        triggerValueChange(currentValue.slice(0, props.maxLength));
      }
    }
  };

  const onInternalPressEnter: TextareaProps['onPressEnter'] = (e) => {
    const canSubmit = !isCompositionRef.current && !suggestionOpenRef.current;

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
  };

  const onInternalPaste: React.ClipboardEventHandler<HTMLElement> = (e) => {
    if (!onPasteFile) {
      onPaste?.(e);
      return;
    }
    // Try to get files from clipboardData.files
    let files = Array.from(e.clipboardData?.files || []);
    if (files.length === 0) {
      const items = Array.from(e.clipboardData?.items || []);
      files = items
        .filter(item => item.kind === 'file')
        .map(item => item.getAsFile())
        .filter((file): file is File => file !== null);
    }
    if (files.length > 0) {
      files.forEach(file => onPasteFile(file));
      e.preventDefault();
    } else {
      onPaste?.(e);
    }
  };

  const prefix = React.useMemo(() => {
    const nodes = Array.isArray(props.prefix) ? [...props.prefix] : [props.prefix];
    return nodes.filter((node): node is React.ReactNode => node !== undefined && node !== null);
  }, [props.prefix])

  let actionNode: React.ReactNode = (
    <Flex className={`${actionListCls}-presets`}>
      {loading ? <LoadingButton loading={loading} disabled={!!disabled} /> : <SendButton disabled={!!disabled} />}
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
    onSendDisabled: ((!innerValue || !innerValue.trim()) && !allowEmptySubmit) || sendDisabled,
    onClear: triggerClear,
    onClearDisabled: !innerValue,
    onCancel,
    onCancelDisabled: !loading,
    onSpeech: () => triggerSpeech(false),
    onSpeechDisabled: !speechPermission,
    speechRecording,
    disabled: !!disabled,

  }

  const renderInput = (
    suggestionProps?: {
      onTrigger?: (open?: boolean) => void;
      onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
      open?: boolean;
    },
  ) => {
    suggestionOpenRef.current = !!suggestionProps?.open;

    return (
      <InputTextArea
        {...inputProps}
        disabled={!!disabled}
        style={styles.input}
        className={classnames(inputCls, classNames.input)}
        autoSize={autoSize}
        value={innerValue.slice(0, props.maxLength || Number.MAX_SAFE_INTEGER)}
        onChange={(event) => {
          let nextValue = (event.target as HTMLTextAreaElement).value;
          if (props.maxLength && !isCompositionRef.current && nextValue.length > props.maxLength) {
            nextValue = nextValue.slice(0, props.maxLength);
          }
          triggerValueChange(
            nextValue,
            event as React.ChangeEvent<HTMLTextAreaElement>,
          );

          if (hasSuggestions) {
            const nextSlashCommandKeyword = getSlashCommandKeyword(nextValue);
            const nextFilteredSuggestions = filterSuggestionsByKeyword(suggestions, nextSlashCommandKeyword);
            const nextHasFilteredSuggestions =
              Array.isArray(nextFilteredSuggestions) && nextFilteredSuggestions.length > 0;

            if (nextSlashCommandKeyword !== null && nextHasFilteredSuggestions) {
              suggestionProps?.onTrigger?.(true);
            } else {
              suggestionProps?.onTrigger?.(false);
            }
          }

          triggerSpeech(true);
        }}
        onKeyPress={onKeyPress}
        onPressEnter={onInternalPressEnter}
        onCompositionStart={onInternalCompositionStart}
        onCompositionEnd={onInternalCompositionEnd}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && suggestionProps?.open && hasSuggestions) {
            const root = containerRef.current?.ownerDocument;
            const selectedMenuItem = root?.querySelector('[role="menuitemcheckbox"][aria-checked="true"]');
            const activeMenuItem = root?.querySelector('[role="menuitem"][aria-current="true"]');
            const menuItem =
              (selectedMenuItem instanceof HTMLElement && selectedMenuItem) ||
              (activeMenuItem instanceof HTMLElement && activeMenuItem) ||
              null;
            const itemValueByPath = menuItem?.getAttribute('data-path-key');
            const itemLabel = menuItem?.getAttribute('title')?.trim();
            const itemValueByLabel = itemLabel ? findSuggestionValueByLabel(suggestions as SuggestionItems, itemLabel) : undefined;
            const selectedValue = itemValueByLabel || itemValueByPath;

            if (selectedValue) {
              event.preventDefault();
              event.stopPropagation();
              triggerValueChange(`/${selectedValue} `);
              suggestionProps.onTrigger?.(false);
              return;
            }
          }

          suggestionProps?.onKeyDown?.(event);
          onKeyDown?.(event);
        }}
        onPaste={onInternalPaste}
        variant="borderless"
        readOnly={readOnly}
      />
    );
  };

  return <>
    <Style />

    <div ref={containerRef} className={mergedCls} style={style}>
      {header && (
        <SendHeaderContext.Provider value={{ prefixCls, focus, enableFocusExpand }}>{header}</SendHeaderContext.Provider>
      )}

      <div className={`${prefixCls}-content`}>
        {hasSuggestions ? (
          <Suggestion
            items={filteredSuggestions}
            onSelect={(itemValue) => {
              triggerValueChange(`/${itemValue} `);
            }}
          >
            {(suggestionProps) => renderInput(suggestionProps)}
          </Suggestion>
        ) : renderInput()}

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
                {Math.min(innerValue.length, props.maxLength)}/{props.maxLength}
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
  BeforeUIContainer: typeof BeforeUIContainer;
};

const Sender = ForwardSender as CompoundedSender;
Sender.Header = SenderHeader;
Sender.ModeSelect = ModeSelect;
Sender.BeforeUIContainer = BeforeUIContainer;

export default Sender;
