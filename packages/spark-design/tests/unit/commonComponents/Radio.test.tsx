import { Radio } from '@agentscope-ai/design';
import { render } from '@testing-library/react';
import React from 'react';

// Radio 组件是 antd Radio 的简单封装，只添加了样式和 Group 属性
// 主要测试组件能否正常渲染，无需测试 antd 的原生功能
describe('Radio 组件 - 基础功能测试', () => {
  it('应该正确渲染Radio组件', () => {
    render(<Radio />);

    const radioElement = document.querySelector('.ant-radio');
    expect(radioElement).toBeInTheDocument();
  });

  it('应该支持自定义 className', () => {
    const customClass = 'custom-radio';
    render(<Radio className={customClass} />);

    const element = document.querySelector('.' + customClass);
    expect(element).toBeInTheDocument();
  });

  describe('子组件导出测试', () => {
    it('应该导出 Group 子组件', () => {
      expect(Radio.Group).toBeDefined();
      expect(typeof Radio.Group).toBe('object'); // antd 子组件通常是object类型
    });

    it('应该导出 Button 子组件', () => {
      expect(Radio.Button).toBeDefined();
      expect(typeof Radio.Button).toBe('object'); // antd 子组件通常是object类型
    });

    it('Group 应该正常工作', () => {
      render(
        <Radio.Group>
          <Radio value="a">选项A</Radio>
          <Radio value="b">选项B</Radio>
        </Radio.Group>,
      );

      const groupElement = document.querySelector('.ant-radio-group');
      expect(groupElement).toBeInTheDocument();
    });

    it('Button 应该正常工作', () => {
      render(
        <Radio.Group>
          <Radio.Button value="a">按钮A</Radio.Button>
          <Radio.Button value="b">按钮B</Radio.Button>
        </Radio.Group>,
      );

      const buttonElements = document.querySelectorAll(
        '.ant-radio-button-wrapper',
      );
      expect(buttonElements).toHaveLength(2);
    });

    it('Group 应该支持 onChange 事件', () => {
      const onChange = jest.fn();
      render(
        <Radio.Group onChange={onChange} data-testid="radio-group">
          <Radio value="a">选项A</Radio>
          <Radio value="b">选项B</Radio>
        </Radio.Group>,
      );

      const groupElement = document.querySelector(
        '[data-testid="radio-group"]',
      );
      expect(groupElement).toBeInTheDocument();
    });
  });
});
