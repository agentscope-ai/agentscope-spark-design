## antd API

通用属性参考：[通用属性](/docs/react/common-props)

### Cascader props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 自定义清除按钮 | boolean \| { clearIcon?: ReactNode } | true | 5.8.0: 支持对象类型 |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在单选模式下生效 | boolean | true | 5.9.0 |
| autoFocus | 自动获取焦点 | boolean | false |  |
| changeOnSelect | 每选择一级菜单选项值都会发生变化 | boolean | false |  |
| classNames | 语义化结构 class | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.25.0 |
| defaultValue | 默认的选中项 | string\[] \| number\[] | \[] |  |
| disabled | 禁用 | boolean | false |  |
| displayRender | 选择后展示的渲染函数 | (labels, selectedOptions) => ReactNode | labels => labels.join(` / `) |  |
| popupClassName | 自定义浮层类名 | string | - | 4.23.0 |
| popupPlacement | 浮层预设位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft | 4.23.0 |
| popupMatchSelectWidth | 下拉菜单和选择器同宽 | boolean \| number | true |  |
| expandIcon | 自定义次级菜单展开图标 | ReactNode | - |  |
| expandTrigger | 次级菜单的展开方式 | `click` \| `hover` | `click` |  |
| fieldNames | 自定义 options 中 label value children 的字段 | object | { label: `label`, value: `value`, children: `children` } |  |
| getPopupContainer | 菜单渲染父节点 | function(triggerNode) | () => document.body |  |
| loadData | 用于动态加载选项，无法与 `showSearch` 一起使用 | (selectedOptions) => void | - |  |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| `responsive` | - | 4.17.0 |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode \| function(omittedValues) | - | 4.17.0 |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - | 4.17.0 |
| notFoundContent | 当下拉列表为空时显示的内容 | string | `Not Found` |  |
| open | 控制浮层显隐 | boolean | - | 4.17.0 |
| options | 可选项数据源 | [Option](#option)\[\] | - |  |
| placeholder | 输入框占位文本 | string | - |  |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |  |
| searchValue | 设置搜索的值 | string | - | 5.11.0 |
| showSearch | 在选择框中显示搜索框 | boolean \| [Object](#showsearch) | false |  |
| size | 输入框大小 | `large` \| `middle` \| `small` | - |  |
| status | 设置校验状态 | `error` \| `warning` | - | 4.19.0 |
| styles | 语义化结构 style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.25.0 |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |  |
| tagRender | 自定义 tag 内容 | (props) => ReactNode | - | 5.13.0 |
| value | 指定选中项 | string\[] \| number\[] | - |  |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| onChange | 选择完成后的回调 | (value, selectedOptions) => void | - |  |
| onSearch | 监听搜索 | (inputValue: string) => void | - | 5.11.0 |
| multiple | 支持多选节点 | boolean | - | 4.17.0 |
| removeIcon | 自定义的多选框清除图标 | ReactNode | - |  |
| showCheckedStrategy | 定义选中项回填的方式（仅多选时有效） | `SHOW_CHILD` \| `SHOW_PARENT` | `SHOW_PARENT` | 4.20.0 |
| dropdownMenuColumnStyle | 下拉菜单列的样式 | CSSProperties | - |  |

> 注意，如果需要获得中国省市区数据，可以参考 [china-division](https://gist.github.com/afc163/7582f35654fd03d5be7009444f42672a)。

### Option

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选项的值 | string \| number | - |
| label | 选项的标签 | ReactNode | - |
| disabled | 是否禁用 | boolean | false |
| children | 子选项 | [Option](#option)\[\] | - |
| isLeaf | 是否是叶子节点，设置了 `loadData` 时有效 | boolean | - |

### showSearch

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| filter | 接收 `inputValue` `path` 两个参数，当 `path` 符合筛选条件时，应返回 true，反之则返回 false | function(inputValue, path): boolean | - |
| limit | 搜索结果展示数量 | number \| false | 50 |
| matchInputWidth | 搜索结果列表是否与输入框同宽 | boolean | true |
| render | 用于渲染 filter 后的选项 | function(inputValue, path): ReactNode | - |
| sort | 用于排序 filter 后的选项 | function(a, b, inputValue) | - |
