import React from 'react';
import { RadioButton } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';

describe('RadioButton 组件 - 基础功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const options = [
    { label: '选项1', value: 'option1' },
    { label: '选项2', value: 'option2' },
    { label: '选项3', value: 'option3' },
  ];

  describe('基础渲染测试', () => {
    it('应该正确渲染RadioButton组件', () => {
      render(<RadioButton options={options} />);

      const radioGroup = document.querySelector('.ant-radio-group');
      expect(radioGroup).toBeInTheDocument();

      // 应该渲染为按钮类型
      const radioButtons = document.querySelectorAll(
        '.ant-radio-button-wrapper',
      );
      expect(radioButtons).toHaveLength(3);
    });

    it('应该支持自定义 className', () => {
      const customClass = 'custom-radiobutton';
      render(<RadioButton className={customClass} options={options} />);

      const element = document.querySelector('.' + customClass);
      expect(element).toBeInTheDocument();
    });
  });

  describe('bordered 属性测试', () => {
    it('应该默认不显示边框 (bordered=false)', () => {
      render(<RadioButton options={options} />);

      const radioGroup = document.querySelector('.ant-radio-group');
      expect(radioGroup).toBeInTheDocument();
      expect(radioGroup).not.toHaveClass('spark-radio-group-bordered');
    });

    it('应该支持显示边框', () => {
      render(<RadioButton bordered={true} options={options} />);

      const radioGroup = document.querySelector('.spark-radio-group-bordered');
      expect(radioGroup).toBeInTheDocument();
    });
  });

  describe('ghost 属性测试', () => {
    it('应该默认使用 ghost 样式 (ghost=true)', () => {
      render(<RadioButton options={options} />);

      const radioGroup = document.querySelector('.ant-radio-group-ghost');
      expect(radioGroup).toBeInTheDocument();
    });

    it('应该支持关闭 ghost 样式', () => {
      render(<RadioButton ghost={false} options={options} />);

      const radioGroup = document.querySelector('.ant-radio-group');
      expect(radioGroup).toBeInTheDocument();
      expect(radioGroup).not.toHaveClass('ant-radio-group-ghost');
    });
  });

  describe('gap 属性测试', () => {
    it('应该默认使用 12px 间距', () => {
      render(<RadioButton options={options} />);

      // gap 属性通过样式传递，这里主要验证组件正常渲染
      const radioGroup = document.querySelector('.ant-radio-group');
      expect(radioGroup).toBeInTheDocument();
    });

    it('应该支持自定义间距', () => {
      render(<RadioButton gap={20} options={options} />);

      const radioGroup = document.querySelector('.ant-radio-group');
      expect(radioGroup).toBeInTheDocument();
    });
  });

  describe('className 组合测试', () => {
    it('应该正确组合类名', () => {
      render(
        <RadioButton
          bordered={true}
          ghost={true}
          className="custom-class"
          options={options}
        />,
      );

      const radioGroup = document.querySelector('.ant-radio-group');
      expect(radioGroup).toBeInTheDocument();
      expect(radioGroup).toHaveClass('custom-class');
      expect(radioGroup).toHaveClass('spark-radio-group-bordered');
      expect(radioGroup).toHaveClass('ant-radio-group-ghost');
    });
  });

  describe('optionType 测试', () => {
    it('应该强制使用 button 类型', () => {
      render(<RadioButton options={options} />);

      // 验证渲染的是按钮样式的 radio
      const radioButtons = document.querySelectorAll(
        '.ant-radio-button-wrapper',
      );
      expect(radioButtons).toHaveLength(3);

      // 不应该有普通的 radio 样式
      const normalRadios = document.querySelectorAll(
        '.ant-radio-wrapper:not(.ant-radio-button-wrapper)',
      );
      expect(normalRadios).toHaveLength(0);
    });
  });

  describe('属性传递测试', () => {
    it('应该正确传递 Radio.Group 的原生属性', () => {
      const onChange = jest.fn();
      render(
        <RadioButton
          options={options}
          value="option1"
          onChange={onChange}
          data-testid="radiobutton-test"
        />,
      );

      const radioGroup = screen.getByTestId('radiobutton-test');
      expect(radioGroup).toBeInTheDocument();

      // 验证选中状态
      const selectedButton = document.querySelector(
        '.ant-radio-button-wrapper-checked',
      );
      expect(selectedButton).toBeInTheDocument();
    });
  });


});
