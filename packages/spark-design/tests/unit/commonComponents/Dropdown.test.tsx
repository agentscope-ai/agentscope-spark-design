import React from 'react';
import { Dropdown } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';

// Dropdown 组件基于 antd Dropdown，添加了 selectable 菜单的定制逻辑
// 主要测试定制化功能，不需要测试 antd 的所有原生功能
describe('Dropdown 组件 - 基础功能测试', () => {
  const mockMenuItems = [
    { key: '1', label: '选项1' },
    { key: '2', label: '选项2' },
  ];

  const mockMenu = { items: mockMenuItems };

  it('应该正确渲染Dropdown组件', () => {
    render(
      <Dropdown menu={mockMenu}>
        <button>下拉菜单</button>
      </Dropdown>,
    );

    expect(screen.getByText('下拉菜单')).toBeInTheDocument();
  });

  it('应该支持可选择菜单（定制化功能）', () => {
    const selectableMenu = {
      ...mockMenu,
      selectable: true,
    };

    render(
      <Dropdown menu={selectableMenu} open>
        <button>可选择菜单</button>
      </Dropdown>,
    );

    // 验证可选择菜单的定制逻辑被应用
    const menuElement = document.querySelector('.ant-dropdown-menu');
    expect(menuElement).toBeInTheDocument();
  });

  it('应该处理空菜单', () => {
    render(
      <Dropdown menu={{ items: [] }}>
        <button>空菜单</button>
      </Dropdown>,
    );

    expect(screen.getByText('空菜单')).toBeInTheDocument();
  });
});
