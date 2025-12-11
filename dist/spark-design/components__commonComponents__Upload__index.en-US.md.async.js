"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4555],{81236:function(y,l,_){_.r(l);var m=_(38027),r=_(89196),h=_(36973),b=_(96709),U=_(12635),d=_(7771),j=_(53808),M=_(11003),v=_(29027),P=_(91998),E=_(23297),o=_(90706),D=_(81375),s=_(87204),e=_(31109),a=_(75271),i=_(11668),n=_(52676);function u(){return(0,n.jsx)(s.dY,{children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Z,{title:"Upload",desc:"File selection upload and drag-and-drop upload control."}),(0,n.jsx)(s.Dl,{demo:{id:"upload-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Upload/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:i.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"upload-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#upload-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Upload Examples"]}),(0,n.jsx)("p",{children:i.texts[1].value})]}),(0,n.jsx)(s.Z1,{items:[{demo:{id:"upload-demo-demo2"},previewerProps:{center:!0,title:"Drag and Drop Upload",filename:"src/components/commonComponents/Upload/demo/demo2.tsx"}},{demo:{id:"upload-demo-demo3"},previewerProps:{center:!0,title:"Display of Uploaded Files",filename:"src/components/commonComponents/Upload/demo/demo3.tsx"}}]}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/upload/#api"})]})})})}l.default=u},90088:function(y,l,_){_.d(l,{Z:function(){return s}});var m=_(26068),r=_.n(m),h=_(31209),b=_(71649),U=_(42478),d=_(75271),j=_(53649),M=_.n(j),v=_(88974),P,E=(0,v.Z)(P||(P=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),o=_(52676),D=function(a){var i,n,u=(0,h.getCommonConfig)(),p=u.antPrefix,g=(0,d.useMemo)(function(){var c;if(!((c=a.menu)!==null&&c!==void 0&&c.selectable)||!a.menu){var x;return((x=a.menu)===null||x===void 0?void 0:x.items)||[]}return a.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,o.jsxs)("div",{className:"".concat(p,"-dropdown-check-wrapper"),children:[O,(0,o.jsx)("span",{className:"".concat(p,"-dropdown-check-icon"),children:(0,o.jsx)(b.Z,{})})]})),r()(r()({},f),t)})},[(i=a.menu)===null||i===void 0?void 0:i.items,(n=a.menu)===null||n===void 0?void 0:n.selectable]),C=E();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C,{}),(0,o.jsx)(U.Z,r()(r()({},a),{},{menu:r()(r()({},a.menu),{},{items:g}),overlayStyle:r()({},a.overlayStyle)}))]})},s=D},33185:function(y,l,_){var m=_(48305),r=_.n(m),h=_(67825),b=_.n(h),U=_(26068),d=_.n(U),j=_(58911),M=_(88602),v=_(99090),P=_(62910),E=_(82090),o=_(52676),D=["content"],s={success:{type:"success",icon:(0,o.jsx)(j.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(M.Z,{})},error:{type:"error",icon:(0,o.jsx)(v.Z,{})},info:{type:"info",icon:(0,o.jsx)(P.Z,{})}},e=function(n,u){var p,g;typeof u=="string"?g={content:u}:g=d()({},u);var C=g,c=C.content,x=b()(C,D);E.ZP.open(d()({type:n,content:c,icon:n==="loading"||(p=s[n])===null||p===void 0?void 0:p.icon},x))},a=function(n){var u=E.ZP.useMessage(n),p=r()(u,2),g=p[0],C=p[1],c=function(t,O){var k,A;typeof O=="string"?A={content:O,type:t}:A=d()(d()({},O),{},{type:t}),g[t](d()(d()({},A),{},{icon:(k=s[t])===null||k===void 0?void 0:k.icon}))},x=d()(d()({},g),{},{success:function(t){return c("success",t)},warning:function(t){return c("warning",t)},error:function(t){return c("error",t)},info:function(t){return c("info",t)},loading:function(t){return c("loading",t)}});return[x,C]};l.Z=d()(d()({},E.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:a})},4853:function(y,l,_){_.d(l,{JG:function(){return M},rb:function(){return v}});var m=_(26068),r=_.n(m),h=_(67825),b=_.n(h),U=_(75271),d=["maxWidth","maxHeight"];function j(){var s;return((s=window.g_config)===null||s===void 0?void 0:s.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var a=document.createElement("textarea");document.body.appendChild(a),a.style.position="fixed",a.style.clip="rect(0 0 0 0)",a.style.top="10px",a.value=e,a.select(),document.execCommand("copy",!0),document.body.removeChild(a)}},v=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.maxWidth,n=a.maxHeight,u=b()(a,d);return r()({overlayInnerStyle:{maxWidth:i||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},u)};function P(s){return React.isValidElement(s)}function E(s){var e=s||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var o=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var a=Math.ceil(e);return"0:".concat(o(a))}var i=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(o(i),":").concat(o(n))}},11668:function(y,l,_){_.r(l),_.d(l,{texts:function(){return m}});const m=[{value:"import { Upload } from '@agentscope-ai/design'",paraId:0},{value:"The following are examples and variants of this upload component",paraId:1,tocIndex:1}]}}]);
