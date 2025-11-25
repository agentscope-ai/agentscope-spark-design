import { Button, MobileModal } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { useState } from 'react';

function Content(props: { border?: boolean; children: React.ReactNode }) {
  const { border = true } = props;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        color: 'var(--sps-color-text-tertiary)',
        border: border ? '1px solid var(--sps-color-border-secondary)' : 'none',
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
      {props.children}
    </div>
  );
}

export default function () {
  const [width, setWidth] = useState(0);

  return (
    <Flex gap={16}>
      <Button onClick={() => setWidth(MobileModal.SMALL_WIDTH)}>Small (640px)</Button>
      <Button onClick={() => setWidth(MobileModal.MEDIUM_WIDTH)}>
        Middle (800px)
      </Button>
      <Button onClick={() => setWidth(MobileModal.LARGE_WIDTH)}>Large (960px)</Button>

      <MobileModal
        centered
        title="Basic Modal"
        open={Boolean(width)}
        width={width}
        onOk={() => setWidth(0)}
        onCancel={() => setWidth(0)}
      >
        <Content>Content here for {width}px</Content>
      </MobileModal>
    </Flex>
  );
}
