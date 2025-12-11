"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[1356],{35682:function(U,g,e){e.r(g);var E=e(38027),d=e(89196),P=e(36973),b=e(96709),C=e(12635),t=e(7771),y=e(53808),h=e(11003),x=e(29027),M=e(91998),f=e(23297),o=e(90706),j=e(81375),i=e(87204),_=e(31109),n=e(75271),a=e(52676);function s(){return(0,a.jsx)(i.dY,{children:(0,a.jsx)(n.Suspense,{fallback:(0,a.jsx)(_.Z,{}),children:(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"markdown",children:[(0,a.jsxs)("h2",{id:"\u5B9A\u4E49",children:[(0,a.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B9A\u4E49",children:(0,a.jsx)("span",{className:"icon icon-link"})}),"\u5B9A\u4E49"]}),(0,a.jsxs)("h3",{id:"waitforoptions",children:[(0,a.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#waitforoptions",children:(0,a.jsx)("span",{className:"icon icon-link"})}),"WaitForOptions"]})]})})})})}g.default=s},90088:function(U,g,e){e.d(g,{Z:function(){return i}});var E=e(26068),d=e.n(E),P=e(31209),b=e(71649),C=e(42478),t=e(75271),y=e(53649),h=e.n(y),x=e(88974),M,f=(0,x.Z)(M||(M=h()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),o=e(52676),j=function(n){var a,s,u=(0,P.getCommonConfig)(),c=u.antPrefix,p=(0,t.useMemo)(function(){var l;if(!((l=n.menu)!==null&&l!==void 0&&l.selectable)||!n.menu){var v;return((v=n.menu)===null||v===void 0?void 0:v.items)||[]}return n.menu.items.map(function(m){var r={},O=m.label;return O&&(r.label=(0,o.jsxs)("div",{className:"".concat(c,"-dropdown-check-wrapper"),children:[O,(0,o.jsx)("span",{className:"".concat(c,"-dropdown-check-icon"),children:(0,o.jsx)(b.Z,{})})]})),d()(d()({},m),r)})},[(a=n.menu)===null||a===void 0?void 0:a.items,(s=n.menu)===null||s===void 0?void 0:s.selectable]),D=f();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsx)(C.Z,d()(d()({},n),{},{menu:d()(d()({},n.menu),{},{items:p}),overlayStyle:d()({},n.overlayStyle)}))]})},i=j},33185:function(U,g,e){var E=e(48305),d=e.n(E),P=e(67825),b=e.n(P),C=e(26068),t=e.n(C),y=e(58911),h=e(88602),x=e(99090),M=e(62910),f=e(82090),o=e(52676),j=["content"],i={success:{type:"success",icon:(0,o.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(h.Z,{})},error:{type:"error",icon:(0,o.jsx)(x.Z,{})},info:{type:"info",icon:(0,o.jsx)(M.Z,{})}},_=function(s,u){var c,p;typeof u=="string"?p={content:u}:p=t()({},u);var D=p,l=D.content,v=b()(D,j);f.ZP.open(t()({type:s,content:l,icon:s==="loading"||(c=i[s])===null||c===void 0?void 0:c.icon},v))},n=function(s){var u=f.ZP.useMessage(s),c=d()(u,2),p=c[0],D=c[1],l=function(r,O){var k,A;typeof O=="string"?A={content:O,type:r}:A=t()(t()({},O),{},{type:r}),p[r](t()(t()({},A),{},{icon:(k=i[r])===null||k===void 0?void 0:k.icon}))},v=t()(t()({},p),{},{success:function(r){return l("success",r)},warning:function(r){return l("warning",r)},error:function(r){return l("error",r)},info:function(r){return l("info",r)},loading:function(r){return l("loading",r)}});return[v,D]};g.Z=t()(t()({},f.ZP),{},{success:function(s){return _("success",s)},warning:function(s){return _("warning",s)},error:function(s){return _("error",s)},info:function(s){return _("info",s)},loading:function(s){return _("loading",s)},useMessage:n})},4853:function(U,g,e){e.d(g,{JG:function(){return h},rb:function(){return x}});var E=e(26068),d=e.n(E),P=e(67825),b=e.n(P),C=e(75271),t=["maxWidth","maxHeight"];function y(){var i;return((i=window.g_config)===null||i===void 0?void 0:i.isIntl)||!1}var h=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var n=document.createElement("textarea");document.body.appendChild(n),n.style.position="fixed",n.style.clip="rect(0 0 0 0)",n.style.top="10px",n.value=_,n.select(),document.execCommand("copy",!0),document.body.removeChild(n)}},x=function(_){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.maxWidth,s=n.maxHeight,u=b()(n,t);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:s||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},u)};function M(i){return React.isValidElement(i)}function f(i){var _=i||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var o=function(_){return _>=10?_:"0".concat(_)},j=function(_){if(_<60){var n=Math.ceil(_);return"0:".concat(o(n))}var a=Math.floor(_/60),s=Math.ceil(_%60);return"".concat(o(a),":").concat(o(s))}}}]);
