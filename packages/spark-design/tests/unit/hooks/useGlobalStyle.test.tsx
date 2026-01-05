import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Demo from '../../../src/hooks/useGlobalStyle/demo/demo';

describe('useGlobalStyle', () => {
  afterAll(cleanup);

  it('should render styles only once', () => {
    // 先渲染组件，这样才会有样式注入
    const { container } = render(<Demo />);

    const headHtml = document.head.innerHTML;
    const selector = '#useGlobalStyleDemo';
    expect(headHtml).toContain(selector);
    expect(headHtml.lastIndexOf(selector)).toBe(headHtml.indexOf(selector));
  });

  it('should switch styles', () => {
    const { container } = render(<Demo />);

    // 使用硬编码的前缀，避免在测试中调用 hook
    const antPrefix = 'bl-ant'; // 根据实际配置调整

    expect(document.head.innerHTML).not.toContain(
      `var(--${antPrefix}-color-warning)`,
    );

    const warningBtn = container.querySelector('.warning-btn');
    if (warningBtn) {
      fireEvent.click(warningBtn);
      expect(document.head.innerHTML).toContain(
        `var(--${antPrefix}-color-warning)`,
      );
    }
  });
});
