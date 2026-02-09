"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[2579],{81431:function(m,n,e){e.r(n),e.d(n,{demos:function(){return c}});var a=e(75271),c={}},65934:function(m,n,e){var a;e.r(n),e.d(n,{demos:function(){return v}});var c=e(90228),g=e.n(c),T=e(26068),f=e.n(T),P=e(48305),p=e.n(P),M=e(87999),I=e.n(M),o=e(75271),b=e(82377),_=e(46840),C=e(10895),v={"docs-guide-from-antd-demo-zh-cn-0":{component:o.memo(o.lazy(I()(g()().mark(function x(){var l,d,s,i,h,t,y,A,u,k,F,D,S,O,L,H;return g()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(4992),e.e(4349),e.e(6763),e.e(3609),e.e(6070),e.e(7114),e.e(7246)]).then(e.bind(e,5012));case 2:return l=r.sent,d=l.Button,s=l.Image,i=l.ConfigProvider,h=l.purpleDarkTheme,t=l.purpleTheme,r.next=10,Promise.resolve().then(e.bind(e,82377));case 10:return y=r.sent,A=y.SparkSunLine,u=y.SparkMoonLine,r.next=15,Promise.resolve().then(e.bind(e,46840));case 15:return k=r.sent,F=k.Flex,r.next=19,Promise.resolve().then(e.bind(e,10895));case 19:return D=r.sent,S=D.default,r.next=23,Promise.resolve().then(e.t.bind(e,75271,19));case 23:return O=r.sent,L=O.useState,H=function(){var W=L("light"),R=p()(W,2),B=R[0],U=R[1],K=B==="light"?t:h,E="sps";return o.createElement(i,f()(f()({},K),{},{prefix:E,prefixCls:E,iconfont:"//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js",locale:S,style:{width:"100%",height:"100%"}}),o.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(E,"-color-bg-base)")}},o.createElement(F,{vertical:!0,gap:16,align:"center",style:{padding:"12px 0"}},o.createElement(s,{width:120,src:"https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"}),o.createElement("div",{style:{color:"var(--".concat(E,"-ant-color-text-base)"),fontSize:"24px",textAlign:"center"}},"Hello Spark Design!"),o.createElement(d,{type:"primary",onClick:function(){U(B==="light"?"dark":"light")},icon:B==="light"?o.createElement(u,null):o.createElement(A,null)},B==="light"?"\u6697\u8272":"\u4EAE\u8272"," \u6A21\u5F0F"))))},r.abrupt("return",{default:H});case 27:case"end":return r.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-guide-from-antd-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Button,
  Image,
  ConfigProvider,
  purpleDarkTheme,
  purpleTheme,
} from '@agentscope-ai/design';
import { SparkSunLine, SparkMoonLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useState } from 'react';

const App = () => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  const theme = colorMode === 'light' ? purpleTheme : purpleDarkTheme;

  const prefix = 'sps';
  return (
    <ConfigProvider
      {...theme} // \u60A8\u53EF\u4EE5\u4ECE purpleTheme\u3001purpleDarkTheme\u3001carbonTheme \u548C carbonDarkTheme \u4E2D\u9009\u62E9
      prefix={prefix} // Ant Design \u548C @agentscope-ai/design \u7684\u524D\u7F00
      prefixCls={prefix}
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js" // \u53EF\u9009\u53C2\u6570\uFF0C\u60A8\u53EF\u4EE5\u4ECE https://www.iconfont.cn/ \u83B7\u53D6
      locale={zhCN} // \u6765\u81EA Ant Design \u7684\u8BED\u8A00\u5305
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: \`var(--\${prefix}-color-bg-base)\`,
        }}
      >
        <Flex vertical gap={16} align="center" style={{ padding: '12px 0' }}>
          <Image
            width={120}
            src="https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"
          />
          <div
            style={{
              color: \`var(--\${prefix}-ant-color-text-base)\`,
              fontSize: '24px',
              textAlign: 'center',
            }}
          >
            Hello Spark Design!
          </div>
          <Button
            type="primary"
            onClick={() => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light');
            }}
            icon={colorMode === 'light' ? <SparkMoonLine /> : <SparkSunLine />}
          >
            {colorMode === 'light' ? '\u6697\u8272' : '\u4EAE\u8272'} \u6A21\u5F0F
          </Button>
        </Flex>
      </div>
    </ConfigProvider>
  );
};

export default App;`},"@agentscope-ai/icons":{type:"NPM",value:"1.0.46"},antd:{type:"NPM",value:"5.29.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@agentscope-ai/icons":b,antd:_,"antd/locale/zh_CN":C,react:a||(a=e.t(o,2))},renderOpts:{compile:function(){var x=I()(g()().mark(function d(){var s,i=arguments;return g()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1385).then(e.bind(e,31385));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,i));case 3:case"end":return t.stop()}},d)}));function l(){return x.apply(this,arguments)}return l}()}},"docs-guide-from-antd-demo-zh-cn-1":{component:o.memo(o.lazy(I()(g()().mark(function x(){var l,d,s,i,h,t,y,A,u,k,F,D,S,O,L,H;return g()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(4992),e.e(4349),e.e(6763),e.e(3609),e.e(6070),e.e(7114),e.e(7246)]).then(e.bind(e,5012));case 2:return l=r.sent,d=l.ConfigProvider,s=l.purpleDarkTheme,i=l.purpleTheme,r.next=8,Promise.resolve().then(e.bind(e,46840));case 8:return h=r.sent,t=h.Button,y=h.Image,A=h.Flex,r.next=14,Promise.resolve().then(e.bind(e,82377));case 14:return u=r.sent,k=u.SparkSunLine,F=u.SparkMoonLine,r.next=19,Promise.resolve().then(e.bind(e,10895));case 19:return D=r.sent,S=D.default,r.next=23,Promise.resolve().then(e.t.bind(e,75271,19));case 23:return O=r.sent,L=O.useState,H=function(){var W=L("light"),R=p()(W,2),B=R[0],U=R[1],K=B==="light"?i:s,E="sps";return o.createElement(d,f()(f()({},K),{},{prefix:E,prefixCls:E,iconfont:"//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js",locale:S,style:{width:"100%",height:"100%"}}),o.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(E,"-color-bg-base)")}},o.createElement(A,{vertical:!0,gap:16,align:"center",style:{padding:"12px 0"}},o.createElement(y,{width:120,src:"https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"}),o.createElement("div",{style:{color:"var(--".concat(E,"-ant-color-text-base)"),fontSize:"24px",textAlign:"center"}},"Hello Spark Design!"),o.createElement(t,{type:"primary",onClick:function(){U(B==="light"?"dark":"light")},icon:B==="light"?o.createElement(F,null):o.createElement(k,null)},B==="light"?"\u6697\u8272":"\u4EAE\u8272"," \u6A21\u5F0F"))))},r.abrupt("return",{default:H});case 27:case"end":return r.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-guide-from-antd-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  ConfigProvider,
  purpleDarkTheme,
  purpleTheme,
} from '@agentscope-ai/design';
import { Button, Image, Flex } from 'antd';
import { SparkSunLine, SparkMoonLine } from '@agentscope-ai/icons';
import zhCN from 'antd/locale/zh_CN';
import { useState } from 'react';

