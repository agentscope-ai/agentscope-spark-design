import { Button, Input, Popover } from '@agentscope-ai/design';
import { Flex } from 'antd';
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
  tabsContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `,
  tabItem: css`
    padding: 0 8px;
    font-size: 14px;
    color: ${token.colorText};
    cursor: pointer;
    border: 1px solid ${token.colorBorderSecondary};
    background: ${token.colorBgContainer};
    transition: all 0.2s;
    user-select: none;
    border-radius: 4px;
  `,
  tabItemSelected: css`
    color: ${token.colorPrimary};
    border-color: ${token.colorPrimary};
    border: 1px solid ${token.colorPrimary};
    position: relative;
    z-index: 1;
  `,
  textarea: css`
    resize: none;
  `,
  actions: css`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
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

const DEFAULT_OPTIONS = ['不需要', '效果不理想', '等待时间久', '输入错误'];

interface TabSelectProps {
  options: string[];
  onSelect: (value: string) => void;
}

function TabSelect(props: TabSelectProps) {
  const { options, } = props;
  const [value, setValue] = useState<string>();
  const { styles } = useStyles();

  return (
    <div className={styles.tabsContainer}>
      {options.map((option) => (
        <div
          key={option}
          className={`${styles.tabItem} ${value === option ? styles.tabItemSelected : ''}`}
          onClick={() => {
            setValue(option);
            props.onSelect(option);
          }}
        >
          {option}
        </div>
      ))}
    </div>
  );
}

export default function ApprovalCancelPopover(props: ApprovalCancelPopoverProps) {
  const {
    options = DEFAULT_OPTIONS,
    onCancel,
    onConfirm,
    title = '取消原因',
    placeholder = '请输入原因，以便大模型做进一步规划',
  } = props;

  const [open, setOpen] = useState<boolean>(false);

  const { styles } = useStyles();
  const [reason, setReason] = useState<string>('');

  const handleConfirm = () => {
    // const reason = customReason.trim() || selectedOption;
    // onConfirm?.(reason);
  };

  const content = <div className={styles.container}>
    <div className={styles.title}>{title}</div>
    <div className={styles.content}>
      <TabSelect
        options={options}
        onSelect={setReason}
      />
      <Input.TextArea
        className={styles.textarea}
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder={placeholder}
        rows={3}
      />
      <Flex className={styles.actions}>
        <Button size="small" onClick={() => setOpen(false)}>
          取消
        </Button>
        <Button size="small" type="primary" onClick={() => {
          setOpen(false);
        }}>
          确认
        </Button>
      </Flex>
    </div>
  </div>

  return <Popover open={open} onOpenChange={setOpen} trigger="click" content={content}>
    <Button size="small" >取消执行</Button>
  </Popover>
}
