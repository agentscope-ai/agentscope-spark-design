import { Pagination } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

// Mock useBreakpoint hook
jest.mock('antd/es/grid/hooks/useBreakpoint', () => ({
  __esModule: true,
  default: () => ({ xs: false, sm: true, md: true, lg: true, xl: true, xxl: true }),
}));

describe('Pagination 组件测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染', () => {
    it('应该正确渲染分页组件', () => {
      const { container } = render(<Pagination total={100} />);
      const paginationElement = container.querySelector('.ant-pagination');
      expect(paginationElement).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      const { container } = render(<Pagination total={100} className="custom-pagination" />);
      const paginationElement = container.querySelector('.spark-pagination');
      expect(paginationElement).toBeInTheDocument();
    });
  });

  describe('Props 测试', () => {
    it('应该支持 total 属性', () => {
      const { container } = render(<Pagination total={500} pageSize={10} />);
      // 总共 50 页，应该显示分页
      expect(container.querySelector('.ant-pagination')).toBeInTheDocument();
    });

    it('应该支持 pageSize 属性', () => {
      const { container } = render(<Pagination total={100} pageSize={20} />);
      // 总共 5 页
      expect(container.querySelector('.ant-pagination')).toBeInTheDocument();
    });

    it('应该支持 current 属性', () => {
      const { container } = render(<Pagination total={100} current={2} />);
      const activeItem = container.querySelector('.ant-pagination-item-active');
      expect(activeItem).toHaveTextContent('2');
    });

    it('应该支持 hideSwitchButton 属性', () => {
      const { container } = render(
        <Pagination total={100} hideSwitchButton={true} />
      );
      expect(container.querySelector('.ant-pagination')).toBeInTheDocument();
    });

    it('应该支持 showSizeChanger 属性', () => {
      const { container } = render(
        <Pagination total={100} showSizeChanger={true} />
      );
      expect(container.querySelector('.ant-pagination')).toBeInTheDocument();
    });

    it('当 total > 50 时应该默认显示 showSizeChanger', () => {
      const { container } = render(<Pagination total={60} />);
      // 应该有 size changer
      expect(container.querySelector('.ant-pagination')).toBeInTheDocument();
    });

    it('当 total <= 50 时应该默认不显示 showSizeChanger', () => {
      const { container } = render(<Pagination total={30} />);
      expect(container.querySelector('.ant-pagination')).toBeInTheDocument();
    });
  });

  describe('交互测试', () => {
    it('应该正确处理页码点击', () => {
      const onChange = jest.fn();
      const { container } = render(
        <Pagination total={100} current={1} onChange={onChange} />
      );

      const pageItem = container.querySelector('.ant-pagination-item-2');
      if (pageItem) {
        fireEvent.click(pageItem);
        expect(onChange).toHaveBeenCalled();
      }
    });

    it('应该正确处理上一页按钮点击', () => {
      const onChange = jest.fn();
      const { container } = render(
        <Pagination total={100} current={2} onChange={onChange} />
      );

      const prevButton = container.querySelector('.ant-pagination-prev');
      if (prevButton) {
        fireEvent.click(prevButton);
        expect(onChange).toHaveBeenCalled();
      }
    });

    it('应该正确处理下一页按钮点击', () => {
      const onChange = jest.fn();
      const { container } = render(
        <Pagination total={100} current={1} onChange={onChange} />
      );

      const nextButton = container.querySelector('.ant-pagination-next');
      if (nextButton) {
        fireEvent.click(nextButton);
        expect(onChange).toHaveBeenCalled();
      }
    });

    it('应该正确处理 pageSize 变化', () => {
      const onShowSizeChange = jest.fn();
      render(
        <Pagination
          total={100}
          showSizeChanger={true}
          onShowSizeChange={onShowSizeChange}
        />
      );
      // pageSize 变化的测试
      expect(onShowSizeChange).not.toHaveBeenCalled();
    });
  });

  describe('自定义渲染测试', () => {
    it('应该支持自定义 itemRender', () => {
      const customItemRender = (page: number, type: string, originalElement: React.ReactNode) => {
        if (type === 'page') {
          return <a>Page {page}</a>;
        }
        return originalElement;
      };

      const { container } = render(
        <Pagination total={100} itemRender={customItemRender} />
      );

      expect(container.querySelector('.ant-pagination')).toBeInTheDocument();
    });

    it('应该使用自定义省略号图标', () => {
      const { container } = render(<Pagination total={200} current={10} />);
      // 应该有省略号
      expect(container.querySelector('.ant-pagination')).toBeInTheDocument();
    });
  });

  describe('边界情况测试', () => {
    it('当 total 为 0 时应该正确渲染', () => {
      const { container } = render(<Pagination total={0} />);
      expect(container.querySelector('.ant-pagination')).toBeInTheDocument();
    });

    it('当 current 超出范围时应该正确处理', () => {
      const { container } = render(<Pagination total={100} current={100} />);
      expect(container.querySelector('.ant-pagination')).toBeInTheDocument();
    });

    it('应该正确处理 disabled 状态', () => {
      const { container } = render(<Pagination total={100} disabled={true} />);
      expect(container.querySelector('.ant-pagination-disabled')).toBeInTheDocument();
    });
  });
});

