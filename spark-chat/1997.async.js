(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1997],{86578:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return ie}});var $=e(97857),g=e.n($),T=e(9783),p=e.n(T),P=e(13769),E=e.n(P),j=e(67294),_=e(93967),k=e.n(_),v=e(56044),m=e(66672),M=e(36417),y=e(44294),h=e(12624),t=e(41154),x=e(68400),D=e.n(x),s=e(9053),n,A=(0,s.vJ)(n||(n=D()([`
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
  }
}
`])),function(te){return te.theme.prefixCls},function(te){return te.theme.prefixCls},function(te){return te.theme.prefixCls},function(te){return te.theme.prefixCls},function(te){return te.theme.borderRadius},function(te){return te.theme.colorBorderSecondary},function(te){return te.theme.colorBgBase},function(te){return te.theme.colorText}),u=e(85893),S=["className","icon"],q=t.Z.Dragger,V=function(Le){var G=Le.className,Te=Le.icon,Be=E()(Le,S),Qe=(0,v.wv)(),Ge=Qe.getPrefixCls,I=Ge("media-upload");return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(A,{}),(0,u.jsx)(q,g()(g()({showUploadList:!1,className:k()(I,G)},Be),{},{children:(0,u.jsxs)("div",{className:k()("".concat(I,"-thumbnail")),children:[(0,u.jsx)("div",{className:k()("".concat(I,"-thumbnail-gradient"))}),Te||(0,u.jsx)(h.Z,{className:k()("".concat(I,"-thumbnail-icon"))})]})}))]})},d=V,le,K=(0,s.vJ)(le||(le=D()([`
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
`])),function(te){return te.theme.prefixCls},function(te){return te.theme.colorText},function(te){return te.theme.colorTextTertiary}),W=function(Le){var G=Le.className,Te=Le.title,Be=Le.description,Qe=(0,v.wv)(),Ge=Qe.getPrefixCls,I=Ge("media-info"),de=!!Te||!!Be;return de?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(K,{}),(0,u.jsxs)("div",{className:k()(I,G),children:[Te&&(0,u.jsx)("div",{className:k()("".concat(I,"-title")),children:Te}),Be&&(0,u.jsx)("div",{className:k()("".concat(I,"-description")),children:Be})]})]}):null},J=W,se,Pe=(0,s.vJ)(se||(se=D()([`
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
`])),function(te){return te.theme.prefixCls},function(te){return te.theme.colorBorderSecondary},function(te){return te.theme.prefixCls},function(te){return te.theme.prefixCls},function(te){return te.theme.prefixCls},function(te){return te.theme.prefixCls}),C=["title","description","maxCount"],Me=function(Le){var G=Le.className,Te=Le.onUpload,Be=Te===void 0?[]:Te,Qe=Le.attachedFiles,Ge=Qe===void 0?[[]]:Qe,I=Le.onFileChange,de=(0,v.wv)(),De=de.getPrefixCls,O=(0,j.useContext)(y.a),H=O.focus,Y=O.enableFocusExpand,ke=De("aigc-sender-header"),Ne=(0,j.useMemo)(function(){return Ge.flat().length>0?!0:Be.length<=0?!1:!!(H||!Y)},[Be,Ge,Y,H]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(Pe,{}),(0,u.jsx)(m.Z.Header,{closable:!1,open:Ne,children:(0,u.jsx)("div",{className:k()(ke,G),tabIndex:0,children:Be==null?void 0:Be.map(function(Re,Se){var nn=Re.title,Ke=Re.description,Ze=Re.maxCount,tn=Ze===void 0?1:Ze,$e=E()(Re,C),Ue=Ge[Se]||[];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d,g()({className:k()(p()({},"".concat(ke,"-upload-hidden"),Ue.length>=tn)),maxCount:tn,fileList:Ue,onChange:function(r){Re.beforeUpload&&r.file.status&&I(Se,r.fileList),Re.beforeUpload||I(Se,r.fileList)},showUploadList:!1},$e),"upload-".concat(Se)),Ue.length>0&&(0,u.jsx)(M.Z,{items:Ue,onChange:function(r){return I(Se,r.fileList)}},"attachments-".concat(Se)),tn===1&&(0,u.jsx)(J,{title:nn,description:Ke},"info-".concat(Se))]})})})})]})},Z=Me,ie={SenderHeader:Z,Info:J,Upload:d}},487:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return Pe}});var $=e(9783),g=e.n($),T=e(97857),p=e.n(T),P=e(5574),E=e.n(P),j=e(67294),_=e(93967),k=e.n(_),v=e(56044),m=e(85893);function M(C){var Me=(0,v.wv)(),Z=Me.getPrefixCls,ie=Z("accordion-content-body");return(0,m.jsxs)("div",{className:ie,children:[C.headerLeft||C.headerRight?(0,m.jsxs)("div",{className:"".concat(ie,"-header"),children:[C.headerLeft,(0,m.jsx)("div",{style:{flex:1}}),C.headerRight]}):null,(0,m.jsx)("div",{className:"".concat(ie,"-body"),children:C.children})]})}var y=e(9361);function h(C){var Me=(0,v.wv)(),Z=Me.theme,ie=Me.getPrefixCls,te=(Z==null?void 0:Z.algorithm)===y.Z.darkAlgorithm,Le=ie("accordion-soft-light-title");return(0,m.jsx)("div",{className:Le,style:te?{}:{color:"rgba(38, 36, 76, 0.88)"},children:C.children})}var t=e(68400),x=e.n(t),D=e(9053),s,n=(0,D.vJ)(s||(s=x()([`
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
`])),function(C){return C.theme.prefixCls},function(C){return C.theme.colorSuccess},function(C){return C.theme.prefixCls},function(C){return C.theme.colorError},function(C){return C.theme.colorTextSecondary},function(C){return C.theme.colorBgBase},function(C){return C.theme.borderRadiusLG},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.colorBorder},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.colorBgBase},function(C){return C.theme.colorText},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.colorFillTertiary},function(C){return C.theme.prefixCls},function(C){return C.theme.colorTextSecondary},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.colorFillTertiary},function(C){return C.theme.colorText},function(C){return C.theme.colorBgBase}),A=e(40443),u=e(89034),S=e(9343),q=e(36674),V=e(9838),d=e(28387),le=e(16592);function K(C){var Me=(0,v.wv)(),Z=Me.getPrefixCls,ie=Z("accordion-group"),te=j.useState(C.defaultOpen),Le=E()(te,2),G=Le[0],Te=Le[1],Be=C.open!==void 0?C.open:G,Qe=C.inline?"close":Be?"open":"close",Ge=(0,j.useMemo)(function(){if(C.icon)return C.icon;if(C.status==="generating")return(0,m.jsx)(A.Z,{className:"".concat(ie,"-icon-loading"),spin:!0});if(C.status==="finished")return(0,m.jsx)(u.Z,{className:"".concat(ie,"-icon-success")});if(C.status==="interrupted")return(0,m.jsx)(S.Z,{});if(C.status==="error")return(0,m.jsx)(q.Z,{className:"".concat(ie,"-icon-error")})},[C.status,C.icon]),I=(0,j.useMemo)(function(){return C.steps?C.steps.map(function(de,De){var O=De===0,H=De===C.steps.length-1;return(0,m.jsx)(K,p()(p()({},de),{},{isFirst:O,isLast:H}),de.id||De)}):C.children},[C.steps,C.children]);return(0,m.jsxs)("div",{className:k()("".concat(ie),"".concat(ie,"-").concat(Qe)),children:[(0,m.jsxs)("div",{className:k()("".concat(ie,"-header"),"".concat(ie,"-header-").concat(Qe)),onClick:function(){return I&&C.open===void 0&&Te(!G)},children:[Ge?(0,m.jsx)("div",{className:k()("".concat(ie,"-header-icon"),g()(g()(g()({},"".concat(ie,"-header-icon-line"),C.iconLine),"".concat(ie,"-header-icon-first"),C.isFirst),"".concat(ie,"-header-icon-last"),C.isLast&&Qe==="close"||C.level)),children:Ge}):null,(0,m.jsx)("div",{children:C.title}),I&&(0,m.jsx)("div",{className:k()("".concat(ie,"-header-arrow")),children:Be?(0,m.jsx)(d.Z,{}):(0,m.jsx)(V.Z,{})}),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{style:{flex:1}}),C.rightChildren]})]}),(0,m.jsx)(J,{prefixCls:ie,stateOpen:Be,status:Qe,inline:C.inline,content:I,bodyStyle:C.bodyStyle,level:C.level})]})}var W={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function J(C){var Me=(0,j.useRef)(null);if(!C.content)return null;var Z=C.prefixCls,ie=C.stateOpen,te=C.inline,Le=C.bodyStyle,G=C.level;return(0,m.jsx)(le.ZP,{nodeRef:Me,in:ie,timeout:300,children:function(Be){return(0,m.jsx)("div",{style:p()(p()(p()({},Le),G?{marginTop:0}:{}),{},{transition:"opacity ".concat(300,"ms ease-in-out")},W[Be]),className:k()("".concat(Z,"-body"),"".concat(Z,"-body-").concat(ie?"open":"close"),g()({},"".concat(Z,"-body-inline"),te)),children:C.content})}})}function se(C){var Me=C.level,Z=Me===void 0?1:Me,ie=C.isFirst,te=ie===void 0?!0:ie,Le=C.isLast,G=Le===void 0?!0:Le;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n,{}),(0,m.jsx)(K,p()(p()({},C),{},{level:Z,isFirst:te,isLast:G}))]})}se.BodyContent=M,se.SoftLightTitle=h;var Pe=se},14082:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return j}});var $=e(487),g=e(56044),T=e(9361),p=e(93967),P=e.n(p),E=e(85893);function j(_){var k=(0,g.wv)(),v=k.theme,m=k.getPrefixCls,M=m("accordion-deep-thinking"),y=(v==null?void 0:v.algorithm)===T.Z.darkAlgorithm,h=(0,E.jsx)("img",{style:{display:"block",width:16,height:16,filter:y?"invert(1)  brightness(100%) saturate(0%)":""},src:"https://img.alicdn.com/imgextra/i2/O1CN01QZgWRv1I4JM0BAZ9O_!!6000000000839-54-tps-56-56.apng"}),t=_.title||"Deep thinking";_.loading&&(t+="...");var x=_.loading?(0,E.jsx)($.Z.SoftLightTitle,{children:t}):t,D=_.maxHeight?{maxHeight:_.maxHeight,overflowY:"auto"}:{},s=_.defaultOpen!==void 0?_.defaultOpen:_.autoCloseOnFinish&&!_.loading?!1:void 0;return(0,E.jsx)($.Z,{title:x,status:_.loading?"generating":"finished",icon:_.loading?h:null,defaultOpen:s,open:_.open,bodyStyle:D,inline:!0,children:(0,E.jsx)("div",{className:P()(M,_.className),children:_.content||"..."})})}},5686:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return Dt}});var $=e(97857),g=e.n($),T=e(9783),p=e.n(T),P=e(56044),E=e(68400),j=e.n(E),_=e(9053),k,v=(0,_.vJ)(k||(k=j()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.colorBgBase},function(a){return a.theme.prefixCls},function(a){return a.theme.colorBgBase},function(a){return a.theme.prefixCls},function(a){return a.theme.colorFillTertiary},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),m=e(93967),M=e.n(m),y=e(17909),h=e(59214),t=e(67294),x=e(81759),D=e(49131),s=e(21766),n=e(85893),A=(0,h.createContext)(void 0);function u(a){try{var i=(0,h.useContextSelector)(A,a);return i}catch(o){return{}}}function S(a){var i=a.children,o=(0,y.Z)(),l=(0,t.useMemo)(function(){var oe=a.options.theme||{};return g()(g()({},a.options),{},{theme:g()(g()({},oe),{},{narrowMode:!o.lg||oe.narrowMode})})},[a.options,o.lg]),b=(0,t.useMemo)(function(){var oe=l.theme.colorPrimary,ne=l.theme.colorBgBase,N=l.theme.colorTextBase,ue=l.theme.darkMode;if(oe||ue){var Ee=(0,x.Z)((0,D.Z)({primaryHex:oe,bgBaseHex:ne,textBaseHex:N,darkMode:ue}));return Ee}},[l.theme.colorPrimary,l.theme.colorBgBase,l.theme.colorTextBase,l.theme.darkMode]),R=(0,n.jsx)(A.Provider,{value:l,children:i});if(b){var w=l.theme.prefix||"agentscope-runtime-webui";return(0,n.jsx)(s.ZP,g()(g()({},b),{},{style:{height:"100%"},prefix:w,prefixCls:w,children:R}))}return R}var q=null,V=e(15009),d=e.n(V),le=e(99289),K=e.n(le),W=e(5574),J=e.n(W),se=e(66672),Pe=e(10325),C=e(79785),Me=(0,h.createContext)({loading:!1,setLoading:function(){},getLoading:function(){return!1},disabled:!1,setDisabled:function(){},getDisabled:function(){return!1}});function Z(a){var i=(0,C.Z)(!1),o=J()(i,3),l=o[0],b=o[1],R=o[2],w=(0,C.Z)(!1),oe=J()(w,3),ne=oe[0],N=oe[1],ue=oe[2];return(0,n.jsx)(Me.Provider,{value:{loading:l,setLoading:b,getLoading:R,disabled:ne,setDisabled:N,getDisabled:ue},children:a.children})}var ie=function(i){return(0,h.useContextSelector)(Me,i)},te=e(13769),Le=e.n(te),G=e(41154),Te=e(64057),Be=e(81644),Qe=e(36417),Ge=["trigger"];function I(a,i){var o=(0,C.Z)([]),l=J()(o,3),b=l[0],R=l[1],w=l[2],oe=a||{},ne=oe.trigger,N=Le()(oe,Ge);if(N!=null&&N.customRequest){var ue=(0,n.jsx)(G.Z,g()(g()({fileList:b,showUploadList:!1,onChange:function(me){R(me.fileList)}},N),{},{disabled:i==null?void 0:i.disabled,children:ne?t.createElement(ne,{disabled:i==null?void 0:i.disabled}):(0,n.jsx)(Te.Z,{disabled:i==null?void 0:i.disabled,icon:(0,n.jsx)(Be.Z,{}),bordered:!1})})),Ee=(0,n.jsx)(se.Z.Header,{closable:!1,open:(b==null?void 0:b.length)>0,children:(0,n.jsx)(Qe.Z,{items:b,onChange:function(me){return R(me.fileList)}})});return{fileList:b,getFileList:w,setFileList:R,uploadIconButton:ue,uploadFileListHeader:Ee}}else return{enabled:!1}}function de(a){var i=(0,C.Z)(""),o=J()(i,3),l=o[0],b=o[1],R=o[2],w=(0,P.wv)().getPrefixCls("chat-anywhere-input"),oe=u(function(In){return In.sender}),ne=ie(function(In){return In}),N=oe||{},ue=N.placeholder,Ee=ue===void 0?"":ue,xe=N.disclaimer,me=xe===void 0?"":xe,ye=N.maxLength,Oe=N.beforeSubmit,We=Oe===void 0?function(){return Promise.resolve(!0)}:Oe,pe=N.beforeUI,_e=N.afterUI,Mn=N.scalable,Kn=Mn===void 0?!0:Mn,cn=N.attachments,Hn=I(cn,{disabled:!!ne.disabled}),Fn=Hn.getFileList,Yn=Hn.setFileList,Nn=Hn.uploadIconButton,it=Hn.uploadFileListHeader,mt=(0,t.useCallback)(K()(d()().mark(function In(){var Tt,ze;return d()().wrap(function(Gn){for(;;)switch(Gn.prev=Gn.next){case 0:return Gn.next=2,We();case 2:if(Tt=Gn.sent,Tt){Gn.next=5;break}return Gn.abrupt("return");case 5:ze=((Fn==null?void 0:Fn())||[]).filter(function(It){var Ot;return(Ot=It.response)===null||Ot===void 0?void 0:Ot.url}),a.onSubmit({query:R(),fileList:ze}),b(""),Yn&&Yn([]);case 9:case"end":return Gn.stop()}},In)})),[]),ht=(0,t.useCallback)(function(){a.onCancel()},[]);return(0,n.jsxs)("div",{className:w,children:[(0,n.jsxs)("div",{className:"".concat(w,"-wrapper"),children:[pe,(0,n.jsx)(se.Z,{loading:ne.loading,disabled:ne.disabled,scalable:Kn,placeholder:Ee,value:l,prefix:(0,n.jsx)(n.Fragment,{children:Nn}),header:it,onChange:b,maxLength:ye,onSubmit:mt,onCancel:ht}),_e]}),me?(0,n.jsx)(Pe.Z,{desc:me}):(0,n.jsx)("div",{className:"".concat(w,"-blank")})]})}var De=e(9146),O=e(19632),H=e.n(O),Y=(0,h.createContext)({messages:[],setMessages:function(){},getMessages:function(){return[]}});function ke(a){var i=(0,C.Z)([]),o=J()(i,3),l=o[0],b=o[1],R=o[2],w={messages:l,setMessages:b,getMessages:R};return(0,n.jsx)(Y.Provider,{value:w,children:a.children})}var Ne=function(){var i=(0,h.useContextSelector)(Y,function(ne){return{setMessages:ne.setMessages,getMessages:ne.getMessages}}),o=i.setMessages,l=i.getMessages,b=t.useCallback(function(){o([])},[]),R=t.useCallback(function(ne){return l().find(function(N){return N.id===ne})},[]),w=t.useCallback(function(ne){o(function(N){return N.filter(function(ue){return ue.id!==ne.id})})},[]),oe=t.useCallback(function(ne){o(function(N){var ue=N.findIndex(function(xe){return xe.id===ne.id});if(ue>-1){var Ee=g()(g()({},N[ue]),ne);return[].concat(H()(N.slice(0,ue)),[Ee],H()(N.slice(ue+1)))}else return[].concat(H()(N),[ne])})},[]);return{getMessages:l,removeAllMessages:b,getMessage:R,removeMessage:w,updateMessage:oe}},Re=e(78234),Se=e(73935),nn=e(2093),Ke=(0,h.createContext)({sessions:[],setSessions:function(){},getSessions:function(){return[]},currentSessionId:void 0,setCurrentSessionId:function(){},getCurrentSessionId:function(){return""}});function Ze(a){var i=u(function(xe){return xe.session}),o=(0,C.Z)([]),l=J()(o,3),b=l[0],R=l[1],w=l[2],oe=(0,C.Z)(void 0),ne=J()(oe,3),N=ne[0],ue=ne[1],Ee=ne[2];return(0,Re.Z)(K()(d()().mark(function xe(){var me,ye;return d()().wrap(function(We){for(;;)switch(We.prev=We.next){case 0:return We.next=2,i.api.getSessionList();case 2:ye=We.sent,R(ye),ue(ye==null||(me=ye[0])===null||me===void 0?void 0:me.id);case 5:case"end":return We.stop()}},xe)}))),(0,n.jsx)(Ke.Provider,{value:{sessions:b,setSessions:R,getSessions:w,currentSessionId:N,setCurrentSessionId:ue,getCurrentSessionId:Ee},children:a.children})}var tn=function(){var i=(0,h.useContextSelector)(Ke,function(me){return me}),o=i.setSessions,l=i.getSessions,b=i.getCurrentSessionId,R=i.setCurrentSessionId,w=i.currentSessionId,oe=u(function(me){return me.session}),ne=(0,h.useContextSelector)(Y,function(me){return me.setMessages}),N=t.useCallback(function(){var me=K()(d()().mark(function ye(Oe){var We;return d()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,oe.api.removeSession(Oe);case 2:We=_e.sent,ne([]),R(void 0),o(We);case 6:case"end":return _e.stop()}},ye)}));return function(ye){return me.apply(this,arguments)}}(),[]),ue=t.useCallback(function(){var me=K()(d()().mark(function ye(Oe){var We;return d()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:if(!Oe.id){_e.next=6;break}return _e.next=3,oe.api.updateSession(Oe);case 3:_e.t0=_e.sent,_e.next=9;break;case 6:return _e.next=8,oe.api.createSession(Oe);case 8:_e.t0=_e.sent;case 9:return We=_e.t0,o(We),_e.abrupt("return",Oe);case 12:case"end":return _e.stop()}},ye)}));return function(ye){return me.apply(this,arguments)}}(),[]),Ee=t.useCallback(function(){var me=K()(d()().mark(function ye(Oe){var We;return d()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,ue({name:(Oe==null?void 0:Oe.name)||"",messages:[]});case 2:return We=_e.sent,R(We.id),ne(We.messages),_e.abrupt("return",We.id);case 6:case"end":return _e.stop()}},ye)}));return function(ye){return me.apply(this,arguments)}}(),[]),xe=t.useCallback(function(me){R(me)},[]);return(0,nn.Z)(K()(d()().mark(function me(){var ye,Oe;return d()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return Se.flushSync(function(){ne([])}),pe.next=3,oe.api.getSession(w);case 3:if(pe.t2=ye=pe.sent,pe.t1=pe.t2===null,pe.t1){pe.next=7;break}pe.t1=ye===void 0;case 7:if(!pe.t1){pe.next=11;break}pe.t3=void 0,pe.next=12;break;case 11:pe.t3=ye.messages;case 12:if(pe.t0=pe.t3,pe.t0){pe.next=15;break}pe.t0=[];case 15:Oe=pe.t0,ne(Oe);case 17:case"end":return pe.stop()}},me)})),[w]),{changeCurrentSessionId:xe,getCurrentSessionId:b,getSessions:l,removeSession:N,updateSession:ue,createSession:Ee}},$e=e(68997),Ue,ln=(0,_.vJ)(Ue||(Ue=j()([`
.`,`-chat-anywhere-welcome-default {
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
`])),function(a){return a.theme.prefixCls},function(a){var i=a.theme;return i.colorText},function(a){var i=a.theme;return i.colorTextSecondary},function(a){var i=a.theme;return i.colorFillQuaternary},function(a){var i=a.theme;return i.colorText},function(a){var i=a.theme;return i.colorFillTertiary}),r=e(38850),Ae=["render"];function je(a){var i=u(function(N){return N.welcome}),o=(0,P.wv)().getPrefixCls("chat-anywhere-welcome-default");if(!i)return null;var l=i.render,b=Le()(i,Ae);if(l)return i.render({greeting:i.greeting,avatar:i.avatar,description:i.description,prompts:i.prompts,onSubmit:a.onSubmit});var R=b.greeting,w=b.avatar,oe=b.prompts,ne=b.description;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ln,{}),(0,n.jsxs)("div",{className:o,children:[w&&(0,n.jsx)($e.Z,{src:w,shape:"square",size:64}),R&&(0,n.jsx)("div",{className:"".concat(o,"-greeting"),children:R}),ne&&(0,n.jsx)("div",{className:"".concat(o,"-description"),children:ne}),(oe==null?void 0:oe.length)>0&&(0,n.jsx)("div",{className:"".concat(o,"-prompts"),children:oe.map(function(N){var ue=typeof N=="string"?{label:N,value:N}:g()(g()({},N),{},{label:N.label||N.value,value:N.value});return(0,n.jsx)(we,{prompt:ue,onSubmit:a.onSubmit},ue.value)})})]})]})}function we(a){var i=(0,P.wv)().getPrefixCls("chat-anywhere-welcome-default");return(0,n.jsxs)("div",{className:"".concat(i,"-prompt"),onClick:function(){return a.onSubmit({query:a.prompt.value})},children:[(0,n.jsx)("img",{className:"".concat(i,"-prompt-icon"),src:"https://img.alicdn.com/imgextra/i3/O1CN01822qqr1PVyaK7MYtn_!!6000000001847-2-tps-40-40.png",alt:""}),(0,n.jsx)("span",{className:"".concat(i,"-prompt-label"),children:a.prompt.label}),(0,n.jsx)(r.Z,{})]})}function Ce(a){var i=(0,h.useContextSelector)(Me,function(R){return R.loading}),o=(0,h.useContextSelector)(Y,function(R){return R.messages}),l=(0,P.wv)().getPrefixCls("chat-anywhere-message-list"),b=(0,h.useContextSelector)(Ke,function(R){return R.currentSessionId});return o.length===0?(0,n.jsx)("div",{className:M()(l,"".concat(l,"-welcome")),children:(0,n.jsx)(je,{onSubmit:a.onSubmit})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(De.Z.List,{smooth:!!i,classNames:{wrapper:l},items:o},b)})}var Xe,He=(0,_.vJ)(Xe||(Xe=j()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),an=e(32116);function c(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];(0,t.useEffect)(function(){return document.addEventListener(a.type,a.callback),function(){document.removeEventListener(a.type,a.callback)}},i)}var X=function(i){var o=i.type,l=i.data;document.dispatchEvent(new CustomEvent(o,{detail:l}))},ee=e(88773),ve=e(12444),he=e.n(ve),L=e(72004),ce=e.n(L),B=function(a){return a.Created="created",a.InProgress="in_progress",a.Completed="completed",a.Canceled="canceled",a.Failed="failed",a.Rejected="rejected",a.Unknown="unknown",a}({}),re=function(a){return a.ASSISTANT="assistant",a.USER="user",a.SYSTEM="system",a}({}),z=function(a){return a.MESSAGE="message",a.REASONING="reasoning",a.PLUGIN_CALL="plugin_call",a.PLUGIN_CALL_OUTPUT="plugin_call_output",a.FUNCTION_CALL="function_call",a.FUNCTION_CALL_OUTPUT="function_call_output",a.COMPONENT_CALL="component_call",a.COMPONENT_CALL_OUTPUT="component_call_output",a.MCP_LIST_TOOLS="mcp_list_tools",a.MCP_APPROVAL_REQUEST="mcp_approval_request",a.MCP_APPROVAL_RESPONSE="mcp_approval_response",a.MCP_CALL="mcp_call",a.MCP_CALL_OUTPUT="mcp_call_output",a.HEARTBEAT="heartbeat",a.ERROR="error",a}({}),ae=function(a){return a.TEXT="text",a.DATA="data",a.IMAGE="image",a.AUDIO="audio",a.FILE="file",a.REFUSAL="refusal",a}({}),f=function(){function a(){he()(this,a),p()(this,"data",void 0)}return ce()(a,[{key:"isImageFile",value:function(o){return o.type.indexOf("image/")===0}},{key:"buildImageContent",value:function(o){var l;return{type:ae.IMAGE,image_url:(l=o.response)===null||l===void 0?void 0:l.url,status:B.Created}}},{key:"buildTextContent",value:function(o){return{type:ae.TEXT,text:o,status:B.Created}}},{key:"buildFileContent",value:function(o){var l;return{type:ae.FILE,file_url:(l=o.response)===null||l===void 0?void 0:l.url,file_name:o.name,file_size:o.size,status:B.Created}}},{key:"handle",value:function(o){var l,b=this;this.data={input:[]};var R=[this.buildTextContent(o.query)];return(l=o.fileList)!==null&&l!==void 0&&l.length&&o.fileList.forEach(function(w){b.isImageFile(w)?R.push(b.buildImageContent(w)):R.push(b.buildFileContent(w))}),this.data={input:[{role:"user",type:z.MESSAGE,content:R}]},this.data}},{key:"handleApproval",value:function(o){return this.data={input:o},this.data}}],[{key:"getHistoryMessages",value:function(o){return o.reduce(function(l,b){var R;return(R=b.cards)!==null&&R!==void 0&&R.length?l.concat(b.cards[0].data.input||b.cards[0].data.output):l},[])}}]),a}(),F=f;function U(a){var i=a.currentQARef,o=Ne(),l=o.updateMessage,b=o.getMessages,R=o.removeMessage,w=(0,t.useCallback)(function(Ee){return i.current.abortController=new AbortController,i.current.request={id:(0,ee.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new F().handle(Ee)}]},Se.flushSync(function(){l(i.current.request)}),i.current.request},[i,l]),oe=(0,t.useCallback)(function(Ee){return i.current.abortController=new AbortController,i.current.request={id:(0,ee.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new F().handleApproval(Ee)}]},Se.flushSync(function(){l(i.current.request)}),i.current.request},[i,l]),ne=(0,t.useCallback)(function(){return i.current.response={id:(0,ee.Z)(),role:"assistant",cards:[],msgStatus:"generating"},l(i.current.response),i.current.response},[i,l]),N=(0,t.useCallback)(function(){return F.getHistoryMessages(b())},[b]),ue=(0,t.useCallback)(function(Ee){Se.flushSync(function(){R({id:Ee})})},[R]);return{createRequestMessage:w,createApprovalMessage:oe,createResponseMessage:ne,getHistoryMessages:N,updateMessage:l,removeMessageById:ue,getMessages:b}}var fe=e(44987),Ie=e.n(fe),Fe=e(7354),be=e(64599),Ye=e.n(be),qe=e(93513),ge=function(){function a(i){var o=i.id,l=i.status,b=i.created_at;he()(this,a),p()(this,"data",void 0),this.data={id:o,output:[],object:"response",status:l||B.Created,created_at:b||Date.now()}}return ce()(a,[{key:"handleResponse",value:function(o){this.data=(0,qe.produce)(this.data,function(l){o.output||(o.output=[]),Object.assign(l,o)})}},{key:"handleMessage",value:function(o){this.data=(0,qe.produce)(this.data,function(l){l.output||(l.output=[]);var b=l.output.findIndex(function(w){return w.id===o.id});if(b>=0){var R=l.output[b].content;Object.assign(l.output[b],o),(!o.content||o.content.length===0)&&(l.output[b].content=R)}else l.output.push(o)})}},{key:"handleContent",value:function(o){this.data=(0,qe.produce)(this.data,function(l){var b=l.output.find(function(w){return w.id===o.msg_id});if(!b){console.warn("Message not found for content:",o.msg_id);return}if(b.content||(b.content=[]),o.delta){var R=b.content[b.content.length-1];R&&R.delta?o.type===ae.TEXT&&R.type===ae.TEXT?R.text+=o.text:o.type===ae.IMAGE?R.image_url=o.image_url:o.type===ae.DATA&&(R.data=o.data):b.content.push(o)}else b.content.length>0?Object.assign(b.content[b.content.length-1],o):b.content.push(o)})}},{key:"handleError",value:function(o){this.data=(0,qe.produce)(this.data,function(l){l.status=B.Failed,l.output.push({status:B.Failed,type:z.ERROR,content:[],id:(0,ee.Z)(),role:"assistant",code:o.code,message:typeof o.message=="string"?o.message:JSON.stringify(o.message)})})}},{key:"handle",value:function(o){if(o.object==="response")this.handleResponse(o);else if(o.object==="message"){if(o.type===z.HEARTBEAT)return this.data;this.handleMessage(o)}else o.object==="content"?this.handleContent(o):this.handleError(o);return this.data}},{key:"cancel",value:function(){return this.data=(0,qe.produce)(this.data,function(o){a.maybeGenerating(o)&&(o.status=B.Canceled),o.output.forEach(function(l){a.maybeGenerating(l)&&(l.status=B.Canceled,l.content.forEach(function(b){a.maybeGenerating(b)&&(b.status=B.Canceled)}))})}),this.data}}],[{key:"mergeToolMessages",value:function(o){var l=new Map,b=[],R=Ye()(o),w;try{var oe=function(){var N,ue,Ee=w.value;if(a.maybeToolInput(Ee)&&(N=Ee.content)!==null&&N!==void 0&&N.length){var xe=Ee.content[0],me=xe.data.call_id||xe.data.name;l.set(me,xe),b.push(Ee)}else if(a.maybeToolOutput(Ee)&&(ue=Ee.content)!==null&&ue!==void 0&&ue.length){var ye=Ee.content[0],Oe=ye.data.call_id||ye.data.name,We=l.get(Oe);We&&(b=b.map(function(pe){if(!a.maybeToolInput(pe))return pe;var _e=pe.content[0],Mn=_e.data.call_id||_e.data.name;return Mn===Oe?g()(g()({},Ee),{},{content:[].concat(H()(pe.content),[ye])}):pe}))}else b.push(Ee)};for(R.s();!(w=R.n()).done;)oe()}catch(ne){R.e(ne)}finally{R.f()}return b}},{key:"maybeToolOutput",value:function(o){return[z.FUNCTION_CALL_OUTPUT,z.PLUGIN_CALL_OUTPUT,z.COMPONENT_CALL_OUTPUT,z.MCP_CALL_OUTPUT].includes(o.type)}},{key:"maybeToolInput",value:function(o){return[z.FUNCTION_CALL,z.PLUGIN_CALL,z.COMPONENT_CALL,z.MCP_CALL].includes(o.type)}},{key:"maybeGenerating",value:function(o){return[B.InProgress,B.Created].includes(o.status)}},{key:"maybeDone",value:function(o){return[B.Completed,B.Canceled,B.Failed].includes(o.status)}}]),a}(),en=ge;function vn(a){var i=a.currentQARef,o=a.updateMessage,l=a.getCurrentSessionId,b=a.onFinish,R=u(function(N){return N.api}),w=(0,t.useRef)(R);(0,t.useEffect)(function(){w.current=R},[R]);var oe=(0,t.useCallback)(function(){var N=K()(d()().mark(function ue(Ee){var xe,me,ye,Oe,We,pe,_e,Mn;return d()().wrap(function(cn){for(;;)switch(cn.prev=cn.next){case 0:xe=new en({id:"",status:B.Created,created_at:0}),me=!1,ye=!1,cn.prev=3,We=Ie()(Ee);case 5:return cn.next=7,We.next();case 7:if(!(me=!(pe=cn.sent).done)){cn.next=17;break}return _e=pe.value,Mn=xe.handle(_e),i.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Mn}],o(i.current.response),cn.next=14,(0,an.Z)(100);case 14:me=!1,cn.next=5;break;case 17:cn.next=23;break;case 19:cn.prev=19,cn.t0=cn.catch(3),ye=!0,Oe=cn.t0;case 23:if(cn.prev=23,cn.prev=24,!(me&&We.return!=null)){cn.next=28;break}return cn.next=28,We.return();case 28:if(cn.prev=28,!ye){cn.next=31;break}throw Oe;case 31:return cn.finish(28);case 32:return cn.finish(23);case 33:case"end":return cn.stop()}},ue,null,[[3,19,23,33],[24,,28,32]])}));return function(ue){return N.apply(this,arguments)}}(),[]),ne=(0,t.useCallback)(function(){var N=K()(d()().mark(function ue(Ee,xe){var me,ye,Oe,We,pe,_e,Mn,Kn,cn,Hn,Fn,Yn,Nn,it,mt,ht,In;return d()().wrap(function(ze){for(;;)switch(ze.prev=ze.next){case 0:if(me=w.current,ye=me.enableHistoryMessages,Oe=ye===void 0?!1:ye,ze.prev=2,!me.fetch){ze.next=9;break}return ze.next=6,me.fetch({input:Ee,biz_params:xe});case 6:ze.t0=ze.sent,ze.next=12;break;case 9:return ze.next=11,fetch(me.baseURL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(me.token||"")},body:JSON.stringify({input:Oe?Ee:Ee.slice(-1),session_id:l(),stream:!0,biz_params:xe})});case 11:ze.t0=ze.sent;case 12:We=ze.t0,ze.next=17;break;case 15:ze.prev=15,ze.t1=ze.catch(2);case 17:if(!(We&&We.body)){ze.next=66;break}if(pe=new en({id:"",status:B.Created,created_at:0}),We.ok){ze.next=22;break}return We.json().then(function(Rt){var Gn=pe.handle({object:"message",type:z.ERROR,content:[],id:"error",role:"assistant",status:B.Failed,code:We.status,message:JSON.stringify(Rt)});i.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Gn}],b()}),ze.abrupt("return");case 22:ze.prev=22,_e=!1,Mn=!1,ze.prev=25,cn=Ie()((0,Fe.Z)({readableStream:We.body}));case 27:return ze.next=29,cn.next();case 29:if(!(_e=!(Hn=ze.sent).done)){ze.next=45;break}if(Fn=Hn.value,((Yn=i.current.response)===null||Yn===void 0?void 0:Yn.msgStatus)!=="interrupted"){ze.next=36;break}return(it=i.current.abortController)===null||it===void 0||it.abort(),i.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:pe.cancel()}],o(i.current.response),ze.abrupt("break",45);case 36:if(mt=w.current.responseParser||JSON.parse,ht=mt(Fn.data),In=pe.handle(ht),!(In.status!==B.Failed&&!((Nn=In.output)!==null&&Nn!==void 0&&(Nn=Nn[0])!==null&&Nn!==void 0&&(Nn=Nn.content)!==null&&Nn!==void 0&&Nn.length))){ze.next=41;break}return ze.abrupt("continue",42);case 41:i.current.response&&(i.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:In}],In.status===B.Completed||In.status===B.Failed?b():o(i.current.response));case 42:_e=!1,ze.next=27;break;case 45:ze.next=51;break;case 47:ze.prev=47,ze.t2=ze.catch(25),Mn=!0,Kn=ze.t2;case 51:if(ze.prev=51,ze.prev=52,!(_e&&cn.return!=null)){ze.next=56;break}return ze.next=56,cn.return();case 56:if(ze.prev=56,!Mn){ze.next=59;break}throw Kn;case 59:return ze.finish(56);case 60:return ze.finish(51);case 61:ze.next=66;break;case 63:ze.prev=63,ze.t3=ze.catch(22),console.error(ze.t3);case 66:case"end":return ze.stop()}},ue,null,[[2,15],[22,63],[25,47,51,61],[52,,56,60]])}));return function(ue,Ee){return N.apply(this,arguments)}}(),[l,i,o,b]);return{request:ne,mockRequest:oe}}function jn(){var a=tn(),i=a.createSession,o=a.updateSession,l=a.getCurrentSessionId,b=(0,t.useCallback)(function(){var oe=K()(d()().mark(function ne(N){return d()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:if(l()){Ee.next=3;break}return Ee.next=3,i({name:N});case 3:case"end":return Ee.stop()}},ne)}));return function(ne){return oe.apply(this,arguments)}}(),[l,i]),R=(0,t.useCallback)(function(){var oe=K()(d()().mark(function ne(N,ue){return d()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:if(ue.length!==0){xe.next=3;break}return xe.next=3,o({id:l(),name:N});case 3:case"end":return xe.stop()}},ne)}));return function(ne,N){return oe.apply(this,arguments)}}(),[l,o]),w=(0,t.useCallback)(function(){var oe=K()(d()().mark(function ne(N){return d()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:return Ee.next=2,o({id:l(),messages:N});case 2:case"end":return Ee.stop()}},ne)}));return function(ne){return oe.apply(this,arguments)}}(),[l,o]);return{ensureSession:b,updateSessionName:R,syncSessionMessages:w,getCurrentSessionId:l}}function pn(){var a=(0,h.useContextSelector)(Me,function(xe){return xe.setLoading}),i=(0,h.useContextSelector)(Ke,function(xe){return xe.currentSessionId}),o=(0,t.useRef)({}),l=U({currentQARef:o}),b=jn(),R=(0,t.useCallback)(function(){var xe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished";o.current.response&&(o.current.response.msgStatus=xe,a(!1),Se.flushSync(function(){l.updateMessage(o.current.response)}),b.syncSessionMessages(l.getMessages()))},[a,l,b]),w=vn({currentQARef:o,updateMessage:l.updateMessage,getCurrentSessionId:b.getCurrentSessionId,onFinish:function(){return R("finished")}}),oe=w.request,ne=(0,t.useCallback)(function(){var xe=K()(d()().mark(function me(ye){var Oe,We;return d()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,b.ensureSession(ye.query);case 2:if(Oe=l.getMessages(),!b.getCurrentSessionId()){_e.next=6;break}return _e.next=6,b.updateSessionName(ye.query,Oe);case 6:return l.createRequestMessage(ye),a(!0),_e.next=10,(0,an.Z)(100);case 10:return l.createResponseMessage(),We=l.getHistoryMessages(),_e.next=14,b.syncSessionMessages(l.getMessages());case 14:return _e.next=16,oe(We,ye.biz_params);case 16:case"end":return _e.stop()}},me)}));return function(me){return xe.apply(this,arguments)}}(),[l,b,oe]),N=(0,t.useCallback)(function(){var xe=K()(d()().mark(function me(ye){var Oe,We;return d()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return Oe=ye.input,l.createApprovalMessage(Oe),a(!0),_e.next=5,(0,an.Z)(100);case 5:return l.createResponseMessage(),We=l.getHistoryMessages(),_e.next=9,b.syncSessionMessages(l.getMessages());case 9:return _e.next=11,oe(We);case 11:case"end":return _e.stop()}},me)}));return function(me){return xe.apply(this,arguments)}}(),[l,b,oe]),ue=(0,t.useCallback)(function(){R("interrupted")},[R]),Ee=(0,t.useCallback)(function(){var xe=K()(d()().mark(function me(ye){var Oe;return d()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return a(!0),l.removeMessageById(ye),o.current.abortController=new AbortController,l.createResponseMessage(),Oe=l.getHistoryMessages(),pe.next=7,oe(Oe);case 7:case"end":return pe.stop()}},me)}));return function(me){return xe.apply(this,arguments)}}(),[l,oe]);return(0,t.useEffect)(function(){o.current={request:void 0,response:void 0,abortController:void 0}},[i]),c({type:"handleReplace",callback:function(){var xe=K()(d()().mark(function ye(Oe){return d()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return pe.next=2,Ee(Oe.detail.id);case 2:case"end":return pe.stop()}},ye)}));function me(ye){return xe.apply(this,arguments)}return me}()}),c({type:"handleSubmit",callback:function(){var xe=K()(d()().mark(function ye(Oe){return d()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return pe.next=2,ne(Oe.detail);case 2:case"end":return pe.stop()}},ye)}));function me(ye){return xe.apply(this,arguments)}return me}()},[ne]),c({type:"handleApproval",callback:function(){var xe=K()(d()().mark(function ye(Oe){return d()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return pe.next=2,N(Oe.detail);case 2:case"end":return pe.stop()}},ye)}));function me(ye){return xe.apply(this,arguments)}return me}()},[N]),{handleSubmit:ne,handleCancel:ue}}function Ln(){var a=(0,P.wv)().getPrefixCls("chat-anywhere-chat"),i=pn(),o=i.handleSubmit,l=i.handleCancel;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(He,{}),(0,n.jsxs)("div",{className:a,children:[(0,n.jsx)(Ce,{onSubmit:o}),(0,n.jsx)(de,{onCancel:l,onSubmit:o})]})]})}var hn=e(21403),xn=e(67392),on=e(13660),sn=e(12624),mn=e(50287),An=e(9368),Cn=(0,t.createContext)({collapsed:!1,toggleCollapsed:function(){}});function _n(a){var i=(0,t.useState)(!1),o=J()(i,2),l=o[0],b=o[1],R=(0,t.useCallback)(function(){b(function(w){return!w})},[]);return(0,n.jsx)(Cn.Provider,{value:{collapsed:l,toggleCollapsed:R},children:a.children})}function Dn(){var a=(0,t.useContext)(Cn),i=a.collapsed,o=(0,P.wv)().getPrefixCls("chat-anywhere-sessions"),l=u(function(b){var R;return(R=b.theme)===null||R===void 0?void 0:R.leftHeader})||{};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"".concat(o),children:[t.isValidElement(l)?l:(0,n.jsx)(En,{}),(0,n.jsxs)("div",{className:"".concat(o,"-content"),style:{display:i?"none":"flex"},children:[(0,n.jsx)(Bn,{}),(0,n.jsx)(Vn,{})]})]})})}function En(a){var i=a.className,o=u(function(me){var ye;return(ye=me.theme)===null||ye===void 0?void 0:ye.leftHeader})||{},l=(0,P.wv)().getPrefixCls("chat-anywhere-sessions"),b=(0,t.useContext)(Cn),R=b.toggleCollapsed,w=b.collapsed,oe=u(function(me){return me.session.multiple}),ne=o,N=ne.logo,ue=N===void 0?"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png":N,Ee=ne.title,xe=Ee===void 0?"Runtime WebUI":Ee;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:M()("".concat(l,"-header"),i),children:[(0,n.jsxs)("div",{className:"".concat(l,"-header-left"),children:[ue&&(0,n.jsx)("img",{src:ue,alt:"logo",height:32}),(0,n.jsx)("span",{children:xe})]}),oe&&(0,n.jsx)(Te.Z,{className:"".concat(l,"-header-collapse"),bordered:!1,icon:w?(0,n.jsx)(on.Z,{}):(0,n.jsx)(xn.Z,{}),onClick:R})]})})}function Bn(a){var i=(0,h.useContextSelector)(Me,function(oe){return oe.loading}),o=tn(),l=o.createSession,b=(0,P.wv)().getPrefixCls("chat-anywhere-sessions"),R=(0,t.useContext)(Cn),w=R.toggleCollapsed;return(0,n.jsx)("div",{className:"".concat(b,"-adder"),style:a.style,children:(0,n.jsx)(hn.Z,{block:!0,type:"primary",icon:(0,n.jsx)(sn.Z,{}),disabled:!!i,onClick:K()(d()().mark(function oe(){return d()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,l();case 2:a.narrowMode&&w();case 3:case"end":return N.stop()}},oe)})),children:"New Chat"})})}function Vn(a){var i=(0,P.wv)().getPrefixCls("chat-anywhere-sessions"),o=(0,h.useContextSelector)(Ke,function(ue){return ue.sessions}),l=tn(),b=l.changeCurrentSessionId,R=l.removeSession,w=(0,h.useContextSelector)(Ke,function(ue){return ue.currentSessionId}),oe=(0,t.useContext)(Cn),ne=oe.toggleCollapsed,N=(0,t.useMemo)(function(){return o.map(function(ue){return{key:ue.id,label:ue.name||"New Chat"}})},[o]);return(0,n.jsx)("div",{className:"".concat(i,"-list"),style:a.style,children:(0,n.jsx)(An.Z,{items:N,menu:[{key:"delete",icon:(0,n.jsx)(mn.Z,{}),danger:!0,onClick:function(){var ue=K()(d()().mark(function xe(me){return d()().wrap(function(Oe){for(;;)switch(Oe.prev=Oe.next){case 0:return Oe.next=2,R({id:me.key});case 2:return Oe.abrupt("return",Oe.sent);case 3:case"end":return Oe.stop()}},xe)}));function Ee(xe){return ue.apply(this,arguments)}return Ee}()}],activeKey:w,onActiveChange:function(Ee){b(Ee),a.narrowMode&&ne()}})})}var nt,rn=(0,_.vJ)(nt||(nt=j()([`

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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),Je=e(85265);function un(){var a=(0,P.wv)().getPrefixCls("chat-anywhere"),i=u(function(oe){return oe.theme}),o=i.narrowMode,l=i.rightHeader,b=(0,t.useContext)(Cn),R=b.toggleCollapsed,w=b.collapsed;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(rn,{}),(0,n.jsxs)("div",{className:"".concat(a,"-layout-right-header"),children:[o?(0,n.jsx)(En,{className:"".concat(a,"-default-header-inner")}):null,l&&(0,n.jsx)("div",{className:"".concat(a,"-default-header-right"),children:l})]}),o&&(0,n.jsx)(Je.Z,{width:"80vw",styles:{body:{padding:0}},open:w,onClose:R,title:null,closable:!1,placement:"left",children:(0,n.jsxs)("div",{className:"".concat(a,"-sessions"),children:[(0,n.jsx)(Vn,{narrowMode:!0}),(0,n.jsx)(Bn,{narrowMode:!0})]})})]})}function dn(a,i){var o=Ne(),l=(0,h.useContextSelector)(Me,function(b){return b.setDisabled});return t.useImperativeHandle(i,function(){return{messages:o,input:{setDisabled:l,submit:function(R){var w=R.query,oe=R.fileList,ne=R.biz_params;X({type:"handleSubmit",data:{query:w,fileList:oe,biz_params:ne}})}}}},[]),null}var $n=(0,t.forwardRef)(dn);function Pn(a,i){var o=a.className,l=(0,P.wv)().getPrefixCls("chat-anywhere-layout"),b=u(function(xe){return xe.theme.narrowMode}),R=u(function(xe){return xe.theme.background}),w=u(function(xe){return xe.theme.rightHeader}),oe=u(function(xe){return{session:xe.session}}),ne=oe.session,N=(0,t.useContext)(Cn),ue=N.collapsed,Ee=!b&&ne&&ne.multiple;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{}),(0,n.jsxs)("div",{className:M()("".concat(l),o),children:[Ee&&(0,n.jsx)("div",{className:M()("".concat(l,"-left"),p()({},"".concat(l,"-left-collapsed"),ue)),children:(0,n.jsx)(Dn,{})}),(0,n.jsxs)("div",{className:M()("".concat(l,"-right"),p()({},"".concat(l,"-right-has-header"),!!w)),style:{background:R},children:[!!w&&(0,n.jsx)(un,{}),(0,n.jsx)(Ln,{})]})]}),(0,n.jsx)($n,{ref:i})]})}var Tn=(0,t.forwardRef)(Pn);function Jn(a){var i=(0,t.useMemo)(function(){return a.data.input[0].content.reduce(function(o,l){if(l.type===ae.TEXT&&o.push({code:"Text",data:{content:l.text,raw:!0}}),l.type===ae.IMAGE){var b=o.find(function(w){return w.code==="Image"});b?b.data.push({url:l.image_url}):o.push({code:"Images",data:[{url:l.image_url}]})}if(l.type===ae.FILE){var R=o.find(function(w){return w.code==="Files"});R?R.data.push({url:l.file_url,name:l.file_name,size:l.file_size}):o.push({code:"Files",data:[{url:l.file_url,name:l.file_name,size:l.file_size}]})}return o},[])},[a.data.input]);return i!=null&&i.length?(0,n.jsx)(De.Z,{role:"user",cards:i}):null}var Rn=e(66109),qn=t.memo(function(a){var i,o=a.data;return(i=o.content)!==null&&i!==void 0&&i.length?(0,n.jsx)(n.Fragment,{children:o.content.map(function(l,b){switch(l.type){case ae.TEXT:return(0,n.jsx)(Rn.Z,{content:l.text,cursor:l.status===B.InProgress},b);case ae.REFUSAL:return(0,n.jsx)(Rn.Z,{raw:!0,content:l.refusal},b);default:return(0,n.jsx)("div",{children:JSON.stringify(l)},b)}})}):null}),gn=qn,kn=e(85786),Wn=e(70770),yn=e(86250),wn=e(31912),Xn=e(7654),bn=e(56290),fn,Sn,Zn,zn,lt,ct,On,Un,et=(0,_.kc)(function(a){var i=a.css,o=a.token;return{container:i(fn||(fn=j()([`
    width: 386px;
  `]))),title:i(Sn||(Sn=j()([`
    font-size: 14px;
    font-weight: 500;
    color: `,`;
    margin-bottom: 16px;
  `])),o.colorText),content:i(Zn||(Zn=j()([`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `]))),tabsContainer:i(zn||(zn=j()([`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `]))),tabItem:i(lt||(lt=j()([`
    padding: 0 8px;
    font-size: 14px;
    color: `,`;
    cursor: pointer;
    border: 1px solid `,`;
    background: `,`;
    transition: all 0.2s;
    user-select: none;
    border-radius: 4px;
  `])),o.colorText,o.colorBorderSecondary,o.colorBgContainer),tabItemSelected:i(ct||(ct=j()([`
    color: `,`;
    border-color: `,`;
    border: 1px solid `,`;
    position: relative;
    z-index: 1;
  `])),o.colorPrimary,o.colorPrimary,o.colorPrimary),textarea:i(On||(On=j()([`
    resize: none;
  `]))),actions:i(Un||(Un=j()([`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  `])))}});function ut(){var a=(0,bn.useTranslation)(),i=a.t;return[(i==null?void 0:i("cancelPopover.options.notNeeded"))||"\u4E0D\u9700\u8981",(i==null?void 0:i("cancelPopover.options.poorResult"))||"\u6548\u679C\u4E0D\u7406\u60F3",(i==null?void 0:i("cancelPopover.options.tooSlow"))||"\u7B49\u5F85\u65F6\u95F4\u4E45",(i==null?void 0:i("cancelPopover.options.wrongInput"))||"\u8F93\u5165\u9519\u8BEF"]}function gt(a){var i=a.options,o=(0,t.useState)(),l=J()(o,2),b=l[0],R=l[1],w=et(),oe=w.styles;return(0,n.jsx)("div",{className:oe.tabsContainer,children:i.map(function(ne){return(0,n.jsx)("div",{className:"".concat(oe.tabItem," ").concat(b===ne?oe.tabItemSelected:""),onClick:function(){R(ne),a.onSelect(ne)},children:ne},ne)})})}function pt(a){var i=(0,bn.useTranslation)(),o=i.t,l=ut(),b=a.options,R=b===void 0?l:b,w=a.onConfirm,oe=a.title,ne=oe===void 0?(o==null?void 0:o("cancelPopover.title"))||"\u53D6\u6D88\u539F\u56E0":oe,N=a.placeholder,ue=N===void 0?(o==null?void 0:o("cancelPopover.placeholder"))||"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212":N,Ee=(0,t.useState)(!1),xe=J()(Ee,2),me=xe[0],ye=xe[1],Oe=et(),We=Oe.styles,pe=(0,t.useState)(""),_e=J()(pe,2),Mn=_e[0],Kn=_e[1],cn=function(){w==null||w(Mn.trim())},Hn=(0,n.jsxs)("div",{className:We.container,children:[(0,n.jsx)("div",{className:We.title,children:ne}),(0,n.jsxs)("div",{className:We.content,children:[(0,n.jsx)(gt,{options:R,onSelect:Kn}),(0,n.jsx)(wn.Z.TextArea,{className:We.textarea,value:Mn,onChange:function(Yn){return Kn(Yn.target.value)},placeholder:ue,rows:3}),(0,n.jsxs)(yn.Z,{className:We.actions,children:[(0,n.jsx)(hn.Z,{size:"small",onClick:function(){return ye(!1)},children:(o==null?void 0:o("cancelPopover.cancel"))||"\u53D6\u6D88"}),(0,n.jsx)(hn.Z,{size:"small",type:"primary",onClick:function(){ye(!1),cn()},children:(o==null?void 0:o("cancelPopover.confirm"))||"\u786E\u8BA4"})]})]})]});return(0,n.jsx)(Xn.Z,{open:me,onOpenChange:ye,trigger:"click",content:Hn,children:(0,n.jsx)(hn.Z,{size:"small",children:(o==null?void 0:o("approval.cancel"))||"\u53D6\u6D88\u6267\u884C"})})}var tt,xt=(0,_.kc)(function(a){var i=a.css,o=a.token;return{desc:i(tt||(tt=j()([`
    font-size: 12px;
    color: `,`;
  `])),o.colorTextTertiary)}});function dt(a){var i=a.data,o=ie(function(Oe){return Oe}),l=xt(),b=l.styles,R=(0,bn.useTranslation)(),w=R.t,oe=(0,t.useState)("pending"),ne=J()(oe,2),N=ne[0],ue=ne[1],Ee=(w==null?void 0:w("approval.title"))||"\u4EBA\u5DE5\u5E72\u9884",xe=(0,t.useMemo)(function(){return N==="pending"?(w==null?void 0:w("approval.pending"))||"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C":N==="confirmed"?(w==null?void 0:w("approval.confirmed"))||"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1":(w==null?void 0:w("approval.canceled"))||"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1"},[N,w]),me=(0,t.useCallback)(function(Oe,We){var pe;ue(Oe),o.setLoading(!1),o.setDisabled(!1);var _e=i,Mn=(pe=_e.content[0])===null||pe===void 0||(pe=pe.data)===null||pe===void 0?void 0:pe.id,Kn={type:z.MCP_APPROVAL_RESPONSE,role:re.USER,content:[{type:ae.DATA,data:{approve:Oe==="confirmed",id:Mn,approval_request_id:Mn,reason:We}}]};X({type:"handleApproval",data:{input:[_e,Kn]}})},[i]),ye=(0,t.useMemo)(function(){return N==="pending"?(0,n.jsxs)(yn.Z,{gap:8,children:[(0,n.jsx)(pt,{onConfirm:function(We){return me("canceled",We)}}),(0,n.jsx)(hn.Z,{size:"small",type:"primary",onClick:function(){return me("confirmed")},children:(w==null?void 0:w("approval.confirm"))||"\u786E\u8BA4\u6267\u884C"})]}):null},[N,w]);return(0,t.useEffect)(function(){N==="pending"&&(o.setLoading((w==null?void 0:w("approval.taskRunning"))||"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1"),o.setDisabled(!0))},[N,w]),(0,n.jsx)(Wn.Z.HITL,{done:N!=="pending",onDone:function(){},title:(0,n.jsxs)(yn.Z,{gap:8,children:[Ee,(0,n.jsx)("span",{className:b.desc,children:xe})]}),actions:ye})}var Qn=t.memo(function(a){var i,o=a.data,l=a.isApproval,b=l===void 0?!1:l,R=u(function(Oe){return Oe.customToolRenderConfig})||{};if(!((i=o.content)!==null&&i!==void 0&&i.length))return null;var w=o.content,oe=o.status===B.InProgress,ne=w[0].data.name,N="".concat(w[0].data.server_label?w[0].data.server_label+" / ":""),ue="".concat(N).concat(ne),Ee;if(R[ne]){var xe=R[ne];Ee=(0,n.jsx)(xe,{data:o})}else{var me,ye;Ee=(0,n.jsx)(kn.Z,{loading:oe,defaultOpen:!1,title:ue==="undefined"?"":ue,input:(me=w[0])===null||me===void 0||(me=me.data)===null||me===void 0?void 0:me.arguments,output:(ye=w[1])===null||ye===void 0||(ye=ye.data)===null||ye===void 0?void 0:ye.output})}return(0,n.jsxs)(n.Fragment,{children:[Ee,b&&(0,n.jsx)(dt,{data:o})]})}),ft=Qn,at=e(79323);function Ct(a){var i,o=a.data;if(o.status===B.Created)return null;var l=o==null||(i=o.content)===null||i===void 0?void 0:i[0];return l?(0,n.jsx)(at.Z,{loading:o.status===B.InProgress,title:"Thinking",content:l.text}):null}function rt(a){var i=a.data;return(0,n.jsx)(De.Z.Interrupted,{type:"error",title:i.code,desc:i.message})}var yt=e(89698),vt=e(60227),bt=e(82286),jt=e(67055),Et=e(39693),Pt=e.n(Et);function ot(a){return!a.input_tokens||!a.output_tokens?null:(0,n.jsx)(De.Z.Footer.Count,{data:[["Input",a.input_tokens],["Output",a.output_tokens]]})}function St(a){var i,o,l,b=(0,bn.useTranslation)(),R=b.t,w=u(function(N){var ue;return(ue=N.actions)===null||ue===void 0?void 0:ue.list})||[{icon:(0,n.jsx)(yt.Z,{}),onClick:function(){(0,bt.JG)(JSON.stringify(a.data))}}],oe=(i=u(function(N){var ue;return(ue=N.actions)===null||ue===void 0?void 0:ue.replace}))!==null&&i!==void 0?i:!0,ne=Pt()([].concat(H()(w.map(function(N){var ue=N;return N.render&&(ue.children=t.createElement(N.render,{data:a})),g()(g()({},ue),{},{onClick:function(){var xe;(xe=N.onClick)===null||xe===void 0||xe.call(N,a)}})})),[oe&&a.isLast?{icon:(0,n.jsx)(jt.Z,{title:(R==null?void 0:R("actions.regenerate"))||"\u91CD\u65B0\u751F\u6210",children:(0,n.jsx)(vt.Z,{})}),onClick:function(){X({type:"handleReplace",data:a})}}:null]));return en.maybeDone(a.data)?(0,n.jsx)(De.Z.Footer,{left:(0,n.jsx)(De.Z.Footer.Actions,{data:ne}),right:(0,n.jsx)(ot,{input_tokens:(o=a.data.usage)===null||o===void 0?void 0:o.input_tokens,output_tokens:(l=a.data.usage)===null||l===void 0?void 0:l.output_tokens})}):null}function st(a){var i=(0,t.useMemo)(function(){return en.mergeToolMessages(a.data.output)},[a.data.output]);return!(i!=null&&i.length)&&en.maybeGenerating(a.data)?(0,n.jsx)(De.Z.Spin,{}):(0,n.jsxs)(n.Fragment,{children:[i.map(function(o){switch(o.type){case z.MESSAGE:return(0,n.jsx)(gn,{data:o},o.id);case z.PLUGIN_CALL:case z.PLUGIN_CALL_OUTPUT:case z.MCP_CALL:case z.MCP_CALL_OUTPUT:return(0,n.jsx)(ft,{data:o},o.id);case z.MCP_APPROVAL_REQUEST:return(0,n.jsx)(ft,{data:o,isApproval:!0},o.id);case z.REASONING:return(0,n.jsx)(Ct,{data:o},o.id);case z.ERROR:return(0,n.jsx)(rt,{data:o},o.id);case z.HEARTBEAT:return null;default:return console.warn("[WIP] Unknown message type: ".concat(o.type)),null}}),a.data.error&&(0,n.jsx)(rt,{data:a.data.error}),(0,n.jsx)(St,g()({},a))]})}var At=e(83962);function _t(a){var i=a.options,o=a.cards,l=a.children,b=[[bn.ChatAnywhereI18nContextProvider,{defaultLocale:i.theme.locale}],[S,{options:i}],[At.xy,{cardConfig:o}],[Ze,{}],[ke,{}],[Z,{}],[_n,{}]];return b.reduceRight(function(R,w){var oe=J()(w,2),ne=oe[0],N=oe[1];return(0,n.jsx)(ne,g()(g()({},N),{},{children:R}))},l)}var Mt=_t;function Lt(a,i){var o=a.options,l=o===void 0?{}:o,b=(0,t.useMemo)(function(){var R=g()({AgentScopeRuntimeRequestCard:Jn,AgentScopeRuntimeResponseCard:st},l.cards);return R},[l.cards]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Mt,{options:l,cards:b,children:(0,n.jsx)(Tn,{ref:i})})})}var Dt=(0,t.forwardRef)(Lt)},56290:function(Ve,Q,e){"use strict";e.r(Q),e.d(Q,{ChatAnywhereI18nContextProvider:function(){return v},useChatAnywhereI18n:function(){return _},useTranslation:function(){return k}});var $=e(5574),g=e.n($),T=e(59214),p=e(67294),P=e(85893),E={cn:{"approval.title":"\u4EBA\u5DE5\u5E72\u9884","approval.pending":"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C","approval.confirmed":"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1","approval.canceled":"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1","approval.cancel":"\u53D6\u6D88\u6267\u884C","approval.confirm":"\u786E\u8BA4\u6267\u884C","approval.taskRunning":"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1","cancelPopover.title":"\u53D6\u6D88\u539F\u56E0","cancelPopover.placeholder":"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212","cancelPopover.cancel":"\u53D6\u6D88","cancelPopover.confirm":"\u786E\u8BA4","cancelPopover.options.notNeeded":"\u4E0D\u9700\u8981","cancelPopover.options.poorResult":"\u6548\u679C\u4E0D\u7406\u60F3","cancelPopover.options.tooSlow":"\u7B49\u5F85\u65F6\u95F4\u4E45","cancelPopover.options.wrongInput":"\u8F93\u5165\u9519\u8BEF","common.save":"\u4FDD\u5B58","common.cancel":"\u53D6\u6D88","common.confirm":"\u786E\u8BA4","common.delete":"\u5220\u9664","common.edit":"\u7F16\u8F91","common.loading":"\u52A0\u8F7D\u4E2D...","common.saveSuccess":"\u4FDD\u5B58\u6210\u529F","common.saveFailed":"\u4FDD\u5B58\u5931\u8D25","actions.regenerate":"\u91CD\u65B0\u751F\u6210","messageImport.title":"Sessions \u6570\u636E\u5BFC\u5165","messageImport.placeholder":"\u8F93\u5165 JSON \u6570\u636E\u4EE5\u8986\u76D6\u5F53\u524D sessions","messageImport.saveToLocalStorage":"\u4FDD\u5B58\u5230 LocalStorage"},en:{"approval.title":"Human Intervention","approval.pending":"Please confirm whether to execute this operation","approval.confirmed":"Confirmed to execute task","approval.canceled":"Canceled task execution","approval.cancel":"Cancel","approval.confirm":"Confirm","approval.taskRunning":"A task is currently running, cannot send new task","cancelPopover.title":"Cancel Reason","cancelPopover.placeholder":"Please enter the reason for better AI planning","cancelPopover.cancel":"Cancel","cancelPopover.confirm":"Confirm","cancelPopover.options.notNeeded":"Not needed","cancelPopover.options.poorResult":"Poor result","cancelPopover.options.tooSlow":"Too slow","cancelPopover.options.wrongInput":"Wrong input","common.save":"Save","common.cancel":"Cancel","common.confirm":"Confirm","common.delete":"Delete","common.edit":"Edit","common.loading":"Loading...","common.saveSuccess":"Saved successfully","common.saveFailed":"Failed to save","actions.regenerate":"Regenerate","messageImport.title":"Import Sessions Data","messageImport.placeholder":"Enter JSON data to override current sessions","messageImport.saveToLocalStorage":"Save to LocalStorage"}},j=(0,T.createContext)(void 0);function _(m){try{var M=(0,T.useContextSelector)(j,m);return M}catch(y){return{}}}function k(){var m=_(function(h){return h==null?void 0:h.t}),M=_(function(h){return h==null?void 0:h.locale}),y=_(function(h){return h==null?void 0:h.setLocale});return{t:m,locale:M,setLocale:y}}function v(m){var M=m.children,y=m.defaultLocale,h=y===void 0?"en":y,t=(0,p.useState)(h),x=g()(t,2),D=x[0],s=x[1],n=(0,p.useCallback)(function(u,S){var q=E[D][u]||u;return S&&Object.entries(S).forEach(function(V){var d=g()(V,2),le=d[0],K=d[1];q=q.replace(new RegExp("\\{".concat(le,"\\}"),"g"),String(K))}),q},[D]),A=(0,p.useMemo)(function(){return{locale:D,setLocale:s,t:n,messages:E[D]}},[D,s,n]);return(0,P.jsx)(j.Provider,{value:A,children:M})}Q.default=j},57551:function(){},22863:function(Ve,Q,e){"use strict";e.r(Q);var $=e(57551),g=e.n($),T={};for(var p in $)p!=="default"&&(T[p]=function(P){return $[P]}.bind(0,p));e.d(Q,T)},34487:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return Le}});var $=e(97857),g=e.n($),T=e(5574),p=e.n(T),P=e(56044),E=e(68400),j=e.n(E),_=e(9053),k,v=(0,_.vJ)(k||(k=j()([`
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
`])),function(G){return G.theme.prefixCls},function(G){return G.theme.colorBgLayout},function(G){return G.theme.colorBgLayout},function(G){return G.theme.colorFillTertiary},function(G){return G.theme.colorBgBase},function(G){return G.theme.prefixCls},function(G){return G.theme.prefixCls},function(G){return G.theme.colorBgBase},function(G){return G.theme.colorBorderSecondary},function(G){return G.theme.colorText},function(G){return G.theme.colorBorderSecondary},function(G){return G.theme.colorPrimary}),m=e(93967),M=e.n(m),y=e(55839),h=e(16494),t=e(85893);function x(G){var Te=(0,P.wv)().getPrefixCls("assets-preview-image"),Be=G.width,Qe=Be===void 0?1:Be,Ge=G.height,I=Ge===void 0?1:Ge,de=G.src;return(0,t.jsx)("div",{className:Te,style:{aspectRatio:"".concat(Qe,"/").concat(I)},children:(0,t.jsx)(y.ZP,{locale:{Image:{preview:""}},children:(0,t.jsx)(h.Z,{src:de,width:"100%",height:"100%"})})})}function D(G){return(0,t.jsx)(h.Z.PreviewGroup,{children:G.children})}var s=e(9783),n=e.n(s),A=e(13769),u=e.n(A),S=e(67294),q=e(63701),V=e(62321),d=e(32485),le=e(64057),K=["width","height","poster","src"];function W(G){var Te=(0,P.wv)().getPrefixCls("assets-preview-video"),Be=G.width,Qe=Be===void 0?1:Be,Ge=G.height,I=Ge===void 0?1:Ge,de=G.poster,De=G.src,O=u()(G,K),H=(0,S.useRef)(null),Y=(0,S.useState)(!1),ke=p()(Y,2),Ne=ke[0],Re=ke[1],Se=(0,S.useState)(0),nn=p()(Se,2),Ke=nn[0],Ze=nn[1],tn=(0,S.useState)(0),$e=p()(tn,2),Ue=$e[0],ln=$e[1],r=(0,S.useCallback)(function(He){var an=Math.floor(He/60),c=Math.floor(He%60);return"".concat(an.toString().padStart(2,"0"),":").concat(c.toString().padStart(2,"0"))},[]),Ae=(0,S.useCallback)(function(){var He=H.current;He&&(He.paused?(He.play(),Re(!0)):(He.pause(),Re(!1)))},[]),je=(0,S.useCallback)(function(){H.current&&Ze(H.current.duration)},[]),we=(0,S.useCallback)(function(){Re(!1),ln(0)},[]),Ce=(0,S.useCallback)(function(){H.current&&ln(H.current.currentTime)},[]),Xe=(0,S.useCallback)(function(He){He.stopPropagation();var an=H.current;an&&(an.requestFullscreen?an.requestFullscreen():an.webkitRequestFullscreen?an.webkitRequestFullscreen():an.msRequestFullscreen&&an.msRequestFullscreen())},[]);return(0,t.jsxs)("div",{className:Te,style:{aspectRatio:"".concat(Qe,"/").concat(I)},children:[(0,t.jsx)("video",g()(g()({},O),{},{ref:H,src:De,poster:de,preload:"metadata",onLoadedMetadata:je,onTimeUpdate:Ce,onEnded:we})),(0,t.jsxs)("div",{className:M()("".concat(Te,"-overlay"),n()({},"".concat(Te,"-overlay-playing"),1)),onClick:Ae,children:[(0,t.jsx)("div",{className:"".concat(Te,"-play-btn"),children:Ne?(0,t.jsx)(q.Z,{}):(0,t.jsx)(V.Z,{})}),(0,t.jsx)("div",{className:"".concat(Te,"-enlarge"),onClick:Xe,children:(0,t.jsx)(le.Z,{bordered:!1,size:"small",icon:(0,t.jsx)(d.Z,{})})})]}),(0,t.jsx)("div",{className:"".concat(Te,"-duration"),children:r(Ke-Ue)})]})}var J=e(20399),se=e(80162);function Pe(G){var Te=(0,P.wv)().getPrefixCls("assets-preview-audio"),Be=(0,S.useRef)(null),Qe=(0,S.useState)(!1),Ge=p()(Qe,2),I=Ge[0],de=Ge[1],De=(0,S.useState)(!1),O=p()(De,2),H=O[0],Y=O[1],ke=(0,S.useState)(0),Ne=p()(ke,2),Re=Ne[0],Se=Ne[1],nn=(0,S.useState)(0),Ke=p()(nn,2),Ze=Ke[0],tn=Ke[1],$e=(0,S.useCallback)(function(je){if(isNaN(je))return"00:00";var we=Math.floor(je/60),Ce=Math.floor(je%60);return"".concat(we.toString().padStart(2,"0"),":").concat(Ce.toString().padStart(2,"0"))},[]),Ue=(0,S.useCallback)(function(){Be.current&&(I?Be.current.pause():Be.current.play(),de(!I))},[I]),ln=(0,S.useCallback)(function(){Y(!H),Be.current&&(Be.current.muted=H)},[H]),r=(0,S.useCallback)(function(je){if(Be.current&&Ze){var we=je.currentTarget.getBoundingClientRect(),Ce=je.clientX-we.left,Xe=Ce/we.width,He=Xe*Ze;Be.current.currentTime=He,Se(He)}},[Ze]);(0,S.useEffect)(function(){var je=Be.current;if(je){var we=function(){return Se(je.currentTime)},Ce=function(){return tn(je.duration)},Xe=function(){return de(!1)};return je.addEventListener("timeupdate",we),je.addEventListener("loadedmetadata",Ce),je.addEventListener("ended",Xe),function(){je.removeEventListener("timeupdate",we),je.removeEventListener("loadedmetadata",Ce),je.removeEventListener("ended",Xe)}}},[]);var Ae=Ze?Re/Ze*100:0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("audio",{ref:Be,src:G.src,muted:H}),(0,t.jsxs)("div",{className:Te,children:[(0,t.jsx)(le.Z,{size:"small",type:"text",onClick:Ue,icon:I?(0,t.jsx)(q.Z,{}):(0,t.jsx)(V.Z,{})}),(0,t.jsx)(le.Z,{size:"small",type:"text",onClick:ln,icon:H?(0,t.jsx)(J.Z,{}):(0,t.jsx)(se.Z,{})}),(0,t.jsx)("div",{className:"".concat(Te,"-time"),children:$e(Re)}),(0,t.jsx)("div",{className:"".concat(Te,"-progress"),onClick:r,children:(0,t.jsx)("div",{className:"".concat(Te,"-progress-bar"),style:{width:"".concat(Ae,"%")}})}),(0,t.jsx)("div",{className:"".concat(Te,"-time"),children:$e(Ze)})]})]})}var C=e(16138),Me=e(83202),Z=e(90105),ie=e(82052);function te(G){var Te,Be=(0,Z.Z)(),Qe=(0,P.wv)().getPrefixCls("assets-preview"),Ge=(0,S.useRef)(null),I=G.height,de=I===void 0?144:I,De=(0,S.useState)(0),O=p()(De,2),H=O[0],Y=O[1],ke=(0,S.useRef)(0),Ne=(0,S.useState)(0),Re=p()(Ne,2),Se=Re[0],nn=Re[1],Ke=(0,S.useDeferredValue)(Se),Ze=(0,ie.Z)(Ge),tn=(0,S.useCallback)(function(r){nn(r.target.scrollLeft)},[]);(0,S.useEffect)(function(){Y(de/2-12)},[de]),(0,S.useEffect)(function(){Ge.current&&G.type!=="audio"&&(ke.current=Ge.current.scrollWidth-Ge.current.clientWidth),Be()},[G.data.length,Ze==null?void 0:Ze.width]);var $e=(0,S.useCallback)(function(r){var Ae=200;Ge.current.scrollLeft=Ge.current.scrollLeft+Ae*(r==="left"?-1:1)},[]),Ue={image:x,video:W,audio:Pe}[G.type],ln=G.data.map(function(r,Ae){return(0,t.jsx)(Ue,g()({},r),Ae)});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v,{}),(0,t.jsxs)("div",{className:M()("".concat(Qe),G.className),children:[(0,t.jsx)("div",{className:M()("".concat(Qe,"-container"),(Te=G.classNames)===null||Te===void 0?void 0:Te.container),style:G.type!=="audio"?{height:de}:{flexDirection:"column"},onScroll:tn,ref:Ge,children:G.type==="image"?(0,t.jsx)(D,{children:ln}):ln}),H&&G.type!=="audio"?(0,t.jsxs)(t.Fragment,{children:[Ke>50&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:M()("".concat(Qe,"-left-edge"))}),(0,t.jsx)(le.Z,{onClick:function(){return $e("left")},style:{top:H},className:M()("".concat(Qe,"-left-arrow"),"".concat(Qe,"-arrow")),size:"small",shape:"circle",icon:(0,t.jsx)(C.Z,{})})]}),Ke<ke.current-50&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:M()("".concat(Qe,"-right-edge"))}),(0,t.jsx)(le.Z,{onClick:function(){return $e("right")},style:{top:H},className:M()("".concat(Qe,"-right-arrow"),"".concat(Qe,"-arrow")),size:"small",shape:"circle",icon:(0,t.jsx)(Me.Z,{})})]})]}):null]})]})}var Le=te},36417:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return ln}});var $=e(9783),g=e.n($),T=e(97857),p=e.n(T),P=e(5574),E=e.n(P),j=e(13769),_=e.n(j),k=e(93967),v=e.n(k),m=e(67294),M=e(56044),y=e(56790),h=e(73935),t=m.createContext(null),x=e(85893);function D(r){var Ae=r.getDropContainer,je=r.className,we=r.prefixCls,Ce=r.children,Xe=m.useContext(t),He=Xe.disabled,an=m.useState(),c=E()(an,2),X=c[0],ee=c[1],ve=m.useState(null),he=E()(ve,2),L=he[0],ce=he[1];m.useEffect(function(){var z=Ae==null?void 0:Ae();X!==z&&ee(z)},[Ae]),m.useEffect(function(){if(X){var z=function(){ce(!0)},ae=function(fe){fe.preventDefault()},f=function(fe){fe.relatedTarget||ce(!1)},F=function(fe){ce(!1),fe.preventDefault()};return document.addEventListener("dragenter",z),document.addEventListener("dragover",ae),document.addEventListener("dragleave",f),document.addEventListener("drop",F),function(){document.removeEventListener("dragenter",z),document.removeEventListener("dragover",ae),document.removeEventListener("dragleave",f),document.removeEventListener("drop",F)}}},[!!X]);var B=Ae&&X&&!He;if(!B)return null;var re="".concat(we,"-drop-area");return(0,h.createPortal)((0,x.jsx)("div",{className:v()(re,je,g()({},"".concat(re,"-on-body"),X.tagName==="BODY")),style:{display:L?"block":"none"},children:Ce}),X)}var s=e(53033),n=e(52861),A=e(83622),u=e(29372),S=e(64599),q=e.n(S),V=function(Ae){return Ae.indexOf("image/")===0},d=200;function le(r){return new Promise(function(Ae){if(!r||!r.type||!V(r.type)){Ae("");return}var je=new Image;if(je.onload=function(){var Xe=je.width,He=je.height,an=Xe/He,c=an>1?d:d*an,X=an>1?d/an:d,ee=document.createElement("canvas");ee.width=c,ee.height=X,ee.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(c,"px; height: ").concat(X,"px; z-index: 9999; display: none;"),document.body.appendChild(ee);var ve=ee.getContext("2d");ve.drawImage(je,0,0,c,X);var he=ee.toDataURL();document.body.removeChild(ee),window.URL.revokeObjectURL(je.src),Ae(he)},je.crossOrigin="anonymous",r.type.startsWith("image/svg+xml")){var we=new FileReader;we.onload=function(){we.result&&typeof we.result=="string"&&(je.src=we.result)},we.readAsDataURL(r)}else if(r.type.startsWith("image/gif")){var Ce=new FileReader;Ce.onload=function(){Ce.result&&Ae(Ce.result)},Ce.readAsDataURL(r)}else je.src=window.URL.createObjectURL(r)})}var K=e(9361),W=e(38703);function J(r){var Ae=r.percent,je=K.Z.useToken(),we=je.token;return(0,x.jsx)(W.Z,{type:"circle",percent:Ae,size:40,strokeColor:"#FFF",trailColor:"rgba(255, 255, 255, 0.3)",format:function(Xe){return(0,x.jsxs)("span",{style:{color:"#FFF"},children:[(Xe||0).toFixed(0),"%"]})}})}var se=e(68400),Pe=e.n(se),C=e(9053),Me,Z=(0,C.vJ)(Me||(Me=Pe()([`
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
    width: 56px;
    height: 56px;
    line-height: 1;

    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      object-fit: cover;
      border-radius: 5px;
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.colorBgContainer},function(r){return r.theme.lineWidth},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.paddingXS},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.fontSize},function(r){return r.theme.colorText},function(r){return r.theme.prefixCls},function(r){return r.theme.colorTextQuaternary},function(r){return r.theme.fontSizeSM},function(r){return r.theme.prefixCls},function(r){return r.theme.opacityLoading},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.lineWidth},function(r){return r.theme.prefixCls},function(r){return r.theme.paddingXXS},function(r){return r.theme.prefixCls},function(r){return r.theme.colorText},function(r){return r.theme.colorBgContainer},function(r){return r.theme.lineWidth},function(r){return r.theme.colorBorder},function(r){return r.theme.colorError},function(r){return r.theme.prefixCls},function(r){return r.theme.colorError},function(r){return r.theme.paddingSM},function(r){return r.theme.prefixCls},function(r){return r.theme.colorPrimary}),ie=e(89102),te="\xA0",Le="#8c8c8c",G=["png","jpg","jpeg","gif","bmp","webp","svg"],Te=function(Ae){var je=Ae.url;return(0,x.jsx)("img",{src:je,width:32,height:32})},Be=[{icon:(0,x.jsx)(Te,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01cVtZXI23tPVhiZoPJ_!!6000000007313-55-tps-40-40.svg"}),color:"#22b35e",ext:["xlsx","xls"]},{icon:(0,x.jsx)(Te,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01uDnnuz1XMNEjgFMul_!!6000000002909-55-tps-40-40.svg"}),color:Le,ext:G},{icon:(0,x.jsx)(Te,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01PaXli01DDPAO68fsI_!!6000000000182-55-tps-40-40.svg"}),color:Le,ext:["md","mdx"]},{icon:(0,x.jsx)(Te,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01mB5PzD27fuIWK661W_!!6000000007825-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["pdf"]},{icon:(0,x.jsx)(Te,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01a8j7Jv1nW1QyFme7k_!!6000000005096-55-tps-40-40.svg"}),color:"#ff6e31",ext:["ppt","pptx"]},{icon:(0,x.jsx)(Te,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01XaNi8P1UkhQXoQdUL_!!6000000002556-55-tps-40-40.svg"}),color:"#1677ff",ext:["doc","docx"]},{icon:(0,x.jsx)(Te,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),color:"#fab714",ext:["zip","rar","7z","tar","gz"]},{icon:(0,x.jsx)(Te,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01zTTe0q1Xg4GkZgJol_!!6000000002952-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["mp4","avi","mov","wmv","flv","mkv"]},{icon:(0,x.jsx)(Te,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01qOBdXG1UpHO6f3Vvc_!!6000000002566-55-tps-40-40.svg"}),color:"#8c8c8c",ext:["mp3","wav","flac","ape","aac","ogg"]}];function Qe(r,Ae){return Ae.some(function(je){return r.toLowerCase()===".".concat(je)})}function Ge(r){for(var Ae=r,je=["B","KB","MB","GB","TB","PB","EB"],we=0;Ae>=1024&&we<je.length-1;)Ae/=1024,we++;return"".concat(Ae.toFixed(0)," ").concat(je[we])}function I(r,Ae){var je=(0,M.wv)(),we=je.getPrefixCls,Ce=r.item,Xe=r.onRemove,He=r.className,an=r.style,c=m.useContext(t),X=c||{},ee=X.disabled,ve=Ce.name,he=Ce.size,L=Ce.percent,ce=Ce.status,B=ce===void 0?"done":ce,re=Ce.description,z=we("attachment"),ae="".concat(z,"-list-card"),f=m.useMemo(function(){var sn=ve||"",mn=sn.match(/^(.*)\.[^.]+$/);return mn?[mn[1],sn.slice(mn[1].length)]:[sn,""]},[ve]),F=E()(f,2),U=F[0],fe=F[1],Ie=m.useMemo(function(){return Qe(fe,G)},[fe]),Fe=m.useMemo(function(){return re||(B==="uploading"?"".concat(L||0,"%"):B==="error"?Ce.response||te:he?Ge(he):te)},[B,L]),be=m.useMemo(function(){var sn=q()(Be),mn;try{for(sn.s();!(mn=sn.n()).done;){var An=mn.value,Cn=An.ext,_n=An.icon,Dn=An.color;if(Qe(fe,Cn))return[_n,Dn]}}catch(En){sn.e(En)}finally{sn.f()}return[(0,x.jsx)(Te,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"},"defaultIcon"),Le]},[fe]),Ye=E()(be,2),qe=Ye[0],ge=Ye[1],en=m.useState(),vn=E()(en,2),jn=vn[0],pn=vn[1];m.useEffect(function(){if(Ce.originFileObj){var sn=!0;return le(Ce.originFileObj).then(function(mn){sn&&pn(mn)}),function(){sn=!1}}pn(void 0)},[Ce.originFileObj]);var Ln=null,hn=Ce.thumbUrl||Ce.url||jn,xn=r.renderType||"default",on=Ie&&(Ce.originFileObj||hn)&&xn==="default";return on?Ln=(0,x.jsxs)(x.Fragment,{children:[hn&&(0,x.jsx)("img",{alt:"preview",src:hn}),B!=="done"&&(0,x.jsxs)("div",{className:"".concat(ae,"-img-mask"),children:[B==="uploading"&&L!==void 0&&(0,x.jsx)(J,{percent:L,prefixCls:ae}),B==="error"&&(0,x.jsx)("div",{className:"".concat(ae,"-desc"),children:(0,x.jsx)("div",{className:"".concat(ae,"-ellipsis-prefix"),children:Fe})})]})]}):Ln=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"".concat(ae,"-icon"),style:{color:ge},children:qe}),(0,x.jsxs)("div",{className:"".concat(ae,"-content"),children:[(0,x.jsxs)("div",{className:"".concat(ae,"-name"),children:[U!=null?U:te,fe]}),(0,x.jsx)("div",{className:"".concat(ae,"-desc"),children:(0,x.jsx)("div",{className:"".concat(ae,"-ellipsis-prefix"),children:Fe})})]})]}),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Z,{}),(0,x.jsxs)("div",{className:v()(ae,g()(g()(g()(g()(g()({},"".concat(ae,"-status-").concat(B),B),"".concat(ae,"-type-preview"),on),"".concat(ae,"-type-overview"),!on),"".concat(ae,"-type-").concat(xn),!0),"".concat(ae,"-hoverable"),!ee&&Xe),He),style:an,ref:Ae,children:[Ln,(0,x.jsx)("button",{style:{opacity:!ee&&Xe?1:0},className:"".concat(ae,"-remove"),onClick:function(){!ee&&Xe&&Xe(Ce)},children:(0,x.jsx)(ie.Z,{})})]})]})}var de=m.forwardRef(I),De=1;function O(r){var Ae=r.prefixCls,je=r.items,we=r.onRemove,Ce=r.overflow,Xe=r.listClassName,He=r.listStyle,an=r.itemClassName,c=r.itemStyle,X="".concat(Ae,"-list"),ee=m.useRef(null),ve=m.useState(!1),he=E()(ve,2),L=he[0],ce=he[1];m.useEffect(function(){return ce(!0),function(){ce(!1)}},[]);var B=m.useState(!1),re=E()(B,2),z=re[0],ae=re[1],f=m.useState(!1),F=E()(f,2),U=F[0],fe=F[1],Ie=function(){var ge=ee.current;ge&&(Ce==="scrollX"?(ae(Math.abs(ge.scrollLeft)>=De),fe(ge.scrollWidth-ge.clientWidth-Math.abs(ge.scrollLeft)>=De)):Ce==="scrollY"&&(ae(ge.scrollTop!==0),fe(ge.scrollHeight-ge.clientHeight!==ge.scrollTop)))};m.useEffect(function(){Ie()},[Ce]);var Fe=function(ge){var en=ee.current;en&&en.scrollTo({left:en.scrollLeft+ge*en.clientWidth,behavior:"smooth"})},be=function(){Fe(-1)},Ye=function(){Fe(1)};return(0,x.jsxs)("div",{className:v()(X,g()(g()(g()({},"".concat(X,"-overflow-").concat(r.overflow),Ce),"".concat(X,"-overflow-ping-start"),z),"".concat(X,"-overflow-ping-end"),U),Xe),ref:ee,onScroll:Ie,style:He,children:[(0,x.jsx)(u.V4,{keys:je.map(function(qe){return{key:qe.uid,item:qe}}),motionName:"".concat(X,"-card-motion"),component:!1,motionAppear:L,motionLeave:!0,motionEnter:!0,children:function(ge){var en=ge.key,vn=ge.item,jn=ge.className,pn=ge.style;return(0,x.jsx)(de,{prefixCls:Ae,item:vn,onRemove:we,className:v()(jn,an),style:p()(p()({},pn),c),renderType:r.renderType},en)}}),Ce==="scrollX"&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(A.ZP,{size:"small",shape:"circle",className:"".concat(X,"-prev-btn"),icon:(0,x.jsx)(s.Z,{}),onClick:be}),(0,x.jsx)(A.ZP,{size:"small",shape:"circle",className:"".concat(X,"-next-btn"),icon:(0,x.jsx)(n.Z,{}),onClick:Ye})]})]})}var H=e(86250),Y=e(21317),ke=e(41154);function Ne(r,Ae){var je=r.prefixCls,we=r.placeholder,Ce=we===void 0?{}:we,Xe=r.upload,He=r.className,an=r.style,c="".concat(je,"-placeholder"),X=Ce||{},ee=m.useContext(t),ve=ee.disabled,he=m.useState(!1),L=E()(he,2),ce=L[0],B=L[1],re=function(){B(!0)},z=function(U){U.currentTarget.contains(U.relatedTarget)||B(!1)},ae=function(){B(!1)},f=m.isValidElement(Ce)?Ce:(0,x.jsxs)(H.Z,{align:"center",justify:"center",vertical:!0,className:"".concat(c,"-inner"),children:[(0,x.jsx)(Y.default.Text,{className:"".concat(c,"-icon"),children:X.icon}),(0,x.jsx)(Y.default.Title,{className:"".concat(c,"-title"),level:5,children:X.title}),(0,x.jsx)(Y.default.Text,{className:"".concat(c,"-description"),type:"secondary",children:X.description})]});return(0,x.jsx)("div",{className:v()(c,g()(g()({},"".concat(c,"-drag-in"),ce),"".concat(c,"-disabled"),ve),He),onDragEnter:re,onDragLeave:z,onDrop:ae,"aria-hidden":ve,style:an,children:(0,x.jsx)(ke.Z.Dragger,p()(p()({showUploadList:!1},Xe),{},{ref:Ae,style:{padding:0,border:0,background:"transparent"},children:f}))})}var Re=m.forwardRef(Ne);function Se(r,Ae){var je=r.children,we=r.upload,Ce=r.rootClassName,Xe=m.useRef(null);return m.useImperativeHandle(Ae,function(){return Xe.current}),(0,x.jsx)(ke.Z,p()(p()({},we),{},{showUploadList:!1,rootClassName:Ce,ref:Xe,children:je}))}var nn=m.forwardRef(Se),Ke,Ze=(0,C.vJ)(Ke||(Ke=Pe()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.zIndexPopupBase},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.lineWidthBold},function(r){return r.theme.padding},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorPrimaryHover},function(r){return r.theme.prefixCls},function(r){return r.theme.paddingXXS},function(r){return r.theme.fontSizeHeading2},function(r){return r.theme.prefixCls},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.colorText},function(r){return r.theme.padding},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSizeHeading2},function(r){return r.theme.boxShadowTertiary},function(r){return r.theme.padding},function(r){return r.theme.padding},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls}),tn=["prefixCls","rootClassName","rootStyle","className","style","items","children","getDropContainer","placeholder","onChange","overflow","disabled","classNames","styles"];function $e(r,Ae){var je=r.prefixCls,we=r.rootClassName,Ce=r.rootStyle,Xe=r.className,He=r.style,an=r.items,c=r.children,X=r.getDropContainer,ee=r.placeholder,ve=r.onChange,he=r.overflow,L=r.disabled,ce=r.classNames,B=ce===void 0?{}:ce,re=r.styles,z=re===void 0?{}:re,ae=_()(r,tn),f=(0,M.wv)(),F=f.direction,U=f.getPrefixCls,fe=U("attachment"),Ie=m.useRef(null),Fe=m.useRef(null);m.useImperativeHandle(Ae,function(){return{nativeElement:Ie.current,upload:function(on){var sn,mn=(sn=Fe.current)===null||sn===void 0||(sn=sn.nativeElement)===null||sn===void 0?void 0:sn.querySelector('input[type="file"]');if(mn){var An=new DataTransfer;An.items.add(on),mn.files=An.files,mn.dispatchEvent(new Event("change",{bubbles:!0}))}}}});var be=(0,y.C8)([],{value:an}),Ye=E()(be,2),qe=Ye[0],ge=Ye[1],en=(0,y.zX)(function(xn){ge(xn.fileList),ve==null||ve(xn)}),vn=p()(p()({},ae),{},{fileList:qe,onChange:en}),jn=function(on){var sn=qe.filter(function(mn){return mn.uid!==on.uid});en({file:on,fileList:sn})},pn,Ln=function(on,sn,mn){var An=typeof ee=="function"?ee(on):ee;return(0,x.jsx)(Re,{placeholder:An,upload:vn,prefixCls:fe,className:v()(B.placeholder),style:p()(p()({},z.placeholder),sn==null?void 0:sn.style),ref:mn})};if(c)pn=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(nn,{upload:vn,rootClassName:we,ref:Fe,children:c}),(0,x.jsx)(D,{getDropContainer:X,prefixCls:fe,className:v()(we),children:Ln("drop")})]});else{var hn=qe.length>0;pn=(0,x.jsxs)("div",{className:v()(fe,g()({},"".concat(fe,"-rtl"),F==="rtl"),Xe,we),style:p()(p()({},Ce),He),dir:F||"ltr",ref:Ie,children:[(0,x.jsx)(O,{prefixCls:fe,items:qe,onRemove:jn,overflow:he,upload:vn,listClassName:v()(B.list),listStyle:p()(p()({},z.list),!hn&&{display:"none"}),itemClassName:v()(B.item),itemStyle:p()({},z.item),renderType:r.renderType}),Ln("inline",hn?{style:{display:"none"}}:{},Fe)]})}return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Ze,{}),(0,x.jsx)(t.Provider,{value:{disabled:L},children:pn})]})}var Ue=m.forwardRef($e);Ue.FileCard=de;var ln=Ue},50130:function(Ve,Q,e){"use strict";e.d(Q,{L:function(){return M},Z:function(){return m}});var $=e(97857),g=e.n($),T=e(13769),p=e.n(T),P=e(67294),E=e(83962),j=e(76289),_=e(85893),k=["component"],v=P.memo(function(y){var h=(0,E.HJ)(),t=(0,j.TQ)(function(n){return n.onInput}),x=(0,P.useMemo)(function(){if(y.component)return y.component;var n=h;return(n==null?void 0:n[y.code])||function(){return"".concat(y.code," not found")}},[]);if(typeof x=="function"){var D=y.component,s=p()(y,k);return(0,_.jsx)(x,g()(g()({},s),{},{context:{onInput:t}}))}else return x});function m(y){var h=y.cards;return h!=null&&h.length?h.map(function(t,x){var D=(0,_.jsx)(v,g()({index:x,id:y.id,isLast:y.isLast},t),(t==null?void 0:t.id)||x+t.code);return t.code==="Text"?(0,_.jsx)("div",{className:y.className,children:D},x):D}):null}function M(y,h){return{code:y,data:h}}},67369:function(Ve,Q,e){"use strict";e.d(Q,{p4:function(){return M},hw:function(){return y},ZP:function(){return m}});var $=e(67294),g=e(56044),T=e(64057),p=e(68400),P=e.n(p),E=e(9053),j,_=(0,E.vJ)(j||(j=P()([`
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
`])),function(h){return h.theme.prefixCls},function(h){return h.theme.prefixCls},function(h){return h.theme.colorText},function(h){return h.theme.prefixCls},function(h){return h.theme.colorTextTertiary},function(h){return h.theme.colorBorder}),k=_,v=e(85893);function m(h){var t=(0,g.wv)(),x=t.getPrefixCls,D=x("bubble-footer"),s=h.left,n=h.right;return s&&!s.type||n&&!n.type?null:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(k,{}),(0,v.jsxs)("div",{className:D,children:[(0,v.jsx)("div",{className:"".concat(D,"-left"),children:h.left}),(0,v.jsx)("div",{className:"".concat(D,"-right"),children:h.right})]})]})}function M(h){var t=(0,g.wv)(),x=t.getPrefixCls,D=x("bubble-footer-actions");return(0,v.jsx)("div",{className:D,children:h.data.map(function(s,n){return s.children?$.cloneElement(s.children,{key:n}):(0,v.jsx)(T.Z,{bordered:!1,icon:s.icon,size:"small",onClick:s.onClick},n)})})}function y(h){var t=(0,g.wv)(),x=t.getPrefixCls,D=x("bubble-footer-count");return(0,v.jsx)("div",{className:D,children:h.data.map(function(s){return(0,v.jsxs)("div",{className:"".concat(D,"-item"),children:[s[0],"\uFF1A",s[1]]},s[0])})})}m.Actions=M,m.Count=y},10146:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return v}});var $=e(68400),g=e.n($),T=e(9053),p=e(56044),P=e(9343),E=e(36674),j=e(85893),_,k=(0,T.vJ)(_||(_=g()([`
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

`])),function(m){return m.theme.prefixCls},function(m){return m.theme.colorFillSecondary},function(m){return m.theme.prefixCls},function(m){return m.theme.prefixCls},function(m){return m.theme.colorText},function(m){return m.theme.colorError});function v(m){var M=m.title,y=M===void 0?"Answers have stopped":M,h=m.type,t=h===void 0?"interrupted":h,x=m.desc,D=(0,p.wv)(),s=D.getPrefixCls,n=s("interrupted");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(k,{}),(0,j.jsxs)("div",{className:"".concat(n),children:[(0,j.jsxs)("div",{className:"".concat(n,"-header"),children:[(0,j.jsx)("div",{className:"".concat(n,"-icon-wrapper"),children:t==="interrupted"?(0,j.jsx)(P.Z,{className:"".concat(n,"-header-interrupted")}):(0,j.jsx)(E.Z,{className:"".concat(n,"-header-error")})}),(0,j.jsx)("span",{children:y})]}),x&&(0,j.jsx)("div",{className:"".concat(n,"-desc"),children:x})]})]})}},9146:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return Ge}});var $=e(97857),g=e.n($),T=e(93967),p=e.n(T),P=e(67294),E=e(68400),j=e.n(E),_=e(9053),k,v=(0,_.vJ)(k||(k=j()([`
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
`])),function(I){return I.theme.prefixCls},function(I){return I.theme.prefixCls},function(I){return I.theme.colorText},function(I){return I.theme.fontSize},function(I){return I.theme.lineHeight},function(I){return I.theme.prefixCls},function(I){return I.theme.borderRadiusLG},function(I){return I.theme.colorPrimaryBg},function(I){return I.theme.prefixCls},function(I){return I.theme.colorText},function(I){return I.theme.colorText},function(I){return I.theme.colorBgBase},function(I){return I.theme.colorBgBase},function(I){return I.theme.colorTextTertiary},function(I){return I.theme.colorTextTertiary},function(I){return I.theme.colorBgBase},function(I){return I.theme.colorBgBase},function(I){return I.theme.colorTextSecondary},function(I){return I.theme.colorTextSecondary},function(I){return I.theme.colorBgBase},function(I){return I.theme.colorBgBase}),m=e(56044),M=e(66109),y=e(50130),h=e(85893);function t(){var I=(0,m.wv)(),de=I.getPrefixCls,De=de("bubble-loading");return(0,h.jsxs)("div",{className:De,children:[(0,h.jsx)("div",{className:"".concat(De,"-dot1")}),(0,h.jsx)("div",{className:"".concat(De,"-dot2")}),(0,h.jsx)("div",{className:"".concat(De,"-dot3")}),(0,h.jsx)("div",{className:"".concat(De,"-text"),children:"-"})]})}var x=e(9783),D=e.n(x),s=e(68997),n=function(de){var De=de.avatar,O=de.msgStatus,H=de.isAssistant,Y=de.prefixCls,ke=de.className,Ne=de.style,Re=P.isValidElement(De)?De:(0,h.jsx)(s.Z,g()({},De));return(0,h.jsx)("div",{className:p()("".concat(Y,"-avatar"),D()({},"".concat(Y,"-avatar-loading"),H&&O==="generating"),ke),style:Ne,children:Re})},A=n,u=P.createContext({}),S=function(de){var De=de.isLast,O=de.className,H=de.rootClassName,Y=de.style,ke=de.classNames,Ne=ke===void 0?{}:ke,Re=de.styles,Se=Re===void 0?{}:Re,nn=de.avatar,Ke=de.content,Ze=Ke===void 0?"":Ke,tn=de.cards,$e=de.msgStatus,Ue=de.id,ln=de.role,r=de.variant,Ae={assistant:"start",user:"end"}[ln]||"start",je=(0,m.wv)(),we=je.getPrefixCls,Ce=we("bubble"),Xe=p()(Ce,H,O,"".concat(Ce,"-").concat(Ae)),He,an=!(Ze!=null&&Ze.length)&&!(tn!=null&&tn.length);de.msgStatus==="generating"&&an?He=(0,h.jsx)(t,{}):He=Ze?(0,h.jsx)(M.Z,{content:Ze,cursor:de.msgStatus==="generating"}):null;var c=Ae==="assistant"||Ae==="start",X="".concat(Ce,"-content-").concat(r||(c?"borderless":"filled")),ee=(0,h.jsxs)("div",{style:!c&&He?{flexDirection:"column-reverse"}:{},className:"".concat(Ce,"-content-wrapper"),children:[(0,h.jsx)(y.Z,{cards:tn,id:Ue,isLast:De,className:p()("".concat(Ce,"-content"),"".concat(Ce,"-content-wrapper-card"),X,Ne.content)}),He&&(0,h.jsx)("div",{style:g()({},Se.content),className:p()("".concat(Ce,"-content"),"".concat(Ce,"-content-wrapper-card"),X,Ne.content),children:He})]});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{}),(0,h.jsxs)("div",{style:Y,className:Xe,id:Ue,"data-role":ln,children:[nn&&(0,h.jsx)(A,{avatar:nn,msgStatus:$e,isAssistant:c,prefixCls:Ce,className:Ne.avatar,style:Se.avatar}),ee]})]})},q=P.memo(S),V=e(13769),d=e.n(V),le=e(5574),K=e.n(le),W=e(80322),J=e(64057),se=e(25109),Pe=function(de,De){var O=(0,m.wv)(),H=O.getPrefixCls,Y=(0,W.a)(),ke=Y.isAtBottom,Ne=Y.scrollToBottom;P.useImperativeHandle(De,function(){return{scrollToBottom:function(Se){function nn(Ke){return Se.apply(this,arguments)}return nn.toString=function(){return Se.toString()},nn}(function(Se){Se=Se||{animation:"instant"},Ne(Se)})}});var Re=H("bubble-list-scroll-to-bottom");return(0,h.jsx)("div",{className:p()(Re,"".concat(Re,"-").concat(ke?"hide":"show")),children:(0,h.jsx)(J.Z,{icon:(0,h.jsx)(se.Z,{}),shape:"circle",onClick:function(){return Ne({animation:"instant"})}})})},C=P.forwardRef(Pe),Me,Z=(0,_.vJ)(Me||(Me=j()([`
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
`])),function(I){return I.theme.prefixCls},function(I){return I.theme.prefixCls},function(I){return I.theme.prefixCls},function(I){return I.theme.colorPrimaryBorder},function(I){return I.theme.colorPrimaryBg},function(I){return I.theme.colorPrimary}),ie=e(78234),te=["key"],Le=function(de,De){var O,H,Y=de.items,ke=Y===void 0?[]:Y,Ne=de.smooth,Re=Ne===void 0?!0:Ne,Se=(0,P.useState)(!1),nn=K()(Se,2),Ke=nn[0],Ze=nn[1],tn=P.useRef(),$e=(0,m.wv)(),Ue=$e.getPrefixCls,ln=Ue("bubble-list");P.useImperativeHandle(De,function(){return{scrollToBottom:function(){tn.current.scrollToBottom()}}}),(0,ie.Z)(function(){Ze(!0)});var r=Ke&&Re?"smooth":"instant";return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Z,{}),(0,h.jsxs)(W.h,{id:de.id,className:p()("".concat(ln,"-wrapper"),(O=de.classNames)===null||O===void 0?void 0:O.wrapper),resize:r,initial:"instant",style:de.style,children:[(0,h.jsx)(W.h.Content,{className:p()("".concat(ln),(H=de.classNames)===null||H===void 0?void 0:H.list),children:de.children?de.children:ke.map(function(Ae,je){var we=Ae.key,Ce=d()(Ae,te),Xe=je===ke.length-1;return(0,P.createElement)(q,g()(g()({},Ce),{},{isLast:Xe,key:Ce.id||we}))})}),(0,h.jsx)(C,{ref:tn})]})]})},G=P.forwardRef(Le),Te=G,Be=e(67369),Qe=e(10146);q.List=Te,q.Spin=t,q.Footer=Be.ZP,q.Interrupted=Qe.Z;var Ge=q},76289:function(Ve,Q,e){"use strict";e.d(Q,{TQ:function(){return h},vi:function(){return M}});var $=e(97857),g=e.n($),T=e(13769),p=e.n(T),P=e(5574),E=e.n(P),j=e(67294),_=e(79785),k=e(59214),v=e(85893),m=["children"];function M(t){var x=(0,_.Z)([]),D=E()(x,3),s=D[0],n=D[1],A=D[2],u=(0,_.Z)("0"),S=E()(u,3),q=S[0],V=S[1],d=S[2],le=(0,_.Z)(0),K=E()(le,3),W=K[0],J=K[1],se=K[2],Pe=(0,_.Z)([]),C=E()(Pe,3),Me=C[0],Z=C[1],ie=C[2],te=(0,_.Z)(!1),Le=E()(te,3),G=Le[0],Te=Le[1],Be=Le[2],Qe=(0,_.Z)(!1),Ge=E()(Qe,3),I=Ge[0],de=Ge[1],De=Ge[2],O=(0,_.Z)(!0),H=E()(O,3),Y=H[0],ke=H[1],Ne=H[2],Re=t.children,Se=p()(t,m),nn=g()({sessionList:s,setSessionList:n,getSessionList:A,currentSessionKey:q,setCurrentSessionKey:V,getCurrentSessionKey:d,messages:Me,setMessages:Z,getMessages:ie,loading:G,setLoading:Te,getLoading:Be,disabled:I,setDisabled:de,getDisabled:De,sessionListShow:Y,setSessionListShow:ke,getSessionListShow:Ne,currentRegenerateIndex:W,setCurrentRegenerateIndex:J,getCurrentRegenerateIndex:se},Se);return(0,v.jsx)(y.Provider,{value:nn,children:Re})}var y=(0,k.createContext)(void 0);function h(t){try{var x=(0,k.useContextSelector)(y,t);return x}catch(D){return{}}}},37254:function(Ve,Q,e){"use strict";e.d(Q,{G:function(){return g}});var $=e(76289);function g(){var T=(0,$.TQ)(function(v){return{loading:v.loading,getLoading:v.getLoading,disabled:v.disabled,getDisabled:v.getDisabled,setLoading:v.setLoading,setDisabled:v.setDisabled}}),p=T.loading,P=T.disabled,E=T.setLoading,j=T.setDisabled,_=T.getLoading,k=T.getDisabled;return{loading:p,disabled:P,setLoading:E,setDisabled:j,getLoading:_,getDisabled:k}}},4421:function(Ve,Q,e){"use strict";e.d(Q,{y:function(){return j}});var $=e(19632),g=e.n($),T=e(97857),p=e.n(T),P=e(67294),E=e(76289);function j(){var _=(0,E.TQ)(function(x){return{messages:x.messages,setMessages:x.setMessages,getMessages:x.getMessages}}),k=_.messages,v=_.setMessages,m=_.getMessages,M=P.useCallback(function(){var x,D=((x=arguments.length<=0?void 0:arguments[0])===null||x===void 0?void 0:x.id)||(arguments.length<=0?void 0:arguments[0]),s=(arguments.length<=1?void 0:arguments[1])||(arguments.length<=0?void 0:arguments[0]);v==null||v(function(n){var A=n.findIndex(function(S){return S.id===D});if(A>-1){var u=p()(p()({},n[A]),s);return[].concat(g()(n.slice(0,A)),[u],g()(n.slice(A+1)))}else return[].concat(g()(n),[s])})},[]),y=P.useCallback(function(x){v(function(D){return D.filter(function(s){return s.id!==x.id})})},[]),h=P.useCallback(function(){v([])},[]),t=P.useCallback(function(x){return m().find(function(D){return D.id===x})},[]);return{messages:k,getMessage:t,setMessages:v,getMessages:m,updateMessage:M,removeMessage:y,removeAllMessages:h}}},61316:function(Ve,Q,e){"use strict";e.d(Q,{x:function(){return k}});var $=e(97857),g=e.n($),T=e(19632),p=e.n(T),P=e(67294),E=e(76289),j=e(88773),_=e(73935);function k(){var v=(0,E.TQ)(function(W){return{getCurrentSessionKey:W.getCurrentSessionKey,currentRegenerateIndex:W.currentRegenerateIndex,setCurrentRegenerateIndex:W.setCurrentRegenerateIndex,getCurrentRegenerateIndex:W.getCurrentRegenerateIndex,sessionListShow:W.sessionListShow,setSessionListShow:W.setSessionListShow,sessionList:W.sessionList,setSessionList:W.setSessionList,currentSessionKey:W.currentSessionKey,setCurrentSessionKey:W.setCurrentSessionKey,getSessionList:W.getSessionList}}),m=v.getCurrentSessionKey,M=v.sessionList,y=v.setSessionList,h=v.currentSessionKey,t=v.setCurrentSessionKey,x=v.sessionListShow,D=v.setSessionListShow,s=v.currentRegenerateIndex,n=v.setCurrentRegenerateIndex,A=v.getCurrentRegenerateIndex,u=v.getSessionList,S=P.useCallback(function(){var W=(0,j.Z)(),J={label:Date.now().toString(),key:W,messages:[[]]};return _.flushSync(function(){y(function(se){var Pe=[].concat(p()(se),[J]);return Pe}),t(W)}),W},[]),q=P.useCallback(function(W){y(function(J){var se=J.filter(function(Pe){return Pe.key!==W});return se})},[]),V=P.useCallback(function(W){var J=m(),se=A();y(function(Pe){return Pe.map(function(C){return C.key===J?(C.messages[se]=W,g()({},C)):C})})},[]),d=P.useCallback(function(W,J){var se;return(se=u().find(function(Pe){return Pe.key===W}))===null||se===void 0?void 0:se.messages[J]},[]),le=P.useCallback(function(){return{sessionList:u(),currentSessionKey:m(),currentRegenerateIndex:A()}},[]),K=P.useCallback(function(W){var J=W.sessionList,se=W.currentSessionKey,Pe=W.currentRegenerateIndex;y(J),t(se),n(Pe)},[]);return{currentRegenerateIndex:s,setCurrentRegenerateIndex:n,getCurrentRegenerateIndex:A,sessionList:M,setSessionList:y,getSessionList:u,currentSessionKey:h,setCurrentSessionKey:t,sessionListShow:x,setSessionListShow:D,createSession:S,deleteSession:q,updateSessionMessages:V,getMessagesBySession:d,getSession:le,updateSession:K}}},29041:function(Ve,Q,e){"use strict";e.d(Q,{ZP:function(){return he}});var $=e(97857),g=e.n($),T=e(13769),p=e.n(T),P=e(5574),E=e.n(P),j=e(67294),_=e(93967),k=e.n(_),v=e(56044),m=e(85265),M=e(17909),y=e(76289),h=e(68400),t=e.n(h),x=e(9053),D,s=(0,x.vJ)(D||(D=t()([`

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
`])),function(L){return L.theme.prefixCls},function(L){return L.theme.fontFamily},function(L){return L.theme.colorBgBase},function(L){return L.theme.colorBgBase},function(L){return L.theme.colorBgBase},function(L){return L.theme.colorFillTertiary}),n=e(85893);function A(L){var ce=(0,y.TQ)(function(U){return{sessionListShow:U.sessionListShow,setSessionListShow:U.setSessionListShow}}),B=ce.sessionListShow,re=ce.setSessionListShow,z=(0,v.wv)(),ae=z.getPrefixCls,f=ae("chat-anywhere-layout"),F=S();return(0,j.useEffect)(function(){re(!F)},[F]),L.left?F?(0,n.jsx)(m.Z,{width:"80vw",styles:{body:{padding:0}},open:B,onClose:function(){re(!1)},title:null,closable:!1,placement:"left",children:(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:L.left})}):(0,n.jsx)("div",{className:k()("".concat(f,"-left"),B?"":"".concat(f,"-left-hide")),children:L.left}):null}function u(L){var ce=(0,v.wv)(),B=ce.getPrefixCls,re=B("chat-anywhere-layout"),z=(0,y.TQ)(function(ae){return ae.uiConfig});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{}),(0,n.jsx)("div",{className:re,children:(0,n.jsxs)("div",{className:"".concat(re,"-main"),children:[(0,n.jsx)(A,g()({},L)),(0,n.jsxs)("div",{className:"".concat(re,"-right"),style:{background:z==null?void 0:z.background},children:[L.top,L.right]})]})})]})}var S=function(){var ce=(0,M.Z)(),B=(0,y.TQ)(function(re){return re.uiConfig});return!ce.md||(B==null?void 0:B.narrowScreen)},q=e(9368),V=e(64057),d=e(21403),le=e(61316),K=e(4421),W,J=(0,x.vJ)(W||(W=t()([`
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

`])),function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls}),se=e(50287),Pe=e(67392),C=e(13660),Me=e(12624);function Z(){var L=(0,v.wv)(),ce=L.getPrefixCls,B=ce("chat-anywhere-session-list"),re=(0,y.TQ)(function(z){return z.sessionListShow});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(J,{}),(0,n.jsxs)("div",{className:k()("".concat(B),re?"":"".concat(B,"-hide")),children:[(0,n.jsx)(te,{}),(0,n.jsx)(ie,{})]})]})}function ie(){var L=(0,v.wv)(),ce=L.getPrefixCls,B=ce("chat-anywhere-session-list"),re=(0,le.x)(),z=re.currentSessionKey,ae=re.setCurrentSessionKey,f=re.currentRegenerateIndex,F=re.sessionList,U=re.getMessagesBySession,fe=re.setSessionListShow,Ie=(0,K.y)(),Fe=Ie.setMessages,be=(0,y.TQ)(function(ge){return ge.getLoading}),Ye=(0,y.TQ)(function(ge){return ge.onSessionKeyChange}),qe=S();return(0,j.useEffect)(function(){var ge=U(z,f);Fe(ge)},[z,f]),(0,n.jsx)("div",{className:"".concat(B,"-session"),children:(0,n.jsx)(q.Z,{menu:[{key:"delete",icon:(0,n.jsx)(se.Z,{}),danger:!0,onClick:function(en){}}],activeKey:z,items:F,onActiveChange:function(en){be()||(qe&&fe(!1),requestIdleCallback(function(){ae(en),Ye(en)}))}})})}function te(){var L=(0,v.wv)(),ce=L.getPrefixCls,B=ce("chat-anywhere-session-list"),re=(0,le.x)(),z=re.currentSessionKey,ae=re.setCurrentSessionKey,f=re.deleteSession,F=re.createSession,U=re.sessionList,fe=re.sessionListShow,Ie=re.setSessionListShow,Fe=(0,y.TQ)(function(Ye){return Ye.uiConfig}),be=S();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(B,"-logo"),children:[Fe==null?void 0:Fe.logo,(0,n.jsx)(V.Z,{bordered:!1,onClick:function(){return Ie(!fe)},icon:fe?(0,n.jsx)(Pe.Z,{}):(0,n.jsx)(C.Z,{})})]}),(0,n.jsx)("div",{className:"".concat(B,"-adder"),children:(0,n.jsx)(d.Z,{type:"primary",block:!0,icon:(0,n.jsx)(Me.Z,{}),onClick:function(){be&&Ie(!1),F()},children:"New Session"})})]})}var Le=e(9783),G=e.n(Le),Te=e(9146),Be=e(19632),Qe=e.n(Be),Ge=e(52677),I=e.n(Ge),de=e(15009),De=e.n(de),O=e(99289),H=e.n(O),Y=e(41154),ke=e(66672),Ne=e(36417),Re=e(37254),Se,nn=(0,x.vJ)(Se||(Se=t()([`
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
`])),function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls}),Ke=e(86578),Ze=e(7654),tn=e(92053),$e=e(86250),Ue=["trigger"];function ln(L){var ce=L.uploadPropsList,B=(0,v.wv)(),re=B.getPrefixCls,z=re("chat-anywhere-sender"),ae=(0,j.useState)(!1),f=E()(ae,2),F=f[0],U=f[1],fe=(0,j.useRef)([]),Ie=(0,j.useMemo)(function(){return ce.map(function(be,Ye){return(0,n.jsx)("div",{onClick:function(){var ge;(ge=fe.current[Ye])===null||ge===void 0||ge.click(),U(!1)},children:be.trigger},Ye)})},[ce]),Fe=(0,j.useMemo)(function(){return ce.map(function(be,Ye){var qe=be.trigger,ge=p()(be,Ue);return(0,n.jsx)(Y.Z,g()(g()({},ge),{},{children:(0,n.jsx)("div",{ref:function(vn){return fe.current[Ye]=vn}})}),Ye)})},[ce]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ze.Z,{placement:"bottomLeft",open:F,onOpenChange:U,content:(0,n.jsx)($e.Z,{vertical:!0,children:Ie}),trigger:"click",styles:{body:{padding:4}},children:(0,n.jsx)(V.Z,{icon:(0,n.jsx)(tn.Z,{}),bordered:!1})}),(0,n.jsx)("div",{className:"".concat(z,"-upload-hidden-nodes"),children:Fe})]})}var r=(0,j.forwardRef)(function(L,ce){var B=j.useState(""),re=E()(B,2),z=re[0],ae=re[1],f=(0,Re.G)(),F=(0,y.TQ)(function(rn){return rn.onUpload.map(function(Je){return g()(g()({},Je),{},{disabled:Je.disabled||f.disabled})})}),U=new Array((F==null?void 0:F.length)||0).fill([]),fe=(0,j.useState)(!1),Ie=E()(fe,2),Fe=Ie[0],be=Ie[1],Ye=j.useState(U),qe=E()(Ye,2),ge=qe[0],en=qe[1],vn=(0,j.useRef)(U);(0,j.useEffect)(function(){en(U)},[U.length]),(0,j.useEffect)(function(){vn.current=ge},[ge]);var jn=(0,y.TQ)(function(rn){return rn.uiConfig}),pn=(0,v.wv)(),Ln=pn.getPrefixCls,hn=Ln("chat-anywhere-sender"),xn=(0,y.TQ)(function(rn){return rn.onStop}),on=(0,y.TQ)(function(rn){var Je={beforeUI:void 0,afterUI:void 0,morePrefixActions:void 0,maxLength:void 0,zoomable:!0,beforeSubmit:function(){return Promise.resolve(!0)},header:[],enableFocusExpand:!1,variant:"default",hide:!1};return g()(g()({},Je),rn.onInput)});if(j.useImperativeHandle(ce,function(){return{setInputContent:function(Je,un){ae(Je),en(un||[[]])},getAttachedFiles:function(){return vn.current}}},[]),(0,j.useEffect)(function(){f.setDisabled(on.disabled)},[on.disabled]),on.hide)return null;var sn=function(){var rn=H()(De()().mark(function Je(un,dn){return De()().wrap(function(Pn){for(;;)switch(Pn.prev=Pn.next){case 0:en(function(Tn){return Tn.map(function(Jn,Rn){return Rn===un?dn:Jn})});case 1:case"end":return Pn.stop()}},Je)}));return function(un,dn){return rn.apply(this,arguments)}}(),mn=(0,j.useMemo)(function(){if(on.variant==="aigc"||!(F!=null&&F.length))return[];var rn=F.map(function(Je,un){var dn;return Je.trigger?dn=Je.trigger:(Je.title||Je.description)&&F.length>1?dn=(0,n.jsxs)(d.Z,{type:"text",icon:Je.icon,children:[Je.title&&(0,n.jsx)("span",{children:Je.title}),Je.description&&(0,n.jsx)("span",{style:{fontSize:"0.8em",opacity:.8},children:Je.description})]}):dn=(0,n.jsx)(V.Z,{icon:Je.icon,bordered:!1}),g()(g()({},Je),{},{fileList:ge[un],key:un,onChange:function(Pn){Je.beforeUpload&&Pn.file.status&&sn(un,Pn.fileList),Je.beforeUpload||sn(un,Pn.fileList)},showUploadList:!1,trigger:dn})});return rn.length===1?(0,n.jsx)(Y.Z,g()(g()({},rn[0]),{},{children:rn[0].trigger})):(0,n.jsx)(ln,{uploadPropsList:rn})},[on.variant,F,ge]),An=(0,n.jsx)(Ke.Z.SenderHeader,{onUpload:F,attachedFiles:ge,onFileChange:sn}),Cn=(0,n.jsx)(ke.Z.Header,{closable:!1,open:ge==null?void 0:ge.some(function(rn){return rn.length}),children:ge.map(function(rn,Je){return rn.length?(0,n.jsx)(Ne.Z,{items:rn,onChange:function(dn){return sn(Je,dn.fileList)}},Je):null})}),_n=on.variant==="aigc"?An:Cn,Dn=ge.map(function(rn){return rn.filter(function(Je){return Je.status==="done"})}),En=ge.some(function(rn){return rn.some(function(Je){return Je.status==="uploading"})}),Bn=function(Je){if(!(F!=null&&F.length))return;var un=Je.type||"",dn=Je.name||"",$n=function(kn){return kn?kn.split(",").some(function(Wn){var yn=Wn.trim();if(!yn)return!1;if(yn.startsWith("."))return dn.toLowerCase().endsWith(yn.toLowerCase());if(yn.includes("*")){if(yn==="*/*")return!0;var wn=yn.split("/"),Xn=E()(wn,1),bn=Xn[0],fn=un.split("/"),Sn=E()(fn,1),Zn=Sn[0];return bn===Zn}return un===yn}):!0},Pn=F.findIndex(function(gn){return $n(gn.accept)});if(Pn===-1)return;var Tn=F[Pn],Jn=ge[Pn]||[];if(Tn.maxCount&&Jn.length>=Tn.maxCount||!Tn.multiple&&Jn.length>0)return;if(Tn.beforeUpload){var Rn=Tn.beforeUpload(Je,[Je]);if(Rn===!1||Rn===Y.Z.LIST_IGNORE)return;if(Rn instanceof Promise){Rn.then(function(gn){if(!(gn===!1||gn===Y.Z.LIST_IGNORE)){var kn=gn&&I()(gn)==="object"?gn:Je;qn(kn)}}).catch(function(gn){console.error("beforeUpload promise rejected:",gn)});return}if(Rn&&I()(Rn)==="object"){qn(Rn);return}}qn(Je);function qn(gn){var kn=function(){var fn=dn.match(/\.([^.]+)$/);if(fn)return fn[1].toLowerCase();var Sn=un.match(/\/([^/+]+)/);return Sn?Sn[1].toLowerCase():"bin"},Wn=Date.now(),yn={uid:"paste_".concat(Wn,"_").concat(Math.random().toString(36).slice(2,11)),name:dn||"pasted-".concat(Wn,".").concat(kn()),size:gn.size,type:un,status:"uploading",percent:0,originFileObj:gn},wn=function(fn){en(function(Sn){var Zn=Qe()(Sn);return Zn[Pn]=(Zn[Pn]||[]).map(function(zn){return zn.uid===yn.uid?g()(g()({},zn),fn):zn}),Zn})};if(en(function(bn){var fn=Qe()(bn),Sn=fn[Pn]||[];if(!Tn.multiple)fn[Pn]=[yn];else{if(Tn.maxCount&&Sn.length>=Tn.maxCount)return bn;fn[Pn]=[].concat(Qe()(Sn),[yn])}return fn}),un&&un.startsWith("image/")){var Xn=new FileReader;Xn.onload=function(bn){var fn,Sn=(fn=bn.target)===null||fn===void 0?void 0:fn.result;typeof Sn=="string"&&wn({thumbUrl:Sn,url:Sn})},Xn.readAsDataURL(gn)}Tn.customRequest({file:gn,onSuccess:function(fn){wn({status:"done",response:fn,percent:100})},onError:function(fn){wn({status:"error",error:fn})},onProgress:function(fn){wn({percent:fn.percent})}},{defaultRequest:function(){}})}},Vn=(0,j.useMemo)(function(){var rn;return(rn=F==null?void 0:F.some(function(Je,un){if(Je.required){var dn=ge[un]||[];return dn.length===0}return!1}))!==null&&rn!==void 0?rn:!1},[F,ge]),nt=Vn;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(nn,{}),(0,n.jsxs)("div",{className:k()("".concat(hn,"-wrapper"),G()(G()({},"".concat(hn,"-wrapper-focus"),Fe&&on.enableFocusExpand),"".concat(hn,"-wrapper-blur"),!Fe&&on.enableFocusExpand)),children:[jn.quickInput&&(0,n.jsx)("div",{className:k()("".concat(hn,"-wrapper-header")),children:jn.quickInput}),on.beforeUI,(0,n.jsx)(ke.Z,{placeholder:on.placeholder,enableFocusExpand:on.enableFocusExpand,value:z,onChange:ae,maxLength:on.maxLength,disabled:En||f.disabled,sendDisabled:nt,scalable:on==null?void 0:on.zoomable,header:_n,prefix:(0,n.jsxs)(n.Fragment,{children:[mn,on==null?void 0:on.morePrefixActions]}),onSubmit:H()(De()().mark(function rn(){var Je;return De()().wrap(function(dn){for(;;)switch(dn.prev=dn.next){case 0:return dn.next=2,(on.beforeSubmit||function(){return Promise.resolve(!0)})();case 2:if(Je=dn.sent,Je){dn.next=5;break}return dn.abrupt("return");case 5:on.onSubmit({query:z,fileList:Dn}),ae(""),en(U);case 8:case"end":return dn.stop()}},rn)})),onCancel:function(){xn==null||xn(),f.setLoading(!1)},onFocus:function(){return be(!0)},onBlur:function(){return be(!1)},onPasteFile:Bn,loading:f.loading}),on.afterUI]})]})}),Ae=e(69637),je=e(10325),we,Ce=(0,x.vJ)(we||(we=t()([`
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


`])),function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls}),Xe=(0,j.forwardRef)(function(L,ce){var B=(0,y.TQ)(function(Ye){return Ye.messages}),re=(0,v.wv)(),z=re.getPrefixCls,ae=z("chat-anywhere"),f=(0,y.TQ)(function(Ye){return Ye.uiConfig}),F=(0,j.useState)(!1),U=E()(F,2),fe=U[0],Ie=U[1];(0,Ae.Z)(function(){Ie(!0)},300);var Fe=k()("".concat(ae,"-chat"),G()({},"".concat(ae,"-chat-hide"),!fe)),be=!(B!=null&&B.length);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ce,{}),(0,n.jsxs)("div",{className:Fe,children:[(0,n.jsx)(Te.Z.List,{style:{height:0,flex:be?0:1},ref:ce.chatRef,items:B}),be?(0,n.jsx)("div",{className:"".concat(Fe,"-welcome"),children:f==null?void 0:f.welcome}):null,(0,n.jsx)("div",{className:"".concat(Fe,"-sender"),style:f!=null&&f.disclaimer?{marginBottom:16}:{},children:(0,n.jsx)(r,{ref:ce.inputRef})}),(f==null?void 0:f.disclaimer)&&(0,n.jsx)(je.Z,{style:{position:"absolute",bottom:0,width:"100%"},desc:f==null?void 0:f.disclaimer})]})]})}),He,an=(0,x.vJ)(He||(He=t()([`
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

`])),function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls});function c(){var L=(0,v.wv)(),ce=L.getPrefixCls,B=ce("chat-anywhere-header"),re=(0,y.TQ)(function(U){return U.uiConfig}),z=(0,le.x)(),ae=z.sessionListShow,f=z.setSessionListShow,F=S();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(an,{}),(0,n.jsxs)("div",{className:B,children:[F&&(0,n.jsx)(V.Z,{style:{marginLeft:12},bordered:!1,onClick:function(){return f(!ae)},icon:ae?(0,n.jsx)(Pe.Z,{}):(0,n.jsx)(C.Z,{})}),re.header]})]})}var X=e(83962),ee=j.forwardRef(function(ce,B){var re=(0,K.y)(),z=(0,Re.G)(),ae=(0,le.x)();return j.useImperativeHandle(B,function(){return g()(g()(g()({},re),z),ae)}),null}),ve=["cardConfig"],he=(0,j.forwardRef)(function(L,ce){var B,re=(0,j.useState)(0),z=E()(re,2),ae=z[0],f=z[1],F=L.cardConfig,U=p()(L,ve),fe=(0,j.useRef)(null),Ie=(0,j.useRef)(null),Fe=(0,j.useRef)(null);return j.useImperativeHandle(ce,function(){return g()(g()(g()(g()({},fe.current),Ie.current),Fe.current),{},{reload:function(){f(function(Ye){return Ye+1})}})}),(0,j.createElement)(y.vi,g()(g()({},U),{},{key:ae}),(0,n.jsxs)(X.xy,{cardConfig:F,children:[(0,n.jsx)(u,{top:(B=U.uiConfig)!==null&&B!==void 0&&B.header?(0,n.jsx)(c,{}):null,left:U.onSessionKeyChange?(0,n.jsx)(Z,{}):null,right:(0,n.jsx)(Xe,{ref:{chatRef:fe,inputRef:Ie}})}),(0,n.jsx)(ee,{ref:Fe})]}))})},9368:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return De}});var $=e(97857),g=e.n($),T=e(9783),p=e.n(T),P=e(5574),E=e.n(P),j=e(13769),_=e.n(j),k=e(93967),v=e.n(k),m=e(67294),M=e(21317),y=e(85893),h=m.createContext(null),t=function(H){var Y=H.children,ke=m.useContext(h),Ne=ke.prefixCls;return(0,y.jsx)("div",{className:v()("".concat(Ne,"-group-title")),children:Y&&(0,y.jsx)(M.default.Text,{children:Y})})},x=t,D=e(30339),s=e(54604),n=e(7654),A=e(64057),u=e(21403),S=["prefixCls","info","className","direction","onClick","active","menu"],q=["key"],V={};function d(O){var H=(0,m.useState)(V[O]),Y=E()(H,2),ke=Y[0],Ne=Y[1];return[ke,function(Re){for(var Se in V)V[Se]=!1;V[O]=Re,Ne(Re)}]}var le=function(H){var Y,ke=d(H.info.key),Ne=E()(ke,2),Re=Ne[0],Se=Ne[1],nn=(0,m.useState)(!1),Ke=E()(nn,2),Ze=Ke[0],tn=Ke[1],$e=H.prefixCls,Ue=H.info,ln=H.className,r=H.direction,Ae=H.onClick,je=H.active,we=H.menu,Ce=_()(H,S),Xe=(0,D.Z)(Ce,{aria:!0,data:!0,attr:!0}),He=Ue.disabled,an=v()(ln,"".concat($e,"-item"),p()({},"".concat($e,"-item-active"),je&&!He),p()({},"".concat($e,"-item-disabled"),He),p()({},"".concat($e,"-item-timeline"),Ue.timeline)),c=function(){!He&&Ae&&Ae(Ue)};return(0,y.jsxs)("li",g()(g()({},Xe),{},{className:an,onClick:c,children:[(0,y.jsxs)("div",{className:"".concat($e,"-content"),children:[Ue.icon&&(0,y.jsx)("div",{className:"".concat($e,"-icon"),children:Ue.icon}),Ue.timeline&&(0,y.jsx)("div",{className:"".concat($e,"-timeline")}),(0,y.jsx)(K,{editable:Re,setEditable:Se,prefixCls:$e,info:Ue,onEdit:we==null||(Y=we.find(function(X){return X.key==="edit"}))===null||Y===void 0?void 0:Y.onEdit}),we&&!He&&(0,y.jsx)(n.Z,{styles:{body:{padding:4}},trigger:["click"],open:Ze,onOpenChange:tn,content:(0,y.jsx)("div",{className:"".concat($e,"-menu-popover"),children:we.map(function(X){var ee=X.key,ve=_()(X,q),he=g()(g()({},ve),{},{onClick:function(ce){if(ee==="edit")Se(!0);else{var B;(B=ve.onClick)===null||B===void 0||B.call(ve,Ue)}tn(!1)}});return(0,y.jsx)(J,g()(g()({},he),{},{info:Ue}),ee)})}),placement:"bottom",children:(0,y.jsx)(A.Z,{bordered:!1,icon:(0,y.jsx)(s.Z,{}),disabled:He,className:"".concat($e,"-menu-icon"),onClick:function(ee){return ee.stopPropagation()}})})]}),Ue.desc&&(0,y.jsx)("div",{className:"".concat($e,"-desc"),style:Ue.timeline?{marginLeft:16}:{},children:Ue.desc})]}))};function K(O){var H=O.editable,Y=O.prefixCls,ke=O.info,Ne=O.setEditable,Re=O.onEdit,Se=(0,m.useState)(ke.label),nn=E()(Se,2),Ke=nn[0],Ze=nn[1];return(0,m.useEffect)(function(){Ze(ke.label)},[ke.label]),H?(0,y.jsx)(W,{prefixCls:Y,value:Ke,onBlur:function($e){var Ue;if($e===Ke)return Ne(!1);(Ue=Re($e,ke))===null||Ue===void 0||Ue.then(function(){Ze($e)}).catch(function(){Ze(Ke)}).finally(function(){Ne(!1)})},setEditable:Ne}):(0,y.jsx)("div",{className:"".concat(Y,"-label"),children:Ke})}function W(O){var H=O.prefixCls,Y=O.value,ke=O.onBlur,Ne=O.setEditable,Re=(0,m.useState)(Y),Se=E()(Re,2),nn=Se[0],Ke=Se[1],Ze=(0,m.useRef)();return(0,m.useEffect)(function(){Ze.current.focus()},[]),(0,m.useEffect)(function(){Ke(Y)},[Y]),(0,y.jsx)("input",{ref:Ze,className:"".concat(H,"-label-edit"),value:nn,onChange:function($e){return Ke($e.target.value)},onBlur:function(){return ke(nn)}})}function J(O){var H=O.label,Y=O.icon,ke=O.danger,Ne=O.info,Re=O.disabled,Se=function(Ke){var Ze;Re||(Ke.stopPropagation(),(Ze=O.onClick)===null||Ze===void 0||Ze.call(O,Ne))};return Y&&H?(0,y.jsx)(u.Z,{disabled:Re,icon:Y,danger:ke,type:"text",onClick:Se,children:H}):Y?(0,y.jsx)(A.Z,{disabled:Re,icon:Y,danger:ke,bordered:!1,onClick:Se}):H?(0,y.jsx)(u.Z,{disabled:Re,danger:ke,type:"text",onClick:Se,children:H}):null}var se=le,Pe=e(60869),C=e(56044),Me=e(52677),Z=e.n(Me),ie="__ungrouped",te=function(H){var Y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],ke=m.useMemo(function(){if(!H)return[!1,void 0,void 0];var Ke={sort:void 0,title:void 0};return Z()(H)==="object"&&(Ke=g()(g()({},Ke),H)),[!0,Ke.sort,Ke.title]},[H]),Ne=E()(ke,3),Re=Ne[0],Se=Ne[1],nn=Ne[2];return m.useMemo(function(){if(!Re){var Ke=[{name:ie,data:Y,title:void 0}];return[Ke,Re]}var Ze=Y.reduce(function(Ue,ln){var r=ln.group||ie;return Ue[r]||(Ue[r]=[]),Ue[r].push(ln),Ue},{}),tn=Se?Object.keys(Ze).sort(Se):Object.keys(Ze),$e=tn.map(function(Ue){return{name:Ue===ie?void 0:Ue,title:nn,data:Ze[Ue]}});return[$e,Re]},[Y,H])},Le=te,G=e(68400),Te=e.n(G),Be=e(9053),Qe,Ge=(0,Be.vJ)(Qe||(Qe=Te()([`
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
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: `,`;
    border: 1px solid `,`;
    margin-right: 8px;
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
}`])),function(O){return O.theme.prefixCls},function(O){return O.theme.paddingXXS},function(O){return O.theme.prefixCls},function(O){return O.theme.paddingXL},function(O){return O.theme.prefixCls},function(O){return O.theme.colorTextSecondary},function(O){return O.theme.colorBgBase},function(O){return O.theme.colorBorder},function(O){return O.theme.colorTextSecondary},function(O){return O.theme.borderRadiusLG},function(O){return O.theme.colorBorder},function(O){return O.theme.colorFillTertiary},function(O){return O.theme.colorFillTertiary},function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls},function(O){return O.theme.colorText},function(O){return O.theme.prefixCls},function(O){return O.theme.colorTextDisabled},function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls},function(O){return O.theme.colorFillTertiary},function(O){return O.theme.colorText},function(O){return O.theme.colorText},function(O){return O.theme.fontFamily},function(O){return O.theme.fontSizeXL},function(O){return O.theme.controlHeightLG},function(O){return O.theme.controlHeightLG},function(O){return O.theme.paddingXS}),I=["prefixCls","rootClassName","items","activeKey","defaultActiveKey","onActiveChange","menu","styles","classNames","groupable","className","style"],de=function(H){var Y=H.prefixCls,ke=H.rootClassName,Ne=H.items,Re=H.activeKey,Se=H.defaultActiveKey,nn=H.onActiveChange,Ke=H.menu,Ze=H.styles,tn=Ze===void 0?{}:Ze,$e=H.classNames,Ue=$e===void 0?{}:$e,ln=H.groupable,r=H.className,Ae=H.style,je=_()(H,I),we=(0,D.Z)(je,{attr:!0,aria:!0,data:!0}),Ce=(0,Pe.Z)(Se,{value:Re}),Xe=E()(Ce,2),He=Xe[0],an=Xe[1],c=Le(ln,Ne),X=E()(c,2),ee=X[0],ve=X[1],he=(0,C.wv)(),L=he.direction,ce=he.getPrefixCls,B=ce("conversations"),re=v()(B,r,ke,p()({},"".concat(B,"-rtl"),L==="rtl")),z=function(f){an(f.key),nn&&nn(f.key)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Ge,{}),(0,y.jsx)("ul",g()(g()({},we),{},{style:Ae,className:re,children:ee.map(function(ae,f){var F=ae.data.map(function(fe,Ie){return(0,y.jsx)(se,{info:fe,prefixCls:B,direction:L,className:v()(Ue.item),style:tn.item,menu:Ke,active:He===fe.key,onClick:z},fe.key||"key-".concat(Ie))});if(ve){var U;return(0,y.jsxs)("li",{children:[(0,y.jsx)(h.Provider,{value:{prefixCls:B},children:((U=ae.title)===null||U===void 0?void 0:U.call(ae,ae.name,{components:{GroupTitle:x}}))||(0,y.jsx)(x,{children:ae.name},ae.name)}),(0,y.jsx)("ul",{className:"".concat(B,"-list"),children:F})]},ae.name||"key-".concat(f))}return F})}))]})},De=de},24963:function(Ve,Q,e){"use strict";e.r(Q),e.d(Q,{Audios:function(){return Me},DeepThink:function(){return p},DeepThinking:function(){return p},Files:function(){return h},Footer:function(){return le},FooterActions:function(){return d.p4},FooterCount:function(){return d.hw},Images:function(){return A},Interrupted:function(){return W},Text:function(){return V},Videos:function(){return Pe}});var $=e(67294),g=e(14082),T=e(85893);function p(Z){return(0,T.jsx)(g.Z,{defaultOpen:Z.data.defaultOpen!==void 0?Z.data.defaultOpen:!0,title:Z.data.title,loading:Z.data.loading,content:Z.data.content,className:Z.data.className,open:Z.data.open,autoCloseOnFinish:Z.data.autoCloseOnFinish,maxHeight:Z.data.maxHeight})}var P=e(68400),E=e.n(P),j=e(23345),_=e(36417),k=e(9053),v=e(56044),m=e(6411),M,y=(0,k.vJ)(M||(M=E()([`
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
`])),function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.borderRadius},function(Z){return Z.theme.colorWhite},function(Z){return Z.theme.motionDurationSlow},function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.prefixCls});function h(Z){var ie=(0,v.wv)(),te=ie.getPrefixCls,Le=te("bubble-files");return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(y,{}),(0,T.jsx)(j.Z,{className:Le,children:Z.data.map(function(G,Te){var Be={name:G.name||G.filename,size:G.size||G.bytes,url:G.url};return(0,T.jsxs)("div",{className:"".concat(Le,"-file"),children:[(0,T.jsx)(_.Z.FileCard,{item:Be}),Be.url&&(0,T.jsx)("div",{className:"".concat(Le,"-download"),onClick:function(){window.open(Be.url,"_blank")},children:(0,T.jsx)(m.Z,{})})]},Te)})})]})}var t=e(16494),x=e(55839),D,s=(0,k.vJ)(D||(D=E()([`
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
`])),function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.prefixCls});function n(Z){var ie=(0,v.wv)(),te=ie.getPrefixCls,Le=te("bubble-image");return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(s,{}),(0,T.jsx)("div",{className:"".concat(Le),children:(0,T.jsx)(t.Z,{fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",src:Z.url,width:56,height:56,preview:{transitionName:""}})})]})}function A(Z){return(0,T.jsx)(x.ZP,{locale:{Image:{preview:""}},children:(0,T.jsx)(j.Z,{children:Z.data.map(function(ie,te){return(0,T.jsx)(n,{url:ie.url},te)})})})}var u=e(97857),S=e.n(u),q=e(66109);function V(Z){var ie=Z.data.msgStatus==="generating";return(0,T.jsx)(q.Z,S()(S()({cursor:ie},Z.data),{},{typing:Z.data.msgStatus==="generating"?Z.data.typing:!1}))}var d=e(67369);function le(Z){return(0,T.jsx)(d.ZP,S()({},Z.data))}var K=e(10146);function W(Z){return(0,T.jsx)(K.Z,S()({},Z.data))}var J=e(51794),se;function Pe(Z){var ie=(0,v.wv)().getPrefixCls("bubble-video");return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(C,{}),(0,T.jsx)(j.Z,{children:Z.data.map(function(te,Le){return(0,T.jsx)(J.Z,{className:ie,src:te.src,poster:te.poster,controls:!0},Le)})})]})}var C=(0,k.vJ)(se||(se=E()([`
.`,`-bubble-video {
  max-width: 256px;
  max-height: 144px;
  border-radius: 8px;
  border: 1px solid `,`;
  overflow: hidden;
}
`])),function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.colorBorderSecondary});function Me(){return(0,T.jsx)("div",{children:"Audio"})}},55031:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return q}});var $=e(56044),g=e(31382),T=e(55839),p=e(16494),P=e(33948),E=e(52253),j=e(56137),_=e(1948),k=e(61763),v=e(77900),m=e(40443),M=e(33119),y=e(4356),h=e(72816),t=e(77382),x=e(72167),D=e(74398),s=e(55094),n=e(61401),A=e(85893),u={Click:{name:"\u70B9\u51FB",icon:(0,A.jsx)(P.Z,{})},Swipe:{name:"\u6ED1\u52A8",icon:(0,A.jsx)(E.Z,{})},Type:{name:"\u8F93\u5165",icon:(0,A.jsx)(j.Z,{})},Back:{name:"\u8FD4\u56DE",icon:(0,A.jsx)(_.Z,{})},Home:{name:"\u4E3B\u9875",icon:(0,A.jsx)(k.Z,{})},Done:{name:"\u5B8C\u6210",icon:(0,A.jsx)(v.Z,{})},Wait:{name:"\u7B49\u5F85",icon:(0,A.jsx)(m.Z,{spin:!0})},click:{name:"\u70B9\u51FB",icon:(0,A.jsx)(P.Z,{})},"right click":{name:"\u53F3\u952E\u70B9\u51FB",icon:(0,A.jsx)(P.Z,{})},"open app":{name:"\u6253\u5F00\u5E94\u7528",icon:(0,A.jsx)(M.Z,{})},computer_double_click:{name:"\u53CC\u51FB",icon:(0,A.jsx)(y.Z,{})},hotkey:{name:"\u5FEB\u6377\u952E",icon:(0,A.jsx)(h.Z,{})},presskey:{name:"\u6309\u952E",icon:(0,A.jsx)(t.Z,{})},scroll:{name:"\u6EDA\u52A8",icon:(0,A.jsx)(E.Z,{})},drag:{name:"\u62D6\u62FD",icon:(0,A.jsx)(x.Z,{})},type_with_clear_enter_pos:{name:"\u8F93\u5165\u5E76\u6E05\u9664",icon:(0,A.jsx)(j.Z,{})},triple_click:{name:"\u4E09\u51FB",icon:(0,A.jsx)(D.Z,{})},drag_end:{name:"\u62D6\u62FD\u7ED3\u675F",icon:(0,A.jsx)(x.Z,{})},type:{name:"\u8F93\u5165",icon:(0,A.jsx)(j.Z,{})},hscroll:{name:"\u6C34\u5E73\u6EDA\u52A8",icon:(0,A.jsx)(s.Z,{})},done:{name:"\u5B8C\u6210",icon:(0,A.jsx)(v.Z,{})},wait:{name:"\u7B49\u5F85",icon:(0,A.jsx)(m.Z,{spin:!0})},call_user:{name:"\u547C\u53EB\u7528\u6237",icon:(0,A.jsx)(n.Z,{})}},S=u;function q(V){var d,le,K=(0,$.wv)(),W=K.getPrefixCls,J=W("operate-card");return(0,A.jsxs)("div",{children:[(0,A.jsx)("div",{className:"".concat(J,"-device-action-time"),children:V.time}),(0,A.jsx)(g.Z,{header:{className:"".concat(J,"-device-action"),icon:(0,A.jsx)("div",{className:"".concat(J,"-device-action-icon"),children:(d=S[V.action])===null||d===void 0?void 0:d.icon}),title:(0,A.jsxs)("div",{className:"".concat(J,"-device-action-content"),children:[(0,A.jsxs)("div",{className:"".concat(J,"-device-action-description"),children:[(0,A.jsx)("span",{children:V.actionName||((le=S[V.action])===null||le===void 0?void 0:le.name)}),(0,A.jsx)("span",{children:V.description})]}),(0,A.jsx)("div",{className:"".concat(J,"-device-action-image"),children:(0,A.jsx)(T.ZP,{locale:{Image:{preview:""}},children:(0,A.jsx)(p.Z,{src:V.image,alt:V.description,width:"100%",height:"100%"})})})]})}})]})}},10325:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return k}});var $=e(67294),g=e(68400),T=e.n(g),p=e(9053),P,E=(0,p.vJ)(P||(P=T()([`
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
`])),function(v){return v.theme.prefixCls},function(v){return v.theme.colorTextTertiary},function(v){return v.theme.prefixCls}),j=e(56044),_=e(85893);function k(v){var m=v.desc,M=m===void 0?"AI can also make mistakes, so please check carefully and use it with caution":m,y=(0,j.wv)(),h=y.getPrefixCls,t=h("disclaimer");return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(E,{}),(0,_.jsxs)("div",{className:t,style:v.style,children:[M,v.afterLink&&(0,_.jsx)("a",{className:"".concat(t,"-after-link"),href:v.afterLink.href,target:"_blank",children:v.afterLink.text})]})]})}},80115:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return g}});var $=e(85893);function g(){return(0,$.jsx)("iframe",{srcDoc:`<html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>`})}},2534:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return D}});var $=e(67294),g=e(68400),T=e.n(g),p=e(9053),P,E=(0,p.vJ)(P||(P=T()([`
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

`])),function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.colorText},function(s){return s.theme.colorSuccess},function(s){return s.theme.colorBgBase},function(s){return s.theme.prefixCls}),j=e(56044),_=e(55839),k=e(16494),v=e(89034),m=e(36374),M=e(85893);function y(){for(var s=arguments.length,n=new Array(s),A=0;A<s;A++)n[A]=arguments[A];return n.filter(Boolean).join(" ")}var h=function(n){var A=n.speed,u=A===void 0?1:A,S=n.backgroundColor,q=S===void 0?"#b6a9f8":S,V=n.colors,d=V===void 0?["#c979ee","#ef788c","#eb7fc6","#6d67c8"]:V,le=n.ringColors,K=le===void 0?["white","blue","magenta","violet","lightyellow"]:le,W=n.className,J=W===void 0?"":W,se=(0,$.useRef)(null);return(0,$.useEffect)(function(){if(CSS&&CSS.registerProperty)try{CSS.registerProperty({name:"--a",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--l",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--x",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--y",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--o",syntax:"<number>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--value",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--width-ratio",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--scale",syntax:"<number>",inherits:!0,initialValue:"0"})}catch(Pe){}},[]),(0,$.useEffect)(function(){var Pe=se.current;if(Pe){var C=function(){var ie=Pe.getBoundingClientRect(),te=Math.min(ie.width,ie.height);Pe.style.setProperty("--actual-size","".concat(te,"px"))};C();var Me=new ResizeObserver(C);return Me.observe(Pe),function(){Me.disconnect()}}},[]),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("style",{children:`
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
          --duration: calc(8s / `.concat(u,`);
          --ai-duration: calc(5.5s / `).concat(u,`);
          
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
          background: `).concat(q,`;
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
          background: radial-gradient(50% 50% at center, `).concat(d[0]||"#c979ee",", color-mix(in srgb, ").concat(d[0]||"#c979ee",`, transparent 30%));
          --x: calc(var(--s) * 0.04);
          width: calc(var(--s) * 0.6);
          animation-timing-function: cubic-bezier(0.12, 0.32, 0.68, 0.24);
        }

        .fluid-background-container .c2 {
          background: radial-gradient(50% 50% at center, `).concat(d[1]||"#ef788c",", color-mix(in srgb, ").concat(d[1]||"#ef788c",`, white 40%));
          width: calc(var(--s) * 0.55);
        }

        .fluid-background-container .c3 {
          background: radial-gradient(50% 50% at center, `).concat(d[2]||"#eb7fc6",`, transparent);
          width: calc(var(--s) * 0.2);
          opacity: 0.6;
          --x: calc(var(--s) * -0.04);
        }

        .fluid-background-container .c4 {
          background: `).concat(d[3]||"#6d67c8",`;
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
      `)}),(0,M.jsxs)("div",{ref:se,className:y("fluid-background-container",J),children:[(0,M.jsxs)("div",{className:"fluid-inner",children:[(0,M.jsx)("div",{className:"c c4",style:{"--i":0}}),(0,M.jsx)("div",{className:"c c1",style:{"--i":1}}),(0,M.jsx)("div",{className:"c c2",style:{"--i":2}}),(0,M.jsx)("div",{className:"c c3",style:{"--i":3}}),(0,M.jsx)("div",{className:"rings"})]}),(0,M.jsx)("div",{className:"glass"})]})]})},t=h,x=function(n){var A=(0,j.wv)(),u=A.getPrefixCls,S=u("image-generator"),q=n.block,V=n.skeletonText,d=n.width,le=d===void 0?320:d,K=n.height,W=K===void 0?320:K,J=n.src,se=n.loadingText,Pe=se===void 0?"Painting...":se,C=n.doneText,Me=C===void 0?"Paint Completed":C,Z=n.skeleton||(0,M.jsxs)("div",{className:"".concat(S,"-default-skeleton"),style:{width:"100%",height:"100%"},children:[(0,M.jsx)("div",{className:"".concat(S,"-default-skeleton-bg"),children:(0,M.jsx)(t,{})}),(0,M.jsxs)("div",{className:"".concat(S,"-default-skeleton-content"),children:[(0,M.jsx)("img",{className:"".concat(S,"-default-skeleton-icon"),src:"https://img.alicdn.com/imgextra/i2/O1CN01M1X8yM1MWUC7u3Go5_!!6000000001442-54-tps-72-72.apng"}),V&&(0,M.jsx)("div",{className:"".concat(S,"-default-skeleton-text"),children:V})]})]}),ie=!J,te=q?{aspectRatio:"".concat(le,"/").concat(W)}:{width:le,height:W};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(E,{}),(0,M.jsxs)("div",{className:S,children:[(0,M.jsxs)("div",{className:"".concat(S,"-text"),children:[ie?(0,M.jsx)(m.Z,{}):(0,M.jsx)(v.Z,{className:"".concat(S,"-text-success")}),ie?(0,M.jsx)("span",{style:{paddingLeft:20},children:Pe}):Me]}),(0,M.jsx)("div",{className:"".concat(S,"-wrapper"),style:te,children:ie?Z:(0,M.jsx)(_.ZP,{locale:{Image:{preview:""}},children:(0,M.jsx)(k.Z,{width:"100%",height:"100%",src:J})})})]})]})},D=x},66109:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return an}});var $=e(19632),g=e.n($),T=e(97857),p=e.n(T),P=e(67294),E=e(13769),j=e.n(E),_=e(55729),k=e(68400),v=e.n(k),m=e(9053),M,y=(0,m.vJ)(M||(M=v()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.colorBorder},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorText},function(c){return c.theme.borderRadiusSM},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.borderRadiusSM},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorBgBase},function(c){return c.theme.prefixCls},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorSuccess},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.motionEaseOut},function(c){return c.theme.colorWhite},function(c){return c.theme.colorPrimary});function h(c){var X=c.cursor,ee=c.content,ve=c.animation,he=(0,P.useMemo)(function(){return ve?"":X?X==="dot"?" :dot:":X==="underline"?" :underline:":" :dot:":""},[X,ee]);return ee+he}var t=e(85893),x=["content","cursor","animation"];function D(c){var X=c.content,ee=c.cursor,ve=c.animation,he=j()(c,x),L=h({cursor:ee,content:X,animation:ve}),ce=(0,P.useMemo)(function(){if(ve)return{hasNextChunk:ve&&ee,enableAnimation:ve&&ee}},[ee,ve]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y,{}),(0,t.jsx)(_.Z,p()(p()({},he),{},{content:L,streaming:ce}))]})}var s=e(5574),n=e.n(s),A=function(X){var ee=X.content,ve=X.typing,he=(0,P.useState)(0),L=n()(he,2),ce=L[0],B=L[1],re=(0,P.useRef)();return(0,P.useEffect)(function(){return ve?re.current=setInterval(function(){B(function(z){return z+1})},typeof ve=="number"?ve:5):re.current&&clearInterval(re.current),function(){return clearInterval(re.current)}},[ve]),ve?ee.slice(0,ce):ee},u=A,S=e(56044),q=e(93967),V=e.n(q),d=function(){return null},le=e(87427),K=e(96643),W=e(97634),J=e(89698),se=function(X){var ee,ve=X.className,he=X.children,L=(ve==null||(ee=ve.match(/language-(\w+)/))===null||ee===void 0?void 0:ee[1])||"";return typeof he!="string"?null:L==="mermaid"?(0,t.jsx)(le.Z,{header:(0,t.jsx)(Pe,{lang:"mermaid",content:he}),children:he}):(0,t.jsx)(K.Z,{lang:L,header:(0,t.jsx)(Pe,{lang:L,content:he}),children:he})};function Pe(c){var X=c.lang,ee=c.content,ve=(0,P.useState)(!1),he=n()(ve,2),L=he[0],ce=he[1],B=(0,S.wv)(),re=B.getPrefixCls,z=re("code-header");return(0,t.jsxs)("div",{className:z,children:[(0,t.jsx)("div",{className:"".concat(z,"-lang"),children:X}),L?(0,t.jsx)(W.Z,{className:"".concat(z,"-copied")}):(0,t.jsx)(J.Z,{className:"".concat(z,"-icon"),onClick:function(){navigator.clipboard.writeText(ee),ce(!0),setTimeout(function(){ce(!1)},1e3)}})]})}var C=se;function Me(c){return(0,t.jsx)("a",{href:c.src,target:"_blank",rel:"noopener noreferrer",children:c.src})}var Z=e(55839),ie=e(16494),te=e(85576),Le=e(36231),G=e(89102);function Te(c){try{var X=c.src,ee=new URL(X),ve=ee.pathname,he=ve.endsWith(".mp4"),L=ve.endsWith(".mp3")||ve.endsWith(".wav");return L?(0,t.jsx)("audio",p()(p()({src:c.src},c),{},{controls:!0})):he?(0,t.jsx)(Qe,p()({src:c.src},c)):(0,t.jsx)(Be,p()({src:c.src},c))}catch(ce){return null}}function Be(c){return(0,t.jsx)(Z.ZP,{locale:{Image:{preview:""}},children:(0,t.jsx)(ie.Z,p()({src:c.src},c))})}function Qe(c){var X=c.src,ee=(0,P.useState)(!1),ve=n()(ee,2),he=ve[0],L=ve[1],ce=(0,S.wv)(),B=ce.getPrefixCls,re=B("markdown-video");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:re,children:(0,t.jsx)("div",{className:"".concat(re,"-poster"),onClick:function(){return L(!0)},children:(0,t.jsx)(Le.Z,{className:"".concat(re,"-play")})})}),(0,t.jsx)(te.Z,{closeIcon:(0,t.jsx)("a",{children:(0,t.jsx)(G.Z,{style:{fontSize:20}})}),centered:!0,transitionName:"",footer:null,width:500,title:"",styles:{content:{padding:0}},open:he,destroyOnHidden:!0,onCancel:function(){return L(!1)},children:(0,t.jsx)("video",{controls:!0,autoPlay:!0,style:{display:"block",width:"100%"},children:(0,t.jsx)("source",{src:X,type:"video/mp4"})})})]})}function Ge(c){var X=(0,S.wv)().getPrefixCls("markdown");return(0,t.jsx)("div",{className:X,style:{fontSize:c.baseFontSize,lineHeight:c.baseLineHeight},children:c.content})}var I=e(79427),de=e(55241),De,O=(0,m.vJ)(De||(De=v()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.motionEaseOut},function(c){return c.theme.colorWhite},function(c){return c.theme.colorPrimary});function H(c){var X=(0,S.wv)(),ee=X.getPrefixCls,ve=ee("markdown-citation"),he=c["data-text"],L=c["data-url"],ce=c["data-title"],B=c["data-content"],re=B||ce,z=(0,t.jsx)("sup",{className:ve,children:he});return re&&(z=(0,t.jsx)(de.Z,{title:ce,content:L?(0,t.jsx)("a",{href:L,rel:"noreferrer",target:"_blank",children:L}):B,children:z})),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O,{}),z]})}function Y(c){var X,ee=((X=c.citationsData[c["data-text"]])===null||X===void 0?void 0:X.render)||H;return(0,t.jsx)(ee,p()({},c))}var ke=[],Ne={};function Re(c){var X=c.citations,ee=X===void 0?ke:X,ve=c.citationsMap,he=ve===void 0?Ne:ve,L=(0,P.useMemo)(function(){var z=p()({},he);return ee.forEach(function(ae,f){var F=f+1;z[F]=ae}),[z,function(){return function(f){return(0,t.jsx)(Y,p()(p()({},f),{},{citationsData:z}))}}()]},[ee,he]),ce=n()(L,2),B=ce[0],re=ce[1];return{CitationComponent:re,citationsData:B,citationsDataCount:Object.keys(B).length}}var Se=e(30861);function nn(c){return{name:"citation",level:"inline",tokenizer:function(ee){var ve=ee.match(/^\[([^\]]+)\](?!\()/);if(ve){var he=ve[0].trim(),L=he==null?void 0:he.replace(/^\[([^\]]+)\]/g,"$1");if(c[L])return{type:"citation",raw:he,text:he==null?void 0:he.replace(/^\[([^\]]+)\]/g,"$1"),renderType:"component"}}},renderer:function(ee){if(c&&Object.keys(c).length===0)return null;var ve=ee.text,he=c==null?void 0:c[ve];return he?'<citation data-text="'.concat(ve,'" data-url="').concat(he.url,'" data-title="').concat(he.title,'" data-content="').concat(he.content,'"></citation>'):ee.raw}}}var Ke,Ze=(0,m.vJ)(Ke||(Ke=v()([`
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
`])),function(c){var X=c.theme;return X.colorPrimary});function tn(){var c=(0,S.wv)(),X=c.getPrefixCls,ee="markdown-cursor-underline";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Ze,{}),(0,t.jsx)("span",{className:V()(ee,X("markdown-cursor"))})]})}var $e=e(36374),Ue=function(X){var ee=X["data-type"];return ee==="dot"?(0,t.jsx)($e.Z,{}):ee==="underline"?(0,t.jsx)(tn,{}):null};function ln(){var c={cursors:{dot:"dot",underline:"underline"}},X=Object.keys(c.cursors).map(function(he){return he.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|"),ee=new RegExp(":(".concat(X,"):")),ve=new RegExp("^".concat(ee.source));return{name:"cursor",level:"inline",start:function(L){var ce;return(ce=L.match(ee))===null||ce===void 0?void 0:ce.index},tokenizer:function(L,ce){var B=ve.exec(L);if(B){var re=B[1],z=c.cursors[re];if(z)return{type:"cursor",raw:B[0],name:re,cursor:z}}},renderer:function(L){var ce='<custom-cursor data-type="'.concat(L.name,'"></custom-cursor>');return ce}}}var r=e(85018),Ae=["href"];function je(c){return c["data-footnote-ref"]===""?(0,t.jsx)(we,p()({},c)):c.children==="\u21A9"&&c["data-footnote-backref"]===""?null:(0,t.jsx)("a",p()({},c))}function we(c){var X=(0,S.wv)(),ee=X.getPrefixCls,ve=ee("markdown-footnote"),he=c.href,L=j()(c,Ae);return(0,t.jsx)("a",p()(p()({},L),{},{className:ve,onClick:function(){try{var B=c.id.split("-"),re=n()(B,3),z=re[0],ae=re[1],f=re[2],F=document.querySelector("#footnote-".concat(f)).querySelector("a").getAttribute("href");window.open(F,"_blank")}catch(U){}}}))}var Ce={ALLOWED_TAGS:[]};function Xe(){try{return new RegExp("(?<=a)b"),!0}catch(c){return!1}}var He=Xe(),an=(0,P.memo)(function(c){var X=c.baseFontSize||14,ee=c.baseLineHeight||1.7,ve=u({content:c.content,typing:c.typing&&!c.animation}),he=(0,S.wv)().getPrefixCls("markdown"),L=c.raw,ce=L===void 0?!1:L,B=c.allowHtml,re=B===void 0?!1:B,z=Re({citations:c.citations,citationsMap:c.citationsMap}),ae=z.citationsData,f=z.citationsDataCount,F=z.CitationComponent,U=(0,P.useMemo)(function(){return p()({code:C,style:d,script:d,img:c.disableImage?Me:Te,citation:F,"custom-cursor":Ue,a:je},c.components)},[c.disableImage,F,c.components]),fe=(0,P.useMemo)(function(){return{ADD_TAGS:["custom-cursor","citation"]}},[]),Ie=(0,P.useMemo)(function(){var ge=(0,Se.Z)();ge.push(ln()),f>0&&ge.push(nn(ae));var en=(0,r.Z)({sectionClass:"".concat(he,"-footnotes")});return ge.push.apply(ge,g()(en.extensions)),{extensions:ge,walkTokens:en.walkTokens}},[f,ae]),Fe=Ie.extensions,be=Ie.walkTokens,Ye=(0,P.useMemo)(function(){return p()({extensions:Fe,walkTokens:be},!re&&{renderer:{html:function(en){var vn=en.text||en.raw||"";return vn.replace(/</g,"&lt;").replace(/>/g,"&gt;")}}})},[Fe,re]),qe=(0,t.jsx)(Ge,{content:ve||"",baseFontSize:X,baseLineHeight:ee});return ce||!He?qe:(0,t.jsx)(I.SV,{fallbackRender:function(){for(var en=arguments.length,vn=new Array(en),jn=0;jn<en;jn++)vn[jn]=arguments[jn];return console.error(vn),qe},children:(0,t.jsx)(D,{dompurifyConfig:fe,cursor:c.cursor,animation:c.animation,components:U,style:{fontSize:X,lineHeight:ee},openLinksInNewTab:!0,className:V()(he,c.className),content:ve||"",config:Ye})})})},36374:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return v}});var $=e(68400),g=e.n($),T=e(56044),p=e(9053),P=e(93967),E=e.n(P),j=e(85893),_,k=(0,p.vJ)(_||(_=g()([`
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
`])),function(m){return m.theme.prefixCls},function(m){return m.theme.colorText},function(m){return m.theme.colorText});function v(){var m=(0,T.wv)(),M=m.getPrefixCls,y=M("markdown-cursor-dot");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(k,{}),(0,j.jsxs)("span",{className:E()(y,M("markdown-cursor")),children:[(0,j.jsx)("span",{style:{opacity:0,marginLeft:"-.75em"},children:"_"}),(0,j.jsx)("span",{className:"".concat(y,"-dot1")}),(0,j.jsx)("span",{className:"".concat(y,"-dot2")})]})]})}},12181:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return S}});var $=e(5574),g=e.n($),T=e(15009),p=e.n(T),P=e(99289),E=e.n(P),j=e(68400),_=e.n(j),k=e(41469),v=e(2093),m=e(9361),M=e(96486),y=e.n(M),h=e(67294),t=e(56044),x=e(9053),D=e(85893),s,n=(0,x.vJ)(s||(s=_()([`
.`,`-mermaid {
  &-preview img {
    background: `,`;
  }
}
`])),function(q){return q.theme.prefixCls},function(q){return q.theme.colorBgBase}),A,u=function(){var q=E()(p()().mark(function V(){return p()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:if(!A){le.next=2;break}return le.abrupt("return",A);case 2:return A=Promise.resolve().then(e.bind(e,76637)).then(function(K){return K.default}),le.abrupt("return",A);case 4:case"end":return le.stop()}},V)}));return function(){return q.apply(this,arguments)}}();function S(q){var V=q.content,d=q.width,le=q.height,K=(0,t.wv)(),W=K.theme,J=K.getPrefixCls,se=J("mermaid"),Pe=(0,h.useMemo)(function(){return{theme:(W==null?void 0:W.algorithm)===m.Z.darkAlgorithm?"dark":"default",securityLevel:"loose",startOnLoad:!1}},[W==null?void 0:W.algorithm,W==null?void 0:W.token.fontFamily]),C=(0,h.useState)(""),Me=g()(C,2),Z=Me[0],ie=Me[1],te=(0,h.useState)(),Le=g()(te,2),G=Le[0],Te=Le[1],Be=(0,h.useId)(),Qe=(0,M.kebabCase)("mermaid-".concat(Be));return(0,v.Z)(E()(p()().mark(function Ge(){var I,de,De,O;return p()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.prev=0,Y.next=3,u();case 3:if(I=Y.sent,I){Y.next=7;break}return ie(V),Y.abrupt("return");case 7:return Y.next=9,I.parse(V);case 9:if(de=Y.sent,!de){Y.next=19;break}return I.initialize(Pe),Y.next=14,I.render(Qe,V);case 14:De=Y.sent,O=De.svg,ie(O),Y.next=20;break;case 19:throw new Error("Invalid Mermaid syntax");case 20:Y.next=26;break;case 22:Y.prev=22,Y.t0=Y.catch(0),Z||console.error("Mermaid parse error: ",Y.t0),ie(Z||"");case 26:case"end":return Y.stop()}},Ge,null,[[0,22]])})),[V,Pe]),(0,h.useEffect)(function(){if(Z){var Ge=new Blob([Z],{type:"image/svg+xml"}),I=URL.createObjectURL(Ge);return Te(I),function(){URL.revokeObjectURL(I)}}},[Z]),G?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(n,{}),(0,D.jsx)(k.Z,{className:se,src:G,alt:"mermaid",width:d,height:le,preview:{rootClassName:"".concat(se,"-preview")}})]}):null}},31382:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return A}});var $=e(9783),g=e.n($),T=e(5574),p=e.n(T),P=e(67294),E=e(56044),j=e(68400),_=e.n(j),k=e(9053),v,m=(0,k.vJ)(v||(v=_()([`
.`,`-operate-card {
  width: 100%;
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

  
    &-title {
      font-size: 12px;
      color: `,`;
      line-height: 20px;
      margin-bottom: 4px;
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
`])),function(u){return u.theme.prefixCls},function(u){return u.theme.borderRadiusLG},function(u){return u.theme.colorFillTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.prefixCls},function(u){return u.theme.prefixCls},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorText},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorBgBase},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.prefixCls},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorPrimary},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorFillTertiary},function(u){return u.theme.colorFillTertiary},function(u){return u.theme.colorFillQuaternary},function(u){return u.theme.colorTextTertiary}),M=e(93967),y=e.n(M),h=e(28387),t=e(9838),x=e(64057),D=e(85893);function s(u){var S=(0,E.wv)(),q=S.getPrefixCls,V=q("operate-card");return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)("div",{className:"".concat(V,"-line-body"),children:u.children})})}function n(u){var S,q=(0,E.wv)(),V=q.getPrefixCls,d=V("operate-card"),le=(0,P.useState)(((S=u.body)===null||S===void 0?void 0:S.defaultOpen)||!1),K=p()(le,2),W=K[0],J=K[1];return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(m,{}),(0,D.jsxs)("div",{className:d,children:[(0,D.jsxs)("div",{className:y()("".concat(d,"-header"),u.header.className,g()({},"".concat(d,"-header-has-body"),u.body)),onClick:function(){u.body&&J(!W)},children:[(0,D.jsx)("div",{className:"".concat(d,"-header-icon"),children:u.header.icon}),typeof u.header.title=="string"?(0,D.jsx)("div",{className:"".concat(d,"-header-title"),children:u.header.title}):u.header.title,u.header.description&&(0,D.jsx)("div",{className:"".concat(d,"-header-description"),children:u.header.description}),u.body&&(0,D.jsx)(x.Z,{size:"small",bordered:!1,className:"".concat(d,"-header-arrow"),icon:W?(0,D.jsx)(h.Z,{}):(0,D.jsx)(t.Z,{})})]}),u.body&&W&&(0,D.jsx)("div",{className:"".concat(d,"-body"),children:u.body.children})]})]})}n.LineBody=s;var A=n},85762:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return s}});var $=e(5574),g=e.n($),T=e(56044),p=e(31382),P=e(37303),E=e(64057),j=e(28387),_=e(9838),k=e(48095),v=e(50104),m=e(55839),M=e(16494),y=e(86250),h=e(67294),t=e(85893);function x(n){var A=n.images,u=(0,T.wv)(),S=u.getPrefixCls,q=S("operate-card");return(0,t.jsx)(m.ZP,{locale:{Image:{preview:""}},children:(0,t.jsx)(M.Z.PreviewGroup,{children:A.map(function(V,d){return(0,t.jsx)(M.Z,{src:V,width:44,height:44},d)})})})}function D(n){var A=n.item,u=(0,h.useState)(!1),S=g()(u,2),q=S[0],V=S[1],d=(0,T.wv)(),le=d.getPrefixCls,K=le("operate-card");return(0,t.jsxs)("div",{className:"".concat(K,"-rag-item"),children:[(0,t.jsxs)("div",{className:"".concat(K,"-rag-item-title"),onClick:function(){V(!q)},children:[(0,t.jsx)("span",{children:A.title}),(0,t.jsx)("span",{style:{flex:1}}),A.score?(0,t.jsxs)(P.Z,{color:"mauve",size:"small",className:"".concat(K,"-rag-item-score"),children:["\u5F97\u5206 ",(0,t.jsx)("b",{children:A.score})]}):null,(0,t.jsx)(E.Z,{bordered:!1,size:"small",icon:q?(0,t.jsx)(j.Z,{}):(0,t.jsx)(_.Z,{})})]}),q&&(0,t.jsxs)("div",{className:"".concat(K,"-rag-item-content"),children:[(0,t.jsx)("div",{className:"".concat(K,"-rag-item-content-text"),children:A.content}),A.images&&(0,t.jsx)("div",{className:"".concat(K,"-rag-item-images"),children:(0,t.jsx)(x,{images:A.images})}),A.link?(0,t.jsx)("a",{onClick:function(){window.open(A.link,"_blank")},className:"".concat(K,"-rag-item-footer"),href:A.link,target:"_blank",children:A.footer}):(0,t.jsx)("div",{className:"".concat(K,"-rag-item-footer"),children:A.footer})]})]})}function s(n){var A=n.title,u=A===void 0?"\u77E5\u8BC6\u5E93\u68C0\u7D22":A,S=n.subTitle,q=n.defaultOpen,V=q===void 0?!0:q,d=n.placeholder,le=d===void 0?"\u672A\u67E5\u8BE2\u5230\u4E0E\u63D0\u95EE\u76F8\u5173\u77E5\u8BC6\u5E93":d,K=n.images,W=n.query,J=n.filters,se=(0,T.wv)(),Pe=se.getPrefixCls,C=Pe("operate-card"),Me=(0,t.jsxs)(p.Z.LineBody,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"\u68C0\u7D22 Query"}),(0,t.jsx)("div",{className:"".concat(C,"-rag-group-content"),children:W})]}),K!=null&&K.length?(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"\u68C0\u7D22\u56FE\u7247"}),(0,t.jsx)("div",{className:"".concat(C,"-rag-group-content ").concat(C,"-rag-group-content-images"),children:(0,t.jsx)(x,{images:K})})]}):null,J?(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"\u8FC7\u6EE4\u6761\u4EF6"}),(0,t.jsx)("div",{className:"".concat(C,"-rag-group-content"),children:J})]}):null,n.list.length?(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"Output"}),n.list.map(function(Z,ie){return(0,t.jsx)(D,{item:Z},ie)})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"Output"}),(0,t.jsxs)(y.Z,{align:"center",justify:"center",gap:8,className:"".concat(C,"-rag-empty-placeholder"),children:[(0,t.jsx)(k.Z,{}),(0,t.jsx)("span",{children:le})]})]})]});return(0,t.jsx)(p.Z,{header:{icon:(0,t.jsx)(v.Z,{}),title:u,description:S},body:{defaultOpen:V,children:(0,t.jsx)("div",{className:"".concat(C,"-rag-children"),children:Me})}})}},79323:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return E}});var $=e(56044),g=e(31382),T=e(40443),p=e(33593),P=e(85893);function E(j){var _=(0,$.wv)(),k=_.getPrefixCls,v=j.defaultOpen,m=v===void 0?!0:v,M=j.loading,y=M===void 0?!1:M,h=k("operate-card");return(0,P.jsx)(g.Z,{header:{icon:y?(0,P.jsx)(T.Z,{spin:!0}):(0,P.jsx)(p.Z,{}),title:j.title,description:j.subTitle},body:{defaultOpen:y?m:!1,children:(0,P.jsx)(g.Z.LineBody,{children:(0,P.jsx)("div",{className:"".concat(h,"-thinking"),children:j.content})})}},y.toString())}},6874:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return m}});var $=e(9783),g=e.n($),T=e(56044),p=e(31382),P=e(41775),E=e(77900),j=e(40443),_=e(93967),k=e.n(_),v=e(85893);function m(M){var y=(0,T.wv)(),h=y.getPrefixCls,t=h("operate-card"),x=M.title,D=x===void 0?"Task List":x,s=M.list.filter(function(n){return n.status==="done"}).length;return(0,v.jsx)(p.Z,{header:{icon:(0,v.jsx)(P.Z,{}),title:D,description:"\xB7 ".concat(s?s+" of ":""," ").concat(M.list.length)},body:{defaultOpen:M.defaultOpen,children:(0,v.jsx)("div",{className:"".concat(t,"-todo-list"),children:M.list.map(function(n){return(0,v.jsxs)("div",{className:k()(g()(g()({},"".concat(t,"-todo-list-item"),!0),"".concat(t,"-todo-list-item-").concat(n.status),!0)),children:[(0,v.jsx)("div",{className:"".concat(t,"-todo-list-item-icon"),children:{done:(0,v.jsx)(E.Z,{}),todo:(0,v.jsx)(E.Z,{}),running:(0,v.jsx)(j.Z,{spin:!0})}[n.status]}),(0,v.jsx)("div",{className:"".concat(t,"-todo-list-item-title"),style:{textDecoration:n.status==="done"?"line-through":"none"},children:n.title})]},n.title)})})}})}},85786:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return t}});var $=e(5574),g=e.n($),T=e(56044),p=e(31382),P=e(97634),E=e(89698),j=e(40443),_=e(78598),k=e(33811),v=e(64057),m=e(4146),M=e(67294),y=e(85893);function h(x){var D=(0,T.wv)(),s=D.getPrefixCls,n=s("operate-card"),A=typeof x.content=="string"?x.content:JSON.stringify(x.content),u=(0,M.useState)(!1),S=g()(u,2),q=S[0],V=S[1],d=(0,M.useRef)(null);return(0,y.jsx)("div",{className:"".concat(n,"-tool-call-block"),children:(0,y.jsx)(k.Z,{title:x.title,extra:(0,y.jsx)(v.Z,{size:"small",style:{marginRight:"-6px"},icon:q?(0,y.jsx)(P.Z,{}):(0,y.jsx)(E.Z,{}),bordered:!1,onClick:function(){clearTimeout(d.current),navigator.clipboard.writeText(A),V(!0),d.current=setTimeout(function(){V(!1)},2e3)}}),children:(0,y.jsx)(m.ZP,{language:"json",value:A,readOnly:!0})})})}function t(x){var D=x.title,s=D===void 0?"Call Tool":D,n=x.subTitle,A=x.defaultOpen,u=A===void 0?!0:A,S=x.loading,q=S===void 0?!1:S;return(0,y.jsx)(p.Z,{header:{icon:q?(0,y.jsx)(j.Z,{spin:!0}):(0,y.jsx)(_.Z,{}),title:s,description:n},body:{defaultOpen:u,children:(0,y.jsxs)(p.Z.LineBody,{children:[(0,y.jsx)(h,{title:"Input",content:x.input}),(0,y.jsx)(h,{title:"Output",content:x.output})]})}})}},69610:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return k}});var $=e(9783),g=e.n($),T=e(56044),p=e(31382),P=e(9229),E=e(93967),j=e.n(E),_=e(85893);function k(v){var m=(0,T.wv)(),M=m.getPrefixCls,y=M("operate-card"),h=v.title,t=h===void 0?"\u8054\u7F51\u641C\u7D22":h,x=v.subTitle;return(0,_.jsx)(p.Z,{header:{icon:(0,_.jsx)(P.Z,{}),title:t,description:x},body:{defaultOpen:!0,children:(0,_.jsx)(p.Z.LineBody,{children:v.list.map(function(D){return(0,_.jsxs)("div",{className:j()(g()({},"".concat(y,"-web-search-item"),!0)),onClick:function(){window.open(D.link,"_blank")},children:[(0,_.jsx)("img",{className:"".concat(y,"-web-search-item-icon"),src:D.icon,alt:D.title}),(0,_.jsx)("div",{className:"".concat(y,"-web-search-item-title"),children:D.title}),D.subTitle&&(0,_.jsx)("div",{className:"".concat(y,"-web-search-item-subTitle"),children:D.subTitle})]},D.title)})})}})}},56809:function(Ve,Q,e){"use strict";e.d(Q,{B4:function(){return g.Z},BI:function(){return $.Z},Sn:function(){return P.Z},fz:function(){return p.Z},x4:function(){return T.Z}});var $=e(79323),g=e(6874),T=e(85786),p=e(69610),P=e(85762)},83962:function(Ve,Q,e){"use strict";e.d(Q,{HJ:function(){return _},NR:function(){return E},xy:function(){return j}});var $=e(97857),g=e.n($),T=e(67294),p=e(24963),P=e(85893),E=(0,T.createContext)(void 0),j=function(v){return(0,P.jsx)(E.Provider,{value:v.cardConfig,children:v.children})},_=function(){var v=T.useContext(E);return T.useMemo(function(){return g()(g()({},p),v)},[v])}},92049:function(Ve,Q,e){"use strict";e.d(Q,{R:function(){return p},bN:function(){return P}});var $=e(67294),g=e(85893),T=(0,$.createContext)(void 0),p=function(j){return(0,g.jsx)(T.Provider,{value:j,children:j.children})},P=function(){var j=$.useContext(T);return j||{}}},56044:function(Ve,Q,e){"use strict";e.d(Q,{wv:function(){return j}});var $=e(21766),g=e(67294),T=e(83962),p=e(92049),P=e(85893),E=function(k){var v=k.children,m=k.cardConfig,M=k.markdown;return(0,P.jsx)(p.R,{markdown:M,children:(0,P.jsx)(T.xy,{cardConfig:m,children:v})})};function j(){var _=g.useContext($.ZP.ConfigContext);return _}Q.ZP=E},44294:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return y},a:function(){return v}});var $=e(97857),g=e.n($),T=e(24772),p=e(83622),P=e(93967),E=e.n(P),j=e(29372),_=e(67294),k=e(85893),v=_.createContext({}),m=function(){return{height:0}},M=function(t){return{height:t.scrollHeight}};function y(h){var t=h.title,x=h.onOpenChange,D=h.open,s=h.children,n=h.className,A=h.style,u=h.classNames,S=u===void 0?{}:u,q=h.styles,V=q===void 0?{}:q,d=h.closable,le=h.forceRender,K=_.useContext(v),W=K.prefixCls,J="".concat(W,"-header");return(0,k.jsx)(j.ZP,{motionEnter:!0,motionLeave:!0,motionName:"".concat(J,"-motion"),leavedClassName:"".concat(J,"-motion-hidden"),onEnterStart:m,onEnterActive:M,onLeaveStart:M,onLeaveActive:m,visible:D,forceRender:le,children:function(Pe){var C=Pe.className,Me=Pe.style;return(0,k.jsxs)("div",{className:E()(J,C,n),style:g()(g()({},Me),A),children:[(d!==!1||t)&&(0,k.jsxs)("div",{className:E()("".concat(J,"-header"),S.header),style:g()({},V.header),children:[(0,k.jsx)("div",{className:"".concat(J,"-title"),children:t}),d!==!1&&(0,k.jsx)("div",{className:"".concat(J,"-close"),children:(0,k.jsx)(p.ZP,{type:"text",icon:(0,k.jsx)(T.Z,{}),size:"small",onClick:function(){x==null||x(!D)}})})]}),s&&(0,k.jsx)("div",{className:E()("".concat(J,"-content"),S.content),style:g()({},V.content),children:s})]})}})}},66672:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return ae}});var $=e(19632),g=e.n($),T=e(97857),p=e.n(T),P=e(9783),E=e.n(P),j=e(5574),_=e.n(j),k=e(13769),v=e.n(k),m=e(48045),M=e(86250),y=e(93967),h=e.n(y),t=e(56790),x=e(30339),D=e(94787),s=e(67294),n=e(11154),A=e(83204);function u(f,F){return(0,s.useImperativeHandle)(f,function(){var U=F(),fe=U.nativeElement;return new Proxy(fe,{get:function(Fe,be){return U[be]?U[be]:Reflect.get(Fe,be)}})})}var S=e(56044),q=e(44294),V=e(64057),d=e(85893),le=["className","action","onClick"],K=s.createContext(null);function W(f){var F=f.className,U=f.action,fe=f.onClick,Ie=v()(f,le),Fe=s.useContext(K),be=Fe.prefixCls,Ye=Fe.disabled,qe=Fe[U],ge=Ye||Ie.disabled||Fe["".concat(U,"Disabled")]||!1;return(0,d.jsx)(V.Z,p()(p()({bordered:!1,disabled:ge},Ie),{},{onClick:function(vn){ge||(qe&&qe(),fe&&fe(vn))},className:h()(be,F,E()({},"".concat(be,"-disabled"),ge))}))}var J=s.forwardRef(W),se=e(69291);function Pe(f,F){return(0,d.jsx)(J,p()(p()({icon:(0,d.jsx)(se.Z,{})},f),{},{action:"onClear",ref:F}))}var C=s.forwardRef(Pe),Me=(0,s.memo)(function(f){var F=f.className;return(0,d.jsxs)("svg",{color:"currentColor",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:F,children:[(0,d.jsx)("title",{children:"Stop Loading"}),(0,d.jsx)("rect",{fill:"currentColor",height:"250",rx:"24",ry:"24",width:"250",x:"375",y:"375"})]})}),Z=Me,ie=e(67055),te=["className","loading"];function Le(f,F){var U=s.useContext(K),fe=U.prefixCls,Ie=f.className,Fe=f.loading,be=v()(f,te),Ye=(0,d.jsx)(J,p()(p()({icon:(0,d.jsx)(Z,{className:"".concat(fe,"-loading-icon")}),type:"primary",variant:"text"},be),{},{className:h()(Ie,"".concat(fe,"-loading-button")),action:"onCancel",ref:F}));return typeof f.loading=="string"?(0,d.jsx)(ie.Z,{title:f.loading,children:Ye}):Ye}var G=s.forwardRef(Le),Te=e(43103);function Be(f,F){return(0,d.jsx)(J,p()(p()({icon:(0,d.jsx)(Te.Z,{}),type:"primary"},f),{},{action:"onSend",ref:F}))}var Qe=s.forwardRef(Be),Ge=e(36763),I=e(21474),de=1e3,De=4,O=140,H=O/2,Y=250,ke=500,Ne=.8;function Re(f){var F=f.className;return(0,d.jsxs)("svg",{color:"currentColor",viewBox:"0 0 ".concat(de," ").concat(de),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:F,children:[(0,d.jsx)("title",{children:"Speech Recording"}),Array.from({length:De}).map(function(U,fe){var Ie=(de-O*De)/(De-1),Fe=fe*(Ie+O),be=de/2-Y/2,Ye=de/2-ke/2;return(0,d.jsxs)("rect",{fill:"currentColor",rx:H,ry:H,height:Y,width:O,x:Fe,y:be,children:[(0,d.jsx)("animate",{attributeName:"height",values:"".concat(Y,"; ").concat(ke,"; ").concat(Y),keyTimes:"0; 0.5; 1",dur:"".concat(Ne,"s"),begin:"".concat(Ne/De*fe,"s"),repeatCount:"indefinite"}),(0,d.jsx)("animate",{attributeName:"y",values:"".concat(be,"; ").concat(Ye,"; ").concat(be),keyTimes:"0; 0.5; 1",dur:"".concat(Ne,"s"),begin:"".concat(Ne/De*fe,"s"),repeatCount:"indefinite"})]},fe)})]})}function Se(f,F){var U=s.useContext(K),fe=U.speechRecording,Ie=U.onSpeechDisabled,Fe=U.prefixCls,be=null;return fe?be=(0,d.jsx)(Re,{className:"".concat(Fe,"-recording-icon")}):Ie?be=(0,d.jsx)(Ge.Z,{}):be=(0,d.jsx)(I.Z,{}),(0,d.jsx)(J,p()(p()({icon:be,variant:"text"},f),{},{action:"onSpeech",ref:F}))}var nn=s.forwardRef(Se),Ke=e(68400),Ze=e.n(Ke),tn=e(9053),$e,Ue=(0,tn.vJ)($e||($e=Ze()([`
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
`])),function(f){return f.theme.prefixCls},function(f){return f.theme.colorBgBase},function(f){return f.theme.borderRadiusLG},function(f){return f.theme.colorBorderSecondary},function(f){return f.theme.motionDurationSlow},function(f){return f.theme.lineWidth},function(f){return f.theme.colorPrimaryHover},function(f){return f.theme.lineWidth},function(f){return f.theme.prefixCls},function(f){return f.theme.prefixCls},function(f){return f.theme.colorBgContainerDisabled},function(f){return f.theme.prefixCls},function(f){return f.theme.prefixCls},function(f){return f.theme.paddingXS},function(f){return f.theme.colorTextTertiary},function(f){return"var(--".concat(f.theme.prefixCls,"-color-fill-disable)")},function(f){return f.theme.controlHeight},function(f){return f.theme.controlHeight},function(f){return f.theme.prefixCls}),ln=Ue,r=e(52677),Ae=e.n(r),je;!je&&typeof window!="undefined"&&(je=window.SpeechRecognition||window.webkitSpeechRecognition);function we(f,F){var U=(0,t.zX)(f),fe=s.useMemo(function(){return Ae()(F)==="object"?[F.recording,F.onRecordingChange,typeof F.recording=="boolean"]:[void 0,void 0,!1]},[F]),Ie=_()(fe,3),Fe=Ie[0],be=Ie[1],Ye=Ie[2],qe=s.useState(null),ge=_()(qe,2),en=ge[0],vn=ge[1];s.useEffect(function(){if(typeof navigator!="undefined"&&"permissions"in navigator){var Cn=null;return navigator.permissions.query({name:"microphone"}).then(function(_n){vn(_n.state),_n.onchange=function(){vn(this.state)},Cn=_n}),function(){Cn&&(Cn.onchange=null)}}},[]);var jn=je&&en!=="denied",pn=s.useRef(null),Ln=(0,t.C8)(!1,{value:Fe}),hn=_()(Ln,2),xn=hn[0],on=hn[1],sn=s.useRef(!1),mn=function(){if(jn&&!pn.current){var _n=new je;_n.onstart=function(){on(!0)},_n.onend=function(){on(!1)},_n.onresult=function(Dn){if(!sn.current){var En,Bn=(En=Dn.results)===null||En===void 0||(En=En[0])===null||En===void 0||(En=En[0])===null||En===void 0?void 0:En.transcript;U(Bn)}sn.current=!1},pn.current=_n}},An=(0,t.zX)(function(Cn){Cn&&!xn||(sn.current=Cn,Ye?be==null||be(!xn):(mn(),pn.current&&(xn?(pn.current.stop(),be==null||be(!1)):(pn.current.start(),be==null||be(!0)))))});return[jn,An,xn]}var Ce=e(89102),Xe,He=(0,tn.vJ)(Xe||(Xe=Ze()([`
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

`])),function(f){return f.theme.prefixCls},function(f){return f.theme.borderRadius},function(f){return f.theme.colorBorderSecondary},function(f){return f.theme.colorTextSecondary},function(f){return f.theme.colorPrimary},function(f){return f.theme.colorPrimary},function(f){return f.theme.colorBorderSecondary},function(f){return f.theme.borderRadiusLG},function(f){return f.theme.borderRadiusLG},function(f){return f.theme.colorFillTertiary},function(f){return f.theme.colorTextSecondary});function an(f){var F=(0,S.wv)(),U=F.getPrefixCls,fe=U("sender-mode-select"),Ie=f.value,Fe=f.onChange,be=(0,s.useMemo)(function(){var qe=f.options.find(function(ge){return ge.value===Ie})||{};return qe},[f.value]),Ye=(0,d.jsx)(Ce.Z,{onClick:function(){return Fe(void 0)},style:{cursor:"pointer",fontSize:20}});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(He,{}),(0,d.jsxs)("div",{className:fe,style:f.style,children:[(0,d.jsx)("div",{className:"".concat(fe,"-options ").concat(Ie?"".concat(fe,"-hide"):""),children:f.options.map(function(qe){var ge=(0,d.jsx)(c,p()({onClick:function(){return Fe(qe.value)},className:"".concat(fe,"-option")},qe),qe.value);return ge})}),(0,d.jsx)("div",{className:"".concat(fe,"-display ").concat(Ie?"":"".concat(fe,"-hide")),children:(0,d.jsxs)("div",{className:"".concat(fe,"-display-flex"),children:[(0,d.jsx)(c,p()(p()({},be),{},{label:(be==null?void 0:be.selectedLabel)||(be==null?void 0:be.label),className:"".concat(fe,"-display-label")})),f.desc&&(0,d.jsx)("div",{className:"".concat(fe,"-display-desc"),children:f.desc}),f.closeTip?(0,d.jsx)(ie.Z,{title:f.closeTip,children:Ye}):Ye]})})]})]})}function c(f){var F=(0,d.jsxs)("div",{className:f.className,onClick:f.onClick,children:[f.icon,f.label]});return f.tooltip?(0,d.jsx)(ie.Z,{title:f.tooltip,placement:"topLeft",children:F}):F}var X=e(85441),ee=e(32485),ve,he=(0,tn.vJ)(ve||(ve=Ze()([`
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
`])),function(f){return f.theme.prefixCls},function(f){return f.theme.colorBorderSecondary},function(f){return f.theme.borderRadiusLG},function(f){return f.theme.borderRadiusLG},function(f){return f.theme.colorFillTertiary});function L(f){var F=f.leftChildren,U=f.rightChildren,fe=f.children,Ie=(0,S.wv)().getPrefixCls("sender-before-ui-container"),Fe=(0,s.useMemo)(function(){return F?(0,d.jsx)("div",{className:"".concat(Ie,"-left"),children:F}):null},[F]),be=(0,s.useMemo)(function(){return U?(0,d.jsx)("div",{className:"".concat(Ie,"-right"),children:U}):null},[U]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(he,{}),(0,d.jsx)("div",{className:Ie,children:(0,d.jsx)("div",{className:"".concat(Ie,"-content"),children:(0,d.jsx)("div",{className:"".concat(Ie,"-content-children"),children:fe||(0,d.jsxs)(d.Fragment,{children:[Fe,be]})})})})]})}var ce=["styles","classNames","className","rootClassName","style","defaultValue","value","readOnly","enableFocusExpand","sendDisabled","submitType","onSubmit","loading","onCancel","onChange","onFocus","onBlur","actions","onKeyPress","onKeyDown","disabled","header","onPaste","allowSpeech","onPasteFile","components","initialRows","scalable"];function B(f,F,U){return(0,D.Z)(f,F)||U}var re=s.forwardRef(function(f,F){var U=f,fe=U.styles,Ie=fe===void 0?{}:fe,Fe=U.classNames,be=Fe===void 0?{}:Fe,Ye=U.className,qe=U.rootClassName,ge=U.style,en=U.defaultValue,vn=U.value,jn=U.readOnly,pn=U.enableFocusExpand,Ln=pn===void 0?!1:pn,hn=U.sendDisabled,xn=hn===void 0?!1:hn,on=U.submitType,sn=on===void 0?"enter":on,mn=U.onSubmit,An=U.loading,Cn=U.onCancel,_n=U.onChange,Dn=U.onFocus,En=U.onBlur,Bn=U.actions,Vn=U.onKeyPress,nt=U.onKeyDown,rn=U.disabled,Je=U.header,un=U.onPaste,dn=U.allowSpeech,$n=U.onPasteFile,Pn=U.components,Tn=U.initialRows,Jn=Tn===void 0?2:Tn,Rn=U.scalable,qn=v()(U,ce),gn=Rn,kn=(0,s.useState)(gn?!1:void 0),Wn=_()(kn,2),yn=Wn[0],wn=Wn[1],Xn=(0,s.useState)(!1),bn=_()(Xn,2),fn=bn[0],Sn=bn[1],Zn=s.useMemo(function(){return yn?{maxRows:10,minRows:10}:{maxRows:10,minRows:Jn}},[gn,yn]),zn=(0,S.wv)(),lt=zn.direction,ct=zn.getPrefixCls,On=ct("sender"),Un=s.useRef(null),et=s.useRef(null);u(F,function(){var l,b;return{nativeElement:Un.current,focus:(l=et.current)===null||l===void 0?void 0:l.focus,blur:(b=et.current)===null||b===void 0?void 0:b.blur}}),(0,n.Z)(Un,{onFocus:function(b){Sn(!0),Dn==null||Dn()},onBlur:function(){Un.current&&!Un.current.contains(document.activeElement)&&(Sn(!1),En==null||En())}}),(0,A.Z)("click",function(l){Sn(!0),Dn==null||Dn()},{target:Un});var ut="".concat(On,"-input"),gt=h()(On,Ye,qe,E()(E()(E()(E()({},"".concat(On,"-rtl"),lt==="rtl"),"".concat(On,"-disabled"),rn),"".concat(On,"-focus"),fn&&Ln),"".concat(On,"-blur"),!fn&&Ln)),pt="".concat(On,"-actions-btn"),tt="".concat(On,"-actions-list"),xt=(0,t.C8)(en||"",{value:vn}),dt=_()(xt,2),Qn=dt[0],ft=dt[1],at=function(b,R){ft(b),_n&&_n(b,R)},Ct=we(function(l){at("".concat(Qn," ").concat(l))},dn),rt=_()(Ct,3),yt=rt[0],vt=rt[1],bt=rt[2],jt=B(Pn,["input"],m.Z.TextArea),Et=(0,x.Z)(qn,{attr:!0,aria:!0,data:!0}),Pt=p()(p()({},Et),{},{ref:et}),ot=function(){!o.onSendDisabled&&mn&&!An&&mn(Qn)},St=function(){at("")},st=s.useRef(!1),At=function(){st.current=!0},_t=function(){st.current=!1},Mt=function(b){var R=b.key==="Enter"&&!st.current;switch(sn){case"enter":R&&!b.shiftKey&&(b.preventDefault(),ot());break;case"shiftEnter":R&&b.shiftKey&&(b.preventDefault(),ot());break}Vn&&Vn(b)},Lt=function(b){var R;if(!$n){un==null||un(b);return}var w=Array.from(((R=b.clipboardData)===null||R===void 0?void 0:R.files)||[]);if(w.length===0){var oe,ne=Array.from(((oe=b.clipboardData)===null||oe===void 0?void 0:oe.items)||[]);w=ne.filter(function(N){return N.kind==="file"}).map(function(N){return N.getAsFile()}).filter(function(N){return N!==null})}w.length>0?(w.forEach(function(N){return $n(N)}),b.preventDefault()):un==null||un(b)},Dt=function(b){var R,w;b.target!==((R=Un.current)===null||R===void 0?void 0:R.querySelector(".".concat(ut)))&&b.preventDefault(),(w=et.current)===null||w===void 0||w.focus()},a=s.useMemo(function(){var l=Array.isArray(f.prefix)?g()(f.prefix):[f.prefix];return gn&&l.push((0,d.jsx)(V.Z,{onClick:function(){return wn(!yn)},bordered:!1,icon:yn?(0,d.jsx)(X.Z,{}):(0,d.jsx)(ee.Z,{})},"zoom")),l},[f.prefix,gn,yn,dn]),i=(0,d.jsx)(M.Z,{className:"".concat(tt,"-presets"),children:An?(0,d.jsx)(G,{loading:An}):(0,d.jsx)(Qe,{})});typeof Bn=="function"?i=Bn(i,{components:{SendButton:Qe,ClearButton:C,LoadingButton:G}}):Bn&&(i=Bn);var o={prefixCls:pt,onSend:ot,onSendDisabled:!Qn||!Qn.trim()||xn,onClear:St,onClearDisabled:!Qn,onCancel:Cn,onCancelDisabled:!An,onSpeech:function(){return vt(!1)},onSpeechDisabled:!yt,speechRecording:bt,disabled:!!rn};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ln,{}),(0,d.jsxs)("div",{ref:Un,className:gt,style:ge,children:[Je&&(0,d.jsx)(q.a.Provider,{value:{prefixCls:On,focus:fn,enableFocusExpand:Ln},children:Je}),(0,d.jsxs)("div",{className:"".concat(On,"-content"),children:[(0,d.jsx)(jt,p()(p()({},Pt),{},{disabled:!!rn,style:Ie.input,className:h()(ut,be.input),autoSize:Zn,value:Qn.slice(0,f.maxLength||Number.MAX_SAFE_INTEGER),onChange:function(b){at(b.target.value,b),vt(!0)},onPressEnter:Mt,onCompositionStart:At,onCompositionEnd:_t,onKeyDown:nt,onPaste:Lt,variant:"borderless",readOnly:jn})),(0,d.jsxs)("div",{className:"".concat(On,"-content-bottom"),children:[a.length>0&&(0,d.jsx)("div",{className:h()("".concat(On,"-prefix"),be.prefix),style:Ie.prefix,children:(0,d.jsxs)(M.Z,{gap:8,children:[dn&&(0,d.jsx)(K.Provider,{value:o,children:(0,d.jsx)(nn,{})}),a]})}),(0,d.jsxs)("div",{className:h()(tt,be.actions),style:Ie.actions,children:[f.maxLength?(0,d.jsxs)("div",{className:"".concat(tt,"-length"),children:[Qn.length,"/",f.maxLength]}):null,(0,d.jsx)(K.Provider,{value:o,children:i})]})]})]})]})]})}),z=re;z.Header=q.Z,z.ModeSelect=an,z.BeforeUIContainer=L;var ae=z},70770:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return D}});var $=e(89034),g=e(36674),T=e(9343),p=e(48095),P=e(97634),E=e(56044),j=e(68400),_=e.n(j),k=e(9053),v,m=(0,k.vJ)(v||(v=_()([`
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
`])),function(s){return s.theme.prefixCls},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorSuccessBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorSuccess},function(s){return s.theme.colorErrorBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorError},function(s){return s.theme.colorWarningBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorWarning},function(s){return s.theme.colorFillTertiary},function(s){return s.theme.prefixCls},function(s){return s.theme.colorInfo},function(s){return s.theme.colorText},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorBgBase},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorBgBase},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorText}),M=e(93967),y=e.n(M),h=e(21403),t=e(85893);function x(s){var n=(0,E.wv)(),A=n.getPrefixCls,u=A("status-card"),S=s.icon||{success:(0,t.jsx)($.Z,{}),error:(0,t.jsx)(g.Z,{}),warning:(0,t.jsx)(T.Z,{}),info:(0,t.jsx)(p.Z,{})}[s.status];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m,{}),(0,t.jsxs)("div",{className:y()(u,"".concat(u,"-").concat(s.status)),children:[(0,t.jsxs)("div",{className:"".concat(u,"-header"),children:[(0,t.jsxs)("div",{className:"".concat(u,"-header-top"),children:[(0,t.jsx)("div",{className:"".concat(u,"-header-icon"),children:S}),(0,t.jsx)("div",{className:"".concat(u,"-header-title"),children:s.title})]}),s.description&&(0,t.jsx)("div",{className:"".concat(u,"-header-description"),children:s.description})]}),s.children&&(0,t.jsx)("div",{className:"".concat(u,"-body"),children:s.children})]})]})}x.HITL=function(s){var n=s.title,A=n===void 0?"\u9700\u8981\u7528\u6237\u4EBA\u5DE5\u5E72\u9884":n,u=s.description,S=s.waitButtonText,q=S===void 0?"\u6211\u5DF2\u5B8C\u6210\uFF0C\u7EE7\u7EED\u4EFB\u52A1":S,V=s.doneButtonText,d=V===void 0?"\u7528\u6237\u5DF2\u786E\u8BA4":V,le=(0,E.wv)(),K=le.getPrefixCls,W=K("status-card"),J=s.actions!==void 0?s.actions:s.done?(0,t.jsx)(h.Z,{onClick:s.onDone,type:"primary",disabled:!0,icon:(0,t.jsx)(P.Z,{}),children:d}):(0,t.jsx)(h.Z,{onClick:s.onDone,type:"primary",children:q});return(0,t.jsx)(x,{status:s.done?"success":"info",title:A,children:u||J?(0,t.jsxs)("div",{className:"".concat(W,"-HITL"),children:[u&&(0,t.jsx)("div",{className:"".concat(W,"-HITL-desc"),children:u}),(0,t.jsx)("div",{className:"".concat(W,"-HITL-button"),children:J})]}):null})},x.Statistic=function(s){var n=(0,E.wv)(),A=n.getPrefixCls,u=A("status-card");return(0,t.jsx)("div",{className:"".concat(u,"-statistic"),children:s.values.map(function(S){return(0,t.jsxs)("div",{className:"".concat(u,"-statistic-item"),children:[(0,t.jsx)("div",{className:"".concat(u,"-statistic-item-title"),children:S.title}),(0,t.jsx)("div",{className:"".concat(u,"-statistic-item-value"),children:S.value})]})})})};var D=x},7354:function(Ve,Q,e){"use strict";var $=e(15009),g=e.n($),T=e(9783),p=e.n(T),P=e(97857),E=e.n(P),j=e(77262),_=e.n(j),k=e(93938),v=e.n(k),m=`

`,M=`
`,y=":",h=function(n){return(n!=null?n:"").trim()!==""};function t(){var s="";return new TransformStream({transform:function(A,u){s+=A;var S=s.split(m);S.slice(0,-1).forEach(function(q){h(q)&&u.enqueue(q)}),s=S[S.length-1]},flush:function(A){h(s)&&A.enqueue(s)}})}function x(){return new TransformStream({transform:function(n,A){var u=n.split(M),S=u.reduce(function(q,V){var d=V.indexOf(y);if(d===-1)throw new Error('The key-value separator "'.concat(y,'" is not found in the sse line chunk!'));var le=V.slice(0,d);if(!h(le))return q;var K=V.slice(d+1);return E()(E()({},q),{},p()({},le,K))},{});Object.keys(S).length!==0&&A.enqueue(S)}})}function D(s,n){var A=s.readableStream,u=s.transformStream;if(!(A instanceof ReadableStream))throw new Error("The options.readableStream must be an instance of ReadableStream.");var S=new TextDecoderStream,q=u?A.pipeThrough(S).pipeThrough(u):A.pipeThrough(S).pipeThrough(t()).pipeThrough(x());return q[Symbol.asyncIterator]=v()(g()().mark(function V(){var d,le,K,W;return g()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:d=this.getReader();case 1:return se.next=4,_()(d.read());case 4:if(le=se.sent,K=le.done,W=le.value,!K){se.next=9;break}return se.abrupt("break",15);case 9:if(W){se.next=11;break}return se.abrupt("continue",1);case 11:return se.next=13,n!=null&&n.openaiCompatible?E()(E()({},W),{},{data:W.data.slice(1)}):W;case 13:se.next=1;break;case 15:case"end":return se.stop()}},V,this)})),q}Q.Z=D},32116:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return $}});function $(g){return new Promise(function(T){return setTimeout(T,g)})}},66366:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return g}});var $={i8:"1.1.50"},g=$.i8},57657:function(Ve,Q,e){"use strict";e.r(Q);var $=e(5574),g=e.n($),T=e(9053),p=e(67294),P=e(85893),E=function(){var k=(0,p.useState)({x:0,y:0}),v=g()(k,2),m=v[0],M=v[1],y=(0,p.useState)(!1),h=g()(y,2),t=h[0],x=h[1],D=(0,p.useRef)(null),s=j(),n=s.styles,A=s.cx;(0,p.useEffect)(function(){var K=function(J){if(D.current){var se=D.current.getBoundingClientRect();M({x:J.clientX-se.left,y:J.clientY-se.top})}};return window.addEventListener("mousemove",K),function(){return window.removeEventListener("mousemove",K)}},[]),(0,p.useEffect)(function(){var K=setInterval(function(){x(!0),setTimeout(function(){return x(!1)},150)},5e3);return function(){return clearInterval(K)}},[]);var u=function(){var W=32,J=32,se=m.x-W,Pe=m.y-J,C=6,Me=6,Z=Math.sqrt(se*se+Pe*Pe),ie=50;if(Z===0)return{x:0,y:0};var te=Math.min(Z/ie,1),Le=se/Z*C*te,G=Pe/Z*Me*te;return{x:Math.max(-C,Math.min(C,Le)),y:Math.max(-Me,Math.min(Me,G))}},S=function(W){var J=32,se=m.x-J,Pe=400;if(Math.abs(se)<Pe)return 1;var C=Math.abs(se)-Pe,Me=32-Pe,Z=Math.min(C/Me,1);return se>Pe?W?1-Z*.5:1:se<-Pe?W?1:1-Z*.5:1},q=u(),V=u(),d=S(!0),le=S(!1);return(0,P.jsxs)("div",{ref:D,className:n.container,children:[(0,P.jsx)("div",{className:A(n.eye,n.leftEye,t?n.blinkingEye:""),style:{transform:"translate(".concat(q.x,"px, ").concat(q.y,"px) ").concat(t?"scaleY(0.1)":"scaleY(".concat(d,")"))}}),(0,P.jsx)("div",{className:A(n.eye,n.rightEye,t?n.blinkingEye:""),style:{transform:"translate(".concat(V.x,"px, ").concat(V.y,"px) ").concat(t?"scaleY(0.1)":"scaleY(".concat(le,")"))}})]})};Q.default=E;var j=(0,T.kc)(function(_){var k=_.css,v=_.token;return{container:{width:64,height:64,backgroundColor:"black",borderRadius:12,position:"relative",cursor:"pointer",overflow:"hidden",boxShadow:"15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)"},eye:{width:6,height:12,backgroundColor:"white",borderRadius:99,position:"absolute",top:16,transition:"transform 0.1s ease-out"},leftEye:{left:22},rightEye:{left:36},blinkingEye:{transition:"transform 0.05s ease-out"}}})},31295:function(Ve,Q,e){"use strict";e.d(Q,{Z:function(){return k}});var $=e(68400),g=e.n($),T=e(67294),p=e(9053),P=e(56044),E=e(85893),j,_=(0,p.vJ)(j||(j=g()([`
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
`])),function(v){return v.theme.prefixCls},function(v){return v.theme.colorText},function(v){return v.theme.colorTextSecondary});function k(v){var m=(0,P.wv)(),M=m.getPrefixCls,y=M("welcome"),h=typeof v.logo=="string"?(0,E.jsx)("img",{className:y+"-logo",src:v.logo}):v.logo;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(_,{}),(0,E.jsxs)("div",{className:y,style:v.style,children:[h,(0,E.jsxs)("div",{children:[(0,E.jsx)("div",{className:y+"-title",children:v.title}),(0,E.jsx)("div",{className:y+"-desc",children:v.desc})]})]})]})}},43601:function(Ve,Q,e){"use strict";e.r(Q),e.d(Q,{AIGC:function(){return ie.Z},Accordion:function(){return n.Z},AgentScopeRuntimeWebUI:function(){return t.Z},AssetsPreview:function(){return te.Z},Attachments:function(){return u.Z},Bubble:function(){return S.Z},ChatAnywhere:function(){return _.ZP},ChatInput:function(){return se.Z},ConfigProvider:function(){return $.ZP},Conversations:function(){return q.Z},CustomCardsContext:function(){return T.NR},CustomCardsProvider:function(){return T.xy},DeepThink:function(){return A.Z},DeepThinking:function(){return A.Z},DefaultCards:function(){return h},DeviceAction:function(){return V.Z},Disclaimer:function(){return d.Z},GenerativeUISandbox:function(){return Le.Z},HistoryPanel:function(){return q.Z},ImageGenerator:function(){return le.Z},Markdown:function(){return Z.Z},Mermaid:function(){return K.Z},OperateCard:function(){return W.Z},Process:function(){return n.Z},Rag:function(){return J.Sn},Sender:function(){return se.Z},SparkChatProvider:function(){return p.ZP},StatusCard:function(){return Pe.Z},Stream:function(){return E.Z},Thinking:function(){return J.BI},TodoList:function(){return J.B4},ToolCall:function(){return J.x4},WebSearch:function(){return J.fz},Welcome:function(){return Me.Z},createCard:function(){return j.L},sleep:function(){return C.Z},useChatAnywhere:function(){return k.TQ},useCustomCardsContext:function(){return T.HJ},useGlobalContext:function(){return P.bN},useInput:function(){return v.G},useMessages:function(){return m.y},useProviderContext:function(){return p.wv},useSessionList:function(){return M.x},uuid:function(){return y.Z},version:function(){return g.Z}});var $=e(55839),g=e(66366),T=e(83962),p=e(56044),P=e(92049),E=e(7354),j=e(50130),_=e(29041),k=e(76289),v=e(37254),m=e(4421),M=e(61316),y=e(88773),h=e(24963),t=e(5686),x=e(22863),D={};for(var s in x)["default","ConfigProvider","version","CustomCardsContext","CustomCardsProvider","SparkChatProvider","useCustomCardsContext","useGlobalContext","useProviderContext","Stream","createCard","ChatAnywhere","useChatAnywhere","useInput","useMessages","useSessionList","uuid","DefaultCards","AgentScopeRuntimeWebUI","Accordion","Process","DeepThink","DeepThinking","Attachments","Bubble","Conversations","HistoryPanel","DeviceAction","Disclaimer","ImageGenerator","Mermaid","OperateCard","ChatInput","Sender","StatusCard","sleep","Welcome","Markdown","AIGC","AssetsPreview","GenerativeUISandbox"].indexOf(s)<0&&(D[s]=function(G){return x[G]}.bind(0,s));e.d(Q,D);var n=e(487),A=e(14082),u=e(36417),S=e(9146),q=e(9368),V=e(55031),d=e(10325),le=e(2534),K=e(12181),W=e(31382),J=e(56809),se=e(66672),Pe=e(70770),C=e(32116),Me=e(31295),Z=e(66109),ie=e(86578),te=e(34487),Le=e(80115)}}]);
