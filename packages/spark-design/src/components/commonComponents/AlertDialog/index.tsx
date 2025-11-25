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
import { SyntheticEvent } from 'react';
import { getCommonConfig } from '../../../config';
import { useStyle } from './index.style';

export interface AlertDialogProps extends ModalProps {
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

const getCommonProps = (props: AlertDialogProps) => {
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
    width = '400px',
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

const AlertDialog = (props: AlertDialogProps) => {
  const commonProps = getCommonProps(props);
  const Style = useStyle();

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
] as AlertDialogProps['type'][];

type AlertDialogStaticProps = Omit<AlertDialogProps, 'type' | 'open'>;

staticFns.forEach((type) => {
  AlertDialog[type] = (props: AlertDialogStaticProps) => {
    const commonProps = getCommonProps({ ...props, type });

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
    });
  };
});

export default AlertDialog as {
  (props: AlertDialogProps): JSX.Element;
  success: (props?: AlertDialogStaticProps) => void;
  info: (props?: AlertDialogStaticProps) => void;
  warning: (props?: AlertDialogStaticProps) => void;
  error: (props?: AlertDialogStaticProps) => void;
  confirm: (props?: AlertDialogStaticProps) => void;
};

