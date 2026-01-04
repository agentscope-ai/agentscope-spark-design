import { Input } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Input 组件 - 定制化功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('shape 属性测试', () => {
    it('应该支持默认 shape', () => {
      render(<Input data-testid="input" placeholder="默认输入框" />);

      const input = screen.getByTestId('input');
      expect(input).toBeInTheDocument();
      expect(input).not.toHaveClass('ant-input-round');
    });

    it('应该支持 shape="default"', () => {
      render(
        <Input shape="default" data-testid="input" placeholder="默认输入框" />,
      );

      const input = screen.getByTestId('input');
      expect(input).toBeInTheDocument();
      expect(input).not.toHaveClass('ant-input-round');
    });

    it('应该支持 shape="round"', () => {
      render(
        <Input shape="round" data-testid="input" placeholder="圆角输入框" />,
      );

      const input = screen.getByTestId('input');
      expect(input).toBeInTheDocument();
      expect(input).toHaveClass('ant-input-round');
    });

    it('应该保留其他属性不受影响', () => {
      render(
        <Input
          shape="round"
          data-testid="input"
          placeholder="带样式的圆角输入框"
          className="custom-class"
          style={{ width: '200px' }}
        />,
      );

      const input = screen.getByTestId('input');
      expect(input).toHaveClass('ant-input-round');
      expect(input).toHaveClass('custom-class');
      expect(input).toHaveAttribute('placeholder', '带样式的圆角输入框');
      expect(input.style.width).toBe('200px');
    });
  });

  describe('子组件导出测试', () => {
    it('应该导出 TextArea 子组件', () => {
      expect(Input.TextArea).toBeDefined();
      expect(typeof Input.TextArea).toBe('object'); // React组件通常是object类型
    });

    it('应该导出 Search 子组件', () => {
      expect(Input.Search).toBeDefined();
      expect(typeof Input.Search).toBe('object');
    });

    it('应该导出 Password 子组件', () => {
      expect(Input.Password).toBeDefined();
      expect(typeof Input.Password).toBe('object');
    });

    it('应该导出 OTP 子组件', () => {
      expect(Input.OTP).toBeDefined();
      expect(typeof Input.OTP).toBe('object');
    });

    it('TextArea 应该正常工作', () => {
      render(<Input.TextArea data-testid="textarea" placeholder="文本域" />);

      const textarea = screen.getByTestId('textarea');
      expect(textarea).toBeInTheDocument();
      expect(textarea.tagName).toBe('TEXTAREA');
    });

    it('Search 应该正常工作', () => {
      render(<Input.Search data-testid="search" placeholder="搜索框" />);

      const search = screen.getByTestId('search');
      expect(search).toBeInTheDocument();
      expect(search).toHaveClass('ant-input');
    });
  });

  describe('className 合并测试', () => {
    it('应该正确合并自定义 className 和 shape 类名', () => {
      render(
        <Input
          shape="round"
          className="my-custom-class another-class"
          data-testid="input"
        />,
      );

      const input = screen.getByTestId('input');
      expect(input).toHaveClass('my-custom-class');
      expect(input).toHaveClass('another-class');
      expect(input).toHaveClass('ant-input-round');
    });

    it('没有自定义 className 时应该只有 shape 类名', () => {
      render(<Input shape="round" data-testid="input" />);

      const input = screen.getByTestId('input');
      expect(input).toHaveClass('ant-input-round');
    });
  });

  describe('ref 转发测试', () => {
    it('应该正确转发 ref', () => {
      const inputRef = React.createRef<any>();

      render(<Input ref={inputRef} data-testid="input" />);

      expect(inputRef.current).toBeTruthy();
      // Input组件的ref包含input属性，指向实际的DOM元素
      expect(inputRef.current.input).toBeInstanceOf(HTMLElement);
      expect(inputRef.current.input?.tagName).toBe('INPUT');
    });
  });
});
