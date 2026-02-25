"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[9077],{75428:function(w,u,_){_.r(u);var l=_(41570),d=_(12968),h=_(77815),x=_(35771),b=_(55454),i=_(64777),C=_(11851),D=_(78616),v=_(44616),k=_(51972),P=_(90628),r=_(95290),M=_(34766),o=_(51204),e=_(66404),s=_(75271),a=_(97490),n=_(52676);function c(){return(0,n.jsx)(o.DumiPage,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.Z,{title:"Slider",desc:"A slider component for inputting values by sliding. Shows current value and selectable range."}),(0,n.jsx)(o.DumiDemo,{demo:{id:"slider-demo-demo1"},previewerProps:{center:!0,title:"Basic Usage",filename:"src/components/commonComponents/Slider/demo/demo1.tsx"}}),(0,n.jsx)(M.Z,{children:a.texts[0].value}),(0,n.jsx)(o.DumiDemo,{demo:{id:"slider-demo-demo2"},previewerProps:{center:!0,title:"Reverse",filename:"src/components/commonComponents/Slider/demo/demo2.tsx"}}),(0,n.jsx)(o.DumiDemo,{demo:{id:"slider-demo-demo3"},previewerProps:{center:!0,title:"Range Selection",filename:"src/components/commonComponents/Slider/demo/demo3.tsx"}}),(0,n.jsx)(o.DumiDemo,{demo:{id:"slider-demo-demo4"},previewerProps:{center:!0,title:"Slider with InputNumber",filename:"src/components/commonComponents/Slider/demo/demo4.tsx"}}),(0,n.jsx)(o.DumiDemo,{demo:{id:"slider-demo-demo5"},previewerProps:{center:!0,title:"Slider with InputNumber:hide marks",filename:"src/components/commonComponents/Slider/demo/demo5.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/slider/#api"})]})})})}u.default=c},38356:function(w,u,_){_.d(u,{Z:function(){return o}});var l=_(26068),d=_.n(l),h=_(60213),x=_(68278),b=_(44201),i=_(75271),C=_(53649),D=_.n(C),v=_(30764),k,P=(0,v.Z)(k||(k=D()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),r=_(52676),M=function(s){var a,n,c=(0,h.getCommonConfig)(),p=c.antPrefix,g=(0,i.useMemo)(function(){var m;if(!((m=s.menu)!==null&&m!==void 0&&m.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,r.jsxs)("div",{className:"".concat(p,"-dropdown-check-wrapper"),children:[O,(0,r.jsx)("span",{className:"".concat(p,"-dropdown-check-icon"),children:(0,r.jsx)(x.Z,{})})]})),d()(d()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=P();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},o=M},39971:function(w,u,_){var l=_(48305),d=_.n(l),h=_(67825),x=_.n(h),b=_(26068),i=_.n(b),C=_(58911),D=_(88602),v=_(99090),k=_(62910),P=_(86212),r=_(52676),M=["content"],o={success:{type:"success",icon:(0,r.jsx)(C.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(D.Z,{})},error:{type:"error",icon:(0,r.jsx)(v.Z,{})},info:{type:"info",icon:(0,r.jsx)(k.Z,{})}},e=function(n,c){var p,g;typeof c=="string"?g={content:c}:g=i()({},c);var j=g,m=j.content,E=x()(j,M);P.ZP.open(i()({type:n,content:m,icon:n==="loading"||(p=o[n])===null||p===void 0?void 0:p.icon},E))},s=function(n){var c=P.ZP.useMessage(n),p=d()(c,2),g=p[0],j=p[1],m=function(t,O){var y,A;typeof O=="string"?A={content:O,type:t}:A=i()(i()({},O),{},{type:t}),g[t](i()(i()({},A),{},{icon:(y=o[t])===null||y===void 0?void 0:y.icon}))},E=i()(i()({},g),{},{success:function(t){return m("success",t)},warning:function(t){return m("warning",t)},error:function(t){return m("error",t)},info:function(t){return m("info",t)},loading:function(t){return m("loading",t)}});return[E,j]};u.Z=i()(i()({},P.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},95336:function(w,u,_){_.d(u,{JG:function(){return D},rb:function(){return v}});var l=_(26068),d=_.n(l),h=_(67825),x=_.n(h),b=_(75271),i=["maxWidth","maxHeight"];function C(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var D=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,c=x()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},c)};function k(o){return React.isValidElement(o)}function P(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var r=function(e){return e>=10?e:"0".concat(e)},M=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(r(s))}var a=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(r(a),":").concat(r(n))}},97490:function(w,u,_){_.r(u),_.d(u,{texts:function(){return l}});const l=[{value:"import { Slider } from '@agentscope-ai/design'",paraId:0}]}}]);