const App = () => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  const theme = colorMode === 'light' ? purpleTheme : purpleDarkTheme;

  const prefix = 'sps';
  return (
    <ConfigProvider
      {...theme} // \u60A8\u53EF\u4EE5\u4ECE purpleTheme\u3001purpleDarkTheme\u3001carbonTheme \u548C carbonDarkTheme \u4E2D\u9009\u62E9
      prefix={prefix} // Ant Design \u548C @agentscope-ai/design \u7684\u524D\u7F00
      prefixCls={prefix}
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js" // \u53EF\u9009\u53C2\u6570\uFF0C\u60A8\u53EF\u4EE5\u4ECE https://www.iconfont.cn/ \u83B7\u53D6
      locale={zhCN} // \u6765\u81EA Ant Design \u7684\u8BED\u8A00\u5305
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: \`var(--\${prefix}-color-bg-base)\`,
        }}
      >
        <Flex vertical gap={16} align="center" style={{ padding: '12px 0' }}>
          <Image
            width={120}
            src="https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"
          />
          <div
            style={{
              color: \`var(--\${prefix}-ant-color-text-base)\`,
              fontSize: '24px',
              textAlign: 'center',
            }}
          >
            Hello Spark Design!
          </div>
          <Button
            type="primary"
            onClick={() => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light');
            }}
            icon={colorMode === 'light' ? <SparkMoonLine /> : <SparkSunLine />}
          >
            {colorMode === 'light' ? '\u6697\u8272' : '\u4EAE\u8272'} \u6A21\u5F0F
          </Button>
        </Flex>
      </div>
    </ConfigProvider>
  );
};

export default App;`},antd:{type:"NPM",value:"5.29.1"},"@agentscope-ai/icons":{type:"NPM",value:"1.0.46"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:_,"@agentscope-ai/icons":b,"antd/locale/zh_CN":C,react:a||(a=e.t(o,2))},renderOpts:{compile:function(){var x=I()(g()().mark(function d(){var s,i=arguments;return g()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1385).then(e.bind(e,31385));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,i));case 3:case"end":return t.stop()}},d)}));function l(){return x.apply(this,arguments)}return l}()}}}},94827:function(m,n,e){var a;e.r(n),e.d(n,{demos:function(){return v}});var c=e(90228),g=e.n(c),T=e(26068),f=e.n(T),P=e(48305),p=e.n(P),M=e(87999),I=e.n(M),o=e(75271),b=e(82377),_=e(46840),C=e(10895),v={"docs-guide-from-scratch-demo-zh-cn-0":{component:o.memo(o.lazy(I()(g()().mark(function x(){var l,d,s,i,h,t,y,A,u,k,F,D,S,O,L,H;return g()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(4992),e.e(4349),e.e(6763),e.e(3609),e.e(6070),e.e(7114),e.e(7246)]).then(e.bind(e,5012));case 2:return l=r.sent,d=l.Button,s=l.Image,i=l.ConfigProvider,h=l.purpleDarkTheme,t=l.purpleTheme,r.next=10,Promise.resolve().then(e.bind(e,82377));case 10:return y=r.sent,A=y.SparkSunLine,u=y.SparkMoonLine,r.next=15,Promise.resolve().then(e.bind(e,46840));case 15:return k=r.sent,F=k.Flex,r.next=19,Promise.resolve().then(e.bind(e,10895));case 19:return D=r.sent,S=D.default,r.next=23,Promise.resolve().then(e.t.bind(e,75271,19));case 23:return O=r.sent,L=O.useState,H=function(){var W=L("light"),R=p()(W,2),B=R[0],U=R[1],K=B==="light"?t:h,E="sps";return o.createElement(i,f()(f()({},K),{},{prefix:E,prefixCls:E,iconfont:"//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js",locale:S,style:{width:"100%",height:"100%"}}),o.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(E,"-color-bg-base)")}},o.createElement(F,{vertical:!0,gap:16,align:"center",style:{padding:"12px 0"}},o.createElement(s,{width:120,src:"https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"}),o.createElement("div",{style:{color:"var(--".concat(E,"-ant-color-text-base)"),fontSize:"24px",textAlign:"center"}},"Hello Spark Design!"),o.createElement(d,{type:"primary",onClick:function(){U(B==="light"?"dark":"light")},icon:B==="light"?o.createElement(u,null):o.createElement(A,null)},B==="light"?"\u6697\u8272":"\u4EAE\u8272"," \u6A21\u5F0F"))))},r.abrupt("return",{default:H});case 27:case"end":return r.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-guide-from-scratch-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Button,
  Image,
  ConfigProvider,
  purpleDarkTheme,
  purpleTheme,
} from '@agentscope-ai/design';
import { SparkSunLine, SparkMoonLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useState } from 'react';

const App = () => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  const theme = colorMode === 'light' ? purpleTheme : purpleDarkTheme;

  const prefix = 'sps';
  return (
    <ConfigProvider
      {...theme} // \u60A8\u53EF\u4EE5\u4ECE purpleTheme\u3001purpleDarkTheme\u3001carbonTheme \u548C carbonDarkTheme \u4E2D\u9009\u62E9
      prefix={prefix} // Ant Design \u548C @agentscope-ai/design \u7684\u524D\u7F00
      prefixCls={prefix}
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js" // \u53EF\u9009\u53C2\u6570\uFF0C\u60A8\u53EF\u4EE5\u4ECE https://www.iconfont.cn/ \u83B7\u53D6
      locale={zhCN} // \u6765\u81EA Ant Design \u7684\u8BED\u8A00\u5305
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: \`var(--\${prefix}-color-bg-base)\`,
        }}
      >
        <Flex vertical gap={16} align="center" style={{ padding: '12px 0' }}>
          <Image
            width={120}
            src="https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"
          />
          <div
            style={{
              color: \`var(--\${prefix}-ant-color-text-base)\`,
              fontSize: '24px',
              textAlign: 'center',
            }}
          >
            Hello Spark Design!
          </div>
          <Button
            type="primary"
            onClick={() => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light');
            }}
            icon={colorMode === 'light' ? <SparkMoonLine /> : <SparkSunLine />}
          >
            {colorMode === 'light' ? '\u6697\u8272' : '\u4EAE\u8272'} \u6A21\u5F0F
          </Button>
        </Flex>
      </div>
    </ConfigProvider>
  );
};

export default App;`},"@agentscope-ai/icons":{type:"NPM",value:"1.0.46"},antd:{type:"NPM",value:"5.29.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@agentscope-ai/icons":b,antd:_,"antd/locale/zh_CN":C,react:a||(a=e.t(o,2))},renderOpts:{compile:function(){var x=I()(g()().mark(function d(){var s,i=arguments;return g()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1385).then(e.bind(e,31385));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,i));case 3:case"end":return t.stop()}},d)}));function l(){return x.apply(this,arguments)}return l}()}}}},83541:function(m,n,e){e.r(n),e.d(n,{demos:function(){return o}});var a=e(90228),c=e.n(a),g=e(26068),T=e.n(g),f=e(87999),P=e.n(f),p=e(75271),M=e(46840),I=e(10895),o={"docs-guide-iconfont-demo-zh-cn-0":{component:p.memo(p.lazy(P()(c()().mark(function b(){var _,C,v,x,l,d,s,i,h,t,y;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(4992),e.e(4349),e.e(6763),e.e(3609),e.e(6070),e.e(7114),e.e(7246)]).then(e.bind(e,5012));case 2:return _=u.sent,C=_.ConfigProvider,v=_.purpleTheme,x=_.Button,l=_.IconFont,d=_.IconButton,u.next=10,Promise.resolve().then(e.bind(e,46840));case 10:return s=u.sent,i=s.Flex,u.next=14,Promise.resolve().then(e.bind(e,10895));case 14:return h=u.sent,t=h.default,y=function(){var F="sps",D="spark-effciency-line",S="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js";return p.createElement(C,T()(T()({},v),{},{prefix:F,prefixCls:F,iconfont:S,locale:t,style:{width:"100%",height:"100%"}}),p.createElement(i,{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(F,"-color-bg-base)")},justify:"center",align:"center"},p.createElement(i,{vertical:!0,gap:16,style:{width:"300px",padding:"12px 0"}},p.createElement(i,{gap:8},p.createElement("div",{style:{width:"100px",lineHeight:"32px"}},"IconFont:"),p.createElement(l,{type:D})),p.createElement(i,{gap:8},p.createElement("div",{style:{width:"100px",lineHeight:"32px"}},"Button:"),p.createElement(x,{type:"primary",iconType:D},"\u6DFB\u52A0\u7528\u6237")),p.createElement(i,{gap:8},p.createElement("div",{style:{width:"100px",lineHeight:"32px"}},"IconButton:"),p.createElement(d,{iconType:D})))))},u.abrupt("return",{default:y});case 18:case"end":return u.stop()}},b)})))),asset:{type:"BLOCK",id:"docs-guide-iconfont-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  ConfigProvider,
  purpleTheme,
  Button,
  IconFont,
  IconButton,
} from '@agentscope-ai/design';
import { Flex } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useState } from 'react';

