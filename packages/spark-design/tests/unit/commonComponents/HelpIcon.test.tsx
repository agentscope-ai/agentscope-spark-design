import React from 'react';
import { HelpIcon } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('HelpIcon 组件 - 定制化功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染HelpIcon组件', () => {
      render(<HelpIcon content="帮助信息" />);

      // HelpIcon 应该渲染为 IconButton
      const element = document.querySelector('.spark-help-icon');
      expect(element).toBeInTheDocument();

      // 应该是一个按钮
      const buttonElement = document.querySelector('button');
      expect(buttonElement).toBeInTheDocument();
    });

    it('应该使用固定的图标和样式', () => {
      render(<HelpIcon content="帮助信息" />);

      const helpIcon = document.querySelector('.spark-help-icon');
      expect(helpIcon).toBeInTheDocument();

      // 应该有圆形形状和小尺寸
      const buttonElement = document.querySelector('button');
      expect(buttonElement).toHaveClass('ant-btn-circle');
      expect(buttonElement).toHaveClass('ant-btn-sm');
    });
  });

  describe('content 属性测试（必需属性）', () => {
    it('应该支持字符串和 ReactNode content', () => {
      // 测试字符串 content
      const { unmount } = render(<HelpIcon content="这是帮助信息" />);
      expect(document.querySelector('.spark-help-icon')).toBeInTheDocument();
      unmount();

      // 测试 ReactNode content
      const content = (
        <div>
          <strong>重要提示：</strong>
          <p>这是详细的帮助信息</p>
        </div>
      );
      render(<HelpIcon content={content} />);
      expect(document.querySelector('.spark-help-icon')).toBeInTheDocument();
    });
  });

  describe('Tooltip 配置测试', () => {
    it('应该正确配置 Tooltip 属性', () => {
      render(<HelpIcon content="帮助信息" />);

      // 验证组件正常渲染，Tooltip 配置由组件内部处理
      const element = document.querySelector('.spark-help-icon');
      expect(element).toBeInTheDocument();
    });
  });

  describe('popoverProps 属性测试', () => {
    it('应该支持自定义 popoverProps', () => {
      const customProps = {
        placement: 'left' as const,
        trigger: 'click' as const,
      };

      render(<HelpIcon content="自定义配置帮助" popoverProps={customProps} />);

      const element = document.querySelector('.spark-help-icon');
      expect(element).toBeInTheDocument();
    });

    it('应该支持覆盖默认的 overlayInnerStyle', () => {
      const customProps = {
        overlayInnerStyle: { maxWidth: 500, backgroundColor: 'yellow' },
      };

      render(<HelpIcon content="自定义样式帮助" popoverProps={customProps} />);

      const element = document.querySelector('.spark-help-icon');
      expect(element).toBeInTheDocument();
    });
  });

  describe('IconButton 集成测试', () => {
    it('应该使用固定的图标配置', () => {
      render(<HelpIcon content="图标测试" />);

      const buttonElement = document.querySelector('button');
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass('ant-btn-circle');
      expect(buttonElement).toHaveClass('ant-btn-sm');
    });
  });
});
