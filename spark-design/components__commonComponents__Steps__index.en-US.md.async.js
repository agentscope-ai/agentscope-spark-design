"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[6746],{42538:function(y,p,_){_.r(p);var l=_(41570),d=_(12968),P=_(77815),E=_(35771),b=_(71705),i=_(64777),C=_(11851),M=_(78616),v=_(52990),k=_(74235),h=_(73031),r=_(30864),D=_(29370),o=_(87274),e=_(18282),s=_(75271),a=_(96999),n=_(52676);function c(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.Z,{title:"Steps",desc:"A navigation bar that guides users through the steps of a task."}),(0,n.jsx)(o.Dl,{demo:{id:"steps-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Steps/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:a.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"steps-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#steps-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Steps Examples"]}),(0,n.jsx)("p",{children:a.texts[1].value})]}),(0,n.jsx)(o.Dl,{demo:{id:"steps-demo-demo2"},previewerProps:{center:!0,title:"With Description",filename:"src/components/commonComponents/Steps/demo/demo2.tsx"}}),(0,n.jsx)(o.Dl,{demo:{id:"steps-demo-demo3"},previewerProps:{center:!0,title:"Vertical Direction",filename:"src/components/commonComponents/Steps/demo/demo3.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/steps/#api"})]})})})}p.default=c},38356:function(y,p,_){_.d(p,{Z:function(){return o}});var l=_(26068),d=_.n(l),P=_(60213),E=_(68278),b=_(44201),i=_(75271),C=_(53649),M=_.n(C),v=_(30764),k,h=(0,v.Z)(k||(k=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),r=_(52676),D=function(s){var a,n,c=(0,P.getCommonConfig)(),m=c.antPrefix,g=(0,i.useMemo)(function(){var u;if(!((u=s.menu)!==null&&u!==void 0&&u.selectable)||!s.menu){var x;return((x=s.menu)===null||x===void 0?void 0:x.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,r.jsxs)("div",{className:"".concat(m,"-dropdown-check-wrapper"),children:[O,(0,r.jsx)("span",{className:"".concat(m,"-dropdown-check-icon"),children:(0,r.jsx)(E.Z,{})})]})),d()(d()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=h();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},o=D},39971:function(y,p,_){var l=_(48305),d=_.n(l),P=_(67825),E=_.n(P),b=_(26068),i=_.n(b),C=_(58911),M=_(88602),v=_(99090),k=_(62910),h=_(86212),r=_(52676),D=["content"],o={success:{type:"success",icon:(0,r.jsx)(C.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(M.Z,{})},error:{type:"error",icon:(0,r.jsx)(v.Z,{})},info:{type:"info",icon:(0,r.jsx)(k.Z,{})}},e=function(n,c){var m,g;typeof c=="string"?g={content:c}:g=i()({},c);var j=g,u=j.content,x=E()(j,D);h.ZP.open(i()({type:n,content:u,icon:n==="loading"||(m=o[n])===null||m===void 0?void 0:m.icon},x))},s=function(n){var c=h.ZP.useMessage(n),m=d()(c,2),g=m[0],j=m[1],u=function(t,O){var A,w;typeof O=="string"?w={content:O,type:t}:w=i()(i()({},O),{},{type:t}),g[t](i()(i()({},w),{},{icon:(A=o[t])===null||A===void 0?void 0:A.icon}))},x=i()(i()({},g),{},{success:function(t){return u("success",t)},warning:function(t){return u("warning",t)},error:function(t){return u("error",t)},info:function(t){return u("info",t)},loading:function(t){return u("loading",t)}});return[x,j]};p.Z=i()(i()({},h.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},95336:function(y,p,_){_.d(p,{JG:function(){return M},rb:function(){return v}});var l=_(26068),d=_.n(l),P=_(67825),E=_.n(P),b=_(75271),i=["maxWidth","maxHeight"];function C(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,c=E()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},c)};function k(o){return React.isValidElement(o)}function h(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var r=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(r(s))}var a=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(r(a),":").concat(r(n))}},96999:function(y,p,_){_.r(p),_.d(p,{texts:function(){return l}});const l=[{value:"import { Steps } from '@agentscope-ai/design'",paraId:0},{value:"Here are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
