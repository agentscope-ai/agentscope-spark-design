import '@testing-library/jest-dom';
import React from 'react';

// Mock antd message
// Mock useMessage hook
const mockUseMessage = jest.fn(() => [
  {
    success: jest.fn(),
    warning: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
    loading: jest.fn(),
    open: jest.fn((config) => config),
  },
  React.createElement('div', { key: 'context' }, 'Context Holder'),
]);

const mockMessage = {
  open: jest.fn((config) => {
    // 确保 icon 被正确保存
    return config;
  }),
  success: jest.fn(),
  warning: jest.fn(),
  error: jest.fn(),
  info: jest.fn(),
  loading: jest.fn(),
  destroy: jest.fn(),
  useMessage: mockUseMessage,
};

// Mock antd message
jest.mock('antd', () => {
  return {
    ...jest.requireActual('antd'),
    message: {
      ...jest.requireActual('antd').message,
      useMessage: mockUseMessage,
      open: mockMessage.open,
      success: mockMessage.success,
      warning: mockMessage.warning,
      error: mockMessage.error,
      info: mockMessage.info,
      loading: mockMessage.loading,
      destroy: mockMessage.destroy,
    },
  };
});

// Mock icon components
jest.mock('@ant-design/icons', () => ({
  CheckCircleOutlined: function CheckCircleOutlined(props) {
    return React.createElement('span', {
      ...props,
      'data-testid': 'check-circle-outlined',
    });
  },
  ExclamationCircleOutlined: function ExclamationCircleOutlined(props) {
    return React.createElement('span', {
      ...props,
      'data-testid': 'exclamation-circle-outlined',
    });
  },
  CloseCircleOutlined: function CloseCircleOutlined(props) {
    return React.createElement('span', {
      ...props,
      'data-testid': 'close-circle-outlined',
    });
  },
  InfoCircleOutlined: function InfoCircleOutlined(props) {
    return React.createElement('span', {
      ...props,
      'data-testid': 'info-circle-outlined',
    });
  },
  LoadingOutlined: function LoadingOutlined(props) {
    return React.createElement('span', {
      ...props,
      'data-testid': 'loading-outlined',
    });
  },
}));

import { message as Message } from '@agentscope-ai/design';

