import $i18n from '@/i18n';
import { SparkKeyboardLine } from '@agentscope-ai/icons';
import { Popover, Tooltip } from 'antd';
import React, { memo, useState } from 'react';
import ShortKeyContent from './short-key-content';

export default memo(function ShortKeyBtn() {
  const [showTip, setShowTip] = useState(false);
  return (
    <Popover
      placement="top"
      arrow={false}
      destroyTooltipOnHide
      open={showTip}
      onOpenChange={setShowTip}
      content={<ShortKeyContent />}
      trigger="click"
      getPopupContainer={(ele) => ele}
    >
      <Tooltip
        title={$i18n.get({
          id: 'spark-flow.components.FlowTools.ShortKeyBtn.shortcutKeys',
          dm: '快捷键',
        })}
      >
        <div className="spark-flow-tool-icon-btn size-[32px] flex-center">
          <SparkKeyboardLine className="text-[20px]" />
        </div>
      </Tooltip>
    </Popover>
  );
});
