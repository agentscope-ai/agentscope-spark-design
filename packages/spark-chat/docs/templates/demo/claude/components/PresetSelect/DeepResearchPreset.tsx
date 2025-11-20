import { SparkUpperrightArrowLine } from "@agentscope-ai/icons"
import { Skeleton } from "antd"
import { createStyles } from "antd-style"


const OPTIONS = [
  {
    prompt: 'deep research on the topic of city pop',
  },
  {
    prompt: 'deep research on the topic of city pop',
  },
  {
    prompt: 'deep research on the topic of city pop',
  },
]

export default function (props: { onSubmit: (data: { query: string }) => void }) {
  const { styles } = useStyle()

  return <div className={styles.preset}>
    {OPTIONS.map(item => (
      <div key={item.prompt} className={styles.presetItem} onClick={() => props.onSubmit({ query: item.prompt })}>
        <div className={styles.children}>
          <img width={24} height={24} src="https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg" />
          <div className={styles.prompt}>{item.prompt}</div>
          <div className={styles.skeletonContainer}>
            <div className={styles.skeletonLine} />
            <div className={styles.skeletonLine} />
            <div className={styles.skeletonShortLine} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{item.prompt}</div>
          <SparkUpperrightArrowLine />
        </div>
      </div>
    ))}
  </div>
}

const useStyle = createStyles(({ token, css, cx }) => {
  const content = cx(css`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${token.colorBgBase};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 48px;
    padding: 0 12px;
    border-top: 1px solid ${token.colorBorderSecondary};
    opacity: 0;
    transition: all 0.3s ease;
  `);


  return {
    preset: {
      marginTop: 32,
      display: 'flex',
      justifyContent: 'center',
      gap: 12,
    },
    presetItem: css`
      position: relative;
      display: flex;
      border: 1px solid ${token.colorBorderSecondary};
      border-radius: 8px;
      height: 200px;
      flex: 1;
      cursor: pointer;
      overflow: hidden;
      padding: 24px;
      background-color: ${token.colorFillTertiary};
      &:hover {
        border-color: ${token.colorPrimary};

        .${content} {
          opacity: 1;
        }
      }
    `,
    children: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      height: '100%',
      width: '100%',
      backgroundColor: token.colorBgBase,
      borderRadius: 8,
      padding: '20px 12px',
    },
    prompt: css`
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
      color: ${token.colorText};
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    `,
    content,
    title: css`
      font-size: 14px;
      color: ${token.colorText};
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `,
    skeletonContainer: css`
      display: flex;
      flex-direction: column;
      gap: 8px;
    `,
    skeletonLine: css`
      width: 100%;
      height: 8px;
      background-color: ${token.colorFillTertiary};
      border-radius: 99px;
    `,
    skeletonShortLine: css`
      width: 50%;
      height: 8px;
      background-color: ${token.colorFillTertiary};
      border-radius: 99px;
    `,
  }
})