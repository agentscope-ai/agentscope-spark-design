"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[6682],{95305:function(C,u,e){e.r(u);var m=e(41570),d=e(12968),E=e(77815),h=e(35771),b=e(71705),i=e(64777),A=e(11851),x=e(78616),M=e(52990),v=e(74235),k=e(73031),o=e(30864),D=e(29370),r=e(87274),_=e(18282),s=e(75271),a=e(26615),n=e(52676);function c(){return(0,n.jsx)(r.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v.Z,{title:"Audio",desc:"\u97F3\u9891\u5C55\u793A"}),(0,n.jsx)(r.Dl,{demo:{id:"audio-demo-demo1"},previewerProps:{center:!0,title:"\u793A\u4F8B",filename:"src/components/commonComponents/Audio/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:a.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,n.jsx)("p",{children:a.texts[1].value}),(0,n.jsx)("div",{"data-embed-hidden":""})]})]})})})}u.default=c},38356:function(C,u,e){e.d(u,{Z:function(){return r}});var m=e(26068),d=e.n(m),E=e(60213),h=e(68278),b=e(44201),i=e(75271),A=e(53649),x=e.n(A),M=e(30764),v,k=(0,M.Z)(v||(v=x()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),o=e(52676),D=function(s){var a,n,c=(0,E.getCommonConfig)(),l=c.antPrefix,g=(0,i.useMemo)(function(){var p;if(!((p=s.menu)!==null&&p!==void 0&&p.selectable)||!s.menu){var P;return((P=s.menu)===null||P===void 0?void 0:P.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,o.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[O,(0,o.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,o.jsx)(h.Z,{})})]})),d()(d()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=k();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{}),(0,o.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},r=D},39971:function(C,u,e){var m=e(48305),d=e.n(m),E=e(67825),h=e.n(E),b=e(26068),i=e.n(b),A=e(58911),x=e(88602),M=e(99090),v=e(62910),k=e(86212),o=e(52676),D=["content"],r={success:{type:"success",icon:(0,o.jsx)(A.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(x.Z,{})},error:{type:"error",icon:(0,o.jsx)(M.Z,{})},info:{type:"info",icon:(0,o.jsx)(v.Z,{})}},_=function(n,c){var l,g;typeof c=="string"?g={content:c}:g=i()({},c);var j=g,p=j.content,P=h()(j,D);k.ZP.open(i()({type:n,content:p,icon:n==="loading"||(l=r[n])===null||l===void 0?void 0:l.icon},P))},s=function(n){var c=k.ZP.useMessage(n),l=d()(c,2),g=l[0],j=l[1],p=function(t,O){var y,I;typeof O=="string"?I={content:O,type:t}:I=i()(i()({},O),{},{type:t}),g[t](i()(i()({},I),{},{icon:(y=r[t])===null||y===void 0?void 0:y.icon}))},P=i()(i()({},g),{},{success:function(t){return p("success",t)},warning:function(t){return p("warning",t)},error:function(t){return p("error",t)},info:function(t){return p("info",t)},loading:function(t){return p("loading",t)}});return[P,j]};u.Z=i()(i()({},k.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},95336:function(C,u,e){e.d(u,{JG:function(){return x},rb:function(){return M}});var m=e(26068),d=e.n(m),E=e(67825),h=e.n(E),b=e(75271),i=["maxWidth","maxHeight"];function A(){var r;return((r=window.g_config)===null||r===void 0?void 0:r.isIntl)||!1}var x=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},M=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,c=h()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},c)};function v(r){return React.isValidElement(r)}function k(r){var _=r||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var o=function(_){return _>=10?_:"0".concat(_)},D=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(o(s))}var a=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(o(a),":").concat(o(n))}},26615:function(C,u,e){e.r(u),e.d(u,{texts:function(){return m}});const m=[{value:"import { Audio } from '@agentscope-ai/design'",paraId:0},{value:"ApiParser\u89E3\u6790\u7ED3\u679C\u4E3A\u7A7A",paraId:1,tocIndex:1}]}}]);
