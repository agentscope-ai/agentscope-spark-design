// @ts-nocheck
import { SparkEnterLine } from '@agentscope-ai/icons';
import { markdown } from '@codemirror/lang-markdown';
import { vscodeDark, vscodeLight } from '@uiw/codemirror-theme-vscode';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { ConfigProvider, theme } from 'antd';
import classNames from 'classnames';
import { Extension } from '@codemirror/state';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { useStyles } from './index.style';
import VarRender from './VarRender';
import VarSelectInput from './VarSelectInput';

/**
 * PromptsEditor 组件属性
 * 继承自 ReactCodeMirrorProps，支持传入 CodeMirror 的所有属性（如 height、width 等）
 */
export interface PromptsEditorProps extends Omit<ReactCodeMirrorProps, 'theme' | 'extensions'> {
  /**
   * @description 可以输入内容的最大长度
   * @descriptionEn Maximum length of input content
   */
  maxLength?: number;
  /**
   * @description 可以插入的变量列表
   * @descriptionEn Available variables for insertion
   */
  variables?: Array<{ code: string }>;
  /**
   * @description 新增变量的触发回调
   * @descriptionEn Callback function to create new variable
   */
  onCreate?: () => void;
  /**
   * @description 新增变量的按钮文本
   * @descriptionEn Text of the create variable button
   */
  createBtnText?: string;
  /**
   * @description 提示文本，传入 false 时隐藏提示
   * @descriptionEn Text of the tips, set to false to hide the tips
   */
  tipsText?: string | React.ReactNode | false;
  /**
   * @description 自定义扩展，会与内置扩展合并
   * @descriptionEn Custom extensions, will be merged with built-in extensions
   */
  extensions?: Extension[];
}

export const langExtensionsMap: Record<string, any[]> = {
  markdown: [markdown()],
};

const empty: Array<{ code: string }> = [];
const Editor = (props: PromptsEditorProps) => {
  const {
    // 自定义属性
    maxLength,
    variables = empty,
    onCreate,
    createBtnText = '+ 新增变量',
    tipsText,
    extensions: customExtensions,
    // CodeMirror 属性
    className,
    value,
    onChange,
    readOnly,
    basicSetup,
    // 剩余属性透传给 CodeMirror
    ...restProps
  } = props;

  const { styles } = useStyles();
  const [ready, setReady] = useState(false);
  const context = React.useContext(ConfigProvider.ConfigContext);
  const isDarkMode = context.theme?.algorithm === theme.darkAlgorithm;

  const getTheme = useMemo(() => {
    if (isDarkMode) {
      return vscodeDark;
    }
    return vscodeLight;
  }, [isDarkMode]);

  const extensions = useMemo(
    () => customExtensions || [
      ...langExtensionsMap['markdown'],
      ...VarRender,
      VarSelectInput(
        [...variables].map((item) => ({
          label: `/${item.code}`,
          info: item.label,
        })) || [],
        { onCreate, createBtnText },
      ),
    ],
    [variables, customExtensions, onCreate, createBtnText],
  );

  useEffect(() => {
    setReady(true);
    return () => {
      setReady(false);
    };
  }, []);

  const tips = React.useMemo(() => {
    if (tipsText === false) return <div className={styles.tips} />;
    return tipsText ? (
      tipsText
    ) : (
      <div className={styles.tips}>
        输入/&quot;/&quot;引用变量，支持 <SparkEnterLine size={16} /> 回车新增
      </div>
    );
  }, [tipsText, styles.tips]);

  if (!ready) return null;

  return (
    <div className={styles.root}>
      <CodeMirror
        key={getTheme}
        className={classNames(className, styles.cm, {
          [styles.onCreate]: onCreate,
        })}
        extensions={extensions}
        value={value}
        theme={getTheme}
        lang="markdown"
        onChange={onChange}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          highlightActiveLine: false,
          ...basicSetup,
        }}
        readOnly={readOnly}
        editable={!readOnly}
        {...restProps}
      />

      <div className={styles.footer}>
        {tips}
        {maxLength ? (
          <div>
            {value?.length || 0}/{maxLength}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default memo(Editor);
