/**
 * title: 富文本内容
 * description: content 属性支持传入 ReactNode，可以展示富文本内容
 * title.en-US: Rich Text Content
 * description.en-US: The content prop supports ReactNode, allowing rich text content display
 */
import { HelpIcon } from '@agentscope-ai/design';
import { Flex, Typography } from 'antd';

const { Text, Link } = Typography;

export default () => {
  const richContent = (
    <div>
      <Text strong>使用说明：</Text>
      <ul style={{ margin: '8px 0', paddingLeft: 16 }}>
        <li>支持多种数据格式</li>
        <li>最大文件大小：10MB</li>
        <li>
          查看更多请访问{' '}
          <Link href="#" target="_blank">
            帮助文档
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <Flex align="center" gap={4}>
      <span>上传文件</span>
      <HelpIcon content={richContent} />
    </Flex>
  );
};
