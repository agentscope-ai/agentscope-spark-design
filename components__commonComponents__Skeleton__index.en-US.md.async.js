"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[6379],{90861:function(C,u,e){e.r(u);var m=e(38027),d=e(89196),k=e(36973),x=e(96709),y=e(12635),i=e(7771),j=e(53808),M=e(11003),v=e(29027),h=e(91998),P=e(23297),r=e(90706),D=e(81375),o=e(87204),_=e(31109),s=e(75271),t=e(96899),n=e(52676);function c(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{title:"Skeleton",desc:"Provide a placeholder while you wait for content to load, or to visualize content that doesn't exist yet."}),(0,n.jsx)(o.Dl,{demo:{id:"src-components-common-components-skeleton-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Skeleton/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:t.texts[0].value}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/skeleton/#api"})]})})})}u.default=c},90088:function(C,u,e){e.d(u,{Z:function(){return o}});var m=e(26068),d=e.n(m),k=e(31209),x=e(71649),y=e(42478),i=e(75271),j=e(53649),M=e.n(j),v=e(88974),h,P=(0,v.Z)(h||(h=M()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),r=e(52676),D=function(s){var t,n,c=(0,k.getCommonConfig)(),l=c.antPrefix,g=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var a={},b=f.label;return b&&(a.label=(0,r.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[b,(0,r.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,r.jsx)(x.Z,{})})]})),d()(d()({},f),a)})},[(t=s.menu)===null||t===void 0?void 0:t.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),O=P();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{}),(0,r.jsx)(y.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},o=D},33185:function(C,u,e){var m=e(48305),d=e.n(m),k=e(67825),x=e.n(k),y=e(26068),i=e.n(y),j=e(58911),M=e(88602),v=e(99090),h=e(62910),P=e(82090),r=e(52676),D=["content"],o={success:{type:"success",icon:(0,r.jsx)(j.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(M.Z,{})},error:{type:"error",icon:(0,r.jsx)(v.Z,{})},info:{type:"info",icon:(0,r.jsx)(h.Z,{})}},_=function(n,c){var l,g;typeof c=="string"?g={content:c}:g=i()({},c);var O=g,p=O.content,E=x()(O,D);P.ZP.open(i()({type:n,content:p,icon:n==="loading"||(l=o[n])===null||l===void 0?void 0:l.icon},E))},s=function(n){var c=P.ZP.useMessage(n),l=d()(c,2),g=l[0],O=l[1],p=function(a,b){var A,T;typeof b=="string"?T={content:b,type:a}:T=i()(i()({},b),{},{type:a}),g[a](i()(i()({},T),{},{icon:(A=o[a])===null||A===void 0?void 0:A.icon}))},E=i()(i()({},g),{},{success:function(a){return p("success",a)},warning:function(a){return p("warning",a)},error:function(a){return p("error",a)},info:function(a){return p("info",a)},loading:function(a){return p("loading",a)}});return[E,O]};u.Z=i()(i()({},P.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},4853:function(C,u,e){e.d(u,{JG:function(){return M},rb:function(){return v}});var m=e(26068),d=e.n(m),k=e(67825),x=e.n(k),y=e(75271),i=["maxWidth","maxHeight"];function j(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.maxWidth,n=s.maxHeight,c=x()(s,i);return d()({overlayInnerStyle:{maxWidth:t||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},c)};function h(o){return React.isValidElement(o)}function P(o){var _=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var r=function(_){return _>=10?_:"0".concat(_)},D=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(r(s))}var t=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(r(t),":").concat(r(n))}},96899:function(C,u,e){e.r(u),e.d(u,{texts:function(){return m}});const m=[{value:"import { Skeleton } from '@agentscope-ai/design'",paraId:0}]}}]);
