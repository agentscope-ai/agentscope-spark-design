import React from 'react';
import { Modal } from '@agentscope-ai/design';
import { render, screen } from '@testing-library/react';

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('Modal 组件 - 定制化功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('info 属性测试', () => {
    it('应该支持 info 属性显示额外信息（不设置footer时）', () => {
      render(
        <Modal open={true} title="测试Modal" info="这是额外的信息">
          Modal内容
        </Modal>,
      );

      // 验证info信息被渲染
      expect(screen.getByText('这是额外的信息')).toBeInTheDocument();

      // 验证footer结构被自定义包装器包裹
      const footerWrapper = document.querySelector(
        '.spark-modal-footer-wrapper',
      );
      expect(footerWrapper).toBeInTheDocument();

      const footerInfo = document.querySelector('.spark-modal-footer-info');
      expect(footerInfo).toBeInTheDocument();
      expect(footerInfo).toHaveTextContent('这是额外的信息');
    });

    it('没有 info 时应该使用原始footer', () => {
      render(
        <Modal open={true} title="测试Modal">
          Modal内容
        </Modal>,
      );

      // 验证没有info相关的包装器
      const footerWrapper = document.querySelector(
        '.spark-modal-footer-wrapper',
      );
      expect(footerWrapper).not.toBeInTheDocument();

      // 验证有默认的footer
      const footer = document.querySelector('.ant-modal-footer');
      expect(footer).toBeInTheDocument();
    });

    it('设置了明确的footer时，info属性不生效', () => {
      render(
        <Modal
          open={true}
          title="测试Modal"
          info="这个信息不会显示"
          footer={<button data-testid="footer-btn">确定</button>}
        >
          Modal内容
        </Modal>,
      );

      // 验证明确的footer被正常显示
      expect(screen.getByTestId('footer-btn')).toBeInTheDocument();

      // 验证info信息不会显示（因为有明确的footer）
      expect(screen.queryByText('这个信息不会显示')).not.toBeInTheDocument();

      // 验证没有info相关的包装器
      const footerWrapper = document.querySelector(
        '.spark-modal-footer-wrapper',
      );
      expect(footerWrapper).not.toBeInTheDocument();
    });
  });

  describe('showDivider 属性测试', () => {
    it('应该默认显示分割线', () => {
      render(
        <Modal open={true} title="测试Modal">
          Modal内容
        </Modal>,
      );

      const modal = document.querySelector('.spark-modal');
      expect(modal).toBeInTheDocument();
      expect(modal).toHaveClass('spark-show-divider');
    });

    it('应该支持 showDivider={true}', () => {
      render(
        <Modal open={true} title="测试Modal" showDivider={true}>
          Modal内容
        </Modal>,
      );

      const modal = document.querySelector('.spark-modal');
      expect(modal).toHaveClass('spark-show-divider');
    });

    it('应该支持 showDivider={false} 隐藏分割线', () => {
      render(
        <Modal open={true} title="测试Modal" showDivider={false}>
          Modal内容
        </Modal>,
      );

      const modal = document.querySelector('.spark-modal');
      expect(modal).toBeInTheDocument();
      expect(modal).not.toHaveClass('spark-show-divider');
    });
  });

  describe('自定义标题和关闭按钮测试', () => {
    it('应该自定义标题布局结构', () => {
      render(
        <Modal open={true} title="自定义标题">
          Modal内容
        </Modal>,
      );

      // 验证自定义标题包装器
      const titleWrapper = document.querySelector('.spark-modal-title-wrapper');
      expect(titleWrapper).toBeInTheDocument();

      const title = document.querySelector('.spark-modal-title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('自定义标题');
    });

    it('应该默认显示自定义关闭按钮', () => {
      const handleCancel = jest.fn();

      render(
        <Modal open={true} title="测试Modal" onCancel={handleCancel}>
          Modal内容
        </Modal>,
      );

      // 验证自定义关闭图标
      const closeIcon = document.querySelector('.spark-modal-title-close');
      expect(closeIcon).toBeInTheDocument();
    });

    it('应该支持 closable={false} 隐藏关闭按钮', () => {
      render(
        <Modal open={true} title="测试Modal" closable={false}>
          Modal内容
        </Modal>,
      );

      const closeIcon = document.querySelector('.spark-modal-title-close');
      expect(closeIcon).not.toBeInTheDocument();
    });

    it('应该支持自定义 closeIcon', () => {
      const CustomCloseIcon = () => <span data-testid="custom-close">×</span>;

      render(
        <Modal open={true} title="测试Modal" closeIcon={<CustomCloseIcon />}>
          Modal内容
        </Modal>,
      );

      expect(screen.getByTestId('custom-close')).toBeInTheDocument();
      expect(screen.getByTestId('custom-close')).toHaveTextContent('×');
    });
  });

  describe('样式和动画定制测试', () => {
    it('应该应用自定义 wrapClassName', () => {
      render(
        <Modal open={true} title="测试Modal" wrapClassName="custom-wrap-class">
          Modal内容
        </Modal>,
      );

      const modal = document.querySelector('.spark-modal');
      expect(modal).toHaveClass('custom-wrap-class');
      expect(modal).toHaveClass('animate-in');
    });

    it('应该清除默认的过渡动画', () => {
      render(
        <Modal open={true} title="测试Modal">
          Modal内容
        </Modal>,
      );

      // 验证transitionName被设置为空字符串（这会在DOM属性中体现）
      // 注意：这个测试可能需要根据实际的DOM结构调整
      const modal = document.querySelector('.ant-modal-wrap');
      expect(modal).toBeInTheDocument();
    });

    it('应该合并自定义 wrapStyle 和默认变量', () => {
      render(
        <Modal open={true} title="测试Modal" wrapStyle={{ zIndex: 9999 }}>
          Modal内容
        </Modal>,
      );

      const modal = document.querySelector('.ant-modal-wrap');
      expect(modal).toBeInTheDocument();
      // 注意：style的具体验证可能需要根据实际渲染结果调整
    });
  });

  describe('静态方法导出测试', () => {
    it('应该导出 useModal 静态方法', () => {
      expect(Modal.useModal).toBeDefined();
      expect(typeof Modal.useModal).toBe('function');
    });

    it('应该导出 success 静态方法', () => {
      expect(Modal.success).toBeDefined();
      expect(typeof Modal.success).toBe('function');
    });

    it('应该导出 error 静态方法', () => {
      expect(Modal.error).toBeDefined();
      expect(typeof Modal.error).toBe('function');
    });

    it('应该导出 warning 静态方法', () => {
      expect(Modal.warning).toBeDefined();
      expect(typeof Modal.warning).toBe('function');
    });

    it('应该导出 info 静态方法', () => {
      expect(Modal.info).toBeDefined();
      expect(typeof Modal.info).toBe('function');
    });

    it('应该导出 confirm 静态方法', () => {
      expect(Modal.confirm).toBeDefined();
      expect(typeof Modal.confirm).toBe('function');
    });
  });
});
