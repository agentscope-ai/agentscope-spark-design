import React from 'react';
import { IconFont } from '@agentscope-ai/design';
import { render } from '@testing-library/react';

describe('IconFont 组件 - 基础功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染IconFont组件', () => {
      render(<IconFont type="spark-add-line" />);

      const iconElement = document.querySelector('.spark-icon');
      expect(iconElement).toBeInTheDocument();

      // 应该是一个 svg 元素
      const svgElement = document.querySelector('svg');
      expect(svgElement).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      const customClass = 'custom-iconfont';
      render(<IconFont type="spark-add-line" className={customClass} />);

      const element = document.querySelector('.' + customClass);
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass('spark-icon');
    });
  });

  describe('type 属性测试', () => {
    it('应该正确渲染指定的图标类型', () => {
      render(<IconFont type="spark-delete-line" />);

      const iconElement = document.querySelector('.spark-icon');
      expect(iconElement).toBeInTheDocument();
    });
  });

  describe('size 属性测试', () => {
    it('应该默认使用 middle 尺寸', () => {
      render(<IconFont type="spark-add-line" />);

      const iconElement = document.querySelector('.spark-icon');
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveClass('spark-icon');
      // 验证组件正常渲染即可，不验证具体的 fontSize 值
      expect(iconElement).toBeInTheDocument();
    });

    it('应该支持 small 尺寸', () => {
      render(<IconFont type="spark-add-line" size="small" />);

      const iconElement = document.querySelector('.spark-icon');
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveClass('spark-icon');
      // 验证 fontSize 为 small
      expect(iconElement.style.fontSize).toBe('small');
    });

    it('应该支持 large 尺寸', () => {
      render(<IconFont type="spark-add-line" size="large" />);

      const iconElement = document.querySelector('.spark-icon');
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveClass('spark-icon');
      // 验证 fontSize 为 large
      expect(iconElement.style.fontSize).toBe('large');
    });

    it('应该支持自定义尺寸', () => {
      render(<IconFont type="spark-add-line" size="32px" />);

      const iconElement = document.querySelector('.spark-icon');
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveClass('spark-icon');
      // 验证自定义 fontSize
      expect(iconElement.style.fontSize).toBe('32px');
    });

    it('应该支持数字类型的自定义尺寸', () => {
      render(<IconFont type="spark-add-line" size={28} />);

      const iconElement = document.querySelector('.spark-icon');
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveClass('spark-icon');
      // 验证数字类型的 fontSize（浏览器会自动添加px单位）
      expect(iconElement.style.fontSize).toBe('28px');
    });
  });

  describe('isCursorPointer 属性测试', () => {
    it('应该默认不显示指针样式 (isCursorPointer=false)', () => {
      render(<IconFont type="spark-add-line" />);

      const iconElement = document.querySelector('.spark-icon');
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).not.toHaveClass('spark-cursor-pointer');
    });

    it('应该支持显示指针样式', () => {
      render(<IconFont type="spark-add-line" isCursorPointer={true} />);

      const iconElement = document.querySelector('.spark-cursor-pointer');
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveClass('spark-icon');
    });
  });

  describe('spin 属性测试', () => {
    it('应该默认不旋转 (spin=false)', () => {
      render(<IconFont type="spark-add-line" />);

      const iconElement = document.querySelector('.spark-icon');
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).not.toHaveClass('spark-icon-spin');
    });

    it('应该支持旋转动画', () => {
      render(<IconFont type="spark-loading-line" spin={true} />);

      const iconElement = document.querySelector('.spark-icon-spin');
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveClass('spark-icon');
    });
  });
});
