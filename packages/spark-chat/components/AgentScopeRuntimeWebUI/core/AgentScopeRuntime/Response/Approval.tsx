import { Button } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { createStyles } from 'antd-style';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';
import StatusCard from '../../../../StatusCard';
import { useTranslation } from '../../Context/ChatAnywhereI18nContext';
import { useChatAnywhereInput } from '../../Context/ChatAnywhereInputContext';
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
  const [status, setStatus] = useState<'pending' | 'confirmed' | 'canceled'>(
    'pending',
  );
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
      setStatus(status);
      setLoading(false);
      setDisabled(false);

      const request = data;
      const approvalContent = request.content?.find(
        (content): content is IDataContent<{ id?: string }> =>
          content.type === AgentScopeRuntimeContentType.DATA,
      );
      const id = approvalContent?.data?.id;
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

      dispatch('handleApproval', {
        input: [request, response],
      });
    },
    [data, dispatch, setDisabled, setLoading],
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
    if (status === 'pending') {
      setLoading(
        t?.('approval.taskRunning') || '当前有正在执行的任务，无法发送新的任务',
      );
      setDisabled(true);
    }
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