const App = () => {
  const prefix = 'sps';
  const iconSymbol = 'spark-effciency-line';
  const iconfont = '//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js'; // \u60A8\u53EF\u4EE5\u4ECE https://www.iconfont.cn/ \u83B7\u53D6
  return (
    <ConfigProvider
      {...purpleTheme}
      prefix={prefix}
      prefixCls={prefix}
      iconfont={iconfont}
      locale={zhCN}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Flex
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: \`var(--\${prefix}-color-bg-base)\`,
        }}
        justify="center"
        align="center"
      >
        <Flex vertical gap={16} style={{ width: '300px', padding: '12px 0' }}>
          <Flex gap={8}>
            <div style={{ width: '100px', lineHeight: '32px' }}>IconFont:</div>
            <IconFont type={iconSymbol} />
          </Flex>
          <Flex gap={8}>
            <div style={{ width: '100px', lineHeight: '32px' }}>Button:</div>
            <Button type="primary" iconType={iconSymbol}>
              \u6DFB\u52A0\u7528\u6237
            </Button>
          </Flex>
          <Flex gap={8}>
            <div style={{ width: '100px', lineHeight: '32px' }}>
              IconButton:
            </div>
            <IconButton iconType={iconSymbol}></IconButton>
          </Flex>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};

export default App;`},antd:{type:"NPM",value:"5.29.1"}},entry:"index.tsx"},context:{antd:M,"antd/locale/zh_CN":I},renderOpts:{compile:function(){var b=P()(c()().mark(function C(){var v,x=arguments;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1385).then(e.bind(e,31385));case 2:return d.abrupt("return",(v=d.sent).default.apply(v,x));case 3:case"end":return d.stop()}},C)}));function _(){return b.apply(this,arguments)}return _}()}}}},52307:function(m,n,e){e.r(n),e.d(n,{demos:function(){return c}});var a=e(75271),c={}},8714:function(m,n,e){e.r(n),e.d(n,{demos:function(){return p}});var a=e(90228),c=e.n(a),g=e(87999),T=e.n(g),f=e(75271),P=e(82377),p={"docs-guide-spark-icons-demo-usage":{component:f.memo(f.lazy(function(){return e.e(2433).then(e.bind(e,19807))})),asset:{type:"BLOCK",id:"docs-guide-spark-icons-demo-usage",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(16080).Z},"@agentscope-ai/icons":{type:"NPM",value:"1.0.46"}},entry:"index.tsx",title:"\u57FA\u672C\u7528\u6CD5"},context:{"@agentscope-ai/icons":P},renderOpts:{compile:function(){var M=T()(c()().mark(function o(){var b,_=arguments;return c()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(1385).then(e.bind(e,31385));case 2:return v.abrupt("return",(b=v.sent).default.apply(b,_));case 3:case"end":return v.stop()}},o)}));function I(){return M.apply(this,arguments)}return I}()}}}},93633:function(m,n,e){e.r(n),e.d(n,{demos:function(){return c}});var a=e(75271),c={}},3331:function(m,n,e){e.r(n),e.d(n,{demos:function(){return c}});var a=e(75271),c={}},54253:function(m,n,e){e.r(n),e.d(n,{demos:function(){return c}});var a=e(75271),c={}},37243:function(m,n,e){var a;e.r(n),e.d(n,{demos:function(){return b}});var c=e(90228),g=e.n(c),T=e(87999),f=e.n(T),P=e(75271),p=e(82377),M=e(42640),I=e(51204),o=e(39949),b={"docs-icons-icon-library-demo-library":{component:P.memo(P.lazy(function(){return e.e(2433).then(e.bind(e,62749))})),asset:{type:"BLOCK",id:"docs-icons-icon-library-demo-library",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37588).Z},react:{type:"NPM",value:"18.3.1"},"@agentscope-ai/icons":{type:"NPM",value:"1.0.46"},"antd-style":{type:"NPM",value:"3.7.1"},"@agentscope-ai/design":{type:"NPM",value:"1.0.30"},"./iconCategories.ts":{type:"FILE",value:e(8619).Z}},entry:"index.tsx",title:"\u67E5\u770B\u5168\u90E8\u56FE\u6807"},context:{"./iconCategories.ts":o,react:a||(a=e.t(P,2)),"@agentscope-ai/icons":p,"antd-style":M,dumi:I,"/home/runner/work/agentscope-spark-design/agentscope-spark-design/packages/spark-design/docs/icons/demo/iconCategories.ts":o},renderOpts:{compile:function(){var _=f()(g()().mark(function v(){var x,l=arguments;return g()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1385).then(e.bind(e,31385));case 2:return s.abrupt("return",(x=s.sent).default.apply(x,l));case 3:case"end":return s.stop()}},v)}));function C(){return _.apply(this,arguments)}return C}()}}}},60135:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"2025-02-06",paraId:0,tocIndex:0},{value:"CodeBlock \u7EC4\u4EF6\u6837\u5F0F\u6587\u4EF6\u79FB\u9664 !important \u7C7B\u578B\u6837\u5F0F\uFF0C\u5916\u5C42\u6DFB\u52A0 .spark-code-block \u5BB9\u5668\u7C7B\uFF1Bprops \u652F\u6301 ReactCodeMirrorProps \u7C7B\u578B\u53C2\u6570\u900F\u4F20",paraId:1,tocIndex:1},{value:"PromptsEditor \u7EC4\u4EF6\u652F\u6301\u4E86 ReactCodeMirrorProps \u7C7B\u578B\u53C2\u6570\u900F\u4F20\uFF0CVarRender \u4FEE\u590D\u4E86 ${} \u7C7B\u578B\u53D8\u91CF\u8F93\u5165\u8BC6\u522B\u95EE\u9898",paraId:1,tocIndex:1},{value:"Steps \u7EC4\u4EF6 vertical \u7C7B\u578B\u5782\u76F4\u5BF9\u9F50\u95EE\u9898\u4FEE\u590D",paraId:1,tocIndex:1},{value:"SlateEditor \u7EC4\u4EF6\u5C06\u7C98\u8D34\u6587\u672C\u4E2D\u7684 CRLF \u89C4\u8303\u5316\u4E3A LF\uFF0C\u4EE5\u4FBF\u5728 Windows \u6362\u884C\u7B26\u73AF\u5883\u4E0B\u5177\u6709\u66F4\u597D\u7684\u517C\u5BB9\u6027",paraId:1,tocIndex:1},{value:"Tab \u7EC4\u4EF6 segment \u7C7B\u578B\u652F\u6301 className \u900F\u4F20",paraId:1,tocIndex:1},{value:"2025-01-29",paraId:2,tocIndex:2},{value:"PromptsEditor \u7EC4\u4EF6\u652F\u6301\u4E86 readOnly \u53C2\u6570",paraId:3,tocIndex:3},{value:"CodeBlock \u7EC4\u4EF6\u652F\u6301\u4E86 extensions \u53C2\u6570\uFF0Cprops \u652F\u6301 ReactCodeMirrorProps \u7C7B\u578B\u53C2\u6570\u900F\u4F20",paraId:3,tocIndex:3},{value:"MCP \u5DE5\u5177\u540D\u79F0\u5347\u7EA7\uFF0C\u4F18\u5316\u65E5\u5FD7\u529F\u80FD",paraId:3,tocIndex:3},{value:"Pagination \u7EC4\u4EF6\uFF0C\u4FEE\u590D\u4E86 showSizeChanger \u548C pageSizeOptions \u540C\u65F6\u4F20\u5165\u65F6\uFF0CpageSizeOptions \u4E0D\u751F\u6548\u7684\u95EE\u9898",paraId:4,tocIndex:4},{value:"2025-01-27",paraId:5,tocIndex:5},{value:"\u8865\u5145 InputSearch \u7EC4\u4EF6\u6587\u6863",paraId:6,tocIndex:6},{value:"Table \u7EC4\u4EF6\u5728\u8868\u5934\u56FA\u5B9A\u65F6\uFF0C\u8868\u5934\u6837\u5F0F\u9ED8\u8BA4\u5706\u89D2\u6539\u4E3A\u76F4\u89D2",paraId:7,tocIndex:7},{value:"Empty \u7EC4\u4EF6\u4FEE\u590D\u4E86\u5F15\u5165\u591A\u4E2A Empty \u7EC4\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u80FD\u5BFC\u81F4\u7684 svg \u4E22\u5931\u7684\u95EE\u9898",paraId:7,tocIndex:7},{value:"\u6587\u6863\u641C\u7D22\u767D\u5C4F\u95EE\u9898\u4FEE\u590D",paraId:7,tocIndex:7},{value:"2025-01-21",paraId:8,tocIndex:8},{value:"Audio \u7EC4\u4EF6\u63A2\u6D4B\u903B\u8F91\u91CD\u6784\u3001\u4F7F\u7528 useCallback \u63D0\u5347\u6027\u80FD",paraId:9,tocIndex:9},{value:"Audio \u4E0E Video \u65B0\u589E SVG icons\uFF0C\u652F\u6301\u5728 FileIcon \u7EC4\u4EF6\u4E2D\u900F\u51FA\u5C55\u793A",paraId:9,tocIndex:9},{value:"\u6587\u6863\u65B0\u589E icons \u5217\u8868\u5C55\u793A\u4E0E\u590D\u5236\u529F\u80FD",paraId:9,tocIndex:9},{value:"2025-01-07",paraId:10,tocIndex:10},{value:"\u4FEE\u590D Tooltip \u5F39\u51FA\u6846\u5185\u90E8\u6837\u5F0F\u4F18\u5148\u7EA7\u95EE\u9898",paraId:11,tocIndex:11},{value:"2025-01-04",paraId:12,tocIndex:12},{value:"Video \u7EC4\u4EF6\u6DFB\u52A0 enableFullscreen \u53C2\u6570\uFF0C\u652F\u6301\u5168\u5C4F\u64AD\u653E",paraId:13,tocIndex:13},{value:"2025-12-29",paraId:14,tocIndex:14},{value:"Carbon \u4E3B\u9898\u4FEE\u6539 ",paraId:15,tocIndex:15},{value:"colorTextOnPrimary",paraId:15,tocIndex:15},{value:" \u989C\u8272\u53D8\u91CF\u4E3A '#ffffff'",paraId:15,tocIndex:15},{value:"2025-12-25",paraId:16,tocIndex:16},{value:"AlertDialog \u7EC4\u4EF6\uFF1A\u5B9A\u4F4D\u8DDD\u79BB\u9876\u90E8\u7684\u9ED8\u8BA4\u9AD8\u5EA6\u8C03\u6574\u4E3A\u5F53\u524D\u7A97\u53E3\u9AD8\u5EA6\u7684 36%",paraId:17,tocIndex:17},{value:"Table \u7EC4\u4EF6\uFF1A\u8868\u683C\u884C hover \u80CC\u666F\u8272\u4FEE\u6539\u4E3A ",paraId:17,tocIndex:17},{value:"color-bg-layout",paraId:17,tocIndex:17},{value:" \u989C\u8272\u53D8\u91CF\uFF1B\u8868\u683C\u884C\u9009\u4E2D\u80CC\u666F\u8272\u4FEE\u6539\u4E3A ",paraId:17,tocIndex:17},{value:"color-primary-bg-hover",paraId:17,tocIndex:17},{value:" \u989C\u8272\u53D8\u91CF",paraId:17,tocIndex:17},{value:"Select \u7EC4\u4EF6\uFF1A\u591A\u9009\u6A21\u5F0F\u7684\u9009\u4E2D\u9879\u80CC\u666F\u8272\u8C03\u6574",paraId:17,tocIndex:17},{value:`\u4E3B\u9898\u8272\u53D8\u91CF\u66F4\u65B0\uFF1A
`,paraId:17,tocIndex:17},{value:"bailianDarkTheme\uFF1A\u6DFB\u52A0 ",paraId:18,tocIndex:17},{value:'"colorLinkHover": "#857DE3"',paraId:18,tocIndex:17},{value:"bailianTheme\uFF1A\u6DFB\u52A0 ",paraId:18,tocIndex:17},{value:'"colorLinkHover": "#8080FF"',paraId:18,tocIndex:17},{value:"carbonDarkTheme\uFF1A\u4FEE\u6539 ",paraId:18,tocIndex:17},{value:'"colorTextOnPrimary": "#ffffff"',paraId:18,tocIndex:17},{value:"Slider \u7EC4\u4EF6\uFF1A\u6C34\u5E73\u6ED1\u52A8\u6761\u7EC4\u4EF6\u53D6\u6D88\u9ED8\u8BA4\u5DE6\u53F3\u4E24\u8FB9\u7684\u5916\u8FB9\u8DDD margin\uFF0C\u64CD\u4F5C\u6309\u94AE handle \u5728\u6700\u5DE6\u4FA7\u4E0E\u6700\u53F3\u4FA7\u4E0D\u8D85\u51FA\u6ED1\u52A8\u8F68\u9053\u5BBD\u5EA6",paraId:19,tocIndex:18}]},20882:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:`$ npm install @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1},{value:"\u4ECE @agentscope-ai/design \u5BFC\u51FA\u7684\u6240\u6709\u540C\u540D\u7EC4\u4EF6\u5728 API \u65B9\u9762\u90FD\u4E0E antd \u7684\u5BF9\u5E94\u7EC4\u4EF6\u517C\u5BB9\uFF0C\u8FD9\u610F\u5473\u7740\u60A8\u65E0\u9700\u5B66\u4E60\u5982\u4F55\u4F7F\u7528\u5B83\u4EEC\u3002\u5982\u679C\u60A8\u60F3\u5145\u5206\u5229\u7528 Alibaba Cloud Spark Design \u7684\u65B0\u529F\u80FD\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4F7F\u7528\u8FD9\u4E9B\u7EC4\u4EF6\u800C\u4E0D\u662F antd \u7684\u7EC4\u4EF6\u3002",paraId:1,tocIndex:2},{value:"\u5982\u679C\u60A8\u60F3\u7EE7\u7EED\u4F7F\u7528 antd \u7684\u7EC4\u4EF6\uFF0C\u90A3\u4E5F\u6CA1\u95EE\u9898\u3002\u60A8\u53EA\u9700\u8981\u5C06 antd \u7684 ConfigProvider \u66FF\u6362\u4E3A @agentscope-ai/design \u7684\u5373\u53EF\u3002",paraId:2}]},45075:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:`$ npm install antd @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1}]},85646:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u5982\u679C\u60A8\u6709\u81EA\u5DF1\u7684 iconfont \u9879\u76EE\uFF0C\u53EF\u4EE5\u5C06\u60A8\u7684\u56FE\u6807\u96C6\u6210\u5230 Spark Design \u4E2D\uFF0C\u5E76\u901A\u8FC7\u7B80\u5355\u7684\u7B26\u53F7\u540D\u79F0\u8BBF\u95EE\u60A8\u7684\u56FE\u6807\u3002",paraId:0,tocIndex:0}]},31360:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:`
  `,paraId:0},{value:`
  `,paraId:0},{value:`Alibaba Cloud Spark Design \u662F\u4E00\u4E2A\u57FA\u4E8E Ant Design \u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u5305\u542B\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u573A\u666F\u7EC4\u4EF6\uFF0C\u4E13\u4E3A\u6784\u5EFA\u4F18\u79C0\u7684 LLM \u4EA7\u54C1\u800C\u8BBE\u8BA1\u3002
