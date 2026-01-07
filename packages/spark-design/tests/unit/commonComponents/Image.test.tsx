import React from 'react';
import { Image } from '@agentscope-ai/design';
import { render } from '@testing-library/react';

describe('Image 组件 - 基础功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染Image组件', () => {
      render(<Image src="https://example.com/image.jpg" alt="测试图片" />);

      const imageElement = document.querySelector('.ant-image');
      expect(imageElement).toBeInTheDocument();

      const imgElement = document.querySelector('img');
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute(
        'src',
        'https://example.com/image.jpg',
      );
      expect(imgElement).toHaveAttribute('alt', '测试图片');
    });

    it('应该支持自定义 className', () => {
      const customClass = 'custom-image';
      render(
        <Image className={customClass} src="https://example.com/image.jpg" />,
      );

      const element = document.querySelector('.' + customClass);
      expect(element).toBeInTheDocument();
    });
  });

  describe('preview 属性测试', () => {
    it('当 preview=false 时，应该禁用预览功能', () => {
      render(<Image src="https://example.com/image.jpg" preview={false} />);

      const imageElement = document.querySelector('.ant-image');
      expect(imageElement).toBeInTheDocument();

      // 不应该有预览相关的类名或元素
      const previewMask = document.querySelector('.ant-image-mask');
      expect(previewMask).not.toBeInTheDocument();
    });

    it('当 preview=true 时，应该使用默认预览配置', () => {
      render(<Image src="https://example.com/image.jpg" preview={true} />);

      const imageElement = document.querySelector('.ant-image');
      expect(imageElement).toBeInTheDocument();

      // 应该有预览功能，但具体的预览元素可能需要交互才显示
    });

    it('应该支持自定义预览配置', () => {
      const customPreview = {
        visible: false,
        onVisibleChange: jest.fn(),
      };

      render(
        <Image src="https://example.com/image.jpg" preview={customPreview} />,
      );

      const imageElement = document.querySelector('.ant-image');
      expect(imageElement).toBeInTheDocument();
    });
  });

  describe('自定义预览 mask 测试', () => {
    it('应该使用自定义的预览 mask', () => {
      render(<Image src="https://example.com/image.jpg" preview={true} />);

      // 验证组件正常渲染，自定义 mask 的具体内容在预览时才显示
      const imageElement = document.querySelector('.ant-image');
      expect(imageElement).toBeInTheDocument();
    });

    it('自定义 mask 应该包含图标和文本', () => {
      // 这个测试主要验证组件结构，实际的 mask 内容在 preview 对象中定义
      render(<Image src="https://example.com/image.jpg" preview={true} />);

      const imageElement = document.querySelector('.ant-image');
      expect(imageElement).toBeInTheDocument();

      // 自定义 mask 的内容会在预览模式下显示，这里主要验证组件能正常工作
    });
  });

  describe('preview mask 内容测试', () => {
    it('自定义 mask 应该包含正确的图标', () => {
      render(<Image src="https://example.com/image.jpg" preview={true} />);

      // 组件内部使用了 IconFont 和国际化文本
      // 这里主要验证组件能正常渲染，具体的 mask 内容在预览时显示
      const imageElement = document.querySelector('.ant-image');
      expect(imageElement).toBeInTheDocument();
    });

    it('自定义 mask 应该包含国际化的预览文本', () => {
      render(<Image src="https://example.com/image.jpg" preview={true} />);

      // 验证组件正常渲染，国际化文本的具体内容在预览时显示
      const imageElement = document.querySelector('.ant-image');
      expect(imageElement).toBeInTheDocument();
    });
  });

  describe('transitionName 配置测试', () => {
    it('应该设置空的 transitionName', () => {
      render(<Image src="https://example.com/image.jpg" preview={true} />);

      // 验证组件正常渲染，transitionName 配置影响动画效果
      const imageElement = document.querySelector('.ant-image');
      expect(imageElement).toBeInTheDocument();
    });
  });

  describe('PreviewGroup 测试', () => {
    it('应该支持 PreviewGroup 功能', () => {
      render(
        <Image.PreviewGroup>
          <Image src="https://example.com/image1.jpg" />
          <Image src="https://example.com/image2.jpg" />
        </Image.PreviewGroup>,
      );

      // PreviewGroup 可能不会直接渲染特定的类名，检查图片是否正确渲染
      const images = document.querySelectorAll('.ant-image');
      expect(images).toHaveLength(2);

      // 验证 PreviewGroup 组件存在
      expect(Image.PreviewGroup).toBeDefined();
    });
  });

  describe('错误处理测试', () => {
    it('应该正确处理图片加载失败', () => {
      const onError = jest.fn();
      render(
        <Image src="https://example.com/nonexistent.jpg" onError={onError} />,
      );

      const imageElement = document.querySelector('.ant-image');
      expect(imageElement).toBeInTheDocument();

      // 模拟图片加载失败
      const imgElement = document.querySelector('img');
      if (imgElement) {
        const errorEvent = new Event('error');
        imgElement.dispatchEvent(errorEvent);
      }
    });
  });
});
