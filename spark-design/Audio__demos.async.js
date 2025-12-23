"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[158],{1815:function(G,P,e){e.r(P);var v=e(42425),l=e(52676);P.default=function(){return(0,l.jsx)(v.Z,{src:"https://dashscope.oss-cn-beijing.aliyuncs.com/samples/audio/qwen3-tts/KiKi.wav",style:{width:"100%",height:"100%"}})}},44739:function(G,P,e){e.d(P,{Z:function(){return u}});var v=e(51886),l=e(94376),U=e(32102),m=e(36891),W=e(4797),K=e(29171),g=e(73981),$=e(99670),S=e(75271),B=e(53649),L=e.n(B),O=e(75469),R,z=(0,O.Z)(R||(R=L()([`
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
`])),function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix}),r=e(52676),M=function(n){var i=Math.floor(n/60),o=Math.floor(n%60);return"".concat(i.toString().padStart(2,"0"),":").concat(o.toString().padStart(2,"0"))},a=function(n){var i=n.className,o=n.isPlaying,h=n.onPlayPause,A=n.onFullscreen,F=n.onProgressClick,p=n.enableVolume,T=p===void 0?!1:p,N=n.enableFullscreen,x=n.muted,y=x===void 0?!0:x,D=n.onMute,b=z(),V=(0,v.getCommonConfig)(),s=V.sparkPrefix,C=(0,S.useMemo)(function(){return M(n.currentTime||0)},[n.currentTime]),Z=(0,S.useMemo)(function(){return M(n.duration||0)},[n.duration]),H=(0,S.useMemo)(function(){return Math.min((n.currentTime||0)/(n.duration||.01)*100,100)},[n.currentTime,n.duration]),J=function(I){if(!(!F||!n.duration)){var j=I.currentTarget.getBoundingClientRect(),E=I.clientX-j.left,Q=j.width,X=E/Q,k=X*n.duration,Y=Math.max(0,Math.min(k,n.duration));F(Y)}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{}),(0,r.jsxs)("div",{className:"".concat(s,"-media-player-controller ").concat(i||""),children:[(0,r.jsx)(l.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:o?(0,r.jsx)(m.Z,{}):(0,r.jsx)(W.Z,{}),onClick:h}),(0,r.jsx)(l.Z,{bordered:!1,size:"small",shape:"default",disabled:!T,icon:T&&y?(0,r.jsx)(K.Z,{}):(0,r.jsx)(g.Z,{}),onClick:D}),(0,r.jsx)("span",{className:"".concat(s,"-media-time-text"),children:C}),(0,r.jsx)("div",{className:"".concat(s,"-media-progress-container"),onClick:J,children:(0,r.jsx)(U.Z,{className:"".concat(s,"-media-progress-bar"),percent:H,showInfo:!1})}),(0,r.jsx)("span",{className:"".concat(s,"-media-time-text"),children:Z}),N&&(0,r.jsx)(l.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,r.jsx)($.Z,{}),onClick:A})]})]})},u=a},42425:function(G,P,e){e.d(P,{Z:function(){return i}});var v=e(26068),l=e.n(v),U=e(48305),m=e.n(U),W=e(67825),K=e.n(W),g=e(75271),$=e(82187),S=e.n($),B=e(44739),L=e(56630),O=e(51886),R=e(53649),z=e.n(R),r=e(75469),M,a=(0,r.Z)(M||(M=z()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix}),u=e(52676),t=["controls","className","style"],n=(0,g.forwardRef)(function(o,h){var A=o.controls,F=o.className,p=o.style,T=K()(o,t),N=(0,O.getCommonConfig)(),x=N.sparkPrefix,y=a(),D=(0,g.useState)(0),b=m()(D,2),V=b[0],s=b[1],C=(0,g.useState)(0),Z=m()(C,2),H=Z[0],J=Z[1],w=(0,g.useState)(!1),I=m()(w,2),j=I[0],E=I[1],Q=(0,L.Z)(o,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!1}),X=m()(Q,2),k=X[0],Y=X[1],c=(0,g.useRef)(null),q=function(f){c.current=f,h&&(typeof h=="function"?h(f):h.current=f)};(0,g.useEffect)(function(){var d;return j&&(d=setInterval(function(){c.current&&s(c.current.currentTime)},16)),function(){d&&clearInterval(d)}},[j]);var _=function(){c.current&&J(c.current.duration)},ee=function(){c.current&&(j?c.current.pause():c.current.play(),E(!j))},ne=function(){E(!0)},ae=function(){E(!1)},te=function(){var f;E(!1),s(((f=c.current)===null||f===void 0?void 0:f.duration)||0)},re=function(f){c.current&&(c.current.currentTime=f,s(f))};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(y,{}),(0,u.jsxs)("div",{className:S()("".concat(x,"-audio-container"),F),style:p,children:[(0,u.jsx)("audio",l()(l()({ref:q},T),{},{muted:k,className:"".concat(x,"-audio-element"),onLoadedMetadata:_,onPlay:ne,onPause:ae,onEnded:te})),(0,u.jsx)(B.Z,{className:"".concat(x,"-audio-controller-wrapper"),isPlaying:j,currentTime:V,duration:H,enableVolume:!0,enableFullscreen:!1,muted:k,onMute:function(){return Y(!k)},onPlayPause:ee,onProgressClick:re})]})]})}),i=n},56630:function(G,P,e){e.d(P,{Z:function(){return M}});var v=e(15767),l=e(75271),U=function(a){return a!==null&&typeof a=="object"},m=function(a){return typeof a=="function"},W=function(a){return typeof a=="string"},K=function(a){return typeof a=="boolean"},g=function(a){return typeof a=="number"},$=function(a){return typeof a=="undefined"},S=!1,B=S;function L(a){B&&(m(a)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof a)));var u=(0,l.useRef)(a);u.current=(0,l.useMemo)(function(){return a},[a]);var t=(0,l.useRef)();return t.current||(t.current=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return u.current.apply(this,n)}),t.current}var O=L,R=function(){var a=(0,v.CR)((0,l.useState)({}),2),u=a[1];return(0,l.useCallback)(function(){return u({})},[])},z=R;function r(a,u){u===void 0&&(u={});var t=a!=null?a:{},n=u.defaultValue,i=u.defaultValuePropName,o=i===void 0?"defaultValue":i,h=u.valuePropName,A=h===void 0?"value":h,F=u.trigger,p=F===void 0?"onChange":F,T=t[A],N=Object.prototype.hasOwnProperty.call(t,A),x=(0,l.useMemo)(function(){return N?T:Object.prototype.hasOwnProperty.call(t,o)?t[o]:n},[]),y=(0,l.useRef)(x);N&&(y.current=T);var D=z();function b(V){for(var s=[],C=1;C<arguments.length;C++)s[C-1]=arguments[C];var Z=m(V)?V(y.current):V;N||(y.current=Z,D()),t[p]&&t[p].apply(t,(0,v.ev)([Z],(0,v.CR)(s),!1))}return[y.current,O(b)]}var M=r}}]);
