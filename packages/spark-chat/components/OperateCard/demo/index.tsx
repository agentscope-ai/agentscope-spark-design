import { OperateCard } from '@agentscope-ai/chat';
import { SparkBookLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';


export default function () {

  return <Flex vertical gap={16}>
    <OperateCard header={{
      icon: <SparkBookLine />,
      title: 'OperateCard',
      description: 'OperateCard Description',
    }} />



    <OperateCard header={{
      icon: <SparkBookLine />,
      title: 'OperateCard',
      description: 'OperateCard Description',
    }} body={{
      children: <OperateCard.LineBody>
        <div style={{ marginLeft: 16 }}>
          <div>
            OperateCard Body
          </div>
          <div>
            OperateCard Body
          </div>
        </div>
      </OperateCard.LineBody>,
      defaultOpen: true,
    }} />
  </Flex>
}