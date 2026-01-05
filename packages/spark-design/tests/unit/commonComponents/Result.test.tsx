import React from 'react';
import { Result } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

// Mock Empty component
jest.mock('../../../src/components/commonComponents/Empty', () => {
  return function MockEmpty(props) {
    return (
      <div
        data-testid="empty-component"
        data-texture={props.texture}
        data-type={props.type}
        data-title={props.title}
        data-description={props.description}
        data-size={props.size}
        data-ok-text={props.okText}
        data-ok-type={props.okType}
        onClick={props.onOk}
        className={props.className}
        style={props.style}
      >
        {props.title && <div data-testid="title">{props.title}</div>}
        {props.description && (
          <div data-testid="description">{props.description}</div>
        )}
        {props.okText && (
          <button data-testid="ok-button">{props.okText}</button>
        )}
        {props.children}
      </div>
    );
  };
});

describe('Result 组件 - 定制化功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染Result组件', () => {
      render(<Result />);

      expect(screen.getByTestId('empty-component')).toBeInTheDocument();
    });

    it('应该基于 Empty 组件构建', () => {
      render(<Result title="测试标题" description="测试描述" />);

      expect(screen.getByTestId('empty-component')).toBeInTheDocument();
      expect(screen.getByTestId('title')).toHaveTextContent('测试标题');
      expect(screen.getByTestId('description')).toHaveTextContent('测试描述');
    });
  });

  describe('texture 属性测试（定制化功能）', () => {
    it('应该默认不显示纹理 (texture=false)', () => {
      render(<Result />);

      const emptyComponent = screen.getByTestId('empty-component');
      expect(emptyComponent).toHaveAttribute('data-texture', 'false');
    });

    it('应该支持显示纹理 (texture=true)', () => {
      render(<Result texture={true} />);

      const emptyComponent = screen.getByTestId('empty-component');
      expect(emptyComponent).toHaveAttribute('data-texture', 'true');
    });

    it('texture 默认值应该覆盖 Empty 的默认值', () => {
      // Empty 组件默认 texture=true，但 Result 应该默认 texture=false
      render(<Result />);

      const emptyComponent = screen.getByTestId('empty-component');
      expect(emptyComponent).toHaveAttribute('data-texture', 'false');
    });
  });

  describe('继承 Empty 属性测试', () => {
    it('应该支持 type 属性', () => {
      render(<Result type="success" />);

      const emptyComponent = screen.getByTestId('empty-component');
      expect(emptyComponent).toHaveAttribute('data-type', 'success');
    });

    it('应该支持 title 属性', () => {
      render(<Result title="操作成功" />);

      expect(screen.getByTestId('title')).toHaveTextContent('操作成功');
    });

    it('应该支持 description 属性', () => {
      render(<Result description="您的操作已成功完成" />);

      expect(screen.getByTestId('description')).toHaveTextContent(
        '您的操作已成功完成',
      );
    });

    it('应该支持 size 属性', () => {
      render(<Result size={200} />);

      const emptyComponent = screen.getByTestId('empty-component');
      expect(emptyComponent).toHaveAttribute('data-size', '200');
    });

    it('应该支持 okText 和 onOk 属性', () => {
      const onOk = jest.fn();
      render(<Result okText="确定" onOk={onOk} />);

      const okButton = screen.getByTestId('ok-button');
      expect(okButton).toHaveTextContent('确定');

      fireEvent.click(okButton);
      expect(onOk).toHaveBeenCalledTimes(1);
    });

    it('应该支持 okType 属性', () => {
      render(<Result okText="按钮" okType="default" />);

      const emptyComponent = screen.getByTestId('empty-component');
      expect(emptyComponent).toHaveAttribute('data-ok-type', 'default');
    });

    it('应该支持 className 属性', () => {
      render(<Result className="custom-result" />);

      const emptyComponent = screen.getByTestId('empty-component');
      expect(emptyComponent).toHaveClass('custom-result');
    });

    it('应该支持 style 属性', () => {
      const customStyle = { backgroundColor: 'red' };
      render(<Result style={customStyle} />);

      const emptyComponent = screen.getByTestId('empty-component');
      expect(emptyComponent).toBeInTheDocument();
    });

    it('应该支持 children', () => {
      render(
        <Result>
          <div data-testid="custom-content">自定义内容</div>
        </Result>,
      );

      expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    });
  });

  describe('常见使用场景测试', () => {
    it('应该支持成功结果页', () => {
      render(
        <Result
          type="success"
          title="提交成功"
          description="您的申请已提交，我们会尽快处理"
          okText="返回首页"
        />,
      );

      expect(screen.getByTestId('empty-component')).toHaveAttribute(
        'data-type',
        'success',
      );
      expect(screen.getByTestId('title')).toHaveTextContent('提交成功');
      expect(screen.getByTestId('description')).toHaveTextContent(
        '您的申请已提交，我们会尽快处理',
      );
      expect(screen.getByTestId('ok-button')).toHaveTextContent('返回首页');
    });

    it('应该支持失败结果页', () => {
      render(
        <Result
          type="error"
          title="提交失败"
          description="网络异常，请稍后重试"
          okText="重新提交"
          okType="primary"
        />,
      );

      expect(screen.getByTestId('empty-component')).toHaveAttribute(
        'data-type',
        'error',
      );
      expect(screen.getByTestId('title')).toHaveTextContent('提交失败');
      expect(screen.getByTestId('description')).toHaveTextContent(
        '网络异常，请稍后重试',
      );
      expect(screen.getByTestId('ok-button')).toHaveTextContent('重新提交');
      expect(screen.getByTestId('empty-component')).toHaveAttribute(
        'data-ok-type',
        'primary',
      );
    });

    it('应该支持 404 结果页', () => {
      render(
        <Result
          type="404"
          title="页面不存在"
          description="抱歉，您访问的页面不存在"
          okText="返回首页"
        />,
      );

      expect(screen.getByTestId('empty-component')).toHaveAttribute(
        'data-type',
        '404',
      );
      expect(screen.getByTestId('title')).toHaveTextContent('页面不存在');
      expect(screen.getByTestId('description')).toHaveTextContent(
        '抱歉，您访问的页面不存在',
      );
    });

    it('应该支持无权限结果页', () => {
      render(
        <Result
          type="noAccess"
          title="无权限访问"
          description="您没有权限访问此页面，请联系管理员"
          okText="申请权限"
        />,
      );

      expect(screen.getByTestId('empty-component')).toHaveAttribute(
        'data-type',
        'noAccess',
      );
      expect(screen.getByTestId('title')).toHaveTextContent('无权限访问');
      expect(screen.getByTestId('description')).toHaveTextContent(
        '您没有权限访问此页面，请联系管理员',
      );
    });
  });

  describe('属性传递测试', () => {
    it('应该正确传递所有 Empty 支持的属性', () => {
      const props = {
        type: 'success' as const,
        title: '标题',
        description: '描述',
        size: 300,
        okText: '按钮',
        okType: 'primary' as const,
        className: 'test-class',
        style: { margin: '10px' },
        onOk: jest.fn(),
      };

      render(<Result {...props} />);

      const emptyComponent = screen.getByTestId('empty-component');
      expect(emptyComponent).toHaveAttribute('data-type', 'success');
      expect(emptyComponent).toHaveAttribute('data-title', '标题');
      expect(emptyComponent).toHaveAttribute('data-description', '描述');
      expect(emptyComponent).toHaveAttribute('data-size', '300');
      expect(emptyComponent).toHaveAttribute('data-ok-text', '按钮');
      expect(emptyComponent).toHaveAttribute('data-ok-type', 'primary');
      expect(emptyComponent).toHaveClass('test-class');
    });

    it('应该过滤掉 texture 属性并设置默认值', () => {
      const props = {
        type: 'info' as const,
        texture: true, // 应该被传递给 Empty
        title: '信息',
      };

      render(<Result {...props} />);

      const emptyComponent = screen.getByTestId('empty-component');
      expect(emptyComponent).toHaveAttribute('data-texture', 'true');
      expect(emptyComponent).toHaveAttribute('data-type', 'info');
      expect(emptyComponent).toHaveAttribute('data-title', '信息');
    });
  });

  describe('类型定义测试', () => {
    it('SparkResultProps 应该扩展 SparkEmptyProps', () => {
      // 这个测试通过 TypeScript 编译验证
      const validProps = {
        type: 'success' as const,
        title: '成功',
        description: '操作成功',
        texture: false,
        size: 320,
        okText: '确定',
        onOk: () => {},
      };

      render(<Result {...validProps} />);

      expect(screen.getByTestId('empty-component')).toBeInTheDocument();
    });

    it('应该正确处理可选属性 - 所有属性都是可选的', () => {
      render(<Result />);
      expect(screen.getByTestId('empty-component')).toBeInTheDocument();
    });

    it('应该正确处理可选属性 - 部分属性', () => {
      render(<Result title="标题" />);
      expect(screen.getByTestId('title')).toBeInTheDocument();
    });

    it('应该正确处理可选属性 - 完整属性', () => {
      render(
        <Result
          type="error"
          texture={true}
          title="错误"
          description="出现错误"
          okText="重试"
          onOk={() => {}}
        />,
      );
      expect(screen.getByTestId('empty-component')).toBeInTheDocument();
    });
  });

  describe('默认行为测试', () => {
    it('未指定 texture 时应该使用默认值 false', () => {
      render(<Result type="success" title="成功" />);

      const emptyComponent = screen.getByTestId('empty-component');
      expect(emptyComponent).toHaveAttribute('data-texture', 'false');
    });

    it('显式指定 texture 时应该覆盖默认值', () => {
      render(<Result texture={true} type="success" title="成功" />);

      const emptyComponent = screen.getByTestId('empty-component');
      expect(emptyComponent).toHaveAttribute('data-texture', 'true');
    });
  });
});
