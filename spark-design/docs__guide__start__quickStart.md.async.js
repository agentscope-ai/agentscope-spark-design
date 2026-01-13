"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[8300],{15686:function(y,u,n){n.r(u);var g=n(41570),d=n(12968),P=n(77815),E=n(35771),O=n(71705),i=n(64777),b=n(11851),h=n(78616),x=n(52990),M=n(74235),v=n(73031),o=n(30864),C=n(29370),r=n(87274),_=n(18282),s=n(75271),a=n(93263),e=n(52676);function c(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(s.Suspense,{fallback:(0,e.jsx)(_.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u5FEB\u901F\u4F7F\u7528",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5FEB\u901F\u4F7F\u7528",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5FEB\u901F\u4F7F\u7528"]}),(0,e.jsx)("p",{children:a.texts[0].value}),(0,e.jsx)(i.Z,{lang:"tsx",children:a.texts[1].value})]})})})})}u.default=c},38356:function(y,u,n){n.d(u,{Z:function(){return r}});var g=n(26068),d=n.n(g),P=n(60213),E=n(68278),O=n(44201),i=n(75271),b=n(53649),h=n.n(b),x=n(30764),M,v=(0,x.Z)(M||(M=h()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),o=n(52676),C=function(s){var a,e,c=(0,P.getCommonConfig)(),l=c.antPrefix,m=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var k;return((k=s.menu)===null||k===void 0?void 0:k.items)||[]}return s.menu.items.map(function(f){var t={},j=f.label;return j&&(t.label=(0,o.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[j,(0,o.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,o.jsx)(E.Z,{})})]})),d()(d()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(e=s.menu)===null||e===void 0?void 0:e.selectable]),D=v();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsx)(O.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:m}),overlayStyle:d()({},s.overlayStyle)}))]})},r=C},39971:function(y,u,n){var g=n(48305),d=n.n(g),P=n(67825),E=n.n(P),O=n(26068),i=n.n(O),b=n(58911),h=n(88602),x=n(99090),M=n(62910),v=n(86212),o=n(52676),C=["content"],r={success:{type:"success",icon:(0,o.jsx)(b.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(h.Z,{})},error:{type:"error",icon:(0,o.jsx)(x.Z,{})},info:{type:"info",icon:(0,o.jsx)(M.Z,{})}},_=function(e,c){var l,m;typeof c=="string"?m={content:c}:m=i()({},c);var D=m,p=D.content,k=E()(D,C);v.ZP.open(i()({type:e,content:p,icon:e==="loading"||(l=r[e])===null||l===void 0?void 0:l.icon},k))},s=function(e){var c=v.ZP.useMessage(e),l=d()(c,2),m=l[0],D=l[1],p=function(t,j){var A,T;typeof j=="string"?T={content:j,type:t}:T=i()(i()({},j),{},{type:t}),m[t](i()(i()({},T),{},{icon:(A=r[t])===null||A===void 0?void 0:A.icon}))},k=i()(i()({},m),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[k,D]};u.Z=i()(i()({},v.ZP),{},{success:function(e){return _("success",e)},warning:function(e){return _("warning",e)},error:function(e){return _("error",e)},info:function(e){return _("info",e)},loading:function(e){return _("loading",e)},useMessage:s})},95336:function(y,u,n){n.d(u,{JG:function(){return h},rb:function(){return x}});var g=n(26068),d=n.n(g),P=n(67825),E=n.n(P),O=n(75271),i=["maxWidth","maxHeight"];function b(){var r;return((r=window.g_config)===null||r===void 0?void 0:r.isIntl)||!1}var h=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,e=s.maxHeight,c=E()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:e||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},c)};function M(r){return React.isValidElement(r)}function v(r){var _=r||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var o=function(_){return _>=10?_:"0".concat(_)},C=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(o(s))}var a=Math.floor(_/60),e=Math.ceil(_%60);return"".concat(o(a),":").concat(o(e))}},93263:function(y,u,n){n.r(u),n.d(u,{texts:function(){return g}});const g=[{value:"\u5728\u9879\u76EE\u6700\u5916\u5C42\u7EC4\u4EF6\u5957\u4E00\u5C42 ConfigProvider\uFF08\u7528\u6CD5\u540C AntD \u7684 ConfigProvider\uFF09",paraId:0,tocIndex:0},{value:`import { ConfigProvider, bailianTheme, Button } from '@agentscope-ai/design';
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
