import React, { useState } from 'react';

import {
  A2UIProvider,
  A2UIRenderer,
  type A2UIMessage,
  type A2UIAction,
} from '@agentscope-ai/spark-a2ui'

import examples from './mock'
import { Select } from 'antd';


function App() {

  const [index, setIndex] = useState(11);
  const messages: A2UIMessage[] = examples[index].messages;

  const handleAction = (action: A2UIAction) => {
    console.log('Action received:', action)
  }

  return (
    <>
      <Select options={examples.map((example, index) => ({ label: example.title, value: index }))} value={index} onChange={setIndex} />
      <A2UIProvider messages={messages}>
        <A2UIRenderer onAction={handleAction} />
      </A2UIProvider>
    </>
  )
}


export default App;