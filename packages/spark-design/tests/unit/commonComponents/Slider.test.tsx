import React from 'react';
import { Slider } from '@agentscope-ai/design';
import { render } from '@testing-library/react';

// Slider 组件是 antd Slider 的简单封装，只添加了样式
// 主要测试组件能否正常渲染，无需测试 antd 的原生功能
describe('Slider 组件 - 基础功能测试', () => {
  it('应该正确渲染Slider组件', () => {
    render(<Slider />);

    const sliderElement = document.querySelector('.ant-slider');
    expect(sliderElement).toBeInTheDocument();
  });

  it('应该支持自定义 className', () => {
    const customClass = 'custom-slider';
    render(<Slider className={customClass} />);

    const element = document.querySelector('.' + customClass);
    expect(element).toBeInTheDocument();
  });
});
