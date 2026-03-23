(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1997],{86578:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return je}});var ae=e(97857),h=e.n(ae),R=e(9783),y=e.n(R),b=e(13769),L=e.n(b),E=e(67294),T=e(93967),N=e.n(T),p=e(56044),x=e(66672),P=e(50993),S=e(44294),g=e(12624),n=e(41154),d=e(68400),k=e.n(d),i=e(9053),t,O=(0,i.vJ)(t||(t=k()([`
.`,`-media-upload {
  width: fit-content;

  .`,`-upload-drag {
    border: none;
  }
  .`,"-upload-drag .",`-upload-btn {
    padding: 0;
  }

  /* \u5DE6\u4FA7\u7F29\u7565\u56FE\u533A\u57DF */
  &-thumbnail {
    position: relative;
    width: 100px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: `,`px;
    border: 1px solid `,`;
    background-color: `,`;
    overflow: hidden;
    cursor: pointer;

    /* \u6E10\u53D8\u906E\u7F69 */
    &-gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100px;
      height: 42px;
      background: linear-gradient(
        174.5deg,
        rgba(205, 208, 220, 0.2) 0%,
        rgba(205, 208, 220, 0) 100%
      );
    }

    /* \u52A0\u53F7\u56FE\u6807 */
    &-icon {
      font-size: 20px;
      color: `,`;
    }

    &-count {
      color: `,`;
      text-align: center;
      font-size: 12px;
      line-height: 20px;
    }
  }
}
`])),function(xe){return xe.theme.prefixCls},function(xe){return xe.theme.prefixCls},function(xe){return xe.theme.prefixCls},function(xe){return xe.theme.prefixCls},function(xe){return xe.theme.borderRadius},function(xe){return xe.theme.colorBorderSecondary},function(xe){return xe.theme.colorBgBase},function(xe){return xe.theme.colorText},function(xe){return xe.theme.colorText}),l=e(85893),M=["className","icon"],ce=n.Z.Dragger,ie=function(w){var te=w.className,Le=w.icon,Be=L()(w,M),ze=(0,p.wv)(),He=ze.getPrefixCls,Me=He("media-upload");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(O,{}),(0,l.jsx)(ce,h()(h()({showUploadList:!1,className:N()(Me,te)},Be),{},{children:(0,l.jsxs)("div",{className:N()("".concat(Me,"-thumbnail")),children:[(0,l.jsx)("div",{className:N()("".concat(Me,"-thumbnail-gradient"))}),(0,l.jsxs)("div",{className:N()("".concat(Me,"-thumbnail-content")),children:[Le||(0,l.jsx)(g.Z,{className:N()("".concat(Me,"-thumbnail-icon"))}),w.maxCount>1&&(0,l.jsxs)("div",{className:N()("".concat(Me,"-thumbnail-count")),children:[w.fileList.length,"/",w.maxCount]})]})]})}))]})},f=ie,me,K=(0,i.vJ)(me||(me=k()([`
.`,`-media-info {
  display: flex;
  flex-direction: column;
  gap: 4px;

  /* \u6807\u9898 */
  &-title {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: `,`;
  }

  /* \u63CF\u8FF0 */
  &-description {
    font-size: 12px;
    line-height: 20px;
    color: `,`;
  }
}
`])),function(xe){return xe.theme.prefixCls},function(xe){return xe.theme.colorText},function(xe){return xe.theme.colorTextTertiary}),V=function(w){var te=w.className,Le=w.title,Be=w.description,ze=(0,p.wv)(),He=ze.getPrefixCls,Me=He("media-info"),un=!!Le||!!Be;return un?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(K,{}),(0,l.jsxs)("div",{className:N()(Me,te),children:[Le&&(0,l.jsx)("div",{className:N()("".concat(Me,"-title")),children:Le}),Be&&(0,l.jsx)("div",{className:N()("".concat(Me,"-description")),children:Be})]})]}):null},re=V,de,Re=(0,i.vJ)(de||(de=k()([`
.`,`-aigc-sender-header {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 90px;
  padding: 12px;
  border-bottom: 1px dashed `,`;

  .`,`-aigc-sender-header-upload-hidden {
    overflow: hidden;
    opacity: 0;
    width: 0;
    height: 0;
    margin-left: -8px;
  }

  .`,`-attachment {
    width: fit-content;
  }

  .`,`-attachment-list {
    padding: 0;
  }

  .`,`-attachment-list-card-type-preview {
    width: 100px;
    height: 64px;
  }
}
`])),function(xe){return xe.theme.prefixCls},function(xe){return xe.theme.colorBorderSecondary},function(xe){return xe.theme.prefixCls},function(xe){return xe.theme.prefixCls},function(xe){return xe.theme.prefixCls},function(xe){return xe.theme.prefixCls}),C=["title","description","maxCount"],ke=function(w){var te=w.className,Le=w.onUpload,Be=Le===void 0?[]:Le,ze=w.attachedFiles,He=ze===void 0?[[]]:ze,Me=w.onFileChange,un=(0,p.wv)(),dn=un.getPrefixCls,ln=(0,E.useContext)(S.a),Xe=ln.focus,Fe=ln.enableFocusExpand,In=dn("aigc-sender-header"),U=(0,E.useMemo)(function(){return He.flat().length>0?!0:Be.length<=0?!1:!!(Xe||!Fe)},[Be,He,Fe,Xe]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Re,{}),(0,l.jsx)(x.Z.Header,{closable:!1,open:U,children:(0,l.jsx)("div",{className:N()(In,te),tabIndex:0,children:Be==null?void 0:Be.map(function(ye,De){var tn=ye.title,fn=ye.description,Qe=ye.maxCount,Ve=Qe===void 0?1:Qe,cn=L()(ye,C),rn=He[De]||[];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,h()({className:N()(y()({},"".concat(In,"-upload-hidden"),rn.length>=Ve)),maxCount:Ve,fileList:rn,onChange:function(an){ye.beforeUpload&&an.file.status&&Me(De,an.fileList),ye.beforeUpload||Me(De,an.fileList)},showUploadList:!1},cn),"upload-".concat(De)),rn.length>0&&(0,l.jsx)(P.Z,{items:rn,onChange:function(an){return Me(De,an.fileList)}},"attachments-".concat(De)),Ve===1&&(0,l.jsx)(re,{title:tn,description:fn},"info-".concat(De))]})})})})]})},Ne=ke,je={SenderHeader:Ne,Info:re,Upload:f}},487:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return Re}});var ae=e(9783),h=e.n(ae),R=e(97857),y=e.n(R),b=e(5574),L=e.n(b),E=e(67294),T=e(93967),N=e.n(T),p=e(56044),x=e(85893);function P(C){var ke=(0,p.wv)(),Ne=ke.getPrefixCls,je=Ne("accordion-content-body");return(0,x.jsxs)("div",{className:je,children:[C.headerLeft||C.headerRight?(0,x.jsxs)("div",{className:"".concat(je,"-header"),children:[C.headerLeft,(0,x.jsx)("div",{style:{flex:1}}),C.headerRight]}):null,(0,x.jsx)("div",{className:"".concat(je,"-body"),children:C.children})]})}var S=e(9361);function g(C){var ke=(0,p.wv)(),Ne=ke.theme,je=ke.getPrefixCls,xe=(Ne==null?void 0:Ne.algorithm)===S.Z.darkAlgorithm,w=je("accordion-soft-light-title");return(0,x.jsx)("div",{className:w,style:xe?{}:{color:"rgba(38, 36, 76, 0.88)"},children:C.children})}var n=e(68400),d=e.n(n),k=e(9053),i,t=(0,k.vJ)(i||(i=d()([`
.`,`-accordion-group {
  width: 100%;

  svg {
    transform: scale(1.25);
  }
  
  .anticon-spin::before,
  .anticon-spin {
    animation-duration: 2s;
  }

  &-icon-success {
    color: `,`;
  }

  @keyframes `,`-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &-icon-error {
    color: `,`;
  }

  &-header {
    display: flex;
    align-items: center;
    gap: 4px;
    color: `,`;
    padding: 6px 12px;
    font-size: 12px;
    cursor: pointer;
    line-height: 20px;
    background-color: `,`;

    &-arrow {
      display: flex;
      align-items: center;
    }

    &-close {
      border-radius: `,`px;
      border: 1px solid `,`;
      display: inline-flex;
    }

    &-icon {
      position: relative;
      display: flex;
      width: 16px;
      height: 16px;
      align-items: center;
      justify-content: center;
      font-size: 14px;

      &-line {
        &::before,
        &::after {
          content: '';
          position: absolute;
          width: 1px;
          height: 7px;
          background-color: `,`;
          left: 50%;
          transform: translateX(-50%);
        }

        &::before {
          top: -9px;
        }

        &::after {
          bottom: -9px;
        }
      }

      &-last::after {
        content: none;
      }

      &-first::before {
        content: none;
      }
    }
  }

  &-open {
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid `,`;
    background-color: `,`;
  }

  &-body {
    margin: 8px;
    color: `,`;
    font-size: 12px;
    border-radius: 8px;
    overflow: hidden;

    .`,`-accordion-group-header {
      background-color: transparent;
    }

    

    .`,`-accordion-group-header-close,
    .`,`-accordion-group-open {
      border: 0;
    }

    .`,`-accordion-group-header-close {
      display: flex;
    }

    &-inline {
      padding: 8px 0;
      margin: 0;
      background-color: transparent;
    }

    > .`,`-accordion-group {
      background-color: `,`;

      &-open {
        border-radius: 0;
      }
    }

    &-close {
      height: 0;
      padding: 0;
      margin: 0;
    }
  }
}

.`,`-accordion-deep-thinking {
  font-size: 12px;
  color: `,`;
  text-align: left;
  white-space: pre-wrap;
  line-height: 20px;
  padding: 0 12px;
  border-left: 1px solid `,`;
}

.`,`-accordion-soft-light-title {
  font-size: 12px;
  position: relative;
  display: inline-block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mask-image: linear-gradient(
    270deg,
    rgba(231, 231, 237, 0.88) 20%,
    rgba(231, 231, 237, 0.5) 50%,
    rgba(255, 255, 255, 0.4) 52%,
    rgba(231, 231, 237, 0.5) 70%,
    rgba(231, 231, 237, 0.88) 80%
  );
  mask-size: 200% 100%;
  animation: softlight-text 3s linear infinite;
}


@keyframes softlight-text {
  0% {
    mask-position: 100% 0;
  }

  100% {
    mask-position: -100% 0;
  }
}

.`,`-accordion-content-body {
  border: 1px solid `,`;
  border-radius: 8px;
  overflow: hidden;
  &-header {
    display: flex;
    height: 24px;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    border-bottom: 1px solid `,`;
    background-color: `,`;
    color: `,`;
  }

  &-body {
    background-color: `,`;
  }
}
`])),function(C){return C.theme.prefixCls},function(C){return C.theme.colorSuccess},function(C){return C.theme.prefixCls},function(C){return C.theme.colorError},function(C){return C.theme.colorTextSecondary},function(C){return C.theme.colorBgBase},function(C){return C.theme.borderRadiusLG},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.colorBorder},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.colorBgBase},function(C){return C.theme.colorText},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.colorFillTertiary},function(C){return C.theme.prefixCls},function(C){return C.theme.colorTextSecondary},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.colorFillTertiary},function(C){return C.theme.colorText},function(C){return C.theme.colorBgBase}),O=e(40443),l=e(89034),M=e(9343),ce=e(36674),ie=e(9838),f=e(28387),me=e(16592);function K(C){var ke=(0,p.wv)(),Ne=ke.getPrefixCls,je=Ne("accordion-group"),xe=E.useState(C.defaultOpen),w=L()(xe,2),te=w[0],Le=w[1],Be=C.open!==void 0?C.open:te,ze=C.inline?"close":Be?"open":"close",He=(0,E.useMemo)(function(){if(C.icon)return C.icon;if(C.status==="generating")return(0,x.jsx)(O.Z,{className:"".concat(je,"-icon-loading"),spin:!0});if(C.status==="finished")return(0,x.jsx)(l.Z,{className:"".concat(je,"-icon-success")});if(C.status==="interrupted")return(0,x.jsx)(M.Z,{});if(C.status==="error")return(0,x.jsx)(ce.Z,{className:"".concat(je,"-icon-error")})},[C.status,C.icon]),Me=(0,E.useMemo)(function(){return C.steps?C.steps.map(function(un,dn){var ln=dn===0,Xe=dn===C.steps.length-1;return(0,x.jsx)(K,y()(y()({},un),{},{isFirst:ln,isLast:Xe}),un.id||dn)}):C.children},[C.steps,C.children]);return(0,x.jsxs)("div",{className:N()("".concat(je),"".concat(je,"-").concat(ze)),children:[(0,x.jsxs)("div",{className:N()("".concat(je,"-header"),"".concat(je,"-header-").concat(ze)),onClick:function(){return Me&&C.open===void 0&&Le(!te)},children:[He?(0,x.jsx)("div",{className:N()("".concat(je,"-header-icon"),h()(h()(h()({},"".concat(je,"-header-icon-line"),C.iconLine),"".concat(je,"-header-icon-first"),C.isFirst),"".concat(je,"-header-icon-last"),C.isLast&&ze==="close"||C.level)),children:He}):null,(0,x.jsx)("div",{children:C.title}),Me&&(0,x.jsx)("div",{className:N()("".concat(je,"-header-arrow")),children:Be?(0,x.jsx)(f.Z,{}):(0,x.jsx)(ie.Z,{})}),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{style:{flex:1}}),C.rightChildren]})]}),(0,x.jsx)(re,{prefixCls:je,stateOpen:Be,status:ze,inline:C.inline,content:Me,bodyStyle:C.bodyStyle,level:C.level})]})}var V={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function re(C){var ke=(0,E.useRef)(null);if(!C.content)return null;var Ne=C.prefixCls,je=C.stateOpen,xe=C.inline,w=C.bodyStyle,te=C.level;return(0,x.jsx)(me.ZP,{nodeRef:ke,in:je,timeout:300,children:function(Be){return(0,x.jsx)("div",{style:y()(y()(y()({},w),te?{marginTop:0}:{}),{},{transition:"opacity ".concat(300,"ms ease-in-out")},V[Be]),className:N()("".concat(Ne,"-body"),"".concat(Ne,"-body-").concat(je?"open":"close"),h()({},"".concat(Ne,"-body-inline"),xe)),children:C.content})}})}function de(C){var ke=C.level,Ne=ke===void 0?1:ke,je=C.isFirst,xe=je===void 0?!0:je,w=C.isLast,te=w===void 0?!0:w;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t,{}),(0,x.jsx)(K,y()(y()({},C),{},{level:Ne,isFirst:xe,isLast:te}))]})}de.BodyContent=P,de.SoftLightTitle=g;var Re=de},14082:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return E}});var ae=e(487),h=e(56044),R=e(9361),y=e(93967),b=e.n(y),L=e(85893);function E(T){var N=(0,h.wv)(),p=N.theme,x=N.getPrefixCls,P=x("accordion-deep-thinking"),S=(p==null?void 0:p.algorithm)===R.Z.darkAlgorithm,g=(0,L.jsx)("img",{style:{display:"block",width:16,height:16,filter:S?"invert(1)  brightness(100%) saturate(0%)":""},src:"https://img.alicdn.com/imgextra/i2/O1CN01QZgWRv1I4JM0BAZ9O_!!6000000000839-54-tps-56-56.apng"}),n=T.title||"Deep thinking";T.loading&&(n+="...");var d=T.loading?(0,L.jsx)(ae.Z.SoftLightTitle,{children:n}):n,k=T.maxHeight?{maxHeight:T.maxHeight,overflowY:"auto"}:{},i=T.defaultOpen!==void 0?T.defaultOpen:T.autoCloseOnFinish&&!T.loading?!1:void 0;return(0,L.jsx)(ae.Z,{title:d,status:T.loading?"generating":"finished",icon:T.loading?g:null,defaultOpen:i,open:T.open,bodyStyle:k,inline:!0,children:(0,L.jsx)("div",{className:b()(P,T.className),children:T.content||"..."})})}},35825:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return _t}});var ae=e(97857),h=e.n(ae),R=e(9783),y=e.n(R),b=e(56044),L=e(68400),E=e.n(L),T=e(9053),N,p=(0,T.vJ)(N||(N=E()([`
* {
  -webkit-tap-highlight-color: transparent !important;
  tap-highlight-color: transparent !important;
}

.`,`-chat-anywhere-layout {
  height: 100%;
  background: `,`;
  display: flex;
}

.`,`-chat-anywhere-layout-left {
  width: 240px;
  background-color: `,`;
  transition: all 0.2s;

  &-collapsed {
    margin-left: -168px;
  }
}

.`,`-chat-anywhere-layout-right {
  position: relative;
  width: 0;
  flex: 1;
  background: `,`;

  &-header {
    height: 54px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 0 20px;
    backdrop-filter: blur(10px);
  }
}

.`,`-chat-anywhere-layout-right-has-header {
  .`,`-chat-anywhere-message-list > div::before {
    content: ' ';
    display: block;
    height: 54px;
  }
}

.`,`-chat-anywhere-sessions {
  display: flex;
  flex-direction: column;
  height: 100%;

  &-list {
    padding: 10px 20px;
    height: 0;
    flex: 1;
    overflow-y: scroll;

    /* \u9690\u85CF\u6EDA\u52A8\u6761 */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }

  }

  &-header {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 54px;

    &-collapse {
    }

    &-left {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
      font-weight: 500;
    }
  }

  &-adder {
    padding: 0 20px 8px 20px;
  }

  &-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 0;
  }
}
`])),function(s){return s.theme.prefixCls},function(s){return s.theme.colorBgBase},function(s){return s.theme.prefixCls},function(s){return s.theme.colorBgBase},function(s){return s.theme.prefixCls},function(s){return s.theme.colorFillTertiary},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls}),x=e(93967),P=e.n(x),S=e(17909),g=e(59214),n=e(67294),d=e(81759),k=e(49131),i=e(21766),t=e(85893),O=(0,g.createContext)(void 0);function l(s){try{var v=(0,g.useContextSelector)(O,s);return v}catch(o){return{}}}function M(s){var v=s.children,o=(0,S.Z)(),u=(0,n.useMemo)(function(){var J=s.options.theme||{};return h()(h()({},s.options),{},{theme:h()(h()({},J),{},{narrowMode:!o.lg||J.narrowMode})})},[s.options,o.lg]),_=(0,n.useMemo)(function(){var J=u.theme.colorPrimary,G=u.theme.colorBgBase,q=u.theme.colorTextBase,se=u.theme.darkMode;if(J||se){var Se=(0,d.Z)((0,k.Z)({primaryHex:J,bgBaseHex:G,textBaseHex:q,darkMode:se}));return Se}},[u.theme.colorPrimary,u.theme.colorBgBase,u.theme.colorTextBase,u.theme.darkMode]),B=(0,t.jsx)(O.Provider,{value:u,children:v});if(_){var I=u.theme.prefix||"agentscope-runtime-webui";return(0,t.jsx)(i.ZP,h()(h()({},_),{},{style:{height:"100%"},prefix:I,prefixCls:I,children:B}))}return B}var ce=null,ie=e(15009),f=e.n(ie),me=e(99289),K=e.n(me),V=e(5574),re=e.n(V),de=e(66672),Re=e(10325),C=e(79785),ke=(0,g.createContext)({loading:!1,setLoading:function(){},getLoading:function(){return!1},disabled:!1,setDisabled:function(){},getDisabled:function(){return!1}});function Ne(s){var v=(0,C.Z)(!1),o=re()(v,3),u=o[0],_=o[1],B=o[2],I=(0,C.Z)(!1),J=re()(I,3),G=J[0],q=J[1],se=J[2];return(0,t.jsx)(ke.Provider,{value:{loading:u,setLoading:_,getLoading:B,disabled:G,setDisabled:q,getDisabled:se},children:s.children})}var je=function(v){return(0,g.useContextSelector)(ke,v)},xe=e(19632),w=e.n(xe),te=e(13769),Le=e.n(te),Be=e(41154),ze=e(64057),He=e(81644),Me=e(50993),un=["trigger"];function dn(s,v){var o=(0,n.useState)([]),u=re()(o,2),_=u[0],B=u[1],I=(0,n.useRef)([]);I.current=_;var J=(0,n.useCallback)(function(){return I.current},[]),G=s||{},q=G.trigger,se=Le()(G,un),Se=(0,n.useRef)(0),Ae=(0,n.useCallback)(function(ve){if(se!=null&&se.customRequest){var he=ve.type||"",We=ve.name||"";if(se.accept){var Te=se.accept.split(",").some(function(nn){var Sn=nn.trim();if(!Sn)return!1;if(Sn.startsWith("."))return We.toLowerCase().endsWith(Sn.toLowerCase());if(Sn==="*/*")return!0;if(Sn.includes("*")){var Un=Sn.split("/"),kn=re()(Un,1),Qn=kn[0],pt=he.split("/"),En=re()(pt,1),ct=En[0];return Qn===ct}return he===Sn});if(!Te)return}if(!(se.maxCount&&I.current.length>=se.maxCount)){var _e=function(){var Sn=We.match(/\.([^.]+)$/);if(Sn)return Sn[1].toLowerCase();var Un=he.match(/\/([^/+]+)/);return Un?Un[1].toLowerCase():"bin"},yn="paste-".concat(Date.now(),"-").concat(Se.current++),Gn={uid:yn,name:We||"pasted-".concat(Date.now(),".").concat(_e()),size:ve.size,type:he,status:"uploading",percent:0,originFileObj:ve};if(B(function(nn){return[].concat(w()(nn),[Gn])}),he.startsWith("image/")){var Tn=new FileReader;Tn.onload=function(nn){var Sn,Un=(Sn=nn.target)===null||Sn===void 0?void 0:Sn.result;typeof Un=="string"&&B(function(kn){return kn.map(function(Qn){return Qn.uid===yn?h()(h()({},Qn),{},{thumbUrl:Un}):Qn})})},Tn.readAsDataURL(ve)}se.customRequest({file:ve,filename:"file",action:"",method:"POST",onSuccess:function(Sn){B(function(Un){return Un.map(function(kn){return kn.uid===yn?h()(h()({},kn),{},{status:"done",response:Sn,percent:100}):kn})})},onError:function(Sn){B(function(Un){return Un.map(function(kn){return kn.uid===yn?h()(h()({},kn),{},{status:"error",error:Sn}):kn})})},onProgress:function(Sn){B(function(Un){return Un.map(function(kn){return kn.uid===yn?h()(h()({},kn),{},{percent:Sn==null?void 0:Sn.percent}):kn})})}},{defaultRequest:function(){}})}}},[se==null?void 0:se.customRequest,se==null?void 0:se.accept]);if(se!=null&&se.customRequest){var Ze=(0,t.jsx)(Be.Z,h()(h()({fileList:_,showUploadList:!1,onChange:function(he){B(he.fileList)}},se),{},{disabled:v==null?void 0:v.disabled,children:q?n.createElement(q,{disabled:v==null?void 0:v.disabled}):(0,t.jsx)(ze.Z,{disabled:v==null?void 0:v.disabled,icon:(0,t.jsx)(He.Z,{}),bordered:!1})})),ge=(0,t.jsx)(de.Z.Header,{closable:!1,open:(_==null?void 0:_.length)>0,children:(0,t.jsx)(Me.Z,{items:_,onChange:function(he){return B(he.fileList)}})});return{fileList:_,getFileList:J,setFileList:B,handlePasteFile:Ae,uploadIconButton:Ze,uploadFileListHeader:ge}}else return{enabled:!1,handlePasteFile:void 0}}function ln(s){var v=(0,C.Z)(""),o=re()(v,3),u=o[0],_=o[1],B=o[2],I=(0,b.wv)().getPrefixCls("chat-anywhere-input"),J=l(function(ut){return ut.sender}),G=je(function(ut){return ut}),q=J||{},se=q.placeholder,Se=se===void 0?"":se,Ae=q.disclaimer,Ze=Ae===void 0?"":Ae,ge=q.maxLength,ve=q.beforeSubmit,he=ve===void 0?function(){return Promise.resolve(!0)}:ve,We=q.beforeUI,Te=q.afterUI,_e=q.scalable,yn=_e===void 0?!0:_e,Gn=q.attachments,Tn=q.prefix,nn=q.allowSpeech,Sn=dn(Gn,{disabled:!!G.disabled}),Un=Sn.getFileList,kn=Sn.setFileList,Qn=Sn.handlePasteFile,pt=Sn.uploadIconButton,En=Sn.uploadFileListHeader,ct=(0,n.useCallback)(K()(f()().mark(function ut(){var Ot,Rt;return f()().wrap(function(nt){for(;;)switch(nt.prev=nt.next){case 0:return nt.next=2,he();case 2:if(Ot=nt.sent,Ot){nt.next=5;break}return nt.abrupt("return");case 5:Rt=((Un==null?void 0:Un())||[]).filter(function(Dt){var Mt;return(Mt=Dt.response)===null||Mt===void 0?void 0:Mt.url}),s.onSubmit({query:B(),fileList:Rt}),_(""),kn&&kn([]);case 9:case"end":return nt.stop()}},ut)})),[]),Lt=(0,n.useCallback)(function(){s.onCancel()},[]);return(0,t.jsxs)("div",{className:I,children:[(0,t.jsxs)("div",{className:"".concat(I,"-wrapper"),children:[We,(0,t.jsx)(de.Z,{loading:G.loading,disabled:G.disabled,scalable:yn,placeholder:Se,value:u,prefix:(0,t.jsxs)(t.Fragment,{children:[pt,Tn]}),header:En,onChange:_,maxLength:ge,onSubmit:ct,onCancel:Lt,allowSpeech:nn,onPasteFile:Qn}),Te]}),Ze?(0,t.jsx)(Re.Z,{desc:Ze}):(0,t.jsx)("div",{className:"".concat(I,"-blank")})]})}var Xe=e(52471),Fe=(0,g.createContext)({messages:[],setMessages:function(){},getMessages:function(){return[]}});function In(s){var v=(0,C.Z)([]),o=re()(v,3),u=o[0],_=o[1],B=o[2],I={messages:u,setMessages:_,getMessages:B};return(0,t.jsx)(Fe.Provider,{value:I,children:s.children})}var U=function(){var v=(0,g.useContextSelector)(Fe,function(G){return{setMessages:G.setMessages,getMessages:G.getMessages}}),o=v.setMessages,u=v.getMessages,_=n.useCallback(function(){o([])},[]),B=n.useCallback(function(G){return u().find(function(q){return q.id===G})},[]),I=n.useCallback(function(G){o(function(q){return q.filter(function(se){return se.id!==G.id})})},[]),J=n.useCallback(function(G){o(function(q){var se=q.findIndex(function(Ae){return Ae.id===G.id});if(se>-1){var Se=h()(h()({},q[se]),G);return[].concat(w()(q.slice(0,se)),[Se],w()(q.slice(se+1)))}else return[].concat(w()(q),[G])})},[]);return{getMessages:u,removeAllMessages:_,getMessage:B,removeMessage:I,updateMessage:J}},ye=e(78234),De=e(73935),tn=e(2093);function fn(s){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];(0,n.useEffect)(function(){return document.addEventListener(s.type,s.callback),function(){document.removeEventListener(s.type,s.callback)}},v)}var Qe=function(v){var o=v.type,u=v.data;document.dispatchEvent(new CustomEvent(o,{detail:u}))},Ve=(0,g.createContext)({sessions:[],setSessions:function(){},getSessions:function(){return[]},currentSessionId:void 0,setCurrentSessionId:function(){},getCurrentSessionId:function(){return""}});function cn(s){var v=l(function(Ae){return Ae.session}),o=(0,C.Z)([]),u=re()(o,3),_=u[0],B=u[1],I=u[2],J=(0,C.Z)(void 0),G=re()(J,3),q=G[0],se=G[1],Se=G[2];return(0,ye.Z)(K()(f()().mark(function Ae(){var Ze,ge;return f()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return he.next=2,v.api.getSessionList();case 2:ge=he.sent,B(ge),se(ge==null||(Ze=ge[0])===null||Ze===void 0?void 0:Ze.id);case 5:case"end":return he.stop()}},Ae)}))),(0,t.jsx)(Ve.Provider,{value:{sessions:_,setSessions:B,getSessions:I,currentSessionId:q,setCurrentSessionId:se,getCurrentSessionId:Se},children:s.children})}var rn=function(){var v=(0,g.useContextSelector)(Ve,function(_){return _.currentSessionId}),o=l(function(_){return _.session}),u=(0,g.useContextSelector)(Fe,function(_){return _.setMessages});(0,tn.Z)(K()(f()().mark(function _(){var B,I;return f()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return De.flushSync(function(){u([])}),G.next=3,o.api.getSession(v);case 3:B=G.sent,I=(B==null?void 0:B.messages)||[],u(I.map(function(q){return h()(h()({},q),{},{history:!0})})),B!=null&&B.generating&&Qe({type:"handleReconnect",data:{session_id:v}});case 7:case"end":return G.stop()}},_)})),[v])},vn=function(){var v=(0,g.useContextSelector)(Ve,function(Ze){return Ze}),o=v.setSessions,u=v.getSessions,_=v.getCurrentSessionId,B=v.setCurrentSessionId,I=v.currentSessionId,J=l(function(Ze){return Ze.session}),G=(0,g.useContextSelector)(Fe,function(Ze){return Ze.setMessages}),q=n.useCallback(function(){var Ze=K()(f()().mark(function ge(ve){var he;return f()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return Te.next=2,J.api.removeSession(ve);case 2:he=Te.sent,G([]),B(void 0),o(he);case 6:case"end":return Te.stop()}},ge)}));return function(ge){return Ze.apply(this,arguments)}}(),[]),se=n.useCallback(function(){var Ze=K()(f()().mark(function ge(ve){var he;return f()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:if(!ve.id){Te.next=6;break}return Te.next=3,J.api.updateSession(ve);case 3:Te.t0=Te.sent,Te.next=9;break;case 6:return Te.next=8,J.api.createSession(ve);case 8:Te.t0=Te.sent;case 9:return he=Te.t0,o(he),Te.abrupt("return",ve);case 12:case"end":return Te.stop()}},ge)}));return function(ge){return Ze.apply(this,arguments)}}(),[]),Se=n.useCallback(function(){var Ze=K()(f()().mark(function ge(ve){var he;return f()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return Te.next=2,se({name:(ve==null?void 0:ve.name)||"",messages:[]});case 2:return he=Te.sent,B(he.id),G(he.messages),Te.abrupt("return",he.id);case 6:case"end":return Te.stop()}},ge)}));return function(ge){return Ze.apply(this,arguments)}}(),[]),Ae=n.useCallback(function(Ze){B(Ze)},[]);return{changeCurrentSessionId:Ae,getCurrentSessionId:_,getSessions:u,removeSession:q,updateSession:se,createSession:Se}},an=e(64437),mn=["render"];function Ye(s){var v=l(function(G){return G.welcome});if(!v)return null;var o=v.render,u=Le()(v,mn);if(o)return v.render({greeting:v.greeting,avatar:v.avatar,description:v.description,prompts:v.prompts,onSubmit:s.onSubmit});var _=u.greeting,B=u.avatar,I=u.prompts,J=u.description;return(0,t.jsx)(an.Z,{greeting:_,avatar:B,description:J,prompts:I,onClick:function(q){return s.onSubmit({query:q})}})}function _n(s){var v=(0,g.useContextSelector)(ke,function(B){return B.loading}),o=(0,g.useContextSelector)(Fe,function(B){return B.messages}),u=(0,b.wv)().getPrefixCls("chat-anywhere-message-list"),_=(0,g.useContextSelector)(Ve,function(B){return B.currentSessionId});return o.length===0?(0,t.jsx)("div",{className:P()(u,"".concat(u,"-welcome")),children:(0,t.jsx)(Ye,{onSubmit:s.onSubmit})}):(0,t.jsx)(Xe.Z.List,{smooth:!!v,pagination:!0,classNames:{wrapper:u},items:o},_)}var Pn,Mn=(0,T.vJ)(Pn||(Pn=E()([`
.`,`-chat-anywhere-chat {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: stretch;
}

.`,`-chat-anywhere-message-list  {
  flex: 1;
  height: 0;

  &-welcome {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}



.`,`-chat-anywhere-message-list > div::-webkit-scrollbar {
  display: none;
}

@keyframes message-list-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.`,`-chat-anywhere-message-list > div {
  animation: message-list-fade-in 0.4s ease-in-out;
}

.`,"-chat-anywhere-message-list .",`-bubble-list {
  margin: 0 auto;
  max-width: 850px;
  min-width: 300px;
}

.`,`-chat-anywhere-input {
  padding: 0 16px;
}

.`,`-chat-anywhere-input-wrapper {
  max-width: 850px;
  min-width: 300px;
  margin: 0 auto;
}
.`,`-chat-anywhere-input-blank {
  height: 16px;
`])),function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls}),hn=e(32116),a=e(88773),Ke=e(12444),qe=e.n(Ke),pn=e(72004),c=e.n(pn),F=function(s){return s.Created="created",s.InProgress="in_progress",s.Completed="completed",s.Canceled="canceled",s.Failed="failed",s.Rejected="rejected",s.Unknown="unknown",s}({}),A=function(s){return s.ASSISTANT="assistant",s.USER="user",s.SYSTEM="system",s}({}),Z=function(s){return s.MESSAGE="message",s.REASONING="reasoning",s.PLUGIN_CALL="plugin_call",s.PLUGIN_CALL_OUTPUT="plugin_call_output",s.FUNCTION_CALL="function_call",s.FUNCTION_CALL_OUTPUT="function_call_output",s.COMPONENT_CALL="component_call",s.COMPONENT_CALL_OUTPUT="component_call_output",s.MCP_LIST_TOOLS="mcp_list_tools",s.MCP_APPROVAL_REQUEST="mcp_approval_request",s.MCP_APPROVAL_RESPONSE="mcp_approval_response",s.MCP_CALL="mcp_call",s.MCP_CALL_OUTPUT="mcp_call_output",s.HEARTBEAT="heartbeat",s.ERROR="error",s}({}),D=function(s){return s.TEXT="text",s.DATA="data",s.IMAGE="image",s.AUDIO="audio",s.VIDEO="video",s.FILE="file",s.REFUSAL="refusal",s}({}),$=function(){function s(){qe()(this,s),y()(this,"data",void 0)}return c()(s,[{key:"isImageFile",value:function(o){return o.type.indexOf("image/")===0}},{key:"isVideoFile",value:function(o){return o.type.indexOf("video/")===0}},{key:"isAudioFile",value:function(o){return o.type.indexOf("audio/")===0}},{key:"buildImageContent",value:function(o){var u;return{type:D.IMAGE,image_url:(u=o.response)===null||u===void 0?void 0:u.url,status:F.Created}}},{key:"buildTextContent",value:function(o){return{type:D.TEXT,text:o,status:F.Created}}},{key:"buildVideoContent",value:function(o){var u;return{type:D.VIDEO,video_url:(u=o.response)===null||u===void 0?void 0:u.url,status:F.Created}}},{key:"buildAudioContent",value:function(o){var u,_,B;return{type:D.AUDIO,audio_url:(u=o.response)===null||u===void 0?void 0:u.url,data:(_=o.response)===null||_===void 0?void 0:_.url,format:(B=o.type)===null||B===void 0?void 0:B.replace("audio/",""),status:F.Created}}},{key:"buildFileContent",value:function(o){var u;return{type:D.FILE,file_url:(u=o.response)===null||u===void 0?void 0:u.url,file_id:o.file_id,file_name:o.name,file_size:o.size,status:F.Created}}},{key:"handle",value:function(o){var u,_=this;this.data={input:[]};var B=[this.buildTextContent(o.query)];return(u=o.fileList)!==null&&u!==void 0&&u.length&&o.fileList.forEach(function(I){_.isImageFile(I)?B.push(_.buildImageContent(I)):_.isVideoFile(I)?B.push(_.buildVideoContent(I)):_.isAudioFile(I)?B.push(_.buildAudioContent(I)):B.push(_.buildFileContent(I))}),this.data={input:[{role:"user",type:Z.MESSAGE,content:B}]},this.data}},{key:"handleApproval",value:function(o){return this.data={input:o},this.data}}],[{key:"getHistoryMessages",value:function(o){return o.reduce(function(u,_){var B;return(B=_.cards)!==null&&B!==void 0&&B.length?u.concat(_.cards[0].data.input||_.cards[0].data.output):u},[])}}]),s}(),oe=$;function Ce(s){var v=s.currentQARef,o=U(),u=o.updateMessage,_=o.getMessages,B=o.removeMessage,I=(0,n.useCallback)(function(Se){return v.current.abortController=new AbortController,v.current.request={id:(0,a.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new oe().handle(Se)}]},De.flushSync(function(){u(v.current.request)}),v.current.request},[v,u]),J=(0,n.useCallback)(function(Se){return v.current.abortController=new AbortController,v.current.request={id:(0,a.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new oe().handleApproval(Se)}]},De.flushSync(function(){u(v.current.request)}),v.current.request},[v,u]),G=(0,n.useCallback)(function(){return v.current.response={id:(0,a.Z)(),role:"assistant",cards:[],msgStatus:"generating"},u(v.current.response),v.current.response},[v,u]),q=(0,n.useCallback)(function(){return oe.getHistoryMessages(_())},[_]),se=(0,n.useCallback)(function(Se){De.flushSync(function(){B({id:Se})})},[B]);return{createRequestMessage:I,createApprovalMessage:J,createResponseMessage:G,getHistoryMessages:q,updateMessage:u,removeMessageById:se,getMessages:_}}var r=e(44987),m=e.n(r),j=e(7354),W=e(64599),Y=e.n(W),z=e(93513),H=function(){function s(v){var o=v.id,u=v.status,_=v.created_at;qe()(this,s),y()(this,"data",void 0),this.data={id:o,output:[],object:"response",status:u||F.Created,created_at:_||Date.now()}}return c()(s,[{key:"handleResponse",value:function(o){this.data=(0,z.produce)(this.data,function(u){o.output||(o.output=[]),Object.assign(u,o)})}},{key:"handleMessage",value:function(o){this.data=(0,z.produce)(this.data,function(u){u.output||(u.output=[]);var _=u.output.findIndex(function(I){return I.id===o.id});if(_>=0){var B=u.output[_].content;Object.assign(u.output[_],o),(!o.content||o.content.length===0)&&(u.output[_].content=B)}else u.output.push(o)})}},{key:"handleContent",value:function(o){this.data=(0,z.produce)(this.data,function(u){var _=u.output.find(function(I){return I.id===o.msg_id});if(!_){console.warn("Message not found for content:",o.msg_id);return}if(_.content||(_.content=[]),o.delta){var B=_.content[_.content.length-1];B&&B.delta?o.type===D.TEXT&&B.type===D.TEXT?B.text+=o.text:o.type===D.IMAGE?B.image_url=o.image_url:o.type===D.DATA&&(B.data=o.data):_.content.push(o)}else _.content.length>0?Object.assign(_.content[_.content.length-1],o):_.content.push(o)})}},{key:"handleError",value:function(o){this.data=(0,z.produce)(this.data,function(u){u.status=F.Failed,u.output.push({status:F.Failed,type:Z.ERROR,content:[],id:(0,a.Z)(),role:"assistant",code:o.code,message:typeof o.message=="string"?o.message:JSON.stringify(o.message)})})}},{key:"handle",value:function(o){if(o.object==="response")this.handleResponse(o);else if(o.object==="message"){if(o.type===Z.HEARTBEAT)return this.data;this.handleMessage(o)}else o.object==="content"?this.handleContent(o):this.handleError(o);return this.data}},{key:"cancel",value:function(){return this.data=(0,z.produce)(this.data,function(o){s.maybeGenerating(o)&&(o.status=F.Canceled),o.output.forEach(function(u){s.maybeGenerating(u)&&(u.status=F.Canceled,u.content.forEach(function(_){s.maybeGenerating(_)&&(_.status=F.Canceled)}))})}),this.data}}],[{key:"mergeToolMessages",value:function(o){var u=new Map,_=[],B=Y()(o),I;try{var J=function(){var q,se,Se=I.value;if(s.maybeToolInput(Se)&&(q=Se.content)!==null&&q!==void 0&&q.length){var Ae=Se.content[0],Ze=Ae.data.call_id||Ae.data.name;u.set(Ze,Ae),_.push(Se)}else if(s.maybeToolOutput(Se)&&(se=Se.content)!==null&&se!==void 0&&se.length){var ge=Se.content[0],ve=ge.data.call_id||ge.data.name,he=u.get(ve);he&&(_=_.map(function(We){if(!s.maybeToolInput(We))return We;var Te=We.content[0],_e=Te.data.call_id||Te.data.name;return _e===ve?h()(h()({},Se),{},{content:[].concat(w()(We.content),[ge])}):We}))}else _.push(Se)};for(B.s();!(I=B.n()).done;)J()}catch(G){B.e(G)}finally{B.f()}return _}},{key:"maybeToolOutput",value:function(o){return[Z.FUNCTION_CALL_OUTPUT,Z.PLUGIN_CALL_OUTPUT,Z.COMPONENT_CALL_OUTPUT,Z.MCP_CALL_OUTPUT].includes(o.type)}},{key:"maybeToolInput",value:function(o){return[Z.FUNCTION_CALL,Z.PLUGIN_CALL,Z.COMPONENT_CALL,Z.MCP_CALL].includes(o.type)}},{key:"maybeGenerating",value:function(o){return[F.InProgress,F.Created].includes(o.status)}},{key:"maybeDone",value:function(o){return[F.Completed,F.Canceled,F.Failed].includes(o.status)}}]),s}(),ee=H;function fe(s){var v=s.currentQARef,o=s.updateMessage,u=s.getCurrentSessionId,_=s.onFinish,B=l(function(Se){return Se.api}),I=(0,n.useRef)(B);(0,n.useEffect)(function(){I.current=B},[B]);var J=(0,n.useCallback)(function(){var Se=K()(f()().mark(function Ae(Ze){var ge,ve,he,We,Te,_e,yn,Gn;return f()().wrap(function(nn){for(;;)switch(nn.prev=nn.next){case 0:ge=new ee({id:"",status:F.Created,created_at:0}),ve=!1,he=!1,nn.prev=3,Te=m()(Ze);case 5:return nn.next=7,Te.next();case 7:if(!(ve=!(_e=nn.sent).done)){nn.next=17;break}return yn=_e.value,Gn=ge.handle(yn),v.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Gn}],o(v.current.response),nn.next=14,(0,hn.Z)(100);case 14:ve=!1,nn.next=5;break;case 17:nn.next=23;break;case 19:nn.prev=19,nn.t0=nn.catch(3),he=!0,We=nn.t0;case 23:if(nn.prev=23,nn.prev=24,!(ve&&Te.return!=null)){nn.next=28;break}return nn.next=28,Te.return();case 28:if(nn.prev=28,!he){nn.next=31;break}throw We;case 31:return nn.finish(28);case 32:return nn.finish(23);case 33:case"end":return nn.stop()}},Ae,null,[[3,19,23,33],[24,,28,32]])}));return function(Ae){return Se.apply(this,arguments)}}(),[]),G=(0,n.useCallback)(function(){var Se=K()(f()().mark(function Ae(Ze){var ge,ve,he,We,Te,_e,yn,Gn,Tn,nn,Sn,Un,kn,Qn;return f()().wrap(function(En){for(;;)switch(En.prev=En.next){case 0:if(ge=I.current,ve=new ee({id:"",status:F.Created,created_at:0}),Ze.ok){En.next=5;break}return Ze.json().then(function(ct){var Lt=ve.handle({object:"message",type:Z.ERROR,content:[],id:"error",role:"assistant",status:F.Failed,code:String(Ze.status),message:JSON.stringify(ct)});v.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Lt}],_()}),En.abrupt("return");case 5:En.prev=5,he=!1,We=!1,En.prev=8,_e=m()((0,j.Z)({readableStream:Ze.body}));case 10:return En.next=12,_e.next();case 12:if(!(he=!(yn=En.sent).done)){En.next=29;break}if(Gn=yn.value,((Tn=v.current.response)===null||Tn===void 0?void 0:Tn.msgStatus)!=="interrupted"){En.next=20;break}return(Sn=v.current.abortController)===null||Sn===void 0||Sn.abort(),ge.cancel&&ge.cancel({session_id:u()}),v.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:ve.cancel()}],o(v.current.response),En.abrupt("break",29);case 20:if(Un=I.current.responseParser||JSON.parse,kn=Un(Gn.data),Qn=ve.handle(kn),!(Qn.status!==F.Failed&&!((nn=Qn.output)!==null&&nn!==void 0&&(nn=nn[0])!==null&&nn!==void 0&&(nn=nn.content)!==null&&nn!==void 0&&nn.length))){En.next=25;break}return En.abrupt("continue",26);case 25:v.current.response&&(v.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Qn}],Qn.status===F.Completed||Qn.status===F.Failed?_():o(v.current.response));case 26:he=!1,En.next=10;break;case 29:En.next=35;break;case 31:En.prev=31,En.t0=En.catch(8),We=!0,Te=En.t0;case 35:if(En.prev=35,En.prev=36,!(he&&_e.return!=null)){En.next=40;break}return En.next=40,_e.return();case 40:if(En.prev=40,!We){En.next=43;break}throw Te;case 43:return En.finish(40);case 44:return En.finish(35);case 45:En.next=50;break;case 47:En.prev=47,En.t1=En.catch(5),console.error(En.t1);case 50:case"end":return En.stop()}},Ae,null,[[5,47],[8,31,35,45],[36,,40,44]])}));return function(Ae){return Se.apply(this,arguments)}}(),[u,v,o,_]),q=(0,n.useCallback)(function(){var Se=K()(f()().mark(function Ae(Ze,ge){var ve,he,We,Te,_e,yn;return f()().wrap(function(Tn){for(;;)switch(Tn.prev=Tn.next){case 0:if(he=I.current,We=he.enableHistoryMessages,Te=We===void 0?!1:We,_e=(ve=v.current.abortController)===null||ve===void 0?void 0:ve.signal,Tn.prev=3,!he.fetch){Tn.next=10;break}return Tn.next=7,he.fetch({input:Ze,biz_params:ge,signal:_e});case 7:Tn.t0=Tn.sent,Tn.next=13;break;case 10:return Tn.next=12,fetch(he.baseURL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(he.token||"")},body:JSON.stringify({input:Te?Ze:Ze.slice(-1),session_id:u(),stream:!0,biz_params:ge}),signal:_e});case 12:Tn.t0=Tn.sent;case 13:yn=Tn.t0,Tn.next=18;break;case 16:Tn.prev=16,Tn.t1=Tn.catch(3);case 18:if(!(yn&&yn.body)){Tn.next=21;break}return Tn.next=21,G(yn);case 21:case"end":return Tn.stop()}},Ae,null,[[3,16]])}));return function(Ae,Ze){return Se.apply(this,arguments)}}(),[u,v,G]),se=(0,n.useCallback)(function(){var Se=K()(f()().mark(function Ae(Ze){var ge,ve,he,We;return f()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:if(ve=I.current,ve.reconnect){_e.next=3;break}return _e.abrupt("return");case 3:return he=(ge=v.current.abortController)===null||ge===void 0?void 0:ge.signal,_e.prev=4,_e.next=7,ve.reconnect({session_id:Ze,signal:he});case 7:We=_e.sent,_e.next=12;break;case 10:_e.prev=10,_e.t0=_e.catch(4);case 12:if(!(We&&We.body)){_e.next=15;break}return _e.next=15,G(We);case 15:case"end":return _e.stop()}},Ae,null,[[4,10]])}));return function(Ae){return Se.apply(this,arguments)}}(),[v,G]);return{request:q,reconnect:se,mockRequest:J}}function X(){var s=vn(),v=s.createSession,o=s.updateSession,u=s.getCurrentSessionId,_=(0,n.useCallback)(function(){var J=K()(f()().mark(function G(q){return f()().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:if(u()){Se.next=3;break}return Se.next=3,v({name:q});case 3:case"end":return Se.stop()}},G)}));return function(G){return J.apply(this,arguments)}}(),[u,v]),B=(0,n.useCallback)(function(){var J=K()(f()().mark(function G(q,se){return f()().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:if(se.length!==0){Ae.next=3;break}return Ae.next=3,o({id:u(),name:q});case 3:case"end":return Ae.stop()}},G)}));return function(G,q){return J.apply(this,arguments)}}(),[u,o]),I=(0,n.useCallback)(function(){var J=K()(f()().mark(function G(q){return f()().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:return Se.next=2,o({id:u(),messages:q});case 2:case"end":return Se.stop()}},G)}));return function(G){return J.apply(this,arguments)}}(),[u,o]);return{ensureSession:_,updateSessionName:B,syncSessionMessages:I,getCurrentSessionId:u}}function le(){var s=(0,g.useContextSelector)(ke,function(ge){return ge.setLoading}),v=(0,g.useContextSelector)(Ve,function(ge){return ge.currentSessionId}),o=(0,n.useRef)({}),u=Ce({currentQARef:o}),_=X(),B=(0,n.useCallback)(function(){var ge=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished";o.current.response&&(o.current.response.msgStatus=ge,s(!1),De.flushSync(function(){u.updateMessage(o.current.response)}),_.syncSessionMessages(u.getMessages()))},[s,u,_]),I=fe({currentQARef:o,updateMessage:u.updateMessage,getCurrentSessionId:_.getCurrentSessionId,onFinish:function(){return B("finished")}}),J=I.request,G=I.reconnect,q=(0,n.useCallback)(function(){var ge=K()(f()().mark(function ve(he){var We,Te;return f()().wrap(function(yn){for(;;)switch(yn.prev=yn.next){case 0:return yn.next=2,_.ensureSession(he.query);case 2:if(We=u.getMessages(),!_.getCurrentSessionId()){yn.next=6;break}return yn.next=6,_.updateSessionName(he.query,We);case 6:return u.createRequestMessage(he),s(!0),yn.next=10,(0,hn.Z)(100);case 10:return u.createResponseMessage(),Te=u.getHistoryMessages(),yn.next=14,_.syncSessionMessages(u.getMessages());case 14:return yn.next=16,J(Te,he.biz_params);case 16:case"end":return yn.stop()}},ve)}));return function(ve){return ge.apply(this,arguments)}}(),[u,_,J]),se=(0,n.useCallback)(function(){var ge=K()(f()().mark(function ve(he){var We,Te;return f()().wrap(function(yn){for(;;)switch(yn.prev=yn.next){case 0:return We=he.input,u.createApprovalMessage(We),s(!0),yn.next=5,(0,hn.Z)(100);case 5:return u.createResponseMessage(),Te=u.getHistoryMessages(),yn.next=9,_.syncSessionMessages(u.getMessages());case 9:return yn.next=11,J(Te);case 11:case"end":return yn.stop()}},ve)}));return function(ve){return ge.apply(this,arguments)}}(),[u,_,J]),Se=(0,n.useCallback)(function(){B("interrupted")},[B]),Ae=(0,n.useCallback)(function(){var ge=K()(f()().mark(function ve(he){var We;return f()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return s(!0),u.removeMessageById(he),o.current.abortController=new AbortController,u.createResponseMessage(),We=u.getHistoryMessages(),_e.next=7,J(We);case 7:case"end":return _e.stop()}},ve)}));return function(ve){return ge.apply(this,arguments)}}(),[u,J]),Ze=(0,n.useCallback)(function(){var ge=K()(f()().mark(function ve(he){return f()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return o.current.abortController=new AbortController,s(!0),u.createResponseMessage(),Te.next=5,G(he);case 5:case"end":return Te.stop()}},ve)}));return function(ve){return ge.apply(this,arguments)}}(),[u,G,s]);return(0,n.useEffect)(function(){var ge;(ge=o.current.abortController)===null||ge===void 0||ge.abort(),o.current={request:void 0,response:void 0,abortController:void 0}},[v]),fn({type:"handleReconnect",callback:function(){var ge=K()(f()().mark(function he(We){return f()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,Ze(We.detail.session_id);case 2:case"end":return _e.stop()}},he)}));function ve(he){return ge.apply(this,arguments)}return ve}()},[Ze]),fn({type:"handleReplace",callback:function(){var ge=K()(f()().mark(function he(We){return f()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,Ae(We.detail.id);case 2:case"end":return _e.stop()}},he)}));function ve(he){return ge.apply(this,arguments)}return ve}()}),fn({type:"handleSubmit",callback:function(){var ge=K()(f()().mark(function he(We){return f()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,q(We.detail);case 2:case"end":return _e.stop()}},he)}));function ve(he){return ge.apply(this,arguments)}return ve}()},[q]),fn({type:"handleApproval",callback:function(){var ge=K()(f()().mark(function he(We){return f()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,se(We.detail);case 2:case"end":return _e.stop()}},he)}));function ve(he){return ge.apply(this,arguments)}return ve}()},[se]),{handleSubmit:q,handleCancel:Se}}function Ee(){var s=(0,b.wv)().getPrefixCls("chat-anywhere-chat"),v=le(),o=v.handleSubmit,u=v.handleCancel;return rn(),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Mn,{}),(0,t.jsxs)("div",{className:s,children:[(0,t.jsx)(_n,{onSubmit:o}),(0,t.jsx)(ln,{onCancel:u,onSubmit:o})]})]})}var Ue=e(21403),$e=e(67392),Je=e(13660),on=e(12624),Pe=e(50287),ue=e(9368),Q=(0,n.createContext)({collapsed:!1,toggleCollapsed:function(){}});function On(s){var v=(0,n.useState)(!1),o=re()(v,2),u=o[0],_=o[1],B=(0,n.useCallback)(function(){_(function(J){return!J})},[]),I=(0,n.useMemo)(function(){return{collapsed:u,toggleCollapsed:B}},[u,B]);return(0,t.jsx)(Q.Provider,{value:I,children:s.children})}function Cn(){var s=(0,n.useContext)(Q),v=s.collapsed,o=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),u=l(function(_){var B;return(B=_.theme)===null||B===void 0?void 0:B.leftHeader})||{};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"".concat(o),children:[n.isValidElement(u)?u:(0,t.jsx)(Ge,{}),(0,t.jsxs)("div",{className:"".concat(o,"-content"),style:{display:v?"none":"flex"},children:[(0,t.jsx)(xn,{}),(0,t.jsx)(en,{})]})]})})}function Ge(s){var v=s.className,o=l(function(Ze){var ge;return(ge=Ze.theme)===null||ge===void 0?void 0:ge.leftHeader})||{},u=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),_=(0,n.useContext)(Q),B=_.toggleCollapsed,I=_.collapsed,J=l(function(Ze){return Ze.session.multiple}),G=o,q=G.logo,se=q===void 0?"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png":q,Se=G.title,Ae=Se===void 0?"Runtime WebUI":Se;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:P()("".concat(u,"-header"),v),children:[(0,t.jsxs)("div",{className:"".concat(u,"-header-left"),children:[se&&(0,t.jsx)("img",{src:se,alt:"logo",height:32}),(0,t.jsx)("span",{children:Ae})]}),J&&(0,t.jsx)(ze.Z,{className:"".concat(u,"-header-collapse"),bordered:!1,icon:I?(0,t.jsx)(Je.Z,{}):(0,t.jsx)($e.Z,{}),onClick:B})]})})}function xn(s){var v=(0,g.useContextSelector)(ke,function(J){return J.loading}),o=vn(),u=o.createSession,_=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),B=(0,n.useContext)(Q),I=B.toggleCollapsed;return(0,t.jsx)("div",{className:"".concat(_,"-adder"),style:s.style,children:(0,t.jsx)(Ue.Z,{block:!0,type:"primary",icon:(0,t.jsx)(on.Z,{}),disabled:!!v,onClick:K()(f()().mark(function J(){return f()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,u();case 2:s.narrowMode&&I();case 3:case"end":return q.stop()}},J)})),children:"New Chat"})})}function en(s){var v=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),o=(0,g.useContextSelector)(Ve,function(se){return se.sessions}),u=vn(),_=u.changeCurrentSessionId,B=u.removeSession,I=(0,g.useContextSelector)(Ve,function(se){return se.currentSessionId}),J=(0,n.useContext)(Q),G=J.toggleCollapsed,q=(0,n.useMemo)(function(){return o.map(function(se){return{key:se.id,label:se.name||"New Chat"}})},[o]);return(0,t.jsx)("div",{className:"".concat(v,"-list"),style:s.style,children:(0,t.jsx)(ue.Z,{items:q,menu:[{key:"delete",icon:(0,t.jsx)(Pe.Z,{}),danger:!0,onClick:function(){var se=K()(f()().mark(function Ae(Ze){return f()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return ve.next=2,B({id:Ze.key});case 2:return ve.abrupt("return",ve.sent);case 3:case"end":return ve.stop()}},Ae)}));function Se(Ae){return se.apply(this,arguments)}return Se}()}],activeKey:I,onActiveChange:function(Se){_(Se),s.narrowMode&&G()}})})}var bn,Ie=(0,T.vJ)(bn||(bn=E()([`

.`,`-chat-anywhere-default-header {
  &-inner {
    flex-direction: row-reverse;
    gap: 10px;
    padding: 0;
  }

  &-right {
    margin: 0 0 0 auto;
  }
}

.`,`-chat-anywhere-default-header-sessions {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 0 10px 0;
}
`])),function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls}),Oe=e(85265);function we(){var s=(0,b.wv)().getPrefixCls("chat-anywhere"),v=l(function(J){return J.theme}),o=v.narrowMode,u=v.rightHeader,_=(0,n.useContext)(Q),B=_.toggleCollapsed,I=_.collapsed;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Ie,{}),(0,t.jsxs)("div",{className:"".concat(s,"-layout-right-header"),children:[o?(0,t.jsx)(Ge,{className:"".concat(s,"-default-header-inner")}):null,u&&(0,t.jsx)("div",{className:"".concat(s,"-default-header-right"),children:u})]}),o&&(0,t.jsx)(Oe.Z,{width:"80vw",styles:{body:{padding:0}},open:I,onClose:B,title:null,closable:!1,placement:"left",children:(0,t.jsxs)("div",{className:"".concat(s,"-sessions"),children:[(0,t.jsx)(en,{narrowMode:!0}),(0,t.jsx)(xn,{narrowMode:!0})]})})]})}function pe(s,v){var o=U(),u=(0,g.useContextSelector)(ke,function(_){return _.setDisabled});return n.useImperativeHandle(v,function(){return{messages:o,input:{setDisabled:u,submit:function(B){var I=B.query,J=B.fileList,G=B.biz_params;Qe({type:"handleSubmit",data:{query:I,fileList:J,biz_params:G}})}}}},[]),null}var be=(0,n.forwardRef)(pe);function gn(s,v){var o=s.className,u=(0,b.wv)().getPrefixCls("chat-anywhere-layout"),_=l(function(Ae){return Ae.theme.narrowMode}),B=l(function(Ae){return Ae.theme.background}),I=l(function(Ae){return Ae.theme.rightHeader}),J=l(function(Ae){return{session:Ae.session}}),G=J.session,q=(0,n.useContext)(Q),se=q.collapsed,Se=!_&&G&&G.multiple;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p,{}),(0,t.jsxs)("div",{className:P()("".concat(u),o),children:[Se&&(0,t.jsx)("div",{className:P()("".concat(u,"-left"),y()({},"".concat(u,"-left-collapsed"),se)),children:(0,t.jsx)(Cn,{})}),(0,t.jsxs)("div",{className:P()("".concat(u,"-right"),y()({},"".concat(u,"-right-has-header"),!!I)),style:{background:B},children:[!!I&&(0,t.jsx)(we,{}),(0,t.jsx)(Ee,{})]})]}),(0,t.jsx)(be,{ref:v})]})}var jn=(0,n.forwardRef)(gn);function Fn(s){var v=(0,n.useMemo)(function(){return s.data.input[0].content.reduce(function(o,u){if(u.type===D.TEXT&&o.push({code:"Text",data:{content:u.text,raw:!0}}),u.type===D.IMAGE){var _=o.find(function(G){return G.code==="Image"});_?_.data.push({url:u.image_url}):o.push({code:"Images",data:[{url:u.image_url}]})}if(u.type===D.VIDEO){var B=o.find(function(G){return G.code==="Videos"});B?B.data.push({src:u.video_url,poster:u.video_poster}):o.push({code:"Videos",data:[{src:u.video_url,poster:u.video_poster}]})}if(u.type===D.AUDIO){var I=o.find(function(G){return G.code==="Audios"});I?I.data.push({src:u.audio_url||u.data}):o.push({code:"Audios",data:[{src:u.audio_url||u.data}]})}if(u.type===D.FILE){var J=o.find(function(G){return G.code==="Files"});J?J.data.push({url:u.file_url,name:u.file_name||u.fileName,size:u.file_size}):o.push({code:"Files",data:[{url:u.file_url,name:u.file_name||u.fileName,size:u.file_size}]})}return o},[])},[s.data.input]);return v!=null&&v.length?(0,t.jsx)(Xe.Z,{role:"user",cards:v}):null}var Ln=e(66109),Bn=n.memo(function(s){var v,o=s.data;return(v=o.content)!==null&&v!==void 0&&v.length?(0,t.jsx)(t.Fragment,{children:o.content.map(function(u,_){switch(u.type){case D.TEXT:return(0,t.jsx)(Ln.Z,{content:u.text,cursor:u.status===F.InProgress},_);case D.REFUSAL:return(0,t.jsx)(Ln.Z,{raw:!0,content:u.refusal},_);default:return(0,t.jsx)("div",{children:JSON.stringify(u)},_)}})}):null}),Zn=Bn,Kn=e(85786),Xn=e(70770),Dn=e(86250),Jn=e(31912),Wn=e(7654),Rn=e(56290),zn,Hn,Nn,An,wn,Vn,Yn,dt,ft=(0,T.kc)(function(s){var v=s.css,o=s.token;return{container:v(zn||(zn=E()([`
    width: 386px;
  `]))),title:v(Hn||(Hn=E()([`
    font-size: 14px;
    font-weight: 500;
    color: `,`;
    margin-bottom: 16px;
  `])),o.colorText),content:v(Nn||(Nn=E()([`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `]))),tabsContainer:v(An||(An=E()([`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `]))),tabItem:v(wn||(wn=E()([`
    padding: 0 8px;
    font-size: 14px;
    color: `,`;
    cursor: pointer;
    border: 1px solid `,`;
    background: `,`;
    transition: all 0.2s;
    user-select: none;
    border-radius: 4px;
  `])),o.colorText,o.colorBorderSecondary,o.colorBgContainer),tabItemSelected:v(Vn||(Vn=E()([`
    color: `,`;
    border-color: `,`;
    border: 1px solid `,`;
    position: relative;
    z-index: 1;
  `])),o.colorPrimary,o.colorPrimary,o.colorPrimary),textarea:v(Yn||(Yn=E()([`
    resize: none;
  `]))),actions:v(dt||(dt=E()([`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  `])))}});function $n(){var s=(0,Rn.useTranslation)(),v=s.t;return[(v==null?void 0:v("cancelPopover.options.notNeeded"))||"\u4E0D\u9700\u8981",(v==null?void 0:v("cancelPopover.options.poorResult"))||"\u6548\u679C\u4E0D\u7406\u60F3",(v==null?void 0:v("cancelPopover.options.tooSlow"))||"\u7B49\u5F85\u65F6\u95F4\u4E45",(v==null?void 0:v("cancelPopover.options.wrongInput"))||"\u8F93\u5165\u9519\u8BEF"]}function qn(s){var v=s.options,o=(0,n.useState)(),u=re()(o,2),_=u[0],B=u[1],I=ft(),J=I.styles;return(0,t.jsx)("div",{className:J.tabsContainer,children:v.map(function(G){return(0,t.jsx)("div",{className:"".concat(J.tabItem," ").concat(_===G?J.tabItemSelected:""),onClick:function(){B(G),s.onSelect(G)},children:G},G)})})}function tt(s){var v=(0,Rn.useTranslation)(),o=v.t,u=$n(),_=s.options,B=_===void 0?u:_,I=s.onConfirm,J=s.title,G=J===void 0?(o==null?void 0:o("cancelPopover.title"))||"\u53D6\u6D88\u539F\u56E0":J,q=s.placeholder,se=q===void 0?(o==null?void 0:o("cancelPopover.placeholder"))||"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212":q,Se=(0,n.useState)(!1),Ae=re()(Se,2),Ze=Ae[0],ge=Ae[1],ve=ft(),he=ve.styles,We=(0,n.useState)(""),Te=re()(We,2),_e=Te[0],yn=Te[1],Gn=function(){I==null||I(_e.trim())},Tn=(0,t.jsxs)("div",{className:he.container,children:[(0,t.jsx)("div",{className:he.title,children:G}),(0,t.jsxs)("div",{className:he.content,children:[(0,t.jsx)(qn,{options:B,onSelect:yn}),(0,t.jsx)(Jn.Z.TextArea,{className:he.textarea,value:_e,onChange:function(Sn){return yn(Sn.target.value)},placeholder:se,rows:3}),(0,t.jsxs)(Dn.Z,{className:he.actions,children:[(0,t.jsx)(Ue.Z,{size:"small",onClick:function(){return ge(!1)},children:(o==null?void 0:o("cancelPopover.cancel"))||"\u53D6\u6D88"}),(0,t.jsx)(Ue.Z,{size:"small",type:"primary",onClick:function(){ge(!1),Gn()},children:(o==null?void 0:o("cancelPopover.confirm"))||"\u786E\u8BA4"})]})]})]});return(0,t.jsx)(Wn.Z,{open:Ze,onOpenChange:ge,trigger:"click",content:Tn,children:(0,t.jsx)(Ue.Z,{size:"small",children:(o==null?void 0:o("approval.cancel"))||"\u53D6\u6D88\u6267\u884C"})})}var rt,xt=(0,T.kc)(function(s){var v=s.css,o=s.token;return{desc:v(rt||(rt=E()([`
    font-size: 12px;
    color: `,`;
  `])),o.colorTextTertiary)}});function Ct(s){var v=s.data,o=je(function(ve){return ve}),u=xt(),_=u.styles,B=(0,Rn.useTranslation)(),I=B.t,J=(0,n.useState)("pending"),G=re()(J,2),q=G[0],se=G[1],Se=(I==null?void 0:I("approval.title"))||"\u4EBA\u5DE5\u5E72\u9884",Ae=(0,n.useMemo)(function(){return q==="pending"?(I==null?void 0:I("approval.pending"))||"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C":q==="confirmed"?(I==null?void 0:I("approval.confirmed"))||"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1":(I==null?void 0:I("approval.canceled"))||"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1"},[q,I]),Ze=(0,n.useCallback)(function(ve,he){var We;se(ve),o.setLoading(!1),o.setDisabled(!1);var Te=v,_e=(We=Te.content[0])===null||We===void 0||(We=We.data)===null||We===void 0?void 0:We.id,yn={type:Z.MCP_APPROVAL_RESPONSE,role:A.USER,content:[{type:D.DATA,data:{approve:ve==="confirmed",id:_e,approval_request_id:_e,reason:he}}]};Qe({type:"handleApproval",data:{input:[Te,yn]}})},[v]),ge=(0,n.useMemo)(function(){return q==="pending"?(0,t.jsxs)(Dn.Z,{gap:8,children:[(0,t.jsx)(tt,{onConfirm:function(he){return Ze("canceled",he)}}),(0,t.jsx)(Ue.Z,{size:"small",type:"primary",onClick:function(){return Ze("confirmed")},children:(I==null?void 0:I("approval.confirm"))||"\u786E\u8BA4\u6267\u884C"})]}):null},[q,I]);return(0,n.useEffect)(function(){q==="pending"&&(o.setLoading((I==null?void 0:I("approval.taskRunning"))||"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1"),o.setDisabled(!0))},[q,I]),(0,t.jsx)(Xn.Z.HITL,{done:q!=="pending",onDone:function(){},title:(0,t.jsxs)(Dn.Z,{gap:8,children:[Se,(0,t.jsx)("span",{className:_.desc,children:Ae})]}),actions:ge})}var at=n.memo(function(s){var v,o=s.data,u=s.isApproval,_=u===void 0?!1:u,B=l(function(ve){return ve.customToolRenderConfig})||{};if(!((v=o.content)!==null&&v!==void 0&&v.length))return null;var I=o.content,J=o.status===F.InProgress,G=I[0].data.name,q="".concat(I[0].data.server_label?I[0].data.server_label+" / ":""),se="".concat(q).concat(G),Se;if(B[G]){var Ae=B[G];Se=(0,t.jsx)(Ae,{data:o})}else{var Ze,ge;Se=(0,t.jsx)(Kn.Z,{loading:J,defaultOpen:!1,title:se==="undefined"?"":se,input:(Ze=I[0])===null||Ze===void 0||(Ze=Ze.data)===null||Ze===void 0?void 0:Ze.arguments,output:(ge=I[1])===null||ge===void 0||(ge=ge.data)===null||ge===void 0?void 0:ge.output})}return(0,t.jsxs)(t.Fragment,{children:[Se,_&&(0,t.jsx)(Ct,{data:o})]})}),vt=at,mt=e(79323);function et(s){var v,o=s.data;if(o.status===F.Created)return null;var u=o==null||(v=o.content)===null||v===void 0?void 0:v[0];return u?(0,t.jsx)(mt.Z,{loading:o.status===F.InProgress,title:"Thinking",content:u.text}):null}function ht(s){var v=s.data;return(0,t.jsx)(Xe.Z.Interrupted,{type:"error",title:v.code,desc:v.message})}var ot=e(89698),yt=e(60227),st=e(67055),bt=e(39536),gt=e(39693),jt=e.n(gt);function Et(s){return!s.input_tokens||!s.output_tokens?null:(0,t.jsx)(Xe.Z.Footer.Count,{data:[["Input",s.input_tokens],["Output",s.output_tokens]]})}function St(s){var v,o,u,_=(0,Rn.useTranslation)(),B=_.t,I=l(function(q){var se;return(se=q.actions)===null||se===void 0?void 0:se.list})||[{icon:(0,t.jsx)(ot.Z,{}),onClick:function(){(0,bt.J)(JSON.stringify(s.data))}}],J=(v=l(function(q){var se;return(se=q.actions)===null||se===void 0?void 0:se.replace}))!==null&&v!==void 0?v:!0,G=jt()([].concat(w()(I.map(function(q){var se=q;return q.render&&(se.children=n.createElement(q.render,{data:s})),h()(h()({},se),{},{onClick:function(){var Ae;(Ae=q.onClick)===null||Ae===void 0||Ae.call(q,s)}})})),[J&&s.isLast?{icon:(0,t.jsx)(st.Z,{title:(B==null?void 0:B("actions.regenerate"))||"\u91CD\u65B0\u751F\u6210",children:(0,t.jsx)(yt.Z,{})}),onClick:function(){Qe({type:"handleReplace",data:s})}}:null]));return ee.maybeDone(s.data)?(0,t.jsx)(Xe.Z.Footer,{left:(0,t.jsx)(Xe.Z.Footer.Actions,{data:G}),right:(0,t.jsx)(Et,{input_tokens:(o=s.data.usage)===null||o===void 0?void 0:o.input_tokens,output_tokens:(u=s.data.usage)===null||u===void 0?void 0:u.output_tokens})}):null}function Pt(s){var v=(0,n.useMemo)(function(){return ee.mergeToolMessages(s.data.output)},[s.data.output]);return!(v!=null&&v.length)&&ee.maybeGenerating(s.data)?(0,t.jsx)(Xe.Z.Spin,{}):(0,t.jsxs)(t.Fragment,{children:[v.map(function(o){switch(o.type){case Z.MESSAGE:return(0,t.jsx)(Zn,{data:o},o.id);case Z.PLUGIN_CALL:case Z.PLUGIN_CALL_OUTPUT:case Z.MCP_CALL:case Z.MCP_CALL_OUTPUT:return(0,t.jsx)(vt,{data:o},o.id);case Z.MCP_APPROVAL_REQUEST:return(0,t.jsx)(vt,{data:o,isApproval:!0},o.id);case Z.REASONING:return(0,t.jsx)(et,{data:o},o.id);case Z.ERROR:return(0,t.jsx)(ht,{data:o},o.id);case Z.HEARTBEAT:return null;default:return console.warn("[WIP] Unknown message type: ".concat(o.type)),null}}),s.data.error&&(0,t.jsx)(ht,{data:s.data.error}),(0,t.jsx)(St,h()({},s))]})}var it=e(83962);function At(s){var v=s.options,o=s.cards,u=s.children,_=[[Rn.ChatAnywhereI18nContextProvider,{defaultLocale:v.theme.locale}],[M,{options:v}],[it.xy,{cardConfig:o}],[cn,{}],[In,{}],[Ne,{}],[On,{}]];return _.reduceRight(function(B,I){var J=re()(I,2),G=J[0],q=J[1];return(0,t.jsx)(G,h()(h()({},q),{},{children:B}))},u)}var lt=At;function Tt(s,v){var o=s.options,u=o===void 0?{}:o,_=(0,n.useMemo)(function(){var B=h()({AgentScopeRuntimeRequestCard:Fn,AgentScopeRuntimeResponseCard:Pt},u.cards);return B},[u.cards]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(lt,{options:u,cards:_,children:(0,t.jsx)(jn,{ref:v})})})}var _t=(0,n.forwardRef)(Tt)},56290:function(sn,ne,e){"use strict";e.r(ne),e.d(ne,{ChatAnywhereI18nContextProvider:function(){return p},useChatAnywhereI18n:function(){return T},useTranslation:function(){return N}});var ae=e(5574),h=e.n(ae),R=e(59214),y=e(67294),b=e(85893),L={cn:{"approval.title":"\u4EBA\u5DE5\u5E72\u9884","approval.pending":"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C","approval.confirmed":"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1","approval.canceled":"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1","approval.cancel":"\u53D6\u6D88\u6267\u884C","approval.confirm":"\u786E\u8BA4\u6267\u884C","approval.taskRunning":"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1","cancelPopover.title":"\u53D6\u6D88\u539F\u56E0","cancelPopover.placeholder":"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212","cancelPopover.cancel":"\u53D6\u6D88","cancelPopover.confirm":"\u786E\u8BA4","cancelPopover.options.notNeeded":"\u4E0D\u9700\u8981","cancelPopover.options.poorResult":"\u6548\u679C\u4E0D\u7406\u60F3","cancelPopover.options.tooSlow":"\u7B49\u5F85\u65F6\u95F4\u4E45","cancelPopover.options.wrongInput":"\u8F93\u5165\u9519\u8BEF","common.save":"\u4FDD\u5B58","common.cancel":"\u53D6\u6D88","common.confirm":"\u786E\u8BA4","common.delete":"\u5220\u9664","common.edit":"\u7F16\u8F91","common.loading":"\u52A0\u8F7D\u4E2D...","common.saveSuccess":"\u4FDD\u5B58\u6210\u529F","common.saveFailed":"\u4FDD\u5B58\u5931\u8D25","actions.regenerate":"\u91CD\u65B0\u751F\u6210","messageImport.title":"Sessions \u6570\u636E\u5BFC\u5165","messageImport.placeholder":"\u8F93\u5165 JSON \u6570\u636E\u4EE5\u8986\u76D6\u5F53\u524D sessions","messageImport.saveToLocalStorage":"\u4FDD\u5B58\u5230 LocalStorage"},en:{"approval.title":"Human Intervention","approval.pending":"Please confirm whether to execute this operation","approval.confirmed":"Confirmed to execute task","approval.canceled":"Canceled task execution","approval.cancel":"Cancel","approval.confirm":"Confirm","approval.taskRunning":"A task is currently running, cannot send new task","cancelPopover.title":"Cancel Reason","cancelPopover.placeholder":"Please enter the reason for better AI planning","cancelPopover.cancel":"Cancel","cancelPopover.confirm":"Confirm","cancelPopover.options.notNeeded":"Not needed","cancelPopover.options.poorResult":"Poor result","cancelPopover.options.tooSlow":"Too slow","cancelPopover.options.wrongInput":"Wrong input","common.save":"Save","common.cancel":"Cancel","common.confirm":"Confirm","common.delete":"Delete","common.edit":"Edit","common.loading":"Loading...","common.saveSuccess":"Saved successfully","common.saveFailed":"Failed to save","actions.regenerate":"Regenerate","messageImport.title":"Import Sessions Data","messageImport.placeholder":"Enter JSON data to override current sessions","messageImport.saveToLocalStorage":"Save to LocalStorage"}},E=(0,R.createContext)(void 0);function T(x){try{var P=(0,R.useContextSelector)(E,x);return P}catch(S){return{}}}function N(){var x=T(function(g){return g==null?void 0:g.t}),P=T(function(g){return g==null?void 0:g.locale}),S=T(function(g){return g==null?void 0:g.setLocale});return{t:x,locale:P,setLocale:S}}function p(x){var P=x.children,S=x.defaultLocale,g=S===void 0?"en":S,n=(0,y.useState)(g),d=h()(n,2),k=d[0],i=d[1],t=(0,y.useCallback)(function(l,M){var ce=L[k][l]||l;return M&&Object.entries(M).forEach(function(ie){var f=h()(ie,2),me=f[0],K=f[1];ce=ce.replace(new RegExp("\\{".concat(me,"\\}"),"g"),String(K))}),ce},[k]),O=(0,y.useMemo)(function(){return{locale:k,setLocale:i,t,messages:L[k]}},[k,i,t]);return(0,b.jsx)(E.Provider,{value:O,children:P})}ne.default=E},57551:function(){},22863:function(sn,ne,e){"use strict";e.r(ne);var ae=e(57551),h=e.n(ae),R={};for(var y in ae)y!=="default"&&(R[y]=function(b){return ae[b]}.bind(0,y));e.d(ne,R)},34487:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return w}});var ae=e(97857),h=e.n(ae),R=e(5574),y=e.n(R),b=e(56044),L=e(68400),E=e.n(L),T=e(9053),N,p=(0,T.vJ)(N||(N=E()([`
.`,`-assets-preview {
  position: relative;

  &-left-edge,
  &-right-edge {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 128px;
    pointer-events: none;
  }

  &-left-edge {
    left: 0;
    background: linear-gradient(to right, `,`, rgba(0, 0, 0, 0));
  }

  &-right-edge {
    right: 0;
    background: linear-gradient(to left, `,`, rgba(0, 0, 0, 0));
  }

  &-arrow {
    position: absolute;
    bottom: 0;
  }

  &-left-arrow {
    left: 10px;
  }

  &-right-arrow {
    right: 10px;
  }

  &-container {
    display: flex;
    padding: 8px;
    gap: 8px;
    overflow-x: auto;
    justify-content: safe center;
    background-color: `,`;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome/Safari/Opera */
    }
  }


  &-image {
    height: 100%;
    flex-basis: auto;
    flex-shrink: 0;
    border-radius: 8px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .anticon-eye {
      font-size: 20px;
      margin: 0 !important;
    }
  }

  &-video {
    height: 100%;
    flex-basis: auto;
    flex-shrink: 0;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    &-enlarge {
      display: none;
      position: absolute;
      top: 6px;
      right: 6px;
      z-index: 1;
      border-radius: 4px;
      background-color: `,`;

      button {
        display: flex;
      }
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &:fullscreen {
        object-fit: contain;
      }

      &:-webkit-full-screen {
        object-fit: contain;
      }

      &:-moz-full-screen {
        object-fit: contain;
      }
    }

    &-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 8px;

      &:hover {
        .`,`-assets-preview-video-enlarge {
          display: block;
        }
      }

      &-playing {
        opacity: 0;
        &:hover {
          opacity: 1;
          background: linear-gradient(180deg, rgba(111, 111, 111, 0.27) 0%, rgba(38, 36, 76, 0.83) 100%);
        }
      }

      &-paused {
        background: linear-gradient(180deg, rgba(111, 111, 111, 0.27) 0%, rgba(38, 36, 76, 0.83) 100%);
      }
    }

    &-play-btn {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      transition: transform 0.2s ease;
      font-size: 40px;
      

      &:hover {
        transform: scale(1.1);
      }
    }

    &-duration {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 8px;
      left: 0px;
      height: 28px;
      bottom: 0;
      right: 0;
      font-size: 14px;
      font-weight: 500;
      color: #fff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      background: linear-gradient(180deg, rgba(111, 111, 111, 0.27) 0%, rgba(38, 36, 76, 0.83) 100%);
    }

    &-overlay {
      &:hover {
        ~ .`,`-assets-preview-video-duration {
          background: transparent;
        }
      }
    }

    &-playing-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
    
  &-audio {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: `,`;
    border-radius: 8px;
    border: 1px solid `,`;
    height: 40px;
    padding: 0 8px;

    &-time {
      font-size: 12px;
      color: `,`;
      line-height: 1;
    }

    &-progress {
      flex: 1;
      height: 8px;
      background-color: `,`;
      border-radius: 4px;
      cursor: pointer;
      position: relative;
      overflow: hidden;

      &-bar {
        height: 100%;
        background-color: `,`;
        border-radius: 4px;
        transition: width 0.1s linear;
      }
    }
  }
}
`])),function(te){return te.theme.prefixCls},function(te){return te.theme.colorBgLayout},function(te){return te.theme.colorBgLayout},function(te){return te.theme.colorFillTertiary},function(te){return te.theme.colorBgBase},function(te){return te.theme.prefixCls},function(te){return te.theme.prefixCls},function(te){return te.theme.colorBgBase},function(te){return te.theme.colorBorderSecondary},function(te){return te.theme.colorText},function(te){return te.theme.colorBorderSecondary},function(te){return te.theme.colorPrimary}),x=e(93967),P=e.n(x),S=e(55839),g=e(16494),n=e(85893);function d(te){var Le=(0,b.wv)().getPrefixCls("assets-preview-image"),Be=te.width,ze=Be===void 0?1:Be,He=te.height,Me=He===void 0?1:He,un=te.src;return(0,n.jsx)("div",{className:Le,style:{aspectRatio:"".concat(ze,"/").concat(Me)},children:(0,n.jsx)(S.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(g.Z,{src:un,width:"100%",height:"100%"})})})}function k(te){return(0,n.jsx)(g.Z.PreviewGroup,{children:te.children})}var i=e(9783),t=e.n(i),O=e(13769),l=e.n(O),M=e(67294),ce=e(63701),ie=e(62321),f=e(32485),me=e(64057),K=["width","height","poster","src"];function V(te){var Le=(0,b.wv)().getPrefixCls("assets-preview-video"),Be=te.width,ze=Be===void 0?1:Be,He=te.height,Me=He===void 0?1:He,un=te.poster,dn=te.src,ln=l()(te,K),Xe=(0,M.useRef)(null),Fe=(0,M.useState)(!1),In=y()(Fe,2),U=In[0],ye=In[1],De=(0,M.useState)(0),tn=y()(De,2),fn=tn[0],Qe=tn[1],Ve=(0,M.useState)(0),cn=y()(Ve,2),rn=cn[0],vn=cn[1],an=(0,M.useCallback)(function(hn){var a=Math.floor(hn/60),Ke=Math.floor(hn%60);return"".concat(a.toString().padStart(2,"0"),":").concat(Ke.toString().padStart(2,"0"))},[]),mn=(0,M.useCallback)(function(){var hn=Xe.current;hn&&(hn.paused?(hn.play(),ye(!0)):(hn.pause(),ye(!1)))},[]),Ye=(0,M.useCallback)(function(){Xe.current&&Qe(Xe.current.duration)},[]),_n=(0,M.useCallback)(function(){ye(!1),vn(0)},[]),Pn=(0,M.useCallback)(function(){Xe.current&&vn(Xe.current.currentTime)},[]),Mn=(0,M.useCallback)(function(hn){hn.stopPropagation();var a=Xe.current;a&&(a.requestFullscreen?a.requestFullscreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.msRequestFullscreen&&a.msRequestFullscreen())},[]);return(0,n.jsxs)("div",{className:Le,style:{aspectRatio:"".concat(ze,"/").concat(Me)},children:[(0,n.jsx)("video",h()(h()({},ln),{},{ref:Xe,src:dn,poster:un,preload:"metadata",onLoadedMetadata:Ye,onTimeUpdate:Pn,onEnded:_n})),(0,n.jsxs)("div",{className:P()("".concat(Le,"-overlay"),t()({},"".concat(Le,"-overlay-playing"),1)),onClick:mn,children:[(0,n.jsx)("div",{className:"".concat(Le,"-play-btn"),children:U?(0,n.jsx)(ce.Z,{}):(0,n.jsx)(ie.Z,{})}),(0,n.jsx)("div",{className:"".concat(Le,"-enlarge"),onClick:Mn,children:(0,n.jsx)(me.Z,{bordered:!1,size:"small",icon:(0,n.jsx)(f.Z,{})})})]}),(0,n.jsx)("div",{className:"".concat(Le,"-duration"),children:an(fn-rn)})]})}var re=e(20399),de=e(80162);function Re(te){var Le=(0,b.wv)().getPrefixCls("assets-preview-audio"),Be=(0,M.useRef)(null),ze=(0,M.useState)(!1),He=y()(ze,2),Me=He[0],un=He[1],dn=(0,M.useState)(!1),ln=y()(dn,2),Xe=ln[0],Fe=ln[1],In=(0,M.useState)(0),U=y()(In,2),ye=U[0],De=U[1],tn=(0,M.useState)(0),fn=y()(tn,2),Qe=fn[0],Ve=fn[1],cn=(0,M.useCallback)(function(Ye){if(isNaN(Ye))return"00:00";var _n=Math.floor(Ye/60),Pn=Math.floor(Ye%60);return"".concat(_n.toString().padStart(2,"0"),":").concat(Pn.toString().padStart(2,"0"))},[]),rn=(0,M.useCallback)(function(){Be.current&&(Me?Be.current.pause():Be.current.play(),un(!Me))},[Me]),vn=(0,M.useCallback)(function(){Fe(!Xe),Be.current&&(Be.current.muted=Xe)},[Xe]),an=(0,M.useCallback)(function(Ye){if(Be.current&&Qe){var _n=Ye.currentTarget.getBoundingClientRect(),Pn=Ye.clientX-_n.left,Mn=Pn/_n.width,hn=Mn*Qe;Be.current.currentTime=hn,De(hn)}},[Qe]);(0,M.useEffect)(function(){var Ye=Be.current;if(Ye){var _n=function(){return De(Ye.currentTime)},Pn=function(){return Ve(Ye.duration)},Mn=function(){return un(!1)};return Ye.addEventListener("timeupdate",_n),Ye.addEventListener("loadedmetadata",Pn),Ye.addEventListener("ended",Mn),function(){Ye.removeEventListener("timeupdate",_n),Ye.removeEventListener("loadedmetadata",Pn),Ye.removeEventListener("ended",Mn)}}},[]);var mn=Qe?ye/Qe*100:0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("audio",{ref:Be,src:te.src,muted:Xe}),(0,n.jsxs)("div",{className:Le,children:[(0,n.jsx)(me.Z,{size:"small",type:"text",onClick:rn,icon:Me?(0,n.jsx)(ce.Z,{}):(0,n.jsx)(ie.Z,{})}),(0,n.jsx)(me.Z,{size:"small",type:"text",onClick:vn,icon:Xe?(0,n.jsx)(re.Z,{}):(0,n.jsx)(de.Z,{})}),(0,n.jsx)("div",{className:"".concat(Le,"-time"),children:cn(ye)}),(0,n.jsx)("div",{className:"".concat(Le,"-progress"),onClick:an,children:(0,n.jsx)("div",{className:"".concat(Le,"-progress-bar"),style:{width:"".concat(mn,"%")}})}),(0,n.jsx)("div",{className:"".concat(Le,"-time"),children:cn(Qe)})]})]})}var C=e(16138),ke=e(83202),Ne=e(90105),je=e(82052);function xe(te){var Le,Be=(0,Ne.Z)(),ze=(0,b.wv)().getPrefixCls("assets-preview"),He=(0,M.useRef)(null),Me=te.height,un=Me===void 0?144:Me,dn=un/2-12,ln=(0,M.useRef)(0),Xe=(0,M.useState)(0),Fe=y()(Xe,2),In=Fe[0],U=Fe[1],ye=(0,M.useDeferredValue)(In),De=(0,je.Z)(He),tn=(0,M.useCallback)(function(cn){U(cn.target.scrollLeft)},[]);(0,M.useEffect)(function(){He.current&&te.type!=="audio"&&(ln.current=He.current.scrollWidth-He.current.clientWidth),Be()},[te.data.length,De==null?void 0:De.width]);var fn=(0,M.useCallback)(function(cn){var rn=200;He.current.scrollLeft=He.current.scrollLeft+rn*(cn==="left"?-1:1)},[]),Qe={image:d,video:V,audio:Re}[te.type],Ve=te.data.map(function(cn,rn){return(0,n.jsx)(Qe,h()({},cn),rn)});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{}),(0,n.jsxs)("div",{className:P()("".concat(ze),te.className),children:[(0,n.jsx)("div",{className:P()("".concat(ze,"-container"),(Le=te.classNames)===null||Le===void 0?void 0:Le.container),style:te.type!=="audio"?{height:un}:{flexDirection:"column"},onScroll:tn,ref:He,children:te.type==="image"?(0,n.jsx)(k,{children:Ve}):Ve}),dn>0&&te.type!=="audio"?(0,n.jsxs)(n.Fragment,{children:[ye>50&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:P()("".concat(ze,"-left-edge"))}),(0,n.jsx)(me.Z,{onClick:function(){return fn("left")},style:{top:dn},className:P()("".concat(ze,"-left-arrow"),"".concat(ze,"-arrow")),size:"small",shape:"circle",icon:(0,n.jsx)(C.Z,{})})]}),ye<ln.current-50&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:P()("".concat(ze,"-right-edge"))}),(0,n.jsx)(me.Z,{onClick:function(){return fn("right")},style:{top:dn},className:P()("".concat(ze,"-right-arrow"),"".concat(ze,"-arrow")),size:"small",shape:"circle",icon:(0,n.jsx)(ke.Z,{})})]})]}):null]})]})}var w=xe},50993:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return hn}});var ae=e(9783),h=e.n(ae),R=e(97857),y=e.n(R),b=e(5574),L=e.n(b),E=e(13769),T=e.n(E),N=e(93967),p=e.n(N),x=e(67294),P=e(56044),S=e(56790),g=e(73935),n=x.createContext(null),d=e(85893);function k(a){var Ke=a.getDropContainer,qe=a.className,pn=a.prefixCls,c=a.children,F=x.useContext(n),A=F.disabled,Z=x.useState(),D=L()(Z,2),$=D[0],oe=D[1],Ce=x.useState(null),r=L()(Ce,2),m=r[0],j=r[1];x.useEffect(function(){var z=Ke==null?void 0:Ke();$!==z&&oe(z)},[Ke]),x.useEffect(function(){if($){var z=function(){j(!0)},H=function(le){le.preventDefault()},ee=function(le){le.relatedTarget||j(!1)},fe=function(le){j(!1),le.preventDefault()};return document.addEventListener("dragenter",z),document.addEventListener("dragover",H),document.addEventListener("dragleave",ee),document.addEventListener("drop",fe),function(){document.removeEventListener("dragenter",z),document.removeEventListener("dragover",H),document.removeEventListener("dragleave",ee),document.removeEventListener("drop",fe)}}},[!!$]);var W=Ke&&$&&!A;if(!W)return null;var Y="".concat(pn,"-drop-area");return(0,g.createPortal)((0,d.jsx)("div",{className:p()(Y,qe,h()({},"".concat(Y,"-on-body"),$.tagName==="BODY")),style:{display:m?"block":"none"},children:c}),$)}var i=e(53033),t=e(52861),O=e(83622),l=e(29372),M=e(64599),ce=e.n(M),ie=e(68400),f=e.n(ie),me=e(9053),K,V=(0,me.vJ)(K||(K=f()([`
.`,`-attachment-list-card {
  border-radius: `,`px;
  position: relative;
  background: `,`;
  border-width: `,`px;
  border-style: solid;
  border-color: `,`;
  flex: none;
  transition: all 0.3s;

  &-name,
  &-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }

  &-ellipsis-prefix {
    flex: 0 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &-ellipsis-suffix {
    flex: none;
  }

  &-type-overview {
    padding: 0 8px;
    display: flex;
    height: 56px;
    gap: `,`px;
    align-items: center;
    width: 140px;

    .`,`-attachment-list-card-icon {
      display: flex;
      align-items: center;
    }

    .`,`-attachment-list-card-content {
      flex: auto;
      min-width: 0;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      font-size: `,`px;
      color: `,`;
    }

    .`,`-attachment-list-card-desc {
      color: `,`;
      font-size: `,`px;
    }
  }

  &-type-preview {
    width: 100px;
    height: 56px;
    line-height: 1;

    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      object-fit: cover;
      border-radius: 6px;
    }

    .`,`-attachment-list-card-img-mask {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, `,`);
      border-radius: inherit;
    }

    .`,`-attachment-list-card-img-hover-mask {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 16px;
      background: rgba(20, 19, 39, 0.45);
      border-radius: 6px;
      opacity: 0;
      transition: opacity 0.2s;
    }

    &:hover .`,`-attachment-list-card-img-hover-mask {
      opacity: 1;
    }

    .`,`-attachment-list-card-img-action {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      padding: 0;
      border: none;
      background: transparent;
      color: `,`;
      font-size: 20px;
      cursor: pointer;
      line-height: 1;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }

    &.`,`-attachment-list-card-status-error {

      img,
      .`,`-attachment-list-card-img-mask {
        border-radius: calc(`,"px - ",`px);
      }

      .`,`-attachment-list-card-desc {
        padding-inline: `,`px;
      }
    }

    .`,`-attachment-list-card-progress {
    }
  }

  &-remove {
    position: absolute;
    top: -6px;
    right: -6px;
    width: 16px;
    height: 16px;
    line-height: 1;
    font-size: 10px;
    cursor: pointer;
    display: none;
    color: `,`;
    background-color: `,`;
    border-width: `,`px;
    border-style: solid;
    border-color: `,`;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    z-index: 1;

    &:dir(rtl) {
      transform: translate(-50%, -50%);
    }
  }

  &:hover &-remove {
    display: flex;
    
  }

  &-status-error {
    border-color: `,`;

    .`,`-attachment-list-card-desc {
      color: `,`;
    }
  }

  &-motion {

    &-appear-start {
      width: 0;
      transition: none;
    }

    &-leave-active {
      opacity: 0;
      width: 0;
      padding-inline: 0;
      border-inline-width: 0;
      margin-inline-end: calc(-1 * `,`px);
    }
  }
}

