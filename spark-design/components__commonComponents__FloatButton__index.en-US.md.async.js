"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[3824],{2073:function(C,u,_){_.r(u);var m=_(48661),d=_(28450),P=_(87276),x=_(83775),O=_(36337),i=_(14552),y=_(68879),M=_(15957),v=_(8958),h=_(98520),k=_(41395),t=_(79756),j=_(33779),s=_(21570),e=_(28060),o=_(75271),a=_(23922),n=_(52676);function l(){return(0,n.jsx)(s.dY,{children:(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{title:"FloatButton",desc:"Used for global functions on the website. Buttons that can be seen no matter where you browse."}),(0,n.jsx)(s.Dl,{demo:{id:"src-components-common-components-float-button-demo-demo1"},previewerProps:{center:!0,iframe:!0,title:"Example",filename:"src/components/commonComponents/FloatButton/demo/demo1.tsx"}}),(0,n.jsx)(j.Z,{children:a.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"float-button-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#float-button-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Float Button Examples"]}),(0,n.jsx)("p",{children:a.texts[1].value})]}),(0,n.jsx)(s.Dl,{demo:{id:"src-components-common-components-float-button-demo-demo2"},previewerProps:{center:!0,iframe:!0,title:"Float button with theme color background",filename:"src/components/commonComponents/FloatButton/demo/demo2.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/float-button/#api"})]})})})}u.default=l},64925:function(C,u,_){_.d(u,{Z:function(){return s}});var m=_(26068),d=_.n(m),P=_(51886),x=_(71649),O=_(42478),i=_(75271),y=_(53649),M=_.n(y),v=_(75469),h,k=(0,v.Z)(h||(h=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),t=_(52676),j=function(o){var a,n,l=(0,P.getCommonConfig)(),c=l.antPrefix,g=(0,i.useMemo)(function(){var p;if(!((p=o.menu)!==null&&p!==void 0&&p.selectable)||!o.menu){var E;return((E=o.menu)===null||E===void 0?void 0:E.items)||[]}return o.menu.items.map(function(f){var r={},b=f.label;return b&&(r.label=(0,t.jsxs)("div",{className:"".concat(c,"-dropdown-check-wrapper"),children:[b,(0,t.jsx)("span",{className:"".concat(c,"-dropdown-check-icon"),children:(0,t.jsx)(x.Z,{})})]})),d()(d()({},f),r)})},[(a=o.menu)===null||a===void 0?void 0:a.items,(n=o.menu)===null||n===void 0?void 0:n.selectable]),D=k();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D,{}),(0,t.jsx)(O.Z,d()(d()({},o),{},{menu:d()(d()({},o.menu),{},{items:g}),overlayStyle:d()({},o.overlayStyle)}))]})},s=j},63953:function(C,u,_){var m=_(48305),d=_.n(m),P=_(67825),x=_.n(P),O=_(26068),i=_.n(O),y=_(58911),M=_(88602),v=_(99090),h=_(62910),k=_(82090),t=_(52676),j=["content"],s={success:{type:"success",icon:(0,t.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,t.jsx)(M.Z,{})},error:{type:"error",icon:(0,t.jsx)(v.Z,{})},info:{type:"info",icon:(0,t.jsx)(h.Z,{})}},e=function(n,l){var c,g;typeof l=="string"?g={content:l}:g=i()({},l);var D=g,p=D.content,E=x()(D,j);k.ZP.open(i()({type:n,content:p,icon:n==="loading"||(c=s[n])===null||c===void 0?void 0:c.icon},E))},o=function(n){var l=k.ZP.useMessage(n),c=d()(l,2),g=c[0],D=c[1],p=function(r,b){var A,I;typeof b=="string"?I={content:b,type:r}:I=i()(i()({},b),{},{type:r}),g[r](i()(i()({},I),{},{icon:(A=s[r])===null||A===void 0?void 0:A.icon}))},E=i()(i()({},g),{},{success:function(r){return p("success",r)},warning:function(r){return p("warning",r)},error:function(r){return p("error",r)},info:function(r){return p("info",r)},loading:function(r){return p("loading",r)}});return[E,D]};u.Z=i()(i()({},k.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:o})},12281:function(C,u,_){_.d(u,{JG:function(){return M},rb:function(){return v}});var m=_(26068),d=_.n(m),P=_(67825),x=_.n(P),O=_(75271),i=["maxWidth","maxHeight"];function y(){var s;return((s=window.g_config)===null||s===void 0?void 0:s.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var o=document.createElement("textarea");document.body.appendChild(o),o.style.position="fixed",o.style.clip="rect(0 0 0 0)",o.style.top="10px",o.value=e,o.select(),document.execCommand("copy",!0),document.body.removeChild(o)}},v=function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=o.maxWidth,n=o.maxHeight,l=x()(o,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},l)};function h(s){return React.isValidElement(s)}function k(s){var e=s||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var t=function(e){return e>=10?e:"0".concat(e)},j=function(e){if(e<60){var o=Math.ceil(e);return"0:".concat(t(o))}var a=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(t(a),":").concat(t(n))}},23922:function(C,u,_){_.r(u),_.d(u,{texts:function(){return m}});const m=[{value:`
import { FloatButton } from '@agentscope-ai/design'
`,paraId:0},{value:"The following are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
