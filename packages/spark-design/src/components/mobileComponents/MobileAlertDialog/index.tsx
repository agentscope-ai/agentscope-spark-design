import $i18n from '@/i18n';
import { ModalProps } from '@/index';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Flex, Modal } from 'antd';
import classNames from 'classnames';
import { SyntheticEvent, useEffect } from 'react';
import { getCommonConfig } from '../../../config';
import { useStyle } from './index.style';

export interface MobileAlertDialogProps extends ModalProps {
  /**
   * @description 类型
   * @descriptionEn type
   * @default info
   */
  type?: 'success' | 'info' | 'warning' | 'error' | 'confirm';
  /**
   * @description 确认按钮是否带有danger属性
   * @descriptionEn whether the confirm button has a danger property
   * @default false
   */
  danger?: boolean;
  /**
   * @description 内容
   * @descriptionEn content
   * @default -
   */
  content?: React.ReactNode;
  /**
   * @description 关闭时触发的回调函数
   * @descriptionEn callback function triggered when closed
   * @default -
   */
  onClose?: (e: SyntheticEvent<Element, Event>) => any;
}

const lockBodyScroll = () => {
  const originalStyle = window.getComputedStyle(document.body).overflow;
  const originalPosition = window.getComputedStyle(document.body).position;
  const scrollY = window.scrollY;

  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.top = `-${scrollY}px`;

  // 返回解锁函数
  return () => {
    document.body.style.overflow = originalStyle;
    document.body.style.position = originalPosition;
    document.body.style.width = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
  };
};

const getCommonProps = (props: MobileAlertDialogProps) => {
  const renderTitle = ({ type, title }) => {
    const { antPrefix } = getCommonConfig();

    switch (type) {
      case 'success':
        return (
          <Flex align="center" gap={8} className="leading-[28px]">
            <CheckCircleOutlined
              style={{
                color: `var(--${antPrefix}-color-success)`,
                fontSize: 18,
                margin: '0 3px',
              }}
            />
            {title}
          </Flex>
        );

      case 'warning':
      case 'confirm':
        return (
          <Flex align="center" gap={8} className="leading-[28px]">
            <ExclamationCircleOutlined
              style={{
                color: `var(--${antPrefix}-color-warning)`,
                fontSize: 18,
                margin: '0 3px',
              }}
            />
            {title}
          </Flex>
        );

      case 'info':
        return (
          <Flex align="center" gap={8} className="leading-[28px]">
            <InfoCircleOutlined
              style={{
                color: `var(--${antPrefix}-color-info)`,
                fontSize: 18,
                margin: '0 3px',
              }}
            />
            {title}
          </Flex>
        );

      case 'error':
        return (
          <Flex align="center" gap={8} className="leading-[28px]">
            <CloseCircleOutlined
              style={{
                color: `var(--${antPrefix}-color-error)`,
                fontSize: 18,
                margin: '0 3px',
              }}
            />
            {title}
          </Flex>
        );

      default:
        return $i18n.get({
          id: 'components.commonComponents.AlertDialog.Prompt',
          dm: '提示',
        });
    }
  };

  const {
    children,
    type = 'info',
    danger = false,
    title,
    width = 'auto',
    className = '',
    ...restProps
  } = props;

  return {
    width,
    transitionName: '',
    restProps,
    closeIcon: null,
    title: renderTitle({ type, title }),
    okButtonProps: { danger: type === 'error' || type === 'warning' || danger },
    destroyOnClose: true,
    className: classNames(
      className,
      'animate-in',
      `${getCommonConfig().sparkPrefix}-alert-dialog`,
    ),
    content: props.content || children,
    children: children,
  };
};

const MobileAlertDialog = (props: MobileAlertDialogProps) => {
  const commonProps = getCommonProps(props);
  const Style = useStyle();

  // 移动端：禁止 body 滚动
  useEffect(() => {
    if (props.open) {
      const unlock = lockBodyScroll();
      return unlock;
    }
  }, [props.open]);

  return (
    <>
      <Style />
      <Modal
        width={commonProps.width}
        transitionName=""
        {...commonProps.restProps}
        closeIcon={null}
        title={commonProps.title}
        okButtonProps={commonProps.okButtonProps || {}}
        destroyOnClose={commonProps.destroyOnClose}
        className={commonProps.className}
      >
        {commonProps.content || commonProps.children}
      </Modal>
    </>
  );
};

const staticFns = [
  'success',
  'info',
  'warning',
  'error',
  'confirm',
] as MobileAlertDialogProps['type'][];

type MobileAlertDialogStaticProps = Omit<MobileAlertDialogProps, 'type' | 'open'>;

staticFns.forEach((type) => {
  MobileAlertDialog[type] = (props: MobileAlertDialogStaticProps) => {
    const commonProps = getCommonProps({ ...props, type });
    const unlock = lockBodyScroll();
    
    function Content() {
      const Style = useStyle();
      return (
        <>
          <Style />
          {commonProps.content}
        </>
      );
    }

    // @ts-ignore
    return Modal.confirm({
      ...commonProps,
      ...commonProps.restProps,
      content: <Content />,
      icon: null,
      afterClose: (...args) => {
        unlock();
        if (commonProps.restProps?.afterClose) {
          commonProps.restProps.afterClose(...args);
        }
      },
    });
  };
});

export default MobileAlertDialog as {
  (props: MobileAlertDialogProps): JSX.Element;
  success: (props?: MobileAlertDialogStaticProps) => void;
  info: (props?: MobileAlertDialogStaticProps) => void;
  warning: (props?: MobileAlertDialogStaticProps) => void;
  error: (props?: MobileAlertDialogStaticProps) => void;
  confirm: (props?: MobileAlertDialogStaticProps) => void;
};

