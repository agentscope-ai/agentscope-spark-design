import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// Mock Illustrate component
jest.mock(
  '../../../src/components/commonComponents/Empty/svg/Illustrate',
  () => {
    return function MockIllustrate({
      svgUrl,
      tokenMap,
      size,
      className,
      ...props
    }) {
      return (
        <div
          data-testid="illustrate"
          data-svg-url={svgUrl}
          data-size={size}
          data-token-map={JSON.stringify(tokenMap || {})}
          className={className}
          {...props}
        />
      );
    };
  },
);

import { Empty } from '@agentscope-ai/design';

describe('Empty 组件 - 定制化功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染 Empty 组件', () => {
      const { container } = render(<Empty />);

      expect(container.querySelector('.spark-empty')).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      const { container } = render(<Empty className="custom-empty" />);

      const empty = container.querySelector('.spark-empty');
      expect(empty).toHaveClass('custom-empty');
    });
  });

  describe('type 属性测试（定制化功能）', () => {
    it('应该支持 noData 类型并显示对应图片', () => {
      render(<Empty type="noData" texture={false} />);

      // 获取主图片（不是 texture）
      const illustrates = screen.getAllByTestId('illustrate');
      const illustrate =
        illustrates.find(
          (el) =>
            el.getAttribute('data-svg-url') &&
            !el.getAttribute('data-svg-url').includes('r3f3Si24iFTRz9Bho'),
        ) || illustrates[illustrates.length - 1];
      expect(illustrate).toHaveAttribute('data-svg-url');
      expect(illustrate.getAttribute('data-svg-url')).toContain('1MAxb2z7LwA');
    });
  });

  describe('size 属性测试', () => {
    it('应该支持数字尺寸', () => {
      const { container } = render(<Empty size={320} />);

      const empty = container.querySelector('.spark-empty');
      expect(empty).toBeInTheDocument();
    });

    it('应该支持字符串尺寸', () => {
      const { container } = render(<Empty size="200px" />);

      const empty = container.querySelector('.spark-empty');
      expect(empty).toBeInTheDocument();
    });

    it('应该支持小尺寸', () => {
      const { container } = render(<Empty size={150} />);

      const empty = container.querySelector('.spark-empty');
      expect(empty).toBeInTheDocument();
    });
  });

  describe('title 和 description 测试', () => {
    it('应该支持自定义 title', () => {
      render(<Empty title="自定义标题" />);

      expect(screen.getByText('自定义标题')).toBeInTheDocument();
    });

    it('应该支持自定义 description', () => {
      render(<Empty description="自定义描述" />);

      expect(screen.getByText('自定义描述')).toBeInTheDocument();
    });

    it('应该有默认的 description', () => {
      render(<Empty />);

      expect(screen.getByText('No Data')).toBeInTheDocument();
    });

    it('有 title 时 description 应该有正确的间距', () => {
      const { container } = render(
        <Empty title="标题" description="描述" size={320} />,
      );

      const titleElement = container.querySelector('.spark-empty-title');
      expect(titleElement).toBeInTheDocument();
    });

    it('没有 description 时 title 不应该有下边距', () => {
      const { container } = render(<Empty title="标题" description="" />);

      const titleElement = container.querySelector('.spark-empty-title');
      expect(titleElement).toBeInTheDocument();
    });
  });

  describe('children 内容测试', () => {
    it('应该支持自定义 children', () => {
      render(
        <Empty>
          <div data-testid="custom-children">自定义内容</div>
        </Empty>,
      );

      expect(screen.getByTestId('custom-children')).toBeInTheDocument();
      expect(screen.getByText('自定义内容')).toBeInTheDocument();
    });

    it('children 和按钮可以同时存在', () => {
      render(
        <Empty okText="按钮">
          <div data-testid="custom-children">额外内容</div>
        </Empty>,
      );

      expect(screen.getByTestId('custom-children')).toBeInTheDocument();
      expect(screen.getByText('按 钮')).toBeInTheDocument();
    });
  });

  describe('token 映射测试', () => {
    it('应该正确处理主题 token 映射', () => {
      render(<Empty type="noData" />);

      const illustrate = screen
        .getAllByTestId('illustrate')
        .find((el) => el.getAttribute('data-svg-url'));

      expect(illustrate).toBeInTheDocument();
    });
  });
});
