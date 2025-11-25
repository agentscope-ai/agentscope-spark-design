import { Alert } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex vertical gap={28}>
      <Alert
        type="info"
        message="I am a description of a component."
        showIcon
      ></Alert>
      <Alert
        type="error"
        message="I am a description of a component."
        showIcon
      ></Alert>
      <Alert
        type="success"
        message="I am a description of a component."
        showIcon
      ></Alert>
      <Alert
        type="warning"
        message="I am a description of a component."
        showIcon
      ></Alert>
      <Alert
        type="error"
        message="I am a description of a component."
        description="I am a description of a component."
        showIcon
      ></Alert>
    </Flex>
  );
};
