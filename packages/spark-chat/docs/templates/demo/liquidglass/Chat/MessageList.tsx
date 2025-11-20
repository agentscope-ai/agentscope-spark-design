import { Bubble, CustomCardsProvider } from "@agentscope-ai/chat";
import { createStyles } from "antd-style";

export default function ({ messages }) {
  const { styles } = useStyle();

  return <CustomCardsProvider
    cardConfig={{
    }}>
    <Bubble.List
      classNames={{
        wrapper: styles.wrapper,
        list: styles.list
      }}
      // @ts-ignore
      items={messages}
    />
  </CustomCardsProvider>
}

const useStyle = createStyles(({ css, token }) => ({
  wrapper: css`
    height: 0;
    flex: 1;
    
  `,

  list: css`
  `
}));