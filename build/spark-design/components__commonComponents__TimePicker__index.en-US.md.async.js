"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7897],{9056:function(C,c,_){_.r(c);var l=_(41570),d=_(12968),E=_(77815),h=_(35771),b=_(55454),i=_(64777),T=_(11851),M=_(78616),v=_(44616),k=_(51972),P=_(90628),o=_(95290),D=_(34766),r=_(51204),e=_(66404),s=_(75271),a=_(38681),n=_(52676);function u(){return(0,n.jsx)(r.DumiPage,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.Z,{title:"TimePicker",desc:"A control for inputting or selecting time."}),(0,n.jsx)(r.DumiDemo,{demo:{id:"timepicker-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/TimePicker/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:a.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"timepicker-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#timepicker-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"TimePicker Examples"]}),(0,n.jsx)("p",{children:a.texts[1].value})]}),(0,n.jsx)(r.DumiDemo,{demo:{id:"timepicker-demo-demo2"},previewerProps:{center:!0,title:"Select Time Range",filename:"src/components/commonComponents/TimePicker/demo/demo2.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/time-picker/#api"})]})})})}c.default=u},38356:function(C,c,_){_.d(c,{Z:function(){return r}});var l=_(26068),d=_.n(l),E=_(60213),h=_(68278),b=_(44201),i=_(75271),T=_(53649),M=_.n(T),v=_(30764),k,P=(0,v.Z)(k||(k=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),o=_(52676),D=function(s){var a,n,u=(0,E.getCommonConfig)(),m=u.antPrefix,g=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var x;return((x=s.menu)===null||x===void 0?void 0:x.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,o.jsxs)("div",{className:"".concat(m,"-dropdown-check-wrapper"),children:[O,(0,o.jsx)("span",{className:"".concat(m,"-dropdown-check-icon"),children:(0,o.jsx)(h.Z,{})})]})),d()(d()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=P();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{}),(0,o.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},r=D},39971:function(C,c,_){var l=_(48305),d=_.n(l),E=_(67825),h=_.n(E),b=_(26068),i=_.n(b),T=_(58911),M=_(88602),v=_(99090),k=_(62910),P=_(86212),o=_(52676),D=["content"],r={success:{type:"success",icon:(0,o.jsx)(T.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(M.Z,{})},error:{type:"error",icon:(0,o.jsx)(v.Z,{})},info:{type:"info",icon:(0,o.jsx)(k.Z,{})}},e=function(n,u){var m,g;typeof u=="string"?g={content:u}:g=i()({},u);var j=g,p=j.content,x=h()(j,D);P.ZP.open(i()({type:n,content:p,icon:n==="loading"||(m=r[n])===null||m===void 0?void 0:m.icon},x))},s=function(n){var u=P.ZP.useMessage(n),m=d()(u,2),g=m[0],j=m[1],p=function(t,O){var y,A;typeof O=="string"?A={content:O,type:t}:A=i()(i()({},O),{},{type:t}),g[t](i()(i()({},A),{},{icon:(y=r[t])===null||y===void 0?void 0:y.icon}))},x=i()(i()({},g),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[x,j]};c.Z=i()(i()({},P.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},95336:function(C,c,_){_.d(c,{JG:function(){return M},rb:function(){return v}});var l=_(26068),d=_.n(l),E=_(67825),h=_.n(E),b=_(75271),i=["maxWidth","maxHeight"];function T(){var r;return((r=window.g_config)===null||r===void 0?void 0:r.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,u=h()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},u)};function k(r){return React.isValidElement(r)}function P(r){var e=r||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var o=function(e){return e>=10?e:"0".concat(e)},D=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(o(s))}var a=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(o(a),":").concat(o(n))}},38681:function(C,c,_){_.r(c),_.d(c,{texts:function(){return l}});const l=[{value:"import { TimePicker } from '@agentscope-ai/design'",paraId:0},{value:"Below are examples and variants of this TimePicker component",paraId:1,tocIndex:1}]}}]);
