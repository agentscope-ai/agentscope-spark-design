/**
 * title: 基础用法
 * description: 在文字旁边添加帮助图标，hover 时显示提示内容
 * title.en-US: Basic Usage
 * description.en-US: Add a help icon next to text, showing tooltip content on hover
 */
import { HelpIcon } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <Flex align="center" gap={4}>
      <span>功能名称</span>
      <HelpIcon content="这是一段帮助文本，用于解释功能的用途和使用方法。" />
    </Flex>
  );
};
