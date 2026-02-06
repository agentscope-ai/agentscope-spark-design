import $i18n from '@/i18n';
import { message } from 'antd';
import cls from 'classnames';
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  BaseSelection,
  Descendant,
  Editor,
  Node,
  Path,
  createEditor,
} from 'slate';
import { withHistory } from 'slate-history';
import { Editable, RenderLeafProps, Slate, withReact } from 'slate-react';
import { useStyle } from './index.style';
import {
  BizRenderElementProps,
  CustomElement,
  ITagRule,
  InsertNodesOptions,
  WrapNodesOptions,
} from './types';
import {
  findNodePath,
  getEditorText,
  insertNodes,
  serialize,
  setCursorRemove,
  setEditorContent,
  setNodes,
  text2json,
  transformTagRules,
  transformVarText,
  withEditor,
  wrapNodes,
  wrapSpeakTag,
} from './utils';

export interface EditorProps {
  value?: string;
  wordLimit?: number;
  disabled?: boolean;
  onChange?: (value?: string) => void;
  className?: string;
  tagRules?: ITagRule[];
  onBlur?: () => void;
  onFocus?: () => void;
  placeholder?: string;
  onKeyDown?: (val: any) => void;
  variables?: Array<{ code: string; label?: string }>;
  contentClassName?: string;
  renderVarLabel?: (code: string) => React.ReactNode;
}

export interface EditorRefProps {
  editor: Editor;
  getEditorValue: () => string;
  _insertNodes: (element?: CustomElement, options?: InsertNodesOptions) => void;
  _wrapNodes: (element?: CustomElement, options?: WrapNodesOptions) => void;
  _setNodes: (nodeProps: Partial<Node>, options: { at: Path }) => void;
  _setEditorContent: (nodes?: Node[]) => void;
  _findNodePath: (ele?: Node) => Path | undefined;
  _serialize: (value: Descendant[], options?: any) => string;
  _generateTextBySelection: (options?: any) => string | null;
  _insertFragment: (val: string, forceRemove: boolean) => void;
  _setEditorContentByStr: (val: string) => void;
}

