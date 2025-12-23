"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[6682],{99239:function(C,u,e){e.r(u);var m=e(48661),d=e(28450),E=e(87276),h=e(83775),b=e(36337),i=e(14552),A=e(68879),x=e(15957),M=e(8958),v=e(98520),P=e(41395),r=e(79756),D=e(33779),o=e(21570),_=e(28060),s=e(75271),a=e(53025),n=e(52676);function p(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v.Z,{title:"Audio",desc:"\u97F3\u9891\u5C55\u793A"}),(0,n.jsx)(o.Dl,{demo:{id:"audio-demo-demo1"},previewerProps:{center:!0,title:"\u793A\u4F8B",filename:"src/components/commonComponents/Audio/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:a.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,n.jsx)("p",{children:a.texts[1].value}),(0,n.jsx)("div",{"data-embed-hidden":""})]})]})})})}u.default=p},64925:function(C,u,e){e.d(u,{Z:function(){return o}});var m=e(26068),d=e.n(m),E=e(51886),h=e(71649),b=e(42478),i=e(75271),A=e(53649),x=e.n(A),M=e(75469),v,P=(0,M.Z)(v||(v=x()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),r=e(52676),D=function(s){var a,n,p=(0,E.getCommonConfig)(),c=p.antPrefix,g=(0,i.useMemo)(function(){var l;if(!((l=s.menu)!==null&&l!==void 0&&l.selectable)||!s.menu){var k;return((k=s.menu)===null||k===void 0?void 0:k.items)||[]}return s.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,r.jsxs)("div",{className:"".concat(c,"-dropdown-check-wrapper"),children:[O,(0,r.jsx)("span",{className:"".concat(c,"-dropdown-check-icon"),children:(0,r.jsx)(h.Z,{})})]})),d()(d()({},f),t)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=P();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},o=D},63953:function(C,u,e){var m=e(48305),d=e.n(m),E=e(67825),h=e.n(E),b=e(26068),i=e.n(b),A=e(58911),x=e(88602),M=e(99090),v=e(62910),P=e(82090),r=e(52676),D=["content"],o={success:{type:"success",icon:(0,r.jsx)(A.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(x.Z,{})},error:{type:"error",icon:(0,r.jsx)(M.Z,{})},info:{type:"info",icon:(0,r.jsx)(v.Z,{})}},_=function(n,p){var c,g;typeof p=="string"?g={content:p}:g=i()({},p);var j=g,l=j.content,k=h()(j,D);P.ZP.open(i()({type:n,content:l,icon:n==="loading"||(c=o[n])===null||c===void 0?void 0:c.icon},k))},s=function(n){var p=P.ZP.useMessage(n),c=d()(p,2),g=c[0],j=c[1],l=function(t,O){var y,I;typeof O=="string"?I={content:O,type:t}:I=i()(i()({},O),{},{type:t}),g[t](i()(i()({},I),{},{icon:(y=o[t])===null||y===void 0?void 0:y.icon}))},k=i()(i()({},g),{},{success:function(t){return l("success",t)},warning:function(t){return l("warning",t)},error:function(t){return l("error",t)},info:function(t){return l("info",t)},loading:function(t){return l("loading",t)}});return[k,j]};u.Z=i()(i()({},P.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},12281:function(C,u,e){e.d(u,{JG:function(){return x},rb:function(){return M}});var m=e(26068),d=e.n(m),E=e(67825),h=e.n(E),b=e(75271),i=["maxWidth","maxHeight"];function A(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var x=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},M=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.maxWidth,n=s.maxHeight,p=h()(s,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},p)};function v(o){return React.isValidElement(o)}function P(o){var _=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var r=function(_){return _>=10?_:"0".concat(_)},D=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(r(s))}var a=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(r(a),":").concat(r(n))}},53025:function(C,u,e){e.r(u),e.d(u,{texts:function(){return m}});const m=[{value:"import { Audio } from '@agentscope-ai/design'",paraId:0},{value:"ApiParser\u89E3\u6790\u7ED3\u679C\u4E3A\u7A7A",paraId:1,tocIndex:1}]}}]);
