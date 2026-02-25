"use strict";(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[471],{18879:function(d,s,a){a.r(s);var r=a(76311),p=a(93359),l=a(93612),u=a(57415),m=a(63032),t=a(10294),g=a(96057),h=a(76387),x=a(58041),C=a(19482),P=a(36711),v=a(12068),k=a(33456),_=a(58542),o=a(48936),i=a(67294),n=a(69014),e=a(85893);function c(){return(0,e.jsx)(_.dY,{children:(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"customcard",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#customcard",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"CustomCard"]}),(0,e.jsx)("p",{children:n.texts[0].value}),(0,e.jsxs)("div",{style:{display:"flex",gap:"32px"},children:[n.texts[1].value,(0,e.jsxs)("div",{children:[n.texts[2].value,(0,e.jsx)("img",{src:"https://gw.alicdn.com/imgextra/i2/O1CN01ylWEJy1vCnk1z86IB_!!6000000006137-2-tps-3200-1800.png"}),n.texts[3].value,(0,e.jsx)("p",{style:{fontSize:"14px"},children:n.texts[4].value}),n.texts[5].value]}),n.texts[6].value,(0,e.jsxs)("div",{children:[n.texts[7].value,(0,e.jsx)("img",{src:"https://gw.alicdn.com/imgextra/i3/O1CN01e76Zm71WmBwzb5P4B_!!6000000002830-2-tps-3200-1800.png"}),n.texts[8].value,(0,e.jsx)("p",{style:{fontSize:"14px"},children:n.texts[9].value}),n.texts[10].value]})]}),(0,e.jsx)("p",{children:n.texts[11].value}),(0,e.jsx)("hr",{}),(0,e.jsxs)("h2",{id:"development-guide",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#development-guide",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Development Guide"]}),(0,e.jsxs)("h3",{id:"create-a-customcard",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#create-a-customcard",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Create a CustomCard"]}),(0,e.jsx)("p",{children:n.texts[12].value}),(0,e.jsx)(t.Z,{lang:"tsx",children:n.texts[13].value}),(0,e.jsx)("div",{height:"32px"}),(0,e.jsx)(t.Z,{lang:"tsx",children:n.texts[14].value}),(0,e.jsxs)("h3",{id:"register-customcard",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#register-customcard",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Register CustomCard"]}),(0,e.jsx)(t.Z,{lang:"tsx",children:n.texts[15].value}),(0,e.jsxs)("h3",{id:"construct-data-and-render",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#construct-data-and-render",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Construct Data and Render"]}),(0,e.jsx)(t.Z,{lang:"tsx",children:n.texts[16].value})]}),(0,e.jsx)(_.Dl,{demo:{id:"docs-documents-custom-card-demo-customcard"},previewerProps:{compact:!0,height:695,filename:"docs/documents/CustomCard/index.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"using-customcard-in-chatanywhere",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#using-customcard-in-chatanywhere",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Using CustomCard in ChatAnywhere"]})}),(0,e.jsx)(_.Dl,{demo:{id:"docs-documents-custom-card-demo-chatanywhere"},previewerProps:{iframe:"695",filename:"docs/documents/CustomCard/chatanywhere.tsx"}})]})})})}s.default=c},69014:function(d,s,a){a.r(s),a.d(s,{texts:function(){return r}});const r=[{value:"In real LLM conversation application development, besides basic text-type (Markdown) answers, there are many rich interactive response effects, such as:",paraId:0,tocIndex:0},{value:`
  `,paraId:1},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:"Even the most natural and smooth conversations cannot eliminate the helplessness and inefficiency when converging user needs through repeated questioning : (",paraId:2,tocIndex:0},{value:`
  `,paraId:1},{value:`
  `,paraId:1},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:"Provide more powerful interactive support at necessary moments in conversations (form input, secondary confirmation, feature guidance...), leveraging the advantages of GUI interaction in structured and efficient information exchange",paraId:3,tocIndex:0},{value:`
  `,paraId:1},{value:"We can use CustomCard to implement similar requirements.",paraId:4,tocIndex:0},{value:"CustomCard is simply a React Component",paraId:5,tocIndex:2},{value:`import React, { useState } from 'react';
import { Button, Card, Select } from '@agentscope-ai/design';
import { Flex } from 'antd';

function SelectPageCard(props: { data: { pages: string[] } }) {
  const [page, setPage] = useState<string>(props.data.pages[0]);
  return (
    <Card title="Please select a page">
      <Flex gap={8}>
        <Select
          value={page}
          onChange={setPage}
          options={props.data.pages.map((page) => ({
            label: page,
            value: page,
          }))}
        />
        <Button>OK</Button>
      </Flex>
    </Card>
  );
}

export default SelectPageCard;
`,paraId:6,tocIndex:2},{value:`// You can also implement more cards
function PagePVChartCard() {...};

export default PagePVChartCard;
`,paraId:7,tocIndex:2},{value:`import { Bubble, CustomCardsProvider } from '@agentscope-ai/chat';
import SelectPageCard from './SelectPageCard';
import PagePVChartCard from './PagePVChartCard';

export default () => (
  <CustomCardsProvider
    cardConfig={{
      SelectPageCard: SelectPageCard,
      PagePVChartCard: PagePVChartCard,
    }}
  ></CustomCardsProvider>
);
`,paraId:8,tocIndex:3},{value:`import { Bubble, CustomCardsProvider } from '@agentscope-ai/chat';
import SelectPageCard from './SelectPageCard';
import PagePVChartCard from './PagePVChartCard';

export default function () {
  return (
    <CustomCardsProvider
      cardConfig={{
        SelectPageCard: SelectPageCard,
        PagePVChartCard: PagePVChartCard,
      }}
    >
      <Bubble.List
        items={[
          {
            id: '0',
            role: 'user',
            content: 'I want to View page PV data',
          },
          {
            id: '1',
            role: 'assistant',
            cards: [
              {
                code: 'SelectPageCard',
                data: {
                  pages: [
                    'https://foo.com/page1',
                    'https://foo.com/page2',
                    'https://foo.com/page3',
                  ],
                },
              },
            ],
          },
          {
            id: '2',
            role: 'assistant',
            cards: [
              {
                code: 'PagePVChartCard',
                data: {
                  page: 'https://foo.com/page1',
                },
              },
            ],
          },
        ]}
      ></Bubble.List>
    </CustomCardsProvider>
  );
}
`,paraId:9,tocIndex:4}]}}]);
