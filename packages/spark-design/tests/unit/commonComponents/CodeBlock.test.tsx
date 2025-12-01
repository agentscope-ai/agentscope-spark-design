import { CodeBlock, ConfigProvider } from '@agentscope-ai/design';

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

describe('CodeBlock 组件测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染', () => {
    it('应该正确渲染组件', () => {
      render(
        <TestWrapper>
          <CodeBlock language="javascript" value="测试内容" />
        </TestWrapper>
      );
      const editor = document.querySelector('[role="textbox"]');
      expect(editor).toBeInTheDocument();
      expect(editor?.getAttribute('data-language')).toBe('javascript');
    });

    it('应该支持自定义 className', () => {
      render(
        <TestWrapper>
          <CodeBlock className="custom-class" language="javascript" value="测试" />
        </TestWrapper>
      );
      const element = document.querySelector('.custom-class');
      expect(element).toBeInTheDocument();
    });
  });

  describe('Props 测试', () => {
    it('应该支持不同的 language', () => {
      const { container } = render(
        <TestWrapper>
          <CodeBlock language="python" value="print('hello')" />
        </TestWrapper>
      );
      const editor = container.querySelector('[role="textbox"]');
      expect(editor?.getAttribute('data-language')).toBe('python');
    });

    it('应该支持 value 属性', () => {
      const { container } = render(
        <TestWrapper>
          <CodeBlock language="javascript" value="const test = 123;" />
        </TestWrapper>
      );
      const editor = container.querySelector('[role="textbox"]');
      expect(editor).toBeInTheDocument();
    });

    it('应该支持 editable 属性', () => {
      const { container } = render(
        <TestWrapper>
          <CodeBlock language="javascript" value="test" readOnly={true} />
        </TestWrapper>
      );
      const editor = container.querySelector('[role="textbox"]');
      // editable=false 时编辑器仍然存在但不可编辑
      expect(editor).toBeInTheDocument();
    });
  });
});
