import { Form, DatePicker, Button, ConfigProvider } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import dayjs from 'dayjs';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider prefix="spark">{children}</ConfigProvider>
);

describe('Form + DatePicker 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础交互', () => {
    it('应该正确渲染 Form 和 DatePicker', () => {
      render(
        <TestWrapper>
          <Form>
            <Form.Item name="date" label="日期">
              <DatePicker placeholder="请选择日期" />
            </Form.Item>
          </Form>
        </TestWrapper>
      );

      expect(screen.getByText('日期')).toBeInTheDocument();
      const datePicker = document.querySelector('.spark-ant-picker');
      expect(datePicker).toBeInTheDocument();
    });

    it('应该支持 Form 验证 DatePicker 必填', async () => {
      render(
        <TestWrapper>
          <Form>
            <Form.Item name="date" label="日期" rules={[{ required: true, message: '请选择日期' }]}>
              <DatePicker placeholder="请选择日期" />
            </Form.Item>
            <Button htmlType="submit">提交</Button>
          </Form>
        </TestWrapper>
      );

      // 直接提交表单（不选择日期）
      const submitButton = document.querySelector('button[type="submit"]') as HTMLElement;
      fireEvent.click(submitButton);

      // 验证错误提示
      await waitFor(() => {
        expect(screen.getByText('请选择日期')).toBeInTheDocument();
      });
    });

    it('应该支持 DatePicker 默认值', () => {
      const defaultDate = dayjs('2025-01-01');

      render(
        <TestWrapper>
          <Form initialValues={{ date: defaultDate }}>
            <Form.Item name="date" label="日期">
              <DatePicker />
            </Form.Item>
          </Form>
        </TestWrapper>
      );

      // 验证默认值显示
      const input = document.querySelector('.spark-ant-picker-input input') as HTMLInputElement;
      expect(input?.value).toBe('2025-01-01');
    });

    it('应该支持 RangePicker', () => {
      render(
        <TestWrapper>
          <Form>
            <Form.Item name="dateRange" label="日期范围">
              <DatePicker.RangePicker />
            </Form.Item>
          </Form>
        </TestWrapper>
      );

      expect(screen.getByText('日期范围')).toBeInTheDocument();
      const rangePicker = document.querySelector('.spark-ant-picker-range');
      expect(rangePicker).toBeInTheDocument();
    });
  });
});
