import { Breadcrumb, ConfigProvider } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider prefix="spark">{children}</ConfigProvider>
);

describe('Breadcrumb + Dropdown 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础交互', () => {
    it('应该正确渲染 Breadcrumb', () => {
      const items = [
        { title: 'Home' },
        { title: 'Application' },
        { title: 'Detail' },
      ];

      render(
        <TestWrapper>
          <Breadcrumb items={items} />
        </TestWrapper>
      );

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Application')).toBeInTheDocument();
      expect(screen.getByText('Detail')).toBeInTheDocument();
    });

    it('应该支持 Breadcrumb 带 Dropdown 下拉菜单', () => {
      const items = [
        { title: 'Home' },
        {
          title: 'Application',
          dropdown: {
            items: [
              { key: '1', label: 'App 1' },
              { key: '2', label: 'App 2' },
            ],
          },
        },
        { title: 'Detail' },
      ];

      render(
        <TestWrapper>
          <Breadcrumb items={items} />
        </TestWrapper>
      );

      // 验证 Breadcrumb 正确渲染
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Application')).toBeInTheDocument();
      expect(screen.getByText('Detail')).toBeInTheDocument();
    });

    it('应该支持自定义 Breadcrumb 分隔符', () => {
      const items = [
        { title: 'Home' },
        { title: 'List' },
        { title: 'Detail' },
      ];

      render(
        <TestWrapper>
          <Breadcrumb separator=">" items={items} />
        </TestWrapper>
      );

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('List')).toBeInTheDocument();
      expect(screen.getByText('Detail')).toBeInTheDocument();
    });

    it('应该支持 Breadcrumb 项带链接', () => {
      const items = [
        { title: 'Home', href: '/' },
        { title: 'Application', href: '/app' },
        { title: 'Detail' },
      ];

      render(
        <TestWrapper>
          <Breadcrumb items={items} />
        </TestWrapper>
      );

      const homeLink = screen.getByText('Home').closest('a');
      expect(homeLink).toHaveAttribute('href', '/');

      const appLink = screen.getByText('Application').closest('a');
      expect(appLink).toHaveAttribute('href', '/app');
    });

    it('应该支持多级 Breadcrumb 带多个 Dropdown', () => {
      const items = [
        { 
          title: 'Home',
          dropdown: {
            items: [
              { key: 'dashboard', label: 'Dashboard' },
              { key: 'profile', label: 'Profile' },
            ],
          },
        },
        { 
          title: 'Category',
          dropdown: {
            items: [
              { key: 'cat1', label: 'Category 1' },
              { key: 'cat2', label: 'Category 2' },
            ],
          },
        },
        { title: 'Current Page' },
      ];

      render(
        <TestWrapper>
          <Breadcrumb items={items} />
        </TestWrapper>
      );

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Category')).toBeInTheDocument();
      expect(screen.getByText('Current Page')).toBeInTheDocument();
    });
  });
});
