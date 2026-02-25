"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[6070],{74659:function(yn,U,e){e.d(U,{Z:function(){return p}});var q=e(60213),j=e(94662),_=e(22576),g=e(79055),V=e(98539),D=e(87539),v=e(43339),nn=e(14395),M=e(75271),en=e(53649),an=e.n(en),tn=e(30764),$,T=(0,tn.Z)($||($=an()([`
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
  display: flex;
  align-items: center;
  width: 100%;

  .`,`-progress-bg {
    transition-duration: 0s;
  }
}
`])),function(m){return m.sparkPrefix},function(m){return m.sparkPrefix},function(m){return m.sparkPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix}),t=e(52676),x=function(l){var w=Math.floor(l/60),a=Math.floor(l%60);return"".concat(w.toString().padStart(2,"0"),":").concat(a.toString().padStart(2,"0"))},rn=function(l){var w=l.className,a=l.isPlaying,r=l.onPlayPause,O=l.onFullscreen,Z=l.onProgressClick,L=l.enableVolume,n=L===void 0?!1:L,P=l.enableFullscreen,E=l.muted,u=E===void 0?!0:E,h=l.onMute,y=T(),A=(0,q.getCommonConfig)(),b=A.sparkPrefix,H=(0,M.useMemo)(function(){return x(l.currentTime||0)},[l.currentTime]),o=(0,M.useMemo)(function(){return x(l.duration||0)},[l.duration]),z=(0,M.useMemo)(function(){return Math.min((l.currentTime||0)/(l.duration||.01)*100,100)},[l.currentTime,l.duration]),on=function(W){if(!(!Z||!l.duration)){var B=W.currentTarget.getBoundingClientRect(),F=W.clientX-B.left,R=B.width,C=F/R,k=C*l.duration,sn=Math.max(0,Math.min(k,l.duration));Z(sn)}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y,{}),(0,t.jsxs)("div",{className:"".concat(b,"-media-player-controller ").concat(w||""),children:[(0,t.jsx)(j.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:a?(0,t.jsx)(g.Z,{}):(0,t.jsx)(V.Z,{}),onClick:r}),(0,t.jsx)(j.Z,{bordered:!1,size:"small",shape:"default",disabled:!n,icon:n&&u?(0,t.jsx)(D.Z,{}):(0,t.jsx)(v.Z,{}),onClick:h}),(0,t.jsx)("span",{className:"".concat(b,"-media-time-text"),children:H}),(0,t.jsx)("div",{className:"".concat(b,"-media-progress-container"),onClick:on,children:(0,t.jsx)(_.Z,{className:"".concat(b,"-media-progress-bar"),percent:z,showInfo:!1})}),(0,t.jsx)("span",{className:"".concat(b,"-media-time-text"),children:o}),P&&(0,t.jsx)(j.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,t.jsx)(nn.Z,{}),onClick:O})]})]})},p=rn},36070:function(yn,U,e){e.d(U,{Z:function(){return L}});var q=e(26068),j=e.n(q),_=e(48305),g=e.n(_),V=e(60213),D=e(94920),v=e(94225),nn=e(19414),M=e(33990),en=e(84036),an=e(14679),tn=e(86137),$=e(82187),T=e.n($),t=e(75271),x=e(94662),rn=e(70588),p=e(53649),m=e.n(p),l=e(30764),w,a=(0,l.Z)(w||(w=m()([`
.`,`-media-preview-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--`,`-color-bg-mask);
}

