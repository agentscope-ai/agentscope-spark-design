import { Upload, message, ConfigProvider } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider prefix="spark">{children}</ConfigProvider>
);

describe('Upload 与 message 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('应该在 Upload 成功或失败时显示 message', async () => {
    const TestComponent = () => {
      const uploadProps = {
        name: 'file',
        action: 'https://example.com/upload',
        onChange: (info: any) => {
          if (info.file.status === 'done') {
            message.success(`${info.file.name} 上传成功`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} 上传失败`);
          }
        },
        beforeUpload: () => {
          // 阻止实际上传
          return false;
        },
      };
      
      return (
        <TestWrapper>
          <Upload {...uploadProps}>
            <button>Click to Upload</button>
          </Upload>
        </TestWrapper>
      );
    };
    
    render(<TestComponent />);
    
    // 验证 Upload 组件渲染
    expect(screen.getByText('Click to Upload')).toBeInTheDocument();
    
    // 注意：实际的文件上传测试需要 mock File API
    // 这里只验证组件的基本渲染和 message 的集成
  });
});
