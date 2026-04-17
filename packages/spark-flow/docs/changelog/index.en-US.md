---
hero:
  title: Changelog
  description: Release versions follow Semantic Versioning 2.0.0.
---

### 0.0.12
##### Changed
- base-node: add slots prop to customize.

### 0.0.15
#### Changed
- Enhanced VariableInput component to filter out unsupported types ('File' and 'Array<File>') and added corresponding error messages.
- Improved validation rules for variable names in both CustomInputsControl and CustomOutputsForm components.
- Updated styles for variable input components to improve user experience.

### 0.0.16
#### Changed
- config-panel: add titleRenderer type in INodeSchema to customize the title in config-panel.

### 0.0.17
#### Changed
- utils: allow the sub-flow reference the nested variables from the parent-flow.

### 0.0.18
#### Changed
- node-result-panel: Add nodeResultTargetClick event to locate node in test panel.

### 0.0.19
#### Changed
- custom-outputs-form & variable-input: style fix

### 0.0.20
#### Changed
- add function setNodes in use-flow-interaction

### 0.0.21
#### Changed
- some stylefix

### 0.0.22
#### Changed
- some stylefix

### 0.0.23
#### Changed
- enhance variable selector styles in spark-flow

### 0.0.24
#### Fixed
- code-input: fix crash when value is null or undefined by falling back to empty string