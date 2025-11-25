import { CopilotChat } from '@agentscope-ai/chat';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
}));

export default function Chat() {
  const { styles } = useStyles();
  return <CopilotChat className={styles.container} />;
}