.`,`-attachment-list-card-hoverable {
  position: relative;

  &:hover {
    border-color: `,`;
  }

  &.`,`-attachment-list-card-type-overview:hover {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      border-radius: 5px;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.45);
    }
  }
}
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.borderRadius},function(a){return a.theme.colorBgContainer},function(a){return a.theme.lineWidth},function(a){return a.theme.colorBorderSecondary},function(a){return a.theme.paddingXS},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.fontSize},function(a){return a.theme.colorText},function(a){return a.theme.prefixCls},function(a){return a.theme.colorTextQuaternary},function(a){return a.theme.fontSizeSM},function(a){return a.theme.prefixCls},function(a){return a.theme.opacityLoading},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.colorWhite},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.borderRadius},function(a){return a.theme.lineWidth},function(a){return a.theme.prefixCls},function(a){return a.theme.paddingXXS},function(a){return a.theme.prefixCls},function(a){return a.theme.colorText},function(a){return a.theme.colorBgContainer},function(a){return a.theme.lineWidth},function(a){return a.theme.colorBorder},function(a){return a.theme.colorError},function(a){return a.theme.prefixCls},function(a){return a.theme.colorError},function(a){return a.theme.paddingSM},function(a){return a.theme.prefixCls},function(a){return a.theme.colorPrimary},function(a){return a.theme.prefixCls}),re=e(89102),de=e(16494),Re=function(Ke){return Ke.indexOf("image/")===0},C=200;function ke(a){return new Promise(function(Ke){if(!a||!a.type||!Re(a.type)){Ke("");return}var qe=new Image;if(qe.onload=function(){var F=qe.width,A=qe.height,Z=F/A,D=Z>1?C:C*Z,$=Z>1?C/Z:C,oe=document.createElement("canvas");oe.width=D,oe.height=$,oe.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(D,"px; height: ").concat($,"px; z-index: 9999; display: none;"),document.body.appendChild(oe);var Ce=oe.getContext("2d");Ce.drawImage(qe,0,0,D,$);var r=oe.toDataURL();document.body.removeChild(oe),window.URL.revokeObjectURL(qe.src),Ke(r)},qe.crossOrigin="anonymous",a.type.startsWith("image/svg+xml")){var pn=new FileReader;pn.onload=function(){pn.result&&typeof pn.result=="string"&&(qe.src=pn.result)},pn.readAsDataURL(a)}else if(a.type.startsWith("image/gif")){var c=new FileReader;c.onload=function(){c.result&&Ke(c.result)},c.readAsDataURL(a)}else qe.src=window.URL.createObjectURL(a)})}var Ne=e(9361),je=e(38703);function xe(a){var Ke=a.percent,qe=Ne.Z.useToken(),pn=qe.token;return(0,d.jsx)(je.Z,{type:"circle",percent:Ke,size:40,strokeColor:"#FFF",trailColor:"rgba(255, 255, 255, 0.3)",format:function(F){return(0,d.jsxs)("span",{style:{color:"#FFF"},children:[(F||0).toFixed(0),"%"]})}})}var w=e(43974),te=e(60227),Le="\xA0",Be="image/png,image/jpeg,image/jpg,image/gif,image/bmp,image/webp,image/svg+xml";function ze(a,Ke){var qe=(0,P.wv)(),pn=qe.getPrefixCls,c=a.item,F=a.onRemove,A=a.onReplace,Z=a.className,D=a.style,$=x.useContext(n),oe=$||{},Ce=oe.disabled,r=c.percent,m=c.status,j=m===void 0?"done":m,W=c.description,Y=pn("attachment"),z="".concat(Y,"-list-card"),H=x.useState(!1),ee=L()(H,2),fe=ee[0],X=ee[1],le=x.useRef(null),Ee=x.useMemo(function(){return{visible:fe,onVisibleChange:X}},[fe]),Ue=x.useMemo(function(){return W||(j==="uploading"?"".concat(r||0,"%"):j==="error"&&c.response||Le)},[W,j,r,c.response]),$e=x.useState(),Je=L()($e,2),on=Je[0],Pe=Je[1];x.useEffect(function(){if(c.originFileObj){var Cn=!0;return ke(c.originFileObj).then(function(Ge){Cn&&Pe(Ge)}),function(){Cn=!1}}Pe(void 0)},[c.originFileObj]);var ue=c.thumbUrl||c.url||on,Q=function(Ge){var xn;Ge.stopPropagation(),(xn=le.current)===null||xn===void 0||xn.click()},On=function(Ge){var xn,en=(xn=Ge.target.files)===null||xn===void 0?void 0:xn[0];en&&A&&A(c,en),le.current&&(le.current.value="")};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(V,{}),(0,d.jsxs)("div",{className:p()(z,h()(h()(h()({},"".concat(z,"-status-").concat(j),j),"".concat(z,"-type-preview"),!0),"".concat(z,"-hoverable"),!Ce&&F),Z),style:D,ref:Ke,children:[ue&&(0,d.jsx)("img",{alt:"preview",src:ue}),(0,d.jsx)(de.Z,{src:ue,style:{display:"none"},preview:Ee}),j!=="done"&&(0,d.jsxs)("div",{className:"".concat(z,"-img-mask"),children:[j==="uploading"&&r!==void 0&&(0,d.jsx)(xe,{percent:r,prefixCls:z}),j==="error"&&(0,d.jsx)("div",{className:"".concat(z,"-desc"),children:(0,d.jsx)("div",{className:"".concat(z,"-ellipsis-prefix"),children:Ue})})]}),j==="done"&&(0,d.jsxs)("div",{className:"".concat(z,"-img-hover-mask"),children:[(0,d.jsx)("button",{className:"".concat(z,"-img-action"),onClick:function(Ge){Ge.stopPropagation(),X(!0)},children:(0,d.jsx)(w.Z,{})}),A&&(0,d.jsx)("button",{className:"".concat(z,"-img-action"),onClick:Q,children:(0,d.jsx)(te.Z,{})})]}),(0,d.jsx)("input",{ref:le,type:"file",accept:Be,style:{display:"none"},onChange:On}),(0,d.jsx)("button",{style:{opacity:!Ce&&F?1:0},className:"".concat(z,"-remove"),onClick:function(){!Ce&&F&&F(c)},children:(0,d.jsx)(re.Z,{})})]})]})}var He=x.forwardRef(ze),Me="\xA0",un="#8c8c8c",dn=["png","jpg","jpeg","gif","bmp","webp","svg"],ln=function(Ke){var qe=Ke.url;return(0,d.jsx)("img",{src:qe,width:32,height:32})},Xe=[{icon:(0,d.jsx)(ln,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01cVtZXI23tPVhiZoPJ_!!6000000007313-55-tps-40-40.svg"}),color:"#22b35e",ext:["xlsx","xls"]},{icon:(0,d.jsx)(ln,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01uDnnuz1XMNEjgFMul_!!6000000002909-55-tps-40-40.svg"}),color:un,ext:dn},{icon:(0,d.jsx)(ln,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01PaXli01DDPAO68fsI_!!6000000000182-55-tps-40-40.svg"}),color:un,ext:["md","mdx"]},{icon:(0,d.jsx)(ln,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01mB5PzD27fuIWK661W_!!6000000007825-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["pdf"]},{icon:(0,d.jsx)(ln,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01a8j7Jv1nW1QyFme7k_!!6000000005096-55-tps-40-40.svg"}),color:"#ff6e31",ext:["ppt","pptx"]},{icon:(0,d.jsx)(ln,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01XaNi8P1UkhQXoQdUL_!!6000000002556-55-tps-40-40.svg"}),color:"#1677ff",ext:["doc","docx"]},{icon:(0,d.jsx)(ln,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),color:"#fab714",ext:["zip","rar","7z","tar","gz"]},{icon:(0,d.jsx)(ln,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01zTTe0q1Xg4GkZgJol_!!6000000002952-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["mp4","avi","mov","wmv","flv","mkv"]},{icon:(0,d.jsx)(ln,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01qOBdXG1UpHO6f3Vvc_!!6000000002566-55-tps-40-40.svg"}),color:"#8c8c8c",ext:["mp3","wav","flac","ape","aac","ogg"]}];function Fe(a,Ke){return Ke.some(function(qe){return a.toLowerCase()===".".concat(qe)})}function In(a){for(var Ke=a,qe=["B","KB","MB","GB","TB","PB","EB"],pn=0;Ke>=1024&&pn<qe.length-1;)Ke/=1024,pn++;return"".concat(Ke.toFixed(0)," ").concat(qe[pn])}function U(a,Ke){var qe=(0,P.wv)(),pn=qe.getPrefixCls,c=a.item,F=a.onRemove,A=a.onReplace,Z=a.className,D=a.style,$=x.useContext(n),oe=$||{},Ce=oe.disabled,r=c.name,m=c.size,j=c.percent,W=c.status,Y=W===void 0?"done":W,z=c.description,H=pn("attachment"),ee="".concat(H,"-list-card"),fe=x.useMemo(function(){var Cn=r||"",Ge=Cn.match(/^(.*)\.[^.]+$/);return Ge?[Ge[1],Cn.slice(Ge[1].length)]:[Cn,""]},[r]),X=L()(fe,2),le=X[0],Ee=X[1],Ue=x.useMemo(function(){return Fe(Ee,dn)},[Ee]),$e=a.renderType||"default",Je=Ue&&(c.originFileObj||c.thumbUrl||c.url)&&$e==="default";if(Je)return(0,d.jsx)(He,{ref:Ke,item:c,onRemove:F,onReplace:A,className:Z,style:D});var on=function(){return z||(Y==="uploading"?"".concat(j||0,"%"):Y==="error"?c.response||Me:m?In(m):Me)}(),Pe=function(){var Cn=ce()(Xe),Ge;try{for(Cn.s();!(Ge=Cn.n()).done;){var xn=Ge.value,en=xn.ext,bn=xn.icon,Ie=xn.color;if(Fe(Ee,en))return[bn,Ie]}}catch(Oe){Cn.e(Oe)}finally{Cn.f()}return[(0,d.jsx)(ln,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"},"defaultIcon"),un]}(),ue=L()(Pe,2),Q=ue[0],On=ue[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(V,{}),(0,d.jsxs)("div",{className:p()(ee,h()(h()(h()(h()({},"".concat(ee,"-status-").concat(Y),Y),"".concat(ee,"-type-overview"),!0),"".concat(ee,"-type-").concat($e),!0),"".concat(ee,"-hoverable"),!Ce&&F),Z),style:D,ref:Ke,children:[(0,d.jsx)("div",{className:"".concat(ee,"-icon"),style:{color:On},children:Q}),(0,d.jsxs)("div",{className:"".concat(ee,"-content"),children:[(0,d.jsxs)("div",{className:"".concat(ee,"-name"),children:[le!=null?le:Me,Ee]}),(0,d.jsx)("div",{className:"".concat(ee,"-desc"),children:(0,d.jsx)("div",{className:"".concat(ee,"-ellipsis-prefix"),children:on})})]}),(0,d.jsx)("button",{style:{opacity:!Ce&&F?1:0},className:"".concat(ee,"-remove"),onClick:function(){!Ce&&F&&F(c)},children:(0,d.jsx)(re.Z,{})})]})]})}var ye=x.forwardRef(U),De=1;function tn(a){var Ke=a.prefixCls,qe=a.items,pn=a.onRemove,c=a.onReplace,F=a.overflow,A=a.listClassName,Z=a.listStyle,D=a.itemClassName,$=a.itemStyle,oe="".concat(Ke,"-list"),Ce=x.useRef(null),r=x.useState(!1),m=L()(r,2),j=m[0],W=m[1];x.useEffect(function(){return W(!0),function(){W(!1)}},[]);var Y=x.useState(!1),z=L()(Y,2),H=z[0],ee=z[1],fe=x.useState(!1),X=L()(fe,2),le=X[0],Ee=X[1],Ue=function(){var ue=Ce.current;ue&&(F==="scrollX"?(ee(Math.abs(ue.scrollLeft)>=De),Ee(ue.scrollWidth-ue.clientWidth-Math.abs(ue.scrollLeft)>=De)):F==="scrollY"&&(ee(ue.scrollTop!==0),Ee(ue.scrollHeight-ue.clientHeight!==ue.scrollTop)))};x.useEffect(function(){Ue()},[F]);var $e=function(ue){var Q=Ce.current;Q&&Q.scrollTo({left:Q.scrollLeft+ue*Q.clientWidth,behavior:"smooth"})},Je=function(){$e(-1)},on=function(){$e(1)};return(0,d.jsxs)("div",{className:p()(oe,h()(h()(h()({},"".concat(oe,"-overflow-").concat(a.overflow),F),"".concat(oe,"-overflow-ping-start"),H),"".concat(oe,"-overflow-ping-end"),le),A),ref:Ce,onScroll:Ue,style:Z,children:[(0,d.jsx)(l.V4,{keys:qe.map(function(Pe){return{key:Pe.uid,item:Pe}}),motionName:"".concat(oe,"-card-motion"),component:!1,motionAppear:j,motionLeave:!0,motionEnter:!0,children:function(ue){var Q=ue.key,On=ue.item,Cn=ue.className,Ge=ue.style;return(0,d.jsx)(ye,{prefixCls:Ke,item:On,onRemove:pn,onReplace:c,className:p()(Cn,D),style:y()(y()({},Ge),$),renderType:a.renderType},Q)}}),F==="scrollX"&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(O.ZP,{size:"small",shape:"circle",className:"".concat(oe,"-prev-btn"),icon:(0,d.jsx)(i.Z,{}),onClick:Je}),(0,d.jsx)(O.ZP,{size:"small",shape:"circle",className:"".concat(oe,"-next-btn"),icon:(0,d.jsx)(t.Z,{}),onClick:on})]})]})}var fn=e(86250),Qe=e(21317),Ve=e(41154);function cn(a,Ke){var qe=a.prefixCls,pn=a.placeholder,c=pn===void 0?{}:pn,F=a.upload,A=a.className,Z=a.style,D="".concat(qe,"-placeholder"),$=c||{},oe=x.useContext(n),Ce=oe.disabled,r=x.useState(!1),m=L()(r,2),j=m[0],W=m[1],Y=function(){W(!0)},z=function(X){X.currentTarget.contains(X.relatedTarget)||W(!1)},H=function(){W(!1)},ee=x.isValidElement(c)?c:(0,d.jsxs)(fn.Z,{align:"center",justify:"center",vertical:!0,className:"".concat(D,"-inner"),children:[(0,d.jsx)(Qe.default.Text,{className:"".concat(D,"-icon"),children:$.icon}),(0,d.jsx)(Qe.default.Title,{className:"".concat(D,"-title"),level:5,children:$.title}),(0,d.jsx)(Qe.default.Text,{className:"".concat(D,"-description"),type:"secondary",children:$.description})]});return(0,d.jsx)("div",{className:p()(D,h()(h()({},"".concat(D,"-drag-in"),j),"".concat(D,"-disabled"),Ce),A),onDragEnter:Y,onDragLeave:z,onDrop:H,"aria-hidden":Ce,style:Z,children:(0,d.jsx)(Ve.Z.Dragger,y()(y()({showUploadList:!1},F),{},{ref:Ke,style:{padding:0,border:0,background:"transparent"},children:ee}))})}var rn=x.forwardRef(cn);function vn(a,Ke){var qe=a.children,pn=a.upload,c=a.rootClassName,F=x.useRef(null);return x.useImperativeHandle(Ke,function(){return F.current}),(0,d.jsx)(Ve.Z,y()(y()({},pn),{},{showUploadList:!1,rootClassName:c,ref:F,children:qe}))}var an=x.forwardRef(vn),mn,Ye=(0,me.vJ)(mn||(mn=f()([`
.`,`-attachment {
  position: relative;
  width: 100%;
  box-sizing: border-box;

  &,
  * {
    box-sizing: border-box;
  }

  &-drop-area {
    position: absolute;
    inset: 0;
    z-index: `,`
    box-sizing: border-box;

    &,
    * {
      box-sizing: border-box;
    }

    &-on-body {
      position: fixed;
      inset: 0;
    }

    &-hide-placement {
      .`,`-attachment-placeholder-inner {
        display: none;
      }
    }

    .`,`-attachment-placeholder {
      padding: 0;
    }
  }

  &-placeholder {
    height: 100%;
    border-radius: `,`px;
    border-width: `,`px;
    border-style: dashed;
    border-color: transparent;
    padding: `,`px;
    position: relative;
    backdrop-filter: blur(10px);
    box-sizing: border-box;

    &,
    * {
      box-sizing: border-box;
    }

    .`,"-upload-wrapper .","-upload.",`-upload-btn {
      padding: 0;
    }

    &.`,`-attachment-placeholder-drag-in {
      border-color: `,`;
    }

    &.`,`-attachment-placeholder-disabled {
      opacity: 0.25;
      pointer-events: none;
    }

    &-inner {
      gap: calc(`,`px / 2);
    }

    &-icon {
      font-size: `,`px;
      line-height: 1;
    }

    &-title.`,`-attachment-placeholder-title {
      margin: 0;
      font-size: `,`px;
      line-height: `,`;
    }
  }

  &-list {
    display: flex;
    gap: `,`px;
    font-size: `,`px;
    line-height: `,`;
    color: `,`;
    width: 100%;
    overflow: auto;
    padding: `,`px;
    padding-bottom: 0;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    &-overflow-scrollX,
    &-overflow-scrollY {
      &:before,
      &:after {
        content: "";
        position: absolute;
        opacity: 0;
        z-index: 1;
      }
    }

    &-overflow-ping-start:before {
      opacity: 1;
    }

    &-overflow-ping-end:after {
      opacity: 1;
    }

    &-overflow-scrollX {
      overflow-x: auto;
      overflow-y: hidden;
      flex-wrap: nowrap;

      &:before,
      &:after {
        inset-block: 0;
        width: 8px;
      }

      &:before {
        inset-inline-start: 0;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0));
      }

      &:after {
        inset-inline-end: 0;
        background: linear-gradient(to left, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0));
      }

      &:dir(rtl) {
        &:before {
          background: linear-gradient(to left, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0));
        }

        &:after {
          background: linear-gradient(to right, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0));
        }
      }
    }

    &-overflow-scrollY {
      overflow-x: hidden;
      overflow-y: auto;
      max-height: calc(`,"px * ","px * 2 + ","px + ",`px * 3);

      &:before,
      &:after {
        inset-inline: 0;
        height: 8px;
      }

      &:before {
        inset-block-start: 0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0));
      }

      &:after {
        inset-block-end: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0));
      }
    }

    &-upload-btn {
      width: calc(`,"px * ","px * 2 + ","px + ",`px);
      height: calc(`,"px * ","px * 2 + ","px + ",`px);
      font-size: `,`px;
      color: #999;
    }

    &-prev-btn,
    &-next-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      box-shadow: `,`;
      opacity: 0;
      pointer-events: none;
    }

    &-prev-btn {
      left: `,`px;
    }

    &-next-btn {
      right: `,`px;
    }

    &:dir(ltr) {
      &.`,"-attachment-list-overflow-ping-start .",`-attachment-list-prev-btn {
        opacity: 1;
        pointer-events: auto;
      }

      &.`,"-attachment-list-overflow-ping-end .",`-attachment-list-next-btn {
        opacity: 1;
        pointer-events: auto;
      }
    }

    &:dir(rtl) {
      &.`,"-attachment-list-overflow-ping-end .",`-attachment-list-prev-btn {
        opacity: 1;
        pointer-events: auto;
      }

      &.`,"-attachment-list-overflow-ping-start .",`-attachment-list-next-btn {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
}
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.zIndexPopupBase},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.borderRadius},function(a){return a.theme.lineWidthBold},function(a){return a.theme.padding},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.colorPrimaryHover},function(a){return a.theme.prefixCls},function(a){return a.theme.paddingXXS},function(a){return a.theme.fontSizeHeading2},function(a){return a.theme.prefixCls},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.paddingSM},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.colorText},function(a){return a.theme.padding},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.paddingSM},function(a){return a.theme.paddingSM},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.paddingSM},function(a){return a.theme.paddingSM},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.paddingSM},function(a){return a.theme.paddingSM},function(a){return a.theme.fontSizeHeading2},function(a){return a.theme.boxShadowTertiary},function(a){return a.theme.padding},function(a){return a.theme.padding},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),_n=["prefixCls","rootClassName","rootStyle","className","style","items","children","getDropContainer","placeholder","onChange","overflow","disabled","replaceable","classNames","styles"];function Pn(a,Ke){var qe=a.prefixCls,pn=a.rootClassName,c=a.rootStyle,F=a.className,A=a.style,Z=a.items,D=a.children,$=a.getDropContainer,oe=a.placeholder,Ce=a.onChange,r=a.overflow,m=a.disabled,j=a.replaceable,W=a.classNames,Y=W===void 0?{}:W,z=a.styles,H=z===void 0?{}:z,ee=T()(a,_n),fe=(0,P.wv)(),X=fe.direction,le=fe.getPrefixCls,Ee=le("attachment"),Ue=x.useRef(null),$e=x.useRef(null);x.useImperativeHandle(Ke,function(){return{nativeElement:Ue.current,upload:function(Oe){var we,pe=(we=$e.current)===null||we===void 0||(we=we.nativeElement)===null||we===void 0?void 0:we.querySelector('input[type="file"]');if(pe){var be=new DataTransfer;be.items.add(Oe),pe.files=be.files,pe.dispatchEvent(new Event("change",{bubbles:!0}))}}}});var Je=(0,S.C8)([],{value:Z}),on=L()(Je,2),Pe=on[0],ue=on[1],Q=(0,S.zX)(function(Ie){ue(Ie.fileList),Ce==null||Ce(Ie)}),On=y()(y()({},ee),{},{fileList:Pe,onChange:Q}),Cn=function(Oe){var we=Pe.filter(function(pe){return pe.uid!==Oe.uid});Q({file:Oe,fileList:we})},Ge=(0,S.zX)(function(Ie,Oe){var we={uid:Ie.uid,name:Oe.name,size:Oe.size,type:Oe.type,originFileObj:Oe,status:"done",percent:100},pe=Pe.map(function(be){return be.uid===Ie.uid?we:be});Q({file:we,fileList:pe})}),xn,en=function(Oe,we,pe){var be=typeof oe=="function"?oe(Oe):oe;return(0,d.jsx)(rn,{placeholder:be,upload:On,prefixCls:Ee,className:p()(Y.placeholder),style:y()(y()({},H.placeholder),we==null?void 0:we.style),ref:pe})};if(D)xn=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(an,{upload:On,rootClassName:pn,ref:$e,children:D}),(0,d.jsx)(k,{getDropContainer:$,prefixCls:Ee,className:p()(pn),children:en("drop")})]});else{var bn=Pe.length>0;xn=(0,d.jsxs)("div",{className:p()(Ee,h()({},"".concat(Ee,"-rtl"),X==="rtl"),F,pn),style:y()(y()({},c),A),dir:X||"ltr",ref:Ue,children:[(0,d.jsx)(tn,{prefixCls:Ee,items:Pe,onRemove:Cn,onReplace:j?Ge:void 0,overflow:r,upload:On,listClassName:p()(Y.list),listStyle:y()(y()({},H.list),!bn&&{display:"none"}),itemClassName:p()(Y.item),itemStyle:y()({},H.item),renderType:a.renderType}),en("inline",bn?{style:{display:"none"}}:{},$e)]})}return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Ye,{}),(0,d.jsx)(n.Provider,{value:{disabled:m},children:xn})]})}var Mn=x.forwardRef(Pn);Mn.FileCard=ye,Mn.ImageCard=He;var hn=Mn},50130:function(sn,ne,e){"use strict";e.d(ne,{L:function(){return P},Z:function(){return x}});var ae=e(97857),h=e.n(ae),R=e(13769),y=e.n(R),b=e(67294),L=e(83962),E=e(76289),T=e(85893),N=["component"],p=b.memo(function(S){var g=(0,L.HJ)(),n=(0,E.TQ)(function(t){return t.onInput}),d=(0,b.useMemo)(function(){if(S.component)return S.component;var t=g;return(t==null?void 0:t[S.code])||function(){return"".concat(S.code," not found")}},[]);if(typeof d=="function"){var k=S.component,i=y()(S,N);return(0,T.jsx)(d,h()(h()({},i),{},{context:{onInput:n}}))}else return d});function x(S){var g=S.cards;return g!=null&&g.length?g.map(function(n,d){var k=(0,T.jsx)(p,h()({index:d,id:S.id,isLast:S.isLast},n),(n==null?void 0:n.id)||d+n.code);return n.code==="Text"?(0,T.jsx)("div",{className:S.className,children:k},d):k}):null}function P(S,g){return{code:S,data:g}}},67369:function(sn,ne,e){"use strict";e.d(ne,{p4:function(){return P},hw:function(){return S},ZP:function(){return x}});var ae=e(67294),h=e(56044),R=e(64057),y=e(68400),b=e.n(y),L=e(9053),E,T=(0,L.vJ)(E||(E=b()([`
.`,`-bubble-footer {
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  overflow: hidden;
}

.`,`-bubble-footer-actions {
  display: flex;
  align-items: center;
  gap: 8px;

  &-item {
    cursor: pointer;
    color: `,`
  }
}

.`,`-bubble-footer-count {
  display: flex;
  align-items: center;

  &-item {
    color: `,`;
    line-height: 1;
    padding-right: 13px;
    margin-left: 13px;
    border-right: 1px solid `,`;
    white-space: nowrap;

    &:last-of-type {
      padding-right: 0;
      border-right: 0;
    }
  }
}
`])),function(g){return g.theme.prefixCls},function(g){return g.theme.prefixCls},function(g){return g.theme.colorText},function(g){return g.theme.prefixCls},function(g){return g.theme.colorTextTertiary},function(g){return g.theme.colorBorder}),N=T,p=e(85893);function x(g){var n=(0,h.wv)(),d=n.getPrefixCls,k=d("bubble-footer"),i=g.left,t=g.right;return i&&!i.type||t&&!t.type?null:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(N,{}),(0,p.jsxs)("div",{className:k,children:[(0,p.jsx)("div",{className:"".concat(k,"-left"),children:g.left}),(0,p.jsx)("div",{className:"".concat(k,"-right"),children:g.right})]})]})}function P(g){var n=(0,h.wv)(),d=n.getPrefixCls,k=d("bubble-footer-actions");return(0,p.jsx)("div",{className:k,children:g.data.map(function(i,t){return i.children?ae.cloneElement(i.children,{key:t}):(0,p.jsx)(R.Z,{bordered:!1,icon:i.icon,size:"small",onClick:i.onClick},t)})})}function S(g){var n=(0,h.wv)(),d=n.getPrefixCls,k=d("bubble-footer-count");return(0,p.jsx)("div",{className:k,children:g.data.map(function(i){return(0,p.jsxs)("div",{className:"".concat(k,"-item"),children:[i[0],"\uFF1A",i[1]]},i[0])})})}x.Actions=P,x.Count=S},10146:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return p}});var ae=e(68400),h=e.n(ae),R=e(9053),y=e(56044),b=e(9343),L=e(36674),E=e(85893),T,N=(0,R.vJ)(T||(T=h()([`
.`,`-interrupted {
  display: inline-flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0px;
  background-color: `,`;
  padding: 10px 12px;
  border-radius: 8px;
  gap: 8px;
}
.`,`-interrupted-desc {
  font-weight: normal;
  word-break: break-word;
}

.`,`-interrupted-header {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: `,`;

  &-icon-wrapper {
    width: 16px;
    height: 16px;
    flex: 0 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-error {
    color: `,`;
    font-size: 16px;
  }

  &-interrupted {
    font-size: 16px;
  }
  
}

`])),function(x){return x.theme.prefixCls},function(x){return x.theme.colorFillSecondary},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.colorText},function(x){return x.theme.colorError});function p(x){var P=x.title,S=P===void 0?"Answers have stopped":P,g=x.type,n=g===void 0?"interrupted":g,d=x.desc,k=(0,y.wv)(),i=k.getPrefixCls,t=i("interrupted");return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(N,{}),(0,E.jsxs)("div",{className:"".concat(t),children:[(0,E.jsxs)("div",{className:"".concat(t,"-header"),children:[(0,E.jsx)("div",{className:"".concat(t,"-icon-wrapper"),children:n==="interrupted"?(0,E.jsx)(b.Z,{className:"".concat(t,"-header-interrupted")}):(0,E.jsx)(L.Z,{className:"".concat(t,"-header-error")})}),(0,E.jsx)("span",{children:S})]}),d&&(0,E.jsx)("div",{className:"".concat(t,"-desc"),children:d})]})]})}},52471:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return Ce}});var ae=e(97857),h=e.n(ae),R=e(93967),y=e.n(R),b=e(67294),L=e(68400),E=e.n(L),T=e(9053),N,p=(0,T.vJ)(N||(N=E()([`
.`,`-bubble {
  display: flex;

  &-end,
  &-user {
    justify-content: flex-end;

    .`,`-bubble-content-wrapper {
      align-items: flex-end;
    }
  }

  &-content-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  &-content-wrapper-card {
  }

  &-content {
    position: relative;
    box-sizing: border-box;
    min-width: 0;
    max-width: 100%;
    color: `,`;
    font-size: `,`px;
    line-height: `,`;
    word-break: break-word;
  }
}

.`,`-bubble {
  &-content {
    &-filled {
      padding: 12px 16px;
      border-radius: `,`px;
      background-color: `,`;
    }
  }
}



.`,`-bubble-loading {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  filter: invert(1) brightness(100%) saturate(0%);

  &-text {
    opacity: 0;
  }

  &-dot1 {
    width: 4px;
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(
        `,`,
        `,`
      ),
      linear-gradient(
        `,`,
        `,`
      );
    background-blend-mode: multiply;
    animation: dot_01 2.5s infinite ease;
  }
  &-dot2 {
    width: 4px;
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(
        `,`,
        `,`
      ),
      linear-gradient(
        `,`,
        `,`
      );
    background-blend-mode: multiply;
    animation: dot_02 2.5s infinite ease;
  }
  &-dot3 {
    width: 4px;
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(
        `,`,
        `,`
      ),
      linear-gradient(
        `,`,
        `,`
      );
    background-blend-mode: multiply;
    animation: dot_03 2.5s infinite ease;
  }
}

@keyframes dot_01 {
  0% {
    transform: translateX(0px) scale(1);
    z-index: 3;
  }

  30.3% {
    transform: translateX(15px) scale(1);
    z-index: 3;
  }
  33.3% {
    transform: translateX(15px) scale(1);
    z-index: 1;
  }
  63.6% {
    transform: translateX(7.5px) scale(0.75);
    z-index: 1;
  }
  66.6% {
    transform: translateX(7.5px) scale(0.75);
    z-index: 2;
  }
  97% {
    transform: translateX(0px) scale(1);
    z-index: 2;
  }
}

@keyframes dot_02 {
  0% {
    transform: translateX(0px) scale(1);
    z-index: 2;
  }
  23.3% {
    transform: translateX(-7.5px) scale(1.33333);
    z-index: 2;
  }

  30.3% {
    transform: translateX(-7.5px) scale(1.33333);
    z-index: 3;
  }
  56.6% {
    transform: translateX(7.5px) scale(1.33333);
    z-index: 3;
  }
  63.6% {
    transform: translateX(7.5px) scale(1.33333);
    z-index: 1;
  }
  97% {
    transform: translateX(0px) scale(1);
    z-index: 1;
  }
}

@keyframes dot_03 {
  0% {
    transform: translateX(0px) scale(1);
    z-index: 1;
  }
  23.3% {
    transform: translateX(-7.5px) scale(0.75);
    z-index: 1;
  }

  30.3% {
    transform: translateX(-7.5px) scale(0.75);
    z-index: 2;
  }
  56.6% {
    transform: translateX(-15px) scale(1);
    z-index: 2;
  }
  63.6% {
    transform: translateX(-15px) scale(1);
    z-index: 3;
  }
  97% {
    transform: translateX(0px) scale(1);
    z-index: 3;
  }
}
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorText},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorPrimaryBg},function(r){return r.theme.prefixCls},function(r){return r.theme.colorText},function(r){return r.theme.colorText},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorTextTertiary},function(r){return r.theme.colorTextTertiary},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorTextSecondary},function(r){return r.theme.colorTextSecondary},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorBgBase}),x=e(56044),P=e(66109),S=e(50130),g=e(85893);function n(){var r=(0,x.wv)(),m=r.getPrefixCls,j=m("bubble-loading");return(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("div",{className:"".concat(j,"-dot1")}),(0,g.jsx)("div",{className:"".concat(j,"-dot2")}),(0,g.jsx)("div",{className:"".concat(j,"-dot3")}),(0,g.jsx)("div",{className:"".concat(j,"-text"),children:"-"})]})}var d=e(9783),k=e.n(d),i=e(68997),t=function(m){var j=m.avatar,W=m.msgStatus,Y=m.isAssistant,z=m.prefixCls,H=m.className,ee=m.style,fe=b.isValidElement(j)?j:(0,g.jsx)(i.Z,h()({},j));return(0,g.jsx)("div",{className:y()("".concat(z,"-avatar"),k()({},"".concat(z,"-avatar-loading"),Y&&W==="generating"),H),style:ee,children:fe})},O=t,l,M=(0,T.vJ)(l||(l=E()([`
.`,`-bubble-avatar {
  display: inline-flex;
  justify-content: center;
  align-self: flex-start;
  margin-right: 6px;

  .`,`-avatar {
    background-color: `,`;
    position: relative;
    border: 0;
  }

  &-loading .`,`-avatar::after {
    content: '';
    position: absolute;
    inset: 0px;
    border-radius: inherit;
    padding: 1px;
    background: conic-gradient(
      `,`,
      `,`,
      transparent,
      `,`
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
    animation: avatar-border-spin 1.5s linear infinite;
  }

  ~ .`,`-bubble-content-wrapper {
    width: 0;
    flex: 1;
  }
}

@keyframes avatar-border-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorFillSecondary},function(r){return r.theme.prefixCls},function(r){return r.theme.colorBorder},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.colorBorder},function(r){return r.theme.prefixCls}),ce=b.createContext({}),ie=function(m){var j=m.isLast,W=m.className,Y=m.rootClassName,z=m.style,H=m.classNames,ee=H===void 0?{}:H,fe=m.styles,X=fe===void 0?{}:fe,le=m.avatar,Ee=m.content,Ue=Ee===void 0?"":Ee,$e=m.cards,Je=m.msgStatus,on=m.id,Pe=m.role,ue=m.variant,Q={assistant:"start",user:"end"}[Pe]||"start",On=(0,x.wv)(),Cn=On.getPrefixCls,Ge=Cn("bubble"),xn=y()(Ge,Y,W,"".concat(Ge,"-").concat(Q)),en,bn=!(Ue!=null&&Ue.length)&&!($e!=null&&$e.length);m.msgStatus==="generating"&&bn?en=(0,g.jsx)(n,{}):en=Ue?(0,g.jsx)(P.Z,{content:Ue,cursor:m.msgStatus==="generating"}):null;var Ie=Q==="assistant"||Q==="start",Oe="".concat(Ge,"-content-").concat(ue||(Ie?"borderless":"filled")),we=(0,g.jsxs)("div",{style:!Ie&&en?{flexDirection:"column-reverse"}:{},className:"".concat(Ge,"-content-wrapper"),children:[(0,g.jsx)(S.Z,{cards:$e,id:on,isLast:j,className:y()("".concat(Ge,"-content"),"".concat(Ge,"-content-wrapper-card"),Oe,ee.content)}),en&&(0,g.jsx)("div",{style:h()({},X.content),className:y()("".concat(Ge,"-content"),"".concat(Ge,"-content-wrapper-card"),Oe,ee.content),children:en})]});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{}),(0,g.jsx)(M,{}),(0,g.jsxs)("div",{style:z,className:xn,id:on,"data-role":Pe,children:[le&&(0,g.jsx)(O,{avatar:le,msgStatus:Je,isAssistant:Ie,prefixCls:Ge,className:ee.avatar,style:X.avatar}),we]})]})},f=b.memo(ie),me=e(5574),K=e.n(me),V=e(13769),re=e.n(V),de=e(52677),Re=e.n(de),C=e(15009),ke=e.n(C),Ne=e(99289),je=e.n(Ne),xe,w,te;var Le={damping:.7,stiffness:.05,mass:1.25},Be=70,ze=1e3/60,He=350,Me=!1;(xe=globalThis.document)===null||xe===void 0||xe.addEventListener("mousedown",function(){Me=!0}),(w=globalThis.document)===null||w===void 0||w.addEventListener("mouseup",function(){Me=!1}),(te=globalThis.document)===null||te===void 0||te.addEventListener("click",function(){Me=!1});var un=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},j=(0,b.useState)(!1),W=K()(j,2),Y=W[0],z=W[1],H=(0,b.useState)(m.enabled!==!1&&m.initial!==!1),ee=K()(H,2),fe=ee[0],X=ee[1],le=(0,b.useState)(!1),Ee=K()(le,2),Ue=Ee[0],$e=Ee[1],Je=(0,b.useRef)(null);Je.current=m;var on=(0,b.useCallback)(function(){var Ie;if(!Me)return!1;var Oe=window.getSelection();if(!Oe||!Oe.rangeCount)return!1;var we=Oe.getRangeAt(0);return we.commonAncestorContainer.contains(en.current)||((Ie=en.current)===null||Ie===void 0?void 0:Ie.contains(we.commonAncestorContainer))},[]),Pe=(0,b.useCallback)(function(Ie){Q.isAtBottom=Ie,X(Ie)},[]),ue=(0,b.useCallback)(function(Ie){Q.escapedFromLock=Ie,z(Ie)},[]),Q=(0,b.useMemo)(function(){var Ie;return{escapedFromLock:Y,isAtBottom:fe,resizeDifference:0,accumulated:0,velocity:0,listeners:new Set,get scrollTop(){var Oe,we;return(Oe=(we=en.current)===null||we===void 0?void 0:we.scrollTop)!==null&&Oe!==void 0?Oe:0},set scrollTop(Oe){en.current&&(en.current.scrollTop=Oe,Q.ignoreScrollToTop=en.current.scrollTop)},get targetScrollTop(){return!en.current||!bn.current?0:en.current.scrollHeight-1-en.current.clientHeight},get calculatedTargetScrollTop(){var Oe;if(!en.current||!bn.current)return 0;var we=this.targetScrollTop;if(!m.targetScrollTop)return we;if(((Oe=Ie)===null||Oe===void 0?void 0:Oe.targetScrollTop)===we)return Ie.calculatedScrollTop;var pe=Math.max(Math.min(m.targetScrollTop(we,{scrollElement:en.current,contentElement:bn.current}),we),0);return Ie={targetScrollTop:we,calculatedScrollTop:pe},requestAnimationFrame(function(){Ie=void 0}),pe},get scrollDifference(){return this.calculatedTargetScrollTop-this.scrollTop},get isNearBottom(){return this.scrollDifference<=Be}}},[]),On=(0,b.useCallback)(function(){var Ie,Oe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};typeof Oe=="string"&&(Oe={animation:Oe}),Oe.preserveScrollPosition||Pe(!0);var we=Date.now()+(Number(Oe.wait)||0),pe=Xe(Je.current,Oe.animation),be=Oe,gn=be.ignoreEscapes,jn=gn===void 0?!1:gn,Fn,Ln=Q.calculatedTargetScrollTop;if(Oe.duration instanceof Promise)Oe.duration.finally(function(){Fn=Date.now()});else{var Bn;Fn=we+((Bn=Oe.duration)!==null&&Bn!==void 0?Bn:0)}var Zn=function(){var Kn=je()(ke()().mark(function Xn(){var Dn;return ke()().wrap(function(Wn){for(;;)switch(Wn.prev=Wn.next){case 0:return Dn=new Promise(requestAnimationFrame).then(function(){var Rn;if(!Q.isAtBottom)return Q.animation=void 0,!1;var zn=Q.scrollTop,Hn=performance.now(),Nn=(Hn-((Rn=Q.lastTick)!==null&&Rn!==void 0?Rn:Hn))/ze;if(Q.animation||(Q.animation={behavior:pe,promise:Dn,ignoreEscapes:jn}),Q.animation.behavior===pe&&(Q.lastTick=Hn),on()||we>Date.now())return Zn();if(zn<Math.min(Ln,Q.calculatedTargetScrollTop)){var An;if(((An=Q.animation)===null||An===void 0?void 0:An.behavior)===pe){if(pe==="instant")return Q.scrollTop=Q.calculatedTargetScrollTop,Zn();Q.velocity=(pe.damping*Q.velocity+pe.stiffness*Q.scrollDifference)/pe.mass,Q.accumulated+=Q.velocity*Nn,Q.scrollTop+=Q.accumulated,Q.scrollTop!==zn&&(Q.accumulated=0)}return Zn()}return Fn>Date.now()?(Ln=Q.calculatedTargetScrollTop,Zn()):(Q.animation=void 0,Q.scrollTop<Q.calculatedTargetScrollTop?On({animation:Xe(Je.current,Je.current.resize),ignoreEscapes:jn,duration:Math.max(0,Fn-Date.now())||void 0}):Q.isAtBottom)}),Wn.abrupt("return",Dn.then(function(Rn){return requestAnimationFrame(function(){Q.animation||(Q.lastTick=void 0,Q.velocity=0)}),Rn}));case 2:case"end":return Wn.stop()}},Xn)}));return function(){return Kn.apply(this,arguments)}}();return Oe.wait!==!0&&(Q.animation=void 0),((Ie=Q.animation)===null||Ie===void 0?void 0:Ie.behavior)===pe?Q.animation.promise:Zn()},[Pe,on,Q]),Cn=(0,b.useCallback)(function(){ue(!0),Pe(!1)},[ue,Pe]),Ge=(0,b.useCallback)(function(Ie){var Oe=Ie.target;if(Oe===en.current){var we=Q.scrollTop,pe=Q.ignoreScrollToTop,be=Q.lastScrollTop,gn=be===void 0?we:be;Q.lastScrollTop=we,Q.ignoreScrollToTop=void 0,pe&&pe>we&&(gn=pe),$e(Q.isNearBottom),setTimeout(function(){var jn;if(!(Q.resizeDifference||we===pe)){if(on()){ue(!0),Pe(!1);return}var Fn=we>gn,Ln=we<gn;if((jn=Q.animation)!==null&&jn!==void 0&&jn.ignoreEscapes){Q.scrollTop=gn;return}Ln&&(ue(!0),Pe(!1)),Fn&&ue(!1),!Q.escapedFromLock&&Q.isNearBottom&&Pe(!0)}},1)}},[ue,Pe,on,Q]),xn=(0,b.useCallback)(function(Ie){for(var Oe,we=Ie.target,pe=Ie.deltaY,be=we;!["scroll","auto"].includes(getComputedStyle(be).overflow);){if(!be.parentElement)return;be=be.parentElement}be===en.current&&pe<0&&en.current.scrollHeight>en.current.clientHeight&&!((Oe=Q.animation)!==null&&Oe!==void 0&&Oe.ignoreEscapes)&&(ue(!0),Pe(!1))},[ue,Pe,Q]),en=dn(function(Ie){var Oe,we;(Oe=en.current)===null||Oe===void 0||Oe.removeEventListener("scroll",Ge),(we=en.current)===null||we===void 0||we.removeEventListener("wheel",xn),Ie==null||Ie.addEventListener("scroll",Ge,{passive:!0}),Ie==null||Ie.addEventListener("wheel",xn,{passive:!0})},[]),bn=dn(function(Ie){var Oe,we;if((Oe=Q.resizeObserver)===null||Oe===void 0||Oe.disconnect(),!!Ie){var pe;Q.resizeObserver=new ResizeObserver(function(be){var gn,jn=K()(be,1),Fn=jn[0],Ln=Fn.contentRect.height,Bn=Ln-((gn=pe)!==null&&gn!==void 0?gn:Ln);if(Q.resizeDifference=Bn,Q.scrollTop>Q.targetScrollTop&&(Q.scrollTop=Q.targetScrollTop),$e(Q.isNearBottom),Bn>=0){if(Je.current.enabled!==!1){var Zn=Xe(Je.current,pe?Je.current.resize:Je.current.initial);On({animation:Zn,wait:!0,preserveScrollPosition:!0,duration:Zn==="instant"?void 0:He})}}else Q.isNearBottom&&(ue(!1),Pe(!0));pe=Ln,requestAnimationFrame(function(){setTimeout(function(){Q.resizeDifference===Bn&&(Q.resizeDifference=0)},1)})}),(we=Q.resizeObserver)===null||we===void 0||we.observe(Ie)}},[]);return{contentRef:bn,scrollRef:en,scrollToBottom:On,stopScroll:Cn,isAtBottom:fe||Ue,isNearBottom:Ue,escapedFromLock:Y,state:Q}};function dn(r,m){var j=(0,b.useCallback)(function(W){return j.current=W,r(W)},m);return j}var ln=new Map;function Xe(){for(var r=h()({},Le),m=!1,j=arguments.length,W=new Array(j),Y=0;Y<j;Y++)W[Y]=arguments[Y];for(var z=0,H=W;z<H.length;z++){var ee,fe,X,le=H[z];if(le==="instant"){m=!0;continue}Re()(le)==="object"&&(m=!1,r.damping=(ee=le.damping)!==null&&ee!==void 0?ee:r.damping,r.stiffness=(fe=le.stiffness)!==null&&fe!==void 0?fe:r.stiffness,r.mass=(X=le.mass)!==null&&X!==void 0?X:r.mass)}var Ee=JSON.stringify(r);return ln.has(Ee)||ln.set(Ee,Object.freeze(r)),m?"instant":ln.get(Ee)}var Fe=["instance","children","resize","initial","mass","damping","stiffness","targetScrollTop","contextRef"],In=["children","scrollClassName"];var U=(0,b.createContext)(null),ye=typeof window!="undefined"?b.useLayoutEffect:b.useEffect;function De(r){var m=r.instance,j=r.children,W=r.resize,Y=r.initial,z=r.mass,H=r.damping,ee=r.stiffness,fe=r.targetScrollTop,X=r.contextRef,le=re()(r,Fe),Ee=(0,b.useRef)(null),Ue=b.useCallback(function(Ie,Oe){var we,pe,be=(we=bn==null?void 0:bn.targetScrollTop)!==null&&we!==void 0?we:fe;return(pe=be==null?void 0:be(Ie,Oe))!==null&&pe!==void 0?pe:Ie},[fe]),$e=le.enabled,Je=$e===void 0?!0:$e,on=un({enabled:Je,mass:z,damping:H,stiffness:ee,resize:W,initial:Y,targetScrollTop:Ue}),Pe=m!=null?m:on,ue=Pe.scrollRef,Q=Pe.contentRef,On=Pe.scrollToBottom,Cn=Pe.stopScroll,Ge=Pe.isAtBottom,xn=Pe.escapedFromLock,en=Pe.state,bn=(0,b.useMemo)(function(){return{scrollToBottom:On,stopScroll:Cn,scrollRef:ue,isAtBottom:Ge,escapedFromLock:xn,contentRef:Q,state:en,get targetScrollTop(){return Ee.current},set targetScrollTop(Ie){Ee.current=Ie}}},[On,Ge,Q,ue,Cn,xn,en]);return(0,b.useImperativeHandle)(X,function(){return bn},[bn]),ye(function(){ue.current&&getComputedStyle(ue.current).overflow==="visible"&&(ue.current.style.overflow="auto")},[]),(0,g.jsx)(U.Provider,{value:bn,children:(0,g.jsx)("div",h()(h()({},le),{},{children:typeof j=="function"?j(bn):j}))})}(function(r){function m(j){var W=j.children,Y=j.scrollClassName,z=re()(j,In),H=tn();return(0,g.jsx)("div",{ref:H.scrollRef,style:{height:"100%",width:"100%",scrollbarGutter:"stable both-edges"},className:Y,children:(0,g.jsx)("div",h()(h()({},z),{},{ref:H.contentRef,children:typeof W=="function"?W(H):W}))})}r.Content=m})(De||(De={}));function tn(){var r=(0,b.useContext)(U);if(!r)throw new Error("use-stick-to-bottom component context must be used within a StickToBottom component");return r}var fn=e(64057),Qe=e(25109),Ve=function(m,j){var W=(0,x.wv)(),Y=W.getPrefixCls,z=tn(),H=z.isAtBottom,ee=z.scrollToBottom;b.useImperativeHandle(j,function(){return{scrollToBottom:function(X){function le(Ee){return X.apply(this,arguments)}return le.toString=function(){return X.toString()},le}(function(X){X=X||{animation:"instant"},ee(X)})}});var fe=Y("bubble-list-scroll-to-bottom");return(0,g.jsx)("div",{className:y()(fe,"".concat(fe,"-").concat(H?"hide":"show")),children:(0,g.jsx)(fn.Z,{icon:(0,g.jsx)(Qe.Z,{}),shape:"circle",onClick:function(){return ee({animation:"instant"})}})})},cn=b.forwardRef(Ve),rn,vn=(0,T.vJ)(rn||(rn=E()([`
.`,`-bubble-list-wrapper {
  position: relative;
  overflow: hidden;
}

.`,`-bubble-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 16px 0 16px;

  &::after {
    display: block;
    content: ' ';
    height: 16px;
  }
}

.`,`-bubble-list-load-more {
  display: flex;
  justify-content: center;
  align-items: center;
}

.`,`-bubble-list-scroll-to-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  display: flex;
  justify-content: center;
  transition: all 0.2s;
  z-index: 10;

  &-hide {
    opacity: 0;
    transform: translateY(100%);
    pointer-events: none;
  }

  &-show {
    opacity: 1;
    transform: translateY(0%);
  }

  button {
    &:hover {
      border-color: `,` !important;
      background-color: `,` !important;
      color: `,` !important;
    }
  }
}
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorPrimaryBorder},function(r){return r.theme.colorPrimaryBg},function(r){return r.theme.colorPrimary}),an=e(42532),mn=e(45908),Ye=e(78234),_n=e(19632),Pn=e.n(_n),Mn=e(64599),hn=e.n(Mn),a=e(73935),Ke=function(m,j){var W=(0,b.useState)(1),Y=K()(W,2),z=Y[0],H=Y[1],ee=(0,b.useMemo)(function(){var fe=[],X=[],le=hn()(m),Ee;try{for(le.s();!(Ee=le.n()).done;){var Ue=Ee.value;Ue.history?fe.push(Ue):X.push(Ue)}}catch($e){le.e($e)}finally{le.f()}return[].concat(Pn()(fe.slice(-z*10)),X)},[m,z]);return j!=null&&j.enable?{items:ee,noMore:ee.length===m.length,loadMore:function(X){return new Promise(function(le){setTimeout(function(){var Ee,Ue=X==null?void 0:X.current,$e=(Ee=Ue==null?void 0:Ue.scrollHeight)!==null&&Ee!==void 0?Ee:0;if((0,a.flushSync)(function(){H(z+1)}),Ue){var Je=Ue.scrollHeight;Ue.scrollTop+=Je-$e}le()},1e3)})}}:{items:m,noMore:!0,loadMore:function(X){return Promise.resolve()}}},qe=e(57381),pn=["key"];function c(r){var m=r.items,j=r.paginationItems,W=r.noMore,Y=r.loadMore,z=r.prefixCls,H=r.listClassName,ee=r.children,fe=tn(),X=fe.scrollRef,le=(0,b.useCallback)(function(){return Y(X)},[Y,X]);return(0,g.jsxs)(De.Content,{className:y()("".concat(z),H),children:[W?null:(0,g.jsx)(F,{handleLoadMore:le}),ee||j.map(function(Ee,Ue){var $e=Ee.key,Je=re()(Ee,pn),on=Ue===m.length-1;return(0,b.createElement)(f,h()(h()({},Je),{},{isLast:on,key:Je.id||$e}))})]})}function F(r){var m=r.handleLoadMore,j=(0,b.useRef)(null),W=(0,an.Z)(j),Y=K()(W,1),z=Y[0],H=(0,b.useState)(!1),ee=K()(H,2),fe=ee[0],X=ee[1],le=(0,mn.Z)(z),Ee=(0,x.wv)(),Ue=Ee.getPrefixCls,$e=Ue("bubble-list");return(0,b.useEffect)(function(){z&&le===void 0||fe||z&&(X(!0),m().finally(function(){X(!1)}))},[le,z,fe,m]),(0,g.jsx)("div",{ref:j,className:"".concat($e,"-load-more"),children:(0,g.jsx)(qe.Z,{spinning:!0})})}var A=function(m,j){var W,Y,z=m.items,H=z===void 0?[]:z,ee=m.smooth,fe=ee===void 0?!0:ee,X=(0,b.useState)(!1),le=K()(X,2),Ee=le[0],Ue=le[1],$e=b.useRef(),Je=(0,x.wv)(),on=Je.getPrefixCls,Pe=on("bubble-list");b.useImperativeHandle(j,function(){return{scrollToBottom:function(){$e.current.scrollToBottom()}}}),(0,Ye.Z)(function(){Ue(!0)});var ue=Ee&&fe?"smooth":"instant",Q=Ke(H,{enable:m.pagination}),On=Q.items,Cn=Q.noMore,Ge=Q.loadMore;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(vn,{}),(0,g.jsxs)(De,{enabled:!!fe||!Ee,id:m.id,className:y()("".concat(Pe,"-wrapper"),(W=m.classNames)===null||W===void 0?void 0:W.wrapper),resize:ue,initial:"instant",style:m.style,children:[(0,g.jsx)(c,{items:H,paginationItems:On,noMore:Cn,loadMore:Ge,prefixCls:Pe,listClassName:(Y=m.classNames)===null||Y===void 0?void 0:Y.list,children:m.children}),(0,g.jsx)(cn,{ref:$e})]})]})},Z=b.forwardRef(A),D=Z,$=e(67369),oe=e(10146);f.List=D,f.Spin=n,f.Footer=$.ZP,f.Interrupted=oe.Z;var Ce=f},76289:function(sn,ne,e){"use strict";e.d(ne,{TQ:function(){return g},vi:function(){return P}});var ae=e(97857),h=e.n(ae),R=e(13769),y=e.n(R),b=e(5574),L=e.n(b),E=e(67294),T=e(79785),N=e(59214),p=e(85893),x=["children"];function P(n){var d=(0,T.Z)([]),k=L()(d,3),i=k[0],t=k[1],O=k[2],l=(0,T.Z)("0"),M=L()(l,3),ce=M[0],ie=M[1],f=M[2],me=(0,T.Z)(0),K=L()(me,3),V=K[0],re=K[1],de=K[2],Re=(0,T.Z)([]),C=L()(Re,3),ke=C[0],Ne=C[1],je=C[2],xe=(0,T.Z)(!1),w=L()(xe,3),te=w[0],Le=w[1],Be=w[2],ze=(0,T.Z)(!1),He=L()(ze,3),Me=He[0],un=He[1],dn=He[2],ln=(0,T.Z)(!0),Xe=L()(ln,3),Fe=Xe[0],In=Xe[1],U=Xe[2],ye=n.children,De=y()(n,x),tn=h()({sessionList:i,setSessionList:t,getSessionList:O,currentSessionKey:ce,setCurrentSessionKey:ie,getCurrentSessionKey:f,messages:ke,setMessages:Ne,getMessages:je,loading:te,setLoading:Le,getLoading:Be,disabled:Me,setDisabled:un,getDisabled:dn,sessionListShow:Fe,setSessionListShow:In,getSessionListShow:U,currentRegenerateIndex:V,setCurrentRegenerateIndex:re,getCurrentRegenerateIndex:de},De);return(0,p.jsx)(S.Provider,{value:tn,children:ye})}var S=(0,N.createContext)(void 0);function g(n){try{var d=(0,N.useContextSelector)(S,n);return d}catch(k){return{}}}},37254:function(sn,ne,e){"use strict";e.d(ne,{G:function(){return h}});var ae=e(76289);function h(){var R=(0,ae.TQ)(function(p){return{loading:p.loading,getLoading:p.getLoading,disabled:p.disabled,getDisabled:p.getDisabled,setLoading:p.setLoading,setDisabled:p.setDisabled}}),y=R.loading,b=R.disabled,L=R.setLoading,E=R.setDisabled,T=R.getLoading,N=R.getDisabled;return{loading:y,disabled:b,setLoading:L,setDisabled:E,getLoading:T,getDisabled:N}}},4421:function(sn,ne,e){"use strict";e.d(ne,{y:function(){return E}});var ae=e(19632),h=e.n(ae),R=e(97857),y=e.n(R),b=e(67294),L=e(76289);function E(){var T=(0,L.TQ)(function(d){return{messages:d.messages,setMessages:d.setMessages,getMessages:d.getMessages}}),N=T.messages,p=T.setMessages,x=T.getMessages,P=b.useCallback(function(){var d,k=((d=arguments.length<=0?void 0:arguments[0])===null||d===void 0?void 0:d.id)||(arguments.length<=0?void 0:arguments[0]),i=(arguments.length<=1?void 0:arguments[1])||(arguments.length<=0?void 0:arguments[0]);p==null||p(function(t){var O=t.findIndex(function(M){return M.id===k});if(O>-1){var l=y()(y()({},t[O]),i);return[].concat(h()(t.slice(0,O)),[l],h()(t.slice(O+1)))}else return[].concat(h()(t),[i])})},[]),S=b.useCallback(function(d){p(function(k){return k.filter(function(i){return i.id!==d.id})})},[]),g=b.useCallback(function(){p([])},[]),n=b.useCallback(function(d){return x().find(function(k){return k.id===d})},[]);return{messages:N,getMessage:n,setMessages:p,getMessages:x,updateMessage:P,removeMessage:S,removeAllMessages:g}}},61316:function(sn,ne,e){"use strict";e.d(ne,{x:function(){return N}});var ae=e(97857),h=e.n(ae),R=e(19632),y=e.n(R),b=e(67294),L=e(76289),E=e(88773),T=e(73935);function N(){var p=(0,L.TQ)(function(V){return{getCurrentSessionKey:V.getCurrentSessionKey,currentRegenerateIndex:V.currentRegenerateIndex,setCurrentRegenerateIndex:V.setCurrentRegenerateIndex,getCurrentRegenerateIndex:V.getCurrentRegenerateIndex,sessionListShow:V.sessionListShow,setSessionListShow:V.setSessionListShow,sessionList:V.sessionList,setSessionList:V.setSessionList,currentSessionKey:V.currentSessionKey,setCurrentSessionKey:V.setCurrentSessionKey,getSessionList:V.getSessionList}}),x=p.getCurrentSessionKey,P=p.sessionList,S=p.setSessionList,g=p.currentSessionKey,n=p.setCurrentSessionKey,d=p.sessionListShow,k=p.setSessionListShow,i=p.currentRegenerateIndex,t=p.setCurrentRegenerateIndex,O=p.getCurrentRegenerateIndex,l=p.getSessionList,M=b.useCallback(function(){var V=(0,E.Z)(),re={label:Date.now().toString(),key:V,messages:[[]]};return T.flushSync(function(){S(function(de){var Re=[].concat(y()(de),[re]);return Re}),n(V)}),V},[]),ce=b.useCallback(function(V){S(function(re){var de=re.filter(function(Re){return Re.key!==V});return de})},[]),ie=b.useCallback(function(V){var re=x(),de=O();S(function(Re){return Re.map(function(C){return C.key===re?(C.messages[de]=V,h()({},C)):C})})},[]),f=b.useCallback(function(V,re){var de;return(de=l().find(function(Re){return Re.key===V}))===null||de===void 0?void 0:de.messages[re]},[]),me=b.useCallback(function(){return{sessionList:l(),currentSessionKey:x(),currentRegenerateIndex:O()}},[]),K=b.useCallback(function(V){var re=V.sessionList,de=V.currentSessionKey,Re=V.currentRegenerateIndex;S(re),n(de),t(Re)},[]);return{currentRegenerateIndex:i,setCurrentRegenerateIndex:t,getCurrentRegenerateIndex:O,sessionList:P,setSessionList:S,getSessionList:l,currentSessionKey:g,setCurrentSessionKey:n,sessionListShow:d,setSessionListShow:k,createSession:M,deleteSession:ce,updateSessionMessages:ie,getMessagesBySession:f,getSession:me,updateSession:K}}},29041:function(sn,ne,e){"use strict";e.d(ne,{ZP:function(){return F}});var ae=e(97857),h=e.n(ae),R=e(13769),y=e.n(R),b=e(5574),L=e.n(b),E=e(67294),T=e(93967),N=e.n(T),p=e(56044),x=e(85265),P=e(17909),S=e(76289),g=e(68400),n=e.n(g),d=e(9053),k,i=(0,d.vJ)(k||(k=n()([`

.`,`-chat-anywhere-layout {
  *::-webkit-scrollbar {
    display: none;
  }
  font-family: `,`;
  overflow: hidden;
  position: relative;
  height: 100%;
  background: `,`;

  &-main {
    display: flex;
    height: 100%;
    background: `,`;
  }

  &-left {
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
    background-color: `,`;
    width: 240px;
    transition: all 0.2s;

    &-hide {
      margin-left: -168px;
      background-color: transparent;
    }
  }

  &-right {
    position: relative;
    width: 0;
    flex: 1;
    box-sizing: border-box;
    background: `,`;
  }
}




*[data-tauri-drag-region] {
  -webkit-app-region: drag;
}
`])),function(A){return A.theme.prefixCls},function(A){return A.theme.fontFamily},function(A){return A.theme.colorBgBase},function(A){return A.theme.colorBgBase},function(A){return A.theme.colorBgBase},function(A){return A.theme.colorFillTertiary}),t=e(85893);function O(A){var Z=(0,S.TQ)(function(j){return{sessionListShow:j.sessionListShow,setSessionListShow:j.setSessionListShow}}),D=Z.sessionListShow,$=Z.setSessionListShow,oe=(0,p.wv)(),Ce=oe.getPrefixCls,r=Ce("chat-anywhere-layout"),m=M();return(0,E.useEffect)(function(){$(!m)},[m]),A.left?m?(0,t.jsx)(x.Z,{width:"80vw",styles:{body:{padding:0}},open:D,onClose:function(){$(!1)},title:null,closable:!1,placement:"left",children:(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:A.left})}):(0,t.jsx)("div",{className:N()("".concat(r,"-left"),D?"":"".concat(r,"-left-hide")),children:A.left}):null}function l(A){var Z=(0,p.wv)(),D=Z.getPrefixCls,$=D("chat-anywhere-layout"),oe=(0,S.TQ)(function(Ce){return Ce.uiConfig});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{}),(0,t.jsx)("div",{className:$,children:(0,t.jsxs)("div",{className:"".concat($,"-main"),children:[(0,t.jsx)(O,h()({},A)),(0,t.jsxs)("div",{className:"".concat($,"-right"),style:{background:oe==null?void 0:oe.background},children:[A.top,A.right]})]})})]})}var M=function(){var Z=(0,P.Z)(),D=(0,S.TQ)(function($){return $.uiConfig});return!Z.md||(D==null?void 0:D.narrowScreen)},ce=e(9368),ie=e(64057),f=e(21403),me=e(61316),K=e(4421),V,re=(0,d.vJ)(V||(V=n()([`
.`,`-chat-anywhere-session-list {
  display: flex;
  flex-direction: column;
  height: 0;
  flex: 1;
  width: 100%;

  .`,`-conversations {
    height: 100%;
  }

  &-session { 
    height: 0;
    flex: 1;
    padding: 8px 20px;

  }

  &-logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 64px;
  }

  &-adder {
    padding: 0 20px 8px 20px;
    button {
      border-radius: 6px;
      box-shadow: 15px 0px 30px -10px rgba(131, 88, 246, 0.4),
        0px 0px 30px -10px rgba(255, 142, 168, 0.4),
        -15px 0px 30px -10px rgba(225, 163, 37, 0.4);
    }
  }

  &-hide {
    .`,`-chat-anywhere-session-list-adder-logo > div {
      opacity: 0;
    }
    .`,`-chat-anywhere-session-list-adder {
      opacity: 0;
    }
    .`,`-chat-anywhere-session-list-session {
      opacity: 0;
    }
  }
}

`])),function(A){return A.theme.prefixCls},function(A){return A.theme.prefixCls},function(A){return A.theme.prefixCls},function(A){return A.theme.prefixCls},function(A){return A.theme.prefixCls}),de=e(50287),Re=e(67392),C=e(13660),ke=e(12624);function Ne(){var A=(0,p.wv)(),Z=A.getPrefixCls,D=Z("chat-anywhere-session-list"),$=(0,S.TQ)(function(oe){return oe.sessionListShow});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(re,{}),(0,t.jsxs)("div",{className:N()("".concat(D),$?"":"".concat(D,"-hide")),children:[(0,t.jsx)(xe,{}),(0,t.jsx)(je,{})]})]})}function je(){var A=(0,p.wv)(),Z=A.getPrefixCls,D=Z("chat-anywhere-session-list"),$=(0,me.x)(),oe=$.currentSessionKey,Ce=$.setCurrentSessionKey,r=$.currentRegenerateIndex,m=$.sessionList,j=$.getMessagesBySession,W=$.setSessionListShow,Y=(0,K.y)(),z=Y.setMessages,H=(0,S.TQ)(function(X){return X.getLoading}),ee=(0,S.TQ)(function(X){return X.onSessionKeyChange}),fe=M();return(0,E.useEffect)(function(){var X=j(oe,r);z(X)},[oe,r]),(0,t.jsx)("div",{className:"".concat(D,"-session"),children:(0,t.jsx)(ce.Z,{menu:[{key:"delete",icon:(0,t.jsx)(de.Z,{}),danger:!0,onClick:function(le){}}],activeKey:oe,items:m,onActiveChange:function(le){H()||(fe&&W(!1),requestIdleCallback(function(){Ce(le),ee(le)}))}})})}function xe(){var A=(0,p.wv)(),Z=A.getPrefixCls,D=Z("chat-anywhere-session-list"),$=(0,me.x)(),oe=$.currentSessionKey,Ce=$.setCurrentSessionKey,r=$.deleteSession,m=$.createSession,j=$.sessionList,W=$.sessionListShow,Y=$.setSessionListShow,z=(0,S.TQ)(function(ee){return ee.uiConfig}),H=M();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"".concat(D,"-logo"),children:[z==null?void 0:z.logo,(0,t.jsx)(ie.Z,{bordered:!1,onClick:function(){return Y(!W)},icon:W?(0,t.jsx)(Re.Z,{}):(0,t.jsx)(C.Z,{})})]}),(0,t.jsx)("div",{className:"".concat(D,"-adder"),children:(0,t.jsx)(f.Z,{type:"primary",block:!0,icon:(0,t.jsx)(ke.Z,{}),onClick:function(){H&&Y(!1),m()},children:"New Session"})})]})}var w=e(9783),te=e.n(w),Le=e(52471),Be=e(19632),ze=e.n(Be),He=e(52677),Me=e.n(He),un=e(15009),dn=e.n(un),ln=e(99289),Xe=e.n(ln),Fe=e(41154),In=e(66672),U=e(50993),ye=e(37254),De,tn=(0,d.vJ)(De||(De=n()([`
.`,`-chat-anywhere-sender-wrapper {
  position: relative;

  &-header {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
  }
}

.`,`-chat-anywhere-sender-upload-hidden-nodes {
    position: absolute;
    z-index: -999;
    top: -100vh;
    left: -100vw;
    width: 0;
    height: 0;
    overflow: hidden;
  }
}
`])),function(A){return A.theme.prefixCls},function(A){return A.theme.prefixCls}),fn=e(86578),Qe=e(7654),Ve=e(92053),cn=e(86250),rn=["trigger"];function vn(A){var Z=A.uploadPropsList,D=(0,p.wv)(),$=D.getPrefixCls,oe=$("chat-anywhere-sender"),Ce=(0,E.useState)(!1),r=L()(Ce,2),m=r[0],j=r[1],W=(0,E.useRef)([]),Y=(0,E.useMemo)(function(){return Z.map(function(H,ee){return(0,t.jsx)("div",{onClick:function(){var X;(X=W.current[ee])===null||X===void 0||X.click(),j(!1)},children:H.trigger},ee)})},[Z]),z=(0,E.useMemo)(function(){return Z.map(function(H,ee){var fe=H.trigger,X=y()(H,rn);return(0,t.jsx)(Fe.Z,h()(h()({},X),{},{children:(0,t.jsx)("div",{ref:function(Ee){return W.current[ee]=Ee}})}),ee)})},[Z]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Qe.Z,{placement:"bottomLeft",open:m,onOpenChange:j,content:(0,t.jsx)(cn.Z,{vertical:!0,children:Y}),trigger:"click",styles:{body:{padding:4}},children:(0,t.jsx)(ie.Z,{icon:(0,t.jsx)(Ve.Z,{}),bordered:!1})}),(0,t.jsx)("div",{className:"".concat(oe,"-upload-hidden-nodes"),children:z})]})}var an=(0,E.forwardRef)(function(A,Z){var D=E.useState(""),$=L()(D,2),oe=$[0],Ce=$[1],r=(0,ye.G)(),m=(0,S.TQ)(function(pe){return pe.onUpload.map(function(be){return h()(h()({},be),{},{disabled:be.disabled||r.disabled})})}),j=new Array((m==null?void 0:m.length)||0).fill([]),W=(0,E.useState)(!1),Y=L()(W,2),z=Y[0],H=Y[1],ee=E.useState(j),fe=L()(ee,2),X=fe[0],le=fe[1],Ee=(0,E.useRef)(j);(0,E.useEffect)(function(){le(j)},[j.length]),(0,E.useEffect)(function(){Ee.current=X},[X]);var Ue=(0,S.TQ)(function(pe){return pe.uiConfig}),$e=(0,p.wv)(),Je=$e.getPrefixCls,on=Je("chat-anywhere-sender"),Pe=(0,S.TQ)(function(pe){return pe.onStop}),ue=(0,S.TQ)(function(pe){var be={beforeUI:void 0,afterUI:void 0,morePrefixActions:void 0,maxLength:void 0,zoomable:!0,beforeSubmit:function(){return Promise.resolve(!0)},header:[],enableFocusExpand:!1,variant:"default",hide:!1};return h()(h()({},be),pe.onInput)});if(E.useImperativeHandle(Z,function(){return{setInputContent:function(be,gn){Ce(be),le(gn||[[]])},getAttachedFiles:function(){return Ee.current}}},[]),(0,E.useEffect)(function(){r.setDisabled(ue.disabled)},[ue.disabled]),ue.hide)return null;var Q=function(){var pe=Xe()(dn()().mark(function be(gn,jn){return dn()().wrap(function(Ln){for(;;)switch(Ln.prev=Ln.next){case 0:le(function(Bn){return Bn.map(function(Zn,Kn){return Kn===gn?jn:Zn})});case 1:case"end":return Ln.stop()}},be)}));return function(gn,jn){return pe.apply(this,arguments)}}(),On=(0,E.useMemo)(function(){if(ue.variant==="aigc"||!(m!=null&&m.length))return[];var pe=m.map(function(be,gn){var jn;return be.trigger?jn=be.trigger:(be.title||be.description)&&m.length>1?jn=(0,t.jsxs)(f.Z,{type:"text",icon:be.icon,children:[be.title&&(0,t.jsx)("span",{children:be.title}),be.description&&(0,t.jsx)("span",{style:{fontSize:"0.8em",opacity:.8},children:be.description})]}):jn=(0,t.jsx)(ie.Z,{icon:be.icon,bordered:!1}),h()(h()({},be),{},{fileList:X[gn],key:gn,onChange:function(Ln){be.beforeUpload&&Ln.file.status&&Q(gn,Ln.fileList),be.beforeUpload||Q(gn,Ln.fileList)},showUploadList:!1,trigger:jn})});return pe.length===1?(0,t.jsx)(Fe.Z,h()(h()({},pe[0]),{},{children:pe[0].trigger})):(0,t.jsx)(vn,{uploadPropsList:pe})},[ue.variant,m,X]),Cn=(0,t.jsx)(fn.Z.SenderHeader,{onUpload:m,attachedFiles:X,onFileChange:Q}),Ge=(0,t.jsx)(In.Z.Header,{closable:!1,open:X==null?void 0:X.some(function(pe){return pe.length}),children:X.map(function(pe,be){return pe.length?(0,t.jsx)(U.Z,{items:pe,replaceable:!0,onChange:function(jn){return Q(be,jn.fileList)}},be):null})}),xn=ue.variant==="aigc"?Cn:Ge,en=X.map(function(pe){return pe.filter(function(be){return be.status==="done"})}),bn=X.some(function(pe){return pe.some(function(be){return be.status==="uploading"})}),Ie=function(be){if(!(m!=null&&m.length))return;var gn=be.type||"",jn=be.name||"",Fn=function(Jn){return Jn?Jn.split(",").some(function(Wn){var Rn=Wn.trim();if(!Rn)return!1;if(Rn.startsWith("."))return jn.toLowerCase().endsWith(Rn.toLowerCase());if(Rn.includes("*")){if(Rn==="*/*")return!0;var zn=Rn.split("/"),Hn=L()(zn,1),Nn=Hn[0],An=gn.split("/"),wn=L()(An,1),Vn=wn[0];return Nn===Vn}return gn===Rn}):!0},Ln=m.findIndex(function(Dn){return Fn(Dn.accept)});if(Ln===-1)return;var Bn=m[Ln],Zn=X[Ln]||[];if(Bn.maxCount&&Zn.length>=Bn.maxCount||!Bn.multiple&&Zn.length>0)return;if(Bn.beforeUpload){var Kn=Bn.beforeUpload(be,[be]);if(Kn===!1||Kn===Fe.Z.LIST_IGNORE)return;if(Kn instanceof Promise){Kn.then(function(Dn){if(!(Dn===!1||Dn===Fe.Z.LIST_IGNORE)){var Jn=Dn&&Me()(Dn)==="object"?Dn:be;Xn(Jn)}}).catch(function(Dn){console.error("beforeUpload promise rejected:",Dn)});return}if(Kn&&Me()(Kn)==="object"){Xn(Kn);return}}Xn(be);function Xn(Dn){var Jn=function(){var An=jn.match(/\.([^.]+)$/);if(An)return An[1].toLowerCase();var wn=gn.match(/\/([^/+]+)/);return wn?wn[1].toLowerCase():"bin"},Wn=Date.now(),Rn={uid:"paste_".concat(Wn,"_").concat(Math.random().toString(36).slice(2,11)),name:jn||"pasted-".concat(Wn,".").concat(Jn()),size:Dn.size,type:gn,status:"uploading",percent:0,originFileObj:Dn},zn=function(An){le(function(wn){var Vn=ze()(wn);return Vn[Ln]=(Vn[Ln]||[]).map(function(Yn){return Yn.uid===Rn.uid?h()(h()({},Yn),An):Yn}),Vn})};if(le(function(Nn){var An=ze()(Nn),wn=An[Ln]||[];if(!Bn.multiple)An[Ln]=[Rn];else{if(Bn.maxCount&&wn.length>=Bn.maxCount)return Nn;An[Ln]=[].concat(ze()(wn),[Rn])}return An}),gn&&gn.startsWith("image/")){var Hn=new FileReader;Hn.onload=function(Nn){var An,wn=(An=Nn.target)===null||An===void 0?void 0:An.result;typeof wn=="string"&&zn({thumbUrl:wn,url:wn})},Hn.readAsDataURL(Dn)}Bn.customRequest({file:Dn,onSuccess:function(An){zn({status:"done",response:An,percent:100})},onError:function(An){zn({status:"error",error:An})},onProgress:function(An){zn({percent:An.percent})}},{defaultRequest:function(){}})}},Oe=(0,E.useMemo)(function(){var pe;return(pe=m==null?void 0:m.some(function(be,gn){if(be.required){var jn=X[gn]||[];return jn.length===0}return!1}))!==null&&pe!==void 0?pe:!1},[m,X]),we=Oe;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tn,{}),(0,t.jsxs)("div",{className:N()("".concat(on,"-wrapper"),te()(te()({},"".concat(on,"-wrapper-focus"),z&&ue.enableFocusExpand),"".concat(on,"-wrapper-blur"),!z&&ue.enableFocusExpand)),children:[Ue.quickInput&&(0,t.jsx)("div",{className:N()("".concat(on,"-wrapper-header")),children:Ue.quickInput}),ue.beforeUI,(0,t.jsx)(In.Z,{placeholder:ue.placeholder,enableFocusExpand:ue.enableFocusExpand,value:oe,onChange:Ce,maxLength:ue.maxLength,disabled:bn||r.disabled,sendDisabled:we,scalable:ue==null?void 0:ue.zoomable,header:xn,prefix:(0,t.jsxs)(t.Fragment,{children:[On,ue==null?void 0:ue.morePrefixActions]}),onSubmit:Xe()(dn()().mark(function pe(){var be;return dn()().wrap(function(jn){for(;;)switch(jn.prev=jn.next){case 0:return jn.next=2,(ue.beforeSubmit||function(){return Promise.resolve(!0)})();case 2:if(be=jn.sent,be){jn.next=5;break}return jn.abrupt("return");case 5:ue.onSubmit({query:oe,fileList:en}),Ce(""),le(j);case 8:case"end":return jn.stop()}},pe)})),onCancel:function(){Pe==null||Pe(),r.setLoading(!1)},onFocus:function(){return H(!0)},onBlur:function(){return H(!1)},onPasteFile:Ie,loading:r.loading}),ue.afterUI]})]})}),mn=e(69637),Ye=e(10325),_n,Pn=(0,d.vJ)(_n||(_n=n()([`
.`,`-chat-anywhere-chat {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  opacity: 1;

  .`,`-bubble-list {
    position: relative;
    margin: 0 auto;
    max-width: 850px;
    min-width: 300px;
  }

  .`,`-chat-anywhere-sender-wrapper {
    max-width: 850px;
    min-width: 300px;
    padding: 0 16px 16px 16px;
    margin: 0 auto;
  }

  &-hide {
    opacity: 0;
  }

  &-welcome {
    max-width: 850px;
    min-width: 300px;
    width: -webkit-fill-available;
    padding: 16px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: safe center;
    justify-content: safe center;
    overflow: auto;
  }
}




@media screen and (max-width: 768px) {
  button {
    cursor: default !important;
  }

  .`,"-conversations .",`-conversations-item {
    cursor: default !important;

  }
}


`])),function(A){return A.theme.prefixCls},function(A){return A.theme.prefixCls},function(A){return A.theme.prefixCls},function(A){return A.theme.prefixCls},function(A){return A.theme.prefixCls}),Mn=(0,E.forwardRef)(function(A,Z){var D,$=(0,S.TQ)(function(X){return X.messages}),oe=(0,p.wv)(),Ce=oe.getPrefixCls,r=Ce("chat-anywhere"),m=(0,S.TQ)(function(X){return X.uiConfig}),j=(0,E.useState)(!1),W=L()(j,2),Y=W[0],z=W[1],H=(0,ye.G)();(0,mn.Z)(function(){z(!0)},300);var ee=N()("".concat(r,"-chat"),te()({},"".concat(r,"-chat-hide"),!Y)),fe=!($!=null&&$.length);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Pn,{}),(0,t.jsxs)("div",{className:ee,children:[(0,t.jsx)(Le.Z.List,{pagination:m==null||(D=m.bubbleList)===null||D===void 0?void 0:D.pagination,smooth:!!H.loading,style:{height:0,flex:fe?0:1},ref:Z.chatRef,items:$}),fe?(0,t.jsx)("div",{className:"".concat(ee,"-welcome"),children:m==null?void 0:m.welcome}):null,(0,t.jsx)("div",{className:"".concat(ee,"-sender"),style:m!=null&&m.disclaimer?{marginBottom:16}:{},children:(0,t.jsx)(an,{ref:Z.inputRef})}),(m==null?void 0:m.disclaimer)&&(0,t.jsx)(Ye.Z,{style:{position:"absolute",bottom:0,width:"100%"},desc:m==null?void 0:m.disclaimer})]})]})}),hn,a=(0,d.vJ)(hn||(hn=n()([`
.`,`-chat-anywhere-header {
  height: 64px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  backdrop-filter: blur(100px);
  z-index: 1;
  display: flex;
  align-items: center;
}

.`,`-chat-anywhere-header
  ~ .`,`-chat-anywhere-chat
  .`,`-bubble-list {
  &::before {
    content: ' ';
    display: block;
    height: 24px;
    flex: 0 0 24px;
  }
}

`])),function(A){return A.theme.prefixCls},function(A){return A.theme.prefixCls},function(A){return A.theme.prefixCls},function(A){return A.theme.prefixCls});function Ke(){var A=(0,p.wv)(),Z=A.getPrefixCls,D=Z("chat-anywhere-header"),$=(0,S.TQ)(function(j){return j.uiConfig}),oe=(0,me.x)(),Ce=oe.sessionListShow,r=oe.setSessionListShow,m=M();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{}),(0,t.jsxs)("div",{className:D,children:[m&&(0,t.jsx)(ie.Z,{style:{marginLeft:12},bordered:!1,onClick:function(){return r(!Ce)},icon:Ce?(0,t.jsx)(Re.Z,{}):(0,t.jsx)(C.Z,{})}),$.header]})]})}var qe=e(83962),pn=E.forwardRef(function(Z,D){var $=(0,K.y)(),oe=(0,ye.G)(),Ce=(0,me.x)();return E.useImperativeHandle(D,function(){return h()(h()(h()({},$),oe),Ce)}),null}),c=["cardConfig"],F=(0,E.forwardRef)(function(A,Z){var D,$=(0,E.useState)(0),oe=L()($,2),Ce=oe[0],r=oe[1],m=A.cardConfig,j=y()(A,c),W=(0,E.useRef)(null),Y=(0,E.useRef)(null),z=(0,E.useRef)(null);return E.useImperativeHandle(Z,function(){return h()(h()(h()(h()({},W.current),Y.current),z.current),{},{reload:function(){r(function(ee){return ee+1})}})}),(0,E.createElement)(S.vi,h()(h()({},j),{},{key:Ce}),(0,t.jsxs)(qe.xy,{cardConfig:m,children:[(0,t.jsx)(l,{top:(D=j.uiConfig)!==null&&D!==void 0&&D.header?(0,t.jsx)(Ke,{}):null,left:j.onSessionKeyChange?(0,t.jsx)(Ne,{}):null,right:(0,t.jsx)(Mn,{ref:{chatRef:W,inputRef:Y}})}),(0,t.jsx)(pn,{ref:z})]}))})},9368:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return In}});var ae=e(97857),h=e.n(ae),R=e(19632),y=e.n(R),b=e(9783),L=e.n(b),E=e(5574),T=e.n(E),N=e(13769),p=e.n(N),x=e(93967),P=e.n(x),S=e(67294),g=e(21317),n=e(85893),d=S.createContext(null),k=function(ye){var De=ye.children,tn=S.useContext(d),fn=tn.prefixCls;return(0,n.jsx)("div",{className:P()("".concat(fn,"-group-title")),children:De&&(0,n.jsx)(g.default.Text,{children:De})})},i=k,t=e(30339),O=e(54604),l=e(45617),M=e(7654),ce=e(64057),ie=e(21403),f=e(42532),me=["prefixCls","info","className","direction","onClick","active","selectable","selected","onSelect","menu"],K=["key"],V={};function re(U){var ye=(0,S.useState)(V[U]),De=T()(ye,2),tn=De[0],fn=De[1];return[tn,function(Qe){for(var Ve in V)V[Ve]=!1;V[U]=Qe,fn(Qe)}]}var de=S.memo(function(U){var ye,De=re(U.info.key),tn=T()(De,2),fn=tn[0],Qe=tn[1],Ve=(0,S.useState)(!1),cn=T()(Ve,2),rn=cn[0],vn=cn[1],an=U.prefixCls,mn=U.info,Ye=U.className,_n=U.direction,Pn=U.onClick,Mn=U.active,hn=U.selectable,a=U.selected,Ke=U.onSelect,qe=U.menu,pn=p()(U,me),c=(0,t.Z)(pn,{aria:!0,data:!0,attr:!0}),F=(0,S.useRef)(null),A=(0,f.Z)(F),Z=T()(A,1),D=Z[0],$=mn.disabled,oe=P()(Ye,"".concat(an,"-item"),L()({},"".concat(an,"-item-active"),Mn&&!$),L()({},"".concat(an,"-item-disabled"),$),L()({},"".concat(an,"-item-timeline"),mn.timeline||hn)),Ce=function(){if(hn)return Ke==null?void 0:Ke(mn.key,!a);if(!$&&Pn)return Pn(mn)};return(0,n.jsxs)("li",h()(h()({ref:F},c),{},{className:oe,onClick:Ce,children:[D&&mn.icon&&(0,n.jsx)("div",{className:"".concat(an,"-icon"),children:mn.icon}),D&&(0,n.jsxs)("div",{className:"".concat(an,"-content-wrapper"),children:[(0,n.jsxs)("div",{className:"".concat(an,"-content"),children:[(mn.timeline||hn)&&(0,n.jsx)("div",{className:"".concat(an,"-timeline"),children:hn?(0,n.jsx)("div",{className:"".concat(an,"-timeline-checkbox"),onClick:function(m){return m.stopPropagation()},children:(0,n.jsx)(l.Z,{checked:a,onChange:function(){return Ke==null?void 0:Ke(mn.key,!a)}})}):(0,n.jsx)("div",{className:"".concat(an,"-timeline-dot")})}),(0,n.jsx)(Re,{editable:fn,setEditable:Qe,prefixCls:an,info:mn,onEdit:qe==null||(ye=qe.find(function(r){return r.key==="edit"}))===null||ye===void 0?void 0:ye.onEdit}),qe&&!$&&!hn&&(0,n.jsx)(M.Z,{styles:{body:{padding:4}},trigger:["click"],open:rn,onOpenChange:vn,content:(0,n.jsx)("div",{className:"".concat(an,"-menu-popover"),children:qe.map(function(r){var m=r.key,j=p()(r,K),W=h()(h()({},j),{},{onClick:function(z){if(m==="edit")Qe(!0);else{var H;(H=j.onClick)===null||H===void 0||H.call(j,mn)}vn(!1)}});return(0,n.jsx)(ke,h()(h()({},W),{},{info:mn}),m)})}),placement:"bottom",children:(0,n.jsx)(ce.Z,{bordered:!1,icon:(0,n.jsx)(O.Z,{}),disabled:$,className:"".concat(an,"-menu-icon"),onClick:function(m){return m.stopPropagation()}})})]}),mn.desc&&(0,n.jsx)("div",{className:"".concat(an,"-desc"),style:mn.timeline||hn?{marginLeft:16}:{},children:mn.desc})]})]}))});function Re(U){var ye=U.editable,De=U.prefixCls,tn=U.info,fn=U.setEditable,Qe=U.onEdit,Ve=(0,S.useState)(tn.label),cn=T()(Ve,2),rn=cn[0],vn=cn[1],an=(0,S.useState)(tn.label),mn=T()(an,2),Ye=mn[0],_n=mn[1];return tn.label!==Ye&&(_n(tn.label),vn(tn.label)),ye?(0,n.jsx)(C,{prefixCls:De,value:rn,onBlur:function(Mn){var hn;if(Mn===rn)return fn(!1);(hn=Qe(Mn,tn))===null||hn===void 0||hn.then(function(){vn(Mn)}).catch(function(){vn(rn)}).finally(function(){fn(!1)})},setEditable:fn}):(0,n.jsx)("div",{className:"".concat(De,"-label"),children:rn})}function C(U){var ye=U.prefixCls,De=U.value,tn=U.onBlur,fn=U.setEditable,Qe=(0,S.useState)(De),Ve=T()(Qe,2),cn=Ve[0],rn=Ve[1],vn=(0,S.useRef)();return(0,S.useEffect)(function(){vn.current.focus()},[]),(0,S.useEffect)(function(){rn(De)},[De]),(0,n.jsx)("input",{ref:vn,className:"".concat(ye,"-label-edit"),value:cn,onClick:function(mn){return mn.stopPropagation()},onChange:function(mn){return rn(mn.target.value)},onBlur:function(){return tn(cn)}})}function ke(U){var ye=U.label,De=U.icon,tn=U.danger,fn=U.info,Qe=U.disabled,Ve=function(rn){var vn;Qe||(rn.stopPropagation(),(vn=U.onClick)===null||vn===void 0||vn.call(U,fn))};return De&&ye?(0,n.jsx)(ie.Z,{disabled:Qe,icon:De,danger:tn,type:"text",onClick:Ve,children:ye}):De?(0,n.jsx)(ce.Z,{disabled:Qe,icon:De,danger:tn,bordered:!1,onClick:Ve}):ye?(0,n.jsx)(ie.Z,{disabled:Qe,danger:tn,type:"text",onClick:Ve,children:ye}):null}var Ne=de,je=e(60869),xe=e(56044),w=e(52677),te=e.n(w),Le="__ungrouped",Be=function(ye){var De=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],tn=S.useMemo(function(){if(!ye)return[!1,void 0,void 0];var rn={sort:void 0,title:void 0};return te()(ye)==="object"&&(rn=h()(h()({},rn),ye)),[!0,rn.sort,rn.title]},[ye]),fn=T()(tn,3),Qe=fn[0],Ve=fn[1],cn=fn[2];return S.useMemo(function(){if(!Qe){var rn=[{name:Le,data:De,title:void 0}];return[rn,Qe]}var vn=De.reduce(function(Ye,_n){var Pn=_n.group||Le;return Ye[Pn]||(Ye[Pn]=[]),Ye[Pn].push(_n),Ye},{}),an=Ve?Object.keys(vn).sort(Ve):Object.keys(vn),mn=an.map(function(Ye){return{name:Ye===Le?void 0:Ye,title:cn,data:vn[Ye]}});return[mn,Qe]},[De,ye])},ze=Be,He=e(68400),Me=e.n(He),un=e(9053),dn,ln=(0,un.vJ)(dn||(dn=Me()([`
.`,`-conversations {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  overflow-y: hidden;
  margin: 0;

  &-rtl {
    direction: rtl;
  }

  &-list {
    display: flex;
    gap: `,`px;
    flex-direction: column;

    .`,`-conversations-item {
      padding-inline-start: `,`px;
    }

    .`,`-conversations-label {
      color: `,`;
    }
  }

  &-timeline {
    position: relative;
    z-index: 1;
    width: 16px;
    height: 8px;

    &-dot {
      width: 8px;
      height: 8px;
      border-radius: 8px;
      background-color: `,`;
      border: 1px solid `,`;
      margin-right: 8px;
    }

    &-checkbox {
      position: absolute;
      left: -4px;
      top: -8px;
    }
  }

  &-icon {
    margin-left: 16px;
    margin-right: -8px;
  }

  &-content-wrapper {
    width: 0;
    flex: 1;
  }

  &-content {
    height: 36px;
    display: flex;
    align-items: center;
    padding: 6px 2px 6px 16px;
  }

  &-desc {
    font-size: 12px;
    padding: 0 16px 6px 16px;
    color: `,`;
  }

  &-item {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: `,`px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &-timeline {
      &::before {
        content: '';
        position: absolute;
        left: 19.5px;
        top: 0;
        bottom: -8px;
        width: 1px;
        background: `,`;
      }
    }

    &:hover {
      background-color: `,`;
    }

    &-active {
      background-color: `,`;

      .`,`-conversations-label,
      .`,`-conversations-menu-icon {
        color: `,`;
      }
    }

    &-disabled {
      cursor: not-allowed;

      .`,`-conversations-label {
        color: `,`;
      }

      .`,`-conversations-menu-icon {
        opacity: 0;
      }
    }

    &:hover,
    &-active {
      .`,`-conversations-menu-icon {
        opacity: 1;
      }
    }

    &:focus-within {
      background-color: `,`;
      
    
    }
  }

  &-label {
    flex: 1;
    color: `,`;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &-label-edit {
    font-size: 14px;
    color: `,`;
    font-family: `,`;
    flex: 1;
    border: none;
    height: 22px;
    line-height: 22px;
    outline: none;
    background-color: transparent;
    padding: 0;
  }


  &-menu-icon {
    opacity: 0;
    transition: all 0.3s;
    font-size: `,`px;
  }

  &-menu-popover {
    display: flex;
    flex-direction: column;
    &-item {
    }
  }

  &-group-title {
    display: flex;
    align-items: center;
    height: `,`px;
    min-height: `,`px;
    padding: 0 `,`px;
  }
}`])),function(U){return U.theme.prefixCls},function(U){return U.theme.paddingXXS},function(U){return U.theme.prefixCls},function(U){return U.theme.paddingXL},function(U){return U.theme.prefixCls},function(U){return U.theme.colorTextSecondary},function(U){return U.theme.colorBgBase},function(U){return U.theme.colorBorder},function(U){return U.theme.colorTextSecondary},function(U){return U.theme.borderRadiusLG},function(U){return U.theme.colorBorder},function(U){return U.theme.colorFillTertiary},function(U){return U.theme.colorFillTertiary},function(U){return U.theme.prefixCls},function(U){return U.theme.prefixCls},function(U){return U.theme.colorText},function(U){return U.theme.prefixCls},function(U){return U.theme.colorTextDisabled},function(U){return U.theme.prefixCls},function(U){return U.theme.prefixCls},function(U){return U.theme.colorFillTertiary},function(U){return U.theme.colorText},function(U){return U.theme.colorText},function(U){return U.theme.fontFamily},function(U){return U.theme.fontSizeXL},function(U){return U.theme.controlHeightLG},function(U){return U.theme.controlHeightLG},function(U){return U.theme.paddingXS}),Xe=["prefixCls","rootClassName","items","activeKey","defaultActiveKey","onActiveChange","selectable","selectedKeys","onSelectChange","menu","styles","classNames","groupable","className","style"],Fe=function(ye){var De=ye.prefixCls,tn=ye.rootClassName,fn=ye.items,Qe=ye.activeKey,Ve=ye.defaultActiveKey,cn=ye.onActiveChange,rn=ye.selectable,vn=ye.selectedKeys,an=ye.onSelectChange,mn=ye.menu,Ye=ye.styles,_n=Ye===void 0?{}:Ye,Pn=ye.classNames,Mn=Pn===void 0?{}:Pn,hn=ye.groupable,a=ye.className,Ke=ye.style,qe=p()(ye,Xe),pn=(0,t.Z)(qe,{attr:!0,aria:!0,data:!0}),c=(0,je.Z)(Ve,{value:Qe}),F=T()(c,2),A=F[0],Z=F[1],D=ze(hn,fn),$=T()(D,2),oe=$[0],Ce=$[1],r=(0,xe.wv)(),m=r.direction,j=r.getPrefixCls,W=j("conversations"),Y=P()(W,a,tn,L()({},"".concat(W,"-rtl"),m==="rtl")),z=S.useRef(cn);z.current=cn;var H=S.useCallback(function(le){var Ee;Z(le.key),(Ee=z.current)===null||Ee===void 0||Ee.call(z,le.key)},[Z]),ee=S.useRef(vn);ee.current=vn;var fe=S.useRef(an);fe.current=an;var X=S.useCallback(function(le,Ee){if(fe.current){var Ue=ee.current||[],$e=Ee?[].concat(y()(Ue),[le]):Ue.filter(function(Je){return Je!==le});fe.current($e)}},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ln,{}),(0,n.jsx)("ul",h()(h()({},pn),{},{style:Ke,className:Y,children:oe.map(function(le,Ee){var Ue=le.data.map(function(Je,on){var Pe=rn!=null?rn:Je.selectable,ue=Pe?vn?vn.includes(Je.key):Je.selected:!1,Q=an?X:Je.onSelect;return(0,n.jsx)(Ne,{info:Je,prefixCls:W,direction:m,className:P()(Mn.item),style:_n.item,menu:mn,active:A===Je.key,selectable:Pe,selected:ue,onSelect:Q,onClick:H},Je.key||"key-".concat(on))});if(Ce){var $e;return(0,n.jsxs)("li",{children:[(0,n.jsx)(d.Provider,{value:{prefixCls:W},children:(($e=le.title)===null||$e===void 0?void 0:$e.call(le,le.name,{components:{GroupTitle:i}}))||(0,n.jsx)(i,{children:le.name},le.name)}),(0,n.jsx)("ul",{className:"".concat(W,"-list"),children:Ue})]},le.name||"key-".concat(Ee))}return Ue})}))]})},In=Fe},24963:function(sn,ne,e){"use strict";e.r(ne),e.d(ne,{Audios:function(){return je},DeepThink:function(){return y},DeepThinking:function(){return y},Files:function(){return g},Footer:function(){return me},FooterActions:function(){return f.p4},FooterCount:function(){return f.hw},Images:function(){return O},Interrupted:function(){return V},Text:function(){return ie},Videos:function(){return Re}});var ae=e(67294),h=e(14082),R=e(85893);function y(w){return(0,R.jsx)(h.Z,{defaultOpen:w.data.defaultOpen!==void 0?w.data.defaultOpen:!0,title:w.data.title,loading:w.data.loading,content:w.data.content,className:w.data.className,open:w.data.open,autoCloseOnFinish:w.data.autoCloseOnFinish,maxHeight:w.data.maxHeight})}var b=e(68400),L=e.n(b),E=e(23345),T=e(50993),N=e(9053),p=e(56044),x=e(6411),P,S=(0,N.vJ)(P||(P=L()([`
.`,`-bubble-files-file {
  position: relative;
}

.`,`-bubble-files-download {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.5);
  z-index: 1;
  opacity: 0;
  font-size: 16px;
  border-radius: `,`px;
  cursor: pointer;
  color: `,`;
  transition: opacity `,`

}

.`,"-bubble-files-file:hover .",`-bubble-files-download {
  opacity: 1;
}
`])),function(w){return w.theme.prefixCls},function(w){return w.theme.prefixCls},function(w){return w.theme.borderRadius},function(w){return w.theme.colorWhite},function(w){return w.theme.motionDurationSlow},function(w){return w.theme.prefixCls},function(w){return w.theme.prefixCls});function g(w){var te=(0,p.wv)(),Le=te.getPrefixCls,Be=Le("bubble-files");return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(S,{}),(0,R.jsx)(E.Z,{className:Be,children:w.data.map(function(ze,He){var Me={name:ze.name||ze.filename,size:ze.size||ze.bytes,url:ze.url};return(0,R.jsxs)("div",{className:"".concat(Be,"-file"),children:[(0,R.jsx)(T.Z.FileCard,{item:Me}),Me.url&&(0,R.jsx)("div",{className:"".concat(Be,"-download"),onClick:function(){window.open(Me.url,"_blank")},children:(0,R.jsx)(x.Z,{})})]},He)})})]})}var n=e(16494),d=e(55839),k,i=(0,N.vJ)(k||(k=L()([`
.`,`-bubble-image {
  border-radius: 8px;
  overflow: hidden;

  .`,`-image {
    display: block;
  }
  .`,`-image-img {
    object-fit: cover;
  }

  .`,`-image-mask-info {
    span {
      margin-inline-end: 0 !important;
    }
  }
}
`])),function(w){return w.theme.prefixCls},function(w){return w.theme.prefixCls},function(w){return w.theme.prefixCls},function(w){return w.theme.prefixCls});function t(w){var te=(0,p.wv)(),Le=te.getPrefixCls,Be=Le("bubble-image");return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(i,{}),(0,R.jsx)("div",{className:"".concat(Be),children:(0,R.jsx)(n.Z,{fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",src:w.url,width:56,height:56,preview:{transitionName:""}})})]})}function O(w){return(0,R.jsx)(d.ZP,{locale:{Image:{preview:""}},children:(0,R.jsx)(E.Z,{children:w.data.map(function(te,Le){return(0,R.jsx)(t,{url:te.url},Le)})})})}var l=e(97857),M=e.n(l),ce=e(66109);function ie(w){var te=w.data.msgStatus==="generating";return(0,R.jsx)(ce.Z,M()(M()({cursor:te},w.data),{},{typing:w.data.msgStatus==="generating"?w.data.typing:!1}))}var f=e(67369);function me(w){return(0,R.jsx)(f.ZP,M()({},w.data))}var K=e(10146);function V(w){return(0,R.jsx)(K.Z,M()({},w.data))}var re=e(51794),de;function Re(w){var te=(0,p.wv)().getPrefixCls("bubble-video");return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(C,{}),(0,R.jsx)(E.Z,{children:w.data.map(function(Le,Be){return(0,R.jsx)("div",{className:te,children:(0,R.jsx)(re.Z,{src:Le.src,poster:Le.poster,controls:!0})},Be)})})]})}var C=(0,N.vJ)(de||(de=L()([`
.`,`-bubble-video {
  width: 256px;
  height: 144px;
  border-radius: 8px;
  border: 1px solid `,`;
  overflow: hidden;
}
`])),function(w){return w.theme.prefixCls},function(w){return w.theme.colorBorderSecondary}),ke=e(11526),Ne;function je(w){var te=(0,p.wv)().getPrefixCls("bubble-audio");return(0,R.jsxs)(E.Z,{direction:"vertical",children:[(0,R.jsx)(xe,{}),w.data.map(function(Le,Be){return(0,R.jsx)("div",{className:te,children:(0,R.jsx)(ke.Z,{src:Le.src})},Be)})]})}var xe=(0,N.vJ)(Ne||(Ne=L()([`
.`,`-bubble-audio {
  background-color: `,`;
  border: 1px solid `,`;
  padding-right: 4px;
  border-radius: `,`px;
}
`])),function(w){return w.theme.prefixCls},function(w){return w.theme.colorBgBase},function(w){return w.theme.colorBorderSecondary},function(w){return w.theme.borderRadiusLG})},55031:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return ce}});var ae=e(56044),h=e(31382),R=e(55839),y=e(16494),b=e(33948),L=e(52253),E=e(56137),T=e(1948),N=e(61763),p=e(77900),x=e(40443),P=e(33119),S=e(4356),g=e(72816),n=e(77382),d=e(72167),k=e(74398),i=e(55094),t=e(61401),O=e(85893),l={Click:{name:"\u70B9\u51FB",icon:(0,O.jsx)(b.Z,{})},Swipe:{name:"\u6ED1\u52A8",icon:(0,O.jsx)(L.Z,{})},Type:{name:"\u8F93\u5165",icon:(0,O.jsx)(E.Z,{})},Back:{name:"\u8FD4\u56DE",icon:(0,O.jsx)(T.Z,{})},Home:{name:"\u4E3B\u9875",icon:(0,O.jsx)(N.Z,{})},Done:{name:"\u5B8C\u6210",icon:(0,O.jsx)(p.Z,{})},Wait:{name:"\u7B49\u5F85",icon:(0,O.jsx)(x.Z,{spin:!0})},click:{name:"\u70B9\u51FB",icon:(0,O.jsx)(b.Z,{})},"right click":{name:"\u53F3\u952E\u70B9\u51FB",icon:(0,O.jsx)(b.Z,{})},"open app":{name:"\u6253\u5F00\u5E94\u7528",icon:(0,O.jsx)(P.Z,{})},computer_double_click:{name:"\u53CC\u51FB",icon:(0,O.jsx)(S.Z,{})},hotkey:{name:"\u5FEB\u6377\u952E",icon:(0,O.jsx)(g.Z,{})},presskey:{name:"\u6309\u952E",icon:(0,O.jsx)(n.Z,{})},scroll:{name:"\u6EDA\u52A8",icon:(0,O.jsx)(L.Z,{})},drag:{name:"\u62D6\u62FD",icon:(0,O.jsx)(d.Z,{})},type_with_clear_enter_pos:{name:"\u8F93\u5165\u5E76\u6E05\u9664",icon:(0,O.jsx)(E.Z,{})},triple_click:{name:"\u4E09\u51FB",icon:(0,O.jsx)(k.Z,{})},drag_end:{name:"\u62D6\u62FD\u7ED3\u675F",icon:(0,O.jsx)(d.Z,{})},type:{name:"\u8F93\u5165",icon:(0,O.jsx)(E.Z,{})},hscroll:{name:"\u6C34\u5E73\u6EDA\u52A8",icon:(0,O.jsx)(i.Z,{})},done:{name:"\u5B8C\u6210",icon:(0,O.jsx)(p.Z,{})},wait:{name:"\u7B49\u5F85",icon:(0,O.jsx)(x.Z,{spin:!0})},call_user:{name:"\u547C\u53EB\u7528\u6237",icon:(0,O.jsx)(t.Z,{})}},M=l;function ce(ie){var f,me,K=(0,ae.wv)(),V=K.getPrefixCls,re=V("operate-card");return(0,O.jsxs)("div",{children:[(0,O.jsx)("div",{className:"".concat(re,"-device-action-time"),children:ie.time}),(0,O.jsx)(h.Z,{header:{className:"".concat(re,"-device-action"),icon:(0,O.jsx)("div",{className:"".concat(re,"-device-action-icon"),children:(f=M[ie.action])===null||f===void 0?void 0:f.icon}),title:(0,O.jsxs)("div",{className:"".concat(re,"-device-action-content"),children:[(0,O.jsxs)("div",{className:"".concat(re,"-device-action-description"),children:[(0,O.jsx)("span",{children:ie.actionName||((me=M[ie.action])===null||me===void 0?void 0:me.name)}),(0,O.jsx)("span",{children:ie.description})]}),(0,O.jsx)("div",{className:"".concat(re,"-device-action-image"),children:(0,O.jsx)(R.ZP,{locale:{Image:{preview:""}},children:(0,O.jsx)(y.Z,{src:ie.image,alt:ie.description,width:"100%",height:"100%"})})})]})}})]})}},10325:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return N}});var ae=e(67294),h=e(68400),R=e.n(h),y=e(9053),b,L=(0,y.vJ)(b||(b=R()([`
.`,`-disclaimer {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1.5;
  color: `,`;
  padding: 8px 12px;
}

.`,`-disclaimer-after-link {
  padding-left: 8px;
}
`])),function(p){return p.theme.prefixCls},function(p){return p.theme.colorTextTertiary},function(p){return p.theme.prefixCls}),E=e(56044),T=e(85893);function N(p){var x=p.desc,P=x===void 0?"AI can also make mistakes, so please check carefully and use it with caution":x,S=(0,E.wv)(),g=S.getPrefixCls,n=g("disclaimer");return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(L,{}),(0,T.jsxs)("div",{className:n,style:p.style,children:[P,p.afterLink&&(0,T.jsx)("a",{className:"".concat(n,"-after-link"),href:p.afterLink.href,target:"_blank",children:p.afterLink.text})]})]})}},80115:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return h}});var ae=e(85893);function h(){return(0,ae.jsx)("iframe",{srcDoc:`<html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>`})}},2534:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return k}});var ae=e(67294),h=e(68400),R=e.n(h),y=e(9053),b,L=(0,y.vJ)(b||(b=R()([`
.`,`-image-generator {

  .`,`-image {
    border-radius: 8px;
    filter: blur(20px);
    animation: `,`clearBlur 1s ease forwards;
    overflow: hidden;
  }


  &-wrapper {
    overflow: hidden;
  }


  &-text {
    position: relative;
    display: flex;
    gap: 8px;
    height: 40px;
    align-items: center;
    font-size: 14px;
    line-height: 26px;
    color: `,`;


    &-success {
      color: `,`;
      font-size: 20px;
    }
  }

  &-default-skeleton {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;


    &-bg {
      position: absolute;
      inset: 0;
    }

    &-icon {
      width: 32px;
      height: 32px;
    } 

    &-content {
      display: flex;
      flex-direction: column;
      gap: 4px;
      align-items: center;
      justify-content: center;
      z-index: 1;
      
    }

    &-text {
      margin-top: 8px;
      font-size: 14px;
      color: `,`;
    }
  }
}



@keyframes `,`clearBlur {
  from {
    filter: blur(20px);
  }
  to {
    filter: blur(0);
  }
}

`])),function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.colorText},function(i){return i.theme.colorSuccess},function(i){return i.theme.colorBgBase},function(i){return i.theme.prefixCls}),E=e(56044),T=e(55839),N=e(16494),p=e(89034),x=e(36374),P=e(85893);function S(){for(var i=arguments.length,t=new Array(i),O=0;O<i;O++)t[O]=arguments[O];return t.filter(Boolean).join(" ")}var g=function(t){var O=t.speed,l=O===void 0?1:O,M=t.backgroundColor,ce=M===void 0?"#b6a9f8":M,ie=t.colors,f=ie===void 0?["#c979ee","#ef788c","#eb7fc6","#6d67c8"]:ie,me=t.ringColors,K=me===void 0?["white","blue","magenta","violet","lightyellow"]:me,V=t.className,re=V===void 0?"":V,de=(0,ae.useRef)(null);return(0,ae.useEffect)(function(){if(CSS&&CSS.registerProperty)try{CSS.registerProperty({name:"--a",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--l",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--x",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--y",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--o",syntax:"<number>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--value",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--width-ratio",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--scale",syntax:"<number>",inherits:!0,initialValue:"0"})}catch(Re){}},[]),(0,ae.useEffect)(function(){var Re=de.current;if(Re){var C=function(){var je=Re.getBoundingClientRect(),xe=Math.min(je.width,je.height);Re.style.setProperty("--actual-size","".concat(xe,"px"))};C();var ke=new ResizeObserver(C);return ke.observe(Re),function(){ke.disconnect()}}},[]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("style",{children:`
        @keyframes ai {
          from {
            --a: 360deg;
            --l: 0.35;
            --o: 1;
          }
          30% {
            --l: 1.5;
          }
          70% {
            --o: 0.4;
            --l: 0.05;
          }
          98% {
            --o: 0.7;
          }
          to {
            --a: 0deg;
            --l: 0.35;
            --o: 1;
          }
        }

        @keyframes ring {
          from {
            --value: var(--start);
            --scale: 1;
          }
          50% {
            --scale: 1.2;
            --width-ratio: 1.5;
          }
          70% {
            --scale: 1;
            --value: calc(var(--start) + 180deg);
            --width-ratio: 1;
          }
          80% {
            --scale: 1.2;
            --width-ratio: 1.5;
          }
          to {
            --value: calc(var(--start) + 360deg);
            --scale: 1;
            --width-ratio: 1;
          }
        }

        .fluid-background-container {
          
          --s: var(--actual-size);
          --p: calc(var(--s) / 4);
          --radius: calc(var(--s) * 0.25);
          --count: 4;
          --width: calc(var(--s) * 0.025);
          --duration: calc(8s / `.concat(l,`);
          --ai-duration: calc(5.5s / `).concat(l,`);
          
          --bg-color: color-mix(in srgb, #7b7bf4, transparent 90%);
          position: absolute;
          inset: 0;
          background: radial-gradient(
              60% 75% at center,
              var(--bg-color) 50%,
              transparent 50%
            ),
            radial-gradient(75% 60% at center, var(--bg-color) 50%, transparent 50%);
          overflow: hidden;
        }

        .fluid-background-container .fluid-inner {
          overflow: hidden;
          background: `).concat(ce,`;
          width: 100%;
          height: 100%;
          position: relative;
          display: grid;
          place-items: center;
        }

        .fluid-background-container .c {
          opacity: 0.9;
          position: absolute;
          width: calc(var(--s) * 0.4);
          aspect-ratio: 1;
          border-radius: 50%;
          --offset-per-item: calc(360deg / var(--count));
          --current-angle-offset: calc(var(--offset-per-item) * var(--i) + var(--a));
          translate: calc(
              cos(var(--current-angle-offset)) * var(--radius) + var(--x, 0)
            )
            calc(sin(var(--current-angle-offset)) * var(--radius) * -1);
          scale: calc(0.6 + var(--l));
          animation: ai var(--ai-duration) cubic-bezier(0.45, -0.35, 0.16, 1.5) infinite;
          transition: opacity 0.3s linear;
          opacity: var(--o, 1);
        }

        .fluid-background-container .c1 {
          background: radial-gradient(50% 50% at center, `).concat(f[0]||"#c979ee",", color-mix(in srgb, ").concat(f[0]||"#c979ee",`, transparent 30%));
          --x: calc(var(--s) * 0.04);
          width: calc(var(--s) * 0.6);
          animation-timing-function: cubic-bezier(0.12, 0.32, 0.68, 0.24);
        }

        .fluid-background-container .c2 {
          background: radial-gradient(50% 50% at center, `).concat(f[1]||"#ef788c",", color-mix(in srgb, ").concat(f[1]||"#ef788c",`, white 40%));
          width: calc(var(--s) * 0.55);
        }

        .fluid-background-container .c3 {
          background: radial-gradient(50% 50% at center, `).concat(f[2]||"#eb7fc6",`, transparent);
          width: calc(var(--s) * 0.2);
          opacity: 0.6;
          --x: calc(var(--s) * -0.04);
        }

        .fluid-background-container .c4 {
          background: `).concat(f[3]||"#6d67c8",`;
          animation-timing-function: cubic-bezier(0.39, -0.03, 0.75, 0.47);
        }

        .fluid-background-container .glass {
          overflow: hidden;
          position: absolute;
          border-radius: 8px;
          inset: 0;
          backdrop-filter: blur(calc(var(--s) * 0.12));
          box-shadow: 0 0 calc(var(--s) * 0.2) color-mix(in srgb, black, transparent 70%);
        }

        .fluid-background-container .glass::after {
          content: "";
          position: absolute;
          inset: 0;
          --c: rgba(255, 255, 255, 0.03);
          --w: 0.0625rem;
          --g: 0.1875rem;
          background: repeating-linear-gradient(
            var(--c),
            var(--c),
            var(--w),
            transparent var(--w),
            transparent calc(var(--w) + var(--g))
          );
        }

        .fluid-background-container .rings {
          aspect-ratio: 1;
          border-radius: 50%;
          position: absolute;
          inset: 0;
          perspective: calc(var(--s) * 2.75);
          opacity: 0.9;
        }

        .fluid-background-container .rings::before,
        .fluid-background-container .rings::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(255, 0, 0, 1);
          border-radius: 50%;
          --width-ratio: 1;
          border: calc(var(--width) * var(--width-ratio)) solid transparent;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          background: linear-gradient(
            `).concat(K.join(", "),`
          ) border-box;
          mask-composite: exclude;
          animation: ring var(--duration) ease-in-out infinite;
          --start: 180deg;
          --value: var(--start);
          --scale: 1;
          transform: rotateY(var(--value)) rotateX(var(--value)) rotateZ(var(--value))
            scale(var(--scale));
        }

        .fluid-background-container .rings::before {
          --start: 180deg;
        }

        .fluid-background-container .rings::after {
          --start: 90deg;
        }
      `)}),(0,P.jsxs)("div",{ref:de,className:S("fluid-background-container",re),children:[(0,P.jsxs)("div",{className:"fluid-inner",children:[(0,P.jsx)("div",{className:"c c4",style:{"--i":0}}),(0,P.jsx)("div",{className:"c c1",style:{"--i":1}}),(0,P.jsx)("div",{className:"c c2",style:{"--i":2}}),(0,P.jsx)("div",{className:"c c3",style:{"--i":3}}),(0,P.jsx)("div",{className:"rings"})]}),(0,P.jsx)("div",{className:"glass"})]})]})},n=g,d=function(t){var O=(0,E.wv)(),l=O.getPrefixCls,M=l("image-generator"),ce=t.block,ie=t.skeletonText,f=t.width,me=f===void 0?320:f,K=t.height,V=K===void 0?320:K,re=t.src,de=t.loadingText,Re=de===void 0?"Painting...":de,C=t.doneText,ke=C===void 0?"Paint Completed":C,Ne=t.skeleton||(0,P.jsxs)("div",{className:"".concat(M,"-default-skeleton"),style:{width:"100%",height:"100%"},children:[(0,P.jsx)("div",{className:"".concat(M,"-default-skeleton-bg"),children:(0,P.jsx)(n,{})}),(0,P.jsxs)("div",{className:"".concat(M,"-default-skeleton-content"),children:[(0,P.jsx)("img",{className:"".concat(M,"-default-skeleton-icon"),src:"https://img.alicdn.com/imgextra/i2/O1CN01M1X8yM1MWUC7u3Go5_!!6000000001442-54-tps-72-72.apng"}),ie&&(0,P.jsx)("div",{className:"".concat(M,"-default-skeleton-text"),children:ie})]})]}),je=!re,xe=ce?{aspectRatio:"".concat(me,"/").concat(V)}:{width:me,height:V};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(L,{}),(0,P.jsxs)("div",{className:M,children:[(0,P.jsxs)("div",{className:"".concat(M,"-text"),children:[je?(0,P.jsx)(x.Z,{}):(0,P.jsx)(p.Z,{className:"".concat(M,"-text-success")}),je?(0,P.jsx)("span",{style:{paddingLeft:20},children:Re}):ke]}),(0,P.jsx)("div",{className:"".concat(M,"-wrapper"),style:xe,children:je?Ne:(0,P.jsx)(T.ZP,{locale:{Image:{preview:""}},children:(0,P.jsx)(N.Z,{width:"100%",height:"100%",src:re})})})]})]})},k=d},66109:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return pn}});var ae=e(19632),h=e.n(ae),R=e(97857),y=e.n(R),b=e(67294),L=e(13769),E=e.n(L),T=e(55729),N=e(68400),p=e.n(N),x=e(9053),P,S=(0,x.vJ)(P||(P=p()([`
