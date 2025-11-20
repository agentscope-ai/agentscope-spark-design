import { ImageGenerator } from '@agentscope-ai/chat';
import { Flex } from 'antd';
import { createStyles } from 'antd-style';


const useStyles = createStyles(({ token }) => {
  return {
    skeleton: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bg: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '200%',
      height: '200%',
      transform: 'translate(-50%, -50%) rotate(0deg)',
      objectFit: 'cover',
    },
    icon: {
      width: 64,
      height: 64,
      zIndex: 1,
    }
  };
});

export default function () {
  const { styles } = useStyles();
  return <Flex vertical gap="middle">
    <ImageGenerator

      skeleton={<div className={styles.skeleton} style={{ width: 320, height: 320 }}>
        <img
          className={styles.bg}
          src="https://img.alicdn.com/imgextra/i2/O1CN01j5MC6r1scV7D2cNYt_!!6000000005787-2-tps-1366-1354.png"
          alt=""
        />

        <img
          className={styles.icon}
          src="https://img.alicdn.com/imgextra/i2/O1CN01tLbrX11xwGHaPhX0F_!!6000000006507-54-tps-500-500.apng"
        />


      </div>}
    />


  </Flex>
}