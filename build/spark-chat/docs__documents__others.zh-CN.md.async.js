"use strict";(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[8329],{49463:function(t,s,_){_.r(s);var a=_(76311),u=_(93359),c=_(93612),g=_(57415),l=_(63032),d=_(10294),m=_(96057),h=_(76387),k=_(58041),E=_(19482),D=_(36711),P=_(12068),x=_(33456),o=_(58542),i=_(48936),r=_(67294),n=_(38026),e=_(85893);function p(){return(0,e.jsx)(o.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"\u5176\u4ED6",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5176\u4ED6",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5176\u4ED6"]}),(0,e.jsx)("p",{children:n.texts[0].value}),(0,e.jsx)("p",{children:n.texts[1].value}),(0,e.jsxs)("h2",{id:"\u6D41\u89E3\u6790\u5DE5\u5177",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6D41\u89E3\u6790\u5DE5\u5177",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6D41\u89E3\u6790\u5DE5\u5177"]}),(0,e.jsx)(d.Z,{lang:"tsx",children:n.texts[2].value})]})})})})}s.default=p},38026:function(t,s,_){_.r(s),_.d(s,{texts:function(){return a}});const a=[{value:"Alibaba Cloud Spark Chat \u4F5C\u4E3A\u4E00\u4E2A UI \u7C7B\u5E93\u4E0D\u4F1A\u5F3A\u8981\u6C42\u5BF9\u8BDD\u670D\u52A1\u7684\u540E\u7AEF\u4E00\u5B9A\u8981\u5B8C\u5168\u6309\u7167 \u300C\u517C\u5BB9 OpenAI \u6A21\u5F0F\u300D\u6765\u5904\u7406\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u5404\u79CD\u5E38\u89C1\u7684\u5E94\u7528\u5C42\u534F\u8BAE\uFF0C\u6BD4\u5982 HTTP(SSE)\u3001WebSocket \u7B49\uFF0C\u6765\u63A5\u5165 LLM \u5BF9\u8BDD\u670D\u52A1\u3002",paraId:0,tocIndex:0},{value:"\u5728\u8FD9\u4E9B\u5E94\u7528\u5C42\u534F\u8BAE\u4E2D\uFF0C\u6211\u4EEC\u901A\u5E38\u4F1A\u4F7F\u7528 SSE\uFF0C\u56E0\u6B64 Alibaba Cloud Spark Chat \u4E5F\u63D0\u4F9B\u4E86\u5BF9\u5E94\u7684\u5DE5\u5177\u5E2E\u52A9\u5F00\u53D1\u8005\u89E3\u51B3\u901A\u8BAF\u95EE\u9898\u3002",paraId:1,tocIndex:0},{value:`import { Stream } from '@agentscope-ai/chat';

async function request() {
  const response = await fetch();
  // ...
  // .....

  for await (const chunk of Stream({
    readableStream: response.body,
  })) {
    // \u4F60\u7684\u534F\u8BAE
    // \u5728\u6B64\u5904\u66F4\u65B0 UI \u6570\u636E
    console.log(chunk);
  }
}
`,paraId:2,tocIndex:1}]}}]);
