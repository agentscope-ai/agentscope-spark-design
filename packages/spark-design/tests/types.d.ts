/// <reference types="@testing-library/jest-dom" />

// 确保 Jest DOM 匹配器类型可用
import '@testing-library/jest-dom';

// 扩展 Jest 匹配器类型
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveClass(className: string): R;
      toHaveTextContent(text: string): R;
      toHaveAttribute(attr: string, value?: string): R;
      toHaveStyle(style: string | Record<string, any>): R;
      toBeTruthy(): R;
    }
  }
}