const SlateEditor = forwardRef<EditorRefProps | undefined, EditorProps>(
  (props, ref) => {
    const Style = useStyle();
    const {
      value: initText,
      wordLimit = 1000,
      disabled: readOnly,
      onChange: onValueChange,
      variables,
    } = props;
    const initRef = useRef(false);
    const tagRulesRef = useRef(transformTagRules(props.tagRules));
    const editor = useMemo(
      () =>
        withEditor(
          withReact(withHistory(createEditor())),
          wordLimit,
          tagRulesRef.current,
        ),
      [],
    );
    const cacheSelection = useRef(
      editor.selection as BaseSelection | undefined,
    );
    const cacheVariables = useRef(variables);

    useEffect(() => {
      tagRulesRef.current = transformTagRules(props.tagRules);
    }, [props.tagRules]);

    useEffect(() => {
      cacheVariables.current = variables;
    }, [variables]);

    useEffect(() => {
      if (!initRef.current) {
        initRef.current = true;
        return;
      }
      // @ts-ignore
      editor.maxLength = wordLimit;
      const text = getEditorValue();
      _setEditorContent(
        text2json(transformVarText(text?.slice(0, wordLimit)))?.[0]
          ?.children || [{ type: 's', children: [{ text: '' }] }],
      );
    }, [wordLimit]);

    useImperativeHandle(ref, () => ({
      editor,
      getEditorValue,
      _insertNodes,
      _setNodes,
      _setEditorContent,
      _findNodePath,
      _wrapNodes,
      _serialize,
      _generateTextBySelection,
      _insertFragment: insertFragment,
      _setEditorContentByStr,
    }));

    // 初始化参数
    const { initValue } = useMemo(() => {
      const editorJsonValue = text2json(
        wrapSpeakTag(transformVarText(initText)),
      );
      let initValue;
      if (editorJsonValue) {
        if (editorJsonValue[0].type === 'speak') {
          initValue = editorJsonValue[0].children;
        } else {
          initValue = editorJsonValue;
        }
      }

      return {
        initValue,
      };
    }, [initText]);

    const [value, setValue] = useState<Descendant[]>(
      initValue || [{ type: 's', children: [{ text: '' }] }],
    );

    const onChange = (newValue: Descendant[]) => {
      if (
        JSON.stringify(editor?.selection || '') !==
        JSON.stringify(cacheSelection.current || '')
      )
        cacheSelection.current = editor?.selection;
      const newText = getEditorValue();
      if (initText === newText) return;
      onValueChange?.(getEditorValue());
      setValue(newValue);
    };

    const renderElement = (bizProps: BizRenderElementProps) => {
      const { type } = bizProps.element as any;
      const TagEle = tagRulesRef.current[type].render;
      if (TagEle) {
        return <TagEle {...bizProps} renderVarLabel={props.renderVarLabel} />;
      }
      return <></>;
    };

    const renderLeaf = useCallback((props: RenderLeafProps) => {
      const { attributes, children, leaf } = props;

      // 给末尾的空叶子结点增加边距，使光标容易停留
      return (
        <span
          {...attributes}
          style={{ paddingLeft: leaf.text === '' ? '3px' : undefined }}
        >
          {children}
        </span>
      );
    }, []);

    // Element元素末尾输入法输入问题处理
    const onCompositionStart = () => {
      isInputChinese = true;
    };

    const onCompositionEnd = () => {
      isInputChinese = false;
    };

    const getEditorValue: (options?: Record<string, any>) => string = (
      options = {},
    ) => {
      return getEditorText(editor, {
        ...options,
        tagRules: tagRulesRef.current,
      });
    };

    const _setNodes = (nodeProps: Partial<Node>, options: { at: Path }) => {
      setNodes(editor, nodeProps, options);
    };

    const _insertNodes = (element?: any, options: InsertNodesOptions = {}) => {
      insertNodes(editor, element, {
        ...options,
        rules: tagRulesRef.current,
      });
    };

    const _wrapNodes = (element?: any, options: WrapNodesOptions = {}) => {
      wrapNodes(editor, element, {
        ...options,
        rules: tagRulesRef.current,
      });
    };

    const _setEditorContent = (nodes: Node[] = []) => {
      setEditorContent(editor, nodes);
    };

    const _setEditorContentByStr = (str = '') => {
      _setEditorContent(
        text2json(transformVarText(str?.slice(0, wordLimit)))?.[0]
          ?.children || [{ type: 's', children: [{ text: '' }] }],
      );
    };

    const _findNodePath = (ele?: Node) => {
      return findNodePath(editor, ele);
    };

    const _serialize = (value: Descendant[], options: any = {}) => {
      return serialize(value, {
        ...options,
        tagRules: tagRulesRef.current,
      });
    };

    const _generateTextBySelection = (options: any = {}) => {
      if (!editor.selection) return null;
      const fragment = Node.fragment(editor, editor.selection);
      return serialize(fragment, { ...options, tagRules: tagRulesRef.current });
    };

    const insertFragment = (val: string, forceRemove = false) => {
      const preText = getEditorValue();
      if (preText.length >= wordLimit) {
        message.warning(
          $i18n.get({
            id: 'components.commonComponents.SlateEditor.TheNumberOfWordsCannot',
            dm: '字数不能超过{wordLimit}字',
          }),
        );
        return;
      }
      if (!editor.selection || forceRemove) {
        setCursorRemove(editor);
      }
      const hasBreak = preText.endsWith('/n');
      if (forceRemove && !!preText && !hasBreak) {
        editor.insertBreak();
      }
      let newText = val.slice(0, wordLimit - preText.length);
      const nodes = text2json(transformVarText(newText)) || [];
      nodes[0]?.children.forEach((item, index) => {
        if (index !== 0) {
          editor.insertBreak();
        }
        item.children?.forEach((vItem) => {
          if (vItem.text) {
            editor.insertText(vItem.text);
          } else {
            _insertNodes(vItem);
          }
        });
      });
    };

    useEffect(() => {
      const newText = getEditorValue();
      if (initText === newText) return;
      onValueChange?.(getEditorValue());
    }, []);

    const handlePaste = (e) => {
      const pastedText = e.clipboardData.getData('text/plain');
      // 将 CRLF 转换为 LF，处理 Windows 换行符
      const normalizedText = pastedText.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      insertFragment(normalizedText, false);
      e.preventDefault();
    };

    return (
      <>
        <Style />
        <div id={'text-editor'} className={cls('text-editor', props.className)}>
          <Slate editor={editor as any} value={value} onChange={onChange}>
            <Editable
              onKeyDown={props.onKeyDown}
              placeholder={
                props.placeholder ||
                $i18n.get({
                  id: 'components.commonComponents.SlateEditor.EnterHere',
                  dm: '在这里输入',
                })
              }
              onBlur={props.onBlur}
              onFocus={props.onFocus}
              className={cls('text-editor-content', props.contentClassName)}
              readOnly={readOnly}
              renderElement={renderElement as any}
              renderLeaf={renderLeaf}
              onCompositionStart={onCompositionStart}
              onCompositionEnd={onCompositionEnd}
              onPaste={handlePaste}
              maxLength={props.wordLimit}
              onCopy={(e) => {
                const formattedText = _generateTextBySelection() || '';
                e.clipboardData.setData('text/plain', formattedText);
                e.preventDefault();
              }}
            />
          </Slate>
        </div>
      </>
    );
  },
);
export default SlateEditor;

// fix中文输入法问题
export let isInputChinese = false;
