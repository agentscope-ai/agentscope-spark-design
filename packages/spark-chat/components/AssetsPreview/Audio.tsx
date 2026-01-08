import { IAudio } from "./types";
import { useProviderContext } from "..";


export default function Audio(props: IAudio) {
  const prefixCls = useProviderContext().getPrefixCls('assets-preview-audio');

  return <audio src={props.src} controls className={prefixCls} />;
}