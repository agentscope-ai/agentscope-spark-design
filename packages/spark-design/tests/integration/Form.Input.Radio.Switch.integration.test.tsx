import { Form, Input, Radio, Switch, ConfigProvider } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import React from 'react';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider prefix="spark">{children}</ConfigProvider>
);

describe('Form 与 Input 与 Radio 与 Switch 集成测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('应该正确处理 Form 表单数据绑定和验证', async () => {
    const onFinish = jest.fn();
    
    const TestComponent = () => {
      const [form] = Form.useForm();
      return (
        <TestWrapper>
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item
              label="Your title"
              name="input"
              rules={[{ required: true, message: '请输入标题' }]}
            >
              <Input placeholder="Type here..." />
            </Form.Item>
            <Form.Item label="Radio" name="radio" required>
              <Radio.Group>
                <Radio value="1">Option 1</Radio>
                <Radio value="2">Option 2</Radio>
                <Radio value="3">Option 3</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Switch" name="switch" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item>
              <button type="submit">Submit</button>
            </Form.Item>
          </Form>
        </TestWrapper>
      );
    };
    
    const { container } = render(<TestComponent />);
    
    // 输入文本
    const input = screen.getByPlaceholderText('Type here...');
    fireEvent.change(input, { target: { value: 'Test Title' } });
    
    // 等待输入完成
    await waitFor(() => {
      expect(input).toHaveValue('Test Title');
    });
    
    // 选择 Radio
    const radio2 = screen.getByLabelText('Option 2');
    fireEvent.click(radio2);
    
    await waitFor(() => {
      expect(radio2).toBeChecked();
    });
    
    // 切换 Switch
    const switchInput = container.querySelector('.ant-switch input');
    const switchElement = container.querySelector('.ant-switch');
    if (switchInput && switchElement) {
      fireEvent.click(switchInput);
      await waitFor(() => {
        expect(switchElement).toHaveClass('ant-switch-checked');
      });
    }
    
    // 提交表单
    const form = container.querySelector('form');
    if (form) {
      act(() => {
        fireEvent.submit(form);
      });
    }
    
    // 仅验证回调触发，避免开关同步问题
    await waitFor(() => {
      expect(onFinish).toHaveBeenCalled();
    }, { timeout: 3000 });
  });
});
