import React from 'react';

export interface AttachmentContextProps {
  /**
   * @description 是否禁用附件功能，影响所有子组件的交互状态
   * @descriptionEn Whether to disable attachment functionality, affects interaction state of all child components
   */
  disabled?: boolean;
}

export const AttachmentContext = React.createContext<AttachmentContextProps>(null!);
