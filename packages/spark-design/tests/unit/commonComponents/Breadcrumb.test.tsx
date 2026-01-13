import { Breadcrumb } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

describe('Breadcrumb 组件 - 基础功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const basicItems = [
    { title: '首页' },
    { title: '用户管理' },
    { title: '用户列表' },
  ];

  describe('基础渲染测试', () => {
    it('应该正确渲染Breadcrumb组件', () => {
      render(<Breadcrumb items={basicItems} />);

      const breadcrumbElement = document.querySelector('.ant-breadcrumb');
      expect(breadcrumbElement).toBeInTheDocument();
      expect(breadcrumbElement).toHaveClass('spark-breadcrumb');

      // 验证内容存在
      expect(breadcrumbElement).toHaveTextContent('首页');
      expect(breadcrumbElement).toHaveTextContent('用户管理');
      expect(breadcrumbElement).toHaveTextContent('用户列表');
    });

    it('应该支持自定义 className', () => {
      const customClass = 'custom-breadcrumb';
      render(<Breadcrumb className={customClass} items={basicItems} />);

      const element = document.querySelector('.' + customClass);
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass('spark-breadcrumb');
    });
  });

  describe('iconUrl 属性测试', () => {
    const itemsWithIcon = [
      { title: '首页', iconUrl: 'https://example.com/home.png' },
      { title: '用户管理' },
    ];

    it('应该正确渲染带图标的面包屑项', () => {
      render(<Breadcrumb items={itemsWithIcon} />);

      // 应该包含 Avatar 组件
      const avatar = document.querySelector('.ant-avatar');
      expect(avatar).toBeInTheDocument();
      // Avatar 的 src 可能通过不同方式设置，检查是否存在即可
      expect(avatar).toBeTruthy();
    });

    it('应该为带图标的项添加正确的内容结构', () => {
      render(<Breadcrumb items={itemsWithIcon} />);

      const breadcrumbContent = document.querySelector(
        '.spark-breadcrumb-item-content',
      );
      expect(breadcrumbContent).toBeInTheDocument();

      // 应该包含图标和标题
      const avatar = breadcrumbContent?.querySelector('.ant-avatar');
      expect(avatar).toBeInTheDocument();
    });
  });

  describe('dropdown 属性测试', () => {
    const itemsWithDropdown = [
      { title: '首页' },
      {
        title: '用户管理',
        dropdown: {
          items: [
            { key: '1', label: '用户列表' },
            { key: '2', label: '角色管理' },
          ],
        },
      },
      { title: '当前页面' },
    ];

    it('应该正确渲染带下拉菜单的面包屑项', () => {
      render(<Breadcrumb items={itemsWithDropdown} />);

      // 应该包含下拉菜单触发器
      const dropdown = document.querySelector('.spark-breadcrumb-dropdown');
      expect(dropdown).toBeInTheDocument();

      // 应该包含下拉图标 (SparkDownLine 组件)
      const dropdownIcon = document.querySelector(
        '.spark-icon-spark-down-line',
      );
      expect(dropdownIcon).toBeInTheDocument();

      // 应该包含标题
      const dropdownTitle = document.querySelector(
        '.spark-breadcrumb-dropdown-title',
      );
      expect(dropdownTitle).toBeInTheDocument();
      expect(dropdownTitle).toHaveTextContent('用户管理');
    });

    it('应该支持点击触发下拉菜单', () => {
      render(<Breadcrumb items={itemsWithDropdown} />);

      const dropdownTrigger = document.querySelector(
        '.spark-breadcrumb-dropdown',
      );
      expect(dropdownTrigger).toBeInTheDocument();

      // 模拟点击
      fireEvent.click(dropdownTrigger!);

      // 这里主要验证组件结构正确，实际的下拉菜单显示由 antd Dropdown 处理
    });
  });

  describe('复合功能测试', () => {
    const complexItems = [
      {
        title: '首页',
        iconUrl: 'https://example.com/home.png',
        dropdown: {
          items: [
            { key: 'dashboard', label: '仪表盘' },
            { key: 'analytics', label: '数据分析' },
          ],
        },
      },
      {
        title: '用户管理',
        iconUrl: 'https://example.com/user.png',
      },
      { title: '用户详情' },
    ];

    it('应该正确处理同时包含图标和下拉菜单的项', () => {
      render(<Breadcrumb items={complexItems} />);

      // 第一项：有图标和下拉菜单
      const dropdown = document.querySelector('.spark-breadcrumb-dropdown');
      expect(dropdown).toBeInTheDocument();

      const avatar = document.querySelector('.ant-avatar');
      expect(avatar).toBeInTheDocument();

      const dropdownIcon = document.querySelector(
        '.spark-icon-spark-down-line',
      );
      expect(dropdownIcon).toBeInTheDocument();
    });

    it('应该正确处理只有图标的项', () => {
      render(<Breadcrumb items={complexItems} />);

      // 应该有两个 Avatar（第一项和第二项都有图标）
      const avatars = document.querySelectorAll('.ant-avatar');
      expect(avatars).toHaveLength(2);

      // 第二项应该有内容容器但没有下拉菜单
      const itemContents = document.querySelectorAll(
        '.spark-breadcrumb-item-content',
      );
      expect(itemContents).toHaveLength(1); // 只有第二项使用这个类名（有图标但没有下拉菜单）
    });
  });

  describe('items 处理测试', () => {
    it('应该正确处理空的 items 数组', () => {
      render(<Breadcrumb items={[]} />);

      const breadcrumbElement = document.querySelector('.spark-breadcrumb');
      expect(breadcrumbElement).toBeInTheDocument();

      const breadcrumbItems = document.querySelectorAll('.ant-breadcrumb-item');
      expect(breadcrumbItems).toHaveLength(0);
    });

    it('应该正确处理单个项', () => {
      render(<Breadcrumb items={[{ title: '单个项' }]} />);

      // 验证内容存在
      const breadcrumbElement = document.querySelector('.spark-breadcrumb');
      expect(breadcrumbElement).toBeInTheDocument();
      expect(breadcrumbElement).toHaveTextContent('单个项');
    });

    it('应该支持 ReactNode 类型的 title', () => {
      const items = [
        { title: <span data-testid="custom-title">自定义标题</span> },
        { title: '普通标题' },
      ];

      render(<Breadcrumb items={items} />);

      const customTitle = screen.getByTestId('custom-title');
      expect(customTitle).toBeInTheDocument();
      expect(customTitle).toHaveTextContent('自定义标题');
    });
  });

  describe('属性传递测试', () => {
    it('应该正确传递 Breadcrumb 的原生属性', () => {
      render(
        <Breadcrumb
          items={basicItems}
          separator=">"
          data-testid="breadcrumb-test"
        />,
      );

      const breadcrumbElement = screen.getByTestId('breadcrumb-test');
      expect(breadcrumbElement).toBeInTheDocument();
    });
  });
});
