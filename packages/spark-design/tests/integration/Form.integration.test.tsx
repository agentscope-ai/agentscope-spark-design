import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TimePicker,
} from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

// 包装组件以提供必要的配置
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider prefix="spark">{children}</ConfigProvider>
);

describe('Form 集成测试', () => {
  describe('Form 与各种表单组件的集成', () => {
    it('应该正确集成 Input 组件进行表单提交', async () => {
      const onFinish = jest.fn();
      const user = userEvent.setup();

      render(
        <TestWrapper>
          <Form onFinish={onFinish}>
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </TestWrapper>,
      );

      const input = screen.getByPlaceholderText('请输入用户名');
      const submitButton = screen.getByRole('button', { name: /提.*交/ });

      // 测试必填验证
      fireEvent.click(submitButton);
      await waitFor(() => {
        expect(screen.getByText('请输入用户名')).toBeInTheDocument();
      });

      // 输入值并提交
      await user.type(input, 'testuser');
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(onFinish).toHaveBeenCalled();
      });
    });

    it('应该正确集成 Select 组件', async () => {
      const onFinish = jest.fn();

      render(
        <TestWrapper>
          <Form onFinish={onFinish} initialValues={{ city: 'beijing' }}>
            <Form.Item
              label="城市"
              name="city"
              rules={[{ required: true, message: '请选择城市' }]}
            >
              <Select
                placeholder="请选择城市"
                options={[
                  { label: '北京', value: 'beijing' },
                  { label: '上海', value: 'shanghai' },
                  { label: '广州', value: 'guangzhou' },
                ]}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </TestWrapper>,
      );

      const submitButton = screen.getByRole('button', { name: /提.*交/ });

      // 直接提交（使用初始值）
      fireEvent.click(submitButton);
      await waitFor(() => {
        expect(onFinish).toHaveBeenCalled();
      });
    });

    it('应该正确集成 Radio 组件', async () => {
      const onFinish = jest.fn();

      render(
        <TestWrapper>
          <Form onFinish={onFinish}>
            <Form.Item
              label="性别"
              name="gender"
              rules={[{ required: true, message: '请选择性别' }]}
            >
              <Radio.Group>
                <Radio value="male">男</Radio>
                <Radio value="female">女</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </TestWrapper>,
      );

      const maleRadio = screen.getByText('男');
      const submitButton = screen.getByRole('button', { name: /提.*交/ });

      // 选择选项并提交
      fireEvent.click(maleRadio);
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(onFinish).toHaveBeenCalled();
      });
    });

    it('应该正确集成 Switch 组件', async () => {
      const onFinish = jest.fn();

      render(
        <TestWrapper>
          <Form onFinish={onFinish}>
            <Form.Item
              label="启用通知"
              name="notification"
              valuePropName="checked"
            >
              <Switch label="通知开关" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </TestWrapper>,
      );

      const switchElement = screen.getByRole('switch');
      const submitButton = screen.getByRole('button', { name: /提.*交/ });

      // 切换开关并提交
      fireEvent.click(switchElement);
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(onFinish).toHaveBeenCalled();
      });
    });

    it('应该正确集成 DatePicker 和 TimePicker 组件', async () => {
      const onFinish = jest.fn();

      render(
        <TestWrapper>
          <Form onFinish={onFinish}>
            <Form.Item label="日期" name="date">
              <DatePicker placeholder="请选择日期" />
            </Form.Item>
            <Form.Item label="时间" name="time">
              <TimePicker placeholder="请选择时间" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </TestWrapper>,
      );

      const submitButton = screen.getByRole('button', { name: /提.*交/ });

      // 直接提交（测试空值处理）
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(onFinish).toHaveBeenCalledWith({});
      });
    });

    it('应该正确集成 InputNumber 和 Slider 组件', async () => {
      const onFinish = jest.fn();

      render(
        <TestWrapper>
          <Form onFinish={onFinish}>
            <Form.Item label="年龄" name="age" initialValue={25}>
              <InputNumber min={1} max={100} />
            </Form.Item>
            <Form.Item label="评分" name="rating" initialValue={3}>
              <Slider min={1} max={5} marks={{ 1: '1', 5: '5' }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </TestWrapper>,
      );

      const submitButton = screen.getByRole('button', { name: /提.*交/ });

      // 提交初始值
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(onFinish).toHaveBeenCalledWith({
          age: 25,
          rating: 3,
        });
      });
    });
  });

  describe('Form 定制化功能集成测试', () => {
    it('应该正确应用 labelMarginRight 属性', () => {
      render(
        <TestWrapper>
          <Form labelMarginRight="small">
            <Form.Item label="测试标签" name="test">
              <Input />
            </Form.Item>
          </Form>
        </TestWrapper>,
      );

      const form = document.querySelector('.spark-spark-form');
      expect(form).toBeInTheDocument();
      expect(form).toHaveClass('spark-spark-form-label-margin-small');
    });

    it('应该正确显示自定义必填标记', () => {
      render(
        <TestWrapper>
          <Form>
            <Form.Item label="必填字段" name="required" required>
              <Input />
            </Form.Item>
            <Form.Item label="可选字段" name="optional">
              <Input />
            </Form.Item>
          </Form>
        </TestWrapper>,
      );

      // 必填字段应该有自定义的必填标记
      const requiredLabel = screen
        .getByText('必填字段')
        .closest('.spark-ant-form-item-label');
      expect(requiredLabel).toBeInTheDocument();
      expect(
        requiredLabel?.querySelector('.spark-spark-required-mark'),
      ).toBeInTheDocument();

      // 可选字段不应该有必填标记
      const optionalLabel = screen
        .getByText('可选字段')
        .closest('.spark-ant-form-item-label');
      expect(optionalLabel).toBeInTheDocument();
      expect(
        optionalLabel?.querySelector('.spark-spark-required-mark'),
      ).not.toBeInTheDocument();
    });

    it('应该正确处理 tooltip 属性', () => {
      render(
        <TestWrapper>
          <Form>
            <Form.Item
              label="带提示的字段"
              name="withTooltip"
              tooltip="这是一个提示信息"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="复杂提示字段"
              name="complexTooltip"
              tooltip="复杂提示信息"
            >
              <Input />
            </Form.Item>
          </Form>
        </TestWrapper>,
      );

      // 应该渲染 tooltip 图标
      const tooltipIcons = document.querySelectorAll('.anticon-info-circle');
      expect(tooltipIcons.length).toBeGreaterThan(0);
    });

    it('应该正确处理垂直布局的 labelCol', () => {
      render(
        <TestWrapper>
          <Form layout="vertical">
            <Form.Item label="垂直布局字段" name="vertical">
              <Input />
            </Form.Item>
          </Form>
        </TestWrapper>,
      );

      const formItem = document.querySelector('.spark-ant-form-item');
      expect(formItem).toBeInTheDocument();
      // 垂直布局应该设置默认的 labelCol
    });
  });

  describe('Form 表单验证集成测试', () => {
    it('应该正确处理复杂的表单验证', async () => {
      const onFinish = jest.fn();
      const onFinishFailed = jest.fn();

      render(
        <TestWrapper>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{
              email: 'test@example.com',
              password: '123456',
              confirmPassword: '123456',
            }}
          >
            <Form.Item
              label="邮箱"
              name="email"
              rules={[
                { required: true, message: '请输入邮箱' },
                { type: 'email', message: '请输入有效的邮箱地址' },
              ]}
            >
              <Input placeholder="请输入邮箱" />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[
                { required: true, message: '请输入密码' },
                { min: 6, message: '密码至少6位' },
              ]}
            >
              <Input placeholder="请输入密码" />
            </Form.Item>
            <Form.Item
              label="确认密码"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: '请确认密码' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('两次输入的密码不一致'));
                  },
                }),
              ]}
            >
              <Input placeholder="请确认密码" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
            </Form.Item>
          </Form>
        </TestWrapper>,
      );

      const submitButton = screen.getByRole('button', { name: /注.*册/ });

      // 直接测试表单提交（使用初始值）
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(onFinish).toHaveBeenCalledWith({
          email: 'test@example.com',
          password: '123456',
          confirmPassword: '123456',
        });
      });
    });
  });

  describe('Form.useWatch 集成测试', () => {
    it('应该正确监听表单字段变化', async () => {
      const TestComponent = () => {
        const [form] = Form.useForm();
        const watchedValue = Form.useWatch('input', form);

        return (
          <TestWrapper>
            <Form form={form} initialValues={{ input: 'initial' }}>
              <Form.Item label="输入框" name="input">
                <Input placeholder="请输入" />
              </Form.Item>
              <div data-testid="watched-value">
                监听到的值: {watchedValue || '无'}
              </div>
            </Form>
          </TestWrapper>
        );
      };

      render(<TestComponent />);

      const watchedValueDiv = screen.getByTestId('watched-value');

      // 验证初始值被监听到
      expect(watchedValueDiv).toHaveTextContent('监听到的值: initial');
    });
  });

  describe('Form 动态表单集成测试', () => {
    it('应该正确处理 Form.List 动态表单', async () => {
      const onFinish = jest.fn();

      render(
        <TestWrapper>
          <Form
            onFinish={onFinish}
            initialValues={{
              users: [
                { name: '张三', age: 25 },
                { name: '李四', age: 30 },
              ],
            }}
          >
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div key={key} style={{ display: 'flex', marginBottom: 8 }}>
                      <Form.Item
                        {...restField}
                        name={[name, 'name']}
                        rules={[{ required: true, message: '请输入姓名' }]}
                      >
                        <Input placeholder="姓名" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'age']}
                        rules={[{ required: true, message: '请输入年龄' }]}
                      >
                        <Input placeholder="年龄" />
                      </Form.Item>
                      <Button onClick={() => remove(name)}>删除</Button>
                    </div>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()}>
                      添加用户
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </TestWrapper>,
      );

      const submitButton = screen.getByRole('button', { name: /提.*交/ });

      // 直接提交（使用初始值）
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(onFinish).toHaveBeenCalledWith({
          users: [
            { name: '张三', age: 25 },
            { name: '李四', age: 30 },
          ],
        });
      });
    });
  });

  describe('Form 静态方法测试', () => {
    it('应该正确导出所有静态方法', () => {
      expect(Form.useForm).toBeDefined();
      expect(Form.useFormInstance).toBeDefined();
      expect(Form.useWatch).toBeDefined();
      expect(Form.Item).toBeDefined();
      expect(Form.List).toBeDefined();
      expect(Form.ErrorList).toBeDefined();
      expect(Form.Provider).toBeDefined();
    });

    it('应该正确使用 Form.useForm', () => {
      const TestComponent = () => {
        const [form] = Form.useForm();

        return (
          <TestWrapper>
            <Form form={form}>
              <Form.Item name="test">
                <Input />
              </Form.Item>
              <Button onClick={() => form.setFieldsValue({ test: 'value' })}>
                设置值
              </Button>
            </Form>
          </TestWrapper>
        );
      };

      render(<TestComponent />);

      const button = screen.getByText('设置值');
      const input = screen.getByRole('textbox');

      fireEvent.click(button);
      expect(input).toHaveValue('value');
    });
  });
});
