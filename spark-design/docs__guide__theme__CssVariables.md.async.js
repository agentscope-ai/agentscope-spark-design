"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[2905],{22139:function(j,u,e){e.r(u);var m=e(38027),i=e(89196),h=e(36973),P=e(96709),b=e(12635),d=e(7771),y=e(53808),k=e(11003),x=e(29027),M=e(91998),v=e(23297),a=e(90706),C=e(81375),r=e(87204),_=e(31109),s=e(75271),o=e(25074),n=e(52676);function c(){return(0,n.jsx)(r.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"\u9ED8\u8BA4\u767E\u70BC\u4E3B\u9898\u98CE\u683C\u53D8\u91CF",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u9ED8\u8BA4\u767E\u70BC\u4E3B\u9898\u98CE\u683C\u53D8\u91CF",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u9ED8\u8BA4\u767E\u70BC\u4E3B\u9898\u98CE\u683C\u53D8\u91CF"]}),(0,n.jsx)("p",{children:o.texts[0].value}),(0,n.jsx)(d.Z,{lang:"ts",children:o.texts[1].value})]})})})})}u.default=c},90088:function(j,u,e){e.d(u,{Z:function(){return r}});var m=e(26068),i=e.n(m),h=e(31209),P=e(71649),b=e(42478),d=e(75271),y=e(53649),k=e.n(y),x=e(88974),M,v=(0,x.Z)(M||(M=k()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),a=e(52676),C=function(s){var o,n,c=(0,h.getCommonConfig)(),p=c.antPrefix,g=(0,d.useMemo)(function(){var l;if(!((l=s.menu)!==null&&l!==void 0&&l.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,a.jsxs)("div",{className:"".concat(p,"-dropdown-check-wrapper"),children:[O,(0,a.jsx)("span",{className:"".concat(p,"-dropdown-check-icon"),children:(0,a.jsx)(P.Z,{})})]})),i()(i()({},f),t)})},[(o=s.menu)===null||o===void 0?void 0:o.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),D=v();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{}),(0,a.jsx)(b.Z,i()(i()({},s),{},{menu:i()(i()({},s.menu),{},{items:g}),overlayStyle:i()({},s.overlayStyle)}))]})},r=C},33185:function(j,u,e){var m=e(48305),i=e.n(m),h=e(67825),P=e.n(h),b=e(26068),d=e.n(b),y=e(58911),k=e(88602),x=e(99090),M=e(62910),v=e(82090),a=e(52676),C=["content"],r={success:{type:"success",icon:(0,a.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,a.jsx)(k.Z,{})},error:{type:"error",icon:(0,a.jsx)(x.Z,{})},info:{type:"info",icon:(0,a.jsx)(M.Z,{})}},_=function(n,c){var p,g;typeof c=="string"?g={content:c}:g=d()({},c);var D=g,l=D.content,E=P()(D,C);v.ZP.open(d()({type:n,content:l,icon:n==="loading"||(p=r[n])===null||p===void 0?void 0:p.icon},E))},s=function(n){var c=v.ZP.useMessage(n),p=i()(c,2),g=p[0],D=p[1],l=function(t,O){var A,I;typeof O=="string"?I={content:O,type:t}:I=d()(d()({},O),{},{type:t}),g[t](d()(d()({},I),{},{icon:(A=r[t])===null||A===void 0?void 0:A.icon}))},E=d()(d()({},g),{},{success:function(t){return l("success",t)},warning:function(t){return l("warning",t)},error:function(t){return l("error",t)},info:function(t){return l("info",t)},loading:function(t){return l("loading",t)}});return[E,D]};u.Z=d()(d()({},v.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},4853:function(j,u,e){e.d(u,{JG:function(){return k},rb:function(){return x}});var m=e(26068),i=e.n(m),h=e(67825),P=e.n(h),b=e(75271),d=["maxWidth","maxHeight"];function y(){var r;return((r=window.g_config)===null||r===void 0?void 0:r.isIntl)||!1}var k=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=s.maxWidth,n=s.maxHeight,c=P()(s,d);return i()({overlayInnerStyle:{maxWidth:o||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},c)};function M(r){return React.isValidElement(r)}function v(r){var _=r||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var a=function(_){return _>=10?_:"0".concat(_)},C=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(a(s))}var o=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(a(o),":").concat(a(n))}},25074:function(j,u,e){e.r(u),e.d(u,{texts:function(){return m}});const m=[{value:"\u5F15\u5165 BLConfigProvider \u540E\uFF0C\u4F1A\u81EA\u52A8\u6CE8\u518C\u5982\u4E0B css \u53D8\u91CF, \u5176\u4E2D\u6570\u5B57\u7C7B\u578B\u53D8\u91CF\u4F1A\u81EA\u52A8\u589E\u52A0 px \u5355\u4F4D\uFF1A",paraId:0,tocIndex:0},{value:`Code snippet path not found: ../../../src/antd/bailianCssVariables.ts
`,paraId:1,tocIndex:0}]}}]);
