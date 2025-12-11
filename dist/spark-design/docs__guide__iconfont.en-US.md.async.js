"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[8387],{33081:function(j,u,e){e.r(u);var p=e(38027),d=e(89196),P=e(36973),b=e(96709),C=e(12635),r=e(7771),y=e(53808),x=e(11003),h=e(29027),M=e(91998),v=e(23297),i=e(90706),U=e(81375),a=e(87204),_=e(31109),s=e(75271),t=e(42019),n=e(52676);function l(){return(0,n.jsx)(a.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"usage",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Usage"]}),(0,n.jsx)("p",{children:t.texts[0].value})]}),(0,n.jsx)(a.Dl,{demo:{id:"docs-guide-iconfont-demo-en-us-0"},previewerProps:{}})]})})})}u.default=l},90088:function(j,u,e){e.d(u,{Z:function(){return a}});var p=e(26068),d=e.n(p),P=e(31209),b=e(71649),C=e(42478),r=e(75271),y=e(53649),x=e.n(y),h=e(88974),M,v=(0,h.Z)(M||(M=x()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),i=e(52676),U=function(s){var t,n,l=(0,P.getCommonConfig)(),g=l.antPrefix,m=(0,r.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var o={},O=f.label;return O&&(o.label=(0,i.jsxs)("div",{className:"".concat(g,"-dropdown-check-wrapper"),children:[O,(0,i.jsx)("span",{className:"".concat(g,"-dropdown-check-icon"),children:(0,i.jsx)(b.Z,{})})]})),d()(d()({},f),o)})},[(t=s.menu)===null||t===void 0?void 0:t.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),D=v();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(D,{}),(0,i.jsx)(C.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:m}),overlayStyle:d()({},s.overlayStyle)}))]})},a=U},33185:function(j,u,e){var p=e(48305),d=e.n(p),P=e(67825),b=e.n(P),C=e(26068),r=e.n(C),y=e(58911),x=e(88602),h=e(99090),M=e(62910),v=e(82090),i=e(52676),U=["content"],a={success:{type:"success",icon:(0,i.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,i.jsx)(x.Z,{})},error:{type:"error",icon:(0,i.jsx)(h.Z,{})},info:{type:"info",icon:(0,i.jsx)(M.Z,{})}},_=function(n,l){var g,m;typeof l=="string"?m={content:l}:m=r()({},l);var D=m,c=D.content,E=b()(D,U);v.ZP.open(r()({type:n,content:c,icon:n==="loading"||(g=a[n])===null||g===void 0?void 0:g.icon},E))},s=function(n){var l=v.ZP.useMessage(n),g=d()(l,2),m=g[0],D=g[1],c=function(o,O){var k,A;typeof O=="string"?A={content:O,type:o}:A=r()(r()({},O),{},{type:o}),m[o](r()(r()({},A),{},{icon:(k=a[o])===null||k===void 0?void 0:k.icon}))},E=r()(r()({},m),{},{success:function(o){return c("success",o)},warning:function(o){return c("warning",o)},error:function(o){return c("error",o)},info:function(o){return c("info",o)},loading:function(o){return c("loading",o)}});return[E,D]};u.Z=r()(r()({},v.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},4853:function(j,u,e){e.d(u,{JG:function(){return x},rb:function(){return h}});var p=e(26068),d=e.n(p),P=e(67825),b=e.n(P),C=e(75271),r=["maxWidth","maxHeight"];function y(){var a;return((a=window.g_config)===null||a===void 0?void 0:a.isIntl)||!1}var x=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},h=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.maxWidth,n=s.maxHeight,l=b()(s,r);return d()({overlayInnerStyle:{maxWidth:t||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},l)};function M(a){return React.isValidElement(a)}function v(a){var _=a||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var i=function(_){return _>=10?_:"0".concat(_)},U=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(i(s))}var t=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(i(t),":").concat(i(n))}},42019:function(j,u,e){e.r(u),e.d(u,{texts:function(){return p}});const p=[{value:"If you have your own iconfont project, you can integrate your icons into Spark Design and access your icon with simply a symbol name.",paraId:0,tocIndex:0}]}}]);
