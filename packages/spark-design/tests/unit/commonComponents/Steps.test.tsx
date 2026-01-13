import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// Mock useBreakpoint hook
jest.mock('antd/lib/grid/hooks/useBreakpoint', () => ({
  __esModule: true,
  default: () => ({
    xs: false,
    sm: false,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
  }),
}));

import { Steps } from '@agentscope-ai/design';

// Mock IconFont component
jest.mock('../../../src/components/commonComponents/IconFont', () => {
  return function MockIconFont({ type, className, ...props }) {
    return (
      <div
        data-testid="icon-font"
        data-type={type}
        className={className}
        {...props}
      >
        {type === 'spark-true-line' ? '✓' : type}
      </div>
    );
  };
});

describe('Steps 组件 - 定制化功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockItems = [
    {
      key: 'step1',
      title: '第一步',
      description: '这是第一步的描述',
    },
    {
      key: 'step2',
      title: '第二步',
      description: '这是第二步的描述',
    },
    {
      key: 'step3',
      title: '第三步',
      description: '这是第三步的描述',
    },
  ];

  describe('基础渲染测试', () => {
    it('应该正确渲染Steps组件', () => {
      render(<Steps items={mockItems} current={0} />);

      expect(screen.getByText('第一步')).toBeInTheDocument();
      expect(screen.getByText('第二步')).toBeInTheDocument();
      expect(screen.getByText('第三步')).toBeInTheDocument();
    });

    it('应该应用正确的类名', () => {
      const { container } = render(<Steps items={mockItems} />);

      const steps = container.querySelector('.spark-steps');
      expect(steps).toBeInTheDocument();
    });
  });

  describe('current 属性和状态计算测试（定制化功能）', () => {
    it('current=0 时，第一步应该是 process 状态', () => {
      render(<Steps items={mockItems} current={0} />);

      // 第一步应该是当前进行中的步骤
      expect(screen.getByText('第一步')).toBeInTheDocument();
    });

    it('current=1 时，第一步应该是 finish 状态并显示自定义图标和 className', () => {
      render(<Steps items={mockItems} current={1} />);

      // 应该有完成状态的自定义图标
      const finishIcons = document.querySelectorAll('.spark-finish-icon');
      expect(finishIcons).toHaveLength(1);

      // 完成状态的图标应该有特定的 className
      expect(finishIcons[0]).toHaveClass('spark-finish-icon');
    });

    it('current=2 时，前两步应该显示完成图标', () => {
      render(<Steps items={mockItems} current={2} />);

      // 应该有两个完成状态的图标
      const finishIcons = document.querySelectorAll('.spark-finish-icon');
      expect(finishIcons).toHaveLength(2);

      finishIcons.forEach((icon) => {
        expect(icon).toHaveClass('spark-finish-icon');
      });
    });

    it('所有步骤完成时，应该显示对应数量的完成图标', () => {
      render(<Steps items={mockItems} current={3} />);

      const finishIcons = document.querySelectorAll('.spark-finish-icon');
      expect(finishIcons).toHaveLength(3);
    });
  });

  describe('items 处理测试', () => {
    it('没有 items 时应该正常渲染', () => {
      const { container } = render(<Steps />);

      const steps = container.querySelector('.spark-steps');
      expect(steps).toBeInTheDocument();
    });

    it('应该保留原有的自定义图标（非 finish 状态）', () => {
      const itemsWithCustomIcon = [
        {
          key: 'step1',
          title: '第一步',
          icon: <div data-testid="custom-icon">自定义图标</div>,
        },
        {
          key: 'step2',
          title: '第二步',
        },
      ];

      render(<Steps items={itemsWithCustomIcon} current={0} />);

      // 第一步的自定义图标应该保留（因为是 process 状态）
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('应该覆盖 finish 状态的自定义图标', () => {
      const itemsWithCustomIcon = [
        {
          key: 'step1',
          title: '第一步',
          icon: <div data-testid="custom-icon">自定义图标</div>,
        },
        {
          key: 'step2',
          title: '第二步',
        },
      ];

      render(<Steps items={itemsWithCustomIcon} current={1} />);

      // 第一步的自定义图标应该被替换为完成图标
      expect(screen.queryByTestId('custom-icon')).not.toBeInTheDocument();
      const finishIcon = document.querySelector('.spark-finish-icon');
      expect(finishIcon).toBeInTheDocument();
    });
  });

  describe('status 属性处理测试', () => {
    it('应该优先使用 item 自带的 status', () => {
      const itemsWithStatus = [
        {
          key: 'step1',
          title: '第一步',
          status: 'error' as const,
        },
        {
          key: 'step2',
          title: '第二步',
          status: 'finish' as const,
        },
        {
          key: 'step3',
          title: '第三步',
        },
      ];

      render(<Steps items={itemsWithStatus} current={0} />);

      // 第二步有显式的 finish 状态，应该显示完成图标
      const finishIcon = document.querySelector('.spark-finish-icon');
      expect(finishIcon).toBeInTheDocument();
      expect(finishIcon).toHaveClass('spark-finish-icon');
    });

    it('没有显式 status 时应该根据 current 计算状态', () => {
      render(<Steps items={mockItems} current={1} />);

      // current=1 时，第一步应该自动计算为 finish 状态
      const finishIcon = document.querySelector('.spark-finish-icon');
      expect(finishIcon).toBeInTheDocument();
    });

    it('没有 current 属性时不应该自动计算状态', () => {
      const itemsWithoutStatus = [
        {
          key: 'step1',
          title: '第一步',
        },
        {
          key: 'step2',
          title: '第二步',
        },
      ];

      render(<Steps items={itemsWithoutStatus} />);

      // 没有 current 且没有显式 status，不应该显示完成图标
      const finishIcon = document.querySelector('.spark-finish-icon');
      expect(finishIcon).not.toBeInTheDocument();
    });
  });

  describe('属性传递测试', () => {
    it('应该正确传递 direction 属性', () => {
      const { container } = render(
        <Steps items={mockItems} direction="vertical" />,
      );

      const steps = container.querySelector('.spark-steps');
      expect(steps).toBeInTheDocument();
    });

    it('应该正确传递 size 属性', () => {
      const { container } = render(<Steps items={mockItems} size="small" />);

      const steps = container.querySelector('.spark-steps');
      expect(steps).toBeInTheDocument();
    });

    it('应该正确传递 status 属性', () => {
      const { container } = render(<Steps items={mockItems} status="error" />);

      const steps = container.querySelector('.spark-steps');
      expect(steps).toBeInTheDocument();
    });

    it('应该正确传递 initial 属性', () => {
      render(<Steps items={mockItems} current={1} initial={1} />);

      // initial=1, current=1 时，第一步（索引0）应该是 wait 状态
      expect(screen.getByText('第一步')).toBeInTheDocument();
    });
  });

  describe('边界情况测试', () => {
    it('current 为负数时应该正常处理', () => {
      render(<Steps items={mockItems} current={-1} />);

      // 所有步骤都应该是 wait 状态，不应该有完成图标
      const finishIcon = document.querySelector('.spark-finish-icon');
      expect(finishIcon).not.toBeInTheDocument();
    });

    it('current 超过步骤数量时应该正常处理', () => {
      render(<Steps items={mockItems} current={10} />);

      // 所有步骤都应该是 finish 状态，应该有3个完成图标
      const finishIcons = document.querySelectorAll('.spark-finish-icon');
      expect(finishIcons).toHaveLength(3);
    });

    it('空 items 数组时应该正常处理', () => {
      const { container } = render(<Steps items={[]} current={0} />);

      const steps = container.querySelector('.spark-steps');
      expect(steps).toBeInTheDocument();
      const finishIcon = document.querySelector('.spark-finish-icon');
      expect(finishIcon).not.toBeInTheDocument();
    });
  });
});
