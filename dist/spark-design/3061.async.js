"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[3061],{82393:function(dn,z,n){n.r(z),n.d(z,{useStyle:function(){return F}});var b=n(53649),s=n.n(b),w=n(88974),B,F=(0,w.Z)(B||(B=s()([`
.`,`-alert-dialog {
  .`,`-modal-body {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--`,`-color-text-secondary);
  }

  .`,`-modal-confirm-content {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--`,`-color-text-secondary);
  }

  .`,`-modal-confirm-paragraph {
    max-width: 100%;
  }
}
`])),function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix})},55002:function(dn,z,n){n.r(z);var b=n(26068),s=n.n(b),w=n(67825),B=n.n(w),F=n(1615),m=n(58911),A=n(88602),R=n(62910),S=n(99090),k=n(65122),D=n(84674),C=n(82187),y=n.n(C),O=n(31209),c=n(82393),v=n(52676),o=["children","type","danger","title","width","className"],h=function(l){var j=function(sn){var I=sn.type,fn=sn.title,pn=(0,O.getCommonConfig)(),ln=pn.antPrefix;switch(I){case"success":return(0,v.jsxs)(k.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,v.jsx)(m.Z,{style:{color:"var(--".concat(ln,"-color-success)"),fontSize:18,margin:"0 3px"}}),fn]});case"warning":case"confirm":return(0,v.jsxs)(k.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,v.jsx)(A.Z,{style:{color:"var(--".concat(ln,"-color-warning)"),fontSize:18,margin:"0 3px"}}),fn]});case"info":return(0,v.jsxs)(k.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,v.jsx)(R.Z,{style:{color:"var(--".concat(ln,"-color-info)"),fontSize:18,margin:"0 3px"}}),fn]});case"error":return(0,v.jsxs)(k.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,v.jsx)(S.Z,{style:{color:"var(--".concat(ln,"-color-error)"),fontSize:18,margin:"0 3px"}}),fn]});default:return F.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},u=l.children,Z=l.type,g=Z===void 0?"info":Z,H=l.danger,J=H===void 0?!1:H,V=l.title,_=l.width,Y=_===void 0?"400px":_,K=l.className,en=K===void 0?"":K,un=B()(l,o);return{width:Y,transitionName:"",restProps:un,closeIcon:null,title:j({type:g,title:V}),okButtonProps:{danger:g==="error"||g==="warning"||J},destroyOnClose:!0,className:y()(en,"animate-in","".concat((0,O.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:l.content||u,children:u}},p=function(l){var j=h(l),u=(0,c.useStyle)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u,{}),(0,v.jsx)(D.Z,s()(s()({width:j.width,transitionName:""},j.restProps),{},{closeIcon:null,title:j.title,okButtonProps:j.okButtonProps||{},destroyOnClose:j.destroyOnClose,className:j.className,children:j.content||j.children}))]})},a=["success","info","warning","error","confirm"];a.forEach(function(f){p[f]=function(l){var j=h(s()(s()({},l),{},{type:f}));function u(){var Z=(0,c.useStyle)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Z,{}),j.content]})}return D.Z.confirm(s()(s()(s()({},j),j.restProps),{},{content:(0,v.jsx)(u,{}),icon:null}))}}),z.default=p},22074:function(dn,z,n){n.d(z,{Z:function(){return C}});var b=n(26068),s=n.n(b),w=n(5340),B=n(75271),F=n(53649),m=n.n(F),A=n(88974),R,S=(0,A.Z)(R||(R=m()([`

.`,"-anchor-wrapper .","-anchor .",`-anchor-link-title {
  color: var(--`,`-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.`,`-anchor-link {
  --`,`-anchor-link-padding-block: 0;
  --`,`-anchor-link-padding-inline-start: 0;
}
`])),function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix}),k=n(52676),D=(0,B.forwardRef)(function(y){var O=S();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(O,{}),(0,k.jsx)(w.Z,s()({},y))]})}),C=D},62892:function(dn,z,n){n.d(z,{Z:function(){return h}});var b=n(31209),s=n(6665),w=n(32102),B=n(36891),F=n(4797),m=n(29171),A=n(73981),R=n(99670),S=n(75271),k=n(53649),D=n.n(k),C=n(88974),y,O=(0,C.Z)(y||(y=D()([`
.`,`-media-player-controller {
  display: flex;
  padding: 8px;
  gap: 8px;
  align-items: center;
  width: 100%;
  height: 40px;
  overflow: hidden;
}

// \u65F6\u95F4\u6587\u672C\u6837\u5F0F
.`,`-media-time-text {
  flex-grow: 0;
  font-size: 12px;
  line-height: 20px;
}

// \u8FDB\u5EA6\u6761\u5BB9\u5668\u6837\u5F0F
.`,`-media-progress-container {
  flex-grow: 1;
  cursor: pointer;
}

// \u8FDB\u5EA6\u6761\u6837\u5F0F
.`,`-media-progress-bar {
  width: 100%;

  .`,`-progress-bg {
    transition-duration: 0s;
  }
}
`])),function(p){return p.sparkPrefix},function(p){return p.sparkPrefix},function(p){return p.sparkPrefix},function(p){return p.sparkPrefix},function(p){return p.antPrefix}),c=n(52676),v=function(a){var f=Math.floor(a/60),l=Math.floor(a%60);return"".concat(f.toString().padStart(2,"0"),":").concat(l.toString().padStart(2,"0"))},o=function(a){var f=a.className,l=a.isPlaying,j=a.onPlayPause,u=a.onFullscreen,Z=a.onProgressClick,g=a.enableVolume,H=g===void 0?!1:g,J=a.enableFullscreen,V=a.muted,_=V===void 0?!0:V,Y=a.onMute,K=O(),en=(0,b.getCommonConfig)(),un=en.sparkPrefix,vn=(0,S.useMemo)(function(){return v(a.currentTime||0)},[a.currentTime]),sn=(0,S.useMemo)(function(){return v(a.duration||0)},[a.duration]),I=(0,S.useMemo)(function(){return Math.min((a.currentTime||0)/(a.duration||.01)*100,100)},[a.currentTime,a.duration]),fn=function(ln){if(!(!Z||!a.duration)){var Sn=ln.currentTarget.getBoundingClientRect(),gn=ln.clientX-Sn.left,hn=Sn.width,X=gn/hn,an=X*a.duration,tn=Math.max(0,Math.min(an,a.duration));Z(tn)}};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(K,{}),(0,c.jsxs)("div",{className:"".concat(un,"-media-player-controller ").concat(f||""),children:[(0,c.jsx)(s.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:l?(0,c.jsx)(B.Z,{}):(0,c.jsx)(F.Z,{}),onClick:j}),(0,c.jsx)(s.Z,{bordered:!1,size:"small",shape:"default",disabled:!H,icon:H&&_?(0,c.jsx)(m.Z,{}):(0,c.jsx)(A.Z,{}),onClick:Y}),(0,c.jsx)("span",{className:"".concat(un,"-media-time-text"),children:vn}),(0,c.jsx)("div",{className:"".concat(un,"-media-progress-container"),onClick:fn,children:(0,c.jsx)(w.Z,{className:"".concat(un,"-media-progress-bar"),percent:I,showInfo:!1})}),(0,c.jsx)("span",{className:"".concat(un,"-media-time-text"),children:sn}),J&&(0,c.jsx)(s.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,c.jsx)(R.Z,{}),onClick:u})]})]})},h=o},51971:function(dn,z,n){n.d(z,{Z:function(){return o}});var b=n(26068),s=n.n(b),w=n(48305),B=n.n(w),F=n(67825),m=n.n(F),A=n(75605),R=n(75271),S=n(53649),k=n.n(S),D=n(88974),C,y=(0,D.Z)(C||(C=k()([`
.`,`-avatar {
  cursor: default;
}
`])),function(h){return h.antPrefix}),O=n(52676),c=["children"],v=(0,R.forwardRef)(function(h,p){var a=y(),f=h.children,l=m()(h,c),j=(0,R.useState)(h.children),u=B()(j,2),Z=u[0],g=u[1];return(0,R.useEffect)(function(){if(typeof f=="string"){g(f.slice(0,1));return}g(f)},[f]),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(a,{}),(0,O.jsx)(A.Z,s()(s()({ref:p},l),{},{children:Z}))]})}),o=v},72997:function(dn,z,n){n.d(z,{Z:function(){return p}});var b=n(26068),s=n.n(b),w=n(67825),B=n.n(w),F=n(45893),m=n(75605),A=n(42478),R=n(40500),S=n(75271),k=n(31209),D=n(53649),C=n.n(D),y=n(88974),O,c=(0,y.Z)(O||(O=C()([`
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
    
    .`,`-breadcrumb-dropdown-icon {
      font-size: 16px !important;
    }
  }
  
  .`,`-breadcrumb-dropdown-overlay {
    display: flex;
    justify-content: center;
  }
}
`])),function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix}),v=n(52676),o=["items"],h=function(f){var l=f.items,j=l===void 0?[]:l,u=B()(f,o),Z=(0,k.getCommonConfig)(),g=Z.sparkPrefix,H=c(),J=S.useMemo(function(){return j.map(function(V){var _=V.title,Y=[];return V.iconUrl&&Y.push((0,v.jsx)(m.Z,{size:20,src:V.iconUrl},"avatar")),V.dropdown?Y.push((0,v.jsxs)("span",{className:"".concat(g,"-breadcrumb-dropdown-title"),children:[V.title,(0,v.jsx)(F.Z,{size:16})]},"title")):Y.push((0,v.jsx)("span",{children:V.title},"title")),V.dropdown?_=(0,v.jsx)(A.Z,{menu:{items:V.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(g,"-breadcrumb-dropdown"),children:(0,v.jsx)("span",{children:Y})}):(V.iconUrl||Y.length>1)&&(_=(0,v.jsx)("span",{className:"".concat(g,"-breadcrumb-item-content"),children:Y})),s()(s()({},V),{},{title:_})})},[j]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(H,{}),(0,v.jsx)(R.Z,s()(s()({},u),{},{items:J,className:"".concat(g,"-breadcrumb ").concat(u.className||"")}))]})},p=h},72271:function(dn,z,n){n.d(z,{Z:function(){return v}});var b=n(26068),s=n.n(b),w=n(67825),B=n.n(w),F=n(31209),m=n(96971),A=n(82187),R=n.n(A),S=n(53649),k=n.n(S),D=n(88974),C,y=(0,D.Z)(C||(C=k()([`
.`,`-card {
  border-radius: 6px;
  background-color: var(--`,`-color-bg-base);
  border: 1px solid var(--`,`-color-border-secondary);
}

.`,`-card {
  transition: box-shadow 0.4s ease;
  cursor: pointer;
  
  .`,`-card-body {
    padding: 0;
  }
  
  &:hover {
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.08);
  }
}

