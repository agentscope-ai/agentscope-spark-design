"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7430],{93680:function(m,n,e){e.r(n),e.d(n,{demos:function(){return i}});var a=e(75271),i={}},12332:function(m,n,e){var a;e.r(n),e.d(n,{demos:function(){return v}});var i=e(90228),g=e.n(i),T=e(26068),_=e.n(T),P=e(48305),c=e.n(P),M=e(87999),E=e.n(M),r=e(75271),b=e(82377),h=e(46840),C=e(10895),v={"docs-guide-from-antd-demo-en-us-0":{component:r.memo(r.lazy(E()(g()().mark(function x(){var l,d,s,p,f,t,I,A,u,k,F,D,S,O,L,H;return g()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(7960),e.e(4349),e.e(6763),e.e(3609),e.e(6070),e.e(7114),e.e(7246)]).then(e.bind(e,5012));case 2:return l=o.sent,d=l.Button,s=l.Image,p=l.ConfigProvider,f=l.purpleDarkTheme,t=l.purpleTheme,o.next=10,Promise.resolve().then(e.bind(e,82377));case 10:return I=o.sent,A=I.SparkSunLine,u=I.SparkMoonLine,o.next=15,Promise.resolve().then(e.bind(e,46840));case 15:return k=o.sent,F=k.Flex,o.next=19,Promise.resolve().then(e.bind(e,10895));case 19:return D=o.sent,S=D.default,o.next=23,Promise.resolve().then(e.t.bind(e,75271,19));case 23:return O=o.sent,L=O.useState,H=function(){var W=L("light"),R=c()(W,2),B=R[0],U=R[1],K=B==="light"?t:f,y="sps";return r.createElement(p,_()(_()({},K),{},{prefix:y,prefixCls:y,iconfont:"//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js",locale:S,style:{width:"100%",height:"100%"}}),r.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(y,"-color-bg-base)")}},r.createElement(F,{vertical:!0,gap:16,align:"center",style:{padding:"12px 0"}},r.createElement(s,{width:120,src:"https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"}),r.createElement("div",{style:{color:"var(--".concat(y,"-ant-color-text-base)"),fontSize:"24px",textAlign:"center"}},"Hello Spark Design!"),r.createElement(d,{type:"primary",onClick:function(){U(B==="light"?"dark":"light")},icon:B==="light"?r.createElement(u,null):r.createElement(A,null)},B==="light"?"dark":"light"," mode"))))},o.abrupt("return",{default:H});case 27:case"end":return o.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-guide-from-antd-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
      {...theme} // you can choose from purpleTheme, purpleDarkTheme, carbonTheme and carbonDarkTheme
      prefix={prefix} // prefix for Ant Design and @agentscope-ai/design
      prefixCls={prefix}
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js" // optional parameter, you can get it from https://www.iconfont.cn/
      locale={zhCN} // language pack from Ant Design
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
            {colorMode === 'light' ? 'dark' : 'light'} mode
          </Button>
        </Flex>
      </div>
    </ConfigProvider>
  );
};

