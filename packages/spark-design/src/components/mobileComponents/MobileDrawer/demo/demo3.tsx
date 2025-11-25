import { Button, MobileDrawer } from '@agentscope-ai/design';
import { useState } from 'react';

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const showDrawer = () => {
    setOpen1(true);
  };
  return (
    <>
      <Button onClick={showDrawer}>
        Open
      </Button>
      <MobileDrawer
        open={open1}
        width={640}
        title="Title1"
        onClose={() => {
          setOpen1(false);
        }}
      >
        <Button onClick={() => setOpen2(true)}>Open</Button>
        <MobileDrawer
          open={open2}
          width={480}
          title="Title2"
          onClose={() => {
            setOpen2(false);
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
      </MobileDrawer>
    </>
  );
};
