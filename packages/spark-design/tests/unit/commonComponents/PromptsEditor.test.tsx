import { PromptsEditor, ConfigProvider } from '@agentscope-ai/design';

// Mock ResizeObserver（使用 class 以兼容依赖库）
class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
// @ts-ignore
global.ResizeObserver = MockResizeObserver;
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider prefix="spark">{children}</ConfigProvider>
);

describe('PromptsEditor 组件测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染', () => {
    it('应该正确渲染组件', () => {
      render(
        <TestWrapper>
          <PromptsEditor value="测试内容" />
        </TestWrapper>
      );
      const editor = document.querySelector('[role="textbox"]');
      expect(editor).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      render(
        <TestWrapper>
          <PromptsEditor className="custom-class" value="测试" />
        </TestWrapper>
      );
      const editor = document.querySelector('[role="textbox"]');
      expect(editor).toBeInTheDocument();
    });
  });

  describe('Props 测试', () => {
    it('应该显示字符计数当设置 maxLength', () => {
      const { container } = render(
        <TestWrapper>
          <PromptsEditor value="测试内容" maxLength={100} />
        </TestWrapper>
      );
      expect(container.textContent).toContain('4/100');
    });

    it('应该隐藏提示文本当 tipsText 为 false', () => {
      const { container } = render(
        <TestWrapper>
          <PromptsEditor value="测试" tipsText={false} />
        </TestWrapper>
      );
      expect(container.textContent).not.toContain('输入"/"引用变量');
    });

    it('应该显示自定义提示文本', () => {
      const { container } = render(
        <TestWrapper>
          <PromptsEditor value="测试" tipsText="自定义提示" />
        </TestWrapper>
      );
      expect(container.textContent).toContain('自定义提示');
    });
  });
});
