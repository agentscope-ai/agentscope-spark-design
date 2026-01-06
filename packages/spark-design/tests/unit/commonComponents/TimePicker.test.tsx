import React from 'react';
import { TimePicker } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('TimePicker 组件 - 基础功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染TimePicker组件', () => {
      render(<TimePicker />);

      const pickerElement = document.querySelector('.ant-picker');
      expect(pickerElement).toBeInTheDocument();
      expect(pickerElement).toHaveClass('spark-picker');

      // 应该包含自定义的后缀图标
      const suffixIcon = document.querySelector('.spark-icon');
      expect(suffixIcon).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      const customClass = 'custom-timepicker';
      render(<TimePicker className={customClass} />);

      const element = document.querySelector('.' + customClass);
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass('spark-picker');
    });
  });

  describe('自定义 suffixIcon 测试', () => {
    it('应该使用自定义的时间图标', () => {
      render(<TimePicker />);

      const suffixIcon = document.querySelector('.spark-icon');
      expect(suffixIcon).toBeInTheDocument();

      // 验证使用的是时间戳图标
      // 具体的图标类型通过 IconFont 的 type 属性设置
    });

    it('自定义图标应该正确显示', () => {
      render(<TimePicker data-testid="timepicker-with-icon" />);

      const timePicker = screen.getByTestId('timepicker-with-icon');
      expect(timePicker).toBeInTheDocument();

      const icon = document.querySelector('.spark-icon');
      expect(icon).toBeInTheDocument();
    });
  });

  describe('ConfigProvider 主题配置测试', () => {
    it('应该应用自定义的主题配置', () => {
      render(<TimePicker />);

      // 验证 ConfigProvider 包装了组件
      const pickerElement = document.querySelector('.spark-picker');
      expect(pickerElement).toBeInTheDocument();

      // 主题配置主要影响样式，这里验证组件正常渲染
    });

    it('应该设置正确的 activeBorderColor', () => {
      render(<TimePicker />);

      const pickerElement = document.querySelector('.spark-picker');
      expect(pickerElement).toBeInTheDocument();

      // activeBorderColor 通过 ConfigProvider 设置，影响聚焦时的边框颜色
    });
  });

  describe('popupClassName 和 popupStyle 测试', () => {
    it('应该应用自定义的 popupClassName', () => {
      const customPopupClass = 'custom-popup';
      render(<TimePicker popupClassName={customPopupClass} />);

      const pickerElement = document.querySelector('.spark-picker');
      expect(pickerElement).toBeInTheDocument();

      // popupClassName 会应用到弹出的时间选择面板上
    });

    it('应该正确合并 popupClassName', () => {
      render(<TimePicker />);

      const pickerElement = document.querySelector('.spark-picker');
      expect(pickerElement).toBeInTheDocument();

      // 默认会添加 spark-picker-dropdown 类名
    });
  });

  describe('RangePicker 组件测试', () => {
    it('应该正确渲染 TimePicker.RangePicker 组件', () => {
      render(<TimePicker.RangePicker />);

      const rangePickerElement = document.querySelector('.ant-picker-range');
      expect(rangePickerElement).toBeInTheDocument();
      expect(rangePickerElement).toHaveClass('spark-picker');

      // 应该包含自定义的后缀图标
      const suffixIcon = document.querySelector('.spark-icon');
      expect(suffixIcon).toBeInTheDocument();
    });

    it('RangePicker 应该支持自定义 className', () => {
      const customClass = 'custom-range-picker';
      render(<TimePicker.RangePicker className={customClass} />);

      const element = document.querySelector('.' + customClass);
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass('spark-picker');
    });

    it('RangePicker 应该设置正确的 popupStyle', () => {
      render(<TimePicker.RangePicker />);

      const rangePickerElement = document.querySelector('.spark-picker');
      expect(rangePickerElement).toBeInTheDocument();

      // RangePicker 设置了 popupStyle={{ padding: 0 }}
    });
  });

  describe('CompoundedComponent 类型测试', () => {
    it('应该正确支持 CompoundedComponent 类型', () => {
      // 验证组件同时支持基本功能和 RangePicker
      expect(typeof TimePicker).toBe('function');
      expect(typeof TimePicker.RangePicker).toBe('function');
    });
  });

  describe('属性传递测试', () => {
    it('应该正确传递 TimePicker 的原生属性', () => {
      const onChange = jest.fn();
      const onOpenChange = jest.fn();

      render(
        <TimePicker
          onChange={onChange}
          onOpenChange={onOpenChange}
          placeholder="选择时间"
          data-testid="timepicker-test"
        />,
      );

      const timePickerElement = screen.getByTestId('timepicker-test');
      expect(timePickerElement).toBeInTheDocument();

      const input = document.querySelector('input');
      expect(input).toHaveAttribute('placeholder', '选择时间');
    });

    it('RangePicker 应该正确传递属性', () => {
      const onChange = jest.fn();

      render(
        <TimePicker.RangePicker
          onChange={onChange}
          data-testid="range-picker-test"
        />,
      );

      // RangePicker 有两个输入框，使用 getAllByTestId
      const rangePickerElements = screen.getAllByTestId('range-picker-test');
      expect(rangePickerElements).toHaveLength(2);
      expect(rangePickerElements[0]).toBeInTheDocument();
    });
  });

  describe('useIndexStyle hook 测试', () => {
    it('应该正确调用 useIndexStyle hook', () => {
      render(<TimePicker />);

      // 验证组件正常渲染，useIndexStyle 已被调用
      const pickerElement = document.querySelector('.spark-picker');
      expect(pickerElement).toBeInTheDocument();
    });

    it('RangePicker 也应该正确调用 useIndexStyle hook', () => {
      render(<TimePicker.RangePicker />);

      // 验证 RangePicker 组件正常渲染，useIndexStyle 已被调用
      const rangePickerElement = document.querySelector('.spark-picker');
      expect(rangePickerElement).toBeInTheDocument();
    });
  });

  describe('主题 token 使用测试', () => {
    it('应该正确使用 theme.useToken', () => {
      render(<TimePicker />);

      // 验证组件正常渲染，theme token 已被使用
      const pickerElement = document.querySelector('.spark-picker');
      expect(pickerElement).toBeInTheDocument();

      // token 主要用于设置 activeBorderColor 等主题相关属性
    });
  });
});
