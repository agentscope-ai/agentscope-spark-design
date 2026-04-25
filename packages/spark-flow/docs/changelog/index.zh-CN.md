---
hero:
  title: 更新日志
  description: 组件库版本遵循 Semantic Versioning 2.0.0 语义化版本规范。
---

### 0.0.12
##### Changed
- BaseNode: 增加slots属性方便定制样式

### 0.0.15
#### Changed
- 增强 VariableInput 组件，过滤不支持的类型（'File' 和 'Array<File>'）并添加相应的错误提示信息。
- 改进 CustomInputsControl 和 CustomOutputsForm 组件中变量名的验证规则。
- 更新变量输入组件的样式以改善用户体验。

### 0.0.16
#### Changed
- config-panel: 新增 INodeSchema 中的 titleRenderer 参数，用于自定义渲染配置面板中的标题。

### 0.0.17
#### Changed
- utils: 支持子画布中的节点引用父画布的嵌套变量

### 0.0.18
#### Changed
- node-result-panel: 新增nodeResultTargetClick 事件用来在测试窗中定位节点

### 0.0.19
#### Changed
- custom-outputs-form & variable-input：修复样式

### 0.0.20
#### Changed
- use-flow-interaction 增加 setNodes 方法

### 0.0.21
#### Changed
- 一些样式修复

### 0.0.22
#### Changed
- 一些样式修复

### 0.0.23
#### Changed
- 修复样式选择器样式

### 0.0.24
#### Fixed
- code-input: 修复 value 为 null 或 undefined 时组件报错的问题，默认回退为空字符串