import {
  Decoration,
  DecorationSet,
  EditorView,
  MatchDecorator,
  ViewPlugin,
  ViewUpdate,
  WidgetType,
} from '@codemirror/view';

// Placeholder Widget 类
class PlaceholderWidget extends WidgetType {
  constructor(readonly name: string) {
    super();
  }

  eq(other: PlaceholderWidget) {
    return other.name === this.name;
  }

  toDOM() {
    let wrap = document.createElement('span');
    wrap.setAttribute('aria-hidden', 'true');
    wrap.className = 'cm-prompt-var';
    wrap.textContent = `\${${this.name}}`;
    return wrap;
  }

  ignoreEvent() {
    return false;
  }
}

// Placeholder 匹配器
const placeholderMatcher = new MatchDecorator({
  // 该正则用于匹配形如 ${变量名} 的占位符，变量名允许为中文、字母、数字、下划线
  // \${         匹配字符 "${"
  // ([\w\u4e00-\u9fa5]+)  匹配一个或多个字母、数字、下划线或中文字符，捕获为分组1
  // \}          匹配字符 "}"
  // g           全局匹配
  regexp: /\$\{([\w\u4e00-\u9fa5]+)\}/g,
  decoration: (match) =>
    Decoration.replace({
      widget: new PlaceholderWidget(match[1]),
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
    provide: (plugin) =>
      EditorView.atomicRanges.of((view) => {
        return view.plugin(plugin)?.placeholders || Decoration.none;
      }),
  },
);

export default [placeholders];
