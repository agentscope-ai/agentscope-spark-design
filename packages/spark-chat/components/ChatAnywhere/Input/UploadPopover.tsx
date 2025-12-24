import { IconButton, Popover } from "@agentscope-ai/design";
import { PlusOutlined } from "@ant-design/icons";
import { useGetState } from "ahooks";
<<<<<<< HEAD
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
=======
import { Flex, Upload } from "antd";
import React, { useMemo } from "react";
import { useEffect, useState } from "react";

export default function UploadPopover({
  uploadPropsList
}: {
  uploadPropsList: any[];
}) {
  const [visible, setVisible, getVisible] = useGetState(false);

  const nodes = useMemo(() => {
    return uploadPropsList.map((item, index) => {
      return (
        <Upload
          key={index}
          {...item}
          customRequest={(v) => {
            if (item.customRequest) {
              item.customRequest(v);
            }
            setVisible(false);
          }}
        />
      )
    });
  }, [uploadPropsList]);
>>>>>>> eacff377311ccd6cdc8f07daffd8d859e4fc1670

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