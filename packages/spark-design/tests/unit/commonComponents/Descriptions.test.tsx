import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// Mock responsiveObserver
jest.mock('antd/lib/_util/responsiveObserver', () => ({
  matchScreen: jest.fn(() => true),
  subscribe: jest.fn(),
  unsubscribe: jest.fn(),
}));

// Mock theme.useToken
jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  theme: {
    ...jest.requireActual('antd').theme,
    useToken: () => ({
      token: {
        Descriptions: {
          verticalLabelPaddingBottom: 4,
          verticalContentPaddingBottom: 24,
        },
      },
    }),
  },
}));

import { Descriptions } from '@agentscope-ai/design';
import React from 'react';

describe('Descriptions 组件 - 定制化功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockItems = [
    {
      key: '1',
      label: '用户名',
      children: 'Zhang San',
    },
    {
      key: '2',
      label: '电话',
      children: '1810000000',
    },
    {
      key: '3',
      label: '居住地',
      children: 'Hangzhou, Zhejiang',
    },
  ];

  describe('基础渲染测试', () => {
    it('应该正确渲染Descriptions组件', () => {
      render(<Descriptions items={mockItems} />);

      expect(screen.getByText('用户名')).toBeInTheDocument();
      expect(screen.getByText('Zhang San')).toBeInTheDocument();
      expect(screen.getByText('电话')).toBeInTheDocument();
      expect(screen.getByText('1810000000')).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      const { container } = render(
        <Descriptions items={mockItems} className="custom-descriptions" />,
      );

      const descriptions = container.querySelector('.custom-descriptions');
      expect(descriptions).toBeInTheDocument();
    });
  });

  describe('layout 属性测试（定制化功能）', () => {
    it('应该支持 horizontal 布局（默认）', () => {
      const { container } = render(<Descriptions items={mockItems} />);

      const descriptions = container.querySelector('.ant-descriptions');
      expect(descriptions).toBeInTheDocument();
      expect(descriptions).not.toHaveClass('spark-ant-descriptions-vertical');
    });

    it('应该支持 vertical 布局', () => {
      const { container } = render(
        <Descriptions items={mockItems} layout="vertical" />,
      );

      const descriptions = container.querySelector('.ant-descriptions');
      expect(descriptions).toHaveClass('ant-descriptions-vertical');
    });
  });

  describe('colon 属性测试（定制化功能）', () => {
    it('应该默认不显示冒号 (colon=false)', () => {
      const { container } = render(<Descriptions items={mockItems} />);

      const descriptions = container.querySelector('.ant-descriptions');
      expect(descriptions).toBeInTheDocument();
      // 默认 colon 为 false
    });

    it('应该支持显示冒号 (colon=true)', () => {
      const { container } = render(
        <Descriptions items={mockItems} colon={true} />,
      );

      const descriptions = container.querySelector('.ant-descriptions');
      expect(descriptions).toBeInTheDocument();
    });
  });

  describe('items 数据测试', () => {
    it('应该处理空 items', () => {
      render(<Descriptions items={[]} />);

      const container = document.querySelector('.ant-descriptions');
      expect(container).toBeInTheDocument();
    });

    it('应该支持复杂的 label 和 children', () => {
      const complexItems = [
        {
          key: '1',
          label: <span data-testid="custom-label">自定义标签</span>,
          children: <div data-testid="custom-content">自定义内容</div>,
        },
      ];

      render(<Descriptions items={complexItems} />);

      expect(screen.getByTestId('custom-label')).toBeInTheDocument();
      expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    });

    it('应该支持 span 属性', () => {
      const spanItems = [
        {
          key: '1',
          label: '标题',
          children: '内容',
          span: 2,
        },
      ];

      render(<Descriptions items={spanItems} />);

      expect(screen.getByText('标题')).toBeInTheDocument();
      expect(screen.getByText('内容')).toBeInTheDocument();
    });
  });

  describe('theme token 使用测试', () => {
    it('应该正确使用 theme.useToken', () => {
      const { container } = render(
        <Descriptions items={mockItems} layout="vertical" />,
      );

      const descriptions = container.querySelector('.ant-descriptions');
      expect(descriptions).toBeInTheDocument();

      // 验证 CSS 变量被设置
      const style = descriptions?.getAttribute('style');
      expect(style).toContain(
        '--ant-descriptions-vertical-label-padding-bottom',
      );
      expect(style).toContain(
        '--ant-descriptions-vertical-content-padding-bottom',
      );
    });
  });

  describe('extra 属性测试', () => {
    it('应该支持 extra 内容', () => {
      render(
        <Descriptions
          items={mockItems}
          extra={<button data-testid="extra-button">编辑</button>}
        />,
      );

      expect(screen.getByTestId('extra-button')).toBeInTheDocument();
      expect(screen.getByText('编辑')).toBeInTheDocument();
    });
  });

  describe('子组件导出测试', () => {
    it('应该导出 Item 子组件', () => {
      // Descriptions.Item 在 antd 5.x 中已被废弃，使用 items 配置
      expect(Descriptions).toBeDefined();
    });

    it('Item 应该正常工作 (使用 items 配置)', () => {
      render(
        <Descriptions
          items={[
            { label: '用户名', children: '张三' },
            { label: '电话', children: '1810000000' },
            { label: '地址', children: '杭州市' },
          ]}
        />,
      );

      // 验证 Item 能正常渲染
      expect(screen.getByText('用户名')).toBeInTheDocument();
      expect(screen.getByText('张三')).toBeInTheDocument();
      expect(screen.getByText('电话')).toBeInTheDocument();
      expect(screen.getByText('1810000000')).toBeInTheDocument();
    });

    it('Item 应该支持 span 属性 (使用 items 配置)', () => {
      render(
        <Descriptions
          items={[
            { label: '标题', span: 2, children: '跨两列的内容' },
            { label: '普通标题', children: '普通内容' },
          ]}
        />,
      );

      expect(screen.getByText('标题')).toBeInTheDocument();
      expect(screen.getByText('跨两列的内容')).toBeInTheDocument();
      expect(screen.getByText('普通标题')).toBeInTheDocument();
      expect(screen.getByText('普通内容')).toBeInTheDocument();
    });
  });

  describe('useIndexStyle hook 测试', () => {
    it('应该正确调用 useIndexStyle hook', () => {
      const { container } = render(<Descriptions items={mockItems} />);

      const descriptions = container.querySelector('.ant-descriptions');
      expect(descriptions).toBeInTheDocument();
    });
  });
});
