"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7114],{21245:function(fn,z,n){n.d(z,{Z:function(){return m}});var P=n(26068),c=n.n(P),Q=n(23655),Z=n(75271),U=n(53649),W=n.n(U),N=n(30764),I,E=(0,N.Z)(I||(I=W()([`

.`,"-anchor-wrapper .","-anchor .",`-anchor-link-title {
  color: var(--`,`-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.`,`-anchor-link {
  --`,`-anchor-link-padding-block: 0;
  --`,`-anchor-link-padding-inline-start: 0;
}
`])),function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix}),H=n(52676),R=(0,Z.forwardRef)(function(v){var B=E();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(B,{}),(0,H.jsx)(Q.Z,c()({},v))]})}),m=R},8639:function(fn,z,n){n.d(z,{Z:function(){return l}});var P=n(26068),c=n.n(P),Q=n(48305),Z=n.n(Q),U=n(67825),W=n.n(U),N=n(75271),I=n(82187),E=n.n(I),H=n(74659),R=n(32547),m=n(60213),v=n(53649),B=n.n(v),o=n(30764),S,u=(0,o.Z)(S||(S=B()([`
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
`])),function(g){return g.sparkPrefix},function(g){return g.sparkPrefix},function(g){return g.sparkPrefix}),C=n(52676),L=["controls","className","style"],d=(0,N.forwardRef)(function(g,A){var i=g.controls,T=g.className,p=g.style,k=W()(g,L),en=(0,m.getCommonConfig)(),G=en.sparkPrefix,an=u(),q=(0,N.useState)(0),Y=Z()(q,2),tn=Y[0],vn=Y[1],yn=(0,N.useState)(0),jn=Z()(yn,2),Bn=jn[0],on=jn[1],sn=(0,N.useState)(!1),w=Z()(sn,2),Tn=w[0],mn=w[1],gn=(0,R.Z)(g,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!1}),Sn=Z()(gn,2),un=Sn[0],ln=Sn[1],rn=(0,N.useRef)(null),Dn=(0,N.useRef)(!0),bn=function(En){rn.current=En,A&&(typeof A=="function"?A(En):A.current=En)};(0,N.useEffect)(function(){if(Dn.current){Dn.current=!1;return}rn.current&&k.src&&rn.current.load()},[k.src]),(0,N.useEffect)(function(){var hn;return Tn&&(hn=setInterval(function(){rn.current&&vn(rn.current.currentTime)},16)),function(){hn&&clearInterval(hn)}},[Tn]);var pn=function(En){var xn;rn.current&&on(rn.current.duration),(xn=k.onLoadedMetadata)===null||xn===void 0||xn.call(k,En)},Cn=function(){rn.current&&(Tn?rn.current.pause():rn.current.play(),mn(!Tn))},ee=function(En){var xn;mn(!0),(xn=k.onPlay)===null||xn===void 0||xn.call(k,En)},D=function(En){var xn;mn(!1),(xn=k.onPause)===null||xn===void 0||xn.call(k,En)},Fn=function(En){var xn,On;mn(!1),vn(((xn=rn.current)===null||xn===void 0?void 0:xn.duration)||0),(On=k.onEnded)===null||On===void 0||On.call(k,En)},Hn=function(En){rn.current&&(rn.current.currentTime=En,vn(En))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(an,{}),(0,C.jsxs)("div",{className:E()("".concat(G,"-audio-container"),T),style:p,children:[(0,C.jsx)("audio",c()(c()({ref:bn},k),{},{muted:un,className:"".concat(G,"-audio-element"),onLoadedMetadata:pn,onPlay:ee,onPause:D,onEnded:Fn})),(0,C.jsx)(H.Z,{className:"".concat(G,"-audio-controller-wrapper"),isPlaying:Tn,currentTime:tn,duration:Bn,enableVolume:!0,enableFullscreen:!1,muted:un,onMute:function(){return ln(!un)},onPlayPause:Cn,onProgressClick:Hn})]})]})}),l=d},93178:function(fn,z,n){n.d(z,{Z:function(){return u}});var P=n(26068),c=n.n(P),Q=n(48305),Z=n.n(Q),U=n(67825),W=n.n(U),N=n(67487),I=n(75271),E=n(53649),H=n.n(E),R=n(30764),m,v=(0,R.Z)(m||(m=H()([`
.`,`-avatar {
  cursor: default;
}
`])),function(C){return C.antPrefix}),B=n(52676),o=["children"],S=(0,I.forwardRef)(function(C,L){var d=v(),l=C.children,g=W()(C,o),A=(0,I.useState)(C.children),i=Z()(A,2),T=i[0],p=i[1];return(0,I.useEffect)(function(){if(typeof l=="string"){p(Array.from(l)[0]);return}if(typeof l=="number"){p(Array.from(String(l))[0]);return}p(l)},[l]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(d,{}),(0,B.jsx)(N.Z,c()(c()({ref:L},g),{},{children:T}))]})}),u=S},40:function(fn,z,n){n.d(z,{Z:function(){return L}});var P=n(26068),c=n.n(P),Q=n(67825),Z=n.n(Q),U=n(3999),W=n(11691),N=n(93178),I=n(38356),E=n(75271),H=n(60213),R=n(53649),m=n.n(R),v=n(30764),B,o=(0,v.Z)(B||(B=m()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix}),S=n(52676),u=["items"],C=function(l){var g=l.items,A=g===void 0?[]:g,i=Z()(l,u),T=(0,H.getCommonConfig)(),p=T.sparkPrefix,k=o(),en=E.useMemo(function(){return A.map(function(G){var an=G.title,q=[];return G.iconUrl&&q.push((0,S.jsx)(N.Z,{size:20,src:G.iconUrl},"avatar")),G.dropdown?q.push((0,S.jsxs)("span",{className:"".concat(p,"-breadcrumb-dropdown-title"),children:[G.title,(0,S.jsx)(U.Z,{size:16})]},"title")):q.push((0,S.jsx)("span",{children:G.title},"title")),G.dropdown?an=(0,S.jsx)(I.Z,{menu:{items:G.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(p,"-breadcrumb-dropdown"),children:(0,S.jsx)("span",{children:q})}):(G.iconUrl||q.length>1)&&(an=(0,S.jsx)("span",{className:"".concat(p,"-breadcrumb-item-content"),children:q})),c()(c()({},G),{},{title:an})})},[A]);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(k,{}),(0,S.jsx)(W.Z,c()(c()({},i),{},{items:en,className:"".concat(p,"-breadcrumb ").concat(i.className||"")}))]})},L=C},61902:function(fn,z,n){n.d(z,{Z:function(){return S}});var P=n(26068),c=n.n(P),Q=n(67825),Z=n.n(Q),U=n(60213),W=n(85770),N=n(82187),I=n.n(N),E=n(53649),H=n.n(E),R=n(30764),m,v=(0,R.Z)(m||(m=H()([`
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
`])),function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix}),B=n(52676),o=["title","info","children","className"],S=function(u){var C=u.title,L=u.info,d=u.children,l=u.className,g=Z()(u,o),A=v(),i=(0,U.getCommonConfig)(),T=i.sparkPrefix;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(A,{}),(0,B.jsx)(W.Z,c()(c()({className:I()("".concat(T,"-card"),l)},g),{},{title:null,children:(0,B.jsxs)("div",{className:"".concat(T,"-card-wrapper"),children:[C&&(0,B.jsx)("div",{className:"".concat(T,"-title"),children:C}),L&&(0,B.jsx)("div",{className:"".concat(T,"-info"),children:L}),d&&(0,B.jsx)("div",{className:"".concat(T,"-content"),children:d})]})}))]})}},98618:function(fn,z,n){n.d(z,{Z:function(){return S}});var P=n(26068),c=n.n(P),Q=n(67825),Z=n.n(Q),U=n(10758),W=n(75271),N=n(60213),I=n(53649),E=n.n(I),H=n(30764),R,m=(0,H.Z)(R||(R=E()([`
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
`])),function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix}),v=n(52676),B=["description","descriptionClassName","descriptionStyle","children"],o=function(C){var L=C.description,d=C.descriptionClassName,l=C.descriptionStyle,g=C.children,A=Z()(C,B),i=(0,N.getCommonConfig)(),T=i.antPrefix,p=i.sparkPrefix,k=m(),en={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(T,"-color-text-tertiary)")};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(k,{}),(0,v.jsxs)("div",{className:"".concat(p,"-checkbox"),children:[(0,v.jsx)(U.Z,c()(c()({},A),{},{children:g})),L&&(0,v.jsx)("div",{className:d,style:c()(c()({},en),l),children:L})]})]})};o.Group=U.Z.Group;var S=o},49570:function(fn,z,n){n.d(z,{ZP:function(){return Bn},xO:function(){return tn}});var P=n(26068),c=n.n(P),Q=n(15558),Z=n.n(Q),U=n(60213),W=n(23636),N=n(5012),I=n(2607),E=n(91237),H=n(44573),R=n(12652),m=n(23201),v=n(18932),B=n(37441),o=n(99362),S=n(68147),u=n(70300),C=n(24365),L=n(33792),d=n(86112),l=n(18893),g=n(72771),A=n(82187),i=n.n(A),T=n(28640),p=n(75271),k=n(53649),en=n.n(k),G=n(30764),an,q=(0,G.Z)(an||(an=en()([`
.`,`-code-block {
  width: 100%;

  /* CodeMirror \u4E3B\u9898\u6837\u5F0F */
  .cm-theme {
    border: none;
    border-radius: 0;
  }

  /* \u884C\u53F7\u69FD\u6837\u5F0F */
  .cm-gutters {
    border-right: none;
    background-color: var(--`,`-color-bg-base);
  }

  /* \u7F16\u8F91\u5668\u80CC\u666F */
  .cm-editor {
    background-color: var(--`,`-color-bg-base);
  }

  /* \u884C\u53F7\u5143\u7D20\u6837\u5F0F */
  .cm-gutterElement:not(:first-child) {
    color: var(--`,`-color-text-tertiary);
    min-height: 24px;
    line-height: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 0;
  }

  /* \u4EE3\u7801\u884C\u6837\u5F0F - \u4E0D\u8BBE\u7F6E\u56FA\u5B9A\u9AD8\u5EA6\uFF0C\u8BA9 CodeMirror \u81EA\u52A8\u8BA1\u7B97\u4EE5\u652F\u6301\u6362\u884C */
  .cm-line {
    min-height: 24px;
    line-height: 24px;
  }

  /* \u884C\u53F7\u5185\u8FB9\u8DDD */
  .cm-lineNumbers .cm-gutterElement {
    padding: 0px 4px 0px 12px;
  }

  /* \u5F53\u524D\u884C\u9AD8\u4EAE */
  .cm-activeLine,
  .cm-activeLineGutter {
    background-color: var(--`,`-color-fill-secondary);
  }

  /* \u6309\u94AE\u6837\u5F0F */
  .cm-button {
    background-image: none;
    background: var(--`,`-color-bg-base);
    border: 1px solid var(--`,`-color-border-secondary);
    border-radius: 4px;
    
    &:hover {
      color: var(--`,`-color-text-secondary);
      cursor: pointer;
    }
  }

  /* \u641C\u7D22\u9762\u677F\u6837\u5F0F */
  .cm-search {
    background: var(--`,`-color-fill-secondary);
  }

  .cm-panel.cm-search label {
    display: inline-flex;
    align-items: center;
  }

  .cm-panel.cm-search [name=close] {
    right: 8px;
    background: none;
    font-size: 16px;
    color: var(--`,`-color-text-tertiary);
  }

  /* \u6587\u672C\u8F93\u5165\u6846\u6837\u5F0F */
  .cm-textfield {
    border-radius: 4px;
  }

  .cm-panel.cm-search input[type=checkbox] {
    border: 1px solid var(--`,`-color-border-secondary);
  }

  /* \u805A\u7126\u6837\u5F0F */
  .cm-focused {
    outline: none;
  }
}
`])),function(on){return on.sparkPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix}),Y=n(52676),tn={javascript:[(0,v.eJ)()],jsx:[(0,v.eJ)()],python:[(0,u.Vs)()],json:[(0,B.AV)()],java:[(0,m.C)()],yaml:[(0,C.rV)()],php:[(0,S.h)()],go:[(0,H.go)()],csharp:[(0,I.N)()],css:[(0,E.iv)()],html:[(0,R.dy)()],curl:[],markdown:[(0,o.JH)()]},vn={javascript:[(0,L.Q2)()],json:[(0,L.Q2)(),(0,L.ir)((0,B.ap)())]},yn=function(){var sn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"{}",w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,Tn=sn;try{Tn=JSON.stringify(JSON.parse(sn),null,w)}catch(mn){}return Tn},jn=function(sn){var w,Tn=(0,U.getCommonConfig)(),mn=p.useContext(W.ZP.ConfigContext),gn=((w=mn.theme)===null||w===void 0?void 0:w.algorithm)===g.Z.darkAlgorithm,Sn=Tn.sparkPrefix,un=q(),ln=(0,p.useMemo)(function(){return sn.theme===void 0?gn?d.Pc:d.Zp:sn.theme==="dark"?d.Pc:d.Zp},[gn,sn.theme]),rn=(sn.extensions||[]).concat(typeof sn.language=="string"?[].concat(Z()(tn[sn.language]||[]),Z()(sn.value&&sn.language in vn?vn[sn.language]:[])):sn.language.reduce(function(pn,Cn){return[].concat(Z()(pn),[tn[Cn]])},[])),Dn=(0,Y.jsx)("div",{className:i()("".concat(Sn,"-code-block"),sn.className),children:(0,Y.jsx)(l.ZP,c()({extensions:rn,value:sn.language==="json"?yn(sn.value||""):sn.value||"",theme:ln},(0,T.Z)(sn,["language","theme","extensions","value"])))});if(sn.theme!==void 0){var bn=sn.theme==="dark"?N.bailianDarkTheme:N.bailianTheme;return(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(W.ZP,c()(c()({},bn),{},{children:[(0,Y.jsx)(un,{}),Dn]}))})}return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(un,{}),Dn]})},Bn=jn},94684:function(fn,z,n){n.d(z,{Z:function(){return R}});var P=n(26068),c=n.n(P),Q=n(24198),Z=n(53649),U=n.n(Z),W=n(30764),N,I=(0,W.Z)(N||(N=U()([`
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
`])),function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix}),E=n(52676),H=function(v){var B=I();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(B,{}),(0,E.jsx)(Q.Z,c()({},v))]})},R=H},61406:function(fn,z,n){n.d(z,{Z:function(){return d}});var P=n(26068),c=n.n(P),Q=n(82092),Z=n.n(Q),U=n(48305),W=n.n(U),N=n(60213),I=n(3999),E=n(16879),H=n(82187),R=n.n(H),m=n(75271),v=n(53649),B=n.n(v),o=n(30764),S,u=(0,o.Z)(S||(S=B()([`
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
`])),function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix}),C=n(52676),L=function(g){var A,i,T,p,k,en,G=g.collapsedHeight,an=g.expandedHeight,q=g.title,Y=q===void 0?"":q,tn=g.expandOnPanelClick,vn=g.extra,yn=g.children,jn=g.defaultExpanded,Bn=(0,m.useState)(jn),on=W()(Bn,2),sn=on[0],w=on[1],Tn=(0,m.useState)(!0),mn=W()(Tn,2),gn=mn[0],Sn=mn[1],un=(0,m.useState)(G),ln=W()(un,2),rn=ln[0],Dn=ln[1],bn=(0,m.useRef)(null),pn=(0,N.getCommonConfig)(),Cn=pn.sparkPrefix,ee=pn.antPrefix,D=u();(0,m.useEffect)(function(){bn.current&&Dn(sn&&an?an:sn?bn.current.scrollHeight:G)},[sn,G,an,yn]);var Fn=function(On){On.stopPropagation(),On.preventDefault(),w(function(ie){return!ie})},Hn=function(On){On.stopPropagation(),On.preventDefault(),sn||w(!0)},hn=function(){Sn(!0)},En=function(){Sn(!0)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(D,{}),(0,C.jsxs)("div",{className:R()("".concat(Cn,"-collapse-panel"),{collapsible:!sn&&tn},(A=g.classNames)===null||A===void 0?void 0:A.wrapper),style:(i=g.styles)===null||i===void 0?void 0:i.wrapper,onClick:tn?Hn:void 0,onMouseEnter:tn?hn:void 0,onMouseLeave:tn?En:void 0,children:[(0,C.jsxs)("div",{className:R()("".concat(Cn,"-collapse-panel-header"),(T=g.classNames)===null||T===void 0?void 0:T.header),style:(p=g.styles)===null||p===void 0?void 0:p.header,onClick:Fn,children:[(0,C.jsxs)("span",{className:"".concat(Cn,"-collapse-panel-title"),children:[Y,(0,C.jsxs)("div",{className:"".concat(Cn,"-collapse-panel-icon-wrapper"),children:[!sn&&gn&&tn&&(0,C.jsx)(I.Z,{style:{fontSize:"18px"}}),sn&&gn&&tn&&(0,C.jsx)(E.Z,{style:{fontSize:"18px"}})]})]}),vn&&(0,C.jsx)("div",{className:"".concat(Cn,"-collapse-panel-extra"),onClick:function(On){On.stopPropagation(),On.preventDefault()},children:vn})]}),(0,C.jsxs)("div",{className:R()("".concat(Cn,"-collapse-panel-content"),Z()({},"".concat(Cn,"-collapse-panel-expanded"),sn),(k=g.classNames)===null||k===void 0?void 0:k.content),style:c()({height:rn},(en=g.styles)===null||en===void 0?void 0:en.content),children:[(0,C.jsx)("div",{ref:bn,className:"".concat("".concat(Cn,"-collapse-panel-contentWrapper")," ",sn&&an?"scrollable":""),children:yn}),!sn&&(0,C.jsx)("div",{className:"".concat(Cn,"-collapse-panel-mask")})]})]})]})},d=L},84360:function(fn,z,n){n.d(z,{Z:function(){return A}});var P=n(26068),c=n.n(P),Q=n(67825),Z=n.n(Q),U=n(60213),W=n(57216),N=n(72771),I=n(86137),E=n(87133),H=n(82187),R=n.n(H),m=n(75271),v=n(53649),B=n.n(v),o=n(30764),S,u=(0,o.Z)(S||(S=B()([`
.`,`-picker {
  border-color: var(--`,`-color-border-secondary);
  background-color: var(--`,`-color-bg-base);
  
  &.`,`-picker-disabled {
    color: var(--`,`-color-text-quaternary);
    border-color: var(--`,`-color-border-secondary);
    background-color: var(--`,`-color-fill-tertiary);
    cursor: not-allowed;

    &:hover:not([disabled]) {
      border-color: var(--`,`-color-border-secondary);
      background-color: var(--`,`-color-fill-tertiary);
    }
    
    .`,`-picker-suffix {
      color: var(--`,`-color-text-quaternary);
    }
  }
  
  .`,`-picker-suffix {
    margin-left: 8px;
    color: var(--`,`-color-text-tertiary);
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

.`,"-picker-outlined.","-picker-status-error:not(.",`-picker-disabled) {
  .`,`-picker-suffix {
    color: var(--`,`-color-text-tertiary);
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

.`,"-picker-outlined.",`-picker-multiple {
  .`,`-picker-selection-item {
    background-color: var(--`,`-color-fill-tertiary);
  }
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
`])),function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix}),C=n(52676),L=["className","popupClassName"],d=["className","popupClassName"],l=function(T){var p=T.className,k=T.popupClassName,en=Z()(T,L),G=N.Z.useToken(),an=G.token,q=(0,U.getCommonConfig)(),Y=q.sparkPrefix,tn=u();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(tn,{}),(0,C.jsx)(I.ZP,{theme:{components:{DatePicker:{activeBorderColor:an.colorPrimary,paddingInline:8}}},children:(0,C.jsx)(E.default,c()({suffixIcon:(0,C.jsx)(W.Z,{style:{fontSize:"20px"}}),className:R()("".concat(Y,"-picker"),p),popupClassName:R()("".concat(Y,"-picker-dropdown"),k)},en))})]})},g=function(T){var p=T.className,k=T.popupClassName,en=Z()(T,d),G=N.Z.useToken(),an=G.token,q=(0,U.getCommonConfig)(),Y=q.sparkPrefix,tn=u();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(tn,{}),(0,C.jsx)(I.ZP,{theme:{components:{DatePicker:{activeBorderColor:an.colorPrimary,paddingInline:8}}},children:(0,C.jsx)(E.default.RangePicker,c()({suffixIcon:(0,C.jsx)(W.Z,{style:{fontSize:"20px"}}),className:R()("".concat(Y,"-picker"),p),popupClassName:R()("".concat(Y,"-picker-dropdown"),k),popupStyle:{padding:0}},en))})]})};l.RangePicker=g;var A=l},62518:function(fn,z,n){n.d(z,{Z:function(){return d}});var P=n(82092),c=n.n(P),Q=n(26068),Z=n.n(Q),U=n(67825),W=n.n(U),N=n(60213),I=n(72771),E=n(3307),H=n(82187),R=n.n(H),m=n(53649),v=n.n(m),B=n(30764),o,S=(0,B.Z)(o||(o=v()([`
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
`])),function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix}),u=n(52676),C=["className","layout","colon","style"],L=function(g){var A,i,T=S(),p=g.className,k=g.layout,en=g.colon,G=en===void 0?!1:en,an=g.style,q=W()(g,C),Y=(0,N.getCommonConfig)(),tn=Y.antPrefix,vn=I.Z.useToken(),yn=vn.token;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(T,{}),(0,u.jsx)(E.Z,Z()({className:R()(p,k==="vertical"&&"".concat(tn,"-descriptions-vertical")),layout:k,colon:G,style:Z()(c()(c()({},"--".concat(tn,"-descriptions-vertical-label-padding-bottom"),"".concat((A=yn.Descriptions.verticalLabelPaddingBottom)!==null&&A!==void 0?A:4,"px")),"--".concat(tn,"-descriptions-vertical-content-padding-bottom"),"".concat((i=yn.Descriptions.verticalContentPaddingBottom)!==null&&i!==void 0?i:24,"px")),an)},q))]})},d=L},38356:function(fn,z,n){n.d(z,{Z:function(){return B}});var P=n(26068),c=n.n(P),Q=n(60213),Z=n(68278),U=n(44201),W=n(75271),N=n(53649),I=n.n(N),E=n(30764),H,R=(0,E.Z)(H||(H=I()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),m=n(52676),v=function(S){var u,C,L=(0,Q.getCommonConfig)(),d=L.antPrefix,l=(0,W.useMemo)(function(){var A;if(!((A=S.menu)!==null&&A!==void 0&&A.selectable)||!S.menu){var i;return((i=S.menu)===null||i===void 0?void 0:i.items)||[]}return S.menu.items.map(function(T){var p={},k=T.label;return k&&(p.label=(0,m.jsxs)("div",{className:"".concat(d,"-dropdown-check-wrapper"),children:[k,(0,m.jsx)("span",{className:"".concat(d,"-dropdown-check-icon"),children:(0,m.jsx)(Z.Z,{})})]})),c()(c()({},T),p)})},[(u=S.menu)===null||u===void 0?void 0:u.items,(C=S.menu)===null||C===void 0?void 0:C.selectable]),g=R();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g,{}),(0,m.jsx)(U.Z,c()(c()({},S),{},{menu:c()(c()({},S.menu),{},{items:l}),overlayStyle:c()({},S.overlayStyle)}))]})},B=v},90895:function(fn,z,n){n.d(z,{Z:function(){return p}});var P=n(31759),c=n.n(P),Q=n(26068),Z=n.n(Q),U=n(67825),W=n.n(U),N=n(60213),I=n(62910),E=n(48290),H=n(85618),R=n(82187),m=n.n(R),v=n(75271),B=n(53649),o=n.n(B),S=n(30764),u,C=(0,S.Z)(u||(u=o()([`
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
`])),function(k){return k.sparkPrefix},function(k){return k.sparkPrefix},function(k){return k.antPrefix},function(k){return k.antPrefix},function(k){return k.antPrefix},function(k){return k.antPrefix},function(k){return k.antPrefix},function(k){return k.antPrefix},function(k){return k.sparkPrefix},function(k){return k.antPrefix},function(k){return k.antPrefix}),L=n(52676),d=["labelMarginRight"],l=["tooltip"],g=(0,v.forwardRef)(function(k,en){var G=k.labelMarginRight,an=G===void 0?void 0:G,q=W()(k,d),Y=(0,v.useRef)(null),tn=(0,N.getCommonConfig)(),vn=tn.sparkPrefix,yn=C();return(0,v.useImperativeHandle)(en,function(){return Y.current}),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(yn,{}),(0,L.jsx)(E.Z,Z()(Z()({},q),{},{className:m()(k.className,"".concat(vn,"-form"),an==="small"&&"".concat(vn,"-form-label-margin-small")),ref:Y,requiredMark:function(Bn,on){return(0,L.jsxs)(L.Fragment,{children:[Bn,on.required&&(0,L.jsx)("span",{className:"".concat(vn,"-required-mark"),children:"*"})]})}}))]})}),A=function(en){var G=en.tooltip,an=W()(en,l),q=(0,L.jsx)(I.Z,{});function Y(){if(G){var tn=c()(G)==="object"&&!v.isValidElement(G)?Z()(Z()({},G),{},{icon:G.icon||q}):{title:G,icon:q};return tn}}return(0,L.jsx)(E.Z.Item,Z()(Z()({},an),{},{tooltip:Y(),labelCol:en.labelCol||(en.layout==="vertical"?{flex:"unset"}:void 0)}))},i=A;i.useStatus=H.Z.useStatus;var T=g;T.Item=i,T.List=E.Z.List,T.ErrorList=E.Z.ErrorList,T.Provider=E.Z.Provider,T.useForm=E.Z.useForm,T.useFormInstance=E.Z.useFormInstance,T.useWatch=E.Z.useWatch;var p=T},70344:function(fn,z,n){n.d(z,{Z:function(){return S}});var P=n(26068),c=n.n(P),Q=n(40965),Z=n(60213),U=n(5045),W=n(92931),N=n(75271),I=n(53649),E=n.n(I),H=n(30764),R,m=(0,H.Z)(R||(R=E()([`
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
`])),function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix}),v=n(52676),B=function(C){var L=m(),d=(0,Z.getCommonConfig)(),l=d.antPrefix,g=(0,N.useMemo)(function(){var A={transitionName:""},i=C.preview;return i===!1?!1:i===!0?A:c()(c()({mask:(0,v.jsxs)("div",{className:"".concat(l,"-image-mask-info"),children:[(0,v.jsx)(U.Z,{className:"".concat(l,"-image-mask-info-icon")}),(0,v.jsx)("span",{className:"".concat(l,"-image-mask-info-text"),children:Q.Z.get({id:"components.commonComponents.Image.Preview",dm:"\u9884\u89C8"})})]})},i),A)},[C.preview]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(L,{}),(0,v.jsx)(W.Z,c()({preview:g},C))]})},o=B;o.PreviewGroup=W.Z.PreviewGroup;var S=o},38734:function(fn,z,n){n.d(z,{Z:function(){return l}});var P=n(26068),c=n.n(P),Q=n(82092),Z=n.n(Q),U=n(67825),W=n.n(U),N=n(60213),I=n(92108),E=n(82187),H=n.n(E),R=n(75271),m=n(53649),v=n.n(m),B=n(30764),o,S=(0,B.Z)(o||(o=v()([`
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
`])),function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),u=n(52676),C=["shape"],L=R.forwardRef(function(g,A){var i=g.shape,T=i===void 0?"default":i,p=W()(g,C),k=(0,N.getCommonConfig)(),en=k.antPrefix,G=S();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(G,{}),(0,u.jsx)(I.Z,c()(c()({},p),{},{className:H()(g.className,Z()({},"".concat(en,"-input-round"),T==="round")),ref:A}))]})}),d=R.forwardRef(function(g,A){var i=(0,N.getCommonConfig)(),T=i.antPrefix,p=S();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p,{}),(0,u.jsx)(I.Z.TextArea,c()(c()({},g),{},{className:H()("".concat(T,"-text-area"),g.className),ref:A}))]})});Object.assign(L,{TextArea:d,Search:I.Z.Search,Password:I.Z.Password,OTP:I.Z.OTP});var l=L},3983:function(fn,z,n){n.d(z,{Z:function(){return d}});var P=n(26068),c=n.n(P),Q=n(82092),Z=n.n(Q),U=n(67825),W=n.n(U),N=n(60213),I=n(6002),E=n(91301),H=n(82187),R=n.n(H),m=n(53649),v=n.n(m),B=n(30764),o,S=(0,B.Z)(o||(o=v()([`
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
`])),function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix}),u=n(52676),C=["showDivider","closable"],L=function(g){var A=S(),i=(0,N.getCommonConfig)(),T=i.sparkPrefix,p=g.showDivider,k=p===void 0?!0:p,en=g.closable,G=en===void 0?!0:en,an=W()(g,C),q=function(yn){return g.info?(0,u.jsxs)("div",{className:"".concat(T,"-modal-footer-wrapper"),children:[(0,u.jsx)("span",{className:"".concat(T,"-modal-footer-info"),children:g.info}),(0,u.jsx)("div",{className:"".concat(T,"-modal-footer-origin-node"),children:yn})]}):yn},Y=G?g.closeIcon||(0,u.jsx)(I.Z,{className:"".concat(T,"-modal-title-close"),onClick:function(yn){var jn;(jn=g.onCancel)===null||jn===void 0||jn.call(g,yn)}}):null,tn=g.footer===void 0?q:g.footer;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(A,{}),(0,u.jsx)(E.Z,c()(c()({},an),{},{closeIcon:null,title:(0,u.jsxs)("div",{className:"".concat(T,"-modal-title-wrapper"),children:[(0,u.jsx)("div",{className:"".concat(T,"-modal-title"),children:g.title}),Y]}),wrapClassName:R()("".concat(T,"-modal"),Z()({},"".concat(T,"-show-divider"),k),g.wrapClassName,"animate-in"),footer:tn,transitionName:""}))]})};L.useModal=E.Z.useModal,L.success=E.Z.success,L.error=E.Z.error,L.warning=E.Z.warning,L.info=E.Z.info,L.confirm=E.Z.confirm,L.SMALL_WIDTH=640,L.MEDIUM_WIDTH=800,L.LARGE_WIDTH=960;var d=L},94361:function(fn,z,n){var P=n(48305),c=n.n(P),Q=n(26068),Z=n.n(Q),U=n(60213),W=n(72566),N=n(68811),I=n(20855),E=n(18908),H=n(3749),R=n(52676),m=["success","warning","error","info"];function v(o,S){if(o==="success")return(0,R.jsx)(W.Z,{style:{color:"var(--".concat(S,"-color-success)"),fontSize:24}});if(o==="warning")return(0,R.jsx)(N.Z,{style:{color:"var(--".concat(S,"-color-warning)"),fontSize:24}});if(o==="info")return(0,R.jsx)(I.Z,{style:{color:"var(--".concat(S,"-color-info)"),fontSize:24}});if(o==="error")return(0,R.jsx)(E.Z,{style:{color:"var(--".concat(S,"-color-error)"),fontSize:24}})}var B={};B.destroy=H.ZP.destroy,B.open=function(o){var S=(0,U.getCommonConfig)(),u=S.sparkPrefix,C="".concat(u,"-notification");o.className&&(C+=" ".concat(o.className)),H.ZP.open(Z()(Z()({},o),{},{className:C}))},m.forEach(function(o){B[o]=function(S){var u=(0,U.getCommonConfig)(),C=u.sparkPrefix,L=u.antPrefix,d="".concat(C,"-notification");S.className&&(d+=" ".concat(S.className)),H.ZP[o](Z()(Z()({},S),{},{className:d,icon:v(o,L)}))}}),B.useNotification=function(o){var S=(0,U.getCommonConfig)(),u=S.sparkPrefix,C=S.antPrefix,L="".concat(u,"-notification"),d=H.ZP.useNotification(o),l=c()(d,2),g=l[0],A=l[1],i={};return m.forEach(function(T){i[T]=function(p){return g[T](Z()(Z()({},p),{},{className:p.className?"".concat(L," ").concat(p.className):L,icon:v(T,C)}))}}),i.open=function(T){g.open(Z()(Z()({},T),{},{className:T.className?"".concat(L," ").concat(T.className):L}))},i.destroy=g.destroy,[i,A]},z.Z=B},85525:function(fn,z,n){var P=n(26068),c=n.n(P),Q=n(31759),Z=n.n(Q),U=n(67825),W=n.n(U),N=n(60213),I=n(40965),E=n(86319),H=n(16979),R=n(34232),m=n(90264),v=n(89550),B=n(82187),o=n.n(B),S=n(47525),u=n(52676),C=["hideSwitchButton","className"],L=[10,20,50,100],d=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L,A=I.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"}),i=I.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"});return{options:g.map(function(T){return{label:"".concat(T," ").concat(A," / ").concat(i),value:Number(T)}})}};z.Z=function(l){var g=l.hideSwitchButton,A=g===void 0?!1:g,i=l.className,T=W()(l,C),p=(0,N.getCommonConfig)(),k=p.sparkPrefix,en=(0,S.X)(),G=function(){var tn=function(yn,jn,Bn){return jn==="jump-prev"||jn==="jump-next"?(0,u.jsx)(E.Z,{className:"".concat(k,"-jump-next-icon")}):A||l.itemRender?Bn:jn==="prev"?(0,u.jsx)("a",{children:(0,u.jsxs)(m.Z,{gap:8,children:[(0,u.jsx)(H.Z,{})," ",(0,u.jsx)("span",{children:I.Z.get({id:"components.commonComponents.Pagination.PreviousPage",dm:"\u4E0A\u4E00\u9875"})})]})}):jn==="next"?(0,u.jsx)("a",{children:(0,u.jsxs)(m.Z,{gap:8,children:[(0,u.jsx)("span",{children:I.Z.get({id:"components.commonComponents.Pagination.NextPage",dm:"\u4E0B\u4E00\u9875"})})," ",(0,u.jsx)(R.Z,{})]})}):Bn};return tn},an;T.showSizeChanger!==null&&T.showSizeChanger!==void 0?an=T.showSizeChanger:an=T.total&&T.total>50;var q=function(){return l.showSizeChanger===!1?!1:Z()(l.showSizeChanger)==="object"&&l.showSizeChanger?l.showSizeChanger:l.showSizeChanger===!0||T.total&&T.total>50?d(T.pageSizeOptions):!1};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(en,{}),(0,u.jsx)(v.Z,c()(c()({itemRender:G()},T),{},{showSizeChanger:q(),className:o()("".concat(k,"-pagination"),i)}))]})}},30959:function(fn,z,n){var P=n(26068),c=n.n(P),Q=n(67825),Z=n.n(Q),U=n(60213),W=n(88602),N=n(62910),I=n(99090),E=n(58911),H=n(95371),R=n(75271),m=n(52676),v=["icon","type","okButtonProps"],B=R.forwardRef(function(o,S){var u=o.icon,C=o.type,L=C===void 0?"confirm":C,d=o.okButtonProps,l=Z()(o,v),g=(0,U.getCommonConfig)(),A=g.antPrefix,i=function(){return u||(L==="confirm"?(0,m.jsx)(W.Z,{style:{color:"var(--".concat(A,"-color-warning)")}}):L==="info"?(0,m.jsx)(N.Z,{style:{color:"var(--".concat(A,"-color-info)")}}):L==="warning"?(0,m.jsx)(W.Z,{style:{color:"var(--".concat(A,"-color-warning)")}}):L==="error"?(0,m.jsx)(I.Z,{style:{color:"var(--".concat(A,"-color-error)")}}):L==="success"?(0,m.jsx)(E.Z,{style:{color:"var(--".concat(A,"-color-success)")}}):(0,m.jsx)(W.Z,{style:{color:"var(--".concat(A,"-color-warning)")}}))},T=function(){var k={};return["warning","error"].includes(L)&&(k.danger=!0),c()(c()({},k),d||{})};return(0,m.jsx)(H.Z,c()(c()({},l),{},{ref:S,icon:i(),okButtonProps:T()}))});z.Z=B},86298:function(fn,z,n){var P=n(26068),c=n.n(P),Q=n(60213),Z=n(65482),U=n(4369),W=n(75271),N=n(52676),I=W.forwardRef(function(E,H){var R=E.content===""||E.content===void 0||E.content===null,m=E.title===""||E.title===void 0||E.title===null,v=E.open!==void 0&&E.open!==null?E.open:R&&m?!1:void 0,B=(0,Q.getCommonConfig)(),o=B.antPrefix;return(0,N.jsx)(U.Z,c()(c()({},E),{},{arrow:E.arrow||!1,open:v,ref:H,getPopupContainer:E.getPopupContainer||function(S){return(0,Z.Q)(S,".".concat(o,"-app"))}}))});z.Z=I},40517:function(fn,z,n){n.d(z,{Z:function(){return gn},x:function(){return w}});var P=n(26068),c=n.n(P),Q=n(82092),Z=n.n(Q),U=n(15558),W=n.n(U),N=n(48305),I=n.n(N),E=n(67825),H=n.n(E),R=n(24884),m=n(99362),v=n(86112),B=n(18893),o=n(86137),S=n(72771),u=n(82187),C=n.n(u),L=n(8057),d=n(75271),l=n(53649),g=n.n(l),A=n(87571),i,T,p=(0,A.kc)(function(Sn){var un=Sn.css,ln=Sn.token;return{onCreate:un(i||(i=g()([`
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
  `])),ln.colorBorderSecondary,ln.colorBgContainer),cm:un(T||(T=g()([`
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

    /* \u53D8\u91CF\u9AD8\u4EAE\u6837\u5F0F */
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

    /* \u81EA\u52A8\u8865\u5168\u63D0\u793A\u6846\u6837\u5F0F */
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
  `])),ln.colorTextSecondary,ln.colorBlue,ln.colorPurple,ln.colorPurpleBg,ln.colorBgContainer,ln.colorText,ln.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:ln.colorBgBase,border:"1px solid ".concat(ln.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:ln.colorTextTertiary,backgroundColor:ln.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),k=n(25298),en=n.n(k),G=n(17069),an=n.n(G),q=n(25451),Y=new q.Y1({regexp:/\$\{([\w\u4e00-\u9fa5]+)\}/g,decoration:function(){return q.p.mark({class:"cm-prompt-var"})}}),tn=q.lg.fromClass(function(){function Sn(un){en()(this,Sn),Z()(this,"placeholders",void 0),this.placeholders=Y.createDeco(un)}return an()(Sn,[{key:"update",value:function(ln){this.placeholders=Y.updateDeco(ln,this.placeholders)}}]),Sn}(),{decorations:function(un){return un.placeholders}}),vn=[tn],yn=n(96594);function jn(){var Sn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],un=arguments.length>1?arguments[1]:void 0,ln=un.onCreate,rn=un.createBtnText;return(0,yn.ys)({override:[function(Dn){var bn,pn=Dn.matchBefore(/\/(\w+)?/);return!pn||pn&&pn.from===pn.to&&!Dn.explicit?null:{from:(bn=pn==null?void 0:pn.from)!==null&&bn!==void 0?bn:0,options:(ln?[].concat(W()(Sn),[{label:"/NEW_VAR",boost:-99}]):Sn).map(function(Cn){return c()(c()({},Cn),{},{displayLabel:Cn.label==="/NEW_VAR"?rn:Cn.label.slice(1),apply:function(D,Fn,Hn,hn){if(Fn.label==="/NEW_VAR")return D.dispatch({changes:{from:Hn,to:hn,insert:""}}),ln==null?void 0:ln();var En=Fn.label.slice(1),xn="${".concat(En,"}");D.dispatch({changes:{from:Hn,to:hn,insert:xn}})}})})}}]})}var Bn=n(60213),on=n(52676),sn=["maxLength","variables","onCreate","createBtnText","tipsText","extensions","className","value","onChange","readOnly","basicSetup"],w={markdown:[(0,m.JH)()]},Tn=[],mn=function(un){var ln,rn=un.maxLength,Dn=un.variables,bn=Dn===void 0?Tn:Dn,pn=un.onCreate,Cn=un.createBtnText,ee=Cn===void 0?"+ \u65B0\u589E\u53D8\u91CF":Cn,D=un.tipsText,Fn=un.extensions,Hn=un.className,hn=un.value,En=un.onChange,xn=un.readOnly,On=un.basicSetup,ie=H()(un,sn),xe=p(),Yn=xe.styles,Me=(0,d.useState)(!1),pe=I()(Me,2),Ze=pe[0],he=pe[1],De=d.useContext(o.ZP.ConfigContext),Pe=((ln=De.theme)===null||ln===void 0?void 0:ln.algorithm)===S.Z.darkAlgorithm,Oe=(0,Bn.getCommonConfig)(),ke=Oe.antPrefix,ye=(0,d.useMemo)(function(){return Pe?v.Pc:v.Zp},[Pe]),be=(0,d.useMemo)(function(){return rn?[L.yy.transactionFilter.of(function($n){if(!$n.docChanged||$n.newDoc.length<=rn)return $n;var Ie=$n.newDoc.length-rn,ue=[];return $n.changes.iterChanges(function(le,Rn,te,O,de){var wn=de.toString();if(wn.length>0){var Ce=Math.max(0,wn.length-Ie);ue.push({from:le,to:Rn,insert:wn.slice(0,Ce)})}else ue.push({from:le,to:Rn,insert:""})}),[{changes:ue,sequential:!0}]})]:[]},[rn]),ce=(0,d.useMemo)(function(){return[].concat(W()(Fn||[].concat(W()(w.markdown),W()(vn),[jn(W()(bn).map(function($n){return{label:"/".concat($n.code),info:$n.label}})||[],{onCreate:pn,createBtnText:ee})])),W()(be))},[bn,Fn,pn,ee,be]);(0,d.useEffect)(function(){return he(!0),function(){he(!1)}},[]);var Le=d.useMemo(function(){return D===!1?(0,on.jsx)("div",{className:Yn.tips}):D||(0,on.jsxs)("div",{className:Yn.tips,children:['\u8F93\u5165/"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,on.jsx)(R.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[D,Yn.tips]);return Ze?(0,on.jsxs)("div",{className:Yn.root,children:[(0,on.jsx)(B.ZP,c()({className:C()(Hn,Yn.cm,Z()({},Yn.onCreate,pn)),extensions:ce,value:hn,theme:ye,lang:"markdown",onChange:En,basicSetup:c()({lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1},On),readOnly:xn,editable:!xn},ie),ye),(0,on.jsxs)("div",{className:Yn.footer,children:[Le,rn?(0,on.jsxs)("div",{style:((hn==null?void 0:hn.length)||0)>rn?{color:"var(--".concat(ke,"-color-error)")}:void 0,children:[(hn==null?void 0:hn.length)||0,"/",rn]}):null]})]}):null},gn=(0,d.memo)(mn)},81483:function(fn,z,n){var P=n(26068),c=n.n(P),Q=n(67825),Z=n.n(Q),U=n(49327),W=n(52676),N=["texture"];z.Z=function(I){var E=I.texture,H=E===void 0?!1:E,R=Z()(I,N);return(0,W.jsx)(U.Z,c()(c()({},R),{},{texture:H}))}},77652:function(fn,z,n){n.d(z,{J:function(){return A},Z:function(){return T}});var P=n(26068),c=n.n(P),Q=n(82092),Z=n.n(Q),U=n(60213),W=n(7441),N=n(82187),I=n.n(N),E=n(75271),H=n(53649),R=n.n(H),m=n(30764),v,B=(0,m.Z)(v||(v=R()([`
.`,"-slider.","-slider.",`-slider-no-marks {
  margin: 0;
}
`])),function(p){return p.antPrefix},function(p){return p.sparkPrefix},function(p){return p.sparkPrefix}),o=n(67825),S=n.n(o),u=n(32496),C,L=(0,m.Z)(C||(C=R()([`
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
`])),function(p){return p.sparkPrefix},function(p){return p.sparkPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix}),d=n(52676),l=["styles","classNames","sliderProps","inputNumberProps"];function g(p){var k,en,G=(0,U.getCommonConfig)(),an=G.sparkPrefix,q=p.styles,Y=p.classNames,tn=p.sliderProps,vn=p.inputNumberProps,yn=S()(p,l),jn=L(),Bn=p.marks||((k=p.sliderProps)===null||k===void 0?void 0:k.marks)||null,on=Bn||Z()(Z()({},p.min,p.min),p.max,p.max),sn=Bn&&((en=Object.keys(Bn))===null||en===void 0?void 0:en.length)>0,w=function(mn){var gn=typeof mn=="string"?parseFloat(mn):mn;if(gn===null||isNaN(gn)){p.onChange(null);return}gn<p.min?p.onChange(p.min):gn>p.max?p.onChange(p.max):p.onChange(gn)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(jn,{}),(0,d.jsxs)("div",{style:q==null?void 0:q.wrapper,className:I()("".concat(an,"-slider-input"),Z()({},"".concat(an,"-slider-input-has-marks"),sn),Y==null?void 0:Y.wrapper),onMouseUp:function(){var mn;(mn=p.onBlur)===null||mn===void 0||mn.call(p)},children:[(0,d.jsx)(A,c()(c()(c()({disabled:p.disabled,min:p.min,max:p.max,step:p.step,tooltip:{getPopupContainer:function(mn){return mn}}},yn),tn),{},{marks:on,style:c()(c()(c()({},q==null?void 0:q.slider),tn==null?void 0:tn.style),{},{width:"100%"}),className:I()(Y==null?void 0:Y.slider,tn==null?void 0:tn.className),onChange:w,value:p.value===null?void 0:p.value})),(0,d.jsx)(u.Z,c()(c()({controls:!1,step:p.step,min:p.min,max:p.max,disabled:p.disabled},vn),{},{onBlur:function(){var mn;(mn=p.onBlur)===null||mn===void 0||mn.call(p)},value:p.value,onChange:w,style:c()(c()({},q==null?void 0:q.inputNumber),vn==null?void 0:vn.style),className:I()(Y==null?void 0:Y.inputNumber,vn==null?void 0:vn.className)}))]})]})}var A=E.forwardRef(function(p,k){var en=(0,U.getCommonConfig)(),G=en.sparkPrefix,an=en.antPrefix,q=B();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(q,{}),(0,d.jsx)(W.Z,c()(c()({},p),{},{className:I()("".concat(G,"-slider"),Z()(Z()({},"".concat(G,"-slider-no-marks"),!Object.keys(p.marks||{}).length),"".concat(an,"-slider-reverse"),p.reverse),p.className),ref:k}))]})}),i=A;Object.assign(i,{Input:g});var T=i},70076:function(fn,z,n){n.d(z,{Z:function(){return B}});var P=n(82092),c=n.n(P),Q=n(60213),Z=n(72771),U=n(22576),W=n(82187),N=n.n(W),I=n(53649),E=n.n(I),H=n(30764),R,m=(0,H.Z)(R||(R=E()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix}),v=n(52676),B=function(o){var S=o.indicator,u=o.spinning,C=u===void 0?!0:u,L=o.children,d=o.style,l=o.className,g=(0,Q.getCommonConfig)(),A=g.sparkPrefix,i=Z.Z.useToken(),T=m(),p=(0,v.jsxs)("svg",{className:"".concat(A,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,v.jsx)("defs",{children:(0,v.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,v.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,v.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,v.jsx)("g",{children:(0,v.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:i.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,v.jsx)("g",{children:(0,v.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:i.token.colorPrimary,fillOpacity:"1"})})]})]}),k=o.tip||o.showProgress&&(0,v.jsxs)("div",{children:[(0,v.jsxs)("span",{children:["loading",o.percent!==void 0&&o.percent!==null&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:o.percent}),"%"]})]}),(0,v.jsx)(U.Z,{percent:o.percent,showInfo:!1})]})||null;return L?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(T,{}),(0,v.jsxs)("div",{className:N()("".concat(A,"-spinner-overlay"),l),style:d,children:[(0,v.jsx)("div",{className:N()("".concat(A,"-spinner-content"),c()({},"".concat(A,"-spinning"),C)),children:L}),C&&(0,v.jsxs)("div",{className:"".concat(A,"-spinner"),children:[(0,v.jsx)("div",{className:"".concat(A,"-indicator"),children:S||p}),(0,v.jsx)("div",{className:"".concat(A,"-title"),children:k})]})]})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(T,{}),(0,v.jsx)("div",{className:N()("".concat(A,"-spinner"),l),style:d,children:C&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"".concat(A,"-indicator"),children:S||p}),(0,v.jsx)("div",{className:"".concat(A,"-title"),children:k})]})})]})}},75229:function(fn,z,n){n.d(z,{Z:function(){return R}});var P=n(26068),c=n.n(P),Q=n(468),Z=n(53649),U=n.n(Z),W=n(30764),N,I=(0,W.Z)(N||(N=U()([`
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
`])),function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix}),E=n(52676),H=function(v){var B=I();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(B,{}),(0,E.jsx)(Q.Z,c()({},v))]})},R=H},52849:function(fn,z,n){n.d(z,{Z:function(){return B}});var P=n(26068),c=n.n(P),Q=n(60213),Z=n(98852),U=n(82187),W=n.n(U),N=n(53649),I=n.n(N),E=n(30764),H,R=(0,E.Z)(H||(H=I()([`
.`,`-steps {
  .`,`-steps-item-container {
    display: flex;
    flex-direction: row;
  }
  
  .`,"-steps-item:not(.","-steps-item-active):not(.",`-steps-item-process) {
    .`,`-steps-item-container[role="button"] {
      &:hover {
        .`,`-steps-item-icon {
          border-color: transparent;
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
      border-color: transparent;
    }
  }

  .`,`-steps-item-finish {
    .`,`-steps-item-icon {
      background-color: var(--`,`-color-primary-bg);
      border-color: transparent;
    }

    .`,`-steps-icon {
      color: var(--`,`-color-primary);
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),m=n(52676),v=function(S){var u=(0,Q.getCommonConfig)(),C=u.sparkPrefix,L=R();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(L,{}),(0,m.jsx)(Z.Z,c()(c()({},S),{},{className:W()("".concat(C,"-steps"),S.className)}))]})},B=v},2567:function(fn,z,n){n.d(z,{Z:function(){return A}});var P=n(26068),c=n.n(P),Q=n(67825),Z=n.n(Q),U=n(60213),W=n(41246),N=n(72771),I=n(86137),E=n(34374),H=n(82187),R=n.n(H),m=n(75271),v=n(53649),B=n.n(v),o=n(30764),S,u=(0,o.Z)(S||(S=B()([`
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
`])),function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix}),C=n(52676),L=["className","popupClassName"],d=["className","popupClassName"],l=function(T){var p=T.className,k=T.popupClassName,en=Z()(T,L),G=N.Z.useToken(),an=G.token,q=(0,U.getCommonConfig)(),Y=q.sparkPrefix,tn=u();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(tn,{}),(0,C.jsx)(I.ZP,{theme:{components:{DatePicker:{activeBorderColor:an.colorPrimary}}},children:(0,C.jsx)(E.Z,c()({suffixIcon:(0,C.jsx)(W.Z,{}),className:R()("".concat(Y,"-picker"),p),popupClassName:R()("".concat(Y,"-picker-dropdown"),k)},en))})]})},g=function(T){var p=T.className,k=T.popupClassName,en=Z()(T,d),G=N.Z.useToken(),an=G.token,q=(0,U.getCommonConfig)(),Y=q.sparkPrefix,tn=u();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(tn,{}),(0,C.jsx)(I.ZP,{theme:{components:{DatePicker:{activeBorderColor:an.colorPrimary}}},children:(0,C.jsx)(E.Z.RangePicker,c()({suffixIcon:(0,C.jsx)(W.Z,{}),className:R()("".concat(Y,"-picker"),p),popupClassName:R()("".concat(Y,"-picker-dropdown"),k),popupStyle:{padding:0}},en))})]})};l.RangePicker=g;var A=l},95726:function(fn,z,n){n.d(z,{Z:function(){return L}});var P=n(26068),c=n.n(P),Q=n(67825),Z=n.n(Q),U=n(60213),W=n(84240),N=n(82187),I=n.n(N),E=n(53649),H=n.n(E),R=n(30764),m,v=(0,R.Z)(m||(m=H()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),B=n(52676),o=["className"],S=["className"],u=function(l){var g=l.className,A=Z()(l,o),i=(0,U.getCommonConfig)(),T=i.sparkPrefix,p=v();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(p,{}),(0,B.jsx)(W.Z,c()({className:I()("".concat(T,"-upload"),g)},A))]})},C=function(l){var g=l.className,A=Z()(l,S),i=(0,U.getCommonConfig)(),T=i.sparkPrefix,p=v();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(p,{}),(0,B.jsx)(W.Z.Dragger,c()({className:I()("".concat(T,"-upload"),g)},A))]})};u.Dragger=C,u.LIST_IGNORE=W.Z.LIST_IGNORE;var L=u},86822:function(fn,z,n){n.d(z,{Z:function(){return U}});var P=n(26068),c=n.n(P),Q=n(75271),Z=new Map;function U(W){var N=W.globalStyle,I=W.name;(0,Q.useLayoutEffect)(function(){var E=Z.get(N)||0;if(E)Z.set(N,c()(c()({},E),{},{count:E.count+1}));else{var H=document.createElement("style"),R=Math.random().toString(36).slice(2);H.innerHTML=N,H.dataset.id=R,H.dataset.flag="bailian-ui-use-style",I&&H.setAttribute("name",I),document.head.appendChild(H),Z.set(N,{count:1,id:R})}return function(){var m=Z.get(N);Z.set(N,c()(c()({},m),{},{count:m.count-1})),setTimeout(function(){var v=Z.get(N);if((v==null?void 0:v.count)<=0){var B;Z.delete(N),(B=document.head.querySelector('[data-id="'+v.id+'"]'))===null||B===void 0||B.remove()}},100)}},[N])}},5012:function(fn,z,n){n.r(z),n.d(z,{Alert:function(){return u.Z},AlertDialog:function(){return p.default},Anchor:function(){return k.Z},Audio:function(){return Vr.Z},Avatar:function(){return en.Z},Badge:function(){return C.Z},Breadcrumb:function(){return G.Z},Button:function(){return an.Z},Card:function(){return q.Z},Cascader:function(){return L.Z},Checkbox:function(){return Y.Z},CodeBlock:function(){return tn.ZP},CodeBlockLangExtensionsMap:function(){return tn.xO},Collapse:function(){return vn.Z},CollapsePanel:function(){return yn.Z},ConfigProvider:function(){return $t.ZP},DatePicker:function(){return jn.Z},Descriptions:function(){return Gr.Z},Drawer:function(){return Bn.Z},Dropdown:function(){return on.Z},EllipsisTip:function(){return Fn},Empty:function(){return Hn.Z},FileCard:function(){return ar.s},FileIcon:function(){return ar.Z},FloatButton:function(){return d.Z},Form:function(){return hn.Z},HelpIcon:function(){return Me},IconButton:function(){return xn.Z},IconFont:function(){return pe.Z},Image:function(){return Ze.Z},Input:function(){return he.Z},InputNumber:function(){return l.Z},MdEditor:function(){return ce.Z},MdEditorLangExtensionsMap:function(){return ce.x},MediaPreview:function(){return Jr.Z},MobileAlertDialog:function(){return mt},MobileDrawer:function(){return bt},MobileModal:function(){return St},Modal:function(){return Pe.Z},Pagination:function(){return ke.Z},Popconfirm:function(){return ye.Z},Popover:function(){return be.Z},Progress:function(){return g.Z},PromptsEditor:function(){return ce.Z},Radio:function(){return A.ZP},RadioButton:function(){return Le.default},Result:function(){return $n.Z},Select:function(){return i.default},Skeleton:function(){return T.Z},SlateEditor:function(){return Qr},Slider:function(){return tr.Z},SliderSelector:function(){return qr},Spinner:function(){return Kr.Z},Statistic:function(){return _r.Z},Steps:function(){return Ie.Z},Switch:function(){return nt.Z},Table:function(){return et.Z},Tabs:function(){return rt.Z},Tag:function(){return tt.Z},TimePicker:function(){return at.Z},Tooltip:function(){return ie.Z},Upload:function(){return ot.Z},Video:function(){return it.Z},bailianDarkTheme:function(){return Tr},bailianTheme:function(){return Er},base64Decoder:function(){return zt},base64Encoder:function(){return Ut},carbonDarkTheme:function(){return Kt},carbonTheme:function(){return Qt},copy:function(){return jr.JG},delay:function(){return pr},generateTheme:function(){return o},generateThemeByToken:function(){return S.Z},getCommonConfig:function(){return gn.getCommonConfig},message:function(){return De.Z},notification:function(){return Oe.Z},parseJsonSafely:function(){return wt},purpleDarkTheme:function(){return Tr},purpleTheme:function(){return Er},renderTooltip:function(){return jr.rb},requestPop:function(){return Pr},requestPopSse:function(){return Wt},requestSse:function(){return Cr},safeHtml:function(){return Tt.t},setCommonConfig:function(){return gn.setCommonConfig},useCommonConfig:function(){return gn.useCommonConfig},useGlobalStyle:function(){return Et.Z},waitForDom:function(){return Ht},waitForFunc:function(){return Sr}});var P=n(23577),c=n(19888),Q=n(44719),Z=n(57249),U=function(r){var t=r.r/255,s=r.g/255,a=r.b/255,f=t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4),x=s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4),y=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4);return .2126*f+.7152*x+.0722*y},W=function(r){var t=U(r);return t>.5},N=function(r){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},I=function(r,t,s){return"#"+((1<<24)+(r<<16)+(t<<8)+s).toString(16).slice(1).toUpperCase()},E=function(r,t,s){var a=r/255,f=t/255,x=s/255,y=Math.max(a,f,x),b=Math.min(a,f,x),M,h,j=(y+b)/2;if(y===b)M=h=0;else{var K=y-b;switch(h=j>.5?K/(2-y-b):K/(y+b),y){case a:M=((f-x)/K+(f<x?6:0))/6;break;case f:M=((x-a)/K+2)/6;break;case x:M=((a-f)/K+4)/6;break;default:M=0}}return{h:M*360,s:h*100,l:j*100}},H=function(r,t,s){var a=r/360,f=t/100,x=s/100,y,b,M;if(f===0)y=b=M=x;else{var h=function(X,nn,dn){var $=dn;return $<0&&($+=1),$>1&&($-=1),$<.16666666666666666?X+(nn-X)*6*$:$<.5?nn:$<.6666666666666666?X+(nn-X)*(.6666666666666666-$)*6:X},j=x<.5?x*(1+f):x+f-x*f,K=2*x-j;y=h(K,j,a+1/3),b=h(K,j,a),M=h(K,j,a-1/3)}return{r:Math.round(y*255),g:Math.round(b*255),b:Math.round(M*255)}},R=function(r,t){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=N(r);if(!a)return r;var f=E(a.r,a.g,a.b);f.l=Math.max(0,Math.min(100,f.l+t)),f.s=Math.max(0,Math.min(100,f.s+s));var x=H(f.h,f.s,f.l);return I(x.r,x.g,x.b)},m=function(r,t){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=N(r);if(!a)return r;var f=E(a.r,a.g,a.b);f.l=t,s!==null&&(f.s=s);var x=H(f.h,f.s,f.l);return I(x.r,x.g,x.b)},v=function(r,t){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,a=N(r);if(!a)return r;var f=E(a.r,a.g,a.b);f.l=t,f.s=Math.max(0,Math.min(100,f.s*s));var x=H(f.h,f.s,f.l);return I(x.r,x.g,x.b)},B=function(r){var t=r.primaryHex,s=r.darkMode,a=s===void 0?!1:s,f=r.bgBaseHex||(a?"#000000":"#ffffff"),x=r.textBaseHex||(a?"#E7E7ED":"#1a1a1a"),y=N(t);if(!y)return null;var b=E(y.r,y.g,y.b),M=N(f),h=N(x),j=M?E(M.r,M.g,M.b):{h:210,s:8,l:a?5:99},K=Math.max(8,Math.min(b.s,40)),_=Math.max(12,Math.min(b.s*.6,35)),X=a?m(t,Math.max(b.l-5,42),b.s*.95):t,nn=N(X),dn=nn?E(nn.r,nn.g,nn.b):b,$={borderRadiusXS:c.borderRadiusXS,borderRadiusSM:c.borderRadiusSM,borderRadius:c.borderRadius,borderRadiusLG:c.borderRadiusLG,borderRadiusXL:c.borderRadiusXL,borderRadiusFull:c.borderRadiusFull,wireframe:c.wireframe,colorPrimary:a?m(t,Math.max(b.l-5,42),b.s*.95):t,colorPrimaryHover:a?m(t,Math.min(b.l+10,55),b.s*.95):R(t,b.l<50?10:-10,0),colorPrimaryActive:a?m(t,Math.max(b.l-10,35),b.s*.95):R(t,b.l<50?-10:-20,0),colorPrimaryBg:a?m(t,13,K*.6):m(t,96,K*.8),colorPrimaryBgHover:a?m(t,13,K*.6):m(t,94,K),colorPrimaryBorder:a?m(t,17,_*.8):m(t,88,_*.8),colorPrimaryBorderHover:a?m(t,22,_):m(t,82,_),colorPrimaryText:a?m(t,Math.max(b.l-5,42),b.s*.95):t,colorPrimaryTextHover:a?m(t,Math.min(b.l+10,55),b.s*.95):R(t,b.l<50?10:-10,0),colorPrimaryTextActive:a?m(t,Math.max(b.l-10,35),b.s*.95):R(t,b.l<50?-10:-20,0),colorTextOnPrimary:W(nn)?"#000000":"#ffffff",colorTextBase:x,colorText:"rgba(".concat(h.r,", ").concat(h.g,", ").concat(h.b,", 0.88)"),colorTextSecondary:"rgba(".concat(h.r,", ").concat(h.g,", ").concat(h.b,", 0.65)"),colorTextTertiary:"rgba(".concat(h.r,", ").concat(h.g,", ").concat(h.b,", 0.45)"),colorTextQuaternary:"rgba(".concat(h.r,", ").concat(h.g,", ").concat(h.b,", 0.25)"),colorTextWhite:"#fff",colorBgBase:f,colorBgContainer:a?v(f,Math.min(j.l+b.l*.08,12),1.2):v(f,Math.max(100-b.l*.05,96),.8),colorBgElevated:a?v(f,Math.min(j.l+3,8),1.2):f,colorBgLayout:f,colorBgSpotlight:a?"rgba(".concat(N(v(f,28,1.2)).r,", ").concat(N(v(f,28,1.2)).g,", ").concat(N(v(f,28,1.2)).b,", 0.85)"):"rgba(".concat(h.r,", ").concat(h.g,", ").concat(h.b,", 0.85)"),colorBgMask:a?"rgba(".concat(M.r,", ").concat(M.g,", ").concat(M.b,", 0.8)"):"rgba(".concat(h.r,", ").concat(h.g,", ").concat(h.b,", 0.45)"),colorBorder:a?"rgba(".concat(N(v(f,28,2)).r,", ").concat(N(v(f,28,2)).g,", ").concat(N(v(f,28,2)).b,", 0.8)"):v(f,81,2.5),colorBorderSecondary:a?"rgba(".concat(N(v(f,22,1.8)).r,", ").concat(N(v(f,22,1.8)).g,", ").concat(N(v(f,22,1.8)).b,", 0.8)"):v(f,88,2),colorFill:a?"rgba(".concat(h.r,", ").concat(h.g,", ").concat(h.b,", 0.18)"):v(f,81,2.5)+"5c",colorFillSecondary:a?"rgba(".concat(h.r,", ").concat(h.g,", ").concat(h.b,", 0.12)"):v(f,81,2.5)+"33",colorFillTertiary:a?"rgba(".concat(h.r,", ").concat(h.g,", ").concat(h.b,", 0.08)"):v(f,81,2.5)+"26",colorFillQuaternary:a?"rgba(".concat(h.r,", ").concat(h.g,", ").concat(h.b,", 0.04)"):v(f,81,2.5)+"1a",colorFillDisable:a?v(x,55,.8):v(f,86,1.8),colorLink:a?m(t,Math.max(b.l-5,42),b.s*.95):t,colorInfo:a?P.colorInfo:c.colorInfo,colorInfoHover:a?P.colorInfoHover:c.colorInfoHover,colorInfoText:a?P.colorInfoText:c.colorInfoText,colorInfoBg:a?P.colorInfoBg:c.colorInfoBg,colorInfoBgHover:a?P.colorInfoBgHover:c.colorInfoBgHover,colorInfoBorder:a?P.colorInfoBorder:c.colorInfoBorder,colorInfoBorderHover:a?P.colorInfoBorderHover:c.colorInfoBorderHover,colorSuccess:a?P.colorSuccess:c.colorSuccess,colorSuccessHover:a?P.colorSuccessHover:c.colorSuccessHover,colorSuccessBg:a?P.colorSuccessBg:c.colorSuccessBg,colorSuccessBgHover:a?P.colorSuccessBgHover:c.colorSuccessBgHover,colorSuccessBorder:a?P.colorSuccessBorder:c.colorSuccessBorder,colorSuccessBorderHover:a?P.colorSuccessBorderHover:c.colorSuccessBorderHover,colorWarning:a?P.colorWarning:c.colorWarning,colorWarningHover:a?P.colorWarningHover:c.colorWarningHover,colorWarningBg:a?P.colorWarningBg:c.colorWarningBg,colorWarningBgHover:a?P.colorWarningBgHover:c.colorWarningBgHover,colorWarningBorder:a?P.colorWarningBorder:c.colorWarningBorder,colorWarningBorderHover:a?P.colorWarningBorderHover:c.colorWarningBorderHover,colorError:a?P.colorError:c.colorError,colorErrorHover:a?P.colorErrorHover:c.colorErrorHover,colorErrorBg:a?P.colorErrorBg:c.colorErrorBg,colorErrorBgHover:a?P.colorErrorBgHover:c.colorErrorBgHover,colorErrorBorder:a?P.colorErrorBorder:c.colorErrorBorder,colorErrorBorderHover:a?P.colorErrorBorderHover:c.colorErrorBorderHover,colorPurple:a?P.colorPurple:c.colorPurple,colorPurpleHover:a?P.colorPurpleHover:c.colorPurpleHover,colorPurpleBg:a?P.colorPurpleBg:c.colorPurpleBg,colorPink:a?P.colorPink:c.colorPink,colorPinkHover:a?P.colorPinkHover:c.colorPinkHover,colorPinkBg:a?P.colorPinkBg:c.colorPinkBg,colorYellow:a?P.colorYellow:c.colorYellow,colorYellowHover:a?P.colorYellowHover:c.colorYellowHover,colorYellowBg:a?P.colorYellowBg:c.colorYellowBg,colorOrange:a?P.colorOrange:c.colorOrange,colorOrangeHover:a?P.colorOrangeHover:c.colorOrangeHover,colorOrangeBg:a?P.colorOrangeBg:c.colorOrangeBg,colorTeal:a?P.colorTeal:c.colorTeal,colorTealHover:a?P.colorTealHover:c.colorTealHover,colorTealBg:a?P.colorTealBg:c.colorTealBg,colorBlue:a?P.colorBlue:c.colorBlue,colorBlueHover:a?P.colorBlueHover:c.colorBlueHover,colorBlueBg:a?P.colorBlueBg:c.colorBlueBg,colorMauve:a?P.colorMauve:c.colorMauve,colorMauveHover:a?P.colorMauveHover:c.colorMauveHover,colorMauveBg:a?P.colorMauveBg:c.colorMauveBg,colorSlate:a?P.colorSlate:c.colorSlate||"#1E293B",colorSlateHover:a?P.colorSlateHover:c.colorSlateHover||"#475569",colorSlateBg:a?P.colorSlateBg:c.colorSlateBg||"#E2E8F0",colorLavender:a?P.colorLavender:c.colorLavender||"#A77BFF",colorLavenderHover:a?P.colorLavenderHover:c.colorLavenderHover||"#BB99FF",colorLavenderBg:a?P.colorLavenderBg:c.colorLavenderBg||"rgba(226, 212, 255, 0.8)",boxShadow:a?P.boxShadow:c.boxShadow,boxShadowSecondary:a?P.boxShadowSecondary:c.boxShadowSecondary,boxShadowTertiary:a?P.boxShadowTertiary:c.boxShadowTertiary,boxShadowTertiaryLeft:a?P.boxShadowTertiaryLeft:c.boxShadowTertiaryLeft,boxShadowInput:a?P.boxShadowInput:c.boxShadowInput};return $},o=B,S=n(18729),u=n(80017),C=n(49339),L=n(96320),d=n(45365),l=n(32496),g=n(22576),A=n(6944),i=n(45908),T=n(86585),p=n(7481),k=n(21245),en=n(93178),G=n(40),an=n(60823),q=n(61902),Y=n(98618),tn=n(49570),vn=n(94684),yn=n(61406),jn=n(84360),Bn=n(19743),on=n(38356),sn=n(26068),w=n.n(sn),Tn=n(31759),mn=n.n(Tn),gn=n(60213),Sn=n(89462),un=n(82187),ln=n.n(un),rn=n(75271),Dn=n(53649),bn=n.n(Dn),pn=n(30764),Cn,ee=(0,pn.Z)(Cn||(Cn=bn()([`
div.`,`-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`])),function(e){return e.sparkPrefix}),D=n(52676);function Fn(e){var r=e.className,t=r===void 0?"":r,s=e.style,a=s===void 0?{}:s,f=e.children,x=e.rows,y=x===void 0?1:x,b=e.tooltip,M=e.tooltipMaxHeight,h=M===void 0?"90vh":M,j=(0,gn.getCommonConfig)(),K=j.sparkPrefix,_=ee();function X(){var nn={maxHeight:h,overflow:"auto"};if(mn()(b)==="object"){var dn=b,$=dn.title,V=dn.styles;return{title:$||f,styles:w()(w()({},V),{},{body:w()(w()({},nn),V==null?void 0:V.body)})}}return{title:b||f,styles:{body:nn}}}return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(_,{}),(0,D.jsx)(Sn.Z.Paragraph,{className:ln()("".concat(K,"-ellipsis-tip"),t),style:a,ellipsis:{rows:y,tooltip:X()},children:f})]})}var Hn=n(49327),hn=n(90895),En=n(20855),xn=n(94662),On=n(39862),ie=n(19546),xe,Yn=(0,pn.Z)(xe||(xe=bn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix});function Me(e){var r=(0,On.X)(),t=Yn(),s=e.style,a=e.content,f=e.className,x=e.popoverProps,y=(0,gn.getCommonConfig)(),b=y.sparkPrefix;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(r,{}),(0,D.jsx)(t,{}),(0,D.jsx)(ie.Z,w()(w()({title:a,overlayInnerStyle:{maxWidth:376},trigger:"hover",style:s},x),{},{children:(0,D.jsx)(xn.Z,{className:ln()("".concat(b,"-help-icon"),f),icon:(0,D.jsx)(En.Z,{}),shape:"circle",bordered:!1,size:"small"})}))]})}var pe=n(48004),Ze=n(70344),he=n(38734),De=n(39971),Pe=n(3983),Oe=n(94361),ke=n(85525),ye=n(30959),be=n(86298),ce=n(40517),Le=n(8893),$n=n(81483),Ie=n(52849),ue=n(48305),le=n.n(ue),Rn=n(40965),te=n(86212),O=n(75040),de=n(28533),wn=n(20335),Ce,Nr=(0,pn.Z)(Ce||(Ce=bn()([`
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
`]))),Br=n(15558),qe=n.n(Br),Mr=(0,rn.memo)(function(e){var r=e.attributes,t=e.children;return(0,D.jsx)("div",w()(w()({},r),{},{style:{marginTop:"8px"},children:t}))}),_e,Zr=(0,pn.Z)(_e||(_e=bn()([`
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
`]))),Dr=(0,rn.memo)(function(e){var r=e.attributes,t=e.renderVarLabel,s=Zr();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(s,{}),(0,D.jsxs)("span",w()(w()({},r),{},{children:[e.children,(0,D.jsx)("span",{className:"spark-editor-var-tag",children:t?t(e.element.code):e.element.label})]}))]})}),Vt=function(r){return Object.keys(r).map(function(t){return{label:r[t].label,desc:r[t].desc,value:t}})},Or=[{code:"s",isParagraph:!0,out:[],inner:[],name:Rn.Z.get({id:"components.SlateEditor.utils.constant.Paragraph",dm:"\u6BB5\u843D"}),render:Mr,type:"double"},{code:"var",isParagraph:!1,out:["s"],inner:[],name:Rn.Z.get({id:"components.SlateEditor.utils.constant.Variable",dm:"\u53D8\u91CF"}),render:Dr,isInline:!0,isVoid:!0,type:"single"}],Re=function(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},Gt=function(r){return r.replace(/&/g,"&amp;").replace(/{/g,"").replace(/}/g,"").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},kr=function(r){return r.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")},Ae=function e(r,t){var s="",a=t||{},f=a.tagRules,x=f===void 0?{}:f;return r.forEach(function(y,b){if(O.W_.isElement(y)){var M=x[y.type];if(!M)s+=Re(y.text);else switch(M.code){case"image":s+="![".concat(y.fileName,"](").concat(y.src,")");break;case"pdf":s+="[".concat(y.fileName,"](").concat(y.src,")");break;case"s":s+="".concat(e(y.children,t)).concat(b<r.length-1?`
`:"");break;case"var":s+="${".concat(y.code,"}");default:break}}else s+=Re(y.text)}),s},nr=function(r,t){if(r&&r.children.length){var s=Ae(r.children,t);return s==="<s></s>"?"":kr(s)}return""},je=function(r){if(!r)return"";var t="",s=Re(r).replace(/\$\{([^{}]+?)\}/g,function(a,f){return'<var code="'.concat(f,'" label="${').concat(f,'}" />')});return s.split(`
`).forEach(function(a){t+="<s>".concat(a,"</s>")}),"<speak>".concat(t,"</speak>")},Lr=function e(r){var t,s=[];return(r==null||(t=r.childNodes)===null||t===void 0?void 0:t.length)>0&&r.childNodes.forEach(function(a,f,x){var y=a.nodeType,b=a.nodeName;if(y===1){for(var M={},h=0;h<a.attributes.length;h++){var j=a.attributes[h],K=j.nodeName,_=j.nodeValue;M[K]=_}var X=w()({type:b},M);a.childNodes.length>0?X.children=e(a):X.children=[{text:""}],s.push(X),b!=="s"&&(f>0&&x[f-1].nodeType===1&&s.unshift({text:""}),f===x.length-1&&s.push({text:""}))}else y===3&&s.push({text:a.nodeValue||""})}),s},Se=function(r){if(r){var t=new DOMParser().parseFromString(r,"text/xml");return Lr(t)}},Ir=function(r){if(!r||r.includes("</speak>"))return r;var t=r;return t.includes("<s>")||(t="<s>".concat(t,"</s>")),"<speak>".concat(t,"</speak>")},er=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t={};return[].concat(qe()(r),qe()(Or)).forEach(function(s){t[s.code]||(t[s.code]=s)}),t},Rr=n(90228),Zn=n.n(Rr),Ar=n(87999),Xn=n.n(Ar),rr=function(r,t,s){if(!(!r||!t)){var a=r.selection,f=null;a&&(f=a.focus),s!=null&&s.at&&(f=s==null?void 0:s.at),f||(f={path:[0,0],offset:0});var x=f,y=x.path,b=x.offset,M=O.NB.get(r,O.y$.parent(y));if(!O.ML.isVoid(r,M)){var h=O.NB.string(O.NB.get(r,y)),j=h.substring(0,b-(s!=null&&s.deletePrefix?1:0)),K=h.substring(b,h.length);O.ML.withoutNormalizing(r,function(){r.apply({type:"insert_node",node:{text:K},path:y}),r.apply({type:"insert_node",node:t,path:y}),r.apply({type:"insert_node",node:{text:j},path:y});var _=O.y$.next(O.y$.next(O.y$.next(y)));r.apply({type:"remove_node",path:_,node:O.NB.get(r,_)});var X={path:O.y$.next(O.y$.next(y)),offset:0};r.apply({type:"set_selection",properties:null,newProperties:{anchor:X,focus:X}}),wn.F3.focus(r),r.onChange()})}}},Fr=function(){var e=Xn()(Zn()().mark(function r(t,s,a){var f,x,y,b,M,h,j,K,_,X,nn,dn,$,V,Pn,Nn,zn,Mn,An,_n,kn,ae,Qn,oe,Kn,Vn,re,Ln,In,Wn,Gn,cn;return Zn()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:if(!(!t||!s)){J.next=2;break}return J.abrupt("return");case 2:if(x=t.selection,y=a||{},b=y.tip,M=y.selection,h=M===void 0?x:M,j=a==null||(f=a.rules)===null||f===void 0?void 0:f[s.type],!(h&&!O.e6.isCollapsed(h))){J.next=45;break}if(_=O.NB.fragment(t,h),X=Ee(_),X!==""){J.next=10;break}return J.abrupt("return");case 10:if(nn=Te(O.e6.edges(h)),dn=le()(nn,2),$=dn[0],V=dn[1],O.ML.isVoid(t,O.NB.get(t,O.y$.parent($.path)))&&($.path=O.y$.next(O.y$.parent($.path)),$.offset=0),O.ML.isVoid(t,O.NB.get(t,O.y$.parent(V.path)))&&(V.path=O.y$.previous(O.y$.parent(V.path)),V.offset=O.NB.string(O.NB.get(t,V.path)).length),O.y$.hasPrevious(V.path)&&O.NB.get(t,O.y$.parent($.path))===O.NB.get(t,O.y$.previous(V.path))&&$.offset===0&&V.offset===0&&(Pn=O.y$.previous(O.y$.parent($.path)),Nn=O.NB.get(t,Pn),$.path=Pn,$.offset=Nn.text.length),O.NB.parent(t,$.path)!==O.NB.parent(t,V.path)){for(zn=O.NB.get(t,$.path),Mn=Ee(O.NB.fragment(t,{anchor:{path:V.path,offset:0},focus:V}));O.xv.isText(zn)&&zn.text===""&&X===Mn;)$.path.splice($.path.length-1,1,1,0),zn=O.NB.get(t,$.path);for(An=O.NB.get(t,V.path),_n=O.NB.string(O.NB.get(t,O.e6.edges(h)[0].path)),kn=Ee(O.NB.fragment(t,{anchor:$,focus:{path:$.path,offset:_n.length}}));O.xv.isText(An)&&An.text===""&&X===kn;)ae=V.path[V.path.length-1],V.path.splice(V.path.length-1,1,ae-1),An=O.NB.get(t,V.path),O.W_.isElement(An)&&(V.path.push(An.children.length-1),V.offset=_n.length)}if(O.NB.parent(t,$.path)===O.NB.parent(t,V.path)){J.next=18;break}return te.ZP.info(Rn.Z.get({id:"components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect",dm:"\u5212\u9009\u8303\u56F4\u6709\u8BEF"})),J.abrupt("return");case 18:Qn=O.y$.parent($.path),oe=(j==null?void 0:j.name)||Fe(),Kn=O.NB.get(t,Qn),Vn=a==null||(K=a.rules)===null||K===void 0?void 0:K[Kn.type];case 22:if(!(j!=null&&j.out&&Qn.length>1)){J.next=30;break}if(j.out.includes(Kn.type)){J.next=27;break}return re=(Vn==null?void 0:Vn.name)||Fe(),te.ZP.warning(Rn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn",dm:"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185"},{wrapTagName:oe,tagName:re})),J.abrupt("return");case 27:Qn=O.y$.parent(Qn),J.next=22;break;case 30:if(!(j!=null&&j.inner&&O.NB.get(t,$.path)!==O.NB.get(t,V.path))){J.next=42;break}Ln=O.y$.next($.path);case 32:if(O.y$.equals(Ln,V.path)){J.next=42;break}if(Wn=O.NB.get(t,Ln),Gn=a==null||(In=a.rules)===null||In===void 0?void 0:In[Wn.type],!(O.W_.isElement(Wn)&&!j.inner.includes(Wn.type))){J.next=39;break}return cn=(Gn==null?void 0:Gn.name)||Fe(),te.ZP.warning(Rn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn",dm:"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011"},{wrapTagName:oe,tagName:cn})),J.abrupt("return");case 39:Ln=O.y$.next(Ln),J.next=32;break;case 42:O.ML.withoutNormalizing(t,function(){var Jn=O.NB.parent(t,$.path),ne=O.NB.fragment(Jn,{anchor:{path:[$.path[$.path.length-1]],offset:$.offset},focus:{path:[V.path[V.path.length-1]],offset:V.offset}}),me=O.NB.string(O.NB.get(t,$.path));if(O.y$.equals($.path,V.path))t.apply({type:"remove_text",path:$.path,offset:$.offset,text:me.substring($.offset,V.offset)});else{t.apply({type:"remove_text",path:$.path,offset:$.offset,text:me.substring($.offset,me.length)});for(var ge=O.y$.next($.path);!O.y$.equals(ge,V.path);)t.apply({type:"remove_node",path:ge,node:O.NB.get(t,ge)}),V.path=O.y$.previous(V.path);var Ge=O.NB.string(O.NB.get(t,V.path));t.apply({type:"remove_text",path:V.path,offset:0,text:Ge.substring(0,V.offset)})}if(!O.y$.equals($.path,V.path)){var Be=O.NB.get(t,V.path);t.apply({type:"remove_node",path:V.path,node:Be});var Je=O.NB.string(Be);t.apply({type:"insert_text",path:$.path,offset:$.offset,text:Je})}rr(t,w()(w()({},s),{},{children:ne}),{at:$,rules:a==null?void 0:a.rules})}),J.next=46;break;case 45:b&&te.ZP.warning(b);case 46:case"end":return J.stop()}},r)}));return function(t,s,a){return e.apply(this,arguments)}}(),Jt=function(r,t,s){if(!(!r||!t)){var a=Node.get(r,t),f=Te(a.children).reverse();Editor.withoutNormalizing(r,function(){r.apply({type:"remove_node",node:a,path:t}),f.forEach(function(X){r.apply({type:"insert_node",node:X,path:t})});for(var x=Path.parent(t),y=Node.get(r,x),b=0;Node.has(y,[b+1]);)if(Text.isText(Node.get(y,[b]))&&Text.isText(Node.get(y,[b+1]))){var M=_toConsumableArray(x);M.push(b+1);var h=Node.get(r,M),j=Node.string(h);r.apply({type:"remove_node",path:M,node:h});var K=Path.previous(M),_=Node.string(Node.get(r,K));r.apply({type:"insert_text",path:Path.previous(M),offset:_.length,text:j}),y=Node.get(r,x)}else b++;s==null||s(),Path.previous(t)})}},Wr=function(r,t,s){var a=s.at;r.apply({type:"set_node",path:a,properties:t,newProperties:t}),r.onChange()},Yt=function(r,t,s){r.apply({type:"remove_node",path:s,node:Node.get(r,s)}),r.apply({type:"insert_node",path:s,node:t})},Hr=function(r,t){r&&(O.ML.withoutNormalizing(r,function(){var s=Te(r.children);s.forEach(function(f){r.apply({type:"remove_node",path:[0],node:f})});var a=t?Te(t):[{type:"s",children:[{text:""}]}];a.reverse(),a.forEach(function(f){r.apply({type:"insert_node",path:[0],node:f})})}),r.onChange())},Ee=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.reduce(function(t,s){return t+O.NB.string(s)},"")},Te=function(r){return JSON.parse(JSON.stringify(r))},Fe=function(){var r="";return r},Xt=function(r){var t;return(t=r[0])===null||t===void 0||(t=t.children)===null||t===void 0?void 0:t.map(function(s){return s.children.map(function(a){return a.text}).join("")}).join("")},qt=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=r%60,s=parseInt("".concat(r/60)),a=0;return s>60&&(s=s%60,a=parseInt("".concat(s/60))),"".concat(a?"".concat(We(a),":"):"").concat(We(s),":").concat(We(t))},We=function(r){return r>=10?"".concat(r):"0".concat(r)},$r=function(r,t){if(!(!r||!t))return wn.F3.findPath(r,t)},wr=function(r){r&&O.ML.withoutNormalizing(r,function(){var t=O.ML.end(r,[]);O.YR.select(r,t),wn.F3.focus(r),r.onChange()})},Ur=function(r,t,s){var a=r.isInline,f=r.isVoid,x=r.insertText,y=r.insertBreak,b=r.apply;r.isInline=function(h){var j;return((j=s[h.type])===null||j===void 0?void 0:j.isInline)||a(h)},r.isVoid=function(h){var j;return((j=s[h.type])===null||j===void 0?void 0:j.isVoid)||f(h)};var M=function(j){var K=parseInt(r.maxLength||t||"1000"),_=nr(r,{tagRules:s}),X=_.length;if(X+j.length>K?(x(j.substring(0,K-X)),de.MO.withoutSaving(r,function(){x(j.substring(K-X,j.length))})):x(j),r.selection&&X+j.length>K){var nn=r.selection.focus,dn=nn.path,$=nn.offset,V=$-(X+j.length-K),Pn=j.substring(K-X,j.length),Nn=Rn.Z.get({id:"components.SlateEditor.utils.withEditor.YouCanEnterAMaximum",dm:"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57"},{maxLen:K});de.MO.withoutSaving(r,function(){r.apply({type:"remove_text",path:dn,offset:V,text:Pn})}),te.ZP.warning(Nn)}};return r.insertText=M,r.insertFragment=function(h){var j=Ee(h);M(j)},r.insertBreak=function(){var h=r.selection;if(h){var j=Array.from(O.ML.nodes(r,{at:h,match:function(nn){return!O.ML.isEditor(nn)&&O.W_.isElement(nn)&&nn.type!=="s"}})),K=le()(j,1),_=K[0];if(_)return;y()}},r.apply=function(h){h.type==="set_selection"&&He||b(h)},r},zr=(0,rn.forwardRef)(function(e,r){var t=Nr(),s=e.value,a=e.wordLimit,f=a===void 0?1e3:a,x=e.disabled,y=e.onChange,b=e.variables,M=(0,rn.useRef)(!1),h=(0,rn.useRef)(er(e.tagRules)),j=(0,rn.useMemo)(function(){return Ur((0,wn.BU)((0,de.VC)((0,O.Jh)())),f,h.current)},[]),K=(0,rn.useRef)(j.selection),_=(0,rn.useRef)(b);(0,rn.useEffect)(function(){h.current=er(e.tagRules)},[e.tagRules]),(0,rn.useEffect)(function(){_.current=b},[b]),(0,rn.useEffect)(function(){var cn;if(!M.current){M.current=!0;return}j.maxLength=f;var F=kn();Kn(((cn=Se(je(F==null?void 0:F.slice(0,f))))===null||cn===void 0||(cn=cn[0])===null||cn===void 0?void 0:cn.children)||[{type:"s",children:[{text:""}]}])},[f]),(0,rn.useImperativeHandle)(r,function(){return{editor:j,getEditorValue:kn,_insertNodes:Qn,_setNodes:ae,_setEditorContent:Kn,_findNodePath:re,_wrapNodes:oe,_serialize:Ln,_generateTextBySelection:In,_insertFragment:Wn,_setEditorContentByStr:Vn}});var X=(0,rn.useMemo)(function(){var cn=Se(Ir(je(s))),F;return cn&&(cn[0].type==="speak"?F=cn[0].children:F=cn),{initValue:F}},[s]),nn=X.initValue,dn=(0,rn.useState)(nn||[{type:"s",children:[{text:""}]}]),$=le()(dn,2),V=$[0],Pn=$[1],Nn=function(F){JSON.stringify((j==null?void 0:j.selection)||"")!==JSON.stringify(K.current||"")&&(K.current=j==null?void 0:j.selection);var J=kn();s!==J&&(y==null||y(kn()),Pn(F))},zn=function(F){var J=F.element,Jn=J.type,ne=h.current[Jn].render;return ne?(0,D.jsx)(ne,w()(w()({},F),{},{renderVarLabel:e.renderVarLabel})):(0,D.jsx)(D.Fragment,{})},Mn=(0,rn.useCallback)(function(cn){var F=cn.attributes,J=cn.children,Jn=cn.leaf;return(0,D.jsx)("span",w()(w()({},F),{},{style:{paddingLeft:Jn.text===""?"3px":void 0},children:J}))},[]),An=function(){He=!0},_n=function(){He=!1},kn=function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return nr(j,w()(w()({},F),{},{tagRules:h.current}))},ae=function(F,J){Wr(j,F,J)},Qn=function(F){var J=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};rr(j,F,w()(w()({},J),{},{rules:h.current}))},oe=function(F){var J=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Fr(j,F,w()(w()({},J),{},{rules:h.current}))},Kn=function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];Hr(j,F)},Vn=function(){var F,J=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";Kn(((F=Se(je(J==null?void 0:J.slice(0,f))))===null||F===void 0||(F=F[0])===null||F===void 0?void 0:F.children)||[{type:"s",children:[{text:""}]}])},re=function(F){return $r(j,F)},Ln=function(F){var J=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ae(F,w()(w()({},J),{},{tagRules:h.current}))},In=function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!j.selection)return null;var J=O.NB.fragment(j,j.selection);return Ae(J,w()(w()({},F),{},{tagRules:h.current}))},Wn=function(F){var J,Jn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,ne=kn();if(ne.length>=f){te.ZP.warning(Rn.Z.get({id:"components.commonComponents.SlateEditor.TheNumberOfWordsCannot",dm:"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57"}));return}(!j.selection||Jn)&&wr(j);var me=ne.endsWith("/n");Jn&&ne&&!me&&j.insertBreak();var ge=F.slice(0,f-ne.length),Ge=Se(je(ge))||[];(J=Ge[0])===null||J===void 0||J.children.forEach(function(Be,Je){var Ye;Je!==0&&j.insertBreak(),(Ye=Be.children)===null||Ye===void 0||Ye.forEach(function(Xe){Xe.text?j.insertText(Xe.text):Qn(Xe)})})};(0,rn.useEffect)(function(){var cn=kn();s!==cn&&(y==null||y(kn()))},[]);var Gn=function(F){var J=F.clipboardData.getData("text/plain"),Jn=J.replace(/\r\n/g,`
`).replace(/\r/g,`
`);Wn(Jn,!1),F.preventDefault()};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(t,{}),(0,D.jsx)("div",{id:"text-editor",className:ln()("text-editor",e.className),children:(0,D.jsx)(wn.mH,{editor:j,value:V,onChange:Nn,children:(0,D.jsx)(wn.CX,{onKeyDown:e.onKeyDown,placeholder:e.placeholder||Rn.Z.get({id:"components.commonComponents.SlateEditor.EnterHere",dm:"\u5728\u8FD9\u91CC\u8F93\u5165"}),onBlur:e.onBlur,onFocus:e.onFocus,className:ln()("text-editor-content",e.contentClassName),readOnly:x,renderElement:zn,renderLeaf:Mn,onCompositionStart:An,onCompositionEnd:_n,onPaste:Gn,maxLength:e.wordLimit,onCopy:function(F){var J=In()||"";F.clipboardData.setData("text/plain",J),F.preventDefault()}})})})]})}),Qr=zr,He=!1,tr=n(77652),Kr=n(70076),Vr=n(8639),Gr=n(62518),ar=n(13978),Jr=n(36070),Yr=n(82092),fe=n.n(Yr),or,Xr=(0,pn.Z)(or||(or=bn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix});function qr(e){var r=(0,gn.getCommonConfig)(),t=r.sparkPrefix,s=Xr(),a=function(x){var y=typeof x=="string"?parseFloat(x):x;if(y===null||isNaN(y)){var b;(b=e.onChange)===null||b===void 0||b.call(e,null);return}if(y<e.min){var M;(M=e.onChange)===null||M===void 0||M.call(e,e.min)}else if(y>e.max){var h;(h=e.onChange)===null||h===void 0||h.call(e,e.max)}else{var j;(j=e.onChange)===null||j===void 0||j.call(e,y)}};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(s,{}),(0,D.jsxs)("div",{onMouseUp:function(){var x;return(x=e.onBlur)===null||x===void 0?void 0:x.call(e)},className:ln()("".concat(t,"-slider-selector"),e.className),children:[(0,D.jsx)(tr.Z,{disabled:e.disabled,onChange:a,value:e.value===null?void 0:e.value,min:e.min,max:e.max,step:e.step,marks:e.marks||fe()(fe()({},e.min,e.min),e.max,e.max),tooltip:{getPopupContainer:function(x){return x}}}),(0,D.jsx)("div",{style:w()({width:"48px"},e.inputNumberWrapperStyle),children:(0,D.jsx)(l.Z,{disabled:e.disabled,controls:!1,min:e.min,max:e.max,onBlur:function(){var x;return(x=e.onBlur)===null||x===void 0?void 0:x.call(e)},step:e.step,value:e.value,onChange:a,precision:e.precision})})]})]})}var _r=n(75229),nt=n(90118),et=n(18762),rt=n(98587),tt=n(96295),at=n(2567),ot=n(95726),it=n(70588),lt=n(67825),se=n.n(lt),st=n(58911),ct=n(88602),ut=n(62910),dt=n(99090),Ne=n(90264),qn=n(91301),ir,lr=(0,pn.Z)(ir||(ir=bn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),ft=["children","type","danger","title","width","className"],sr=function(){var r=window.getComputedStyle(document.body).overflow,t=window.getComputedStyle(document.body).position,s=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(s,"px"),function(){document.body.style.overflow=r,document.body.style.position=t,document.body.style.width="",document.body.style.top="",window.scrollTo(0,s)}},cr=function(r){var t=function(nn){var dn=nn.type,$=nn.title,V=(0,gn.getCommonConfig)(),Pn=V.antPrefix;switch(dn){case"success":return(0,D.jsxs)(Ne.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,D.jsx)(st.Z,{style:{color:"var(--".concat(Pn,"-color-success)"),fontSize:18,margin:"0 3px"}}),$]});case"warning":case"confirm":return(0,D.jsxs)(Ne.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,D.jsx)(ct.Z,{style:{color:"var(--".concat(Pn,"-color-warning)"),fontSize:18,margin:"0 3px"}}),$]});case"info":return(0,D.jsxs)(Ne.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,D.jsx)(ut.Z,{style:{color:"var(--".concat(Pn,"-color-info)"),fontSize:18,margin:"0 3px"}}),$]});case"error":return(0,D.jsxs)(Ne.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,D.jsx)(dt.Z,{style:{color:"var(--".concat(Pn,"-color-error)"),fontSize:18,margin:"0 3px"}}),$]});default:return Rn.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},s=r.children,a=r.type,f=a===void 0?"info":a,x=r.danger,y=x===void 0?!1:x,b=r.title,M=r.width,h=M===void 0?"auto":M,j=r.className,K=j===void 0?"":j,_=se()(r,ft);return{width:h,transitionName:"",restProps:_,closeIcon:null,title:t({type:f,title:b}),okButtonProps:{danger:f==="error"||f==="warning"||y},destroyOnClose:!0,className:ln()(K,"animate-in","".concat((0,gn.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:r.content||s,children:s}},ur=function(r){var t=cr(r),s=lr();return(0,rn.useEffect)(function(){if(r.open){var a=sr();return a}},[r.open]),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(s,{}),(0,D.jsx)(qn.Z,w()(w()({width:t.width,transitionName:""},t.restProps),{},{closeIcon:null,title:t.title,okButtonProps:t.okButtonProps||{},destroyOnClose:t.destroyOnClose,className:t.className,children:t.content||t.children}))]})},vt=["success","info","warning","error","confirm"];vt.forEach(function(e){ur[e]=function(r){var t=cr(w()(w()({},r),{},{type:e})),s=sr();function a(){var f=lr();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(f,{}),t.content]})}return qn.Z.confirm(w()(w()(w()({},t),t.restProps),{},{content:(0,D.jsx)(a,{}),icon:null,afterClose:function(){var x;if(s(),(x=t.restProps)!==null&&x!==void 0&&x.afterClose){var y;(y=t.restProps).afterClose.apply(y,arguments)}}}))}});var mt=ur,gt=n(14679),xt=n(56652),dr,fr=(0,pn.Z)(dr||(dr=bn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),pt=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],ht=function(r){var t=r.onOk,s=r.onCancel,a=r.okText,f=a===void 0?"\u786E\u5B9A":a,x=r.okButtonProps,y=r.cancelText,b=y===void 0?"\u53D6\u6D88":y,M=r.cancelButtonProps,h=r.info,j=r.footer,K=se()(r,pt),_=fr(),X=(0,gn.getCommonConfig)(),nn=X.antPrefix,dn=function(V){if(s)s();else{var Pn;(Pn=K.onClose)===null||Pn===void 0||Pn.call(K,V)}};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(_,{}),(0,D.jsx)(Bn.Z,w()(w()({},K),{},{footer:j||(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("div",{className:"".concat(nn,"-drawer-footer-info"),children:h}),(0,D.jsxs)("div",{className:"".concat(nn,"-drawer-footer-buttons"),children:[(0,D.jsx)(an.Z,w()(w()({onClick:dn},M),{},{children:b})),(0,D.jsx)(an.Z,w()(w()({type:"primary",onClick:t},x),{},{children:f}))]})]})}))]})},Pt=ht,yt=["children","className","style","showDivider"],vr=function(r){var t=r.children,s=r.className,a=r.style,f=r.showDivider,x=f===void 0?!0:f,y=se()(r,yt),b=fr(),M=(0,gn.getCommonConfig)(),h=M.sparkPrefix,j=M.antPrefix;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(b,{}),(0,D.jsx)(xt.Z,w()(w()({closeIcon:(0,D.jsx)(gt.Z,{size:24}),className:ln()("".concat(h,"-drawer"),s,fe()({},"".concat(j,"-show-divider"),x)),style:w()({},a)},y),{},{children:t}))]})};Object.assign(vr,{Confirm:Pt});var bt=vr,Ct=n(6002),mr,gr=(0,pn.Z)(mr||(mr=bn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),jt=["showDivider","closable"],xr=function(){var r=window.getComputedStyle(document.body).overflow,t=window.getComputedStyle(document.body).position,s=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(s,"px"),function(){document.body.style.overflow=r,document.body.style.position=t,document.body.style.width="",document.body.style.top="",window.scrollTo(0,s)}},Un=function(r){var t=gr(),s=(0,gn.getCommonConfig)(),a=s.sparkPrefix,f=r.showDivider,x=f===void 0?!0:f,y=r.closable,b=y===void 0?!0:y,M=se()(r,jt);(0,rn.useEffect)(function(){if(r.open){var _=xr();return _}},[r.open]);var h=function(X){return r.info?(0,D.jsxs)("div",{className:"".concat(a,"-modal-footer-wrapper"),children:[(0,D.jsx)("span",{className:"".concat(a,"-modal-footer-info"),children:r.info}),(0,D.jsx)("div",{className:"".concat(a,"-modal-footer-origin-node"),children:X})]}):X},j=b?r.closeIcon||(0,D.jsx)(Ct.Z,{className:"".concat(a,"-modal-title-close"),onClick:function(X){var nn;(nn=r.onCancel)===null||nn===void 0||nn.call(r,X)}}):null,K=r.footer===void 0?h:r.footer;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(t,{}),(0,D.jsx)(qn.Z,w()(w()({},M),{},{centered:!1,closeIcon:null,width:r.width||"auto",title:(0,D.jsxs)("div",{className:"".concat(a,"-modal-title-wrapper"),children:[(0,D.jsx)("div",{className:ln()("".concat(a,"-modal-title"),fe()({},"".concat(a,"-modal-title-padding"),b)),children:r.title}),j]}),wrapClassName:ln()("".concat(a,"-modal"),fe()({},"".concat(a,"-show-divider"),x),r.wrapClassName,"animate-in"),footer:K,transitionName:""}))]})};Un.useModal=qn.Z.useModal;var ve=function(r){return function(t){var s=xr(),a=(0,gn.getCommonConfig)(),f=a.sparkPrefix,x=t==null?void 0:t.afterClose,y=t==null?void 0:t.content;function b(){var h=gr();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(h,{}),y]})}var M=w()(w()({},t),{},{content:(0,D.jsx)(b,{}),width:t.width||"auto",centered:!1,transitionName:"",wrapClassName:ln()("".concat(f,"-modal"),t.wrapClassName,"animate-in"),afterClose:function(){s();for(var j=arguments.length,K=new Array(j),_=0;_<j;_++)K[_]=arguments[_];x==null||x.apply(void 0,K)}});return r(M)}};Un.success=ve(qn.Z.success),Un.error=ve(qn.Z.error),Un.warning=ve(qn.Z.warning),Un.info=ve(qn.Z.info),Un.confirm=ve(qn.Z.confirm),Un.SMALL_WIDTH=640,Un.MEDIUM_WIDTH=800,Un.LARGE_WIDTH=960;var St=Un,Et=n(86822);function pr(){return $e.apply(this,arguments)}function $e(){return $e=Xn()(Zn()().mark(function e(){var r,t=arguments;return Zn()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=t.length>0&&t[0]!==void 0?t[0]:100,a.abrupt("return",new Promise(function(f){setTimeout(f,r)}));case 2:case"end":return a.stop()}},e)})),$e.apply(this,arguments)}var Tt=n(65482),hr=n(8209),Nt=["product","action","url","version","region","headers"],Bt=function(){var e=Xn()(Zn()().mark(function t(s,a,f){var x,y,b,M,h,j,K,_,X,nn,dn,$,V,Pn,Nn;return Zn()().wrap(function(Mn){for(;;)switch(Mn.prev=Mn.next){case 0:return y=s.product,b=s.action,M=s.url,h=s.version,j=s.region,K=s.headers,_=K===void 0?{}:K,X=se()(s,Nt),nn="".concat(M||"/data/api.json","?action=").concat(b,"&product=").concat(y),h&&(nn+="&version=".concat(h)),dn={sec_token:((x=window.ALIYUN_CONSOLE_CONFIG)===null||x===void 0?void 0:x.SEC_TOKEN)||"",region:j},a&&(dn.params=JSON.stringify(a)),f&&Object.assign(dn,f),$=w()({method:"post",credentials:"same-origin",headers:w()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},_)},X),V=Object.assign({},$),V.body=(0,hr.stringify)(dn),Mn.next=11,fetch(nn,V);case 11:return Pn=Mn.sent,Mn.next=14,Pn.json();case 14:if(Nn=Mn.sent,!(Nn.code!=="200"&&!Nn.successResponse)){Mn.next=17;break}return Mn.abrupt("return",Promise.reject(Nn));case 17:return Mn.abrupt("return",Nn);case 18:case"end":return Mn.stop()}},t)}));function r(t,s,a){return e.apply(this,arguments)}return r}(),Pr=Bt;function Mt(e,r){return we.apply(this,arguments)}function we(){return we=Xn()(Zn()().mark(function e(r,t){var s,a,f;return Zn()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:a=r==null||(s=r.getReader)===null||s===void 0?void 0:s.call(r),a||(console.log("[sse]error: Can Not Find Reader Object"),console.log("[sse]StreamInfo: ",r));case 2:return y.next=4,a.read();case 4:if((f=y.sent).done){y.next=8;break}try{t(f.value)}catch(b){console.log("[sse-error][onmessage] pleach check `onmessage` or `onJsonText`.",b)}y.next=2;break;case 8:case"end":return y.stop()}},e)})),we.apply(this,arguments)}function Zt(e){var r,t,s,a=!1;return function(x){r===void 0?(r=x,t=0,s=-1):r=Ot(r,x);for(var y=r.length,b=0;t<y;){a&&(r[t]===10&&(b=++t),a=!1);for(var M=-1;t<y&&M===-1;++t)switch(r[t]){case 58:s===-1&&(s=t-b);break;case 13:a=!0;case 10:M=t;break}if(M===-1)break;e(r.subarray(b,M),s),b=t,s=-1}b===y?r=void 0:b!==0&&(r=r.subarray(b),t-=b)}}function Dt(e,r,t){var s=yr(),a=new TextDecoder;return function(x,y){if(x.length===0)t==null||t(s),s=yr();else if(y>0){var b=a.decode(x.subarray(0,y)),M=y+(x[y+1]===32?2:1),h=a.decode(x.subarray(M));switch(b){case"data":s.data=s.data?"".concat(s.data,`
`).concat(h):h;break;case"event":s.event=h;break;case"id":e(s.id=h);break;case"retry":var j=parseInt(h,10);isNaN(j)||r(s.retry=j);break}}}}function Ot(e,r){var t=new Uint8Array(e.length+r.length);return t.set(e),t.set(r,e.length),t}function yr(){return{data:"",event:"",id:"",retry:void 0}}var kt=["signal","headers","onopen","onmessage","onclose","onerror","fetch","autoRetryTime","timeout","debug"],Ue="text/event-stream",Lt=1e3,br="last-event-id";function Cr(e,r){return ze.apply(this,arguments)}function ze(){return ze=Xn()(Zn()().mark(function e(r,t){var s,a,f,x,y,b,M,h,j,K,_,X,nn;return Zn()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return s=t.signal,a=t.headers,f=t.onopen,x=t.onmessage,y=t.onclose,b=t.onerror,M=t.fetch,h=t.autoRetryTime,j=t.timeout,K=t.debug,_=K===void 0?!1:K,X=se()(t,kt),nn=0,$.abrupt("return",new Promise(function(V,Pn){var Nn=w()({},a);Nn.accept||(Nn.accept=Ue);var zn=Lt,Mn=0,An=0,_n=new AbortController;function kn(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(_&&console.log("[sse] dispose"),window.clearTimeout(Mn),window.clearTimeout(An),!re){var Ln,In;(Ln=_n)===null||Ln===void 0||(In=Ln.abort)===null||In===void 0||In.call(Ln)}}function ae(){window.clearTimeout(An),j!==0&&(An=window.setTimeout(function(){_&&console.log("[sse] timeout"),Pn(new Error("timeout")),b==null||b(new Error("timeout")),kn()},j||60*1e3))}s==null||s.addEventListener("abort",function(){kn(),V()});var Qn=M!=null?M:window.fetch,oe=f!=null?f:It;function Kn(){return Vn.apply(this,arguments)}function Vn(){return Vn=Xn()(Zn()().mark(function re(){var Ln,In,Wn,Gn;return Zn()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.prev=0,ae(),F.next=4,Qn(r,w()(w()({},X),{},{headers:Nn,signal:(Ln=_n)===null||Ln===void 0?void 0:Ln.signal}));case 4:return In=F.sent,F.next=7,oe(In);case 7:if(In.body){F.next=11;break}return _&&console.log("[sse]no body, delay 100ms"),F.next=11,pr(100);case 11:return _&&console.log("[sse]response.body",In.body),F.next=14,Mt(In.body,Zt(Dt(function(J){J?Nn[br]=J:delete Nn[br]},function(J){zn=J},function(J){ae(),x==null||x(J)})));case 14:_n=null,y==null||y(),kn(),V(),F.next=43;break;case 20:if(F.prev=20,F.t0=F.catch(0),F.t0&&console.error("[sse]err",F.t0),!(!(s!=null&&s.aborted)&&h&&nn<h)){F.next=39;break}return F.prev=24,nn+=1,Gn=(Wn=b==null?void 0:b(F.t0))!==null&&Wn!==void 0?Wn:zn,window.clearTimeout(Mn),typeof Gn=="number"&&(_&&console.log("[sse] retry "+nn),Mn=window.setTimeout(Kn,Gn)),F.abrupt("return",Promise.resolve());case 32:F.prev=32,F.t1=F.catch(24),_&&console.log("[sse] reject innerErr ",F.t1),kn(),Pn(F.t1);case 37:F.next=43;break;case 39:_&&console.log("[sse] reject finally"),kn(F.t0 instanceof Response||F.t0 instanceof DOMException&&F.t0.name==="AbortError"),b==null||b(F.t0),Pn(F.t0);case 43:case"end":return F.stop()}},re,null,[[0,20],[24,32]])})),Vn.apply(this,arguments)}Kn()}));case 3:case"end":return $.stop()}},e)})),ze.apply(this,arguments)}function It(e){var r=e.headers.get("content-type");if(!(r!=null&&r.startsWith(Ue)))throw new Error("Expected content-type to be ".concat(Ue,", Actual: ").concat(r))}function Rt(e){return Qe.apply(this,arguments)}function Qe(){return Qe=Xn()(Zn()().mark(function e(r){var t,s,a,f,x,y,b;return Zn()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return t=r.action,s=r.body,a=r.product,f=r.version,x=r.region,y=r.params,b={action:t,product:a,region:x,url:"/tool/sse/get.json",version:f},h.abrupt("return",Pr(b,y,{content:JSON.stringify(s)}));case 3:case"end":return h.stop()}},e)})),Qe.apply(this,arguments)}function At(e,r,t,s){var a=r.onMessage,f=r.onClose,x=r.onError,y=r.timeout,b=e.body,M=e.uri,h=e.headers,j=e.query,K=e.path,_=h["Content-Type"],X="".concat(M.replace(/\/$/,"")).concat(K);j&&Object.keys(j).length&&(X="".concat(X,"?").concat((0,hr.stringify)(j)));try{s.value=!1,Cr(X,{method:"POST",body:_==="application/x-www-form-urlencoded"?new URLSearchParams(JSON.parse(b)):b,signal:t.signal,timeout:y,headers:h,onopen:function(dn){return dn.status!==200?Promise.reject(dn):Promise.resolve()},onmessage:function(dn){try{var $=dn.data,V=$===void 0?"{}":$,Pn=JSON.parse(V);a==null||a(Pn)}catch(Nn){x==null||x(Nn)}},onclose:function(){s.value=!0,f==null||f()},onerror:function(dn){s.value=!0,f==null||f(),!(dn instanceof DOMException&&dn.name==="AbortError")&&(x==null||x(dn))}})}catch(nn){s.value=!0,x==null||x(nn),f==null||f()}}function Ft(e,r,t){return Ke.apply(this,arguments)}function Ke(){return Ke=Xn()(Zn()().mark(function e(r,t,s){var a,f,x,y;return Zn()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return a=r.onClose,f=r.onError,M.prev=1,M.next=4,Rt(r);case 4:x=M.sent,y=x.data,At(y,r,t,s),M.next=13;break;case 9:M.prev=9,M.t0=M.catch(1),a==null||a(),f==null||f(M.t0);case 13:case"end":return M.stop()}},e,null,[[1,9]])})),Ke.apply(this,arguments)}function Wt(e){return Ve.apply(this,arguments)}function Ve(){return Ve=Xn()(Zn()().mark(function e(r){var t,s;return Zn()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return t=new AbortController,s={value:!0},f.next=4,Ft(r,t,s);case 4:return f.abrupt("return",{dispose:function(){s.value&&t.abort("\u53D6\u6D88\u8BF7\u6C42")}});case 5:case"end":return f.stop()}},e)})),Ve.apply(this,arguments)}var jr=n(95336);function Sr(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.timeout,s=t===void 0?5e3:t,a=r.intervalTime,f=a===void 0?100:a,x=Date.now();return new Promise(function(y,b){var M=setInterval(function(){var h=e();h?(clearInterval(M),y(h)):Date.now()-x>s&&(b("timeout"),clearInterval(M))},f)})}function Ht(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Sr(function(){return document.querySelector(e)},r)}var $t=n(23636);function wt(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof e!="string")return t||console.warn(e,"is not valid json"),r?e:null;try{return JSON.parse(e)}catch(s){return t||console.warn(e,"is not valid json"),r?e:null}}function Ut(e){for(var r=new TextEncoder,t=r.encode(e),s="",a=0;a<t.length;a++)s+=String.fromCharCode(t[a]);var f=btoa(s);return f}function zt(e){for(var r=atob(e),t=new Uint8Array(r.length),s=0;s<r.length;s++)t[s]=r.charCodeAt(s);var a=new TextDecoder("utf-8"),f=a.decode(t);return f}var Er=(0,S.Z)(c),Tr=(0,S.Z)(P,!0),Qt=(0,S.Z)(Z),Kt=(0,S.Z)(Q,!0)},95336:function(fn,z,n){n.d(z,{JG:function(){return I},rb:function(){return E}});var P=n(26068),c=n.n(P),Q=n(67825),Z=n.n(Q),U=n(75271),W=["maxWidth","maxHeight"];function N(){var B;return((B=window.g_config)===null||B===void 0?void 0:B.isIntl)||!1}var I=function(o){if(navigator.clipboard)navigator.clipboard.writeText(o);else{var S=document.createElement("textarea");document.body.appendChild(S),S.style.position="fixed",S.style.clip="rect(0 0 0 0)",S.style.top="10px",S.value=o,S.select(),document.execCommand("copy",!0),document.body.removeChild(S)}},E=function(o){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=S.maxWidth,C=S.maxHeight,L=Z()(S,W);return c()({overlayInnerStyle:{maxWidth:u||326,maxHeight:C||150,overflowY:"auto",padding:"6px 12px"},title:o,arrow:!1},L)};function H(B){return React.isValidElement(B)}function R(B){var o=B||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(o)}var m=function(o){return o>=10?o:"0".concat(o)},v=function(o){if(o<60){var S=Math.ceil(o);return"0:".concat(m(S))}var u=Math.floor(o/60),C=Math.ceil(o%60);return"".concat(m(u),":").concat(m(C))}}}]);
