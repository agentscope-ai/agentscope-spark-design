import { useEffect, useRef, useState } from 'react';
import { useProviderContext } from '@agentscope-ai/chat';
import { IconButton } from '@agentscope-ai/design';
import {
  SparkClearLine,
  SparkDeleteLine,
  SparkDragDotLine,
  SparkEditLine,
  SparkPauseLine,
  SparkPlayLine,
  SparkRefreshLine,
  SparkSendLine,
} from '@agentscope-ai/icons';
import { Tooltip } from 'antd';
import { useTranslation } from '../../Context/ChatAnywhereI18nContext';
import type { QueuedInputItem } from './index';

interface InputQueuePanelProps {
  items: QueuedInputItem[];
  paused: boolean;
  isOwner: boolean;
  onRemove: (id: string) => void;
  onClear: () => void;
  onRetry: (id: string) => void;
  onTogglePaused: () => void;
  onReorder: (sourceId: string, targetId: string) => void;
  onUpdateQuery: (id: string, query: string) => void;
  onSendNow: (id: string) => void;
}

export default function InputQueuePanel(props: InputQueuePanelProps) {
  const {
    items,
    paused,
    isOwner,
    onRemove,
    onClear,
    onRetry,
    onTogglePaused,
    onReorder,
    onUpdateQuery,
    onSendNow,
  } = props;
  const [draggingId, setDraggingId] = useState<string>();
  const [dragOverId, setDragOverId] = useState<string>();
  const [editingId, setEditingId] = useState<string>();
  const [draftQuery, setDraftQuery] = useState('');
  const listRef = useRef<HTMLDivElement | null>(null);
  const previousListStateRef = useRef({
    length: items.length,
    lastItemId: items[items.length - 1]?.id,
  });
  const prefixCls = useProviderContext().getPrefixCls(
    'chat-anywhere-input-queue',
  );
  const { t } = useTranslation();
  const tr = (key: Parameters<typeof t>[0]) => t?.(key) || key;

  useEffect(() => {
    const editingItem = items.find(item => item.id === editingId);
    if (editingId && (!editingItem || editingItem.status === 'submitting')) {
      setEditingId(undefined);
      setDraftQuery('');
    }
  }, [editingId, items]);

  useEffect(() => {
    const lastItemId = items[items.length - 1]?.id;
    const previousListState = previousListStateRef.current;
    const itemAddedToEnd =
      items.length > previousListState.length &&
      !!lastItemId &&
      lastItemId !== previousListState.lastItemId;

    previousListStateRef.current = {
      length: items.length,
      lastItemId,
    };

    if (!itemAddedToEnd) return;

    const frame = window.requestAnimationFrame(() => {
      const list = listRef.current;
      if (!list || list.scrollHeight <= list.clientHeight) return;
      list.scrollTo({
        top: list.scrollHeight,
        behavior: 'smooth',
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [items]);

  const isNoDragTarget = (target: EventTarget | null) => {
    return target instanceof HTMLElement && !!target.closest('[data-no-drag]');
  };

  const startEdit = (item: QueuedInputItem) => {
    setEditingId(item.id);
    setDraftQuery(item.data.query || '');
  };

  const commitEdit = () => {
    if (!editingId) return;
    onUpdateQuery(editingId, draftQuery);
    setEditingId(undefined);
    setDraftQuery('');
  };

  const cancelEdit = () => {
    setEditingId(undefined);
    setDraftQuery('');
  };

  const clearDragState = () => {
    setDraggingId(undefined);
    setDragOverId(undefined);
  };

  const getFileName = (file: NonNullable<QueuedInputItem['data']['fileList']>[number]) => {
    return file.name || file.response?.name || file.response?.url || file.url || tr('queue.attachmentOnly');
  };

  const getFileUrl = (file: NonNullable<QueuedInputItem['data']['fileList']>[number]) => {
    return file.thumbUrl || file.url || file.response?.url;
  };

  const isImageFile = (file: NonNullable<QueuedInputItem['data']['fileList']>[number]) => {
    return file.type?.startsWith('image/') || /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(getFileName(file));
  };

  if (!items.length) return null;

  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-title`}>
          <span className={`${prefixCls}-pulse`} />
          <span>{tr('queue.title')}</span>
          {!isOwner ? (
            <span className={`${prefixCls}-owner`}>{tr('queue.remoteOwner')}</span>
          ) : null}
          <span className={`${prefixCls}-count`}>{items.length}</span>
        </div>
        {isOwner ? <div className={`${prefixCls}-header-actions`}>
          <Tooltip title={paused ? tr('queue.resume') : tr('queue.pause')}>
            <IconButton
              size="small"
              bordered={false}
              className={`${prefixCls}-clear`}
              icon={paused ? <SparkPlayLine /> : <SparkPauseLine />}
              onClick={onTogglePaused}
            />
          </Tooltip>
          <Tooltip title={tr('queue.clear')}>
            <IconButton
              size="small"
              bordered={false}
              className={`${prefixCls}-clear`}
              icon={<SparkClearLine />}
              onClick={onClear}
            />
          </Tooltip>
        </div> : null}
      </div>
      <div className={`${prefixCls}-list`} ref={listRef}>
        {items.map((item, index) => {
          const failed = item.status === 'failed';
          const submitting = item.status === 'submitting';
          const files = item.data.attachments || item.data.fileList || [];
          const statusText = submitting
            ? tr('queue.sending')
            : failed
              ? tr('queue.failed')
              : index === 0
                ? tr('queue.next')
                : `${index + 1}`;
          const queryText = item.data.query || tr('queue.attachmentOnly');
          const itemClassName = [
            `${prefixCls}-item`,
            index === 0 ? `${prefixCls}-item-next` : '',
            failed ? `${prefixCls}-item-failed` : '',
            submitting ? `${prefixCls}-item-submitting` : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div
              className={[
                itemClassName,
                draggingId === item.id ? `${prefixCls}-item-dragging` : '',
                dragOverId === item.id && draggingId !== item.id
                  ? `${prefixCls}-item-drag-over`
                  : '',
              ].filter(Boolean).join(' ')}
              draggable={!submitting}
              key={item.id}
              onDragStart={(event) => {
                if (submitting || isNoDragTarget(event.target)) {
                  event.preventDefault();
                  return;
                }

                setDraggingId(item.id);
                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData('text/plain', item.id);
              }}
              onDragOver={(event) => {
                if (
                  submitting ||
                  !draggingId ||
                  draggingId === item.id
                )
                  return;
                event.preventDefault();
                event.dataTransfer.dropEffect = 'move';
                setDragOverId(item.id);
              }}
              onDragLeave={() => {
                if (dragOverId === item.id) setDragOverId(undefined);
              }}
              onDrop={(event) => {
                event.preventDefault();
                const sourceId = draggingId || event.dataTransfer.getData('text/plain');
                clearDragState();
                if (sourceId && sourceId !== item.id) {
                  onReorder(sourceId, item.id);
                }
              }}
              onDragEnd={clearDragState}
            >
              <span className={`${prefixCls}-drag-handle`}>
                <SparkDragDotLine />
              </span>
              <span className={`${prefixCls}-index`}>{statusText}</span>
              <div className={`${prefixCls}-content`}>
                {editingId === item.id ? (
                  <input
                    autoFocus
                    className={`${prefixCls}-edit-input`}
                    data-no-drag
                    value={draftQuery}
                    onBlur={commitEdit}
                    onChange={(event) => setDraftQuery(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        commitEdit();
                      }
                      if (event.key === 'Escape') {
                        event.preventDefault();
                        cancelEdit();
                      }
                    }}
                  />
                ) : (
                  <span className={`${prefixCls}-text`} title={queryText}>
                    {queryText}
                  </span>
                )}
                {files.length ? (
                  <span className={`${prefixCls}-files`}>
                    {files.slice(0, 2).map(file => {
                      const name = getFileName(file);
                      const url = getFileUrl(file);
                      return (
                        <span className={`${prefixCls}-file`} key={file.uid || name} title={name}>
                          {isImageFile(file) && url ? (
                            <img alt="" className={`${prefixCls}-file-thumb`} src={url} />
                          ) : (
                            <span className={`${prefixCls}-file-icon`}>#</span>
                          )}
                          <span className={`${prefixCls}-file-name`}>{name}</span>
                        </span>
                      );
                    })}
                    {files.length > 2 ? (
                      <span className={`${prefixCls}-file-more`}>+{files.length - 2}</span>
                    ) : null}
                  </span>
                ) : null}
                {failed ? (
                  <span className={`${prefixCls}-error`}>
                    {item.errorMessage || tr('queue.failed')}
                  </span>
                ) : null}
              </div>
              <div className={`${prefixCls}-actions`} data-no-drag>
                {!submitting ? <Tooltip title={tr('common.edit')}>
                  <IconButton
                    size="small"
                    bordered={false}
                    icon={<SparkEditLine />}
                    onClick={() => startEdit(item)}
                  />
                </Tooltip> : null}
                {isOwner && !submitting ? <Tooltip title={tr('queue.sendNow')}>
                    <IconButton
                      size="small"
                      bordered={false}
                      icon={<SparkSendLine />}
                      onClick={() => onSendNow(item.id)}
                    />
                  </Tooltip> : null}
                {isOwner && failed ? (
                  <Tooltip title={tr('queue.retry')}>
                    <IconButton
                      size="small"
                      bordered={false}
                      icon={<SparkRefreshLine />}
                      onClick={() => onRetry(item.id)}
                    />
                  </Tooltip>
                ) : null}
                {isOwner && !submitting ? <Tooltip title={tr('common.delete')}>
                  <IconButton
                    size="small"
                    bordered={false}
                    icon={<SparkDeleteLine />}
                    onClick={() => onRemove(item.id)}
                  />
                </Tooltip> : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