`,paraId:1,tocIndex:1},{value:" \u57FA\u4E8E Ant Design\uFF0C\u517C\u5BB9 Ant Design \u751F\u6001\u7CFB\u7EDF\u3002\u60A8\u53EF\u4EE5\u65E0\u9700\u4FEE\u6539\u4EE3\u7801\u5373\u53EF\u5207\u6362\u5230 Spark Design\u3002",paraId:2,tocIndex:2},{value:"\u{1F6E1} \u4F7F\u7528 TypeScript \u7F16\u5199\uFF0C\u5177\u6709\u53EF\u9884\u6D4B\u7684\u9759\u6001\u7C7B\u578B\u3002",paraId:2,tocIndex:2},{value:"\u{1F9E0} \u4E3A LLM \u4EA7\u54C1\u8BBE\u8BA1\u7684\u5404\u79CD\u573A\u666F\u7EC4\u4EF6\u3002",paraId:2,tocIndex:2},{value:"\u{1F4A1} \u4E0E@agentscope-ai/chat \u548C @agentscope-ai/flow \u914D\u5408\u4F7F\u7528\uFF0C\u6784\u5EFA\u4F01\u4E1A\u7EA7 LLM \u5E94\u7528\u3002",paraId:2,tocIndex:2},{value:"\u{1F3A8} \u591A\u79CD\u9884\u8BBE\u4E3B\u9898\u3002",paraId:2,tocIndex:2},{value:"\u2600\uFE0F \u8F7B\u677E\u5207\u6362\u660E\u6697\u6A21\u5F0F\u3002",paraId:2,tocIndex:2},{value:`npm install antd @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:3,tocIndex:3},{value:"@agentscope-ai/design \u9ED8\u8BA4\u57FA\u4E8E ES \u6A21\u5757\u652F\u6301 tree shaking",paraId:4,tocIndex:4},{value:"@agentscope-ai/chat \u4F7F\u7528 TypeScript \u7F16\u5199\u5E76\u63D0\u4F9B\u5B8C\u6574\u7684\u5B9A\u4E49\u6587\u4EF6\u3002",paraId:5,tocIndex:5},{value:"\u6211\u4EEC\u63D0\u4F9B\u56DB\u79CD\u5185\u7F6E\u4E3B\u9898\uFF1A",paraId:6,tocIndex:6},{value:" purpleTheme",paraId:0},{value:" purpleDarkTheme\uFF08\u6697\u8272\u6A21\u5F0F\uFF09",paraId:0},{value:" carbonTheme",paraId:0},{value:" carbonDarkTheme\uFF08\u6697\u8272\u6A21\u5F0F\uFF09",paraId:0},{value:"@agentscope-ai/design",paraId:7,tocIndex:7},{value:" \u548C ",paraId:7,tocIndex:7},{value:"@agentscope-ai/chat",paraId:7,tocIndex:7},{value:" \u6B63\u5728\u79EF\u6781\u63A8\u8FDB\u5F00\u6E90\uFF0C\u9884\u8BA1\u5C06\u5728 2025 \u5E74\u5E95\u5B8C\u6210\u3002\u76EE\u524D\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7 npm \u8BBF\u95EE\u6211\u4EEC\u7684\u9879\u76EE\u3002",paraId:7,tocIndex:7}]},4910:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u8BBF\u95EE ",paraId:0},{value:"Icon Library",paraId:0},{value:" \u67E5\u770B\u5168\u90E8 Icon",paraId:0}]},28204:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"Alibaba Cloud Spark Design \u63D0\u4F9B\u56DB\u79CD\u5185\u7F6E\u4E3B\u9898\uFF1A",paraId:0,tocIndex:0},{value:" purpleTheme",paraId:1},{value:" purpleDarkTheme\uFF08\u6697\u8272\u6A21\u5F0F\uFF09",paraId:1},{value:" carbonTheme",paraId:1},{value:" carbonDarkTheme\uFF08\u6697\u8272\u6A21\u5F0F\uFF09",paraId:1},{value:`import { ConfigProvider, purpleTheme } from '@agentscope-ai/design';

