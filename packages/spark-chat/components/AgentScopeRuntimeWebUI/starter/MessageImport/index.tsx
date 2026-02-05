import { SparkFileCodeLine } from "@agentscope-ai/icons";
import { IconButton, Drawer, Input, Button, message } from "@agentscope-ai/design";
import { useState, useEffect } from "react";

const STORAGE_KEY = "agent-scope-runtime-webui-sessions";

export default function (props) {
  const [open, setOpen] = useState(false);
  const [sessionValue, setSessionValue] = useState("");

  useEffect(() => {
    if (open) {
      const storedValue = localStorage.getItem(STORAGE_KEY) || "";
      setSessionValue(storedValue);
    }
  }, [open]);

  const handleSave = () => {
    try {
      localStorage.setItem(STORAGE_KEY, sessionValue);
      message.success("保存成功");
      location.reload();
    } catch (e) {
      message.error("保存失败");
    }
  };

  return <>
    <IconButton onClick={() => setOpen(true)} icon={<SparkFileCodeLine />} bordered={false} />
    <Drawer
      destroyOnHidden
      open={open}
      onClose={() => setOpen(false)}
      title="Sessions 数据导入"
      styles={{ body: { padding: 16 }, header: { padding: 8 } }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Input.TextArea
          value={sessionValue}
          onChange={(e) => setSessionValue(e.target.value)}
          placeholder="输入 JSON 数据以覆盖当前 sessions"
          rows={10}
          style={{ fontFamily: "monospace" }}
        />
        <Button type="primary" onClick={handleSave}>
          保存到 LocalStorage
        </Button>
      </div>
    </Drawer>
  </>
}