.`,`-card-wrapper {
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  gap: 4px;
  
  > *:only-child {
    gap: 0;
  }
  
  .`,`-title {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    /* \u4E2D\u6027\u8272/color-text */
    color: var(--`,`-color-text);
  }
  
  .`,`-info {
    font-size: 12px;
    font-weight: normal;
    line-height: 18px;
    color: var(--`,`-color-text-tertiary);
  }
}
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix}),O=n(52676),c=["title","info","children","className"],v=function(o){var h=o.title,p=o.info,a=o.children,f=o.className,l=B()(o,c),j=y(),u=(0,F.getCommonConfig)(),Z=u.sparkPrefix;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(j,{}),(0,O.jsx)(m.Z,s()(s()({className:R()("".concat(Z,"-card"),f)},l),{},{title:null,children:(0,O.jsxs)("div",{className:"".concat(Z,"-card-wrapper"),children:[h&&(0,O.jsx)("div",{className:"".concat(Z,"-title"),children:h}),p&&(0,O.jsx)("div",{className:"".concat(Z,"-info"),children:p}),a&&(0,O.jsx)("div",{className:"".concat(Z,"-content"),children:a})]})}))]})}},94969:function(dn,z,n){n.d(z,{Z:function(){return v}});var b=n(26068),s=n.n(b),w=n(67825),B=n.n(w),F=n(80733),m=n(75271),A=n(31209),R=n(53649),S=n.n(R),k=n(88974),D,C=(0,k.Z)(D||(D=S()([`
.`,`-checkbox {
  .`,`-checkbox-wrapper-disabled {
    .`,`-checkbox-label {
      color: var(--`,`-color-text);
    }
  }
  
  .`,`-checkbox-inner {
    border: 1px solid var(--`,`-color-border-secondary);
  }
  
  .`,`-checkbox-wrapper:hover {
    .`,`-checkbox-inner {
      border-color: var(--`,`-color-border-secondary);
    }
  }
  
  .`,`-checkbox-checked {
    .`,`-checkbox-inner {
      border-color: var(--`,`-color-primary);
      background-color: var(--`,`-color-primary);
    }
  }
  
  .`,"-checkbox-checked.",`-checkbox-disabled {
    .`,`-checkbox-inner {
      background-color: var(--`,`-color-fill-disable);
      border-color: var(--`,`-color-fill-disable);
      
      &::after {
        border-color: var(--`,`-color-text-white);
      }
    }
  }
  
  .`,`-checkbox-disabled {
    .`,`-checkbox-inner {
      background-color: var(--`,`-color-fill-secondary);
      border-color: var(--`,`-color-fill-secondary);
    }
  }
}
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),y=n(52676),O=["description","descriptionClassName","descriptionStyle","children"],c=function(h){var p=h.description,a=h.descriptionClassName,f=h.descriptionStyle,l=h.children,j=B()(h,O),u=(0,A.getCommonConfig)(),Z=u.antPrefix,g=u.sparkPrefix,H=C(),J={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(Z,"-color-text-tertiary)")};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(H,{}),(0,y.jsxs)("div",{className:"".concat(g,"-checkbox"),children:[(0,y.jsx)(F.Z,s()(s()({},j),{},{children:l})),p&&(0,y.jsx)("div",{className:a,style:s()(s()({},J),f),children:p})]})]})};c.Group=F.Z.Group;var v=c},43274:function(dn,z,n){n.d(z,{ZP:function(){return sn},xO:function(){return K}});var b=n(26068),s=n.n(b),w=n(15558),B=n.n(w),F=n(31209),m=n(72717),A=n(20660),R=n(84669),S=n(74209),k=n(81246),D=n(44949),C=n(99897),y=n(19487),O=n(70667),c=n(10432),v=n(24365),o=n(47107),h=n(56664),p=n(15222),a=n(45372),f=n(80047),l=n(82187),j=n.n(l),u=n(28640),Z=n(75271),g=n(53649),H=n.n(g),J=n(88974),V,_=(0,J.Z)(V||(V=H()([`
.`,`-code-block {
  width: 100%;
}

.cm-theme {
  border: none !important;
  border-radius: 0 !important;
}

.cm-gutters {
  border-right: none !important;
  background-color: var(--`,`-color-bg-base) !important;
}

.cm-editor {
  background-color: var(--`,`-color-bg-base) !important;
}

.cm-gutterElement:not(:first-child) {
  color: var(--`,`-color-text-tertiary);
  height: 24px !important;
  line-height: 24px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span:not([title*="Unfold line"]) {
    height: 30px !important;
  }
}

.cm-line {
  height: 24px !important;
  line-height: 24px !important;
}

.cm-lineNumbers .cm-gutterElement {
  padding: 0px 4px 0px 12px !important;
}

.cm-activeLine,
.cm-activeLineGutter {
  background-color: var(--`,`-color-fill-secondary) !important;
}

.cm-button {
  background-image: none !important;
  background: var(--`,`-color-bg-base) !important;
  border: 1px solid var(--`,`-color-border-secondary) !important;
  border-radius: 4px !important;
  
  &:hover {
    color: var(--`,`-color-text-secondary);
    cursor: pointer;
  }
}

.cm-search {
  background: var(--`,`-color-fill-secondary) !important;
}

.cm-panel.cm-search label {
  display: inline-flex;
  align-items: center;
}

.cm-panel.cm-search [name=close] {
  right: 8px !important;
  background: none !important;
  font-size: 16px !important;
  color: var(--`,`-color-text-tertiary) !important;
}

.cm-textfield {
  border-radius: 4px;
}

.cm-panel.cm-search input[type=checkbox] {
  border: 1px solid var(--`,`-color-border-secondary) !important;
}

.cm-focused {
  outline: none !important;
}
`])),function(I){return I.sparkPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix}),Y=n(52676),K={javascript:[(0,D.eJ)()],jsx:[(0,D.eJ)()],python:[(0,c.Vs)()],json:[(0,C.AV)()],java:[(0,k.C)()],yaml:[(0,v.rV)()],php:[(0,O.h)()],go:[(0,R.go)()],csharp:[(0,m.N)()],css:[(0,A.iv)()],html:[(0,S.dy)()],curl:[],markdown:[(0,y.JH)()]},en={javascript:[(0,o.Q2)()],json:[(0,o.Q2)(),(0,o.ir)((0,C.ap)())]},un=function(){var fn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"{}",pn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,ln=fn;try{ln=JSON.stringify(JSON.parse(fn),null,pn)}catch(Sn){}return ln},vn=function(fn){var pn,ln=(0,F.getCommonConfig)(),Sn=Z.useContext(a.ZP.ConfigContext),gn=((pn=Sn.theme)===null||pn===void 0?void 0:pn.algorithm)===f.Z.darkAlgorithm,hn=ln.sparkPrefix,X=_(),an=(0,Z.useMemo)(function(){return fn.theme===void 0?gn?h.Pc:h.Zp:fn.theme==="dark"?h.Pc:h.Zp},[gn]),tn=typeof fn.language=="string"?[].concat(B()(K[fn.language]||[]),B()(fn.value&&fn.language in en?en[fn.language]:[])):fn.language.reduce(function(xn,Pn){return[].concat(B()(xn),[K[Pn]])},[]);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(X,{}),(0,Y.jsx)("div",{className:j()("".concat(hn,"-code-block"),fn.className),children:(0,Y.jsx)(p.ZP,s()({extensions:tn,value:fn.language==="json"?un(fn.value):fn.value,theme:an},(0,u.Z)(fn,["language","theme","extensions","value"])))})]})},sn=vn},55655:function(dn,z,n){n.d(z,{Z:function(){return D}});var b=n(26068),s=n.n(b),w=n(9483),B=n(53649),F=n.n(B),m=n(88974),A,R=(0,m.Z)(A||(A=F()([`
.`,`-collapse {
  background-color: var(--`,`-color-fill-tertiary);
  border: 1px solid var(--`,`-color-border-secondary);
  border-radius: var(--`,`-border-radius);
  
  .`,`-collapse-content {
    color: var(--`,`-color-text);
    background-color: var(--`,`-color-bg-base);
    border-top: 1px solid var(--`,`-color-border-secondary);
  }
  
  & > .`,`-collapse-item {
    border-bottom: 1px solid var(--`,`-color-border-secondary);
    
    & > .`,`-collapse-header {
      color: var(--`,`-color-text);
      font-weight: 500;
      line-height: 24px;
      align-items: center;
      
      .`,`-collapse-expand-icon {
        width: 32px;
        height: 32px;
        padding: 0;
        justify-content: center;
        margin-right: 8px;
      }
      
      .`,`-collapse-arrow {
        font-size: 15px;
      }
      
      .`,`-collapse-extra {
        height: 32px;
        display: flex;
        align-items: center;
        margin-left: 8px;
      }
    }
  }
}
`])),function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix}),S=n(52676),k=function(y){var O=R();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(O,{}),(0,S.jsx)(w.Z,s()({},y))]})},D=k},33996:function(dn,z,n){n.d(z,{Z:function(){return a}});var b=n(26068),s=n.n(b),w=n(82092),B=n.n(w),F=n(48305),m=n.n(F),A=n(31209),R=n(45893),S=n(83516),k=n(82187),D=n.n(k),C=n(75271),y=n(53649),O=n.n(y),c=n(88974),v,o=(0,c.Z)(v||(v=O()([`
.`,`-collapse-panel {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--`,`-color-border-secondary);
  transition: all 0.3s ease;
  background-color: var(--`,`-color-bg-base);
  
  &.collapsible:not(.expanded) {
    cursor: pointer;
  }
  
  .`,`-collapse-panel-header {
    display: flex;
    justify-content: space-between;
    background: var(--`,`-color-fill-secondary);
    height: 32px;
    line-height: 32px;
    border-radius: 7px 7px 0 0;
    align-items: center;
    user-select: none;
    position: relative;
    cursor: pointer;
    padding: 0 12px;
    
    .collapsible:hover & {
      background: #f0f2f3;
    }
  }
  
  .`,`-collapse-panel-extra {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    float: right;
  }
  
  .`,`-collapse-panel-title {
    color: var(--`,`-color-text);
    font-size: 14px;
    display: flex;
  }
  
  .`,`-collapse-panel-icon-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
  }
  
  .`,`-collapse-panel-icon {
    font-size: 18px;
    transition: transform 0.3s ease;
  }
  
  .`,`-collapse-panel-content {
    position: relative;
    border-radius: 0 0 6px 6px;
    transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }
  
  .`,`-collapse-panel-contentWrapper {
    &.scrollable {
      height: 100%;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--`,`-color-fill) transparent;
      
      &::-webkit-scrollbar {
        width: 6px;
      }
      
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      
      &::-webkit-scrollbar-thumb {
        background-color: var(--`,`-color-fill);
        border-radius: 3px;
      }
      
      &::-webkit-scrollbar-thumb:hover {
        background-color: var(--`,`-color-fill);
      }
    }
  }
  
  .`,`-collapse-panel-mask {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      var(--`,`-color-bg-base) 100%
    );
    pointer-events: none;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  
  .`,`-collapse-panel-expanded {
    .`,`-collapse-panel-mask {
      opacity: 0;
    }
  }
}
`])),function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix}),h=n(52676),p=function(l){var j,u,Z,g,H,J,V=l.collapsedHeight,_=l.expandedHeight,Y=l.title,K=Y===void 0?"":Y,en=l.expandOnPanelClick,un=l.extra,vn=l.children,sn=l.defaultExpanded,I=(0,C.useState)(sn),fn=m()(I,2),pn=fn[0],ln=fn[1],Sn=(0,C.useState)(!0),gn=m()(Sn,2),hn=gn[0],X=gn[1],an=(0,C.useState)(V),tn=m()(an,2),xn=tn[0],Pn=tn[1],Fn=(0,C.useRef)(null),L=(0,A.getCommonConfig)(),Cn=L.sparkPrefix,Ln=L.antPrefix,An=o();(0,C.useEffect)(function(){Fn.current&&Pn(pn&&_?_:pn?Fn.current.scrollHeight:V)},[pn,V,_,vn]);var bn=function(zn){zn.stopPropagation(),zn.preventDefault(),ln(function(te){return!te})},Rn=function(zn){zn.stopPropagation(),zn.preventDefault(),pn||ln(!0)},Jn=function(){X(!0)},Gn=function(){X(!0)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(An,{}),(0,h.jsxs)("div",{className:D()("".concat(Cn,"-collapse-panel"),{collapsible:!pn&&en},(j=l.classNames)===null||j===void 0?void 0:j.wrapper),style:(u=l.styles)===null||u===void 0?void 0:u.wrapper,onClick:en?Rn:void 0,onMouseEnter:en?Jn:void 0,onMouseLeave:en?Gn:void 0,children:[(0,h.jsxs)("div",{className:D()("".concat(Cn,"-collapse-panel-header"),(Z=l.classNames)===null||Z===void 0?void 0:Z.header),style:(g=l.styles)===null||g===void 0?void 0:g.header,onClick:bn,children:[(0,h.jsxs)("span",{className:"".concat(Cn,"-collapse-panel-title"),children:[K,(0,h.jsxs)("div",{className:"".concat(Cn,"-collapse-panel-icon-wrapper"),children:[!pn&&hn&&en&&(0,h.jsx)(R.Z,{style:{fontSize:"18px"}}),pn&&hn&&en&&(0,h.jsx)(S.Z,{style:{fontSize:"18px"}})]})]}),un&&(0,h.jsx)("div",{className:"".concat(Cn,"-collapse-panel-extra"),onClick:function(zn){zn.stopPropagation(),zn.preventDefault()},children:un})]}),(0,h.jsxs)("div",{className:D()("".concat(Cn,"-collapse-panel-content"),B()({},"".concat(Cn,"-collapse-panel-expanded"),pn),(H=l.classNames)===null||H===void 0?void 0:H.content),style:s()({height:xn},(J=l.styles)===null||J===void 0?void 0:J.content),children:[(0,h.jsx)("div",{ref:Fn,className:"".concat("".concat(Cn,"-collapse-panel-contentWrapper")," ",pn&&_?"scrollable":""),children:vn}),!pn&&(0,h.jsx)("div",{className:"".concat(Cn,"-collapse-panel-mask")})]})]})]})},a=p},59597:function(dn,z,n){n.d(z,{Z:function(){return j}});var b=n(26068),s=n.n(b),w=n(67825),B=n.n(w),F=n(31209),m=n(66508),A=n(80047),R=n(45372),S=n(22940),k=n(82187),D=n.n(k),C=n(75271),y=n(53649),O=n.n(y),c=n(88974),v,o=(0,c.Z)(v||(v=O()([`
.`,`-picker {
  border-color: var(--`,`-color-border-secondary);
  background-color: var(--`,`-color-bg-base);
  
  &.`,`-picker-disabled {
    color: var(--`,`-color-text-quaternary);
    border-color: var(--`,`-color-border-secondary) !important;
    background-color: var(--`,`-color-fill-tertiary) !important;
    cursor: not-allowed;
    
    .`,`-picker-suffix {
      color: var(--`,`-color-text-quaternary) !important;
    }
  }
  
  .`,`-picker-suffix {
    margin-left: 8px;
    color: var(--`,`-color-text-tertiary) !important;
  }
  
  .`,`-picker-clear {
    margin-right: 3px;
  }
  
  .`,`-picker-range-separator {
    display: flex;
    
    .`,`-picker-separator {
      width: 8px;
      height: 1px;
      background: var(--`,`-color-text-tertiary);
      
      .anticon {
        display: none;
      }
    }
  }
}

.`,`-picker-dropdown {
  .`,`-picker-panel-container {
    border: 1px solid var(--`,`-color-border-secondary);
  }
  
  .`,`-picker-range-arrow {
    display: none !important;
  }
  
  .`,"-picker-time-panel-column > li.",`-picker-time-panel-cell-selected {
    .`,`-picker-time-panel-cell-inner {
      background: var(--`,`-color-primary-bg);
    }
  }
  
  .`,`-picker-now-btn {
    color: var(--`,`-color-primary);
  }
}

.`,`-picker-selection-item {
  border-radius: 4px;
  background-color: var(--`,`-color-mauve-bg) !important;
}

.`,`-picker-selection-item-content {
  color: var(--`,`-color-mauve);
}

.`,`-picker-selection-item-remove {
  .anticon-close {
    font-size: 14px;
    color: var(--`,`-color-mauve);
  }
}
`])),function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix}),h=n(52676),p=["className","popupClassName"],a=["className","popupClassName"],f=function(Z){var g=Z.className,H=Z.popupClassName,J=B()(Z,p),V=A.Z.useToken(),_=V.token,Y=(0,F.getCommonConfig)(),K=Y.sparkPrefix,en=o();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(en,{}),(0,h.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:_.colorPrimary,paddingInline:8}}},children:(0,h.jsx)(S.default,s()({suffixIcon:(0,h.jsx)(m.Z,{style:{fontSize:"20px"}}),className:D()("".concat(K,"-picker"),g),popupClassName:D()("".concat(K,"-picker-dropdown"),H)},J))})]})},l=function(Z){var g=Z.className,H=Z.popupClassName,J=B()(Z,a),V=A.Z.useToken(),_=V.token,Y=(0,F.getCommonConfig)(),K=Y.sparkPrefix,en=o();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(en,{}),(0,h.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:_.colorPrimary,paddingInline:8}}},children:(0,h.jsx)(S.default.RangePicker,s()({suffixIcon:(0,h.jsx)(m.Z,{style:{fontSize:"20px"}}),className:D()("".concat(K,"-picker"),g),popupClassName:D()("".concat(K,"-picker-dropdown"),H),popupStyle:{padding:0}},J))})]})};f.RangePicker=l;var j=f},16721:function(dn,z,n){n.d(z,{Z:function(){return a}});var b=n(82092),s=n.n(b),w=n(26068),B=n.n(w),F=n(67825),m=n.n(F),A=n(31209),R=n(80047),S=n(96527),k=n(82187),D=n.n(k),C=n(53649),y=n.n(C),O=n(88974),c,v=(0,O.Z)(c||(c=y()([`
.`,`-descriptions {
  .`,`-descriptions-item-label {
    color: var(--`,`-color-text-tertiary);
  }
  
  .`,`-descriptions-item-content {
    color: var(--`,`-color-text);
  }
  
  .`,`-descriptions-item-label,
  .`,`-descriptions-item-content {
    line-height: 24px;
  }
}

.`,`-descriptions-vertical {
  .`,"-descriptions-item:has(.",`-descriptions-item-label) {
    padding-bottom: var(--`,`-descriptions-vertical-label-padding-bottom);
  }
  
  .`,"-descriptions-item:has(.",`-descriptions-item-content) {
    padding-bottom: var(--`,`-descriptions-vertical-content-padding-bottom);
  }
}
`])),function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix}),o=n(52676),h=["className","layout","colon","style"],p=function(l){var j,u,Z=v(),g=l.className,H=l.layout,J=l.colon,V=J===void 0?!1:J,_=l.style,Y=m()(l,h),K=(0,A.getCommonConfig)(),en=K.antPrefix,un=R.Z.useToken(),vn=un.token;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Z,{}),(0,o.jsx)(S.Z,B()({className:D()(g,H==="vertical"&&"".concat(en,"-descriptions-vertical")),layout:H,colon:V,style:B()(s()(s()({},"--".concat(en,"-descriptions-vertical-label-padding-bottom"),"".concat((j=vn.Descriptions.verticalLabelPaddingBottom)!==null&&j!==void 0?j:4,"px")),"--".concat(en,"-descriptions-vertical-content-padding-bottom"),"".concat((u=vn.Descriptions.verticalContentPaddingBottom)!==null&&u!==void 0?u:24,"px")),_)},Y))]})},a=p},90088:function(dn,z,n){n.d(z,{Z:function(){return O}});var b=n(26068),s=n.n(b),w=n(31209),B=n(71649),F=n(42478),m=n(75271),A=n(53649),R=n.n(A),S=n(88974),k,D=(0,S.Z)(k||(k=R()([`
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
`])),function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),C=n(52676),y=function(v){var o,h,p=(0,w.getCommonConfig)(),a=p.antPrefix,f=(0,m.useMemo)(function(){var j;if(!((j=v.menu)!==null&&j!==void 0&&j.selectable)||!v.menu){var u;return((u=v.menu)===null||u===void 0?void 0:u.items)||[]}return v.menu.items.map(function(Z){var g={},H=Z.label;return H&&(g.label=(0,C.jsxs)("div",{className:"".concat(a,"-dropdown-check-wrapper"),children:[H,(0,C.jsx)("span",{className:"".concat(a,"-dropdown-check-icon"),children:(0,C.jsx)(B.Z,{})})]})),s()(s()({},Z),g)})},[(o=v.menu)===null||o===void 0?void 0:o.items,(h=v.menu)===null||h===void 0?void 0:h.selectable]),l=D();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l,{}),(0,C.jsx)(F.Z,s()(s()({},v),{},{menu:s()(s()({},v.menu),{},{items:f}),overlayStyle:s()({},v.overlayStyle)}))]})},O=y},6401:function(dn,z,n){n.d(z,{Z:function(){return f}});var b=n(26068),s=n.n(b),w=n(31209),B=n(65122),F=n(75271),m=n(15306),A=n(53649),R=n.n(A),S=n(88974),k,D=(0,S.Z)(k||(k=R()([`
.`,`-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.`,`-empty-texture,
.`,`-empty-image {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
}

.`,`-empty-image svg {
  margin-top: 16.875%;
  width: 33.75%;
  height: 33.75%;
}

.`,`-empty-texture svg {
  width: 100%;
  height: 100%;
}

.`,`-empty-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--`,`-color-text);
}

.`,`-empty-description {
  font-size: 12px;
  line-height: 20px;
  color: var(--`,`-color-text-secondary);
  text-align: center;
  width: 100%;
}
`])),function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix}),C=n(48305),y=n.n(C),O=n(88045),c=n(52676),v=document.querySelector("#empty-svg-container");function o(l){var j=(0,O.ZP)(),u=y()(j,5),Z=u[4],g=l.svgUrl,H=l.tokenMap,J=H===void 0?{}:H,V=l.className,_=l.size,Y=g.includes(".svg"),K=(0,F.useState)(""),en=y()(K,2),un=en[0],vn=en[1];return(0,F.useEffect)(function(){if(!v){var sn=document.createElement("div");sn.innerHTML="<svg></svg>",v=sn.querySelector("svg"),v.id="empty-svg-container",v.setAttribute("aria-hidden","true"),v.style.position="absolute",v.style.width="0",v.style.height="0",v.style.overflow="hidden",document.body.insertBefore(v,document.body.firstChild)}},[]),(0,F.useEffect)(function(){v&&Z!==null&&Z!==void 0&&Z.key&&(v.classList.forEach(function(sn){return v.classList.remove(sn)}),v.classList.add(Z.key))},[Z==null?void 0:Z.key]),(0,F.useEffect)(function(){if(Y){var sn=btoa(g),I='<svg><use xlink:href="#'.concat(sn,'"></use></svg>');if(vn(I),!document.getElementById(sn)){var fn='<symbol id="'.concat(sn,'"></symbol>');v.innerHTML=v.innerHTML+fn,fetch(g).then(function(pn){return pn.text()}).then(function(pn){var ln=pn;Object.keys(J).forEach(function(an){ln=ln.replace(new RegExp(an,"g"),J[an])});var Sn=ln.match(/viewBox="([^"]*)"/),gn=Sn?Sn[1]:"",hn=document.getElementById(sn),X=ln.replace(/<svg[^>]*>/,"");X=X.replace(/<\/svg>/,""),gn&&hn.setAttribute("viewBox",gn),hn.innerHTML=X})}}},[g]),Y?(0,c.jsx)("div",{className:V,dangerouslySetInnerHTML:{__html:un},style:{width:_,height:_}}):(0,c.jsx)("img",{src:g,className:V,style:{width:_,height:_}})}var h={url:"https://gw.alicdn.com/imgextra/i3/O1CN01r3f3Si24iFTRz9Bho_!!6000000007424-55-tps-320-320.svg",tokenMap:{"#CDD0DC":"color-border"}},p={noData:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01mWN5tE1MAxb2z7LwA_!!6000000001395-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#BCB5FF":"color-primary-border-hover","#FFFFFF":"color-bg-base","#615CED":"color-primary","#1ACDD0DC":"color-fill-quaternary","#CDD0DC":"color-border"}},networkError:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01su6GHG1RupL5K5TOQ_!!6000000002172-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},404:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01GE0jXZ1xpqjvMjCZh_!!6000000006493-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#26CDD0DC":"color-fill-tertiary","#CDD0DC":"color-border","#F3F0FF":"color-primary-bg","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},arrears:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01xN8uYv1Dz2MLvrFAF_!!6000000000286-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#F3F0FF":"color-primary-bg","#615CED":"color-primary"}},desktopOnly:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01ZzNku41rshVhRVh9x_!!6000000005687-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},noAudio:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01fTQ6vi1GXxnIrmizf_!!6000000000633-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#615CED":"color-primary","#E6E8EE":"color-border-secondary"}},noImage:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01zQAH9A1oJUD9XDtmi_!!6000000005204-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noVideo:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01kqss5i1JuoOrJ8fNV_!!6000000001089-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noAccess:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01RwpRz91oGHREFlmdY_!!6000000005197-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}},error:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01TlQR4c1L3nn4DkG2z_!!6000000001244-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noModel:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01BSPmLi1iaXGByjbne_!!6000000004429-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#5CCDD0DC":"color-fill","#615CED":"color-primary"}},noApp:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01stSIP31fzmEtpppWc_!!6000000004078-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#33CDD0DC":"color-fill-secondary","#615CED":"color-primary"}},success:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01sGzZ5B1Bx5RQAjUe5_!!6000000000011-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#5BB98B":"color-success","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},failed:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01Fd1Gmx1QNYxQ8hj0H_!!6000000001964-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FF7875":"color-error-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},inProgress:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01w2RXic1LADKqVxH56_!!6000000001258-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#9189FA":"color-primary-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},stayTuned:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01W2Kbyc26dmqmatyoB_!!6000000007685-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}}},a=function(j){var u=j.imageStyle,Z=j.title,g=j.description,H=g===void 0?"No Data":g,J=j.children,V=j.texture,_=V===void 0?!0:V,Y=j.size,K=Y===void 0?320:Y,en=j.autoFit,un=en===void 0?!0:en,vn=j.okText,sn=j.okType,I=sn===void 0?"primary":sn,fn=j.okButtonProps,pn=j.onOk,ln=j.type||"noData",Sn=(0,w.getCommonConfig)(),gn=Sn.sparkPrefix,hn=Sn.isDarkMode,X=Sn.antPrefix,an=j.image||p[ln].url,tn=(0,F.useMemo)(function(){var Cn,Ln=s()({},(Cn=p[ln])===null||Cn===void 0?void 0:Cn.tokenMap);return Ln&&Object.keys(Ln).forEach(function(An){Ln[An]="var(--".concat(X,"-").concat(Ln[An],")")}),Ln},[ln]),xn=(0,F.useMemo)(function(){var Cn=s()({},h.tokenMap);return Object.keys(Cn).forEach(function(Ln){Cn[Ln]="var(--".concat(X,"-").concat(Cn[Ln],")")}),Cn},[hn]),Pn=D(),Fn=typeof K=="string"?parseFloat(K.replace(/px/i,"")):K!=null?K:0,L=un?{maxWidth:"100%",aspectRatio:"1 / 1",width:K,height:"auto"}:{width:K,height:K};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(Pn,{}),(0,c.jsxs)("div",{className:"".concat(gn,"-empty ").concat(j.className||""),style:s()(s()({},L),u),children:[_&&(0,c.jsx)(o,{size:un?"100%":K,svgUrl:h.url,tokenMap:xn,className:"".concat(gn,"-empty-texture")}),(0,c.jsx)(o,{size:un?"100%":K,svgUrl:an,tokenMap:tn,className:"".concat(gn,"-empty-image")}),(0,c.jsxs)(B.Z,{vertical:!0,align:"center",style:{marginTop:"52.5%"},children:[Z&&(0,c.jsx)("div",{className:"".concat(gn,"-empty-title"),style:{marginBottom:H?.025*Fn:0},children:Z}),H&&(0,c.jsx)("div",{className:"".concat(gn,"-empty-description"),children:H}),!!vn&&(0,c.jsx)("div",{style:{marginTop:.05*Fn},children:(0,c.jsx)(m.Z,s()(s()({type:I,onClick:pn},fn),{},{children:vn}))}),!!J&&(0,c.jsx)("div",{style:{marginTop:.05*Fn},children:J})]})]})]})},f=a},94577:function(dn,z,n){n.d(z,{Z:function(){return Z}});var b=n(31759),s=n.n(b),w=n(67825),B=n.n(w),F=n(26068),m=n.n(F),A=n(31209),R=n(62910),S=n(94592),k=n(71416),D=n(82187),C=n.n(D),y=n(75271),O=n(53649),c=n.n(O),v=n(88974),o,h=(0,v.Z)(o||(o=c()([`
.`,`-form {
  .`,`-required-mark {
    color: var(--`,`-color-error);
    line-height: 1;
    margin-top: 0;
    font-size: 16px;
  }
  
  .`,"-form-item .",`-form-item-label {
    text-align: left;
  }
}

.`,"-form-item .",`-form-item-label > label {
  font-weight: 500;
  white-space: normal;
  font-size: 13px;
  line-height: 20px;
  color: var(--`,`-color-text);
  gap: 4px;
}

.`,`-form-label-margin-small {
  .`,`-form-item-label > label {
    margin-right: 8px;
  }
}

