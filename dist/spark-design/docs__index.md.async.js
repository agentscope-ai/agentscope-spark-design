"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[6935],{82701:function(j,g,e){e.r(g);var E=e(38027),d=e(89196),P=e(36973),b=e(96709),C=e(12635),r=e(7771),y=e(53808),M=e(11003),h=e(29027),x=e(91998),f=e(23297),o=e(90706),U=e(81375),i=e(87204),_=e(31109),n=e(75271),s=e(52676);function a(){return(0,s.jsx)(i.dY,{children:(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)(_.Z,{}),children:(0,s.jsx)(s.Fragment,{})})})}g.default=a},90088:function(j,g,e){e.d(g,{Z:function(){return i}});var E=e(26068),d=e.n(E),P=e(31209),b=e(71649),C=e(42478),r=e(75271),y=e(53649),M=e.n(y),h=e(88974),x,f=(0,h.Z)(x||(x=M()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),o=e(52676),U=function(n){var s,a,l=(0,P.getCommonConfig)(),c=l.antPrefix,p=(0,r.useMemo)(function(){var u;if(!((u=n.menu)!==null&&u!==void 0&&u.selectable)||!n.menu){var v;return((v=n.menu)===null||v===void 0?void 0:v.items)||[]}return n.menu.items.map(function(m){var t={},O=m.label;return O&&(t.label=(0,o.jsxs)("div",{className:"".concat(c,"-dropdown-check-wrapper"),children:[O,(0,o.jsx)("span",{className:"".concat(c,"-dropdown-check-icon"),children:(0,o.jsx)(b.Z,{})})]})),d()(d()({},m),t)})},[(s=n.menu)===null||s===void 0?void 0:s.items,(a=n.menu)===null||a===void 0?void 0:a.selectable]),D=f();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsx)(C.Z,d()(d()({},n),{},{menu:d()(d()({},n.menu),{},{items:p}),overlayStyle:d()({},n.overlayStyle)}))]})},i=U},33185:function(j,g,e){var E=e(48305),d=e.n(E),P=e(67825),b=e.n(P),C=e(26068),r=e.n(C),y=e(58911),M=e(88602),h=e(99090),x=e(62910),f=e(82090),o=e(52676),U=["content"],i={success:{type:"success",icon:(0,o.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(M.Z,{})},error:{type:"error",icon:(0,o.jsx)(h.Z,{})},info:{type:"info",icon:(0,o.jsx)(x.Z,{})}},_=function(a,l){var c,p;typeof l=="string"?p={content:l}:p=r()({},l);var D=p,u=D.content,v=b()(D,U);f.ZP.open(r()({type:a,content:u,icon:a==="loading"||(c=i[a])===null||c===void 0?void 0:c.icon},v))},n=function(a){var l=f.ZP.useMessage(a),c=d()(l,2),p=c[0],D=c[1],u=function(t,O){var k,A;typeof O=="string"?A={content:O,type:t}:A=r()(r()({},O),{},{type:t}),p[t](r()(r()({},A),{},{icon:(k=i[t])===null||k===void 0?void 0:k.icon}))},v=r()(r()({},p),{},{success:function(t){return u("success",t)},warning:function(t){return u("warning",t)},error:function(t){return u("error",t)},info:function(t){return u("info",t)},loading:function(t){return u("loading",t)}});return[v,D]};g.Z=r()(r()({},f.ZP),{},{success:function(a){return _("success",a)},warning:function(a){return _("warning",a)},error:function(a){return _("error",a)},info:function(a){return _("info",a)},loading:function(a){return _("loading",a)},useMessage:n})},4853:function(j,g,e){e.d(g,{JG:function(){return M},rb:function(){return h}});var E=e(26068),d=e.n(E),P=e(67825),b=e.n(P),C=e(75271),r=["maxWidth","maxHeight"];function y(){var i;return((i=window.g_config)===null||i===void 0?void 0:i.isIntl)||!1}var M=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var n=document.createElement("textarea");document.body.appendChild(n),n.style.position="fixed",n.style.clip="rect(0 0 0 0)",n.style.top="10px",n.value=_,n.select(),document.execCommand("copy",!0),document.body.removeChild(n)}},h=function(_){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=n.maxWidth,a=n.maxHeight,l=b()(n,r);return d()({overlayInnerStyle:{maxWidth:s||326,maxHeight:a||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},l)};function x(i){return React.isValidElement(i)}function f(i){var _=i||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var o=function(_){return _>=10?_:"0".concat(_)},U=function(_){if(_<60){var n=Math.ceil(_);return"0:".concat(o(n))}var s=Math.floor(_/60),a=Math.ceil(_%60);return"".concat(o(s),":").concat(o(a))}}}]);
