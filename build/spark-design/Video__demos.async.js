"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[991],{96532:function(N,v,n){n.r(v);var m=n(70588),i=n(52676);v.default=function(){return(0,i.jsx)(m.Z,{src:"https://cloud.video.taobao.com/vod/ObvVc91XA3OJXnFHl0KVhBo_60LrKAROCojWxB_EAYs.mp4",controls:!0,style:{width:"100%",height:"100%"}})}},74659:function(N,v,n){n.d(v,{Z:function(){return g}});var m=n(60213),i=n(94662),b=n(22576),P=n(79055),h=n(98539),C=n(87539),t=n(43339),j=n(14395),l=n(75271),x=n(53649),y=n.n(x),k=n(30764),R,O=(0,k.Z)(R||(R=y()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix}),o=n(52676),E=function(r){var V=Math.floor(r/60),e=Math.floor(r%60);return"".concat(V.toString().padStart(2,"0"),":").concat(e.toString().padStart(2,"0"))},Z=function(r){var V=r.className,e=r.isPlaying,F=r.onPlayPause,z=r.onFullscreen,p=r.onProgressClick,S=r.enableVolume,M=S===void 0?!1:S,B=r.enableFullscreen,W=r.muted,d=W===void 0?!0:W,G=r.onMute,A=O(),J=(0,m.getCommonConfig)(),L=J.sparkPrefix,$=(0,l.useMemo)(function(){return E(r.currentTime||0)},[r.currentTime]),Y=(0,l.useMemo)(function(){return E(r.duration||0)},[r.duration]),I=(0,l.useMemo)(function(){return Math.min((r.currentTime||0)/(r.duration||.01)*100,100)},[r.currentTime,r.duration]),Q=function(U){if(!(!p||!r.duration)){var K=U.currentTarget.getBoundingClientRect(),q=U.clientX-K.left,H=K.width,T=q/H,D=T*r.duration,_=Math.max(0,Math.min(D,r.duration));p(_)}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(A,{}),(0,o.jsxs)("div",{className:"".concat(L,"-media-player-controller ").concat(V||""),children:[(0,o.jsx)(i.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:e?(0,o.jsx)(P.Z,{}):(0,o.jsx)(h.Z,{}),onClick:F}),(0,o.jsx)(i.Z,{bordered:!1,size:"small",shape:"default",disabled:!M,icon:M&&d?(0,o.jsx)(C.Z,{}):(0,o.jsx)(t.Z,{}),onClick:G}),(0,o.jsx)("span",{className:"".concat(L,"-media-time-text"),children:$}),(0,o.jsx)("div",{className:"".concat(L,"-media-progress-container"),onClick:Q,children:(0,o.jsx)(b.Z,{className:"".concat(L,"-media-progress-bar"),percent:I,showInfo:!1})}),(0,o.jsx)("span",{className:"".concat(L,"-media-time-text"),children:Y}),B&&(0,o.jsx)(i.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,o.jsx)(j.Z,{}),onClick:z})]})]})},g=Z},70588:function(N,v,n){n.d(v,{Z:function(){return V}});var m=n(26068),i=n.n(m),b=n(48305),P=n.n(b),h=n(67825),C=n.n(h),t=n(75271),j=n(82187),l=n.n(j),x=n(74659),y=n(32547),k=n(60213),R=n(53649),O=n.n(R),o=n(30764),E,Z=(0,o.Z)(E||(E=O()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix}),g=n(52676),s=["controls","mouseEnterAutoPlay","children","className","style"],r=(0,t.forwardRef)(function(e,F){var z=e.controls,p=e.mouseEnterAutoPlay,S=p===void 0?!1:p,M=e.children,B=e.className,W=e.style,d=C()(e,s),G=(0,k.getCommonConfig)(),A=G.sparkPrefix,J=Z(),L=(0,t.useState)(0),$=P()(L,2),Y=$[0],I=$[1],Q=(0,t.useState)(0),w=P()(Q,2),U=w[0],K=w[1],q=(0,t.useState)(!1),H=P()(q,2),T=H[0],D=H[1],_=(0,y.Z)(e,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),re=P()(_,2),ee=re[0],ue=re[1],ie=(0,t.useState)(!1),ae=P()(ie,2),le=ae[0],ne=ae[1],a=(0,t.useRef)(null),X=(0,t.useRef)(!1),oe=(0,t.useRef)(!0),se=function(c){a.current=c,F&&(typeof F=="function"?F(c):F.current=c)};(0,t.useEffect)(function(){if(oe.current){oe.current=!1;return}a.current&&d.src&&a.current.load()},[d.src]),(0,t.useEffect)(function(){var f;return T&&(f=setInterval(function(){a.current&&I(a.current.currentTime)},16)),function(){f&&clearInterval(f)}},[T]);var ce=(0,t.useCallback)(function(){a.current&&("mozHasAudio"in a.current?ne(a.current.mozHasAudio):"webkitAudioDecodedByteCount"in a.current?ne(a.current.webkitAudioDecodedByteCount>0):ne(!1))},[]),de=function(c){var u;(u=d.onCanPlayThrough)===null||u===void 0||u.call(d,c),setTimeout(function(){ce()},100)},fe=function(c){var u;a.current&&K(a.current.duration),(u=d.onLoadedMetadata)===null||u===void 0||u.call(d,c)},ve=function(){a.current&&(T?a.current.pause():a.current.play(),D(!T))},me=function(c){var u;D(!0),(u=d.onPlay)===null||u===void 0||u.call(d,c)},ge=function(c){var u;D(!1),(u=d.onPause)===null||u===void 0||u.call(d,c)},Pe=function(){a.current&&a.current.requestFullscreen&&a.current.requestFullscreen()},he=function(c){var u,te;D(!1),I((u=a.current)===null||u===void 0?void 0:u.duration),(te=d.onEnded)===null||te===void 0||te.call(d,c)},xe=function(){S&&!X.current&&(T||(a.current.play(),X.current=!0))},ye=function(){S&&X.current&&(X.current=!1)},Ce=function(c){a.current&&(a.current.currentTime=c,I(c))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(J,{}),(0,g.jsx)("div",{className:l()("".concat(A,"-video-container"),B),style:W,children:(0,g.jsxs)("div",{className:"".concat(A,"-video-content"),onMouseEnter:xe,onMouseLeave:ye,children:[e.poster&&(0,g.jsx)("img",{src:e.poster,alt:"poster",className:"".concat(A,"-video-poster")}),(0,g.jsx)("video",i()(i()({ref:se},d),{},{controls:!1,muted:ee,className:"".concat(A,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:fe,onCanPlayThrough:de,onPlay:me,onPause:ge,onEnded:he})),z&&(0,g.jsx)(x.Z,{className:"".concat(A,"-video-controller-wrapper"),isPlaying:T,currentTime:Y,duration:U,enableVolume:le,muted:ee,enableFullscreen:!0,onMute:function(){return ue(!ee)},onPlayPause:ve,onFullscreen:Pe,onProgressClick:Ce}),M]})})]})}),V=r},32547:function(N,v,n){n.d(v,{Z:function(){return j}});var m=n(15767),i=n(75271),b=n(15478),P=n(29663),h=function(){var l=(0,m.CR)((0,i.useState)({}),2),x=l[1];return(0,i.useCallback)(function(){return x({})},[])},C=h;function t(l,x){x===void 0&&(x={});var y=l!=null?l:{},k=x.defaultValue,R=x.defaultValuePropName,O=R===void 0?"defaultValue":R,o=x.valuePropName,E=o===void 0?"value":o,Z=x.trigger,g=Z===void 0?"onChange":Z,s=y[E],r=Object.prototype.hasOwnProperty.call(y,E),V=(0,i.useMemo)(function(){return r?s:Object.prototype.hasOwnProperty.call(y,O)?y[O]:k},[]),e=(0,i.useRef)(V);r&&(e.current=s);var F=C();function z(p){for(var S=[],M=1;M<arguments.length;M++)S[M-1]=arguments[M];var B=(0,b.mf)(p)?p(e.current):p;r||(e.current=B,F()),y[g]&&y[g].apply(y,(0,m.ev)([B],(0,m.CR)(S),!1))}return[e.current,(0,P.Z)(z)]}var j=t},29663:function(N,v,n){var m=n(75271),i=n(15478),b=n(90718),P=function(h){b.Z&&((0,i.mf)(h)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof h)));var C=(0,m.useRef)(h);C.current=(0,m.useMemo)(function(){return h},[h]);var t=(0,m.useRef)(void 0);return t.current||(t.current=function(){for(var j=[],l=0;l<arguments.length;l++)j[l]=arguments[l];return C.current.apply(this,j)}),t.current};v.Z=P},15478:function(N,v,n){n.d(v,{G7:function(){return C},mf:function(){return i}});var m=function(t){return t!==null&&typeof t=="object"},i=function(t){return typeof t=="function"},b=function(t){return typeof t=="string"},P=function(t){return typeof t=="boolean"},h=function(t){return typeof t=="number"},C=function(t){return typeof t=="undefined"}},90718:function(N,v){var n=!1;v.Z=n}}]);
