"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[3958],{29572:function(y,u,_){_.r(u);var l=_(41570),d=_(12968),E=_(77815),P=_(35771),O=_(71705),i=_(64777),I=_(11851),M=_(78616),v=_(52990),k=_(74235),h=_(73031),o=_(30864),j=_(29370),r=_(87274),e=_(18282),s=_(75271),a=_(10258),n=_(52676);function c(){return(0,n.jsx)(r.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.Z,{title:"InputNumber",desc:"Input numeric values within a range through mouse or keyboard."}),(0,n.jsx)(r.Dl,{demo:{id:"src-components-common-components-input-number-demo-demo"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/InputNumber/demo/demo.tsx"}}),(0,n.jsx)(j.Z,{children:a.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"input-number-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#input-number-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Input Number Examples"]}),(0,n.jsx)("p",{children:a.texts[1].value})]}),(0,n.jsx)(r.Dl,{demo:{id:"src-components-common-components-input-number-demo-demo1"},previewerProps:{center:!0,title:"Three Sizes",filename:"src/components/commonComponents/InputNumber/demo/demo1.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/input-number/#api"})]})})})}u.default=c},38356:function(y,u,_){_.d(u,{Z:function(){return r}});var l=_(26068),d=_.n(l),E=_(60213),P=_(68278),O=_(44201),i=_(75271),I=_(53649),M=_.n(I),v=_(30764),k,h=(0,v.Z)(k||(k=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),o=_(52676),j=function(s){var a,n,c=(0,E.getCommonConfig)(),m=c.antPrefix,g=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var x;return((x=s.menu)===null||x===void 0?void 0:x.items)||[]}return s.menu.items.map(function(f){var t={},D=f.label;return D&&(t.label=(0,o.jsxs)("div",{className:"".concat(m,"-dropdown-check-wrapper"),children:[D,(0,o.jsx)("span",{className:"".concat(m,"-dropdown-check-icon"),children:(0,o.jsx)(P.Z,{})})]})),d()(d()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),b=h();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{}),(0,o.jsx)(O.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},r=j},39971:function(y,u,_){var l=_(48305),d=_.n(l),E=_(67825),P=_.n(E),O=_(26068),i=_.n(O),I=_(58911),M=_(88602),v=_(99090),k=_(62910),h=_(86212),o=_(52676),j=["content"],r={success:{type:"success",icon:(0,o.jsx)(I.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(M.Z,{})},error:{type:"error",icon:(0,o.jsx)(v.Z,{})},info:{type:"info",icon:(0,o.jsx)(k.Z,{})}},e=function(n,c){var m,g;typeof c=="string"?g={content:c}:g=i()({},c);var b=g,p=b.content,x=P()(b,j);h.ZP.open(i()({type:n,content:p,icon:n==="loading"||(m=r[n])===null||m===void 0?void 0:m.icon},x))},s=function(n){var c=h.ZP.useMessage(n),m=d()(c,2),g=m[0],b=m[1],p=function(t,D){var C,w;typeof D=="string"?w={content:D,type:t}:w=i()(i()({},D),{},{type:t}),g[t](i()(i()({},w),{},{icon:(C=r[t])===null||C===void 0?void 0:C.icon}))},x=i()(i()({},g),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[x,b]};u.Z=i()(i()({},h.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},95336:function(y,u,_){_.d(u,{JG:function(){return M},rb:function(){return v}});var l=_(26068),d=_.n(l),E=_(67825),P=_.n(E),O=_(75271),i=["maxWidth","maxHeight"];function I(){var r;return((r=window.g_config)===null||r===void 0?void 0:r.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,c=P()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},c)};function k(r){return React.isValidElement(r)}function h(r){var e=r||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var o=function(e){return e>=10?e:"0".concat(e)},j=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(o(s))}var a=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(o(a),":").concat(o(n))}},10258:function(y,u,_){_.r(u),_.d(u,{texts:function(){return l}});const l=[{value:"import { InputNumber } from '@agentscope-ai/design'",paraId:0},{value:"Below are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
