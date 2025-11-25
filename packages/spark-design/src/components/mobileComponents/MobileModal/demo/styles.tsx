import { Button, MobileModal } from '@agentscope-ai/design';
import { Flex } from 'antd';
import { useState } from 'react';

function Content(props: { border?: boolean }) {
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
      Content
    </div>
  );
}

function NoDivider() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>No divider</Button>
      <MobileModal
        centered
        showDivider={false}
        title="Basic Modal"
        open={open}
        onOk={() => setOpen(true)}
        onCancel={() => setOpen(false)}
        styles={{
          body: { paddingTop: 0, paddingBottom: 0 },
        }}
      >
        <Content />
      </MobileModal>
    </>
  );
}
function NoPadding() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>No Padding</Button>
      <MobileModal
        centered
        styles={{
          body: { padding: 0 },
        }}
        title="Basic Modal"
        open={open}
        onOk={() => setOpen(true)}
        onCancel={() => setOpen(false)}
      >
        <Content border={false} />
      </MobileModal>
    </>
  );
}
function CustomFooter() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Custom footer</Button>
      <MobileModal
        centered
        title="Basic Modal"
        open={open}
        onOk={() => setOpen(true)}
        onCancel={() => setOpen(false)}
        footer={<Button>Custom footer</Button>}
      >
        <Content />
      </MobileModal>
    </>
  );
}
function FooterWithInfo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Footer With Info</Button>
      <MobileModal
        centered
        title="Basic Modal"
        open={open}
        onOk={() => setOpen(true)}
        onCancel={() => setOpen(false)}
        info={<div>info here</div>}
      >
        <Content />
      </MobileModal>
    </>
  );
}

export default function () {
  return (
    <Flex vertical gap={24} align="center">
      <NoDivider />
      <NoPadding />
      <CustomFooter />
      <FooterWithInfo />
    </Flex>
  );
}
