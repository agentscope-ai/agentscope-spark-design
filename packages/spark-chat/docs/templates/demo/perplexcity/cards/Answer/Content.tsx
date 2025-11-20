import { Markdown } from "@agentscope-ai/chat";
import Block from "./Block";
import { SparkMessageLine } from "@agentscope-ai/icons";

export default function (props: { content: string, loading: boolean }) {
  console.log(props)
  return <Block
    title="answer"
    icon={<SparkMessageLine />}
  >
    <Markdown cursor={props.loading} content={props.content} baseLineHeight={1.8571428571428572}>
    </Markdown>
  </Block>
}