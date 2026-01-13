"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7711],{18638:function(w,c,_){_.r(c);var m=_(41570),d=_(12968),h=_(77815),P=_(35771),b=_(71705),i=_(64777),C=_(11851),M=_(78616),v=_(52990),k=_(74235),x=_(73031),r=_(30864),j=_(29370),o=_(87274),e=_(18282),s=_(75271),a=_(75019),n=_(52676);function u(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.Z,{title:"Select",desc:"Dropdown Selector"}),(0,n.jsx)(o.Dl,{demo:{id:"src-components-common-components-select-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Select/demo/demo1.tsx"}}),(0,n.jsx)(j.Z,{children:a.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"select-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#select-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Select Examples"]}),(0,n.jsx)("p",{children:a.texts[1].value})]}),(0,n.jsx)(o.Dl,{demo:{id:"src-components-common-components-select-demo-demo2"},previewerProps:{center:!0,title:"Multiple Selection",filename:"src/components/commonComponents/Select/demo/demo2.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"faqs",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faqs",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"FAQs"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/select/#api"})]})})})}c.default=u},38356:function(w,c,_){_.d(c,{Z:function(){return o}});var m=_(26068),d=_.n(m),h=_(60213),P=_(68278),b=_(44201),i=_(75271),C=_(53649),M=_.n(C),v=_(30764),k,x=(0,v.Z)(k||(k=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),r=_(52676),j=function(s){var a,n,u=(0,h.getCommonConfig)(),l=u.antPrefix,g=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,r.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[O,(0,r.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,r.jsx)(P.Z,{})})]})),d()(d()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),D=x();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D,{}),(0,r.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},o=j},39971:function(w,c,_){var m=_(48305),d=_.n(m),h=_(67825),P=_.n(h),b=_(26068),i=_.n(b),C=_(58911),M=_(88602),v=_(99090),k=_(62910),x=_(86212),r=_(52676),j=["content"],o={success:{type:"success",icon:(0,r.jsx)(C.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(M.Z,{})},error:{type:"error",icon:(0,r.jsx)(v.Z,{})},info:{type:"info",icon:(0,r.jsx)(k.Z,{})}},e=function(n,u){var l,g;typeof u=="string"?g={content:u}:g=i()({},u);var D=g,p=D.content,E=P()(D,j);x.ZP.open(i()({type:n,content:p,icon:n==="loading"||(l=o[n])===null||l===void 0?void 0:l.icon},E))},s=function(n){var u=x.ZP.useMessage(n),l=d()(u,2),g=l[0],D=l[1],p=function(t,O){var y,A;typeof O=="string"?A={content:O,type:t}:A=i()(i()({},O),{},{type:t}),g[t](i()(i()({},A),{},{icon:(y=o[t])===null||y===void 0?void 0:y.icon}))},E=i()(i()({},g),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[E,D]};c.Z=i()(i()({},x.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},95336:function(w,c,_){_.d(c,{JG:function(){return M},rb:function(){return v}});var m=_(26068),d=_.n(m),h=_(67825),P=_.n(h),b=_(75271),i=["maxWidth","maxHeight"];function C(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,u=P()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},u)};function k(o){return React.isValidElement(o)}function x(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var r=function(e){return e>=10?e:"0".concat(e)},j=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(r(s))}var a=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(r(a),":").concat(r(n))}},75019:function(w,c,_){_.r(c),_.d(c,{texts:function(){return m}});const m=[{value:"import { Select } from '@agentscope-ai/design'",paraId:0},{value:"Below are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
