import { createStyles } from "antd-style";

export default function Background({ children }: { children: React.ReactNode }) {
  const { styles } = useStyles();
  return <div className={styles.container}>
    <video src="https://cloud.video.taobao.com/vod/F7ULxg_UaBXJe9XRA2IVhiyjjYRZ10ythvs6iv-yoJg.mp4" autoPlay loop muted playsInline className={styles.video} />
    {children}
  </div>;
}


const useStyles = createStyles(({ token }) => {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: '100%',
      height: '100%',
      padding: 70,
    },
    video: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1,
    },
  };
});