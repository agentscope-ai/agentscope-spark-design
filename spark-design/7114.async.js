"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7114],{21245:function(xn,Q,n){n.d(Q,{Z:function(){return x}});var y=n(26068),l=n.n(y),K=n(23655),F=n(75271),H=n(53649),E=n.n(H),k=n(30764),A,N=(0,k.Z)(A||(A=E()([`

.`,"-anchor-wrapper .","-anchor .",`-anchor-link-title {
  color: var(--`,`-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.`,`-anchor-link {
  --`,`-anchor-link-padding-block: 0;
  --`,`-anchor-link-padding-inline-start: 0;
}
`])),function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix}),w=n(52676),R=(0,F.forwardRef)(function(m){var B=N();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(B,{}),(0,w.jsx)(K.Z,l()({},m))]})}),x=R},8639:function(xn,Q,n){n.d(Q,{Z:function(){return s}});var y=n(26068),l=n.n(y),K=n(48305),F=n.n(K),H=n(67825),E=n.n(H),k=n(75271),A=n(82187),N=n.n(A),w=n(74659),R=n(32547),x=n(60213),m=n(53649),B=n.n(m),f=n(30764),p,o=(0,f.Z)(p||(p=B()([`
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
`])),function(g){return g.sparkPrefix},function(g){return g.sparkPrefix},function(g){return g.sparkPrefix}),P=n(52676),d=["controls","className","style"],r=(0,k.forwardRef)(function(g,T){var c=g.controls,D=g.className,h=g.style,L=E()(g,d),_=(0,x.getCommonConfig)(),V=_.sparkPrefix,on=o(),nn=(0,k.useState)(0),Y=F()(nn,2),z=Y[0],rn=Y[1],pn=(0,k.useState)(0),dn=F()(pn,2),bn=dn[0],sn=dn[1],Z=(0,k.useState)(!1),Nn=F()(Z,2),Cn=Nn[0],X=Nn[1],en=(0,R.Z)(g,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!1}),fn=F()(en,2),yn=fn[0],gn=fn[1],vn=(0,k.useRef)(null),cn=(0,k.useRef)(!0),jn=function(Tn){vn.current=Tn,T&&(typeof T=="function"?T(Tn):T.current=Tn)};(0,k.useEffect)(function(){if(cn.current){cn.current=!1;return}vn.current&&L.src&&vn.current.load()},[L.src]),(0,k.useEffect)(function(){var Sn;return Cn&&(Sn=setInterval(function(){vn.current&&rn(vn.current.currentTime)},16)),function(){Sn&&clearInterval(Sn)}},[Cn]);var On=function(Tn){var un;vn.current&&sn(vn.current.duration),(un=L.onLoadedMetadata)===null||un===void 0||un.call(L,Tn)},hn=function(){vn.current&&(Cn?vn.current.pause():vn.current.play(),X(!Cn))},O=function(Tn){var un;X(!0),(un=L.onPlay)===null||un===void 0||un.call(L,Tn)},Dn=function(Tn){var un;X(!1),(un=L.onPause)===null||un===void 0||un.call(L,Tn)},kn=function(Tn){var un,Mn;X(!1),rn(((un=vn.current)===null||un===void 0?void 0:un.duration)||0),(Mn=L.onEnded)===null||Mn===void 0||Mn.call(L,Tn)},Ln=function(Tn){vn.current&&(vn.current.currentTime=Tn,rn(Tn))};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(on,{}),(0,P.jsxs)("div",{className:N()("".concat(V,"-audio-container"),D),style:h,children:[(0,P.jsx)("audio",l()(l()({ref:jn},L),{},{muted:yn,className:"".concat(V,"-audio-element"),onLoadedMetadata:On,onPlay:O,onPause:Dn,onEnded:kn})),(0,P.jsx)(w.Z,{className:"".concat(V,"-audio-controller-wrapper"),isPlaying:Cn,currentTime:z,duration:bn,enableVolume:!0,enableFullscreen:!1,muted:yn,onMute:function(){return gn(!yn)},onPlayPause:hn,onProgressClick:Ln})]})]})}),s=r},93178:function(xn,Q,n){n.d(Q,{Z:function(){return o}});var y=n(26068),l=n.n(y),K=n(48305),F=n.n(K),H=n(67825),E=n.n(H),k=n(67487),A=n(75271),N=n(53649),w=n.n(N),R=n(30764),x,m=(0,R.Z)(x||(x=w()([`
.`,`-avatar {
  cursor: default;
}
`])),function(P){return P.antPrefix}),B=n(52676),f=["children"],p=(0,A.forwardRef)(function(P,d){var r=m(),s=P.children,g=E()(P,f),T=(0,A.useState)(P.children),c=F()(T,2),D=c[0],h=c[1];return(0,A.useEffect)(function(){if(typeof s=="string"){h(Array.from(s)[0]);return}if(typeof s=="number"){h(Array.from(String(s))[0]);return}h(s)},[s]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(r,{}),(0,B.jsx)(k.Z,l()(l()({ref:d},g),{},{children:D}))]})}),o=p},40:function(xn,Q,n){n.d(Q,{Z:function(){return d}});var y=n(26068),l=n.n(y),K=n(67825),F=n.n(K),H=n(3999),E=n(67487),k=n(44201),A=n(11691),N=n(75271),w=n(60213),R=n(53649),x=n.n(R),m=n(30764),B,f=(0,m.Z)(B||(B=x()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix}),p=n(52676),o=["items"],P=function(s){var g=s.items,T=g===void 0?[]:g,c=F()(s,o),D=(0,w.getCommonConfig)(),h=D.sparkPrefix,L=f(),_=N.useMemo(function(){return T.map(function(V){var on=V.title,nn=[];return V.iconUrl&&nn.push((0,p.jsx)(E.Z,{size:20,src:V.iconUrl},"avatar")),V.dropdown?nn.push((0,p.jsxs)("span",{className:"".concat(h,"-breadcrumb-dropdown-title"),children:[V.title,(0,p.jsx)(H.Z,{size:16})]},"title")):nn.push((0,p.jsx)("span",{children:V.title},"title")),V.dropdown?on=(0,p.jsx)(k.Z,{menu:{items:V.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(h,"-breadcrumb-dropdown"),children:(0,p.jsx)("span",{children:nn})}):(V.iconUrl||nn.length>1)&&(on=(0,p.jsx)("span",{className:"".concat(h,"-breadcrumb-item-content"),children:nn})),l()(l()({},V),{},{title:on})})},[T]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(L,{}),(0,p.jsx)(A.Z,l()(l()({},c),{},{items:_,className:"".concat(h,"-breadcrumb ").concat(c.className||"")}))]})},d=P},61902:function(xn,Q,n){n.d(Q,{Z:function(){return p}});var y=n(26068),l=n.n(y),K=n(67825),F=n.n(K),H=n(60213),E=n(85770),k=n(82187),A=n.n(k),N=n(53649),w=n.n(N),R=n(30764),x,m=(0,R.Z)(x||(x=w()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix}),B=n(52676),f=["title","info","children","className"],p=function(o){var P=o.title,d=o.info,r=o.children,s=o.className,g=F()(o,f),T=m(),c=(0,H.getCommonConfig)(),D=c.sparkPrefix;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(T,{}),(0,B.jsx)(E.Z,l()(l()({className:A()("".concat(D,"-card"),s)},g),{},{title:null,children:(0,B.jsxs)("div",{className:"".concat(D,"-card-wrapper"),children:[P&&(0,B.jsx)("div",{className:"".concat(D,"-title"),children:P}),d&&(0,B.jsx)("div",{className:"".concat(D,"-info"),children:d}),r&&(0,B.jsx)("div",{className:"".concat(D,"-content"),children:r})]})}))]})}},98618:function(xn,Q,n){n.d(Q,{Z:function(){return p}});var y=n(26068),l=n.n(y),K=n(67825),F=n.n(K),H=n(10758),E=n(75271),k=n(60213),A=n(53649),N=n.n(A),w=n(30764),R,x=(0,w.Z)(R||(R=N()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),m=n(52676),B=["description","descriptionClassName","descriptionStyle","children"],f=function(P){var d=P.description,r=P.descriptionClassName,s=P.descriptionStyle,g=P.children,T=F()(P,B),c=(0,k.getCommonConfig)(),D=c.antPrefix,h=c.sparkPrefix,L=x(),_={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(D,"-color-text-tertiary)")};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(L,{}),(0,m.jsxs)("div",{className:"".concat(h,"-checkbox"),children:[(0,m.jsx)(H.Z,l()(l()({},T),{},{children:g})),d&&(0,m.jsx)("div",{className:r,style:l()(l()({},_),s),children:d})]})]})};f.Group=H.Z.Group;var p=f},49570:function(xn,Q,n){n.d(Q,{ZP:function(){return bn},xO:function(){return z}});var y=n(26068),l=n.n(y),K=n(15558),F=n.n(K),H=n(60213),E=n(43758),k=n(5012),A=n(2607),N=n(91237),w=n(44573),R=n(12652),x=n(23201),m=n(18932),B=n(37441),f=n(99362),p=n(68147),o=n(70300),P=n(24365),d=n(33792),r=n(86112),s=n(18893),g=n(72771),T=n(82187),c=n.n(T),D=n(28640),h=n(75271),L=n(53649),_=n.n(L),V=n(30764),on,nn=(0,V.Z)(on||(on=_()([`
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
`])),function(sn){return sn.sparkPrefix},function(sn){return sn.antPrefix},function(sn){return sn.antPrefix},function(sn){return sn.antPrefix},function(sn){return sn.antPrefix},function(sn){return sn.antPrefix},function(sn){return sn.antPrefix},function(sn){return sn.antPrefix},function(sn){return sn.antPrefix},function(sn){return sn.antPrefix},function(sn){return sn.antPrefix}),Y=n(52676),z={javascript:[(0,m.eJ)()],jsx:[(0,m.eJ)()],python:[(0,o.Vs)()],json:[(0,B.AV)()],java:[(0,x.C)()],yaml:[(0,P.rV)()],php:[(0,p.h)()],go:[(0,w.go)()],csharp:[(0,A.N)()],css:[(0,N.iv)()],html:[(0,R.dy)()],curl:[],markdown:[(0,f.JH)()]},rn={javascript:[(0,d.Q2)()],json:[(0,d.Q2)(),(0,d.ir)((0,B.ap)())]},pn=function(){var Z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"{}",Nn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,Cn=Z;try{Cn=JSON.stringify(JSON.parse(Z),null,Nn)}catch(X){}return Cn},dn=function(Z){var Nn,Cn=(0,H.getCommonConfig)(),X=h.useContext(E.ZP.ConfigContext),en=((Nn=X.theme)===null||Nn===void 0?void 0:Nn.algorithm)===g.Z.darkAlgorithm,fn=Cn.sparkPrefix,yn=nn(),gn=(0,h.useMemo)(function(){return Z.theme===void 0?en?r.Pc:r.Zp:Z.theme==="dark"?r.Pc:r.Zp},[en,Z.theme]),vn=(Z.extensions||[]).concat(typeof Z.language=="string"?[].concat(F()(z[Z.language]||[]),F()(Z.value&&Z.language in rn?rn[Z.language]:[])):Z.language.reduce(function(On,hn){return[].concat(F()(On),[z[hn]])},[])),cn=(0,Y.jsx)("div",{className:c()("".concat(fn,"-code-block"),Z.className),children:(0,Y.jsx)(s.ZP,l()({extensions:vn,value:Z.language==="json"?pn(Z.value||""):Z.value||"",theme:gn},(0,D.Z)(Z,["language","theme","extensions","value"])))});if(Z.theme!==void 0){var jn=Z.theme==="dark"?k.bailianDarkTheme:k.bailianTheme;return(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(E.ZP,l()(l()({},jn),{},{children:[(0,Y.jsx)(yn,{}),cn]}))})}return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(yn,{}),cn]})},bn=dn},94684:function(xn,Q,n){n.d(Q,{Z:function(){return R}});var y=n(26068),l=n.n(y),K=n(24198),F=n(53649),H=n.n(F),E=n(30764),k,A=(0,E.Z)(k||(k=H()([`
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
`])),function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix}),N=n(52676),w=function(m){var B=A();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(B,{}),(0,N.jsx)(K.Z,l()({},m))]})},R=w},61406:function(xn,Q,n){n.d(Q,{Z:function(){return r}});var y=n(26068),l=n.n(y),K=n(82092),F=n.n(K),H=n(48305),E=n.n(H),k=n(60213),A=n(3999),N=n(16879),w=n(82187),R=n.n(w),x=n(75271),m=n(53649),B=n.n(m),f=n(30764),p,o=(0,f.Z)(p||(p=B()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix}),P=n(52676),d=function(g){var T,c,D,h,L,_,V=g.collapsedHeight,on=g.expandedHeight,nn=g.title,Y=nn===void 0?"":nn,z=g.expandOnPanelClick,rn=g.extra,pn=g.children,dn=g.defaultExpanded,bn=(0,x.useState)(dn),sn=E()(bn,2),Z=sn[0],Nn=sn[1],Cn=(0,x.useState)(!0),X=E()(Cn,2),en=X[0],fn=X[1],yn=(0,x.useState)(V),gn=E()(yn,2),vn=gn[0],cn=gn[1],jn=(0,x.useRef)(null),On=(0,k.getCommonConfig)(),hn=On.sparkPrefix,O=On.antPrefix,Dn=o();(0,x.useEffect)(function(){jn.current&&cn(Z&&on?on:Z?jn.current.scrollHeight:V)},[Z,V,on,pn]);var kn=function(Mn){Mn.stopPropagation(),Mn.preventDefault(),Nn(function(In){return!In})},Ln=function(Mn){Mn.stopPropagation(),Mn.preventDefault(),Z||Nn(!0)},Sn=function(){fn(!0)},Tn=function(){fn(!0)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Dn,{}),(0,P.jsxs)("div",{className:R()("".concat(hn,"-collapse-panel"),{collapsible:!Z&&z},(T=g.classNames)===null||T===void 0?void 0:T.wrapper),style:(c=g.styles)===null||c===void 0?void 0:c.wrapper,onClick:z?Ln:void 0,onMouseEnter:z?Sn:void 0,onMouseLeave:z?Tn:void 0,children:[(0,P.jsxs)("div",{className:R()("".concat(hn,"-collapse-panel-header"),(D=g.classNames)===null||D===void 0?void 0:D.header),style:(h=g.styles)===null||h===void 0?void 0:h.header,onClick:kn,children:[(0,P.jsxs)("span",{className:"".concat(hn,"-collapse-panel-title"),children:[Y,(0,P.jsxs)("div",{className:"".concat(hn,"-collapse-panel-icon-wrapper"),children:[!Z&&en&&z&&(0,P.jsx)(A.Z,{style:{fontSize:"18px"}}),Z&&en&&z&&(0,P.jsx)(N.Z,{style:{fontSize:"18px"}})]})]}),rn&&(0,P.jsx)("div",{className:"".concat(hn,"-collapse-panel-extra"),onClick:function(Mn){Mn.stopPropagation(),Mn.preventDefault()},children:rn})]}),(0,P.jsxs)("div",{className:R()("".concat(hn,"-collapse-panel-content"),F()({},"".concat(hn,"-collapse-panel-expanded"),Z),(L=g.classNames)===null||L===void 0?void 0:L.content),style:l()({height:vn},(_=g.styles)===null||_===void 0?void 0:_.content),children:[(0,P.jsx)("div",{ref:jn,className:"".concat("".concat(hn,"-collapse-panel-contentWrapper")," ",Z&&on?"scrollable":""),children:pn}),!Z&&(0,P.jsx)("div",{className:"".concat(hn,"-collapse-panel-mask")})]})]})]})},r=d},84360:function(xn,Q,n){n.d(Q,{Z:function(){return T}});var y=n(26068),l=n.n(y),K=n(67825),F=n.n(K),H=n(60213),E=n(57216),k=n(72771),A=n(86137),N=n(87133),w=n(82187),R=n.n(w),x=n(75271),m=n(53649),B=n.n(m),f=n(30764),p,o=(0,f.Z)(p||(p=B()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),P=n(52676),d=["className","popupClassName"],r=["className","popupClassName"],s=function(D){var h=D.className,L=D.popupClassName,_=F()(D,d),V=k.Z.useToken(),on=V.token,nn=(0,H.getCommonConfig)(),Y=nn.sparkPrefix,z=o();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(z,{}),(0,P.jsx)(A.ZP,{theme:{components:{DatePicker:{activeBorderColor:on.colorPrimary,paddingInline:8}}},children:(0,P.jsx)(N.default,l()({suffixIcon:(0,P.jsx)(E.Z,{style:{fontSize:"20px"}}),className:R()("".concat(Y,"-picker"),h),popupClassName:R()("".concat(Y,"-picker-dropdown"),L)},_))})]})},g=function(D){var h=D.className,L=D.popupClassName,_=F()(D,r),V=k.Z.useToken(),on=V.token,nn=(0,H.getCommonConfig)(),Y=nn.sparkPrefix,z=o();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(z,{}),(0,P.jsx)(A.ZP,{theme:{components:{DatePicker:{activeBorderColor:on.colorPrimary,paddingInline:8}}},children:(0,P.jsx)(N.default.RangePicker,l()({suffixIcon:(0,P.jsx)(E.Z,{style:{fontSize:"20px"}}),className:R()("".concat(Y,"-picker"),h),popupClassName:R()("".concat(Y,"-picker-dropdown"),L),popupStyle:{padding:0}},_))})]})};s.RangePicker=g;var T=s},62518:function(xn,Q,n){n.d(Q,{Z:function(){return r}});var y=n(82092),l=n.n(y),K=n(26068),F=n.n(K),H=n(67825),E=n.n(H),k=n(60213),A=n(72771),N=n(3307),w=n(82187),R=n.n(w),x=n(53649),m=n.n(x),B=n(30764),f,p=(0,B.Z)(f||(f=m()([`
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
`])),function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),o=n(52676),P=["className","layout","colon","style"],d=function(g){var T,c,D=p(),h=g.className,L=g.layout,_=g.colon,V=_===void 0?!1:_,on=g.style,nn=E()(g,P),Y=(0,k.getCommonConfig)(),z=Y.antPrefix,rn=A.Z.useToken(),pn=rn.token;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsx)(N.Z,F()({className:R()(h,L==="vertical"&&"".concat(z,"-descriptions-vertical")),layout:L,colon:V,style:F()(l()(l()({},"--".concat(z,"-descriptions-vertical-label-padding-bottom"),"".concat((T=pn.Descriptions.verticalLabelPaddingBottom)!==null&&T!==void 0?T:4,"px")),"--".concat(z,"-descriptions-vertical-content-padding-bottom"),"".concat((c=pn.Descriptions.verticalContentPaddingBottom)!==null&&c!==void 0?c:24,"px")),on)},nn))]})},r=d},38356:function(xn,Q,n){n.d(Q,{Z:function(){return B}});var y=n(26068),l=n.n(y),K=n(60213),F=n(68278),H=n(44201),E=n(75271),k=n(53649),A=n.n(k),N=n(30764),w,R=(0,N.Z)(w||(w=A()([`
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
`])),function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix}),x=n(52676),m=function(p){var o,P,d=(0,K.getCommonConfig)(),r=d.antPrefix,s=(0,E.useMemo)(function(){var T;if(!((T=p.menu)!==null&&T!==void 0&&T.selectable)||!p.menu){var c;return((c=p.menu)===null||c===void 0?void 0:c.items)||[]}return p.menu.items.map(function(D){var h={},L=D.label;return L&&(h.label=(0,x.jsxs)("div",{className:"".concat(r,"-dropdown-check-wrapper"),children:[L,(0,x.jsx)("span",{className:"".concat(r,"-dropdown-check-icon"),children:(0,x.jsx)(F.Z,{})})]})),l()(l()({},D),h)})},[(o=p.menu)===null||o===void 0?void 0:o.items,(P=p.menu)===null||P===void 0?void 0:P.selectable]),g=R();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{}),(0,x.jsx)(H.Z,l()(l()({},p),{},{menu:l()(l()({},p.menu),{},{items:s}),overlayStyle:l()({},p.overlayStyle)}))]})},B=m},49327:function(xn,Q,n){n.d(Q,{Z:function(){return Y}});var y=n(26068),l=n.n(y),K=n(60213),F=n(90264),H=n(75271),E=n(60823),k=n(53649),A=n.n(k),N=n(30764),w,R=(0,N.Z)(w||(w=A()([`
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
`])),function(z){return z.sparkPrefix},function(z){return z.sparkPrefix},function(z){return z.sparkPrefix},function(z){return z.sparkPrefix},function(z){return z.sparkPrefix},function(z){return z.sparkPrefix},function(z){return z.antPrefix},function(z){return z.sparkPrefix},function(z){return z.antPrefix}),x=n(90228),m=n.n(x),B=n(87999),f=n.n(B),p=n(48305),o=n.n(p),P=n(19215),d=n(52676),r="http://www.w3.org/2000/svg",s="http://www.w3.org/1999/xlink",g=new Map,T=null;typeof document!="undefined"&&(T=document.querySelector("#empty-svg-container"));function c(z){return z.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function D(z){return btoa(z).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"")}function h(){if(T||typeof document=="undefined")return T;var z=document.createElement("div");return z.innerHTML="<svg></svg>",T=z.querySelector("svg"),T.id="empty-svg-container",T.setAttribute("aria-hidden","true"),T.style.position="absolute",T.style.width="0",T.style.height="0",T.style.overflow="hidden",document.body.insertBefore(T,document.body.firstChild),T}function L(z){if(!T)return null;var rn=document.getElementById(z),pn=rn||null;return pn||(pn=document.createElementNS(r,"symbol"),pn.id=z,pn.setAttribute("data-loaded","false"),T.appendChild(pn),pn)}function _(z){var rn=(0,P.ZP)(),pn=o()(rn,5),dn=pn[4],bn=z.svgUrl,sn=z.tokenMap,Z=sn===void 0?{}:sn,Nn=z.className,Cn=z.size,X=bn.includes(".svg"),en=(0,H.useState)(""),fn=o()(en,2),yn=fn[0],gn=fn[1];return(0,H.useEffect)(function(){h()},[]),(0,H.useEffect)(function(){T&&dn!==null&&dn!==void 0&&dn.key&&(T.classList.forEach(function(vn){return T.classList.remove(vn)}),T.classList.add(dn.key))},[dn==null?void 0:dn.key]),(0,H.useEffect)(function(){if(X&&(h(),!!T)){var vn=D(bn);gn('<svg width="100%" height="100%"><use href="#'.concat(vn,'" xlink:href="#').concat(vn,'"></use></svg>'));var cn=L(vn);if(cn&&cn.getAttribute("data-loaded")!=="true"&&!g.has(vn)){var jn=f()(m()().mark(function On(){var hn,O,Dn,kn,Ln,Sn;return m()().wrap(function(un){for(;;)switch(un.prev=un.next){case 0:return un.prev=0,un.next=3,fetch(bn);case 3:if(hn=un.sent,hn.ok){un.next=6;break}throw new Error("HTTP ".concat(hn.status));case 6:return un.next=8,hn.text();case 8:O=un.sent,Dn=O,Object.keys(Z).forEach(function(Mn){Dn=Dn.replace(new RegExp(c(Mn),"g"),Z[Mn])}),kn=Dn.match(/viewBox="([^"]*)"/),Ln=kn?kn[1]:"",Sn=Dn.replace(/<svg[^>]*>/,""),Sn=Sn.replace(/<\/svg>/,""),Ln&&cn.setAttribute("viewBox",Ln),cn.innerHTML=Sn,cn.setAttribute("data-loaded","true"),cn.removeAttribute("data-error"),un.next=27;break;case 21:un.prev=21,un.t0=un.catch(0),cn.setAttribute("data-loaded","false"),cn.setAttribute("data-error","true"),cn.innerHTML="",console.warn("[SparkDesign][Empty][Illustrate] load svg failed:",bn,un.t0);case 27:case"end":return un.stop()}},On,null,[[0,21]])}))().finally(function(){g.delete(vn)});g.set(vn,jn)}}},[bn]),X?(0,d.jsx)("div",{className:Nn,dangerouslySetInnerHTML:{__html:yn},style:{width:Cn,height:Cn}}):(0,d.jsx)("img",{src:bn,className:Nn,style:{width:Cn,height:Cn}})}var V={url:"https://gw.alicdn.com/imgextra/i3/O1CN01r3f3Si24iFTRz9Bho_!!6000000007424-55-tps-320-320.svg",tokenMap:{"#CDD0DC":"color-border"}},on={noData:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01mWN5tE1MAxb2z7LwA_!!6000000001395-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#BCB5FF":"color-primary-border-hover","#FFFFFF":"color-bg-base","#615CED":"color-primary","#1ACDD0DC":"color-fill-quaternary","#CDD0DC":"color-border"}},networkError:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01su6GHG1RupL5K5TOQ_!!6000000002172-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},404:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01GE0jXZ1xpqjvMjCZh_!!6000000006493-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#26CDD0DC":"color-fill-tertiary","#CDD0DC":"color-border","#F3F0FF":"color-primary-bg","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},arrears:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01xN8uYv1Dz2MLvrFAF_!!6000000000286-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#F3F0FF":"color-primary-bg","#615CED":"color-primary"}},desktopOnly:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01ZzNku41rshVhRVh9x_!!6000000005687-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},noAudio:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01fTQ6vi1GXxnIrmizf_!!6000000000633-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#615CED":"color-primary","#E6E8EE":"color-border-secondary"}},noImage:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01zQAH9A1oJUD9XDtmi_!!6000000005204-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noVideo:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01kqss5i1JuoOrJ8fNV_!!6000000001089-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noAccess:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01RwpRz91oGHREFlmdY_!!6000000005197-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}},error:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01TlQR4c1L3nn4DkG2z_!!6000000001244-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noChat:{url:"https://img.alicdn.com/imgextra/i3/O1CN014KyRst1w9QT51V8Yx_!!6000000006265-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#615CED":"color-primary","#CDD0DC":"color-border"}},noModel:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01BSPmLi1iaXGByjbne_!!6000000004429-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#5CCDD0DC":"color-fill","#615CED":"color-primary"}},noApp:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01stSIP31fzmEtpppWc_!!6000000004078-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#33CDD0DC":"color-fill-secondary","#615CED":"color-primary"}},success:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01sGzZ5B1Bx5RQAjUe5_!!6000000000011-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#5BB98B":"color-success","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},failed:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01Fd1Gmx1QNYxQ8hj0H_!!6000000001964-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FF7875":"color-error-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},inProgress:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01w2RXic1LADKqVxH56_!!6000000001258-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#9189FA":"color-primary-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},stayTuned:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01W2Kbyc26dmqmatyoB_!!6000000007685-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}}},nn=function(rn){var pn=rn.imageStyle,dn=rn.title,bn=rn.description,sn=bn===void 0?"No Data":bn,Z=rn.children,Nn=rn.texture,Cn=Nn===void 0?!0:Nn,X=rn.size,en=X===void 0?320:X,fn=rn.autoFit,yn=fn===void 0?!0:fn,gn=rn.okText,vn=rn.okType,cn=vn===void 0?"primary":vn,jn=rn.okButtonProps,On=rn.onOk,hn=rn.type||"noData",O=(0,K.getCommonConfig)(),Dn=O.sparkPrefix,kn=O.isDarkMode,Ln=O.antPrefix,Sn=rn.image||on[hn].url,Tn=(0,H.useMemo)(function(){var wn,Hn=l()({},(wn=on[hn])===null||wn===void 0?void 0:wn.tokenMap);return Hn&&Object.keys(Hn).forEach(function(te){Hn[te]="var(--".concat(Ln,"-").concat(Hn[te],")")}),Hn},[hn]),un=(0,H.useMemo)(function(){var wn=l()({},V.tokenMap);return Object.keys(wn).forEach(function(Hn){wn[Hn]="var(--".concat(Ln,"-").concat(wn[Hn],")")}),wn},[kn]),Mn=R(),In=typeof en=="string"?parseFloat(en.replace(/px/i,"")):en!=null?en:0,ce=yn?{maxWidth:"100%",aspectRatio:"1 / 1",width:en,height:"auto"}:{width:en,height:en};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Mn,{}),(0,d.jsxs)("div",{className:"".concat(Dn,"-empty ").concat(rn.className||""),style:l()(l()({},ce),pn),children:[Cn&&(0,d.jsx)(_,{size:yn?"100%":en,svgUrl:V.url,tokenMap:un,className:"".concat(Dn,"-empty-texture")}),(0,d.jsx)(_,{size:yn?"100%":en,svgUrl:Sn,tokenMap:Tn,className:"".concat(Dn,"-empty-image")}),(0,d.jsxs)(F.Z,{vertical:!0,align:"center",style:{marginTop:"52.5%"},children:[dn&&(0,d.jsx)("div",{className:"".concat(Dn,"-empty-title"),style:{marginBottom:sn?.025*In:0},children:dn}),sn&&(0,d.jsx)("div",{className:"".concat(Dn,"-empty-description"),children:sn}),!!gn&&(0,d.jsx)("div",{style:{marginTop:.05*In},children:(0,d.jsx)(E.Z,l()(l()({type:cn,onClick:On},jn),{},{children:gn}))}),!!Z&&(0,d.jsx)("div",{style:{marginTop:.05*In},children:Z})]})]})]})},Y=nn},90895:function(xn,Q,n){n.d(Q,{Z:function(){return h}});var y=n(31759),l=n.n(y),K=n(26068),F=n.n(K),H=n(67825),E=n.n(H),k=n(60213),A=n(62910),N=n(48290),w=n(85618),R=n(82187),x=n.n(R),m=n(75271),B=n(53649),f=n.n(B),p=n(30764),o,P=(0,p.Z)(o||(o=f()([`
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
`])),function(L){return L.sparkPrefix},function(L){return L.sparkPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.sparkPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix}),d=n(52676),r=["labelMarginRight"],s=["tooltip"],g=(0,m.forwardRef)(function(L,_){var V=L.labelMarginRight,on=V===void 0?void 0:V,nn=E()(L,r),Y=(0,m.useRef)(null),z=(0,k.getCommonConfig)(),rn=z.sparkPrefix,pn=P();return(0,m.useImperativeHandle)(_,function(){return Y.current}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(pn,{}),(0,d.jsx)(N.Z,F()(F()({},nn),{},{className:x()(L.className,"".concat(rn,"-form"),on==="small"&&"".concat(rn,"-form-label-margin-small")),ref:Y,requiredMark:function(bn,sn){return(0,d.jsxs)(d.Fragment,{children:[bn,sn.required&&(0,d.jsx)("span",{className:"".concat(rn,"-required-mark"),children:"*"})]})}}))]})}),T=function(_){var V=_.tooltip,on=E()(_,s),nn=(0,d.jsx)(A.Z,{});function Y(){if(V){var z=l()(V)==="object"&&!m.isValidElement(V)?F()(F()({},V),{},{icon:V.icon||nn}):{title:V,icon:nn};return z}}return(0,d.jsx)(N.Z.Item,F()(F()({},on),{},{tooltip:Y(),labelCol:_.labelCol||(_.layout==="vertical"?{flex:"unset"}:void 0)}))},c=T;c.useStatus=w.Z.useStatus;var D=g;D.Item=c,D.List=N.Z.List,D.ErrorList=N.Z.ErrorList,D.Provider=N.Z.Provider,D.useForm=N.Z.useForm,D.useFormInstance=N.Z.useFormInstance,D.useWatch=N.Z.useWatch;var h=D},70344:function(xn,Q,n){n.d(Q,{Z:function(){return p}});var y=n(26068),l=n.n(y),K=n(40965),F=n(60213),H=n(5045),E=n(92931),k=n(75271),A=n(53649),N=n.n(A),w=n(30764),R,x=(0,w.Z)(R||(R=N()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),m=n(52676),B=function(P){var d=x(),r=(0,F.getCommonConfig)(),s=r.antPrefix,g=(0,k.useMemo)(function(){var T={transitionName:""},c=P.preview;return c===!1?!1:c===!0?T:l()(l()({mask:(0,m.jsxs)("div",{className:"".concat(s,"-image-mask-info"),children:[(0,m.jsx)(H.Z,{className:"".concat(s,"-image-mask-info-icon")}),(0,m.jsx)("span",{className:"".concat(s,"-image-mask-info-text"),children:K.Z.get({id:"components.commonComponents.Image.Preview",dm:"\u9884\u89C8"})})]})},c),T)},[P.preview]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{}),(0,m.jsx)(E.Z,l()({preview:g},P))]})},f=B;f.PreviewGroup=E.Z.PreviewGroup;var p=f},38734:function(xn,Q,n){n.d(Q,{Z:function(){return s}});var y=n(26068),l=n.n(y),K=n(82092),F=n.n(K),H=n(67825),E=n.n(H),k=n(60213),A=n(92108),N=n(82187),w=n.n(N),R=n(75271),x=n(53649),m=n.n(x),B=n(30764),f,p=(0,B.Z)(f||(f=m()([`
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
`])),function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),o=n(52676),P=["shape"],d=R.forwardRef(function(g,T){var c=g.shape,D=c===void 0?"default":c,h=E()(g,P),L=(0,k.getCommonConfig)(),_=L.antPrefix,V=p();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(V,{}),(0,o.jsx)(A.Z,l()(l()({},h),{},{className:w()(g.className,F()({},"".concat(_,"-input-round"),D==="round")),ref:T}))]})}),r=R.forwardRef(function(g,T){var c=(0,k.getCommonConfig)(),D=c.antPrefix,h=p();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h,{}),(0,o.jsx)(A.Z.TextArea,l()(l()({},g),{},{className:w()("".concat(D,"-text-area"),g.className),ref:T}))]})});Object.assign(d,{TextArea:r,Search:A.Z.Search,Password:A.Z.Password,OTP:A.Z.OTP});var s=d},3983:function(xn,Q,n){n.d(Q,{Z:function(){return r}});var y=n(26068),l=n.n(y),K=n(82092),F=n.n(K),H=n(67825),E=n.n(H),k=n(60213),A=n(6002),N=n(91301),w=n(82187),R=n.n(w),x=n(53649),m=n.n(x),B=n(30764),f,p=(0,B.Z)(f||(f=m()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),o=n(52676),P=["showDivider","closable"],d=function(g){var T=p(),c=(0,k.getCommonConfig)(),D=c.sparkPrefix,h=g.showDivider,L=h===void 0?!0:h,_=g.closable,V=_===void 0?!0:_,on=E()(g,P),nn=function(pn){return g.info?(0,o.jsxs)("div",{className:"".concat(D,"-modal-footer-wrapper"),children:[(0,o.jsx)("span",{className:"".concat(D,"-modal-footer-info"),children:g.info}),(0,o.jsx)("div",{className:"".concat(D,"-modal-footer-origin-node"),children:pn})]}):pn},Y=V?g.closeIcon||(0,o.jsx)(A.Z,{className:"".concat(D,"-modal-title-close"),onClick:function(pn){var dn;(dn=g.onCancel)===null||dn===void 0||dn.call(g,pn)}}):null,z=g.footer===void 0?nn:g.footer;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(T,{}),(0,o.jsx)(N.Z,l()(l()({},on),{},{closeIcon:null,title:(0,o.jsxs)("div",{className:"".concat(D,"-modal-title-wrapper"),children:[(0,o.jsx)("div",{className:"".concat(D,"-modal-title"),children:g.title}),Y]}),wrapClassName:R()("".concat(D,"-modal"),F()({},"".concat(D,"-show-divider"),L),g.wrapClassName,"animate-in"),footer:z,transitionName:""}))]})};d.useModal=N.Z.useModal,d.success=N.Z.success,d.error=N.Z.error,d.warning=N.Z.warning,d.info=N.Z.info,d.confirm=N.Z.confirm,d.SMALL_WIDTH=640,d.MEDIUM_WIDTH=800,d.LARGE_WIDTH=960;var r=d},94361:function(xn,Q,n){var y=n(48305),l=n.n(y),K=n(26068),F=n.n(K),H=n(60213),E=n(72566),k=n(68811),A=n(20855),N=n(18908),w=n(3749),R=n(52676),x=["success","warning","error","info"];function m(f,p){if(f==="success")return(0,R.jsx)(E.Z,{style:{color:"var(--".concat(p,"-color-success)"),fontSize:24}});if(f==="warning")return(0,R.jsx)(k.Z,{style:{color:"var(--".concat(p,"-color-warning)"),fontSize:24}});if(f==="info")return(0,R.jsx)(A.Z,{style:{color:"var(--".concat(p,"-color-info)"),fontSize:24}});if(f==="error")return(0,R.jsx)(N.Z,{style:{color:"var(--".concat(p,"-color-error)"),fontSize:24}})}var B={};B.destroy=w.ZP.destroy,B.open=function(f){var p=(0,H.getCommonConfig)(),o=p.sparkPrefix,P="".concat(o,"-notification");f.className&&(P+=" ".concat(f.className)),w.ZP.open(F()(F()({},f),{},{className:P}))},x.forEach(function(f){B[f]=function(p){var o=(0,H.getCommonConfig)(),P=o.sparkPrefix,d=o.antPrefix,r="".concat(P,"-notification");p.className&&(r+=" ".concat(p.className)),w.ZP[f](F()(F()({},p),{},{className:r,icon:m(f,d)}))}}),B.useNotification=function(f){var p=(0,H.getCommonConfig)(),o=p.sparkPrefix,P=p.antPrefix,d="".concat(o,"-notification"),r=w.ZP.useNotification(f),s=l()(r,2),g=s[0],T=s[1],c={};return x.forEach(function(D){c[D]=function(h){return g[D](F()(F()({},h),{},{className:d,icon:m(D,P)}))}}),c.open=function(D){w.ZP.open(F()(F()({},D),{},{className:d}))},c.destroy=g.destroy,[c,T]},Q.Z=B},47525:function(xn,Q,n){n.d(Q,{X:function(){return H}});var y=n(53649),l=n.n(y),K=n(30764),F,H=(0,K.Z)(F||(F=l()([`
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
`])),function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix})},85525:function(xn,Q,n){var y=n(26068),l=n.n(y),K=n(31759),F=n.n(K),H=n(67825),E=n.n(H),k=n(60213),A=n(40965),N=n(86319),w=n(16979),R=n(34232),x=n(90264),m=n(89550),B=n(82187),f=n.n(B),p=n(47525),o=n(52676),P=["hideSwitchButton","className"],d=[10,20,50,100],r=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:d,T=A.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"}),c=A.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"});return{options:g.map(function(D){return{label:"".concat(D," ").concat(T," / ").concat(c),value:Number(D)}})}};Q.Z=function(s){var g=s.hideSwitchButton,T=g===void 0?!1:g,c=s.className,D=E()(s,P),h=(0,k.getCommonConfig)(),L=h.sparkPrefix,_=(0,p.X)(),V=function(){var z=function(pn,dn,bn){return dn==="jump-prev"||dn==="jump-next"?(0,o.jsx)(N.Z,{className:"".concat(L,"-jump-next-icon")}):T||s.itemRender?bn:dn==="prev"?(0,o.jsx)("a",{children:(0,o.jsxs)(x.Z,{gap:8,children:[(0,o.jsx)(w.Z,{})," ",(0,o.jsx)("span",{children:A.Z.get({id:"components.commonComponents.Pagination.PreviousPage",dm:"\u4E0A\u4E00\u9875"})})]})}):dn==="next"?(0,o.jsx)("a",{children:(0,o.jsxs)(x.Z,{gap:8,children:[(0,o.jsx)("span",{children:A.Z.get({id:"components.commonComponents.Pagination.NextPage",dm:"\u4E0B\u4E00\u9875"})})," ",(0,o.jsx)(R.Z,{})]})}):bn};return z},on;D.showSizeChanger!==null&&D.showSizeChanger!==void 0?on=D.showSizeChanger:on=D.total&&D.total>50;var nn=function(){return s.showSizeChanger===!1?!1:F()(s.showSizeChanger)==="object"&&s.showSizeChanger?s.showSizeChanger:s.showSizeChanger===!0||D.total&&D.total>50?r(D.pageSizeOptions):!1};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{}),(0,o.jsx)(m.Z,l()(l()({itemRender:V()},D),{},{showSizeChanger:nn(),className:f()("".concat(L,"-pagination"),c)}))]})}},30959:function(xn,Q,n){var y=n(26068),l=n.n(y),K=n(67825),F=n.n(K),H=n(60213),E=n(88602),k=n(62910),A=n(99090),N=n(58911),w=n(95371),R=n(75271),x=n(52676),m=["icon","type","okButtonProps"],B=R.forwardRef(function(f,p){var o=f.icon,P=f.type,d=P===void 0?"confirm":P,r=f.okButtonProps,s=F()(f,m),g=(0,H.getCommonConfig)(),T=g.antPrefix,c=function(){return o||(d==="confirm"?(0,x.jsx)(E.Z,{style:{color:"var(--".concat(T,"-color-warning)")}}):d==="info"?(0,x.jsx)(k.Z,{style:{color:"var(--".concat(T,"-color-info)")}}):d==="warning"?(0,x.jsx)(E.Z,{style:{color:"var(--".concat(T,"-color-warning)")}}):d==="error"?(0,x.jsx)(A.Z,{style:{color:"var(--".concat(T,"-color-error)")}}):d==="success"?(0,x.jsx)(N.Z,{style:{color:"var(--".concat(T,"-color-success)")}}):(0,x.jsx)(E.Z,{style:{color:"var(--".concat(T,"-color-warning)")}}))},D=function(){var L={};return["warning","error"].includes(d)&&(L.danger=!0),l()(l()({},L),r||{})};return(0,x.jsx)(w.Z,l()(l()({},s),{},{ref:p,icon:c(),okButtonProps:D()}))});Q.Z=B},86298:function(xn,Q,n){var y=n(26068),l=n.n(y),K=n(60213),F=n(65482),H=n(4369),E=n(75271),k=n(52676),A=E.forwardRef(function(N,w){var R=N.content===""||N.content===void 0||N.content===null,x=N.title===""||N.title===void 0||N.title===null,m=N.open!==void 0&&N.open!==null?N.open:R&&x?!1:void 0,B=(0,K.getCommonConfig)(),f=B.antPrefix;return(0,k.jsx)(H.Z,l()(l()({},N),{},{arrow:N.arrow||!1,open:m,ref:w,getPopupContainer:N.getPopupContainer||function(p){return(0,F.Q)(p,".".concat(f,"-app"))}}))});Q.Z=A},40517:function(xn,Q,n){n.d(Q,{Z:function(){return Cn},x:function(){return sn}});var y=n(26068),l=n.n(y),K=n(82092),F=n.n(K),H=n(15558),E=n.n(H),k=n(48305),A=n.n(k),N=n(67825),w=n.n(N),R=n(24884),x=n(99362),m=n(86112),B=n(18893),f=n(86137),p=n(72771),o=n(82187),P=n.n(o),d=n(75271),r=n(53649),s=n.n(r),g=n(87571),T,c,D=(0,g.kc)(function(X){var en=X.css,fn=X.token;return{onCreate:en(T||(T=s()([`
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
  `])),fn.colorBorderSecondary,fn.colorBgContainer),cm:en(c||(c=s()([`
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
  `])),fn.colorTextSecondary,fn.colorBlue,fn.colorPurple,fn.colorPurpleBg,fn.colorBgContainer,fn.colorText,fn.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:fn.colorBgBase,border:"1px solid ".concat(fn.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:fn.colorTextTertiary,backgroundColor:fn.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),h=n(25298),L=n.n(h),_=n(17069),V=n.n(_),on=n(25451),nn=new on.Y1({regexp:/\$\{([\w\u4e00-\u9fa5]+)\}/g,decoration:function(){return on.p.mark({class:"cm-prompt-var"})}}),Y=on.lg.fromClass(function(){function X(en){L()(this,X),F()(this,"placeholders",void 0),this.placeholders=nn.createDeco(en)}return V()(X,[{key:"update",value:function(fn){this.placeholders=nn.updateDeco(fn,this.placeholders)}}]),X}(),{decorations:function(en){return en.placeholders}}),z=[Y],rn=n(96594);function pn(){var X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],en=arguments.length>1?arguments[1]:void 0,fn=en.onCreate,yn=en.createBtnText;return(0,rn.ys)({override:[function(gn){var vn,cn=gn.matchBefore(/\/(\w+)?/);return!cn||cn&&cn.from===cn.to&&!gn.explicit?null:{from:(vn=cn==null?void 0:cn.from)!==null&&vn!==void 0?vn:0,options:(fn?[].concat(E()(X),[{label:"/NEW_VAR",boost:-99}]):X).map(function(jn){return l()(l()({},jn),{},{displayLabel:jn.label==="/NEW_VAR"?yn:jn.label.slice(1),apply:function(hn,O,Dn,kn){if(O.label==="/NEW_VAR")return hn.dispatch({changes:{from:Dn,to:kn,insert:""}}),fn==null?void 0:fn();var Ln=O.label.slice(1),Sn="${".concat(Ln,"}");hn.dispatch({changes:{from:Dn,to:kn,insert:Sn}})}})})}}]})}var dn=n(52676),bn=["maxLength","variables","onCreate","createBtnText","tipsText","extensions","className","value","onChange","readOnly","basicSetup"],sn={markdown:[(0,x.JH)()]},Z=[],Nn=function(en){var fn,yn=en.maxLength,gn=en.variables,vn=gn===void 0?Z:gn,cn=en.onCreate,jn=en.createBtnText,On=jn===void 0?"+ \u65B0\u589E\u53D8\u91CF":jn,hn=en.tipsText,O=en.extensions,Dn=en.className,kn=en.value,Ln=en.onChange,Sn=en.readOnly,Tn=en.basicSetup,un=w()(en,bn),Mn=D(),In=Mn.styles,ce=(0,d.useState)(!1),wn=A()(ce,2),Hn=wn[0],te=wn[1],je=d.useContext(f.ZP.ConfigContext),me=((fn=je.theme)===null||fn===void 0?void 0:fn.algorithm)===p.Z.darkAlgorithm,ge=(0,d.useMemo)(function(){return me?m.Pc:m.Zp},[me]),Se=(0,d.useMemo)(function(){return O||[].concat(E()(sn.markdown),E()(z),[pn(E()(vn).map(function(xe){return{label:"/".concat(xe.code),info:xe.label}})||[],{onCreate:cn,createBtnText:On})])},[vn,O,cn,On]);(0,d.useEffect)(function(){return te(!0),function(){te(!1)}},[]);var Ee=d.useMemo(function(){return hn===!1?(0,dn.jsx)("div",{className:In.tips}):hn||(0,dn.jsxs)("div",{className:In.tips,children:['\u8F93\u5165/"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,dn.jsx)(R.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[hn,In.tips]);return Hn?(0,dn.jsxs)("div",{className:In.root,children:[(0,dn.jsx)(B.ZP,l()({className:P()(Dn,In.cm,F()({},In.onCreate,cn)),extensions:Se,value:kn,theme:ge,lang:"markdown",onChange:Ln,basicSetup:l()({lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1},Tn),readOnly:Sn,editable:!Sn},un),ge),(0,dn.jsxs)("div",{className:In.footer,children:[Ee,yn?(0,dn.jsxs)("div",{children:[(kn==null?void 0:kn.length)||0,"/",yn]}):null]})]}):null},Cn=(0,d.memo)(Nn)},81483:function(xn,Q,n){var y=n(26068),l=n.n(y),K=n(67825),F=n.n(K),H=n(49327),E=n(52676),k=["texture"];Q.Z=function(A){var N=A.texture,w=N===void 0?!1:N,R=F()(A,k);return(0,E.jsx)(H.Z,l()(l()({},R),{},{texture:w}))}},77652:function(xn,Q,n){n.d(Q,{J:function(){return T},Z:function(){return D}});var y=n(26068),l=n.n(y),K=n(82092),F=n.n(K),H=n(60213),E=n(7441),k=n(82187),A=n.n(k),N=n(75271),w=n(53649),R=n.n(w),x=n(30764),m,B=(0,x.Z)(m||(m=R()([`
.`,"-slider.","-slider.",`-slider-no-marks {
  margin: 0;
}
`])),function(h){return h.antPrefix},function(h){return h.sparkPrefix},function(h){return h.sparkPrefix}),f=n(67825),p=n.n(f),o=n(32496),P,d=(0,x.Z)(P||(P=R()([`
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
`])),function(h){return h.sparkPrefix},function(h){return h.sparkPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix}),r=n(52676),s=["styles","classNames","sliderProps","inputNumberProps"];function g(h){var L,_,V=(0,H.getCommonConfig)(),on=V.sparkPrefix;console.log("debug sparkPrefix in SliderSelector",on);var nn=h.styles,Y=h.classNames,z=h.sliderProps,rn=h.inputNumberProps,pn=p()(h,s),dn=d(),bn=h.marks||((L=h.sliderProps)===null||L===void 0?void 0:L.marks)||null,sn=bn||F()(F()({},h.min,h.min),h.max,h.max),Z=bn&&((_=Object.keys(bn))===null||_===void 0?void 0:_.length)>0,Nn=function(X){var en=typeof X=="string"?parseFloat(X):X;if(en===null||isNaN(en)){h.onChange(null);return}en<h.min?h.onChange(h.min):en>h.max?h.onChange(h.max):h.onChange(en)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(dn,{}),(0,r.jsxs)("div",{style:nn==null?void 0:nn.wrapper,className:A()("".concat(on,"-slider-input"),F()({},"".concat(on,"-slider-input-has-marks"),Z),Y==null?void 0:Y.wrapper),onMouseUp:function(){var X;(X=h.onBlur)===null||X===void 0||X.call(h)},children:[(0,r.jsx)(T,l()(l()(l()({disabled:h.disabled,min:h.min,max:h.max,step:h.step,tooltip:{getPopupContainer:function(X){return X}}},pn),z),{},{marks:sn,style:l()(l()(l()({},nn==null?void 0:nn.slider),z==null?void 0:z.style),{},{width:"100%"}),className:A()(Y==null?void 0:Y.slider,z==null?void 0:z.className),onChange:Nn,value:h.value===null?void 0:h.value})),(0,r.jsx)(o.Z,l()(l()({controls:!1,step:h.step,min:h.min,max:h.max,disabled:h.disabled},rn),{},{onBlur:function(){var X;(X=h.onBlur)===null||X===void 0||X.call(h)},value:h.value,onChange:Nn,style:l()(l()({},nn==null?void 0:nn.inputNumber),rn==null?void 0:rn.style),className:A()(Y==null?void 0:Y.inputNumber,rn==null?void 0:rn.className)}))]})]})}var T=N.forwardRef(function(h,L){var _=(0,H.getCommonConfig)(),V=_.sparkPrefix,on=_.antPrefix,nn=B();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(nn,{}),(0,r.jsx)(E.Z,l()(l()({},h),{},{className:A()("".concat(V,"-slider"),F()(F()({},"".concat(V,"-slider-no-marks"),!Object.keys(h.marks||{}).length),"".concat(on,"-slider-reverse"),h.reverse),h.className),ref:L}))]})}),c=T;Object.assign(c,{Input:g});var D=c},70076:function(xn,Q,n){n.d(Q,{Z:function(){return B}});var y=n(82092),l=n.n(y),K=n(60213),F=n(72771),H=n(22576),E=n(82187),k=n.n(E),A=n(53649),N=n.n(A),w=n(30764),R,x=(0,w.Z)(R||(R=N()([`
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
`])),function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix}),m=n(52676),B=function(f){var p=f.indicator,o=f.spinning,P=o===void 0?!0:o,d=f.children,r=f.style,s=f.className,g=(0,K.getCommonConfig)(),T=g.sparkPrefix,c=F.Z.useToken(),D=x(),h=(0,m.jsxs)("svg",{className:"".concat(T,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,m.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,m.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,m.jsx)("g",{children:(0,m.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:c.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,m.jsx)("g",{children:(0,m.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:c.token.colorPrimary,fillOpacity:"1"})})]})]}),L=f.tip||f.showProgress&&(0,m.jsxs)("div",{children:[(0,m.jsxs)("span",{children:["loading",f.percent!==void 0&&f.percent!==null&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:f.percent}),"%"]})]}),(0,m.jsx)(H.Z,{percent:f.percent,showInfo:!1})]})||null;return d?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(D,{}),(0,m.jsxs)("div",{className:k()("".concat(T,"-spinner-overlay"),s),style:r,children:[(0,m.jsx)("div",{className:k()("".concat(T,"-spinner-content"),l()({},"".concat(T,"-spinning"),P)),children:d}),P&&(0,m.jsxs)("div",{className:"".concat(T,"-spinner"),children:[(0,m.jsx)("div",{className:"".concat(T,"-indicator"),children:p||h}),(0,m.jsx)("div",{className:"".concat(T,"-title"),children:L})]})]})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(D,{}),(0,m.jsx)("div",{className:k()("".concat(T,"-spinner"),s),style:r,children:P&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"".concat(T,"-indicator"),children:p||h}),(0,m.jsx)("div",{className:"".concat(T,"-title"),children:L})]})})]})}},75229:function(xn,Q,n){n.d(Q,{Z:function(){return R}});var y=n(26068),l=n.n(y),K=n(468),F=n(53649),H=n.n(F),E=n(30764),k,A=(0,E.Z)(k||(k=H()([`
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
`])),function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix}),N=n(52676),w=function(m){var B=A();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(B,{}),(0,N.jsx)(K.Z,l()({},m))]})},R=w},52849:function(xn,Q,n){n.d(Q,{Z:function(){return p}});var y=n(26068),l=n.n(y),K=n(60213),F=n(68278),H=n(98852),E=n(82187),k=n.n(E),A=n(75271),N=n(53649),w=n.n(N),R=n(30764),x,m=(0,R.Z)(x||(x=w()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),B=n(52676),f=function(P){var d=(0,K.getCommonConfig)(),r=d.sparkPrefix,s=m(),g=(0,A.useMemo)(function(){if(P.items)return P.items.map(function(T,c){var D=T.status;return!D&&P.current!==void 0&&(c<P.current?D="finish":c===P.current?D="process":D="wait"),D==="finish"?l()(l()({},T),{},{icon:(0,B.jsx)(F.Z,{className:"".concat(r,"-finish-icon")})}):T})},[P.items,P.current]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(s,{}),(0,B.jsx)(H.Z,l()(l()({},P),{},{items:g,className:k()("".concat(r,"-steps"),P.className)}))]})},p=f},90118:function(xn,Q,n){n.d(Q,{Z:function(){return f}});var y=n(26068),l=n.n(y),K=n(67825),F=n.n(K),H=n(90264),E=n(10616),k=n(60213),A=n(53649),N=n.n(A),w=n(30764),R,x=(0,w.Z)(R||(R=N()([`
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
`])),function(p){return p.sparkPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.sparkPrefix}),m=n(52676),B=["label","className"],f=function(p){var o=x(),P=p.label,d=p.className,r=F()(p,B),s=(0,k.getCommonConfig)(),g=s.sparkPrefix;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{}),(0,m.jsxs)(H.Z,{align:"center",gap:8,className:d,children:[(0,m.jsx)(E.Z,l()(l()({},r),{},{className:"".concat(g,"-switch")})),P&&(0,m.jsx)("span",{className:"".concat(g,"-switch-label"),children:P})]})]})}},18762:function(xn,Q,n){n.d(Q,{Z:function(){return P}});var y=n(26068),l=n.n(y),K=n(67825),F=n.n(K),H=n(60213),E=n(2004),k=n(63267),A=n(82187),N=n.n(A),w=n(47525),R=n(53649),x=n.n(R),m=n(30764),B,f=(0,m.Z)(B||(B=x()([`
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
`])),function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),p=n(52676),o=["columns"];function P(d){var r,s=(0,H.getCommonConfig)(),g=s.sparkPrefix,T=d.columns,c=F()(d,o);T=(r=T)===null||r===void 0?void 0:r.map(function(L){return l()(l()({},L),{},{sortIcon:L.sortIcon||function(){return(0,p.jsx)(E.Z,{style:{fontSize:16,marginLeft:8}})}})});var D=f(),h=(0,w.X)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(D,{}),(0,p.jsx)(h,{}),(0,p.jsx)(k.Z,l()({className:N()("".concat(g,"-table")),columns:T},c))]})}},96295:function(xn,Q,n){n.d(Q,{Z:function(){return d}});var y=n(26068),l=n.n(y),K=n(67825),F=n.n(K),H=n(60213),E=n(40753),k=n(82187),A=n.n(k),N=n(75271),w=n(53649),R=n.n(w),x=n(30764),m,B=(0,x.Z)(m||(m=R()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),f=n(52676),p=["children","className","bordered","color","size"],o=function(r){return r.Purple="purple",r.Pink="pink",r.Yellow="yellow",r.Teal="teal",r.Blue="blue",r.Mauve="mauve",r.Transparent="transparent",r.Success="success",r.Error="error",r.Warning="warning",r.Info="info",r}(o||{}),P=(0,N.forwardRef)(function(r,s){var g=r.children,T=r.className,c=r.bordered,D=c===void 0?!1:c,h=r.color,L=h===void 0?"mauve":h,_=r.size,V=_===void 0?"middle":_,on=F()(r,p),nn=B(),Y=(0,H.getCommonConfig)(),z=Y.sparkPrefix,rn=Object.values(o).includes(L);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(nn,{}),(0,f.jsx)(E.Z,l()(l()({className:A()("".concat(z,"-tag ").concat(z,"-tag-").concat(L," ").concat(z,"-tag-").concat(V),T),bordered:D,color:rn?void 0:L},on),{},{ref:s,children:g}))]})}),d=P},2567:function(xn,Q,n){n.d(Q,{Z:function(){return T}});var y=n(26068),l=n.n(y),K=n(67825),F=n.n(K),H=n(60213),E=n(41246),k=n(72771),A=n(86137),N=n(34374),w=n(82187),R=n.n(w),x=n(75271),m=n(53649),B=n.n(m),f=n(30764),p,o=(0,f.Z)(p||(p=B()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),P=n(52676),d=["className","popupClassName"],r=["className","popupClassName"],s=function(D){var h=D.className,L=D.popupClassName,_=F()(D,d),V=k.Z.useToken(),on=V.token,nn=(0,H.getCommonConfig)(),Y=nn.sparkPrefix,z=o();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(z,{}),(0,P.jsx)(A.ZP,{theme:{components:{DatePicker:{activeBorderColor:on.colorPrimary}}},children:(0,P.jsx)(N.Z,l()({suffixIcon:(0,P.jsx)(E.Z,{}),className:R()("".concat(Y,"-picker"),h),popupClassName:R()("".concat(Y,"-picker-dropdown"),L)},_))})]})},g=function(D){var h=D.className,L=D.popupClassName,_=F()(D,r),V=k.Z.useToken(),on=V.token,nn=(0,H.getCommonConfig)(),Y=nn.sparkPrefix,z=o();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(z,{}),(0,P.jsx)(A.ZP,{theme:{components:{DatePicker:{activeBorderColor:on.colorPrimary}}},children:(0,P.jsx)(N.Z.RangePicker,l()({suffixIcon:(0,P.jsx)(E.Z,{}),className:R()("".concat(Y,"-picker"),h),popupClassName:R()("".concat(Y,"-picker-dropdown"),L),popupStyle:{padding:0}},_))})]})};s.RangePicker=g;var T=s},95726:function(xn,Q,n){n.d(Q,{Z:function(){return d}});var y=n(26068),l=n.n(y),K=n(67825),F=n.n(K),H=n(60213),E=n(84240),k=n(82187),A=n.n(k),N=n(53649),w=n.n(N),R=n(30764),x,m=(0,R.Z)(x||(x=w()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),B=n(52676),f=["className"],p=["className"],o=function(s){var g=s.className,T=F()(s,f),c=(0,H.getCommonConfig)(),D=c.sparkPrefix,h=m();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(h,{}),(0,B.jsx)(E.Z,l()({className:A()("".concat(D,"-upload"),g)},T))]})},P=function(s){var g=s.className,T=F()(s,p),c=(0,H.getCommonConfig)(),D=c.sparkPrefix,h=m();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(h,{}),(0,B.jsx)(E.Z.Dragger,l()({className:A()("".concat(D,"-upload"),g)},T))]})};o.Dragger=P,o.LIST_IGNORE=E.Z.LIST_IGNORE;var d=o},86822:function(xn,Q,n){n.d(Q,{Z:function(){return H}});var y=n(26068),l=n.n(y),K=n(75271),F=new Map;function H(E){var k=E.globalStyle,A=E.name;(0,K.useLayoutEffect)(function(){var N=F.get(k)||0;if(N)F.set(k,l()(l()({},N),{},{count:N.count+1}));else{var w=document.createElement("style"),R=Math.random().toString(36).slice(2);w.innerHTML=k,w.dataset.id=R,w.dataset.flag="bailian-ui-use-style",A&&w.setAttribute("name",A),document.head.appendChild(w),F.set(k,{count:1,id:R})}return function(){var x=F.get(k);F.set(k,l()(l()({},x),{},{count:x.count-1})),setTimeout(function(){var m=F.get(k);if((m==null?void 0:m.count)<=0){var B;F.delete(k),(B=document.head.querySelector('[data-id="'+m.id+'"]'))===null||B===void 0||B.remove()}},100)}},[k])}},5012:function(xn,Q,n){n.r(Q),n.d(Q,{Alert:function(){return o.Z},AlertDialog:function(){return D.default},Anchor:function(){return h.Z},Audio:function(){return Kr.Z},Avatar:function(){return L.Z},Badge:function(){return P.Z},Breadcrumb:function(){return _.Z},Button:function(){return V.Z},Card:function(){return on.Z},Checkbox:function(){return nn.Z},CodeBlock:function(){return Y.ZP},CodeBlockLangExtensionsMap:function(){return Y.xO},Collapse:function(){return z.Z},CollapsePanel:function(){return rn.Z},ConfigProvider:function(){return wt.ZP},DatePicker:function(){return pn.Z},Descriptions:function(){return Vr.Z},Drawer:function(){return dn.Z},Dropdown:function(){return bn.Z},EllipsisTip:function(){return Dn},Empty:function(){return kn.Z},FileCard:function(){return qe.s},FileIcon:function(){return qe.Z},FloatButton:function(){return d.Z},Form:function(){return Ln.Z},HelpIcon:function(){return wn},IconButton:function(){return Tn.Z},IconFont:function(){return Hn.Z},Image:function(){return te.Z},Input:function(){return je.Z},InputNumber:function(){return r.Z},MdEditor:function(){return Ne.Z},MdEditorLangExtensionsMap:function(){return Ne.x},MediaPreview:function(){return Gr.Z},MobileAlertDialog:function(){return vt},MobileDrawer:function(){return yt},MobileModal:function(){return jt},Modal:function(){return ge.Z},Pagination:function(){return Ee.Z},Popconfirm:function(){return xe.Z},Popover:function(){return br.Z},Progress:function(){return s.Z},PromptsEditor:function(){return Ne.Z},Radio:function(){return g.ZP},RadioButton:function(){return Cr.default},Result:function(){return jr.Z},Select:function(){return T.default},Skeleton:function(){return c.Z},SlateEditor:function(){return Ur},Slider:function(){return Xe.Z},SliderSelector:function(){return Xr},Spinner:function(){return Qr.Z},Statistic:function(){return qr.Z},Steps:function(){return Sr.Z},Switch:function(){return _r.Z},Table:function(){return nt.Z},Tabs:function(){return et.Z},Tag:function(){return rt.Z},TimePicker:function(){return tt.Z},Tooltip:function(){return Mn.Z},Upload:function(){return at.Z},Video:function(){return ot.Z},bailianDarkTheme:function(){return yr},bailianTheme:function(){return Pr},base64Decoder:function(){return $t},base64Encoder:function(){return zt},carbonDarkTheme:function(){return Qt},carbonTheme:function(){return Ut},copy:function(){return pr.JG},delay:function(){return dr},generateTheme:function(){return f},generateThemeByToken:function(){return p.Z},getCommonConfig:function(){return X.getCommonConfig},message:function(){return me.Z},notification:function(){return Se.Z},parseJsonSafely:function(){return Ht},purpleDarkTheme:function(){return yr},purpleTheme:function(){return Pr},renderTooltip:function(){return pr.rb},requestPop:function(){return vr},requestPopSse:function(){return Rt},requestSse:function(){return xr},safeHtml:function(){return Et.t},setCommonConfig:function(){return X.setCommonConfig},useCommonConfig:function(){return X.useCommonConfig},useGlobalStyle:function(){return St.Z},waitForDom:function(){return Wt},waitForFunc:function(){return hr}});var y=n(23577),l=n(19888),K=n(44719),F=n(57249),H=function(t){var a=t.r/255,u=t.g/255,i=t.b/255,v=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),b=u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4),j=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4);return .2126*v+.7152*b+.0722*j},E=function(t){var a=H(t);return a>.5},k=function(t){var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null},A=function(t,a,u){return"#"+((1<<24)+(t<<16)+(a<<8)+u).toString(16).slice(1).toUpperCase()},N=function(t,a,u){var i=t/255,v=a/255,b=u/255,j=Math.max(i,v,b),S=Math.min(i,v,b),I,C,M=(j+S)/2;if(j===S)I=C=0;else{var G=j-S;switch(C=M>.5?G/(2-j-S):G/(j+S),j){case i:I=((v-b)/G+(v<b?6:0))/6;break;case v:I=((b-i)/G+2)/6;break;case b:I=((i-v)/G+4)/6;break;default:I=0}}return{h:I*360,s:C*100,l:M*100}},w=function(t,a,u){var i=t/360,v=a/100,b=u/100,j,S,I;if(v===0)j=S=I=b;else{var C=function(tn,ln,Pn){var U=Pn;return U<0&&(U+=1),U>1&&(U-=1),U<.16666666666666666?tn+(ln-tn)*6*U:U<.5?ln:U<.6666666666666666?tn+(ln-tn)*(.6666666666666666-U)*6:tn},M=b<.5?b*(1+v):b+v-b*v,G=2*b-M;j=C(G,M,i+1/3),S=C(G,M,i),I=C(G,M,i-1/3)}return{r:Math.round(j*255),g:Math.round(S*255),b:Math.round(I*255)}},R=function(t,a){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=k(t);if(!i)return t;var v=N(i.r,i.g,i.b);v.l=Math.max(0,Math.min(100,v.l+a)),v.s=Math.max(0,Math.min(100,v.s+u));var b=w(v.h,v.s,v.l);return A(b.r,b.g,b.b)},x=function(t,a){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=k(t);if(!i)return t;var v=N(i.r,i.g,i.b);v.l=a,u!==null&&(v.s=u);var b=w(v.h,v.s,v.l);return A(b.r,b.g,b.b)},m=function(t,a){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=k(t);if(!i)return t;var v=N(i.r,i.g,i.b);v.l=a,v.s=Math.max(0,Math.min(100,v.s*u));var b=w(v.h,v.s,v.l);return A(b.r,b.g,b.b)},B=function(t){var a=t.primaryHex,u=t.darkMode,i=u===void 0?!1:u,v=t.bgBaseHex||(i?"#000000":"#ffffff"),b=t.textBaseHex||(i?"#E7E7ED":"#1a1a1a"),j=k(a);if(!j)return null;var S=N(j.r,j.g,j.b),I=k(v),C=k(b),M=I?N(I.r,I.g,I.b):{h:210,s:8,l:i?5:99},G=Math.max(8,Math.min(S.s,40)),an=Math.max(12,Math.min(S.s*.6,35)),tn=i?x(a,Math.max(S.l-5,42),S.s*.95):a,ln=k(tn),Pn=ln?N(ln.r,ln.g,ln.b):S,U={borderRadiusXS:l.borderRadiusXS,borderRadiusSM:l.borderRadiusSM,borderRadius:l.borderRadius,borderRadiusLG:l.borderRadiusLG,borderRadiusXL:l.borderRadiusXL,borderRadiusFull:l.borderRadiusFull,wireframe:l.wireframe,colorPrimary:i?x(a,Math.max(S.l-5,42),S.s*.95):a,colorPrimaryHover:i?x(a,Math.min(S.l+10,55),S.s*.95):R(a,S.l<50?10:-10,0),colorPrimaryActive:i?x(a,Math.max(S.l-10,35),S.s*.95):R(a,S.l<50?-10:-20,0),colorPrimaryBg:i?x(a,13,G*.6):x(a,96,G*.8),colorPrimaryBgHover:i?x(a,13,G*.6):x(a,94,G),colorPrimaryBorder:i?x(a,17,an*.8):x(a,88,an*.8),colorPrimaryBorderHover:i?x(a,22,an):x(a,82,an),colorPrimaryText:i?x(a,Math.max(S.l-5,42),S.s*.95):a,colorPrimaryTextHover:i?x(a,Math.min(S.l+10,55),S.s*.95):R(a,S.l<50?10:-10,0),colorPrimaryTextActive:i?x(a,Math.max(S.l-10,35),S.s*.95):R(a,S.l<50?-10:-20,0),colorTextOnPrimary:E(ln)?"#000000":"#ffffff",colorTextBase:b,colorText:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.88)"),colorTextSecondary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.65)"),colorTextTertiary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.45)"),colorTextQuaternary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.25)"),colorTextWhite:"#fff",colorBgBase:v,colorBgContainer:i?m(v,Math.min(M.l+S.l*.08,12),1.2):m(v,Math.max(100-S.l*.05,96),.8),colorBgElevated:i?m(v,Math.min(M.l+3,8),1.2):v,colorBgLayout:v,colorBgSpotlight:i?"rgba(".concat(k(m(v,28,1.2)).r,", ").concat(k(m(v,28,1.2)).g,", ").concat(k(m(v,28,1.2)).b,", 0.85)"):"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.85)"),colorBgMask:i?"rgba(".concat(I.r,", ").concat(I.g,", ").concat(I.b,", 0.8)"):"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.45)"),colorBorder:i?"rgba(".concat(k(m(v,28,2)).r,", ").concat(k(m(v,28,2)).g,", ").concat(k(m(v,28,2)).b,", 0.8)"):m(v,81,2.5),colorBorderSecondary:i?"rgba(".concat(k(m(v,22,1.8)).r,", ").concat(k(m(v,22,1.8)).g,", ").concat(k(m(v,22,1.8)).b,", 0.8)"):m(v,88,2),colorFill:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.18)"):m(v,81,2.5)+"5c",colorFillSecondary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.12)"):m(v,81,2.5)+"33",colorFillTertiary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.08)"):m(v,81,2.5)+"26",colorFillQuaternary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.04)"):m(v,81,2.5)+"1a",colorFillDisable:i?m(b,55,.8):m(v,86,1.8),colorLink:i?x(a,Math.max(S.l-5,42),S.s*.95):a,colorInfo:i?y.colorInfo:l.colorInfo,colorInfoHover:i?y.colorInfoHover:l.colorInfoHover,colorInfoText:i?y.colorInfoText:l.colorInfoText,colorInfoBg:i?y.colorInfoBg:l.colorInfoBg,colorInfoBgHover:i?y.colorInfoBgHover:l.colorInfoBgHover,colorInfoBorder:i?y.colorInfoBorder:l.colorInfoBorder,colorInfoBorderHover:i?y.colorInfoBorderHover:l.colorInfoBorderHover,colorSuccess:i?y.colorSuccess:l.colorSuccess,colorSuccessHover:i?y.colorSuccessHover:l.colorSuccessHover,colorSuccessBg:i?y.colorSuccessBg:l.colorSuccessBg,colorSuccessBgHover:i?y.colorSuccessBgHover:l.colorSuccessBgHover,colorSuccessBorder:i?y.colorSuccessBorder:l.colorSuccessBorder,colorSuccessBorderHover:i?y.colorSuccessBorderHover:l.colorSuccessBorderHover,colorWarning:i?y.colorWarning:l.colorWarning,colorWarningHover:i?y.colorWarningHover:l.colorWarningHover,colorWarningBg:i?y.colorWarningBg:l.colorWarningBg,colorWarningBgHover:i?y.colorWarningBgHover:l.colorWarningBgHover,colorWarningBorder:i?y.colorWarningBorder:l.colorWarningBorder,colorWarningBorderHover:i?y.colorWarningBorderHover:l.colorWarningBorderHover,colorError:i?y.colorError:l.colorError,colorErrorHover:i?y.colorErrorHover:l.colorErrorHover,colorErrorBg:i?y.colorErrorBg:l.colorErrorBg,colorErrorBgHover:i?y.colorErrorBgHover:l.colorErrorBgHover,colorErrorBorder:i?y.colorErrorBorder:l.colorErrorBorder,colorErrorBorderHover:i?y.colorErrorBorderHover:l.colorErrorBorderHover,colorPurple:i?y.colorPurple:l.colorPurple,colorPurpleHover:i?y.colorPurpleHover:l.colorPurpleHover,colorPurpleBg:i?y.colorPurpleBg:l.colorPurpleBg,colorPink:i?y.colorPink:l.colorPink,colorPinkHover:i?y.colorPinkHover:l.colorPinkHover,colorPinkBg:i?y.colorPinkBg:l.colorPinkBg,colorYellow:i?y.colorYellow:l.colorYellow,colorYellowHover:i?y.colorYellowHover:l.colorYellowHover,colorYellowBg:i?y.colorYellowBg:l.colorYellowBg,colorOrange:i?y.colorOrange:l.colorOrange,colorOrangeHover:i?y.colorOrangeHover:l.colorOrangeHover,colorOrangeBg:i?y.colorOrangeBg:l.colorOrangeBg,colorTeal:i?y.colorTeal:l.colorTeal,colorTealHover:i?y.colorTealHover:l.colorTealHover,colorTealBg:i?y.colorTealBg:l.colorTealBg,colorBlue:i?y.colorBlue:l.colorBlue,colorBlueHover:i?y.colorBlueHover:l.colorBlueHover,colorBlueBg:i?y.colorBlueBg:l.colorBlueBg,colorMauve:i?y.colorMauve:l.colorMauve,colorMauveHover:i?y.colorMauveHover:l.colorMauveHover,colorMauveBg:i?y.colorMauveBg:l.colorMauveBg,colorSlate:i?y.colorSlate:l.colorSlate||"#1E293B",colorSlateHover:i?y.colorSlateHover:l.colorSlateHover||"#475569",colorSlateBg:i?y.colorSlateBg:l.colorSlateBg||"#E2E8F0",colorLavender:i?y.colorLavender:l.colorLavender||"#A77BFF",colorLavenderHover:i?y.colorLavenderHover:l.colorLavenderHover||"#BB99FF",colorLavenderBg:i?y.colorLavenderBg:l.colorLavenderBg||"rgba(226, 212, 255, 0.8)",boxShadow:i?y.boxShadow:l.boxShadow,boxShadowSecondary:i?y.boxShadowSecondary:l.boxShadowSecondary,boxShadowTertiary:i?y.boxShadowTertiary:l.boxShadowTertiary,boxShadowTertiaryLeft:i?y.boxShadowTertiaryLeft:l.boxShadowTertiaryLeft,boxShadowInput:i?y.boxShadowInput:l.boxShadowInput};return U},f=B,p=n(18729),o=n(80017),P=n(49339),d=n(45365),r=n(32496),s=n(22576),g=n(6944),T=n(45908),c=n(86585),D=n(7481),h=n(21245),L=n(93178),_=n(40),V=n(60823),on=n(61902),nn=n(98618),Y=n(49570),z=n(94684),rn=n(61406),pn=n(84360),dn=n(19743),bn=n(38356),sn=n(26068),Z=n.n(sn),Nn=n(31759),Cn=n.n(Nn),X=n(60213),en=n(89462),fn=n(82187),yn=n.n(fn),gn=n(75271),vn=n(53649),cn=n.n(vn),jn=n(30764),On,hn=(0,jn.Z)(On||(On=cn()([`
div.`,`-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`])),function(e){return e.sparkPrefix}),O=n(52676);function Dn(e){var t=e.className,a=t===void 0?"":t,u=e.style,i=u===void 0?{}:u,v=e.children,b=e.rows,j=b===void 0?1:b,S=e.tooltip,I=e.tooltipMaxHeight,C=I===void 0?"90vh":I,M=(0,X.getCommonConfig)(),G=M.sparkPrefix,an=hn();function tn(){var ln={maxHeight:C,overflow:"auto"};if(Cn()(S)==="object"){var Pn=S,U=Pn.title,J=Pn.styles;return{title:U||v,styles:Z()(Z()({},J),{},{body:Z()(Z()({},ln),J==null?void 0:J.body)})}}return{title:S||v,styles:{body:ln}}}return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(an,{}),(0,O.jsx)(en.Z.Paragraph,{className:yn()("".concat(G,"-ellipsis-tip"),a),style:i,ellipsis:{rows:j,tooltip:tn()},children:v})]})}var kn=n(49327),Ln=n(90895),Sn=n(20855),Tn=n(94662),un=n(39862),Mn=n(19546),In,ce=(0,jn.Z)(In||(In=cn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix});function wn(e){var t=(0,un.X)(),a=ce(),u=e.style,i=e.content,v=e.className,b=e.popoverProps,j=(0,X.getCommonConfig)(),S=j.sparkPrefix;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(t,{}),(0,O.jsx)(a,{}),(0,O.jsx)(Mn.Z,Z()(Z()({title:i,overlayInnerStyle:{maxWidth:376},trigger:"hover",style:u},b),{},{children:(0,O.jsx)(Tn.Z,{className:yn()("".concat(S,"-help-icon"),v),icon:(0,O.jsx)(Sn.Z,{}),shape:"circle",bordered:!1,size:"small"})}))]})}var Hn=n(48004),te=n(70344),je=n(38734),me=n(39971),ge=n(3983),Se=n(94361),Ee=n(85525),xe=n(30959),br=n(86298),Ne=n(40517),Cr=n(8893),jr=n(81483),Sr=n(52849),Er=n(48305),Te=n.n(Er),Xn=n(40965),ie=n(86212),W=n(75040),De=n(28533),le=n(20335),Qe,Nr=(0,jn.Z)(Qe||(Qe=cn()([`
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
`]))),Tr=n(15558),Ke=n.n(Tr),Dr=(0,gn.memo)(function(e){var t=e.attributes,a=e.children;return(0,O.jsx)("div",Z()(Z()({},t),{},{style:{marginTop:"8px"},children:a}))}),Ve,Mr=(0,jn.Z)(Ve||(Ve=cn()([`
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
`]))),Br=(0,gn.memo)(function(e){var t=e.attributes,a=e.renderVarLabel,u=Mr();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(u,{}),(0,O.jsxs)("span",Z()(Z()({},t),{},{children:[e.children,(0,O.jsx)("span",{className:"spark-editor-var-tag",children:a?a(e.element.code):e.element.label})]}))]})}),Kt=function(t){return Object.keys(t).map(function(a){return{label:t[a].label,desc:t[a].desc,value:a}})},kr=[{code:"s",isParagraph:!0,out:[],inner:[],name:Xn.Z.get({id:"components.SlateEditor.utils.constant.Paragraph",dm:"\u6BB5\u843D"}),render:Dr,type:"double"},{code:"var",isParagraph:!1,out:["s"],inner:[],name:Xn.Z.get({id:"components.SlateEditor.utils.constant.Variable",dm:"\u53D8\u91CF"}),render:Br,isInline:!0,isVoid:!0,type:"single"}],Me=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},Vt=function(t){return t.replace(/&/g,"&amp;").replace(/{/g,"").replace(/}/g,"").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},Fr=function(t){return t.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")},Be=function e(t,a){var u="",i=a||{},v=i.tagRules,b=v===void 0?{}:v;return t.forEach(function(j,S){if(W.W_.isElement(j)){var I=b[j.type];if(!I)u+=Me(j.text);else switch(I.code){case"image":u+="![".concat(j.fileName,"](").concat(j.src,")");break;case"pdf":u+="[".concat(j.fileName,"](").concat(j.src,")");break;case"s":u+="".concat(e(j.children,a)).concat(S<t.length-1?`
`:"");break;case"var":u+="${".concat(j.code,"}");default:break}}else u+=Me(j.text)}),u},Ge=function(t,a){if(t&&t.children.length){var u=Be(t.children,a);return u==="<s></s>"?"":Fr(u)}return""},pe=function(t){if(!t)return"";var a="",u=Me(t).replace(/\$\{([^{}]+?)\}/g,function(i,v){return'<var code="'.concat(v,'" label="${').concat(v,'}" />')});return u.split(`
`).forEach(function(i){a+="<s>".concat(i,"</s>")}),"<speak>".concat(a,"</speak>")},Zr=function e(t){var a,u=[];return(t==null||(a=t.childNodes)===null||a===void 0?void 0:a.length)>0&&t.childNodes.forEach(function(i,v,b){var j=i.nodeType,S=i.nodeName;if(j===1){for(var I={},C=0;C<i.attributes.length;C++){var M=i.attributes[C],G=M.nodeName,an=M.nodeValue;I[G]=an}var tn=Z()({type:S},I);i.childNodes.length>0?tn.children=e(i):tn.children=[{text:""}],u.push(tn),S!=="s"&&(v>0&&b[v-1].nodeType===1&&u.unshift({text:""}),v===b.length-1&&u.push({text:""}))}else j===3&&u.push({text:i.nodeValue||""})}),u},he=function(t){if(t){var a=new DOMParser().parseFromString(t,"text/xml");return Zr(a)}},Or=function(t){if(!t||t.includes("</speak>"))return t;var a=t;return a.includes("<s>")||(a="<s>".concat(a,"</s>")),"<speak>".concat(a,"</speak>")},Je=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a={};return[].concat(Ke()(t),Ke()(kr)).forEach(function(u){a[u.code]||(a[u.code]=u)}),a},Lr=n(90228),Zn=n.n(Lr),Ir=n(87999),qn=n.n(Ir),Ye=function(t,a,u){if(!(!t||!a)){var i=t.selection,v=null;i&&(v=i.focus),u!=null&&u.at&&(v=u==null?void 0:u.at),v||(v={path:[0,0],offset:0});var b=v,j=b.path,S=b.offset,I=W.NB.get(t,W.y$.parent(j));if(!W.ML.isVoid(t,I)){var C=W.NB.string(W.NB.get(t,j)),M=C.substring(0,S-(u!=null&&u.deletePrefix?1:0)),G=C.substring(S,C.length);W.ML.withoutNormalizing(t,function(){t.apply({type:"insert_node",node:{text:G},path:j}),t.apply({type:"insert_node",node:a,path:j}),t.apply({type:"insert_node",node:{text:M},path:j});var an=W.y$.next(W.y$.next(W.y$.next(j)));t.apply({type:"remove_node",path:an,node:W.NB.get(t,an)});var tn={path:W.y$.next(W.y$.next(j)),offset:0};t.apply({type:"set_selection",properties:null,newProperties:{anchor:tn,focus:tn}}),le.F3.focus(t),t.onChange()})}}},Ar=function(){var e=qn()(Zn()().mark(function t(a,u,i){var v,b,j,S,I,C,M,G,an,tn,ln,Pn,U,J,En,Bn,Qn,Fn,zn,ne,An,ae,Kn,oe,Vn,Gn,re,Rn,Wn,$n,Jn,mn;return Zn()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:if(!(!a||!u)){q.next=2;break}return q.abrupt("return");case 2:if(b=a.selection,j=i||{},S=j.tip,I=j.selection,C=I===void 0?b:I,M=i==null||(v=i.rules)===null||v===void 0?void 0:v[u.type],!(C&&!W.e6.isCollapsed(C))){q.next=45;break}if(an=W.NB.fragment(a,C),tn=Pe(an),tn!==""){q.next=10;break}return q.abrupt("return");case 10:if(ln=ye(W.e6.edges(C)),Pn=Te()(ln,2),U=Pn[0],J=Pn[1],W.ML.isVoid(a,W.NB.get(a,W.y$.parent(U.path)))&&(U.path=W.y$.next(W.y$.parent(U.path)),U.offset=0),W.ML.isVoid(a,W.NB.get(a,W.y$.parent(J.path)))&&(J.path=W.y$.previous(W.y$.parent(J.path)),J.offset=W.NB.string(W.NB.get(a,J.path)).length),W.y$.hasPrevious(J.path)&&W.NB.get(a,W.y$.parent(U.path))===W.NB.get(a,W.y$.previous(J.path))&&U.offset===0&&J.offset===0&&(En=W.y$.previous(W.y$.parent(U.path)),Bn=W.NB.get(a,En),U.path=En,U.offset=Bn.text.length),W.NB.parent(a,U.path)!==W.NB.parent(a,J.path)){for(Qn=W.NB.get(a,U.path),Fn=Pe(W.NB.fragment(a,{anchor:{path:J.path,offset:0},focus:J}));W.xv.isText(Qn)&&Qn.text===""&&tn===Fn;)U.path.splice(U.path.length-1,1,1,0),Qn=W.NB.get(a,U.path);for(zn=W.NB.get(a,J.path),ne=W.NB.string(W.NB.get(a,W.e6.edges(C)[0].path)),An=Pe(W.NB.fragment(a,{anchor:U,focus:{path:U.path,offset:ne.length}}));W.xv.isText(zn)&&zn.text===""&&tn===An;)ae=J.path[J.path.length-1],J.path.splice(J.path.length-1,1,ae-1),zn=W.NB.get(a,J.path),W.W_.isElement(zn)&&(J.path.push(zn.children.length-1),J.offset=ne.length)}if(W.NB.parent(a,U.path)===W.NB.parent(a,J.path)){q.next=18;break}return ie.ZP.info(Xn.Z.get({id:"components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect",dm:"\u5212\u9009\u8303\u56F4\u6709\u8BEF"})),q.abrupt("return");case 18:Kn=W.y$.parent(U.path),oe=(M==null?void 0:M.name)||ke(),Vn=W.NB.get(a,Kn),Gn=i==null||(G=i.rules)===null||G===void 0?void 0:G[Vn.type];case 22:if(!(M!=null&&M.out&&Kn.length>1)){q.next=30;break}if(M.out.includes(Vn.type)){q.next=27;break}return re=(Gn==null?void 0:Gn.name)||ke(),ie.ZP.warning(Xn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn",dm:"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185"},{wrapTagName:oe,tagName:re})),q.abrupt("return");case 27:Kn=W.y$.parent(Kn),q.next=22;break;case 30:if(!(M!=null&&M.inner&&W.NB.get(a,U.path)!==W.NB.get(a,J.path))){q.next=42;break}Rn=W.y$.next(U.path);case 32:if(W.y$.equals(Rn,J.path)){q.next=42;break}if($n=W.NB.get(a,Rn),Jn=i==null||(Wn=i.rules)===null||Wn===void 0?void 0:Wn[$n.type],!(W.W_.isElement($n)&&!M.inner.includes($n.type))){q.next=39;break}return mn=(Jn==null?void 0:Jn.name)||ke(),ie.ZP.warning(Xn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn",dm:"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011"},{wrapTagName:oe,tagName:mn})),q.abrupt("return");case 39:Rn=W.y$.next(Rn),q.next=32;break;case 42:W.ML.withoutNormalizing(a,function(){var Yn=W.NB.parent(a,U.path),ee=W.NB.fragment(Yn,{anchor:{path:[U.path[U.path.length-1]],offset:U.offset},focus:{path:[J.path[J.path.length-1]],offset:J.offset}}),fe=W.NB.string(W.NB.get(a,U.path));if(W.y$.equals(U.path,J.path))a.apply({type:"remove_text",path:U.path,offset:U.offset,text:fe.substring(U.offset,J.offset)});else{a.apply({type:"remove_text",path:U.path,offset:U.offset,text:fe.substring(U.offset,fe.length)});for(var ve=W.y$.next(U.path);!W.y$.equals(ve,J.path);)a.apply({type:"remove_node",path:ve,node:W.NB.get(a,ve)}),J.path=W.y$.previous(J.path);var He=W.NB.string(W.NB.get(a,J.path));a.apply({type:"remove_text",path:J.path,offset:0,text:He.substring(0,J.offset)})}if(!W.y$.equals(U.path,J.path)){var Ce=W.NB.get(a,J.path);a.apply({type:"remove_node",path:J.path,node:Ce});var ze=W.NB.string(Ce);a.apply({type:"insert_text",path:U.path,offset:U.offset,text:ze})}Ye(a,Z()(Z()({},u),{},{children:ee}),{at:U,rules:i==null?void 0:i.rules})}),q.next=46;break;case 45:S&&ie.ZP.warning(S);case 46:case"end":return q.stop()}},t)}));return function(a,u,i){return e.apply(this,arguments)}}(),Gt=function(t,a,u){if(!(!t||!a)){var i=Node.get(t,a),v=ye(i.children).reverse();Editor.withoutNormalizing(t,function(){t.apply({type:"remove_node",node:i,path:a}),v.forEach(function(tn){t.apply({type:"insert_node",node:tn,path:a})});for(var b=Path.parent(a),j=Node.get(t,b),S=0;Node.has(j,[S+1]);)if(Text.isText(Node.get(j,[S]))&&Text.isText(Node.get(j,[S+1]))){var I=_toConsumableArray(b);I.push(S+1);var C=Node.get(t,I),M=Node.string(C);t.apply({type:"remove_node",path:I,node:C});var G=Path.previous(I),an=Node.string(Node.get(t,G));t.apply({type:"insert_text",path:Path.previous(I),offset:an.length,text:M}),j=Node.get(t,b)}else S++;u==null||u(),Path.previous(a)})}},Rr=function(t,a,u){var i=u.at;t.apply({type:"set_node",path:i,properties:a,newProperties:a}),t.onChange()},Jt=function(t,a,u){t.apply({type:"remove_node",path:u,node:Node.get(t,u)}),t.apply({type:"insert_node",path:u,node:a})},Wr=function(t,a){t&&(W.ML.withoutNormalizing(t,function(){var u=ye(t.children);u.forEach(function(v){t.apply({type:"remove_node",path:[0],node:v})});var i=a?ye(a):[{type:"s",children:[{text:""}]}];i.reverse(),i.forEach(function(v){t.apply({type:"insert_node",path:[0],node:v})})}),t.onChange())},Pe=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.reduce(function(a,u){return a+W.NB.string(u)},"")},ye=function(t){return JSON.parse(JSON.stringify(t))},ke=function(){var t="";return t},Yt=function(t){var a;return(a=t[0])===null||a===void 0||(a=a.children)===null||a===void 0?void 0:a.map(function(u){return u.children.map(function(i){return i.text}).join("")}).join("")},Xt=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,a=t%60,u=parseInt("".concat(t/60)),i=0;return u>60&&(u=u%60,i=parseInt("".concat(u/60))),"".concat(i?"".concat(Fe(i),":"):"").concat(Fe(u),":").concat(Fe(a))},Fe=function(t){return t>=10?"".concat(t):"0".concat(t)},wr=function(t,a){if(!(!t||!a))return le.F3.findPath(t,a)},Hr=function(t){t&&W.ML.withoutNormalizing(t,function(){var a=W.ML.end(t,[]);W.YR.select(t,a),le.F3.focus(t),t.onChange()})},zr=function(t,a,u){var i=t.isInline,v=t.isVoid,b=t.insertText,j=t.insertBreak,S=t.apply;t.isInline=function(C){var M;return((M=u[C.type])===null||M===void 0?void 0:M.isInline)||i(C)},t.isVoid=function(C){var M;return((M=u[C.type])===null||M===void 0?void 0:M.isVoid)||v(C)};var I=function(M){var G=parseInt(t.maxLength||a||"1000"),an=Ge(t,{tagRules:u}),tn=an.length;if(tn+M.length>G?(b(M.substring(0,G-tn)),De.MO.withoutSaving(t,function(){b(M.substring(G-tn,M.length))})):b(M),t.selection&&tn+M.length>G){var ln=t.selection.focus,Pn=ln.path,U=ln.offset,J=U-(tn+M.length-G),En=M.substring(G-tn,M.length),Bn=Xn.Z.get({id:"components.SlateEditor.utils.withEditor.YouCanEnterAMaximum",dm:"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57"},{maxLen:G});De.MO.withoutSaving(t,function(){t.apply({type:"remove_text",path:Pn,offset:J,text:En})}),ie.ZP.warning(Bn)}};return t.insertText=I,t.insertFragment=function(C){var M=Pe(C);I(M)},t.insertBreak=function(){var C=t.selection;if(C){var M=Array.from(W.ML.nodes(t,{at:C,match:function(ln){return!W.ML.isEditor(ln)&&W.W_.isElement(ln)&&ln.type!=="s"}})),G=Te()(M,1),an=G[0];if(an)return;j()}},t.apply=function(C){C.type==="set_selection"&&Ze||S(C)},t},$r=(0,gn.forwardRef)(function(e,t){var a=Nr(),u=e.value,i=e.wordLimit,v=i===void 0?1e3:i,b=e.disabled,j=e.onChange,S=e.variables,I=(0,gn.useRef)(!1),C=(0,gn.useRef)(Je(e.tagRules)),M=(0,gn.useMemo)(function(){return zr((0,le.BU)((0,De.VC)((0,W.Jh)())),v,C.current)},[]),G=(0,gn.useRef)(M.selection),an=(0,gn.useRef)(S);(0,gn.useEffect)(function(){C.current=Je(e.tagRules)},[e.tagRules]),(0,gn.useEffect)(function(){an.current=S},[S]),(0,gn.useEffect)(function(){var mn;if(!I.current){I.current=!0;return}M.maxLength=v;var $=An();Vn(((mn=he(pe($==null?void 0:$.slice(0,v))))===null||mn===void 0||(mn=mn[0])===null||mn===void 0?void 0:mn.children)||[{type:"s",children:[{text:""}]}])},[v]),(0,gn.useImperativeHandle)(t,function(){return{editor:M,getEditorValue:An,_insertNodes:Kn,_setNodes:ae,_setEditorContent:Vn,_findNodePath:re,_wrapNodes:oe,_serialize:Rn,_generateTextBySelection:Wn,_insertFragment:$n,_setEditorContentByStr:Gn}});var tn=(0,gn.useMemo)(function(){var mn=he(Or(pe(u))),$;return mn&&(mn[0].type==="speak"?$=mn[0].children:$=mn),{initValue:$}},[u]),ln=tn.initValue,Pn=(0,gn.useState)(ln||[{type:"s",children:[{text:""}]}]),U=Te()(Pn,2),J=U[0],En=U[1],Bn=function($){JSON.stringify((M==null?void 0:M.selection)||"")!==JSON.stringify(G.current||"")&&(G.current=M==null?void 0:M.selection);var q=An();u!==q&&(j==null||j(An()),En($))},Qn=function($){var q=$.element,Yn=q.type,ee=C.current[Yn].render;return ee?(0,O.jsx)(ee,Z()(Z()({},$),{},{renderVarLabel:e.renderVarLabel})):(0,O.jsx)(O.Fragment,{})},Fn=(0,gn.useCallback)(function(mn){var $=mn.attributes,q=mn.children,Yn=mn.leaf;return(0,O.jsx)("span",Z()(Z()({},$),{},{style:{paddingLeft:Yn.text===""?"3px":void 0},children:q}))},[]),zn=function(){Ze=!0},ne=function(){Ze=!1},An=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ge(M,Z()(Z()({},$),{},{tagRules:C.current}))},ae=function($,q){Rr(M,$,q)},Kn=function($){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ye(M,$,Z()(Z()({},q),{},{rules:C.current}))},oe=function($){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ar(M,$,Z()(Z()({},q),{},{rules:C.current}))},Vn=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];Wr(M,$)},Gn=function(){var $,q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";Vn((($=he(pe(q==null?void 0:q.slice(0,v))))===null||$===void 0||($=$[0])===null||$===void 0?void 0:$.children)||[{type:"s",children:[{text:""}]}])},re=function($){return wr(M,$)},Rn=function($){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Be($,Z()(Z()({},q),{},{tagRules:C.current}))},Wn=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!M.selection)return null;var q=W.NB.fragment(M,M.selection);return Be(q,Z()(Z()({},$),{},{tagRules:C.current}))},$n=function($){var q,Yn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,ee=An();if(ee.length>=v){ie.ZP.warning(Xn.Z.get({id:"components.commonComponents.SlateEditor.TheNumberOfWordsCannot",dm:"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57"}));return}(!M.selection||Yn)&&Hr(M);var fe=ee.endsWith("/n");Yn&&ee&&!fe&&M.insertBreak();var ve=$.slice(0,v-ee.length),He=he(pe(ve))||[];(q=He[0])===null||q===void 0||q.children.forEach(function(Ce,ze){var $e;ze!==0&&M.insertBreak(),($e=Ce.children)===null||$e===void 0||$e.forEach(function(Ue){Ue.text?M.insertText(Ue.text):Kn(Ue)})})};(0,gn.useEffect)(function(){var mn=An();u!==mn&&(j==null||j(An()))},[]);var Jn=function($){var q=$.clipboardData.getData("text/plain"),Yn=q.replace(/\r\n/g,`
`).replace(/\r/g,`
`);$n(Yn,!1),$.preventDefault()};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(a,{}),(0,O.jsx)("div",{id:"text-editor",className:yn()("text-editor",e.className),children:(0,O.jsx)(le.mH,{editor:M,value:J,onChange:Bn,children:(0,O.jsx)(le.CX,{onKeyDown:e.onKeyDown,placeholder:e.placeholder||Xn.Z.get({id:"components.commonComponents.SlateEditor.EnterHere",dm:"\u5728\u8FD9\u91CC\u8F93\u5165"}),onBlur:e.onBlur,onFocus:e.onFocus,className:yn()("text-editor-content",e.contentClassName),readOnly:b,renderElement:Qn,renderLeaf:Fn,onCompositionStart:zn,onCompositionEnd:ne,onPaste:Jn,maxLength:e.wordLimit,onCopy:function($){var q=Wn()||"";$.clipboardData.setData("text/plain",q),$.preventDefault()}})})})]})}),Ur=$r,Ze=!1,Xe=n(77652),Qr=n(70076),Kr=n(8639),Vr=n(62518),qe=n(46763),Gr=n(36070),Jr=n(82092),ue=n.n(Jr),_e,Yr=(0,jn.Z)(_e||(_e=cn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix});function Xr(e){var t=(0,X.getCommonConfig)(),a=t.sparkPrefix,u=Yr(),i=function(b){var j=typeof b=="string"?parseFloat(b):b;if(j===null||isNaN(j)){var S;(S=e.onChange)===null||S===void 0||S.call(e,null);return}if(j<e.min){var I;(I=e.onChange)===null||I===void 0||I.call(e,e.min)}else if(j>e.max){var C;(C=e.onChange)===null||C===void 0||C.call(e,e.max)}else{var M;(M=e.onChange)===null||M===void 0||M.call(e,j)}};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(u,{}),(0,O.jsxs)("div",{onMouseUp:function(){var b;return(b=e.onBlur)===null||b===void 0?void 0:b.call(e)},className:yn()("".concat(a,"-slider-selector"),e.className),children:[(0,O.jsx)(Xe.Z,{disabled:e.disabled,onChange:i,value:e.value===null?void 0:e.value,min:e.min,max:e.max,step:e.step,marks:e.marks||ue()(ue()({},e.min,e.min),e.max,e.max),tooltip:{getPopupContainer:function(b){return b}}}),(0,O.jsx)("div",{style:Z()({width:"48px"},e.inputNumberWrapperStyle),children:(0,O.jsx)(r.Z,{disabled:e.disabled,controls:!1,min:e.min,max:e.max,onBlur:function(){var b;return(b=e.onBlur)===null||b===void 0?void 0:b.call(e)},step:e.step,value:e.value,onChange:i,precision:e.precision})})]})]})}var qr=n(75229),_r=n(90118),nt=n(18762),et=n(98587),rt=n(96295),tt=n(2567),at=n(95726),ot=n(70588),it=n(67825),se=n.n(it),lt=n(58911),st=n(88602),ct=n(62910),ut=n(99090),be=n(90264),_n=n(91301),nr,er=(0,jn.Z)(nr||(nr=cn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),dt=["children","type","danger","title","width","className"],rr=function(){var t=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,u=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(u,"px"),function(){document.body.style.overflow=t,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,u)}},tr=function(t){var a=function(ln){var Pn=ln.type,U=ln.title,J=(0,X.getCommonConfig)(),En=J.antPrefix;switch(Pn){case"success":return(0,O.jsxs)(be.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,O.jsx)(lt.Z,{style:{color:"var(--".concat(En,"-color-success)"),fontSize:18,margin:"0 3px"}}),U]});case"warning":case"confirm":return(0,O.jsxs)(be.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,O.jsx)(st.Z,{style:{color:"var(--".concat(En,"-color-warning)"),fontSize:18,margin:"0 3px"}}),U]});case"info":return(0,O.jsxs)(be.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,O.jsx)(ct.Z,{style:{color:"var(--".concat(En,"-color-info)"),fontSize:18,margin:"0 3px"}}),U]});case"error":return(0,O.jsxs)(be.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,O.jsx)(ut.Z,{style:{color:"var(--".concat(En,"-color-error)"),fontSize:18,margin:"0 3px"}}),U]});default:return Xn.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},u=t.children,i=t.type,v=i===void 0?"info":i,b=t.danger,j=b===void 0?!1:b,S=t.title,I=t.width,C=I===void 0?"auto":I,M=t.className,G=M===void 0?"":M,an=se()(t,dt);return{width:C,transitionName:"",restProps:an,closeIcon:null,title:a({type:v,title:S}),okButtonProps:{danger:v==="error"||v==="warning"||j},destroyOnClose:!0,className:yn()(G,"animate-in","".concat((0,X.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:t.content||u,children:u}},ar=function(t){var a=tr(t),u=er();return(0,gn.useEffect)(function(){if(t.open){var i=rr();return i}},[t.open]),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(u,{}),(0,O.jsx)(_n.Z,Z()(Z()({width:a.width,transitionName:""},a.restProps),{},{closeIcon:null,title:a.title,okButtonProps:a.okButtonProps||{},destroyOnClose:a.destroyOnClose,className:a.className,children:a.content||a.children}))]})},ft=["success","info","warning","error","confirm"];ft.forEach(function(e){ar[e]=function(t){var a=tr(Z()(Z()({},t),{},{type:e})),u=rr();function i(){var v=er();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(v,{}),a.content]})}return _n.Z.confirm(Z()(Z()(Z()({},a),a.restProps),{},{content:(0,O.jsx)(i,{}),icon:null,afterClose:function(){var b;if(u(),(b=a.restProps)!==null&&b!==void 0&&b.afterClose){var j;(j=a.restProps).afterClose.apply(j,arguments)}}}))}});var vt=ar,mt=n(14679),gt=n(56652),or,ir=(0,jn.Z)(or||(or=cn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),xt=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],pt=function(t){var a=t.onOk,u=t.onCancel,i=t.okText,v=i===void 0?"\u786E\u5B9A":i,b=t.okButtonProps,j=t.cancelText,S=j===void 0?"\u53D6\u6D88":j,I=t.cancelButtonProps,C=t.info,M=t.footer,G=se()(t,xt),an=ir(),tn=(0,X.getCommonConfig)(),ln=tn.antPrefix,Pn=function(J){if(u)u();else{var En;(En=G.onClose)===null||En===void 0||En.call(G,J)}};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(an,{}),(0,O.jsx)(dn.Z,Z()(Z()({},G),{},{footer:M||(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("div",{className:"".concat(ln,"-drawer-footer-info"),children:C}),(0,O.jsxs)("div",{className:"".concat(ln,"-drawer-footer-buttons"),children:[(0,O.jsx)(V.Z,Z()(Z()({onClick:Pn},I),{},{children:S})),(0,O.jsx)(V.Z,Z()(Z()({type:"primary",onClick:a},b),{},{children:v}))]})]})}))]})},ht=pt,Pt=["children","className","style","showDivider"],lr=function(t){var a=t.children,u=t.className,i=t.style,v=t.showDivider,b=v===void 0?!0:v,j=se()(t,Pt),S=ir(),I=(0,X.getCommonConfig)(),C=I.sparkPrefix,M=I.antPrefix;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(S,{}),(0,O.jsx)(gt.Z,Z()(Z()({closeIcon:(0,O.jsx)(mt.Z,{size:24}),className:yn()("".concat(C,"-drawer"),u,ue()({},"".concat(M,"-show-divider"),b)),style:Z()({},i)},j),{},{children:a}))]})};Object.assign(lr,{Confirm:ht});var yt=lr,bt=n(6002),sr,cr=(0,jn.Z)(sr||(sr=cn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Ct=["showDivider","closable"],ur=function(){var t=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,u=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(u,"px"),function(){document.body.style.overflow=t,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,u)}},Un=function(t){var a=cr(),u=(0,X.getCommonConfig)(),i=u.sparkPrefix,v=t.showDivider,b=v===void 0?!0:v,j=t.closable,S=j===void 0?!0:j,I=se()(t,Ct);(0,gn.useEffect)(function(){if(t.open){var an=ur();return an}},[t.open]);var C=function(tn){return t.info?(0,O.jsxs)("div",{className:"".concat(i,"-modal-footer-wrapper"),children:[(0,O.jsx)("span",{className:"".concat(i,"-modal-footer-info"),children:t.info}),(0,O.jsx)("div",{className:"".concat(i,"-modal-footer-origin-node"),children:tn})]}):tn},M=S?t.closeIcon||(0,O.jsx)(bt.Z,{className:"".concat(i,"-modal-title-close"),onClick:function(tn){var ln;(ln=t.onCancel)===null||ln===void 0||ln.call(t,tn)}}):null,G=t.footer===void 0?C:t.footer;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(a,{}),(0,O.jsx)(_n.Z,Z()(Z()({},I),{},{centered:!1,closeIcon:null,width:t.width||"auto",title:(0,O.jsxs)("div",{className:"".concat(i,"-modal-title-wrapper"),children:[(0,O.jsx)("div",{className:yn()("".concat(i,"-modal-title"),ue()({},"".concat(i,"-modal-title-padding"),S)),children:t.title}),M]}),wrapClassName:yn()("".concat(i,"-modal"),ue()({},"".concat(i,"-show-divider"),b),t.wrapClassName,"animate-in"),footer:G,transitionName:""}))]})};Un.useModal=_n.Z.useModal;var de=function(t){return function(a){var u=ur(),i=(0,X.getCommonConfig)(),v=i.sparkPrefix,b=a==null?void 0:a.afterClose,j=a==null?void 0:a.content;function S(){var C=cr();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(C,{}),j]})}var I=Z()(Z()({},a),{},{content:(0,O.jsx)(S,{}),width:a.width||"auto",centered:!1,transitionName:"",wrapClassName:yn()("".concat(v,"-modal"),a.wrapClassName,"animate-in"),afterClose:function(){u();for(var M=arguments.length,G=new Array(M),an=0;an<M;an++)G[an]=arguments[an];b==null||b.apply(void 0,G)}});return t(I)}};Un.success=de(_n.Z.success),Un.error=de(_n.Z.error),Un.warning=de(_n.Z.warning),Un.info=de(_n.Z.info),Un.confirm=de(_n.Z.confirm),Un.SMALL_WIDTH=640,Un.MEDIUM_WIDTH=800,Un.LARGE_WIDTH=960;var jt=Un,St=n(86822);function dr(){return Oe.apply(this,arguments)}function Oe(){return Oe=qn()(Zn()().mark(function e(){var t,a=arguments;return Zn()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=a.length>0&&a[0]!==void 0?a[0]:100,i.abrupt("return",new Promise(function(v){setTimeout(v,t)}));case 2:case"end":return i.stop()}},e)})),Oe.apply(this,arguments)}var Et=n(65482),fr=n(8209),Nt=["product","action","url","version","region","headers"],Tt=function(){var e=qn()(Zn()().mark(function a(u,i,v){var b,j,S,I,C,M,G,an,tn,ln,Pn,U,J,En,Bn;return Zn()().wrap(function(Fn){for(;;)switch(Fn.prev=Fn.next){case 0:return j=u.product,S=u.action,I=u.url,C=u.version,M=u.region,G=u.headers,an=G===void 0?{}:G,tn=se()(u,Nt),ln="".concat(I||"/data/api.json","?action=").concat(S,"&product=").concat(j),C&&(ln+="&version=".concat(C)),Pn={sec_token:((b=window.ALIYUN_CONSOLE_CONFIG)===null||b===void 0?void 0:b.SEC_TOKEN)||"",region:M},i&&(Pn.params=JSON.stringify(i)),v&&Object.assign(Pn,v),U=Z()({method:"post",credentials:"same-origin",headers:Z()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},an)},tn),J=Object.assign({},U),J.body=(0,fr.stringify)(Pn),Fn.next=11,fetch(ln,J);case 11:return En=Fn.sent,Fn.next=14,En.json();case 14:if(Bn=Fn.sent,!(Bn.code!=="200"&&!Bn.successResponse)){Fn.next=17;break}return Fn.abrupt("return",Promise.reject(Bn));case 17:return Fn.abrupt("return",Bn);case 18:case"end":return Fn.stop()}},a)}));function t(a,u,i){return e.apply(this,arguments)}return t}(),vr=Tt;function Dt(e,t){return Le.apply(this,arguments)}function Le(){return Le=qn()(Zn()().mark(function e(t,a){var u,i,v;return Zn()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:i=t==null||(u=t.getReader)===null||u===void 0?void 0:u.call(t),i||(console.log("[sse]error: Can Not Find Reader Object"),console.log("[sse]StreamInfo: ",t));case 2:return j.next=4,i.read();case 4:if((v=j.sent).done){j.next=8;break}try{a(v.value)}catch(S){console.log("[sse-error][onmessage] pleach check `onmessage` or `onJsonText`.",S)}j.next=2;break;case 8:case"end":return j.stop()}},e)})),Le.apply(this,arguments)}function Mt(e){var t,a,u,i=!1;return function(b){t===void 0?(t=b,a=0,u=-1):t=kt(t,b);for(var j=t.length,S=0;a<j;){i&&(t[a]===10&&(S=++a),i=!1);for(var I=-1;a<j&&I===-1;++a)switch(t[a]){case 58:u===-1&&(u=a-S);break;case 13:i=!0;case 10:I=a;break}if(I===-1)break;e(t.subarray(S,I),u),S=a,u=-1}S===j?t=void 0:S!==0&&(t=t.subarray(S),a-=S)}}function Bt(e,t,a){var u=mr(),i=new TextDecoder;return function(b,j){if(b.length===0)a==null||a(u),u=mr();else if(j>0){var S=i.decode(b.subarray(0,j)),I=j+(b[j+1]===32?2:1),C=i.decode(b.subarray(I));switch(S){case"data":u.data=u.data?"".concat(u.data,`
`).concat(C):C;break;case"event":u.event=C;break;case"id":e(u.id=C);break;case"retry":var M=parseInt(C,10);isNaN(M)||t(u.retry=M);break}}}}function kt(e,t){var a=new Uint8Array(e.length+t.length);return a.set(e),a.set(t,e.length),a}function mr(){return{data:"",event:"",id:"",retry:void 0}}var Ft=["signal","headers","onopen","onmessage","onclose","onerror","fetch","autoRetryTime","timeout","debug"],Ie="text/event-stream",Zt=1e3,gr="last-event-id";function xr(e,t){return Ae.apply(this,arguments)}function Ae(){return Ae=qn()(Zn()().mark(function e(t,a){var u,i,v,b,j,S,I,C,M,G,an,tn,ln;return Zn()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return u=a.signal,i=a.headers,v=a.onopen,b=a.onmessage,j=a.onclose,S=a.onerror,I=a.fetch,C=a.autoRetryTime,M=a.timeout,G=a.debug,an=G===void 0?!1:G,tn=se()(a,Ft),ln=0,U.abrupt("return",new Promise(function(J,En){var Bn=Z()({},i);Bn.accept||(Bn.accept=Ie);var Qn=Zt,Fn=0,zn=0,ne=new AbortController;function An(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(an&&console.log("[sse] dispose"),window.clearTimeout(Fn),window.clearTimeout(zn),!re){var Rn,Wn;(Rn=ne)===null||Rn===void 0||(Wn=Rn.abort)===null||Wn===void 0||Wn.call(Rn)}}function ae(){window.clearTimeout(zn),M!==0&&(zn=window.setTimeout(function(){an&&console.log("[sse] timeout"),En(new Error("timeout")),S==null||S(new Error("timeout")),An()},M||60*1e3))}u==null||u.addEventListener("abort",function(){An(),J()});var Kn=I!=null?I:window.fetch,oe=v!=null?v:Ot;function Vn(){return Gn.apply(this,arguments)}function Gn(){return Gn=qn()(Zn()().mark(function re(){var Rn,Wn,$n,Jn;return Zn()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.prev=0,ae(),$.next=4,Kn(t,Z()(Z()({},tn),{},{headers:Bn,signal:(Rn=ne)===null||Rn===void 0?void 0:Rn.signal}));case 4:return Wn=$.sent,$.next=7,oe(Wn);case 7:if(Wn.body){$.next=11;break}return an&&console.log("[sse]no body, delay 100ms"),$.next=11,dr(100);case 11:return an&&console.log("[sse]response.body",Wn.body),$.next=14,Dt(Wn.body,Mt(Bt(function(q){q?Bn[gr]=q:delete Bn[gr]},function(q){Qn=q},function(q){ae(),b==null||b(q)})));case 14:ne=null,j==null||j(),An(),J(),$.next=43;break;case 20:if($.prev=20,$.t0=$.catch(0),$.t0&&console.error("[sse]err",$.t0),!(!(u!=null&&u.aborted)&&C&&ln<C)){$.next=39;break}return $.prev=24,ln+=1,Jn=($n=S==null?void 0:S($.t0))!==null&&$n!==void 0?$n:Qn,window.clearTimeout(Fn),typeof Jn=="number"&&(an&&console.log("[sse] retry "+ln),Fn=window.setTimeout(Vn,Jn)),$.abrupt("return",Promise.resolve());case 32:$.prev=32,$.t1=$.catch(24),an&&console.log("[sse] reject innerErr ",$.t1),An(),En($.t1);case 37:$.next=43;break;case 39:an&&console.log("[sse] reject finally"),An($.t0 instanceof Response||$.t0 instanceof DOMException&&$.t0.name==="AbortError"),S==null||S($.t0),En($.t0);case 43:case"end":return $.stop()}},re,null,[[0,20],[24,32]])})),Gn.apply(this,arguments)}Vn()}));case 3:case"end":return U.stop()}},e)})),Ae.apply(this,arguments)}function Ot(e){var t=e.headers.get("content-type");if(!(t!=null&&t.startsWith(Ie)))throw new Error("Expected content-type to be ".concat(Ie,", Actual: ").concat(t))}function Lt(e){return Re.apply(this,arguments)}function Re(){return Re=qn()(Zn()().mark(function e(t){var a,u,i,v,b,j,S;return Zn()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return a=t.action,u=t.body,i=t.product,v=t.version,b=t.region,j=t.params,S={action:a,product:i,region:b,url:"/tool/sse/get.json",version:v},C.abrupt("return",vr(S,j,{content:JSON.stringify(u)}));case 3:case"end":return C.stop()}},e)})),Re.apply(this,arguments)}function It(e,t,a,u){var i=t.onMessage,v=t.onClose,b=t.onError,j=t.timeout,S=e.body,I=e.uri,C=e.headers,M=e.query,G=e.path,an=C["Content-Type"],tn="".concat(I.replace(/\/$/,"")).concat(G);M&&Object.keys(M).length&&(tn="".concat(tn,"?").concat((0,fr.stringify)(M)));try{u.value=!1,xr(tn,{method:"POST",body:an==="application/x-www-form-urlencoded"?new URLSearchParams(JSON.parse(S)):S,signal:a.signal,timeout:j,headers:C,onopen:function(Pn){return Pn.status!==200?Promise.reject(Pn):Promise.resolve()},onmessage:function(Pn){try{var U=Pn.data,J=U===void 0?"{}":U,En=JSON.parse(J);i==null||i(En)}catch(Bn){b==null||b(Bn)}},onclose:function(){u.value=!0,v==null||v()},onerror:function(Pn){u.value=!0,v==null||v(),!(Pn instanceof DOMException&&Pn.name==="AbortError")&&(b==null||b(Pn))}})}catch(ln){u.value=!0,b==null||b(ln),v==null||v()}}function At(e,t,a){return We.apply(this,arguments)}function We(){return We=qn()(Zn()().mark(function e(t,a,u){var i,v,b,j;return Zn()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return i=t.onClose,v=t.onError,I.prev=1,I.next=4,Lt(t);case 4:b=I.sent,j=b.data,It(j,t,a,u),I.next=13;break;case 9:I.prev=9,I.t0=I.catch(1),i==null||i(),v==null||v(I.t0);case 13:case"end":return I.stop()}},e,null,[[1,9]])})),We.apply(this,arguments)}function Rt(e){return we.apply(this,arguments)}function we(){return we=qn()(Zn()().mark(function e(t){var a,u;return Zn()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return a=new AbortController,u={value:!0},v.next=4,At(t,a,u);case 4:return v.abrupt("return",{dispose:function(){u.value&&a.abort("\u53D6\u6D88\u8BF7\u6C42")}});case 5:case"end":return v.stop()}},e)})),we.apply(this,arguments)}var pr=n(95336);function hr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.timeout,u=a===void 0?5e3:a,i=t.intervalTime,v=i===void 0?100:i,b=Date.now();return new Promise(function(j,S){var I=setInterval(function(){var C=e();C?(clearInterval(I),j(C)):Date.now()-b>u&&(S("timeout"),clearInterval(I))},v)})}function Wt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return hr(function(){return document.querySelector(e)},t)}var wt=n(43758);function Ht(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof e!="string")return a||console.warn(e,"is not valid json"),t?e:null;try{return JSON.parse(e)}catch(u){return a||console.warn(e,"is not valid json"),t?e:null}}function zt(e){for(var t=new TextEncoder,a=t.encode(e),u="",i=0;i<a.length;i++)u+=String.fromCharCode(a[i]);var v=btoa(u);return v}function $t(e){for(var t=atob(e),a=new Uint8Array(t.length),u=0;u<t.length;u++)a[u]=t.charCodeAt(u);var i=new TextDecoder("utf-8"),v=i.decode(a);return v}var Pr=(0,p.Z)(l),yr=(0,p.Z)(y,!0),Ut=(0,p.Z)(F),Qt=(0,p.Z)(K,!0)},95336:function(xn,Q,n){n.d(Q,{JG:function(){return A},rb:function(){return N}});var y=n(26068),l=n.n(y),K=n(67825),F=n.n(K),H=n(75271),E=["maxWidth","maxHeight"];function k(){var B;return((B=window.g_config)===null||B===void 0?void 0:B.isIntl)||!1}var A=function(f){if(navigator.clipboard)navigator.clipboard.writeText(f);else{var p=document.createElement("textarea");document.body.appendChild(p),p.style.position="fixed",p.style.clip="rect(0 0 0 0)",p.style.top="10px",p.value=f,p.select(),document.execCommand("copy",!0),document.body.removeChild(p)}},N=function(f){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=p.maxWidth,P=p.maxHeight,d=F()(p,E);return l()({overlayInnerStyle:{maxWidth:o||326,maxHeight:P||150,overflowY:"auto",padding:"6px 12px"},title:f,arrow:!1},d)};function w(B){return React.isValidElement(B)}function R(B){var f=B||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(f)}var x=function(f){return f>=10?f:"0".concat(f)},m=function(f){if(f<60){var p=Math.ceil(f);return"0:".concat(x(p))}var o=Math.floor(f/60),P=Math.ceil(f%60);return"".concat(x(o),":").concat(x(P))}}}]);
