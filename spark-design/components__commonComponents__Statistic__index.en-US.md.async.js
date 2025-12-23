"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[828],{90106:function(C,u,_){_.r(u);var m=_(48661),d=_(28450),P=_(87276),x=_(83775),b=_(36337),i=_(14552),y=_(68879),M=_(15957),v=_(8958),h=_(98520),k=_(41395),t=_(79756),j=_(33779),o=_(21570),e=_(28060),s=_(75271),a=_(17817),n=_(52676);function c(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{title:"Statistic",desc:"Display statistic number"}),(0,n.jsx)(o.Dl,{demo:{id:"statistic-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Statistic/demo/demo1.tsx"}}),(0,n.jsx)(j.Z,{children:a.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"statistic-example",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#statistic-example",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Statistic Example"]}),(0,n.jsx)("p",{children:a.texts[1].value})]}),(0,n.jsx)(o.Dl,{demo:{id:"statistic-demo-demo2"},previewerProps:{center:!0,title:"Add elements via prefix and suffix",filename:"src/components/commonComponents/Statistic/demo/demo2.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/statistic/#api"})]})})})}u.default=c},64925:function(C,u,_){_.d(u,{Z:function(){return o}});var m=_(26068),d=_.n(m),P=_(51886),x=_(71649),b=_(42478),i=_(75271),y=_(53649),M=_.n(y),v=_(75469),h,k=(0,v.Z)(h||(h=M()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),t=_(52676),j=function(s){var a,n,c=(0,P.getCommonConfig)(),l=c.antPrefix,g=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var E;return((E=s.menu)===null||E===void 0?void 0:E.items)||[]}return s.menu.items.map(function(f){var r={},O=f.label;return O&&(r.label=(0,t.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[O,(0,t.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,t.jsx)(x.Z,{})})]})),d()(d()({},f),r)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),D=k();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D,{}),(0,t.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},o=j},63953:function(C,u,_){var m=_(48305),d=_.n(m),P=_(67825),x=_.n(P),b=_(26068),i=_.n(b),y=_(58911),M=_(88602),v=_(99090),h=_(62910),k=_(82090),t=_(52676),j=["content"],o={success:{type:"success",icon:(0,t.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,t.jsx)(M.Z,{})},error:{type:"error",icon:(0,t.jsx)(v.Z,{})},info:{type:"info",icon:(0,t.jsx)(h.Z,{})}},e=function(n,c){var l,g;typeof c=="string"?g={content:c}:g=i()({},c);var D=g,p=D.content,E=x()(D,j);k.ZP.open(i()({type:n,content:p,icon:n==="loading"||(l=o[n])===null||l===void 0?void 0:l.icon},E))},s=function(n){var c=k.ZP.useMessage(n),l=d()(c,2),g=l[0],D=l[1],p=function(r,O){var A,I;typeof O=="string"?I={content:O,type:r}:I=i()(i()({},O),{},{type:r}),g[r](i()(i()({},I),{},{icon:(A=o[r])===null||A===void 0?void 0:A.icon}))},E=i()(i()({},g),{},{success:function(r){return p("success",r)},warning:function(r){return p("warning",r)},error:function(r){return p("error",r)},info:function(r){return p("info",r)},loading:function(r){return p("loading",r)}});return[E,D]};u.Z=i()(i()({},k.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},12281:function(C,u,_){_.d(u,{JG:function(){return M},rb:function(){return v}});var m=_(26068),d=_.n(m),P=_(67825),x=_.n(P),b=_(75271),i=["maxWidth","maxHeight"];function y(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,c=x()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},c)};function h(o){return React.isValidElement(o)}function k(o){var e=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var t=function(e){return e>=10?e:"0".concat(e)},j=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(t(s))}var a=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(t(a),":").concat(t(n))}},17817:function(C,u,_){_.r(u),_.d(u,{texts:function(){return m}});const m=[{value:"import { Statistic } from '@agentscope-ai/design'",paraId:0},{value:"The following are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
