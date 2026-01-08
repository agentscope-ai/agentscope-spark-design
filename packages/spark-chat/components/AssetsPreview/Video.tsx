import { IVideo } from "./types";
import { useProviderContext } from "..";

export default function Video(props: IVideo) {
  const prefixCls = useProviderContext().getPrefixCls('assets-preview-video');
  const { width, height, ...rest } = props;

  return <div className={prefixCls} style={{
    aspectRatio: `${width}/${height}`,
  }}>
    <video {...rest} controls />
  </div>
}