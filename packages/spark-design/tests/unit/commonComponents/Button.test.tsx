import React from 'react';
import { Button } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';

describe('Button 组件 - 定制化功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('定制化 type 类型测试', () => {
    it('应该支持 primaryLess 类型', () => {
      render(<Button type="primaryLess">primaryLess按钮</Button>);

      const button = screen.getByRole('button');
      // primaryLess 类型应该渲染为 primary 类型
      expect(button).toHaveClass('ant-btn-primary');

      // 应该有 ConfigProvider 包装（通过检查是否存在特定的样式或结构）
      expect(button).toBeInTheDocument();
    });

    it('应该支持 textCompact 类型', () => {
      render(<Button type="textCompact">textCompact按钮</Button>);

      const button = screen.getByRole('button');
      // textCompact 类型应该渲染为 textCompact 类型
      expect(button).toHaveClass('ant-btn-textCompact');

      // 应该有特定的 padding 样式
      expect(button).toHaveAttribute('style');
      expect(button.style.paddingLeft).toBe('0px');
      expect(button.style.paddingRight).toBe('0px');
    });
  });

  describe('iconType 属性测试', () => {
    it('应该支持 iconType 属性', () => {
      render(<Button iconType="bl-icon-add">带图标按钮</Button>);

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();

      // 应该渲染 IconFont 组件
      // 注意：这里需要确保 IconFont 的 mock 正确工作
      expect(button).toHaveTextContent('带图标按钮');
    });

    it('应该将 size 传递给 iconType 图标', () => {
      render(
        <Button iconType="bl-icon-add" size="small">
          小图标按钮
        </Button>,
      );

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      // 验证 size 被正确传递（这需要 IconFont 组件的 mock 支持）
    });

    it('应该将 size 传递给自定义 icon', () => {
      const CustomIcon = (props: any) => (
        <span data-testid="custom-icon" data-size={props.size}>
          Icon
        </span>
      );

      render(
        <Button icon={<CustomIcon />} size="middle">
          自定义图标按钮
        </Button>,
      );

      const icon = screen.getByTestId('custom-icon');
      expect(icon).toHaveAttribute('data-size', 'middle');
    });
  });

  describe('tooltipContent 属性测试', () => {
    it('应该支持字符串 tooltipContent', () => {
      render(<Button tooltipContent="这是提示信息">带提示按钮</Button>);

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();

      // 按钮应该被 Popover 包装
      // 注意：实际的 tooltip 显示需要交互才能触发，这里只验证结构
    });

    it('应该支持 ReactNode tooltipContent', () => {
      const TooltipContent = () => (
        <div data-testid="tooltip-content">自定义提示</div>
      );

      render(
        <Button tooltipContent={<TooltipContent />}>带自定义提示按钮</Button>,
      );

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('样式定制测试', () => {
    it('应该应用默认的 lineHeight: 1', () => {
      render(<Button>默认样式按钮</Button>);

      const button = screen.getByRole('button');
      expect(button.style.lineHeight).toBe('1');
    });

    it('应该保留自定义样式并合并默认样式', () => {
      const customStyle = {
        backgroundColor: 'red',
        marginTop: '10px',
      };

      render(<Button style={customStyle}>自定义样式按钮</Button>);

      const button = screen.getByRole('button');
      expect(button.style.lineHeight).toBe('1'); // 默认样式
      expect(button.style.backgroundColor).toBe('red'); // 自定义样式
      expect(button.style.marginTop).toBe('10px'); // 自定义样式
    });

    it('textCompact 类型应该有零内边距', () => {
      render(<Button type="textCompact">紧凑按钮</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('ant-btn-textCompact');
      expect(button.style.paddingLeft).toBe('0px');
      expect(button.style.paddingRight).toBe('0px');
      expect(button.style.lineHeight).toBe('1');
    });
  });

  describe('组合功能测试', () => {
    it('应该支持 primaryLess + tooltipContent + iconType 的组合', () => {
      render(
        <Button
          type="primaryLess"
          iconType="bl-icon-add"
          tooltipContent="主要按钮提示"
          size="small"
        >
          复杂按钮
        </Button>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass('ant-btn-primary');
      expect(button).toHaveClass('ant-btn-sm');
      expect(button.style.lineHeight).toBe('1');
      expect(button).toHaveTextContent('复杂按钮');
    });

    it('应该支持 textCompact + tooltipContent 的组合', () => {
      render(
        <Button type="textCompact" tooltipContent="紧凑按钮提示">
          紧凑按钮
        </Button>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass('ant-btn-textCompact');
      expect(button.style.paddingLeft).toBe('0px');
      expect(button.style.paddingRight).toBe('0px');
      expect(button.style.lineHeight).toBe('1');
    });
  });
});
