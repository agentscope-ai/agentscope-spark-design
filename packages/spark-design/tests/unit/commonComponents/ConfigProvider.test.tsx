import { ConfigProvider } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

describe('ConfigProvider 组件测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染', () => {
    it('应该正确渲染组件', () => {
      render(
        <ConfigProvider open={true}>
          <div data-testid="content">测试内容</div>
        </ConfigProvider>
      );
      expect(screen.getByTestId('content')).toBeInTheDocument();
    });
  });
});
