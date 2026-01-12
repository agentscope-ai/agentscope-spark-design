import React from 'react';
import { EllipsisTip } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('EllipsisTip 组件 - 定制化功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染EllipsisTip组件', () => {
      render(<EllipsisTip>测试文本</EllipsisTip>);

      const element = document.querySelector('.spark-ellipsis-tip');
      expect(element).toBeInTheDocument();
      expect(screen.getByText('测试文本')).toBeInTheDocument();
    });

    it('应该使用 Typography.Paragraph 作为基础组件', () => {
      render(<EllipsisTip>段落文本</EllipsisTip>);

      const element = document.querySelector('.ant-typography');
      expect(element).toBeInTheDocument();
      expect(element?.tagName.toLowerCase()).toBe('div');
    });
  });

  describe('rows 属性测试（定制化功能）', () => {
    it('应该支持默认的单行省略（rows=1）', () => {
      render(<EllipsisTip>这是一段很长的文本内容</EllipsisTip>);

      const element = document.querySelector('.spark-ellipsis-tip');
      expect(element).toBeInTheDocument();
      expect(screen.getByText('这是一段很长的文本内容')).toBeInTheDocument();
    });

    it('应该支持自定义行数', () => {
      render(
        <EllipsisTip rows={3}>
          这是一段很长的文本内容，需要显示多行，测试多行省略功能是否正常工作
        </EllipsisTip>,
      );

      const element = document.querySelector('.spark-ellipsis-tip');
      expect(element).toBeInTheDocument();
    });

    it('应该支持 rows=2 的双行显示', () => {
      render(
        <EllipsisTip rows={2}>
          第一行文本内容 第二行文本内容 第三行应该被省略
        </EllipsisTip>,
      );

      const element = document.querySelector('.spark-ellipsis-tip');
      expect(element).toBeInTheDocument();
    });

    it('应该支持 rows=0 的情况', () => {
      render(<EllipsisTip rows={0}>测试零行的边界情况</EllipsisTip>);

      const element = document.querySelector('.spark-ellipsis-tip');
      expect(element).toBeInTheDocument();
    });
  });

  describe('tooltip 属性测试（定制化功能）', () => {
    it('应该使用 children 作为默认 tooltip 内容', () => {
      render(<EllipsisTip>默认提示内容</EllipsisTip>);

      const element = document.querySelector('.spark-ellipsis-tip');
      expect(element).toBeInTheDocument();
      expect(screen.getByText('默认提示内容')).toBeInTheDocument();
    });

    it('应该支持自定义字符串 tooltip', () => {
      render(
        <EllipsisTip tooltip="自定义提示信息">显示的文本内容</EllipsisTip>,
      );

      const element = document.querySelector('.spark-ellipsis-tip');
      expect(element).toBeInTheDocument();
      expect(screen.getByText('显示的文本内容')).toBeInTheDocument();
    });

    it('应该支持 ReactNode tooltip', () => {
      const customTooltip = (
        <div>
          <strong>自定义提示</strong>
          <p>详细说明内容</p>
        </div>
      );

      render(<EllipsisTip tooltip={customTooltip}>文本内容</EllipsisTip>);

      const element = document.querySelector('.spark-ellipsis-tip');
      expect(element).toBeInTheDocument();
      expect(screen.getByText('文本内容')).toBeInTheDocument();
    });

    it('应该支持复杂的 ReactNode tooltip', () => {
      const complexTooltip = (
        <div>
          <h4>帮助标题</h4>
          <ul>
            <li>提示项目1</li>
            <li>提示项目2</li>
          </ul>
          <button>了解更多</button>
        </div>
      );

      render(<EllipsisTip tooltip={complexTooltip}>简短文本</EllipsisTip>);

      const element = document.querySelector('.spark-ellipsis-tip');
      expect(element).toBeInTheDocument();
    });
  });

  describe('children 内容测试', () => {
    it('应该支持字符串 children', () => {
      render(<EllipsisTip>纯文本内容</EllipsisTip>);

      expect(screen.getByText('纯文本内容')).toBeInTheDocument();
    });

    it('应该支持 ReactNode children', () => {
      render(
        <EllipsisTip>
          <span>包含标签的</span>
          <strong>复杂内容</strong>
        </EllipsisTip>,
      );

      expect(screen.getByText('包含标签的')).toBeInTheDocument();
      expect(screen.getByText('复杂内容')).toBeInTheDocument();
    });
  });

  describe('ellipsis 配置测试', () => {
    it('应该正确配置 ellipsis 属性', () => {
      render(
        <EllipsisTip rows={2} tooltip="自定义提示">
          需要省略的长文本内容
        </EllipsisTip>,
      );

      const element = document.querySelector('.spark-ellipsis-tip');
      expect(element).toBeInTheDocument();
    });

    it('应该在没有 tooltip 时使用 children 作为 tooltip', () => {
      const textContent = '这是会被用作tooltip的文本内容';

      render(<EllipsisTip rows={1}>{textContent}</EllipsisTip>);

      const element = document.querySelector('.spark-ellipsis-tip');
      expect(element).toBeInTheDocument();
      expect(screen.getByText(textContent)).toBeInTheDocument();
    });
  });
});
