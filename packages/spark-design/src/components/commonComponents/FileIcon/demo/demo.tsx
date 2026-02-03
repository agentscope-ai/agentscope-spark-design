import { Button, FileCard, FileIcon } from '@agentscope-ai/design';
import { Flex, Space } from 'antd';

export default function () {
  const list = [
    'common',
    'epub',
    'excel',
    'html',
    'image',
    'md',
    'mobi',
    'pdf',
    'ppt',
    'txt',
    'web',
    'word',
  ];

  return (
    <Flex vertical gap="16px">
      <Space>
        {list.map((t) => (
          <FileIcon key={t} type={t} />
        ))}
      </Space>

      <Space wrap>
        {list.map((t) => (
          <FileCard key={t} name={t} size={1000} type={t} />
        ))}
      </Space>


      <FileCard name={'pdf'} size={1000} type={'pdf'} width="100%">
        <Button size="small">删除</Button>
      </FileCard>

      <FileCard name={'pdf'} type={'pdf'} width="100%">
        <Button size="small">删除</Button>
      </FileCard>
    </Flex>
  );
}
