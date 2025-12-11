"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[9421],{43682:function(U,l,e){e.r(l);var m=e(38027),d=e(89196),b=e(36973),h=e(96709),y=e(12635),r=e(7771),j=e(53808),M=e(11003),v=e(29027),P=e(91998),E=e(23297),o=e(90706),D=e(81375),a=e(87204),_=e(31109),s=e(75271),i=e(9426),n=e(52676);function u(){return(0,n.jsx)(a.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Z,{title:"Popover",desc:"Click/Hover on the element to pop up a bubble card overlay"}),(0,n.jsx)(a.Dl,{demo:{id:"popover-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Popover/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:i.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(v.Z,{url:"https://ant.design/components/popover/#api"}),i.texts[1].value]})]})]})})})}l.default=u},90088:function(U,l,e){e.d(l,{Z:function(){return a}});var m=e(26068),d=e.n(m),b=e(31209),h=e(71649),y=e(42478),r=e(75271),j=e(53649),M=e.n(j),v=e(88974),P,E=(0,v.Z)(P||(P=M()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),o=e(52676),D=function(s){var i,n,u=(0,b.getCommonConfig)(),p=u.antPrefix,g=(0,r.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var x;return((x=s.menu)===null||x===void 0?void 0:x.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,o.jsxs)("div",{className:"".concat(p,"-dropdown-check-wrapper"),children:[O,(0,o.jsx)("span",{className:"".concat(p,"-dropdown-check-icon"),children:(0,o.jsx)(h.Z,{})})]})),d()(d()({},f),t)})},[(i=s.menu)===null||i===void 0?void 0:i.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),C=E();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C,{}),(0,o.jsx)(y.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},a=D},33185:function(U,l,e){var m=e(48305),d=e.n(m),b=e(67825),h=e.n(b),y=e(26068),r=e.n(y),j=e(58911),M=e(88602),v=e(99090),P=e(62910),E=e(82090),o=e(52676),D=["content"],a={success:{type:"success",icon:(0,o.jsx)(j.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(M.Z,{})},error:{type:"error",icon:(0,o.jsx)(v.Z,{})},info:{type:"info",icon:(0,o.jsx)(P.Z,{})}},_=function(n,u){var p,g;typeof u=="string"?g={content:u}:g=r()({},u);var C=g,c=C.content,x=h()(C,D);E.ZP.open(r()({type:n,content:c,icon:n==="loading"||(p=a[n])===null||p===void 0?void 0:p.icon},x))},s=function(n){var u=E.ZP.useMessage(n),p=d()(u,2),g=p[0],C=p[1],c=function(t,O){var k,A;typeof O=="string"?A={content:O,type:t}:A=r()(r()({},O),{},{type:t}),g[t](r()(r()({},A),{},{icon:(k=a[t])===null||k===void 0?void 0:k.icon}))},x=r()(r()({},g),{},{success:function(t){return c("success",t)},warning:function(t){return c("warning",t)},error:function(t){return c("error",t)},info:function(t){return c("info",t)},loading:function(t){return c("loading",t)}});return[x,C]};l.Z=r()(r()({},E.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},4853:function(U,l,e){e.d(l,{JG:function(){return M},rb:function(){return v}});var m=e(26068),d=e.n(m),b=e(67825),h=e.n(b),y=e(75271),r=["maxWidth","maxHeight"];function j(){var a;return((a=window.g_config)===null||a===void 0?void 0:a.isIntl)||!1}var M=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=s.maxWidth,n=s.maxHeight,u=h()(s,r);return d()({overlayInnerStyle:{maxWidth:i||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},u)};function P(a){return React.isValidElement(a)}function E(a){var _=a||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var o=function(_){return _>=10?_:"0".concat(_)},D=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(o(s))}var i=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(o(i),":").concat(o(n))}},9426:function(U,l,e){e.r(l),e.d(l,{texts:function(){return m}});const m=[{value:"import { Popover } from '@agentscope-ai/design'",paraId:0},{value:".",paraId:1,tocIndex:1}]}}]);
