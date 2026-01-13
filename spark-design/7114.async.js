"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7114],{21245:function(xn,U,n){n.d(U,{Z:function(){return p}});var y=n(26068),c=n.n(y),V=n(23655),N=n(75271),$=n(53649),D=n.n($),E=n(30764),A,T=(0,E.Z)(A||(A=D()([`

.`,"-anchor-wrapper .","-anchor .",`-anchor-link-title {
  color: var(--`,`-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.`,`-anchor-link {
  --`,`-anchor-link-padding-block: 0;
  --`,`-anchor-link-padding-inline-start: 0;
}
`])),function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),H=n(52676),R=(0,N.forwardRef)(function(g){var F=T();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(F,{}),(0,H.jsx)(V.Z,c()({},g))]})}),p=R},74659:function(xn,U,n){n.d(U,{Z:function(){return h}});var y=n(60213),c=n(94662),V=n(22576),N=n(79055),$=n(98539),D=n(87539),E=n(43339),A=n(14395),T=n(75271),H=n(53649),R=n.n(H),p=n(30764),g,F=(0,p.Z)(g||(g=R()([`
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
`])),function(v){return v.sparkPrefix},function(v){return v.sparkPrefix},function(v){return v.sparkPrefix},function(v){return v.sparkPrefix},function(v){return v.antPrefix}),s=n(52676),x=function(t){var d=Math.floor(t/60),l=Math.floor(t%60);return"".concat(d.toString().padStart(2,"0"),":").concat(l.toString().padStart(2,"0"))},o=function(t){var d=t.className,l=t.isPlaying,k=t.onPlayPause,u=t.onFullscreen,B=t.onProgressClick,P=t.enableVolume,Z=P===void 0?!1:P,X=t.enableFullscreen,K=t.muted,G=K===void 0?!0:K,q=t.onMute,w=F(),en=(0,y.getCommonConfig)(),sn=en.sparkPrefix,mn=(0,T.useMemo)(function(){return x(t.currentTime||0)},[t.currentTime]),un=(0,T.useMemo)(function(){return x(t.duration||0)},[t.duration]),En=(0,T.useMemo)(function(){return Math.min((t.currentTime||0)/(t.duration||.01)*100,100)},[t.currentTime,t.duration]),cn=function(hn){if(!(!B||!t.duration)){var Pn=hn.currentTarget.getBoundingClientRect(),tn=hn.clientX-Pn.left,jn=Pn.width,dn=tn/jn,Y=dn*t.duration,J=Math.max(0,Math.min(Y,t.duration));B(J)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w,{}),(0,s.jsxs)("div",{className:"".concat(sn,"-media-player-controller ").concat(d||""),children:[(0,s.jsx)(c.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:l?(0,s.jsx)(N.Z,{}):(0,s.jsx)($.Z,{}),onClick:k}),(0,s.jsx)(c.Z,{bordered:!1,size:"small",shape:"default",disabled:!Z,icon:Z&&G?(0,s.jsx)(D.Z,{}):(0,s.jsx)(E.Z,{}),onClick:q}),(0,s.jsx)("span",{className:"".concat(sn,"-media-time-text"),children:mn}),(0,s.jsx)("div",{className:"".concat(sn,"-media-progress-container"),onClick:cn,children:(0,s.jsx)(V.Z,{className:"".concat(sn,"-media-progress-bar"),percent:En,showInfo:!1})}),(0,s.jsx)("span",{className:"".concat(sn,"-media-time-text"),children:un}),X&&(0,s.jsx)(c.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,s.jsx)(A.Z,{}),onClick:u})]})]})},h=o},8639:function(xn,U,n){n.d(U,{Z:function(){return d}});var y=n(26068),c=n.n(y),V=n(48305),N=n.n(V),$=n(67825),D=n.n($),E=n(75271),A=n(82187),T=n.n(A),H=n(74659),R=n(32547),p=n(60213),g=n(53649),F=n.n(g),s=n(30764),x,o=(0,s.Z)(x||(x=F()([`
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
`])),function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix}),h=n(52676),v=["controls","className","style"],t=(0,E.forwardRef)(function(l,k){var u=l.controls,B=l.className,P=l.style,Z=D()(l,v),X=(0,p.getCommonConfig)(),K=X.sparkPrefix,G=o(),q=(0,E.useState)(0),w=N()(q,2),en=w[0],sn=w[1],mn=(0,E.useState)(0),un=N()(mn,2),En=un[0],cn=un[1],O=(0,E.useState)(!1),hn=N()(O,2),Pn=hn[0],tn=hn[1],jn=(0,R.Z)(l,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!1}),dn=N()(jn,2),Y=dn[0],J=dn[1],fn=(0,E.useRef)(null),vn=function(Nn){fn.current=Nn,k&&(typeof k=="function"?k(Nn):k.current=Nn)};(0,E.useEffect)(function(){var Tn;return Pn&&(Tn=setInterval(function(){fn.current&&sn(fn.current.currentTime)},16)),function(){Tn&&clearInterval(Tn)}},[Pn]);var Cn=function(Nn){var Sn;fn.current&&cn(fn.current.duration),(Sn=Z.onLoadedMetadata)===null||Sn===void 0||Sn.call(Z,Nn)},Mn=function(){fn.current&&(Pn?fn.current.pause():fn.current.play(),tn(!Pn))},pn=function(Nn){var Sn;tn(!0),(Sn=Z.onPlay)===null||Sn===void 0||Sn.call(Z,Nn)},L=function(Nn){var Sn;tn(!1),(Sn=Z.onPause)===null||Sn===void 0||Sn.call(Z,Nn)},Fn=function(Nn){var Sn,Rn;tn(!1),sn(((Sn=fn.current)===null||Sn===void 0?void 0:Sn.duration)||0),(Rn=Z.onEnded)===null||Rn===void 0||Rn.call(Z,Nn)},bn=function(Nn){fn.current&&(fn.current.currentTime=Nn,sn(Nn))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(G,{}),(0,h.jsxs)("div",{className:T()("".concat(K,"-audio-container"),B),style:P,children:[(0,h.jsx)("audio",c()(c()({ref:vn},Z),{},{muted:Y,className:"".concat(K,"-audio-element"),onLoadedMetadata:Cn,onPlay:pn,onPause:L,onEnded:Fn})),(0,h.jsx)(H.Z,{className:"".concat(K,"-audio-controller-wrapper"),isPlaying:Pn,currentTime:en,duration:En,enableVolume:!0,enableFullscreen:!1,muted:Y,onMute:function(){return J(!Y)},onPlayPause:Mn,onProgressClick:bn})]})]})}),d=t},93178:function(xn,U,n){n.d(U,{Z:function(){return o}});var y=n(26068),c=n.n(y),V=n(48305),N=n.n(V),$=n(67825),D=n.n($),E=n(67487),A=n(75271),T=n(53649),H=n.n(T),R=n(30764),p,g=(0,R.Z)(p||(p=H()([`
.`,`-avatar {
  cursor: default;
}
`])),function(h){return h.antPrefix}),F=n(52676),s=["children"],x=(0,A.forwardRef)(function(h,v){var t=g(),d=h.children,l=D()(h,s),k=(0,A.useState)(h.children),u=N()(k,2),B=u[0],P=u[1];return(0,A.useEffect)(function(){if(typeof d=="string"){P(Array.from(d)[0]);return}if(typeof d=="number"){P(Array.from(String(d))[0]);return}P(d)},[d]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(t,{}),(0,F.jsx)(E.Z,c()(c()({ref:v},l),{},{children:B}))]})}),o=x},40:function(xn,U,n){n.d(U,{Z:function(){return v}});var y=n(26068),c=n.n(y),V=n(67825),N=n.n(V),$=n(3999),D=n(67487),E=n(44201),A=n(11691),T=n(75271),H=n(60213),R=n(53649),p=n.n(R),g=n(30764),F,s=(0,g.Z)(F||(F=p()([`
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
`])),function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix}),x=n(52676),o=["items"],h=function(d){var l=d.items,k=l===void 0?[]:l,u=N()(d,o),B=(0,H.getCommonConfig)(),P=B.sparkPrefix,Z=s(),X=T.useMemo(function(){return k.map(function(K){var G=K.title,q=[];return K.iconUrl&&q.push((0,x.jsx)(D.Z,{size:20,src:K.iconUrl},"avatar")),K.dropdown?q.push((0,x.jsxs)("span",{className:"".concat(P,"-breadcrumb-dropdown-title"),children:[K.title,(0,x.jsx)($.Z,{size:16})]},"title")):q.push((0,x.jsx)("span",{children:K.title},"title")),K.dropdown?G=(0,x.jsx)(E.Z,{menu:{items:K.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(P,"-breadcrumb-dropdown"),children:(0,x.jsx)("span",{children:q})}):(K.iconUrl||q.length>1)&&(G=(0,x.jsx)("span",{className:"".concat(P,"-breadcrumb-item-content"),children:q})),c()(c()({},K),{},{title:G})})},[k]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Z,{}),(0,x.jsx)(A.Z,c()(c()({},u),{},{items:X,className:"".concat(P,"-breadcrumb ").concat(u.className||"")}))]})},v=h},61902:function(xn,U,n){n.d(U,{Z:function(){return x}});var y=n(26068),c=n.n(y),V=n(67825),N=n.n(V),$=n(60213),D=n(85770),E=n(82187),A=n.n(E),T=n(53649),H=n.n(T),R=n(30764),p,g=(0,R.Z)(p||(p=H()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix}),F=n(52676),s=["title","info","children","className"],x=function(o){var h=o.title,v=o.info,t=o.children,d=o.className,l=N()(o,s),k=g(),u=(0,$.getCommonConfig)(),B=u.sparkPrefix;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(k,{}),(0,F.jsx)(D.Z,c()(c()({className:A()("".concat(B,"-card"),d)},l),{},{title:null,children:(0,F.jsxs)("div",{className:"".concat(B,"-card-wrapper"),children:[h&&(0,F.jsx)("div",{className:"".concat(B,"-title"),children:h}),v&&(0,F.jsx)("div",{className:"".concat(B,"-info"),children:v}),t&&(0,F.jsx)("div",{className:"".concat(B,"-content"),children:t})]})}))]})}},98618:function(xn,U,n){n.d(U,{Z:function(){return x}});var y=n(26068),c=n.n(y),V=n(67825),N=n.n(V),$=n(10758),D=n(75271),E=n(60213),A=n(53649),T=n.n(A),H=n(30764),R,p=(0,H.Z)(R||(R=T()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),g=n(52676),F=["description","descriptionClassName","descriptionStyle","children"],s=function(h){var v=h.description,t=h.descriptionClassName,d=h.descriptionStyle,l=h.children,k=N()(h,F),u=(0,E.getCommonConfig)(),B=u.antPrefix,P=u.sparkPrefix,Z=p(),X={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(B,"-color-text-tertiary)")};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Z,{}),(0,g.jsxs)("div",{className:"".concat(P,"-checkbox"),children:[(0,g.jsx)($.Z,c()(c()({},k),{},{children:l})),v&&(0,g.jsx)("div",{className:t,style:c()(c()({},X),d),children:v})]})]})};s.Group=$.Z.Group;var x=s},49570:function(xn,U,n){n.d(U,{ZP:function(){return En},xO:function(){return en}});var y=n(26068),c=n.n(y),V=n(15558),N=n.n(V),$=n(60213),D=n(28331),E=n(5012),A=n(2607),T=n(91237),H=n(44573),R=n(12652),p=n(23201),g=n(18932),F=n(37441),s=n(99362),x=n(68147),o=n(70300),h=n(24365),v=n(33792),t=n(86112),d=n(18893),l=n(72771),k=n(82187),u=n.n(k),B=n(28640),P=n(75271),Z=n(53649),X=n.n(Z),K=n(30764),G,q=(0,K.Z)(G||(G=X()([`
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
`])),function(cn){return cn.sparkPrefix},function(cn){return cn.antPrefix},function(cn){return cn.antPrefix},function(cn){return cn.antPrefix},function(cn){return cn.antPrefix},function(cn){return cn.antPrefix},function(cn){return cn.antPrefix},function(cn){return cn.antPrefix},function(cn){return cn.antPrefix},function(cn){return cn.antPrefix},function(cn){return cn.antPrefix}),w=n(52676),en={javascript:[(0,g.eJ)()],jsx:[(0,g.eJ)()],python:[(0,o.Vs)()],json:[(0,F.AV)()],java:[(0,p.C)()],yaml:[(0,h.rV)()],php:[(0,x.h)()],go:[(0,H.go)()],csharp:[(0,A.N)()],css:[(0,T.iv)()],html:[(0,R.dy)()],curl:[],markdown:[(0,s.JH)()]},sn={javascript:[(0,v.Q2)()],json:[(0,v.Q2)(),(0,v.ir)((0,F.ap)())]},mn=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"{}",hn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,Pn=O;try{Pn=JSON.stringify(JSON.parse(O),null,hn)}catch(tn){}return Pn},un=function(O){var hn,Pn=(0,$.getCommonConfig)(),tn=P.useContext(D.ZP.ConfigContext),jn=((hn=tn.theme)===null||hn===void 0?void 0:hn.algorithm)===l.Z.darkAlgorithm,dn=Pn.sparkPrefix,Y=q(),J=(0,P.useMemo)(function(){return O.theme===void 0?jn?t.Pc:t.Zp:O.theme==="dark"?t.Pc:t.Zp},[jn,O.theme]),fn=typeof O.language=="string"?[].concat(N()(en[O.language]||[]),N()(O.value&&O.language in sn?sn[O.language]:[])):O.language.reduce(function(Mn,pn){return[].concat(N()(Mn),[en[pn]])},[]),vn=(0,w.jsx)("div",{className:u()("".concat(dn,"-code-block"),O.className),children:(0,w.jsx)(d.ZP,c()({extensions:fn,value:O.language==="json"?mn(O.value||""):O.value||"",theme:J},(0,B.Z)(O,["language","theme","extensions","value"])))});if(O.theme!==void 0){var Cn=O.theme==="dark"?E.bailianDarkTheme:E.bailianTheme;return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(D.ZP,c()(c()({},Cn),{},{children:[(0,w.jsx)(Y,{}),vn]}))})}return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Y,{}),vn]})},En=un},94684:function(xn,U,n){n.d(U,{Z:function(){return R}});var y=n(26068),c=n.n(y),V=n(24198),N=n(53649),$=n.n(N),D=n(30764),E,A=(0,D.Z)(E||(E=$()([`
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
`])),function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix}),T=n(52676),H=function(g){var F=A();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(F,{}),(0,T.jsx)(V.Z,c()({},g))]})},R=H},61406:function(xn,U,n){n.d(U,{Z:function(){return t}});var y=n(26068),c=n.n(y),V=n(82092),N=n.n(V),$=n(48305),D=n.n($),E=n(60213),A=n(3999),T=n(16879),H=n(82187),R=n.n(H),p=n(75271),g=n(53649),F=n.n(g),s=n(30764),x,o=(0,s.Z)(x||(x=F()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix}),h=n(52676),v=function(l){var k,u,B,P,Z,X,K=l.collapsedHeight,G=l.expandedHeight,q=l.title,w=q===void 0?"":q,en=l.expandOnPanelClick,sn=l.extra,mn=l.children,un=l.defaultExpanded,En=(0,p.useState)(un),cn=D()(En,2),O=cn[0],hn=cn[1],Pn=(0,p.useState)(!0),tn=D()(Pn,2),jn=tn[0],dn=tn[1],Y=(0,p.useState)(K),J=D()(Y,2),fn=J[0],vn=J[1],Cn=(0,p.useRef)(null),Mn=(0,E.getCommonConfig)(),pn=Mn.sparkPrefix,L=Mn.antPrefix,Fn=o();(0,p.useEffect)(function(){Cn.current&&vn(O&&G?G:O?Cn.current.scrollHeight:K)},[O,K,G,mn]);var bn=function($n){$n.stopPropagation(),$n.preventDefault(),hn(function(Yn){return!Yn})},Tn=function($n){$n.stopPropagation(),$n.preventDefault(),O||hn(!0)},Nn=function(){dn(!0)},Sn=function(){dn(!0)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Fn,{}),(0,h.jsxs)("div",{className:R()("".concat(pn,"-collapse-panel"),{collapsible:!O&&en},(k=l.classNames)===null||k===void 0?void 0:k.wrapper),style:(u=l.styles)===null||u===void 0?void 0:u.wrapper,onClick:en?Tn:void 0,onMouseEnter:en?Nn:void 0,onMouseLeave:en?Sn:void 0,children:[(0,h.jsxs)("div",{className:R()("".concat(pn,"-collapse-panel-header"),(B=l.classNames)===null||B===void 0?void 0:B.header),style:(P=l.styles)===null||P===void 0?void 0:P.header,onClick:bn,children:[(0,h.jsxs)("span",{className:"".concat(pn,"-collapse-panel-title"),children:[w,(0,h.jsxs)("div",{className:"".concat(pn,"-collapse-panel-icon-wrapper"),children:[!O&&jn&&en&&(0,h.jsx)(A.Z,{style:{fontSize:"18px"}}),O&&jn&&en&&(0,h.jsx)(T.Z,{style:{fontSize:"18px"}})]})]}),sn&&(0,h.jsx)("div",{className:"".concat(pn,"-collapse-panel-extra"),onClick:function($n){$n.stopPropagation(),$n.preventDefault()},children:sn})]}),(0,h.jsxs)("div",{className:R()("".concat(pn,"-collapse-panel-content"),N()({},"".concat(pn,"-collapse-panel-expanded"),O),(Z=l.classNames)===null||Z===void 0?void 0:Z.content),style:c()({height:fn},(X=l.styles)===null||X===void 0?void 0:X.content),children:[(0,h.jsx)("div",{ref:Cn,className:"".concat("".concat(pn,"-collapse-panel-contentWrapper")," ",O&&G?"scrollable":""),children:mn}),!O&&(0,h.jsx)("div",{className:"".concat(pn,"-collapse-panel-mask")})]})]})]})},t=v},84360:function(xn,U,n){n.d(U,{Z:function(){return k}});var y=n(26068),c=n.n(y),V=n(67825),N=n.n(V),$=n(60213),D=n(57216),E=n(72771),A=n(86137),T=n(87133),H=n(82187),R=n.n(H),p=n(75271),g=n(53649),F=n.n(g),s=n(30764),x,o=(0,s.Z)(x||(x=F()([`
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
`])),function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix}),h=n(52676),v=["className","popupClassName"],t=["className","popupClassName"],d=function(B){var P=B.className,Z=B.popupClassName,X=N()(B,v),K=E.Z.useToken(),G=K.token,q=(0,$.getCommonConfig)(),w=q.sparkPrefix,en=o();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(en,{}),(0,h.jsx)(A.ZP,{theme:{components:{DatePicker:{activeBorderColor:G.colorPrimary,paddingInline:8}}},children:(0,h.jsx)(T.default,c()({suffixIcon:(0,h.jsx)(D.Z,{style:{fontSize:"20px"}}),className:R()("".concat(w,"-picker"),P),popupClassName:R()("".concat(w,"-picker-dropdown"),Z)},X))})]})},l=function(B){var P=B.className,Z=B.popupClassName,X=N()(B,t),K=E.Z.useToken(),G=K.token,q=(0,$.getCommonConfig)(),w=q.sparkPrefix,en=o();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(en,{}),(0,h.jsx)(A.ZP,{theme:{components:{DatePicker:{activeBorderColor:G.colorPrimary,paddingInline:8}}},children:(0,h.jsx)(T.default.RangePicker,c()({suffixIcon:(0,h.jsx)(D.Z,{style:{fontSize:"20px"}}),className:R()("".concat(w,"-picker"),P),popupClassName:R()("".concat(w,"-picker-dropdown"),Z),popupStyle:{padding:0}},X))})]})};d.RangePicker=l;var k=d},62518:function(xn,U,n){n.d(U,{Z:function(){return t}});var y=n(82092),c=n.n(y),V=n(26068),N=n.n(V),$=n(67825),D=n.n($),E=n(60213),A=n(72771),T=n(3307),H=n(82187),R=n.n(H),p=n(53649),g=n.n(p),F=n(30764),s,x=(0,F.Z)(s||(s=g()([`
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
`])),function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),o=n(52676),h=["className","layout","colon","style"],v=function(l){var k,u,B=x(),P=l.className,Z=l.layout,X=l.colon,K=X===void 0?!1:X,G=l.style,q=D()(l,h),w=(0,E.getCommonConfig)(),en=w.antPrefix,sn=A.Z.useToken(),mn=sn.token;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(B,{}),(0,o.jsx)(T.Z,N()({className:R()(P,Z==="vertical"&&"".concat(en,"-descriptions-vertical")),layout:Z,colon:K,style:N()(c()(c()({},"--".concat(en,"-descriptions-vertical-label-padding-bottom"),"".concat((k=mn.Descriptions.verticalLabelPaddingBottom)!==null&&k!==void 0?k:4,"px")),"--".concat(en,"-descriptions-vertical-content-padding-bottom"),"".concat((u=mn.Descriptions.verticalContentPaddingBottom)!==null&&u!==void 0?u:24,"px")),G)},q))]})},t=v},38356:function(xn,U,n){n.d(U,{Z:function(){return F}});var y=n(26068),c=n.n(y),V=n(60213),N=n(68278),$=n(44201),D=n(75271),E=n(53649),A=n.n(E),T=n(30764),H,R=(0,T.Z)(H||(H=A()([`
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
`])),function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),p=n(52676),g=function(x){var o,h,v=(0,V.getCommonConfig)(),t=v.antPrefix,d=(0,D.useMemo)(function(){var k;if(!((k=x.menu)!==null&&k!==void 0&&k.selectable)||!x.menu){var u;return((u=x.menu)===null||u===void 0?void 0:u.items)||[]}return x.menu.items.map(function(B){var P={},Z=B.label;return Z&&(P.label=(0,p.jsxs)("div",{className:"".concat(t,"-dropdown-check-wrapper"),children:[Z,(0,p.jsx)("span",{className:"".concat(t,"-dropdown-check-icon"),children:(0,p.jsx)(N.Z,{})})]})),c()(c()({},B),P)})},[(o=x.menu)===null||o===void 0?void 0:o.items,(h=x.menu)===null||h===void 0?void 0:h.selectable]),l=R();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{}),(0,p.jsx)($.Z,c()(c()({},x),{},{menu:c()(c()({},x.menu),{},{items:d}),overlayStyle:c()({},x.overlayStyle)}))]})},F=g},49327:function(xn,U,n){n.d(U,{Z:function(){return d}});var y=n(26068),c=n.n(y),V=n(60213),N=n(90264),$=n(75271),D=n(60823),E=n(53649),A=n.n(E),T=n(30764),H,R=(0,T.Z)(H||(H=A()([`
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
`])),function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix}),p=n(48305),g=n.n(p),F=n(19215),s=n(52676),x=document.querySelector("#empty-svg-container");function o(l){var k=(0,F.ZP)(),u=g()(k,5),B=u[4],P=l.svgUrl,Z=l.tokenMap,X=Z===void 0?{}:Z,K=l.className,G=l.size,q=P.includes(".svg"),w=(0,$.useState)(""),en=g()(w,2),sn=en[0],mn=en[1];return(0,$.useEffect)(function(){if(!x){var un=document.createElement("div");un.innerHTML="<svg></svg>",x=un.querySelector("svg"),x.id="empty-svg-container",x.setAttribute("aria-hidden","true"),x.style.position="absolute",x.style.width="0",x.style.height="0",x.style.overflow="hidden",document.body.insertBefore(x,document.body.firstChild)}},[]),(0,$.useEffect)(function(){x&&B!==null&&B!==void 0&&B.key&&(x.classList.forEach(function(un){return x.classList.remove(un)}),x.classList.add(B.key))},[B==null?void 0:B.key]),(0,$.useEffect)(function(){if(q){var un=btoa(P),En='<svg><use xlink:href="#'.concat(un,'"></use></svg>');if(mn(En),!document.getElementById(un)){var cn='<symbol id="'.concat(un,'"></symbol>');x.innerHTML=x.innerHTML+cn,fetch(P).then(function(O){return O.text()}).then(function(O){var hn=O;Object.keys(X).forEach(function(Y){hn=hn.replace(new RegExp(Y,"g"),X[Y])});var Pn=hn.match(/viewBox="([^"]*)"/),tn=Pn?Pn[1]:"",jn=document.getElementById(un),dn=hn.replace(/<svg[^>]*>/,"");dn=dn.replace(/<\/svg>/,""),tn&&jn.setAttribute("viewBox",tn),jn.innerHTML=dn})}}},[P]),q?(0,s.jsx)("div",{className:K,dangerouslySetInnerHTML:{__html:sn},style:{width:G,height:G}}):(0,s.jsx)("img",{src:P,className:K,style:{width:G,height:G}})}var h={url:"https://gw.alicdn.com/imgextra/i3/O1CN01r3f3Si24iFTRz9Bho_!!6000000007424-55-tps-320-320.svg",tokenMap:{"#CDD0DC":"color-border"}},v={noData:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01mWN5tE1MAxb2z7LwA_!!6000000001395-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#BCB5FF":"color-primary-border-hover","#FFFFFF":"color-bg-base","#615CED":"color-primary","#1ACDD0DC":"color-fill-quaternary","#CDD0DC":"color-border"}},networkError:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01su6GHG1RupL5K5TOQ_!!6000000002172-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},404:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01GE0jXZ1xpqjvMjCZh_!!6000000006493-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#26CDD0DC":"color-fill-tertiary","#CDD0DC":"color-border","#F3F0FF":"color-primary-bg","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},arrears:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01xN8uYv1Dz2MLvrFAF_!!6000000000286-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#F3F0FF":"color-primary-bg","#615CED":"color-primary"}},desktopOnly:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01ZzNku41rshVhRVh9x_!!6000000005687-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},noAudio:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01fTQ6vi1GXxnIrmizf_!!6000000000633-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#615CED":"color-primary","#E6E8EE":"color-border-secondary"}},noImage:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01zQAH9A1oJUD9XDtmi_!!6000000005204-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noVideo:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01kqss5i1JuoOrJ8fNV_!!6000000001089-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noAccess:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01RwpRz91oGHREFlmdY_!!6000000005197-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}},error:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01TlQR4c1L3nn4DkG2z_!!6000000001244-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noChat:{url:"https://img.alicdn.com/imgextra/i3/O1CN014KyRst1w9QT51V8Yx_!!6000000006265-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#615CED":"color-primary","#CDD0DC":"color-border"}},noModel:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01BSPmLi1iaXGByjbne_!!6000000004429-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#5CCDD0DC":"color-fill","#615CED":"color-primary"}},noApp:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01stSIP31fzmEtpppWc_!!6000000004078-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#33CDD0DC":"color-fill-secondary","#615CED":"color-primary"}},success:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01sGzZ5B1Bx5RQAjUe5_!!6000000000011-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#5BB98B":"color-success","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},failed:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01Fd1Gmx1QNYxQ8hj0H_!!6000000001964-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FF7875":"color-error-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},inProgress:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01w2RXic1LADKqVxH56_!!6000000001258-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#9189FA":"color-primary-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},stayTuned:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01W2Kbyc26dmqmatyoB_!!6000000007685-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}}},t=function(k){var u=k.imageStyle,B=k.title,P=k.description,Z=P===void 0?"No Data":P,X=k.children,K=k.texture,G=K===void 0?!0:K,q=k.size,w=q===void 0?320:q,en=k.autoFit,sn=en===void 0?!0:en,mn=k.okText,un=k.okType,En=un===void 0?"primary":un,cn=k.okButtonProps,O=k.onOk,hn=k.type||"noData",Pn=(0,V.getCommonConfig)(),tn=Pn.sparkPrefix,jn=Pn.isDarkMode,dn=Pn.antPrefix,Y=k.image||v[hn].url,J=(0,$.useMemo)(function(){var pn,L=c()({},(pn=v[hn])===null||pn===void 0?void 0:pn.tokenMap);return L&&Object.keys(L).forEach(function(Fn){L[Fn]="var(--".concat(dn,"-").concat(L[Fn],")")}),L},[hn]),fn=(0,$.useMemo)(function(){var pn=c()({},h.tokenMap);return Object.keys(pn).forEach(function(L){pn[L]="var(--".concat(dn,"-").concat(pn[L],")")}),pn},[jn]),vn=R(),Cn=typeof w=="string"?parseFloat(w.replace(/px/i,"")):w!=null?w:0,Mn=sn?{maxWidth:"100%",aspectRatio:"1 / 1",width:w,height:"auto"}:{width:w,height:w};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(vn,{}),(0,s.jsxs)("div",{className:"".concat(tn,"-empty ").concat(k.className||""),style:c()(c()({},Mn),u),children:[G&&(0,s.jsx)(o,{size:sn?"100%":w,svgUrl:h.url,tokenMap:fn,className:"".concat(tn,"-empty-texture")}),(0,s.jsx)(o,{size:sn?"100%":w,svgUrl:Y,tokenMap:J,className:"".concat(tn,"-empty-image")}),(0,s.jsxs)(N.Z,{vertical:!0,align:"center",style:{marginTop:"52.5%"},children:[B&&(0,s.jsx)("div",{className:"".concat(tn,"-empty-title"),style:{marginBottom:Z?.025*Cn:0},children:B}),Z&&(0,s.jsx)("div",{className:"".concat(tn,"-empty-description"),children:Z}),!!mn&&(0,s.jsx)("div",{style:{marginTop:.05*Cn},children:(0,s.jsx)(D.Z,c()(c()({type:En,onClick:O},cn),{},{children:mn}))}),!!X&&(0,s.jsx)("div",{style:{marginTop:.05*Cn},children:X})]})]})]})},d=t},90895:function(xn,U,n){n.d(U,{Z:function(){return P}});var y=n(31759),c=n.n(y),V=n(26068),N=n.n(V),$=n(67825),D=n.n($),E=n(60213),A=n(62910),T=n(48290),H=n(85618),R=n(82187),p=n.n(R),g=n(75271),F=n(53649),s=n.n(F),x=n(30764),o,h=(0,x.Z)(o||(o=s()([`
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
`])),function(Z){return Z.sparkPrefix},function(Z){return Z.sparkPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.sparkPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix}),v=n(52676),t=["labelMarginRight"],d=["tooltip"],l=(0,g.forwardRef)(function(Z,X){var K=Z.labelMarginRight,G=K===void 0?void 0:K,q=D()(Z,t),w=(0,g.useRef)(null),en=(0,E.getCommonConfig)(),sn=en.sparkPrefix,mn=h();return(0,g.useImperativeHandle)(X,function(){return w.current}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(mn,{}),(0,v.jsx)(T.Z,N()(N()({},q),{},{className:p()(Z.className,"".concat(sn,"-form"),G==="small"&&"".concat(sn,"-form-label-margin-small")),ref:w,requiredMark:function(En,cn){return(0,v.jsxs)(v.Fragment,{children:[En,cn.required&&(0,v.jsx)("span",{className:"".concat(sn,"-required-mark"),children:"*"})]})}}))]})}),k=function(X){var K=X.tooltip,G=D()(X,d),q=(0,v.jsx)(A.Z,{});function w(){if(K){var en=c()(K)==="object"&&!g.isValidElement(K)?N()(N()({},K),{},{icon:K.icon||q}):{title:K,icon:q};return en}}return(0,v.jsx)(T.Z.Item,N()(N()({},G),{},{tooltip:w(),labelCol:X.labelCol||(X.layout==="vertical"?{flex:"unset"}:void 0)}))},u=k;u.useStatus=H.Z.useStatus;var B=l;B.Item=u,B.List=T.Z.List,B.ErrorList=T.Z.ErrorList,B.Provider=T.Z.Provider,B.useForm=T.Z.useForm,B.useFormInstance=T.Z.useFormInstance,B.useWatch=T.Z.useWatch;var P=B},70344:function(xn,U,n){n.d(U,{Z:function(){return x}});var y=n(26068),c=n.n(y),V=n(40965),N=n(60213),$=n(5045),D=n(92931),E=n(75271),A=n(53649),T=n.n(A),H=n(30764),R,p=(0,H.Z)(R||(R=T()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),g=n(52676),F=function(h){var v=p(),t=(0,N.getCommonConfig)(),d=t.antPrefix,l=(0,E.useMemo)(function(){var k={transitionName:""},u=h.preview;return u===!1?!1:u===!0?k:c()(c()({mask:(0,g.jsxs)("div",{className:"".concat(d,"-image-mask-info"),children:[(0,g.jsx)($.Z,{className:"".concat(d,"-image-mask-info-icon")}),(0,g.jsx)("span",{className:"".concat(d,"-image-mask-info-text"),children:V.Z.get({id:"components.commonComponents.Image.Preview",dm:"\u9884\u89C8"})})]})},u),k)},[h.preview]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v,{}),(0,g.jsx)(D.Z,c()({preview:l},h))]})},s=F;s.PreviewGroup=D.Z.PreviewGroup;var x=s},38734:function(xn,U,n){n.d(U,{Z:function(){return d}});var y=n(26068),c=n.n(y),V=n(82092),N=n.n(V),$=n(67825),D=n.n($),E=n(60213),A=n(92108),T=n(82187),H=n.n(T),R=n(75271),p=n(53649),g=n.n(p),F=n(30764),s,x=(0,F.Z)(s||(s=g()([`
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
`])),function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix}),o=n(52676),h=["shape"],v=R.forwardRef(function(l,k){var u=l.shape,B=u===void 0?"default":u,P=D()(l,h),Z=(0,E.getCommonConfig)(),X=Z.antPrefix,K=x();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(K,{}),(0,o.jsx)(A.Z,c()(c()({},P),{},{className:H()(l.className,N()({},"".concat(X,"-input-round"),B==="round")),ref:k}))]})}),t=R.forwardRef(function(l,k){var u=(0,E.getCommonConfig)(),B=u.antPrefix,P=x();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P,{}),(0,o.jsx)(A.Z.TextArea,c()(c()({},l),{},{className:H()("".concat(B,"-text-area"),l.className),ref:k}))]})});Object.assign(v,{TextArea:t,Search:A.Z.Search,Password:A.Z.Password,OTP:A.Z.OTP});var d=v},3983:function(xn,U,n){n.d(U,{Z:function(){return t}});var y=n(26068),c=n.n(y),V=n(82092),N=n.n(V),$=n(67825),D=n.n($),E=n(60213),A=n(6002),T=n(91301),H=n(82187),R=n.n(H),p=n(53649),g=n.n(p),F=n(30764),s,x=(0,F.Z)(s||(s=g()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),o=n(52676),h=["showDivider","closable"],v=function(l){var k=x(),u=(0,E.getCommonConfig)(),B=u.sparkPrefix,P=l.showDivider,Z=P===void 0?!0:P,X=l.closable,K=X===void 0?!0:X,G=D()(l,h),q=function(mn){return l.info?(0,o.jsxs)("div",{className:"".concat(B,"-modal-footer-wrapper"),children:[(0,o.jsx)("span",{className:"".concat(B,"-modal-footer-info"),children:l.info}),(0,o.jsx)("div",{className:"".concat(B,"-modal-footer-origin-node"),children:mn})]}):mn},w=K?l.closeIcon||(0,o.jsx)(A.Z,{className:"".concat(B,"-modal-title-close"),onClick:function(mn){var un;(un=l.onCancel)===null||un===void 0||un.call(l,mn)}}):null,en=l.footer===void 0?q:l.footer;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{}),(0,o.jsx)(T.Z,c()(c()({},G),{},{closeIcon:null,title:(0,o.jsxs)("div",{className:"".concat(B,"-modal-title-wrapper"),children:[(0,o.jsx)("div",{className:"".concat(B,"-modal-title"),children:l.title}),w]}),wrapClassName:R()("".concat(B,"-modal"),N()({},"".concat(B,"-show-divider"),Z),l.wrapClassName,"animate-in"),footer:en,transitionName:""}))]})};v.useModal=T.Z.useModal,v.success=T.Z.success,v.error=T.Z.error,v.warning=T.Z.warning,v.info=T.Z.info,v.confirm=T.Z.confirm,v.SMALL_WIDTH=640,v.MEDIUM_WIDTH=800,v.LARGE_WIDTH=960;var t=v},94361:function(xn,U,n){var y=n(48305),c=n.n(y),V=n(26068),N=n.n(V),$=n(60213),D=n(72566),E=n(68811),A=n(20855),T=n(18908),H=n(3749),R=n(52676),p=["success","warning","error","info"];function g(s,x){if(s==="success")return(0,R.jsx)(D.Z,{style:{color:"var(--".concat(x,"-color-success)"),fontSize:24}});if(s==="warning")return(0,R.jsx)(E.Z,{style:{color:"var(--".concat(x,"-color-warning)"),fontSize:24}});if(s==="info")return(0,R.jsx)(A.Z,{style:{color:"var(--".concat(x,"-color-info)"),fontSize:24}});if(s==="error")return(0,R.jsx)(T.Z,{style:{color:"var(--".concat(x,"-color-error)"),fontSize:24}})}var F={};F.destroy=H.ZP.destroy,F.open=function(s){var x=(0,$.getCommonConfig)(),o=x.sparkPrefix,h="".concat(o,"-notification");s.className&&(h+=" ".concat(s.className)),H.ZP.open(N()(N()({},s),{},{className:h}))},p.forEach(function(s){F[s]=function(x){var o=(0,$.getCommonConfig)(),h=o.sparkPrefix,v=o.antPrefix,t="".concat(h,"-notification");x.className&&(t+=" ".concat(x.className)),H.ZP[s](N()(N()({},x),{},{className:t,icon:g(s,v)}))}}),F.useNotification=function(s){var x=(0,$.getCommonConfig)(),o=x.sparkPrefix,h=x.antPrefix,v="".concat(o,"-notification"),t=H.ZP.useNotification(s),d=c()(t,2),l=d[0],k=d[1],u={};return p.forEach(function(B){u[B]=function(P){return l[B](N()(N()({},P),{},{className:v,icon:g(B,h)}))}}),u.open=function(B){H.ZP.open(N()(N()({},B),{},{className:v}))},u.destroy=l.destroy,[u,k]},U.Z=F},47525:function(xn,U,n){n.d(U,{X:function(){return $}});var y=n(53649),c=n.n(y),V=n(30764),N,$=(0,V.Z)(N||(N=c()([`
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
`])),function(D){return D.antPrefix},function(D){return D.antPrefix},function(D){return D.antPrefix},function(D){return D.antPrefix},function(D){return D.antPrefix},function(D){return D.antPrefix},function(D){return D.antPrefix},function(D){return D.antPrefix},function(D){return D.antPrefix},function(D){return D.antPrefix},function(D){return D.antPrefix},function(D){return D.antPrefix},function(D){return D.antPrefix},function(D){return D.antPrefix},function(D){return D.antPrefix})},85525:function(xn,U,n){var y=n(26068),c=n.n(y),V=n(31759),N=n.n(V),$=n(67825),D=n.n($),E=n(60213),A=n(40965),T=n(86319),H=n(16979),R=n(34232),p=n(90264),g=n(89550),F=n(82187),s=n.n(F),x=n(47525),o=n(52676),h=["hideSwitchButton","className"],v=function(){var d=A.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"}),l=A.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"});return{options:[{label:"10 ".concat(d," / ").concat(l),value:10},{label:"20 ".concat(d," / ").concat(l),value:20},{label:"50 ".concat(d," / ").concat(l),value:50},{label:"100 ".concat(d," / ").concat(l),value:100}]}};U.Z=function(t){var d=t.hideSwitchButton,l=d===void 0?!1:d,k=t.className,u=D()(t,h),B=(0,E.getCommonConfig)(),P=B.sparkPrefix,Z=(0,x.X)(),X=function(){var w=function(sn,mn,un){return mn==="jump-prev"||mn==="jump-next"?(0,o.jsx)(T.Z,{className:"".concat(P,"-jump-next-icon")}):l||t.itemRender?un:mn==="prev"?(0,o.jsx)("a",{children:(0,o.jsxs)(p.Z,{gap:8,children:[(0,o.jsx)(H.Z,{})," ",(0,o.jsx)("span",{children:A.Z.get({id:"components.commonComponents.Pagination.PreviousPage",dm:"\u4E0A\u4E00\u9875"})})]})}):mn==="next"?(0,o.jsx)("a",{children:(0,o.jsxs)(p.Z,{gap:8,children:[(0,o.jsx)("span",{children:A.Z.get({id:"components.commonComponents.Pagination.NextPage",dm:"\u4E0B\u4E00\u9875"})})," ",(0,o.jsx)(R.Z,{})]})}):un};return w},K;u.showSizeChanger!==null&&u.showSizeChanger!==void 0?K=u.showSizeChanger:K=u.total&&u.total>50;var G=function(){return t.showSizeChanger===!0?v():t.showSizeChanger===!1?!1:N()(t.showSizeChanger)==="object"&&t.showSizeChanger?t.showSizeChanger:u.total&&u.total>50?v():!1};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Z,{}),(0,o.jsx)(g.Z,c()(c()({itemRender:X()},u),{},{showSizeChanger:G(),className:s()("".concat(P,"-pagination"),k)}))]})}},30959:function(xn,U,n){var y=n(26068),c=n.n(y),V=n(67825),N=n.n(V),$=n(60213),D=n(88602),E=n(62910),A=n(99090),T=n(58911),H=n(95371),R=n(75271),p=n(52676),g=["icon","type","okButtonProps"],F=R.forwardRef(function(s,x){var o=s.icon,h=s.type,v=h===void 0?"confirm":h,t=s.okButtonProps,d=N()(s,g),l=(0,$.getCommonConfig)(),k=l.antPrefix,u=function(){return o||(v==="confirm"?(0,p.jsx)(D.Z,{style:{color:"var(--".concat(k,"-color-warning)")}}):v==="info"?(0,p.jsx)(E.Z,{style:{color:"var(--".concat(k,"-color-info)")}}):v==="warning"?(0,p.jsx)(D.Z,{style:{color:"var(--".concat(k,"-color-warning)")}}):v==="error"?(0,p.jsx)(A.Z,{style:{color:"var(--".concat(k,"-color-error)")}}):v==="success"?(0,p.jsx)(T.Z,{style:{color:"var(--".concat(k,"-color-success)")}}):(0,p.jsx)(D.Z,{style:{color:"var(--".concat(k,"-color-warning)")}}))},B=function(){var Z={};return["warning","error"].includes(v)&&(Z.danger=!0),c()(c()({},Z),t||{})};return(0,p.jsx)(H.Z,c()(c()({},d),{},{ref:x,icon:u(),okButtonProps:B()}))});U.Z=F},86298:function(xn,U,n){var y=n(26068),c=n.n(y),V=n(60213),N=n(65482),$=n(4369),D=n(75271),E=n(52676),A=D.forwardRef(function(T,H){var R=T.content===""||T.content===void 0||T.content===null,p=T.title===""||T.title===void 0||T.title===null,g=T.open!==void 0&&T.open!==null?T.open:R&&p?!1:void 0,F=(0,V.getCommonConfig)(),s=F.antPrefix;return(0,E.jsx)($.Z,c()(c()({},T),{},{arrow:T.arrow||!1,open:g,ref:H,getPopupContainer:T.getPopupContainer||function(x){return(0,N.Q)(x,".".concat(s,"-app"))}}))});U.Z=A},3074:function(xn,U,n){n.d(U,{Z:function(){return jn}});var y=n(82092),c=n.n(y),V=n(15558),N=n.n(V),$=n(48305),D=n.n($),E=n(53649),A=n.n(E),T=n(24884),H=n(99362),R=n(86112),p=n(18893),g=n(86137),F=n(72771),s=n(89728),x=n(82187),o=n.n(x),h=n(75271),v=n(25298),t=n.n(v),d=n(17069),l=n.n(d),k=n(21742),u=n.n(k),B=n(83136),P=n.n(B),Z=n(25451),X=function(dn){u()(J,dn);var Y=P()(J);function J(fn){var vn;return t()(this,J),vn=Y.call(this),vn.name=fn,vn}return l()(J,[{key:"eq",value:function(vn){return vn.name===this.name}},{key:"toDOM",value:function(){var vn=document.createElement("span");return vn.setAttribute("aria-hidden","true"),vn.className="cm-prompt-var",vn.textContent="${".concat(this.name,"}"),vn}},{key:"ignoreEvent",value:function(){return!1}}]),J}(Z.l9),K=new Z.Y1({regexp:/\$\{([\w\u4e00-\u9fa5]+)\}/g,decoration:function(Y){return Z.p.replace({widget:new X(Y[1])})}}),G=Z.lg.fromClass(function(){function dn(Y){t()(this,dn),c()(this,"placeholders",void 0),this.placeholders=K.createDeco(Y)}return l()(dn,[{key:"update",value:function(J){this.placeholders=K.updateDeco(J,this.placeholders)}}]),dn}(),{decorations:function(Y){return Y.placeholders},provide:function(Y){return Z.tk.atomicRanges.of(function(J){var fn;return((fn=J.plugin(Y))===null||fn===void 0?void 0:fn.placeholders)||Z.p.none})}}),q=[G],w=n(26068),en=n.n(w),sn=n(96594);function mn(){var dn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],Y=arguments.length>1?arguments[1]:void 0,J=Y.onCreate,fn=Y.createBtnText;return(0,sn.ys)({override:[function(vn){var Cn,Mn=vn.matchBefore(/\/(\w+)?/);return!Mn||Mn&&Mn.from===Mn.to&&!vn.explicit?null:{from:(Cn=Mn==null?void 0:Mn.from)!==null&&Cn!==void 0?Cn:0,options:(J?[].concat(N()(dn),[{label:"/NEW_VAR",boost:-99}]):dn).map(function(pn){return en()(en()({},pn),{},{displayLabel:pn.label==="/NEW_VAR"?fn:pn.label.slice(1),apply:function(Fn,bn,Tn,Nn){if(bn.label==="/NEW_VAR")return Fn.dispatch({changes:{from:Tn,to:Nn,insert:""}}),J==null?void 0:J();var Sn=bn.label.slice(1),Rn="${".concat(Sn,"}");Fn.dispatch({changes:{from:Tn,to:Nn,insert:Rn}})}})})}}]})}var un=n(52676),En,cn,O=(0,s.kc)(function(dn){var Y=dn.css,J=dn.token;return{onCreate:Y(En||(En=A()([`
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
  `])),J.colorBorderSecondary,J.colorBgContainer),cm:Y(cn||(cn=A()([`
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
  `])),J.colorTextSecondary,J.colorBlue,J.colorPurple,J.colorPurpleBg,J.colorBgContainer,J.colorText,J.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:J.colorBgBase,border:"1px solid ".concat(J.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:J.colorTextTertiary,backgroundColor:J.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),hn={markdown:[(0,H.JH)()]},Pn=[],tn=function(Y){var J=O(),fn=J.styles,vn=Y.variables||Pn,Cn=(0,h.useState)(!1),Mn=D()(Cn,2),pn=Mn[0],L=Mn[1],Fn=Y.onCreate,bn=h.useContext(g.ZP.ConfigContext),Tn=bn.theme.algorithm===F.Z.darkAlgorithm,Nn=Y.createBtnText||"+ \u65B0\u589E\u53D8\u91CF",Sn=(0,h.useMemo)(function(){return Tn?R.Pc:R.Zp},[Tn]),Rn=(0,h.useMemo)(function(){return[].concat(N()(hn.markdown),N()(q),[mn(N()(vn).map(function(Yn){return{label:"/".concat(Yn.code),info:Yn.label}})||[],{onCreate:Fn,createBtnText:Nn})])},[vn]);(0,h.useEffect)(function(){return L(!0),function(){L(!1)}},[]);var $n=h.useMemo(function(){return Y.tipsText===!1?(0,un.jsx)("div",{className:fn.tips}):Y.tipsText?Y.tipsText:(0,un.jsxs)("div",{className:fn.tips,children:['\u8F93\u5165/"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,un.jsx)(T.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[Y.tipsText]);return pn?(0,un.jsxs)("div",{className:fn.root,children:[(0,un.jsx)(p.ZP,{className:o()(fn.cm,c()({},fn.onCreate,Fn)),extensions:Rn,value:Y.value,theme:Sn,lang:"markdown",onChange:Y.onChange,basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1}},Sn),(0,un.jsxs)("div",{className:fn.footer,children:[$n,Y.maxLength?(0,un.jsxs)("div",{children:[Y.value.length,"/",Y.maxLength]}):null]})]}):null},jn=(0,h.memo)(tn)},81483:function(xn,U,n){var y=n(26068),c=n.n(y),V=n(67825),N=n.n(V),$=n(49327),D=n(52676),E=["texture"];U.Z=function(A){var T=A.texture,H=T===void 0?!1:T,R=N()(A,E);return(0,D.jsx)($.Z,c()(c()({},R),{},{texture:H}))}},77652:function(xn,U,n){n.d(U,{J:function(){return k},Z:function(){return B}});var y=n(26068),c=n.n(y),V=n(82092),N=n.n(V),$=n(60213),D=n(7441),E=n(82187),A=n.n(E),T=n(75271),H=n(53649),R=n.n(H),p=n(30764),g,F=(0,p.Z)(g||(g=R()([`
.`,"-slider.","-slider.",`-slider-no-marks {
  margin: 0;
}
`])),function(P){return P.antPrefix},function(P){return P.sparkPrefix},function(P){return P.sparkPrefix}),s=n(67825),x=n.n(s),o=n(32496),h,v=(0,p.Z)(h||(h=R()([`
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
`])),function(P){return P.sparkPrefix},function(P){return P.sparkPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix}),t=n(52676),d=["styles","classNames","sliderProps","inputNumberProps"];function l(P){var Z,X,K=(0,$.getCommonConfig)(),G=K.sparkPrefix;console.log("debug sparkPrefix in SliderSelector",G);var q=P.styles,w=P.classNames,en=P.sliderProps,sn=P.inputNumberProps,mn=x()(P,d),un=v(),En=P.marks||((Z=P.sliderProps)===null||Z===void 0?void 0:Z.marks)||null,cn=En||N()(N()({},P.min,P.min),P.max,P.max),O=En&&((X=Object.keys(En))===null||X===void 0?void 0:X.length)>0,hn=function(tn){var jn=typeof tn=="string"?parseFloat(tn):tn;if(jn===null||isNaN(jn)){P.onChange(null);return}jn<P.min?P.onChange(P.min):jn>P.max?P.onChange(P.max):P.onChange(jn)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(un,{}),(0,t.jsxs)("div",{style:q==null?void 0:q.wrapper,className:A()("".concat(G,"-slider-input"),N()({},"".concat(G,"-slider-input-has-marks"),O),w==null?void 0:w.wrapper),onMouseUp:function(){var tn;(tn=P.onBlur)===null||tn===void 0||tn.call(P)},children:[(0,t.jsx)(k,c()(c()(c()({disabled:P.disabled,min:P.min,max:P.max,step:P.step,tooltip:{getPopupContainer:function(tn){return tn}}},mn),en),{},{marks:cn,style:c()(c()(c()({},q==null?void 0:q.slider),en==null?void 0:en.style),{},{width:"100%"}),className:A()(w==null?void 0:w.slider,en==null?void 0:en.className),onChange:hn,value:P.value===null?void 0:P.value})),(0,t.jsx)(o.Z,c()(c()({controls:!1,step:P.step,min:P.min,max:P.max,disabled:P.disabled},sn),{},{onBlur:function(){var tn;(tn=P.onBlur)===null||tn===void 0||tn.call(P)},value:P.value,onChange:hn,style:c()(c()({},q==null?void 0:q.inputNumber),sn==null?void 0:sn.style),className:A()(w==null?void 0:w.inputNumber,sn==null?void 0:sn.className)}))]})]})}var k=T.forwardRef(function(P,Z){var X=(0,$.getCommonConfig)(),K=X.sparkPrefix,G=X.antPrefix,q=F();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(q,{}),(0,t.jsx)(D.Z,c()(c()({},P),{},{className:A()("".concat(K,"-slider"),N()(N()({},"".concat(K,"-slider-no-marks"),!Object.keys(P.marks||{}).length),"".concat(G,"-slider-reverse"),P.reverse),P.className),ref:Z}))]})}),u=k;Object.assign(u,{Input:l});var B=u},70076:function(xn,U,n){n.d(U,{Z:function(){return F}});var y=n(82092),c=n.n(y),V=n(60213),N=n(72771),$=n(22576),D=n(82187),E=n.n(D),A=n(53649),T=n.n(A),H=n(30764),R,p=(0,H.Z)(R||(R=T()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix}),g=n(52676),F=function(s){var x=s.indicator,o=s.spinning,h=o===void 0?!0:o,v=s.children,t=s.style,d=s.className,l=(0,V.getCommonConfig)(),k=l.sparkPrefix,u=N.Z.useToken(),B=p(),P=(0,g.jsxs)("svg",{className:"".concat(k,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,g.jsx)("defs",{children:(0,g.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,g.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,g.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,g.jsx)("g",{children:(0,g.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:u.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,g.jsx)("g",{children:(0,g.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:u.token.colorPrimary,fillOpacity:"1"})})]})]}),Z=s.tip||s.showProgress&&(0,g.jsxs)("div",{children:[(0,g.jsxs)("span",{children:["loading",s.percent!==void 0&&s.percent!==null&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:s.percent}),"%"]})]}),(0,g.jsx)($.Z,{percent:s.percent,showInfo:!1})]})||null;return v?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(B,{}),(0,g.jsxs)("div",{className:E()("".concat(k,"-spinner-overlay"),d),style:t,children:[(0,g.jsx)("div",{className:E()("".concat(k,"-spinner-content"),c()({},"".concat(k,"-spinning"),h)),children:v}),h&&(0,g.jsxs)("div",{className:"".concat(k,"-spinner"),children:[(0,g.jsx)("div",{className:"".concat(k,"-indicator"),children:x||P}),(0,g.jsx)("div",{className:"".concat(k,"-title"),children:Z})]})]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(B,{}),(0,g.jsx)("div",{className:E()("".concat(k,"-spinner"),d),style:t,children:h&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"".concat(k,"-indicator"),children:x||P}),(0,g.jsx)("div",{className:"".concat(k,"-title"),children:Z})]})})]})}},75229:function(xn,U,n){n.d(U,{Z:function(){return R}});var y=n(26068),c=n.n(y),V=n(468),N=n(53649),$=n.n(N),D=n(30764),E,A=(0,D.Z)(E||(E=$()([`
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
`])),function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix}),T=n(52676),H=function(g){var F=A();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(F,{}),(0,T.jsx)(V.Z,c()({},g))]})},R=H},52849:function(xn,U,n){n.d(U,{Z:function(){return x}});var y=n(26068),c=n.n(y),V=n(60213),N=n(68278),$=n(98852),D=n(82187),E=n.n(D),A=n(75271),T=n(53649),H=n.n(T),R=n(30764),p,g=(0,R.Z)(p||(p=H()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),F=n(52676),s=function(h){var v=(0,V.getCommonConfig)(),t=v.sparkPrefix,d=g(),l=(0,A.useMemo)(function(){if(h.items)return h.items.map(function(k,u){var B=k.status;return!B&&h.current!==void 0&&(u<h.current?B="finish":u===h.current?B="process":B="wait"),B==="finish"?c()(c()({},k),{},{icon:(0,F.jsx)(N.Z,{className:"".concat(t,"-finish-icon")})}):k})},[h.items,h.current]);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(d,{}),(0,F.jsx)($.Z,c()(c()({},h),{},{items:l,className:E()("".concat(t,"-steps"),h.className)}))]})},x=s},90118:function(xn,U,n){n.d(U,{Z:function(){return s}});var y=n(26068),c=n.n(y),V=n(67825),N=n.n(V),$=n(90264),D=n(10616),E=n(60213),A=n(53649),T=n.n(A),H=n(30764),R,p=(0,H.Z)(R||(R=T()([`
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
`])),function(x){return x.sparkPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.sparkPrefix}),g=n(52676),F=["label","className"],s=function(x){var o=p(),h=x.label,v=x.className,t=N()(x,F),d=(0,E.getCommonConfig)(),l=d.sparkPrefix;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{}),(0,g.jsxs)($.Z,{align:"center",gap:8,className:v,children:[(0,g.jsx)(D.Z,c()(c()({},t),{},{className:"".concat(l,"-switch")})),h&&(0,g.jsx)("span",{className:"".concat(l,"-switch-label"),children:h})]})]})}},18762:function(xn,U,n){n.d(U,{Z:function(){return h}});var y=n(26068),c=n.n(y),V=n(67825),N=n.n(V),$=n(60213),D=n(2004),E=n(63267),A=n(82187),T=n.n(A),H=n(47525),R=n(53649),p=n.n(R),g=n(30764),F,s=(0,g.Z)(F||(F=p()([`
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
`])),function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix}),x=n(52676),o=["columns"];function h(v){var t,d=(0,$.getCommonConfig)(),l=d.sparkPrefix,k=v.columns,u=N()(v,o);k=(t=k)===null||t===void 0?void 0:t.map(function(Z){return c()(c()({},Z),{},{sortIcon:Z.sortIcon||function(){return(0,x.jsx)(D.Z,{style:{fontSize:16,marginLeft:8}})}})});var B=s(),P=(0,H.X)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(B,{}),(0,x.jsx)(P,{}),(0,x.jsx)(E.Z,c()({className:T()("".concat(l,"-table")),columns:k},u))]})}},96295:function(xn,U,n){n.d(U,{Z:function(){return v}});var y=n(26068),c=n.n(y),V=n(67825),N=n.n(V),$=n(60213),D=n(40753),E=n(82187),A=n.n(E),T=n(75271),H=n(53649),R=n.n(H),p=n(30764),g,F=(0,p.Z)(g||(g=R()([`
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
`])),function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),s=n(52676),x=["children","className","bordered","color","size"],o=function(t){return t.Purple="purple",t.Pink="pink",t.Yellow="yellow",t.Teal="teal",t.Blue="blue",t.Mauve="mauve",t.Transparent="transparent",t.Success="success",t.Error="error",t.Warning="warning",t.Info="info",t}(o||{}),h=(0,T.forwardRef)(function(t,d){var l=t.children,k=t.className,u=t.bordered,B=u===void 0?!1:u,P=t.color,Z=P===void 0?"mauve":P,X=t.size,K=X===void 0?"middle":X,G=N()(t,x),q=F(),w=(0,$.getCommonConfig)(),en=w.sparkPrefix,sn=Object.values(o).includes(Z);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(q,{}),(0,s.jsx)(D.Z,c()(c()({className:A()("".concat(en,"-tag ").concat(en,"-tag-").concat(Z," ").concat(en,"-tag-").concat(K),k),bordered:B,color:sn?void 0:Z},G),{},{ref:d,children:l}))]})}),v=h},2567:function(xn,U,n){n.d(U,{Z:function(){return k}});var y=n(26068),c=n.n(y),V=n(67825),N=n.n(V),$=n(60213),D=n(41246),E=n(72771),A=n(86137),T=n(34374),H=n(82187),R=n.n(H),p=n(75271),g=n(53649),F=n.n(g),s=n(30764),x,o=(0,s.Z)(x||(x=F()([`
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
`])),function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix}),h=n(52676),v=["className","popupClassName"],t=["className","popupClassName"],d=function(B){var P=B.className,Z=B.popupClassName,X=N()(B,v),K=E.Z.useToken(),G=K.token,q=(0,$.getCommonConfig)(),w=q.sparkPrefix,en=o();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(en,{}),(0,h.jsx)(A.ZP,{theme:{components:{DatePicker:{activeBorderColor:G.colorPrimary}}},children:(0,h.jsx)(T.Z,c()({suffixIcon:(0,h.jsx)(D.Z,{}),className:R()("".concat(w,"-picker"),P),popupClassName:R()("".concat(w,"-picker-dropdown"),Z)},X))})]})},l=function(B){var P=B.className,Z=B.popupClassName,X=N()(B,t),K=E.Z.useToken(),G=K.token,q=(0,$.getCommonConfig)(),w=q.sparkPrefix,en=o();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(en,{}),(0,h.jsx)(A.ZP,{theme:{components:{DatePicker:{activeBorderColor:G.colorPrimary}}},children:(0,h.jsx)(T.Z.RangePicker,c()({suffixIcon:(0,h.jsx)(D.Z,{}),className:R()("".concat(w,"-picker"),P),popupClassName:R()("".concat(w,"-picker-dropdown"),Z),popupStyle:{padding:0}},X))})]})};d.RangePicker=l;var k=d},70588:function(xn,U,n){n.d(U,{Z:function(){return d}});var y=n(26068),c=n.n(y),V=n(48305),N=n.n(V),$=n(67825),D=n.n($),E=n(75271),A=n(82187),T=n.n(A),H=n(74659),R=n(32547),p=n(60213),g=n(53649),F=n.n(g),s=n(30764),x,o=(0,s.Z)(x||(x=F()([`
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
`])),function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix}),h=n(52676),v=["controls","mouseEnterAutoPlay","children","className","style"],t=(0,E.forwardRef)(function(l,k){var u=l.controls,B=l.mouseEnterAutoPlay,P=B===void 0?!1:B,Z=l.children,X=l.className,K=l.style,G=D()(l,v),q=(0,p.getCommonConfig)(),w=q.sparkPrefix,en=o(),sn=(0,E.useState)(0),mn=N()(sn,2),un=mn[0],En=mn[1],cn=(0,E.useState)(0),O=N()(cn,2),hn=O[0],Pn=O[1],tn=(0,E.useState)(!1),jn=N()(tn,2),dn=jn[0],Y=jn[1],J=(0,R.Z)(l,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),fn=N()(J,2),vn=fn[0],Cn=fn[1],Mn=(0,E.useState)(!1),pn=N()(Mn,2),L=pn[0],Fn=pn[1],bn=(0,E.useRef)(null),Tn=(0,E.useRef)(!1),Nn=function(On){bn.current=On,k&&(typeof k=="function"?k(On):k.current=On)};(0,E.useEffect)(function(){var In;return dn&&(In=setInterval(function(){bn.current&&En(bn.current.currentTime)},16)),function(){In&&clearInterval(In)}},[dn]);var Sn=function(On){var Bn;bn.current&&("mozHasAudio"in bn.current?Fn(bn.current.mozHasAudio):"webkitAudioDecodedByteCount"in bn.current?Fn(bn.current.webkitAudioDecodedByteCount>0):Fn(!1)),(Bn=G.onCanPlayThrough)===null||Bn===void 0||Bn.call(G,On)},Rn=function(On){var Bn;bn.current&&Pn(bn.current.duration),(Bn=G.onLoadedMetadata)===null||Bn===void 0||Bn.call(G,On)},$n=function(){bn.current&&(dn?bn.current.pause():bn.current.play(),Y(!dn))},Yn=function(On){var Bn;Y(!0),(Bn=G.onPlay)===null||Bn===void 0||Bn.call(G,On)},ye=function(On){var Bn;Y(!1),(Bn=G.onPause)===null||Bn===void 0||Bn.call(G,On)},be=function(){bn.current&&bn.current.requestFullscreen&&bn.current.requestFullscreen()},Ce=function(On){var Bn,ce;Y(!1),En((Bn=bn.current)===null||Bn===void 0?void 0:Bn.duration),(ce=G.onEnded)===null||ce===void 0||ce.call(G,On)},je=function(){P&&!Tn.current&&(dn||(bn.current.play(),Tn.current=!0))},Se=function(){P&&Tn.current&&(Tn.current=!1)},Ee=function(On){bn.current&&(bn.current.currentTime=On,En(On))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(en,{}),(0,h.jsx)("div",{className:T()("".concat(w,"-video-container"),X),style:K,children:(0,h.jsxs)("div",{className:"".concat(w,"-video-content"),onMouseEnter:je,onMouseLeave:Se,children:[l.poster&&(0,h.jsx)("img",{src:l.poster,alt:"poster",className:"".concat(w,"-video-poster")}),(0,h.jsx)("video",c()(c()({ref:Nn},G),{},{controls:!1,muted:vn,className:"".concat(w,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:Rn,onCanPlayThrough:Sn,onPlay:Yn,onPause:ye,onEnded:Ce})),u&&(0,h.jsx)(H.Z,{className:"".concat(w,"-video-controller-wrapper"),isPlaying:dn,currentTime:un,duration:hn,enableVolume:L,muted:vn,enableFullscreen:!0,onMute:function(){return Cn(!vn)},onPlayPause:$n,onFullscreen:be,onProgressClick:Ee}),Z]})})]})}),d=t},86822:function(xn,U,n){n.d(U,{Z:function(){return $}});var y=n(26068),c=n.n(y),V=n(75271),N=new Map;function $(D){var E=D.globalStyle,A=D.name;(0,V.useLayoutEffect)(function(){var T=N.get(E)||0;if(T)N.set(E,c()(c()({},T),{},{count:T.count+1}));else{var H=document.createElement("style"),R=Math.random().toString(36).slice(2);H.innerHTML=E,H.dataset.id=R,H.dataset.flag="bailian-ui-use-style",A&&H.setAttribute("name",A),document.head.appendChild(H),N.set(E,{count:1,id:R})}return function(){var p=N.get(E);N.set(E,c()(c()({},p),{},{count:p.count-1})),setTimeout(function(){var g=N.get(E);if((g==null?void 0:g.count)<=0){var F;N.delete(E),(F=document.head.querySelector('[data-id="'+g.id+'"]'))===null||F===void 0||F.remove()}},100)}},[E])}},5012:function(xn,U,n){n.r(U),n.d(U,{Alert:function(){return o.Z},AlertDialog:function(){return B.default},Anchor:function(){return P.Z},Audio:function(){return at.Z},Avatar:function(){return Z.Z},Badge:function(){return h.Z},Breadcrumb:function(){return X.Z},Button:function(){return K.Z},Card:function(){return G.Z},Checkbox:function(){return q.Z},CodeBlock:function(){return w.ZP},CodeBlockLangExtensionsMap:function(){return w.xO},Collapse:function(){return en.Z},CollapsePanel:function(){return sn.Z},ConfigProvider:function(){return Wt.ZP},DatePicker:function(){return mn.Z},Descriptions:function(){return Vr.Z},Drawer:function(){return un.Z},Dropdown:function(){return En.Z},EllipsisTip:function(){return Fn},Empty:function(){return bn.Z},FileCard:function(){return _e.s},FileIcon:function(){return _e.Z},FloatButton:function(){return v.Z},Form:function(){return Tn.Z},HelpIcon:function(){return be},IconButton:function(){return Sn.Z},IconFont:function(){return Ce.Z},Image:function(){return je.Z},Input:function(){return Se.Z},InputNumber:function(){return t.Z},MdEditor:function(){return Ue.Z},MobileAlertDialog:function(){return Ct},MobileDrawer:function(){return gt},MobileModal:function(){return st},Modal:function(){return In.Z},Pagination:function(){return Bn.Z},Popconfirm:function(){return ce.Z},Popover:function(){return br.Z},Progress:function(){return d.Z},PromptsEditor:function(){return Ue.Z},Radio:function(){return l.ZP},RadioButton:function(){return Cr.default},Result:function(){return jr.Z},Select:function(){return k.default},Skeleton:function(){return u.Z},SlateEditor:function(){return Ur},Slider:function(){return Xe.Z},SliderSelector:function(){return Jr},Spinner:function(){return Qr.Z},Statistic:function(){return Yr.Z},Steps:function(){return Sr.Z},Switch:function(){return Xr.Z},Table:function(){return qr.Z},Tabs:function(){return _r.Z},Tag:function(){return nt.Z},TimePicker:function(){return et.Z},Tooltip:function(){return $n.Z},Upload:function(){return rt.Z},Video:function(){return tt.Z},bailianDarkTheme:function(){return yr},bailianTheme:function(){return Pr},base64Decoder:function(){return zt},base64Encoder:function(){return $t},carbonDarkTheme:function(){return Ut},carbonTheme:function(){return wt},copy:function(){return fr.JG},delay:function(){return dr},generateTheme:function(){return s},generateThemeByToken:function(){return x.Z},getCommonConfig:function(){return tn.getCommonConfig},message:function(){return Ee.Z},notification:function(){return On.Z},parseJsonSafely:function(){return Ht},purpleDarkTheme:function(){return yr},purpleTheme:function(){return Pr},renderTooltip:function(){return fr.rb},requestPop:function(){return gr},requestPopSse:function(){return At},requestSse:function(){return hr},safeHtml:function(){return St.t},setCommonConfig:function(){return tn.setCommonConfig},useCommonConfig:function(){return tn.useCommonConfig},useGlobalStyle:function(){return jt.Z},waitForDom:function(){return Et},waitForFunc:function(){return vr}});var y=n(23577),c=n(19888),V=n(44719),N=n(57249),$=function(r){var a=r.r/255,f=r.g/255,i=r.b/255,m=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),b=f<=.03928?f/12.92:Math.pow((f+.055)/1.055,2.4),j=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4);return .2126*m+.7152*b+.0722*j},D=function(r){var a=$(r);return a>.5},E=function(r){var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null},A=function(r,a,f){return"#"+((1<<24)+(r<<16)+(a<<8)+f).toString(16).slice(1).toUpperCase()},T=function(r,a,f){var i=r/255,m=a/255,b=f/255,j=Math.max(i,m,b),S=Math.min(i,m,b),I,C,M=(j+S)/2;if(j===S)I=C=0;else{var _=j-S;switch(C=M>.5?_/(2-j-S):_/(j+S),j){case i:I=((m-b)/_+(m<b?6:0))/6;break;case m:I=((b-i)/_+2)/6;break;case b:I=((i-m)/_+4)/6;break;default:I=0}}return{h:I*360,s:C*100,l:M*100}},H=function(r,a,f){var i=r/360,m=a/100,b=f/100,j,S,I;if(m===0)j=S=I=b;else{var C=function(an,ln,yn){var Q=yn;return Q<0&&(Q+=1),Q>1&&(Q-=1),Q<.16666666666666666?an+(ln-an)*6*Q:Q<.5?ln:Q<.6666666666666666?an+(ln-an)*(.6666666666666666-Q)*6:an},M=b<.5?b*(1+m):b+m-b*m,_=2*b-M;j=C(_,M,i+1/3),S=C(_,M,i),I=C(_,M,i-1/3)}return{r:Math.round(j*255),g:Math.round(S*255),b:Math.round(I*255)}},R=function(r,a){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=E(r);if(!i)return r;var m=T(i.r,i.g,i.b);m.l=Math.max(0,Math.min(100,m.l+a)),m.s=Math.max(0,Math.min(100,m.s+f));var b=H(m.h,m.s,m.l);return A(b.r,b.g,b.b)},p=function(r,a){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=E(r);if(!i)return r;var m=T(i.r,i.g,i.b);m.l=a,f!==null&&(m.s=f);var b=H(m.h,m.s,m.l);return A(b.r,b.g,b.b)},g=function(r,a){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=E(r);if(!i)return r;var m=T(i.r,i.g,i.b);m.l=a,m.s=Math.max(0,Math.min(100,m.s*f));var b=H(m.h,m.s,m.l);return A(b.r,b.g,b.b)},F=function(r){var a=r.primaryHex,f=r.darkMode,i=f===void 0?!1:f,m=r.bgBaseHex||(i?"#000000":"#ffffff"),b=r.textBaseHex||(i?"#E7E7ED":"#1a1a1a"),j=E(a);if(!j)return null;var S=T(j.r,j.g,j.b),I=E(m),C=E(b),M=I?T(I.r,I.g,I.b):{h:210,s:8,l:i?5:99},_=Math.max(8,Math.min(S.s,40)),on=Math.max(12,Math.min(S.s*.6,35)),an=i?p(a,Math.max(S.l-5,42),S.s*.95):a,ln=E(an),yn=ln?T(ln.r,ln.g,ln.b):S,Q={borderRadiusXS:c.borderRadiusXS,borderRadiusSM:c.borderRadiusSM,borderRadius:c.borderRadius,borderRadiusLG:c.borderRadiusLG,borderRadiusXL:c.borderRadiusXL,borderRadiusFull:c.borderRadiusFull,wireframe:c.wireframe,colorPrimary:i?p(a,Math.max(S.l-5,42),S.s*.95):a,colorPrimaryHover:i?p(a,Math.min(S.l+10,55),S.s*.95):R(a,S.l<50?10:-10,0),colorPrimaryActive:i?p(a,Math.max(S.l-10,35),S.s*.95):R(a,S.l<50?-10:-20,0),colorPrimaryBg:i?p(a,13,_*.6):p(a,96,_*.8),colorPrimaryBgHover:i?p(a,13,_*.6):p(a,94,_),colorPrimaryBorder:i?p(a,17,on*.8):p(a,88,on*.8),colorPrimaryBorderHover:i?p(a,22,on):p(a,82,on),colorPrimaryText:i?p(a,Math.max(S.l-5,42),S.s*.95):a,colorPrimaryTextHover:i?p(a,Math.min(S.l+10,55),S.s*.95):R(a,S.l<50?10:-10,0),colorPrimaryTextActive:i?p(a,Math.max(S.l-10,35),S.s*.95):R(a,S.l<50?-10:-20,0),colorTextOnPrimary:D(ln)?"#000000":"#ffffff",colorTextBase:b,colorText:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.88)"),colorTextSecondary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.65)"),colorTextTertiary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.45)"),colorTextQuaternary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.25)"),colorTextWhite:"#fff",colorBgBase:m,colorBgContainer:i?g(m,Math.min(M.l+S.l*.08,12),1.2):g(m,Math.max(100-S.l*.05,96),.8),colorBgElevated:i?g(m,Math.min(M.l+3,8),1.2):m,colorBgLayout:m,colorBgSpotlight:i?"rgba(".concat(E(g(m,28,1.2)).r,", ").concat(E(g(m,28,1.2)).g,", ").concat(E(g(m,28,1.2)).b,", 0.85)"):"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.85)"),colorBgMask:i?"rgba(".concat(I.r,", ").concat(I.g,", ").concat(I.b,", 0.8)"):"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.45)"),colorBorder:i?"rgba(".concat(E(g(m,28,2)).r,", ").concat(E(g(m,28,2)).g,", ").concat(E(g(m,28,2)).b,", 0.8)"):g(m,81,2.5),colorBorderSecondary:i?"rgba(".concat(E(g(m,22,1.8)).r,", ").concat(E(g(m,22,1.8)).g,", ").concat(E(g(m,22,1.8)).b,", 0.8)"):g(m,88,2),colorFill:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.18)"):g(m,81,2.5)+"5c",colorFillSecondary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.12)"):g(m,81,2.5)+"33",colorFillTertiary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.08)"):g(m,81,2.5)+"26",colorFillQuaternary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.04)"):g(m,81,2.5)+"1a",colorFillDisable:i?g(b,55,.8):g(m,86,1.8),colorLink:i?p(a,Math.max(S.l-5,42),S.s*.95):a,colorInfo:i?y.colorInfo:c.colorInfo,colorInfoHover:i?y.colorInfoHover:c.colorInfoHover,colorInfoText:i?y.colorInfoText:c.colorInfoText,colorInfoBg:i?y.colorInfoBg:c.colorInfoBg,colorInfoBgHover:i?y.colorInfoBgHover:c.colorInfoBgHover,colorInfoBorder:i?y.colorInfoBorder:c.colorInfoBorder,colorInfoBorderHover:i?y.colorInfoBorderHover:c.colorInfoBorderHover,colorSuccess:i?y.colorSuccess:c.colorSuccess,colorSuccessHover:i?y.colorSuccessHover:c.colorSuccessHover,colorSuccessBg:i?y.colorSuccessBg:c.colorSuccessBg,colorSuccessBgHover:i?y.colorSuccessBgHover:c.colorSuccessBgHover,colorSuccessBorder:i?y.colorSuccessBorder:c.colorSuccessBorder,colorSuccessBorderHover:i?y.colorSuccessBorderHover:c.colorSuccessBorderHover,colorWarning:i?y.colorWarning:c.colorWarning,colorWarningHover:i?y.colorWarningHover:c.colorWarningHover,colorWarningBg:i?y.colorWarningBg:c.colorWarningBg,colorWarningBgHover:i?y.colorWarningBgHover:c.colorWarningBgHover,colorWarningBorder:i?y.colorWarningBorder:c.colorWarningBorder,colorWarningBorderHover:i?y.colorWarningBorderHover:c.colorWarningBorderHover,colorError:i?y.colorError:c.colorError,colorErrorHover:i?y.colorErrorHover:c.colorErrorHover,colorErrorBg:i?y.colorErrorBg:c.colorErrorBg,colorErrorBgHover:i?y.colorErrorBgHover:c.colorErrorBgHover,colorErrorBorder:i?y.colorErrorBorder:c.colorErrorBorder,colorErrorBorderHover:i?y.colorErrorBorderHover:c.colorErrorBorderHover,colorPurple:i?y.colorPurple:c.colorPurple,colorPurpleHover:i?y.colorPurpleHover:c.colorPurpleHover,colorPurpleBg:i?y.colorPurpleBg:c.colorPurpleBg,colorPink:i?y.colorPink:c.colorPink,colorPinkHover:i?y.colorPinkHover:c.colorPinkHover,colorPinkBg:i?y.colorPinkBg:c.colorPinkBg,colorYellow:i?y.colorYellow:c.colorYellow,colorYellowHover:i?y.colorYellowHover:c.colorYellowHover,colorYellowBg:i?y.colorYellowBg:c.colorYellowBg,colorOrange:i?y.colorOrange:c.colorOrange,colorOrangeHover:i?y.colorOrangeHover:c.colorOrangeHover,colorOrangeBg:i?y.colorOrangeBg:c.colorOrangeBg,colorTeal:i?y.colorTeal:c.colorTeal,colorTealHover:i?y.colorTealHover:c.colorTealHover,colorTealBg:i?y.colorTealBg:c.colorTealBg,colorBlue:i?y.colorBlue:c.colorBlue,colorBlueHover:i?y.colorBlueHover:c.colorBlueHover,colorBlueBg:i?y.colorBlueBg:c.colorBlueBg,colorMauve:i?y.colorMauve:c.colorMauve,colorMauveHover:i?y.colorMauveHover:c.colorMauveHover,colorMauveBg:i?y.colorMauveBg:c.colorMauveBg,colorSlate:i?y.colorSlate:c.colorSlate||"#1E293B",colorSlateHover:i?y.colorSlateHover:c.colorSlateHover||"#475569",colorSlateBg:i?y.colorSlateBg:c.colorSlateBg||"#E2E8F0",colorLavender:i?y.colorLavender:c.colorLavender||"#A77BFF",colorLavenderHover:i?y.colorLavenderHover:c.colorLavenderHover||"#BB99FF",colorLavenderBg:i?y.colorLavenderBg:c.colorLavenderBg||"rgba(226, 212, 255, 0.8)",boxShadow:i?y.boxShadow:c.boxShadow,boxShadowSecondary:i?y.boxShadowSecondary:c.boxShadowSecondary,boxShadowTertiary:i?y.boxShadowTertiary:c.boxShadowTertiary,boxShadowTertiaryLeft:i?y.boxShadowTertiaryLeft:c.boxShadowTertiaryLeft,boxShadowInput:i?y.boxShadowInput:c.boxShadowInput};return Q},s=F,x=n(18729),o=n(80017),h=n(49339),v=n(45365),t=n(32496),d=n(22576),l=n(6944),k=n(45908),u=n(86585),B=n(7481),P=n(21245),Z=n(93178),X=n(40),K=n(60823),G=n(61902),q=n(98618),w=n(49570),en=n(94684),sn=n(61406),mn=n(84360),un=n(19743),En=n(38356),cn=n(26068),O=n.n(cn),hn=n(31759),Pn=n.n(hn),tn=n(60213),jn=n(89462),dn=n(82187),Y=n.n(dn),J=n(75271),fn=n(53649),vn=n.n(fn),Cn=n(30764),Mn,pn=(0,Cn.Z)(Mn||(Mn=vn()([`
div.`,`-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`])),function(e){return e.sparkPrefix}),L=n(52676);function Fn(e){var r=e.className,a=r===void 0?"":r,f=e.style,i=f===void 0?{}:f,m=e.children,b=e.rows,j=b===void 0?1:b,S=e.tooltip,I=e.tooltipMaxHeight,C=I===void 0?"90vh":I,M=(0,tn.getCommonConfig)(),_=M.sparkPrefix,on=pn();function an(){var ln={maxHeight:C,overflow:"auto"};if(Pn()(S)==="object"){var yn=S,Q=yn.title,nn=yn.styles;return{title:Q||m,styles:O()(O()({},nn),{},{body:O()(O()({},ln),nn==null?void 0:nn.body)})}}return{title:S||m,styles:{body:ln}}}return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(on,{}),(0,L.jsx)(jn.Z.Paragraph,{className:Y()("".concat(_,"-ellipsis-tip"),a),style:i,ellipsis:{rows:j,tooltip:an()},children:m})]})}var bn=n(49327),Tn=n(90895),Nn=n(20855),Sn=n(94662),Rn=n(39862),$n=n(19546),Yn,ye=(0,Cn.Z)(Yn||(Yn=vn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix});function be(e){var r=(0,Rn.X)(),a=ye(),f=e.style,i=e.content,m=e.className,b=e.popoverProps,j=(0,tn.getCommonConfig)(),S=j.sparkPrefix;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(r,{}),(0,L.jsx)(a,{}),(0,L.jsx)($n.Z,O()(O()({title:i,overlayInnerStyle:{maxWidth:376},trigger:"hover",style:f},b),{},{children:(0,L.jsx)(Sn.Z,{className:Y()("".concat(S,"-help-icon"),m),icon:(0,L.jsx)(Nn.Z,{}),shape:"circle",bordered:!1,size:"small"})}))]})}var Ce=n(48004),je=n(70344),Se=n(38734),Ee=n(39971),In=n(3983),On=n(94361),Bn=n(85525),ce=n(30959),br=n(86298),Ue=n(3074),Cr=n(8893),jr=n(81483),Sr=n(52849),Er=n(48305),Te=n.n(Er),Xn=n(40965),ie=n(86212),W=n(75040),Ne=n(28533),le=n(20335),Qe,Tr=(0,Cn.Z)(Qe||(Qe=vn()([`
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
`]))),Nr=n(15558),Ve=n.n(Nr),Dr=(0,J.memo)(function(e){var r=e.attributes,a=e.children;return(0,L.jsx)("div",O()(O()({},r),{},{style:{marginTop:"8px"},children:a}))}),Ke,Mr=(0,Cn.Z)(Ke||(Ke=vn()([`
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
`]))),Br=(0,J.memo)(function(e){var r=e.attributes,a=e.renderVarLabel,f=Mr();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(f,{}),(0,L.jsxs)("span",O()(O()({},r),{},{children:[e.children,(0,L.jsx)("span",{className:"spark-editor-var-tag",children:a?a(e.element.code):e.element.label})]}))]})}),Qt=function(r){return Object.keys(r).map(function(a){return{label:r[a].label,desc:r[a].desc,value:a}})},kr=[{code:"s",isParagraph:!0,out:[],inner:[],name:Xn.Z.get({id:"components.SlateEditor.utils.constant.Paragraph",dm:"\u6BB5\u843D"}),render:Dr,type:"double"},{code:"var",isParagraph:!1,out:["s"],inner:[],name:Xn.Z.get({id:"components.SlateEditor.utils.constant.Variable",dm:"\u53D8\u91CF"}),render:Br,isInline:!0,isVoid:!0,type:"single"}],De=function(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},Vt=function(r){return r.replace(/&/g,"&amp;").replace(/{/g,"").replace(/}/g,"").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},Zr=function(r){return r.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")},Me=function e(r,a){var f="",i=a||{},m=i.tagRules,b=m===void 0?{}:m;return r.forEach(function(j,S){if(W.W_.isElement(j)){var I=b[j.type];if(!I)f+=De(j.text);else switch(I.code){case"image":f+="![".concat(j.fileName,"](").concat(j.src,")");break;case"pdf":f+="[".concat(j.fileName,"](").concat(j.src,")");break;case"s":f+="".concat(e(j.children,a)).concat(S<r.length-1?`
`:"");break;case"var":f+="${".concat(j.code,"}");default:break}}else f+=De(j.text)}),f},Ge=function(r,a){if(r&&r.children.length){var f=Me(r.children,a);return f==="<s></s>"?"":Zr(f)}return""},me=function(r){if(!r)return"";var a="",f=De(r).replace(/\$\{([^{}]+?)\}/g,function(i,m){return'<var code="'.concat(m,'" label="${').concat(m,'}" />')});return f.split(`
`).forEach(function(i){a+="<s>".concat(i,"</s>")}),"<speak>".concat(a,"</speak>")},Fr=function e(r){var a,f=[];return(r==null||(a=r.childNodes)===null||a===void 0?void 0:a.length)>0&&r.childNodes.forEach(function(i,m,b){var j=i.nodeType,S=i.nodeName;if(j===1){for(var I={},C=0;C<i.attributes.length;C++){var M=i.attributes[C],_=M.nodeName,on=M.nodeValue;I[_]=on}var an=O()({type:S},I);i.childNodes.length>0?an.children=e(i):an.children=[{text:""}],f.push(an),S!=="s"&&(m>0&&b[m-1].nodeType===1&&f.unshift({text:""}),m===b.length-1&&f.push({text:""}))}else j===3&&f.push({text:i.nodeValue||""})}),f},ge=function(r){if(r){var a=new DOMParser().parseFromString(r,"text/xml");return Fr(a)}},Or=function(r){if(!r||r.includes("</speak>"))return r;var a=r;return a.includes("<s>")||(a="<s>".concat(a,"</s>")),"<speak>".concat(a,"</speak>")},Je=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a={};return[].concat(Ve()(r),Ve()(kr)).forEach(function(f){a[f.code]||(a[f.code]=f)}),a},Lr=n(90228),Ln=n.n(Lr),Ir=n(87999),qn=n.n(Ir),Ye=function(r,a,f){if(!(!r||!a)){var i=r.selection,m=null;i&&(m=i.focus),f!=null&&f.at&&(m=f==null?void 0:f.at),m||(m={path:[0,0],offset:0});var b=m,j=b.path,S=b.offset,I=W.NB.get(r,W.y$.parent(j));if(!W.ML.isVoid(r,I)){var C=W.NB.string(W.NB.get(r,j)),M=C.substring(0,S-(f!=null&&f.deletePrefix?1:0)),_=C.substring(S,C.length);W.ML.withoutNormalizing(r,function(){r.apply({type:"insert_node",node:{text:_},path:j}),r.apply({type:"insert_node",node:a,path:j}),r.apply({type:"insert_node",node:{text:M},path:j});var on=W.y$.next(W.y$.next(W.y$.next(j)));r.apply({type:"remove_node",path:on,node:W.NB.get(r,on)});var an={path:W.y$.next(W.y$.next(j)),offset:0};r.apply({type:"set_selection",properties:null,newProperties:{anchor:an,focus:an}}),le.F3.focus(r),r.onChange()})}}},Rr=function(){var e=qn()(Ln()().mark(function r(a,f,i){var m,b,j,S,I,C,M,_,on,an,ln,yn,Q,nn,Dn,kn,Qn,Zn,zn,ne,An,ae,Vn,oe,Kn,Gn,re,Wn,Hn,wn,Jn,gn;return Ln()().wrap(function(rn){for(;;)switch(rn.prev=rn.next){case 0:if(!(!a||!f)){rn.next=2;break}return rn.abrupt("return");case 2:if(b=a.selection,j=i||{},S=j.tip,I=j.selection,C=I===void 0?b:I,M=i==null||(m=i.rules)===null||m===void 0?void 0:m[f.type],!(C&&!W.e6.isCollapsed(C))){rn.next=45;break}if(on=W.NB.fragment(a,C),an=xe(on),an!==""){rn.next=10;break}return rn.abrupt("return");case 10:if(ln=pe(W.e6.edges(C)),yn=Te()(ln,2),Q=yn[0],nn=yn[1],W.ML.isVoid(a,W.NB.get(a,W.y$.parent(Q.path)))&&(Q.path=W.y$.next(W.y$.parent(Q.path)),Q.offset=0),W.ML.isVoid(a,W.NB.get(a,W.y$.parent(nn.path)))&&(nn.path=W.y$.previous(W.y$.parent(nn.path)),nn.offset=W.NB.string(W.NB.get(a,nn.path)).length),W.y$.hasPrevious(nn.path)&&W.NB.get(a,W.y$.parent(Q.path))===W.NB.get(a,W.y$.previous(nn.path))&&Q.offset===0&&nn.offset===0&&(Dn=W.y$.previous(W.y$.parent(Q.path)),kn=W.NB.get(a,Dn),Q.path=Dn,Q.offset=kn.text.length),W.NB.parent(a,Q.path)!==W.NB.parent(a,nn.path)){for(Qn=W.NB.get(a,Q.path),Zn=xe(W.NB.fragment(a,{anchor:{path:nn.path,offset:0},focus:nn}));W.xv.isText(Qn)&&Qn.text===""&&an===Zn;)Q.path.splice(Q.path.length-1,1,1,0),Qn=W.NB.get(a,Q.path);for(zn=W.NB.get(a,nn.path),ne=W.NB.string(W.NB.get(a,W.e6.edges(C)[0].path)),An=xe(W.NB.fragment(a,{anchor:Q,focus:{path:Q.path,offset:ne.length}}));W.xv.isText(zn)&&zn.text===""&&an===An;)ae=nn.path[nn.path.length-1],nn.path.splice(nn.path.length-1,1,ae-1),zn=W.NB.get(a,nn.path),W.W_.isElement(zn)&&(nn.path.push(zn.children.length-1),nn.offset=ne.length)}if(W.NB.parent(a,Q.path)===W.NB.parent(a,nn.path)){rn.next=18;break}return ie.ZP.info(Xn.Z.get({id:"components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect",dm:"\u5212\u9009\u8303\u56F4\u6709\u8BEF"})),rn.abrupt("return");case 18:Vn=W.y$.parent(Q.path),oe=(M==null?void 0:M.name)||Be(),Kn=W.NB.get(a,Vn),Gn=i==null||(_=i.rules)===null||_===void 0?void 0:_[Kn.type];case 22:if(!(M!=null&&M.out&&Vn.length>1)){rn.next=30;break}if(M.out.includes(Kn.type)){rn.next=27;break}return re=(Gn==null?void 0:Gn.name)||Be(),ie.ZP.warning(Xn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn",dm:"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185"},{wrapTagName:oe,tagName:re})),rn.abrupt("return");case 27:Vn=W.y$.parent(Vn),rn.next=22;break;case 30:if(!(M!=null&&M.inner&&W.NB.get(a,Q.path)!==W.NB.get(a,nn.path))){rn.next=42;break}Wn=W.y$.next(Q.path);case 32:if(W.y$.equals(Wn,nn.path)){rn.next=42;break}if(wn=W.NB.get(a,Wn),Jn=i==null||(Hn=i.rules)===null||Hn===void 0?void 0:Hn[wn.type],!(W.W_.isElement(wn)&&!M.inner.includes(wn.type))){rn.next=39;break}return gn=(Jn==null?void 0:Jn.name)||Be(),ie.ZP.warning(Xn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn",dm:"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011"},{wrapTagName:oe,tagName:gn})),rn.abrupt("return");case 39:Wn=W.y$.next(Wn),rn.next=32;break;case 42:W.ML.withoutNormalizing(a,function(){var te=W.NB.parent(a,Q.path),ee=W.NB.fragment(te,{anchor:{path:[Q.path[Q.path.length-1]],offset:Q.offset},focus:{path:[nn.path[nn.path.length-1]],offset:nn.offset}}),fe=W.NB.string(W.NB.get(a,Q.path));if(W.y$.equals(Q.path,nn.path))a.apply({type:"remove_text",path:Q.path,offset:Q.offset,text:fe.substring(Q.offset,nn.offset)});else{a.apply({type:"remove_text",path:Q.path,offset:Q.offset,text:fe.substring(Q.offset,fe.length)});for(var ve=W.y$.next(Q.path);!W.y$.equals(ve,nn.path);)a.apply({type:"remove_node",path:ve,node:W.NB.get(a,ve)}),nn.path=W.y$.previous(nn.path);var He=W.NB.string(W.NB.get(a,nn.path));a.apply({type:"remove_text",path:nn.path,offset:0,text:He.substring(0,nn.offset)})}if(!W.y$.equals(Q.path,nn.path)){var Pe=W.NB.get(a,nn.path);a.apply({type:"remove_node",path:nn.path,node:Pe});var $e=W.NB.string(Pe);a.apply({type:"insert_text",path:Q.path,offset:Q.offset,text:$e})}Ye(a,O()(O()({},f),{},{children:ee}),{at:Q,rules:i==null?void 0:i.rules})}),rn.next=46;break;case 45:S&&ie.ZP.warning(S);case 46:case"end":return rn.stop()}},r)}));return function(a,f,i){return e.apply(this,arguments)}}(),Kt=function(r,a,f){if(!(!r||!a)){var i=Node.get(r,a),m=pe(i.children).reverse();Editor.withoutNormalizing(r,function(){r.apply({type:"remove_node",node:i,path:a}),m.forEach(function(an){r.apply({type:"insert_node",node:an,path:a})});for(var b=Path.parent(a),j=Node.get(r,b),S=0;Node.has(j,[S+1]);)if(Text.isText(Node.get(j,[S]))&&Text.isText(Node.get(j,[S+1]))){var I=_toConsumableArray(b);I.push(S+1);var C=Node.get(r,I),M=Node.string(C);r.apply({type:"remove_node",path:I,node:C});var _=Path.previous(I),on=Node.string(Node.get(r,_));r.apply({type:"insert_text",path:Path.previous(I),offset:on.length,text:M}),j=Node.get(r,b)}else S++;f==null||f(),Path.previous(a)})}},Ar=function(r,a,f){var i=f.at;r.apply({type:"set_node",path:i,properties:a,newProperties:a}),r.onChange()},Gt=function(r,a,f){r.apply({type:"remove_node",path:f,node:Node.get(r,f)}),r.apply({type:"insert_node",path:f,node:a})},Wr=function(r,a){r&&(W.ML.withoutNormalizing(r,function(){var f=pe(r.children);f.forEach(function(m){r.apply({type:"remove_node",path:[0],node:m})});var i=a?pe(a):[{type:"s",children:[{text:""}]}];i.reverse(),i.forEach(function(m){r.apply({type:"insert_node",path:[0],node:m})})}),r.onChange())},xe=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.reduce(function(a,f){return a+W.NB.string(f)},"")},pe=function(r){return JSON.parse(JSON.stringify(r))},Be=function(){var r="";return r},Jt=function(r){var a;return(a=r[0])===null||a===void 0||(a=a.children)===null||a===void 0?void 0:a.map(function(f){return f.children.map(function(i){return i.text}).join("")}).join("")},Yt=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,a=r%60,f=parseInt("".concat(r/60)),i=0;return f>60&&(f=f%60,i=parseInt("".concat(f/60))),"".concat(i?"".concat(ke(i),":"):"").concat(ke(f),":").concat(ke(a))},ke=function(r){return r>=10?"".concat(r):"0".concat(r)},Hr=function(r,a){if(!(!r||!a))return le.F3.findPath(r,a)},$r=function(r){r&&W.ML.withoutNormalizing(r,function(){var a=W.ML.end(r,[]);W.YR.select(r,a),le.F3.focus(r),r.onChange()})},zr=function(r,a,f){var i=r.isInline,m=r.isVoid,b=r.insertText,j=r.insertBreak,S=r.apply;r.isInline=function(C){var M;return((M=f[C.type])===null||M===void 0?void 0:M.isInline)||i(C)},r.isVoid=function(C){var M;return((M=f[C.type])===null||M===void 0?void 0:M.isVoid)||m(C)};var I=function(M){var _=parseInt(r.maxLength||a||"1000"),on=Ge(r,{tagRules:f}),an=on.length;if(an+M.length>_?(b(M.substring(0,_-an)),Ne.MO.withoutSaving(r,function(){b(M.substring(_-an,M.length))})):b(M),r.selection&&an+M.length>_){var ln=r.selection.focus,yn=ln.path,Q=ln.offset,nn=Q-(an+M.length-_),Dn=M.substring(_-an,M.length),kn=Xn.Z.get({id:"components.SlateEditor.utils.withEditor.YouCanEnterAMaximum",dm:"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57"},{maxLen:_});Ne.MO.withoutSaving(r,function(){r.apply({type:"remove_text",path:yn,offset:nn,text:Dn})}),ie.ZP.warning(kn)}};return r.insertText=I,r.insertFragment=function(C){var M=xe(C);I(M)},r.insertBreak=function(){var C=r.selection;if(C){var M=Array.from(W.ML.nodes(r,{at:C,match:function(ln){return!W.ML.isEditor(ln)&&W.W_.isElement(ln)&&ln.type!=="s"}})),_=Te()(M,1),on=_[0];if(on)return;j()}},r.apply=function(C){C.type==="set_selection"&&Ze||S(C)},r},wr=(0,J.forwardRef)(function(e,r){var a=Tr(),f=e.value,i=e.wordLimit,m=i===void 0?1e3:i,b=e.disabled,j=e.onChange,S=e.variables,I=(0,J.useRef)(!1),C=(0,J.useRef)(Je(e.tagRules)),M=(0,J.useMemo)(function(){return zr((0,le.BU)((0,Ne.VC)((0,W.Jh)())),m,C.current)},[]),_=(0,J.useRef)(M.selection),on=(0,J.useRef)(S);(0,J.useEffect)(function(){C.current=Je(e.tagRules)},[e.tagRules]),(0,J.useEffect)(function(){on.current=S},[S]),(0,J.useEffect)(function(){var gn;if(!I.current){I.current=!0;return}M.maxLength=m;var z=An();Kn(((gn=ge(me(z==null?void 0:z.slice(0,m))))===null||gn===void 0||(gn=gn[0])===null||gn===void 0?void 0:gn.children)||[{type:"s",children:[{text:""}]}])},[m]),(0,J.useImperativeHandle)(r,function(){return{editor:M,getEditorValue:An,_insertNodes:Vn,_setNodes:ae,_setEditorContent:Kn,_findNodePath:re,_wrapNodes:oe,_serialize:Wn,_generateTextBySelection:Hn,_insertFragment:wn,_setEditorContentByStr:Gn}});var an=(0,J.useMemo)(function(){var gn=ge(Or(me(f))),z;return gn&&(gn[0].type==="speak"?z=gn[0].children:z=gn),{initValue:z}},[f]),ln=an.initValue,yn=(0,J.useState)(ln||[{type:"s",children:[{text:""}]}]),Q=Te()(yn,2),nn=Q[0],Dn=Q[1],kn=function(z){JSON.stringify((M==null?void 0:M.selection)||"")!==JSON.stringify(_.current||"")&&(_.current=M==null?void 0:M.selection);var rn=An();f!==rn&&(j==null||j(An()),Dn(z))},Qn=function(z){var rn=z.element,te=rn.type,ee=C.current[te].render;return ee?(0,L.jsx)(ee,O()(O()({},z),{},{renderVarLabel:e.renderVarLabel})):(0,L.jsx)(L.Fragment,{})},Zn=(0,J.useCallback)(function(gn){var z=gn.attributes,rn=gn.children,te=gn.leaf;return(0,L.jsx)("span",O()(O()({},z),{},{style:{paddingLeft:te.text===""?"3px":void 0},children:rn}))},[]),zn=function(){Ze=!0},ne=function(){Ze=!1},An=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ge(M,O()(O()({},z),{},{tagRules:C.current}))},ae=function(z,rn){Ar(M,z,rn)},Vn=function(z){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ye(M,z,O()(O()({},rn),{},{rules:C.current}))},oe=function(z){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Rr(M,z,O()(O()({},rn),{},{rules:C.current}))},Kn=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];Wr(M,z)},Gn=function(){var z,rn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";Kn(((z=ge(me(rn==null?void 0:rn.slice(0,m))))===null||z===void 0||(z=z[0])===null||z===void 0?void 0:z.children)||[{type:"s",children:[{text:""}]}])},re=function(z){return Hr(M,z)},Wn=function(z){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Me(z,O()(O()({},rn),{},{tagRules:C.current}))},Hn=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!M.selection)return null;var rn=W.NB.fragment(M,M.selection);return Me(rn,O()(O()({},z),{},{tagRules:C.current}))},wn=function(z){var rn,te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,ee=An();if(ee.length>=m){ie.ZP.warning(Xn.Z.get({id:"components.commonComponents.SlateEditor.TheNumberOfWordsCannot",dm:"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57"}));return}(!M.selection||te)&&$r(M);var fe=ee.endsWith("/n");te&&ee&&!fe&&M.insertBreak();var ve=z.slice(0,m-ee.length),He=ge(me(ve))||[];(rn=He[0])===null||rn===void 0||rn.children.forEach(function(Pe,$e){var ze;$e!==0&&M.insertBreak(),(ze=Pe.children)===null||ze===void 0||ze.forEach(function(we){we.text?M.insertText(we.text):Vn(we)})})};(0,J.useEffect)(function(){var gn=An();f!==gn&&(j==null||j(An()))},[]);var Jn=function(z){var rn=z.clipboardData.getData("text/plain");wn(rn,!1),z.preventDefault()};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(a,{}),(0,L.jsx)("div",{id:"text-editor",className:Y()("text-editor",e.className),children:(0,L.jsx)(le.mH,{editor:M,value:nn,onChange:kn,children:(0,L.jsx)(le.CX,{onKeyDown:e.onKeyDown,placeholder:e.placeholder||Xn.Z.get({id:"components.commonComponents.SlateEditor.EnterHere",dm:"\u5728\u8FD9\u91CC\u8F93\u5165"}),onBlur:e.onBlur,onFocus:e.onFocus,className:Y()("text-editor-content",e.contentClassName),readOnly:b,renderElement:Qn,renderLeaf:Zn,onCompositionStart:zn,onCompositionEnd:ne,onPaste:Jn,maxLength:e.wordLimit,onCopy:function(z){var rn=Hn()||"";z.clipboardData.setData("text/plain",rn),z.preventDefault()}})})})]})}),Ur=wr,Ze=!1,Xe=n(77652),Qr=n(70076),Vr=n(62518),Kr=n(82092),ue=n.n(Kr),qe,Gr=(0,Cn.Z)(qe||(qe=vn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix});function Jr(e){var r=(0,tn.getCommonConfig)(),a=r.sparkPrefix,f=Gr(),i=function(b){var j=typeof b=="string"?parseFloat(b):b;if(j===null||isNaN(j)){var S;(S=e.onChange)===null||S===void 0||S.call(e,null);return}if(j<e.min){var I;(I=e.onChange)===null||I===void 0||I.call(e,e.min)}else if(j>e.max){var C;(C=e.onChange)===null||C===void 0||C.call(e,e.max)}else{var M;(M=e.onChange)===null||M===void 0||M.call(e,j)}};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(f,{}),(0,L.jsxs)("div",{onMouseUp:function(){var b;return(b=e.onBlur)===null||b===void 0?void 0:b.call(e)},className:Y()("".concat(a,"-slider-selector"),e.className),children:[(0,L.jsx)(Xe.Z,{disabled:e.disabled,onChange:i,value:e.value===null?void 0:e.value,min:e.min,max:e.max,step:e.step,marks:e.marks||ue()(ue()({},e.min,e.min),e.max,e.max),tooltip:{getPopupContainer:function(b){return b}}}),(0,L.jsx)("div",{style:O()({width:"48px"},e.inputNumberWrapperStyle),children:(0,L.jsx)(t.Z,{disabled:e.disabled,controls:!1,min:e.min,max:e.max,onBlur:function(){var b;return(b=e.onBlur)===null||b===void 0?void 0:b.call(e)},step:e.step,value:e.value,onChange:i,precision:e.precision})})]})]})}var Yr=n(75229),Xr=n(90118),qr=n(18762),_r=n(98587),nt=n(96295),et=n(2567),rt=n(95726),tt=n(70588),at=n(8639),_e=n(2104),ot=n(67825),se=n.n(ot),it=n(6002),_n=n(91301),nr,er=(0,Cn.Z)(nr||(nr=vn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),lt=["showDivider","closable"],rr=function(){var r=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,f=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(f,"px"),function(){document.body.style.overflow=r,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,f)}},Un=function(r){var a=er(),f=(0,tn.getCommonConfig)(),i=f.sparkPrefix,m=r.showDivider,b=m===void 0?!0:m,j=r.closable,S=j===void 0?!0:j,I=se()(r,lt);(0,J.useEffect)(function(){if(r.open){var on=rr();return on}},[r.open]);var C=function(an){return r.info?(0,L.jsxs)("div",{className:"".concat(i,"-modal-footer-wrapper"),children:[(0,L.jsx)("span",{className:"".concat(i,"-modal-footer-info"),children:r.info}),(0,L.jsx)("div",{className:"".concat(i,"-modal-footer-origin-node"),children:an})]}):an},M=S?r.closeIcon||(0,L.jsx)(it.Z,{className:"".concat(i,"-modal-title-close"),onClick:function(an){var ln;(ln=r.onCancel)===null||ln===void 0||ln.call(r,an)}}):null,_=r.footer===void 0?C:r.footer;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(a,{}),(0,L.jsx)(_n.Z,O()(O()({},I),{},{centered:!1,closeIcon:null,width:r.width||"auto",title:(0,L.jsxs)("div",{className:"".concat(i,"-modal-title-wrapper"),children:[(0,L.jsx)("div",{className:Y()("".concat(i,"-modal-title"),ue()({},"".concat(i,"-modal-title-padding"),S)),children:r.title}),M]}),wrapClassName:Y()("".concat(i,"-modal"),ue()({},"".concat(i,"-show-divider"),b),r.wrapClassName,"animate-in"),footer:_,transitionName:""}))]})};Un.useModal=_n.Z.useModal;var de=function(r){return function(a){var f=rr(),i=(0,tn.getCommonConfig)(),m=i.sparkPrefix,b=a==null?void 0:a.afterClose,j=a==null?void 0:a.content;function S(){var C=er();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(C,{}),j]})}var I=O()(O()({},a),{},{content:(0,L.jsx)(S,{}),width:a.width||"auto",centered:!1,transitionName:"",wrapClassName:Y()("".concat(m,"-modal"),a.wrapClassName,"animate-in"),afterClose:function(){f();for(var M=arguments.length,_=new Array(M),on=0;on<M;on++)_[on]=arguments[on];b==null||b.apply(void 0,_)}});return r(I)}};Un.success=de(_n.Z.success),Un.error=de(_n.Z.error),Un.warning=de(_n.Z.warning),Un.info=de(_n.Z.info),Un.confirm=de(_n.Z.confirm),Un.SMALL_WIDTH=640,Un.MEDIUM_WIDTH=800,Un.LARGE_WIDTH=960;var st=Un,ct=n(14679),ut=n(56652),tr,ar=(0,Cn.Z)(tr||(tr=vn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),dt=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],ft=function(r){var a=r.onOk,f=r.onCancel,i=r.okText,m=i===void 0?"\u786E\u5B9A":i,b=r.okButtonProps,j=r.cancelText,S=j===void 0?"\u53D6\u6D88":j,I=r.cancelButtonProps,C=r.info,M=r.footer,_=se()(r,dt),on=ar(),an=(0,tn.getCommonConfig)(),ln=an.antPrefix,yn=function(nn){if(f)f();else{var Dn;(Dn=_.onClose)===null||Dn===void 0||Dn.call(_,nn)}};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(on,{}),(0,L.jsx)(un.Z,O()(O()({},_),{},{footer:M||(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:"".concat(ln,"-drawer-footer-info"),children:C}),(0,L.jsxs)("div",{className:"".concat(ln,"-drawer-footer-buttons"),children:[(0,L.jsx)(K.Z,O()(O()({onClick:yn},I),{},{children:S})),(0,L.jsx)(K.Z,O()(O()({type:"primary",onClick:a},b),{},{children:m}))]})]})}))]})},vt=ft,mt=["children","className","style","showDivider"],or=function(r){var a=r.children,f=r.className,i=r.style,m=r.showDivider,b=m===void 0?!0:m,j=se()(r,mt),S=ar(),I=(0,tn.getCommonConfig)(),C=I.sparkPrefix,M=I.antPrefix;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(S,{}),(0,L.jsx)(ut.Z,O()(O()({closeIcon:(0,L.jsx)(ct.Z,{size:24}),className:Y()("".concat(C,"-drawer"),f,ue()({},"".concat(M,"-show-divider"),b)),style:O()({},i)},j),{},{children:a}))]})};Object.assign(or,{Confirm:vt});var gt=or,xt=n(58911),pt=n(88602),ht=n(62910),Pt=n(99090),he=n(90264),ir,lr=(0,Cn.Z)(ir||(ir=vn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),yt=["children","type","danger","title","width","className"],sr=function(){var r=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,f=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(f,"px"),function(){document.body.style.overflow=r,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,f)}},cr=function(r){var a=function(ln){var yn=ln.type,Q=ln.title,nn=(0,tn.getCommonConfig)(),Dn=nn.antPrefix;switch(yn){case"success":return(0,L.jsxs)(he.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,L.jsx)(xt.Z,{style:{color:"var(--".concat(Dn,"-color-success)"),fontSize:18,margin:"0 3px"}}),Q]});case"warning":case"confirm":return(0,L.jsxs)(he.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,L.jsx)(pt.Z,{style:{color:"var(--".concat(Dn,"-color-warning)"),fontSize:18,margin:"0 3px"}}),Q]});case"info":return(0,L.jsxs)(he.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,L.jsx)(ht.Z,{style:{color:"var(--".concat(Dn,"-color-info)"),fontSize:18,margin:"0 3px"}}),Q]});case"error":return(0,L.jsxs)(he.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,L.jsx)(Pt.Z,{style:{color:"var(--".concat(Dn,"-color-error)"),fontSize:18,margin:"0 3px"}}),Q]});default:return Xn.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},f=r.children,i=r.type,m=i===void 0?"info":i,b=r.danger,j=b===void 0?!1:b,S=r.title,I=r.width,C=I===void 0?"auto":I,M=r.className,_=M===void 0?"":M,on=se()(r,yt);return{width:C,transitionName:"",restProps:on,closeIcon:null,title:a({type:m,title:S}),okButtonProps:{danger:m==="error"||m==="warning"||j},destroyOnClose:!0,className:Y()(_,"animate-in","".concat((0,tn.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:r.content||f,children:f}},ur=function(r){var a=cr(r),f=lr();return(0,J.useEffect)(function(){if(r.open){var i=sr();return i}},[r.open]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(f,{}),(0,L.jsx)(_n.Z,O()(O()({width:a.width,transitionName:""},a.restProps),{},{closeIcon:null,title:a.title,okButtonProps:a.okButtonProps||{},destroyOnClose:a.destroyOnClose,className:a.className,children:a.content||a.children}))]})},bt=["success","info","warning","error","confirm"];bt.forEach(function(e){ur[e]=function(r){var a=cr(O()(O()({},r),{},{type:e})),f=sr();function i(){var m=lr();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(m,{}),a.content]})}return _n.Z.confirm(O()(O()(O()({},a),a.restProps),{},{content:(0,L.jsx)(i,{}),icon:null,afterClose:function(){var b;if(f(),(b=a.restProps)!==null&&b!==void 0&&b.afterClose){var j;(j=a.restProps).afterClose.apply(j,arguments)}}}))}});var Ct=ur,jt=n(86822);function dr(){return Fe.apply(this,arguments)}function Fe(){return Fe=qn()(Ln()().mark(function e(){var r,a=arguments;return Ln()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return r=a.length>0&&a[0]!==void 0?a[0]:100,i.abrupt("return",new Promise(function(m){setTimeout(m,r)}));case 2:case"end":return i.stop()}},e)})),Fe.apply(this,arguments)}var St=n(65482),fr=n(95336);function vr(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.timeout,f=a===void 0?5e3:a,i=r.intervalTime,m=i===void 0?100:i,b=Date.now();return new Promise(function(j,S){var I=setInterval(function(){var C=e();C?(clearInterval(I),j(C)):Date.now()-b>f&&(S("timeout"),clearInterval(I))},m)})}function Et(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return vr(function(){return document.querySelector(e)},r)}var mr=n(8209),Tt=["product","action","url","version","region","headers"],Nt=function(){var e=qn()(Ln()().mark(function a(f,i,m){var b,j,S,I,C,M,_,on,an,ln,yn,Q,nn,Dn,kn;return Ln()().wrap(function(Zn){for(;;)switch(Zn.prev=Zn.next){case 0:return j=f.product,S=f.action,I=f.url,C=f.version,M=f.region,_=f.headers,on=_===void 0?{}:_,an=se()(f,Tt),ln="".concat(I||"/data/api.json","?action=").concat(S,"&product=").concat(j),C&&(ln+="&version=".concat(C)),yn={sec_token:((b=window.ALIYUN_CONSOLE_CONFIG)===null||b===void 0?void 0:b.SEC_TOKEN)||"",region:M},i&&(yn.params=JSON.stringify(i)),m&&Object.assign(yn,m),Q=O()({method:"post",credentials:"same-origin",headers:O()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},on)},an),nn=Object.assign({},Q),nn.body=(0,mr.stringify)(yn),Zn.next=11,fetch(ln,nn);case 11:return Dn=Zn.sent,Zn.next=14,Dn.json();case 14:if(kn=Zn.sent,!(kn.code!=="200"&&!kn.successResponse)){Zn.next=17;break}return Zn.abrupt("return",Promise.reject(kn));case 17:return Zn.abrupt("return",kn);case 18:case"end":return Zn.stop()}},a)}));function r(a,f,i){return e.apply(this,arguments)}return r}(),gr=Nt;function Dt(e,r){return Oe.apply(this,arguments)}function Oe(){return Oe=qn()(Ln()().mark(function e(r,a){var f,i,m;return Ln()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:i=r==null||(f=r.getReader)===null||f===void 0?void 0:f.call(r),i||(console.log("[sse]error: Can Not Find Reader Object"),console.log("[sse]StreamInfo: ",r));case 2:return j.next=4,i.read();case 4:if((m=j.sent).done){j.next=8;break}try{a(m.value)}catch(S){console.log("[sse-error][onmessage] pleach check `onmessage` or `onJsonText`.",S)}j.next=2;break;case 8:case"end":return j.stop()}},e)})),Oe.apply(this,arguments)}function Mt(e){var r,a,f,i=!1;return function(b){r===void 0?(r=b,a=0,f=-1):r=kt(r,b);for(var j=r.length,S=0;a<j;){i&&(r[a]===10&&(S=++a),i=!1);for(var I=-1;a<j&&I===-1;++a)switch(r[a]){case 58:f===-1&&(f=a-S);break;case 13:i=!0;case 10:I=a;break}if(I===-1)break;e(r.subarray(S,I),f),S=a,f=-1}S===j?r=void 0:S!==0&&(r=r.subarray(S),a-=S)}}function Bt(e,r,a){var f=xr(),i=new TextDecoder;return function(b,j){if(b.length===0)a==null||a(f),f=xr();else if(j>0){var S=i.decode(b.subarray(0,j)),I=j+(b[j+1]===32?2:1),C=i.decode(b.subarray(I));switch(S){case"data":f.data=f.data?"".concat(f.data,`
`).concat(C):C;break;case"event":f.event=C;break;case"id":e(f.id=C);break;case"retry":var M=parseInt(C,10);isNaN(M)||r(f.retry=M);break}}}}function kt(e,r){var a=new Uint8Array(e.length+r.length);return a.set(e),a.set(r,e.length),a}function xr(){return{data:"",event:"",id:"",retry:void 0}}var Zt=["signal","headers","onopen","onmessage","onclose","onerror","fetch","autoRetryTime","timeout","debug"],Le="text/event-stream",Ft=1e3,pr="last-event-id";function hr(e,r){return Ie.apply(this,arguments)}function Ie(){return Ie=qn()(Ln()().mark(function e(r,a){var f,i,m,b,j,S,I,C,M,_,on,an,ln;return Ln()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return f=a.signal,i=a.headers,m=a.onopen,b=a.onmessage,j=a.onclose,S=a.onerror,I=a.fetch,C=a.autoRetryTime,M=a.timeout,_=a.debug,on=_===void 0?!1:_,an=se()(a,Zt),ln=0,Q.abrupt("return",new Promise(function(nn,Dn){var kn=O()({},i);kn.accept||(kn.accept=Le);var Qn=Ft,Zn=0,zn=0,ne=new AbortController;function An(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(on&&console.log("[sse] dispose"),window.clearTimeout(Zn),window.clearTimeout(zn),!re){var Wn,Hn;(Wn=ne)===null||Wn===void 0||(Hn=Wn.abort)===null||Hn===void 0||Hn.call(Wn)}}function ae(){window.clearTimeout(zn),M!==0&&(zn=window.setTimeout(function(){on&&console.log("[sse] timeout"),Dn(new Error("timeout")),S==null||S(new Error("timeout")),An()},M||60*1e3))}f==null||f.addEventListener("abort",function(){An(),nn()});var Vn=I!=null?I:window.fetch,oe=m!=null?m:Ot;function Kn(){return Gn.apply(this,arguments)}function Gn(){return Gn=qn()(Ln()().mark(function re(){var Wn,Hn,wn,Jn;return Ln()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.prev=0,ae(),z.next=4,Vn(r,O()(O()({},an),{},{headers:kn,signal:(Wn=ne)===null||Wn===void 0?void 0:Wn.signal}));case 4:return Hn=z.sent,z.next=7,oe(Hn);case 7:if(Hn.body){z.next=11;break}return on&&console.log("[sse]no body, delay 100ms"),z.next=11,dr(100);case 11:return on&&console.log("[sse]response.body",Hn.body),z.next=14,Dt(Hn.body,Mt(Bt(function(rn){rn?kn[pr]=rn:delete kn[pr]},function(rn){Qn=rn},function(rn){ae(),b==null||b(rn)})));case 14:ne=null,j==null||j(),An(),nn(),z.next=43;break;case 20:if(z.prev=20,z.t0=z.catch(0),z.t0&&console.error("[sse]err",z.t0),!(!(f!=null&&f.aborted)&&C&&ln<C)){z.next=39;break}return z.prev=24,ln+=1,Jn=(wn=S==null?void 0:S(z.t0))!==null&&wn!==void 0?wn:Qn,window.clearTimeout(Zn),typeof Jn=="number"&&(on&&console.log("[sse] retry "+ln),Zn=window.setTimeout(Kn,Jn)),z.abrupt("return",Promise.resolve());case 32:z.prev=32,z.t1=z.catch(24),on&&console.log("[sse] reject innerErr ",z.t1),An(),Dn(z.t1);case 37:z.next=43;break;case 39:on&&console.log("[sse] reject finally"),An(z.t0 instanceof Response||z.t0 instanceof DOMException&&z.t0.name==="AbortError"),S==null||S(z.t0),Dn(z.t0);case 43:case"end":return z.stop()}},re,null,[[0,20],[24,32]])})),Gn.apply(this,arguments)}Kn()}));case 3:case"end":return Q.stop()}},e)})),Ie.apply(this,arguments)}function Ot(e){var r=e.headers.get("content-type");if(!(r!=null&&r.startsWith(Le)))throw new Error("Expected content-type to be ".concat(Le,", Actual: ").concat(r))}function Lt(e){return Re.apply(this,arguments)}function Re(){return Re=qn()(Ln()().mark(function e(r){var a,f,i,m,b,j,S;return Ln()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return a=r.action,f=r.body,i=r.product,m=r.version,b=r.region,j=r.params,S={action:a,product:i,region:b,url:"/tool/sse/get.json",version:m},C.abrupt("return",gr(S,j,{content:JSON.stringify(f)}));case 3:case"end":return C.stop()}},e)})),Re.apply(this,arguments)}function It(e,r,a,f){var i=r.onMessage,m=r.onClose,b=r.onError,j=r.timeout,S=e.body,I=e.uri,C=e.headers,M=e.query,_=e.path,on=C["Content-Type"],an="".concat(I.replace(/\/$/,"")).concat(_);M&&Object.keys(M).length&&(an="".concat(an,"?").concat((0,mr.stringify)(M)));try{f.value=!1,hr(an,{method:"POST",body:on==="application/x-www-form-urlencoded"?new URLSearchParams(JSON.parse(S)):S,signal:a.signal,timeout:j,headers:C,onopen:function(yn){return yn.status!==200?Promise.reject(yn):Promise.resolve()},onmessage:function(yn){try{var Q=yn.data,nn=Q===void 0?"{}":Q,Dn=JSON.parse(nn);i==null||i(Dn)}catch(kn){b==null||b(kn)}},onclose:function(){f.value=!0,m==null||m()},onerror:function(yn){f.value=!0,m==null||m(),!(yn instanceof DOMException&&yn.name==="AbortError")&&(b==null||b(yn))}})}catch(ln){f.value=!0,b==null||b(ln),m==null||m()}}function Rt(e,r,a){return Ae.apply(this,arguments)}function Ae(){return Ae=qn()(Ln()().mark(function e(r,a,f){var i,m,b,j;return Ln()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return i=r.onClose,m=r.onError,I.prev=1,I.next=4,Lt(r);case 4:b=I.sent,j=b.data,It(j,r,a,f),I.next=13;break;case 9:I.prev=9,I.t0=I.catch(1),i==null||i(),m==null||m(I.t0);case 13:case"end":return I.stop()}},e,null,[[1,9]])})),Ae.apply(this,arguments)}function At(e){return We.apply(this,arguments)}function We(){return We=qn()(Ln()().mark(function e(r){var a,f;return Ln()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return a=new AbortController,f={value:!0},m.next=4,Rt(r,a,f);case 4:return m.abrupt("return",{dispose:function(){f.value&&a.abort("\u53D6\u6D88\u8BF7\u6C42")}});case 5:case"end":return m.stop()}},e)})),We.apply(this,arguments)}var Wt=n(28331);function Ht(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof e!="string")return a||console.warn(e,"is not valid json"),r?e:null;try{return JSON.parse(e)}catch(f){return a||console.warn(e,"is not valid json"),r?e:null}}function $t(e){for(var r=new TextEncoder,a=r.encode(e),f="",i=0;i<a.length;i++)f+=String.fromCharCode(a[i]);var m=btoa(f);return m}function zt(e){for(var r=atob(e),a=new Uint8Array(r.length),f=0;f<r.length;f++)a[f]=r.charCodeAt(f);var i=new TextDecoder("utf-8"),m=i.decode(a);return m}var Pr=(0,x.Z)(c),yr=(0,x.Z)(y,!0),wt=(0,x.Z)(N),Ut=(0,x.Z)(V,!0)},95336:function(xn,U,n){n.d(U,{JG:function(){return A},rb:function(){return T}});var y=n(26068),c=n.n(y),V=n(67825),N=n.n(V),$=n(75271),D=["maxWidth","maxHeight"];function E(){var F;return((F=window.g_config)===null||F===void 0?void 0:F.isIntl)||!1}var A=function(s){if(navigator.clipboard)navigator.clipboard.writeText(s);else{var x=document.createElement("textarea");document.body.appendChild(x),x.style.position="fixed",x.style.clip="rect(0 0 0 0)",x.style.top="10px",x.value=s,x.select(),document.execCommand("copy",!0),document.body.removeChild(x)}},T=function(s){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=x.maxWidth,h=x.maxHeight,v=N()(x,D);return c()({overlayInnerStyle:{maxWidth:o||326,maxHeight:h||150,overflowY:"auto",padding:"6px 12px"},title:s,arrow:!1},v)};function H(F){return React.isValidElement(F)}function R(F){var s=F||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(s)}var p=function(s){return s>=10?s:"0".concat(s)},g=function(s){if(s<60){var x=Math.ceil(s);return"0:".concat(p(x))}var o=Math.floor(s/60),h=Math.ceil(s%60);return"".concat(p(o),":").concat(p(h))}}}]);
