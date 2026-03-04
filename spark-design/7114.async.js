"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7114],{21245:function(mn,K,n){n.d(K,{Z:function(){return g}});var y=n(26068),s=n.n(y),V=n(23655),B=n(75271),$=n(53649),E=n.n($),N=n(30764),L,D=(0,N.Z)(L||(L=E()([`

.`,"-anchor-wrapper .","-anchor .",`-anchor-link-title {
  color: var(--`,`-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.`,`-anchor-link {
  --`,`-anchor-link-padding-block: 0;
  --`,`-anchor-link-padding-inline-start: 0;
}
`])),function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix}),w=n(52676),I=(0,B.forwardRef)(function(v){var F=D();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(F,{}),(0,w.jsx)(V.Z,s()({},v))]})}),g=I},8639:function(mn,K,n){n.d(K,{Z:function(){return c}});var y=n(26068),s=n.n(y),V=n(48305),B=n.n(V),$=n(67825),E=n.n($),N=n(75271),L=n(82187),D=n.n(L),w=n(74659),I=n(32547),g=n(60213),v=n(53649),F=n.n(v),o=n(30764),p,u=(0,o.Z)(p||(p=F()([`
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
`])),function(x){return x.sparkPrefix},function(x){return x.sparkPrefix},function(x){return x.sparkPrefix}),h=n(52676),m=["controls","className","style"],r=(0,N.forwardRef)(function(x,R){var l=x.controls,M=x.className,P=x.style,k=E()(x,m),nn=(0,g.getCommonConfig)(),X=nn.sparkPrefix,U=u(),H=(0,N.useState)(0),G=B()(H,2),J=G[0],cn=G[1],pn=(0,N.useState)(0),un=B()(pn,2),Sn=un[0],en=un[1],an=(0,N.useState)(!1),W=B()(an,2),dn=W[0],gn=W[1],xn=(0,I.Z)(x,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!1}),bn=B()(xn,2),vn=bn[0],sn=bn[1],ln=(0,N.useRef)(null),Mn=(0,N.useRef)(!0),jn=function(En){ln.current=En,R&&(typeof R=="function"?R(En):R.current=En)};(0,N.useEffect)(function(){if(Mn.current){Mn.current=!1;return}ln.current&&k.src&&ln.current.load()},[k.src]),(0,N.useEffect)(function(){var Cn;return dn&&(Cn=setInterval(function(){ln.current&&cn(ln.current.currentTime)},16)),function(){Cn&&clearInterval(Cn)}},[dn]);var hn=function(En){var yn;ln.current&&en(ln.current.duration),(yn=k.onLoadedMetadata)===null||yn===void 0||yn.call(k,En)},Dn=function(){ln.current&&(dn?ln.current.pause():ln.current.play(),gn(!dn))},Hn=function(En){var yn;gn(!0),(yn=k.onPlay)===null||yn===void 0||yn.call(k,En)},O=function(En){var yn;gn(!1),(yn=k.onPause)===null||yn===void 0||yn.call(k,En)},Rn=function(En){var yn,Tn;gn(!1),cn(((yn=ln.current)===null||yn===void 0?void 0:yn.duration)||0),(Tn=k.onEnded)===null||Tn===void 0||Tn.call(k,En)},An=function(En){ln.current&&(ln.current.currentTime=En,cn(En))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(U,{}),(0,h.jsxs)("div",{className:D()("".concat(X,"-audio-container"),M),style:P,children:[(0,h.jsx)("audio",s()(s()({ref:jn},k),{},{muted:vn,className:"".concat(X,"-audio-element"),onLoadedMetadata:hn,onPlay:Hn,onPause:O,onEnded:Rn})),(0,h.jsx)(w.Z,{className:"".concat(X,"-audio-controller-wrapper"),isPlaying:dn,currentTime:J,duration:Sn,enableVolume:!0,enableFullscreen:!1,muted:vn,onMute:function(){return sn(!vn)},onPlayPause:Dn,onProgressClick:An})]})]})}),c=r},93178:function(mn,K,n){n.d(K,{Z:function(){return u}});var y=n(26068),s=n.n(y),V=n(48305),B=n.n(V),$=n(67825),E=n.n($),N=n(67487),L=n(75271),D=n(53649),w=n.n(D),I=n(30764),g,v=(0,I.Z)(g||(g=w()([`
.`,`-avatar {
  cursor: default;
}
`])),function(h){return h.antPrefix}),F=n(52676),o=["children"],p=(0,L.forwardRef)(function(h,m){var r=v(),c=h.children,x=E()(h,o),R=(0,L.useState)(h.children),l=B()(R,2),M=l[0],P=l[1];return(0,L.useEffect)(function(){if(typeof c=="string"){P(Array.from(c)[0]);return}if(typeof c=="number"){P(Array.from(String(c))[0]);return}P(c)},[c]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(r,{}),(0,F.jsx)(N.Z,s()(s()({ref:m},x),{},{children:M}))]})}),u=p},40:function(mn,K,n){n.d(K,{Z:function(){return m}});var y=n(26068),s=n.n(y),V=n(67825),B=n.n(V),$=n(3999),E=n(11691),N=n(93178),L=n(38356),D=n(75271),w=n(60213),I=n(53649),g=n.n(I),v=n(30764),F,o=(0,v.Z)(F||(F=g()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix}),p=n(52676),u=["items"],h=function(c){var x=c.items,R=x===void 0?[]:x,l=B()(c,u),M=(0,w.getCommonConfig)(),P=M.sparkPrefix,k=o(),nn=D.useMemo(function(){return R.map(function(X){var U=X.title,H=[];return X.iconUrl&&H.push((0,p.jsx)(N.Z,{size:20,src:X.iconUrl},"avatar")),X.dropdown?H.push((0,p.jsxs)("span",{className:"".concat(P,"-breadcrumb-dropdown-title"),children:[X.title,(0,p.jsx)($.Z,{size:16})]},"title")):H.push((0,p.jsx)("span",{children:X.title},"title")),X.dropdown?U=(0,p.jsx)(L.Z,{menu:{items:X.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(P,"-breadcrumb-dropdown"),children:(0,p.jsx)("span",{children:H})}):(X.iconUrl||H.length>1)&&(U=(0,p.jsx)("span",{className:"".concat(P,"-breadcrumb-item-content"),children:H})),s()(s()({},X),{},{title:U})})},[R]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(k,{}),(0,p.jsx)(E.Z,s()(s()({},l),{},{items:nn,className:"".concat(P,"-breadcrumb ").concat(l.className||"")}))]})},m=h},61902:function(mn,K,n){n.d(K,{Z:function(){return p}});var y=n(26068),s=n.n(y),V=n(67825),B=n.n(V),$=n(60213),E=n(85770),N=n(82187),L=n.n(N),D=n(53649),w=n.n(D),I=n(30764),g,v=(0,I.Z)(g||(g=w()([`
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
`])),function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix}),F=n(52676),o=["title","info","children","className"],p=function(u){var h=u.title,m=u.info,r=u.children,c=u.className,x=B()(u,o),R=v(),l=(0,$.getCommonConfig)(),M=l.sparkPrefix;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(R,{}),(0,F.jsx)(E.Z,s()(s()({className:L()("".concat(M,"-card"),c)},x),{},{title:null,children:(0,F.jsxs)("div",{className:"".concat(M,"-card-wrapper"),children:[h&&(0,F.jsx)("div",{className:"".concat(M,"-title"),children:h}),m&&(0,F.jsx)("div",{className:"".concat(M,"-info"),children:m}),r&&(0,F.jsx)("div",{className:"".concat(M,"-content"),children:r})]})}))]})}},98618:function(mn,K,n){n.d(K,{Z:function(){return p}});var y=n(26068),s=n.n(y),V=n(67825),B=n.n(V),$=n(10758),E=n(75271),N=n(60213),L=n(53649),D=n.n(L),w=n(30764),I,g=(0,w.Z)(I||(I=D()([`
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
`])),function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix}),v=n(52676),F=["description","descriptionClassName","descriptionStyle","children"],o=function(h){var m=h.description,r=h.descriptionClassName,c=h.descriptionStyle,x=h.children,R=B()(h,F),l=(0,N.getCommonConfig)(),M=l.antPrefix,P=l.sparkPrefix,k=g(),nn={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(M,"-color-text-tertiary)")};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(k,{}),(0,v.jsxs)("div",{className:"".concat(P,"-checkbox"),children:[(0,v.jsx)($.Z,s()(s()({},R),{},{children:x})),m&&(0,v.jsx)("div",{className:r,style:s()(s()({},nn),c),children:m})]})]})};o.Group=$.Z.Group;var p=o},49570:function(mn,K,n){n.d(K,{ZP:function(){return Sn},xO:function(){return J}});var y=n(26068),s=n.n(y),V=n(15558),B=n.n(V),$=n(60213),E=n(23636),N=n(5012),L=n(2607),D=n(91237),w=n(44573),I=n(12652),g=n(23201),v=n(18932),F=n(37441),o=n(99362),p=n(68147),u=n(70300),h=n(24365),m=n(33792),r=n(86112),c=n(18893),x=n(72771),R=n(82187),l=n.n(R),M=n(28640),P=n(75271),k=n(53649),nn=n.n(k),X=n(30764),U,H=(0,X.Z)(U||(U=nn()([`
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
`])),function(en){return en.sparkPrefix},function(en){return en.antPrefix},function(en){return en.antPrefix},function(en){return en.antPrefix},function(en){return en.antPrefix},function(en){return en.antPrefix},function(en){return en.antPrefix},function(en){return en.antPrefix},function(en){return en.antPrefix},function(en){return en.antPrefix},function(en){return en.antPrefix}),G=n(52676),J={javascript:[(0,v.eJ)()],jsx:[(0,v.eJ)()],python:[(0,u.Vs)()],json:[(0,F.AV)()],java:[(0,g.C)()],yaml:[(0,h.rV)()],php:[(0,p.h)()],go:[(0,w.go)()],csharp:[(0,L.N)()],css:[(0,D.iv)()],html:[(0,I.dy)()],curl:[],markdown:[(0,o.JH)()]},cn={javascript:[(0,m.Q2)()],json:[(0,m.Q2)(),(0,m.ir)((0,F.ap)())]},pn=function(){var an=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"{}",W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,dn=an;try{dn=JSON.stringify(JSON.parse(an),null,W)}catch(gn){}return dn},un=function(an){var W,dn=(0,$.getCommonConfig)(),gn=P.useContext(E.ZP.ConfigContext),xn=((W=gn.theme)===null||W===void 0?void 0:W.algorithm)===x.Z.darkAlgorithm,bn=dn.sparkPrefix,vn=H(),sn=(0,P.useMemo)(function(){return an.theme===void 0?xn?r.Pc:r.Zp:an.theme==="dark"?r.Pc:r.Zp},[xn,an.theme]),ln=(an.extensions||[]).concat(typeof an.language=="string"?[].concat(B()(J[an.language]||[]),B()(an.value&&an.language in cn?cn[an.language]:[])):an.language.reduce(function(hn,Dn){return[].concat(B()(hn),[J[Dn]])},[])),Mn=(0,G.jsx)("div",{className:l()("".concat(bn,"-code-block"),an.className),children:(0,G.jsx)(c.ZP,s()({extensions:ln,value:an.language==="json"?pn(an.value||""):an.value||"",theme:sn},(0,M.Z)(an,["language","theme","extensions","value"])))});if(an.theme!==void 0){var jn=an.theme==="dark"?N.bailianDarkTheme:N.bailianTheme;return(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)(E.ZP,s()(s()({},jn),{},{children:[(0,G.jsx)(vn,{}),Mn]}))})}return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(vn,{}),Mn]})},Sn=un},94684:function(mn,K,n){n.d(K,{Z:function(){return I}});var y=n(26068),s=n.n(y),V=n(24198),B=n(53649),$=n.n(B),E=n(30764),N,L=(0,E.Z)(N||(N=$()([`
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
`])),function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),D=n(52676),w=function(v){var F=L();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(F,{}),(0,D.jsx)(V.Z,s()({},v))]})},I=w},61406:function(mn,K,n){n.d(K,{Z:function(){return r}});var y=n(26068),s=n.n(y),V=n(82092),B=n.n(V),$=n(48305),E=n.n($),N=n(60213),L=n(3999),D=n(16879),w=n(82187),I=n.n(w),g=n(75271),v=n(53649),F=n.n(v),o=n(30764),p,u=(0,o.Z)(p||(p=F()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix}),h=n(52676),m=function(x){var R,l,M,P,k,nn,X=x.collapsedHeight,U=x.expandedHeight,H=x.title,G=H===void 0?"":H,J=x.expandOnPanelClick,cn=x.extra,pn=x.children,un=x.defaultExpanded,Sn=(0,g.useState)(un),en=E()(Sn,2),an=en[0],W=en[1],dn=(0,g.useState)(!0),gn=E()(dn,2),xn=gn[0],bn=gn[1],vn=(0,g.useState)(X),sn=E()(vn,2),ln=sn[0],Mn=sn[1],jn=(0,g.useRef)(null),hn=(0,N.getCommonConfig)(),Dn=hn.sparkPrefix,Hn=hn.antPrefix,O=u();(0,g.useEffect)(function(){jn.current&&Mn(an&&U?U:an?jn.current.scrollHeight:X)},[an,X,U,pn]);var Rn=function(Tn){Tn.stopPropagation(),Tn.preventDefault(),W(function(In){return!In})},An=function(Tn){Tn.stopPropagation(),Tn.preventDefault(),an||W(!0)},Cn=function(){bn(!0)},En=function(){bn(!0)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(O,{}),(0,h.jsxs)("div",{className:I()("".concat(Dn,"-collapse-panel"),{collapsible:!an&&J},(R=x.classNames)===null||R===void 0?void 0:R.wrapper),style:(l=x.styles)===null||l===void 0?void 0:l.wrapper,onClick:J?An:void 0,onMouseEnter:J?Cn:void 0,onMouseLeave:J?En:void 0,children:[(0,h.jsxs)("div",{className:I()("".concat(Dn,"-collapse-panel-header"),(M=x.classNames)===null||M===void 0?void 0:M.header),style:(P=x.styles)===null||P===void 0?void 0:P.header,onClick:Rn,children:[(0,h.jsxs)("span",{className:"".concat(Dn,"-collapse-panel-title"),children:[G,(0,h.jsxs)("div",{className:"".concat(Dn,"-collapse-panel-icon-wrapper"),children:[!an&&xn&&J&&(0,h.jsx)(L.Z,{style:{fontSize:"18px"}}),an&&xn&&J&&(0,h.jsx)(D.Z,{style:{fontSize:"18px"}})]})]}),cn&&(0,h.jsx)("div",{className:"".concat(Dn,"-collapse-panel-extra"),onClick:function(Tn){Tn.stopPropagation(),Tn.preventDefault()},children:cn})]}),(0,h.jsxs)("div",{className:I()("".concat(Dn,"-collapse-panel-content"),B()({},"".concat(Dn,"-collapse-panel-expanded"),an),(k=x.classNames)===null||k===void 0?void 0:k.content),style:s()({height:ln},(nn=x.styles)===null||nn===void 0?void 0:nn.content),children:[(0,h.jsx)("div",{ref:jn,className:"".concat("".concat(Dn,"-collapse-panel-contentWrapper")," ",an&&U?"scrollable":""),children:pn}),!an&&(0,h.jsx)("div",{className:"".concat(Dn,"-collapse-panel-mask")})]})]})]})},r=m},84360:function(mn,K,n){n.d(K,{Z:function(){return R}});var y=n(26068),s=n.n(y),V=n(67825),B=n.n(V),$=n(60213),E=n(57216),N=n(72771),L=n(86137),D=n(87133),w=n(82187),I=n.n(w),g=n(75271),v=n(53649),F=n.n(v),o=n(30764),p,u=(0,o.Z)(p||(p=F()([`
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
`])),function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix}),h=n(52676),m=["className","popupClassName"],r=["className","popupClassName"],c=function(M){var P=M.className,k=M.popupClassName,nn=B()(M,m),X=N.Z.useToken(),U=X.token,H=(0,$.getCommonConfig)(),G=H.sparkPrefix,J=u();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(J,{}),(0,h.jsx)(L.ZP,{theme:{components:{DatePicker:{activeBorderColor:U.colorPrimary,paddingInline:8}}},children:(0,h.jsx)(D.default,s()({suffixIcon:(0,h.jsx)(E.Z,{style:{fontSize:"20px"}}),className:I()("".concat(G,"-picker"),P),popupClassName:I()("".concat(G,"-picker-dropdown"),k)},nn))})]})},x=function(M){var P=M.className,k=M.popupClassName,nn=B()(M,r),X=N.Z.useToken(),U=X.token,H=(0,$.getCommonConfig)(),G=H.sparkPrefix,J=u();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(J,{}),(0,h.jsx)(L.ZP,{theme:{components:{DatePicker:{activeBorderColor:U.colorPrimary,paddingInline:8}}},children:(0,h.jsx)(D.default.RangePicker,s()({suffixIcon:(0,h.jsx)(E.Z,{style:{fontSize:"20px"}}),className:I()("".concat(G,"-picker"),P),popupClassName:I()("".concat(G,"-picker-dropdown"),k),popupStyle:{padding:0}},nn))})]})};c.RangePicker=x;var R=c},62518:function(mn,K,n){n.d(K,{Z:function(){return r}});var y=n(82092),s=n.n(y),V=n(26068),B=n.n(V),$=n(67825),E=n.n($),N=n(60213),L=n(72771),D=n(3307),w=n(82187),I=n.n(w),g=n(53649),v=n.n(g),F=n(30764),o,p=(0,F.Z)(o||(o=v()([`
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
`])),function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),u=n(52676),h=["className","layout","colon","style"],m=function(x){var R,l,M=p(),P=x.className,k=x.layout,nn=x.colon,X=nn===void 0?!1:nn,U=x.style,H=E()(x,h),G=(0,N.getCommonConfig)(),J=G.antPrefix,cn=L.Z.useToken(),pn=cn.token;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(M,{}),(0,u.jsx)(D.Z,B()({className:I()(P,k==="vertical"&&"".concat(J,"-descriptions-vertical")),layout:k,colon:X,style:B()(s()(s()({},"--".concat(J,"-descriptions-vertical-label-padding-bottom"),"".concat((R=pn.Descriptions.verticalLabelPaddingBottom)!==null&&R!==void 0?R:4,"px")),"--".concat(J,"-descriptions-vertical-content-padding-bottom"),"".concat((l=pn.Descriptions.verticalContentPaddingBottom)!==null&&l!==void 0?l:24,"px")),U)},H))]})},r=m},38356:function(mn,K,n){n.d(K,{Z:function(){return F}});var y=n(26068),s=n.n(y),V=n(60213),B=n(68278),$=n(44201),E=n(75271),N=n(53649),L=n.n(N),D=n(30764),w,I=(0,D.Z)(w||(w=L()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),g=n(52676),v=function(p){var u,h,m=(0,V.getCommonConfig)(),r=m.antPrefix,c=(0,E.useMemo)(function(){var R;if(!((R=p.menu)!==null&&R!==void 0&&R.selectable)||!p.menu){var l;return((l=p.menu)===null||l===void 0?void 0:l.items)||[]}return p.menu.items.map(function(M){var P={},k=M.label;return k&&(P.label=(0,g.jsxs)("div",{className:"".concat(r,"-dropdown-check-wrapper"),children:[k,(0,g.jsx)("span",{className:"".concat(r,"-dropdown-check-icon"),children:(0,g.jsx)(B.Z,{})})]})),s()(s()({},M),P)})},[(u=p.menu)===null||u===void 0?void 0:u.items,(h=p.menu)===null||h===void 0?void 0:h.selectable]),x=I();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{}),(0,g.jsx)($.Z,s()(s()({},p),{},{menu:s()(s()({},p.menu),{},{items:c}),overlayStyle:s()({},p.overlayStyle)}))]})},F=v},49327:function(mn,K,n){n.d(K,{Z:function(){return X}});var y=n(26068),s=n.n(y),V=n(60213),B=n(90264),$=n(75271),E=n(60823),N=n(53649),L=n.n(N),D=n(30764),w,I=(0,D.Z)(w||(w=L()([`
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
`])),function(U){return U.sparkPrefix},function(U){return U.sparkPrefix},function(U){return U.sparkPrefix},function(U){return U.sparkPrefix},function(U){return U.sparkPrefix},function(U){return U.sparkPrefix},function(U){return U.antPrefix},function(U){return U.sparkPrefix},function(U){return U.antPrefix}),g=n(90228),v=n.n(g),F=n(48305),o=n.n(F),p=n(87999),u=n.n(p),h=n(52676);function m(U){return U.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var r=new Map,c=new Map;function x(U){return R.apply(this,arguments)}function R(){return R=u()(v()().mark(function U(H){var G,J,cn;return v()().wrap(function(un){for(;;)switch(un.prev=un.next){case 0:if(G=r.get(H),G===void 0){un.next=3;break}return un.abrupt("return",G);case 3:if(J=c.get(H),!J){un.next=6;break}return un.abrupt("return",J);case 6:return cn=u()(v()().mark(function Sn(){var en,an;return v()().wrap(function(dn){for(;;)switch(dn.prev=dn.next){case 0:return dn.next=2,fetch(H);case 2:if(en=dn.sent,en.ok){dn.next=5;break}throw new Error("HTTP ".concat(en.status));case 5:return dn.next=7,en.text();case 7:return an=dn.sent,r.set(H,an),dn.abrupt("return",an);case 10:case"end":return dn.stop()}},Sn)}))().finally(function(){c.delete(H)}),c.set(H,cn),un.abrupt("return",cn);case 9:case"end":return un.stop()}},U)})),R.apply(this,arguments)}function l(U,H){var G=U;return Object.keys(H).forEach(function(J){G=G.replace(new RegExp(m(J),"g"),H[J])}),G}function M(U){var H=U.svgUrl,G=U.tokenMap,J=G===void 0?{}:G,cn=U.className,pn=U.size,un=H.includes(".svg"),Sn=(0,$.useState)(function(){return r.get(H)||""}),en=o()(Sn,2),an=en[0],W=en[1],dn=(0,$.useRef)(!0);if((0,$.useEffect)(function(){return dn.current=!0,function(){dn.current=!1}},[]),(0,$.useEffect)(function(){if(un){var xn=r.get(H);if(xn){W(xn);return}x(H).then(function(bn){dn.current&&W(bn)}).catch(function(bn){console.warn("[SparkDesign][Empty][Illustrate] load svg failed:",H,bn)})}},[H]),!un)return(0,h.jsx)("img",{src:H,className:cn,style:{width:pn,height:pn}});if(!an)return null;var gn=l(an,J);return(0,h.jsx)("div",{className:cn,dangerouslySetInnerHTML:{__html:gn},style:{width:pn,height:pn}})}var P={url:"https://gw.alicdn.com/imgextra/i3/O1CN01r3f3Si24iFTRz9Bho_!!6000000007424-55-tps-320-320.svg",tokenMap:{"#CDD0DC":"color-border"}},k={noData:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01mWN5tE1MAxb2z7LwA_!!6000000001395-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#BCB5FF":"color-primary-border-hover","#FFFFFF":"color-bg-base","#615CED":"color-primary","#1ACDD0DC":"color-fill-quaternary","#CDD0DC":"color-border"}},networkError:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01su6GHG1RupL5K5TOQ_!!6000000002172-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},404:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01GE0jXZ1xpqjvMjCZh_!!6000000006493-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#26CDD0DC":"color-fill-tertiary","#CDD0DC":"color-border","#F3F0FF":"color-primary-bg","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},arrears:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01xN8uYv1Dz2MLvrFAF_!!6000000000286-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#F3F0FF":"color-primary-bg","#615CED":"color-primary"}},desktopOnly:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01ZzNku41rshVhRVh9x_!!6000000005687-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},noAudio:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01fTQ6vi1GXxnIrmizf_!!6000000000633-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#615CED":"color-primary","#E6E8EE":"color-border-secondary"}},noImage:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01zQAH9A1oJUD9XDtmi_!!6000000005204-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noVideo:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01kqss5i1JuoOrJ8fNV_!!6000000001089-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noAccess:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01RwpRz91oGHREFlmdY_!!6000000005197-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}},error:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01TlQR4c1L3nn4DkG2z_!!6000000001244-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noChat:{url:"https://img.alicdn.com/imgextra/i3/O1CN014KyRst1w9QT51V8Yx_!!6000000006265-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#615CED":"color-primary","#CDD0DC":"color-border"}},noModel:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01BSPmLi1iaXGByjbne_!!6000000004429-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#5CCDD0DC":"color-fill","#615CED":"color-primary"}},noApp:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01stSIP31fzmEtpppWc_!!6000000004078-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#33CDD0DC":"color-fill-secondary","#615CED":"color-primary"}},success:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01sGzZ5B1Bx5RQAjUe5_!!6000000000011-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#5BB98B":"color-success","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},failed:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01Fd1Gmx1QNYxQ8hj0H_!!6000000001964-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FF7875":"color-error-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},inProgress:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01w2RXic1LADKqVxH56_!!6000000001258-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#9189FA":"color-primary-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},stayTuned:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01W2Kbyc26dmqmatyoB_!!6000000007685-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}}},nn=function(H){var G=H.imageStyle,J=H.title,cn=H.description,pn=cn===void 0?"No Data":cn,un=H.children,Sn=H.texture,en=Sn===void 0?!0:Sn,an=H.size,W=an===void 0?320:an,dn=H.autoFit,gn=dn===void 0?!0:dn,xn=H.okText,bn=H.okType,vn=bn===void 0?"primary":bn,sn=H.okButtonProps,ln=H.onOk,Mn=H.type||"noData",jn=(0,V.getCommonConfig)(),hn=jn.sparkPrefix,Dn=jn.isDarkMode,Hn=jn.antPrefix,O=H.image||k[Mn].url,Rn=(0,$.useMemo)(function(){var Tn,In=s()({},(Tn=k[Mn])===null||Tn===void 0?void 0:Tn.tokenMap);return In&&Object.keys(In).forEach(function(ae){In[ae]="var(--".concat(Hn,"-").concat(In[ae],")")}),In},[Mn]),An=(0,$.useMemo)(function(){var Tn=s()({},P.tokenMap);return Object.keys(Tn).forEach(function(In){Tn[In]="var(--".concat(Hn,"-").concat(Tn[In],")")}),Tn},[Dn]),Cn=I(),En=typeof W=="string"?parseFloat(W.replace(/px/i,"")):W!=null?W:0,yn=gn?{maxWidth:"100%",aspectRatio:"1 / 1",width:W,height:"auto"}:{width:W,height:W};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Cn,{}),(0,h.jsxs)("div",{className:"".concat(hn,"-empty ").concat(H.className||""),style:s()(s()({},yn),G),children:[en&&(0,h.jsx)(M,{size:gn?"100%":W,svgUrl:P.url,tokenMap:An,className:"".concat(hn,"-empty-texture")}),(0,h.jsx)(M,{size:gn?"100%":W,svgUrl:O,tokenMap:Rn,className:"".concat(hn,"-empty-image")}),(0,h.jsxs)(B.Z,{vertical:!0,align:"center",style:{marginTop:"52.5%"},children:[J&&(0,h.jsx)("div",{className:"".concat(hn,"-empty-title"),style:{marginBottom:pn?.025*En:0},children:J}),pn&&(0,h.jsx)("div",{className:"".concat(hn,"-empty-description"),children:pn}),!!xn&&(0,h.jsx)("div",{style:{marginTop:.05*En},children:(0,h.jsx)(E.Z,s()(s()({type:vn,onClick:ln},sn),{},{children:xn}))}),!!un&&(0,h.jsx)("div",{style:{marginTop:.05*En},children:un})]})]})]})},X=nn},90895:function(mn,K,n){n.d(K,{Z:function(){return P}});var y=n(31759),s=n.n(y),V=n(26068),B=n.n(V),$=n(67825),E=n.n($),N=n(60213),L=n(62910),D=n(48290),w=n(85618),I=n(82187),g=n.n(I),v=n(75271),F=n(53649),o=n.n(F),p=n(30764),u,h=(0,p.Z)(u||(u=o()([`
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
`])),function(k){return k.sparkPrefix},function(k){return k.sparkPrefix},function(k){return k.antPrefix},function(k){return k.antPrefix},function(k){return k.antPrefix},function(k){return k.antPrefix},function(k){return k.antPrefix},function(k){return k.antPrefix},function(k){return k.sparkPrefix},function(k){return k.antPrefix},function(k){return k.antPrefix}),m=n(52676),r=["labelMarginRight"],c=["tooltip"],x=(0,v.forwardRef)(function(k,nn){var X=k.labelMarginRight,U=X===void 0?void 0:X,H=E()(k,r),G=(0,v.useRef)(null),J=(0,N.getCommonConfig)(),cn=J.sparkPrefix,pn=h();return(0,v.useImperativeHandle)(nn,function(){return G.current}),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(pn,{}),(0,m.jsx)(D.Z,B()(B()({},H),{},{className:g()(k.className,"".concat(cn,"-form"),U==="small"&&"".concat(cn,"-form-label-margin-small")),ref:G,requiredMark:function(Sn,en){return(0,m.jsxs)(m.Fragment,{children:[Sn,en.required&&(0,m.jsx)("span",{className:"".concat(cn,"-required-mark"),children:"*"})]})}}))]})}),R=function(nn){var X=nn.tooltip,U=E()(nn,c),H=(0,m.jsx)(L.Z,{});function G(){if(X){var J=s()(X)==="object"&&!v.isValidElement(X)?B()(B()({},X),{},{icon:X.icon||H}):{title:X,icon:H};return J}}return(0,m.jsx)(D.Z.Item,B()(B()({},U),{},{tooltip:G(),labelCol:nn.labelCol||(nn.layout==="vertical"?{flex:"unset"}:void 0)}))},l=R;l.useStatus=w.Z.useStatus;var M=x;M.Item=l,M.List=D.Z.List,M.ErrorList=D.Z.ErrorList,M.Provider=D.Z.Provider,M.useForm=D.Z.useForm,M.useFormInstance=D.Z.useFormInstance,M.useWatch=D.Z.useWatch;var P=M},70344:function(mn,K,n){n.d(K,{Z:function(){return p}});var y=n(26068),s=n.n(y),V=n(40965),B=n(60213),$=n(5045),E=n(92931),N=n(75271),L=n(53649),D=n.n(L),w=n(30764),I,g=(0,w.Z)(I||(I=D()([`
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
`])),function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix}),v=n(52676),F=function(h){var m=g(),r=(0,B.getCommonConfig)(),c=r.antPrefix,x=(0,N.useMemo)(function(){var R={transitionName:""},l=h.preview;return l===!1?!1:l===!0?R:s()(s()({mask:(0,v.jsxs)("div",{className:"".concat(c,"-image-mask-info"),children:[(0,v.jsx)($.Z,{className:"".concat(c,"-image-mask-info-icon")}),(0,v.jsx)("span",{className:"".concat(c,"-image-mask-info-text"),children:V.Z.get({id:"components.commonComponents.Image.Preview",dm:"\u9884\u89C8"})})]})},l),R)},[h.preview]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{}),(0,v.jsx)(E.Z,s()({preview:x},h))]})},o=F;o.PreviewGroup=E.Z.PreviewGroup;var p=o},38734:function(mn,K,n){n.d(K,{Z:function(){return c}});var y=n(26068),s=n.n(y),V=n(82092),B=n.n(V),$=n(67825),E=n.n($),N=n(60213),L=n(92108),D=n(82187),w=n.n(D),I=n(75271),g=n(53649),v=n.n(g),F=n(30764),o,p=(0,F.Z)(o||(o=v()([`
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
`])),function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix}),u=n(52676),h=["shape"],m=I.forwardRef(function(x,R){var l=x.shape,M=l===void 0?"default":l,P=E()(x,h),k=(0,N.getCommonConfig)(),nn=k.antPrefix,X=p();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(X,{}),(0,u.jsx)(L.Z,s()(s()({},P),{},{className:w()(x.className,B()({},"".concat(nn,"-input-round"),M==="round")),ref:R}))]})}),r=I.forwardRef(function(x,R){var l=(0,N.getCommonConfig)(),M=l.antPrefix,P=p();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(P,{}),(0,u.jsx)(L.Z.TextArea,s()(s()({},x),{},{className:w()("".concat(M,"-text-area"),x.className),ref:R}))]})});Object.assign(m,{TextArea:r,Search:L.Z.Search,Password:L.Z.Password,OTP:L.Z.OTP});var c=m},3983:function(mn,K,n){n.d(K,{Z:function(){return r}});var y=n(26068),s=n.n(y),V=n(82092),B=n.n(V),$=n(67825),E=n.n($),N=n(60213),L=n(6002),D=n(91301),w=n(82187),I=n.n(w),g=n(53649),v=n.n(g),F=n(30764),o,p=(0,F.Z)(o||(o=v()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),u=n(52676),h=["showDivider","closable"],m=function(x){var R=p(),l=(0,N.getCommonConfig)(),M=l.sparkPrefix,P=x.showDivider,k=P===void 0?!0:P,nn=x.closable,X=nn===void 0?!0:nn,U=E()(x,h),H=function(pn){return x.info?(0,u.jsxs)("div",{className:"".concat(M,"-modal-footer-wrapper"),children:[(0,u.jsx)("span",{className:"".concat(M,"-modal-footer-info"),children:x.info}),(0,u.jsx)("div",{className:"".concat(M,"-modal-footer-origin-node"),children:pn})]}):pn},G=X?x.closeIcon||(0,u.jsx)(L.Z,{className:"".concat(M,"-modal-title-close"),onClick:function(pn){var un;(un=x.onCancel)===null||un===void 0||un.call(x,pn)}}):null,J=x.footer===void 0?H:x.footer;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(R,{}),(0,u.jsx)(D.Z,s()(s()({},U),{},{closeIcon:null,title:(0,u.jsxs)("div",{className:"".concat(M,"-modal-title-wrapper"),children:[(0,u.jsx)("div",{className:"".concat(M,"-modal-title"),children:x.title}),G]}),wrapClassName:I()("".concat(M,"-modal"),B()({},"".concat(M,"-show-divider"),k),x.wrapClassName,"animate-in"),footer:J,transitionName:""}))]})};m.useModal=D.Z.useModal,m.success=D.Z.success,m.error=D.Z.error,m.warning=D.Z.warning,m.info=D.Z.info,m.confirm=D.Z.confirm,m.SMALL_WIDTH=640,m.MEDIUM_WIDTH=800,m.LARGE_WIDTH=960;var r=m},94361:function(mn,K,n){var y=n(48305),s=n.n(y),V=n(26068),B=n.n(V),$=n(60213),E=n(72566),N=n(68811),L=n(20855),D=n(18908),w=n(3749),I=n(52676),g=["success","warning","error","info"];function v(o,p){if(o==="success")return(0,I.jsx)(E.Z,{style:{color:"var(--".concat(p,"-color-success)"),fontSize:24}});if(o==="warning")return(0,I.jsx)(N.Z,{style:{color:"var(--".concat(p,"-color-warning)"),fontSize:24}});if(o==="info")return(0,I.jsx)(L.Z,{style:{color:"var(--".concat(p,"-color-info)"),fontSize:24}});if(o==="error")return(0,I.jsx)(D.Z,{style:{color:"var(--".concat(p,"-color-error)"),fontSize:24}})}var F={};F.destroy=w.ZP.destroy,F.open=function(o){var p=(0,$.getCommonConfig)(),u=p.sparkPrefix,h="".concat(u,"-notification");o.className&&(h+=" ".concat(o.className)),w.ZP.open(B()(B()({},o),{},{className:h}))},g.forEach(function(o){F[o]=function(p){var u=(0,$.getCommonConfig)(),h=u.sparkPrefix,m=u.antPrefix,r="".concat(h,"-notification");p.className&&(r+=" ".concat(p.className)),w.ZP[o](B()(B()({},p),{},{className:r,icon:v(o,m)}))}}),F.useNotification=function(o){var p=(0,$.getCommonConfig)(),u=p.sparkPrefix,h=p.antPrefix,m="".concat(u,"-notification"),r=w.ZP.useNotification(o),c=s()(r,2),x=c[0],R=c[1],l={};return g.forEach(function(M){l[M]=function(P){return x[M](B()(B()({},P),{},{className:m,icon:v(M,h)}))}}),l.open=function(M){w.ZP.open(B()(B()({},M),{},{className:m}))},l.destroy=x.destroy,[l,R]},K.Z=F},47525:function(mn,K,n){n.d(K,{X:function(){return $}});var y=n(53649),s=n.n(y),V=n(30764),B,$=(0,V.Z)(B||(B=s()([`
.`,`-pagination {
  color: var(--`,`-color-text);
  font-weight: 500;

  a {
    color: var(--`,`-color-text);
    font-weight: 500;
  }
  
  .`,"-pagination-total-text, .",`-select-selection-item {
    font-weight: 500;
  }
  .`,`-pagination-item-active {
    border-color: var(--`,`-color-border-secondary);
    border-radius: 8px;
      a {
        color: var(--`,`-color-text);
        font-weight: 500;
      }
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
`])),function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix})},85525:function(mn,K,n){var y=n(26068),s=n.n(y),V=n(31759),B=n.n(V),$=n(67825),E=n.n($),N=n(60213),L=n(40965),D=n(86319),w=n(16979),I=n(34232),g=n(90264),v=n(89550),F=n(82187),o=n.n(F),p=n(47525),u=n(52676),h=["hideSwitchButton","className"],m=[10,20,50,100],r=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:m,R=L.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"}),l=L.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"});return{options:x.map(function(M){return{label:"".concat(M," ").concat(R," / ").concat(l),value:Number(M)}})}};K.Z=function(c){var x=c.hideSwitchButton,R=x===void 0?!1:x,l=c.className,M=E()(c,h),P=(0,N.getCommonConfig)(),k=P.sparkPrefix,nn=(0,p.X)(),X=function(){var J=function(pn,un,Sn){return un==="jump-prev"||un==="jump-next"?(0,u.jsx)(D.Z,{className:"".concat(k,"-jump-next-icon")}):R||c.itemRender?Sn:un==="prev"?(0,u.jsx)("a",{children:(0,u.jsxs)(g.Z,{gap:8,children:[(0,u.jsx)(w.Z,{})," ",(0,u.jsx)("span",{children:L.Z.get({id:"components.commonComponents.Pagination.PreviousPage",dm:"\u4E0A\u4E00\u9875"})})]})}):un==="next"?(0,u.jsx)("a",{children:(0,u.jsxs)(g.Z,{gap:8,children:[(0,u.jsx)("span",{children:L.Z.get({id:"components.commonComponents.Pagination.NextPage",dm:"\u4E0B\u4E00\u9875"})})," ",(0,u.jsx)(I.Z,{})]})}):Sn};return J},U;M.showSizeChanger!==null&&M.showSizeChanger!==void 0?U=M.showSizeChanger:U=M.total&&M.total>50;var H=function(){return c.showSizeChanger===!1?!1:B()(c.showSizeChanger)==="object"&&c.showSizeChanger?c.showSizeChanger:c.showSizeChanger===!0||M.total&&M.total>50?r(M.pageSizeOptions):!1};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(nn,{}),(0,u.jsx)(v.Z,s()(s()({itemRender:X()},M),{},{showSizeChanger:H(),className:o()("".concat(k,"-pagination"),l)}))]})}},30959:function(mn,K,n){var y=n(26068),s=n.n(y),V=n(67825),B=n.n(V),$=n(60213),E=n(88602),N=n(62910),L=n(99090),D=n(58911),w=n(95371),I=n(75271),g=n(52676),v=["icon","type","okButtonProps"],F=I.forwardRef(function(o,p){var u=o.icon,h=o.type,m=h===void 0?"confirm":h,r=o.okButtonProps,c=B()(o,v),x=(0,$.getCommonConfig)(),R=x.antPrefix,l=function(){return u||(m==="confirm"?(0,g.jsx)(E.Z,{style:{color:"var(--".concat(R,"-color-warning)")}}):m==="info"?(0,g.jsx)(N.Z,{style:{color:"var(--".concat(R,"-color-info)")}}):m==="warning"?(0,g.jsx)(E.Z,{style:{color:"var(--".concat(R,"-color-warning)")}}):m==="error"?(0,g.jsx)(L.Z,{style:{color:"var(--".concat(R,"-color-error)")}}):m==="success"?(0,g.jsx)(D.Z,{style:{color:"var(--".concat(R,"-color-success)")}}):(0,g.jsx)(E.Z,{style:{color:"var(--".concat(R,"-color-warning)")}}))},M=function(){var k={};return["warning","error"].includes(m)&&(k.danger=!0),s()(s()({},k),r||{})};return(0,g.jsx)(w.Z,s()(s()({},c),{},{ref:p,icon:l(),okButtonProps:M()}))});K.Z=F},86298:function(mn,K,n){var y=n(26068),s=n.n(y),V=n(60213),B=n(65482),$=n(4369),E=n(75271),N=n(52676),L=E.forwardRef(function(D,w){var I=D.content===""||D.content===void 0||D.content===null,g=D.title===""||D.title===void 0||D.title===null,v=D.open!==void 0&&D.open!==null?D.open:I&&g?!1:void 0,F=(0,V.getCommonConfig)(),o=F.antPrefix;return(0,N.jsx)($.Z,s()(s()({},D),{},{arrow:D.arrow||!1,open:v,ref:w,getPopupContainer:D.getPopupContainer||function(p){return(0,B.Q)(p,".".concat(o,"-app"))}}))});K.Z=L},40517:function(mn,K,n){n.d(K,{Z:function(){return xn},x:function(){return W}});var y=n(26068),s=n.n(y),V=n(82092),B=n.n(V),$=n(15558),E=n.n($),N=n(48305),L=n.n(N),D=n(67825),w=n.n(D),I=n(24884),g=n(99362),v=n(86112),F=n(18893),o=n(86137),p=n(72771),u=n(82187),h=n.n(u),m=n(8057),r=n(75271),c=n(53649),x=n.n(c),R=n(87571),l,M,P=(0,R.kc)(function(bn){var vn=bn.css,sn=bn.token;return{onCreate:vn(l||(l=x()([`
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
  `])),sn.colorBorderSecondary,sn.colorBgContainer),cm:vn(M||(M=x()([`
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
  `])),sn.colorTextSecondary,sn.colorBlue,sn.colorPurple,sn.colorPurpleBg,sn.colorBgContainer,sn.colorText,sn.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:sn.colorBgBase,border:"1px solid ".concat(sn.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:sn.colorTextTertiary,backgroundColor:sn.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),k=n(25298),nn=n.n(k),X=n(17069),U=n.n(X),H=n(25451),G=new H.Y1({regexp:/\$\{([\w\u4e00-\u9fa5]+)\}/g,decoration:function(){return H.p.mark({class:"cm-prompt-var"})}}),J=H.lg.fromClass(function(){function bn(vn){nn()(this,bn),B()(this,"placeholders",void 0),this.placeholders=G.createDeco(vn)}return U()(bn,[{key:"update",value:function(sn){this.placeholders=G.updateDeco(sn,this.placeholders)}}]),bn}(),{decorations:function(vn){return vn.placeholders}}),cn=[J],pn=n(96594);function un(){var bn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],vn=arguments.length>1?arguments[1]:void 0,sn=vn.onCreate,ln=vn.createBtnText;return(0,pn.ys)({override:[function(Mn){var jn,hn=Mn.matchBefore(/\/(\w+)?/);return!hn||hn&&hn.from===hn.to&&!Mn.explicit?null:{from:(jn=hn==null?void 0:hn.from)!==null&&jn!==void 0?jn:0,options:(sn?[].concat(E()(bn),[{label:"/NEW_VAR",boost:-99}]):bn).map(function(Dn){return s()(s()({},Dn),{},{displayLabel:Dn.label==="/NEW_VAR"?ln:Dn.label.slice(1),apply:function(O,Rn,An,Cn){if(Rn.label==="/NEW_VAR")return O.dispatch({changes:{from:An,to:Cn,insert:""}}),sn==null?void 0:sn();var En=Rn.label.slice(1),yn="${".concat(En,"}");O.dispatch({changes:{from:An,to:Cn,insert:yn}})}})})}}]})}var Sn=n(60213),en=n(52676),an=["maxLength","variables","onCreate","createBtnText","tipsText","extensions","className","value","onChange","readOnly","basicSetup"],W={markdown:[(0,g.JH)()]},dn=[],gn=function(vn){var sn,ln=vn.maxLength,Mn=vn.variables,jn=Mn===void 0?dn:Mn,hn=vn.onCreate,Dn=vn.createBtnText,Hn=Dn===void 0?"+ \u65B0\u589E\u53D8\u91CF":Dn,O=vn.tipsText,Rn=vn.extensions,An=vn.className,Cn=vn.value,En=vn.onChange,yn=vn.readOnly,Tn=vn.basicSetup,In=w()(vn,an),ae=P(),qn=ae.styles,Me=(0,r.useState)(!1),pe=L()(Me,2),Be=pe[0],he=pe[1],Fe=r.useContext(o.ZP.ConfigContext),Pe=((sn=Fe.theme)===null||sn===void 0?void 0:sn.algorithm)===p.Z.darkAlgorithm,ke=(0,Sn.getCommonConfig)(),Ze=ke.antPrefix,ye=(0,r.useMemo)(function(){return Pe?v.Pc:v.Zp},[Pe]),be=(0,r.useMemo)(function(){return ln?[m.yy.transactionFilter.of(function(zn){if(!zn.docChanged||zn.newDoc.length<=ln)return zn;var Le=zn.newDoc.length-ln,de=[];return zn.changes.iterChanges(function(se,Wn,oe,A,fe){var Un=fe.toString();if(Un.length>0){var Ce=Math.max(0,Un.length-Le);de.push({from:se,to:Wn,insert:Un.slice(0,Ce)})}else de.push({from:se,to:Wn,insert:""})}),[{changes:de,sequential:!0}]})]:[]},[ln]),ue=(0,r.useMemo)(function(){return[].concat(E()(Rn||[].concat(E()(W.markdown),E()(cn),[un(E()(jn).map(function(zn){return{label:"/".concat(zn.code),info:zn.label}})||[],{onCreate:hn,createBtnText:Hn})])),E()(be))},[jn,Rn,hn,Hn,be]);(0,r.useEffect)(function(){return he(!0),function(){he(!1)}},[]);var Oe=r.useMemo(function(){return O===!1?(0,en.jsx)("div",{className:qn.tips}):O||(0,en.jsxs)("div",{className:qn.tips,children:['\u8F93\u5165/"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,en.jsx)(I.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[O,qn.tips]);return Be?(0,en.jsxs)("div",{className:qn.root,children:[(0,en.jsx)(F.ZP,s()({className:h()(An,qn.cm,B()({},qn.onCreate,hn)),extensions:ue,value:Cn,theme:ye,lang:"markdown",onChange:En,basicSetup:s()({lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1},Tn),readOnly:yn,editable:!yn},In),ye),(0,en.jsxs)("div",{className:qn.footer,children:[Oe,ln?(0,en.jsxs)("div",{style:((Cn==null?void 0:Cn.length)||0)>ln?{color:"var(--".concat(Ze,"-color-error)")}:void 0,children:[(Cn==null?void 0:Cn.length)||0,"/",ln]}):null]})]}):null},xn=(0,r.memo)(gn)},81483:function(mn,K,n){var y=n(26068),s=n.n(y),V=n(67825),B=n.n(V),$=n(49327),E=n(52676),N=["texture"];K.Z=function(L){var D=L.texture,w=D===void 0?!1:D,I=B()(L,N);return(0,E.jsx)($.Z,s()(s()({},I),{},{texture:w}))}},77652:function(mn,K,n){n.d(K,{J:function(){return R},Z:function(){return M}});var y=n(26068),s=n.n(y),V=n(82092),B=n.n(V),$=n(60213),E=n(7441),N=n(82187),L=n.n(N),D=n(75271),w=n(53649),I=n.n(w),g=n(30764),v,F=(0,g.Z)(v||(v=I()([`
.`,"-slider.","-slider.",`-slider-no-marks {
  margin: 0;
}
`])),function(P){return P.antPrefix},function(P){return P.sparkPrefix},function(P){return P.sparkPrefix}),o=n(67825),p=n.n(o),u=n(32496),h,m=(0,g.Z)(h||(h=I()([`
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
`])),function(P){return P.sparkPrefix},function(P){return P.sparkPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix}),r=n(52676),c=["styles","classNames","sliderProps","inputNumberProps"];function x(P){var k,nn,X=(0,$.getCommonConfig)(),U=X.sparkPrefix,H=P.styles,G=P.classNames,J=P.sliderProps,cn=P.inputNumberProps,pn=p()(P,c),un=m(),Sn=P.marks||((k=P.sliderProps)===null||k===void 0?void 0:k.marks)||null,en=Sn||B()(B()({},P.min,P.min),P.max,P.max),an=Sn&&((nn=Object.keys(Sn))===null||nn===void 0?void 0:nn.length)>0,W=function(gn){var xn=typeof gn=="string"?parseFloat(gn):gn;if(xn===null||isNaN(xn)){P.onChange(null);return}xn<P.min?P.onChange(P.min):xn>P.max?P.onChange(P.max):P.onChange(xn)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(un,{}),(0,r.jsxs)("div",{style:H==null?void 0:H.wrapper,className:L()("".concat(U,"-slider-input"),B()({},"".concat(U,"-slider-input-has-marks"),an),G==null?void 0:G.wrapper),onMouseUp:function(){var gn;(gn=P.onBlur)===null||gn===void 0||gn.call(P)},children:[(0,r.jsx)(R,s()(s()(s()({disabled:P.disabled,min:P.min,max:P.max,step:P.step,tooltip:{getPopupContainer:function(gn){return gn}}},pn),J),{},{marks:en,style:s()(s()(s()({},H==null?void 0:H.slider),J==null?void 0:J.style),{},{width:"100%"}),className:L()(G==null?void 0:G.slider,J==null?void 0:J.className),onChange:W,value:P.value===null?void 0:P.value})),(0,r.jsx)(u.Z,s()(s()({controls:!1,step:P.step,min:P.min,max:P.max,disabled:P.disabled},cn),{},{onBlur:function(){var gn;(gn=P.onBlur)===null||gn===void 0||gn.call(P)},value:P.value,onChange:W,style:s()(s()({},H==null?void 0:H.inputNumber),cn==null?void 0:cn.style),className:L()(G==null?void 0:G.inputNumber,cn==null?void 0:cn.className)}))]})]})}var R=D.forwardRef(function(P,k){var nn=(0,$.getCommonConfig)(),X=nn.sparkPrefix,U=nn.antPrefix,H=F();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(H,{}),(0,r.jsx)(E.Z,s()(s()({},P),{},{className:L()("".concat(X,"-slider"),B()(B()({},"".concat(X,"-slider-no-marks"),!Object.keys(P.marks||{}).length),"".concat(U,"-slider-reverse"),P.reverse),P.className),ref:k}))]})}),l=R;Object.assign(l,{Input:x});var M=l},70076:function(mn,K,n){n.d(K,{Z:function(){return F}});var y=n(82092),s=n.n(y),V=n(60213),B=n(72771),$=n(22576),E=n(82187),N=n.n(E),L=n(53649),D=n.n(L),w=n(30764),I,g=(0,w.Z)(I||(I=D()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix}),v=n(52676),F=function(o){var p=o.indicator,u=o.spinning,h=u===void 0?!0:u,m=o.children,r=o.style,c=o.className,x=(0,V.getCommonConfig)(),R=x.sparkPrefix,l=B.Z.useToken(),M=g(),P=(0,v.jsxs)("svg",{className:"".concat(R,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,v.jsx)("defs",{children:(0,v.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,v.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,v.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,v.jsx)("g",{children:(0,v.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:l.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,v.jsx)("g",{children:(0,v.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:l.token.colorPrimary,fillOpacity:"1"})})]})]}),k=o.tip||o.showProgress&&(0,v.jsxs)("div",{children:[(0,v.jsxs)("span",{children:["loading",o.percent!==void 0&&o.percent!==null&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:o.percent}),"%"]})]}),(0,v.jsx)($.Z,{percent:o.percent,showInfo:!1})]})||null;return m?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(M,{}),(0,v.jsxs)("div",{className:N()("".concat(R,"-spinner-overlay"),c),style:r,children:[(0,v.jsx)("div",{className:N()("".concat(R,"-spinner-content"),s()({},"".concat(R,"-spinning"),h)),children:m}),h&&(0,v.jsxs)("div",{className:"".concat(R,"-spinner"),children:[(0,v.jsx)("div",{className:"".concat(R,"-indicator"),children:p||P}),(0,v.jsx)("div",{className:"".concat(R,"-title"),children:k})]})]})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(M,{}),(0,v.jsx)("div",{className:N()("".concat(R,"-spinner"),c),style:r,children:h&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"".concat(R,"-indicator"),children:p||P}),(0,v.jsx)("div",{className:"".concat(R,"-title"),children:k})]})})]})}},75229:function(mn,K,n){n.d(K,{Z:function(){return I}});var y=n(26068),s=n.n(y),V=n(468),B=n(53649),$=n.n(B),E=n(30764),N,L=(0,E.Z)(N||(N=$()([`
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
`])),function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),D=n(52676),w=function(v){var F=L();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(F,{}),(0,D.jsx)(V.Z,s()({},v))]})},I=w},52849:function(mn,K,n){n.d(K,{Z:function(){return F}});var y=n(26068),s=n.n(y),V=n(60213),B=n(98852),$=n(82187),E=n.n($),N=n(53649),L=n.n(N),D=n(30764),w,I=(0,D.Z)(w||(w=L()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),g=n(52676),v=function(p){var u=(0,V.getCommonConfig)(),h=u.sparkPrefix,m=I();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m,{}),(0,g.jsx)(B.Z,s()(s()({},p),{},{className:E()("".concat(h,"-steps"),p.className)}))]})},F=v},90118:function(mn,K,n){n.d(K,{Z:function(){return o}});var y=n(26068),s=n.n(y),V=n(67825),B=n.n(V),$=n(90264),E=n(10616),N=n(60213),L=n(53649),D=n.n(L),w=n(30764),I,g=(0,w.Z)(I||(I=D()([`
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
`])),function(p){return p.sparkPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.sparkPrefix}),v=n(52676),F=["label","className"],o=function(p){var u=g(),h=p.label,m=p.className,r=B()(p,F),c=(0,N.getCommonConfig)(),x=c.sparkPrefix;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u,{}),(0,v.jsxs)($.Z,{align:"center",gap:8,className:m,children:[(0,v.jsx)(E.Z,s()(s()({},r),{},{className:"".concat(x,"-switch")})),h&&(0,v.jsx)("span",{className:"".concat(x,"-switch-label"),children:h})]})]})}},18762:function(mn,K,n){n.d(K,{Z:function(){return h}});var y=n(26068),s=n.n(y),V=n(67825),B=n.n(V),$=n(60213),E=n(2004),N=n(63267),L=n(82187),D=n.n(L),w=n(47525),I=n(53649),g=n.n(I),v=n(30764),F,o=(0,v.Z)(F||(F=g()([`
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
`])),function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix}),p=n(52676),u=["columns"];function h(m){var r,c=(0,$.getCommonConfig)(),x=c.sparkPrefix,R=m.columns,l=B()(m,u);R=(r=R)===null||r===void 0?void 0:r.map(function(k){return s()(s()({},k),{},{sortIcon:k.sortIcon||function(){return(0,p.jsx)(E.Z,{style:{fontSize:16,marginLeft:8}})}})});var M=o(),P=(0,w.X)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(M,{}),(0,p.jsx)(P,{}),(0,p.jsx)(N.Z,s()({className:D()("".concat(x,"-table")),columns:R},l))]})}},96295:function(mn,K,n){n.d(K,{Z:function(){return m}});var y=n(26068),s=n.n(y),V=n(67825),B=n.n(V),$=n(60213),E=n(40753),N=n(82187),L=n.n(N),D=n(75271),w=n(53649),I=n.n(w),g=n(30764),v,F=(0,g.Z)(v||(v=I()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),o=n(52676),p=["children","className","bordered","color","size"],u=function(r){return r.Purple="purple",r.Pink="pink",r.Yellow="yellow",r.Teal="teal",r.Blue="blue",r.Mauve="mauve",r.Transparent="transparent",r.Success="success",r.Error="error",r.Warning="warning",r.Info="info",r}(u||{}),h=(0,D.forwardRef)(function(r,c){var x=r.children,R=r.className,l=r.bordered,M=l===void 0?!1:l,P=r.color,k=P===void 0?"mauve":P,nn=r.size,X=nn===void 0?"middle":nn,U=B()(r,p),H=F(),G=(0,$.getCommonConfig)(),J=G.sparkPrefix,cn=Object.values(u).includes(k);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(H,{}),(0,o.jsx)(E.Z,s()(s()({className:L()("".concat(J,"-tag ").concat(J,"-tag-").concat(k," ").concat(J,"-tag-").concat(X),R),bordered:M,color:cn?void 0:k},U),{},{ref:c,children:x}))]})}),m=h},2567:function(mn,K,n){n.d(K,{Z:function(){return R}});var y=n(26068),s=n.n(y),V=n(67825),B=n.n(V),$=n(60213),E=n(41246),N=n(72771),L=n(86137),D=n(34374),w=n(82187),I=n.n(w),g=n(75271),v=n(53649),F=n.n(v),o=n(30764),p,u=(0,o.Z)(p||(p=F()([`
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
`])),function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix}),h=n(52676),m=["className","popupClassName"],r=["className","popupClassName"],c=function(M){var P=M.className,k=M.popupClassName,nn=B()(M,m),X=N.Z.useToken(),U=X.token,H=(0,$.getCommonConfig)(),G=H.sparkPrefix,J=u();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(J,{}),(0,h.jsx)(L.ZP,{theme:{components:{DatePicker:{activeBorderColor:U.colorPrimary}}},children:(0,h.jsx)(D.Z,s()({suffixIcon:(0,h.jsx)(E.Z,{}),className:I()("".concat(G,"-picker"),P),popupClassName:I()("".concat(G,"-picker-dropdown"),k)},nn))})]})},x=function(M){var P=M.className,k=M.popupClassName,nn=B()(M,r),X=N.Z.useToken(),U=X.token,H=(0,$.getCommonConfig)(),G=H.sparkPrefix,J=u();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(J,{}),(0,h.jsx)(L.ZP,{theme:{components:{DatePicker:{activeBorderColor:U.colorPrimary}}},children:(0,h.jsx)(D.Z.RangePicker,s()({suffixIcon:(0,h.jsx)(E.Z,{}),className:I()("".concat(G,"-picker"),P),popupClassName:I()("".concat(G,"-picker-dropdown"),k),popupStyle:{padding:0}},nn))})]})};c.RangePicker=x;var R=c},95726:function(mn,K,n){n.d(K,{Z:function(){return m}});var y=n(26068),s=n.n(y),V=n(67825),B=n.n(V),$=n(60213),E=n(84240),N=n(82187),L=n.n(N),D=n(53649),w=n.n(D),I=n(30764),g,v=(0,I.Z)(g||(g=w()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),F=n(52676),o=["className"],p=["className"],u=function(c){var x=c.className,R=B()(c,o),l=(0,$.getCommonConfig)(),M=l.sparkPrefix,P=v();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(P,{}),(0,F.jsx)(E.Z,s()({className:L()("".concat(M,"-upload"),x)},R))]})},h=function(c){var x=c.className,R=B()(c,p),l=(0,$.getCommonConfig)(),M=l.sparkPrefix,P=v();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(P,{}),(0,F.jsx)(E.Z.Dragger,s()({className:L()("".concat(M,"-upload"),x)},R))]})};u.Dragger=h,u.LIST_IGNORE=E.Z.LIST_IGNORE;var m=u},86822:function(mn,K,n){n.d(K,{Z:function(){return $}});var y=n(26068),s=n.n(y),V=n(75271),B=new Map;function $(E){var N=E.globalStyle,L=E.name;(0,V.useLayoutEffect)(function(){var D=B.get(N)||0;if(D)B.set(N,s()(s()({},D),{},{count:D.count+1}));else{var w=document.createElement("style"),I=Math.random().toString(36).slice(2);w.innerHTML=N,w.dataset.id=I,w.dataset.flag="bailian-ui-use-style",L&&w.setAttribute("name",L),document.head.appendChild(w),B.set(N,{count:1,id:I})}return function(){var g=B.get(N);B.set(N,s()(s()({},g),{},{count:g.count-1})),setTimeout(function(){var v=B.get(N);if((v==null?void 0:v.count)<=0){var F;B.delete(N),(F=document.head.querySelector('[data-id="'+v.id+'"]'))===null||F===void 0||F.remove()}},100)}},[N])}},5012:function(mn,K,n){n.r(K),n.d(K,{Alert:function(){return u.Z},AlertDialog:function(){return P.default},Anchor:function(){return k.Z},Audio:function(){return Vr.Z},Avatar:function(){return nn.Z},Badge:function(){return h.Z},Breadcrumb:function(){return X.Z},Button:function(){return U.Z},Card:function(){return H.Z},Cascader:function(){return m.Z},Checkbox:function(){return G.Z},CodeBlock:function(){return J.ZP},CodeBlockLangExtensionsMap:function(){return J.xO},Collapse:function(){return cn.Z},CollapsePanel:function(){return pn.Z},ConfigProvider:function(){return Ht.ZP},DatePicker:function(){return un.Z},Descriptions:function(){return Gr.Z},Drawer:function(){return Sn.Z},Dropdown:function(){return en.Z},EllipsisTip:function(){return Rn},Empty:function(){return An.Z},FileCard:function(){return ar.s},FileIcon:function(){return ar.Z},FloatButton:function(){return r.Z},Form:function(){return Cn.Z},HelpIcon:function(){return Me},IconButton:function(){return yn.Z},IconFont:function(){return pe.Z},Image:function(){return Be.Z},Input:function(){return he.Z},InputNumber:function(){return c.Z},MdEditor:function(){return ue.Z},MdEditorLangExtensionsMap:function(){return ue.x},MediaPreview:function(){return Jr.Z},MobileAlertDialog:function(){return mt},MobileDrawer:function(){return bt},MobileModal:function(){return St},Modal:function(){return Pe.Z},Pagination:function(){return Ze.Z},Popconfirm:function(){return ye.Z},Popover:function(){return be.Z},Progress:function(){return x.Z},PromptsEditor:function(){return ue.Z},Radio:function(){return R.ZP},RadioButton:function(){return Oe.default},Result:function(){return zn.Z},Select:function(){return l.default},Skeleton:function(){return M.Z},SlateEditor:function(){return Qr},Slider:function(){return tr.Z},SliderSelector:function(){return qr},Spinner:function(){return Kr.Z},Statistic:function(){return _r.Z},Steps:function(){return Le.Z},Switch:function(){return nt.Z},Table:function(){return et.Z},Tabs:function(){return rt.Z},Tag:function(){return tt.Z},TimePicker:function(){return at.Z},Tooltip:function(){return In.Z},Upload:function(){return ot.Z},Video:function(){return it.Z},bailianDarkTheme:function(){return Dr},bailianTheme:function(){return Er},base64Decoder:function(){return Ut},base64Encoder:function(){return zt},carbonDarkTheme:function(){return Kt},carbonTheme:function(){return Qt},copy:function(){return jr.JG},delay:function(){return pr},generateTheme:function(){return o},generateThemeByToken:function(){return p.Z},getCommonConfig:function(){return xn.getCommonConfig},message:function(){return Fe.Z},notification:function(){return ke.Z},parseJsonSafely:function(){return $t},purpleDarkTheme:function(){return Dr},purpleTheme:function(){return Er},renderTooltip:function(){return jr.rb},requestPop:function(){return Pr},requestPopSse:function(){return Wt},requestSse:function(){return Cr},safeHtml:function(){return Dt.t},setCommonConfig:function(){return xn.setCommonConfig},useCommonConfig:function(){return xn.useCommonConfig},useGlobalStyle:function(){return Et.Z},waitForDom:function(){return wt},waitForFunc:function(){return Sr}});var y=n(23577),s=n(19888),V=n(44719),B=n(57249),$=function(t){var a=t.r/255,d=t.g/255,i=t.b/255,f=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),b=d<=.03928?d/12.92:Math.pow((d+.055)/1.055,2.4),j=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4);return .2126*f+.7152*b+.0722*j},E=function(t){var a=$(t);return a>.5},N=function(t){var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null},L=function(t,a,d){return"#"+((1<<24)+(t<<16)+(a<<8)+d).toString(16).slice(1).toUpperCase()},D=function(t,a,d){var i=t/255,f=a/255,b=d/255,j=Math.max(i,f,b),S=Math.min(i,f,b),Z,C,T=(j+S)/2;if(j===S)Z=C=0;else{var Y=j-S;switch(C=T>.5?Y/(2-j-S):Y/(j+S),j){case i:Z=((f-b)/Y+(f<b?6:0))/6;break;case f:Z=((b-i)/Y+2)/6;break;case b:Z=((i-f)/Y+4)/6;break;default:Z=0}}return{h:Z*360,s:C*100,l:T*100}},w=function(t,a,d){var i=t/360,f=a/100,b=d/100,j,S,Z;if(f===0)j=S=Z=b;else{var C=function(rn,on,Pn){var Q=Pn;return Q<0&&(Q+=1),Q>1&&(Q-=1),Q<.16666666666666666?rn+(on-rn)*6*Q:Q<.5?on:Q<.6666666666666666?rn+(on-rn)*(.6666666666666666-Q)*6:rn},T=b<.5?b*(1+f):b+f-b*f,Y=2*b-T;j=C(Y,T,i+1/3),S=C(Y,T,i),Z=C(Y,T,i-1/3)}return{r:Math.round(j*255),g:Math.round(S*255),b:Math.round(Z*255)}},I=function(t,a){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=N(t);if(!i)return t;var f=D(i.r,i.g,i.b);f.l=Math.max(0,Math.min(100,f.l+a)),f.s=Math.max(0,Math.min(100,f.s+d));var b=w(f.h,f.s,f.l);return L(b.r,b.g,b.b)},g=function(t,a){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=N(t);if(!i)return t;var f=D(i.r,i.g,i.b);f.l=a,d!==null&&(f.s=d);var b=w(f.h,f.s,f.l);return L(b.r,b.g,b.b)},v=function(t,a){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=N(t);if(!i)return t;var f=D(i.r,i.g,i.b);f.l=a,f.s=Math.max(0,Math.min(100,f.s*d));var b=w(f.h,f.s,f.l);return L(b.r,b.g,b.b)},F=function(t){var a=t.primaryHex,d=t.darkMode,i=d===void 0?!1:d,f=t.bgBaseHex||(i?"#000000":"#ffffff"),b=t.textBaseHex||(i?"#E7E7ED":"#1a1a1a"),j=N(a);if(!j)return null;var S=D(j.r,j.g,j.b),Z=N(f),C=N(b),T=Z?D(Z.r,Z.g,Z.b):{h:210,s:8,l:i?5:99},Y=Math.max(8,Math.min(S.s,40)),tn=Math.max(12,Math.min(S.s*.6,35)),rn=i?g(a,Math.max(S.l-5,42),S.s*.95):a,on=N(rn),Pn=on?D(on.r,on.g,on.b):S,Q={borderRadiusXS:s.borderRadiusXS,borderRadiusSM:s.borderRadiusSM,borderRadius:s.borderRadius,borderRadiusLG:s.borderRadiusLG,borderRadiusXL:s.borderRadiusXL,borderRadiusFull:s.borderRadiusFull,wireframe:s.wireframe,colorPrimary:i?g(a,Math.max(S.l-5,42),S.s*.95):a,colorPrimaryHover:i?g(a,Math.min(S.l+10,55),S.s*.95):I(a,S.l<50?10:-10,0),colorPrimaryActive:i?g(a,Math.max(S.l-10,35),S.s*.95):I(a,S.l<50?-10:-20,0),colorPrimaryBg:i?g(a,13,Y*.6):g(a,96,Y*.8),colorPrimaryBgHover:i?g(a,13,Y*.6):g(a,94,Y),colorPrimaryBorder:i?g(a,17,tn*.8):g(a,88,tn*.8),colorPrimaryBorderHover:i?g(a,22,tn):g(a,82,tn),colorPrimaryText:i?g(a,Math.max(S.l-5,42),S.s*.95):a,colorPrimaryTextHover:i?g(a,Math.min(S.l+10,55),S.s*.95):I(a,S.l<50?10:-10,0),colorPrimaryTextActive:i?g(a,Math.max(S.l-10,35),S.s*.95):I(a,S.l<50?-10:-20,0),colorTextOnPrimary:E(on)?"#000000":"#ffffff",colorTextBase:b,colorText:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.88)"),colorTextSecondary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.65)"),colorTextTertiary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.45)"),colorTextQuaternary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.25)"),colorTextWhite:"#fff",colorBgBase:f,colorBgContainer:i?v(f,Math.min(T.l+S.l*.08,12),1.2):v(f,Math.max(100-S.l*.05,96),.8),colorBgElevated:i?v(f,Math.min(T.l+3,8),1.2):f,colorBgLayout:f,colorBgSpotlight:i?"rgba(".concat(N(v(f,28,1.2)).r,", ").concat(N(v(f,28,1.2)).g,", ").concat(N(v(f,28,1.2)).b,", 0.85)"):"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.85)"),colorBgMask:i?"rgba(".concat(Z.r,", ").concat(Z.g,", ").concat(Z.b,", 0.8)"):"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.45)"),colorBorder:i?"rgba(".concat(N(v(f,28,2)).r,", ").concat(N(v(f,28,2)).g,", ").concat(N(v(f,28,2)).b,", 0.8)"):v(f,81,2.5),colorBorderSecondary:i?"rgba(".concat(N(v(f,22,1.8)).r,", ").concat(N(v(f,22,1.8)).g,", ").concat(N(v(f,22,1.8)).b,", 0.8)"):v(f,88,2),colorFill:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.18)"):v(f,81,2.5)+"5c",colorFillSecondary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.12)"):v(f,81,2.5)+"33",colorFillTertiary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.08)"):v(f,81,2.5)+"26",colorFillQuaternary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.04)"):v(f,81,2.5)+"1a",colorFillDisable:i?v(b,55,.8):v(f,86,1.8),colorLink:i?g(a,Math.max(S.l-5,42),S.s*.95):a,colorInfo:i?y.colorInfo:s.colorInfo,colorInfoHover:i?y.colorInfoHover:s.colorInfoHover,colorInfoText:i?y.colorInfoText:s.colorInfoText,colorInfoBg:i?y.colorInfoBg:s.colorInfoBg,colorInfoBgHover:i?y.colorInfoBgHover:s.colorInfoBgHover,colorInfoBorder:i?y.colorInfoBorder:s.colorInfoBorder,colorInfoBorderHover:i?y.colorInfoBorderHover:s.colorInfoBorderHover,colorSuccess:i?y.colorSuccess:s.colorSuccess,colorSuccessHover:i?y.colorSuccessHover:s.colorSuccessHover,colorSuccessBg:i?y.colorSuccessBg:s.colorSuccessBg,colorSuccessBgHover:i?y.colorSuccessBgHover:s.colorSuccessBgHover,colorSuccessBorder:i?y.colorSuccessBorder:s.colorSuccessBorder,colorSuccessBorderHover:i?y.colorSuccessBorderHover:s.colorSuccessBorderHover,colorWarning:i?y.colorWarning:s.colorWarning,colorWarningHover:i?y.colorWarningHover:s.colorWarningHover,colorWarningBg:i?y.colorWarningBg:s.colorWarningBg,colorWarningBgHover:i?y.colorWarningBgHover:s.colorWarningBgHover,colorWarningBorder:i?y.colorWarningBorder:s.colorWarningBorder,colorWarningBorderHover:i?y.colorWarningBorderHover:s.colorWarningBorderHover,colorError:i?y.colorError:s.colorError,colorErrorHover:i?y.colorErrorHover:s.colorErrorHover,colorErrorBg:i?y.colorErrorBg:s.colorErrorBg,colorErrorBgHover:i?y.colorErrorBgHover:s.colorErrorBgHover,colorErrorBorder:i?y.colorErrorBorder:s.colorErrorBorder,colorErrorBorderHover:i?y.colorErrorBorderHover:s.colorErrorBorderHover,colorPurple:i?y.colorPurple:s.colorPurple,colorPurpleHover:i?y.colorPurpleHover:s.colorPurpleHover,colorPurpleBg:i?y.colorPurpleBg:s.colorPurpleBg,colorPink:i?y.colorPink:s.colorPink,colorPinkHover:i?y.colorPinkHover:s.colorPinkHover,colorPinkBg:i?y.colorPinkBg:s.colorPinkBg,colorYellow:i?y.colorYellow:s.colorYellow,colorYellowHover:i?y.colorYellowHover:s.colorYellowHover,colorYellowBg:i?y.colorYellowBg:s.colorYellowBg,colorOrange:i?y.colorOrange:s.colorOrange,colorOrangeHover:i?y.colorOrangeHover:s.colorOrangeHover,colorOrangeBg:i?y.colorOrangeBg:s.colorOrangeBg,colorTeal:i?y.colorTeal:s.colorTeal,colorTealHover:i?y.colorTealHover:s.colorTealHover,colorTealBg:i?y.colorTealBg:s.colorTealBg,colorBlue:i?y.colorBlue:s.colorBlue,colorBlueHover:i?y.colorBlueHover:s.colorBlueHover,colorBlueBg:i?y.colorBlueBg:s.colorBlueBg,colorMauve:i?y.colorMauve:s.colorMauve,colorMauveHover:i?y.colorMauveHover:s.colorMauveHover,colorMauveBg:i?y.colorMauveBg:s.colorMauveBg,colorSlate:i?y.colorSlate:s.colorSlate||"#1E293B",colorSlateHover:i?y.colorSlateHover:s.colorSlateHover||"#475569",colorSlateBg:i?y.colorSlateBg:s.colorSlateBg||"#E2E8F0",colorLavender:i?y.colorLavender:s.colorLavender||"#A77BFF",colorLavenderHover:i?y.colorLavenderHover:s.colorLavenderHover||"#BB99FF",colorLavenderBg:i?y.colorLavenderBg:s.colorLavenderBg||"rgba(226, 212, 255, 0.8)",boxShadow:i?y.boxShadow:s.boxShadow,boxShadowSecondary:i?y.boxShadowSecondary:s.boxShadowSecondary,boxShadowTertiary:i?y.boxShadowTertiary:s.boxShadowTertiary,boxShadowTertiaryLeft:i?y.boxShadowTertiaryLeft:s.boxShadowTertiaryLeft,boxShadowInput:i?y.boxShadowInput:s.boxShadowInput};return Q},o=F,p=n(18729),u=n(80017),h=n(49339),m=n(96320),r=n(45365),c=n(32496),x=n(22576),R=n(6944),l=n(45908),M=n(86585),P=n(7481),k=n(21245),nn=n(93178),X=n(40),U=n(60823),H=n(61902),G=n(98618),J=n(49570),cn=n(94684),pn=n(61406),un=n(84360),Sn=n(19743),en=n(38356),an=n(26068),W=n.n(an),dn=n(31759),gn=n.n(dn),xn=n(60213),bn=n(89462),vn=n(82187),sn=n.n(vn),ln=n(75271),Mn=n(53649),jn=n.n(Mn),hn=n(30764),Dn,Hn=(0,hn.Z)(Dn||(Dn=jn()([`
div.`,`-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`])),function(e){return e.sparkPrefix}),O=n(52676);function Rn(e){var t=e.className,a=t===void 0?"":t,d=e.style,i=d===void 0?{}:d,f=e.children,b=e.rows,j=b===void 0?1:b,S=e.tooltip,Z=e.tooltipMaxHeight,C=Z===void 0?"90vh":Z,T=(0,xn.getCommonConfig)(),Y=T.sparkPrefix,tn=Hn();function rn(){var on={maxHeight:C,overflow:"auto"};if(gn()(S)==="object"){var Pn=S,Q=Pn.title,q=Pn.styles;return{title:Q||f,styles:W()(W()({},q),{},{body:W()(W()({},on),q==null?void 0:q.body)})}}return{title:S||f,styles:{body:on}}}return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(tn,{}),(0,O.jsx)(bn.Z.Paragraph,{className:sn()("".concat(Y,"-ellipsis-tip"),a),style:i,ellipsis:{rows:j,tooltip:rn()},children:f})]})}var An=n(49327),Cn=n(90895),En=n(20855),yn=n(94662),Tn=n(39862),In=n(19546),ae,qn=(0,hn.Z)(ae||(ae=jn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix});function Me(e){var t=(0,Tn.X)(),a=qn(),d=e.style,i=e.content,f=e.className,b=e.popoverProps,j=(0,xn.getCommonConfig)(),S=j.sparkPrefix;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(t,{}),(0,O.jsx)(a,{}),(0,O.jsx)(In.Z,W()(W()({title:i,overlayInnerStyle:{maxWidth:376},trigger:"hover",style:d},b),{},{children:(0,O.jsx)(yn.Z,{className:sn()("".concat(S,"-help-icon"),f),icon:(0,O.jsx)(En.Z,{}),shape:"circle",bordered:!1,size:"small"})}))]})}var pe=n(48004),Be=n(70344),he=n(38734),Fe=n(39971),Pe=n(3983),ke=n(94361),Ze=n(85525),ye=n(30959),be=n(86298),ue=n(40517),Oe=n(8893),zn=n(81483),Le=n(52849),de=n(48305),se=n.n(de),Wn=n(40965),oe=n(86212),A=n(75040),fe=n(28533),Un=n(20335),Ce,Tr=(0,hn.Z)(Ce||(Ce=jn()([`
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
`]))),Nr=n(15558),qe=n.n(Nr),Mr=(0,ln.memo)(function(e){var t=e.attributes,a=e.children;return(0,O.jsx)("div",W()(W()({},t),{},{style:{marginTop:"8px"},children:a}))}),_e,Br=(0,hn.Z)(_e||(_e=jn()([`
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
`]))),Fr=(0,ln.memo)(function(e){var t=e.attributes,a=e.renderVarLabel,d=Br();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{}),(0,O.jsxs)("span",W()(W()({},t),{},{children:[e.children,(0,O.jsx)("span",{className:"spark-editor-var-tag",children:a?a(e.element.code):e.element.label})]}))]})}),Vt=function(t){return Object.keys(t).map(function(a){return{label:t[a].label,desc:t[a].desc,value:a}})},kr=[{code:"s",isParagraph:!0,out:[],inner:[],name:Wn.Z.get({id:"components.SlateEditor.utils.constant.Paragraph",dm:"\u6BB5\u843D"}),render:Mr,type:"double"},{code:"var",isParagraph:!1,out:["s"],inner:[],name:Wn.Z.get({id:"components.SlateEditor.utils.constant.Variable",dm:"\u53D8\u91CF"}),render:Fr,isInline:!0,isVoid:!0,type:"single"}],Ie=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},Gt=function(t){return t.replace(/&/g,"&amp;").replace(/{/g,"").replace(/}/g,"").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},Zr=function(t){return t.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")},Re=function e(t,a){var d="",i=a||{},f=i.tagRules,b=f===void 0?{}:f;return t.forEach(function(j,S){if(A.W_.isElement(j)){var Z=b[j.type];if(!Z)d+=Ie(j.text);else switch(Z.code){case"image":d+="![".concat(j.fileName,"](").concat(j.src,")");break;case"pdf":d+="[".concat(j.fileName,"](").concat(j.src,")");break;case"s":d+="".concat(e(j.children,a)).concat(S<t.length-1?`
`:"");break;case"var":d+="${".concat(j.code,"}");default:break}}else d+=Ie(j.text)}),d},nr=function(t,a){if(t&&t.children.length){var d=Re(t.children,a);return d==="<s></s>"?"":Zr(d)}return""},je=function(t){if(!t)return"";var a="",d=Ie(t).replace(/\$\{([^{}]+?)\}/g,function(i,f){return'<var code="'.concat(f,'" label="${').concat(f,'}" />')});return d.split(`
`).forEach(function(i){a+="<s>".concat(i,"</s>")}),"<speak>".concat(a,"</speak>")},Or=function e(t){var a,d=[];return(t==null||(a=t.childNodes)===null||a===void 0?void 0:a.length)>0&&t.childNodes.forEach(function(i,f,b){var j=i.nodeType,S=i.nodeName;if(j===1){for(var Z={},C=0;C<i.attributes.length;C++){var T=i.attributes[C],Y=T.nodeName,tn=T.nodeValue;Z[Y]=tn}var rn=W()({type:S},Z);i.childNodes.length>0?rn.children=e(i):rn.children=[{text:""}],d.push(rn),S!=="s"&&(f>0&&b[f-1].nodeType===1&&d.unshift({text:""}),f===b.length-1&&d.push({text:""}))}else j===3&&d.push({text:i.nodeValue||""})}),d},Se=function(t){if(t){var a=new DOMParser().parseFromString(t,"text/xml");return Or(a)}},Lr=function(t){if(!t||t.includes("</speak>"))return t;var a=t;return a.includes("<s>")||(a="<s>".concat(a,"</s>")),"<speak>".concat(a,"</speak>")},er=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a={};return[].concat(qe()(t),qe()(kr)).forEach(function(d){a[d.code]||(a[d.code]=d)}),a},Ir=n(90228),kn=n.n(Ir),Rr=n(87999),_n=n.n(Rr),rr=function(t,a,d){if(!(!t||!a)){var i=t.selection,f=null;i&&(f=i.focus),d!=null&&d.at&&(f=d==null?void 0:d.at),f||(f={path:[0,0],offset:0});var b=f,j=b.path,S=b.offset,Z=A.NB.get(t,A.y$.parent(j));if(!A.ML.isVoid(t,Z)){var C=A.NB.string(A.NB.get(t,j)),T=C.substring(0,S-(d!=null&&d.deletePrefix?1:0)),Y=C.substring(S,C.length);A.ML.withoutNormalizing(t,function(){t.apply({type:"insert_node",node:{text:Y},path:j}),t.apply({type:"insert_node",node:a,path:j}),t.apply({type:"insert_node",node:{text:T},path:j});var tn=A.y$.next(A.y$.next(A.y$.next(j)));t.apply({type:"remove_node",path:tn,node:A.NB.get(t,tn)});var rn={path:A.y$.next(A.y$.next(j)),offset:0};t.apply({type:"set_selection",properties:null,newProperties:{anchor:rn,focus:rn}}),Un.F3.focus(t),t.onChange()})}}},Ar=function(){var e=_n()(kn()().mark(function t(a,d,i){var f,b,j,S,Z,C,T,Y,tn,rn,on,Pn,Q,q,Nn,Bn,Kn,Fn,wn,ee,Zn,ie,Vn,le,Gn,Jn,te,On,Ln,$n,Yn,fn;return kn()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(!(!a||!d)){_.next=2;break}return _.abrupt("return");case 2:if(b=a.selection,j=i||{},S=j.tip,Z=j.selection,C=Z===void 0?b:Z,T=i==null||(f=i.rules)===null||f===void 0?void 0:f[d.type],!(C&&!A.e6.isCollapsed(C))){_.next=45;break}if(tn=A.NB.fragment(a,C),rn=Ee(tn),rn!==""){_.next=10;break}return _.abrupt("return");case 10:if(on=De(A.e6.edges(C)),Pn=se()(on,2),Q=Pn[0],q=Pn[1],A.ML.isVoid(a,A.NB.get(a,A.y$.parent(Q.path)))&&(Q.path=A.y$.next(A.y$.parent(Q.path)),Q.offset=0),A.ML.isVoid(a,A.NB.get(a,A.y$.parent(q.path)))&&(q.path=A.y$.previous(A.y$.parent(q.path)),q.offset=A.NB.string(A.NB.get(a,q.path)).length),A.y$.hasPrevious(q.path)&&A.NB.get(a,A.y$.parent(Q.path))===A.NB.get(a,A.y$.previous(q.path))&&Q.offset===0&&q.offset===0&&(Nn=A.y$.previous(A.y$.parent(Q.path)),Bn=A.NB.get(a,Nn),Q.path=Nn,Q.offset=Bn.text.length),A.NB.parent(a,Q.path)!==A.NB.parent(a,q.path)){for(Kn=A.NB.get(a,Q.path),Fn=Ee(A.NB.fragment(a,{anchor:{path:q.path,offset:0},focus:q}));A.xv.isText(Kn)&&Kn.text===""&&rn===Fn;)Q.path.splice(Q.path.length-1,1,1,0),Kn=A.NB.get(a,Q.path);for(wn=A.NB.get(a,q.path),ee=A.NB.string(A.NB.get(a,A.e6.edges(C)[0].path)),Zn=Ee(A.NB.fragment(a,{anchor:Q,focus:{path:Q.path,offset:ee.length}}));A.xv.isText(wn)&&wn.text===""&&rn===Zn;)ie=q.path[q.path.length-1],q.path.splice(q.path.length-1,1,ie-1),wn=A.NB.get(a,q.path),A.W_.isElement(wn)&&(q.path.push(wn.children.length-1),q.offset=ee.length)}if(A.NB.parent(a,Q.path)===A.NB.parent(a,q.path)){_.next=18;break}return oe.ZP.info(Wn.Z.get({id:"components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect",dm:"\u5212\u9009\u8303\u56F4\u6709\u8BEF"})),_.abrupt("return");case 18:Vn=A.y$.parent(Q.path),le=(T==null?void 0:T.name)||Ae(),Gn=A.NB.get(a,Vn),Jn=i==null||(Y=i.rules)===null||Y===void 0?void 0:Y[Gn.type];case 22:if(!(T!=null&&T.out&&Vn.length>1)){_.next=30;break}if(T.out.includes(Gn.type)){_.next=27;break}return te=(Jn==null?void 0:Jn.name)||Ae(),oe.ZP.warning(Wn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn",dm:"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185"},{wrapTagName:le,tagName:te})),_.abrupt("return");case 27:Vn=A.y$.parent(Vn),_.next=22;break;case 30:if(!(T!=null&&T.inner&&A.NB.get(a,Q.path)!==A.NB.get(a,q.path))){_.next=42;break}On=A.y$.next(Q.path);case 32:if(A.y$.equals(On,q.path)){_.next=42;break}if($n=A.NB.get(a,On),Yn=i==null||(Ln=i.rules)===null||Ln===void 0?void 0:Ln[$n.type],!(A.W_.isElement($n)&&!T.inner.includes($n.type))){_.next=39;break}return fn=(Yn==null?void 0:Yn.name)||Ae(),oe.ZP.warning(Wn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn",dm:"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011"},{wrapTagName:le,tagName:fn})),_.abrupt("return");case 39:On=A.y$.next(On),_.next=32;break;case 42:A.ML.withoutNormalizing(a,function(){var Xn=A.NB.parent(a,Q.path),re=A.NB.fragment(Xn,{anchor:{path:[Q.path[Q.path.length-1]],offset:Q.offset},focus:{path:[q.path[q.path.length-1]],offset:q.offset}}),ge=A.NB.string(A.NB.get(a,Q.path));if(A.y$.equals(Q.path,q.path))a.apply({type:"remove_text",path:Q.path,offset:Q.offset,text:ge.substring(Q.offset,q.offset)});else{a.apply({type:"remove_text",path:Q.path,offset:Q.offset,text:ge.substring(Q.offset,ge.length)});for(var xe=A.y$.next(Q.path);!A.y$.equals(xe,q.path);)a.apply({type:"remove_node",path:xe,node:A.NB.get(a,xe)}),q.path=A.y$.previous(q.path);var Ge=A.NB.string(A.NB.get(a,q.path));a.apply({type:"remove_text",path:q.path,offset:0,text:Ge.substring(0,q.offset)})}if(!A.y$.equals(Q.path,q.path)){var Ne=A.NB.get(a,q.path);a.apply({type:"remove_node",path:q.path,node:Ne});var Je=A.NB.string(Ne);a.apply({type:"insert_text",path:Q.path,offset:Q.offset,text:Je})}rr(a,W()(W()({},d),{},{children:re}),{at:Q,rules:i==null?void 0:i.rules})}),_.next=46;break;case 45:S&&oe.ZP.warning(S);case 46:case"end":return _.stop()}},t)}));return function(a,d,i){return e.apply(this,arguments)}}(),Jt=function(t,a,d){if(!(!t||!a)){var i=Node.get(t,a),f=De(i.children).reverse();Editor.withoutNormalizing(t,function(){t.apply({type:"remove_node",node:i,path:a}),f.forEach(function(rn){t.apply({type:"insert_node",node:rn,path:a})});for(var b=Path.parent(a),j=Node.get(t,b),S=0;Node.has(j,[S+1]);)if(Text.isText(Node.get(j,[S]))&&Text.isText(Node.get(j,[S+1]))){var Z=_toConsumableArray(b);Z.push(S+1);var C=Node.get(t,Z),T=Node.string(C);t.apply({type:"remove_node",path:Z,node:C});var Y=Path.previous(Z),tn=Node.string(Node.get(t,Y));t.apply({type:"insert_text",path:Path.previous(Z),offset:tn.length,text:T}),j=Node.get(t,b)}else S++;d==null||d(),Path.previous(a)})}},Wr=function(t,a,d){var i=d.at;t.apply({type:"set_node",path:i,properties:a,newProperties:a}),t.onChange()},Yt=function(t,a,d){t.apply({type:"remove_node",path:d,node:Node.get(t,d)}),t.apply({type:"insert_node",path:d,node:a})},wr=function(t,a){t&&(A.ML.withoutNormalizing(t,function(){var d=De(t.children);d.forEach(function(f){t.apply({type:"remove_node",path:[0],node:f})});var i=a?De(a):[{type:"s",children:[{text:""}]}];i.reverse(),i.forEach(function(f){t.apply({type:"insert_node",path:[0],node:f})})}),t.onChange())},Ee=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.reduce(function(a,d){return a+A.NB.string(d)},"")},De=function(t){return JSON.parse(JSON.stringify(t))},Ae=function(){var t="";return t},Xt=function(t){var a;return(a=t[0])===null||a===void 0||(a=a.children)===null||a===void 0?void 0:a.map(function(d){return d.children.map(function(i){return i.text}).join("")}).join("")},qt=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,a=t%60,d=parseInt("".concat(t/60)),i=0;return d>60&&(d=d%60,i=parseInt("".concat(d/60))),"".concat(i?"".concat(We(i),":"):"").concat(We(d),":").concat(We(a))},We=function(t){return t>=10?"".concat(t):"0".concat(t)},Hr=function(t,a){if(!(!t||!a))return Un.F3.findPath(t,a)},$r=function(t){t&&A.ML.withoutNormalizing(t,function(){var a=A.ML.end(t,[]);A.YR.select(t,a),Un.F3.focus(t),t.onChange()})},zr=function(t,a,d){var i=t.isInline,f=t.isVoid,b=t.insertText,j=t.insertBreak,S=t.apply;t.isInline=function(C){var T;return((T=d[C.type])===null||T===void 0?void 0:T.isInline)||i(C)},t.isVoid=function(C){var T;return((T=d[C.type])===null||T===void 0?void 0:T.isVoid)||f(C)};var Z=function(T){var Y=parseInt(t.maxLength||a||"1000"),tn=nr(t,{tagRules:d}),rn=tn.length;if(rn+T.length>Y?(b(T.substring(0,Y-rn)),fe.MO.withoutSaving(t,function(){b(T.substring(Y-rn,T.length))})):b(T),t.selection&&rn+T.length>Y){var on=t.selection.focus,Pn=on.path,Q=on.offset,q=Q-(rn+T.length-Y),Nn=T.substring(Y-rn,T.length),Bn=Wn.Z.get({id:"components.SlateEditor.utils.withEditor.YouCanEnterAMaximum",dm:"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57"},{maxLen:Y});fe.MO.withoutSaving(t,function(){t.apply({type:"remove_text",path:Pn,offset:q,text:Nn})}),oe.ZP.warning(Bn)}};return t.insertText=Z,t.insertFragment=function(C){var T=Ee(C);Z(T)},t.insertBreak=function(){var C=t.selection;if(C){var T=Array.from(A.ML.nodes(t,{at:C,match:function(on){return!A.ML.isEditor(on)&&A.W_.isElement(on)&&on.type!=="s"}})),Y=se()(T,1),tn=Y[0];if(tn)return;j()}},t.apply=function(C){C.type==="set_selection"&&we||S(C)},t},Ur=(0,ln.forwardRef)(function(e,t){var a=Tr(),d=e.value,i=e.wordLimit,f=i===void 0?1e3:i,b=e.disabled,j=e.onChange,S=e.variables,Z=(0,ln.useRef)(!1),C=(0,ln.useRef)(er(e.tagRules)),T=(0,ln.useMemo)(function(){return zr((0,Un.BU)((0,fe.VC)((0,A.Jh)())),f,C.current)},[]),Y=(0,ln.useRef)(T.selection),tn=(0,ln.useRef)(S);(0,ln.useEffect)(function(){C.current=er(e.tagRules)},[e.tagRules]),(0,ln.useEffect)(function(){tn.current=S},[S]),(0,ln.useEffect)(function(){var fn;if(!Z.current){Z.current=!0;return}T.maxLength=f;var z=Zn();Gn(((fn=Se(je(z==null?void 0:z.slice(0,f))))===null||fn===void 0||(fn=fn[0])===null||fn===void 0?void 0:fn.children)||[{type:"s",children:[{text:""}]}])},[f]),(0,ln.useImperativeHandle)(t,function(){return{editor:T,getEditorValue:Zn,_insertNodes:Vn,_setNodes:ie,_setEditorContent:Gn,_findNodePath:te,_wrapNodes:le,_serialize:On,_generateTextBySelection:Ln,_insertFragment:$n,_setEditorContentByStr:Jn}});var rn=(0,ln.useMemo)(function(){var fn=Se(Lr(je(d))),z;return fn&&(fn[0].type==="speak"?z=fn[0].children:z=fn),{initValue:z}},[d]),on=rn.initValue,Pn=(0,ln.useState)(on||[{type:"s",children:[{text:""}]}]),Q=se()(Pn,2),q=Q[0],Nn=Q[1],Bn=function(z){JSON.stringify((T==null?void 0:T.selection)||"")!==JSON.stringify(Y.current||"")&&(Y.current=T==null?void 0:T.selection);var _=Zn();d!==_&&(j==null||j(Zn()),Nn(z))},Kn=function(z){var _=z.element,Xn=_.type,re=C.current[Xn].render;return re?(0,O.jsx)(re,W()(W()({},z),{},{renderVarLabel:e.renderVarLabel})):(0,O.jsx)(O.Fragment,{})},Fn=(0,ln.useCallback)(function(fn){var z=fn.attributes,_=fn.children,Xn=fn.leaf;return(0,O.jsx)("span",W()(W()({},z),{},{style:{paddingLeft:Xn.text===""?"3px":void 0},children:_}))},[]),wn=function(){we=!0},ee=function(){we=!1},Zn=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return nr(T,W()(W()({},z),{},{tagRules:C.current}))},ie=function(z,_){Wr(T,z,_)},Vn=function(z){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};rr(T,z,W()(W()({},_),{},{rules:C.current}))},le=function(z){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ar(T,z,W()(W()({},_),{},{rules:C.current}))},Gn=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];wr(T,z)},Jn=function(){var z,_=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";Gn(((z=Se(je(_==null?void 0:_.slice(0,f))))===null||z===void 0||(z=z[0])===null||z===void 0?void 0:z.children)||[{type:"s",children:[{text:""}]}])},te=function(z){return Hr(T,z)},On=function(z){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Re(z,W()(W()({},_),{},{tagRules:C.current}))},Ln=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!T.selection)return null;var _=A.NB.fragment(T,T.selection);return Re(_,W()(W()({},z),{},{tagRules:C.current}))},$n=function(z){var _,Xn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,re=Zn();if(re.length>=f){oe.ZP.warning(Wn.Z.get({id:"components.commonComponents.SlateEditor.TheNumberOfWordsCannot",dm:"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57"}));return}(!T.selection||Xn)&&$r(T);var ge=re.endsWith("/n");Xn&&re&&!ge&&T.insertBreak();var xe=z.slice(0,f-re.length),Ge=Se(je(xe))||[];(_=Ge[0])===null||_===void 0||_.children.forEach(function(Ne,Je){var Ye;Je!==0&&T.insertBreak(),(Ye=Ne.children)===null||Ye===void 0||Ye.forEach(function(Xe){Xe.text?T.insertText(Xe.text):Vn(Xe)})})};(0,ln.useEffect)(function(){var fn=Zn();d!==fn&&(j==null||j(Zn()))},[]);var Yn=function(z){var _=z.clipboardData.getData("text/plain"),Xn=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);$n(Xn,!1),z.preventDefault()};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(a,{}),(0,O.jsx)("div",{id:"text-editor",className:sn()("text-editor",e.className),children:(0,O.jsx)(Un.mH,{editor:T,value:q,onChange:Bn,children:(0,O.jsx)(Un.CX,{onKeyDown:e.onKeyDown,placeholder:e.placeholder||Wn.Z.get({id:"components.commonComponents.SlateEditor.EnterHere",dm:"\u5728\u8FD9\u91CC\u8F93\u5165"}),onBlur:e.onBlur,onFocus:e.onFocus,className:sn()("text-editor-content",e.contentClassName),readOnly:b,renderElement:Kn,renderLeaf:Fn,onCompositionStart:wn,onCompositionEnd:ee,onPaste:Yn,maxLength:e.wordLimit,onCopy:function(z){var _=Ln()||"";z.clipboardData.setData("text/plain",_),z.preventDefault()}})})})]})}),Qr=Ur,we=!1,tr=n(77652),Kr=n(70076),Vr=n(8639),Gr=n(62518),ar=n(46763),Jr=n(36070),Yr=n(82092),ve=n.n(Yr),or,Xr=(0,hn.Z)(or||(or=jn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix});function qr(e){var t=(0,xn.getCommonConfig)(),a=t.sparkPrefix,d=Xr(),i=function(b){var j=typeof b=="string"?parseFloat(b):b;if(j===null||isNaN(j)){var S;(S=e.onChange)===null||S===void 0||S.call(e,null);return}if(j<e.min){var Z;(Z=e.onChange)===null||Z===void 0||Z.call(e,e.min)}else if(j>e.max){var C;(C=e.onChange)===null||C===void 0||C.call(e,e.max)}else{var T;(T=e.onChange)===null||T===void 0||T.call(e,j)}};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{}),(0,O.jsxs)("div",{onMouseUp:function(){var b;return(b=e.onBlur)===null||b===void 0?void 0:b.call(e)},className:sn()("".concat(a,"-slider-selector"),e.className),children:[(0,O.jsx)(tr.Z,{disabled:e.disabled,onChange:i,value:e.value===null?void 0:e.value,min:e.min,max:e.max,step:e.step,marks:e.marks||ve()(ve()({},e.min,e.min),e.max,e.max),tooltip:{getPopupContainer:function(b){return b}}}),(0,O.jsx)("div",{style:W()({width:"48px"},e.inputNumberWrapperStyle),children:(0,O.jsx)(c.Z,{disabled:e.disabled,controls:!1,min:e.min,max:e.max,onBlur:function(){var b;return(b=e.onBlur)===null||b===void 0?void 0:b.call(e)},step:e.step,value:e.value,onChange:i,precision:e.precision})})]})]})}var _r=n(75229),nt=n(90118),et=n(18762),rt=n(98587),tt=n(96295),at=n(2567),ot=n(95726),it=n(70588),lt=n(67825),ce=n.n(lt),st=n(58911),ct=n(88602),ut=n(62910),dt=n(99090),Te=n(90264),ne=n(91301),ir,lr=(0,hn.Z)(ir||(ir=jn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),ft=["children","type","danger","title","width","className"],sr=function(){var t=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,d=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(d,"px"),function(){document.body.style.overflow=t,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,d)}},cr=function(t){var a=function(on){var Pn=on.type,Q=on.title,q=(0,xn.getCommonConfig)(),Nn=q.antPrefix;switch(Pn){case"success":return(0,O.jsxs)(Te.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,O.jsx)(st.Z,{style:{color:"var(--".concat(Nn,"-color-success)"),fontSize:18,margin:"0 3px"}}),Q]});case"warning":case"confirm":return(0,O.jsxs)(Te.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,O.jsx)(ct.Z,{style:{color:"var(--".concat(Nn,"-color-warning)"),fontSize:18,margin:"0 3px"}}),Q]});case"info":return(0,O.jsxs)(Te.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,O.jsx)(ut.Z,{style:{color:"var(--".concat(Nn,"-color-info)"),fontSize:18,margin:"0 3px"}}),Q]});case"error":return(0,O.jsxs)(Te.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,O.jsx)(dt.Z,{style:{color:"var(--".concat(Nn,"-color-error)"),fontSize:18,margin:"0 3px"}}),Q]});default:return Wn.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},d=t.children,i=t.type,f=i===void 0?"info":i,b=t.danger,j=b===void 0?!1:b,S=t.title,Z=t.width,C=Z===void 0?"auto":Z,T=t.className,Y=T===void 0?"":T,tn=ce()(t,ft);return{width:C,transitionName:"",restProps:tn,closeIcon:null,title:a({type:f,title:S}),okButtonProps:{danger:f==="error"||f==="warning"||j},destroyOnClose:!0,className:sn()(Y,"animate-in","".concat((0,xn.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:t.content||d,children:d}},ur=function(t){var a=cr(t),d=lr();return(0,ln.useEffect)(function(){if(t.open){var i=sr();return i}},[t.open]),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{}),(0,O.jsx)(ne.Z,W()(W()({width:a.width,transitionName:""},a.restProps),{},{closeIcon:null,title:a.title,okButtonProps:a.okButtonProps||{},destroyOnClose:a.destroyOnClose,className:a.className,children:a.content||a.children}))]})},vt=["success","info","warning","error","confirm"];vt.forEach(function(e){ur[e]=function(t){var a=cr(W()(W()({},t),{},{type:e})),d=sr();function i(){var f=lr();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f,{}),a.content]})}return ne.Z.confirm(W()(W()(W()({},a),a.restProps),{},{content:(0,O.jsx)(i,{}),icon:null,afterClose:function(){var b;if(d(),(b=a.restProps)!==null&&b!==void 0&&b.afterClose){var j;(j=a.restProps).afterClose.apply(j,arguments)}}}))}});var mt=ur,gt=n(14679),xt=n(56652),dr,fr=(0,hn.Z)(dr||(dr=jn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),pt=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],ht=function(t){var a=t.onOk,d=t.onCancel,i=t.okText,f=i===void 0?"\u786E\u5B9A":i,b=t.okButtonProps,j=t.cancelText,S=j===void 0?"\u53D6\u6D88":j,Z=t.cancelButtonProps,C=t.info,T=t.footer,Y=ce()(t,pt),tn=fr(),rn=(0,xn.getCommonConfig)(),on=rn.antPrefix,Pn=function(q){if(d)d();else{var Nn;(Nn=Y.onClose)===null||Nn===void 0||Nn.call(Y,q)}};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(tn,{}),(0,O.jsx)(Sn.Z,W()(W()({},Y),{},{footer:T||(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("div",{className:"".concat(on,"-drawer-footer-info"),children:C}),(0,O.jsxs)("div",{className:"".concat(on,"-drawer-footer-buttons"),children:[(0,O.jsx)(U.Z,W()(W()({onClick:Pn},Z),{},{children:S})),(0,O.jsx)(U.Z,W()(W()({type:"primary",onClick:a},b),{},{children:f}))]})]})}))]})},Pt=ht,yt=["children","className","style","showDivider"],vr=function(t){var a=t.children,d=t.className,i=t.style,f=t.showDivider,b=f===void 0?!0:f,j=ce()(t,yt),S=fr(),Z=(0,xn.getCommonConfig)(),C=Z.sparkPrefix,T=Z.antPrefix;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(S,{}),(0,O.jsx)(xt.Z,W()(W()({closeIcon:(0,O.jsx)(gt.Z,{size:24}),className:sn()("".concat(C,"-drawer"),d,ve()({},"".concat(T,"-show-divider"),b)),style:W()({},i)},j),{},{children:a}))]})};Object.assign(vr,{Confirm:Pt});var bt=vr,Ct=n(6002),mr,gr=(0,hn.Z)(mr||(mr=jn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),jt=["showDivider","closable"],xr=function(){var t=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,d=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(d,"px"),function(){document.body.style.overflow=t,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,d)}},Qn=function(t){var a=gr(),d=(0,xn.getCommonConfig)(),i=d.sparkPrefix,f=t.showDivider,b=f===void 0?!0:f,j=t.closable,S=j===void 0?!0:j,Z=ce()(t,jt);(0,ln.useEffect)(function(){if(t.open){var tn=xr();return tn}},[t.open]);var C=function(rn){return t.info?(0,O.jsxs)("div",{className:"".concat(i,"-modal-footer-wrapper"),children:[(0,O.jsx)("span",{className:"".concat(i,"-modal-footer-info"),children:t.info}),(0,O.jsx)("div",{className:"".concat(i,"-modal-footer-origin-node"),children:rn})]}):rn},T=S?t.closeIcon||(0,O.jsx)(Ct.Z,{className:"".concat(i,"-modal-title-close"),onClick:function(rn){var on;(on=t.onCancel)===null||on===void 0||on.call(t,rn)}}):null,Y=t.footer===void 0?C:t.footer;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(a,{}),(0,O.jsx)(ne.Z,W()(W()({},Z),{},{centered:!1,closeIcon:null,width:t.width||"auto",title:(0,O.jsxs)("div",{className:"".concat(i,"-modal-title-wrapper"),children:[(0,O.jsx)("div",{className:sn()("".concat(i,"-modal-title"),ve()({},"".concat(i,"-modal-title-padding"),S)),children:t.title}),T]}),wrapClassName:sn()("".concat(i,"-modal"),ve()({},"".concat(i,"-show-divider"),b),t.wrapClassName,"animate-in"),footer:Y,transitionName:""}))]})};Qn.useModal=ne.Z.useModal;var me=function(t){return function(a){var d=xr(),i=(0,xn.getCommonConfig)(),f=i.sparkPrefix,b=a==null?void 0:a.afterClose,j=a==null?void 0:a.content;function S(){var C=gr();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(C,{}),j]})}var Z=W()(W()({},a),{},{content:(0,O.jsx)(S,{}),width:a.width||"auto",centered:!1,transitionName:"",wrapClassName:sn()("".concat(f,"-modal"),a.wrapClassName,"animate-in"),afterClose:function(){d();for(var T=arguments.length,Y=new Array(T),tn=0;tn<T;tn++)Y[tn]=arguments[tn];b==null||b.apply(void 0,Y)}});return t(Z)}};Qn.success=me(ne.Z.success),Qn.error=me(ne.Z.error),Qn.warning=me(ne.Z.warning),Qn.info=me(ne.Z.info),Qn.confirm=me(ne.Z.confirm),Qn.SMALL_WIDTH=640,Qn.MEDIUM_WIDTH=800,Qn.LARGE_WIDTH=960;var St=Qn,Et=n(86822);function pr(){return He.apply(this,arguments)}function He(){return He=_n()(kn()().mark(function e(){var t,a=arguments;return kn()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=a.length>0&&a[0]!==void 0?a[0]:100,i.abrupt("return",new Promise(function(f){setTimeout(f,t)}));case 2:case"end":return i.stop()}},e)})),He.apply(this,arguments)}var Dt=n(65482),hr=n(8209),Tt=["product","action","url","version","region","headers"],Nt=function(){var e=_n()(kn()().mark(function a(d,i,f){var b,j,S,Z,C,T,Y,tn,rn,on,Pn,Q,q,Nn,Bn;return kn()().wrap(function(Fn){for(;;)switch(Fn.prev=Fn.next){case 0:return j=d.product,S=d.action,Z=d.url,C=d.version,T=d.region,Y=d.headers,tn=Y===void 0?{}:Y,rn=ce()(d,Tt),on="".concat(Z||"/data/api.json","?action=").concat(S,"&product=").concat(j),C&&(on+="&version=".concat(C)),Pn={sec_token:((b=window.ALIYUN_CONSOLE_CONFIG)===null||b===void 0?void 0:b.SEC_TOKEN)||"",region:T},i&&(Pn.params=JSON.stringify(i)),f&&Object.assign(Pn,f),Q=W()({method:"post",credentials:"same-origin",headers:W()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},tn)},rn),q=Object.assign({},Q),q.body=(0,hr.stringify)(Pn),Fn.next=11,fetch(on,q);case 11:return Nn=Fn.sent,Fn.next=14,Nn.json();case 14:if(Bn=Fn.sent,!(Bn.code!=="200"&&!Bn.successResponse)){Fn.next=17;break}return Fn.abrupt("return",Promise.reject(Bn));case 17:return Fn.abrupt("return",Bn);case 18:case"end":return Fn.stop()}},a)}));function t(a,d,i){return e.apply(this,arguments)}return t}(),Pr=Nt;function Mt(e,t){return $e.apply(this,arguments)}function $e(){return $e=_n()(kn()().mark(function e(t,a){var d,i,f;return kn()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:i=t==null||(d=t.getReader)===null||d===void 0?void 0:d.call(t),i||(console.log("[sse]error: Can Not Find Reader Object"),console.log("[sse]StreamInfo: ",t));case 2:return j.next=4,i.read();case 4:if((f=j.sent).done){j.next=8;break}try{a(f.value)}catch(S){console.log("[sse-error][onmessage] pleach check `onmessage` or `onJsonText`.",S)}j.next=2;break;case 8:case"end":return j.stop()}},e)})),$e.apply(this,arguments)}function Bt(e){var t,a,d,i=!1;return function(b){t===void 0?(t=b,a=0,d=-1):t=kt(t,b);for(var j=t.length,S=0;a<j;){i&&(t[a]===10&&(S=++a),i=!1);for(var Z=-1;a<j&&Z===-1;++a)switch(t[a]){case 58:d===-1&&(d=a-S);break;case 13:i=!0;case 10:Z=a;break}if(Z===-1)break;e(t.subarray(S,Z),d),S=a,d=-1}S===j?t=void 0:S!==0&&(t=t.subarray(S),a-=S)}}function Ft(e,t,a){var d=yr(),i=new TextDecoder;return function(b,j){if(b.length===0)a==null||a(d),d=yr();else if(j>0){var S=i.decode(b.subarray(0,j)),Z=j+(b[j+1]===32?2:1),C=i.decode(b.subarray(Z));switch(S){case"data":d.data=d.data?"".concat(d.data,`
`).concat(C):C;break;case"event":d.event=C;break;case"id":e(d.id=C);break;case"retry":var T=parseInt(C,10);isNaN(T)||t(d.retry=T);break}}}}function kt(e,t){var a=new Uint8Array(e.length+t.length);return a.set(e),a.set(t,e.length),a}function yr(){return{data:"",event:"",id:"",retry:void 0}}var Zt=["signal","headers","onopen","onmessage","onclose","onerror","fetch","autoRetryTime","timeout","debug"],ze="text/event-stream",Ot=1e3,br="last-event-id";function Cr(e,t){return Ue.apply(this,arguments)}function Ue(){return Ue=_n()(kn()().mark(function e(t,a){var d,i,f,b,j,S,Z,C,T,Y,tn,rn,on;return kn()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return d=a.signal,i=a.headers,f=a.onopen,b=a.onmessage,j=a.onclose,S=a.onerror,Z=a.fetch,C=a.autoRetryTime,T=a.timeout,Y=a.debug,tn=Y===void 0?!1:Y,rn=ce()(a,Zt),on=0,Q.abrupt("return",new Promise(function(q,Nn){var Bn=W()({},i);Bn.accept||(Bn.accept=ze);var Kn=Ot,Fn=0,wn=0,ee=new AbortController;function Zn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(tn&&console.log("[sse] dispose"),window.clearTimeout(Fn),window.clearTimeout(wn),!te){var On,Ln;(On=ee)===null||On===void 0||(Ln=On.abort)===null||Ln===void 0||Ln.call(On)}}function ie(){window.clearTimeout(wn),T!==0&&(wn=window.setTimeout(function(){tn&&console.log("[sse] timeout"),Nn(new Error("timeout")),S==null||S(new Error("timeout")),Zn()},T||60*1e3))}d==null||d.addEventListener("abort",function(){Zn(),q()});var Vn=Z!=null?Z:window.fetch,le=f!=null?f:Lt;function Gn(){return Jn.apply(this,arguments)}function Jn(){return Jn=_n()(kn()().mark(function te(){var On,Ln,$n,Yn;return kn()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.prev=0,ie(),z.next=4,Vn(t,W()(W()({},rn),{},{headers:Bn,signal:(On=ee)===null||On===void 0?void 0:On.signal}));case 4:return Ln=z.sent,z.next=7,le(Ln);case 7:if(Ln.body){z.next=11;break}return tn&&console.log("[sse]no body, delay 100ms"),z.next=11,pr(100);case 11:return tn&&console.log("[sse]response.body",Ln.body),z.next=14,Mt(Ln.body,Bt(Ft(function(_){_?Bn[br]=_:delete Bn[br]},function(_){Kn=_},function(_){ie(),b==null||b(_)})));case 14:ee=null,j==null||j(),Zn(),q(),z.next=43;break;case 20:if(z.prev=20,z.t0=z.catch(0),z.t0&&console.error("[sse]err",z.t0),!(!(d!=null&&d.aborted)&&C&&on<C)){z.next=39;break}return z.prev=24,on+=1,Yn=($n=S==null?void 0:S(z.t0))!==null&&$n!==void 0?$n:Kn,window.clearTimeout(Fn),typeof Yn=="number"&&(tn&&console.log("[sse] retry "+on),Fn=window.setTimeout(Gn,Yn)),z.abrupt("return",Promise.resolve());case 32:z.prev=32,z.t1=z.catch(24),tn&&console.log("[sse] reject innerErr ",z.t1),Zn(),Nn(z.t1);case 37:z.next=43;break;case 39:tn&&console.log("[sse] reject finally"),Zn(z.t0 instanceof Response||z.t0 instanceof DOMException&&z.t0.name==="AbortError"),S==null||S(z.t0),Nn(z.t0);case 43:case"end":return z.stop()}},te,null,[[0,20],[24,32]])})),Jn.apply(this,arguments)}Gn()}));case 3:case"end":return Q.stop()}},e)})),Ue.apply(this,arguments)}function Lt(e){var t=e.headers.get("content-type");if(!(t!=null&&t.startsWith(ze)))throw new Error("Expected content-type to be ".concat(ze,", Actual: ").concat(t))}function It(e){return Qe.apply(this,arguments)}function Qe(){return Qe=_n()(kn()().mark(function e(t){var a,d,i,f,b,j,S;return kn()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return a=t.action,d=t.body,i=t.product,f=t.version,b=t.region,j=t.params,S={action:a,product:i,region:b,url:"/tool/sse/get.json",version:f},C.abrupt("return",Pr(S,j,{content:JSON.stringify(d)}));case 3:case"end":return C.stop()}},e)})),Qe.apply(this,arguments)}function Rt(e,t,a,d){var i=t.onMessage,f=t.onClose,b=t.onError,j=t.timeout,S=e.body,Z=e.uri,C=e.headers,T=e.query,Y=e.path,tn=C["Content-Type"],rn="".concat(Z.replace(/\/$/,"")).concat(Y);T&&Object.keys(T).length&&(rn="".concat(rn,"?").concat((0,hr.stringify)(T)));try{d.value=!1,Cr(rn,{method:"POST",body:tn==="application/x-www-form-urlencoded"?new URLSearchParams(JSON.parse(S)):S,signal:a.signal,timeout:j,headers:C,onopen:function(Pn){return Pn.status!==200?Promise.reject(Pn):Promise.resolve()},onmessage:function(Pn){try{var Q=Pn.data,q=Q===void 0?"{}":Q,Nn=JSON.parse(q);i==null||i(Nn)}catch(Bn){b==null||b(Bn)}},onclose:function(){d.value=!0,f==null||f()},onerror:function(Pn){d.value=!0,f==null||f(),!(Pn instanceof DOMException&&Pn.name==="AbortError")&&(b==null||b(Pn))}})}catch(on){d.value=!0,b==null||b(on),f==null||f()}}function At(e,t,a){return Ke.apply(this,arguments)}function Ke(){return Ke=_n()(kn()().mark(function e(t,a,d){var i,f,b,j;return kn()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return i=t.onClose,f=t.onError,Z.prev=1,Z.next=4,It(t);case 4:b=Z.sent,j=b.data,Rt(j,t,a,d),Z.next=13;break;case 9:Z.prev=9,Z.t0=Z.catch(1),i==null||i(),f==null||f(Z.t0);case 13:case"end":return Z.stop()}},e,null,[[1,9]])})),Ke.apply(this,arguments)}function Wt(e){return Ve.apply(this,arguments)}function Ve(){return Ve=_n()(kn()().mark(function e(t){var a,d;return kn()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return a=new AbortController,d={value:!0},f.next=4,At(t,a,d);case 4:return f.abrupt("return",{dispose:function(){d.value&&a.abort("\u53D6\u6D88\u8BF7\u6C42")}});case 5:case"end":return f.stop()}},e)})),Ve.apply(this,arguments)}var jr=n(95336);function Sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.timeout,d=a===void 0?5e3:a,i=t.intervalTime,f=i===void 0?100:i,b=Date.now();return new Promise(function(j,S){var Z=setInterval(function(){var C=e();C?(clearInterval(Z),j(C)):Date.now()-b>d&&(S("timeout"),clearInterval(Z))},f)})}function wt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Sr(function(){return document.querySelector(e)},t)}var Ht=n(23636);function $t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof e!="string")return a||console.warn(e,"is not valid json"),t?e:null;try{return JSON.parse(e)}catch(d){return a||console.warn(e,"is not valid json"),t?e:null}}function zt(e){for(var t=new TextEncoder,a=t.encode(e),d="",i=0;i<a.length;i++)d+=String.fromCharCode(a[i]);var f=btoa(d);return f}function Ut(e){for(var t=atob(e),a=new Uint8Array(t.length),d=0;d<t.length;d++)a[d]=t.charCodeAt(d);var i=new TextDecoder("utf-8"),f=i.decode(a);return f}var Er=(0,p.Z)(s),Dr=(0,p.Z)(y,!0),Qt=(0,p.Z)(B),Kt=(0,p.Z)(V,!0)},95336:function(mn,K,n){n.d(K,{JG:function(){return L},rb:function(){return D}});var y=n(26068),s=n.n(y),V=n(67825),B=n.n(V),$=n(75271),E=["maxWidth","maxHeight"];function N(){var F;return((F=window.g_config)===null||F===void 0?void 0:F.isIntl)||!1}var L=function(o){if(navigator.clipboard)navigator.clipboard.writeText(o);else{var p=document.createElement("textarea");document.body.appendChild(p),p.style.position="fixed",p.style.clip="rect(0 0 0 0)",p.style.top="10px",p.value=o,p.select(),document.execCommand("copy",!0),document.body.removeChild(p)}},D=function(o){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=p.maxWidth,h=p.maxHeight,m=B()(p,E);return s()({overlayInnerStyle:{maxWidth:u||326,maxHeight:h||150,overflowY:"auto",padding:"6px 12px"},title:o,arrow:!1},m)};function w(F){return React.isValidElement(F)}function I(F){var o=F||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(o)}var g=function(o){return o>=10?o:"0".concat(o)},v=function(o){if(o<60){var p=Math.ceil(o);return"0:".concat(g(p))}var u=Math.floor(o/60),h=Math.ceil(o%60);return"".concat(g(u),":").concat(g(h))}}}]);
