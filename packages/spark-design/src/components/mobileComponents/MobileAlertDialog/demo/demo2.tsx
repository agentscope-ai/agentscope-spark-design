import { Button } from '@agentscope-ai/design';
import { Flex } from 'antd';
import React from 'react';
import MobileAlertDialog from '..';

const App: React.FC = () => {
  return (
    <Flex vertical gap={24}>
      <Button
        onClick={() =>
          MobileAlertDialog.success({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Success
      </Button>
      <Button
        onClick={() =>
          MobileAlertDialog.warning({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          MobileAlertDialog.error({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Error
      </Button>
      <Button
        onClick={() =>
          MobileAlertDialog.confirm({
            title: 'Title here',
            children: 'This information content passed into this AlertDialog.',
            centered: true,
          })
        }
      >
        Confirm
      </Button>
    </Flex>
  );
};

export default App;
