"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4555],{81236:function(C,u,_){_.r(u);var m=_(38027),i=_(89196),x=_(36973),k=_(96709),j=_(12635),d=_(7771),y=_(53808),M=_(11003),v=_(29027),h=_(91998),P=_(23297),a=_(90706),D=_(81375),o=_(87204),e=_(31109),s=_(75271),r=_(11668),n=_(52676);function p(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{title:"Upload",desc:"File selection upload and drag-and-drop upload control."}),(0,n.jsx)(o.Dl,{demo:{id:"upload-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Upload/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:r.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"upload-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#upload-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Upload Examples"]}),(0,n.jsx)("p",{children:r.texts[1].value})]}),(0,n.jsx)(o.Z1,{items:[{demo:{id:"upload-demo-demo2"},previewerProps:{center:!0,title:"Drag and Drop Upload",filename:"src/components/commonComponents/Upload/demo/demo2.tsx"}},{demo:{id:"upload-demo-demo3"},previewerProps:{center:!0,title:"Display of Uploaded Files",filename:"src/components/commonComponents/Upload/demo/demo3.tsx"}}]}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/upload/#api"})]})})})}u.default=p},90088:function(C,u,_){_.d(u,{Z:function(){return o}});var m=_(26068),i=_.n(m),x=_(31209),k=_(71649),j=_(42478),d=_(75271),y=_(53649),M=_.n(y),v=_(88974),h,P=(0,v.Z)(h||(h=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),a=_(52676),D=function(s){var r,n,p=(0,x.getCommonConfig)(),c=p.antPrefix,g=(0,d.useMemo)(function(){var l;if(!((l=s.menu)!==null&&l!==void 0&&l.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var t={},b=f.label;return b&&(t.label=(0,a.jsxs)("div",{className:"".concat(c,"-dropdown-check-wrapper"),children:[b,(0,a.jsx)("span",{className:"".concat(c,"-dropdown-check-icon"),children:(0,a.jsx)(k.Z,{})})]})),i()(i()({},f),t)})},[(r=s.menu)===null||r===void 0?void 0:r.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),O=P();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(O,{}),(0,a.jsx)(j.Z,i()(i()({},s),{},{menu:i()(i()({},s.menu),{},{items:g}),overlayStyle:i()({},s.overlayStyle)}))]})},o=D},33185:function(C,u,_){var m=_(48305),i=_.n(m),x=_(67825),k=_.n(x),j=_(26068),d=_.n(j),y=_(58911),M=_(88602),v=_(99090),h=_(62910),P=_(82090),a=_(52676),D=["content"],o={success:{type:"success",icon:(0,a.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,a.jsx)(M.Z,{})},error:{type:"error",icon:(0,a.jsx)(v.Z,{})},info:{type:"info",icon:(0,a.jsx)(h.Z,{})}},e=function(n,p){var c,g;typeof p=="string"?g={content:p}:g=d()({},p);var O=g,l=O.content,E=k()(O,D);P.ZP.open(d()({type:n,content:l,icon:n==="loading"||(c=o[n])===null||c===void 0?void 0:c.icon},E))},s=function(n){var p=P.ZP.useMessage(n),c=i()(p,2),g=c[0],O=c[1],l=function(t,b){var A,I;typeof b=="string"?I={content:b,type:t}:I=d()(d()({},b),{},{type:t}),g[t](d()(d()({},I),{},{icon:(A=o[t])===null||A===void 0?void 0:A.icon}))},E=d()(d()({},g),{},{success:function(t){return l("success",t)},warning:function(t){return l("warning",t)},error:function(t){return l("error",t)},info:function(t){return l("info",t)},loading:function(t){return l("loading",t)}});return[E,O]};u.Z=d()(d()({},P.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},4853:function(C,u,_){_.d(u,{JG:function(){return M},rb:function(){return v}});var m=_(26068),i=_.n(m),x=_(67825),k=_.n(x),j=_(75271),d=["maxWidth","maxHeight"];function y(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.maxWidth,n=s.maxHeight,p=k()(s,d);return i()({overlayInnerStyle:{maxWidth:r||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},p)};function h(o){return React.isValidElement(o)}function P(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var a=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(a(s))}var r=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(a(r),":").concat(a(n))}},11668:function(C,u,_){_.r(u),_.d(u,{texts:function(){return m}});const m=[{value:"import { Upload } from '@agentscope-ai/design'",paraId:0},{value:"The following are examples and variants of this upload component",paraId:1,tocIndex:1}]}}]);
