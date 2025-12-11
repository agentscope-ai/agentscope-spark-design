"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[1767],{58542:function(j,l,e){e.r(l);var m=e(38027),d=e(89196),b=e(36973),h=e(96709),y=e(12635),r=e(7771),U=e(53808),M=e(11003),v=e(29027),P=e(91998),E=e(23297),o=e(90706),D=e(81375),a=e(87204),_=e(31109),s=e(75271),t=e(85804),n=e(52676);function u(){return(0,n.jsx)(a.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Z,{title:"Progress",desc:"Used to indicate the completion progress of a task"}),(0,n.jsx)(a.Dl,{demo:{id:"src-components-common-components-progress-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Progress/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:t.texts[0].value}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/progress/#api"})]})})})}l.default=u},90088:function(j,l,e){e.d(l,{Z:function(){return a}});var m=e(26068),d=e.n(m),b=e(31209),h=e(71649),y=e(42478),r=e(75271),U=e(53649),M=e.n(U),v=e(88974),P,E=(0,v.Z)(P||(P=M()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),o=e(52676),D=function(s){var t,n,u=(0,b.getCommonConfig)(),g=u.antPrefix,p=(0,r.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var x;return((x=s.menu)===null||x===void 0?void 0:x.items)||[]}return s.menu.items.map(function(f){var i={},O=f.label;return O&&(i.label=(0,o.jsxs)("div",{className:"".concat(g,"-dropdown-check-wrapper"),children:[O,(0,o.jsx)("span",{className:"".concat(g,"-dropdown-check-icon"),children:(0,o.jsx)(h.Z,{})})]})),d()(d()({},f),i)})},[(t=s.menu)===null||t===void 0?void 0:t.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),C=E();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C,{}),(0,o.jsx)(y.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:p}),overlayStyle:d()({},s.overlayStyle)}))]})},a=D},33185:function(j,l,e){var m=e(48305),d=e.n(m),b=e(67825),h=e.n(b),y=e(26068),r=e.n(y),U=e(58911),M=e(88602),v=e(99090),P=e(62910),E=e(82090),o=e(52676),D=["content"],a={success:{type:"success",icon:(0,o.jsx)(U.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(M.Z,{})},error:{type:"error",icon:(0,o.jsx)(v.Z,{})},info:{type:"info",icon:(0,o.jsx)(P.Z,{})}},_=function(n,u){var g,p;typeof u=="string"?p={content:u}:p=r()({},u);var C=p,c=C.content,x=h()(C,D);E.ZP.open(r()({type:n,content:c,icon:n==="loading"||(g=a[n])===null||g===void 0?void 0:g.icon},x))},s=function(n){var u=E.ZP.useMessage(n),g=d()(u,2),p=g[0],C=g[1],c=function(i,O){var k,A;typeof O=="string"?A={content:O,type:i}:A=r()(r()({},O),{},{type:i}),p[i](r()(r()({},A),{},{icon:(k=a[i])===null||k===void 0?void 0:k.icon}))},x=r()(r()({},p),{},{success:function(i){return c("success",i)},warning:function(i){return c("warning",i)},error:function(i){return c("error",i)},info:function(i){return c("info",i)},loading:function(i){return c("loading",i)}});return[x,C]};l.Z=r()(r()({},E.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},4853:function(j,l,e){e.d(l,{JG:function(){return M},rb:function(){return v}});var m=e(26068),d=e.n(m),b=e(67825),h=e.n(b),y=e(75271),r=["maxWidth","maxHeight"];function U(){var a;return((a=window.g_config)===null||a===void 0?void 0:a.isIntl)||!1}var M=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.maxWidth,n=s.maxHeight,u=h()(s,r);return d()({overlayInnerStyle:{maxWidth:t||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},u)};function P(a){return React.isValidElement(a)}function E(a){var _=a||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var o=function(_){return _>=10?_:"0".concat(_)},D=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(o(s))}var t=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(o(t),":").concat(o(n))}},85804:function(j,l,e){e.r(l),e.d(l,{texts:function(){return m}});const m=[{value:`
  import { Progress } from '@agentscope-ai/design'
`,paraId:0}]}}]);
