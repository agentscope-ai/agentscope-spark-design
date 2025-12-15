"use strict";(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[3976],{55308:function(p,n,_){_.r(n);var o=_(76311),i=_(93359),u=_(93612),s=_(57415),m=_(63032),r=_(10294),a=_(96057),c=_(76387),t=_(58041),h=_(19482),d=_(36711),g=_(12068),M=_(33456),P=_(50),k=_(58542),E=_(48936),x=_(67294),l=_(71987),e=_(85893);function D(){return(0,e.jsx)(k.dY,{children:(0,e.jsx)(x.Suspense,{fallback:(0,e.jsx)(E.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"others",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#others",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Others"]}),(0,e.jsx)("p",{children:l.texts[0].value}),(0,e.jsx)("p",{children:l.texts[1].value}),(0,e.jsxs)("h2",{id:"stream-parsing-tool",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#stream-parsing-tool",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Stream Parsing Tool"]}),(0,e.jsx)(r.Z,{lang:"tsx",children:l.texts[2].value})]})})})})}n.default=D},50:function(p,n,_){var o=_(58542),i=_(2487),u=_(9053),s=_(85893),m=(0,u.kc)(function(r){var a=r.token;return{list:{display:"flex",gap:a.marginMD},title:{color:a.colorText,transition:"color 0.3s ease","&:hover":{color:a.colorTextSecondary,textDecoration:"underline"}}}});n.Z=function(){var r=(0,o.tx)(),a=m(),c=a.styles;return(0,s.jsx)("div",{className:c.list,children:r.filter(function(t){return t.title}).map(function(t){return(0,s.jsx)(i.Z,{style:{flex:1},header:(0,s.jsx)("h3",{children:t.title}),itemLayout:"horizontal",dataSource:t.children,renderItem:function(d,g){return(0,s.jsx)(i.Z.Item,{children:(0,s.jsx)(o.rU,{to:d.link,style:{display:"block",width:"100%"},children:(0,s.jsx)(i.Z.Item.Meta,{title:(0,s.jsx)("div",{className:c.title,children:d.title}),description:d.frontmatter.description})})},g)}},t.title)})})}},71987:function(p,n,_){_.r(n),_.d(n,{texts:function(){return o}});const o=[{value:'As a UI library, Alibaba Cloud Spark Chat does not strictly require the conversation service backend to fully follow "OpenAI-compatible mode". You can use various common application layer protocols, such as HTTP (SSE), WebSocket, etc., to connect to LLM conversation services.',paraId:0,tocIndex:0},{value:"Among these application layer protocols, we typically use SSE. Therefore, Alibaba Cloud Spark Chat also provides corresponding tools to help developers solve communication problems.",paraId:1,tocIndex:0},{value:`import { Stream } from '@agentscope-ai/chat';

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
