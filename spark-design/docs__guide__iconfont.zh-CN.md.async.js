"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4722],{13883:function(C,u,e){e.r(u);var g=e(41570),d=e(12968),E=e(77815),P=e(35771),j=e(71705),i=e(64777),b=e(11851),h=e(78616),x=e(52990),M=e(74235),v=e(73031),o=e(30864),y=e(29370),r=e(87274),_=e(18282),s=e(75271),t=e(85646),n=e(52676);function c(){return(0,n.jsx)(r.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"\u4F7F\u7528",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]}),(0,n.jsx)("p",{children:t.texts[0].value})]}),(0,n.jsx)(r.Dl,{demo:{id:"docs-guide-iconfont-demo-zh-cn-0"},previewerProps:{}})]})})})}u.default=c},38356:function(C,u,e){e.d(u,{Z:function(){return r}});var g=e(26068),d=e.n(g),E=e(60213),P=e(68278),j=e(44201),i=e(75271),b=e(53649),h=e.n(b),x=e(30764),M,v=(0,x.Z)(M||(M=h()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),o=e(52676),y=function(s){var t,n,c=(0,E.getCommonConfig)(),l=c.antPrefix,m=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var k;return((k=s.menu)===null||k===void 0?void 0:k.items)||[]}return s.menu.items.map(function(f){var a={},O=f.label;return O&&(a.label=(0,o.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[O,(0,o.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,o.jsx)(P.Z,{})})]})),d()(d()({},f),a)})},[(t=s.menu)===null||t===void 0?void 0:t.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),D=v();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsx)(j.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:m}),overlayStyle:d()({},s.overlayStyle)}))]})},r=y},39971:function(C,u,e){var g=e(48305),d=e.n(g),E=e(67825),P=e.n(E),j=e(26068),i=e.n(j),b=e(58911),h=e(88602),x=e(99090),M=e(62910),v=e(86212),o=e(52676),y=["content"],r={success:{type:"success",icon:(0,o.jsx)(b.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(h.Z,{})},error:{type:"error",icon:(0,o.jsx)(x.Z,{})},info:{type:"info",icon:(0,o.jsx)(M.Z,{})}},_=function(n,c){var l,m;typeof c=="string"?m={content:c}:m=i()({},c);var D=m,p=D.content,k=P()(D,y);v.ZP.open(i()({type:n,content:p,icon:n==="loading"||(l=r[n])===null||l===void 0?void 0:l.icon},k))},s=function(n){var c=v.ZP.useMessage(n),l=d()(c,2),m=l[0],D=l[1],p=function(a,O){var A,T;typeof O=="string"?T={content:O,type:a}:T=i()(i()({},O),{},{type:a}),m[a](i()(i()({},T),{},{icon:(A=r[a])===null||A===void 0?void 0:A.icon}))},k=i()(i()({},m),{},{success:function(a){return p("success",a)},warning:function(a){return p("warning",a)},error:function(a){return p("error",a)},info:function(a){return p("info",a)},loading:function(a){return p("loading",a)}});return[k,D]};u.Z=i()(i()({},v.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},95336:function(C,u,e){e.d(u,{JG:function(){return h},rb:function(){return x}});var g=e(26068),d=e.n(g),E=e(67825),P=e.n(E),j=e(75271),i=["maxWidth","maxHeight"];function b(){var r;return((r=window.g_config)===null||r===void 0?void 0:r.isIntl)||!1}var h=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.maxWidth,n=s.maxHeight,c=P()(s,i);return d()({overlayInnerStyle:{maxWidth:t||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},c)};function M(r){return React.isValidElement(r)}function v(r){var _=r||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var o=function(_){return _>=10?_:"0".concat(_)},y=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(o(s))}var t=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(o(t),":").concat(o(n))}},85646:function(C,u,e){e.r(u),e.d(u,{texts:function(){return g}});const g=[{value:"\u5982\u679C\u60A8\u6709\u81EA\u5DF1\u7684 iconfont \u9879\u76EE\uFF0C\u53EF\u4EE5\u5C06\u60A8\u7684\u56FE\u6807\u96C6\u6210\u5230 Spark Design \u4E2D\uFF0C\u5E76\u901A\u8FC7\u7B80\u5355\u7684\u7B26\u53F7\u540D\u79F0\u8BBF\u95EE\u60A8\u7684\u56FE\u6807\u3002",paraId:0,tocIndex:0}]}}]);
