import { Button } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex vertical gap={16}>
      <Flex gap={16}>
        <Button type="primary" danger>
          Primary Danger
        </Button>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="primaryLess">PrimaryLess</Button>
      </Flex>
      <Flex gap={16}>
        <Button type="primary" danger disabled>
          Primary Danger
        </Button>
        <Button disabled>Default</Button>
        <Button type="primary" disabled>
          Primary
        </Button>
        <Button type="primaryLess" disabled>PrimaryLess</Button>
      </Flex>
    </Flex>
  );
};
