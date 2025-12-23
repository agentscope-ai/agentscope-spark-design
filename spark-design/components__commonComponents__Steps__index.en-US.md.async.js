"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[6746],{25500:function(y,p,_){_.r(p);var m=_(48661),d=_(28450),E=_(87276),x=_(83775),b=_(36337),i=_(14552),C=_(68879),M=_(15957),v=_(8958),h=_(98520),k=_(41395),r=_(79756),D=_(33779),o=_(21570),e=_(28060),s=_(75271),t=_(40823),n=_(52676);function u(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{title:"Steps",desc:"A navigation bar that guides users through the steps of a task."}),(0,n.jsx)(o.Dl,{demo:{id:"steps-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Steps/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:t.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"steps-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#steps-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Steps Examples"]}),(0,n.jsx)("p",{children:t.texts[1].value})]}),(0,n.jsx)(o.Dl,{demo:{id:"steps-demo-demo2"},previewerProps:{center:!0,title:"With Description",filename:"src/components/commonComponents/Steps/demo/demo2.tsx"}}),(0,n.jsx)(o.Dl,{demo:{id:"steps-demo-demo3"},previewerProps:{center:!0,title:"Vertical Direction",filename:"src/components/commonComponents/Steps/demo/demo3.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/steps/#api"})]})})})}p.default=u},64925:function(y,p,_){_.d(p,{Z:function(){return o}});var m=_(26068),d=_.n(m),E=_(51886),x=_(71649),b=_(42478),i=_(75271),C=_(53649),M=_.n(C),v=_(75469),h,k=(0,v.Z)(h||(h=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),r=_(52676),D=function(s){var t,n,u=(0,E.getCommonConfig)(),c=u.antPrefix,g=(0,i.useMemo)(function(){var l;if(!((l=s.menu)!==null&&l!==void 0&&l.selectable)||!s.menu){var P;return((P=s.menu)===null||P===void 0?void 0:P.items)||[]}return s.menu.items.map(function(f){var a={},O=f.label;return O&&(a.label=(0,r.jsxs)("div",{className:"".concat(c,"-dropdown-check-wrapper"),children:[O,(0,r.jsx)("span",{className:"".concat(c,"-dropdown-check-icon"),children:(0,r.jsx)(x.Z,{})})]})),d()(d()({},f),a)})},[(t=s.menu)===null||t===void 0?void 0:t.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=k();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},o=D},63953:function(y,p,_){var m=_(48305),d=_.n(m),E=_(67825),x=_.n(E),b=_(26068),i=_.n(b),C=_(58911),M=_(88602),v=_(99090),h=_(62910),k=_(82090),r=_(52676),D=["content"],o={success:{type:"success",icon:(0,r.jsx)(C.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(M.Z,{})},error:{type:"error",icon:(0,r.jsx)(v.Z,{})},info:{type:"info",icon:(0,r.jsx)(h.Z,{})}},e=function(n,u){var c,g;typeof u=="string"?g={content:u}:g=i()({},u);var j=g,l=j.content,P=x()(j,D);k.ZP.open(i()({type:n,content:l,icon:n==="loading"||(c=o[n])===null||c===void 0?void 0:c.icon},P))},s=function(n){var u=k.ZP.useMessage(n),c=d()(u,2),g=c[0],j=c[1],l=function(a,O){var A,I;typeof O=="string"?I={content:O,type:a}:I=i()(i()({},O),{},{type:a}),g[a](i()(i()({},I),{},{icon:(A=o[a])===null||A===void 0?void 0:A.icon}))},P=i()(i()({},g),{},{success:function(a){return l("success",a)},warning:function(a){return l("warning",a)},error:function(a){return l("error",a)},info:function(a){return l("info",a)},loading:function(a){return l("loading",a)}});return[P,j]};p.Z=i()(i()({},k.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},12281:function(y,p,_){_.d(p,{JG:function(){return M},rb:function(){return v}});var m=_(26068),d=_.n(m),E=_(67825),x=_.n(E),b=_(75271),i=["maxWidth","maxHeight"];function C(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.maxWidth,n=s.maxHeight,u=x()(s,i);return d()({overlayInnerStyle:{maxWidth:t||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},u)};function h(o){return React.isValidElement(o)}function k(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var r=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(r(s))}var t=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(r(t),":").concat(r(n))}},40823:function(y,p,_){_.r(p),_.d(p,{texts:function(){return m}});const m=[{value:"import { Steps } from '@agentscope-ai/design'",paraId:0},{value:"Here are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
