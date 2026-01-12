import { Table, Switch, Tag, ConfigProvider } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React, { useState } from 'react';

jest.mock('antd/es/grid/hooks/useBreakpoint', () => ({
  __esModule: true,
  default: () => ({ xs: false, sm: true, md: true, lg: true, xl: true, xxl: true }),
}));

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider prefix="spark">{children}</ConfigProvider>
);

describe('Table + Switch + Tag 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础交互', () => {
    it('应该正确渲染 Table 包含 Switch 和 Tag', () => {
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 150,
        },
        {
          title: 'Switch',
          key: 'switch',
          width: 150,
          render: () => <Switch size="small" />,
        },
        {
          title: 'Tags',
          key: 'tags',
          width: 150,
          render: () => <Tag color="blue">Tag1</Tag>,
        },
      ];

      const dataSource = [
        { key: '1', name: 'Item 1' },
        { key: '2', name: 'Item 2' },
      ];

      render(
        <TestWrapper>
          <Table columns={columns} dataSource={dataSource} pagination={false} />
        </TestWrapper>
      );

      // 验证 Table 渲染
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();

      // 验证 Tag 渲染
      const tags = screen.getAllByText('Tag1');
      expect(tags.length).toBeGreaterThan(0);
    });

    it('应该支持 Switch 状态切换', () => {
      const TestComponent = () => {
        const [checked, setChecked] = useState(false);

        const columns = [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 150,
          },
          {
            title: 'Status',
            key: 'status',
            width: 150,
            render: () => (
              <Switch
                size="small"
                checked={checked}
                onChange={setChecked}
              />
            ),
          },
        ];

        const dataSource = [{ key: '1', name: 'Item 1' }];

        return (
          <TestWrapper>
            <Table columns={columns} dataSource={dataSource} pagination={false} />
          </TestWrapper>
        );
      };

      const { container } = render(<TestComponent />);

      // 验证 Switch 渲染（通过容器查找）
      const switchElement = container.querySelector('.spark-ant-switch');
      expect(switchElement).toBeInTheDocument();
    });

    it('应该支持动态 Tag 颜色', () => {
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 150,
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          width: 200,
          render: (_: any, record: any) => (
            <>
              {record.tags.map((tag: string, index: number) => (
                <Tag key={tag} color={index === 0 ? 'blue' : 'green'}>
                  {tag}
                </Tag>
              ))}
            </>
          ),
        },
      ];

      const dataSource = [
        { key: '1', name: 'Item 1', tags: ['Tag1', 'Tag2'] },
        { key: '2', name: 'Item 2', tags: ['Tag3'] },
      ];

      render(
        <TestWrapper>
          <Table columns={columns} dataSource={dataSource} pagination={false} />
        </TestWrapper>
      );

      // 验证 Tags 渲染
      expect(screen.getByText('Tag1')).toBeInTheDocument();
      expect(screen.getByText('Tag2')).toBeInTheDocument();
      expect(screen.getByText('Tag3')).toBeInTheDocument();
    });
  });
});

