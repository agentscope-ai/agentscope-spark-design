"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[9694],{87531:function(w,u,_){_.r(u);var m=_(38027),i=_(89196),x=_(36973),k=_(96709),j=_(12635),d=_(7771),y=_(53808),D=_(11003),v=_(29027),h=_(91998),P=_(23297),r=_(90706),M=_(81375),o=_(87204),e=_(31109),s=_(75271),a=_(962),n=_(52676);function p(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{title:"Dropdown",desc:"A list that pops down."}),(0,n.jsx)(o.Dl,{demo:{id:"dropdown-demo-demo1"},previewerProps:{center:!0,title:"Basic Usage",filename:"src/components/commonComponents/Dropdown/demo/demo1.tsx"}}),(0,n.jsx)(M.Z,{children:a.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"dropdown-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#dropdown-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Dropdown Examples"]}),(0,n.jsx)("p",{children:a.texts[1].value})]}),(0,n.jsx)(o.Z1,{items:[{demo:{id:"dropdown-demo-demo2"},previewerProps:{center:!0,title:"Dropdown with Icons",filename:"src/components/commonComponents/Dropdown/demo/demo2.tsx"}},{demo:{id:"dropdown-demo-demo3"},previewerProps:{center:!0,title:"Danger State Menu Items",filename:"src/components/commonComponents/Dropdown/demo/demo3.tsx"}}]}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/dropdown/#api"})]})})})}u.default=p},90088:function(w,u,_){_.d(u,{Z:function(){return o}});var m=_(26068),i=_.n(m),x=_(31209),k=_(71649),j=_(42478),d=_(75271),y=_(53649),D=_.n(y),v=_(88974),h,P=(0,v.Z)(h||(h=D()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),r=_(52676),M=function(s){var a,n,p=(0,x.getCommonConfig)(),l=p.antPrefix,g=(0,d.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var t={},b=f.label;return b&&(t.label=(0,r.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[b,(0,r.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,r.jsx)(k.Z,{})})]})),i()(i()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),O=P();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{}),(0,r.jsx)(j.Z,i()(i()({},s),{},{menu:i()(i()({},s.menu),{},{items:g}),overlayStyle:i()({},s.overlayStyle)}))]})},o=M},33185:function(w,u,_){var m=_(48305),i=_.n(m),x=_(67825),k=_.n(x),j=_(26068),d=_.n(j),y=_(58911),D=_(88602),v=_(99090),h=_(62910),P=_(82090),r=_(52676),M=["content"],o={success:{type:"success",icon:(0,r.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(D.Z,{})},error:{type:"error",icon:(0,r.jsx)(v.Z,{})},info:{type:"info",icon:(0,r.jsx)(h.Z,{})}},e=function(n,p){var l,g;typeof p=="string"?g={content:p}:g=d()({},p);var O=g,c=O.content,E=k()(O,M);P.ZP.open(d()({type:n,content:c,icon:n==="loading"||(l=o[n])===null||l===void 0?void 0:l.icon},E))},s=function(n){var p=P.ZP.useMessage(n),l=i()(p,2),g=l[0],O=l[1],c=function(t,b){var C,I;typeof b=="string"?I={content:b,type:t}:I=d()(d()({},b),{},{type:t}),g[t](d()(d()({},I),{},{icon:(C=o[t])===null||C===void 0?void 0:C.icon}))},E=d()(d()({},g),{},{success:function(t){return c("success",t)},warning:function(t){return c("warning",t)},error:function(t){return c("error",t)},info:function(t){return c("info",t)},loading:function(t){return c("loading",t)}});return[E,O]};u.Z=d()(d()({},P.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},4853:function(w,u,_){_.d(u,{JG:function(){return D},rb:function(){return v}});var m=_(26068),i=_.n(m),x=_(67825),k=_.n(x),j=_(75271),d=["maxWidth","maxHeight"];function y(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var D=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,p=k()(s,d);return i()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},p)};function h(o){return React.isValidElement(o)}function P(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var r=function(e){return e>=10?e:"0".concat(e)},M=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(r(s))}var a=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(r(a),":").concat(r(n))}},962:function(w,u,_){_.r(u),_.d(u,{texts:function(){return m}});const m=[{value:"import { Dropdown } from '@agentscope-ai/design'",paraId:0},{value:"Below are examples and variants of this dropdown component",paraId:1,tocIndex:1}]}}]);
