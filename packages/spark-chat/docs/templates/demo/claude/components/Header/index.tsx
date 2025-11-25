import useStyle from './style';
import ModelSelect from '../ModelSelect';
import { IconButton } from '@agentscope-ai/design';
import { useContext } from 'react';
import { SparkClearLine, SparkMoonLine, SparkReplaceLine, SparkSunLine } from '@agentscope-ai/icons';
import { ConfigProviderContext } from '../../context/ConfigProvider';
import { ChatAnywhereRef } from '@agentscope-ai/chat';
import { Flex } from 'antd';

export default function (props: { chat: { current: ChatAnywhereRef } }) {
  const { styles } = useStyle();

  const { dark, setDark } = useContext(ConfigProviderContext);

  return <div className={styles.header}>
    <ModelSelect size='small' />
    <Flex gap={8}>
      <IconButton
        bordered={false}
        onClick={() => props.chat.current.removeAllMessages()}
        icon={<SparkClearLine />}
      />
      {/* <IconButton
        bordered={false}
        onClick={() => setDark(!dark)}
        icon={!dark ? <SparkSunLine /> : <SparkMoonLine />}
      /> */}
    </Flex>
  </div>
}