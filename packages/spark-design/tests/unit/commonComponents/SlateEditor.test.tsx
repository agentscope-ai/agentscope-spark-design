import { SlateEditor, ConfigProvider } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

// Mock ResizeObserver（使用 class 以兼容依赖库）
class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
// @ts-ignore
global.ResizeObserver = MockResizeObserver;

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider prefix="spark">{children}</ConfigProvider>
);

describe('SlateEditor 组件测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染', () => {
    it('应该正确渲染组件', () => {
      render(
        <TestWrapper>
          <SlateEditor value="测试内容" />
        </TestWrapper>
      );
      const textbox = document.querySelector('[role="textbox"]');
      expect(textbox).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      render(
        <TestWrapper>
          <SlateEditor className="custom-class" value="测试" />
        </TestWrapper>
      );
      const element = document.querySelector('.custom-class');
      expect(element).toBeInTheDocument();
    });
  });

  describe('Props 测试', () => {
    it('应该支持 wordLimit 属性', () => {
      const { container } = render(
        <TestWrapper>
          <SlateEditor value="测试内容" wordLimit={100} />
        </TestWrapper>
      );
      // wordLimit 会在内部逻辑中使用,这里只验证组件能正常渲染
      const textbox = container.querySelector('[role="textbox"]');
      expect(textbox).toBeInTheDocument();
    });
  });
});
