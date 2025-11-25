import { Button, MobileDrawer } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(640);

  const showDrawer = (width: number) => {
    setWidth(width);
    setOpen(true);
  };
  return (
    <Flex gap={16}>
      <Button onClick={() => showDrawer(480)}>
        XS (480px)
      </Button>
      <Button onClick={() => showDrawer(640)}>
        Small (640px)
      </Button>
      <Button onClick={() => showDrawer(800)}>
        Medium (800px)
      </Button>
      <Button onClick={() => showDrawer(960)}>
        Large (960px)
      </Button>
      <MobileDrawer
        open={open}
        width={width}
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
    </Flex>
  );
};
