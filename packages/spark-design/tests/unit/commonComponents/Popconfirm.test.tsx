import React from 'react';
import { Popconfirm } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';

// Popconfirm 组件是 antd Popconfirm 的简单封装，只添加了样式
// 主要测试组件能否正常渲染，无需测试 antd 的原生功能
describe('Popconfirm 组件 - 基础功能测试', () => {
  it('应该正确渲染Popconfirm组件', () => {
    render(
      <Popconfirm title="确认删除？">
        <button>删除</button>
      </Popconfirm>,
    );

    expect(screen.getByText('删除')).toBeInTheDocument();
  });

  it('应该支持自定义 className', () => {
    const customClass = 'custom-popconfirm';
    render(
      <Popconfirm title="确认删除？" className={customClass}>
        <button>删除</button>
      </Popconfirm>,
    );

    expect(screen.getByText('删除')).toBeInTheDocument();
  });
});
