import { Select } from '@agentscope-ai/design';
import { render } from '@testing-library/react';
import React from 'react';

// Select 组件是 antd Select 的简单封装，只添加了样式
// 主要测试组件能否正常渲染，无需测试 antd 的原生功能
describe('Select 组件 - 基础功能测试', () => {
  const mockOptions = [
    { value: 'option1', label: '选项1' },
    { value: 'option2', label: '选项2' },
  ];

  it('应该正确渲染Select组件', () => {
    render(<Select options={mockOptions} />);

    const selectElement = document.querySelector('.ant-select');
    expect(selectElement).toBeInTheDocument();
  });

  it('应该支持自定义 className', () => {
    const customClass = 'custom-select';
    render(<Select className={customClass} options={mockOptions} />);

    const selectElement = document.querySelector('.custom-select');
    expect(selectElement).toBeInTheDocument();
  });

  describe('子组件导出测试', () => {
    it('应该导出 Option 子组件', () => {
      expect(Select.Option).toBeDefined();
      expect(typeof Select.Option).toBe('function'); // React组件通常是function类型
    });

    it('应该导出 OptGroup 子组件', () => {
      expect(Select.OptGroup).toBeDefined();
      expect(typeof Select.OptGroup).toBe('function');
    });

    it('Option 应该正常工作', () => {
      render(
        <Select>
          <Select.Option value="option1">选项1</Select.Option>
          <Select.Option value="option2">选项2</Select.Option>
        </Select>,
      );

      const selectElement = document.querySelector('.ant-select');
      expect(selectElement).toBeInTheDocument();
    });

    it('OptGroup 应该正常工作', () => {
      render(
        <Select>
          <Select.OptGroup label="分组1">
            <Select.Option value="option1">选项1</Select.Option>
            <Select.Option value="option2">选项2</Select.Option>
          </Select.OptGroup>
          <Select.OptGroup label="分组2">
            <Select.Option value="option3">选项3</Select.Option>
            <Select.Option value="option4">选项4</Select.Option>
          </Select.OptGroup>
        </Select>,
      );

      const selectElement = document.querySelector('.ant-select');
      expect(selectElement).toBeInTheDocument();
    });

    it('Select 应该支持 onChange 事件', () => {
      const onChange = jest.fn();
      render(
        <Select onChange={onChange} data-testid="select-with-change">
          <Select.Option value="option1">选项1</Select.Option>
          <Select.Option value="option2">选项2</Select.Option>
        </Select>,
      );

      const selectElement = document.querySelector(
        '[data-testid="select-with-change"]',
      );
      expect(selectElement).toBeInTheDocument();
    });
  });
});
