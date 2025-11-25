import { Bubble, CustomCardsProvider } from '@agentscope-ai/chat';
import useStyle from './style';
import Query from '../../cards/Query';
import Answer from "../../cards/Answer";

export default function ({ messages }) {
  const { styles } = useStyle();

  return <CustomCardsProvider
    cardConfig={{
      Query,
      Answer
    }}>
    <Bubble.List
      id="perplexcity-bubble-list"
      classNames={{
        wrapper: styles.wrapper,
        list: styles.list
      }}
      // @ts-ignore
      items={messages}
    />
  </CustomCardsProvider>
}