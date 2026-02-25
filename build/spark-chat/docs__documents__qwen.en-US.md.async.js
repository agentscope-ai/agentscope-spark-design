"use strict";(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[4607],{69611:function(r,a,n){n.r(a);var i=n(76311),c=n(93359),p=n(93612),u=n(57415),h=n(63032),t=n(10294),m=n(96057),g=n(76387),x=n(58041),f=n(19482),v=n(36711),k=n(12068),I=n(33456),o=n(58542),d=n(48936),l=n(67294),s=n(63010),e=n(85893);function _(){return(0,e.jsx)(o.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"qwen",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#qwen",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Qwen"]}),(0,e.jsxs)("p",{children:[s.texts[0].value,(0,e.jsx)("a",{href:"https://help.aliyun.com/zh/model-studio/developer-reference/compatibility-of-openai-with-dashscope",children:s.texts[1].value}),s.texts[2].value]}),(0,e.jsxs)("h2",{id:"getting-relevant-parameters",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#getting-relevant-parameters",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Getting Relevant Parameters"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[s.texts[3].value,(0,e.jsx)("a",{href:"https://help.aliyun.com/zh/model-studio/getting-started/what-is-model-studio",children:s.texts[4].value})]}),(0,e.jsxs)("li",{children:[s.texts[5].value,(0,e.jsx)("a",{href:"https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key",children:s.texts[6].value})]}),(0,e.jsxs)("li",{children:[s.texts[7].value,(0,e.jsx)("a",{href:"https://help.aliyun.com/zh/model-studio/getting-started/models",children:s.texts[8].value})]})]}),(0,e.jsxs)("h2",{id:"openai-compatible-mode",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#openai-compatible-mode",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"OpenAI-compatible Mode"]}),(0,e.jsx)("p",{children:s.texts[9].value}),(0,e.jsxs)("h2",{id:"integration-using-openai-node",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#integration-using-openai-node",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Integration Using ",(0,e.jsx)("a",{href:"https://github.com/openai/openai-node",children:s.texts[10].value})]}),(0,e.jsxs)("h3",{id:"install-dependencies",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#install-dependencies",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Install Dependencies"]}),(0,e.jsx)(t.Z,{lang:"bash",children:s.texts[11].value}),(0,e.jsxs)("h3",{id:"call-example-using-openai-node",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#call-example-using-openai-node",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Call Example Using openai-node"]}),(0,e.jsx)(t.Z,{lang:"tsx",children:s.texts[12].value}),(0,e.jsx)("img",{src:"https://gw.alicdn.com/imgextra/i3/O1CN0180qH4s1WvoGlqDdbx_!!6000000002851-2-tps-2452-1654.png",style:{maxWidth:"50%"},alt:"Qwen integration example"}),(0,e.jsx)("hr",{}),(0,e.jsxs)("h2",{id:"call-example-using-api",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#call-example-using-api",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Call Example Using API"]}),(0,e.jsx)(t.Z,{lang:"tsx",children:s.texts[13].value}),(0,e.jsxs)("h2",{id:"dangerouslyallowbrowser",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#dangerouslyallowbrowser",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"dangerouslyAllowBrowser"]}),(0,e.jsxs)("p",{children:[s.texts[14].value,(0,e.jsx)("code",{children:s.texts[15].value}),s.texts[16].value]}),(0,e.jsx)("p",{children:s.texts[17].value})]})})})})}a.default=_},63010:function(r,a,n){n.r(a),n.d(a,{texts:function(){return i}});const i=[{value:`Qwen's model inference service supports the "OpenAI-compatible mode". For details, please refer to the official documentation: `,paraId:0,tocIndex:0},{value:"Alibaba Cloud Cloud Bailian - Qwen",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:"How to get the baseURL - ",paraId:1,tocIndex:1},{value:"https://help.aliyun.com/zh/model-studio/getting-started/what-is-model-studio",paraId:1,tocIndex:1},{value:"How to get the API Key - ",paraId:1,tocIndex:1},{value:"https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key",paraId:1,tocIndex:1},{value:"Model list - ",paraId:1,tocIndex:1},{value:"https://help.aliyun.com/zh/model-studio/getting-started/models",paraId:1,tocIndex:1},{value:"It refers to a model inference service that maintains consistency with OpenAI's API in terms of interface design and usage methods. This means developers can use the same code and methods for calling OpenAI models to call these compatible services, thereby reducing development and integration costs.",paraId:2,tocIndex:2},{value:"openai-node",paraId:3},{value:`$ npm install openai-node --save
`,paraId:4,tocIndex:4},{value:`import { ConfigProvider, carbonTheme } from '@agentscope-ai/design';
import { Bubble, ChatInput, type TMessage } from '@agentscope-ai/chat';
import { useRef, useState } from 'react';
import OpenAI from 'openai';
import { produce } from 'immer';
import { ChatCompletionMessageParam } from 'openai/resources.mjs';

const client = new OpenAI({
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
  apiKey: 'sk-xxxx', // Please replace with your API Key
  dangerouslyAllowBrowser: true, // Allow running in the browser
});

function Sender({
  handleSend,
  loading,
}: {
  handleSend: (input: string) => void;
  loading: boolean;
}) {
  const [input, setInput] = useState('');

  return (
    <ChatInput
      value={input}
      onChange={setInput}
      onSubmit={(input) => {
        handleSend(input);
        setInput('');
      }}
      loading={loading}
    />
  );
}

function App() {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const currentAnswer = useRef<TMessage | null>(null);

  const handleSend = async (input: string) => {
    const id = 'a' + Date.now().toString();
    const query = {
      role: 'user',
      content: input,
      id: 'q' + Date.now().toString(),
    } as TMessage;

    currentAnswer.current = {
      role: 'assistant',
      content: '',
      msgStatus: 'generating',
      id,
    };

    setMessages((v) => [...v, query, currentAnswer.current as TMessage]);
    setLoading(true);

    const stream = await client.chat.completions.create({
      model: 'qwen-plus',
      messages: [...messages, query] as ChatCompletionMessageParam[],
      stream: true,
    });

    for await (const chunk of stream) {
      currentAnswer.current = produce(currentAnswer.current, (draft) => {
        if (chunk.choices[0]?.finish_reason === 'stop') {
          draft.msgStatus = 'finished';
        }
        draft.content += chunk.choices[0]?.delta?.content || '';
      });
      setMessages((v) =>
        v.map((item) =>
          item.id === currentAnswer.current?.id ? currentAnswer.current : item,
        ),
      );
    }

    setLoading(false);
  };

  return (
    <ConfigProvider {...carbonTheme} prefix="spark-chat" prefixCls="spark-chat">
      <div className="h-[80vh] m-[20px] flex flex-col">
        <Bubble.List
          items={messages}
          classNames={{
            wrapper: 'flex-1 h-[0]',
          }}
        />
        <Sender handleSend={handleSend} loading={loading} />
      </div>
    </ConfigProvider>
  );
}

export default App;
`,paraId:5,tocIndex:5},{value:`import { ConfigProvider, carbonTheme } from '@agentscope-ai/design';
import {
  Bubble,
  ChatInput,
  Stream,
  type TMessage,
} from '@agentscope-ai/chat';
import { useRef, useState } from 'react';
import { produce } from 'immer';

function Sender({
  handleSend,
  loading,
}: {
  handleSend: (input: string) => void;
  loading: boolean;
}) {
  const [input, setInput] = useState('');

  return (
    <ChatInput
      value={input}
      onChange={setInput}
      onSubmit={(input) => {
        handleSend(input);
        setInput('');
      }}
      loading={loading}
    />
  );
}

function App() {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const currentAnswer = useRef<TMessage | null>(null);

  const handleSend = async (input: string) => {
    const id = 'a' + Date.now().toString();
    const query = {
      role: 'user',
      content: input,
      id: 'q' + Date.now().toString(),
    } as TMessage;

    currentAnswer.current = {
      role: 'assistant',
      content: '',
      msgStatus: 'generating',
      id,
    };

    setMessages((v) => [...v, query, currentAnswer.current as TMessage]);
    setLoading(true);

    const response = await fetch(
      'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer sk-xxxx\`,
        },
        body: JSON.stringify({
          model: 'qwen-plus',
          messages: [...messages, query],
          stream: true,
        }),
      },
    );

    if (response.body) {
      for await (const chunk of Stream(
        {
          readableStream: response.body,
        },
        {
          openaiCompatible: true,
        },
      )) {
        if (chunk.data === '[DONE]') {
          break;
        }
        const data = JSON.parse(chunk.data);
        currentAnswer.current = produce(currentAnswer.current, (draft) => {
          if (data.choices[0]?.finish_reason === 'stop') {
            draft.msgStatus = 'finished';
          }
          draft.content += data.choices[0]?.delta?.content || '';
        });
        setMessages((v) =>
          v.map((item) =>
            item.id === currentAnswer.current?.id
              ? currentAnswer.current
              : item,
          ),
        );
      }
    }
    setLoading(false);
  };

  return (
    <ConfigProvider {...carbonTheme} prefix="spark-chat" prefixCls="spark-chat">
      <div className="h-[80vh] m-[20px] flex flex-col">
        <Bubble.List
          items={messages}
          classNames={{
            wrapper: 'flex-1 h-[0]',
          }}
        />
        <Sender handleSend={handleSend} loading={loading} />
      </div>
    </ConfigProvider>
  );
}

export default App;
`,paraId:6,tocIndex:6},{value:"Enabling the ",paraId:7,tocIndex:7},{value:"dangerouslyAllowBrowser",paraId:7,tocIndex:7},{value:" option can be risky because it exposes your secret API credentials in client-side code. Web browsers are inherently less secure than server environments, and any user with access to the browser may be able to inspect, extract, and misuse these credentials. This could lead to unauthorized access using your credentials and potentially compromise sensitive data or functionality. The above code is primarily for demonstration purposes and should not be used in actual development.",paraId:7,tocIndex:7},{value:"A more appropriate approach is to place the code that calls the large model on the backend (including the apiKey configuration).",paraId:8,tocIndex:7}]}}]);
