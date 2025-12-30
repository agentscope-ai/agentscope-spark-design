import React, { useMemo, useRef, useState } from "react";
import { IconButton, Popover } from "@agentscope-ai/design";
import { PlusOutlined } from "@ant-design/icons";
import { useProviderContext } from "@agentscope-ai/chat";
import { Flex, Upload } from "antd";

export default function UploadPopover({
  uploadPropsList
}: {
  uploadPropsList: any[];
}) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('chat-anywhere-sender');
  const [visible, setVisible] = useState(false);
  const uploadRefs = useRef<Array<HTMLDivElement | null>>([]);

  const popoverNodes = useMemo(() => {
    return uploadPropsList.map((item, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            // 触发对应Upload组件的children的click事件
            uploadRefs.current[index]?.click();
            setVisible(false);
          }}
        >
          {item.trigger}
        </div>
      );
    })
  }, [uploadPropsList]);

  const nodes = useMemo(() => {
    return uploadPropsList.map((item, index) => {
      const { trigger, ...rest } = item;
      return (
        <Upload
          key={index}
          {...rest}
        >
          <div ref={(el) => (uploadRefs.current[index] = el)} />
        </Upload>
      )
    });
  }, [uploadPropsList]);

  return (
    <>
      <Popover
        placement='bottomLeft'
        open={visible}
        onOpenChange={setVisible}
        content={<Flex vertical>
          {popoverNodes}
        </Flex>} trigger="click" styles={{ body: { padding: 4 } }}>
        <IconButton
          icon={<PlusOutlined />}
          bordered={false}
        />
      </Popover>
      <div className={`${prefixCls}-upload-hidden-nodes`}>{nodes}</div>
    </>
  )
}