import { cleanup } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import {
  addZreo,
  initSeconed,
  isElement,
  isIntl,
  isSafari,
  renderTooltip,
} from '..';

afterEach(cleanup);

test('isIntl', () => {
  window.g_config = {
    isIntl: true,
  };
  expect(isIntl()).toBe(true);
});

test('renderTooltip', () => {
  expect(renderTooltip('测试')).toEqual({
    overlayInnerStyle: {
      maxWidth: 326,
      maxHeight: 150,
      overflowY: 'auto',
    },
    title: '测试',
  });
});

test('isElement', () => {
  expect(isElement(undefined)).toBe(false);
});

test('isSafari', () => {
  const agent =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
  expect(isSafari(agent)).toBe(false);
});

test('addZreo', () => {
  const num = 1;
  expect(addZreo(num)).toBe('01');
});

test('initSeconed', () => {
  const seconds = 10;
  expect(initSeconed(seconds)).toBe('0:10');
});
