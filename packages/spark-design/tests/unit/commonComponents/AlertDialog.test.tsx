import React from 'react';
import { AlertDialog } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

// AlertDialog 的静态方法
const alertDialog = AlertDialog;

// Mock 动态样式注入
jest.mock('rc-util/lib/Dom/dynamicCSS', () => ({
  updateCSS: jest.fn(),
  removeCSS: jest.fn(),
}));

describe('AlertDialog API 测试', () => {
  afterEach(() => {
    // 清理所有 Modal
    const modals = document.querySelectorAll('.ant-modal-root');
    modals.forEach(modal => modal.remove());
    cleanup();
    jest.clearAllMocks();
  });

  describe('基础 API', () => {
    it('应该导出所有必要的方法', () => {
      expect(typeof alertDialog.success).toBe('function');
      expect(typeof alertDialog.error).toBe('function');
      expect(typeof alertDialog.warning).toBe('function');
      expect(typeof alertDialog.info).toBe('function');
    });
  });

  describe('API 方法调用', () => {
    it('success 方法应该可以调用', () => {
      expect(() => {
        const inst: any = alertDialog.success({ content: '测试' });
        if (inst && typeof inst.destroy === 'function') {
          inst.destroy();
        }
      }).not.toThrow();
    });

    it('error 方法应该可以调用', () => {
      expect(() => {
        const inst: any = alertDialog.error({ content: '测试' });
        if (inst && typeof inst.destroy === 'function') {
          inst.destroy();
        }
      }).not.toThrow();
    });

    it('warning 方法应该可以调用', () => {
      expect(() => {
        const inst: any = alertDialog.warning({ content: '测试' });
        if (inst && typeof inst.destroy === 'function') {
          inst.destroy();
        }
      }).not.toThrow();
    });

    it('info 方法应该可以调用', () => {
      expect(() => {
        const inst: any = alertDialog.info({ content: '测试' });
        if (inst && typeof inst.destroy === 'function') {
          inst.destroy();
        }
      }).not.toThrow();
    });
  });
});
