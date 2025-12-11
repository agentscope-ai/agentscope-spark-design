"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[3518],{65875:function(s,n,e){var o;e.r(n),e.d(n,{demos:function(){return u}});var _=e(90228),l=e.n(_),d=e(87999),i=e.n(d),a=e(75271),u={"useglobalstyle-demo-demo":{component:a.memo(a.lazy(function(){return e.e(236).then(e.bind(e,16617))})),asset:{type:"BLOCK",id:"useglobalstyle-demo-demo",refAtomIds:["useGlobalStyle"],dependencies:{"index.tsx":{type:"FILE",value:e(46881).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(a,2))},renderOpts:{compile:function(){var m=i()(l()().mark(function p(){var r,g=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(9596).then(e.bind(e,79596));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,g));case 3:case"end":return t.stop()}},p)}));function c(){return m.apply(this,arguments)}return c}()}}}},46032:function(s,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[]},46881:function(s,n){n.Z=`import { Button, useGlobalStyle } from '@agentscope-ai/design';
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
