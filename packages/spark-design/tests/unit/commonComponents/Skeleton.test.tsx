import React from 'react';
import { Skeleton } from '@agentscope-ai/design';
import { render } from '@testing-library/react';

// Skeleton 组件是 antd Skeleton 的简单封装，只添加了样式
// 主要测试组件能否正常渲染，无需测试 antd 的原生功能
describe('Skeleton 组件 - 基础功能测试', () => {
  it('应该正确渲染Skeleton组件', () => {
    render(<Skeleton />);

    const skeletonElement = document.querySelector('.ant-skeleton');
    expect(skeletonElement).toBeInTheDocument();
  });

  it('应该支持自定义 className', () => {
    const customClass = 'custom-skeleton';
    render(<Skeleton className={customClass} />);

    const element = document.querySelector('.' + customClass);
    expect(element).toBeInTheDocument();
  });
});
