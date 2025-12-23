"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[991],{57537:function(Y,y,n){n.r(y);var g=n(28422),l=n(52676);y.default=function(){return(0,l.jsx)(g.Z,{src:"https://cloud.video.taobao.com/vod/ObvVc91XA3OJXnFHl0KVhBo_60LrKAROCojWxB_EAYs.mp4",controls:!0,style:{width:"100%",height:"100%"}})}},44739:function(Y,y,n){n.d(y,{Z:function(){return o}});var g=n(51886),l=n(94376),I=n(32102),f=n(36891),W=n(4797),U=n(29171),d=n(73981),K=n(99670),M=n(75271),B=n(53649),Z=n.n(B),L=n(75469),V,O=(0,L.Z)(V||(V=Z()([`
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
`])),function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix}),i=n(52676),F=function(t){var c=Math.floor(t/60),e=Math.floor(t%60);return"".concat(c.toString().padStart(2,"0"),":").concat(e.toString().padStart(2,"0"))},r=function(t){var c=t.className,e=t.isPlaying,h=t.onPlayPause,A=t.onFullscreen,C=t.onProgressClick,p=t.enableVolume,S=p===void 0?!1:p,T=t.enableFullscreen,N=t.muted,j=N===void 0?!0:N,D=t.onMute,P=O(),E=(0,g.getCommonConfig)(),v=E.sparkPrefix,x=(0,M.useMemo)(function(){return F(t.currentTime||0)},[t.currentTime]),k=(0,M.useMemo)(function(){return F(t.duration||0)},[t.duration]),z=(0,M.useMemo)(function(){return Math.min((t.currentTime||0)/(t.duration||.01)*100,100)},[t.currentTime,t.duration]),G=function(X){if(!(!C||!t.duration)){var $=X.currentTarget.getBoundingClientRect(),w=X.clientX-$.left,H=$.width,b=w/H,R=b*t.duration,q=Math.max(0,Math.min(R,t.duration));C(q)}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(P,{}),(0,i.jsxs)("div",{className:"".concat(v,"-media-player-controller ").concat(c||""),children:[(0,i.jsx)(l.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:e?(0,i.jsx)(f.Z,{}):(0,i.jsx)(W.Z,{}),onClick:h}),(0,i.jsx)(l.Z,{bordered:!1,size:"small",shape:"default",disabled:!S,icon:S&&j?(0,i.jsx)(U.Z,{}):(0,i.jsx)(d.Z,{}),onClick:D}),(0,i.jsx)("span",{className:"".concat(v,"-media-time-text"),children:x}),(0,i.jsx)("div",{className:"".concat(v,"-media-progress-container"),onClick:G,children:(0,i.jsx)(I.Z,{className:"".concat(v,"-media-progress-bar"),percent:z,showInfo:!1})}),(0,i.jsx)("span",{className:"".concat(v,"-media-time-text"),children:k}),T&&(0,i.jsx)(l.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,i.jsx)(K.Z,{}),onClick:A})]})]})},o=r},28422:function(Y,y,n){n.d(y,{Z:function(){return c}});var g=n(26068),l=n.n(g),I=n(48305),f=n.n(I),W=n(67825),U=n.n(W),d=n(75271),K=n(82187),M=n.n(K),B=n(44739),Z=n(56630),L=n(51886),V=n(53649),O=n.n(V),i=n(75469),F,r=(0,i.Z)(F||(F=O()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),o=n(52676),a=["controls","mouseEnterAutoPlay","children","className","style"],t=(0,d.forwardRef)(function(e,h){var A=e.controls,C=e.mouseEnterAutoPlay,p=C===void 0?!1:C,S=e.children,T=e.className,N=e.style,j=U()(e,a),D=(0,L.getCommonConfig)(),P=D.sparkPrefix,E=r(),v=(0,d.useState)(0),x=f()(v,2),k=x[0],z=x[1],G=(0,d.useState)(0),Q=f()(G,2),X=Q[0],$=Q[1],w=(0,d.useState)(!1),H=f()(w,2),b=H[0],R=H[1],q=(0,Z.Z)(e,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),ne=f()(q,2),_=ne[0],re=ne[1],ae=(0,d.useState)(!1),te=f()(ae,2),oe=te[0],ee=te[1],u=(0,d.useRef)(null),J=(0,d.useRef)(!1),ue=function(m){u.current=m,h&&(typeof h=="function"?h(m):h.current=m)};(0,d.useEffect)(function(){var s;return b&&(s=setInterval(function(){u.current&&z(u.current.currentTime)},16)),function(){s&&clearInterval(s)}},[b]);var ie=function(){return window.videoRef=u.current,u.current?"mozHasAudio"in u.current?(ee(u.current.mozHasAudio),!0):"webkitAudioDecodedByteCount"in u.current?(ee(u.current.webkitAudioDecodedByteCount>0),!0):(ee(!1),!1):!1},le=function(){u.current&&$(u.current.duration)},se=function(){u.current&&(b?u.current.pause():u.current.play(),R(!b))},ce=function(){R(!0)},de=function(){R(!1)},fe=function(){u.current&&u.current.requestFullscreen&&u.current.requestFullscreen()},ve=function(){var m;R(!1),z((m=u.current)===null||m===void 0?void 0:m.duration)},me=function(){p&&!J.current&&(b||(u.current.play(),J.current=!0))},ge=function(){p&&J.current&&(J.current=!1)},he=function(m){u.current&&(u.current.currentTime=m,z(m))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E,{}),(0,o.jsx)("div",{className:M()("".concat(P,"-video-container"),T),style:N,children:(0,o.jsxs)("div",{className:"".concat(P,"-video-content"),onMouseEnter:me,onMouseLeave:ge,children:[e.poster&&(0,o.jsx)("img",{src:e.poster,alt:"poster",className:"".concat(P,"-video-poster")}),(0,o.jsx)("video",l()(l()({ref:ue},j),{},{controls:!1,muted:_,className:"".concat(P,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:le,onCanPlayThrough:ie,onPlay:ce,onPause:de,onEnded:ve})),A&&(0,o.jsx)(B.Z,{className:"".concat(P,"-video-controller-wrapper"),isPlaying:b,currentTime:k,duration:X,enableVolume:oe,muted:_,onMute:function(){return re(!_)},onPlayPause:se,onFullscreen:fe,onProgressClick:he}),S]})})]})}),c=t},56630:function(Y,y,n){n.d(y,{Z:function(){return F}});var g=n(15767),l=n(75271),I=function(r){return r!==null&&typeof r=="object"},f=function(r){return typeof r=="function"},W=function(r){return typeof r=="string"},U=function(r){return typeof r=="boolean"},d=function(r){return typeof r=="number"},K=function(r){return typeof r=="undefined"},M=!1,B=M;function Z(r){B&&(f(r)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof r)));var o=(0,l.useRef)(r);o.current=(0,l.useMemo)(function(){return r},[r]);var a=(0,l.useRef)();return a.current||(a.current=function(){for(var t=[],c=0;c<arguments.length;c++)t[c]=arguments[c];return o.current.apply(this,t)}),a.current}var L=Z,V=function(){var r=(0,g.CR)((0,l.useState)({}),2),o=r[1];return(0,l.useCallback)(function(){return o({})},[])},O=V;function i(r,o){o===void 0&&(o={});var a=r!=null?r:{},t=o.defaultValue,c=o.defaultValuePropName,e=c===void 0?"defaultValue":c,h=o.valuePropName,A=h===void 0?"value":h,C=o.trigger,p=C===void 0?"onChange":C,S=a[A],T=Object.prototype.hasOwnProperty.call(a,A),N=(0,l.useMemo)(function(){return T?S:Object.prototype.hasOwnProperty.call(a,e)?a[e]:t},[]),j=(0,l.useRef)(N);T&&(j.current=S);var D=O();function P(E){for(var v=[],x=1;x<arguments.length;x++)v[x-1]=arguments[x];var k=f(E)?E(j.current):E;T||(j.current=k,D()),a[p]&&a[p].apply(a,(0,g.ev)([k],(0,g.CR)(v),!1))}return[j.current,L(P)]}var F=i}}]);
