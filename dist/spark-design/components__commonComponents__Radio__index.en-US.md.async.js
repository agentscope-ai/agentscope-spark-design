"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[9257],{41681:function(j,l,e){e.r(l);var p=e(38027),d=e(89196),b=e(36973),h=e(96709),y=e(12635),r=e(7771),U=e(53808),M=e(11003),v=e(29027),E=e(91998),P=e(23297),i=e(90706),D=e(81375),a=e(87204),_=e(31109),s=e(75271),t=e(15779),n=e(52676);function u(){return(0,n.jsx)(a.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.Z,{title:"Radio",desc:"Used to select a single state from multiple alternatives."}),(0,n.jsx)(a.Dl,{demo:{id:"src-components-common-components-radio-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Radio/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:t.texts[0].value}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/radio/#api"})]})})})}l.default=u},90088:function(j,l,e){e.d(l,{Z:function(){return a}});var p=e(26068),d=e.n(p),b=e(31209),h=e(71649),y=e(42478),r=e(75271),U=e(53649),M=e.n(U),v=e(88974),E,P=(0,v.Z)(E||(E=M()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),i=e(52676),D=function(s){var t,n,u=(0,b.getCommonConfig)(),m=u.antPrefix,g=(0,r.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var x;return((x=s.menu)===null||x===void 0?void 0:x.items)||[]}return s.menu.items.map(function(f){var o={},O=f.label;return O&&(o.label=(0,i.jsxs)("div",{className:"".concat(m,"-dropdown-check-wrapper"),children:[O,(0,i.jsx)("span",{className:"".concat(m,"-dropdown-check-icon"),children:(0,i.jsx)(h.Z,{})})]})),d()(d()({},f),o)})},[(t=s.menu)===null||t===void 0?void 0:t.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),C=P();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C,{}),(0,i.jsx)(y.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},a=D},33185:function(j,l,e){var p=e(48305),d=e.n(p),b=e(67825),h=e.n(b),y=e(26068),r=e.n(y),U=e(58911),M=e(88602),v=e(99090),E=e(62910),P=e(82090),i=e(52676),D=["content"],a={success:{type:"success",icon:(0,i.jsx)(U.Z,{})},warning:{type:"warning",icon:(0,i.jsx)(M.Z,{})},error:{type:"error",icon:(0,i.jsx)(v.Z,{})},info:{type:"info",icon:(0,i.jsx)(E.Z,{})}},_=function(n,u){var m,g;typeof u=="string"?g={content:u}:g=r()({},u);var C=g,c=C.content,x=h()(C,D);P.ZP.open(r()({type:n,content:c,icon:n==="loading"||(m=a[n])===null||m===void 0?void 0:m.icon},x))},s=function(n){var u=P.ZP.useMessage(n),m=d()(u,2),g=m[0],C=m[1],c=function(o,O){var k,A;typeof O=="string"?A={content:O,type:o}:A=r()(r()({},O),{},{type:o}),g[o](r()(r()({},A),{},{icon:(k=a[o])===null||k===void 0?void 0:k.icon}))},x=r()(r()({},g),{},{success:function(o){return c("success",o)},warning:function(o){return c("warning",o)},error:function(o){return c("error",o)},info:function(o){return c("info",o)},loading:function(o){return c("loading",o)}});return[x,C]};l.Z=r()(r()({},P.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},4853:function(j,l,e){e.d(l,{JG:function(){return M},rb:function(){return v}});var p=e(26068),d=e.n(p),b=e(67825),h=e.n(b),y=e(75271),r=["maxWidth","maxHeight"];function U(){var a;return((a=window.g_config)===null||a===void 0?void 0:a.isIntl)||!1}var M=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.maxWidth,n=s.maxHeight,u=h()(s,r);return d()({overlayInnerStyle:{maxWidth:t||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},u)};function E(a){return React.isValidElement(a)}function P(a){var _=a||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var i=function(_){return _>=10?_:"0".concat(_)},D=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(i(s))}var t=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(i(t),":").concat(i(n))}},15779:function(j,l,e){e.r(l),e.d(l,{texts:function(){return p}});const p=[{value:"import { Radio } from '@agentscope-ai/design'",paraId:0}]}}]);
