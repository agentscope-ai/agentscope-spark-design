import { useMemo, useState } from 'react'
import { ChatPage } from './components/ChatPage'
import { ConfigProvider, generateTheme, generateThemeByToken } from '@agentscope-ai/design';
import { Setting, useClawdConfig } from './components/Setting';



const themeToken = (() => {
  const colorPrimary = '#615CED';
  const darkMode = true;
  if (colorPrimary || darkMode) {
    const res = generateThemeByToken(generateTheme({
      primaryHex: colorPrimary,
      darkMode: darkMode,
    }));

    return res;
  }
  return
})()



function InnerApp({ update }: { update: () => void }) {

  const [config] = useClawdConfig()


  return <ConfigProvider
    prefix='clawd'
    prefixCls='clawd'
    {...themeToken}
  >
    {
      config.host && config.token ? (
        <ChatPage wsUrl={config.host} session={'default'} token={config.token} />
      ) : (
        <Setting onSave={update} />
      )
    }
  </ConfigProvider>

}


function App() {

  const [key, setKey] = useState(0)

  return <InnerApp key={key} update={() => setKey(key + 1)} />

}

export default App
