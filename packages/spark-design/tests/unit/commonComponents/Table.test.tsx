import { Table, ConfigProvider } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

// Mock useBreakpoint hook
jest.mock('antd/es/grid/hooks/useBreakpoint', () => ({
  __esModule: true,
  default: () => ({ xs: false, sm: true, md: true, lg: true, xl: true, xxl: true }),
}));

describe('Table 组件测试', () => {
  const mockColumns = [
    { title: '名称', dataIndex: 'name', key: 'name', width: 100 },
    { title: '年龄', dataIndex: 'age', key: 'age', width: 100 },
  ];
  const mockData = [
    { key: '1', name: '张三', age: 28 },
    { key: '2', name: '李四', age: 32 },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染', () => {
    it('应该正确渲染表格', () => {
      render(<Table columns={mockColumns} dataSource={mockData} />);
      expect(screen.getByText('张三')).toBeInTheDocument();
      expect(screen.getByText('李四')).toBeInTheDocument();
    });

    it('应该渲染表头', () => {
      render(<Table columns={mockColumns} dataSource={mockData} />);
      expect(screen.getByText('名称')).toBeInTheDocument();
      expect(screen.getByText('年龄')).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      render(<Table columns={mockColumns} dataSource={mockData} className="custom-table" />);
      const element = document.querySelector('.custom-table');
      expect(element).toBeInTheDocument();
    });
  });

  describe('Props 测试', () => {
    it('应该支持 pagination 属性', () => {
      const { container } = render(
        <Table 
          columns={mockColumns} 
          dataSource={mockData} 
          pagination={{ pageSize: 10, total: 20 }} 
        />
      );
      // 分页器应该存在
      const pagination = container.querySelector('.ant-pagination');
      expect(pagination).toBeInTheDocument();
    });

    it('应该支持 loading 属性', () => {
      const { container } = render(
        <Table columns={mockColumns} dataSource={mockData} loading />
      );
      // 加载状态应该存在
      const spin = container.querySelector('.ant-spin');
      expect(spin).toBeInTheDocument();
    });

    it('应该支持空数据状态', () => {
      const { container } = render(<Table columns={mockColumns} dataSource={[]} />);
      // antd Table 默认显示空状态
      const emptyState = container.querySelector('.ant-empty');
      expect(emptyState).toBeInTheDocument();
    });

    it('应该支持 rowSelection', () => {
      const onSelectChange = jest.fn();
      render(
        <Table 
          columns={mockColumns} 
          dataSource={mockData} 
          rowSelection={{ onChange: onSelectChange }}
        />
      );
      // 应该有复选框
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      expect(checkboxes.length).toBeGreaterThan(0);
    });
  });
});
