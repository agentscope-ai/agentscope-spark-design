import { useContext } from "react";
import { DemoContext } from "../../context/DemoProvider";
import { SparkAiEditLine, SparkCode01Line, SparkEffciencyLine, SparkPaperLine } from "@agentscope-ai/icons";
import { Button } from "@agentscope-ai/design";
import { createStyles } from "antd-style";
import { ChatAnywhereRef } from "@agentscope-ai/chat";
import WebDevPreset from "./WebDevPreset";
import DeepResearchPreset from "./DeepResearchPreset";

const PRESET_OPTIONS = [
  {
    icon: <SparkCode01Line />,
    label: 'Web Development',
    value: 'WebDev',
    type: 'mode',
  },
  {
    icon: <SparkPaperLine />,
    label: 'Deep Research',
    value: 'DeepResearch',
    type: 'mode',
  },
  {
    icon: <SparkAiEditLine />,
    label: 'Write Article',
    value: 'Write Article',
    type: 'quick',
  },

  {
    icon: <SparkEffciencyLine />,
    label: 'Brainstorm',
    value: 'Brainstorm',
    type: 'quick',
  },
]

export default function (props: { onSubmit: (data: { query: string }) => void }) {
  const { demoContext, setDemoContext } = useContext(DemoContext);
  const { styles } = useStyle()

  if (!demoContext.initial) return null;

  const mode = demoContext.mode;

  if (mode === 'WebDev') return <WebDevPreset onSubmit={props.onSubmit} />;
  if (mode === 'DeepResearch') return <DeepResearchPreset onSubmit={props.onSubmit} />;


  return <div className={styles.preset}>
    {PRESET_OPTIONS.map(item => (
      <div key={item.value}>
        <Button icon={item.icon} onClick={() => {
          if (item.type === 'mode') {
            setDemoContext({ mode: item.value })
          } else {
            props.onSubmit({ query: item.value })
          }
        }}>{item.label}</Button>
      </div>
    ))}
  </div>
}


const useStyle = createStyles(({ token }) => {
  return {
    preset: {
      marginTop: 32,
      display: 'flex',
      justifyContent: 'center',
      gap: 12,
    }
  }
})