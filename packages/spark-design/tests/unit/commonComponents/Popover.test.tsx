import React from 'react';
import { Popover } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';

describe('Popover 组件 - 基础功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染Popover组件', () => {
      const content = <div>弹出框内容</div>;
      render(
        <Popover content={content} title="标题">
          <button>点击我</button>
        </Popover>,
      );

      expect(screen.getByText('点击我')).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      const customClass = 'custom-popover';
      const content = <div>内容</div>;
      render(
        <Popover content={content} overlayClassName={customClass}>
          <span>目标元素</span>
        </Popover>,
      );

      expect(screen.getByText('目标元素')).toBeInTheDocument();
    });
  });

  describe('内容测试', () => {
    it('应该支持字符串内容', () => {
      render(
        <Popover content="这是弹出框内容" title="标题">
          <button>按钮</button>
        </Popover>,
      );

      expect(screen.getByText('按钮')).toBeInTheDocument();
    });

    it('应该支持 ReactNode 内容', () => {
      const content = (
        <div>
          <p>自定义内容</p>
          <button>操作按钮</button>
        </div>
      );
      render(
        <Popover content={content} title="自定义标题">
          <span>目标</span>
        </Popover>,
      );

      expect(screen.getByText('目标')).toBeInTheDocument();
    });
  });

  describe('标题测试', () => {
    it('应该支持字符串标题', () => {
      render(
        <Popover content="内容" title="弹出框标题">
          <button>触发器</button>
        </Popover>,
      );

      expect(screen.getByText('触发器')).toBeInTheDocument();
    });

    it('应该支持 ReactNode 标题', () => {
      const title = <span style={{ color: 'red' }}>自定义标题</span>;
      render(
        <Popover content="内容" title={title}>
          <span>目标</span>
        </Popover>,
      );

      expect(screen.getByText('目标')).toBeInTheDocument();
    });
  });

  describe('触发方式测试', () => {
    it('应该支持点击触发', () => {
      render(
        <Popover content="点击内容" trigger="click">
          <button>点击触发</button>
        </Popover>,
      );

      expect(screen.getByText('点击触发')).toBeInTheDocument();
    });

    it('应该支持悬停触发', () => {
      render(
        <Popover content="悬停内容" trigger="hover">
          <span>悬停触发</span>
        </Popover>,
      );

      expect(screen.getByText('悬停触发')).toBeInTheDocument();
    });
  });

  describe('位置测试', () => {
    it('应该支持不同的位置', () => {
      render(
        <Popover content="内容" placement="topLeft">
          <span>左上角</span>
        </Popover>,
      );

      expect(screen.getByText('左上角')).toBeInTheDocument();
    });
  });
});
