import React from 'react';
import { Tag } from '@agentscope-ai/design';
import { render } from '@testing-library/react';

describe('Tag 组件 - 基础功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染Tag组件', () => {
      render(<Tag>标签内容</Tag>);

      const tagElement = document.querySelector('.ant-tag');
      expect(tagElement).toBeInTheDocument();
      expect(tagElement).toHaveTextContent('标签内容');
    });

    it('应该支持自定义 className', () => {
      const customClass = 'custom-tag';
      render(<Tag className={customClass}>测试</Tag>);

      const element = document.querySelector('.' + customClass);
      expect(element).toBeInTheDocument();
    });
  });

  describe('size 属性测试', () => {
    it('应该默认使用 middle 尺寸', () => {
      render(<Tag>默认尺寸</Tag>);

      const tagElement = document.querySelector('.spark-tag-middle');
      expect(tagElement).toBeInTheDocument();
    });

    it('应该支持 small 尺寸', () => {
      render(<Tag size="small">小尺寸</Tag>);

      const tagElement = document.querySelector('.spark-tag-small');
      expect(tagElement).toBeInTheDocument();
    });

    it('应该支持 middle 尺寸', () => {
      render(<Tag size="middle">中等尺寸</Tag>);

      const tagElement = document.querySelector('.spark-tag-middle');
      expect(tagElement).toBeInTheDocument();
    });
  });

  describe('bordered 属性测试', () => {
    it('应该默认不显示边框 (bordered=false)', () => {
      render(<Tag>无边框标签</Tag>);

      const tagElement = document.querySelector('.ant-tag');
      expect(tagElement).toBeInTheDocument();
      // 默认 bordered=false，antd 会添加相应的类名或样式
    });

    it('应该支持显示边框', () => {
      render(<Tag bordered={true}>有边框标签</Tag>);

      const tagElement = document.querySelector('.ant-tag');
      expect(tagElement).toBeInTheDocument();
    });
  });

  describe('color 属性测试', () => {
    it('应该支持颜色属性并添加对应的类名', () => {
      render(<Tag color="blue">蓝色标签</Tag>);

      const tagElement = document.querySelector('.spark-tag-blue');
      expect(tagElement).toBeInTheDocument();
    });

    it('应该支持自定义颜色', () => {
      render(<Tag color="custom">自定义颜色</Tag>);

      const tagElement = document.querySelector('.spark-tag-custom');
      expect(tagElement).toBeInTheDocument();
    });
  });

  describe('className 组合测试', () => {
    it('应该正确组合所有 spark 相关的类名', () => {
      render(
        <Tag size="small" color="red" className="custom-class">
          组合测试
        </Tag>,
      );

      const tagElement = document.querySelector('.ant-tag');
      expect(tagElement).toBeInTheDocument();
      expect(tagElement).toHaveClass('spark-tag');
      expect(tagElement).toHaveClass('spark-tag-red');
      expect(tagElement).toHaveClass('spark-tag-small');
      expect(tagElement).toHaveClass('custom-class');
    });
  });
});
