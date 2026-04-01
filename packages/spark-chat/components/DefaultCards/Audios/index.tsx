import { Space } from "antd";
import { Audio } from "@agentscope-ai/design";
import { createGlobalStyle } from "antd-style";
import { useProviderContext } from "@agentscope-ai/chat";

export default function Audios(props: { data: { src: string }[] }) {
  const prefixCls = useProviderContext().getPrefixCls('bubble-audio');

  return <Space direction="vertical">
    <Style />
    {props.data.map((audio, index) => (
      <div className={prefixCls} key={index}>
        <Audio src={audio.src} />
      </div>
    ))}
  </Space>
}



const Style = createGlobalStyle`
.${p => p.theme.prefixCls}-bubble-audio {
  background-color: ${p => p.theme.colorBgBase};
  border: 1px solid ${p => p.theme.colorBorderSecondary};
  padding-right: 4px;
  border-radius: ${p => p.theme.borderRadiusLG}px;
}
`