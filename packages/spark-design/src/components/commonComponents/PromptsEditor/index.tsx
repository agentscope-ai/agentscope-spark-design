// @ts-nocheck
import { SparkEnterLine } from '@agentscope-ai/icons';
import { markdown } from '@codemirror/lang-markdown';
import { vscodeDark, vscodeLight } from '@uiw/codemirror-theme-vscode';
import CodeMirror from '@uiw/react-codemirror';
import { ConfigProvider, theme } from 'antd';
import classNames from 'classnames';
import { Extension } from '@codemirror/state';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { useStyles } from './index.style';
import VarRender from './VarRender';
import VarSelectInput from './VarSelectInput';

export interface PromptsEditorProps {
  /**
   * @description 可以输入内容的最大长度
   * @descriptionEn Maximum length of input content
   */
  maxLength?: number;
  /**
   * @description 输入的内容
   * @descriptionEn Input content value
   */
  value?: string;
  /**
   * @description 输入内容的类名
   * @descriptionEn CSS class name for the input content
   */
  className?: string;
  /**
   * @description 输入内容的回调
   * @descriptionEn Callback function when input value changes
   */
  onChange?: (value: string) => void;
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
   * @description 仅可读
   * @descriptionEn Read only
   * @default false
   */
  readOnly?: boolean;
  /**
   * @description 自定义扩展
   * @descriptionEn Custom extensions
   */
  extensions?: Extension[];
}

export const langExtensionsMap: Record<string, any[]> = {
  markdown: [markdown()],
};

const empty = [];
const Editor = (props: PromptsEditorProps) => {
  const { styles } = useStyles();
  const variables = props.variables || empty;
  const [ready, setReady] = useState(false);
  const onCreate = props.onCreate;
  const context = React.useContext(ConfigProvider.ConfigContext);
  const isDarkMode = context.theme.algorithm === theme.darkAlgorithm;
  const createBtnText = props.createBtnText || '+ 新增变量';

  const getTheme = useMemo(() => {
    if (isDarkMode) {
      return vscodeDark;
    }
    return vscodeLight;
  }, [isDarkMode]);

  const extensions = useMemo(
    () => props.extensions || [
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
    [variables],
  );

  useEffect(() => {
    setReady(true);
    return () => {
      setReady(false);
    };
  }, []);

  const tips = React.useMemo(() => {
    if (props.tipsText === false) return <div className={styles.tips} />;
    return props.tipsText ? (
      props.tipsText
    ) : (
      <div className={styles.tips}>
        输入/&quot;/&quot;引用变量，支持 <SparkEnterLine size={16} /> 回车新增
      </div>
    );
  }, [props.tipsText]);

  if (!ready) return null;

  return (
    <div className={styles.root}>
      <CodeMirror
        key={getTheme}
        className={classNames(props.className, styles.cm, {
          [styles.onCreate]: onCreate,
        })}
        extensions={extensions}
        value={props.value}
        theme={getTheme}
        lang="markdown"
        onChange={props.onChange}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          highlightActiveLine: false,
        }}
        readOnly={props.readOnly}
        editable={!props.readOnly}
      />

      <div className={styles.footer}>
        {tips}
        {props.maxLength ? (
          <div>
            {props.value?.length || 0}/{props.maxLength}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default memo(Editor);
