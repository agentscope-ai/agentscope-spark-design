import { Button, IconButton } from '@agentscope-ai/design';
import { createStyles } from 'antd-style';
import { ReactNode, useState } from 'react';
import { HistoryPanel } from '@agentscope-ai/chat';
import { SparkDeleteLine, SparkEditLine, SparkOperateLeftLine, SparkOperateRightLine, SparkPlusLine } from '@agentscope-ai/icons';

const useStyles = createStyles(({ token }) => {
  return {
    layout: {
      position: 'relative',
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
      transition: 'margin-left 0.3s ease-in-out',
      zIndex: 1,
    },
    open: {
      position: 'absolute',
      left: 20,
      top: 16,
    },
    close: {
      marginLeft: -280,
    },
    header: {
      margin: '16px 20px 8px 20px',
      height: 32,
      display: 'flex',
      justifyContent: 'space-between',
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
  disabled: index === 3,
}));

function Layout(props: { children: ReactNode }) {
  const { styles, cx, theme } = useStyles();

  return <div className={styles.layout}>{props.children}</div>
}

export default function () {
  const [open, setOpen] = useState(true);
  const { styles, cx, theme } = useStyles();


  return <Layout>
    <div className={styles.open}>
      <IconButton bordered={false} icon={<SparkOperateRightLine />} onClick={() => setOpen(!open)} />

    </div>
    <div className={cx(styles.left, open ? '' : styles.close)}>
      <div className={styles.header}>
        <strong>SPARK CHAT</strong>
        <IconButton bordered={false} icon={<SparkOperateLeftLine />} onClick={() => setOpen(!open)} />
      </div>
      <div className={styles.btn}>
        <Button block type="primary" icon={<SparkPlusLine />}>
          New Chat
        </Button>
      </div>
      <div className={styles.list}>
        <HistoryPanel
          items={items}
          defaultActiveKey="item1" />
      </div>
    </div>
  </Layout>
}