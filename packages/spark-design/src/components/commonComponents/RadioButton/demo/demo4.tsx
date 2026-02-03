import type { RadioChangeEvent } from 'antd';
import { Flex } from 'antd';
import React from 'react';
import RadioButton from '../index';

const onChange = (e: RadioChangeEvent) => {
  console.log(`radio checked:${e.target.value}`);
};

const App: React.FC = () => {
  return (
    <Flex vertical gap="middle">
      <RadioButton
        onChange={onChange}
        defaultValue="a"
        bordered={true}
        options={[
          {
            value: 'a',
            label: 'Qwen-Max',
          },
          {
            value: 'c',
            label: 'Qwen-Plus',
          },
          {
            value: 'd',
            label: 'Qwen-Turbo',
          },
        ]}
      ></RadioButton>
    </Flex>
  );
};

export default App;
