"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[1904],{71957:function(o,a,n){n.r(a),n.d(a,{demos:function(){return d}});var e=n(75271),d={}},41673:function(o,a,n){n.r(a),n.d(a,{demos:function(){return d}});var e=n(75271),d={}},25709:function(o,a,n){n.r(a),n.d(a,{demos:function(){return d}});var e=n(75271),d={}},69092:function(o,a,n){n.r(a),n.d(a,{demos:function(){return d}});var e=n(75271),d={}},61224:function(o,a,n){n.r(a),n.d(a,{demos:function(){return d}});var e=n(75271),d={}},61661:function(o,a,n){n.r(a),n.d(a,{demos:function(){return d}});var e=n(75271),d={}},75525:function(o,a,n){n.r(a),n.d(a,{demos:function(){return d}});var e=n(75271),d={}},4818:function(o,a,n){n.r(a),n.d(a,{texts:function(){return e}});const e=[{value:"\u9700\u8981\u5728 ConfigProvider \u4F20\u5165\u4E3B\u9898\uFF0C\u793A\u4F8B\u4EE3\u7801\u91CC\u4F7F\u7528\u7684\u662F\u767E\u70BC\u4E3B\u9898\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u4FEE\u6539\u3002",paraId:0,tocIndex:0},{value:`import { ConfigProvider, bailianTheme } from '@agentscope-ai/design';

const App = () => {
  return (
    <ConfigProvider
      {...bailianTheme} // \u8FD9\u91CC\u4F7F\u7528\u7684\u662F\u767E\u70BC\u7684\u7956\u9016\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u81EA\u5DF1\u4FEE\u6539
    >
      <div>Hello World!</div>
    </ConfigProvider>
  );
};

export default App;
`,paraId:1,tocIndex:0},{value:"\u4E3B\u9898\u914D\u7F6E\u548C antd \u7684 ConfigProvider \u5165\u53C2\u5B8C\u5168\u4E00\u81F4\uFF0C\u53EF\u4EE5\u53C2\u8003 antd \u7684\u6587\u6863\u3002",paraId:2,tocIndex:0},{value:"\u5728\u8BBE\u8BA1\u7A3F\u4E2D\u590D\u5236\u51FA\u6765\u7684\u53D8\u91CF\u540D\u79F0\uFF0C ",paraId:3,tocIndex:0},{value:"\u6DFB\u52A0\u5728 ConfigProvider \u91CC\u8BBE\u7F6E\u7684 prefix",paraId:3,tocIndex:0},{value:"\u540E\u53EF\u4EE5\u76F4\u63A5\u5F53\u505A css variables \u4F7F\u7528\uFF0C\u4F8B\u5982\uFF1A",paraId:3,tocIndex:0},{value:"\u8BBE\u8BA1\u7A3F\u4E2D\u590D\u5236\u7684\u53D8\u91CF\u540D\u79F0",paraId:4,tocIndex:0},{value:" \uFF1A\u54C1\u724C\u4E3B\u8272/\u4E3B\u9898-\u9ED8\u8BA4--color-primary-base",paraId:4,tocIndex:0},{value:"css variables",paraId:5,tocIndex:0},{value:" \uFF1Avar(--",paraId:5,tocIndex:0},{value:"your-prefix",paraId:5,tocIndex:0},{value:"-color-primary-base)",paraId:5,tocIndex:0},{value:"\u767E\u70BC\u8F7B\u5E94\u7528\u5FC5\u987B\u4FEE\u6539\u524D\u7F00\uFF0C\u4EE5\u514D\u6C61\u67D3\u767E\u70BC\u4E3B\u7AD9\u7684\u6837\u5F0F",paraId:6,tocIndex:1},{value:"\u6CE8\u610F\uFF0C\u5982\u679C\u5D4C\u5957\u4F7F\u7528ConfigProvider\uFF0C\u8BF7\u5728\u7236ConfigProvider\u7EDF\u4E00\u8BBE\u7F6Eprefix\uFF0C\u5B50ConfigProvider\u4E0D\u8981\u8BBE\u7F6Eprefix",paraId:7,tocIndex:1},{value:`
1. \u5728ConfigProvider\u91CC\u589E\u52A0 **prefix**
`,paraId:8},{value:`import { ConfigProvider } from '@agentscope-ai/design';

const App = () => {
  return (
    <ConfigProvider
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js"
      prefix="your-prefix"
    >
      <div>Hello World!</div>
    </ConfigProvider>
  );
};

