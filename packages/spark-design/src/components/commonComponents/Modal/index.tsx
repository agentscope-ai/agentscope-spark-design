import { getCommonConfig } from '@/config';
import { CloseOutlined } from '@agentscope-ai/icons-override-antd';
import { Modal, ModalProps } from 'antd';
import classNames from 'classnames';
import { useStyle } from './index.style';

export interface SparkModalProps extends ModalProps {
  /**
   * @description 底部额外内容
   * @descriptionEn footer extra content
   */
  info?: string | React.ReactNode;
  /**
   * @description 是否显示分割线
   * @descriptionEn whether to show divider
   * @default true
   */
  showDivider?: boolean;
}

const SparkModal = (props: SparkModalProps) => {
  const Style = useStyle();
  const { sparkPrefix } = getCommonConfig();
  const { showDivider = true, closable = true, ...restProps } = props;

  const renderFooter = (originNode) => {
    return props.info ? (
      <div className={`${sparkPrefix}-modal-footer-wrapper`}>
        <span className={`${sparkPrefix}-modal-footer-info`}>{props.info}</span>
        <div className={`${sparkPrefix}-modal-footer-origin-node`}>
          {originNode}
        </div>
      </div>
    ) : (
      originNode
    );
  };

  const mergedCloseIcon = closable
    ? props.closeIcon || (
        <CloseOutlined
          className={`${sparkPrefix}-modal-title-close`}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            props.onCancel?.(e);
          }}
        />
      )
    : null;
  const mergedFooter = props.footer === undefined ? renderFooter : props.footer;

  return (
    <>
      <Style />
      <Modal
        {...restProps}
        closeIcon={null}
        title={
          <div className={`${sparkPrefix}-modal-title-wrapper`}>
            <div className={`${sparkPrefix}-modal-title`}>{props.title}</div>
            {mergedCloseIcon}
          </div>
        }
        wrapClassName={classNames(
          `${sparkPrefix}-modal`,
          { [`${sparkPrefix}-show-divider`]: showDivider },
          props.wrapClassName,
          'animate-in',
        )}
        footer={mergedFooter}
        transitionName=""
      />
    </>
  );
};

SparkModal.useModal = Modal.useModal;
SparkModal.success = Modal.success;
SparkModal.error = Modal.error;
SparkModal.warning = Modal.warning;
SparkModal.info = Modal.info;
SparkModal.confirm = Modal.confirm;

SparkModal.SMALL_WIDTH = 640;
SparkModal.MEDIUM_WIDTH = 800;
SparkModal.LARGE_WIDTH = 960;

export default SparkModal;