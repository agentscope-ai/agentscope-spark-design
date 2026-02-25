"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4253],{52807:function(I,c,_){_.r(c);var m=_(41570),d=_(12968),P=_(77815),E=_(35771),b=_(55454),i=_(64777),C=_(11851),M=_(78616),v=_(44616),k=_(51972),x=_(90628),r=_(95290),D=_(34766),o=_(51204),e=_(66404),s=_(75271),a=_(71983),n=_(52676);function p(){return(0,n.jsx)(o.DumiPage,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.Z,{title:"Collapse",desc:"Content area that can be collapsed/expanded."}),(0,n.jsx)(o.DumiDemo,{demo:{id:"collapse-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Collapse/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:a.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"collapse-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#collapse-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Collapse Examples"]}),(0,n.jsx)("p",{children:a.texts[1].value})]}),(0,n.jsx)(o.DumiDemo,{demo:{id:"collapse-demo-demo2"},previewerProps:{center:!0,title:"Support operation configuration",filename:"src/components/commonComponents/Collapse/demo/demo2.tsx"}}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(v.Z,{url:"https://ant.design/components/collapse/#api"}),a.texts[2].value]})]})]})})})}c.default=p},38356:function(I,c,_){_.d(c,{Z:function(){return o}});var m=_(26068),d=_.n(m),P=_(60213),E=_(68278),b=_(44201),i=_(75271),C=_(53649),M=_.n(C),v=_(30764),k,x=(0,v.Z)(k||(k=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),r=_(52676),D=function(s){var a,n,p=(0,P.getCommonConfig)(),l=p.antPrefix,g=(0,i.useMemo)(function(){var u;if(!((u=s.menu)!==null&&u!==void 0&&u.selectable)||!s.menu){var h;return((h=s.menu)===null||h===void 0?void 0:h.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,r.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[O,(0,r.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,r.jsx)(E.Z,{})})]})),d()(d()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=x();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},o=D},39971:function(I,c,_){var m=_(48305),d=_.n(m),P=_(67825),E=_.n(P),b=_(26068),i=_.n(b),C=_(58911),M=_(88602),v=_(99090),k=_(62910),x=_(86212),r=_(52676),D=["content"],o={success:{type:"success",icon:(0,r.jsx)(C.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(M.Z,{})},error:{type:"error",icon:(0,r.jsx)(v.Z,{})},info:{type:"info",icon:(0,r.jsx)(k.Z,{})}},e=function(n,p){var l,g;typeof p=="string"?g={content:p}:g=i()({},p);var j=g,u=j.content,h=E()(j,D);x.ZP.open(i()({type:n,content:u,icon:n==="loading"||(l=o[n])===null||l===void 0?void 0:l.icon},h))},s=function(n){var p=x.ZP.useMessage(n),l=d()(p,2),g=l[0],j=l[1],u=function(t,O){var y,A;typeof O=="string"?A={content:O,type:t}:A=i()(i()({},O),{},{type:t}),g[t](i()(i()({},A),{},{icon:(y=o[t])===null||y===void 0?void 0:y.icon}))},h=i()(i()({},g),{},{success:function(t){return u("success",t)},warning:function(t){return u("warning",t)},error:function(t){return u("error",t)},info:function(t){return u("info",t)},loading:function(t){return u("loading",t)}});return[h,j]};c.Z=i()(i()({},x.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},95336:function(I,c,_){_.d(c,{JG:function(){return M},rb:function(){return v}});var m=_(26068),d=_.n(m),P=_(67825),E=_.n(P),b=_(75271),i=["maxWidth","maxHeight"];function C(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,p=E()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},p)};function k(o){return React.isValidElement(o)}function x(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var r=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(r(s))}var a=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(r(a),":").concat(r(n))}},71983:function(I,c,_){_.r(c),_.d(c,{texts:function(){return m}});const m=[{value:"import { Collapse } from '@agentscope-ai/design'",paraId:0},{value:"Here are examples and variants of this component",paraId:1,tocIndex:1},{value:".",paraId:2,tocIndex:3}]}}]);
