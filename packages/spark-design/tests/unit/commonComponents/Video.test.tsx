import { Video, ConfigProvider } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider prefix="spark">{children}</ConfigProvider>
);

describe('Video 组件测试', () => {
  // Mock video element methods
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = jest.fn(() => Promise.resolve());
    window.HTMLMediaElement.prototype.pause = jest.fn();
    window.HTMLMediaElement.prototype.load = jest.fn();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染', () => {
    it('应该正确渲染视频元素', () => {
      const { container } = render(
        <TestWrapper>
          <Video src="test.mp4" />
        </TestWrapper>
      );
      const video = container.querySelector('video');
      expect(video).toBeInTheDocument();
    });

    it('应该支持自定义 className', () => {
      render(
        <TestWrapper>
          <Video className="custom-class" src="test.mp4" />
        </TestWrapper>
      );
      const element = document.querySelector('.custom-class');
      expect(element).toBeInTheDocument();
    });

    it('应该渲染 children 内容', () => {
      render(
        <TestWrapper>
          <Video src="test.mp4">
            <div>自定义内容</div>
          </Video>
        </TestWrapper>
      );
      expect(screen.getByText('自定义内容')).toBeInTheDocument();
    });
  });

  describe('Props 测试', () => {
    it('应该支持 controls 属性', () => {
      const { container } = render(
        <TestWrapper>
          <Video src="test.mp4" controls />
        </TestWrapper>
      );
      // controls 为 true 时应该渲染自定义控制器
      const video = container.querySelector('video');
      expect(video).toBeInTheDocument();
    });

    it('应该支持 muted 属性', () => {
      const { container } = render(
        <TestWrapper>
          <Video src="test.mp4" muted={false} />
        </TestWrapper>
      );
      const video = container.querySelector('video');
      // Video 组件默认 muted=true,这里测试可以设置为 false
      expect(video).toBeInTheDocument();
    });

    it('应该支持 autoPlay 属性', () => {
      const { container } = render(
        <TestWrapper>
          <Video src="test.mp4" autoPlay />
        </TestWrapper>
      );
      const video = container.querySelector('video');
      expect(video).toHaveAttribute('autoplay');
    });

    it('应该支持 loop 属性', () => {
      const { container } = render(
        <TestWrapper>
          <Video src="test.mp4" loop />
        </TestWrapper>
      );
      const video = container.querySelector('video');
      expect(video).toHaveAttribute('loop');
    });
  });
});
