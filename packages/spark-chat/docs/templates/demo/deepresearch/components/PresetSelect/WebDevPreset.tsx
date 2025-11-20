import { SparkUpperrightArrowLine } from "@agentscope-ai/icons"
import { createStyles } from "antd-style"


const WEB_DEV_PRESET_OPTIONS = [
  {
    prompt: 'write a landing page for a fruit shop',
    image: 'https://gw.alicdn.com/imgextra/i1/O1CN01ObcQyY1vyQveMjl76_!!6000000006241-55-tps-390-200.svg',

  },
  {
    prompt: 'write a portfolio website',
    image: 'https://gw.alicdn.com/imgextra/i2/O1CN01NciUQw1tzgmhPLmfF_!!6000000005973-55-tps-390-200.svg',
  }
]

export default function (props: { onSubmit: (data: { query: string }) => void }) {
  const { styles } = useStyle()

  return <div className={styles.preset}>
    {WEB_DEV_PRESET_OPTIONS.map(item => (
      <div key={item.prompt} className={styles.presetItem} onClick={() => props.onSubmit({ query: item.prompt })}>
        <img src={item.image} alt={item.prompt} />
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
      cursor: pointer;
      overflow: hidden;
      &:hover {
        border-color: ${token.colorPrimary};

        .${content} {
          opacity: 1;
        }
      }
    `,
    content,
    title: css`
      font-size: 14px;
      color: ${token.colorText};
    `,
  }
})