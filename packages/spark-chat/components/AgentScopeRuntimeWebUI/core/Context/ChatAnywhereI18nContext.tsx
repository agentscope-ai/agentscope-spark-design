import { createContext, useContextSelector } from 'use-context-selector';
import { useMemo, useState, useCallback } from 'react';

export type Locale = 'cn' | 'en';

// 国际化文案定义
const messages = {
  cn: {
    // Approval 相关
    'approval.title': '人工干预',
    'approval.pending': '请确认是否执行该操作',
    'approval.confirmed': '确认执行任务',
    'approval.canceled': '取消执行任务',
    'approval.cancel': '取消执行',
    'approval.confirm': '确认执行',
    
    // ApprovalCancelPopover 相关
    'cancelPopover.title': '取消原因',
    'cancelPopover.placeholder': '请输入原因，以便大模型做进一步规划',
    'cancelPopover.cancel': '取消',
    'cancelPopover.confirm': '确认',
    'cancelPopover.options.notNeeded': '不需要',
    'cancelPopover.options.poorResult': '效果不理想',
    'cancelPopover.options.tooSlow': '等待时间久',
    'cancelPopover.options.wrongInput': '输入错误',

    // 通用
    'common.save': '保存',
    'common.cancel': '取消',
    'common.confirm': '确认',
    'common.delete': '删除',
    'common.edit': '编辑',
    'common.loading': '加载中...',
    'common.saveSuccess': '保存成功',
    'common.saveFailed': '保存失败',

    // Actions 相关
    'actions.regenerate': '重新生成',

    // MessageImport 相关
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

    // Actions related
    'actions.regenerate': 'Regenerate',

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

// 便捷 hook：直接获取翻译函数
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
    
    // 支持参数替换，如 t('hello', { name: 'World' }) => "Hello, World"
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
