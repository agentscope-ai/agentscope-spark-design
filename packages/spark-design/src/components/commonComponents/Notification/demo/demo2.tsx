import { Button, notification } from '@agentscope-ai/design';
import React from 'react';

const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  return (
    <>
      <Button onClick={() => api.success({
        message: 'title',
        description: 'using useNotification hooks',
      })}>
        Open
      </Button>
      {contextHolder}
    </>
  );
};

export default App;
