import { Button } from '@agentscope-ai/design';
import { createStyles } from 'antd-style';
import { ReactNode, useState } from 'react';
import { HistoryPanel } from '@agentscope-ai/chat';
import { SparkDeleteLine, SparkEditLine, SparkPlusLine } from '@agentscope-ai/icons';


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

const items = Array.from({ length: 10 }).map((_, index) => ({
  key: `item${index + 1}`,
  label: `What is Spark Design?`,
  desc: new Date(Date.now() - index * 1000).toLocaleString(),
  disabled: index === 3,
  timeline: true,
}));

function Layout(props: { children: ReactNode }) {
  const { styles, cx, theme } = useStyles();

  return <div className={styles.layout}>{props.children}</div>
}

export default function () {
  const [open, setOpen] = useState(false);
  const { styles, cx, theme } = useStyles();

  return <Layout>
    <div className={styles.left}>
      <div className={styles.header}>
        <strong>SPARK CHAT</strong>
      </div>
      <div className={styles.btn}>
        <Button block type="primary" icon={<SparkPlusLine />}>
          New Chat
        </Button>
      </div>
      <div className={styles.list}>
        <HistoryPanel
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
          items={items} defaultActiveKey="item1" />
      </div>
    </div>
  </Layout>
}