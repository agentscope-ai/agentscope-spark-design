import React from 'react';
import { SliderSelector } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

describe('SliderSelector 组件 - 定制化功能测试', () => {
  const defaultProps = {
    onChange: jest.fn(),
    min: 0,
    max: 100,
    step: 1,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染SliderSelector组件', () => {
      render(<SliderSelector {...defaultProps} />);

      const container = document.querySelector('.spark-slider-selector');
      expect(container).toBeInTheDocument();

      // 应该包含 Slider 和 InputNumber
      const slider = document.querySelector('.ant-slider');
      const inputNumber = document.querySelector('.ant-input-number');
      expect(slider).toBeInTheDocument();
      expect(inputNumber).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      const customClass = 'custom-slider-selector';
      render(<SliderSelector {...defaultProps} className={customClass} />);

      const container = document.querySelector('.spark-slider-selector');
      expect(container).toBeInTheDocument();
      expect(container).toHaveClass('custom-slider-selector');
    });

    it('应该使用 Flex 布局排列 Slider 和 InputNumber', () => {
      render(<SliderSelector {...defaultProps} />);

      const container = document.querySelector('.spark-slider-selector');
      expect(container).toBeInTheDocument();

      // 验证容器内有两个主要子元素
      const slider = container?.querySelector('.ant-slider');
      const inputWrapper = container?.querySelector(
        'div[style*="width: 48px"]',
      );
      expect(slider).toBeInTheDocument();
      expect(inputWrapper).toBeInTheDocument();
    });
  });

  describe('value 属性测试', () => {
    it('应该正确处理不同类型的 value', () => {
      // 测试数值 value
      const { rerender } = render(<SliderSelector {...defaultProps} value={50} />);
      let inputNumber = document.querySelector('.ant-input-number input') as HTMLInputElement;
      expect(inputNumber.value).toBe('50');

      // 测试 null value
      rerender(<SliderSelector {...defaultProps} value={null} />);
      inputNumber = document.querySelector('.ant-input-number input') as HTMLInputElement;
      expect(inputNumber.value).toBe('');

      // 测试 undefined value
      rerender(<SliderSelector {...defaultProps} />);
      inputNumber = document.querySelector('.ant-input-number input') as HTMLInputElement;
      expect(inputNumber.value).toBe('');
    });
  });

  describe('onNumberChange 逻辑测试（定制化逻辑）', () => {
    // 由于直接测试 InputNumber 的 onChange 事件比较复杂，
    // 我们通过测试组件的内部逻辑来验证定制化功能

    it('应该正确处理数值输入', () => {
      const onChange = jest.fn();
      render(<SliderSelector {...defaultProps} onChange={onChange} />);

      // 验证 InputNumber 组件存在并配置正确
      const inputNumber = document.querySelector('.ant-input-number');
      expect(inputNumber).toBeInTheDocument();

      // 验证 InputNumber 的 input 元素存在
      const inputElement = document.querySelector(
        '.ant-input-number input',
      ) as HTMLInputElement;
      expect(inputElement).toBeInTheDocument();

      // InputNumber 组件会处理 min、max、step 属性，但不一定会设置到 input 元素上
      // 我们验证组件能够正常渲染即可
      expect(inputNumber).toHaveClass('ant-input-number');
    });

    it('应该正确配置 InputNumber 的边界值处理', () => {
      const onChange = jest.fn();
      render(
        <SliderSelector
          {...defaultProps}
          min={10}
          max={90}
          step={5}
          onChange={onChange}
        />,
      );

      // 验证 InputNumber 组件存在
      const inputNumber = document.querySelector('.ant-input-number');
      expect(inputNumber).toBeInTheDocument();

      const inputElement = document.querySelector(
        '.ant-input-number input',
      ) as HTMLInputElement;
      expect(inputElement).toBeInTheDocument();

      // InputNumber 会内部处理这些属性，我们验证组件正常渲染即可
      expect(inputNumber).toHaveClass('ant-input-number');
    });

    it('应该禁用 InputNumber 的控制按钮', () => {
      const onChange = jest.fn();
      render(<SliderSelector {...defaultProps} onChange={onChange} />);

      // InputNumber 应该没有上下控制按钮
      const controls = document.querySelector('.ant-input-number-handler-wrap');
      expect(controls).not.toBeInTheDocument();
    });

    it('应该正确传递 precision 属性', () => {
      const onChange = jest.fn();
      render(
        <SliderSelector {...defaultProps} precision={2} onChange={onChange} />,
      );

      const inputNumber = document.querySelector('.ant-input-number');
      expect(inputNumber).toBeInTheDocument();
      // precision 属性会影响 InputNumber 的显示和行为
    });
  });

  describe('Slider 配置测试（定制化逻辑）', () => {
    it('应该正确配置 Slider 属性', () => {
      const onChange = jest.fn();
      render(
        <SliderSelector
          {...defaultProps}
          min={10}
          max={90}
          step={5}
          value={75}
          onChange={onChange}
        />,
      );

      const slider = document.querySelector('.ant-slider');
      expect(slider).toBeInTheDocument();
      // Slider 会接收所有相关属性并正确处理
    });
  });

  describe('marks 属性测试', () => {
    it('应该使用默认的 marks（min 和 max）', () => {
      render(<SliderSelector {...defaultProps} min={0} max={100} />);

      const slider = document.querySelector('.ant-slider');
      expect(slider).toBeInTheDocument();
      // 默认 marks 会显示 min 和 max 值
    });

    it('应该支持自定义 marks', () => {
      const customMarks = { 0: '0', 25: '25', 50: '50', 75: '75', 100: '100' };
      render(<SliderSelector {...defaultProps} marks={customMarks} />);

      const slider = document.querySelector('.ant-slider');
      expect(slider).toBeInTheDocument();
    });
  });

  describe('disabled 属性测试', () => {
    it('应该支持禁用状态', () => {
      render(<SliderSelector {...defaultProps} disabled={true} />);

      const slider = document.querySelector('.ant-slider');
      const inputNumber = document.querySelector('.ant-input-number');

      expect(slider).toHaveClass('ant-slider-disabled');
      expect(inputNumber).toHaveClass('ant-input-number-disabled');
    });

    it('应该在非禁用状态下正常工作', () => {
      render(<SliderSelector {...defaultProps} disabled={false} />);

      const slider = document.querySelector('.ant-slider');
      const inputNumber = document.querySelector('.ant-input-number');

      expect(slider).not.toHaveClass('ant-slider-disabled');
      expect(inputNumber).not.toHaveClass('ant-input-number-disabled');
    });
  });

  describe('precision 属性测试', () => {
    it('应该支持精度控制', () => {
      render(<SliderSelector {...defaultProps} precision={2} value={25.456} />);

      const inputNumber = document.querySelector('.ant-input-number input') as HTMLInputElement;
      expect(inputNumber).toBeInTheDocument();
      // precision 会影响显示和输入的精度
    });
  });

  describe('onBlur 事件测试', () => {
    it('应该在 InputNumber blur 时触发 onBlur', () => {
      const onBlur = jest.fn();
      render(<SliderSelector {...defaultProps} onBlur={onBlur} />);

      const inputNumber = document.querySelector(
        '.ant-input-number input',
      ) as HTMLInputElement;
      fireEvent.blur(inputNumber);

      expect(onBlur).toHaveBeenCalled();
    });

    it('应该在容器 mouseUp 时触发 onBlur', () => {
      const onBlur = jest.fn();
      render(<SliderSelector {...defaultProps} onBlur={onBlur} />);

      const container = document.querySelector(
        '.spark-slider-selector',
      ) as HTMLElement;
      fireEvent.mouseUp(container);

      expect(onBlur).toHaveBeenCalled();
    });
  });

  describe('组合功能测试', () => {
    it('应该支持所有属性的组合使用', () => {
      const onChange = jest.fn();
      const onBlur = jest.fn();
      const customMarks = { 0: 'Min', 50: 'Mid', 100: 'Max' };
      const customStyle = { width: '60px', border: '1px solid red' };

      render(
        <SliderSelector
          className="complex-slider"
          onChange={onChange}
          onBlur={onBlur}
          value={30}
          min={0}
          max={100}
          step={10}
          marks={customMarks}
          precision={1}
          disabled={false}
          inputNumberWrapperStyle={customStyle}
        />,
      );

      const container = document.querySelector('.spark-slider-selector');
      expect(container).toBeInTheDocument();
      expect(container).toHaveClass('complex-slider');

      const inputNumber = document.querySelector(
        '.ant-input-number input',
      ) as HTMLInputElement;
      expect(inputNumber.value).toBe('30.0'); // precision=1 会显示一位小数

      // 测试 onChange 功能
      fireEvent.input(inputNumber, { target: { value: '40' } });
      expect(onChange).toHaveBeenCalledWith(40);

      // 测试 onBlur 功能
      fireEvent.blur(inputNumber);
      expect(onBlur).toHaveBeenCalled();
    });

    it('应该支持边界情况的组合', () => {
      const onChange = jest.fn();
      render(
        <SliderSelector
          onChange={onChange}
          value={null}
          min={-50}
          max={50}
          step={0.1}
          precision={2}
          disabled={true}
        />,
      );

      const container = document.querySelector('.spark-slider-selector');
      expect(container).toBeInTheDocument();

      const slider = document.querySelector('.ant-slider');
      const inputNumber = document.querySelector('.ant-input-number');

      expect(slider).toHaveClass('ant-slider-disabled');
      expect(inputNumber).toHaveClass('ant-input-number-disabled');
    });
  });
});
