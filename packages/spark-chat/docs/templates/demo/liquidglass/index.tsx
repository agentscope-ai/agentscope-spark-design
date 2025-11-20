import { createStyles } from "antd-style";
import Background from "./Background";
import Chat from "./Chat";
import { ConfigProvider, carbonDarkTheme } from '@agentscope-ai/design';

carbonDarkTheme.theme.token.borderRadius = 20;
carbonDarkTheme.theme.token.borderRadiusLG = 20;
carbonDarkTheme.theme.token.borderRadiusSM = 20;

export default function LiquidGlass() {
  const { styles } = useStyles();
  return <ConfigProvider
    {...carbonDarkTheme}
  >
    <div className={styles.container}>
      <Background>
        <Chat />
      </Background>
    </div>
  </ConfigProvider>;
}


const useStyles = createStyles(({ token }) => {
  return {
    container: {
      width: '100vw',
      height: '100vh',
    },
  };
});