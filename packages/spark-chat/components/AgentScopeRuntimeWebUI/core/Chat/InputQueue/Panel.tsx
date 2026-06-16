import { IconButton } from '@agentscope-ai/design';
import {
  SparkClearLine,
  SparkDeleteLine,
  SparkRefreshLine,
} from '@agentscope-ai/icons';
import { Tooltip } from 'antd';
import { useProviderContext } from '@agentscope-ai/chat';
import { useTranslation } from '../../Context/ChatAnywhereI18nContext';
import type { QueuedInputItem } from './index';

interface InputQueuePanelProps {
  items: QueuedInputItem[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onRetry: (id: string) => void;
}

export default function InputQueuePanel(props: InputQueuePanelProps) {
  const { items, onRemove, onClear, onRetry } = props;
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-input-queue');
  const { t } = useTranslation();
  const tr = (key: Parameters<typeof t>[0]) => t?.(key) || key;

  if (!items.length) return null;

  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-header`}>
        <span>
          {tr('queue.title')} ({items.length})
        </span>
        <Tooltip title={tr('queue.clear')}>
          <IconButton
            size="small"
            bordered={false}
            icon={<SparkClearLine />}
            onClick={onClear}
          />
        </Tooltip>
      </div>
      <div className={`${prefixCls}-list`}>
        {items.map((item, index) => {
          const failed = item.status === 'failed';
          return (
            <div className={`${prefixCls}-item`} key={item.id}>
              <span className={`${prefixCls}-index`}>{index + 1}</span>
              <div className={`${prefixCls}-content`}>
                <div className={`${prefixCls}-text`}>
                  {item.data.query || tr('queue.attachmentOnly')}
                </div>
                {failed ? (
                  <div className={`${prefixCls}-error`}>
                    {item.errorMessage || tr('queue.failed')}
                  </div>
                ) : null}
              </div>
              {failed ? (
                <Tooltip title={tr('queue.retry')}>
                  <IconButton
                    size="small"
                    bordered={false}
                    icon={<SparkRefreshLine />}
                    onClick={() => onRetry(item.id)}
                  />
                </Tooltip>
              ) : null}
              <Tooltip title={tr('common.delete')}>
                <IconButton
                  size="small"
                  bordered={false}
                  icon={<SparkDeleteLine />}
                  onClick={() => onRemove(item.id)}
                />
              </Tooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
}
