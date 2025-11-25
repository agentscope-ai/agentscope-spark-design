import { Button } from '@agentscope-ai/design';
import React from 'react';
import MobileAlertDialog from '..';

const App: React.FC = () => {
  return (
    <>
      <Button
        onClick={() =>
          MobileAlertDialog.info({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Open AlertDialog(Info)
      </Button>
    </>
  );
};

export default App;