export default App;
`,paraId:9,tocIndex:1},{value:"ConfigProvider \u53C2\u6570\u89E3\u91CA\u5982\u4E0B\uFF0C\u66F4\u591A\u53C2\u6570\u8BF7\u53C2\u8003 antd \u7684 ",paraId:10,tocIndex:1},{value:"ConfigProvider",paraId:10,tocIndex:1},{value:"\u53C2\u6570\u540D",paraId:11,tocIndex:1},{value:"\u7C7B\u578B",paraId:11,tocIndex:1},{value:"\u63CF\u8FF0",paraId:11,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:1},{value:"prefix",paraId:11,tocIndex:1},{value:"string",paraId:11,tocIndex:1},{value:"\u7528\u4E8E\u62FC\u63A5 antd \u548C spark \u7EC4\u4EF6\u7684\u524D\u7F00\uFF0C\u65E0\u7279\u6B8A\u9700\u6C42\u53EA\u4F20\u8FD9\u4E2A\u524D\u7F00\u5373\u53EF",paraId:11,tocIndex:1},{value:"\u65E0",paraId:11,tocIndex:1},{value:"iconfont",paraId:11,tocIndex:1},{value:"string",paraId:11,tocIndex:1},{value:"\u56FE\u6807\u5B57\u4F53\u7684 URL,\u4F8B\u5982//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js",paraId:11,tocIndex:1},{value:"\u65E0",paraId:11,tocIndex:1},{value:"className",paraId:11,tocIndex:1},{value:"string",paraId:11,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:11,tocIndex:1},{value:"\u65E0",paraId:11,tocIndex:1},{value:"style",paraId:11,tocIndex:1},{value:"React.CSSProperties",paraId:11,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u5185\u8054\u6837\u5F0F",paraId:11,tocIndex:1},{value:"\u65E0",paraId:11,tocIndex:1},{value:"children",paraId:11,tocIndex:1},{value:"React.ReactNode",paraId:11,tocIndex:1},{value:"\u5B50\u7EC4\u4EF6\u5185\u5BB9",paraId:11,tocIndex:1},{value:"\u65E0",paraId:11,tocIndex:1},{value:"iconfont \u9879\u76EE\u5730\u5740\uFF1A",paraId:12,tocIndex:2},{value:"https://www.iconfont.cn/manage/index?spm=a313x.home_index.i3.22.58a33a81rbqwMb&manage_type=myprojects&projectId=4807885",paraId:12,tocIndex:2},{value:`
\u5982\u6CA1\u6709\u6743\u9650\uFF0C\u627E@\u5BF8\u96E8`,paraId:12,tocIndex:2},{value:"\u968F\u7740\u4E1A\u52A1\u8FED\u4EE3\uFF0Ciconfont\u4E5F\u4F1A\u4E0D\u65AD\u53D8\u66F4",paraId:13,tocIndex:2},{value:` 
`,paraId:8},{value:"\u5982\u679C\u4E0D\u4F20\uFF0C\u4F1A\u6709\u4E00\u4E2A\u515C\u5E95\u7684\u521D\u7248url\uFF0C\u4F46\u662F\u8FD9\u53EF\u80FD\u4E0D\u5305\u542B\u4F60\u6240\u9700\u8981\u7684icon",paraId:14,tocIndex:2}]},44521:function(o,a,n){n.r(a),n.d(a,{texts:function(){return e}});const e=[{value:`tnpm uninstall @ali/bailian-ui
`,paraId:0,tocIndex:1},{value:`tnpm install @ali/agentscope-ai-design --save
`,paraId:1,tocIndex:2},{value:"\u6CE8\u610F\uFF1A\u5728\u8FD0\u884C\u7B2C 4 \u6B65\u524D\uFF0C\u4E00\u5B9A\u8981\u8FD0\u884C\u8FD9\u4E00\u6B65\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u51FA\u73B0 glob \u7248\u672C\u4E0D\u7B26\u5BFC\u81F4\u811A\u672C\u8FD0\u884C\u5931\u8D25",paraId:2,tocIndex:3},{value:` tnpm install --no-save @babel/parser@^7.26.10 @babel/generator@^7.26.10 glob@^11.0.1
`,paraId:3,tocIndex:3},{value:"\u8FC1\u79FB\u811A\u672C\u6709\u4E24\u4E2A\u53C2\u6570\uFF1A",paraId:4,tocIndex:4},{value:"ant-prefix: \u4F60\u5728 ConfigProvider \u4E2D\u8BBE\u7F6E\u7684 prefix\uFF1B",paraId:5,tocIndex:4},{value:"\u4F60\u7684\u9879\u76EE\u539F\u6E90\u7801\u8DEF\u5F84\uFF0C\u4F8B\u5982 src,components\u3002",paraId:5,tocIndex:4},{value:"\u4E3A\u4E86\u8BA9\u8FC1\u79FB\u811A\u672C\u8BFB\u53D6\u5230\u8FD9\u4E24\u4E2A\u53C2\u6570\uFF0C\u5728\u5F53\u524D\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA migrate.spark.js\uFF0C\u5E76\u914D\u7F6E\u53C2\u6570\u5982\u4E0B\uFF1A",paraId:6,tocIndex:4},{value:`const path = require('path');

