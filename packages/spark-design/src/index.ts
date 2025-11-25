import bailianDarkThemeJson from './antd/themes/bailianDarkTheme.json';
import bailianThemeJson from './antd/themes/bailianTheme.json';
import carbonDarkThemeJson from './antd/themes/carbonDarkTheme.json';
import carbonThemeJson from './antd/themes/carbonTheme.json';
import generateTheme from './antd/themes/generateTheme';
import generateThemeByToken from './antd/themes/generateThemeByToken';

/**
 * 通用组件
 */
export {
  Alert,
  Badge,
  FloatButton,
  InputNumber,
  Progress,
  Radio,
  Select,
  Skeleton,
  type AlertProps,
  type BadgeProps,
  type CollapseProps,
  type DescriptionsProps,
  type FloatButtonProps,
  type InputNumberProps,
  type NotificationArgsProps,
  type PopoverProps,
  type ProgressProps,
  type RadioProps,
  type SelectProps,
  type SkeletonProps,
  type StatisticProps,
  type StepsProps,
  type TableProps,
} from 'antd';
export {
  default as AlertDialog,
  type AlertDialogProps,
} from './components/commonComponents/AlertDialog';
export {
  default as Anchor,
  type AnchorProps,
} from './components/commonComponents/Anchor';
export { default as Avatar } from './components/commonComponents/Avatar';
export {
  default as Breadcrumb,
  type SparkBreadcrumbItem,
  type SparkBreadcrumbProps,
} from './components/commonComponents/Breadcrumb';
export {
  default as Button,
  type SparkButtonProps as ButtonProps,
} from './components/commonComponents/Button';
export {
  default as Card,
  type SparkCardProps as CardProps,
} from './components/commonComponents/Card';
export {
  default as Checkbox,
  type SparkCheckboxProps as CheckboxProps,
} from './components/commonComponents/Checkbox';
export {
  default as CodeBlock,
  langExtensionsMap as CodeBlockLangExtensionsMap,
  type CodeBlockProps,
} from './components/commonComponents/CodeBlock';
export { default as Collapse } from './components/commonComponents/Collapse';
export {
  default as CollapsePanel,
  type CollapsePanelProps,
} from './components/commonComponents/CollapsePanel';
export { default as DatePicker } from './components/commonComponents/DatePicker';
export {
  default as Drawer,
  type SparkDrawerProps as DrawerProps,
} from './components/commonComponents/Drawer';
export {
  default as Dropdown,
  type DropdownProps,
} from './components/commonComponents/Dropdown';
export {
  default as EllipsisTip,
  type EllipsisTipProps,
} from './components/commonComponents/EllipsisTip';
export {
  default as Empty,
  type SparkEmptyProps as EmptyProps,
} from './components/commonComponents/Empty';
export {
  default as Form,
  type SparkFormProps as FormProps,
} from './components/commonComponents/Form';
export {
  default as HelpIcon,
  type HelpIconProps,
} from './components/commonComponents/HelpIcon';
export {
  default as IconButton,
  type SparkIconButtonProps as IconButtonProps,
} from './components/commonComponents/IconButton';
export {
  default as IconFont,
  type SparkIconFontProps as IconFontProps,
} from './components/commonComponents/IconFont';
export {
  default as Image,
  type ImageProps,
} from './components/commonComponents/Image';
export {
  default as Input,
  type SparkInputProps as InputProps,
} from './components/commonComponents/Input';
export { default as message } from './components/commonComponents/Message';
export {
  default as Modal,
  type SparkModalProps as ModalProps,
} from './components/commonComponents/Modal';
export { default as notification } from './components/commonComponents/Notification';
export {
  default as Pagination,
  type SparkPaginationProps as PaginationProps,
} from './components/commonComponents/Pagination';
export {
  default as Popconfirm,
  type SparkPopconfirmProps as PopconfirmProps,
} from './components/commonComponents/Popconfirm';
export { default as Popover } from './components/commonComponents/Popover';
export {
  default as MdEditor,
  default as PromptsEditor,
  type PromptsEditorProps as MdEditorProps,
  type PromptsEditorProps,
} from './components/commonComponents/PromptsEditor';
export {
  default as RadioButton,
  type SparkRadioButtonProps as RadioButtonProps,
} from './components/commonComponents/RadioButton';
export {
  default as Result,
  type SparkResultProps,
} from './components/commonComponents/Result';
export { default as Steps } from './components/commonComponents/Steps';