const App = () => {
  return <ConfigProvider {...purpleTheme}>Hello Spark Design!</ConfigProvider>;
};

export default App;
`,paraId:2,tocIndex:1},{value:"\u5982\u679C\u60A8\u5DF2\u7ECF\u6709\u4E86 Antd \u4E3B\u9898\uFF0C\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528 generateThemeByToken \u751F\u6210 spark \u98CE\u683C\u7684\u4E3B\u9898",paraId:3,tocIndex:2},{value:`import { ConfigProvider, generateThemeByToken } from '@agentscope-ai/design';
const yourToken = {
  borderRadiusXS: 2,
  borderRadiusSM: 4,
  borderRadius: 6,
  borderRadiusLG: 8,
  borderRadiusXL: 12,
  borderRadiusFull: 999,
  wireframe: false,
  colorPrimaryBg: '#F2F0FF',
  colorPrimaryBgHover: '#F2F0FF',
  colorPrimaryBorder: '#E2DEFF',
  colorPrimaryBorderHover: '#BCB5FF',
  // ... \u60A8\u53EF\u4EE5\u5728\u4E0B\u4E00\u4E2A\u6587\u6863\u4E2D\u627E\u5230\u5B8C\u6574\u7248\u672C\u7684 tokens\uFF1ATokens \u548C CSS \u53D8\u91CF
};
const darkMode = false;
const yourThemeWithSparkStyle = generateThemeByToken(yourToken, darkMode);
const App = () => {
  return (
    <ConfigProvider {...yourThemeWithSparkStyle}>
      Hello Spark Design!
    </ConfigProvider>
  );
};

