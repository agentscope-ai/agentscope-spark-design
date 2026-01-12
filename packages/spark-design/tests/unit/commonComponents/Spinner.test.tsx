import React from 'react';
import { Spinner } from '@agentscope-ai/design';
import { render } from '@testing-library/react';

// Spinner 组件是完全自定义的加载组件，不基于 antd
// 主要测试组件能否正常渲染，无需测试所有功能
describe('Spinner 组件 - 基础功能测试', () => {
  it('应该正确渲染Spinner组件', () => {
    render(<Spinner />);

    const spinnerElement = document.querySelector('.spark-spinner');
    expect(spinnerElement).toBeInTheDocument();
  });

  it('应该支持自定义 className', () => {
    const customClass = 'custom-spinner';
    render(<Spinner className={customClass} />);

    const element = document.querySelector('.' + customClass);
    expect(element).toBeInTheDocument();
  });
});
