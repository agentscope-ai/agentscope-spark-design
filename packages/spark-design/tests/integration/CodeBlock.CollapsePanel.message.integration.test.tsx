import { CodeBlock, CollapsePanel, message, ConfigProvider } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React, { useState } from 'react';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider prefix="spark">{children}</ConfigProvider>
);

describe('CodeBlock 与 CollapsePanel 与 message 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Mock ResizeObserver
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  it('应该在 CollapsePanel 中展示 CodeBlock 并支持复制提示', async () => {
    const codeContent = `function hello() {
  console.log('Hello World');
}`;
    
    const TestComponent = () => {
      const handleCopy = () => {
        message.success('代码已复制到剪贴板');
      };
      
      return (
        <TestWrapper>
          <div style={{ width: 720 }}>
            <CollapsePanel
              title="Code Demo"
              expandOnPanelClick={true}
            >
              <CodeBlock
                language="javascript"
                onCopy={handleCopy}
              >
                {codeContent}
              </CodeBlock>
            </CollapsePanel>
          </div>
        </TestWrapper>
      );
    };
    
    render(<TestComponent />);
    
    // 验证 CollapsePanel 标题
    expect(screen.getByText('Code Demo')).toBeInTheDocument();
    
    // 点击展开 CollapsePanel
    const title = screen.getByText('Code Demo');
    fireEvent.click(title);
    
    // 验证 CodeBlock 内容显示
    await waitFor(() => {
      expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    });
  });
});
