import { IconButton, Popover } from "@agentscope-ai/design";
import { PlusOutlined } from "@ant-design/icons";
import { useGetState } from "ahooks";
import { Flex, Upload } from "antd";
import { useMemo } from "react";

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