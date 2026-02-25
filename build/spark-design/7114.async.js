"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7114],{21245:function(vn,K,n){n.d(K,{Z:function(){return x}});var y=n(26068),l=n.n(y),V=n(23655),F=n(75271),z=n(53649),E=n.n(z),B=n(30764),R,N=(0,B.Z)(R||(R=E()([`

.`,"-anchor-wrapper .","-anchor .",`-anchor-link-title {
  color: var(--`,`-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.`,`-anchor-link {
  --`,`-anchor-link-padding-block: 0;
  --`,`-anchor-link-padding-inline-start: 0;
}
`])),function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix}),w=n(52676),A=(0,F.forwardRef)(function(m){var M=N();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(M,{}),(0,w.jsx)(V.Z,l()({},m))]})}),x=A},8639:function(vn,K,n){n.d(K,{Z:function(){return s}});var y=n(26068),l=n.n(y),V=n(48305),F=n.n(V),z=n(67825),E=n.n(z),B=n(75271),R=n(82187),N=n.n(R),w=n(74659),A=n(32547),x=n(60213),m=n(53649),M=n.n(m),d=n(30764),h,o=(0,d.Z)(h||(h=M()([`
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
`])),function(g){return g.sparkPrefix},function(g){return g.sparkPrefix},function(g){return g.sparkPrefix}),p=n(52676),v=["controls","className","style"],r=(0,B.forwardRef)(function(g,L){var c=g.controls,D=g.className,P=g.style,Z=E()(g,v),en=(0,x.getCommonConfig)(),J=en.sparkPrefix,U=o(),H=(0,B.useState)(0),G=F()(H,2),Y=G[0],cn=G[1],gn=(0,B.useState)(0),sn=F()(gn,2),Sn=sn[0],on=sn[1],k=(0,B.useState)(!1),xn=F()(k,2),dn=xn[0],_=xn[1],ln=(0,A.Z)(g,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!1}),un=F()(ln,2),bn=un[0],pn=un[1],Pn=(0,B.useRef)(null),mn=(0,B.useRef)(!0),yn=function(Dn){Pn.current=Dn,L&&(typeof L=="function"?L(Dn):L.current=Dn)};(0,B.useEffect)(function(){if(mn.current){mn.current=!1;return}Pn.current&&Z.src&&Pn.current.load()},[Z.src]),(0,B.useEffect)(function(){var Tn;return dn&&(Tn=setInterval(function(){Pn.current&&cn(Pn.current.currentTime)},16)),function(){Tn&&clearInterval(Tn)}},[dn]);var Fn=function(Dn){var Cn;Pn.current&&on(Pn.current.duration),(Cn=Z.onLoadedMetadata)===null||Cn===void 0||Cn.call(Z,Dn)},En=function(){Pn.current&&(dn?Pn.current.pause():Pn.current.play(),_(!dn))},I=function(Dn){var Cn;_(!0),(Cn=Z.onPlay)===null||Cn===void 0||Cn.call(Z,Dn)},An=function(Dn){var Cn;_(!1),(Cn=Z.onPause)===null||Cn===void 0||Cn.call(Z,Dn)},Rn=function(Dn){var Cn,jn;_(!1),cn(((Cn=Pn.current)===null||Cn===void 0?void 0:Cn.duration)||0),(jn=Z.onEnded)===null||jn===void 0||jn.call(Z,Dn)},wn=function(Dn){Pn.current&&(Pn.current.currentTime=Dn,cn(Dn))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(U,{}),(0,p.jsxs)("div",{className:N()("".concat(J,"-audio-container"),D),style:P,children:[(0,p.jsx)("audio",l()(l()({ref:yn},Z),{},{muted:bn,className:"".concat(J,"-audio-element"),onLoadedMetadata:Fn,onPlay:I,onPause:An,onEnded:Rn})),(0,p.jsx)(w.Z,{className:"".concat(J,"-audio-controller-wrapper"),isPlaying:dn,currentTime:Y,duration:Sn,enableVolume:!0,enableFullscreen:!1,muted:bn,onMute:function(){return pn(!bn)},onPlayPause:En,onProgressClick:wn})]})]})}),s=r},93178:function(vn,K,n){n.d(K,{Z:function(){return o}});var y=n(26068),l=n.n(y),V=n(48305),F=n.n(V),z=n(67825),E=n.n(z),B=n(67487),R=n(75271),N=n(53649),w=n.n(N),A=n(30764),x,m=(0,A.Z)(x||(x=w()([`
.`,`-avatar {
  cursor: default;
}
`])),function(p){return p.antPrefix}),M=n(52676),d=["children"],h=(0,R.forwardRef)(function(p,v){var r=m(),s=p.children,g=E()(p,d),L=(0,R.useState)(p.children),c=F()(L,2),D=c[0],P=c[1];return(0,R.useEffect)(function(){if(typeof s=="string"){P(Array.from(s)[0]);return}if(typeof s=="number"){P(Array.from(String(s))[0]);return}P(s)},[s]),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(r,{}),(0,M.jsx)(B.Z,l()(l()({ref:v},g),{},{children:D}))]})}),o=h},40:function(vn,K,n){n.d(K,{Z:function(){return v}});var y=n(26068),l=n.n(y),V=n(67825),F=n.n(V),z=n(3999),E=n(67487),B=n(44201),R=n(11691),N=n(75271),w=n(60213),A=n(53649),x=n.n(A),m=n(30764),M,d=(0,m.Z)(M||(M=x()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix}),h=n(52676),o=["items"],p=function(s){var g=s.items,L=g===void 0?[]:g,c=F()(s,o),D=(0,w.getCommonConfig)(),P=D.sparkPrefix,Z=d(),en=N.useMemo(function(){return L.map(function(J){var U=J.title,H=[];return J.iconUrl&&H.push((0,h.jsx)(E.Z,{size:20,src:J.iconUrl},"avatar")),J.dropdown?H.push((0,h.jsxs)("span",{className:"".concat(P,"-breadcrumb-dropdown-title"),children:[J.title,(0,h.jsx)(z.Z,{size:16})]},"title")):H.push((0,h.jsx)("span",{children:J.title},"title")),J.dropdown?U=(0,h.jsx)(B.Z,{menu:{items:J.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(P,"-breadcrumb-dropdown"),children:(0,h.jsx)("span",{children:H})}):(J.iconUrl||H.length>1)&&(U=(0,h.jsx)("span",{className:"".concat(P,"-breadcrumb-item-content"),children:H})),l()(l()({},J),{},{title:U})})},[L]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Z,{}),(0,h.jsx)(R.Z,l()(l()({},c),{},{items:en,className:"".concat(P,"-breadcrumb ").concat(c.className||"")}))]})},v=p},61902:function(vn,K,n){n.d(K,{Z:function(){return h}});var y=n(26068),l=n.n(y),V=n(67825),F=n.n(V),z=n(60213),E=n(85770),B=n(82187),R=n.n(B),N=n(53649),w=n.n(N),A=n(30764),x,m=(0,A.Z)(x||(x=w()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix}),M=n(52676),d=["title","info","children","className"],h=function(o){var p=o.title,v=o.info,r=o.children,s=o.className,g=F()(o,d),L=m(),c=(0,z.getCommonConfig)(),D=c.sparkPrefix;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(L,{}),(0,M.jsx)(E.Z,l()(l()({className:R()("".concat(D,"-card"),s)},g),{},{title:null,children:(0,M.jsxs)("div",{className:"".concat(D,"-card-wrapper"),children:[p&&(0,M.jsx)("div",{className:"".concat(D,"-title"),children:p}),v&&(0,M.jsx)("div",{className:"".concat(D,"-info"),children:v}),r&&(0,M.jsx)("div",{className:"".concat(D,"-content"),children:r})]})}))]})}},98618:function(vn,K,n){n.d(K,{Z:function(){return h}});var y=n(26068),l=n.n(y),V=n(67825),F=n.n(V),z=n(10758),E=n(75271),B=n(60213),R=n(53649),N=n.n(R),w=n(30764),A,x=(0,w.Z)(A||(A=N()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),m=n(52676),M=["description","descriptionClassName","descriptionStyle","children"],d=function(p){var v=p.description,r=p.descriptionClassName,s=p.descriptionStyle,g=p.children,L=F()(p,M),c=(0,B.getCommonConfig)(),D=c.antPrefix,P=c.sparkPrefix,Z=x(),en={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(D,"-color-text-tertiary)")};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z,{}),(0,m.jsxs)("div",{className:"".concat(P,"-checkbox"),children:[(0,m.jsx)(z.Z,l()(l()({},L),{},{children:g})),v&&(0,m.jsx)("div",{className:r,style:l()(l()({},en),s),children:v})]})]})};d.Group=z.Z.Group;var h=d},49570:function(vn,K,n){n.d(K,{ZP:function(){return Sn},xO:function(){return Y}});var y=n(26068),l=n.n(y),V=n(15558),F=n.n(V),z=n(60213),E=n(43758),B=n(5012),R=n(2607),N=n(91237),w=n(44573),A=n(12652),x=n(23201),m=n(18932),M=n(37441),d=n(99362),h=n(68147),o=n(70300),p=n(24365),v=n(33792),r=n(86112),s=n(18893),g=n(72771),L=n(82187),c=n.n(L),D=n(28640),P=n(75271),Z=n(53649),en=n.n(Z),J=n(30764),U,H=(0,J.Z)(U||(U=en()([`
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
`])),function(on){return on.sparkPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix},function(on){return on.antPrefix}),G=n(52676),Y={javascript:[(0,m.eJ)()],jsx:[(0,m.eJ)()],python:[(0,o.Vs)()],json:[(0,M.AV)()],java:[(0,x.C)()],yaml:[(0,p.rV)()],php:[(0,h.h)()],go:[(0,w.go)()],csharp:[(0,R.N)()],css:[(0,N.iv)()],html:[(0,A.dy)()],curl:[],markdown:[(0,d.JH)()]},cn={javascript:[(0,v.Q2)()],json:[(0,v.Q2)(),(0,v.ir)((0,M.ap)())]},gn=function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"{}",xn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,dn=k;try{dn=JSON.stringify(JSON.parse(k),null,xn)}catch(_){}return dn},sn=function(k){var xn,dn=(0,z.getCommonConfig)(),_=P.useContext(E.ZP.ConfigContext),ln=((xn=_.theme)===null||xn===void 0?void 0:xn.algorithm)===g.Z.darkAlgorithm,un=dn.sparkPrefix,bn=H(),pn=(0,P.useMemo)(function(){return k.theme===void 0?ln?r.Pc:r.Zp:k.theme==="dark"?r.Pc:r.Zp},[ln,k.theme]),Pn=(k.extensions||[]).concat(typeof k.language=="string"?[].concat(F()(Y[k.language]||[]),F()(k.value&&k.language in cn?cn[k.language]:[])):k.language.reduce(function(Fn,En){return[].concat(F()(Fn),[Y[En]])},[])),mn=(0,G.jsx)("div",{className:c()("".concat(un,"-code-block"),k.className),children:(0,G.jsx)(s.ZP,l()({extensions:Pn,value:k.language==="json"?gn(k.value||""):k.value||"",theme:pn},(0,D.Z)(k,["language","theme","extensions","value"])))});if(k.theme!==void 0){var yn=k.theme==="dark"?B.bailianDarkTheme:B.bailianTheme;return(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)(E.ZP,l()(l()({},yn),{},{children:[(0,G.jsx)(bn,{}),mn]}))})}return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(bn,{}),mn]})},Sn=sn},94684:function(vn,K,n){n.d(K,{Z:function(){return A}});var y=n(26068),l=n.n(y),V=n(24198),F=n(53649),z=n.n(F),E=n(30764),B,R=(0,E.Z)(B||(B=z()([`
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
`])),function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix}),N=n(52676),w=function(m){var M=R();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(M,{}),(0,N.jsx)(V.Z,l()({},m))]})},A=w},61406:function(vn,K,n){n.d(K,{Z:function(){return r}});var y=n(26068),l=n.n(y),V=n(82092),F=n.n(V),z=n(48305),E=n.n(z),B=n(60213),R=n(3999),N=n(16879),w=n(82187),A=n.n(w),x=n(75271),m=n(53649),M=n.n(m),d=n(30764),h,o=(0,d.Z)(h||(h=M()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix}),p=n(52676),v=function(g){var L,c,D,P,Z,en,J=g.collapsedHeight,U=g.expandedHeight,H=g.title,G=H===void 0?"":H,Y=g.expandOnPanelClick,cn=g.extra,gn=g.children,sn=g.defaultExpanded,Sn=(0,x.useState)(sn),on=E()(Sn,2),k=on[0],xn=on[1],dn=(0,x.useState)(!0),_=E()(dn,2),ln=_[0],un=_[1],bn=(0,x.useState)(J),pn=E()(bn,2),Pn=pn[0],mn=pn[1],yn=(0,x.useRef)(null),Fn=(0,B.getCommonConfig)(),En=Fn.sparkPrefix,I=Fn.antPrefix,An=o();(0,x.useEffect)(function(){yn.current&&mn(k&&U?U:k?yn.current.scrollHeight:J)},[k,J,U,gn]);var Rn=function(jn){jn.stopPropagation(),jn.preventDefault(),xn(function(Mn){return!Mn})},wn=function(jn){jn.stopPropagation(),jn.preventDefault(),k||xn(!0)},Tn=function(){un(!0)},Dn=function(){un(!0)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(An,{}),(0,p.jsxs)("div",{className:A()("".concat(En,"-collapse-panel"),{collapsible:!k&&Y},(L=g.classNames)===null||L===void 0?void 0:L.wrapper),style:(c=g.styles)===null||c===void 0?void 0:c.wrapper,onClick:Y?wn:void 0,onMouseEnter:Y?Tn:void 0,onMouseLeave:Y?Dn:void 0,children:[(0,p.jsxs)("div",{className:A()("".concat(En,"-collapse-panel-header"),(D=g.classNames)===null||D===void 0?void 0:D.header),style:(P=g.styles)===null||P===void 0?void 0:P.header,onClick:Rn,children:[(0,p.jsxs)("span",{className:"".concat(En,"-collapse-panel-title"),children:[G,(0,p.jsxs)("div",{className:"".concat(En,"-collapse-panel-icon-wrapper"),children:[!k&&ln&&Y&&(0,p.jsx)(R.Z,{style:{fontSize:"18px"}}),k&&ln&&Y&&(0,p.jsx)(N.Z,{style:{fontSize:"18px"}})]})]}),cn&&(0,p.jsx)("div",{className:"".concat(En,"-collapse-panel-extra"),onClick:function(jn){jn.stopPropagation(),jn.preventDefault()},children:cn})]}),(0,p.jsxs)("div",{className:A()("".concat(En,"-collapse-panel-content"),F()({},"".concat(En,"-collapse-panel-expanded"),k),(Z=g.classNames)===null||Z===void 0?void 0:Z.content),style:l()({height:Pn},(en=g.styles)===null||en===void 0?void 0:en.content),children:[(0,p.jsx)("div",{ref:yn,className:"".concat("".concat(En,"-collapse-panel-contentWrapper")," ",k&&U?"scrollable":""),children:gn}),!k&&(0,p.jsx)("div",{className:"".concat(En,"-collapse-panel-mask")})]})]})]})},r=v},84360:function(vn,K,n){n.d(K,{Z:function(){return L}});var y=n(26068),l=n.n(y),V=n(67825),F=n.n(V),z=n(60213),E=n(57216),B=n(72771),R=n(86137),N=n(87133),w=n(82187),A=n.n(w),x=n(75271),m=n(53649),M=n.n(m),d=n(30764),h,o=(0,d.Z)(h||(h=M()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),p=n(52676),v=["className","popupClassName"],r=["className","popupClassName"],s=function(D){var P=D.className,Z=D.popupClassName,en=F()(D,v),J=B.Z.useToken(),U=J.token,H=(0,z.getCommonConfig)(),G=H.sparkPrefix,Y=o();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Y,{}),(0,p.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:U.colorPrimary,paddingInline:8}}},children:(0,p.jsx)(N.default,l()({suffixIcon:(0,p.jsx)(E.Z,{style:{fontSize:"20px"}}),className:A()("".concat(G,"-picker"),P),popupClassName:A()("".concat(G,"-picker-dropdown"),Z)},en))})]})},g=function(D){var P=D.className,Z=D.popupClassName,en=F()(D,r),J=B.Z.useToken(),U=J.token,H=(0,z.getCommonConfig)(),G=H.sparkPrefix,Y=o();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Y,{}),(0,p.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:U.colorPrimary,paddingInline:8}}},children:(0,p.jsx)(N.default.RangePicker,l()({suffixIcon:(0,p.jsx)(E.Z,{style:{fontSize:"20px"}}),className:A()("".concat(G,"-picker"),P),popupClassName:A()("".concat(G,"-picker-dropdown"),Z),popupStyle:{padding:0}},en))})]})};s.RangePicker=g;var L=s},62518:function(vn,K,n){n.d(K,{Z:function(){return r}});var y=n(82092),l=n.n(y),V=n(26068),F=n.n(V),z=n(67825),E=n.n(z),B=n(60213),R=n(72771),N=n(3307),w=n(82187),A=n.n(w),x=n(53649),m=n.n(x),M=n(30764),d,h=(0,M.Z)(d||(d=m()([`
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
`])),function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),o=n(52676),p=["className","layout","colon","style"],v=function(g){var L,c,D=h(),P=g.className,Z=g.layout,en=g.colon,J=en===void 0?!1:en,U=g.style,H=E()(g,p),G=(0,B.getCommonConfig)(),Y=G.antPrefix,cn=R.Z.useToken(),gn=cn.token;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsx)(N.Z,F()({className:A()(P,Z==="vertical"&&"".concat(Y,"-descriptions-vertical")),layout:Z,colon:J,style:F()(l()(l()({},"--".concat(Y,"-descriptions-vertical-label-padding-bottom"),"".concat((L=gn.Descriptions.verticalLabelPaddingBottom)!==null&&L!==void 0?L:4,"px")),"--".concat(Y,"-descriptions-vertical-content-padding-bottom"),"".concat((c=gn.Descriptions.verticalContentPaddingBottom)!==null&&c!==void 0?c:24,"px")),U)},H))]})},r=v},38356:function(vn,K,n){n.d(K,{Z:function(){return M}});var y=n(26068),l=n.n(y),V=n(60213),F=n(68278),z=n(44201),E=n(75271),B=n(53649),R=n.n(B),N=n(30764),w,A=(0,N.Z)(w||(w=R()([`
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
`])),function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),x=n(52676),m=function(h){var o,p,v=(0,V.getCommonConfig)(),r=v.antPrefix,s=(0,E.useMemo)(function(){var L;if(!((L=h.menu)!==null&&L!==void 0&&L.selectable)||!h.menu){var c;return((c=h.menu)===null||c===void 0?void 0:c.items)||[]}return h.menu.items.map(function(D){var P={},Z=D.label;return Z&&(P.label=(0,x.jsxs)("div",{className:"".concat(r,"-dropdown-check-wrapper"),children:[Z,(0,x.jsx)("span",{className:"".concat(r,"-dropdown-check-icon"),children:(0,x.jsx)(F.Z,{})})]})),l()(l()({},D),P)})},[(o=h.menu)===null||o===void 0?void 0:o.items,(p=h.menu)===null||p===void 0?void 0:p.selectable]),g=A();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{}),(0,x.jsx)(z.Z,l()(l()({},h),{},{menu:l()(l()({},h.menu),{},{items:s}),overlayStyle:l()({},h.overlayStyle)}))]})},M=m},49327:function(vn,K,n){n.d(K,{Z:function(){return J}});var y=n(26068),l=n.n(y),V=n(60213),F=n(90264),z=n(75271),E=n(60823),B=n(53649),R=n.n(B),N=n(30764),w,A=(0,N.Z)(w||(w=R()([`
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
`])),function(U){return U.sparkPrefix},function(U){return U.sparkPrefix},function(U){return U.sparkPrefix},function(U){return U.sparkPrefix},function(U){return U.sparkPrefix},function(U){return U.sparkPrefix},function(U){return U.antPrefix},function(U){return U.sparkPrefix},function(U){return U.antPrefix}),x=n(90228),m=n.n(x),M=n(48305),d=n.n(M),h=n(87999),o=n.n(h),p=n(52676);function v(U){return U.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var r=new Map,s=new Map;function g(U){return L.apply(this,arguments)}function L(){return L=o()(m()().mark(function U(H){var G,Y,cn;return m()().wrap(function(sn){for(;;)switch(sn.prev=sn.next){case 0:if(G=r.get(H),G===void 0){sn.next=3;break}return sn.abrupt("return",G);case 3:if(Y=s.get(H),!Y){sn.next=6;break}return sn.abrupt("return",Y);case 6:return cn=o()(m()().mark(function Sn(){var on,k;return m()().wrap(function(dn){for(;;)switch(dn.prev=dn.next){case 0:return dn.next=2,fetch(H);case 2:if(on=dn.sent,on.ok){dn.next=5;break}throw new Error("HTTP ".concat(on.status));case 5:return dn.next=7,on.text();case 7:return k=dn.sent,r.set(H,k),dn.abrupt("return",k);case 10:case"end":return dn.stop()}},Sn)}))().finally(function(){s.delete(H)}),s.set(H,cn),sn.abrupt("return",cn);case 9:case"end":return sn.stop()}},U)})),L.apply(this,arguments)}function c(U,H){var G=U;return Object.keys(H).forEach(function(Y){G=G.replace(new RegExp(v(Y),"g"),H[Y])}),G}function D(U){var H=U.svgUrl,G=U.tokenMap,Y=G===void 0?{}:G,cn=U.className,gn=U.size,sn=H.includes(".svg"),Sn=(0,z.useState)(function(){return r.get(H)||""}),on=d()(Sn,2),k=on[0],xn=on[1],dn=(0,z.useRef)(!0);if((0,z.useEffect)(function(){return dn.current=!0,function(){dn.current=!1}},[]),(0,z.useEffect)(function(){if(sn){var ln=r.get(H);if(ln){xn(ln);return}g(H).then(function(un){dn.current&&xn(un)}).catch(function(un){console.warn("[SparkDesign][Empty][Illustrate] load svg failed:",H,un)})}},[H]),!sn)return(0,p.jsx)("img",{src:H,className:cn,style:{width:gn,height:gn}});if(!k)return null;var _=c(k,Y);return(0,p.jsx)("div",{className:cn,dangerouslySetInnerHTML:{__html:_},style:{width:gn,height:gn}})}var P={url:"https://gw.alicdn.com/imgextra/i3/O1CN01r3f3Si24iFTRz9Bho_!!6000000007424-55-tps-320-320.svg",tokenMap:{"#CDD0DC":"color-border"}},Z={noData:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01mWN5tE1MAxb2z7LwA_!!6000000001395-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#BCB5FF":"color-primary-border-hover","#FFFFFF":"color-bg-base","#615CED":"color-primary","#1ACDD0DC":"color-fill-quaternary","#CDD0DC":"color-border"}},networkError:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01su6GHG1RupL5K5TOQ_!!6000000002172-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},404:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01GE0jXZ1xpqjvMjCZh_!!6000000006493-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#26CDD0DC":"color-fill-tertiary","#CDD0DC":"color-border","#F3F0FF":"color-primary-bg","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},arrears:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01xN8uYv1Dz2MLvrFAF_!!6000000000286-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#F3F0FF":"color-primary-bg","#615CED":"color-primary"}},desktopOnly:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01ZzNku41rshVhRVh9x_!!6000000005687-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},noAudio:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01fTQ6vi1GXxnIrmizf_!!6000000000633-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#615CED":"color-primary","#E6E8EE":"color-border-secondary"}},noImage:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01zQAH9A1oJUD9XDtmi_!!6000000005204-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noVideo:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01kqss5i1JuoOrJ8fNV_!!6000000001089-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noAccess:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01RwpRz91oGHREFlmdY_!!6000000005197-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}},error:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01TlQR4c1L3nn4DkG2z_!!6000000001244-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noChat:{url:"https://img.alicdn.com/imgextra/i3/O1CN014KyRst1w9QT51V8Yx_!!6000000006265-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#615CED":"color-primary","#CDD0DC":"color-border"}},noModel:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01BSPmLi1iaXGByjbne_!!6000000004429-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#5CCDD0DC":"color-fill","#615CED":"color-primary"}},noApp:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01stSIP31fzmEtpppWc_!!6000000004078-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#33CDD0DC":"color-fill-secondary","#615CED":"color-primary"}},success:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01sGzZ5B1Bx5RQAjUe5_!!6000000000011-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#5BB98B":"color-success","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},failed:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01Fd1Gmx1QNYxQ8hj0H_!!6000000001964-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FF7875":"color-error-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},inProgress:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01w2RXic1LADKqVxH56_!!6000000001258-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#9189FA":"color-primary-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},stayTuned:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01W2Kbyc26dmqmatyoB_!!6000000007685-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}}},en=function(H){var G=H.imageStyle,Y=H.title,cn=H.description,gn=cn===void 0?"No Data":cn,sn=H.children,Sn=H.texture,on=Sn===void 0?!0:Sn,k=H.size,xn=k===void 0?320:k,dn=H.autoFit,_=dn===void 0?!0:dn,ln=H.okText,un=H.okType,bn=un===void 0?"primary":un,pn=H.okButtonProps,Pn=H.onOk,mn=H.type||"noData",yn=(0,V.getCommonConfig)(),Fn=yn.sparkPrefix,En=yn.isDarkMode,I=yn.antPrefix,An=H.image||Z[mn].url,Rn=(0,z.useMemo)(function(){var jn,Mn=l()({},(jn=Z[mn])===null||jn===void 0?void 0:jn.tokenMap);return Mn&&Object.keys(Mn).forEach(function(te){Mn[te]="var(--".concat(I,"-").concat(Mn[te],")")}),Mn},[mn]),wn=(0,z.useMemo)(function(){var jn=l()({},P.tokenMap);return Object.keys(jn).forEach(function(Mn){jn[Mn]="var(--".concat(I,"-").concat(jn[Mn],")")}),jn},[En]),Tn=A(),Dn=typeof xn=="string"?parseFloat(xn.replace(/px/i,"")):xn!=null?xn:0,Cn=_?{maxWidth:"100%",aspectRatio:"1 / 1",width:xn,height:"auto"}:{width:xn,height:xn};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Tn,{}),(0,p.jsxs)("div",{className:"".concat(Fn,"-empty ").concat(H.className||""),style:l()(l()({},Cn),G),children:[on&&(0,p.jsx)(D,{size:_?"100%":xn,svgUrl:P.url,tokenMap:wn,className:"".concat(Fn,"-empty-texture")}),(0,p.jsx)(D,{size:_?"100%":xn,svgUrl:An,tokenMap:Rn,className:"".concat(Fn,"-empty-image")}),(0,p.jsxs)(F.Z,{vertical:!0,align:"center",style:{marginTop:"52.5%"},children:[Y&&(0,p.jsx)("div",{className:"".concat(Fn,"-empty-title"),style:{marginBottom:gn?.025*Dn:0},children:Y}),gn&&(0,p.jsx)("div",{className:"".concat(Fn,"-empty-description"),children:gn}),!!ln&&(0,p.jsx)("div",{style:{marginTop:.05*Dn},children:(0,p.jsx)(E.Z,l()(l()({type:bn,onClick:Pn},pn),{},{children:ln}))}),!!sn&&(0,p.jsx)("div",{style:{marginTop:.05*Dn},children:sn})]})]})]})},J=en},90895:function(vn,K,n){n.d(K,{Z:function(){return P}});var y=n(31759),l=n.n(y),V=n(26068),F=n.n(V),z=n(67825),E=n.n(z),B=n(60213),R=n(62910),N=n(48290),w=n(85618),A=n(82187),x=n.n(A),m=n(75271),M=n(53649),d=n.n(M),h=n(30764),o,p=(0,h.Z)(o||(o=d()([`
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
`])),function(Z){return Z.sparkPrefix},function(Z){return Z.sparkPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.sparkPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix}),v=n(52676),r=["labelMarginRight"],s=["tooltip"],g=(0,m.forwardRef)(function(Z,en){var J=Z.labelMarginRight,U=J===void 0?void 0:J,H=E()(Z,r),G=(0,m.useRef)(null),Y=(0,B.getCommonConfig)(),cn=Y.sparkPrefix,gn=p();return(0,m.useImperativeHandle)(en,function(){return G.current}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(gn,{}),(0,v.jsx)(N.Z,F()(F()({},H),{},{className:x()(Z.className,"".concat(cn,"-form"),U==="small"&&"".concat(cn,"-form-label-margin-small")),ref:G,requiredMark:function(Sn,on){return(0,v.jsxs)(v.Fragment,{children:[Sn,on.required&&(0,v.jsx)("span",{className:"".concat(cn,"-required-mark"),children:"*"})]})}}))]})}),L=function(en){var J=en.tooltip,U=E()(en,s),H=(0,v.jsx)(R.Z,{});function G(){if(J){var Y=l()(J)==="object"&&!m.isValidElement(J)?F()(F()({},J),{},{icon:J.icon||H}):{title:J,icon:H};return Y}}return(0,v.jsx)(N.Z.Item,F()(F()({},U),{},{tooltip:G(),labelCol:en.labelCol||(en.layout==="vertical"?{flex:"unset"}:void 0)}))},c=L;c.useStatus=w.Z.useStatus;var D=g;D.Item=c,D.List=N.Z.List,D.ErrorList=N.Z.ErrorList,D.Provider=N.Z.Provider,D.useForm=N.Z.useForm,D.useFormInstance=N.Z.useFormInstance,D.useWatch=N.Z.useWatch;var P=D},70344:function(vn,K,n){n.d(K,{Z:function(){return h}});var y=n(26068),l=n.n(y),V=n(40965),F=n(60213),z=n(5045),E=n(92931),B=n(75271),R=n(53649),N=n.n(R),w=n(30764),A,x=(0,w.Z)(A||(A=N()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),m=n(52676),M=function(p){var v=x(),r=(0,F.getCommonConfig)(),s=r.antPrefix,g=(0,B.useMemo)(function(){var L={transitionName:""},c=p.preview;return c===!1?!1:c===!0?L:l()(l()({mask:(0,m.jsxs)("div",{className:"".concat(s,"-image-mask-info"),children:[(0,m.jsx)(z.Z,{className:"".concat(s,"-image-mask-info-icon")}),(0,m.jsx)("span",{className:"".concat(s,"-image-mask-info-text"),children:V.Z.get({id:"components.commonComponents.Image.Preview",dm:"\u9884\u89C8"})})]})},c),L)},[p.preview]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{}),(0,m.jsx)(E.Z,l()({preview:g},p))]})},d=M;d.PreviewGroup=E.Z.PreviewGroup;var h=d},38734:function(vn,K,n){n.d(K,{Z:function(){return s}});var y=n(26068),l=n.n(y),V=n(82092),F=n.n(V),z=n(67825),E=n.n(z),B=n(60213),R=n(92108),N=n(82187),w=n.n(N),A=n(75271),x=n(53649),m=n.n(x),M=n(30764),d,h=(0,M.Z)(d||(d=m()([`
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
`])),function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),o=n(52676),p=["shape"],v=A.forwardRef(function(g,L){var c=g.shape,D=c===void 0?"default":c,P=E()(g,p),Z=(0,B.getCommonConfig)(),en=Z.antPrefix,J=h();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(J,{}),(0,o.jsx)(R.Z,l()(l()({},P),{},{className:w()(g.className,F()({},"".concat(en,"-input-round"),D==="round")),ref:L}))]})}),r=A.forwardRef(function(g,L){var c=(0,B.getCommonConfig)(),D=c.antPrefix,P=h();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P,{}),(0,o.jsx)(R.Z.TextArea,l()(l()({},g),{},{className:w()("".concat(D,"-text-area"),g.className),ref:L}))]})});Object.assign(v,{TextArea:r,Search:R.Z.Search,Password:R.Z.Password,OTP:R.Z.OTP});var s=v},3983:function(vn,K,n){n.d(K,{Z:function(){return r}});var y=n(26068),l=n.n(y),V=n(82092),F=n.n(V),z=n(67825),E=n.n(z),B=n(60213),R=n(6002),N=n(91301),w=n(82187),A=n.n(w),x=n(53649),m=n.n(x),M=n(30764),d,h=(0,M.Z)(d||(d=m()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),o=n(52676),p=["showDivider","closable"],v=function(g){var L=h(),c=(0,B.getCommonConfig)(),D=c.sparkPrefix,P=g.showDivider,Z=P===void 0?!0:P,en=g.closable,J=en===void 0?!0:en,U=E()(g,p),H=function(gn){return g.info?(0,o.jsxs)("div",{className:"".concat(D,"-modal-footer-wrapper"),children:[(0,o.jsx)("span",{className:"".concat(D,"-modal-footer-info"),children:g.info}),(0,o.jsx)("div",{className:"".concat(D,"-modal-footer-origin-node"),children:gn})]}):gn},G=J?g.closeIcon||(0,o.jsx)(R.Z,{className:"".concat(D,"-modal-title-close"),onClick:function(gn){var sn;(sn=g.onCancel)===null||sn===void 0||sn.call(g,gn)}}):null,Y=g.footer===void 0?H:g.footer;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(L,{}),(0,o.jsx)(N.Z,l()(l()({},U),{},{closeIcon:null,title:(0,o.jsxs)("div",{className:"".concat(D,"-modal-title-wrapper"),children:[(0,o.jsx)("div",{className:"".concat(D,"-modal-title"),children:g.title}),G]}),wrapClassName:A()("".concat(D,"-modal"),F()({},"".concat(D,"-show-divider"),Z),g.wrapClassName,"animate-in"),footer:Y,transitionName:""}))]})};v.useModal=N.Z.useModal,v.success=N.Z.success,v.error=N.Z.error,v.warning=N.Z.warning,v.info=N.Z.info,v.confirm=N.Z.confirm,v.SMALL_WIDTH=640,v.MEDIUM_WIDTH=800,v.LARGE_WIDTH=960;var r=v},94361:function(vn,K,n){var y=n(48305),l=n.n(y),V=n(26068),F=n.n(V),z=n(60213),E=n(72566),B=n(68811),R=n(20855),N=n(18908),w=n(3749),A=n(52676),x=["success","warning","error","info"];function m(d,h){if(d==="success")return(0,A.jsx)(E.Z,{style:{color:"var(--".concat(h,"-color-success)"),fontSize:24}});if(d==="warning")return(0,A.jsx)(B.Z,{style:{color:"var(--".concat(h,"-color-warning)"),fontSize:24}});if(d==="info")return(0,A.jsx)(R.Z,{style:{color:"var(--".concat(h,"-color-info)"),fontSize:24}});if(d==="error")return(0,A.jsx)(N.Z,{style:{color:"var(--".concat(h,"-color-error)"),fontSize:24}})}var M={};M.destroy=w.ZP.destroy,M.open=function(d){var h=(0,z.getCommonConfig)(),o=h.sparkPrefix,p="".concat(o,"-notification");d.className&&(p+=" ".concat(d.className)),w.ZP.open(F()(F()({},d),{},{className:p}))},x.forEach(function(d){M[d]=function(h){var o=(0,z.getCommonConfig)(),p=o.sparkPrefix,v=o.antPrefix,r="".concat(p,"-notification");h.className&&(r+=" ".concat(h.className)),w.ZP[d](F()(F()({},h),{},{className:r,icon:m(d,v)}))}}),M.useNotification=function(d){var h=(0,z.getCommonConfig)(),o=h.sparkPrefix,p=h.antPrefix,v="".concat(o,"-notification"),r=w.ZP.useNotification(d),s=l()(r,2),g=s[0],L=s[1],c={};return x.forEach(function(D){c[D]=function(P){return g[D](F()(F()({},P),{},{className:v,icon:m(D,p)}))}}),c.open=function(D){w.ZP.open(F()(F()({},D),{},{className:v}))},c.destroy=g.destroy,[c,L]},K.Z=M},47525:function(vn,K,n){n.d(K,{X:function(){return z}});var y=n(53649),l=n.n(y),V=n(30764),F,z=(0,V.Z)(F||(F=l()([`
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
`])),function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix})},85525:function(vn,K,n){var y=n(26068),l=n.n(y),V=n(31759),F=n.n(V),z=n(67825),E=n.n(z),B=n(60213),R=n(40965),N=n(86319),w=n(16979),A=n(34232),x=n(90264),m=n(89550),M=n(82187),d=n.n(M),h=n(47525),o=n(52676),p=["hideSwitchButton","className"],v=[10,20,50,100],r=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:v,L=R.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"}),c=R.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"});return{options:g.map(function(D){return{label:"".concat(D," ").concat(L," / ").concat(c),value:Number(D)}})}};K.Z=function(s){var g=s.hideSwitchButton,L=g===void 0?!1:g,c=s.className,D=E()(s,p),P=(0,B.getCommonConfig)(),Z=P.sparkPrefix,en=(0,h.X)(),J=function(){var Y=function(gn,sn,Sn){return sn==="jump-prev"||sn==="jump-next"?(0,o.jsx)(N.Z,{className:"".concat(Z,"-jump-next-icon")}):L||s.itemRender?Sn:sn==="prev"?(0,o.jsx)("a",{children:(0,o.jsxs)(x.Z,{gap:8,children:[(0,o.jsx)(w.Z,{})," ",(0,o.jsx)("span",{children:R.Z.get({id:"components.commonComponents.Pagination.PreviousPage",dm:"\u4E0A\u4E00\u9875"})})]})}):sn==="next"?(0,o.jsx)("a",{children:(0,o.jsxs)(x.Z,{gap:8,children:[(0,o.jsx)("span",{children:R.Z.get({id:"components.commonComponents.Pagination.NextPage",dm:"\u4E0B\u4E00\u9875"})})," ",(0,o.jsx)(A.Z,{})]})}):Sn};return Y},U;D.showSizeChanger!==null&&D.showSizeChanger!==void 0?U=D.showSizeChanger:U=D.total&&D.total>50;var H=function(){return s.showSizeChanger===!1?!1:F()(s.showSizeChanger)==="object"&&s.showSizeChanger?s.showSizeChanger:s.showSizeChanger===!0||D.total&&D.total>50?r(D.pageSizeOptions):!1};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(en,{}),(0,o.jsx)(m.Z,l()(l()({itemRender:J()},D),{},{showSizeChanger:H(),className:d()("".concat(Z,"-pagination"),c)}))]})}},30959:function(vn,K,n){var y=n(26068),l=n.n(y),V=n(67825),F=n.n(V),z=n(60213),E=n(88602),B=n(62910),R=n(99090),N=n(58911),w=n(95371),A=n(75271),x=n(52676),m=["icon","type","okButtonProps"],M=A.forwardRef(function(d,h){var o=d.icon,p=d.type,v=p===void 0?"confirm":p,r=d.okButtonProps,s=F()(d,m),g=(0,z.getCommonConfig)(),L=g.antPrefix,c=function(){return o||(v==="confirm"?(0,x.jsx)(E.Z,{style:{color:"var(--".concat(L,"-color-warning)")}}):v==="info"?(0,x.jsx)(B.Z,{style:{color:"var(--".concat(L,"-color-info)")}}):v==="warning"?(0,x.jsx)(E.Z,{style:{color:"var(--".concat(L,"-color-warning)")}}):v==="error"?(0,x.jsx)(R.Z,{style:{color:"var(--".concat(L,"-color-error)")}}):v==="success"?(0,x.jsx)(N.Z,{style:{color:"var(--".concat(L,"-color-success)")}}):(0,x.jsx)(E.Z,{style:{color:"var(--".concat(L,"-color-warning)")}}))},D=function(){var Z={};return["warning","error"].includes(v)&&(Z.danger=!0),l()(l()({},Z),r||{})};return(0,x.jsx)(w.Z,l()(l()({},s),{},{ref:h,icon:c(),okButtonProps:D()}))});K.Z=M},86298:function(vn,K,n){var y=n(26068),l=n.n(y),V=n(60213),F=n(65482),z=n(4369),E=n(75271),B=n(52676),R=E.forwardRef(function(N,w){var A=N.content===""||N.content===void 0||N.content===null,x=N.title===""||N.title===void 0||N.title===null,m=N.open!==void 0&&N.open!==null?N.open:A&&x?!1:void 0,M=(0,V.getCommonConfig)(),d=M.antPrefix;return(0,B.jsx)(z.Z,l()(l()({},N),{},{arrow:N.arrow||!1,open:m,ref:w,getPopupContainer:N.getPopupContainer||function(h){return(0,F.Q)(h,".".concat(d,"-app"))}}))});K.Z=R},40517:function(vn,K,n){n.d(K,{Z:function(){return dn},x:function(){return on}});var y=n(26068),l=n.n(y),V=n(82092),F=n.n(V),z=n(15558),E=n.n(z),B=n(48305),R=n.n(B),N=n(67825),w=n.n(N),A=n(24884),x=n(99362),m=n(86112),M=n(18893),d=n(86137),h=n(72771),o=n(82187),p=n.n(o),v=n(75271),r=n(53649),s=n.n(r),g=n(87571),L,c,D=(0,g.kc)(function(_){var ln=_.css,un=_.token;return{onCreate:ln(L||(L=s()([`
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
  `])),un.colorBorderSecondary,un.colorBgContainer),cm:ln(c||(c=s()([`
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
  `])),un.colorTextSecondary,un.colorBlue,un.colorPurple,un.colorPurpleBg,un.colorBgContainer,un.colorText,un.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:un.colorBgBase,border:"1px solid ".concat(un.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:un.colorTextTertiary,backgroundColor:un.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),P=n(25298),Z=n.n(P),en=n(17069),J=n.n(en),U=n(25451),H=new U.Y1({regexp:/\$\{([\w\u4e00-\u9fa5]+)\}/g,decoration:function(){return U.p.mark({class:"cm-prompt-var"})}}),G=U.lg.fromClass(function(){function _(ln){Z()(this,_),F()(this,"placeholders",void 0),this.placeholders=H.createDeco(ln)}return J()(_,[{key:"update",value:function(un){this.placeholders=H.updateDeco(un,this.placeholders)}}]),_}(),{decorations:function(ln){return ln.placeholders}}),Y=[G],cn=n(96594);function gn(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],ln=arguments.length>1?arguments[1]:void 0,un=ln.onCreate,bn=ln.createBtnText;return(0,cn.ys)({override:[function(pn){var Pn,mn=pn.matchBefore(/\/(\w+)?/);return!mn||mn&&mn.from===mn.to&&!pn.explicit?null:{from:(Pn=mn==null?void 0:mn.from)!==null&&Pn!==void 0?Pn:0,options:(un?[].concat(E()(_),[{label:"/NEW_VAR",boost:-99}]):_).map(function(yn){return l()(l()({},yn),{},{displayLabel:yn.label==="/NEW_VAR"?bn:yn.label.slice(1),apply:function(En,I,An,Rn){if(I.label==="/NEW_VAR")return En.dispatch({changes:{from:An,to:Rn,insert:""}}),un==null?void 0:un();var wn=I.label.slice(1),Tn="${".concat(wn,"}");En.dispatch({changes:{from:An,to:Rn,insert:Tn}})}})})}}]})}var sn=n(52676),Sn=["maxLength","variables","onCreate","createBtnText","tipsText","extensions","className","value","onChange","readOnly","basicSetup"],on={markdown:[(0,x.JH)()]},k=[],xn=function(ln){var un,bn=ln.maxLength,pn=ln.variables,Pn=pn===void 0?k:pn,mn=ln.onCreate,yn=ln.createBtnText,Fn=yn===void 0?"+ \u65B0\u589E\u53D8\u91CF":yn,En=ln.tipsText,I=ln.extensions,An=ln.className,Rn=ln.value,wn=ln.onChange,Tn=ln.readOnly,Dn=ln.basicSetup,Cn=w()(ln,Sn),jn=D(),Mn=jn.styles,te=(0,v.useState)(!1),de=R()(te,2),Ce=de[0],fe=de[1],je=v.useContext(d.ZP.ConfigContext),ve=((un=je.theme)===null||un===void 0?void 0:un.algorithm)===h.Z.darkAlgorithm,me=(0,v.useMemo)(function(){return ve?m.Pc:m.Zp},[ve]),Se=(0,v.useMemo)(function(){return I||[].concat(E()(on.markdown),E()(Y),[gn(E()(Pn).map(function(ge){return{label:"/".concat(ge.code),info:ge.label}})||[],{onCreate:mn,createBtnText:Fn})])},[Pn,I,mn,Fn]);(0,v.useEffect)(function(){return fe(!0),function(){fe(!1)}},[]);var Ee=v.useMemo(function(){return En===!1?(0,sn.jsx)("div",{className:Mn.tips}):En||(0,sn.jsxs)("div",{className:Mn.tips,children:['\u8F93\u5165/"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,sn.jsx)(A.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[En,Mn.tips]);return Ce?(0,sn.jsxs)("div",{className:Mn.root,children:[(0,sn.jsx)(M.ZP,l()({className:p()(An,Mn.cm,F()({},Mn.onCreate,mn)),extensions:Se,value:Rn,theme:me,lang:"markdown",onChange:wn,basicSetup:l()({lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1},Dn),readOnly:Tn,editable:!Tn},Cn),me),(0,sn.jsxs)("div",{className:Mn.footer,children:[Ee,bn?(0,sn.jsxs)("div",{children:[(Rn==null?void 0:Rn.length)||0,"/",bn]}):null]})]}):null},dn=(0,v.memo)(xn)},81483:function(vn,K,n){var y=n(26068),l=n.n(y),V=n(67825),F=n.n(V),z=n(49327),E=n(52676),B=["texture"];K.Z=function(R){var N=R.texture,w=N===void 0?!1:N,A=F()(R,B);return(0,E.jsx)(z.Z,l()(l()({},A),{},{texture:w}))}},77652:function(vn,K,n){n.d(K,{J:function(){return L},Z:function(){return D}});var y=n(26068),l=n.n(y),V=n(82092),F=n.n(V),z=n(60213),E=n(7441),B=n(82187),R=n.n(B),N=n(75271),w=n(53649),A=n.n(w),x=n(30764),m,M=(0,x.Z)(m||(m=A()([`
.`,"-slider.","-slider.",`-slider-no-marks {
  margin: 0;
}
`])),function(P){return P.antPrefix},function(P){return P.sparkPrefix},function(P){return P.sparkPrefix}),d=n(67825),h=n.n(d),o=n(32496),p,v=(0,x.Z)(p||(p=A()([`
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
`])),function(P){return P.sparkPrefix},function(P){return P.sparkPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix}),r=n(52676),s=["styles","classNames","sliderProps","inputNumberProps"];function g(P){var Z,en,J=(0,z.getCommonConfig)(),U=J.sparkPrefix;console.log("debug sparkPrefix in SliderSelector",U);var H=P.styles,G=P.classNames,Y=P.sliderProps,cn=P.inputNumberProps,gn=h()(P,s),sn=v(),Sn=P.marks||((Z=P.sliderProps)===null||Z===void 0?void 0:Z.marks)||null,on=Sn||F()(F()({},P.min,P.min),P.max,P.max),k=Sn&&((en=Object.keys(Sn))===null||en===void 0?void 0:en.length)>0,xn=function(_){var ln=typeof _=="string"?parseFloat(_):_;if(ln===null||isNaN(ln)){P.onChange(null);return}ln<P.min?P.onChange(P.min):ln>P.max?P.onChange(P.max):P.onChange(ln)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(sn,{}),(0,r.jsxs)("div",{style:H==null?void 0:H.wrapper,className:R()("".concat(U,"-slider-input"),F()({},"".concat(U,"-slider-input-has-marks"),k),G==null?void 0:G.wrapper),onMouseUp:function(){var _;(_=P.onBlur)===null||_===void 0||_.call(P)},children:[(0,r.jsx)(L,l()(l()(l()({disabled:P.disabled,min:P.min,max:P.max,step:P.step,tooltip:{getPopupContainer:function(_){return _}}},gn),Y),{},{marks:on,style:l()(l()(l()({},H==null?void 0:H.slider),Y==null?void 0:Y.style),{},{width:"100%"}),className:R()(G==null?void 0:G.slider,Y==null?void 0:Y.className),onChange:xn,value:P.value===null?void 0:P.value})),(0,r.jsx)(o.Z,l()(l()({controls:!1,step:P.step,min:P.min,max:P.max,disabled:P.disabled},cn),{},{onBlur:function(){var _;(_=P.onBlur)===null||_===void 0||_.call(P)},value:P.value,onChange:xn,style:l()(l()({},H==null?void 0:H.inputNumber),cn==null?void 0:cn.style),className:R()(G==null?void 0:G.inputNumber,cn==null?void 0:cn.className)}))]})]})}var L=N.forwardRef(function(P,Z){var en=(0,z.getCommonConfig)(),J=en.sparkPrefix,U=en.antPrefix,H=M();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(H,{}),(0,r.jsx)(E.Z,l()(l()({},P),{},{className:R()("".concat(J,"-slider"),F()(F()({},"".concat(J,"-slider-no-marks"),!Object.keys(P.marks||{}).length),"".concat(U,"-slider-reverse"),P.reverse),P.className),ref:Z}))]})}),c=L;Object.assign(c,{Input:g});var D=c},70076:function(vn,K,n){n.d(K,{Z:function(){return M}});var y=n(82092),l=n.n(y),V=n(60213),F=n(72771),z=n(22576),E=n(82187),B=n.n(E),R=n(53649),N=n.n(R),w=n(30764),A,x=(0,w.Z)(A||(A=N()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix}),m=n(52676),M=function(d){var h=d.indicator,o=d.spinning,p=o===void 0?!0:o,v=d.children,r=d.style,s=d.className,g=(0,V.getCommonConfig)(),L=g.sparkPrefix,c=F.Z.useToken(),D=x(),P=(0,m.jsxs)("svg",{className:"".concat(L,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,m.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,m.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,m.jsx)("g",{children:(0,m.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:c.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,m.jsx)("g",{children:(0,m.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:c.token.colorPrimary,fillOpacity:"1"})})]})]}),Z=d.tip||d.showProgress&&(0,m.jsxs)("div",{children:[(0,m.jsxs)("span",{children:["loading",d.percent!==void 0&&d.percent!==null&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:d.percent}),"%"]})]}),(0,m.jsx)(z.Z,{percent:d.percent,showInfo:!1})]})||null;return v?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(D,{}),(0,m.jsxs)("div",{className:B()("".concat(L,"-spinner-overlay"),s),style:r,children:[(0,m.jsx)("div",{className:B()("".concat(L,"-spinner-content"),l()({},"".concat(L,"-spinning"),p)),children:v}),p&&(0,m.jsxs)("div",{className:"".concat(L,"-spinner"),children:[(0,m.jsx)("div",{className:"".concat(L,"-indicator"),children:h||P}),(0,m.jsx)("div",{className:"".concat(L,"-title"),children:Z})]})]})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(D,{}),(0,m.jsx)("div",{className:B()("".concat(L,"-spinner"),s),style:r,children:p&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"".concat(L,"-indicator"),children:h||P}),(0,m.jsx)("div",{className:"".concat(L,"-title"),children:Z})]})})]})}},75229:function(vn,K,n){n.d(K,{Z:function(){return A}});var y=n(26068),l=n.n(y),V=n(468),F=n(53649),z=n.n(F),E=n(30764),B,R=(0,E.Z)(B||(B=z()([`
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
`])),function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix}),N=n(52676),w=function(m){var M=R();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(M,{}),(0,N.jsx)(V.Z,l()({},m))]})},A=w},52849:function(vn,K,n){n.d(K,{Z:function(){return h}});var y=n(26068),l=n.n(y),V=n(60213),F=n(68278),z=n(98852),E=n(82187),B=n.n(E),R=n(75271),N=n(53649),w=n.n(N),A=n(30764),x,m=(0,A.Z)(x||(x=w()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix}),M=n(52676),d=function(p){var v=(0,V.getCommonConfig)(),r=v.sparkPrefix,s=m(),g=(0,R.useMemo)(function(){if(p.items)return p.items.map(function(L,c){var D=L.status;return!D&&p.current!==void 0&&(c<p.current?D="finish":c===p.current?D="process":D="wait"),D==="finish"?l()(l()({},L),{},{icon:(0,M.jsx)(F.Z,{className:"".concat(r,"-finish-icon")})}):L})},[p.items,p.current]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(s,{}),(0,M.jsx)(z.Z,l()(l()({},p),{},{items:g,className:B()("".concat(r,"-steps"),p.className)}))]})},h=d},90118:function(vn,K,n){n.d(K,{Z:function(){return d}});var y=n(26068),l=n.n(y),V=n(67825),F=n.n(V),z=n(90264),E=n(10616),B=n(60213),R=n(53649),N=n.n(R),w=n(30764),A,x=(0,w.Z)(A||(A=N()([`
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
`])),function(h){return h.sparkPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.sparkPrefix}),m=n(52676),M=["label","className"],d=function(h){var o=x(),p=h.label,v=h.className,r=F()(h,M),s=(0,B.getCommonConfig)(),g=s.sparkPrefix;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{}),(0,m.jsxs)(z.Z,{align:"center",gap:8,className:v,children:[(0,m.jsx)(E.Z,l()(l()({},r),{},{className:"".concat(g,"-switch")})),p&&(0,m.jsx)("span",{className:"".concat(g,"-switch-label"),children:p})]})]})}},18762:function(vn,K,n){n.d(K,{Z:function(){return p}});var y=n(26068),l=n.n(y),V=n(67825),F=n.n(V),z=n(60213),E=n(2004),B=n(63267),R=n(82187),N=n.n(R),w=n(47525),A=n(53649),x=n.n(A),m=n(30764),M,d=(0,m.Z)(M||(M=x()([`
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
`])),function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix}),h=n(52676),o=["columns"];function p(v){var r,s=(0,z.getCommonConfig)(),g=s.sparkPrefix,L=v.columns,c=F()(v,o);L=(r=L)===null||r===void 0?void 0:r.map(function(Z){return l()(l()({},Z),{},{sortIcon:Z.sortIcon||function(){return(0,h.jsx)(E.Z,{style:{fontSize:16,marginLeft:8}})}})});var D=d(),P=(0,w.X)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(D,{}),(0,h.jsx)(P,{}),(0,h.jsx)(B.Z,l()({className:N()("".concat(g,"-table")),columns:L},c))]})}},96295:function(vn,K,n){n.d(K,{Z:function(){return v}});var y=n(26068),l=n.n(y),V=n(67825),F=n.n(V),z=n(60213),E=n(40753),B=n(82187),R=n.n(B),N=n(75271),w=n(53649),A=n.n(w),x=n(30764),m,M=(0,x.Z)(m||(m=A()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),d=n(52676),h=["children","className","bordered","color","size"],o=function(r){return r.Purple="purple",r.Pink="pink",r.Yellow="yellow",r.Teal="teal",r.Blue="blue",r.Mauve="mauve",r.Transparent="transparent",r.Success="success",r.Error="error",r.Warning="warning",r.Info="info",r}(o||{}),p=(0,N.forwardRef)(function(r,s){var g=r.children,L=r.className,c=r.bordered,D=c===void 0?!1:c,P=r.color,Z=P===void 0?"mauve":P,en=r.size,J=en===void 0?"middle":en,U=F()(r,h),H=M(),G=(0,z.getCommonConfig)(),Y=G.sparkPrefix,cn=Object.values(o).includes(Z);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(H,{}),(0,d.jsx)(E.Z,l()(l()({className:R()("".concat(Y,"-tag ").concat(Y,"-tag-").concat(Z," ").concat(Y,"-tag-").concat(J),L),bordered:D,color:cn?void 0:Z},U),{},{ref:s,children:g}))]})}),v=p},2567:function(vn,K,n){n.d(K,{Z:function(){return L}});var y=n(26068),l=n.n(y),V=n(67825),F=n.n(V),z=n(60213),E=n(41246),B=n(72771),R=n(86137),N=n(34374),w=n(82187),A=n.n(w),x=n(75271),m=n(53649),M=n.n(m),d=n(30764),h,o=(0,d.Z)(h||(h=M()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),p=n(52676),v=["className","popupClassName"],r=["className","popupClassName"],s=function(D){var P=D.className,Z=D.popupClassName,en=F()(D,v),J=B.Z.useToken(),U=J.token,H=(0,z.getCommonConfig)(),G=H.sparkPrefix,Y=o();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Y,{}),(0,p.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:U.colorPrimary}}},children:(0,p.jsx)(N.Z,l()({suffixIcon:(0,p.jsx)(E.Z,{}),className:A()("".concat(G,"-picker"),P),popupClassName:A()("".concat(G,"-picker-dropdown"),Z)},en))})]})},g=function(D){var P=D.className,Z=D.popupClassName,en=F()(D,r),J=B.Z.useToken(),U=J.token,H=(0,z.getCommonConfig)(),G=H.sparkPrefix,Y=o();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Y,{}),(0,p.jsx)(R.ZP,{theme:{components:{DatePicker:{activeBorderColor:U.colorPrimary}}},children:(0,p.jsx)(N.Z.RangePicker,l()({suffixIcon:(0,p.jsx)(E.Z,{}),className:A()("".concat(G,"-picker"),P),popupClassName:A()("".concat(G,"-picker-dropdown"),Z),popupStyle:{padding:0}},en))})]})};s.RangePicker=g;var L=s},95726:function(vn,K,n){n.d(K,{Z:function(){return v}});var y=n(26068),l=n.n(y),V=n(67825),F=n.n(V),z=n(60213),E=n(84240),B=n(82187),R=n.n(B),N=n(53649),w=n.n(N),A=n(30764),x,m=(0,A.Z)(x||(x=w()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),M=n(52676),d=["className"],h=["className"],o=function(s){var g=s.className,L=F()(s,d),c=(0,z.getCommonConfig)(),D=c.sparkPrefix,P=m();return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(P,{}),(0,M.jsx)(E.Z,l()({className:R()("".concat(D,"-upload"),g)},L))]})},p=function(s){var g=s.className,L=F()(s,h),c=(0,z.getCommonConfig)(),D=c.sparkPrefix,P=m();return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(P,{}),(0,M.jsx)(E.Z.Dragger,l()({className:R()("".concat(D,"-upload"),g)},L))]})};o.Dragger=p,o.LIST_IGNORE=E.Z.LIST_IGNORE;var v=o},86822:function(vn,K,n){n.d(K,{Z:function(){return z}});var y=n(26068),l=n.n(y),V=n(75271),F=new Map;function z(E){var B=E.globalStyle,R=E.name;(0,V.useLayoutEffect)(function(){var N=F.get(B)||0;if(N)F.set(B,l()(l()({},N),{},{count:N.count+1}));else{var w=document.createElement("style"),A=Math.random().toString(36).slice(2);w.innerHTML=B,w.dataset.id=A,w.dataset.flag="bailian-ui-use-style",R&&w.setAttribute("name",R),document.head.appendChild(w),F.set(B,{count:1,id:A})}return function(){var x=F.get(B);F.set(B,l()(l()({},x),{},{count:x.count-1})),setTimeout(function(){var m=F.get(B);if((m==null?void 0:m.count)<=0){var M;F.delete(B),(M=document.head.querySelector('[data-id="'+m.id+'"]'))===null||M===void 0||M.remove()}},100)}},[B])}},5012:function(vn,K,n){n.r(K),n.d(K,{Alert:function(){return o.Z},AlertDialog:function(){return D.default},Anchor:function(){return P.Z},Audio:function(){return Kr.Z},Avatar:function(){return Z.Z},Badge:function(){return p.Z},Breadcrumb:function(){return en.Z},Button:function(){return J.Z},Card:function(){return U.Z},Checkbox:function(){return H.Z},CodeBlock:function(){return G.ZP},CodeBlockLangExtensionsMap:function(){return G.xO},Collapse:function(){return Y.Z},CollapsePanel:function(){return cn.Z},ConfigProvider:function(){return wt.ZP},DatePicker:function(){return gn.Z},Descriptions:function(){return Vr.Z},Drawer:function(){return sn.Z},Dropdown:function(){return Sn.Z},EllipsisTip:function(){return An},Empty:function(){return Rn.Z},FileCard:function(){return qe.s},FileIcon:function(){return qe.Z},FloatButton:function(){return v.Z},Form:function(){return wn.Z},HelpIcon:function(){return de},IconButton:function(){return Dn.Z},IconFont:function(){return Ce.Z},Image:function(){return fe.Z},Input:function(){return je.Z},InputNumber:function(){return r.Z},MdEditor:function(){return De.Z},MdEditorLangExtensionsMap:function(){return De.x},MediaPreview:function(){return Gr.Z},MobileAlertDialog:function(){return vt},MobileDrawer:function(){return yt},MobileModal:function(){return jt},Modal:function(){return me.Z},Pagination:function(){return Ee.Z},Popconfirm:function(){return ge.Z},Popover:function(){return br.Z},Progress:function(){return s.Z},PromptsEditor:function(){return De.Z},Radio:function(){return g.ZP},RadioButton:function(){return Cr.default},Result:function(){return jr.Z},Select:function(){return L.default},Skeleton:function(){return c.Z},SlateEditor:function(){return Ur},Slider:function(){return Xe.Z},SliderSelector:function(){return Xr},Spinner:function(){return Qr.Z},Statistic:function(){return qr.Z},Steps:function(){return Sr.Z},Switch:function(){return _r.Z},Table:function(){return nt.Z},Tabs:function(){return et.Z},Tag:function(){return rt.Z},TimePicker:function(){return tt.Z},Tooltip:function(){return jn.Z},Upload:function(){return at.Z},Video:function(){return ot.Z},bailianDarkTheme:function(){return yr},bailianTheme:function(){return Pr},base64Decoder:function(){return $t},base64Encoder:function(){return zt},carbonDarkTheme:function(){return Qt},carbonTheme:function(){return Ut},copy:function(){return pr.JG},delay:function(){return dr},generateTheme:function(){return d},generateThemeByToken:function(){return h.Z},getCommonConfig:function(){return _.getCommonConfig},message:function(){return ve.Z},notification:function(){return Se.Z},parseJsonSafely:function(){return Ht},purpleDarkTheme:function(){return yr},purpleTheme:function(){return Pr},renderTooltip:function(){return pr.rb},requestPop:function(){return vr},requestPopSse:function(){return At},requestSse:function(){return xr},safeHtml:function(){return Et.t},setCommonConfig:function(){return _.setCommonConfig},useCommonConfig:function(){return _.useCommonConfig},useGlobalStyle:function(){return St.Z},waitForDom:function(){return Wt},waitForFunc:function(){return hr}});var y=n(23577),l=n(19888),V=n(44719),F=n(57249),z=function(t){var a=t.r/255,u=t.g/255,i=t.b/255,f=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),b=u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4),j=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4);return .2126*f+.7152*b+.0722*j},E=function(t){var a=z(t);return a>.5},B=function(t){var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null},R=function(t,a,u){return"#"+((1<<24)+(t<<16)+(a<<8)+u).toString(16).slice(1).toUpperCase()},N=function(t,a,u){var i=t/255,f=a/255,b=u/255,j=Math.max(i,f,b),S=Math.min(i,f,b),O,C,T=(j+S)/2;if(j===S)O=C=0;else{var X=j-S;switch(C=T>.5?X/(2-j-S):X/(j+S),j){case i:O=((f-b)/X+(f<b?6:0))/6;break;case f:O=((b-i)/X+2)/6;break;case b:O=((i-f)/X+4)/6;break;default:O=0}}return{h:O*360,s:C*100,l:T*100}},w=function(t,a,u){var i=t/360,f=a/100,b=u/100,j,S,O;if(f===0)j=S=O=b;else{var C=function(rn,an,hn){var Q=hn;return Q<0&&(Q+=1),Q>1&&(Q-=1),Q<.16666666666666666?rn+(an-rn)*6*Q:Q<.5?an:Q<.6666666666666666?rn+(an-rn)*(.6666666666666666-Q)*6:rn},T=b<.5?b*(1+f):b+f-b*f,X=2*b-T;j=C(X,T,i+1/3),S=C(X,T,i),O=C(X,T,i-1/3)}return{r:Math.round(j*255),g:Math.round(S*255),b:Math.round(O*255)}},A=function(t,a){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=B(t);if(!i)return t;var f=N(i.r,i.g,i.b);f.l=Math.max(0,Math.min(100,f.l+a)),f.s=Math.max(0,Math.min(100,f.s+u));var b=w(f.h,f.s,f.l);return R(b.r,b.g,b.b)},x=function(t,a){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=B(t);if(!i)return t;var f=N(i.r,i.g,i.b);f.l=a,u!==null&&(f.s=u);var b=w(f.h,f.s,f.l);return R(b.r,b.g,b.b)},m=function(t,a){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=B(t);if(!i)return t;var f=N(i.r,i.g,i.b);f.l=a,f.s=Math.max(0,Math.min(100,f.s*u));var b=w(f.h,f.s,f.l);return R(b.r,b.g,b.b)},M=function(t){var a=t.primaryHex,u=t.darkMode,i=u===void 0?!1:u,f=t.bgBaseHex||(i?"#000000":"#ffffff"),b=t.textBaseHex||(i?"#E7E7ED":"#1a1a1a"),j=B(a);if(!j)return null;var S=N(j.r,j.g,j.b),O=B(f),C=B(b),T=O?N(O.r,O.g,O.b):{h:210,s:8,l:i?5:99},X=Math.max(8,Math.min(S.s,40)),tn=Math.max(12,Math.min(S.s*.6,35)),rn=i?x(a,Math.max(S.l-5,42),S.s*.95):a,an=B(rn),hn=an?N(an.r,an.g,an.b):S,Q={borderRadiusXS:l.borderRadiusXS,borderRadiusSM:l.borderRadiusSM,borderRadius:l.borderRadius,borderRadiusLG:l.borderRadiusLG,borderRadiusXL:l.borderRadiusXL,borderRadiusFull:l.borderRadiusFull,wireframe:l.wireframe,colorPrimary:i?x(a,Math.max(S.l-5,42),S.s*.95):a,colorPrimaryHover:i?x(a,Math.min(S.l+10,55),S.s*.95):A(a,S.l<50?10:-10,0),colorPrimaryActive:i?x(a,Math.max(S.l-10,35),S.s*.95):A(a,S.l<50?-10:-20,0),colorPrimaryBg:i?x(a,13,X*.6):x(a,96,X*.8),colorPrimaryBgHover:i?x(a,13,X*.6):x(a,94,X),colorPrimaryBorder:i?x(a,17,tn*.8):x(a,88,tn*.8),colorPrimaryBorderHover:i?x(a,22,tn):x(a,82,tn),colorPrimaryText:i?x(a,Math.max(S.l-5,42),S.s*.95):a,colorPrimaryTextHover:i?x(a,Math.min(S.l+10,55),S.s*.95):A(a,S.l<50?10:-10,0),colorPrimaryTextActive:i?x(a,Math.max(S.l-10,35),S.s*.95):A(a,S.l<50?-10:-20,0),colorTextOnPrimary:E(an)?"#000000":"#ffffff",colorTextBase:b,colorText:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.88)"),colorTextSecondary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.65)"),colorTextTertiary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.45)"),colorTextQuaternary:"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.25)"),colorTextWhite:"#fff",colorBgBase:f,colorBgContainer:i?m(f,Math.min(T.l+S.l*.08,12),1.2):m(f,Math.max(100-S.l*.05,96),.8),colorBgElevated:i?m(f,Math.min(T.l+3,8),1.2):f,colorBgLayout:f,colorBgSpotlight:i?"rgba(".concat(B(m(f,28,1.2)).r,", ").concat(B(m(f,28,1.2)).g,", ").concat(B(m(f,28,1.2)).b,", 0.85)"):"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.85)"),colorBgMask:i?"rgba(".concat(O.r,", ").concat(O.g,", ").concat(O.b,", 0.8)"):"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.45)"),colorBorder:i?"rgba(".concat(B(m(f,28,2)).r,", ").concat(B(m(f,28,2)).g,", ").concat(B(m(f,28,2)).b,", 0.8)"):m(f,81,2.5),colorBorderSecondary:i?"rgba(".concat(B(m(f,22,1.8)).r,", ").concat(B(m(f,22,1.8)).g,", ").concat(B(m(f,22,1.8)).b,", 0.8)"):m(f,88,2),colorFill:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.18)"):m(f,81,2.5)+"5c",colorFillSecondary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.12)"):m(f,81,2.5)+"33",colorFillTertiary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.08)"):m(f,81,2.5)+"26",colorFillQuaternary:i?"rgba(".concat(C.r,", ").concat(C.g,", ").concat(C.b,", 0.04)"):m(f,81,2.5)+"1a",colorFillDisable:i?m(b,55,.8):m(f,86,1.8),colorLink:i?x(a,Math.max(S.l-5,42),S.s*.95):a,colorInfo:i?y.colorInfo:l.colorInfo,colorInfoHover:i?y.colorInfoHover:l.colorInfoHover,colorInfoText:i?y.colorInfoText:l.colorInfoText,colorInfoBg:i?y.colorInfoBg:l.colorInfoBg,colorInfoBgHover:i?y.colorInfoBgHover:l.colorInfoBgHover,colorInfoBorder:i?y.colorInfoBorder:l.colorInfoBorder,colorInfoBorderHover:i?y.colorInfoBorderHover:l.colorInfoBorderHover,colorSuccess:i?y.colorSuccess:l.colorSuccess,colorSuccessHover:i?y.colorSuccessHover:l.colorSuccessHover,colorSuccessBg:i?y.colorSuccessBg:l.colorSuccessBg,colorSuccessBgHover:i?y.colorSuccessBgHover:l.colorSuccessBgHover,colorSuccessBorder:i?y.colorSuccessBorder:l.colorSuccessBorder,colorSuccessBorderHover:i?y.colorSuccessBorderHover:l.colorSuccessBorderHover,colorWarning:i?y.colorWarning:l.colorWarning,colorWarningHover:i?y.colorWarningHover:l.colorWarningHover,colorWarningBg:i?y.colorWarningBg:l.colorWarningBg,colorWarningBgHover:i?y.colorWarningBgHover:l.colorWarningBgHover,colorWarningBorder:i?y.colorWarningBorder:l.colorWarningBorder,colorWarningBorderHover:i?y.colorWarningBorderHover:l.colorWarningBorderHover,colorError:i?y.colorError:l.colorError,colorErrorHover:i?y.colorErrorHover:l.colorErrorHover,colorErrorBg:i?y.colorErrorBg:l.colorErrorBg,colorErrorBgHover:i?y.colorErrorBgHover:l.colorErrorBgHover,colorErrorBorder:i?y.colorErrorBorder:l.colorErrorBorder,colorErrorBorderHover:i?y.colorErrorBorderHover:l.colorErrorBorderHover,colorPurple:i?y.colorPurple:l.colorPurple,colorPurpleHover:i?y.colorPurpleHover:l.colorPurpleHover,colorPurpleBg:i?y.colorPurpleBg:l.colorPurpleBg,colorPink:i?y.colorPink:l.colorPink,colorPinkHover:i?y.colorPinkHover:l.colorPinkHover,colorPinkBg:i?y.colorPinkBg:l.colorPinkBg,colorYellow:i?y.colorYellow:l.colorYellow,colorYellowHover:i?y.colorYellowHover:l.colorYellowHover,colorYellowBg:i?y.colorYellowBg:l.colorYellowBg,colorOrange:i?y.colorOrange:l.colorOrange,colorOrangeHover:i?y.colorOrangeHover:l.colorOrangeHover,colorOrangeBg:i?y.colorOrangeBg:l.colorOrangeBg,colorTeal:i?y.colorTeal:l.colorTeal,colorTealHover:i?y.colorTealHover:l.colorTealHover,colorTealBg:i?y.colorTealBg:l.colorTealBg,colorBlue:i?y.colorBlue:l.colorBlue,colorBlueHover:i?y.colorBlueHover:l.colorBlueHover,colorBlueBg:i?y.colorBlueBg:l.colorBlueBg,colorMauve:i?y.colorMauve:l.colorMauve,colorMauveHover:i?y.colorMauveHover:l.colorMauveHover,colorMauveBg:i?y.colorMauveBg:l.colorMauveBg,colorSlate:i?y.colorSlate:l.colorSlate||"#1E293B",colorSlateHover:i?y.colorSlateHover:l.colorSlateHover||"#475569",colorSlateBg:i?y.colorSlateBg:l.colorSlateBg||"#E2E8F0",colorLavender:i?y.colorLavender:l.colorLavender||"#A77BFF",colorLavenderHover:i?y.colorLavenderHover:l.colorLavenderHover||"#BB99FF",colorLavenderBg:i?y.colorLavenderBg:l.colorLavenderBg||"rgba(226, 212, 255, 0.8)",boxShadow:i?y.boxShadow:l.boxShadow,boxShadowSecondary:i?y.boxShadowSecondary:l.boxShadowSecondary,boxShadowTertiary:i?y.boxShadowTertiary:l.boxShadowTertiary,boxShadowTertiaryLeft:i?y.boxShadowTertiaryLeft:l.boxShadowTertiaryLeft,boxShadowInput:i?y.boxShadowInput:l.boxShadowInput};return Q},d=M,h=n(18729),o=n(80017),p=n(49339),v=n(45365),r=n(32496),s=n(22576),g=n(6944),L=n(45908),c=n(86585),D=n(7481),P=n(21245),Z=n(93178),en=n(40),J=n(60823),U=n(61902),H=n(98618),G=n(49570),Y=n(94684),cn=n(61406),gn=n(84360),sn=n(19743),Sn=n(38356),on=n(26068),k=n.n(on),xn=n(31759),dn=n.n(xn),_=n(60213),ln=n(89462),un=n(82187),bn=n.n(un),pn=n(75271),Pn=n(53649),mn=n.n(Pn),yn=n(30764),Fn,En=(0,yn.Z)(Fn||(Fn=mn()([`
div.`,`-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`])),function(e){return e.sparkPrefix}),I=n(52676);function An(e){var t=e.className,a=t===void 0?"":t,u=e.style,i=u===void 0?{}:u,f=e.children,b=e.rows,j=b===void 0?1:b,S=e.tooltip,O=e.tooltipMaxHeight,C=O===void 0?"90vh":O,T=(0,_.getCommonConfig)(),X=T.sparkPrefix,tn=En();function rn(){var an={maxHeight:C,overflow:"auto"};if(dn()(S)==="object"){var hn=S,Q=hn.title,q=hn.styles;return{title:Q||f,styles:k()(k()({},q),{},{body:k()(k()({},an),q==null?void 0:q.body)})}}return{title:S||f,styles:{body:an}}}return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(tn,{}),(0,I.jsx)(ln.Z.Paragraph,{className:bn()("".concat(X,"-ellipsis-tip"),a),style:i,ellipsis:{rows:j,tooltip:rn()},children:f})]})}var Rn=n(49327),wn=n(90895),Tn=n(20855),Dn=n(94662),Cn=n(39862),jn=n(19546),Mn,te=(0,yn.Z)(Mn||(Mn=mn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix});function de(e){var t=(0,Cn.X)(),a=te(),u=e.style,i=e.content,f=e.className,b=e.popoverProps,j=(0,_.getCommonConfig)(),S=j.sparkPrefix;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(t,{}),(0,I.jsx)(a,{}),(0,I.jsx)(jn.Z,k()(k()({title:i,overlayInnerStyle:{maxWidth:376},trigger:"hover",style:u},b),{},{children:(0,I.jsx)(Dn.Z,{className:bn()("".concat(S,"-help-icon"),f),icon:(0,I.jsx)(Tn.Z,{}),shape:"circle",bordered:!1,size:"small"})}))]})}var Ce=n(48004),fe=n(70344),je=n(38734),ve=n(39971),me=n(3983),Se=n(94361),Ee=n(85525),ge=n(30959),br=n(86298),De=n(40517),Cr=n(8893),jr=n(81483),Sr=n(52849),Er=n(48305),Ne=n.n(Er),Jn=n(40965),ae=n(86212),W=n(75040),Te=n(28533),oe=n(20335),Qe,Dr=(0,yn.Z)(Qe||(Qe=mn()([`
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
`]))),Nr=n(15558),Ke=n.n(Nr),Tr=(0,pn.memo)(function(e){var t=e.attributes,a=e.children;return(0,I.jsx)("div",k()(k()({},t),{},{style:{marginTop:"8px"},children:a}))}),Ve,Mr=(0,yn.Z)(Ve||(Ve=mn()([`
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
`]))),Br=(0,pn.memo)(function(e){var t=e.attributes,a=e.renderVarLabel,u=Mr();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(u,{}),(0,I.jsxs)("span",k()(k()({},t),{},{children:[e.children,(0,I.jsx)("span",{className:"spark-editor-var-tag",children:a?a(e.element.code):e.element.label})]}))]})}),Kt=function(t){return Object.keys(t).map(function(a){return{label:t[a].label,desc:t[a].desc,value:a}})},Fr=[{code:"s",isParagraph:!0,out:[],inner:[],name:Jn.Z.get({id:"components.SlateEditor.utils.constant.Paragraph",dm:"\u6BB5\u843D"}),render:Tr,type:"double"},{code:"var",isParagraph:!1,out:["s"],inner:[],name:Jn.Z.get({id:"components.SlateEditor.utils.constant.Variable",dm:"\u53D8\u91CF"}),render:Br,isInline:!0,isVoid:!0,type:"single"}],Me=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},Vt=function(t){return t.replace(/&/g,"&amp;").replace(/{/g,"").replace(/}/g,"").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},kr=function(t){return t.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")},Be=function e(t,a){var u="",i=a||{},f=i.tagRules,b=f===void 0?{}:f;return t.forEach(function(j,S){if(W.W_.isElement(j)){var O=b[j.type];if(!O)u+=Me(j.text);else switch(O.code){case"image":u+="![".concat(j.fileName,"](").concat(j.src,")");break;case"pdf":u+="[".concat(j.fileName,"](").concat(j.src,")");break;case"s":u+="".concat(e(j.children,a)).concat(S<t.length-1?`
`:"");break;case"var":u+="${".concat(j.code,"}");default:break}}else u+=Me(j.text)}),u},Ge=function(t,a){if(t&&t.children.length){var u=Be(t.children,a);return u==="<s></s>"?"":kr(u)}return""},xe=function(t){if(!t)return"";var a="",u=Me(t).replace(/\$\{([^{}]+?)\}/g,function(i,f){return'<var code="'.concat(f,'" label="${').concat(f,'}" />')});return u.split(`
`).forEach(function(i){a+="<s>".concat(i,"</s>")}),"<speak>".concat(a,"</speak>")},Zr=function e(t){var a,u=[];return(t==null||(a=t.childNodes)===null||a===void 0?void 0:a.length)>0&&t.childNodes.forEach(function(i,f,b){var j=i.nodeType,S=i.nodeName;if(j===1){for(var O={},C=0;C<i.attributes.length;C++){var T=i.attributes[C],X=T.nodeName,tn=T.nodeValue;O[X]=tn}var rn=k()({type:S},O);i.childNodes.length>0?rn.children=e(i):rn.children=[{text:""}],u.push(rn),S!=="s"&&(f>0&&b[f-1].nodeType===1&&u.unshift({text:""}),f===b.length-1&&u.push({text:""}))}else j===3&&u.push({text:i.nodeValue||""})}),u},pe=function(t){if(t){var a=new DOMParser().parseFromString(t,"text/xml");return Zr(a)}},Or=function(t){if(!t||t.includes("</speak>"))return t;var a=t;return a.includes("<s>")||(a="<s>".concat(a,"</s>")),"<speak>".concat(a,"</speak>")},Je=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a={};return[].concat(Ke()(t),Ke()(Fr)).forEach(function(u){a[u.code]||(a[u.code]=u)}),a},Lr=n(90228),Zn=n.n(Lr),Ir=n(87999),Yn=n.n(Ir),Ye=function(t,a,u){if(!(!t||!a)){var i=t.selection,f=null;i&&(f=i.focus),u!=null&&u.at&&(f=u==null?void 0:u.at),f||(f={path:[0,0],offset:0});var b=f,j=b.path,S=b.offset,O=W.NB.get(t,W.y$.parent(j));if(!W.ML.isVoid(t,O)){var C=W.NB.string(W.NB.get(t,j)),T=C.substring(0,S-(u!=null&&u.deletePrefix?1:0)),X=C.substring(S,C.length);W.ML.withoutNormalizing(t,function(){t.apply({type:"insert_node",node:{text:X},path:j}),t.apply({type:"insert_node",node:a,path:j}),t.apply({type:"insert_node",node:{text:T},path:j});var tn=W.y$.next(W.y$.next(W.y$.next(j)));t.apply({type:"remove_node",path:tn,node:W.NB.get(t,tn)});var rn={path:W.y$.next(W.y$.next(j)),offset:0};t.apply({type:"set_selection",properties:null,newProperties:{anchor:rn,focus:rn}}),oe.F3.focus(t),t.onChange()})}}},Rr=function(){var e=Yn()(Zn()().mark(function t(a,u,i){var f,b,j,S,O,C,T,X,tn,rn,an,hn,Q,q,Nn,Bn,$n,kn,Wn,qn,On,ee,Un,re,Qn,Kn,ne,Ln,In,Hn,Vn,fn;return Zn()().wrap(function(nn){for(;;)switch(nn.prev=nn.next){case 0:if(!(!a||!u)){nn.next=2;break}return nn.abrupt("return");case 2:if(b=a.selection,j=i||{},S=j.tip,O=j.selection,C=O===void 0?b:O,T=i==null||(f=i.rules)===null||f===void 0?void 0:f[u.type],!(C&&!W.e6.isCollapsed(C))){nn.next=45;break}if(tn=W.NB.fragment(a,C),rn=he(tn),rn!==""){nn.next=10;break}return nn.abrupt("return");case 10:if(an=Pe(W.e6.edges(C)),hn=Ne()(an,2),Q=hn[0],q=hn[1],W.ML.isVoid(a,W.NB.get(a,W.y$.parent(Q.path)))&&(Q.path=W.y$.next(W.y$.parent(Q.path)),Q.offset=0),W.ML.isVoid(a,W.NB.get(a,W.y$.parent(q.path)))&&(q.path=W.y$.previous(W.y$.parent(q.path)),q.offset=W.NB.string(W.NB.get(a,q.path)).length),W.y$.hasPrevious(q.path)&&W.NB.get(a,W.y$.parent(Q.path))===W.NB.get(a,W.y$.previous(q.path))&&Q.offset===0&&q.offset===0&&(Nn=W.y$.previous(W.y$.parent(Q.path)),Bn=W.NB.get(a,Nn),Q.path=Nn,Q.offset=Bn.text.length),W.NB.parent(a,Q.path)!==W.NB.parent(a,q.path)){for($n=W.NB.get(a,Q.path),kn=he(W.NB.fragment(a,{anchor:{path:q.path,offset:0},focus:q}));W.xv.isText($n)&&$n.text===""&&rn===kn;)Q.path.splice(Q.path.length-1,1,1,0),$n=W.NB.get(a,Q.path);for(Wn=W.NB.get(a,q.path),qn=W.NB.string(W.NB.get(a,W.e6.edges(C)[0].path)),On=he(W.NB.fragment(a,{anchor:Q,focus:{path:Q.path,offset:qn.length}}));W.xv.isText(Wn)&&Wn.text===""&&rn===On;)ee=q.path[q.path.length-1],q.path.splice(q.path.length-1,1,ee-1),Wn=W.NB.get(a,q.path),W.W_.isElement(Wn)&&(q.path.push(Wn.children.length-1),q.offset=qn.length)}if(W.NB.parent(a,Q.path)===W.NB.parent(a,q.path)){nn.next=18;break}return ae.ZP.info(Jn.Z.get({id:"components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect",dm:"\u5212\u9009\u8303\u56F4\u6709\u8BEF"})),nn.abrupt("return");case 18:Un=W.y$.parent(Q.path),re=(T==null?void 0:T.name)||Fe(),Qn=W.NB.get(a,Un),Kn=i==null||(X=i.rules)===null||X===void 0?void 0:X[Qn.type];case 22:if(!(T!=null&&T.out&&Un.length>1)){nn.next=30;break}if(T.out.includes(Qn.type)){nn.next=27;break}return ne=(Kn==null?void 0:Kn.name)||Fe(),ae.ZP.warning(Jn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn",dm:"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185"},{wrapTagName:re,tagName:ne})),nn.abrupt("return");case 27:Un=W.y$.parent(Un),nn.next=22;break;case 30:if(!(T!=null&&T.inner&&W.NB.get(a,Q.path)!==W.NB.get(a,q.path))){nn.next=42;break}Ln=W.y$.next(Q.path);case 32:if(W.y$.equals(Ln,q.path)){nn.next=42;break}if(Hn=W.NB.get(a,Ln),Vn=i==null||(In=i.rules)===null||In===void 0?void 0:In[Hn.type],!(W.W_.isElement(Hn)&&!T.inner.includes(Hn.type))){nn.next=39;break}return fn=(Vn==null?void 0:Vn.name)||Fe(),ae.ZP.warning(Jn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn",dm:"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011"},{wrapTagName:re,tagName:fn})),nn.abrupt("return");case 39:Ln=W.y$.next(Ln),nn.next=32;break;case 42:W.ML.withoutNormalizing(a,function(){var Gn=W.NB.parent(a,Q.path),_n=W.NB.fragment(Gn,{anchor:{path:[Q.path[Q.path.length-1]],offset:Q.offset},focus:{path:[q.path[q.path.length-1]],offset:q.offset}}),ce=W.NB.string(W.NB.get(a,Q.path));if(W.y$.equals(Q.path,q.path))a.apply({type:"remove_text",path:Q.path,offset:Q.offset,text:ce.substring(Q.offset,q.offset)});else{a.apply({type:"remove_text",path:Q.path,offset:Q.offset,text:ce.substring(Q.offset,ce.length)});for(var ue=W.y$.next(Q.path);!W.y$.equals(ue,q.path);)a.apply({type:"remove_node",path:ue,node:W.NB.get(a,ue)}),q.path=W.y$.previous(q.path);var He=W.NB.string(W.NB.get(a,q.path));a.apply({type:"remove_text",path:q.path,offset:0,text:He.substring(0,q.offset)})}if(!W.y$.equals(Q.path,q.path)){var be=W.NB.get(a,q.path);a.apply({type:"remove_node",path:q.path,node:be});var ze=W.NB.string(be);a.apply({type:"insert_text",path:Q.path,offset:Q.offset,text:ze})}Ye(a,k()(k()({},u),{},{children:_n}),{at:Q,rules:i==null?void 0:i.rules})}),nn.next=46;break;case 45:S&&ae.ZP.warning(S);case 46:case"end":return nn.stop()}},t)}));return function(a,u,i){return e.apply(this,arguments)}}(),Gt=function(t,a,u){if(!(!t||!a)){var i=Node.get(t,a),f=Pe(i.children).reverse();Editor.withoutNormalizing(t,function(){t.apply({type:"remove_node",node:i,path:a}),f.forEach(function(rn){t.apply({type:"insert_node",node:rn,path:a})});for(var b=Path.parent(a),j=Node.get(t,b),S=0;Node.has(j,[S+1]);)if(Text.isText(Node.get(j,[S]))&&Text.isText(Node.get(j,[S+1]))){var O=_toConsumableArray(b);O.push(S+1);var C=Node.get(t,O),T=Node.string(C);t.apply({type:"remove_node",path:O,node:C});var X=Path.previous(O),tn=Node.string(Node.get(t,X));t.apply({type:"insert_text",path:Path.previous(O),offset:tn.length,text:T}),j=Node.get(t,b)}else S++;u==null||u(),Path.previous(a)})}},Ar=function(t,a,u){var i=u.at;t.apply({type:"set_node",path:i,properties:a,newProperties:a}),t.onChange()},Jt=function(t,a,u){t.apply({type:"remove_node",path:u,node:Node.get(t,u)}),t.apply({type:"insert_node",path:u,node:a})},Wr=function(t,a){t&&(W.ML.withoutNormalizing(t,function(){var u=Pe(t.children);u.forEach(function(f){t.apply({type:"remove_node",path:[0],node:f})});var i=a?Pe(a):[{type:"s",children:[{text:""}]}];i.reverse(),i.forEach(function(f){t.apply({type:"insert_node",path:[0],node:f})})}),t.onChange())},he=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.reduce(function(a,u){return a+W.NB.string(u)},"")},Pe=function(t){return JSON.parse(JSON.stringify(t))},Fe=function(){var t="";return t},Yt=function(t){var a;return(a=t[0])===null||a===void 0||(a=a.children)===null||a===void 0?void 0:a.map(function(u){return u.children.map(function(i){return i.text}).join("")}).join("")},Xt=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,a=t%60,u=parseInt("".concat(t/60)),i=0;return u>60&&(u=u%60,i=parseInt("".concat(u/60))),"".concat(i?"".concat(ke(i),":"):"").concat(ke(u),":").concat(ke(a))},ke=function(t){return t>=10?"".concat(t):"0".concat(t)},wr=function(t,a){if(!(!t||!a))return oe.F3.findPath(t,a)},Hr=function(t){t&&W.ML.withoutNormalizing(t,function(){var a=W.ML.end(t,[]);W.YR.select(t,a),oe.F3.focus(t),t.onChange()})},zr=function(t,a,u){var i=t.isInline,f=t.isVoid,b=t.insertText,j=t.insertBreak,S=t.apply;t.isInline=function(C){var T;return((T=u[C.type])===null||T===void 0?void 0:T.isInline)||i(C)},t.isVoid=function(C){var T;return((T=u[C.type])===null||T===void 0?void 0:T.isVoid)||f(C)};var O=function(T){var X=parseInt(t.maxLength||a||"1000"),tn=Ge(t,{tagRules:u}),rn=tn.length;if(rn+T.length>X?(b(T.substring(0,X-rn)),Te.MO.withoutSaving(t,function(){b(T.substring(X-rn,T.length))})):b(T),t.selection&&rn+T.length>X){var an=t.selection.focus,hn=an.path,Q=an.offset,q=Q-(rn+T.length-X),Nn=T.substring(X-rn,T.length),Bn=Jn.Z.get({id:"components.SlateEditor.utils.withEditor.YouCanEnterAMaximum",dm:"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57"},{maxLen:X});Te.MO.withoutSaving(t,function(){t.apply({type:"remove_text",path:hn,offset:q,text:Nn})}),ae.ZP.warning(Bn)}};return t.insertText=O,t.insertFragment=function(C){var T=he(C);O(T)},t.insertBreak=function(){var C=t.selection;if(C){var T=Array.from(W.ML.nodes(t,{at:C,match:function(an){return!W.ML.isEditor(an)&&W.W_.isElement(an)&&an.type!=="s"}})),X=Ne()(T,1),tn=X[0];if(tn)return;j()}},t.apply=function(C){C.type==="set_selection"&&Ze||S(C)},t},$r=(0,pn.forwardRef)(function(e,t){var a=Dr(),u=e.value,i=e.wordLimit,f=i===void 0?1e3:i,b=e.disabled,j=e.onChange,S=e.variables,O=(0,pn.useRef)(!1),C=(0,pn.useRef)(Je(e.tagRules)),T=(0,pn.useMemo)(function(){return zr((0,oe.BU)((0,Te.VC)((0,W.Jh)())),f,C.current)},[]),X=(0,pn.useRef)(T.selection),tn=(0,pn.useRef)(S);(0,pn.useEffect)(function(){C.current=Je(e.tagRules)},[e.tagRules]),(0,pn.useEffect)(function(){tn.current=S},[S]),(0,pn.useEffect)(function(){var fn;if(!O.current){O.current=!0;return}T.maxLength=f;var $=On();Qn(((fn=pe(xe($==null?void 0:$.slice(0,f))))===null||fn===void 0||(fn=fn[0])===null||fn===void 0?void 0:fn.children)||[{type:"s",children:[{text:""}]}])},[f]),(0,pn.useImperativeHandle)(t,function(){return{editor:T,getEditorValue:On,_insertNodes:Un,_setNodes:ee,_setEditorContent:Qn,_findNodePath:ne,_wrapNodes:re,_serialize:Ln,_generateTextBySelection:In,_insertFragment:Hn,_setEditorContentByStr:Kn}});var rn=(0,pn.useMemo)(function(){var fn=pe(Or(xe(u))),$;return fn&&(fn[0].type==="speak"?$=fn[0].children:$=fn),{initValue:$}},[u]),an=rn.initValue,hn=(0,pn.useState)(an||[{type:"s",children:[{text:""}]}]),Q=Ne()(hn,2),q=Q[0],Nn=Q[1],Bn=function($){JSON.stringify((T==null?void 0:T.selection)||"")!==JSON.stringify(X.current||"")&&(X.current=T==null?void 0:T.selection);var nn=On();u!==nn&&(j==null||j(On()),Nn($))},$n=function($){var nn=$.element,Gn=nn.type,_n=C.current[Gn].render;return _n?(0,I.jsx)(_n,k()(k()({},$),{},{renderVarLabel:e.renderVarLabel})):(0,I.jsx)(I.Fragment,{})},kn=(0,pn.useCallback)(function(fn){var $=fn.attributes,nn=fn.children,Gn=fn.leaf;return(0,I.jsx)("span",k()(k()({},$),{},{style:{paddingLeft:Gn.text===""?"3px":void 0},children:nn}))},[]),Wn=function(){Ze=!0},qn=function(){Ze=!1},On=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ge(T,k()(k()({},$),{},{tagRules:C.current}))},ee=function($,nn){Ar(T,$,nn)},Un=function($){var nn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ye(T,$,k()(k()({},nn),{},{rules:C.current}))},re=function($){var nn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Rr(T,$,k()(k()({},nn),{},{rules:C.current}))},Qn=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];Wr(T,$)},Kn=function(){var $,nn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";Qn((($=pe(xe(nn==null?void 0:nn.slice(0,f))))===null||$===void 0||($=$[0])===null||$===void 0?void 0:$.children)||[{type:"s",children:[{text:""}]}])},ne=function($){return wr(T,$)},Ln=function($){var nn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Be($,k()(k()({},nn),{},{tagRules:C.current}))},In=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!T.selection)return null;var nn=W.NB.fragment(T,T.selection);return Be(nn,k()(k()({},$),{},{tagRules:C.current}))},Hn=function($){var nn,Gn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,_n=On();if(_n.length>=f){ae.ZP.warning(Jn.Z.get({id:"components.commonComponents.SlateEditor.TheNumberOfWordsCannot",dm:"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57"}));return}(!T.selection||Gn)&&Hr(T);var ce=_n.endsWith("/n");Gn&&_n&&!ce&&T.insertBreak();var ue=$.slice(0,f-_n.length),He=pe(xe(ue))||[];(nn=He[0])===null||nn===void 0||nn.children.forEach(function(be,ze){var $e;ze!==0&&T.insertBreak(),($e=be.children)===null||$e===void 0||$e.forEach(function(Ue){Ue.text?T.insertText(Ue.text):Un(Ue)})})};(0,pn.useEffect)(function(){var fn=On();u!==fn&&(j==null||j(On()))},[]);var Vn=function($){var nn=$.clipboardData.getData("text/plain"),Gn=nn.replace(/\r\n/g,`
`).replace(/\r/g,`
`);Hn(Gn,!1),$.preventDefault()};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(a,{}),(0,I.jsx)("div",{id:"text-editor",className:bn()("text-editor",e.className),children:(0,I.jsx)(oe.mH,{editor:T,value:q,onChange:Bn,children:(0,I.jsx)(oe.CX,{onKeyDown:e.onKeyDown,placeholder:e.placeholder||Jn.Z.get({id:"components.commonComponents.SlateEditor.EnterHere",dm:"\u5728\u8FD9\u91CC\u8F93\u5165"}),onBlur:e.onBlur,onFocus:e.onFocus,className:bn()("text-editor-content",e.contentClassName),readOnly:b,renderElement:$n,renderLeaf:kn,onCompositionStart:Wn,onCompositionEnd:qn,onPaste:Vn,maxLength:e.wordLimit,onCopy:function($){var nn=In()||"";$.clipboardData.setData("text/plain",nn),$.preventDefault()}})})})]})}),Ur=$r,Ze=!1,Xe=n(77652),Qr=n(70076),Kr=n(8639),Vr=n(62518),qe=n(46763),Gr=n(36070),Jr=n(82092),le=n.n(Jr),_e,Yr=(0,yn.Z)(_e||(_e=mn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix});function Xr(e){var t=(0,_.getCommonConfig)(),a=t.sparkPrefix,u=Yr(),i=function(b){var j=typeof b=="string"?parseFloat(b):b;if(j===null||isNaN(j)){var S;(S=e.onChange)===null||S===void 0||S.call(e,null);return}if(j<e.min){var O;(O=e.onChange)===null||O===void 0||O.call(e,e.min)}else if(j>e.max){var C;(C=e.onChange)===null||C===void 0||C.call(e,e.max)}else{var T;(T=e.onChange)===null||T===void 0||T.call(e,j)}};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(u,{}),(0,I.jsxs)("div",{onMouseUp:function(){var b;return(b=e.onBlur)===null||b===void 0?void 0:b.call(e)},className:bn()("".concat(a,"-slider-selector"),e.className),children:[(0,I.jsx)(Xe.Z,{disabled:e.disabled,onChange:i,value:e.value===null?void 0:e.value,min:e.min,max:e.max,step:e.step,marks:e.marks||le()(le()({},e.min,e.min),e.max,e.max),tooltip:{getPopupContainer:function(b){return b}}}),(0,I.jsx)("div",{style:k()({width:"48px"},e.inputNumberWrapperStyle),children:(0,I.jsx)(r.Z,{disabled:e.disabled,controls:!1,min:e.min,max:e.max,onBlur:function(){var b;return(b=e.onBlur)===null||b===void 0?void 0:b.call(e)},step:e.step,value:e.value,onChange:i,precision:e.precision})})]})]})}var qr=n(75229),_r=n(90118),nt=n(18762),et=n(98587),rt=n(96295),tt=n(2567),at=n(95726),ot=n(70588),it=n(67825),ie=n.n(it),lt=n(58911),st=n(88602),ct=n(62910),ut=n(99090),ye=n(90264),Xn=n(91301),nr,er=(0,yn.Z)(nr||(nr=mn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),dt=["children","type","danger","title","width","className"],rr=function(){var t=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,u=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(u,"px"),function(){document.body.style.overflow=t,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,u)}},tr=function(t){var a=function(an){var hn=an.type,Q=an.title,q=(0,_.getCommonConfig)(),Nn=q.antPrefix;switch(hn){case"success":return(0,I.jsxs)(ye.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,I.jsx)(lt.Z,{style:{color:"var(--".concat(Nn,"-color-success)"),fontSize:18,margin:"0 3px"}}),Q]});case"warning":case"confirm":return(0,I.jsxs)(ye.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,I.jsx)(st.Z,{style:{color:"var(--".concat(Nn,"-color-warning)"),fontSize:18,margin:"0 3px"}}),Q]});case"info":return(0,I.jsxs)(ye.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,I.jsx)(ct.Z,{style:{color:"var(--".concat(Nn,"-color-info)"),fontSize:18,margin:"0 3px"}}),Q]});case"error":return(0,I.jsxs)(ye.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,I.jsx)(ut.Z,{style:{color:"var(--".concat(Nn,"-color-error)"),fontSize:18,margin:"0 3px"}}),Q]});default:return Jn.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},u=t.children,i=t.type,f=i===void 0?"info":i,b=t.danger,j=b===void 0?!1:b,S=t.title,O=t.width,C=O===void 0?"auto":O,T=t.className,X=T===void 0?"":T,tn=ie()(t,dt);return{width:C,transitionName:"",restProps:tn,closeIcon:null,title:a({type:f,title:S}),okButtonProps:{danger:f==="error"||f==="warning"||j},destroyOnClose:!0,className:bn()(X,"animate-in","".concat((0,_.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:t.content||u,children:u}},ar=function(t){var a=tr(t),u=er();return(0,pn.useEffect)(function(){if(t.open){var i=rr();return i}},[t.open]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(u,{}),(0,I.jsx)(Xn.Z,k()(k()({width:a.width,transitionName:""},a.restProps),{},{closeIcon:null,title:a.title,okButtonProps:a.okButtonProps||{},destroyOnClose:a.destroyOnClose,className:a.className,children:a.content||a.children}))]})},ft=["success","info","warning","error","confirm"];ft.forEach(function(e){ar[e]=function(t){var a=tr(k()(k()({},t),{},{type:e})),u=rr();function i(){var f=er();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(f,{}),a.content]})}return Xn.Z.confirm(k()(k()(k()({},a),a.restProps),{},{content:(0,I.jsx)(i,{}),icon:null,afterClose:function(){var b;if(u(),(b=a.restProps)!==null&&b!==void 0&&b.afterClose){var j;(j=a.restProps).afterClose.apply(j,arguments)}}}))}});var vt=ar,mt=n(14679),gt=n(56652),or,ir=(0,yn.Z)(or||(or=mn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),xt=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],pt=function(t){var a=t.onOk,u=t.onCancel,i=t.okText,f=i===void 0?"\u786E\u5B9A":i,b=t.okButtonProps,j=t.cancelText,S=j===void 0?"\u53D6\u6D88":j,O=t.cancelButtonProps,C=t.info,T=t.footer,X=ie()(t,xt),tn=ir(),rn=(0,_.getCommonConfig)(),an=rn.antPrefix,hn=function(q){if(u)u();else{var Nn;(Nn=X.onClose)===null||Nn===void 0||Nn.call(X,q)}};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(tn,{}),(0,I.jsx)(sn.Z,k()(k()({},X),{},{footer:T||(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{className:"".concat(an,"-drawer-footer-info"),children:C}),(0,I.jsxs)("div",{className:"".concat(an,"-drawer-footer-buttons"),children:[(0,I.jsx)(J.Z,k()(k()({onClick:hn},O),{},{children:S})),(0,I.jsx)(J.Z,k()(k()({type:"primary",onClick:a},b),{},{children:f}))]})]})}))]})},ht=pt,Pt=["children","className","style","showDivider"],lr=function(t){var a=t.children,u=t.className,i=t.style,f=t.showDivider,b=f===void 0?!0:f,j=ie()(t,Pt),S=ir(),O=(0,_.getCommonConfig)(),C=O.sparkPrefix,T=O.antPrefix;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(S,{}),(0,I.jsx)(gt.Z,k()(k()({closeIcon:(0,I.jsx)(mt.Z,{size:24}),className:bn()("".concat(C,"-drawer"),u,le()({},"".concat(T,"-show-divider"),b)),style:k()({},i)},j),{},{children:a}))]})};Object.assign(lr,{Confirm:ht});var yt=lr,bt=n(6002),sr,cr=(0,yn.Z)(sr||(sr=mn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Ct=["showDivider","closable"],ur=function(){var t=window.getComputedStyle(document.body).overflow,a=window.getComputedStyle(document.body).position,u=window.scrollY;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(u,"px"),function(){document.body.style.overflow=t,document.body.style.position=a,document.body.style.width="",document.body.style.top="",window.scrollTo(0,u)}},zn=function(t){var a=cr(),u=(0,_.getCommonConfig)(),i=u.sparkPrefix,f=t.showDivider,b=f===void 0?!0:f,j=t.closable,S=j===void 0?!0:j,O=ie()(t,Ct);(0,pn.useEffect)(function(){if(t.open){var tn=ur();return tn}},[t.open]);var C=function(rn){return t.info?(0,I.jsxs)("div",{className:"".concat(i,"-modal-footer-wrapper"),children:[(0,I.jsx)("span",{className:"".concat(i,"-modal-footer-info"),children:t.info}),(0,I.jsx)("div",{className:"".concat(i,"-modal-footer-origin-node"),children:rn})]}):rn},T=S?t.closeIcon||(0,I.jsx)(bt.Z,{className:"".concat(i,"-modal-title-close"),onClick:function(rn){var an;(an=t.onCancel)===null||an===void 0||an.call(t,rn)}}):null,X=t.footer===void 0?C:t.footer;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(a,{}),(0,I.jsx)(Xn.Z,k()(k()({},O),{},{centered:!1,closeIcon:null,width:t.width||"auto",title:(0,I.jsxs)("div",{className:"".concat(i,"-modal-title-wrapper"),children:[(0,I.jsx)("div",{className:bn()("".concat(i,"-modal-title"),le()({},"".concat(i,"-modal-title-padding"),S)),children:t.title}),T]}),wrapClassName:bn()("".concat(i,"-modal"),le()({},"".concat(i,"-show-divider"),b),t.wrapClassName,"animate-in"),footer:X,transitionName:""}))]})};zn.useModal=Xn.Z.useModal;var se=function(t){return function(a){var u=ur(),i=(0,_.getCommonConfig)(),f=i.sparkPrefix,b=a==null?void 0:a.afterClose,j=a==null?void 0:a.content;function S(){var C=cr();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(C,{}),j]})}var O=k()(k()({},a),{},{content:(0,I.jsx)(S,{}),width:a.width||"auto",centered:!1,transitionName:"",wrapClassName:bn()("".concat(f,"-modal"),a.wrapClassName,"animate-in"),afterClose:function(){u();for(var T=arguments.length,X=new Array(T),tn=0;tn<T;tn++)X[tn]=arguments[tn];b==null||b.apply(void 0,X)}});return t(O)}};zn.success=se(Xn.Z.success),zn.error=se(Xn.Z.error),zn.warning=se(Xn.Z.warning),zn.info=se(Xn.Z.info),zn.confirm=se(Xn.Z.confirm),zn.SMALL_WIDTH=640,zn.MEDIUM_WIDTH=800,zn.LARGE_WIDTH=960;var jt=zn,St=n(86822);function dr(){return Oe.apply(this,arguments)}function Oe(){return Oe=Yn()(Zn()().mark(function e(){var t,a=arguments;return Zn()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=a.length>0&&a[0]!==void 0?a[0]:100,i.abrupt("return",new Promise(function(f){setTimeout(f,t)}));case 2:case"end":return i.stop()}},e)})),Oe.apply(this,arguments)}var Et=n(65482),fr=n(8209),Dt=["product","action","url","version","region","headers"],Nt=function(){var e=Yn()(Zn()().mark(function a(u,i,f){var b,j,S,O,C,T,X,tn,rn,an,hn,Q,q,Nn,Bn;return Zn()().wrap(function(kn){for(;;)switch(kn.prev=kn.next){case 0:return j=u.product,S=u.action,O=u.url,C=u.version,T=u.region,X=u.headers,tn=X===void 0?{}:X,rn=ie()(u,Dt),an="".concat(O||"/data/api.json","?action=").concat(S,"&product=").concat(j),C&&(an+="&version=".concat(C)),hn={sec_token:((b=window.ALIYUN_CONSOLE_CONFIG)===null||b===void 0?void 0:b.SEC_TOKEN)||"",region:T},i&&(hn.params=JSON.stringify(i)),f&&Object.assign(hn,f),Q=k()({method:"post",credentials:"same-origin",headers:k()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},tn)},rn),q=Object.assign({},Q),q.body=(0,fr.stringify)(hn),kn.next=11,fetch(an,q);case 11:return Nn=kn.sent,kn.next=14,Nn.json();case 14:if(Bn=kn.sent,!(Bn.code!=="200"&&!Bn.successResponse)){kn.next=17;break}return kn.abrupt("return",Promise.reject(Bn));case 17:return kn.abrupt("return",Bn);case 18:case"end":return kn.stop()}},a)}));function t(a,u,i){return e.apply(this,arguments)}return t}(),vr=Nt;function Tt(e,t){return Le.apply(this,arguments)}function Le(){return Le=Yn()(Zn()().mark(function e(t,a){var u,i,f;return Zn()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:i=t==null||(u=t.getReader)===null||u===void 0?void 0:u.call(t),i||(console.log("[sse]error: Can Not Find Reader Object"),console.log("[sse]StreamInfo: ",t));case 2:return j.next=4,i.read();case 4:if((f=j.sent).done){j.next=8;break}try{a(f.value)}catch(S){console.log("[sse-error][onmessage] pleach check `onmessage` or `onJsonText`.",S)}j.next=2;break;case 8:case"end":return j.stop()}},e)})),Le.apply(this,arguments)}function Mt(e){var t,a,u,i=!1;return function(b){t===void 0?(t=b,a=0,u=-1):t=Ft(t,b);for(var j=t.length,S=0;a<j;){i&&(t[a]===10&&(S=++a),i=!1);for(var O=-1;a<j&&O===-1;++a)switch(t[a]){case 58:u===-1&&(u=a-S);break;case 13:i=!0;case 10:O=a;break}if(O===-1)break;e(t.subarray(S,O),u),S=a,u=-1}S===j?t=void 0:S!==0&&(t=t.subarray(S),a-=S)}}function Bt(e,t,a){var u=mr(),i=new TextDecoder;return function(b,j){if(b.length===0)a==null||a(u),u=mr();else if(j>0){var S=i.decode(b.subarray(0,j)),O=j+(b[j+1]===32?2:1),C=i.decode(b.subarray(O));switch(S){case"data":u.data=u.data?"".concat(u.data,`
`).concat(C):C;break;case"event":u.event=C;break;case"id":e(u.id=C);break;case"retry":var T=parseInt(C,10);isNaN(T)||t(u.retry=T);break}}}}function Ft(e,t){var a=new Uint8Array(e.length+t.length);return a.set(e),a.set(t,e.length),a}function mr(){return{data:"",event:"",id:"",retry:void 0}}var kt=["signal","headers","onopen","onmessage","onclose","onerror","fetch","autoRetryTime","timeout","debug"],Ie="text/event-stream",Zt=1e3,gr="last-event-id";function xr(e,t){return Re.apply(this,arguments)}function Re(){return Re=Yn()(Zn()().mark(function e(t,a){var u,i,f,b,j,S,O,C,T,X,tn,rn,an;return Zn()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return u=a.signal,i=a.headers,f=a.onopen,b=a.onmessage,j=a.onclose,S=a.onerror,O=a.fetch,C=a.autoRetryTime,T=a.timeout,X=a.debug,tn=X===void 0?!1:X,rn=ie()(a,kt),an=0,Q.abrupt("return",new Promise(function(q,Nn){var Bn=k()({},i);Bn.accept||(Bn.accept=Ie);var $n=Zt,kn=0,Wn=0,qn=new AbortController;function On(){var ne=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(tn&&console.log("[sse] dispose"),window.clearTimeout(kn),window.clearTimeout(Wn),!ne){var Ln,In;(Ln=qn)===null||Ln===void 0||(In=Ln.abort)===null||In===void 0||In.call(Ln)}}function ee(){window.clearTimeout(Wn),T!==0&&(Wn=window.setTimeout(function(){tn&&console.log("[sse] timeout"),Nn(new Error("timeout")),S==null||S(new Error("timeout")),On()},T||60*1e3))}u==null||u.addEventListener("abort",function(){On(),q()});var Un=O!=null?O:window.fetch,re=f!=null?f:Ot;function Qn(){return Kn.apply(this,arguments)}function Kn(){return Kn=Yn()(Zn()().mark(function ne(){var Ln,In,Hn,Vn;return Zn()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.prev=0,ee(),$.next=4,Un(t,k()(k()({},rn),{},{headers:Bn,signal:(Ln=qn)===null||Ln===void 0?void 0:Ln.signal}));case 4:return In=$.sent,$.next=7,re(In);case 7:if(In.body){$.next=11;break}return tn&&console.log("[sse]no body, delay 100ms"),$.next=11,dr(100);case 11:return tn&&console.log("[sse]response.body",In.body),$.next=14,Tt(In.body,Mt(Bt(function(nn){nn?Bn[gr]=nn:delete Bn[gr]},function(nn){$n=nn},function(nn){ee(),b==null||b(nn)})));case 14:qn=null,j==null||j(),On(),q(),$.next=43;break;case 20:if($.prev=20,$.t0=$.catch(0),$.t0&&console.error("[sse]err",$.t0),!(!(u!=null&&u.aborted)&&C&&an<C)){$.next=39;break}return $.prev=24,an+=1,Vn=(Hn=S==null?void 0:S($.t0))!==null&&Hn!==void 0?Hn:$n,window.clearTimeout(kn),typeof Vn=="number"&&(tn&&console.log("[sse] retry "+an),kn=window.setTimeout(Qn,Vn)),$.abrupt("return",Promise.resolve());case 32:$.prev=32,$.t1=$.catch(24),tn&&console.log("[sse] reject innerErr ",$.t1),On(),Nn($.t1);case 37:$.next=43;break;case 39:tn&&console.log("[sse] reject finally"),On($.t0 instanceof Response||$.t0 instanceof DOMException&&$.t0.name==="AbortError"),S==null||S($.t0),Nn($.t0);case 43:case"end":return $.stop()}},ne,null,[[0,20],[24,32]])})),Kn.apply(this,arguments)}Qn()}));case 3:case"end":return Q.stop()}},e)})),Re.apply(this,arguments)}function Ot(e){var t=e.headers.get("content-type");if(!(t!=null&&t.startsWith(Ie)))throw new Error("Expected content-type to be ".concat(Ie,", Actual: ").concat(t))}function Lt(e){return Ae.apply(this,arguments)}function Ae(){return Ae=Yn()(Zn()().mark(function e(t){var a,u,i,f,b,j,S;return Zn()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return a=t.action,u=t.body,i=t.product,f=t.version,b=t.region,j=t.params,S={action:a,product:i,region:b,url:"/tool/sse/get.json",version:f},C.abrupt("return",vr(S,j,{content:JSON.stringify(u)}));case 3:case"end":return C.stop()}},e)})),Ae.apply(this,arguments)}function It(e,t,a,u){var i=t.onMessage,f=t.onClose,b=t.onError,j=t.timeout,S=e.body,O=e.uri,C=e.headers,T=e.query,X=e.path,tn=C["Content-Type"],rn="".concat(O.replace(/\/$/,"")).concat(X);T&&Object.keys(T).length&&(rn="".concat(rn,"?").concat((0,fr.stringify)(T)));try{u.value=!1,xr(rn,{method:"POST",body:tn==="application/x-www-form-urlencoded"?new URLSearchParams(JSON.parse(S)):S,signal:a.signal,timeout:j,headers:C,onopen:function(hn){return hn.status!==200?Promise.reject(hn):Promise.resolve()},onmessage:function(hn){try{var Q=hn.data,q=Q===void 0?"{}":Q,Nn=JSON.parse(q);i==null||i(Nn)}catch(Bn){b==null||b(Bn)}},onclose:function(){u.value=!0,f==null||f()},onerror:function(hn){u.value=!0,f==null||f(),!(hn instanceof DOMException&&hn.name==="AbortError")&&(b==null||b(hn))}})}catch(an){u.value=!0,b==null||b(an),f==null||f()}}function Rt(e,t,a){return We.apply(this,arguments)}function We(){return We=Yn()(Zn()().mark(function e(t,a,u){var i,f,b,j;return Zn()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return i=t.onClose,f=t.onError,O.prev=1,O.next=4,Lt(t);case 4:b=O.sent,j=b.data,It(j,t,a,u),O.next=13;break;case 9:O.prev=9,O.t0=O.catch(1),i==null||i(),f==null||f(O.t0);case 13:case"end":return O.stop()}},e,null,[[1,9]])})),We.apply(this,arguments)}function At(e){return we.apply(this,arguments)}function we(){return we=Yn()(Zn()().mark(function e(t){var a,u;return Zn()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return a=new AbortController,u={value:!0},f.next=4,Rt(t,a,u);case 4:return f.abrupt("return",{dispose:function(){u.value&&a.abort("\u53D6\u6D88\u8BF7\u6C42")}});case 5:case"end":return f.stop()}},e)})),we.apply(this,arguments)}var pr=n(95336);function hr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.timeout,u=a===void 0?5e3:a,i=t.intervalTime,f=i===void 0?100:i,b=Date.now();return new Promise(function(j,S){var O=setInterval(function(){var C=e();C?(clearInterval(O),j(C)):Date.now()-b>u&&(S("timeout"),clearInterval(O))},f)})}function Wt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return hr(function(){return document.querySelector(e)},t)}var wt=n(43758);function Ht(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof e!="string")return a||console.warn(e,"is not valid json"),t?e:null;try{return JSON.parse(e)}catch(u){return a||console.warn(e,"is not valid json"),t?e:null}}function zt(e){for(var t=new TextEncoder,a=t.encode(e),u="",i=0;i<a.length;i++)u+=String.fromCharCode(a[i]);var f=btoa(u);return f}function $t(e){for(var t=atob(e),a=new Uint8Array(t.length),u=0;u<t.length;u++)a[u]=t.charCodeAt(u);var i=new TextDecoder("utf-8"),f=i.decode(a);return f}var Pr=(0,h.Z)(l),yr=(0,h.Z)(y,!0),Ut=(0,h.Z)(F),Qt=(0,h.Z)(V,!0)},95336:function(vn,K,n){n.d(K,{JG:function(){return R},rb:function(){return N}});var y=n(26068),l=n.n(y),V=n(67825),F=n.n(V),z=n(75271),E=["maxWidth","maxHeight"];function B(){var M;return((M=window.g_config)===null||M===void 0?void 0:M.isIntl)||!1}var R=function(d){if(navigator.clipboard)navigator.clipboard.writeText(d);else{var h=document.createElement("textarea");document.body.appendChild(h),h.style.position="fixed",h.style.clip="rect(0 0 0 0)",h.style.top="10px",h.value=d,h.select(),document.execCommand("copy",!0),document.body.removeChild(h)}},N=function(d){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=h.maxWidth,p=h.maxHeight,v=F()(h,E);return l()({overlayInnerStyle:{maxWidth:o||326,maxHeight:p||150,overflowY:"auto",padding:"6px 12px"},title:d,arrow:!1},v)};function w(M){return React.isValidElement(M)}function A(M){var d=M||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(d)}var x=function(d){return d>=10?d:"0".concat(d)},m=function(d){if(d<60){var h=Math.ceil(d);return"0:".concat(x(h))}var o=Math.floor(d/60),p=Math.ceil(d%60);return"".concat(x(o),":").concat(x(p))}}}]);
