"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[716],{36258:function(A,u,_){_.r(u);var m=_(38027),i=_(89196),x=_(36973),k=_(96709),j=_(12635),d=_(7771),y=_(53808),M=_(11003),v=_(29027),h=_(91998),P=_(23297),r=_(90706),D=_(81375),a=_(87204),e=_(31109),s=_(75271),o=_(40505),n=_(52676);function c(){return(0,n.jsx)(a.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{title:"Avatar",desc:"Used to represent users or things, supporting image, icon or character display."}),(0,n.jsx)(a.Dl,{demo:{id:"avatar-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Avatar/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:o.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"avatar-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#avatar-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Avatar Examples"]}),(0,n.jsx)("p",{children:o.texts[1].value})]}),(0,n.jsx)(a.Z1,{items:[{demo:{id:"avatar-demo-demo2"},previewerProps:{center:!0,title:"Text Avatar",filename:"src/components/commonComponents/Avatar/demo/demo2.tsx"}},{demo:{id:"avatar-demo-demo3"},previewerProps:{center:!0,title:"Custom Image",filename:"src/components/commonComponents/Avatar/demo/demo3.tsx"}}]}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/avatar/#api"})]})})})}u.default=c},90088:function(A,u,_){_.d(u,{Z:function(){return a}});var m=_(26068),i=_.n(m),x=_(31209),k=_(71649),j=_(42478),d=_(75271),y=_(53649),M=_.n(y),v=_(88974),h,P=(0,v.Z)(h||(h=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),r=_(52676),D=function(s){var o,n,c=(0,x.getCommonConfig)(),l=c.antPrefix,g=(0,d.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var t={},b=f.label;return b&&(t.label=(0,r.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[b,(0,r.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,r.jsx)(k.Z,{})})]})),i()(i()({},f),t)})},[(o=s.menu)===null||o===void 0?void 0:o.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),O=P();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{}),(0,r.jsx)(j.Z,i()(i()({},s),{},{menu:i()(i()({},s.menu),{},{items:g}),overlayStyle:i()({},s.overlayStyle)}))]})},a=D},33185:function(A,u,_){var m=_(48305),i=_.n(m),x=_(67825),k=_.n(x),j=_(26068),d=_.n(j),y=_(58911),M=_(88602),v=_(99090),h=_(62910),P=_(82090),r=_(52676),D=["content"],a={success:{type:"success",icon:(0,r.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(M.Z,{})},error:{type:"error",icon:(0,r.jsx)(v.Z,{})},info:{type:"info",icon:(0,r.jsx)(h.Z,{})}},e=function(n,c){var l,g;typeof c=="string"?g={content:c}:g=d()({},c);var O=g,p=O.content,E=k()(O,D);P.ZP.open(d()({type:n,content:p,icon:n==="loading"||(l=a[n])===null||l===void 0?void 0:l.icon},E))},s=function(n){var c=P.ZP.useMessage(n),l=i()(c,2),g=l[0],O=l[1],p=function(t,b){var C,I;typeof b=="string"?I={content:b,type:t}:I=d()(d()({},b),{},{type:t}),g[t](d()(d()({},I),{},{icon:(C=a[t])===null||C===void 0?void 0:C.icon}))},E=d()(d()({},g),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[E,O]};u.Z=d()(d()({},P.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},4853:function(A,u,_){_.d(u,{JG:function(){return M},rb:function(){return v}});var m=_(26068),i=_.n(m),x=_(67825),k=_.n(x),j=_(75271),d=["maxWidth","maxHeight"];function y(){var a;return((a=window.g_config)===null||a===void 0?void 0:a.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=s.maxWidth,n=s.maxHeight,c=k()(s,d);return i()({overlayInnerStyle:{maxWidth:o||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},c)};function h(a){return React.isValidElement(a)}function P(a){var e=a||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var r=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(r(s))}var o=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(r(o),":").concat(r(n))}},40505:function(A,u,_){_.r(u),_.d(u,{texts:function(){return m}});const m=[{value:"import { Avatar } from '@agentscope-ai/design'",paraId:0},{value:"The following are examples and variants of this avatar component",paraId:1,tocIndex:1}]}}]);
