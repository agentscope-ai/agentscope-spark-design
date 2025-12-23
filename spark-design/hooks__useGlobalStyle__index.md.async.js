"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[8338],{5817:function(A,c,e){e.r(c);var E=e(48661),d=e(28450),k=e(87276),P=e(83775),j=e(36337),i=e(14552),O=e(68879),h=e(15957),x=e(8958),M=e(98520),f=e(41395),a=e(79756),y=e(33779),r=e(21570),_=e(28060),s=e(75271),n=e(52676);function o(){return(0,n.jsx)(r.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"useglobalstyle-\u589E\u52A0-style-\u6837\u5F0F",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#useglobalstyle-\u589E\u52A0-style-\u6837\u5F0F",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"useGlobalStyle \u589E\u52A0 style \u6837\u5F0F"]}),(0,n.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,n.jsx)(r.Dl,{demo:{id:"useglobalstyle-demo-demo"},previewerProps:{filename:"src/hooks/useGlobalStyle/demo/demo.tsx"}})]})})})}c.default=o},64925:function(A,c,e){e.d(c,{Z:function(){return r}});var E=e(26068),d=e.n(E),k=e(51886),P=e(71649),j=e(42478),i=e(75271),O=e(53649),h=e.n(O),x=e(75469),M,f=(0,x.Z)(M||(M=h()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),a=e(52676),y=function(s){var n,o,l=(0,k.getCommonConfig)(),p=l.antPrefix,g=(0,i.useMemo)(function(){var u;if(!((u=s.menu)!==null&&u!==void 0&&u.selectable)||!s.menu){var v;return((v=s.menu)===null||v===void 0?void 0:v.items)||[]}return s.menu.items.map(function(m){var t={},b=m.label;return b&&(t.label=(0,a.jsxs)("div",{className:"".concat(p,"-dropdown-check-wrapper"),children:[b,(0,a.jsx)("span",{className:"".concat(p,"-dropdown-check-icon"),children:(0,a.jsx)(P.Z,{})})]})),d()(d()({},m),t)})},[(n=s.menu)===null||n===void 0?void 0:n.items,(o=s.menu)===null||o===void 0?void 0:o.selectable]),D=f();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{}),(0,a.jsx)(j.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},r=y},63953:function(A,c,e){var E=e(48305),d=e.n(E),k=e(67825),P=e.n(k),j=e(26068),i=e.n(j),O=e(58911),h=e(88602),x=e(99090),M=e(62910),f=e(82090),a=e(52676),y=["content"],r={success:{type:"success",icon:(0,a.jsx)(O.Z,{})},warning:{type:"warning",icon:(0,a.jsx)(h.Z,{})},error:{type:"error",icon:(0,a.jsx)(x.Z,{})},info:{type:"info",icon:(0,a.jsx)(M.Z,{})}},_=function(o,l){var p,g;typeof l=="string"?g={content:l}:g=i()({},l);var D=g,u=D.content,v=P()(D,y);f.ZP.open(i()({type:o,content:u,icon:o==="loading"||(p=r[o])===null||p===void 0?void 0:p.icon},v))},s=function(o){var l=f.ZP.useMessage(o),p=d()(l,2),g=p[0],D=p[1],u=function(t,b){var C,T;typeof b=="string"?T={content:b,type:t}:T=i()(i()({},b),{},{type:t}),g[t](i()(i()({},T),{},{icon:(C=r[t])===null||C===void 0?void 0:C.icon}))},v=i()(i()({},g),{},{success:function(t){return u("success",t)},warning:function(t){return u("warning",t)},error:function(t){return u("error",t)},info:function(t){return u("info",t)},loading:function(t){return u("loading",t)}});return[v,D]};c.Z=i()(i()({},f.ZP),{},{success:function(o){return _("success",o)},warning:function(o){return _("warning",o)},error:function(o){return _("error",o)},info:function(o){return _("info",o)},loading:function(o){return _("loading",o)},useMessage:s})},12281:function(A,c,e){e.d(c,{JG:function(){return h},rb:function(){return x}});var E=e(26068),d=e.n(E),k=e(67825),P=e.n(k),j=e(75271),i=["maxWidth","maxHeight"];function O(){var r;return((r=window.g_config)===null||r===void 0?void 0:r.isIntl)||!1}var h=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.maxWidth,o=s.maxHeight,l=P()(s,i);return d()({overlayInnerStyle:{maxWidth:n||326,maxHeight:o||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},l)};function M(r){return React.isValidElement(r)}function f(r){var _=r||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var a=function(_){return _>=10?_:"0".concat(_)},y=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(a(s))}var n=Math.floor(_/60),o=Math.ceil(_%60);return"".concat(a(n),":").concat(a(o))}}}]);
