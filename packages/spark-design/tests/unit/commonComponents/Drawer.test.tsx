import React from 'react';
import { Drawer } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';
// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('Drawer 组件 - 基础功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染Drawer组件', () => {
      render(
        <Drawer open={true} title="测试抽屉">
          <div>抽屉内容</div>
        </Drawer>,
      );

      const element = document.querySelector('.ant-drawer');
      expect(element).toBeInTheDocument();
    });

    it('应该显示标题', () => {
      render(
        <Drawer open={true} title="测试标题">
          <div>内容</div>
        </Drawer>,
      );

      expect(screen.getByText('测试标题')).toBeInTheDocument();
    });

    it('应该显示内容', () => {
      render(
        <Drawer open={true} title="标题">
          <div>抽屉内容</div>
        </Drawer>,
      );

      expect(screen.getByText('抽屉内容')).toBeInTheDocument();
    });
  });

  describe('显示控制测试', () => {
    it('应该支持 open 属性控制显示', () => {
      const { rerender } = render(
        <Drawer open={false} title="测试">
          <div>内容</div>
        </Drawer>,
      );

      let element = document.querySelector('.ant-drawer');
      expect(element).not.toBeInTheDocument();

      rerender(
        <Drawer open={true} title="测试">
          <div>内容</div>
        </Drawer>,
      );

      element = document.querySelector('.ant-drawer');
      expect(element).toBeInTheDocument();
    });
  });

  describe('位置测试', () => {
    it('应该支持不同的位置', () => {
      render(
        <Drawer open={true} placement="left" title="左侧抽屉">
          <div>内容</div>
        </Drawer>,
      );

      const element = document.querySelector('.ant-drawer-left');
      expect(element).toBeInTheDocument();
    });
  });
});
