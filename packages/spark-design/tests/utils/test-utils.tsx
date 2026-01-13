import { ConfigProvider } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { render, RenderOptions } from '@testing-library/react';
import zhCN from 'antd/locale/zh_CN';
import React from 'react';

// 自定义渲染器，包含必要的 Provider
export const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
      <ConfigProvider
        locale={zhCN}
        // 确保图标覆盖生效
        theme={{
          token: {
            // 可以在这里添加主题配置
          },
        }}
      >
        {children}
      </ConfigProvider>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

// 重新导出常用的测试工具
export * from '@testing-library/react';
