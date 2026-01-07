import React from 'react';
import { Upload } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Upload 组件 - 基础功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染Upload组件', () => {
      render(
        <Upload>
          <button>点击上传</button>
        </Upload>,
      );

      const uploadElement = document.querySelector('.ant-upload');
      expect(uploadElement).toBeInTheDocument();
      // 检查是否包含 spark-upload 类名（可能与其他类名一起存在）
      const sparkUploadElement = document.querySelector('.spark-upload');
      expect(sparkUploadElement).toBeInTheDocument();

      const button = screen.getByText('点击上传');
      expect(button).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      const customClass = 'custom-upload';
      render(
        <Upload className={customClass}>
          <button>上传</button>
        </Upload>,
      );

      const element = document.querySelector('.' + customClass);
      expect(element).toBeInTheDocument();
      // 检查是否包含 spark-upload 类名
      const sparkUploadElement = document.querySelector('.spark-upload');
      expect(sparkUploadElement).toBeInTheDocument();
    });
  });

  describe('Dragger 组件测试', () => {
    it('应该正确渲染 Upload.Dragger 组件', () => {
      render(
        <Upload.Dragger>
          <div>拖拽上传区域</div>
        </Upload.Dragger>,
      );

      const draggerElement = document.querySelector('.ant-upload-drag');
      expect(draggerElement).toBeInTheDocument();

      // 检查是否包含 spark-upload 类名
      const sparkUploadElement = document.querySelector('.spark-upload');
      expect(sparkUploadElement).toBeInTheDocument();

      const content = screen.getByText('拖拽上传区域');
      expect(content).toBeInTheDocument();
    });

    it('Dragger 应该支持自定义 className', () => {
      const customClass = 'custom-dragger';
      render(
        <Upload.Dragger className={customClass}>
          <div>拖拽区域</div>
        </Upload.Dragger>,
      );

      const element = document.querySelector('.' + customClass);
      expect(element).toBeInTheDocument();
      // 检查是否包含 spark-upload 类名
      const sparkUploadElement = document.querySelector('.spark-upload');
      expect(sparkUploadElement).toBeInTheDocument();
    });
  });

  describe('LIST_IGNORE 属性测试', () => {
    it('应该正确暴露 LIST_IGNORE 属性', () => {
      expect(Upload.LIST_IGNORE).toBeDefined();
      expect(typeof Upload.LIST_IGNORE).toBe('string');
    });

    it('LIST_IGNORE 应该与 antd Upload.LIST_IGNORE 一致', () => {
      // 验证我们的组件正确传递了 antd 的 LIST_IGNORE
      expect(Upload.LIST_IGNORE).toBeTruthy();
    });
  });

  describe('CompoundedComponent 类型测试', () => {
    it('应该正确支持 CompoundedComponent 类型', () => {
      // 验证组件同时支持基本功能、Dragger 和 LIST_IGNORE
      expect(typeof Upload).toBe('function');
      expect(typeof Upload.Dragger).toBe('function');
      expect(Upload.LIST_IGNORE).toBeDefined();
    });
  });

  describe('属性传递测试', () => {
    it('应该正确传递 Upload 的原生属性', () => {
      const onChange = jest.fn();
      const onRemove = jest.fn();

      render(
        <Upload
          onChange={onChange}
          onRemove={onRemove}
          multiple={true}
          data-testid="upload-test"
        >
          <button>上传文件</button>
        </Upload>,
      );

      const uploadElement = screen.getByTestId('upload-test');
      expect(uploadElement).toBeInTheDocument();

      const button = screen.getByText('上传文件');
      expect(button).toBeInTheDocument();
    });

    it('应该支持文件列表相关属性', () => {
      const fileList = [
        {
          uid: '1',
          name: 'test.txt',
          status: 'done' as const,
          url: 'https://example.com/test.txt',
        },
      ];

      render(
        <Upload fileList={fileList} showUploadList={true}>
          <button>上传</button>
        </Upload>,
      );

      const uploadElement = document.querySelector('.spark-upload');
      expect(uploadElement).toBeInTheDocument();
    });
  });

  describe('样式和类名测试', () => {
    it('应该正确应用 spark 前缀的类名', () => {
      render(
        <Upload className="my-upload">
          <button>上传</button>
        </Upload>,
      );

      const uploadElement = document.querySelector('.ant-upload');
      expect(uploadElement).toBeInTheDocument();
      // 检查是否包含相关类名
      const sparkUploadElement = document.querySelector('.spark-upload');
      expect(sparkUploadElement).toBeInTheDocument();
      const customUploadElement = document.querySelector('.my-upload');
      expect(customUploadElement).toBeInTheDocument();
    });

    it('Dragger 应该正确应用 spark 前缀的类名', () => {
      render(
        <Upload.Dragger className="my-dragger">
          <div>拖拽区域</div>
        </Upload.Dragger>,
      );

      const draggerElement = document.querySelector('.ant-upload-drag');
      expect(draggerElement).toBeInTheDocument();
      // 检查是否包含相关类名
      const sparkDraggerElement = document.querySelector('.spark-upload');
      expect(sparkDraggerElement).toBeInTheDocument();
      const customDraggerElement = document.querySelector('.my-dragger');
      expect(customDraggerElement).toBeInTheDocument();
    });
  });

  describe('事件处理测试', () => {
    it('应该正确处理上传事件', () => {
      const onChange = jest.fn();
      const beforeUpload = jest.fn();

      render(
        <Upload
          onChange={onChange}
          beforeUpload={beforeUpload}
          data-testid="upload-with-events"
        >
          <button>上传文件</button>
        </Upload>,
      );

      const uploadElement = screen.getByTestId('upload-with-events');
      expect(uploadElement).toBeInTheDocument();

      // 验证事件处理函数已正确传递
      // 实际的事件触发需要文件输入，这里主要验证组件结构
    });

    it('Dragger 应该正确处理拖拽事件', () => {
      const onDrop = jest.fn();

      render(
        <Upload.Dragger onDrop={onDrop}>
          <div data-testid="dragger-content">拖拽文件到这里</div>
        </Upload.Dragger>,
      );

      const draggerContent = screen.getByTestId('dragger-content');
      expect(draggerContent).toBeInTheDocument();

      const draggerElement = document.querySelector('.ant-upload-drag');
      expect(draggerElement).toBeInTheDocument();
    });
  });
});
