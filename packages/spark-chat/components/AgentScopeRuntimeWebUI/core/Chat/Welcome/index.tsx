import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";
import WelcomePrompts from '../../../../WelcomePrompts';

export default function Welcome(props: { onSubmit: (data: { query: string; fileList?: any[] }) => void }) {
  const welcomeOptions = useChatAnywhereOptions(v => v.welcome);

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

  return (
    <WelcomePrompts
      greeting={greeting}
      avatar={avatar}
      description={description}
      prompts={prompts}
      onClick={query => props.onSubmit({ query })}
    />
  );
}
