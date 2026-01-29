// @ts-nocheck
import { SparkEnterLine } from '@agentscope-ai/icons';
import { markdown } from '@codemirror/lang-markdown';
import { vscodeDark, vscodeLight } from '@uiw/codemirror-theme-vscode';
import CodeMirror from '@uiw/react-codemirror';
import { ConfigProvider, theme } from 'antd';
import { createStyles } from 'antd-style';
import classNames from 'classnames';
import React, { memo, useEffect, useMemo, useState } from 'react';
import VarRender from './VarRender';
import VarSelectInput from './VarSelectInput';

const useStyles = createStyles(({ css, token }) => ({
  onCreate: css`
    .cm-tooltip li:last-of-type {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 40px;
      border-top: 1px solid ${token.colorBorderSecondary};
      border-radius: 0 !important;
      background-color: ${token.colorBgContainer} !important;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 !important;
    }

    .cm-tooltip ul {
      margin-bottom: 40px !important;
    }

    .cm-tooltip li:first-of-type {
      border-top: none !important;
    }
  `,

  cm: css`
    .cm-line {
      color: ${token.colorTextSecondary};
    }
    .cm-line span {
      color: ${token.colorBlue};
    }

    .cm-editor {
      position: absolute !important;
      background-color: transparent !important;

      top: 0;
      left: 8px;
      right: 0;
      bottom: 30px;
    }
    .cm-focused {
      outline: none;
    }

    .cm-content {
      width: 100%;
      padding: 8px 0;
      white-space: break-spaces;
    }

    .cm-line {
      line-height: 24px;
      height: auto !important;
    }

    .cm-prompt-var {
      font-size: inherit;
      color: ${token.colorPurple} !important;
      background-color: ${token.colorPurpleBg} !important;
      line-height: 1.7;
      font-weight: 500;
      margin: 0 2px;
      height: 24px;
      display: inline-flex;
      padding: 0 4px;
      border-radius: 4px;
    }

    .cm-tooltip {
      position: relative;
      background-color: ${token.colorBgContainer};
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0px 3px 12px 0px rgba(47, 49, 51, 0.12);
    }

    .cm-tooltip ul {
      max-height: 17em !important;
      display: flex;
      flex-direction: column;
    }

    .cm-tooltip li {
      margin: 4px 8px;
      height: 32px;
      padding: 0 12px !important;
      flex: 0 0 32px;
      display: flex;
      align-items: center;
    }

    .cm-tooltip-autocomplete ul li[aria-selected] {
      border-radius: 6px;
      font-weight: 600;
      color: ${token.colorText};
      background-color: ${token.colorFillSecondary};
    }

    .cm-completionInfo-right {
      display: none;
    }

    .cm-completionIcon {
      display: none;
    }
  `,

  root: {
    position: 'relative',
    minHeight: 300,
    backgroundColor: token.colorBgBase,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: 6,
    overflow: 'hidden',
    padding: '4px 12px',
    resize: 'vertical',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '0 12px',
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 12,
    color: token.colorTextTertiary,
    backgroundColor: token.colorBgBase,
  },
  tips: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
}));

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
  value: string;
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
    () => [
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
        className={classNames(styles.cm, {
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
      />

      <div className={styles.footer}>
        {tips}
        {props.maxLength ? (
          <div>
            {props.value.length}/{props.maxLength}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default memo(Editor);
