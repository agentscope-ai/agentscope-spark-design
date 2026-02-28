(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1997],{86578:function(on,J,e){"use strict";e.d(J,{Z:function(){return me}});var ee=e(97857),h=e.n(ee),B=e(9783),x=e.n(B),b=e(13769),T=e.n(b),P=e(67294),R=e(93967),F=e.n(R),g=e(56044),p=e(66672),D=e(36417),j=e(44294),m=e(12624),t=e(41154),C=e(68400),w=e.n(C),i=e(9053),n,_=(0,i.vJ)(n||(n=w()([`
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
`])),function(ae){return ae.theme.prefixCls},function(ae){return ae.theme.prefixCls},function(ae){return ae.theme.prefixCls},function(ae){return ae.theme.prefixCls},function(ae){return ae.theme.borderRadius},function(ae){return ae.theme.colorBorderSecondary},function(ae){return ae.theme.colorBgBase},function(ae){return ae.theme.colorText}),d=e(85893),L=["className","icon"],oe=t.Z.Dragger,ie=function(Le){var Y=Le.className,_e=Le.icon,De=T()(Le,L),Qe=(0,g.wv)(),Xe=Qe.getPrefixCls,Ne=Xe("media-upload");return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(_,{}),(0,d.jsx)(oe,h()(h()({showUploadList:!1,className:F()(Ne,Y)},De),{},{children:(0,d.jsxs)("div",{className:F()("".concat(Ne,"-thumbnail")),children:[(0,d.jsx)("div",{className:F()("".concat(Ne,"-thumbnail-gradient"))}),_e||(0,d.jsx)(m.Z,{className:F()("".concat(Ne,"-thumbnail-icon"))})]})}))]})},f=ie,he,Q=(0,i.vJ)(he||(he=w()([`
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
`])),function(ae){return ae.theme.prefixCls},function(ae){return ae.theme.colorText},function(ae){return ae.theme.colorTextTertiary}),X=function(Le){var Y=Le.className,_e=Le.title,De=Le.description,Qe=(0,g.wv)(),Xe=Qe.getPrefixCls,Ne=Xe("media-info"),sn=!!_e||!!De;return sn?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Q,{}),(0,d.jsxs)("div",{className:F()(Ne,Y),children:[_e&&(0,d.jsx)("div",{className:F()("".concat(Ne,"-title")),children:_e}),De&&(0,d.jsx)("div",{className:F()("".concat(Ne,"-description")),children:De})]})]}):null},ne=X,ue,Pe=(0,i.vJ)(ue||(ue=w()([`
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
`])),function(ae){return ae.theme.prefixCls},function(ae){return ae.theme.colorBorderSecondary},function(ae){return ae.theme.prefixCls},function(ae){return ae.theme.prefixCls},function(ae){return ae.theme.prefixCls},function(ae){return ae.theme.prefixCls}),y=["title","description","maxCount"],Me=function(Le){var Y=Le.className,_e=Le.onUpload,De=_e===void 0?[]:_e,Qe=Le.attachedFiles,Xe=Qe===void 0?[[]]:Qe,Ne=Le.onFileChange,sn=(0,g.wv)(),nn=sn.getPrefixCls,bn=(0,P.useContext)(j.a),I=bn.focus,G=bn.enableFocusExpand,Ke=nn("aigc-sender-header"),We=(0,P.useMemo)(function(){return Xe.flat().length>0?!0:De.length<=0?!1:!!(I||!G)},[De,Xe,G,I]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Pe,{}),(0,d.jsx)(p.Z.Header,{closable:!1,open:We,children:(0,d.jsx)("div",{className:F()(Ke,Y),tabIndex:0,children:De==null?void 0:De.map(function(Ue,ke){var vn=Ue.title,mn=Ue.description,qe=Ue.maxCount,tn=qe===void 0?1:qe,gn=T()(Ue,y),Ve=Xe[ke]||[];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,h()({className:F()(x()({},"".concat(Ke,"-upload-hidden"),Ve.length>=tn)),maxCount:tn,fileList:Ve,onChange:function(r){Ue.beforeUpload&&r.file.status&&Ne(ke,r.fileList),Ue.beforeUpload||Ne(ke,r.fileList)},showUploadList:!1},gn),"upload-".concat(ke)),Ve.length>0&&(0,d.jsx)(D.Z,{items:Ve,onChange:function(r){return Ne(ke,r.fileList)}},"attachments-".concat(ke)),tn===1&&(0,d.jsx)(ne,{title:vn,description:mn},"info-".concat(ke))]})})})})]})},K=Me,me={SenderHeader:K,Info:ne,Upload:f}},487:function(on,J,e){"use strict";e.d(J,{Z:function(){return Pe}});var ee=e(9783),h=e.n(ee),B=e(97857),x=e.n(B),b=e(5574),T=e.n(b),P=e(67294),R=e(93967),F=e.n(R),g=e(56044),p=e(85893);function D(y){var Me=(0,g.wv)(),K=Me.getPrefixCls,me=K("accordion-content-body");return(0,p.jsxs)("div",{className:me,children:[y.headerLeft||y.headerRight?(0,p.jsxs)("div",{className:"".concat(me,"-header"),children:[y.headerLeft,(0,p.jsx)("div",{style:{flex:1}}),y.headerRight]}):null,(0,p.jsx)("div",{className:"".concat(me,"-body"),children:y.children})]})}var j=e(9361);function m(y){var Me=(0,g.wv)(),K=Me.theme,me=Me.getPrefixCls,ae=(K==null?void 0:K.algorithm)===j.Z.darkAlgorithm,Le=me("accordion-soft-light-title");return(0,p.jsx)("div",{className:Le,style:ae?{}:{color:"rgba(38, 36, 76, 0.88)"},children:y.children})}var t=e(68400),C=e.n(t),w=e(9053),i,n=(0,w.vJ)(i||(i=C()([`
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
`])),function(y){return y.theme.prefixCls},function(y){return y.theme.colorSuccess},function(y){return y.theme.prefixCls},function(y){return y.theme.colorError},function(y){return y.theme.colorTextSecondary},function(y){return y.theme.colorBgBase},function(y){return y.theme.borderRadiusLG},function(y){return y.theme.colorBorderSecondary},function(y){return y.theme.colorBorder},function(y){return y.theme.colorBorderSecondary},function(y){return y.theme.colorBgBase},function(y){return y.theme.colorText},function(y){return y.theme.prefixCls},function(y){return y.theme.prefixCls},function(y){return y.theme.prefixCls},function(y){return y.theme.prefixCls},function(y){return y.theme.prefixCls},function(y){return y.theme.colorFillTertiary},function(y){return y.theme.prefixCls},function(y){return y.theme.colorTextSecondary},function(y){return y.theme.colorBorderSecondary},function(y){return y.theme.prefixCls},function(y){return y.theme.prefixCls},function(y){return y.theme.colorBorderSecondary},function(y){return y.theme.colorBorderSecondary},function(y){return y.theme.colorFillTertiary},function(y){return y.theme.colorText},function(y){return y.theme.colorBgBase}),_=e(40443),d=e(89034),L=e(9343),oe=e(36674),ie=e(9838),f=e(28387),he=e(16592);function Q(y){var Me=(0,g.wv)(),K=Me.getPrefixCls,me=K("accordion-group"),ae=P.useState(y.defaultOpen),Le=T()(ae,2),Y=Le[0],_e=Le[1],De=y.open!==void 0?y.open:Y,Qe=y.inline?"close":De?"open":"close",Xe=(0,P.useMemo)(function(){if(y.icon)return y.icon;if(y.status==="generating")return(0,p.jsx)(_.Z,{className:"".concat(me,"-icon-loading"),spin:!0});if(y.status==="finished")return(0,p.jsx)(d.Z,{className:"".concat(me,"-icon-success")});if(y.status==="interrupted")return(0,p.jsx)(L.Z,{});if(y.status==="error")return(0,p.jsx)(oe.Z,{className:"".concat(me,"-icon-error")})},[y.status,y.icon]),Ne=(0,P.useMemo)(function(){return y.steps?y.steps.map(function(sn,nn){var bn=nn===0,I=nn===y.steps.length-1;return(0,p.jsx)(Q,x()(x()({},sn),{},{isFirst:bn,isLast:I}),sn.id||nn)}):y.children},[y.steps,y.children]);return(0,p.jsxs)("div",{className:F()("".concat(me),"".concat(me,"-").concat(Qe)),children:[(0,p.jsxs)("div",{className:F()("".concat(me,"-header"),"".concat(me,"-header-").concat(Qe)),onClick:function(){return Ne&&y.open===void 0&&_e(!Y)},children:[Xe?(0,p.jsx)("div",{className:F()("".concat(me,"-header-icon"),h()(h()(h()({},"".concat(me,"-header-icon-line"),y.iconLine),"".concat(me,"-header-icon-first"),y.isFirst),"".concat(me,"-header-icon-last"),y.isLast&&Qe==="close"||y.level)),children:Xe}):null,(0,p.jsx)("div",{children:y.title}),Ne&&(0,p.jsx)("div",{className:F()("".concat(me,"-header-arrow")),children:De?(0,p.jsx)(f.Z,{}):(0,p.jsx)(ie.Z,{})}),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{style:{flex:1}}),y.rightChildren]})]}),(0,p.jsx)(ne,{prefixCls:me,stateOpen:De,status:Qe,inline:y.inline,content:Ne,bodyStyle:y.bodyStyle,level:y.level})]})}var X={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function ne(y){var Me=(0,P.useRef)(null);if(!y.content)return null;var K=y.prefixCls,me=y.stateOpen,ae=y.inline,Le=y.bodyStyle,Y=y.level;return(0,p.jsx)(he.ZP,{nodeRef:Me,in:me,timeout:300,children:function(De){return(0,p.jsx)("div",{style:x()(x()(x()({},Le),Y?{marginTop:0}:{}),{},{transition:"opacity ".concat(300,"ms ease-in-out")},X[De]),className:F()("".concat(K,"-body"),"".concat(K,"-body-").concat(me?"open":"close"),h()({},"".concat(K,"-body-inline"),ae)),children:y.content})}})}function ue(y){var Me=y.level,K=Me===void 0?1:Me,me=y.isFirst,ae=me===void 0?!0:me,Le=y.isLast,Y=Le===void 0?!0:Le;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n,{}),(0,p.jsx)(Q,x()(x()({},y),{},{level:K,isFirst:ae,isLast:Y}))]})}ue.BodyContent=D,ue.SoftLightTitle=m;var Pe=ue},14082:function(on,J,e){"use strict";e.d(J,{Z:function(){return P}});var ee=e(487),h=e(56044),B=e(9361),x=e(93967),b=e.n(x),T=e(85893);function P(R){var F=(0,h.wv)(),g=F.theme,p=F.getPrefixCls,D=p("accordion-deep-thinking"),j=(g==null?void 0:g.algorithm)===B.Z.darkAlgorithm,m=(0,T.jsx)("img",{style:{display:"block",width:16,height:16,filter:j?"invert(1)  brightness(100%) saturate(0%)":""},src:"https://img.alicdn.com/imgextra/i2/O1CN01QZgWRv1I4JM0BAZ9O_!!6000000000839-54-tps-56-56.apng"}),t=R.title||"Deep thinking";R.loading&&(t+="...");var C=R.loading?(0,T.jsx)(ee.Z.SoftLightTitle,{children:t}):t,w=R.maxHeight?{maxHeight:R.maxHeight,overflowY:"auto"}:{},i=R.defaultOpen!==void 0?R.defaultOpen:R.autoCloseOnFinish&&!R.loading?!1:void 0;return(0,T.jsx)(ee.Z,{title:C,status:R.loading?"generating":"finished",icon:R.loading?m:null,defaultOpen:i,open:R.open,bodyStyle:w,inline:!0,children:(0,T.jsx)("div",{className:b()(D,R.className),children:R.content||"..."})})}},5686:function(on,J,e){"use strict";e.d(J,{Z:function(){return Rt}});var ee=e(97857),h=e.n(ee),B=e(9783),x=e.n(B),b=e(56044),T=e(68400),P=e.n(T),R=e(9053),F,g=(0,R.vJ)(F||(F=P()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.colorBgBase},function(o){return o.theme.prefixCls},function(o){return o.theme.colorBgBase},function(o){return o.theme.prefixCls},function(o){return o.theme.colorFillTertiary},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls}),p=e(93967),D=e.n(p),j=e(17909),m=e(59214),t=e(67294),C=e(81759),w=e(49131),i=e(21766),n=e(85893),_=(0,m.createContext)(void 0);function d(o){try{var u=(0,m.useContextSelector)(_,o);return u}catch(s){return{}}}function L(o){var u=o.children,s=(0,j.Z)(),c=(0,t.useMemo)(function(){var ce=o.options.theme||{};return h()(h()({},o.options),{},{theme:h()(h()({},ce),{},{narrowMode:!s.lg||ce.narrowMode})})},[o.options,s.lg]),S=(0,t.useMemo)(function(){var ce=c.theme.colorPrimary,le=c.theme.colorBgBase,Z=c.theme.colorTextBase,ge=c.theme.darkMode;if(ce||ge){var Ee=(0,C.Z)((0,w.Z)({primaryHex:ce,bgBaseHex:le,textBaseHex:Z,darkMode:ge}));return Ee}},[c.theme.colorPrimary,c.theme.colorBgBase,c.theme.colorTextBase,c.theme.darkMode]),k=(0,n.jsx)(_.Provider,{value:c,children:u});if(S){var W=c.theme.prefix||"agentscope-runtime-webui";return(0,n.jsx)(i.ZP,h()(h()({},S),{},{style:{height:"100%"},prefix:W,prefixCls:W,children:k}))}return k}var oe=null,ie=e(15009),f=e.n(ie),he=e(99289),Q=e.n(he),X=e(5574),ne=e.n(X),ue=e(66672),Pe=e(10325),y=e(79785),Me=(0,m.createContext)({loading:!1,setLoading:function(){},getLoading:function(){return!1},disabled:!1,setDisabled:function(){},getDisabled:function(){return!1}});function K(o){var u=(0,y.Z)(!1),s=ne()(u,3),c=s[0],S=s[1],k=s[2],W=(0,y.Z)(!1),ce=ne()(W,3),le=ce[0],Z=ce[1],ge=ce[2];return(0,n.jsx)(Me.Provider,{value:{loading:c,setLoading:S,getLoading:k,disabled:le,setDisabled:Z,getDisabled:ge},children:o.children})}var me=function(u){return(0,m.useContextSelector)(Me,u)},ae=e(13769),Le=e.n(ae),Y=e(41154),_e=e(64057),De=e(81644),Qe=e(36417),Xe=["trigger"];function Ne(o,u){var s=(0,y.Z)([]),c=ne()(s,3),S=c[0],k=c[1],W=c[2],ce=o||{},le=ce.trigger,Z=Le()(ce,Xe);if(Z!=null&&Z.customRequest){var ge=(0,n.jsx)(Y.Z,h()(h()({fileList:S,showUploadList:!1,onChange:function(pe){k(pe.fileList)}},Z),{},{disabled:u==null?void 0:u.disabled,children:le?t.createElement(le,{disabled:u==null?void 0:u.disabled}):(0,n.jsx)(_e.Z,{disabled:u==null?void 0:u.disabled,icon:(0,n.jsx)(De.Z,{}),bordered:!1})})),Ee=(0,n.jsx)(ue.Z.Header,{closable:!1,open:(S==null?void 0:S.length)>0,children:(0,n.jsx)(Qe.Z,{items:S,onChange:function(pe){return k(pe.fileList)}})});return{fileList:S,getFileList:W,setFileList:k,uploadIconButton:ge,uploadFileListHeader:Ee}}else return{enabled:!1}}function sn(o){var u=(0,y.Z)(""),s=ne()(u,3),c=s[0],S=s[1],k=s[2],W=(0,b.wv)().getPrefixCls("chat-anywhere-input"),ce=d(function(Kn){return Kn.sender}),le=me(function(Kn){return Kn}),Z=ce||{},ge=Z.placeholder,Ee=ge===void 0?"":ge,Ce=Z.disclaimer,pe=Ce===void 0?"":Ce,je=Z.maxLength,Oe=Z.beforeSubmit,Fe=Oe===void 0?function(){return Promise.resolve(!0)}:Oe,xe=Z.beforeUI,Ae=Z.afterUI,Bn=Z.scalable,$n=Bn===void 0?!0:Bn,Sn=Z.attachments,Vn=Ne(Sn,{disabled:!!le.disabled}),Gn=Vn.getFileList,et=Vn.setFileList,zn=Vn.uploadIconButton,it=Vn.uploadFileListHeader,mt=(0,t.useCallback)(Q()(f()().mark(function Kn(){var _t,Je;return f()().wrap(function(Yn){for(;;)switch(Yn.prev=Yn.next){case 0:return Yn.next=2,Fe();case 2:if(_t=Yn.sent,_t){Yn.next=5;break}return Yn.abrupt("return");case 5:Je=((Gn==null?void 0:Gn())||[]).filter(function(It){var Ot;return(Ot=It.response)===null||Ot===void 0?void 0:Ot.url}),o.onSubmit({query:k(),fileList:Je}),S(""),et&&et([]);case 9:case"end":return Yn.stop()}},Kn)})),[]),ht=(0,t.useCallback)(function(){o.onCancel()},[]);return(0,n.jsxs)("div",{className:W,children:[(0,n.jsxs)("div",{className:"".concat(W,"-wrapper"),children:[xe,(0,n.jsx)(ue.Z,{loading:le.loading,disabled:le.disabled,scalable:$n,placeholder:Ee,value:c,prefix:(0,n.jsx)(n.Fragment,{children:zn}),header:it,onChange:S,maxLength:je,onSubmit:mt,onCancel:ht}),Ae]}),pe?(0,n.jsx)(Pe.Z,{desc:pe}):(0,n.jsx)("div",{className:"".concat(W,"-blank")})]})}var nn=e(39916),bn=e(19632),I=e.n(bn),G=(0,m.createContext)({messages:[],setMessages:function(){},getMessages:function(){return[]}});function Ke(o){var u=(0,y.Z)([]),s=ne()(u,3),c=s[0],S=s[1],k=s[2],W={messages:c,setMessages:S,getMessages:k};return(0,n.jsx)(G.Provider,{value:W,children:o.children})}var We=function(){var u=(0,m.useContextSelector)(G,function(le){return{setMessages:le.setMessages,getMessages:le.getMessages}}),s=u.setMessages,c=u.getMessages,S=t.useCallback(function(){s([])},[]),k=t.useCallback(function(le){return c().find(function(Z){return Z.id===le})},[]),W=t.useCallback(function(le){s(function(Z){return Z.filter(function(ge){return ge.id!==le.id})})},[]),ce=t.useCallback(function(le){s(function(Z){var ge=Z.findIndex(function(Ce){return Ce.id===le.id});if(ge>-1){var Ee=h()(h()({},Z[ge]),le);return[].concat(I()(Z.slice(0,ge)),[Ee],I()(Z.slice(ge+1)))}else return[].concat(I()(Z),[le])})},[]);return{getMessages:c,removeAllMessages:S,getMessage:k,removeMessage:W,updateMessage:ce}},Ue=e(78234),ke=e(73935),vn=e(2093),mn=(0,m.createContext)({sessions:[],setSessions:function(){},getSessions:function(){return[]},currentSessionId:void 0,setCurrentSessionId:function(){},getCurrentSessionId:function(){return""}});function qe(o){var u=d(function(Ce){return Ce.session}),s=(0,y.Z)([]),c=ne()(s,3),S=c[0],k=c[1],W=c[2],ce=(0,y.Z)(void 0),le=ne()(ce,3),Z=le[0],ge=le[1],Ee=le[2];return(0,Ue.Z)(Q()(f()().mark(function Ce(){var pe,je;return f()().wrap(function(Fe){for(;;)switch(Fe.prev=Fe.next){case 0:return Fe.next=2,u.api.getSessionList();case 2:je=Fe.sent,k(je),ge(je==null||(pe=je[0])===null||pe===void 0?void 0:pe.id);case 5:case"end":return Fe.stop()}},Ce)}))),(0,n.jsx)(mn.Provider,{value:{sessions:S,setSessions:k,getSessions:W,currentSessionId:Z,setCurrentSessionId:ge,getCurrentSessionId:Ee},children:o.children})}var tn=function(){var u=(0,m.useContextSelector)(mn,function(pe){return pe}),s=u.setSessions,c=u.getSessions,S=u.getCurrentSessionId,k=u.setCurrentSessionId,W=u.currentSessionId,ce=d(function(pe){return pe.session}),le=(0,m.useContextSelector)(G,function(pe){return pe.setMessages}),Z=t.useCallback(function(){var pe=Q()(f()().mark(function je(Oe){var Fe;return f()().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:return Ae.next=2,ce.api.removeSession(Oe);case 2:Fe=Ae.sent,le([]),k(void 0),s(Fe);case 6:case"end":return Ae.stop()}},je)}));return function(je){return pe.apply(this,arguments)}}(),[]),ge=t.useCallback(function(){var pe=Q()(f()().mark(function je(Oe){var Fe;return f()().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:if(!Oe.id){Ae.next=6;break}return Ae.next=3,ce.api.updateSession(Oe);case 3:Ae.t0=Ae.sent,Ae.next=9;break;case 6:return Ae.next=8,ce.api.createSession(Oe);case 8:Ae.t0=Ae.sent;case 9:return Fe=Ae.t0,s(Fe),Ae.abrupt("return",Oe);case 12:case"end":return Ae.stop()}},je)}));return function(je){return pe.apply(this,arguments)}}(),[]),Ee=t.useCallback(function(){var pe=Q()(f()().mark(function je(Oe){var Fe;return f()().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:return Ae.next=2,ge({name:(Oe==null?void 0:Oe.name)||"",messages:[]});case 2:return Fe=Ae.sent,k(Fe.id),le(Fe.messages),Ae.abrupt("return",Fe.id);case 6:case"end":return Ae.stop()}},je)}));return function(je){return pe.apply(this,arguments)}}(),[]),Ce=t.useCallback(function(pe){k(pe)},[]);return(0,vn.Z)(Q()(f()().mark(function pe(){var je,Oe;return f()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return ke.flushSync(function(){le([])}),xe.next=3,ce.api.getSession(W);case 3:if(xe.t2=je=xe.sent,xe.t1=xe.t2===null,xe.t1){xe.next=7;break}xe.t1=je===void 0;case 7:if(!xe.t1){xe.next=11;break}xe.t3=void 0,xe.next=12;break;case 11:xe.t3=je.messages;case 12:if(xe.t0=xe.t3,xe.t0){xe.next=15;break}xe.t0=[];case 15:Oe=xe.t0,le(Oe.map(function(Ae){return h()(h()({},Ae),{},{history:!0})}));case 17:case"end":return xe.stop()}},pe)})),[W]),{changeCurrentSessionId:Ce,getCurrentSessionId:S,getSessions:c,removeSession:Z,updateSession:ge,createSession:Ee}},gn=e(68997),Ve,Re=(0,R.vJ)(Ve||(Ve=P()([`
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
`])),function(o){return o.theme.prefixCls},function(o){var u=o.theme;return u.colorText},function(o){var u=o.theme;return u.colorTextSecondary},function(o){var u=o.theme;return u.colorFillQuaternary},function(o){var u=o.theme;return u.colorText},function(o){var u=o.theme;return u.colorFillTertiary}),r=e(38850),we=["render"];function ye(o){var u=d(function(Z){return Z.welcome}),s=(0,b.wv)().getPrefixCls("chat-anywhere-welcome-default");if(!u)return null;var c=u.render,S=Le()(u,we);if(c)return u.render({greeting:u.greeting,avatar:u.avatar,description:u.description,prompts:u.prompts,onSubmit:o.onSubmit});var k=S.greeting,W=S.avatar,ce=S.prompts,le=S.description;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Re,{}),(0,n.jsxs)("div",{className:s,children:[W&&(0,n.jsx)(gn.Z,{src:W,shape:"square",size:64}),k&&(0,n.jsx)("div",{className:"".concat(s,"-greeting"),children:k}),le&&(0,n.jsx)("div",{className:"".concat(s,"-description"),children:le}),(ce==null?void 0:ce.length)>0&&(0,n.jsx)("div",{className:"".concat(s,"-prompts"),children:ce.map(function(Z){var ge=typeof Z=="string"?{label:Z,value:Z}:h()(h()({},Z),{},{label:Z.label||Z.value,value:Z.value});return(0,n.jsx)(Ze,{prompt:ge,onSubmit:o.onSubmit},ge.value)})})]})]})}function Ze(o){var u=(0,b.wv)().getPrefixCls("chat-anywhere-welcome-default");return(0,n.jsxs)("div",{className:"".concat(u,"-prompt"),onClick:function(){return o.onSubmit({query:o.prompt.value})},children:[(0,n.jsx)("img",{className:"".concat(u,"-prompt-icon"),src:"https://img.alicdn.com/imgextra/i3/O1CN01822qqr1PVyaK7MYtn_!!6000000001847-2-tps-40-40.png",alt:""}),(0,n.jsx)("span",{className:"".concat(u,"-prompt-label"),children:o.prompt.label}),(0,n.jsx)(r.Z,{})]})}function Te(o){var u=(0,m.useContextSelector)(Me,function(k){return k.loading}),s=(0,m.useContextSelector)(G,function(k){return k.messages}),c=(0,b.wv)().getPrefixCls("chat-anywhere-message-list"),S=(0,m.useContextSelector)(mn,function(k){return k.currentSessionId});return s.length===0?(0,n.jsx)("div",{className:D()(c,"".concat(c,"-welcome")),children:(0,n.jsx)(ye,{onSubmit:o.onSubmit})}):(0,n.jsx)(nn.Z.List,{smooth:!!u,pagination:!0,classNames:{wrapper:c},items:s},S)}var un,dn=(0,R.vJ)(un||(un=P()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls}),ln=e(32116);function hn(o){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];(0,t.useEffect)(function(){return document.addEventListener(o.type,o.callback),function(){document.removeEventListener(o.type,o.callback)}},u)}var fn=function(u){var s=u.type,c=u.data;document.dispatchEvent(new CustomEvent(s,{detail:c}))},l=e(88773),te=e(12444),de=e.n(te),M=e(72004),$=e.n(M),N=function(o){return o.Created="created",o.InProgress="in_progress",o.Completed="completed",o.Canceled="canceled",o.Failed="failed",o.Rejected="rejected",o.Unknown="unknown",o}({}),q=function(o){return o.ASSISTANT="assistant",o.USER="user",o.SYSTEM="system",o}({}),v=function(o){return o.MESSAGE="message",o.REASONING="reasoning",o.PLUGIN_CALL="plugin_call",o.PLUGIN_CALL_OUTPUT="plugin_call_output",o.FUNCTION_CALL="function_call",o.FUNCTION_CALL_OUTPUT="function_call_output",o.COMPONENT_CALL="component_call",o.COMPONENT_CALL_OUTPUT="component_call_output",o.MCP_LIST_TOOLS="mcp_list_tools",o.MCP_APPROVAL_REQUEST="mcp_approval_request",o.MCP_APPROVAL_RESPONSE="mcp_approval_response",o.MCP_CALL="mcp_call",o.MCP_CALL_OUTPUT="mcp_call_output",o.HEARTBEAT="heartbeat",o.ERROR="error",o}({}),E=function(o){return o.TEXT="text",o.DATA="data",o.IMAGE="image",o.AUDIO="audio",o.FILE="file",o.REFUSAL="refusal",o}({}),a=function(){function o(){de()(this,o),x()(this,"data",void 0)}return $()(o,[{key:"isImageFile",value:function(s){return s.type.indexOf("image/")===0}},{key:"buildImageContent",value:function(s){var c;return{type:E.IMAGE,image_url:(c=s.response)===null||c===void 0?void 0:c.url,status:N.Created}}},{key:"buildTextContent",value:function(s){return{type:E.TEXT,text:s,status:N.Created}}},{key:"buildFileContent",value:function(s){var c;return{type:E.FILE,file_url:(c=s.response)===null||c===void 0?void 0:c.url,file_id:s.file_id,file_name:s.name,file_size:s.size,status:N.Created}}},{key:"handle",value:function(s){var c,S=this;this.data={input:[]};var k=[this.buildTextContent(s.query)];return(c=s.fileList)!==null&&c!==void 0&&c.length&&s.fileList.forEach(function(W){S.isImageFile(W)?k.push(S.buildImageContent(W)):k.push(S.buildFileContent(W))}),this.data={input:[{role:"user",type:v.MESSAGE,content:k}]},this.data}},{key:"handleApproval",value:function(s){return this.data={input:s},this.data}}],[{key:"getHistoryMessages",value:function(s){return s.reduce(function(c,S){var k;return(k=S.cards)!==null&&k!==void 0&&k.length?c.concat(S.cards[0].data.input||S.cards[0].data.output):c},[])}}]),o}(),O=a;function A(o){var u=o.currentQARef,s=We(),c=s.updateMessage,S=s.getMessages,k=s.removeMessage,W=(0,t.useCallback)(function(Ee){return u.current.abortController=new AbortController,u.current.request={id:(0,l.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new O().handle(Ee)}]},ke.flushSync(function(){c(u.current.request)}),u.current.request},[u,c]),ce=(0,t.useCallback)(function(Ee){return u.current.abortController=new AbortController,u.current.request={id:(0,l.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new O().handleApproval(Ee)}]},ke.flushSync(function(){c(u.current.request)}),u.current.request},[u,c]),le=(0,t.useCallback)(function(){return u.current.response={id:(0,l.Z)(),role:"assistant",cards:[],msgStatus:"generating"},c(u.current.response),u.current.response},[u,c]),Z=(0,t.useCallback)(function(){return O.getHistoryMessages(S())},[S]),ge=(0,t.useCallback)(function(Ee){ke.flushSync(function(){k({id:Ee})})},[k]);return{createRequestMessage:W,createApprovalMessage:ce,createResponseMessage:le,getHistoryMessages:Z,updateMessage:c,removeMessageById:ge,getMessages:S}}var U=e(44987),re=e.n(U),se=e(7354),H=e(64599),fe=e.n(H),ve=e(93513),V=function(){function o(u){var s=u.id,c=u.status,S=u.created_at;de()(this,o),x()(this,"data",void 0),this.data={id:s,output:[],object:"response",status:c||N.Created,created_at:S||Date.now()}}return $()(o,[{key:"handleResponse",value:function(s){this.data=(0,ve.produce)(this.data,function(c){s.output||(s.output=[]),Object.assign(c,s)})}},{key:"handleMessage",value:function(s){this.data=(0,ve.produce)(this.data,function(c){c.output||(c.output=[]);var S=c.output.findIndex(function(W){return W.id===s.id});if(S>=0){var k=c.output[S].content;Object.assign(c.output[S],s),(!s.content||s.content.length===0)&&(c.output[S].content=k)}else c.output.push(s)})}},{key:"handleContent",value:function(s){this.data=(0,ve.produce)(this.data,function(c){var S=c.output.find(function(W){return W.id===s.msg_id});if(!S){console.warn("Message not found for content:",s.msg_id);return}if(S.content||(S.content=[]),s.delta){var k=S.content[S.content.length-1];k&&k.delta?s.type===E.TEXT&&k.type===E.TEXT?k.text+=s.text:s.type===E.IMAGE?k.image_url=s.image_url:s.type===E.DATA&&(k.data=s.data):S.content.push(s)}else S.content.length>0?Object.assign(S.content[S.content.length-1],s):S.content.push(s)})}},{key:"handleError",value:function(s){this.data=(0,ve.produce)(this.data,function(c){c.status=N.Failed,c.output.push({status:N.Failed,type:v.ERROR,content:[],id:(0,l.Z)(),role:"assistant",code:s.code,message:typeof s.message=="string"?s.message:JSON.stringify(s.message)})})}},{key:"handle",value:function(s){if(s.object==="response")this.handleResponse(s);else if(s.object==="message"){if(s.type===v.HEARTBEAT)return this.data;this.handleMessage(s)}else s.object==="content"?this.handleContent(s):this.handleError(s);return this.data}},{key:"cancel",value:function(){return this.data=(0,ve.produce)(this.data,function(s){o.maybeGenerating(s)&&(s.status=N.Canceled),s.output.forEach(function(c){o.maybeGenerating(c)&&(c.status=N.Canceled,c.content.forEach(function(S){o.maybeGenerating(S)&&(S.status=N.Canceled)}))})}),this.data}}],[{key:"mergeToolMessages",value:function(s){var c=new Map,S=[],k=fe()(s),W;try{var ce=function(){var Z,ge,Ee=W.value;if(o.maybeToolInput(Ee)&&(Z=Ee.content)!==null&&Z!==void 0&&Z.length){var Ce=Ee.content[0],pe=Ce.data.call_id||Ce.data.name;c.set(pe,Ce),S.push(Ee)}else if(o.maybeToolOutput(Ee)&&(ge=Ee.content)!==null&&ge!==void 0&&ge.length){var je=Ee.content[0],Oe=je.data.call_id||je.data.name,Fe=c.get(Oe);Fe&&(S=S.map(function(xe){if(!o.maybeToolInput(xe))return xe;var Ae=xe.content[0],Bn=Ae.data.call_id||Ae.data.name;return Bn===Oe?h()(h()({},Ee),{},{content:[].concat(I()(xe.content),[je])}):xe}))}else S.push(Ee)};for(k.s();!(W=k.n()).done;)ce()}catch(le){k.e(le)}finally{k.f()}return S}},{key:"maybeToolOutput",value:function(s){return[v.FUNCTION_CALL_OUTPUT,v.PLUGIN_CALL_OUTPUT,v.COMPONENT_CALL_OUTPUT,v.MCP_CALL_OUTPUT].includes(s.type)}},{key:"maybeToolInput",value:function(s){return[v.FUNCTION_CALL,v.PLUGIN_CALL,v.COMPONENT_CALL,v.MCP_CALL].includes(s.type)}},{key:"maybeGenerating",value:function(s){return[N.InProgress,N.Created].includes(s.status)}},{key:"maybeDone",value:function(s){return[N.Completed,N.Canceled,N.Failed].includes(s.status)}}]),o}(),be=V;function an(o){var u=o.currentQARef,s=o.updateMessage,c=o.getCurrentSessionId,S=o.onFinish,k=d(function(Z){return Z.api}),W=(0,t.useRef)(k);(0,t.useEffect)(function(){W.current=k},[k]);var ce=(0,t.useCallback)(function(){var Z=Q()(f()().mark(function ge(Ee){var Ce,pe,je,Oe,Fe,xe,Ae,Bn;return f()().wrap(function(Sn){for(;;)switch(Sn.prev=Sn.next){case 0:Ce=new be({id:"",status:N.Created,created_at:0}),pe=!1,je=!1,Sn.prev=3,Fe=re()(Ee);case 5:return Sn.next=7,Fe.next();case 7:if(!(pe=!(xe=Sn.sent).done)){Sn.next=17;break}return Ae=xe.value,Bn=Ce.handle(Ae),u.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Bn}],s(u.current.response),Sn.next=14,(0,ln.Z)(100);case 14:pe=!1,Sn.next=5;break;case 17:Sn.next=23;break;case 19:Sn.prev=19,Sn.t0=Sn.catch(3),je=!0,Oe=Sn.t0;case 23:if(Sn.prev=23,Sn.prev=24,!(pe&&Fe.return!=null)){Sn.next=28;break}return Sn.next=28,Fe.return();case 28:if(Sn.prev=28,!je){Sn.next=31;break}throw Oe;case 31:return Sn.finish(28);case 32:return Sn.finish(23);case 33:case"end":return Sn.stop()}},ge,null,[[3,19,23,33],[24,,28,32]])}));return function(ge){return Z.apply(this,arguments)}}(),[]),le=(0,t.useCallback)(function(){var Z=Q()(f()().mark(function ge(Ee,Ce){var pe,je,Oe,Fe,xe,Ae,Bn,$n,Sn,Vn,Gn,et,zn,it,mt,ht,Kn;return f()().wrap(function(Je){for(;;)switch(Je.prev=Je.next){case 0:if(pe=W.current,je=pe.enableHistoryMessages,Oe=je===void 0?!1:je,Je.prev=2,!pe.fetch){Je.next=9;break}return Je.next=6,pe.fetch({input:Ee,biz_params:Ce});case 6:Je.t0=Je.sent,Je.next=12;break;case 9:return Je.next=11,fetch(pe.baseURL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(pe.token||"")},body:JSON.stringify({input:Oe?Ee:Ee.slice(-1),session_id:c(),stream:!0,biz_params:Ce})});case 11:Je.t0=Je.sent;case 12:Fe=Je.t0,Je.next=17;break;case 15:Je.prev=15,Je.t1=Je.catch(2);case 17:if(!(Fe&&Fe.body)){Je.next=67;break}if(xe=new be({id:"",status:N.Created,created_at:0}),Fe.ok){Je.next=22;break}return Fe.json().then(function(Dt){var Yn=xe.handle({object:"message",type:v.ERROR,content:[],id:"error",role:"assistant",status:N.Failed,code:Fe.status,message:JSON.stringify(Dt)});u.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Yn}],S()}),Je.abrupt("return");case 22:Je.prev=22,Ae=!1,Bn=!1,Je.prev=25,Sn=re()((0,se.Z)({readableStream:Fe.body}));case 27:return Je.next=29,Sn.next();case 29:if(!(Ae=!(Vn=Je.sent).done)){Je.next=46;break}if(Gn=Vn.value,((et=u.current.response)===null||et===void 0?void 0:et.msgStatus)!=="interrupted"){Je.next=37;break}return(it=u.current.abortController)===null||it===void 0||it.abort(),pe.cancel&&pe.cancel({session_id:c()}),u.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:xe.cancel()}],s(u.current.response),Je.abrupt("break",46);case 37:if(mt=W.current.responseParser||JSON.parse,ht=mt(Gn.data),Kn=xe.handle(ht),!(Kn.status!==N.Failed&&!((zn=Kn.output)!==null&&zn!==void 0&&(zn=zn[0])!==null&&zn!==void 0&&(zn=zn.content)!==null&&zn!==void 0&&zn.length))){Je.next=42;break}return Je.abrupt("continue",43);case 42:u.current.response&&(u.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Kn}],Kn.status===N.Completed||Kn.status===N.Failed?S():s(u.current.response));case 43:Ae=!1,Je.next=27;break;case 46:Je.next=52;break;case 48:Je.prev=48,Je.t2=Je.catch(25),Bn=!0,$n=Je.t2;case 52:if(Je.prev=52,Je.prev=53,!(Ae&&Sn.return!=null)){Je.next=57;break}return Je.next=57,Sn.return();case 57:if(Je.prev=57,!Bn){Je.next=60;break}throw $n;case 60:return Je.finish(57);case 61:return Je.finish(52);case 62:Je.next=67;break;case 64:Je.prev=64,Je.t3=Je.catch(22),console.error(Je.t3);case 67:case"end":return Je.stop()}},ge,null,[[2,15],[22,64],[25,48,52,62],[53,,57,61]])}));return function(ge,Ee){return Z.apply(this,arguments)}}(),[c,u,s,S]);return{request:le,mockRequest:ce}}function Cn(){var o=tn(),u=o.createSession,s=o.updateSession,c=o.getCurrentSessionId,S=(0,t.useCallback)(function(){var ce=Q()(f()().mark(function le(Z){return f()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:if(c()){Ee.next=3;break}return Ee.next=3,u({name:Z});case 3:case"end":return Ee.stop()}},le)}));return function(le){return ce.apply(this,arguments)}}(),[c,u]),k=(0,t.useCallback)(function(){var ce=Q()(f()().mark(function le(Z,ge){return f()().wrap(function(Ce){for(;;)switch(Ce.prev=Ce.next){case 0:if(ge.length!==0){Ce.next=3;break}return Ce.next=3,s({id:c(),name:Z});case 3:case"end":return Ce.stop()}},le)}));return function(le,Z){return ce.apply(this,arguments)}}(),[c,s]),W=(0,t.useCallback)(function(){var ce=Q()(f()().mark(function le(Z){return f()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:return Ee.next=2,s({id:c(),messages:Z});case 2:case"end":return Ee.stop()}},le)}));return function(le){return ce.apply(this,arguments)}}(),[c,s]);return{ensureSession:S,updateSessionName:k,syncSessionMessages:W,getCurrentSessionId:c}}function yn(){var o=(0,m.useContextSelector)(Me,function(Ce){return Ce.setLoading}),u=(0,m.useContextSelector)(mn,function(Ce){return Ce.currentSessionId}),s=(0,t.useRef)({}),c=A({currentQARef:s}),S=Cn(),k=(0,t.useCallback)(function(){var Ce=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished";s.current.response&&(s.current.response.msgStatus=Ce,o(!1),ke.flushSync(function(){c.updateMessage(s.current.response)}),S.syncSessionMessages(c.getMessages()))},[o,c,S]),W=an({currentQARef:s,updateMessage:c.updateMessage,getCurrentSessionId:S.getCurrentSessionId,onFinish:function(){return k("finished")}}),ce=W.request,le=(0,t.useCallback)(function(){var Ce=Q()(f()().mark(function pe(je){var Oe,Fe;return f()().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:return Ae.next=2,S.ensureSession(je.query);case 2:if(Oe=c.getMessages(),!S.getCurrentSessionId()){Ae.next=6;break}return Ae.next=6,S.updateSessionName(je.query,Oe);case 6:return c.createRequestMessage(je),o(!0),Ae.next=10,(0,ln.Z)(100);case 10:return c.createResponseMessage(),Fe=c.getHistoryMessages(),Ae.next=14,S.syncSessionMessages(c.getMessages());case 14:return Ae.next=16,ce(Fe,je.biz_params);case 16:case"end":return Ae.stop()}},pe)}));return function(pe){return Ce.apply(this,arguments)}}(),[c,S,ce]),Z=(0,t.useCallback)(function(){var Ce=Q()(f()().mark(function pe(je){var Oe,Fe;return f()().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:return Oe=je.input,c.createApprovalMessage(Oe),o(!0),Ae.next=5,(0,ln.Z)(100);case 5:return c.createResponseMessage(),Fe=c.getHistoryMessages(),Ae.next=9,S.syncSessionMessages(c.getMessages());case 9:return Ae.next=11,ce(Fe);case 11:case"end":return Ae.stop()}},pe)}));return function(pe){return Ce.apply(this,arguments)}}(),[c,S,ce]),ge=(0,t.useCallback)(function(){k("interrupted")},[k]),Ee=(0,t.useCallback)(function(){var Ce=Q()(f()().mark(function pe(je){var Oe;return f()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return o(!0),c.removeMessageById(je),s.current.abortController=new AbortController,c.createResponseMessage(),Oe=c.getHistoryMessages(),xe.next=7,ce(Oe);case 7:case"end":return xe.stop()}},pe)}));return function(pe){return Ce.apply(this,arguments)}}(),[c,ce]);return(0,t.useEffect)(function(){s.current={request:void 0,response:void 0,abortController:void 0}},[u]),hn({type:"handleReplace",callback:function(){var Ce=Q()(f()().mark(function je(Oe){return f()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,Ee(Oe.detail.id);case 2:case"end":return xe.stop()}},je)}));function pe(je){return Ce.apply(this,arguments)}return pe}()}),hn({type:"handleSubmit",callback:function(){var Ce=Q()(f()().mark(function je(Oe){return f()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,le(Oe.detail);case 2:case"end":return xe.stop()}},je)}));function pe(je){return Ce.apply(this,arguments)}return pe}()},[le]),hn({type:"handleApproval",callback:function(){var Ce=Q()(f()().mark(function je(Oe){return f()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,Z(Oe.detail);case 2:case"end":return xe.stop()}},je)}));function pe(je){return Ce.apply(this,arguments)}return pe}()},[Z]),{handleSubmit:le,handleCancel:ge}}function He(){var o=(0,b.wv)().getPrefixCls("chat-anywhere-chat"),u=yn(),s=u.handleSubmit,c=u.handleCancel;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(dn,{}),(0,n.jsxs)("div",{className:o,children:[(0,n.jsx)(Te,{onSubmit:s}),(0,n.jsx)(sn,{onCancel:c,onSubmit:s})]})]})}var $e=e(21403),z=e(67392),Ge=e(13660),rn=e(12624),cn=e(50287),An=e(9368),en=(0,t.createContext)({collapsed:!1,toggleCollapsed:function(){}});function En(o){var u=(0,t.useState)(!1),s=ne()(u,2),c=s[0],S=s[1],k=(0,t.useCallback)(function(){S(function(ce){return!ce})},[]),W=(0,t.useMemo)(function(){return{collapsed:c,toggleCollapsed:k}},[c,k]);return(0,n.jsx)(en.Provider,{value:W,children:o.children})}function Ie(){var o=(0,t.useContext)(en),u=o.collapsed,s=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),c=d(function(S){var k;return(k=S.theme)===null||k===void 0?void 0:k.leftHeader})||{};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"".concat(s),children:[t.isValidElement(c)?c:(0,n.jsx)(Se,{}),(0,n.jsxs)("div",{className:"".concat(s,"-content"),style:{display:u?"none":"flex"},children:[(0,n.jsx)(Ye,{}),(0,n.jsx)(jn,{})]})]})})}function Se(o){var u=o.className,s=d(function(pe){var je;return(je=pe.theme)===null||je===void 0?void 0:je.leftHeader})||{},c=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),S=(0,t.useContext)(en),k=S.toggleCollapsed,W=S.collapsed,ce=d(function(pe){return pe.session.multiple}),le=s,Z=le.logo,ge=Z===void 0?"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png":Z,Ee=le.title,Ce=Ee===void 0?"Runtime WebUI":Ee;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:D()("".concat(c,"-header"),u),children:[(0,n.jsxs)("div",{className:"".concat(c,"-header-left"),children:[ge&&(0,n.jsx)("img",{src:ge,alt:"logo",height:32}),(0,n.jsx)("span",{children:Ce})]}),ce&&(0,n.jsx)(_e.Z,{className:"".concat(c,"-header-collapse"),bordered:!1,icon:W?(0,n.jsx)(Ge.Z,{}):(0,n.jsx)(z.Z,{}),onClick:k})]})})}function Ye(o){var u=(0,m.useContextSelector)(Me,function(ce){return ce.loading}),s=tn(),c=s.createSession,S=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),k=(0,t.useContext)(en),W=k.toggleCollapsed;return(0,n.jsx)("div",{className:"".concat(S,"-adder"),style:o.style,children:(0,n.jsx)($e.Z,{block:!0,type:"primary",icon:(0,n.jsx)(rn.Z,{}),disabled:!!u,onClick:Q()(f()().mark(function ce(){return f()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,c();case 2:o.narrowMode&&W();case 3:case"end":return Z.stop()}},ce)})),children:"New Chat"})})}function jn(o){var u=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),s=(0,m.useContextSelector)(mn,function(ge){return ge.sessions}),c=tn(),S=c.changeCurrentSessionId,k=c.removeSession,W=(0,m.useContextSelector)(mn,function(ge){return ge.currentSessionId}),ce=(0,t.useContext)(en),le=ce.toggleCollapsed,Z=(0,t.useMemo)(function(){return s.map(function(ge){return{key:ge.id,label:ge.name||"New Chat"}})},[s]);return(0,n.jsx)("div",{className:"".concat(u,"-list"),style:o.style,children:(0,n.jsx)(An.Z,{items:Z,menu:[{key:"delete",icon:(0,n.jsx)(cn.Z,{}),danger:!0,onClick:function(){var ge=Q()(f()().mark(function Ce(pe){return f()().wrap(function(Oe){for(;;)switch(Oe.prev=Oe.next){case 0:return Oe.next=2,k({id:pe.key});case 2:return Oe.abrupt("return",Oe.sent);case 3:case"end":return Oe.stop()}},Ce)}));function Ee(Ce){return ge.apply(this,arguments)}return Ee}()}],activeKey:W,onActiveChange:function(Ee){S(Ee),o.narrowMode&&le()}})})}var _n,ze=(0,R.vJ)(_n||(_n=P()([`

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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls}),Be=e(85265);function pn(){var o=(0,b.wv)().getPrefixCls("chat-anywhere"),u=d(function(ce){return ce.theme}),s=u.narrowMode,c=u.rightHeader,S=(0,t.useContext)(en),k=S.toggleCollapsed,W=S.collapsed;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ze,{}),(0,n.jsxs)("div",{className:"".concat(o,"-layout-right-header"),children:[s?(0,n.jsx)(Se,{className:"".concat(o,"-default-header-inner")}):null,c&&(0,n.jsx)("div",{className:"".concat(o,"-default-header-right"),children:c})]}),s&&(0,n.jsx)(Be.Z,{width:"80vw",styles:{body:{padding:0}},open:W,onClose:k,title:null,closable:!1,placement:"left",children:(0,n.jsxs)("div",{className:"".concat(o,"-sessions"),children:[(0,n.jsx)(jn,{narrowMode:!0}),(0,n.jsx)(Ye,{narrowMode:!0})]})})]})}function xn(o,u){var s=We(),c=(0,m.useContextSelector)(Me,function(S){return S.setDisabled});return t.useImperativeHandle(u,function(){return{messages:s,input:{setDisabled:c,submit:function(k){var W=k.query,ce=k.fileList,le=k.biz_params;fn({type:"handleSubmit",data:{query:W,fileList:ce,biz_params:le}})}}}},[]),null}var Nn=(0,t.forwardRef)(xn);function Pn(o,u){var s=o.className,c=(0,b.wv)().getPrefixCls("chat-anywhere-layout"),S=d(function(Ce){return Ce.theme.narrowMode}),k=d(function(Ce){return Ce.theme.background}),W=d(function(Ce){return Ce.theme.rightHeader}),ce=d(function(Ce){return{session:Ce.session}}),le=ce.session,Z=(0,t.useContext)(en),ge=Z.collapsed,Ee=!S&&le&&le.multiple;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{}),(0,n.jsxs)("div",{className:D()("".concat(c),s),children:[Ee&&(0,n.jsx)("div",{className:D()("".concat(c,"-left"),x()({},"".concat(c,"-left-collapsed"),ge)),children:(0,n.jsx)(Ie,{})}),(0,n.jsxs)("div",{className:D()("".concat(c,"-right"),x()({},"".concat(c,"-right-has-header"),!!W)),style:{background:k},children:[!!W&&(0,n.jsx)(pn,{}),(0,n.jsx)(He,{})]})]}),(0,n.jsx)(Nn,{ref:u})]})}var Dn=(0,t.forwardRef)(Pn);function Wn(o){var u=(0,t.useMemo)(function(){return o.data.input[0].content.reduce(function(s,c){if(c.type===E.TEXT&&s.push({code:"Text",data:{content:c.text,raw:!0}}),c.type===E.IMAGE){var S=s.find(function(W){return W.code==="Image"});S?S.data.push({url:c.image_url}):s.push({code:"Images",data:[{url:c.image_url}]})}if(c.type===E.FILE){var k=s.find(function(W){return W.code==="Files"});k?k.data.push({url:c.file_url,name:c.file_name,size:c.file_size}):s.push({code:"Files",data:[{url:c.file_url,name:c.file_name,size:c.file_size}]})}return s},[])},[o.data.input]);return u!=null&&u.length?(0,n.jsx)(nn.Z,{role:"user",cards:u}):null}var In=e(66109),qn=t.memo(function(o){var u,s=o.data;return(u=s.content)!==null&&u!==void 0&&u.length?(0,n.jsx)(n.Fragment,{children:s.content.map(function(c,S){switch(c.type){case E.TEXT:return(0,n.jsx)(In.Z,{content:c.text,cursor:c.status===N.InProgress},S);case E.REFUSAL:return(0,n.jsx)(In.Z,{raw:!0,content:c.refusal},S);default:return(0,n.jsx)("div",{children:JSON.stringify(c)},S)}})}):null}),Mn=qn,kn=e(85786),Un=e(70770),Ln=e(86250),Zn=e(31912),Fn=e(7654),On=e(56290),Tn,Rn,Qn,Jn,lt,ct,wn,Hn,nt=(0,R.kc)(function(o){var u=o.css,s=o.token;return{container:u(Tn||(Tn=P()([`
    width: 386px;
  `]))),title:u(Rn||(Rn=P()([`
    font-size: 14px;
    font-weight: 500;
    color: `,`;
    margin-bottom: 16px;
  `])),s.colorText),content:u(Qn||(Qn=P()([`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `]))),tabsContainer:u(Jn||(Jn=P()([`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `]))),tabItem:u(lt||(lt=P()([`
    padding: 0 8px;
    font-size: 14px;
    color: `,`;
    cursor: pointer;
    border: 1px solid `,`;
    background: `,`;
    transition: all 0.2s;
    user-select: none;
    border-radius: 4px;
  `])),s.colorText,s.colorBorderSecondary,s.colorBgContainer),tabItemSelected:u(ct||(ct=P()([`
    color: `,`;
    border-color: `,`;
    border: 1px solid `,`;
    position: relative;
    z-index: 1;
  `])),s.colorPrimary,s.colorPrimary,s.colorPrimary),textarea:u(wn||(wn=P()([`
    resize: none;
  `]))),actions:u(Hn||(Hn=P()([`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  `])))}});function ut(){var o=(0,On.useTranslation)(),u=o.t;return[(u==null?void 0:u("cancelPopover.options.notNeeded"))||"\u4E0D\u9700\u8981",(u==null?void 0:u("cancelPopover.options.poorResult"))||"\u6548\u679C\u4E0D\u7406\u60F3",(u==null?void 0:u("cancelPopover.options.tooSlow"))||"\u7B49\u5F85\u65F6\u95F4\u4E45",(u==null?void 0:u("cancelPopover.options.wrongInput"))||"\u8F93\u5165\u9519\u8BEF"]}function gt(o){var u=o.options,s=(0,t.useState)(),c=ne()(s,2),S=c[0],k=c[1],W=nt(),ce=W.styles;return(0,n.jsx)("div",{className:ce.tabsContainer,children:u.map(function(le){return(0,n.jsx)("div",{className:"".concat(ce.tabItem," ").concat(S===le?ce.tabItemSelected:""),onClick:function(){k(le),o.onSelect(le)},children:le},le)})})}function pt(o){var u=(0,On.useTranslation)(),s=u.t,c=ut(),S=o.options,k=S===void 0?c:S,W=o.onConfirm,ce=o.title,le=ce===void 0?(s==null?void 0:s("cancelPopover.title"))||"\u53D6\u6D88\u539F\u56E0":ce,Z=o.placeholder,ge=Z===void 0?(s==null?void 0:s("cancelPopover.placeholder"))||"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212":Z,Ee=(0,t.useState)(!1),Ce=ne()(Ee,2),pe=Ce[0],je=Ce[1],Oe=nt(),Fe=Oe.styles,xe=(0,t.useState)(""),Ae=ne()(xe,2),Bn=Ae[0],$n=Ae[1],Sn=function(){W==null||W(Bn.trim())},Vn=(0,n.jsxs)("div",{className:Fe.container,children:[(0,n.jsx)("div",{className:Fe.title,children:le}),(0,n.jsxs)("div",{className:Fe.content,children:[(0,n.jsx)(gt,{options:k,onSelect:$n}),(0,n.jsx)(Zn.Z.TextArea,{className:Fe.textarea,value:Bn,onChange:function(et){return $n(et.target.value)},placeholder:ge,rows:3}),(0,n.jsxs)(Ln.Z,{className:Fe.actions,children:[(0,n.jsx)($e.Z,{size:"small",onClick:function(){return je(!1)},children:(s==null?void 0:s("cancelPopover.cancel"))||"\u53D6\u6D88"}),(0,n.jsx)($e.Z,{size:"small",type:"primary",onClick:function(){je(!1),Sn()},children:(s==null?void 0:s("cancelPopover.confirm"))||"\u786E\u8BA4"})]})]})]});return(0,n.jsx)(Fn.Z,{open:pe,onOpenChange:je,trigger:"click",content:Vn,children:(0,n.jsx)($e.Z,{size:"small",children:(s==null?void 0:s("approval.cancel"))||"\u53D6\u6D88\u6267\u884C"})})}var tt,xt=(0,R.kc)(function(o){var u=o.css,s=o.token;return{desc:u(tt||(tt=P()([`
    font-size: 12px;
    color: `,`;
  `])),s.colorTextTertiary)}});function dt(o){var u=o.data,s=me(function(Oe){return Oe}),c=xt(),S=c.styles,k=(0,On.useTranslation)(),W=k.t,ce=(0,t.useState)("pending"),le=ne()(ce,2),Z=le[0],ge=le[1],Ee=(W==null?void 0:W("approval.title"))||"\u4EBA\u5DE5\u5E72\u9884",Ce=(0,t.useMemo)(function(){return Z==="pending"?(W==null?void 0:W("approval.pending"))||"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C":Z==="confirmed"?(W==null?void 0:W("approval.confirmed"))||"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1":(W==null?void 0:W("approval.canceled"))||"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1"},[Z,W]),pe=(0,t.useCallback)(function(Oe,Fe){var xe;ge(Oe),s.setLoading(!1),s.setDisabled(!1);var Ae=u,Bn=(xe=Ae.content[0])===null||xe===void 0||(xe=xe.data)===null||xe===void 0?void 0:xe.id,$n={type:v.MCP_APPROVAL_RESPONSE,role:q.USER,content:[{type:E.DATA,data:{approve:Oe==="confirmed",id:Bn,approval_request_id:Bn,reason:Fe}}]};fn({type:"handleApproval",data:{input:[Ae,$n]}})},[u]),je=(0,t.useMemo)(function(){return Z==="pending"?(0,n.jsxs)(Ln.Z,{gap:8,children:[(0,n.jsx)(pt,{onConfirm:function(Fe){return pe("canceled",Fe)}}),(0,n.jsx)($e.Z,{size:"small",type:"primary",onClick:function(){return pe("confirmed")},children:(W==null?void 0:W("approval.confirm"))||"\u786E\u8BA4\u6267\u884C"})]}):null},[Z,W]);return(0,t.useEffect)(function(){Z==="pending"&&(s.setLoading((W==null?void 0:W("approval.taskRunning"))||"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1"),s.setDisabled(!0))},[Z,W]),(0,n.jsx)(Un.Z.HITL,{done:Z!=="pending",onDone:function(){},title:(0,n.jsxs)(Ln.Z,{gap:8,children:[Ee,(0,n.jsx)("span",{className:S.desc,children:Ce})]}),actions:je})}var Xn=t.memo(function(o){var u,s=o.data,c=o.isApproval,S=c===void 0?!1:c,k=d(function(Oe){return Oe.customToolRenderConfig})||{};if(!((u=s.content)!==null&&u!==void 0&&u.length))return null;var W=s.content,ce=s.status===N.InProgress,le=W[0].data.name,Z="".concat(W[0].data.server_label?W[0].data.server_label+" / ":""),ge="".concat(Z).concat(le),Ee;if(k[le]){var Ce=k[le];Ee=(0,n.jsx)(Ce,{data:s})}else{var pe,je;Ee=(0,n.jsx)(kn.Z,{loading:ce,defaultOpen:!1,title:ge==="undefined"?"":ge,input:(pe=W[0])===null||pe===void 0||(pe=pe.data)===null||pe===void 0?void 0:pe.arguments,output:(je=W[1])===null||je===void 0||(je=je.data)===null||je===void 0?void 0:je.output})}return(0,n.jsxs)(n.Fragment,{children:[Ee,S&&(0,n.jsx)(dt,{data:s})]})}),ft=Xn,at=e(79323);function Ct(o){var u,s=o.data;if(s.status===N.Created)return null;var c=s==null||(u=s.content)===null||u===void 0?void 0:u[0];return c?(0,n.jsx)(at.Z,{loading:s.status===N.InProgress,title:"Thinking",content:c.text}):null}function rt(o){var u=o.data;return(0,n.jsx)(nn.Z.Interrupted,{type:"error",title:u.code,desc:u.message})}var yt=e(89698),vt=e(60227),bt=e(82286),jt=e(67055),Et=e(39693),St=e.n(Et);function ot(o){return!o.input_tokens||!o.output_tokens?null:(0,n.jsx)(nn.Z.Footer.Count,{data:[["Input",o.input_tokens],["Output",o.output_tokens]]})}function Pt(o){var u,s,c,S=(0,On.useTranslation)(),k=S.t,W=d(function(Z){var ge;return(ge=Z.actions)===null||ge===void 0?void 0:ge.list})||[{icon:(0,n.jsx)(yt.Z,{}),onClick:function(){(0,bt.JG)(JSON.stringify(o.data))}}],ce=(u=d(function(Z){var ge;return(ge=Z.actions)===null||ge===void 0?void 0:ge.replace}))!==null&&u!==void 0?u:!0,le=St()([].concat(I()(W.map(function(Z){var ge=Z;return Z.render&&(ge.children=t.createElement(Z.render,{data:o})),h()(h()({},ge),{},{onClick:function(){var Ce;(Ce=Z.onClick)===null||Ce===void 0||Ce.call(Z,o)}})})),[ce&&o.isLast?{icon:(0,n.jsx)(jt.Z,{title:(k==null?void 0:k("actions.regenerate"))||"\u91CD\u65B0\u751F\u6210",children:(0,n.jsx)(vt.Z,{})}),onClick:function(){fn({type:"handleReplace",data:o})}}:null]));return be.maybeDone(o.data)?(0,n.jsx)(nn.Z.Footer,{left:(0,n.jsx)(nn.Z.Footer.Actions,{data:le}),right:(0,n.jsx)(ot,{input_tokens:(s=o.data.usage)===null||s===void 0?void 0:s.input_tokens,output_tokens:(c=o.data.usage)===null||c===void 0?void 0:c.output_tokens})}):null}function st(o){var u=(0,t.useMemo)(function(){return be.mergeToolMessages(o.data.output)},[o.data.output]);return!(u!=null&&u.length)&&be.maybeGenerating(o.data)?(0,n.jsx)(nn.Z.Spin,{}):(0,n.jsxs)(n.Fragment,{children:[u.map(function(s){switch(s.type){case v.MESSAGE:return(0,n.jsx)(Mn,{data:s},s.id);case v.PLUGIN_CALL:case v.PLUGIN_CALL_OUTPUT:case v.MCP_CALL:case v.MCP_CALL_OUTPUT:return(0,n.jsx)(ft,{data:s},s.id);case v.MCP_APPROVAL_REQUEST:return(0,n.jsx)(ft,{data:s,isApproval:!0},s.id);case v.REASONING:return(0,n.jsx)(Ct,{data:s},s.id);case v.ERROR:return(0,n.jsx)(rt,{data:s},s.id);case v.HEARTBEAT:return null;default:return console.warn("[WIP] Unknown message type: ".concat(s.type)),null}}),o.data.error&&(0,n.jsx)(rt,{data:o.data.error}),(0,n.jsx)(Pt,h()({},o))]})}var At=e(83962);function Tt(o){var u=o.options,s=o.cards,c=o.children,S=[[On.ChatAnywhereI18nContextProvider,{defaultLocale:u.theme.locale}],[L,{options:u}],[At.xy,{cardConfig:s}],[qe,{}],[Ke,{}],[K,{}],[En,{}]];return S.reduceRight(function(k,W){var ce=ne()(W,2),le=ce[0],Z=ce[1];return(0,n.jsx)(le,h()(h()({},Z),{},{children:k}))},c)}var Mt=Tt;function Lt(o,u){var s=o.options,c=s===void 0?{}:s,S=(0,t.useMemo)(function(){var k=h()({AgentScopeRuntimeRequestCard:Wn,AgentScopeRuntimeResponseCard:st},c.cards);return k},[c.cards]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Mt,{options:c,cards:S,children:(0,n.jsx)(Dn,{ref:u})})})}var Rt=(0,t.forwardRef)(Lt)},56290:function(on,J,e){"use strict";e.r(J),e.d(J,{ChatAnywhereI18nContextProvider:function(){return g},useChatAnywhereI18n:function(){return R},useTranslation:function(){return F}});var ee=e(5574),h=e.n(ee),B=e(59214),x=e(67294),b=e(85893),T={cn:{"approval.title":"\u4EBA\u5DE5\u5E72\u9884","approval.pending":"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C","approval.confirmed":"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1","approval.canceled":"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1","approval.cancel":"\u53D6\u6D88\u6267\u884C","approval.confirm":"\u786E\u8BA4\u6267\u884C","approval.taskRunning":"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1","cancelPopover.title":"\u53D6\u6D88\u539F\u56E0","cancelPopover.placeholder":"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212","cancelPopover.cancel":"\u53D6\u6D88","cancelPopover.confirm":"\u786E\u8BA4","cancelPopover.options.notNeeded":"\u4E0D\u9700\u8981","cancelPopover.options.poorResult":"\u6548\u679C\u4E0D\u7406\u60F3","cancelPopover.options.tooSlow":"\u7B49\u5F85\u65F6\u95F4\u4E45","cancelPopover.options.wrongInput":"\u8F93\u5165\u9519\u8BEF","common.save":"\u4FDD\u5B58","common.cancel":"\u53D6\u6D88","common.confirm":"\u786E\u8BA4","common.delete":"\u5220\u9664","common.edit":"\u7F16\u8F91","common.loading":"\u52A0\u8F7D\u4E2D...","common.saveSuccess":"\u4FDD\u5B58\u6210\u529F","common.saveFailed":"\u4FDD\u5B58\u5931\u8D25","actions.regenerate":"\u91CD\u65B0\u751F\u6210","messageImport.title":"Sessions \u6570\u636E\u5BFC\u5165","messageImport.placeholder":"\u8F93\u5165 JSON \u6570\u636E\u4EE5\u8986\u76D6\u5F53\u524D sessions","messageImport.saveToLocalStorage":"\u4FDD\u5B58\u5230 LocalStorage"},en:{"approval.title":"Human Intervention","approval.pending":"Please confirm whether to execute this operation","approval.confirmed":"Confirmed to execute task","approval.canceled":"Canceled task execution","approval.cancel":"Cancel","approval.confirm":"Confirm","approval.taskRunning":"A task is currently running, cannot send new task","cancelPopover.title":"Cancel Reason","cancelPopover.placeholder":"Please enter the reason for better AI planning","cancelPopover.cancel":"Cancel","cancelPopover.confirm":"Confirm","cancelPopover.options.notNeeded":"Not needed","cancelPopover.options.poorResult":"Poor result","cancelPopover.options.tooSlow":"Too slow","cancelPopover.options.wrongInput":"Wrong input","common.save":"Save","common.cancel":"Cancel","common.confirm":"Confirm","common.delete":"Delete","common.edit":"Edit","common.loading":"Loading...","common.saveSuccess":"Saved successfully","common.saveFailed":"Failed to save","actions.regenerate":"Regenerate","messageImport.title":"Import Sessions Data","messageImport.placeholder":"Enter JSON data to override current sessions","messageImport.saveToLocalStorage":"Save to LocalStorage"}},P=(0,B.createContext)(void 0);function R(p){try{var D=(0,B.useContextSelector)(P,p);return D}catch(j){return{}}}function F(){var p=R(function(m){return m==null?void 0:m.t}),D=R(function(m){return m==null?void 0:m.locale}),j=R(function(m){return m==null?void 0:m.setLocale});return{t:p,locale:D,setLocale:j}}function g(p){var D=p.children,j=p.defaultLocale,m=j===void 0?"en":j,t=(0,x.useState)(m),C=h()(t,2),w=C[0],i=C[1],n=(0,x.useCallback)(function(d,L){var oe=T[w][d]||d;return L&&Object.entries(L).forEach(function(ie){var f=h()(ie,2),he=f[0],Q=f[1];oe=oe.replace(new RegExp("\\{".concat(he,"\\}"),"g"),String(Q))}),oe},[w]),_=(0,x.useMemo)(function(){return{locale:w,setLocale:i,t:n,messages:T[w]}},[w,i,n]);return(0,b.jsx)(P.Provider,{value:_,children:D})}J.default=P},57551:function(){},22863:function(on,J,e){"use strict";e.r(J);var ee=e(57551),h=e.n(ee),B={};for(var x in ee)x!=="default"&&(B[x]=function(b){return ee[b]}.bind(0,x));e.d(J,B)},34487:function(on,J,e){"use strict";e.d(J,{Z:function(){return Le}});var ee=e(97857),h=e.n(ee),B=e(5574),x=e.n(B),b=e(56044),T=e(68400),P=e.n(T),R=e(9053),F,g=(0,R.vJ)(F||(F=P()([`
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
`])),function(Y){return Y.theme.prefixCls},function(Y){return Y.theme.colorBgLayout},function(Y){return Y.theme.colorBgLayout},function(Y){return Y.theme.colorFillTertiary},function(Y){return Y.theme.colorBgBase},function(Y){return Y.theme.prefixCls},function(Y){return Y.theme.prefixCls},function(Y){return Y.theme.colorBgBase},function(Y){return Y.theme.colorBorderSecondary},function(Y){return Y.theme.colorText},function(Y){return Y.theme.colorBorderSecondary},function(Y){return Y.theme.colorPrimary}),p=e(93967),D=e.n(p),j=e(55839),m=e(16494),t=e(85893);function C(Y){var _e=(0,b.wv)().getPrefixCls("assets-preview-image"),De=Y.width,Qe=De===void 0?1:De,Xe=Y.height,Ne=Xe===void 0?1:Xe,sn=Y.src;return(0,t.jsx)("div",{className:_e,style:{aspectRatio:"".concat(Qe,"/").concat(Ne)},children:(0,t.jsx)(j.ZP,{locale:{Image:{preview:""}},children:(0,t.jsx)(m.Z,{src:sn,width:"100%",height:"100%"})})})}function w(Y){return(0,t.jsx)(m.Z.PreviewGroup,{children:Y.children})}var i=e(9783),n=e.n(i),_=e(13769),d=e.n(_),L=e(67294),oe=e(63701),ie=e(62321),f=e(32485),he=e(64057),Q=["width","height","poster","src"];function X(Y){var _e=(0,b.wv)().getPrefixCls("assets-preview-video"),De=Y.width,Qe=De===void 0?1:De,Xe=Y.height,Ne=Xe===void 0?1:Xe,sn=Y.poster,nn=Y.src,bn=d()(Y,Q),I=(0,L.useRef)(null),G=(0,L.useState)(!1),Ke=x()(G,2),We=Ke[0],Ue=Ke[1],ke=(0,L.useState)(0),vn=x()(ke,2),mn=vn[0],qe=vn[1],tn=(0,L.useState)(0),gn=x()(tn,2),Ve=gn[0],Re=gn[1],r=(0,L.useCallback)(function(dn){var ln=Math.floor(dn/60),hn=Math.floor(dn%60);return"".concat(ln.toString().padStart(2,"0"),":").concat(hn.toString().padStart(2,"0"))},[]),we=(0,L.useCallback)(function(){var dn=I.current;dn&&(dn.paused?(dn.play(),Ue(!0)):(dn.pause(),Ue(!1)))},[]),ye=(0,L.useCallback)(function(){I.current&&qe(I.current.duration)},[]),Ze=(0,L.useCallback)(function(){Ue(!1),Re(0)},[]),Te=(0,L.useCallback)(function(){I.current&&Re(I.current.currentTime)},[]),un=(0,L.useCallback)(function(dn){dn.stopPropagation();var ln=I.current;ln&&(ln.requestFullscreen?ln.requestFullscreen():ln.webkitRequestFullscreen?ln.webkitRequestFullscreen():ln.msRequestFullscreen&&ln.msRequestFullscreen())},[]);return(0,t.jsxs)("div",{className:_e,style:{aspectRatio:"".concat(Qe,"/").concat(Ne)},children:[(0,t.jsx)("video",h()(h()({},bn),{},{ref:I,src:nn,poster:sn,preload:"metadata",onLoadedMetadata:ye,onTimeUpdate:Te,onEnded:Ze})),(0,t.jsxs)("div",{className:D()("".concat(_e,"-overlay"),n()({},"".concat(_e,"-overlay-playing"),1)),onClick:we,children:[(0,t.jsx)("div",{className:"".concat(_e,"-play-btn"),children:We?(0,t.jsx)(oe.Z,{}):(0,t.jsx)(ie.Z,{})}),(0,t.jsx)("div",{className:"".concat(_e,"-enlarge"),onClick:un,children:(0,t.jsx)(he.Z,{bordered:!1,size:"small",icon:(0,t.jsx)(f.Z,{})})})]}),(0,t.jsx)("div",{className:"".concat(_e,"-duration"),children:r(mn-Ve)})]})}var ne=e(20399),ue=e(80162);function Pe(Y){var _e=(0,b.wv)().getPrefixCls("assets-preview-audio"),De=(0,L.useRef)(null),Qe=(0,L.useState)(!1),Xe=x()(Qe,2),Ne=Xe[0],sn=Xe[1],nn=(0,L.useState)(!1),bn=x()(nn,2),I=bn[0],G=bn[1],Ke=(0,L.useState)(0),We=x()(Ke,2),Ue=We[0],ke=We[1],vn=(0,L.useState)(0),mn=x()(vn,2),qe=mn[0],tn=mn[1],gn=(0,L.useCallback)(function(ye){if(isNaN(ye))return"00:00";var Ze=Math.floor(ye/60),Te=Math.floor(ye%60);return"".concat(Ze.toString().padStart(2,"0"),":").concat(Te.toString().padStart(2,"0"))},[]),Ve=(0,L.useCallback)(function(){De.current&&(Ne?De.current.pause():De.current.play(),sn(!Ne))},[Ne]),Re=(0,L.useCallback)(function(){G(!I),De.current&&(De.current.muted=I)},[I]),r=(0,L.useCallback)(function(ye){if(De.current&&qe){var Ze=ye.currentTarget.getBoundingClientRect(),Te=ye.clientX-Ze.left,un=Te/Ze.width,dn=un*qe;De.current.currentTime=dn,ke(dn)}},[qe]);(0,L.useEffect)(function(){var ye=De.current;if(ye){var Ze=function(){return ke(ye.currentTime)},Te=function(){return tn(ye.duration)},un=function(){return sn(!1)};return ye.addEventListener("timeupdate",Ze),ye.addEventListener("loadedmetadata",Te),ye.addEventListener("ended",un),function(){ye.removeEventListener("timeupdate",Ze),ye.removeEventListener("loadedmetadata",Te),ye.removeEventListener("ended",un)}}},[]);var we=qe?Ue/qe*100:0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("audio",{ref:De,src:Y.src,muted:I}),(0,t.jsxs)("div",{className:_e,children:[(0,t.jsx)(he.Z,{size:"small",type:"text",onClick:Ve,icon:Ne?(0,t.jsx)(oe.Z,{}):(0,t.jsx)(ie.Z,{})}),(0,t.jsx)(he.Z,{size:"small",type:"text",onClick:Re,icon:I?(0,t.jsx)(ne.Z,{}):(0,t.jsx)(ue.Z,{})}),(0,t.jsx)("div",{className:"".concat(_e,"-time"),children:gn(Ue)}),(0,t.jsx)("div",{className:"".concat(_e,"-progress"),onClick:r,children:(0,t.jsx)("div",{className:"".concat(_e,"-progress-bar"),style:{width:"".concat(we,"%")}})}),(0,t.jsx)("div",{className:"".concat(_e,"-time"),children:gn(qe)})]})]})}var y=e(16138),Me=e(83202),K=e(90105),me=e(82052);function ae(Y){var _e,De=(0,K.Z)(),Qe=(0,b.wv)().getPrefixCls("assets-preview"),Xe=(0,L.useRef)(null),Ne=Y.height,sn=Ne===void 0?144:Ne,nn=sn/2-12,bn=(0,L.useRef)(0),I=(0,L.useState)(0),G=x()(I,2),Ke=G[0],We=G[1],Ue=(0,L.useDeferredValue)(Ke),ke=(0,me.Z)(Xe),vn=(0,L.useCallback)(function(gn){We(gn.target.scrollLeft)},[]);(0,L.useEffect)(function(){Xe.current&&Y.type!=="audio"&&(bn.current=Xe.current.scrollWidth-Xe.current.clientWidth),De()},[Y.data.length,ke==null?void 0:ke.width]);var mn=(0,L.useCallback)(function(gn){var Ve=200;Xe.current.scrollLeft=Xe.current.scrollLeft+Ve*(gn==="left"?-1:1)},[]),qe={image:C,video:X,audio:Pe}[Y.type],tn=Y.data.map(function(gn,Ve){return(0,t.jsx)(qe,h()({},gn),Ve)});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g,{}),(0,t.jsxs)("div",{className:D()("".concat(Qe),Y.className),children:[(0,t.jsx)("div",{className:D()("".concat(Qe,"-container"),(_e=Y.classNames)===null||_e===void 0?void 0:_e.container),style:Y.type!=="audio"?{height:sn}:{flexDirection:"column"},onScroll:vn,ref:Xe,children:Y.type==="image"?(0,t.jsx)(w,{children:tn}):tn}),nn>0&&Y.type!=="audio"?(0,t.jsxs)(t.Fragment,{children:[Ue>50&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:D()("".concat(Qe,"-left-edge"))}),(0,t.jsx)(he.Z,{onClick:function(){return mn("left")},style:{top:nn},className:D()("".concat(Qe,"-left-arrow"),"".concat(Qe,"-arrow")),size:"small",shape:"circle",icon:(0,t.jsx)(y.Z,{})})]}),Ue<bn.current-50&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:D()("".concat(Qe,"-right-edge"))}),(0,t.jsx)(he.Z,{onClick:function(){return mn("right")},style:{top:nn},className:D()("".concat(Qe,"-right-arrow"),"".concat(Qe,"-arrow")),size:"small",shape:"circle",icon:(0,t.jsx)(Me.Z,{})})]})]}):null]})]})}var Le=ae},36417:function(on,J,e){"use strict";e.d(J,{Z:function(){return Re}});var ee=e(9783),h=e.n(ee),B=e(97857),x=e.n(B),b=e(5574),T=e.n(b),P=e(13769),R=e.n(P),F=e(93967),g=e.n(F),p=e(67294),D=e(56044),j=e(56790),m=e(73935),t=p.createContext(null),C=e(85893);function w(r){var we=r.getDropContainer,ye=r.className,Ze=r.prefixCls,Te=r.children,un=p.useContext(t),dn=un.disabled,ln=p.useState(),hn=T()(ln,2),fn=hn[0],l=hn[1],te=p.useState(null),de=T()(te,2),M=de[0],$=de[1];p.useEffect(function(){var v=we==null?void 0:we();fn!==v&&l(v)},[we]),p.useEffect(function(){if(fn){var v=function(){$(!0)},E=function(U){U.preventDefault()},a=function(U){U.relatedTarget||$(!1)},O=function(U){$(!1),U.preventDefault()};return document.addEventListener("dragenter",v),document.addEventListener("dragover",E),document.addEventListener("dragleave",a),document.addEventListener("drop",O),function(){document.removeEventListener("dragenter",v),document.removeEventListener("dragover",E),document.removeEventListener("dragleave",a),document.removeEventListener("drop",O)}}},[!!fn]);var N=we&&fn&&!dn;if(!N)return null;var q="".concat(Ze,"-drop-area");return(0,m.createPortal)((0,C.jsx)("div",{className:g()(q,ye,h()({},"".concat(q,"-on-body"),fn.tagName==="BODY")),style:{display:M?"block":"none"},children:Te}),fn)}var i=e(53033),n=e(52861),_=e(83622),d=e(29372),L=e(64599),oe=e.n(L),ie=function(we){return we.indexOf("image/")===0},f=200;function he(r){return new Promise(function(we){if(!r||!r.type||!ie(r.type)){we("");return}var ye=new Image;if(ye.onload=function(){var un=ye.width,dn=ye.height,ln=un/dn,hn=ln>1?f:f*ln,fn=ln>1?f/ln:f,l=document.createElement("canvas");l.width=hn,l.height=fn,l.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(hn,"px; height: ").concat(fn,"px; z-index: 9999; display: none;"),document.body.appendChild(l);var te=l.getContext("2d");te.drawImage(ye,0,0,hn,fn);var de=l.toDataURL();document.body.removeChild(l),window.URL.revokeObjectURL(ye.src),we(de)},ye.crossOrigin="anonymous",r.type.startsWith("image/svg+xml")){var Ze=new FileReader;Ze.onload=function(){Ze.result&&typeof Ze.result=="string"&&(ye.src=Ze.result)},Ze.readAsDataURL(r)}else if(r.type.startsWith("image/gif")){var Te=new FileReader;Te.onload=function(){Te.result&&we(Te.result)},Te.readAsDataURL(r)}else ye.src=window.URL.createObjectURL(r)})}var Q=e(9361),X=e(38703);function ne(r){var we=r.percent,ye=Q.Z.useToken(),Ze=ye.token;return(0,C.jsx)(X.Z,{type:"circle",percent:we,size:40,strokeColor:"#FFF",trailColor:"rgba(255, 255, 255, 0.3)",format:function(un){return(0,C.jsxs)("span",{style:{color:"#FFF"},children:[(un||0).toFixed(0),"%"]})}})}var ue=e(68400),Pe=e.n(ue),y=e(9053),Me,K=(0,y.vJ)(Me||(Me=Pe()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.colorBgContainer},function(r){return r.theme.lineWidth},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.paddingXS},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.fontSize},function(r){return r.theme.colorText},function(r){return r.theme.prefixCls},function(r){return r.theme.colorTextQuaternary},function(r){return r.theme.fontSizeSM},function(r){return r.theme.prefixCls},function(r){return r.theme.opacityLoading},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.lineWidth},function(r){return r.theme.prefixCls},function(r){return r.theme.paddingXXS},function(r){return r.theme.prefixCls},function(r){return r.theme.colorText},function(r){return r.theme.colorBgContainer},function(r){return r.theme.lineWidth},function(r){return r.theme.colorBorder},function(r){return r.theme.colorError},function(r){return r.theme.prefixCls},function(r){return r.theme.colorError},function(r){return r.theme.paddingSM},function(r){return r.theme.prefixCls},function(r){return r.theme.colorPrimary}),me=e(89102),ae="\xA0",Le="#8c8c8c",Y=["png","jpg","jpeg","gif","bmp","webp","svg"],_e=function(we){var ye=we.url;return(0,C.jsx)("img",{src:ye,width:32,height:32})},De=[{icon:(0,C.jsx)(_e,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01cVtZXI23tPVhiZoPJ_!!6000000007313-55-tps-40-40.svg"}),color:"#22b35e",ext:["xlsx","xls"]},{icon:(0,C.jsx)(_e,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01uDnnuz1XMNEjgFMul_!!6000000002909-55-tps-40-40.svg"}),color:Le,ext:Y},{icon:(0,C.jsx)(_e,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01PaXli01DDPAO68fsI_!!6000000000182-55-tps-40-40.svg"}),color:Le,ext:["md","mdx"]},{icon:(0,C.jsx)(_e,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01mB5PzD27fuIWK661W_!!6000000007825-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["pdf"]},{icon:(0,C.jsx)(_e,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01a8j7Jv1nW1QyFme7k_!!6000000005096-55-tps-40-40.svg"}),color:"#ff6e31",ext:["ppt","pptx"]},{icon:(0,C.jsx)(_e,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01XaNi8P1UkhQXoQdUL_!!6000000002556-55-tps-40-40.svg"}),color:"#1677ff",ext:["doc","docx"]},{icon:(0,C.jsx)(_e,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),color:"#fab714",ext:["zip","rar","7z","tar","gz"]},{icon:(0,C.jsx)(_e,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01zTTe0q1Xg4GkZgJol_!!6000000002952-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["mp4","avi","mov","wmv","flv","mkv"]},{icon:(0,C.jsx)(_e,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01qOBdXG1UpHO6f3Vvc_!!6000000002566-55-tps-40-40.svg"}),color:"#8c8c8c",ext:["mp3","wav","flac","ape","aac","ogg"]}];function Qe(r,we){return we.some(function(ye){return r.toLowerCase()===".".concat(ye)})}function Xe(r){for(var we=r,ye=["B","KB","MB","GB","TB","PB","EB"],Ze=0;we>=1024&&Ze<ye.length-1;)we/=1024,Ze++;return"".concat(we.toFixed(0)," ").concat(ye[Ze])}function Ne(r,we){var ye=(0,D.wv)(),Ze=ye.getPrefixCls,Te=r.item,un=r.onRemove,dn=r.className,ln=r.style,hn=p.useContext(t),fn=hn||{},l=fn.disabled,te=Te.name,de=Te.size,M=Te.percent,$=Te.status,N=$===void 0?"done":$,q=Te.description,v=Ze("attachment"),E="".concat(v,"-list-card"),a=p.useMemo(function(){var rn=te||"",cn=rn.match(/^(.*)\.[^.]+$/);return cn?[cn[1],rn.slice(cn[1].length)]:[rn,""]},[te]),O=T()(a,2),A=O[0],U=O[1],re=p.useMemo(function(){return Qe(U,Y)},[U]),se=p.useMemo(function(){return q||(N==="uploading"?"".concat(M||0,"%"):N==="error"?Te.response||ae:de?Xe(de):ae)},[N,M]),H=p.useMemo(function(){var rn=oe()(De),cn;try{for(rn.s();!(cn=rn.n()).done;){var An=cn.value,en=An.ext,En=An.icon,Ie=An.color;if(Qe(U,en))return[En,Ie]}}catch(Se){rn.e(Se)}finally{rn.f()}return[(0,C.jsx)(_e,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"},"defaultIcon"),Le]},[U]),fe=T()(H,2),ve=fe[0],V=fe[1],be=p.useState(),an=T()(be,2),Cn=an[0],yn=an[1];p.useEffect(function(){if(Te.originFileObj){var rn=!0;return he(Te.originFileObj).then(function(cn){rn&&yn(cn)}),function(){rn=!1}}yn(void 0)},[Te.originFileObj]);var He=null,$e=Te.thumbUrl||Te.url||Cn,z=r.renderType||"default",Ge=re&&(Te.originFileObj||$e)&&z==="default";return Ge?He=(0,C.jsxs)(C.Fragment,{children:[$e&&(0,C.jsx)("img",{alt:"preview",src:$e}),N!=="done"&&(0,C.jsxs)("div",{className:"".concat(E,"-img-mask"),children:[N==="uploading"&&M!==void 0&&(0,C.jsx)(ne,{percent:M,prefixCls:E}),N==="error"&&(0,C.jsx)("div",{className:"".concat(E,"-desc"),children:(0,C.jsx)("div",{className:"".concat(E,"-ellipsis-prefix"),children:se})})]})]}):He=(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{className:"".concat(E,"-icon"),style:{color:V},children:ve}),(0,C.jsxs)("div",{className:"".concat(E,"-content"),children:[(0,C.jsxs)("div",{className:"".concat(E,"-name"),children:[A!=null?A:ae,U]}),(0,C.jsx)("div",{className:"".concat(E,"-desc"),children:(0,C.jsx)("div",{className:"".concat(E,"-ellipsis-prefix"),children:se})})]})]}),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(K,{}),(0,C.jsxs)("div",{className:g()(E,h()(h()(h()(h()(h()({},"".concat(E,"-status-").concat(N),N),"".concat(E,"-type-preview"),Ge),"".concat(E,"-type-overview"),!Ge),"".concat(E,"-type-").concat(z),!0),"".concat(E,"-hoverable"),!l&&un),dn),style:ln,ref:we,children:[He,(0,C.jsx)("button",{style:{opacity:!l&&un?1:0},className:"".concat(E,"-remove"),onClick:function(){!l&&un&&un(Te)},children:(0,C.jsx)(me.Z,{})})]})]})}var sn=p.forwardRef(Ne),nn=1;function bn(r){var we=r.prefixCls,ye=r.items,Ze=r.onRemove,Te=r.overflow,un=r.listClassName,dn=r.listStyle,ln=r.itemClassName,hn=r.itemStyle,fn="".concat(we,"-list"),l=p.useRef(null),te=p.useState(!1),de=T()(te,2),M=de[0],$=de[1];p.useEffect(function(){return $(!0),function(){$(!1)}},[]);var N=p.useState(!1),q=T()(N,2),v=q[0],E=q[1],a=p.useState(!1),O=T()(a,2),A=O[0],U=O[1],re=function(){var V=l.current;V&&(Te==="scrollX"?(E(Math.abs(V.scrollLeft)>=nn),U(V.scrollWidth-V.clientWidth-Math.abs(V.scrollLeft)>=nn)):Te==="scrollY"&&(E(V.scrollTop!==0),U(V.scrollHeight-V.clientHeight!==V.scrollTop)))};p.useEffect(function(){re()},[Te]);var se=function(V){var be=l.current;be&&be.scrollTo({left:be.scrollLeft+V*be.clientWidth,behavior:"smooth"})},H=function(){se(-1)},fe=function(){se(1)};return(0,C.jsxs)("div",{className:g()(fn,h()(h()(h()({},"".concat(fn,"-overflow-").concat(r.overflow),Te),"".concat(fn,"-overflow-ping-start"),v),"".concat(fn,"-overflow-ping-end"),A),un),ref:l,onScroll:re,style:dn,children:[(0,C.jsx)(d.V4,{keys:ye.map(function(ve){return{key:ve.uid,item:ve}}),motionName:"".concat(fn,"-card-motion"),component:!1,motionAppear:M,motionLeave:!0,motionEnter:!0,children:function(V){var be=V.key,an=V.item,Cn=V.className,yn=V.style;return(0,C.jsx)(sn,{prefixCls:we,item:an,onRemove:Ze,className:g()(Cn,ln),style:x()(x()({},yn),hn),renderType:r.renderType},be)}}),Te==="scrollX"&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(_.ZP,{size:"small",shape:"circle",className:"".concat(fn,"-prev-btn"),icon:(0,C.jsx)(i.Z,{}),onClick:H}),(0,C.jsx)(_.ZP,{size:"small",shape:"circle",className:"".concat(fn,"-next-btn"),icon:(0,C.jsx)(n.Z,{}),onClick:fe})]})]})}var I=e(86250),G=e(21317),Ke=e(41154);function We(r,we){var ye=r.prefixCls,Ze=r.placeholder,Te=Ze===void 0?{}:Ze,un=r.upload,dn=r.className,ln=r.style,hn="".concat(ye,"-placeholder"),fn=Te||{},l=p.useContext(t),te=l.disabled,de=p.useState(!1),M=T()(de,2),$=M[0],N=M[1],q=function(){N(!0)},v=function(A){A.currentTarget.contains(A.relatedTarget)||N(!1)},E=function(){N(!1)},a=p.isValidElement(Te)?Te:(0,C.jsxs)(I.Z,{align:"center",justify:"center",vertical:!0,className:"".concat(hn,"-inner"),children:[(0,C.jsx)(G.default.Text,{className:"".concat(hn,"-icon"),children:fn.icon}),(0,C.jsx)(G.default.Title,{className:"".concat(hn,"-title"),level:5,children:fn.title}),(0,C.jsx)(G.default.Text,{className:"".concat(hn,"-description"),type:"secondary",children:fn.description})]});return(0,C.jsx)("div",{className:g()(hn,h()(h()({},"".concat(hn,"-drag-in"),$),"".concat(hn,"-disabled"),te),dn),onDragEnter:q,onDragLeave:v,onDrop:E,"aria-hidden":te,style:ln,children:(0,C.jsx)(Ke.Z.Dragger,x()(x()({showUploadList:!1},un),{},{ref:we,style:{padding:0,border:0,background:"transparent"},children:a}))})}var Ue=p.forwardRef(We);function ke(r,we){var ye=r.children,Ze=r.upload,Te=r.rootClassName,un=p.useRef(null);return p.useImperativeHandle(we,function(){return un.current}),(0,C.jsx)(Ke.Z,x()(x()({},Ze),{},{showUploadList:!1,rootClassName:Te,ref:un,children:ye}))}var vn=p.forwardRef(ke),mn,qe=(0,y.vJ)(mn||(mn=Pe()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.zIndexPopupBase},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.lineWidthBold},function(r){return r.theme.padding},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorPrimaryHover},function(r){return r.theme.prefixCls},function(r){return r.theme.paddingXXS},function(r){return r.theme.fontSizeHeading2},function(r){return r.theme.prefixCls},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.colorText},function(r){return r.theme.padding},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSizeHeading2},function(r){return r.theme.boxShadowTertiary},function(r){return r.theme.padding},function(r){return r.theme.padding},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls}),tn=["prefixCls","rootClassName","rootStyle","className","style","items","children","getDropContainer","placeholder","onChange","overflow","disabled","classNames","styles"];function gn(r,we){var ye=r.prefixCls,Ze=r.rootClassName,Te=r.rootStyle,un=r.className,dn=r.style,ln=r.items,hn=r.children,fn=r.getDropContainer,l=r.placeholder,te=r.onChange,de=r.overflow,M=r.disabled,$=r.classNames,N=$===void 0?{}:$,q=r.styles,v=q===void 0?{}:q,E=R()(r,tn),a=(0,D.wv)(),O=a.direction,A=a.getPrefixCls,U=A("attachment"),re=p.useRef(null),se=p.useRef(null);p.useImperativeHandle(we,function(){return{nativeElement:re.current,upload:function(Ge){var rn,cn=(rn=se.current)===null||rn===void 0||(rn=rn.nativeElement)===null||rn===void 0?void 0:rn.querySelector('input[type="file"]');if(cn){var An=new DataTransfer;An.items.add(Ge),cn.files=An.files,cn.dispatchEvent(new Event("change",{bubbles:!0}))}}}});var H=(0,j.C8)([],{value:ln}),fe=T()(H,2),ve=fe[0],V=fe[1],be=(0,j.zX)(function(z){V(z.fileList),te==null||te(z)}),an=x()(x()({},E),{},{fileList:ve,onChange:be}),Cn=function(Ge){var rn=ve.filter(function(cn){return cn.uid!==Ge.uid});be({file:Ge,fileList:rn})},yn,He=function(Ge,rn,cn){var An=typeof l=="function"?l(Ge):l;return(0,C.jsx)(Ue,{placeholder:An,upload:an,prefixCls:U,className:g()(N.placeholder),style:x()(x()({},v.placeholder),rn==null?void 0:rn.style),ref:cn})};if(hn)yn=(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(vn,{upload:an,rootClassName:Ze,ref:se,children:hn}),(0,C.jsx)(w,{getDropContainer:fn,prefixCls:U,className:g()(Ze),children:He("drop")})]});else{var $e=ve.length>0;yn=(0,C.jsxs)("div",{className:g()(U,h()({},"".concat(U,"-rtl"),O==="rtl"),un,Ze),style:x()(x()({},Te),dn),dir:O||"ltr",ref:re,children:[(0,C.jsx)(bn,{prefixCls:U,items:ve,onRemove:Cn,overflow:de,upload:an,listClassName:g()(N.list),listStyle:x()(x()({},v.list),!$e&&{display:"none"}),itemClassName:g()(N.item),itemStyle:x()({},v.item),renderType:r.renderType}),He("inline",$e?{style:{display:"none"}}:{},se)]})}return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(qe,{}),(0,C.jsx)(t.Provider,{value:{disabled:M},children:yn})]})}var Ve=p.forwardRef(gn);Ve.FileCard=sn;var Re=Ve},50130:function(on,J,e){"use strict";e.d(J,{L:function(){return D},Z:function(){return p}});var ee=e(97857),h=e.n(ee),B=e(13769),x=e.n(B),b=e(67294),T=e(83962),P=e(76289),R=e(85893),F=["component"],g=b.memo(function(j){var m=(0,T.HJ)(),t=(0,P.TQ)(function(n){return n.onInput}),C=(0,b.useMemo)(function(){if(j.component)return j.component;var n=m;return(n==null?void 0:n[j.code])||function(){return"".concat(j.code," not found")}},[]);if(typeof C=="function"){var w=j.component,i=x()(j,F);return(0,R.jsx)(C,h()(h()({},i),{},{context:{onInput:t}}))}else return C});function p(j){var m=j.cards;return m!=null&&m.length?m.map(function(t,C){var w=(0,R.jsx)(g,h()({index:C,id:j.id,isLast:j.isLast},t),(t==null?void 0:t.id)||C+t.code);return t.code==="Text"?(0,R.jsx)("div",{className:j.className,children:w},C):w}):null}function D(j,m){return{code:j,data:m}}},67369:function(on,J,e){"use strict";e.d(J,{p4:function(){return D},hw:function(){return j},ZP:function(){return p}});var ee=e(67294),h=e(56044),B=e(64057),x=e(68400),b=e.n(x),T=e(9053),P,R=(0,T.vJ)(P||(P=b()([`
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
`])),function(m){return m.theme.prefixCls},function(m){return m.theme.prefixCls},function(m){return m.theme.colorText},function(m){return m.theme.prefixCls},function(m){return m.theme.colorTextTertiary},function(m){return m.theme.colorBorder}),F=R,g=e(85893);function p(m){var t=(0,h.wv)(),C=t.getPrefixCls,w=C("bubble-footer"),i=m.left,n=m.right;return i&&!i.type||n&&!n.type?null:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(F,{}),(0,g.jsxs)("div",{className:w,children:[(0,g.jsx)("div",{className:"".concat(w,"-left"),children:m.left}),(0,g.jsx)("div",{className:"".concat(w,"-right"),children:m.right})]})]})}function D(m){var t=(0,h.wv)(),C=t.getPrefixCls,w=C("bubble-footer-actions");return(0,g.jsx)("div",{className:w,children:m.data.map(function(i,n){return i.children?ee.cloneElement(i.children,{key:n}):(0,g.jsx)(B.Z,{bordered:!1,icon:i.icon,size:"small",onClick:i.onClick},n)})})}function j(m){var t=(0,h.wv)(),C=t.getPrefixCls,w=C("bubble-footer-count");return(0,g.jsx)("div",{className:w,children:m.data.map(function(i){return(0,g.jsxs)("div",{className:"".concat(w,"-item"),children:[i[0],"\uFF1A",i[1]]},i[0])})})}p.Actions=D,p.Count=j},10146:function(on,J,e){"use strict";e.d(J,{Z:function(){return g}});var ee=e(68400),h=e.n(ee),B=e(9053),x=e(56044),b=e(9343),T=e(36674),P=e(85893),R,F=(0,B.vJ)(R||(R=h()([`
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

`])),function(p){return p.theme.prefixCls},function(p){return p.theme.colorFillSecondary},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.colorText},function(p){return p.theme.colorError});function g(p){var D=p.title,j=D===void 0?"Answers have stopped":D,m=p.type,t=m===void 0?"interrupted":m,C=p.desc,w=(0,x.wv)(),i=w.getPrefixCls,n=i("interrupted");return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(F,{}),(0,P.jsxs)("div",{className:"".concat(n),children:[(0,P.jsxs)("div",{className:"".concat(n,"-header"),children:[(0,P.jsx)("div",{className:"".concat(n,"-icon-wrapper"),children:t==="interrupted"?(0,P.jsx)(b.Z,{className:"".concat(n,"-header-interrupted")}):(0,P.jsx)(T.Z,{className:"".concat(n,"-header-error")})}),(0,P.jsx)("span",{children:j})]}),C&&(0,P.jsx)("div",{className:"".concat(n,"-desc"),children:C})]})]})}},39916:function(on,J,e){"use strict";e.d(J,{Z:function(){return q}});var ee=e(97857),h=e.n(ee),B=e(93967),x=e.n(B),b=e(67294),T=e(68400),P=e.n(T),R=e(9053),F,g=(0,R.vJ)(F||(F=P()([`
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
`])),function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls},function(v){return v.theme.colorText},function(v){return v.theme.fontSize},function(v){return v.theme.lineHeight},function(v){return v.theme.prefixCls},function(v){return v.theme.borderRadiusLG},function(v){return v.theme.colorPrimaryBg},function(v){return v.theme.prefixCls},function(v){return v.theme.colorText},function(v){return v.theme.colorText},function(v){return v.theme.colorBgBase},function(v){return v.theme.colorBgBase},function(v){return v.theme.colorTextTertiary},function(v){return v.theme.colorTextTertiary},function(v){return v.theme.colorBgBase},function(v){return v.theme.colorBgBase},function(v){return v.theme.colorTextSecondary},function(v){return v.theme.colorTextSecondary},function(v){return v.theme.colorBgBase},function(v){return v.theme.colorBgBase}),p=e(56044),D=e(66109),j=e(50130),m=e(85893);function t(){var v=(0,p.wv)(),E=v.getPrefixCls,a=E("bubble-loading");return(0,m.jsxs)("div",{className:a,children:[(0,m.jsx)("div",{className:"".concat(a,"-dot1")}),(0,m.jsx)("div",{className:"".concat(a,"-dot2")}),(0,m.jsx)("div",{className:"".concat(a,"-dot3")}),(0,m.jsx)("div",{className:"".concat(a,"-text"),children:"-"})]})}var C=e(9783),w=e.n(C),i=e(68997),n=function(E){var a=E.avatar,O=E.msgStatus,A=E.isAssistant,U=E.prefixCls,re=E.className,se=E.style,H=b.isValidElement(a)?a:(0,m.jsx)(i.Z,h()({},a));return(0,m.jsx)("div",{className:x()("".concat(U,"-avatar"),w()({},"".concat(U,"-avatar-loading"),A&&O==="generating"),re),style:se,children:H})},_=n,d=b.createContext({}),L=function(E){var a=E.isLast,O=E.className,A=E.rootClassName,U=E.style,re=E.classNames,se=re===void 0?{}:re,H=E.styles,fe=H===void 0?{}:H,ve=E.avatar,V=E.content,be=V===void 0?"":V,an=E.cards,Cn=E.msgStatus,yn=E.id,He=E.role,$e=E.variant,z={assistant:"start",user:"end"}[He]||"start",Ge=(0,p.wv)(),rn=Ge.getPrefixCls,cn=rn("bubble"),An=x()(cn,A,O,"".concat(cn,"-").concat(z)),en,En=!(be!=null&&be.length)&&!(an!=null&&an.length);E.msgStatus==="generating"&&En?en=(0,m.jsx)(t,{}):en=be?(0,m.jsx)(D.Z,{content:be,cursor:E.msgStatus==="generating"}):null;var Ie=z==="assistant"||z==="start",Se="".concat(cn,"-content-").concat($e||(Ie?"borderless":"filled")),Ye=(0,m.jsxs)("div",{style:!Ie&&en?{flexDirection:"column-reverse"}:{},className:"".concat(cn,"-content-wrapper"),children:[(0,m.jsx)(j.Z,{cards:an,id:yn,isLast:a,className:x()("".concat(cn,"-content"),"".concat(cn,"-content-wrapper-card"),Se,se.content)}),en&&(0,m.jsx)("div",{style:h()({},fe.content),className:x()("".concat(cn,"-content"),"".concat(cn,"-content-wrapper-card"),Se,se.content),children:en})]});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g,{}),(0,m.jsxs)("div",{style:U,className:An,id:yn,"data-role":He,children:[ve&&(0,m.jsx)(_,{avatar:ve,msgStatus:Cn,isAssistant:Ie,prefixCls:cn,className:se.avatar,style:fe.avatar}),Ye]})]})},oe=b.memo(L),ie=e(5574),f=e.n(ie),he=e(13769),Q=e.n(he),X=e(52677),ne=e.n(X),ue=e(15009),Pe=e.n(ue),y=e(99289),Me=e.n(y),K,me,ae;var Le={damping:.7,stiffness:.05,mass:1.25},Y=70,_e=1e3/60,De=350,Qe=!1;(K=globalThis.document)===null||K===void 0||K.addEventListener("mousedown",function(){Qe=!0}),(me=globalThis.document)===null||me===void 0||me.addEventListener("mouseup",function(){Qe=!1}),(ae=globalThis.document)===null||ae===void 0||ae.addEventListener("click",function(){Qe=!1});var Xe=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=(0,b.useState)(!1),O=f()(a,2),A=O[0],U=O[1],re=(0,b.useState)(E.enabled!==!1&&E.initial!==!1),se=f()(re,2),H=se[0],fe=se[1],ve=(0,b.useState)(!1),V=f()(ve,2),be=V[0],an=V[1],Cn=(0,b.useRef)(null);Cn.current=E;var yn=(0,b.useCallback)(function(){var Ie;if(!Qe)return!1;var Se=window.getSelection();if(!Se||!Se.rangeCount)return!1;var Ye=Se.getRangeAt(0);return Ye.commonAncestorContainer.contains(en.current)||((Ie=en.current)===null||Ie===void 0?void 0:Ie.contains(Ye.commonAncestorContainer))},[]),He=(0,b.useCallback)(function(Ie){z.isAtBottom=Ie,fe(Ie)},[]),$e=(0,b.useCallback)(function(Ie){z.escapedFromLock=Ie,U(Ie)},[]),z=(0,b.useMemo)(function(){var Ie;return{escapedFromLock:A,isAtBottom:H,resizeDifference:0,accumulated:0,velocity:0,listeners:new Set,get scrollTop(){var Se,Ye;return(Se=(Ye=en.current)===null||Ye===void 0?void 0:Ye.scrollTop)!==null&&Se!==void 0?Se:0},set scrollTop(Se){en.current&&(en.current.scrollTop=Se,z.ignoreScrollToTop=en.current.scrollTop)},get targetScrollTop(){return!en.current||!En.current?0:en.current.scrollHeight-1-en.current.clientHeight},get calculatedTargetScrollTop(){var Se;if(!en.current||!En.current)return 0;var Ye=this.targetScrollTop;if(!E.targetScrollTop)return Ye;if(((Se=Ie)===null||Se===void 0?void 0:Se.targetScrollTop)===Ye)return Ie.calculatedScrollTop;var jn=Math.max(Math.min(E.targetScrollTop(Ye,{scrollElement:en.current,contentElement:En.current}),Ye),0);return Ie={targetScrollTop:Ye,calculatedScrollTop:jn},requestAnimationFrame(function(){Ie=void 0}),jn},get scrollDifference(){return this.calculatedTargetScrollTop-this.scrollTop},get isNearBottom(){return this.scrollDifference<=Y}}},[]),Ge=(0,b.useCallback)(function(){var Ie,Se=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};typeof Se=="string"&&(Se={animation:Se}),Se.preserveScrollPosition||He(!0);var Ye=Date.now()+(Number(Se.wait)||0),jn=nn(Cn.current,Se.animation),_n=Se,ze=_n.ignoreEscapes,Be=ze===void 0?!1:ze,pn,xn=z.calculatedTargetScrollTop;if(Se.duration instanceof Promise)Se.duration.finally(function(){pn=Date.now()});else{var Nn;pn=Ye+((Nn=Se.duration)!==null&&Nn!==void 0?Nn:0)}var Pn=function(){var Dn=Me()(Pe()().mark(function Wn(){var In;return Pe()().wrap(function(Mn){for(;;)switch(Mn.prev=Mn.next){case 0:return In=new Promise(requestAnimationFrame).then(function(){var kn;if(!z.isAtBottom)return z.animation=void 0,!1;var Un=z.scrollTop,Ln=performance.now(),Zn=(Ln-((kn=z.lastTick)!==null&&kn!==void 0?kn:Ln))/_e;if(z.animation||(z.animation={behavior:jn,promise:In,ignoreEscapes:Be}),z.animation.behavior===jn&&(z.lastTick=Ln),yn()||Ye>Date.now())return Pn();if(Un<Math.min(xn,z.calculatedTargetScrollTop)){var Fn;if(((Fn=z.animation)===null||Fn===void 0?void 0:Fn.behavior)===jn){if(jn==="instant")return z.scrollTop=z.calculatedTargetScrollTop,Pn();z.velocity=(jn.damping*z.velocity+jn.stiffness*z.scrollDifference)/jn.mass,z.accumulated+=z.velocity*Zn,z.scrollTop+=z.accumulated,z.scrollTop!==Un&&(z.accumulated=0)}return Pn()}return pn>Date.now()?(xn=z.calculatedTargetScrollTop,Pn()):(z.animation=void 0,z.scrollTop<z.calculatedTargetScrollTop?Ge({animation:nn(Cn.current,Cn.current.resize),ignoreEscapes:Be,duration:Math.max(0,pn-Date.now())||void 0}):z.isAtBottom)}),Mn.abrupt("return",In.then(function(kn){return requestAnimationFrame(function(){z.animation||(z.lastTick=void 0,z.velocity=0)}),kn}));case 2:case"end":return Mn.stop()}},Wn)}));return function(){return Dn.apply(this,arguments)}}();return Se.wait!==!0&&(z.animation=void 0),((Ie=z.animation)===null||Ie===void 0?void 0:Ie.behavior)===jn?z.animation.promise:Pn()},[He,yn,z]),rn=(0,b.useCallback)(function(){$e(!0),He(!1)},[$e,He]),cn=(0,b.useCallback)(function(Ie){var Se=Ie.target;if(Se===en.current){var Ye=z.scrollTop,jn=z.ignoreScrollToTop,_n=z.lastScrollTop,ze=_n===void 0?Ye:_n;z.lastScrollTop=Ye,z.ignoreScrollToTop=void 0,jn&&jn>Ye&&(ze=jn),an(z.isNearBottom),setTimeout(function(){var Be;if(!(z.resizeDifference||Ye===jn)){if(yn()){$e(!0),He(!1);return}var pn=Ye>ze,xn=Ye<ze;if((Be=z.animation)!==null&&Be!==void 0&&Be.ignoreEscapes){z.scrollTop=ze;return}xn&&($e(!0),He(!1)),pn&&$e(!1),!z.escapedFromLock&&z.isNearBottom&&He(!0)}},1)}},[$e,He,yn,z]),An=(0,b.useCallback)(function(Ie){for(var Se,Ye=Ie.target,jn=Ie.deltaY,_n=Ye;!["scroll","auto"].includes(getComputedStyle(_n).overflow);){if(!_n.parentElement)return;_n=_n.parentElement}_n===en.current&&jn<0&&en.current.scrollHeight>en.current.clientHeight&&!((Se=z.animation)!==null&&Se!==void 0&&Se.ignoreEscapes)&&($e(!0),He(!1))},[$e,He,z]),en=Ne(function(Ie){var Se,Ye;(Se=en.current)===null||Se===void 0||Se.removeEventListener("scroll",cn),(Ye=en.current)===null||Ye===void 0||Ye.removeEventListener("wheel",An),Ie==null||Ie.addEventListener("scroll",cn,{passive:!0}),Ie==null||Ie.addEventListener("wheel",An,{passive:!0})},[]),En=Ne(function(Ie){var Se,Ye;if((Se=z.resizeObserver)===null||Se===void 0||Se.disconnect(),!!Ie){var jn;z.resizeObserver=new ResizeObserver(function(_n){var ze,Be=f()(_n,1),pn=Be[0],xn=pn.contentRect.height,Nn=xn-((ze=jn)!==null&&ze!==void 0?ze:xn);if(z.resizeDifference=Nn,z.scrollTop>z.targetScrollTop&&(z.scrollTop=z.targetScrollTop),an(z.isNearBottom),Nn>=0){if(Cn.current.enabled!==!1){var Pn=nn(Cn.current,jn?Cn.current.resize:Cn.current.initial);Ge({animation:Pn,wait:!0,preserveScrollPosition:!0,duration:Pn==="instant"?void 0:De})}}else z.isNearBottom&&($e(!1),He(!0));jn=xn,requestAnimationFrame(function(){setTimeout(function(){z.resizeDifference===Nn&&(z.resizeDifference=0)},1)})}),(Ye=z.resizeObserver)===null||Ye===void 0||Ye.observe(Ie)}},[]);return{contentRef:En,scrollRef:en,scrollToBottom:Ge,stopScroll:rn,isAtBottom:H||be,isNearBottom:be,escapedFromLock:A,state:z}};function Ne(v,E){var a=(0,b.useCallback)(function(O){return a.current=O,v(O)},E);return a}var sn=new Map;function nn(){for(var v=h()({},Le),E=!1,a=arguments.length,O=new Array(a),A=0;A<a;A++)O[A]=arguments[A];for(var U=0,re=O;U<re.length;U++){var se,H,fe,ve=re[U];if(ve==="instant"){E=!0;continue}ne()(ve)==="object"&&(E=!1,v.damping=(se=ve.damping)!==null&&se!==void 0?se:v.damping,v.stiffness=(H=ve.stiffness)!==null&&H!==void 0?H:v.stiffness,v.mass=(fe=ve.mass)!==null&&fe!==void 0?fe:v.mass)}var V=JSON.stringify(v);return sn.has(V)||sn.set(V,Object.freeze(v)),E?"instant":sn.get(V)}var bn=["instance","children","resize","initial","mass","damping","stiffness","targetScrollTop","contextRef"],I=["children","scrollClassName"];var G=(0,b.createContext)(null),Ke=typeof window!="undefined"?b.useLayoutEffect:b.useEffect;function We(v){var E=v.instance,a=v.children,O=v.resize,A=v.initial,U=v.mass,re=v.damping,se=v.stiffness,H=v.targetScrollTop,fe=v.contextRef,ve=Q()(v,bn),V=(0,b.useRef)(null),be=b.useCallback(function(Ie,Se){var Ye,jn,_n=(Ye=En==null?void 0:En.targetScrollTop)!==null&&Ye!==void 0?Ye:H;return(jn=_n==null?void 0:_n(Ie,Se))!==null&&jn!==void 0?jn:Ie},[H]),an=ve.enabled,Cn=an===void 0?!0:an,yn=Xe({enabled:Cn,mass:U,damping:re,stiffness:se,resize:O,initial:A,targetScrollTop:be}),He=E!=null?E:yn,$e=He.scrollRef,z=He.contentRef,Ge=He.scrollToBottom,rn=He.stopScroll,cn=He.isAtBottom,An=He.escapedFromLock,en=He.state,En=(0,b.useMemo)(function(){return{scrollToBottom:Ge,stopScroll:rn,scrollRef:$e,isAtBottom:cn,escapedFromLock:An,contentRef:z,state:en,get targetScrollTop(){return V.current},set targetScrollTop(Ie){V.current=Ie}}},[Ge,cn,z,$e,rn,An,en]);return(0,b.useImperativeHandle)(fe,function(){return En},[En]),Ke(function(){$e.current&&getComputedStyle($e.current).overflow==="visible"&&($e.current.style.overflow="auto")},[]),(0,m.jsx)(G.Provider,{value:En,children:(0,m.jsx)("div",h()(h()({},ve),{},{children:typeof a=="function"?a(En):a}))})}(function(v){function E(a){var O=a.children,A=a.scrollClassName,U=Q()(a,I),re=Ue();return(0,m.jsx)("div",{ref:re.scrollRef,style:{height:"100%",width:"100%",scrollbarGutter:"stable both-edges"},className:A,children:(0,m.jsx)("div",h()(h()({},U),{},{ref:re.contentRef,children:typeof O=="function"?O(re):O}))})}v.Content=E})(We||(We={}));function Ue(){var v=(0,b.useContext)(G);if(!v)throw new Error("use-stick-to-bottom component context must be used within a StickToBottom component");return v}var ke=e(64057),vn=e(25109),mn=function(E,a){var O=(0,p.wv)(),A=O.getPrefixCls,U=Ue(),re=U.isAtBottom,se=U.scrollToBottom;b.useImperativeHandle(a,function(){return{scrollToBottom:function(fe){function ve(V){return fe.apply(this,arguments)}return ve.toString=function(){return fe.toString()},ve}(function(fe){fe=fe||{animation:"instant"},se(fe)})}});var H=A("bubble-list-scroll-to-bottom");return(0,m.jsx)("div",{className:x()(H,"".concat(H,"-").concat(re?"hide":"show")),children:(0,m.jsx)(ke.Z,{icon:(0,m.jsx)(vn.Z,{}),shape:"circle",onClick:function(){return se({animation:"instant"})}})})},qe=b.forwardRef(mn),tn,gn=(0,R.vJ)(tn||(tn=P()([`
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
`])),function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls},function(v){return v.theme.colorPrimaryBorder},function(v){return v.theme.colorPrimaryBg},function(v){return v.theme.colorPrimary}),Ve=e(42532),Re=e(45908),r=e(78234),we=e(19632),ye=e.n(we),Ze=e(64599),Te=e.n(Ze),un=e(73935),dn=function(E,a){var O=(0,b.useState)(1),A=f()(O,2),U=A[0],re=A[1],se=(0,b.useMemo)(function(){var H=[],fe=[],ve=Te()(E),V;try{for(ve.s();!(V=ve.n()).done;){var be=V.value;be.history?H.push(be):fe.push(be)}}catch(an){ve.e(an)}finally{ve.f()}return[].concat(ye()(H.slice(-U*10)),fe)},[E,U]);return a!=null&&a.enable?{items:se,noMore:se.length===E.length,loadMore:function(fe){return new Promise(function(ve){setTimeout(function(){var V,be=fe==null?void 0:fe.current,an=(V=be==null?void 0:be.scrollHeight)!==null&&V!==void 0?V:0;if((0,un.flushSync)(function(){re(U+1)}),be){var Cn=be.scrollHeight;be.scrollTop+=Cn-an}ve()},1e3)})}}:{items:E,noMore:!0,loadMore:function(fe){return Promise.resolve()}}},ln=e(57381),hn=["key"];function fn(v){var E=v.items,a=v.paginationItems,O=v.noMore,A=v.loadMore,U=v.prefixCls,re=v.listClassName,se=v.children,H=Ue(),fe=H.scrollRef,ve=(0,b.useCallback)(function(){return A(fe)},[A,fe]);return(0,m.jsxs)(We.Content,{className:x()("".concat(U),re),children:[O?null:(0,m.jsx)(l,{handleLoadMore:ve}),se||a.map(function(V,be){var an=V.key,Cn=Q()(V,hn),yn=be===E.length-1;return(0,b.createElement)(oe,h()(h()({},Cn),{},{isLast:yn,key:Cn.id||an}))})]})}function l(v){var E=v.handleLoadMore,a=(0,b.useRef)(null),O=(0,Ve.Z)(a),A=f()(O,1),U=A[0],re=(0,b.useState)(!1),se=f()(re,2),H=se[0],fe=se[1],ve=(0,Re.Z)(U),V=(0,p.wv)(),be=V.getPrefixCls,an=be("bubble-list");return(0,b.useEffect)(function(){U&&ve===void 0||H||U&&(fe(!0),E().finally(function(){fe(!1)}))},[ve,U,H,E]),(0,m.jsx)("div",{ref:a,className:"".concat(an,"-load-more"),children:(0,m.jsx)(ln.Z,{spinning:!0})})}var te=function(E,a){var O,A,U=E.items,re=U===void 0?[]:U,se=E.smooth,H=se===void 0?!0:se,fe=(0,b.useState)(!1),ve=f()(fe,2),V=ve[0],be=ve[1],an=b.useRef(),Cn=(0,p.wv)(),yn=Cn.getPrefixCls,He=yn("bubble-list");b.useImperativeHandle(a,function(){return{scrollToBottom:function(){an.current.scrollToBottom()}}}),(0,r.Z)(function(){be(!0)});var $e=V&&H?"smooth":"instant",z=dn(re,{enable:E.pagination}),Ge=z.items,rn=z.noMore,cn=z.loadMore;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(gn,{}),(0,m.jsxs)(We,{enabled:!!H||!V,id:E.id,className:x()("".concat(He,"-wrapper"),(O=E.classNames)===null||O===void 0?void 0:O.wrapper),resize:$e,initial:"instant",style:E.style,children:[(0,m.jsx)(fn,{items:re,paginationItems:Ge,noMore:rn,loadMore:cn,prefixCls:He,listClassName:(A=E.classNames)===null||A===void 0?void 0:A.list,children:E.children}),(0,m.jsx)(qe,{ref:an})]})]})},de=b.forwardRef(te),M=de,$=e(67369),N=e(10146);oe.List=M,oe.Spin=t,oe.Footer=$.ZP,oe.Interrupted=N.Z;var q=oe},76289:function(on,J,e){"use strict";e.d(J,{TQ:function(){return m},vi:function(){return D}});var ee=e(97857),h=e.n(ee),B=e(13769),x=e.n(B),b=e(5574),T=e.n(b),P=e(67294),R=e(79785),F=e(59214),g=e(85893),p=["children"];function D(t){var C=(0,R.Z)([]),w=T()(C,3),i=w[0],n=w[1],_=w[2],d=(0,R.Z)("0"),L=T()(d,3),oe=L[0],ie=L[1],f=L[2],he=(0,R.Z)(0),Q=T()(he,3),X=Q[0],ne=Q[1],ue=Q[2],Pe=(0,R.Z)([]),y=T()(Pe,3),Me=y[0],K=y[1],me=y[2],ae=(0,R.Z)(!1),Le=T()(ae,3),Y=Le[0],_e=Le[1],De=Le[2],Qe=(0,R.Z)(!1),Xe=T()(Qe,3),Ne=Xe[0],sn=Xe[1],nn=Xe[2],bn=(0,R.Z)(!0),I=T()(bn,3),G=I[0],Ke=I[1],We=I[2],Ue=t.children,ke=x()(t,p),vn=h()({sessionList:i,setSessionList:n,getSessionList:_,currentSessionKey:oe,setCurrentSessionKey:ie,getCurrentSessionKey:f,messages:Me,setMessages:K,getMessages:me,loading:Y,setLoading:_e,getLoading:De,disabled:Ne,setDisabled:sn,getDisabled:nn,sessionListShow:G,setSessionListShow:Ke,getSessionListShow:We,currentRegenerateIndex:X,setCurrentRegenerateIndex:ne,getCurrentRegenerateIndex:ue},ke);return(0,g.jsx)(j.Provider,{value:vn,children:Ue})}var j=(0,F.createContext)(void 0);function m(t){try{var C=(0,F.useContextSelector)(j,t);return C}catch(w){return{}}}},37254:function(on,J,e){"use strict";e.d(J,{G:function(){return h}});var ee=e(76289);function h(){var B=(0,ee.TQ)(function(g){return{loading:g.loading,getLoading:g.getLoading,disabled:g.disabled,getDisabled:g.getDisabled,setLoading:g.setLoading,setDisabled:g.setDisabled}}),x=B.loading,b=B.disabled,T=B.setLoading,P=B.setDisabled,R=B.getLoading,F=B.getDisabled;return{loading:x,disabled:b,setLoading:T,setDisabled:P,getLoading:R,getDisabled:F}}},4421:function(on,J,e){"use strict";e.d(J,{y:function(){return P}});var ee=e(19632),h=e.n(ee),B=e(97857),x=e.n(B),b=e(67294),T=e(76289);function P(){var R=(0,T.TQ)(function(C){return{messages:C.messages,setMessages:C.setMessages,getMessages:C.getMessages}}),F=R.messages,g=R.setMessages,p=R.getMessages,D=b.useCallback(function(){var C,w=((C=arguments.length<=0?void 0:arguments[0])===null||C===void 0?void 0:C.id)||(arguments.length<=0?void 0:arguments[0]),i=(arguments.length<=1?void 0:arguments[1])||(arguments.length<=0?void 0:arguments[0]);g==null||g(function(n){var _=n.findIndex(function(L){return L.id===w});if(_>-1){var d=x()(x()({},n[_]),i);return[].concat(h()(n.slice(0,_)),[d],h()(n.slice(_+1)))}else return[].concat(h()(n),[i])})},[]),j=b.useCallback(function(C){g(function(w){return w.filter(function(i){return i.id!==C.id})})},[]),m=b.useCallback(function(){g([])},[]),t=b.useCallback(function(C){return p().find(function(w){return w.id===C})},[]);return{messages:F,getMessage:t,setMessages:g,getMessages:p,updateMessage:D,removeMessage:j,removeAllMessages:m}}},61316:function(on,J,e){"use strict";e.d(J,{x:function(){return F}});var ee=e(97857),h=e.n(ee),B=e(19632),x=e.n(B),b=e(67294),T=e(76289),P=e(88773),R=e(73935);function F(){var g=(0,T.TQ)(function(X){return{getCurrentSessionKey:X.getCurrentSessionKey,currentRegenerateIndex:X.currentRegenerateIndex,setCurrentRegenerateIndex:X.setCurrentRegenerateIndex,getCurrentRegenerateIndex:X.getCurrentRegenerateIndex,sessionListShow:X.sessionListShow,setSessionListShow:X.setSessionListShow,sessionList:X.sessionList,setSessionList:X.setSessionList,currentSessionKey:X.currentSessionKey,setCurrentSessionKey:X.setCurrentSessionKey,getSessionList:X.getSessionList}}),p=g.getCurrentSessionKey,D=g.sessionList,j=g.setSessionList,m=g.currentSessionKey,t=g.setCurrentSessionKey,C=g.sessionListShow,w=g.setSessionListShow,i=g.currentRegenerateIndex,n=g.setCurrentRegenerateIndex,_=g.getCurrentRegenerateIndex,d=g.getSessionList,L=b.useCallback(function(){var X=(0,P.Z)(),ne={label:Date.now().toString(),key:X,messages:[[]]};return R.flushSync(function(){j(function(ue){var Pe=[].concat(x()(ue),[ne]);return Pe}),t(X)}),X},[]),oe=b.useCallback(function(X){j(function(ne){var ue=ne.filter(function(Pe){return Pe.key!==X});return ue})},[]),ie=b.useCallback(function(X){var ne=p(),ue=_();j(function(Pe){return Pe.map(function(y){return y.key===ne?(y.messages[ue]=X,h()({},y)):y})})},[]),f=b.useCallback(function(X,ne){var ue;return(ue=d().find(function(Pe){return Pe.key===X}))===null||ue===void 0?void 0:ue.messages[ne]},[]),he=b.useCallback(function(){return{sessionList:d(),currentSessionKey:p(),currentRegenerateIndex:_()}},[]),Q=b.useCallback(function(X){var ne=X.sessionList,ue=X.currentSessionKey,Pe=X.currentRegenerateIndex;j(ne),t(ue),n(Pe)},[]);return{currentRegenerateIndex:i,setCurrentRegenerateIndex:n,getCurrentRegenerateIndex:_,sessionList:D,setSessionList:j,getSessionList:d,currentSessionKey:m,setCurrentSessionKey:t,sessionListShow:C,setSessionListShow:w,createSession:L,deleteSession:oe,updateSessionMessages:ie,getMessagesBySession:f,getSession:he,updateSession:Q}}},29041:function(on,J,e){"use strict";e.d(J,{ZP:function(){return de}});var ee=e(97857),h=e.n(ee),B=e(13769),x=e.n(B),b=e(5574),T=e.n(b),P=e(67294),R=e(93967),F=e.n(R),g=e(56044),p=e(85265),D=e(17909),j=e(76289),m=e(68400),t=e.n(m),C=e(9053),w,i=(0,C.vJ)(w||(w=t()([`

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
`])),function(M){return M.theme.prefixCls},function(M){return M.theme.fontFamily},function(M){return M.theme.colorBgBase},function(M){return M.theme.colorBgBase},function(M){return M.theme.colorBgBase},function(M){return M.theme.colorFillTertiary}),n=e(85893);function _(M){var $=(0,j.TQ)(function(A){return{sessionListShow:A.sessionListShow,setSessionListShow:A.setSessionListShow}}),N=$.sessionListShow,q=$.setSessionListShow,v=(0,g.wv)(),E=v.getPrefixCls,a=E("chat-anywhere-layout"),O=L();return(0,P.useEffect)(function(){q(!O)},[O]),M.left?O?(0,n.jsx)(p.Z,{width:"80vw",styles:{body:{padding:0}},open:N,onClose:function(){q(!1)},title:null,closable:!1,placement:"left",children:(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:M.left})}):(0,n.jsx)("div",{className:F()("".concat(a,"-left"),N?"":"".concat(a,"-left-hide")),children:M.left}):null}function d(M){var $=(0,g.wv)(),N=$.getPrefixCls,q=N("chat-anywhere-layout"),v=(0,j.TQ)(function(E){return E.uiConfig});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{}),(0,n.jsx)("div",{className:q,children:(0,n.jsxs)("div",{className:"".concat(q,"-main"),children:[(0,n.jsx)(_,h()({},M)),(0,n.jsxs)("div",{className:"".concat(q,"-right"),style:{background:v==null?void 0:v.background},children:[M.top,M.right]})]})})]})}var L=function(){var $=(0,D.Z)(),N=(0,j.TQ)(function(q){return q.uiConfig});return!$.md||(N==null?void 0:N.narrowScreen)},oe=e(9368),ie=e(64057),f=e(21403),he=e(61316),Q=e(4421),X,ne=(0,C.vJ)(X||(X=t()([`
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

`])),function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls}),ue=e(50287),Pe=e(67392),y=e(13660),Me=e(12624);function K(){var M=(0,g.wv)(),$=M.getPrefixCls,N=$("chat-anywhere-session-list"),q=(0,j.TQ)(function(v){return v.sessionListShow});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ne,{}),(0,n.jsxs)("div",{className:F()("".concat(N),q?"":"".concat(N,"-hide")),children:[(0,n.jsx)(ae,{}),(0,n.jsx)(me,{})]})]})}function me(){var M=(0,g.wv)(),$=M.getPrefixCls,N=$("chat-anywhere-session-list"),q=(0,he.x)(),v=q.currentSessionKey,E=q.setCurrentSessionKey,a=q.currentRegenerateIndex,O=q.sessionList,A=q.getMessagesBySession,U=q.setSessionListShow,re=(0,Q.y)(),se=re.setMessages,H=(0,j.TQ)(function(V){return V.getLoading}),fe=(0,j.TQ)(function(V){return V.onSessionKeyChange}),ve=L();return(0,P.useEffect)(function(){var V=A(v,a);se(V)},[v,a]),(0,n.jsx)("div",{className:"".concat(N,"-session"),children:(0,n.jsx)(oe.Z,{menu:[{key:"delete",icon:(0,n.jsx)(ue.Z,{}),danger:!0,onClick:function(be){}}],activeKey:v,items:O,onActiveChange:function(be){H()||(ve&&U(!1),requestIdleCallback(function(){E(be),fe(be)}))}})})}function ae(){var M=(0,g.wv)(),$=M.getPrefixCls,N=$("chat-anywhere-session-list"),q=(0,he.x)(),v=q.currentSessionKey,E=q.setCurrentSessionKey,a=q.deleteSession,O=q.createSession,A=q.sessionList,U=q.sessionListShow,re=q.setSessionListShow,se=(0,j.TQ)(function(fe){return fe.uiConfig}),H=L();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(N,"-logo"),children:[se==null?void 0:se.logo,(0,n.jsx)(ie.Z,{bordered:!1,onClick:function(){return re(!U)},icon:U?(0,n.jsx)(Pe.Z,{}):(0,n.jsx)(y.Z,{})})]}),(0,n.jsx)("div",{className:"".concat(N,"-adder"),children:(0,n.jsx)(f.Z,{type:"primary",block:!0,icon:(0,n.jsx)(Me.Z,{}),onClick:function(){H&&re(!1),O()},children:"New Session"})})]})}var Le=e(9783),Y=e.n(Le),_e=e(39916),De=e(19632),Qe=e.n(De),Xe=e(52677),Ne=e.n(Xe),sn=e(15009),nn=e.n(sn),bn=e(99289),I=e.n(bn),G=e(41154),Ke=e(66672),We=e(36417),Ue=e(37254),ke,vn=(0,C.vJ)(ke||(ke=t()([`
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
`])),function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls}),mn=e(86578),qe=e(7654),tn=e(92053),gn=e(86250),Ve=["trigger"];function Re(M){var $=M.uploadPropsList,N=(0,g.wv)(),q=N.getPrefixCls,v=q("chat-anywhere-sender"),E=(0,P.useState)(!1),a=T()(E,2),O=a[0],A=a[1],U=(0,P.useRef)([]),re=(0,P.useMemo)(function(){return $.map(function(H,fe){return(0,n.jsx)("div",{onClick:function(){var V;(V=U.current[fe])===null||V===void 0||V.click(),A(!1)},children:H.trigger},fe)})},[$]),se=(0,P.useMemo)(function(){return $.map(function(H,fe){var ve=H.trigger,V=x()(H,Ve);return(0,n.jsx)(G.Z,h()(h()({},V),{},{children:(0,n.jsx)("div",{ref:function(an){return U.current[fe]=an}})}),fe)})},[$]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(qe.Z,{placement:"bottomLeft",open:O,onOpenChange:A,content:(0,n.jsx)(gn.Z,{vertical:!0,children:re}),trigger:"click",styles:{body:{padding:4}},children:(0,n.jsx)(ie.Z,{icon:(0,n.jsx)(tn.Z,{}),bordered:!1})}),(0,n.jsx)("div",{className:"".concat(v,"-upload-hidden-nodes"),children:se})]})}var r=(0,P.forwardRef)(function(M,$){var N=P.useState(""),q=T()(N,2),v=q[0],E=q[1],a=(0,Ue.G)(),O=(0,j.TQ)(function(ze){return ze.onUpload.map(function(Be){return h()(h()({},Be),{},{disabled:Be.disabled||a.disabled})})}),A=new Array((O==null?void 0:O.length)||0).fill([]),U=(0,P.useState)(!1),re=T()(U,2),se=re[0],H=re[1],fe=P.useState(A),ve=T()(fe,2),V=ve[0],be=ve[1],an=(0,P.useRef)(A);(0,P.useEffect)(function(){be(A)},[A.length]),(0,P.useEffect)(function(){an.current=V},[V]);var Cn=(0,j.TQ)(function(ze){return ze.uiConfig}),yn=(0,g.wv)(),He=yn.getPrefixCls,$e=He("chat-anywhere-sender"),z=(0,j.TQ)(function(ze){return ze.onStop}),Ge=(0,j.TQ)(function(ze){var Be={beforeUI:void 0,afterUI:void 0,morePrefixActions:void 0,maxLength:void 0,zoomable:!0,beforeSubmit:function(){return Promise.resolve(!0)},header:[],enableFocusExpand:!1,variant:"default",hide:!1};return h()(h()({},Be),ze.onInput)});if(P.useImperativeHandle($,function(){return{setInputContent:function(Be,pn){E(Be),be(pn||[[]])},getAttachedFiles:function(){return an.current}}},[]),(0,P.useEffect)(function(){a.setDisabled(Ge.disabled)},[Ge.disabled]),Ge.hide)return null;var rn=function(){var ze=I()(nn()().mark(function Be(pn,xn){return nn()().wrap(function(Pn){for(;;)switch(Pn.prev=Pn.next){case 0:be(function(Dn){return Dn.map(function(Wn,In){return In===pn?xn:Wn})});case 1:case"end":return Pn.stop()}},Be)}));return function(pn,xn){return ze.apply(this,arguments)}}(),cn=(0,P.useMemo)(function(){if(Ge.variant==="aigc"||!(O!=null&&O.length))return[];var ze=O.map(function(Be,pn){var xn;return Be.trigger?xn=Be.trigger:(Be.title||Be.description)&&O.length>1?xn=(0,n.jsxs)(f.Z,{type:"text",icon:Be.icon,children:[Be.title&&(0,n.jsx)("span",{children:Be.title}),Be.description&&(0,n.jsx)("span",{style:{fontSize:"0.8em",opacity:.8},children:Be.description})]}):xn=(0,n.jsx)(ie.Z,{icon:Be.icon,bordered:!1}),h()(h()({},Be),{},{fileList:V[pn],key:pn,onChange:function(Pn){Be.beforeUpload&&Pn.file.status&&rn(pn,Pn.fileList),Be.beforeUpload||rn(pn,Pn.fileList)},showUploadList:!1,trigger:xn})});return ze.length===1?(0,n.jsx)(G.Z,h()(h()({},ze[0]),{},{children:ze[0].trigger})):(0,n.jsx)(Re,{uploadPropsList:ze})},[Ge.variant,O,V]),An=(0,n.jsx)(mn.Z.SenderHeader,{onUpload:O,attachedFiles:V,onFileChange:rn}),en=(0,n.jsx)(Ke.Z.Header,{closable:!1,open:V==null?void 0:V.some(function(ze){return ze.length}),children:V.map(function(ze,Be){return ze.length?(0,n.jsx)(We.Z,{items:ze,onChange:function(xn){return rn(Be,xn.fileList)}},Be):null})}),En=Ge.variant==="aigc"?An:en,Ie=V.map(function(ze){return ze.filter(function(Be){return Be.status==="done"})}),Se=V.some(function(ze){return ze.some(function(Be){return Be.status==="uploading"})}),Ye=function(Be){if(!(O!=null&&O.length))return;var pn=Be.type||"",xn=Be.name||"",Nn=function(kn){return kn?kn.split(",").some(function(Un){var Ln=Un.trim();if(!Ln)return!1;if(Ln.startsWith("."))return xn.toLowerCase().endsWith(Ln.toLowerCase());if(Ln.includes("*")){if(Ln==="*/*")return!0;var Zn=Ln.split("/"),Fn=T()(Zn,1),On=Fn[0],Tn=pn.split("/"),Rn=T()(Tn,1),Qn=Rn[0];return On===Qn}return pn===Ln}):!0},Pn=O.findIndex(function(Mn){return Nn(Mn.accept)});if(Pn===-1)return;var Dn=O[Pn],Wn=V[Pn]||[];if(Dn.maxCount&&Wn.length>=Dn.maxCount||!Dn.multiple&&Wn.length>0)return;if(Dn.beforeUpload){var In=Dn.beforeUpload(Be,[Be]);if(In===!1||In===G.Z.LIST_IGNORE)return;if(In instanceof Promise){In.then(function(Mn){if(!(Mn===!1||Mn===G.Z.LIST_IGNORE)){var kn=Mn&&Ne()(Mn)==="object"?Mn:Be;qn(kn)}}).catch(function(Mn){console.error("beforeUpload promise rejected:",Mn)});return}if(In&&Ne()(In)==="object"){qn(In);return}}qn(Be);function qn(Mn){var kn=function(){var Tn=xn.match(/\.([^.]+)$/);if(Tn)return Tn[1].toLowerCase();var Rn=pn.match(/\/([^/+]+)/);return Rn?Rn[1].toLowerCase():"bin"},Un=Date.now(),Ln={uid:"paste_".concat(Un,"_").concat(Math.random().toString(36).slice(2,11)),name:xn||"pasted-".concat(Un,".").concat(kn()),size:Mn.size,type:pn,status:"uploading",percent:0,originFileObj:Mn},Zn=function(Tn){be(function(Rn){var Qn=Qe()(Rn);return Qn[Pn]=(Qn[Pn]||[]).map(function(Jn){return Jn.uid===Ln.uid?h()(h()({},Jn),Tn):Jn}),Qn})};if(be(function(On){var Tn=Qe()(On),Rn=Tn[Pn]||[];if(!Dn.multiple)Tn[Pn]=[Ln];else{if(Dn.maxCount&&Rn.length>=Dn.maxCount)return On;Tn[Pn]=[].concat(Qe()(Rn),[Ln])}return Tn}),pn&&pn.startsWith("image/")){var Fn=new FileReader;Fn.onload=function(On){var Tn,Rn=(Tn=On.target)===null||Tn===void 0?void 0:Tn.result;typeof Rn=="string"&&Zn({thumbUrl:Rn,url:Rn})},Fn.readAsDataURL(Mn)}Dn.customRequest({file:Mn,onSuccess:function(Tn){Zn({status:"done",response:Tn,percent:100})},onError:function(Tn){Zn({status:"error",error:Tn})},onProgress:function(Tn){Zn({percent:Tn.percent})}},{defaultRequest:function(){}})}},jn=(0,P.useMemo)(function(){var ze;return(ze=O==null?void 0:O.some(function(Be,pn){if(Be.required){var xn=V[pn]||[];return xn.length===0}return!1}))!==null&&ze!==void 0?ze:!1},[O,V]),_n=jn;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(vn,{}),(0,n.jsxs)("div",{className:F()("".concat($e,"-wrapper"),Y()(Y()({},"".concat($e,"-wrapper-focus"),se&&Ge.enableFocusExpand),"".concat($e,"-wrapper-blur"),!se&&Ge.enableFocusExpand)),children:[Cn.quickInput&&(0,n.jsx)("div",{className:F()("".concat($e,"-wrapper-header")),children:Cn.quickInput}),Ge.beforeUI,(0,n.jsx)(Ke.Z,{placeholder:Ge.placeholder,enableFocusExpand:Ge.enableFocusExpand,value:v,onChange:E,maxLength:Ge.maxLength,disabled:Se||a.disabled,sendDisabled:_n,scalable:Ge==null?void 0:Ge.zoomable,header:En,prefix:(0,n.jsxs)(n.Fragment,{children:[cn,Ge==null?void 0:Ge.morePrefixActions]}),onSubmit:I()(nn()().mark(function ze(){var Be;return nn()().wrap(function(xn){for(;;)switch(xn.prev=xn.next){case 0:return xn.next=2,(Ge.beforeSubmit||function(){return Promise.resolve(!0)})();case 2:if(Be=xn.sent,Be){xn.next=5;break}return xn.abrupt("return");case 5:Ge.onSubmit({query:v,fileList:Ie}),E(""),be(A);case 8:case"end":return xn.stop()}},ze)})),onCancel:function(){z==null||z(),a.setLoading(!1)},onFocus:function(){return H(!0)},onBlur:function(){return H(!1)},onPasteFile:Ye,loading:a.loading}),Ge.afterUI]})]})}),we=e(69637),ye=e(10325),Ze,Te=(0,C.vJ)(Ze||(Ze=t()([`
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


`])),function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls}),un=(0,P.forwardRef)(function(M,$){var N=(0,j.TQ)(function(ve){return ve.messages}),q=(0,g.wv)(),v=q.getPrefixCls,E=v("chat-anywhere"),a=(0,j.TQ)(function(ve){return ve.uiConfig}),O=(0,P.useState)(!1),A=T()(O,2),U=A[0],re=A[1],se=(0,Ue.G)();(0,we.Z)(function(){re(!0)},300);var H=F()("".concat(E,"-chat"),Y()({},"".concat(E,"-chat-hide"),!U)),fe=!(N!=null&&N.length);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Te,{}),(0,n.jsxs)("div",{className:H,children:[(0,n.jsx)(_e.Z.List,{smooth:!!se.loading,style:{height:0,flex:fe?0:1},ref:$.chatRef,items:N}),fe?(0,n.jsx)("div",{className:"".concat(H,"-welcome"),children:a==null?void 0:a.welcome}):null,(0,n.jsx)("div",{className:"".concat(H,"-sender"),style:a!=null&&a.disclaimer?{marginBottom:16}:{},children:(0,n.jsx)(r,{ref:$.inputRef})}),(a==null?void 0:a.disclaimer)&&(0,n.jsx)(ye.Z,{style:{position:"absolute",bottom:0,width:"100%"},desc:a==null?void 0:a.disclaimer})]})]})}),dn,ln=(0,C.vJ)(dn||(dn=t()([`
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

`])),function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls});function hn(){var M=(0,g.wv)(),$=M.getPrefixCls,N=$("chat-anywhere-header"),q=(0,j.TQ)(function(A){return A.uiConfig}),v=(0,he.x)(),E=v.sessionListShow,a=v.setSessionListShow,O=L();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ln,{}),(0,n.jsxs)("div",{className:N,children:[O&&(0,n.jsx)(ie.Z,{style:{marginLeft:12},bordered:!1,onClick:function(){return a(!E)},icon:E?(0,n.jsx)(Pe.Z,{}):(0,n.jsx)(y.Z,{})}),q.header]})]})}var fn=e(83962),l=P.forwardRef(function($,N){var q=(0,Q.y)(),v=(0,Ue.G)(),E=(0,he.x)();return P.useImperativeHandle(N,function(){return h()(h()(h()({},q),v),E)}),null}),te=["cardConfig"],de=(0,P.forwardRef)(function(M,$){var N,q=(0,P.useState)(0),v=T()(q,2),E=v[0],a=v[1],O=M.cardConfig,A=x()(M,te),U=(0,P.useRef)(null),re=(0,P.useRef)(null),se=(0,P.useRef)(null);return P.useImperativeHandle($,function(){return h()(h()(h()(h()({},U.current),re.current),se.current),{},{reload:function(){a(function(fe){return fe+1})}})}),(0,P.createElement)(j.vi,h()(h()({},A),{},{key:E}),(0,n.jsxs)(fn.xy,{cardConfig:O,children:[(0,n.jsx)(d,{top:(N=A.uiConfig)!==null&&N!==void 0&&N.header?(0,n.jsx)(hn,{}):null,left:A.onSessionKeyChange?(0,n.jsx)(K,{}):null,right:(0,n.jsx)(un,{ref:{chatRef:U,inputRef:re}})}),(0,n.jsx)(l,{ref:se})]}))})},9368:function(on,J,e){"use strict";e.d(J,{Z:function(){return bn}});var ee=e(97857),h=e.n(ee),B=e(9783),x=e.n(B),b=e(5574),T=e.n(b),P=e(13769),R=e.n(P),F=e(93967),g=e.n(F),p=e(67294),D=e(21317),j=e(85893),m=p.createContext(null),t=function(G){var Ke=G.children,We=p.useContext(m),Ue=We.prefixCls;return(0,j.jsx)("div",{className:g()("".concat(Ue,"-group-title")),children:Ke&&(0,j.jsx)(D.default.Text,{children:Ke})})},C=t,w=e(30339),i=e(54604),n=e(45617),_=e(7654),d=e(64057),L=e(21403),oe=["prefixCls","info","className","direction","onClick","active","menu"],ie=["key"],f={};function he(I){var G=(0,p.useState)(f[I]),Ke=T()(G,2),We=Ke[0],Ue=Ke[1];return[We,function(ke){for(var vn in f)f[vn]=!1;f[I]=ke,Ue(ke)}]}var Q=function(G){var Ke,We=he(G.info.key),Ue=T()(We,2),ke=Ue[0],vn=Ue[1],mn=(0,p.useState)(!1),qe=T()(mn,2),tn=qe[0],gn=qe[1],Ve=G.prefixCls,Re=G.info,r=G.className,we=G.direction,ye=G.onClick,Ze=G.active,Te=G.menu,un=R()(G,oe),dn=(0,w.Z)(un,{aria:!0,data:!0,attr:!0}),ln=Re.disabled,hn=g()(r,"".concat(Ve,"-item"),x()({},"".concat(Ve,"-item-active"),Ze&&!ln),x()({},"".concat(Ve,"-item-disabled"),ln),x()({},"".concat(Ve,"-item-timeline"),Re.timeline||Re.selectable)),fn=function(){if(Re.selectable){var te;return(te=Re.onSelect)===null||te===void 0?void 0:te.call(Re,Re.key,!Re.selected)}if(!ln&&ye)return ye(Re)};return(0,j.jsxs)("li",h()(h()({},dn),{},{className:hn,onClick:fn,children:[(0,j.jsxs)("div",{className:"".concat(Ve,"-content"),children:[Re.icon&&(0,j.jsx)("div",{className:"".concat(Ve,"-icon"),children:Re.icon}),(Re.timeline||Re.selectable)&&(0,j.jsx)("div",{className:"".concat(Ve,"-timeline"),children:Re.selectable?(0,j.jsx)("div",{className:"".concat(Ve,"-timeline-checkbox"),onClick:function(te){return te.stopPropagation()},children:(0,j.jsx)(n.Z,{checked:Re.selected,onChange:function(){var te;return(te=Re.onSelect)===null||te===void 0?void 0:te.call(Re,Re.key,!Re.selected)}})}):(0,j.jsx)("div",{className:"".concat(Ve,"-timeline-dot")})}),(0,j.jsx)(X,{editable:ke,setEditable:vn,prefixCls:Ve,info:Re,onEdit:Te==null||(Ke=Te.find(function(l){return l.key==="edit"}))===null||Ke===void 0?void 0:Ke.onEdit}),Te&&!ln&&!Re.selectable&&(0,j.jsx)(_.Z,{styles:{body:{padding:4}},trigger:["click"],open:tn,onOpenChange:gn,content:(0,j.jsx)("div",{className:"".concat(Ve,"-menu-popover"),children:Te.map(function(l){var te=l.key,de=R()(l,ie),M=h()(h()({},de),{},{onClick:function(N){if(te==="edit")vn(!0);else{var q;(q=de.onClick)===null||q===void 0||q.call(de,Re)}gn(!1)}});return(0,j.jsx)(ue,h()(h()({},M),{},{info:Re}),te)})}),placement:"bottom",children:(0,j.jsx)(d.Z,{bordered:!1,icon:(0,j.jsx)(i.Z,{}),disabled:ln,className:"".concat(Ve,"-menu-icon"),onClick:function(te){return te.stopPropagation()}})})]}),Re.desc&&(0,j.jsx)("div",{className:"".concat(Ve,"-desc"),style:Re.timeline||Re.selectable?{marginLeft:16}:{},children:Re.desc})]}))};function X(I){var G=I.editable,Ke=I.prefixCls,We=I.info,Ue=I.setEditable,ke=I.onEdit,vn=(0,p.useState)(We.label),mn=T()(vn,2),qe=mn[0],tn=mn[1],gn=(0,p.useState)(We.label),Ve=T()(gn,2),Re=Ve[0],r=Ve[1];return We.label!==Re&&(r(We.label),tn(We.label)),G?(0,j.jsx)(ne,{prefixCls:Ke,value:qe,onBlur:function(ye){var Ze;if(ye===qe)return Ue(!1);(Ze=ke(ye,We))===null||Ze===void 0||Ze.then(function(){tn(ye)}).catch(function(){tn(qe)}).finally(function(){Ue(!1)})},setEditable:Ue}):(0,j.jsx)("div",{className:"".concat(Ke,"-label"),children:qe})}function ne(I){var G=I.prefixCls,Ke=I.value,We=I.onBlur,Ue=I.setEditable,ke=(0,p.useState)(Ke),vn=T()(ke,2),mn=vn[0],qe=vn[1],tn=(0,p.useRef)();return(0,p.useEffect)(function(){tn.current.focus()},[]),(0,p.useEffect)(function(){qe(Ke)},[Ke]),(0,j.jsx)("input",{ref:tn,className:"".concat(G,"-label-edit"),value:mn,onChange:function(Ve){return qe(Ve.target.value)},onBlur:function(){return We(mn)}})}function ue(I){var G=I.label,Ke=I.icon,We=I.danger,Ue=I.info,ke=I.disabled,vn=function(qe){var tn;ke||(qe.stopPropagation(),(tn=I.onClick)===null||tn===void 0||tn.call(I,Ue))};return Ke&&G?(0,j.jsx)(L.Z,{disabled:ke,icon:Ke,danger:We,type:"text",onClick:vn,children:G}):Ke?(0,j.jsx)(d.Z,{disabled:ke,icon:Ke,danger:We,bordered:!1,onClick:vn}):G?(0,j.jsx)(L.Z,{disabled:ke,danger:We,type:"text",onClick:vn,children:G}):null}var Pe=Q,y=e(60869),Me=e(56044),K=e(52677),me=e.n(K),ae="__ungrouped",Le=function(G){var Ke=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],We=p.useMemo(function(){if(!G)return[!1,void 0,void 0];var qe={sort:void 0,title:void 0};return me()(G)==="object"&&(qe=h()(h()({},qe),G)),[!0,qe.sort,qe.title]},[G]),Ue=T()(We,3),ke=Ue[0],vn=Ue[1],mn=Ue[2];return p.useMemo(function(){if(!ke){var qe=[{name:ae,data:Ke,title:void 0}];return[qe,ke]}var tn=Ke.reduce(function(Re,r){var we=r.group||ae;return Re[we]||(Re[we]=[]),Re[we].push(r),Re},{}),gn=vn?Object.keys(tn).sort(vn):Object.keys(tn),Ve=gn.map(function(Re){return{name:Re===ae?void 0:Re,title:mn,data:tn[Re]}});return[Ve,ke]},[Ke,G])},Y=Le,_e=e(68400),De=e.n(_e),Qe=e(9053),Xe,Ne=(0,Qe.vJ)(Xe||(Xe=De()([`
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
}`])),function(I){return I.theme.prefixCls},function(I){return I.theme.paddingXXS},function(I){return I.theme.prefixCls},function(I){return I.theme.paddingXL},function(I){return I.theme.prefixCls},function(I){return I.theme.colorTextSecondary},function(I){return I.theme.colorBgBase},function(I){return I.theme.colorBorder},function(I){return I.theme.colorTextSecondary},function(I){return I.theme.borderRadiusLG},function(I){return I.theme.colorBorder},function(I){return I.theme.colorFillTertiary},function(I){return I.theme.colorFillTertiary},function(I){return I.theme.prefixCls},function(I){return I.theme.prefixCls},function(I){return I.theme.colorText},function(I){return I.theme.prefixCls},function(I){return I.theme.colorTextDisabled},function(I){return I.theme.prefixCls},function(I){return I.theme.prefixCls},function(I){return I.theme.colorFillTertiary},function(I){return I.theme.colorText},function(I){return I.theme.colorText},function(I){return I.theme.fontFamily},function(I){return I.theme.fontSizeXL},function(I){return I.theme.controlHeightLG},function(I){return I.theme.controlHeightLG},function(I){return I.theme.paddingXS}),sn=["prefixCls","rootClassName","items","activeKey","defaultActiveKey","onActiveChange","menu","styles","classNames","groupable","className","style"],nn=function(G){var Ke=G.prefixCls,We=G.rootClassName,Ue=G.items,ke=G.activeKey,vn=G.defaultActiveKey,mn=G.onActiveChange,qe=G.menu,tn=G.styles,gn=tn===void 0?{}:tn,Ve=G.classNames,Re=Ve===void 0?{}:Ve,r=G.groupable,we=G.className,ye=G.style,Ze=R()(G,sn),Te=(0,w.Z)(Ze,{attr:!0,aria:!0,data:!0}),un=(0,y.Z)(vn,{value:ke}),dn=T()(un,2),ln=dn[0],hn=dn[1],fn=Y(r,Ue),l=T()(fn,2),te=l[0],de=l[1],M=(0,Me.wv)(),$=M.direction,N=M.getPrefixCls,q=N("conversations"),v=g()(q,we,We,x()({},"".concat(q,"-rtl"),$==="rtl")),E=function(O){hn(O.key),mn&&mn(O.key)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Ne,{}),(0,j.jsx)("ul",h()(h()({},Te),{},{style:ye,className:v,children:te.map(function(a,O){var A=a.data.map(function(re,se){return(0,j.jsx)(Pe,{info:re,prefixCls:q,direction:$,className:g()(Re.item),style:gn.item,menu:qe,active:ln===re.key,onClick:E},re.key||"key-".concat(se))});if(de){var U;return(0,j.jsxs)("li",{children:[(0,j.jsx)(m.Provider,{value:{prefixCls:q},children:((U=a.title)===null||U===void 0?void 0:U.call(a,a.name,{components:{GroupTitle:C}}))||(0,j.jsx)(C,{children:a.name},a.name)}),(0,j.jsx)("ul",{className:"".concat(q,"-list"),children:A})]},a.name||"key-".concat(O))}return A})}))]})},bn=nn},24963:function(on,J,e){"use strict";e.r(J),e.d(J,{Audios:function(){return Me},DeepThink:function(){return x},DeepThinking:function(){return x},Files:function(){return m},Footer:function(){return he},FooterActions:function(){return f.p4},FooterCount:function(){return f.hw},Images:function(){return _},Interrupted:function(){return X},Text:function(){return ie},Videos:function(){return Pe}});var ee=e(67294),h=e(14082),B=e(85893);function x(K){return(0,B.jsx)(h.Z,{defaultOpen:K.data.defaultOpen!==void 0?K.data.defaultOpen:!0,title:K.data.title,loading:K.data.loading,content:K.data.content,className:K.data.className,open:K.data.open,autoCloseOnFinish:K.data.autoCloseOnFinish,maxHeight:K.data.maxHeight})}var b=e(68400),T=e.n(b),P=e(23345),R=e(36417),F=e(9053),g=e(56044),p=e(6411),D,j=(0,F.vJ)(D||(D=T()([`
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
`])),function(K){return K.theme.prefixCls},function(K){return K.theme.prefixCls},function(K){return K.theme.borderRadius},function(K){return K.theme.colorWhite},function(K){return K.theme.motionDurationSlow},function(K){return K.theme.prefixCls},function(K){return K.theme.prefixCls});function m(K){var me=(0,g.wv)(),ae=me.getPrefixCls,Le=ae("bubble-files");return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(j,{}),(0,B.jsx)(P.Z,{className:Le,children:K.data.map(function(Y,_e){var De={name:Y.name||Y.filename,size:Y.size||Y.bytes,url:Y.url};return(0,B.jsxs)("div",{className:"".concat(Le,"-file"),children:[(0,B.jsx)(R.Z.FileCard,{item:De}),De.url&&(0,B.jsx)("div",{className:"".concat(Le,"-download"),onClick:function(){window.open(De.url,"_blank")},children:(0,B.jsx)(p.Z,{})})]},_e)})})]})}var t=e(16494),C=e(55839),w,i=(0,F.vJ)(w||(w=T()([`
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
`])),function(K){return K.theme.prefixCls},function(K){return K.theme.prefixCls},function(K){return K.theme.prefixCls},function(K){return K.theme.prefixCls});function n(K){var me=(0,g.wv)(),ae=me.getPrefixCls,Le=ae("bubble-image");return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(i,{}),(0,B.jsx)("div",{className:"".concat(Le),children:(0,B.jsx)(t.Z,{fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",src:K.url,width:56,height:56,preview:{transitionName:""}})})]})}function _(K){return(0,B.jsx)(C.ZP,{locale:{Image:{preview:""}},children:(0,B.jsx)(P.Z,{children:K.data.map(function(me,ae){return(0,B.jsx)(n,{url:me.url},ae)})})})}var d=e(97857),L=e.n(d),oe=e(66109);function ie(K){var me=K.data.msgStatus==="generating";return(0,B.jsx)(oe.Z,L()(L()({cursor:me},K.data),{},{typing:K.data.msgStatus==="generating"?K.data.typing:!1}))}var f=e(67369);function he(K){return(0,B.jsx)(f.ZP,L()({},K.data))}var Q=e(10146);function X(K){return(0,B.jsx)(Q.Z,L()({},K.data))}var ne=e(51794),ue;function Pe(K){var me=(0,g.wv)().getPrefixCls("bubble-video");return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(y,{}),(0,B.jsx)(P.Z,{children:K.data.map(function(ae,Le){return(0,B.jsx)(ne.Z,{className:me,src:ae.src,poster:ae.poster,controls:!0},Le)})})]})}var y=(0,F.vJ)(ue||(ue=T()([`
.`,`-bubble-video {
  max-width: 256px;
  max-height: 144px;
  border-radius: 8px;
  border: 1px solid `,`;
  overflow: hidden;
}
`])),function(K){return K.theme.prefixCls},function(K){return K.theme.colorBorderSecondary});function Me(){return(0,B.jsx)("div",{children:"Audio"})}},55031:function(on,J,e){"use strict";e.d(J,{Z:function(){return oe}});var ee=e(56044),h=e(31382),B=e(55839),x=e(16494),b=e(33948),T=e(52253),P=e(56137),R=e(1948),F=e(61763),g=e(77900),p=e(40443),D=e(33119),j=e(4356),m=e(72816),t=e(77382),C=e(72167),w=e(74398),i=e(55094),n=e(61401),_=e(85893),d={Click:{name:"\u70B9\u51FB",icon:(0,_.jsx)(b.Z,{})},Swipe:{name:"\u6ED1\u52A8",icon:(0,_.jsx)(T.Z,{})},Type:{name:"\u8F93\u5165",icon:(0,_.jsx)(P.Z,{})},Back:{name:"\u8FD4\u56DE",icon:(0,_.jsx)(R.Z,{})},Home:{name:"\u4E3B\u9875",icon:(0,_.jsx)(F.Z,{})},Done:{name:"\u5B8C\u6210",icon:(0,_.jsx)(g.Z,{})},Wait:{name:"\u7B49\u5F85",icon:(0,_.jsx)(p.Z,{spin:!0})},click:{name:"\u70B9\u51FB",icon:(0,_.jsx)(b.Z,{})},"right click":{name:"\u53F3\u952E\u70B9\u51FB",icon:(0,_.jsx)(b.Z,{})},"open app":{name:"\u6253\u5F00\u5E94\u7528",icon:(0,_.jsx)(D.Z,{})},computer_double_click:{name:"\u53CC\u51FB",icon:(0,_.jsx)(j.Z,{})},hotkey:{name:"\u5FEB\u6377\u952E",icon:(0,_.jsx)(m.Z,{})},presskey:{name:"\u6309\u952E",icon:(0,_.jsx)(t.Z,{})},scroll:{name:"\u6EDA\u52A8",icon:(0,_.jsx)(T.Z,{})},drag:{name:"\u62D6\u62FD",icon:(0,_.jsx)(C.Z,{})},type_with_clear_enter_pos:{name:"\u8F93\u5165\u5E76\u6E05\u9664",icon:(0,_.jsx)(P.Z,{})},triple_click:{name:"\u4E09\u51FB",icon:(0,_.jsx)(w.Z,{})},drag_end:{name:"\u62D6\u62FD\u7ED3\u675F",icon:(0,_.jsx)(C.Z,{})},type:{name:"\u8F93\u5165",icon:(0,_.jsx)(P.Z,{})},hscroll:{name:"\u6C34\u5E73\u6EDA\u52A8",icon:(0,_.jsx)(i.Z,{})},done:{name:"\u5B8C\u6210",icon:(0,_.jsx)(g.Z,{})},wait:{name:"\u7B49\u5F85",icon:(0,_.jsx)(p.Z,{spin:!0})},call_user:{name:"\u547C\u53EB\u7528\u6237",icon:(0,_.jsx)(n.Z,{})}},L=d;function oe(ie){var f,he,Q=(0,ee.wv)(),X=Q.getPrefixCls,ne=X("operate-card");return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"".concat(ne,"-device-action-time"),children:ie.time}),(0,_.jsx)(h.Z,{header:{className:"".concat(ne,"-device-action"),icon:(0,_.jsx)("div",{className:"".concat(ne,"-device-action-icon"),children:(f=L[ie.action])===null||f===void 0?void 0:f.icon}),title:(0,_.jsxs)("div",{className:"".concat(ne,"-device-action-content"),children:[(0,_.jsxs)("div",{className:"".concat(ne,"-device-action-description"),children:[(0,_.jsx)("span",{children:ie.actionName||((he=L[ie.action])===null||he===void 0?void 0:he.name)}),(0,_.jsx)("span",{children:ie.description})]}),(0,_.jsx)("div",{className:"".concat(ne,"-device-action-image"),children:(0,_.jsx)(B.ZP,{locale:{Image:{preview:""}},children:(0,_.jsx)(x.Z,{src:ie.image,alt:ie.description,width:"100%",height:"100%"})})})]})}})]})}},10325:function(on,J,e){"use strict";e.d(J,{Z:function(){return F}});var ee=e(67294),h=e(68400),B=e.n(h),x=e(9053),b,T=(0,x.vJ)(b||(b=B()([`
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
`])),function(g){return g.theme.prefixCls},function(g){return g.theme.colorTextTertiary},function(g){return g.theme.prefixCls}),P=e(56044),R=e(85893);function F(g){var p=g.desc,D=p===void 0?"AI can also make mistakes, so please check carefully and use it with caution":p,j=(0,P.wv)(),m=j.getPrefixCls,t=m("disclaimer");return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(T,{}),(0,R.jsxs)("div",{className:t,style:g.style,children:[D,g.afterLink&&(0,R.jsx)("a",{className:"".concat(t,"-after-link"),href:g.afterLink.href,target:"_blank",children:g.afterLink.text})]})]})}},80115:function(on,J,e){"use strict";e.d(J,{Z:function(){return h}});var ee=e(85893);function h(){return(0,ee.jsx)("iframe",{srcDoc:`<html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>`})}},2534:function(on,J,e){"use strict";e.d(J,{Z:function(){return w}});var ee=e(67294),h=e(68400),B=e.n(h),x=e(9053),b,T=(0,x.vJ)(b||(b=B()([`
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

`])),function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.colorText},function(i){return i.theme.colorSuccess},function(i){return i.theme.colorBgBase},function(i){return i.theme.prefixCls}),P=e(56044),R=e(55839),F=e(16494),g=e(89034),p=e(36374),D=e(85893);function j(){for(var i=arguments.length,n=new Array(i),_=0;_<i;_++)n[_]=arguments[_];return n.filter(Boolean).join(" ")}var m=function(n){var _=n.speed,d=_===void 0?1:_,L=n.backgroundColor,oe=L===void 0?"#b6a9f8":L,ie=n.colors,f=ie===void 0?["#c979ee","#ef788c","#eb7fc6","#6d67c8"]:ie,he=n.ringColors,Q=he===void 0?["white","blue","magenta","violet","lightyellow"]:he,X=n.className,ne=X===void 0?"":X,ue=(0,ee.useRef)(null);return(0,ee.useEffect)(function(){if(CSS&&CSS.registerProperty)try{CSS.registerProperty({name:"--a",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--l",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--x",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--y",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--o",syntax:"<number>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--value",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--width-ratio",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--scale",syntax:"<number>",inherits:!0,initialValue:"0"})}catch(Pe){}},[]),(0,ee.useEffect)(function(){var Pe=ue.current;if(Pe){var y=function(){var me=Pe.getBoundingClientRect(),ae=Math.min(me.width,me.height);Pe.style.setProperty("--actual-size","".concat(ae,"px"))};y();var Me=new ResizeObserver(y);return Me.observe(Pe),function(){Me.disconnect()}}},[]),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("style",{children:`
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
          --duration: calc(8s / `.concat(d,`);
          --ai-duration: calc(5.5s / `).concat(d,`);
          
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
          background: `).concat(oe,`;
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
            `).concat(Q.join(", "),`
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
      `)}),(0,D.jsxs)("div",{ref:ue,className:j("fluid-background-container",ne),children:[(0,D.jsxs)("div",{className:"fluid-inner",children:[(0,D.jsx)("div",{className:"c c4",style:{"--i":0}}),(0,D.jsx)("div",{className:"c c1",style:{"--i":1}}),(0,D.jsx)("div",{className:"c c2",style:{"--i":2}}),(0,D.jsx)("div",{className:"c c3",style:{"--i":3}}),(0,D.jsx)("div",{className:"rings"})]}),(0,D.jsx)("div",{className:"glass"})]})]})},t=m,C=function(n){var _=(0,P.wv)(),d=_.getPrefixCls,L=d("image-generator"),oe=n.block,ie=n.skeletonText,f=n.width,he=f===void 0?320:f,Q=n.height,X=Q===void 0?320:Q,ne=n.src,ue=n.loadingText,Pe=ue===void 0?"Painting...":ue,y=n.doneText,Me=y===void 0?"Paint Completed":y,K=n.skeleton||(0,D.jsxs)("div",{className:"".concat(L,"-default-skeleton"),style:{width:"100%",height:"100%"},children:[(0,D.jsx)("div",{className:"".concat(L,"-default-skeleton-bg"),children:(0,D.jsx)(t,{})}),(0,D.jsxs)("div",{className:"".concat(L,"-default-skeleton-content"),children:[(0,D.jsx)("img",{className:"".concat(L,"-default-skeleton-icon"),src:"https://img.alicdn.com/imgextra/i2/O1CN01M1X8yM1MWUC7u3Go5_!!6000000001442-54-tps-72-72.apng"}),ie&&(0,D.jsx)("div",{className:"".concat(L,"-default-skeleton-text"),children:ie})]})]}),me=!ne,ae=oe?{aspectRatio:"".concat(he,"/").concat(X)}:{width:he,height:X};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(T,{}),(0,D.jsxs)("div",{className:L,children:[(0,D.jsxs)("div",{className:"".concat(L,"-text"),children:[me?(0,D.jsx)(p.Z,{}):(0,D.jsx)(g.Z,{className:"".concat(L,"-text-success")}),me?(0,D.jsx)("span",{style:{paddingLeft:20},children:Pe}):Me]}),(0,D.jsx)("div",{className:"".concat(L,"-wrapper"),style:ae,children:me?K:(0,D.jsx)(R.ZP,{locale:{Image:{preview:""}},children:(0,D.jsx)(F.Z,{width:"100%",height:"100%",src:ne})})})]})]})},w=C},66109:function(on,J,e){"use strict";e.d(J,{Z:function(){return fn}});var ee=e(19632),h=e.n(ee),B=e(97857),x=e.n(B),b=e(67294),T=e(13769),P=e.n(T),R=e(55729),F=e(68400),g=e.n(F),p=e(9053),D,j=(0,p.vJ)(D||(D=g()([`
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
`])),function(l){return l.theme.prefixCls},function(l){return l.theme.colorBorder},function(l){return l.theme.colorFillQuaternary},function(l){return l.theme.colorText},function(l){return l.theme.borderRadiusSM},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.borderRadiusSM},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.colorBgBase},function(l){return l.theme.prefixCls},function(l){return l.theme.colorFillSecondary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorSuccess},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorFillQuaternary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorFillSecondary},function(l){return l.theme.motionEaseOut},function(l){return l.theme.colorWhite},function(l){return l.theme.colorPrimary});function m(l){var te=l.cursor,de=l.content,M=l.animation,$=(0,b.useMemo)(function(){return M?"":te?te==="dot"?" :dot:":te==="underline"?" :underline:":" :dot:":""},[te,de]);return de+$}var t=e(85893),C=["content","cursor","animation"];function w(l){var te=l.content,de=l.cursor,M=l.animation,$=P()(l,C),N=m({cursor:de,content:te,animation:M}),q=(0,b.useMemo)(function(){if(M)return{hasNextChunk:M&&de,enableAnimation:M&&de}},[de,M]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j,{}),(0,t.jsx)(R.Z,x()(x()({},$),{},{content:N,streaming:q}))]})}var i=e(5574),n=e.n(i),_=function(te){var de=te.content,M=te.typing,$=(0,b.useState)(0),N=n()($,2),q=N[0],v=N[1],E=(0,b.useRef)();return(0,b.useEffect)(function(){return M?E.current=setInterval(function(){v(function(a){return a+1})},typeof M=="number"?M:5):E.current&&clearInterval(E.current),function(){return clearInterval(E.current)}},[M]),M?de.slice(0,q):de},d=_,L=e(56044),oe=e(93967),ie=e.n(oe),f=function(){return null},he=e(87427),Q=e(96643),X=e(6411),ne=e(97634),ue=e(89698),Pe={javascript:"js",typescript:"ts",python:"py",ruby:"rb",rust:"rs",kotlin:"kt",csharp:"cs",markdown:"md",yaml:"yml",shell:"sh",bash:"sh",zsh:"sh",mermaid:"mmd",jsx:"jsx",tsx:"tsx"},y=function(te){var de,M=te.className,$=te.children,N=(M==null||(de=M.match(/language-(\w+)/))===null||de===void 0?void 0:de[1])||"";return typeof $!="string"?null:N==="mermaid"?(0,t.jsx)(he.Z,{header:(0,t.jsx)(Me,{lang:"mermaid",content:$}),children:$}):(0,t.jsx)(Q.Z,{lang:N,header:(0,t.jsx)(Me,{lang:N,content:$}),children:$})};function Me(l){var te=l.lang,de=l.content,M=(0,b.useState)(!1),$=n()(M,2),N=$[0],q=$[1],v=(0,L.wv)(),E=v.getPrefixCls,a=E("code-header"),O=(0,b.useCallback)(function(){var A=Pe[te]||te||"txt",U=new Blob([de],{type:"text/plain;charset=utf-8"}),re=URL.createObjectURL(U),se=document.createElement("a");se.href=re,se.download="code.".concat(A),se.click(),URL.revokeObjectURL(re)},[te,de]);return(0,t.jsxs)("div",{className:a,children:[(0,t.jsx)("div",{className:"".concat(a,"-lang"),children:te}),(0,t.jsxs)("div",{className:"".concat(a,"-actions"),children:[(0,t.jsx)(X.Z,{className:"".concat(a,"-download"),onClick:O}),N?(0,t.jsx)(ne.Z,{className:"".concat(a,"-copied")}):(0,t.jsx)(ue.Z,{className:"".concat(a,"-icon"),onClick:function(){navigator.clipboard.writeText(de),q(!0),setTimeout(function(){q(!1)},1e3)}})]})]})}var K=y;function me(l){return(0,t.jsx)("a",{href:l.src,target:"_blank",rel:"noopener noreferrer",children:l.src})}var ae=e(55839),Le=e(16494),Y=e(85576),_e=e(36231),De=e(89102);function Qe(l){try{var te=l.src,de=new URL(te),M=de.pathname,$=M.endsWith(".mp4"),N=M.endsWith(".mp3")||M.endsWith(".wav");return N?(0,t.jsx)("audio",x()(x()({src:l.src},l),{},{controls:!0})):$?(0,t.jsx)(Ne,x()({src:l.src},l)):(0,t.jsx)(Xe,x()({src:l.src},l))}catch(q){return null}}function Xe(l){return(0,t.jsx)(ae.ZP,{locale:{Image:{preview:""}},children:(0,t.jsx)(Le.Z,x()({src:l.src},l))})}function Ne(l){var te=l.src,de=(0,b.useState)(!1),M=n()(de,2),$=M[0],N=M[1],q=(0,L.wv)(),v=q.getPrefixCls,E=v("markdown-video");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:E,children:(0,t.jsx)("div",{className:"".concat(E,"-poster"),onClick:function(){return N(!0)},children:(0,t.jsx)(_e.Z,{className:"".concat(E,"-play")})})}),(0,t.jsx)(Y.Z,{closeIcon:(0,t.jsx)("a",{children:(0,t.jsx)(De.Z,{style:{fontSize:20}})}),centered:!0,transitionName:"",footer:null,width:500,title:"",styles:{content:{padding:0}},open:$,destroyOnHidden:!0,onCancel:function(){return N(!1)},children:(0,t.jsx)("video",{controls:!0,autoPlay:!0,style:{display:"block",width:"100%"},children:(0,t.jsx)("source",{src:te,type:"video/mp4"})})})]})}function sn(l){var te=(0,L.wv)().getPrefixCls("markdown");return(0,t.jsx)("div",{className:te,style:{fontSize:l.baseFontSize,lineHeight:l.baseLineHeight},children:l.content})}var nn=e(79427),bn=e(55241),I,G=(0,p.vJ)(I||(I=g()([`
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
`])),function(l){return l.theme.prefixCls},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorFillSecondary},function(l){return l.theme.motionEaseOut},function(l){return l.theme.colorWhite},function(l){return l.theme.colorPrimary});function Ke(l){var te=(0,L.wv)(),de=te.getPrefixCls,M=de("markdown-citation"),$=l["data-text"],N=l["data-url"],q=l["data-title"],v=l["data-content"],E=v||q,a=(0,t.jsx)("sup",{className:M,children:$});return E&&(a=(0,t.jsx)(bn.Z,{title:q,content:N?(0,t.jsx)("a",{href:N,rel:"noreferrer",target:"_blank",children:N}):v,children:a})),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(G,{}),a]})}function We(l){var te,de=((te=l.citationsData[l["data-text"]])===null||te===void 0?void 0:te.render)||Ke;return(0,t.jsx)(de,x()({},l))}var Ue=[],ke={};function vn(l){var te=l.citations,de=te===void 0?Ue:te,M=l.citationsMap,$=M===void 0?ke:M,N=(0,b.useMemo)(function(){var a=x()({},$);return de.forEach(function(O,A){var U=A+1;a[U]=O}),[a,function(){return function(A){return(0,t.jsx)(We,x()(x()({},A),{},{citationsData:a}))}}()]},[de,$]),q=n()(N,2),v=q[0],E=q[1];return{CitationComponent:E,citationsData:v,citationsDataCount:Object.keys(v).length}}var mn=e(30861);function qe(l){return{name:"citation",level:"inline",tokenizer:function(de){var M=de.match(/^\[([^\]]+)\](?!\()/);if(M){var $=M[0].trim(),N=$==null?void 0:$.replace(/^\[([^\]]+)\]/g,"$1");if(l[N])return{type:"citation",raw:$,text:$==null?void 0:$.replace(/^\[([^\]]+)\]/g,"$1"),renderType:"component"}}},renderer:function(de){if(l&&Object.keys(l).length===0)return null;var M=de.text,$=l==null?void 0:l[M];return $?'<citation data-text="'.concat(M,'" data-url="').concat($.url,'" data-title="').concat($.title,'" data-content="').concat($.content,'"></citation>'):de.raw}}}var tn,gn=(0,p.vJ)(tn||(tn=g()([`
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
`])),function(l){var te=l.theme;return te.colorPrimary});function Ve(){var l=(0,L.wv)(),te=l.getPrefixCls,de="markdown-cursor-underline";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(gn,{}),(0,t.jsx)("span",{className:ie()(de,te("markdown-cursor"))})]})}var Re=e(36374),r=function(te){var de=te["data-type"];return de==="dot"?(0,t.jsx)(Re.Z,{}):de==="underline"?(0,t.jsx)(Ve,{}):null};function we(){var l={cursors:{dot:"dot",underline:"underline"}},te=Object.keys(l.cursors).map(function($){return $.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|"),de=new RegExp(":(".concat(te,"):")),M=new RegExp("^".concat(de.source));return{name:"cursor",level:"inline",start:function(N){var q;return(q=N.match(de))===null||q===void 0?void 0:q.index},tokenizer:function(N,q){var v=M.exec(N);if(v){var E=v[1],a=l.cursors[E];if(a)return{type:"cursor",raw:v[0],name:E,cursor:a}}},renderer:function(N){var q='<custom-cursor data-type="'.concat(N.name,'"></custom-cursor>');return q}}}var ye=e(85018),Ze=["href"];function Te(l){return l["data-footnote-ref"]===""?(0,t.jsx)(un,x()({},l)):l.children==="\u21A9"&&l["data-footnote-backref"]===""?null:(0,t.jsx)("a",x()({},l))}function un(l){var te=(0,L.wv)(),de=te.getPrefixCls,M=de("markdown-footnote"),$=l.href,N=P()(l,Ze);return(0,t.jsx)("a",x()(x()({},N),{},{className:M,onClick:function(){try{var v=l.id.split("-"),E=n()(v,3),a=E[0],O=E[1],A=E[2],U=document.querySelector("#footnote-".concat(A)).querySelector("a").getAttribute("href");window.open(U,"_blank")}catch(re){}}}))}var dn={ALLOWED_TAGS:[]};function ln(){try{return new RegExp("(?<=a)b"),!0}catch(l){return!1}}var hn=ln(),fn=(0,b.memo)(function(l){var te=l.baseFontSize||14,de=l.baseLineHeight||1.7,M=d({content:l.content,typing:l.typing&&!l.animation}),$=(0,L.wv)().getPrefixCls("markdown"),N=l.raw,q=N===void 0?!1:N,v=l.allowHtml,E=v===void 0?!1:v,a=vn({citations:l.citations,citationsMap:l.citationsMap}),O=a.citationsData,A=a.citationsDataCount,U=a.CitationComponent,re=(0,b.useMemo)(function(){return x()({code:K,style:f,script:f,img:l.disableImage?me:Qe,citation:U,"custom-cursor":r,a:Te},l.components)},[l.disableImage,U,l.components]),se=(0,b.useMemo)(function(){return{ADD_TAGS:["custom-cursor","citation"]}},[]),H=(0,b.useMemo)(function(){var He=(0,mn.Z)();He.push(we()),A>0&&He.push(qe(O));var $e=(0,ye.Z)({sectionClass:"".concat($,"-footnotes")});return He.push.apply(He,h()($e.extensions)),{extensions:He,walkTokens:$e.walkTokens}},[A,O]),fe=H.extensions,ve=H.walkTokens,V=(0,b.useMemo)(function(){return x()({extensions:fe,walkTokens:ve},!E&&{renderer:{html:function($e){var z=$e.text||$e.raw||"";return z.replace(/</g,"&lt;").replace(/>/g,"&gt;")}}})},[fe,E]),be=M||"",an=(0,t.jsx)(sn,{content:be,baseFontSize:te,baseLineHeight:de}),Cn=(0,b.useCallback)(function(){for(var He=arguments.length,$e=new Array(He),z=0;z<He;z++)$e[z]=arguments[z];return console.error($e),(0,t.jsx)(sn,{content:be,baseFontSize:te,baseLineHeight:de})},[be,te,de]),yn=(0,b.useMemo)(function(){return{fontSize:te,lineHeight:de}},[te,de]);return q||!hn?an:(0,t.jsx)(nn.SV,{fallbackRender:Cn,children:(0,t.jsx)(w,{dompurifyConfig:se,cursor:l.cursor,animation:l.animation,components:re,style:yn,openLinksInNewTab:!0,className:ie()($,l.className),content:be,config:V})})})},36374:function(on,J,e){"use strict";e.d(J,{Z:function(){return g}});var ee=e(68400),h=e.n(ee),B=e(56044),x=e(9053),b=e(93967),T=e.n(b),P=e(85893),R,F=(0,x.vJ)(R||(R=h()([`
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
`])),function(p){return p.theme.prefixCls},function(p){return p.theme.colorText},function(p){return p.theme.colorText});function g(){var p=(0,B.wv)(),D=p.getPrefixCls,j=D("markdown-cursor-dot");return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(F,{}),(0,P.jsxs)("span",{className:T()(j,D("markdown-cursor")),children:[(0,P.jsx)("span",{style:{opacity:0,marginLeft:"-.75em"},children:"_"}),(0,P.jsx)("span",{className:"".concat(j,"-dot1")}),(0,P.jsx)("span",{className:"".concat(j,"-dot2")})]})]})}},12181:function(on,J,e){"use strict";e.d(J,{Z:function(){return L}});var ee=e(5574),h=e.n(ee),B=e(15009),x=e.n(B),b=e(99289),T=e.n(b),P=e(68400),R=e.n(P),F=e(41469),g=e(2093),p=e(9361),D=e(96486),j=e.n(D),m=e(67294),t=e(56044),C=e(9053),w=e(85893),i,n=(0,C.vJ)(i||(i=R()([`
.`,`-mermaid {
  &-preview img {
    background: `,`;
  }
}
`])),function(oe){return oe.theme.prefixCls},function(oe){return oe.theme.colorBgBase}),_,d=function(){var oe=T()(x()().mark(function ie(){return x()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:if(!_){he.next=2;break}return he.abrupt("return",_);case 2:return _=Promise.resolve().then(e.bind(e,76637)).then(function(Q){return Q.default}),he.abrupt("return",_);case 4:case"end":return he.stop()}},ie)}));return function(){return oe.apply(this,arguments)}}();function L(oe){var ie=oe.content,f=oe.width,he=oe.height,Q=(0,t.wv)(),X=Q.theme,ne=Q.getPrefixCls,ue=ne("mermaid"),Pe=(0,m.useMemo)(function(){return{theme:(X==null?void 0:X.algorithm)===p.Z.darkAlgorithm?"dark":"default",securityLevel:"loose",startOnLoad:!1}},[X==null?void 0:X.algorithm,X==null?void 0:X.token.fontFamily]),y=(0,m.useState)(""),Me=h()(y,2),K=Me[0],me=Me[1],ae=(0,m.useState)(),Le=h()(ae,2),Y=Le[0],_e=Le[1],De=(0,m.useId)(),Qe=(0,D.kebabCase)("mermaid-".concat(De));return(0,g.Z)(T()(x()().mark(function Xe(){var Ne,sn,nn,bn;return x()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.prev=0,G.next=3,d();case 3:if(Ne=G.sent,Ne){G.next=7;break}return me(ie),G.abrupt("return");case 7:return G.next=9,Ne.parse(ie);case 9:if(sn=G.sent,!sn){G.next=19;break}return Ne.initialize(Pe),G.next=14,Ne.render(Qe,ie);case 14:nn=G.sent,bn=nn.svg,me(bn),G.next=20;break;case 19:throw new Error("Invalid Mermaid syntax");case 20:G.next=26;break;case 22:G.prev=22,G.t0=G.catch(0),K||console.error("Mermaid parse error: ",G.t0),me(K||"");case 26:case"end":return G.stop()}},Xe,null,[[0,22]])})),[ie,Pe]),(0,m.useEffect)(function(){if(K){var Xe=new Blob([K],{type:"image/svg+xml"}),Ne=URL.createObjectURL(Xe);return _e(Ne),function(){URL.revokeObjectURL(Ne)}}},[K]),Y?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(n,{}),(0,w.jsx)(F.Z,{className:ue,src:Y,alt:"mermaid",width:f,height:he,preview:{rootClassName:"".concat(ue,"-preview")}})]}):null}},31382:function(on,J,e){"use strict";e.d(J,{Z:function(){return _}});var ee=e(9783),h=e.n(ee),B=e(5574),x=e.n(B),b=e(67294),T=e(56044),P=e(68400),R=e.n(P),F=e(9053),g,p=(0,F.vJ)(g||(g=R()([`
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
`])),function(d){return d.theme.prefixCls},function(d){return d.theme.borderRadiusLG},function(d){return d.theme.colorFillTertiary},function(d){return d.theme.colorText},function(d){return d.theme.colorTextTertiary},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.colorBorderSecondary},function(d){return d.theme.colorTextTertiary},function(d){return d.theme.colorText},function(d){return d.theme.colorTextTertiary},function(d){return d.theme.colorText},function(d){return d.theme.colorBorderSecondary},function(d){return d.theme.colorTextSecondary},function(d){return d.theme.colorText},function(d){return d.theme.colorBorderSecondary},function(d){return d.theme.colorTextTertiary},function(d){return d.theme.colorText},function(d){return d.theme.colorTextSecondary},function(d){return d.theme.colorBorderSecondary},function(d){return d.theme.colorBorderSecondary},function(d){return d.theme.colorBgBase},function(d){return d.theme.colorTextSecondary},function(d){return d.theme.prefixCls},function(d){return d.theme.colorTextSecondary},function(d){return d.theme.colorTextSecondary},function(d){return d.theme.colorPrimary},function(d){return d.theme.colorTextSecondary},function(d){return d.theme.colorFillTertiary},function(d){return d.theme.colorFillTertiary},function(d){return d.theme.colorFillQuaternary},function(d){return d.theme.colorTextTertiary}),D=e(93967),j=e.n(D),m=e(28387),t=e(9838),C=e(64057),w=e(85893);function i(d){var L=(0,T.wv)(),oe=L.getPrefixCls,ie=oe("operate-card");return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("div",{className:"".concat(ie,"-line-body"),children:d.children})})}function n(d){var L,oe=(0,T.wv)(),ie=oe.getPrefixCls,f=ie("operate-card"),he=(0,b.useState)(((L=d.body)===null||L===void 0?void 0:L.defaultOpen)||!1),Q=x()(he,2),X=Q[0],ne=Q[1];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{}),(0,w.jsxs)("div",{className:f,children:[(0,w.jsxs)("div",{className:j()("".concat(f,"-header"),d.header.className,h()({},"".concat(f,"-header-has-body"),d.body)),onClick:function(){d.body&&ne(!X)},children:[(0,w.jsx)("div",{className:"".concat(f,"-header-icon"),children:d.header.icon}),typeof d.header.title=="string"?(0,w.jsx)("div",{className:"".concat(f,"-header-title"),children:d.header.title}):d.header.title,d.header.description&&(0,w.jsx)("div",{className:"".concat(f,"-header-description"),children:d.header.description}),d.body&&(0,w.jsx)(C.Z,{size:"small",bordered:!1,className:"".concat(f,"-header-arrow"),icon:X?(0,w.jsx)(m.Z,{}):(0,w.jsx)(t.Z,{})})]}),d.body&&X&&(0,w.jsx)("div",{className:"".concat(f,"-body"),children:d.body.children})]})]})}n.LineBody=i;var _=n},85762:function(on,J,e){"use strict";e.d(J,{Z:function(){return i}});var ee=e(5574),h=e.n(ee),B=e(56044),x=e(31382),b=e(37303),T=e(64057),P=e(28387),R=e(9838),F=e(48095),g=e(50104),p=e(55839),D=e(16494),j=e(86250),m=e(67294),t=e(85893);function C(n){var _=n.images,d=(0,B.wv)(),L=d.getPrefixCls,oe=L("operate-card");return(0,t.jsx)(p.ZP,{locale:{Image:{preview:""}},children:(0,t.jsx)(D.Z.PreviewGroup,{children:_.map(function(ie,f){return(0,t.jsx)(D.Z,{src:ie,width:44,height:44},f)})})})}function w(n){var _=n.item,d=(0,m.useState)(!1),L=h()(d,2),oe=L[0],ie=L[1],f=(0,B.wv)(),he=f.getPrefixCls,Q=he("operate-card");return(0,t.jsxs)("div",{className:"".concat(Q,"-rag-item"),children:[(0,t.jsxs)("div",{className:"".concat(Q,"-rag-item-title"),onClick:function(){ie(!oe)},children:[(0,t.jsx)("span",{children:_.title}),(0,t.jsx)("span",{style:{flex:1}}),_.score?(0,t.jsxs)(b.Z,{color:"mauve",size:"small",className:"".concat(Q,"-rag-item-score"),children:["\u5F97\u5206 ",(0,t.jsx)("b",{children:_.score})]}):null,(0,t.jsx)(T.Z,{bordered:!1,size:"small",icon:oe?(0,t.jsx)(P.Z,{}):(0,t.jsx)(R.Z,{})})]}),oe&&(0,t.jsxs)("div",{className:"".concat(Q,"-rag-item-content"),children:[(0,t.jsx)("div",{className:"".concat(Q,"-rag-item-content-text"),children:_.content}),_.images&&(0,t.jsx)("div",{className:"".concat(Q,"-rag-item-images"),children:(0,t.jsx)(C,{images:_.images})}),_.link?(0,t.jsx)("a",{onClick:function(){window.open(_.link,"_blank")},className:"".concat(Q,"-rag-item-footer"),href:_.link,target:"_blank",children:_.footer}):(0,t.jsx)("div",{className:"".concat(Q,"-rag-item-footer"),children:_.footer})]})]})}function i(n){var _=n.title,d=_===void 0?"\u77E5\u8BC6\u5E93\u68C0\u7D22":_,L=n.subTitle,oe=n.defaultOpen,ie=oe===void 0?!0:oe,f=n.placeholder,he=f===void 0?"\u672A\u67E5\u8BE2\u5230\u4E0E\u63D0\u95EE\u76F8\u5173\u77E5\u8BC6\u5E93":f,Q=n.images,X=n.query,ne=n.filters,ue=(0,B.wv)(),Pe=ue.getPrefixCls,y=Pe("operate-card"),Me=(0,t.jsxs)(x.Z.LineBody,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"".concat(y,"-rag-group-title"),children:"\u68C0\u7D22 Query"}),(0,t.jsx)("div",{className:"".concat(y,"-rag-group-content"),children:X})]}),Q!=null&&Q.length?(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"".concat(y,"-rag-group-title"),children:"\u68C0\u7D22\u56FE\u7247"}),(0,t.jsx)("div",{className:"".concat(y,"-rag-group-content ").concat(y,"-rag-group-content-images"),children:(0,t.jsx)(C,{images:Q})})]}):null,ne?(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"".concat(y,"-rag-group-title"),children:"\u8FC7\u6EE4\u6761\u4EF6"}),(0,t.jsx)("div",{className:"".concat(y,"-rag-group-content"),children:ne})]}):null,n.list.length?(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"".concat(y,"-rag-group-title"),children:"Output"}),n.list.map(function(K,me){return(0,t.jsx)(w,{item:K},me)})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"".concat(y,"-rag-group-title"),children:"Output"}),(0,t.jsxs)(j.Z,{align:"center",justify:"center",gap:8,className:"".concat(y,"-rag-empty-placeholder"),children:[(0,t.jsx)(F.Z,{}),(0,t.jsx)("span",{children:he})]})]})]});return(0,t.jsx)(x.Z,{header:{icon:(0,t.jsx)(g.Z,{}),title:d,description:L},body:{defaultOpen:ie,children:(0,t.jsx)("div",{className:"".concat(y,"-rag-children"),children:Me})}})}},79323:function(on,J,e){"use strict";e.d(J,{Z:function(){return T}});var ee=e(56044),h=e(31382),B=e(40443),x=e(33593),b=e(85893);function T(P){var R=(0,ee.wv)(),F=R.getPrefixCls,g=P.defaultOpen,p=g===void 0?!0:g,D=P.loading,j=D===void 0?!1:D,m=F("operate-card");return(0,b.jsx)(h.Z,{header:{icon:j?(0,b.jsx)(B.Z,{spin:!0}):(0,b.jsx)(x.Z,{}),title:P.title,description:P.subTitle},body:{defaultOpen:j?p:!1,children:(0,b.jsx)(h.Z.LineBody,{children:(0,b.jsx)("div",{className:"".concat(m,"-thinking"),children:P.content})})}},j.toString())}},6874:function(on,J,e){"use strict";e.d(J,{Z:function(){return p}});var ee=e(9783),h=e.n(ee),B=e(56044),x=e(31382),b=e(41775),T=e(77900),P=e(40443),R=e(93967),F=e.n(R),g=e(85893);function p(D){var j=(0,B.wv)(),m=j.getPrefixCls,t=m("operate-card"),C=D.title,w=C===void 0?"Task List":C,i=D.list.filter(function(n){return n.status==="done"}).length;return(0,g.jsx)(x.Z,{header:{icon:(0,g.jsx)(b.Z,{}),title:w,description:"\xB7 ".concat(i?i+" of ":""," ").concat(D.list.length)},body:{defaultOpen:D.defaultOpen,children:(0,g.jsx)("div",{className:"".concat(t,"-todo-list"),children:D.list.map(function(n){return(0,g.jsxs)("div",{className:F()(h()(h()({},"".concat(t,"-todo-list-item"),!0),"".concat(t,"-todo-list-item-").concat(n.status),!0)),children:[(0,g.jsx)("div",{className:"".concat(t,"-todo-list-item-icon"),children:{done:(0,g.jsx)(T.Z,{}),todo:(0,g.jsx)(T.Z,{}),running:(0,g.jsx)(P.Z,{spin:!0})}[n.status]}),(0,g.jsx)("div",{className:"".concat(t,"-todo-list-item-title"),style:{textDecoration:n.status==="done"?"line-through":"none"},children:n.title})]},n.title)})})}})}},85786:function(on,J,e){"use strict";e.d(J,{Z:function(){return t}});var ee=e(5574),h=e.n(ee),B=e(56044),x=e(31382),b=e(97634),T=e(89698),P=e(40443),R=e(78598),F=e(33811),g=e(64057),p=e(4146),D=e(67294),j=e(85893);function m(C){var w=(0,B.wv)(),i=w.getPrefixCls,n=i("operate-card"),_=typeof C.content=="string"?C.content:JSON.stringify(C.content),d=(0,D.useState)(!1),L=h()(d,2),oe=L[0],ie=L[1],f=(0,D.useRef)(null);return(0,j.jsx)("div",{className:"".concat(n,"-tool-call-block"),children:(0,j.jsx)(F.Z,{title:C.title,extra:(0,j.jsx)(g.Z,{size:"small",style:{marginRight:"-6px"},icon:oe?(0,j.jsx)(b.Z,{}):(0,j.jsx)(T.Z,{}),bordered:!1,onClick:function(){clearTimeout(f.current),navigator.clipboard.writeText(_),ie(!0),f.current=setTimeout(function(){ie(!1)},2e3)}}),children:(0,j.jsx)(p.ZP,{language:"json",value:_,readOnly:!0})})})}function t(C){var w=C.title,i=w===void 0?"Call Tool":w,n=C.subTitle,_=C.defaultOpen,d=_===void 0?!0:_,L=C.loading,oe=L===void 0?!1:L;return(0,j.jsx)(x.Z,{header:{icon:oe?(0,j.jsx)(P.Z,{spin:!0}):(0,j.jsx)(R.Z,{}),title:i,description:n},body:{defaultOpen:d,children:(0,j.jsxs)(x.Z.LineBody,{children:[(0,j.jsx)(m,{title:"Input",content:C.input}),(0,j.jsx)(m,{title:"Output",content:C.output})]})}})}},69610:function(on,J,e){"use strict";e.d(J,{Z:function(){return F}});var ee=e(9783),h=e.n(ee),B=e(56044),x=e(31382),b=e(9229),T=e(93967),P=e.n(T),R=e(85893);function F(g){var p=(0,B.wv)(),D=p.getPrefixCls,j=D("operate-card"),m=g.title,t=m===void 0?"\u8054\u7F51\u641C\u7D22":m,C=g.subTitle;return(0,R.jsx)(x.Z,{header:{icon:(0,R.jsx)(b.Z,{}),title:t,description:C},body:{defaultOpen:!0,children:(0,R.jsx)(x.Z.LineBody,{children:g.list.map(function(w){return(0,R.jsxs)("div",{className:P()(h()({},"".concat(j,"-web-search-item"),!0)),onClick:function(){window.open(w.link,"_blank")},children:[(0,R.jsx)("img",{className:"".concat(j,"-web-search-item-icon"),src:w.icon,alt:w.title}),(0,R.jsx)("div",{className:"".concat(j,"-web-search-item-title"),children:w.title}),w.subTitle&&(0,R.jsx)("div",{className:"".concat(j,"-web-search-item-subTitle"),children:w.subTitle})]},w.title)})})}})}},56809:function(on,J,e){"use strict";e.d(J,{B4:function(){return h.Z},BI:function(){return ee.Z},Sn:function(){return b.Z},fz:function(){return x.Z},x4:function(){return B.Z}});var ee=e(79323),h=e(6874),B=e(85786),x=e(69610),b=e(85762)},83962:function(on,J,e){"use strict";e.d(J,{HJ:function(){return R},NR:function(){return T},xy:function(){return P}});var ee=e(97857),h=e.n(ee),B=e(67294),x=e(24963),b=e(85893),T=(0,B.createContext)(void 0),P=function(g){return(0,b.jsx)(T.Provider,{value:g.cardConfig,children:g.children})},R=function(){var g=B.useContext(T);return B.useMemo(function(){return h()(h()({},x),g)},[g])}},92049:function(on,J,e){"use strict";e.d(J,{R:function(){return x},bN:function(){return b}});var ee=e(67294),h=e(85893),B=(0,ee.createContext)(void 0),x=function(P){return(0,h.jsx)(B.Provider,{value:P,children:P.children})},b=function(){var P=ee.useContext(B);return P||{}}},56044:function(on,J,e){"use strict";e.d(J,{wv:function(){return P}});var ee=e(21766),h=e(67294),B=e(83962),x=e(92049),b=e(85893),T=function(F){var g=F.children,p=F.cardConfig,D=F.markdown;return(0,b.jsx)(x.R,{markdown:D,children:(0,b.jsx)(B.xy,{cardConfig:p,children:g})})};function P(){var R=h.useContext(ee.ZP.ConfigContext);return R}J.ZP=T},44294:function(on,J,e){"use strict";e.d(J,{Z:function(){return j},a:function(){return g}});var ee=e(97857),h=e.n(ee),B=e(24772),x=e(83622),b=e(93967),T=e.n(b),P=e(29372),R=e(67294),F=e(85893),g=R.createContext({}),p=function(){return{height:0}},D=function(t){return{height:t.scrollHeight}};function j(m){var t=m.title,C=m.onOpenChange,w=m.open,i=m.children,n=m.className,_=m.style,d=m.classNames,L=d===void 0?{}:d,oe=m.styles,ie=oe===void 0?{}:oe,f=m.closable,he=m.forceRender,Q=R.useContext(g),X=Q.prefixCls,ne="".concat(X,"-header");return(0,F.jsx)(P.ZP,{motionEnter:!0,motionLeave:!0,motionName:"".concat(ne,"-motion"),leavedClassName:"".concat(ne,"-motion-hidden"),onEnterStart:p,onEnterActive:D,onLeaveStart:D,onLeaveActive:p,visible:w,forceRender:he,children:function(Pe){var y=Pe.className,Me=Pe.style;return(0,F.jsxs)("div",{className:T()(ne,y,n),style:h()(h()({},Me),_),children:[(f!==!1||t)&&(0,F.jsxs)("div",{className:T()("".concat(ne,"-header"),L.header),style:h()({},ie.header),children:[(0,F.jsx)("div",{className:"".concat(ne,"-title"),children:t}),f!==!1&&(0,F.jsx)("div",{className:"".concat(ne,"-close"),children:(0,F.jsx)(x.ZP,{type:"text",icon:(0,F.jsx)(B.Z,{}),size:"small",onClick:function(){C==null||C(!w)}})})]}),i&&(0,F.jsx)("div",{className:T()("".concat(ne,"-content"),L.content),style:h()({},ie.content),children:i})]})}})}},66672:function(on,J,e){"use strict";e.d(J,{Z:function(){return E}});var ee=e(19632),h=e.n(ee),B=e(97857),x=e.n(B),b=e(9783),T=e.n(b),P=e(5574),R=e.n(P),F=e(13769),g=e.n(F),p=e(48045),D=e(86250),j=e(93967),m=e.n(j),t=e(56790),C=e(30339),w=e(94787),i=e(67294),n=e(11154),_=e(83204);function d(a,O){return(0,i.useImperativeHandle)(a,function(){var A=O(),U=A.nativeElement;return new Proxy(U,{get:function(se,H){return A[H]?A[H]:Reflect.get(se,H)}})})}var L=e(56044),oe=e(44294),ie=e(64057),f=e(85893),he=["className","action","onClick"],Q=i.createContext(null);function X(a){var O=a.className,A=a.action,U=a.onClick,re=g()(a,he),se=i.useContext(Q),H=se.prefixCls,fe=se.disabled,ve=se[A],V=fe||re.disabled||se["".concat(A,"Disabled")]||!1;return(0,f.jsx)(ie.Z,x()(x()({bordered:!1,disabled:V},re),{},{onClick:function(an){V||(ve&&ve(),U&&U(an))},className:m()(H,O,T()({},"".concat(H,"-disabled"),V))}))}var ne=i.forwardRef(X),ue=e(69291);function Pe(a,O){return(0,f.jsx)(ne,x()(x()({icon:(0,f.jsx)(ue.Z,{})},a),{},{action:"onClear",ref:O}))}var y=i.forwardRef(Pe),Me=(0,i.memo)(function(a){var O=a.className;return(0,f.jsxs)("svg",{color:"currentColor",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:O,children:[(0,f.jsx)("title",{children:"Stop Loading"}),(0,f.jsx)("rect",{fill:"currentColor",height:"250",rx:"24",ry:"24",width:"250",x:"375",y:"375"})]})}),K=Me,me=e(67055),ae=["className","loading"];function Le(a,O){var A=i.useContext(Q),U=A.prefixCls,re=a.className,se=a.loading,H=g()(a,ae),fe=(0,f.jsx)(ne,x()(x()({icon:(0,f.jsx)(K,{className:"".concat(U,"-loading-icon")}),type:"primary",variant:"text"},H),{},{className:m()(re,"".concat(U,"-loading-button")),action:"onCancel",ref:O}));return typeof a.loading=="string"?(0,f.jsx)(me.Z,{title:a.loading,children:fe}):fe}var Y=i.forwardRef(Le),_e=e(43103);function De(a,O){return(0,f.jsx)(ne,x()(x()({icon:(0,f.jsx)(_e.Z,{}),type:"primary"},a),{},{action:"onSend",ref:O}))}var Qe=i.forwardRef(De),Xe=e(36763),Ne=e(21474),sn=1e3,nn=4,bn=140,I=bn/2,G=250,Ke=500,We=.8;function Ue(a){var O=a.className;return(0,f.jsxs)("svg",{color:"currentColor",viewBox:"0 0 ".concat(sn," ").concat(sn),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:O,children:[(0,f.jsx)("title",{children:"Speech Recording"}),Array.from({length:nn}).map(function(A,U){var re=(sn-bn*nn)/(nn-1),se=U*(re+bn),H=sn/2-G/2,fe=sn/2-Ke/2;return(0,f.jsxs)("rect",{fill:"currentColor",rx:I,ry:I,height:G,width:bn,x:se,y:H,children:[(0,f.jsx)("animate",{attributeName:"height",values:"".concat(G,"; ").concat(Ke,"; ").concat(G),keyTimes:"0; 0.5; 1",dur:"".concat(We,"s"),begin:"".concat(We/nn*U,"s"),repeatCount:"indefinite"}),(0,f.jsx)("animate",{attributeName:"y",values:"".concat(H,"; ").concat(fe,"; ").concat(H),keyTimes:"0; 0.5; 1",dur:"".concat(We,"s"),begin:"".concat(We/nn*U,"s"),repeatCount:"indefinite"})]},U)})]})}function ke(a,O){var A=i.useContext(Q),U=A.speechRecording,re=A.onSpeechDisabled,se=A.prefixCls,H=null;return U?H=(0,f.jsx)(Ue,{className:"".concat(se,"-recording-icon")}):re?H=(0,f.jsx)(Xe.Z,{}):H=(0,f.jsx)(Ne.Z,{}),(0,f.jsx)(ne,x()(x()({icon:H,variant:"text"},a),{},{action:"onSpeech",ref:O}))}var vn=i.forwardRef(ke),mn=e(68400),qe=e.n(mn),tn=e(9053),gn,Ve=(0,tn.vJ)(gn||(gn=qe()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.colorBgBase},function(a){return a.theme.borderRadiusLG},function(a){return a.theme.colorBorderSecondary},function(a){return a.theme.motionDurationSlow},function(a){return a.theme.lineWidth},function(a){return a.theme.colorPrimaryHover},function(a){return a.theme.lineWidth},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.colorBgContainerDisabled},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.paddingXS},function(a){return a.theme.colorTextTertiary},function(a){return"var(--".concat(a.theme.prefixCls,"-color-fill-disable)")},function(a){return a.theme.controlHeight},function(a){return a.theme.controlHeight},function(a){return a.theme.prefixCls}),Re=Ve,r=e(52677),we=e.n(r),ye;!ye&&typeof window!="undefined"&&(ye=window.SpeechRecognition||window.webkitSpeechRecognition);function Ze(a,O){var A=(0,t.zX)(a),U=i.useMemo(function(){return we()(O)==="object"?[O.recording,O.onRecordingChange,typeof O.recording=="boolean"]:[void 0,void 0,!1]},[O]),re=R()(U,3),se=re[0],H=re[1],fe=re[2],ve=i.useState(null),V=R()(ve,2),be=V[0],an=V[1];i.useEffect(function(){if(typeof navigator!="undefined"&&"permissions"in navigator){var en=null;return navigator.permissions.query({name:"microphone"}).then(function(En){an(En.state),En.onchange=function(){an(this.state)},en=En}),function(){en&&(en.onchange=null)}}},[]);var Cn=ye&&be!=="denied",yn=i.useRef(null),He=(0,t.C8)(!1,{value:se}),$e=R()(He,2),z=$e[0],Ge=$e[1],rn=i.useRef(!1),cn=function(){if(Cn&&!yn.current){var En=new ye;En.onstart=function(){Ge(!0)},En.onend=function(){Ge(!1)},En.onresult=function(Ie){if(!rn.current){var Se,Ye=(Se=Ie.results)===null||Se===void 0||(Se=Se[0])===null||Se===void 0||(Se=Se[0])===null||Se===void 0?void 0:Se.transcript;A(Ye)}rn.current=!1},yn.current=En}},An=(0,t.zX)(function(en){en&&!z||(rn.current=en,fe?H==null||H(!z):(cn(),yn.current&&(z?(yn.current.stop(),H==null||H(!1)):(yn.current.start(),H==null||H(!0)))))});return[Cn,An,z]}var Te=e(89102),un,dn=(0,tn.vJ)(un||(un=qe()([`
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

`])),function(a){return a.theme.prefixCls},function(a){return a.theme.borderRadius},function(a){return a.theme.colorBorderSecondary},function(a){return a.theme.colorTextSecondary},function(a){return a.theme.colorPrimary},function(a){return a.theme.colorPrimary},function(a){return a.theme.colorBorderSecondary},function(a){return a.theme.borderRadiusLG},function(a){return a.theme.borderRadiusLG},function(a){return a.theme.colorFillTertiary},function(a){return a.theme.colorTextSecondary});function ln(a){var O=(0,L.wv)(),A=O.getPrefixCls,U=A("sender-mode-select"),re=a.value,se=a.onChange,H=(0,i.useMemo)(function(){var ve=a.options.find(function(V){return V.value===re})||{};return ve},[a.value]),fe=(0,f.jsx)(Te.Z,{onClick:function(){return se(void 0)},style:{cursor:"pointer",fontSize:20}});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(dn,{}),(0,f.jsxs)("div",{className:U,style:a.style,children:[(0,f.jsx)("div",{className:"".concat(U,"-options ").concat(re?"".concat(U,"-hide"):""),children:a.options.map(function(ve){var V=(0,f.jsx)(hn,x()({onClick:function(){return se(ve.value)},className:"".concat(U,"-option")},ve),ve.value);return V})}),(0,f.jsx)("div",{className:"".concat(U,"-display ").concat(re?"":"".concat(U,"-hide")),children:(0,f.jsxs)("div",{className:"".concat(U,"-display-flex"),children:[(0,f.jsx)(hn,x()(x()({},H),{},{label:(H==null?void 0:H.selectedLabel)||(H==null?void 0:H.label),className:"".concat(U,"-display-label")})),a.desc&&(0,f.jsx)("div",{className:"".concat(U,"-display-desc"),children:a.desc}),a.closeTip?(0,f.jsx)(me.Z,{title:a.closeTip,children:fe}):fe]})})]})]})}function hn(a){var O=(0,f.jsxs)("div",{className:a.className,onClick:a.onClick,children:[a.icon,a.label]});return a.tooltip?(0,f.jsx)(me.Z,{title:a.tooltip,placement:"topLeft",children:O}):O}var fn=e(85441),l=e(32485),te,de=(0,tn.vJ)(te||(te=qe()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.colorBorderSecondary},function(a){return a.theme.borderRadiusLG},function(a){return a.theme.borderRadiusLG},function(a){return a.theme.colorFillTertiary});function M(a){var O=a.leftChildren,A=a.rightChildren,U=a.children,re=(0,L.wv)().getPrefixCls("sender-before-ui-container"),se=(0,i.useMemo)(function(){return O?(0,f.jsx)("div",{className:"".concat(re,"-left"),children:O}):null},[O]),H=(0,i.useMemo)(function(){return A?(0,f.jsx)("div",{className:"".concat(re,"-right"),children:A}):null},[A]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(de,{}),(0,f.jsx)("div",{className:re,children:(0,f.jsx)("div",{className:"".concat(re,"-content"),children:(0,f.jsx)("div",{className:"".concat(re,"-content-children"),children:U||(0,f.jsxs)(f.Fragment,{children:[se,H]})})})})]})}var $=["styles","classNames","className","rootClassName","style","defaultValue","value","readOnly","enableFocusExpand","sendDisabled","submitType","onSubmit","loading","onCancel","onChange","onFocus","onBlur","actions","onKeyPress","onKeyDown","disabled","header","onPaste","allowSpeech","onPasteFile","components","initialRows","scalable"];function N(a,O,A){return(0,w.Z)(a,O)||A}var q=i.forwardRef(function(a,O){var A=a,U=A.styles,re=U===void 0?{}:U,se=A.classNames,H=se===void 0?{}:se,fe=A.className,ve=A.rootClassName,V=A.style,be=A.defaultValue,an=A.value,Cn=A.readOnly,yn=A.enableFocusExpand,He=yn===void 0?!1:yn,$e=A.sendDisabled,z=$e===void 0?!1:$e,Ge=A.submitType,rn=Ge===void 0?"enter":Ge,cn=A.onSubmit,An=A.loading,en=A.onCancel,En=A.onChange,Ie=A.onFocus,Se=A.onBlur,Ye=A.actions,jn=A.onKeyPress,_n=A.onKeyDown,ze=A.disabled,Be=A.header,pn=A.onPaste,xn=A.allowSpeech,Nn=A.onPasteFile,Pn=A.components,Dn=A.initialRows,Wn=Dn===void 0?2:Dn,In=A.scalable,qn=g()(A,$),Mn=In,kn=(0,i.useState)(Mn?!1:void 0),Un=R()(kn,2),Ln=Un[0],Zn=Un[1],Fn=(0,i.useState)(!1),On=R()(Fn,2),Tn=On[0],Rn=On[1],Qn=i.useMemo(function(){return Ln?{maxRows:10,minRows:10}:{maxRows:10,minRows:Wn}},[Mn,Ln]),Jn=(0,L.wv)(),lt=Jn.direction,ct=Jn.getPrefixCls,wn=ct("sender"),Hn=i.useRef(null),nt=i.useRef(null);d(O,function(){var c,S;return{nativeElement:Hn.current,focus:(c=nt.current)===null||c===void 0?void 0:c.focus,blur:(S=nt.current)===null||S===void 0?void 0:S.blur}}),(0,n.Z)(Hn,{onFocus:function(S){Rn(!0),Ie==null||Ie()},onBlur:function(){Hn.current&&!Hn.current.contains(document.activeElement)&&(Rn(!1),Se==null||Se())}}),(0,_.Z)("click",function(c){Rn(!0),Ie==null||Ie()},{target:Hn});var ut="".concat(wn,"-input"),gt=m()(wn,fe,ve,T()(T()(T()(T()({},"".concat(wn,"-rtl"),lt==="rtl"),"".concat(wn,"-disabled"),ze),"".concat(wn,"-focus"),Tn&&He),"".concat(wn,"-blur"),!Tn&&He)),pt="".concat(wn,"-actions-btn"),tt="".concat(wn,"-actions-list"),xt=(0,t.C8)(be||"",{value:an}),dt=R()(xt,2),Xn=dt[0],ft=dt[1],at=function(S,k){ft(S),En&&En(S,k)},Ct=Ze(function(c){at("".concat(Xn," ").concat(c))},xn),rt=R()(Ct,3),yt=rt[0],vt=rt[1],bt=rt[2],jt=N(Pn,["input"],p.Z.TextArea),Et=(0,C.Z)(qn,{attr:!0,aria:!0,data:!0}),St=x()(x()({},Et),{},{ref:nt}),ot=function(){!s.onSendDisabled&&cn&&!An&&cn(Xn)},Pt=function(){at("")},st=i.useRef(!1),At=function(){st.current=!0},Tt=function(){st.current=!1},Mt=function(S){var k=S.key==="Enter"&&!st.current;switch(rn){case"enter":k&&!S.shiftKey&&(S.preventDefault(),ot());break;case"shiftEnter":k&&S.shiftKey&&(S.preventDefault(),ot());break}jn&&jn(S)},Lt=function(S){var k;if(!Nn){pn==null||pn(S);return}var W=Array.from(((k=S.clipboardData)===null||k===void 0?void 0:k.files)||[]);if(W.length===0){var ce,le=Array.from(((ce=S.clipboardData)===null||ce===void 0?void 0:ce.items)||[]);W=le.filter(function(Z){return Z.kind==="file"}).map(function(Z){return Z.getAsFile()}).filter(function(Z){return Z!==null})}W.length>0?(W.forEach(function(Z){return Nn(Z)}),S.preventDefault()):pn==null||pn(S)},Rt=function(S){var k,W;S.target!==((k=Hn.current)===null||k===void 0?void 0:k.querySelector(".".concat(ut)))&&S.preventDefault(),(W=nt.current)===null||W===void 0||W.focus()},o=i.useMemo(function(){var c=Array.isArray(a.prefix)?h()(a.prefix):[a.prefix];return Mn&&c.push((0,f.jsx)(ie.Z,{onClick:function(){return Zn(!Ln)},bordered:!1,icon:Ln?(0,f.jsx)(fn.Z,{}):(0,f.jsx)(l.Z,{})},"zoom")),c},[a.prefix,Mn,Ln,xn]),u=(0,f.jsx)(D.Z,{className:"".concat(tt,"-presets"),children:An?(0,f.jsx)(Y,{loading:An}):(0,f.jsx)(Qe,{})});typeof Ye=="function"?u=Ye(u,{components:{SendButton:Qe,ClearButton:y,LoadingButton:Y}}):Ye&&(u=Ye);var s={prefixCls:pt,onSend:ot,onSendDisabled:!Xn||!Xn.trim()||z,onClear:Pt,onClearDisabled:!Xn,onCancel:en,onCancelDisabled:!An,onSpeech:function(){return vt(!1)},onSpeechDisabled:!yt,speechRecording:bt,disabled:!!ze};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Re,{}),(0,f.jsxs)("div",{ref:Hn,className:gt,style:V,children:[Be&&(0,f.jsx)(oe.a.Provider,{value:{prefixCls:wn,focus:Tn,enableFocusExpand:He},children:Be}),(0,f.jsxs)("div",{className:"".concat(wn,"-content"),children:[(0,f.jsx)(jt,x()(x()({},St),{},{disabled:!!ze,style:re.input,className:m()(ut,H.input),autoSize:Qn,value:Xn.slice(0,a.maxLength||Number.MAX_SAFE_INTEGER),onChange:function(S){at(S.target.value,S),vt(!0)},onPressEnter:Mt,onCompositionStart:At,onCompositionEnd:Tt,onKeyDown:_n,onPaste:Lt,variant:"borderless",readOnly:Cn})),(0,f.jsxs)("div",{className:"".concat(wn,"-content-bottom"),children:[o.length>0&&(0,f.jsx)("div",{className:m()("".concat(wn,"-prefix"),H.prefix),style:re.prefix,children:(0,f.jsxs)(D.Z,{gap:8,children:[xn&&(0,f.jsx)(Q.Provider,{value:s,children:(0,f.jsx)(vn,{})}),o]})}),(0,f.jsxs)("div",{className:m()(tt,H.actions),style:re.actions,children:[a.maxLength?(0,f.jsxs)("div",{className:"".concat(tt,"-length"),children:[Xn.length,"/",a.maxLength]}):null,(0,f.jsx)(Q.Provider,{value:s,children:u})]})]})]})]})]})}),v=q;v.Header=oe.Z,v.ModeSelect=ln,v.BeforeUIContainer=M;var E=v},70770:function(on,J,e){"use strict";e.d(J,{Z:function(){return w}});var ee=e(89034),h=e(36674),B=e(9343),x=e(48095),b=e(97634),T=e(56044),P=e(68400),R=e.n(P),F=e(9053),g,p=(0,F.vJ)(g||(g=R()([`
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
`])),function(i){return i.theme.prefixCls},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorSuccessBg},function(i){return i.theme.prefixCls},function(i){return i.theme.colorSuccess},function(i){return i.theme.colorErrorBg},function(i){return i.theme.prefixCls},function(i){return i.theme.colorError},function(i){return i.theme.colorWarningBg},function(i){return i.theme.prefixCls},function(i){return i.theme.colorWarning},function(i){return i.theme.colorFillTertiary},function(i){return i.theme.prefixCls},function(i){return i.theme.colorInfo},function(i){return i.theme.colorText},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorBgBase},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorBgBase},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorText}),D=e(93967),j=e.n(D),m=e(21403),t=e(85893);function C(i){var n=(0,T.wv)(),_=n.getPrefixCls,d=_("status-card"),L=i.icon||{success:(0,t.jsx)(ee.Z,{}),error:(0,t.jsx)(h.Z,{}),warning:(0,t.jsx)(B.Z,{}),info:(0,t.jsx)(x.Z,{})}[i.status];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p,{}),(0,t.jsxs)("div",{className:j()(d,"".concat(d,"-").concat(i.status)),children:[(0,t.jsxs)("div",{className:"".concat(d,"-header"),children:[(0,t.jsxs)("div",{className:"".concat(d,"-header-top"),children:[(0,t.jsx)("div",{className:"".concat(d,"-header-icon"),children:L}),(0,t.jsx)("div",{className:"".concat(d,"-header-title"),children:i.title})]}),i.description&&(0,t.jsx)("div",{className:"".concat(d,"-header-description"),children:i.description})]}),i.children&&(0,t.jsx)("div",{className:"".concat(d,"-body"),children:i.children})]})]})}C.HITL=function(i){var n=i.title,_=n===void 0?"\u9700\u8981\u7528\u6237\u4EBA\u5DE5\u5E72\u9884":n,d=i.description,L=i.waitButtonText,oe=L===void 0?"\u6211\u5DF2\u5B8C\u6210\uFF0C\u7EE7\u7EED\u4EFB\u52A1":L,ie=i.doneButtonText,f=ie===void 0?"\u7528\u6237\u5DF2\u786E\u8BA4":ie,he=(0,T.wv)(),Q=he.getPrefixCls,X=Q("status-card"),ne=i.actions!==void 0?i.actions:i.done?(0,t.jsx)(m.Z,{onClick:i.onDone,type:"primary",disabled:!0,icon:(0,t.jsx)(b.Z,{}),children:f}):(0,t.jsx)(m.Z,{onClick:i.onDone,type:"primary",children:oe});return(0,t.jsx)(C,{status:i.done?"success":"info",title:_,children:d||ne?(0,t.jsxs)("div",{className:"".concat(X,"-HITL"),children:[d&&(0,t.jsx)("div",{className:"".concat(X,"-HITL-desc"),children:d}),(0,t.jsx)("div",{className:"".concat(X,"-HITL-button"),children:ne})]}):null})},C.Statistic=function(i){var n=(0,T.wv)(),_=n.getPrefixCls,d=_("status-card");return(0,t.jsx)("div",{className:"".concat(d,"-statistic"),children:i.values.map(function(L){return(0,t.jsxs)("div",{className:"".concat(d,"-statistic-item"),children:[(0,t.jsx)("div",{className:"".concat(d,"-statistic-item-title"),children:L.title}),(0,t.jsx)("div",{className:"".concat(d,"-statistic-item-value"),children:L.value})]})})})};var w=C},7354:function(on,J,e){"use strict";var ee=e(15009),h=e.n(ee),B=e(9783),x=e.n(B),b=e(97857),T=e.n(b),P=e(77262),R=e.n(P),F=e(93938),g=e.n(F),p=`

`,D=`
`,j=":",m=function(n){return(n!=null?n:"").trim()!==""};function t(){var i="";return new TransformStream({transform:function(_,d){i+=_;var L=i.split(p);L.slice(0,-1).forEach(function(oe){m(oe)&&d.enqueue(oe)}),i=L[L.length-1]},flush:function(_){m(i)&&_.enqueue(i)}})}function C(){return new TransformStream({transform:function(n,_){var d=n.split(D),L=d.reduce(function(oe,ie){var f=ie.indexOf(j);if(f===-1)throw new Error('The key-value separator "'.concat(j,'" is not found in the sse line chunk!'));var he=ie.slice(0,f);if(!m(he))return oe;var Q=ie.slice(f+1);return T()(T()({},oe),{},x()({},he,Q))},{});Object.keys(L).length!==0&&_.enqueue(L)}})}function w(i,n){var _=i.readableStream,d=i.transformStream;if(!(_ instanceof ReadableStream))throw new Error("The options.readableStream must be an instance of ReadableStream.");var L=new TextDecoderStream,oe=d?_.pipeThrough(L).pipeThrough(d):_.pipeThrough(L).pipeThrough(t()).pipeThrough(C());return oe[Symbol.asyncIterator]=g()(h()().mark(function ie(){var f,he,Q,X;return h()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:f=this.getReader();case 1:return ue.next=4,R()(f.read());case 4:if(he=ue.sent,Q=he.done,X=he.value,!Q){ue.next=9;break}return ue.abrupt("break",15);case 9:if(X){ue.next=11;break}return ue.abrupt("continue",1);case 11:return ue.next=13,n!=null&&n.openaiCompatible?T()(T()({},X),{},{data:X.data.slice(1)}):X;case 13:ue.next=1;break;case 15:case"end":return ue.stop()}},ie,this)})),oe}J.Z=w},32116:function(on,J,e){"use strict";e.d(J,{Z:function(){return ee}});function ee(h){return new Promise(function(B){return setTimeout(B,h)})}},66366:function(on,J,e){"use strict";e.d(J,{Z:function(){return h}});var ee={i8:"1.1.51"},h=ee.i8},57657:function(on,J,e){"use strict";e.r(J);var ee=e(5574),h=e.n(ee),B=e(9053),x=e(67294),b=e(85893),T=function(){var F=(0,x.useState)({x:0,y:0}),g=h()(F,2),p=g[0],D=g[1],j=(0,x.useState)(!1),m=h()(j,2),t=m[0],C=m[1],w=(0,x.useRef)(null),i=P(),n=i.styles,_=i.cx;(0,x.useEffect)(function(){var Q=function(ne){if(w.current){var ue=w.current.getBoundingClientRect();D({x:ne.clientX-ue.left,y:ne.clientY-ue.top})}};return window.addEventListener("mousemove",Q),function(){return window.removeEventListener("mousemove",Q)}},[]),(0,x.useEffect)(function(){var Q=setInterval(function(){C(!0),setTimeout(function(){return C(!1)},150)},5e3);return function(){return clearInterval(Q)}},[]);var d=function(){var X=32,ne=32,ue=p.x-X,Pe=p.y-ne,y=6,Me=6,K=Math.sqrt(ue*ue+Pe*Pe),me=50;if(K===0)return{x:0,y:0};var ae=Math.min(K/me,1),Le=ue/K*y*ae,Y=Pe/K*Me*ae;return{x:Math.max(-y,Math.min(y,Le)),y:Math.max(-Me,Math.min(Me,Y))}},L=function(X){var ne=32,ue=p.x-ne,Pe=400;if(Math.abs(ue)<Pe)return 1;var y=Math.abs(ue)-Pe,Me=32-Pe,K=Math.min(y/Me,1);return ue>Pe?X?1-K*.5:1:ue<-Pe?X?1:1-K*.5:1},oe=d(),ie=d(),f=L(!0),he=L(!1);return(0,b.jsxs)("div",{ref:w,className:n.container,children:[(0,b.jsx)("div",{className:_(n.eye,n.leftEye,t?n.blinkingEye:""),style:{transform:"translate(".concat(oe.x,"px, ").concat(oe.y,"px) ").concat(t?"scaleY(0.1)":"scaleY(".concat(f,")"))}}),(0,b.jsx)("div",{className:_(n.eye,n.rightEye,t?n.blinkingEye:""),style:{transform:"translate(".concat(ie.x,"px, ").concat(ie.y,"px) ").concat(t?"scaleY(0.1)":"scaleY(".concat(he,")"))}})]})};J.default=T;var P=(0,B.kc)(function(R){var F=R.css,g=R.token;return{container:{width:64,height:64,backgroundColor:"black",borderRadius:12,position:"relative",cursor:"pointer",overflow:"hidden",boxShadow:"15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)"},eye:{width:6,height:12,backgroundColor:"white",borderRadius:99,position:"absolute",top:16,transition:"transform 0.1s ease-out"},leftEye:{left:22},rightEye:{left:36},blinkingEye:{transition:"transform 0.05s ease-out"}}})},31295:function(on,J,e){"use strict";e.d(J,{Z:function(){return F}});var ee=e(68400),h=e.n(ee),B=e(67294),x=e(9053),b=e(56044),T=e(85893),P,R=(0,x.vJ)(P||(P=h()([`
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
`])),function(g){return g.theme.prefixCls},function(g){return g.theme.colorText},function(g){return g.theme.colorTextSecondary});function F(g){var p=(0,b.wv)(),D=p.getPrefixCls,j=D("welcome"),m=typeof g.logo=="string"?(0,T.jsx)("img",{className:j+"-logo",src:g.logo}):g.logo;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(R,{}),(0,T.jsxs)("div",{className:j,style:g.style,children:[m,(0,T.jsxs)("div",{children:[(0,T.jsx)("div",{className:j+"-title",children:g.title}),(0,T.jsx)("div",{className:j+"-desc",children:g.desc})]})]})]})}},43601:function(on,J,e){"use strict";e.r(J),e.d(J,{AIGC:function(){return me.Z},Accordion:function(){return n.Z},AgentScopeRuntimeWebUI:function(){return t.Z},AssetsPreview:function(){return ae.Z},Attachments:function(){return d.Z},Bubble:function(){return L.Z},ChatAnywhere:function(){return R.ZP},ChatInput:function(){return ue.Z},ConfigProvider:function(){return ee.ZP},Conversations:function(){return oe.Z},CustomCardsContext:function(){return B.NR},CustomCardsProvider:function(){return B.xy},DeepThink:function(){return _.Z},DeepThinking:function(){return _.Z},DefaultCards:function(){return m},DeviceAction:function(){return ie.Z},Disclaimer:function(){return f.Z},GenerativeUISandbox:function(){return Le.Z},HistoryPanel:function(){return oe.Z},ImageGenerator:function(){return he.Z},Markdown:function(){return K.Z},Mermaid:function(){return Q.Z},OperateCard:function(){return X.Z},Process:function(){return n.Z},Rag:function(){return ne.Sn},Sender:function(){return ue.Z},SparkChatProvider:function(){return x.ZP},StatusCard:function(){return Pe.Z},Stream:function(){return T.Z},Thinking:function(){return ne.BI},TodoList:function(){return ne.B4},ToolCall:function(){return ne.x4},WebSearch:function(){return ne.fz},Welcome:function(){return Me.Z},createCard:function(){return P.L},sleep:function(){return y.Z},useChatAnywhere:function(){return F.TQ},useCustomCardsContext:function(){return B.HJ},useGlobalContext:function(){return b.bN},useInput:function(){return g.G},useMessages:function(){return p.y},useProviderContext:function(){return x.wv},useSessionList:function(){return D.x},uuid:function(){return j.Z},version:function(){return h.Z}});var ee=e(55839),h=e(66366),B=e(83962),x=e(56044),b=e(92049),T=e(7354),P=e(50130),R=e(29041),F=e(76289),g=e(37254),p=e(4421),D=e(61316),j=e(88773),m=e(24963),t=e(5686),C=e(22863),w={};for(var i in C)["default","ConfigProvider","version","CustomCardsContext","CustomCardsProvider","SparkChatProvider","useCustomCardsContext","useGlobalContext","useProviderContext","Stream","createCard","ChatAnywhere","useChatAnywhere","useInput","useMessages","useSessionList","uuid","DefaultCards","AgentScopeRuntimeWebUI","Accordion","Process","DeepThink","DeepThinking","Attachments","Bubble","Conversations","HistoryPanel","DeviceAction","Disclaimer","ImageGenerator","Mermaid","OperateCard","ChatInput","Sender","StatusCard","sleep","Welcome","Markdown","AIGC","AssetsPreview","GenerativeUISandbox"].indexOf(i)<0&&(w[i]=function(Y){return C[Y]}.bind(0,i));e.d(J,w);var n=e(487),_=e(14082),d=e(36417),L=e(39916),oe=e(9368),ie=e(55031),f=e(10325),he=e(2534),Q=e(12181),X=e(31382),ne=e(56809),ue=e(66672),Pe=e(70770),y=e(32116),Me=e(31295),K=e(66109),me=e(86578),ae=e(34487),Le=e(80115)}}]);
