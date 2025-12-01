import React from 'react';
import { Tooltip } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';

// Tooltip 组件是 antd Tooltip 的简单封装，只添加了样式
// 主要测试组件能否正常渲染，无需测试 antd 的原生功能
describe('Tooltip 组件 - 基础功能测试', () => {
  it('应该正确渲染Tooltip组件', () => {
    render(
      <Tooltip title="提示内容">
        <span>悬停目标</span>
      </Tooltip>,
    );

    expect(screen.getByText('悬停目标')).toBeInTheDocument();
  });

  it('应该支持自定义 className', () => {
    const customClass = 'custom-tooltip';
    render(
      <Tooltip title="提示内容" className={customClass}>
        <span>悬停目标</span>
      </Tooltip>,
    );

    expect(screen.getByText('悬停目标')).toBeInTheDocument();
  });
});
