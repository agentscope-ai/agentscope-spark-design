"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[2324],{52783:function(xn,U,n){n.d(U,{Z:function(){return h}});var y=n(26068),u=n.n(y),V=n(5340),B=n(75271),H=n(53649),E=n.n(H),T=n(75469),R,N=(0,T.Z)(R||(R=E()([`

.`,"-anchor-wrapper .","-anchor .",`-anchor-link-title {
  color: var(--`,`-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.`,`-anchor-link {
  --`,`-anchor-link-padding-block: 0;
  --`,`-anchor-link-padding-inline-start: 0;
}
`])),function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix}),W=n(52676),I=(0,B.forwardRef)(function(x){var k=N();return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(k,{}),(0,W.jsx)(V.Z,u()({},x))]})}),h=I},44739:function(xn,U,n){n.d(U,{Z:function(){return P}});var y=n(51886),u=n(94376),V=n(32102),B=n(36891),H=n(4797),E=n(29171),T=n(73981),R=n(99670),N=n(75271),W=n(53649),I=n.n(W),h=n(75469),x,k=(0,h.Z)(x||(x=I()([`
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
`])),function(v){return v.sparkPrefix},function(v){return v.sparkPrefix},function(v){return v.sparkPrefix},function(v){return v.sparkPrefix},function(v){return v.antPrefix}),s=n(52676),p=function(t){var d=Math.floor(t/60),l=Math.floor(t%60);return"".concat(d.toString().padStart(2,"0"),":").concat(l.toString().padStart(2,"0"))},o=function(t){var d=t.className,l=t.isPlaying,M=t.onPlayPause,c=t.onFullscreen,Z=t.onProgressClick,g=t.enableVolume,z=g===void 0?!1:g,G=t.enableFullscreen,K=t.muted,nn=K===void 0?!0:K,q=t.onMute,$=k(),en=(0,y.getCommonConfig)(),cn=en.sparkPrefix,mn=(0,N.useMemo)(function(){return p(t.currentTime||0)},[t.currentTime]),sn=(0,N.useMemo)(function(){return p(t.duration||0)},[t.duration]),Tn=(0,N.useMemo)(function(){return Math.min((t.currentTime||0)/(t.duration||.01)*100,100)},[t.currentTime,t.duration]),un=function(hn){if(!(!Z||!t.duration)){var Pn=hn.currentTarget.getBoundingClientRect(),tn=hn.clientX-Pn.left,jn=Pn.width,dn=tn/jn,Y=dn*t.duration,J=Math.max(0,Math.min(Y,t.duration));Z(J)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)($,{}),(0,s.jsxs)("div",{className:"".concat(cn,"-media-player-controller ").concat(d||""),children:[(0,s.jsx)(u.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:l?(0,s.jsx)(B.Z,{}):(0,s.jsx)(H.Z,{}),onClick:M}),(0,s.jsx)(u.Z,{bordered:!1,size:"small",shape:"default",disabled:!z,icon:z&&nn?(0,s.jsx)(E.Z,{}):(0,s.jsx)(T.Z,{}),onClick:q}),(0,s.jsx)("span",{className:"".concat(cn,"-media-time-text"),children:mn}),(0,s.jsx)("div",{className:"".concat(cn,"-media-progress-container"),onClick:un,children:(0,s.jsx)(V.Z,{className:"".concat(cn,"-media-progress-bar"),percent:Tn,showInfo:!1})}),(0,s.jsx)("span",{className:"".concat(cn,"-media-time-text"),children:sn}),G&&(0,s.jsx)(u.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,s.jsx)(R.Z,{}),onClick:c})]})]})},P=o},42425:function(xn,U,n){n.d(U,{Z:function(){return d}});var y=n(26068),u=n.n(y),V=n(48305),B=n.n(V),H=n(67825),E=n.n(H),T=n(75271),R=n(82187),N=n.n(R),W=n(44739),I=n(56630),h=n(51886),x=n(53649),k=n.n(x),s=n(75469),p,o=(0,s.Z)(p||(p=k()([`
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
`])),function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix}),P=n(52676),v=["controls","className","style"],t=(0,T.forwardRef)(function(l,M){var c=l.controls,Z=l.className,g=l.style,z=E()(l,v),G=(0,h.getCommonConfig)(),K=G.sparkPrefix,nn=o(),q=(0,T.useState)(0),$=B()(q,2),en=$[0],cn=$[1],mn=(0,T.useState)(0),sn=B()(mn,2),Tn=sn[0],un=sn[1],O=(0,T.useState)(!1),hn=B()(O,2),Pn=hn[0],tn=hn[1],jn=(0,I.Z)(l,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!1}),dn=B()(jn,2),Y=dn[0],J=dn[1],fn=(0,T.useRef)(null),vn=function(Dn){fn.current=Dn,M&&(typeof M=="function"?M(Dn):M.current=Dn)};(0,T.useEffect)(function(){var Sn;return Pn&&(Sn=setInterval(function(){fn.current&&cn(fn.current.currentTime)},16)),function(){Sn&&clearInterval(Sn)}},[Pn]);var Cn=function(){fn.current&&un(fn.current.duration)},Nn=function(){fn.current&&(Pn?fn.current.pause():fn.current.play(),tn(!Pn))},pn=function(){tn(!0)},F=function(){tn(!1)},kn=function(){var Dn;tn(!1),cn(((Dn=fn.current)===null||Dn===void 0?void 0:Dn.duration)||0)},yn=function(Dn){fn.current&&(fn.current.currentTime=Dn,cn(Dn))};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(nn,{}),(0,P.jsxs)("div",{className:N()("".concat(K,"-audio-container"),Z),style:g,children:[(0,P.jsx)("audio",u()(u()({ref:vn},z),{},{muted:Y,className:"".concat(K,"-audio-element"),onLoadedMetadata:Cn,onPlay:pn,onPause:F,onEnded:kn})),(0,P.jsx)(W.Z,{className:"".concat(K,"-audio-controller-wrapper"),isPlaying:Pn,currentTime:en,duration:Tn,enableVolume:!0,enableFullscreen:!1,muted:Y,onMute:function(){return J(!Y)},onPlayPause:Nn,onProgressClick:yn})]})]})}),d=t},32893:function(xn,U,n){n.d(U,{Z:function(){return o}});var y=n(26068),u=n.n(y),V=n(48305),B=n.n(V),H=n(67825),E=n.n(H),T=n(75605),R=n(75271),N=n(53649),W=n.n(N),I=n(75469),h,x=(0,I.Z)(h||(h=W()([`
.`,`-avatar {
  cursor: default;
}
`])),function(P){return P.antPrefix}),k=n(52676),s=["children"],p=(0,R.forwardRef)(function(P,v){var t=x(),d=P.children,l=E()(P,s),M=(0,R.useState)(P.children),c=B()(M,2),Z=c[0],g=c[1];return(0,R.useEffect)(function(){if(typeof d=="string"){g(d.slice(0,1));return}g(d)},[d]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(t,{}),(0,k.jsx)(T.Z,u()(u()({ref:v},l),{},{children:Z}))]})}),o=p},61670:function(xn,U,n){n.d(U,{Z:function(){return v}});var y=n(26068),u=n.n(y),V=n(67825),B=n.n(V),H=n(45893),E=n(75605),T=n(42478),R=n(40500),N=n(75271),W=n(51886),I=n(53649),h=n.n(I),x=n(75469),k,s=(0,x.Z)(k||(k=h()([`
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
`])),function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix}),p=n(52676),o=["items"],P=function(d){var l=d.items,M=l===void 0?[]:l,c=B()(d,o),Z=(0,W.getCommonConfig)(),g=Z.sparkPrefix,z=s(),G=N.useMemo(function(){return M.map(function(K){var nn=K.title,q=[];return K.iconUrl&&q.push((0,p.jsx)(E.Z,{size:20,src:K.iconUrl},"avatar")),K.dropdown?q.push((0,p.jsxs)("span",{className:"".concat(g,"-breadcrumb-dropdown-title"),children:[K.title,(0,p.jsx)(H.Z,{size:16})]},"title")):q.push((0,p.jsx)("span",{children:K.title},"title")),K.dropdown?nn=(0,p.jsx)(T.Z,{menu:{items:K.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(g,"-breadcrumb-dropdown"),children:(0,p.jsx)("span",{children:q})}):(K.iconUrl||q.length>1)&&(nn=(0,p.jsx)("span",{className:"".concat(g,"-breadcrumb-item-content"),children:q})),u()(u()({},K),{},{title:nn})})},[M]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(z,{}),(0,p.jsx)(R.Z,u()(u()({},c),{},{items:G,className:"".concat(g,"-breadcrumb ").concat(c.className||"")}))]})},v=P},43529:function(xn,U,n){n.d(U,{Z:function(){return p}});var y=n(26068),u=n.n(y),V=n(67825),B=n.n(V),H=n(51886),E=n(96971),T=n(82187),R=n.n(T),N=n(53649),W=n.n(N),I=n(75469),h,x=(0,I.Z)(h||(h=W()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix}),k=n(52676),s=["title","info","children","className"],p=function(o){var P=o.title,v=o.info,t=o.children,d=o.className,l=B()(o,s),M=x(),c=(0,H.getCommonConfig)(),Z=c.sparkPrefix;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(M,{}),(0,k.jsx)(E.Z,u()(u()({className:R()("".concat(Z,"-card"),d)},l),{},{title:null,children:(0,k.jsxs)("div",{className:"".concat(Z,"-card-wrapper"),children:[P&&(0,k.jsx)("div",{className:"".concat(Z,"-title"),children:P}),v&&(0,k.jsx)("div",{className:"".concat(Z,"-info"),children:v}),t&&(0,k.jsx)("div",{className:"".concat(Z,"-content"),children:t})]})}))]})}},75517:function(xn,U,n){n.d(U,{Z:function(){return p}});var y=n(26068),u=n.n(y),V=n(67825),B=n.n(V),H=n(80733),E=n(75271),T=n(51886),R=n(53649),N=n.n(R),W=n(75469),I,h=(0,W.Z)(I||(I=N()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),x=n(52676),k=["description","descriptionClassName","descriptionStyle","children"],s=function(P){var v=P.description,t=P.descriptionClassName,d=P.descriptionStyle,l=P.children,M=B()(P,k),c=(0,T.getCommonConfig)(),Z=c.antPrefix,g=c.sparkPrefix,z=h(),G={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(Z,"-color-text-tertiary)")};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(z,{}),(0,x.jsxs)("div",{className:"".concat(g,"-checkbox"),children:[(0,x.jsx)(H.Z,u()(u()({},M),{},{children:l})),v&&(0,x.jsx)("div",{className:t,style:u()(u()({},G),d),children:v})]})]})};s.Group=H.Z.Group;var p=s},83665:function(xn,U,n){n.d(U,{ZP:function(){return Tn},xO:function(){return en}});var y=n(26068),u=n.n(y),V=n(15558),B=n.n(V),H=n(51886),E=n(67464),T=n(39707),R=n(72717),N=n(20660),W=n(84669),I=n(74209),h=n(81246),x=n(44949),k=n(99897),s=n(19487),p=n(70667),o=n(10432),P=n(24365),v=n(47107),t=n(56664),d=n(15222),l=n(80047),M=n(82187),c=n.n(M),Z=n(28640),g=n(75271),z=n(53649),G=n.n(z),K=n(75469),nn,q=(0,K.Z)(nn||(nn=G()([`
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
`])),function(un){return un.sparkPrefix},function(un){return un.antPrefix},function(un){return un.antPrefix},function(un){return un.antPrefix},function(un){return un.antPrefix},function(un){return un.antPrefix},function(un){return un.antPrefix},function(un){return un.antPrefix},function(un){return un.antPrefix},function(un){return un.antPrefix},function(un){return un.antPrefix}),$=n(52676),en={javascript:[(0,x.eJ)()],jsx:[(0,x.eJ)()],python:[(0,o.Vs)()],json:[(0,k.AV)()],java:[(0,h.C)()],yaml:[(0,P.rV)()],php:[(0,p.h)()],go:[(0,W.go)()],csharp:[(0,R.N)()],css:[(0,N.iv)()],html:[(0,I.dy)()],curl:[],markdown:[(0,s.JH)()]},cn={javascript:[(0,v.Q2)()],json:[(0,v.Q2)(),(0,v.ir)((0,k.ap)())]},mn=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"{}",hn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,Pn=O;try{Pn=JSON.stringify(JSON.parse(O),null,hn)}catch(tn){}return Pn},sn=function(O){var hn,Pn=(0,H.getCommonConfig)(),tn=g.useContext(E.ZP.ConfigContext),jn=((hn=tn.theme)===null||hn===void 0?void 0:hn.algorithm)===l.Z.darkAlgorithm,dn=Pn.sparkPrefix,Y=q(),J=(0,g.useMemo)(function(){return O.theme===void 0?jn?t.Pc:t.Zp:O.theme==="dark"?t.Pc:t.Zp},[jn,O.theme]),fn=typeof O.language=="string"?[].concat(B()(en[O.language]||[]),B()(O.value&&O.language in cn?cn[O.language]:[])):O.language.reduce(function(Nn,pn){return[].concat(B()(Nn),[en[pn]])},[]),vn=(0,$.jsx)("div",{className:c()("".concat(dn,"-code-block"),O.className),children:(0,$.jsx)(d.ZP,u()({extensions:fn,value:O.language==="json"?mn(O.value):O.value,theme:J},(0,Z.Z)(O,["language","theme","extensions","value"])))});if(O.theme!==void 0){var Cn=O.theme==="dark"?T.bailianDarkTheme:T.bailianTheme;return(0,$.jsx)($.Fragment,{children:(0,$.jsxs)(E.ZP,u()(u()({},Cn),{},{children:[(0,$.jsx)(Y,{}),vn]}))})}return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Y,{}),vn]})},Tn=sn},30807:function(xn,U,n){n.d(U,{Z:function(){return I}});var y=n(26068),u=n.n(y),V=n(9483),B=n(53649),H=n.n(B),E=n(75469),T,R=(0,E.Z)(T||(T=H()([`
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
`])),function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix}),N=n(52676),W=function(x){var k=R();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(k,{}),(0,N.jsx)(V.Z,u()({},x))]})},I=W},28932:function(xn,U,n){n.d(U,{Z:function(){return t}});var y=n(26068),u=n.n(y),V=n(82092),B=n.n(V),H=n(48305),E=n.n(H),T=n(51886),R=n(45893),N=n(83516),W=n(82187),I=n.n(W),h=n(75271),x=n(53649),k=n.n(x),s=n(75469),p,o=(0,s.Z)(p||(p=k()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix}),P=n(52676),v=function(l){var M,c,Z,g,z,G,K=l.collapsedHeight,nn=l.expandedHeight,q=l.title,$=q===void 0?"":q,en=l.expandOnPanelClick,cn=l.extra,mn=l.children,sn=l.defaultExpanded,Tn=(0,h.useState)(sn),un=E()(Tn,2),O=un[0],hn=un[1],Pn=(0,h.useState)(!0),tn=E()(Pn,2),jn=tn[0],dn=tn[1],Y=(0,h.useState)(K),J=E()(Y,2),fn=J[0],vn=J[1],Cn=(0,h.useRef)(null),Nn=(0,T.getCommonConfig)(),pn=Nn.sparkPrefix,F=Nn.antPrefix,kn=o();(0,h.useEffect)(function(){Cn.current&&vn(O&&nn?nn:O?Cn.current.scrollHeight:K)},[O,K,nn,mn]);var yn=function(Rn){Rn.stopPropagation(),Rn.preventDefault(),hn(function(Jn){return!Jn})},Sn=function(Rn){Rn.stopPropagation(),Rn.preventDefault(),O||hn(!0)},Dn=function(){dn(!0)},zn=function(){dn(!0)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(kn,{}),(0,P.jsxs)("div",{className:I()("".concat(pn,"-collapse-panel"),{collapsible:!O&&en},(M=l.classNames)===null||M===void 0?void 0:M.wrapper),style:(c=l.styles)===null||c===void 0?void 0:c.wrapper,onClick:en?Sn:void 0,onMouseEnter:en?Dn:void 0,onMouseLeave:en?zn:void 0,children:[(0,P.jsxs)("div",{className:I()("".concat(pn,"-collapse-panel-header"),(Z=l.classNames)===null||Z===void 0?void 0:Z.header),style:(g=l.styles)===null||g===void 0?void 0:g.header,onClick:yn,children:[(0,P.jsxs)("span",{className:"".concat(pn,"-collapse-panel-title"),children:[$,(0,P.jsxs)("div",{className:"".concat(pn,"-collapse-panel-icon-wrapper"),children:[!O&&jn&&en&&(0,P.jsx)(R.Z,{style:{fontSize:"18px"}}),O&&jn&&en&&(0,P.jsx)(N.Z,{style:{fontSize:"18px"}})]})]}),cn&&(0,P.jsx)("div",{className:"".concat(pn,"-collapse-panel-extra"),onClick:function(Rn){Rn.stopPropagation(),Rn.preventDefault()},children:cn})]}),(0,P.jsxs)("div",{className:I()("".concat(pn,"-collapse-panel-content"),B()({},"".concat(pn,"-collapse-panel-expanded"),O),(z=l.classNames)===null||z===void 0?void 0:z.content),style:u()({height:fn},(G=l.styles)===null||G===void 0?void 0:G.content),children:[(0,P.jsx)("div",{ref:Cn,className:"".concat("".concat(pn,"-collapse-panel-contentWrapper")," ",O&&nn?"scrollable":""),children:mn}),!O&&(0,P.jsx)("div",{className:"".concat(pn,"-collapse-panel-mask")})]})]})]})},t=v},78618:function(xn,U,n){n.d(U,{Z:function(){return M}});var y=n(26068),u=n.n(y),V=n(67825),B=n.n(V),H=n(51886),E=n(66508),T=n(80047),R=n(45372),N=n(22940),W=n(82187),I=n.n(W),h=n(75271),x=n(53649),k=n.n(x),s=n(75469),p,o=(0,s.Z)(p||(p=k()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),P=n(52676),v=["className","popupClassName"],t=["className","popupClassName"],d=function(Z){var g=Z.className,z=Z.popupClassName,G=B()(Z,v),K=T.Z.useToken(),nn=K.token,q=(0,H.getCommonConfig)(),$=q.sparkPrefix,en=o();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(en,{}),(0,P.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:nn.colorPrimary,paddingInline:8}}},children:(0,P.jsx)(N.default,u()({suffixIcon:(0,P.jsx)(E.Z,{style:{fontSize:"20px"}}),className:I()("".concat($,"-picker"),g),popupClassName:I()("".concat($,"-picker-dropdown"),z)},G))})]})},l=function(Z){var g=Z.className,z=Z.popupClassName,G=B()(Z,t),K=T.Z.useToken(),nn=K.token,q=(0,H.getCommonConfig)(),$=q.sparkPrefix,en=o();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(en,{}),(0,P.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:nn.colorPrimary,paddingInline:8}}},children:(0,P.jsx)(N.default.RangePicker,u()({suffixIcon:(0,P.jsx)(E.Z,{style:{fontSize:"20px"}}),className:I()("".concat($,"-picker"),g),popupClassName:I()("".concat($,"-picker-dropdown"),z),popupStyle:{padding:0}},G))})]})};d.RangePicker=l;var M=d},66894:function(xn,U,n){n.d(U,{Z:function(){return t}});var y=n(82092),u=n.n(y),V=n(26068),B=n.n(V),H=n(67825),E=n.n(H),T=n(51886),R=n(80047),N=n(96527),W=n(82187),I=n.n(W),h=n(53649),x=n.n(h),k=n(75469),s,p=(0,k.Z)(s||(s=x()([`
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
`])),function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),o=n(52676),P=["className","layout","colon","style"],v=function(l){var M,c,Z=p(),g=l.className,z=l.layout,G=l.colon,K=G===void 0?!1:G,nn=l.style,q=E()(l,P),$=(0,T.getCommonConfig)(),en=$.antPrefix,cn=R.Z.useToken(),mn=cn.token;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Z,{}),(0,o.jsx)(N.Z,B()({className:I()(g,z==="vertical"&&"".concat(en,"-descriptions-vertical")),layout:z,colon:K,style:B()(u()(u()({},"--".concat(en,"-descriptions-vertical-label-padding-bottom"),"".concat((M=mn.Descriptions.verticalLabelPaddingBottom)!==null&&M!==void 0?M:4,"px")),"--".concat(en,"-descriptions-vertical-content-padding-bottom"),"".concat((c=mn.Descriptions.verticalContentPaddingBottom)!==null&&c!==void 0?c:24,"px")),nn)},q))]})},t=v},64925:function(xn,U,n){n.d(U,{Z:function(){return k}});var y=n(26068),u=n.n(y),V=n(51886),B=n(71649),H=n(42478),E=n(75271),T=n(53649),R=n.n(T),N=n(75469),W,I=(0,N.Z)(W||(W=R()([`
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
`])),function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),h=n(52676),x=function(p){var o,P,v=(0,V.getCommonConfig)(),t=v.antPrefix,d=(0,E.useMemo)(function(){var M;if(!((M=p.menu)!==null&&M!==void 0&&M.selectable)||!p.menu){var c;return((c=p.menu)===null||c===void 0?void 0:c.items)||[]}return p.menu.items.map(function(Z){var g={},z=Z.label;return z&&(g.label=(0,h.jsxs)("div",{className:"".concat(t,"-dropdown-check-wrapper"),children:[z,(0,h.jsx)("span",{className:"".concat(t,"-dropdown-check-icon"),children:(0,h.jsx)(B.Z,{})})]})),u()(u()({},Z),g)})},[(o=p.menu)===null||o===void 0?void 0:o.items,(P=p.menu)===null||P===void 0?void 0:P.selectable]),l=I();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{}),(0,h.jsx)(H.Z,u()(u()({},p),{},{menu:u()(u()({},p.menu),{},{items:d}),overlayStyle:u()({},p.overlayStyle)}))]})},k=x},38348:function(xn,U,n){n.d(U,{Z:function(){return d}});var y=n(26068),u=n.n(y),V=n(51886),B=n(65122),H=n(75271),E=n(75041),T=n(53649),R=n.n(T),N=n(75469),W,I=(0,N.Z)(W||(W=R()([`
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
`])),function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix}),h=n(48305),x=n.n(h),k=n(88045),s=n(52676),p=document.querySelector("#empty-svg-container");function o(l){var M=(0,k.ZP)(),c=x()(M,5),Z=c[4],g=l.svgUrl,z=l.tokenMap,G=z===void 0?{}:z,K=l.className,nn=l.size,q=g.includes(".svg"),$=(0,H.useState)(""),en=x()($,2),cn=en[0],mn=en[1];return(0,H.useEffect)(function(){if(!p){var sn=document.createElement("div");sn.innerHTML="<svg></svg>",p=sn.querySelector("svg"),p.id="empty-svg-container",p.setAttribute("aria-hidden","true"),p.style.position="absolute",p.style.width="0",p.style.height="0",p.style.overflow="hidden",document.body.insertBefore(p,document.body.firstChild)}},[]),(0,H.useEffect)(function(){p&&Z!==null&&Z!==void 0&&Z.key&&(p.classList.forEach(function(sn){return p.classList.remove(sn)}),p.classList.add(Z.key))},[Z==null?void 0:Z.key]),(0,H.useEffect)(function(){if(q){var sn=btoa(g),Tn='<svg><use xlink:href="#'.concat(sn,'"></use></svg>');if(mn(Tn),!document.getElementById(sn)){var un='<symbol id="'.concat(sn,'"></symbol>');p.innerHTML=p.innerHTML+un,fetch(g).then(function(O){return O.text()}).then(function(O){var hn=O;Object.keys(G).forEach(function(Y){hn=hn.replace(new RegExp(Y,"g"),G[Y])});var Pn=hn.match(/viewBox="([^"]*)"/),tn=Pn?Pn[1]:"",jn=document.getElementById(sn),dn=hn.replace(/<svg[^>]*>/,"");dn=dn.replace(/<\/svg>/,""),tn&&jn.setAttribute("viewBox",tn),jn.innerHTML=dn})}}},[g]),q?(0,s.jsx)("div",{className:K,dangerouslySetInnerHTML:{__html:cn},style:{width:nn,height:nn}}):(0,s.jsx)("img",{src:g,className:K,style:{width:nn,height:nn}})}var P={url:"https://gw.alicdn.com/imgextra/i3/O1CN01r3f3Si24iFTRz9Bho_!!6000000007424-55-tps-320-320.svg",tokenMap:{"#CDD0DC":"color-border"}},v={noData:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01mWN5tE1MAxb2z7LwA_!!6000000001395-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#BCB5FF":"color-primary-border-hover","#FFFFFF":"color-bg-base","#615CED":"color-primary","#1ACDD0DC":"color-fill-quaternary","#CDD0DC":"color-border"}},networkError:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01su6GHG1RupL5K5TOQ_!!6000000002172-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},404:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01GE0jXZ1xpqjvMjCZh_!!6000000006493-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#26CDD0DC":"color-fill-tertiary","#CDD0DC":"color-border","#F3F0FF":"color-primary-bg","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},arrears:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01xN8uYv1Dz2MLvrFAF_!!6000000000286-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#F3F0FF":"color-primary-bg","#615CED":"color-primary"}},desktopOnly:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01ZzNku41rshVhRVh9x_!!6000000005687-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},noAudio:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01fTQ6vi1GXxnIrmizf_!!6000000000633-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#615CED":"color-primary","#E6E8EE":"color-border-secondary"}},noImage:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01zQAH9A1oJUD9XDtmi_!!6000000005204-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noVideo:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01kqss5i1JuoOrJ8fNV_!!6000000001089-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noAccess:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01RwpRz91oGHREFlmdY_!!6000000005197-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}},error:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01TlQR4c1L3nn4DkG2z_!!6000000001244-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noModel:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01BSPmLi1iaXGByjbne_!!6000000004429-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#5CCDD0DC":"color-fill","#615CED":"color-primary"}},noApp:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01stSIP31fzmEtpppWc_!!6000000004078-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#33CDD0DC":"color-fill-secondary","#615CED":"color-primary"}},success:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01sGzZ5B1Bx5RQAjUe5_!!6000000000011-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#5BB98B":"color-success","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},failed:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01Fd1Gmx1QNYxQ8hj0H_!!6000000001964-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FF7875":"color-error-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},inProgress:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01w2RXic1LADKqVxH56_!!6000000001258-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#9189FA":"color-primary-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},stayTuned:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01W2Kbyc26dmqmatyoB_!!6000000007685-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}}},t=function(M){var c=M.imageStyle,Z=M.title,g=M.description,z=g===void 0?"No Data":g,G=M.children,K=M.texture,nn=K===void 0?!0:K,q=M.size,$=q===void 0?320:q,en=M.autoFit,cn=en===void 0?!0:en,mn=M.okText,sn=M.okType,Tn=sn===void 0?"primary":sn,un=M.okButtonProps,O=M.onOk,hn=M.type||"noData",Pn=(0,V.getCommonConfig)(),tn=Pn.sparkPrefix,jn=Pn.isDarkMode,dn=Pn.antPrefix,Y=M.image||v[hn].url,J=(0,H.useMemo)(function(){var pn,F=u()({},(pn=v[hn])===null||pn===void 0?void 0:pn.tokenMap);return F&&Object.keys(F).forEach(function(kn){F[kn]="var(--".concat(dn,"-").concat(F[kn],")")}),F},[hn]),fn=(0,H.useMemo)(function(){var pn=u()({},P.tokenMap);return Object.keys(pn).forEach(function(F){pn[F]="var(--".concat(dn,"-").concat(pn[F],")")}),pn},[jn]),vn=I(),Cn=typeof $=="string"?parseFloat($.replace(/px/i,"")):$!=null?$:0,Nn=cn?{maxWidth:"100%",aspectRatio:"1 / 1",width:$,height:"auto"}:{width:$,height:$};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(vn,{}),(0,s.jsxs)("div",{className:"".concat(tn,"-empty ").concat(M.className||""),style:u()(u()({},Nn),c),children:[nn&&(0,s.jsx)(o,{size:cn?"100%":$,svgUrl:P.url,tokenMap:fn,className:"".concat(tn,"-empty-texture")}),(0,s.jsx)(o,{size:cn?"100%":$,svgUrl:Y,tokenMap:J,className:"".concat(tn,"-empty-image")}),(0,s.jsxs)(B.Z,{vertical:!0,align:"center",style:{marginTop:"52.5%"},children:[Z&&(0,s.jsx)("div",{className:"".concat(tn,"-empty-title"),style:{marginBottom:z?.025*Cn:0},children:Z}),z&&(0,s.jsx)("div",{className:"".concat(tn,"-empty-description"),children:z}),!!mn&&(0,s.jsx)("div",{style:{marginTop:.05*Cn},children:(0,s.jsx)(E.Z,u()(u()({type:Tn,onClick:O},un),{},{children:mn}))}),!!G&&(0,s.jsx)("div",{style:{marginTop:.05*Cn},children:G})]})]})]})},d=t},86950:function(xn,U,n){n.d(U,{Z:function(){return Z}});var y=n(31759),u=n.n(y),V=n(67825),B=n.n(V),H=n(26068),E=n.n(H),T=n(51886),R=n(62910),N=n(94592),W=n(71416),I=n(82187),h=n.n(I),x=n(75271),k=n(53649),s=n.n(k),p=n(75469),o,P=(0,p.Z)(o||(o=s()([`
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
`])),function(g){return g.sparkPrefix},function(g){return g.sparkPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.sparkPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),v=n(52676),t=["tooltip"],d=(0,x.forwardRef)(function(g,z){var G=g.labelMarginRight,K=G===void 0?void 0:G,nn=(0,x.useRef)(null),q=(0,T.getCommonConfig)(),$=q.sparkPrefix,en=P();return(0,x.useImperativeHandle)(z,function(){return nn.current}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(en,{}),(0,v.jsx)(N.Z,E()(E()({},g),{},{className:h()(g.className,"".concat($,"-form"),K==="small"&&"".concat($,"-form-label-margin-small")),ref:nn,requiredMark:function(mn,sn){return(0,v.jsxs)(v.Fragment,{children:[mn,sn.required&&(0,v.jsx)("span",{className:"".concat($,"-required-mark"),children:"*"})]})}}))]})}),l=function(z){var G=z.tooltip,K=B()(z,t),nn=(0,v.jsx)(R.Z,{});function q(){if(G){var $=u()(G)==="object"&&!x.isValidElement(G)?E()(E()({},G),{},{icon:G.icon||nn}):{title:G,icon:nn};return $}}return(0,v.jsx)(N.Z.Item,E()(E()({},K),{},{tooltip:q(),labelCol:z.labelCol||(z.layout==="vertical"?{flex:"unset"}:void 0)}))},M=l;M.useStatus=W.Z.useStatus;var c=d;c.Item=M,c.List=N.Z.List,c.ErrorList=N.Z.ErrorList,c.Provider=N.Z.Provider,c.useForm=N.Z.useForm,c.useFormInstance=N.Z.useFormInstance,c.useWatch=N.Z.useWatch;var Z=c},78899:function(xn,U,n){n.d(U,{Z:function(){return p}});var y=n(26068),u=n.n(y),V=n(25811),B=n(51886),H=n(20695),E=n(17191),T=n(75271),R=n(53649),N=n.n(R),W=n(75469),I,h=(0,W.Z)(I||(I=N()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),x=n(52676),k=function(P){var v=h(),t=(0,B.getCommonConfig)(),d=t.antPrefix,l=(0,T.useMemo)(function(){var M={transitionName:""},c=P.preview;return c===!1?!1:c===!0?M:u()(u()({mask:(0,x.jsxs)("div",{className:"".concat(d,"-image-mask-info"),children:[(0,x.jsx)(H.Z,{className:"".concat(d,"-image-mask-info-icon")}),(0,x.jsx)("span",{className:"".concat(d,"-image-mask-info-text"),children:V.Z.get({id:"components.commonComponents.Image.Preview",dm:"\u9884\u89C8"})})]})},c),M)},[P.preview]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v,{}),(0,x.jsx)(E.Z,u()({preview:l},P))]})},s=k;s.PreviewGroup=E.Z.PreviewGroup;var p=s},29978:function(xn,U,n){n.d(U,{Z:function(){return d}});var y=n(26068),u=n.n(y),V=n(82092),B=n.n(V),H=n(67825),E=n.n(H),T=n(51886),R=n(50239),N=n(82187),W=n.n(N),I=n(75271),h=n(53649),x=n.n(h),k=n(75469),s,p=(0,k.Z)(s||(s=x()([`
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
`])),function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix}),o=n(52676),P=["shape"],v=I.forwardRef(function(l,M){var c=l.shape,Z=c===void 0?"default":c,g=E()(l,P),z=(0,T.getCommonConfig)(),G=z.antPrefix,K=p();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(K,{}),(0,o.jsx)(R.Z,u()(u()({},g),{},{className:W()(l.className,B()({},"".concat(G,"-input-round"),Z==="round")),ref:M}))]})}),t=I.forwardRef(function(l,M){var c=(0,T.getCommonConfig)(),Z=c.antPrefix,g=p();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,{}),(0,o.jsx)(R.Z.TextArea,u()(u()({},l),{},{className:W()("".concat(Z,"-text-area"),l.className),ref:M}))]})});Object.assign(v,{TextArea:t,Search:R.Z.Search,Password:R.Z.Password,OTP:R.Z.OTP});var d=v},13428:function(xn,U,n){n.d(U,{Z:function(){return t}});var y=n(26068),u=n.n(y),V=n(82092),B=n.n(V),H=n(67825),E=n.n(H),T=n(51886),R=n(6002),N=n(84674),W=n(82187),I=n.n(W),h=n(53649),x=n.n(h),k=n(75469),s,p=(0,k.Z)(s||(s=x()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),o=n(52676),P=["showDivider","closable"],v=function(l){var M=p(),c=(0,T.getCommonConfig)(),Z=c.sparkPrefix,g=l.showDivider,z=g===void 0?!0:g,G=l.closable,K=G===void 0?!0:G,nn=E()(l,P),q=function(mn){return l.info?(0,o.jsxs)("div",{className:"".concat(Z,"-modal-footer-wrapper"),children:[(0,o.jsx)("span",{className:"".concat(Z,"-modal-footer-info"),children:l.info}),(0,o.jsx)("div",{className:"".concat(Z,"-modal-footer-origin-node"),children:mn})]}):mn},$=K?l.closeIcon||(0,o.jsx)(R.Z,{className:"".concat(Z,"-modal-title-close"),onClick:function(mn){var sn;(sn=l.onCancel)===null||sn===void 0||sn.call(l,mn)}}):null,en=l.footer===void 0?q:l.footer;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(M,{}),(0,o.jsx)(N.Z,u()(u()({},nn),{},{closeIcon:null,title:(0,o.jsxs)("div",{className:"".concat(Z,"-modal-title-wrapper"),children:[(0,o.jsx)("div",{className:"".concat(Z,"-modal-title"),children:l.title}),$]}),wrapClassName:I()("".concat(Z,"-modal"),B()({},"".concat(Z,"-show-divider"),z),l.wrapClassName,"animate-in"),footer:en,transitionName:""}))]})};v.useModal=N.Z.useModal,v.success=N.Z.success,v.error=N.Z.error,v.warning=N.Z.warning,v.info=N.Z.info,v.confirm=N.Z.confirm,v.SMALL_WIDTH=640,v.MEDIUM_WIDTH=800,v.LARGE_WIDTH=960;var t=v},16945:function(xn,U,n){var y=n(48305),u=n.n(y),V=n(26068),B=n.n(V),H=n(51886),E=n(1191),T=n(31695),R=n(69898),N=n(96626),W=n(50493),I=n(52676),h=["success","warning","error","info"];function x(s,p){if(s==="success")return(0,I.jsx)(E.Z,{style:{color:"var(--".concat(p,"-color-success)"),fontSize:24}});if(s==="warning")return(0,I.jsx)(T.Z,{style:{color:"var(--".concat(p,"-color-warning)"),fontSize:24}});if(s==="info")return(0,I.jsx)(R.Z,{style:{color:"var(--".concat(p,"-color-info)"),fontSize:24}});if(s==="error")return(0,I.jsx)(N.Z,{style:{color:"var(--".concat(p,"-color-error)"),fontSize:24}})}var k={};k.destroy=W.ZP.destroy,k.open=function(s){var p=(0,H.getCommonConfig)(),o=p.sparkPrefix,P="".concat(o,"-notification");s.className&&(P+=" ".concat(s.className)),W.ZP.open(B()(B()({},s),{},{className:P}))},h.forEach(function(s){k[s]=function(p){var o=(0,H.getCommonConfig)(),P=o.sparkPrefix,v=o.antPrefix,t="".concat(P,"-notification");p.className&&(t+=" ".concat(p.className)),W.ZP[s](B()(B()({},p),{},{className:t,icon:x(s,v)}))}}),k.useNotification=function(s){var p=(0,H.getCommonConfig)(),o=p.sparkPrefix,P=p.antPrefix,v="".concat(o,"-notification"),t=W.ZP.useNotification(s),d=u()(t,2),l=d[0],M=d[1],c={};return h.forEach(function(Z){c[Z]=function(g){return l[Z](B()(B()({},g),{},{className:v,icon:x(Z,P)}))}}),c.open=function(Z){W.ZP.open(B()(B()({},Z),{},{className:v}))},c.destroy=l.destroy,[c,M]},U.Z=k},42480:function(xn,U,n){n.d(U,{X:function(){return H}});var y=n(53649),u=n.n(y),V=n(75469),B,H=(0,V.Z)(B||(B=u()([`
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
`])),function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix})},22084:function(xn,U,n){var y=n(26068),u=n.n(y),V=n(31759),B=n.n(V),H=n(67825),E=n.n(H),T=n(51886),R=n(25811),N=n(74455),W=n(16979),I=n(34232),h=n(65122),x=n(94587),k=n(82187),s=n.n(k),p=n(42480),o=n(52676),P=["hideSwitchButton","className"],v=function(){var d=R.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"}),l=R.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"});return{options:[{label:"10 ".concat(d," / ").concat(l),value:10},{label:"20 ".concat(d," / ").concat(l),value:20},{label:"50 ".concat(d," / ").concat(l),value:50},{label:"100 ".concat(d," / ").concat(l),value:100}]}};U.Z=function(t){var d=t.hideSwitchButton,l=d===void 0?!1:d,M=t.className,c=E()(t,P),Z=(0,T.getCommonConfig)(),g=Z.sparkPrefix,z=(0,p.X)(),G=function(){var $=function(cn,mn,sn){return mn==="jump-prev"||mn==="jump-next"?(0,o.jsx)(N.Z,{className:"".concat(g,"-jump-next-icon")}):l||t.itemRender?sn:mn==="prev"?(0,o.jsx)("a",{children:(0,o.jsxs)(h.Z,{gap:8,children:[(0,o.jsx)(W.Z,{})," ",(0,o.jsx)("span",{children:R.Z.get({id:"components.commonComponents.Pagination.PreviousPage",dm:"\u4E0A\u4E00\u9875"})})]})}):mn==="next"?(0,o.jsx)("a",{children:(0,o.jsxs)(h.Z,{gap:8,children:[(0,o.jsx)("span",{children:R.Z.get({id:"components.commonComponents.Pagination.NextPage",dm:"\u4E0B\u4E00\u9875"})})," ",(0,o.jsx)(I.Z,{})]})}):sn};return $},K;c.showSizeChanger!==null&&c.showSizeChanger!==void 0?K=c.showSizeChanger:K=c.total&&c.total>50;var nn=function(){return t.showSizeChanger===!0?v():t.showSizeChanger===!1?!1:B()(t.showSizeChanger)==="object"&&t.showSizeChanger?t.showSizeChanger:c.total&&c.total>50?v():!1};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(z,{}),(0,o.jsx)(x.Z,u()(u()({itemRender:G()},c),{},{showSizeChanger:nn(),className:s()("".concat(g,"-pagination"),M)}))]})}},93019:function(xn,U,n){var y=n(26068),u=n.n(y),V=n(67825),B=n.n(V),H=n(51886),E=n(88602),T=n(62910),R=n(99090),N=n(58911),W=n(16746),I=n(75271),h=n(52676),x=["icon","type","okButtonProps"],k=I.forwardRef(function(s,p){var o=s.icon,P=s.type,v=P===void 0?"confirm":P,t=s.okButtonProps,d=B()(s,x),l=(0,H.getCommonConfig)(),M=l.antPrefix,c=function(){return o||(v==="confirm"?(0,h.jsx)(E.Z,{style:{color:"var(--".concat(M,"-color-warning)")}}):v==="info"?(0,h.jsx)(T.Z,{style:{color:"var(--".concat(M,"-color-info)")}}):v==="warning"?(0,h.jsx)(E.Z,{style:{color:"var(--".concat(M,"-color-warning)")}}):v==="error"?(0,h.jsx)(R.Z,{style:{color:"var(--".concat(M,"-color-error)")}}):v==="success"?(0,h.jsx)(N.Z,{style:{color:"var(--".concat(M,"-color-success)")}}):(0,h.jsx)(E.Z,{style:{color:"var(--".concat(M,"-color-warning)")}}))},Z=function(){var z={};return["warning","error"].includes(v)&&(z.danger=!0),u()(u()({},z),t||{})};return(0,h.jsx)(W.Z,u()(u()({},d),{},{ref:p,icon:c(),okButtonProps:Z()}))});U.Z=k},20739:function(xn,U,n){var y=n(26068),u=n.n(y),V=n(51886),B=n(28655),H=n(81316),E=n(75271),T=n(52676),R=E.forwardRef(function(N,W){var I=N.content===""||N.content===void 0||N.content===null,h=N.title===""||N.title===void 0||N.title===null,x=N.open!==void 0&&N.open!==null?N.open:I&&h?!1:void 0,k=(0,V.getCommonConfig)(),s=k.antPrefix;return(0,T.jsx)(H.Z,u()(u()({},N),{},{arrow:N.arrow||!1,open:x,ref:W,getPopupContainer:N.getPopupContainer||function(p){return(0,B.Q)(p,".".concat(s,"-app"))}}))});U.Z=R},22781:function(xn,U,n){n.d(U,{Z:function(){return jn}});var y=n(82092),u=n.n(y),V=n(15558),B=n.n(V),H=n(48305),E=n.n(H),T=n(53649),R=n.n(T),N=n(39982),W=n(19487),I=n(56664),h=n(15222),x=n(45372),k=n(80047),s=n(85412),p=n(82187),o=n.n(p),P=n(75271),v=n(25298),t=n.n(v),d=n(17069),l=n.n(d),M=n(21742),c=n.n(M),Z=n(83136),g=n.n(Z),z=n(25451),G=function(dn){c()(J,dn);var Y=g()(J);function J(fn){var vn;return t()(this,J),vn=Y.call(this),vn.name=fn,vn}return l()(J,[{key:"eq",value:function(vn){return vn.name===this.name}},{key:"toDOM",value:function(){var vn=document.createElement("span");return vn.setAttribute("aria-hidden","true"),vn.className="cm-prompt-var",vn.textContent="${".concat(this.name,"}"),vn}},{key:"ignoreEvent",value:function(){return!1}}]),J}(z.l9),K=new z.Y1({regexp:/\$\{([\w\u4e00-\u9fa5]+)\}/g,decoration:function(Y){return z.p.replace({widget:new G(Y[1])})}}),nn=z.lg.fromClass(function(){function dn(Y){t()(this,dn),u()(this,"placeholders",void 0),this.placeholders=K.createDeco(Y)}return l()(dn,[{key:"update",value:function(J){this.placeholders=K.updateDeco(J,this.placeholders)}}]),dn}(),{decorations:function(Y){return Y.placeholders},provide:function(Y){return z.tk.atomicRanges.of(function(J){var fn;return((fn=J.plugin(Y))===null||fn===void 0?void 0:fn.placeholders)||z.p.none})}}),q=[nn],$=n(26068),en=n.n($),cn=n(14179);function mn(){var dn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],Y=arguments.length>1?arguments[1]:void 0,J=Y.onCreate,fn=Y.createBtnText;return(0,cn.ys)({override:[function(vn){var Cn,Nn=vn.matchBefore(/\/(\w+)?/);return!Nn||Nn&&Nn.from===Nn.to&&!vn.explicit?null:{from:(Cn=Nn==null?void 0:Nn.from)!==null&&Cn!==void 0?Cn:0,options:(J?[].concat(B()(dn),[{label:"/NEW_VAR",boost:-99}]):dn).map(function(pn){return en()(en()({},pn),{},{displayLabel:pn.label==="/NEW_VAR"?fn:pn.label.slice(1),apply:function(kn,yn,Sn,Dn){if(yn.label==="/NEW_VAR")return kn.dispatch({changes:{from:Sn,to:Dn,insert:""}}),J==null?void 0:J();var zn=yn.label.slice(1),An="${".concat(zn,"}");kn.dispatch({changes:{from:Sn,to:Dn,insert:An}})}})})}}]})}var sn=n(52676),Tn,un,O=(0,s.kc)(function(dn){var Y=dn.css,J=dn.token;return{onCreate:Y(Tn||(Tn=R()([`
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
  `])),J.colorBorderSecondary,J.colorBgContainer),cm:Y(un||(un=R()([`
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
  `])),J.colorTextSecondary,J.colorBlue,J.colorPurple,J.colorPurpleBg,J.colorBgContainer,J.colorText,J.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:J.colorBgBase,border:"1px solid ".concat(J.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:J.colorTextTertiary,backgroundColor:J.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),hn={markdown:[(0,W.JH)()]},Pn=[],tn=function(Y){var J=O(),fn=J.styles,vn=Y.variables||Pn,Cn=(0,P.useState)(!1),Nn=E()(Cn,2),pn=Nn[0],F=Nn[1],kn=Y.onCreate,yn=P.useContext(x.ZP.ConfigContext),Sn=yn.theme.algorithm===k.Z.darkAlgorithm,Dn=Y.createBtnText||"+ \u65B0\u589E\u53D8\u91CF",zn=(0,P.useMemo)(function(){return Sn?I.Pc:I.Zp},[Sn]),An=(0,P.useMemo)(function(){return[].concat(B()(hn.markdown),B()(q),[mn(B()(vn).map(function(Jn){return{label:"/".concat(Jn.code),info:Jn.label}})||[],{onCreate:kn,createBtnText:Dn})])},[vn]);(0,P.useEffect)(function(){return F(!0),function(){F(!1)}},[]);var Rn=P.useMemo(function(){return Y.tipsText===!1?(0,sn.jsx)("div",{className:fn.tips}):Y.tipsText?Y.tipsText:(0,sn.jsxs)("div",{className:fn.tips,children:['\u8F93\u5165/"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,sn.jsx)(N.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[Y.tipsText]);return pn?(0,sn.jsxs)("div",{className:fn.root,children:[(0,sn.jsx)(h.ZP,{className:o()(fn.cm,u()({},fn.onCreate,kn)),extensions:An,value:Y.value,theme:zn,lang:"markdown",onChange:Y.onChange,basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1}},zn),(0,sn.jsxs)("div",{className:fn.footer,children:[Rn,Y.maxLength?(0,sn.jsxs)("div",{children:[Y.value.length,"/",Y.maxLength]}):null]})]}):null},jn=(0,P.memo)(tn)},93949:function(xn,U,n){var y=n(26068),u=n.n(y),V=n(67825),B=n.n(V),H=n(38348),E=n(52676),T=["texture"];U.Z=function(R){var N=R.texture,W=N===void 0?!1:N,I=B()(R,T);return(0,E.jsx)(H.Z,u()(u()({},I),{},{texture:W}))}},73431:function(xn,U,n){n.d(U,{J:function(){return M},Z:function(){return Z}});var y=n(26068),u=n.n(y),V=n(82092),B=n.n(V),H=n(51886),E=n(86044),T=n(82187),R=n.n(T),N=n(75271),W=n(53649),I=n.n(W),h=n(75469),x,k=(0,h.Z)(x||(x=I()([`
.`,"-slider.","-slider.",`-slider-no-marks {
  margin: 0;
}
`])),function(g){return g.antPrefix},function(g){return g.sparkPrefix},function(g){return g.sparkPrefix}),s=n(67825),p=n.n(s),o=n(1359),P,v=(0,h.Z)(P||(P=I()([`
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
`])),function(g){return g.sparkPrefix},function(g){return g.sparkPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),t=n(52676),d=["styles","classNames","sliderProps","inputNumberProps"];function l(g){var z,G,K=(0,H.getCommonConfig)(),nn=K.sparkPrefix;console.log("debug sparkPrefix in SliderSelector",nn);var q=g.styles,$=g.classNames,en=g.sliderProps,cn=g.inputNumberProps,mn=p()(g,d),sn=v(),Tn=g.marks||((z=g.sliderProps)===null||z===void 0?void 0:z.marks)||null,un=Tn||B()(B()({},g.min,g.min),g.max,g.max),O=Tn&&((G=Object.keys(Tn))===null||G===void 0?void 0:G.length)>0,hn=function(tn){var jn=typeof tn=="string"?parseFloat(tn):tn;if(jn===null||isNaN(jn)){g.onChange(null);return}jn<g.min?g.onChange(g.min):jn>g.max?g.onChange(g.max):g.onChange(jn)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(sn,{}),(0,t.jsxs)("div",{style:q==null?void 0:q.wrapper,className:R()("".concat(nn,"-slider-input"),B()({},"".concat(nn,"-slider-input-has-marks"),O),$==null?void 0:$.wrapper),onMouseUp:function(){var tn;(tn=g.onBlur)===null||tn===void 0||tn.call(g)},children:[(0,t.jsx)(M,u()(u()(u()({disabled:g.disabled,min:g.min,max:g.max,step:g.step,tooltip:{getPopupContainer:function(tn){return tn}}},mn),en),{},{marks:un,style:u()(u()(u()({},q==null?void 0:q.slider),en==null?void 0:en.style),{},{width:"100%"}),className:R()($==null?void 0:$.slider,en==null?void 0:en.className),onChange:hn,value:g.value===null?void 0:g.value})),(0,t.jsx)(o.Z,u()(u()({controls:!1,step:g.step,min:g.min,max:g.max,disabled:g.disabled},cn),{},{onBlur:function(){var tn;(tn=g.onBlur)===null||tn===void 0||tn.call(g)},value:g.value,onChange:hn,style:u()(u()({},q==null?void 0:q.inputNumber),cn==null?void 0:cn.style),className:R()($==null?void 0:$.inputNumber,cn==null?void 0:cn.className)}))]})]})}var M=N.forwardRef(function(g,z){var G=(0,H.getCommonConfig)(),K=G.sparkPrefix,nn=G.antPrefix,q=k();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(q,{}),(0,t.jsx)(E.Z,u()(u()({},g),{},{className:R()("".concat(K,"-slider"),B()(B()({},"".concat(K,"-slider-no-marks"),!Object.keys(g.marks||{}).length),"".concat(nn,"-slider-reverse"),g.reverse),g.className),ref:z}))]})}),c=M;Object.assign(c,{Input:l});var Z=c},47710:function(xn,U,n){n.d(U,{Z:function(){return k}});var y=n(82092),u=n.n(y),V=n(51886),B=n(80047),H=n(32102),E=n(82187),T=n.n(E),R=n(53649),N=n.n(R),W=n(75469),I,h=(0,W.Z)(I||(I=N()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix}),x=n(52676),k=function(s){var p=s.indicator,o=s.spinning,P=o===void 0?!0:o,v=s.children,t=s.style,d=s.className,l=(0,V.getCommonConfig)(),M=l.sparkPrefix,c=B.Z.useToken(),Z=h(),g=(0,x.jsxs)("svg",{className:"".concat(M,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,x.jsx)("defs",{children:(0,x.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,x.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,x.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,x.jsx)("g",{children:(0,x.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:c.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,x.jsx)("g",{children:(0,x.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:c.token.colorPrimary,fillOpacity:"1"})})]})]}),z=s.tip||s.showProgress&&(0,x.jsxs)("div",{children:[(0,x.jsxs)("span",{children:["loading",s.percent!==void 0&&s.percent!==null&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:s.percent}),"%"]})]}),(0,x.jsx)(H.Z,{percent:s.percent,showInfo:!1})]})||null;return v?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Z,{}),(0,x.jsxs)("div",{className:T()("".concat(M,"-spinner-overlay"),d),style:t,children:[(0,x.jsx)("div",{className:T()("".concat(M,"-spinner-content"),u()({},"".concat(M,"-spinning"),P)),children:v}),P&&(0,x.jsxs)("div",{className:"".concat(M,"-spinner"),children:[(0,x.jsx)("div",{className:"".concat(M,"-indicator"),children:p||g}),(0,x.jsx)("div",{className:"".concat(M,"-title"),children:z})]})]})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Z,{}),(0,x.jsx)("div",{className:T()("".concat(M,"-spinner"),d),style:t,children:P&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"".concat(M,"-indicator"),children:p||g}),(0,x.jsx)("div",{className:"".concat(M,"-title"),children:z})]})})]})}},2217:function(xn,U,n){n.d(U,{Z:function(){return I}});var y=n(26068),u=n.n(y),V=n(73563),B=n(53649),H=n.n(B),E=n(75469),T,R=(0,E.Z)(T||(T=H()([`
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
`])),function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix}),N=n(52676),W=function(x){var k=R();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(k,{}),(0,N.jsx)(V.Z,u()({},x))]})},I=W},10650:function(xn,U,n){n.d(U,{Z:function(){return p}});var y=n(26068),u=n.n(y),V=n(51886),B=n(71649),H=n(74472),E=n(82187),T=n.n(E),R=n(75271),N=n(53649),W=n.n(N),I=n(75469),h,x=(0,I.Z)(h||(h=W()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),k=n(52676),s=function(P){var v=(0,V.getCommonConfig)(),t=v.sparkPrefix,d=x(),l=(0,R.useMemo)(function(){if(P.items)return P.items.map(function(M,c){var Z=M.status;return!Z&&P.current!==void 0&&(c<P.current?Z="finish":c===P.current?Z="process":Z="wait"),Z==="finish"?u()(u()({},M),{},{icon:(0,k.jsx)(B.Z,{className:"".concat(t,"-finish-icon")})}):M})},[P.items,P.current]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(d,{}),(0,k.jsx)(H.Z,u()(u()({},P),{},{items:l,className:T()("".concat(t,"-steps"),P.className)}))]})},p=s},28649:function(xn,U,n){n.d(U,{Z:function(){return s}});var y=n(26068),u=n.n(y),V=n(67825),B=n.n(V),H=n(65122),E=n(94872),T=n(51886),R=n(53649),N=n.n(R),W=n(75469),I,h=(0,W.Z)(I||(I=N()([`
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
`])),function(p){return p.sparkPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.sparkPrefix}),x=n(52676),k=["label","className"],s=function(p){var o=h(),P=p.label,v=p.className,t=B()(p,k),d=(0,T.getCommonConfig)(),l=d.sparkPrefix;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o,{}),(0,x.jsxs)(H.Z,{align:"center",gap:8,className:v,children:[(0,x.jsx)(E.Z,u()(u()({},t),{},{className:"".concat(l,"-switch")})),P&&(0,x.jsx)("span",{className:"".concat(l,"-switch-label"),children:P})]})]})}},34007:function(xn,U,n){n.d(U,{Z:function(){return P}});var y=n(26068),u=n.n(y),V=n(67825),B=n.n(V),H=n(51886),E=n(28173),T=n(9907),R=n(82187),N=n.n(R),W=n(42480),I=n(53649),h=n.n(I),x=n(75469),k,s=(0,x.Z)(k||(k=h()([`
.`,`-table-wrapper {

  .`,`-table-tbody {
    .`,"-table-row > .",`-table-cell-row-hover {
      background: var(--`,`-color-bg-layout);
    }
    .`,"-table-row.","-table-row-selected > .",`-table-cell {
      background: var(--`,`-color-primary-bg-hover);
    }
  }

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
`])),function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix}),p=n(52676),o=["columns"];function P(v){var t,d=(0,H.getCommonConfig)(),l=d.sparkPrefix,M=v.columns,c=B()(v,o);M=(t=M)===null||t===void 0?void 0:t.map(function(z){return u()(u()({},z),{},{sortIcon:z.sortIcon||function(){return(0,p.jsx)(E.Z,{style:{fontSize:16,marginLeft:8}})}})});var Z=s(),g=(0,W.X)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Z,{}),(0,p.jsx)(g,{}),(0,p.jsx)(T.Z,u()({className:N()("".concat(l,"-table")),columns:M},c))]})}},70539:function(xn,U,n){n.d(U,{Z:function(){return v}});var y=n(26068),u=n.n(y),V=n(67825),B=n.n(V),H=n(51886),E=n(6815),T=n(82187),R=n.n(T),N=n(75271),W=n(53649),I=n.n(W),h=n(75469),x,k=(0,h.Z)(x||(x=I()([`
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
`])),function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),s=n(52676),p=["children","className","bordered","color","size"],o=function(t){return t.Purple="purple",t.Pink="pink",t.Yellow="yellow",t.Teal="teal",t.Blue="blue",t.Mauve="mauve",t.Transparent="transparent",t.Success="success",t.Error="error",t.Warning="warning",t.Info="info",t}(o||{}),P=(0,N.forwardRef)(function(t,d){var l=t.children,M=t.className,c=t.bordered,Z=c===void 0?!1:c,g=t.color,z=g===void 0?"mauve":g,G=t.size,K=G===void 0?"middle":G,nn=B()(t,p),q=k(),$=(0,H.getCommonConfig)(),en=$.sparkPrefix,cn=Object.values(o).includes(z);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(q,{}),(0,s.jsx)(E.Z,u()(u()({className:R()("".concat(en,"-tag ").concat(en,"-tag-").concat(z," ").concat(en,"-tag-").concat(K),M),bordered:Z,color:cn?void 0:z},nn),{},{ref:d,children:l}))]})}),v=P},46599:function(xn,U,n){n.d(U,{Z:function(){return M}});var y=n(26068),u=n.n(y),V=n(67825),B=n.n(V),H=n(51886),E=n(752),T=n(80047),R=n(45372),N=n(49706),W=n(82187),I=n.n(W),h=n(75271),x=n(53649),k=n.n(x),s=n(75469),p,o=(0,s.Z)(p||(p=k()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),P=n(52676),v=["className","popupClassName"],t=["className","popupClassName"],d=function(Z){var g=Z.className,z=Z.popupClassName,G=B()(Z,v),K=T.Z.useToken(),nn=K.token,q=(0,H.getCommonConfig)(),$=q.sparkPrefix,en=o();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(en,{}),(0,P.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:nn.colorPrimary}}},children:(0,P.jsx)(N.Z,u()({suffixIcon:(0,P.jsx)(E.Z,{}),className:I()("".concat($,"-picker"),g),popupClassName:I()("".concat($,"-picker-dropdown"),z)},G))})]})},l=function(Z){var g=Z.className,z=Z.popupClassName,G=B()(Z,t),K=T.Z.useToken(),nn=K.token,q=(0,H.getCommonConfig)(),$=q.sparkPrefix,en=o();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(en,{}),(0,P.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:nn.colorPrimary}}},children:(0,P.jsx)(N.Z.RangePicker,u()({suffixIcon:(0,P.jsx)(E.Z,{}),className:I()("".concat($,"-picker"),g),popupClassName:I()("".concat($,"-picker-dropdown"),z),popupStyle:{padding:0}},G))})]})};d.RangePicker=l;var M=d},28422:function(xn,U,n){n.d(U,{Z:function(){return d}});var y=n(26068),u=n.n(y),V=n(48305),B=n.n(V),H=n(67825),E=n.n(H),T=n(75271),R=n(82187),N=n.n(R),W=n(44739),I=n(56630),h=n(51886),x=n(53649),k=n.n(x),s=n(75469),p,o=(0,s.Z)(p||(p=k()([`
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
  position: relative;
  width: 100%;
  height: 100%;
}

.`,`-video-element {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.`,`-video-poster {
  position: absolute;
  top: 0;
  left: 0;
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
`])),function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix}),P=n(52676),v=["controls","mouseEnterAutoPlay","children","className","style"],t=(0,T.forwardRef)(function(l,M){var c=l.controls,Z=l.mouseEnterAutoPlay,g=Z===void 0?!1:Z,z=l.children,G=l.className,K=l.style,nn=E()(l,v),q=(0,h.getCommonConfig)(),$=q.sparkPrefix,en=o(),cn=(0,T.useState)(0),mn=B()(cn,2),sn=mn[0],Tn=mn[1],un=(0,T.useState)(0),O=B()(un,2),hn=O[0],Pn=O[1],tn=(0,T.useState)(!1),jn=B()(tn,2),dn=jn[0],Y=jn[1],J=(0,I.Z)(l,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),fn=B()(J,2),vn=fn[0],Cn=fn[1],Nn=(0,T.useState)(!1),pn=B()(Nn,2),F=pn[0],kn=pn[1],yn=(0,T.useRef)(null),Sn=(0,T.useRef)(!1),Dn=function(Wn){yn.current=Wn,M&&(typeof M=="function"?M(Wn):M.current=Wn)};(0,T.useEffect)(function(){var On;return dn&&(On=setInterval(function(){yn.current&&Tn(yn.current.currentTime)},16)),function(){On&&clearInterval(On)}},[dn]);var zn=function(){return window.videoRef=yn.current,yn.current?"mozHasAudio"in yn.current?(kn(yn.current.mozHasAudio),!0):"webkitAudioDecodedByteCount"in yn.current?(kn(yn.current.webkitAudioDecodedByteCount>0),!0):(kn(!1),!1):!1},An=function(){yn.current&&Pn(yn.current.duration)},Rn=function(){yn.current&&(dn?yn.current.pause():yn.current.play(),Y(!dn))},Jn=function(){Y(!0)},he=function(){Y(!1)},Pe=function(){yn.current&&yn.current.requestFullscreen&&yn.current.requestFullscreen()},ye=function(){var Wn;Y(!1),Tn((Wn=yn.current)===null||Wn===void 0?void 0:Wn.duration)},be=function(){g&&!Sn.current&&(dn||(yn.current.play(),Sn.current=!0))},Ce=function(){g&&Sn.current&&(Sn.current=!1)},je=function(Wn){yn.current&&(yn.current.currentTime=Wn,Tn(Wn))};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(en,{}),(0,P.jsx)("div",{className:N()("".concat($,"-video-container"),G),style:K,children:(0,P.jsxs)("div",{className:"".concat($,"-video-content"),onMouseEnter:be,onMouseLeave:Ce,children:[l.poster&&(0,P.jsx)("img",{src:l.poster,alt:"poster",className:"".concat($,"-video-poster")}),(0,P.jsx)("video",u()(u()({ref:Dn},nn),{},{controls:!1,muted:vn,className:"".concat($,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:An,onCanPlayThrough:zn,onPlay:Jn,onPause:he,onEnded:ye})),c&&(0,P.jsx)(W.Z,{className:"".concat($,"-video-controller-wrapper"),isPlaying:dn,currentTime:sn,duration:hn,enableVolume:F,muted:vn,onMute:function(){return Cn(!vn)},onPlayPause:Rn,onFullscreen:Pe,onProgressClick:je}),z]})})]})}),d=t},88906:function(xn,U,n){n.d(U,{Z:function(){return H}});var y=n(26068),u=n.n(y),V=n(75271),B=new Map;function H(E){var T=E.globalStyle,R=E.name;(0,V.useLayoutEffect)(function(){var N=B.get(T)||0;if(N)B.set(T,u()(u()({},N),{},{count:N.count+1}));else{var W=document.createElement("style"),I=Math.random().toString(36).slice(2);W.innerHTML=T,W.dataset.id=I,W.dataset.flag="bailian-ui-use-style",R&&W.setAttribute("name",R),document.head.appendChild(W),B.set(T,{count:1,id:I})}return function(){var h=B.get(T);B.set(T,u()(u()({},h),{},{count:h.count-1})),setTimeout(function(){var x=B.get(T);if((x==null?void 0:x.count)<=0){var k;B.delete(T),(k=document.head.querySelector('[data-id="'+x.id+'"]'))===null||k===void 0||k.remove()}},100)}},[T])}},39707:function(xn,U,n){n.r(U),n.d(U,{Alert:function(){return o.Z},AlertDialog:function(){return Z.default},Anchor:function(){return g.Z},Audio:function(){return at.Z},Avatar:function(){return z.Z},Badge:function(){return P.Z},Breadcrumb:function(){return G.Z},Button:function(){return K.Z},Card:function(){return nn.Z},Checkbox:function(){return q.Z},CodeBlock:function(){return $.ZP},CodeBlockLangExtensionsMap:function(){return $.xO},Collapse:function(){return en.Z},CollapsePanel:function(){return cn.Z},ConfigProvider:function(){return Wt.ZP},DatePicker:function(){return mn.Z},Descriptions:function(){return Vr.Z},Drawer:function(){return sn.Z},Dropdown:function(){return Tn.Z},EllipsisTip:function(){return kn},Empty:function(){return yn.Z},FileCard:function(){return Xe.s},FileIcon:function(){return Xe.Z},FloatButton:function(){return v.Z},Form:function(){return Sn.Z},HelpIcon:function(){return Pe},IconButton:function(){return zn.Z},IconFont:function(){return ye.Z},Image:function(){return be.Z},Input:function(){return Ce.Z},InputNumber:function(){return t.Z},MdEditor:function(){return we.Z},MobileAlertDialog:function(){return Ct},MobileDrawer:function(){return gt},MobileModal:function(){return st},Modal:function(){return On.Z},Pagination:function(){return Pr.Z},Popconfirm:function(){return yr.Z},Popover:function(){return br.Z},Progress:function(){return d.Z},PromptsEditor:function(){return we.Z},Radio:function(){return l.ZP},RadioButton:function(){return Cr.default},Result:function(){return jr.Z},Select:function(){return M.default},Skeleton:function(){return c.Z},SlateEditor:function(){return Ur},Slider:function(){return Je.Z},SliderSelector:function(){return Jr},Spinner:function(){return Qr.Z},Statistic:function(){return Yr.Z},Steps:function(){return Sr.Z},Switch:function(){return Xr.Z},Table:function(){return qr.Z},Tabs:function(){return _r.Z},Tag:function(){return nt.Z},TimePicker:function(){return et.Z},Tooltip:function(){return Rn.Z},Upload:function(){return rt.Z},Video:function(){return tt.Z},bailianDarkTheme:function(){return hr},bailianTheme:function(){return pr},base64Decoder:function(){return wt},base64Encoder:function(){return zt},carbonDarkTheme:function(){return Ut},carbonTheme:function(){return $t},copy:function(){return ur.JG},delay:function(){return cr},generateTheme:function(){return s},generateThemeByToken:function(){return p.Z},getCommonConfig:function(){return tn.getCommonConfig},message:function(){return je.Z},notification:function(){return Wn.Z},parseJsonSafely:function(){return Ht},purpleDarkTheme:function(){return hr},purpleTheme:function(){return pr},renderTooltip:function(){return ur.rb},requestPop:function(){return vr},requestPopSse:function(){return At},requestSse:function(){return xr},safeHtml:function(){return St.t},setCommonConfig:function(){return tn.setCommonConfig},useCommonConfig:function(){return tn.useCommonConfig},useGlobalStyle:function(){return jt.Z},waitForDom:function(){return Et},waitForFunc:function(){return dr}});var y=n(23577),u=n(19888),V=n(44719),B=n(57249),H=function(r){var a=r.r/255,f=r.g/255,i=r.b/255,m=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),b=f<=.03928?f/12.92:Math.pow((f+.055)/1.055,2.4),j=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4);return .2126*m+.7152*b+.0722*j},E=function(r){var a=H(r);return a>.5},T=function(r){var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null},R=function(r,a,f){return"#"+((1<<24)+(r<<16)+(a<<8)+f).toString(16).slice(1).toUpperCase()},N=function(r,a,f){var i=r/255,m=a/255,b=f/255,j=Math.max(i,m,b),S=Math.min(i,m,b),L,C,D=(j+S)/2;if(j===S)L=C=0;else{var X=j-S;switch(C=D>.5?X/(2-j-S):X/(j+S),j){case i:L=((m-b)/X+(m<b?6:0))/6;break;case m:L=((b-i)/X+2)/6;break;case b:L=((i-m)/X+4)/6;break;default:L=0}}return{h:L*360,s:C*100,l:D*100}},W=function(r,a,f){var i=r/360,m=a/100,b=f/100,j,S,L;if(m===0)j=S=L=b;else{var C=function(an,ln,bn){var Q=bn;return Q<0&&(Q+=1),Q>1&&(Q-=1),Q<.16666666666666666?an+(ln-an)*6*Q:Q<.5?ln:Q<.6666666666666666?an+(ln-an)*(.6666666666666666-Q)*6:an},D=b<.5?b*(1+m):b+m-b*m,X=2*b-D;j=C(X,D,i+1/3),S=C(X,D,i),L=C(X,D,i-1/3)}return{r:Math.round(j*255),g:Math.round(S*255),b:Math.round(L*255)}},I=function(r,a){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=T(r);if(!i)return r;var m=N(i.r,i.g,i.b);m.l=Math.max(0,Math.min(100,m.l+a)),m.s=Math.max(0,Math.min(100,m.s+f));var b=W(m.h,m.s,m.l);return R(b.r,b.g,b.b)},h=function(r,a){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=T(r);if(!i)return r;var m=N(i.r,i.g,i.b);m.l=a,f!==null&&(m.s=f);var b=W(m.h,m.s,m.l);return R(b.r,b.g,b.b)},x=function(r,a){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=T(r);if(!i)return r;var m=N(i.r,i.g,i.b);m.l=a,m.s=Math.max(0,Math.min(100,m.s*f));var b=W(m.h,m.s,m.l);return R(b.r,b.g,b.b)},k=function(r){var a=r.primaryHex,f=r.darkMode,i=f===void 0?!1:f,m=r.bgBaseHex||(i?"#000000":"#ffffff"),b=r.textBaseHex||(i?"#E7E7ED":"#1a1a1a"),j=T(a);if(!j)return null;var S=N(j.r,j.g,j.b),L=T(m),C=T(b),D=L?N(L.r,L.g,L.b):{h:210,s:8,l:i?5:99},X=Math.max(8,Math.min(S.s,40)),on=Math.max(12,Math.min(S.s*.6,35)),an=i?h(a,Math.max(S.l-5,42),S.s*.95):a,ln=T(an),bn=ln?N(ln.r,ln.g,ln.b):S,Q={borderRadiusXS:u.borderRadiusXS,borderRadiusSM:u.borderRadiusSM,borderRadius:u.borderRadius,borderRadiusLG:u.borderRadiusLG,borderRadiusXL:u.borderRadiusXL,borderRadiusFull:u.borderRadiusFull,wireframe:u.wireframe,colorPrimary:i?h(a,Math.max(S.l-5,42),S.s*.95):a,colorPrimaryHover:i?h(a,Math.min(S.l+10,55),S.s*.95):I(a,S.l<50?10:-10,0),colorPrimaryActive:i?h(a,Math.max(S.l-10,35),S.s*.95):I(a,S.l<50?-10:-20,0),colorPrimaryBg:i?h(a,13,X*.6):h(a,96,X*.8),colorPrimaryBgHover:i?h(a,13,X*.6):h(a,94,X),colorPrimaryBorder:i?h(a,17,on*.8):h(a,88,on*.8),colorPrimaryBorderHover:i?h(a,22,on):h(a,82,on),colorPrimaryText:i?h(a,Math.max(S.l-5,42),S.s*.95):a,colorPrimaryTextHover:i?h(a,Math.min(S.l+10,55),S.s*.95):I(a,S.l<50?10:-10,0),colorPrimaryTextActive:i?h(a,Math.max(S.l-10,35),S.s*.95):I(a,S.l<50?-10:-20,0),colorTextOnPrimary:E(ln)?"#000000":"#ffffff",colorTextBase:b,colorText:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.88)"),colorTextSecondary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.65)"),colorTextTertiary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.45)"),colorTextQuaternary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.25)"),colorTextWhite:"#fff",colorBgBase:m,colorBgContainer:i?x(m,Math.min(D.l+S.l*.08,12),1.2):x(m,Math.max(100-S.l*.05,96),.8),colorBgElevated:i?x(m,Math.min(D.l+3,8),1.2):m,colorBgLayout:m,colorBgSpotlight:i?"rgba(".concat(T(x(m,28,1.2)).r,", ").concat(T(x(m,28,1.2)).g,", ").concat(T(x(m,28,1.2)).b,", 0.85)"):"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.85)"),colorBgMask:i?"rgba(".concat(L.r,", ").concat(L.g,", ").concat(L.b,", 0.8)"):"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.45)"),colorBorder:i?"rgba(".concat(T(x(m,28,2)).r,", ").concat(T(x(m,28,2)).g,", ").concat(T(x(m,28,2)).b,", 0.8)"):x(m,81,2.5),colorBorderSecondary:i?"rgba(".concat(T(x(m,22,1.8)).r,", ").concat(T(x(m,22,1.8)).g,", ").concat(T(x(m,22,1.8)).b,", 0.8)"):x(m,88,2),colorFill:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.18)"):x(m,81,2.5)+"5c",colorFillSecondary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.12)"):x(m,81,2.5)+"33",colorFillTertiary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.08)"):x(m,81,2.5)+"26",colorFillQuaternary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.04)"):x(m,81,2.5)+"1a",colorFillDisable:i?x(b,55,.8):x(m,86,1.8),colorLink:i?h(a,Math.max(S.l-5,42),S.s*.95):a,colorInfo:i?y.colorInfo:u.colorInfo,colorInfoHover:i?y.colorInfoHover:u.colorInfoHover,colorInfoText:i?y.colorInfoText:u.colorInfoText,colorInfoBg:i?y.colorInfoBg:u.colorInfoBg,colorInfoBgHover:i?y.colorInfoBgHover:u.colorInfoBgHover,colorInfoBorder:i?y.colorInfoBorder:u.colorInfoBorder,colorInfoBorderHover:i?y.colorInfoBorderHover:u.colorInfoBorderHover,colorSuccess:i?y.colorSuccess:u.colorSuccess,colorSuccessHover:i?y.colorSuccessHover:u.colorSuccessHover,colorSuccessBg:i?y.colorSuccessBg:u.colorSuccessBg,colorSuccessBgHover:i?y.colorSuccessBgHover:u.colorSuccessBgHover,colorSuccessBorder:i?y.colorSuccessBorder:u.colorSuccessBorder,colorSuccessBorderHover:i?y.colorSuccessBorderHover:u.colorSuccessBorderHover,colorWarning:i?y.colorWarning:u.colorWarning,colorWarningHover:i?y.colorWarningHover:u.colorWarningHover,colorWarningBg:i?y.colorWarningBg:u.colorWarningBg,colorWarningBgHover:i?y.colorWarningBgHover:u.colorWarningBgHover,colorWarningBorder:i?y.colorWarningBorder:u.colorWarningBorder,colorWarningBorderHover:i?y.colorWarningBorderHover:u.colorWarningBorderHover,colorError:i?y.colorError:u.colorError,colorErrorHover:i?y.colorErrorHover:u.colorErrorHover,colorErrorBg:i?y.colorErrorBg:u.colorErrorBg,colorErrorBgHover:i?y.colorErrorBgHover:u.colorErrorBgHover,colorErrorBorder:i?y.colorErrorBorder:u.colorErrorBorder,colorErrorBorderHover:i?y.colorErrorBorderHover:u.colorErrorBorderHover,colorPurple:i?y.colorPurple:u.colorPurple,colorPurpleHover:i?y.colorPurpleHover:u.colorPurpleHover,colorPurpleBg:i?y.colorPurpleBg:u.colorPurpleBg,colorPink:i?y.colorPink:u.colorPink,colorPinkHover:i?y.colorPinkHover:u.colorPinkHover,colorPinkBg:i?y.colorPinkBg:u.colorPinkBg,colorYellow:i?y.colorYellow:u.colorYellow,colorYellowHover:i?y.colorYellowHover:u.colorYellowHover,colorYellowBg:i?y.colorYellowBg:u.colorYellowBg,colorOrange:i?y.colorOrange:u.colorOrange,colorOrangeHover:i?y.colorOrangeHover:u.colorOrangeHover,colorOrangeBg:i?y.colorOrangeBg:u.colorOrangeBg,colorTeal:i?y.colorTeal:u.colorTeal,colorTealHover:i?y.colorTealHover:u.colorTealHover,colorTealBg:i?y.colorTealBg:u.colorTealBg,colorBlue:i?y.colorBlue:u.colorBlue,colorBlueHover:i?y.colorBlueHover:u.colorBlueHover,colorBlueBg:i?y.colorBlueBg:u.colorBlueBg,colorMauve:i?y.colorMauve:u.colorMauve,colorMauveHover:i?y.colorMauveHover:u.colorMauveHover,colorMauveBg:i?y.colorMauveBg:u.colorMauveBg,colorSlate:i?y.colorSlate:u.colorSlate||"#1E293B",colorSlateHover:i?y.colorSlateHover:u.colorSlateHover||"#475569",colorSlateBg:i?y.colorSlateBg:u.colorSlateBg||"#E2E8F0",colorLavender:i?y.colorLavender:u.colorLavender||"#A77BFF",colorLavenderHover:i?y.colorLavenderHover:u.colorLavenderHover||"#BB99FF",colorLavenderBg:i?y.colorLavenderBg:u.colorLavenderBg||"rgba(226, 212, 255, 0.8)",boxShadow:i?y.boxShadow:u.boxShadow,boxShadowSecondary:i?y.boxShadowSecondary:u.boxShadowSecondary,boxShadowTertiary:i?y.boxShadowTertiary:u.boxShadowTertiary,boxShadowTertiaryLeft:i?y.boxShadowTertiaryLeft:u.boxShadowTertiaryLeft,boxShadowInput:i?y.boxShadowInput:u.boxShadowInput};return Q},s=k,p=n(39728),o=n(46525),P=n(2344),v=n(69407),t=n(1359),d=n(32102),l=n(57239),M=n(54426),c=n(42435),Z=n(49573),g=n(52783),z=n(32893),G=n(61670),K=n(75041),nn=n(43529),q=n(75517),$=n(83665),en=n(30807),cn=n(28932),mn=n(78618),sn=n(59507),Tn=n(64925),un=n(26068),O=n.n(un),hn=n(31759),Pn=n.n(hn),tn=n(51886),jn=n(43721),dn=n(82187),Y=n.n(dn),J=n(75271),fn=n(53649),vn=n.n(fn),Cn=n(75469),Nn,pn=(0,Cn.Z)(Nn||(Nn=vn()([`
div.`,`-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`])),function(e){return e.sparkPrefix}),F=n(52676);function kn(e){var r=e.className,a=r===void 0?"":r,f=e.style,i=f===void 0?{}:f,m=e.children,b=e.rows,j=b===void 0?1:b,S=e.tooltip,L=e.tooltipMaxHeight,C=L===void 0?"90vh":L,D=(0,tn.getCommonConfig)(),X=D.sparkPrefix,on=pn();function an(){var ln={maxHeight:C,overflow:"auto"};if(Pn()(S)==="object"){var bn=S,Q=bn.title,_=bn.styles;return{title:Q||m,styles:O()(O()({},_),{},{body:O()(O()({},ln),_==null?void 0:_.body)})}}return{title:S||m,styles:{body:ln}}}return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(on,{}),(0,F.jsx)(jn.Z.Paragraph,{className:Y()("".concat(X,"-ellipsis-tip"),a),style:i,ellipsis:{rows:j,tooltip:an()},children:m})]})}var yn=n(38348),Sn=n(86950),Dn=n(69898),zn=n(94376),An=n(55116),Rn=n(54077),Jn,he=(0,Cn.Z)(Jn||(Jn=vn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix});function Pe(e){var r=(0,An.X)(),a=he(),f=e.style,i=e.content,m=e.className,b=e.popoverProps,j=(0,tn.getCommonConfig)(),S=j.sparkPrefix;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(r,{}),(0,F.jsx)(a,{}),(0,F.jsx)(Rn.Z,O()(O()({title:i,overlayInnerStyle:{maxWidth:376},trigger:"hover",style:f},b),{},{children:(0,F.jsx)(zn.Z,{className:Y()("".concat(S,"-help-icon"),m),icon:(0,F.jsx)(Dn.Z,{}),shape:"circle",bordered:!1,size:"small"})}))]})}var ye=n(8369),be=n(78899),Ce=n(29978),je=n(63953),On=n(13428),Wn=n(16945),Pr=n(22084),yr=n(93019),br=n(20739),we=n(22781),Cr=n(51458),jr=n(93949),Sr=n(10650),Er=n(48305),Se=n.n(Er),Yn=n(25811),oe=n(82090),A=n(75040),Ee=n(28533),ie=n(20335),$e,Tr=(0,Cn.Z)($e||($e=vn()([`
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
`]))),Nr=n(15558),Ue=n.n(Nr),Dr=(0,J.memo)(function(e){var r=e.attributes,a=e.children;return(0,F.jsx)("div",O()(O()({},r),{},{style:{marginTop:"8px"},children:a}))}),Qe,Mr=(0,Cn.Z)(Qe||(Qe=vn()([`
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
`]))),Br=(0,J.memo)(function(e){var r=e.attributes,a=e.renderVarLabel,f=Mr();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(f,{}),(0,F.jsxs)("span",O()(O()({},r),{},{children:[e.children,(0,F.jsx)("span",{className:"spark-editor-var-tag",children:a?a(e.element.code):e.element.label})]}))]})}),Qt=function(r){return Object.keys(r).map(function(a){return{label:r[a].label,desc:r[a].desc,value:a}})},kr=[{code:"s",isParagraph:!0,out:[],inner:[],name:Yn.Z.get({id:"components.SlateEditor.utils.constant.Paragraph",dm:"\u6BB5\u843D"}),render:Dr,type:"double"},{code:"var",isParagraph:!1,out:["s"],inner:[],name:Yn.Z.get({id:"components.SlateEditor.utils.constant.Variable",dm:"\u53D8\u91CF"}),render:Br,isInline:!0,isVoid:!0,type:"single"}],Te=function(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},Vt=function(r){return r.replace(/&/g,"&amp;").replace(/{/g,"").replace(/}/g,"").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},Zr=function(r){return r.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")},Ne=function e(r,a){var f="",i=a||{},m=i.tagRules,b=m===void 0?{}:m;return r.forEach(function(j,S){if(A.W_.isElement(j)){var L=b[j.type];if(!L)f+=Te(j.text);else switch(L.code){case"image":f+="![".concat(j.fileName,"](").concat(j.src,")");break;case"pdf":f+="[".concat(j.fileName,"](").concat(j.src,")");break;case"s":f+="".concat(e(j.children,a)).concat(S<r.length-1?`
`:"");break;case"var":f+="${".concat(j.code,"}");default:break}}else f+=Te(j.text)}),f},Ve=function(r,a){if(r&&r.children.length){var f=Ne(r.children,a);return f==="<s></s>"?"":Zr(f)}return""},fe=function(r){if(!r)return"";var a="",f=Te(r).replace(/\$\{([^{}]+?)\}/g,function(i,m){return'<var code="'.concat(m,'" label="${').concat(m,'}" />')});return f.split(`
`).forEach(function(i){a+="<s>".concat(i,"</s>")}),"<speak>".concat(a,"</speak>")},Or=function e(r){var a,f=[];return(r==null||(a=r.childNodes)===null||a===void 0?void 0:a.length)>0&&r.childNodes.forEach(function(i,m,b){var j=i.nodeType,S=i.nodeName;if(j===1){for(var L={},C=0;C<i.attributes.length;C++){var D=i.attributes[C],X=D.nodeName,on=D.nodeValue;L[X]=on}var an=O()({type:S},L);i.childNodes.length>0?an.children=e(i):an.children=[{text:""}],f.push(an),S!=="s"&&(m>0&&b[m-1].nodeType===1&&f.unshift({text:""}),m===b.length-1&&f.push({text:""}))}else j===3&&f.push({text:i.nodeValue||""})}),f},ve=function(r){if(r){var a=new DOMParser().parseFromString(r,"text/xml");return Or(a)}},Fr=function(r){if(!r||r.includes("</speak>"))return r;var a=r;return a.includes("<s>")||(a="<s>".concat(a,"</s>")),"<speak>".concat(a,"</speak>")},Ke=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a={};return[].concat(Ue()(r),Ue()(kr)).forEach(function(f){a[f.code]||(a[f.code]=f)}),a},Lr=n(90228),Zn=n.n(Lr),Ir=n(87999),Xn=n.n(Ir),Ge=function(r,a,f){if(!(!r||!a)){var i=r.selection,m=null;i&&(m=i.focus),f!=null&&f.at&&(m=f==null?void 0:f.at),m||(m={path:[0,0],offset:0});var b=m,j=b.path,S=b.offset,L=A.NB.get(r,A.y$.parent(j));if(!A.ML.isVoid(r,L)){var C=A.NB.string(A.NB.get(r,j)),D=C.substring(0,S-(f!=null&&f.deletePrefix?1:0)),X=C.substring(S,C.length);A.ML.withoutNormalizing(r,function(){r.apply({type:"insert_node",node:{text:X},path:j}),r.apply({type:"insert_node",node:a,path:j}),r.apply({type:"insert_node",node:{text:D},path:j});var on=A.y$.next(A.y$.next(A.y$.next(j)));r.apply({type:"remove_node",path:on,node:A.NB.get(r,on)});var an={path:A.y$.next(A.y$.next(j)),offset:0};r.apply({type:"set_selection",properties:null,newProperties:{anchor:an,focus:an}}),ie.F3.focus(r),r.onChange()})}}},Rr=function(){var e=Xn()(Zn()().mark(function r(a,f,i){var m,b,j,S,L,C,D,X,on,an,ln,bn,Q,_,En,Mn,Un,Bn,Hn,_n,Fn,te,Qn,ae,Vn,Kn,ee,Ln,In,wn,Gn,gn;return Zn()().wrap(function(rn){for(;;)switch(rn.prev=rn.next){case 0:if(!(!a||!f)){rn.next=2;break}return rn.abrupt("return");case 2:if(b=a.selection,j=i||{},S=j.tip,L=j.selection,C=L===void 0?b:L,D=i==null||(m=i.rules)===null||m===void 0?void 0:m[f.type],!(C&&!A.e6.isCollapsed(C))){rn.next=45;break}if(on=A.NB.fragment(a,C),an=me(on),an!==""){rn.next=10;break}return rn.abrupt("return");case 10:if(ln=ge(A.e6.edges(C)),bn=Se()(ln,2),Q=bn[0],_=bn[1],A.ML.isVoid(a,A.NB.get(a,A.y$.parent(Q.path)))&&(Q.path=A.y$.next(A.y$.parent(Q.path)),Q.offset=0),A.ML.isVoid(a,A.NB.get(a,A.y$.parent(_.path)))&&(_.path=A.y$.previous(A.y$.parent(_.path)),_.offset=A.NB.string(A.NB.get(a,_.path)).length),A.y$.hasPrevious(_.path)&&A.NB.get(a,A.y$.parent(Q.path))===A.NB.get(a,A.y$.previous(_.path))&&Q.offset===0&&_.offset===0&&(En=A.y$.previous(A.y$.parent(Q.path)),Mn=A.NB.get(a,En),Q.path=En,Q.offset=Mn.text.length),A.NB.parent(a,Q.path)!==A.NB.parent(a,_.path)){for(Un=A.NB.get(a,Q.path),Bn=me(A.NB.fragment(a,{anchor:{path:_.path,offset:0},focus:_}));A.xv.isText(Un)&&Un.text===""&&an===Bn;)Q.path.splice(Q.path.length-1,1,1,0),Un=A.NB.get(a,Q.path);for(Hn=A.NB.get(a,_.path),_n=A.NB.string(A.NB.get(a,A.e6.edges(C)[0].path)),Fn=me(A.NB.fragment(a,{anchor:Q,focus:{path:Q.path,offset:_n.length}}));A.xv.isText(Hn)&&Hn.text===""&&an===Fn;)te=_.path[_.path.length-1],_.path.splice(_.path.length-1,1,te-1),Hn=A.NB.get(a,_.path),A.W_.isElement(Hn)&&(_.path.push(Hn.children.length-1),_.offset=_n.length)}if(A.NB.parent(a,Q.path)===A.NB.parent(a,_.path)){rn.next=18;break}return oe.ZP.info(Yn.Z.get({id:"components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect",dm:"\u5212\u9009\u8303\u56F4\u6709\u8BEF"})),rn.abrupt("return");case 18:Qn=A.y$.parent(Q.path),ae=(D==null?void 0:D.name)||De(),Vn=A.NB.get(a,Qn),Kn=i==null||(X=i.rules)===null||X===void 0?void 0:X[Vn.type];case 22:if(!(D!=null&&D.out&&Qn.length>1)){rn.next=30;break}if(D.out.includes(Vn.type)){rn.next=27;break}return ee=(Kn==null?void 0:Kn.name)||De(),oe.ZP.warning(Yn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn",dm:"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185"},{wrapTagName:ae,tagName:ee})),rn.abrupt("return");case 27:Qn=A.y$.parent(Qn),rn.next=22;break;case 30:if(!(D!=null&&D.inner&&A.NB.get(a,Q.path)!==A.NB.get(a,_.path))){rn.next=42;break}Ln=A.y$.next(Q.path);case 32:if(A.y$.equals(Ln,_.path)){rn.next=42;break}if(wn=A.NB.get(a,Ln),Gn=i==null||(In=i.rules)===null||In===void 0?void 0:In[wn.type],!(A.W_.isElement(wn)&&!D.inner.includes(wn.type))){rn.next=39;break}return gn=(Gn==null?void 0:Gn.name)||De(),oe.ZP.warning(Yn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn",dm:"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011"},{wrapTagName:ae,tagName:gn})),rn.abrupt("return");case 39:Ln=A.y$.next(Ln),rn.next=32;break;case 42:A.ML.withoutNormalizing(a,function(){var re=A.NB.parent(a,Q.path),ne=A.NB.fragment(re,{anchor:{path:[Q.path[Q.path.length-1]],offset:Q.offset},focus:{path:[_.path[_.path.length-1]],offset:_.offset}}),ue=A.NB.string(A.NB.get(a,Q.path));if(A.y$.equals(Q.path,_.path))a.apply({type:"remove_text",path:Q.path,offset:Q.offset,text:ue.substring(Q.offset,_.offset)});else{a.apply({type:"remove_text",path:Q.path,offset:Q.offset,text:ue.substring(Q.offset,ue.length)});for(var de=A.y$.next(Q.path);!A.y$.equals(de,_.path);)a.apply({type:"remove_node",path:de,node:A.NB.get(a,de)}),_.path=A.y$.previous(_.path);var Ae=A.NB.string(A.NB.get(a,_.path));a.apply({type:"remove_text",path:_.path,offset:0,text:Ae.substring(0,_.offset)})}if(!A.y$.equals(Q.path,_.path)){var pe=A.NB.get(a,_.path);a.apply({type:"remove_node",path:_.path,node:pe});var We=A.NB.string(pe);a.apply({type:"insert_text",path:Q.path,offset:Q.offset,text:We})}Ge(a,O()(O()({},f),{},{children:ne}),{at:Q,rules:i==null?void 0:i.rules})}),rn.next=46;break;case 45:S&&oe.ZP.warning(S);case 46:case"end":return rn.stop()}},r)}));return function(a,f,i){return e.apply(this,arguments)}}(),Kt=function(r,a,f){if(!(!r||!a)){var i=Node.get(r,a),m=ge(i.children).reverse();Editor.withoutNormalizing(r,function(){r.apply({type:"remove_node",node:i,path:a}),m.forEach(function(an){r.apply({type:"insert_node",node:an,path:a})});for(var b=Path.parent(a),j=Node.get(r,b),S=0;Node.has(j,[S+1]);)if(Text.isText(Node.get(j,[S]))&&Text.isText(Node.get(j,[S+1]))){var L=_toConsumableArray(b);L.push(S+1);var C=Node.get(r,L),D=Node.string(C);r.apply({type:"remove_node",path:L,node:C});var X=Path.previous(L),on=Node.string(Node.get(r,X));r.apply({type:"insert_text",path:Path.previous(L),offset:on.length,text:D}),j=Node.get(r,b)}else S++;f==null||f(),Path.previous(a)})}},Ar=function(r,a,f){var i=f.at;r.apply({type:"set_node",path:i,properties:a,newProperties:a}),r.onChange()},Gt=function(r,a,f){r.apply({type:"remove_node",path:f,node:Node.get(r,f)}),r.apply({type:"insert_node",path:f,node:a})},Wr=function(r,a){r&&(A.ML.withoutNormalizing(r,function(){var f=ge(r.children);f.forEach(function(m){r.apply({type:"remove_node",path:[0],node:m})});var i=a?ge(a):[{type:"s",children:[{text:""}]}];i.reverse(),i.forEach(function(m){r.apply({type:"insert_node",path:[0],node:m})})}),r.onChange())},me=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.reduce(function(a,f){return a+A.NB.string(f)},"")},ge=function(r){return JSON.parse(JSON.stringify(r))},De=function(){var r="";return r},Jt=function(r){var a;return(a=r[0])===null||a===void 0||(a=a.children)===null||a===void 0?void 0:a.map(function(f){return f.children.map(function(i){return i.text}).join("")}).join("")},Yt=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,a=r%60,f=parseInt("".concat(r/60)),i=0;return f>60&&(f=f%60,i=parseInt("".concat(f/60))),"".concat(i?"".concat(Me(i),":"):"").concat(Me(f),":").concat(Me(a))},Me=function(r){return r>=10?"".concat(r):"0".concat(r)},Hr=function(r,a){if(!(!r||!a))return ie.F3.findPath(r,a)},zr=function(r){r&&A.ML.withoutNormalizing(r,function(){var a=A.ML.end(r,[]);A.YR.select(r,a),ie.F3.focus(r),r.onChange()})},wr=function(r,a,f){var i=r.isInline,m=r.isVoid,b=r.insertText,j=r.insertBreak,S=r.apply;r.isInline=function(C){var D;return((D=f[C.type])===null||D===void 0?void 0:D.isInline)||i(C)},r.isVoid=function(C){var D;return((D=f[C.type])===null||D===void 0?void 0:D.isVoid)||m(C)};var L=function(D){var X=parseInt(r.maxLength||a||"1000"),on=Ve(r,{tagRules:f}),an=on.length;if(an+D.length>X?(b(D.substring(0,X-an)),Ee.MO.withoutSaving(r,function(){b(D.substring(X-an,D.length))})):b(D),r.selection&&an+D.length>X){var ln=r.selection.focus,bn=ln.path,Q=ln.offset,_=Q-(an+D.length-X),En=D.substring(X-an,D.length),Mn=Yn.Z.get({id:"components.SlateEditor.utils.withEditor.YouCanEnterAMaximum",dm:"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57"},{maxLen:X});Ee.MO.withoutSaving(r,function(){r.apply({type:"remove_text",path:bn,offset:_,text:En})}),oe.ZP.warning(Mn)}};return r.insertText=L,r.insertFragment=function(C){var D=me(C);L(D)},r.insertBreak=function(){var C=r.selection;if(C){var D=Array.from(A.ML.nodes(r,{at:C,match:function(ln){return!A.ML.isEditor(ln)&&A.W_.isElement(ln)&&ln.type!=="s"}})),X=Se()(D,1),on=X[0];if(on)return;j()}},r.apply=function(C){C.type==="set_selection"&&Be||S(C)},r},$r=(0,J.forwardRef)(function(e,r){var a=Tr(),f=e.value,i=e.wordLimit,m=i===void 0?1e3:i,b=e.disabled,j=e.onChange,S=e.variables,L=(0,J.useRef)(!1),C=(0,J.useRef)(Ke(e.tagRules)),D=(0,J.useMemo)(function(){return wr((0,ie.BU)((0,Ee.VC)((0,A.Jh)())),m,C.current)},[]),X=(0,J.useRef)(D.selection),on=(0,J.useRef)(S);(0,J.useEffect)(function(){C.current=Ke(e.tagRules)},[e.tagRules]),(0,J.useEffect)(function(){on.current=S},[S]),(0,J.useEffect)(function(){var gn;if(!L.current){L.current=!0;return}D.maxLength=m;var w=Fn();Vn(((gn=ve(fe(w==null?void 0:w.slice(0,m))))===null||gn===void 0||(gn=gn[0])===null||gn===void 0?void 0:gn.children)||[{type:"s",children:[{text:""}]}])},[m]),(0,J.useImperativeHandle)(r,function(){return{editor:D,getEditorValue:Fn,_insertNodes:Qn,_setNodes:te,_setEditorContent:Vn,_findNodePath:ee,_wrapNodes:ae,_serialize:Ln,_generateTextBySelection:In,_insertFragment:wn,_setEditorContentByStr:Kn}});var an=(0,J.useMemo)(function(){var gn=ve(Fr(fe(f))),w;return gn&&(gn[0].type==="speak"?w=gn[0].children:w=gn),{initValue:w}},[f]),ln=an.initValue,bn=(0,J.useState)(ln||[{type:"s",children:[{text:""}]}]),Q=Se()(bn,2),_=Q[0],En=Q[1],Mn=function(w){JSON.stringify((D==null?void 0:D.selection)||"")!==JSON.stringify(X.current||"")&&(X.current=D==null?void 0:D.selection);var rn=Fn();f!==rn&&(j==null||j(Fn()),En(w))},Un=function(w){var rn=w.element,re=rn.type,ne=C.current[re].render;return ne?(0,F.jsx)(ne,O()(O()({},w),{},{renderVarLabel:e.renderVarLabel})):(0,F.jsx)(F.Fragment,{})},Bn=(0,J.useCallback)(function(gn){var w=gn.attributes,rn=gn.children,re=gn.leaf;return(0,F.jsx)("span",O()(O()({},w),{},{style:{paddingLeft:re.text===""?"3px":void 0},children:rn}))},[]),Hn=function(){Be=!0},_n=function(){Be=!1},Fn=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ve(D,O()(O()({},w),{},{tagRules:C.current}))},te=function(w,rn){Ar(D,w,rn)},Qn=function(w){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ge(D,w,O()(O()({},rn),{},{rules:C.current}))},ae=function(w){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Rr(D,w,O()(O()({},rn),{},{rules:C.current}))},Vn=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];Wr(D,w)},Kn=function(){var w,rn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";Vn(((w=ve(fe(rn==null?void 0:rn.slice(0,m))))===null||w===void 0||(w=w[0])===null||w===void 0?void 0:w.children)||[{type:"s",children:[{text:""}]}])},ee=function(w){return Hr(D,w)},Ln=function(w){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ne(w,O()(O()({},rn),{},{tagRules:C.current}))},In=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!D.selection)return null;var rn=A.NB.fragment(D,D.selection);return Ne(rn,O()(O()({},w),{},{tagRules:C.current}))},wn=function(w){var rn,re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,ne=Fn();if(ne.length>=m){oe.ZP.warning(Yn.Z.get({id:"components.commonComponents.SlateEditor.TheNumberOfWordsCannot",dm:"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57"}));return}(!D.selection||re)&&zr(D);var ue=ne.endsWith("/n");re&&ne&&!ue&&D.insertBreak();var de=w.slice(0,m-ne.length),Ae=ve(fe(de))||[];(rn=Ae[0])===null||rn===void 0||rn.children.forEach(function(pe,We){var He;We!==0&&D.insertBreak(),(He=pe.children)===null||He===void 0||He.forEach(function(ze){ze.text?D.insertText(ze.text):Qn(ze)})})};(0,J.useEffect)(function(){var gn=Fn();f!==gn&&(j==null||j(Fn()))},[]);var Gn=function(w){var rn=w.clipboardData.getData("text/plain");wn(rn,!1),w.preventDefault()};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(a,{}),(0,F.jsx)("div",{id:"text-editor",className:Y()("text-editor",e.className),children:(0,F.jsx)(ie.mH,{editor:D,value:_,onChange:Mn,children:(0,F.jsx)(ie.CX,{onKeyDown:e.onKeyDown,placeholder:e.placeholder||Yn.Z.get({id:"components.commonComponents.SlateEditor.EnterHere",dm:"\u5728\u8FD9\u91CC\u8F93\u5165"}),onBlur:e.onBlur,onFocus:e.onFocus,className:Y()("text-editor-content",e.contentClassName),readOnly:b,renderElement:Un,renderLeaf:Bn,onCompositionStart:Hn,onCompositionEnd:_n,onPaste:Gn,maxLength:e.wordLimit,onCopy:function(w){var rn=In()||"";w.clipboardData.setData("text/plain",rn),w.preventDefault()}})})})]})}),Ur=$r,Be=!1,Je=n(73431),Qr=n(47710),Vr=n(66894),Kr=n(82092),se=n.n(Kr),Ye,Gr=(0,Cn.Z)(Ye||(Ye=vn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix});function Jr(e){var r=(0,tn.getCommonConfig)(),a=r.sparkPrefix,f=Gr(),i=function(b){var j=typeof b=="string"?parseFloat(b):b;if(j===null||isNaN(j)){var S;(S=e.onChange)===null||S===void 0||S.call(e,null);return}if(j<e.min){var L;(L=e.onChange)===null||L===void 0||L.call(e,e.min)}else if(j>e.max){var C;(C=e.onChange)===null||C===void 0||C.call(e,e.max)}else{var D;(D=e.onChange)===null||D===void 0||D.call(e,j)}};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(f,{}),(0,F.jsxs)("div",{onMouseUp:function(){var b;return(b=e.onBlur)===null||b===void 0?void 0:b.call(e)},className:Y()("".concat(a,"-slider-selector"),e.className),children:[(0,F.jsx)(Je.Z,{disabled:e.disabled,onChange:i,value:e.value===null?void 0:e.value,min:e.min,max:e.max,step:e.step,marks:e.marks||se()(se()({},e.min,e.min),e.max,e.max),tooltip:{getPopupContainer:function(b){return b}}}),(0,F.jsx)("div",{style:O()({width:"48px"},e.inputNumberWrapperStyle),children:(0,F.jsx)(t.Z,{disabled:e.disabled,controls:!1,min:e.min,max:e.max,onBlur:function(){var b;return(b=e.onBlur)===null||b===void 0?void 0:b.call(e)},step:e.step,value:e.value,onChange:i,precision:e.precision})})]})]})}var Yr=n(2217),Xr=n(28649),qr=n(34007),_r=n(93531),nt=n(70539),et=n(46599),rt=n(38768),tt=n(28422),at=n(42425),Xe=n(26574),ot=n(67825),le=n.n(ot),it=n(6002),qn=n(84674),qe,_e=(0,Cn.Z)(qe||(qe=vn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),lt=["showDivider","closable"],nr=function(){var r=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,f=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(f,"px"),function(){document.body.style.overflow=r,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,f)}},$n=function(r){var a=_e(),f=(0,tn.getCommonConfig)(),i=f.sparkPrefix,m=r.showDivider,b=m===void 0?!0:m,j=r.closable,S=j===void 0?!0:j,L=le()(r,lt);(0,J.useEffect)(function(){if(r.open){var on=nr();return on}},[r.open]);var C=function(an){return r.info?(0,F.jsxs)("div",{className:"".concat(i,"-modal-footer-wrapper"),children:[(0,F.jsx)("span",{className:"".concat(i,"-modal-footer-info"),children:r.info}),(0,F.jsx)("div",{className:"".concat(i,"-modal-footer-origin-node"),children:an})]}):an},D=S?r.closeIcon||(0,F.jsx)(it.Z,{className:"".concat(i,"-modal-title-close"),onClick:function(an){var ln;(ln=r.onCancel)===null||ln===void 0||ln.call(r,an)}}):null,X=r.footer===void 0?C:r.footer;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(a,{}),(0,F.jsx)(qn.Z,O()(O()({},L),{},{centered:!1,closeIcon:null,width:r.width||"auto",title:(0,F.jsxs)("div",{className:"".concat(i,"-modal-title-wrapper"),children:[(0,F.jsx)("div",{className:Y()("".concat(i,"-modal-title"),se()({},"".concat(i,"-modal-title-padding"),S)),children:r.title}),D]}),wrapClassName:Y()("".concat(i,"-modal"),se()({},"".concat(i,"-show-divider"),b),r.wrapClassName,"animate-in"),footer:X,transitionName:""}))]})};$n.useModal=qn.Z.useModal;var ce=function(r){return function(a){var f=nr(),i=(0,tn.getCommonConfig)(),m=i.sparkPrefix,b=a==null?void 0:a.afterClose,j=a==null?void 0:a.content;function S(){var C=_e();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(C,{}),j]})}var L=O()(O()({},a),{},{content:(0,F.jsx)(S,{}),width:a.width||"auto",centered:!1,transitionName:"",wrapClassName:Y()("".concat(m,"-modal"),a.wrapClassName,"animate-in"),afterClose:function(){f();for(var D=arguments.length,X=new Array(D),on=0;on<D;on++)X[on]=arguments[on];b==null||b.apply(void 0,X)}});return r(L)}};$n.success=ce(qn.Z.success),$n.error=ce(qn.Z.error),$n.warning=ce(qn.Z.warning),$n.info=ce(qn.Z.info),$n.confirm=ce(qn.Z.confirm),$n.SMALL_WIDTH=640,$n.MEDIUM_WIDTH=800,$n.LARGE_WIDTH=960;var st=$n,ct=n(94042),ut=n(10178),er,rr=(0,Cn.Z)(er||(er=vn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),dt=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],ft=function(r){var a=r.onOk,f=r.onCancel,i=r.okText,m=i===void 0?"\u786E\u5B9A":i,b=r.okButtonProps,j=r.cancelText,S=j===void 0?"\u53D6\u6D88":j,L=r.cancelButtonProps,C=r.info,D=r.footer,X=le()(r,dt),on=rr(),an=(0,tn.getCommonConfig)(),ln=an.antPrefix,bn=function(_){if(f)f();else{var En;(En=X.onClose)===null||En===void 0||En.call(X,_)}};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(on,{}),(0,F.jsx)(sn.Z,O()(O()({},X),{},{footer:D||(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{className:"".concat(ln,"-drawer-footer-info"),children:C}),(0,F.jsxs)("div",{className:"".concat(ln,"-drawer-footer-buttons"),children:[(0,F.jsx)(K.Z,O()(O()({onClick:bn},L),{},{children:S})),(0,F.jsx)(K.Z,O()(O()({type:"primary",onClick:a},b),{},{children:m}))]})]})}))]})},vt=ft,mt=["children","className","style","showDivider"],tr=function(r){var a=r.children,f=r.className,i=r.style,m=r.showDivider,b=m===void 0?!0:m,j=le()(r,mt),S=rr(),L=(0,tn.getCommonConfig)(),C=L.sparkPrefix,D=L.antPrefix;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(S,{}),(0,F.jsx)(ut.Z,O()(O()({closeIcon:(0,F.jsx)(ct.Z,{size:24}),className:Y()("".concat(C,"-drawer"),f,se()({},"".concat(D,"-show-divider"),b)),style:O()({},i)},j),{},{children:a}))]})};Object.assign(tr,{Confirm:vt});var gt=tr,xt=n(58911),pt=n(88602),ht=n(62910),Pt=n(99090),xe=n(65122),ar,or=(0,Cn.Z)(ar||(ar=vn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),yt=["children","type","danger","title","width","className"],ir=function(){var r=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,f=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(f,"px"),function(){document.body.style.overflow=r,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,f)}},lr=function(r){var a=function(ln){var bn=ln.type,Q=ln.title,_=(0,tn.getCommonConfig)(),En=_.antPrefix;switch(bn){case"success":return(0,F.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,F.jsx)(xt.Z,{style:{color:"var(--".concat(En,"-color-success)"),fontSize:18,margin:"0 3px"}}),Q]});case"warning":case"confirm":return(0,F.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,F.jsx)(pt.Z,{style:{color:"var(--".concat(En,"-color-warning)"),fontSize:18,margin:"0 3px"}}),Q]});case"info":return(0,F.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,F.jsx)(ht.Z,{style:{color:"var(--".concat(En,"-color-info)"),fontSize:18,margin:"0 3px"}}),Q]});case"error":return(0,F.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,F.jsx)(Pt.Z,{style:{color:"var(--".concat(En,"-color-error)"),fontSize:18,margin:"0 3px"}}),Q]});default:return Yn.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},f=r.children,i=r.type,m=i===void 0?"info":i,b=r.danger,j=b===void 0?!1:b,S=r.title,L=r.width,C=L===void 0?"auto":L,D=r.className,X=D===void 0?"":D,on=le()(r,yt);return{width:C,transitionName:"",restProps:on,closeIcon:null,title:a({type:m,title:S}),okButtonProps:{danger:m==="error"||m==="warning"||j},destroyOnClose:!0,className:Y()(X,"animate-in","".concat((0,tn.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:r.content||f,children:f}},sr=function(r){var a=lr(r),f=or();return(0,J.useEffect)(function(){if(r.open){var i=ir();return i}},[r.open]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(f,{}),(0,F.jsx)(qn.Z,O()(O()({width:a.width,transitionName:""},a.restProps),{},{closeIcon:null,title:a.title,okButtonProps:a.okButtonProps||{},destroyOnClose:a.destroyOnClose,className:a.className,children:a.content||a.children}))]})},bt=["success","info","warning","error","confirm"];bt.forEach(function(e){sr[e]=function(r){var a=lr(O()(O()({},r),{},{type:e})),f=ir();function i(){var m=or();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(m,{}),a.content]})}return qn.Z.confirm(O()(O()(O()({},a),a.restProps),{},{content:(0,F.jsx)(i,{}),icon:null,afterClose:function(){var b;if(f(),(b=a.restProps)!==null&&b!==void 0&&b.afterClose){var j;(j=a.restProps).afterClose.apply(j,arguments)}}}))}});var Ct=sr,jt=n(88906);function cr(){return ke.apply(this,arguments)}function ke(){return ke=Xn()(Zn()().mark(function e(){var r,a=arguments;return Zn()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return r=a.length>0&&a[0]!==void 0?a[0]:100,i.abrupt("return",new Promise(function(m){setTimeout(m,r)}));case 2:case"end":return i.stop()}},e)})),ke.apply(this,arguments)}var St=n(28655),ur=n(12281);function dr(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.timeout,f=a===void 0?5e3:a,i=r.intervalTime,m=i===void 0?100:i,b=Date.now();return new Promise(function(j,S){var L=setInterval(function(){var C=e();C?(clearInterval(L),j(C)):Date.now()-b>f&&(S("timeout"),clearInterval(L))},m)})}function Et(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return dr(function(){return document.querySelector(e)},r)}var fr=n(48430),Tt=["product","action","url","version","region","headers"],Nt=function(){var e=Xn()(Zn()().mark(function a(f,i,m){var b,j,S,L,C,D,X,on,an,ln,bn,Q,_,En,Mn;return Zn()().wrap(function(Bn){for(;;)switch(Bn.prev=Bn.next){case 0:return j=f.product,S=f.action,L=f.url,C=f.version,D=f.region,X=f.headers,on=X===void 0?{}:X,an=le()(f,Tt),ln="".concat(L||"/data/api.json","?action=").concat(S,"&product=").concat(j),C&&(ln+="&version=".concat(C)),bn={sec_token:((b=window.ALIYUN_CONSOLE_CONFIG)===null||b===void 0?void 0:b.SEC_TOKEN)||"",region:D},i&&(bn.params=JSON.stringify(i)),m&&Object.assign(bn,m),Q=O()({method:"post",credentials:"same-origin",headers:O()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},on)},an),_=Object.assign({},Q),_.body=(0,fr.stringify)(bn),Bn.next=11,fetch(ln,_);case 11:return En=Bn.sent,Bn.next=14,En.json();case 14:if(Mn=Bn.sent,!(Mn.code!=="200"&&!Mn.successResponse)){Bn.next=17;break}return Bn.abrupt("return",Promise.reject(Mn));case 17:return Bn.abrupt("return",Mn);case 18:case"end":return Bn.stop()}},a)}));function r(a,f,i){return e.apply(this,arguments)}return r}(),vr=Nt;function Dt(e,r){return Ze.apply(this,arguments)}function Ze(){return Ze=Xn()(Zn()().mark(function e(r,a){var f,i,m;return Zn()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:i=r==null||(f=r.getReader)===null||f===void 0?void 0:f.call(r),i||(console.log("[sse]error: Can Not Find Reader Object"),console.log("[sse]StreamInfo: ",r));case 2:return j.next=4,i.read();case 4:if((m=j.sent).done){j.next=8;break}try{a(m.value)}catch(S){console.log("[sse-error][onmessage] pleach check `onmessage` or `onJsonText`.",S)}j.next=2;break;case 8:case"end":return j.stop()}},e)})),Ze.apply(this,arguments)}function Mt(e){var r,a,f,i=!1;return function(b){r===void 0?(r=b,a=0,f=-1):r=kt(r,b);for(var j=r.length,S=0;a<j;){i&&(r[a]===10&&(S=++a),i=!1);for(var L=-1;a<j&&L===-1;++a)switch(r[a]){case 58:f===-1&&(f=a-S);break;case 13:i=!0;case 10:L=a;break}if(L===-1)break;e(r.subarray(S,L),f),S=a,f=-1}S===j?r=void 0:S!==0&&(r=r.subarray(S),a-=S)}}function Bt(e,r,a){var f=mr(),i=new TextDecoder;return function(b,j){if(b.length===0)a==null||a(f),f=mr();else if(j>0){var S=i.decode(b.subarray(0,j)),L=j+(b[j+1]===32?2:1),C=i.decode(b.subarray(L));switch(S){case"data":f.data=f.data?"".concat(f.data,`
`).concat(C):C;break;case"event":f.event=C;break;case"id":e(f.id=C);break;case"retry":var D=parseInt(C,10);isNaN(D)||r(f.retry=D);break}}}}function kt(e,r){var a=new Uint8Array(e.length+r.length);return a.set(e),a.set(r,e.length),a}function mr(){return{data:"",event:"",id:"",retry:void 0}}var Zt=["signal","headers","onopen","onmessage","onclose","onerror","fetch","autoRetryTime","timeout","debug"],Oe="text/event-stream",Ot=1e3,gr="last-event-id";function xr(e,r){return Fe.apply(this,arguments)}function Fe(){return Fe=Xn()(Zn()().mark(function e(r,a){var f,i,m,b,j,S,L,C,D,X,on,an,ln;return Zn()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return f=a.signal,i=a.headers,m=a.onopen,b=a.onmessage,j=a.onclose,S=a.onerror,L=a.fetch,C=a.autoRetryTime,D=a.timeout,X=a.debug,on=X===void 0?!1:X,an=le()(a,Zt),ln=0,Q.abrupt("return",new Promise(function(_,En){var Mn=O()({},i);Mn.accept||(Mn.accept=Oe);var Un=Ot,Bn=0,Hn=0,_n=new AbortController;function Fn(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(on&&console.log("[sse] dispose"),window.clearTimeout(Bn),window.clearTimeout(Hn),!ee){var Ln,In;(Ln=_n)===null||Ln===void 0||(In=Ln.abort)===null||In===void 0||In.call(Ln)}}function te(){window.clearTimeout(Hn),D!==0&&(Hn=window.setTimeout(function(){on&&console.log("[sse] timeout"),En(new Error("timeout")),S==null||S(new Error("timeout")),Fn()},D||60*1e3))}f==null||f.addEventListener("abort",function(){Fn(),_()});var Qn=L!=null?L:window.fetch,ae=m!=null?m:Ft;function Vn(){return Kn.apply(this,arguments)}function Kn(){return Kn=Xn()(Zn()().mark(function ee(){var Ln,In,wn,Gn;return Zn()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.prev=0,te(),w.next=4,Qn(r,O()(O()({},an),{},{headers:Mn,signal:(Ln=_n)===null||Ln===void 0?void 0:Ln.signal}));case 4:return In=w.sent,w.next=7,ae(In);case 7:if(In.body){w.next=11;break}return on&&console.log("[sse]no body, delay 100ms"),w.next=11,cr(100);case 11:return on&&console.log("[sse]response.body",In.body),w.next=14,Dt(In.body,Mt(Bt(function(rn){rn?Mn[gr]=rn:delete Mn[gr]},function(rn){Un=rn},function(rn){te(),b==null||b(rn)})));case 14:_n=null,j==null||j(),Fn(),_(),w.next=43;break;case 20:if(w.prev=20,w.t0=w.catch(0),w.t0&&console.error("[sse]err",w.t0),!(!(f!=null&&f.aborted)&&C&&ln<C)){w.next=39;break}return w.prev=24,ln+=1,Gn=(wn=S==null?void 0:S(w.t0))!==null&&wn!==void 0?wn:Un,window.clearTimeout(Bn),typeof Gn=="number"&&(on&&console.log("[sse] retry "+ln),Bn=window.setTimeout(Vn,Gn)),w.abrupt("return",Promise.resolve());case 32:w.prev=32,w.t1=w.catch(24),on&&console.log("[sse] reject innerErr ",w.t1),Fn(),En(w.t1);case 37:w.next=43;break;case 39:on&&console.log("[sse] reject finally"),Fn(w.t0 instanceof Response||w.t0 instanceof DOMException&&w.t0.name==="AbortError"),S==null||S(w.t0),En(w.t0);case 43:case"end":return w.stop()}},ee,null,[[0,20],[24,32]])})),Kn.apply(this,arguments)}Vn()}));case 3:case"end":return Q.stop()}},e)})),Fe.apply(this,arguments)}function Ft(e){var r=e.headers.get("content-type");if(!(r!=null&&r.startsWith(Oe)))throw new Error("Expected content-type to be ".concat(Oe,", Actual: ").concat(r))}function Lt(e){return Le.apply(this,arguments)}function Le(){return Le=Xn()(Zn()().mark(function e(r){var a,f,i,m,b,j,S;return Zn()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return a=r.action,f=r.body,i=r.product,m=r.version,b=r.region,j=r.params,S={action:a,product:i,region:b,url:"/tool/sse/get.json",version:m},C.abrupt("return",vr(S,j,{content:JSON.stringify(f)}));case 3:case"end":return C.stop()}},e)})),Le.apply(this,arguments)}function It(e,r,a,f){var i=r.onMessage,m=r.onClose,b=r.onError,j=r.timeout,S=e.body,L=e.uri,C=e.headers,D=e.query,X=e.path,on=C["Content-Type"],an="".concat(L.replace(/\/$/,"")).concat(X);D&&Object.keys(D).length&&(an="".concat(an,"?").concat((0,fr.stringify)(D)));try{f.value=!1,xr(an,{method:"POST",body:on==="application/x-www-form-urlencoded"?new URLSearchParams(JSON.parse(S)):S,signal:a.signal,timeout:j,headers:C,onopen:function(bn){return bn.status!==200?Promise.reject(bn):Promise.resolve()},onmessage:function(bn){try{var Q=bn.data,_=Q===void 0?"{}":Q,En=JSON.parse(_);i==null||i(En)}catch(Mn){b==null||b(Mn)}},onclose:function(){f.value=!0,m==null||m()},onerror:function(bn){f.value=!0,m==null||m(),!(bn instanceof DOMException&&bn.name==="AbortError")&&(b==null||b(bn))}})}catch(ln){f.value=!0,b==null||b(ln),m==null||m()}}function Rt(e,r,a){return Ie.apply(this,arguments)}function Ie(){return Ie=Xn()(Zn()().mark(function e(r,a,f){var i,m,b,j;return Zn()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return i=r.onClose,m=r.onError,L.prev=1,L.next=4,Lt(r);case 4:b=L.sent,j=b.data,It(j,r,a,f),L.next=13;break;case 9:L.prev=9,L.t0=L.catch(1),i==null||i(),m==null||m(L.t0);case 13:case"end":return L.stop()}},e,null,[[1,9]])})),Ie.apply(this,arguments)}function At(e){return Re.apply(this,arguments)}function Re(){return Re=Xn()(Zn()().mark(function e(r){var a,f;return Zn()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return a=new AbortController,f={value:!0},m.next=4,Rt(r,a,f);case 4:return m.abrupt("return",{dispose:function(){f.value&&a.abort("\u53D6\u6D88\u8BF7\u6C42")}});case 5:case"end":return m.stop()}},e)})),Re.apply(this,arguments)}var Wt=n(67464);function Ht(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof e!="string")return a||console.warn(e,"is not valid json"),r?e:null;try{return JSON.parse(e)}catch(f){return a||console.warn(e,"is not valid json"),r?e:null}}function zt(e){for(var r=new TextEncoder,a=r.encode(e),f="",i=0;i<a.length;i++)f+=String.fromCharCode(a[i]);var m=btoa(f);return m}function wt(e){for(var r=atob(e),a=new Uint8Array(r.length),f=0;f<r.length;f++)a[f]=r.charCodeAt(f);var i=new TextDecoder("utf-8"),m=i.decode(a);return m}var pr=(0,p.Z)(u),hr=(0,p.Z)(y,!0),$t=(0,p.Z)(B),Ut=(0,p.Z)(V,!0)},12281:function(xn,U,n){n.d(U,{JG:function(){return R},rb:function(){return N}});var y=n(26068),u=n.n(y),V=n(67825),B=n.n(V),H=n(75271),E=["maxWidth","maxHeight"];function T(){var k;return((k=window.g_config)===null||k===void 0?void 0:k.isIntl)||!1}var R=function(s){if(navigator.clipboard)navigator.clipboard.writeText(s);else{var p=document.createElement("textarea");document.body.appendChild(p),p.style.position="fixed",p.style.clip="rect(0 0 0 0)",p.style.top="10px",p.value=s,p.select(),document.execCommand("copy",!0),document.body.removeChild(p)}},N=function(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=p.maxWidth,P=p.maxHeight,v=B()(p,E);return u()({overlayInnerStyle:{maxWidth:o||326,maxHeight:P||150,overflowY:"auto",padding:"6px 12px"},title:s,arrow:!1},v)};function W(k){return React.isValidElement(k)}function I(k){var s=k||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(s)}var h=function(s){return s>=10?s:"0".concat(s)},x=function(s){if(s<60){var p=Math.ceil(s);return"0:".concat(h(p))}var o=Math.floor(s/60),P=Math.ceil(s%60);return"".concat(h(o),":").concat(h(P))}}}]);