export default App;
`,paraId:4,tocIndex:2},{value:"\u60A8\u4ECD\u7136\u53EF\u4EE5\u4FEE\u6539\u751F\u6210\u7684\u4E3B\u9898\uFF1A",paraId:5,tocIndex:2},{value:"yourThemeWithSparkStyle",paraId:5,tocIndex:2},{value:"\uFF0C\u4F46\u4E0D\u5EFA\u8BAE\u8FD9\u6837\u505A\u3002\u6211\u4EEC\u5EFA\u8BAE\u60A8\u4FDD\u6301\u539F\u59CB\u4E3B\u9898\u4EE5\u83B7\u5F97 Spark Design \u7684\u6700\u4F73\u4F53\u9A8C\u3002",paraId:5,tocIndex:2}]},73591:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u9664\u4E86\u6765\u81EA ",paraId:0,tocIndex:0},{value:"antd",paraId:0,tocIndex:0},{value:" \u7684\u56FA\u6709 tokens \u4E4B\u5916\uFF0CSpark Design \u5728\u539F\u6709\u57FA\u7840\u4E0A\u6269\u5C55\u4E86\u66F4\u591A\u53D8\u91CF\u3002\u5B8C\u6574\u7684 token \u793A\u4F8B\u5982\u4E0B\u6240\u793A\uFF1A",paraId:0,tocIndex:0},{value:" purpleTheme",paraId:1},{value:`{
  "borderRadiusXS": 2,
  "borderRadiusSM": 4,
  "borderRadius": 6,
  "borderRadiusLG": 8,
  "borderRadiusXL": 12,
  "borderRadiusFull": 999,
  "wireframe": false,
  "colorPrimaryBg": "rgba(97, 92, 237, 0.08)",
  "colorPrimaryBgHover": "#F2F0FF",
  "colorPrimaryBorder": "#E2DEFF",
  "colorPrimaryBorderHover": "#BCB5FF",
  "colorPrimaryHover": "#9189FA",
  "colorPrimary": "#615CED",
  "colorPrimaryActive": "#4444C7",
  "colorPrimaryTextHover": "#9189FA",
  "colorPrimaryText": "#615CED",
  "colorPrimaryTextActive": "#4444C7",
  "colorTextBase": "#26244c",
  "colorBgBase": "#FFFFFF",
  "colorText": "rgba(38, 36, 76, 0.88)",
  "colorTextSecondary": "rgba(38, 36, 76, 0.65)",
  "colorTextTertiary": "rgba(38, 36, 76, 0.45)",
  "colorTextQuaternary": "rgba(38, 36, 76, 0.25)",
  "colorBorder": "#cdd0dc",
  "colorBorderSecondary": "#e6e8ee",
  "colorFill": "#cdd0dc5c",
  "colorFillSecondary": "#cdd0dc33",
  "colorFillTertiary": "#cdd0dc26",
  "colorFillQuaternary": "#cdd0dc1a",
  "colorBgContainer": "#FFFFFF",
  "colorBgElevated": "#FFFFFF",
  "colorBgLayout": "#f9fafd",
  "colorBgSpotlight": "rgba(38, 36, 76, 0.85)",
  "colorBgMask": "rgba(20, 19, 39, 0.45)",
  "colorInfo": "#0B83F1",
  "colorInfoHover": "#5EBCFF",
  "colorInfoBorder": "#87D1FF",
  "colorInfoText": "#0B83F1",
  "colorInfoBg": "#E6F7FF",
  "colorInfoBgHover": "#B0E3FF",
  "colorInfoBorderHover": "#5EBCFF",
  "colorSuccess": "#5BB98B",
  "colorSuccessHover": "#ABD4BE",
  "colorSuccessBg": "#EBFAF0",
  "colorSuccessBgHover": "#DFEDE4",
  "colorSuccessBorder": "#D3E0D9",
  "colorSuccessBorderHover": "#ABD4BE",
  "colorWarning": "#FAAD14",
  "colorWarningHover": "#FFD666",
  "colorWarningBg": "#FFFBE6",
  "colorWarningBgHover": "#FFF1B8",
  "colorWarningBorder": "#FFE58F",
  "colorWarningBorderHover": "#FFD666",
  "colorError": "#FF4D4F",
  "colorErrorHover": "#FF7875",
  "colorErrorBg": "#FFF2F0",
  "colorErrorBgHover": "#FFF1F0",
  "colorErrorBorder": "#FFCCC7",
  "colorErrorBorderHover": "#FFA39E",
  "colorLink": "#615CED",
  "boxShadow": "0px 4px 6px 0px rgba(0, 0, 0, 0.08)",
  "boxShadowSecondary": "0px 12px 24px -16px rgba(0, 0, 0, 0.06),0px 8px 40px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)",

  "colorTextWhite": "#ffffff",
  "colorTextOnPrimary": "#ffffff",
  "colorFillDisable": "#DBDAE7",
  "colorPurple": "#615CED",
  "colorPurpleHover": "#8080FF",
  "colorPurpleBg": "rgba(226, 222, 255, 0.8)",
  "colorPink": "#EC4899",
  "colorPinkHover": "#E593BC",
  "colorPinkBg": "rgba(251, 220, 239, 0.8)",
  "colorYellow": "#EAB308",
  "colorYellowHover": "#F1D372",
  "colorYellowBg": "rgba(255, 250, 184, 0.8)",
  "colorOrange": "#FA8125",
  "colorOrangeHover": "#E88C45",
  "colorOrangeBg": "rgba(255, 232, 201, 0.8)",
  "colorTeal": "#14B8A6",
  "colorTealHover": "#5FB3A9",
  "colorTealBg": "rgba(200, 244, 233, 0.8)",
  "colorBlue": "#0090FF",
  "colorBlueHover": "#72BCF5",
  "colorBlueBg": "rgba(194, 229, 255, 0.8)",
  "colorMauve": "#8E8C99",
  "colorMauveHover": "#C0BFC8",
  "colorMauveBg": "rgba(239, 240, 243, 0.8)",
  "colorSlate": "#1E293B",
  "colorSlateHover": "#475569",
  "colorSlateBg": "#E2E8F0",
  "colorLavender": "#A77BFF",
  "colorLavenderHover": "#BB99FF",
  "colorLavenderBg": "rgba(226, 212, 255, 0.8)",

  "boxShadowTertiary": "0px 12px 32px -16px rgba(0, 0, 0, 0.24),0px 12px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)",
  "boxShadowTertiaryLeft": "-12px 0px 32px -16px rgba(0, 0, 0, 0.24),-12px 0px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)",
  "boxShadowInput": "0px 12px 24px -16px rgba(54, 54, 73, 0.04),0px 12px 40px 0px rgba(51, 51, 71, 0.08),0px 0px 1px 0px rgba(44, 44, 54, 0.02)"
}
`,paraId:2,tocIndex:0},{value:" purpleDarkTheme\uFF08\u6697\u8272\u6A21\u5F0F\uFF09",paraId:1},{value:`{
  "borderRadiusXS": 2,
  "borderRadiusSM": 4,
  "borderRadius": 6,
  "borderRadiusLG": 8,
  "borderRadiusXL": 12,
  "borderRadiusFull": 999,
  "wireframe": false,
  "colorPrimaryBg": "#202041",
  "colorPrimaryBgHover": "#202041",
  "colorPrimaryBorder": "#2B2A55",
  "colorPrimaryBorderHover": "#373476",
  "colorPrimaryHover": "#857DE3",
  "colorPrimary": "#5551CC",
  "colorPrimaryActive": "#4643A1",
  "colorPrimaryTextHover": "#857DE3",
  "colorPrimaryText": "#5551CC",
  "colorPrimaryTextActive": "#4643A1",
  "colorTextBase": "#E7E7ED",
  "colorBgBase": "#000000",
  "colorText": "rgba(231, 231, 237, 0.88)",
  "colorTextSecondary": "rgba(231, 231, 237, 0.65)",
  "colorTextTertiary": "rgba(231, 231, 237, 0.45)",
  "colorTextQuaternary": "rgba(231, 231, 237, 0.25)",
  "colorBorder": "rgba(71, 71, 97, 0.8)",
  "colorBorderSecondary": "rgba(56, 56, 76, 0.8)",
  "colorFill": "rgba(231, 231, 237, 0.18)",
  "colorFillSecondary": "rgba(231, 231, 237, 0.12)",
  "colorFillTertiary": "rgba(231, 231, 237, 0.08)",
  "colorFillQuaternary": "rgba(231, 231, 237, 0.04)",
  "colorBgContainer": "#0F0F14",
  "colorBgElevated": "#0F0F14",
  "colorBgLayout": "#0F0F14",
  "colorBgSpotlight": "rgba(71, 71, 97, 0.85)",
  "colorBgMask": "rgba(5, 5, 8, 0.8)",
  "colorInfo": "#0B83F1",
  "colorInfoHover": "rgba(42, 114, 165, 1)",
  "colorInfoBorder": "rgba(135, 209, 255, 0.2)",
  "colorInfoText": "#0B83F1",
  "colorInfoBg": "rgba(27, 73, 115, 0.25)",
  "colorInfoBgHover": "rgba(27, 73, 115, 0.32)",
  "colorInfoBorderHover": "rgba(94, 188, 255, 0.2)",
  "colorSuccess": "#5BB98B",
  "colorSuccessHover": "rgba(87, 141, 112, 1)",
  "colorSuccessBg": "rgba(0, 50, 26, 0.25)",
  "colorSuccessBgHover": "rgba(0, 50, 26, 0.32)",
  "colorSuccessBorder": "rgba(211, 224, 217, 0.2)",
  "colorSuccessBorderHover": "rgba(171, 212, 190, 0.2)",
  "colorWarning": "#FAAD14",
  "colorWarningHover": "rgba(170, 136, 43, 1)",
  "colorWarningBg": "rgba(129, 116, 49, 0.25)",
  "colorWarningBgHover": "rgba(129, 116, 49, 0.32)",
  "colorWarningBorder": "rgba(255, 229, 143, 0.2)",
  "colorWarningBorderHover": "rgba(255, 214, 102, 0.2)",
  "colorError": "#FF4D4F",
  "colorErrorHover": "rgba(165, 50, 48, 1)",
  "colorErrorBg": "rgba(129, 46, 46, 0.25)",
  "colorErrorBgHover": "rgba(129, 46, 46, 0.32)",
  "colorErrorBorder": "rgba(255, 204, 199, 0.2)",
  "colorErrorBorderHover": "rgba(255, 163, 158, 0.2)",
  "colorLink": "#5551CC",
  "boxShadow": "0px 4px 6px 0px rgba(255, 255, 255, 0.08)",
  "boxShadowSecondary": "0px 12px 24px -16px rgba(255, 255, 255, 0.04),0px 8px 40px 0px rgba(255, 255, 255, 0.06),0px 0px 1px 0px rgba(255, 255, 255, 0.02)",

 "colorTextWhite": "#fff",
 "colorTextOnPrimary": "#fff",
  "colorFillDisable": "#8D8C98",
  "colorPurple": "#5551CC",
  "colorPurpleHover": "#8383F0",
  "colorPurpleBg": "rgba(226, 222, 255, 0.2)",
  "colorPink": "#EC4899",
  "colorPinkHover": "#E494BC",
  "colorPinkBg": "rgba(251, 220, 239, 0.2)",
  "colorYellow": "#EAB308",
  "colorYellowHover": "#DBBE62",
  "colorYellowBg": "rgba(255, 250, 184, 0.2)",
  "colorOrange": "#FA8125",
  "colorOrangeHover": "#F7A25F",
  "colorOrangeBg": "rgba(255, 232, 201, 0.2)",
  "colorTeal": "#14B8A6",
  "colorTealHover": "#7BC7BE",
  "colorTealBg": "rgba(200, 244, 233, 0.2)",
  "colorBlue": "#0090FF",
  "colorBlueHover": "#83BFED",
  "colorBlueBg": "rgba(194, 229, 255, 0.2)",
  "colorMauve": "#8E8C99",
  "colorMauveHover": "#BBB8CA",
  "colorMauveBg": "rgba(239, 240, 243, 0.2)",
 "colorSlate": "#2C3A50",
  "colorSlateHover": "#354252",
  "colorSlateBg": "#232B36",
  "colorLavender": "#A77BFF",
  "colorLavenderHover": "#BFA5F3",
  "colorLavenderBg": "rgba(150, 143, 167, 0.48)",

  "boxShadowTertiary": "0px 12px 32px -16px rgba(255, 255, 255, 0.16),0px 12px 60px 0px rgba(255, 255, 255, 0.08),0px 0px 1px 0px rgba(255, 255, 255, 0.02)",
  "boxShadowTertiaryLeft": "-12px 0px 32px -16px rgba(255, 255, 255, 0.16),-12px 0px 60px 0px rgba(255, 255, 255, 0.08),0px 0px 1px 0px rgba(255, 255, 255, 0.02);",
  "boxShadowInput": "0px 12px 24px -16px rgba(255, 255, 255, 0.08),0px 12px 40px 0px rgba(255, 255, 255, 0.16),0px 0px 1px 0px rgba(255, 255, 255, 0.04)"
}

