import { SparkDeepSearchLine, SparkRightArrowLine } from "@agentscope-ai/icons";
import Block from "./Block";
import { createStyles } from "antd-style";

export default function (props: { related: string[] }) {
  const { styles } = useStyle();
  
  return <Block
    title="related"
    icon={<SparkDeepSearchLine />}
  >
    <div className={styles.related}>
      {props.related.map((item, index) => (
        <div className={styles.item} key={index}>
          <SparkRightArrowLine className={styles.icon} />
          {item}
        </div>
      ))}
    </div>
  </Block>
}


const useStyle = createStyles(({ css, token }) => ({
  related: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  item: {
    height: 24,
    gap: 8,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: token.colorTextTertiary,
    '&:hover': {
      color: token.colorText,
    }
  },
  icon: {
    fontSize: 20,
    color: token.colorPrimary,
  },
}));