import { Disclaimer } from '@agentscope-ai/chat';
import { useState } from 'react';
import Welcome from '../Welcome';
import useStyle from './style';
import Input from '../Input';
import MessagesList from '../MessagesList';
import mock from './mock';

export default function Claude() {
  const { styles } = useStyle()
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);


  return <div className={styles.container}>
    <div className={styles.chat}>
      {
        messages.length ? <MessagesList messages={messages} /> : <Welcome />
      }
      <Input loading={loading} onSubmit={async (content) => {


        setLoading(true);

        setMessages([{
          role: 'user',
          cards: [
            { code: 'Query', data: { content: 'What is CityPop?' } }
          ]
        }, {
          role: 'assistant',
          msgStatus: 'generating',
          cards: [{
            code: 'Answer',
            data: {
              deepThinking: {
                loading: true,
                content: '...'
              }
            },
          }],
        }]);

        await mock({ messages, setMessages });

        setLoading(false);
      }} />
      <div className={styles.disclaimer}>
        <Disclaimer />
      </div>
    </div>
  </div>
}

