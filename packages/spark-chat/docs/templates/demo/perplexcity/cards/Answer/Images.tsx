import { SparkPictureLine } from "@agentscope-ai/icons";
import { createStyles } from "antd-style";
import Block from "./Block";
import { Image } from "antd";

export default function ({ images }: { images: string[] }) {
  const { styles } = useStyle();

  return <Block
    title="images"
    icon={<SparkPictureLine />}
  >
    <div className={styles.images}>

      <Image.PreviewGroup>
        {images.map((image, index) => (
          <Image src={image} key={index} style={{ width: 180.55172413793102, height: 136, borderRadius: 12, overflow: 'hidden' }} />
        ))}
      </Image.PreviewGroup>

    </div>
  </Block>
}


const useStyle = createStyles(({ css, token }) => ({
  images: {
    display: 'flex',
    gap: 12,
    padding: 12,
    overflow: 'auto',
    backgroundColor: token.colorFillSecondary,
    borderRadius: token.borderRadius,

    '&::-webkit-scrollbar': {
      display: 'none',
    },

    '.sps-image-mask': {
      borderRadius: 12
    }
  },

}));