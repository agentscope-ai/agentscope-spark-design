import { Button, Input } from '@agentscope-ai/design';
import { Flex, Segmented } from 'antd';
import { useState } from 'react';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    width: 386px;
  `,
  title: css`
    font-size: 14px;
    font-weight: 500;
    color: ${token.colorText};
    margin-bottom: 16px;
  `,
  content: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  segmented: css`
    .ant-segmented-item {
      min-width: auto;
    }
  `,
  textarea: css`
    resize: none;
  `,
  actions: css`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 8px;
  `,
}));

export interface ApprovalCancelPopoverProps {
  /**
   * @description 预设的取消原因选项
   * @descriptionEn Preset cancel reason options
   */
  options?: string[];
  /**
   * @description 取消回调
   * @descriptionEn Cancel callback
   */
  onCancel?: () => void;
  /**
   * @description 确认回调
   * @descriptionEn Confirm callback
   */
  onConfirm?: (reason: string) => void;
  /**
   * @description 标题
   * @descriptionEn Title
   * @default '取消原因'
   */
  title?: string;
  /**
   * @description 文本框占位符
   * @descriptionEn Textarea placeholder
   * @default '请输入原因，以便大模型做进一步规划'
   */
  placeholder?: string;
}

const DEFAULT_OPTIONS = ['不需要', '有风险', '太慢了', '其他'];

export default function ApprovalCancelPopover(props: ApprovalCancelPopoverProps) {
  const {
    options = DEFAULT_OPTIONS,
    onCancel,
    onConfirm,
    title = '取消原因',
    placeholder = '请输入原因，以便大模型做进一步规划',
  } = props;

  const { styles } = useStyles();
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const [customReason, setCustomReason] = useState('');

  const handleConfirm = () => {
    const reason = customReason.trim() || selectedOption;
    onConfirm?.(reason);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <Segmented
          className={styles.segmented}
          size="small"
          options={options}
          value={selectedOption}
          onChange={(value) => setSelectedOption(value as string)}
        />
        <Input.TextArea
          className={styles.textarea}
          value={customReason}
          onChange={(e) => setCustomReason(e.target.value)}
          placeholder={placeholder}
          rows={3}
        />
        <Flex className={styles.actions}>
          <Button size="small" onClick={onCancel}>
            取消
          </Button>
          <Button size="small" type="primary" onClick={handleConfirm}>
            确认
          </Button>
        </Flex>
      </div>
    </div>
  );
}
