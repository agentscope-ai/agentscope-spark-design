import { Flex } from 'antd';
import { TodoList } from "@agentscope-ai/chat";


export default function () {
  return <Flex vertical gap={16}>

    <TodoList
      title="Task List"
      defaultOpen={true}
      list={[
        { title: '1、搜索GPT-5的官方发布信息，确认新特性', status: 'todo' },
        { title: '2、找技术博客和行业分析，获取GPT-5详细技术特性', status: 'todo' },
        { title: '3、交叉验证多个来源信息，确保准确性', status: 'todo' },
        { title: '4、整理信息并生成结构化文本报告', status: 'todo' },
      ]}
    />
    <TodoList
      title="Task List"
      defaultOpen={false}
      list={[
        { title: '1、搜索GPT-5的官方发布信息，确认新特性', status: 'done' },
        { title: '2、找技术博客和行业分析，获取GPT-5详细技术特性', status: 'running' },
        { title: '3、交叉验证多个来源信息，确保准确性', status: 'todo' },
        { title: '4、整理信息并生成结构化文本报告', status: 'todo' },
      ]}
    /></Flex>
}