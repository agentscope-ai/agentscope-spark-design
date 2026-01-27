"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[3065],{35586:function(I,u,e){e.r(u);var g=e(41570),d=e(12968),P=e(77815),E=e(35771),O=e(55454),i=e(64777),b=e(11851),h=e(78616),x=e(44616),M=e(51972),v=e(90628),o=e(95290),y=e(34766),r=e(51204),_=e(66404),s=e(75271),a=e(4910),n=e(52676);function c(){return(0,n.jsx)(r.DumiPage,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h1",{id:"\u4F7F\u7528",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]})}),(0,n.jsx)(r.DumiDemo,{demo:{id:"docs-guide-spark-icons-demo-usage"},previewerProps:{center:!0,title:"\u57FA\u672C\u7528\u6CD5",filename:"docs/guide/icons/usage.tsx"}}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("p",{children:[a.texts[0].value,(0,n.jsx)("a",{href:"https://sparkdesign.agentscope.io/#/resources/icons",children:a.texts[1].value}),a.texts[2].value]})})]})})})}u.default=c},38356:function(I,u,e){e.d(u,{Z:function(){return r}});var g=e(26068),d=e.n(g),P=e(60213),E=e(68278),O=e(44201),i=e(75271),b=e(53649),h=e.n(b),x=e(30764),M,v=(0,x.Z)(M||(M=h()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),o=e(52676),y=function(s){var a,n,c=(0,P.getCommonConfig)(),l=c.antPrefix,m=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var k;return((k=s.menu)===null||k===void 0?void 0:k.items)||[]}return s.menu.items.map(function(f){var t={},j=f.label;return j&&(t.label=(0,o.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[j,(0,o.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,o.jsx)(E.Z,{})})]})),d()(d()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),D=v();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsx)(O.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:m}),overlayStyle:d()({},s.overlayStyle)}))]})},r=y},39971:function(I,u,e){var g=e(48305),d=e.n(g),P=e(67825),E=e.n(P),O=e(26068),i=e.n(O),b=e(58911),h=e(88602),x=e(99090),M=e(62910),v=e(86212),o=e(52676),y=["content"],r={success:{type:"success",icon:(0,o.jsx)(b.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(h.Z,{})},error:{type:"error",icon:(0,o.jsx)(x.Z,{})},info:{type:"info",icon:(0,o.jsx)(M.Z,{})}},_=function(n,c){var l,m;typeof c=="string"?m={content:c}:m=i()({},c);var D=m,p=D.content,k=E()(D,y);v.ZP.open(i()({type:n,content:p,icon:n==="loading"||(l=r[n])===null||l===void 0?void 0:l.icon},k))},s=function(n){var c=v.ZP.useMessage(n),l=d()(c,2),m=l[0],D=l[1],p=function(t,j){var C,A;typeof j=="string"?A={content:j,type:t}:A=i()(i()({},j),{},{type:t}),m[t](i()(i()({},A),{},{icon:(C=r[t])===null||C===void 0?void 0:C.icon}))},k=i()(i()({},m),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[k,D]};u.Z=i()(i()({},v.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},95336:function(I,u,e){e.d(u,{JG:function(){return h},rb:function(){return x}});var g=e(26068),d=e.n(g),P=e(67825),E=e.n(P),O=e(75271),i=["maxWidth","maxHeight"];function b(){var r;return((r=window.g_config)===null||r===void 0?void 0:r.isIntl)||!1}var h=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,c=E()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},c)};function M(r){return React.isValidElement(r)}function v(r){var _=r||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var o=function(_){return _>=10?_:"0".concat(_)},y=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(o(s))}var a=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(o(a),":").concat(o(n))}},4910:function(I,u,e){e.r(u),e.d(u,{texts:function(){return g}});const g=[{value:"\u8BBF\u95EE ",paraId:0},{value:"Icon Library",paraId:0},{value:" \u67E5\u770B\u5168\u90E8 Icon",paraId:0}]}}]);
