import { Rag } from '@agentscope-ai/chat';

export default function () {
  return <Rag
    subTitle="GPT-5技术博客、行业分析、技术特性"
    list={[
      {
        title: '【文档库】GPT-5 技术博客', content: 'Aliyun Bailianis a product offered by Alibaba Cloud, which is the cloud computing arm of Alibaba Group. Bailian is a high-performance AI development platform designed to help users build, deploy, and manage machine learning models and AI applications more efficiently.', footer: '来源文档：（真）拟定稿。GPT 的制度研究',
        images: [
          'https://gw.alicdn.com/imgextra/i1/O1CN01n7R7cy1MkE5OYeXV9_!!6000000001472-55-tps-24-24.svg',
          'https://gw.alicdn.com/imgextra/i1/O1CN01n7R7cy1MkE5OYeXV9_!!6000000001472-55-tps-24-24.svg',
          'https://gw.alicdn.com/imgextra/i1/O1CN01n7R7cy1MkE5OYeXV9_!!6000000001472-55-tps-24-24.svg',
        ],
      },
      { title: '【文档库】GPT-5 行业分析', content: 'Aliyun Bailianis a product offered by Alibaba Cloud, which is the cloud computing arm of Alibaba Group. Bailian is a high-performance AI development platform designed to help users build, deploy, and manage machine learning models and AI applications more efficiently.', footer: '来源文档：（真）拟定稿。GPT 的制度研究' },
      { title: '【文档库】GPT-5 技术特性', content: 'Aliyun Bailianis a product offered by Alibaba Cloud, which is the cloud computing arm of Alibaba Group. Bailian is a high-performance AI development platform designed to help users build, deploy, and manage machine learning models and AI applications more efficiently.', footer: '来源文档：（真）拟定稿。GPT 的制度研究' },
    ]}
  />
}