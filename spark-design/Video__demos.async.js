"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[991],{96532:function(N,f,n){n.r(f);var v=n(70588),i=n(52676);f.default=function(){return(0,i.jsx)(v.Z,{src:"https://cloud.video.taobao.com/vod/ObvVc91XA3OJXnFHl0KVhBo_60LrKAROCojWxB_EAYs.mp4",controls:!0,style:{width:"100%",height:"100%"}})}},74659:function(N,f,n){n.d(f,{Z:function(){return m}});var v=n(60213),i=n(94662),j=n(22576),P=n(79055),h=n(98539),C=n(87539),t=n(43339),b=n(14395),l=n(75271),x=n(53649),y=n.n(x),k=n(30764),V,O=(0,k.Z)(V||(V=y()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix}),a=n(52676),E=function(r){var A=Math.floor(r/60),e=Math.floor(r%60);return"".concat(A.toString().padStart(2,"0"),":").concat(e.toString().padStart(2,"0"))},Z=function(r){var A=r.className,e=r.isPlaying,F=r.onPlayPause,z=r.onFullscreen,p=r.onProgressClick,S=r.enableVolume,M=S===void 0?!1:S,B=r.enableFullscreen,W=r.muted,g=W===void 0?!0:W,G=r.onMute,R=O(),J=(0,v.getCommonConfig)(),L=J.sparkPrefix,$=(0,l.useMemo)(function(){return E(r.currentTime||0)},[r.currentTime]),Y=(0,l.useMemo)(function(){return E(r.duration||0)},[r.duration]),I=(0,l.useMemo)(function(){return Math.min((r.currentTime||0)/(r.duration||.01)*100,100)},[r.currentTime,r.duration]),Q=function(U){if(!(!p||!r.duration)){var K=U.currentTarget.getBoundingClientRect(),q=U.clientX-K.left,X=K.width,T=q/X,D=T*r.duration,_=Math.max(0,Math.min(D,r.duration));p(_)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(R,{}),(0,a.jsxs)("div",{className:"".concat(L,"-media-player-controller ").concat(A||""),children:[(0,a.jsx)(i.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:e?(0,a.jsx)(P.Z,{}):(0,a.jsx)(h.Z,{}),onClick:F}),(0,a.jsx)(i.Z,{bordered:!1,size:"small",shape:"default",disabled:!M,icon:M&&g?(0,a.jsx)(C.Z,{}):(0,a.jsx)(t.Z,{}),onClick:G}),(0,a.jsx)("span",{className:"".concat(L,"-media-time-text"),children:$}),(0,a.jsx)("div",{className:"".concat(L,"-media-progress-container"),onClick:Q,children:(0,a.jsx)(j.Z,{className:"".concat(L,"-media-progress-bar"),percent:I,showInfo:!1})}),(0,a.jsx)("span",{className:"".concat(L,"-media-time-text"),children:Y}),B&&(0,a.jsx)(i.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,a.jsx)(b.Z,{}),onClick:z})]})]})},m=Z},70588:function(N,f,n){n.d(f,{Z:function(){return A}});var v=n(26068),i=n.n(v),j=n(48305),P=n.n(j),h=n(67825),C=n.n(h),t=n(75271),b=n(82187),l=n.n(b),x=n(74659),y=n(32547),k=n(60213),V=n(53649),O=n.n(V),a=n(30764),E,Z=(0,a.Z)(E||(E=O()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),m=n(52676),s=["controls","mouseEnterAutoPlay","children","className","style"],r=(0,t.forwardRef)(function(e,F){var z=e.controls,p=e.mouseEnterAutoPlay,S=p===void 0?!1:p,M=e.children,B=e.className,W=e.style,g=C()(e,s),G=(0,k.getCommonConfig)(),R=G.sparkPrefix,J=Z(),L=(0,t.useState)(0),$=P()(L,2),Y=$[0],I=$[1],Q=(0,t.useState)(0),w=P()(Q,2),U=w[0],K=w[1],q=(0,t.useState)(!1),X=P()(q,2),T=X[0],D=X[1],_=(0,y.Z)(e,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),re=P()(_,2),ee=re[0],oe=re[1],ue=(0,t.useState)(!1),ae=P()(ue,2),ie=ae[0],ne=ae[1],o=(0,t.useRef)(null),H=(0,t.useRef)(!1),le=function(c){o.current=c,F&&(typeof F=="function"?F(c):F.current=c)};(0,t.useEffect)(function(){var d;return T&&(d=setInterval(function(){o.current&&I(o.current.currentTime)},16)),function(){d&&clearInterval(d)}},[T]);var se=function(c){var u;o.current&&("mozHasAudio"in o.current?ne(o.current.mozHasAudio):"webkitAudioDecodedByteCount"in o.current?ne(o.current.webkitAudioDecodedByteCount>0):ne(!1)),(u=g.onCanPlayThrough)===null||u===void 0||u.call(g,c)},ce=function(c){var u;o.current&&K(o.current.duration),(u=g.onLoadedMetadata)===null||u===void 0||u.call(g,c)},de=function(){o.current&&(T?o.current.pause():o.current.play(),D(!T))},fe=function(c){var u;D(!0),(u=g.onPlay)===null||u===void 0||u.call(g,c)},ve=function(c){var u;D(!1),(u=g.onPause)===null||u===void 0||u.call(g,c)},me=function(){o.current&&o.current.requestFullscreen&&o.current.requestFullscreen()},ge=function(c){var u,te;D(!1),I((u=o.current)===null||u===void 0?void 0:u.duration),(te=g.onEnded)===null||te===void 0||te.call(g,c)},Pe=function(){S&&!H.current&&(T||(o.current.play(),H.current=!0))},he=function(){S&&H.current&&(H.current=!1)},xe=function(c){o.current&&(o.current.currentTime=c,I(c))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(J,{}),(0,m.jsx)("div",{className:l()("".concat(R,"-video-container"),B),style:W,children:(0,m.jsxs)("div",{className:"".concat(R,"-video-content"),onMouseEnter:Pe,onMouseLeave:he,children:[e.poster&&(0,m.jsx)("img",{src:e.poster,alt:"poster",className:"".concat(R,"-video-poster")}),(0,m.jsx)("video",i()(i()({ref:le},g),{},{controls:!1,muted:ee,className:"".concat(R,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:ce,onCanPlayThrough:se,onPlay:fe,onPause:ve,onEnded:ge})),z&&(0,m.jsx)(x.Z,{className:"".concat(R,"-video-controller-wrapper"),isPlaying:T,currentTime:Y,duration:U,enableVolume:ie,muted:ee,enableFullscreen:!0,onMute:function(){return oe(!ee)},onPlayPause:de,onFullscreen:me,onProgressClick:xe}),M]})})]})}),A=r},32547:function(N,f,n){n.d(f,{Z:function(){return b}});var v=n(15767),i=n(75271),j=n(15478),P=n(29663),h=function(){var l=(0,v.CR)((0,i.useState)({}),2),x=l[1];return(0,i.useCallback)(function(){return x({})},[])},C=h;function t(l,x){x===void 0&&(x={});var y=l!=null?l:{},k=x.defaultValue,V=x.defaultValuePropName,O=V===void 0?"defaultValue":V,a=x.valuePropName,E=a===void 0?"value":a,Z=x.trigger,m=Z===void 0?"onChange":Z,s=y[E],r=Object.prototype.hasOwnProperty.call(y,E),A=(0,i.useMemo)(function(){return r?s:Object.prototype.hasOwnProperty.call(y,O)?y[O]:k},[]),e=(0,i.useRef)(A);r&&(e.current=s);var F=C();function z(p){for(var S=[],M=1;M<arguments.length;M++)S[M-1]=arguments[M];var B=(0,j.mf)(p)?p(e.current):p;r||(e.current=B,F()),y[m]&&y[m].apply(y,(0,v.ev)([B],(0,v.CR)(S),!1))}return[e.current,(0,P.Z)(z)]}var b=t},29663:function(N,f,n){var v=n(75271),i=n(15478),j=n(90718),P=function(h){j.Z&&((0,i.mf)(h)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof h)));var C=(0,v.useRef)(h);C.current=(0,v.useMemo)(function(){return h},[h]);var t=(0,v.useRef)(void 0);return t.current||(t.current=function(){for(var b=[],l=0;l<arguments.length;l++)b[l]=arguments[l];return C.current.apply(this,b)}),t.current};f.Z=P},15478:function(N,f,n){n.d(f,{G7:function(){return C},mf:function(){return i}});var v=function(t){return t!==null&&typeof t=="object"},i=function(t){return typeof t=="function"},j=function(t){return typeof t=="string"},P=function(t){return typeof t=="boolean"},h=function(t){return typeof t=="number"},C=function(t){return typeof t=="undefined"}},90718:function(N,f){var n=!1;f.Z=n}}]);