export default App;`},"@agentscope-ai/icons":{type:"NPM",value:"1.0.46"},antd:{type:"NPM",value:"5.29.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@agentscope-ai/icons":b,antd:h,"antd/locale/zh_CN":C,react:a||(a=e.t(r,2))},renderOpts:{compile:function(){var x=E()(g()().mark(function d(){var s,p=arguments;return g()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1385).then(e.bind(e,31385));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,p));case 3:case"end":return t.stop()}},d)}));function l(){return x.apply(this,arguments)}return l}()}},"docs-guide-from-antd-demo-en-us-1":{component:r.memo(r.lazy(E()(g()().mark(function x(){var l,d,s,p,f,t,I,A,u,k,F,D,S,O,L,H;return g()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(7960),e.e(4349),e.e(6763),e.e(3609),e.e(6070),e.e(7114),e.e(7246)]).then(e.bind(e,5012));case 2:return l=o.sent,d=l.ConfigProvider,s=l.purpleDarkTheme,p=l.purpleTheme,o.next=8,Promise.resolve().then(e.bind(e,46840));case 8:return f=o.sent,t=f.Button,I=f.Image,A=f.Flex,o.next=14,Promise.resolve().then(e.bind(e,82377));case 14:return u=o.sent,k=u.SparkSunLine,F=u.SparkMoonLine,o.next=19,Promise.resolve().then(e.bind(e,10895));case 19:return D=o.sent,S=D.default,o.next=23,Promise.resolve().then(e.t.bind(e,75271,19));case 23:return O=o.sent,L=O.useState,H=function(){var W=L("light"),R=c()(W,2),B=R[0],U=R[1],K=B==="light"?p:s,y="sps";return r.createElement(d,_()(_()({},K),{},{prefix:y,prefixCls:y,iconfont:"//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js",locale:S,style:{width:"100%",height:"100%"}}),r.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(y,"-color-bg-base)")}},r.createElement(A,{vertical:!0,gap:16,align:"center",style:{padding:"12px 0"}},r.createElement(I,{width:120,src:"https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"}),r.createElement("div",{style:{color:"var(--".concat(y,"-ant-color-text-base)"),fontSize:"24px",textAlign:"center"}},"Hello Spark Design!"),r.createElement(t,{type:"primary",onClick:function(){U(B==="light"?"dark":"light")},icon:B==="light"?r.createElement(F,null):r.createElement(k,null)},B==="light"?"dark":"light"," mode"))))},o.abrupt("return",{default:H});case 27:case"end":return o.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-guide-from-antd-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
      {...theme} // you can choose from purpleTheme, purpleDarkTheme, carbonTheme and carbonDarkTheme
      prefix={prefix} // prefix for Ant Design and @agentscope-ai/design
      prefixCls={prefix}
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js" // optional parameter, you can get it from https://www.iconfont.cn/
      locale={zhCN} // language pack from Ant Design
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
            {colorMode === 'light' ? 'dark' : 'light'} mode
          </Button>
        </Flex>
      </div>
    </ConfigProvider>
  );
};

export default App;`},antd:{type:"NPM",value:"5.29.1"},"@agentscope-ai/icons":{type:"NPM",value:"1.0.46"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:h,"@agentscope-ai/icons":b,"antd/locale/zh_CN":C,react:a||(a=e.t(r,2))},renderOpts:{compile:function(){var x=E()(g()().mark(function d(){var s,p=arguments;return g()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1385).then(e.bind(e,31385));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,p));case 3:case"end":return t.stop()}},d)}));function l(){return x.apply(this,arguments)}return l}()}}}},29292:function(m,n,e){var a;e.r(n),e.d(n,{demos:function(){return v}});var i=e(90228),g=e.n(i),T=e(26068),_=e.n(T),P=e(48305),c=e.n(P),M=e(87999),E=e.n(M),r=e(75271),b=e(82377),h=e(46840),C=e(10895),v={"docs-guide-from-scratch-demo-en-us-0":{component:r.memo(r.lazy(E()(g()().mark(function x(){var l,d,s,p,f,t,I,A,u,k,F,D,S,O,L,H;return g()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(7960),e.e(4349),e.e(6763),e.e(3609),e.e(6070),e.e(7114),e.e(7246)]).then(e.bind(e,5012));case 2:return l=o.sent,d=l.Button,s=l.Image,p=l.ConfigProvider,f=l.purpleDarkTheme,t=l.purpleTheme,o.next=10,Promise.resolve().then(e.bind(e,82377));case 10:return I=o.sent,A=I.SparkSunLine,u=I.SparkMoonLine,o.next=15,Promise.resolve().then(e.bind(e,46840));case 15:return k=o.sent,F=k.Flex,o.next=19,Promise.resolve().then(e.bind(e,10895));case 19:return D=o.sent,S=D.default,o.next=23,Promise.resolve().then(e.t.bind(e,75271,19));case 23:return O=o.sent,L=O.useState,H=function(){var W=L("light"),R=c()(W,2),B=R[0],U=R[1],K=B==="light"?t:f,y="sps";return r.createElement(p,_()(_()({},K),{},{prefix:y,prefixCls:y,iconfont:"//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js",locale:S,style:{width:"100%",height:"100%"}}),r.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(y,"-color-bg-base)")}},r.createElement(F,{vertical:!0,gap:16,align:"center",style:{padding:"12px 0"}},r.createElement(s,{width:120,src:"https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"}),r.createElement("div",{style:{color:"var(--".concat(y,"-ant-color-text-base)"),fontSize:"24px",textAlign:"center"}},"Hello Spark Design!"),r.createElement(d,{type:"primary",onClick:function(){U(B==="light"?"dark":"light")},icon:B==="light"?r.createElement(u,null):r.createElement(A,null)},B==="light"?"dark":"light"," mode"))))},o.abrupt("return",{default:H});case 27:case"end":return o.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-guide-from-scratch-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
      {...theme} // you can choose from purpleTheme, purpleDarkTheme, carbonTheme and carbonDarkTheme
      prefix={prefix} // prefix for Ant Design and @agentscope-ai/design
      prefixCls={prefix}
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js" // optional parameter, you can get it from https://www.iconfont.cn/
      locale={zhCN} // language pack from Ant Design
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
            {colorMode === 'light' ? 'dark' : 'light'} mode
          </Button>
        </Flex>
      </div>
    </ConfigProvider>
  );
};

export default App;`},"@agentscope-ai/icons":{type:"NPM",value:"1.0.46"},antd:{type:"NPM",value:"5.29.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@agentscope-ai/icons":b,antd:h,"antd/locale/zh_CN":C,react:a||(a=e.t(r,2))},renderOpts:{compile:function(){var x=E()(g()().mark(function d(){var s,p=arguments;return g()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1385).then(e.bind(e,31385));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,p));case 3:case"end":return t.stop()}},d)}));function l(){return x.apply(this,arguments)}return l}()}}}},84975:function(m,n,e){e.r(n),e.d(n,{demos:function(){return r}});var a=e(90228),i=e.n(a),g=e(26068),T=e.n(g),_=e(87999),P=e.n(_),c=e(75271),M=e(46840),E=e(10895),r={"docs-guide-iconfont-demo-en-us-0":{component:c.memo(c.lazy(P()(i()().mark(function b(){var h,C,v,x,l,d,s,p,f,t,I;return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(7960),e.e(4349),e.e(6763),e.e(3609),e.e(6070),e.e(7114),e.e(7246)]).then(e.bind(e,5012));case 2:return h=u.sent,C=h.ConfigProvider,v=h.purpleTheme,x=h.Button,l=h.IconFont,d=h.IconButton,u.next=10,Promise.resolve().then(e.bind(e,46840));case 10:return s=u.sent,p=s.Flex,u.next=14,Promise.resolve().then(e.bind(e,10895));case 14:return f=u.sent,t=f.default,I=function(){var F="sps",D="spark-effciency-line",S="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js";return c.createElement(C,T()(T()({},v),{},{prefix:F,prefixCls:F,iconfont:S,locale:t,style:{width:"100%",height:"100%"}}),c.createElement(p,{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(F,"-color-bg-base)")},justify:"center",align:"center"},c.createElement(p,{vertical:!0,gap:16,style:{width:"300px",padding:"12px 0"}},c.createElement(p,{gap:8},c.createElement("div",{style:{width:"100px",lineHeight:"32px"}},"IconFont:"),c.createElement(l,{type:D})),c.createElement(p,{gap:8},c.createElement("div",{style:{width:"100px",lineHeight:"32px"}},"Button:"),c.createElement(x,{type:"primary",iconType:D},"Add User")),c.createElement(p,{gap:8},c.createElement("div",{style:{width:"100px",lineHeight:"32px"}},"IconButton:"),c.createElement(d,{iconType:D})))))},u.abrupt("return",{default:I});case 18:case"end":return u.stop()}},b)})))),asset:{type:"BLOCK",id:"docs-guide-iconfont-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
  const iconfont = '//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js'; // you can get it from https://www.iconfont.cn/
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
              Add User
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

export default App;`},antd:{type:"NPM",value:"5.29.1"}},entry:"index.tsx"},context:{antd:M,"antd/locale/zh_CN":E},renderOpts:{compile:function(){var b=P()(i()().mark(function C(){var v,x=arguments;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1385).then(e.bind(e,31385));case 2:return d.abrupt("return",(v=d.sent).default.apply(v,x));case 3:case"end":return d.stop()}},C)}));function h(){return b.apply(this,arguments)}return h}()}}}},57674:function(m,n,e){e.r(n),e.d(n,{demos:function(){return i}});var a=e(75271),i={}},66733:function(m,n,e){e.r(n),e.d(n,{demos:function(){return c}});var a=e(90228),i=e.n(a),g=e(87999),T=e.n(g),_=e(75271),P=e(82377),c={"docs-guide-spark-icons-demo-usage":{component:_.memo(_.lazy(function(){return e.e(2433).then(e.bind(e,19807))})),asset:{type:"BLOCK",id:"docs-guide-spark-icons-demo-usage",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(16080).Z},"@agentscope-ai/icons":{type:"NPM",value:"1.0.46"}},entry:"index.tsx",title:"Basic Usage"},context:{"@agentscope-ai/icons":P},renderOpts:{compile:function(){var M=T()(i()().mark(function r(){var b,h=arguments;return i()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(1385).then(e.bind(e,31385));case 2:return v.abrupt("return",(b=v.sent).default.apply(b,h));case 3:case"end":return v.stop()}},r)}));function E(){return M.apply(this,arguments)}return E}()}}}},36044:function(m,n,e){e.r(n),e.d(n,{demos:function(){return i}});var a=e(75271),i={}},95292:function(m,n,e){e.r(n),e.d(n,{demos:function(){return i}});var a=e(75271),i={}},52077:function(m,n,e){e.r(n),e.d(n,{demos:function(){return i}});var a=e(75271),i={}},21814:function(m,n,e){var a;e.r(n),e.d(n,{demos:function(){return b}});var i=e(90228),g=e.n(i),T=e(87999),_=e.n(T),P=e(75271),c=e(82377),M=e(42640),E=e(51204),r=e(39949),b={"docs-icons-icon-library-demo-library":{component:P.memo(P.lazy(function(){return e.e(2433).then(e.bind(e,62749))})),asset:{type:"BLOCK",id:"docs-icons-icon-library-demo-library",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37588).Z},react:{type:"NPM",value:"18.3.1"},"@agentscope-ai/icons":{type:"NPM",value:"1.0.46"},"antd-style":{type:"NPM",value:"3.7.1"},"@agentscope-ai/design":{type:"NPM",value:"1.0.27"},"./iconCategories.ts":{type:"FILE",value:e(8619).Z}},entry:"index.tsx",title:"\u67E5\u770B\u5168\u90E8\u56FE\u6807"},context:{"./iconCategories.ts":r,react:a||(a=e.t(P,2)),"@agentscope-ai/icons":c,"antd-style":M,dumi:E,"/home/runner/work/agentscope-spark-design/agentscope-spark-design/packages/spark-design/docs/icons/demo/iconCategories.ts":r},renderOpts:{compile:function(){var h=_()(g()().mark(function v(){var x,l=arguments;return g()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1385).then(e.bind(e,31385));case 2:return s.abrupt("return",(x=s.sent).default.apply(x,l));case 3:case"end":return s.stop()}},v)}));function C(){return h.apply(this,arguments)}return C}()}}}},49859:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"2025-01-27",paraId:0,tocIndex:0},{value:"Added InputSearch component documentation",paraId:1,tocIndex:1},{value:"Table: changed default header border-radius from rounded to square when header is fixed",paraId:2,tocIndex:2},{value:"Empty: fixed the issue where SVG might be missing when multiple Empty components are imported",paraId:2,tocIndex:2},{value:"Fixed documentation search white screen issue",paraId:2,tocIndex:2},{value:"2025-01-21",paraId:3,tocIndex:3},{value:"Audio: refactored detection logic and improved performance using useCallback",paraId:4,tocIndex:4},{value:"Audio & Video: added SVG icons, supporting display in FileIcon component",paraId:4,tocIndex:4},{value:"Documentation: added icons list display and copy functionality",paraId:4,tocIndex:4},{value:"2025-01-07",paraId:5,tocIndex:5},{value:"Tooltip: fixed the style specificity issue inside the popover.",paraId:6,tocIndex:6},{value:"2025-01-04",paraId:7,tocIndex:7},{value:"Video: added the ",paraId:8,tocIndex:8},{value:"enableFullscreen",paraId:8,tocIndex:8},{value:" prop to support fullscreen playback.",paraId:8,tocIndex:8},{value:"2025-12-29",paraId:9,tocIndex:9},{value:"Carbon theme: updated the ",paraId:10,tocIndex:10},{value:"colorTextOnPrimary",paraId:10,tocIndex:10},{value:" token to ",paraId:10,tocIndex:10},{value:"#ffffff",paraId:10,tocIndex:10},{value:".",paraId:10,tocIndex:10},{value:"2025-12-25",paraId:11,tocIndex:11},{value:"AlertDialog: adjusted the default top offset to 36% of the current viewport height.",paraId:12,tocIndex:12},{value:"Table: updated the row hover background color to the ",paraId:12,tocIndex:12},{value:"color-bg-layout",paraId:12,tocIndex:12},{value:" token; updated the selected row background color to the ",paraId:12,tocIndex:12},{value:"color-primary-bg-hover",paraId:12,tocIndex:12},{value:" token.",paraId:12,tocIndex:12},{value:"Select: adjusted the selected item background color in multiple selection mode.",paraId:12,tocIndex:12},{value:`Theme tokens updates:
`,paraId:12,tocIndex:12},{value:"bailianDarkTheme: added ",paraId:13,tocIndex:12},{value:'"colorLinkHover": "#857DE3"',paraId:13,tocIndex:12},{value:".",paraId:13,tocIndex:12},{value:"bailianTheme: added ",paraId:13,tocIndex:12},{value:'"colorLinkHover": "#8080FF"',paraId:13,tocIndex:12},{value:".",paraId:13,tocIndex:12},{value:"carbonDarkTheme: updated ",paraId:13,tocIndex:12},{value:'"colorTextOnPrimary": "#ffffff"',paraId:13,tocIndex:12},{value:".",paraId:13,tocIndex:12},{value:"Slider: removed the default left/right margins for the horizontal slider; ensured the handle does not overflow the track at both ends.",paraId:14,tocIndex:13}]},34856:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:`$ npm install @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1},{value:"All the eponymous components exported from @agentscope-ai/design are compatible with their counterparts from antd in terms of API, which means you don't need to learn how to use them. If you want to make full use of the new features of Alibaba Cloud Spark Design, you can try those components instead of those from antd.",paraId:1,tocIndex:2},{value:"If you want to keep using components from antd, that's ok. All you need to do is replacing the ConfigProvider from antd with the one from @agentscope-ai/design.",paraId:2}]},26123:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:`$ npm install antd @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1}]},58556:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"If you have your own iconfont project, you can integrate your icons into Spark Design and access your icon with simply a symbol name.",paraId:0,tocIndex:0}]},69721:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:`
  `,paraId:0},{value:`
  `,paraId:0},{value:`Alibaba Cloud Spark Design is a React UI library based on Ant Design, including a rich set of basic components and scenario components oriented toward building excellent LLM products.
`,paraId:1,tocIndex:1},{value:" Based on Ant Design, compatible with the Ant Design ecosystem. You can switch to Spark Design without modifying your code.",paraId:2,tocIndex:2},{value:"\u{1F6E1} Written in TypeScript with predictable static types.",paraId:2,tocIndex:2},{value:"\u{1F9E0} A variety of scenario components designed for LLM products.",paraId:2,tocIndex:2},{value:"\u{1F4A1} Works with @agentscope-ai/chat and @agentscope-ai/flow for building an enterprise-level LLM app.",paraId:2,tocIndex:2},{value:"\u{1F3A8} Multiple preset themes.",paraId:2,tocIndex:2},{value:"\u2600\uFE0F Switch light and dark mode easily.",paraId:2,tocIndex:2},{value:`npm install antd @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:3,tocIndex:3},{value:"@agentscope-ai/design supports tree shaking based on ES modules by default",paraId:4,tocIndex:4},{value:"@agentscope-ai/chat is written in TypeScript and provides complete definition files.",paraId:5,tocIndex:5},{value:"We provide four built-in themes:",paraId:6,tocIndex:6},{value:" purpleTheme",paraId:0},{value:" purpleDarkTheme (for dark mode)",paraId:0},{value:" carbonTheme",paraId:0},{value:" carbonDarkTheme (for dark mode)",paraId:0},{value:"@agentscope-ai/design",paraId:7,tocIndex:7},{value:" and ",paraId:7,tocIndex:7},{value:"@agentscope-ai/chat",paraId:7,tocIndex:7},{value:" are actively progressing towards open source, with completion expected by the end of 2025. Currently, you can access our projects through npm.",paraId:7,tocIndex:7}]},45393:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"Visit ",paraId:0},{value:"Icon Library",paraId:0},{value:" for all icons",paraId:0}]},72369:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"Alibaba Cloud Spark Design provides four built-in themes:",paraId:0,tocIndex:0},{value:" purpleTheme",paraId:1},{value:" purpleDarkTheme (for dark mode)",paraId:1},{value:" carbonTheme",paraId:1},{value:" carbonDarkTheme (for dark mode)",paraId:1},{value:`import { ConfigProvider, purpleTheme } from '@agentscope-ai/design';

const App = () => {
  return <ConfigProvider {...purpleTheme}>Hello Spark Design!</ConfigProvider>;
};

export default App;
`,paraId:2,tocIndex:1},{value:"If you've already had an Antd theme, you can still generate a spark-style theme by using generateThemeByToken",paraId:3,tocIndex:2},{value:`import { ConfigProvider, generateThemeByToken } from '@agentscope-ai/design';
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
  // ... you can find full version of tokens in the next doc: Tokens and Css Variables
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
`,paraId:4,tocIndex:2},{value:"Still, you can modify the generated theme: ",paraId:5,tocIndex:2},{value:"yourThemeWithSparkStyle",paraId:5,tocIndex:2},{value:", which is not recommended. We suggest you to keep the original theme for the best experience of Spark Design.",paraId:5,tocIndex:2}]},27299:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"Apart from the inherent tokens from ",paraId:0,tocIndex:0},{value:"antd",paraId:0,tocIndex:0},{value:", Spark Design has expanded more variables on the original basis. A full token example is shown below:",paraId:0,tocIndex:0},{value:" purpleTheme",paraId:1},{value:`{
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
`,paraId:2,tocIndex:0},{value:" purpleDarkTheme (for dark mode)",paraId:1},{value:`{
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
`,paraId:5,tocIndex:0},{value:"Spark Design enables the cssVar mode by default, thus you can take advantage of the CSS variables derived from tokens to build your own styles.",paraId:6,tocIndex:1},{value:`.example {
  background: var(--sps-color-bg-base);
  color: var(--sps-color-pink);
}
// tips: you can replace 'sps' with your own prefix
`,paraId:7,tocIndex:1}]},2840:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"To make tools like Cursor and Claude Code understand Spark Design, we support LLMs.txt files, making Spark Design's documentation available for large language models.",paraId:0,tocIndex:1},{value:"index.llms.txt",paraId:1,tocIndex:1},{value:": The main LLMs.txt index file",paraId:1,tocIndex:1},{value:"all.llms.txt",paraId:1,tocIndex:1},{value:": Complete documentation for Spark Design",paraId:1,tocIndex:1},{value:"Use the @Docs feature in Cursor to include the LLMs.txt files in your project. ",paraId:2,tocIndex:1},{value:"Read more",paraId:2,tocIndex:1},{value:"With Alibaba Cloud Spark Design, Spark Design design suite and cursor rules, generating code from masterGo visual designs can achieve the following:",paraId:3,tocIndex:2},{value:"Accurate icon identification",paraId:4,tocIndex:2},{value:"Use of standard CSS tokens",paraId:4,tocIndex:2},{value:"No need to measure spacing, rounded corners and other data - AI directly restores layout (90%+ accuracy)",paraId:4,tocIndex:2},{value:"Use standard components to restore pages, most standard components can be generated correctly in one go without secondary adjustments",paraId:4,tocIndex:2},{value:"We will soon release the masterGo design suite and rules to help you efficiently restore visual designs.",paraId:5,tocIndex:2}]},83223:function(m,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[]}}]);
