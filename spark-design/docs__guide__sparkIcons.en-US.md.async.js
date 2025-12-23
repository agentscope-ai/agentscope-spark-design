"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4886],{52408:function(I,u,e){e.r(u);var g=e(48661),d=e(28450),E=e(87276),P=e(83775),O=e(36337),i=e(14552),b=e(68879),h=e(15957),x=e(8958),M=e(98520),v=e(41395),r=e(79756),y=e(33779),o=e(21570),_=e(28060),s=e(75271),a=e(51634),n=e(52676);function l(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h1",{id:"usage",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Usage"]})}),(0,n.jsx)(o.Dl,{demo:{id:"docs-guide-spark-icons-demo-usage"},previewerProps:{center:!0,title:"Basic Usage",filename:"docs/guide/icons/usage.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("p",{children:[a.texts[0].value,(0,n.jsx)("a",{href:"https://sparkdesign.agentscope.io/#/resources/icons",children:a.texts[1].value}),a.texts[2].value]})})]})})})}u.default=l},64925:function(I,u,e){e.d(u,{Z:function(){return o}});var g=e(26068),d=e.n(g),E=e(51886),P=e(71649),O=e(42478),i=e(75271),b=e(53649),h=e.n(b),x=e(75469),M,v=(0,x.Z)(M||(M=h()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),r=e(52676),y=function(s){var a,n,l=(0,E.getCommonConfig)(),c=l.antPrefix,m=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var k;return((k=s.menu)===null||k===void 0?void 0:k.items)||[]}return s.menu.items.map(function(f){var t={},j=f.label;return j&&(t.label=(0,r.jsxs)("div",{className:"".concat(c,"-dropdown-check-wrapper"),children:[j,(0,r.jsx)("span",{className:"".concat(c,"-dropdown-check-icon"),children:(0,r.jsx)(P.Z,{})})]})),d()(d()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),D=v();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D,{}),(0,r.jsx)(O.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:m}),overlayStyle:d()({},s.overlayStyle)}))]})},o=y},63953:function(I,u,e){var g=e(48305),d=e.n(g),E=e(67825),P=e.n(E),O=e(26068),i=e.n(O),b=e(58911),h=e(88602),x=e(99090),M=e(62910),v=e(82090),r=e(52676),y=["content"],o={success:{type:"success",icon:(0,r.jsx)(b.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(h.Z,{})},error:{type:"error",icon:(0,r.jsx)(x.Z,{})},info:{type:"info",icon:(0,r.jsx)(M.Z,{})}},_=function(n,l){var c,m;typeof l=="string"?m={content:l}:m=i()({},l);var D=m,p=D.content,k=P()(D,y);v.ZP.open(i()({type:n,content:p,icon:n==="loading"||(c=o[n])===null||c===void 0?void 0:c.icon},k))},s=function(n){var l=v.ZP.useMessage(n),c=d()(l,2),m=c[0],D=c[1],p=function(t,j){var A,C;typeof j=="string"?C={content:j,type:t}:C=i()(i()({},j),{},{type:t}),m[t](i()(i()({},C),{},{icon:(A=o[t])===null||A===void 0?void 0:A.icon}))},k=i()(i()({},m),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[k,D]};u.Z=i()(i()({},v.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},12281:function(I,u,e){e.d(u,{JG:function(){return h},rb:function(){return x}});var g=e(26068),d=e.n(g),E=e(67825),P=e.n(E),O=e(75271),i=["maxWidth","maxHeight"];function b(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var h=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,l=P()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},l)};function M(o){return React.isValidElement(o)}function v(o){var _=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var r=function(_){return _>=10?_:"0".concat(_)},y=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(r(s))}var a=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(r(a),":").concat(r(n))}},51634:function(I,u,e){e.r(u),e.d(u,{texts:function(){return g}});const g=[{value:"Visit ",paraId:0},{value:"Icon Library",paraId:0},{value:" for all icons",paraId:0}]}}]);