.`,`-col {
  min-height: unset;
}
`])),function(g){return g.sparkPrefix},function(g){return g.sparkPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.sparkPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),p=n(52676),a=["tooltip"],f=(0,y.forwardRef)(function(g,H){var J=g.labelMarginRight,V=J===void 0?void 0:J,_=(0,y.useRef)(null),Y=(0,A.getCommonConfig)(),K=Y.sparkPrefix,en=h();return(0,y.useImperativeHandle)(H,function(){return _.current}),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(en,{}),(0,p.jsx)(S.Z,m()(m()({},g),{},{className:C()(g.className,"".concat(K,"-form"),V==="small"&&"".concat(K,"-form-label-margin-small")),ref:_,requiredMark:function(vn,sn){return(0,p.jsxs)(p.Fragment,{children:[vn,sn.required&&(0,p.jsx)("span",{className:"".concat(K,"-required-mark"),children:"*"})]})}}))]})}),l=function(H){var J=H.tooltip,V=B()(H,a),_=(0,p.jsx)(R.Z,{});function Y(){if(J){var K=s()(J)==="object"&&!y.isValidElement(J)?m()(m()({},J),{},{icon:J.icon||_}):{title:J,icon:_};return K}}return(0,p.jsx)(S.Z.Item,m()(m()({},V),{},{tooltip:Y(),labelCol:H.labelCol||(H.layout==="vertical"?{flex:"unset"}:void 0)}))},j=l;j.useStatus=k.Z.useStatus;var u=f;u.Item=j,u.List=S.Z.List,u.ErrorList=S.Z.ErrorList,u.Provider=S.Z.Provider,u.useForm=S.Z.useForm,u.useFormInstance=S.Z.useFormInstance,u.useWatch=S.Z.useWatch;var Z=u},3297:function(dn,z,n){n.d(z,{Z:function(){return v}});var b=n(26068),s=n.n(b),w=n(1615),B=n(31209),F=n(20695),m=n(17191),A=n(75271),R=n(53649),S=n.n(R),k=n(88974),D,C=(0,k.Z)(D||(D=S()([`
.`,`-image {
  border-radius: var(--`,`-border-radius);
  overflow: hidden;
  
  .`,`-image-mask {
    background-color: var(--`,`-color-bg-mask);
    
    .`,`-image-mask-info {
      display: flex;
      align-items: center;
    }
    
    .`,`-image-mask-info-text {
      font-weight: 500;
      line-height: 24px;
    }
  }
}
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),y=n(52676),O=function(h){var p=C(),a=(0,B.getCommonConfig)(),f=a.antPrefix,l=(0,A.useMemo)(function(){var j={transitionName:""},u=h.preview;return u===!1?!1:u===!0?j:s()(s()({mask:(0,y.jsxs)("div",{className:"".concat(f,"-image-mask-info"),children:[(0,y.jsx)(F.Z,{className:"".concat(f,"-image-mask-info-icon")}),(0,y.jsx)("span",{className:"".concat(f,"-image-mask-info-text"),children:w.Z.get({id:"components.commonComponents.Image.Preview",dm:"\u9884\u89C8"})})]})},u),j)},[h.preview]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p,{}),(0,y.jsx)(m.Z,s()({preview:l},h))]})},c=O;c.PreviewGroup=m.Z.PreviewGroup;var v=c},65627:function(dn,z,n){n.d(z,{Z:function(){return f}});var b=n(26068),s=n.n(b),w=n(82092),B=n.n(w),F=n(67825),m=n.n(F),A=n(31209),R=n(50239),S=n(82187),k=n.n(S),D=n(75271),C=n(53649),y=n.n(C),O=n(88974),c,v=(0,O.Z)(c||(c=y()([`
.`,`-input-outlined,
.`,"-input-outlined.",`-input-disabled,
.`,`-input-outlined[disabled] {
  border-color: var(--`,`-color-border-secondary);
}

.`,`-input-outlined {
  background-color: var(--`,`-color-bg-base);
}

.`,`-input {
  font-weight: 400;
  border-radius: 6px;
  
  .`,`-input-show-count-suffix,
  .`,`-input-data-count-suffix {
    color: var(--`,`-color-text-tertiary);
  }
  
  &::placeholder {
    color: var(--`,`-color-text-tertiary);
  }
}

/* prefix\u95F4\u8DDD */
.`,`-input-affix-wrapper {
  .`,`-input-prefix {
    margin-inline-end: 8px;
    color: var(--`,`-color-text-tertiary);
  }
}

.`,"-input-affix-wrapper .",`-input-clear-icon {
  font-size: 15px;
}

.`,`-input-round {
  border-radius: 999px;
}

.`,`-text-area {
  border-color: var(--`,`-color-border-secondary);
}

.`,`-input-sm {
  height: 24px;
  font-size: 12px;
}
`])),function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix}),o=n(52676),h=["shape"],p=D.forwardRef(function(l,j){var u=l.shape,Z=u===void 0?"default":u,g=m()(l,h),H=(0,A.getCommonConfig)(),J=H.antPrefix,V=v();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(V,{}),(0,o.jsx)(R.Z,s()(s()({},g),{},{className:k()(l.className,B()({},"".concat(J,"-input-round"),Z==="round")),ref:j}))]})}),a=D.forwardRef(function(l,j){var u=(0,A.getCommonConfig)(),Z=u.antPrefix,g=v();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,{}),(0,o.jsx)(R.Z.TextArea,s()(s()({},l),{},{className:k()("".concat(Z,"-text-area"),l.className),ref:j}))]})});Object.assign(p,{TextArea:a,Search:R.Z.Search,Password:R.Z.Password,OTP:R.Z.OTP});var f=p},78853:function(dn,z,n){n.d(z,{Z:function(){return a}});var b=n(26068),s=n.n(b),w=n(82092),B=n.n(w),F=n(67825),m=n.n(F),A=n(31209),R=n(6002),S=n(84674),k=n(82187),D=n.n(k),C=n(53649),y=n.n(C),O=n(88974),c,v=(0,O.Z)(c||(c=y()([`
.`,`-modal {
  .`,`-modal-title {
    min-height: 24px;
  }
  
  .`,`-modal-content {
    padding: 0;
    border: 1px solid var(--`,`-color-border-secondary);
    
    .`,`-modal-header {
      padding: 18px 20px;
      margin-bottom: 0;
      
      .`,`-modal-title {
        line-height: 28px;
        
        .`,`-modal-title-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          
          .`,`-modal-title {
            flex: 1;
          }
          
          .`,`-modal-title-close {
            cursor: pointer;
          }
        }
      }
    }
    
    .`,`-modal-body {
      padding: 20px;
      color: var(--`,`-color-text-secondary);
    }
    
    .`,`-modal-footer {
      padding: 16px 20px;
      margin-top: 0;
      
      .`,`-modal-footer-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .`,`-modal-footer-info {
          font-size: 14px;
          font-weight: normal;
          line-height: 24px;
          color: var(--`,`-color-text-tertiary);
        }
        
        .`,`-modal-footer-origin-node {
          display: flex;
          gap: 12px;
        }
      }
    }
    
    .`,`-modal-close {
      width: 32px;
      height: 32px;
      top: 16px;
      right: 16px;
      
      .`,`-modal-close-icon {
        color: var(--`,`-color-text);
      }
      
      &:hover {
        background: none;
      }
    }
  }
}

.`,`-show-divider {
  .`,`-modal-content {
    .`,`-modal-header {
      border-bottom: 1px solid var(--`,`-color-border-secondary);
    }
    
    .`,`-modal-footer {
      border-top: 1px solid var(--`,`-color-border-secondary);
    }
  }
}
`])),function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix}),o=n(52676),h=["showDivider","closable"],p=function(l){var j=v(),u=(0,A.getCommonConfig)(),Z=u.sparkPrefix,g=l.showDivider,H=g===void 0?!0:g,J=l.closable,V=J===void 0?!0:J,_=m()(l,h),Y=function(vn){return l.info?(0,o.jsxs)("div",{className:"".concat(Z,"-modal-footer-wrapper"),children:[(0,o.jsx)("span",{className:"".concat(Z,"-modal-footer-info"),children:l.info}),(0,o.jsx)("div",{className:"".concat(Z,"-modal-footer-origin-node"),children:vn})]}):vn},K=V?l.closeIcon||(0,o.jsx)(R.Z,{className:"".concat(Z,"-modal-title-close"),onClick:function(vn){var sn;(sn=l.onCancel)===null||sn===void 0||sn.call(l,vn)}}):null,en=l.footer===void 0?Y:l.footer;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{}),(0,o.jsx)(S.Z,s()(s()({},_),{},{closeIcon:null,title:(0,o.jsxs)("div",{className:"".concat(Z,"-modal-title-wrapper"),children:[(0,o.jsx)("div",{className:"".concat(Z,"-modal-title"),children:l.title}),K]}),wrapClassName:D()("".concat(Z,"-modal"),B()({},"".concat(Z,"-show-divider"),H),l.wrapClassName,"animate-in"),footer:en,transitionName:""}))]})};p.useModal=S.Z.useModal,p.success=S.Z.success,p.error=S.Z.error,p.warning=S.Z.warning,p.info=S.Z.info,p.confirm=S.Z.confirm,p.SMALL_WIDTH=640,p.MEDIUM_WIDTH=800,p.LARGE_WIDTH=960;var a=p},31265:function(dn,z,n){var b=n(48305),s=n.n(b),w=n(26068),B=n.n(w),F=n(31209),m=n(1191),A=n(31695),R=n(69898),S=n(96626),k=n(50493),D=n(52676),C=["success","warning","error","info"];function y(c,v){if(c==="success")return(0,D.jsx)(m.Z,{style:{color:"var(--".concat(v,"-color-success)"),fontSize:24}});if(c==="warning")return(0,D.jsx)(A.Z,{style:{color:"var(--".concat(v,"-color-warning)"),fontSize:24}});if(c==="info")return(0,D.jsx)(R.Z,{style:{color:"var(--".concat(v,"-color-info)"),fontSize:24}});if(c==="error")return(0,D.jsx)(S.Z,{style:{color:"var(--".concat(v,"-color-error)"),fontSize:24}})}var O={};O.destroy=k.ZP.destroy,O.open=function(c){var v=(0,F.getCommonConfig)(),o=v.sparkPrefix,h="".concat(o,"-notification");c.className&&(h+=" ".concat(c.className)),k.ZP.open(B()(B()({},c),{},{className:h}))},C.forEach(function(c){O[c]=function(v){var o=(0,F.getCommonConfig)(),h=o.sparkPrefix,p=o.antPrefix,a="".concat(h,"-notification");v.className&&(a+=" ".concat(v.className)),k.ZP[c](B()(B()({},v),{},{className:a,icon:y(c,p)}))}}),O.useNotification=function(c){var v=(0,F.getCommonConfig)(),o=v.sparkPrefix,h=v.antPrefix,p="".concat(o,"-notification"),a=k.ZP.useNotification(c),f=s()(a,2),l=f[0],j=f[1],u={};return C.forEach(function(Z){u[Z]=function(g){return l[Z](B()(B()({},g),{},{className:p,icon:y(Z,h)}))}}),u.open=function(Z){k.ZP.open(B()(B()({},Z),{},{className:p}))},u.destroy=l.destroy,[u,j]},z.Z=O},38250:function(dn,z,n){n.d(z,{X:function(){return F}});var b=n(53649),s=n.n(b),w=n(88974),B,F=(0,w.Z)(B||(B=s()([`
.`,`-pagination {
  color: var(--`,`-color-text) !important;
  font-weight: 500 !important;
  
  .`,`-pagination-total-text {
    font-weight: 500;
  }
  
  .`,`-select-selection-item {
    font-weight: 500;
  }
  
  .`,`-pagination-item-active {
    border-color: var(--`,`-color-border-secondary);
    border-radius: 8px;
    font-weight: 
    
    a {
      color: var(--`,`-color-text) !important;
    }
  }
  
  a {
    color: var(--`,`-color-text) !important;
    font-weight: 500 !important;
  }
  
  .`,`-pagination-jump-next {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .`,`-pagination-jump-prev {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.`,`-pagination {
  .`,`-pagination-prev,
  .`,`-pagination-next,
  .`,`-pagination-jump-prev,
  .`,`-pagination-jump-next {
    font-family: Montserrat;
    display: inline-block !important;
  }
}
`])),function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix})},35084:function(dn,z,n){var b=n(26068),s=n.n(b),w=n(31759),B=n.n(w),F=n(67825),m=n.n(F),A=n(31209),R=n(1615),S=n(74455),k=n(16979),D=n(34232),C=n(65122),y=n(94587),O=n(82187),c=n.n(O),v=n(38250),o=n(52676),h=["hideSwitchButton","className"],p=function(){var f=R.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"}),l=R.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"});return{options:[{label:"10 ".concat(f," / ").concat(l),value:10},{label:"20 ".concat(f," / ").concat(l),value:20},{label:"50 ".concat(f," / ").concat(l),value:50},{label:"100 ".concat(f," / ").concat(l),value:100}]}};z.Z=function(a){var f=a.hideSwitchButton,l=f===void 0?!1:f,j=a.className,u=m()(a,h),Z=(0,A.getCommonConfig)(),g=Z.sparkPrefix,H=(0,v.X)(),J=function(){var K=function(un,vn,sn){return vn==="jump-prev"||vn==="jump-next"?(0,o.jsx)(S.Z,{className:"".concat(g,"-jump-next-icon")}):l||a.itemRender?sn:vn==="prev"?(0,o.jsx)("a",{children:(0,o.jsxs)(C.Z,{gap:8,children:[(0,o.jsx)(k.Z,{})," ",(0,o.jsx)("span",{children:R.Z.get({id:"components.commonComponents.Pagination.PreviousPage",dm:"\u4E0A\u4E00\u9875"})})]})}):vn==="next"?(0,o.jsx)("a",{children:(0,o.jsxs)(C.Z,{gap:8,children:[(0,o.jsx)("span",{children:R.Z.get({id:"components.commonComponents.Pagination.NextPage",dm:"\u4E0B\u4E00\u9875"})})," ",(0,o.jsx)(D.Z,{})]})}):sn};return K},V;u.showSizeChanger!==null&&u.showSizeChanger!==void 0?V=u.showSizeChanger:V=u.total&&u.total>50;var _=function(){return a.showSizeChanger===!0?p():a.showSizeChanger===!1?!1:B()(a.showSizeChanger)==="object"&&a.showSizeChanger?a.showSizeChanger:u.total&&u.total>50?p():!1};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(H,{}),(0,o.jsx)(y.Z,s()(s()({itemRender:J()},u),{},{showSizeChanger:_(),className:c()("".concat(g,"-pagination"),j)}))]})}},29126:function(dn,z,n){var b=n(26068),s=n.n(b),w=n(67825),B=n.n(w),F=n(31209),m=n(88602),A=n(62910),R=n(99090),S=n(58911),k=n(16746),D=n(75271),C=n(52676),y=["icon","type","okButtonProps"],O=D.forwardRef(function(c,v){var o=c.icon,h=c.type,p=h===void 0?"confirm":h,a=c.okButtonProps,f=B()(c,y),l=(0,F.getCommonConfig)(),j=l.antPrefix,u=function(){return o||(p==="confirm"?(0,C.jsx)(m.Z,{style:{color:"var(--".concat(j,"-color-warning)")}}):p==="info"?(0,C.jsx)(A.Z,{style:{color:"var(--".concat(j,"-color-info)")}}):p==="warning"?(0,C.jsx)(m.Z,{style:{color:"var(--".concat(j,"-color-warning)")}}):p==="error"?(0,C.jsx)(R.Z,{style:{color:"var(--".concat(j,"-color-error)")}}):p==="success"?(0,C.jsx)(S.Z,{style:{color:"var(--".concat(j,"-color-success)")}}):(0,C.jsx)(m.Z,{style:{color:"var(--".concat(j,"-color-warning)")}}))},Z=function(){var H={};return["warning","error"].includes(p)&&(H.danger=!0),s()(s()({},H),a||{})};return(0,C.jsx)(k.Z,s()(s()({},f),{},{ref:v,icon:u(),okButtonProps:Z()}))});z.Z=O},76617:function(dn,z,n){var b=n(26068),s=n.n(b),w=n(31209),B=n(76892),F=n(81316),m=n(75271),A=n(52676),R=m.forwardRef(function(S,k){var D=S.content===""||S.content===void 0||S.content===null,C=S.title===""||S.title===void 0||S.title===null,y=S.open!==void 0&&S.open!==null?S.open:D&&C?!1:void 0,O=(0,w.getCommonConfig)(),c=O.antPrefix;return(0,A.jsx)(F.Z,s()(s()({},S),{},{arrow:S.arrow||!1,open:y,ref:k,getPopupContainer:S.getPopupContainer||function(v){return(0,B.Q)(v,".".concat(c,"-app"))}}))});z.Z=R},76087:function(dn,z,n){n.d(z,{Z:function(){return hn}});var b=n(82092),s=n.n(b),w=n(15558),B=n.n(w),F=n(48305),m=n.n(F),A=n(53649),R=n.n(A),S=n(39982),k=n(19487),D=n(56664),C=n(15222),y=n(45372),O=n(80047),c=n(85412),v=n(82187),o=n.n(v),h=n(75271),p=n(25298),a=n.n(p),f=n(17069),l=n.n(f),j=n(21742),u=n.n(j),Z=n(83136),g=n.n(Z),H=n(25451),J=function(X){u()(tn,X);var an=g()(tn);function tn(xn){var Pn;return a()(this,tn),Pn=an.call(this),Pn.name=xn,Pn}return l()(tn,[{key:"eq",value:function(Pn){return Pn.name==this.name}},{key:"toDOM",value:function(){var Pn=document.createElement("span");return Pn.setAttribute("aria-hidden","true"),Pn.className="cm-prompt-var",Pn.textContent="${".concat(this.name,"}"),Pn}},{key:"ignoreEvent",value:function(){return!1}}]),tn}(H.l9),V=new H.Y1({regexp:/\$\{([\w\u4e00-\u9fa5]+)\}/g,decoration:function(an){return H.p.replace({widget:new J(an[1])})}}),_=H.lg.fromClass(function(){function X(an){a()(this,X),s()(this,"placeholders",void 0),this.placeholders=V.createDeco(an)}return l()(X,[{key:"update",value:function(tn){this.placeholders=V.updateDeco(tn,this.placeholders)}}]),X}(),{decorations:function(an){return an.placeholders},provide:function(an){return H.tk.atomicRanges.of(function(tn){var xn;return((xn=tn.plugin(an))===null||xn===void 0?void 0:xn.placeholders)||H.p.none})}}),Y=[_],K=n(26068),en=n.n(K),un=n(14179);function vn(){var X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],an=arguments.length>1?arguments[1]:void 0,tn=an.onCreate,xn=an.createBtnText;return(0,un.ys)({override:[function(Pn){var Fn,L=Pn.matchBefore(/\/(\w+)?/);return!L||L&&L.from===L.to&&!Pn.explicit?null:{from:(Fn=L==null?void 0:L.from)!==null&&Fn!==void 0?Fn:0,options:(tn?[].concat(B()(X),[{label:"/NEW_VAR",boost:-99}]):X).map(function(Cn){return en()(en()({},Cn),{},{displayLabel:Cn.label==="/NEW_VAR"?xn:Cn.label.slice(1),apply:function(An,bn,Rn,Jn){if(bn.label==="/NEW_VAR")return An.dispatch({changes:{from:Rn,to:Jn,insert:""}}),tn==null?void 0:tn();var Gn=bn.label.slice(1),Hn="${".concat(Gn,"}");An.dispatch({changes:{from:Rn,to:Jn,insert:Hn}})}})})}}]})}var sn=n(52676),I,fn,pn=(0,c.kc)(function(X){var an=X.css,tn=X.token;return{onCreate:an(I||(I=R()([`
    .cm-tooltip li:last-of-type {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 40px;
      border-top: 1px solid `,`;
      border-radius: 0 !important;
      background-color: `,` !important;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 !important;
    }

    .cm-tooltip ul {
      margin-bottom: 40px !important;
    }

    .cm-tooltip li:first-of-type {
      border-top: none !important;
    }
  `])),tn.colorBorderSecondary,tn.colorBgContainer),cm:an(fn||(fn=R()([`
    .cm-line {
      color: `,`;
    }
    .cm-line span {
      color: `,`;
    }

    .cm-editor {
      position: absolute !important;
      background-color: transparent !important;

      top: 0;
      left: 8px;
      right: 0;
      bottom: 30px;
    }
    .cm-focused {
      outline: none;
    }

    .cm-content {
      width: 100%;
      padding: 8px 0;
      white-space: break-spaces;
    }

    .cm-line {
      line-height: 24px;
      height: auto !important;
    }

    .cm-prompt-var {
      font-size: inherit;
      color: `,` !important;
      background-color: `,` !important;
      line-height: 1.7;
      font-weight: 500;
      margin: 0 2px;
      height: 24px;
      display: inline-flex;
      padding: 0 4px;
      border-radius: 4px;
    }

    .cm-tooltip {
      position: relative;
      background-color: `,`;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0px 3px 12px 0px rgba(47, 49, 51, 0.12);
    }

    .cm-tooltip ul {
      max-height: 17em !important;
      display: flex;
      flex-direction: column;
    }

    .cm-tooltip li {
      margin: 4px 8px;
      height: 32px;
      padding: 0 12px !important;
      flex: 0 0 32px;
      display: flex;
      align-items: center;
    }

    .cm-tooltip-autocomplete ul li[aria-selected] {
      border-radius: 6px;
      font-weight: 600;
      color: `,`;
      background-color: `,`;
    }

    .cm-completionInfo-right {
      display: none;
    }

    .cm-completionIcon {
      display: none;
    }
  `])),tn.colorTextSecondary,tn.colorBlue,tn.colorPurple,tn.colorPurpleBg,tn.colorBgContainer,tn.colorText,tn.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:tn.colorBgBase,border:"1px solid ".concat(tn.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:tn.colorTextTertiary,backgroundColor:tn.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),ln={markdown:[(0,k.JH)()]},Sn=[],gn=function(an){var tn=pn(),xn=tn.styles,Pn=an.variables||Sn,Fn=(0,h.useState)(!1),L=m()(Fn,2),Cn=L[0],Ln=L[1],An=an.onCreate,bn=h.useContext(y.ZP.ConfigContext),Rn=bn.theme.algorithm===O.Z.darkAlgorithm,Jn=an.createBtnText||"+ \u65B0\u589E\u53D8\u91CF",Gn=(0,h.useMemo)(function(){return Rn?D.Pc:D.Zp},[Rn]),Hn=(0,h.useMemo)(function(){return[].concat(B()(ln.markdown),B()(Y),[vn(B()(Pn).map(function(te){return{label:"/".concat(te.code),info:te.label}})||[],{onCreate:An,createBtnText:Jn})])},[Pn]);(0,h.useEffect)(function(){return Ln(!0),function(){Ln(!1)}},[]);var zn=h.useMemo(function(){return an.tipsText===!1?(0,sn.jsx)("div",{className:xn.tips}):an.tipsText?an.tipsText:(0,sn.jsxs)("div",{className:xn.tips,children:['\u8F93\u5165/"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,sn.jsx)(S.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[an.tipsText]);return Cn?(0,sn.jsxs)("div",{className:xn.root,children:[(0,sn.jsx)(C.ZP,{className:o()(xn.cm,s()({},xn.onCreate,An)),extensions:Hn,value:an.value,theme:Gn,lang:"markdown",onChange:an.onChange,basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1}},Gn),(0,sn.jsxs)("div",{className:xn.footer,children:[zn,an.maxLength?(0,sn.jsxs)("div",{children:[an.value.length,"/",an.maxLength]}):null]})]}):null},hn=(0,h.memo)(gn)},1305:function(dn,z,n){n.r(z),n.d(z,{useStyle:function(){return F}});var b=n(53649),s=n.n(b),w=n(88974),B,F=(0,w.Z)(B||(B=s()([`
.`,`-radio-button-wrapper {
  border: none;
  background-color: transparent;
  border-radius: 6px;
  
  &:first-child {
    border-inline-start: initial;
  }
  
  &::before {
    display: none !important;
  }
  
  &:not(:last-child) {
    margin-right: 12px;
  }
}

.`,`-radio-group-ghost {
  .`,`-radio-button-wrapper-checked {
    &:not(.`,`-radio-button-wrapper-disabled) {
      color: var(--`,`-color-primary);
      background-color: var(--`,`-color-primary-bg);
      
      .`,`-radio-button-wrapper-checked {
        background-color: var(--`,`-color-primary-bg);
      }
    }
    
    &.`,`-radio-button-wrapper-disabled {
      &:hover {
        background-color: var(--`,`-color-fill-tertiary);
      }
    }
  }
}

.`,`-radio-group-bordered {
  .`,`-radio-button-wrapper {
    border: var(--`,"-line-width) var(--","-line-type) var(--",`-color-border);
    
    &:not(:first-child) {
      border-inline-start-width: 1px;
    }
  }
}

.`,`-radio-button-wrapper-disabled {
  color: var(--`,`-color-text-tertiary);
  background-color: transparent;
  
  &:hover {
    color: var(--`,`-color-text-tertiary);
    background-color: transparent;
  }
}

.`,"-radio-button-wrapper-checked.",`-radio-button-wrapper-disabled {
  color: var(--`,`-color-text-tertiary);
  background-color: var(--`,`-color-fill-tertiary);
  
  &:hover {
    color: var(--`,`-color-text-tertiary);
    background-color: var(--`,`-color-fill-tertiary);
  }
}
`])),function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix})},4855:function(dn,z,n){n.r(z);var b=n(26068),s=n.n(b),w=n(31209),B=n(57239),F=n(82187),m=n.n(F),A=n(1305),R=n(52676);z.default=function(S){var k=(0,w.getCommonConfig)(),D=k.sparkPrefix,C=k.antPrefix,y=S.ghost,O=y===void 0?!0:y,c=(0,A.useStyle)();return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(c,{}),(0,R.jsx)(B.ZP.Group,s()(s()({},S),{},{className:m()(S.className,S.bordered?"".concat(D,"-radio-group-bordered"):"",O?"".concat(C,"-radio-group-ghost"):""),optionType:"button"}))]})}},95748:function(dn,z,n){var b=n(26068),s=n.n(b),w=n(67825),B=n.n(w),F=n(6401),m=n(52676),A=["texture"];z.Z=function(R){var S=R.texture,k=S===void 0?!1:S,D=B()(R,A);return(0,m.jsx)(F.Z,s()(s()({},D),{},{texture:k}))}},96868:function(dn,z,n){n.d(z,{J:function(){return j},Z:function(){return Z}});var b=n(26068),s=n.n(b),w=n(82092),B=n.n(w),F=n(31209),m=n(86044),A=n(82187),R=n.n(A),S=n(75271),k=n(53649),D=n.n(k),C=n(88974),y,O=(0,C.Z)(y||(y=D()([`
.`,"-slider.","-slider.",`-slider-no-marks {
  margin: 0;
}
`])),function(g){return g.antPrefix},function(g){return g.sparkPrefix},function(g){return g.sparkPrefix}),c=n(67825),v=n.n(c),o=n(1359),h,p=(0,C.Z)(h||(h=D()([`
.`,`-slider-input {
  display: flex;
  gap: 16px;
  height: 32px;
  box-sizing: content-box;
  align-items: center;
  &.`,`-slider-input-has-marks {
    padding: 12px;
  }
  .`,`-slider {
    flex: 1;
    
    &.`,"-slider-horizontal.",`-slider-with-marks {
      margin: 0;
    }
  }
  
  .`,`-input-number {
    height: 100%;
  }
  
  .`,"-input-number .",`-input-number-outlined {
    margin-top: 16px;
  }
  
  .`,`-slider-dot {
    opacity: 0;
  }
}
`])),function(g){return g.sparkPrefix},function(g){return g.sparkPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),a=n(52676),f=["styles","classNames","sliderProps","inputNumberProps"];function l(g){var H,J,V=(0,F.getCommonConfig)(),_=V.sparkPrefix;console.log("debug sparkPrefix in SliderSelector",_);var Y=g.styles,K=g.classNames,en=g.sliderProps,un=g.inputNumberProps,vn=v()(g,f),sn=p(),I=g.marks||((H=g.sliderProps)===null||H===void 0?void 0:H.marks)||null,fn=I||B()(B()({},g.min,g.min),g.max,g.max),pn=I&&((J=Object.keys(I))===null||J===void 0?void 0:J.length)>0,ln=function(gn){var hn=typeof gn=="string"?parseFloat(gn):gn;if(hn===null||isNaN(hn)){g.onChange(null);return}hn<g.min?g.onChange(g.min):hn>g.max?g.onChange(g.max):g.onChange(hn)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(sn,{}),(0,a.jsxs)("div",{style:Y==null?void 0:Y.wrapper,className:R()("".concat(_,"-slider-input"),B()({},"".concat(_,"-slider-input-has-marks"),pn),K==null?void 0:K.wrapper),onMouseUp:function(){var gn;(gn=g.onBlur)===null||gn===void 0||gn.call(g)},children:[(0,a.jsx)(j,s()(s()(s()({disabled:g.disabled,min:g.min,max:g.max,step:g.step,tooltip:{getPopupContainer:function(gn){return gn}}},vn),en),{},{marks:fn,style:s()(s()(s()({},Y==null?void 0:Y.slider),en==null?void 0:en.style),{},{width:"100%"}),className:R()(K==null?void 0:K.slider,en==null?void 0:en.className),onChange:ln,value:g.value===null?void 0:g.value})),(0,a.jsx)(o.Z,s()(s()({controls:!1,step:g.step,min:g.min,max:g.max,disabled:g.disabled},un),{},{onBlur:function(){var gn;(gn=g.onBlur)===null||gn===void 0||gn.call(g)},value:g.value,onChange:ln,style:s()(s()({},Y==null?void 0:Y.inputNumber),un==null?void 0:un.style),className:R()(K==null?void 0:K.inputNumber,un==null?void 0:un.className)}))]})]})}var j=S.forwardRef(function(g,H){var J=(0,F.getCommonConfig)(),V=J.sparkPrefix,_=O();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(_,{}),(0,a.jsx)(m.Z,s()(s()({},g),{},{className:R()("".concat(V,"-slider"),B()({},"".concat(V,"-slider-no-marks"),!Object.keys(g.marks||{}).length),g.className),ref:H}))]})}),u=j;Object.assign(u,{Input:l});var Z=u},46387:function(dn,z,n){n.d(z,{Z:function(){return O}});var b=n(82092),s=n.n(b),w=n(31209),B=n(80047),F=n(32102),m=n(82187),A=n.n(m),R=n(53649),S=n.n(R),k=n(88974),D,C=(0,k.Z)(D||(D=S()([`
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.`,`-spinner {
  display: inline-block;
  
  .`,`-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    
    .`,`-default-indicator {
      width: 40px;
      height: 40px;
      animation: loading 1s linear infinite;
    }
  }
  
  .`,`-title {
    margin-top: 12px;
    font-weight: 400;
    font-size: 14px;
    color: var(--`,`-color-text);
  }
}

.`,`-spinner-overlay {
  position: relative;
  display: inline-block;
  
  .`,"-spinner-content.",`-spinning {
    position: relative;
    opacity: 0.3;
  }
  
  .`,`-spinner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 4;
  }
}

/* 
.`,`-spinner-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 4;
}

.`,`-indicator {
  margin-bottom: 8px;
}

.`,`-title {
  color: var(--`,`-color-text);
}
*/
`])),function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix}),y=n(52676),O=function(c){var v=c.indicator,o=c.spinning,h=o===void 0?!0:o,p=c.children,a=c.style,f=c.className,l=(0,w.getCommonConfig)(),j=l.sparkPrefix,u=B.Z.useToken(),Z=C(),g=(0,y.jsxs)("svg",{className:"".concat(j,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,y.jsx)("defs",{children:(0,y.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,y.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,y.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,y.jsx)("g",{children:(0,y.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:u.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,y.jsx)("g",{children:(0,y.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:u.token.colorPrimary,fillOpacity:"1"})})]})]}),H=c.tip||c.showProgress&&(0,y.jsxs)("div",{children:[(0,y.jsxs)("span",{children:["loading",c.percent!==void 0&&c.percent!==null&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:c.percent}),"%"]})]}),(0,y.jsx)(F.Z,{percent:c.percent,showInfo:!1})]})||null;return p?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Z,{}),(0,y.jsxs)("div",{className:A()("".concat(j,"-spinner-overlay"),f),style:a,children:[(0,y.jsx)("div",{className:A()("".concat(j,"-spinner-content"),s()({},"".concat(j,"-spinning"),h)),children:p}),h&&(0,y.jsxs)("div",{className:"".concat(j,"-spinner"),children:[(0,y.jsx)("div",{className:"".concat(j,"-indicator"),children:v||g}),(0,y.jsx)("div",{className:"".concat(j,"-title"),children:H})]})]})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Z,{}),(0,y.jsx)("div",{className:A()("".concat(j,"-spinner"),f),style:a,children:h&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"".concat(j,"-indicator"),children:v||g}),(0,y.jsx)("div",{className:"".concat(j,"-title"),children:H})]})})]})}},27975:function(dn,z,n){n.d(z,{Z:function(){return D}});var b=n(26068),s=n.n(b),w=n(73563),B=n(53649),F=n.n(B),m=n(88974),A,R=(0,m.Z)(A||(A=F()([`
.`,`-statistic {
  .`,`-statistic-title {
    color: var(--`,`-color-text-tertiary);
    line-height: 24px;
    margin-bottom: 0;
  }
  
  .`,`-statistic-content {
    color: var(--`,`-color-text);
    line-height: 36px;
  }
}
`])),function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix}),S=n(52676),k=function(y){var O=R();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(O,{}),(0,S.jsx)(w.Z,s()({},y))]})},D=k},85085:function(dn,z,n){n.d(z,{Z:function(){return v}});var b=n(26068),s=n.n(b),w=n(31209),B=n(71649),F=n(74472),m=n(82187),A=n.n(m),R=n(75271),S=n(53649),k=n.n(S),D=n(88974),C,y=(0,D.Z)(C||(C=k()([`
.`,`-steps {
  .`,`-steps-item-container {
    display: flex;
    flex-direction: row;
  }
  
  .`,"-steps-item:not(.","-steps-item-active):not(.",`-steps-item-process) {
    .`,`-steps-item-container {
      &:hover {
        .`,`-steps-item-icon {
          border-color: transparent !important;
        }
      }
    }
  }
  
  .`,`-steps-item-icon {
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--`,`-color-border-secondary);
  }

  .`,`-steps-item-process {
    .`,`-steps-item-icon {
      border-color: transparent !important;
    }
  }
  
  .`,`-steps-item-finish {
    .`,`-steps-item-icon {
      height: 20px !important;
    }
    
    .`,`-steps-icon {
      max-width: 20px;
      max-height: 20px;
      font-size: 20px !important;
      line-height: 20px !important;
      top: -0.5px !important;
      
      .`,`-finish-icon {
        background-color: var(--`,`-color-primary-bg);
        border-radius: 50%;
        font-size: 20px !important;
        width: 20px;
        height: 20px;
        color: var(--`,`-color-primary);
      }
    }
  }
  
  .`,`-steps-item-title {
    padding-inline-end: 8px;
    line-height: 20px;
    color: var(--`,`-color-text) !important;
    font-size: 14px;
    font-weight: 500;
    
    &::after {
      background-color: var(--`,`-color-border-secondary) !important;
      height: 1px;
      background: var(--`,`-color-border-secondary);
    }
  }
  
  .`,`-steps-item-description {
    font-size: 12px;
    line-height: 20px;
    color: var(--`,`-color-text-tertiary) !important;
  }
  
  .`,`-steps-item-wait {
    .`,`-steps-item-icon {
      background-color: var(--`,`-color-primary-bg);
    }
  }
  
  &.`,"-steps-horizontal:not(.",`-steps-label-vertical) {
    .`,`-steps-item {
      padding-inline-start: 8px;
    }
  }
}

.`,`-steps-vertical {
  display: flex;
  min-height: 182px;
  align-items: center;
  justify-content: center;
  
  .`,`-steps-item {
    .`,`-steps-item-icon {
      margin-inline-end: 9px !important;
    }
  }
  
  .`,`-steps-item-tail::after {
    width: 1px !important;
    background-color: var(--`,`-color-border-secondary) !important;
  }
}
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),O=n(52676),c=function(h){var p=(0,w.getCommonConfig)(),a=p.sparkPrefix,f=y(),l=(0,R.useMemo)(function(){if(h.items)return h.items.map(function(j,u){var Z=j.status;return!Z&&h.current!==void 0&&(u<h.current?Z="finish":u===h.current?Z="process":Z="wait"),Z==="finish"?s()(s()({},j),{},{icon:(0,O.jsx)(B.Z,{className:"".concat(a,"-finish-icon")})}):j})},[h.items,h.current]);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f,{}),(0,O.jsx)(F.Z,s()(s()({},h),{},{items:l,className:A()("".concat(a,"-steps"),h.className)}))]})},v=c},27485:function(dn,z,n){n.d(z,{Z:function(){return c}});var b=n(26068),s=n.n(b),w=n(67825),B=n.n(w),F=n(65122),m=n(94872),A=n(31209),R=n(53649),S=n.n(R),k=n(88974),D,C=(0,k.Z)(D||(D=S()([`
.`,`-switch {
  background: var(--`,`-color-primary-bg);
  background-image: none !important;
  
  &.`,`-switch-checked {
    background: var(--`,`-color-primary);
  }
  
  &.`,`-switch-disabled {
    opacity: 1;
    background: var(--`,`-color-fill-disable);
    
    &.`,`-switch-checked {
      background: var(--`,`-color-primary-border-hover);
    }
  }
}

.`,`-switch-label {
  font-size: 14px;
  font-weight: 500;
}
`])),function(v){return v.sparkPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.sparkPrefix}),y=n(52676),O=["label","className"],c=function(v){var o=C(),h=v.label,p=v.className,a=B()(v,O),f=(0,A.getCommonConfig)(),l=f.sparkPrefix;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{}),(0,y.jsxs)(F.Z,{align:"center",gap:8,className:p,children:[(0,y.jsx)(m.Z,s()(s()({},a),{},{className:"".concat(l,"-switch")})),h&&(0,y.jsx)("span",{className:"".concat(l,"-switch-label"),children:h})]})]})}},53713:function(dn,z,n){n.d(z,{Z:function(){return h}});var b=n(26068),s=n.n(b),w=n(67825),B=n.n(w),F=n(31209),m=n(28173),A=n(9907),R=n(82187),S=n.n(R),k=n(38250),D=n(53649),C=n.n(D),y=n(88974),O,c=(0,y.Z)(O||(O=C()([`
.`,`-table-wrapper {
  .`,`-table-container {
    .`,`-table-thead > tr > th {
      padding: 8px 20px;
      font-weight: 400;
      color: var(--`,`-color-text-secondary);
    }
    
    /* \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u79FB\u9664\u8868\u5934\u5355\u5143\u683C\u7684\u5706\u89D2 */
    table > thead > tr:first-child > *:first-child {
      border-start-start-radius: 0;
    }
    
    table > thead > tr:first-child > *:last-child {
      border-start-end-radius: 0;
    }
    
    .`,"-table-thead > tr > th:not(:last-child):not(.","-table-selection-column):not(.",`-table-row-expand-icon-cell):not([colspan])::before {
      display: none !important;
    }
    
    .`,`-table-tbody > tr > td {
      padding: 16px 20px;
    }
    
    .`,`-table-tbody > tr {
      & > td:not(.`,`-table-selection-column):first-child,
      & > td.`,`-table-selection-column + td:not(
      .`,`-table-selection-column) {
        font-weight: 500;
      }
    }
  }
  
  .`,`-table-small {
    .`,`-table-tbody > tr > td {
      padding: 8px 20px;
    }
  }
  
  /* \u65E0 footer \u65F6 bordered \u8868\u683C\u6DFB\u52A0\u6574\u4F53\u5706\u89D2 */
  .`,"-table-bordered:not(:has(.",`-table-footer)) {

    .`,`-table-container {
      border-radius: var(--`,`-table-header-border-radius);
      /* \u6062\u590D\u8868\u5934\u5355\u5143\u683C\u7684\u5706\u89D2 - \u5DE6\u4E0A\u89D2\u548C\u53F3\u4E0A\u89D2 */
      table > thead > tr:first-child > *:first-child {
        border-start-start-radius: var(--`,`-table-header-border-radius);
      }
      
      table > thead > tr:first-child > *:last-child {
        border-start-end-radius: var(--`,`-table-header-border-radius);
      }

      table > tbody > tr:last-child > *:first-child {
        border-end-start-radius: var(--`,`-table-header-border-radius);
      }
      
      table > tbody > tr:last-child > *:last-child {
        border-end-end-radius: var(--`,`-table-header-border-radius);
        }
    }
  }

/* \u6709 footer \u65F6 bordered \u8868\u683C\u6DFB\u52A0\u6574\u4F53\u5706\u89D2 */
  .`,"-table-bordered:has(.",`-table-footer) {
    .`,`-table-container {
      /* \u6062\u590D\u8868\u5934\u5355\u5143\u683C\u7684\u5706\u89D2 - \u5DE6\u4E0A\u89D2\u548C\u53F3\u4E0A\u89D2 */
      table > thead > tr:first-child > *:first-child {
        border-start-start-radius: var(--`,`-table-header-border-radius);
      }
      
      table > thead > tr:first-child > *:last-child {
        border-start-end-radius: var(--`,`-table-header-border-radius);
      }
    }
  }
}
`])),function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix}),v=n(52676),o=["columns"];function h(p){var a,f=(0,F.getCommonConfig)(),l=f.sparkPrefix,j=p.columns,u=B()(p,o);j=(a=j)===null||a===void 0?void 0:a.map(function(H){return s()(s()({},H),{},{sortIcon:H.sortIcon||function(){return(0,v.jsx)(m.Z,{style:{fontSize:16,marginLeft:8}})}})});var Z=c(),g=(0,k.X)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Z,{}),(0,v.jsx)(g,{}),(0,v.jsx)(A.Z,s()({className:S()("".concat(l,"-table")),columns:j},u))]})}},55395:function(dn,z,n){n.d(z,{Z:function(){return p}});var b=n(26068),s=n.n(b),w=n(67825),B=n.n(w),F=n(31209),m=n(6815),A=n(82187),R=n.n(A),S=n(75271),k=n(53649),D=n.n(k),C=n(88974),y,O=(0,C.Z)(y||(y=D()([`
.`,`-tag {
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  .`,`-tag-close-icon {
    margin-left: 0;
  }
}

.`,`-tag-small {
  height: 20px;
  font-size: 12px;
  padding: 0 4px;
}

.`,`-tag-middle {
  height: 24px;
  font-size: 14px;
  padding: 0 6px;
}

.`,`-tag-purple {
  color: var(--`,`-color-purple);
  background: var(--`,`-color-purple-bg);

  .`,`-tag-close-icon {
    color: var(--`,`-color-purple);
  }
}

.`,`-tag-pink {
  color: var(--`,`-color-pink);
  background: var(--`,`-color-pink-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-pink);
  }
}

.`,`-tag-yellow {
  color: var(--`,`-color-yellow);
  background: var(--`,`-color-yellow-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-yellow);
  }
}

.`,`-tag-teal {
  color: var(--`,`-color-teal);
  background: var(--`,`-color-teal-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-teal);
  }
}

.`,`-tag-blue {
  color: var(--`,`-color-blue);
  background: var(--`,`-color-blue-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-blue);
}
}

.`,`-tag-mauve {
  color: var(--`,`-color-mauve);
  background: var(--`,`-color-mauve-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-mauve);
  }
}

.`,`-tag-success {
  color: var(--`,`-color-success);
  background: var(--`,`-color-success-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-success);
  }
}

.`,`-tag-error {
  color: var(--`,`-color-error);
  background: var(--`,`-color-error-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-error);
  }
}

.`,`-tag-warning {
  color: var(--`,`-color-warning);
  background: var(--`,`-color-warning-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-warning);
  }
}

.`,`-tag-info {
  color: var(--`,`-color-info);
  background: var(--`,`-color-info-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-info);
  }
}

.`,`-tag-transparent {
  color: var(--`,`-color-text-tertiary);
  background: transparent;
  border-color: var(--`,`-color-border-secondary);
}
`])),function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix}),c=n(52676),v=["children","className","bordered","color","size"],o=function(a){return a.Purple="purple",a.Pink="pink",a.Yellow="yellow",a.Teal="teal",a.Blue="blue",a.Mauve="mauve",a.Transparent="transparent",a.Success="success",a.Error="error",a.Warning="warning",a.Info="info",a}(o||{}),h=(0,S.forwardRef)(function(a,f){var l=a.children,j=a.className,u=a.bordered,Z=u===void 0?!1:u,g=a.color,H=g===void 0?"mauve":g,J=a.size,V=J===void 0?"middle":J,_=B()(a,v),Y=O(),K=(0,F.getCommonConfig)(),en=K.sparkPrefix,un=Object.values(o).includes(H);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(Y,{}),(0,c.jsx)(m.Z,s()(s()({className:R()("".concat(en,"-tag ").concat(en,"-tag-").concat(H," ").concat(en,"-tag-").concat(V),j),bordered:Z,color:un?void 0:H},_),{},{ref:f,children:l}))]})}),p=h},47756:function(dn,z,n){n.d(z,{Z:function(){return j}});var b=n(26068),s=n.n(b),w=n(67825),B=n.n(w),F=n(31209),m=n(752),A=n(80047),R=n(45372),S=n(49706),k=n(82187),D=n.n(k),C=n(75271),y=n(53649),O=n.n(y),c=n(88974),v,o=(0,c.Z)(v||(v=O()([`
.`,`-picker {
  border-color: var(--`,`-color-border-secondary);
  background-color: var(--`,`-color-bg-base);
  
  &.`,`-picker-disabled {
    color: var(--`,`-color-text-quaternary);
    border-color: var(--`,`-color-border-secondary) !important;
    background-color: var(--`,`-color-fill-tertiary) !important;
    
    .`,`-picker-suffix {
      color: var(--`,`-color-text-quaternary) !important;
    }
  }
  
  .`,`-picker-suffix {
    margin-left: 8px;
    color: var(--`,`-color-text-tertiary) !important;
  }
  
  .`,`-picker-clear {
    margin-right: 3px;
  }
  
  .`,`-picker-range-separator {
    display: flex;
    
    .`,`-picker-separator {
      width: 8px;
      height: 1px;
      background: var(--`,`-color-text-tertiary);
      
      .anticon {
        display: none;
      }
    }
  }
}

.`,`-picker-dropdown {
  .`,`-picker-panel-container {
    border: 1px solid var(--`,`-color-border-secondary);
  }
  
  .`,`-picker-range-arrow {
    display: none !important;
  }
  
  .`,"-picker-time-panel-column > li.",`-picker-time-panel-cell-selected {
    .`,`-picker-time-panel-cell-inner {
      background: var(--`,`-color-primary-bg);
    }
  }
  
  .`,`-picker-now-btn {
    color: var(--`,`-color-primary);
  }
}
`])),function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix}),h=n(52676),p=["className","popupClassName"],a=["className","popupClassName"],f=function(Z){var g=Z.className,H=Z.popupClassName,J=B()(Z,p),V=A.Z.useToken(),_=V.token,Y=(0,F.getCommonConfig)(),K=Y.sparkPrefix,en=o();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(en,{}),(0,h.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:_.colorPrimary}}},children:(0,h.jsx)(S.Z,s()({suffixIcon:(0,h.jsx)(m.Z,{}),className:D()("".concat(K,"-picker"),g),popupClassName:D()("".concat(K,"-picker-dropdown"),H)},J))})]})},l=function(Z){var g=Z.className,H=Z.popupClassName,J=B()(Z,a),V=A.Z.useToken(),_=V.token,Y=(0,F.getCommonConfig)(),K=Y.sparkPrefix,en=o();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(en,{}),(0,h.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:_.colorPrimary}}},children:(0,h.jsx)(S.Z.RangePicker,s()({suffixIcon:(0,h.jsx)(m.Z,{}),className:D()("".concat(K,"-picker"),g),popupClassName:D()("".concat(K,"-picker-dropdown"),H),popupStyle:{padding:0}},J))})]})};f.RangePicker=l;var j=f},19777:function(dn,z,n){n.d(z,{Z:function(){return f}});var b=n(26068),s=n.n(b),w=n(48305),B=n.n(w),F=n(67825),m=n.n(F),A=n(75271),R=n(82187),S=n.n(R),k=n(62892),D=n(56630),C=n(31209),y=n(53649),O=n.n(y),c=n(88974),v,o=(0,c.Z)(v||(v=O()([`
// Video \u4E3B\u5BB9\u5668\u6837\u5F0F
.`,`-video-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;

  button {
    --`,`-color-text-disabled: rgba(231, 231, 237, 0.25) !important;
    --`,`-button-text-text-color: rgba(231, 231, 237, 0.88) !important;
    --`,`-button-text-text-hover-color: rgba(231, 231, 237, 0.88) !important;
    --`,`-button-text-hover-bg: rgba(231, 231, 237, 0.08) !important;
  }

  .`,`-media-time-text {
    color: var(--`,`-color-text-white);
  }
}

.`,`-video-content {
  width: 100%;
  height: 100%;
}

.`,`-video-element {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.`,`-video-controller-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, #000000 2%, rgba(0, 0, 0, 0) 94%);
  transition: opacity 0.3s;
}
  // \u8FDB\u5EA6\u6761\u6837\u5F0F
.`,`-media-progress-bar {
  .`,`-progress-inner {
    --`,"-progress-remaining-color: var(--",`-color-fill);
  }
  
  .`,`-progress-bg {
    background: var(--`,`-color-text-white) !important;
  }
}
`])),function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix}),h=n(52676),p=["controls","mouseEnterAutoPlay","children","className","style"],a=(0,A.forwardRef)(function(l,j){var u=l.controls,Z=l.mouseEnterAutoPlay,g=Z===void 0?!1:Z,H=l.children,J=l.className,V=l.style,_=m()(l,p),Y=(0,C.getCommonConfig)(),K=Y.sparkPrefix,en=o(),un=(0,A.useState)(0),vn=B()(un,2),sn=vn[0],I=vn[1],fn=(0,A.useState)(0),pn=B()(fn,2),ln=pn[0],Sn=pn[1],gn=(0,A.useState)(!1),hn=B()(gn,2),X=hn[0],an=hn[1],tn=(0,D.Z)(l,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),xn=B()(tn,2),Pn=xn[0],Fn=xn[1],L=(0,A.useState)(!1),Cn=B()(L,2),Ln=Cn[0],An=Cn[1],bn=(0,A.useRef)(null),Rn=(0,A.useRef)(!1),Jn=function($n){bn.current=$n,j&&(typeof j=="function"?j($n):j.current=$n)};(0,A.useEffect)(function(){var In;return X&&(In=setInterval(function(){bn.current&&I(bn.current.currentTime)},16)),function(){In&&clearInterval(In)}},[X]);var Gn=function(){return window.videoRef=bn.current,bn.current?"mozHasAudio"in bn.current?(An(bn.current.mozHasAudio),!0):"webkitAudioDecodedByteCount"in bn.current?(An(bn.current.webkitAudioDecodedByteCount>0),!0):(An(!1),!1):!1},Hn=function(){bn.current&&Sn(bn.current.duration)},zn=function(){bn.current&&(X?bn.current.pause():bn.current.play(),an(!X))},te=function(){an(!0)},Pe=function(){an(!1)},ye=function(){bn.current&&bn.current.requestFullscreen&&bn.current.requestFullscreen()},be=function(){var $n;an(!1),I(($n=bn.current)===null||$n===void 0?void 0:$n.duration)},Ce=function(){g&&!Rn.current&&(X||(bn.current.play(),Rn.current=!0))},je=function(){g&&Rn.current&&(Rn.current=!1)},Ee=function($n){bn.current&&(bn.current.currentTime=$n,I($n))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(en,{}),(0,h.jsx)("div",{className:S()("".concat(K,"-video-container"),J),style:V,children:(0,h.jsxs)("div",{className:"".concat(K,"-video-content"),onMouseEnter:Ce,onMouseLeave:je,children:[(0,h.jsx)("video",s()(s()({ref:Jn},_),{},{muted:Pn,className:"".concat(K,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:Hn,onCanPlayThrough:Gn,onPlay:te,onPause:Pe,onEnded:be})),u&&(0,h.jsx)(k.Z,{className:"".concat(K,"-video-controller-wrapper"),isPlaying:X,currentTime:sn,duration:ln,enableVolume:Ln,muted:Pn,onMute:function(){return Fn(!Pn)},onPlayPause:zn,onFullscreen:ye,onProgressClick:Ee}),H]})})]})}),f=a},3658:function(dn,z,n){n.d(z,{Z:function(){return F}});var b=n(26068),s=n.n(b),w=n(75271),B=new Map;function F(m){var A=m.globalStyle,R=m.name;(0,w.useLayoutEffect)(function(){var S=B.get(A)||0;if(S)B.set(A,s()(s()({},S),{},{count:S.count+1}));else{var k=document.createElement("style"),D=Math.random().toString(36).slice(2);k.innerHTML=A,k.dataset.id=D,k.dataset.flag="bailian-ui-use-style",R&&k.setAttribute("name",R),document.head.appendChild(k),B.set(A,{count:1,id:D})}return function(){var C=B.get(A);B.set(A,s()(s()({},C),{},{count:C.count-1})),setTimeout(function(){var y=B.get(A);if((y==null?void 0:y.count)<=0){var O;B.delete(A),(O=document.head.querySelector('[data-id="'+y.id+'"]'))===null||O===void 0||O.remove()}},100)}},[A])}},53061:function(dn,z,n){n.r(z),n.d(z,{Alert:function(){return c.Z},AlertDialog:function(){return j.default},Anchor:function(){return u.Z},Audio:function(){return ct},Avatar:function(){return Z.Z},Badge:function(){return v.Z},Breadcrumb:function(){return g.Z},Button:function(){return H.Z},Card:function(){return J.Z},Checkbox:function(){return V.Z},CodeBlock:function(){return _.ZP},CodeBlockLangExtensionsMap:function(){return _.xO},Collapse:function(){return Y.Z},CollapsePanel:function(){return K.Z},ConfigProvider:function(){return wt.ZP},DatePicker:function(){return en.Z},Descriptions:function(){return Kr.Z},Drawer:function(){return un.Z},Dropdown:function(){return vn.Z},EllipsisTip:function(){return Cn},Empty:function(){return Ln.Z},FileCard:function(){return qe.s},FileIcon:function(){return qe.Z},FloatButton:function(){return o.Z},Form:function(){return An.Z},HelpIcon:function(){return te},IconButton:function(){return Rn.Z},IconFont:function(){return Pe.Z},Image:function(){return ye.Z},Input:function(){return be.Z},InputNumber:function(){return h.Z},MdEditor:function(){return He.Z},MobileAlertDialog:function(){return Dt},MobileDrawer:function(){return Pt},MobileModal:function(){return ft},Modal:function(){return je.Z},Pagination:function(){return In.Z},Popconfirm:function(){return $n.Z},Popover:function(){return yr.Z},Progress:function(){return p.Z},PromptsEditor:function(){return He.Z},Radio:function(){return a.ZP},RadioButton:function(){return br.default},Result:function(){return Cr.Z},Select:function(){return f.default},Skeleton:function(){return l.Z},SlateEditor:function(){return wr},Slider:function(){return Je.Z},SliderSelector:function(){return Gr},Spinner:function(){return $r.Z},Statistic:function(){return Jr.Z},Steps:function(){return jr.Z},Switch:function(){return Yr.Z},Table:function(){return Xr.Z},Tabs:function(){return qr.Z},Tag:function(){return _r.Z},TimePicker:function(){return nt.Z},Tooltip:function(){return Gn.Z},Upload:function(){return et.Z},Video:function(){return rt.Z},bailianDarkTheme:function(){return Pr},bailianTheme:function(){return hr},base64Decoder:function(){return Qt},base64Encoder:function(){return Kt},carbonDarkTheme:function(){return Gt},carbonTheme:function(){return Vt},copy:function(){return dr.JG},delay:function(){return ur},generateTheme:function(){return y},generateThemeByToken:function(){return O.Z},getCommonConfig:function(){return ln.getCommonConfig},message:function(){return Ce.Z},notification:function(){return Ee.Z},parseJsonSafely:function(){return $t},purpleDarkTheme:function(){return Pr},purpleTheme:function(){return hr},renderTooltip:function(){return dr.rb},requestPop:function(){return vr},requestPopSse:function(){return Ht},requestSse:function(){return pr},safeHtml:function(){return Mt.t},setCommonConfig:function(){return ln.setCommonConfig},useCommonConfig:function(){return ln.useCommonConfig},useGlobalStyle:function(){return Tt.Z},waitForDom:function(){return Nt},waitForFunc:function(){return fr}});var b=n(23577),s=n(19888),w=n(44719),B=n(57249),F=function(r){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},m=function(r,t,i){return"#"+((1<<24)+(r<<16)+(t<<8)+i).toString(16).slice(1).toUpperCase()},A=function(r,t,i){r/=255,t/=255,i/=255;var x=Math.max(r,t,i),P=Math.min(r,t,i),d,T,M=(x+P)/2;if(x===P)d=T=0;else{var W=x-P;switch(T=M>.5?W/(2-x-P):W/(x+P),x){case r:d=((t-i)/W+(t<i?6:0))/6;break;case t:d=((i-r)/W+2)/6;break;case i:d=((r-t)/W+4)/6;break;default:d=0}}return{h:d*360,s:T*100,l:M*100}},R=function(r,t,i){r/=360,t/=100,i/=100;var x,P,d;if(t===0)x=P=d=i;else{var T=function(N,nn,G){return G<0&&(G+=1),G>1&&(G-=1),G<.16666666666666666?N+(nn-N)*6*G:G<.5?nn:G<.6666666666666666?N+(nn-N)*(.6666666666666666-G)*6:N},M=i<.5?i*(1+t):i+t-i*t,W=2*i-M;x=T(W,M,r+1/3),P=T(W,M,r),d=T(W,M,r-1/3)}return{r:Math.round(x*255),g:Math.round(P*255),b:Math.round(d*255)}},S=function(r,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,x=F(r);if(!x)return r;var P=A(x.r,x.g,x.b);P.l=Math.max(0,Math.min(100,P.l+t)),P.s=Math.max(0,Math.min(100,P.s+i));var d=R(P.h,P.s,P.l);return m(d.r,d.g,d.b)},k=function(r,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,x=F(r);if(!x)return r;var P=A(x.r,x.g,x.b);P.l=t,i!==null&&(P.s=i);var d=R(P.h,P.s,P.l);return m(d.r,d.g,d.b)},D=function(r,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,x=F(r);if(!x)return r;var P=A(x.r,x.g,x.b);P.l=t,P.s=Math.max(0,Math.min(100,P.s*i));var d=R(P.h,P.s,P.l);return m(d.r,d.g,d.b)},C=function(r){var t=r.primaryHex,i=r.bgBaseHex,x=r.textBaseHex,P=r.darkMode,d=P===void 0?!1:P;i=i||(d?"#000000":"#ffffff"),x=x||(d?"#E7E7ED":"#1a1a1a");var T=F(t);if(!T)return null;var M=A(T.r,T.g,T.b),W=F(i),E=F(x),N=W?A(W.r,W.g,W.b):{h:210,s:8,l:d?5:99},nn=Math.max(8,Math.min(M.s,40)),G=Math.max(12,Math.min(M.s*.6,35)),on={borderRadiusXS:s.borderRadiusXS,borderRadiusSM:s.borderRadiusSM,borderRadius:s.borderRadius,borderRadiusLG:s.borderRadiusLG,borderRadiusXL:s.borderRadiusXL,borderRadiusFull:s.borderRadiusFull,wireframe:s.wireframe,colorPrimary:d?k(t,Math.max(M.l-5,42),M.s*.95):t,colorPrimaryHover:d?k(t,Math.min(M.l+10,55),M.s*.95):S(t,M.l<50?10:-10,0),colorPrimaryActive:d?k(t,Math.max(M.l-10,35),M.s*.95):S(t,M.l<50?-10:-20,0),colorPrimaryBg:d?k(t,13,nn*.6):k(t,96,nn*.8),colorPrimaryBgHover:d?k(t,13,nn*.6):k(t,94,nn),colorPrimaryBorder:d?k(t,17,G*.8):k(t,88,G*.8),colorPrimaryBorderHover:d?k(t,22,G):k(t,82,G),colorPrimaryText:d?k(t,Math.max(M.l-5,42),M.s*.95):t,colorPrimaryTextHover:d?k(t,Math.min(M.l+10,55),M.s*.95):S(t,M.l<50?10:-10,0),colorPrimaryTextActive:d?k(t,Math.max(M.l-10,35),M.s*.95):S(t,M.l<50?-10:-20,0),colorTextBase:x,colorText:"rgba(".concat(E.r,", ").concat(E.g,", ").concat(E.b,", 0.88)"),colorTextSecondary:"rgba(".concat(E.r,", ").concat(E.g,", ").concat(E.b,", 0.65)"),colorTextTertiary:"rgba(".concat(E.r,", ").concat(E.g,", ").concat(E.b,", 0.45)"),colorTextQuaternary:"rgba(".concat(E.r,", ").concat(E.g,", ").concat(E.b,", 0.25)"),colorTextWhite:"#fff",colorBgBase:i,colorBgContainer:d?D(i,Math.min(N.l+3,8),1.2):D(i,Math.min(N.l+1,99),.8),colorBgElevated:d?D(i,Math.min(N.l+3,8),1.2):i,colorBgLayout:d?D(i,Math.min(N.l+3,8),1.2):D(i,Math.max(N.l-2,96),1.2),colorBgSpotlight:d?"rgba(".concat(F(D(i,28,1.2)).r,", ").concat(F(D(i,28,1.2)).g,", ").concat(F(D(i,28,1.2)).b,", 0.85)"):"rgba(".concat(E.r,", ").concat(E.g,", ").concat(E.b,", 0.85)"),colorBgMask:d?"rgba(".concat(W.r,", ").concat(W.g,", ").concat(W.b,", 0.8)"):"rgba(".concat(E.r,", ").concat(E.g,", ").concat(E.b,", 0.45)"),colorBorder:d?"rgba(".concat(F(D(i,28,2)).r,", ").concat(F(D(i,28,2)).g,", ").concat(F(D(i,28,2)).b,", 0.8)"):D(i,81,2.5),colorBorderSecondary:d?"rgba(".concat(F(D(i,22,1.8)).r,", ").concat(F(D(i,22,1.8)).g,", ").concat(F(D(i,22,1.8)).b,", 0.8)"):D(i,88,2),colorFill:d?"rgba(".concat(E.r,", ").concat(E.g,", ").concat(E.b,", 0.18)"):D(i,81,2.5)+"5c",colorFillSecondary:d?"rgba(".concat(E.r,", ").concat(E.g,", ").concat(E.b,", 0.12)"):D(i,81,2.5)+"33",colorFillTertiary:d?"rgba(".concat(E.r,", ").concat(E.g,", ").concat(E.b,", 0.08)"):D(i,81,2.5)+"26",colorFillQuaternary:d?"rgba(".concat(E.r,", ").concat(E.g,", ").concat(E.b,", 0.04)"):D(i,81,2.5)+"1a",colorFillDisable:d?D(x,55,.8):D(i,86,1.8),colorLink:d?k(t,Math.max(M.l-5,42),M.s*.95):t,colorInfo:d?b.colorInfo:s.colorInfo,colorInfoHover:d?b.colorInfoHover:s.colorInfoHover,colorInfoText:d?b.colorInfoText:s.colorInfoText,colorInfoBg:d?b.colorInfoBg:s.colorInfoBg,colorInfoBgHover:d?b.colorInfoBgHover:s.colorInfoBgHover,colorInfoBorder:d?b.colorInfoBorder:s.colorInfoBorder,colorInfoBorderHover:d?b.colorInfoBorderHover:s.colorInfoBorderHover,colorSuccess:d?b.colorSuccess:s.colorSuccess,colorSuccessHover:d?b.colorSuccessHover:s.colorSuccessHover,colorSuccessBg:d?b.colorSuccessBg:s.colorSuccessBg,colorSuccessBgHover:d?b.colorSuccessBgHover:s.colorSuccessBgHover,colorSuccessBorder:d?b.colorSuccessBorder:s.colorSuccessBorder,colorSuccessBorderHover:d?b.colorSuccessBorderHover:s.colorSuccessBorderHover,colorWarning:d?b.colorWarning:s.colorWarning,colorWarningHover:d?b.colorWarningHover:s.colorWarningHover,colorWarningBg:d?b.colorWarningBg:s.colorWarningBg,colorWarningBgHover:d?b.colorWarningBgHover:s.colorWarningBgHover,colorWarningBorder:d?b.colorWarningBorder:s.colorWarningBorder,colorWarningBorderHover:d?b.colorWarningBorderHover:s.colorWarningBorderHover,colorError:d?b.colorError:s.colorError,colorErrorHover:d?b.colorErrorHover:s.colorErrorHover,colorErrorBg:d?b.colorErrorBg:s.colorErrorBg,colorErrorBgHover:d?b.colorErrorBgHover:s.colorErrorBgHover,colorErrorBorder:d?b.colorErrorBorder:s.colorErrorBorder,colorErrorBorderHover:d?b.colorErrorBorderHover:s.colorErrorBorderHover,colorPurple:d?b.colorPurple:s.colorPurple,colorPurpleHover:d?b.colorPurpleHover:s.colorPurpleHover,colorPurpleBg:d?b.colorPurpleBg:s.colorPurpleBg,colorPink:d?b.colorPink:s.colorPink,colorPinkHover:d?b.colorPinkHover:s.colorPinkHover,colorPinkBg:d?b.colorPinkBg:s.colorPinkBg,colorYellow:d?b.colorYellow:s.colorYellow,colorYellowHover:d?b.colorYellowHover:s.colorYellowHover,colorYellowBg:d?b.colorYellowBg:s.colorYellowBg,colorOrange:d?b.colorOrange:s.colorOrange,colorOrangeHover:d?b.colorOrangeHover:s.colorOrangeHover,colorOrangeBg:d?b.colorOrangeBg:s.colorOrangeBg,colorTeal:d?b.colorTeal:s.colorTeal,colorTealHover:d?b.colorTealHover:s.colorTealHover,colorTealBg:d?b.colorTealBg:s.colorTealBg,colorBlue:d?b.colorBlue:s.colorBlue,colorBlueHover:d?b.colorBlueHover:s.colorBlueHover,colorBlueBg:d?b.colorBlueBg:s.colorBlueBg,colorMauve:d?b.colorMauve:s.colorMauve,colorMauveHover:d?b.colorMauveHover:s.colorMauveHover,colorMauveBg:d?b.colorMauveBg:s.colorMauveBg,colorSlate:d?b.colorSlate:s.colorSlate||"#1E293B",colorSlateHover:d?b.colorSlateHover:s.colorSlateHover||"#475569",colorSlateBg:d?b.colorSlateBg:s.colorSlateBg||"#E2E8F0",colorLavender:d?b.colorLavender:s.colorLavender||"#A77BFF",colorLavenderHover:d?b.colorLavenderHover:s.colorLavenderHover||"#BB99FF",colorLavenderBg:d?b.colorLavenderBg:s.colorLavenderBg||"rgba(226, 212, 255, 0.8)",boxShadow:d?b.boxShadow:s.boxShadow,boxShadowSecondary:d?b.boxShadowSecondary:s.boxShadowSecondary,boxShadowTertiary:d?b.boxShadowTertiary:s.boxShadowTertiary,boxShadowTertiaryLeft:d?b.boxShadowTertiaryLeft:s.boxShadowTertiaryLeft,boxShadowInput:d?b.boxShadowInput:s.boxShadowInput};return on},y=C,O=n(30172),c=n(46525),v=n(2344),o=n(69407),h=n(1359),p=n(32102),a=n(57239),f=n(54426),l=n(42435),j=n(55002),u=n(22074),Z=n(51971),g=n(72997),H=n(15306),J=n(72271),V=n(94969),_=n(43274),Y=n(55655),K=n(33996),en=n(59597),un=n(15201),vn=n(90088),sn=n(26068),I=n.n(sn),fn=n(31759),pn=n.n(fn),ln=n(31209),Sn=n(43721),gn=n(82187),hn=n.n(gn),X=n(75271),an=n(53649),tn=n.n(an),xn=n(88974),Pn,Fn=(0,xn.Z)(Pn||(Pn=tn()([`
div.`,`-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`])),function(e){return e.sparkPrefix}),L=n(52676);function Cn(e){var r=e.className,t=r===void 0?"":r,i=e.style,x=i===void 0?{}:i,P=e.children,d=e.rows,T=d===void 0?1:d,M=e.tooltip,W=e.tooltipMaxHeight,E=W===void 0?"90vh":W,N=(0,ln.getCommonConfig)(),nn=N.sparkPrefix,G=Fn();function on(){var cn={maxHeight:E,overflow:"auto"};if(pn()(M)==="object"){var yn=M,Q=yn.title,q=yn.styles;return{title:Q||P,styles:I()(I()({},q),{},{body:I()(I()({},cn),q==null?void 0:q.body)})}}return{title:M||P,styles:{body:cn}}}return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(G,{}),(0,L.jsx)(Sn.Z.Paragraph,{className:hn()("".concat(nn,"-ellipsis-tip"),t),style:x,ellipsis:{rows:T,tooltip:on()},children:P})]})}var Ln=n(6401),An=n(94577),bn=n(69898),Rn=n(6665),Jn=n(41301),Gn=n(10068),Hn,zn=(0,xn.Z)(Hn||(Hn=tn()([`
.`,`-help-icon {
  color: var(--`,`-color-text-tertiary);
}

.`,`-info-icon {
  color: var(--`,`-color-icon);
  margin-left: var(--`,`-margin-xxs);
  font-size: 14px;
  
  &.`,`-info-icon-no-margin {
    margin: 0;
  }
}
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix});function te(e){var r=(0,Jn.X)(),t=zn(),i=e.style,x=e.content,P=e.className,d=e.popoverProps,T=(0,ln.getCommonConfig)(),M=T.sparkPrefix;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(r,{}),(0,L.jsx)(t,{}),(0,L.jsx)(Gn.Z,I()(I()({title:x,overlayInnerStyle:{maxWidth:376},trigger:"hover",style:i},d),{},{children:(0,L.jsx)(Rn.Z,{className:hn()("".concat(M,"-help-icon"),P),icon:(0,L.jsx)(bn.Z,{}),shape:"circle",bordered:!1,size:"small"})}))]})}var Pe=n(91542),ye=n(3297),be=n(65627),Ce=n(33185),je=n(78853),Ee=n(31265),In=n(35084),$n=n(29126),yr=n(76617),He=n(76087),br=n(4855),Cr=n(95748),jr=n(85085),Er=n(48305),oe=n.n(Er),qn=n(1615),le=n(82090),U=n(75040),Se=n(28533),se=n(20335),we,Sr=(0,xn.Z)(we||(we=tn()([`
.text-editor {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  
  &-content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  
  .text-editor-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
    
    div[data-slate-node="element"] {
      margin: 0px !important;
    }
  }
}

/* \u6587\u672C\u65E0\u6CD5\u9009\u4E2D\u7684\u6837\u5F0F */
.text-editor-user-select-none {
  user-select: none;
}
`]))),Dr=n(15558),$e=n.n(Dr),Tr=(0,X.memo)(function(e){var r=e.attributes,t=e.children;return(0,L.jsx)("div",I()(I()({},r),{},{style:{marginTop:"8px"},children:t}))}),Ke,Mr=(0,xn.Z)(Ke||(Ke=tn()([`
.spark-editor-var-tag {
  padding: 0 6px;
  line-height: 24px;
  font-size: 12px;
  margin: 0 2px;
  background: rgba(205, 208, 220, 0.2);
  border-radius: 6px;
  height: 24px;
  display: inline-block;
}
`]))),Nr=(0,X.memo)(function(e){var r=e.attributes,t=e.renderVarLabel,i=Mr();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(i,{}),(0,L.jsxs)("span",I()(I()({},r),{},{children:[e.children,(0,L.jsx)("span",{className:"spark-editor-var-tag",children:t?t(e.element.code):e.element.label})]}))]})}),Jt=function(r){return Object.keys(r).map(function(t){return{label:r[t].label,desc:r[t].desc,value:t}})},Br=[{code:"s",isParagraph:!0,out:[],inner:[],name:qn.Z.get({id:"components.SlateEditor.utils.constant.Paragraph",dm:"\u6BB5\u843D"}),render:Tr,type:"double"},{code:"var",isParagraph:!1,out:["s"],inner:[],name:qn.Z.get({id:"components.SlateEditor.utils.constant.Variable",dm:"\u53D8\u91CF"}),render:Nr,isInline:!0,isVoid:!0,type:"single"}],De=function(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},Yt=function(r){return r.replace(/&/g,"&amp;").replace(/{/g,"").replace(/}/g,"").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},Or=function(r){return r.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")},Te=function e(r,t){var i="",x=t||{},P=x.tagRules,d=P===void 0?{}:P;return r.forEach(function(T,M){if(U.W_.isElement(T)){var W=d[T.type];if(!W)i+=De(T.text);else switch(W.code){case"image":i+="![".concat(T.fileName,"](").concat(T.src,")");break;case"pdf":i+="[".concat(T.fileName,"](").concat(T.src,")");break;case"s":i+="".concat(e(T.children,t)).concat(M<r.length-1?`
`:"");break;case"var":i+="${".concat(T.code,"}");default:break}}else i+=De(T.text)}),i},Qe=function(r,t){if(r&&r.children.length){var i=Te(r.children,t);return i==="<s></s>"?"":Or(i)}return""},me=function(r){if(!r)return"";var t="",i=De(r).replace(/\$\{([^{}]+?)\}/g,function(x,P){return'<var code="'.concat(P,'" label="${').concat(P,'}" />')});return i.split(`
`).forEach(function(x){t+="<s>".concat(x,"</s>")}),"<speak>".concat(t,"</speak>")},Zr=function e(r){var t,i=[];return(r==null||(t=r.childNodes)===null||t===void 0?void 0:t.length)>0&&r.childNodes.forEach(function(x,P,d){var T=x.nodeType,M=x.nodeName;if(T===1){for(var W={},E=0;E<x.attributes.length;E++){var N=x.attributes[E],nn=N.nodeName,G=N.nodeValue;W[nn]=G}var on=I()({type:M},W);x.childNodes.length>0?on.children=e(x):on.children=[{text:""}],i.push(on),M!=="s"&&(P>0&&d[P-1].nodeType===1&&i.unshift({text:""}),P===d.length-1&&i.push({text:""}))}else T===3&&i.push({text:x.nodeValue||""})}),i},ve=function(r){if(r){var t=new DOMParser().parseFromString(r,"text/xml");return Zr(t)}},kr=function(r){if(!r||r.includes("</speak>"))return r;var t=r;return t.includes("<s>")||(t="<s>".concat(t,"</s>")),"<speak>".concat(t,"</speak>")},Ve=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t={};return[].concat($e()(r),$e()(Br)).forEach(function(i){t[i.code]||(t[i.code]=i)}),t},Fr=n(90228),Bn=n.n(Fr),Lr=n(87999),_n=n.n(Lr),Ge=function(r,t,i){if(!(!r||!t)){var x=r.selection,P=null;x&&(P=x.focus),i!=null&&i.at&&(P=i==null?void 0:i.at),P||(P={path:[0,0],offset:0});var d=P,T=d.path,M=d.offset,W=U.NB.get(r,U.y$.parent(T));if(!U.ML.isVoid(r,W)){var E=U.NB.string(U.NB.get(r,T)),N=E.substring(0,M-(i!=null&&i.deletePrefix?1:0)),nn=E.substring(M,E.length);U.ML.withoutNormalizing(r,function(){r.apply({type:"insert_node",node:{text:nn},path:T}),r.apply({type:"insert_node",node:t,path:T}),r.apply({type:"insert_node",node:{text:N},path:T});var G=U.y$.next(U.y$.next(U.y$.next(T)));r.apply({type:"remove_node",path:G,node:U.NB.get(r,G)});var on={path:U.y$.next(U.y$.next(T)),offset:0};r.apply({type:"set_selection",properties:null,newProperties:{anchor:on,focus:on}}),se.F3.focus(r),r.onChange()})}}},Ir=function(){var e=_n()(Bn()().mark(function r(t,i,x){var P,d,T,M,W,E,N,nn,G,on,cn,yn,Q,q,jn,En,Wn,Tn,Un,wn,On,Nn,Kn,ee,Qn,Vn,Xn,Zn,kn,Dn,Mn,mn;return Bn()().wrap(function(rn){for(;;)switch(rn.prev=rn.next){case 0:if(!(!t||!i)){rn.next=2;break}return rn.abrupt("return");case 2:if(d=t.selection,T=x||{},M=T.tip,W=T.selection,E=W===void 0?d:W,N=x==null||(P=x.rules)===null||P===void 0?void 0:P[i.type],!(E&&!U.e6.isCollapsed(E))){rn.next=45;break}if(G=U.NB.fragment(t,E),on=ge(G),on!==""){rn.next=10;break}return rn.abrupt("return");case 10:if(cn=xe(U.e6.edges(E)),yn=oe()(cn,2),Q=yn[0],q=yn[1],U.ML.isVoid(t,U.NB.get(t,U.y$.parent(Q.path)))&&(Q.path=U.y$.next(U.y$.parent(Q.path)),Q.offset=0),U.ML.isVoid(t,U.NB.get(t,U.y$.parent(q.path)))&&(q.path=U.y$.previous(U.y$.parent(q.path)),q.offset=U.NB.string(U.NB.get(t,q.path)).length),U.y$.hasPrevious(q.path)&&U.NB.get(t,U.y$.parent(Q.path))===U.NB.get(t,U.y$.previous(q.path))&&Q.offset===0&&q.offset===0&&(jn=U.y$.previous(U.y$.parent(Q.path)),En=U.NB.get(t,jn),Q.path=jn,Q.offset=En.text.length),U.NB.parent(t,Q.path)!==U.NB.parent(t,q.path)){for(Wn=U.NB.get(t,Q.path),Tn=ge(U.NB.fragment(t,{anchor:{path:q.path,offset:0},focus:q}));U.xv.isText(Wn)&&Wn.text===""&&on===Tn;)Q.path.splice(Q.path.length-1,1,1,0),Wn=U.NB.get(t,Q.path);for(Un=U.NB.get(t,q.path),wn=U.NB.string(U.NB.get(t,U.e6.edges(E)[0].path)),On=ge(U.NB.fragment(t,{anchor:Q,focus:{path:Q.path,offset:wn.length}}));U.xv.isText(Un)&&Un.text===""&&on===On;)Nn=q.path[q.path.length-1],q.path.splice(q.path.length-1,1,Nn-1),Un=U.NB.get(t,q.path),U.W_.isElement(Un)&&(q.path.push(Un.children.length-1),q.offset=wn.length)}if(U.NB.parent(t,Q.path)===U.NB.parent(t,q.path)){rn.next=18;break}return le.ZP.info(qn.Z.get({id:"components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect",dm:"\u5212\u9009\u8303\u56F4\u6709\u8BEF"})),rn.abrupt("return");case 18:Kn=U.y$.parent(Q.path),ee=(N==null?void 0:N.name)||Me(),Qn=U.NB.get(t,Kn),Vn=x==null||(nn=x.rules)===null||nn===void 0?void 0:nn[Qn.type];case 22:if(!(N!=null&&N.out&&Kn.length>1)){rn.next=30;break}if(N.out.includes(Qn.type)){rn.next=27;break}return Xn=(Vn==null?void 0:Vn.name)||Me(),le.ZP.warning(qn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn",dm:"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185"},{wrapTagName:ee,tagName:Xn})),rn.abrupt("return");case 27:Kn=U.y$.parent(Kn),rn.next=22;break;case 30:if(!(N!=null&&N.inner&&U.NB.get(t,Q.path)!==U.NB.get(t,q.path))){rn.next=42;break}Zn=U.y$.next(Q.path);case 32:if(U.y$.equals(Zn,q.path)){rn.next=42;break}if(Dn=U.NB.get(t,Zn),Mn=x==null||(kn=x.rules)===null||kn===void 0?void 0:kn[Dn.type],!(U.W_.isElement(Dn)&&!N.inner.includes(Dn.type))){rn.next=39;break}return mn=(Mn==null?void 0:Mn.name)||Me(),le.ZP.warning(qn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn",dm:"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011"},{wrapTagName:ee,tagName:mn})),rn.abrupt("return");case 39:Zn=U.y$.next(Zn),rn.next=32;break;case 42:U.ML.withoutNormalizing(t,function(){var ae=U.NB.parent(t,Q.path),re=U.NB.fragment(ae,{anchor:{path:[Q.path[Q.path.length-1]],offset:Q.offset},focus:{path:[q.path[q.path.length-1]],offset:q.offset}}),de=U.NB.string(U.NB.get(t,Q.path));if(U.y$.equals(Q.path,q.path))t.apply({type:"remove_text",path:Q.path,offset:Q.offset,text:de.substring(Q.offset,q.offset)});else{t.apply({type:"remove_text",path:Q.path,offset:Q.offset,text:de.substring(Q.offset,de.length)});for(var fe=U.y$.next(Q.path);!U.y$.equals(fe,q.path);)t.apply({type:"remove_node",path:fe,node:U.NB.get(t,fe)}),q.path=U.y$.previous(q.path);var Re=U.NB.string(U.NB.get(t,q.path));t.apply({type:"remove_text",path:q.path,offset:0,text:Re.substring(0,q.offset)})}if(!U.y$.equals(Q.path,q.path)){var he=U.NB.get(t,q.path);t.apply({type:"remove_node",path:q.path,node:he});var We=U.NB.string(he);t.apply({type:"insert_text",path:Q.path,offset:Q.offset,text:We})}Ge(t,I()(I()({},i),{},{children:re}),{at:Q,rules:x==null?void 0:x.rules})}),rn.next=46;break;case 45:M&&le.ZP.warning(M);case 46:case"end":return rn.stop()}},r)}));return function(t,i,x){return e.apply(this,arguments)}}(),Xt=function(r,t,i){if(!(!r||!t)){var x=Node.get(r,t),P=xe(x.children).reverse();Editor.withoutNormalizing(r,function(){r.apply({type:"remove_node",node:x,path:t}),P.forEach(function(on){r.apply({type:"insert_node",node:on,path:t})});for(var d=Path.parent(t),T=Node.get(r,d),M=0;Node.has(T,[M+1]);)if(Text.isText(Node.get(T,[M]))&&Text.isText(Node.get(T,[M+1]))){var W=_toConsumableArray(d);W.push(M+1);var E=Node.get(r,W),N=Node.string(E);r.apply({type:"remove_node",path:W,node:E});var nn=Path.previous(W),G=Node.string(Node.get(r,nn));r.apply({type:"insert_text",path:Path.previous(W),offset:G.length,text:N}),T=Node.get(r,d)}else M++;i==null||i(),Path.previous(t)})}},Ar=function(r,t,i){var x=i.at;r.apply({type:"set_node",path:x,properties:t,newProperties:t}),r.onChange()},qt=function(r,t,i){r.apply({type:"remove_node",path:i,node:Node.get(r,i)}),r.apply({type:"insert_node",path:i,node:t})},Rr=function(r,t){r&&(U.ML.withoutNormalizing(r,function(){var i=xe(r.children);i.forEach(function(P){r.apply({type:"remove_node",path:[0],node:P})});var x=t?xe(t):[{type:"s",children:[{text:""}]}];x.reverse(),x.forEach(function(P){r.apply({type:"insert_node",path:[0],node:P})})}),r.onChange())},ge=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.reduce(function(t,i){return t+U.NB.string(i)},"")},xe=function(r){return JSON.parse(JSON.stringify(r))},Me=function(){var r="";return r},_t=function(r){var t;return(t=r[0])===null||t===void 0||(t=t.children)===null||t===void 0?void 0:t.map(function(i){return i.children.map(function(x){return x.text}).join("")}).join("")},na=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=r%60,i=parseInt("".concat(r/60)),x=0;return i>60&&(i=i%60,x=parseInt("".concat(i/60))),"".concat(x?"".concat(Ne(x),":"):"").concat(Ne(i),":").concat(Ne(t))},Ne=function(r){return r>=10?"".concat(r):"0".concat(r)},Wr=function(r,t){if(!(!r||!t))return se.F3.findPath(r,t)},Ur=function(r){r&&U.ML.withoutNormalizing(r,function(){var t=U.ML.end(r,[]);U.YR.select(r,t),se.F3.focus(r),r.onChange()})},zr=function(r,t,i){var x=r.isInline,P=r.isVoid,d=r.insertText,T=r.insertBreak,M=r.apply;r.isInline=function(E){var N;return((N=i[E.type])===null||N===void 0?void 0:N.isInline)||x(E)},r.isVoid=function(E){var N;return((N=i[E.type])===null||N===void 0?void 0:N.isVoid)||P(E)};var W=function(N){var nn=parseInt(r.maxLength||t||"1000"),G=Qe(r,{tagRules:i}),on=G.length;if(on+N.length>nn?(d(N.substring(0,nn-on)),Se.MO.withoutSaving(r,function(){d(N.substring(nn-on,N.length))})):d(N),r.selection&&on+N.length>nn){var cn=r.selection.focus,yn=cn.path,Q=cn.offset,q=Q-(on+N.length-nn),jn=N.substring(nn-on,N.length),En=qn.Z.get({id:"components.SlateEditor.utils.withEditor.YouCanEnterAMaximum",dm:"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57"},{maxLen:nn});Se.MO.withoutSaving(r,function(){r.apply({type:"remove_text",path:yn,offset:q,text:jn})}),le.ZP.warning(En)}};return r.insertText=W,r.insertFragment=function(E){var N=ge(E);W(N)},r.insertBreak=function(){var E=r.selection;if(E){var N=Array.from(U.ML.nodes(r,{at:E,match:function(cn){return!U.ML.isEditor(cn)&&U.W_.isElement(cn)&&cn.type!=="s"}})),nn=oe()(N,1),G=nn[0];if(G)return;T()}},r.apply=function(E){E.type==="set_selection"&&Be||M(E)},r},Hr=(0,X.forwardRef)(function(e,r){var t=Sr(),i=e.value,x=e.wordLimit,P=x===void 0?1e3:x,d=e.disabled,T=e.onChange,M=e.variables,W=(0,X.useRef)(!1),E=(0,X.useRef)(Ve(e.tagRules)),N=(0,X.useMemo)(function(){return zr((0,se.BU)((0,Se.VC)((0,U.Jh)())),P,E.current)},[]),nn=(0,X.useRef)(N.selection),G=(0,X.useRef)(M);(0,X.useEffect)(function(){E.current=Ve(e.tagRules)},[e.tagRules]),(0,X.useEffect)(function(){G.current=M},[M]),(0,X.useEffect)(function(){var mn;if(!W.current){W.current=!0;return}N.maxLength=P;var $=On();Qn(((mn=ve(me($==null?void 0:$.slice(0,P))))===null||mn===void 0||(mn=mn[0])===null||mn===void 0?void 0:mn.children)||[{type:"s",children:[{text:""}]}])},[P]),(0,X.useImperativeHandle)(r,function(){return{editor:N,getEditorValue:On,_insertNodes:Kn,_setNodes:Nn,_setEditorContent:Qn,_findNodePath:Xn,_wrapNodes:ee,_serialize:Zn,_generateTextBySelection:kn,_insertFragment:Dn,_setEditorContentByStr:Vn}});var on=(0,X.useMemo)(function(){var mn=ve(kr(me(i))),$;return mn&&(mn[0].type==="speak"?$=mn[0].children:$=mn),{initValue:$}},[i]),cn=on.initValue,yn=(0,X.useState)(cn||[{type:"s",children:[{text:""}]}]),Q=oe()(yn,2),q=Q[0],jn=Q[1],En=function($){JSON.stringify((N==null?void 0:N.selection)||"")!==JSON.stringify(nn.current||"")&&(nn.current=N==null?void 0:N.selection);var rn=On();i!==rn&&(T==null||T(On()),jn($))},Wn=function($){var rn=$.element,ae=rn.type,re=E.current[ae].render;return re?(0,L.jsx)(re,I()(I()({},$),{},{renderVarLabel:e.renderVarLabel})):(0,L.jsx)(L.Fragment,{})},Tn=(0,X.useCallback)(function(mn){var $=mn.attributes,rn=mn.children,ae=mn.leaf;return(0,L.jsx)("span",I()(I()({},$),{},{style:{paddingLeft:ae.text===""?"3px":void 0},children:rn}))},[]),Un=function(){Be=!0},wn=function(){Be=!1},On=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe(N,I()(I()({},$),{},{tagRules:E.current}))},Nn=function($,rn){Ar(N,$,rn)},Kn=function($){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ge(N,$,I()(I()({},rn),{},{rules:E.current}))},ee=function($){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ir(N,$,I()(I()({},rn),{},{rules:E.current}))},Qn=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];Rr(N,$)},Vn=function(){var $,rn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";Qn((($=ve(me(rn==null?void 0:rn.slice(0,P))))===null||$===void 0||($=$[0])===null||$===void 0?void 0:$.children)||[{type:"s",children:[{text:""}]}])},Xn=function($){return Wr(N,$)},Zn=function($){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Te($,I()(I()({},rn),{},{tagRules:E.current}))},kn=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!N.selection)return null;var rn=U.NB.fragment(N,N.selection);return Te(rn,I()(I()({},$),{},{tagRules:E.current}))},Dn=function($){var rn,ae=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,re=On();if(re.length>=P){le.ZP.warning(qn.Z.get({id:"components.commonComponents.SlateEditor.TheNumberOfWordsCannot",dm:"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57"}));return}(!N.selection||ae)&&Ur(N);var de=re.endsWith("/n");ae&&re&&!de&&N.insertBreak();var fe=$.slice(0,P-re.length),Re=ve(me(fe))||[];(rn=Re[0])===null||rn===void 0||rn.children.forEach(function(he,We){var Ue;We!==0&&N.insertBreak(),(Ue=he.children)===null||Ue===void 0||Ue.forEach(function(ze){ze.text?N.insertText(ze.text):Kn(ze)})})};(0,X.useEffect)(function(){var mn=On();i!==mn&&(T==null||T(On()))},[]);var Mn=function($){var rn=$.clipboardData.getData("text/plain");Dn(rn,!1),$.preventDefault()};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(t,{}),(0,L.jsx)("div",{id:"text-editor",className:hn()("text-editor",e.className),children:(0,L.jsx)(se.mH,{editor:N,value:q,onChange:En,children:(0,L.jsx)(se.CX,{onKeyDown:e.onKeyDown,placeholder:e.placeholder||qn.Z.get({id:"components.commonComponents.SlateEditor.EnterHere",dm:"\u5728\u8FD9\u91CC\u8F93\u5165"}),onBlur:e.onBlur,onFocus:e.onFocus,className:hn()("text-editor-content",e.contentClassName),readOnly:d,renderElement:Wn,renderLeaf:Tn,onCompositionStart:Un,onCompositionEnd:wn,onPaste:Mn,maxLength:e.wordLimit,onCopy:function($){var rn=kn()||"";$.clipboardData.setData("text/plain",rn),$.preventDefault()}})})})]})}),wr=Hr,Be=!1,Je=n(96868),$r=n(46387),Kr=n(16721),Qr=n(82092),ce=n.n(Qr),Ye,Vr=(0,xn.Z)(Ye||(Ye=tn()([`
.`,`-slider-selector {
  display: flex;
  gap: 16px;
  height: 32px;
  margin: 12px;
  
  .`,`-slider {
    flex: 1;
    
    &.`,"-slider-horizontal.",`-slider-with-marks {
      margin: 0;
    }
  }
  
  .`,`-input-number {
    flex: 1;
    width: 100%;
    height: 100%;
  }
  
  .`,"-input-number .",`-input-number-outlined {
    margin-top: 16px;
  }
  
  .`,`-slider-dot {
    opacity: 0;
  }
}
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix});function Gr(e){var r=(0,ln.getCommonConfig)(),t=r.sparkPrefix,i=Vr(),x=function(d){var T=typeof d=="string"?parseFloat(d):d;if(T===null||isNaN(T)){var M;(M=e.onChange)===null||M===void 0||M.call(e,null);return}if(T<e.min){var W;(W=e.onChange)===null||W===void 0||W.call(e,e.min)}else if(T>e.max){var E;(E=e.onChange)===null||E===void 0||E.call(e,e.max)}else{var N;(N=e.onChange)===null||N===void 0||N.call(e,T)}};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(i,{}),(0,L.jsxs)("div",{onMouseUp:function(){var d;return(d=e.onBlur)===null||d===void 0?void 0:d.call(e)},className:hn()("".concat(t,"-slider-selector"),e.className),children:[(0,L.jsx)(Je.Z,{disabled:e.disabled,onChange:x,value:e.value===null?void 0:e.value,min:e.min,max:e.max,step:e.step,marks:e.marks||ce()(ce()({},e.min,e.min),e.max,e.max),tooltip:{getPopupContainer:function(d){return d}}}),(0,L.jsx)("div",{style:I()({width:"48px"},e.inputNumberWrapperStyle),children:(0,L.jsx)(h.Z,{disabled:e.disabled,controls:!1,min:e.min,max:e.max,onBlur:function(){var d;return(d=e.onBlur)===null||d===void 0?void 0:d.call(e)},step:e.step,value:e.value,onChange:x,precision:e.precision})})]})]})}var Jr=n(27975),Yr=n(27485),Xr=n(53713),qr=n(11596),_r=n(55395),nt=n(47756),et=n(36555),rt=n(19777),tt=n(67825),ie=n.n(tt),at=n(62892),ot=n(56630),Xe,it=(0,xn.Z)(Xe||(Xe=tn()([`
// Audio \u4E3B\u5BB9\u5668\u6837\u5F0F
.`,`-audio-container {
  position: relative;
  box-sizing: border-box;
}

.`,`-audio-element {
  display: none;
}

.`,`-audio-controller-wrapper {
  width: 100%;
}
`])),function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix}),lt=["controls","children","className","style"],st=(0,X.forwardRef)(function(e,r){var t=e.controls,i=e.children,x=e.className,P=e.style,d=ie()(e,lt),T=(0,ln.getCommonConfig)(),M=T.sparkPrefix,W=it(),E=(0,X.useState)(0),N=oe()(E,2),nn=N[0],G=N[1],on=(0,X.useState)(0),cn=oe()(on,2),yn=cn[0],Q=cn[1],q=(0,X.useState)(!1),jn=oe()(q,2),En=jn[0],Wn=jn[1],Tn=(0,ot.Z)(e,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!1}),Un=oe()(Tn,2),wn=Un[0],On=Un[1],Nn=(0,X.useRef)(null),Kn=function(Mn){Nn.current=Mn,r&&(typeof r=="function"?r(Mn):r.current=Mn)};(0,X.useEffect)(function(){var Dn;return En&&(Dn=setInterval(function(){Nn.current&&G(Nn.current.currentTime)},16)),function(){Dn&&clearInterval(Dn)}},[En]);var ee=function(){Nn.current&&Q(Nn.current.duration)},Qn=function(){Nn.current&&(En?Nn.current.pause():Nn.current.play(),Wn(!En))},Vn=function(){Wn(!0)},Xn=function(){Wn(!1)},Zn=function(){var Mn;Wn(!1),G(((Mn=Nn.current)===null||Mn===void 0?void 0:Mn.duration)||0)},kn=function(Mn){Nn.current&&(Nn.current.currentTime=Mn,G(Mn))};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(W,{}),(0,L.jsxs)("div",{className:hn()("".concat(M,"-audio-container"),x),style:P,children:[(0,L.jsx)("audio",I()(I()({ref:Kn},d),{},{muted:wn,className:"".concat(M,"-audio-element"),onLoadedMetadata:ee,onPlay:Vn,onPause:Xn,onEnded:Zn})),t&&(0,L.jsx)(at.Z,{className:"".concat(M,"-audio-controller-wrapper"),isPlaying:En,currentTime:nn,duration:yn,enableVolume:!0,enableFullscreen:!1,muted:wn,onMute:function(){return On(!wn)},onPlayPause:Qn,onProgressClick:kn}),i]})]})}),ct=st,qe=n(3897),ut=n(6002),ne=n(84674),_e,nr=(0,xn.Z)(_e||(_e=tn()([`
.`,`-modal {
  .`,`-modal {
    min-width: 300px;
    max-width: 80vw;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 !important;
  }
  .`,`-modal-title {
    min-height: 24px;
  }
  
  .`,`-modal-content {
    padding: 20px 0;
    border: 1px solid var(--`,`-color-border-secondary);
    
    .`,`-modal-header {
      padding: 0 20px 20px 16px;
      margin-bottom: 0;
      
      .`,`-modal-title {
        font-size: 18px;
        font-weight: 500;
        line-height: 32px;
        color: var(--`,`-color-text);
        
        .`,`-modal-title-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          
          .`,`-modal-title {
            flex: 1;
            display: flex;
            justify-content: center;
            text-align: center;
          }

          .`,`-modal-title-padding {
            padding-left: 32px;
          }
          
          .`,`-modal-title-close {
            font-size: 20px;
            cursor: pointer;
          }
        }
      }
    }
    
    .`,`-modal-body {
      max-height: 60vh;
      padding: 0 20px;
      font-size: 14px;
      color: var(--`,`-color-text);
    }
      
    .`,`-modal-confirm-body-wrapper {
      .`,`-modal-confirm-btns {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        .`,`-btn {
          flex: 1;
        }
      }
    }
    
    .`,`-modal-footer {
      padding: 16px 20px 0 20px;
      margin-top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .`,`-btn {
        flex: 1;
      }
      
      .`,`-modal-footer-wrapper {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .`,`-modal-footer-info {
          font-size: 14px;
          font-weight: normal;
          line-height: 24px;
          color: var(--`,`-color-text-tertiary);
        }
        
        .`,`-modal-footer-origin-node {
          display: flex;
          gap: 12px;
        }
      }
    }
    
    .`,`-modal-close {
      width: 32px;
      height: 32px;
      top: 16px;
      right: 16px;
      
      .`,`-modal-close-icon {
        color: var(--`,`-color-text);
      }
      
      &:hover {
        background: none;
      }
    }
  }
}

.`,`-show-divider {
  .`,`-modal-content {
    .`,`-modal-header {
      border-bottom: 1px solid var(--`,`-color-border-secondary);
    }
    .`,`-modal-body {
      padding: 16px 20px;
    }
    .`,`-modal-footer {
      border-top: 1px solid var(--`,`-color-border-secondary);
    }
  }
}
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),dt=["showDivider","closable"],er=function(){var r=window.getComputedStyle(document.body).overflow,t=window.getComputedStyle(document.body).position,i=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(i,"px"),function(){document.body.style.overflow=r,document.body.style.position=t,document.body.style.width="",document.body.style.top="",window.scrollTo(0,i)}},Yn=function(r){var t=nr(),i=(0,ln.getCommonConfig)(),x=i.sparkPrefix,P=r.showDivider,d=P===void 0?!0:P,T=r.closable,M=T===void 0?!0:T,W=ie()(r,dt);(0,X.useEffect)(function(){if(r.open){var G=er();return G}},[r.open]);var E=function(on){return r.info?(0,L.jsxs)("div",{className:"".concat(x,"-modal-footer-wrapper"),children:[(0,L.jsx)("span",{className:"".concat(x,"-modal-footer-info"),children:r.info}),(0,L.jsx)("div",{className:"".concat(x,"-modal-footer-origin-node"),children:on})]}):on},N=M?r.closeIcon||(0,L.jsx)(ut.Z,{className:"".concat(x,"-modal-title-close"),onClick:function(on){var cn;(cn=r.onCancel)===null||cn===void 0||cn.call(r,on)}}):null,nn=r.footer===void 0?E:r.footer;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(t,{}),(0,L.jsx)(ne.Z,I()(I()({},W),{},{centered:!1,closeIcon:null,width:r.width||"auto",title:(0,L.jsxs)("div",{className:"".concat(x,"-modal-title-wrapper"),children:[(0,L.jsx)("div",{className:hn()("".concat(x,"-modal-title"),ce()({},"".concat(x,"-modal-title-padding"),M)),children:r.title}),N]}),wrapClassName:hn()("".concat(x,"-modal"),ce()({},"".concat(x,"-show-divider"),d),r.wrapClassName,"animate-in"),footer:nn,transitionName:""}))]})};Yn.useModal=ne.Z.useModal;var ue=function(r){return function(t){var i=er(),x=(0,ln.getCommonConfig)(),P=x.sparkPrefix,d=t==null?void 0:t.afterClose,T=t==null?void 0:t.content;function M(){var E=nr();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(E,{}),T]})}var W=I()(I()({},t),{},{content:(0,L.jsx)(M,{}),width:t.width||"auto",centered:!1,transitionName:"",wrapClassName:hn()("".concat(P,"-modal"),t.wrapClassName,"animate-in"),afterClose:function(){i();for(var N=arguments.length,nn=new Array(N),G=0;G<N;G++)nn[G]=arguments[G];d==null||d.apply(void 0,nn)}});return r(W)}};Yn.success=ue(ne.Z.success),Yn.error=ue(ne.Z.error),Yn.warning=ue(ne.Z.warning),Yn.info=ue(ne.Z.info),Yn.confirm=ue(ne.Z.confirm),Yn.SMALL_WIDTH=640,Yn.MEDIUM_WIDTH=800,Yn.LARGE_WIDTH=960;var ft=Yn,mt=n(94042),vt=n(10178),rr,tr=(0,xn.Z)(rr||(rr=tn()([`
.`,`-drawer {
  .`,`-drawer-header {
    padding: 12px 20px;
    border-bottom: none;
    
    .`,`-drawer-header-title {
      display: flex;
      flex-direction: row;
      
      .`,`-drawer-title {
        font-size: 16px;
        font-weight: 500;
        line-height: 28px;
        color: var(--`,`-color-text);
        display: flex;
        justify-content: center;
        padding-right: 32px;
      }
      
      .`,`-drawer-close {
        width: 32px;
        height: 32px;
      }
    }
  }
  
  .`,`-drawer-body {
    --`,`-padding-lg: 20px;
  }
  
  .`,`-drawer-footer {
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: none;
    
    .`,`-drawer-footer-info {
      font-size: 14px;
      line-height: 24px;
      color: var(--`,`-color-text-tertiary);
    }
    
    .`,`-drawer-footer-buttons {
      display: flex;
      gap: 12px;
    }
  }
  
  .`,`-drawer-close {
    color: var(--`,`-color-text);
    margin: 0;
  }
}

.`,"-drawer.",`-show-divider {
  .`,`-drawer-header {
    border-bottom: 1px solid var(--`,`-color-border-secondary);
  }
  
  .`,`-drawer-footer {
    border-top: 1px solid var(--`,`-color-border-secondary);
  }
}
.`,`-drawer-bottom {
  .`,`-drawer-content-wrapper {
    border-radius: 16px 16px 0 0;
  }
  .`,`-drawer-content {
    border-radius: 16px 16px 0 0;
  }
}
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),gt=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],xt=function(r){var t=r.onOk,i=r.onCancel,x=r.okText,P=x===void 0?"\u786E\u5B9A":x,d=r.okButtonProps,T=r.cancelText,M=T===void 0?"\u53D6\u6D88":T,W=r.cancelButtonProps,E=r.info,N=r.footer,nn=ie()(r,gt),G=tr(),on=(0,ln.getCommonConfig)(),cn=on.antPrefix,yn=function(q){if(i)i();else{var jn;(jn=nn.onClose)===null||jn===void 0||jn.call(nn,q)}};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(G,{}),(0,L.jsx)(un.Z,I()(I()({},nn),{},{footer:N||(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:"".concat(cn,"-drawer-footer-info"),children:E}),(0,L.jsxs)("div",{className:"".concat(cn,"-drawer-footer-buttons"),children:[(0,L.jsx)(H.Z,I()(I()({onClick:yn},W),{},{children:M})),(0,L.jsx)(H.Z,I()(I()({type:"primary",onClick:t},d),{},{children:P}))]})]})}))]})},pt=xt,ht=["children","className","style","showDivider"],ar=function(r){var t=r.children,i=r.className,x=r.style,P=r.showDivider,d=P===void 0?!0:P,T=ie()(r,ht),M=tr(),W=(0,ln.getCommonConfig)(),E=W.sparkPrefix,N=W.antPrefix;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(M,{}),(0,L.jsx)(vt.Z,I()(I()({closeIcon:(0,L.jsx)(mt.Z,{size:24}),className:hn()("".concat(E,"-drawer"),i,ce()({},"".concat(N,"-show-divider"),d)),style:I()({},x)},T),{},{children:t}))]})};Object.assign(ar,{Confirm:pt});var Pt=ar,yt=n(58911),bt=n(88602),Ct=n(62910),jt=n(99090),pe=n(65122),or,ir=(0,xn.Z)(or||(or=tn()([`
.`,`-alert-dialog {
  min-width: 300px;
  max-width: 80vw !important;

  .`,`-modal-body {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--`,`-color-text-secondary);
  }
  
  .`,`-modal-content {
    padding: 20px;
  }

  .`,`-modal-confirm-content {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--`,`-color-text-secondary);
  }

  .`,`-modal-confirm-paragraph {
    max-width: 100%;
  }
  .`,`-modal-confirm-btns {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    .`,`-btn {
      flex: 1;
    }
  }
}
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Et=["children","type","danger","title","width","className"],lr=function(){var r=window.getComputedStyle(document.body).overflow,t=window.getComputedStyle(document.body).position,i=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(i,"px"),function(){document.body.style.overflow=r,document.body.style.position=t,document.body.style.width="",document.body.style.top="",window.scrollTo(0,i)}},sr=function(r){var t=function(cn){var yn=cn.type,Q=cn.title,q=(0,ln.getCommonConfig)(),jn=q.antPrefix;switch(yn){case"success":return(0,L.jsxs)(pe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,L.jsx)(yt.Z,{style:{color:"var(--".concat(jn,"-color-success)"),fontSize:18,margin:"0 3px"}}),Q]});case"warning":case"confirm":return(0,L.jsxs)(pe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,L.jsx)(bt.Z,{style:{color:"var(--".concat(jn,"-color-warning)"),fontSize:18,margin:"0 3px"}}),Q]});case"info":return(0,L.jsxs)(pe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,L.jsx)(Ct.Z,{style:{color:"var(--".concat(jn,"-color-info)"),fontSize:18,margin:"0 3px"}}),Q]});case"error":return(0,L.jsxs)(pe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,L.jsx)(jt.Z,{style:{color:"var(--".concat(jn,"-color-error)"),fontSize:18,margin:"0 3px"}}),Q]});default:return qn.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},i=r.children,x=r.type,P=x===void 0?"info":x,d=r.danger,T=d===void 0?!1:d,M=r.title,W=r.width,E=W===void 0?"auto":W,N=r.className,nn=N===void 0?"":N,G=ie()(r,Et);return{width:E,transitionName:"",restProps:G,closeIcon:null,title:t({type:P,title:M}),okButtonProps:{danger:P==="error"||P==="warning"||T},destroyOnClose:!0,className:hn()(nn,"animate-in","".concat((0,ln.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:r.content||i,children:i}},cr=function(r){var t=sr(r),i=ir();return(0,X.useEffect)(function(){if(r.open){var x=lr();return x}},[r.open]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(i,{}),(0,L.jsx)(ne.Z,I()(I()({width:t.width,transitionName:""},t.restProps),{},{closeIcon:null,title:t.title,okButtonProps:t.okButtonProps||{},destroyOnClose:t.destroyOnClose,className:t.className,children:t.content||t.children}))]})},St=["success","info","warning","error","confirm"];St.forEach(function(e){cr[e]=function(r){var t=sr(I()(I()({},r),{},{type:e})),i=lr();function x(){var P=ir();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(P,{}),t.content]})}return ne.Z.confirm(I()(I()(I()({},t),t.restProps),{},{content:(0,L.jsx)(x,{}),icon:null,afterClose:function(){var d;if(i(),(d=t.restProps)!==null&&d!==void 0&&d.afterClose){var T;(T=t.restProps).afterClose.apply(T,arguments)}}}))}});var Dt=cr,Tt=n(3658);function ur(){return Oe.apply(this,arguments)}function Oe(){return Oe=_n()(Bn()().mark(function e(){var r,t=arguments;return Bn()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return r=t.length>0&&t[0]!==void 0?t[0]:100,x.abrupt("return",new Promise(function(P){setTimeout(P,r)}));case 2:case"end":return x.stop()}},e)})),Oe.apply(this,arguments)}var Mt=n(76892),dr=n(4853);function fr(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.timeout,i=t===void 0?5e3:t,x=r.intervalTime,P=x===void 0?100:x,d=Date.now();return new Promise(function(T,M){var W=setInterval(function(){var E=e();E?(clearInterval(W),T(E)):Date.now()-d>i&&(M("timeout"),clearInterval(W))},P)})}function Nt(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return fr(function(){return document.querySelector(e)},r)}var mr=n(1783),Bt=["product","action","url","version","region","headers"],Ot=function(){var e=_n()(Bn()().mark(function t(i,x,P){var d,T,M,W,E,N,nn,G,on,cn,yn,Q,q,jn,En;return Bn()().wrap(function(Tn){for(;;)switch(Tn.prev=Tn.next){case 0:return T=i.product,M=i.action,W=i.url,E=i.version,N=i.region,nn=i.headers,G=nn===void 0?{}:nn,on=ie()(i,Bt),cn="".concat(W||"/data/api.json","?action=").concat(M,"&product=").concat(T),E&&(cn+="&version=".concat(E)),yn={sec_token:((d=window.ALIYUN_CONSOLE_CONFIG)===null||d===void 0?void 0:d.SEC_TOKEN)||"",region:N},x&&(yn.params=JSON.stringify(x)),P&&Object.assign(yn,P),Q=I()({method:"post",credentials:"same-origin",headers:I()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},G)},on),q=Object.assign({},Q),q.body=(0,mr.stringify)(yn),Tn.next=11,fetch(cn,q);case 11:return jn=Tn.sent,Tn.next=14,jn.json();case 14:if(En=Tn.sent,!(En.code!=="200"&&!En.successResponse)){Tn.next=17;break}return Tn.abrupt("return",Promise.reject(En));case 17:return Tn.abrupt("return",En);case 18:case"end":return Tn.stop()}},t)}));function r(t,i,x){return e.apply(this,arguments)}return r}(),vr=Ot;function Zt(e,r){return Ze.apply(this,arguments)}function Ze(){return Ze=_n()(Bn()().mark(function e(r,t){var i,x,P;return Bn()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:x=r==null||(i=r.getReader)===null||i===void 0?void 0:i.call(r),x||(console.log("[sse]error: Can Not Find Reader Object"),console.log("[sse]StreamInfo: ",r));case 2:return T.next=4,x.read();case 4:if((P=T.sent).done){T.next=8;break}try{t(P.value)}catch(M){console.log("[sse-error][onmessage] pleach check `onmessage` or `onJsonText`.",M)}T.next=2;break;case 8:case"end":return T.stop()}},e)})),Ze.apply(this,arguments)}function kt(e){var r,t,i,x=!1;return function(d){r===void 0?(r=d,t=0,i=-1):r=Lt(r,d);for(var T=r.length,M=0;t<T;){x&&(r[t]===10&&(M=++t),x=!1);for(var W=-1;t<T&&W===-1;++t)switch(r[t]){case 58:i===-1&&(i=t-M);break;case 13:x=!0;case 10:W=t;break}if(W===-1)break;e(r.subarray(M,W),i),M=t,i=-1}M===T?r=void 0:M!==0&&(r=r.subarray(M),t-=M)}}function Ft(e,r,t){var i=gr(),x=new TextDecoder;return function(d,T){if(d.length===0)t==null||t(i),i=gr();else if(T>0){var M=x.decode(d.subarray(0,T)),W=T+(d[T+1]===32?2:1),E=x.decode(d.subarray(W));switch(M){case"data":i.data=i.data?"".concat(i.data,`
`).concat(E):E;break;case"event":i.event=E;break;case"id":e(i.id=E);break;case"retry":var N=parseInt(E,10);isNaN(N)||r(i.retry=N);break}}}}function Lt(e,r){var t=new Uint8Array(e.length+r.length);return t.set(e),t.set(r,e.length),t}function gr(){return{data:"",event:"",id:"",retry:void 0}}var It=["signal","headers","onopen","onmessage","onclose","onerror","fetch","autoRetryTime","timeout","debug"],ke="text/event-stream",At=1e3,xr="last-event-id";function pr(e,r){return Fe.apply(this,arguments)}function Fe(){return Fe=_n()(Bn()().mark(function e(r,t){var i,x,P,d,T,M,W,E,N,nn,G,on,cn;return Bn()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return i=t.signal,x=t.headers,P=t.onopen,d=t.onmessage,T=t.onclose,M=t.onerror,W=t.fetch,E=t.autoRetryTime,N=t.timeout,nn=t.debug,G=nn===void 0?!1:nn,on=ie()(t,It),cn=0,Q.abrupt("return",new Promise(function(q,jn){var En=I()({},x);En.accept||(En.accept=ke);var Wn=At,Tn=0,Un=0,wn=new AbortController;function On(){var Xn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(G&&console.log("[sse] dispose"),window.clearTimeout(Tn),window.clearTimeout(Un),!Xn){var Zn,kn;(Zn=wn)===null||Zn===void 0||(kn=Zn.abort)===null||kn===void 0||kn.call(Zn)}}function Nn(){window.clearTimeout(Un),N!==0&&(Un=window.setTimeout(function(){G&&console.log("[sse] timeout"),jn(new Error("timeout")),M==null||M(new Error("timeout")),On()},N||60*1e3))}i==null||i.addEventListener("abort",function(){On(),q()});var Kn=W!=null?W:window.fetch,ee=P!=null?P:Rt;function Qn(){return Vn.apply(this,arguments)}function Vn(){return Vn=_n()(Bn()().mark(function Xn(){var Zn,kn,Dn,Mn;return Bn()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.prev=0,Nn(),$.next=4,Kn(r,I()(I()({},on),{},{headers:En,signal:(Zn=wn)===null||Zn===void 0?void 0:Zn.signal}));case 4:return kn=$.sent,$.next=7,ee(kn);case 7:if(kn.body){$.next=11;break}return G&&console.log("[sse]no body, delay 100ms"),$.next=11,ur(100);case 11:return G&&console.log("[sse]response.body",kn.body),$.next=14,Zt(kn.body,kt(Ft(function(rn){rn?En[xr]=rn:delete En[xr]},function(rn){Wn=rn},function(rn){Nn(),d==null||d(rn)})));case 14:wn=null,T==null||T(),On(),q(),$.next=43;break;case 20:if($.prev=20,$.t0=$.catch(0),$.t0&&console.error("[sse]err",$.t0),!(!(i!=null&&i.aborted)&&E&&cn<E)){$.next=39;break}return $.prev=24,cn+=1,Mn=(Dn=M==null?void 0:M($.t0))!==null&&Dn!==void 0?Dn:Wn,window.clearTimeout(Tn),typeof Mn=="number"&&(G&&console.log("[sse] retry "+cn),Tn=window.setTimeout(Qn,Mn)),$.abrupt("return",Promise.resolve());case 32:$.prev=32,$.t1=$.catch(24),G&&console.log("[sse] reject innerErr ",$.t1),On(),jn($.t1);case 37:$.next=43;break;case 39:G&&console.log("[sse] reject finally"),On($.t0 instanceof Response||$.t0 instanceof DOMException&&$.t0.name==="AbortError"),M==null||M($.t0),jn($.t0);case 43:case"end":return $.stop()}},Xn,null,[[0,20],[24,32]])})),Vn.apply(this,arguments)}Qn()}));case 3:case"end":return Q.stop()}},e)})),Fe.apply(this,arguments)}function Rt(e){var r=e.headers.get("content-type");if(!(r!=null&&r.startsWith(ke)))throw new Error("Expected content-type to be ".concat(ke,", Actual: ").concat(r))}function Wt(e){return Le.apply(this,arguments)}function Le(){return Le=_n()(Bn()().mark(function e(r){var t,i,x,P,d,T,M;return Bn()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return t=r.action,i=r.body,x=r.product,P=r.version,d=r.region,T=r.params,M={action:t,product:x,region:d,url:"/tool/sse/get.json",version:P},E.abrupt("return",vr(M,T,{content:JSON.stringify(i)}));case 3:case"end":return E.stop()}},e)})),Le.apply(this,arguments)}function Ut(e,r,t,i){var x=r.onMessage,P=r.onClose,d=r.onError,T=r.timeout,M=e.body,W=e.uri,E=e.headers,N=e.query,nn=e.path,G=E["Content-Type"],on="".concat(W.replace(/\/$/,"")).concat(nn);N&&Object.keys(N).length&&(on="".concat(on,"?").concat((0,mr.stringify)(N)));try{i.value=!1,pr(on,{method:"POST",body:G==="application/x-www-form-urlencoded"?new URLSearchParams(JSON.parse(M)):M,signal:t.signal,timeout:T,headers:E,onopen:function(yn){return yn.status!==200?Promise.reject(yn):Promise.resolve()},onmessage:function(yn){try{var Q=yn.data,q=Q===void 0?"{}":Q,jn=JSON.parse(q);x==null||x(jn)}catch(En){d==null||d(En)}},onclose:function(){i.value=!0,P==null||P()},onerror:function(yn){i.value=!0,P==null||P(),!(yn instanceof DOMException&&yn.name==="AbortError")&&(d==null||d(yn))}})}catch(cn){i.value=!0,d==null||d(cn),P==null||P()}}function zt(e,r,t){return Ie.apply(this,arguments)}function Ie(){return Ie=_n()(Bn()().mark(function e(r,t,i){var x,P,d,T;return Bn()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return x=r.onClose,P=r.onError,W.prev=1,W.next=4,Wt(r);case 4:d=W.sent,T=d.data,Ut(T,r,t,i),W.next=13;break;case 9:W.prev=9,W.t0=W.catch(1),x==null||x(),P==null||P(W.t0);case 13:case"end":return W.stop()}},e,null,[[1,9]])})),Ie.apply(this,arguments)}function Ht(e){return Ae.apply(this,arguments)}function Ae(){return Ae=_n()(Bn()().mark(function e(r){var t,i;return Bn()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return t=new AbortController,i={value:!0},P.next=4,zt(r,t,i);case 4:return P.abrupt("return",{dispose:function(){i.value&&t.abort("\u53D6\u6D88\u8BF7\u6C42")}});case 5:case"end":return P.stop()}},e)})),Ae.apply(this,arguments)}var wt=n(4287);function $t(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof e!="string")return t||console.warn(e,"is not valid json"),r?e:null;try{return JSON.parse(e)}catch(i){return t||console.warn(e,"is not valid json"),r?e:null}}function Kt(e){for(var r=new TextEncoder,t=r.encode(e),i="",x=0;x<t.length;x++)i+=String.fromCharCode(t[x]);var P=btoa(i);return P}function Qt(e){for(var r=atob(e),t=new Uint8Array(r.length),i=0;i<r.length;i++)t[i]=r.charCodeAt(i);var x=new TextDecoder("utf-8"),P=x.decode(t);return P}var hr=(0,O.Z)(s),Pr=(0,O.Z)(b,!0),Vt=(0,O.Z)(B),Gt=(0,O.Z)(w,!0)},4853:function(dn,z,n){n.d(z,{JG:function(){return R},rb:function(){return S}});var b=n(26068),s=n.n(b),w=n(67825),B=n.n(w),F=n(75271),m=["maxWidth","maxHeight"];function A(){var O;return((O=window.g_config)===null||O===void 0?void 0:O.isIntl)||!1}var R=function(c){if(navigator.clipboard)navigator.clipboard.writeText(c);else{var v=document.createElement("textarea");document.body.appendChild(v),v.style.position="fixed",v.style.clip="rect(0 0 0 0)",v.style.top="10px",v.value=c,v.select(),document.execCommand("copy",!0),document.body.removeChild(v)}},S=function(c){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=v.maxWidth,h=v.maxHeight,p=B()(v,m);return s()({overlayInnerStyle:{maxWidth:o||326,maxHeight:h||150,overflowY:"auto",padding:"6px 12px"},title:c,arrow:!1},p)};function k(O){return React.isValidElement(O)}function D(O){var c=O||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(c)}var C=function(c){return c>=10?c:"0".concat(c)},y=function(c){if(c<60){var v=Math.ceil(c);return"0:".concat(C(v))}var o=Math.floor(c/60),h=Math.ceil(c%60);return"".concat(C(o),":").concat(C(h))}}}]);
