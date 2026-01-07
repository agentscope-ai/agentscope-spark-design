import { Tabs } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

// Mock Segmented component
jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  Segmented: ({ options, onChange, className, value, size }) => (
    <div
      data-testid="segmented"
      className={className}
      data-value={value}
      data-size={size}
    >
      {options.map((option) => (
        <button
          key={option.value}
          data-testid={`segmented-option-${option.value}`}
          disabled={option.disabled}
          onClick={() => onChange?.(option.value)}
          className={value === option.value ? 'active' : ''}
        >
          {option.label}
        </button>
      ))}
    </div>
  ),
}));

describe('Tabs 组件 - 定制化功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockItems = [
    {
      key: 'tab1',
      label: '标签1',
      children: <div>内容1</div>,
    },
    {
      key: 'tab2',
      label: '标签2',
      children: <div>内容2</div>,
    },
    {
      key: 'tab3',
      label: '标签3',
      children: <div>内容3</div>,
      disabled: true,
    },
  ];

  describe('基础渲染测试', () => {
    it('应该正确渲染Tabs组件', () => {
      render(<Tabs items={mockItems} />);

      expect(screen.getByText('标签1')).toBeInTheDocument();
      expect(screen.getByText('标签2')).toBeInTheDocument();
      expect(screen.getByText('标签3')).toBeInTheDocument();
    });

    it('应该默认选中第一个标签', () => {
      render(<Tabs items={mockItems} />);

      // 默认类型不是 segmented，应该渲染普通的 tabs
      expect(screen.getByText('标签1')).toBeInTheDocument();
      expect(screen.getByText('标签2')).toBeInTheDocument();
      expect(screen.getByText('标签3')).toBeInTheDocument();
    });
  });

  describe('type 属性测试（定制化功能 - className 区分）', () => {
    it('应该默认使用普通 tabs 类型', () => {
      const { container } = render(<Tabs items={mockItems} />);

      // 默认应该使用普通的 Tabs，不是 segmented
      expect(screen.queryByTestId('segmented')).not.toBeInTheDocument();
      expect(container.querySelector('.ant-tabs')).toBeInTheDocument();
    });

    it('应该支持显式设置 segmented 类型并应用对应 className', () => {
      render(<Tabs items={mockItems} type="segmented" />);

      expect(screen.getByTestId('segmented')).toBeInTheDocument();

      const segmented = screen.getByTestId('segmented');
      expect(segmented).toHaveClass('spark-segmented-tab-bar');
    });

    it('应该支持 line 类型（使用原生 Tabs，无特殊 className）', () => {
      const { container } = render(<Tabs items={mockItems} type="line" />);

      // line 类型应该使用原生 Tabs，不应该有 Segmented
      expect(screen.queryByTestId('segmented')).not.toBeInTheDocument();
      expect(container.querySelector('.ant-tabs')).toBeInTheDocument();

      // 不应该有 segmented 相关的 className
      expect(
        container.querySelector('.spark-segmented-tab-bar'),
      ).not.toBeInTheDocument();
    });

    it('应该支持 card 类型（使用原生 Tabs，无特殊 className）', () => {
      const { container } = render(<Tabs items={mockItems} type="card" />);

      expect(screen.queryByTestId('segmented')).not.toBeInTheDocument();
      expect(container.querySelector('.ant-tabs')).toBeInTheDocument();

      // 不应该有 segmented 相关的 className
      expect(
        container.querySelector('.spark-segmented-tab-bar'),
      ).not.toBeInTheDocument();
    });

    it('应该支持 editable-card 类型（使用原生 Tabs，无特殊 className）', () => {
      const { container } = render(
        <Tabs items={mockItems} type="editable-card" />,
      );

      expect(screen.queryByTestId('segmented')).not.toBeInTheDocument();
      expect(container.querySelector('.ant-tabs')).toBeInTheDocument();

      // 不应该有 segmented 相关的 className
      expect(
        container.querySelector('.spark-segmented-tab-bar'),
      ).not.toBeInTheDocument();
    });
  });

  describe('segmented 类型特殊功能测试', () => {
    it('应该禁用动画 (animated=false)', () => {
      const { container } = render(<Tabs items={mockItems} type="segmented" />);

      // segmented 类型应该设置 animated=false
      const tabs = container.querySelector('.ant-tabs');
      expect(tabs).toBeInTheDocument();
    });

    it('应该将 items 转换为 Segmented 的 options', () => {
      render(<Tabs items={mockItems} type="segmented" />);

      const segmented = screen.getByTestId('segmented');
      expect(segmented).toBeInTheDocument();

      // 应该有对应的选项按钮
      expect(screen.getByTestId('segmented-option-tab1')).toBeInTheDocument();
      expect(screen.getByTestId('segmented-option-tab2')).toBeInTheDocument();
      expect(screen.getByTestId('segmented-option-tab3')).toBeInTheDocument();
    });

    it('应该正确处理禁用状态', () => {
      render(<Tabs items={mockItems} type="segmented" />);

      const disabledOption = screen.getByTestId('segmented-option-tab3');
      expect(disabledOption).toBeDisabled();
    });

    it('应该应用正确的类名', () => {
      render(<Tabs items={mockItems} type="segmented" />);

      const segmented = screen.getByTestId('segmented');
      expect(segmented).toHaveClass('spark-segmented-tab-bar');
    });

    it('应该支持 centered 属性并应用对应 className', () => {
      render(<Tabs items={mockItems} type="segmented" centered />);

      const segmented = screen.getByTestId('segmented');
      expect(segmented).toHaveClass('spark-segmented-tab-bar');
      expect(segmented).toHaveClass('spark-segmented-tab-bar-centered');
    });

    it('应该传递 size 属性给 Segmented', () => {
      render(<Tabs items={mockItems} type="segmented" size="large" />);

      const segmented = screen.getByTestId('segmented');
      expect(segmented).toHaveAttribute('data-size', 'large');
    });
  });

  describe('状态管理测试（定制化功能）', () => {
    it('应该支持受控模式 (activeKey)', () => {
      render(<Tabs items={mockItems} type="segmented" activeKey="tab2" />);

      const segmented = screen.getByTestId('segmented');
      expect(segmented).toHaveAttribute('data-value', 'tab2');
    });

    it('应该支持非受控模式 (defaultActiveKey)', () => {
      render(
        <Tabs items={mockItems} type="segmented" defaultActiveKey="tab2" />,
      );

      const segmented = screen.getByTestId('segmented');
      expect(segmented).toHaveAttribute('data-value', 'tab2');
    });

    it('activeKey 应该优先于 defaultActiveKey', () => {
      render(
        <Tabs
          items={mockItems}
          type="segmented"
          activeKey="tab1"
          defaultActiveKey="tab2"
        />,
      );

      const segmented = screen.getByTestId('segmented');
      expect(segmented).toHaveAttribute('data-value', 'tab1');
    });

    it('没有指定 activeKey 或 defaultActiveKey 时应该默认选中第一项', () => {
      render(<Tabs items={mockItems} type="segmented" />);

      const segmented = screen.getByTestId('segmented');
      expect(segmented).toHaveAttribute('data-value', 'tab1');
    });
  });

  describe('onChange 事件测试', () => {
    it('点击 Segmented 选项应该触发 onChange', () => {
      const onChange = jest.fn();
      render(<Tabs items={mockItems} type="segmented" onChange={onChange} />);

      const option2 = screen.getByTestId('segmented-option-tab2');
      fireEvent.click(option2);

      expect(onChange).toHaveBeenCalledWith('tab2');
    });

    it('onChange 应该更新内部状态', () => {
      const { rerender } = render(<Tabs items={mockItems} type="segmented" />);

      // 初始状态
      let segmented = screen.getByTestId('segmented');
      expect(segmented).toHaveAttribute('data-value', 'tab1');

      // 点击第二个选项
      const option2 = screen.getByTestId('segmented-option-tab2');
      fireEvent.click(option2);

      // 状态应该更新
      segmented = screen.getByTestId('segmented');
      expect(segmented).toHaveAttribute('data-value', 'tab2');
    });

    it('非 segmented 类型不应该有特殊的 onChange 处理', () => {
      const onChange = jest.fn();
      render(<Tabs items={mockItems} type="line" onChange={onChange} />);

      // line 类型使用原生 Tabs，不会有 segmented 组件
      expect(screen.queryByTestId('segmented')).not.toBeInTheDocument();
    });
  });

  describe('属性传递测试', () => {
    it('segmented 类型应该正确传递属性给内部 Tabs', () => {
      const { container } = render(
        <Tabs
          items={mockItems}
          type="segmented"
          className="custom-tabs"
          style={{ margin: '10px' }}
        />,
      );

      const tabs = container.querySelector('.ant-tabs');
      expect(tabs).toBeInTheDocument();
    });

    it('非 segmented 类型应该直接传递所有属性', () => {
      const { container } = render(
        <Tabs
          items={mockItems}
          type="card"
          className="custom-tabs"
          tabPosition="left"
        />,
      );

      const tabs = container.querySelector('.ant-tabs');
      expect(tabs).toBeInTheDocument();
    });
  });

  describe('renderTabBar 自定义测试', () => {
    it('segmented 类型应该使用自定义的 renderTabBar', () => {
      render(<Tabs items={mockItems} type="segmented" />);

      // 应该渲染 Segmented 而不是默认的 tab bar
      expect(screen.getByTestId('segmented')).toBeInTheDocument();
    });

    it('自定义 renderTabBar 应该接收正确的 tabProps', () => {
      render(<Tabs items={mockItems} type="segmented" activeKey="tab2" />);

      // Segmented 应该接收到正确的 activeKey
      const segmented = screen.getByTestId('segmented');
      expect(segmented).toHaveAttribute('data-value', 'tab2');
    });
  });

  describe('子组件导出测试', () => {
    it('应该导出 TabPane 子组件', () => {
      expect(Tabs.TabPane).toBeDefined();
      expect(typeof Tabs.TabPane).toBe('function'); // React组件通常是function类型
    });

    it('TabPane 应该正常工作', () => {
      render(
        <Tabs>
          <Tabs.TabPane tab="标签1" key="1">
            内容1
          </Tabs.TabPane>
          <Tabs.TabPane tab="标签2" key="2">
            内容2
          </Tabs.TabPane>
        </Tabs>,
      );

      // 验证 TabPane 能正常渲染
      expect(screen.getByText('标签1')).toBeInTheDocument();
      expect(screen.getByText('标签2')).toBeInTheDocument();
    });

    it('TabPane 应该支持 disabled 属性', () => {
      render(
        <Tabs>
          <Tabs.TabPane tab="正常标签" key="1">
            正常内容
          </Tabs.TabPane>
          <Tabs.TabPane tab="禁用标签" key="2" disabled>
            禁用内容
          </Tabs.TabPane>
        </Tabs>,
      );

      expect(screen.getByText('正常标签')).toBeInTheDocument();
      expect(screen.getByText('禁用标签')).toBeInTheDocument();
    });
  });

  describe('边界情况测试', () => {
    it('空 items 数组应该正常处理', () => {
      const { container } = render(<Tabs items={[]} type="segmented" />);

      const segmented = screen.queryByTestId('segmented');
      expect(segmented).toBeInTheDocument();
    });

    it('items 为 undefined 应该正常处理', () => {
      const { container } = render(<Tabs type="segmented" items={[]} />);

      // 应该不会崩溃，但是没有内容
      expect(container).toBeInTheDocument();
      const segmented = screen.queryByTestId('segmented');
      expect(segmented).toBeInTheDocument();
    });

    it('所有选项都被禁用时应该正常处理', () => {
      const disabledItems = mockItems.map((item) => ({
        ...item,
        disabled: true,
      }));
      render(<Tabs items={disabledItems} type="segmented" />);

      const options = screen.getAllByRole('button');
      options.forEach((option) => {
        expect(option).toBeDisabled();
      });
    });
  });
});
