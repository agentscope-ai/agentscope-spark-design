import React from 'react';
import { Card } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';

describe('Card 组件 - 定制化功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('info 属性测试', () => {
    it('应该支持 info 属性显示副标题', () => {
      render(
        <Card title="主标题" info="副标题信息">
          卡片内容
        </Card>,
      );

      expect(screen.getByText('主标题')).toBeInTheDocument();
      expect(screen.getByText('副标题信息')).toBeInTheDocument();
      expect(screen.getByText('卡片内容')).toBeInTheDocument();
    });

    it('应该支持 React 元素作为 info', () => {
      const InfoComponent = () => (
        <span data-testid="custom-info">
          自定义副标题 <em>强调文本</em>
        </span>
      );

      render(
        <Card title="主标题" info={<InfoComponent />}>
          卡片内容
        </Card>,
      );

      expect(screen.getByTestId('custom-info')).toBeInTheDocument();
      expect(screen.getByText('自定义副标题')).toBeInTheDocument();
      expect(screen.getByText('强调文本')).toBeInTheDocument();
    });

    it('没有 info 时不应该渲染副标题区域', () => {
      render(<Card title="主标题">卡片内容</Card>);

      const infoElement = document.querySelector('.spark-info');
      expect(infoElement).not.toBeInTheDocument();
    });
  });

  describe('自定义结构测试', () => {
    it('应该创建自定义的内部结构', () => {
      render(
        <Card title="测试标题" info="测试信息">
          测试内容
        </Card>,
      );

      // 验证自定义包装器和结构
      const wrapper = document.querySelector('.spark-card-wrapper');
      expect(wrapper).toBeInTheDocument();

      const titleElement = document.querySelector('.spark-title');
      const infoElement = document.querySelector('.spark-info');
      const contentElement = document.querySelector('.spark-content');

      expect(titleElement).toBeInTheDocument();
      expect(titleElement).toHaveTextContent('测试标题');
      expect(infoElement).toBeInTheDocument();
      expect(infoElement).toHaveTextContent('测试信息');
      expect(contentElement).toBeInTheDocument();
      expect(contentElement).toHaveTextContent('测试内容');
    });

    it('应该禁用原生 title 使用自定义标题', () => {
      render(
        <Card title="自定义标题" info="信息">
          内容
        </Card>,
      );

      // 验证没有原生的 ant-card-head
      const antCardHead = document.querySelector('.ant-card-head');
      expect(antCardHead).not.toBeInTheDocument();

      // 验证自定义标题正常显示
      expect(screen.getByText('自定义标题')).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      render(
        <Card title="标题" className="custom-card-class">
          内容
        </Card>,
      );

      const cardElement = document.querySelector('.ant-card');
      expect(cardElement).toHaveClass('custom-card-class');
    });
  });

  describe('组合功能测试', () => {
    it('应该支持所有定制化功能的组合使用', () => {
      const CustomTitle = () => (
        <span data-testid="custom-title">自定义标题</span>
      );

      const CustomInfo = () => (
        <span data-testid="custom-info">自定义信息</span>
      );

      render(
        <Card
          title={<CustomTitle />}
          info={<CustomInfo />}
          className="combo-card"
        >
          <div data-testid="combo-content">组合测试内容</div>
        </Card>,
      );

      // 验证自定义结构
      const wrapper = document.querySelector('.spark-card-wrapper');
      expect(wrapper).toBeInTheDocument();

      // 验证自定义标题和信息
      expect(screen.getByTestId('custom-title')).toBeInTheDocument();
      expect(screen.getByTestId('custom-info')).toBeInTheDocument();

      // 验证内容和样式
      expect(screen.getByTestId('combo-content')).toBeInTheDocument();
      const cardElement = document.querySelector('.ant-card');
      expect(cardElement).toHaveClass('combo-card');
    });
  });
});
