import { getCommonConfig } from '@/config';
import { SparkCheckCircleLine, SparkErrorCircleLine, SparkInfoLine, SparkWarningCircleLine } from '@agentscope-ai/icons';
import { notification } from 'antd';
import { ArgsProps } from 'antd/es/notification';
import {
  GlobalConfigProps,
  NotificationConfig,
} from 'antd/es/notification/interface';
import useNotification from 'antd/es/notification/useNotification';

export type { ArgsProps };

interface BaseMethods {
  open: (config: ArgsProps) => void;
  destroy: (key?: React.Key) => void;
  config: (config: GlobalConfigProps) => void;
  useNotification: typeof useNotification;
}
type StaticFn = (config: ArgsProps) => void;
interface NoticeMethods {
  success: StaticFn;
  info: StaticFn;
  warning: StaticFn;
  error: StaticFn;
}
type staticMethods = NoticeMethods & BaseMethods;

const types = ['success', 'warning', 'error', 'info'];

function getIcon(type: string, antPrefix: string) {
  if (type === 'success') {
    return (
      <SparkCheckCircleLine
        style={{ color: `var(--${antPrefix}-color-success)`, fontSize: 24 }}
      />
    );
  }
  if (type === 'warning') {
    return (
      <SparkWarningCircleLine
        style={{ color: `var(--${antPrefix}-color-warning)`, fontSize: 24 }}
      />
    );
  }
  if (type === 'info') {
    return (
      <SparkInfoLine
        style={{ color: `var(--${antPrefix}-color-info)`, fontSize: 24 }}
      />
    );
  }
  if (type === 'error') {
    return (
      <SparkErrorCircleLine
        style={{ color: `var(--${antPrefix}-color-error)`, fontSize: 24 }}
      />
    );
  }
}
// @ts-ignore
const sparkNotification: staticMethods = {};
sparkNotification.destroy = notification.destroy;
sparkNotification.open = (props: ArgsProps) => {
  const commonConfig = getCommonConfig();
  const { sparkPrefix } = commonConfig;
  let mergedClassName = `${sparkPrefix}-notification`;
  if (props.className) {
    mergedClassName += ` ${props.className}`;
  }
  notification.open({
    ...props,
    className: mergedClassName,
  });
};
types.forEach((type) => {
  sparkNotification[type] = (props: ArgsProps) => {
    const commonConfig = getCommonConfig();
    const { sparkPrefix, antPrefix } = commonConfig;
    let mergedClassName = `${sparkPrefix}-notification`;
    if (props.className) {
      mergedClassName += ` ${props.className}`;
    }
    notification[type]({
      ...props,
      className: mergedClassName,
      icon: getIcon(type, antPrefix),
    });
  };
});
sparkNotification.useNotification = (props: NotificationConfig) => {
  const commonConfig = getCommonConfig();
  const { sparkPrefix, antPrefix } = commonConfig;
  const baseClassName = `${sparkPrefix}-notification`;
  const [api, contextHolder] = notification.useNotification(props);
  // @ts-ignore
  const newAPi: NotificationInstance = {};
  types.forEach((type) => {
    newAPi[type] = (props: ArgsProps) => {
      return api[type]({
        ...props,
        className: props.className
          ? `${baseClassName} ${props.className}`
          : baseClassName,
        icon: getIcon(type, antPrefix),
      });
    };
  });
  newAPi.open = (props: ArgsProps) => {
    api.open({
      ...props,
      className: props.className
        ? `${baseClassName} ${props.className}`
        : baseClassName,
    });
  };
  newAPi.destroy = api.destroy;
  return [newAPi, contextHolder];
};

export default sparkNotification;
