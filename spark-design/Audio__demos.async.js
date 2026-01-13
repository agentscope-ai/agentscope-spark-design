"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[158],{19634:function(L,d,e){e.r(d);var c=e(8639),u=e(52676);d.default=function(){return(0,u.jsx)(c.Z,{src:"https://dashscope.oss-cn-beijing.aliyuncs.com/samples/audio/qwen3-tts/KiKi.wav",style:{width:"100%",height:"100%"}})}},74659:function(L,d,e){e.d(d,{Z:function(){return h}});var c=e(60213),u=e(94662),j=e(22576),g=e(79055),v=e(98539),C=e(87539),a=e(43339),S=e(14395),l=e(75271),m=e(53649),P=e.n(m),A=e(30764),Z,O=(0,A.Z)(Z||(Z=P()([`
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
`])),function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix}),t=e(52676),p=function(n){var N=Math.floor(n/60),r=Math.floor(n%60);return"".concat(N.toString().padStart(2,"0"),":").concat(r.toString().padStart(2,"0"))},V=function(n){var N=n.className,r=n.isPlaying,F=n.onPlayPause,U=n.onFullscreen,T=n.onProgressClick,R=n.enableVolume,o=R===void 0?!1:R,B=n.enableFullscreen,D=n.muted,k=D===void 0?!0:D,X=n.onMute,W=O(),G=(0,c.getCommonConfig)(),M=G.sparkPrefix,H=(0,l.useMemo)(function(){return p(n.currentTime||0)},[n.currentTime]),K=(0,l.useMemo)(function(){return p(n.duration||0)},[n.duration]),J=(0,l.useMemo)(function(){return Math.min((n.currentTime||0)/(n.duration||.01)*100,100)},[n.currentTime,n.duration]),Q=function(I){if(!(!T||!n.duration)){var E=I.currentTarget.getBoundingClientRect(),b=I.clientX-E.left,Y=E.width,$=b/Y,z=$*n.duration,w=Math.max(0,Math.min(z,n.duration));T(w)}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(W,{}),(0,t.jsxs)("div",{className:"".concat(M,"-media-player-controller ").concat(N||""),children:[(0,t.jsx)(u.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:r?(0,t.jsx)(g.Z,{}):(0,t.jsx)(v.Z,{}),onClick:F}),(0,t.jsx)(u.Z,{bordered:!1,size:"small",shape:"default",disabled:!o,icon:o&&k?(0,t.jsx)(C.Z,{}):(0,t.jsx)(a.Z,{}),onClick:X}),(0,t.jsx)("span",{className:"".concat(M,"-media-time-text"),children:H}),(0,t.jsx)("div",{className:"".concat(M,"-media-progress-container"),onClick:Q,children:(0,t.jsx)(j.Z,{className:"".concat(M,"-media-progress-bar"),percent:J,showInfo:!1})}),(0,t.jsx)("span",{className:"".concat(M,"-media-time-text"),children:K}),B&&(0,t.jsx)(u.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,t.jsx)(S.Z,{}),onClick:U})]})]})},h=V},8639:function(L,d,e){e.d(d,{Z:function(){return N}});var c=e(26068),u=e.n(c),j=e(48305),g=e.n(j),v=e(67825),C=e.n(v),a=e(75271),S=e(82187),l=e.n(S),m=e(74659),P=e(32547),A=e(60213),Z=e(53649),O=e.n(Z),t=e(30764),p,V=(0,t.Z)(p||(p=O()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix}),h=e(52676),i=["controls","className","style"],n=(0,a.forwardRef)(function(r,F){var U=r.controls,T=r.className,R=r.style,o=C()(r,i),B=(0,A.getCommonConfig)(),D=B.sparkPrefix,k=V(),X=(0,a.useState)(0),W=g()(X,2),G=W[0],M=W[1],H=(0,a.useState)(0),K=g()(H,2),J=K[0],Q=K[1],_=(0,a.useState)(!1),I=g()(_,2),E=I[0],b=I[1],Y=(0,P.Z)(r,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!1}),$=g()(Y,2),z=$[0],w=$[1],x=(0,a.useRef)(null),ee=function(f){x.current=f,F&&(typeof F=="function"?F(f):F.current=f)};(0,a.useEffect)(function(){var y;return E&&(y=setInterval(function(){x.current&&M(x.current.currentTime)},16)),function(){y&&clearInterval(y)}},[E]);var ne=function(f){var s;x.current&&Q(x.current.duration),(s=o.onLoadedMetadata)===null||s===void 0||s.call(o,f)},ae=function(){x.current&&(E?x.current.pause():x.current.play(),b(!E))},te=function(f){var s;b(!0),(s=o.onPlay)===null||s===void 0||s.call(o,f)},re=function(f){var s;b(!1),(s=o.onPause)===null||s===void 0||s.call(o,f)},ue=function(f){var s,q;b(!1),M(((s=x.current)===null||s===void 0?void 0:s.duration)||0),(q=o.onEnded)===null||q===void 0||q.call(o,f)},oe=function(f){x.current&&(x.current.currentTime=f,M(f))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(k,{}),(0,h.jsxs)("div",{className:l()("".concat(D,"-audio-container"),T),style:R,children:[(0,h.jsx)("audio",u()(u()({ref:ee},o),{},{muted:z,className:"".concat(D,"-audio-element"),onLoadedMetadata:ne,onPlay:te,onPause:re,onEnded:ue})),(0,h.jsx)(m.Z,{className:"".concat(D,"-audio-controller-wrapper"),isPlaying:E,currentTime:G,duration:J,enableVolume:!0,enableFullscreen:!1,muted:z,onMute:function(){return w(!z)},onPlayPause:ae,onProgressClick:oe})]})]})}),N=n},32547:function(L,d,e){e.d(d,{Z:function(){return S}});var c=e(15767),u=e(75271),j=e(15478),g=e(29663),v=function(){var l=(0,c.CR)((0,u.useState)({}),2),m=l[1];return(0,u.useCallback)(function(){return m({})},[])},C=v;function a(l,m){m===void 0&&(m={});var P=l!=null?l:{},A=m.defaultValue,Z=m.defaultValuePropName,O=Z===void 0?"defaultValue":Z,t=m.valuePropName,p=t===void 0?"value":t,V=m.trigger,h=V===void 0?"onChange":V,i=P[p],n=Object.prototype.hasOwnProperty.call(P,p),N=(0,u.useMemo)(function(){return n?i:Object.prototype.hasOwnProperty.call(P,O)?P[O]:A},[]),r=(0,u.useRef)(N);n&&(r.current=i);var F=C();function U(T){for(var R=[],o=1;o<arguments.length;o++)R[o-1]=arguments[o];var B=(0,j.mf)(T)?T(r.current):T;n||(r.current=B,F()),P[h]&&P[h].apply(P,(0,c.ev)([B],(0,c.CR)(R),!1))}return[r.current,(0,g.Z)(U)]}var S=a},29663:function(L,d,e){var c=e(75271),u=e(15478),j=e(90718),g=function(v){j.Z&&((0,u.mf)(v)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof v)));var C=(0,c.useRef)(v);C.current=(0,c.useMemo)(function(){return v},[v]);var a=(0,c.useRef)(void 0);return a.current||(a.current=function(){for(var S=[],l=0;l<arguments.length;l++)S[l]=arguments[l];return C.current.apply(this,S)}),a.current};d.Z=g},15478:function(L,d,e){e.d(d,{G7:function(){return C},mf:function(){return u}});var c=function(a){return a!==null&&typeof a=="object"},u=function(a){return typeof a=="function"},j=function(a){return typeof a=="string"},g=function(a){return typeof a=="boolean"},v=function(a){return typeof a=="number"},C=function(a){return typeof a=="undefined"}},90718:function(L,d){var e=!1;d.Z=e}}]);
