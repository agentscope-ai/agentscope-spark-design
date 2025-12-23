"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[9652],{51064:function(T,l,_){_.r(l);var c=_(48661),d=_(28450),E=_(87276),x=_(83775),O=_(36337),i=_(14552),C=_(68879),b=_(15957),v=_(8958),h=_(98520),P=_(41395),a=_(79756),M=_(33779),o=_(21570),e=_(28060),s=_(75271),r=_(27029),n=_(52676);function u(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{title:"Table",desc:"Display rows and columns of data."}),(0,n.jsx)(o.Dl,{demo:{id:"table-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Table/demo/demo1.tsx"}}),(0,n.jsx)(M.Z,{children:r.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"table-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#table-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Table Examples"]}),(0,n.jsx)("p",{children:r.texts[1].value})]}),(0,n.jsx)(o.Dl,{demo:{id:"table-demo-demo2"},previewerProps:{center:!0,title:"With Radio Selection in First Column",filename:"src/components/commonComponents/Table/demo/demo2.tsx"}}),(0,n.jsx)(o.Dl,{demo:{id:"table-demo-demo3"},previewerProps:{center:!0,title:"With Checkbox Selection in First Column",filename:"src/components/commonComponents/Table/demo/demo3.tsx"}}),(0,n.jsx)(o.Dl,{demo:{id:"table-demo-demo4"},previewerProps:{center:!0,title:"Sortable from Column Header",filename:"src/components/commonComponents/Table/demo/demo4.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/table/#api"})]})})})}l.default=u},64925:function(T,l,_){_.d(l,{Z:function(){return o}});var c=_(26068),d=_.n(c),E=_(51886),x=_(71649),O=_(42478),i=_(75271),C=_(53649),b=_.n(C),v=_(75469),h,P=(0,v.Z)(h||(h=b()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),a=_(52676),M=function(s){var r,n,u=(0,E.getCommonConfig)(),m=u.antPrefix,g=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var k;return((k=s.menu)===null||k===void 0?void 0:k.items)||[]}return s.menu.items.map(function(f){var t={},D=f.label;return D&&(t.label=(0,a.jsxs)("div",{className:"".concat(m,"-dropdown-check-wrapper"),children:[D,(0,a.jsx)("span",{className:"".concat(m,"-dropdown-check-icon"),children:(0,a.jsx)(x.Z,{})})]})),d()(d()({},f),t)})},[(r=s.menu)===null||r===void 0?void 0:r.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=P();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j,{}),(0,a.jsx)(O.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},o=M},63953:function(T,l,_){var c=_(48305),d=_.n(c),E=_(67825),x=_.n(E),O=_(26068),i=_.n(O),C=_(58911),b=_(88602),v=_(99090),h=_(62910),P=_(82090),a=_(52676),M=["content"],o={success:{type:"success",icon:(0,a.jsx)(C.Z,{})},warning:{type:"warning",icon:(0,a.jsx)(b.Z,{})},error:{type:"error",icon:(0,a.jsx)(v.Z,{})},info:{type:"info",icon:(0,a.jsx)(h.Z,{})}},e=function(n,u){var m,g;typeof u=="string"?g={content:u}:g=i()({},u);var j=g,p=j.content,k=x()(j,M);P.ZP.open(i()({type:n,content:p,icon:n==="loading"||(m=o[n])===null||m===void 0?void 0:m.icon},k))},s=function(n){var u=P.ZP.useMessage(n),m=d()(u,2),g=m[0],j=m[1],p=function(t,D){var y,A;typeof D=="string"?A={content:D,type:t}:A=i()(i()({},D),{},{type:t}),g[t](i()(i()({},A),{},{icon:(y=o[t])===null||y===void 0?void 0:y.icon}))},k=i()(i()({},g),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[k,j]};l.Z=i()(i()({},P.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},12281:function(T,l,_){_.d(l,{JG:function(){return b},rb:function(){return v}});var c=_(26068),d=_.n(c),E=_(67825),x=_.n(E),O=_(75271),i=["maxWidth","maxHeight"];function C(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var b=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.maxWidth,n=s.maxHeight,u=x()(s,i);return d()({overlayInnerStyle:{maxWidth:r||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},u)};function h(o){return React.isValidElement(o)}function P(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var a=function(e){return e>=10?e:"0".concat(e)},M=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(a(s))}var r=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(a(r),":").concat(a(n))}},27029:function(T,l,_){_.r(l),_.d(l,{texts:function(){return c}});const c=[{value:"import { Table } from '@agentscope-ai/design'",paraId:0},{value:"Below are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
