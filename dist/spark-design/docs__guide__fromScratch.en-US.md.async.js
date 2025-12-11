"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[5985],{16356:function(U,l,e){e.r(l);var m=e(38027),d=e(89196),P=e(36973),h=e(96709),C=e(12635),r=e(7771),j=e(53808),x=e(11003),b=e(29027),M=e(91998),v=e(23297),i=e(90706),y=e(81375),a=e(87204),_=e(31109),s=e(75271),t=e(95450),n=e(52676);function u(){return(0,n.jsx)(a.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"usage-from-scratch",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage-from-scratch",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Usage from Scratch"]}),(0,n.jsxs)("h2",{id:"-install",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#-install",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u{1F4E6} Install"]}),(0,n.jsx)(r.Z,{lang:"bash",children:t.texts[0].value}),(0,n.jsxs)("h2",{id:"-usage",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#-usage",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u{1F528} Usage"]})]}),(0,n.jsx)(a.Dl,{demo:{id:"docs-guide-from-scratch-demo-en-us-0"},previewerProps:{}})]})})})}l.default=u},90088:function(U,l,e){e.d(l,{Z:function(){return a}});var m=e(26068),d=e.n(m),P=e(31209),h=e(71649),C=e(42478),r=e(75271),j=e(53649),x=e.n(j),b=e(88974),M,v=(0,b.Z)(M||(M=x()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),i=e(52676),y=function(s){var t,n,u=(0,P.getCommonConfig)(),g=u.antPrefix,p=(0,r.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var o={},O=f.label;return O&&(o.label=(0,i.jsxs)("div",{className:"".concat(g,"-dropdown-check-wrapper"),children:[O,(0,i.jsx)("span",{className:"".concat(g,"-dropdown-check-icon"),children:(0,i.jsx)(h.Z,{})})]})),d()(d()({},f),o)})},[(t=s.menu)===null||t===void 0?void 0:t.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),D=v();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(D,{}),(0,i.jsx)(C.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:p}),overlayStyle:d()({},s.overlayStyle)}))]})},a=y},33185:function(U,l,e){var m=e(48305),d=e.n(m),P=e(67825),h=e.n(P),C=e(26068),r=e.n(C),j=e(58911),x=e(88602),b=e(99090),M=e(62910),v=e(82090),i=e(52676),y=["content"],a={success:{type:"success",icon:(0,i.jsx)(j.Z,{})},warning:{type:"warning",icon:(0,i.jsx)(x.Z,{})},error:{type:"error",icon:(0,i.jsx)(b.Z,{})},info:{type:"info",icon:(0,i.jsx)(M.Z,{})}},_=function(n,u){var g,p;typeof u=="string"?p={content:u}:p=r()({},u);var D=p,c=D.content,E=h()(D,y);v.ZP.open(r()({type:n,content:c,icon:n==="loading"||(g=a[n])===null||g===void 0?void 0:g.icon},E))},s=function(n){var u=v.ZP.useMessage(n),g=d()(u,2),p=g[0],D=g[1],c=function(o,O){var k,I;typeof O=="string"?I={content:O,type:o}:I=r()(r()({},O),{},{type:o}),p[o](r()(r()({},I),{},{icon:(k=a[o])===null||k===void 0?void 0:k.icon}))},E=r()(r()({},p),{},{success:function(o){return c("success",o)},warning:function(o){return c("warning",o)},error:function(o){return c("error",o)},info:function(o){return c("info",o)},loading:function(o){return c("loading",o)}});return[E,D]};l.Z=r()(r()({},v.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},4853:function(U,l,e){e.d(l,{JG:function(){return x},rb:function(){return b}});var m=e(26068),d=e.n(m),P=e(67825),h=e.n(P),C=e(75271),r=["maxWidth","maxHeight"];function j(){var a;return((a=window.g_config)===null||a===void 0?void 0:a.isIntl)||!1}var x=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},b=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.maxWidth,n=s.maxHeight,u=h()(s,r);return d()({overlayInnerStyle:{maxWidth:t||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},u)};function M(a){return React.isValidElement(a)}function v(a){var _=a||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var i=function(_){return _>=10?_:"0".concat(_)},y=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(i(s))}var t=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(i(t),":").concat(i(n))}},95450:function(U,l,e){e.r(l),e.d(l,{texts:function(){return m}});const m=[{value:`$ npm install antd @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1}]}}]);
