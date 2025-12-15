"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[9421],{43682:function(C,u,e){e.r(u);var m=e(38027),i=e(89196),k=e(36973),x=e(96709),y=e(12635),d=e(7771),j=e(53808),M=e(11003),v=e(29027),P=e(91998),h=e(23297),r=e(90706),D=e(81375),o=e(87204),_=e(31109),s=e(75271),a=e(9426),n=e(52676);function p(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Z,{title:"Popover",desc:"Click/Hover on the element to pop up a bubble card overlay"}),(0,n.jsx)(o.Dl,{demo:{id:"popover-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Popover/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:a.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(v.Z,{url:"https://ant.design/components/popover/#api"}),a.texts[1].value]})]})]})})})}u.default=p},90088:function(C,u,e){e.d(u,{Z:function(){return o}});var m=e(26068),i=e.n(m),k=e(31209),x=e(71649),y=e(42478),d=e(75271),j=e(53649),M=e.n(j),v=e(88974),P,h=(0,v.Z)(P||(P=M()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),r=e(52676),D=function(s){var a,n,p=(0,k.getCommonConfig)(),l=p.antPrefix,g=(0,d.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var t={},b=f.label;return b&&(t.label=(0,r.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[b,(0,r.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,r.jsx)(x.Z,{})})]})),i()(i()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),O=h();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{}),(0,r.jsx)(y.Z,i()(i()({},s),{},{menu:i()(i()({},s.menu),{},{items:g}),overlayStyle:i()({},s.overlayStyle)}))]})},o=D},33185:function(C,u,e){var m=e(48305),i=e.n(m),k=e(67825),x=e.n(k),y=e(26068),d=e.n(y),j=e(58911),M=e(88602),v=e(99090),P=e(62910),h=e(82090),r=e(52676),D=["content"],o={success:{type:"success",icon:(0,r.jsx)(j.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(M.Z,{})},error:{type:"error",icon:(0,r.jsx)(v.Z,{})},info:{type:"info",icon:(0,r.jsx)(P.Z,{})}},_=function(n,p){var l,g;typeof p=="string"?g={content:p}:g=d()({},p);var O=g,c=O.content,E=x()(O,D);h.ZP.open(d()({type:n,content:c,icon:n==="loading"||(l=o[n])===null||l===void 0?void 0:l.icon},E))},s=function(n){var p=h.ZP.useMessage(n),l=i()(p,2),g=l[0],O=l[1],c=function(t,b){var A,I;typeof b=="string"?I={content:b,type:t}:I=d()(d()({},b),{},{type:t}),g[t](d()(d()({},I),{},{icon:(A=o[t])===null||A===void 0?void 0:A.icon}))},E=d()(d()({},g),{},{success:function(t){return c("success",t)},warning:function(t){return c("warning",t)},error:function(t){return c("error",t)},info:function(t){return c("info",t)},loading:function(t){return c("loading",t)}});return[E,O]};u.Z=d()(d()({},h.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},4853:function(C,u,e){e.d(u,{JG:function(){return M},rb:function(){return v}});var m=e(26068),i=e.n(m),k=e(67825),x=e.n(k),y=e(75271),d=["maxWidth","maxHeight"];function j(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,p=x()(s,d);return i()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},p)};function P(o){return React.isValidElement(o)}function h(o){var _=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var r=function(_){return _>=10?_:"0".concat(_)},D=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(r(s))}var a=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(r(a),":").concat(r(n))}},9426:function(C,u,e){e.r(u),e.d(u,{texts:function(){return m}});const m=[{value:"import { Popover } from '@agentscope-ai/design'",paraId:0},{value:".",paraId:1,tocIndex:1}]}}]);
