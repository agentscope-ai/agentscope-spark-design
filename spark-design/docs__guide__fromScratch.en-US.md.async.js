"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[5985],{58781:function(I,c,e){e.r(c);var g=e(41570),d=e(12968),h=e(77815),E=e(35771),O=e(71705),t=e(64777),b=e(11851),P=e(78616),x=e(52990),M=e(74235),v=e(73031),r=e(30864),y=e(29370),a=e(87274),_=e(18282),s=e(75271),i=e(26123),n=e(52676);function u(){return(0,n.jsx)(a.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"usage-from-scratch",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage-from-scratch",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Usage from Scratch"]}),(0,n.jsxs)("h2",{id:"-install",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#-install",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u{1F4E6} Install"]}),(0,n.jsx)(t.Z,{lang:"bash",children:i.texts[0].value}),(0,n.jsxs)("h2",{id:"-usage",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#-usage",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u{1F528} Usage"]})]}),(0,n.jsx)(a.Dl,{demo:{id:"docs-guide-from-scratch-demo-en-us-0"},previewerProps:{}})]})})})}c.default=u},38356:function(I,c,e){e.d(c,{Z:function(){return a}});var g=e(26068),d=e.n(g),h=e(60213),E=e(68278),O=e(44201),t=e(75271),b=e(53649),P=e.n(b),x=e(30764),M,v=(0,x.Z)(M||(M=P()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),r=e(52676),y=function(s){var i,n,u=(0,h.getCommonConfig)(),l=u.antPrefix,m=(0,t.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var k;return((k=s.menu)===null||k===void 0?void 0:k.items)||[]}return s.menu.items.map(function(f){var o={},D=f.label;return D&&(o.label=(0,r.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[D,(0,r.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,r.jsx)(E.Z,{})})]})),d()(d()({},f),o)})},[(i=s.menu)===null||i===void 0?void 0:i.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=v();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(O.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:m}),overlayStyle:d()({},s.overlayStyle)}))]})},a=y},39971:function(I,c,e){var g=e(48305),d=e.n(g),h=e(67825),E=e.n(h),O=e(26068),t=e.n(O),b=e(58911),P=e(88602),x=e(99090),M=e(62910),v=e(86212),r=e(52676),y=["content"],a={success:{type:"success",icon:(0,r.jsx)(b.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(P.Z,{})},error:{type:"error",icon:(0,r.jsx)(x.Z,{})},info:{type:"info",icon:(0,r.jsx)(M.Z,{})}},_=function(n,u){var l,m;typeof u=="string"?m={content:u}:m=t()({},u);var j=m,p=j.content,k=E()(j,y);v.ZP.open(t()({type:n,content:p,icon:n==="loading"||(l=a[n])===null||l===void 0?void 0:l.icon},k))},s=function(n){var u=v.ZP.useMessage(n),l=d()(u,2),m=l[0],j=l[1],p=function(o,D){var A,C;typeof D=="string"?C={content:D,type:o}:C=t()(t()({},D),{},{type:o}),m[o](t()(t()({},C),{},{icon:(A=a[o])===null||A===void 0?void 0:A.icon}))},k=t()(t()({},m),{},{success:function(o){return p("success",o)},warning:function(o){return p("warning",o)},error:function(o){return p("error",o)},info:function(o){return p("info",o)},loading:function(o){return p("loading",o)}});return[k,j]};c.Z=t()(t()({},v.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},95336:function(I,c,e){e.d(c,{JG:function(){return P},rb:function(){return x}});var g=e(26068),d=e.n(g),h=e(67825),E=e.n(h),O=e(75271),t=["maxWidth","maxHeight"];function b(){var a;return((a=window.g_config)===null||a===void 0?void 0:a.isIntl)||!1}var P=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=s.maxWidth,n=s.maxHeight,u=E()(s,t);return d()({overlayInnerStyle:{maxWidth:i||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},u)};function M(a){return React.isValidElement(a)}function v(a){var _=a||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var r=function(_){return _>=10?_:"0".concat(_)},y=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(r(s))}var i=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(r(i),":").concat(r(n))}},26123:function(I,c,e){e.r(c),e.d(c,{texts:function(){return g}});const g=[{value:`$ npm install antd @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1}]}}]);
