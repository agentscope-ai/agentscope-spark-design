import {
  Decoration,
  DecorationSet,
  EditorView,
  MatchDecorator,
  ViewPlugin,
  ViewUpdate,
} from '@codemirror/view';

// 使用 Mark Decoration 而不是 Replace Decoration
// 这样文本保持可编辑，只添加样式高亮
const placeholderMatcher = new MatchDecorator({
  // 该正则用于匹配形如 ${变量名} 的占位符，变量名允许为中文、字母、数字、下划线
  // \${         匹配字符 "${"
  // ([\w\u4e00-\u9fa5]+)  匹配一个或多个字母、数字、下划线或中文字符，捕获为分组1
  // \}          匹配字符 "}"
  // g           全局匹配
  regexp: /\$\{([\w\u4e00-\u9fa5]+)\}/g,
  decoration: () =>
    Decoration.mark({
      class: 'cm-prompt-var',
    }),
});

// Placeholder 插件
const placeholders = ViewPlugin.fromClass(
  class {
    placeholders: DecorationSet;

    constructor(view: EditorView) {
      this.placeholders = placeholderMatcher.createDeco(view);
    }

    update(update: ViewUpdate) {
      this.placeholders = placeholderMatcher.updateDeco(
        update,
        this.placeholders,
      );
    }
  },
  {
    decorations: (instance) => instance.placeholders,
    // 移除 atomicRanges，允许用户在变量内部编辑
  },
);

export default [placeholders];
