"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[3061],{82393:function(dn,w,n){n.r(w),n.d(w,{useStyle:function(){return Z}});var b=n(53649),l=n.n(b),$=n(88974),N,Z=(0,$.Z)(N||(N=l()([`
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
`])),function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix})},55002:function(dn,w,n){n.r(w);var b=n(26068),l=n.n(b),$=n(67825),N=n.n($),Z=n(1615),m=n(58911),I=n(88602),A=n(62910),S=n(99090),O=n(65122),D=n(84674),C=n(82187),y=n.n(C),B=n(31209),s=n(82393),v=n(52676),o=["children","type","danger","title","width","className"],P=function(i){var j=function(cn){var L=cn.type,fn=cn.title,hn=(0,B.getCommonConfig)(),sn=hn.antPrefix;switch(L){case"success":return(0,v.jsxs)(O.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,v.jsx)(m.Z,{style:{color:"var(--".concat(sn,"-color-success)"),fontSize:18,margin:"0 3px"}}),fn]});case"warning":case"confirm":return(0,v.jsxs)(O.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,v.jsx)(I.Z,{style:{color:"var(--".concat(sn,"-color-warning)"),fontSize:18,margin:"0 3px"}}),fn]});case"info":return(0,v.jsxs)(O.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,v.jsx)(A.Z,{style:{color:"var(--".concat(sn,"-color-info)"),fontSize:18,margin:"0 3px"}}),fn]});case"error":return(0,v.jsxs)(O.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,v.jsx)(S.Z,{style:{color:"var(--".concat(sn,"-color-error)"),fontSize:18,margin:"0 3px"}}),fn]});default:return Z.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},c=i.children,k=i.type,g=k===void 0?"info":k,U=i.danger,J=U===void 0?!1:U,G=i.title,q=i.width,Y=q===void 0?"400px":q,V=i.className,en=V===void 0?"":V,un=N()(i,o);return{width:Y,transitionName:"",restProps:un,closeIcon:null,title:j({type:g,title:G}),okButtonProps:{danger:g==="error"||g==="warning"||J},destroyOnClose:!0,className:y()(en,"animate-in","".concat((0,B.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:i.content||c,children:c}},p=function(i){var j=P(i),c=(0,s.useStyle)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c,{}),(0,v.jsx)(D.Z,l()(l()({width:j.width,transitionName:""},j.restProps),{},{closeIcon:null,title:j.title,okButtonProps:j.okButtonProps||{},destroyOnClose:j.destroyOnClose,className:j.className,children:j.content||j.children}))]})},t=["success","info","warning","error","confirm"];t.forEach(function(f){p[f]=function(i){var j=P(l()(l()({},i),{},{type:f}));function c(){var k=(0,s.useStyle)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(k,{}),j.content]})}return D.Z.confirm(l()(l()(l()({},j),j.restProps),{},{content:(0,v.jsx)(c,{}),icon:null}))}}),w.default=p},22074:function(dn,w,n){n.d(w,{Z:function(){return C}});var b=n(26068),l=n.n(b),$=n(5340),N=n(75271),Z=n(53649),m=n.n(Z),I=n(88974),A,S=(0,I.Z)(A||(A=m()([`

