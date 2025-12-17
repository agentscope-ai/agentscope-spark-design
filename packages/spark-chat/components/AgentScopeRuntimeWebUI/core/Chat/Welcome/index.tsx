import { useProviderContext } from "@agentscope-ai/chat";
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";
import { Avatar } from 'antd';
import Style from './styles';
import { SparkRightArrowLine } from "@agentscope-ai/icons";

export default function Welcome(props: { onSubmit: (data: { query: string; fileList?: any[] }) => void }) {
  const welcomeOptions = useChatAnywhereOptions(v => v.welcome);
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-welcome-default');

  if (!welcomeOptions) return null;

  const { render, ...otherWelcomeOptions } = welcomeOptions;

  if (render) return welcomeOptions.render({
    greeting: welcomeOptions.greeting,
    avatar: welcomeOptions.avatar,
    description: welcomeOptions.description,
    prompts: welcomeOptions.prompts,
    onSubmit: props.onSubmit,
  });


  const { greeting, avatar, prompts, description } = otherWelcomeOptions;

  return <>
    <Style />
    <div className={prefixCls}>
      {
        avatar && <Avatar src={avatar} shape="square" size={64} />
      }
      {
        greeting && <div className={`${prefixCls}-greeting`}>{greeting}</div>
      }
      {
        description && <div className={`${prefixCls}-description`}>{description}</div>
      }
      {
        prompts?.length > 0 && <div className={`${prefixCls}-prompts`}>
          {
            prompts.map(item => {
              const prompt = typeof item === 'string' ? { label: item, value: item } : {
                ...item,
                label: item.label || item.value,
                value: item.value,
              };

              return <Prompt key={prompt.value} prompt={prompt} onSubmit={props.onSubmit} />
            })
          }
        </div>
      }
    </div>
  </>;
}

function Prompt(props: { prompt: { label: string; value: string; icon?: React.ReactElement }, onSubmit: (data: { query: string; fileList?: any[] }) => void }) {
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-welcome-default');

  return <div className={`${prefixCls}-prompt`} onClick={() => props.onSubmit({ query: props.prompt.value })}>
    <img className={`${prefixCls}-prompt-icon`} src="https://img.alicdn.com/imgextra/i3/O1CN01822qqr1PVyaK7MYtn_!!6000000001847-2-tps-40-40.png" alt=""></img>
    <span className={`${prefixCls}-prompt-label`}>
      {props.prompt.label}
    </span>
    <SparkRightArrowLine />
  </div>
}