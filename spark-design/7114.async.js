"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7114],{21245:function(pn,Q,n){n.d(Q,{Z:function(){return p}});var y=n(26068),l=n.n(y),K=n(23655),M=n(75271),H=n(53649),E=n.n(H),B=n(30764),R,N=(0,B.Z)(R||(R=E()([`

.`,"-anchor-wrapper .","-anchor .",`-anchor-link-title {
  color: var(--`,`-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.`,`-anchor-link {
  --`,`-anchor-link-padding-block: 0;
  --`,`-anchor-link-padding-inline-start: 0;
}
`])),function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix}),w=n(52676),A=(0,M.forwardRef)(function(m){var D=N();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(D,{}),(0,w.jsx)(K.Z,l()({},m))]})}),p=A},8639:function(pn,Q,n){n.d(Q,{Z:function(){return c}});var y=n(26068),l=n.n(y),K=n(48305),M=n.n(K),H=n(67825),E=n.n(H),B=n(75271),R=n(82187),N=n.n(R),w=n(74659),A=n(32547),p=n(60213),m=n(53649),D=n.n(m),d=n(30764),x,o=(0,d.Z)(x||(x=D()([`
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
`])),function(g){return g.sparkPrefix},function(g){return g.sparkPrefix},function(g){return g.sparkPrefix}),h=n(52676),f=["controls","className","style"],r=(0,B.forwardRef)(function(g,k){var s=g.controls,O=g.className,P=g.style,Z=E()(g,f),nn=(0,p.getCommonConfig)(),V=nn.sparkPrefix,cn=o(),en=(0,B.useState)(0),X=M()(en,2),$=X[0],rn=X[1],vn=(0,B.useState)(0),mn=M()(vn,2),Sn=mn[0],dn=mn[1],F=(0,B.useState)(!1),Tn=M()(F,2),bn=Tn[0],un=Tn[1],Pn=(0,A.Z)(g,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!1}),hn=M()(Pn,2),q=hn[0],G=hn[1],on=(0,B.useRef)(null),sn=(0,B.useRef)(!0),En=function(jn){on.current=jn,k&&(typeof k=="function"?k(jn):k.current=jn)};(0,B.useEffect)(function(){if(sn.current){sn.current=!1;return}on.current&&Z.src&&on.current.load()},[Z.src]),(0,B.useEffect)(function(){var Cn;return bn&&(Cn=setInterval(function(){on.current&&rn(on.current.currentTime)},16)),function(){Cn&&clearInterval(Cn)}},[bn]);var Dn=function(jn){var fn;on.current&&dn(on.current.duration),(fn=Z.onLoadedMetadata)===null||fn===void 0||fn.call(Z,jn)},yn=function(){on.current&&(bn?on.current.pause():on.current.play(),un(!bn))},I=function(jn){var fn;un(!0),(fn=Z.onPlay)===null||fn===void 0||fn.call(Z,jn)},Mn=function(jn){var fn;un(!1),(fn=Z.onPause)===null||fn===void 0||fn.call(Z,jn)},Ln=function(jn){var fn,Bn;un(!1),rn(((fn=on.current)===null||fn===void 0?void 0:fn.duration)||0),(Bn=Z.onEnded)===null||Bn===void 0||Bn.call(Z,jn)},On=function(jn){on.current&&(on.current.currentTime=jn,rn(jn))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(cn,{}),(0,h.jsxs)("div",{className:N()("".concat(V,"-audio-container"),O),style:P,children:[(0,h.jsx)("audio",l()(l()({ref:En},Z),{},{muted:q,className:"".concat(V,"-audio-element"),onLoadedMetadata:Dn,onPlay:I,onPause:Mn,onEnded:Ln})),(0,h.jsx)(w.Z,{className:"".concat(V,"-audio-controller-wrapper"),isPlaying:bn,currentTime:$,duration:Sn,enableVolume:!0,enableFullscreen:!1,muted:q,onMute:function(){return G(!q)},onPlayPause:yn,onProgressClick:On})]})]})}),c=r},93178:function(pn,Q,n){n.d(Q,{Z:function(){return o}});var y=n(26068),l=n.n(y),K=n(48305),M=n.n(K),H=n(67825),E=n.n(H),B=n(67487),R=n(75271),N=n(53649),w=n.n(N),A=n(30764),p,m=(0,A.Z)(p||(p=w()([`
.`,`-avatar {
  cursor: default;
}
`])),function(h){return h.antPrefix}),D=n(52676),d=["children"],x=(0,R.forwardRef)(function(h,f){var r=m(),c=h.children,g=E()(h,d),k=(0,R.useState)(h.children),s=M()(k,2),O=s[0],P=s[1];return(0,R.useEffect)(function(){if(typeof c=="string"){P(Array.from(c)[0]);return}if(typeof c=="number"){P(Array.from(String(c))[0]);return}P(c)},[c]),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(r,{}),(0,D.jsx)(B.Z,l()(l()({ref:f},g),{},{children:O}))]})}),o=x},40:function(pn,Q,n){n.d(Q,{Z:function(){return f}});var y=n(26068),l=n.n(y),K=n(67825),M=n.n(K),H=n(3999),E=n(67487),B=n(44201),R=n(11691),N=n(75271),w=n(60213),A=n(53649),p=n.n(A),m=n(30764),D,d=(0,m.Z)(D||(D=p()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix}),x=n(52676),o=["items"],h=function(c){var g=c.items,k=g===void 0?[]:g,s=M()(c,o),O=(0,w.getCommonConfig)(),P=O.sparkPrefix,Z=d(),nn=N.useMemo(function(){return k.map(function(V){var cn=V.title,en=[];return V.iconUrl&&en.push((0,x.jsx)(E.Z,{size:20,src:V.iconUrl},"avatar")),V.dropdown?en.push((0,x.jsxs)("span",{className:"".concat(P,"-breadcrumb-dropdown-title"),children:[V.title,(0,x.jsx)(H.Z,{size:16})]},"title")):en.push((0,x.jsx)("span",{children:V.title},"title")),V.dropdown?cn=(0,x.jsx)(B.Z,{menu:{items:V.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(P,"-breadcrumb-dropdown"),children:(0,x.jsx)("span",{children:en})}):(V.iconUrl||en.length>1)&&(cn=(0,x.jsx)("span",{className:"".concat(P,"-breadcrumb-item-content"),children:en})),l()(l()({},V),{},{title:cn})})},[k]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Z,{}),(0,x.jsx)(R.Z,l()(l()({},s),{},{items:nn,className:"".concat(P,"-breadcrumb ").concat(s.className||"")}))]})},f=h},61902:function(pn,Q,n){n.d(Q,{Z:function(){return x}});var y=n(26068),l=n.n(y),K=n(67825),M=n.n(K),H=n(60213),E=n(85770),B=n(82187),R=n.n(B),N=n(53649),w=n.n(N),A=n(30764),p,m=(0,A.Z)(p||(p=w()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix}),D=n(52676),d=["title","info","children","className"],x=function(o){var h=o.title,f=o.info,r=o.children,c=o.className,g=M()(o,d),k=m(),s=(0,H.getCommonConfig)(),O=s.sparkPrefix;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(k,{}),(0,D.jsx)(E.Z,l()(l()({className:R()("".concat(O,"-card"),c)},g),{},{title:null,children:(0,D.jsxs)("div",{className:"".concat(O,"-card-wrapper"),children:[h&&(0,D.jsx)("div",{className:"".concat(O,"-title"),children:h}),f&&(0,D.jsx)("div",{className:"".concat(O,"-info"),children:f}),r&&(0,D.jsx)("div",{className:"".concat(O,"-content"),children:r})]})}))]})}},98618:function(pn,Q,n){n.d(Q,{Z:function(){return x}});var y=n(26068),l=n.n(y),K=n(67825),M=n.n(K),H=n(10758),E=n(75271),B=n(60213),R=n(53649),N=n.n(R),w=n(30764),A,p=(0,w.Z)(A||(A=N()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),m=n(52676),D=["description","descriptionClassName","descriptionStyle","children"],d=function(h){var f=h.description,r=h.descriptionClassName,c=h.descriptionStyle,g=h.children,k=M()(h,D),s=(0,B.getCommonConfig)(),O=s.antPrefix,P=s.sparkPrefix,Z=p(),nn={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(O,"-color-text-tertiary)")};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z,{}),(0,m.jsxs)("div",{className:"".concat(P,"-checkbox"),children:[(0,m.jsx)(H.Z,l()(l()({},k),{},{children:g})),f&&(0,m.jsx)("div",{className:r,style:l()(l()({},nn),c),children:f})]})]})};d.Group=H.Z.Group;var x=d},49570:function(pn,Q,n){n.d(Q,{ZP:function(){return Sn},xO:function(){return $}});var y=n(26068),l=n.n(y),K=n(15558),M=n.n(K),H=n(60213),E=n(43758),B=n(5012),R=n(2607),N=n(91237),w=n(44573),A=n(12652),p=n(23201),m=n(18932),D=n(37441),d=n(99362),x=n(68147),o=n(70300),h=n(24365),f=n(33792),r=n(86112),c=n(18893),g=n(72771),k=n(82187),s=n.n(k),O=n(28640),P=n(75271),Z=n(53649),nn=n.n(Z),V=n(30764),cn,en=(0,V.Z)(cn||(cn=nn()([`
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
`])),function(dn){return dn.sparkPrefix},function(dn){return dn.antPrefix},function(dn){return dn.antPrefix},function(dn){return dn.antPrefix},function(dn){return dn.antPrefix},function(dn){return dn.antPrefix},function(dn){return dn.antPrefix},function(dn){return dn.antPrefix},function(dn){return dn.antPrefix},function(dn){return dn.antPrefix},function(dn){return dn.antPrefix}),X=n(52676),$={javascript:[(0,m.eJ)()],jsx:[(0,m.eJ)()],python:[(0,o.Vs)()],json:[(0,D.AV)()],java:[(0,p.C)()],yaml:[(0,h.rV)()],php:[(0,x.h)()],go:[(0,w.go)()],csharp:[(0,R.N)()],css:[(0,N.iv)()],html:[(0,A.dy)()],curl:[],markdown:[(0,d.JH)()]},rn={javascript:[(0,f.Q2)()],json:[(0,f.Q2)(),(0,f.ir)((0,D.ap)())]},vn=function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"{}",Tn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,bn=F;try{bn=JSON.stringify(JSON.parse(F),null,Tn)}catch(un){}return bn},mn=function(F){var Tn,bn=(0,H.getCommonConfig)(),un=P.useContext(E.ZP.ConfigContext),Pn=((Tn=un.theme)===null||Tn===void 0?void 0:Tn.algorithm)===g.Z.darkAlgorithm,hn=bn.sparkPrefix,q=en(),G=(0,P.useMemo)(function(){return F.theme===void 0?Pn?r.Pc:r.Zp:F.theme==="dark"?r.Pc:r.Zp},[Pn,F.theme]),on=typeof F.language=="string"?[].concat(M()($[F.language]||[]),M()(F.value&&F.language in rn?rn[F.language]:[])):F.language.reduce(function(Dn,yn){return[].concat(M()(Dn),[$[yn]])},[]),sn=(0,X.jsx)("div",{className:s()("".concat(hn,"-code-block"),F.className),children:(0,X.jsx)(c.ZP,l()({extensions:on,value:F.language==="json"?vn(F.value||""):F.value||"",theme:G},(0,O.Z)(F,["language","theme","extensions","value"])))});if(F.theme!==void 0){var En=F.theme==="dark"?B.bailianDarkTheme:B.bailianTheme;return(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(E.ZP,l()(l()({},En),{},{children:[(0,X.jsx)(q,{}),sn]}))})}return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(q,{}),sn]})},Sn=mn},94684:function(pn,Q,n){n.d(Q,{Z:function(){return A}});var y=n(26068),l=n.n(y),K=n(24198),M=n(53649),H=n.n(M),E=n(30764),B,R=(0,E.Z)(B||(B=H()([`
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
`])),function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix}),N=n(52676),w=function(m){var D=R();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(D,{}),(0,N.jsx)(K.Z,l()({},m))]})},A=w},61406:function(pn,Q,n){n.d(Q,{Z:function(){return r}});var y=n(26068),l=n.n(y),K=n(82092),M=n.n(K),H=n(48305),E=n.n(H),B=n(60213),R=n(3999),N=n(16879),w=n(82187),A=n.n(w),p=n(75271),m=n(53649),D=n.n(m),d=n(30764),x,o=(0,d.Z)(x||(x=D()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix}),h=n(52676),f=function(g){var k,s,O,P,Z,nn,V=g.collapsedHeight,cn=g.expandedHeight,en=g.title,X=en===void 0?"":en,$=g.expandOnPanelClick,rn=g.extra,vn=g.children,mn=g.defaultExpanded,Sn=(0,p.useState)(mn),dn=E()(Sn,2),F=dn[0],Tn=dn[1],bn=(0,p.useState)(!0),un=E()(bn,2),Pn=un[0],hn=un[1],q=(0,p.useState)(V),G=E()(q,2),on=G[0],sn=G[1],En=(0,p.useRef)(null),Dn=(0,B.getCommonConfig)(),yn=Dn.sparkPrefix,I=Dn.antPrefix,Mn=o();(0,p.useEffect)(function(){En.current&&sn(F&&cn?cn:F?En.current.scrollHeight:V)},[F,V,cn,vn]);var Ln=function(Bn){Bn.stopPropagation(),Bn.preventDefault(),Tn(function(wn){return!wn})},On=function(Bn){Bn.stopPropagation(),Bn.preventDefault(),F||Tn(!0)},Cn=function(){hn(!0)},jn=function(){hn(!0)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Mn,{}),(0,h.jsxs)("div",{className:A()("".concat(yn,"-collapse-panel"),{collapsible:!F&&$},(k=g.classNames)===null||k===void 0?void 0:k.wrapper),style:(s=g.styles)===null||s===void 0?void 0:s.wrapper,onClick:$?On:void 0,onMouseEnter:$?Cn:void 0,onMouseLeave:$?jn:void 0,children:[(0,h.jsxs)("div",{className:A()("".concat(yn,"-collapse-panel-header"),(O=g.classNames)===null||O===void 0?void 0:O.header),style:(P=g.styles)===null||P===void 0?void 0:P.header,onClick:Ln,children:[(0,h.jsxs)("span",{className:"".concat(yn,"-collapse-panel-title"),children:[X,(0,h.jsxs)("div",{className:"".concat(yn,"-collapse-panel-icon-wrapper"),children:[!F&&Pn&&$&&(0,h.jsx)(R.Z,{style:{fontSize:"18px"}}),F&&Pn&&$&&(0,h.jsx)(N.Z,{style:{fontSize:"18px"}})]})]}),rn&&(0,h.jsx)("div",{className:"".concat(yn,"-collapse-panel-extra"),onClick:function(Bn){Bn.stopPropagation(),Bn.preventDefault()},children:rn})]}),(0,h.jsxs)("div",{className:A()("".concat(yn,"-collapse-panel-content"),M()({},"".concat(yn,"-collapse-panel-expanded"),F),(Z=g.classNames)===null||Z===void 0?void 0:Z.content),style:l()({height:on},(nn=g.styles)===null||nn===void 0?void 0:nn.content),children:[(0,h.jsx)("div",{ref:En,className:"".concat("".concat(yn,"-collapse-panel-contentWrapper")," ",F&&cn?"scrollable":""),children:vn}),!F&&(0,h.jsx)("div",{className:"".concat(yn,"-collapse-panel-mask")})]})]})]})},r=f},84360:function(pn,Q,n){n.d(Q,{Z:function(){return k}});var y=n(26068),l=n.n(y),K=n(67825),M=n.n(K),H=n(60213),E=n(57216),B=n(72771),R=n(86137),N=n(87133),w=n(82187),A=n.n(w),p=n(75271),m=n(53649),D=n.n(m),d=n(30764),x,o=(0,d.Z)(x||(x=D()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),h=n(52676),f=["className","popupClassName"],r=["className","popupClassName"],c=function(O){var P=O.className,Z=O.popupClassName,nn=M()(O,f),V=B.Z.useToken(),cn=V.token,en=(0,H.getCommonConfig)(),X=en.sparkPrefix,$=o();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)($,{}),(0,h.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:cn.colorPrimary,paddingInline:8}}},children:(0,h.jsx)(N.default,l()({suffixIcon:(0,h.jsx)(E.Z,{style:{fontSize:"20px"}}),className:A()("".concat(X,"-picker"),P),popupClassName:A()("".concat(X,"-picker-dropdown"),Z)},nn))})]})},g=function(O){var P=O.className,Z=O.popupClassName,nn=M()(O,r),V=B.Z.useToken(),cn=V.token,en=(0,H.getCommonConfig)(),X=en.sparkPrefix,$=o();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)($,{}),(0,h.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:cn.colorPrimary,paddingInline:8}}},children:(0,h.jsx)(N.default.RangePicker,l()({suffixIcon:(0,h.jsx)(E.Z,{style:{fontSize:"20px"}}),className:A()("".concat(X,"-picker"),P),popupClassName:A()("".concat(X,"-picker-dropdown"),Z),popupStyle:{padding:0}},nn))})]})};c.RangePicker=g;var k=c},62518:function(pn,Q,n){n.d(Q,{Z:function(){return r}});var y=n(82092),l=n.n(y),K=n(26068),M=n.n(K),H=n(67825),E=n.n(H),B=n(60213),R=n(72771),N=n(3307),w=n(82187),A=n.n(w),p=n(53649),m=n.n(p),D=n(30764),d,x=(0,D.Z)(d||(d=m()([`
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
`])),function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),o=n(52676),h=["className","layout","colon","style"],f=function(g){var k,s,O=x(),P=g.className,Z=g.layout,nn=g.colon,V=nn===void 0?!1:nn,cn=g.style,en=E()(g,h),X=(0,B.getCommonConfig)(),$=X.antPrefix,rn=R.Z.useToken(),vn=rn.token;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(O,{}),(0,o.jsx)(N.Z,M()({className:A()(P,Z==="vertical"&&"".concat($,"-descriptions-vertical")),layout:Z,colon:V,style:M()(l()(l()({},"--".concat($,"-descriptions-vertical-label-padding-bottom"),"".concat((k=vn.Descriptions.verticalLabelPaddingBottom)!==null&&k!==void 0?k:4,"px")),"--".concat($,"-descriptions-vertical-content-padding-bottom"),"".concat((s=vn.Descriptions.verticalContentPaddingBottom)!==null&&s!==void 0?s:24,"px")),cn)},en))]})},r=f},38356:function(pn,Q,n){n.d(Q,{Z:function(){return D}});var y=n(26068),l=n.n(y),K=n(60213),M=n(68278),H=n(44201),E=n(75271),B=n(53649),R=n.n(B),N=n(30764),w,A=(0,N.Z)(w||(w=R()([`
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
`])),function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),p=n(52676),m=function(x){var o,h,f=(0,K.getCommonConfig)(),r=f.antPrefix,c=(0,E.useMemo)(function(){var k;if(!((k=x.menu)!==null&&k!==void 0&&k.selectable)||!x.menu){var s;return((s=x.menu)===null||s===void 0?void 0:s.items)||[]}return x.menu.items.map(function(O){var P={},Z=O.label;return Z&&(P.label=(0,p.jsxs)("div",{className:"".concat(r,"-dropdown-check-wrapper"),children:[Z,(0,p.jsx)("span",{className:"".concat(r,"-dropdown-check-icon"),children:(0,p.jsx)(M.Z,{})})]})),l()(l()({},O),P)})},[(o=x.menu)===null||o===void 0?void 0:o.items,(h=x.menu)===null||h===void 0?void 0:h.selectable]),g=A();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g,{}),(0,p.jsx)(H.Z,l()(l()({},x),{},{menu:l()(l()({},x.menu),{},{items:c}),overlayStyle:l()({},x.overlayStyle)}))]})},D=m},49327:function(pn,Q,n){n.d(Q,{Z:function(){return X}});var y=n(26068),l=n.n(y),K=n(60213),M=n(90264),H=n(75271),E=n(60823),B=n(53649),R=n.n(B),N=n(30764),w,A=(0,N.Z)(w||(w=R()([`
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
`])),function($){return $.sparkPrefix},function($){return $.sparkPrefix},function($){return $.sparkPrefix},function($){return $.sparkPrefix},function($){return $.sparkPrefix},function($){return $.sparkPrefix},function($){return $.antPrefix},function($){return $.sparkPrefix},function($){return $.antPrefix}),p=n(90228),m=n.n(p),D=n(87999),d=n.n(D),x=n(48305),o=n.n(x),h=n(19215),f=n(52676),r="http://www.w3.org/2000/svg",c="http://www.w3.org/1999/xlink",g=new Map,k=null;typeof document!="undefined"&&(k=document.querySelector("#empty-svg-container"));function s($){return $.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function O($){return btoa($).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"")}function P(){if(k||typeof document=="undefined")return k;var $=document.createElement("div");return $.innerHTML="<svg></svg>",k=$.querySelector("svg"),k.id="empty-svg-container",k.setAttribute("aria-hidden","true"),k.style.position="absolute",k.style.width="0",k.style.height="0",k.style.overflow="hidden",document.body.insertBefore(k,document.body.firstChild),k}function Z($){if(!k)return null;var rn=document.getElementById($),vn=rn||null;return vn||(vn=document.createElementNS(r,"symbol"),vn.id=$,vn.setAttribute("data-loaded","false"),k.appendChild(vn),vn)}function nn($){var rn=(0,h.ZP)(),vn=o()(rn,5),mn=vn[4],Sn=$.svgUrl,dn=$.tokenMap,F=dn===void 0?{}:dn,Tn=$.className,bn=$.size,un=Sn.includes(".svg"),Pn=(0,H.useState)(""),hn=o()(Pn,2),q=hn[0],G=hn[1];return(0,H.useEffect)(function(){P()},[]),(0,H.useEffect)(function(){k&&mn!==null&&mn!==void 0&&mn.key&&(k.classList.forEach(function(on){return k.classList.remove(on)}),k.classList.add(mn.key))},[mn==null?void 0:mn.key]),(0,H.useEffect)(function(){if(un&&(P(),!!k)){var on=O(Sn);G('<svg width="100%" height="100%"><use href="#'.concat(on,'" xlink:href="#').concat(on,'"></use></svg>'));var sn=Z(on);if(sn&&sn.getAttribute("data-loaded")!=="true"&&!g.has(on)){var En=d()(m()().mark(function Dn(){var yn,I,Mn,Ln,On,Cn;return m()().wrap(function(fn){for(;;)switch(fn.prev=fn.next){case 0:return fn.prev=0,fn.next=3,fetch(Sn);case 3:if(yn=fn.sent,yn.ok){fn.next=6;break}throw new Error("HTTP ".concat(yn.status));case 6:return fn.next=8,yn.text();case 8:I=fn.sent,Mn=I,Object.keys(F).forEach(function(Bn){Mn=Mn.replace(new RegExp(s(Bn),"g"),F[Bn])}),Ln=Mn.match(/viewBox="([^"]*)"/),On=Ln?Ln[1]:"",Cn=Mn.replace(/<svg[^>]*>/,""),Cn=Cn.replace(/<\/svg>/,""),On&&sn.setAttribute("viewBox",On),sn.innerHTML=Cn,sn.setAttribute("data-loaded","true"),sn.removeAttribute("data-error"),fn.next=27;break;case 21:fn.prev=21,fn.t0=fn.catch(0),sn.setAttribute("data-loaded","false"),sn.setAttribute("data-error","true"),sn.innerHTML="",console.warn("[SparkDesign][Empty][Illustrate] load svg failed:",Sn,fn.t0);case 27:case"end":return fn.stop()}},Dn,null,[[0,21]])}))().finally(function(){g.delete(on)});g.set(on,En)}}},[Sn]),un?(0,f.jsx)("div",{className:Tn,dangerouslySetInnerHTML:{__html:q},style:{width:bn,height:bn}}):(0,f.jsx)("img",{src:Sn,className:Tn,style:{width:bn,height:bn}})}var V={url:"https://gw.alicdn.com/imgextra/i3/O1CN01r3f3Si24iFTRz9Bho_!!6000000007424-55-tps-320-320.svg",tokenMap:{"#CDD0DC":"color-border"}},cn={noData:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01mWN5tE1MAxb2z7LwA_!!6000000001395-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#BCB5FF":"color-primary-border-hover","#FFFFFF":"color-bg-base","#615CED":"color-primary","#1ACDD0DC":"color-fill-quaternary","#CDD0DC":"color-border"}},networkError:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01su6GHG1RupL5K5TOQ_!!6000000002172-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},404:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01GE0jXZ1xpqjvMjCZh_!!6000000006493-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#26CDD0DC":"color-fill-tertiary","#CDD0DC":"color-border","#F3F0FF":"color-primary-bg","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},arrears:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01xN8uYv1Dz2MLvrFAF_!!6000000000286-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#F3F0FF":"color-primary-bg","#615CED":"color-primary"}},desktopOnly:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01ZzNku41rshVhRVh9x_!!6000000005687-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},noAudio:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01fTQ6vi1GXxnIrmizf_!!6000000000633-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#615CED":"color-primary","#E6E8EE":"color-border-secondary"}},noImage:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01zQAH9A1oJUD9XDtmi_!!6000000005204-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noVideo:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01kqss5i1JuoOrJ8fNV_!!6000000001089-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noAccess:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01RwpRz91oGHREFlmdY_!!6000000005197-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}},error:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01TlQR4c1L3nn4DkG2z_!!6000000001244-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noChat:{url:"https://img.alicdn.com/imgextra/i3/O1CN014KyRst1w9QT51V8Yx_!!6000000006265-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#615CED":"color-primary","#CDD0DC":"color-border"}},noModel:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01BSPmLi1iaXGByjbne_!!6000000004429-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#5CCDD0DC":"color-fill","#615CED":"color-primary"}},noApp:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01stSIP31fzmEtpppWc_!!6000000004078-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#33CDD0DC":"color-fill-secondary","#615CED":"color-primary"}},success:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01sGzZ5B1Bx5RQAjUe5_!!6000000000011-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#5BB98B":"color-success","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},failed:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01Fd1Gmx1QNYxQ8hj0H_!!6000000001964-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FF7875":"color-error-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},inProgress:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01w2RXic1LADKqVxH56_!!6000000001258-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#9189FA":"color-primary-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},stayTuned:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01W2Kbyc26dmqmatyoB_!!6000000007685-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}}},en=function(rn){var vn=rn.imageStyle,mn=rn.title,Sn=rn.description,dn=Sn===void 0?"No Data":Sn,F=rn.children,Tn=rn.texture,bn=Tn===void 0?!0:Tn,un=rn.size,Pn=un===void 0?320:un,hn=rn.autoFit,q=hn===void 0?!0:hn,G=rn.okText,on=rn.okType,sn=on===void 0?"primary":on,En=rn.okButtonProps,Dn=rn.onOk,yn=rn.type||"noData",I=(0,K.getCommonConfig)(),Mn=I.sparkPrefix,Ln=I.isDarkMode,On=I.antPrefix,Cn=rn.image||cn[yn].url,jn=(0,H.useMemo)(function(){var $n,zn=l()({},($n=cn[yn])===null||$n===void 0?void 0:$n.tokenMap);return zn&&Object.keys(zn).forEach(function(fe){zn[fe]="var(--".concat(On,"-").concat(zn[fe],")")}),zn},[yn]),fn=(0,H.useMemo)(function(){var $n=l()({},V.tokenMap);return Object.keys($n).forEach(function(zn){$n[zn]="var(--".concat(On,"-").concat($n[zn],")")}),$n},[Ln]),Bn=A(),wn=typeof Pn=="string"?parseFloat(Pn.replace(/px/i,"")):Pn!=null?Pn:0,Pe=q?{maxWidth:"100%",aspectRatio:"1 / 1",width:Pn,height:"auto"}:{width:Pn,height:Pn};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Bn,{}),(0,f.jsxs)("div",{className:"".concat(Mn,"-empty ").concat(rn.className||""),style:l()(l()({},Pe),vn),children:[bn&&(0,f.jsx)(nn,{size:q?"100%":Pn,svgUrl:V.url,tokenMap:fn,className:"".concat(Mn,"-empty-texture")}),(0,f.jsx)(nn,{size:q?"100%":Pn,svgUrl:Cn,tokenMap:jn,className:"".concat(Mn,"-empty-image")}),(0,f.jsxs)(M.Z,{vertical:!0,align:"center",style:{marginTop:"52.5%"},children:[mn&&(0,f.jsx)("div",{className:"".concat(Mn,"-empty-title"),style:{marginBottom:dn?.025*wn:0},children:mn}),dn&&(0,f.jsx)("div",{className:"".concat(Mn,"-empty-description"),children:dn}),!!G&&(0,f.jsx)("div",{style:{marginTop:.05*wn},children:(0,f.jsx)(E.Z,l()(l()({type:sn,onClick:Dn},En),{},{children:G}))}),!!F&&(0,f.jsx)("div",{style:{marginTop:.05*wn},children:F})]})]})]})},X=en},90895:function(pn,Q,n){n.d(Q,{Z:function(){return P}});var y=n(31759),l=n.n(y),K=n(26068),M=n.n(K),H=n(67825),E=n.n(H),B=n(60213),R=n(62910),N=n(48290),w=n(85618),A=n(82187),p=n.n(A),m=n(75271),D=n(53649),d=n.n(D),x=n(30764),o,h=(0,x.Z)(o||(o=d()([`
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
`])),function(Z){return Z.sparkPrefix},function(Z){return Z.sparkPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.sparkPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix}),f=n(52676),r=["labelMarginRight"],c=["tooltip"],g=(0,m.forwardRef)(function(Z,nn){var V=Z.labelMarginRight,cn=V===void 0?void 0:V,en=E()(Z,r),X=(0,m.useRef)(null),$=(0,B.getCommonConfig)(),rn=$.sparkPrefix,vn=h();return(0,m.useImperativeHandle)(nn,function(){return X.current}),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(vn,{}),(0,f.jsx)(N.Z,M()(M()({},en),{},{className:p()(Z.className,"".concat(rn,"-form"),cn==="small"&&"".concat(rn,"-form-label-margin-small")),ref:X,requiredMark:function(Sn,dn){return(0,f.jsxs)(f.Fragment,{children:[Sn,dn.required&&(0,f.jsx)("span",{className:"".concat(rn,"-required-mark"),children:"*"})]})}}))]})}),k=function(nn){var V=nn.tooltip,cn=E()(nn,c),en=(0,f.jsx)(R.Z,{});function X(){if(V){var $=l()(V)==="object"&&!m.isValidElement(V)?M()(M()({},V),{},{icon:V.icon||en}):{title:V,icon:en};return $}}return(0,f.jsx)(N.Z.Item,M()(M()({},cn),{},{tooltip:X(),labelCol:nn.labelCol||(nn.layout==="vertical"?{flex:"unset"}:void 0)}))},s=k;s.useStatus=w.Z.useStatus;var O=g;O.Item=s,O.List=N.Z.List,O.ErrorList=N.Z.ErrorList,O.Provider=N.Z.Provider,O.useForm=N.Z.useForm,O.useFormInstance=N.Z.useFormInstance,O.useWatch=N.Z.useWatch;var P=O},70344:function(pn,Q,n){n.d(Q,{Z:function(){return x}});var y=n(26068),l=n.n(y),K=n(40965),M=n(60213),H=n(5045),E=n(92931),B=n(75271),R=n(53649),N=n.n(R),w=n(30764),A,p=(0,w.Z)(A||(A=N()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),m=n(52676),D=function(h){var f=p(),r=(0,M.getCommonConfig)(),c=r.antPrefix,g=(0,B.useMemo)(function(){var k={transitionName:""},s=h.preview;return s===!1?!1:s===!0?k:l()(l()({mask:(0,m.jsxs)("div",{className:"".concat(c,"-image-mask-info"),children:[(0,m.jsx)(H.Z,{className:"".concat(c,"-image-mask-info-icon")}),(0,m.jsx)("span",{className:"".concat(c,"-image-mask-info-text"),children:K.Z.get({id:"components.commonComponents.Image.Preview",dm:"\u9884\u89C8"})})]})},s),k)},[h.preview]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f,{}),(0,m.jsx)(E.Z,l()({preview:g},h))]})},d=D;d.PreviewGroup=E.Z.PreviewGroup;var x=d},38734:function(pn,Q,n){n.d(Q,{Z:function(){return c}});var y=n(26068),l=n.n(y),K=n(82092),M=n.n(K),H=n(67825),E=n.n(H),B=n(60213),R=n(92108),N=n(82187),w=n.n(N),A=n(75271),p=n(53649),m=n.n(p),D=n(30764),d,x=(0,D.Z)(d||(d=m()([`
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
`])),function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),o=n(52676),h=["shape"],f=A.forwardRef(function(g,k){var s=g.shape,O=s===void 0?"default":s,P=E()(g,h),Z=(0,B.getCommonConfig)(),nn=Z.antPrefix,V=x();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(V,{}),(0,o.jsx)(R.Z,l()(l()({},P),{},{className:w()(g.className,M()({},"".concat(nn,"-input-round"),O==="round")),ref:k}))]})}),r=A.forwardRef(function(g,k){var s=(0,B.getCommonConfig)(),O=s.antPrefix,P=x();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P,{}),(0,o.jsx)(R.Z.TextArea,l()(l()({},g),{},{className:w()("".concat(O,"-text-area"),g.className),ref:k}))]})});Object.assign(f,{TextArea:r,Search:R.Z.Search,Password:R.Z.Password,OTP:R.Z.OTP});var c=f},3983:function(pn,Q,n){n.d(Q,{Z:function(){return r}});var y=n(26068),l=n.n(y),K=n(82092),M=n.n(K),H=n(67825),E=n.n(H),B=n(60213),R=n(6002),N=n(91301),w=n(82187),A=n.n(w),p=n(53649),m=n.n(p),D=n(30764),d,x=(0,D.Z)(d||(d=m()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),o=n(52676),h=["showDivider","closable"],f=function(g){var k=x(),s=(0,B.getCommonConfig)(),O=s.sparkPrefix,P=g.showDivider,Z=P===void 0?!0:P,nn=g.closable,V=nn===void 0?!0:nn,cn=E()(g,h),en=function(vn){return g.info?(0,o.jsxs)("div",{className:"".concat(O,"-modal-footer-wrapper"),children:[(0,o.jsx)("span",{className:"".concat(O,"-modal-footer-info"),children:g.info}),(0,o.jsx)("div",{className:"".concat(O,"-modal-footer-origin-node"),children:vn})]}):vn},X=V?g.closeIcon||(0,o.jsx)(R.Z,{className:"".concat(O,"-modal-title-close"),onClick:function(vn){var mn;(mn=g.onCancel)===null||mn===void 0||mn.call(g,vn)}}):null,$=g.footer===void 0?en:g.footer;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{}),(0,o.jsx)(N.Z,l()(l()({},cn),{},{closeIcon:null,title:(0,o.jsxs)("div",{className:"".concat(O,"-modal-title-wrapper"),children:[(0,o.jsx)("div",{className:"".concat(O,"-modal-title"),children:g.title}),X]}),wrapClassName:A()("".concat(O,"-modal"),M()({},"".concat(O,"-show-divider"),Z),g.wrapClassName,"animate-in"),footer:$,transitionName:""}))]})};f.useModal=N.Z.useModal,f.success=N.Z.success,f.error=N.Z.error,f.warning=N.Z.warning,f.info=N.Z.info,f.confirm=N.Z.confirm,f.SMALL_WIDTH=640,f.MEDIUM_WIDTH=800,f.LARGE_WIDTH=960;var r=f},94361:function(pn,Q,n){var y=n(48305),l=n.n(y),K=n(26068),M=n.n(K),H=n(60213),E=n(72566),B=n(68811),R=n(20855),N=n(18908),w=n(3749),A=n(52676),p=["success","warning","error","info"];function m(d,x){if(d==="success")return(0,A.jsx)(E.Z,{style:{color:"var(--".concat(x,"-color-success)"),fontSize:24}});if(d==="warning")return(0,A.jsx)(B.Z,{style:{color:"var(--".concat(x,"-color-warning)"),fontSize:24}});if(d==="info")return(0,A.jsx)(R.Z,{style:{color:"var(--".concat(x,"-color-info)"),fontSize:24}});if(d==="error")return(0,A.jsx)(N.Z,{style:{color:"var(--".concat(x,"-color-error)"),fontSize:24}})}var D={};D.destroy=w.ZP.destroy,D.open=function(d){var x=(0,H.getCommonConfig)(),o=x.sparkPrefix,h="".concat(o,"-notification");d.className&&(h+=" ".concat(d.className)),w.ZP.open(M()(M()({},d),{},{className:h}))},p.forEach(function(d){D[d]=function(x){var o=(0,H.getCommonConfig)(),h=o.sparkPrefix,f=o.antPrefix,r="".concat(h,"-notification");x.className&&(r+=" ".concat(x.className)),w.ZP[d](M()(M()({},x),{},{className:r,icon:m(d,f)}))}}),D.useNotification=function(d){var x=(0,H.getCommonConfig)(),o=x.sparkPrefix,h=x.antPrefix,f="".concat(o,"-notification"),r=w.ZP.useNotification(d),c=l()(r,2),g=c[0],k=c[1],s={};return p.forEach(function(O){s[O]=function(P){return g[O](M()(M()({},P),{},{className:f,icon:m(O,h)}))}}),s.open=function(O){w.ZP.open(M()(M()({},O),{},{className:f}))},s.destroy=g.destroy,[s,k]},Q.Z=D},47525:function(pn,Q,n){n.d(Q,{X:function(){return H}});var y=n(53649),l=n.n(y),K=n(30764),M,H=(0,K.Z)(M||(M=l()([`
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
`])),function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix})},85525:function(pn,Q,n){var y=n(26068),l=n.n(y),K=n(31759),M=n.n(K),H=n(67825),E=n.n(H),B=n(60213),R=n(40965),N=n(86319),w=n(16979),A=n(34232),p=n(90264),m=n(89550),D=n(82187),d=n.n(D),x=n(47525),o=n(52676),h=["hideSwitchButton","className"],f=function(){var c=R.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"}),g=R.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"});return{options:[{label:"10 ".concat(c," / ").concat(g),value:10},{label:"20 ".concat(c," / ").concat(g),value:20},{label:"50 ".concat(c," / ").concat(g),value:50},{label:"100 ".concat(c," / ").concat(g),value:100}]}};Q.Z=function(r){var c=r.hideSwitchButton,g=c===void 0?!1:c,k=r.className,s=E()(r,h),O=(0,B.getCommonConfig)(),P=O.sparkPrefix,Z=(0,x.X)(),nn=function(){var X=function(rn,vn,mn){return vn==="jump-prev"||vn==="jump-next"?(0,o.jsx)(N.Z,{className:"".concat(P,"-jump-next-icon")}):g||r.itemRender?mn:vn==="prev"?(0,o.jsx)("a",{children:(0,o.jsxs)(p.Z,{gap:8,children:[(0,o.jsx)(w.Z,{})," ",(0,o.jsx)("span",{children:R.Z.get({id:"components.commonComponents.Pagination.PreviousPage",dm:"\u4E0A\u4E00\u9875"})})]})}):vn==="next"?(0,o.jsx)("a",{children:(0,o.jsxs)(p.Z,{gap:8,children:[(0,o.jsx)("span",{children:R.Z.get({id:"components.commonComponents.Pagination.NextPage",dm:"\u4E0B\u4E00\u9875"})})," ",(0,o.jsx)(A.Z,{})]})}):mn};return X},V;s.showSizeChanger!==null&&s.showSizeChanger!==void 0?V=s.showSizeChanger:V=s.total&&s.total>50;var cn=function(){return r.showSizeChanger===!0?f():r.showSizeChanger===!1?!1:M()(r.showSizeChanger)==="object"&&r.showSizeChanger?r.showSizeChanger:s.total&&s.total>50?f():!1};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Z,{}),(0,o.jsx)(m.Z,l()(l()({itemRender:nn()},s),{},{showSizeChanger:cn(),className:d()("".concat(P,"-pagination"),k)}))]})}},30959:function(pn,Q,n){var y=n(26068),l=n.n(y),K=n(67825),M=n.n(K),H=n(60213),E=n(88602),B=n(62910),R=n(99090),N=n(58911),w=n(95371),A=n(75271),p=n(52676),m=["icon","type","okButtonProps"],D=A.forwardRef(function(d,x){var o=d.icon,h=d.type,f=h===void 0?"confirm":h,r=d.okButtonProps,c=M()(d,m),g=(0,H.getCommonConfig)(),k=g.antPrefix,s=function(){return o||(f==="confirm"?(0,p.jsx)(E.Z,{style:{color:"var(--".concat(k,"-color-warning)")}}):f==="info"?(0,p.jsx)(B.Z,{style:{color:"var(--".concat(k,"-color-info)")}}):f==="warning"?(0,p.jsx)(E.Z,{style:{color:"var(--".concat(k,"-color-warning)")}}):f==="error"?(0,p.jsx)(R.Z,{style:{color:"var(--".concat(k,"-color-error)")}}):f==="success"?(0,p.jsx)(N.Z,{style:{color:"var(--".concat(k,"-color-success)")}}):(0,p.jsx)(E.Z,{style:{color:"var(--".concat(k,"-color-warning)")}}))},O=function(){var Z={};return["warning","error"].includes(f)&&(Z.danger=!0),l()(l()({},Z),r||{})};return(0,p.jsx)(w.Z,l()(l()({},c),{},{ref:x,icon:s(),okButtonProps:O()}))});Q.Z=D},86298:function(pn,Q,n){var y=n(26068),l=n.n(y),K=n(60213),M=n(65482),H=n(4369),E=n(75271),B=n(52676),R=E.forwardRef(function(N,w){var A=N.content===""||N.content===void 0||N.content===null,p=N.title===""||N.title===void 0||N.title===null,m=N.open!==void 0&&N.open!==null?N.open:A&&p?!1:void 0,D=(0,K.getCommonConfig)(),d=D.antPrefix;return(0,B.jsx)(H.Z,l()(l()({},N),{},{arrow:N.arrow||!1,open:m,ref:w,getPopupContainer:N.getPopupContainer||function(x){return(0,M.Q)(x,".".concat(d,"-app"))}}))});Q.Z=R},3074:function(pn,Q,n){n.d(Q,{Z:function(){return Pn}});var y=n(82092),l=n.n(y),K=n(15558),M=n.n(K),H=n(48305),E=n.n(H),B=n(53649),R=n.n(B),N=n(24884),w=n(99362),A=n(86112),p=n(18893),m=n(86137),D=n(72771),d=n(87571),x=n(82187),o=n.n(x),h=n(75271),f=n(25298),r=n.n(f),c=n(17069),g=n.n(c),k=n(21742),s=n.n(k),O=n(83136),P=n.n(O),Z=n(25451),nn=function(hn){s()(G,hn);var q=P()(G);function G(on){var sn;return r()(this,G),sn=q.call(this),sn.name=on,sn}return g()(G,[{key:"eq",value:function(sn){return sn.name===this.name}},{key:"toDOM",value:function(){var sn=document.createElement("span");return sn.setAttribute("aria-hidden","true"),sn.className="cm-prompt-var",sn.textContent="${".concat(this.name,"}"),sn}},{key:"ignoreEvent",value:function(){return!1}}]),G}(Z.l9),V=new Z.Y1({regexp:/\$\{([\w\u4e00-\u9fa5]+)\}/g,decoration:function(q){return Z.p.replace({widget:new nn(q[1])})}}),cn=Z.lg.fromClass(function(){function hn(q){r()(this,hn),l()(this,"placeholders",void 0),this.placeholders=V.createDeco(q)}return g()(hn,[{key:"update",value:function(G){this.placeholders=V.updateDeco(G,this.placeholders)}}]),hn}(),{decorations:function(q){return q.placeholders},provide:function(q){return Z.tk.atomicRanges.of(function(G){var on;return((on=G.plugin(q))===null||on===void 0?void 0:on.placeholders)||Z.p.none})}}),en=[cn],X=n(26068),$=n.n(X),rn=n(96594);function vn(){var hn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],q=arguments.length>1?arguments[1]:void 0,G=q.onCreate,on=q.createBtnText;return(0,rn.ys)({override:[function(sn){var En,Dn=sn.matchBefore(/\/(\w+)?/);return!Dn||Dn&&Dn.from===Dn.to&&!sn.explicit?null:{from:(En=Dn==null?void 0:Dn.from)!==null&&En!==void 0?En:0,options:(G?[].concat(M()(hn),[{label:"/NEW_VAR",boost:-99}]):hn).map(function(yn){return $()($()({},yn),{},{displayLabel:yn.label==="/NEW_VAR"?on:yn.label.slice(1),apply:function(Mn,Ln,On,Cn){if(Ln.label==="/NEW_VAR")return Mn.dispatch({changes:{from:On,to:Cn,insert:""}}),G==null?void 0:G();var jn=Ln.label.slice(1),fn="${".concat(jn,"}");Mn.dispatch({changes:{from:On,to:Cn,insert:fn}})}})})}}]})}var mn=n(52676),Sn,dn,F=(0,d.kc)(function(hn){var q=hn.css,G=hn.token;return{onCreate:q(Sn||(Sn=R()([`
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
  `])),G.colorBorderSecondary,G.colorBgContainer),cm:q(dn||(dn=R()([`
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
  `])),G.colorTextSecondary,G.colorBlue,G.colorPurple,G.colorPurpleBg,G.colorBgContainer,G.colorText,G.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:G.colorBgBase,border:"1px solid ".concat(G.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:G.colorTextTertiary,backgroundColor:G.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),Tn={markdown:[(0,w.JH)()]},bn=[],un=function(q){var G=F(),on=G.styles,sn=q.variables||bn,En=(0,h.useState)(!1),Dn=E()(En,2),yn=Dn[0],I=Dn[1],Mn=q.onCreate,Ln=h.useContext(m.ZP.ConfigContext),On=Ln.theme.algorithm===D.Z.darkAlgorithm,Cn=q.createBtnText||"+ \u65B0\u589E\u53D8\u91CF",jn=(0,h.useMemo)(function(){return On?A.Pc:A.Zp},[On]),fn=(0,h.useMemo)(function(){return[].concat(M()(Tn.markdown),M()(en),[vn(M()(sn).map(function(wn){return{label:"/".concat(wn.code),info:wn.label}})||[],{onCreate:Mn,createBtnText:Cn})])},[sn]);(0,h.useEffect)(function(){return I(!0),function(){I(!1)}},[]);var Bn=h.useMemo(function(){return q.tipsText===!1?(0,mn.jsx)("div",{className:on.tips}):q.tipsText?q.tipsText:(0,mn.jsxs)("div",{className:on.tips,children:['\u8F93\u5165/"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,mn.jsx)(N.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[q.tipsText]);return yn?(0,mn.jsxs)("div",{className:on.root,children:[(0,mn.jsx)(p.ZP,{className:o()(on.cm,l()({},on.onCreate,Mn)),extensions:fn,value:q.value,theme:jn,lang:"markdown",onChange:q.onChange,basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1}},jn),(0,mn.jsxs)("div",{className:on.footer,children:[Bn,q.maxLength?(0,mn.jsxs)("div",{children:[q.value.length,"/",q.maxLength]}):null]})]}):null},Pn=(0,h.memo)(un)},81483:function(pn,Q,n){var y=n(26068),l=n.n(y),K=n(67825),M=n.n(K),H=n(49327),E=n(52676),B=["texture"];Q.Z=function(R){var N=R.texture,w=N===void 0?!1:N,A=M()(R,B);return(0,E.jsx)(H.Z,l()(l()({},A),{},{texture:w}))}},77652:function(pn,Q,n){n.d(Q,{J:function(){return k},Z:function(){return O}});var y=n(26068),l=n.n(y),K=n(82092),M=n.n(K),H=n(60213),E=n(7441),B=n(82187),R=n.n(B),N=n(75271),w=n(53649),A=n.n(w),p=n(30764),m,D=(0,p.Z)(m||(m=A()([`
.`,"-slider.","-slider.",`-slider-no-marks {
  margin: 0;
}
`])),function(P){return P.antPrefix},function(P){return P.sparkPrefix},function(P){return P.sparkPrefix}),d=n(67825),x=n.n(d),o=n(32496),h,f=(0,p.Z)(h||(h=A()([`
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
`])),function(P){return P.sparkPrefix},function(P){return P.sparkPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix}),r=n(52676),c=["styles","classNames","sliderProps","inputNumberProps"];function g(P){var Z,nn,V=(0,H.getCommonConfig)(),cn=V.sparkPrefix;console.log("debug sparkPrefix in SliderSelector",cn);var en=P.styles,X=P.classNames,$=P.sliderProps,rn=P.inputNumberProps,vn=x()(P,c),mn=f(),Sn=P.marks||((Z=P.sliderProps)===null||Z===void 0?void 0:Z.marks)||null,dn=Sn||M()(M()({},P.min,P.min),P.max,P.max),F=Sn&&((nn=Object.keys(Sn))===null||nn===void 0?void 0:nn.length)>0,Tn=function(un){var Pn=typeof un=="string"?parseFloat(un):un;if(Pn===null||isNaN(Pn)){P.onChange(null);return}Pn<P.min?P.onChange(P.min):Pn>P.max?P.onChange(P.max):P.onChange(Pn)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(mn,{}),(0,r.jsxs)("div",{style:en==null?void 0:en.wrapper,className:R()("".concat(cn,"-slider-input"),M()({},"".concat(cn,"-slider-input-has-marks"),F),X==null?void 0:X.wrapper),onMouseUp:function(){var un;(un=P.onBlur)===null||un===void 0||un.call(P)},children:[(0,r.jsx)(k,l()(l()(l()({disabled:P.disabled,min:P.min,max:P.max,step:P.step,tooltip:{getPopupContainer:function(un){return un}}},vn),$),{},{marks:dn,style:l()(l()(l()({},en==null?void 0:en.slider),$==null?void 0:$.style),{},{width:"100%"}),className:R()(X==null?void 0:X.slider,$==null?void 0:$.className),onChange:Tn,value:P.value===null?void 0:P.value})),(0,r.jsx)(o.Z,l()(l()({controls:!1,step:P.step,min:P.min,max:P.max,disabled:P.disabled},rn),{},{onBlur:function(){var un;(un=P.onBlur)===null||un===void 0||un.call(P)},value:P.value,onChange:Tn,style:l()(l()({},en==null?void 0:en.inputNumber),rn==null?void 0:rn.style),className:R()(X==null?void 0:X.inputNumber,rn==null?void 0:rn.className)}))]})]})}var k=N.forwardRef(function(P,Z){var nn=(0,H.getCommonConfig)(),V=nn.sparkPrefix,cn=nn.antPrefix,en=D();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(en,{}),(0,r.jsx)(E.Z,l()(l()({},P),{},{className:R()("".concat(V,"-slider"),M()(M()({},"".concat(V,"-slider-no-marks"),!Object.keys(P.marks||{}).length),"".concat(cn,"-slider-reverse"),P.reverse),P.className),ref:Z}))]})}),s=k;Object.assign(s,{Input:g});var O=s},70076:function(pn,Q,n){n.d(Q,{Z:function(){return D}});var y=n(82092),l=n.n(y),K=n(60213),M=n(72771),H=n(22576),E=n(82187),B=n.n(E),R=n(53649),N=n.n(R),w=n(30764),A,p=(0,w.Z)(A||(A=N()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix}),m=n(52676),D=function(d){var x=d.indicator,o=d.spinning,h=o===void 0?!0:o,f=d.children,r=d.style,c=d.className,g=(0,K.getCommonConfig)(),k=g.sparkPrefix,s=M.Z.useToken(),O=p(),P=(0,m.jsxs)("svg",{className:"".concat(k,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,m.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,m.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,m.jsx)("g",{children:(0,m.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:s.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,m.jsx)("g",{children:(0,m.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:s.token.colorPrimary,fillOpacity:"1"})})]})]}),Z=d.tip||d.showProgress&&(0,m.jsxs)("div",{children:[(0,m.jsxs)("span",{children:["loading",d.percent!==void 0&&d.percent!==null&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:d.percent}),"%"]})]}),(0,m.jsx)(H.Z,{percent:d.percent,showInfo:!1})]})||null;return f?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(O,{}),(0,m.jsxs)("div",{className:B()("".concat(k,"-spinner-overlay"),c),style:r,children:[(0,m.jsx)("div",{className:B()("".concat(k,"-spinner-content"),l()({},"".concat(k,"-spinning"),h)),children:f}),h&&(0,m.jsxs)("div",{className:"".concat(k,"-spinner"),children:[(0,m.jsx)("div",{className:"".concat(k,"-indicator"),children:x||P}),(0,m.jsx)("div",{className:"".concat(k,"-title"),children:Z})]})]})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(O,{}),(0,m.jsx)("div",{className:B()("".concat(k,"-spinner"),c),style:r,children:h&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"".concat(k,"-indicator"),children:x||P}),(0,m.jsx)("div",{className:"".concat(k,"-title"),children:Z})]})})]})}},75229:function(pn,Q,n){n.d(Q,{Z:function(){return A}});var y=n(26068),l=n.n(y),K=n(468),M=n(53649),H=n.n(M),E=n(30764),B,R=(0,E.Z)(B||(B=H()([`
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
`])),function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix}),N=n(52676),w=function(m){var D=R();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(D,{}),(0,N.jsx)(K.Z,l()({},m))]})},A=w},52849:function(pn,Q,n){n.d(Q,{Z:function(){return x}});var y=n(26068),l=n.n(y),K=n(60213),M=n(68278),H=n(98852),E=n(82187),B=n.n(E),R=n(75271),N=n(53649),w=n.n(N),A=n(30764),p,m=(0,A.Z)(p||(p=w()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),D=n(52676),d=function(h){var f=(0,K.getCommonConfig)(),r=f.sparkPrefix,c=m(),g=(0,R.useMemo)(function(){if(h.items)return h.items.map(function(k,s){var O=k.status;return!O&&h.current!==void 0&&(s<h.current?O="finish":s===h.current?O="process":O="wait"),O==="finish"?l()(l()({},k),{},{icon:(0,D.jsx)(M.Z,{className:"".concat(r,"-finish-icon")})}):k})},[h.items,h.current]);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(c,{}),(0,D.jsx)(H.Z,l()(l()({},h),{},{items:g,className:B()("".concat(r,"-steps"),h.className)}))]})},x=d},90118:function(pn,Q,n){n.d(Q,{Z:function(){return d}});var y=n(26068),l=n.n(y),K=n(67825),M=n.n(K),H=n(90264),E=n(10616),B=n(60213),R=n(53649),N=n.n(R),w=n(30764),A,p=(0,w.Z)(A||(A=N()([`
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
`])),function(x){return x.sparkPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.sparkPrefix}),m=n(52676),D=["label","className"],d=function(x){var o=p(),h=x.label,f=x.className,r=M()(x,D),c=(0,B.getCommonConfig)(),g=c.sparkPrefix;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{}),(0,m.jsxs)(H.Z,{align:"center",gap:8,className:f,children:[(0,m.jsx)(E.Z,l()(l()({},r),{},{className:"".concat(g,"-switch")})),h&&(0,m.jsx)("span",{className:"".concat(g,"-switch-label"),children:h})]})]})}},18762:function(pn,Q,n){n.d(Q,{Z:function(){return h}});var y=n(26068),l=n.n(y),K=n(67825),M=n.n(K),H=n(60213),E=n(2004),B=n(63267),R=n(82187),N=n.n(R),w=n(47525),A=n(53649),p=n.n(A),m=n(30764),D,d=(0,m.Z)(D||(D=p()([`
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
`])),function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix}),x=n(52676),o=["columns"];function h(f){var r,c=(0,H.getCommonConfig)(),g=c.sparkPrefix,k=f.columns,s=M()(f,o);k=(r=k)===null||r===void 0?void 0:r.map(function(Z){return l()(l()({},Z),{},{sortIcon:Z.sortIcon||function(){return(0,x.jsx)(E.Z,{style:{fontSize:16,marginLeft:8}})}})});var O=d(),P=(0,w.X)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(O,{}),(0,x.jsx)(P,{}),(0,x.jsx)(B.Z,l()({className:N()("".concat(g,"-table")),columns:k},s))]})}},96295:function(pn,Q,n){n.d(Q,{Z:function(){return f}});var y=n(26068),l=n.n(y),K=n(67825),M=n.n(K),H=n(60213),E=n(40753),B=n(82187),R=n.n(B),N=n(75271),w=n(53649),A=n.n(w),p=n(30764),m,D=(0,p.Z)(m||(m=A()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),d=n(52676),x=["children","className","bordered","color","size"],o=function(r){return r.Purple="purple",r.Pink="pink",r.Yellow="yellow",r.Teal="teal",r.Blue="blue",r.Mauve="mauve",r.Transparent="transparent",r.Success="success",r.Error="error",r.Warning="warning",r.Info="info",r}(o||{}),h=(0,N.forwardRef)(function(r,c){var g=r.children,k=r.className,s=r.bordered,O=s===void 0?!1:s,P=r.color,Z=P===void 0?"mauve":P,nn=r.size,V=nn===void 0?"middle":nn,cn=M()(r,x),en=D(),X=(0,H.getCommonConfig)(),$=X.sparkPrefix,rn=Object.values(o).includes(Z);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(en,{}),(0,d.jsx)(E.Z,l()(l()({className:R()("".concat($,"-tag ").concat($,"-tag-").concat(Z," ").concat($,"-tag-").concat(V),k),bordered:O,color:rn?void 0:Z},cn),{},{ref:c,children:g}))]})}),f=h},2567:function(pn,Q,n){n.d(Q,{Z:function(){return k}});var y=n(26068),l=n.n(y),K=n(67825),M=n.n(K),H=n(60213),E=n(41246),B=n(72771),R=n(86137),N=n(34374),w=n(82187),A=n.n(w),p=n(75271),m=n(53649),D=n.n(m),d=n(30764),x,o=(0,d.Z)(x||(x=D()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),h=n(52676),f=["className","popupClassName"],r=["className","popupClassName"],c=function(O){var P=O.className,Z=O.popupClassName,nn=M()(O,f),V=B.Z.useToken(),cn=V.token,en=(0,H.getCommonConfig)(),X=en.sparkPrefix,$=o();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)($,{}),(0,h.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:cn.colorPrimary}}},children:(0,h.jsx)(N.Z,l()({suffixIcon:(0,h.jsx)(E.Z,{}),className:A()("".concat(X,"-picker"),P),popupClassName:A()("".concat(X,"-picker-dropdown"),Z)},nn))})]})},g=function(O){var P=O.className,Z=O.popupClassName,nn=M()(O,r),V=B.Z.useToken(),cn=V.token,en=(0,H.getCommonConfig)(),X=en.sparkPrefix,$=o();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)($,{}),(0,h.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:cn.colorPrimary}}},children:(0,h.jsx)(N.Z.RangePicker,l()({suffixIcon:(0,h.jsx)(E.Z,{}),className:A()("".concat(X,"-picker"),P),popupClassName:A()("".concat(X,"-picker-dropdown"),Z),popupStyle:{padding:0}},nn))})]})};c.RangePicker=g;var k=c},95726:function(pn,Q,n){n.d(Q,{Z:function(){return f}});var y=n(26068),l=n.n(y),K=n(67825),M=n.n(K),H=n(60213),E=n(84240),B=n(82187),R=n.n(B),N=n(53649),w=n.n(N),A=n(30764),p,m=(0,A.Z)(p||(p=w()([`
.`,"-upload.",`-upload-wrapper {
  .`,"-upload.",`-upload-select {
    border: var(--`,"-line-width) dashed var(--",`-color-border-secondary);
    background-color: var(--`,`-color-fill-tertiary);
  }
  
  .`,`-upload-drag {
    border: var(--`,"-line-width) dashed var(--",`-color-border-secondary);
    background-color: var(--`,`-color-fill-tertiary);
    
    .`,`-upload-btn {
      padding: 32px 48px;
    }
    
    .`,`-upload-drag-container {
      text-align: center;
      
      .`,`-upload-icon {
        display: inline-grid;
        place-items: center;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: var(--`,`-color-bg-base);
      }
      
      .`,`-upload-text {
        margin-top: 8px;
        margin-bottom: 0;
        color: var(--`,`-color-text);
        font-weight: 500;
        line-height: 24px;
      }
      
      .`,`-upload-hint {
        margin-top: 4px;
        margin-bottom: 0;
        color: var(--`,`-color-text-secondary);
        line-height: 20px;
      }
    }
  }
}

.`,"-upload.",`-custom-uploaded {
  .`,`-upload-list {
    &:first-child {
      margin-top: 0;
      width: 242px;
    }
    
    .`,`-upload-list-item {
      display: flex;
      align-items: center;
      height: 60px;
      padding: 9px 12px;
      margin-top: 20px;
      border-color: var(--`,`-color-border-secondary);
      border-style: solid;
      
      .`,`-upload-list-item-thumbnail {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
      }
      
      .`,`-upload-list-item-name {
        width: 150px;
        color: var(--`,`-color-text);
        line-height: 24px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .`,`-upload-list-item-actions {
        .`,`-btn {
          width: 32px;
          height: 32px;
          color: var(--`,`-color-text-tertiary);
        }
      }
      
      .`,`-upload-list-item-progress {
        bottom: 6px;
        padding-left: 48px;
        
        .`,`-progress {
          display: flex;
          align-items: center;
          height: 20px;
        }
      }
      
      &.`,`-upload-list-item-error {
        border-color: var(--`,`-color-border-secondary);
        
        .`,`-upload-list-item-name {
          color: var(--`,`-color-error);
        }
        
        .`,`-btn-icon .anticon {
          color: var(--`,`-color-text-tertiary);
        }
      }
    }
  }
}
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),D=n(52676),d=["className"],x=["className"],o=function(c){var g=c.className,k=M()(c,d),s=(0,H.getCommonConfig)(),O=s.sparkPrefix,P=m();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(P,{}),(0,D.jsx)(E.Z,l()({className:R()("".concat(O,"-upload"),g)},k))]})},h=function(c){var g=c.className,k=M()(c,x),s=(0,H.getCommonConfig)(),O=s.sparkPrefix,P=m();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(P,{}),(0,D.jsx)(E.Z.Dragger,l()({className:R()("".concat(O,"-upload"),g)},k))]})};o.Dragger=h,o.LIST_IGNORE=E.Z.LIST_IGNORE;var f=o},86822:function(pn,Q,n){n.d(Q,{Z:function(){return H}});var y=n(26068),l=n.n(y),K=n(75271),M=new Map;function H(E){var B=E.globalStyle,R=E.name;(0,K.useLayoutEffect)(function(){var N=M.get(B)||0;if(N)M.set(B,l()(l()({},N),{},{count:N.count+1}));else{var w=document.createElement("style"),A=Math.random().toString(36).slice(2);w.innerHTML=B,w.dataset.id=A,w.dataset.flag="bailian-ui-use-style",R&&w.setAttribute("name",R),document.head.appendChild(w),M.set(B,{count:1,id:A})}return function(){var p=M.get(B);M.set(B,l()(l()({},p),{},{count:p.count-1})),setTimeout(function(){var m=M.get(B);if((m==null?void 0:m.count)<=0){var D;M.delete(B),(D=document.head.querySelector('[data-id="'+m.id+'"]'))===null||D===void 0||D.remove()}},100)}},[B])}},5012:function(pn,Q,n){n.r(Q),n.d(Q,{Alert:function(){return o.Z},AlertDialog:function(){return O.default},Anchor:function(){return P.Z},Audio:function(){return Kr.Z},Avatar:function(){return Z.Z},Badge:function(){return h.Z},Breadcrumb:function(){return nn.Z},Button:function(){return V.Z},Card:function(){return cn.Z},Checkbox:function(){return en.Z},CodeBlock:function(){return X.ZP},CodeBlockLangExtensionsMap:function(){return X.xO},Collapse:function(){return $.Z},CollapsePanel:function(){return rn.Z},ConfigProvider:function(){return wt.ZP},DatePicker:function(){return vn.Z},Descriptions:function(){return Vr.Z},Drawer:function(){return mn.Z},Dropdown:function(){return Sn.Z},EllipsisTip:function(){return Mn},Empty:function(){return Ln.Z},FileCard:function(){return Ke.s},FileIcon:function(){return Ke.Z},FloatButton:function(){return f.Z},Form:function(){return On.Z},HelpIcon:function(){return $n},IconButton:function(){return jn.Z},IconFont:function(){return zn.Z},Image:function(){return fe.Z},Input:function(){return gr.Z},InputNumber:function(){return r.Z},MdEditor:function(){return Ae.Z},MediaPreview:function(){return Gr.Z},MobileAlertDialog:function(){return vt},MobileDrawer:function(){return yt},MobileModal:function(){return jt},Modal:function(){return xr.Z},Pagination:function(){return Pr.Z},Popconfirm:function(){return yr.Z},Popover:function(){return br.Z},Progress:function(){return c.Z},PromptsEditor:function(){return Ae.Z},Radio:function(){return g.ZP},RadioButton:function(){return Cr.default},Result:function(){return jr.Z},Select:function(){return k.default},Skeleton:function(){return s.Z},SlateEditor:function(){return Ur},Slider:function(){return Qe.Z},SliderSelector:function(){return Xr},Spinner:function(){return Qr.Z},Statistic:function(){return qr.Z},Steps:function(){return Sr.Z},Switch:function(){return _r.Z},Table:function(){return nt.Z},Tabs:function(){return et.Z},Tag:function(){return rt.Z},TimePicker:function(){return tt.Z},Tooltip:function(){return Bn.Z},Upload:function(){return at.Z},Video:function(){return ot.Z},bailianDarkTheme:function(){return mr},bailianTheme:function(){return vr},base64Decoder:function(){return zt},base64Encoder:function(){return $t},carbonDarkTheme:function(){return Qt},carbonTheme:function(){return Ut},copy:function(){return dr.JG},delay:function(){return or},generateTheme:function(){return d},generateThemeByToken:function(){return x.Z},getCommonConfig:function(){return un.getCommonConfig},message:function(){return pr.Z},notification:function(){return hr.Z},parseJsonSafely:function(){return Ht},purpleDarkTheme:function(){return mr},purpleTheme:function(){return vr},renderTooltip:function(){return dr.rb},requestPop:function(){return lr},requestPopSse:function(){return At},requestSse:function(){return ur},safeHtml:function(){return Et.t},setCommonConfig:function(){return un.setCommonConfig},useCommonConfig:function(){return un.useCommonConfig},useGlobalStyle:function(){return St.Z},waitForDom:function(){return Wt},waitForFunc:function(){return fr}});var y=n(23577),l=n(19888),K=n(44719),M=n(57249),H=function(t){var a=t.r/255,u=t.g/255,i=t.b/255,v=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),b=u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4),j=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4);return .2126*v+.7152*b+.0722*j},E=function(t){var a=H(t);return a>.5},B=function(t){var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null},R=function(t,a,u){return"#"+((1<<24)+(t<<16)+(a<<8)+u).toString(16).slice(1).toUpperCase()},N=function(t,a,u){var i=t/255,v=a/255,b=u/255,j=Math.max(i,v,b),S=Math.min(i,v,b),L,C,T=(j+S)/2;if(j===S)L=C=0;else{var J=j-S;switch(C=T>.5?J/(2-j-S):J/(j+S),j){case i:L=((v-b)/J+(v<b?6:0))/6;break;case v:L=((b-i)/J+2)/6;break;case b:L=((i-v)/J+4)/6;break;default:L=0}}return{h:L*360,s:C*100,l:T*100}},w=function(t,a,u){var i=t/360,v=a/100,b=u/100,j,S,L;if(v===0)j=S=L=b;else{var C=function(tn,ln,xn){var U=xn;return U<0&&(U+=1),U>1&&(U-=1),U<.16666666666666666?tn+(ln-tn)*6*U:U<.5?ln:U<.6666666666666666?tn+(ln-tn)*(.6666666666666666-U)*6:tn},T=b<.5?b*(1+v):b+v-b*v,J=2*b-T;j=C(J,T,i+1/3),S=C(J,T,i),L=C(J,T,i-1/3)}return{r:Math.round(j*255),g:Math.round(S*255),b:Math.round(L*255)}},A=function(t,a){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=B(t);if(!i)return t;var v=N(i.r,i.g,i.b);v.l=Math.max(0,Math.min(100,v.l+a)),v.s=Math.max(0,Math.min(100,v.s+u));var b=w(v.h,v.s,v.l);return R(b.r,b.g,b.b)},p=function(t,a){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=B(t);if(!i)return t;var v=N(i.r,i.g,i.b);v.l=a,u!==null&&(v.s=u);var b=w(v.h,v.s,v.l);return R(b.r,b.g,b.b)},m=function(t,a){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=B(t);if(!i)return t;var v=N(i.r,i.g,i.b);v.l=a,v.s=Math.max(0,Math.min(100,v.s*u));var b=w(v.h,v.s,v.l);return R(b.r,b.g,b.b)},D=function(t){var a=t.primaryHex,u=t.darkMode,i=u===void 0?!1:u,v=t.bgBaseHex||(i?"#000000":"#ffffff"),b=t.textBaseHex||(i?"#E7E7ED":"#1a1a1a"),j=B(a);if(!j)return null;var S=N(j.r,j.g,j.b),L=B(v),C=B(b),T=L?N(L.r,L.g,L.b):{h:210,s:8,l:i?5:99},J=Math.max(8,Math.min(S.s,40)),an=Math.max(12,Math.min(S.s*.6,35)),tn=i?p(a,Math.max(S.l-5,42),S.s*.95):a,ln=B(tn),xn=ln?N(ln.r,ln.g,ln.b):S,U={borderRadiusXS:l.borderRadiusXS,borderRadiusSM:l.borderRadiusSM,borderRadius:l.borderRadius,borderRadiusLG:l.borderRadiusLG,borderRadiusXL:l.borderRadiusXL,borderRadiusFull:l.borderRadiusFull,wireframe:l.wireframe,colorPrimary:i?p(a,Math.max(S.l-5,42),S.s*.95):a,colorPrimaryHover:i?p(a,Math.min(S.l+10,55),S.s*.95):A(a,S.l<50?10:-10,0),colorPrimaryActive:i?p(a,Math.max(S.l-10,35),S.s*.95):A(a,S.l<50?-10:-20,0),colorPrimaryBg:i?p(a,13,J*.6):p(a,96,J*.8),colorPrimaryBgHover:i?p(a,13,J*.6):p(a,94,J),colorPrimaryBorder:i?p(a,17,an*.8):p(a,88,an*.8),colorPrimaryBorderHover:i?p(a,22,an):p(a,82,an),colorPrimaryText:i?p(a,Math.max(S.l-5,42),S.s*.95):a,colorPrimaryTextHover:i?p(a,Math.min(S.l+10,55),S.s*.95):A(a,S.l<50?10:-10,0),colorPrimaryTextActive:i?p(a,Math.max(S.l-10,35),S.s*.95):A(a,S.l<50?-10:-20,0),colorTextOnPrimary:E(ln)?"#000000":"#ffffff",colorTextBase:b,colorText:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.88)"),colorTextSecondary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.65)"),colorTextTertiary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.45)"),colorTextQuaternary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.25)"),colorTextWhite:"#fff",colorBgBase:v,colorBgContainer:i?m(v,Math.min(T.l+S.l*.08,12),1.2):m(v,Math.max(100-S.l*.05,96),.8),colorBgElevated:i?m(v,Math.min(T.l+3,8),1.2):v,colorBgLayout:v,colorBgSpotlight:i?"rgba(".concat(B(m(v,28,1.2)).r,", ").concat(B(m(v,28,1.2)).g,", ").concat(B(m(v,28,1.2)).b,", 0.85)"):"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.85)"),colorBgMask:i?"rgba(".concat(L.r,", ").concat(L.g,", ").concat(L.b,", 0.8)"):"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.45)"),colorBorder:i?"rgba(".concat(B(m(v,28,2)).r,", ").concat(B(m(v,28,2)).g,", ").concat(B(m(v,28,2)).b,", 0.8)"):m(v,81,2.5),colorBorderSecondary:i?"rgba(".concat(B(m(v,22,1.8)).r,", ").concat(B(m(v,22,1.8)).g,", ").concat(B(m(v,22,1.8)).b,", 0.8)"):m(v,88,2),colorFill:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.18)"):m(v,81,2.5)+"5c",colorFillSecondary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.12)"):m(v,81,2.5)+"33",colorFillTertiary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.08)"):m(v,81,2.5)+"26",colorFillQuaternary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.04)"):m(v,81,2.5)+"1a",colorFillDisable:i?m(b,55,.8):m(v,86,1.8),colorLink:i?p(a,Math.max(S.l-5,42),S.s*.95):a,colorInfo:i?y.colorInfo:l.colorInfo,colorInfoHover:i?y.colorInfoHover:l.colorInfoHover,colorInfoText:i?y.colorInfoText:l.colorInfoText,colorInfoBg:i?y.colorInfoBg:l.colorInfoBg,colorInfoBgHover:i?y.colorInfoBgHover:l.colorInfoBgHover,colorInfoBorder:i?y.colorInfoBorder:l.colorInfoBorder,colorInfoBorderHover:i?y.colorInfoBorderHover:l.colorInfoBorderHover,colorSuccess:i?y.colorSuccess:l.colorSuccess,colorSuccessHover:i?y.colorSuccessHover:l.colorSuccessHover,colorSuccessBg:i?y.colorSuccessBg:l.colorSuccessBg,colorSuccessBgHover:i?y.colorSuccessBgHover:l.colorSuccessBgHover,colorSuccessBorder:i?y.colorSuccessBorder:l.colorSuccessBorder,colorSuccessBorderHover:i?y.colorSuccessBorderHover:l.colorSuccessBorderHover,colorWarning:i?y.colorWarning:l.colorWarning,colorWarningHover:i?y.colorWarningHover:l.colorWarningHover,colorWarningBg:i?y.colorWarningBg:l.colorWarningBg,colorWarningBgHover:i?y.colorWarningBgHover:l.colorWarningBgHover,colorWarningBorder:i?y.colorWarningBorder:l.colorWarningBorder,colorWarningBorderHover:i?y.colorWarningBorderHover:l.colorWarningBorderHover,colorError:i?y.colorError:l.colorError,colorErrorHover:i?y.colorErrorHover:l.colorErrorHover,colorErrorBg:i?y.colorErrorBg:l.colorErrorBg,colorErrorBgHover:i?y.colorErrorBgHover:l.colorErrorBgHover,colorErrorBorder:i?y.colorErrorBorder:l.colorErrorBorder,colorErrorBorderHover:i?y.colorErrorBorderHover:l.colorErrorBorderHover,colorPurple:i?y.colorPurple:l.colorPurple,colorPurpleHover:i?y.colorPurpleHover:l.colorPurpleHover,colorPurpleBg:i?y.colorPurpleBg:l.colorPurpleBg,colorPink:i?y.colorPink:l.colorPink,colorPinkHover:i?y.colorPinkHover:l.colorPinkHover,colorPinkBg:i?y.colorPinkBg:l.colorPinkBg,colorYellow:i?y.colorYellow:l.colorYellow,colorYellowHover:i?y.colorYellowHover:l.colorYellowHover,colorYellowBg:i?y.colorYellowBg:l.colorYellowBg,colorOrange:i?y.colorOrange:l.colorOrange,colorOrangeHover:i?y.colorOrangeHover:l.colorOrangeHover,colorOrangeBg:i?y.colorOrangeBg:l.colorOrangeBg,colorTeal:i?y.colorTeal:l.colorTeal,colorTealHover:i?y.colorTealHover:l.colorTealHover,colorTealBg:i?y.colorTealBg:l.colorTealBg,colorBlue:i?y.colorBlue:l.colorBlue,colorBlueHover:i?y.colorBlueHover:l.colorBlueHover,colorBlueBg:i?y.colorBlueBg:l.colorBlueBg,colorMauve:i?y.colorMauve:l.colorMauve,colorMauveHover:i?y.colorMauveHover:l.colorMauveHover,colorMauveBg:i?y.colorMauveBg:l.colorMauveBg,colorSlate:i?y.colorSlate:l.colorSlate||"#1E293B",colorSlateHover:i?y.colorSlateHover:l.colorSlateHover||"#475569",colorSlateBg:i?y.colorSlateBg:l.colorSlateBg||"#E2E8F0",colorLavender:i?y.colorLavender:l.colorLavender||"#A77BFF",colorLavenderHover:i?y.colorLavenderHover:l.colorLavenderHover||"#BB99FF",colorLavenderBg:i?y.colorLavenderBg:l.colorLavenderBg||"rgba(226, 212, 255, 0.8)",boxShadow:i?y.boxShadow:l.boxShadow,boxShadowSecondary:i?y.boxShadowSecondary:l.boxShadowSecondary,boxShadowTertiary:i?y.boxShadowTertiary:l.boxShadowTertiary,boxShadowTertiaryLeft:i?y.boxShadowTertiaryLeft:l.boxShadowTertiaryLeft,boxShadowInput:i?y.boxShadowInput:l.boxShadowInput};return U},d=D,x=n(18729),o=n(80017),h=n(49339),f=n(45365),r=n(32496),c=n(22576),g=n(6944),k=n(45908),s=n(86585),O=n(7481),P=n(21245),Z=n(93178),nn=n(40),V=n(60823),cn=n(61902),en=n(98618),X=n(49570),$=n(94684),rn=n(61406),vn=n(84360),mn=n(19743),Sn=n(38356),dn=n(26068),F=n.n(dn),Tn=n(31759),bn=n.n(Tn),un=n(60213),Pn=n(89462),hn=n(82187),q=n.n(hn),G=n(75271),on=n(53649),sn=n.n(on),En=n(30764),Dn,yn=(0,En.Z)(Dn||(Dn=sn()([`
div.`,`-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`])),function(e){return e.sparkPrefix}),I=n(52676);function Mn(e){var t=e.className,a=t===void 0?"":t,u=e.style,i=u===void 0?{}:u,v=e.children,b=e.rows,j=b===void 0?1:b,S=e.tooltip,L=e.tooltipMaxHeight,C=L===void 0?"90vh":L,T=(0,un.getCommonConfig)(),J=T.sparkPrefix,an=yn();function tn(){var ln={maxHeight:C,overflow:"auto"};if(bn()(S)==="object"){var xn=S,U=xn.title,Y=xn.styles;return{title:U||v,styles:F()(F()({},Y),{},{body:F()(F()({},ln),Y==null?void 0:Y.body)})}}return{title:S||v,styles:{body:ln}}}return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(an,{}),(0,I.jsx)(Pn.Z.Paragraph,{className:q()("".concat(J,"-ellipsis-tip"),a),style:i,ellipsis:{rows:j,tooltip:tn()},children:v})]})}var Ln=n(49327),On=n(90895),Cn=n(20855),jn=n(94662),fn=n(39862),Bn=n(19546),wn,Pe=(0,En.Z)(wn||(wn=sn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix});function $n(e){var t=(0,fn.X)(),a=Pe(),u=e.style,i=e.content,v=e.className,b=e.popoverProps,j=(0,un.getCommonConfig)(),S=j.sparkPrefix;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(t,{}),(0,I.jsx)(a,{}),(0,I.jsx)(Bn.Z,F()(F()({title:i,overlayInnerStyle:{maxWidth:376},trigger:"hover",style:u},b),{},{children:(0,I.jsx)(jn.Z,{className:q()("".concat(S,"-help-icon"),v),icon:(0,I.jsx)(Cn.Z,{}),shape:"circle",bordered:!1,size:"small"})}))]})}var zn=n(48004),fe=n(70344),gr=n(38734),pr=n(39971),xr=n(3983),hr=n(94361),Pr=n(85525),yr=n(30959),br=n(86298),Ae=n(3074),Cr=n(8893),jr=n(81483),Sr=n(52849),Er=n(48305),ye=n.n(Er),Yn=n(40965),oe=n(86212),W=n(75040),be=n(28533),ie=n(20335),We,Nr=(0,En.Z)(We||(We=sn()([`
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
`]))),Tr=n(15558),we=n.n(Tr),Dr=(0,G.memo)(function(e){var t=e.attributes,a=e.children;return(0,I.jsx)("div",F()(F()({},t),{},{style:{marginTop:"8px"},children:a}))}),He,Mr=(0,En.Z)(He||(He=sn()([`
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
`]))),Br=(0,G.memo)(function(e){var t=e.attributes,a=e.renderVarLabel,u=Mr();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(u,{}),(0,I.jsxs)("span",F()(F()({},t),{},{children:[e.children,(0,I.jsx)("span",{className:"spark-editor-var-tag",children:a?a(e.element.code):e.element.label})]}))]})}),Kt=function(t){return Object.keys(t).map(function(a){return{label:t[a].label,desc:t[a].desc,value:a}})},kr=[{code:"s",isParagraph:!0,out:[],inner:[],name:Yn.Z.get({id:"components.SlateEditor.utils.constant.Paragraph",dm:"\u6BB5\u843D"}),render:Dr,type:"double"},{code:"var",isParagraph:!1,out:["s"],inner:[],name:Yn.Z.get({id:"components.SlateEditor.utils.constant.Variable",dm:"\u53D8\u91CF"}),render:Br,isInline:!0,isVoid:!0,type:"single"}],Ce=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},Vt=function(t){return t.replace(/&/g,"&amp;").replace(/{/g,"").replace(/}/g,"").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},Zr=function(t){return t.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")},je=function e(t,a){var u="",i=a||{},v=i.tagRules,b=v===void 0?{}:v;return t.forEach(function(j,S){if(W.W_.isElement(j)){var L=b[j.type];if(!L)u+=Ce(j.text);else switch(L.code){case"image":u+="![".concat(j.fileName,"](").concat(j.src,")");break;case"pdf":u+="[".concat(j.fileName,"](").concat(j.src,")");break;case"s":u+="".concat(e(j.children,a)).concat(S<t.length-1?`
`:"");break;case"var":u+="${".concat(j.code,"}");default:break}}else u+=Ce(j.text)}),u},$e=function(t,a){if(t&&t.children.length){var u=je(t.children,a);return u==="<s></s>"?"":Zr(u)}return""},ve=function(t){if(!t)return"";var a="",u=Ce(t).replace(/\$\{([^{}]+?)\}/g,function(i,v){return'<var code="'.concat(v,'" label="${').concat(v,'}" />')});return u.split(`
`).forEach(function(i){a+="<s>".concat(i,"</s>")}),"<speak>".concat(a,"</speak>")},Or=function e(t){var a,u=[];return(t==null||(a=t.childNodes)===null||a===void 0?void 0:a.length)>0&&t.childNodes.forEach(function(i,v,b){var j=i.nodeType,S=i.nodeName;if(j===1){for(var L={},C=0;C<i.attributes.length;C++){var T=i.attributes[C],J=T.nodeName,an=T.nodeValue;L[J]=an}var tn=F()({type:S},L);i.childNodes.length>0?tn.children=e(i):tn.children=[{text:""}],u.push(tn),S!=="s"&&(v>0&&b[v-1].nodeType===1&&u.unshift({text:""}),v===b.length-1&&u.push({text:""}))}else j===3&&u.push({text:i.nodeValue||""})}),u},me=function(t){if(t){var a=new DOMParser().parseFromString(t,"text/xml");return Or(a)}},Fr=function(t){if(!t||t.includes("</speak>"))return t;var a=t;return a.includes("<s>")||(a="<s>".concat(a,"</s>")),"<speak>".concat(a,"</speak>")},ze=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a={};return[].concat(we()(t),we()(kr)).forEach(function(u){a[u.code]||(a[u.code]=u)}),a},Lr=n(90228),Fn=n.n(Lr),Ir=n(87999),Xn=n.n(Ir),Ue=function(t,a,u){if(!(!t||!a)){var i=t.selection,v=null;i&&(v=i.focus),u!=null&&u.at&&(v=u==null?void 0:u.at),v||(v={path:[0,0],offset:0});var b=v,j=b.path,S=b.offset,L=W.NB.get(t,W.y$.parent(j));if(!W.ML.isVoid(t,L)){var C=W.NB.string(W.NB.get(t,j)),T=C.substring(0,S-(u!=null&&u.deletePrefix?1:0)),J=C.substring(S,C.length);W.ML.withoutNormalizing(t,function(){t.apply({type:"insert_node",node:{text:J},path:j}),t.apply({type:"insert_node",node:a,path:j}),t.apply({type:"insert_node",node:{text:T},path:j});var an=W.y$.next(W.y$.next(W.y$.next(j)));t.apply({type:"remove_node",path:an,node:W.NB.get(t,an)});var tn={path:W.y$.next(W.y$.next(j)),offset:0};t.apply({type:"set_selection",properties:null,newProperties:{anchor:tn,focus:tn}}),ie.F3.focus(t),t.onChange()})}}},Rr=function(){var e=Xn()(Fn()().mark(function t(a,u,i){var v,b,j,S,L,C,T,J,an,tn,ln,xn,U,Y,Nn,kn,Qn,Zn,Wn,_n,In,te,Kn,ae,Vn,Gn,ee,Rn,An,Hn,Jn,gn;return Fn()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(!(!a||!u)){_.next=2;break}return _.abrupt("return");case 2:if(b=a.selection,j=i||{},S=j.tip,L=j.selection,C=L===void 0?b:L,T=i==null||(v=i.rules)===null||v===void 0?void 0:v[u.type],!(C&&!W.e6.isCollapsed(C))){_.next=45;break}if(an=W.NB.fragment(a,C),tn=ge(an),tn!==""){_.next=10;break}return _.abrupt("return");case 10:if(ln=pe(W.e6.edges(C)),xn=ye()(ln,2),U=xn[0],Y=xn[1],W.ML.isVoid(a,W.NB.get(a,W.y$.parent(U.path)))&&(U.path=W.y$.next(W.y$.parent(U.path)),U.offset=0),W.ML.isVoid(a,W.NB.get(a,W.y$.parent(Y.path)))&&(Y.path=W.y$.previous(W.y$.parent(Y.path)),Y.offset=W.NB.string(W.NB.get(a,Y.path)).length),W.y$.hasPrevious(Y.path)&&W.NB.get(a,W.y$.parent(U.path))===W.NB.get(a,W.y$.previous(Y.path))&&U.offset===0&&Y.offset===0&&(Nn=W.y$.previous(W.y$.parent(U.path)),kn=W.NB.get(a,Nn),U.path=Nn,U.offset=kn.text.length),W.NB.parent(a,U.path)!==W.NB.parent(a,Y.path)){for(Qn=W.NB.get(a,U.path),Zn=ge(W.NB.fragment(a,{anchor:{path:Y.path,offset:0},focus:Y}));W.xv.isText(Qn)&&Qn.text===""&&tn===Zn;)U.path.splice(U.path.length-1,1,1,0),Qn=W.NB.get(a,U.path);for(Wn=W.NB.get(a,Y.path),_n=W.NB.string(W.NB.get(a,W.e6.edges(C)[0].path)),In=ge(W.NB.fragment(a,{anchor:U,focus:{path:U.path,offset:_n.length}}));W.xv.isText(Wn)&&Wn.text===""&&tn===In;)te=Y.path[Y.path.length-1],Y.path.splice(Y.path.length-1,1,te-1),Wn=W.NB.get(a,Y.path),W.W_.isElement(Wn)&&(Y.path.push(Wn.children.length-1),Y.offset=_n.length)}if(W.NB.parent(a,U.path)===W.NB.parent(a,Y.path)){_.next=18;break}return oe.ZP.info(Yn.Z.get({id:"components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect",dm:"\u5212\u9009\u8303\u56F4\u6709\u8BEF"})),_.abrupt("return");case 18:Kn=W.y$.parent(U.path),ae=(T==null?void 0:T.name)||Se(),Vn=W.NB.get(a,Kn),Gn=i==null||(J=i.rules)===null||J===void 0?void 0:J[Vn.type];case 22:if(!(T!=null&&T.out&&Kn.length>1)){_.next=30;break}if(T.out.includes(Vn.type)){_.next=27;break}return ee=(Gn==null?void 0:Gn.name)||Se(),oe.ZP.warning(Yn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn",dm:"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185"},{wrapTagName:ae,tagName:ee})),_.abrupt("return");case 27:Kn=W.y$.parent(Kn),_.next=22;break;case 30:if(!(T!=null&&T.inner&&W.NB.get(a,U.path)!==W.NB.get(a,Y.path))){_.next=42;break}Rn=W.y$.next(U.path);case 32:if(W.y$.equals(Rn,Y.path)){_.next=42;break}if(Hn=W.NB.get(a,Rn),Jn=i==null||(An=i.rules)===null||An===void 0?void 0:An[Hn.type],!(W.W_.isElement(Hn)&&!T.inner.includes(Hn.type))){_.next=39;break}return gn=(Jn==null?void 0:Jn.name)||Se(),oe.ZP.warning(Yn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn",dm:"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011"},{wrapTagName:ae,tagName:gn})),_.abrupt("return");case 39:Rn=W.y$.next(Rn),_.next=32;break;case 42:W.ML.withoutNormalizing(a,function(){var re=W.NB.parent(a,U.path),ne=W.NB.fragment(re,{anchor:{path:[U.path[U.path.length-1]],offset:U.offset},focus:{path:[Y.path[Y.path.length-1]],offset:Y.offset}}),ue=W.NB.string(W.NB.get(a,U.path));if(W.y$.equals(U.path,Y.path))a.apply({type:"remove_text",path:U.path,offset:U.offset,text:ue.substring(U.offset,Y.offset)});else{a.apply({type:"remove_text",path:U.path,offset:U.offset,text:ue.substring(U.offset,ue.length)});for(var de=W.y$.next(U.path);!W.y$.equals(de,Y.path);)a.apply({type:"remove_node",path:de,node:W.NB.get(a,de)}),Y.path=W.y$.previous(Y.path);var Fe=W.NB.string(W.NB.get(a,Y.path));a.apply({type:"remove_text",path:Y.path,offset:0,text:Fe.substring(0,Y.offset)})}if(!W.y$.equals(U.path,Y.path)){var he=W.NB.get(a,Y.path);a.apply({type:"remove_node",path:Y.path,node:he});var Le=W.NB.string(he);a.apply({type:"insert_text",path:U.path,offset:U.offset,text:Le})}Ue(a,F()(F()({},u),{},{children:ne}),{at:U,rules:i==null?void 0:i.rules})}),_.next=46;break;case 45:S&&oe.ZP.warning(S);case 46:case"end":return _.stop()}},t)}));return function(a,u,i){return e.apply(this,arguments)}}(),Gt=function(t,a,u){if(!(!t||!a)){var i=Node.get(t,a),v=pe(i.children).reverse();Editor.withoutNormalizing(t,function(){t.apply({type:"remove_node",node:i,path:a}),v.forEach(function(tn){t.apply({type:"insert_node",node:tn,path:a})});for(var b=Path.parent(a),j=Node.get(t,b),S=0;Node.has(j,[S+1]);)if(Text.isText(Node.get(j,[S]))&&Text.isText(Node.get(j,[S+1]))){var L=_toConsumableArray(b);L.push(S+1);var C=Node.get(t,L),T=Node.string(C);t.apply({type:"remove_node",path:L,node:C});var J=Path.previous(L),an=Node.string(Node.get(t,J));t.apply({type:"insert_text",path:Path.previous(L),offset:an.length,text:T}),j=Node.get(t,b)}else S++;u==null||u(),Path.previous(a)})}},Ar=function(t,a,u){var i=u.at;t.apply({type:"set_node",path:i,properties:a,newProperties:a}),t.onChange()},Jt=function(t,a,u){t.apply({type:"remove_node",path:u,node:Node.get(t,u)}),t.apply({type:"insert_node",path:u,node:a})},Wr=function(t,a){t&&(W.ML.withoutNormalizing(t,function(){var u=pe(t.children);u.forEach(function(v){t.apply({type:"remove_node",path:[0],node:v})});var i=a?pe(a):[{type:"s",children:[{text:""}]}];i.reverse(),i.forEach(function(v){t.apply({type:"insert_node",path:[0],node:v})})}),t.onChange())},ge=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.reduce(function(a,u){return a+W.NB.string(u)},"")},pe=function(t){return JSON.parse(JSON.stringify(t))},Se=function(){var t="";return t},Yt=function(t){var a;return(a=t[0])===null||a===void 0||(a=a.children)===null||a===void 0?void 0:a.map(function(u){return u.children.map(function(i){return i.text}).join("")}).join("")},Xt=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,a=t%60,u=parseInt("".concat(t/60)),i=0;return u>60&&(u=u%60,i=parseInt("".concat(u/60))),"".concat(i?"".concat(Ee(i),":"):"").concat(Ee(u),":").concat(Ee(a))},Ee=function(t){return t>=10?"".concat(t):"0".concat(t)},wr=function(t,a){if(!(!t||!a))return ie.F3.findPath(t,a)},Hr=function(t){t&&W.ML.withoutNormalizing(t,function(){var a=W.ML.end(t,[]);W.YR.select(t,a),ie.F3.focus(t),t.onChange()})},$r=function(t,a,u){var i=t.isInline,v=t.isVoid,b=t.insertText,j=t.insertBreak,S=t.apply;t.isInline=function(C){var T;return((T=u[C.type])===null||T===void 0?void 0:T.isInline)||i(C)},t.isVoid=function(C){var T;return((T=u[C.type])===null||T===void 0?void 0:T.isVoid)||v(C)};var L=function(T){var J=parseInt(t.maxLength||a||"1000"),an=$e(t,{tagRules:u}),tn=an.length;if(tn+T.length>J?(b(T.substring(0,J-tn)),be.MO.withoutSaving(t,function(){b(T.substring(J-tn,T.length))})):b(T),t.selection&&tn+T.length>J){var ln=t.selection.focus,xn=ln.path,U=ln.offset,Y=U-(tn+T.length-J),Nn=T.substring(J-tn,T.length),kn=Yn.Z.get({id:"components.SlateEditor.utils.withEditor.YouCanEnterAMaximum",dm:"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57"},{maxLen:J});be.MO.withoutSaving(t,function(){t.apply({type:"remove_text",path:xn,offset:Y,text:Nn})}),oe.ZP.warning(kn)}};return t.insertText=L,t.insertFragment=function(C){var T=ge(C);L(T)},t.insertBreak=function(){var C=t.selection;if(C){var T=Array.from(W.ML.nodes(t,{at:C,match:function(ln){return!W.ML.isEditor(ln)&&W.W_.isElement(ln)&&ln.type!=="s"}})),J=ye()(T,1),an=J[0];if(an)return;j()}},t.apply=function(C){C.type==="set_selection"&&Ne||S(C)},t},zr=(0,G.forwardRef)(function(e,t){var a=Nr(),u=e.value,i=e.wordLimit,v=i===void 0?1e3:i,b=e.disabled,j=e.onChange,S=e.variables,L=(0,G.useRef)(!1),C=(0,G.useRef)(ze(e.tagRules)),T=(0,G.useMemo)(function(){return $r((0,ie.BU)((0,be.VC)((0,W.Jh)())),v,C.current)},[]),J=(0,G.useRef)(T.selection),an=(0,G.useRef)(S);(0,G.useEffect)(function(){C.current=ze(e.tagRules)},[e.tagRules]),(0,G.useEffect)(function(){an.current=S},[S]),(0,G.useEffect)(function(){var gn;if(!L.current){L.current=!0;return}T.maxLength=v;var z=In();Vn(((gn=me(ve(z==null?void 0:z.slice(0,v))))===null||gn===void 0||(gn=gn[0])===null||gn===void 0?void 0:gn.children)||[{type:"s",children:[{text:""}]}])},[v]),(0,G.useImperativeHandle)(t,function(){return{editor:T,getEditorValue:In,_insertNodes:Kn,_setNodes:te,_setEditorContent:Vn,_findNodePath:ee,_wrapNodes:ae,_serialize:Rn,_generateTextBySelection:An,_insertFragment:Hn,_setEditorContentByStr:Gn}});var tn=(0,G.useMemo)(function(){var gn=me(Fr(ve(u))),z;return gn&&(gn[0].type==="speak"?z=gn[0].children:z=gn),{initValue:z}},[u]),ln=tn.initValue,xn=(0,G.useState)(ln||[{type:"s",children:[{text:""}]}]),U=ye()(xn,2),Y=U[0],Nn=U[1],kn=function(z){JSON.stringify((T==null?void 0:T.selection)||"")!==JSON.stringify(J.current||"")&&(J.current=T==null?void 0:T.selection);var _=In();u!==_&&(j==null||j(In()),Nn(z))},Qn=function(z){var _=z.element,re=_.type,ne=C.current[re].render;return ne?(0,I.jsx)(ne,F()(F()({},z),{},{renderVarLabel:e.renderVarLabel})):(0,I.jsx)(I.Fragment,{})},Zn=(0,G.useCallback)(function(gn){var z=gn.attributes,_=gn.children,re=gn.leaf;return(0,I.jsx)("span",F()(F()({},z),{},{style:{paddingLeft:re.text===""?"3px":void 0},children:_}))},[]),Wn=function(){Ne=!0},_n=function(){Ne=!1},In=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $e(T,F()(F()({},z),{},{tagRules:C.current}))},te=function(z,_){Ar(T,z,_)},Kn=function(z){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ue(T,z,F()(F()({},_),{},{rules:C.current}))},ae=function(z){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Rr(T,z,F()(F()({},_),{},{rules:C.current}))},Vn=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];Wr(T,z)},Gn=function(){var z,_=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";Vn(((z=me(ve(_==null?void 0:_.slice(0,v))))===null||z===void 0||(z=z[0])===null||z===void 0?void 0:z.children)||[{type:"s",children:[{text:""}]}])},ee=function(z){return wr(T,z)},Rn=function(z){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return je(z,F()(F()({},_),{},{tagRules:C.current}))},An=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!T.selection)return null;var _=W.NB.fragment(T,T.selection);return je(_,F()(F()({},z),{},{tagRules:C.current}))},Hn=function(z){var _,re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,ne=In();if(ne.length>=v){oe.ZP.warning(Yn.Z.get({id:"components.commonComponents.SlateEditor.TheNumberOfWordsCannot",dm:"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57"}));return}(!T.selection||re)&&Hr(T);var ue=ne.endsWith("/n");re&&ne&&!ue&&T.insertBreak();var de=z.slice(0,v-ne.length),Fe=me(ve(de))||[];(_=Fe[0])===null||_===void 0||_.children.forEach(function(he,Le){var Ie;Le!==0&&T.insertBreak(),(Ie=he.children)===null||Ie===void 0||Ie.forEach(function(Re){Re.text?T.insertText(Re.text):Kn(Re)})})};(0,G.useEffect)(function(){var gn=In();u!==gn&&(j==null||j(In()))},[]);var Jn=function(z){var _=z.clipboardData.getData("text/plain");Hn(_,!1),z.preventDefault()};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(a,{}),(0,I.jsx)("div",{id:"text-editor",className:q()("text-editor",e.className),children:(0,I.jsx)(ie.mH,{editor:T,value:Y,onChange:kn,children:(0,I.jsx)(ie.CX,{onKeyDown:e.onKeyDown,placeholder:e.placeholder||Yn.Z.get({id:"components.commonComponents.SlateEditor.EnterHere",dm:"\u5728\u8FD9\u91CC\u8F93\u5165"}),onBlur:e.onBlur,onFocus:e.onFocus,className:q()("text-editor-content",e.contentClassName),readOnly:b,renderElement:Qn,renderLeaf:Zn,onCompositionStart:Wn,onCompositionEnd:_n,onPaste:Jn,maxLength:e.wordLimit,onCopy:function(z){var _=An()||"";z.clipboardData.setData("text/plain",_),z.preventDefault()}})})})]})}),Ur=zr,Ne=!1,Qe=n(77652),Qr=n(70076),Kr=n(8639),Vr=n(62518),Ke=n(46763),Gr=n(36070),Jr=n(82092),se=n.n(Jr),Ve,Yr=(0,En.Z)(Ve||(Ve=sn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix});function Xr(e){var t=(0,un.getCommonConfig)(),a=t.sparkPrefix,u=Yr(),i=function(b){var j=typeof b=="string"?parseFloat(b):b;if(j===null||isNaN(j)){var S;(S=e.onChange)===null||S===void 0||S.call(e,null);return}if(j<e.min){var L;(L=e.onChange)===null||L===void 0||L.call(e,e.min)}else if(j>e.max){var C;(C=e.onChange)===null||C===void 0||C.call(e,e.max)}else{var T;(T=e.onChange)===null||T===void 0||T.call(e,j)}};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(u,{}),(0,I.jsxs)("div",{onMouseUp:function(){var b;return(b=e.onBlur)===null||b===void 0?void 0:b.call(e)},className:q()("".concat(a,"-slider-selector"),e.className),children:[(0,I.jsx)(Qe.Z,{disabled:e.disabled,onChange:i,value:e.value===null?void 0:e.value,min:e.min,max:e.max,step:e.step,marks:e.marks||se()(se()({},e.min,e.min),e.max,e.max),tooltip:{getPopupContainer:function(b){return b}}}),(0,I.jsx)("div",{style:F()({width:"48px"},e.inputNumberWrapperStyle),children:(0,I.jsx)(r.Z,{disabled:e.disabled,controls:!1,min:e.min,max:e.max,onBlur:function(){var b;return(b=e.onBlur)===null||b===void 0?void 0:b.call(e)},step:e.step,value:e.value,onChange:i,precision:e.precision})})]})]})}var qr=n(75229),_r=n(90118),nt=n(18762),et=n(98587),rt=n(96295),tt=n(2567),at=n(95726),ot=n(70588),it=n(67825),le=n.n(it),lt=n(58911),st=n(88602),ct=n(62910),ut=n(99090),xe=n(90264),qn=n(91301),Ge,Je=(0,En.Z)(Ge||(Ge=sn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),dt=["children","type","danger","title","width","className"],Ye=function(){var t=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,u=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(u,"px"),function(){document.body.style.overflow=t,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,u)}},Xe=function(t){var a=function(ln){var xn=ln.type,U=ln.title,Y=(0,un.getCommonConfig)(),Nn=Y.antPrefix;switch(xn){case"success":return(0,I.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,I.jsx)(lt.Z,{style:{color:"var(--".concat(Nn,"-color-success)"),fontSize:18,margin:"0 3px"}}),U]});case"warning":case"confirm":return(0,I.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,I.jsx)(st.Z,{style:{color:"var(--".concat(Nn,"-color-warning)"),fontSize:18,margin:"0 3px"}}),U]});case"info":return(0,I.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,I.jsx)(ct.Z,{style:{color:"var(--".concat(Nn,"-color-info)"),fontSize:18,margin:"0 3px"}}),U]});case"error":return(0,I.jsxs)(xe.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,I.jsx)(ut.Z,{style:{color:"var(--".concat(Nn,"-color-error)"),fontSize:18,margin:"0 3px"}}),U]});default:return Yn.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},u=t.children,i=t.type,v=i===void 0?"info":i,b=t.danger,j=b===void 0?!1:b,S=t.title,L=t.width,C=L===void 0?"auto":L,T=t.className,J=T===void 0?"":T,an=le()(t,dt);return{width:C,transitionName:"",restProps:an,closeIcon:null,title:a({type:v,title:S}),okButtonProps:{danger:v==="error"||v==="warning"||j},destroyOnClose:!0,className:q()(J,"animate-in","".concat((0,un.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:t.content||u,children:u}},qe=function(t){var a=Xe(t),u=Je();return(0,G.useEffect)(function(){if(t.open){var i=Ye();return i}},[t.open]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(u,{}),(0,I.jsx)(qn.Z,F()(F()({width:a.width,transitionName:""},a.restProps),{},{closeIcon:null,title:a.title,okButtonProps:a.okButtonProps||{},destroyOnClose:a.destroyOnClose,className:a.className,children:a.content||a.children}))]})},ft=["success","info","warning","error","confirm"];ft.forEach(function(e){qe[e]=function(t){var a=Xe(F()(F()({},t),{},{type:e})),u=Ye();function i(){var v=Je();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(v,{}),a.content]})}return qn.Z.confirm(F()(F()(F()({},a),a.restProps),{},{content:(0,I.jsx)(i,{}),icon:null,afterClose:function(){var b;if(u(),(b=a.restProps)!==null&&b!==void 0&&b.afterClose){var j;(j=a.restProps).afterClose.apply(j,arguments)}}}))}});var vt=qe,mt=n(14679),gt=n(56652),_e,nr=(0,En.Z)(_e||(_e=sn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),pt=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],xt=function(t){var a=t.onOk,u=t.onCancel,i=t.okText,v=i===void 0?"\u786E\u5B9A":i,b=t.okButtonProps,j=t.cancelText,S=j===void 0?"\u53D6\u6D88":j,L=t.cancelButtonProps,C=t.info,T=t.footer,J=le()(t,pt),an=nr(),tn=(0,un.getCommonConfig)(),ln=tn.antPrefix,xn=function(Y){if(u)u();else{var Nn;(Nn=J.onClose)===null||Nn===void 0||Nn.call(J,Y)}};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(an,{}),(0,I.jsx)(mn.Z,F()(F()({},J),{},{footer:T||(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{className:"".concat(ln,"-drawer-footer-info"),children:C}),(0,I.jsxs)("div",{className:"".concat(ln,"-drawer-footer-buttons"),children:[(0,I.jsx)(V.Z,F()(F()({onClick:xn},L),{},{children:S})),(0,I.jsx)(V.Z,F()(F()({type:"primary",onClick:a},b),{},{children:v}))]})]})}))]})},ht=xt,Pt=["children","className","style","showDivider"],er=function(t){var a=t.children,u=t.className,i=t.style,v=t.showDivider,b=v===void 0?!0:v,j=le()(t,Pt),S=nr(),L=(0,un.getCommonConfig)(),C=L.sparkPrefix,T=L.antPrefix;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(S,{}),(0,I.jsx)(gt.Z,F()(F()({closeIcon:(0,I.jsx)(mt.Z,{size:24}),className:q()("".concat(C,"-drawer"),u,se()({},"".concat(T,"-show-divider"),b)),style:F()({},i)},j),{},{children:a}))]})};Object.assign(er,{Confirm:ht});var yt=er,bt=n(6002),rr,tr=(0,En.Z)(rr||(rr=sn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Ct=["showDivider","closable"],ar=function(){var t=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,u=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(u,"px"),function(){document.body.style.overflow=t,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,u)}},Un=function(t){var a=tr(),u=(0,un.getCommonConfig)(),i=u.sparkPrefix,v=t.showDivider,b=v===void 0?!0:v,j=t.closable,S=j===void 0?!0:j,L=le()(t,Ct);(0,G.useEffect)(function(){if(t.open){var an=ar();return an}},[t.open]);var C=function(tn){return t.info?(0,I.jsxs)("div",{className:"".concat(i,"-modal-footer-wrapper"),children:[(0,I.jsx)("span",{className:"".concat(i,"-modal-footer-info"),children:t.info}),(0,I.jsx)("div",{className:"".concat(i,"-modal-footer-origin-node"),children:tn})]}):tn},T=S?t.closeIcon||(0,I.jsx)(bt.Z,{className:"".concat(i,"-modal-title-close"),onClick:function(tn){var ln;(ln=t.onCancel)===null||ln===void 0||ln.call(t,tn)}}):null,J=t.footer===void 0?C:t.footer;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(a,{}),(0,I.jsx)(qn.Z,F()(F()({},L),{},{centered:!1,closeIcon:null,width:t.width||"auto",title:(0,I.jsxs)("div",{className:"".concat(i,"-modal-title-wrapper"),children:[(0,I.jsx)("div",{className:q()("".concat(i,"-modal-title"),se()({},"".concat(i,"-modal-title-padding"),S)),children:t.title}),T]}),wrapClassName:q()("".concat(i,"-modal"),se()({},"".concat(i,"-show-divider"),b),t.wrapClassName,"animate-in"),footer:J,transitionName:""}))]})};Un.useModal=qn.Z.useModal;var ce=function(t){return function(a){var u=ar(),i=(0,un.getCommonConfig)(),v=i.sparkPrefix,b=a==null?void 0:a.afterClose,j=a==null?void 0:a.content;function S(){var C=tr();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(C,{}),j]})}var L=F()(F()({},a),{},{content:(0,I.jsx)(S,{}),width:a.width||"auto",centered:!1,transitionName:"",wrapClassName:q()("".concat(v,"-modal"),a.wrapClassName,"animate-in"),afterClose:function(){u();for(var T=arguments.length,J=new Array(T),an=0;an<T;an++)J[an]=arguments[an];b==null||b.apply(void 0,J)}});return t(L)}};Un.success=ce(qn.Z.success),Un.error=ce(qn.Z.error),Un.warning=ce(qn.Z.warning),Un.info=ce(qn.Z.info),Un.confirm=ce(qn.Z.confirm),Un.SMALL_WIDTH=640,Un.MEDIUM_WIDTH=800,Un.LARGE_WIDTH=960;var jt=Un,St=n(86822);function or(){return Te.apply(this,arguments)}function Te(){return Te=Xn()(Fn()().mark(function e(){var t,a=arguments;return Fn()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=a.length>0&&a[0]!==void 0?a[0]:100,i.abrupt("return",new Promise(function(v){setTimeout(v,t)}));case 2:case"end":return i.stop()}},e)})),Te.apply(this,arguments)}var Et=n(65482),ir=n(8209),Nt=["product","action","url","version","region","headers"],Tt=function(){var e=Xn()(Fn()().mark(function a(u,i,v){var b,j,S,L,C,T,J,an,tn,ln,xn,U,Y,Nn,kn;return Fn()().wrap(function(Zn){for(;;)switch(Zn.prev=Zn.next){case 0:return j=u.product,S=u.action,L=u.url,C=u.version,T=u.region,J=u.headers,an=J===void 0?{}:J,tn=le()(u,Nt),ln="".concat(L||"/data/api.json","?action=").concat(S,"&product=").concat(j),C&&(ln+="&version=".concat(C)),xn={sec_token:((b=window.ALIYUN_CONSOLE_CONFIG)===null||b===void 0?void 0:b.SEC_TOKEN)||"",region:T},i&&(xn.params=JSON.stringify(i)),v&&Object.assign(xn,v),U=F()({method:"post",credentials:"same-origin",headers:F()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},an)},tn),Y=Object.assign({},U),Y.body=(0,ir.stringify)(xn),Zn.next=11,fetch(ln,Y);case 11:return Nn=Zn.sent,Zn.next=14,Nn.json();case 14:if(kn=Zn.sent,!(kn.code!=="200"&&!kn.successResponse)){Zn.next=17;break}return Zn.abrupt("return",Promise.reject(kn));case 17:return Zn.abrupt("return",kn);case 18:case"end":return Zn.stop()}},a)}));function t(a,u,i){return e.apply(this,arguments)}return t}(),lr=Tt;function Dt(e,t){return De.apply(this,arguments)}function De(){return De=Xn()(Fn()().mark(function e(t,a){var u,i,v;return Fn()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:i=t==null||(u=t.getReader)===null||u===void 0?void 0:u.call(t),i||(console.log("[sse]error: Can Not Find Reader Object"),console.log("[sse]StreamInfo: ",t));case 2:return j.next=4,i.read();case 4:if((v=j.sent).done){j.next=8;break}try{a(v.value)}catch(S){console.log("[sse-error][onmessage] pleach check `onmessage` or `onJsonText`.",S)}j.next=2;break;case 8:case"end":return j.stop()}},e)})),De.apply(this,arguments)}function Mt(e){var t,a,u,i=!1;return function(b){t===void 0?(t=b,a=0,u=-1):t=kt(t,b);for(var j=t.length,S=0;a<j;){i&&(t[a]===10&&(S=++a),i=!1);for(var L=-1;a<j&&L===-1;++a)switch(t[a]){case 58:u===-1&&(u=a-S);break;case 13:i=!0;case 10:L=a;break}if(L===-1)break;e(t.subarray(S,L),u),S=a,u=-1}S===j?t=void 0:S!==0&&(t=t.subarray(S),a-=S)}}function Bt(e,t,a){var u=sr(),i=new TextDecoder;return function(b,j){if(b.length===0)a==null||a(u),u=sr();else if(j>0){var S=i.decode(b.subarray(0,j)),L=j+(b[j+1]===32?2:1),C=i.decode(b.subarray(L));switch(S){case"data":u.data=u.data?"".concat(u.data,`
`).concat(C):C;break;case"event":u.event=C;break;case"id":e(u.id=C);break;case"retry":var T=parseInt(C,10);isNaN(T)||t(u.retry=T);break}}}}function kt(e,t){var a=new Uint8Array(e.length+t.length);return a.set(e),a.set(t,e.length),a}function sr(){return{data:"",event:"",id:"",retry:void 0}}var Zt=["signal","headers","onopen","onmessage","onclose","onerror","fetch","autoRetryTime","timeout","debug"],Me="text/event-stream",Ot=1e3,cr="last-event-id";function ur(e,t){return Be.apply(this,arguments)}function Be(){return Be=Xn()(Fn()().mark(function e(t,a){var u,i,v,b,j,S,L,C,T,J,an,tn,ln;return Fn()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return u=a.signal,i=a.headers,v=a.onopen,b=a.onmessage,j=a.onclose,S=a.onerror,L=a.fetch,C=a.autoRetryTime,T=a.timeout,J=a.debug,an=J===void 0?!1:J,tn=le()(a,Zt),ln=0,U.abrupt("return",new Promise(function(Y,Nn){var kn=F()({},i);kn.accept||(kn.accept=Me);var Qn=Ot,Zn=0,Wn=0,_n=new AbortController;function In(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(an&&console.log("[sse] dispose"),window.clearTimeout(Zn),window.clearTimeout(Wn),!ee){var Rn,An;(Rn=_n)===null||Rn===void 0||(An=Rn.abort)===null||An===void 0||An.call(Rn)}}function te(){window.clearTimeout(Wn),T!==0&&(Wn=window.setTimeout(function(){an&&console.log("[sse] timeout"),Nn(new Error("timeout")),S==null||S(new Error("timeout")),In()},T||60*1e3))}u==null||u.addEventListener("abort",function(){In(),Y()});var Kn=L!=null?L:window.fetch,ae=v!=null?v:Ft;function Vn(){return Gn.apply(this,arguments)}function Gn(){return Gn=Xn()(Fn()().mark(function ee(){var Rn,An,Hn,Jn;return Fn()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.prev=0,te(),z.next=4,Kn(t,F()(F()({},tn),{},{headers:kn,signal:(Rn=_n)===null||Rn===void 0?void 0:Rn.signal}));case 4:return An=z.sent,z.next=7,ae(An);case 7:if(An.body){z.next=11;break}return an&&console.log("[sse]no body, delay 100ms"),z.next=11,or(100);case 11:return an&&console.log("[sse]response.body",An.body),z.next=14,Dt(An.body,Mt(Bt(function(_){_?kn[cr]=_:delete kn[cr]},function(_){Qn=_},function(_){te(),b==null||b(_)})));case 14:_n=null,j==null||j(),In(),Y(),z.next=43;break;case 20:if(z.prev=20,z.t0=z.catch(0),z.t0&&console.error("[sse]err",z.t0),!(!(u!=null&&u.aborted)&&C&&ln<C)){z.next=39;break}return z.prev=24,ln+=1,Jn=(Hn=S==null?void 0:S(z.t0))!==null&&Hn!==void 0?Hn:Qn,window.clearTimeout(Zn),typeof Jn=="number"&&(an&&console.log("[sse] retry "+ln),Zn=window.setTimeout(Vn,Jn)),z.abrupt("return",Promise.resolve());case 32:z.prev=32,z.t1=z.catch(24),an&&console.log("[sse] reject innerErr ",z.t1),In(),Nn(z.t1);case 37:z.next=43;break;case 39:an&&console.log("[sse] reject finally"),In(z.t0 instanceof Response||z.t0 instanceof DOMException&&z.t0.name==="AbortError"),S==null||S(z.t0),Nn(z.t0);case 43:case"end":return z.stop()}},ee,null,[[0,20],[24,32]])})),Gn.apply(this,arguments)}Vn()}));case 3:case"end":return U.stop()}},e)})),Be.apply(this,arguments)}function Ft(e){var t=e.headers.get("content-type");if(!(t!=null&&t.startsWith(Me)))throw new Error("Expected content-type to be ".concat(Me,", Actual: ").concat(t))}function Lt(e){return ke.apply(this,arguments)}function ke(){return ke=Xn()(Fn()().mark(function e(t){var a,u,i,v,b,j,S;return Fn()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return a=t.action,u=t.body,i=t.product,v=t.version,b=t.region,j=t.params,S={action:a,product:i,region:b,url:"/tool/sse/get.json",version:v},C.abrupt("return",lr(S,j,{content:JSON.stringify(u)}));case 3:case"end":return C.stop()}},e)})),ke.apply(this,arguments)}function It(e,t,a,u){var i=t.onMessage,v=t.onClose,b=t.onError,j=t.timeout,S=e.body,L=e.uri,C=e.headers,T=e.query,J=e.path,an=C["Content-Type"],tn="".concat(L.replace(/\/$/,"")).concat(J);T&&Object.keys(T).length&&(tn="".concat(tn,"?").concat((0,ir.stringify)(T)));try{u.value=!1,ur(tn,{method:"POST",body:an==="application/x-www-form-urlencoded"?new URLSearchParams(JSON.parse(S)):S,signal:a.signal,timeout:j,headers:C,onopen:function(xn){return xn.status!==200?Promise.reject(xn):Promise.resolve()},onmessage:function(xn){try{var U=xn.data,Y=U===void 0?"{}":U,Nn=JSON.parse(Y);i==null||i(Nn)}catch(kn){b==null||b(kn)}},onclose:function(){u.value=!0,v==null||v()},onerror:function(xn){u.value=!0,v==null||v(),!(xn instanceof DOMException&&xn.name==="AbortError")&&(b==null||b(xn))}})}catch(ln){u.value=!0,b==null||b(ln),v==null||v()}}function Rt(e,t,a){return Ze.apply(this,arguments)}function Ze(){return Ze=Xn()(Fn()().mark(function e(t,a,u){var i,v,b,j;return Fn()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return i=t.onClose,v=t.onError,L.prev=1,L.next=4,Lt(t);case 4:b=L.sent,j=b.data,It(j,t,a,u),L.next=13;break;case 9:L.prev=9,L.t0=L.catch(1),i==null||i(),v==null||v(L.t0);case 13:case"end":return L.stop()}},e,null,[[1,9]])})),Ze.apply(this,arguments)}function At(e){return Oe.apply(this,arguments)}function Oe(){return Oe=Xn()(Fn()().mark(function e(t){var a,u;return Fn()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return a=new AbortController,u={value:!0},v.next=4,Rt(t,a,u);case 4:return v.abrupt("return",{dispose:function(){u.value&&a.abort("\u53D6\u6D88\u8BF7\u6C42")}});case 5:case"end":return v.stop()}},e)})),Oe.apply(this,arguments)}var dr=n(95336);function fr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.timeout,u=a===void 0?5e3:a,i=t.intervalTime,v=i===void 0?100:i,b=Date.now();return new Promise(function(j,S){var L=setInterval(function(){var C=e();C?(clearInterval(L),j(C)):Date.now()-b>u&&(S("timeout"),clearInterval(L))},v)})}function Wt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return fr(function(){return document.querySelector(e)},t)}var wt=n(43758);function Ht(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof e!="string")return a||console.warn(e,"is not valid json"),t?e:null;try{return JSON.parse(e)}catch(u){return a||console.warn(e,"is not valid json"),t?e:null}}function $t(e){for(var t=new TextEncoder,a=t.encode(e),u="",i=0;i<a.length;i++)u+=String.fromCharCode(a[i]);var v=btoa(u);return v}function zt(e){for(var t=atob(e),a=new Uint8Array(t.length),u=0;u<t.length;u++)a[u]=t.charCodeAt(u);var i=new TextDecoder("utf-8"),v=i.decode(a);return v}var vr=(0,x.Z)(l),mr=(0,x.Z)(y,!0),Ut=(0,x.Z)(M),Qt=(0,x.Z)(K,!0)},95336:function(pn,Q,n){n.d(Q,{JG:function(){return R},rb:function(){return N}});var y=n(26068),l=n.n(y),K=n(67825),M=n.n(K),H=n(75271),E=["maxWidth","maxHeight"];function B(){var D;return((D=window.g_config)===null||D===void 0?void 0:D.isIntl)||!1}var R=function(d){if(navigator.clipboard)navigator.clipboard.writeText(d);else{var x=document.createElement("textarea");document.body.appendChild(x),x.style.position="fixed",x.style.clip="rect(0 0 0 0)",x.style.top="10px",x.value=d,x.select(),document.execCommand("copy",!0),document.body.removeChild(x)}},N=function(d){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=x.maxWidth,h=x.maxHeight,f=M()(x,E);return l()({overlayInnerStyle:{maxWidth:o||326,maxHeight:h||150,overflowY:"auto",padding:"6px 12px"},title:d,arrow:!1},f)};function w(D){return React.isValidElement(D)}function A(D){var d=D||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(d)}var p=function(d){return d>=10?d:"0".concat(d)},m=function(d){if(d<60){var x=Math.ceil(d);return"0:".concat(p(x))}var o=Math.floor(d/60),h=Math.ceil(d%60);return"".concat(p(o),":").concat(p(h))}}}]);
