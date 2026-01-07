require('@testing-library/jest-dom');

// Mock @ant-design/icons/lib/components/Context
jest.mock('@ant-design/icons/lib/components/Context', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: React.createContext({}),
  };
});

// 批量屏蔽常见的React警告
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;
const originalConsoleLog = console.log;

// 需要屏蔽的警告类型
const IGNORED_WARNINGS = [
  'Warning: An update to',
  'Warning: React.jsx: type is invalid',
  'Warning: wrapStyle is deprecated',
  'Warning: validateDOMNesting',
  'Warning: Each child in a list should have a unique "key" prop',
  'Warning: Cannot update a component',
  'Warning: componentWillReceiveProps has been renamed',
  'Warning: componentWillMount has been renamed',
  'Warning: componentWillUpdate has been renamed',
  'Warning: Legacy context API',
  'Warning: findDOMNode is deprecated',
  'Warn: there is no string with id',
  'Error: format string:',
  // Ant Design deprecation warnings
  'Warning: [antd:',
  'Warning: [rc-collapse]',
  'Warning: [rc-util]',
  // 自定义 props 传递给 DOM 元素的警告（这些是组件内部实现细节）
  'Warning: React does not recognize the `labelMarginRight` prop',
  'Warning: React does not recognize the `iconType` prop',
  'Warning: React does not recognize the `tooltipContent` prop',
  // forwardRef 警告（组件内部实现细节，无需修复）
  'Warning: forwardRef render functions accept exactly two parameters',
  // Pagination 组件的只读警告
  'Warning: You provided a `current` prop to a Pagination component without an `onChange` handler',
  // requestSse 测试中的预期错误（测试错误处理逻辑）
  '[sse]err',
  'Expected content-type to be text/event-stream',
];

console.error = (...args) => {
  const message = args[0] || '';
  if (IGNORED_WARNINGS.some((warning) => message.includes?.(warning))) {
    return;
  }
  originalConsoleError.apply(console, args);
};

console.warn = (...args) => {
  const message = args[0] || '';
  if (IGNORED_WARNINGS.some((warning) => message.includes?.(warning))) {
    return;
  }
  originalConsoleWarn.apply(console, args);
};

// 过滤所有 console.log
console.log = (...args) => {
  // 在测试环境中完全屏蔽 console.log
  // 如果需要调试，可以临时注释这个函数
  return;
};

// 全局设置 - 减少React严格模式检查
window.React = require('react');

// 禁用严格模式下的额外检查
const originalStrictMode = React.StrictMode;
React.StrictMode = ({ children }) => children;

// Mock一些可能导致内存泄漏的API
global.fetch = jest.fn();

// Mock requestAnimationFrame and cancelAnimationFrame
global.requestAnimationFrame = jest.fn((callback) => {
  return setTimeout(callback, 16); // 模拟 60fps
});

global.cancelAnimationFrame = jest.fn((id) => {
  clearTimeout(id);
});

// Mock 外部字体文件加载
global.fetch = jest.fn((url) => {
  if (url.includes('at.alicdn.com') || url.includes('font')) {
    return Promise.resolve({
      ok: true,
      text: () => Promise.resolve('/* mocked font css */'),
      json: () => Promise.resolve({}),
    });
  }
  return Promise.reject(new Error('Not found'));
});

// 清理函数
afterEach(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();

  // 清理DOM
  document.body.innerHTML = '';

  // 清理全局对象
  if (global.ALIYUN_CONSOLE_CONFIG) {
    delete global.ALIYUN_CONSOLE_CONFIG;
  }
});

afterAll(() => {
  // 恢复原始函数
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
  console.log = originalConsoleLog;

  // 清理所有模拟
  jest.restoreAllMocks();
  jest.clearAllTimers();

  // 强制垃圾回收（如果可用）
  if (global.gc) {
    global.gc();
  }
});

// 设置默认的全局配置
global.ALIYUN_CONSOLE_CONFIG = {
  LOCALE: 'zh-CN',
  REGION: 'cn-hangzhou',
};

// Mock getComputedStyle - 完整的实现以支持 CSS-in-JS
Object.defineProperty(window, 'getComputedStyle', {
  value: (element) => {
    return new Proxy(
      {},
      {
        get: (target, prop) => {
          if (prop === 'getPropertyValue') {
            return (property) => {
              if (property === 'visibility') return 'visible';
              if (property === 'display') return 'block';
              if (property === 'position') return 'static';
              if (property === 'opacity') return '1';
              if (property === 'content') return '';
              return '';
            };
          }
          if (prop === 'setProperty') return () => {};
          if (prop === 'removeProperty') return () => '';
          if (prop === 'getPropertyPriority') return () => '';

          // 直接属性访问
          if (prop === 'visibility') return 'visible';
          if (prop === 'display') return 'block';
          if (prop === 'position') return 'static';
          if (prop === 'opacity') return '1';
          if (prop === 'content') return '';

          return '';
        },
      },
    );
  },
});

// Mock matchMedia - 增强版本以支持 Ant Design 的 responsiveObserver
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => {
    // 为常见的媒体查询返回特定的匹配结果
    const mediaQueryList = {
      matches: query.includes('max-width: 575px')
        ? false // xs
        : query.includes('max-width: 767px')
        ? false // sm
        : query.includes('max-width: 991px')
        ? false // md
        : query.includes('max-width: 1199px')
        ? true // lg
        : query.includes('max-width: 1599px')
        ? true // xl
        : false, // 默认为 false
      media: query,
      onchange: null,
      addListener: jest.fn((cb) => {
        if (typeof cb === 'function') {
          // 立即调用一次回调以模拟初始状态
          cb(mediaQueryList);
        }
      }),
      removeListener: jest.fn(),
      addEventListener: jest.fn((event, cb) => {
        if (event === 'change' && typeof cb === 'function') {
          // 立即调用一次回调以模拟初始状态
          cb(mediaQueryList);
        }
      }),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
    return mediaQueryList;
  }),
});

// 确保 window.screen 存在，Ant Design 的响应式系统可能会用到
Object.defineProperty(window, 'screen', {
  writable: true,
  value: {
    width: 1024,
    height: 768,
    availWidth: 1024,
    availHeight: 768,
    colorDepth: 24,
    pixelDepth: 24,
  },
});

// Mock ResizeObserver（使用 class 以兼容依赖库的 new ResizeObserver 语义）
class MockResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    // 模拟观察，立即触发一次回调
    if (this.callback) {
      try {
        this.callback([], this);
      } catch (e) {
        // 忽略回调错误
      }
    }
  }
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = MockResizeObserver;
window.ResizeObserver = MockResizeObserver;

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock Element methods
Object.defineProperty(Element.prototype, 'getClientRects', {
  value: () => [{ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }],
});

Object.defineProperty(Element.prototype, 'getBoundingClientRect', {
  value: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  }),
});

// Mock Ant Design's responsiveObserver - 全局配置
jest.mock('antd/lib/_util/responsiveObserver', () => {
  const mockObserver = {
    register: jest.fn((callback) => {
      if (typeof callback === 'function') {
        callback({
          xs: false,
          sm: false,
          md: false,
          lg: true,
          xl: true,
          xxl: true,
        });
      }
      return 'mock-token';
    }),
    unregister: jest.fn(),
    destroy: jest.fn(),
  };

  return {
    __esModule: true,
    default: mockObserver,
  };
});

// Mock Ant Design's useBreakpoint hook - 全局配置
jest.mock('antd/lib/grid/hooks/useBreakpoint', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    xs: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    xxl: true,
  })),
}));
