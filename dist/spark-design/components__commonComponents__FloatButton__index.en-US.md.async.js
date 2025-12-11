"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[3824],{89273:function(U,l,_){_.r(l);var p=_(38027),d=_(89196),b=_(36973),h=_(96709),j=_(12635),r=_(7771),y=_(53808),M=_(11003),v=_(29027),E=_(91998),P=_(23297),o=_(90706),D=_(81375),a=_(87204),e=_(31109),s=_(75271),t=_(65940),n=_(52676);function u(){return(0,n.jsx)(a.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.Z,{title:"FloatButton",desc:"Used for global functions on the website. Buttons that can be seen no matter where you browse."}),(0,n.jsx)(a.Dl,{demo:{id:"src-components-common-components-float-button-demo-demo1"},previewerProps:{center:!0,iframe:!0,title:"Example",filename:"src/components/commonComponents/FloatButton/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:t.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"float-button-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#float-button-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Float Button Examples"]}),(0,n.jsx)("p",{children:t.texts[1].value})]}),(0,n.jsx)(a.Dl,{demo:{id:"src-components-common-components-float-button-demo-demo2"},previewerProps:{center:!0,iframe:!0,title:"Float button with theme color background",filename:"src/components/commonComponents/FloatButton/demo/demo2.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/float-button/#api"})]})})})}l.default=u},90088:function(U,l,_){_.d(l,{Z:function(){return a}});var p=_(26068),d=_.n(p),b=_(31209),h=_(71649),j=_(42478),r=_(75271),y=_(53649),M=_.n(y),v=_(88974),E,P=(0,v.Z)(E||(E=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),o=_(52676),D=function(s){var t,n,u=(0,b.getCommonConfig)(),m=u.antPrefix,g=(0,r.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var x;return((x=s.menu)===null||x===void 0?void 0:x.items)||[]}return s.menu.items.map(function(f){var i={},O=f.label;return O&&(i.label=(0,o.jsxs)("div",{className:"".concat(m,"-dropdown-check-wrapper"),children:[O,(0,o.jsx)("span",{className:"".concat(m,"-dropdown-check-icon"),children:(0,o.jsx)(h.Z,{})})]})),d()(d()({},f),i)})},[(t=s.menu)===null||t===void 0?void 0:t.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),C=P();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C,{}),(0,o.jsx)(j.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},a=D},33185:function(U,l,_){var p=_(48305),d=_.n(p),b=_(67825),h=_.n(b),j=_(26068),r=_.n(j),y=_(58911),M=_(88602),v=_(99090),E=_(62910),P=_(82090),o=_(52676),D=["content"],a={success:{type:"success",icon:(0,o.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(M.Z,{})},error:{type:"error",icon:(0,o.jsx)(v.Z,{})},info:{type:"info",icon:(0,o.jsx)(E.Z,{})}},e=function(n,u){var m,g;typeof u=="string"?g={content:u}:g=r()({},u);var C=g,c=C.content,x=h()(C,D);P.ZP.open(r()({type:n,content:c,icon:n==="loading"||(m=a[n])===null||m===void 0?void 0:m.icon},x))},s=function(n){var u=P.ZP.useMessage(n),m=d()(u,2),g=m[0],C=m[1],c=function(i,O){var k,A;typeof O=="string"?A={content:O,type:i}:A=r()(r()({},O),{},{type:i}),g[i](r()(r()({},A),{},{icon:(k=a[i])===null||k===void 0?void 0:k.icon}))},x=r()(r()({},g),{},{success:function(i){return c("success",i)},warning:function(i){return c("warning",i)},error:function(i){return c("error",i)},info:function(i){return c("info",i)},loading:function(i){return c("loading",i)}});return[x,C]};l.Z=r()(r()({},P.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},4853:function(U,l,_){_.d(l,{JG:function(){return M},rb:function(){return v}});var p=_(26068),d=_.n(p),b=_(67825),h=_.n(b),j=_(75271),r=["maxWidth","maxHeight"];function y(){var a;return((a=window.g_config)===null||a===void 0?void 0:a.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.maxWidth,n=s.maxHeight,u=h()(s,r);return d()({overlayInnerStyle:{maxWidth:t||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},u)};function E(a){return React.isValidElement(a)}function P(a){var e=a||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var o=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(o(s))}var t=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(o(t),":").concat(o(n))}},65940:function(U,l,_){_.r(l),_.d(l,{texts:function(){return p}});const p=[{value:`
import { FloatButton } from '@agentscope-ai/design'
`,paraId:0},{value:"The following are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
