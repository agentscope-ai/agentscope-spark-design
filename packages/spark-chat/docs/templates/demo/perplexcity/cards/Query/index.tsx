import { Avatar } from '@agentscope-ai/design';
import useStyle from './style';
import { SparkUserLine } from '@agentscope-ai/icons';

export default function (props) {


  const { styles } = useStyle();
  return <div className={styles.container}>
    <Avatar className={styles.avatar} size={32} icon={<SparkUserLine style={{ fontSize: 20 }} />} />

    <div className={styles.content}>
      {props.data.content}
      <div className={styles.hr} />
    </div>
  </div>
}