import React from 'react';
import { Switch } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';

describe('Switch 组件 - 基础功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染Switch组件', () => {
      render(<Switch />);

      const switchElement = document.querySelector('.ant-switch');
      expect(switchElement).toBeInTheDocument();

      // 应该包含在 Flex 容器中
      const flexContainer = document.querySelector('.ant-flex');
      expect(flexContainer).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      const customClass = 'custom-switch';
      render(<Switch className={customClass} />);

      const element = document.querySelector('.' + customClass);
      expect(element).toBeInTheDocument();
    });
  });

  describe('label 属性测试', () => {
    it('应该正确渲染 label 文本', () => {
      const labelText = '开启通知';
      render(<Switch label={labelText} />);

      const labelElement = document.querySelector('.spark-switch-label');
      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveTextContent(labelText);
    });

    it('应该支持 ReactNode 类型的 label', () => {
      const labelNode = <span data-testid="custom-label">自定义标签</span>;
      render(<Switch label={labelNode} />);

      const customLabel = screen.getByTestId('custom-label');
      expect(customLabel).toBeInTheDocument();
      expect(customLabel).toHaveTextContent('自定义标签');
    });

    it('当没有 label 时，不应该渲染 label 元素', () => {
      render(<Switch />);

      const labelElement = document.querySelector('.spark-switch-label');
      expect(labelElement).not.toBeInTheDocument();
    });
  });

  describe('布局测试', () => {
    it('应该使用 Flex 布局，align="center" 和 gap=8', () => {
      render(<Switch label="测试标签" />);

      const flexContainer = document.querySelector('.ant-flex');
      expect(flexContainer).toBeInTheDocument();

      // 检查 Flex 容器包含 Switch 和 label
      const switchElement = flexContainer?.querySelector('.ant-switch');
      const labelElement = flexContainer?.querySelector('.spark-switch-label');
      expect(switchElement).toBeInTheDocument();
      expect(labelElement).toBeInTheDocument();
    });
  });

  describe('属性传递测试', () => {
    it('应该正确传递 Switch 的原生属性', () => {
      const onChange = jest.fn();
      render(
        <Switch checked={true} onChange={onChange} data-testid="switch-test" />,
      );

      const switchElement = screen.getByTestId('switch-test');
      expect(switchElement).toBeInTheDocument();
      expect(switchElement).toBeChecked();
    });
  });
});
