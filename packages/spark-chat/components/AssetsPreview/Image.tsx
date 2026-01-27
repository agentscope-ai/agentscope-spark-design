import { useProviderContext } from "..";
import { IImage } from "./types";
import { Image, ConfigProvider } from 'antd';
import { Locale } from "antd/es/locale";


export default function (props: IImage) {
  const prefixCls = useProviderContext().getPrefixCls('assets-preview-image');
  const { width = 1, height = 1, src } = props;

  return <div className={prefixCls} style={{
    aspectRatio: `${width}/${height}`,
  }}>
    <ConfigProvider
      locale={{
        Image: { preview: '' }
      } as Locale}
    ><Image src={src} width={"100%"} height={"100%"} /></ConfigProvider>
  </div>;
}


export function ImagesContainer(props: { children: React.ReactNode }) {
  return <Image.PreviewGroup>{props.children}</Image.PreviewGroup>
}