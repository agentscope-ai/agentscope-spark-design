"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[9077],{15773:function(y,u,_){_.r(u);var c=_(48661),d=_(28450),h=_(87276),x=_(83775),b=_(36337),i=_(14552),C=_(68879),M=_(15957),v=_(8958),P=_(98520),k=_(41395),r=_(79756),D=_(33779),o=_(21570),e=_(28060),s=_(75271),a=_(83399),n=_(52676);function l(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Z,{title:"Slider",desc:"A slider component for inputting values by sliding. Shows current value and selectable range."}),(0,n.jsx)(o.Dl,{demo:{id:"slider-demo-demo1"},previewerProps:{center:!0,title:"Basic Usage",filename:"src/components/commonComponents/Slider/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:a.texts[0].value}),(0,n.jsx)(o.Dl,{demo:{id:"slider-demo-demo2"},previewerProps:{center:!0,title:"Reverse",filename:"src/components/commonComponents/Slider/demo/demo2.tsx"}}),(0,n.jsx)(o.Dl,{demo:{id:"slider-demo-demo3"},previewerProps:{center:!0,title:"Range Selection",filename:"src/components/commonComponents/Slider/demo/demo3.tsx"}}),(0,n.jsx)(o.Dl,{demo:{id:"slider-demo-demo4"},previewerProps:{center:!0,title:"Slider with InputNumber",filename:"src/components/commonComponents/Slider/demo/demo4.tsx"}}),(0,n.jsx)(o.Dl,{demo:{id:"slider-demo-demo5"},previewerProps:{center:!0,title:"Slider with InputNumber:hide marks",filename:"src/components/commonComponents/Slider/demo/demo5.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/slider/#api"})]})})})}u.default=l},64925:function(y,u,_){_.d(u,{Z:function(){return o}});var c=_(26068),d=_.n(c),h=_(51886),x=_(71649),b=_(42478),i=_(75271),C=_(53649),M=_.n(C),v=_(75469),P,k=(0,v.Z)(P||(P=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),r=_(52676),D=function(s){var a,n,l=(0,h.getCommonConfig)(),m=l.antPrefix,g=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,r.jsxs)("div",{className:"".concat(m,"-dropdown-check-wrapper"),children:[O,(0,r.jsx)("span",{className:"".concat(m,"-dropdown-check-icon"),children:(0,r.jsx)(x.Z,{})})]})),d()(d()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=k();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},o=D},63953:function(y,u,_){var c=_(48305),d=_.n(c),h=_(67825),x=_.n(h),b=_(26068),i=_.n(b),C=_(58911),M=_(88602),v=_(99090),P=_(62910),k=_(82090),r=_(52676),D=["content"],o={success:{type:"success",icon:(0,r.jsx)(C.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(M.Z,{})},error:{type:"error",icon:(0,r.jsx)(v.Z,{})},info:{type:"info",icon:(0,r.jsx)(P.Z,{})}},e=function(n,l){var m,g;typeof l=="string"?g={content:l}:g=i()({},l);var j=g,p=j.content,E=x()(j,D);k.ZP.open(i()({type:n,content:p,icon:n==="loading"||(m=o[n])===null||m===void 0?void 0:m.icon},E))},s=function(n){var l=k.ZP.useMessage(n),m=d()(l,2),g=m[0],j=m[1],p=function(t,O){var A,I;typeof O=="string"?I={content:O,type:t}:I=i()(i()({},O),{},{type:t}),g[t](i()(i()({},I),{},{icon:(A=o[t])===null||A===void 0?void 0:A.icon}))},E=i()(i()({},g),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[E,j]};u.Z=i()(i()({},k.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},12281:function(y,u,_){_.d(u,{JG:function(){return M},rb:function(){return v}});var c=_(26068),d=_.n(c),h=_(67825),x=_.n(h),b=_(75271),i=["maxWidth","maxHeight"];function C(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,l=x()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},l)};function P(o){return React.isValidElement(o)}function k(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var r=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(r(s))}var a=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(r(a),":").concat(r(n))}},83399:function(y,u,_){_.r(u),_.d(u,{texts:function(){return c}});const c=[{value:"import { Slider } from '@agentscope-ai/design'",paraId:0}]}}]);
