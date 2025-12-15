"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[3824],{89273:function(C,u,_){_.r(u);var m=_(38027),d=_(89196),k=_(36973),x=_(96709),j=_(12635),i=_(7771),y=_(53808),M=_(11003),v=_(29027),h=_(91998),E=_(23297),t=_(90706),D=_(81375),o=_(87204),e=_(31109),s=_(75271),r=_(65940),n=_(52676);function c(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{title:"FloatButton",desc:"Used for global functions on the website. Buttons that can be seen no matter where you browse."}),(0,n.jsx)(o.Dl,{demo:{id:"src-components-common-components-float-button-demo-demo1"},previewerProps:{center:!0,iframe:!0,title:"Example",filename:"src/components/commonComponents/FloatButton/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:r.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"float-button-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#float-button-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Float Button Examples"]}),(0,n.jsx)("p",{children:r.texts[1].value})]}),(0,n.jsx)(o.Dl,{demo:{id:"src-components-common-components-float-button-demo-demo2"},previewerProps:{center:!0,iframe:!0,title:"Float button with theme color background",filename:"src/components/commonComponents/FloatButton/demo/demo2.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/float-button/#api"})]})})})}u.default=c},90088:function(C,u,_){_.d(u,{Z:function(){return o}});var m=_(26068),d=_.n(m),k=_(31209),x=_(71649),j=_(42478),i=_(75271),y=_(53649),M=_.n(y),v=_(88974),h,E=(0,v.Z)(h||(h=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),t=_(52676),D=function(s){var r,n,c=(0,k.getCommonConfig)(),p=c.antPrefix,g=(0,i.useMemo)(function(){var l;if(!((l=s.menu)!==null&&l!==void 0&&l.selectable)||!s.menu){var P;return((P=s.menu)===null||P===void 0?void 0:P.items)||[]}return s.menu.items.map(function(f){var a={},O=f.label;return O&&(a.label=(0,t.jsxs)("div",{className:"".concat(p,"-dropdown-check-wrapper"),children:[O,(0,t.jsx)("span",{className:"".concat(p,"-dropdown-check-icon"),children:(0,t.jsx)(x.Z,{})})]})),d()(d()({},f),a)})},[(r=s.menu)===null||r===void 0?void 0:r.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),b=E();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b,{}),(0,t.jsx)(j.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},o=D},33185:function(C,u,_){var m=_(48305),d=_.n(m),k=_(67825),x=_.n(k),j=_(26068),i=_.n(j),y=_(58911),M=_(88602),v=_(99090),h=_(62910),E=_(82090),t=_(52676),D=["content"],o={success:{type:"success",icon:(0,t.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,t.jsx)(M.Z,{})},error:{type:"error",icon:(0,t.jsx)(v.Z,{})},info:{type:"info",icon:(0,t.jsx)(h.Z,{})}},e=function(n,c){var p,g;typeof c=="string"?g={content:c}:g=i()({},c);var b=g,l=b.content,P=x()(b,D);E.ZP.open(i()({type:n,content:l,icon:n==="loading"||(p=o[n])===null||p===void 0?void 0:p.icon},P))},s=function(n){var c=E.ZP.useMessage(n),p=d()(c,2),g=p[0],b=p[1],l=function(a,O){var A,I;typeof O=="string"?I={content:O,type:a}:I=i()(i()({},O),{},{type:a}),g[a](i()(i()({},I),{},{icon:(A=o[a])===null||A===void 0?void 0:A.icon}))},P=i()(i()({},g),{},{success:function(a){return l("success",a)},warning:function(a){return l("warning",a)},error:function(a){return l("error",a)},info:function(a){return l("info",a)},loading:function(a){return l("loading",a)}});return[P,b]};u.Z=i()(i()({},E.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},4853:function(C,u,_){_.d(u,{JG:function(){return M},rb:function(){return v}});var m=_(26068),d=_.n(m),k=_(67825),x=_.n(k),j=_(75271),i=["maxWidth","maxHeight"];function y(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.maxWidth,n=s.maxHeight,c=x()(s,i);return d()({overlayInnerStyle:{maxWidth:r||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},c)};function h(o){return React.isValidElement(o)}function E(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var t=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(t(s))}var r=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(t(r),":").concat(t(n))}},65940:function(C,u,_){_.r(u),_.d(u,{texts:function(){return m}});const m=[{value:`
import { FloatButton } from '@agentscope-ai/design'
`,paraId:0},{value:"The following are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
