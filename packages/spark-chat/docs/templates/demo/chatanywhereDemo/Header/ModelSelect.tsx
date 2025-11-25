import React from "react";
import useStyle from './style';
import { Dropdown, Button } from 'antd';
import { useDemoContext } from '../DemoContext';
import { SparkDownLine } from "@agentscope-ai/icons";

const items = [
  {
    key: 'qwen-turbo',
    label: <Model name="Qwen-Turbo" />
  },
  {
    key: 'qwen-max',
    label: <Model name="Qwen-Max" />
  },
  {
    key: 'qwq-plus',
    label: <Model name="Qwen-QwQ-Plus" />
  },
  {
    key: 'qwen3-32b',
    label: <Model name="Qwen3-32B" />
  },
];

function Model(props: {
  name?: string;
  size?: number;
  arrow?: boolean
}) {
  const { name = '', size = 12, arrow = false } = props;
  const { styles } = useStyle();
  return <div className={styles.model}>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01SdyYTH1Kfz6skC36o_!!6000000001192-2-tps-96-96.png" className={styles.modelLogo} />
    <div className={styles.modelName} style={{ fontSize: size }} >{name}</div>
    {
      arrow && <SparkDownLine />
    }
  </div>
}

export default function () {
  const { demoContext, setDemoContext } = useDemoContext();

  const current = items.find(item => item.key === demoContext.model);

  return <Dropdown
    menu={{
      items,
      selectable: true,
      onSelect: ({ key }) => {
        setDemoContext({
          model: key,
        });
      }
    }}
  >
    <Button type="text" style={{ padding: '0 6px' }}>
      {current?.label ? React.cloneElement(current.label, { size: 16, arrow: true }) : null}
    </Button>
  </Dropdown>
}