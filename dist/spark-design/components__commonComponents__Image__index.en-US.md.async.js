"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[3965],{79158:function(j,l,e){e.r(l);var g=e(38027),d=e(89196),x=e(36973),h=e(96709),y=e(12635),r=e(7771),U=e(53808),M=e(11003),v=e(29027),P=e(91998),E=e(23297),i=e(90706),D=e(81375),s=e(87204),_=e(31109),a=e(75271),t=e(63930),n=e(52676);function u(){return(0,n.jsx)(s.dY,{children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Z,{title:"Image",desc:"Previewable image"}),(0,n.jsx)(s.Dl,{demo:{id:"image-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Image/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:t.texts[0].value}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/image/#api"})]})})})}l.default=u},90088:function(j,l,e){e.d(l,{Z:function(){return s}});var g=e(26068),d=e.n(g),x=e(31209),h=e(71649),y=e(42478),r=e(75271),U=e(53649),M=e.n(U),v=e(88974),P,E=(0,v.Z)(P||(P=M()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),i=e(52676),D=function(a){var t,n,u=(0,x.getCommonConfig)(),m=u.antPrefix,p=(0,r.useMemo)(function(){var c;if(!((c=a.menu)!==null&&c!==void 0&&c.selectable)||!a.menu){var b;return((b=a.menu)===null||b===void 0?void 0:b.items)||[]}return a.menu.items.map(function(f){var o={},O=f.label;return O&&(o.label=(0,i.jsxs)("div",{className:"".concat(m,"-dropdown-check-wrapper"),children:[O,(0,i.jsx)("span",{className:"".concat(m,"-dropdown-check-icon"),children:(0,i.jsx)(h.Z,{})})]})),d()(d()({},f),o)})},[(t=a.menu)===null||t===void 0?void 0:t.items,(n=a.menu)===null||n===void 0?void 0:n.selectable]),C=E();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C,{}),(0,i.jsx)(y.Z,d()(d()({},a),{},{menu:d()(d()({},a.menu),{},{items:p}),overlayStyle:d()({},a.overlayStyle)}))]})},s=D},33185:function(j,l,e){var g=e(48305),d=e.n(g),x=e(67825),h=e.n(x),y=e(26068),r=e.n(y),U=e(58911),M=e(88602),v=e(99090),P=e(62910),E=e(82090),i=e(52676),D=["content"],s={success:{type:"success",icon:(0,i.jsx)(U.Z,{})},warning:{type:"warning",icon:(0,i.jsx)(M.Z,{})},error:{type:"error",icon:(0,i.jsx)(v.Z,{})},info:{type:"info",icon:(0,i.jsx)(P.Z,{})}},_=function(n,u){var m,p;typeof u=="string"?p={content:u}:p=r()({},u);var C=p,c=C.content,b=h()(C,D);E.ZP.open(r()({type:n,content:c,icon:n==="loading"||(m=s[n])===null||m===void 0?void 0:m.icon},b))},a=function(n){var u=E.ZP.useMessage(n),m=d()(u,2),p=m[0],C=m[1],c=function(o,O){var k,I;typeof O=="string"?I={content:O,type:o}:I=r()(r()({},O),{},{type:o}),p[o](r()(r()({},I),{},{icon:(k=s[o])===null||k===void 0?void 0:k.icon}))},b=r()(r()({},p),{},{success:function(o){return c("success",o)},warning:function(o){return c("warning",o)},error:function(o){return c("error",o)},info:function(o){return c("info",o)},loading:function(o){return c("loading",o)}});return[b,C]};l.Z=r()(r()({},E.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:a})},4853:function(j,l,e){e.d(l,{JG:function(){return M},rb:function(){return v}});var g=e(26068),d=e.n(g),x=e(67825),h=e.n(x),y=e(75271),r=["maxWidth","maxHeight"];function U(){var s;return((s=window.g_config)===null||s===void 0?void 0:s.isIntl)||!1}var M=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var a=document.createElement("textarea");document.body.appendChild(a),a.style.position="fixed",a.style.clip="rect(0 0 0 0)",a.style.top="10px",a.value=_,a.select(),document.execCommand("copy",!0),document.body.removeChild(a)}},v=function(_){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.maxWidth,n=a.maxHeight,u=h()(a,r);return d()({overlayInnerStyle:{maxWidth:t||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},u)};function P(s){return React.isValidElement(s)}function E(s){var _=s||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var i=function(_){return _>=10?_:"0".concat(_)},D=function(_){if(_<60){var a=Math.ceil(_);return"0:".concat(i(a))}var t=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(i(t),":").concat(i(n))}},63930:function(j,l,e){e.r(l),e.d(l,{texts:function(){return g}});const g=[{value:"import { Image } from '@agentscope-ai/design'",paraId:0}]}}]);
