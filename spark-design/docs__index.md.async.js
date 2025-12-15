"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[6935],{82701:function(A,l,e){e.r(l);var E=e(38027),i=e(89196),P=e(36973),h=e(96709),b=e(12635),d=e(7771),y=e(53808),k=e(11003),M=e(29027),x=e(91998),f=e(23297),a=e(90706),j=e(81375),o=e(87204),_=e(31109),n=e(75271),r=e(52676);function s(){return(0,r.jsx)(o.dY,{children:(0,r.jsx)(n.Suspense,{fallback:(0,r.jsx)(_.Z,{}),children:(0,r.jsx)(r.Fragment,{})})})}l.default=s},90088:function(A,l,e){e.d(l,{Z:function(){return o}});var E=e(26068),i=e.n(E),P=e(31209),h=e(71649),b=e(42478),d=e(75271),y=e(53649),k=e.n(y),M=e(88974),x,f=(0,M.Z)(x||(x=k()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),a=e(52676),j=function(n){var r,s,p=(0,P.getCommonConfig)(),c=p.antPrefix,m=(0,d.useMemo)(function(){var u;if(!((u=n.menu)!==null&&u!==void 0&&u.selectable)||!n.menu){var v;return((v=n.menu)===null||v===void 0?void 0:v.items)||[]}return n.menu.items.map(function(g){var t={},O=g.label;return O&&(t.label=(0,a.jsxs)("div",{className:"".concat(c,"-dropdown-check-wrapper"),children:[O,(0,a.jsx)("span",{className:"".concat(c,"-dropdown-check-icon"),children:(0,a.jsx)(h.Z,{})})]})),i()(i()({},g),t)})},[(r=n.menu)===null||r===void 0?void 0:r.items,(s=n.menu)===null||s===void 0?void 0:s.selectable]),D=f();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{}),(0,a.jsx)(b.Z,i()(i()({},n),{},{menu:i()(i()({},n.menu),{},{items:m}),overlayStyle:i()({},n.overlayStyle)}))]})},o=j},33185:function(A,l,e){var E=e(48305),i=e.n(E),P=e(67825),h=e.n(P),b=e(26068),d=e.n(b),y=e(58911),k=e(88602),M=e(99090),x=e(62910),f=e(82090),a=e(52676),j=["content"],o={success:{type:"success",icon:(0,a.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,a.jsx)(k.Z,{})},error:{type:"error",icon:(0,a.jsx)(M.Z,{})},info:{type:"info",icon:(0,a.jsx)(x.Z,{})}},_=function(s,p){var c,m;typeof p=="string"?m={content:p}:m=d()({},p);var D=m,u=D.content,v=h()(D,j);f.ZP.open(d()({type:s,content:u,icon:s==="loading"||(c=o[s])===null||c===void 0?void 0:c.icon},v))},n=function(s){var p=f.ZP.useMessage(s),c=i()(p,2),m=c[0],D=c[1],u=function(t,O){var C,T;typeof O=="string"?T={content:O,type:t}:T=d()(d()({},O),{},{type:t}),m[t](d()(d()({},T),{},{icon:(C=o[t])===null||C===void 0?void 0:C.icon}))},v=d()(d()({},m),{},{success:function(t){return u("success",t)},warning:function(t){return u("warning",t)},error:function(t){return u("error",t)},info:function(t){return u("info",t)},loading:function(t){return u("loading",t)}});return[v,D]};l.Z=d()(d()({},f.ZP),{},{success:function(s){return _("success",s)},warning:function(s){return _("warning",s)},error:function(s){return _("error",s)},info:function(s){return _("info",s)},loading:function(s){return _("loading",s)},useMessage:n})},4853:function(A,l,e){e.d(l,{JG:function(){return k},rb:function(){return M}});var E=e(26068),i=e.n(E),P=e(67825),h=e.n(P),b=e(75271),d=["maxWidth","maxHeight"];function y(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var k=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var n=document.createElement("textarea");document.body.appendChild(n),n.style.position="fixed",n.style.clip="rect(0 0 0 0)",n.style.top="10px",n.value=_,n.select(),document.execCommand("copy",!0),document.body.removeChild(n)}},M=function(_){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.maxWidth,s=n.maxHeight,p=h()(n,d);return i()({overlayInnerStyle:{maxWidth:r||326,maxHeight:s||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},p)};function x(o){return React.isValidElement(o)}function f(o){var _=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var a=function(_){return _>=10?_:"0".concat(_)},j=function(_){if(_<60){var n=Math.ceil(_);return"0:".concat(a(n))}var r=Math.floor(_/60),s=Math.ceil(_%60);return"".concat(a(r),":").concat(a(s))}}}]);
