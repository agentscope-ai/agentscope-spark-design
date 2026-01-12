import { Form, Select, Button, ConfigProvider } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider prefix="spark">{children}</ConfigProvider>
);

describe('Form + Select 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础交互', () => {
    it('应该正确渲染 Form 和 Select', () => {
      render(
        <TestWrapper>
          <Form>
            <Form.Item name="category" label="分类">
              <Select
                placeholder="请选择分类"
                options={[
                  { value: 'option1', label: '选项1' },
                  { value: 'option2', label: '选项2' },
                ]}
              />
            </Form.Item>
          </Form>
        </TestWrapper>
      );

      expect(screen.getByText('分类')).toBeInTheDocument();
      expect(screen.getByText('请选择分类')).toBeInTheDocument();
      const select = document.querySelector('.spark-ant-select');
      expect(select).toBeInTheDocument();
    });

    it('应该支持 Form 验证 Select 必填', async () => {
      render(
        <TestWrapper>
          <Form>
            <Form.Item name="category" label="分类" rules={[{ required: true, message: '请选择分类' }]}>
              <Select
                placeholder="请选择分类"
                options={[
                  { value: 'option1', label: '选项1' },
                  { value: 'option2', label: '选项2' },
                ]}
              />
            </Form.Item>
            <Button htmlType="submit">提交</Button>
          </Form>
        </TestWrapper>
      );

      // 直接提交表单（不选择）
      const submitButton = document.querySelector('button[type="submit"]') as HTMLElement;
      fireEvent.click(submitButton);

      // 验证错误提示
      await waitFor(() => {
        expect(screen.getByText('请选择分类')).toBeInTheDocument();
      });
    });

    it('应该支持多选 Select', () => {
      render(
        <TestWrapper>
          <Form>
            <Form.Item name="tags" label="标签">
              <Select
                mode="multiple"
                placeholder="请选择标签"
                options={[
                  { value: 'tag1', label: '标签1' },
                  { value: 'tag2', label: '标签2' },
                  { value: 'tag3', label: '标签3' },
                ]}
              />
            </Form.Item>
          </Form>
        </TestWrapper>
      );

      expect(screen.getByText('标签')).toBeInTheDocument();
      const select = document.querySelector('.spark-ant-select-multiple');
      expect(select).toBeInTheDocument();
    });
  });
});
