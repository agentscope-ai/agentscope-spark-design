import React from 'react';
import { Anchor } from '@agentscope-ai/design';
import { render } from '@testing-library/react';

// Anchor 组件是 antd Anchor 的简单封装，只添加了样式
describe('Anchor 组件 - 基础功能测试', () => {
  const mockItems = [
    { key: 'part-1', href: '#part-1', title: '部分 1' },
    { key: 'part-2', href: '#part-2', title: '部分 2' },
  ];

  it('应该正确渲染Anchor组件', () => {
    render(<Anchor items={mockItems} />);

    const anchorElement = document.querySelector('.ant-anchor');
    expect(anchorElement).toBeInTheDocument();
  });

  it('应该支持自定义 className', () => {
    const customClass = 'custom-anchor';
    render(<Anchor className={customClass} items={mockItems} />);

    const element = document.querySelector('.' + customClass);
    expect(element).toBeInTheDocument();
  });
});
