(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[2579],{9541:function(o,n,e){"use strict";var r;e.r(n),e.d(n,{demos:function(){return b}});var i=e(90228),t=e.n(i),c=e(26068),d=e.n(c),s=e(48305),p=e.n(s),D=e(87999),I=e.n(D),l=e(75271),T=e(88105),B=e(28681),S=e(33404),b={"docs-guide-from-antd-demo-zh-cn-0":{component:l.memo(l.lazy(I()(t()().mark(function h(){var u,m,v,x,_,g,P,A,f,O,C,F,M,L,H,k;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(9569),e.e(9410),e.e(3729),e.e(1629),e.e(4088),e.e(3061)]).then(e.bind(e,53061));case 2:return u=a.sent,m=u.Button,v=u.Image,x=u.ConfigProvider,_=u.purpleDarkTheme,g=u.purpleTheme,a.next=10,Promise.resolve().then(e.bind(e,88105));case 10:return P=a.sent,A=P.SparkSunLine,f=P.SparkMoonLine,a.next=15,Promise.resolve().then(e.bind(e,28681));case 15:return O=a.sent,C=O.Flex,a.next=19,Promise.resolve().then(e.bind(e,33404));case 19:return F=a.sent,M=F.default,a.next=23,Promise.resolve().then(e.t.bind(e,75271,19));case 23:return L=a.sent,H=L.useState,k=function(){var U=H("light"),R=p()(U,2),y=R[0],$=R[1],j=y==="light"?g:_,E="sps";return l.createElement(x,d()(d()({},j),{},{prefix:E,prefixCls:E,iconfont:"//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js",locale:M,style:{width:"100%",height:"100%"}}),l.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(E,"-color-bg-base)")}},l.createElement(C,{vertical:!0,gap:16,align:"center",style:{padding:"12px 0"}},l.createElement(v,{width:120,src:"https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"}),l.createElement("div",{style:{color:"var(--".concat(E,"-ant-color-text-base)"),fontSize:"24px",textAlign:"center"}},"Hello Spark Design!"),l.createElement(m,{type:"primary",onClick:function(){$(y==="light"?"dark":"light")},icon:y==="light"?l.createElement(f,null):l.createElement(A,null)},y==="light"?"\u6697\u8272":"\u4EAE\u8272"," \u6A21\u5F0F"))))},a.abrupt("return",{default:k});case 27:case"end":return a.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-guide-from-antd-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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

export default App;`},"@agentscope-ai/icons":{type:"NPM",value:"1.0.35"},antd:{type:"NPM",value:"5.24.9"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@agentscope-ai/icons":T,antd:B,"antd/locale/zh_CN":S,react:r||(r=e.t(l,2))},renderOpts:{compile:function(){var h=I()(t()().mark(function m(){var v,x=arguments;return t()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(9596).then(e.bind(e,79596));case 2:return g.abrupt("return",(v=g.sent).default.apply(v,x));case 3:case"end":return g.stop()}},m)}));function u(){return h.apply(this,arguments)}return u}()}},"docs-guide-from-antd-demo-zh-cn-1":{component:l.memo(l.lazy(I()(t()().mark(function h(){var u,m,v,x,_,g,P,A,f,O,C,F,M,L,H,k;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(9569),e.e(9410),e.e(3729),e.e(1629),e.e(4088),e.e(3061)]).then(e.bind(e,53061));case 2:return u=a.sent,m=u.ConfigProvider,v=u.purpleDarkTheme,x=u.purpleTheme,a.next=8,Promise.resolve().then(e.bind(e,28681));case 8:return _=a.sent,g=_.Button,P=_.Image,A=_.Flex,a.next=14,Promise.resolve().then(e.bind(e,88105));case 14:return f=a.sent,O=f.SparkSunLine,C=f.SparkMoonLine,a.next=19,Promise.resolve().then(e.bind(e,33404));case 19:return F=a.sent,M=F.default,a.next=23,Promise.resolve().then(e.t.bind(e,75271,19));case 23:return L=a.sent,H=L.useState,k=function(){var U=H("light"),R=p()(U,2),y=R[0],$=R[1],j=y==="light"?x:v,E="sps";return l.createElement(m,d()(d()({},j),{},{prefix:E,prefixCls:E,iconfont:"//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js",locale:M,style:{width:"100%",height:"100%"}}),l.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(E,"-color-bg-base)")}},l.createElement(A,{vertical:!0,gap:16,align:"center",style:{padding:"12px 0"}},l.createElement(P,{width:120,src:"https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"}),l.createElement("div",{style:{color:"var(--".concat(E,"-ant-color-text-base)"),fontSize:"24px",textAlign:"center"}},"Hello Spark Design!"),l.createElement(g,{type:"primary",onClick:function(){$(y==="light"?"dark":"light")},icon:y==="light"?l.createElement(C,null):l.createElement(O,null)},y==="light"?"\u6697\u8272":"\u4EAE\u8272"," \u6A21\u5F0F"))))},a.abrupt("return",{default:k});case 27:case"end":return a.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-guide-from-antd-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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

export default App;`},antd:{type:"NPM",value:"5.24.9"},"@agentscope-ai/icons":{type:"NPM",value:"1.0.35"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:B,"@agentscope-ai/icons":T,"antd/locale/zh_CN":S,react:r||(r=e.t(l,2))},renderOpts:{compile:function(){var h=I()(t()().mark(function m(){var v,x=arguments;return t()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(9596).then(e.bind(e,79596));case 2:return g.abrupt("return",(v=g.sent).default.apply(v,x));case 3:case"end":return g.stop()}},m)}));function u(){return h.apply(this,arguments)}return u}()}}}},97110:function(o,n,e){"use strict";var r;e.r(n),e.d(n,{demos:function(){return b}});var i=e(90228),t=e.n(i),c=e(26068),d=e.n(c),s=e(48305),p=e.n(s),D=e(87999),I=e.n(D),l=e(75271),T=e(88105),B=e(28681),S=e(33404),b={"docs-guide-from-scratch-demo-zh-cn-0":{component:l.memo(l.lazy(I()(t()().mark(function h(){var u,m,v,x,_,g,P,A,f,O,C,F,M,L,H,k;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(9569),e.e(9410),e.e(3729),e.e(1629),e.e(4088),e.e(3061)]).then(e.bind(e,53061));case 2:return u=a.sent,m=u.Button,v=u.Image,x=u.ConfigProvider,_=u.purpleDarkTheme,g=u.purpleTheme,a.next=10,Promise.resolve().then(e.bind(e,88105));case 10:return P=a.sent,A=P.SparkSunLine,f=P.SparkMoonLine,a.next=15,Promise.resolve().then(e.bind(e,28681));case 15:return O=a.sent,C=O.Flex,a.next=19,Promise.resolve().then(e.bind(e,33404));case 19:return F=a.sent,M=F.default,a.next=23,Promise.resolve().then(e.t.bind(e,75271,19));case 23:return L=a.sent,H=L.useState,k=function(){var U=H("light"),R=p()(U,2),y=R[0],$=R[1],j=y==="light"?g:_,E="sps";return l.createElement(x,d()(d()({},j),{},{prefix:E,prefixCls:E,iconfont:"//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js",locale:M,style:{width:"100%",height:"100%"}}),l.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(E,"-color-bg-base)")}},l.createElement(C,{vertical:!0,gap:16,align:"center",style:{padding:"12px 0"}},l.createElement(v,{width:120,src:"https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"}),l.createElement("div",{style:{color:"var(--".concat(E,"-ant-color-text-base)"),fontSize:"24px",textAlign:"center"}},"Hello Spark Design!"),l.createElement(m,{type:"primary",onClick:function(){$(y==="light"?"dark":"light")},icon:y==="light"?l.createElement(f,null):l.createElement(A,null)},y==="light"?"\u6697\u8272":"\u4EAE\u8272"," \u6A21\u5F0F"))))},a.abrupt("return",{default:k});case 27:case"end":return a.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-guide-from-scratch-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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

export default App;`},"@agentscope-ai/icons":{type:"NPM",value:"1.0.35"},antd:{type:"NPM",value:"5.24.9"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@agentscope-ai/icons":T,antd:B,"antd/locale/zh_CN":S,react:r||(r=e.t(l,2))},renderOpts:{compile:function(){var h=I()(t()().mark(function m(){var v,x=arguments;return t()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(9596).then(e.bind(e,79596));case 2:return g.abrupt("return",(v=g.sent).default.apply(v,x));case 3:case"end":return g.stop()}},m)}));function u(){return h.apply(this,arguments)}return u}()}}}},7673:function(o,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return l}});var r=e(90228),i=e.n(r),t=e(26068),c=e.n(t),d=e(87999),s=e.n(d),p=e(75271),D=e(28681),I=e(33404),l={"docs-guide-iconfont-demo-zh-cn-0":{component:p.memo(p.lazy(s()(i()().mark(function T(){var B,S,b,h,u,m,v,x,_,g,P;return i()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(9569),e.e(9410),e.e(3729),e.e(1629),e.e(4088),e.e(3061)]).then(e.bind(e,53061));case 2:return B=f.sent,S=B.ConfigProvider,b=B.purpleTheme,h=B.Button,u=B.IconFont,m=B.IconButton,f.next=10,Promise.resolve().then(e.bind(e,28681));case 10:return v=f.sent,x=v.Flex,f.next=14,Promise.resolve().then(e.bind(e,33404));case 14:return _=f.sent,g=_.default,P=function(){var C="sps",F="spark-effciency-line",M="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js";return p.createElement(S,c()(c()({},b),{},{prefix:C,prefixCls:C,iconfont:M,locale:g,style:{width:"100%",height:"100%"}}),p.createElement(x,{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(C,"-color-bg-base)")},justify:"center",align:"center"},p.createElement(x,{vertical:!0,gap:16,style:{width:"300px",padding:"12px 0"}},p.createElement(x,{gap:8},p.createElement("div",{style:{width:"100px",lineHeight:"32px"}},"IconFont:"),p.createElement(u,{type:F})),p.createElement(x,{gap:8},p.createElement("div",{style:{width:"100px",lineHeight:"32px"}},"Button:"),p.createElement(h,{type:"primary",iconType:F},"\u6DFB\u52A0\u7528\u6237")),p.createElement(x,{gap:8},p.createElement("div",{style:{width:"100px",lineHeight:"32px"}},"IconButton:"),p.createElement(m,{iconType:F})))))},f.abrupt("return",{default:P});case 18:case"end":return f.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-guide-iconfont-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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

export default App;`},antd:{type:"NPM",value:"5.24.9"}},entry:"index.tsx"},context:{antd:D,"antd/locale/zh_CN":I},renderOpts:{compile:function(){var T=s()(i()().mark(function S(){var b,h=arguments;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(9596).then(e.bind(e,79596));case 2:return m.abrupt("return",(b=m.sent).default.apply(b,h));case 3:case"end":return m.stop()}},S)}));function B(){return T.apply(this,arguments)}return B}()}}}},38305:function(o,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return i}});var r=e(75271),i={}},97913:function(o,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return p}});var r=e(90228),i=e.n(r),t=e(87999),c=e.n(t),d=e(75271),s=e(88105),p={"docs-guide-spark-icons-demo-usage":{component:d.memo(d.lazy(function(){return e.e(2433).then(e.bind(e,21634))})),asset:{type:"BLOCK",id:"docs-guide-spark-icons-demo-usage",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(59905).Z},"@agentscope-ai/icons":{type:"NPM",value:"1.0.35"}},entry:"index.tsx",title:"\u57FA\u672C\u7528\u6CD5"},context:{"@agentscope-ai/icons":s},renderOpts:{compile:function(){var D=c()(i()().mark(function l(){var T,B=arguments;return i()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(9596).then(e.bind(e,79596));case 2:return b.abrupt("return",(T=b.sent).default.apply(T,B));case 3:case"end":return b.stop()}},l)}));function I(){return D.apply(this,arguments)}return I}()}}}},4128:function(o,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return i}});var r=e(75271),i={}},94151:function(o,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return i}});var r=e(75271),i={}},93627:function(o,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return i}});var r=e(75271),i={}},17084:function(o,n,e){"use strict";var r=e(26538).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e(83045)),t=n.default=i.default},83045:function(o,n,e){"use strict";var r=e(26538).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e(32593)),t=r(e(39291));const c={lang:Object.assign({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},i.default),timePickerLocale:Object.assign({},t.default)};c.lang.ok="\u786E\u5B9A";var d=n.default=c},45017:function(o,n,e){"use strict";var r=e(26538).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e(22659)),t=r(e(17084)),c=r(e(83045)),d=r(e(39291));const s="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",p={locale:"zh-cn",Pagination:i.default,DatePicker:c.default,TimePicker:d.default,Calendar:t.default,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckAll:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",emptyText:"\u6682\u65E0\u6570\u636E",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",deselectAll:"\u53D6\u6D88\u5168\u9009",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00",collapse:"\u6536\u8D77"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:s,method:s,array:s,object:s,number:s,date:s,boolean:s,integer:s,float:s,regexp:s,email:s,url:s,hex:s},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0",scanned:"\u5DF2\u626B\u63CF"},ColorPicker:{presetEmpty:"\u6682\u65E0",transparent:"\u65E0\u8272",singleColor:"\u5355\u8272",gradientColor:"\u6E10\u53D8\u8272"}};var D=n.default=p},39291:function(o,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;const e={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]};var r=n.default=e},33404:function(o,n,e){o.exports=e(45017)},9206:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:`$ npm install @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1},{value:"\u4ECE @agentscope-ai/design \u5BFC\u51FA\u7684\u6240\u6709\u540C\u540D\u7EC4\u4EF6\u5728 API \u65B9\u9762\u90FD\u4E0E antd \u7684\u5BF9\u5E94\u7EC4\u4EF6\u517C\u5BB9\uFF0C\u8FD9\u610F\u5473\u7740\u60A8\u65E0\u9700\u5B66\u4E60\u5982\u4F55\u4F7F\u7528\u5B83\u4EEC\u3002\u5982\u679C\u60A8\u60F3\u5145\u5206\u5229\u7528 Alibaba Cloud Spark Design \u7684\u65B0\u529F\u80FD\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4F7F\u7528\u8FD9\u4E9B\u7EC4\u4EF6\u800C\u4E0D\u662F antd \u7684\u7EC4\u4EF6\u3002",paraId:1,tocIndex:2},{value:"\u5982\u679C\u60A8\u60F3\u7EE7\u7EED\u4F7F\u7528 antd \u7684\u7EC4\u4EF6\uFF0C\u90A3\u4E5F\u6CA1\u95EE\u9898\u3002\u60A8\u53EA\u9700\u8981\u5C06 antd \u7684 ConfigProvider \u66FF\u6362\u4E3A @agentscope-ai/design \u7684\u5373\u53EF\u3002",paraId:2}]},29825:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:`$ npm install antd @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1}]},18165:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"\u5982\u679C\u60A8\u6709\u81EA\u5DF1\u7684 iconfont \u9879\u76EE\uFF0C\u53EF\u4EE5\u5C06\u60A8\u7684\u56FE\u6807\u96C6\u6210\u5230 Spark Design \u4E2D\uFF0C\u5E76\u901A\u8FC7\u7B80\u5355\u7684\u7B26\u53F7\u540D\u79F0\u8BBF\u95EE\u60A8\u7684\u56FE\u6807\u3002",paraId:0,tocIndex:0}]},75124:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:`
  `,paraId:0},{value:`
  `,paraId:0},{value:`Alibaba Cloud Spark Design \u662F\u4E00\u4E2A\u57FA\u4E8E Ant Design \u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u5305\u542B\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u573A\u666F\u7EC4\u4EF6\uFF0C\u4E13\u4E3A\u6784\u5EFA\u4F18\u79C0\u7684 LLM \u4EA7\u54C1\u800C\u8BBE\u8BA1\u3002
`,paraId:1,tocIndex:1},{value:" \u57FA\u4E8E Ant Design\uFF0C\u517C\u5BB9 Ant Design \u751F\u6001\u7CFB\u7EDF\u3002\u60A8\u53EF\u4EE5\u65E0\u9700\u4FEE\u6539\u4EE3\u7801\u5373\u53EF\u5207\u6362\u5230 Spark Design\u3002",paraId:2,tocIndex:2},{value:"\u{1F6E1} \u4F7F\u7528 TypeScript \u7F16\u5199\uFF0C\u5177\u6709\u53EF\u9884\u6D4B\u7684\u9759\u6001\u7C7B\u578B\u3002",paraId:2,tocIndex:2},{value:"\u{1F9E0} \u4E3A LLM \u4EA7\u54C1\u8BBE\u8BA1\u7684\u5404\u79CD\u573A\u666F\u7EC4\u4EF6\u3002",paraId:2,tocIndex:2},{value:"\u{1F4A1} \u4E0E@agentscope-ai/chat \u548C @agentscope-ai/flow \u914D\u5408\u4F7F\u7528\uFF0C\u6784\u5EFA\u4F01\u4E1A\u7EA7 LLM \u5E94\u7528\u3002",paraId:2,tocIndex:2},{value:"\u{1F3A8} \u591A\u79CD\u9884\u8BBE\u4E3B\u9898\u3002",paraId:2,tocIndex:2},{value:"\u2600\uFE0F \u8F7B\u677E\u5207\u6362\u660E\u6697\u6A21\u5F0F\u3002",paraId:2,tocIndex:2},{value:`npm install antd @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:3,tocIndex:3},{value:"@agentscope-ai/design \u9ED8\u8BA4\u57FA\u4E8E ES \u6A21\u5757\u652F\u6301 tree shaking",paraId:4,tocIndex:4},{value:"@agentscope-ai/chat \u4F7F\u7528 TypeScript \u7F16\u5199\u5E76\u63D0\u4F9B\u5B8C\u6574\u7684\u5B9A\u4E49\u6587\u4EF6\u3002",paraId:5,tocIndex:5},{value:"\u6211\u4EEC\u63D0\u4F9B\u56DB\u79CD\u5185\u7F6E\u4E3B\u9898\uFF1A",paraId:6,tocIndex:6},{value:" purpleTheme",paraId:0},{value:" purpleDarkTheme\uFF08\u6697\u8272\u6A21\u5F0F\uFF09",paraId:0},{value:" carbonTheme",paraId:0},{value:" carbonDarkTheme\uFF08\u6697\u8272\u6A21\u5F0F\uFF09",paraId:0},{value:"@agentscope-ai/design",paraId:7,tocIndex:7},{value:" \u548C ",paraId:7,tocIndex:7},{value:"@agentscope-ai/chat",paraId:7,tocIndex:7},{value:" \u6B63\u5728\u79EF\u6781\u63A8\u8FDB\u5F00\u6E90\uFF0C\u9884\u8BA1\u5C06\u5728 2025 \u5E74\u5E95\u5B8C\u6210\u3002\u76EE\u524D\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7 npm \u8BBF\u95EE\u6211\u4EEC\u7684\u9879\u76EE\u3002",paraId:7,tocIndex:7}]},70389:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"\u8BBF\u95EE ",paraId:0},{value:"Icon Library",paraId:0},{value:" \u67E5\u770B\u5168\u90E8 Icon",paraId:0}]},78889:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"Alibaba Cloud Spark Design \u63D0\u4F9B\u56DB\u79CD\u5185\u7F6E\u4E3B\u9898\uFF1A",paraId:0,tocIndex:0},{value:" purpleTheme",paraId:1},{value:" purpleDarkTheme\uFF08\u6697\u8272\u6A21\u5F0F\uFF09",paraId:1},{value:" carbonTheme",paraId:1},{value:" carbonDarkTheme\uFF08\u6697\u8272\u6A21\u5F0F\uFF09",paraId:1},{value:`import { ConfigProvider, purpleTheme } from '@agentscope-ai/design';

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
`,paraId:4,tocIndex:2},{value:"\u60A8\u4ECD\u7136\u53EF\u4EE5\u4FEE\u6539\u751F\u6210\u7684\u4E3B\u9898\uFF1A",paraId:5,tocIndex:2},{value:"yourThemeWithSparkStyle",paraId:5,tocIndex:2},{value:"\uFF0C\u4F46\u4E0D\u5EFA\u8BAE\u8FD9\u6837\u505A\u3002\u6211\u4EEC\u5EFA\u8BAE\u60A8\u4FDD\u6301\u539F\u59CB\u4E3B\u9898\u4EE5\u83B7\u5F97 Spark Design \u7684\u6700\u4F73\u4F53\u9A8C\u3002",paraId:5,tocIndex:2}]},65625:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"\u9664\u4E86\u6765\u81EA ",paraId:0,tocIndex:0},{value:"antd",paraId:0,tocIndex:0},{value:" \u7684\u56FA\u6709 tokens \u4E4B\u5916\uFF0CSpark Design \u5728\u539F\u6709\u57FA\u7840\u4E0A\u6269\u5C55\u4E86\u66F4\u591A\u53D8\u91CF\u3002\u5B8C\u6574\u7684 token \u793A\u4F8B\u5982\u4E0B\u6240\u793A\uFF1A",paraId:0,tocIndex:0},{value:" purpleTheme",paraId:1},{value:`{
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
 "colorTextOnPrimary": "#000000",
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
  "boxShadowInput": "0px 12px 24px -16px rgba(255, 255, 255, 0.08),0px 12px 40px 0px rgba(255, 255, 255, 0.16),0px 0px 1px 0px rgba(255, 255, 255, 0.04)",
  "colorTextBlack": "#000000"
}
`,paraId:5,tocIndex:0},{value:"Spark Design \u9ED8\u8BA4\u542F\u7528 cssVar \u6A21\u5F0F\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u5229\u7528 \u4ECE token \u6D3E\u751F\u51FA\u7684 CSS \u53D8\u91CF\u6765\u6784\u5EFA\u81EA\u5DF1\u7684\u6837\u5F0F\u3002",paraId:6,tocIndex:1},{value:`.example {
  background: var(--sps-color-bg-base);
  color: var(--sps-color-pink);
}
// \u63D0\u793A\uFF1A\u60A8\u53EF\u4EE5\u5C06 'sps' \u66FF\u6362\u4E3A\u60A8\u81EA\u5DF1\u7684\u524D\u7F00
`,paraId:7,tocIndex:1}]},84070:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"\u4E3A\u4E86\u8BA9 Cursor \u548C Claude Code \u7B49\u5DE5\u5177\u7406\u89E3 Spark Design\uFF0C\u6211\u4EEC\u652F\u6301 LLMs.txt \u6587\u4EF6\uFF0C\u4F7F Spark Design \u7684\u6587\u6863\u53EF\u4F9B\u5927\u578B\u8BED\u8A00\u6A21\u578B\u4F7F\u7528\u3002",paraId:0,tocIndex:1},{value:"index.llms.txt",paraId:1,tocIndex:1},{value:"\uFF1A\u4E3B\u8981\u7684 LLMs.txt \u7D22\u5F15\u6587\u4EF6",paraId:1,tocIndex:1},{value:"all.llms.txt",paraId:1,tocIndex:1},{value:"\uFF1ASpark Design \u7684\u5B8C\u6574\u6587\u6863",paraId:1,tocIndex:1},{value:"\u5728 Cursor \u4E2D\u4F7F\u7528 @Docs \u529F\u80FD\u5C06 LLMs.txt \u6587\u4EF6\u5305\u542B\u5728\u60A8\u7684\u9879\u76EE\u4E2D\u3002",paraId:2,tocIndex:1},{value:"\u4E86\u89E3\u66F4\u591A",paraId:2,tocIndex:1},{value:"\u5728\u524D\u7AEF\u4F7F\u7528 Alibaba Cloud Spark Design\u3001\u8BBE\u8BA1\u7A3F\u4F7F\u7528 Spark Design \u5957\u4EF6\u7684\u524D\u63D0\u4E0B\uFF0C\u901A\u8FC7 masterGo \u89C6\u89C9\u7A3F\u751F\u6210\u4EE3\u7801\u53EF\u4EE5\u505A\u5230\u4EE5\u4E0B\u51E0\u70B9\uFF1A",paraId:3,tocIndex:2},{value:"\u51C6\u786E\u8BC6\u522B icon",paraId:4,tocIndex:2},{value:"\u4F7F\u7528\u6807\u51C6 css token",paraId:4,tocIndex:2},{value:"\u65E0\u9700\u6D4B\u91CF\u95F4\u8DDD\u3001\u5706\u89D2\u7B49\u6570\u636E\uFF0CAI \u76F4\u63A5\u8FD8\u539F\u5E03\u5C40\uFF0890%\u4EE5\u4E0A\u6982\u7387\u51C6\u786E\u751F\u6210\uFF09",paraId:4,tocIndex:2},{value:"\u4F7F\u7528\u6807\u51C6\u7EC4\u4EF6\u8FD8\u539F\u9875\u9762\uFF0C\u5927\u90E8\u5206\u6807\u51C6\u7EC4\u4EF6\u53EF\u4E00\u6B21\u6027\u6B63\u786E\u751F\u6210\uFF0C\u65E0\u9700\u4E8C\u6B21\u8C03\u6574",paraId:4,tocIndex:2},{value:"\u6211\u4EEC\u4F1A\u5728\u4E0D\u4E45\u7684\u5C06\u6765\u5F00\u653E masterGo \u7684\u8BBE\u8BA1\u5957\u4EF6\u548C rules\uFF0C\u5E2E\u52A9\u60A8\u9AD8\u6548\u7387\u8FD8\u539F\u89C6\u89C9\u7A3F",paraId:5,tocIndex:2}]},59905:function(o,n){"use strict";n.Z=`import { SparkLoadingLine } from '@agentscope-ai/icons';

export default () => {
  return (
    <SparkLoadingLine
      className="your-class-name"
      style={{ color: 'var(--sps-color-primary)' }}
      spin
      size={48}
    />
  );
};
`},22659:function(o,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={items_per_page:"\u6761/\u9875",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u786E\u5B9A",page:"\u9875",prev_page:"\u4E0A\u4E00\u9875",next_page:"\u4E0B\u4E00\u9875",prev_5:"\u5411\u524D 5 \u9875",next_5:"\u5411\u540E 5 \u9875",prev_3:"\u5411\u524D 3 \u9875",next_3:"\u5411\u540E 3 \u9875",page_size:"\u9875\u7801"},r=n.default=e},51926:function(o,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.commonLocale=void 0;var e=n.commonLocale={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0}},32593:function(o,n,e){"use strict";var r=e(26538).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e(51605)),t=e(51926),c=(0,i.default)((0,i.default)({},t.commonLocale),{},{locale:"zh_CN",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u786E\u5B9A",timeSelect:"\u9009\u62E9\u65F6\u95F4",dateSelect:"\u9009\u62E9\u65E5\u671F",weekSelect:"\u9009\u62E9\u5468",clear:"\u6E05\u9664",week:"\u5468",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",nextMonth:"\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",monthSelect:"\u9009\u62E9\u6708\u4EFD",yearSelect:"\u9009\u62E9\u5E74\u4EFD",decadeSelect:"\u9009\u62E9\u5E74\u4EE3",previousYear:"\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7EAA",nextCentury:"\u4E0B\u4E00\u4E16\u7EAA",yearFormat:"YYYY\u5E74",cellDateFormat:"D",monthBeforeYear:!1}),d=n.default=c},74298:function(o,n,e){var r=e(60046);function i(t,c,d){return(c=r(c))in t?Object.defineProperty(t,c,{value:d,enumerable:!0,configurable:!0,writable:!0}):t[c]=d,t}o.exports=i,o.exports.__esModule=!0,o.exports.default=o.exports},26538:function(o){function n(e){return e&&e.__esModule?e:{default:e}}o.exports=n,o.exports.__esModule=!0,o.exports.default=o.exports},51605:function(o,n,e){var r=e(74298);function i(c,d){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(c);d&&(p=p.filter(function(D){return Object.getOwnPropertyDescriptor(c,D).enumerable})),s.push.apply(s,p)}return s}function t(c){for(var d=1;d<arguments.length;d++){var s=arguments[d]!=null?arguments[d]:{};d%2?i(Object(s),!0).forEach(function(p){r(c,p,s[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach(function(p){Object.defineProperty(c,p,Object.getOwnPropertyDescriptor(s,p))})}return c}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports},59150:function(o,n,e){var r=e(59668).default;function i(t,c){if(r(t)!="object"||!t)return t;var d=t[Symbol.toPrimitive];if(d!==void 0){var s=d.call(t,c||"default");if(r(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(t)}o.exports=i,o.exports.__esModule=!0,o.exports.default=o.exports},60046:function(o,n,e){var r=e(59668).default,i=e(59150);function t(c){var d=i(c,"string");return r(d)=="symbol"?d:d+""}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports},59668:function(o){function n(e){"@babel/helpers - typeof";return o.exports=n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o.exports.__esModule=!0,o.exports.default=o.exports,n(e)}o.exports=n,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
