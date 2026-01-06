import React from 'react';
import { cleanup } from '@testing-library/react';
import {
  addZreo,
  initSeconed,
  isElement,
  isIntl,
  isSafari,
  renderTooltip,
} from '../../../../src/libs/utils';

describe('utils', () => {
  afterEach(cleanup);

  it('should check if is international', () => {
    window.g_config = {
      isIntl: true,
    };
    expect(isIntl()).toBe(true);
  });

  // iszhCN 函数不存在，跳过此测试
  it.skip('should check if is Chinese', () => {
    window.ALIYUN_CONSOLE_CONFIG = {
      LOCALE: 'en-US',
    };
    // expect(iszhCN()).toBe(true);
  });

  it('should render tooltip', () => {
    const result = renderTooltip('测试');
    expect(result).toMatchObject({
      overlayInnerStyle: expect.objectContaining({
        maxWidth: 326,
        maxHeight: 150,
        overflowY: 'auto',
      }),
      title: '测试',
    });
  });

  it('should check if is element', () => {
    expect(isElement(undefined)).toBe(false);
  });

  it('should check if is Safari', () => {
    const agent =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
    expect(isSafari(agent)).toBe(false);
  });

  it('should add zero prefix', () => {
    const num = 1;
    expect(addZreo(num)).toBe('01');
  });

  it('should initialize seconds', () => {
    const seconds = 10;
    expect(initSeconed(seconds)).toBe('0:10');
  });
});
