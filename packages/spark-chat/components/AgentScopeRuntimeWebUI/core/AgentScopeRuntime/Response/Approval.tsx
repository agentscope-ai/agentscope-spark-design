import { StatusCard } from '@agentscope-ai/chat';
import { Button, Popover } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { createStyles } from 'antd-style'
import ApprovalCancelPopover from './ApprovalCancelPopover';
import { AgentScopeRuntimeContentType, AgentScopeRuntimeMessageRole, AgentScopeRuntimeMessageType, IAgentScopeRuntimeMessage, IDataContent } from '../types';
import { useChatAnywhereInput } from '../../Context/ChatAnywhereInputContext';
import { emit } from "../../Context/useChatAnywhereEventEmitter";
import { useTranslation } from '../../Context/ChatAnywhereI18nContext';


const useStyles = createStyles(({ css, token }) => ({
  desc: css`
    font-size: 12px;
    color: ${token.colorTextTertiary};
  `,
}));


export default function Approval({ data }: { data: IAgentScopeRuntimeMessage }) {
  const inputContext = useChatAnywhereInput(v => v);
  const { styles } = useStyles();
  const { t } = useTranslation();
  const [status, setStatus] = useState<'pending' | 'confirmed' | 'canceled'>('pending');
  const title = t?.('approval.title') || '人工干预';

  const description = useMemo(() => {
    if (status === 'pending') return t?.('approval.pending') || '请确认是否执行该操作';
    if (status === 'confirmed') return t?.('approval.confirmed') || '确认执行任务';
    return t?.('approval.canceled') || '取消执行任务';
  }, [status, t]);

  const handleConfirm = useCallback((status: 'confirmed' | 'canceled', reason?: string) => {
    setStatus(status);
    inputContext.setLoading(false);
    inputContext.setDisabled(false);

    const request = data
    // @ts-ignore
    const id = request.content[0]?.data?.id;
    const response = {
      type: AgentScopeRuntimeMessageType.MCP_APPROVAL_RESPONSE,
      role: AgentScopeRuntimeMessageRole.USER,
      content: [
        {
          type: AgentScopeRuntimeContentType.DATA,
          data: {
            "approve": status === 'confirmed',
            "id": id,
            "approval_request_id": id,
            "reason": reason
          }

        },
      ],
    }

    emit({
      type: 'handleApproval', data: {
        input: [
          request,
          response,
        ]
      }
    })

  }, [data]);


  const actions = useMemo(() => {
    if (status === 'pending') {
      return <Flex gap={8}>
        <ApprovalCancelPopover onConfirm={(reason) => handleConfirm('canceled', reason)} />
        <Button size="small" type="primary" onClick={() => handleConfirm('confirmed')}>
          {t?.('approval.confirm') || '确认执行'}
        </Button>
      </Flex>
    }
    return null;
  }, [status, t]);


  useEffect(() => {
    if (status === 'pending') {
      inputContext.setLoading(true);
      inputContext.setDisabled(true);
    }
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
