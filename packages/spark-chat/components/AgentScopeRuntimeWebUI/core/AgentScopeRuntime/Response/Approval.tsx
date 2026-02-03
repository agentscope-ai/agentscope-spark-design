import { StatusCard } from '@agentscope-ai/chat';
import { Button, Popover } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { useMemo, useState } from 'react';
import { createStyles } from 'antd-style'
import ApprovalCancelPopover from './ApprovalCancelPopover';

const useStyles = createStyles(({ css, token }) => ({
  desc: css`
    font-size: 12px;
    color: ${token.colorTextTertiary};
  `,
}));


export default function Approval() {
  const { styles } = useStyles();
  const [status, setStatus] = useState<'pending' | 'confirmed' | 'canceled'>('pending');
  const title = '人工干预'

  const description = useMemo(() => {
    return status === 'pending' ? '请确认是否执行该操作' : status === 'confirmed' ? '确认执行任务' : '取消执行任务';
  }, [status]);


  const actions = useMemo(() => {
    if (status === 'pending') {
      return <Flex gap={8}>
        <Popover trigger="click" content={<ApprovalCancelPopover />}>
          <Button size="small">取消执行</Button>
        </Popover>
        <Button size="small" type="primary" onClick={() => setStatus('confirmed')}>确认执行</Button>
      </Flex>
    }
    return null;
  }, [status]);

  return <StatusCard.HITL
    done={status !== 'pending'}
    onDone={() => { }}
    title={<Flex gap={8}>
      {title}
      <span className={styles.desc}>{description}</span>
    </Flex>}
    actions={actions}
  />
}