.`,"-anchor-wrapper .","-anchor .",`-anchor-link-title {
  color: var(--`,`-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.`,`-anchor-link {
  --`,`-anchor-link-padding-block: 0;
  --`,`-anchor-link-padding-inline-start: 0;
}
`])),function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix}),O=n(52676),D=(0,N.forwardRef)(function(y){var B=S();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{}),(0,O.jsx)($.Z,l()({},y))]})}),C=D},62892:function(dn,w,n){n.d(w,{Z:function(){return P}});var b=n(31209),l=n(6665),$=n(32102),N=n(36891),Z=n(4797),m=n(29171),I=n(73981),A=n(99670),S=n(75271),O=n(53649),D=n.n(O),C=n(88974),y,B=(0,C.Z)(y||(y=D()([`
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
`])),function(p){return p.sparkPrefix},function(p){return p.sparkPrefix},function(p){return p.sparkPrefix},function(p){return p.sparkPrefix},function(p){return p.antPrefix}),s=n(52676),v=function(t){var f=Math.floor(t/60),i=Math.floor(t%60);return"".concat(f.toString().padStart(2,"0"),":").concat(i.toString().padStart(2,"0"))},o=function(t){var f=t.className,i=t.isPlaying,j=t.onPlayPause,c=t.onFullscreen,k=t.onProgressClick,g=t.enableVolume,U=g===void 0?!1:g,J=t.enableFullscreen,G=t.muted,q=G===void 0?!0:G,Y=t.onMute,V=B(),en=(0,b.getCommonConfig)(),un=en.sparkPrefix,vn=(0,S.useMemo)(function(){return v(t.currentTime||0)},[t.currentTime]),cn=(0,S.useMemo)(function(){return v(t.duration||0)},[t.duration]),L=(0,S.useMemo)(function(){return Math.min((t.currentTime||0)/(t.duration||.01)*100,100)},[t.currentTime,t.duration]),fn=function(sn){if(!(!k||!t.duration)){var Sn=sn.currentTarget.getBoundingClientRect(),gn=sn.clientX-Sn.left,Pn=Sn.width,X=gn/Pn,ln=X*t.duration,an=Math.max(0,Math.min(ln,t.duration));k(an)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(V,{}),(0,s.jsxs)("div",{className:"".concat(un,"-media-player-controller ").concat(f||""),children:[(0,s.jsx)(l.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:i?(0,s.jsx)(N.Z,{}):(0,s.jsx)(Z.Z,{}),onClick:j}),(0,s.jsx)(l.Z,{bordered:!1,size:"small",shape:"default",disabled:!U,icon:U&&q?(0,s.jsx)(m.Z,{}):(0,s.jsx)(I.Z,{}),onClick:Y}),(0,s.jsx)("span",{className:"".concat(un,"-media-time-text"),children:vn}),(0,s.jsx)("div",{className:"".concat(un,"-media-progress-container"),onClick:fn,children:(0,s.jsx)($.Z,{className:"".concat(un,"-media-progress-bar"),percent:L,showInfo:!1})}),(0,s.jsx)("span",{className:"".concat(un,"-media-time-text"),children:cn}),J&&(0,s.jsx)(l.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,s.jsx)(A.Z,{}),onClick:c})]})]})},P=o},51971:function(dn,w,n){n.d(w,{Z:function(){return o}});var b=n(26068),l=n.n(b),$=n(48305),N=n.n($),Z=n(67825),m=n.n(Z),I=n(75605),A=n(75271),S=n(53649),O=n.n(S),D=n(88974),C,y=(0,D.Z)(C||(C=O()([`
.`,`-avatar {
  cursor: default;
}
`])),function(P){return P.antPrefix}),B=n(52676),s=["children"],v=(0,A.forwardRef)(function(P,p){var t=y(),f=P.children,i=m()(P,s),j=(0,A.useState)(P.children),c=N()(j,2),k=c[0],g=c[1];return(0,A.useEffect)(function(){if(typeof f=="string"){g(f.slice(0,1));return}g(f)},[f]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(t,{}),(0,B.jsx)(I.Z,l()(l()({ref:p},i),{},{children:k}))]})}),o=v},72997:function(dn,w,n){n.d(w,{Z:function(){return p}});var b=n(26068),l=n.n(b),$=n(67825),N=n.n($),Z=n(45893),m=n(75605),I=n(42478),A=n(40500),S=n(75271),O=n(31209),D=n(53649),C=n.n(D),y=n(88974),B,s=(0,y.Z)(B||(B=C()([`
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
`])),function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix}),v=n(52676),o=["items"],P=function(f){var i=f.items,j=i===void 0?[]:i,c=N()(f,o),k=(0,O.getCommonConfig)(),g=k.sparkPrefix,U=s(),J=S.useMemo(function(){return j.map(function(G){var q=G.title,Y=[];return G.iconUrl&&Y.push((0,v.jsx)(m.Z,{size:20,src:G.iconUrl},"avatar")),G.dropdown?Y.push((0,v.jsxs)("span",{className:"".concat(g,"-breadcrumb-dropdown-title"),children:[G.title,(0,v.jsx)(Z.Z,{size:16})]},"title")):Y.push((0,v.jsx)("span",{children:G.title},"title")),G.dropdown?q=(0,v.jsx)(I.Z,{menu:{items:G.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(g,"-breadcrumb-dropdown"),children:(0,v.jsx)("span",{children:Y})}):(G.iconUrl||Y.length>1)&&(q=(0,v.jsx)("span",{className:"".concat(g,"-breadcrumb-item-content"),children:Y})),l()(l()({},G),{},{title:q})})},[j]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(U,{}),(0,v.jsx)(A.Z,l()(l()({},c),{},{items:J,className:"".concat(g,"-breadcrumb ").concat(c.className||"")}))]})},p=P},72271:function(dn,w,n){n.d(w,{Z:function(){return v}});var b=n(26068),l=n.n(b),$=n(67825),N=n.n($),Z=n(31209),m=n(96971),I=n(82187),A=n.n(I),S=n(53649),O=n.n(S),D=n(88974),C,y=(0,D.Z)(C||(C=O()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix}),B=n(52676),s=["title","info","children","className"],v=function(o){var P=o.title,p=o.info,t=o.children,f=o.className,i=N()(o,s),j=y(),c=(0,Z.getCommonConfig)(),k=c.sparkPrefix;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(j,{}),(0,B.jsx)(m.Z,l()(l()({className:A()("".concat(k,"-card"),f)},i),{},{title:null,children:(0,B.jsxs)("div",{className:"".concat(k,"-card-wrapper"),children:[P&&(0,B.jsx)("div",{className:"".concat(k,"-title"),children:P}),p&&(0,B.jsx)("div",{className:"".concat(k,"-info"),children:p}),t&&(0,B.jsx)("div",{className:"".concat(k,"-content"),children:t})]})}))]})}},94969:function(dn,w,n){n.d(w,{Z:function(){return v}});var b=n(26068),l=n.n(b),$=n(67825),N=n.n($),Z=n(80733),m=n(75271),I=n(31209),A=n(53649),S=n.n(A),O=n(88974),D,C=(0,O.Z)(D||(D=S()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),y=n(52676),B=["description","descriptionClassName","descriptionStyle","children"],s=function(P){var p=P.description,t=P.descriptionClassName,f=P.descriptionStyle,i=P.children,j=N()(P,B),c=(0,I.getCommonConfig)(),k=c.antPrefix,g=c.sparkPrefix,U=C(),J={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(k,"-color-text-tertiary)")};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(U,{}),(0,y.jsxs)("div",{className:"".concat(g,"-checkbox"),children:[(0,y.jsx)(Z.Z,l()(l()({},j),{},{children:i})),p&&(0,y.jsx)("div",{className:t,style:l()(l()({},J),f),children:p})]})]})};s.Group=Z.Z.Group;var v=s},43274:function(dn,w,n){n.d(w,{ZP:function(){return cn},xO:function(){return V}});var b=n(26068),l=n.n(b),$=n(15558),N=n.n($),Z=n(31209),m=n(72717),I=n(20660),A=n(84669),S=n(74209),O=n(81246),D=n(44949),C=n(99897),y=n(19487),B=n(70667),s=n(10432),v=n(24365),o=n(47107),P=n(56664),p=n(15222),t=n(45372),f=n(80047),i=n(82187),j=n.n(i),c=n(28640),k=n(75271),g=n(53649),U=n.n(g),J=n(88974),G,q=(0,J.Z)(G||(G=U()([`
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
`])),function(L){return L.sparkPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix}),Y=n(52676),V={javascript:[(0,D.eJ)()],jsx:[(0,D.eJ)()],python:[(0,s.Vs)()],json:[(0,C.AV)()],java:[(0,O.C)()],yaml:[(0,v.rV)()],php:[(0,B.h)()],go:[(0,A.go)()],csharp:[(0,m.N)()],css:[(0,I.iv)()],html:[(0,S.dy)()],curl:[],markdown:[(0,y.JH)()]},en={javascript:[(0,o.Q2)()],json:[(0,o.Q2)(),(0,o.ir)((0,C.ap)())]},un=function(){var fn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"{}",hn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,sn=fn;try{sn=JSON.stringify(JSON.parse(fn),null,hn)}catch(Sn){}return sn},vn=function(fn){var hn,sn=(0,Z.getCommonConfig)(),Sn=k.useContext(t.ZP.ConfigContext),gn=((hn=Sn.theme)===null||hn===void 0?void 0:hn.algorithm)===f.Z.darkAlgorithm,Pn=sn.sparkPrefix,X=q(),ln=(0,k.useMemo)(function(){return fn.theme===void 0?gn?P.Pc:P.Zp:fn.theme==="dark"?P.Pc:P.Zp},[gn]),an=typeof fn.language=="string"?[].concat(N()(V[fn.language]||[]),N()(fn.value&&fn.language in en?en[fn.language]:[])):fn.language.reduce(function(pn,yn){return[].concat(N()(pn),[V[yn]])},[]);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(X,{}),(0,Y.jsx)("div",{className:j()("".concat(Pn,"-code-block"),fn.className),children:(0,Y.jsx)(p.ZP,l()({extensions:an,value:fn.language==="json"?un(fn.value):fn.value,theme:ln},(0,c.Z)(fn,["language","theme","extensions","value"])))})]})},cn=vn},55655:function(dn,w,n){n.d(w,{Z:function(){return D}});var b=n(26068),l=n.n(b),$=n(9483),N=n(53649),Z=n.n(N),m=n(88974),I,A=(0,m.Z)(I||(I=Z()([`
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
`])),function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix}),S=n(52676),O=function(y){var B=A();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(B,{}),(0,S.jsx)($.Z,l()({},y))]})},D=O},33996:function(dn,w,n){n.d(w,{Z:function(){return t}});var b=n(26068),l=n.n(b),$=n(82092),N=n.n($),Z=n(48305),m=n.n(Z),I=n(31209),A=n(45893),S=n(83516),O=n(82187),D=n.n(O),C=n(75271),y=n(53649),B=n.n(y),s=n(88974),v,o=(0,s.Z)(v||(v=B()([`
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
`])),function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix}),P=n(52676),p=function(i){var j,c,k,g,U,J,G=i.collapsedHeight,q=i.expandedHeight,Y=i.title,V=Y===void 0?"":Y,en=i.expandOnPanelClick,un=i.extra,vn=i.children,cn=i.defaultExpanded,L=(0,C.useState)(cn),fn=m()(L,2),hn=fn[0],sn=fn[1],Sn=(0,C.useState)(!0),gn=m()(Sn,2),Pn=gn[0],X=gn[1],ln=(0,C.useState)(G),an=m()(ln,2),pn=an[0],yn=an[1],Fn=(0,C.useRef)(null),F=(0,I.getCommonConfig)(),Cn=F.sparkPrefix,Ln=F.antPrefix,An=o();(0,C.useEffect)(function(){Fn.current&&yn(hn&&q?q:hn?Fn.current.scrollHeight:G)},[hn,G,q,vn]);var bn=function(zn){zn.stopPropagation(),zn.preventDefault(),sn(function(te){return!te})},Rn=function(zn){zn.stopPropagation(),zn.preventDefault(),hn||sn(!0)},Jn=function(){X(!0)},Gn=function(){X(!0)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(An,{}),(0,P.jsxs)("div",{className:D()("".concat(Cn,"-collapse-panel"),{collapsible:!hn&&en},(j=i.classNames)===null||j===void 0?void 0:j.wrapper),style:(c=i.styles)===null||c===void 0?void 0:c.wrapper,onClick:en?Rn:void 0,onMouseEnter:en?Jn:void 0,onMouseLeave:en?Gn:void 0,children:[(0,P.jsxs)("div",{className:D()("".concat(Cn,"-collapse-panel-header"),(k=i.classNames)===null||k===void 0?void 0:k.header),style:(g=i.styles)===null||g===void 0?void 0:g.header,onClick:bn,children:[(0,P.jsxs)("span",{className:"".concat(Cn,"-collapse-panel-title"),children:[V,(0,P.jsxs)("div",{className:"".concat(Cn,"-collapse-panel-icon-wrapper"),children:[!hn&&Pn&&en&&(0,P.jsx)(A.Z,{style:{fontSize:"18px"}}),hn&&Pn&&en&&(0,P.jsx)(S.Z,{style:{fontSize:"18px"}})]})]}),un&&(0,P.jsx)("div",{className:"".concat(Cn,"-collapse-panel-extra"),onClick:function(zn){zn.stopPropagation(),zn.preventDefault()},children:un})]}),(0,P.jsxs)("div",{className:D()("".concat(Cn,"-collapse-panel-content"),N()({},"".concat(Cn,"-collapse-panel-expanded"),hn),(U=i.classNames)===null||U===void 0?void 0:U.content),style:l()({height:pn},(J=i.styles)===null||J===void 0?void 0:J.content),children:[(0,P.jsx)("div",{ref:Fn,className:"".concat("".concat(Cn,"-collapse-panel-contentWrapper")," ",hn&&q?"scrollable":""),children:vn}),!hn&&(0,P.jsx)("div",{className:"".concat(Cn,"-collapse-panel-mask")})]})]})]})},t=p},59597:function(dn,w,n){n.d(w,{Z:function(){return j}});var b=n(26068),l=n.n(b),$=n(67825),N=n.n($),Z=n(31209),m=n(66508),I=n(80047),A=n(45372),S=n(22940),O=n(82187),D=n.n(O),C=n(75271),y=n(53649),B=n.n(y),s=n(88974),v,o=(0,s.Z)(v||(v=B()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),P=n(52676),p=["className","popupClassName"],t=["className","popupClassName"],f=function(k){var g=k.className,U=k.popupClassName,J=N()(k,p),G=I.Z.useToken(),q=G.token,Y=(0,Z.getCommonConfig)(),V=Y.sparkPrefix,en=o();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(en,{}),(0,P.jsx)(A.ZP,{theme:{components:{DatePicker:{activeBorderColor:q.colorPrimary,paddingInline:8}}},children:(0,P.jsx)(S.default,l()({suffixIcon:(0,P.jsx)(m.Z,{style:{fontSize:"20px"}}),className:D()("".concat(V,"-picker"),g),popupClassName:D()("".concat(V,"-picker-dropdown"),U)},J))})]})},i=function(k){var g=k.className,U=k.popupClassName,J=N()(k,t),G=I.Z.useToken(),q=G.token,Y=(0,Z.getCommonConfig)(),V=Y.sparkPrefix,en=o();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(en,{}),(0,P.jsx)(A.ZP,{theme:{components:{DatePicker:{activeBorderColor:q.colorPrimary,paddingInline:8}}},children:(0,P.jsx)(S.default.RangePicker,l()({suffixIcon:(0,P.jsx)(m.Z,{style:{fontSize:"20px"}}),className:D()("".concat(V,"-picker"),g),popupClassName:D()("".concat(V,"-picker-dropdown"),U),popupStyle:{padding:0}},J))})]})};f.RangePicker=i;var j=f},16721:function(dn,w,n){n.d(w,{Z:function(){return t}});var b=n(82092),l=n.n(b),$=n(26068),N=n.n($),Z=n(67825),m=n.n(Z),I=n(31209),A=n(80047),S=n(96527),O=n(82187),D=n.n(O),C=n(53649),y=n.n(C),B=n(88974),s,v=(0,B.Z)(s||(s=y()([`
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
`])),function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix}),o=n(52676),P=["className","layout","colon","style"],p=function(i){var j,c,k=v(),g=i.className,U=i.layout,J=i.colon,G=J===void 0?!1:J,q=i.style,Y=m()(i,P),V=(0,I.getCommonConfig)(),en=V.antPrefix,un=A.Z.useToken(),vn=un.token;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{}),(0,o.jsx)(S.Z,N()({className:D()(g,U==="vertical"&&"".concat(en,"-descriptions-vertical")),layout:U,colon:G,style:N()(l()(l()({},"--".concat(en,"-descriptions-vertical-label-padding-bottom"),"".concat((j=vn.Descriptions.verticalLabelPaddingBottom)!==null&&j!==void 0?j:4,"px")),"--".concat(en,"-descriptions-vertical-content-padding-bottom"),"".concat((c=vn.Descriptions.verticalContentPaddingBottom)!==null&&c!==void 0?c:24,"px")),q)},Y))]})},t=p},90088:function(dn,w,n){n.d(w,{Z:function(){return B}});var b=n(26068),l=n.n(b),$=n(31209),N=n(71649),Z=n(42478),m=n(75271),I=n(53649),A=n.n(I),S=n(88974),O,D=(0,S.Z)(O||(O=A()([`
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
`])),function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),C=n(52676),y=function(v){var o,P,p=(0,$.getCommonConfig)(),t=p.antPrefix,f=(0,m.useMemo)(function(){var j;if(!((j=v.menu)!==null&&j!==void 0&&j.selectable)||!v.menu){var c;return((c=v.menu)===null||c===void 0?void 0:c.items)||[]}return v.menu.items.map(function(k){var g={},U=k.label;return U&&(g.label=(0,C.jsxs)("div",{className:"".concat(t,"-dropdown-check-wrapper"),children:[U,(0,C.jsx)("span",{className:"".concat(t,"-dropdown-check-icon"),children:(0,C.jsx)(N.Z,{})})]})),l()(l()({},k),g)})},[(o=v.menu)===null||o===void 0?void 0:o.items,(P=v.menu)===null||P===void 0?void 0:P.selectable]),i=D();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{}),(0,C.jsx)(Z.Z,l()(l()({},v),{},{menu:l()(l()({},v.menu),{},{items:f}),overlayStyle:l()({},v.overlayStyle)}))]})},B=y},6401:function(dn,w,n){n.d(w,{Z:function(){return f}});var b=n(26068),l=n.n(b),$=n(31209),N=n(65122),Z=n(75271),m=n(15306),I=n(53649),A=n.n(I),S=n(88974),O,D=(0,S.Z)(O||(O=A()([`
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
`])),function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix}),C=n(48305),y=n.n(C),B=n(88045),s=n(52676),v=document.querySelector("#empty-svg-container");function o(i){var j=(0,B.ZP)(),c=y()(j,5),k=c[4],g=i.svgUrl,U=i.tokenMap,J=U===void 0?{}:U,G=i.className,q=i.size,Y=g.includes(".svg"),V=(0,Z.useState)(""),en=y()(V,2),un=en[0],vn=en[1];return(0,Z.useEffect)(function(){if(!v){var cn=document.createElement("div");cn.innerHTML="<svg></svg>",v=cn.querySelector("svg"),v.id="empty-svg-container",v.setAttribute("aria-hidden","true"),v.style.position="absolute",v.style.width="0",v.style.height="0",v.style.overflow="hidden",document.body.insertBefore(v,document.body.firstChild)}},[]),(0,Z.useEffect)(function(){v&&k!==null&&k!==void 0&&k.key&&(v.classList.forEach(function(cn){return v.classList.remove(cn)}),v.classList.add(k.key))},[k==null?void 0:k.key]),(0,Z.useEffect)(function(){if(Y){var cn=btoa(g),L='<svg><use xlink:href="#'.concat(cn,'"></use></svg>');if(vn(L),!document.getElementById(cn)){var fn='<symbol id="'.concat(cn,'"></symbol>');v.innerHTML=v.innerHTML+fn,fetch(g).then(function(hn){return hn.text()}).then(function(hn){var sn=hn;Object.keys(J).forEach(function(ln){sn=sn.replace(new RegExp(ln,"g"),J[ln])});var Sn=sn.match(/viewBox="([^"]*)"/),gn=Sn?Sn[1]:"",Pn=document.getElementById(cn),X=sn.replace(/<svg[^>]*>/,"");X=X.replace(/<\/svg>/,""),gn&&Pn.setAttribute("viewBox",gn),Pn.innerHTML=X})}}},[g]),Y?(0,s.jsx)("div",{className:G,dangerouslySetInnerHTML:{__html:un},style:{width:q,height:q}}):(0,s.jsx)("img",{src:g,className:G,style:{width:q,height:q}})}var P={url:"https://gw.alicdn.com/imgextra/i3/O1CN01r3f3Si24iFTRz9Bho_!!6000000007424-55-tps-320-320.svg",tokenMap:{"#CDD0DC":"color-border"}},p={noData:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01mWN5tE1MAxb2z7LwA_!!6000000001395-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#BCB5FF":"color-primary-border-hover","#FFFFFF":"color-bg-base","#615CED":"color-primary","#1ACDD0DC":"color-fill-quaternary","#CDD0DC":"color-border"}},networkError:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01su6GHG1RupL5K5TOQ_!!6000000002172-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},404:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01GE0jXZ1xpqjvMjCZh_!!6000000006493-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#26CDD0DC":"color-fill-tertiary","#CDD0DC":"color-border","#F3F0FF":"color-primary-bg","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},arrears:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01xN8uYv1Dz2MLvrFAF_!!6000000000286-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#F3F0FF":"color-primary-bg","#615CED":"color-primary"}},desktopOnly:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01ZzNku41rshVhRVh9x_!!6000000005687-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},noAudio:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01fTQ6vi1GXxnIrmizf_!!6000000000633-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#615CED":"color-primary","#E6E8EE":"color-border-secondary"}},noImage:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01zQAH9A1oJUD9XDtmi_!!6000000005204-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noVideo:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01kqss5i1JuoOrJ8fNV_!!6000000001089-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noAccess:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01RwpRz91oGHREFlmdY_!!6000000005197-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}},error:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01TlQR4c1L3nn4DkG2z_!!6000000001244-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noModel:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01BSPmLi1iaXGByjbne_!!6000000004429-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#5CCDD0DC":"color-fill","#615CED":"color-primary"}},noApp:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01stSIP31fzmEtpppWc_!!6000000004078-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#33CDD0DC":"color-fill-secondary","#615CED":"color-primary"}},success:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01sGzZ5B1Bx5RQAjUe5_!!6000000000011-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#5BB98B":"color-success","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},failed:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01Fd1Gmx1QNYxQ8hj0H_!!6000000001964-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FF7875":"color-error-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},inProgress:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01w2RXic1LADKqVxH56_!!6000000001258-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#9189FA":"color-primary-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},stayTuned:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01W2Kbyc26dmqmatyoB_!!6000000007685-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}}},t=function(j){var c=j.imageStyle,k=j.title,g=j.description,U=g===void 0?"No Data":g,J=j.children,G=j.texture,q=G===void 0?!0:G,Y=j.size,V=Y===void 0?320:Y,en=j.autoFit,un=en===void 0?!0:en,vn=j.okText,cn=j.okType,L=cn===void 0?"primary":cn,fn=j.okButtonProps,hn=j.onOk,sn=j.type||"noData",Sn=(0,$.getCommonConfig)(),gn=Sn.sparkPrefix,Pn=Sn.isDarkMode,X=Sn.antPrefix,ln=j.image||p[sn].url,an=(0,Z.useMemo)(function(){var Cn,Ln=l()({},(Cn=p[sn])===null||Cn===void 0?void 0:Cn.tokenMap);return Ln&&Object.keys(Ln).forEach(function(An){Ln[An]="var(--".concat(X,"-").concat(Ln[An],")")}),Ln},[sn]),pn=(0,Z.useMemo)(function(){var Cn=l()({},P.tokenMap);return Object.keys(Cn).forEach(function(Ln){Cn[Ln]="var(--".concat(X,"-").concat(Cn[Ln],")")}),Cn},[Pn]),yn=D(),Fn=typeof V=="string"?parseFloat(V.replace(/px/i,"")):V!=null?V:0,F=un?{maxWidth:"100%",aspectRatio:"1 / 1",width:V,height:"auto"}:{width:V,height:V};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(yn,{}),(0,s.jsxs)("div",{className:"".concat(gn,"-empty ").concat(j.className||""),style:l()(l()({},F),c),children:[q&&(0,s.jsx)(o,{size:un?"100%":V,svgUrl:P.url,tokenMap:pn,className:"".concat(gn,"-empty-texture")}),(0,s.jsx)(o,{size:un?"100%":V,svgUrl:ln,tokenMap:an,className:"".concat(gn,"-empty-image")}),(0,s.jsxs)(N.Z,{vertical:!0,align:"center",style:{marginTop:"52.5%"},children:[k&&(0,s.jsx)("div",{className:"".concat(gn,"-empty-title"),style:{marginBottom:U?.025*Fn:0},children:k}),U&&(0,s.jsx)("div",{className:"".concat(gn,"-empty-description"),children:U}),!!vn&&(0,s.jsx)("div",{style:{marginTop:.05*Fn},children:(0,s.jsx)(m.Z,l()(l()({type:L,onClick:hn},fn),{},{children:vn}))}),!!J&&(0,s.jsx)("div",{style:{marginTop:.05*Fn},children:J})]})]})]})},f=t},94577:function(dn,w,n){n.d(w,{Z:function(){return k}});var b=n(31759),l=n.n(b),$=n(67825),N=n.n($),Z=n(26068),m=n.n(Z),I=n(31209),A=n(62910),S=n(94592),O=n(71416),D=n(82187),C=n.n(D),y=n(75271),B=n(53649),s=n.n(B),v=n(88974),o,P=(0,v.Z)(o||(o=s()([`
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
`])),function(g){return g.sparkPrefix},function(g){return g.sparkPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.sparkPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),p=n(52676),t=["tooltip"],f=(0,y.forwardRef)(function(g,U){var J=g.labelMarginRight,G=J===void 0?void 0:J,q=(0,y.useRef)(null),Y=(0,I.getCommonConfig)(),V=Y.sparkPrefix,en=P();return(0,y.useImperativeHandle)(U,function(){return q.current}),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(en,{}),(0,p.jsx)(S.Z,m()(m()({},g),{},{className:C()(g.className,"".concat(V,"-form"),G==="small"&&"".concat(V,"-form-label-margin-small")),ref:q,requiredMark:function(vn,cn){return(0,p.jsxs)(p.Fragment,{children:[vn,cn.required&&(0,p.jsx)("span",{className:"".concat(V,"-required-mark"),children:"*"})]})}}))]})}),i=function(U){var J=U.tooltip,G=N()(U,t),q=(0,p.jsx)(A.Z,{});function Y(){if(J){var V=l()(J)==="object"&&!y.isValidElement(J)?m()(m()({},J),{},{icon:J.icon||q}):{title:J,icon:q};return V}}return(0,p.jsx)(S.Z.Item,m()(m()({},G),{},{tooltip:Y(),labelCol:U.labelCol||(U.layout==="vertical"?{flex:"unset"}:void 0)}))},j=i;j.useStatus=O.Z.useStatus;var c=f;c.Item=j,c.List=S.Z.List,c.ErrorList=S.Z.ErrorList,c.Provider=S.Z.Provider,c.useForm=S.Z.useForm,c.useFormInstance=S.Z.useFormInstance,c.useWatch=S.Z.useWatch;var k=c},3297:function(dn,w,n){n.d(w,{Z:function(){return v}});var b=n(26068),l=n.n(b),$=n(1615),N=n(31209),Z=n(20695),m=n(17191),I=n(75271),A=n(53649),S=n.n(A),O=n(88974),D,C=(0,O.Z)(D||(D=S()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),y=n(52676),B=function(P){var p=C(),t=(0,N.getCommonConfig)(),f=t.antPrefix,i=(0,I.useMemo)(function(){var j={transitionName:""},c=P.preview;return c===!1?!1:c===!0?j:l()(l()({mask:(0,y.jsxs)("div",{className:"".concat(f,"-image-mask-info"),children:[(0,y.jsx)(Z.Z,{className:"".concat(f,"-image-mask-info-icon")}),(0,y.jsx)("span",{className:"".concat(f,"-image-mask-info-text"),children:$.Z.get({id:"components.commonComponents.Image.Preview",dm:"\u9884\u89C8"})})]})},c),j)},[P.preview]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p,{}),(0,y.jsx)(m.Z,l()({preview:i},P))]})},s=B;s.PreviewGroup=m.Z.PreviewGroup;var v=s},65627:function(dn,w,n){n.d(w,{Z:function(){return f}});var b=n(26068),l=n.n(b),$=n(82092),N=n.n($),Z=n(67825),m=n.n(Z),I=n(31209),A=n(50239),S=n(82187),O=n.n(S),D=n(75271),C=n(53649),y=n.n(C),B=n(88974),s,v=(0,B.Z)(s||(s=y()([`
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
`])),function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix}),o=n(52676),P=["shape"],p=D.forwardRef(function(i,j){var c=i.shape,k=c===void 0?"default":c,g=m()(i,P),U=(0,I.getCommonConfig)(),J=U.antPrefix,G=v();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(G,{}),(0,o.jsx)(A.Z,l()(l()({},g),{},{className:O()(i.className,N()({},"".concat(J,"-input-round"),k==="round")),ref:j}))]})}),t=D.forwardRef(function(i,j){var c=(0,I.getCommonConfig)(),k=c.antPrefix,g=v();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,{}),(0,o.jsx)(A.Z.TextArea,l()(l()({},i),{},{className:O()("".concat(k,"-text-area"),i.className),ref:j}))]})});Object.assign(p,{TextArea:t,Search:A.Z.Search,Password:A.Z.Password,OTP:A.Z.OTP});var f=p},78853:function(dn,w,n){n.d(w,{Z:function(){return t}});var b=n(26068),l=n.n(b),$=n(82092),N=n.n($),Z=n(67825),m=n.n(Z),I=n(31209),A=n(6002),S=n(84674),O=n(82187),D=n.n(O),C=n(53649),y=n.n(C),B=n(88974),s,v=(0,B.Z)(s||(s=y()([`
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
`])),function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix}),o=n(52676),P=["showDivider","closable"],p=function(i){var j=v(),c=(0,I.getCommonConfig)(),k=c.sparkPrefix,g=i.showDivider,U=g===void 0?!0:g,J=i.closable,G=J===void 0?!0:J,q=m()(i,P),Y=function(vn){return i.info?(0,o.jsxs)("div",{className:"".concat(k,"-modal-footer-wrapper"),children:[(0,o.jsx)("span",{className:"".concat(k,"-modal-footer-info"),children:i.info}),(0,o.jsx)("div",{className:"".concat(k,"-modal-footer-origin-node"),children:vn})]}):vn},V=G?i.closeIcon||(0,o.jsx)(A.Z,{className:"".concat(k,"-modal-title-close"),onClick:function(vn){var cn;(cn=i.onCancel)===null||cn===void 0||cn.call(i,vn)}}):null,en=i.footer===void 0?Y:i.footer;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{}),(0,o.jsx)(S.Z,l()(l()({},q),{},{closeIcon:null,title:(0,o.jsxs)("div",{className:"".concat(k,"-modal-title-wrapper"),children:[(0,o.jsx)("div",{className:"".concat(k,"-modal-title"),children:i.title}),V]}),wrapClassName:D()("".concat(k,"-modal"),N()({},"".concat(k,"-show-divider"),U),i.wrapClassName,"animate-in"),footer:en,transitionName:""}))]})};p.useModal=S.Z.useModal,p.success=S.Z.success,p.error=S.Z.error,p.warning=S.Z.warning,p.info=S.Z.info,p.confirm=S.Z.confirm,p.SMALL_WIDTH=640,p.MEDIUM_WIDTH=800,p.LARGE_WIDTH=960;var t=p},31265:function(dn,w,n){var b=n(48305),l=n.n(b),$=n(26068),N=n.n($),Z=n(31209),m=n(1191),I=n(31695),A=n(69898),S=n(96626),O=n(50493),D=n(52676),C=["success","warning","error","info"];function y(s,v){if(s==="success")return(0,D.jsx)(m.Z,{style:{color:"var(--".concat(v,"-color-success)"),fontSize:24}});if(s==="warning")return(0,D.jsx)(I.Z,{style:{color:"var(--".concat(v,"-color-warning)"),fontSize:24}});if(s==="info")return(0,D.jsx)(A.Z,{style:{color:"var(--".concat(v,"-color-info)"),fontSize:24}});if(s==="error")return(0,D.jsx)(S.Z,{style:{color:"var(--".concat(v,"-color-error)"),fontSize:24}})}var B={};B.destroy=O.ZP.destroy,B.open=function(s){var v=(0,Z.getCommonConfig)(),o=v.sparkPrefix,P="".concat(o,"-notification");s.className&&(P+=" ".concat(s.className)),O.ZP.open(N()(N()({},s),{},{className:P}))},C.forEach(function(s){B[s]=function(v){var o=(0,Z.getCommonConfig)(),P=o.sparkPrefix,p=o.antPrefix,t="".concat(P,"-notification");v.className&&(t+=" ".concat(v.className)),O.ZP[s](N()(N()({},v),{},{className:t,icon:y(s,p)}))}}),B.useNotification=function(s){var v=(0,Z.getCommonConfig)(),o=v.sparkPrefix,P=v.antPrefix,p="".concat(o,"-notification"),t=O.ZP.useNotification(s),f=l()(t,2),i=f[0],j=f[1],c={};return C.forEach(function(k){c[k]=function(g){return i[k](N()(N()({},g),{},{className:p,icon:y(k,P)}))}}),c.open=function(k){O.ZP.open(N()(N()({},k),{},{className:p}))},c.destroy=i.destroy,[c,j]},w.Z=B},38250:function(dn,w,n){n.d(w,{X:function(){return Z}});var b=n(53649),l=n.n(b),$=n(88974),N,Z=(0,$.Z)(N||(N=l()([`
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
`])),function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix})},35084:function(dn,w,n){var b=n(26068),l=n.n(b),$=n(31759),N=n.n($),Z=n(67825),m=n.n(Z),I=n(31209),A=n(1615),S=n(74455),O=n(16979),D=n(34232),C=n(65122),y=n(94587),B=n(82187),s=n.n(B),v=n(38250),o=n(52676),P=["hideSwitchButton","className"],p=function(){var f=A.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"}),i=A.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"});return{options:[{label:"10 ".concat(f," / ").concat(i),value:10},{label:"20 ".concat(f," / ").concat(i),value:20},{label:"50 ".concat(f," / ").concat(i),value:50},{label:"100 ".concat(f," / ").concat(i),value:100}]}};w.Z=function(t){var f=t.hideSwitchButton,i=f===void 0?!1:f,j=t.className,c=m()(t,P),k=(0,I.getCommonConfig)(),g=k.sparkPrefix,U=(0,v.X)(),J=function(){var V=function(un,vn,cn){return vn==="jump-prev"||vn==="jump-next"?(0,o.jsx)(S.Z,{className:"".concat(g,"-jump-next-icon")}):i||t.itemRender?cn:vn==="prev"?(0,o.jsx)("a",{children:(0,o.jsxs)(C.Z,{gap:8,children:[(0,o.jsx)(O.Z,{})," ",(0,o.jsx)("span",{children:A.Z.get({id:"components.commonComponents.Pagination.PreviousPage",dm:"\u4E0A\u4E00\u9875"})})]})}):vn==="next"?(0,o.jsx)("a",{children:(0,o.jsxs)(C.Z,{gap:8,children:[(0,o.jsx)("span",{children:A.Z.get({id:"components.commonComponents.Pagination.NextPage",dm:"\u4E0B\u4E00\u9875"})})," ",(0,o.jsx)(D.Z,{})]})}):cn};return V},G;c.showSizeChanger!==null&&c.showSizeChanger!==void 0?G=c.showSizeChanger:G=c.total&&c.total>50;var q=function(){return t.showSizeChanger===!0?p():t.showSizeChanger===!1?!1:N()(t.showSizeChanger)==="object"&&t.showSizeChanger?t.showSizeChanger:c.total&&c.total>50?p():!1};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(U,{}),(0,o.jsx)(y.Z,l()(l()({itemRender:J()},c),{},{showSizeChanger:q(),className:s()("".concat(g,"-pagination"),j)}))]})}},29126:function(dn,w,n){var b=n(26068),l=n.n(b),$=n(67825),N=n.n($),Z=n(31209),m=n(88602),I=n(62910),A=n(99090),S=n(58911),O=n(16746),D=n(75271),C=n(52676),y=["icon","type","okButtonProps"],B=D.forwardRef(function(s,v){var o=s.icon,P=s.type,p=P===void 0?"confirm":P,t=s.okButtonProps,f=N()(s,y),i=(0,Z.getCommonConfig)(),j=i.antPrefix,c=function(){return o||(p==="confirm"?(0,C.jsx)(m.Z,{style:{color:"var(--".concat(j,"-color-warning)")}}):p==="info"?(0,C.jsx)(I.Z,{style:{color:"var(--".concat(j,"-color-info)")}}):p==="warning"?(0,C.jsx)(m.Z,{style:{color:"var(--".concat(j,"-color-warning)")}}):p==="error"?(0,C.jsx)(A.Z,{style:{color:"var(--".concat(j,"-color-error)")}}):p==="success"?(0,C.jsx)(S.Z,{style:{color:"var(--".concat(j,"-color-success)")}}):(0,C.jsx)(m.Z,{style:{color:"var(--".concat(j,"-color-warning)")}}))},k=function(){var U={};return["warning","error"].includes(p)&&(U.danger=!0),l()(l()({},U),t||{})};return(0,C.jsx)(O.Z,l()(l()({},f),{},{ref:v,icon:c(),okButtonProps:k()}))});w.Z=B},76617:function(dn,w,n){var b=n(26068),l=n.n(b),$=n(31209),N=n(76892),Z=n(81316),m=n(75271),I=n(52676),A=m.forwardRef(function(S,O){var D=S.content===""||S.content===void 0||S.content===null,C=S.title===""||S.title===void 0||S.title===null,y=S.open!==void 0&&S.open!==null?S.open:D&&C?!1:void 0,B=(0,$.getCommonConfig)(),s=B.antPrefix;return(0,I.jsx)(Z.Z,l()(l()({},S),{},{arrow:S.arrow||!1,open:y,ref:O,getPopupContainer:S.getPopupContainer||function(v){return(0,N.Q)(v,".".concat(s,"-app"))}}))});w.Z=A},76087:function(dn,w,n){n.d(w,{Z:function(){return Pn}});var b=n(82092),l=n.n(b),$=n(15558),N=n.n($),Z=n(48305),m=n.n(Z),I=n(53649),A=n.n(I),S=n(39982),O=n(19487),D=n(56664),C=n(15222),y=n(45372),B=n(80047),s=n(85412),v=n(82187),o=n.n(v),P=n(75271),p=n(25298),t=n.n(p),f=n(17069),i=n.n(f),j=n(21742),c=n.n(j),k=n(83136),g=n.n(k),U=n(25451),J=function(X){c()(an,X);var ln=g()(an);function an(pn){var yn;return t()(this,an),yn=ln.call(this),yn.name=pn,yn}return i()(an,[{key:"eq",value:function(yn){return yn.name===this.name}},{key:"toDOM",value:function(){var yn=document.createElement("span");return yn.setAttribute("aria-hidden","true"),yn.className="cm-prompt-var",yn.textContent="${".concat(this.name,"}"),yn}},{key:"ignoreEvent",value:function(){return!1}}]),an}(U.l9),G=new U.Y1({regexp:/\$\{([\w\u4e00-\u9fa5]+)\}/g,decoration:function(ln){return U.p.replace({widget:new J(ln[1])})}}),q=U.lg.fromClass(function(){function X(ln){t()(this,X),l()(this,"placeholders",void 0),this.placeholders=G.createDeco(ln)}return i()(X,[{key:"update",value:function(an){this.placeholders=G.updateDeco(an,this.placeholders)}}]),X}(),{decorations:function(ln){return ln.placeholders},provide:function(ln){return U.tk.atomicRanges.of(function(an){var pn;return((pn=an.plugin(ln))===null||pn===void 0?void 0:pn.placeholders)||U.p.none})}}),Y=[q],V=n(26068),en=n.n(V),un=n(14179);function vn(){var X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],ln=arguments.length>1?arguments[1]:void 0,an=ln.onCreate,pn=ln.createBtnText;return(0,un.ys)({override:[function(yn){var Fn,F=yn.matchBefore(/\/(\w+)?/);return!F||F&&F.from===F.to&&!yn.explicit?null:{from:(Fn=F==null?void 0:F.from)!==null&&Fn!==void 0?Fn:0,options:(an?[].concat(N()(X),[{label:"/NEW_VAR",boost:-99}]):X).map(function(Cn){return en()(en()({},Cn),{},{displayLabel:Cn.label==="/NEW_VAR"?pn:Cn.label.slice(1),apply:function(An,bn,Rn,Jn){if(bn.label==="/NEW_VAR")return An.dispatch({changes:{from:Rn,to:Jn,insert:""}}),an==null?void 0:an();var Gn=bn.label.slice(1),wn="${".concat(Gn,"}");An.dispatch({changes:{from:Rn,to:Jn,insert:wn}})}})})}}]})}var cn=n(52676),L,fn,hn=(0,s.kc)(function(X){var ln=X.css,an=X.token;return{onCreate:ln(L||(L=A()([`
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
  `])),an.colorBorderSecondary,an.colorBgContainer),cm:ln(fn||(fn=A()([`
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
  `])),an.colorTextSecondary,an.colorBlue,an.colorPurple,an.colorPurpleBg,an.colorBgContainer,an.colorText,an.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:an.colorBgBase,border:"1px solid ".concat(an.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:an.colorTextTertiary,backgroundColor:an.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),sn={markdown:[(0,O.JH)()]},Sn=[],gn=function(ln){var an=hn(),pn=an.styles,yn=ln.variables||Sn,Fn=(0,P.useState)(!1),F=m()(Fn,2),Cn=F[0],Ln=F[1],An=ln.onCreate,bn=P.useContext(y.ZP.ConfigContext),Rn=bn.theme.algorithm===B.Z.darkAlgorithm,Jn=ln.createBtnText||"+ \u65B0\u589E\u53D8\u91CF",Gn=(0,P.useMemo)(function(){return Rn?D.Pc:D.Zp},[Rn]),wn=(0,P.useMemo)(function(){return[].concat(N()(sn.markdown),N()(Y),[vn(N()(yn).map(function(te){return{label:"/".concat(te.code),info:te.label}})||[],{onCreate:An,createBtnText:Jn})])},[yn]);(0,P.useEffect)(function(){return Ln(!0),function(){Ln(!1)}},[]);var zn=P.useMemo(function(){return ln.tipsText===!1?(0,cn.jsx)("div",{className:pn.tips}):ln.tipsText?ln.tipsText:(0,cn.jsxs)("div",{className:pn.tips,children:['\u8F93\u5165/"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,cn.jsx)(S.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[ln.tipsText]);return Cn?(0,cn.jsxs)("div",{className:pn.root,children:[(0,cn.jsx)(C.ZP,{className:o()(pn.cm,l()({},pn.onCreate,An)),extensions:wn,value:ln.value,theme:Gn,lang:"markdown",onChange:ln.onChange,basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1}},Gn),(0,cn.jsxs)("div",{className:pn.footer,children:[zn,ln.maxLength?(0,cn.jsxs)("div",{children:[ln.value.length,"/",ln.maxLength]}):null]})]}):null},Pn=(0,P.memo)(gn)},1305:function(dn,w,n){n.r(w),n.d(w,{useStyle:function(){return Z}});var b=n(53649),l=n.n(b),$=n(88974),N,Z=(0,$.Z)(N||(N=l()([`
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
`])),function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix})},4855:function(dn,w,n){n.r(w);var b=n(26068),l=n.n(b),$=n(31209),N=n(57239),Z=n(82187),m=n.n(Z),I=n(1305),A=n(52676);w.default=function(S){var O=(0,$.getCommonConfig)(),D=O.sparkPrefix,C=O.antPrefix,y=S.ghost,B=y===void 0?!0:y,s=(0,I.useStyle)();return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(s,{}),(0,A.jsx)(N.ZP.Group,l()(l()({},S),{},{className:m()(S.className,S.bordered?"".concat(D,"-radio-group-bordered"):"",B?"".concat(C,"-radio-group-ghost"):""),optionType:"button"}))]})}},95748:function(dn,w,n){var b=n(26068),l=n.n(b),$=n(67825),N=n.n($),Z=n(6401),m=n(52676),I=["texture"];w.Z=function(A){var S=A.texture,O=S===void 0?!1:S,D=N()(A,I);return(0,m.jsx)(Z.Z,l()(l()({},D),{},{texture:O}))}},96868:function(dn,w,n){n.d(w,{J:function(){return j},Z:function(){return k}});var b=n(26068),l=n.n(b),$=n(82092),N=n.n($),Z=n(31209),m=n(86044),I=n(82187),A=n.n(I),S=n(75271),O=n(53649),D=n.n(O),C=n(88974),y,B=(0,C.Z)(y||(y=D()([`
.`,"-slider.","-slider.",`-slider-no-marks {
  margin: 0;
}
`])),function(g){return g.antPrefix},function(g){return g.sparkPrefix},function(g){return g.sparkPrefix}),s=n(67825),v=n.n(s),o=n(1359),P,p=(0,C.Z)(P||(P=D()([`
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
`])),function(g){return g.sparkPrefix},function(g){return g.sparkPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),t=n(52676),f=["styles","classNames","sliderProps","inputNumberProps"];function i(g){var U,J,G=(0,Z.getCommonConfig)(),q=G.sparkPrefix;console.log("debug sparkPrefix in SliderSelector",q);var Y=g.styles,V=g.classNames,en=g.sliderProps,un=g.inputNumberProps,vn=v()(g,f),cn=p(),L=g.marks||((U=g.sliderProps)===null||U===void 0?void 0:U.marks)||null,fn=L||N()(N()({},g.min,g.min),g.max,g.max),hn=L&&((J=Object.keys(L))===null||J===void 0?void 0:J.length)>0,sn=function(gn){var Pn=typeof gn=="string"?parseFloat(gn):gn;if(Pn===null||isNaN(Pn)){g.onChange(null);return}Pn<g.min?g.onChange(g.min):Pn>g.max?g.onChange(g.max):g.onChange(Pn)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(cn,{}),(0,t.jsxs)("div",{style:Y==null?void 0:Y.wrapper,className:A()("".concat(q,"-slider-input"),N()({},"".concat(q,"-slider-input-has-marks"),hn),V==null?void 0:V.wrapper),onMouseUp:function(){var gn;(gn=g.onBlur)===null||gn===void 0||gn.call(g)},children:[(0,t.jsx)(j,l()(l()(l()({disabled:g.disabled,min:g.min,max:g.max,step:g.step,tooltip:{getPopupContainer:function(gn){return gn}}},vn),en),{},{marks:fn,style:l()(l()(l()({},Y==null?void 0:Y.slider),en==null?void 0:en.style),{},{width:"100%"}),className:A()(V==null?void 0:V.slider,en==null?void 0:en.className),onChange:sn,value:g.value===null?void 0:g.value})),(0,t.jsx)(o.Z,l()(l()({controls:!1,step:g.step,min:g.min,max:g.max,disabled:g.disabled},un),{},{onBlur:function(){var gn;(gn=g.onBlur)===null||gn===void 0||gn.call(g)},value:g.value,onChange:sn,style:l()(l()({},Y==null?void 0:Y.inputNumber),un==null?void 0:un.style),className:A()(V==null?void 0:V.inputNumber,un==null?void 0:un.className)}))]})]})}var j=S.forwardRef(function(g,U){var J=(0,Z.getCommonConfig)(),G=J.sparkPrefix,q=B();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(q,{}),(0,t.jsx)(m.Z,l()(l()({},g),{},{className:A()("".concat(G,"-slider"),N()({},"".concat(G,"-slider-no-marks"),!Object.keys(g.marks||{}).length),g.className),ref:U}))]})}),c=j;Object.assign(c,{Input:i});var k=c},46387:function(dn,w,n){n.d(w,{Z:function(){return B}});var b=n(82092),l=n.n(b),$=n(31209),N=n(80047),Z=n(32102),m=n(82187),I=n.n(m),A=n(53649),S=n.n(A),O=n(88974),D,C=(0,O.Z)(D||(D=S()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix}),y=n(52676),B=function(s){var v=s.indicator,o=s.spinning,P=o===void 0?!0:o,p=s.children,t=s.style,f=s.className,i=(0,$.getCommonConfig)(),j=i.sparkPrefix,c=N.Z.useToken(),k=C(),g=(0,y.jsxs)("svg",{className:"".concat(j,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,y.jsx)("defs",{children:(0,y.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,y.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,y.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,y.jsx)("g",{children:(0,y.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:c.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,y.jsx)("g",{children:(0,y.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:c.token.colorPrimary,fillOpacity:"1"})})]})]}),U=s.tip||s.showProgress&&(0,y.jsxs)("div",{children:[(0,y.jsxs)("span",{children:["loading",s.percent!==void 0&&s.percent!==null&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:s.percent}),"%"]})]}),(0,y.jsx)(Z.Z,{percent:s.percent,showInfo:!1})]})||null;return p?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{}),(0,y.jsxs)("div",{className:I()("".concat(j,"-spinner-overlay"),f),style:t,children:[(0,y.jsx)("div",{className:I()("".concat(j,"-spinner-content"),l()({},"".concat(j,"-spinning"),P)),children:p}),P&&(0,y.jsxs)("div",{className:"".concat(j,"-spinner"),children:[(0,y.jsx)("div",{className:"".concat(j,"-indicator"),children:v||g}),(0,y.jsx)("div",{className:"".concat(j,"-title"),children:U})]})]})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{}),(0,y.jsx)("div",{className:I()("".concat(j,"-spinner"),f),style:t,children:P&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"".concat(j,"-indicator"),children:v||g}),(0,y.jsx)("div",{className:"".concat(j,"-title"),children:U})]})})]})}},27975:function(dn,w,n){n.d(w,{Z:function(){return D}});var b=n(26068),l=n.n(b),$=n(73563),N=n(53649),Z=n.n(N),m=n(88974),I,A=(0,m.Z)(I||(I=Z()([`
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
`])),function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix}),S=n(52676),O=function(y){var B=A();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(B,{}),(0,S.jsx)($.Z,l()({},y))]})},D=O},85085:function(dn,w,n){n.d(w,{Z:function(){return v}});var b=n(26068),l=n.n(b),$=n(31209),N=n(71649),Z=n(74472),m=n(82187),I=n.n(m),A=n(75271),S=n(53649),O=n.n(S),D=n(88974),C,y=(0,D.Z)(C||(C=O()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),B=n(52676),s=function(P){var p=(0,$.getCommonConfig)(),t=p.sparkPrefix,f=y(),i=(0,A.useMemo)(function(){if(P.items)return P.items.map(function(j,c){var k=j.status;return!k&&P.current!==void 0&&(c<P.current?k="finish":c===P.current?k="process":k="wait"),k==="finish"?l()(l()({},j),{},{icon:(0,B.jsx)(N.Z,{className:"".concat(t,"-finish-icon")})}):j})},[P.items,P.current]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(f,{}),(0,B.jsx)(Z.Z,l()(l()({},P),{},{items:i,className:I()("".concat(t,"-steps"),P.className)}))]})},v=s},27485:function(dn,w,n){n.d(w,{Z:function(){return s}});var b=n(26068),l=n.n(b),$=n(67825),N=n.n($),Z=n(65122),m=n(94872),I=n(31209),A=n(53649),S=n.n(A),O=n(88974),D,C=(0,O.Z)(D||(D=S()([`
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
`])),function(v){return v.sparkPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.sparkPrefix}),y=n(52676),B=["label","className"],s=function(v){var o=C(),P=v.label,p=v.className,t=N()(v,B),f=(0,I.getCommonConfig)(),i=f.sparkPrefix;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{}),(0,y.jsxs)(Z.Z,{align:"center",gap:8,className:p,children:[(0,y.jsx)(m.Z,l()(l()({},t),{},{className:"".concat(i,"-switch")})),P&&(0,y.jsx)("span",{className:"".concat(i,"-switch-label"),children:P})]})]})}},53713:function(dn,w,n){n.d(w,{Z:function(){return P}});var b=n(26068),l=n.n(b),$=n(67825),N=n.n($),Z=n(31209),m=n(28173),I=n(9907),A=n(82187),S=n.n(A),O=n(38250),D=n(53649),C=n.n(D),y=n(88974),B,s=(0,y.Z)(B||(B=C()([`
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
`])),function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix}),v=n(52676),o=["columns"];function P(p){var t,f=(0,Z.getCommonConfig)(),i=f.sparkPrefix,j=p.columns,c=N()(p,o);j=(t=j)===null||t===void 0?void 0:t.map(function(U){return l()(l()({},U),{},{sortIcon:U.sortIcon||function(){return(0,v.jsx)(m.Z,{style:{fontSize:16,marginLeft:8}})}})});var k=s(),g=(0,O.X)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(k,{}),(0,v.jsx)(g,{}),(0,v.jsx)(I.Z,l()({className:S()("".concat(i,"-table")),columns:j},c))]})}},55395:function(dn,w,n){n.d(w,{Z:function(){return p}});var b=n(26068),l=n.n(b),$=n(67825),N=n.n($),Z=n(31209),m=n(6815),I=n(82187),A=n.n(I),S=n(75271),O=n(53649),D=n.n(O),C=n(88974),y,B=(0,C.Z)(y||(y=D()([`
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
`])),function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),s=n(52676),v=["children","className","bordered","color","size"],o=function(t){return t.Purple="purple",t.Pink="pink",t.Yellow="yellow",t.Teal="teal",t.Blue="blue",t.Mauve="mauve",t.Transparent="transparent",t.Success="success",t.Error="error",t.Warning="warning",t.Info="info",t}(o||{}),P=(0,S.forwardRef)(function(t,f){var i=t.children,j=t.className,c=t.bordered,k=c===void 0?!1:c,g=t.color,U=g===void 0?"mauve":g,J=t.size,G=J===void 0?"middle":J,q=N()(t,v),Y=B(),V=(0,Z.getCommonConfig)(),en=V.sparkPrefix,un=Object.values(o).includes(U);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Y,{}),(0,s.jsx)(m.Z,l()(l()({className:A()("".concat(en,"-tag ").concat(en,"-tag-").concat(U," ").concat(en,"-tag-").concat(G),j),bordered:k,color:un?void 0:U},q),{},{ref:f,children:i}))]})}),p=P},47756:function(dn,w,n){n.d(w,{Z:function(){return j}});var b=n(26068),l=n.n(b),$=n(67825),N=n.n($),Z=n(31209),m=n(752),I=n(80047),A=n(45372),S=n(49706),O=n(82187),D=n.n(O),C=n(75271),y=n(53649),B=n.n(y),s=n(88974),v,o=(0,s.Z)(v||(v=B()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),P=n(52676),p=["className","popupClassName"],t=["className","popupClassName"],f=function(k){var g=k.className,U=k.popupClassName,J=N()(k,p),G=I.Z.useToken(),q=G.token,Y=(0,Z.getCommonConfig)(),V=Y.sparkPrefix,en=o();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(en,{}),(0,P.jsx)(A.ZP,{theme:{components:{DatePicker:{activeBorderColor:q.colorPrimary}}},children:(0,P.jsx)(S.Z,l()({suffixIcon:(0,P.jsx)(m.Z,{}),className:D()("".concat(V,"-picker"),g),popupClassName:D()("".concat(V,"-picker-dropdown"),U)},J))})]})},i=function(k){var g=k.className,U=k.popupClassName,J=N()(k,t),G=I.Z.useToken(),q=G.token,Y=(0,Z.getCommonConfig)(),V=Y.sparkPrefix,en=o();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(en,{}),(0,P.jsx)(A.ZP,{theme:{components:{DatePicker:{activeBorderColor:q.colorPrimary}}},children:(0,P.jsx)(S.Z.RangePicker,l()({suffixIcon:(0,P.jsx)(m.Z,{}),className:D()("".concat(V,"-picker"),g),popupClassName:D()("".concat(V,"-picker-dropdown"),U),popupStyle:{padding:0}},J))})]})};f.RangePicker=i;var j=f},19777:function(dn,w,n){n.d(w,{Z:function(){return f}});var b=n(26068),l=n.n(b),$=n(48305),N=n.n($),Z=n(67825),m=n.n(Z),I=n(75271),A=n(82187),S=n.n(A),O=n(62892),D=n(56630),C=n(31209),y=n(53649),B=n.n(y),s=n(88974),v,o=(0,s.Z)(v||(v=B()([`
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
`])),function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix}),P=n(52676),p=["controls","mouseEnterAutoPlay","children","className","style"],t=(0,I.forwardRef)(function(i,j){var c=i.controls,k=i.mouseEnterAutoPlay,g=k===void 0?!1:k,U=i.children,J=i.className,G=i.style,q=m()(i,p),Y=(0,C.getCommonConfig)(),V=Y.sparkPrefix,en=o(),un=(0,I.useState)(0),vn=N()(un,2),cn=vn[0],L=vn[1],fn=(0,I.useState)(0),hn=N()(fn,2),sn=hn[0],Sn=hn[1],gn=(0,I.useState)(!1),Pn=N()(gn,2),X=Pn[0],ln=Pn[1],an=(0,D.Z)(i,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),pn=N()(an,2),yn=pn[0],Fn=pn[1],F=(0,I.useState)(!1),Cn=N()(F,2),Ln=Cn[0],An=Cn[1],bn=(0,I.useRef)(null),Rn=(0,I.useRef)(!1),Jn=function($n){bn.current=$n,j&&(typeof j=="function"?j($n):j.current=$n)};(0,I.useEffect)(function(){var In;return X&&(In=setInterval(function(){bn.current&&L(bn.current.currentTime)},16)),function(){In&&clearInterval(In)}},[X]);var Gn=function(){return window.videoRef=bn.current,bn.current?"mozHasAudio"in bn.current?(An(bn.current.mozHasAudio),!0):"webkitAudioDecodedByteCount"in bn.current?(An(bn.current.webkitAudioDecodedByteCount>0),!0):(An(!1),!1):!1},wn=function(){bn.current&&Sn(bn.current.duration)},zn=function(){bn.current&&(X?bn.current.pause():bn.current.play(),ln(!X))},te=function(){ln(!0)},Pe=function(){ln(!1)},ye=function(){bn.current&&bn.current.requestFullscreen&&bn.current.requestFullscreen()},be=function(){var $n;ln(!1),L(($n=bn.current)===null||$n===void 0?void 0:$n.duration)},Ce=function(){g&&!Rn.current&&(X||(bn.current.play(),Rn.current=!0))},je=function(){g&&Rn.current&&(Rn.current=!1)},Ee=function($n){bn.current&&(bn.current.currentTime=$n,L($n))};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(en,{}),(0,P.jsx)("div",{className:S()("".concat(V,"-video-container"),J),style:G,children:(0,P.jsxs)("div",{className:"".concat(V,"-video-content"),onMouseEnter:Ce,onMouseLeave:je,children:[(0,P.jsx)("video",l()(l()({ref:Jn},q),{},{muted:yn,className:"".concat(V,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:wn,onCanPlayThrough:Gn,onPlay:te,onPause:Pe,onEnded:be})),c&&(0,P.jsx)(O.Z,{className:"".concat(V,"-video-controller-wrapper"),isPlaying:X,currentTime:cn,duration:sn,enableVolume:Ln,muted:yn,onMute:function(){return Fn(!yn)},onPlayPause:zn,onFullscreen:ye,onProgressClick:Ee}),U]})})]})}),f=t},3658:function(dn,w,n){n.d(w,{Z:function(){return Z}});var b=n(26068),l=n.n(b),$=n(75271),N=new Map;function Z(m){var I=m.globalStyle,A=m.name;(0,$.useLayoutEffect)(function(){var S=N.get(I)||0;if(S)N.set(I,l()(l()({},S),{},{count:S.count+1}));else{var O=document.createElement("style"),D=Math.random().toString(36).slice(2);O.innerHTML=I,O.dataset.id=D,O.dataset.flag="bailian-ui-use-style",A&&O.setAttribute("name",A),document.head.appendChild(O),N.set(I,{count:1,id:D})}return function(){var C=N.get(I);N.set(I,l()(l()({},C),{},{count:C.count-1})),setTimeout(function(){var y=N.get(I);if((y==null?void 0:y.count)<=0){var B;N.delete(I),(B=document.head.querySelector('[data-id="'+y.id+'"]'))===null||B===void 0||B.remove()}},100)}},[I])}},53061:function(dn,w,n){n.r(w),n.d(w,{Alert:function(){return s.Z},AlertDialog:function(){return j.default},Anchor:function(){return c.Z},Audio:function(){return ct},Avatar:function(){return k.Z},Badge:function(){return v.Z},Breadcrumb:function(){return g.Z},Button:function(){return U.Z},Card:function(){return J.Z},Checkbox:function(){return G.Z},CodeBlock:function(){return q.ZP},CodeBlockLangExtensionsMap:function(){return q.xO},Collapse:function(){return Y.Z},CollapsePanel:function(){return V.Z},ConfigProvider:function(){return Ut.ZP},DatePicker:function(){return en.Z},Descriptions:function(){return Kr.Z},Drawer:function(){return un.Z},Dropdown:function(){return vn.Z},EllipsisTip:function(){return Cn},Empty:function(){return Ln.Z},FileCard:function(){return _e.s},FileIcon:function(){return _e.Z},FloatButton:function(){return o.Z},Form:function(){return An.Z},HelpIcon:function(){return te},IconButton:function(){return Rn.Z},IconFont:function(){return Pe.Z},Image:function(){return ye.Z},Input:function(){return be.Z},InputNumber:function(){return P.Z},MdEditor:function(){return we.Z},MobileAlertDialog:function(){return Dt},MobileDrawer:function(){return Pt},MobileModal:function(){return ft},Modal:function(){return je.Z},Pagination:function(){return In.Z},Popconfirm:function(){return $n.Z},Popover:function(){return yr.Z},Progress:function(){return p.Z},PromptsEditor:function(){return we.Z},Radio:function(){return t.ZP},RadioButton:function(){return br.default},Result:function(){return Cr.Z},Select:function(){return f.default},Skeleton:function(){return i.Z},SlateEditor:function(){return Ur},Slider:function(){return Je.Z},SliderSelector:function(){return Gr},Spinner:function(){return $r.Z},Statistic:function(){return Jr.Z},Steps:function(){return jr.Z},Switch:function(){return Yr.Z},Table:function(){return Xr.Z},Tabs:function(){return _r.Z},Tag:function(){return qr.Z},TimePicker:function(){return nt.Z},Tooltip:function(){return Gn.Z},Upload:function(){return et.Z},Video:function(){return rt.Z},bailianDarkTheme:function(){return Pr},bailianTheme:function(){return hr},base64Decoder:function(){return Qt},base64Encoder:function(){return Kt},carbonDarkTheme:function(){return Gt},carbonTheme:function(){return Vt},copy:function(){return dr.JG},delay:function(){return ur},generateTheme:function(){return y},generateThemeByToken:function(){return B.Z},getCommonConfig:function(){return sn.getCommonConfig},message:function(){return Ce.Z},notification:function(){return Ee.Z},parseJsonSafely:function(){return $t},purpleDarkTheme:function(){return Pr},purpleTheme:function(){return hr},renderTooltip:function(){return dr.rb},requestPop:function(){return vr},requestPopSse:function(){return wt},requestSse:function(){return xr},safeHtml:function(){return Mt.t},setCommonConfig:function(){return sn.setCommonConfig},useCommonConfig:function(){return sn.useCommonConfig},useGlobalStyle:function(){return Tt.Z},waitForDom:function(){return Nt},waitForFunc:function(){return fr}});var b=n(23577),l=n(19888),$=n(44719),N=n(57249),Z=function(r){var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null},m=function(r,a,d){return"#"+((1<<24)+(r<<16)+(a<<8)+d).toString(16).slice(1).toUpperCase()},I=function(r,a,d){var x=r/255,h=a/255,u=d/255,T=Math.max(x,h,u),R=Math.min(x,h,u),W,M,E=(T+R)/2;if(T===R)W=M=0;else{var H=T-R;switch(M=E>.5?H/(2-T-R):H/(T+R),T){case x:W=((h-u)/H+(h<u?6:0))/6;break;case h:W=((u-x)/H+2)/6;break;case u:W=((x-h)/H+4)/6;break;default:W=0}}return{h:W*360,s:M*100,l:E*100}},A=function(r,a,d){var x=r/360,h=a/100,u=d/100,T,R,W;if(h===0)T=R=W=u;else{var M=function(nn,on,xn){var Q=xn;return Q<0&&(Q+=1),Q>1&&(Q-=1),Q<.16666666666666666?nn+(on-nn)*6*Q:xn<.5?on:Q<.6666666666666666?nn+(on-nn)*(.6666666666666666-Q)*6:nn},E=u<.5?u*(1+h):u+h-u*h,H=2*u-E;T=M(H,E,x+1/3),R=M(H,E,x),W=M(H,E,x-1/3)}return{r:Math.round(T*255),g:Math.round(R*255),b:Math.round(W*255)}},S=function(r,a){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,x=Z(r);if(!x)return r;var h=I(x.r,x.g,x.b);h.l=Math.max(0,Math.min(100,h.l+a)),h.s=Math.max(0,Math.min(100,h.s+d));var u=A(h.h,h.s,h.l);return m(u.r,u.g,u.b)},O=function(r,a){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,x=Z(r);if(!x)return r;var h=I(x.r,x.g,x.b);h.l=a,d!==null&&(h.s=d);var u=A(h.h,h.s,h.l);return m(u.r,u.g,u.b)},D=function(r,a){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,x=Z(r);if(!x)return r;var h=I(x.r,x.g,x.b);h.l=a,h.s=Math.max(0,Math.min(100,h.s*d));var u=A(h.h,h.s,h.l);return m(u.r,u.g,u.b)},C=function(r){var a=r.primaryHex,d=r.bgBaseHex,x=r.textBaseHex,h=r.darkMode,u=h===void 0?!1:h,T=d||(u?"#000000":"#ffffff"),R=x||(u?"#E7E7ED":"#1a1a1a"),W=Z(a);if(!W)return null;var M=I(W.r,W.g,W.b),E=Z(T),H=Z(R),rn=E?I(E.r,E.g,E.b):{h:210,s:8,l:u?5:99},nn=Math.max(8,Math.min(M.s,40)),on=Math.max(12,Math.min(M.s*.6,35)),xn={borderRadiusXS:l.borderRadiusXS,borderRadiusSM:l.borderRadiusSM,borderRadius:l.borderRadius,borderRadiusLG:l.borderRadiusLG,borderRadiusXL:l.borderRadiusXL,borderRadiusFull:l.borderRadiusFull,wireframe:l.wireframe,colorPrimary:u?O(a,Math.max(M.l-5,42),M.s*.95):a,colorPrimaryHover:u?O(a,Math.min(M.l+10,55),M.s*.95):S(a,M.l<50?10:-10,0),colorPrimaryActive:u?O(a,Math.max(M.l-10,35),M.s*.95):S(a,M.l<50?-10:-20,0),colorPrimaryBg:u?O(a,13,nn*.6):O(a,96,nn*.8),colorPrimaryBgHover:u?O(a,13,nn*.6):O(a,94,nn),colorPrimaryBorder:u?O(a,17,on*.8):O(a,88,on*.8),colorPrimaryBorderHover:u?O(a,22,on):O(a,82,on),colorPrimaryText:u?O(a,Math.max(M.l-5,42),M.s*.95):a,colorPrimaryTextHover:u?O(a,Math.min(M.l+10,55),M.s*.95):S(a,M.l<50?10:-10,0),colorPrimaryTextActive:u?O(a,Math.max(M.l-10,35),M.s*.95):S(a,M.l<50?-10:-20,0),colorTextBase:x,colorText:"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.88)"),colorTextSecondary:"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.65)"),colorTextTertiary:"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.45)"),colorTextQuaternary:"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.25)"),colorTextWhite:"#fff",colorBgBase:d,colorBgContainer:u?D(d,Math.min(rn.l+3,8),1.2):D(d,Math.min(rn.l+1,99),.8),colorBgElevated:u?D(d,Math.min(rn.l+3,8),1.2):d,colorBgLayout:u?D(d,Math.min(rn.l+3,8),1.2):D(d,Math.max(rn.l-2,96),1.2),colorBgSpotlight:u?"rgba(".concat(Z(D(d,28,1.2)).r,", ").concat(Z(D(d,28,1.2)).g,", ").concat(Z(D(d,28,1.2)).b,", 0.85)"):"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.85)"),colorBgMask:u?"rgba(".concat(E.r,", ").concat(E.g,", ").concat(E.b,", 0.8)"):"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.45)"),colorBorder:u?"rgba(".concat(Z(D(d,28,2)).r,", ").concat(Z(D(d,28,2)).g,", ").concat(Z(D(d,28,2)).b,", 0.8)"):D(d,81,2.5),colorBorderSecondary:u?"rgba(".concat(Z(D(d,22,1.8)).r,", ").concat(Z(D(d,22,1.8)).g,", ").concat(Z(D(d,22,1.8)).b,", 0.8)"):D(d,88,2),colorFill:u?"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.18)"):D(d,81,2.5)+"5c",colorFillSecondary:u?"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.12)"):D(d,81,2.5)+"33",colorFillTertiary:u?"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.08)"):D(d,81,2.5)+"26",colorFillQuaternary:u?"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.04)"):D(d,81,2.5)+"1a",colorFillDisable:u?D(x,55,.8):D(d,86,1.8),colorLink:u?O(a,Math.max(M.l-5,42),M.s*.95):a,colorInfo:u?b.colorInfo:l.colorInfo,colorInfoHover:u?b.colorInfoHover:l.colorInfoHover,colorInfoText:u?b.colorInfoText:l.colorInfoText,colorInfoBg:u?b.colorInfoBg:l.colorInfoBg,colorInfoBgHover:u?b.colorInfoBgHover:l.colorInfoBgHover,colorInfoBorder:u?b.colorInfoBorder:l.colorInfoBorder,colorInfoBorderHover:u?b.colorInfoBorderHover:l.colorInfoBorderHover,colorSuccess:u?b.colorSuccess:l.colorSuccess,colorSuccessHover:u?b.colorSuccessHover:l.colorSuccessHover,colorSuccessBg:u?b.colorSuccessBg:l.colorSuccessBg,colorSuccessBgHover:u?b.colorSuccessBgHover:l.colorSuccessBgHover,colorSuccessBorder:u?b.colorSuccessBorder:l.colorSuccessBorder,colorSuccessBorderHover:u?b.colorSuccessBorderHover:l.colorSuccessBorderHover,colorWarning:u?b.colorWarning:l.colorWarning,colorWarningHover:u?b.colorWarningHover:l.colorWarningHover,colorWarningBg:u?b.colorWarningBg:l.colorWarningBg,colorWarningBgHover:u?b.colorWarningBgHover:l.colorWarningBgHover,colorWarningBorder:u?b.colorWarningBorder:l.colorWarningBorder,colorWarningBorderHover:u?b.colorWarningBorderHover:l.colorWarningBorderHover,colorError:u?b.colorError:l.colorError,colorErrorHover:u?b.colorErrorHover:l.colorErrorHover,colorErrorBg:u?b.colorErrorBg:l.colorErrorBg,colorErrorBgHover:u?b.colorErrorBgHover:l.colorErrorBgHover,colorErrorBorder:u?b.colorErrorBorder:l.colorErrorBorder,colorErrorBorderHover:u?b.colorErrorBorderHover:l.colorErrorBorderHover,colorPurple:u?b.colorPurple:l.colorPurple,colorPurpleHover:u?b.colorPurpleHover:l.colorPurpleHover,colorPurpleBg:u?b.colorPurpleBg:l.colorPurpleBg,colorPink:u?b.colorPink:l.colorPink,colorPinkHover:u?b.colorPinkHover:l.colorPinkHover,colorPinkBg:u?b.colorPinkBg:l.colorPinkBg,colorYellow:u?b.colorYellow:l.colorYellow,colorYellowHover:u?b.colorYellowHover:l.colorYellowHover,colorYellowBg:u?b.colorYellowBg:l.colorYellowBg,colorOrange:u?b.colorOrange:l.colorOrange,colorOrangeHover:u?b.colorOrangeHover:l.colorOrangeHover,colorOrangeBg:u?b.colorOrangeBg:l.colorOrangeBg,colorTeal:u?b.colorTeal:l.colorTeal,colorTealHover:u?b.colorTealHover:l.colorTealHover,colorTealBg:u?b.colorTealBg:l.colorTealBg,colorBlue:u?b.colorBlue:l.colorBlue,colorBlueHover:u?b.colorBlueHover:l.colorBlueHover,colorBlueBg:u?b.colorBlueBg:l.colorBlueBg,colorMauve:u?b.colorMauve:l.colorMauve,colorMauveHover:u?b.colorMauveHover:l.colorMauveHover,colorMauveBg:u?b.colorMauveBg:l.colorMauveBg,colorSlate:u?b.colorSlate:l.colorSlate||"#1E293B",colorSlateHover:u?b.colorSlateHover:l.colorSlateHover||"#475569",colorSlateBg:u?b.colorSlateBg:l.colorSlateBg||"#E2E8F0",colorLavender:u?b.colorLavender:l.colorLavender||"#A77BFF",colorLavenderHover:u?b.colorLavenderHover:l.colorLavenderHover||"#BB99FF",colorLavenderBg:u?b.colorLavenderBg:l.colorLavenderBg||"rgba(226, 212, 255, 0.8)",boxShadow:u?b.boxShadow:l.boxShadow,boxShadowSecondary:u?b.boxShadowSecondary:l.boxShadowSecondary,boxShadowTertiary:u?b.boxShadowTertiary:l.boxShadowTertiary,boxShadowTertiaryLeft:u?b.boxShadowTertiaryLeft:l.boxShadowTertiaryLeft,boxShadowInput:u?b.boxShadowInput:l.boxShadowInput};return xn},y=C,B=n(30172),s=n(46525),v=n(2344),o=n(69407),P=n(1359),p=n(32102),t=n(57239),f=n(54426),i=n(42435),j=n(55002),c=n(22074),k=n(51971),g=n(72997),U=n(15306),J=n(72271),G=n(94969),q=n(43274),Y=n(55655),V=n(33996),en=n(59597),un=n(15201),vn=n(90088),cn=n(26068),L=n.n(cn),fn=n(31759),hn=n.n(fn),sn=n(31209),Sn=n(43721),gn=n(82187),Pn=n.n(gn),X=n(75271),ln=n(53649),an=n.n(ln),pn=n(88974),yn,Fn=(0,pn.Z)(yn||(yn=an()([`
div.`,`-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`])),function(e){return e.sparkPrefix}),F=n(52676);function Cn(e){var r=e.className,a=r===void 0?"":r,d=e.style,x=d===void 0?{}:d,h=e.children,u=e.rows,T=u===void 0?1:u,R=e.tooltip,W=e.tooltipMaxHeight,M=W===void 0?"90vh":W,E=(0,sn.getCommonConfig)(),H=E.sparkPrefix,rn=Fn();function nn(){var on={maxHeight:M,overflow:"auto"};if(hn()(R)==="object"){var xn=R,Q=xn.title,_=xn.styles;return{title:Q||h,styles:L()(L()({},_),{},{body:L()(L()({},on),_==null?void 0:_.body)})}}return{title:R||h,styles:{body:on}}}return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(rn,{}),(0,F.jsx)(Sn.Z.Paragraph,{className:Pn()("".concat(H,"-ellipsis-tip"),a),style:x,ellipsis:{rows:T,tooltip:nn()},children:h})]})}var Ln=n(6401),An=n(94577),bn=n(69898),Rn=n(6665),Jn=n(41301),Gn=n(10068),wn,zn=(0,pn.Z)(wn||(wn=an()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix});function te(e){var r=(0,Jn.X)(),a=zn(),d=e.style,x=e.content,h=e.className,u=e.popoverProps,T=(0,sn.getCommonConfig)(),R=T.sparkPrefix;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(r,{}),(0,F.jsx)(a,{}),(0,F.jsx)(Gn.Z,L()(L()({title:x,overlayInnerStyle:{maxWidth:376},trigger:"hover",style:d},u),{},{children:(0,F.jsx)(Rn.Z,{className:Pn()("".concat(R,"-help-icon"),h),icon:(0,F.jsx)(bn.Z,{}),shape:"circle",bordered:!1,size:"small"})}))]})}var Pe=n(91542),ye=n(3297),be=n(65627),Ce=n(33185),je=n(78853),Ee=n(31265),In=n(35084),$n=n(29126),yr=n(76617),we=n(76087),br=n(4855),Cr=n(95748),jr=n(85085),Er=n(48305),oe=n.n(Er),_n=n(1615),le=n(82090),z=n(75040),Se=n(28533),se=n(20335),Ue,Sr=(0,pn.Z)(Ue||(Ue=an()([`
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
`]))),Dr=n(15558),$e=n.n(Dr),Tr=(0,X.memo)(function(e){var r=e.attributes,a=e.children;return(0,F.jsx)("div",L()(L()({},r),{},{style:{marginTop:"8px"},children:a}))}),Ke,Mr=(0,pn.Z)(Ke||(Ke=an()([`
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
`]))),Nr=(0,X.memo)(function(e){var r=e.attributes,a=e.renderVarLabel,d=Mr();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(d,{}),(0,F.jsxs)("span",L()(L()({},r),{},{children:[e.children,(0,F.jsx)("span",{className:"spark-editor-var-tag",children:a?a(e.element.code):e.element.label})]}))]})}),Jt=function(r){return Object.keys(r).map(function(a){return{label:r[a].label,desc:r[a].desc,value:a}})},Br=[{code:"s",isParagraph:!0,out:[],inner:[],name:_n.Z.get({id:"components.SlateEditor.utils.constant.Paragraph",dm:"\u6BB5\u843D"}),render:Tr,type:"double"},{code:"var",isParagraph:!1,out:["s"],inner:[],name:_n.Z.get({id:"components.SlateEditor.utils.constant.Variable",dm:"\u53D8\u91CF"}),render:Nr,isInline:!0,isVoid:!0,type:"single"}],De=function(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},Yt=function(r){return r.replace(/&/g,"&amp;").replace(/{/g,"").replace(/}/g,"").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},kr=function(r){return r.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")},Te=function e(r,a){var d="",x=a||{},h=x.tagRules,u=h===void 0?{}:h;return r.forEach(function(T,R){if(z.W_.isElement(T)){var W=u[T.type];if(!W)d+=De(T.text);else switch(W.code){case"image":d+="![".concat(T.fileName,"](").concat(T.src,")");break;case"pdf":d+="[".concat(T.fileName,"](").concat(T.src,")");break;case"s":d+="".concat(e(T.children,a)).concat(R<r.length-1?`
`:"");break;case"var":d+="${".concat(T.code,"}");default:break}}else d+=De(T.text)}),d},Qe=function(r,a){if(r&&r.children.length){var d=Te(r.children,a);return d==="<s></s>"?"":kr(d)}return""},me=function(r){if(!r)return"";var a="",d=De(r).replace(/\$\{([^{}]+?)\}/g,function(x,h){return'<var code="'.concat(h,'" label="${').concat(h,'}" />')});return d.split(`
`).forEach(function(x){a+="<s>".concat(x,"</s>")}),"<speak>".concat(a,"</speak>")},Or=function e(r){var a,d=[];return(r==null||(a=r.childNodes)===null||a===void 0?void 0:a.length)>0&&r.childNodes.forEach(function(x,h,u){var T=x.nodeType,R=x.nodeName;if(T===1){for(var W={},M=0;M<x.attributes.length;M++){var E=x.attributes[M],H=E.nodeName,rn=E.nodeValue;W[H]=rn}var nn=L()({type:R},W);x.childNodes.length>0?nn.children=e(x):nn.children=[{text:""}],d.push(nn),R!=="s"&&(h>0&&u[h-1].nodeType===1&&d.unshift({text:""}),h===u.length-1&&d.push({text:""}))}else T===3&&d.push({text:x.nodeValue||""})}),d},ve=function(r){if(r){var a=new DOMParser().parseFromString(r,"text/xml");return Or(a)}},Zr=function(r){if(!r||r.includes("</speak>"))return r;var a=r;return a.includes("<s>")||(a="<s>".concat(a,"</s>")),"<speak>".concat(a,"</speak>")},Ve=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a={};return[].concat($e()(r),$e()(Br)).forEach(function(d){a[d.code]||(a[d.code]=d)}),a},Fr=n(90228),Bn=n.n(Fr),Lr=n(87999),qn=n.n(Lr),Ge=function(r,a,d){if(!(!r||!a)){var x=r.selection,h=null;x&&(h=x.focus),d!=null&&d.at&&(h=d==null?void 0:d.at),h||(h={path:[0,0],offset:0});var u=h,T=u.path,R=u.offset,W=z.NB.get(r,z.y$.parent(T));if(!z.ML.isVoid(r,W)){var M=z.NB.string(z.NB.get(r,T)),E=M.substring(0,R-(d!=null&&d.deletePrefix?1:0)),H=M.substring(R,M.length);z.ML.withoutNormalizing(r,function(){r.apply({type:"insert_node",node:{text:H},path:T}),r.apply({type:"insert_node",node:a,path:T}),r.apply({type:"insert_node",node:{text:E},path:T});var rn=z.y$.next(z.y$.next(z.y$.next(T)));r.apply({type:"remove_node",path:rn,node:z.NB.get(r,rn)});var nn={path:z.y$.next(z.y$.next(T)),offset:0};r.apply({type:"set_selection",properties:null,newProperties:{anchor:nn,focus:nn}}),se.F3.focus(r),r.onChange()})}}},Ir=function(){var e=qn()(Bn()().mark(function r(a,d,x){var h,u,T,R,W,M,E,H,rn,nn,on,xn,Q,_,jn,En,Wn,Tn,Hn,Un,kn,Nn,Kn,ee,Qn,Vn,Xn,On,Zn,Dn,Mn,mn;return Bn()().wrap(function(tn){for(;;)switch(tn.prev=tn.next){case 0:if(!(!a||!d)){tn.next=2;break}return tn.abrupt("return");case 2:if(u=a.selection,T=x||{},R=T.tip,W=T.selection,M=W===void 0?u:W,E=x==null||(h=x.rules)===null||h===void 0?void 0:h[d.type],!(M&&!z.e6.isCollapsed(M))){tn.next=45;break}if(rn=z.NB.fragment(a,M),nn=ge(rn),nn!==""){tn.next=10;break}return tn.abrupt("return");case 10:if(on=pe(z.e6.edges(M)),xn=oe()(on,2),Q=xn[0],_=xn[1],z.ML.isVoid(a,z.NB.get(a,z.y$.parent(Q.path)))&&(Q.path=z.y$.next(z.y$.parent(Q.path)),Q.offset=0),z.ML.isVoid(a,z.NB.get(a,z.y$.parent(_.path)))&&(_.path=z.y$.previous(z.y$.parent(_.path)),_.offset=z.NB.string(z.NB.get(a,_.path)).length),z.y$.hasPrevious(_.path)&&z.NB.get(a,z.y$.parent(Q.path))===z.NB.get(a,z.y$.previous(_.path))&&Q.offset===0&&_.offset===0&&(jn=z.y$.previous(z.y$.parent(Q.path)),En=z.NB.get(a,jn),Q.path=jn,Q.offset=En.text.length),z.NB.parent(a,Q.path)!==z.NB.parent(a,_.path)){for(Wn=z.NB.get(a,Q.path),Tn=ge(z.NB.fragment(a,{anchor:{path:_.path,offset:0},focus:_}));z.xv.isText(Wn)&&Wn.text===""&&nn===Tn;)Q.path.splice(Q.path.length-1,1,1,0),Wn=z.NB.get(a,Q.path);for(Hn=z.NB.get(a,_.path),Un=z.NB.string(z.NB.get(a,z.e6.edges(M)[0].path)),kn=ge(z.NB.fragment(a,{anchor:Q,focus:{path:Q.path,offset:Un.length}}));z.xv.isText(Hn)&&Hn.text===""&&nn===kn;)Nn=_.path[_.path.length-1],_.path.splice(_.path.length-1,1,Nn-1),Hn=z.NB.get(a,_.path),z.W_.isElement(Hn)&&(_.path.push(Hn.children.length-1),_.offset=Un.length)}if(z.NB.parent(a,Q.path)===z.NB.parent(a,_.path)){tn.next=18;break}return le.ZP.info(_n.Z.get({id:"components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect",dm:"\u5212\u9009\u8303\u56F4\u6709\u8BEF"})),tn.abrupt("return");case 18:Kn=z.y$.parent(Q.path),ee=(E==null?void 0:E.name)||Me(),Qn=z.NB.get(a,Kn),Vn=x==null||(H=x.rules)===null||H===void 0?void 0:H[Qn.type];case 22:if(!(E!=null&&E.out&&Kn.length>1)){tn.next=30;break}if(E.out.includes(Qn.type)){tn.next=27;break}return Xn=(Vn==null?void 0:Vn.name)||Me(),le.ZP.warning(_n.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn",dm:"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185"},{wrapTagName:ee,tagName:Xn})),tn.abrupt("return");case 27:Kn=z.y$.parent(Kn),tn.next=22;break;case 30:if(!(E!=null&&E.inner&&z.NB.get(a,Q.path)!==z.NB.get(a,_.path))){tn.next=42;break}On=z.y$.next(Q.path);case 32:if(z.y$.equals(On,_.path)){tn.next=42;break}if(Dn=z.NB.get(a,On),Mn=x==null||(Zn=x.rules)===null||Zn===void 0?void 0:Zn[Dn.type],!(z.W_.isElement(Dn)&&!E.inner.includes(Dn.type))){tn.next=39;break}return mn=(Mn==null?void 0:Mn.name)||Me(),le.ZP.warning(_n.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn",dm:"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011"},{wrapTagName:ee,tagName:mn})),tn.abrupt("return");case 39:On=z.y$.next(On),tn.next=32;break;case 42:z.ML.withoutNormalizing(a,function(){var ae=z.NB.parent(a,Q.path),re=z.NB.fragment(ae,{anchor:{path:[Q.path[Q.path.length-1]],offset:Q.offset},focus:{path:[_.path[_.path.length-1]],offset:_.offset}}),de=z.NB.string(z.NB.get(a,Q.path));if(z.y$.equals(Q.path,_.path))a.apply({type:"remove_text",path:Q.path,offset:Q.offset,text:de.substring(Q.offset,_.offset)});else{a.apply({type:"remove_text",path:Q.path,offset:Q.offset,text:de.substring(Q.offset,de.length)});for(var fe=z.y$.next(Q.path);!z.y$.equals(fe,_.path);)a.apply({type:"remove_node",path:fe,node:z.NB.get(a,fe)}),_.path=z.y$.previous(_.path);var Re=z.NB.string(z.NB.get(a,_.path));a.apply({type:"remove_text",path:_.path,offset:0,text:Re.substring(0,_.offset)})}if(!z.y$.equals(Q.path,_.path)){var he=z.NB.get(a,_.path);a.apply({type:"remove_node",path:_.path,node:he});var We=z.NB.string(he);a.apply({type:"insert_text",path:Q.path,offset:Q.offset,text:We})}Ge(a,L()(L()({},d),{},{children:re}),{at:Q,rules:x==null?void 0:x.rules})}),tn.next=46;break;case 45:R&&le.ZP.warning(R);case 46:case"end":return tn.stop()}},r)}));return function(a,d,x){return e.apply(this,arguments)}}(),Xt=function(r,a,d){if(!(!r||!a)){var x=Node.get(r,a),h=pe(x.children).reverse();Editor.withoutNormalizing(r,function(){r.apply({type:"remove_node",node:x,path:a}),h.forEach(function(nn){r.apply({type:"insert_node",node:nn,path:a})});for(var u=Path.parent(a),T=Node.get(r,u),R=0;Node.has(T,[R+1]);)if(Text.isText(Node.get(T,[R]))&&Text.isText(Node.get(T,[R+1]))){var W=_toConsumableArray(u);W.push(R+1);var M=Node.get(r,W),E=Node.string(M);r.apply({type:"remove_node",path:W,node:M});var H=Path.previous(W),rn=Node.string(Node.get(r,H));r.apply({type:"insert_text",path:Path.previous(W),offset:rn.length,text:E}),T=Node.get(r,u)}else R++;d==null||d(),Path.previous(a)})}},Ar=function(r,a,d){var x=d.at;r.apply({type:"set_node",path:x,properties:a,newProperties:a}),r.onChange()},_t=function(r,a,d){r.apply({type:"remove_node",path:d,node:Node.get(r,d)}),r.apply({type:"insert_node",path:d,node:a})},Rr=function(r,a){r&&(z.ML.withoutNormalizing(r,function(){var d=pe(r.children);d.forEach(function(h){r.apply({type:"remove_node",path:[0],node:h})});var x=a?pe(a):[{type:"s",children:[{text:""}]}];x.reverse(),x.forEach(function(h){r.apply({type:"insert_node",path:[0],node:h})})}),r.onChange())},ge=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.reduce(function(a,d){return a+z.NB.string(d)},"")},pe=function(r){return JSON.parse(JSON.stringify(r))},Me=function(){var r="";return r},qt=function(r){var a;return(a=r[0])===null||a===void 0||(a=a.children)===null||a===void 0?void 0:a.map(function(d){return d.children.map(function(x){return x.text}).join("")}).join("")},na=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,a=r%60,d=parseInt("".concat(r/60)),x=0;return d>60&&(d=d%60,x=parseInt("".concat(d/60))),"".concat(x?"".concat(Ne(x),":"):"").concat(Ne(d),":").concat(Ne(a))},Ne=function(r){return r>=10?"".concat(r):"0".concat(r)},Wr=function(r,a){if(!(!r||!a))return se.F3.findPath(r,a)},Hr=function(r){r&&z.ML.withoutNormalizing(r,function(){var a=z.ML.end(r,[]);z.YR.select(r,a),se.F3.focus(r),r.onChange()})},zr=function(r,a,d){var x=r.isInline,h=r.isVoid,u=r.insertText,T=r.insertBreak,R=r.apply;r.isInline=function(M){var E;return((E=d[M.type])===null||E===void 0?void 0:E.isInline)||x(M)},r.isVoid=function(M){var E;return((E=d[M.type])===null||E===void 0?void 0:E.isVoid)||h(M)};var W=function(E){var H=parseInt(r.maxLength||a||"1000"),rn=Qe(r,{tagRules:d}),nn=rn.length;if(nn+E.length>H?(u(E.substring(0,H-nn)),Se.MO.withoutSaving(r,function(){u(E.substring(H-nn,E.length))})):u(E),r.selection&&nn+E.length>H){var on=r.selection.focus,xn=on.path,Q=on.offset,_=Q-(nn+E.length-H),jn=E.substring(H-nn,E.length),En=_n.Z.get({id:"components.SlateEditor.utils.withEditor.YouCanEnterAMaximum",dm:"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57"},{maxLen:H});Se.MO.withoutSaving(r,function(){r.apply({type:"remove_text",path:xn,offset:_,text:jn})}),le.ZP.warning(En)}};return r.insertText=W,r.insertFragment=function(M){var E=ge(M);W(E)},r.insertBreak=function(){var M=r.selection;if(M){var E=Array.from(z.ML.nodes(r,{at:M,match:function(on){return!z.ML.isEditor(on)&&z.W_.isElement(on)&&on.type!=="s"}})),H=oe()(E,1),rn=H[0];if(rn)return;T()}},r.apply=function(M){M.type==="set_selection"&&Be||R(M)},r},wr=(0,X.forwardRef)(function(e,r){var a=Sr(),d=e.value,x=e.wordLimit,h=x===void 0?1e3:x,u=e.disabled,T=e.onChange,R=e.variables,W=(0,X.useRef)(!1),M=(0,X.useRef)(Ve(e.tagRules)),E=(0,X.useMemo)(function(){return zr((0,se.BU)((0,Se.VC)((0,z.Jh)())),h,M.current)},[]),H=(0,X.useRef)(E.selection),rn=(0,X.useRef)(R);(0,X.useEffect)(function(){M.current=Ve(e.tagRules)},[e.tagRules]),(0,X.useEffect)(function(){rn.current=R},[R]),(0,X.useEffect)(function(){var mn;if(!W.current){W.current=!0;return}E.maxLength=h;var K=kn();Qn(((mn=ve(me(K==null?void 0:K.slice(0,h))))===null||mn===void 0||(mn=mn[0])===null||mn===void 0?void 0:mn.children)||[{type:"s",children:[{text:""}]}])},[h]),(0,X.useImperativeHandle)(r,function(){return{editor:E,getEditorValue:kn,_insertNodes:Kn,_setNodes:Nn,_setEditorContent:Qn,_findNodePath:Xn,_wrapNodes:ee,_serialize:On,_generateTextBySelection:Zn,_insertFragment:Dn,_setEditorContentByStr:Vn}});var nn=(0,X.useMemo)(function(){var mn=ve(Zr(me(d))),K;return mn&&(mn[0].type==="speak"?K=mn[0].children:K=mn),{initValue:K}},[d]),on=nn.initValue,xn=(0,X.useState)(on||[{type:"s",children:[{text:""}]}]),Q=oe()(xn,2),_=Q[0],jn=Q[1],En=function(K){JSON.stringify((E==null?void 0:E.selection)||"")!==JSON.stringify(H.current||"")&&(H.current=E==null?void 0:E.selection);var tn=kn();d!==tn&&(T==null||T(kn()),jn(K))},Wn=function(K){var tn=K.element,ae=tn.type,re=M.current[ae].render;return re?(0,F.jsx)(re,L()(L()({},K),{},{renderVarLabel:e.renderVarLabel})):(0,F.jsx)(F.Fragment,{})},Tn=(0,X.useCallback)(function(mn){var K=mn.attributes,tn=mn.children,ae=mn.leaf;return(0,F.jsx)("span",L()(L()({},K),{},{style:{paddingLeft:ae.text===""?"3px":void 0},children:tn}))},[]),Hn=function(){Be=!0},Un=function(){Be=!1},kn=function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe(E,L()(L()({},K),{},{tagRules:M.current}))},Nn=function(K,tn){Ar(E,K,tn)},Kn=function(K){var tn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ge(E,K,L()(L()({},tn),{},{rules:M.current}))},ee=function(K){var tn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ir(E,K,L()(L()({},tn),{},{rules:M.current}))},Qn=function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];Rr(E,K)},Vn=function(){var K,tn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";Qn(((K=ve(me(tn==null?void 0:tn.slice(0,h))))===null||K===void 0||(K=K[0])===null||K===void 0?void 0:K.children)||[{type:"s",children:[{text:""}]}])},Xn=function(K){return Wr(E,K)},On=function(K){var tn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Te(K,L()(L()({},tn),{},{tagRules:M.current}))},Zn=function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!E.selection)return null;var tn=z.NB.fragment(E,E.selection);return Te(tn,L()(L()({},K),{},{tagRules:M.current}))},Dn=function(K){var tn,ae=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,re=kn();if(re.length>=h){le.ZP.warning(_n.Z.get({id:"components.commonComponents.SlateEditor.TheNumberOfWordsCannot",dm:"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57"}));return}(!E.selection||ae)&&Hr(E);var de=re.endsWith("/n");ae&&re&&!de&&E.insertBreak();var fe=K.slice(0,h-re.length),Re=ve(me(fe))||[];(tn=Re[0])===null||tn===void 0||tn.children.forEach(function(he,We){var He;We!==0&&E.insertBreak(),(He=he.children)===null||He===void 0||He.forEach(function(ze){ze.text?E.insertText(ze.text):Kn(ze)})})};(0,X.useEffect)(function(){var mn=kn();d!==mn&&(T==null||T(kn()))},[]);var Mn=function(K){var tn=K.clipboardData.getData("text/plain");Dn(tn,!1),K.preventDefault()};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(a,{}),(0,F.jsx)("div",{id:"text-editor",className:Pn()("text-editor",e.className),children:(0,F.jsx)(se.mH,{editor:E,value:_,onChange:En,children:(0,F.jsx)(se.CX,{onKeyDown:e.onKeyDown,placeholder:e.placeholder||_n.Z.get({id:"components.commonComponents.SlateEditor.EnterHere",dm:"\u5728\u8FD9\u91CC\u8F93\u5165"}),onBlur:e.onBlur,onFocus:e.onFocus,className:Pn()("text-editor-content",e.contentClassName),readOnly:u,renderElement:Wn,renderLeaf:Tn,onCompositionStart:Hn,onCompositionEnd:Un,onPaste:Mn,maxLength:e.wordLimit,onCopy:function(K){var tn=Zn()||"";K.clipboardData.setData("text/plain",tn),K.preventDefault()}})})})]})}),Ur=wr,Be=!1,Je=n(96868),$r=n(46387),Kr=n(16721),Qr=n(82092),ce=n.n(Qr),Ye,Vr=(0,pn.Z)(Ye||(Ye=an()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix});function Gr(e){var r=(0,sn.getCommonConfig)(),a=r.sparkPrefix,d=Vr(),x=function(u){var T=typeof u=="string"?parseFloat(u):u;if(T===null||isNaN(T)){var R;(R=e.onChange)===null||R===void 0||R.call(e,null);return}if(T<e.min){var W;(W=e.onChange)===null||W===void 0||W.call(e,e.min)}else if(T>e.max){var M;(M=e.onChange)===null||M===void 0||M.call(e,e.max)}else{var E;(E=e.onChange)===null||E===void 0||E.call(e,T)}};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(d,{}),(0,F.jsxs)("div",{onMouseUp:function(){var u;return(u=e.onBlur)===null||u===void 0?void 0:u.call(e)},className:Pn()("".concat(a,"-slider-selector"),e.className),children:[(0,F.jsx)(Je.Z,{disabled:e.disabled,onChange:x,value:e.value===null?void 0:e.value,min:e.min,max:e.max,step:e.step,marks:e.marks||ce()(ce()({},e.min,e.min),e.max,e.max),tooltip:{getPopupContainer:function(u){return u}}}),(0,F.jsx)("div",{style:L()({width:"48px"},e.inputNumberWrapperStyle),children:(0,F.jsx)(P.Z,{disabled:e.disabled,controls:!1,min:e.min,max:e.max,onBlur:function(){var u;return(u=e.onBlur)===null||u===void 0?void 0:u.call(e)},step:e.step,value:e.value,onChange:x,precision:e.precision})})]})]})}var Jr=n(27975),Yr=n(27485),Xr=n(53713),_r=n(11596),qr=n(55395),nt=n(47756),et=n(36555),rt=n(19777),tt=n(67825),ie=n.n(tt),at=n(62892),ot=n(56630),Xe,it=(0,pn.Z)(Xe||(Xe=an()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix}),lt=["controls","children","className","style"],st=(0,X.forwardRef)(function(e,r){var a=e.controls,d=e.children,x=e.className,h=e.style,u=ie()(e,lt),T=(0,sn.getCommonConfig)(),R=T.sparkPrefix,W=it(),M=(0,X.useState)(0),E=oe()(M,2),H=E[0],rn=E[1],nn=(0,X.useState)(0),on=oe()(nn,2),xn=on[0],Q=on[1],_=(0,X.useState)(!1),jn=oe()(_,2),En=jn[0],Wn=jn[1],Tn=(0,ot.Z)(e,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!1}),Hn=oe()(Tn,2),Un=Hn[0],kn=Hn[1],Nn=(0,X.useRef)(null),Kn=function(Mn){Nn.current=Mn,r&&(typeof r=="function"?r(Mn):r.current=Mn)};(0,X.useEffect)(function(){var Dn;return En&&(Dn=setInterval(function(){Nn.current&&rn(Nn.current.currentTime)},16)),function(){Dn&&clearInterval(Dn)}},[En]);var ee=function(){Nn.current&&Q(Nn.current.duration)},Qn=function(){Nn.current&&(En?Nn.current.pause():Nn.current.play(),Wn(!En))},Vn=function(){Wn(!0)},Xn=function(){Wn(!1)},On=function(){var Mn;Wn(!1),rn(((Mn=Nn.current)===null||Mn===void 0?void 0:Mn.duration)||0)},Zn=function(Mn){Nn.current&&(Nn.current.currentTime=Mn,rn(Mn))};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(W,{}),(0,F.jsxs)("div",{className:Pn()("".concat(R,"-audio-container"),x),style:h,children:[(0,F.jsx)("audio",L()(L()({ref:Kn},u),{},{muted:Un,className:"".concat(R,"-audio-element"),onLoadedMetadata:ee,onPlay:Vn,onPause:Xn,onEnded:On})),a&&(0,F.jsx)(at.Z,{className:"".concat(R,"-audio-controller-wrapper"),isPlaying:En,currentTime:H,duration:xn,enableVolume:!0,enableFullscreen:!1,muted:Un,onMute:function(){return kn(!Un)},onPlayPause:Qn,onProgressClick:Zn}),d]})]})}),ct=st,_e=n(3897),ut=n(6002),ne=n(84674),qe,nr=(0,pn.Z)(qe||(qe=an()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),dt=["showDivider","closable"],er=function(){var r=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,d=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(d,"px"),function(){document.body.style.overflow=r,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,d)}},Yn=function(r){var a=nr(),d=(0,sn.getCommonConfig)(),x=d.sparkPrefix,h=r.showDivider,u=h===void 0?!0:h,T=r.closable,R=T===void 0?!0:T,W=ie()(r,dt);(0,X.useEffect)(function(){if(r.open){var rn=er();return rn}},[r.open]);var M=function(nn){return r.info?(0,F.jsxs)("div",{className:"".concat(x,"-modal-footer-wrapper"),children:[(0,F.jsx)("span",{className:"".concat(x,"-modal-footer-info"),children:r.info}),(0,F.jsx)("div",{className:"".concat(x,"-modal-footer-origin-node"),children:nn})]}):nn},E=R?r.closeIcon||(0,F.jsx)(ut.Z,{className:"".concat(x,"-modal-title-close"),onClick:function(nn){var on;(on=r.onCancel)===null||on===void 0||on.call(r,nn)}}):null,H=r.footer===void 0?M:r.footer;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(a,{}),(0,F.jsx)(ne.Z,L()(L()({},W),{},{centered:!1,closeIcon:null,width:r.width||"auto",title:(0,F.jsxs)("div",{className:"".concat(x,"-modal-title-wrapper"),children:[(0,F.jsx)("div",{className:Pn()("".concat(x,"-modal-title"),ce()({},"".concat(x,"-modal-title-padding"),R)),children:r.title}),E]}),wrapClassName:Pn()("".concat(x,"-modal"),ce()({},"".concat(x,"-show-divider"),u),r.wrapClassName,"animate-in"),footer:H,transitionName:""}))]})};Yn.useModal=ne.Z.useModal;var ue=function(r){return function(a){var d=er(),x=(0,sn.getCommonConfig)(),h=x.sparkPrefix,u=a==null?void 0:a.afterClose,T=a==null?void 0:a.content;function R(){var M=nr();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(M,{}),T]})}var W=L()(L()({},a),{},{content:(0,F.jsx)(R,{}),width:a.width||"auto",centered:!1,transitionName:"",wrapClassName:Pn()("".concat(h,"-modal"),a.wrapClassName,"animate-in"),afterClose:function(){d();for(var E=arguments.length,H=new Array(E),rn=0;rn<E;rn++)H[rn]=arguments[rn];u==null||u.apply(void 0,H)}});return r(W)}};Yn.success=ue(ne.Z.success),Yn.error=ue(ne.Z.error),Yn.warning=ue(ne.Z.warning),Yn.info=ue(ne.Z.info),Yn.confirm=ue(ne.Z.confirm),Yn.SMALL_WIDTH=640,Yn.MEDIUM_WIDTH=800,Yn.LARGE_WIDTH=960;var ft=Yn,mt=n(94042),vt=n(10178),rr,tr=(0,pn.Z)(rr||(rr=an()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),gt=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],pt=function(r){var a=r.onOk,d=r.onCancel,x=r.okText,h=x===void 0?"\u786E\u5B9A":x,u=r.okButtonProps,T=r.cancelText,R=T===void 0?"\u53D6\u6D88":T,W=r.cancelButtonProps,M=r.info,E=r.footer,H=ie()(r,gt),rn=tr(),nn=(0,sn.getCommonConfig)(),on=nn.antPrefix,xn=function(_){if(d)d();else{var jn;(jn=H.onClose)===null||jn===void 0||jn.call(H,_)}};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(rn,{}),(0,F.jsx)(un.Z,L()(L()({},H),{},{footer:E||(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{className:"".concat(on,"-drawer-footer-info"),children:M}),(0,F.jsxs)("div",{className:"".concat(on,"-drawer-footer-buttons"),children:[(0,F.jsx)(U.Z,L()(L()({onClick:xn},W),{},{children:R})),(0,F.jsx)(U.Z,L()(L()({type:"primary",onClick:a},u),{},{children:h}))]})]})}))]})},xt=pt,ht=["children","className","style","showDivider"],ar=function(r){var a=r.children,d=r.className,x=r.style,h=r.showDivider,u=h===void 0?!0:h,T=ie()(r,ht),R=tr(),W=(0,sn.getCommonConfig)(),M=W.sparkPrefix,E=W.antPrefix;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(R,{}),(0,F.jsx)(vt.Z,L()(L()({closeIcon:(0,F.jsx)(mt.Z,{size:24}),className:Pn()("".concat(M,"-drawer"),d,ce()({},"".concat(E,"-show-divider"),u)),style:L()({},x)},T),{},{children:a}))]})};Object.assign(ar,{Confirm:xt});var Pt=ar,yt=n(58911),bt=n(88602),Ct=n(62910),jt=n(99090),xe=n(65122),or,ir=(0,pn.Z)(or||(or=an()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Et=["children","type","danger","title","width","className"],lr=function(){var r=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,d=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(d,"px"),function(){document.body.style.overflow=r,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,d)}},sr=function(r){var a=function(on){var xn=on.type,Q=on.title,_=(0,sn.getCommonConfig)(),jn=_.antPrefix;switch(xn){case"success":return(0,F.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,F.jsx)(yt.Z,{style:{color:"var(--".concat(jn,"-color-success)"),fontSize:18,margin:"0 3px"}}),Q]});case"warning":case"confirm":return(0,F.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,F.jsx)(bt.Z,{style:{color:"var(--".concat(jn,"-color-warning)"),fontSize:18,margin:"0 3px"}}),Q]});case"info":return(0,F.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,F.jsx)(Ct.Z,{style:{color:"var(--".concat(jn,"-color-info)"),fontSize:18,margin:"0 3px"}}),Q]});case"error":return(0,F.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,F.jsx)(jt.Z,{style:{color:"var(--".concat(jn,"-color-error)"),fontSize:18,margin:"0 3px"}}),Q]});default:return _n.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},d=r.children,x=r.type,h=x===void 0?"info":x,u=r.danger,T=u===void 0?!1:u,R=r.title,W=r.width,M=W===void 0?"auto":W,E=r.className,H=E===void 0?"":E,rn=ie()(r,Et);return{width:M,transitionName:"",restProps:rn,closeIcon:null,title:a({type:h,title:R}),okButtonProps:{danger:h==="error"||h==="warning"||T},destroyOnClose:!0,className:Pn()(H,"animate-in","".concat((0,sn.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:r.content||d,children:d}},cr=function(r){var a=sr(r),d=ir();return(0,X.useEffect)(function(){if(r.open){var x=lr();return x}},[r.open]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(d,{}),(0,F.jsx)(ne.Z,L()(L()({width:a.width,transitionName:""},a.restProps),{},{closeIcon:null,title:a.title,okButtonProps:a.okButtonProps||{},destroyOnClose:a.destroyOnClose,className:a.className,children:a.content||a.children}))]})},St=["success","info","warning","error","confirm"];St.forEach(function(e){cr[e]=function(r){var a=sr(L()(L()({},r),{},{type:e})),d=lr();function x(){var h=ir();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(h,{}),a.content]})}return ne.Z.confirm(L()(L()(L()({},a),a.restProps),{},{content:(0,F.jsx)(x,{}),icon:null,afterClose:function(){var u;if(d(),(u=a.restProps)!==null&&u!==void 0&&u.afterClose){var T;(T=a.restProps).afterClose.apply(T,arguments)}}}))}});var Dt=cr,Tt=n(3658);function ur(){return ke.apply(this,arguments)}function ke(){return ke=qn()(Bn()().mark(function e(){var r,a=arguments;return Bn()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return r=a.length>0&&a[0]!==void 0?a[0]:100,x.abrupt("return",new Promise(function(h){setTimeout(h,r)}));case 2:case"end":return x.stop()}},e)})),ke.apply(this,arguments)}var Mt=n(76892),dr=n(4853);function fr(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.timeout,d=a===void 0?5e3:a,x=r.intervalTime,h=x===void 0?100:x,u=Date.now();return new Promise(function(T,R){var W=setInterval(function(){var M=e();M?(clearInterval(W),T(M)):Date.now()-u>d&&(R("timeout"),clearInterval(W))},h)})}function Nt(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return fr(function(){return document.querySelector(e)},r)}var mr=n(1783),Bt=["product","action","url","version","region","headers"],kt=function(){var e=qn()(Bn()().mark(function a(d,x,h){var u,T,R,W,M,E,H,rn,nn,on,xn,Q,_,jn,En;return Bn()().wrap(function(Tn){for(;;)switch(Tn.prev=Tn.next){case 0:return T=d.product,R=d.action,W=d.url,M=d.version,E=d.region,H=d.headers,rn=H===void 0?{}:H,nn=ie()(d,Bt),on="".concat(W||"/data/api.json","?action=").concat(R,"&product=").concat(T),M&&(on+="&version=".concat(M)),xn={sec_token:((u=window.ALIYUN_CONSOLE_CONFIG)===null||u===void 0?void 0:u.SEC_TOKEN)||"",region:E},x&&(xn.params=JSON.stringify(x)),h&&Object.assign(xn,h),Q=L()({method:"post",credentials:"same-origin",headers:L()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},rn)},nn),_=Object.assign({},Q),_.body=(0,mr.stringify)(xn),Tn.next=11,fetch(on,_);case 11:return jn=Tn.sent,Tn.next=14,jn.json();case 14:if(En=Tn.sent,!(En.code!=="200"&&!En.successResponse)){Tn.next=17;break}return Tn.abrupt("return",Promise.reject(En));case 17:return Tn.abrupt("return",En);case 18:case"end":return Tn.stop()}},a)}));function r(a,d,x){return e.apply(this,arguments)}return r}(),vr=kt;function Ot(e,r){return Oe.apply(this,arguments)}function Oe(){return Oe=qn()(Bn()().mark(function e(r,a){var d,x,h;return Bn()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:x=r==null||(d=r.getReader)===null||d===void 0?void 0:d.call(r),x||(console.log("[sse]error: Can Not Find Reader Object"),console.log("[sse]StreamInfo: ",r));case 2:return T.next=4,x.read();case 4:if((h=T.sent).done){T.next=8;break}try{a(h.value)}catch(R){console.log("[sse-error][onmessage] pleach check `onmessage` or `onJsonText`.",R)}T.next=2;break;case 8:case"end":return T.stop()}},e)})),Oe.apply(this,arguments)}function Zt(e){var r,a,d,x=!1;return function(u){r===void 0?(r=u,a=0,d=-1):r=Lt(r,u);for(var T=r.length,R=0;a<T;){x&&(r[a]===10&&(R=++a),x=!1);for(var W=-1;a<T&&W===-1;++a)switch(r[a]){case 58:d===-1&&(d=a-R);break;case 13:x=!0;case 10:W=a;break}if(W===-1)break;e(r.subarray(R,W),d),R=a,d=-1}R===T?r=void 0:R!==0&&(r=r.subarray(R),a-=R)}}function Ft(e,r,a){var d=gr(),x=new TextDecoder;return function(u,T){if(u.length===0)a==null||a(d),d=gr();else if(T>0){var R=x.decode(u.subarray(0,T)),W=T+(u[T+1]===32?2:1),M=x.decode(u.subarray(W));switch(R){case"data":d.data=d.data?"".concat(d.data,`
`).concat(M):M;break;case"event":d.event=M;break;case"id":e(d.id=M);break;case"retry":var E=parseInt(M,10);isNaN(E)||r(d.retry=E);break}}}}function Lt(e,r){var a=new Uint8Array(e.length+r.length);return a.set(e),a.set(r,e.length),a}function gr(){return{data:"",event:"",id:"",retry:void 0}}var It=["signal","headers","onopen","onmessage","onclose","onerror","fetch","autoRetryTime","timeout","debug"],Ze="text/event-stream",At=1e3,pr="last-event-id";function xr(e,r){return Fe.apply(this,arguments)}function Fe(){return Fe=qn()(Bn()().mark(function e(r,a){var d,x,h,u,T,R,W,M,E,H,rn,nn,on;return Bn()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return d=a.signal,x=a.headers,h=a.onopen,u=a.onmessage,T=a.onclose,R=a.onerror,W=a.fetch,M=a.autoRetryTime,E=a.timeout,H=a.debug,rn=H===void 0?!1:H,nn=ie()(a,It),on=0,Q.abrupt("return",new Promise(function(_,jn){var En=L()({},x);En.accept||(En.accept=Ze);var Wn=At,Tn=0,Hn=0,Un=new AbortController;function kn(){var Xn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(rn&&console.log("[sse] dispose"),window.clearTimeout(Tn),window.clearTimeout(Hn),!Xn){var On,Zn;(On=Un)===null||On===void 0||(Zn=On.abort)===null||Zn===void 0||Zn.call(On)}}function Nn(){window.clearTimeout(Hn),E!==0&&(Hn=window.setTimeout(function(){rn&&console.log("[sse] timeout"),jn(new Error("timeout")),R==null||R(new Error("timeout")),kn()},E||60*1e3))}d==null||d.addEventListener("abort",function(){kn(),_()});var Kn=W!=null?W:window.fetch,ee=h!=null?h:Rt;function Qn(){return Vn.apply(this,arguments)}function Vn(){return Vn=qn()(Bn()().mark(function Xn(){var On,Zn,Dn,Mn;return Bn()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.prev=0,Nn(),K.next=4,Kn(r,L()(L()({},nn),{},{headers:En,signal:(On=Un)===null||On===void 0?void 0:On.signal}));case 4:return Zn=K.sent,K.next=7,ee(Zn);case 7:if(Zn.body){K.next=11;break}return rn&&console.log("[sse]no body, delay 100ms"),K.next=11,ur(100);case 11:return rn&&console.log("[sse]response.body",Zn.body),K.next=14,Ot(Zn.body,Zt(Ft(function(tn){tn?En[pr]=tn:delete En[pr]},function(tn){Wn=tn},function(tn){Nn(),u==null||u(tn)})));case 14:Un=null,T==null||T(),kn(),_(),K.next=43;break;case 20:if(K.prev=20,K.t0=K.catch(0),K.t0&&console.error("[sse]err",K.t0),!(!(d!=null&&d.aborted)&&M&&on<M)){K.next=39;break}return K.prev=24,on+=1,Mn=(Dn=R==null?void 0:R(K.t0))!==null&&Dn!==void 0?Dn:Wn,window.clearTimeout(Tn),typeof Mn=="number"&&(rn&&console.log("[sse] retry "+on),Tn=window.setTimeout(Qn,Mn)),K.abrupt("return",Promise.resolve());case 32:K.prev=32,K.t1=K.catch(24),rn&&console.log("[sse] reject innerErr ",K.t1),kn(),jn(K.t1);case 37:K.next=43;break;case 39:rn&&console.log("[sse] reject finally"),kn(K.t0 instanceof Response||K.t0 instanceof DOMException&&K.t0.name==="AbortError"),R==null||R(K.t0),jn(K.t0);case 43:case"end":return K.stop()}},Xn,null,[[0,20],[24,32]])})),Vn.apply(this,arguments)}Qn()}));case 3:case"end":return Q.stop()}},e)})),Fe.apply(this,arguments)}function Rt(e){var r=e.headers.get("content-type");if(!(r!=null&&r.startsWith(Ze)))throw new Error("Expected content-type to be ".concat(Ze,", Actual: ").concat(r))}function Wt(e){return Le.apply(this,arguments)}function Le(){return Le=qn()(Bn()().mark(function e(r){var a,d,x,h,u,T,R;return Bn()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return a=r.action,d=r.body,x=r.product,h=r.version,u=r.region,T=r.params,R={action:a,product:x,region:u,url:"/tool/sse/get.json",version:h},M.abrupt("return",vr(R,T,{content:JSON.stringify(d)}));case 3:case"end":return M.stop()}},e)})),Le.apply(this,arguments)}function Ht(e,r,a,d){var x=r.onMessage,h=r.onClose,u=r.onError,T=r.timeout,R=e.body,W=e.uri,M=e.headers,E=e.query,H=e.path,rn=M["Content-Type"],nn="".concat(W.replace(/\/$/,"")).concat(H);E&&Object.keys(E).length&&(nn="".concat(nn,"?").concat((0,mr.stringify)(E)));try{d.value=!1,xr(nn,{method:"POST",body:rn==="application/x-www-form-urlencoded"?new URLSearchParams(JSON.parse(R)):R,signal:a.signal,timeout:T,headers:M,onopen:function(xn){return xn.status!==200?Promise.reject(xn):Promise.resolve()},onmessage:function(xn){try{var Q=xn.data,_=Q===void 0?"{}":Q,jn=JSON.parse(_);x==null||x(jn)}catch(En){u==null||u(En)}},onclose:function(){d.value=!0,h==null||h()},onerror:function(xn){d.value=!0,h==null||h(),!(xn instanceof DOMException&&xn.name==="AbortError")&&(u==null||u(xn))}})}catch(on){d.value=!0,u==null||u(on),h==null||h()}}function zt(e,r,a){return Ie.apply(this,arguments)}function Ie(){return Ie=qn()(Bn()().mark(function e(r,a,d){var x,h,u,T;return Bn()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return x=r.onClose,h=r.onError,W.prev=1,W.next=4,Wt(r);case 4:u=W.sent,T=u.data,Ht(T,r,a,d),W.next=13;break;case 9:W.prev=9,W.t0=W.catch(1),x==null||x(),h==null||h(W.t0);case 13:case"end":return W.stop()}},e,null,[[1,9]])})),Ie.apply(this,arguments)}function wt(e){return Ae.apply(this,arguments)}function Ae(){return Ae=qn()(Bn()().mark(function e(r){var a,d;return Bn()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a=new AbortController,d={value:!0},h.next=4,zt(r,a,d);case 4:return h.abrupt("return",{dispose:function(){d.value&&a.abort("\u53D6\u6D88\u8BF7\u6C42")}});case 5:case"end":return h.stop()}},e)})),Ae.apply(this,arguments)}var Ut=n(4287);function $t(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof e!="string")return a||console.warn(e,"is not valid json"),r?e:null;try{return JSON.parse(e)}catch(d){return a||console.warn(e,"is not valid json"),r?e:null}}function Kt(e){for(var r=new TextEncoder,a=r.encode(e),d="",x=0;x<a.length;x++)d+=String.fromCharCode(a[x]);var h=btoa(d);return h}function Qt(e){for(var r=atob(e),a=new Uint8Array(r.length),d=0;d<r.length;d++)a[d]=r.charCodeAt(d);var x=new TextDecoder("utf-8"),h=x.decode(a);return h}var hr=(0,B.Z)(l),Pr=(0,B.Z)(b,!0),Vt=(0,B.Z)(N),Gt=(0,B.Z)($,!0)},4853:function(dn,w,n){n.d(w,{JG:function(){return A},rb:function(){return S}});var b=n(26068),l=n.n(b),$=n(67825),N=n.n($),Z=n(75271),m=["maxWidth","maxHeight"];function I(){var B;return((B=window.g_config)===null||B===void 0?void 0:B.isIntl)||!1}var A=function(s){if(navigator.clipboard)navigator.clipboard.writeText(s);else{var v=document.createElement("textarea");document.body.appendChild(v),v.style.position="fixed",v.style.clip="rect(0 0 0 0)",v.style.top="10px",v.value=s,v.select(),document.execCommand("copy",!0),document.body.removeChild(v)}},S=function(s){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=v.maxWidth,P=v.maxHeight,p=N()(v,m);return l()({overlayInnerStyle:{maxWidth:o||326,maxHeight:P||150,overflowY:"auto",padding:"6px 12px"},title:s,arrow:!1},p)};function O(B){return React.isValidElement(B)}function D(B){var s=B||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(s)}var C=function(s){return s>=10?s:"0".concat(s)},y=function(s){if(s<60){var v=Math.ceil(s);return"0:".concat(C(v))}var o=Math.floor(s/60),P=Math.ceil(s%60);return"".concat(C(o),":").concat(C(P))}}}]);
