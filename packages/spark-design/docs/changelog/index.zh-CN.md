---
hero:
  title: 更新日志
  description: 组件库版本遵循 Semantic Versioning 2.0.0 语义化版本规范。
---

### 1.0.29
`2025-02-06`

#### Fixed
- CodeBlock 组件样式文件移除 !important 类型样式，props 支持 ReactCodeMirrorProps 类型参数透传
- Steps 组件 vertical 类型垂直对齐问题修复
- SlateEditor 组件将粘贴文本中的 CRLF 规范化为 LF，以便在 Windows 换行符环境下具有更好的兼容性
- Tab 组件 segment 类型支持 className 透传

### 1.0.28
`2025-01-29`

#### Changed
- PromptsEditor 组件支持了 readOnly 参数
- CodeBlock 组件支持了 extensions 参数，props 支持 ReactCodeMirrorProps 类型参数透传
- MCP 工具名称升级，优化日志功能

#### Fixed
- Pagination 组件，修复了 showSizeChanger 和 pageSizeOptions 同时传入时，pageSizeOptions 不生效的问题

### 1.0.27
`2025-01-27`

##### Changed
- 补充 InputSearch 组件文档

##### Fixed
- Table 组件在表头固定时，表头样式默认圆角改为直角
- Empty 组件修复了引入多个 Empty 组件的情况下，可能导致的 svg 丢失的问题
- 文档搜索白屏问题修复

### 1.0.26
`2025-01-21`

##### Changed
- Audio 组件探测逻辑重构、使用 useCallback 提升性能
- Audio 与 Video 新增 SVG icons，支持在 FileIcon 组件中透出展示
- 文档新增 icons 列表展示与复制功能

### 1.0.25
`2025-01-07`

##### Fixed
- 修复 Tooltip 弹出框内部样式优先级问题

### 1.0.24
`2025-01-04`

##### Changed
- Video 组件添加 enableFullscreen 参数，支持全屏播放

### 1.0.22
`2025-12-29`

##### Changed
- Carbon 主题修改 `colorTextOnPrimary` 颜色变量为 '#ffffff'

### 1.0.21
`2025-12-25`

##### Changed
- AlertDialog 组件：定位距离顶部的默认高度调整为当前窗口高度的 36%
- Table 组件：表格行 hover 背景色修改为 `color-bg-layout` 颜色变量；表格行选中背景色修改为 `color-primary-bg-hover` 颜色变量
- Select 组件：多选模式的选中项背景色调整
- 主题色变量更新：
  - bailianDarkTheme：添加 `"colorLinkHover": "#857DE3"`
  - bailianTheme：添加 `"colorLinkHover": "#8080FF"`
  - carbonDarkTheme：修改 `"colorTextOnPrimary": "#ffffff"`

##### Fixed
- Slider 组件：水平滑动条组件取消默认左右两边的外边距 margin，操作按钮 handle 在最左侧与最右侧不超出滑动轨道宽度


