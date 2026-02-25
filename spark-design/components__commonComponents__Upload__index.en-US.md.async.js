"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4555],{52769:function(y,p,_){_.r(p);var m=_(41570),i=_(12968),h=_(77815),E=_(35771),b=_(55454),d=_(64777),C=_(11851),D=_(78616),v=_(44616),k=_(51972),x=_(90628),a=_(95290),M=_(34766),o=_(51204),e=_(66404),s=_(75271),r=_(83220),n=_(52676);function u(){return(0,n.jsx)(o.DumiPage,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.Z,{title:"Upload",desc:"File selection upload and drag-and-drop upload control."}),(0,n.jsx)(o.DumiDemo,{demo:{id:"upload-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Upload/demo/demo1.tsx"}}),(0,n.jsx)(M.Z,{children:r.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"upload-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#upload-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Upload Examples"]}),(0,n.jsx)("p",{children:r.texts[1].value})]}),(0,n.jsx)(o.DumiDemoGrid,{items:[{demo:{id:"upload-demo-demo2"},previewerProps:{center:!0,title:"Drag and Drop Upload",filename:"src/components/commonComponents/Upload/demo/demo2.tsx"}},{demo:{id:"upload-demo-demo3"},previewerProps:{center:!0,title:"Display of Uploaded Files",filename:"src/components/commonComponents/Upload/demo/demo3.tsx"}}]}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/upload/#api"})]})})})}p.default=u},38356:function(y,p,_){_.d(p,{Z:function(){return o}});var m=_(26068),i=_.n(m),h=_(60213),E=_(68278),b=_(44201),d=_(75271),C=_(53649),D=_.n(C),v=_(30764),k,x=(0,v.Z)(k||(k=D()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),a=_(52676),M=function(s){var r,n,u=(0,h.getCommonConfig)(),l=u.antPrefix,g=(0,d.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var P;return((P=s.menu)===null||P===void 0?void 0:P.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,a.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[O,(0,a.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,a.jsx)(E.Z,{})})]})),i()(i()({},f),t)})},[(r=s.menu)===null||r===void 0?void 0:r.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=x();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j,{}),(0,a.jsx)(b.Z,i()(i()({},s),{},{menu:i()(i()({},s.menu),{},{items:g}),overlayStyle:i()({},s.overlayStyle)}))]})},o=M},39971:function(y,p,_){var m=_(48305),i=_.n(m),h=_(67825),E=_.n(h),b=_(26068),d=_.n(b),C=_(58911),D=_(88602),v=_(99090),k=_(62910),x=_(86212),a=_(52676),M=["content"],o={success:{type:"success",icon:(0,a.jsx)(C.Z,{})},warning:{type:"warning",icon:(0,a.jsx)(D.Z,{})},error:{type:"error",icon:(0,a.jsx)(v.Z,{})},info:{type:"info",icon:(0,a.jsx)(k.Z,{})}},e=function(n,u){var l,g;typeof u=="string"?g={content:u}:g=d()({},u);var j=g,c=j.content,P=E()(j,M);x.ZP.open(d()({type:n,content:c,icon:n==="loading"||(l=o[n])===null||l===void 0?void 0:l.icon},P))},s=function(n){var u=x.ZP.useMessage(n),l=i()(u,2),g=l[0],j=l[1],c=function(t,O){var w,A;typeof O=="string"?A={content:O,type:t}:A=d()(d()({},O),{},{type:t}),g[t](d()(d()({},A),{},{icon:(w=o[t])===null||w===void 0?void 0:w.icon}))},P=d()(d()({},g),{},{success:function(t){return c("success",t)},warning:function(t){return c("warning",t)},error:function(t){return c("error",t)},info:function(t){return c("info",t)},loading:function(t){return c("loading",t)}});return[P,j]};p.Z=d()(d()({},x.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},95336:function(y,p,_){_.d(p,{JG:function(){return D},rb:function(){return v}});var m=_(26068),i=_.n(m),h=_(67825),E=_.n(h),b=_(75271),d=["maxWidth","maxHeight"];function C(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var D=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.maxWidth,n=s.maxHeight,u=E()(s,d);return i()({overlayInnerStyle:{maxWidth:r||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},u)};function k(o){return React.isValidElement(o)}function x(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var a=function(e){return e>=10?e:"0".concat(e)},M=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(a(s))}var r=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(a(r),":").concat(a(n))}},83220:function(y,p,_){_.r(p),_.d(p,{texts:function(){return m}});const m=[{value:"import { Upload } from '@agentscope-ai/design'",paraId:0},{value:"The following are examples and variants of this upload component",paraId:1,tocIndex:1}]}}]);
