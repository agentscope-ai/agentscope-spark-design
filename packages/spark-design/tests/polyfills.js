// Web APIs polyfills for Jest environment

// TextEncoder and TextDecoder polyfills
const { TextDecoder, TextEncoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Response polyfill for fetch API
global.Response = class Response {
  constructor(body, init = {}) {
    this.body = body;
    this.status = init.status || 200;
    this.statusText = init.statusText || 'OK';
    this.headers = new Map(Object.entries(init.headers || {}));
    this.ok = this.status >= 200 && this.status < 300;
  }

  async text() {
    return Promise.resolve(this.body);
  }

  async json() {
    return Promise.resolve(JSON.parse(this.body));
  }

  header(name) {
    return this.headers.get(name.toLowerCase());
  }
};

// Request polyfill
global.Request = class Request {
  constructor(input, init = {}) {
    this.url = input;
    this.method = init.method || 'GET';
    this.headers = new Map(Object.entries(init.headers || {}));
    this.body = init.body;
  }
};

// Headers polyfill
if (!global.Headers) {
  global.Headers = class Headers {
    constructor(init = {}) {
      this.map = new Map();
      if (init) {
        Object.entries(init).forEach(([key, value]) => {
          this.map.set(key.toLowerCase(), value);
        });
      }
    }

    get(name) {
      return this.map.get(name.toLowerCase());
    }

    set(name, value) {
      this.map.set(name.toLowerCase(), value);
    }

    has(name) {
      return this.map.has(name.toLowerCase());
    }

    delete(name) {
      return this.map.delete(name.toLowerCase());
    }

    *[Symbol.iterator]() {
      for (const [key, value] of this.map) {
        yield [key, value];
      }
    }
  };
}

// URL polyfill (if needed)
if (typeof global.URL === 'undefined') {
  const { URL, URLSearchParams } = require('url');
  global.URL = URL;
  global.URLSearchParams = URLSearchParams;
}

// Performance polyfill
if (!global.performance) {
  global.performance = {
    now: () => Date.now(),
  };
}

// IntersectionObserver mock
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }

  observe() {}
  unobserve() {}
  disconnect() {}
};

// ResizeObserver mock
global.ResizeObserver = class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {}
  unobserve() {}
  disconnect() {}
};

// matchMedia mock
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// getComputedStyle mock
global.getComputedStyle = jest.fn(() => ({
  getPropertyValue: jest.fn(() => ''),
}));
