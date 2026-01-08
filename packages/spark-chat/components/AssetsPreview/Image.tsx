import { useProviderContext } from "..";
import { IImage } from "./types";
import { Image, ConfigProvider } from 'antd';
import { Locale } from "antd/es/locale";


export default function (props: IImage) {
  const prefixCls = useProviderContext().getPrefixCls('assets-preview-image');

  return <div className={prefixCls} style={{
    aspectRatio: `${props.width}/${props.height}`,
  }}>
    <ConfigProvider
      locale={{
        Image: { preview: '' }
      } as Locale}
    ><Image src={props.src} width={"100%"} height={"100%"} /></ConfigProvider>
  </div>;
}