import React from 'react';
import { InputNumber } from '@agentscope-ai/design';
import { render } from '@testing-library/react';

// InputNumber 组件是 antd InputNumber 的简单封装，只添加了样式
// 主要测试组件能否正常渲染，无需测试 antd 的原生功能
describe('InputNumber 组件 - 基础功能测试', () => {
  it('应该正确渲染InputNumber组件', () => {
    render(<InputNumber />);

    const inputElement = document.querySelector('.ant-input-number');
    expect(inputElement).toBeInTheDocument();
  });

  it('应该支持自定义 className', () => {
    const customClass = 'custom-input-number';
    render(<InputNumber className={customClass} />);

    const element = document.querySelector('.' + customClass);
    expect(element).toBeInTheDocument();
  });
});