export { default as SlateEditor } from './components/commonComponents/SlateEditor';
export {
  default as Slider,
  type SliderInputProps,
} from './components/commonComponents/Slider';
export {
  default as Spinner,
  type SparkSpinnerProps,
  type SparkSpinnerProps as SpinnerProps,
} from './components/commonComponents/Spinner';

export { default as Descriptions } from './components/commonComponents/Descriptions';
export { default as SliderSelector } from './components/commonComponents/SliderSelector';
export { default as Statistic } from './components/commonComponents/Statistic';
export {
  default as Switch,
  type SparkSwitchProps as SwitchProps,
} from './components/commonComponents/Switch';
export { default as Table } from './components/commonComponents/Table';
export {
  default as Tabs,
  type SparkTabsProps as TabsProps,
} from './components/commonComponents/Tabs';
export {
  default as Tag,
  type SparkTagProps as TagProps,
} from './components/commonComponents/Tag';
export { default as TimePicker } from './components/commonComponents/TimePicker';
export {
  default as Tooltip,
  type SparkTooltipProps as TooltipProps,
} from './components/commonComponents/Tooltip';
export { default as Upload } from './components/commonComponents/Upload';
export { default as Video } from './components/commonComponents/Video';
export {
  FileCard,
  default as FileIcon,
  type SparkFileCardProps,
  type SparkFileIconProps,
} from './components/commonComponents/FileIcon';

/**
 * 移动端组件
 */
export { 
  default as MobileModal,
  type SparkMobileModalProps as MobileModalProps 
} from './components/mobileComponents/MobileModal';
export { 
  default as MobileDrawer,
  type SparkMobileDrawerProps as MobileDrawerProps 
} from './components/mobileComponents/MobileDrawer';
export { 
  default as MobileAlertDialog,
  type MobileAlertDialogProps 
} from './components/mobileComponents/MobileAlertDialog';


/**
 * hooks
 */
export { default as useGlobalStyle } from './hooks/useGlobalStyle';

/**
 * 其他
 */
export { default as delay } from './libs/delay';
export { safeHtml } from './libs/dom';
export { copy, renderTooltip } from './libs/utils';
export { waitForDom, waitForFunc } from './libs/waitFor';
export {
  default as requestPop,
  type AliyunPopOptions,
  type BaseResponse,
  type RequestOptions,
} from './libs/requestPop';
export {
  default as requestPopSse,
  type SseOptions,
  type SseResponse,
} from './libs/requestPopSse';
export { default as requestSse } from './libs/requestSse';

/**
 * Spark的ConfigProvider
 */
export { default as ConfigProvider } from './components/commonComponents/ConfigProvider';
export { getCommonConfig, setCommonConfig, useCommonConfig } from './config';
export { base64Decoder, base64Encoder, parseJsonSafely } from './libs/string';

/**
 * 主题
 */
const bailianTheme = generateThemeByToken(
  bailianThemeJson as { [key: string]: string | number | boolean },
);
const bailianDarkTheme = generateThemeByToken(
  bailianDarkThemeJson as { [key: string]: string | number | boolean },
  true,
);
const carbonTheme = generateThemeByToken(
  carbonThemeJson as { [key: string]: string | number | boolean },
);
const carbonDarkTheme = generateThemeByToken(
  carbonDarkThemeJson as { [key: string]: string | number | boolean },
  true,
);

export {
  bailianDarkTheme,
  bailianTheme,
  carbonDarkTheme,
  carbonTheme,
  generateTheme,
  generateThemeByToken,
  bailianDarkTheme as purpleDarkTheme,
  bailianTheme as purpleTheme,
};