module.exports = {
  antPrefix: 'your-prefix', // \u6362\u6210\u4F60\u81EA\u5DF1\u5728ConfigProvider\u4E2D\u8BBE\u7F6E\u7684prefix
  directories: [path.join('src'), path.join('components')], // \u9700\u8981\u8FC1\u79FB\u4EE3\u7801\u7684\u8DEF\u5F84
};
`,paraId:7,tocIndex:4},{value:"\u7136\u540E\u518D\u8FD0\u884C",paraId:8,tocIndex:4},{value:`npx migrate-from-bl
`,paraId:9,tocIndex:4}]},89239:function(o,a,n){n.r(a),n.d(a,{texts:function(){return e}});const e=[{value:"\u4E3A\u4E86\u907F\u514D\u5404\u4E2A\u4ED3\u5E93/\u5B50\u4E1A\u52A1\u7684 global \u6837\u5F0F\u6539\u52A8\u4E92\u76F8\u5F71\u54CD\uFF0C\u53EA\u63A8\u8350\u7528 npm \u5305\u7684\u5F62\u5F0F\u5F15\u5165\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u4E1A\u52A1\u81EA\u5DF1\u7684\u6837\u5F0F\u524D\u7F00",paraId:0,tocIndex:0},{value:`# \u6839\u636E\u9700\u8981\u9009\u62E9\u4E00\u4E2A\u5B89\u88C5\u5373\u53EF
tnpm install -S @ali/agentscope-ai-design --save # \u5185\u7F51\u5305
tnpm install -S @agentscope-ai/design --save # \u5916\u7F51\u5305
`,paraId:1,tocIndex:0},{value:"\u6CE8\uFF1A\u4E3A\u4E86\u6587\u6863\u7F16\u5199\u7EDF\u4E00\uFF0C\u6587\u6863\u4E2D\u7684 demo \u7EDF\u4E00\u4ECE\u5BF9\u5916\u5305\u540D\u5F15\u5165\u7EC4\u4EF6\uFF1A@agentscope-ai/design\uFF0C\u4F7F\u7528\u5185\u7F51\u5305\u65F6\u6CE8\u610F\u66FF\u6362\u6210 @ali/agentscope-ai-design",paraId:2,tocIndex:0},{value:"\u4ED3\u5E93\u5730\u5740: ",paraId:3,tocIndex:1},{value:"https://code.alibaba-inc.com/liveme-console/spark-design",paraId:3,tocIndex:1},{value:" ",paraId:3,tocIndex:1},{value:`
def\uFF1A`,paraId:3,tocIndex:1},{value:"https://space.o2.alibaba-inc.com/app/483981/iteration",paraId:3,tocIndex:1},{value:" ",paraId:3,tocIndex:1},{value:`
\u95E8\u6237\u7AD9\u70B9\uFF1A`,paraId:3,tocIndex:1},{value:"https://pre-bailian.console.aliyun.com/spark-design",paraId:3,tocIndex:1},{value:"https://www.npmjs.com/package/@agentscope-ai/design?activeTab=versions",paraId:4,tocIndex:2},{value:" ",paraId:4,tocIndex:2}]},50935:function(o,a,n){n.r(a),n.d(a,{texts:function(){return e}});const e=[{value:"\u5728\u9879\u76EE\u6700\u5916\u5C42\u7EC4\u4EF6\u5957\u4E00\u5C42 ConfigProvider\uFF08\u7528\u6CD5\u540C AntD \u7684 ConfigProvider\uFF09",paraId:0,tocIndex:0},{value:`import { ConfigProvider, bailianTheme, Button } from '@agentscope-ai/design';
import zhCN from 'antd/locale/zh_CN';
import { Flex } from 'antd';

const App = () => {
  return (
    <ConfigProvider
      {...bailianTheme} // \u8FD9\u91CC\u4F7F\u7528\u7684\u662F\u767E\u70BC\u7684\u7956\u9016\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u81EA\u5DF1\u4FEE\u6539
      prefix="your-prefix" // \u524D\u7F00
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js" // iconfont\u7684\u5730\u5740\uFF08Symbol\u65B9\u6CD5\uFF09
      locale={zhCN} // \u8BED\u8A00\u5305
    >
      <Flex>
        Hello World!
        <Button>\u4F60\u597D</Button>
      </Flex>
    </ConfigProvider>
  );
};

export default App;
`,paraId:1,tocIndex:0}]},25074:function(o,a,n){n.r(a),n.d(a,{texts:function(){return e}});const e=[{value:"\u5F15\u5165 BLConfigProvider \u540E\uFF0C\u4F1A\u81EA\u52A8\u6CE8\u518C\u5982\u4E0B css \u53D8\u91CF, \u5176\u4E2D\u6570\u5B57\u7C7B\u578B\u53D8\u91CF\u4F1A\u81EA\u52A8\u589E\u52A0 px \u5355\u4F4D\uFF1A",paraId:0,tocIndex:0},{value:`Code snippet path not found: ../../../src/antd/bailianCssVariables.ts
`,paraId:1,tocIndex:0}]},27742:function(o,a,n){n.r(a),n.d(a,{texts:function(){return e}});const e=[]}}]);
