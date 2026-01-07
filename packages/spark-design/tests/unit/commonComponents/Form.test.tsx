import { Button, Form, Input } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

describe('Form 组件测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染', () => {
    it('应该正确渲染表单', () => {
      render(
        <Form>
          <Form.Item name="test">
            <Input data-testid="test-input" />
          </Form.Item>
        </Form>
      );
      expect(screen.getByTestId('test-input')).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      const { container } = render(
        <Form className="custom-form">
          <Form.Item name="test">
            <Input />
          </Form.Item>
        </Form>
      );
      const formElement = container.querySelector('.custom-form');
      expect(formElement).toBeInTheDocument();
    });
  });

  describe('布局测试', () => {
    it('应该支持 vertical 布局', () => {
      const { container } = render(
        <Form layout="vertical">
          <Form.Item label="测试标签" name="test">
            <Input />
          </Form.Item>
        </Form>
      );
      expect(container.querySelector('.ant-form-vertical')).toBeInTheDocument();
    });

    it('应该支持 horizontal 布局', () => {
      const { container } = render(
        <Form layout="horizontal">
          <Form.Item label="测试标签" name="test">
            <Input />
          </Form.Item>
        </Form>
      );
      expect(container.querySelector('.ant-form-horizontal')).toBeInTheDocument();
    });

    it('应该支持 labelMarginRight 属性', () => {
      const { container } = render(
        <Form labelMarginRight="small">
          <Form.Item label="测试标签" name="test">
            <Input />
          </Form.Item>
        </Form>
      );
      expect(container.querySelector('.spark-form-label-margin-small')).toBeInTheDocument();
    });
  });

  describe('表单提交测试', () => {
    it('应该正确处理表单提交', async () => {
      const onFinish = jest.fn();

      const TestComponent = () => {
        const [form] = Form.useForm();
        
        return (
          <Form form={form} onFinish={onFinish}>
            <Form.Item name="username">
              <Input data-testid="username-input" />
            </Form.Item>
            <Button htmlType="submit" data-testid="submit-button">
              提交
            </Button>
          </Form>
        );
      };

      render(<TestComponent />);

      const input = screen.getByTestId('username-input');
      fireEvent.change(input, { target: { value: '测试用户' } });

      const submitButton = screen.getByTestId('submit-button');
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(onFinish).toHaveBeenCalled();
      });
    });

    it('应该支持表单验证', async () => {
      const onFinish = jest.fn();
      const onFinishFailed = jest.fn();

      render(
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input data-testid="username-input" />
          </Form.Item>
          <Button htmlType="submit" data-testid="submit-button">
            提交
          </Button>
        </Form>
      );

      const submitButton = screen.getByTestId('submit-button');
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(onFinishFailed).toHaveBeenCalled();
        expect(onFinish).not.toHaveBeenCalled();
      });
    });
  });

  describe('Form.Item 测试', () => {
    it('应该正确渲染 Form.Item', () => {
      render(
        <Form>
          <Form.Item label="测试标签" name="test">
            <Input />
          </Form.Item>
        </Form>
      );
      expect(screen.getByText('测试标签')).toBeInTheDocument();
    });

    it('应该支持 tooltip 属性', () => {
      render(
        <Form>
          <Form.Item label="测试标签" name="test" tooltip="提示信息">
            <Input />
          </Form.Item>
        </Form>
      );
      expect(screen.getByText('测试标签')).toBeInTheDocument();
    });

    it('应该显示必填标记', () => {
      const { container } = render(
        <Form>
          <Form.Item label="测试标签" name="test" required>
            <Input />
          </Form.Item>
        </Form>
      );
      expect(container.querySelector('.spark-required-mark')).toBeInTheDocument();
    });
  });

  describe('Form Hooks 测试', () => {
    it('应该正确导出 useForm', () => {
      expect(Form.useForm).toBeDefined();
      expect(typeof Form.useForm).toBe('function');
    });

    it('应该正确导出 useWatch', () => {
      expect(Form.useWatch).toBeDefined();
      expect(typeof Form.useWatch).toBe('function');
    });

    it('应该正确导出 useFormInstance', () => {
      expect(Form.useFormInstance).toBeDefined();
      expect(typeof Form.useFormInstance).toBe('function');
    });

    it('useWatch 应该正确监听表单值变化', async () => {
      const TestComponent = () => {
        const [form] = Form.useForm();
        const value = Form.useWatch('test', form);

        return (
          <Form form={form}>
            <Form.Item name="test">
              <Input data-testid="test-input" />
            </Form.Item>
            <div data-testid="watch-value">{value || '空'}</div>
          </Form>
        );
      };

      render(<TestComponent />);

      expect(screen.getByTestId('watch-value')).toHaveTextContent('空');

      const input = screen.getByTestId('test-input');
      fireEvent.change(input, { target: { value: '新值' } });

      await waitFor(() => {
        expect(screen.getByTestId('watch-value')).toHaveTextContent('新值');
      });
    });
  });

  describe('子组件测试', () => {
    it('应该正确导出 Form.Item', () => {
      expect(Form.Item).toBeDefined();
      expect(typeof Form.Item).toBe('function');
    });

    it('应该正确导出 Form.List', () => {
      expect(Form.List).toBeDefined();
      expect(typeof Form.List).toBe('function');
    });

    it('应该正确导出 Form.ErrorList', () => {
      expect(Form.ErrorList).toBeDefined();
      expect(typeof Form.ErrorList).toBe('function');
    });

    it('应该正确导出 Form.Provider', () => {
      expect(Form.Provider).toBeDefined();
      expect(typeof Form.Provider).toBe('function');
    });
  });
});

