import { createStyles } from 'antd-style';
import { useEffect, useState } from 'react';

export default function (props: { icon: React.ReactNode, title: string, children: React.ReactNode }) {
  const { styles } = useStyle();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  
  return <div className={styles.block} style={{ opacity }}>
    <div className={styles.header} data-anchor={props.title}>
      <div className={styles.icon}>{props.icon}</div>
      <div className={styles.title}>{props.title}</div>
    </div>

    <div className={styles.content}>
      {props.children}
    </div>
  </div>
}

const useStyle = createStyles(({ css, token }) => ({
  block: {
    marginTop: 24,
    marginBottom: 48,
    transition: 'opacity 1s ease-in-out',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: token.colorText,
    marginBottom: 12,
  },
  icon: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
  content: {

  },
}));