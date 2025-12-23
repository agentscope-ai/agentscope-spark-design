"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4722],{84238:function(C,u,e){e.r(u);var g=e(48661),d=e(28450),E=e(87276),P=e(83775),j=e(36337),i=e(14552),b=e(68879),h=e(15957),x=e(8958),M=e(98520),v=e(41395),r=e(79756),y=e(33779),o=e(21570),_=e(28060),s=e(75271),t=e(74684),n=e(52676);function p(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"\u4F7F\u7528",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]}),(0,n.jsx)("p",{children:t.texts[0].value})]}),(0,n.jsx)(o.Dl,{demo:{id:"docs-guide-iconfont-demo-zh-cn-0"},previewerProps:{}})]})})})}u.default=p},64925:function(C,u,e){e.d(u,{Z:function(){return o}});var g=e(26068),d=e.n(g),E=e(51886),P=e(71649),j=e(42478),i=e(75271),b=e(53649),h=e.n(b),x=e(75469),M,v=(0,x.Z)(M||(M=h()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),r=e(52676),y=function(s){var t,n,p=(0,E.getCommonConfig)(),c=p.antPrefix,m=(0,i.useMemo)(function(){var l;if(!((l=s.menu)!==null&&l!==void 0&&l.selectable)||!s.menu){var k;return((k=s.menu)===null||k===void 0?void 0:k.items)||[]}return s.menu.items.map(function(f){var a={},O=f.label;return O&&(a.label=(0,r.jsxs)("div",{className:"".concat(c,"-dropdown-check-wrapper"),children:[O,(0,r.jsx)("span",{className:"".concat(c,"-dropdown-check-icon"),children:(0,r.jsx)(P.Z,{})})]})),d()(d()({},f),a)})},[(t=s.menu)===null||t===void 0?void 0:t.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),D=v();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D,{}),(0,r.jsx)(j.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:m}),overlayStyle:d()({},s.overlayStyle)}))]})},o=y},63953:function(C,u,e){var g=e(48305),d=e.n(g),E=e(67825),P=e.n(E),j=e(26068),i=e.n(j),b=e(58911),h=e(88602),x=e(99090),M=e(62910),v=e(82090),r=e(52676),y=["content"],o={success:{type:"success",icon:(0,r.jsx)(b.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(h.Z,{})},error:{type:"error",icon:(0,r.jsx)(x.Z,{})},info:{type:"info",icon:(0,r.jsx)(M.Z,{})}},_=function(n,p){var c,m;typeof p=="string"?m={content:p}:m=i()({},p);var D=m,l=D.content,k=P()(D,y);v.ZP.open(i()({type:n,content:l,icon:n==="loading"||(c=o[n])===null||c===void 0?void 0:c.icon},k))},s=function(n){var p=v.ZP.useMessage(n),c=d()(p,2),m=c[0],D=c[1],l=function(a,O){var A,T;typeof O=="string"?T={content:O,type:a}:T=i()(i()({},O),{},{type:a}),m[a](i()(i()({},T),{},{icon:(A=o[a])===null||A===void 0?void 0:A.icon}))},k=i()(i()({},m),{},{success:function(a){return l("success",a)},warning:function(a){return l("warning",a)},error:function(a){return l("error",a)},info:function(a){return l("info",a)},loading:function(a){return l("loading",a)}});return[k,D]};u.Z=i()(i()({},v.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},12281:function(C,u,e){e.d(u,{JG:function(){return h},rb:function(){return x}});var g=e(26068),d=e.n(g),E=e(67825),P=e.n(E),j=e(75271),i=["maxWidth","maxHeight"];function b(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var h=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.maxWidth,n=s.maxHeight,p=P()(s,i);return d()({overlayInnerStyle:{maxWidth:t||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},p)};function M(o){return React.isValidElement(o)}function v(o){var _=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var r=function(_){return _>=10?_:"0".concat(_)},y=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(r(s))}var t=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(r(t),":").concat(r(n))}},74684:function(C,u,e){e.r(u),e.d(u,{texts:function(){return g}});const g=[{value:"\u5982\u679C\u60A8\u6709\u81EA\u5DF1\u7684 iconfont \u9879\u76EE\uFF0C\u53EF\u4EE5\u5C06\u60A8\u7684\u56FE\u6807\u96C6\u6210\u5230 Spark Design \u4E2D\uFF0C\u5E76\u901A\u8FC7\u7B80\u5355\u7684\u7B26\u53F7\u540D\u79F0\u8BBF\u95EE\u60A8\u7684\u56FE\u6807\u3002",paraId:0,tocIndex:0}]}}]);
