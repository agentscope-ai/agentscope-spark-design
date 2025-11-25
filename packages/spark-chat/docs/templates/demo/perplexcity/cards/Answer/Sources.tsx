import { Markdown } from "@agentscope-ai/chat";
import Block from "./Block";
import { SparkPageSearchLine } from "@agentscope-ai/icons";
import { createStyles } from "antd-style";

interface IItem {
  title: string;
  url: string;
  logo: string,
  content: string,
}

function Item(props: IItem) {
  const { styles } = useStyle();

  return <div className={styles.item}>
    <img className={styles.logo} src={props.logo} />

    <div className={styles.content}>
      <div className={styles.title}>{props.title}</div>
      <a className={styles.url} href={props.url} target="_blank" >{props.url}</a>
    </div>
  </div>
}

export default function (props: { sources: IItem[] }) {
  const { styles } = useStyle();

  return <Block
    title="sources"
    icon={<SparkPageSearchLine />}
  >

    <div className={styles.sources}>
      {
        props.sources.map((item, index) => (
          <div className={styles.source} key={index}>
            <Item  {...item} />
            <Markdown content={item.content} baseLineHeight={1.8571428571428572}>
            </Markdown>
          </div>
        ))
      }
    </div>
  </Block>
}


const useStyle = createStyles(({ css, token }) => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  content: {

  },
  source: {},
  sources: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  title: {
    fontSize: 12,
    lineHeight: '20px',
    color: token.colorText,
  },
  url: {
    fontSize: 12,
    lineHeight: '20px',
    color: token.colorTextTertiary,
    textDecoration: 'none',
    '&:hover': {
      color: token.colorText,
    }
  },
}));