import { WelcomePrompts } from '@agentscope-ai/chat';

export default function () {
  return (
    <WelcomePrompts
      avatar="https://gw.alicdn.com/imgextra/i1/O1CN01n7R7cy1MkE5OYeXV9_!!6000000001472-55-tps-24-24.svg"
      greeting="你好，我是 AgentScope 助手"
      description="我可以帮助你解答各种问题，快来试试吧"
      prompts={[
        '如何快速上手 AgentScope？',
        '帮我生成一段 Python 代码',
        { label: '介绍一下多智能体协作', value: '什么是多智能体协作？它有哪些应用场景？' },
      ]}
      onClick={(query) => console.log('clicked:', query)}
    />
  );
}
