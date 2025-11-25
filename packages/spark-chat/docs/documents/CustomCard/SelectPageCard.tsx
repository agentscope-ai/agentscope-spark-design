import React, { useState } from 'react';
import { Button, Card, Select } from '@agentscope-ai/design'
import { Flex } from 'antd';
import { useMessages, uuid } from '@agentscope-ai/chat';


interface ISelectPageCardContext {
  data: {
    pages: string[];
  }
  context: {
    onInput: {
      onSubmit: (data: { query: string }) => void;
    };
  }
}

function SelectPageCard(props: ISelectPageCardContext) {
  console.log(props);
  const { updateMessage } = useMessages() || {};
  const [page, setPage] = useState<string>(props.data.pages[0]);

  return <Card title='Please select a page'>
    <Flex gap={8}>
      <Select value={page} onChange={setPage} options={props.data.pages.map(page => ({ label: page, value: page }))} />
      <Button onClick={() => {
        updateMessage({
          id: uuid(),
          role: 'assistant',
          cards: [{
            code: 'PagePVChartCard',
            data: {
              page,
            }
          }]
        });
      }}>OK</Button>
      <Button onClick={() => {
        props.context.onInput?.onSubmit?.({
          query: page,
        });
      }}>Send</Button>
    </Flex>
  </Card>;
}


export default SelectPageCard;