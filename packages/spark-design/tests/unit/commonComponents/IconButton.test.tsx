import React from 'react';
import { IconButton } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';

describe('IconButton 组件 - 基础功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染IconButton组件', () => {
      render(<IconButton icon="spark-add-line" />);

      const button = document.querySelector('.ant-btn');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('spark-icon-button');

      // 应该包含图标
      const icon = document.querySelector('.spark-icon');
      expect(icon).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      const customClass = 'custom-iconbutton';
      render(<IconButton className={customClass} icon="spark-add-line" />);

      const element = document.querySelector('.' + customClass);
      expect(element).toBeInTheDocument();
    });
  });

  describe('icon 属性测试', () => {
    it('应该支持 ReactNode 类型的 icon', () => {
      const customIcon = <span data-testid="custom-icon">🔥</span>;
      render(<IconButton icon={customIcon} />);

      const icon = screen.getByTestId('custom-icon');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveTextContent('🔥');
    });

    it('应该支持字符串类型的 icon', () => {
      render(<IconButton icon="spark-add-line" />);

      const icon = document.querySelector('.spark-icon');
      expect(icon).toBeInTheDocument();
    });
  });

  describe('iconType 属性测试', () => {
    it('应该支持 iconType 属性', () => {
      render(<IconButton iconType="spark-delete-line" />);

      const icon = document.querySelector('.spark-icon');
      expect(icon).toBeInTheDocument();
    });

    it('iconType 应该优先于 icon 属性', () => {
      render(<IconButton iconType="spark-delete-line" icon="spark-add-line" />);

      // 应该渲染 iconType 指定的图标
      const icon = document.querySelector('.spark-icon');
      expect(icon).toBeInTheDocument();
    });
  });

  describe('bordered 属性测试', () => {
    it('应该默认显示边框 (bordered=true)', () => {
      render(<IconButton icon="spark-add-line" />);

      const button = document.querySelector('.ant-btn');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('ant-btn-default'); // 默认类型有边框
    });

    it('应该支持无边框样式 (bordered=false)', () => {
      render(<IconButton bordered={false} icon="spark-add-line" />);

      const button = document.querySelector('.ant-btn');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('ant-btn-text'); // text 类型无边框
    });
  });

  describe('shape 属性测试', () => {
    it('应该默认使用 default 形状', () => {
      render(<IconButton icon="spark-add-line" />);

      const button = document.querySelector('.ant-btn');
      expect(button).toBeInTheDocument();
      // 默认形状不会添加特殊类名
    });

    it('应该支持 circle 形状', () => {
      render(<IconButton shape="circle" icon="spark-add-line" />);

      const button = document.querySelector('.ant-btn');
      expect(button).toBeInTheDocument();
      // circle 形状会通过 Button 组件的 shape 属性处理
    });
  });

  describe('size 属性测试', () => {
    it('应该支持不同尺寸', () => {
      render(<IconButton size="large" icon="spark-add-line" />);

      const button = document.querySelector('.ant-btn');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('ant-btn-lg');
    });

    it('size 应该传递给 IconFont', () => {
      render(<IconButton size="small" iconType="spark-add-line" />);

      const icon = document.querySelector('.spark-icon');
      expect(icon).toBeInTheDocument();
      // IconFont 会根据 size 设置字体大小
    });
  });

  describe('图标处理逻辑测试', () => {
    it('当同时提供 iconType 和 icon 时，应该优先使用 iconType', () => {
      render(
        <IconButton
          iconType="spark-delete-line"
          icon={<span data-testid="react-icon">React Icon</span>}
        />,
      );

      // 应该渲染 IconFont，而不是 ReactNode
      const iconFont = document.querySelector('.spark-icon');
      expect(iconFont).toBeInTheDocument();

      const reactIcon = screen.queryByTestId('react-icon');
      expect(reactIcon).not.toBeInTheDocument();
    });

    it('当 icon 是字符串时，应该渲染为 IconFont', () => {
      render(<IconButton icon="spark-add-line" />);

      const iconFont = document.querySelector('.spark-icon');
      expect(iconFont).toBeInTheDocument();
    });

    it('当 icon 是 ReactNode 时，应该直接渲染', () => {
      const customIcon = <span data-testid="custom-icon">Custom</span>;
      render(<IconButton icon={customIcon} />);

      const customIconElement = screen.getByTestId('custom-icon');
      expect(customIconElement).toBeInTheDocument();
      expect(customIconElement).toHaveTextContent('Custom');
    });
  });
});
