"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[716],{19817:function(C,c,_){_.r(c);var l=_(41570),d=_(12968),P=_(77815),E=_(35771),b=_(55454),i=_(64777),A=_(11851),M=_(78616),v=_(44616),k=_(51972),x=_(90628),r=_(95290),D=_(34766),a=_(51204),e=_(66404),s=_(75271),o=_(58787),n=_(52676);function u(){return(0,n.jsx)(a.DumiPage,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.Z,{title:"Avatar",desc:"Used to represent users or things, supporting image, icon or character display."}),(0,n.jsx)(a.DumiDemo,{demo:{id:"avatar-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Avatar/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:o.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"avatar-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#avatar-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Avatar Examples"]}),(0,n.jsx)("p",{children:o.texts[1].value})]}),(0,n.jsx)(a.DumiDemoGrid,{items:[{demo:{id:"avatar-demo-demo2"},previewerProps:{center:!0,title:"Text Avatar",filename:"src/components/commonComponents/Avatar/demo/demo2.tsx"}},{demo:{id:"avatar-demo-demo3"},previewerProps:{center:!0,title:"Custom Image",filename:"src/components/commonComponents/Avatar/demo/demo3.tsx"}}]}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/avatar/#api"})]})})})}c.default=u},38356:function(C,c,_){_.d(c,{Z:function(){return a}});var l=_(26068),d=_.n(l),P=_(60213),E=_(68278),b=_(44201),i=_(75271),A=_(53649),M=_.n(A),v=_(30764),k,x=(0,v.Z)(k||(k=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),r=_(52676),D=function(s){var o,n,u=(0,P.getCommonConfig)(),m=u.antPrefix,g=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var h;return((h=s.menu)===null||h===void 0?void 0:h.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,r.jsxs)("div",{className:"".concat(m,"-dropdown-check-wrapper"),children:[O,(0,r.jsx)("span",{className:"".concat(m,"-dropdown-check-icon"),children:(0,r.jsx)(E.Z,{})})]})),d()(d()({},f),t)})},[(o=s.menu)===null||o===void 0?void 0:o.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=x();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},a=D},39971:function(C,c,_){var l=_(48305),d=_.n(l),P=_(67825),E=_.n(P),b=_(26068),i=_.n(b),A=_(58911),M=_(88602),v=_(99090),k=_(62910),x=_(86212),r=_(52676),D=["content"],a={success:{type:"success",icon:(0,r.jsx)(A.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(M.Z,{})},error:{type:"error",icon:(0,r.jsx)(v.Z,{})},info:{type:"info",icon:(0,r.jsx)(k.Z,{})}},e=function(n,u){var m,g;typeof u=="string"?g={content:u}:g=i()({},u);var j=g,p=j.content,h=E()(j,D);x.ZP.open(i()({type:n,content:p,icon:n==="loading"||(m=a[n])===null||m===void 0?void 0:m.icon},h))},s=function(n){var u=x.ZP.useMessage(n),m=d()(u,2),g=m[0],j=m[1],p=function(t,O){var y,w;typeof O=="string"?w={content:O,type:t}:w=i()(i()({},O),{},{type:t}),g[t](i()(i()({},w),{},{icon:(y=a[t])===null||y===void 0?void 0:y.icon}))},h=i()(i()({},g),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[h,j]};c.Z=i()(i()({},x.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},95336:function(C,c,_){_.d(c,{JG:function(){return M},rb:function(){return v}});var l=_(26068),d=_.n(l),P=_(67825),E=_.n(P),b=_(75271),i=["maxWidth","maxHeight"];function A(){var a;return((a=window.g_config)===null||a===void 0?void 0:a.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=s.maxWidth,n=s.maxHeight,u=E()(s,i);return d()({overlayInnerStyle:{maxWidth:o||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},u)};function k(a){return React.isValidElement(a)}function x(a){var e=a||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var r=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(r(s))}var o=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(r(o),":").concat(r(n))}},58787:function(C,c,_){_.r(c),_.d(c,{texts:function(){return l}});const l=[{value:"import { Avatar } from '@agentscope-ai/design'",paraId:0},{value:"The following are examples and variants of this avatar component",paraId:1,tocIndex:1}]}}]);
