"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[3958],{72448:function(I,u,_){_.r(u);var l=_(38027),d=_(89196),k=_(36973),x=_(96709),j=_(12635),i=_(7771),y=_(53808),M=_(11003),v=_(29027),h=_(91998),E=_(23297),o=_(90706),b=_(81375),r=_(87204),e=_(31109),s=_(75271),a=_(22072),n=_(52676);function p(){return(0,n.jsx)(r.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{title:"InputNumber",desc:"Input numeric values within a range through mouse or keyboard."}),(0,n.jsx)(r.Dl,{demo:{id:"src-components-common-components-input-number-demo-demo"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/InputNumber/demo/demo.tsx"}}),(0,n.jsx)(b.Z,{children:a.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"input-number-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#input-number-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Input Number Examples"]}),(0,n.jsx)("p",{children:a.texts[1].value})]}),(0,n.jsx)(r.Dl,{demo:{id:"src-components-common-components-input-number-demo-demo1"},previewerProps:{center:!0,title:"Three Sizes",filename:"src/components/commonComponents/InputNumber/demo/demo1.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/input-number/#api"})]})})})}u.default=p},90088:function(I,u,_){_.d(u,{Z:function(){return r}});var l=_(26068),d=_.n(l),k=_(31209),x=_(71649),j=_(42478),i=_(75271),y=_(53649),M=_.n(y),v=_(88974),h,E=(0,v.Z)(h||(h=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),o=_(52676),b=function(s){var a,n,p=(0,k.getCommonConfig)(),m=p.antPrefix,g=(0,i.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var P;return((P=s.menu)===null||P===void 0?void 0:P.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,o.jsxs)("div",{className:"".concat(m,"-dropdown-check-wrapper"),children:[O,(0,o.jsx)("span",{className:"".concat(m,"-dropdown-check-icon"),children:(0,o.jsx)(x.Z,{})})]})),d()(d()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),D=E();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsx)(j.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},r=b},33185:function(I,u,_){var l=_(48305),d=_.n(l),k=_(67825),x=_.n(k),j=_(26068),i=_.n(j),y=_(58911),M=_(88602),v=_(99090),h=_(62910),E=_(82090),o=_(52676),b=["content"],r={success:{type:"success",icon:(0,o.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(M.Z,{})},error:{type:"error",icon:(0,o.jsx)(v.Z,{})},info:{type:"info",icon:(0,o.jsx)(h.Z,{})}},e=function(n,p){var m,g;typeof p=="string"?g={content:p}:g=i()({},p);var D=g,c=D.content,P=x()(D,b);E.ZP.open(i()({type:n,content:c,icon:n==="loading"||(m=r[n])===null||m===void 0?void 0:m.icon},P))},s=function(n){var p=E.ZP.useMessage(n),m=d()(p,2),g=m[0],D=m[1],c=function(t,O){var C,A;typeof O=="string"?A={content:O,type:t}:A=i()(i()({},O),{},{type:t}),g[t](i()(i()({},A),{},{icon:(C=r[t])===null||C===void 0?void 0:C.icon}))},P=i()(i()({},g),{},{success:function(t){return c("success",t)},warning:function(t){return c("warning",t)},error:function(t){return c("error",t)},info:function(t){return c("info",t)},loading:function(t){return c("loading",t)}});return[P,D]};u.Z=i()(i()({},E.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},4853:function(I,u,_){_.d(u,{JG:function(){return M},rb:function(){return v}});var l=_(26068),d=_.n(l),k=_(67825),x=_.n(k),j=_(75271),i=["maxWidth","maxHeight"];function y(){var r;return((r=window.g_config)===null||r===void 0?void 0:r.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,p=x()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},p)};function h(r){return React.isValidElement(r)}function E(r){var e=r||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var o=function(e){return e>=10?e:"0".concat(e)},b=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(o(s))}var a=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(o(a),":").concat(o(n))}},22072:function(I,u,_){_.r(u),_.d(u,{texts:function(){return l}});const l=[{value:"import { InputNumber } from '@agentscope-ai/design'",paraId:0},{value:"Below are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
