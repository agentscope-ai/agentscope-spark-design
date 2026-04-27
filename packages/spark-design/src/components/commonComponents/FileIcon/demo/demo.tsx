import { Button, FileCard, FileIcon } from '@agentscope-ai/design';
import { Space } from 'antd';

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

  const folderList = [
    'folder',
    'folderGray',
  ];

  return (
    <div>
      <Space>
        {list.map((t) => (
          <FileIcon key={t} type={t} />
        ))}
        {folderList.map((t) => (
          <FileIcon key={t} type={t} width={45} height={40} />
        ))}
      </Space>
      <div />
      <Space wrap style={{ marginBottom: 8 }}>
        {list.map((t) => (
          <FileCard key={t} name={t} size={1000} type={t} />
        ))}
        {folderList.map((t) => (
          <FileCard key={t} name={t} size={1000} type={t} width={150} iconWidth={45} iconHeight={40} />
        ))}
      </Space>

      <FileCard name={'pdf'} size={1000} type={'pdf'} width="100%">
        <Button size="small">删除</Button>
      </FileCard>

      <FileCard name={'pdf'} type={'pdf'} width="100%">
        <Button size="small">删除</Button>
      </FileCard>
    </div>
  );
}
