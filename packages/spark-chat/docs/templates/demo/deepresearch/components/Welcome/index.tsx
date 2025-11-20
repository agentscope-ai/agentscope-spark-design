import { createGlobalStyle, createStyles } from 'antd-style';
import ModelSelect from '../ModelSelect';

export default function () {
  const { styles } = useStyle();

  return <>
    <Style />
    <div className={styles.welcome}>
      <div className={styles.h1}>Welcome to LLMs Deep Research</div>
      <div className={styles.h2}>Start with <ModelSelect size="large" /></div>
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
    marginBottom: 20,

  },
  h1: {
    fontFamily: 'claude clone',
    fontSize: 32,
    lineHeight: '48px',
    fontWeight: '500',
  },
  h2: {
    fontFamily: 'claude clone',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    fontSize: 20,
    lineHeight: '32px',
    color: token.colorTextSecondary,
  },
}));



const Style = createGlobalStyle`
.sps-chat-anywhere-chat-welcome {
  height: auto !important;  
}`



