"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4722],{31331:function(C,u,e){e.r(u);var m=e(38027),i=e(89196),E=e(36973),P=e(96709),b=e(12635),d=e(7771),y=e(53808),k=e(11003),x=e(29027),M=e(91998),v=e(23297),o=e(90706),j=e(81375),r=e(87204),_=e(31109),s=e(75271),t=e(18165),n=e(52676);function c(){return(0,n.jsx)(r.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"\u4F7F\u7528",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]}),(0,n.jsx)("p",{children:t.texts[0].value})]}),(0,n.jsx)(r.Dl,{demo:{id:"docs-guide-iconfont-demo-zh-cn-0"},previewerProps:{}})]})})})}u.default=c},90088:function(C,u,e){e.d(u,{Z:function(){return r}});var m=e(26068),i=e.n(m),E=e(31209),P=e(71649),b=e(42478),d=e(75271),y=e(53649),k=e.n(y),x=e(88974),M,v=(0,x.Z)(M||(M=k()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),o=e(52676),j=function(s){var t,n,c=(0,E.getCommonConfig)(),l=c.antPrefix,g=(0,d.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var h;return((h=s.menu)===null||h===void 0?void 0:h.items)||[]}return s.menu.items.map(function(f){var a={},O=f.label;return O&&(a.label=(0,o.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[O,(0,o.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,o.jsx)(P.Z,{})})]})),i()(i()({},f),a)})},[(t=s.menu)===null||t===void 0?void 0:t.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),D=v();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsx)(b.Z,i()(i()({},s),{},{menu:i()(i()({},s.menu),{},{items:g}),overlayStyle:i()({},s.overlayStyle)}))]})},r=j},33185:function(C,u,e){var m=e(48305),i=e.n(m),E=e(67825),P=e.n(E),b=e(26068),d=e.n(b),y=e(58911),k=e(88602),x=e(99090),M=e(62910),v=e(82090),o=e(52676),j=["content"],r={success:{type:"success",icon:(0,o.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(k.Z,{})},error:{type:"error",icon:(0,o.jsx)(x.Z,{})},info:{type:"info",icon:(0,o.jsx)(M.Z,{})}},_=function(n,c){var l,g;typeof c=="string"?g={content:c}:g=d()({},c);var D=g,p=D.content,h=P()(D,j);v.ZP.open(d()({type:n,content:p,icon:n==="loading"||(l=r[n])===null||l===void 0?void 0:l.icon},h))},s=function(n){var c=v.ZP.useMessage(n),l=i()(c,2),g=l[0],D=l[1],p=function(a,O){var A,T;typeof O=="string"?T={content:O,type:a}:T=d()(d()({},O),{},{type:a}),g[a](d()(d()({},T),{},{icon:(A=r[a])===null||A===void 0?void 0:A.icon}))},h=d()(d()({},g),{},{success:function(a){return p("success",a)},warning:function(a){return p("warning",a)},error:function(a){return p("error",a)},info:function(a){return p("info",a)},loading:function(a){return p("loading",a)}});return[h,D]};u.Z=d()(d()({},v.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},4853:function(C,u,e){e.d(u,{JG:function(){return k},rb:function(){return x}});var m=e(26068),i=e.n(m),E=e(67825),P=e.n(E),b=e(75271),d=["maxWidth","maxHeight"];function y(){var r;return((r=window.g_config)===null||r===void 0?void 0:r.isIntl)||!1}var k=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.maxWidth,n=s.maxHeight,c=P()(s,d);return i()({overlayInnerStyle:{maxWidth:t||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},c)};function M(r){return React.isValidElement(r)}function v(r){var _=r||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var o=function(_){return _>=10?_:"0".concat(_)},j=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(o(s))}var t=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(o(t),":").concat(o(n))}},18165:function(C,u,e){e.r(u),e.d(u,{texts:function(){return m}});const m=[{value:"\u5982\u679C\u60A8\u6709\u81EA\u5DF1\u7684 iconfont \u9879\u76EE\uFF0C\u53EF\u4EE5\u5C06\u60A8\u7684\u56FE\u6807\u96C6\u6210\u5230 Spark Design \u4E2D\uFF0C\u5E76\u901A\u8FC7\u7B80\u5355\u7684\u7B26\u53F7\u540D\u79F0\u8BBF\u95EE\u60A8\u7684\u56FE\u6807\u3002",paraId:0,tocIndex:0}]}}]);
