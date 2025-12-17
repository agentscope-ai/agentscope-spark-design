import { bailianDarkTheme, bailianTheme, getCommonConfig, ConfigProvider } from '@agentscope-ai/design';
import { cpp } from '@codemirror/lang-cpp';
import { css } from '@codemirror/lang-css';
import { go } from '@codemirror/lang-go';
import { html } from '@codemirror/lang-html';
import { java } from '@codemirror/lang-java';
import { javascript } from '@codemirror/lang-javascript';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { markdown } from '@codemirror/lang-markdown';
import { php } from '@codemirror/lang-php';
import { python } from '@codemirror/lang-python';
import { yaml } from '@codemirror/lang-yaml';
import { linter, lintGutter } from '@codemirror/lint';
import { vscodeDark, vscodeLight } from '@uiw/codemirror-theme-vscode';
import CodeMirror from '@uiw/react-codemirror';
import { theme } from 'antd';
import cls from 'classnames';
import { omit } from 'lodash-es';
import React, { useMemo } from 'react';
import { useStyle } from './index.style';

export interface CodeBlockProps {
  /**
   * @description 语言
   * @descriptionEn Language
   */
  language: string | string[];
  /**
   * @description 值
   * @descriptionEn Value
   */
  value: string;
  /**
   * @description 类名
   * @descriptionEn Class name
   */
  className?: string;
  /**
   * @description 主题
   */
  theme?: 'dark' | 'light';
  /**
   * @description 只读
   * @descriptionEn Read only
   */
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

export const langExtensionsMap: Record<string, any[]> = {
  javascript: [javascript()],
  jsx: [javascript()],
  python: [python()],
  json: [json()],
  java: [java()],
  yaml: [yaml()],
  php: [php()],
  go: [go()],
  csharp: [cpp()],
  css: [css()],
  html: [html()],
  curl: [],
  markdown: [markdown()],
};

const lintExtensionsMap = {
  javascript: [lintGutter()],
  // @ts-ignore
  json: [lintGutter(), linter(jsonParseLinter())],
};

export const beautifulJson = (val: string = '{}', count = 2) => {
  let finalVal = val;
  try {
    finalVal = JSON.stringify(JSON.parse(val), null, count);
  } catch {}
  return finalVal;
};

const CodeMirrorWrapper = (props: CodeBlockProps) => {
  const commonConfig = getCommonConfig();
  const context = React.useContext(ConfigProvider.ConfigContext);
  const isDarkMode = context.theme?.algorithm === theme.darkAlgorithm;
  const { sparkPrefix } = commonConfig;
  
  const Style = useStyle();

  const getTheme = useMemo(() => {
    if (props.theme === undefined) {
      if (isDarkMode) {
        return vscodeDark;
      }
      return vscodeLight;
    }
    return props.theme === 'dark' ? vscodeDark : vscodeLight;
  }, [isDarkMode, props.theme]);

  const extensions =
    typeof props.language === 'string'
      ? [
          ...(langExtensionsMap[props.language] || []),
          ...(props.value && props.language in lintExtensionsMap
            ? lintExtensionsMap[props.language]
            : []),
        ]
      : props.language.reduce(
          (ext, lang) => [...ext, langExtensionsMap[lang]],
          [],
        );

  const codeMirrorElement = (
    <div className={cls(`${sparkPrefix}-code-block`, props.className)}>
      <CodeMirror
        extensions={extensions}
        value={
          props.language === 'json' ? beautifulJson(props.value) : props.value
        }
        theme={getTheme}
        {...omit(props, ['language', 'theme', 'extensions', 'value'])}
      />
    </div>
  );

  if (props.theme !== undefined) {
    const selectedTheme = props.theme === 'dark' ? bailianDarkTheme : bailianTheme;
    
    return (
      <>
        <ConfigProvider {...selectedTheme}>
          <Style />
          {codeMirrorElement}
        </ConfigProvider>
      </>
    );
  }

  return (
    <>
      <Style />
      {codeMirrorElement}
    </>
  );
};

export default CodeMirrorWrapper;