`,paraId:3,tocIndex:0},{value:" carbonTheme",paraId:1},{value:`{
  "borderRadiusXS": 2,
  "borderRadiusSM": 4,
  "borderRadius": 6,
  "borderRadiusLG": 8,
  "borderRadiusXL": 12,
  "borderRadiusFull": 999,
  "wireframe": false,
  "colorPrimaryBg": "rgba(244, 244, 247, 1)",
  "colorPrimaryBgHover": "rgba(239, 239, 244, 1)",
  "colorPrimaryBorder": "rgba(62, 63, 66, 1)",
  "colorPrimaryBorderHover": "rgba(130, 132, 137, 1)",
  "colorPrimaryHover": "rgba(38, 38, 41, 1)",
  "colorPrimary": "rgba(26, 26, 29, 1)",
  "colorPrimaryActive": "rgba(0, 0, 0, 1)",
  "colorPrimaryTextHover": "rgba(38, 38, 41, 1)",
  "colorPrimaryText": "rgba(26, 26, 29, 1)",
  "colorPrimaryTextActive": "rgba(0, 0, 0, 1)",
  "colorTextBase": "rgba(26, 26, 29, 1)",
  "colorBgBase": "rgba(255, 255, 255, 1)",
  "colorText": "rgba(26, 26, 29, 0.88)",
  "colorTextSecondary": "rgba(26, 26, 29, 0.65)",
  "colorTextTertiary": "rgba(26, 26, 29, 0.45)",
  "colorTextQuaternary": "rgba(26, 26, 29, 0.25)",
  "colorBorder": "rgba(187, 187, 193, 1)",
  "colorBorderSecondary": "rgba(234, 234, 234, 1)",
  "colorFill": "rgba(0, 0, 43, 0.06)",
  "colorFillSecondary": "rgba(0, 0, 85, 0.03)",
  "colorFillTertiary": "rgba(205, 208, 220, 0.15)",
  "colorFillQuaternary": "rgba(205, 208, 220, 0.1)",
  "colorBgContainer": "rgba(255, 255, 255, 1)",
  "colorBgElevated": "rgba(255, 255, 255, 1)",
  "colorBgLayout": "rgba(250, 250, 251, 1)",
  "colorBgSpotlight": "rgba(26, 26, 29, 0.85)",
  "colorBgMask": "rgba(0, 0, 0, 0.45)",
  "colorInfo": "rgba(11, 131, 241, 1)",
  "colorInfoHover": "rgba(94, 188, 255, 1)",
  "colorInfoBorder": "rgba(135, 209, 255, 1)",
  "colorInfoText": "rgba(11, 131, 241, 1)",
  "colorInfoBg": "rgba(230, 247, 255, 1)",
  "colorInfoBgHover": "rgba(176, 227, 255, 1)",
  "colorInfoBorderHover": "rgba(94, 188, 255, 1)",
  "colorSuccess": "rgba(91, 185, 139, 1)",
  "colorSuccessHover": "rgba(171, 212, 190, 1)",
  "colorSuccessBg": "rgba(235, 250, 240, 1)",
  "colorSuccessBgHover": "rgba(223, 237, 228, 1)",
  "colorSuccessBorder": "rgba(211, 224, 217, 1)",
  "colorSuccessBorderHover": "rgba(171, 212, 190, 1)",
  "colorWarning": "rgba(250, 173, 20, 1)",
  "colorWarningHover": "rgba(255, 214, 102, 1)",
  "colorWarningBg": "rgba(255, 251, 230, 1)",
  "colorWarningBgHover": "rgba(255, 241, 184, 1)",
  "colorWarningBorder": "rgba(255, 229, 143, 1)",
  "colorWarningBorderHover": "rgba(255, 214, 102, 1)",
  "colorError": "rgba(255, 77, 79, 1)",
  "colorErrorHover": "rgba(255, 120, 117, 1)",
  "colorErrorBg": "rgba(255, 242, 240, 1)",
  "colorErrorBgHover": "rgba(255, 241, 240, 1)",
  "colorErrorBorder": "rgba(255, 204, 199, 1)",
  "colorErrorBorderHover": "rgba(255, 163, 158, 1)",
  "colorLink": "rgba(0, 77, 255, 1)",
  "boxShadow": "0px 4px 6px 0px rgba(0, 0, 0, 0.08)",
  "boxShadowSecondary": "0px 12px 24px -16px rgba(0, 0, 0, 0.06),0px 8px 40px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)",

  "colorTextWhite": "#ffffff",
  "colorTextOnPrimary": "#ffffff",
  "colorFillDisable": "rgba(232, 232, 235, 1)",
  "colorPurple": "rgba(97, 92, 237, 1)",
  "colorPurpleHover": "#8080FF",
  "colorPurpleBg": "rgba(226, 222, 255, 0.8)",
  "colorPink": "rgba(236, 72, 153, 1)",
  "colorPinkHover": "#E593BC",
  "colorPinkBg": "rgba(251, 220, 239, 0.8)",
  "colorYellow": "rgba(234, 179, 8, 1)",
  "colorYellowHover": "#F1D372",
  "colorYellowBg": "rgba(255, 250, 184, 0.8)",
  "colorOrange": "rgba(250, 129, 37, 1)",
  "colorOrangeHover": "#E88C45",
  "colorOrangeBg": "rgba(255, 232, 201, 0.8)",
  "colorTeal": "rgba(20, 184, 166, 1)",
  "colorTealHover": "#5FB3A9",
  "colorTealBg": "rgba(200, 244, 233, 0.8)",
  "colorBlue": "rgba(0, 144, 255, 1)",
  "colorBlueHover": "#72BCF5",
  "colorBlueBg": "rgba(194, 229, 255, 0.8)",
  "colorMauve": "rgba(142, 140, 153, 1)",
  "colorMauveHover": "#C0BFC8",
  "colorMauveBg": "rgba(239, 240, 243, 0.8)",
  "colorSlate": "#2C3A50",
  "colorSlateHover": "#354252",
  "colorSlateBg": "#232B36",
  "boxShadowTertiary": "0px 12px 32px -16px rgba(0, 0, 0, 0.24),0px 12px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)",
  "boxShadowTertiaryLeft": "-12px 0px 32px -16px rgba(0, 0, 0, 0.24),-12px 0px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)",
  "boxShadowInput": "0px 12px 24px -16px rgba(54, 54, 73, 0.04),0px 12px 40px 0px rgba(51, 51, 71, 0.08),0px 0px 1px 0px rgba(44, 44, 54, 0.02)"
}

