import React, { useEffect, useState } from "react";
import { Drawer, Button, Form, Input, IconButton } from '@agentscope-ai/design';
import { ColorPicker, Flex, Radio } from "antd";
import { useDemoContext } from "../DemoContext";
import { SparkSettingLine } from "@agentscope-ai/icons";


export default function () {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const { getDemoContext, setDemoContext } = useDemoContext();

  useEffect(() => {
    const settingOpen = () => setOpen(true);
    document.addEventListener('settingOpen', settingOpen);
    return () => {
      document.removeEventListener('settingOpen', settingOpen);
    }
  }, [])


  return <>
    <IconButton icon={<SparkSettingLine />} onClick={() => setOpen(true)} />

    <Drawer title="Setting"
      afterOpenChange={() => {
        form.setFieldsValue({
          apikey: getDemoContext().apikey,
        })
      }}

      onClose={() => setOpen(false)} open={open} footer={<Button type="primary" onClick={async () => {
        const values = await form.validateFields();
        setDemoContext({
          apikey: values.apikey,
        })
        setOpen(false);
      }}>Save</Button>}>
      <Form
        form={form}
      >
        <Form.Item name="apikey" label="API Key" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <a target="_blank" href="https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key">How to get apikey? </a>
      </Form>
    </Drawer>
  </>
}


function ThemeInput({ value, onChange }) {
  return <Flex gap={8} align="center">
    <Radio.Group options={[
      { label: 'Carbon', value: 'carbon' },
      { label: 'Purple', value: 'purple' },
    ]} value={value} onChange={e => onChange(e.target.value)} />
    <ColorPicker value={value} onChange={e => {
      return onChange(e.toCssString());
    }} /></Flex>
}