import { createContext, useContextSelector } from 'use-context-selector';
import { useMemo, useState, useCallback } from 'react';

export type Locale = 'cn' | 'en';

// Localized copy used by the runtime web UI.
const messages = {
  cn: {
    // Approval
    'approval.title': '人工干预',
    'approval.pending': '请确认是否执行该操作',
    'approval.confirmed': '确认执行任务',
    'approval.canceled': '取消执行任务',
    'approval.cancel': '取消执行',
    'approval.confirm': '确认执行',
    'approval.taskRunning': '当前有正在执行的任务，无法发送新的任务',
    
    // Approval cancel popover
    'cancelPopover.title': '取消原因',
    'cancelPopover.placeholder': '请输入原因，以便大模型做进一步规划',
    'cancelPopover.cancel': '取消',
    'cancelPopover.confirm': '确认',
    'cancelPopover.options.notNeeded': '不需要',
    'cancelPopover.options.poorResult': '效果不理想',
    'cancelPopover.options.tooSlow': '等待时间久',
    'cancelPopover.options.wrongInput': '输入错误',

    // Common
    'common.save': '保存',
    'common.cancel': '取消',
    'common.confirm': '确认',
    'common.delete': '删除',
    'common.edit': '编辑',
    'common.loading': '加载中...',
    'common.saveSuccess': '保存成功',
    'common.saveFailed': '保存失败',

    // Queue
    'queue.title': '待发送队列',
    'queue.clear': '清空队列',
    'queue.retry': '重试发送',
    'queue.failed': '发送失败',
    'queue.sending': '发送中',
    'queue.attachmentOnly': '附件消息',
    'queue.next': '下一条',
    'queue.attachments': '附件',
    'queue.pause': '暂停队列',
    'queue.resume': '继续队列',
    'queue.sendNow': '立即发送',
    'queue.remoteOwner': '由原标签页发送，仅支持编辑和排序',

    // Actions
    'actions.regenerate': '重新生成',

    // User message navigation
    'messageAnchors.title': '导航 ({count})',

    // Message import
    'messageImport.title': 'Sessions 数据导入',
    'messageImport.placeholder': '输入 JSON 数据以覆盖当前 sessions',
    'messageImport.saveToLocalStorage': '保存到 LocalStorage',
  },
  en: {
    // Approval related
    'approval.title': 'Human Intervention',
    'approval.pending': 'Please confirm whether to execute this operation',
    'approval.confirmed': 'Confirmed to execute task',
    'approval.canceled': 'Canceled task execution',
    'approval.cancel': 'Cancel',
    'approval.confirm': 'Confirm',
    'approval.taskRunning': 'A task is currently running, cannot send new task',
    
    // ApprovalCancelPopover related
    'cancelPopover.title': 'Cancel Reason',
    'cancelPopover.placeholder': 'Please enter the reason for better AI planning',
    'cancelPopover.cancel': 'Cancel',
    'cancelPopover.confirm': 'Confirm',
    'cancelPopover.options.notNeeded': 'Not needed',
    'cancelPopover.options.poorResult': 'Poor result',
    'cancelPopover.options.tooSlow': 'Too slow',
    'cancelPopover.options.wrongInput': 'Wrong input',

    // Common
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.loading': 'Loading...',
    'common.saveSuccess': 'Saved successfully',
    'common.saveFailed': 'Failed to save',

    // Queue related
    'queue.title': 'Queued inputs',
    'queue.clear': 'Clear queue',
    'queue.retry': 'Retry',
    'queue.failed': 'Failed to send',
    'queue.sending': 'Sending',
    'queue.attachmentOnly': 'Attachment message',
    'queue.next': 'Next',
    'queue.attachments': 'Attachments',
    'queue.pause': 'Pause queue',
    'queue.resume': 'Resume queue',
    'queue.sendNow': 'Send now',
    'queue.remoteOwner': 'Sent by original tab. Edit and reorder only',

    // Actions related
    'actions.regenerate': 'Regenerate',

    // User message navigation
    'messageAnchors.title': 'Navigation ({count})',

    // MessageImport related
    'messageImport.title': 'Import Sessions Data',
    'messageImport.placeholder': 'Enter JSON data to override current sessions',
    'messageImport.saveToLocalStorage': 'Save to LocalStorage',
  },
};

export type MessageKey = keyof typeof messages.cn;
type Messages = Record<MessageKey, string>;

export interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: MessageKey, params?: Record<string, string | number>) => string;
  messages: Messages;
}

const ChatAnywhereI18nContext = createContext<I18nContextValue | undefined>(undefined);

export function useChatAnywhereI18n<Selected>(selector: (value: I18nContextValue) => Selected): Selected {
  try {
    const context = useContextSelector(ChatAnywhereI18nContext, selector);
    return context;
  } catch (error) {
    return {} as Selected;
  }
}

// Convenience hook for components that only need translation helpers.
export function useTranslation() {
  const t = useChatAnywhereI18n((ctx) => ctx?.t);
  const locale = useChatAnywhereI18n((ctx) => ctx?.locale);
  const setLocale = useChatAnywhereI18n((ctx) => ctx?.setLocale);
  return { t, locale, setLocale };
}

export interface ChatAnywhereI18nContextProviderProps {
  children: React.ReactNode;
  defaultLocale?: Locale;
}

export function ChatAnywhereI18nContextProvider(props: ChatAnywhereI18nContextProviderProps) {
  const { children, defaultLocale = 'en' } = props;
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const t = useCallback((key: MessageKey, params?: Record<string, string | number>): string => {
    let message = messages[locale][key] || key;
    
    // Replace simple placeholders, e.g. t('hello', { name: 'World' }).
    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        message = message.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(value));
      });
    }
    
    return message;
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    setLocale,
    t,
    messages: messages[locale],
  }), [locale, setLocale, t]);

  return (
    <ChatAnywhereI18nContext.Provider value={value}>
      {children}
    </ChatAnywhereI18nContext.Provider>
  );
}

export default ChatAnywhereI18nContext;