.`,`-markdown {
  color: inherit;
  max-width: 100%;

  blockquote {
    padding-inline: 0.6em 0;
    padding-block: 0;
    margin: 1em 0;
    border-inline-start: 4px solid `,`;
    opacity: 0.85;
  }

  figure {
    margin: 0;
  }

  code {
    font-size: 0.8571428571428571em;
    border: 0;
    margin: 0;
    background-color: `,`;
    color: `,`;
    border-radius: `,`px;
    padding: 2px 6px;
    margin-inline: 3px;
    border: 1px solid `,`;
  }

  pre code {
    font-size: 0.8571428571428571em;
    background-color: transparent;
    border: none;
  }

  .`,`-mermaid,
  .`,`-codeHighlighter {
    border: 1px solid `,`;
    border-radius: `,`px;
    
  }

  .`,`-mermaid-graph,
  .`,`-codeHighlighter-code {
    border: none;
    background-color: `,`;

    * {
      background-color: transparent !important;
    }
  }


  .`,`-code-header {
    display: flex;
    justify-content: space-between;
    background: `,`;
    border-bottom: 1px solid `,`;
    height: 28px;
    line-height: 28px;
    align-items: center;
    user-select: none;
    position: relative;
    padding: 0 12px;

    &-lang {
      font-weight: bold;
    }

    &-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &-download {
      font-size: 16px;
      cursor: pointer;
    }

    &-icon {
      font-size: 16px;
      cursor: pointer;
    }

    &-copied {
      color: `,`;
      cursor: pointer;
      font-size: 16px;
    }
  }



  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0.5714285714285714em;
    margin-bottom: 0.5714285714285714em;
    font-weight: 500;
    line-height: 1.7777;
    color: inherit;
  }

  p {
    margin-bottom: 0.5714285714285714em;
  }

  h1 {
    font-size: 1.2857142857142858em;
  }

  h2 {
    font-size: 1.1428571428571428em;
  }

  h3 {
    font-size: 1em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 1em;
  }

  hr {
    border-color: `,`;
    border-style: solid;
    border-width: 1px 0 0 0;
    margin: 1em 0;
  }

  table {
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  table th {
    background: `,`;
    text-align: left;
  }

  table td,
  table th {
    padding: 0.75em 1.5em;
    border: 1px solid `,`;
    white-space: pre;
  }

  .`,`-image {
    max-width: 480px;
    overflow: hidden;
  }

  .`,`-markdown-video {
    position: relative;
    
    &-poster {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 480px;
      background-color: #000;
      border-radius: 8px;
      padding: 100px 0;
      cursor: pointer;
    }

    &-play {
      color: #ccc;
      font-size: 30px;
    }
  }
}

