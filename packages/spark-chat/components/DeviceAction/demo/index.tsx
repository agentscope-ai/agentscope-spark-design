import { DeviceAction, IDeviceActionProps } from "@agentscope-ai/chat";
import { Flex } from "antd";

const actions = [
  {
    time: "2:00:00",
    action: "Click",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:05",
    action: "Swipe",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:10",
    action: "Type",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:15",
    action: "Back",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:20",
    action: "Home",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:25",
    action: "Done",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:30",
    action: "Wait",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:35",
    action: "call_user",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:40",
    action: "click",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:45",
    action: "right click",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:50",
    action: "open app",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:55",
    action: "computer_double_click",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:00",
    action: "hotkey",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:05",
    action: "presskey",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:10",
    action: "scroll",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:15",
    action: "drag",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:20",
    action: "type_with_clear_enter_pos",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:25",
    action: "triple_click",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:30",
    action: "drag_end",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:35",
    action: "type",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:40",
    action: "hscroll",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:45",
    action: "done",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:50",
    action: "wait",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },

]

export default function () {
  return <Flex gap={16} vertical>
    {
      actions.map((item, index) => {
        return <DeviceAction key={index} {...item} description={`description for ${item.action}...`} action={item.action as IDeviceActionProps['action']} />
      })
    }

  </Flex>
}