`,paraId:4,tocIndex:0},{value:" carbonDarkTheme",paraId:1},{value:`{
  "borderRadiusXS": 2,
  "borderRadiusSM": 4,
  "borderRadius": 6,
  "borderRadiusLG": 8,
  "borderRadiusXL": 12,
  "borderRadiusFull": 999,
  "wireframe": false,
  "colorPrimaryBg": "#181818",
  "colorPrimaryBgHover": "#2E2E2E",
  "colorPrimaryBorder": "#323232",
  "colorPrimaryBorderHover": "#2C2C2C",
  "colorPrimaryHover": "#DFDFDF",
  "colorPrimary": "#E4E4E4",
  "colorPrimaryActive": "#7E7E7E",
  "colorPrimaryTextHover": "#909090",
  "colorPrimaryText": "#676767",
  "colorPrimaryTextActive": "#959595",
  "colorTextBase": "#E7E7ED",
  "colorBgBase": "#0A0A0B",
  "colorText": "#E7E7EDC7",
  "colorTextSecondary": "#E7E7EDA6",
  "colorTextTertiary": "#E7E7ED73",
  "colorTextQuaternary": "#E7E7ED40",
  "colorBorder": "#5B5B5BCC",
  "colorBorderSecondary": "#323232CC",
  "colorFill": "#E7E7ED2E",
  "colorFillSecondary": "#E7E7ED1F",
  "colorFillTertiary": "#E7E7ED14",
  "colorFillQuaternary": "#E7E7ED0A",
  "colorBgContainer": "#121212",
  "colorBgElevated": "#212121",
  "colorBgLayout": "#141414",
  "colorBgSpotlight": "#525252D9",
  "colorBgMask": "#050508CC",
  "colorInfo": "#0B83F1",
  "colorInfoHover": "#5EBCFF",
  "colorInfoBorder": "#3990C9",
  "colorInfoText": "#0B83F1",
  "colorInfoBg": "#112233",
  "colorInfoBgHover": "#264866",
  "colorInfoBorderHover": "#5EBCFF",
  "colorSuccess": "#5BB98B",
  "colorSuccessHover": "#74A47C",
  "colorSuccessBg": "#293631",
  "colorSuccessBgHover": "#3F5147",
  "colorSuccessBorder": "#73A377",
  "colorSuccessBorderHover": "#ABD4BE",
  "colorWarning": "#FAAD14",
  "colorWarningHover": "#FF8C28",
  "colorWarningBg": "#2D231A",
  "colorWarningBgHover": "#4D3B23",
  "colorWarningBorder": "#FFA628",
  "colorWarningBorderHover": "#FFD666",
  "colorError": "#FF4D4F",
  "colorErrorHover": "#EE654E",
  "colorErrorBg": "#2B0B08",
  "colorErrorBgHover": "#4A2A28",
  "colorErrorBorder": "#EE5B4E",
  "colorErrorBorderHover": "#FFA39E",
  "colorLink": "#4D7DFF",
  "boxShadow": "0px 4px 6px 0px rgba(255, 255, 255, 0.08)",
  "boxShadowSecondary": "0px 12px 24px -16px rgba(255, 255, 255, 0.06),0px 8px 40px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)",

 "colorTextWhite": "#ffffff",
 "colorTextBlack": "#000000",
 "colorTextOnPrimary": "#ffffff",
  "colorFillDisable": "#898989",
  "colorPurple": "#615CED",
  "colorPurpleHover": "#8383F0",
  "colorPurpleBg": "#6964877A",
  "colorPink": "#EC4899",
  "colorPinkHover": "#E494BC",
  "colorPinkBg": "#53424D7A",
  "colorYellow": "#EAB308",
  "colorYellowHover": "#DBBE62",
  "colorYellowBg": "#9585527A",
  "colorOrange": "#FA8125",
  "colorOrangeHover": "#F7A25F",
  "colorOrangeBg": "#6F58417A",
  "colorTeal": "#14B8A6",
  "colorTealHover": "#7BC7BE",
  "colorTealBg": "#4658547A",
  "colorBlue": "#0090FF",
  "colorBlueHover": "#83BFED",
  "colorBlueBg": "#5E76897A",
  "colorMauve": "#8E8C99",
  "colorMauveHover": "#BBB8CA",
  "colorMauveBg": "#5859647A",
  "colorSlate": "#2C3A50",
  "colorSlateHover": "#354252",
  "colorSlateBg": "#232B36",
  "colorLavender": "#A77BFF",
  "colorLavenderHover": "#BFA5F3",
  "colorLavenderBg": "rgba(150, 143, 167, 0.48)",

  "boxShadowTertiary": "0px 12px 32px -16px rgba(255, 255, 255, 0.24),0px 12px 60px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)",
  "boxShadowTertiaryLeft": "-12px 0px 32px -16px rgba(255, 255, 255, 0.24),-12px 0px 60px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)",
  "boxShadowInput": "0px 12px 24px -16px rgba(255, 255, 255, 0.08),0px 12px 40px 0px rgba(255, 255, 255, 0.16),0px 0px 1px 0px rgba(255, 255, 255, 0.04)"

}
`,paraId:5,tocIndex:0},{value:"Spark Design \u9ED8\u8BA4\u542F\u7528 cssVar \u6A21\u5F0F\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u5229\u7528 \u4ECE token \u6D3E\u751F\u51FA\u7684 CSS \u53D8\u91CF\u6765\u6784\u5EFA\u81EA\u5DF1\u7684\u6837\u5F0F\u3002",paraId:6,tocIndex:1},{value:`.example {
  background: var(--sps-color-bg-base);
  color: var(--sps-color-pink);
}
// \u63D0\u793A\uFF1A\u60A8\u53EF\u4EE5\u5C06 'sps' \u66FF\u6362\u4E3A\u60A8\u81EA\u5DF1\u7684\u524D\u7F00
`,paraId:7,tocIndex:1}]},72681:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u4E3A\u4E86\u8BA9 Cursor \u548C Claude Code \u7B49\u5DE5\u5177\u7406\u89E3 Spark Design\uFF0C\u6211\u4EEC\u652F\u6301 LLMs.txt \u6587\u4EF6\uFF0C\u4F7F Spark Design \u7684\u6587\u6863\u53EF\u4F9B\u5927\u578B\u8BED\u8A00\u6A21\u578B\u4F7F\u7528\u3002",paraId:0,tocIndex:1},{value:"index.llms.txt",paraId:1,tocIndex:1},{value:"\uFF1A\u4E3B\u8981\u7684 LLMs.txt \u7D22\u5F15\u6587\u4EF6",paraId:1,tocIndex:1},{value:"all.llms.txt",paraId:1,tocIndex:1},{value:"\uFF1ASpark Design \u7684\u5B8C\u6574\u6587\u6863",paraId:1,tocIndex:1},{value:"\u5728 Cursor \u4E2D\u4F7F\u7528 @Docs \u529F\u80FD\u5C06 LLMs.txt \u6587\u4EF6\u5305\u542B\u5728\u60A8\u7684\u9879\u76EE\u4E2D\u3002",paraId:2,tocIndex:1},{value:"\u4E86\u89E3\u66F4\u591A",paraId:2,tocIndex:1},{value:"\u5728\u524D\u7AEF\u4F7F\u7528 Alibaba Cloud Spark Design\u3001\u8BBE\u8BA1\u7A3F\u4F7F\u7528 Spark Design \u5957\u4EF6\u7684\u524D\u63D0\u4E0B\uFF0C\u901A\u8FC7 masterGo \u89C6\u89C9\u7A3F\u751F\u6210\u4EE3\u7801\u53EF\u4EE5\u505A\u5230\u4EE5\u4E0B\u51E0\u70B9\uFF1A",paraId:3,tocIndex:2},{value:"\u51C6\u786E\u8BC6\u522B icon",paraId:4,tocIndex:2},{value:"\u4F7F\u7528\u6807\u51C6 css token",paraId:4,tocIndex:2},{value:"\u65E0\u9700\u6D4B\u91CF\u95F4\u8DDD\u3001\u5706\u89D2\u7B49\u6570\u636E\uFF0CAI \u76F4\u63A5\u8FD8\u539F\u5E03\u5C40\uFF0890%\u4EE5\u4E0A\u6982\u7387\u51C6\u786E\u751F\u6210\uFF09",paraId:4,tocIndex:2},{value:"\u4F7F\u7528\u6807\u51C6\u7EC4\u4EF6\u8FD8\u539F\u9875\u9762\uFF0C\u5927\u90E8\u5206\u6807\u51C6\u7EC4\u4EF6\u53EF\u4E00\u6B21\u6027\u6B63\u786E\u751F\u6210\uFF0C\u65E0\u9700\u4E8C\u6B21\u8C03\u6574",paraId:4,tocIndex:2},{value:"\u6211\u4EEC\u4F1A\u5728\u4E0D\u4E45\u7684\u5C06\u6765\u5F00\u653E masterGo \u7684\u8BBE\u8BA1\u5957\u4EF6\u548C rules\uFF0C\u5E2E\u52A9\u60A8\u9AD8\u6548\u7387\u8FD8\u539F\u89C6\u89C9\u7A3F",paraId:5,tocIndex:2}]},64901:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[]}}]);
