import { Tag, type TagProps } from '@agentscope-ai/design';
import { Flex } from 'antd';

const COLOR_LIST: TagProps['color'][] = [
  'purple',
  'pink',
  'yellow',
  'teal',
  'blue',
  'mauve',
  'success',
  'error',
  'warning',
  'info',
];

export default () => {
  return (
    <Flex align="center" vertical gap={16}>
      {COLOR_LIST.map((color) => (
        <Flex key={color} gap={16} align="center">
          <Tag color={color}>Tag MD</Tag>
          <Tag color={color} size="small">
            Tag SM
          </Tag>
        </Flex>
      ))}
    </Flex>
  );
};
