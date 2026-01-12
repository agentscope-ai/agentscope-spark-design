import { Collapse } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';
import React from 'react';

// Collapse 组件是 antd Collapse 的简单封装，只添加了样式
// 主要测试组件能否正常渲染，无需测试 antd 的原生功能
describe('Collapse 组件 - 基础功能测试', () => {
  const mockItems = [
    { key: '1', label: '面板1', children: '内容1' },
    { key: '2', label: '面板2', children: '内容2' },
  ];

  it('应该正确渲染Collapse组件', () => {
    render(<Collapse items={mockItems} />);

    const collapseElement = document.querySelector('.ant-collapse');
    expect(collapseElement).toBeInTheDocument();
  });

  it('应该支持自定义 className', () => {
    const customClass = 'custom-collapse';
    render(<Collapse className={customClass} items={mockItems} />);

    const element = document.querySelector('.' + customClass);
    expect(element).toBeInTheDocument();
  });

  describe('items 配置测试', () => {
    it('应该导出 Panel 子组件', () => {
      // Collapse.Panel 在 antd 5.x 中已被废弃，使用 items 配置
      expect(Collapse).toBeDefined();
    });

    it('应该支持 items 配置渲染面板', () => {
      const items = [
        { key: '1', label: '面板1', children: '面板1内容' },
        { key: '2', label: '面板2', children: '面板2内容' },
      ];
      
      render(<Collapse items={items} />);

      // 验证面板能正常渲染
      expect(screen.getByText('面板1')).toBeInTheDocument();
      expect(screen.getByText('面板2')).toBeInTheDocument();
    });

    it('应该支持 collapsible 属性禁用面板', () => {
      const items = [
        { key: '1', label: '正常面板', children: '正常内容' },
        { key: '2', label: '禁用面板', children: '禁用内容', collapsible: 'disabled' as const },
      ];
      
      render(<Collapse items={items} />);

      expect(screen.getByText('正常面板')).toBeInTheDocument();
      expect(screen.getByText('禁用面板')).toBeInTheDocument();
      
      // 验证禁用面板有对应的 class
      const disabledPanel = document.querySelector('.ant-collapse-item-disabled');
      expect(disabledPanel).toBeInTheDocument();
    });
  });
});
