import { Button, Tooltip } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';

const title = new Array(100)
  .fill(1)
  .map((_, index) => `${index + 1} 测试maxHeight属性的场景`)
  .join('');
const App: React.FC = () => (
  <Flex gap="16px">
    <Tooltip title={title} maxHeight={400}>
      <Button>set maxHeight</Button>
    </Tooltip>
    <Tooltip title={title}>
      <Button>not set maxHeight</Button>
    </Tooltip>
  </Flex>
);

export default App;
