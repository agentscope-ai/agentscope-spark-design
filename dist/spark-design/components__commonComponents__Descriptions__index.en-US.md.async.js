"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[2353],{68166:function(U,l,_){_.r(l);var m=_(38027),d=_(89196),h=_(36973),b=_(96709),j=_(12635),r=_(7771),y=_(53808),D=_(11003),v=_(29027),E=_(91998),P=_(23297),i=_(90706),M=_(81375),a=_(87204),e=_(31109),s=_(75271),o=_(25532),n=_(52676);function u(){return(0,n.jsx)(a.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.Z,{title:"Descriptions",desc:"Display a combination of multiple read-only fields"}),(0,n.jsx)(a.Dl,{demo:{id:"descriptions-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Descriptions/demo/demo1.tsx"}}),(0,n.jsx)(M.Z,{children:o.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"descriptions-example",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#descriptions-example",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Descriptions Example"]}),(0,n.jsx)("p",{children:o.texts[1].value})]}),(0,n.jsx)(a.Dl,{demo:{id:"descriptions-demo-demo2"},previewerProps:{center:!0,title:"Vertical Direction",filename:"src/components/commonComponents/Descriptions/demo/demo2.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/descriptions/#api"})]})})})}l.default=u},90088:function(U,l,_){_.d(l,{Z:function(){return a}});var m=_(26068),d=_.n(m),h=_(31209),b=_(71649),j=_(42478),r=_(75271),y=_(53649),D=_.n(y),v=_(88974),E,P=(0,v.Z)(E||(E=D()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),i=_(52676),M=function(s){var o,n,u=(0,h.getCommonConfig)(),p=u.antPrefix,g=(0,r.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var x;return((x=s.menu)===null||x===void 0?void 0:x.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,i.jsxs)("div",{className:"".concat(p,"-dropdown-check-wrapper"),children:[O,(0,i.jsx)("span",{className:"".concat(p,"-dropdown-check-icon"),children:(0,i.jsx)(b.Z,{})})]})),d()(d()({},f),t)})},[(o=s.menu)===null||o===void 0?void 0:o.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),C=P();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C,{}),(0,i.jsx)(j.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},a=M},33185:function(U,l,_){var m=_(48305),d=_.n(m),h=_(67825),b=_.n(h),j=_(26068),r=_.n(j),y=_(58911),D=_(88602),v=_(99090),E=_(62910),P=_(82090),i=_(52676),M=["content"],a={success:{type:"success",icon:(0,i.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,i.jsx)(D.Z,{})},error:{type:"error",icon:(0,i.jsx)(v.Z,{})},info:{type:"info",icon:(0,i.jsx)(E.Z,{})}},e=function(n,u){var p,g;typeof u=="string"?g={content:u}:g=r()({},u);var C=g,c=C.content,x=b()(C,M);P.ZP.open(r()({type:n,content:c,icon:n==="loading"||(p=a[n])===null||p===void 0?void 0:p.icon},x))},s=function(n){var u=P.ZP.useMessage(n),p=d()(u,2),g=p[0],C=p[1],c=function(t,O){var k,A;typeof O=="string"?A={content:O,type:t}:A=r()(r()({},O),{},{type:t}),g[t](r()(r()({},A),{},{icon:(k=a[t])===null||k===void 0?void 0:k.icon}))},x=r()(r()({},g),{},{success:function(t){return c("success",t)},warning:function(t){return c("warning",t)},error:function(t){return c("error",t)},info:function(t){return c("info",t)},loading:function(t){return c("loading",t)}});return[x,C]};l.Z=r()(r()({},P.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},4853:function(U,l,_){_.d(l,{JG:function(){return D},rb:function(){return v}});var m=_(26068),d=_.n(m),h=_(67825),b=_.n(h),j=_(75271),r=["maxWidth","maxHeight"];function y(){var a;return((a=window.g_config)===null||a===void 0?void 0:a.isIntl)||!1}var D=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=s.maxWidth,n=s.maxHeight,u=b()(s,r);return d()({overlayInnerStyle:{maxWidth:o||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},u)};function E(a){return React.isValidElement(a)}function P(a){var e=a||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var i=function(e){return e>=10?e:"0".concat(e)},M=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(i(s))}var o=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(i(o),":").concat(i(n))}},25532:function(U,l,_){_.r(l),_.d(l,{texts:function(){return m}});const m=[{value:"import { Descriptions } from '@agentscope-ai/design'",paraId:0},{value:"Below are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
