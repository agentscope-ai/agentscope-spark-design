import EyeFollower from '@agentscope-ai/chat/Welcome/demo/EyeFollower';
import { createGlobalStyle, createStyles } from 'antd-style';

export default function () {
  const { styles } = useStyle();

  return <>
    <Style />
    <div className={styles.welcome}>
      <EyeFollower />
    </div>
  </>
}

const useStyle = createStyles(({ css, token }) => ({
  welcome: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    marginTop: 'calc(10vh + 80px + 64px)',
    marginBottom: 32,

  },
}));



const Style = createGlobalStyle`
.sps-chat-anywhere-chat-welcome {
  height: auto !important;  
}`



