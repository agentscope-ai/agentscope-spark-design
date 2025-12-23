"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4555],{59379:function(y,p,_){_.r(p);var m=_(48661),d=_(28450),E=_(87276),x=_(83775),b=_(36337),i=_(14552),C=_(68879),M=_(15957),v=_(8958),P=_(98520),h=_(41395),a=_(79756),D=_(33779),o=_(21570),e=_(28060),s=_(75271),r=_(76091),n=_(52676);function l(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Z,{title:"Upload",desc:"File selection upload and drag-and-drop upload control."}),(0,n.jsx)(o.Dl,{demo:{id:"upload-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Upload/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:r.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"upload-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#upload-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Upload Examples"]}),(0,n.jsx)("p",{children:r.texts[1].value})]}),(0,n.jsx)(o.Z1,{items:[{demo:{id:"upload-demo-demo2"},previewerProps:{center:!0,title:"Drag and Drop Upload",filename:"src/components/commonComponents/Upload/demo/demo2.tsx"}},{demo:{id:"upload-demo-demo3"},previewerProps:{center:!0,title:"Display of Uploaded Files",filename:"src/components/commonComponents/Upload/demo/demo3.tsx"}}]}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/upload/#api"})]})})})}p.default=l},64925:function(y,p,_){_.d(p,{Z:function(){return o}});var m=_(26068),d=_.n(m),E=_(51886),x=_(71649),b=_(42478),i=_(75271),C=_(53649),M=_.n(C),v=_(75469),P,h=(0,v.Z)(P||(P=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),a=_(52676),D=function(s){var r,n,l=(0,E.getCommonConfig)(),c=l.antPrefix,g=(0,i.useMemo)(function(){var u;if(!((u=s.menu)!==null&&u!==void 0&&u.selectable)||!s.menu){var k;return((k=s.menu)===null||k===void 0?void 0:k.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,a.jsxs)("div",{className:"".concat(c,"-dropdown-check-wrapper"),children:[O,(0,a.jsx)("span",{className:"".concat(c,"-dropdown-check-icon"),children:(0,a.jsx)(x.Z,{})})]})),d()(d()({},f),t)})},[(r=s.menu)===null||r===void 0?void 0:r.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=h();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j,{}),(0,a.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},o=D},63953:function(y,p,_){var m=_(48305),d=_.n(m),E=_(67825),x=_.n(E),b=_(26068),i=_.n(b),C=_(58911),M=_(88602),v=_(99090),P=_(62910),h=_(82090),a=_(52676),D=["content"],o={success:{type:"success",icon:(0,a.jsx)(C.Z,{})},warning:{type:"warning",icon:(0,a.jsx)(M.Z,{})},error:{type:"error",icon:(0,a.jsx)(v.Z,{})},info:{type:"info",icon:(0,a.jsx)(P.Z,{})}},e=function(n,l){var c,g;typeof l=="string"?g={content:l}:g=i()({},l);var j=g,u=j.content,k=x()(j,D);h.ZP.open(i()({type:n,content:u,icon:n==="loading"||(c=o[n])===null||c===void 0?void 0:c.icon},k))},s=function(n){var l=h.ZP.useMessage(n),c=d()(l,2),g=c[0],j=c[1],u=function(t,O){var A,I;typeof O=="string"?I={content:O,type:t}:I=i()(i()({},O),{},{type:t}),g[t](i()(i()({},I),{},{icon:(A=o[t])===null||A===void 0?void 0:A.icon}))},k=i()(i()({},g),{},{success:function(t){return u("success",t)},warning:function(t){return u("warning",t)},error:function(t){return u("error",t)},info:function(t){return u("info",t)},loading:function(t){return u("loading",t)}});return[k,j]};p.Z=i()(i()({},h.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},12281:function(y,p,_){_.d(p,{JG:function(){return M},rb:function(){return v}});var m=_(26068),d=_.n(m),E=_(67825),x=_.n(E),b=_(75271),i=["maxWidth","maxHeight"];function C(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.maxWidth,n=s.maxHeight,l=x()(s,i);return d()({overlayInnerStyle:{maxWidth:r||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},l)};function P(o){return React.isValidElement(o)}function h(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var a=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(a(s))}var r=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(a(r),":").concat(a(n))}},76091:function(y,p,_){_.r(p),_.d(p,{texts:function(){return m}});const m=[{value:"import { Upload } from '@agentscope-ai/design'",paraId:0},{value:"The following are examples and variants of this upload component",paraId:1,tocIndex:1}]}}]);
