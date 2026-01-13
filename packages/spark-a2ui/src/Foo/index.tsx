import React from 'react';

import {
  A2UIProvider,
  A2UIRenderer,
  type A2UIMessage,
  type A2UIAction,
} from '@agentscope-ai/spark-a2ui'

import examples from './mock'


function App() {
  const messages: A2UIMessage[] = examples[0].messages;

  const handleAction = (action: A2UIAction) => {
    console.log('Action received:', action)
  }

  return (
    <A2UIProvider messages={messages}>
      <A2UIRenderer onAction={handleAction} />
    </A2UIProvider>
  )
}


export default App;