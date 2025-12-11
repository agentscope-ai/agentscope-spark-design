"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[8338],{70624:function(U,g,e){e.r(g);var E=e(38027),d=e(89196),P=e(36973),b=e(96709),O=e(12635),t=e(7771),C=e(53808),h=e(11003),x=e(29027),M=e(91998),f=e(23297),o=e(90706),j=e(81375),i=e(87204),_=e(31109),s=e(75271),n=e(52676);function a(){return(0,n.jsx)(i.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"useglobalstyle-\u589E\u52A0-style-\u6837\u5F0F",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#useglobalstyle-\u589E\u52A0-style-\u6837\u5F0F",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"useGlobalStyle \u589E\u52A0 style \u6837\u5F0F"]}),(0,n.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,n.jsx)(i.Dl,{demo:{id:"useglobalstyle-demo-demo"},previewerProps:{filename:"src/hooks/useGlobalStyle/demo/demo.tsx"}})]})})})}g.default=a},90088:function(U,g,e){e.d(g,{Z:function(){return i}});var E=e(26068),d=e.n(E),P=e(31209),b=e(71649),O=e(42478),t=e(75271),C=e(53649),h=e.n(C),x=e(88974),M,f=(0,x.Z)(M||(M=h()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),o=e(52676),j=function(s){var n,a,u=(0,P.getCommonConfig)(),c=u.antPrefix,m=(0,t.useMemo)(function(){var l;if(!((l=s.menu)!==null&&l!==void 0&&l.selectable)||!s.menu){var v;return((v=s.menu)===null||v===void 0?void 0:v.items)||[]}return s.menu.items.map(function(p){var r={},y=p.label;return y&&(r.label=(0,o.jsxs)("div",{className:"".concat(c,"-dropdown-check-wrapper"),children:[y,(0,o.jsx)("span",{className:"".concat(c,"-dropdown-check-icon"),children:(0,o.jsx)(b.Z,{})})]})),d()(d()({},p),r)})},[(n=s.menu)===null||n===void 0?void 0:n.items,(a=s.menu)===null||a===void 0?void 0:a.selectable]),D=f();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsx)(O.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:m}),overlayStyle:d()({},s.overlayStyle)}))]})},i=j},33185:function(U,g,e){var E=e(48305),d=e.n(E),P=e(67825),b=e.n(P),O=e(26068),t=e.n(O),C=e(58911),h=e(88602),x=e(99090),M=e(62910),f=e(82090),o=e(52676),j=["content"],i={success:{type:"success",icon:(0,o.jsx)(C.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(h.Z,{})},error:{type:"error",icon:(0,o.jsx)(x.Z,{})},info:{type:"info",icon:(0,o.jsx)(M.Z,{})}},_=function(a,u){var c,m;typeof u=="string"?m={content:u}:m=t()({},u);var D=m,l=D.content,v=b()(D,j);f.ZP.open(t()({type:a,content:l,icon:a==="loading"||(c=i[a])===null||c===void 0?void 0:c.icon},v))},s=function(a){var u=f.ZP.useMessage(a),c=d()(u,2),m=c[0],D=c[1],l=function(r,y){var k,A;typeof y=="string"?A={content:y,type:r}:A=t()(t()({},y),{},{type:r}),m[r](t()(t()({},A),{},{icon:(k=i[r])===null||k===void 0?void 0:k.icon}))},v=t()(t()({},m),{},{success:function(r){return l("success",r)},warning:function(r){return l("warning",r)},error:function(r){return l("error",r)},info:function(r){return l("info",r)},loading:function(r){return l("loading",r)}});return[v,D]};g.Z=t()(t()({},f.ZP),{},{success:function(a){return _("success",a)},warning:function(a){return _("warning",a)},error:function(a){return _("error",a)},info:function(a){return _("info",a)},loading:function(a){return _("loading",a)},useMessage:s})},4853:function(U,g,e){e.d(g,{JG:function(){return h},rb:function(){return x}});var E=e(26068),d=e.n(E),P=e(67825),b=e.n(P),O=e(75271),t=["maxWidth","maxHeight"];function C(){var i;return((i=window.g_config)===null||i===void 0?void 0:i.isIntl)||!1}var h=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.maxWidth,a=s.maxHeight,u=b()(s,t);return d()({overlayInnerStyle:{maxWidth:n||326,maxHeight:a||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},u)};function M(i){return React.isValidElement(i)}function f(i){var _=i||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var o=function(_){return _>=10?_:"0".concat(_)},j=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(o(s))}var n=Math.floor(_/60),a=Math.ceil(_%60);return"".concat(o(n),":").concat(o(a))}}}]);
