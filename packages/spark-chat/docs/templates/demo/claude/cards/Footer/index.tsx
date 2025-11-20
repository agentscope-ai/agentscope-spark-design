import { SparkCopyLine, SparkReplaceLine, SparkThumbsDownLine, SparkThumbsUpLine } from "@agentscope-ai/icons";
import { DefaultCards } from "@agentscope-ai/chat";

export default function () {
  return <DefaultCards.FooterActions data={[
    {
      icon: <SparkReplaceLine />, label: '', onClick: () => { }
    },
    {
      icon: <SparkCopyLine />, label: '', onClick: () => { }
    },
    {
      icon: <SparkThumbsUpLine />, label: '', onClick: () => { }
    },
    {
      icon: <SparkThumbsDownLine />, label: '', onClick: () => { }
    }
  ]} />
}