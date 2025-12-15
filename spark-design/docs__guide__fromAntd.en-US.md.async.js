"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[8253],{56945:function(I,u,_){_.r(u);var m=_(38027),i=_(89196),P=_(36973),k=_(96709),b=_(12635),d=_(7771),y=_(53808),E=_(11003),x=_(29027),M=_(91998),v=_(23297),r=_(90706),j=_(81375),a=_(87204),e=_(31109),s=_(75271),o=_(93193),n=_(52676);function c(){return(0,n.jsx)(a.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"migrate-from-antd",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#migrate-from-antd",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Migrate from Antd"]}),(0,n.jsxs)("h2",{id:"-install",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#-install",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u{1F4E6} Install"]}),(0,n.jsx)(d.Z,{lang:"bash",children:o.texts[0].value}),(0,n.jsxs)("h2",{id:"-usage",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#-usage",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u{1F528} Usage"]}),(0,n.jsx)("p",{children:o.texts[1].value})]}),(0,n.jsx)(a.Dl,{demo:{id:"docs-guide-from-antd-demo-en-us-0"},previewerProps:{}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsx)("p",{children:o.texts[2].value})}),(0,n.jsx)(a.Dl,{demo:{id:"docs-guide-from-antd-demo-en-us-1"},previewerProps:{}})]})})})}u.default=c},90088:function(I,u,_){_.d(u,{Z:function(){return a}});var m=_(26068),i=_.n(m),P=_(31209),k=_(71649),b=_(42478),d=_(75271),y=_(53649),E=_.n(y),x=_(88974),M,v=(0,x.Z)(M||(M=E()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),r=_(52676),j=function(s){var o,n,c=(0,P.getCommonConfig)(),p=c.antPrefix,g=(0,d.useMemo)(function(){var l;if(!((l=s.menu)!==null&&l!==void 0&&l.selectable)||!s.menu){var h;return((h=s.menu)===null||h===void 0?void 0:h.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,r.jsxs)("div",{className:"".concat(p,"-dropdown-check-wrapper"),children:[O,(0,r.jsx)("span",{className:"".concat(p,"-dropdown-check-icon"),children:(0,r.jsx)(k.Z,{})})]})),i()(i()({},f),t)})},[(o=s.menu)===null||o===void 0?void 0:o.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),D=v();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D,{}),(0,r.jsx)(b.Z,i()(i()({},s),{},{menu:i()(i()({},s.menu),{},{items:g}),overlayStyle:i()({},s.overlayStyle)}))]})},a=j},33185:function(I,u,_){var m=_(48305),i=_.n(m),P=_(67825),k=_.n(P),b=_(26068),d=_.n(b),y=_(58911),E=_(88602),x=_(99090),M=_(62910),v=_(82090),r=_(52676),j=["content"],a={success:{type:"success",icon:(0,r.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(E.Z,{})},error:{type:"error",icon:(0,r.jsx)(x.Z,{})},info:{type:"info",icon:(0,r.jsx)(M.Z,{})}},e=function(n,c){var p,g;typeof c=="string"?g={content:c}:g=d()({},c);var D=g,l=D.content,h=k()(D,j);v.ZP.open(d()({type:n,content:l,icon:n==="loading"||(p=a[n])===null||p===void 0?void 0:p.icon},h))},s=function(n){var c=v.ZP.useMessage(n),p=i()(c,2),g=p[0],D=p[1],l=function(t,O){var A,C;typeof O=="string"?C={content:O,type:t}:C=d()(d()({},O),{},{type:t}),g[t](d()(d()({},C),{},{icon:(A=a[t])===null||A===void 0?void 0:A.icon}))},h=d()(d()({},g),{},{success:function(t){return l("success",t)},warning:function(t){return l("warning",t)},error:function(t){return l("error",t)},info:function(t){return l("info",t)},loading:function(t){return l("loading",t)}});return[h,D]};u.Z=d()(d()({},v.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},4853:function(I,u,_){_.d(u,{JG:function(){return E},rb:function(){return x}});var m=_(26068),i=_.n(m),P=_(67825),k=_.n(P),b=_(75271),d=["maxWidth","maxHeight"];function y(){var a;return((a=window.g_config)===null||a===void 0?void 0:a.isIntl)||!1}var E=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=s.maxWidth,n=s.maxHeight,c=k()(s,d);return i()({overlayInnerStyle:{maxWidth:o||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},c)};function M(a){return React.isValidElement(a)}function v(a){var e=a||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var r=function(e){return e>=10?e:"0".concat(e)},j=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(r(s))}var o=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(r(o),":").concat(r(n))}},93193:function(I,u,_){_.r(u),_.d(u,{texts:function(){return m}});const m=[{value:`$ npm install @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1},{value:"All the eponymous components exported from @agentscope-ai/design are compatible with their counterparts from antd in terms of API, which means you don't need to learn how to use them. If you want to make full use of the new features of Alibaba Cloud Spark Design, you can try those components instead of those from antd.",paraId:1,tocIndex:2},{value:"If you want to keep using components from antd, that's ok. All you need to do is replacing the ConfigProvider from antd with the one from @agentscope-ai/design.",paraId:2}]}}]);
