"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[8253],{61365:function(w,u,_){_.r(u);var m=_(41570),d=_(12968),k=_(77815),P=_(35771),O=_(55454),i=_(64777),b=_(11851),x=_(78616),E=_(44616),M=_(51972),v=_(90628),r=_(95290),y=_(34766),a=_(51204),e=_(66404),s=_(75271),o=_(34856),n=_(52676);function c(){return(0,n.jsx)(a.DumiPage,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"migrate-from-antd",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#migrate-from-antd",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Migrate from Antd"]}),(0,n.jsxs)("h2",{id:"-install",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#-install",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u{1F4E6} Install"]}),(0,n.jsx)(i.Z,{lang:"bash",children:o.texts[0].value}),(0,n.jsxs)("h2",{id:"-usage",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#-usage",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u{1F528} Usage"]}),(0,n.jsx)("p",{children:o.texts[1].value})]}),(0,n.jsx)(a.DumiDemo,{demo:{id:"docs-guide-from-antd-demo-en-us-0"},previewerProps:{}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsx)("p",{children:o.texts[2].value})}),(0,n.jsx)(a.DumiDemo,{demo:{id:"docs-guide-from-antd-demo-en-us-1"},previewerProps:{}})]})})})}u.default=c},38356:function(w,u,_){_.d(u,{Z:function(){return a}});var m=_(26068),d=_.n(m),k=_(60213),P=_(68278),O=_(44201),i=_(75271),b=_(53649),x=_.n(b),E=_(30764),M,v=(0,E.Z)(M||(M=x()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),r=_(52676),y=function(s){var o,n,c=(0,k.getCommonConfig)(),l=c.antPrefix,g=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var h;return((h=s.menu)===null||h===void 0?void 0:h.items)||[]}return s.menu.items.map(function(f){var t={},j=f.label;return j&&(t.label=(0,r.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[j,(0,r.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,r.jsx)(P.Z,{})})]})),d()(d()({},f),t)})},[(o=s.menu)===null||o===void 0?void 0:o.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),D=v();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D,{}),(0,r.jsx)(O.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},a=y},39971:function(w,u,_){var m=_(48305),d=_.n(m),k=_(67825),P=_.n(k),O=_(26068),i=_.n(O),b=_(58911),x=_(88602),E=_(99090),M=_(62910),v=_(86212),r=_(52676),y=["content"],a={success:{type:"success",icon:(0,r.jsx)(b.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(x.Z,{})},error:{type:"error",icon:(0,r.jsx)(E.Z,{})},info:{type:"info",icon:(0,r.jsx)(M.Z,{})}},e=function(n,c){var l,g;typeof c=="string"?g={content:c}:g=i()({},c);var D=g,p=D.content,h=P()(D,y);v.ZP.open(i()({type:n,content:p,icon:n==="loading"||(l=a[n])===null||l===void 0?void 0:l.icon},h))},s=function(n){var c=v.ZP.useMessage(n),l=d()(c,2),g=l[0],D=l[1],p=function(t,j){var I,A;typeof j=="string"?A={content:j,type:t}:A=i()(i()({},j),{},{type:t}),g[t](i()(i()({},A),{},{icon:(I=a[t])===null||I===void 0?void 0:I.icon}))},h=i()(i()({},g),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[h,D]};u.Z=i()(i()({},v.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:s})},95336:function(w,u,_){_.d(u,{JG:function(){return x},rb:function(){return E}});var m=_(26068),d=_.n(m),k=_(67825),P=_.n(k),O=_(75271),i=["maxWidth","maxHeight"];function b(){var a;return((a=window.g_config)===null||a===void 0?void 0:a.isIntl)||!1}var x=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=e,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},E=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=s.maxWidth,n=s.maxHeight,c=P()(s,i);return d()({overlayInnerStyle:{maxWidth:o||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},c)};function M(a){return React.isValidElement(a)}function v(a){var e=a||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var r=function(e){return e>=10?e:"0".concat(e)},y=function(e){if(e<60){var s=Math.ceil(e);return"0:".concat(r(s))}var o=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(r(o),":").concat(r(n))}},34856:function(w,u,_){_.r(u),_.d(u,{texts:function(){return m}});const m=[{value:`$ npm install @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1},{value:"All the eponymous components exported from @agentscope-ai/design are compatible with their counterparts from antd in terms of API, which means you don't need to learn how to use them. If you want to make full use of the new features of Alibaba Cloud Spark Design, you can try those components instead of those from antd.",paraId:1,tocIndex:2},{value:"If you want to keep using components from antd, that's ok. All you need to do is replacing the ConfigProvider from antd with the one from @agentscope-ai/design.",paraId:2}]}}]);
