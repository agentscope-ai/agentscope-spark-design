"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[5026],{73961:function(y,c,_){_.r(c);var l=_(41570),i=_(12968),P=_(77815),h=_(35771),b=_(55454),d=_(64777),C=_(11851),M=_(78616),v=_(44616),k=_(51972),x=_(90628),a=_(95290),D=_(34766),o=_(51204),e=_(66404),s=_(75271),r=_(61045),n=_(52676);function u(){return(0,n.jsx)(o.DumiPage,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.Z,{title:"Cascader",desc:"Cascade Selection"}),(0,n.jsx)(o.DumiDemo,{demo:{id:"src-components-common-components-cascader-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Cascader/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:r.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"cascader-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#cascader-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Cascader Examples"]}),(0,n.jsx)("p",{children:r.texts[1].value})]}),(0,n.jsx)(o.DumiDemo,{demo:{id:"src-components-common-components-cascader-demo-demo2"},previewerProps:{center:!0,title:"Multiple Selection",filename:"src/components/commonComponents/Cascader/demo/demo2.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"faqs",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faqs",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"FAQs"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/cascader/#api"})]})})})}c.default=u},38356:function(y,c,_){_.d(c,{Z:function(){return o}});var l=_(26068),i=_.n(l),P=_(60213),h=_(68278),b=_(44201),d=_(75271),C=_(53649),M=_.n(C),v=_(30764),k,x=(0,v.Z)(k||(k=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),a=_(52676),D=function(s){var r,n,u=(0,P.getCommonConfig)(),m=u.antPrefix,g=(0,d.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,a.jsxs)("div",{className:"".concat(m,"-dropdown-check-wrapper"),children:[O,(0,a.jsx)("span",{className:"".concat(m,"-dropdown-check-icon"),children:(0,a.jsx)(h.Z,{})})]})),i()(i()({},f),t)})},[(r=s.menu)===null||r===void 0?void 0:r.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=x();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j,{}),(0,a.jsx)(b.Z,i()(i()({},s),{},{menu:i()(i()({},s.menu),{},{items:g}),overlayStyle:i()({},s.overlayStyle)}))]})},o=D},39971:function(y,c,_){var l=_(48305),i=_.n(l),P=_(67825),h=_.n(P),b=_(26068),d=_.n(b),C=_(58911),M=_(88602),v=_(99090),k=_(62910),x=_(86212),a=_(52676),D=["content"],o={success:{type:"success",icon:(0,a.jsx)(C.Z,{})},warning:{type:"warning",icon:(0,a.jsx)(M.Z,{})},error:{type:"error",icon:(0,a.jsx)(v.Z,{})},info:{type:"info",icon:(0,a.jsx)(k.Z,{})}},e=function(n,u){var m,g;typeof u=="string"?g={content:u}:g=d()({},u);var j=g,p=j.content,E=h()(j,D);x.ZP.open(d()({type:n,content:p,icon:n==="loading"||(m=o[n])===null||m===void 0?void 0:m.icon},E))},s=function(n){var u=x.ZP.useMessage(n),m=i()(u,2),g=m[0],j=m[1],p=function(t,O){var w,A;typeof O=="string"?A={content:O,type:t}:A=d()(d()({},O),{},{type:t}),g[t](d()(d()({},A),{},{icon:(w=o[t])===null||w===void 0?void 0:w.icon}))},E=d()(d()({},g),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[E,j]};c.Z=d()(d()({},x.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},95336:function(y,c,_){_.d(c,{JG:function(){return M},rb:function(){return v}});var l=_(26068),i=_.n(l),P=_(67825),h=_.n(P),b=_(75271),d=["maxWidth","maxHeight"];function C(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.maxWidth,n=s.maxHeight,u=h()(s,d);return i()({overlayInnerStyle:{maxWidth:r||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},u)};function k(o){return React.isValidElement(o)}function x(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var a=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(a(s))}var r=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(a(r),":").concat(a(n))}},61045:function(y,c,_){_.r(c),_.d(c,{texts:function(){return l}});const l=[{value:"import { Cascader } from '@agentscope-ai/design'",paraId:0},{value:"Below are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