.`,`-media-preview-main-content {
  border-radius: var(--`,`-border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 0.3s ease, opacity 0.15s ease;
  opacity: 1;

  &.transitioning {
    opacity: 0;
  }
}

.`,`-media-preview-main-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.`,`-media-preview-nav-left {
  position: absolute;
  left: 48px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
}

.`,`-media-preview-nav-right {
  position: absolute;
  right: 48px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
}

.`,`-media-preview-nav-icon {
  font-size: 48px;
  color: var(--`,`-color-bg-base);
}

.`,`-media-preview-toolbar {
  position: absolute;
  top: 36px;
  right: 36px;
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.`,`-media-preview-zoom-controls {
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  background: var(--`,`-color-bg-mask);
}

.`,`-media-preview-close-button {
  display: flex;
  flex-direction: row;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
}

.`,`-media-preview-tool-button {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.`,`-media-preview-tool-icon {
  font-size: 24px;
  color: var(--`,`-color-bg-base);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}

.`,`-media-preview-thumbnail-carousel {
  position: absolute;
  bottom: 42px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  border-radius: 8px;
  background: var(--`,`-color-bg-mask);
}

.`,`-media-preview-thumbnail-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.`,`-media-preview-thumbnail-nav-icon {
  font-size: 16px;
  color: var(--`,`-color-bg-base);
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    color: var(--`,`-color-bg-base) !important;
    opacity: 0.8;
  }
}

.`,`-media-preview-thumbnail-list {
  display: flex;
  flex-direction: row;
  gap: 8px;
  overflow-x: auto;
  scroll-behavior: smooth;
  max-width: 720px;

  &::-webkit-scrollbar {
    display: none;
  }
}

.`,`-media-preview-thumbnail-item {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
  border: 1px solid transparent;
  box-sizing: border-box;

  &.active {
    border-color: var(--`,`-color-bg-base);
  }

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix}),r=e(52676),O=function(P,E){return Math.max(0,Math.min(P,E-1))},Z=function(P){var E=P.className,u=P.visible,h=P.mediaList,y=P.currentIndex,A=y===void 0?0:y,b=P.onClose,H=(0,V.getCommonConfig)(),o=H.sparkPrefix,z=(0,V.useCommonConfig)(),on=z.configProviderProps,ln=a(),W=(0,t.useState)(function(){return O(A,h.length)}),B=g()(W,2),F=B[0],R=B[1],C=(0,t.useState)(1),k=g()(C,2),sn=k[0],S=k[1],cn=(0,t.useState)({width:960,height:600}),mn=g()(cn,2),xn=mn[0],hn=mn[1],Pn=(0,t.useState)(!1),X=g()(Pn,2),s=X[0],I=X[1],K=(0,t.useRef)(null);(0,t.useEffect)(function(){var i=function(){var d=960,f=600,vn=Math.max(d,960),Cn=Math.max(f,600);hn({width:vn,height:Cn})};return i(),window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)}},[]),(0,t.useEffect)(function(){var i=O(A,h.length);R(i),S(1)},[A,h.length]),(0,t.useEffect)(function(){u&&S(1)},[u]);var N=(0,t.useCallback)(function(i){s||(I(!0),setTimeout(function(){R(i),S(1),setTimeout(function(){return I(!1)},50)},150))},[s]),Y=(0,t.useCallback)(function(){N(function(i){return i>0?i-1:h.length-1})},[h.length,N]),G=(0,t.useCallback)(function(){N(function(i){return i<h.length-1?i+1:0})},[h.length,N]),un=(0,t.useCallback)(function(){S(function(i){return Math.min(i+.25,3)})},[]),dn=(0,t.useCallback)(function(){S(function(i){return Math.max(i-.25,.5)})},[]),gn=(0,t.useCallback)(function(){!K.current||document.fullscreenElement||K.current.requestFullscreen().catch(function(i){console.error("Error attempting to enable full-screen mode: ".concat(i.message," (").concat(i.name,")"))})},[]),J=(0,t.useCallback)(function(){document.fullscreenElement&&document.exitFullscreen()},[]),pn=(0,t.useCallback)(function(){document.fullscreenElement?J():gn()},[gn,J]),fn=(0,t.useCallback)(function(){S(1),J()},[J]),bn=(0,t.useCallback)(function(i){i!==F&&N(function(){return i})},[F,N]);if((0,t.useEffect)(function(){if(u){var i=function(d){switch(d.key){case"ArrowLeft":Y();break;case"ArrowRight":G();break;case"Escape":b();break;case"+":case"=":un();break;case"-":dn();break;case"f":case"F":pn();break;case"r":case"R":fn();break;default:break}};return window.addEventListener("keydown",i),function(){return window.removeEventListener("keydown",i)}}},[u,Y,G,b,un,dn,pn,fn]),!u||h.length===0)return null;var Q=h[F];return(0,r.jsxs)(tn.ZP,j()(j()({},on),{},{children:[(0,r.jsx)(ln,{}),(0,r.jsxs)("div",{ref:K,role:"dialog","aria-modal":"true","aria-label":"\u5A92\u4F53\u9884\u89C8",className:T()("".concat(o,"-media-preview-container"),E),children:[(0,r.jsx)("div",{className:T()("".concat(o,"-media-preview-main-content"),{transitioning:s}),style:{width:xn.width,height:xn.height,transform:"scale(".concat(sn,")")},children:Q.type==="image"?(0,r.jsx)("img",{className:"".concat(o,"-media-preview-main-media"),src:Q.src,alt:Q.alt||""}):(0,r.jsx)(rn.Z,{src:Q.src,controls:!0})}),(0,r.jsx)(x.Z,{className:"".concat(o,"-media-preview-nav-left"),onClick:Y,"aria-label":"\u4E0A\u4E00\u5F20",bordered:!1,icon:(0,r.jsx)(D.Z,{className:"".concat(o,"-media-preview-nav-icon")})}),(0,r.jsx)(x.Z,{className:"".concat(o,"-media-preview-nav-right"),onClick:G,"aria-label":"\u4E0B\u4E00\u5F20",bordered:!1,icon:(0,r.jsx)(v.Z,{className:"".concat(o,"-media-preview-nav-icon")})}),(0,r.jsxs)("div",{className:"".concat(o,"-media-preview-toolbar"),role:"toolbar",children:[(0,r.jsxs)("div",{className:"".concat(o,"-media-preview-zoom-controls"),children:[(0,r.jsx)(x.Z,{size:"large","aria-label":"\u653E\u5927",className:"".concat(o,"-media-preview-tool-button"),onClick:un,bordered:!1,icon:(0,r.jsx)(nn.Z,{className:"".concat(o,"-media-preview-tool-icon")})}),(0,r.jsx)(x.Z,{size:"large","aria-label":"\u7F29\u5C0F",className:"".concat(o,"-media-preview-tool-button"),onClick:dn,bordered:!1,icon:(0,r.jsx)(M.Z,{className:"".concat(o,"-media-preview-tool-icon")})}),(0,r.jsx)(x.Z,{size:"large","aria-label":"\u91CD\u7F6E",className:"".concat(o,"-media-preview-tool-button"),onClick:fn,bordered:!1,icon:(0,r.jsx)(en.Z,{className:"".concat(o,"-media-preview-tool-icon")})})]}),(0,r.jsx)("div",{className:"".concat(o,"-media-preview-zoom-controls"),children:(0,r.jsx)(x.Z,{className:"".concat(o,"-media-preview-close-button"),onClick:b,"aria-label":"\u5173\u95ED\u9884\u89C8",bordered:!1,size:"large",icon:(0,r.jsx)(an.Z,{className:"".concat(o,"-media-preview-tool-icon")})})})]}),(0,r.jsx)("div",{className:"".concat(o,"-media-preview-thumbnail-carousel"),children:(0,r.jsxs)("div",{className:"".concat(o,"-media-preview-thumbnail-wrapper"),children:[(0,r.jsx)(x.Z,{className:"".concat(o,"-media-preview-thumbnail-nav-icon"),onClick:Y,"aria-label":"\u4E0A\u4E00\u5F20",bordered:!1,icon:(0,r.jsx)(D.Z,{})}),(0,r.jsx)("div",{className:"".concat(o,"-media-preview-thumbnail-list"),children:h.map(function(i,c){return(0,r.jsx)("div",{className:T()("".concat(o,"-media-preview-thumbnail-item"),{active:c===F}),onClick:function(){return bn(c)},children:i.type==="image"?(0,r.jsx)("img",{src:i.src,alt:i.alt||"\u5A92\u4F53 ".concat(c+1)}):(0,r.jsx)("video",{src:i.src,preload:"metadata",muted:!0})},c)})}),(0,r.jsx)(x.Z,{className:"".concat(o,"-media-preview-thumbnail-nav-icon"),onClick:G,"aria-label":"\u4E0B\u4E00\u5F20",bordered:!1,icon:(0,r.jsx)(v.Z,{})})]})})]})]}))},L=Z},70588:function(yn,U,e){e.d(U,{Z:function(){return w}});var q=e(26068),j=e.n(q),_=e(48305),g=e.n(_),V=e(67825),D=e.n(V),v=e(75271),nn=e(82187),M=e.n(nn),en=e(74659),an=e(32547),tn=e(60213),$=e(53649),T=e.n($),t=e(30764),x,rn=(0,t.Z)(x||(x=T()([`
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

  // \u8FDB\u5EA6\u6761\u6837\u5F0F
  .`,`-media-progress-bar {
    .`,`-progress-inner {
      --`,"-progress-remaining-color: var(--",`-color-fill);
    }
    
    .`,`-progress-bg {
      background: var(--`,`-color-text-white) !important;
    }
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
`])),function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix}),p=e(52676),m=["controls","mouseEnterAutoPlay","children","className","style"],l=(0,v.forwardRef)(function(a,r){var O=a.controls,Z=a.mouseEnterAutoPlay,L=Z===void 0?!1:Z,n=a.children,P=a.className,E=a.style,u=D()(a,m),h=(0,tn.getCommonConfig)(),y=h.sparkPrefix,A=rn(),b=(0,v.useState)(0),H=g()(b,2),o=H[0],z=H[1],on=(0,v.useState)(0),ln=g()(on,2),W=ln[0],B=ln[1],F=(0,v.useState)(!1),R=g()(F,2),C=R[0],k=R[1],sn=(0,an.Z)(a,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),S=g()(sn,2),cn=S[0],mn=S[1],xn=(0,v.useState)(!1),hn=g()(xn,2),Pn=hn[0],X=hn[1],s=(0,v.useRef)(null),I=(0,v.useRef)(!1),K=(0,v.useRef)(!0),N=function(d){s.current=d,r&&(typeof r=="function"?r(d):r.current=d)};(0,v.useEffect)(function(){if(K.current){K.current=!1;return}s.current&&u.src&&s.current.load()},[u.src]),(0,v.useEffect)(function(){var c;return C&&(c=setInterval(function(){s.current&&z(s.current.currentTime)},16)),function(){c&&clearInterval(c)}},[C]);var Y=(0,v.useCallback)(function(){s.current&&("mozHasAudio"in s.current?X(s.current.mozHasAudio):"webkitAudioDecodedByteCount"in s.current?X(s.current.webkitAudioDecodedByteCount>0):X(!1))},[]),G=function(d){var f;(f=u.onCanPlayThrough)===null||f===void 0||f.call(u,d),setTimeout(function(){Y()},100)},un=function(d){var f;s.current&&B(s.current.duration),(f=u.onLoadedMetadata)===null||f===void 0||f.call(u,d)},dn=function(){s.current&&(C?s.current.pause():s.current.play(),k(!C))},gn=function(d){var f;k(!0),(f=u.onPlay)===null||f===void 0||f.call(u,d)},J=function(d){var f;k(!1),(f=u.onPause)===null||f===void 0||f.call(u,d)},pn=function(){s.current&&s.current.requestFullscreen&&s.current.requestFullscreen()},fn=function(d){var f,vn;k(!1),z((f=s.current)===null||f===void 0?void 0:f.duration),(vn=u.onEnded)===null||vn===void 0||vn.call(u,d)},bn=function(){L&&!I.current&&(C||(s.current.play(),I.current=!0))},Q=function(){L&&I.current&&(I.current=!1)},i=function(d){s.current&&(s.current.currentTime=d,z(d))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(A,{}),(0,p.jsx)("div",{className:M()("".concat(y,"-video-container"),P),style:E,children:(0,p.jsxs)("div",{className:"".concat(y,"-video-content"),onMouseEnter:bn,onMouseLeave:Q,children:[a.poster&&(0,p.jsx)("img",{src:a.poster,alt:"poster",className:"".concat(y,"-video-poster")}),(0,p.jsx)("video",j()(j()({ref:N},u),{},{controls:!1,muted:cn,className:"".concat(y,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:un,onCanPlayThrough:G,onPlay:gn,onPause:J,onEnded:fn})),O&&(0,p.jsx)(en.Z,{className:"".concat(y,"-video-controller-wrapper"),isPlaying:C,currentTime:o,duration:W,enableVolume:Pn,muted:cn,enableFullscreen:!0,onMute:function(){return mn(!cn)},onPlayPause:dn,onFullscreen:pn,onProgressClick:i}),n]})})]})}),w=l}}]);
