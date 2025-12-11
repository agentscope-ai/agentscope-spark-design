(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7430],{66476:function(o,n,e){"use strict";var r;e.r(n),e.d(n,{demos:function(){return h}});var i=e(90228),t=e.n(i),d=e(26068),c=e.n(d),s=e(48305),p=e.n(s),D=e(87999),I=e.n(D),l=e(75271),T=e(88105),_=e(28681),S=e(33404),h={"docs-guide-from-antd-demo-en-us-0":{component:l.memo(l.lazy(I()(t()().mark(function b(){var u,m,x,f,y,g,C,A,v,O,P,F,M,k,L,H;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(9569),e.e(9410),e.e(3729),e.e(1629),e.e(4088),e.e(3061)]).then(e.bind(e,53061));case 2:return u=a.sent,m=u.Button,x=u.Image,f=u.ConfigProvider,y=u.purpleDarkTheme,g=u.purpleTheme,a.next=10,Promise.resolve().then(e.bind(e,88105));case 10:return C=a.sent,A=C.SparkSunLine,v=C.SparkMoonLine,a.next=15,Promise.resolve().then(e.bind(e,28681));case 15:return O=a.sent,P=O.Flex,a.next=19,Promise.resolve().then(e.bind(e,33404));case 19:return F=a.sent,M=F.default,a.next=23,Promise.resolve().then(e.t.bind(e,75271,19));case 23:return k=a.sent,L=k.useState,H=function(){var R=L("light"),U=p()(R,2),B=U[0],W=U[1],j=B==="light"?g:y,E="sps";return l.createElement(f,c()(c()({},j),{},{prefix:E,prefixCls:E,iconfont:"//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js",locale:M,style:{width:"100%",height:"100%"}}),l.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(E,"-color-bg-base)")}},l.createElement(P,{vertical:!0,gap:16,align:"center",style:{padding:"12px 0"}},l.createElement(x,{width:120,src:"https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"}),l.createElement("div",{style:{color:"var(--".concat(E,"-ant-color-text-base)"),fontSize:"24px",textAlign:"center"}},"Hello Spark Design!"),l.createElement(m,{type:"primary",onClick:function(){W(B==="light"?"dark":"light")},icon:B==="light"?l.createElement(v,null):l.createElement(A,null)},B==="light"?"dark":"light"," mode"))))},a.abrupt("return",{default:H});case 27:case"end":return a.stop()}},b)})))),asset:{type:"BLOCK",id:"docs-guide-from-antd-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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

export default App;`},"@agentscope-ai/icons":{type:"NPM",value:"1.0.35"},antd:{type:"NPM",value:"5.24.9"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@agentscope-ai/icons":T,antd:_,"antd/locale/zh_CN":S,react:r||(r=e.t(l,2))},renderOpts:{compile:function(){var b=I()(t()().mark(function m(){var x,f=arguments;return t()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(9596).then(e.bind(e,79596));case 2:return g.abrupt("return",(x=g.sent).default.apply(x,f));case 3:case"end":return g.stop()}},m)}));function u(){return b.apply(this,arguments)}return u}()}},"docs-guide-from-antd-demo-en-us-1":{component:l.memo(l.lazy(I()(t()().mark(function b(){var u,m,x,f,y,g,C,A,v,O,P,F,M,k,L,H;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(9569),e.e(9410),e.e(3729),e.e(1629),e.e(4088),e.e(3061)]).then(e.bind(e,53061));case 2:return u=a.sent,m=u.ConfigProvider,x=u.purpleDarkTheme,f=u.purpleTheme,a.next=8,Promise.resolve().then(e.bind(e,28681));case 8:return y=a.sent,g=y.Button,C=y.Image,A=y.Flex,a.next=14,Promise.resolve().then(e.bind(e,88105));case 14:return v=a.sent,O=v.SparkSunLine,P=v.SparkMoonLine,a.next=19,Promise.resolve().then(e.bind(e,33404));case 19:return F=a.sent,M=F.default,a.next=23,Promise.resolve().then(e.t.bind(e,75271,19));case 23:return k=a.sent,L=k.useState,H=function(){var R=L("light"),U=p()(R,2),B=U[0],W=U[1],j=B==="light"?f:x,E="sps";return l.createElement(m,c()(c()({},j),{},{prefix:E,prefixCls:E,iconfont:"//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js",locale:M,style:{width:"100%",height:"100%"}}),l.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(E,"-color-bg-base)")}},l.createElement(A,{vertical:!0,gap:16,align:"center",style:{padding:"12px 0"}},l.createElement(C,{width:120,src:"https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"}),l.createElement("div",{style:{color:"var(--".concat(E,"-ant-color-text-base)"),fontSize:"24px",textAlign:"center"}},"Hello Spark Design!"),l.createElement(g,{type:"primary",onClick:function(){W(B==="light"?"dark":"light")},icon:B==="light"?l.createElement(P,null):l.createElement(O,null)},B==="light"?"dark":"light"," mode"))))},a.abrupt("return",{default:H});case 27:case"end":return a.stop()}},b)})))),asset:{type:"BLOCK",id:"docs-guide-from-antd-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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

export default App;`},antd:{type:"NPM",value:"5.24.9"},"@agentscope-ai/icons":{type:"NPM",value:"1.0.35"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:_,"@agentscope-ai/icons":T,"antd/locale/zh_CN":S,react:r||(r=e.t(l,2))},renderOpts:{compile:function(){var b=I()(t()().mark(function m(){var x,f=arguments;return t()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(9596).then(e.bind(e,79596));case 2:return g.abrupt("return",(x=g.sent).default.apply(x,f));case 3:case"end":return g.stop()}},m)}));function u(){return b.apply(this,arguments)}return u}()}}}},18133:function(o,n,e){"use strict";var r;e.r(n),e.d(n,{demos:function(){return h}});var i=e(90228),t=e.n(i),d=e(26068),c=e.n(d),s=e(48305),p=e.n(s),D=e(87999),I=e.n(D),l=e(75271),T=e(88105),_=e(28681),S=e(33404),h={"docs-guide-from-scratch-demo-en-us-0":{component:l.memo(l.lazy(I()(t()().mark(function b(){var u,m,x,f,y,g,C,A,v,O,P,F,M,k,L,H;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(9569),e.e(9410),e.e(3729),e.e(1629),e.e(4088),e.e(3061)]).then(e.bind(e,53061));case 2:return u=a.sent,m=u.Button,x=u.Image,f=u.ConfigProvider,y=u.purpleDarkTheme,g=u.purpleTheme,a.next=10,Promise.resolve().then(e.bind(e,88105));case 10:return C=a.sent,A=C.SparkSunLine,v=C.SparkMoonLine,a.next=15,Promise.resolve().then(e.bind(e,28681));case 15:return O=a.sent,P=O.Flex,a.next=19,Promise.resolve().then(e.bind(e,33404));case 19:return F=a.sent,M=F.default,a.next=23,Promise.resolve().then(e.t.bind(e,75271,19));case 23:return k=a.sent,L=k.useState,H=function(){var R=L("light"),U=p()(R,2),B=U[0],W=U[1],j=B==="light"?g:y,E="sps";return l.createElement(f,c()(c()({},j),{},{prefix:E,prefixCls:E,iconfont:"//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js",locale:M,style:{width:"100%",height:"100%"}}),l.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(E,"-color-bg-base)")}},l.createElement(P,{vertical:!0,gap:16,align:"center",style:{padding:"12px 0"}},l.createElement(x,{width:120,src:"https://img.alicdn.com/imgextra/i1/O1CN01Py27NU1re2pgohzqU_!!6000000005655-0-tps-480-480.jpg"}),l.createElement("div",{style:{color:"var(--".concat(E,"-ant-color-text-base)"),fontSize:"24px",textAlign:"center"}},"Hello Spark Design!"),l.createElement(m,{type:"primary",onClick:function(){W(B==="light"?"dark":"light")},icon:B==="light"?l.createElement(v,null):l.createElement(A,null)},B==="light"?"dark":"light"," mode"))))},a.abrupt("return",{default:H});case 27:case"end":return a.stop()}},b)})))),asset:{type:"BLOCK",id:"docs-guide-from-scratch-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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

export default App;`},"@agentscope-ai/icons":{type:"NPM",value:"1.0.35"},antd:{type:"NPM",value:"5.24.9"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@agentscope-ai/icons":T,antd:_,"antd/locale/zh_CN":S,react:r||(r=e.t(l,2))},renderOpts:{compile:function(){var b=I()(t()().mark(function m(){var x,f=arguments;return t()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(9596).then(e.bind(e,79596));case 2:return g.abrupt("return",(x=g.sent).default.apply(x,f));case 3:case"end":return g.stop()}},m)}));function u(){return b.apply(this,arguments)}return u}()}}}},38628:function(o,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return l}});var r=e(90228),i=e.n(r),t=e(26068),d=e.n(t),c=e(87999),s=e.n(c),p=e(75271),D=e(28681),I=e(33404),l={"docs-guide-iconfont-demo-en-us-0":{component:p.memo(p.lazy(s()(i()().mark(function T(){var _,S,h,b,u,m,x,f,y,g,C;return i()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([e.e(9569),e.e(9410),e.e(3729),e.e(1629),e.e(4088),e.e(3061)]).then(e.bind(e,53061));case 2:return _=v.sent,S=_.ConfigProvider,h=_.purpleTheme,b=_.Button,u=_.IconFont,m=_.IconButton,v.next=10,Promise.resolve().then(e.bind(e,28681));case 10:return x=v.sent,f=x.Flex,v.next=14,Promise.resolve().then(e.bind(e,33404));case 14:return y=v.sent,g=y.default,C=function(){var P="sps",F="spark-effciency-line",M="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js";return p.createElement(S,d()(d()({},h),{},{prefix:P,prefixCls:P,iconfont:M,locale:g,style:{width:"100%",height:"100%"}}),p.createElement(f,{style:{width:"100%",height:"100%",backgroundColor:"var(--".concat(P,"-color-bg-base)")},justify:"center",align:"center"},p.createElement(f,{vertical:!0,gap:16,style:{width:"300px",padding:"12px 0"}},p.createElement(f,{gap:8},p.createElement("div",{style:{width:"100px",lineHeight:"32px"}},"IconFont:"),p.createElement(u,{type:F})),p.createElement(f,{gap:8},p.createElement("div",{style:{width:"100px",lineHeight:"32px"}},"Button:"),p.createElement(b,{type:"primary",iconType:F},"Add User")),p.createElement(f,{gap:8},p.createElement("div",{style:{width:"100px",lineHeight:"32px"}},"IconButton:"),p.createElement(m,{iconType:F})))))},v.abrupt("return",{default:C});case 18:case"end":return v.stop()}},T)})))),asset:{type:"BLOCK",id:"docs-guide-iconfont-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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

export default App;`},antd:{type:"NPM",value:"5.24.9"}},entry:"index.tsx"},context:{antd:D,"antd/locale/zh_CN":I},renderOpts:{compile:function(){var T=s()(i()().mark(function S(){var h,b=arguments;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(9596).then(e.bind(e,79596));case 2:return m.abrupt("return",(h=m.sent).default.apply(h,b));case 3:case"end":return m.stop()}},S)}));function _(){return T.apply(this,arguments)}return _}()}}}},64270:function(o,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return i}});var r=e(75271),i={}},16576:function(o,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return p}});var r=e(90228),i=e.n(r),t=e(87999),d=e.n(t),c=e(75271),s=e(88105),p={"docs-guide-spark-icons-demo-usage":{component:c.memo(c.lazy(function(){return e.e(2433).then(e.bind(e,21634))})),asset:{type:"BLOCK",id:"docs-guide-spark-icons-demo-usage",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(59905).Z},"@agentscope-ai/icons":{type:"NPM",value:"1.0.35"}},entry:"index.tsx",title:"Basic Usage"},context:{"@agentscope-ai/icons":s},renderOpts:{compile:function(){var D=d()(i()().mark(function l(){var T,_=arguments;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(9596).then(e.bind(e,79596));case 2:return h.abrupt("return",(T=h.sent).default.apply(T,_));case 3:case"end":return h.stop()}},l)}));function I(){return D.apply(this,arguments)}return I}()}}}},89623:function(o,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return i}});var r=e(75271),i={}},52689:function(o,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return i}});var r=e(75271),i={}},8263:function(o,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return i}});var r=e(75271),i={}},17084:function(o,n,e){"use strict";var r=e(26538).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e(83045)),t=n.default=i.default},83045:function(o,n,e){"use strict";var r=e(26538).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e(32593)),t=r(e(39291));const d={lang:Object.assign({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},i.default),timePickerLocale:Object.assign({},t.default)};d.lang.ok="\u786E\u5B9A";var c=n.default=d},45017:function(o,n,e){"use strict";var r=e(26538).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e(22659)),t=r(e(17084)),d=r(e(83045)),c=r(e(39291));const s="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",p={locale:"zh-cn",Pagination:i.default,DatePicker:d.default,TimePicker:c.default,Calendar:t.default,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckAll:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",emptyText:"\u6682\u65E0\u6570\u636E",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",deselectAll:"\u53D6\u6D88\u5168\u9009",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00",collapse:"\u6536\u8D77"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:s,method:s,array:s,object:s,number:s,date:s,boolean:s,integer:s,float:s,regexp:s,email:s,url:s,hex:s},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0",scanned:"\u5DF2\u626B\u63CF"},ColorPicker:{presetEmpty:"\u6682\u65E0",transparent:"\u65E0\u8272",singleColor:"\u5355\u8272",gradientColor:"\u6E10\u53D8\u8272"}};var D=n.default=p},39291:function(o,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;const e={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]};var r=n.default=e},33404:function(o,n,e){o.exports=e(45017)},93193:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:`$ npm install @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1},{value:"All the eponymous components exported from @agentscope-ai/design are compatible with their counterparts from antd in terms of API, which means you don't need to learn how to use them. If you want to make full use of the new features of Alibaba Cloud Spark Design, you can try those components instead of those from antd.",paraId:1,tocIndex:2},{value:"If you want to keep using components from antd, that's ok. All you need to do is replacing the ConfigProvider from antd with the one from @agentscope-ai/design.",paraId:2}]},95450:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:`$ npm install antd @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1}]},42019:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"If you have your own iconfont project, you can integrate your icons into Spark Design and access your icon with simply a symbol name.",paraId:0,tocIndex:0}]},67475:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:`
  `,paraId:0},{value:`
  `,paraId:0},{value:`Alibaba Cloud Spark Design is a React UI library based on Ant Design, including a rich set of basic components and scenario components oriented toward building excellent LLM products.
`,paraId:1,tocIndex:1},{value:" Based on Ant Design, compatible with the Ant Design ecosystem. You can switch to Spark Design without modifying your code.",paraId:2,tocIndex:2},{value:"\u{1F6E1} Written in TypeScript with predictable static types.",paraId:2,tocIndex:2},{value:"\u{1F9E0} A variety of scenario components designed for LLM products.",paraId:2,tocIndex:2},{value:"\u{1F4A1} Works with @agentscope-ai/chat and @agentscope-ai/flow for building an enterprise-level LLM app.",paraId:2,tocIndex:2},{value:"\u{1F3A8} Multiple preset themes.",paraId:2,tocIndex:2},{value:"\u2600\uFE0F Switch light and dark mode easily.",paraId:2,tocIndex:2},{value:`npm install antd @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:3,tocIndex:3},{value:"@agentscope-ai/design supports tree shaking based on ES modules by default",paraId:4,tocIndex:4},{value:"@agentscope-ai/chat is written in TypeScript and provides complete definition files.",paraId:5,tocIndex:5},{value:"We provide four built-in themes:",paraId:6,tocIndex:6},{value:" purpleTheme",paraId:0},{value:" purpleDarkTheme (for dark mode)",paraId:0},{value:" carbonTheme",paraId:0},{value:" carbonDarkTheme (for dark mode)",paraId:0},{value:"@agentscope-ai/design",paraId:7,tocIndex:7},{value:" and ",paraId:7,tocIndex:7},{value:"@agentscope-ai/chat",paraId:7,tocIndex:7},{value:" are actively progressing towards open source, with completion expected by the end of 2025. Currently, you can access our projects through npm.",paraId:7,tocIndex:7}]},50096:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"Visit ",paraId:0},{value:"Icon Library",paraId:0},{value:" for all icons",paraId:0}]},42070:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"Alibaba Cloud Spark Design provides four built-in themes:",paraId:0,tocIndex:0},{value:" purpleTheme",paraId:1},{value:" purpleDarkTheme (for dark mode)",paraId:1},{value:" carbonTheme",paraId:1},{value:" carbonDarkTheme (for dark mode)",paraId:1},{value:`import { ConfigProvider, purpleTheme } from '@agentscope-ai/design';

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
`,paraId:4,tocIndex:2},{value:"Still, you can modify the generated theme: ",paraId:5,tocIndex:2},{value:"yourThemeWithSparkStyle",paraId:5,tocIndex:2},{value:", which is not recommended. We suggest you to keep the original theme for the best experience of Spark Design.",paraId:5,tocIndex:2}]},96824:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"Apart from the inherent tokens from ",paraId:0,tocIndex:0},{value:"antd",paraId:0,tocIndex:0},{value:", Spark Design has expanded more variables on the original basis. A full token example is shown below:",paraId:0,tocIndex:0},{value:" purpleTheme",paraId:1},{value:`{
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
`,paraId:5,tocIndex:0},{value:"Spark Design enables the cssVar mode by default, thus you can take advantage of the CSS variables derived from tokens to build your own styles.",paraId:6,tocIndex:1},{value:`.example {
  background: var(--sps-color-bg-base);
  color: var(--sps-color-pink);
}
// tips: you can replace 'sps' with your own prefix
`,paraId:7,tocIndex:1}]},14217:function(o,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"To make tools like Cursor and Claude Code understand Spark Design, we support LLMs.txt files, making Spark Design's documentation available for large language models.",paraId:0,tocIndex:1},{value:"index.llms.txt",paraId:1,tocIndex:1},{value:": The main LLMs.txt index file",paraId:1,tocIndex:1},{value:"all.llms.txt",paraId:1,tocIndex:1},{value:": Complete documentation for Spark Design",paraId:1,tocIndex:1},{value:"Use the @Docs feature in Cursor to include the LLMs.txt files in your project. ",paraId:2,tocIndex:1},{value:"Read more",paraId:2,tocIndex:1},{value:"With Alibaba Cloud Spark Design, Spark Design design suite and cursor rules, generating code from masterGo visual designs can achieve the following:",paraId:3,tocIndex:2},{value:"Accurate icon identification",paraId:4,tocIndex:2},{value:"Use of standard CSS tokens",paraId:4,tocIndex:2},{value:"No need to measure spacing, rounded corners and other data - AI directly restores layout (90%+ accuracy)",paraId:4,tocIndex:2},{value:"Use standard components to restore pages, most standard components can be generated correctly in one go without secondary adjustments",paraId:4,tocIndex:2},{value:"We will soon release the masterGo design suite and rules to help you efficiently restore visual designs.",paraId:5,tocIndex:2}]},59905:function(o,n){"use strict";n.Z=`import { SparkLoadingLine } from '@agentscope-ai/icons';

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
`},22659:function(o,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={items_per_page:"\u6761/\u9875",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u786E\u5B9A",page:"\u9875",prev_page:"\u4E0A\u4E00\u9875",next_page:"\u4E0B\u4E00\u9875",prev_5:"\u5411\u524D 5 \u9875",next_5:"\u5411\u540E 5 \u9875",prev_3:"\u5411\u524D 3 \u9875",next_3:"\u5411\u540E 3 \u9875",page_size:"\u9875\u7801"},r=n.default=e},51926:function(o,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.commonLocale=void 0;var e=n.commonLocale={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0}},32593:function(o,n,e){"use strict";var r=e(26538).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e(51605)),t=e(51926),d=(0,i.default)((0,i.default)({},t.commonLocale),{},{locale:"zh_CN",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u786E\u5B9A",timeSelect:"\u9009\u62E9\u65F6\u95F4",dateSelect:"\u9009\u62E9\u65E5\u671F",weekSelect:"\u9009\u62E9\u5468",clear:"\u6E05\u9664",week:"\u5468",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",nextMonth:"\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",monthSelect:"\u9009\u62E9\u6708\u4EFD",yearSelect:"\u9009\u62E9\u5E74\u4EFD",decadeSelect:"\u9009\u62E9\u5E74\u4EE3",previousYear:"\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7EAA",nextCentury:"\u4E0B\u4E00\u4E16\u7EAA",yearFormat:"YYYY\u5E74",cellDateFormat:"D",monthBeforeYear:!1}),c=n.default=d},74298:function(o,n,e){var r=e(60046);function i(t,d,c){return(d=r(d))in t?Object.defineProperty(t,d,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[d]=c,t}o.exports=i,o.exports.__esModule=!0,o.exports.default=o.exports},26538:function(o){function n(e){return e&&e.__esModule?e:{default:e}}o.exports=n,o.exports.__esModule=!0,o.exports.default=o.exports},51605:function(o,n,e){var r=e(74298);function i(d,c){var s=Object.keys(d);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(d);c&&(p=p.filter(function(D){return Object.getOwnPropertyDescriptor(d,D).enumerable})),s.push.apply(s,p)}return s}function t(d){for(var c=1;c<arguments.length;c++){var s=arguments[c]!=null?arguments[c]:{};c%2?i(Object(s),!0).forEach(function(p){r(d,p,s[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach(function(p){Object.defineProperty(d,p,Object.getOwnPropertyDescriptor(s,p))})}return d}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports},59150:function(o,n,e){var r=e(59668).default;function i(t,d){if(r(t)!="object"||!t)return t;var c=t[Symbol.toPrimitive];if(c!==void 0){var s=c.call(t,d||"default");if(r(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(t)}o.exports=i,o.exports.__esModule=!0,o.exports.default=o.exports},60046:function(o,n,e){var r=e(59668).default,i=e(59150);function t(d){var c=i(d,"string");return r(c)=="symbol"?c:c+""}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports},59668:function(o){function n(e){"@babel/helpers - typeof";return o.exports=n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o.exports.__esModule=!0,o.exports.default=o.exports,n(e)}o.exports=n,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
