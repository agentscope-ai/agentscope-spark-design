import { Space } from "antd";
import { Video } from '@agentscope-ai/design';
import { createGlobalStyle } from "antd-style";
import { useProviderContext } from '@agentscope-ai/chat';

interface VideosProps {
  data: {
    src: string;
    poster?: string;
  }[];
}

export default function Videos(props: VideosProps) {
  const prefixCls = useProviderContext().getPrefixCls('bubble-video');

  return <>
    <Style />
    <Space>
      {props.data.map((video, index) => (
        <Video className={prefixCls} key={index} src={video.src} poster={video.poster} controls={true} />
      ))}
    </Space>
  </>
}


const Style = createGlobalStyle`
.${p => p.theme.prefixCls}-bubble-video {
  max-width: 256px;
  max-height: 144px;
  border-radius: 8px;
  border: 1px solid ${p => p.theme.colorBorderSecondary};
  overflow: hidden;
}
`