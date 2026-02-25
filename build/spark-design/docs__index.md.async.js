"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[6935],{25549:function(A,l,e){e.r(l);var k=e(41570),d=e(12968),P=e(77815),E=e(35771),b=e(55454),i=e(64777),j=e(11851),h=e(78616),x=e(44616),M=e(51972),f=e(90628),a=e(95290),y=e(34766),o=e(51204),_=e(66404),n=e(75271),r=e(52676);function s(){return(0,r.jsx)(o.DumiPage,{children:(0,r.jsx)(n.Suspense,{fallback:(0,r.jsx)(_.Z,{}),children:(0,r.jsx)(r.Fragment,{})})})}l.default=s},38356:function(A,l,e){e.d(l,{Z:function(){return o}});var k=e(26068),d=e.n(k),P=e(60213),E=e(68278),b=e(44201),i=e(75271),j=e(53649),h=e.n(j),x=e(30764),M,f=(0,x.Z)(M||(M=h()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),a=e(52676),y=function(n){var r,s,c=(0,P.getCommonConfig)(),p=c.antPrefix,g=(0,i.useMemo)(function(){var u;if(!((u=n.menu)!==null&&u!==void 0&&u.selectable)||!n.menu){var v;return((v=n.menu)===null||v===void 0?void 0:v.items)||[]}return n.menu.items.map(function(m){var t={},O=m.label;return O&&(t.label=(0,a.jsxs)("div",{className:"".concat(p,"-dropdown-check-wrapper"),children:[O,(0,a.jsx)("span",{className:"".concat(p,"-dropdown-check-icon"),children:(0,a.jsx)(E.Z,{})})]})),d()(d()({},m),t)})},[(r=n.menu)===null||r===void 0?void 0:r.items,(s=n.menu)===null||s===void 0?void 0:s.selectable]),D=f();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{}),(0,a.jsx)(b.Z,d()(d()({},n),{},{menu:d()(d()({},n.menu),{},{items:g}),overlayStyle:d()({},n.overlayStyle)}))]})},o=y},39971:function(A,l,e){var k=e(48305),d=e.n(k),P=e(67825),E=e.n(P),b=e(26068),i=e.n(b),j=e(58911),h=e(88602),x=e(99090),M=e(62910),f=e(86212),a=e(52676),y=["content"],o={success:{type:"success",icon:(0,a.jsx)(j.Z,{})},warning:{type:"warning",icon:(0,a.jsx)(h.Z,{})},error:{type:"error",icon:(0,a.jsx)(x.Z,{})},info:{type:"info",icon:(0,a.jsx)(M.Z,{})}},_=function(s,c){var p,g;typeof c=="string"?g={content:c}:g=i()({},c);var D=g,u=D.content,v=E()(D,y);f.ZP.open(i()({type:s,content:u,icon:s==="loading"||(p=o[s])===null||p===void 0?void 0:p.icon},v))},n=function(s){var c=f.ZP.useMessage(s),p=d()(c,2),g=p[0],D=p[1],u=function(t,O){var C,T;typeof O=="string"?T={content:O,type:t}:T=i()(i()({},O),{},{type:t}),g[t](i()(i()({},T),{},{icon:(C=o[t])===null||C===void 0?void 0:C.icon}))},v=i()(i()({},g),{},{success:function(t){return u("success",t)},warning:function(t){return u("warning",t)},error:function(t){return u("error",t)},info:function(t){return u("info",t)},loading:function(t){return u("loading",t)}});return[v,D]};l.Z=i()(i()({},f.ZP),{},{success:function(s){return _("success",s)},warning:function(s){return _("warning",s)},error:function(s){return _("error",s)},info:function(s){return _("info",s)},loading:function(s){return _("loading",s)},useMessage:n})},95336:function(A,l,e){e.d(l,{JG:function(){return h},rb:function(){return x}});var k=e(26068),d=e.n(k),P=e(67825),E=e.n(P),b=e(75271),i=["maxWidth","maxHeight"];function j(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var h=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var n=document.createElement("textarea");document.body.appendChild(n),n.style.position="fixed",n.style.clip="rect(0 0 0 0)",n.style.top="10px",n.value=_,n.select(),document.execCommand("copy",!0),document.body.removeChild(n)}},x=function(_){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.maxWidth,s=n.maxHeight,c=E()(n,i);return d()({overlayInnerStyle:{maxWidth:r||326,maxHeight:s||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},c)};function M(o){return React.isValidElement(o)}function f(o){var _=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var a=function(_){return _>=10?_:"0".concat(_)},y=function(_){if(_<60){var n=Math.ceil(_);return"0:".concat(a(n))}var r=Math.floor(_/60),s=Math.ceil(_%60);return"".concat(a(r),":").concat(a(s))}}}]);
