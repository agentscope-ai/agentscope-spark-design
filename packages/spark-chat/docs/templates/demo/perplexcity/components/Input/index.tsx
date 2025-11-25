import React from 'react';
import { ChatInput } from '@agentscope-ai/chat';
import useStyle from './style';

export default function (props: { onSubmit: (content: string) => void, loading: boolean }) {
  const { styles } = useStyle()
  const [content, setContent] = React.useState('');


  return <ChatInput
    loading={props.loading}
    className={styles.container}
    value={content}
    onChange={setContent}
    onSubmit={async () => {
      props.onSubmit(content);
      setContent('');
    }}
    placeholder='Search what you want to know'
  ></ChatInput>
}


