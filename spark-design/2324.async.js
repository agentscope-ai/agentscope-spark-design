"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[2324],{52783:function(pn,Q,n){n.d(Q,{Z:function(){return C}});var b=n(26068),u=n.n(b),V=n(5340),M=n(75271),L=n(53649),j=n.n(L),k=n(75469),R,T=(0,k.Z)(R||(R=j()([`

.`,"-anchor-wrapper .","-anchor .",`-anchor-link-title {
  color: var(--`,`-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.`,`-anchor-link {
  --`,`-anchor-link-padding-block: 0;
  --`,`-anchor-link-padding-inline-start: 0;
}
`])),function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix}),O=n(52676),N=(0,M.forwardRef)(function(P){var B=T();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(B,{}),(0,O.jsx)(V.Z,u()({},P))]})}),C=N},44739:function(pn,Q,n){n.d(Q,{Z:function(){return p}});var b=n(51886),u=n(94376),V=n(32102),M=n(36891),L=n(4797),j=n(29171),k=n(73981),R=n(99670),T=n(75271),O=n(53649),N=n.n(O),C=n(75469),P,B=(0,C.Z)(P||(P=N()([`
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
`])),function(v){return v.sparkPrefix},function(v){return v.sparkPrefix},function(v){return v.sparkPrefix},function(v){return v.sparkPrefix},function(v){return v.antPrefix}),l=n(52676),x=function(t){var d=Math.floor(t/60),i=Math.floor(t%60);return"".concat(d.toString().padStart(2,"0"),":").concat(i.toString().padStart(2,"0"))},o=function(t){var d=t.className,i=t.isPlaying,D=t.onPlayPause,s=t.onFullscreen,Z=t.onProgressClick,m=t.enableVolume,z=m===void 0?!1:m,J=t.enableFullscreen,G=t.muted,_=G===void 0?!0:G,Y=t.onMute,U=B(),nn=(0,b.getCommonConfig)(),un=nn.sparkPrefix,gn=(0,T.useMemo)(function(){return x(t.currentTime||0)},[t.currentTime]),dn=(0,T.useMemo)(function(){return x(t.duration||0)},[t.duration]),$=(0,T.useMemo)(function(){return Math.min((t.currentTime||0)/(t.duration||.01)*100,100)},[t.currentTime,t.duration]),fn=function(vn){if(!(!Z||!t.duration)){var Cn=vn.currentTarget.getBoundingClientRect(),mn=vn.clientX-Cn.left,hn=Cn.width,q=mn/hn,tn=q*t.duration,an=Math.max(0,Math.min(tn,t.duration));Z(an)}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(U,{}),(0,l.jsxs)("div",{className:"".concat(un,"-media-player-controller ").concat(d||""),children:[(0,l.jsx)(u.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:i?(0,l.jsx)(M.Z,{}):(0,l.jsx)(L.Z,{}),onClick:D}),(0,l.jsx)(u.Z,{bordered:!1,size:"small",shape:"default",disabled:!z,icon:z&&_?(0,l.jsx)(j.Z,{}):(0,l.jsx)(k.Z,{}),onClick:Y}),(0,l.jsx)("span",{className:"".concat(un,"-media-time-text"),children:gn}),(0,l.jsx)("div",{className:"".concat(un,"-media-progress-container"),onClick:fn,children:(0,l.jsx)(V.Z,{className:"".concat(un,"-media-progress-bar"),percent:$,showInfo:!1})}),(0,l.jsx)("span",{className:"".concat(un,"-media-time-text"),children:dn}),J&&(0,l.jsx)(u.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,l.jsx)(R.Z,{}),onClick:s})]})]})},p=o},42425:function(pn,Q,n){n.d(Q,{Z:function(){return d}});var b=n(26068),u=n.n(b),V=n(48305),M=n.n(V),L=n(67825),j=n.n(L),k=n(75271),R=n(82187),T=n.n(R),O=n(44739),N=n(56630),C=n(51886),P=n(53649),B=n.n(P),l=n(75469),x,o=(0,l.Z)(x||(x=B()([`
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
`])),function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix}),p=n(52676),v=["controls","className","style"],t=(0,k.forwardRef)(function(i,D){var s=i.controls,Z=i.className,m=i.style,z=j()(i,v),J=(0,C.getCommonConfig)(),G=J.sparkPrefix,_=o(),Y=(0,k.useState)(0),U=M()(Y,2),nn=U[0],un=U[1],gn=(0,k.useState)(0),dn=M()(gn,2),$=dn[0],fn=dn[1],ln=(0,k.useState)(!1),vn=M()(ln,2),Cn=vn[0],mn=vn[1],hn=(0,N.Z)(i,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!1}),q=M()(hn,2),tn=q[0],an=q[1],cn=(0,k.useRef)(null),Pn=function(Nn){cn.current=Nn,D&&(typeof D=="function"?D(Nn):D.current=Nn)};(0,k.useEffect)(function(){var Sn;return Cn&&(Sn=setInterval(function(){cn.current&&un(cn.current.currentTime)},16)),function(){Sn&&clearInterval(Sn)}},[Cn]);var Tn=function(){cn.current&&fn(cn.current.duration)},F=function(){cn.current&&(Cn?cn.current.pause():cn.current.play(),mn(!Cn))},yn=function(){mn(!0)},Mn=function(){mn(!1)},kn=function(){var Nn;mn(!1),un(((Nn=cn.current)===null||Nn===void 0?void 0:Nn.duration)||0)},jn=function(Nn){cn.current&&(cn.current.currentTime=Nn,un(Nn))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(_,{}),(0,p.jsxs)("div",{className:T()("".concat(G,"-audio-container"),Z),style:m,children:[(0,p.jsx)("audio",u()(u()({ref:Pn},z),{},{muted:tn,className:"".concat(G,"-audio-element"),onLoadedMetadata:Tn,onPlay:yn,onPause:Mn,onEnded:kn})),(0,p.jsx)(O.Z,{className:"".concat(G,"-audio-controller-wrapper"),isPlaying:Cn,currentTime:nn,duration:$,enableVolume:!0,enableFullscreen:!1,muted:tn,onMute:function(){return an(!tn)},onPlayPause:F,onProgressClick:jn})]})]})}),d=t},32893:function(pn,Q,n){n.d(Q,{Z:function(){return o}});var b=n(26068),u=n.n(b),V=n(48305),M=n.n(V),L=n(67825),j=n.n(L),k=n(75605),R=n(75271),T=n(53649),O=n.n(T),N=n(75469),C,P=(0,N.Z)(C||(C=O()([`
.`,`-avatar {
  cursor: default;
}
`])),function(p){return p.antPrefix}),B=n(52676),l=["children"],x=(0,R.forwardRef)(function(p,v){var t=P(),d=p.children,i=j()(p,l),D=(0,R.useState)(p.children),s=M()(D,2),Z=s[0],m=s[1];return(0,R.useEffect)(function(){if(typeof d=="string"){m(d.slice(0,1));return}m(d)},[d]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(t,{}),(0,B.jsx)(k.Z,u()(u()({ref:v},i),{},{children:Z}))]})}),o=x},61670:function(pn,Q,n){n.d(Q,{Z:function(){return v}});var b=n(26068),u=n.n(b),V=n(67825),M=n.n(V),L=n(45893),j=n(75605),k=n(42478),R=n(40500),T=n(75271),O=n(51886),N=n(53649),C=n.n(N),P=n(75469),B,l=(0,P.Z)(B||(B=C()([`
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
`])),function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix}),x=n(52676),o=["items"],p=function(d){var i=d.items,D=i===void 0?[]:i,s=M()(d,o),Z=(0,O.getCommonConfig)(),m=Z.sparkPrefix,z=l(),J=T.useMemo(function(){return D.map(function(G){var _=G.title,Y=[];return G.iconUrl&&Y.push((0,x.jsx)(j.Z,{size:20,src:G.iconUrl},"avatar")),G.dropdown?Y.push((0,x.jsxs)("span",{className:"".concat(m,"-breadcrumb-dropdown-title"),children:[G.title,(0,x.jsx)(L.Z,{size:16})]},"title")):Y.push((0,x.jsx)("span",{children:G.title},"title")),G.dropdown?_=(0,x.jsx)(k.Z,{menu:{items:G.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(m,"-breadcrumb-dropdown"),children:(0,x.jsx)("span",{children:Y})}):(G.iconUrl||Y.length>1)&&(_=(0,x.jsx)("span",{className:"".concat(m,"-breadcrumb-item-content"),children:Y})),u()(u()({},G),{},{title:_})})},[D]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(z,{}),(0,x.jsx)(R.Z,u()(u()({},s),{},{items:J,className:"".concat(m,"-breadcrumb ").concat(s.className||"")}))]})},v=p},43529:function(pn,Q,n){n.d(Q,{Z:function(){return x}});var b=n(26068),u=n.n(b),V=n(67825),M=n.n(V),L=n(51886),j=n(96971),k=n(82187),R=n.n(k),T=n(53649),O=n.n(T),N=n(75469),C,P=(0,N.Z)(C||(C=O()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix}),B=n(52676),l=["title","info","children","className"],x=function(o){var p=o.title,v=o.info,t=o.children,d=o.className,i=M()(o,l),D=P(),s=(0,L.getCommonConfig)(),Z=s.sparkPrefix;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(D,{}),(0,B.jsx)(j.Z,u()(u()({className:R()("".concat(Z,"-card"),d)},i),{},{title:null,children:(0,B.jsxs)("div",{className:"".concat(Z,"-card-wrapper"),children:[p&&(0,B.jsx)("div",{className:"".concat(Z,"-title"),children:p}),v&&(0,B.jsx)("div",{className:"".concat(Z,"-info"),children:v}),t&&(0,B.jsx)("div",{className:"".concat(Z,"-content"),children:t})]})}))]})}},75517:function(pn,Q,n){n.d(Q,{Z:function(){return x}});var b=n(26068),u=n.n(b),V=n(67825),M=n.n(V),L=n(80733),j=n(75271),k=n(51886),R=n(53649),T=n.n(R),O=n(75469),N,C=(0,O.Z)(N||(N=T()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),P=n(52676),B=["description","descriptionClassName","descriptionStyle","children"],l=function(p){var v=p.description,t=p.descriptionClassName,d=p.descriptionStyle,i=p.children,D=M()(p,B),s=(0,k.getCommonConfig)(),Z=s.antPrefix,m=s.sparkPrefix,z=C(),J={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(Z,"-color-text-tertiary)")};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(z,{}),(0,P.jsxs)("div",{className:"".concat(m,"-checkbox"),children:[(0,P.jsx)(L.Z,u()(u()({},D),{},{children:i})),v&&(0,P.jsx)("div",{className:t,style:u()(u()({},J),d),children:v})]})]})};l.Group=L.Z.Group;var x=l},83665:function(pn,Q,n){n.d(Q,{ZP:function(){return $},xO:function(){return nn}});var b=n(26068),u=n.n(b),V=n(15558),M=n.n(V),L=n(51886),j=n(67464),k=n(39707),R=n(72717),T=n(20660),O=n(84669),N=n(74209),C=n(81246),P=n(44949),B=n(99897),l=n(19487),x=n(70667),o=n(10432),p=n(24365),v=n(47107),t=n(56664),d=n(15222),i=n(80047),D=n(82187),s=n.n(D),Z=n(28640),m=n(75271),z=n(53649),J=n.n(z),G=n(75469),_,Y=(0,G.Z)(_||(_=J()([`
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
`])),function(fn){return fn.sparkPrefix},function(fn){return fn.antPrefix},function(fn){return fn.antPrefix},function(fn){return fn.antPrefix},function(fn){return fn.antPrefix},function(fn){return fn.antPrefix},function(fn){return fn.antPrefix},function(fn){return fn.antPrefix},function(fn){return fn.antPrefix},function(fn){return fn.antPrefix},function(fn){return fn.antPrefix}),U=n(52676),nn={javascript:[(0,P.eJ)()],jsx:[(0,P.eJ)()],python:[(0,o.Vs)()],json:[(0,B.AV)()],java:[(0,C.C)()],yaml:[(0,p.rV)()],php:[(0,x.h)()],go:[(0,O.go)()],csharp:[(0,R.N)()],css:[(0,T.iv)()],html:[(0,N.dy)()],curl:[],markdown:[(0,l.JH)()]},un={javascript:[(0,v.Q2)()],json:[(0,v.Q2)(),(0,v.ir)((0,B.ap)())]},gn=function(){var ln=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"{}",vn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,Cn=ln;try{Cn=JSON.stringify(JSON.parse(ln),null,vn)}catch(mn){}return Cn},dn=function(ln){var vn,Cn=(0,L.getCommonConfig)(),mn=m.useContext(j.ZP.ConfigContext),hn=((vn=mn.theme)===null||vn===void 0?void 0:vn.algorithm)===i.Z.darkAlgorithm,q=Cn.sparkPrefix,tn=Y(),an=(0,m.useMemo)(function(){return ln.theme===void 0?hn?t.Pc:t.Zp:ln.theme==="dark"?t.Pc:t.Zp},[hn,ln.theme]),cn=typeof ln.language=="string"?[].concat(M()(nn[ln.language]||[]),M()(ln.value&&ln.language in un?un[ln.language]:[])):ln.language.reduce(function(F,yn){return[].concat(M()(F),[nn[yn]])},[]),Pn=(0,U.jsx)("div",{className:s()("".concat(q,"-code-block"),ln.className),children:(0,U.jsx)(d.ZP,u()({extensions:cn,value:ln.language==="json"?gn(ln.value):ln.value,theme:an},(0,Z.Z)(ln,["language","theme","extensions","value"])))});if(ln.theme!==void 0){var Tn=ln.theme==="dark"?k.bailianDarkTheme:k.bailianTheme;return(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)(j.ZP,u()(u()({},Tn),{},{children:[(0,U.jsx)(tn,{}),Pn]}))})}return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(tn,{}),Pn]})},$=dn},30807:function(pn,Q,n){n.d(Q,{Z:function(){return N}});var b=n(26068),u=n.n(b),V=n(9483),M=n(53649),L=n.n(M),j=n(75469),k,R=(0,j.Z)(k||(k=L()([`
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
`])),function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix}),T=n(52676),O=function(P){var B=R();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(B,{}),(0,T.jsx)(V.Z,u()({},P))]})},N=O},28932:function(pn,Q,n){n.d(Q,{Z:function(){return t}});var b=n(26068),u=n.n(b),V=n(82092),M=n.n(V),L=n(48305),j=n.n(L),k=n(51886),R=n(45893),T=n(83516),O=n(82187),N=n.n(O),C=n(75271),P=n(53649),B=n.n(P),l=n(75469),x,o=(0,l.Z)(x||(x=B()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix}),p=n(52676),v=function(i){var D,s,Z,m,z,J,G=i.collapsedHeight,_=i.expandedHeight,Y=i.title,U=Y===void 0?"":Y,nn=i.expandOnPanelClick,un=i.extra,gn=i.children,dn=i.defaultExpanded,$=(0,C.useState)(dn),fn=j()($,2),ln=fn[0],vn=fn[1],Cn=(0,C.useState)(!0),mn=j()(Cn,2),hn=mn[0],q=mn[1],tn=(0,C.useState)(G),an=j()(tn,2),cn=an[0],Pn=an[1],Tn=(0,C.useRef)(null),F=(0,k.getCommonConfig)(),yn=F.sparkPrefix,Mn=F.antPrefix,kn=o();(0,C.useEffect)(function(){Tn.current&&Pn(ln&&_?_:ln?Tn.current.scrollHeight:G)},[ln,G,_,gn]);var jn=function(Rn){Rn.stopPropagation(),Rn.preventDefault(),vn(function(ne){return!ne})},Sn=function(Rn){Rn.stopPropagation(),Rn.preventDefault(),ln||vn(!0)},Nn=function(){q(!0)},zn=function(){q(!0)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(kn,{}),(0,p.jsxs)("div",{className:N()("".concat(yn,"-collapse-panel"),{collapsible:!ln&&nn},(D=i.classNames)===null||D===void 0?void 0:D.wrapper),style:(s=i.styles)===null||s===void 0?void 0:s.wrapper,onClick:nn?Sn:void 0,onMouseEnter:nn?Nn:void 0,onMouseLeave:nn?zn:void 0,children:[(0,p.jsxs)("div",{className:N()("".concat(yn,"-collapse-panel-header"),(Z=i.classNames)===null||Z===void 0?void 0:Z.header),style:(m=i.styles)===null||m===void 0?void 0:m.header,onClick:jn,children:[(0,p.jsxs)("span",{className:"".concat(yn,"-collapse-panel-title"),children:[U,(0,p.jsxs)("div",{className:"".concat(yn,"-collapse-panel-icon-wrapper"),children:[!ln&&hn&&nn&&(0,p.jsx)(R.Z,{style:{fontSize:"18px"}}),ln&&hn&&nn&&(0,p.jsx)(T.Z,{style:{fontSize:"18px"}})]})]}),un&&(0,p.jsx)("div",{className:"".concat(yn,"-collapse-panel-extra"),onClick:function(Rn){Rn.stopPropagation(),Rn.preventDefault()},children:un})]}),(0,p.jsxs)("div",{className:N()("".concat(yn,"-collapse-panel-content"),M()({},"".concat(yn,"-collapse-panel-expanded"),ln),(z=i.classNames)===null||z===void 0?void 0:z.content),style:u()({height:cn},(J=i.styles)===null||J===void 0?void 0:J.content),children:[(0,p.jsx)("div",{ref:Tn,className:"".concat("".concat(yn,"-collapse-panel-contentWrapper")," ",ln&&_?"scrollable":""),children:gn}),!ln&&(0,p.jsx)("div",{className:"".concat(yn,"-collapse-panel-mask")})]})]})]})},t=v},78618:function(pn,Q,n){n.d(Q,{Z:function(){return D}});var b=n(26068),u=n.n(b),V=n(67825),M=n.n(V),L=n(51886),j=n(66508),k=n(80047),R=n(45372),T=n(22940),O=n(82187),N=n.n(O),C=n(75271),P=n(53649),B=n.n(P),l=n(75469),x,o=(0,l.Z)(x||(x=B()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),p=n(52676),v=["className","popupClassName"],t=["className","popupClassName"],d=function(Z){var m=Z.className,z=Z.popupClassName,J=M()(Z,v),G=k.Z.useToken(),_=G.token,Y=(0,L.getCommonConfig)(),U=Y.sparkPrefix,nn=o();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(nn,{}),(0,p.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:_.colorPrimary,paddingInline:8}}},children:(0,p.jsx)(T.default,u()({suffixIcon:(0,p.jsx)(j.Z,{style:{fontSize:"20px"}}),className:N()("".concat(U,"-picker"),m),popupClassName:N()("".concat(U,"-picker-dropdown"),z)},J))})]})},i=function(Z){var m=Z.className,z=Z.popupClassName,J=M()(Z,t),G=k.Z.useToken(),_=G.token,Y=(0,L.getCommonConfig)(),U=Y.sparkPrefix,nn=o();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(nn,{}),(0,p.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:_.colorPrimary,paddingInline:8}}},children:(0,p.jsx)(T.default.RangePicker,u()({suffixIcon:(0,p.jsx)(j.Z,{style:{fontSize:"20px"}}),className:N()("".concat(U,"-picker"),m),popupClassName:N()("".concat(U,"-picker-dropdown"),z),popupStyle:{padding:0}},J))})]})};d.RangePicker=i;var D=d},66894:function(pn,Q,n){n.d(Q,{Z:function(){return t}});var b=n(82092),u=n.n(b),V=n(26068),M=n.n(V),L=n(67825),j=n.n(L),k=n(51886),R=n(80047),T=n(96527),O=n(82187),N=n.n(O),C=n(53649),P=n.n(C),B=n(75469),l,x=(0,B.Z)(l||(l=P()([`
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
`])),function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),o=n(52676),p=["className","layout","colon","style"],v=function(i){var D,s,Z=x(),m=i.className,z=i.layout,J=i.colon,G=J===void 0?!1:J,_=i.style,Y=j()(i,p),U=(0,k.getCommonConfig)(),nn=U.antPrefix,un=R.Z.useToken(),gn=un.token;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Z,{}),(0,o.jsx)(T.Z,M()({className:N()(m,z==="vertical"&&"".concat(nn,"-descriptions-vertical")),layout:z,colon:G,style:M()(u()(u()({},"--".concat(nn,"-descriptions-vertical-label-padding-bottom"),"".concat((D=gn.Descriptions.verticalLabelPaddingBottom)!==null&&D!==void 0?D:4,"px")),"--".concat(nn,"-descriptions-vertical-content-padding-bottom"),"".concat((s=gn.Descriptions.verticalContentPaddingBottom)!==null&&s!==void 0?s:24,"px")),_)},Y))]})},t=v},64925:function(pn,Q,n){n.d(Q,{Z:function(){return B}});var b=n(26068),u=n.n(b),V=n(51886),M=n(71649),L=n(42478),j=n(75271),k=n(53649),R=n.n(k),T=n(75469),O,N=(0,T.Z)(O||(O=R()([`
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
`])),function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix}),C=n(52676),P=function(x){var o,p,v=(0,V.getCommonConfig)(),t=v.antPrefix,d=(0,j.useMemo)(function(){var D;if(!((D=x.menu)!==null&&D!==void 0&&D.selectable)||!x.menu){var s;return((s=x.menu)===null||s===void 0?void 0:s.items)||[]}return x.menu.items.map(function(Z){var m={},z=Z.label;return z&&(m.label=(0,C.jsxs)("div",{className:"".concat(t,"-dropdown-check-wrapper"),children:[z,(0,C.jsx)("span",{className:"".concat(t,"-dropdown-check-icon"),children:(0,C.jsx)(M.Z,{})})]})),u()(u()({},Z),m)})},[(o=x.menu)===null||o===void 0?void 0:o.items,(p=x.menu)===null||p===void 0?void 0:p.selectable]),i=N();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{}),(0,C.jsx)(L.Z,u()(u()({},x),{},{menu:u()(u()({},x.menu),{},{items:d}),overlayStyle:u()({},x.overlayStyle)}))]})},B=P},38348:function(pn,Q,n){n.d(Q,{Z:function(){return d}});var b=n(26068),u=n.n(b),V=n(51886),M=n(65122),L=n(75271),j=n(75041),k=n(53649),R=n.n(k),T=n(75469),O,N=(0,T.Z)(O||(O=R()([`
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
`])),function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix}),C=n(48305),P=n.n(C),B=n(88045),l=n(52676),x=document.querySelector("#empty-svg-container");function o(i){var D=(0,B.ZP)(),s=P()(D,5),Z=s[4],m=i.svgUrl,z=i.tokenMap,J=z===void 0?{}:z,G=i.className,_=i.size,Y=m.includes(".svg"),U=(0,L.useState)(""),nn=P()(U,2),un=nn[0],gn=nn[1];return(0,L.useEffect)(function(){if(!x){var dn=document.createElement("div");dn.innerHTML="<svg></svg>",x=dn.querySelector("svg"),x.id="empty-svg-container",x.setAttribute("aria-hidden","true"),x.style.position="absolute",x.style.width="0",x.style.height="0",x.style.overflow="hidden",document.body.insertBefore(x,document.body.firstChild)}},[]),(0,L.useEffect)(function(){x&&Z!==null&&Z!==void 0&&Z.key&&(x.classList.forEach(function(dn){return x.classList.remove(dn)}),x.classList.add(Z.key))},[Z==null?void 0:Z.key]),(0,L.useEffect)(function(){if(Y){var dn=btoa(m),$='<svg><use xlink:href="#'.concat(dn,'"></use></svg>');if(gn($),!document.getElementById(dn)){var fn='<symbol id="'.concat(dn,'"></symbol>');x.innerHTML=x.innerHTML+fn,fetch(m).then(function(ln){return ln.text()}).then(function(ln){var vn=ln;Object.keys(J).forEach(function(tn){vn=vn.replace(new RegExp(tn,"g"),J[tn])});var Cn=vn.match(/viewBox="([^"]*)"/),mn=Cn?Cn[1]:"",hn=document.getElementById(dn),q=vn.replace(/<svg[^>]*>/,"");q=q.replace(/<\/svg>/,""),mn&&hn.setAttribute("viewBox",mn),hn.innerHTML=q})}}},[m]),Y?(0,l.jsx)("div",{className:G,dangerouslySetInnerHTML:{__html:un},style:{width:_,height:_}}):(0,l.jsx)("img",{src:m,className:G,style:{width:_,height:_}})}var p={url:"https://gw.alicdn.com/imgextra/i3/O1CN01r3f3Si24iFTRz9Bho_!!6000000007424-55-tps-320-320.svg",tokenMap:{"#CDD0DC":"color-border"}},v={noData:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01mWN5tE1MAxb2z7LwA_!!6000000001395-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#BCB5FF":"color-primary-border-hover","#FFFFFF":"color-bg-base","#615CED":"color-primary","#1ACDD0DC":"color-fill-quaternary","#CDD0DC":"color-border"}},networkError:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01su6GHG1RupL5K5TOQ_!!6000000002172-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},404:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01GE0jXZ1xpqjvMjCZh_!!6000000006493-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#26CDD0DC":"color-fill-tertiary","#CDD0DC":"color-border","#F3F0FF":"color-primary-bg","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},arrears:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01xN8uYv1Dz2MLvrFAF_!!6000000000286-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#F3F0FF":"color-primary-bg","#615CED":"color-primary"}},desktopOnly:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01ZzNku41rshVhRVh9x_!!6000000005687-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},noAudio:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01fTQ6vi1GXxnIrmizf_!!6000000000633-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#615CED":"color-primary","#E6E8EE":"color-border-secondary"}},noImage:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01zQAH9A1oJUD9XDtmi_!!6000000005204-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noVideo:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01kqss5i1JuoOrJ8fNV_!!6000000001089-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noAccess:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01RwpRz91oGHREFlmdY_!!6000000005197-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}},error:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01TlQR4c1L3nn4DkG2z_!!6000000001244-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noModel:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01BSPmLi1iaXGByjbne_!!6000000004429-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#5CCDD0DC":"color-fill","#615CED":"color-primary"}},noApp:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01stSIP31fzmEtpppWc_!!6000000004078-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#33CDD0DC":"color-fill-secondary","#615CED":"color-primary"}},success:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01sGzZ5B1Bx5RQAjUe5_!!6000000000011-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#5BB98B":"color-success","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},failed:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01Fd1Gmx1QNYxQ8hj0H_!!6000000001964-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FF7875":"color-error-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},inProgress:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01w2RXic1LADKqVxH56_!!6000000001258-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#9189FA":"color-primary-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},stayTuned:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01W2Kbyc26dmqmatyoB_!!6000000007685-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}}},t=function(D){var s=D.imageStyle,Z=D.title,m=D.description,z=m===void 0?"No Data":m,J=D.children,G=D.texture,_=G===void 0?!0:G,Y=D.size,U=Y===void 0?320:Y,nn=D.autoFit,un=nn===void 0?!0:nn,gn=D.okText,dn=D.okType,$=dn===void 0?"primary":dn,fn=D.okButtonProps,ln=D.onOk,vn=D.type||"noData",Cn=(0,V.getCommonConfig)(),mn=Cn.sparkPrefix,hn=Cn.isDarkMode,q=Cn.antPrefix,tn=D.image||v[vn].url,an=(0,L.useMemo)(function(){var yn,Mn=u()({},(yn=v[vn])===null||yn===void 0?void 0:yn.tokenMap);return Mn&&Object.keys(Mn).forEach(function(kn){Mn[kn]="var(--".concat(q,"-").concat(Mn[kn],")")}),Mn},[vn]),cn=(0,L.useMemo)(function(){var yn=u()({},p.tokenMap);return Object.keys(yn).forEach(function(Mn){yn[Mn]="var(--".concat(q,"-").concat(yn[Mn],")")}),yn},[hn]),Pn=N(),Tn=typeof U=="string"?parseFloat(U.replace(/px/i,"")):U!=null?U:0,F=un?{maxWidth:"100%",aspectRatio:"1 / 1",width:U,height:"auto"}:{width:U,height:U};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Pn,{}),(0,l.jsxs)("div",{className:"".concat(mn,"-empty ").concat(D.className||""),style:u()(u()({},F),s),children:[_&&(0,l.jsx)(o,{size:un?"100%":U,svgUrl:p.url,tokenMap:cn,className:"".concat(mn,"-empty-texture")}),(0,l.jsx)(o,{size:un?"100%":U,svgUrl:tn,tokenMap:an,className:"".concat(mn,"-empty-image")}),(0,l.jsxs)(M.Z,{vertical:!0,align:"center",style:{marginTop:"52.5%"},children:[Z&&(0,l.jsx)("div",{className:"".concat(mn,"-empty-title"),style:{marginBottom:z?.025*Tn:0},children:Z}),z&&(0,l.jsx)("div",{className:"".concat(mn,"-empty-description"),children:z}),!!gn&&(0,l.jsx)("div",{style:{marginTop:.05*Tn},children:(0,l.jsx)(j.Z,u()(u()({type:$,onClick:ln},fn),{},{children:gn}))}),!!J&&(0,l.jsx)("div",{style:{marginTop:.05*Tn},children:J})]})]})]})},d=t},86950:function(pn,Q,n){n.d(Q,{Z:function(){return Z}});var b=n(31759),u=n.n(b),V=n(67825),M=n.n(V),L=n(26068),j=n.n(L),k=n(51886),R=n(62910),T=n(94592),O=n(71416),N=n(82187),C=n.n(N),P=n(75271),B=n(53649),l=n.n(B),x=n(75469),o,p=(0,x.Z)(o||(o=l()([`
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
`])),function(m){return m.sparkPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix}),v=n(52676),t=["tooltip"],d=(0,P.forwardRef)(function(m,z){var J=m.labelMarginRight,G=J===void 0?void 0:J,_=(0,P.useRef)(null),Y=(0,k.getCommonConfig)(),U=Y.sparkPrefix,nn=p();return(0,P.useImperativeHandle)(z,function(){return _.current}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(nn,{}),(0,v.jsx)(T.Z,j()(j()({},m),{},{className:C()(m.className,"".concat(U,"-form"),G==="small"&&"".concat(U,"-form-label-margin-small")),ref:_,requiredMark:function(gn,dn){return(0,v.jsxs)(v.Fragment,{children:[gn,dn.required&&(0,v.jsx)("span",{className:"".concat(U,"-required-mark"),children:"*"})]})}}))]})}),i=function(z){var J=z.tooltip,G=M()(z,t),_=(0,v.jsx)(R.Z,{});function Y(){if(J){var U=u()(J)==="object"&&!P.isValidElement(J)?j()(j()({},J),{},{icon:J.icon||_}):{title:J,icon:_};return U}}return(0,v.jsx)(T.Z.Item,j()(j()({},G),{},{tooltip:Y(),labelCol:z.labelCol||(z.layout==="vertical"?{flex:"unset"}:void 0)}))},D=i;D.useStatus=O.Z.useStatus;var s=d;s.Item=D,s.List=T.Z.List,s.ErrorList=T.Z.ErrorList,s.Provider=T.Z.Provider,s.useForm=T.Z.useForm,s.useFormInstance=T.Z.useFormInstance,s.useWatch=T.Z.useWatch;var Z=s},78899:function(pn,Q,n){n.d(Q,{Z:function(){return x}});var b=n(26068),u=n.n(b),V=n(25811),M=n(51886),L=n(20695),j=n(17191),k=n(75271),R=n(53649),T=n.n(R),O=n(75469),N,C=(0,O.Z)(N||(N=T()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),P=n(52676),B=function(p){var v=C(),t=(0,M.getCommonConfig)(),d=t.antPrefix,i=(0,k.useMemo)(function(){var D={transitionName:""},s=p.preview;return s===!1?!1:s===!0?D:u()(u()({mask:(0,P.jsxs)("div",{className:"".concat(d,"-image-mask-info"),children:[(0,P.jsx)(L.Z,{className:"".concat(d,"-image-mask-info-icon")}),(0,P.jsx)("span",{className:"".concat(d,"-image-mask-info-text"),children:V.Z.get({id:"components.commonComponents.Image.Preview",dm:"\u9884\u89C8"})})]})},s),D)},[p.preview]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(v,{}),(0,P.jsx)(j.Z,u()({preview:i},p))]})},l=B;l.PreviewGroup=j.Z.PreviewGroup;var x=l},29978:function(pn,Q,n){n.d(Q,{Z:function(){return d}});var b=n(26068),u=n.n(b),V=n(82092),M=n.n(V),L=n(67825),j=n.n(L),k=n(51886),R=n(50239),T=n(82187),O=n.n(T),N=n(75271),C=n(53649),P=n.n(C),B=n(75469),l,x=(0,B.Z)(l||(l=P()([`
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
`])),function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix}),o=n(52676),p=["shape"],v=N.forwardRef(function(i,D){var s=i.shape,Z=s===void 0?"default":s,m=j()(i,p),z=(0,k.getCommonConfig)(),J=z.antPrefix,G=x();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(G,{}),(0,o.jsx)(R.Z,u()(u()({},m),{},{className:O()(i.className,M()({},"".concat(J,"-input-round"),Z==="round")),ref:D}))]})}),t=N.forwardRef(function(i,D){var s=(0,k.getCommonConfig)(),Z=s.antPrefix,m=x();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m,{}),(0,o.jsx)(R.Z.TextArea,u()(u()({},i),{},{className:O()("".concat(Z,"-text-area"),i.className),ref:D}))]})});Object.assign(v,{TextArea:t,Search:R.Z.Search,Password:R.Z.Password,OTP:R.Z.OTP});var d=v},13428:function(pn,Q,n){n.d(Q,{Z:function(){return t}});var b=n(26068),u=n.n(b),V=n(82092),M=n.n(V),L=n(67825),j=n.n(L),k=n(51886),R=n(6002),T=n(84674),O=n(82187),N=n.n(O),C=n(53649),P=n.n(C),B=n(75469),l,x=(0,B.Z)(l||(l=P()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),o=n(52676),p=["showDivider","closable"],v=function(i){var D=x(),s=(0,k.getCommonConfig)(),Z=s.sparkPrefix,m=i.showDivider,z=m===void 0?!0:m,J=i.closable,G=J===void 0?!0:J,_=j()(i,p),Y=function(gn){return i.info?(0,o.jsxs)("div",{className:"".concat(Z,"-modal-footer-wrapper"),children:[(0,o.jsx)("span",{className:"".concat(Z,"-modal-footer-info"),children:i.info}),(0,o.jsx)("div",{className:"".concat(Z,"-modal-footer-origin-node"),children:gn})]}):gn},U=G?i.closeIcon||(0,o.jsx)(R.Z,{className:"".concat(Z,"-modal-title-close"),onClick:function(gn){var dn;(dn=i.onCancel)===null||dn===void 0||dn.call(i,gn)}}):null,nn=i.footer===void 0?Y:i.footer;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsx)(T.Z,u()(u()({},_),{},{closeIcon:null,title:(0,o.jsxs)("div",{className:"".concat(Z,"-modal-title-wrapper"),children:[(0,o.jsx)("div",{className:"".concat(Z,"-modal-title"),children:i.title}),U]}),wrapClassName:N()("".concat(Z,"-modal"),M()({},"".concat(Z,"-show-divider"),z),i.wrapClassName,"animate-in"),footer:nn,transitionName:""}))]})};v.useModal=T.Z.useModal,v.success=T.Z.success,v.error=T.Z.error,v.warning=T.Z.warning,v.info=T.Z.info,v.confirm=T.Z.confirm,v.SMALL_WIDTH=640,v.MEDIUM_WIDTH=800,v.LARGE_WIDTH=960;var t=v},16945:function(pn,Q,n){var b=n(48305),u=n.n(b),V=n(26068),M=n.n(V),L=n(51886),j=n(1191),k=n(31695),R=n(69898),T=n(96626),O=n(50493),N=n(52676),C=["success","warning","error","info"];function P(l,x){if(l==="success")return(0,N.jsx)(j.Z,{style:{color:"var(--".concat(x,"-color-success)"),fontSize:24}});if(l==="warning")return(0,N.jsx)(k.Z,{style:{color:"var(--".concat(x,"-color-warning)"),fontSize:24}});if(l==="info")return(0,N.jsx)(R.Z,{style:{color:"var(--".concat(x,"-color-info)"),fontSize:24}});if(l==="error")return(0,N.jsx)(T.Z,{style:{color:"var(--".concat(x,"-color-error)"),fontSize:24}})}var B={};B.destroy=O.ZP.destroy,B.open=function(l){var x=(0,L.getCommonConfig)(),o=x.sparkPrefix,p="".concat(o,"-notification");l.className&&(p+=" ".concat(l.className)),O.ZP.open(M()(M()({},l),{},{className:p}))},C.forEach(function(l){B[l]=function(x){var o=(0,L.getCommonConfig)(),p=o.sparkPrefix,v=o.antPrefix,t="".concat(p,"-notification");x.className&&(t+=" ".concat(x.className)),O.ZP[l](M()(M()({},x),{},{className:t,icon:P(l,v)}))}}),B.useNotification=function(l){var x=(0,L.getCommonConfig)(),o=x.sparkPrefix,p=x.antPrefix,v="".concat(o,"-notification"),t=O.ZP.useNotification(l),d=u()(t,2),i=d[0],D=d[1],s={};return C.forEach(function(Z){s[Z]=function(m){return i[Z](M()(M()({},m),{},{className:v,icon:P(Z,p)}))}}),s.open=function(Z){O.ZP.open(M()(M()({},Z),{},{className:v}))},s.destroy=i.destroy,[s,D]},Q.Z=B},42480:function(pn,Q,n){n.d(Q,{X:function(){return L}});var b=n(53649),u=n.n(b),V=n(75469),M,L=(0,V.Z)(M||(M=u()([`
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
`])),function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix})},22084:function(pn,Q,n){var b=n(26068),u=n.n(b),V=n(31759),M=n.n(V),L=n(67825),j=n.n(L),k=n(51886),R=n(25811),T=n(74455),O=n(16979),N=n(34232),C=n(65122),P=n(94587),B=n(82187),l=n.n(B),x=n(42480),o=n(52676),p=["hideSwitchButton","className"],v=function(){var d=R.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"}),i=R.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"});return{options:[{label:"10 ".concat(d," / ").concat(i),value:10},{label:"20 ".concat(d," / ").concat(i),value:20},{label:"50 ".concat(d," / ").concat(i),value:50},{label:"100 ".concat(d," / ").concat(i),value:100}]}};Q.Z=function(t){var d=t.hideSwitchButton,i=d===void 0?!1:d,D=t.className,s=j()(t,p),Z=(0,k.getCommonConfig)(),m=Z.sparkPrefix,z=(0,x.X)(),J=function(){var U=function(un,gn,dn){return gn==="jump-prev"||gn==="jump-next"?(0,o.jsx)(T.Z,{className:"".concat(m,"-jump-next-icon")}):i||t.itemRender?dn:gn==="prev"?(0,o.jsx)("a",{children:(0,o.jsxs)(C.Z,{gap:8,children:[(0,o.jsx)(O.Z,{})," ",(0,o.jsx)("span",{children:R.Z.get({id:"components.commonComponents.Pagination.PreviousPage",dm:"\u4E0A\u4E00\u9875"})})]})}):gn==="next"?(0,o.jsx)("a",{children:(0,o.jsxs)(C.Z,{gap:8,children:[(0,o.jsx)("span",{children:R.Z.get({id:"components.commonComponents.Pagination.NextPage",dm:"\u4E0B\u4E00\u9875"})})," ",(0,o.jsx)(N.Z,{})]})}):dn};return U},G;s.showSizeChanger!==null&&s.showSizeChanger!==void 0?G=s.showSizeChanger:G=s.total&&s.total>50;var _=function(){return t.showSizeChanger===!0?v():t.showSizeChanger===!1?!1:M()(t.showSizeChanger)==="object"&&t.showSizeChanger?t.showSizeChanger:s.total&&s.total>50?v():!1};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(z,{}),(0,o.jsx)(P.Z,u()(u()({itemRender:J()},s),{},{showSizeChanger:_(),className:l()("".concat(m,"-pagination"),D)}))]})}},93019:function(pn,Q,n){var b=n(26068),u=n.n(b),V=n(67825),M=n.n(V),L=n(51886),j=n(88602),k=n(62910),R=n(99090),T=n(58911),O=n(16746),N=n(75271),C=n(52676),P=["icon","type","okButtonProps"],B=N.forwardRef(function(l,x){var o=l.icon,p=l.type,v=p===void 0?"confirm":p,t=l.okButtonProps,d=M()(l,P),i=(0,L.getCommonConfig)(),D=i.antPrefix,s=function(){return o||(v==="confirm"?(0,C.jsx)(j.Z,{style:{color:"var(--".concat(D,"-color-warning)")}}):v==="info"?(0,C.jsx)(k.Z,{style:{color:"var(--".concat(D,"-color-info)")}}):v==="warning"?(0,C.jsx)(j.Z,{style:{color:"var(--".concat(D,"-color-warning)")}}):v==="error"?(0,C.jsx)(R.Z,{style:{color:"var(--".concat(D,"-color-error)")}}):v==="success"?(0,C.jsx)(T.Z,{style:{color:"var(--".concat(D,"-color-success)")}}):(0,C.jsx)(j.Z,{style:{color:"var(--".concat(D,"-color-warning)")}}))},Z=function(){var z={};return["warning","error"].includes(v)&&(z.danger=!0),u()(u()({},z),t||{})};return(0,C.jsx)(O.Z,u()(u()({},d),{},{ref:x,icon:s(),okButtonProps:Z()}))});Q.Z=B},20739:function(pn,Q,n){var b=n(26068),u=n.n(b),V=n(51886),M=n(28655),L=n(81316),j=n(75271),k=n(52676),R=j.forwardRef(function(T,O){var N=T.content===""||T.content===void 0||T.content===null,C=T.title===""||T.title===void 0||T.title===null,P=T.open!==void 0&&T.open!==null?T.open:N&&C?!1:void 0,B=(0,V.getCommonConfig)(),l=B.antPrefix;return(0,k.jsx)(L.Z,u()(u()({},T),{},{arrow:T.arrow||!1,open:P,ref:O,getPopupContainer:T.getPopupContainer||function(x){return(0,M.Q)(x,".".concat(l,"-app"))}}))});Q.Z=R},22781:function(pn,Q,n){n.d(Q,{Z:function(){return hn}});var b=n(82092),u=n.n(b),V=n(15558),M=n.n(V),L=n(48305),j=n.n(L),k=n(53649),R=n.n(k),T=n(39982),O=n(19487),N=n(56664),C=n(15222),P=n(45372),B=n(80047),l=n(85412),x=n(82187),o=n.n(x),p=n(75271),v=n(25298),t=n.n(v),d=n(17069),i=n.n(d),D=n(21742),s=n.n(D),Z=n(83136),m=n.n(Z),z=n(25451),J=function(q){s()(an,q);var tn=m()(an);function an(cn){var Pn;return t()(this,an),Pn=tn.call(this),Pn.name=cn,Pn}return i()(an,[{key:"eq",value:function(Pn){return Pn.name===this.name}},{key:"toDOM",value:function(){var Pn=document.createElement("span");return Pn.setAttribute("aria-hidden","true"),Pn.className="cm-prompt-var",Pn.textContent="${".concat(this.name,"}"),Pn}},{key:"ignoreEvent",value:function(){return!1}}]),an}(z.l9),G=new z.Y1({regexp:/\$\{([\w\u4e00-\u9fa5]+)\}/g,decoration:function(tn){return z.p.replace({widget:new J(tn[1])})}}),_=z.lg.fromClass(function(){function q(tn){t()(this,q),u()(this,"placeholders",void 0),this.placeholders=G.createDeco(tn)}return i()(q,[{key:"update",value:function(an){this.placeholders=G.updateDeco(an,this.placeholders)}}]),q}(),{decorations:function(tn){return tn.placeholders},provide:function(tn){return z.tk.atomicRanges.of(function(an){var cn;return((cn=an.plugin(tn))===null||cn===void 0?void 0:cn.placeholders)||z.p.none})}}),Y=[_],U=n(26068),nn=n.n(U),un=n(14179);function gn(){var q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],tn=arguments.length>1?arguments[1]:void 0,an=tn.onCreate,cn=tn.createBtnText;return(0,un.ys)({override:[function(Pn){var Tn,F=Pn.matchBefore(/\/(\w+)?/);return!F||F&&F.from===F.to&&!Pn.explicit?null:{from:(Tn=F==null?void 0:F.from)!==null&&Tn!==void 0?Tn:0,options:(an?[].concat(M()(q),[{label:"/NEW_VAR",boost:-99}]):q).map(function(yn){return nn()(nn()({},yn),{},{displayLabel:yn.label==="/NEW_VAR"?cn:yn.label.slice(1),apply:function(kn,jn,Sn,Nn){if(jn.label==="/NEW_VAR")return kn.dispatch({changes:{from:Sn,to:Nn,insert:""}}),an==null?void 0:an();var zn=jn.label.slice(1),An="${".concat(zn,"}");kn.dispatch({changes:{from:Sn,to:Nn,insert:An}})}})})}}]})}var dn=n(52676),$,fn,ln=(0,l.kc)(function(q){var tn=q.css,an=q.token;return{onCreate:tn($||($=R()([`
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
  `])),an.colorBorderSecondary,an.colorBgContainer),cm:tn(fn||(fn=R()([`
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
  `])),an.colorTextSecondary,an.colorBlue,an.colorPurple,an.colorPurpleBg,an.colorBgContainer,an.colorText,an.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:an.colorBgBase,border:"1px solid ".concat(an.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:an.colorTextTertiary,backgroundColor:an.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),vn={markdown:[(0,O.JH)()]},Cn=[],mn=function(tn){var an=ln(),cn=an.styles,Pn=tn.variables||Cn,Tn=(0,p.useState)(!1),F=j()(Tn,2),yn=F[0],Mn=F[1],kn=tn.onCreate,jn=p.useContext(P.ZP.ConfigContext),Sn=jn.theme.algorithm===B.Z.darkAlgorithm,Nn=tn.createBtnText||"+ \u65B0\u589E\u53D8\u91CF",zn=(0,p.useMemo)(function(){return Sn?N.Pc:N.Zp},[Sn]),An=(0,p.useMemo)(function(){return[].concat(M()(vn.markdown),M()(Y),[gn(M()(Pn).map(function(ne){return{label:"/".concat(ne.code),info:ne.label}})||[],{onCreate:kn,createBtnText:Nn})])},[Pn]);(0,p.useEffect)(function(){return Mn(!0),function(){Mn(!1)}},[]);var Rn=p.useMemo(function(){return tn.tipsText===!1?(0,dn.jsx)("div",{className:cn.tips}):tn.tipsText?tn.tipsText:(0,dn.jsxs)("div",{className:cn.tips,children:['\u8F93\u5165/"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,dn.jsx)(T.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[tn.tipsText]);return yn?(0,dn.jsxs)("div",{className:cn.root,children:[(0,dn.jsx)(C.ZP,{className:o()(cn.cm,u()({},cn.onCreate,kn)),extensions:An,value:tn.value,theme:zn,lang:"markdown",onChange:tn.onChange,basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1}},zn),(0,dn.jsxs)("div",{className:cn.footer,children:[Rn,tn.maxLength?(0,dn.jsxs)("div",{children:[tn.value.length,"/",tn.maxLength]}):null]})]}):null},hn=(0,p.memo)(mn)},93949:function(pn,Q,n){var b=n(26068),u=n.n(b),V=n(67825),M=n.n(V),L=n(38348),j=n(52676),k=["texture"];Q.Z=function(R){var T=R.texture,O=T===void 0?!1:T,N=M()(R,k);return(0,j.jsx)(L.Z,u()(u()({},N),{},{texture:O}))}},73431:function(pn,Q,n){n.d(Q,{J:function(){return D},Z:function(){return Z}});var b=n(26068),u=n.n(b),V=n(82092),M=n.n(V),L=n(51886),j=n(86044),k=n(82187),R=n.n(k),T=n(75271),O=n(53649),N=n.n(O),C=n(75469),P,B=(0,C.Z)(P||(P=N()([`
.`,"-slider.","-slider.",`-slider-no-marks {
  margin: 0;
}
`])),function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.sparkPrefix}),l=n(67825),x=n.n(l),o=n(1359),p,v=(0,C.Z)(p||(p=N()([`
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
`])),function(m){return m.sparkPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix}),t=n(52676),d=["styles","classNames","sliderProps","inputNumberProps"];function i(m){var z,J,G=(0,L.getCommonConfig)(),_=G.sparkPrefix;console.log("debug sparkPrefix in SliderSelector",_);var Y=m.styles,U=m.classNames,nn=m.sliderProps,un=m.inputNumberProps,gn=x()(m,d),dn=v(),$=m.marks||((z=m.sliderProps)===null||z===void 0?void 0:z.marks)||null,fn=$||M()(M()({},m.min,m.min),m.max,m.max),ln=$&&((J=Object.keys($))===null||J===void 0?void 0:J.length)>0,vn=function(mn){var hn=typeof mn=="string"?parseFloat(mn):mn;if(hn===null||isNaN(hn)){m.onChange(null);return}hn<m.min?m.onChange(m.min):hn>m.max?m.onChange(m.max):m.onChange(hn)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(dn,{}),(0,t.jsxs)("div",{style:Y==null?void 0:Y.wrapper,className:R()("".concat(_,"-slider-input"),M()({},"".concat(_,"-slider-input-has-marks"),ln),U==null?void 0:U.wrapper),onMouseUp:function(){var mn;(mn=m.onBlur)===null||mn===void 0||mn.call(m)},children:[(0,t.jsx)(D,u()(u()(u()({disabled:m.disabled,min:m.min,max:m.max,step:m.step,tooltip:{getPopupContainer:function(mn){return mn}}},gn),nn),{},{marks:fn,style:u()(u()(u()({},Y==null?void 0:Y.slider),nn==null?void 0:nn.style),{},{width:"100%"}),className:R()(U==null?void 0:U.slider,nn==null?void 0:nn.className),onChange:vn,value:m.value===null?void 0:m.value})),(0,t.jsx)(o.Z,u()(u()({controls:!1,step:m.step,min:m.min,max:m.max,disabled:m.disabled},un),{},{onBlur:function(){var mn;(mn=m.onBlur)===null||mn===void 0||mn.call(m)},value:m.value,onChange:vn,style:u()(u()({},Y==null?void 0:Y.inputNumber),un==null?void 0:un.style),className:R()(U==null?void 0:U.inputNumber,un==null?void 0:un.className)}))]})]})}var D=T.forwardRef(function(m,z){var J=(0,L.getCommonConfig)(),G=J.sparkPrefix,_=J.antPrefix,Y=B();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Y,{}),(0,t.jsx)(j.Z,u()(u()({},m),{},{className:R()("".concat(G,"-slider"),M()(M()({},"".concat(G,"-slider-no-marks"),!Object.keys(m.marks||{}).length),"".concat(_,"-slider-reverse"),m.reverse),m.className),ref:z}))]})}),s=D;Object.assign(s,{Input:i});var Z=s},47710:function(pn,Q,n){n.d(Q,{Z:function(){return B}});var b=n(82092),u=n.n(b),V=n(51886),M=n(80047),L=n(32102),j=n(82187),k=n.n(j),R=n(53649),T=n.n(R),O=n(75469),N,C=(0,O.Z)(N||(N=T()([`
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
`])),function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix}),P=n(52676),B=function(l){var x=l.indicator,o=l.spinning,p=o===void 0?!0:o,v=l.children,t=l.style,d=l.className,i=(0,V.getCommonConfig)(),D=i.sparkPrefix,s=M.Z.useToken(),Z=C(),m=(0,P.jsxs)("svg",{className:"".concat(D,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,P.jsx)("defs",{children:(0,P.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,P.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,P.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,P.jsx)("g",{children:(0,P.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:s.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,P.jsx)("g",{children:(0,P.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:s.token.colorPrimary,fillOpacity:"1"})})]})]}),z=l.tip||l.showProgress&&(0,P.jsxs)("div",{children:[(0,P.jsxs)("span",{children:["loading",l.percent!==void 0&&l.percent!==null&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:l.percent}),"%"]})]}),(0,P.jsx)(L.Z,{percent:l.percent,showInfo:!1})]})||null;return v?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Z,{}),(0,P.jsxs)("div",{className:k()("".concat(D,"-spinner-overlay"),d),style:t,children:[(0,P.jsx)("div",{className:k()("".concat(D,"-spinner-content"),u()({},"".concat(D,"-spinning"),p)),children:v}),p&&(0,P.jsxs)("div",{className:"".concat(D,"-spinner"),children:[(0,P.jsx)("div",{className:"".concat(D,"-indicator"),children:x||m}),(0,P.jsx)("div",{className:"".concat(D,"-title"),children:z})]})]})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Z,{}),(0,P.jsx)("div",{className:k()("".concat(D,"-spinner"),d),style:t,children:p&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:"".concat(D,"-indicator"),children:x||m}),(0,P.jsx)("div",{className:"".concat(D,"-title"),children:z})]})})]})}},2217:function(pn,Q,n){n.d(Q,{Z:function(){return N}});var b=n(26068),u=n.n(b),V=n(73563),M=n(53649),L=n.n(M),j=n(75469),k,R=(0,j.Z)(k||(k=L()([`
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
`])),function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix}),T=n(52676),O=function(P){var B=R();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(B,{}),(0,T.jsx)(V.Z,u()({},P))]})},N=O},10650:function(pn,Q,n){n.d(Q,{Z:function(){return x}});var b=n(26068),u=n.n(b),V=n(51886),M=n(71649),L=n(74472),j=n(82187),k=n.n(j),R=n(75271),T=n(53649),O=n.n(T),N=n(75469),C,P=(0,N.Z)(C||(C=O()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),B=n(52676),l=function(p){var v=(0,V.getCommonConfig)(),t=v.sparkPrefix,d=P(),i=(0,R.useMemo)(function(){if(p.items)return p.items.map(function(D,s){var Z=D.status;return!Z&&p.current!==void 0&&(s<p.current?Z="finish":s===p.current?Z="process":Z="wait"),Z==="finish"?u()(u()({},D),{},{icon:(0,B.jsx)(M.Z,{className:"".concat(t,"-finish-icon")})}):D})},[p.items,p.current]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(d,{}),(0,B.jsx)(L.Z,u()(u()({},p),{},{items:i,className:k()("".concat(t,"-steps"),p.className)}))]})},x=l},28649:function(pn,Q,n){n.d(Q,{Z:function(){return l}});var b=n(26068),u=n.n(b),V=n(67825),M=n.n(V),L=n(65122),j=n(94872),k=n(51886),R=n(53649),T=n.n(R),O=n(75469),N,C=(0,O.Z)(N||(N=T()([`
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
`])),function(x){return x.sparkPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.sparkPrefix}),P=n(52676),B=["label","className"],l=function(x){var o=C(),p=x.label,v=x.className,t=M()(x,B),d=(0,k.getCommonConfig)(),i=d.sparkPrefix;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(o,{}),(0,P.jsxs)(L.Z,{align:"center",gap:8,className:v,children:[(0,P.jsx)(j.Z,u()(u()({},t),{},{className:"".concat(i,"-switch")})),p&&(0,P.jsx)("span",{className:"".concat(i,"-switch-label"),children:p})]})]})}},34007:function(pn,Q,n){n.d(Q,{Z:function(){return p}});var b=n(26068),u=n.n(b),V=n(67825),M=n.n(V),L=n(51886),j=n(28173),k=n(9907),R=n(82187),T=n.n(R),O=n(42480),N=n(53649),C=n.n(N),P=n(75469),B,l=(0,P.Z)(B||(B=C()([`
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
`])),function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix}),x=n(52676),o=["columns"];function p(v){var t,d=(0,L.getCommonConfig)(),i=d.sparkPrefix,D=v.columns,s=M()(v,o);D=(t=D)===null||t===void 0?void 0:t.map(function(z){return u()(u()({},z),{},{sortIcon:z.sortIcon||function(){return(0,x.jsx)(j.Z,{style:{fontSize:16,marginLeft:8}})}})});var Z=l(),m=(0,O.X)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Z,{}),(0,x.jsx)(m,{}),(0,x.jsx)(k.Z,u()({className:T()("".concat(i,"-table")),columns:D},s))]})}},70539:function(pn,Q,n){n.d(Q,{Z:function(){return v}});var b=n(26068),u=n.n(b),V=n(67825),M=n.n(V),L=n(51886),j=n(6815),k=n(82187),R=n.n(k),T=n(75271),O=n(53649),N=n.n(O),C=n(75469),P,B=(0,C.Z)(P||(P=N()([`
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
`])),function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),l=n(52676),x=["children","className","bordered","color","size"],o=function(t){return t.Purple="purple",t.Pink="pink",t.Yellow="yellow",t.Teal="teal",t.Blue="blue",t.Mauve="mauve",t.Transparent="transparent",t.Success="success",t.Error="error",t.Warning="warning",t.Info="info",t}(o||{}),p=(0,T.forwardRef)(function(t,d){var i=t.children,D=t.className,s=t.bordered,Z=s===void 0?!1:s,m=t.color,z=m===void 0?"mauve":m,J=t.size,G=J===void 0?"middle":J,_=M()(t,x),Y=B(),U=(0,L.getCommonConfig)(),nn=U.sparkPrefix,un=Object.values(o).includes(z);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Y,{}),(0,l.jsx)(j.Z,u()(u()({className:R()("".concat(nn,"-tag ").concat(nn,"-tag-").concat(z," ").concat(nn,"-tag-").concat(G),D),bordered:Z,color:un?void 0:z},_),{},{ref:d,children:i}))]})}),v=p},46599:function(pn,Q,n){n.d(Q,{Z:function(){return D}});var b=n(26068),u=n.n(b),V=n(67825),M=n.n(V),L=n(51886),j=n(752),k=n(80047),R=n(45372),T=n(49706),O=n(82187),N=n.n(O),C=n(75271),P=n(53649),B=n.n(P),l=n(75469),x,o=(0,l.Z)(x||(x=B()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),p=n(52676),v=["className","popupClassName"],t=["className","popupClassName"],d=function(Z){var m=Z.className,z=Z.popupClassName,J=M()(Z,v),G=k.Z.useToken(),_=G.token,Y=(0,L.getCommonConfig)(),U=Y.sparkPrefix,nn=o();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(nn,{}),(0,p.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:_.colorPrimary}}},children:(0,p.jsx)(T.Z,u()({suffixIcon:(0,p.jsx)(j.Z,{}),className:N()("".concat(U,"-picker"),m),popupClassName:N()("".concat(U,"-picker-dropdown"),z)},J))})]})},i=function(Z){var m=Z.className,z=Z.popupClassName,J=M()(Z,t),G=k.Z.useToken(),_=G.token,Y=(0,L.getCommonConfig)(),U=Y.sparkPrefix,nn=o();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(nn,{}),(0,p.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:_.colorPrimary}}},children:(0,p.jsx)(T.Z.RangePicker,u()({suffixIcon:(0,p.jsx)(j.Z,{}),className:N()("".concat(U,"-picker"),m),popupClassName:N()("".concat(U,"-picker-dropdown"),z),popupStyle:{padding:0}},J))})]})};d.RangePicker=i;var D=d},28422:function(pn,Q,n){n.d(Q,{Z:function(){return d}});var b=n(26068),u=n.n(b),V=n(48305),M=n.n(V),L=n(67825),j=n.n(L),k=n(75271),R=n(82187),T=n.n(R),O=n(44739),N=n(56630),C=n(51886),P=n(53649),B=n.n(P),l=n(75469),x,o=(0,l.Z)(x||(x=B()([`
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
`])),function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix}),p=n(52676),v=["controls","mouseEnterAutoPlay","children","className","style"],t=(0,k.forwardRef)(function(i,D){var s=i.controls,Z=i.mouseEnterAutoPlay,m=Z===void 0?!1:Z,z=i.children,J=i.className,G=i.style,_=j()(i,v),Y=(0,C.getCommonConfig)(),U=Y.sparkPrefix,nn=o(),un=(0,k.useState)(0),gn=M()(un,2),dn=gn[0],$=gn[1],fn=(0,k.useState)(0),ln=M()(fn,2),vn=ln[0],Cn=ln[1],mn=(0,k.useState)(!1),hn=M()(mn,2),q=hn[0],tn=hn[1],an=(0,N.Z)(i,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),cn=M()(an,2),Pn=cn[0],Tn=cn[1],F=(0,k.useState)(!1),yn=M()(F,2),Mn=yn[0],kn=yn[1],jn=(0,k.useRef)(null),Sn=(0,k.useRef)(!1),Nn=function(Wn){jn.current=Wn,D&&(typeof D=="function"?D(Wn):D.current=Wn)};(0,k.useEffect)(function(){var Fn;return q&&(Fn=setInterval(function(){jn.current&&$(jn.current.currentTime)},16)),function(){Fn&&clearInterval(Fn)}},[q]);var zn=function(){return window.videoRef=jn.current,jn.current?"mozHasAudio"in jn.current?(kn(jn.current.mozHasAudio),!0):"webkitAudioDecodedByteCount"in jn.current?(kn(jn.current.webkitAudioDecodedByteCount>0),!0):(kn(!1),!1):!1},An=function(){jn.current&&Cn(jn.current.duration)},Rn=function(){jn.current&&(q?jn.current.pause():jn.current.play(),tn(!q))},ne=function(){tn(!0)},he=function(){tn(!1)},Pe=function(){jn.current&&jn.current.requestFullscreen&&jn.current.requestFullscreen()},ye=function(){var Wn;tn(!1),$((Wn=jn.current)===null||Wn===void 0?void 0:Wn.duration)},be=function(){m&&!Sn.current&&(q||(jn.current.play(),Sn.current=!0))},Ce=function(){m&&Sn.current&&(Sn.current=!1)},je=function(Wn){jn.current&&(jn.current.currentTime=Wn,$(Wn))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(nn,{}),(0,p.jsx)("div",{className:T()("".concat(U,"-video-container"),J),style:G,children:(0,p.jsxs)("div",{className:"".concat(U,"-video-content"),onMouseEnter:be,onMouseLeave:Ce,children:[i.poster&&(0,p.jsx)("img",{src:i.poster,alt:"poster",className:"".concat(U,"-video-poster")}),(0,p.jsx)("video",u()(u()({ref:Nn},_),{},{controls:!1,muted:Pn,className:"".concat(U,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:An,onCanPlayThrough:zn,onPlay:ne,onPause:he,onEnded:ye})),s&&(0,p.jsx)(O.Z,{className:"".concat(U,"-video-controller-wrapper"),isPlaying:q,currentTime:dn,duration:vn,enableVolume:Mn,muted:Pn,onMute:function(){return Tn(!Pn)},onPlayPause:Rn,onFullscreen:Pe,onProgressClick:je}),z]})})]})}),d=t},88906:function(pn,Q,n){n.d(Q,{Z:function(){return L}});var b=n(26068),u=n.n(b),V=n(75271),M=new Map;function L(j){var k=j.globalStyle,R=j.name;(0,V.useLayoutEffect)(function(){var T=M.get(k)||0;if(T)M.set(k,u()(u()({},T),{},{count:T.count+1}));else{var O=document.createElement("style"),N=Math.random().toString(36).slice(2);O.innerHTML=k,O.dataset.id=N,O.dataset.flag="bailian-ui-use-style",R&&O.setAttribute("name",R),document.head.appendChild(O),M.set(k,{count:1,id:N})}return function(){var C=M.get(k);M.set(k,u()(u()({},C),{},{count:C.count-1})),setTimeout(function(){var P=M.get(k);if((P==null?void 0:P.count)<=0){var B;M.delete(k),(B=document.head.querySelector('[data-id="'+P.id+'"]'))===null||B===void 0||B.remove()}},100)}},[k])}},39707:function(pn,Q,n){n.r(Q),n.d(Q,{Alert:function(){return l.Z},AlertDialog:function(){return D.default},Anchor:function(){return s.Z},Audio:function(){return rt.Z},Avatar:function(){return Z.Z},Badge:function(){return x.Z},Breadcrumb:function(){return m.Z},Button:function(){return z.Z},Card:function(){return J.Z},Checkbox:function(){return G.Z},CodeBlock:function(){return _.ZP},CodeBlockLangExtensionsMap:function(){return _.xO},Collapse:function(){return Y.Z},CollapsePanel:function(){return U.Z},ConfigProvider:function(){return Rt.ZP},DatePicker:function(){return nn.Z},Descriptions:function(){return Ur.Z},Drawer:function(){return un.Z},Dropdown:function(){return gn.Z},EllipsisTip:function(){return yn},Empty:function(){return Mn.Z},FileCard:function(){return Xe.s},FileIcon:function(){return Xe.Z},FloatButton:function(){return o.Z},Form:function(){return kn.Z},HelpIcon:function(){return ne},IconButton:function(){return Sn.Z},IconFont:function(){return he.Z},Image:function(){return Pe.Z},Input:function(){return ye.Z},InputNumber:function(){return p.Z},MdEditor:function(){return we.Z},MobileAlertDialog:function(){return yt},MobileDrawer:function(){return vt},MobileModal:function(){return it},Modal:function(){return Ce.Z},Pagination:function(){return Fn.Z},Popconfirm:function(){return Wn.Z},Popover:function(){return Pr.Z},Progress:function(){return v.Z},PromptsEditor:function(){return we.Z},Radio:function(){return t.ZP},RadioButton:function(){return yr.default},Result:function(){return br.Z},Select:function(){return d.default},Skeleton:function(){return i.Z},SlateEditor:function(){return wr},Slider:function(){return Je.Z},SliderSelector:function(){return Kr},Spinner:function(){return $r.Z},Statistic:function(){return Gr.Z},Steps:function(){return Cr.Z},Switch:function(){return Jr.Z},Table:function(){return Yr.Z},Tabs:function(){return Xr.Z},Tag:function(){return qr.Z},TimePicker:function(){return _r.Z},Tooltip:function(){return zn.Z},Upload:function(){return nt.Z},Video:function(){return et.Z},bailianDarkTheme:function(){return hr},bailianTheme:function(){return pr},base64Decoder:function(){return Ht},base64Encoder:function(){return Wt},carbonDarkTheme:function(){return wt},carbonTheme:function(){return zt},copy:function(){return ur.JG},delay:function(){return cr},generateTheme:function(){return P},generateThemeByToken:function(){return B.Z},getCommonConfig:function(){return vn.getCommonConfig},message:function(){return be.Z},notification:function(){return je.Z},parseJsonSafely:function(){return At},purpleDarkTheme:function(){return hr},purpleTheme:function(){return pr},renderTooltip:function(){return ur.rb},requestPop:function(){return vr},requestPopSse:function(){return It},requestSse:function(){return xr},safeHtml:function(){return Ct.t},setCommonConfig:function(){return vn.setCommonConfig},useCommonConfig:function(){return vn.useCommonConfig},useGlobalStyle:function(){return bt.Z},waitForDom:function(){return jt},waitForFunc:function(){return dr}});var b=n(23577),u=n(19888),V=n(44719),M=n(57249),L=function(r){var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null},j=function(r,a,f){return"#"+((1<<24)+(r<<16)+(a<<8)+f).toString(16).slice(1).toUpperCase()},k=function(r,a,f){var g=r/255,h=a/255,c=f/255,y=Math.max(g,h,c),I=Math.min(g,h,c),A,E,S=(y+I)/2;if(y===I)A=E=0;else{var H=y-I;switch(E=S>.5?H/(2-y-I):H/(y+I),y){case g:A=((h-c)/H+(h<c?6:0))/6;break;case h:A=((c-g)/H+2)/6;break;case c:A=((g-h)/H+4)/6;break;default:A=0}}return{h:A*360,s:E*100,l:S*100}},R=function(r,a,f){var g=r/360,h=a/100,c=f/100,y,I,A;if(h===0)y=I=A=c;else{var E=function(rn,sn,bn){var K=bn;return K<0&&(K+=1),K>1&&(K-=1),K<.16666666666666666?rn+(sn-rn)*6*K:K<.5?sn:K<.6666666666666666?rn+(sn-rn)*(.6666666666666666-K)*6:rn},S=c<.5?c*(1+h):c+h-c*h,H=2*c-S;y=E(H,S,g+1/3),I=E(H,S,g),A=E(H,S,g-1/3)}return{r:Math.round(y*255),g:Math.round(I*255),b:Math.round(A*255)}},T=function(r,a){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,g=L(r);if(!g)return r;var h=k(g.r,g.g,g.b);h.l=Math.max(0,Math.min(100,h.l+a)),h.s=Math.max(0,Math.min(100,h.s+f));var c=R(h.h,h.s,h.l);return j(c.r,c.g,c.b)},O=function(r,a){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,g=L(r);if(!g)return r;var h=k(g.r,g.g,g.b);h.l=a,f!==null&&(h.s=f);var c=R(h.h,h.s,h.l);return j(c.r,c.g,c.b)},N=function(r,a){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,g=L(r);if(!g)return r;var h=k(g.r,g.g,g.b);h.l=a,h.s=Math.max(0,Math.min(100,h.s*f));var c=R(h.h,h.s,h.l);return j(c.r,c.g,c.b)},C=function(r){var a=r.primaryHex,f=r.bgBaseHex,g=r.textBaseHex,h=r.darkMode,c=h===void 0?!1:h,y=f||(c?"#000000":"#ffffff"),I=g||(c?"#E7E7ED":"#1a1a1a"),A=L(a);if(!A)return null;var E=k(A.r,A.g,A.b),S=L(y),H=L(I),on=S?k(S.r,S.g,S.b):{h:210,s:8,l:c?5:99},rn=Math.max(8,Math.min(E.s,40)),sn=Math.max(12,Math.min(E.s*.6,35)),bn={borderRadiusXS:u.borderRadiusXS,borderRadiusSM:u.borderRadiusSM,borderRadius:u.borderRadius,borderRadiusLG:u.borderRadiusLG,borderRadiusXL:u.borderRadiusXL,borderRadiusFull:u.borderRadiusFull,wireframe:u.wireframe,colorPrimary:c?O(a,Math.max(E.l-5,42),E.s*.95):a,colorPrimaryHover:c?O(a,Math.min(E.l+10,55),E.s*.95):T(a,E.l<50?10:-10,0),colorPrimaryActive:c?O(a,Math.max(E.l-10,35),E.s*.95):T(a,E.l<50?-10:-20,0),colorPrimaryBg:c?O(a,13,rn*.6):O(a,96,rn*.8),colorPrimaryBgHover:c?O(a,13,rn*.6):O(a,94,rn),colorPrimaryBorder:c?O(a,17,sn*.8):O(a,88,sn*.8),colorPrimaryBorderHover:c?O(a,22,sn):O(a,82,sn),colorPrimaryText:c?O(a,Math.max(E.l-5,42),E.s*.95):a,colorPrimaryTextHover:c?O(a,Math.min(E.l+10,55),E.s*.95):T(a,E.l<50?10:-10,0),colorPrimaryTextActive:c?O(a,Math.max(E.l-10,35),E.s*.95):T(a,E.l<50?-10:-20,0),colorTextBase:I,colorText:"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.88)"),colorTextSecondary:"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.65)"),colorTextTertiary:"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.45)"),colorTextQuaternary:"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.25)"),colorTextWhite:"#fff",colorBgBase:y,colorBgContainer:c?N(y,Math.min(on.l+3,8),1.2):N(y,Math.min(on.l+1,99),.8),colorBgElevated:c?N(y,Math.min(on.l+3,8),1.2):y,colorBgLayout:c?N(y,Math.min(on.l+3,8),1.2):N(y,Math.max(on.l-2,96),1.2),colorBgSpotlight:c?"rgba(".concat(L(N(y,28,1.2)).r,", ").concat(L(N(y,28,1.2)).g,", ").concat(L(N(y,28,1.2)).b,", 0.85)"):"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.85)"),colorBgMask:c?"rgba(".concat(S.r,", ").concat(S.g,", ").concat(S.b,", 0.8)"):"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.45)"),colorBorder:c?"rgba(".concat(L(N(y,28,2)).r,", ").concat(L(N(y,28,2)).g,", ").concat(L(N(y,28,2)).b,", 0.8)"):N(y,81,2.5),colorBorderSecondary:c?"rgba(".concat(L(N(y,22,1.8)).r,", ").concat(L(N(y,22,1.8)).g,", ").concat(L(N(y,22,1.8)).b,", 0.8)"):N(y,88,2),colorFill:c?"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.18)"):N(y,81,2.5)+"5c",colorFillSecondary:c?"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.12)"):N(y,81,2.5)+"33",colorFillTertiary:c?"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.08)"):N(y,81,2.5)+"26",colorFillQuaternary:c?"rgba(".concat(H.r,", ").concat(H.g,", ").concat(H.b,", 0.04)"):N(y,81,2.5)+"1a",colorFillDisable:c?N(I,55,.8):N(y,86,1.8),colorLink:c?O(a,Math.max(E.l-5,42),E.s*.95):a,colorInfo:c?b.colorInfo:u.colorInfo,colorInfoHover:c?b.colorInfoHover:u.colorInfoHover,colorInfoText:c?b.colorInfoText:u.colorInfoText,colorInfoBg:c?b.colorInfoBg:u.colorInfoBg,colorInfoBgHover:c?b.colorInfoBgHover:u.colorInfoBgHover,colorInfoBorder:c?b.colorInfoBorder:u.colorInfoBorder,colorInfoBorderHover:c?b.colorInfoBorderHover:u.colorInfoBorderHover,colorSuccess:c?b.colorSuccess:u.colorSuccess,colorSuccessHover:c?b.colorSuccessHover:u.colorSuccessHover,colorSuccessBg:c?b.colorSuccessBg:u.colorSuccessBg,colorSuccessBgHover:c?b.colorSuccessBgHover:u.colorSuccessBgHover,colorSuccessBorder:c?b.colorSuccessBorder:u.colorSuccessBorder,colorSuccessBorderHover:c?b.colorSuccessBorderHover:u.colorSuccessBorderHover,colorWarning:c?b.colorWarning:u.colorWarning,colorWarningHover:c?b.colorWarningHover:u.colorWarningHover,colorWarningBg:c?b.colorWarningBg:u.colorWarningBg,colorWarningBgHover:c?b.colorWarningBgHover:u.colorWarningBgHover,colorWarningBorder:c?b.colorWarningBorder:u.colorWarningBorder,colorWarningBorderHover:c?b.colorWarningBorderHover:u.colorWarningBorderHover,colorError:c?b.colorError:u.colorError,colorErrorHover:c?b.colorErrorHover:u.colorErrorHover,colorErrorBg:c?b.colorErrorBg:u.colorErrorBg,colorErrorBgHover:c?b.colorErrorBgHover:u.colorErrorBgHover,colorErrorBorder:c?b.colorErrorBorder:u.colorErrorBorder,colorErrorBorderHover:c?b.colorErrorBorderHover:u.colorErrorBorderHover,colorPurple:c?b.colorPurple:u.colorPurple,colorPurpleHover:c?b.colorPurpleHover:u.colorPurpleHover,colorPurpleBg:c?b.colorPurpleBg:u.colorPurpleBg,colorPink:c?b.colorPink:u.colorPink,colorPinkHover:c?b.colorPinkHover:u.colorPinkHover,colorPinkBg:c?b.colorPinkBg:u.colorPinkBg,colorYellow:c?b.colorYellow:u.colorYellow,colorYellowHover:c?b.colorYellowHover:u.colorYellowHover,colorYellowBg:c?b.colorYellowBg:u.colorYellowBg,colorOrange:c?b.colorOrange:u.colorOrange,colorOrangeHover:c?b.colorOrangeHover:u.colorOrangeHover,colorOrangeBg:c?b.colorOrangeBg:u.colorOrangeBg,colorTeal:c?b.colorTeal:u.colorTeal,colorTealHover:c?b.colorTealHover:u.colorTealHover,colorTealBg:c?b.colorTealBg:u.colorTealBg,colorBlue:c?b.colorBlue:u.colorBlue,colorBlueHover:c?b.colorBlueHover:u.colorBlueHover,colorBlueBg:c?b.colorBlueBg:u.colorBlueBg,colorMauve:c?b.colorMauve:u.colorMauve,colorMauveHover:c?b.colorMauveHover:u.colorMauveHover,colorMauveBg:c?b.colorMauveBg:u.colorMauveBg,colorSlate:c?b.colorSlate:u.colorSlate||"#1E293B",colorSlateHover:c?b.colorSlateHover:u.colorSlateHover||"#475569",colorSlateBg:c?b.colorSlateBg:u.colorSlateBg||"#E2E8F0",colorLavender:c?b.colorLavender:u.colorLavender||"#A77BFF",colorLavenderHover:c?b.colorLavenderHover:u.colorLavenderHover||"#BB99FF",colorLavenderBg:c?b.colorLavenderBg:u.colorLavenderBg||"rgba(226, 212, 255, 0.8)",boxShadow:c?b.boxShadow:u.boxShadow,boxShadowSecondary:c?b.boxShadowSecondary:u.boxShadowSecondary,boxShadowTertiary:c?b.boxShadowTertiary:u.boxShadowTertiary,boxShadowTertiaryLeft:c?b.boxShadowTertiaryLeft:u.boxShadowTertiaryLeft,boxShadowInput:c?b.boxShadowInput:u.boxShadowInput};return bn},P=C,B=n(39728),l=n(46525),x=n(2344),o=n(69407),p=n(1359),v=n(32102),t=n(57239),d=n(54426),i=n(42435),D=n(49573),s=n(52783),Z=n(32893),m=n(61670),z=n(75041),J=n(43529),G=n(75517),_=n(83665),Y=n(30807),U=n(28932),nn=n(78618),un=n(59507),gn=n(64925),dn=n(26068),$=n.n(dn),fn=n(31759),ln=n.n(fn),vn=n(51886),Cn=n(43721),mn=n(82187),hn=n.n(mn),q=n(75271),tn=n(53649),an=n.n(tn),cn=n(75469),Pn,Tn=(0,cn.Z)(Pn||(Pn=an()([`
div.`,`-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`])),function(e){return e.sparkPrefix}),F=n(52676);function yn(e){var r=e.className,a=r===void 0?"":r,f=e.style,g=f===void 0?{}:f,h=e.children,c=e.rows,y=c===void 0?1:c,I=e.tooltip,A=e.tooltipMaxHeight,E=A===void 0?"90vh":A,S=(0,vn.getCommonConfig)(),H=S.sparkPrefix,on=Tn();function rn(){var sn={maxHeight:E,overflow:"auto"};if(ln()(I)==="object"){var bn=I,K=bn.title,X=bn.styles;return{title:K||h,styles:$()($()({},X),{},{body:$()($()({},sn),X==null?void 0:X.body)})}}return{title:I||h,styles:{body:sn}}}return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(on,{}),(0,F.jsx)(Cn.Z.Paragraph,{className:hn()("".concat(H,"-ellipsis-tip"),a),style:g,ellipsis:{rows:y,tooltip:rn()},children:h})]})}var Mn=n(38348),kn=n(86950),jn=n(69898),Sn=n(94376),Nn=n(55116),zn=n(54077),An,Rn=(0,cn.Z)(An||(An=an()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix});function ne(e){var r=(0,Nn.X)(),a=Rn(),f=e.style,g=e.content,h=e.className,c=e.popoverProps,y=(0,vn.getCommonConfig)(),I=y.sparkPrefix;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(r,{}),(0,F.jsx)(a,{}),(0,F.jsx)(zn.Z,$()($()({title:g,overlayInnerStyle:{maxWidth:376},trigger:"hover",style:f},c),{},{children:(0,F.jsx)(Sn.Z,{className:hn()("".concat(I,"-help-icon"),h),icon:(0,F.jsx)(jn.Z,{}),shape:"circle",bordered:!1,size:"small"})}))]})}var he=n(8369),Pe=n(78899),ye=n(29978),be=n(63953),Ce=n(13428),je=n(16945),Fn=n(22084),Wn=n(93019),Pr=n(20739),we=n(22781),yr=n(51458),br=n(93949),Cr=n(10650),jr=n(48305),Se=n.n(jr),Jn=n(25811),oe=n(82090),W=n(75040),Ee=n(28533),ie=n(20335),$e,Sr=(0,cn.Z)($e||($e=an()([`
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
`]))),Er=n(15558),Ue=n.n(Er),Tr=(0,q.memo)(function(e){var r=e.attributes,a=e.children;return(0,F.jsx)("div",$()($()({},r),{},{style:{marginTop:"8px"},children:a}))}),Qe,Nr=(0,cn.Z)(Qe||(Qe=an()([`
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
`]))),Dr=(0,q.memo)(function(e){var r=e.attributes,a=e.renderVarLabel,f=Nr();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(f,{}),(0,F.jsxs)("span",$()($()({},r),{},{children:[e.children,(0,F.jsx)("span",{className:"spark-editor-var-tag",children:a?a(e.element.code):e.element.label})]}))]})}),$t=function(r){return Object.keys(r).map(function(a){return{label:r[a].label,desc:r[a].desc,value:a}})},Mr=[{code:"s",isParagraph:!0,out:[],inner:[],name:Jn.Z.get({id:"components.SlateEditor.utils.constant.Paragraph",dm:"\u6BB5\u843D"}),render:Tr,type:"double"},{code:"var",isParagraph:!1,out:["s"],inner:[],name:Jn.Z.get({id:"components.SlateEditor.utils.constant.Variable",dm:"\u53D8\u91CF"}),render:Dr,isInline:!0,isVoid:!0,type:"single"}],Te=function(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},Ut=function(r){return r.replace(/&/g,"&amp;").replace(/{/g,"").replace(/}/g,"").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},Br=function(r){return r.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")},Ne=function e(r,a){var f="",g=a||{},h=g.tagRules,c=h===void 0?{}:h;return r.forEach(function(y,I){if(W.W_.isElement(y)){var A=c[y.type];if(!A)f+=Te(y.text);else switch(A.code){case"image":f+="![".concat(y.fileName,"](").concat(y.src,")");break;case"pdf":f+="[".concat(y.fileName,"](").concat(y.src,")");break;case"s":f+="".concat(e(y.children,a)).concat(I<r.length-1?`
`:"");break;case"var":f+="${".concat(y.code,"}");default:break}}else f+=Te(y.text)}),f},Ve=function(r,a){if(r&&r.children.length){var f=Ne(r.children,a);return f==="<s></s>"?"":Br(f)}return""},fe=function(r){if(!r)return"";var a="",f=Te(r).replace(/\$\{([^{}]+?)\}/g,function(g,h){return'<var code="'.concat(h,'" label="${').concat(h,'}" />')});return f.split(`
`).forEach(function(g){a+="<s>".concat(g,"</s>")}),"<speak>".concat(a,"</speak>")},kr=function e(r){var a,f=[];return(r==null||(a=r.childNodes)===null||a===void 0?void 0:a.length)>0&&r.childNodes.forEach(function(g,h,c){var y=g.nodeType,I=g.nodeName;if(y===1){for(var A={},E=0;E<g.attributes.length;E++){var S=g.attributes[E],H=S.nodeName,on=S.nodeValue;A[H]=on}var rn=$()({type:I},A);g.childNodes.length>0?rn.children=e(g):rn.children=[{text:""}],f.push(rn),I!=="s"&&(h>0&&c[h-1].nodeType===1&&f.unshift({text:""}),h===c.length-1&&f.push({text:""}))}else y===3&&f.push({text:g.nodeValue||""})}),f},ve=function(r){if(r){var a=new DOMParser().parseFromString(r,"text/xml");return kr(a)}},Zr=function(r){if(!r||r.includes("</speak>"))return r;var a=r;return a.includes("<s>")||(a="<s>".concat(a,"</s>")),"<speak>".concat(a,"</speak>")},Ke=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a={};return[].concat(Ue()(r),Ue()(Mr)).forEach(function(f){a[f.code]||(a[f.code]=f)}),a},Fr=n(90228),Zn=n.n(Fr),Or=n(87999),Yn=n.n(Or),Ge=function(r,a,f){if(!(!r||!a)){var g=r.selection,h=null;g&&(h=g.focus),f!=null&&f.at&&(h=f==null?void 0:f.at),h||(h={path:[0,0],offset:0});var c=h,y=c.path,I=c.offset,A=W.NB.get(r,W.y$.parent(y));if(!W.ML.isVoid(r,A)){var E=W.NB.string(W.NB.get(r,y)),S=E.substring(0,I-(f!=null&&f.deletePrefix?1:0)),H=E.substring(I,E.length);W.ML.withoutNormalizing(r,function(){r.apply({type:"insert_node",node:{text:H},path:y}),r.apply({type:"insert_node",node:a,path:y}),r.apply({type:"insert_node",node:{text:S},path:y});var on=W.y$.next(W.y$.next(W.y$.next(y)));r.apply({type:"remove_node",path:on,node:W.NB.get(r,on)});var rn={path:W.y$.next(W.y$.next(y)),offset:0};r.apply({type:"set_selection",properties:null,newProperties:{anchor:rn,focus:rn}}),ie.F3.focus(r),r.onChange()})}}},Lr=function(){var e=Yn()(Zn()().mark(function r(a,f,g){var h,c,y,I,A,E,S,H,on,rn,sn,bn,K,X,En,Dn,Un,Bn,Hn,qn,On,te,Qn,ae,Vn,Kn,ee,Ln,In,wn,Gn,xn;return Zn()().wrap(function(en){for(;;)switch(en.prev=en.next){case 0:if(!(!a||!f)){en.next=2;break}return en.abrupt("return");case 2:if(c=a.selection,y=g||{},I=y.tip,A=y.selection,E=A===void 0?c:A,S=g==null||(h=g.rules)===null||h===void 0?void 0:h[f.type],!(E&&!W.e6.isCollapsed(E))){en.next=45;break}if(on=W.NB.fragment(a,E),rn=me(on),rn!==""){en.next=10;break}return en.abrupt("return");case 10:if(sn=ge(W.e6.edges(E)),bn=Se()(sn,2),K=bn[0],X=bn[1],W.ML.isVoid(a,W.NB.get(a,W.y$.parent(K.path)))&&(K.path=W.y$.next(W.y$.parent(K.path)),K.offset=0),W.ML.isVoid(a,W.NB.get(a,W.y$.parent(X.path)))&&(X.path=W.y$.previous(W.y$.parent(X.path)),X.offset=W.NB.string(W.NB.get(a,X.path)).length),W.y$.hasPrevious(X.path)&&W.NB.get(a,W.y$.parent(K.path))===W.NB.get(a,W.y$.previous(X.path))&&K.offset===0&&X.offset===0&&(En=W.y$.previous(W.y$.parent(K.path)),Dn=W.NB.get(a,En),K.path=En,K.offset=Dn.text.length),W.NB.parent(a,K.path)!==W.NB.parent(a,X.path)){for(Un=W.NB.get(a,K.path),Bn=me(W.NB.fragment(a,{anchor:{path:X.path,offset:0},focus:X}));W.xv.isText(Un)&&Un.text===""&&rn===Bn;)K.path.splice(K.path.length-1,1,1,0),Un=W.NB.get(a,K.path);for(Hn=W.NB.get(a,X.path),qn=W.NB.string(W.NB.get(a,W.e6.edges(E)[0].path)),On=me(W.NB.fragment(a,{anchor:K,focus:{path:K.path,offset:qn.length}}));W.xv.isText(Hn)&&Hn.text===""&&rn===On;)te=X.path[X.path.length-1],X.path.splice(X.path.length-1,1,te-1),Hn=W.NB.get(a,X.path),W.W_.isElement(Hn)&&(X.path.push(Hn.children.length-1),X.offset=qn.length)}if(W.NB.parent(a,K.path)===W.NB.parent(a,X.path)){en.next=18;break}return oe.ZP.info(Jn.Z.get({id:"components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect",dm:"\u5212\u9009\u8303\u56F4\u6709\u8BEF"})),en.abrupt("return");case 18:Qn=W.y$.parent(K.path),ae=(S==null?void 0:S.name)||De(),Vn=W.NB.get(a,Qn),Kn=g==null||(H=g.rules)===null||H===void 0?void 0:H[Vn.type];case 22:if(!(S!=null&&S.out&&Qn.length>1)){en.next=30;break}if(S.out.includes(Vn.type)){en.next=27;break}return ee=(Kn==null?void 0:Kn.name)||De(),oe.ZP.warning(Jn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn",dm:"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185"},{wrapTagName:ae,tagName:ee})),en.abrupt("return");case 27:Qn=W.y$.parent(Qn),en.next=22;break;case 30:if(!(S!=null&&S.inner&&W.NB.get(a,K.path)!==W.NB.get(a,X.path))){en.next=42;break}Ln=W.y$.next(K.path);case 32:if(W.y$.equals(Ln,X.path)){en.next=42;break}if(wn=W.NB.get(a,Ln),Gn=g==null||(In=g.rules)===null||In===void 0?void 0:In[wn.type],!(W.W_.isElement(wn)&&!S.inner.includes(wn.type))){en.next=39;break}return xn=(Gn==null?void 0:Gn.name)||De(),oe.ZP.warning(Jn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn",dm:"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011"},{wrapTagName:ae,tagName:xn})),en.abrupt("return");case 39:Ln=W.y$.next(Ln),en.next=32;break;case 42:W.ML.withoutNormalizing(a,function(){var re=W.NB.parent(a,K.path),_n=W.NB.fragment(re,{anchor:{path:[K.path[K.path.length-1]],offset:K.offset},focus:{path:[X.path[X.path.length-1]],offset:X.offset}}),ue=W.NB.string(W.NB.get(a,K.path));if(W.y$.equals(K.path,X.path))a.apply({type:"remove_text",path:K.path,offset:K.offset,text:ue.substring(K.offset,X.offset)});else{a.apply({type:"remove_text",path:K.path,offset:K.offset,text:ue.substring(K.offset,ue.length)});for(var de=W.y$.next(K.path);!W.y$.equals(de,X.path);)a.apply({type:"remove_node",path:de,node:W.NB.get(a,de)}),X.path=W.y$.previous(X.path);var Ae=W.NB.string(W.NB.get(a,X.path));a.apply({type:"remove_text",path:X.path,offset:0,text:Ae.substring(0,X.offset)})}if(!W.y$.equals(K.path,X.path)){var pe=W.NB.get(a,X.path);a.apply({type:"remove_node",path:X.path,node:pe});var We=W.NB.string(pe);a.apply({type:"insert_text",path:K.path,offset:K.offset,text:We})}Ge(a,$()($()({},f),{},{children:_n}),{at:K,rules:g==null?void 0:g.rules})}),en.next=46;break;case 45:I&&oe.ZP.warning(I);case 46:case"end":return en.stop()}},r)}));return function(a,f,g){return e.apply(this,arguments)}}(),Qt=function(r,a,f){if(!(!r||!a)){var g=Node.get(r,a),h=ge(g.children).reverse();Editor.withoutNormalizing(r,function(){r.apply({type:"remove_node",node:g,path:a}),h.forEach(function(rn){r.apply({type:"insert_node",node:rn,path:a})});for(var c=Path.parent(a),y=Node.get(r,c),I=0;Node.has(y,[I+1]);)if(Text.isText(Node.get(y,[I]))&&Text.isText(Node.get(y,[I+1]))){var A=_toConsumableArray(c);A.push(I+1);var E=Node.get(r,A),S=Node.string(E);r.apply({type:"remove_node",path:A,node:E});var H=Path.previous(A),on=Node.string(Node.get(r,H));r.apply({type:"insert_text",path:Path.previous(A),offset:on.length,text:S}),y=Node.get(r,c)}else I++;f==null||f(),Path.previous(a)})}},Ir=function(r,a,f){var g=f.at;r.apply({type:"set_node",path:g,properties:a,newProperties:a}),r.onChange()},Vt=function(r,a,f){r.apply({type:"remove_node",path:f,node:Node.get(r,f)}),r.apply({type:"insert_node",path:f,node:a})},Rr=function(r,a){r&&(W.ML.withoutNormalizing(r,function(){var f=ge(r.children);f.forEach(function(h){r.apply({type:"remove_node",path:[0],node:h})});var g=a?ge(a):[{type:"s",children:[{text:""}]}];g.reverse(),g.forEach(function(h){r.apply({type:"insert_node",path:[0],node:h})})}),r.onChange())},me=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.reduce(function(a,f){return a+W.NB.string(f)},"")},ge=function(r){return JSON.parse(JSON.stringify(r))},De=function(){var r="";return r},Kt=function(r){var a;return(a=r[0])===null||a===void 0||(a=a.children)===null||a===void 0?void 0:a.map(function(f){return f.children.map(function(g){return g.text}).join("")}).join("")},Gt=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,a=r%60,f=parseInt("".concat(r/60)),g=0;return f>60&&(f=f%60,g=parseInt("".concat(f/60))),"".concat(g?"".concat(Me(g),":"):"").concat(Me(f),":").concat(Me(a))},Me=function(r){return r>=10?"".concat(r):"0".concat(r)},Ar=function(r,a){if(!(!r||!a))return ie.F3.findPath(r,a)},Wr=function(r){r&&W.ML.withoutNormalizing(r,function(){var a=W.ML.end(r,[]);W.YR.select(r,a),ie.F3.focus(r),r.onChange()})},Hr=function(r,a,f){var g=r.isInline,h=r.isVoid,c=r.insertText,y=r.insertBreak,I=r.apply;r.isInline=function(E){var S;return((S=f[E.type])===null||S===void 0?void 0:S.isInline)||g(E)},r.isVoid=function(E){var S;return((S=f[E.type])===null||S===void 0?void 0:S.isVoid)||h(E)};var A=function(S){var H=parseInt(r.maxLength||a||"1000"),on=Ve(r,{tagRules:f}),rn=on.length;if(rn+S.length>H?(c(S.substring(0,H-rn)),Ee.MO.withoutSaving(r,function(){c(S.substring(H-rn,S.length))})):c(S),r.selection&&rn+S.length>H){var sn=r.selection.focus,bn=sn.path,K=sn.offset,X=K-(rn+S.length-H),En=S.substring(H-rn,S.length),Dn=Jn.Z.get({id:"components.SlateEditor.utils.withEditor.YouCanEnterAMaximum",dm:"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57"},{maxLen:H});Ee.MO.withoutSaving(r,function(){r.apply({type:"remove_text",path:bn,offset:X,text:En})}),oe.ZP.warning(Dn)}};return r.insertText=A,r.insertFragment=function(E){var S=me(E);A(S)},r.insertBreak=function(){var E=r.selection;if(E){var S=Array.from(W.ML.nodes(r,{at:E,match:function(sn){return!W.ML.isEditor(sn)&&W.W_.isElement(sn)&&sn.type!=="s"}})),H=Se()(S,1),on=H[0];if(on)return;y()}},r.apply=function(E){E.type==="set_selection"&&Be||I(E)},r},zr=(0,q.forwardRef)(function(e,r){var a=Sr(),f=e.value,g=e.wordLimit,h=g===void 0?1e3:g,c=e.disabled,y=e.onChange,I=e.variables,A=(0,q.useRef)(!1),E=(0,q.useRef)(Ke(e.tagRules)),S=(0,q.useMemo)(function(){return Hr((0,ie.BU)((0,Ee.VC)((0,W.Jh)())),h,E.current)},[]),H=(0,q.useRef)(S.selection),on=(0,q.useRef)(I);(0,q.useEffect)(function(){E.current=Ke(e.tagRules)},[e.tagRules]),(0,q.useEffect)(function(){on.current=I},[I]),(0,q.useEffect)(function(){var xn;if(!A.current){A.current=!0;return}S.maxLength=h;var w=On();Vn(((xn=ve(fe(w==null?void 0:w.slice(0,h))))===null||xn===void 0||(xn=xn[0])===null||xn===void 0?void 0:xn.children)||[{type:"s",children:[{text:""}]}])},[h]),(0,q.useImperativeHandle)(r,function(){return{editor:S,getEditorValue:On,_insertNodes:Qn,_setNodes:te,_setEditorContent:Vn,_findNodePath:ee,_wrapNodes:ae,_serialize:Ln,_generateTextBySelection:In,_insertFragment:wn,_setEditorContentByStr:Kn}});var rn=(0,q.useMemo)(function(){var xn=ve(Zr(fe(f))),w;return xn&&(xn[0].type==="speak"?w=xn[0].children:w=xn),{initValue:w}},[f]),sn=rn.initValue,bn=(0,q.useState)(sn||[{type:"s",children:[{text:""}]}]),K=Se()(bn,2),X=K[0],En=K[1],Dn=function(w){JSON.stringify((S==null?void 0:S.selection)||"")!==JSON.stringify(H.current||"")&&(H.current=S==null?void 0:S.selection);var en=On();f!==en&&(y==null||y(On()),En(w))},Un=function(w){var en=w.element,re=en.type,_n=E.current[re].render;return _n?(0,F.jsx)(_n,$()($()({},w),{},{renderVarLabel:e.renderVarLabel})):(0,F.jsx)(F.Fragment,{})},Bn=(0,q.useCallback)(function(xn){var w=xn.attributes,en=xn.children,re=xn.leaf;return(0,F.jsx)("span",$()($()({},w),{},{style:{paddingLeft:re.text===""?"3px":void 0},children:en}))},[]),Hn=function(){Be=!0},qn=function(){Be=!1},On=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ve(S,$()($()({},w),{},{tagRules:E.current}))},te=function(w,en){Ir(S,w,en)},Qn=function(w){var en=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ge(S,w,$()($()({},en),{},{rules:E.current}))},ae=function(w){var en=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Lr(S,w,$()($()({},en),{},{rules:E.current}))},Vn=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];Rr(S,w)},Kn=function(){var w,en=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";Vn(((w=ve(fe(en==null?void 0:en.slice(0,h))))===null||w===void 0||(w=w[0])===null||w===void 0?void 0:w.children)||[{type:"s",children:[{text:""}]}])},ee=function(w){return Ar(S,w)},Ln=function(w){var en=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ne(w,$()($()({},en),{},{tagRules:E.current}))},In=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!S.selection)return null;var en=W.NB.fragment(S,S.selection);return Ne(en,$()($()({},w),{},{tagRules:E.current}))},wn=function(w){var en,re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,_n=On();if(_n.length>=h){oe.ZP.warning(Jn.Z.get({id:"components.commonComponents.SlateEditor.TheNumberOfWordsCannot",dm:"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57"}));return}(!S.selection||re)&&Wr(S);var ue=_n.endsWith("/n");re&&_n&&!ue&&S.insertBreak();var de=w.slice(0,h-_n.length),Ae=ve(fe(de))||[];(en=Ae[0])===null||en===void 0||en.children.forEach(function(pe,We){var He;We!==0&&S.insertBreak(),(He=pe.children)===null||He===void 0||He.forEach(function(ze){ze.text?S.insertText(ze.text):Qn(ze)})})};(0,q.useEffect)(function(){var xn=On();f!==xn&&(y==null||y(On()))},[]);var Gn=function(w){var en=w.clipboardData.getData("text/plain");wn(en,!1),w.preventDefault()};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(a,{}),(0,F.jsx)("div",{id:"text-editor",className:hn()("text-editor",e.className),children:(0,F.jsx)(ie.mH,{editor:S,value:X,onChange:Dn,children:(0,F.jsx)(ie.CX,{onKeyDown:e.onKeyDown,placeholder:e.placeholder||Jn.Z.get({id:"components.commonComponents.SlateEditor.EnterHere",dm:"\u5728\u8FD9\u91CC\u8F93\u5165"}),onBlur:e.onBlur,onFocus:e.onFocus,className:hn()("text-editor-content",e.contentClassName),readOnly:c,renderElement:Un,renderLeaf:Bn,onCompositionStart:Hn,onCompositionEnd:qn,onPaste:Gn,maxLength:e.wordLimit,onCopy:function(w){var en=In()||"";w.clipboardData.setData("text/plain",en),w.preventDefault()}})})})]})}),wr=zr,Be=!1,Je=n(73431),$r=n(47710),Ur=n(66894),Qr=n(82092),se=n.n(Qr),Ye,Vr=(0,cn.Z)(Ye||(Ye=an()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix});function Kr(e){var r=(0,vn.getCommonConfig)(),a=r.sparkPrefix,f=Vr(),g=function(c){var y=typeof c=="string"?parseFloat(c):c;if(y===null||isNaN(y)){var I;(I=e.onChange)===null||I===void 0||I.call(e,null);return}if(y<e.min){var A;(A=e.onChange)===null||A===void 0||A.call(e,e.min)}else if(y>e.max){var E;(E=e.onChange)===null||E===void 0||E.call(e,e.max)}else{var S;(S=e.onChange)===null||S===void 0||S.call(e,y)}};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(f,{}),(0,F.jsxs)("div",{onMouseUp:function(){var c;return(c=e.onBlur)===null||c===void 0?void 0:c.call(e)},className:hn()("".concat(a,"-slider-selector"),e.className),children:[(0,F.jsx)(Je.Z,{disabled:e.disabled,onChange:g,value:e.value===null?void 0:e.value,min:e.min,max:e.max,step:e.step,marks:e.marks||se()(se()({},e.min,e.min),e.max,e.max),tooltip:{getPopupContainer:function(c){return c}}}),(0,F.jsx)("div",{style:$()({width:"48px"},e.inputNumberWrapperStyle),children:(0,F.jsx)(p.Z,{disabled:e.disabled,controls:!1,min:e.min,max:e.max,onBlur:function(){var c;return(c=e.onBlur)===null||c===void 0?void 0:c.call(e)},step:e.step,value:e.value,onChange:g,precision:e.precision})})]})]})}var Gr=n(2217),Jr=n(28649),Yr=n(34007),Xr=n(93531),qr=n(70539),_r=n(46599),nt=n(38768),et=n(28422),rt=n(42425),Xe=n(26574),tt=n(67825),le=n.n(tt),at=n(6002),Xn=n(84674),qe,_e=(0,cn.Z)(qe||(qe=an()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),ot=["showDivider","closable"],nr=function(){var r=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,f=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(f,"px"),function(){document.body.style.overflow=r,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,f)}},$n=function(r){var a=_e(),f=(0,vn.getCommonConfig)(),g=f.sparkPrefix,h=r.showDivider,c=h===void 0?!0:h,y=r.closable,I=y===void 0?!0:y,A=le()(r,ot);(0,q.useEffect)(function(){if(r.open){var on=nr();return on}},[r.open]);var E=function(rn){return r.info?(0,F.jsxs)("div",{className:"".concat(g,"-modal-footer-wrapper"),children:[(0,F.jsx)("span",{className:"".concat(g,"-modal-footer-info"),children:r.info}),(0,F.jsx)("div",{className:"".concat(g,"-modal-footer-origin-node"),children:rn})]}):rn},S=I?r.closeIcon||(0,F.jsx)(at.Z,{className:"".concat(g,"-modal-title-close"),onClick:function(rn){var sn;(sn=r.onCancel)===null||sn===void 0||sn.call(r,rn)}}):null,H=r.footer===void 0?E:r.footer;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(a,{}),(0,F.jsx)(Xn.Z,$()($()({},A),{},{centered:!1,closeIcon:null,width:r.width||"auto",title:(0,F.jsxs)("div",{className:"".concat(g,"-modal-title-wrapper"),children:[(0,F.jsx)("div",{className:hn()("".concat(g,"-modal-title"),se()({},"".concat(g,"-modal-title-padding"),I)),children:r.title}),S]}),wrapClassName:hn()("".concat(g,"-modal"),se()({},"".concat(g,"-show-divider"),c),r.wrapClassName,"animate-in"),footer:H,transitionName:""}))]})};$n.useModal=Xn.Z.useModal;var ce=function(r){return function(a){var f=nr(),g=(0,vn.getCommonConfig)(),h=g.sparkPrefix,c=a==null?void 0:a.afterClose,y=a==null?void 0:a.content;function I(){var E=_e();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(E,{}),y]})}var A=$()($()({},a),{},{content:(0,F.jsx)(I,{}),width:a.width||"auto",centered:!1,transitionName:"",wrapClassName:hn()("".concat(h,"-modal"),a.wrapClassName,"animate-in"),afterClose:function(){f();for(var S=arguments.length,H=new Array(S),on=0;on<S;on++)H[on]=arguments[on];c==null||c.apply(void 0,H)}});return r(A)}};$n.success=ce(Xn.Z.success),$n.error=ce(Xn.Z.error),$n.warning=ce(Xn.Z.warning),$n.info=ce(Xn.Z.info),$n.confirm=ce(Xn.Z.confirm),$n.SMALL_WIDTH=640,$n.MEDIUM_WIDTH=800,$n.LARGE_WIDTH=960;var it=$n,lt=n(94042),st=n(10178),er,rr=(0,cn.Z)(er||(er=an()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),ct=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],ut=function(r){var a=r.onOk,f=r.onCancel,g=r.okText,h=g===void 0?"\u786E\u5B9A":g,c=r.okButtonProps,y=r.cancelText,I=y===void 0?"\u53D6\u6D88":y,A=r.cancelButtonProps,E=r.info,S=r.footer,H=le()(r,ct),on=rr(),rn=(0,vn.getCommonConfig)(),sn=rn.antPrefix,bn=function(X){if(f)f();else{var En;(En=H.onClose)===null||En===void 0||En.call(H,X)}};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(on,{}),(0,F.jsx)(un.Z,$()($()({},H),{},{footer:S||(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{className:"".concat(sn,"-drawer-footer-info"),children:E}),(0,F.jsxs)("div",{className:"".concat(sn,"-drawer-footer-buttons"),children:[(0,F.jsx)(z.Z,$()($()({onClick:bn},A),{},{children:I})),(0,F.jsx)(z.Z,$()($()({type:"primary",onClick:a},c),{},{children:h}))]})]})}))]})},dt=ut,ft=["children","className","style","showDivider"],tr=function(r){var a=r.children,f=r.className,g=r.style,h=r.showDivider,c=h===void 0?!0:h,y=le()(r,ft),I=rr(),A=(0,vn.getCommonConfig)(),E=A.sparkPrefix,S=A.antPrefix;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(I,{}),(0,F.jsx)(st.Z,$()($()({closeIcon:(0,F.jsx)(lt.Z,{size:24}),className:hn()("".concat(E,"-drawer"),f,se()({},"".concat(S,"-show-divider"),c)),style:$()({},g)},y),{},{children:a}))]})};Object.assign(tr,{Confirm:dt});var vt=tr,mt=n(58911),gt=n(88602),xt=n(62910),pt=n(99090),xe=n(65122),ar,or=(0,cn.Z)(ar||(ar=an()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),ht=["children","type","danger","title","width","className"],ir=function(){var r=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,f=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(f,"px"),function(){document.body.style.overflow=r,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,f)}},lr=function(r){var a=function(sn){var bn=sn.type,K=sn.title,X=(0,vn.getCommonConfig)(),En=X.antPrefix;switch(bn){case"success":return(0,F.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,F.jsx)(mt.Z,{style:{color:"var(--".concat(En,"-color-success)"),fontSize:18,margin:"0 3px"}}),K]});case"warning":case"confirm":return(0,F.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,F.jsx)(gt.Z,{style:{color:"var(--".concat(En,"-color-warning)"),fontSize:18,margin:"0 3px"}}),K]});case"info":return(0,F.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,F.jsx)(xt.Z,{style:{color:"var(--".concat(En,"-color-info)"),fontSize:18,margin:"0 3px"}}),K]});case"error":return(0,F.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,F.jsx)(pt.Z,{style:{color:"var(--".concat(En,"-color-error)"),fontSize:18,margin:"0 3px"}}),K]});default:return Jn.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},f=r.children,g=r.type,h=g===void 0?"info":g,c=r.danger,y=c===void 0?!1:c,I=r.title,A=r.width,E=A===void 0?"auto":A,S=r.className,H=S===void 0?"":S,on=le()(r,ht);return{width:E,transitionName:"",restProps:on,closeIcon:null,title:a({type:h,title:I}),okButtonProps:{danger:h==="error"||h==="warning"||y},destroyOnClose:!0,className:hn()(H,"animate-in","".concat((0,vn.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:r.content||f,children:f}},sr=function(r){var a=lr(r),f=or();return(0,q.useEffect)(function(){if(r.open){var g=ir();return g}},[r.open]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(f,{}),(0,F.jsx)(Xn.Z,$()($()({width:a.width,transitionName:""},a.restProps),{},{closeIcon:null,title:a.title,okButtonProps:a.okButtonProps||{},destroyOnClose:a.destroyOnClose,className:a.className,children:a.content||a.children}))]})},Pt=["success","info","warning","error","confirm"];Pt.forEach(function(e){sr[e]=function(r){var a=lr($()($()({},r),{},{type:e})),f=ir();function g(){var h=or();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(h,{}),a.content]})}return Xn.Z.confirm($()($()($()({},a),a.restProps),{},{content:(0,F.jsx)(g,{}),icon:null,afterClose:function(){var c;if(f(),(c=a.restProps)!==null&&c!==void 0&&c.afterClose){var y;(y=a.restProps).afterClose.apply(y,arguments)}}}))}});var yt=sr,bt=n(88906);function cr(){return ke.apply(this,arguments)}function ke(){return ke=Yn()(Zn()().mark(function e(){var r,a=arguments;return Zn()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return r=a.length>0&&a[0]!==void 0?a[0]:100,g.abrupt("return",new Promise(function(h){setTimeout(h,r)}));case 2:case"end":return g.stop()}},e)})),ke.apply(this,arguments)}var Ct=n(28655),ur=n(12281);function dr(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.timeout,f=a===void 0?5e3:a,g=r.intervalTime,h=g===void 0?100:g,c=Date.now();return new Promise(function(y,I){var A=setInterval(function(){var E=e();E?(clearInterval(A),y(E)):Date.now()-c>f&&(I("timeout"),clearInterval(A))},h)})}function jt(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return dr(function(){return document.querySelector(e)},r)}var fr=n(48430),St=["product","action","url","version","region","headers"],Et=function(){var e=Yn()(Zn()().mark(function a(f,g,h){var c,y,I,A,E,S,H,on,rn,sn,bn,K,X,En,Dn;return Zn()().wrap(function(Bn){for(;;)switch(Bn.prev=Bn.next){case 0:return y=f.product,I=f.action,A=f.url,E=f.version,S=f.region,H=f.headers,on=H===void 0?{}:H,rn=le()(f,St),sn="".concat(A||"/data/api.json","?action=").concat(I,"&product=").concat(y),E&&(sn+="&version=".concat(E)),bn={sec_token:((c=window.ALIYUN_CONSOLE_CONFIG)===null||c===void 0?void 0:c.SEC_TOKEN)||"",region:S},g&&(bn.params=JSON.stringify(g)),h&&Object.assign(bn,h),K=$()({method:"post",credentials:"same-origin",headers:$()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},on)},rn),X=Object.assign({},K),X.body=(0,fr.stringify)(bn),Bn.next=11,fetch(sn,X);case 11:return En=Bn.sent,Bn.next=14,En.json();case 14:if(Dn=Bn.sent,!(Dn.code!=="200"&&!Dn.successResponse)){Bn.next=17;break}return Bn.abrupt("return",Promise.reject(Dn));case 17:return Bn.abrupt("return",Dn);case 18:case"end":return Bn.stop()}},a)}));function r(a,f,g){return e.apply(this,arguments)}return r}(),vr=Et;function Tt(e,r){return Ze.apply(this,arguments)}function Ze(){return Ze=Yn()(Zn()().mark(function e(r,a){var f,g,h;return Zn()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:g=r==null||(f=r.getReader)===null||f===void 0?void 0:f.call(r),g||(console.log("[sse]error: Can Not Find Reader Object"),console.log("[sse]StreamInfo: ",r));case 2:return y.next=4,g.read();case 4:if((h=y.sent).done){y.next=8;break}try{a(h.value)}catch(I){console.log("[sse-error][onmessage] pleach check `onmessage` or `onJsonText`.",I)}y.next=2;break;case 8:case"end":return y.stop()}},e)})),Ze.apply(this,arguments)}function Nt(e){var r,a,f,g=!1;return function(c){r===void 0?(r=c,a=0,f=-1):r=Mt(r,c);for(var y=r.length,I=0;a<y;){g&&(r[a]===10&&(I=++a),g=!1);for(var A=-1;a<y&&A===-1;++a)switch(r[a]){case 58:f===-1&&(f=a-I);break;case 13:g=!0;case 10:A=a;break}if(A===-1)break;e(r.subarray(I,A),f),I=a,f=-1}I===y?r=void 0:I!==0&&(r=r.subarray(I),a-=I)}}function Dt(e,r,a){var f=mr(),g=new TextDecoder;return function(c,y){if(c.length===0)a==null||a(f),f=mr();else if(y>0){var I=g.decode(c.subarray(0,y)),A=y+(c[y+1]===32?2:1),E=g.decode(c.subarray(A));switch(I){case"data":f.data=f.data?"".concat(f.data,`
`).concat(E):E;break;case"event":f.event=E;break;case"id":e(f.id=E);break;case"retry":var S=parseInt(E,10);isNaN(S)||r(f.retry=S);break}}}}function Mt(e,r){var a=new Uint8Array(e.length+r.length);return a.set(e),a.set(r,e.length),a}function mr(){return{data:"",event:"",id:"",retry:void 0}}var Bt=["signal","headers","onopen","onmessage","onclose","onerror","fetch","autoRetryTime","timeout","debug"],Fe="text/event-stream",kt=1e3,gr="last-event-id";function xr(e,r){return Oe.apply(this,arguments)}function Oe(){return Oe=Yn()(Zn()().mark(function e(r,a){var f,g,h,c,y,I,A,E,S,H,on,rn,sn;return Zn()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return f=a.signal,g=a.headers,h=a.onopen,c=a.onmessage,y=a.onclose,I=a.onerror,A=a.fetch,E=a.autoRetryTime,S=a.timeout,H=a.debug,on=H===void 0?!1:H,rn=le()(a,Bt),sn=0,K.abrupt("return",new Promise(function(X,En){var Dn=$()({},g);Dn.accept||(Dn.accept=Fe);var Un=kt,Bn=0,Hn=0,qn=new AbortController;function On(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(on&&console.log("[sse] dispose"),window.clearTimeout(Bn),window.clearTimeout(Hn),!ee){var Ln,In;(Ln=qn)===null||Ln===void 0||(In=Ln.abort)===null||In===void 0||In.call(Ln)}}function te(){window.clearTimeout(Hn),S!==0&&(Hn=window.setTimeout(function(){on&&console.log("[sse] timeout"),En(new Error("timeout")),I==null||I(new Error("timeout")),On()},S||60*1e3))}f==null||f.addEventListener("abort",function(){On(),X()});var Qn=A!=null?A:window.fetch,ae=h!=null?h:Zt;function Vn(){return Kn.apply(this,arguments)}function Kn(){return Kn=Yn()(Zn()().mark(function ee(){var Ln,In,wn,Gn;return Zn()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.prev=0,te(),w.next=4,Qn(r,$()($()({},rn),{},{headers:Dn,signal:(Ln=qn)===null||Ln===void 0?void 0:Ln.signal}));case 4:return In=w.sent,w.next=7,ae(In);case 7:if(In.body){w.next=11;break}return on&&console.log("[sse]no body, delay 100ms"),w.next=11,cr(100);case 11:return on&&console.log("[sse]response.body",In.body),w.next=14,Tt(In.body,Nt(Dt(function(en){en?Dn[gr]=en:delete Dn[gr]},function(en){Un=en},function(en){te(),c==null||c(en)})));case 14:qn=null,y==null||y(),On(),X(),w.next=43;break;case 20:if(w.prev=20,w.t0=w.catch(0),w.t0&&console.error("[sse]err",w.t0),!(!(f!=null&&f.aborted)&&E&&sn<E)){w.next=39;break}return w.prev=24,sn+=1,Gn=(wn=I==null?void 0:I(w.t0))!==null&&wn!==void 0?wn:Un,window.clearTimeout(Bn),typeof Gn=="number"&&(on&&console.log("[sse] retry "+sn),Bn=window.setTimeout(Vn,Gn)),w.abrupt("return",Promise.resolve());case 32:w.prev=32,w.t1=w.catch(24),on&&console.log("[sse] reject innerErr ",w.t1),On(),En(w.t1);case 37:w.next=43;break;case 39:on&&console.log("[sse] reject finally"),On(w.t0 instanceof Response||w.t0 instanceof DOMException&&w.t0.name==="AbortError"),I==null||I(w.t0),En(w.t0);case 43:case"end":return w.stop()}},ee,null,[[0,20],[24,32]])})),Kn.apply(this,arguments)}Vn()}));case 3:case"end":return K.stop()}},e)})),Oe.apply(this,arguments)}function Zt(e){var r=e.headers.get("content-type");if(!(r!=null&&r.startsWith(Fe)))throw new Error("Expected content-type to be ".concat(Fe,", Actual: ").concat(r))}function Ft(e){return Le.apply(this,arguments)}function Le(){return Le=Yn()(Zn()().mark(function e(r){var a,f,g,h,c,y,I;return Zn()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return a=r.action,f=r.body,g=r.product,h=r.version,c=r.region,y=r.params,I={action:a,product:g,region:c,url:"/tool/sse/get.json",version:h},E.abrupt("return",vr(I,y,{content:JSON.stringify(f)}));case 3:case"end":return E.stop()}},e)})),Le.apply(this,arguments)}function Ot(e,r,a,f){var g=r.onMessage,h=r.onClose,c=r.onError,y=r.timeout,I=e.body,A=e.uri,E=e.headers,S=e.query,H=e.path,on=E["Content-Type"],rn="".concat(A.replace(/\/$/,"")).concat(H);S&&Object.keys(S).length&&(rn="".concat(rn,"?").concat((0,fr.stringify)(S)));try{f.value=!1,xr(rn,{method:"POST",body:on==="application/x-www-form-urlencoded"?new URLSearchParams(JSON.parse(I)):I,signal:a.signal,timeout:y,headers:E,onopen:function(bn){return bn.status!==200?Promise.reject(bn):Promise.resolve()},onmessage:function(bn){try{var K=bn.data,X=K===void 0?"{}":K,En=JSON.parse(X);g==null||g(En)}catch(Dn){c==null||c(Dn)}},onclose:function(){f.value=!0,h==null||h()},onerror:function(bn){f.value=!0,h==null||h(),!(bn instanceof DOMException&&bn.name==="AbortError")&&(c==null||c(bn))}})}catch(sn){f.value=!0,c==null||c(sn),h==null||h()}}function Lt(e,r,a){return Ie.apply(this,arguments)}function Ie(){return Ie=Yn()(Zn()().mark(function e(r,a,f){var g,h,c,y;return Zn()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return g=r.onClose,h=r.onError,A.prev=1,A.next=4,Ft(r);case 4:c=A.sent,y=c.data,Ot(y,r,a,f),A.next=13;break;case 9:A.prev=9,A.t0=A.catch(1),g==null||g(),h==null||h(A.t0);case 13:case"end":return A.stop()}},e,null,[[1,9]])})),Ie.apply(this,arguments)}function It(e){return Re.apply(this,arguments)}function Re(){return Re=Yn()(Zn()().mark(function e(r){var a,f;return Zn()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a=new AbortController,f={value:!0},h.next=4,Lt(r,a,f);case 4:return h.abrupt("return",{dispose:function(){f.value&&a.abort("\u53D6\u6D88\u8BF7\u6C42")}});case 5:case"end":return h.stop()}},e)})),Re.apply(this,arguments)}var Rt=n(67464);function At(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof e!="string")return a||console.warn(e,"is not valid json"),r?e:null;try{return JSON.parse(e)}catch(f){return a||console.warn(e,"is not valid json"),r?e:null}}function Wt(e){for(var r=new TextEncoder,a=r.encode(e),f="",g=0;g<a.length;g++)f+=String.fromCharCode(a[g]);var h=btoa(f);return h}function Ht(e){for(var r=atob(e),a=new Uint8Array(r.length),f=0;f<r.length;f++)a[f]=r.charCodeAt(f);var g=new TextDecoder("utf-8"),h=g.decode(a);return h}var pr=(0,B.Z)(u),hr=(0,B.Z)(b,!0),zt=(0,B.Z)(M),wt=(0,B.Z)(V,!0)},12281:function(pn,Q,n){n.d(Q,{JG:function(){return R},rb:function(){return T}});var b=n(26068),u=n.n(b),V=n(67825),M=n.n(V),L=n(75271),j=["maxWidth","maxHeight"];function k(){var B;return((B=window.g_config)===null||B===void 0?void 0:B.isIntl)||!1}var R=function(l){if(navigator.clipboard)navigator.clipboard.writeText(l);else{var x=document.createElement("textarea");document.body.appendChild(x),x.style.position="fixed",x.style.clip="rect(0 0 0 0)",x.style.top="10px",x.value=l,x.select(),document.execCommand("copy",!0),document.body.removeChild(x)}},T=function(l){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=x.maxWidth,p=x.maxHeight,v=M()(x,j);return u()({overlayInnerStyle:{maxWidth:o||326,maxHeight:p||150,overflowY:"auto",padding:"6px 12px"},title:l,arrow:!1},v)};function O(B){return React.isValidElement(B)}function N(B){var l=B||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(l)}var C=function(l){return l>=10?l:"0".concat(l)},P=function(l){if(l<60){var x=Math.ceil(l);return"0:".concat(C(x))}var o=Math.floor(l/60),p=Math.ceil(l%60);return"".concat(C(o),":").concat(C(p))}}}]);
