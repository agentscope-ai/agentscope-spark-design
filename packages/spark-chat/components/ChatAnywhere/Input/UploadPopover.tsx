import { IconButton, Popover } from "@agentscope-ai/design";
import { PlusOutlined } from "@ant-design/icons";
import { useGetState } from "ahooks";
import { Flex } from "antd";
import React from "react";
import { useEffect, useState } from "react";



export default function UploadPopover({
  nodes
}: {
  nodes: React.ReactElement[];
}) {
  const [visible, setVisible, getVisible] = useGetState(false);

  useEffect(() => {
    const close = () => {
      if (getVisible()) {
        setVisible(false);
      }
    };

    document.addEventListener('click', close, true);
    return () => {
      document.removeEventListener('click', close, true);
    }
  }, []);

  return <Popover
    placement='bottomLeft'
    open={visible}
    onOpenChange={setVisible}
    content={<Flex vertical>
      {nodes}
    </Flex>} trigger="click" styles={{ body: { padding: 4 } }}>
    <IconButton
      icon={<PlusOutlined />}
      bordered={false}
    />
  </Popover>
}