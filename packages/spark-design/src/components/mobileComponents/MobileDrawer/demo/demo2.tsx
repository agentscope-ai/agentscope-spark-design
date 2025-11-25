import React, { useState } from 'react';
import { Button, MobileDrawer, MobileDrawerProps } from '@agentscope-ai/design';
import { Flex } from 'antd';

/**
 * 四个方向按钮展示组件
 * 展示top、bottom、left、right四个按钮的布局
 */
const Demo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<MobileDrawerProps['placement']>('right');

  const showDrawer = (placement: MobileDrawerProps['placement']) => {
    setPlacement(placement);
    setOpen(true);
  };

  return (
    <>
      <Flex vertical gap={35}>
        <Flex justify='center'>
          <Button onClick={() => showDrawer('top')}>top</Button>
        </Flex>
        <Flex gap={120}>
          <Button onClick={() => showDrawer('left')}>left</Button>
          <Button onClick={() => showDrawer('right')}>right</Button>
        </Flex>
        <Flex justify='center'>
          <Button onClick={() => showDrawer('bottom')}>bottom</Button>
        </Flex>
      </Flex>
      <MobileDrawer
        open={open}
        width={640}
        title={placement}
        placement={placement}
        onClose={() => setOpen(false)}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            color: 'var(--sps-color-text-tertiary)',
            border: '1px solid var(--sps-color-border-secondary)',
            height: '100%',
            fontSize: 24,
            background: `repeating-linear-gradient(
              135deg,
              var(--sps-color-border-secondary) 0,
              var(--sps-color-border-secondary) 1px,
              var(--sps-color-bg-base) 1px,
              var(--sps-color-bg-base) 15px
              )`,
          }}
        >
          Content
        </div>
      </MobileDrawer>
    </>
  );
};

export default Demo;
