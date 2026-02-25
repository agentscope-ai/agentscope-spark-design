"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[158],{19634:function(L,c,e){e.r(c);var d=e(8639),o=e(52676);c.default=function(){return(0,o.jsx)(d.Z,{src:"https://dashscope.oss-cn-beijing.aliyuncs.com/samples/audio/qwen3-tts/KiKi.wav",style:{width:"100%",height:"100%"}})}},74659:function(L,c,e){e.d(c,{Z:function(){return x}});var d=e(60213),o=e(94662),j=e(22576),P=e(79055),m=e(98539),C=e(87539),n=e(43339),S=e(14395),l=e(75271),g=e(53649),h=e.n(g),A=e(30764),R,O=(0,A.Z)(R||(R=h()([`
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
`])),function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix}),t=e(52676),p=function(a){var Z=Math.floor(a/60),r=Math.floor(a%60);return"".concat(Z.toString().padStart(2,"0"),":").concat(r.toString().padStart(2,"0"))},V=function(a){var Z=a.className,r=a.isPlaying,F=a.onPlayPause,U=a.onFullscreen,E=a.onProgressClick,N=a.enableVolume,u=N===void 0?!1:N,B=a.enableFullscreen,D=a.muted,k=D===void 0?!0:D,X=a.onMute,W=O(),G=(0,d.getCommonConfig)(),M=G.sparkPrefix,H=(0,l.useMemo)(function(){return p(a.currentTime||0)},[a.currentTime]),K=(0,l.useMemo)(function(){return p(a.duration||0)},[a.duration]),J=(0,l.useMemo)(function(){return Math.min((a.currentTime||0)/(a.duration||.01)*100,100)},[a.currentTime,a.duration]),Q=function(I){if(!(!E||!a.duration)){var T=I.currentTarget.getBoundingClientRect(),b=I.clientX-T.left,Y=T.width,$=b/Y,z=$*a.duration,w=Math.max(0,Math.min(z,a.duration));E(w)}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(W,{}),(0,t.jsxs)("div",{className:"".concat(M,"-media-player-controller ").concat(Z||""),children:[(0,t.jsx)(o.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:r?(0,t.jsx)(P.Z,{}):(0,t.jsx)(m.Z,{}),onClick:F}),(0,t.jsx)(o.Z,{bordered:!1,size:"small",shape:"default",disabled:!u,icon:u&&k?(0,t.jsx)(C.Z,{}):(0,t.jsx)(n.Z,{}),onClick:X}),(0,t.jsx)("span",{className:"".concat(M,"-media-time-text"),children:H}),(0,t.jsx)("div",{className:"".concat(M,"-media-progress-container"),onClick:Q,children:(0,t.jsx)(j.Z,{className:"".concat(M,"-media-progress-bar"),percent:J,showInfo:!1})}),(0,t.jsx)("span",{className:"".concat(M,"-media-time-text"),children:K}),B&&(0,t.jsx)(o.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,t.jsx)(S.Z,{}),onClick:U})]})]})},x=V},8639:function(L,c,e){e.d(c,{Z:function(){return Z}});var d=e(26068),o=e.n(d),j=e(48305),P=e.n(j),m=e(67825),C=e.n(m),n=e(75271),S=e(82187),l=e.n(S),g=e(74659),h=e(32547),A=e(60213),R=e(53649),O=e.n(R),t=e(30764),p,V=(0,t.Z)(p||(p=O()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix}),x=e(52676),i=["controls","className","style"],a=(0,n.forwardRef)(function(r,F){var U=r.controls,E=r.className,N=r.style,u=C()(r,i),B=(0,A.getCommonConfig)(),D=B.sparkPrefix,k=V(),X=(0,n.useState)(0),W=P()(X,2),G=W[0],M=W[1],H=(0,n.useState)(0),K=P()(H,2),J=K[0],Q=K[1],_=(0,n.useState)(!1),I=P()(_,2),T=I[0],b=I[1],Y=(0,h.Z)(r,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!1}),$=P()(Y,2),z=$[0],w=$[1],v=(0,n.useRef)(null),ee=(0,n.useRef)(!0),ne=function(f){v.current=f,F&&(typeof F=="function"?F(f):F.current=f)};(0,n.useEffect)(function(){if(ee.current){ee.current=!1;return}v.current&&u.src&&v.current.load()},[u.src]),(0,n.useEffect)(function(){var y;return T&&(y=setInterval(function(){v.current&&M(v.current.currentTime)},16)),function(){y&&clearInterval(y)}},[T]);var ae=function(f){var s;v.current&&Q(v.current.duration),(s=u.onLoadedMetadata)===null||s===void 0||s.call(u,f)},te=function(){v.current&&(T?v.current.pause():v.current.play(),b(!T))},re=function(f){var s;b(!0),(s=u.onPlay)===null||s===void 0||s.call(u,f)},ue=function(f){var s;b(!1),(s=u.onPause)===null||s===void 0||s.call(u,f)},oe=function(f){var s,q;b(!1),M(((s=v.current)===null||s===void 0?void 0:s.duration)||0),(q=u.onEnded)===null||q===void 0||q.call(u,f)},le=function(f){v.current&&(v.current.currentTime=f,M(f))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(k,{}),(0,x.jsxs)("div",{className:l()("".concat(D,"-audio-container"),E),style:N,children:[(0,x.jsx)("audio",o()(o()({ref:ne},u),{},{muted:z,className:"".concat(D,"-audio-element"),onLoadedMetadata:ae,onPlay:re,onPause:ue,onEnded:oe})),(0,x.jsx)(g.Z,{className:"".concat(D,"-audio-controller-wrapper"),isPlaying:T,currentTime:G,duration:J,enableVolume:!0,enableFullscreen:!1,muted:z,onMute:function(){return w(!z)},onPlayPause:te,onProgressClick:le})]})]})}),Z=a},32547:function(L,c,e){e.d(c,{Z:function(){return S}});var d=e(15767),o=e(75271),j=e(15478),P=e(29663),m=function(){var l=(0,d.CR)((0,o.useState)({}),2),g=l[1];return(0,o.useCallback)(function(){return g({})},[])},C=m;function n(l,g){g===void 0&&(g={});var h=l!=null?l:{},A=g.defaultValue,R=g.defaultValuePropName,O=R===void 0?"defaultValue":R,t=g.valuePropName,p=t===void 0?"value":t,V=g.trigger,x=V===void 0?"onChange":V,i=h[p],a=Object.prototype.hasOwnProperty.call(h,p),Z=(0,o.useMemo)(function(){return a?i:Object.prototype.hasOwnProperty.call(h,O)?h[O]:A},[]),r=(0,o.useRef)(Z);a&&(r.current=i);var F=C();function U(E){for(var N=[],u=1;u<arguments.length;u++)N[u-1]=arguments[u];var B=(0,j.mf)(E)?E(r.current):E;a||(r.current=B,F()),h[x]&&h[x].apply(h,(0,d.ev)([B],(0,d.CR)(N),!1))}return[r.current,(0,P.Z)(U)]}var S=n},29663:function(L,c,e){var d=e(75271),o=e(15478),j=e(90718),P=function(m){j.Z&&((0,o.mf)(m)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof m)));var C=(0,d.useRef)(m);C.current=(0,d.useMemo)(function(){return m},[m]);var n=(0,d.useRef)(void 0);return n.current||(n.current=function(){for(var S=[],l=0;l<arguments.length;l++)S[l]=arguments[l];return C.current.apply(this,S)}),n.current};c.Z=P},15478:function(L,c,e){e.d(c,{G7:function(){return C},mf:function(){return o}});var d=function(n){return n!==null&&typeof n=="object"},o=function(n){return typeof n=="function"},j=function(n){return typeof n=="string"},P=function(n){return typeof n=="boolean"},m=function(n){return typeof n=="number"},C=function(n){return typeof n=="undefined"}},90718:function(L,c){var e=!1;c.Z=e}}]);
