import React from 'react';
import { TasksList } from './TasksList';
import { TasksProvider } from './hook';
import { CopilotKit } from "@agentscope-ai/chat";
import { createStyles } from 'antd-style';
import Chat from './Chat';
import { ConfigProvider, carbonTheme } from '@ali/agentscope-ai-design';

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    display: flex;
    height: 100%;
  `,

  left: css`
    flex: 1;
  `,
  right: css`
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    border-left: 1px solid ${token.colorBorderSecondary};
  `
}));


export default function () {
  const { styles } = useStyles();

  return <ConfigProvider {...carbonTheme} style={{ height: '100%' }}>
    <CopilotKit runtimeUrl="https://func-jfa-zedphfubal.cn-hangzhou.fcapp.run/ag-ui">
      <div className={styles.container}>
        <div className={styles.left}>
          <TasksProvider>
            <TasksList />
          </TasksProvider>
        </div>
        <div className={styles.right}>
          <Chat />
        </div>
      </div>
    </CopilotKit>
  </ConfigProvider>
}