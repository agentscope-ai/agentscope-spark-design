import { Avatar } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Avatar 组件 - 定制化功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染Avatar组件', () => {
      render(<Avatar />);

      const avatarElement = document.querySelector('.ant-avatar');
      expect(avatarElement).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      const customClass = 'custom-avatar';
      render(<Avatar className={customClass} />);

      const avatarElement = document.querySelector('.' + customClass);
      expect(avatarElement).toBeInTheDocument();
    });
  });

  describe('字符串截取功能测试（定制化功能）', () => {
    it('应该将多字符字符串截取为第一个字符', () => {
      render(<Avatar>张三丰</Avatar>);

      // 应该只显示第一个字符
      expect(screen.getByText('张')).toBeInTheDocument();
      
      // 不应该显示完整的字符串
      expect(screen.queryByText('张三丰')).not.toBeInTheDocument();
    });

    it('应该将英文字符串截取为第一个字符', () => {
      render(<Avatar>John Doe</Avatar>);

      expect(screen.getByText('J')).toBeInTheDocument();
      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    });

    it('应该将数字字符串截取为第一个字符', () => {
      render(<Avatar>123456</Avatar>);

      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.queryByText('123456')).not.toBeInTheDocument();
    });

    it('应该正确处理单个字符', () => {
      render(<Avatar>A</Avatar>);

      expect(screen.getByText('A')).toBeInTheDocument();
    });

    it('应该正确处理空字符串', () => {
      render(<Avatar></Avatar>);

      const avatarElement = document.querySelector('.ant-avatar');
      expect(avatarElement).toBeInTheDocument();
      expect(avatarElement).toHaveTextContent('');
    });

    it('应该正确处理特殊字符', () => {
      render(<Avatar>@#$%</Avatar>);

      expect(screen.getByText('@')).toBeInTheDocument();
      expect(screen.queryByText('@#$%')).not.toBeInTheDocument();
    });

    it('应该正确处理 emoji', () => {
      render(<Avatar>😀😃😄</Avatar>);

      expect(screen.getByText('😀')).toBeInTheDocument();
      expect(screen.queryByText('😀😃😄')).not.toBeInTheDocument();
    });
  });

  describe('非字符串内容测试', () => {
    it('应该保持 ReactNode 内容不变', () => {
      const IconComponent = () => <span data-testid="custom-icon">👤</span>;
      render(<Avatar><IconComponent /></Avatar>);

      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
      expect(screen.getByText('👤')).toBeInTheDocument();
    });

    it('应该保持复杂 ReactNode 结构不变', () => {
      const ComplexContent = () => (
        <div data-testid="complex-content">
          <span>User</span>
          <em>Icon</em>
        </div>
      );
      
      render(<Avatar><ComplexContent /></Avatar>);

      expect(screen.getByTestId('complex-content')).toBeInTheDocument();
      expect(screen.getByText('User')).toBeInTheDocument();
      expect(screen.getByText('Icon')).toBeInTheDocument();
    });

    it('应该支持数字类型（非字符串）', () => {
      render(<Avatar>{42}</Avatar>);

      // 数字会被转换为字符串，然后截取第一个字符
      expect(screen.getByText('4')).toBeInTheDocument();
    });
  });

  describe('动态更新测试', () => {
    it('应该在 children 更新时重新截取', () => {
      const { rerender } = render(<Avatar>张三</Avatar>);

      expect(screen.getByText('张')).toBeInTheDocument();

      // 更新 children
      rerender(<Avatar>李四</Avatar>);

      expect(screen.getByText('李')).toBeInTheDocument();
      expect(screen.queryByText('张')).not.toBeInTheDocument();
    });

    it('应该在字符串和 ReactNode 之间切换', () => {
      const { rerender } = render(<Avatar>张三</Avatar>);

      expect(screen.getByText('张')).toBeInTheDocument();

      // 切换到 ReactNode
      const IconComponent = () => <span data-testid="icon">👤</span>;
      rerender(<Avatar><IconComponent /></Avatar>);

      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.queryByText('张')).not.toBeInTheDocument();

      // 切换回字符串
      rerender(<Avatar>王五</Avatar>);

      expect(screen.getByText('王')).toBeInTheDocument();
      expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
    });
  });

  describe('其他属性测试', () => {
    it('应该正确传递其他 Avatar 属性', () => {
      render(
        <Avatar 
          size="large" 
          shape="square" 
          style={{ backgroundColor: 'red' }}
        >
          测试用户
        </Avatar>
      );

      const avatarElement = document.querySelector('.ant-avatar');
      expect(avatarElement).toHaveClass('ant-avatar-lg');
      expect(avatarElement).toHaveClass('ant-avatar-square');
      expect(screen.getByText('测')).toBeInTheDocument();
    });

    it('应该支持图片 src 属性', () => {
      render(<Avatar src="/avatar.jpg">备用文本</Avatar>);

      const imgElement = screen.getByRole('img');
      expect(imgElement).toHaveAttribute('src', '/avatar.jpg');
    });

    it('应该支持 icon 属性', () => {
      const UserIcon = () => <span data-testid="user-icon">👤</span>;
      render(<Avatar icon={<UserIcon />}>备用文本</Avatar>);

      expect(screen.getByTestId('user-icon')).toBeInTheDocument();
    });
  });

  describe('ref 转发测试', () => {
    it('应该正确转发 ref', () => {
      const avatarRef = React.createRef<HTMLSpanElement>();

      render(<Avatar ref={avatarRef}>测试</Avatar>);

      expect(avatarRef.current).toBeInstanceOf(HTMLElement);
      expect(avatarRef.current?.className).toContain('ant-avatar');
    });
  });
});