import React from 'react';
import { Accordion } from '@agentscope-ai/chat';
import { Flex } from 'antd'
import { SparkDeepSearchLine, SparkCheckCircleLine } from '@agentscope-ai/icons'
const App = () => <>
  <Flex gap={32} vertical>
    <Accordion
      status="generating"
      icon={<SparkDeepSearchLine />}
      title={<Accordion.SoftLightTitle>Searching from 10 pages</Accordion.SoftLightTitle>}

      steps={[{
        icon: <SparkCheckCircleLine />,
        title: 'File analysis',
      }, {
        icon: <SparkCheckCircleLine />,
        title: 'Url analysis',
      }]}
    >
    </Accordion>

    <Accordion
      defaultOpen
      status="finished"
      icon={<SparkDeepSearchLine />}
      title={"Searching from 10 pages"}
      steps={[{
        icon: <SparkCheckCircleLine />,
        title: 'File analysis',
      }, {
        icon: <SparkCheckCircleLine />,
        title: 'Url analysis',
      }]}
    >
    </Accordion>
  </Flex>
</>;

export default App;
