import { Button, MobileDrawer } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { useState } from 'react';

const DrawerConfirm = MobileDrawer.Confirm;

export default () => {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [showDivider, setShowDivider] = useState(true);

  return (
    <Flex vertical gap={24}>
      <Button onClick={() => {
        setShowDivider(false)
        setOpen(true);
      }}>
        No divider
      </Button>
      <Button onClick={() => {
        setShowDivider(true)
        setConfirmOpen(true);
      }}>
        Footer with info
      </Button>
      <MobileDrawer
        open={open}
        width={640}
        showDivider={showDivider}
        title={<>Title</>}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            color: 'var(--sps-color-text-tertiary)',
            border: '1px solid var(--sps-color-border-secondary)',
            height: 312,
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
      <DrawerConfirm
        open={confirmOpen}
        width={640}
        title={<>Title</>}
        onClose={() => {
          setConfirmOpen(false);
        }}
        onOk={() => {
          console.log('onOk');
        }}
        onCancel={() => {
          console.log('onCancel');
          setConfirmOpen(false);
        }}
        info="info here"
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
      </DrawerConfirm>
    </Flex>
  );
};
