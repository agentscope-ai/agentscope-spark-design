"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[5985],{6778:function(I,u,e){e.r(u);var g=e(48661),d=e(28450),k=e(87276),E=e(83775),O=e(36337),t=e(14552),b=e(68879),P=e(15957),x=e(8958),M=e(98520),v=e(41395),o=e(79756),y=e(33779),a=e(21570),_=e(28060),s=e(75271),i=e(71458),n=e(52676);function c(){return(0,n.jsx)(a.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"usage-from-scratch",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage-from-scratch",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Usage from Scratch"]}),(0,n.jsxs)("h2",{id:"-install",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#-install",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u{1F4E6} Install"]}),(0,n.jsx)(t.Z,{lang:"bash",children:i.texts[0].value}),(0,n.jsxs)("h2",{id:"-usage",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#-usage",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u{1F528} Usage"]})]}),(0,n.jsx)(a.Dl,{demo:{id:"docs-guide-from-scratch-demo-en-us-0"},previewerProps:{}})]})})})}u.default=c},64925:function(I,u,e){e.d(u,{Z:function(){return a}});var g=e(26068),d=e.n(g),k=e(51886),E=e(71649),O=e(42478),t=e(75271),b=e(53649),P=e.n(b),x=e(75469),M,v=(0,x.Z)(M||(M=P()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),o=e(52676),y=function(s){var i,n,c=(0,k.getCommonConfig)(),p=c.antPrefix,m=(0,t.useMemo)(function(){var l;if(!((l=s.menu)!==null&&l!==void 0&&l.selectable)||!s.menu){var h;return((h=s.menu)===null||h===void 0?void 0:h.items)||[]}return s.menu.items.map(function(f){var r={},D=f.label;return D&&(r.label=(0,o.jsxs)("div",{className:"".concat(p,"-dropdown-check-wrapper"),children:[D,(0,o.jsx)("span",{className:"".concat(p,"-dropdown-check-icon"),children:(0,o.jsx)(E.Z,{})})]})),d()(d()({},f),r)})},[(i=s.menu)===null||i===void 0?void 0:i.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=v();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{}),(0,o.jsx)(O.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:m}),overlayStyle:d()({},s.overlayStyle)}))]})},a=y},63953:function(I,u,e){var g=e(48305),d=e.n(g),k=e(67825),E=e.n(k),O=e(26068),t=e.n(O),b=e(58911),P=e(88602),x=e(99090),M=e(62910),v=e(82090),o=e(52676),y=["content"],a={success:{type:"success",icon:(0,o.jsx)(b.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(P.Z,{})},error:{type:"error",icon:(0,o.jsx)(x.Z,{})},info:{type:"info",icon:(0,o.jsx)(M.Z,{})}},_=function(n,c){var p,m;typeof c=="string"?m={content:c}:m=t()({},c);var j=m,l=j.content,h=E()(j,y);v.ZP.open(t()({type:n,content:l,icon:n==="loading"||(p=a[n])===null||p===void 0?void 0:p.icon},h))},s=function(n){var c=v.ZP.useMessage(n),p=d()(c,2),m=p[0],j=p[1],l=function(r,D){var A,C;typeof D=="string"?C={content:D,type:r}:C=t()(t()({},D),{},{type:r}),m[r](t()(t()({},C),{},{icon:(A=a[r])===null||A===void 0?void 0:A.icon}))},h=t()(t()({},m),{},{success:function(r){return l("success",r)},warning:function(r){return l("warning",r)},error:function(r){return l("error",r)},info:function(r){return l("info",r)},loading:function(r){return l("loading",r)}});return[h,j]};u.Z=t()(t()({},v.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},12281:function(I,u,e){e.d(u,{JG:function(){return P},rb:function(){return x}});var g=e(26068),d=e.n(g),k=e(67825),E=e.n(k),O=e(75271),t=["maxWidth","maxHeight"];function b(){var a;return((a=window.g_config)===null||a===void 0?void 0:a.isIntl)||!1}var P=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=s.maxWidth,n=s.maxHeight,c=E()(s,t);return d()({overlayInnerStyle:{maxWidth:i||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},c)};function M(a){return React.isValidElement(a)}function v(a){var _=a||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var o=function(_){return _>=10?_:"0".concat(_)},y=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(o(s))}var i=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(o(i),":").concat(o(n))}},71458:function(I,u,e){e.r(u),e.d(u,{texts:function(){return g}});const g=[{value:`$ npm install antd @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1}]}}]);
