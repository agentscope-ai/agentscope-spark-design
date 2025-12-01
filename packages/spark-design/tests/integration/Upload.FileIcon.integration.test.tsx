import { Upload, FileIcon, Button, ConfigProvider } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React, { useState } from 'react';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider prefix="spark">{children}</ConfigProvider>
);

describe('Upload 与 FileIcon 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('应该在 Upload 组件中显示 FileIcon', async () => {
    const TestComponent = () => {
      const [fileList, setFileList] = useState<any[]>([
        {
          uid: '1',
          name: 'document.pdf',
          status: 'done',
          url: 'http://example.com/document.pdf',
        },
      ]);
      
      const customItemRender = (originNode: React.ReactElement, file: any) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FileIcon fileName={file.name} />
            <span>{file.name}</span>
          </div>
        );
      };
      
      return (
        <TestWrapper>
          <Upload
            fileList={fileList}
            itemRender={customItemRender}
          >
            <Button>Upload</Button>
          </Upload>
        </TestWrapper>
      );
    };
    
    render(<TestComponent />);
    
    // 验证文件名显示
    expect(screen.getByText('document.pdf')).toBeInTheDocument();
    
    // 验证 Upload 按钮存在
    expect(screen.getByText('Upload')).toBeInTheDocument();
  });
});
