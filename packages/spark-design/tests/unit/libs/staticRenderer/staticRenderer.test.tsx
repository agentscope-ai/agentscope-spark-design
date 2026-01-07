import React from 'react';
import { act, cleanup } from '@testing-library/react';

// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn((cb) => setTimeout(cb, 0));

// Mock getCommonConfig 在文件顶部
jest.mock('../../../../src/config', () => ({
  getCommonConfig: () => ({
    prefix: 'spark',
    antPrefix: 'ant',
    configProviderProps: {},
  }),
}));

// Mock ConfigProvider
jest.mock('../../../../src/index', () => ({
  ConfigProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// 导入 staticRenderer
import staticRenderer from '../../../../src/libs/staticRenderer';

describe('staticRenderer', () => {
  afterEach(() => {
    cleanup();
    // 清理所有可能的静态渲染元素
    const elements = document.body.querySelectorAll('[role^="spark-static"]');
    elements.forEach((el) => el.remove());
  });

  it('staticRenderer', async () => {
    // 使用 act 包装 React 操作
    await act(async () => {
      staticRenderer.show(<div id="staticRenderer-test">test</div>, 'test');
    });

    // 等待 DOM 更新
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    // 检查容器是否存在（通过 role 属性）
    const container = document.body.querySelector('[role="spark-static-test"]');
    expect(container).toBeTruthy();

    // 检查内容是否存在
    expect(document.body.querySelector('#staticRenderer-test')).toBeTruthy();

    // 使用 act 包装 hide 操作
    await act(async () => {
      staticRenderer.hide('test');
    });

    // 等待 DOM 更新
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    // 检查容器是否被移除
    expect(
      document.body.querySelector('[role="spark-static-test"]'),
    ).toBeFalsy();
    // 检查内容是否被移除
    expect(document.body.querySelector('#staticRenderer-test')).toBeFalsy();
  });
});
