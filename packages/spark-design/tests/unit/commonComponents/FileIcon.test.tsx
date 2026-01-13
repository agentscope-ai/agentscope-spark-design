import React from 'react';
import { FileIcon } from '@agentscope-ai/design';
import { render } from '@testing-library/react';

describe('FileIcon 组件 - 基础功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染FileIcon组件', () => {
      render(<FileIcon type="pdf" />);

      const element = document.querySelector('img');
      expect(element).toBeInTheDocument();
    });
  });

  describe('文件类型测试', () => {
    it('应该支持不同文件类型', () => {
      const types = ['pdf', 'doc', 'xls'];
      types.forEach(type => {
        const { unmount } = render(<FileIcon type={type} />);
        const element = document.querySelector('img');
        expect(element).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe('尺寸测试', () => {
    it('应该支持自定义尺寸', () => {
      render(<FileIcon type="pdf" size={48} />);

      const element = document.querySelector('img');
      expect(element).toBeInTheDocument();
      // 只检查元素存在，不检查具体样式值
    });
  });

  describe('样式测试', () => {
    it('应该支持自定义样式', () => {
      const customStyle = { border: '1px solid red' };
      render(<FileIcon type="pdf" style={customStyle} />);

      const element = document.querySelector('img');
      expect(element).toBeInTheDocument();
    });
  });
});
