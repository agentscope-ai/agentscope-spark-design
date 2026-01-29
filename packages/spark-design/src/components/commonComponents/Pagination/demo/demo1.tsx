import { Pagination } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  return (
    <Flex align="center" vertical justify="center" gap={50}>
      <Pagination 
        hideSwitchButton 
        total={50} 
        defaultCurrent={2}
      />
    </Flex>
  );
};

export default App;
