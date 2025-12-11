"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[8253],{56945:function(U,l,_){_.r(l);var m=_(38027),d=_(89196),P=_(36973),E=_(96709),O=_(12635),r=_(7771),y=_(53808),x=_(11003),b=_(29027),M=_(91998),v=_(23297),o=_(90706),j=_(81375),s=_(87204),e=_(31109),a=_(75271),i=_(93193),n=_(52676);function u(){return(0,n.jsx)(s.dY,{children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"migrate-from-antd",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#migrate-from-antd",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Migrate from Antd"]}),(0,n.jsxs)("h2",{id:"-install",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#-install",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u{1F4E6} Install"]}),(0,n.jsx)(r.Z,{lang:"bash",children:i.texts[0].value}),(0,n.jsxs)("h2",{id:"-usage",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#-usage",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u{1F528} Usage"]}),(0,n.jsx)("p",{children:i.texts[1].value})]}),(0,n.jsx)(s.Dl,{demo:{id:"docs-guide-from-antd-demo-en-us-0"},previewerProps:{}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsx)("p",{children:i.texts[2].value})}),(0,n.jsx)(s.Dl,{demo:{id:"docs-guide-from-antd-demo-en-us-1"},previewerProps:{}})]})})})}l.default=u},90088:function(U,l,_){_.d(l,{Z:function(){return s}});var m=_(26068),d=_.n(m),P=_(31209),E=_(71649),O=_(42478),r=_(75271),y=_(53649),x=_.n(y),b=_(88974),M,v=(0,b.Z)(M||(M=x()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),o=_(52676),j=function(a){var i,n,u=(0,P.getCommonConfig)(),g=u.antPrefix,p=(0,r.useMemo)(function(){var c;if(!((c=a.menu)!==null&&c!==void 0&&c.selectable)||!a.menu){var h;return((h=a.menu)===null||h===void 0?void 0:h.items)||[]}return a.menu.items.map(function(f){var t={},C=f.label;return C&&(t.label=(0,o.jsxs)("div",{className:"".concat(g,"-dropdown-check-wrapper"),children:[C,(0,o.jsx)("span",{className:"".concat(g,"-dropdown-check-icon"),children:(0,o.jsx)(E.Z,{})})]})),d()(d()({},f),t)})},[(i=a.menu)===null||i===void 0?void 0:i.items,(n=a.menu)===null||n===void 0?void 0:n.selectable]),D=v();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsx)(O.Z,d()(d()({},a),{},{menu:d()(d()({},a.menu),{},{items:p}),overlayStyle:d()({},a.overlayStyle)}))]})},s=j},33185:function(U,l,_){var m=_(48305),d=_.n(m),P=_(67825),E=_.n(P),O=_(26068),r=_.n(O),y=_(58911),x=_(88602),b=_(99090),M=_(62910),v=_(82090),o=_(52676),j=["content"],s={success:{type:"success",icon:(0,o.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(x.Z,{})},error:{type:"error",icon:(0,o.jsx)(b.Z,{})},info:{type:"info",icon:(0,o.jsx)(M.Z,{})}},e=function(n,u){var g,p;typeof u=="string"?p={content:u}:p=r()({},u);var D=p,c=D.content,h=E()(D,j);v.ZP.open(r()({type:n,content:c,icon:n==="loading"||(g=s[n])===null||g===void 0?void 0:g.icon},h))},a=function(n){var u=v.ZP.useMessage(n),g=d()(u,2),p=g[0],D=g[1],c=function(t,C){var k,I;typeof C=="string"?I={content:C,type:t}:I=r()(r()({},C),{},{type:t}),p[t](r()(r()({},I),{},{icon:(k=s[t])===null||k===void 0?void 0:k.icon}))},h=r()(r()({},p),{},{success:function(t){return c("success",t)},warning:function(t){return c("warning",t)},error:function(t){return c("error",t)},info:function(t){return c("info",t)},loading:function(t){return c("loading",t)}});return[h,D]};l.Z=r()(r()({},v.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:a})},4853:function(U,l,_){_.d(l,{JG:function(){return x},rb:function(){return b}});var m=_(26068),d=_.n(m),P=_(67825),E=_.n(P),O=_(75271),r=["maxWidth","maxHeight"];function y(){var s;return((s=window.g_config)===null||s===void 0?void 0:s.isIntl)||!1}var x=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var a=document.createElement("textarea");document.body.appendChild(a),a.style.position="fixed",a.style.clip="rect(0 0 0 0)",a.style.top="10px",a.value=e,a.select(),document.execCommand("copy",!0),document.body.removeChild(a)}},b=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.maxWidth,n=a.maxHeight,u=E()(a,r);return d()({overlayInnerStyle:{maxWidth:i||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},u)};function M(s){return React.isValidElement(s)}function v(s){var e=s||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var o=function(e){return e>=10?e:"0".concat(e)},j=function(e){if(e<60){var a=Math.ceil(e);return"0:".concat(o(a))}var i=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(o(i),":").concat(o(n))}},93193:function(U,l,_){_.r(l),_.d(l,{texts:function(){return m}});const m=[{value:`$ npm install @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1},{value:"All the eponymous components exported from @agentscope-ai/design are compatible with their counterparts from antd in terms of API, which means you don't need to learn how to use them. If you want to make full use of the new features of Alibaba Cloud Spark Design, you can try those components instead of those from antd.",paraId:1,tocIndex:2},{value:"If you want to keep using components from antd, that's ok. All you need to do is replacing the ConfigProvider from antd with the one from @agentscope-ai/design.",paraId:2}]}}]);
