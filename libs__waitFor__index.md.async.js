"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[1356],{35682:function(A,p,e){e.r(p);var h=e(38027),d=e(89196),E=e(36973),P=e(96709),b=e(12635),i=e(7771),y=e(53808),k=e(11003),x=e(29027),M=e(91998),f=e(23297),a=e(90706),j=e(81375),o=e(87204),_=e(31109),n=e(75271),s=e(52676);function r(){return(0,s.jsx)(o.dY,{children:(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)(_.Z,{}),children:(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"markdown",children:[(0,s.jsxs)("h2",{id:"\u5B9A\u4E49",children:[(0,s.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B9A\u4E49",children:(0,s.jsx)("span",{className:"icon icon-link"})}),"\u5B9A\u4E49"]}),(0,s.jsxs)("h3",{id:"waitforoptions",children:[(0,s.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#waitforoptions",children:(0,s.jsx)("span",{className:"icon icon-link"})}),"WaitForOptions"]})]})})})})}p.default=r},90088:function(A,p,e){e.d(p,{Z:function(){return o}});var h=e(26068),d=e.n(h),E=e(31209),P=e(71649),b=e(42478),i=e(75271),y=e(53649),k=e.n(y),x=e(88974),M,f=(0,x.Z)(M||(M=k()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),a=e(52676),j=function(n){var s,r,c=(0,E.getCommonConfig)(),l=c.antPrefix,m=(0,i.useMemo)(function(){var u;if(!((u=n.menu)!==null&&u!==void 0&&u.selectable)||!n.menu){var v;return((v=n.menu)===null||v===void 0?void 0:v.items)||[]}return n.menu.items.map(function(g){var t={},O=g.label;return O&&(t.label=(0,a.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[O,(0,a.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,a.jsx)(P.Z,{})})]})),d()(d()({},g),t)})},[(s=n.menu)===null||s===void 0?void 0:s.items,(r=n.menu)===null||r===void 0?void 0:r.selectable]),D=f();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{}),(0,a.jsx)(b.Z,d()(d()({},n),{},{menu:d()(d()({},n.menu),{},{items:m}),overlayStyle:d()({},n.overlayStyle)}))]})},o=j},33185:function(A,p,e){var h=e(48305),d=e.n(h),E=e(67825),P=e.n(E),b=e(26068),i=e.n(b),y=e(58911),k=e(88602),x=e(99090),M=e(62910),f=e(82090),a=e(52676),j=["content"],o={success:{type:"success",icon:(0,a.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,a.jsx)(k.Z,{})},error:{type:"error",icon:(0,a.jsx)(x.Z,{})},info:{type:"info",icon:(0,a.jsx)(M.Z,{})}},_=function(r,c){var l,m;typeof c=="string"?m={content:c}:m=i()({},c);var D=m,u=D.content,v=P()(D,j);f.ZP.open(i()({type:r,content:u,icon:r==="loading"||(l=o[r])===null||l===void 0?void 0:l.icon},v))},n=function(r){var c=f.ZP.useMessage(r),l=d()(c,2),m=l[0],D=l[1],u=function(t,O){var C,T;typeof O=="string"?T={content:O,type:t}:T=i()(i()({},O),{},{type:t}),m[t](i()(i()({},T),{},{icon:(C=o[t])===null||C===void 0?void 0:C.icon}))},v=i()(i()({},m),{},{success:function(t){return u("success",t)},warning:function(t){return u("warning",t)},error:function(t){return u("error",t)},info:function(t){return u("info",t)},loading:function(t){return u("loading",t)}});return[v,D]};p.Z=i()(i()({},f.ZP),{},{success:function(r){return _("success",r)},warning:function(r){return _("warning",r)},error:function(r){return _("error",r)},info:function(r){return _("info",r)},loading:function(r){return _("loading",r)},useMessage:n})},4853:function(A,p,e){e.d(p,{JG:function(){return k},rb:function(){return x}});var h=e(26068),d=e.n(h),E=e(67825),P=e.n(E),b=e(75271),i=["maxWidth","maxHeight"];function y(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var k=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var n=document.createElement("textarea");document.body.appendChild(n),n.style.position="fixed",n.style.clip="rect(0 0 0 0)",n.style.top="10px",n.value=_,n.select(),document.execCommand("copy",!0),document.body.removeChild(n)}},x=function(_){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=n.maxWidth,r=n.maxHeight,c=P()(n,i);return d()({overlayInnerStyle:{maxWidth:s||326,maxHeight:r||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},c)};function M(o){return React.isValidElement(o)}function f(o){var _=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var a=function(_){return _>=10?_:"0".concat(_)},j=function(_){if(_<60){var n=Math.ceil(_);return"0:".concat(a(n))}var s=Math.floor(_/60),r=Math.ceil(_%60);return"".concat(a(s),":").concat(a(r))}}}]);
