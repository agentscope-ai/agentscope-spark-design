import { getCommonConfig, Switch, Table, Tag } from '@agentscope-ai/design';
import { SparkCheckCircleFill } from '@agentscope-ai/icons';
import { Flex, Space } from 'antd';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [checkedList, setCheckedList] = useState<boolean[]>([]);
  const commonConfig = getCommonConfig();
  const { antPrefix } = commonConfig;
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Switch',
      dataIndex: 'switch',
      key: 'switch',
      render: (_, { key }) => (
        <Switch
          size="small"
          checked={!checkedList[key]}
          onChange={() => {
            const newCheckedList = [...checkedList];
            newCheckedList[key] = !newCheckedList[key];
            setCheckedList(newCheckedList);
          }}
          label={checkedList[key] ? 'Closed' : 'Opening'}
        />
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, { status }) => (
        <Flex align="center" gap={4}>
          <SparkCheckCircleFill
            style={{
              color: `var(--${antPrefix}-color-success)`,
              fontSize: 18,
            }}
          />
          <span>{status}</span>
        </Flex>
      ),
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color="purple" key={tag} bordered={false}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Operate',
      key: 'operate',
      render: (_) => (
        <Space size="middle">
          <a>Operate</a>
        </Space>
      ),
    },
  ];

  const data = new Array(100).fill(0).map((_, index) => ({
    key: index.toString(),
    title: `First Column Row ${index + 1}`,
    content: `Content Row ${index + 1}`,
    switch: `Switch Row ${index + 1}`,
    status: `Status Row ${index + 1}`,
    tags: [`Tag${index + 1}`],
  }));

  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
  );
};

export default App;