.`,`-markdown.x-markdown {
  img {
    margin: 0;
  }
}


.`,`-markdown  > *:last-child {
  margin-bottom: 0 !important;
}

.`,`-markdown  > *:first-child {
  margin-top: 0 !important;
}

.`,`-markdown-footnotes {
  > h2 {
    display: none;
  }

  > ol {
    margin: 0 0 0 1em;
  }

  [data-footnote-backref] {
    display: none;
  }

}


.`,`-markdown-footnote {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  padding: 0 4px;
  height: 16px;
  margin-inline: 2px;
  font-size: 10px;
  color: `,`;
  text-align: center;
  background: `,`;
  border-radius: 4px;
  transition: all 100ms `,`;
  cursor: pointer;
  line-height: 1;

  &:hover {
    color: `,`;
    background: `,`;
  }
}
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.colorBorder},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorText},function(c){return c.theme.borderRadiusSM},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.borderRadiusSM},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorBgBase},function(c){return c.theme.prefixCls},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorSuccess},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.motionEaseOut},function(c){return c.theme.colorWhite},function(c){return c.theme.colorPrimary});function g(c){var F=c.cursor,A=c.content,Z=c.animation,D=(0,b.useMemo)(function(){return Z?"":F?F==="dot"?" :dot:":F==="underline"?" :underline:":" :dot:":""},[F,A]);return A+D}var n=e(85893),d=["content","cursor","animation"];function k(c){var F=c.content,A=c.cursor,Z=c.animation,D=E()(c,d),$=g({cursor:A,content:F,animation:Z}),oe=(0,b.useMemo)(function(){if(Z)return{hasNextChunk:Z&&A,enableAnimation:Z&&A}},[A,Z]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(S,{}),(0,n.jsx)(T.Z,y()(y()({},D),{},{content:$,streaming:oe}))]})}var i=e(5574),t=e.n(i),O=function(F){var A=F.content,Z=F.typing,D=(0,b.useState)(0),$=t()(D,2),oe=$[0],Ce=$[1],r=(0,b.useRef)();return(0,b.useEffect)(function(){return Z?r.current=setInterval(function(){Ce(function(m){return m+1})},typeof Z=="number"?Z:5):r.current&&clearInterval(r.current),function(){return clearInterval(r.current)}},[Z]),Z?A.slice(0,oe):A},l=O,M=e(56044),ce=e(93967),ie=e.n(ce),f=function(){return null},me=e(87427),K=e(96643),V=e(6411),re=e(97634),de=e(89698),Re=e(39536),C={javascript:"js",typescript:"ts",python:"py",ruby:"rb",rust:"rs",kotlin:"kt",csharp:"cs",markdown:"md",yaml:"yml",shell:"sh",bash:"sh",zsh:"sh",mermaid:"mmd",jsx:"jsx",tsx:"tsx"},ke=function(F){var A,Z=F.className,D=F.children,$=(Z==null||(A=Z.match(/language-(\w+)/))===null||A===void 0?void 0:A[1])||"";return typeof D!="string"?null:$==="mermaid"?(0,n.jsx)(me.Z,{header:(0,n.jsx)(Ne,{lang:"mermaid",content:D}),children:D}):(0,n.jsx)(K.Z,{lang:$,header:(0,n.jsx)(Ne,{lang:$,content:D}),children:D})};function Ne(c){var F=c.lang,A=c.content,Z=(0,b.useState)(!1),D=t()(Z,2),$=D[0],oe=D[1],Ce=(0,b.useRef)(),r=(0,M.wv)(),m=r.getPrefixCls,j=m("code-header"),W=(0,b.useCallback)(function(){var z=C[F]||F||"txt",H=new Blob([A],{type:"text/plain;charset=utf-8"}),ee=URL.createObjectURL(H),fe=document.createElement("a");fe.href=ee,fe.download="code.".concat(z),fe.click(),URL.revokeObjectURL(ee)},[F,A]),Y=(0,b.useCallback)(function(){(0,Re.J)(A).then(function(){clearTimeout(Ce.current),oe(!0),Ce.current=setTimeout(function(){return oe(!1)},2e3)}).catch(function(){console.warn("Copy failed")})},[A]);return(0,n.jsxs)("div",{className:j,children:[(0,n.jsx)("div",{className:"".concat(j,"-lang"),children:F}),(0,n.jsxs)("div",{className:"".concat(j,"-actions"),children:[(0,n.jsx)(V.Z,{className:"".concat(j,"-download"),onClick:W}),$?(0,n.jsx)(re.Z,{className:"".concat(j,"-copied")}):(0,n.jsx)(de.Z,{className:"".concat(j,"-icon"),onClick:Y})]})]})}var je=ke;function xe(c){return(0,n.jsx)("a",{href:c.src,target:"_blank",rel:"noopener noreferrer",children:c.src})}var w=e(55839),te=e(16494),Le=e(85576),Be=e(36231),ze=e(89102);function He(c){try{var F=c.src,A=new URL(F),Z=A.pathname,D=Z.endsWith(".mp4"),$=Z.endsWith(".mp3")||Z.endsWith(".wav");return $?(0,n.jsx)("audio",y()(y()({src:c.src},c),{},{controls:!0})):D?(0,n.jsx)(un,y()({src:c.src},c)):(0,n.jsx)(Me,y()({src:c.src},c))}catch(oe){return null}}function Me(c){return(0,n.jsx)(w.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(te.Z,y()({src:c.src},c))})}function un(c){var F=c.src,A=(0,b.useState)(!1),Z=t()(A,2),D=Z[0],$=Z[1],oe=(0,M.wv)(),Ce=oe.getPrefixCls,r=Ce("markdown-video");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:r,children:(0,n.jsx)("div",{className:"".concat(r,"-poster"),onClick:function(){return $(!0)},children:(0,n.jsx)(Be.Z,{className:"".concat(r,"-play")})})}),(0,n.jsx)(Le.Z,{closeIcon:(0,n.jsx)("a",{children:(0,n.jsx)(ze.Z,{style:{fontSize:20}})}),centered:!0,transitionName:"",footer:null,width:500,title:"",styles:{content:{padding:0}},open:D,destroyOnHidden:!0,onCancel:function(){return $(!1)},children:(0,n.jsx)("video",{controls:!0,autoPlay:!0,style:{display:"block",width:"100%"},children:(0,n.jsx)("source",{src:F,type:"video/mp4"})})})]})}function dn(c){var F=(0,M.wv)().getPrefixCls("markdown");return(0,n.jsx)("div",{className:F,style:{fontSize:c.baseFontSize,lineHeight:c.baseLineHeight},children:c.content})}var ln=e(79427),Xe=e(55241),Fe,In=(0,x.vJ)(Fe||(Fe=p()([`
.`,`-markdown-citation {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  padding: 0 4px;
  height: 16px;
  margin-inline: 2px;
  font-size: 10px;
  color: `,`;
  text-align: center;
  vertical-align: top;
  background: `,`;
  border-radius: 4px;
  transition: all 100ms `,`;
  cursor: pointer;
  line-height: 1;

  &:hover {
    color: `,`;
    background: `,`;
  }
}
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.motionEaseOut},function(c){return c.theme.colorWhite},function(c){return c.theme.colorPrimary});function U(c){var F=(0,M.wv)(),A=F.getPrefixCls,Z=A("markdown-citation"),D=c["data-text"],$=c["data-url"],oe=c["data-title"],Ce=c["data-content"],r=Ce||oe,m=(0,n.jsx)("sup",{className:Z,children:D});return r&&(m=(0,n.jsx)(Xe.Z,{title:oe,content:$?(0,n.jsx)("a",{href:$,rel:"noreferrer",target:"_blank",children:$}):Ce,children:m})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(In,{}),m]})}function ye(c){var F,A=((F=c.citationsData[c["data-text"]])===null||F===void 0?void 0:F.render)||U;return(0,n.jsx)(A,y()({},c))}var De=[],tn={};function fn(c){var F=c.citations,A=F===void 0?De:F,Z=c.citationsMap,D=Z===void 0?tn:Z,$=(0,b.useMemo)(function(){var m=y()({},D);return A.forEach(function(j,W){var Y=W+1;m[Y]=j}),[m,function(){return function(W){return(0,n.jsx)(ye,y()(y()({},W),{},{citationsData:m}))}}()]},[A,D]),oe=t()($,2),Ce=oe[0],r=oe[1];return{CitationComponent:r,citationsData:Ce,citationsDataCount:Object.keys(Ce).length}}var Qe=e(30861);function Ve(c){return{name:"citation",level:"inline",tokenizer:function(A){var Z=A.match(/^\[([^\]]+)\](?!\()/);if(Z){var D=Z[0].trim(),$=D==null?void 0:D.replace(/^\[([^\]]+)\]/g,"$1");if(c[$])return{type:"citation",raw:D,text:D==null?void 0:D.replace(/^\[([^\]]+)\]/g,"$1"),renderType:"component"}}},renderer:function(A){if(c&&Object.keys(c).length===0)return null;var Z=A.text,D=c==null?void 0:c[Z];return D?'<citation data-text="'.concat(Z,'" data-url="').concat(D.url,'" data-title="').concat(D.title,'" data-content="').concat(D.content,'"></citation>'):A.raw}}}var cn,rn=(0,x.vJ)(cn||(cn=p()([`
.markdown-cursor-underline {
  opacity: 1;
  padding: 0 2px;
  animation: markdown-cursor-underline .8s infinite;

  &::after {
    content: '_';
    color: `,`;
  }
}


@keyframes markdown-cursor-underline {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
`])),function(c){var F=c.theme;return F.colorPrimary});function vn(){var c=(0,M.wv)(),F=c.getPrefixCls,A="markdown-cursor-underline";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(rn,{}),(0,n.jsx)("span",{className:ie()(A,F("markdown-cursor"))})]})}var an=e(36374),mn=function(F){var A=F["data-type"];return A==="dot"?(0,n.jsx)(an.Z,{}):A==="underline"?(0,n.jsx)(vn,{}):null};function Ye(){var c={cursors:{dot:"dot",underline:"underline"}},F=Object.keys(c.cursors).map(function(D){return D.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|"),A=new RegExp(":(".concat(F,"):")),Z=new RegExp("^".concat(A.source));return{name:"cursor",level:"inline",start:function($){var oe;return(oe=$.match(A))===null||oe===void 0?void 0:oe.index},tokenizer:function($,oe){var Ce=Z.exec($);if(Ce){var r=Ce[1],m=c.cursors[r];if(m)return{type:"cursor",raw:Ce[0],name:r,cursor:m}}},renderer:function($){var oe='<custom-cursor data-type="'.concat($.name,'"></custom-cursor>');return oe}}}var _n=e(85018),Pn=["href"];function Mn(c){return c["data-footnote-ref"]===""?(0,n.jsx)(hn,y()({},c)):c.children==="\u21A9"&&c["data-footnote-backref"]===""?null:(0,n.jsx)("a",y()({},c))}function hn(c){var F=(0,M.wv)(),A=F.getPrefixCls,Z=A("markdown-footnote"),D=c.href,$=E()(c,Pn);return(0,n.jsx)("a",y()(y()({},$),{},{className:Z,onClick:function(){try{var Ce=c.id.split("-"),r=t()(Ce,3),m=r[0],j=r[1],W=r[2],Y=document.querySelector("#footnote-".concat(W)).querySelector("a").getAttribute("href");window.open(Y,"_blank")}catch(z){}}}))}var a={ALLOWED_TAGS:[]};function Ke(){try{return new RegExp("(?<=a)b"),!0}catch(c){return!1}}var qe=Ke(),pn=(0,b.memo)(function(c){var F=c.baseFontSize||14,A=c.baseLineHeight||1.7,Z=l({content:c.content,typing:c.typing&&!c.animation}),D=(0,M.wv)().getPrefixCls("markdown"),$=c.raw,oe=$===void 0?!1:$,Ce=c.allowHtml,r=Ce===void 0?!1:Ce,m=fn({citations:c.citations,citationsMap:c.citationsMap}),j=m.citationsData,W=m.citationsDataCount,Y=m.CitationComponent,z=(0,b.useMemo)(function(){return y()({code:je,style:f,script:f,img:c.disableImage?xe:He,citation:Y,"custom-cursor":mn,a:Mn},c.components)},[c.disableImage,Y,c.components]),H=(0,b.useMemo)(function(){return{ADD_TAGS:["custom-cursor","citation"]}},[]),ee=(0,b.useMemo)(function(){var on=(0,Qe.Z)();on.push(Ye()),W>0&&on.push(Ve(j));var Pe=(0,_n.Z)({sectionClass:"".concat(D,"-footnotes")});return on.push.apply(on,h()(Pe.extensions)),{extensions:on,walkTokens:Pe.walkTokens}},[W,j]),fe=ee.extensions,X=ee.walkTokens,le=(0,b.useMemo)(function(){return y()({extensions:fe,walkTokens:X},!r&&{renderer:{html:function(Pe){var ue=Pe.text||Pe.raw||"";return ue.replace(/</g,"&lt;").replace(/>/g,"&gt;")}}})},[fe,r]),Ee=Z||"",Ue=(0,n.jsx)(dn,{content:Ee,baseFontSize:F,baseLineHeight:A}),$e=(0,b.useCallback)(function(){for(var on=arguments.length,Pe=new Array(on),ue=0;ue<on;ue++)Pe[ue]=arguments[ue];return console.error(Pe),(0,n.jsx)(dn,{content:Ee,baseFontSize:F,baseLineHeight:A})},[Ee,F,A]),Je=(0,b.useMemo)(function(){return{fontSize:F,lineHeight:A}},[F,A]);return oe||!qe?Ue:(0,n.jsx)(ln.SV,{fallbackRender:$e,children:(0,n.jsx)(k,{dompurifyConfig:H,cursor:c.cursor,animation:c.animation,components:z,style:Je,openLinksInNewTab:!0,className:ie()(D,c.className),content:Ee,config:le})})})},36374:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return p}});var ae=e(68400),h=e.n(ae),R=e(56044),y=e(9053),b=e(93967),L=e.n(b),E=e(85893),T,N=(0,y.vJ)(T||(T=h()([`
.`,`-markdown-cursor-dot {
  display: inline-flex;
  width: 0;
  align-items: center;
  padding-left: 2px;
  gap: 4px;


  &-dot1 {
    flex: 0 0 5px;
    width: 5px;
    height: 5px;
    border-radius: 999px;
    background-color: `,`;
    animation: markdown-cursor-dot1 2s infinite ease;
  }


  &-dot2 {
    flex: 0 0 5px;
    width: 5px;
    height: 5px;
    border-radius: 999px;
    opacity: 0.5;
    background-color: `,`;
    animation: markdown-cursor-dot2 2s infinite ease;
  }

}


@keyframes markdown-cursor-dot1 {
  0% {
    transform: translateX(0px)scale(1);
    z-index: 1;
    opacity: 1;

  }

  40% {
    transform: translateX(8.5px)scale(0.8);
    z-index: 3;
    opacity: 0.5;

  }

  50% {
    transform: translateX(8.5px) scale(0.8);
    z-index: 1;
    opacity: 0.5;
  }

  90% {
    transform: translateX(0px) scale(1);
    z-index: 1;
    opacity: 1;
  }
}

@keyframes markdown-cursor-dot2 {
  0% {
    transform: translateX(0px)scale(1);
    z-index: 1;
    opacity: 0.5;

  }

  40% {
    transform: translateX(-8.5px)scale(1.25);
    z-index: 3;
    opacity: 1;

  }

  50% {
    transform: translateX(-8.5px) scale(1.25);
    z-index: 1;
    opacity: 1;
  }

  90% {
    transform: translateX(0px) scale(1);
    z-index: 1;
    opacity: 0.5;
  }
}
`])),function(x){return x.theme.prefixCls},function(x){return x.theme.colorText},function(x){return x.theme.colorText});function p(){var x=(0,R.wv)(),P=x.getPrefixCls,S=P("markdown-cursor-dot");return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(N,{}),(0,E.jsxs)("span",{className:L()(S,P("markdown-cursor")),children:[(0,E.jsx)("span",{style:{opacity:0,marginLeft:"-.75em"},children:"_"}),(0,E.jsx)("span",{className:"".concat(S,"-dot1")}),(0,E.jsx)("span",{className:"".concat(S,"-dot2")})]})]})}},12181:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return M}});var ae=e(5574),h=e.n(ae),R=e(15009),y=e.n(R),b=e(99289),L=e.n(b),E=e(68400),T=e.n(E),N=e(41469),p=e(2093),x=e(9361),P=e(96486),S=e.n(P),g=e(67294),n=e(56044),d=e(9053),k=e(85893),i,t=(0,d.vJ)(i||(i=T()([`
.`,`-mermaid {
  &-preview img {
    background: `,`;
  }
}
`])),function(ce){return ce.theme.prefixCls},function(ce){return ce.theme.colorBgBase}),O,l=function(){var ce=L()(y()().mark(function ie(){return y()().wrap(function(me){for(;;)switch(me.prev=me.next){case 0:if(!O){me.next=2;break}return me.abrupt("return",O);case 2:return O=Promise.resolve().then(e.bind(e,76637)).then(function(K){return K.default}),me.abrupt("return",O);case 4:case"end":return me.stop()}},ie)}));return function(){return ce.apply(this,arguments)}}();function M(ce){var ie=ce.content,f=ce.width,me=ce.height,K=(0,n.wv)(),V=K.theme,re=K.getPrefixCls,de=re("mermaid"),Re=(0,g.useMemo)(function(){return{theme:(V==null?void 0:V.algorithm)===x.Z.darkAlgorithm?"dark":"default",securityLevel:"loose",startOnLoad:!1}},[V==null?void 0:V.algorithm,V==null?void 0:V.token.fontFamily]),C=(0,g.useState)(""),ke=h()(C,2),Ne=ke[0],je=ke[1],xe=(0,g.useState)(),w=h()(xe,2),te=w[0],Le=w[1],Be=(0,g.useId)(),ze=(0,P.kebabCase)("mermaid-".concat(Be));return(0,p.Z)(L()(y()().mark(function He(){var Me,un,dn,ln;return y()().wrap(function(Fe){for(;;)switch(Fe.prev=Fe.next){case 0:return Fe.prev=0,Fe.next=3,l();case 3:if(Me=Fe.sent,Me){Fe.next=7;break}return je(ie),Fe.abrupt("return");case 7:return Fe.next=9,Me.parse(ie);case 9:if(un=Fe.sent,!un){Fe.next=19;break}return Me.initialize(Re),Fe.next=14,Me.render(ze,ie);case 14:dn=Fe.sent,ln=dn.svg,je(ln),Fe.next=20;break;case 19:throw new Error("Invalid Mermaid syntax");case 20:Fe.next=26;break;case 22:Fe.prev=22,Fe.t0=Fe.catch(0),Ne||console.error("Mermaid parse error: ",Fe.t0),je(Ne||"");case 26:case"end":return Fe.stop()}},He,null,[[0,22]])})),[ie,Re]),(0,g.useEffect)(function(){if(Ne){var He=new Blob([Ne],{type:"image/svg+xml"}),Me=URL.createObjectURL(He);return Le(Me),function(){URL.revokeObjectURL(Me)}}},[Ne]),te?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(t,{}),(0,k.jsx)(N.Z,{className:de,src:te,alt:"mermaid",width:f,height:me,preview:{rootClassName:"".concat(de,"-preview")}})]}):null}},31382:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return O}});var ae=e(9783),h=e.n(ae),R=e(5574),y=e.n(R),b=e(67294),L=e(56044),E=e(68400),T=e.n(E),N=e(9053),p,x=(0,N.vJ)(p||(p=T()([`
.`,`-operate-card {
  width: 100%;

  &-simple-collapsed {
    width: auto;
    display: inline-flex;
    background-color: transparent;

    .`,`-operate-card-header {
      padding: 0;
      height: auto;
    }
  }
  border-radius: `,`px;
  overflow: hidden;
  background-color: `,`;

  &-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 12px;
    height: 32px;

    &-icon {
      font-size: 16px;
    }

    &-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 13px;
      font-weight: 500;
      color: `,`;
    }

    &-description {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: `,`;
    }

    &-arrow {
      margin: 0 0 0 auto;
    }

    &-has-body {
      cursor: pointer;
    }
  }

  &-body {
    opacity: 0;
    animation: `,`-operate-card-body-open 0.2s ease-in-out forwards;
    
    @keyframes `,`-operate-card-body-open {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  
  }


  &-line-body {
    margin: 0 12px 12px 20px;
    border-left: 1px solid `,`;
  }

  &-thinking {
    padding-left: 16px;
    font-size: 12px;
    line-height: 20px;
    color: `,`;
    opacity: 0.85;
    white-space: pre-wrap;
  }


  &-todo-list {

    &-item {
      height: 32px;
      display: flex;
      align-items: center;
      padding: 0 12px;
      gap: 8px;
      
      color: `,`;


      &-done {
        color: `,`;
      }

      &-icon {
        font-size: 16px;
      }

      &-title {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 12px;
      }

      &-done {
        
      }

    }
  
  }


  &-web-search-item {
    display: flex;
    height: 32px;
    align-items: center;
    padding: 0 12px;
    gap: 8px;
    color: `,`;
    cursor: pointer;

    &-icon {
      display: block;
      width: 16px;
      height: 16px;
      border: 1px solid `,`;
      border-radius: 99px;
    }

    &-title {
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: `,`;

      &:hover {
        color: `,`;
        
      }

    }

    &-subTitle {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-left: 1px solid `,`;
      font-size: 12px;
      line-height: 1;
      color: `,`;
      padding-left: 8px;
      margin-left: 4px;
    }

  }


  &-tool-call-block {
    margin-left: 16px;
    margin-top: 8px;
    border-radius: 8px;
    border: 1px solid `,`;
    overflow: hidden;
    background-color: `,`;

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: `,`;
      height: 32px;
      padding: 0 12px;
      cursor: pointer;
      user-select: none;
    }

    &-title {
      font-size: 14px;
      color: `,`;
    }

    &-extra {
      display: inline-flex;
      align-items: center;
    }

    &-content {
      max-height: 128px;
      overflow-y: auto;
    }
  }

  &-device-action {
    height: auto;
    align-items: flex-start;

    &-icon {
      margin-top: 6px;
    }

    &-time {
      margin-bottom: 4px;
      font-size: 12px;
      line-height: 20px;
      color: `,`;
    }

    &-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    &-description {
      width: 0;
      flex: 1;
      margin: 8px 0 6px 0;
    }

    &-image {
      margin: 4px 0;
      height: 32px;
      margin-left: 8px;
      display: block;
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid `,`;
    }
  }

  &-rag-empty-placeholder {
    padding: 16px 0;
    border: 1px solid `,`;
    border-radius: 6px;
    background-color: `,`;
    line-height: 20px;
    font-size: 12px;
    color: `,`;
    margin: 0 12px 12px 12px;
  }

  &-rag-children .`,`-operate-card-line-body {
    display: flex;
    flex-direction: column;
  }

  &-rag-group-title {
    margin: 16px 0 4px 16px;
    font-size: 12px;
    font-weight: 500;
    color: `,`;

    &:first-child {
      margin-top: 8px;
    }
  }


  &-rag-group-content {
    margin-left: 16px;
    border-radius: 6px;
    font-size: 12px;
    color: `,`;
    display: flex;
    align-items: center;
    cursor: pointer;

    &-images {
      gap: 8px;
    }
  }


  &-rag-item {
    margin-left: 16px;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 4px;


    &-score {
      margin-right: 0;

      b {
        font-weight: 500;
        color: `,`;
      }
    }

    &-title {
      font-size: 12px;
      color: `,`;
      height: 28px;
      padding: 0 4px 0 12px;
      display: flex;
      align-items: center;
      cursor: pointer;
      background-color: `,`;
    }

    &-content {
      padding: 0 12px 12px 12px;
      background-color: `,`;

      &-text {
        font-size: 12px;
        line-height: 20px;
      }
    }

    &-images {
      margin-top: 8px;
      padding: 8px;
      display: flex;
      gap: 8px;
      background-color: `,`;
      
    }

    &-footer {
      display: block;
      margin-top: 8px;
      font-size: 12px;
      line-height: 20px;
      color: `,`;
    }

  }

  &-rag-item ~ &-rag-item {
    margin-top: 8px;
  }
}
`])),function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorFillTertiary},function(l){return l.theme.colorText},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorText},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorText},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorText},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBgBase},function(l){return l.theme.colorFillSecondary},function(l){return l.theme.colorText},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBgBase},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.prefixCls},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorPrimary},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorFillTertiary},function(l){return l.theme.colorFillTertiary},function(l){return l.theme.colorFillQuaternary},function(l){return l.theme.colorTextTertiary}),P=e(93967),S=e.n(P),g=e(28387),n=e(9838),d=e(64057),k=e(85893);function i(l){var M=(0,L.wv)(),ce=M.getPrefixCls,ie=ce("operate-card");return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)("div",{className:"".concat(ie,"-line-body"),children:l.children})})}function t(l){var M,ce=(0,L.wv)(),ie=ce.getPrefixCls,f=ie("operate-card"),me=(0,b.useState)(((M=l.body)===null||M===void 0?void 0:M.defaultOpen)||!1),K=y()(me,2),V=K[0],re=K[1];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(x,{}),(0,k.jsxs)("div",{className:S()(f,h()({},"".concat(f,"-simple-collapsed"),l.header.simple&&!V)),children:[(0,k.jsxs)("div",{className:S()("".concat(f,"-header"),l.header.className,h()({},"".concat(f,"-header-has-body"),l.body)),onClick:function(){l.body&&re(!V)},children:[(0,k.jsx)("div",{className:"".concat(f,"-header-icon"),children:l.header.icon}),typeof l.header.title=="string"?(0,k.jsx)("div",{className:"".concat(f,"-header-title"),children:l.header.title}):l.header.title,l.header.description&&(0,k.jsx)("div",{className:"".concat(f,"-header-description"),children:l.header.description}),l.body&&(0,k.jsx)(d.Z,{size:"small",bordered:!1,className:"".concat(f,"-header-arrow"),icon:V?(0,k.jsx)(g.Z,{}):(0,k.jsx)(n.Z,{})})]}),l.body&&V&&(0,k.jsx)("div",{className:"".concat(f,"-body"),children:l.body.children})]})]})}t.LineBody=i;var O=t},85762:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return i}});var ae=e(5574),h=e.n(ae),R=e(56044),y=e(31382),b=e(37303),L=e(64057),E=e(28387),T=e(9838),N=e(48095),p=e(50104),x=e(55839),P=e(16494),S=e(86250),g=e(67294),n=e(85893);function d(t){var O=t.images,l=(0,R.wv)(),M=l.getPrefixCls,ce=M("operate-card");return(0,n.jsx)(x.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(P.Z.PreviewGroup,{children:O.map(function(ie,f){return(0,n.jsx)(P.Z,{src:ie,width:44,height:44},f)})})})}function k(t){var O=t.item,l=(0,g.useState)(!1),M=h()(l,2),ce=M[0],ie=M[1],f=(0,R.wv)(),me=f.getPrefixCls,K=me("operate-card");return(0,n.jsxs)("div",{className:"".concat(K,"-rag-item"),children:[(0,n.jsxs)("div",{className:"".concat(K,"-rag-item-title"),onClick:function(){ie(!ce)},children:[(0,n.jsx)("span",{children:O.title}),(0,n.jsx)("span",{style:{flex:1}}),O.score?(0,n.jsxs)(b.Z,{color:"mauve",size:"small",className:"".concat(K,"-rag-item-score"),children:["\u5F97\u5206 ",(0,n.jsx)("b",{children:O.score})]}):null,(0,n.jsx)(L.Z,{bordered:!1,size:"small",icon:ce?(0,n.jsx)(E.Z,{}):(0,n.jsx)(T.Z,{})})]}),ce&&(0,n.jsxs)("div",{className:"".concat(K,"-rag-item-content"),children:[(0,n.jsx)("div",{className:"".concat(K,"-rag-item-content-text"),children:O.content}),O.images&&(0,n.jsx)("div",{className:"".concat(K,"-rag-item-images"),children:(0,n.jsx)(d,{images:O.images})}),O.link?(0,n.jsx)("a",{onClick:function(){window.open(O.link,"_blank")},className:"".concat(K,"-rag-item-footer"),href:O.link,target:"_blank",children:O.footer}):(0,n.jsx)("div",{className:"".concat(K,"-rag-item-footer"),children:O.footer})]})]})}function i(t){var O=t.title,l=O===void 0?"\u77E5\u8BC6\u5E93\u68C0\u7D22":O,M=t.subTitle,ce=t.defaultOpen,ie=ce===void 0?!0:ce,f=t.placeholder,me=f===void 0?"\u672A\u67E5\u8BE2\u5230\u4E0E\u63D0\u95EE\u76F8\u5173\u77E5\u8BC6\u5E93":f,K=t.images,V=t.query,re=t.filters,de=(0,R.wv)(),Re=de.getPrefixCls,C=Re("operate-card"),ke=(0,n.jsxs)(y.Z.LineBody,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"\u68C0\u7D22 Query"}),(0,n.jsx)("div",{className:"".concat(C,"-rag-group-content"),children:V})]}),K!=null&&K.length?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"\u68C0\u7D22\u56FE\u7247"}),(0,n.jsx)("div",{className:"".concat(C,"-rag-group-content ").concat(C,"-rag-group-content-images"),children:(0,n.jsx)(d,{images:K})})]}):null,re?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"\u8FC7\u6EE4\u6761\u4EF6"}),(0,n.jsx)("div",{className:"".concat(C,"-rag-group-content"),children:re})]}):null,t.list.length?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"Output"}),t.list.map(function(Ne,je){return(0,n.jsx)(k,{item:Ne},je)})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"Output"}),(0,n.jsxs)(S.Z,{align:"center",justify:"center",gap:8,className:"".concat(C,"-rag-empty-placeholder"),children:[(0,n.jsx)(N.Z,{}),(0,n.jsx)("span",{children:me})]})]})]});return(0,n.jsx)(y.Z,{header:{icon:(0,n.jsx)(p.Z,{}),title:l,description:M},body:{defaultOpen:ie,children:(0,n.jsx)("div",{className:"".concat(C,"-rag-children"),children:ke})}})}},79323:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return L}});var ae=e(56044),h=e(31382),R=e(40443),y=e(33593),b=e(85893);function L(E){var T=(0,ae.wv)(),N=T.getPrefixCls,p=E.defaultOpen,x=p===void 0?!0:p,P=E.loading,S=P===void 0?!1:P,g=N("operate-card");return(0,b.jsx)(h.Z,{header:{icon:S?(0,b.jsx)(R.Z,{spin:!0}):(0,b.jsx)(y.Z,{}),title:E.title,description:E.subTitle},body:{defaultOpen:S?x:!1,children:(0,b.jsx)(h.Z.LineBody,{children:(0,b.jsx)("div",{className:"".concat(g,"-thinking"),children:E.content})})}},S.toString())}},6874:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return x}});var ae=e(9783),h=e.n(ae),R=e(56044),y=e(31382),b=e(41775),L=e(77900),E=e(40443),T=e(93967),N=e.n(T),p=e(85893);function x(P){var S=(0,R.wv)(),g=S.getPrefixCls,n=g("operate-card"),d=P.title,k=d===void 0?"Task List":d,i=P.list.filter(function(t){return t.status==="done"}).length;return(0,p.jsx)(y.Z,{header:{icon:(0,p.jsx)(b.Z,{}),title:k,description:"\xB7 ".concat(i?i+" of ":""," ").concat(P.list.length)},body:{defaultOpen:P.defaultOpen,children:(0,p.jsx)("div",{className:"".concat(n,"-todo-list"),children:P.list.map(function(t){return(0,p.jsxs)("div",{className:N()(h()(h()({},"".concat(n,"-todo-list-item"),!0),"".concat(n,"-todo-list-item-").concat(t.status),!0)),children:[(0,p.jsx)("div",{className:"".concat(n,"-todo-list-item-icon"),children:{done:(0,p.jsx)(L.Z,{}),todo:(0,p.jsx)(L.Z,{}),running:(0,p.jsx)(E.Z,{spin:!0})}[t.status]}),(0,p.jsx)("div",{className:"".concat(n,"-todo-list-item-title"),style:{textDecoration:t.status==="done"?"line-through":"none"},children:t.title})]},t.title)})})}})}},85786:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return n}});var ae=e(5574),h=e.n(ae),R=e(56044),y=e(31382),b=e(97634),L=e(89698),E=e(40443),T=e(78598),N=e(64057),p=e(4146),x=e(39536),P=e(67294),S=e(85893);function g(d){var k=(0,R.wv)(),i=k.getPrefixCls,t=i("operate-card"),O=d.expandEnabled,l=O===void 0?!0:O,M=d.language,ce=M===void 0?"json":M,ie=typeof d.content=="string"?d.content:JSON.stringify(d.content),f=(0,P.useState)(!1),me=h()(f,2),K=me[0],V=me[1],re=(0,P.useState)(l!==!0),de=h()(re,2),Re=de[0],C=de[1],ke=(0,P.useRef)(null);return(0,S.jsxs)("div",{className:"".concat(t,"-tool-call-block"),children:[(0,S.jsxs)("div",{className:"".concat(t,"-tool-call-block-header"),onClick:function(){l===!0&&C(function(je){return!je})},children:[(0,S.jsx)("span",{className:"".concat(t,"-tool-call-block-title"),children:d.title}),(0,S.jsx)("div",{className:"".concat(t,"-tool-call-block-extra"),onClick:function(je){return je.stopPropagation()},children:(0,S.jsx)(N.Z,{size:"small",style:{marginRight:"-6px"},icon:K?(0,S.jsx)(b.Z,{}):(0,S.jsx)(L.Z,{}),bordered:!1,onClick:function(){(0,x.J)(ie).then(function(){clearTimeout(ke.current),V(!0),ke.current=setTimeout(function(){V(!1)},2e3)}).catch(function(){console.warn("Copy failed")})}})})]}),Re&&(0,S.jsx)("div",{className:"".concat(t,"-tool-call-block-content"),children:(0,S.jsx)(p.ZP,{language:ce,value:ie,readOnly:!0,basicSetup:{lineNumbers:!1,foldGutter:!1}})})]})}function n(d){var k,i,t=d.title,O=t===void 0?"Call Tool":t,l=d.subTitle,M=d.defaultOpen,ce=M===void 0?!0:M,ie=d.loading,f=ie===void 0?!1:ie,me=d.simple,K=me===void 0?!1:me;return(0,S.jsx)(y.Z,{header:{icon:f?(0,S.jsx)(E.Z,{spin:!0}):(0,S.jsx)(T.Z,{}),title:O,description:l,simple:K},body:{defaultOpen:ce,children:(0,S.jsxs)(y.Z.LineBody,{children:[(0,S.jsx)(g,{title:"Input",content:d.input,expandEnabled:!K,language:(k=d.inputBlock)===null||k===void 0?void 0:k.language}),(0,S.jsx)(g,{title:"Output",content:d.output,expandEnabled:!K,language:(i=d.outputBlock)===null||i===void 0?void 0:i.language})]})}})}},69610:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return N}});var ae=e(9783),h=e.n(ae),R=e(56044),y=e(31382),b=e(9229),L=e(93967),E=e.n(L),T=e(85893);function N(p){var x=(0,R.wv)(),P=x.getPrefixCls,S=P("operate-card"),g=p.title,n=g===void 0?"\u8054\u7F51\u641C\u7D22":g,d=p.subTitle;return(0,T.jsx)(y.Z,{header:{icon:(0,T.jsx)(b.Z,{}),title:n,description:d},body:{defaultOpen:!0,children:(0,T.jsx)(y.Z.LineBody,{children:p.list.map(function(k){return(0,T.jsxs)("div",{className:E()(h()({},"".concat(S,"-web-search-item"),!0)),onClick:function(){window.open(k.link,"_blank")},children:[(0,T.jsx)("img",{className:"".concat(S,"-web-search-item-icon"),src:k.icon,alt:k.title}),(0,T.jsx)("div",{className:"".concat(S,"-web-search-item-title"),children:k.title}),k.subTitle&&(0,T.jsx)("div",{className:"".concat(S,"-web-search-item-subTitle"),children:k.subTitle})]},k.title)})})}})}},56809:function(sn,ne,e){"use strict";e.d(ne,{B4:function(){return h.Z},BI:function(){return ae.Z},Sn:function(){return b.Z},fz:function(){return y.Z},x4:function(){return R.Z}});var ae=e(79323),h=e(6874),R=e(85786),y=e(69610),b=e(85762)},83962:function(sn,ne,e){"use strict";e.d(ne,{HJ:function(){return T},NR:function(){return L},xy:function(){return E}});var ae=e(97857),h=e.n(ae),R=e(67294),y=e(24963),b=e(85893),L=(0,R.createContext)(void 0),E=function(p){return(0,b.jsx)(L.Provider,{value:p.cardConfig,children:p.children})},T=function(){var p=R.useContext(L);return R.useMemo(function(){return h()(h()({},y),p)},[p])}},92049:function(sn,ne,e){"use strict";e.d(ne,{R:function(){return y},bN:function(){return b}});var ae=e(67294),h=e(85893),R=(0,ae.createContext)(void 0),y=function(E){return(0,h.jsx)(R.Provider,{value:E,children:E.children})},b=function(){var E=ae.useContext(R);return E||{}}},56044:function(sn,ne,e){"use strict";e.d(ne,{wv:function(){return E}});var ae=e(21766),h=e(67294),R=e(83962),y=e(92049),b=e(85893),L=function(N){var p=N.children,x=N.cardConfig,P=N.markdown;return(0,b.jsx)(y.R,{markdown:P,children:(0,b.jsx)(R.xy,{cardConfig:x,children:p})})};function E(){var T=h.useContext(ae.ZP.ConfigContext);return T}ne.ZP=L},44294:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return S},a:function(){return p}});var ae=e(97857),h=e.n(ae),R=e(24772),y=e(83622),b=e(93967),L=e.n(b),E=e(29372),T=e(67294),N=e(85893),p=T.createContext({}),x=function(){return{height:0}},P=function(n){return{height:n.scrollHeight}};function S(g){var n=g.title,d=g.onOpenChange,k=g.open,i=g.children,t=g.className,O=g.style,l=g.classNames,M=l===void 0?{}:l,ce=g.styles,ie=ce===void 0?{}:ce,f=g.closable,me=g.forceRender,K=T.useContext(p),V=K.prefixCls,re="".concat(V,"-header");return(0,N.jsx)(E.ZP,{motionEnter:!0,motionLeave:!0,motionName:"".concat(re,"-motion"),leavedClassName:"".concat(re,"-motion-hidden"),onEnterStart:x,onEnterActive:P,onLeaveStart:P,onLeaveActive:x,visible:k,forceRender:me,children:function(Re){var C=Re.className,ke=Re.style;return(0,N.jsxs)("div",{className:L()(re,C,t),style:h()(h()({},ke),O),children:[(f!==!1||n)&&(0,N.jsxs)("div",{className:L()("".concat(re,"-header"),M.header),style:h()({},ie.header),children:[(0,N.jsx)("div",{className:"".concat(re,"-title"),children:n}),f!==!1&&(0,N.jsx)("div",{className:"".concat(re,"-close"),children:(0,N.jsx)(y.ZP,{type:"text",icon:(0,N.jsx)(R.Z,{}),size:"small",onClick:function(){d==null||d(!k)}})})]}),i&&(0,N.jsx)("div",{className:L()("".concat(re,"-content"),M.content),style:h()({},ie.content),children:i})]})}})}},66672:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return Ce}});var ae=e(19632),h=e.n(ae),R=e(97857),y=e.n(R),b=e(9783),L=e.n(b),E=e(5574),T=e.n(E),N=e(13769),p=e.n(N),x=e(48045),P=e(86250),S=e(93967),g=e.n(S),n=e(56790),d=e(30339),k=e(94787),i=e(67294),t=e(11154),O=e(83204);function l(r,m){return(0,i.useImperativeHandle)(r,function(){var j=m(),W=j.nativeElement;return new Proxy(W,{get:function(z,H){return j[H]?j[H]:Reflect.get(z,H)}})})}var M=e(56044),ce=e(44294),ie=e(64057),f=e(85893),me=["className","action","onClick"],K=i.createContext(null);function V(r){var m=r.className,j=r.action,W=r.onClick,Y=p()(r,me),z=i.useContext(K),H=z.prefixCls,ee=z.disabled,fe=z[j],X=ee||Y.disabled||z["".concat(j,"Disabled")]||!1;return(0,f.jsx)(ie.Z,y()(y()({bordered:!1},Y),{},{disabled:X,onClick:function(Ee){X||(fe&&fe(),W&&W(Ee))},className:g()(H,m,L()({},"".concat(H,"-disabled"),X))}))}var re=i.forwardRef(V),de=e(69291);function Re(r,m){return(0,f.jsx)(re,y()(y()({icon:(0,f.jsx)(de.Z,{})},r),{},{action:"onClear",ref:m}))}var C=i.forwardRef(Re),ke=(0,i.memo)(function(r){var m=r.className;return(0,f.jsxs)("svg",{color:"currentColor",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:m,children:[(0,f.jsx)("title",{children:"Stop Loading"}),(0,f.jsx)("rect",{fill:"currentColor",height:"250",rx:"24",ry:"24",width:"250",x:"375",y:"375"})]})}),Ne=ke,je=e(67055),xe=["className","loading"];function w(r,m){var j=i.useContext(K),W=j.prefixCls,Y=r.className,z=r.loading,H=p()(r,xe),ee=(0,f.jsx)(re,y()(y()({icon:(0,f.jsx)(Ne,{className:"".concat(W,"-loading-icon")}),type:"primary",variant:"text"},H),{},{className:g()(Y,"".concat(W,"-loading-button")),action:"onCancel",ref:m}));return typeof r.loading=="string"?(0,f.jsx)(je.Z,{title:r.loading,children:ee}):ee}var te=i.forwardRef(w),Le=e(43103);function Be(r,m){return(0,f.jsx)(re,y()(y()({icon:(0,f.jsx)(Le.Z,{}),type:"primary"},r),{},{action:"onSend",ref:m}))}var ze=i.forwardRef(Be),He=e(36763),Me=e(21474),un=1e3,dn=4,ln=140,Xe=ln/2,Fe=250,In=500,U=.8;function ye(r){var m=r.className;return(0,f.jsxs)("svg",{color:"currentColor",viewBox:"0 0 ".concat(un," ").concat(un),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:m,children:[(0,f.jsx)("title",{children:"Speech Recording"}),Array.from({length:dn}).map(function(j,W){var Y=(un-ln*dn)/(dn-1),z=W*(Y+ln),H=un/2-Fe/2,ee=un/2-In/2;return(0,f.jsxs)("rect",{fill:"currentColor",rx:Xe,ry:Xe,height:Fe,width:ln,x:z,y:H,children:[(0,f.jsx)("animate",{attributeName:"height",values:"".concat(Fe,"; ").concat(In,"; ").concat(Fe),keyTimes:"0; 0.5; 1",dur:"".concat(U,"s"),begin:"".concat(U/dn*W,"s"),repeatCount:"indefinite"}),(0,f.jsx)("animate",{attributeName:"y",values:"".concat(H,"; ").concat(ee,"; ").concat(H),keyTimes:"0; 0.5; 1",dur:"".concat(U,"s"),begin:"".concat(U/dn*W,"s"),repeatCount:"indefinite"})]},W)})]})}function De(r,m){var j=i.useContext(K),W=j.speechRecording,Y=j.onSpeechDisabled,z=j.prefixCls,H=null;return W?H=(0,f.jsx)(ye,{className:"".concat(z,"-recording-icon")}):Y?H=(0,f.jsx)(He.Z,{}):H=(0,f.jsx)(Me.Z,{}),(0,f.jsx)(re,y()(y()({icon:H,variant:"text"},r),{},{action:"onSpeech",ref:m}))}var tn=i.forwardRef(De),fn=e(68400),Qe=e.n(fn),Ve=e(9053),cn,rn=(0,Ve.vJ)(cn||(cn=Qe()([`
.`,`-sender {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 12px 24px -16px rgba(54, 54, 73, 0.04),
    0px 12px 40px 0px rgba(51, 51, 71, 0.08),
    0px 0px 1px 0px rgba(44, 44, 54, 0.02);
  background-color: `,`;
  border-radius: `,`px;
  border-color: `,`;
  border-width: 0;
  border-style: solid;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    transition: border-color `,`;
    border-radius: inherit;
    border-style: inherit;
    border-color: inherit;
    border-width: `,`px;
  }

  &:focus-within {
    box-shadow: 0px 12px 24px -16px rgba(54, 54, 73, 0.04),
      0px 12px 40px 0px rgba(51, 51, 71, 0.08),
      0px 0px 1px 0px rgba(44, 44, 54, 0.02);
    border-color: `,`;

    &:after {
      border-width: `,`px;
    }
  }

  &-disabled {
    .`,`-sender-content,
    .`,`-sender-header {
      background-color: `,`;
    }
  }

  &-blur {
    .`,`-sender-input {
      height: 22px !important;
      min-height: 22px !important;
    }
  }

  &.`,`-sender-rtl {
    direction: rtl;
  }

  &-content {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    overflow: hidden;
  }

  &-content-bottom {
    margin-top: 4px;
    display: flex;
  }

  &-prefix {
    width: 0;
    flex: 1;
    overflow: auto;
  }

  &-input {
    margin: 4px 0;
    padding: 0 8px;
    border-radius: 0;
    align-self: center;
    font-size: 14px;
    line-height: 22px;
  }

  &-actions-list {
    flex: none;
    display: flex;
    margin: 0 0 0 auto;

    &-presets {
      gap: `,`px;
    }

    &-length {
      font-size: 12px;
      line-height: 1;
      display: flex;
      align-items: center;
      padding: 0 12px;
      color: `,`;
    }
  }

  &-recording {
    height: 30px;
    padding: 0 8px;
    &-icon {
      display: block;
      width: 100%;
      height: 30px;
    }
  }

  &-actions-btn {
    &-disabled {
      background: `,`;
    }

    &-loading-button {
      padding: 0;
      border: 0;
    }

    &-loading-icon {
      height: `,`px;
      width: `,`px;
      vertical-align: top;
    }

    &-recording-icon {
      height: 1.2em;
      width: 1.2em;
      vertical-align: top;
    }

    
  }
}

.`,`-sender {
  &-header {
    &-motion {
      transition: height .3s, border .3s;
      overflow: hidden;
      &-enter-start,
      &-leave-active {
        border-bottom-color: transparent;
      }

      &-hidden {
        display: none;
      }
    }
  }
}
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.colorBgBase},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.motionDurationSlow},function(r){return r.theme.lineWidth},function(r){return r.theme.colorPrimaryHover},function(r){return r.theme.lineWidth},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorBgContainerDisabled},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.paddingXS},function(r){return r.theme.colorTextTertiary},function(r){return"var(--".concat(r.theme.prefixCls,"-color-fill-disable)")},function(r){return r.theme.controlHeight},function(r){return r.theme.controlHeight},function(r){return r.theme.prefixCls}),vn=rn,an=e(52677),mn=e.n(an),Ye;!Ye&&typeof window!="undefined"&&(Ye=window.SpeechRecognition||window.webkitSpeechRecognition);function _n(r,m){var j=(0,n.zX)(r),W=i.useMemo(function(){return mn()(m)==="object"?[m.recording,m.onRecordingChange,typeof m.recording=="boolean"]:[void 0,void 0,!1]},[m]),Y=T()(W,3),z=Y[0],H=Y[1],ee=Y[2],fe=i.useState(null),X=T()(fe,2),le=X[0],Ee=X[1];i.useEffect(function(){if(typeof navigator!="undefined"&&"permissions"in navigator){var Ge=null;return navigator.permissions.query({name:"microphone"}).then(function(xn){Ee(xn.state),xn.onchange=function(){Ee(this.state)},Ge=xn}),function(){Ge&&(Ge.onchange=null)}}},[]);var Ue=Ye&&le!=="denied",$e=i.useRef(null),Je=(0,n.C8)(!1,{value:z}),on=T()(Je,2),Pe=on[0],ue=on[1],Q=i.useRef(!1),On=function(){if(Ue&&!$e.current){var xn=new Ye;xn.onstart=function(){ue(!0)},xn.onend=function(){ue(!1)},xn.onresult=function(en){if(!Q.current){var bn,Ie=(bn=en.results)===null||bn===void 0||(bn=bn[0])===null||bn===void 0||(bn=bn[0])===null||bn===void 0?void 0:bn.transcript;j(Ie)}Q.current=!1},$e.current=xn}},Cn=(0,n.zX)(function(Ge){Ge&&!Pe||(Q.current=Ge,ee?H==null||H(!Pe):(On(),$e.current&&(Pe?($e.current.stop(),H==null||H(!1)):($e.current.start(),H==null||H(!0)))))});return[Ue,Cn,Pe]}var Pn=e(89102),Mn,hn=(0,Ve.vJ)(Mn||(Mn=Qe()([`
.`,`-sender-mode-select {
  position: relative;
  height: 40px;

  &-options {
    position: absolute;
    top: 4px;
    left: 0;
    right: 0;
    display: flex;
    gap: 8px;
    transition: all 0.3s;
  }

  &-option {
    height: 28px;
    display: flex;
    align-items: center;
    fonts: 14px;
    padding: 0 8px;
    border-radius: `,`px;
    gap: 4px;
    border: 1px solid `,`;
    cursor: pointer;
    color: `,`;
    transition: all 0.3s;

    &:hover {
      border-color: `,`;
      color: `,`;
    }
  }

  &-display {
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
    height: 40px;
    border: 1px solid `,`;
    border-radius: `,"px ",`px 0 0;
    background: `,`;
    transition: all 0.3s;

    &-flex {
      display: flex;
      justify-content: space-between; 
      align-items: center;
      height: 32px;
      padding: 0 12px;
    }

    &-label {
      width: 0;
      flex: 1;
      display: flex;
      align-items: center;
      gap: 4px;
      fontsize: 14px;
      color: `,`;
    }

    &-desc {
      display: flex;
      align-items: center;
      margin: 0 12px 0 auto;
    }
  }

  &-hide {
    top: 45px;
  }
}

`])),function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.colorTextSecondary},function(r){return r.theme.colorPrimary},function(r){return r.theme.colorPrimary},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorFillTertiary},function(r){return r.theme.colorTextSecondary});function a(r){var m=(0,M.wv)(),j=m.getPrefixCls,W=j("sender-mode-select"),Y=r.value,z=r.onChange,H=(0,i.useMemo)(function(){var fe=r.options.find(function(X){return X.value===Y})||{};return fe},[r.value]),ee=(0,f.jsx)(Pn.Z,{onClick:function(){return z(void 0)},style:{cursor:"pointer",fontSize:20}});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(hn,{}),(0,f.jsxs)("div",{className:W,style:r.style,children:[(0,f.jsx)("div",{className:"".concat(W,"-options ").concat(Y?"".concat(W,"-hide"):""),children:r.options.map(function(fe){var X=(0,f.jsx)(Ke,y()({onClick:function(){return z(fe.value)},className:"".concat(W,"-option")},fe),fe.value);return X})}),(0,f.jsx)("div",{className:"".concat(W,"-display ").concat(Y?"":"".concat(W,"-hide")),children:(0,f.jsxs)("div",{className:"".concat(W,"-display-flex"),children:[(0,f.jsx)(Ke,y()(y()({},H),{},{label:(H==null?void 0:H.selectedLabel)||(H==null?void 0:H.label),className:"".concat(W,"-display-label")})),r.desc&&(0,f.jsx)("div",{className:"".concat(W,"-display-desc"),children:r.desc}),r.closeTip?(0,f.jsx)(je.Z,{title:r.closeTip,children:ee}):ee]})})]})]})}function Ke(r){var m=(0,f.jsxs)("div",{className:r.className,onClick:r.onClick,children:[r.icon,r.label]});return r.tooltip?(0,f.jsx)(je.Z,{title:r.tooltip,placement:"topLeft",children:m}):m}var qe=e(85441),pn=e(32485),c,F=(0,Ve.vJ)(c||(c=Qe()([`
.`,`-sender-before-ui-container {
  position: relative;
  height: 40px;

  &-content {
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
    height: 40px;
    border: 1px solid `,`;
    border-radius: `,"px ",`px 0 0;
    background: `,`;
    transition: all 0.3s;

    &-children {
      display: flex;
      justify-content: space-between; 
      align-items: center;
      height: 32px;
      padding: 0 12px;
    }
  }
}
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorFillTertiary});function A(r){var m=r.leftChildren,j=r.rightChildren,W=r.children,Y=(0,M.wv)().getPrefixCls("sender-before-ui-container"),z=(0,i.useMemo)(function(){return m?(0,f.jsx)("div",{className:"".concat(Y,"-left"),children:m}):null},[m]),H=(0,i.useMemo)(function(){return j?(0,f.jsx)("div",{className:"".concat(Y,"-right"),children:j}):null},[j]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(F,{}),(0,f.jsx)("div",{className:Y,children:(0,f.jsx)("div",{className:"".concat(Y,"-content"),children:(0,f.jsx)("div",{className:"".concat(Y,"-content-children"),children:W||(0,f.jsxs)(f.Fragment,{children:[z,H]})})})})]})}var Z=["styles","classNames","className","rootClassName","style","defaultValue","value","readOnly","enableFocusExpand","sendDisabled","submitType","onSubmit","loading","onCancel","onChange","onFocus","onBlur","actions","onKeyPress","onKeyDown","disabled","header","onPaste","allowSpeech","onPasteFile","components","initialRows","scalable"];function D(r,m,j){return(0,k.Z)(r,m)||j}var $=i.forwardRef(function(r,m){var j=r,W=j.styles,Y=W===void 0?{}:W,z=j.classNames,H=z===void 0?{}:z,ee=j.className,fe=j.rootClassName,X=j.style,le=j.defaultValue,Ee=j.value,Ue=j.readOnly,$e=j.enableFocusExpand,Je=$e===void 0?!1:$e,on=j.sendDisabled,Pe=on===void 0?!1:on,ue=j.submitType,Q=ue===void 0?"enter":ue,On=j.onSubmit,Cn=j.loading,Ge=j.onCancel,xn=j.onChange,en=j.onFocus,bn=j.onBlur,Ie=j.actions,Oe=j.onKeyPress,we=j.onKeyDown,pe=j.disabled,be=j.header,gn=j.onPaste,jn=j.allowSpeech,Fn=j.onPasteFile,Ln=j.components,Bn=j.initialRows,Zn=Bn===void 0?2:Bn,Kn=j.scalable,Xn=p()(j,Z),Dn=Kn,Jn=(0,i.useState)(Dn?!1:void 0),Wn=T()(Jn,2),Rn=Wn[0],zn=Wn[1],Hn=(0,i.useState)(!1),Nn=T()(Hn,2),An=Nn[0],wn=Nn[1],Vn=i.useMemo(function(){return Rn?{maxRows:5,minRows:5}:{maxRows:5,minRows:Zn}},[Dn,Rn]),Yn=(0,M.wv)(),dt=Yn.direction,ft=Yn.getPrefixCls,$n=ft("sender"),qn=i.useRef(null),tt=i.useRef(null);l(m,function(){var I,J;return{nativeElement:qn.current,focus:(I=tt.current)===null||I===void 0?void 0:I.focus,blur:(J=tt.current)===null||J===void 0?void 0:J.blur}}),(0,t.Z)(qn,{onFocus:function(J){wn(!0),en==null||en()},onBlur:function(){qn.current&&!qn.current.contains(document.activeElement)&&(wn(!1),bn==null||bn())}}),(0,O.Z)("click",function(I){wn(!0),en==null||en()},{target:qn});var rt="".concat($n,"-input"),xt=g()($n,ee,fe,L()(L()(L()(L()({},"".concat($n,"-rtl"),dt==="rtl"),"".concat($n,"-disabled"),pe),"".concat($n,"-focus"),An&&Je),"".concat($n,"-blur"),!An&&Je)),Ct="".concat($n,"-actions-btn"),at="".concat($n,"-actions-list"),vt=(0,n.C8)(le||"",{value:Ee}),mt=T()(vt,2),et=mt[0],ht=mt[1],ot=function(J,G){ht(J),xn&&xn(J,G)},yt=_n(function(I){ot("".concat(et," ").concat(I))},jn),st=T()(yt,3),bt=st[0],gt=st[1],jt=st[2],Et=D(Ln,["input"],x.Z.TextArea),St=(0,d.Z)(Xn,{attr:!0,aria:!0,data:!0}),Pt=y()(y()({},St),{},{ref:tt}),it=function(){!B.onSendDisabled&&On&&!Cn&&On(et)},At=function(){ot("")},lt=i.useRef(!1),Tt=function(){lt.current=!0},_t=function(){lt.current=!1},s=function(J){var G=J.key==="Enter"&&!lt.current;switch(Q){case"enter":G&&!J.shiftKey&&(J.preventDefault(),it());break;case"shiftEnter":G&&J.shiftKey&&(J.preventDefault(),it());break}Oe&&Oe(J)},v=function(J){var G;if(!Fn){gn==null||gn(J);return}var q=Array.from(((G=J.clipboardData)===null||G===void 0?void 0:G.files)||[]);if(q.length===0){var se,Se=Array.from(((se=J.clipboardData)===null||se===void 0?void 0:se.items)||[]);q=Se.filter(function(Ae){return Ae.kind==="file"}).map(function(Ae){return Ae.getAsFile()}).filter(function(Ae){return Ae!==null})}q.length>0?(q.forEach(function(Ae){return Fn(Ae)}),J.preventDefault()):gn==null||gn(J)},o=function(J){var G,q;J.target!==((G=qn.current)===null||G===void 0?void 0:G.querySelector(".".concat(rt)))&&J.preventDefault(),(q=tt.current)===null||q===void 0||q.focus()},u=i.useMemo(function(){var I=Array.isArray(r.prefix)?h()(r.prefix):[r.prefix];return Dn&&I.push((0,f.jsx)(ie.Z,{onClick:function(){return zn(!Rn)},bordered:!1,icon:Rn?(0,f.jsx)(qe.Z,{}):(0,f.jsx)(pn.Z,{})},"zoom")),I},[r.prefix,Dn,Rn,jn]),_=(0,f.jsx)(P.Z,{className:"".concat(at,"-presets"),children:Cn?(0,f.jsx)(te,{loading:Cn,disabled:!!pe}):(0,f.jsx)(ze,{disabled:!!pe})});typeof Ie=="function"?_=Ie(_,{components:{SendButton:ze,ClearButton:C,LoadingButton:te}}):Ie&&(_=Ie);var B={prefixCls:Ct,onSend:it,onSendDisabled:!et||!et.trim()||Pe,onClear:At,onClearDisabled:!et,onCancel:Ge,onCancelDisabled:!Cn,onSpeech:function(){return gt(!1)},onSpeechDisabled:!bt,speechRecording:jt,disabled:!!pe};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(vn,{}),(0,f.jsxs)("div",{ref:qn,className:xt,style:X,children:[be&&(0,f.jsx)(ce.a.Provider,{value:{prefixCls:$n,focus:An,enableFocusExpand:Je},children:be}),(0,f.jsxs)("div",{className:"".concat($n,"-content"),children:[(0,f.jsx)(Et,y()(y()({},Pt),{},{disabled:!!pe,style:Y.input,className:g()(rt,H.input),autoSize:Vn,value:et.slice(0,r.maxLength||Number.MAX_SAFE_INTEGER),onChange:function(J){ot(J.target.value,J),gt(!0)},onPressEnter:s,onCompositionStart:Tt,onCompositionEnd:_t,onKeyDown:we,onPaste:v,variant:"borderless",readOnly:Ue})),(0,f.jsxs)("div",{className:"".concat($n,"-content-bottom"),children:[u.length>0&&(0,f.jsx)("div",{className:g()("".concat($n,"-prefix"),H.prefix),style:Y.prefix,children:(0,f.jsxs)(P.Z,{gap:8,children:[jn&&(0,f.jsx)(K.Provider,{value:B,children:(0,f.jsx)(tn,{})}),u]})}),(0,f.jsxs)("div",{className:g()(at,H.actions),style:Y.actions,children:[r.maxLength?(0,f.jsxs)("div",{className:"".concat(at,"-length"),children:[et.length,"/",r.maxLength]}):null,(0,f.jsx)(K.Provider,{value:B,children:_})]})]})]})]})]})}),oe=$;oe.Header=ce.Z,oe.ModeSelect=a,oe.BeforeUIContainer=A;var Ce=oe},70770:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return k}});var ae=e(89034),h=e(36674),R=e(9343),y=e(48095),b=e(97634),L=e(56044),E=e(68400),T=e.n(E),N=e(9053),p,x=(0,N.vJ)(p||(p=T()([`
.`,`-status-card {
  width: 100%;
  border-radius: `,`px;
  border: 1px solid `,`;
  overflow: hidden;
  &-success {
    background-color: `,`;

    .`,`-status-card-header-icon {
      color: `,`;
    }
  }
  &-error {
    background-color: `,`;

    .`,`-status-card-header-icon {
      color: `,`;
    }
  }
  &-warning {
    background-color: `,`;

    .`,`-status-card-header-icon {
      color: `,`;
    }
  }
  &-info {
    background-color: `,`;

    .`,`-status-card-header-icon {
      color: `,`;
    }
  }

  &-header-icon {
    font-size: 16px;
  }


  &-header-title {
    font-size: 13px;
    color: `,`;
  }

  &-header {
    padding: 0 12px;
  }

  &-header-top {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 32px;
  }


  &-header-description {
    margin-top: -6px;
    margin-bottom: 8px;
    margin-left: 24px;
    font-size: 12px;
    color: `,`;
  }





  &-HITL {
    padding: 16px;
    border-top: 1px solid `,`;
    background-color: `,`;
    border-radius: `,"px ",`px 0 0;

    &-desc {
      color: `,`;
      margin-bottom: 12px;
    }

    &-button {
      display: flex;
      justify-content: flex-end;
    }
  
  }

  &-statistic {
    display: flex;
    padding: 16px 26px;
    border-top: 1px solid `,`;
    background-color: `,`;
    border-radius: `,"px ",`px 0 0;

    &-item {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 8px;

      &-title {
        font-size: 12px;
        color: `,`;
      }

      &-value {
        font-size: 18px;
        line-height: 32px;
        color: `,`;
      }
    }
  }

}
`])),function(i){return i.theme.prefixCls},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorSuccessBg},function(i){return i.theme.prefixCls},function(i){return i.theme.colorSuccess},function(i){return i.theme.colorErrorBg},function(i){return i.theme.prefixCls},function(i){return i.theme.colorError},function(i){return i.theme.colorWarningBg},function(i){return i.theme.prefixCls},function(i){return i.theme.colorWarning},function(i){return i.theme.colorFillTertiary},function(i){return i.theme.prefixCls},function(i){return i.theme.colorInfo},function(i){return i.theme.colorText},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorBgBase},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorBgBase},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorText}),P=e(93967),S=e.n(P),g=e(21403),n=e(85893);function d(i){var t=(0,L.wv)(),O=t.getPrefixCls,l=O("status-card"),M=i.icon||{success:(0,n.jsx)(ae.Z,{}),error:(0,n.jsx)(h.Z,{}),warning:(0,n.jsx)(R.Z,{}),info:(0,n.jsx)(y.Z,{})}[i.status];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{}),(0,n.jsxs)("div",{className:S()(l,"".concat(l,"-").concat(i.status)),children:[(0,n.jsxs)("div",{className:"".concat(l,"-header"),children:[(0,n.jsxs)("div",{className:"".concat(l,"-header-top"),children:[(0,n.jsx)("div",{className:"".concat(l,"-header-icon"),children:M}),(0,n.jsx)("div",{className:"".concat(l,"-header-title"),children:i.title})]}),i.description&&(0,n.jsx)("div",{className:"".concat(l,"-header-description"),children:i.description})]}),i.children&&(0,n.jsx)("div",{className:"".concat(l,"-body"),children:i.children})]})]})}d.HITL=function(i){var t=i.title,O=t===void 0?"\u9700\u8981\u7528\u6237\u4EBA\u5DE5\u5E72\u9884":t,l=i.description,M=i.waitButtonText,ce=M===void 0?"\u6211\u5DF2\u5B8C\u6210\uFF0C\u7EE7\u7EED\u4EFB\u52A1":M,ie=i.doneButtonText,f=ie===void 0?"\u7528\u6237\u5DF2\u786E\u8BA4":ie,me=(0,L.wv)(),K=me.getPrefixCls,V=K("status-card"),re=i.actions!==void 0?i.actions:i.done?(0,n.jsx)(g.Z,{onClick:i.onDone,type:"primary",disabled:!0,icon:(0,n.jsx)(b.Z,{}),children:f}):(0,n.jsx)(g.Z,{onClick:i.onDone,type:"primary",children:ce});return(0,n.jsx)(d,{status:i.done?"success":"info",title:O,children:l||re?(0,n.jsxs)("div",{className:"".concat(V,"-HITL"),children:[l&&(0,n.jsx)("div",{className:"".concat(V,"-HITL-desc"),children:l}),(0,n.jsx)("div",{className:"".concat(V,"-HITL-button"),children:re})]}):null})},d.Statistic=function(i){var t=(0,L.wv)(),O=t.getPrefixCls,l=O("status-card");return(0,n.jsx)("div",{className:"".concat(l,"-statistic"),children:i.values.map(function(M){return(0,n.jsxs)("div",{className:"".concat(l,"-statistic-item"),children:[(0,n.jsx)("div",{className:"".concat(l,"-statistic-item-title"),children:M.title}),(0,n.jsx)("div",{className:"".concat(l,"-statistic-item-value"),children:M.value})]})})})};var k=d},7354:function(sn,ne,e){"use strict";var ae=e(15009),h=e.n(ae),R=e(9783),y=e.n(R),b=e(97857),L=e.n(b),E=e(77262),T=e.n(E),N=e(93938),p=e.n(N),x=`

`,P=`
`,S=":",g=function(t){return(t!=null?t:"").trim()!==""};function n(){var i="";return new TransformStream({transform:function(O,l){i+=O;var M=i.split(x);M.slice(0,-1).forEach(function(ce){g(ce)&&l.enqueue(ce)}),i=M[M.length-1]},flush:function(O){g(i)&&O.enqueue(i)}})}function d(){return new TransformStream({transform:function(t,O){var l=t.split(P),M=l.reduce(function(ce,ie){var f=ie.indexOf(S);if(f===-1)throw new Error('The key-value separator "'.concat(S,'" is not found in the sse line chunk!'));var me=ie.slice(0,f);if(!g(me))return ce;var K=ie.slice(f+1);return L()(L()({},ce),{},y()({},me,K))},{});Object.keys(M).length!==0&&O.enqueue(M)}})}function k(i,t){var O=i.readableStream,l=i.transformStream;if(!(O instanceof ReadableStream))throw new Error("The options.readableStream must be an instance of ReadableStream.");var M=new TextDecoderStream,ce=l?O.pipeThrough(M).pipeThrough(l):O.pipeThrough(M).pipeThrough(n()).pipeThrough(d());return ce[Symbol.asyncIterator]=p()(h()().mark(function ie(){var f,me,K,V;return h()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:f=this.getReader();case 1:return de.next=4,T()(f.read());case 4:if(me=de.sent,K=me.done,V=me.value,!K){de.next=9;break}return de.abrupt("break",15);case 9:if(V){de.next=11;break}return de.abrupt("continue",1);case 11:return de.next=13,t!=null&&t.openaiCompatible?L()(L()({},V),{},{data:V.data.slice(1)}):V;case 13:de.next=1;break;case 15:case"end":return de.stop()}},ie,this)})),ce}ne.Z=k},39536:function(sn,ne,e){"use strict";e.d(ne,{J:function(){return b}});var ae=e(15009),h=e.n(ae),R=e(99289),y=e.n(R);function b(E){return L.apply(this,arguments)}function L(){return L=y()(h()().mark(function E(T){var N;return h()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(!(window.isSecureContext&&navigator.clipboard)){x.next=4;break}return x.next=3,navigator.clipboard.writeText(T);case 3:return x.abrupt("return");case 4:N=document.createElement("textarea"),N.value=T,N.style.cssText="position:fixed;left:-9999px",document.body.appendChild(N),N.select();try{document.execCommand("copy",!0)}finally{document.body.removeChild(N)}case 10:case"end":return x.stop()}},E)})),L.apply(this,arguments)}},32116:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return ae}});function ae(h){return new Promise(function(R){return setTimeout(R,h)})}},66366:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return h}});var ae={i8:"1.1.54"},h=ae.i8},57657:function(sn,ne,e){"use strict";e.r(ne);var ae=e(5574),h=e.n(ae),R=e(9053),y=e(67294),b=e(85893),L=function(){var N=(0,y.useState)({x:0,y:0}),p=h()(N,2),x=p[0],P=p[1],S=(0,y.useState)(!1),g=h()(S,2),n=g[0],d=g[1],k=(0,y.useRef)(null),i=E(),t=i.styles,O=i.cx;(0,y.useEffect)(function(){var K=function(re){if(k.current){var de=k.current.getBoundingClientRect();P({x:re.clientX-de.left,y:re.clientY-de.top})}};return window.addEventListener("mousemove",K),function(){return window.removeEventListener("mousemove",K)}},[]),(0,y.useEffect)(function(){var K=setInterval(function(){d(!0),setTimeout(function(){return d(!1)},150)},5e3);return function(){return clearInterval(K)}},[]);var l=function(){var V=32,re=32,de=x.x-V,Re=x.y-re,C=6,ke=6,Ne=Math.sqrt(de*de+Re*Re),je=50;if(Ne===0)return{x:0,y:0};var xe=Math.min(Ne/je,1),w=de/Ne*C*xe,te=Re/Ne*ke*xe;return{x:Math.max(-C,Math.min(C,w)),y:Math.max(-ke,Math.min(ke,te))}},M=function(V){var re=32,de=x.x-re,Re=400;if(Math.abs(de)<Re)return 1;var C=Math.abs(de)-Re,ke=32-Re,Ne=Math.min(C/ke,1);return de>Re?V?1-Ne*.5:1:de<-Re?V?1:1-Ne*.5:1},ce=l(),ie=l(),f=M(!0),me=M(!1);return(0,b.jsxs)("div",{ref:k,className:t.container,children:[(0,b.jsx)("div",{className:O(t.eye,t.leftEye,n?t.blinkingEye:""),style:{transform:"translate(".concat(ce.x,"px, ").concat(ce.y,"px) ").concat(n?"scaleY(0.1)":"scaleY(".concat(f,")"))}}),(0,b.jsx)("div",{className:O(t.eye,t.rightEye,n?t.blinkingEye:""),style:{transform:"translate(".concat(ie.x,"px, ").concat(ie.y,"px) ").concat(n?"scaleY(0.1)":"scaleY(".concat(me,")"))}})]})};ne.default=L;var E=(0,R.kc)(function(T){var N=T.css,p=T.token;return{container:{width:64,height:64,backgroundColor:"black",borderRadius:12,position:"relative",cursor:"pointer",overflow:"hidden",boxShadow:"15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)"},eye:{width:6,height:12,backgroundColor:"white",borderRadius:99,position:"absolute",top:16,transition:"transform 0.1s ease-out"},leftEye:{left:22},rightEye:{left:36},blinkingEye:{transition:"transform 0.05s ease-out"}}})},31295:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return N}});var ae=e(68400),h=e.n(ae),R=e(67294),y=e(9053),b=e(56044),L=e(85893),E,T=(0,y.vJ)(E||(E=h()([`
.`,`-welcome {
  display: flex;
  align-items: center;

  &-logo {
    display: block;
    margin-right: 20px;
  }

  &-title {
    font-size: 24px;
    line-height: 36px;
    font-weight: bold;
    color: `,`;
  }

  &-desc {
    margin-top: 4px;
    font-size: 24px;
    line-height: 36px;
    color: `,`;
  }
}
`])),function(p){return p.theme.prefixCls},function(p){return p.theme.colorText},function(p){return p.theme.colorTextSecondary});function N(p){var x=(0,b.wv)(),P=x.getPrefixCls,S=P("welcome"),g=typeof p.logo=="string"?(0,L.jsx)("img",{className:S+"-logo",src:p.logo}):p.logo;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(T,{}),(0,L.jsxs)("div",{className:S,style:p.style,children:[g,(0,L.jsxs)("div",{children:[(0,L.jsx)("div",{className:S+"-title",children:p.title}),(0,L.jsx)("div",{className:S+"-desc",children:p.desc})]})]})]})}},64437:function(sn,ne,e){"use strict";e.d(ne,{Z:function(){return S}});var ae=e(97857),h=e.n(ae),R=e(67294),y=e(68997),b=e(56044),L=e(38850),E=e(68400),T=e.n(E),N=e(9053),p,x=(0,N.vJ)(p||(p=T()([`
.`,`-welcome-prompts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;

  &-greeting {
   color: `,`;
   font-size: 16px;
   line-height: 26px;
   font-weight: 500;
  }

  &-description {
    color: `,`;
    font-size: 12px;
    line-height: 18px;
  }

  &-prompts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    width: 360px;
    margin: 10px auto;
  }

  &-prompt {
    height: 42px;
    display: flex;
    align-items: center;
    background-color: `,`;
    color: `,`;
    font-size: 14px;
    padding: 10px 16px;
    border-radius: 8px;
    cursor: pointer;
    gap: 12px;

    &-icon {
      width: 20px;
      height: 20px;
    }

    &-label {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:hover {
      background-color: `,`;
    }
  }
}
`])),function(n){return n.theme.prefixCls},function(n){var d=n.theme;return d.colorText},function(n){var d=n.theme;return d.colorTextSecondary},function(n){var d=n.theme;return d.colorFillQuaternary},function(n){var d=n.theme;return d.colorText},function(n){var d=n.theme;return d.colorFillTertiary}),P=e(85893);function S(n){var d=n.greeting,k=n.avatar,i=n.description,t=n.prompts,O=n.onClick,l=(0,b.wv)().getPrefixCls("welcome-prompts");return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(x,{}),(0,P.jsxs)("div",{className:l,children:[k&&(typeof k=="string"?(0,P.jsx)(y.Z,{src:k,shape:"square",size:64}):k),d&&(0,P.jsx)("div",{className:"".concat(l,"-greeting"),children:d}),i&&(0,P.jsx)("div",{className:"".concat(l,"-description"),children:i}),(t==null?void 0:t.length)>0&&(0,P.jsx)("div",{className:"".concat(l,"-prompts"),children:t.map(function(M){var ce=typeof M=="string"?{label:M,value:M}:h()(h()({},M),{},{label:M.label||M.value,value:M.value});return(0,P.jsx)(g,{prompt:ce,prefixCls:l,onClick:O},ce.value)})})]})]})}function g(n){var d=n.prefixCls;return(0,P.jsxs)("div",{className:"".concat(d,"-prompt"),onClick:function(){var i;return(i=n.onClick)===null||i===void 0?void 0:i.call(n,n.prompt.value)},children:[(0,P.jsx)("img",{className:"".concat(d,"-prompt-icon"),src:"https://img.alicdn.com/imgextra/i3/O1CN01822qqr1PVyaK7MYtn_!!6000000001847-2-tps-40-40.png",alt:""}),(0,P.jsx)("span",{className:"".concat(d,"-prompt-label"),children:n.prompt.label}),(0,P.jsx)(L.Z,{})]})}},43601:function(sn,ne,e){"use strict";e.r(ne),e.d(ne,{AIGC:function(){return je.Z},Accordion:function(){return t.Z},AgentScopeRuntimeWebUI:function(){return n.Z},AssetsPreview:function(){return xe.Z},Attachments:function(){return l.Z},Bubble:function(){return M.Z},ChatAnywhere:function(){return T.ZP},ChatInput:function(){return de.Z},ConfigProvider:function(){return ae.ZP},Conversations:function(){return ce.Z},CustomCardsContext:function(){return R.NR},CustomCardsProvider:function(){return R.xy},DeepThink:function(){return O.Z},DeepThinking:function(){return O.Z},DefaultCards:function(){return g},DeviceAction:function(){return ie.Z},Disclaimer:function(){return f.Z},GenerativeUISandbox:function(){return w.Z},HistoryPanel:function(){return ce.Z},ImageGenerator:function(){return me.Z},Markdown:function(){return Ne.Z},Mermaid:function(){return K.Z},OperateCard:function(){return V.Z},Process:function(){return t.Z},Rag:function(){return re.Sn},Sender:function(){return de.Z},SparkChatProvider:function(){return y.ZP},StatusCard:function(){return Re.Z},Stream:function(){return L.Z},Thinking:function(){return re.BI},TodoList:function(){return re.B4},ToolCall:function(){return re.x4},WebSearch:function(){return re.fz},Welcome:function(){return ke.Z},WelcomePrompts:function(){return te.Z},createCard:function(){return E.L},sleep:function(){return C.Z},useChatAnywhere:function(){return N.TQ},useCustomCardsContext:function(){return R.HJ},useGlobalContext:function(){return b.bN},useInput:function(){return p.G},useMessages:function(){return x.y},useProviderContext:function(){return y.wv},useSessionList:function(){return P.x},uuid:function(){return S.Z},version:function(){return h.Z}});var ae=e(55839),h=e(66366),R=e(83962),y=e(56044),b=e(92049),L=e(7354),E=e(50130),T=e(29041),N=e(76289),p=e(37254),x=e(4421),P=e(61316),S=e(88773),g=e(24963),n=e(35825),d=e(22863),k={};for(var i in d)["default","ConfigProvider","version","CustomCardsContext","CustomCardsProvider","SparkChatProvider","useCustomCardsContext","useGlobalContext","useProviderContext","Stream","createCard","ChatAnywhere","useChatAnywhere","useInput","useMessages","useSessionList","uuid","DefaultCards","AgentScopeRuntimeWebUI","Accordion","Process","DeepThink","DeepThinking","Attachments","Bubble","Conversations","HistoryPanel","DeviceAction","Disclaimer","ImageGenerator","Mermaid","OperateCard","ChatInput","Sender","StatusCard","sleep","Welcome","Markdown","AIGC","AssetsPreview","GenerativeUISandbox","WelcomePrompts"].indexOf(i)<0&&(k[i]=function(Le){return d[Le]}.bind(0,i));e.d(ne,k);var t=e(487),O=e(14082),l=e(50993),M=e(52471),ce=e(9368),ie=e(55031),f=e(10325),me=e(2534),K=e(12181),V=e(31382),re=e(56809),de=e(66672),Re=e(70770),C=e(32116),ke=e(31295),Ne=e(66109),je=e(86578),xe=e(34487),w=e(80115),te=e(64437)}}]);
