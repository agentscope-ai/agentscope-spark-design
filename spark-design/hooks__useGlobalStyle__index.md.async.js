"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[8338],{70624:function(A,p,e){e.r(p);var h=e(38027),i=e(89196),E=e(36973),P=e(96709),y=e(12635),d=e(7771),O=e(53808),k=e(11003),x=e(29027),M=e(91998),f=e(23297),a=e(90706),j=e(81375),o=e(87204),_=e(31109),s=e(75271),n=e(52676);function r(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"useglobalstyle-\u589E\u52A0-style-\u6837\u5F0F",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#useglobalstyle-\u589E\u52A0-style-\u6837\u5F0F",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"useGlobalStyle \u589E\u52A0 style \u6837\u5F0F"]}),(0,n.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,n.jsx)(o.Dl,{demo:{id:"useglobalstyle-demo-demo"},previewerProps:{filename:"src/hooks/useGlobalStyle/demo/demo.tsx"}})]})})})}p.default=r},90088:function(A,p,e){e.d(p,{Z:function(){return o}});var h=e(26068),i=e.n(h),E=e(31209),P=e(71649),y=e(42478),d=e(75271),O=e(53649),k=e.n(O),x=e(88974),M,f=(0,x.Z)(M||(M=k()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),a=e(52676),j=function(s){var n,r,l=(0,E.getCommonConfig)(),c=l.antPrefix,m=(0,d.useMemo)(function(){var u;if(!((u=s.menu)!==null&&u!==void 0&&u.selectable)||!s.menu){var v;return((v=s.menu)===null||v===void 0?void 0:v.items)||[]}return s.menu.items.map(function(g){var t={},b=g.label;return b&&(t.label=(0,a.jsxs)("div",{className:"".concat(c,"-dropdown-check-wrapper"),children:[b,(0,a.jsx)("span",{className:"".concat(c,"-dropdown-check-icon"),children:(0,a.jsx)(P.Z,{})})]})),i()(i()({},g),t)})},[(n=s.menu)===null||n===void 0?void 0:n.items,(r=s.menu)===null||r===void 0?void 0:r.selectable]),D=f();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{}),(0,a.jsx)(y.Z,i()(i()({},s),{},{menu:i()(i()({},s.menu),{},{items:m}),overlayStyle:i()({},s.overlayStyle)}))]})},o=j},33185:function(A,p,e){var h=e(48305),i=e.n(h),E=e(67825),P=e.n(E),y=e(26068),d=e.n(y),O=e(58911),k=e(88602),x=e(99090),M=e(62910),f=e(82090),a=e(52676),j=["content"],o={success:{type:"success",icon:(0,a.jsx)(O.Z,{})},warning:{type:"warning",icon:(0,a.jsx)(k.Z,{})},error:{type:"error",icon:(0,a.jsx)(x.Z,{})},info:{type:"info",icon:(0,a.jsx)(M.Z,{})}},_=function(r,l){var c,m;typeof l=="string"?m={content:l}:m=d()({},l);var D=m,u=D.content,v=P()(D,j);f.ZP.open(d()({type:r,content:u,icon:r==="loading"||(c=o[r])===null||c===void 0?void 0:c.icon},v))},s=function(r){var l=f.ZP.useMessage(r),c=i()(l,2),m=c[0],D=c[1],u=function(t,b){var C,T;typeof b=="string"?T={content:b,type:t}:T=d()(d()({},b),{},{type:t}),m[t](d()(d()({},T),{},{icon:(C=o[t])===null||C===void 0?void 0:C.icon}))},v=d()(d()({},m),{},{success:function(t){return u("success",t)},warning:function(t){return u("warning",t)},error:function(t){return u("error",t)},info:function(t){return u("info",t)},loading:function(t){return u("loading",t)}});return[v,D]};p.Z=d()(d()({},f.ZP),{},{success:function(r){return _("success",r)},warning:function(r){return _("warning",r)},error:function(r){return _("error",r)},info:function(r){return _("info",r)},loading:function(r){return _("loading",r)},useMessage:s})},4853:function(A,p,e){e.d(p,{JG:function(){return k},rb:function(){return x}});var h=e(26068),i=e.n(h),E=e(67825),P=e.n(E),y=e(75271),d=["maxWidth","maxHeight"];function O(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var k=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.maxWidth,r=s.maxHeight,l=P()(s,d);return i()({overlayInnerStyle:{maxWidth:n||326,maxHeight:r||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},l)};function M(o){return React.isValidElement(o)}function f(o){var _=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var a=function(_){return _>=10?_:"0".concat(_)},j=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(a(s))}var n=Math.floor(_/60),r=Math.ceil(_%60);return"".concat(a(n),":").concat(a(r))}}}]);
