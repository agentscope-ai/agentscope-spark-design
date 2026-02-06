/**
 * title: 自定义 Tooltip 属性
 * description: 通过 popoverProps 可以自定义 Tooltip 的位置、触发方式等属性
 * title.en-US: Custom Tooltip Props
 * description.en-US: Customize Tooltip placement, trigger and other props through popoverProps
 */
import { HelpIcon } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex gap={24}>
      <Flex align="center" gap={4}>
        <span>顶部提示</span>
        <HelpIcon
          content="提示内容显示在顶部"
          popoverProps={{ placement: 'top' }}
        />
      </Flex>
      <Flex align="center" gap={4}>
        <span>右侧提示</span>
        <HelpIcon
          content="提示内容显示在右侧"
          popoverProps={{ placement: 'right' }}
        />
      </Flex>
      <Flex align="center" gap={4}>
        <span>点击触发</span>
        <HelpIcon
          content="点击图标显示提示内容"
          popoverProps={{ trigger: 'click' }}
        />
      </Flex>
    </Flex>
  );
};
