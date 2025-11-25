import { Button, MobileDrawer } from '@agentscope-ai/design';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Button onClick={showDrawer}>
        Open
      </Button>
      <MobileDrawer
        open={open}
        width={640}
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
