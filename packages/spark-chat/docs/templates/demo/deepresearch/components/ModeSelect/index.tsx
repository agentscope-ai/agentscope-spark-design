import { SparkCode01Fill, SparkCode01Line, SparkPaperLine } from "@agentscope-ai/icons";
import { ChatInput } from "@agentscope-ai/chat";
import { useContext } from "react";
import { DemoContext } from "../../context/DemoProvider";

export default function () {
  const { demoContext, setDemoContext } = useContext(DemoContext);
  if (demoContext.initial && !demoContext.mode) return null;

  return <ChatInput.ModeSelect options={[
    {
      icon: <SparkCode01Line />,
      label: 'Web Development',
      value: 'WebDev',
    },
    {
      icon: <SparkPaperLine />,
      label: 'Deep Research',
      value: 'DeepResearch',
    },
  ]}
    value={demoContext.mode}
    onChange={mode => setDemoContext({ mode })}
  />
}