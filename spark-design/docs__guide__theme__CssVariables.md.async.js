"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[2905],{2853:function(y,u,e){e.r(u);var g=e(41570),d=e(12968),k=e(77815),P=e(35771),j=e(71705),i=e(64777),b=e(11851),h=e(78616),x=e(52990),M=e(74235),v=e(73031),a=e(30864),C=e(29370),r=e(87274),_=e(18282),s=e(75271),o=e(5661),n=e(52676);function c(){return(0,n.jsx)(r.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"\u9ED8\u8BA4\u767E\u70BC\u4E3B\u9898\u98CE\u683C\u53D8\u91CF",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u9ED8\u8BA4\u767E\u70BC\u4E3B\u9898\u98CE\u683C\u53D8\u91CF",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u9ED8\u8BA4\u767E\u70BC\u4E3B\u9898\u98CE\u683C\u53D8\u91CF"]}),(0,n.jsx)("p",{children:o.texts[0].value}),(0,n.jsx)(i.Z,{lang:"ts",children:o.texts[1].value})]})})})})}u.default=c},38356:function(y,u,e){e.d(u,{Z:function(){return r}});var g=e(26068),d=e.n(g),k=e(60213),P=e(68278),j=e(44201),i=e(75271),b=e(53649),h=e.n(b),x=e(30764),M,v=(0,x.Z)(M||(M=h()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),a=e(52676),C=function(s){var o,n,c=(0,k.getCommonConfig)(),l=c.antPrefix,m=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,a.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[O,(0,a.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,a.jsx)(P.Z,{})})]})),d()(d()({},f),t)})},[(o=s.menu)===null||o===void 0?void 0:o.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),D=v();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{}),(0,a.jsx)(j.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:m}),overlayStyle:d()({},s.overlayStyle)}))]})},r=C},39971:function(y,u,e){var g=e(48305),d=e.n(g),k=e(67825),P=e.n(k),j=e(26068),i=e.n(j),b=e(58911),h=e(88602),x=e(99090),M=e(62910),v=e(86212),a=e(52676),C=["content"],r={success:{type:"success",icon:(0,a.jsx)(b.Z,{})},warning:{type:"warning",icon:(0,a.jsx)(h.Z,{})},error:{type:"error",icon:(0,a.jsx)(x.Z,{})},info:{type:"info",icon:(0,a.jsx)(M.Z,{})}},_=function(n,c){var l,m;typeof c=="string"?m={content:c}:m=i()({},c);var D=m,p=D.content,E=P()(D,C);v.ZP.open(i()({type:n,content:p,icon:n==="loading"||(l=r[n])===null||l===void 0?void 0:l.icon},E))},s=function(n){var c=v.ZP.useMessage(n),l=d()(c,2),m=l[0],D=l[1],p=function(t,O){var A,I;typeof O=="string"?I={content:O,type:t}:I=i()(i()({},O),{},{type:t}),m[t](i()(i()({},I),{},{icon:(A=r[t])===null||A===void 0?void 0:A.icon}))},E=i()(i()({},m),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[E,D]};u.Z=i()(i()({},v.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},95336:function(y,u,e){e.d(u,{JG:function(){return h},rb:function(){return x}});var g=e(26068),d=e.n(g),k=e(67825),P=e.n(k),j=e(75271),i=["maxWidth","maxHeight"];function b(){var r;return((r=window.g_config)===null||r===void 0?void 0:r.isIntl)||!1}var h=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=s.maxWidth,n=s.maxHeight,c=P()(s,i);return d()({overlayInnerStyle:{maxWidth:o||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},c)};function M(r){return React.isValidElement(r)}function v(r){var _=r||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var a=function(_){return _>=10?_:"0".concat(_)},C=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(a(s))}var o=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(a(o),":").concat(a(n))}},5661:function(y,u,e){e.r(u),e.d(u,{texts:function(){return g}});const g=[{value:"\u5F15\u5165 BLConfigProvider \u540E\uFF0C\u4F1A\u81EA\u52A8\u6CE8\u518C\u5982\u4E0B css \u53D8\u91CF, \u5176\u4E2D\u6570\u5B57\u7C7B\u578B\u53D8\u91CF\u4F1A\u81EA\u52A8\u589E\u52A0 px \u5355\u4F4D\uFF1A",paraId:0,tocIndex:0},{value:`Code snippet path not found: ../../../src/antd/bailianCssVariables.ts
`,paraId:1,tocIndex:0}]}}]);
