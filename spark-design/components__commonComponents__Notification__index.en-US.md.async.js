"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[3077],{45930:function(C,c,_){_.r(c);var l=_(38027),d=_(89196),k=_(36973),x=_(96709),y=_(12635),i=_(7771),j=_(53808),M=_(11003),v=_(29027),h=_(91998),P=_(23297),t=_(90706),D=_(81375),o=_(87204),e=_(31109),s=_(75271),r=_(94842),n=_(52676);function u(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{title:"Notification",desc:"Display notification messages globally."}),(0,n.jsx)(o.Dl,{demo:{id:"notification-demo-demo1"},previewerProps:{center:!0,title:"Basic Usage",filename:"src/components/commonComponents/Notification/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:r.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"notification-with-icons",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#notification-with-icons",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Notification with Icons"]}),(0,n.jsx)("p",{children:r.texts[1].value})]}),(0,n.jsx)(o.Z1,{items:[{demo:{id:"notification-demo-demo2"},previewerProps:{center:!0,title:"Hooks Usage",filename:"src/components/commonComponents/Notification/demo/demo2.tsx"}},{demo:{id:"notification-demo-demo3"},previewerProps:{center:!0,title:"Static Methods",filename:"src/components/commonComponents/Notification/demo/demo3.tsx"}},{demo:{id:"notification-demo-demo4"},previewerProps:{center:!0,title:"Different Placements",filename:"src/components/commonComponents/Notification/demo/demo4.tsx"}}]}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/notification/#api"})]})})})}c.default=u},90088:function(C,c,_){_.d(c,{Z:function(){return o}});var l=_(26068),d=_.n(l),k=_(31209),x=_(71649),y=_(42478),i=_(75271),j=_(53649),M=_.n(j),v=_(88974),h,P=(0,v.Z)(h||(h=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),t=_(52676),D=function(s){var r,n,u=(0,k.getCommonConfig)(),m=u.antPrefix,g=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var a={},b=f.label;return b&&(a.label=(0,t.jsxs)("div",{className:"".concat(m,"-dropdown-check-wrapper"),children:[b,(0,t.jsx)("span",{className:"".concat(m,"-dropdown-check-icon"),children:(0,t.jsx)(x.Z,{})})]})),d()(d()({},f),a)})},[(r=s.menu)===null||r===void 0?void 0:r.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),O=P();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O,{}),(0,t.jsx)(y.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},o=D},33185:function(C,c,_){var l=_(48305),d=_.n(l),k=_(67825),x=_.n(k),y=_(26068),i=_.n(y),j=_(58911),M=_(88602),v=_(99090),h=_(62910),P=_(82090),t=_(52676),D=["content"],o={success:{type:"success",icon:(0,t.jsx)(j.Z,{})},warning:{type:"warning",icon:(0,t.jsx)(M.Z,{})},error:{type:"error",icon:(0,t.jsx)(v.Z,{})},info:{type:"info",icon:(0,t.jsx)(h.Z,{})}},e=function(n,u){var m,g;typeof u=="string"?g={content:u}:g=i()({},u);var O=g,p=O.content,E=x()(O,D);P.ZP.open(i()({type:n,content:p,icon:n==="loading"||(m=o[n])===null||m===void 0?void 0:m.icon},E))},s=function(n){var u=P.ZP.useMessage(n),m=d()(u,2),g=m[0],O=m[1],p=function(a,b){var I,A;typeof b=="string"?A={content:b,type:a}:A=i()(i()({},b),{},{type:a}),g[a](i()(i()({},A),{},{icon:(I=o[a])===null||I===void 0?void 0:I.icon}))},E=i()(i()({},g),{},{success:function(a){return p("success",a)},warning:function(a){return p("warning",a)},error:function(a){return p("error",a)},info:function(a){return p("info",a)},loading:function(a){return p("loading",a)}});return[E,O]};c.Z=i()(i()({},P.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},4853:function(C,c,_){_.d(c,{JG:function(){return M},rb:function(){return v}});var l=_(26068),d=_.n(l),k=_(67825),x=_.n(k),y=_(75271),i=["maxWidth","maxHeight"];function j(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.maxWidth,n=s.maxHeight,u=x()(s,i);return d()({overlayInnerStyle:{maxWidth:r||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},u)};function h(o){return React.isValidElement(o)}function P(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var t=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(t(s))}var r=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(t(r),":").concat(t(n))}},94842:function(C,c,_){_.r(c),_.d(c,{texts:function(){return l}});const l=[{value:"import { Notification } from '@agentscope-ai/design'",paraId:0},{value:"Use the useNotification hooks to support different types of notifications",paraId:1,tocIndex:1}]}}]);
