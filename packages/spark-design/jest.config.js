module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/tests/polyfills.js'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],

  // 性能优化配置
  maxWorkers: 1, // 使用单线程，避免并发冲突和内存泄漏
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,

  // 超时设置
  testTimeout: 15000, // 增加超时时间到15秒

  // 禁用一些导致内存泄漏的功能
  verbose: false,
  silent: false,

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@agentscope-ai/design$': '<rootDir>/src/index.ts',
    '^@agentscope-ai/design/(.*)$': '<rootDir>/src/$1',
    '^@ali/agentscope-ai-design$': '<rootDir>/src/index.ts',
    '^@ali/agentscope-ai-design/(.*)$': '<rootDir>/src/$1',
    '^@ant-design/icons$': '@agentscope-ai/icons-override-antd',
    '^@ant-design/icons/(.*)$': '@agentscope-ai/icons-override-antd/$1',
    '^lodash-es$': 'lodash',
    '^antd/es/(.*)$': 'antd/lib/$1',
    '^antd$': 'antd/lib',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react',
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          skipLibCheck: true,
        },
        isolatedModules: true,
        useESM: false,
      },
    ],
    '^.+\\.(js|jsx|mjs)$': ['babel-jest', { rootMode: 'upward' }],
  },

  transformIgnorePatterns: [
    'node_modules/(?!(@ant-design|@agentscope-ai|@rc-component|rc-|antd|@ali|dayjs)/)',
  ],

  testMatch: ['<rootDir>/tests/**/*.test.(ts|tsx|js|jsx)'],

  // 排除一些有问题的测试文件，暂时跳过
  testPathIgnorePatterns: ['/node_modules/'],

  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/demo/**',
    '!src/**/demos/**',
    '!src/**/__tests__/**',
    '!src/**/__test__/**',
    '!src/**/commonComponents/**',
    '!src/**/BLVideoPlayer/**',
    '!src/**/rrwebRecord/**',
    '!src/**/BLSlateEditor/**',
  ],

  coverageDirectory: './.ci',
  coverageReporters: ['text', 'json', 'json-summary'],

  testEnvironmentOptions: {
    url: 'http://localhost',
    // 减少DOM节点数量
    pretendToBeVisual: false,
    // 禁用一些JSDOM功能以提高性能
    resources: 'usable',
  },

  // 内存和性能优化
  forceExit: true,
  detectOpenHandles: false,

  // 缓存配置
  cacheDirectory: '<rootDir>/node_modules/.cache/jest',

  // 增加内存限制
  maxConcurrency: 1,

  // 自动清理
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  
  // 显式指定 testSequencer 路径
  testSequencer: '<rootDir>/node_modules/@jest/test-sequencer/build/index.js',
};
