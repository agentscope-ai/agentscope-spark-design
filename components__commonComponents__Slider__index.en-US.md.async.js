"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[9077],{51118:function(C,u,_){_.r(u);var p=_(38027),i=_(89196),k=_(36973),x=_(96709),y=_(12635),d=_(7771),j=_(53808),M=_(11003),v=_(29027),P=_(91998),h=_(23297),r=_(90706),D=_(81375),o=_(87204),e=_(31109),s=_(75271),a=_(80774),n=_(52676);function l(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Z,{title:"Slider",desc:"A slider component for inputting values by sliding. Shows current value and selectable range."}),(0,n.jsx)(o.Dl,{demo:{id:"slider-demo-demo1"},previewerProps:{center:!0,title:"Basic Usage",filename:"src/components/commonComponents/Slider/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:a.texts[0].value}),(0,n.jsx)(o.Dl,{demo:{id:"slider-demo-demo2"},previewerProps:{center:!0,title:"Reverse",filename:"src/components/commonComponents/Slider/demo/demo2.tsx"}}),(0,n.jsx)(o.Dl,{demo:{id:"slider-demo-demo3"},previewerProps:{center:!0,title:"Range Selection",filename:"src/components/commonComponents/Slider/demo/demo3.tsx"}}),(0,n.jsx)(o.Dl,{demo:{id:"slider-demo-demo4"},previewerProps:{center:!0,title:"Slider with InputNumber",filename:"src/components/commonComponents/Slider/demo/demo4.tsx"}}),(0,n.jsx)(o.Dl,{demo:{id:"slider-demo-demo5"},previewerProps:{center:!0,title:"Slider with InputNumber:hide marks",filename:"src/components/commonComponents/Slider/demo/demo5.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/slider/#api"})]})})})}u.default=l},90088:function(C,u,_){_.d(u,{Z:function(){return o}});var p=_(26068),i=_.n(p),k=_(31209),x=_(71649),y=_(42478),d=_(75271),j=_(53649),M=_.n(j),v=_(88974),P,h=(0,v.Z)(P||(P=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),r=_(52676),D=function(s){var a,n,l=(0,k.getCommonConfig)(),m=l.antPrefix,g=(0,d.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var t={},b=f.label;return b&&(t.label=(0,r.jsxs)("div",{className:"".concat(m,"-dropdown-check-wrapper"),children:[b,(0,r.jsx)("span",{className:"".concat(m,"-dropdown-check-icon"),children:(0,r.jsx)(x.Z,{})})]})),i()(i()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),O=h();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{}),(0,r.jsx)(y.Z,i()(i()({},s),{},{menu:i()(i()({},s.menu),{},{items:g}),overlayStyle:i()({},s.overlayStyle)}))]})},o=D},33185:function(C,u,_){var p=_(48305),i=_.n(p),k=_(67825),x=_.n(k),y=_(26068),d=_.n(y),j=_(58911),M=_(88602),v=_(99090),P=_(62910),h=_(82090),r=_(52676),D=["content"],o={success:{type:"success",icon:(0,r.jsx)(j.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(M.Z,{})},error:{type:"error",icon:(0,r.jsx)(v.Z,{})},info:{type:"info",icon:(0,r.jsx)(P.Z,{})}},e=function(n,l){var m,g;typeof l=="string"?g={content:l}:g=d()({},l);var O=g,c=O.content,E=x()(O,D);h.ZP.open(d()({type:n,content:c,icon:n==="loading"||(m=o[n])===null||m===void 0?void 0:m.icon},E))},s=function(n){var l=h.ZP.useMessage(n),m=i()(l,2),g=m[0],O=m[1],c=function(t,b){var A,I;typeof b=="string"?I={content:b,type:t}:I=d()(d()({},b),{},{type:t}),g[t](d()(d()({},I),{},{icon:(A=o[t])===null||A===void 0?void 0:A.icon}))},E=d()(d()({},g),{},{success:function(t){return c("success",t)},warning:function(t){return c("warning",t)},error:function(t){return c("error",t)},info:function(t){return c("info",t)},loading:function(t){return c("loading",t)}});return[E,O]};u.Z=d()(d()({},h.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},4853:function(C,u,_){_.d(u,{JG:function(){return M},rb:function(){return v}});var p=_(26068),i=_.n(p),k=_(67825),x=_.n(k),y=_(75271),d=["maxWidth","maxHeight"];function j(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,l=x()(s,d);return i()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},l)};function P(o){return React.isValidElement(o)}function h(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var r=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(r(s))}var a=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(r(a),":").concat(r(n))}},80774:function(C,u,_){_.r(u),_.d(u,{texts:function(){return p}});const p=[{value:"import { Slider } from '@agentscope-ai/design'",paraId:0}]}}]);
