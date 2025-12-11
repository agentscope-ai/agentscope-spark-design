import { Button, Tooltip } from '@agentscope-ai/design';
import React from 'react';

const title = new Array(100)
  .fill(1)
  .map((_, index) => `${index + 1} 测试maxHeight属性的场景`)
  .join('');
const App: React.FC = () => (
  <>
    <Tooltip title={title} maxHeight={400}>
      <Button>set maxHeight</Button>
    </Tooltip>
    <Tooltip title={title}>
      <Button>not set maxHeight</Button>
    </Tooltip>
  </>
);

export default App;
