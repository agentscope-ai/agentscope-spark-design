import { Button } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { createStyles } from 'antd-style';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { v4 as uuid } from 'uuid';
import StatusCard from '../../../../StatusCard';
import { useTranslation } from '../../Context/ChatAnywhereI18nContext';
import { useChatAnywhereInput } from '../../Context/ChatAnywhereInputContext';
import { ChatAnywhereMessagesContext } from '../../Context/ChatAnywhereMessagesContext';
import { useChatAnywhereCommandDispatcher } from '../../Context/useChatAnywhereEventEmitter';
import {
  AgentScopeRuntimeContentType,
  AgentScopeRuntimeMessageRole,
  AgentScopeRuntimeMessageType,
  AgentScopeRuntimeRunStatus,
  IAgentScopeRuntimeMessage,
  IDataContent,
} from '../types';
import ApprovalCancelPopover from './ApprovalCancelPopover';
import { getApprovalStatus, type ApprovalStatus } from './approvalState';

const useStyles = createStyles(({ css, token }) => ({
  desc: css`
    font-size: 12px;
    color: ${token.colorTextTertiary};
  `,
}));

export default function Approval({
  data,
}: {
  data: IAgentScopeRuntimeMessage;
}) {
  const dispatch = useChatAnywhereCommandDispatcher();
  const setLoading = useChatAnywhereInput((value) => value.setLoading);
  const setDisabled = useChatAnywhereInput((value) => value.setDisabled);
  const { styles } = useStyles();
  const { t } = useTranslation();
  const messages = useContextSelector(
    ChatAnywhereMessagesContext,
    (value) => value.messages,
  );
  const [optimisticStatus, setOptimisticStatus] = useState<ApprovalStatus>();
  const approvalContent = data.content?.find(
    (content): content is IDataContent<{ id?: string }> =>
      content.type === AgentScopeRuntimeContentType.DATA,
  );
  const approvalRequestId = approvalContent?.data?.id;
  const persistedStatus = useMemo(
    () => getApprovalStatus(messages, approvalRequestId),
    [approvalRequestId, messages],
  );
  const status = optimisticStatus || persistedStatus;
  const title = t?.('approval.title') || '人工干预';

  const description = useMemo(() => {
    if (status === 'pending')
      return t?.('approval.pending') || '请确认是否执行该操作';
    if (status === 'confirmed')
      return t?.('approval.confirmed') || '确认执行任务';
    return t?.('approval.canceled') || '取消执行任务';
  }, [status, t]);

  const handleConfirm = useCallback(
    (status: 'confirmed' | 'canceled', reason?: string) => {
      setOptimisticStatus(status);
      setLoading(false);
      setDisabled(false);

      const request = data;
      const id = approvalRequestId;
      const response: IAgentScopeRuntimeMessage = {
        id: uuid(),
        type: AgentScopeRuntimeMessageType.MCP_APPROVAL_RESPONSE,
        role: AgentScopeRuntimeMessageRole.USER,
        status: AgentScopeRuntimeRunStatus.Completed,
        content: [
          {
            type: AgentScopeRuntimeContentType.DATA,
            status: AgentScopeRuntimeRunStatus.Completed,
            data: {
              approve: status === 'confirmed',
              id: id,
              approval_request_id: id,
              reason: reason,
            },
          },
        ],
      };

      void dispatch('handleApproval', {
        input: [request, response],
      }).catch((error) => {
        console.error('approval submission failed:', error);
        setOptimisticStatus(undefined);
      });
    },
    [approvalRequestId, data, dispatch, setDisabled, setLoading],
  );

  const actions = useMemo(() => {
    if (status === 'pending') {
      return (
        <Flex gap={8}>
          <ApprovalCancelPopover
            onConfirm={(reason) => handleConfirm('canceled', reason)}
          />
          <Button
            size="small"
            type="primary"
            onClick={() => handleConfirm('confirmed')}
          >
            {t?.('approval.confirm') || '确认执行'}
          </Button>
        </Flex>
      );
    }
    return null;
  }, [handleConfirm, status, t]);

  useEffect(() => {
    if (status !== 'pending') return;
    setLoading(
      t?.('approval.taskRunning') || '当前有正在执行的任务，无法发送新的任务',
    );
    setDisabled(true);

    return () => {
      setLoading(false);
      setDisabled(false);
    };
  }, [setDisabled, setLoading, status, t]);

  return (
    <StatusCard.HITL
      done={status !== 'pending'}
      onDone={() => {}}
      title={
        <Flex gap={8}>
          {title}
          <span className={styles.desc}>{description}</span>
        </Flex>
      }
      actions={actions}
    />
  );
}
