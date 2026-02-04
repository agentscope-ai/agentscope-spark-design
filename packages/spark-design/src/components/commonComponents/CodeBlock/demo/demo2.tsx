import { CodeBlock } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const value = `function main(params) {    
  const ret = {        
    "result": {           
      "key0": params.city + params.date,            
      "key1": ["hello", "world"],                   
    },    
  }    
  return ret
}`;
  return (
    <Flex vertical gap={16} style={{ width: 720 }}>
      <CodeBlock language={'javascript'} value={value} height="200px" />
    </Flex>
  );
};

export default App;