describe('Message 组件 - 定制化功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础 API 测试', () => {
    it('应该导出所有必要的方法', () => {
      expect(typeof Message.success).toBe('function');
      expect(typeof Message.warning).toBe('function');
      expect(typeof Message.error).toBe('function');
      expect(typeof Message.info).toBe('function');
      expect(typeof Message.loading).toBe('function');
      expect(typeof Message.useMessage).toBe('function');
    });

    it('应该包含原始 message 的所有属性', () => {
      expect(Message.destroy).toBe(mockMessage.destroy);
    });
  });

  describe('success 方法测试', () => {
    it('应该支持字符串参数', () => {
      Message.success('操作成功');

      expect(mockMessage.open).toHaveBeenCalledWith({
        type: 'success',
        content: '操作成功',
        icon: expect.any(Object), // CheckCircleOutlined
      });
    });

    it('应该支持对象参数', () => {
      const options = {
        content: '保存成功',
        duration: 3,
        key: 'success-key',
      };

      Message.success(options);

      expect(mockMessage.open).toHaveBeenCalledWith({
        type: 'success',
        content: '保存成功',
        duration: 3,
        key: 'success-key',
        icon: expect.any(Object),
      });
    });

    it('应该使用自定义的 CheckCircleOutlined 图标', () => {
      Message.success('测试');

      const callArgs = mockMessage.open.mock.calls[0][0];
      expect(callArgs.icon).toBeDefined();
      expect(callArgs.icon.type.name).toBe('CheckCircleOutlined');
    });
  });

  describe('warning 方法测试', () => {
    it('应该支持字符串参数', () => {
      Message.warning('警告信息');

      expect(mockMessage.open).toHaveBeenCalledWith({
        type: 'warning',
        content: '警告信息',
        icon: expect.any(Object), // ExclamationCircleOutlined
      });
    });

    it('应该支持对象参数', () => {
      const options = {
        content: '请注意',
        duration: 5,
      };

      Message.warning(options);

      expect(mockMessage.open).toHaveBeenCalledWith({
        type: 'warning',
        content: '请注意',
        duration: 5,
        icon: expect.any(Object),
      });
    });

    it('应该使用自定义的 ExclamationCircleOutlined 图标', () => {
      Message.warning('测试');

      const callArgs = mockMessage.open.mock.calls[0][0];
      expect(callArgs.icon).toBeDefined();
      expect(callArgs.icon.type.name).toBe('ExclamationCircleOutlined');
    });
  });

  describe('error 方法测试', () => {
    it('应该支持字符串参数', () => {
      Message.error('错误信息');

      expect(mockMessage.open).toHaveBeenCalledWith({
        type: 'error',
        content: '错误信息',
        icon: expect.any(Object), // CloseCircleOutlined
      });
    });

    it('应该支持对象参数', () => {
      const options = {
        content: '操作失败',
        duration: 0, // 不自动关闭
      };

      Message.error(options);

      expect(mockMessage.open).toHaveBeenCalledWith({
        type: 'error',
        content: '操作失败',
        duration: 0,
        icon: expect.any(Object),
      });
    });

    it('应该使用自定义的 CloseCircleOutlined 图标', () => {
      Message.error('测试');

      const callArgs = mockMessage.open.mock.calls[0][0];
      expect(callArgs.icon).toBeDefined();
      expect(callArgs.icon.type.name).toBe('CloseCircleOutlined');
    });
  });

  describe('info 方法测试', () => {
    it('应该支持字符串参数', () => {
      Message.info('信息提示');

      expect(mockMessage.open).toHaveBeenCalledWith({
        type: 'info',
        content: '信息提示',
        icon: expect.any(Object), // InfoCircleOutlined
      });
    });

    it('应该支持对象参数', () => {
      const options = {
        content: '提示信息',
        className: 'custom-message',
      };

      Message.info(options);

      expect(mockMessage.open).toHaveBeenCalledWith({
        type: 'info',
        content: '提示信息',
        className: 'custom-message',
        icon: expect.any(Object),
      });
    });

    it('应该使用自定义的 InfoCircleOutlined 图标', () => {
      Message.info('测试');

      const callArgs = mockMessage.open.mock.calls[0][0];
      expect(callArgs.icon).toBeDefined();
      expect(callArgs.icon.type.name).toBe('InfoCircleOutlined');
    });
  });

  describe('loading 方法测试', () => {
    it('应该支持字符串参数', () => {
      Message.loading('加载中...');

      expect(mockMessage.open).toHaveBeenCalledWith({
        type: 'loading',
        content: '加载中...',
        icon: undefined, // loading 类型不使用自定义图标
      });
    });

    it('应该支持对象参数', () => {
      const options = {
        content: '正在处理',
        duration: 0,
      };

      Message.loading(options);

      expect(mockMessage.open).toHaveBeenCalledWith({
        type: 'loading',
        content: '正在处理',
        duration: 0,
        icon: undefined,
      });
    });

    it('loading 类型不应该使用自定义图标', () => {
      Message.loading('测试');

      const callArgs = mockMessage.open.mock.calls[0][0];
      expect(callArgs.icon).toBeUndefined();
    });
  });

  describe('SparkMessageArgsProps 类型测试', () => {
    it('应该支持 conent 属性（向后兼容）', () => {
      const options = {
        conent: '内容', // 注意这里是 conent 不是 content
        duration: 3,
      };

      Message.success(options);

      expect(mockMessage.open).toHaveBeenCalledWith(
        expect.objectContaining({
          conent: '内容',
          duration: 3,
        }),
      );
    });
  });

  describe('图标类型映射测试', () => {
    it('types 对象应该包含所有消息类型', () => {
      // 由于 types 是内部变量，我们通过调用方法来验证
      const methods = ['success', 'warning', 'error', 'info'];

      methods.forEach((method) => {
        Message[method]('测试');
        const callArgs =
          mockMessage.open.mock.calls[
            mockMessage.open.mock.calls.length - 1
          ][0];
        expect(callArgs.icon).toBeDefined();
      });
    });

    it('loading 类型应该不设置自定义图标', () => {
      Message.loading('加载中');

      const callArgs =
        mockMessage.open.mock.calls[mockMessage.open.mock.calls.length - 1][0];
      expect(callArgs.icon).toBeUndefined();
    });
  });
});
