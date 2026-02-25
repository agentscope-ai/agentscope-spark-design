"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[828],{81497:function(C,c,_){_.r(c);var l=_(41570),d=_(12968),h=_(77815),E=_(35771),b=_(55454),i=_(64777),y=_(11851),D=_(78616),v=_(44616),k=_(51972),x=_(90628),o=_(95290),M=_(34766),a=_(51204),e=_(66404),s=_(75271),r=_(56699),n=_(52676);function u(){return(0,n.jsx)(a.DumiPage,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.Z,{title:"Statistic",desc:"Display statistic number"}),(0,n.jsx)(a.DumiDemo,{demo:{id:"statistic-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Statistic/demo/demo1.tsx"}}),(0,n.jsx)(M.Z,{children:r.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"statistic-example",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#statistic-example",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Statistic Example"]}),(0,n.jsx)("p",{children:r.texts[1].value})]}),(0,n.jsx)(a.DumiDemo,{demo:{id:"statistic-demo-demo2"},previewerProps:{center:!0,title:"Add elements via prefix and suffix",filename:"src/components/commonComponents/Statistic/demo/demo2.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/statistic/#api"})]})})})}c.default=u},38356:function(C,c,_){_.d(c,{Z:function(){return a}});var l=_(26068),d=_.n(l),h=_(60213),E=_(68278),b=_(44201),i=_(75271),y=_(53649),D=_.n(y),v=_(30764),k,x=(0,v.Z)(k||(k=D()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),o=_(52676),M=function(s){var r,n,u=(0,h.getCommonConfig)(),m=u.antPrefix,g=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var P;return((P=s.menu)===null||P===void 0?void 0:P.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,o.jsxs)("div",{className:"".concat(m,"-dropdown-check-wrapper"),children:[O,(0,o.jsx)("span",{className:"".concat(m,"-dropdown-check-icon"),children:(0,o.jsx)(E.Z,{})})]})),d()(d()({},f),t)})},[(r=s.menu)===null||r===void 0?void 0:r.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=x();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{}),(0,o.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},a=M},39971:function(C,c,_){var l=_(48305),d=_.n(l),h=_(67825),E=_.n(h),b=_(26068),i=_.n(b),y=_(58911),D=_(88602),v=_(99090),k=_(62910),x=_(86212),o=_(52676),M=["content"],a={success:{type:"success",icon:(0,o.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(D.Z,{})},error:{type:"error",icon:(0,o.jsx)(v.Z,{})},info:{type:"info",icon:(0,o.jsx)(k.Z,{})}},e=function(n,u){var m,g;typeof u=="string"?g={content:u}:g=i()({},u);var j=g,p=j.content,P=E()(j,M);x.ZP.open(i()({type:n,content:p,icon:n==="loading"||(m=a[n])===null||m===void 0?void 0:m.icon},P))},s=function(n){var u=x.ZP.useMessage(n),m=d()(u,2),g=m[0],j=m[1],p=function(t,O){var A,w;typeof O=="string"?w={content:O,type:t}:w=i()(i()({},O),{},{type:t}),g[t](i()(i()({},w),{},{icon:(A=a[t])===null||A===void 0?void 0:A.icon}))},P=i()(i()({},g),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[P,j]};c.Z=i()(i()({},x.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},95336:function(C,c,_){_.d(c,{JG:function(){return D},rb:function(){return v}});var l=_(26068),d=_.n(l),h=_(67825),E=_.n(h),b=_(75271),i=["maxWidth","maxHeight"];function y(){var a;return((a=window.g_config)===null||a===void 0?void 0:a.isIntl)||!1}var D=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.maxWidth,n=s.maxHeight,u=E()(s,i);return d()({overlayInnerStyle:{maxWidth:r||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},u)};function k(a){return React.isValidElement(a)}function x(a){var e=a||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var o=function(e){return e>=10?e:"0".concat(e)},M=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(o(s))}var r=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(o(r),":").concat(o(n))}},56699:function(C,c,_){_.r(c),_.d(c,{texts:function(){return l}});const l=[{value:"import { Statistic } from '@agentscope-ai/design'",paraId:0},{value:"The following are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
