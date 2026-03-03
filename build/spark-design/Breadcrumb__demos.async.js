"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7307],{57928:function(T,i,n){n.r(i);var s=n(40),a=n(75271),f=n(52676),m=function(){return(0,f.jsx)(s.Z,{items:[{title:"Home"},{title:"Application Center"},{title:"An Application"}]})};i.default=m},4313:function(T,i,n){n.r(i);var s=n(40),a=n(75271),f=n(52676),m=function(){return(0,f.jsx)(s.Z,{items:[{title:"Home"},{title:"Application Center"},{title:"User Profile",iconUrl:"https://img.alicdn.com/imgextra/i1/O1CN01Bvwiz11YRF3tRdps9_!!6000000003055-55-tps-20-20.svg",dropdown:{items:[{key:"profile",label:"Profile"},{key:"settings",label:"Settings"}]}}]})};i.default=m},93178:function(T,i,n){n.d(i,{Z:function(){return h}});var s=n(26068),a=n.n(s),f=n(48305),m=n.n(f),g=n(67825),C=n.n(g),A=n(67487),P=n(75271),E=n(53649),j=n.n(E),D=n(30764),o,O=(0,D.Z)(o||(o=j()([`
.`,`-avatar {
  cursor: default;
}
`])),function(d){return d.antPrefix}),v=n(52676),t=["children"],e=(0,P.forwardRef)(function(d,M){var r=O(),l=d.children,y=C()(d,t),p=(0,P.useState)(d.children),x=m()(p,2),b=x[0],u=x[1];return(0,P.useEffect)(function(){if(typeof l=="string"){u(Array.from(l)[0]);return}if(typeof l=="number"){u(Array.from(String(l))[0]);return}u(l)},[l]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r,{}),(0,v.jsx)(A.Z,a()(a()({ref:M},y),{},{children:b}))]})}),h=e},40:function(T,i,n){n.d(i,{Z:function(){return M}});var s=n(26068),a=n.n(s),f=n(67825),m=n.n(f),g=n(3999),C=n(11691),A=n(93178),P=n(38356),E=n(75271),j=n(60213),D=n(53649),o=n.n(D),O=n(30764),v,t=(0,O.Z)(v||(v=o()([`
.`,`-breadcrumb {
  cursor: default;
  
  .`,`-breadcrumb-link {
    cursor: pointer;
  }
  
  li:last-child {
    .`,`-breadcrumb-link {
      color: var(--`,`-color-text);
      display: flex;
      align-items: center;
    }
  }
  
  a {
    color: var(--`,`-color-text-secondary);
    height: auto;
    
    &:hover {
      background-color: transparent;
    }
  }
  
  .`,`-breadcrumb-separator {
    color: var(--`,`-color-text);
  }
  
  .`,`-breadcrumb-overlay-link {
    display: flex;
    align-items: center;
  }
  
  .`,`-breadcrumb-dropdown {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    
    .`,`-avatar > img {
      width: 20px;
      height: 20px;
    }
  }
  
  .`,`-breadcrumb-item-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .`,`-breadcrumb-dropdown-title {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 100%;
  }
  
  .`,`-breadcrumb-dropdown-overlay {
    display: flex;
    justify-content: center;
  }
}
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix}),e=n(52676),h=["items"],d=function(l){var y=l.items,p=y===void 0?[]:y,x=m()(l,h),b=(0,j.getCommonConfig)(),u=b.sparkPrefix,Z=t(),U=E.useMemo(function(){return p.map(function(c){var L=c.title,S=[];return c.iconUrl&&S.push((0,e.jsx)(A.Z,{size:20,src:c.iconUrl},"avatar")),c.dropdown?S.push((0,e.jsxs)("span",{className:"".concat(u,"-breadcrumb-dropdown-title"),children:[c.title,(0,e.jsx)(g.Z,{size:16})]},"title")):S.push((0,e.jsx)("span",{children:c.title},"title")),c.dropdown?L=(0,e.jsx)(P.Z,{menu:{items:c.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(u,"-breadcrumb-dropdown"),children:(0,e.jsx)("span",{children:S})}):(c.iconUrl||S.length>1)&&(L=(0,e.jsx)("span",{className:"".concat(u,"-breadcrumb-item-content"),children:S})),a()(a()({},c),{},{title:L})})},[p]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Z,{}),(0,e.jsx)(C.Z,a()(a()({},x),{},{items:U,className:"".concat(u,"-breadcrumb ").concat(x.className||"")}))]})},M=d},38356:function(T,i,n){n.d(i,{Z:function(){return v}});var s=n(26068),a=n.n(s),f=n(60213),m=n(68278),g=n(44201),C=n(75271),A=n(53649),P=n.n(A),E=n(30764),j,D=(0,E.Z)(j||(j=P()([`
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
`])),function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),o=n(52676),O=function(e){var h,d,M=(0,f.getCommonConfig)(),r=M.antPrefix,l=(0,C.useMemo)(function(){var p;if(!((p=e.menu)!==null&&p!==void 0&&p.selectable)||!e.menu){var x;return((x=e.menu)===null||x===void 0?void 0:x.items)||[]}return e.menu.items.map(function(b){var u={},Z=b.label;return Z&&(u.label=(0,o.jsxs)("div",{className:"".concat(r,"-dropdown-check-wrapper"),children:[Z,(0,o.jsx)("span",{className:"".concat(r,"-dropdown-check-icon"),children:(0,o.jsx)(m.Z,{})})]})),a()(a()({},b),u)})},[(h=e.menu)===null||h===void 0?void 0:h.items,(d=e.menu)===null||d===void 0?void 0:d.selectable]),y=D();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{}),(0,o.jsx)(g.Z,a()(a()({},e),{},{menu:a()(a()({},e.menu),{},{items:l}),overlayStyle:a()({},e.overlayStyle)}))]})},v=O}}]);
