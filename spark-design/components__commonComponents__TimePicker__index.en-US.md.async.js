"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7897],{50353:function(T,u,_){_.r(u);var m=_(38027),d=_(89196),E=_(36973),x=_(96709),j=_(12635),i=_(7771),y=_(53808),M=_(11003),v=_(29027),P=_(91998),h=_(23297),o=_(90706),D=_(81375),r=_(87204),e=_(31109),s=_(75271),a=_(72006),n=_(52676);function c(){return(0,n.jsx)(r.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Z,{title:"TimePicker",desc:"A control for inputting or selecting time."}),(0,n.jsx)(r.Dl,{demo:{id:"timepicker-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/TimePicker/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:a.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"timepicker-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#timepicker-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"TimePicker Examples"]}),(0,n.jsx)("p",{children:a.texts[1].value})]}),(0,n.jsx)(r.Dl,{demo:{id:"timepicker-demo-demo2"},previewerProps:{center:!0,title:"Select Time Range",filename:"src/components/commonComponents/TimePicker/demo/demo2.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/time-picker/#api"})]})})})}u.default=c},90088:function(T,u,_){_.d(u,{Z:function(){return r}});var m=_(26068),d=_.n(m),E=_(31209),x=_(71649),j=_(42478),i=_(75271),y=_(53649),M=_.n(y),v=_(88974),P,h=(0,v.Z)(P||(P=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),o=_(52676),D=function(s){var a,n,c=(0,E.getCommonConfig)(),l=c.antPrefix,g=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var k;return((k=s.menu)===null||k===void 0?void 0:k.items)||[]}return s.menu.items.map(function(f){var t={},b=f.label;return b&&(t.label=(0,o.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[b,(0,o.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,o.jsx)(x.Z,{})})]})),d()(d()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),O=h();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(O,{}),(0,o.jsx)(j.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},r=D},33185:function(T,u,_){var m=_(48305),d=_.n(m),E=_(67825),x=_.n(E),j=_(26068),i=_.n(j),y=_(58911),M=_(88602),v=_(99090),P=_(62910),h=_(82090),o=_(52676),D=["content"],r={success:{type:"success",icon:(0,o.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(M.Z,{})},error:{type:"error",icon:(0,o.jsx)(v.Z,{})},info:{type:"info",icon:(0,o.jsx)(P.Z,{})}},e=function(n,c){var l,g;typeof c=="string"?g={content:c}:g=i()({},c);var O=g,p=O.content,k=x()(O,D);h.ZP.open(i()({type:n,content:p,icon:n==="loading"||(l=r[n])===null||l===void 0?void 0:l.icon},k))},s=function(n){var c=h.ZP.useMessage(n),l=d()(c,2),g=l[0],O=l[1],p=function(t,b){var C,A;typeof b=="string"?A={content:b,type:t}:A=i()(i()({},b),{},{type:t}),g[t](i()(i()({},A),{},{icon:(C=r[t])===null||C===void 0?void 0:C.icon}))},k=i()(i()({},g),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[k,O]};u.Z=i()(i()({},h.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},4853:function(T,u,_){_.d(u,{JG:function(){return M},rb:function(){return v}});var m=_(26068),d=_.n(m),E=_(67825),x=_.n(E),j=_(75271),i=["maxWidth","maxHeight"];function y(){var r;return((r=window.g_config)===null||r===void 0?void 0:r.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,c=x()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},c)};function P(r){return React.isValidElement(r)}function h(r){var e=r||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var o=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(o(s))}var a=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(o(a),":").concat(o(n))}},72006:function(T,u,_){_.r(u),_.d(u,{texts:function(){return m}});const m=[{value:"import { TimePicker } from '@agentscope-ai/design'",paraId:0},{value:"Below are examples and variants of this TimePicker component",paraId:1,tocIndex:1}]}}]);
