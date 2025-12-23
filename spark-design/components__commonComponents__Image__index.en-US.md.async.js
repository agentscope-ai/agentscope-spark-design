"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[3965],{19745:function(C,u,e){e.r(u);var m=e(48661),d=e(28450),h=e(87276),x=e(83775),b=e(36337),i=e(14552),y=e(68879),M=e(15957),v=e(8958),P=e(98520),E=e(41395),r=e(79756),D=e(33779),o=e(21570),_=e(28060),s=e(75271),t=e(18085),n=e(52676);function p(){return(0,n.jsx)(o.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Z,{title:"Image",desc:"Previewable image"}),(0,n.jsx)(o.Dl,{demo:{id:"image-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Image/demo/demo1.tsx"}}),(0,n.jsx)(D.Z,{children:t.texts[0].value}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/image/#api"})]})})})}u.default=p},64925:function(C,u,e){e.d(u,{Z:function(){return o}});var m=e(26068),d=e.n(m),h=e(51886),x=e(71649),b=e(42478),i=e(75271),y=e(53649),M=e.n(y),v=e(75469),P,E=(0,v.Z)(P||(P=M()([`
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
`])),function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),r=e(52676),D=function(s){var t,n,p=(0,h.getCommonConfig)(),c=p.antPrefix,g=(0,i.useMemo)(function(){var l;if(!((l=s.menu)!==null&&l!==void 0&&l.selectable)||!s.menu){var k;return((k=s.menu)===null||k===void 0?void 0:k.items)||[]}return s.menu.items.map(function(f){var a={},O=f.label;return O&&(a.label=(0,r.jsxs)("div",{className:"".concat(c,"-dropdown-check-wrapper"),children:[O,(0,r.jsx)("span",{className:"".concat(c,"-dropdown-check-icon"),children:(0,r.jsx)(x.Z,{})})]})),d()(d()({},f),a)})},[(t=s.menu)===null||t===void 0?void 0:t.items,(n=s.menu)===null||n===void 0?void 0:n.selectable]),j=E();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:g}),overlayStyle:d()({},s.overlayStyle)}))]})},o=D},63953:function(C,u,e){var m=e(48305),d=e.n(m),h=e(67825),x=e.n(h),b=e(26068),i=e.n(b),y=e(58911),M=e(88602),v=e(99090),P=e(62910),E=e(82090),r=e(52676),D=["content"],o={success:{type:"success",icon:(0,r.jsx)(y.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(M.Z,{})},error:{type:"error",icon:(0,r.jsx)(v.Z,{})},info:{type:"info",icon:(0,r.jsx)(P.Z,{})}},_=function(n,p){var c,g;typeof p=="string"?g={content:p}:g=i()({},p);var j=g,l=j.content,k=x()(j,D);E.ZP.open(i()({type:n,content:l,icon:n==="loading"||(c=o[n])===null||c===void 0?void 0:c.icon},k))},s=function(n){var p=E.ZP.useMessage(n),c=d()(p,2),g=c[0],j=c[1],l=function(a,O){var I,A;typeof O=="string"?A={content:O,type:a}:A=i()(i()({},O),{},{type:a}),g[a](i()(i()({},A),{},{icon:(I=o[a])===null||I===void 0?void 0:I.icon}))},k=i()(i()({},g),{},{success:function(a){return l("success",a)},warning:function(a){return l("warning",a)},error:function(a){return l("error",a)},info:function(a){return l("info",a)},loading:function(a){return l("loading",a)}});return[k,j]};u.Z=i()(i()({},E.ZP),{},{success:function(n){return _("success",n)},warning:function(n){return _("warning",n)},error:function(n){return _("error",n)},info:function(n){return _("info",n)},loading:function(n){return _("loading",n)},useMessage:s})},12281:function(C,u,e){e.d(u,{JG:function(){return M},rb:function(){return v}});var m=e(26068),d=e.n(m),h=e(67825),x=e.n(h),b=e(75271),i=["maxWidth","maxHeight"];function y(){var o;return((o=window.g_config)===null||o===void 0?void 0:o.isIntl)||!1}var M=function(_){if(navigator.clipboard)navigator.clipboard.writeText(_);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=_,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},v=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.maxWidth,n=s.maxHeight,p=x()(s,i);return d()({overlayInnerStyle:{maxWidth:t||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:_,arrow:!1},p)};function P(o){return React.isValidElement(o)}function E(o){var _=o||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(_)}var r=function(_){return _>=10?_:"0".concat(_)},D=function(_){if(_<60){var s=Math.ceil(_);return"0:".concat(r(s))}var t=Math.floor(_/60),n=Math.ceil(_%60);return"".concat(r(t),":").concat(r(n))}},18085:function(C,u,e){e.r(u),e.d(u,{texts:function(){return m}});const m=[{value:"import { Image } from '@agentscope-ai/design'",paraId:0}]}}]);
