import { Cascader } from '@agentscope-ai/design';
import { Flex } from 'antd';

interface Option {
  value: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          { value: 'xihu', label: 'West Lake' },
          { value: 'xiaoshan', label: 'Xiaoshan' },
        ],
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        children: [{ value: 'dongqian', label: 'Dongqian Lake' }],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [{ value: 'zhonghuamen', label: 'Zhong Hua Gate' }],
      },
    ],
  },
];

const handleChange = (value: string[]) => {
  console.log(value);
};

const App: React.FC = () => (
  <Flex vertical gap="middle" align="center" justify="center">
    <Cascader
      options={options}
      onChange={handleChange}
      placeholder="Please select"
      style={{ width: 240 }}
    />

    <Cascader
      options={options}
      defaultValue={['zhejiang', 'hangzhou', 'xihu']}
      disabled
      style={{ width: 240 }}
    />

    <Cascader
      options={options}
      onChange={handleChange}
      status="error"
      placeholder="Error status"
      style={{ width: 240 }}
    />
  </Flex>
);

export default App;
