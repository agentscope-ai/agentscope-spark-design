"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[9694],{98138:function(C,p,_){_.r(p);var m=_(48661),d=_(28450),E=_(87276),x=_(83775),b=_(36337),i=_(14552),w=_(68879),D=_(15957),v=_(8958),h=_(98520),P=_(41395),r=_(79756),M=_(33779),s=_(21570),e=_(28060),o=_(75271),a=_(12416),n=_(52676);function u(){return(0,n.jsx)(s.dY,{children:(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(e.Z,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{title:"Dropdown",desc:"A list that pops down."}),(0,n.jsx)(s.Dl,{demo:{id:"dropdown-demo-demo1"},previewerProps:{center:!0,title:"Basic Usage",filename:"src/components/commonComponents/Dropdown/demo/demo1.tsx"}}),(0,n.jsx)(M.Z,{children:a.texts[0].value}),(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h4",{id:"dropdown-examples",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#dropdown-examples",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Dropdown Examples"]}),(0,n.jsx)("p",{children:a.texts[1].value})]}),(0,n.jsx)(s.Z1,{items:[{demo:{id:"dropdown-demo-demo2"},previewerProps:{center:!0,title:"Dropdown with Icons",filename:"src/components/commonComponents/Dropdown/demo/demo2.tsx"}},{demo:{id:"dropdown-demo-demo3"},previewerProps:{center:!0,title:"Danger State Menu Items",filename:"src/components/commonComponents/Dropdown/demo/demo3.tsx"}}]}),(0,n.jsx)("div",{className:"markdown",children:(0,n.jsxs)("h4",{id:"api",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,n.jsx)(v.Z,{url:"https://ant.design/components/dropdown/#api"})]})})})}p.default=u},64925:function(C,p,_){_.d(p,{Z:function(){return s}});var m=_(26068),d=_.n(m),E=_(51886),x=_(71649),b=_(42478),i=_(75271),w=_(53649),D=_.n(w),v=_(75469),h,P=(0,v.Z)(h||(h=D()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),r=_(52676),M=function(o){var a,n,u=(0,E.getCommonConfig)(),c=u.antPrefix,g=(0,i.useMemo)(function(){var l;if(!((l=o.menu)!==null&&l!==void 0&&l.selectable)||!o.menu){var k;return((k=o.menu)===null||k===void 0?void 0:k.items)||[]}return o.menu.items.map(function(f){var t={},O=f.label;return O&&(t.label=(0,r.jsxs)("div",{className:"".concat(c,"-dropdown-check-wrapper"),children:[O,(0,r.jsx)("span",{className:"".concat(c,"-dropdown-check-icon"),children:(0,r.jsx)(x.Z,{})})]})),d()(d()({},f),t)})},[(a=o.menu)===null||a===void 0?void 0:a.items,(n=o.menu)===null||n===void 0?void 0:n.selectable]),j=P();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(b.Z,d()(d()({},o),{},{menu:d()(d()({},o.menu),{},{items:g}),overlayStyle:d()({},o.overlayStyle)}))]})},s=M},63953:function(C,p,_){var m=_(48305),d=_.n(m),E=_(67825),x=_.n(E),b=_(26068),i=_.n(b),w=_(58911),D=_(88602),v=_(99090),h=_(62910),P=_(82090),r=_(52676),M=["content"],s={success:{type:"success",icon:(0,r.jsx)(w.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(D.Z,{})},error:{type:"error",icon:(0,r.jsx)(v.Z,{})},info:{type:"info",icon:(0,r.jsx)(h.Z,{})}},e=function(n,u){var c,g;typeof u=="string"?g={content:u}:g=i()({},u);var j=g,l=j.content,k=x()(j,M);P.ZP.open(i()({type:n,content:l,icon:n==="loading"||(c=s[n])===null||c===void 0?void 0:c.icon},k))},o=function(n){var u=P.ZP.useMessage(n),c=d()(u,2),g=c[0],j=c[1],l=function(t,O){var I,y;typeof O=="string"?y={content:O,type:t}:y=i()(i()({},O),{},{type:t}),g[t](i()(i()({},y),{},{icon:(I=s[t])===null||I===void 0?void 0:I.icon}))},k=i()(i()({},g),{},{success:function(t){return l("success",t)},warning:function(t){return l("warning",t)},error:function(t){return l("error",t)},info:function(t){return l("info",t)},loading:function(t){return l("loading",t)}});return[k,j]};p.Z=i()(i()({},P.ZP),{},{success:function(n){return e("success",n)},warning:function(n){return e("warning",n)},error:function(n){return e("error",n)},info:function(n){return e("info",n)},loading:function(n){return e("loading",n)},useMessage:o})},12281:function(C,p,_){_.d(p,{JG:function(){return D},rb:function(){return v}});var m=_(26068),d=_.n(m),E=_(67825),x=_.n(E),b=_(75271),i=["maxWidth","maxHeight"];function w(){var s;return((s=window.g_config)===null||s===void 0?void 0:s.isIntl)||!1}var D=function(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var o=document.createElement("textarea");document.body.appendChild(o),o.style.position="fixed",o.style.clip="rect(0 0 0 0)",o.style.top="10px",o.value=e,o.select(),document.execCommand("copy",!0),document.body.removeChild(o)}},v=function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=o.maxWidth,n=o.maxHeight,u=x()(o,i);return d()({overlayInnerStyle:{maxWidth:a||326,maxHeight:n||150,overflowY:"auto",padding:"6px 12px"},title:e,arrow:!1},u)};function h(s){return React.isValidElement(s)}function P(s){var e=s||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(e)}var r=function(e){return e>=10?e:"0".concat(e)},M=function(e){if(e<60){var o=Math.ceil(e);return"0:".concat(r(o))}var a=Math.floor(e/60),n=Math.ceil(e%60);return"".concat(r(a),":").concat(r(n))}},12416:function(C,p,_){_.r(p),_.d(p,{texts:function(){return m}});const m=[{value:"import { Dropdown } from '@agentscope-ai/design'",paraId:0},{value:"Below are examples and variants of this dropdown component",paraId:1,tocIndex:1}]}}]);
