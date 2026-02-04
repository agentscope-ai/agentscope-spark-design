import { Steps } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  
  return (
    <Flex style={{ width: '50%'}} align='center' justify='center'>
      <Steps
        current={current}
        onChange={onChange}
        direction='vertical'
        items={[
          {
            title: 'A Step',
          },
          {
            title: 'B Step xxxxx',
          }
        ]}
      />
    </Flex>
  );
};

export default App;