---
hero:
  title: 更新日志
  description: 组件库版本遵循 Semantic Versioning 2.0.0 语义化版本规范。
---

### 1.0.12
`2025-12-25`

##### Changed
- BaseNode: 增加slots属性方便定制样式

### 1.0.15

#### Changed
- 增强 VariableInput 组件，过滤不支持的类型（'File' 和 'Array<File>'）并添加相应的错误提示信息。
- 改进 CustomInputsControl 和 CustomOutputsForm 组件中变量名的验证规则。
- 更新变量输入组件的样式以改善用户体验。

### 1.0.16
- config-panel: 新增 INodeSchema 中的 titleRenderer 参数，用于自定义渲染配置面板中的标题。

### 1.0.17
- utils: 支持子画布中的节点引用父画布的嵌套变量

### 1.0.18
- node-result-panel: 新增nodeResultTargetClick 事件用来在测试窗中定位节点