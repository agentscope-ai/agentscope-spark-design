import { ConfigProvider } from '@agentscope-ai/design';
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';
import React from 'react';


export const ConfigProviderContext = React.createContext<{
  dark?: boolean;
  setDark: (dark: boolean) => void;
}>(undefined);

export default function (props) {
  const [dark, setDark] = useState(true);
  const currentTheme = dark ? darkTheme : lightTheme;

  return <>
    <ConfigProviderContext.Provider value={{
      dark,
      setDark,
    }}>
      <ConfigProvider
        {...currentTheme}
        style={{ height: '100%' }}
        iconfont='https://at.alicdn.com/t/a/font_4807885_6wjcpzayws6.js'
        prefix='sps'
        prefixCls="sps"
      >
        {props.children}
      </ConfigProvider>
    </ConfigProviderContext.Provider>
  </>;
}