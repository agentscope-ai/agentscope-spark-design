"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[8300],{91268:function(j,l,e){e.r(l);var p=e(38027),d=e(89196),E=e(36973),x=e(96709),O=e(12635),r=e(7771),y=e(53808),b=e(11003),h=e(29027),M=e(91998),v=e(23297),i=e(90706),U=e(81375),s=e(87204),_=e(31109),a=e(75271),o=e(50935),n=e(52676);function u(){return(0,n.jsx)(s.dY,{children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u5FEB\u901F\u4F7F\u7528",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5FEB\u901F\u4F7F\u7528",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5FEB\u901F\u4F7F\u7528"]}),(0,n.jsx)("p",{children:o.texts[0].value}),(0,n.jsx)(r.Z,{lang:"tsx",children:o.texts[1].value})]})})})})}l.default=u},90088:function(j,l,e){e.d(l,{Z:function(){return s}});var p=e(26068),d=e.n(p),E=e(31209),x=e(71649),O=e(42478),r=e(75271),y=e(53649),b=e.n(y),h=e(88974),M,v=(0,h.Z)(M||(M=b()([`
.`,"-dropdown .","-dropdown-menu .",`-dropdown-menu-item-icon {
  font-size: var(--`,`-font-size-lg);
}

.`,`-dropdown-check-wrapper {
  display: flex;
  align-items: center;
  margin: 0;
  padding-inline-end: calc(var(--`,"-control-padding-horizontal) + var(--",`-font-size-sm));
}

.`,`-dropdown-check-icon {
  position: absolute;
  opacity: 0;
  font-size: 20px;
  inset-inline-end: var(--`,`-padding-xs);
}

.`,"-dropdown .","-dropdown-menu .","-dropdown-menu-item.",`-dropdown-menu-item-selected {
  background-color: transparent;
  
  .`,`-dropdown-check-icon {
    opacity: 1;
  }
}

.`,`-dropdown-menu-submenu-popup {
  box-shadow: var(--`,`-box-shadow);
  border: 1px solid var(--`,`-color-border-secondary);
  border-radius: var(--`,`-border-radius-lg);
  overflow-y: auto;
}

/*
.`,"-dropdown-menu .",`-dropdown-menu-submenu {
  box-shadow: var(--`,`-box-shadow);
  border: 1px solid var(--`,`-color-border-secondary);
}
*/
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),i=e(52676),U=function(a){var o,n,u=(0,E.getCommonConfig)(),g=u.antPrefix,m=(0,r.useMemo)(function(){var c;if(!((c=a.menu)!==null&&c!==void 0&&c.selectable)||!a.menu){var P;return((P=a.menu)===null||P===void 0?void 0:P.items)||[]}return a.menu.items.map(function(f){var t={},D=f.label;return D&&(t.label=(0,i.jsxs)("div",{className:"".concat(g,"-dropdown-check-wrapper"),children:[D,(0,i.jsx)("span",{className:"".concat(g,"-dropdown-check-icon"),children:(0,i.jsx)(x.Z,{})})]})),d()(d()({},f),t)})},[(o=a.menu)===null||o===void 0?void 0:o.items,(n=a.menu)===null||n===void 0?void 0:n.selectable]),C=v();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C,{}),(0,i.jsx)(O.Z,d()(d()({},a),{},{menu:d()(d()({},a.menu),{},{items:m}),overlayStyle:d()({},a.overlayStyle)}))]})},s=U},33185:function(j,l,e){var p=e(48305),d=e.n(p),E=e(67825),x=e.n(E),O=e(26068),r=e.n(O),y=e(58911),b=e(88602),h=e(99090),M=e(62910),v=e(82090),i=e(52676),U=["content"],s={success:{type:"success",icon:(0,i.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,i.jsx)(b.Z,{})},error:{type:"error",icon:(0,i.jsx)(h.Z,{})},info:{type:"info",icon:(0,i.jsx)(M.Z,{})}},_=function(n,u){var g,m;typeof u=="string"?m={content:u}:m=r()({},u);var C=m,c=C.content,P=x()(C,U);v.ZP.open(r()({type:n,content:c,icon:n==="loading"||(g=s[n])===null||g===void 0?void 0:g.icon},P))},a=function(n){var u=v.ZP.useMessage(n),g=d()(u,2),m=g[0],C=g[1],c=function(t,D){var k,A;typeof D=="string"?A={content:D,type:t}:A=r()(r()({},D),{},{type:t}),m[t](r()(r()({},A),{},{icon:(k=s[t])===null||k===void 0?void 0:k.icon}))},P=r()(r()({},m),{},{success:function(t){return c("success",t)},warning:function(t){return c("warning",t)},error:function(t){return c("error",t)},info:function(t){return c("info",t)},loading:function(t){return c("loading",t)}});return[P,C]};l.Z=r()(r()({},v.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:a})},4853:function(j,l,e){e.d(l,{JG:function(){return b},rb:function(){return h}});var p=e(26068),d=e.n(p),E=e(67825),x=e.n(E),O=e(75271),r=["maxWidth","maxHeight"];function y(){var s;return((s=window.g_config)===null||s===void 0?void 0:s.isIntl)||!1}var b=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var a=document.createElement("textarea");document.body.appendChild(a),a.style.position="fixed",a.style.clip="rect(0 0 0 0)",a.style.top="10px",a.value=_,a.select(),document.execCommand("copy",!0),document.body.removeChild(a)}},h=function(_){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.maxWidth,n=a.maxHeight,u=x()(a,r);return d()({overlayInnerStyle:{maxWidth:o||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},u)};function M(s){return React.isValidElement(s)}function v(s){var _=s||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var i=function(_){return _>=10?_:"0".concat(_)},U=function(_){if(_<60){var a=Math.ceil(_);return"0:".concat(i(a))}var o=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(i(o),":").concat(i(n))}},50935:function(j,l,e){e.r(l),e.d(l,{texts:function(){return p}});const p=[{value:"\u5728\u9879\u76EE\u6700\u5916\u5C42\u7EC4\u4EF6\u5957\u4E00\u5C42 ConfigProvider\uFF08\u7528\u6CD5\u540C AntD \u7684 ConfigProvider\uFF09",paraId:0,tocIndex:0},{value:`import { ConfigProvider, bailianTheme, Button } from '@agentscope-ai/design';
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
`,paraId:1,tocIndex:0}]}}]);
