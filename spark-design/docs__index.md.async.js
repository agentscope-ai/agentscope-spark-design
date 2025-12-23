"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[6935],{32202:function(A,c,e){e.r(c);var E=e(48661),d=e(28450),P=e(87276),k=e(83775),b=e(36337),i=e(14552),j=e(68879),h=e(15957),M=e(8958),x=e(98520),f=e(41395),a=e(79756),y=e(33779),r=e(21570),_=e(28060),n=e(75271),o=e(52676);function s(){return(0,o.jsx)(r.dY,{children:(0,o.jsx)(n.Suspense,{fallback:(0,o.jsx)(_.Z,{}),children:(0,o.jsx)(o.Fragment,{})})})}c.default=s},64925:function(A,c,e){e.d(c,{Z:function(){return r}});var E=e(26068),d=e.n(E),P=e(51886),k=e(71649),b=e(42478),i=e(75271),j=e(53649),h=e.n(j),M=e(75469),x,f=(0,M.Z)(x||(x=h()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),a=e(52676),y=function(n){var o,s,p=(0,P.getCommonConfig)(),l=p.antPrefix,g=(0,i.useMemo)(function(){var u;if(!((u=n.menu)!==null&&u!==void 0&&u.selectable)||!n.menu){var v;return((v=n.menu)===null||v===void 0?void 0:v.items)||[]}return n.menu.items.map(function(m){var t={},O=m.label;return O&&(t.label=(0,a.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[O,(0,a.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,a.jsx)(k.Z,{})})]})),d()(d()({},m),t)})},[(o=n.menu)===null||o===void 0?void 0:o.items,(s=n.menu)===null||s===void 0?void 0:s.selectable]),D=f();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{}),(0,a.jsx)(b.Z,d()(d()({},n),{},{menu:d()(d()({},n.menu),{},{items:g}),overlayStyle:d()({},n.overlayStyle)}))]})},r=y},63953:function(A,c,e){var E=e(48305),d=e.n(E),P=e(67825),k=e.n(P),b=e(26068),i=e.n(b),j=e(58911),h=e(88602),M=e(99090),x=e(62910),f=e(82090),a=e(52676),y=["content"],r={success:{type:"success",icon:(0,a.jsx)(j.Z,{})},warning:{type:"warning",icon:(0,a.jsx)(h.Z,{})},error:{type:"error",icon:(0,a.jsx)(M.Z,{})},info:{type:"info",icon:(0,a.jsx)(x.Z,{})}},_=function(s,p){var l,g;typeof p=="string"?g={content:p}:g=i()({},p);var D=g,u=D.content,v=k()(D,y);f.ZP.open(i()({type:s,content:u,icon:s==="loading"||(l=r[s])===null||l===void 0?void 0:l.icon},v))},n=function(s){var p=f.ZP.useMessage(s),l=d()(p,2),g=l[0],D=l[1],u=function(t,O){var C,T;typeof O=="string"?T={content:O,type:t}:T=i()(i()({},O),{},{type:t}),g[t](i()(i()({},T),{},{icon:(C=r[t])===null||C===void 0?void 0:C.icon}))},v=i()(i()({},g),{},{success:function(t){return u("success",t)},warning:function(t){return u("warning",t)},error:function(t){return u("error",t)},info:function(t){return u("info",t)},loading:function(t){return u("loading",t)}});return[v,D]};c.Z=i()(i()({},f.ZP),{},{success:function(s){return _("success",s)},warning:function(s){return _("warning",s)},error:function(s){return _("error",s)},info:function(s){return _("info",s)},loading:function(s){return _("loading",s)},useMessage:n})},12281:function(A,c,e){e.d(c,{JG:function(){return h},rb:function(){return M}});var E=e(26068),d=e.n(E),P=e(67825),k=e.n(P),b=e(75271),i=["maxWidth","maxHeight"];function j(){var r;return((r=window.g_config)===null||r===void 0?void 0:r.isIntl)||!1}var h=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var n=document.createElement("textarea");document.body.appendChild(n),n.style.position="fixed",n.style.clip="rect(0 0 0 0)",n.style.top="10px",n.value=_,n.select(),document.execCommand("copy",!0),document.body.removeChild(n)}},M=function(_){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.maxWidth,s=n.maxHeight,p=k()(n,i);return d()({overlayInnerStyle:{maxWidth:o||326,maxHeight:s||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},p)};function x(r){return React.isValidElement(r)}function f(r){var _=r||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var a=function(_){return _>=10?_:"0".concat(_)},y=function(_){if(_<60){var n=Math.ceil(_);return"0:".concat(a(n))}var o=Math.floor(_/60),s=Math.ceil(_%60);return"".concat(a(o),":").concat(a(s))}}}]);
