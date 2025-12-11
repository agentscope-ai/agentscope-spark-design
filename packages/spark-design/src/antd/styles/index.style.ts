import createGlobalStyle from '@/libs/createStyle';
import React from 'react';

// 导入各个组件的样式
import { useAlertStyle } from './alert.style';
import { useBreadcrumbStyle } from './breadcrumb.style';
import { useButtonStyle } from './button.style';
import { useDropdownStyle } from './dropdown.style';
import { useFloatButtonStyle } from './floatButton.style';
import { useInputNumberStyle } from './inputNumber.style';
import { useMessageStyle } from './message.style';
import { useNotificationStyle } from './notification.style';
import { usePopoverStyle } from './popover.style';
import { useRadioStyle } from './radio.style';
import { useSegmentStyle } from './segment.style';
import { useSelectStyle } from './select.style';
import { useSliderStyle } from './slider.style';
import { useTableStyle } from './table.style';
import { useTooltipStyle } from './tooltip.style';
import { useTreeStyle } from './tree.style';

// 基础动画样式
const useBaseStyle = createGlobalStyle`
  /* 定义动画关键帧 */
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(32px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* animate-in 动画类 */
  .animate-in {
    opacity: 0;
    transform: translateY(32px);
    animation: fadeInUp 0.4s ease forwards;
  }
`;

// 组合所有样式的 Hook
export const useIndexStyle = () => {
  // 获取所有组件样式
  const BaseStyle = useBaseStyle();
  const AlertStyle = useAlertStyle();
  const BreadcrumbStyle = useBreadcrumbStyle();
  const ButtonStyle = useButtonStyle();
  const DropdownStyle = useDropdownStyle();
  const FloatButtonStyle = useFloatButtonStyle();
  const InputNumberStyle = useInputNumberStyle();
  const MessageStyle = useMessageStyle();
  const NotificationStyle = useNotificationStyle();
  const PopoverStyle = usePopoverStyle();
  const RadioStyle = useRadioStyle();
  const SegmentStyle = useSegmentStyle();
  const SelectStyle = useSelectStyle();
  const SliderStyle = useSliderStyle();
  const TableStyle = useTableStyle();
  const TooltipStyle = useTooltipStyle();
  const TreeStyle = useTreeStyle();

  // 返回组合组件
  return function IndexStyleComponent() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(BaseStyle),
      React.createElement(AlertStyle),
      React.createElement(BreadcrumbStyle),
      React.createElement(ButtonStyle),
      React.createElement(DropdownStyle),
      React.createElement(FloatButtonStyle),
      React.createElement(InputNumberStyle),
      React.createElement(MessageStyle),
      React.createElement(NotificationStyle),
      React.createElement(PopoverStyle),
      React.createElement(RadioStyle),
      React.createElement(SegmentStyle),
      React.createElement(SelectStyle),
      React.createElement(SliderStyle),
      React.createElement(TableStyle),
      React.createElement(TooltipStyle),
      React.createElement(TreeStyle),
    );
  };
};

// 默认导出
export default useIndexStyle;
