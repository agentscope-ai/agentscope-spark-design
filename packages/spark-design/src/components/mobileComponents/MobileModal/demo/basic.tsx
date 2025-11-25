import { Button, MobileModal } from '@agentscope-ai/design';
import { useState } from 'react';

export default function () {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <MobileModal
        title="Basic Title"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
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
      </MobileModal>
    </>
  );
}
