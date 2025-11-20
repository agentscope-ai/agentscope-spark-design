import { Dropdown } from '@agentscope-ai/design';
import React, { useContext } from 'react';
import useStyle from './styles';
import { SparkDownLine, SparkTrueLine } from '@agentscope-ai/icons';
import { DemoContext } from '../../context/DemoProvider';


const defaultImage =
  'https://gw.alicdn.com/imgextra/i1/O1CN01qYTgPn1Oaj6j7oc14_!!6000000001722-55-tps-24-25.svg';


const MODEL_OPTIONS = [
  {
    value: 'claude-3.5-sonnet',
    label: 'Claude 3.5 Sonnet',

  },
  {
    value: 'claude-4.1-Opus',
    label: 'Claude 4.1 Opus',

  },
];

export default function SimpleModelSelect(props: { size: 'small' | 'large' }) {
  const { size = 'large' } = props;
  const { styles, cx } = useStyle();
  const { demoContext, setDemoContext } = useContext(DemoContext);
  const selectedModel = MODEL_OPTIONS.find((item) => item.value === demoContext.model);

  return (
    <div>
      <Dropdown
        menu={{
          items: MODEL_OPTIONS.map(item => ({
            key: item.value,
            label: <Item {...item} onClick={() => {
              setDemoContext({ model: item.value })
            }} selected={demoContext.model === item.value} />,
          }))
        }}
      >
        <div className={cx(styles.display, styles[size])}>
          <img src={defaultImage} />
          {selectedModel?.label}
          <SparkDownLine />
        </div>
      </Dropdown>
    </div>
  );
}

interface ItemProps {
  value: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}


function Item(props: ItemProps) {
  const { styles } = useStyle();

  return (
    <div onClick={() => props.onClick()} className={styles.item}>
      <div className={styles.itemIcon}>
        <img src={defaultImage} width={14} height={14} />
      </div>


      <div className={styles.itemTitle}>{props.label}</div>
      {props.selected && <SparkTrueLine />}
    </div>
  );
}

