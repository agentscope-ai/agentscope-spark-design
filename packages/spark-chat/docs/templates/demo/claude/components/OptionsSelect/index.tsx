import { Button, ButtonProps } from '@agentscope-ai/design'
import { DemoContext } from '../../context/DemoProvider'
import { useContext } from 'react'
import { SparkDeepSearchLine, SparkDeepThinkLine } from '@agentscope-ai/icons'
import { createStyles } from 'antd-style'

export default function () {
  const { demoContext, setDemoContext } = useContext(DemoContext)

  return <>
    <OptionButton
      icon={<SparkDeepThinkLine />}
      selected={demoContext.enableThinking}
      onClick={() => setDemoContext({ enableThinking: !demoContext.enableThinking })}>Deep Thinking</OptionButton>
    <OptionButton
      selected={demoContext.enableSearch}
      icon={<SparkDeepSearchLine />}
      onClick={() => setDemoContext({ enableSearch: !demoContext.enableSearch })}>Web Search</OptionButton>
  </>
}

function OptionButton(props: ButtonProps & { selected: boolean }) {
  const { styles, cx } = useStyle();

  return <Button {...props}
    className={
      cx(styles.btn, {
        [styles.selected]: props.selected,
      })
    } />
}

const useStyle = createStyles(({ token }) => {
  return {
    btn: {
      gap: 6,

    },
    selected: {
      color: `${token.colorPrimary} !important`,
      backgroundColor: `${token.colorPrimaryBg} !important`,
      borderColor: `${token.colorPrimaryBg} !important`,
    }
  }
});