"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[3518],{44477:function(a,n,e){var o;e.r(n),e.d(n,{demos:function(){return m}});var _=e(90228),r=e.n(_),u=e(87999),d=e.n(u),s=e(75271),m={"useglobalstyle-demo-demo":{component:s.memo(s.lazy(function(){return e.e(236).then(e.bind(e,93063))})),asset:{type:"BLOCK",id:"useglobalstyle-demo-demo",refAtomIds:["useGlobalStyle"],dependencies:{"index.tsx":{type:"FILE",value:e(67635).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(s,2))},renderOpts:{compile:function(){var i=d()(r()().mark(function c(){var l,g=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7889).then(e.bind(e,37889));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,g));case 3:case"end":return t.stop()}},c)}));function p(){return i.apply(this,arguments)}return p}()}}}},74341:function(a,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[]},67635:function(a,n){n.Z=`import { Button, useGlobalStyle } from '@agentscope-ai/design';
import { useState } from 'react';
const antPrefix = 'bl-ant';
export default () => {
  const [color, setColor] = useState(\`var(--\${antPrefix}-color-primary)\`);
  useGlobalStyle({ globalStyle: \`#useGlobalStyleDemo {color: \${color}}\` });
  // \u91CD\u590D\u7684style\uFF0Chead\u4E2D\u5E94\u8BE5\u53EA\u6709\u4E00\u4E2Adom
  useGlobalStyle({ globalStyle: \`#useGlobalStyleDemo {color: \${color}}\` });
  return (
    <div>
      <div id="useGlobalStyleDemo">\u68C0\u67E5\u6587\u6848\u989C\u8272</div>
      <Button
        className="primary-btn"
        onClick={() => setColor(\`var(--\${antPrefix}-color-primary)\`)}
      >
        \u4E3B\u9898\u8272
      </Button>
      <Button
        className="warning-btn"
        onClick={() => setColor(\`var(--\${antPrefix}-color-warning)\`)}
      >
        \u8B66\u544A\u8272
      </Button>
      <Button onClick={() => setColor('#000')}>\u9ED1\u8272</Button>
    </div>
  );
};
`}}]);
