import {
  INodeDataInputParamItem,
  INodeDataOutputParamItem,
} from '@/types/work-flow';
import {
  autocompletion,
  CompletionContext,
  CompletionResult,
} from '@codemirror/autocomplete';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { Extension, StateEffect, StateField } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { vscodeDark, vscodeLight } from '@uiw/codemirror-theme-vscode';
import ReactCodeMirror from '@uiw/react-codemirror';
import React, { memo, useMemo } from 'react';
import './index.less';

export interface IScriptCodeMirrorProps {
  value: string;
  onChange: (value: string) => void;
  inputParams: INodeDataInputParamItem[];
  outputParams: INodeDataOutputParamItem[];
  language: 'javascript' | 'python';
  theme?: 'light' | 'dark';
  disabled?: boolean;
}

// 创建一个 StateEffect 来更新 IME 状态
const setIMEComposing = StateEffect.define<boolean>();

// 创建一个 StateField 来存储 IME 是否正在输入
const imeComposingField = StateField.define<boolean>({
  create: () => false,
  update(value:any, tr:any) {
    for (let effect of tr.effects) {
      if (effect.is(setIMEComposing)) {
        return effect.value;
      }
    }
    return value;
  },
});

const generateTypeDefinitions = (
  inputParams: INodeDataInputParamItem[],
  language: 'javascript' | 'python',
) => {
  if (language === 'javascript') {
    // generate input parameter type
    const inputTypeDef = inputParams
      .map((param) => `${param.key}: ${param.type}`)
      .join(',\n  ');

    return `type InputParams = {
  ${inputTypeDef}
};

function process(params: InputParams): void {
  const input = params;
  
  // Write your code here
  return output;
}`;
  } else {
    const inputTypeDef = inputParams
      .map((param) => `${param.key}: ${param.type}`)
      .join('\n  ');
    return `from typing import TypedDict, Dict, Any

class InputParams(TypedDict):
  ${inputTypeDef}

def process(params: InputParams):
    input = params
    
    # Write your code here
    return output`;
  }
};

const createCompletionSource = (inputParams: INodeDataInputParamItem[]) => {
  return (context: CompletionContext): CompletionResult | null => {
    // 检查 IME 是否正在输入
    const isComposing = context.state.field(imeComposingField, false);
    if (isComposing) {
      console.log('IME composing, blocking autocomplete');
      return null;
    }

    // 恢复原来的匹配逻辑：匹配任意单词字符
    const word = context.matchBefore(/\w*/);
    if (!word) return null;

    const completions = [
      ...inputParams.map((param) => ({
        label: `params.${param.key}`,
        type: 'variable',
        info: `Params parameter: ${param.key} (${param.type})`,
      })),
    ];

    return {
      from: word.from,
      options: completions,
    };
  };
};

// 创建 IME 事件监听扩展
const createIMEExtension = () => {
  let compositionEndTimer: NodeJS.Timeout | null = null;

  return EditorView.domEventHandlers({
    compositionstart(event, view) {
      console.log('compositionstart');
      // 清除之前的定时器
      if (compositionEndTimer) {
        clearTimeout(compositionEndTimer);
        compositionEndTimer = null;
      }
      // 设置 IME 正在输入
      view.dispatch({ effects: setIMEComposing.of(true) });
    },
    compositionend(event, view) {
      console.log('compositionend');
      // compositionend 后延迟一段时间再允许自动补全
      // 这样可以避免输入法上屏的瞬间触发自动补全
      compositionEndTimer = setTimeout(() => {
        view.dispatch({ effects: setIMEComposing.of(false) });
        compositionEndTimer = null;
      }, 150);
    },
  });
};

// create an extension to hide type definitions
const createHiddenTypeDefinitions = (
  typeDefinitions: string,
  onChange: (value: string) => void,
): Extension => {
  return EditorView.updateListener.of((update) => {
    if (update.docChanged) {
      // get the current document content
      const content = update.state.doc.toString();
      // remove the type definition part, only keep the user code
      const userCode =
        content.split('// Write your code here').pop()?.trim() || '';
      onChange(userCode);
    }
  });
};

export default memo(function ScriptCodeMirror(props: IScriptCodeMirrorProps) {
  const { theme = 'dark', inputParams, outputParams, language } = props;

  const typeDefinitions = useMemo(
    () => generateTypeDefinitions(inputParams, language),
    [inputParams, language],
  );

  const extensions = useMemo(() => {
    const baseExtensions = [
      imeComposingField, // IME 输入状态字段
      createIMEExtension(), // IME 事件监听
      autocompletion({
        override: [createCompletionSource(inputParams)],
        activateOnTyping: true, // 保持自动触发
      }),
      createHiddenTypeDefinitions(typeDefinitions, props.onChange),
    ];

    switch (language) {
      case 'javascript':
        return [...baseExtensions, javascript({ typescript: true })];
      case 'python':
        return [...baseExtensions, python()];
    }
  }, [language, inputParams, outputParams, typeDefinitions, props.onChange]);

  return (
    <ReactCodeMirror
      className="script-code-mirror"
      value={props.value}
      onChange={props.onChange}
      lang={language}
      extensions={extensions}
      readOnly={props.disabled}
      theme={theme === 'dark' ? vscodeDark : vscodeLight}
    />
  );
});
