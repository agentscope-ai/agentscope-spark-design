"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[8338],{93581:function(A,l,e){e.r(l);var k=e(41570),d=e(12968),E=e(77815),P=e(35771),j=e(55454),i=e(64777),O=e(11851),h=e(78616),x=e(44616),M=e(51972),f=e(90628),a=e(95290),y=e(34766),o=e(51204),_=e(66404),s=e(75271),n=e(52676);function r(){return(0,n.jsx)(o.DumiPage,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"useglobalstyle-\u589E\u52A0-style-\u6837\u5F0F",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#useglobalstyle-\u589E\u52A0-style-\u6837\u5F0F",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"useGlobalStyle \u589E\u52A0 style \u6837\u5F0F"]}),(0,n.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,n.jsx)(o.DumiDemo,{demo:{id:"useglobalstyle-demo-demo"},previewerProps:{filename:"src/hooks/useGlobalStyle/demo/demo.tsx"}})]})})})}l.default=r},38356:function(A,l,e){e.d(l,{Z:function(){return o}});var k=e(26068),d=e.n(k),E=e(60213),P=e(68278),j=e(44201),i=e(75271),O=e(53649),h=e.n(O),x=e(30764),M,f=(0,x.Z)(M||(M=h()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),a=e(52676),y=function(s){var n,r,c=(0,E.getCommonConfig)(),p=c.antPrefix,m=(0,i.useMemo)(function(){var u;if(!((u=s.menu)!==null&&u!==void 0&&u.selectable)||!s.menu){var v;return((v=s.menu)===null||v===void 0?void 0:v.items)||[]}return s.menu.items.map(function(g){var t={},b=g.label;return b&&(t.label=(0,a.jsxs)("div",{className:"".concat(p,"-dropdown-check-wrapper"),children:[b,(0,a.jsx)("span",{className:"".concat(p,"-dropdown-check-icon"),children:(0,a.jsx)(P.Z,{})})]})),d()(d()({},g),t)})},[(n=s.menu)===null||n===void 0?void 0:n.items,(r=s.menu)===null||r===void 0?void 0:r.selectable]),D=f();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{}),(0,a.jsx)(j.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:m}),overlayStyle:d()({},s.overlayStyle)}))]})},o=y},39971:function(A,l,e){var k=e(48305),d=e.n(k),E=e(67825),P=e.n(E),j=e(26068),i=e.n(j),O=e(58911),h=e(88602),x=e(99090),M=e(62910),f=e(86212),a=e(52676),y=["content"],o={success:{type:"success",icon:(0,a.jsx)(O.Z,{})},warning:{type:"warning",icon:(0,a.jsx)(h.Z,{})},error:{type:"error",icon:(0,a.jsx)(x.Z,{})},info:{type:"info",icon:(0,a.jsx)(M.Z,{})}},_=function(r,c){var p,m;typeof c=="string"?m={content:c}:m=i()({},c);var D=m,u=D.content,v=P()(D,y);f.ZP.open(i()({type:r,content:u,icon:r==="loading"||(p=o[r])===null||p===void 0?void 0:p.icon},v))},s=function(r){var c=f.ZP.useMessage(r),p=d()(c,2),m=p[0],D=p[1],u=function(t,b){var w,C;typeof b=="string"?C={content:b,type:t}:C=i()(i()({},b),{},{type:t}),m[t](i()(i()({},C),{},{icon:(w=o[t])===null||w===void 0?void 0:w.icon}))},v=i()(i()({},m),{},{success:function(t){return u("success",t)},warning:function(t){return u("warning",t)},error:function(t){return u("error",t)},info:function(t){return u("info",t)},loading:function(t){return u("loading",t)}});return[v,D]};l.Z=i()(i()({},f.ZP),{},{success:function(r){return _("success",r)},warning:function(r){return _("warning",r)},error:function(r){return _("error",r)},info:function(r){return _("info",r)},loading:function(r){return _("loading",r)},useMessage:s})},95336:function(A,l,e){e.d(l,{JG:function(){return h},rb:function(){return x}});var k=e(26068),d=e.n(k),E=e(67825),P=e.n(E),j=e(75271),i=["maxWidth","maxHeight"];function O(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var h=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},x=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=s.maxWidth,r=s.maxHeight,c=P()(s,i);return d()({overlayInnerStyle:{maxWidth:n||326,maxHeight:r||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},c)};function M(o){return React.isValidElement(o)}function f(o){var _=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var a=function(_){return _>=10?_:"0".concat(_)},y=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(a(s))}var n=Math.floor(_/60),r=Math.ceil(_%60);return"".concat(a(n),":").concat(a(r))}}}]);
