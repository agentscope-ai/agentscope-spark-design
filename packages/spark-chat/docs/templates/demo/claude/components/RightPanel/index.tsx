import { ReactNode, useContext, useEffect } from "react"
import useStyle from "./style"
import { DemoContext } from "../../context/DemoProvider";
import { IconButton } from "@agentscope-ai/design";
import { SparkFalseLine } from "@agentscope-ai/icons";

export default function RightPanel(props: { header: ReactNode, content: ReactNode }) {
  const { styles } = useStyle();
  const { demoContext, setDemoContext, getDemoContext } = useContext(DemoContext)
  const { header, content } = props;

  useEffect(() => {
    setDemoContext({ canvas: true });
    return () => {
      setDemoContext({ canvas: false });
    }
  }, []);

  return <div className={styles.rightPanel}>
    {header}
    {content}
  </div>
}

export const RightPanelContent = (props: { children: ReactNode }) => {
  const { styles } = useStyle();
  return <div className={styles.content}>
    {props.children}
  </div>
}

export const RightPanelHeader = (props: { title: string, actions: ReactNode }) => {
  const { demoContext, setDemoContext, getDemoContext } = useContext(DemoContext)
  const { styles } = useStyle();
  return <div className={styles.header}>
    <div className={styles.headerLeft}>
      <IconButton bordered={false} icon={<SparkFalseLine />} onClick={() => {
        setDemoContext({ canvas: false });
      }} />
      <span className={styles.title}>{props.title}</span>
    </div>
    <div className={styles.headerRight}>
      {props.actions}

    </div>

  </div>
}

export const useRightPanel = () => { }

export const RightPanelPortal = () => {
  return <div id="right-panel" style={{ flex: 1, width: 0 }}>

  </div>
} 