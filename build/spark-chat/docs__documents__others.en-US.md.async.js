"use strict";(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[3976],{55308:function(o,s,_){_.r(s);var n=_(76311),p=_(93359),l=_(93612),g=_(57415),u=_(63032),t=_(10294),m=_(96057),h=_(76387),k=_(58041),E=_(19482),P=_(36711),x=_(12068),D=_(33456),r=_(58542),d=_(48936),i=_(67294),a=_(71987),e=_(85893);function c(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"others",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#others",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Others"]}),(0,e.jsx)("p",{children:a.texts[0].value}),(0,e.jsx)("p",{children:a.texts[1].value}),(0,e.jsxs)("h2",{id:"stream-parsing-tool",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#stream-parsing-tool",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Stream Parsing Tool"]}),(0,e.jsx)(t.Z,{lang:"tsx",children:a.texts[2].value})]})})})})}s.default=c},71987:function(o,s,_){_.r(s),_.d(s,{texts:function(){return n}});const n=[{value:'As a UI library, Alibaba Cloud Spark Chat does not strictly require the conversation service backend to fully follow "OpenAI-compatible mode". You can use various common application layer protocols, such as HTTP (SSE), WebSocket, etc., to connect to LLM conversation services.',paraId:0,tocIndex:0},{value:"Among these application layer protocols, we typically use SSE. Therefore, Alibaba Cloud Spark Chat also provides corresponding tools to help developers solve communication problems.",paraId:1,tocIndex:0},{value:`import { Stream } from '@agentscope-ai/chat';

async function request() {
  const response = await fetch();
  // ...
  // .....

  for await (const chunk of Stream({
    readableStream: response.body,
  })) {
    // Your protocol
    // Update UI data here
    console.log(chunk);
  }
}
`,paraId:2,tocIndex:1}]}}]);
