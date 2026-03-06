import { Button } from '@agentscope-ai/design';
import { createStyles } from 'antd-style';
import { ReactNode, useCallback, useState } from 'react';
import { HistoryPanel } from '@agentscope-ai/chat';
import { SparkDeleteLine, SparkEditLine, SparkPlusLine } from '@agentscope-ai/icons';
import defaultData from './mock.json';

const useStyles = createStyles(({ token }) => {
  return {
    layout: {
      display: 'flex',
      height: 416,
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: 8,
      overflow: 'hidden',
    },
    left: {
      display: 'flex',
      flexDirection: 'column',
      width: 280,
      background: token.colorBgLayout,
    },
    header: {
      margin: '16px 20px 8px 20px',
      height: 32,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 16,
    },
    btn: {
      margin: '0 20px 16px 20px',

    },
    list: {
      height: 0,
      flex: 1,
      overflowY: 'scroll',
      padding: '0 16px 16px 20px',

      '&::-webkit-scrollbar': {
        width: 4,
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'transparent !important',

        '&:hover': {
          backgroundColor: `${token.colorFill} !important`,
        }
      },

    }
  };
});


function Layout(props: { children: ReactNode }) {
  const { styles, cx, theme } = useStyles();

  return <div className={styles.layout}>{props.children}</div>
}


export default function () {
  const [selectable, setSelectable] = useState(true);
  const { styles, cx, theme } = useStyles();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleSelectChange = useCallback((keys: string[]) => {
    setSelectedKeys(keys);
  }, []);

  return <Layout>
    <div className={styles.left}>
      <div className={styles.header}>
        <strong>SPARK CHAT</strong>
      </div>
      <div className={styles.btn}>
        <Button size="small" onClick={() => setSelectable(!selectable)}>selectable</Button>
        <Button size="small" onClick={() => setSelectedKeys([])}>clear</Button>
        <Button size="small" onClick={() => setSelectedKeys(defaultData.map((item) => item.key))}>select all</Button>
      </div>
      <div className={styles.list}>
        <HistoryPanel
          selectable={selectable}
          selectedKeys={selectedKeys}
          onSelectChange={handleSelectChange}
          menu={[
            {
              label: '编辑',
              key: 'edit',
              icon: <SparkEditLine />,
              onEdit: (label: string) => {
                if (label) return Promise.resolve();
                return Promise.reject();
              },
            },
            {
              label: '删除',
              key: 'delete',
              icon: <SparkDeleteLine />,
              danger: true,
              onClick: (session) => {
                console.log(session);
              },
            },
          ]}
          items={defaultData} defaultActiveKey="item1" />
      </div>
    </div>
  </Layout>
}