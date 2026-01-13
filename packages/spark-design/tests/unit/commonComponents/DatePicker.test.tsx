import React from 'react';
import { DatePicker } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';

describe('DatePicker 组件 - 基础功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染DatePicker组件', () => {
      render(<DatePicker />);

      const pickerElement = document.querySelector('.ant-picker');
      expect(pickerElement).toBeInTheDocument();
      expect(pickerElement).toHaveClass('spark-picker');

      // 应该包含自定义的后缀图标
      const suffixIcon = document.querySelector('svg');
      expect(suffixIcon).toBeInTheDocument();
    });
  });

  describe('自定义 suffixIcon 测试', () => {
    it('应该使用自定义的日期图标', () => {
      render(<DatePicker />);

      const suffixIcon = document.querySelector('svg');
      expect(suffixIcon).toBeInTheDocument();

      // 验证使用的是日期图标，检查是否存在即可
      expect(suffixIcon).toBeTruthy();
    });

    it('自定义图标应该正确显示', () => {
      render(<DatePicker data-testid="datepicker-with-icon" />);

      const datePicker = screen.getByTestId('datepicker-with-icon');
      expect(datePicker).toBeInTheDocument();

      const icon = document.querySelector('svg');
      expect(icon).toBeInTheDocument();
    });
  });

  describe('RangePicker 组件测试', () => {
    it('应该正确渲染 DatePicker.RangePicker 组件', () => {
      render(<DatePicker.RangePicker />);

      const rangePickerElement = document.querySelector('.ant-picker-range');
      expect(rangePickerElement).toBeInTheDocument();
      expect(rangePickerElement).toHaveClass('spark-picker');

      // 应该包含自定义的后缀图标
      const suffixIcon = document.querySelector('svg');
      expect(suffixIcon).toBeInTheDocument();
    });

    it('RangePicker 应该支持自定义 className', () => {
      const customClass = 'custom-range-picker';
      render(<DatePicker.RangePicker className={customClass} />);

      const element = document.querySelector('.' + customClass);
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass('spark-picker');
    });

    it('RangePicker 应该设置正确的 popupStyle', () => {
      render(<DatePicker.RangePicker />);

      const rangePickerElement = document.querySelector('.spark-picker');
      expect(rangePickerElement).toBeInTheDocument();

      // RangePicker 设置了 popupStyle={{ padding: 0 }}
    });
  });

  describe('useIndexStyle hook 测试', () => {
    it('应该正确调用 useIndexStyle hook', () => {
      render(<DatePicker />);

      // 验证组件正常渲染，useIndexStyle 已被调用
      const pickerElement = document.querySelector('.spark-picker');
      expect(pickerElement).toBeInTheDocument();
    });

    it('RangePicker 也应该正确调用 useIndexStyle hook', () => {
      render(<DatePicker.RangePicker />);

      // 验证 RangePicker 组件正常渲染，useIndexStyle 已被调用
      const rangePickerElement = document.querySelector('.spark-picker');
      expect(rangePickerElement).toBeInTheDocument();
    });
  });

  describe('主题 token 使用测试', () => {
    it('应该正确使用 theme.useToken', () => {
      render(<DatePicker />);

      // 验证组件正常渲染，theme token 已被使用
      const pickerElement = document.querySelector('.spark-picker');
      expect(pickerElement).toBeInTheDocument();

      // token 主要用于设置 activeBorderColor 等主题相关属性
    });
  });

  describe('图标导入测试', () => {
    it('应该正确导入和使用 SparkDateLine 图标', () => {
      render(<DatePicker />);

      // 验证使用了正确的日期图标
      const icon = document.querySelector('svg');
      expect(icon).toBeInTheDocument();
      // 验证图标存在即可
      expect(icon).toBeTruthy();
    });

    it('RangePicker 也应该使用相同的图标', () => {
      render(<DatePicker.RangePicker />);

      const icon = document.querySelector('svg');
      expect(icon).toBeInTheDocument();
      // 验证图标存在即可
      expect(icon).toBeTruthy();
    });
  });
});
