(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1997],{86578:function(an,X,e){"use strict";e.d(X,{Z:function(){return xe}});var ne=e(97857),h=e.n(ne),R=e(9783),y=e.n(R),b=e(13769),T=e.n(b),S=e(67294),A=e(93967),B=e.n(A),g=e(56044),x=e(66672),P=e(50993),M=e(44294),u=e(12624),n=e(41154),m=e(68400),O=e.n(m),l=e(9053),t,_=(0,l.vJ)(t||(t=O()([`
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
`])),function(ue){return ue.theme.prefixCls},function(ue){return ue.theme.prefixCls},function(ue){return ue.theme.prefixCls},function(ue){return ue.theme.prefixCls},function(ue){return ue.theme.borderRadius},function(ue){return ue.theme.colorBorderSecondary},function(ue){return ue.theme.colorBgBase},function(ue){return ue.theme.colorText}),c=e(85893),L=["className","icon"],ie=n.Z.Dragger,le=function(De){var re=De.className,Ue=De.icon,we=T()(De,L),Ye=(0,g.wv)(),Ge=Ye.getPrefixCls,Ne=Ge("media-upload");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(_,{}),(0,c.jsx)(ie,h()(h()({showUploadList:!1,className:B()(Ne,re)},we),{},{children:(0,c.jsxs)("div",{className:B()("".concat(Ne,"-thumbnail")),children:[(0,c.jsx)("div",{className:B()("".concat(Ne,"-thumbnail-gradient"))}),Ue||(0,c.jsx)(u.Z,{className:B()("".concat(Ne,"-thumbnail-icon"))})]})}))]})},d=le,he,G=(0,l.vJ)(he||(he=O()([`
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
`])),function(ue){return ue.theme.prefixCls},function(ue){return ue.theme.colorText},function(ue){return ue.theme.colorTextTertiary}),Y=function(De){var re=De.className,Ue=De.title,we=De.description,Ye=(0,g.wv)(),Ge=Ye.getPrefixCls,Ne=Ge("media-info"),vn=!!Ue||!!we;return vn?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(G,{}),(0,c.jsxs)("div",{className:B()(Ne,re),children:[Ue&&(0,c.jsx)("div",{className:B()("".concat(Ne,"-title")),children:Ue}),we&&(0,c.jsx)("div",{className:B()("".concat(Ne,"-description")),children:we})]})]}):null},te=Y,ve,Oe=(0,l.vJ)(ve||(ve=O()([`
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
`])),function(ue){return ue.theme.prefixCls},function(ue){return ue.theme.colorBorderSecondary},function(ue){return ue.theme.prefixCls},function(ue){return ue.theme.prefixCls},function(ue){return ue.theme.prefixCls},function(ue){return ue.theme.prefixCls}),C=["title","description","maxCount"],Be=function(De){var re=De.className,Ue=De.onUpload,we=Ue===void 0?[]:Ue,Ye=De.attachedFiles,Ge=Ye===void 0?[[]]:Ye,Ne=De.onFileChange,vn=(0,g.wv)(),$e=vn.getPrefixCls,sn=(0,S.useContext)(M.a),tn=sn.focus,Ze=sn.enableFocusExpand,Ln=$e("aigc-sender-header"),I=(0,S.useMemo)(function(){return Ge.flat().length>0?!0:we.length<=0?!1:!!(tn||!Ze)},[we,Ge,Ze,tn]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(Oe,{}),(0,c.jsx)(x.Z.Header,{closable:!1,open:I,children:(0,c.jsx)("div",{className:B()(Ln,re),tabIndex:0,children:we==null?void 0:we.map(function(ye,Me){var qe=ye.title,ln=ye.description,Qe=ye.maxCount,cn=Qe===void 0?1:Qe,un=T()(ye,C),en=Ge[Me]||[];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d,h()({className:B()(y()({},"".concat(Ln,"-upload-hidden"),en.length>=cn)),maxCount:cn,fileList:en,onChange:function(on){ye.beforeUpload&&on.file.status&&Ne(Me,on.fileList),ye.beforeUpload||Ne(Me,on.fileList)},showUploadList:!1},un),"upload-".concat(Me)),en.length>0&&(0,c.jsx)(P.Z,{items:en,onChange:function(on){return Ne(Me,on.fileList)}},"attachments-".concat(Me)),cn===1&&(0,c.jsx)(te,{title:qe,description:ln},"info-".concat(Me))]})})})})]})},Q=Be,xe={SenderHeader:Q,Info:te,Upload:d}},487:function(an,X,e){"use strict";e.d(X,{Z:function(){return Oe}});var ne=e(9783),h=e.n(ne),R=e(97857),y=e.n(R),b=e(5574),T=e.n(b),S=e(67294),A=e(93967),B=e.n(A),g=e(56044),x=e(85893);function P(C){var Be=(0,g.wv)(),Q=Be.getPrefixCls,xe=Q("accordion-content-body");return(0,x.jsxs)("div",{className:xe,children:[C.headerLeft||C.headerRight?(0,x.jsxs)("div",{className:"".concat(xe,"-header"),children:[C.headerLeft,(0,x.jsx)("div",{style:{flex:1}}),C.headerRight]}):null,(0,x.jsx)("div",{className:"".concat(xe,"-body"),children:C.children})]})}var M=e(9361);function u(C){var Be=(0,g.wv)(),Q=Be.theme,xe=Be.getPrefixCls,ue=(Q==null?void 0:Q.algorithm)===M.Z.darkAlgorithm,De=xe("accordion-soft-light-title");return(0,x.jsx)("div",{className:De,style:ue?{}:{color:"rgba(38, 36, 76, 0.88)"},children:C.children})}var n=e(68400),m=e.n(n),O=e(9053),l,t=(0,O.vJ)(l||(l=m()([`
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
`])),function(C){return C.theme.prefixCls},function(C){return C.theme.colorSuccess},function(C){return C.theme.prefixCls},function(C){return C.theme.colorError},function(C){return C.theme.colorTextSecondary},function(C){return C.theme.colorBgBase},function(C){return C.theme.borderRadiusLG},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.colorBorder},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.colorBgBase},function(C){return C.theme.colorText},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.colorFillTertiary},function(C){return C.theme.prefixCls},function(C){return C.theme.colorTextSecondary},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.colorBorderSecondary},function(C){return C.theme.colorFillTertiary},function(C){return C.theme.colorText},function(C){return C.theme.colorBgBase}),_=e(40443),c=e(89034),L=e(9343),ie=e(36674),le=e(9838),d=e(28387),he=e(16592);function G(C){var Be=(0,g.wv)(),Q=Be.getPrefixCls,xe=Q("accordion-group"),ue=S.useState(C.defaultOpen),De=T()(ue,2),re=De[0],Ue=De[1],we=C.open!==void 0?C.open:re,Ye=C.inline?"close":we?"open":"close",Ge=(0,S.useMemo)(function(){if(C.icon)return C.icon;if(C.status==="generating")return(0,x.jsx)(_.Z,{className:"".concat(xe,"-icon-loading"),spin:!0});if(C.status==="finished")return(0,x.jsx)(c.Z,{className:"".concat(xe,"-icon-success")});if(C.status==="interrupted")return(0,x.jsx)(L.Z,{});if(C.status==="error")return(0,x.jsx)(ie.Z,{className:"".concat(xe,"-icon-error")})},[C.status,C.icon]),Ne=(0,S.useMemo)(function(){return C.steps?C.steps.map(function(vn,$e){var sn=$e===0,tn=$e===C.steps.length-1;return(0,x.jsx)(G,y()(y()({},vn),{},{isFirst:sn,isLast:tn}),vn.id||$e)}):C.children},[C.steps,C.children]);return(0,x.jsxs)("div",{className:B()("".concat(xe),"".concat(xe,"-").concat(Ye)),children:[(0,x.jsxs)("div",{className:B()("".concat(xe,"-header"),"".concat(xe,"-header-").concat(Ye)),onClick:function(){return Ne&&C.open===void 0&&Ue(!re)},children:[Ge?(0,x.jsx)("div",{className:B()("".concat(xe,"-header-icon"),h()(h()(h()({},"".concat(xe,"-header-icon-line"),C.iconLine),"".concat(xe,"-header-icon-first"),C.isFirst),"".concat(xe,"-header-icon-last"),C.isLast&&Ye==="close"||C.level)),children:Ge}):null,(0,x.jsx)("div",{children:C.title}),Ne&&(0,x.jsx)("div",{className:B()("".concat(xe,"-header-arrow")),children:we?(0,x.jsx)(d.Z,{}):(0,x.jsx)(le.Z,{})}),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{style:{flex:1}}),C.rightChildren]})]}),(0,x.jsx)(te,{prefixCls:xe,stateOpen:we,status:Ye,inline:C.inline,content:Ne,bodyStyle:C.bodyStyle,level:C.level})]})}var Y={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function te(C){var Be=(0,S.useRef)(null);if(!C.content)return null;var Q=C.prefixCls,xe=C.stateOpen,ue=C.inline,De=C.bodyStyle,re=C.level;return(0,x.jsx)(he.ZP,{nodeRef:Be,in:xe,timeout:300,children:function(we){return(0,x.jsx)("div",{style:y()(y()(y()({},De),re?{marginTop:0}:{}),{},{transition:"opacity ".concat(300,"ms ease-in-out")},Y[we]),className:B()("".concat(Q,"-body"),"".concat(Q,"-body-").concat(xe?"open":"close"),h()({},"".concat(Q,"-body-inline"),ue)),children:C.content})}})}function ve(C){var Be=C.level,Q=Be===void 0?1:Be,xe=C.isFirst,ue=xe===void 0?!0:xe,De=C.isLast,re=De===void 0?!0:De;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t,{}),(0,x.jsx)(G,y()(y()({},C),{},{level:Q,isFirst:ue,isLast:re}))]})}ve.BodyContent=P,ve.SoftLightTitle=u;var Oe=ve},14082:function(an,X,e){"use strict";e.d(X,{Z:function(){return S}});var ne=e(487),h=e(56044),R=e(9361),y=e(93967),b=e.n(y),T=e(85893);function S(A){var B=(0,h.wv)(),g=B.theme,x=B.getPrefixCls,P=x("accordion-deep-thinking"),M=(g==null?void 0:g.algorithm)===R.Z.darkAlgorithm,u=(0,T.jsx)("img",{style:{display:"block",width:16,height:16,filter:M?"invert(1)  brightness(100%) saturate(0%)":""},src:"https://img.alicdn.com/imgextra/i2/O1CN01QZgWRv1I4JM0BAZ9O_!!6000000000839-54-tps-56-56.apng"}),n=A.title||"Deep thinking";A.loading&&(n+="...");var m=A.loading?(0,T.jsx)(ne.Z.SoftLightTitle,{children:n}):n,O=A.maxHeight?{maxHeight:A.maxHeight,overflowY:"auto"}:{},l=A.defaultOpen!==void 0?A.defaultOpen:A.autoCloseOnFinish&&!A.loading?!1:void 0;return(0,T.jsx)(ne.Z,{title:m,status:A.loading?"generating":"finished",icon:A.loading?u:null,defaultOpen:l,open:A.open,bodyStyle:O,inline:!0,children:(0,T.jsx)("div",{className:b()(P,A.className),children:A.content||"..."})})}},35825:function(an,X,e){"use strict";e.d(X,{Z:function(){return Lt}});var ne=e(97857),h=e.n(ne),R=e(9783),y=e.n(R),b=e(56044),T=e(68400),S=e.n(T),A=e(9053),B,g=(0,A.vJ)(B||(B=S()([`
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
`])),function(s){return s.theme.prefixCls},function(s){return s.theme.colorBgBase},function(s){return s.theme.prefixCls},function(s){return s.theme.colorBgBase},function(s){return s.theme.prefixCls},function(s){return s.theme.colorFillTertiary},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls}),x=e(93967),P=e.n(x),M=e(17909),u=e(59214),n=e(67294),m=e(81759),O=e(49131),l=e(21766),t=e(85893),_=(0,u.createContext)(void 0);function c(s){try{var f=(0,u.useContextSelector)(_,s);return f}catch(i){return{}}}function L(s){var f=s.children,i=(0,M.Z)(),v=(0,n.useMemo)(function(){var ee=s.options.theme||{};return h()(h()({},s.options),{},{theme:h()(h()({},ee),{},{narrowMode:!i.lg||ee.narrowMode})})},[s.options,i.lg]),D=(0,n.useMemo)(function(){var ee=v.theme.colorPrimary,K=v.theme.colorBgBase,W=v.theme.colorTextBase,fe=v.theme.darkMode;if(ee||fe){var Pe=(0,m.Z)((0,O.Z)({primaryHex:ee,bgBaseHex:K,textBaseHex:W,darkMode:fe}));return Pe}},[v.theme.colorPrimary,v.theme.colorBgBase,v.theme.colorTextBase,v.theme.darkMode]),z=(0,t.jsx)(_.Provider,{value:v,children:f});if(D){var J=v.theme.prefix||"agentscope-runtime-webui";return(0,t.jsx)(l.ZP,h()(h()({},D),{},{style:{height:"100%"},prefix:J,prefixCls:J,children:z}))}return z}var ie=null,le=e(15009),d=e.n(le),he=e(99289),G=e.n(he),Y=e(5574),te=e.n(Y),ve=e(66672),Oe=e(10325),C=e(79785),Be=(0,u.createContext)({loading:!1,setLoading:function(){},getLoading:function(){return!1},disabled:!1,setDisabled:function(){},getDisabled:function(){return!1}});function Q(s){var f=(0,C.Z)(!1),i=te()(f,3),v=i[0],D=i[1],z=i[2],J=(0,C.Z)(!1),ee=te()(J,3),K=ee[0],W=ee[1],fe=ee[2];return(0,t.jsx)(Be.Provider,{value:{loading:v,setLoading:D,getLoading:z,disabled:K,setDisabled:W,getDisabled:fe},children:s.children})}var xe=function(f){return(0,u.useContextSelector)(Be,f)},ue=e(13769),De=e.n(ue),re=e(41154),Ue=e(64057),we=e(81644),Ye=e(50993),Ge=["trigger"];function Ne(s,f){var i=(0,C.Z)([]),v=te()(i,3),D=v[0],z=v[1],J=v[2],ee=s||{},K=ee.trigger,W=De()(ee,Ge);if(W!=null&&W.customRequest){var fe=(0,t.jsx)(re.Z,h()(h()({fileList:D,showUploadList:!1,onChange:function(ge){z(ge.fileList)}},W),{},{disabled:f==null?void 0:f.disabled,children:K?n.createElement(K,{disabled:f==null?void 0:f.disabled}):(0,t.jsx)(Ue.Z,{disabled:f==null?void 0:f.disabled,icon:(0,t.jsx)(we.Z,{}),bordered:!1})})),Pe=(0,t.jsx)(ve.Z.Header,{closable:!1,open:(D==null?void 0:D.length)>0,children:(0,t.jsx)(Ye.Z,{items:D,onChange:function(ge){return z(ge.fileList)}})});return{fileList:D,getFileList:J,setFileList:z,uploadIconButton:fe,uploadFileListHeader:Pe}}else return{enabled:!1}}function vn(s){var f=(0,C.Z)(""),i=te()(f,3),v=i[0],D=i[1],z=i[2],J=(0,b.wv)().getPrefixCls("chat-anywhere-input"),ee=c(function(zn){return zn.sender}),K=xe(function(zn){return zn}),W=ee||{},fe=W.placeholder,Pe=fe===void 0?"":fe,be=W.disclaimer,ge=be===void 0?"":be,je=W.maxLength,Re=W.beforeSubmit,Ve=Re===void 0?function(){return Promise.resolve(!0)}:Re,Se=W.beforeUI,Te=W.afterUI,kn=W.scalable,Wn=kn===void 0?!0:kn,Pn=W.attachments,tt=W.prefix,Jn=W.allowSpeech,Yn=Ne(Pn,{disabled:!!K.disabled}),rt=Yn.getFileList,at=Yn.setFileList,Qn=Yn.uploadIconButton,ct=Yn.uploadFileListHeader,mt=(0,n.useCallback)(G()(d()().mark(function zn(){var Mt,ze;return d()().wrap(function(qn){for(;;)switch(qn.prev=qn.next){case 0:return qn.next=2,Ve();case 2:if(Mt=qn.sent,Mt){qn.next=5;break}return qn.abrupt("return");case 5:ze=((rt==null?void 0:rt())||[]).filter(function(Rt){var _t;return(_t=Rt.response)===null||_t===void 0?void 0:_t.url}),s.onSubmit({query:z(),fileList:ze}),D(""),at&&at([]);case 9:case"end":return qn.stop()}},zn)})),[]),ht=(0,n.useCallback)(function(){s.onCancel()},[]);return(0,t.jsxs)("div",{className:J,children:[(0,t.jsxs)("div",{className:"".concat(J,"-wrapper"),children:[Se,(0,t.jsx)(ve.Z,{loading:K.loading,disabled:K.disabled,scalable:Wn,placeholder:Pe,value:v,prefix:(0,t.jsxs)(t.Fragment,{children:[Qn,tt]}),header:ct,onChange:D,maxLength:je,onSubmit:mt,onCancel:ht,allowSpeech:Jn}),Te]}),ge?(0,t.jsx)(Oe.Z,{desc:ge}):(0,t.jsx)("div",{className:"".concat(J,"-blank")})]})}var $e=e(52471),sn=e(19632),tn=e.n(sn),Ze=(0,u.createContext)({messages:[],setMessages:function(){},getMessages:function(){return[]}});function Ln(s){var f=(0,C.Z)([]),i=te()(f,3),v=i[0],D=i[1],z=i[2],J={messages:v,setMessages:D,getMessages:z};return(0,t.jsx)(Ze.Provider,{value:J,children:s.children})}var I=function(){var f=(0,u.useContextSelector)(Ze,function(K){return{setMessages:K.setMessages,getMessages:K.getMessages}}),i=f.setMessages,v=f.getMessages,D=n.useCallback(function(){i([])},[]),z=n.useCallback(function(K){return v().find(function(W){return W.id===K})},[]),J=n.useCallback(function(K){i(function(W){return W.filter(function(fe){return fe.id!==K.id})})},[]),ee=n.useCallback(function(K){i(function(W){var fe=W.findIndex(function(be){return be.id===K.id});if(fe>-1){var Pe=h()(h()({},W[fe]),K);return[].concat(tn()(W.slice(0,fe)),[Pe],tn()(W.slice(fe+1)))}else return[].concat(tn()(W),[K])})},[]);return{getMessages:v,removeAllMessages:D,getMessage:z,removeMessage:J,updateMessage:ee}},ye=e(78234),Me=e(73935),qe=e(2093),ln=(0,u.createContext)({sessions:[],setSessions:function(){},getSessions:function(){return[]},currentSessionId:void 0,setCurrentSessionId:function(){},getCurrentSessionId:function(){return""}});function Qe(s){var f=c(function(be){return be.session}),i=(0,C.Z)([]),v=te()(i,3),D=v[0],z=v[1],J=v[2],ee=(0,C.Z)(void 0),K=te()(ee,3),W=K[0],fe=K[1],Pe=K[2];return(0,ye.Z)(G()(d()().mark(function be(){var ge,je;return d()().wrap(function(Ve){for(;;)switch(Ve.prev=Ve.next){case 0:return Ve.next=2,f.api.getSessionList();case 2:je=Ve.sent,z(je),fe(je==null||(ge=je[0])===null||ge===void 0?void 0:ge.id);case 5:case"end":return Ve.stop()}},be)}))),(0,t.jsx)(ln.Provider,{value:{sessions:D,setSessions:z,getSessions:J,currentSessionId:W,setCurrentSessionId:fe,getCurrentSessionId:Pe},children:s.children})}var cn=function(){var f=(0,u.useContextSelector)(ln,function(ge){return ge}),i=f.setSessions,v=f.getSessions,D=f.getCurrentSessionId,z=f.setCurrentSessionId,J=f.currentSessionId,ee=c(function(ge){return ge.session}),K=(0,u.useContextSelector)(Ze,function(ge){return ge.setMessages}),W=n.useCallback(function(){var ge=G()(d()().mark(function je(Re){var Ve;return d()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return Te.next=2,ee.api.removeSession(Re);case 2:Ve=Te.sent,K([]),z(void 0),i(Ve);case 6:case"end":return Te.stop()}},je)}));return function(je){return ge.apply(this,arguments)}}(),[]),fe=n.useCallback(function(){var ge=G()(d()().mark(function je(Re){var Ve;return d()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:if(!Re.id){Te.next=6;break}return Te.next=3,ee.api.updateSession(Re);case 3:Te.t0=Te.sent,Te.next=9;break;case 6:return Te.next=8,ee.api.createSession(Re);case 8:Te.t0=Te.sent;case 9:return Ve=Te.t0,i(Ve),Te.abrupt("return",Re);case 12:case"end":return Te.stop()}},je)}));return function(je){return ge.apply(this,arguments)}}(),[]),Pe=n.useCallback(function(){var ge=G()(d()().mark(function je(Re){var Ve;return d()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return Te.next=2,fe({name:(Re==null?void 0:Re.name)||"",messages:[]});case 2:return Ve=Te.sent,z(Ve.id),K(Ve.messages),Te.abrupt("return",Ve.id);case 6:case"end":return Te.stop()}},je)}));return function(je){return ge.apply(this,arguments)}}(),[]),be=n.useCallback(function(ge){z(ge)},[]);return(0,qe.Z)(G()(d()().mark(function ge(){var je,Re;return d()().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:return Me.flushSync(function(){K([])}),Se.next=3,ee.api.getSession(J);case 3:if(Se.t2=je=Se.sent,Se.t1=Se.t2===null,Se.t1){Se.next=7;break}Se.t1=je===void 0;case 7:if(!Se.t1){Se.next=11;break}Se.t3=void 0,Se.next=12;break;case 11:Se.t3=je.messages;case 12:if(Se.t0=Se.t3,Se.t0){Se.next=15;break}Se.t0=[];case 15:Re=Se.t0,K(Re.map(function(Te){return h()(h()({},Te),{},{history:!0})}));case 17:case"end":return Se.stop()}},ge)})),[J]),{changeCurrentSessionId:be,getCurrentSessionId:D,getSessions:v,removeSession:W,updateSession:fe,createSession:Pe}},un=e(64437),en=["render"];function gn(s){var f=c(function(K){return K.welcome});if(!f)return null;var i=f.render,v=De()(f,en);if(i)return f.render({greeting:f.greeting,avatar:f.avatar,description:f.description,prompts:f.prompts,onSubmit:s.onSubmit});var D=v.greeting,z=v.avatar,J=v.prompts,ee=v.description;return(0,t.jsx)(un.Z,{greeting:D,avatar:z,description:ee,prompts:J,onClick:function(W){return s.onSubmit({query:W})}})}function on(s){var f=(0,u.useContextSelector)(Be,function(z){return z.loading}),i=(0,u.useContextSelector)(Ze,function(z){return z.messages}),v=(0,b.wv)().getPrefixCls("chat-anywhere-message-list"),D=(0,u.useContextSelector)(ln,function(z){return z.currentSessionId});return i.length===0?(0,t.jsx)("div",{className:P()(v,"".concat(v,"-welcome")),children:(0,t.jsx)(gn,{onSubmit:s.onSubmit})}):(0,t.jsx)($e.Z.List,{smooth:!!f,pagination:!0,classNames:{wrapper:v},items:i},D)}var dn,Je=(0,A.vJ)(dn||(dn=S()([`
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
`])),function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls}),jn=e(32116);function bn(s){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];(0,n.useEffect)(function(){return document.addEventListener(s.type,s.callback),function(){document.removeEventListener(s.type,s.callback)}},f)}var Sn=function(f){var i=f.type,v=f.data;document.dispatchEvent(new CustomEvent(i,{detail:v}))},fn=e(88773),a=e(12444),ke=e.n(a),nn=e(72004),mn=e.n(nn),o=function(s){return s.Created="created",s.InProgress="in_progress",s.Completed="completed",s.Canceled="canceled",s.Failed="failed",s.Rejected="rejected",s.Unknown="unknown",s}({}),ae=function(s){return s.ASSISTANT="assistant",s.USER="user",s.SYSTEM="system",s}({}),j=function(s){return s.MESSAGE="message",s.REASONING="reasoning",s.PLUGIN_CALL="plugin_call",s.PLUGIN_CALL_OUTPUT="plugin_call_output",s.FUNCTION_CALL="function_call",s.FUNCTION_CALL_OUTPUT="function_call_output",s.COMPONENT_CALL="component_call",s.COMPONENT_CALL_OUTPUT="component_call_output",s.MCP_LIST_TOOLS="mcp_list_tools",s.MCP_APPROVAL_REQUEST="mcp_approval_request",s.MCP_APPROVAL_RESPONSE="mcp_approval_response",s.MCP_CALL="mcp_call",s.MCP_CALL_OUTPUT="mcp_call_output",s.HEARTBEAT="heartbeat",s.ERROR="error",s}({}),Z=function(s){return s.TEXT="text",s.DATA="data",s.IMAGE="image",s.AUDIO="audio",s.FILE="file",s.REFUSAL="refusal",s}({}),w=function(){function s(){ke()(this,s),y()(this,"data",void 0)}return mn()(s,[{key:"isImageFile",value:function(i){return i.type.indexOf("image/")===0}},{key:"buildImageContent",value:function(i){var v;return{type:Z.IMAGE,image_url:(v=i.response)===null||v===void 0?void 0:v.url,status:o.Created}}},{key:"buildTextContent",value:function(i){return{type:Z.TEXT,text:i,status:o.Created}}},{key:"buildFileContent",value:function(i){var v;return{type:Z.FILE,file_url:(v=i.response)===null||v===void 0?void 0:v.url,file_id:i.file_id,file_name:i.name,file_size:i.size,status:o.Created}}},{key:"handle",value:function(i){var v,D=this;this.data={input:[]};var z=[this.buildTextContent(i.query)];return(v=i.fileList)!==null&&v!==void 0&&v.length&&i.fileList.forEach(function(J){D.isImageFile(J)?z.push(D.buildImageContent(J)):z.push(D.buildFileContent(J))}),this.data={input:[{role:"user",type:j.MESSAGE,content:z}]},this.data}},{key:"handleApproval",value:function(i){return this.data={input:i},this.data}}],[{key:"getHistoryMessages",value:function(i){return i.reduce(function(v,D){var z;return(z=D.cards)!==null&&z!==void 0&&z.length?v.concat(D.cards[0].data.input||D.cards[0].data.output):v},[])}}]),s}(),U=w;function oe(s){var f=s.currentQARef,i=I(),v=i.updateMessage,D=i.getMessages,z=i.removeMessage,J=(0,n.useCallback)(function(Pe){return f.current.abortController=new AbortController,f.current.request={id:(0,fn.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new U().handle(Pe)}]},Me.flushSync(function(){v(f.current.request)}),f.current.request},[f,v]),ee=(0,n.useCallback)(function(Pe){return f.current.abortController=new AbortController,f.current.request={id:(0,fn.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new U().handleApproval(Pe)}]},Me.flushSync(function(){v(f.current.request)}),f.current.request},[f,v]),K=(0,n.useCallback)(function(){return f.current.response={id:(0,fn.Z)(),role:"assistant",cards:[],msgStatus:"generating"},v(f.current.response),f.current.response},[f,v]),W=(0,n.useCallback)(function(){return U.getHistoryMessages(D())},[D]),fe=(0,n.useCallback)(function(Pe){Me.flushSync(function(){z({id:Pe})})},[z]);return{createRequestMessage:J,createApprovalMessage:ee,createResponseMessage:K,getHistoryMessages:W,updateMessage:v,removeMessageById:fe,getMessages:D}}var pe=e(44987),r=e.n(pe),p=e(7354),E=e(64599),N=e.n(E),H=e(93513),F=function(){function s(f){var i=f.id,v=f.status,D=f.created_at;ke()(this,s),y()(this,"data",void 0),this.data={id:i,output:[],object:"response",status:v||o.Created,created_at:D||Date.now()}}return mn()(s,[{key:"handleResponse",value:function(i){this.data=(0,H.produce)(this.data,function(v){i.output||(i.output=[]),Object.assign(v,i)})}},{key:"handleMessage",value:function(i){this.data=(0,H.produce)(this.data,function(v){v.output||(v.output=[]);var D=v.output.findIndex(function(J){return J.id===i.id});if(D>=0){var z=v.output[D].content;Object.assign(v.output[D],i),(!i.content||i.content.length===0)&&(v.output[D].content=z)}else v.output.push(i)})}},{key:"handleContent",value:function(i){this.data=(0,H.produce)(this.data,function(v){var D=v.output.find(function(J){return J.id===i.msg_id});if(!D){console.warn("Message not found for content:",i.msg_id);return}if(D.content||(D.content=[]),i.delta){var z=D.content[D.content.length-1];z&&z.delta?i.type===Z.TEXT&&z.type===Z.TEXT?z.text+=i.text:i.type===Z.IMAGE?z.image_url=i.image_url:i.type===Z.DATA&&(z.data=i.data):D.content.push(i)}else D.content.length>0?Object.assign(D.content[D.content.length-1],i):D.content.push(i)})}},{key:"handleError",value:function(i){this.data=(0,H.produce)(this.data,function(v){v.status=o.Failed,v.output.push({status:o.Failed,type:j.ERROR,content:[],id:(0,fn.Z)(),role:"assistant",code:i.code,message:typeof i.message=="string"?i.message:JSON.stringify(i.message)})})}},{key:"handle",value:function(i){if(i.object==="response")this.handleResponse(i);else if(i.object==="message"){if(i.type===j.HEARTBEAT)return this.data;this.handleMessage(i)}else i.object==="content"?this.handleContent(i):this.handleError(i);return this.data}},{key:"cancel",value:function(){return this.data=(0,H.produce)(this.data,function(i){s.maybeGenerating(i)&&(i.status=o.Canceled),i.output.forEach(function(v){s.maybeGenerating(v)&&(v.status=o.Canceled,v.content.forEach(function(D){s.maybeGenerating(D)&&(D.status=o.Canceled)}))})}),this.data}}],[{key:"mergeToolMessages",value:function(i){var v=new Map,D=[],z=N()(i),J;try{var ee=function(){var W,fe,Pe=J.value;if(s.maybeToolInput(Pe)&&(W=Pe.content)!==null&&W!==void 0&&W.length){var be=Pe.content[0],ge=be.data.call_id||be.data.name;v.set(ge,be),D.push(Pe)}else if(s.maybeToolOutput(Pe)&&(fe=Pe.content)!==null&&fe!==void 0&&fe.length){var je=Pe.content[0],Re=je.data.call_id||je.data.name,Ve=v.get(Re);Ve&&(D=D.map(function(Se){if(!s.maybeToolInput(Se))return Se;var Te=Se.content[0],kn=Te.data.call_id||Te.data.name;return kn===Re?h()(h()({},Pe),{},{content:[].concat(tn()(Se.content),[je])}):Se}))}else D.push(Pe)};for(z.s();!(J=z.n()).done;)ee()}catch(K){z.e(K)}finally{z.f()}return D}},{key:"maybeToolOutput",value:function(i){return[j.FUNCTION_CALL_OUTPUT,j.PLUGIN_CALL_OUTPUT,j.COMPONENT_CALL_OUTPUT,j.MCP_CALL_OUTPUT].includes(i.type)}},{key:"maybeToolInput",value:function(i){return[j.FUNCTION_CALL,j.PLUGIN_CALL,j.COMPONENT_CALL,j.MCP_CALL].includes(i.type)}},{key:"maybeGenerating",value:function(i){return[o.InProgress,o.Created].includes(i.status)}},{key:"maybeDone",value:function(i){return[o.Completed,o.Canceled,o.Failed].includes(i.status)}}]),s}(),k=F;function q(s){var f=s.currentQARef,i=s.updateMessage,v=s.getCurrentSessionId,D=s.onFinish,z=c(function(W){return W.api}),J=(0,n.useRef)(z);(0,n.useEffect)(function(){J.current=z},[z]);var ee=(0,n.useCallback)(function(){var W=G()(d()().mark(function fe(Pe){var be,ge,je,Re,Ve,Se,Te,kn;return d()().wrap(function(Pn){for(;;)switch(Pn.prev=Pn.next){case 0:be=new k({id:"",status:o.Created,created_at:0}),ge=!1,je=!1,Pn.prev=3,Ve=r()(Pe);case 5:return Pn.next=7,Ve.next();case 7:if(!(ge=!(Se=Pn.sent).done)){Pn.next=17;break}return Te=Se.value,kn=be.handle(Te),f.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:kn}],i(f.current.response),Pn.next=14,(0,jn.Z)(100);case 14:ge=!1,Pn.next=5;break;case 17:Pn.next=23;break;case 19:Pn.prev=19,Pn.t0=Pn.catch(3),je=!0,Re=Pn.t0;case 23:if(Pn.prev=23,Pn.prev=24,!(ge&&Ve.return!=null)){Pn.next=28;break}return Pn.next=28,Ve.return();case 28:if(Pn.prev=28,!je){Pn.next=31;break}throw Re;case 31:return Pn.finish(28);case 32:return Pn.finish(23);case 33:case"end":return Pn.stop()}},fe,null,[[3,19,23,33],[24,,28,32]])}));return function(fe){return W.apply(this,arguments)}}(),[]),K=(0,n.useCallback)(function(){var W=G()(d()().mark(function fe(Pe,be){var ge,je,Re,Ve,Se,Te,kn,Wn,Pn,tt,Jn,Yn,rt,at,Qn,ct,mt,ht,zn;return d()().wrap(function(ze){for(;;)switch(ze.prev=ze.next){case 0:if(je=J.current,Re=je.enableHistoryMessages,Ve=Re===void 0?!1:Re,Se=(ge=f.current.abortController)===null||ge===void 0?void 0:ge.signal,ze.prev=3,!je.fetch){ze.next=10;break}return ze.next=7,je.fetch({input:Pe,biz_params:be,signal:Se});case 7:ze.t0=ze.sent,ze.next=13;break;case 10:return ze.next=12,fetch(je.baseURL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(je.token||"")},body:JSON.stringify({input:Ve?Pe:Pe.slice(-1),session_id:v(),stream:!0,biz_params:be}),signal:Se});case 12:ze.t0=ze.sent;case 13:Te=ze.t0,ze.next=18;break;case 16:ze.prev=16,ze.t1=ze.catch(3);case 18:if(!(Te&&Te.body)){ze.next=68;break}if(kn=new k({id:"",status:o.Created,created_at:0}),Te.ok){ze.next=23;break}return Te.json().then(function(Ot){var qn=kn.handle({object:"message",type:j.ERROR,content:[],id:"error",role:"assistant",status:o.Failed,code:Te.status,message:JSON.stringify(Ot)});f.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:qn}],D()}),ze.abrupt("return");case 23:ze.prev=23,Wn=!1,Pn=!1,ze.prev=26,Jn=r()((0,p.Z)({readableStream:Te.body}));case 28:return ze.next=30,Jn.next();case 30:if(!(Wn=!(Yn=ze.sent).done)){ze.next=47;break}if(rt=Yn.value,((at=f.current.response)===null||at===void 0?void 0:at.msgStatus)!=="interrupted"){ze.next=38;break}return(ct=f.current.abortController)===null||ct===void 0||ct.abort(),je.cancel&&je.cancel({session_id:v()}),f.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:kn.cancel()}],i(f.current.response),ze.abrupt("break",47);case 38:if(mt=J.current.responseParser||JSON.parse,ht=mt(rt.data),zn=kn.handle(ht),!(zn.status!==o.Failed&&!((Qn=zn.output)!==null&&Qn!==void 0&&(Qn=Qn[0])!==null&&Qn!==void 0&&(Qn=Qn.content)!==null&&Qn!==void 0&&Qn.length))){ze.next=43;break}return ze.abrupt("continue",44);case 43:f.current.response&&(f.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:zn}],zn.status===o.Completed||zn.status===o.Failed?D():i(f.current.response));case 44:Wn=!1,ze.next=28;break;case 47:ze.next=53;break;case 49:ze.prev=49,ze.t2=ze.catch(26),Pn=!0,tt=ze.t2;case 53:if(ze.prev=53,ze.prev=54,!(Wn&&Jn.return!=null)){ze.next=58;break}return ze.next=58,Jn.return();case 58:if(ze.prev=58,!Pn){ze.next=61;break}throw tt;case 61:return ze.finish(58);case 62:return ze.finish(53);case 63:ze.next=68;break;case 65:ze.prev=65,ze.t3=ze.catch(23),console.error(ze.t3);case 68:case"end":return ze.stop()}},fe,null,[[3,16],[23,65],[26,49,53,63],[54,,58,62]])}));return function(fe,Pe){return W.apply(this,arguments)}}(),[v,f,i,D]);return{request:K,mockRequest:ee}}function de(){var s=cn(),f=s.createSession,i=s.updateSession,v=s.getCurrentSessionId,D=(0,n.useCallback)(function(){var ee=G()(d()().mark(function K(W){return d()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:if(v()){Pe.next=3;break}return Pe.next=3,f({name:W});case 3:case"end":return Pe.stop()}},K)}));return function(K){return ee.apply(this,arguments)}}(),[v,f]),z=(0,n.useCallback)(function(){var ee=G()(d()().mark(function K(W,fe){return d()().wrap(function(be){for(;;)switch(be.prev=be.next){case 0:if(fe.length!==0){be.next=3;break}return be.next=3,i({id:v(),name:W});case 3:case"end":return be.stop()}},K)}));return function(K,W){return ee.apply(this,arguments)}}(),[v,i]),J=(0,n.useCallback)(function(){var ee=G()(d()().mark(function K(W){return d()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:return Pe.next=2,i({id:v(),messages:W});case 2:case"end":return Pe.stop()}},K)}));return function(K){return ee.apply(this,arguments)}}(),[v,i]);return{ensureSession:D,updateSessionName:z,syncSessionMessages:J,getCurrentSessionId:v}}function V(){var s=(0,u.useContextSelector)(Be,function(be){return be.setLoading}),f=(0,u.useContextSelector)(ln,function(be){return be.currentSessionId}),i=(0,n.useRef)({}),v=oe({currentQARef:i}),D=de(),z=(0,n.useCallback)(function(){var be=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished";i.current.response&&(i.current.response.msgStatus=be,s(!1),Me.flushSync(function(){v.updateMessage(i.current.response)}),D.syncSessionMessages(v.getMessages()))},[s,v,D]),J=q({currentQARef:i,updateMessage:v.updateMessage,getCurrentSessionId:D.getCurrentSessionId,onFinish:function(){return z("finished")}}),ee=J.request,K=(0,n.useCallback)(function(){var be=G()(d()().mark(function ge(je){var Re,Ve;return d()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return Te.next=2,D.ensureSession(je.query);case 2:if(Re=v.getMessages(),!D.getCurrentSessionId()){Te.next=6;break}return Te.next=6,D.updateSessionName(je.query,Re);case 6:return v.createRequestMessage(je),s(!0),Te.next=10,(0,jn.Z)(100);case 10:return v.createResponseMessage(),Ve=v.getHistoryMessages(),Te.next=14,D.syncSessionMessages(v.getMessages());case 14:return Te.next=16,ee(Ve,je.biz_params);case 16:case"end":return Te.stop()}},ge)}));return function(ge){return be.apply(this,arguments)}}(),[v,D,ee]),W=(0,n.useCallback)(function(){var be=G()(d()().mark(function ge(je){var Re,Ve;return d()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return Re=je.input,v.createApprovalMessage(Re),s(!0),Te.next=5,(0,jn.Z)(100);case 5:return v.createResponseMessage(),Ve=v.getHistoryMessages(),Te.next=9,D.syncSessionMessages(v.getMessages());case 9:return Te.next=11,ee(Ve);case 11:case"end":return Te.stop()}},ge)}));return function(ge){return be.apply(this,arguments)}}(),[v,D,ee]),fe=(0,n.useCallback)(function(){z("interrupted")},[z]),Pe=(0,n.useCallback)(function(){var be=G()(d()().mark(function ge(je){var Re;return d()().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:return s(!0),v.removeMessageById(je),i.current.abortController=new AbortController,v.createResponseMessage(),Re=v.getHistoryMessages(),Se.next=7,ee(Re);case 7:case"end":return Se.stop()}},ge)}));return function(ge){return be.apply(this,arguments)}}(),[v,ee]);return(0,n.useEffect)(function(){i.current={request:void 0,response:void 0,abortController:void 0}},[f]),bn({type:"handleReplace",callback:function(){var be=G()(d()().mark(function je(Re){return d()().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:return Se.next=2,Pe(Re.detail.id);case 2:case"end":return Se.stop()}},je)}));function ge(je){return be.apply(this,arguments)}return ge}()}),bn({type:"handleSubmit",callback:function(){var be=G()(d()().mark(function je(Re){return d()().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:return Se.next=2,K(Re.detail);case 2:case"end":return Se.stop()}},je)}));function ge(je){return be.apply(this,arguments)}return ge}()},[K]),bn({type:"handleApproval",callback:function(){var be=G()(d()().mark(function je(Re){return d()().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:return Se.next=2,W(Re.detail);case 2:case"end":return Se.stop()}},je)}));function ge(je){return be.apply(this,arguments)}return ge}()},[W]),{handleSubmit:K,handleCancel:fe}}function ce(){var s=(0,b.wv)().getPrefixCls("chat-anywhere-chat"),f=V(),i=f.handleSubmit,v=f.handleCancel;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Je,{}),(0,t.jsxs)("div",{className:s,children:[(0,t.jsx)(on,{onSubmit:i}),(0,t.jsx)(vn,{onCancel:v,onSubmit:i})]})]})}var Ce=e(21403),Fe=e(67392),Ke=e(13660),He=e(12624),rn=e(50287),Ae=e(9368),se=(0,n.createContext)({collapsed:!1,toggleCollapsed:function(){}});function $(s){var f=(0,n.useState)(!1),i=te()(f,2),v=i[0],D=i[1],z=(0,n.useCallback)(function(){D(function(ee){return!ee})},[]),J=(0,n.useMemo)(function(){return{collapsed:v,toggleCollapsed:z}},[v,z]);return(0,t.jsx)(se.Provider,{value:J,children:s.children})}function An(){var s=(0,n.useContext)(se),f=s.collapsed,i=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),v=c(function(D){var z;return(z=D.theme)===null||z===void 0?void 0:z.leftHeader})||{};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"".concat(i),children:[n.isValidElement(v)?v:(0,t.jsx)(pn,{}),(0,t.jsxs)("div",{className:"".concat(i,"-content"),style:{display:f?"none":"flex"},children:[(0,t.jsx)(We,{}),(0,t.jsx)(xn,{})]})]})})}function pn(s){var f=s.className,i=c(function(ge){var je;return(je=ge.theme)===null||je===void 0?void 0:je.leftHeader})||{},v=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),D=(0,n.useContext)(se),z=D.toggleCollapsed,J=D.collapsed,ee=c(function(ge){return ge.session.multiple}),K=i,W=K.logo,fe=W===void 0?"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png":W,Pe=K.title,be=Pe===void 0?"Runtime WebUI":Pe;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:P()("".concat(v,"-header"),f),children:[(0,t.jsxs)("div",{className:"".concat(v,"-header-left"),children:[fe&&(0,t.jsx)("img",{src:fe,alt:"logo",height:32}),(0,t.jsx)("span",{children:be})]}),ee&&(0,t.jsx)(Ue.Z,{className:"".concat(v,"-header-collapse"),bordered:!1,icon:J?(0,t.jsx)(Ke.Z,{}):(0,t.jsx)(Fe.Z,{}),onClick:z})]})})}function We(s){var f=(0,u.useContextSelector)(Be,function(ee){return ee.loading}),i=cn(),v=i.createSession,D=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),z=(0,n.useContext)(se),J=z.toggleCollapsed;return(0,t.jsx)("div",{className:"".concat(D,"-adder"),style:s.style,children:(0,t.jsx)(Ce.Z,{block:!0,type:"primary",icon:(0,t.jsx)(He.Z,{}),disabled:!!f,onClick:G()(d()().mark(function ee(){return d()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,v();case 2:s.narrowMode&&J();case 3:case"end":return W.stop()}},ee)})),children:"New Chat"})})}function xn(s){var f=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),i=(0,u.useContextSelector)(ln,function(fe){return fe.sessions}),v=cn(),D=v.changeCurrentSessionId,z=v.removeSession,J=(0,u.useContextSelector)(ln,function(fe){return fe.currentSessionId}),ee=(0,n.useContext)(se),K=ee.toggleCollapsed,W=(0,n.useMemo)(function(){return i.map(function(fe){return{key:fe.id,label:fe.name||"New Chat"}})},[i]);return(0,t.jsx)("div",{className:"".concat(f,"-list"),style:s.style,children:(0,t.jsx)(Ae.Z,{items:W,menu:[{key:"delete",icon:(0,t.jsx)(rn.Z,{}),danger:!0,onClick:function(){var fe=G()(d()().mark(function be(ge){return d()().wrap(function(Re){for(;;)switch(Re.prev=Re.next){case 0:return Re.next=2,z({id:ge.key});case 2:return Re.abrupt("return",Re.sent);case 3:case"end":return Re.stop()}},be)}));function Pe(be){return fe.apply(this,arguments)}return Pe}()}],activeKey:J,onActiveChange:function(Pe){D(Pe),s.narrowMode&&K()}})})}var Xe,yn=(0,A.vJ)(Xe||(Xe=S()([`

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
`])),function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls}),_e=e(85265);function Le(){var s=(0,b.wv)().getPrefixCls("chat-anywhere"),f=c(function(ee){return ee.theme}),i=f.narrowMode,v=f.rightHeader,D=(0,n.useContext)(se),z=D.toggleCollapsed,J=D.collapsed;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(yn,{}),(0,t.jsxs)("div",{className:"".concat(s,"-layout-right-header"),children:[i?(0,t.jsx)(pn,{className:"".concat(s,"-default-header-inner")}):null,v&&(0,t.jsx)("div",{className:"".concat(s,"-default-header-right"),children:v})]}),i&&(0,t.jsx)(_e.Z,{width:"80vw",styles:{body:{padding:0}},open:J,onClose:z,title:null,closable:!1,placement:"left",children:(0,t.jsxs)("div",{className:"".concat(s,"-sessions"),children:[(0,t.jsx)(xn,{narrowMode:!0}),(0,t.jsx)(We,{narrowMode:!0})]})})]})}function Ie(s,f){var i=I(),v=(0,u.useContextSelector)(Be,function(D){return D.setDisabled});return n.useImperativeHandle(f,function(){return{messages:i,input:{setDisabled:v,submit:function(z){var J=z.query,ee=z.fileList,K=z.biz_params;Sn({type:"handleSubmit",data:{query:J,fileList:ee,biz_params:K}})}}}},[]),null}var me=(0,n.forwardRef)(Ie);function Ee(s,f){var i=s.className,v=(0,b.wv)().getPrefixCls("chat-anywhere-layout"),D=c(function(be){return be.theme.narrowMode}),z=c(function(be){return be.theme.background}),J=c(function(be){return be.theme.rightHeader}),ee=c(function(be){return{session:be.session}}),K=ee.session,W=(0,n.useContext)(se),fe=W.collapsed,Pe=!D&&K&&K.multiple;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g,{}),(0,t.jsxs)("div",{className:P()("".concat(v),i),children:[Pe&&(0,t.jsx)("div",{className:P()("".concat(v,"-left"),y()({},"".concat(v,"-left-collapsed"),fe)),children:(0,t.jsx)(An,{})}),(0,t.jsxs)("div",{className:P()("".concat(v,"-right"),y()({},"".concat(v,"-right-has-header"),!!J)),style:{background:z},children:[!!J&&(0,t.jsx)(Le,{}),(0,t.jsx)(ce,{})]})]}),(0,t.jsx)(me,{ref:f})]})}var hn=(0,n.forwardRef)(Ee);function Cn(s){var f=(0,n.useMemo)(function(){return s.data.input[0].content.reduce(function(i,v){if(v.type===Z.TEXT&&i.push({code:"Text",data:{content:v.text,raw:!0}}),v.type===Z.IMAGE){var D=i.find(function(J){return J.code==="Image"});D?D.data.push({url:v.image_url}):i.push({code:"Images",data:[{url:v.image_url}]})}if(v.type===Z.FILE){var z=i.find(function(J){return J.code==="Files"});z?z.data.push({url:v.file_url,name:v.file_name,size:v.file_size}):i.push({code:"Files",data:[{url:v.file_url,name:v.file_name,size:v.file_size}]})}return i},[])},[s.data.input]);return f!=null&&f.length?(0,t.jsx)($e.Z,{role:"user",cards:f}):null}var In=e(66109),Tn=n.memo(function(s){var f,i=s.data;return(f=i.content)!==null&&f!==void 0&&f.length?(0,t.jsx)(t.Fragment,{children:i.content.map(function(v,D){switch(v.type){case Z.TEXT:return(0,t.jsx)(In.Z,{content:v.text,cursor:v.status===o.InProgress},D);case Z.REFUSAL:return(0,t.jsx)(In.Z,{raw:!0,content:v.refusal},D);default:return(0,t.jsx)("div",{children:JSON.stringify(v)},D)}})}):null}),On=Tn,Bn=e(85786),wn=e(70770),Kn=e(86250),Mn=e(31912),Gn=e(7654),Nn=e(56290),_n,Un,Fn,Rn,En,Dn,Hn,Xn,ut=(0,A.kc)(function(s){var f=s.css,i=s.token;return{container:f(_n||(_n=S()([`
    width: 386px;
  `]))),title:f(Un||(Un=S()([`
    font-size: 14px;
    font-weight: 500;
    color: `,`;
    margin-bottom: 16px;
  `])),i.colorText),content:f(Fn||(Fn=S()([`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `]))),tabsContainer:f(Rn||(Rn=S()([`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `]))),tabItem:f(En||(En=S()([`
    padding: 0 8px;
    font-size: 14px;
    color: `,`;
    cursor: pointer;
    border: 1px solid `,`;
    background: `,`;
    transition: all 0.2s;
    user-select: none;
    border-radius: 4px;
  `])),i.colorText,i.colorBorderSecondary,i.colorBgContainer),tabItemSelected:f(Dn||(Dn=S()([`
    color: `,`;
    border-color: `,`;
    border: 1px solid `,`;
    position: relative;
    z-index: 1;
  `])),i.colorPrimary,i.colorPrimary,i.colorPrimary),textarea:f(Hn||(Hn=S()([`
    resize: none;
  `]))),actions:f(Xn||(Xn=S()([`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  `])))}});function gt(){var s=(0,Nn.useTranslation)(),f=s.t;return[(f==null?void 0:f("cancelPopover.options.notNeeded"))||"\u4E0D\u9700\u8981",(f==null?void 0:f("cancelPopover.options.poorResult"))||"\u6548\u679C\u4E0D\u7406\u60F3",(f==null?void 0:f("cancelPopover.options.tooSlow"))||"\u7B49\u5F85\u65F6\u95F4\u4E45",(f==null?void 0:f("cancelPopover.options.wrongInput"))||"\u8F93\u5165\u9519\u8BEF"]}function Zn(s){var f=s.options,i=(0,n.useState)(),v=te()(i,2),D=v[0],z=v[1],J=ut(),ee=J.styles;return(0,t.jsx)("div",{className:ee.tabsContainer,children:f.map(function(K){return(0,t.jsx)("div",{className:"".concat(ee.tabItem," ").concat(D===K?ee.tabItemSelected:""),onClick:function(){z(K),s.onSelect(K)},children:K},K)})})}function Vn(s){var f=(0,Nn.useTranslation)(),i=f.t,v=gt(),D=s.options,z=D===void 0?v:D,J=s.onConfirm,ee=s.title,K=ee===void 0?(i==null?void 0:i("cancelPopover.title"))||"\u53D6\u6D88\u539F\u56E0":ee,W=s.placeholder,fe=W===void 0?(i==null?void 0:i("cancelPopover.placeholder"))||"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212":W,Pe=(0,n.useState)(!1),be=te()(Pe,2),ge=be[0],je=be[1],Re=ut(),Ve=Re.styles,Se=(0,n.useState)(""),Te=te()(Se,2),kn=Te[0],Wn=Te[1],Pn=function(){J==null||J(kn.trim())},tt=(0,t.jsxs)("div",{className:Ve.container,children:[(0,t.jsx)("div",{className:Ve.title,children:K}),(0,t.jsxs)("div",{className:Ve.content,children:[(0,t.jsx)(Zn,{options:z,onSelect:Wn}),(0,t.jsx)(Mn.Z.TextArea,{className:Ve.textarea,value:kn,onChange:function(Yn){return Wn(Yn.target.value)},placeholder:fe,rows:3}),(0,t.jsxs)(Kn.Z,{className:Ve.actions,children:[(0,t.jsx)(Ce.Z,{size:"small",onClick:function(){return je(!1)},children:(i==null?void 0:i("cancelPopover.cancel"))||"\u53D6\u6D88"}),(0,t.jsx)(Ce.Z,{size:"small",type:"primary",onClick:function(){je(!1),Pn()},children:(i==null?void 0:i("cancelPopover.confirm"))||"\u786E\u8BA4"})]})]})]});return(0,t.jsx)(Gn.Z,{open:ge,onOpenChange:je,trigger:"click",content:tt,children:(0,t.jsx)(Ce.Z,{size:"small",children:(i==null?void 0:i("approval.cancel"))||"\u53D6\u6D88\u6267\u884C"})})}var et,dt=(0,A.kc)(function(s){var f=s.css,i=s.token;return{desc:f(et||(et=S()([`
    font-size: 12px;
    color: `,`;
  `])),i.colorTextTertiary)}});function pt(s){var f=s.data,i=xe(function(Re){return Re}),v=dt(),D=v.styles,z=(0,Nn.useTranslation)(),J=z.t,ee=(0,n.useState)("pending"),K=te()(ee,2),W=K[0],fe=K[1],Pe=(J==null?void 0:J("approval.title"))||"\u4EBA\u5DE5\u5E72\u9884",be=(0,n.useMemo)(function(){return W==="pending"?(J==null?void 0:J("approval.pending"))||"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C":W==="confirmed"?(J==null?void 0:J("approval.confirmed"))||"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1":(J==null?void 0:J("approval.canceled"))||"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1"},[W,J]),ge=(0,n.useCallback)(function(Re,Ve){var Se;fe(Re),i.setLoading(!1),i.setDisabled(!1);var Te=f,kn=(Se=Te.content[0])===null||Se===void 0||(Se=Se.data)===null||Se===void 0?void 0:Se.id,Wn={type:j.MCP_APPROVAL_RESPONSE,role:ae.USER,content:[{type:Z.DATA,data:{approve:Re==="confirmed",id:kn,approval_request_id:kn,reason:Ve}}]};Sn({type:"handleApproval",data:{input:[Te,Wn]}})},[f]),je=(0,n.useMemo)(function(){return W==="pending"?(0,t.jsxs)(Kn.Z,{gap:8,children:[(0,t.jsx)(Vn,{onConfirm:function(Ve){return ge("canceled",Ve)}}),(0,t.jsx)(Ce.Z,{size:"small",type:"primary",onClick:function(){return ge("confirmed")},children:(J==null?void 0:J("approval.confirm"))||"\u786E\u8BA4\u6267\u884C"})]}):null},[W,J]);return(0,n.useEffect)(function(){W==="pending"&&(i.setLoading((J==null?void 0:J("approval.taskRunning"))||"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1"),i.setDisabled(!0))},[W,J]),(0,t.jsx)(wn.Z.HITL,{done:W!=="pending",onDone:function(){},title:(0,t.jsxs)(Kn.Z,{gap:8,children:[Pe,(0,t.jsx)("span",{className:D.desc,children:be})]}),actions:je})}var xt=n.memo(function(s){var f,i=s.data,v=s.isApproval,D=v===void 0?!1:v,z=c(function(Re){return Re.customToolRenderConfig})||{};if(!((f=i.content)!==null&&f!==void 0&&f.length))return null;var J=i.content,ee=i.status===o.InProgress,K=J[0].data.name,W="".concat(J[0].data.server_label?J[0].data.server_label+" / ":""),fe="".concat(W).concat(K),Pe;if(z[K]){var be=z[K];Pe=(0,t.jsx)(be,{data:i})}else{var ge,je;Pe=(0,t.jsx)(Bn.Z,{loading:ee,defaultOpen:!1,title:fe==="undefined"?"":fe,input:(ge=J[0])===null||ge===void 0||(ge=ge.data)===null||ge===void 0?void 0:ge.arguments,output:(je=J[1])===null||je===void 0||(je=je.data)===null||je===void 0?void 0:je.output})}return(0,t.jsxs)(t.Fragment,{children:[Pe,D&&(0,t.jsx)(pt,{data:i})]})}),nt=xt,Ct=e(79323);function ft(s){var f,i=s.data;if(i.status===o.Created)return null;var v=i==null||(f=i.content)===null||f===void 0?void 0:f[0];return v?(0,t.jsx)(Ct.Z,{loading:i.status===o.InProgress,title:"Thinking",content:v.text}):null}function $n(s){var f=s.data;return(0,t.jsx)($e.Z.Interrupted,{type:"error",title:f.code,desc:f.message})}var yt=e(89698),ot=e(60227),bt=e(67055),st=e(39536),jt=e(39693),vt=e.n(jt);function Et(s){return!s.input_tokens||!s.output_tokens?null:(0,t.jsx)($e.Z.Footer.Count,{data:[["Input",s.input_tokens],["Output",s.output_tokens]]})}function St(s){var f,i,v,D=(0,Nn.useTranslation)(),z=D.t,J=c(function(W){var fe;return(fe=W.actions)===null||fe===void 0?void 0:fe.list})||[{icon:(0,t.jsx)(yt.Z,{}),onClick:function(){(0,st.J)(JSON.stringify(s.data))}}],ee=(f=c(function(W){var fe;return(fe=W.actions)===null||fe===void 0?void 0:fe.replace}))!==null&&f!==void 0?f:!0,K=vt()([].concat(tn()(J.map(function(W){var fe=W;return W.render&&(fe.children=n.createElement(W.render,{data:s})),h()(h()({},fe),{},{onClick:function(){var be;(be=W.onClick)===null||be===void 0||be.call(W,s)}})})),[ee&&s.isLast?{icon:(0,t.jsx)(bt.Z,{title:(z==null?void 0:z("actions.regenerate"))||"\u91CD\u65B0\u751F\u6210",children:(0,t.jsx)(ot.Z,{})}),onClick:function(){Sn({type:"handleReplace",data:s})}}:null]));return k.maybeDone(s.data)?(0,t.jsx)($e.Z.Footer,{left:(0,t.jsx)($e.Z.Footer.Actions,{data:K}),right:(0,t.jsx)(Et,{input_tokens:(i=s.data.usage)===null||i===void 0?void 0:i.input_tokens,output_tokens:(v=s.data.usage)===null||v===void 0?void 0:v.output_tokens})}):null}function Pt(s){var f=(0,n.useMemo)(function(){return k.mergeToolMessages(s.data.output)},[s.data.output]);return!(f!=null&&f.length)&&k.maybeGenerating(s.data)?(0,t.jsx)($e.Z.Spin,{}):(0,t.jsxs)(t.Fragment,{children:[f.map(function(i){switch(i.type){case j.MESSAGE:return(0,t.jsx)(On,{data:i},i.id);case j.PLUGIN_CALL:case j.PLUGIN_CALL_OUTPUT:case j.MCP_CALL:case j.MCP_CALL_OUTPUT:return(0,t.jsx)(nt,{data:i},i.id);case j.MCP_APPROVAL_REQUEST:return(0,t.jsx)(nt,{data:i,isApproval:!0},i.id);case j.REASONING:return(0,t.jsx)(ft,{data:i},i.id);case j.ERROR:return(0,t.jsx)($n,{data:i},i.id);case j.HEARTBEAT:return null;default:return console.warn("[WIP] Unknown message type: ".concat(i.type)),null}}),s.data.error&&(0,t.jsx)($n,{data:s.data.error}),(0,t.jsx)(St,h()({},s))]})}var At=e(83962);function it(s){var f=s.options,i=s.cards,v=s.children,D=[[Nn.ChatAnywhereI18nContextProvider,{defaultLocale:f.theme.locale}],[L,{options:f}],[At.xy,{cardConfig:i}],[Qe,{}],[Ln,{}],[Q,{}],[$,{}]];return D.reduceRight(function(z,J){var ee=te()(J,2),K=ee[0],W=ee[1];return(0,t.jsx)(K,h()(h()({},W),{},{children:z}))},v)}var Tt=it;function lt(s,f){var i=s.options,v=i===void 0?{}:i,D=(0,n.useMemo)(function(){var z=h()({AgentScopeRuntimeRequestCard:Cn,AgentScopeRuntimeResponseCard:Pt},v.cards);return z},[v.cards]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Tt,{options:v,cards:D,children:(0,t.jsx)(hn,{ref:f})})})}var Lt=(0,n.forwardRef)(lt)},56290:function(an,X,e){"use strict";e.r(X),e.d(X,{ChatAnywhereI18nContextProvider:function(){return g},useChatAnywhereI18n:function(){return A},useTranslation:function(){return B}});var ne=e(5574),h=e.n(ne),R=e(59214),y=e(67294),b=e(85893),T={cn:{"approval.title":"\u4EBA\u5DE5\u5E72\u9884","approval.pending":"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C","approval.confirmed":"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1","approval.canceled":"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1","approval.cancel":"\u53D6\u6D88\u6267\u884C","approval.confirm":"\u786E\u8BA4\u6267\u884C","approval.taskRunning":"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1","cancelPopover.title":"\u53D6\u6D88\u539F\u56E0","cancelPopover.placeholder":"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212","cancelPopover.cancel":"\u53D6\u6D88","cancelPopover.confirm":"\u786E\u8BA4","cancelPopover.options.notNeeded":"\u4E0D\u9700\u8981","cancelPopover.options.poorResult":"\u6548\u679C\u4E0D\u7406\u60F3","cancelPopover.options.tooSlow":"\u7B49\u5F85\u65F6\u95F4\u4E45","cancelPopover.options.wrongInput":"\u8F93\u5165\u9519\u8BEF","common.save":"\u4FDD\u5B58","common.cancel":"\u53D6\u6D88","common.confirm":"\u786E\u8BA4","common.delete":"\u5220\u9664","common.edit":"\u7F16\u8F91","common.loading":"\u52A0\u8F7D\u4E2D...","common.saveSuccess":"\u4FDD\u5B58\u6210\u529F","common.saveFailed":"\u4FDD\u5B58\u5931\u8D25","actions.regenerate":"\u91CD\u65B0\u751F\u6210","messageImport.title":"Sessions \u6570\u636E\u5BFC\u5165","messageImport.placeholder":"\u8F93\u5165 JSON \u6570\u636E\u4EE5\u8986\u76D6\u5F53\u524D sessions","messageImport.saveToLocalStorage":"\u4FDD\u5B58\u5230 LocalStorage"},en:{"approval.title":"Human Intervention","approval.pending":"Please confirm whether to execute this operation","approval.confirmed":"Confirmed to execute task","approval.canceled":"Canceled task execution","approval.cancel":"Cancel","approval.confirm":"Confirm","approval.taskRunning":"A task is currently running, cannot send new task","cancelPopover.title":"Cancel Reason","cancelPopover.placeholder":"Please enter the reason for better AI planning","cancelPopover.cancel":"Cancel","cancelPopover.confirm":"Confirm","cancelPopover.options.notNeeded":"Not needed","cancelPopover.options.poorResult":"Poor result","cancelPopover.options.tooSlow":"Too slow","cancelPopover.options.wrongInput":"Wrong input","common.save":"Save","common.cancel":"Cancel","common.confirm":"Confirm","common.delete":"Delete","common.edit":"Edit","common.loading":"Loading...","common.saveSuccess":"Saved successfully","common.saveFailed":"Failed to save","actions.regenerate":"Regenerate","messageImport.title":"Import Sessions Data","messageImport.placeholder":"Enter JSON data to override current sessions","messageImport.saveToLocalStorage":"Save to LocalStorage"}},S=(0,R.createContext)(void 0);function A(x){try{var P=(0,R.useContextSelector)(S,x);return P}catch(M){return{}}}function B(){var x=A(function(u){return u==null?void 0:u.t}),P=A(function(u){return u==null?void 0:u.locale}),M=A(function(u){return u==null?void 0:u.setLocale});return{t:x,locale:P,setLocale:M}}function g(x){var P=x.children,M=x.defaultLocale,u=M===void 0?"en":M,n=(0,y.useState)(u),m=h()(n,2),O=m[0],l=m[1],t=(0,y.useCallback)(function(c,L){var ie=T[O][c]||c;return L&&Object.entries(L).forEach(function(le){var d=h()(le,2),he=d[0],G=d[1];ie=ie.replace(new RegExp("\\{".concat(he,"\\}"),"g"),String(G))}),ie},[O]),_=(0,y.useMemo)(function(){return{locale:O,setLocale:l,t,messages:T[O]}},[O,l,t]);return(0,b.jsx)(S.Provider,{value:_,children:P})}X.default=S},57551:function(){},22863:function(an,X,e){"use strict";e.r(X);var ne=e(57551),h=e.n(ne),R={};for(var y in ne)y!=="default"&&(R[y]=function(b){return ne[b]}.bind(0,y));e.d(X,R)},34487:function(an,X,e){"use strict";e.d(X,{Z:function(){return De}});var ne=e(97857),h=e.n(ne),R=e(5574),y=e.n(R),b=e(56044),T=e(68400),S=e.n(T),A=e(9053),B,g=(0,A.vJ)(B||(B=S()([`
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
`])),function(re){return re.theme.prefixCls},function(re){return re.theme.colorBgLayout},function(re){return re.theme.colorBgLayout},function(re){return re.theme.colorFillTertiary},function(re){return re.theme.colorBgBase},function(re){return re.theme.prefixCls},function(re){return re.theme.prefixCls},function(re){return re.theme.colorBgBase},function(re){return re.theme.colorBorderSecondary},function(re){return re.theme.colorText},function(re){return re.theme.colorBorderSecondary},function(re){return re.theme.colorPrimary}),x=e(93967),P=e.n(x),M=e(55839),u=e(16494),n=e(85893);function m(re){var Ue=(0,b.wv)().getPrefixCls("assets-preview-image"),we=re.width,Ye=we===void 0?1:we,Ge=re.height,Ne=Ge===void 0?1:Ge,vn=re.src;return(0,n.jsx)("div",{className:Ue,style:{aspectRatio:"".concat(Ye,"/").concat(Ne)},children:(0,n.jsx)(M.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(u.Z,{src:vn,width:"100%",height:"100%"})})})}function O(re){return(0,n.jsx)(u.Z.PreviewGroup,{children:re.children})}var l=e(9783),t=e.n(l),_=e(13769),c=e.n(_),L=e(67294),ie=e(63701),le=e(62321),d=e(32485),he=e(64057),G=["width","height","poster","src"];function Y(re){var Ue=(0,b.wv)().getPrefixCls("assets-preview-video"),we=re.width,Ye=we===void 0?1:we,Ge=re.height,Ne=Ge===void 0?1:Ge,vn=re.poster,$e=re.src,sn=c()(re,G),tn=(0,L.useRef)(null),Ze=(0,L.useState)(!1),Ln=y()(Ze,2),I=Ln[0],ye=Ln[1],Me=(0,L.useState)(0),qe=y()(Me,2),ln=qe[0],Qe=qe[1],cn=(0,L.useState)(0),un=y()(cn,2),en=un[0],gn=un[1],on=(0,L.useCallback)(function(fn){var a=Math.floor(fn/60),ke=Math.floor(fn%60);return"".concat(a.toString().padStart(2,"0"),":").concat(ke.toString().padStart(2,"0"))},[]),dn=(0,L.useCallback)(function(){var fn=tn.current;fn&&(fn.paused?(fn.play(),ye(!0)):(fn.pause(),ye(!1)))},[]),Je=(0,L.useCallback)(function(){tn.current&&Qe(tn.current.duration)},[]),jn=(0,L.useCallback)(function(){ye(!1),gn(0)},[]),bn=(0,L.useCallback)(function(){tn.current&&gn(tn.current.currentTime)},[]),Sn=(0,L.useCallback)(function(fn){fn.stopPropagation();var a=tn.current;a&&(a.requestFullscreen?a.requestFullscreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.msRequestFullscreen&&a.msRequestFullscreen())},[]);return(0,n.jsxs)("div",{className:Ue,style:{aspectRatio:"".concat(Ye,"/").concat(Ne)},children:[(0,n.jsx)("video",h()(h()({},sn),{},{ref:tn,src:$e,poster:vn,preload:"metadata",onLoadedMetadata:Je,onTimeUpdate:bn,onEnded:jn})),(0,n.jsxs)("div",{className:P()("".concat(Ue,"-overlay"),t()({},"".concat(Ue,"-overlay-playing"),1)),onClick:dn,children:[(0,n.jsx)("div",{className:"".concat(Ue,"-play-btn"),children:I?(0,n.jsx)(ie.Z,{}):(0,n.jsx)(le.Z,{})}),(0,n.jsx)("div",{className:"".concat(Ue,"-enlarge"),onClick:Sn,children:(0,n.jsx)(he.Z,{bordered:!1,size:"small",icon:(0,n.jsx)(d.Z,{})})})]}),(0,n.jsx)("div",{className:"".concat(Ue,"-duration"),children:on(ln-en)})]})}var te=e(20399),ve=e(80162);function Oe(re){var Ue=(0,b.wv)().getPrefixCls("assets-preview-audio"),we=(0,L.useRef)(null),Ye=(0,L.useState)(!1),Ge=y()(Ye,2),Ne=Ge[0],vn=Ge[1],$e=(0,L.useState)(!1),sn=y()($e,2),tn=sn[0],Ze=sn[1],Ln=(0,L.useState)(0),I=y()(Ln,2),ye=I[0],Me=I[1],qe=(0,L.useState)(0),ln=y()(qe,2),Qe=ln[0],cn=ln[1],un=(0,L.useCallback)(function(Je){if(isNaN(Je))return"00:00";var jn=Math.floor(Je/60),bn=Math.floor(Je%60);return"".concat(jn.toString().padStart(2,"0"),":").concat(bn.toString().padStart(2,"0"))},[]),en=(0,L.useCallback)(function(){we.current&&(Ne?we.current.pause():we.current.play(),vn(!Ne))},[Ne]),gn=(0,L.useCallback)(function(){Ze(!tn),we.current&&(we.current.muted=tn)},[tn]),on=(0,L.useCallback)(function(Je){if(we.current&&Qe){var jn=Je.currentTarget.getBoundingClientRect(),bn=Je.clientX-jn.left,Sn=bn/jn.width,fn=Sn*Qe;we.current.currentTime=fn,Me(fn)}},[Qe]);(0,L.useEffect)(function(){var Je=we.current;if(Je){var jn=function(){return Me(Je.currentTime)},bn=function(){return cn(Je.duration)},Sn=function(){return vn(!1)};return Je.addEventListener("timeupdate",jn),Je.addEventListener("loadedmetadata",bn),Je.addEventListener("ended",Sn),function(){Je.removeEventListener("timeupdate",jn),Je.removeEventListener("loadedmetadata",bn),Je.removeEventListener("ended",Sn)}}},[]);var dn=Qe?ye/Qe*100:0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("audio",{ref:we,src:re.src,muted:tn}),(0,n.jsxs)("div",{className:Ue,children:[(0,n.jsx)(he.Z,{size:"small",type:"text",onClick:en,icon:Ne?(0,n.jsx)(ie.Z,{}):(0,n.jsx)(le.Z,{})}),(0,n.jsx)(he.Z,{size:"small",type:"text",onClick:gn,icon:tn?(0,n.jsx)(te.Z,{}):(0,n.jsx)(ve.Z,{})}),(0,n.jsx)("div",{className:"".concat(Ue,"-time"),children:un(ye)}),(0,n.jsx)("div",{className:"".concat(Ue,"-progress"),onClick:on,children:(0,n.jsx)("div",{className:"".concat(Ue,"-progress-bar"),style:{width:"".concat(dn,"%")}})}),(0,n.jsx)("div",{className:"".concat(Ue,"-time"),children:un(Qe)})]})]})}var C=e(16138),Be=e(83202),Q=e(90105),xe=e(82052);function ue(re){var Ue,we=(0,Q.Z)(),Ye=(0,b.wv)().getPrefixCls("assets-preview"),Ge=(0,L.useRef)(null),Ne=re.height,vn=Ne===void 0?144:Ne,$e=vn/2-12,sn=(0,L.useRef)(0),tn=(0,L.useState)(0),Ze=y()(tn,2),Ln=Ze[0],I=Ze[1],ye=(0,L.useDeferredValue)(Ln),Me=(0,xe.Z)(Ge),qe=(0,L.useCallback)(function(un){I(un.target.scrollLeft)},[]);(0,L.useEffect)(function(){Ge.current&&re.type!=="audio"&&(sn.current=Ge.current.scrollWidth-Ge.current.clientWidth),we()},[re.data.length,Me==null?void 0:Me.width]);var ln=(0,L.useCallback)(function(un){var en=200;Ge.current.scrollLeft=Ge.current.scrollLeft+en*(un==="left"?-1:1)},[]),Qe={image:m,video:Y,audio:Oe}[re.type],cn=re.data.map(function(un,en){return(0,n.jsx)(Qe,h()({},un),en)});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{}),(0,n.jsxs)("div",{className:P()("".concat(Ye),re.className),children:[(0,n.jsx)("div",{className:P()("".concat(Ye,"-container"),(Ue=re.classNames)===null||Ue===void 0?void 0:Ue.container),style:re.type!=="audio"?{height:vn}:{flexDirection:"column"},onScroll:qe,ref:Ge,children:re.type==="image"?(0,n.jsx)(O,{children:cn}):cn}),$e>0&&re.type!=="audio"?(0,n.jsxs)(n.Fragment,{children:[ye>50&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:P()("".concat(Ye,"-left-edge"))}),(0,n.jsx)(he.Z,{onClick:function(){return ln("left")},style:{top:$e},className:P()("".concat(Ye,"-left-arrow"),"".concat(Ye,"-arrow")),size:"small",shape:"circle",icon:(0,n.jsx)(C.Z,{})})]}),ye<sn.current-50&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:P()("".concat(Ye,"-right-edge"))}),(0,n.jsx)(he.Z,{onClick:function(){return ln("right")},style:{top:$e},className:P()("".concat(Ye,"-right-arrow"),"".concat(Ye,"-arrow")),size:"small",shape:"circle",icon:(0,n.jsx)(Be.Z,{})})]})]}):null]})]})}var De=ue},50993:function(an,X,e){"use strict";e.d(X,{Z:function(){return fn}});var ne=e(9783),h=e.n(ne),R=e(97857),y=e.n(R),b=e(5574),T=e.n(b),S=e(13769),A=e.n(S),B=e(93967),g=e.n(B),x=e(67294),P=e(56044),M=e(56790),u=e(73935),n=x.createContext(null),m=e(85893);function O(a){var ke=a.getDropContainer,nn=a.className,mn=a.prefixCls,o=a.children,ae=x.useContext(n),j=ae.disabled,Z=x.useState(),w=T()(Z,2),U=w[0],oe=w[1],pe=x.useState(null),r=T()(pe,2),p=r[0],E=r[1];x.useEffect(function(){var F=ke==null?void 0:ke();U!==F&&oe(F)},[ke]),x.useEffect(function(){if(U){var F=function(){E(!0)},k=function(ce){ce.preventDefault()},q=function(ce){ce.relatedTarget||E(!1)},de=function(ce){E(!1),ce.preventDefault()};return document.addEventListener("dragenter",F),document.addEventListener("dragover",k),document.addEventListener("dragleave",q),document.addEventListener("drop",de),function(){document.removeEventListener("dragenter",F),document.removeEventListener("dragover",k),document.removeEventListener("dragleave",q),document.removeEventListener("drop",de)}}},[!!U]);var N=ke&&U&&!j;if(!N)return null;var H="".concat(mn,"-drop-area");return(0,u.createPortal)((0,m.jsx)("div",{className:g()(H,nn,h()({},"".concat(H,"-on-body"),U.tagName==="BODY")),style:{display:p?"block":"none"},children:o}),U)}var l=e(53033),t=e(52861),_=e(83622),c=e(29372),L=e(64599),ie=e.n(L),le=e(68400),d=e.n(le),he=e(9053),G,Y=(0,he.vJ)(G||(G=d()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.borderRadius},function(a){return a.theme.colorBgContainer},function(a){return a.theme.lineWidth},function(a){return a.theme.colorBorderSecondary},function(a){return a.theme.paddingXS},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.fontSize},function(a){return a.theme.colorText},function(a){return a.theme.prefixCls},function(a){return a.theme.colorTextQuaternary},function(a){return a.theme.fontSizeSM},function(a){return a.theme.prefixCls},function(a){return a.theme.opacityLoading},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.colorWhite},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.borderRadius},function(a){return a.theme.lineWidth},function(a){return a.theme.prefixCls},function(a){return a.theme.paddingXXS},function(a){return a.theme.prefixCls},function(a){return a.theme.colorText},function(a){return a.theme.colorBgContainer},function(a){return a.theme.lineWidth},function(a){return a.theme.colorBorder},function(a){return a.theme.colorError},function(a){return a.theme.prefixCls},function(a){return a.theme.colorError},function(a){return a.theme.paddingSM},function(a){return a.theme.prefixCls},function(a){return a.theme.colorPrimary},function(a){return a.theme.prefixCls}),te=e(89102),ve=e(16494),Oe=function(ke){return ke.indexOf("image/")===0},C=200;function Be(a){return new Promise(function(ke){if(!a||!a.type||!Oe(a.type)){ke("");return}var nn=new Image;if(nn.onload=function(){var ae=nn.width,j=nn.height,Z=ae/j,w=Z>1?C:C*Z,U=Z>1?C/Z:C,oe=document.createElement("canvas");oe.width=w,oe.height=U,oe.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(w,"px; height: ").concat(U,"px; z-index: 9999; display: none;"),document.body.appendChild(oe);var pe=oe.getContext("2d");pe.drawImage(nn,0,0,w,U);var r=oe.toDataURL();document.body.removeChild(oe),window.URL.revokeObjectURL(nn.src),ke(r)},nn.crossOrigin="anonymous",a.type.startsWith("image/svg+xml")){var mn=new FileReader;mn.onload=function(){mn.result&&typeof mn.result=="string"&&(nn.src=mn.result)},mn.readAsDataURL(a)}else if(a.type.startsWith("image/gif")){var o=new FileReader;o.onload=function(){o.result&&ke(o.result)},o.readAsDataURL(a)}else nn.src=window.URL.createObjectURL(a)})}var Q=e(9361),xe=e(38703);function ue(a){var ke=a.percent,nn=Q.Z.useToken(),mn=nn.token;return(0,m.jsx)(xe.Z,{type:"circle",percent:ke,size:40,strokeColor:"#FFF",trailColor:"rgba(255, 255, 255, 0.3)",format:function(ae){return(0,m.jsxs)("span",{style:{color:"#FFF"},children:[(ae||0).toFixed(0),"%"]})}})}var De=e(43974),re=e(60227),Ue="\xA0",we="image/png,image/jpeg,image/jpg,image/gif,image/bmp,image/webp,image/svg+xml";function Ye(a,ke){var nn=(0,P.wv)(),mn=nn.getPrefixCls,o=a.item,ae=a.onRemove,j=a.onReplace,Z=a.className,w=a.style,U=x.useContext(n),oe=U||{},pe=oe.disabled,r=o.percent,p=o.status,E=p===void 0?"done":p,N=o.description,H=mn("attachment"),F="".concat(H,"-list-card"),k=x.useState(!1),q=T()(k,2),de=q[0],V=q[1],ce=x.useRef(null),Ce=x.useMemo(function(){return{visible:de,onVisibleChange:V}},[de]),Fe=x.useMemo(function(){return N||(E==="uploading"?"".concat(r||0,"%"):E==="error"&&o.response||Ue)},[N,E,r,o.response]),Ke=x.useState(),He=T()(Ke,2),rn=He[0],Ae=He[1];x.useEffect(function(){if(o.originFileObj){var pn=!0;return Be(o.originFileObj).then(function(We){pn&&Ae(We)}),function(){pn=!1}}Ae(void 0)},[o.originFileObj]);var se=o.thumbUrl||o.url||rn,$=function(We){var xn;We.stopPropagation(),(xn=ce.current)===null||xn===void 0||xn.click()},An=function(We){var xn,Xe=(xn=We.target.files)===null||xn===void 0?void 0:xn[0];Xe&&j&&j(o,Xe),ce.current&&(ce.current.value="")};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Y,{}),(0,m.jsxs)("div",{className:g()(F,h()(h()(h()({},"".concat(F,"-status-").concat(E),E),"".concat(F,"-type-preview"),!0),"".concat(F,"-hoverable"),!pe&&ae),Z),style:w,ref:ke,children:[se&&(0,m.jsx)("img",{alt:"preview",src:se}),(0,m.jsx)(ve.Z,{src:se,style:{display:"none"},preview:Ce}),E!=="done"&&(0,m.jsxs)("div",{className:"".concat(F,"-img-mask"),children:[E==="uploading"&&r!==void 0&&(0,m.jsx)(ue,{percent:r,prefixCls:F}),E==="error"&&(0,m.jsx)("div",{className:"".concat(F,"-desc"),children:(0,m.jsx)("div",{className:"".concat(F,"-ellipsis-prefix"),children:Fe})})]}),E==="done"&&(0,m.jsxs)("div",{className:"".concat(F,"-img-hover-mask"),children:[(0,m.jsx)("button",{className:"".concat(F,"-img-action"),onClick:function(We){We.stopPropagation(),V(!0)},children:(0,m.jsx)(De.Z,{})}),j&&(0,m.jsx)("button",{className:"".concat(F,"-img-action"),onClick:$,children:(0,m.jsx)(re.Z,{})})]}),(0,m.jsx)("input",{ref:ce,type:"file",accept:we,style:{display:"none"},onChange:An}),(0,m.jsx)("button",{style:{opacity:!pe&&ae?1:0},className:"".concat(F,"-remove"),onClick:function(){!pe&&ae&&ae(o)},children:(0,m.jsx)(te.Z,{})})]})]})}var Ge=x.forwardRef(Ye),Ne="\xA0",vn="#8c8c8c",$e=["png","jpg","jpeg","gif","bmp","webp","svg"],sn=function(ke){var nn=ke.url;return(0,m.jsx)("img",{src:nn,width:32,height:32})},tn=[{icon:(0,m.jsx)(sn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01cVtZXI23tPVhiZoPJ_!!6000000007313-55-tps-40-40.svg"}),color:"#22b35e",ext:["xlsx","xls"]},{icon:(0,m.jsx)(sn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01uDnnuz1XMNEjgFMul_!!6000000002909-55-tps-40-40.svg"}),color:vn,ext:$e},{icon:(0,m.jsx)(sn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01PaXli01DDPAO68fsI_!!6000000000182-55-tps-40-40.svg"}),color:vn,ext:["md","mdx"]},{icon:(0,m.jsx)(sn,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01mB5PzD27fuIWK661W_!!6000000007825-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["pdf"]},{icon:(0,m.jsx)(sn,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01a8j7Jv1nW1QyFme7k_!!6000000005096-55-tps-40-40.svg"}),color:"#ff6e31",ext:["ppt","pptx"]},{icon:(0,m.jsx)(sn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01XaNi8P1UkhQXoQdUL_!!6000000002556-55-tps-40-40.svg"}),color:"#1677ff",ext:["doc","docx"]},{icon:(0,m.jsx)(sn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),color:"#fab714",ext:["zip","rar","7z","tar","gz"]},{icon:(0,m.jsx)(sn,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01zTTe0q1Xg4GkZgJol_!!6000000002952-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["mp4","avi","mov","wmv","flv","mkv"]},{icon:(0,m.jsx)(sn,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01qOBdXG1UpHO6f3Vvc_!!6000000002566-55-tps-40-40.svg"}),color:"#8c8c8c",ext:["mp3","wav","flac","ape","aac","ogg"]}];function Ze(a,ke){return ke.some(function(nn){return a.toLowerCase()===".".concat(nn)})}function Ln(a){for(var ke=a,nn=["B","KB","MB","GB","TB","PB","EB"],mn=0;ke>=1024&&mn<nn.length-1;)ke/=1024,mn++;return"".concat(ke.toFixed(0)," ").concat(nn[mn])}function I(a,ke){var nn=(0,P.wv)(),mn=nn.getPrefixCls,o=a.item,ae=a.onRemove,j=a.onReplace,Z=a.className,w=a.style,U=x.useContext(n),oe=U||{},pe=oe.disabled,r=o.name,p=o.size,E=o.percent,N=o.status,H=N===void 0?"done":N,F=o.description,k=mn("attachment"),q="".concat(k,"-list-card"),de=x.useMemo(function(){var pn=r||"",We=pn.match(/^(.*)\.[^.]+$/);return We?[We[1],pn.slice(We[1].length)]:[pn,""]},[r]),V=T()(de,2),ce=V[0],Ce=V[1],Fe=x.useMemo(function(){return Ze(Ce,$e)},[Ce]),Ke=a.renderType||"default",He=Fe&&(o.originFileObj||o.thumbUrl||o.url)&&Ke==="default";if(He)return(0,m.jsx)(Ge,{ref:ke,item:o,onRemove:ae,onReplace:j,className:Z,style:w});var rn=function(){return F||(H==="uploading"?"".concat(E||0,"%"):H==="error"?o.response||Ne:p?Ln(p):Ne)}(),Ae=function(){var pn=ie()(tn),We;try{for(pn.s();!(We=pn.n()).done;){var xn=We.value,Xe=xn.ext,yn=xn.icon,_e=xn.color;if(Ze(Ce,Xe))return[yn,_e]}}catch(Le){pn.e(Le)}finally{pn.f()}return[(0,m.jsx)(sn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"},"defaultIcon"),vn]}(),se=T()(Ae,2),$=se[0],An=se[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Y,{}),(0,m.jsxs)("div",{className:g()(q,h()(h()(h()(h()({},"".concat(q,"-status-").concat(H),H),"".concat(q,"-type-overview"),!0),"".concat(q,"-type-").concat(Ke),!0),"".concat(q,"-hoverable"),!pe&&ae),Z),style:w,ref:ke,children:[(0,m.jsx)("div",{className:"".concat(q,"-icon"),style:{color:An},children:$}),(0,m.jsxs)("div",{className:"".concat(q,"-content"),children:[(0,m.jsxs)("div",{className:"".concat(q,"-name"),children:[ce!=null?ce:Ne,Ce]}),(0,m.jsx)("div",{className:"".concat(q,"-desc"),children:(0,m.jsx)("div",{className:"".concat(q,"-ellipsis-prefix"),children:rn})})]}),(0,m.jsx)("button",{style:{opacity:!pe&&ae?1:0},className:"".concat(q,"-remove"),onClick:function(){!pe&&ae&&ae(o)},children:(0,m.jsx)(te.Z,{})})]})]})}var ye=x.forwardRef(I),Me=1;function qe(a){var ke=a.prefixCls,nn=a.items,mn=a.onRemove,o=a.onReplace,ae=a.overflow,j=a.listClassName,Z=a.listStyle,w=a.itemClassName,U=a.itemStyle,oe="".concat(ke,"-list"),pe=x.useRef(null),r=x.useState(!1),p=T()(r,2),E=p[0],N=p[1];x.useEffect(function(){return N(!0),function(){N(!1)}},[]);var H=x.useState(!1),F=T()(H,2),k=F[0],q=F[1],de=x.useState(!1),V=T()(de,2),ce=V[0],Ce=V[1],Fe=function(){var se=pe.current;se&&(ae==="scrollX"?(q(Math.abs(se.scrollLeft)>=Me),Ce(se.scrollWidth-se.clientWidth-Math.abs(se.scrollLeft)>=Me)):ae==="scrollY"&&(q(se.scrollTop!==0),Ce(se.scrollHeight-se.clientHeight!==se.scrollTop)))};x.useEffect(function(){Fe()},[ae]);var Ke=function(se){var $=pe.current;$&&$.scrollTo({left:$.scrollLeft+se*$.clientWidth,behavior:"smooth"})},He=function(){Ke(-1)},rn=function(){Ke(1)};return(0,m.jsxs)("div",{className:g()(oe,h()(h()(h()({},"".concat(oe,"-overflow-").concat(a.overflow),ae),"".concat(oe,"-overflow-ping-start"),k),"".concat(oe,"-overflow-ping-end"),ce),j),ref:pe,onScroll:Fe,style:Z,children:[(0,m.jsx)(c.V4,{keys:nn.map(function(Ae){return{key:Ae.uid,item:Ae}}),motionName:"".concat(oe,"-card-motion"),component:!1,motionAppear:E,motionLeave:!0,motionEnter:!0,children:function(se){var $=se.key,An=se.item,pn=se.className,We=se.style;return(0,m.jsx)(ye,{prefixCls:ke,item:An,onRemove:mn,onReplace:o,className:g()(pn,w),style:y()(y()({},We),U),renderType:a.renderType},$)}}),ae==="scrollX"&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(_.ZP,{size:"small",shape:"circle",className:"".concat(oe,"-prev-btn"),icon:(0,m.jsx)(l.Z,{}),onClick:He}),(0,m.jsx)(_.ZP,{size:"small",shape:"circle",className:"".concat(oe,"-next-btn"),icon:(0,m.jsx)(t.Z,{}),onClick:rn})]})]})}var ln=e(86250),Qe=e(21317),cn=e(41154);function un(a,ke){var nn=a.prefixCls,mn=a.placeholder,o=mn===void 0?{}:mn,ae=a.upload,j=a.className,Z=a.style,w="".concat(nn,"-placeholder"),U=o||{},oe=x.useContext(n),pe=oe.disabled,r=x.useState(!1),p=T()(r,2),E=p[0],N=p[1],H=function(){N(!0)},F=function(V){V.currentTarget.contains(V.relatedTarget)||N(!1)},k=function(){N(!1)},q=x.isValidElement(o)?o:(0,m.jsxs)(ln.Z,{align:"center",justify:"center",vertical:!0,className:"".concat(w,"-inner"),children:[(0,m.jsx)(Qe.default.Text,{className:"".concat(w,"-icon"),children:U.icon}),(0,m.jsx)(Qe.default.Title,{className:"".concat(w,"-title"),level:5,children:U.title}),(0,m.jsx)(Qe.default.Text,{className:"".concat(w,"-description"),type:"secondary",children:U.description})]});return(0,m.jsx)("div",{className:g()(w,h()(h()({},"".concat(w,"-drag-in"),E),"".concat(w,"-disabled"),pe),j),onDragEnter:H,onDragLeave:F,onDrop:k,"aria-hidden":pe,style:Z,children:(0,m.jsx)(cn.Z.Dragger,y()(y()({showUploadList:!1},ae),{},{ref:ke,style:{padding:0,border:0,background:"transparent"},children:q}))})}var en=x.forwardRef(un);function gn(a,ke){var nn=a.children,mn=a.upload,o=a.rootClassName,ae=x.useRef(null);return x.useImperativeHandle(ke,function(){return ae.current}),(0,m.jsx)(cn.Z,y()(y()({},mn),{},{showUploadList:!1,rootClassName:o,ref:ae,children:nn}))}var on=x.forwardRef(gn),dn,Je=(0,he.vJ)(dn||(dn=d()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.zIndexPopupBase},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.borderRadius},function(a){return a.theme.lineWidthBold},function(a){return a.theme.padding},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.colorPrimaryHover},function(a){return a.theme.prefixCls},function(a){return a.theme.paddingXXS},function(a){return a.theme.fontSizeHeading2},function(a){return a.theme.prefixCls},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.paddingSM},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.colorText},function(a){return a.theme.padding},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.paddingSM},function(a){return a.theme.paddingSM},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.paddingSM},function(a){return a.theme.paddingSM},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.paddingSM},function(a){return a.theme.paddingSM},function(a){return a.theme.fontSizeHeading2},function(a){return a.theme.boxShadowTertiary},function(a){return a.theme.padding},function(a){return a.theme.padding},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),jn=["prefixCls","rootClassName","rootStyle","className","style","items","children","getDropContainer","placeholder","onChange","overflow","disabled","replaceable","classNames","styles"];function bn(a,ke){var nn=a.prefixCls,mn=a.rootClassName,o=a.rootStyle,ae=a.className,j=a.style,Z=a.items,w=a.children,U=a.getDropContainer,oe=a.placeholder,pe=a.onChange,r=a.overflow,p=a.disabled,E=a.replaceable,N=a.classNames,H=N===void 0?{}:N,F=a.styles,k=F===void 0?{}:F,q=A()(a,jn),de=(0,P.wv)(),V=de.direction,ce=de.getPrefixCls,Ce=ce("attachment"),Fe=x.useRef(null),Ke=x.useRef(null);x.useImperativeHandle(ke,function(){return{nativeElement:Fe.current,upload:function(Le){var Ie,me=(Ie=Ke.current)===null||Ie===void 0||(Ie=Ie.nativeElement)===null||Ie===void 0?void 0:Ie.querySelector('input[type="file"]');if(me){var Ee=new DataTransfer;Ee.items.add(Le),me.files=Ee.files,me.dispatchEvent(new Event("change",{bubbles:!0}))}}}});var He=(0,M.C8)([],{value:Z}),rn=T()(He,2),Ae=rn[0],se=rn[1],$=(0,M.zX)(function(_e){se(_e.fileList),pe==null||pe(_e)}),An=y()(y()({},q),{},{fileList:Ae,onChange:$}),pn=function(Le){var Ie=Ae.filter(function(me){return me.uid!==Le.uid});$({file:Le,fileList:Ie})},We=(0,M.zX)(function(_e,Le){var Ie={uid:_e.uid,name:Le.name,size:Le.size,type:Le.type,originFileObj:Le,status:"done",percent:100},me=Ae.map(function(Ee){return Ee.uid===_e.uid?Ie:Ee});$({file:Ie,fileList:me})}),xn,Xe=function(Le,Ie,me){var Ee=typeof oe=="function"?oe(Le):oe;return(0,m.jsx)(en,{placeholder:Ee,upload:An,prefixCls:Ce,className:g()(H.placeholder),style:y()(y()({},k.placeholder),Ie==null?void 0:Ie.style),ref:me})};if(w)xn=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(on,{upload:An,rootClassName:mn,ref:Ke,children:w}),(0,m.jsx)(O,{getDropContainer:U,prefixCls:Ce,className:g()(mn),children:Xe("drop")})]});else{var yn=Ae.length>0;xn=(0,m.jsxs)("div",{className:g()(Ce,h()({},"".concat(Ce,"-rtl"),V==="rtl"),ae,mn),style:y()(y()({},o),j),dir:V||"ltr",ref:Fe,children:[(0,m.jsx)(qe,{prefixCls:Ce,items:Ae,onRemove:pn,onReplace:E?We:void 0,overflow:r,upload:An,listClassName:g()(H.list),listStyle:y()(y()({},k.list),!yn&&{display:"none"}),itemClassName:g()(H.item),itemStyle:y()({},k.item),renderType:a.renderType}),Xe("inline",yn?{style:{display:"none"}}:{},Ke)]})}return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Je,{}),(0,m.jsx)(n.Provider,{value:{disabled:p},children:xn})]})}var Sn=x.forwardRef(bn);Sn.FileCard=ye,Sn.ImageCard=Ge;var fn=Sn},50130:function(an,X,e){"use strict";e.d(X,{L:function(){return P},Z:function(){return x}});var ne=e(97857),h=e.n(ne),R=e(13769),y=e.n(R),b=e(67294),T=e(83962),S=e(76289),A=e(85893),B=["component"],g=b.memo(function(M){var u=(0,T.HJ)(),n=(0,S.TQ)(function(t){return t.onInput}),m=(0,b.useMemo)(function(){if(M.component)return M.component;var t=u;return(t==null?void 0:t[M.code])||function(){return"".concat(M.code," not found")}},[]);if(typeof m=="function"){var O=M.component,l=y()(M,B);return(0,A.jsx)(m,h()(h()({},l),{},{context:{onInput:n}}))}else return m});function x(M){var u=M.cards;return u!=null&&u.length?u.map(function(n,m){var O=(0,A.jsx)(g,h()({index:m,id:M.id,isLast:M.isLast},n),(n==null?void 0:n.id)||m+n.code);return n.code==="Text"?(0,A.jsx)("div",{className:M.className,children:O},m):O}):null}function P(M,u){return{code:M,data:u}}},67369:function(an,X,e){"use strict";e.d(X,{p4:function(){return P},hw:function(){return M},ZP:function(){return x}});var ne=e(67294),h=e(56044),R=e(64057),y=e(68400),b=e.n(y),T=e(9053),S,A=(0,T.vJ)(S||(S=b()([`
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
`])),function(u){return u.theme.prefixCls},function(u){return u.theme.prefixCls},function(u){return u.theme.colorText},function(u){return u.theme.prefixCls},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.colorBorder}),B=A,g=e(85893);function x(u){var n=(0,h.wv)(),m=n.getPrefixCls,O=m("bubble-footer"),l=u.left,t=u.right;return l&&!l.type||t&&!t.type?null:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(B,{}),(0,g.jsxs)("div",{className:O,children:[(0,g.jsx)("div",{className:"".concat(O,"-left"),children:u.left}),(0,g.jsx)("div",{className:"".concat(O,"-right"),children:u.right})]})]})}function P(u){var n=(0,h.wv)(),m=n.getPrefixCls,O=m("bubble-footer-actions");return(0,g.jsx)("div",{className:O,children:u.data.map(function(l,t){return l.children?ne.cloneElement(l.children,{key:t}):(0,g.jsx)(R.Z,{bordered:!1,icon:l.icon,size:"small",onClick:l.onClick},t)})})}function M(u){var n=(0,h.wv)(),m=n.getPrefixCls,O=m("bubble-footer-count");return(0,g.jsx)("div",{className:O,children:u.data.map(function(l){return(0,g.jsxs)("div",{className:"".concat(O,"-item"),children:[l[0],"\uFF1A",l[1]]},l[0])})})}x.Actions=P,x.Count=M},10146:function(an,X,e){"use strict";e.d(X,{Z:function(){return g}});var ne=e(68400),h=e.n(ne),R=e(9053),y=e(56044),b=e(9343),T=e(36674),S=e(85893),A,B=(0,R.vJ)(A||(A=h()([`
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

`])),function(x){return x.theme.prefixCls},function(x){return x.theme.colorFillSecondary},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.colorText},function(x){return x.theme.colorError});function g(x){var P=x.title,M=P===void 0?"Answers have stopped":P,u=x.type,n=u===void 0?"interrupted":u,m=x.desc,O=(0,y.wv)(),l=O.getPrefixCls,t=l("interrupted");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(B,{}),(0,S.jsxs)("div",{className:"".concat(t),children:[(0,S.jsxs)("div",{className:"".concat(t,"-header"),children:[(0,S.jsx)("div",{className:"".concat(t,"-icon-wrapper"),children:n==="interrupted"?(0,S.jsx)(b.Z,{className:"".concat(t,"-header-interrupted")}):(0,S.jsx)(T.Z,{className:"".concat(t,"-header-error")})}),(0,S.jsx)("span",{children:M})]}),m&&(0,S.jsx)("div",{className:"".concat(t,"-desc"),children:m})]})]})}},52471:function(an,X,e){"use strict";e.d(X,{Z:function(){return pe}});var ne=e(97857),h=e.n(ne),R=e(93967),y=e.n(R),b=e(67294),T=e(68400),S=e.n(T),A=e(9053),B,g=(0,A.vJ)(B||(B=S()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorText},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorPrimaryBg},function(r){return r.theme.prefixCls},function(r){return r.theme.colorText},function(r){return r.theme.colorText},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorTextTertiary},function(r){return r.theme.colorTextTertiary},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorTextSecondary},function(r){return r.theme.colorTextSecondary},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorBgBase}),x=e(56044),P=e(66109),M=e(50130),u=e(85893);function n(){var r=(0,x.wv)(),p=r.getPrefixCls,E=p("bubble-loading");return(0,u.jsxs)("div",{className:E,children:[(0,u.jsx)("div",{className:"".concat(E,"-dot1")}),(0,u.jsx)("div",{className:"".concat(E,"-dot2")}),(0,u.jsx)("div",{className:"".concat(E,"-dot3")}),(0,u.jsx)("div",{className:"".concat(E,"-text"),children:"-"})]})}var m=e(9783),O=e.n(m),l=e(68997),t=function(p){var E=p.avatar,N=p.msgStatus,H=p.isAssistant,F=p.prefixCls,k=p.className,q=p.style,de=b.isValidElement(E)?E:(0,u.jsx)(l.Z,h()({},E));return(0,u.jsx)("div",{className:y()("".concat(F,"-avatar"),O()({},"".concat(F,"-avatar-loading"),H&&N==="generating"),k),style:q,children:de})},_=t,c,L=(0,A.vJ)(c||(c=S()([`
.`,`-bubble-avatar {
  display: inline-flex;
  justify-content: center;
  align-self: flex-start;
  margin-right: 6px;

  &-loading .`,`-avatar::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 200%;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABsCAYAAABtuky0AAAAAXNSR0IArs4c6QAACeJJREFUeF7tnUFu20gQRWWLpJwg8CJAbpCdl7lALuHzBDlPLpELZKkbZBfAiyCwJbEpDorh53yVukmaCLvZUhswRHlMi+qnX/Wrupi5WaWvaFbgJporTRe6SrAi+hAkWAlWRCsQ0aUmZSVYEa1ARJealJVgRbQCEV1qUlaCFdEKRHSpSVkJVkQrENGlJmUlWBGtQESXmpSVYEW0AhFdalJWghXRCkR0qUlZCVZEKxDRpSZltbDquu7W4ubmpl4iw6uExWDGQFkKvKuC9VpINpAhwV0NLAeoMe//LCSGAjbmYsdEikX+zghAY94/w+qOQwAbc7GLBDF0UQoUv08c60f+k1pN8hw/CwbsImE5QMl7tYFyrUEDZbvdrna7Xf3p0ycAY3Arnwq7OFgWUAwIwDQ42zpoOLbnjRp9AbsIWJbcZIOhQd1alIZQyCHv2IZA+Rkfe1dY9LBGgAIUea845p8xRIGlFSSAAImP+fe8KCxqWD2gbCoSQPzN8PQ6QEWAI49VC9IJbO5wGC2sEbmJVbQmUHwMYE3qQeepVRKgCCTAwrEN2OzqihIWgdLmQRYM6gEIDUqeNz/b7Xbru7u7PlWZFpQ8Cih8N7C+f/9ef/78GSEywdL1VA8ohD4OdQAFQPKYtUDX+/1+vdlscB7nICgIkOTRCkzluFmdYVTKGgClwx4DAiR+vD0cDvK8gVUUBWCJUlhRZfvcBcyb0YgG1khQWkmiIvkGJH7eKLAsS3lc5XmORRdVAYw8AhZDc+WuWUNhFLBeAcqmJgGUt9DOYLXKYlUxLAHE3wyRnaKXmismWLZOhM5POtwBFMPqDAZCoLLkAMKQDqQwzl3aFV63slpVnYDabre3Dw8P2u0h3AkMwJFHBiXHCJXc5UBdBRACCoD4OCnL1UG3gVJdCFGWVpMLlA6BXFcJLAYlxwILwGzKsobBOQvjxYbBV4Bi88CgCspTUBRCoLbrqJ90jnLBQpGse4XXZ90doBD2kKew8FCMVhRgaVCN+1PdisoYY7IsAyxWlc1gsKrkGD3F64L1WlDPz8/527dv2UgAGisLhTCDkgWGQpCLGiUdDoeyKApWFVv4ILad+2FDG69e/vs/AgVTAWjs/vh9QB0MogG03+/LzWbDBoONBcPyVhAvCpYFFPp8Ev5cxS6D0ccIj9wrBCwGBVgcAl21FfcG4SC9hMDFwBoABccnjwCARwl1NmAaFMJfowRjzDHLskYtlKtYSTZYNlBdMTynC8QnLLgbVN0JXA/3+Vz2XCBpWNyt0PUU71HZuhQals5TrvDX7CpfPCzHnpQGpRXFBoJhsSu0gQKsxvmJqpT7c4U+1F+u9lLtA1TQMOgApe05QKGW0iFPYGnXp2upVVVVdV3XTegzxlSAVJalqeuanZ9u2uo9LO4hestVQcOgY1TMFvp0t1yHPTzn7gRUZaulOlCqQdtnKLSiTuoqXyEwmLIcXXQ9I8FbG52iDodDURSFzfnpBq3upCNPdWCknhJlbTYb/Mxm0avtdls/PDwcv337Vj8+PnrpsNtqpSAGw+L+bBuHgMVgoCStKPwu/g6Dwmais5v+8vJi3rx5gxAIqJ2ifvz4IUOeAmv1+PgIZXkxFQzNO6yenh+3kdiid66vLMsiz3Nd9GpQyCU85KJrKec+1dPT0/H9+/fYKeYRNPxdb+5Pq8srLItN13MTOvTBisNI6PDX5LSqqhpFrdfytJn7a1RBZqKD1baSXLD0FJNtZNqb+wsGq8emc66yKqotfG01FU8u8ScfLk6HPt1C0lv11c+fP4+73e748ePHs466fBB82fSgOcuiKlee0k1ZqMqWp7rJ2qqqVuv1Woc+I/ZcnF+e59bG7O/fv6v7+/uTWgqGgiaXmg9CSFBe3aDKVa4OhauOQt5i5XWTSVjUto3Ero9zFW8gnijq169f1YcPH9Ch0DPtiwDlDZZDVbbwB1ico/iYt+4b4KQovd2B3V6dn7Tr0z0/htUVvj7rKdcWx+wGQ+Wqs1bS09NTJl/39/cCgq25zVR0A5oYd5buxHq95k7DkPMTWGzPbT2/YIVv316UT1hwfjzoorfkGdBGNWptFl3eG0/P9oFis3E2Cq1u61mUory0m3qsOlwcN1+Rl9hQaFOB0NksJqmqMQjGmFL6fvKV53nfzN/JzHoMoGbPWT0O0DY/oSGJsvS8H4+P8QaiLL4wMuT6uIXk7E6EvkGuL+x5rbN6jAXD4n0phL4TU/F3liWzzfm5pmfF+enRZ1vo07UU7nj03koaA222nDUQAgFLuz+B1OUqY0wulIwxty2srvBtuxO2ft+YLXnb/VWLBjVrGHTAQs7hekmHP5tV1w1ayU+y3THGUAw5v2Bd9DFq8tLI7YHFqoJdB6AmTxljiizLeN7vbG+K7vTolLTf7007lQTFcejr3ZZfQh01BG+WMNizC8x3eTRtpZeXl+L29rbYbDadwiT84VYdylUy6FJnWWa7JUebCfwOuz7uUCDkBdvuGALjtTfoUFYfLLbukqckXSH86W0P3iS0bRyi1wdA8qg7E1GBmi1nDcxX6EI43+12xd3dHbtCKZbWeZ7zBC1MgXaADE6HP7Sg9OxEByqG8Dd7UTyQs/RWiG2fqmnUlmUpobrO8/yso67uUGQ12RTFWyiLd35LCIOYAdR1FmD13Zaji2A9L6FHxmyhD5CC7fZOyVWzK6v5GP/9p0x1T9Bm37GHxTlNbtDWN2ZzH1CbCN0951qKVdW899B7U1OgzeIGCRTyIk/aMizddtITSjiPx8G0Hdd9Pp6bYCVFGfq81FkOYDzEyWD47kXeRmFFdMD+/PlzfPfuHUPj0eiTFtLXr19XX758iR7UbG6wq2D//xed+2bYeaqJ7/hg1WsY7AzZkjt7fbGGvlDK4pDIt/HYZts1KDmXwxvnIwbEm4admi4B1OzKsoRCBsYqYmAApW/Q5rEwrSA8PzMSlwLKC6wBYMhh2jXytWmToGf5uBF70pS9JFDeYI0AxmpyKQuqYfVoOBcX+rzlLF1LOG5I0HBc5YRWkIYXbf00tuaarc5yXYAFmFZ4HywG1JlOHMRY6I4F5TUM8kU5gHVr7ngDHOJOwt2l5SYXQO/K6uRA/1ed9mdD13KVgILlrJ4c9ppoEGVf71Vv0PHLQ5/mf/Eao/6GhEbJOXgcddKV/dJiYF3Zuk96uwnWpGULc1KCFWbdJ71qgjVp2cKclGCFWfdJr5pgTVq2MCclWGHWfdKrJliTli3MSQlWmHWf9KoJ1qRlC3NSghVm3Se9aoI1adnCnJRghVn3Sa+aYE1atjAnJVhh1n3SqyZYk5YtzEkJVph1n/SqCdakZQtzUoIVZt0nvWqCNWnZwpyUYIVZ90mvmmBNWrYwJ/0HHiXJuMcZMY0AAAAASUVORK5CYII=');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(-45deg);
    filter: blur(2px);
    animation: light_sweeping 1.5s infinite linear;
  }
}

@keyframes light_sweeping {
  0% {
    transform: translate(-40%, -80%);
    opacity: 0.2;
  }

  45% {
    transform: translate(20%, 20%);
    opacity: 0.8;
  }

  100% {
    transform: translate(40%, 80%);
    opacity: 0.2;
  }
}

`])),function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls}),ie=b.createContext({}),le=function(p){var E=p.isLast,N=p.className,H=p.rootClassName,F=p.style,k=p.classNames,q=k===void 0?{}:k,de=p.styles,V=de===void 0?{}:de,ce=p.avatar,Ce=p.content,Fe=Ce===void 0?"":Ce,Ke=p.cards,He=p.msgStatus,rn=p.id,Ae=p.role,se=p.variant,$={assistant:"start",user:"end"}[Ae]||"start",An=(0,x.wv)(),pn=An.getPrefixCls,We=pn("bubble"),xn=y()(We,H,N,"".concat(We,"-").concat($)),Xe,yn=!(Fe!=null&&Fe.length)&&!(Ke!=null&&Ke.length);p.msgStatus==="generating"&&yn?Xe=(0,u.jsx)(n,{}):Xe=Fe?(0,u.jsx)(P.Z,{content:Fe,cursor:p.msgStatus==="generating"}):null;var _e=$==="assistant"||$==="start",Le="".concat(We,"-content-").concat(se||(_e?"borderless":"filled")),Ie=(0,u.jsxs)("div",{style:!_e&&Xe?{flexDirection:"column-reverse"}:{},className:"".concat(We,"-content-wrapper"),children:[(0,u.jsx)(M.Z,{cards:Ke,id:rn,isLast:E,className:y()("".concat(We,"-content"),"".concat(We,"-content-wrapper-card"),Le,q.content)}),Xe&&(0,u.jsx)("div",{style:h()({},V.content),className:y()("".concat(We,"-content"),"".concat(We,"-content-wrapper-card"),Le,q.content),children:Xe})]});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(g,{}),(0,u.jsx)(L,{}),(0,u.jsxs)("div",{style:F,className:xn,id:rn,"data-role":Ae,children:[ce&&(0,u.jsx)(_,{avatar:ce,msgStatus:He,isAssistant:_e,prefixCls:We,className:q.avatar,style:V.avatar}),Ie]})]})},d=b.memo(le),he=e(5574),G=e.n(he),Y=e(13769),te=e.n(Y),ve=e(52677),Oe=e.n(ve),C=e(15009),Be=e.n(C),Q=e(99289),xe=e.n(Q),ue,De,re;var Ue={damping:.7,stiffness:.05,mass:1.25},we=70,Ye=1e3/60,Ge=350,Ne=!1;(ue=globalThis.document)===null||ue===void 0||ue.addEventListener("mousedown",function(){Ne=!0}),(De=globalThis.document)===null||De===void 0||De.addEventListener("mouseup",function(){Ne=!1}),(re=globalThis.document)===null||re===void 0||re.addEventListener("click",function(){Ne=!1});var vn=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=(0,b.useState)(!1),N=G()(E,2),H=N[0],F=N[1],k=(0,b.useState)(p.enabled!==!1&&p.initial!==!1),q=G()(k,2),de=q[0],V=q[1],ce=(0,b.useState)(!1),Ce=G()(ce,2),Fe=Ce[0],Ke=Ce[1],He=(0,b.useRef)(null);He.current=p;var rn=(0,b.useCallback)(function(){var _e;if(!Ne)return!1;var Le=window.getSelection();if(!Le||!Le.rangeCount)return!1;var Ie=Le.getRangeAt(0);return Ie.commonAncestorContainer.contains(Xe.current)||((_e=Xe.current)===null||_e===void 0?void 0:_e.contains(Ie.commonAncestorContainer))},[]),Ae=(0,b.useCallback)(function(_e){$.isAtBottom=_e,V(_e)},[]),se=(0,b.useCallback)(function(_e){$.escapedFromLock=_e,F(_e)},[]),$=(0,b.useMemo)(function(){var _e;return{escapedFromLock:H,isAtBottom:de,resizeDifference:0,accumulated:0,velocity:0,listeners:new Set,get scrollTop(){var Le,Ie;return(Le=(Ie=Xe.current)===null||Ie===void 0?void 0:Ie.scrollTop)!==null&&Le!==void 0?Le:0},set scrollTop(Le){Xe.current&&(Xe.current.scrollTop=Le,$.ignoreScrollToTop=Xe.current.scrollTop)},get targetScrollTop(){return!Xe.current||!yn.current?0:Xe.current.scrollHeight-1-Xe.current.clientHeight},get calculatedTargetScrollTop(){var Le;if(!Xe.current||!yn.current)return 0;var Ie=this.targetScrollTop;if(!p.targetScrollTop)return Ie;if(((Le=_e)===null||Le===void 0?void 0:Le.targetScrollTop)===Ie)return _e.calculatedScrollTop;var me=Math.max(Math.min(p.targetScrollTop(Ie,{scrollElement:Xe.current,contentElement:yn.current}),Ie),0);return _e={targetScrollTop:Ie,calculatedScrollTop:me},requestAnimationFrame(function(){_e=void 0}),me},get scrollDifference(){return this.calculatedTargetScrollTop-this.scrollTop},get isNearBottom(){return this.scrollDifference<=we}}},[]),An=(0,b.useCallback)(function(){var _e,Le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};typeof Le=="string"&&(Le={animation:Le}),Le.preserveScrollPosition||Ae(!0);var Ie=Date.now()+(Number(Le.wait)||0),me=tn(He.current,Le.animation),Ee=Le,hn=Ee.ignoreEscapes,Cn=hn===void 0?!1:hn,In,Tn=$.calculatedTargetScrollTop;if(Le.duration instanceof Promise)Le.duration.finally(function(){In=Date.now()});else{var On;In=Ie+((On=Le.duration)!==null&&On!==void 0?On:0)}var Bn=function(){var wn=xe()(Be()().mark(function Kn(){var Mn;return Be()().wrap(function(Nn){for(;;)switch(Nn.prev=Nn.next){case 0:return Mn=new Promise(requestAnimationFrame).then(function(){var _n;if(!$.isAtBottom)return $.animation=void 0,!1;var Un=$.scrollTop,Fn=performance.now(),Rn=(Fn-((_n=$.lastTick)!==null&&_n!==void 0?_n:Fn))/Ye;if($.animation||($.animation={behavior:me,promise:Mn,ignoreEscapes:Cn}),$.animation.behavior===me&&($.lastTick=Fn),rn()||Ie>Date.now())return Bn();if(Un<Math.min(Tn,$.calculatedTargetScrollTop)){var En;if(((En=$.animation)===null||En===void 0?void 0:En.behavior)===me){if(me==="instant")return $.scrollTop=$.calculatedTargetScrollTop,Bn();$.velocity=(me.damping*$.velocity+me.stiffness*$.scrollDifference)/me.mass,$.accumulated+=$.velocity*Rn,$.scrollTop+=$.accumulated,$.scrollTop!==Un&&($.accumulated=0)}return Bn()}return In>Date.now()?(Tn=$.calculatedTargetScrollTop,Bn()):($.animation=void 0,$.scrollTop<$.calculatedTargetScrollTop?An({animation:tn(He.current,He.current.resize),ignoreEscapes:Cn,duration:Math.max(0,In-Date.now())||void 0}):$.isAtBottom)}),Nn.abrupt("return",Mn.then(function(_n){return requestAnimationFrame(function(){$.animation||($.lastTick=void 0,$.velocity=0)}),_n}));case 2:case"end":return Nn.stop()}},Kn)}));return function(){return wn.apply(this,arguments)}}();return Le.wait!==!0&&($.animation=void 0),((_e=$.animation)===null||_e===void 0?void 0:_e.behavior)===me?$.animation.promise:Bn()},[Ae,rn,$]),pn=(0,b.useCallback)(function(){se(!0),Ae(!1)},[se,Ae]),We=(0,b.useCallback)(function(_e){var Le=_e.target;if(Le===Xe.current){var Ie=$.scrollTop,me=$.ignoreScrollToTop,Ee=$.lastScrollTop,hn=Ee===void 0?Ie:Ee;$.lastScrollTop=Ie,$.ignoreScrollToTop=void 0,me&&me>Ie&&(hn=me),Ke($.isNearBottom),setTimeout(function(){var Cn;if(!($.resizeDifference||Ie===me)){if(rn()){se(!0),Ae(!1);return}var In=Ie>hn,Tn=Ie<hn;if((Cn=$.animation)!==null&&Cn!==void 0&&Cn.ignoreEscapes){$.scrollTop=hn;return}Tn&&(se(!0),Ae(!1)),In&&se(!1),!$.escapedFromLock&&$.isNearBottom&&Ae(!0)}},1)}},[se,Ae,rn,$]),xn=(0,b.useCallback)(function(_e){for(var Le,Ie=_e.target,me=_e.deltaY,Ee=Ie;!["scroll","auto"].includes(getComputedStyle(Ee).overflow);){if(!Ee.parentElement)return;Ee=Ee.parentElement}Ee===Xe.current&&me<0&&Xe.current.scrollHeight>Xe.current.clientHeight&&!((Le=$.animation)!==null&&Le!==void 0&&Le.ignoreEscapes)&&(se(!0),Ae(!1))},[se,Ae,$]),Xe=$e(function(_e){var Le,Ie;(Le=Xe.current)===null||Le===void 0||Le.removeEventListener("scroll",We),(Ie=Xe.current)===null||Ie===void 0||Ie.removeEventListener("wheel",xn),_e==null||_e.addEventListener("scroll",We,{passive:!0}),_e==null||_e.addEventListener("wheel",xn,{passive:!0})},[]),yn=$e(function(_e){var Le,Ie;if((Le=$.resizeObserver)===null||Le===void 0||Le.disconnect(),!!_e){var me;$.resizeObserver=new ResizeObserver(function(Ee){var hn,Cn=G()(Ee,1),In=Cn[0],Tn=In.contentRect.height,On=Tn-((hn=me)!==null&&hn!==void 0?hn:Tn);if($.resizeDifference=On,$.scrollTop>$.targetScrollTop&&($.scrollTop=$.targetScrollTop),Ke($.isNearBottom),On>=0){if(He.current.enabled!==!1){var Bn=tn(He.current,me?He.current.resize:He.current.initial);An({animation:Bn,wait:!0,preserveScrollPosition:!0,duration:Bn==="instant"?void 0:Ge})}}else $.isNearBottom&&(se(!1),Ae(!0));me=Tn,requestAnimationFrame(function(){setTimeout(function(){$.resizeDifference===On&&($.resizeDifference=0)},1)})}),(Ie=$.resizeObserver)===null||Ie===void 0||Ie.observe(_e)}},[]);return{contentRef:yn,scrollRef:Xe,scrollToBottom:An,stopScroll:pn,isAtBottom:de||Fe,isNearBottom:Fe,escapedFromLock:H,state:$}};function $e(r,p){var E=(0,b.useCallback)(function(N){return E.current=N,r(N)},p);return E}var sn=new Map;function tn(){for(var r=h()({},Ue),p=!1,E=arguments.length,N=new Array(E),H=0;H<E;H++)N[H]=arguments[H];for(var F=0,k=N;F<k.length;F++){var q,de,V,ce=k[F];if(ce==="instant"){p=!0;continue}Oe()(ce)==="object"&&(p=!1,r.damping=(q=ce.damping)!==null&&q!==void 0?q:r.damping,r.stiffness=(de=ce.stiffness)!==null&&de!==void 0?de:r.stiffness,r.mass=(V=ce.mass)!==null&&V!==void 0?V:r.mass)}var Ce=JSON.stringify(r);return sn.has(Ce)||sn.set(Ce,Object.freeze(r)),p?"instant":sn.get(Ce)}var Ze=["instance","children","resize","initial","mass","damping","stiffness","targetScrollTop","contextRef"],Ln=["children","scrollClassName"];var I=(0,b.createContext)(null),ye=typeof window!="undefined"?b.useLayoutEffect:b.useEffect;function Me(r){var p=r.instance,E=r.children,N=r.resize,H=r.initial,F=r.mass,k=r.damping,q=r.stiffness,de=r.targetScrollTop,V=r.contextRef,ce=te()(r,Ze),Ce=(0,b.useRef)(null),Fe=b.useCallback(function(_e,Le){var Ie,me,Ee=(Ie=yn==null?void 0:yn.targetScrollTop)!==null&&Ie!==void 0?Ie:de;return(me=Ee==null?void 0:Ee(_e,Le))!==null&&me!==void 0?me:_e},[de]),Ke=ce.enabled,He=Ke===void 0?!0:Ke,rn=vn({enabled:He,mass:F,damping:k,stiffness:q,resize:N,initial:H,targetScrollTop:Fe}),Ae=p!=null?p:rn,se=Ae.scrollRef,$=Ae.contentRef,An=Ae.scrollToBottom,pn=Ae.stopScroll,We=Ae.isAtBottom,xn=Ae.escapedFromLock,Xe=Ae.state,yn=(0,b.useMemo)(function(){return{scrollToBottom:An,stopScroll:pn,scrollRef:se,isAtBottom:We,escapedFromLock:xn,contentRef:$,state:Xe,get targetScrollTop(){return Ce.current},set targetScrollTop(_e){Ce.current=_e}}},[An,We,$,se,pn,xn,Xe]);return(0,b.useImperativeHandle)(V,function(){return yn},[yn]),ye(function(){se.current&&getComputedStyle(se.current).overflow==="visible"&&(se.current.style.overflow="auto")},[]),(0,u.jsx)(I.Provider,{value:yn,children:(0,u.jsx)("div",h()(h()({},ce),{},{children:typeof E=="function"?E(yn):E}))})}(function(r){function p(E){var N=E.children,H=E.scrollClassName,F=te()(E,Ln),k=qe();return(0,u.jsx)("div",{ref:k.scrollRef,style:{height:"100%",width:"100%",scrollbarGutter:"stable both-edges"},className:H,children:(0,u.jsx)("div",h()(h()({},F),{},{ref:k.contentRef,children:typeof N=="function"?N(k):N}))})}r.Content=p})(Me||(Me={}));function qe(){var r=(0,b.useContext)(I);if(!r)throw new Error("use-stick-to-bottom component context must be used within a StickToBottom component");return r}var ln=e(64057),Qe=e(25109),cn=function(p,E){var N=(0,x.wv)(),H=N.getPrefixCls,F=qe(),k=F.isAtBottom,q=F.scrollToBottom;b.useImperativeHandle(E,function(){return{scrollToBottom:function(V){function ce(Ce){return V.apply(this,arguments)}return ce.toString=function(){return V.toString()},ce}(function(V){V=V||{animation:"instant"},q(V)})}});var de=H("bubble-list-scroll-to-bottom");return(0,u.jsx)("div",{className:y()(de,"".concat(de,"-").concat(k?"hide":"show")),children:(0,u.jsx)(ln.Z,{icon:(0,u.jsx)(Qe.Z,{}),shape:"circle",onClick:function(){return q({animation:"instant"})}})})},un=b.forwardRef(cn),en,gn=(0,A.vJ)(en||(en=S()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorPrimaryBorder},function(r){return r.theme.colorPrimaryBg},function(r){return r.theme.colorPrimary}),on=e(42532),dn=e(45908),Je=e(78234),jn=e(19632),bn=e.n(jn),Sn=e(64599),fn=e.n(Sn),a=e(73935),ke=function(p,E){var N=(0,b.useState)(1),H=G()(N,2),F=H[0],k=H[1],q=(0,b.useMemo)(function(){var de=[],V=[],ce=fn()(p),Ce;try{for(ce.s();!(Ce=ce.n()).done;){var Fe=Ce.value;Fe.history?de.push(Fe):V.push(Fe)}}catch(Ke){ce.e(Ke)}finally{ce.f()}return[].concat(bn()(de.slice(-F*10)),V)},[p,F]);return E!=null&&E.enable?{items:q,noMore:q.length===p.length,loadMore:function(V){return new Promise(function(ce){setTimeout(function(){var Ce,Fe=V==null?void 0:V.current,Ke=(Ce=Fe==null?void 0:Fe.scrollHeight)!==null&&Ce!==void 0?Ce:0;if((0,a.flushSync)(function(){k(F+1)}),Fe){var He=Fe.scrollHeight;Fe.scrollTop+=He-Ke}ce()},1e3)})}}:{items:p,noMore:!0,loadMore:function(V){return Promise.resolve()}}},nn=e(57381),mn=["key"];function o(r){var p=r.items,E=r.paginationItems,N=r.noMore,H=r.loadMore,F=r.prefixCls,k=r.listClassName,q=r.children,de=qe(),V=de.scrollRef,ce=(0,b.useCallback)(function(){return H(V)},[H,V]);return(0,u.jsxs)(Me.Content,{className:y()("".concat(F),k),children:[N?null:(0,u.jsx)(ae,{handleLoadMore:ce}),q||E.map(function(Ce,Fe){var Ke=Ce.key,He=te()(Ce,mn),rn=Fe===p.length-1;return(0,b.createElement)(d,h()(h()({},He),{},{isLast:rn,key:He.id||Ke}))})]})}function ae(r){var p=r.handleLoadMore,E=(0,b.useRef)(null),N=(0,on.Z)(E),H=G()(N,1),F=H[0],k=(0,b.useState)(!1),q=G()(k,2),de=q[0],V=q[1],ce=(0,dn.Z)(F),Ce=(0,x.wv)(),Fe=Ce.getPrefixCls,Ke=Fe("bubble-list");return(0,b.useEffect)(function(){F&&ce===void 0||de||F&&(V(!0),p().finally(function(){V(!1)}))},[ce,F,de,p]),(0,u.jsx)("div",{ref:E,className:"".concat(Ke,"-load-more"),children:(0,u.jsx)(nn.Z,{spinning:!0})})}var j=function(p,E){var N,H,F=p.items,k=F===void 0?[]:F,q=p.smooth,de=q===void 0?!0:q,V=(0,b.useState)(!1),ce=G()(V,2),Ce=ce[0],Fe=ce[1],Ke=b.useRef(),He=(0,x.wv)(),rn=He.getPrefixCls,Ae=rn("bubble-list");b.useImperativeHandle(E,function(){return{scrollToBottom:function(){Ke.current.scrollToBottom()}}}),(0,Je.Z)(function(){Fe(!0)});var se=Ce&&de?"smooth":"instant",$=ke(k,{enable:p.pagination}),An=$.items,pn=$.noMore,We=$.loadMore;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(gn,{}),(0,u.jsxs)(Me,{enabled:!!de||!Ce,id:p.id,className:y()("".concat(Ae,"-wrapper"),(N=p.classNames)===null||N===void 0?void 0:N.wrapper),resize:se,initial:"instant",style:p.style,children:[(0,u.jsx)(o,{items:k,paginationItems:An,noMore:pn,loadMore:We,prefixCls:Ae,listClassName:(H=p.classNames)===null||H===void 0?void 0:H.list,children:p.children}),(0,u.jsx)(un,{ref:Ke})]})]})},Z=b.forwardRef(j),w=Z,U=e(67369),oe=e(10146);d.List=w,d.Spin=n,d.Footer=U.ZP,d.Interrupted=oe.Z;var pe=d},76289:function(an,X,e){"use strict";e.d(X,{TQ:function(){return u},vi:function(){return P}});var ne=e(97857),h=e.n(ne),R=e(13769),y=e.n(R),b=e(5574),T=e.n(b),S=e(67294),A=e(79785),B=e(59214),g=e(85893),x=["children"];function P(n){var m=(0,A.Z)([]),O=T()(m,3),l=O[0],t=O[1],_=O[2],c=(0,A.Z)("0"),L=T()(c,3),ie=L[0],le=L[1],d=L[2],he=(0,A.Z)(0),G=T()(he,3),Y=G[0],te=G[1],ve=G[2],Oe=(0,A.Z)([]),C=T()(Oe,3),Be=C[0],Q=C[1],xe=C[2],ue=(0,A.Z)(!1),De=T()(ue,3),re=De[0],Ue=De[1],we=De[2],Ye=(0,A.Z)(!1),Ge=T()(Ye,3),Ne=Ge[0],vn=Ge[1],$e=Ge[2],sn=(0,A.Z)(!0),tn=T()(sn,3),Ze=tn[0],Ln=tn[1],I=tn[2],ye=n.children,Me=y()(n,x),qe=h()({sessionList:l,setSessionList:t,getSessionList:_,currentSessionKey:ie,setCurrentSessionKey:le,getCurrentSessionKey:d,messages:Be,setMessages:Q,getMessages:xe,loading:re,setLoading:Ue,getLoading:we,disabled:Ne,setDisabled:vn,getDisabled:$e,sessionListShow:Ze,setSessionListShow:Ln,getSessionListShow:I,currentRegenerateIndex:Y,setCurrentRegenerateIndex:te,getCurrentRegenerateIndex:ve},Me);return(0,g.jsx)(M.Provider,{value:qe,children:ye})}var M=(0,B.createContext)(void 0);function u(n){try{var m=(0,B.useContextSelector)(M,n);return m}catch(O){return{}}}},37254:function(an,X,e){"use strict";e.d(X,{G:function(){return h}});var ne=e(76289);function h(){var R=(0,ne.TQ)(function(g){return{loading:g.loading,getLoading:g.getLoading,disabled:g.disabled,getDisabled:g.getDisabled,setLoading:g.setLoading,setDisabled:g.setDisabled}}),y=R.loading,b=R.disabled,T=R.setLoading,S=R.setDisabled,A=R.getLoading,B=R.getDisabled;return{loading:y,disabled:b,setLoading:T,setDisabled:S,getLoading:A,getDisabled:B}}},4421:function(an,X,e){"use strict";e.d(X,{y:function(){return S}});var ne=e(19632),h=e.n(ne),R=e(97857),y=e.n(R),b=e(67294),T=e(76289);function S(){var A=(0,T.TQ)(function(m){return{messages:m.messages,setMessages:m.setMessages,getMessages:m.getMessages}}),B=A.messages,g=A.setMessages,x=A.getMessages,P=b.useCallback(function(){var m,O=((m=arguments.length<=0?void 0:arguments[0])===null||m===void 0?void 0:m.id)||(arguments.length<=0?void 0:arguments[0]),l=(arguments.length<=1?void 0:arguments[1])||(arguments.length<=0?void 0:arguments[0]);g==null||g(function(t){var _=t.findIndex(function(L){return L.id===O});if(_>-1){var c=y()(y()({},t[_]),l);return[].concat(h()(t.slice(0,_)),[c],h()(t.slice(_+1)))}else return[].concat(h()(t),[l])})},[]),M=b.useCallback(function(m){g(function(O){return O.filter(function(l){return l.id!==m.id})})},[]),u=b.useCallback(function(){g([])},[]),n=b.useCallback(function(m){return x().find(function(O){return O.id===m})},[]);return{messages:B,getMessage:n,setMessages:g,getMessages:x,updateMessage:P,removeMessage:M,removeAllMessages:u}}},61316:function(an,X,e){"use strict";e.d(X,{x:function(){return B}});var ne=e(97857),h=e.n(ne),R=e(19632),y=e.n(R),b=e(67294),T=e(76289),S=e(88773),A=e(73935);function B(){var g=(0,T.TQ)(function(Y){return{getCurrentSessionKey:Y.getCurrentSessionKey,currentRegenerateIndex:Y.currentRegenerateIndex,setCurrentRegenerateIndex:Y.setCurrentRegenerateIndex,getCurrentRegenerateIndex:Y.getCurrentRegenerateIndex,sessionListShow:Y.sessionListShow,setSessionListShow:Y.setSessionListShow,sessionList:Y.sessionList,setSessionList:Y.setSessionList,currentSessionKey:Y.currentSessionKey,setCurrentSessionKey:Y.setCurrentSessionKey,getSessionList:Y.getSessionList}}),x=g.getCurrentSessionKey,P=g.sessionList,M=g.setSessionList,u=g.currentSessionKey,n=g.setCurrentSessionKey,m=g.sessionListShow,O=g.setSessionListShow,l=g.currentRegenerateIndex,t=g.setCurrentRegenerateIndex,_=g.getCurrentRegenerateIndex,c=g.getSessionList,L=b.useCallback(function(){var Y=(0,S.Z)(),te={label:Date.now().toString(),key:Y,messages:[[]]};return A.flushSync(function(){M(function(ve){var Oe=[].concat(y()(ve),[te]);return Oe}),n(Y)}),Y},[]),ie=b.useCallback(function(Y){M(function(te){var ve=te.filter(function(Oe){return Oe.key!==Y});return ve})},[]),le=b.useCallback(function(Y){var te=x(),ve=_();M(function(Oe){return Oe.map(function(C){return C.key===te?(C.messages[ve]=Y,h()({},C)):C})})},[]),d=b.useCallback(function(Y,te){var ve;return(ve=c().find(function(Oe){return Oe.key===Y}))===null||ve===void 0?void 0:ve.messages[te]},[]),he=b.useCallback(function(){return{sessionList:c(),currentSessionKey:x(),currentRegenerateIndex:_()}},[]),G=b.useCallback(function(Y){var te=Y.sessionList,ve=Y.currentSessionKey,Oe=Y.currentRegenerateIndex;M(te),n(ve),t(Oe)},[]);return{currentRegenerateIndex:l,setCurrentRegenerateIndex:t,getCurrentRegenerateIndex:_,sessionList:P,setSessionList:M,getSessionList:c,currentSessionKey:u,setCurrentSessionKey:n,sessionListShow:m,setSessionListShow:O,createSession:L,deleteSession:ie,updateSessionMessages:le,getMessagesBySession:d,getSession:he,updateSession:G}}},29041:function(an,X,e){"use strict";e.d(X,{ZP:function(){return ae}});var ne=e(97857),h=e.n(ne),R=e(13769),y=e.n(R),b=e(5574),T=e.n(b),S=e(67294),A=e(93967),B=e.n(A),g=e(56044),x=e(85265),P=e(17909),M=e(76289),u=e(68400),n=e.n(u),m=e(9053),O,l=(0,m.vJ)(O||(O=n()([`

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
`])),function(j){return j.theme.prefixCls},function(j){return j.theme.fontFamily},function(j){return j.theme.colorBgBase},function(j){return j.theme.colorBgBase},function(j){return j.theme.colorBgBase},function(j){return j.theme.colorFillTertiary}),t=e(85893);function _(j){var Z=(0,M.TQ)(function(E){return{sessionListShow:E.sessionListShow,setSessionListShow:E.setSessionListShow}}),w=Z.sessionListShow,U=Z.setSessionListShow,oe=(0,g.wv)(),pe=oe.getPrefixCls,r=pe("chat-anywhere-layout"),p=L();return(0,S.useEffect)(function(){U(!p)},[p]),j.left?p?(0,t.jsx)(x.Z,{width:"80vw",styles:{body:{padding:0}},open:w,onClose:function(){U(!1)},title:null,closable:!1,placement:"left",children:(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:j.left})}):(0,t.jsx)("div",{className:B()("".concat(r,"-left"),w?"":"".concat(r,"-left-hide")),children:j.left}):null}function c(j){var Z=(0,g.wv)(),w=Z.getPrefixCls,U=w("chat-anywhere-layout"),oe=(0,M.TQ)(function(pe){return pe.uiConfig});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{}),(0,t.jsx)("div",{className:U,children:(0,t.jsxs)("div",{className:"".concat(U,"-main"),children:[(0,t.jsx)(_,h()({},j)),(0,t.jsxs)("div",{className:"".concat(U,"-right"),style:{background:oe==null?void 0:oe.background},children:[j.top,j.right]})]})})]})}var L=function(){var Z=(0,P.Z)(),w=(0,M.TQ)(function(U){return U.uiConfig});return!Z.md||(w==null?void 0:w.narrowScreen)},ie=e(9368),le=e(64057),d=e(21403),he=e(61316),G=e(4421),Y,te=(0,m.vJ)(Y||(Y=n()([`
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

`])),function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls}),ve=e(50287),Oe=e(67392),C=e(13660),Be=e(12624);function Q(){var j=(0,g.wv)(),Z=j.getPrefixCls,w=Z("chat-anywhere-session-list"),U=(0,M.TQ)(function(oe){return oe.sessionListShow});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(te,{}),(0,t.jsxs)("div",{className:B()("".concat(w),U?"":"".concat(w,"-hide")),children:[(0,t.jsx)(ue,{}),(0,t.jsx)(xe,{})]})]})}function xe(){var j=(0,g.wv)(),Z=j.getPrefixCls,w=Z("chat-anywhere-session-list"),U=(0,he.x)(),oe=U.currentSessionKey,pe=U.setCurrentSessionKey,r=U.currentRegenerateIndex,p=U.sessionList,E=U.getMessagesBySession,N=U.setSessionListShow,H=(0,G.y)(),F=H.setMessages,k=(0,M.TQ)(function(V){return V.getLoading}),q=(0,M.TQ)(function(V){return V.onSessionKeyChange}),de=L();return(0,S.useEffect)(function(){var V=E(oe,r);F(V)},[oe,r]),(0,t.jsx)("div",{className:"".concat(w,"-session"),children:(0,t.jsx)(ie.Z,{menu:[{key:"delete",icon:(0,t.jsx)(ve.Z,{}),danger:!0,onClick:function(ce){}}],activeKey:oe,items:p,onActiveChange:function(ce){k()||(de&&N(!1),requestIdleCallback(function(){pe(ce),q(ce)}))}})})}function ue(){var j=(0,g.wv)(),Z=j.getPrefixCls,w=Z("chat-anywhere-session-list"),U=(0,he.x)(),oe=U.currentSessionKey,pe=U.setCurrentSessionKey,r=U.deleteSession,p=U.createSession,E=U.sessionList,N=U.sessionListShow,H=U.setSessionListShow,F=(0,M.TQ)(function(q){return q.uiConfig}),k=L();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"".concat(w,"-logo"),children:[F==null?void 0:F.logo,(0,t.jsx)(le.Z,{bordered:!1,onClick:function(){return H(!N)},icon:N?(0,t.jsx)(Oe.Z,{}):(0,t.jsx)(C.Z,{})})]}),(0,t.jsx)("div",{className:"".concat(w,"-adder"),children:(0,t.jsx)(d.Z,{type:"primary",block:!0,icon:(0,t.jsx)(Be.Z,{}),onClick:function(){k&&H(!1),p()},children:"New Session"})})]})}var De=e(9783),re=e.n(De),Ue=e(52471),we=e(19632),Ye=e.n(we),Ge=e(52677),Ne=e.n(Ge),vn=e(15009),$e=e.n(vn),sn=e(99289),tn=e.n(sn),Ze=e(41154),Ln=e(66672),I=e(50993),ye=e(37254),Me,qe=(0,m.vJ)(Me||(Me=n()([`
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
`])),function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls}),ln=e(86578),Qe=e(7654),cn=e(92053),un=e(86250),en=["trigger"];function gn(j){var Z=j.uploadPropsList,w=(0,g.wv)(),U=w.getPrefixCls,oe=U("chat-anywhere-sender"),pe=(0,S.useState)(!1),r=T()(pe,2),p=r[0],E=r[1],N=(0,S.useRef)([]),H=(0,S.useMemo)(function(){return Z.map(function(k,q){return(0,t.jsx)("div",{onClick:function(){var V;(V=N.current[q])===null||V===void 0||V.click(),E(!1)},children:k.trigger},q)})},[Z]),F=(0,S.useMemo)(function(){return Z.map(function(k,q){var de=k.trigger,V=y()(k,en);return(0,t.jsx)(Ze.Z,h()(h()({},V),{},{children:(0,t.jsx)("div",{ref:function(Ce){return N.current[q]=Ce}})}),q)})},[Z]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Qe.Z,{placement:"bottomLeft",open:p,onOpenChange:E,content:(0,t.jsx)(un.Z,{vertical:!0,children:H}),trigger:"click",styles:{body:{padding:4}},children:(0,t.jsx)(le.Z,{icon:(0,t.jsx)(cn.Z,{}),bordered:!1})}),(0,t.jsx)("div",{className:"".concat(oe,"-upload-hidden-nodes"),children:F})]})}var on=(0,S.forwardRef)(function(j,Z){var w=S.useState(""),U=T()(w,2),oe=U[0],pe=U[1],r=(0,ye.G)(),p=(0,M.TQ)(function(me){return me.onUpload.map(function(Ee){return h()(h()({},Ee),{},{disabled:Ee.disabled||r.disabled})})}),E=new Array((p==null?void 0:p.length)||0).fill([]),N=(0,S.useState)(!1),H=T()(N,2),F=H[0],k=H[1],q=S.useState(E),de=T()(q,2),V=de[0],ce=de[1],Ce=(0,S.useRef)(E);(0,S.useEffect)(function(){ce(E)},[E.length]),(0,S.useEffect)(function(){Ce.current=V},[V]);var Fe=(0,M.TQ)(function(me){return me.uiConfig}),Ke=(0,g.wv)(),He=Ke.getPrefixCls,rn=He("chat-anywhere-sender"),Ae=(0,M.TQ)(function(me){return me.onStop}),se=(0,M.TQ)(function(me){var Ee={beforeUI:void 0,afterUI:void 0,morePrefixActions:void 0,maxLength:void 0,zoomable:!0,beforeSubmit:function(){return Promise.resolve(!0)},header:[],enableFocusExpand:!1,variant:"default",hide:!1};return h()(h()({},Ee),me.onInput)});if(S.useImperativeHandle(Z,function(){return{setInputContent:function(Ee,hn){pe(Ee),ce(hn||[[]])},getAttachedFiles:function(){return Ce.current}}},[]),(0,S.useEffect)(function(){r.setDisabled(se.disabled)},[se.disabled]),se.hide)return null;var $=function(){var me=tn()($e()().mark(function Ee(hn,Cn){return $e()().wrap(function(Tn){for(;;)switch(Tn.prev=Tn.next){case 0:ce(function(On){return On.map(function(Bn,wn){return wn===hn?Cn:Bn})});case 1:case"end":return Tn.stop()}},Ee)}));return function(hn,Cn){return me.apply(this,arguments)}}(),An=(0,S.useMemo)(function(){if(se.variant==="aigc"||!(p!=null&&p.length))return[];var me=p.map(function(Ee,hn){var Cn;return Ee.trigger?Cn=Ee.trigger:(Ee.title||Ee.description)&&p.length>1?Cn=(0,t.jsxs)(d.Z,{type:"text",icon:Ee.icon,children:[Ee.title&&(0,t.jsx)("span",{children:Ee.title}),Ee.description&&(0,t.jsx)("span",{style:{fontSize:"0.8em",opacity:.8},children:Ee.description})]}):Cn=(0,t.jsx)(le.Z,{icon:Ee.icon,bordered:!1}),h()(h()({},Ee),{},{fileList:V[hn],key:hn,onChange:function(Tn){Ee.beforeUpload&&Tn.file.status&&$(hn,Tn.fileList),Ee.beforeUpload||$(hn,Tn.fileList)},showUploadList:!1,trigger:Cn})});return me.length===1?(0,t.jsx)(Ze.Z,h()(h()({},me[0]),{},{children:me[0].trigger})):(0,t.jsx)(gn,{uploadPropsList:me})},[se.variant,p,V]),pn=(0,t.jsx)(ln.Z.SenderHeader,{onUpload:p,attachedFiles:V,onFileChange:$}),We=(0,t.jsx)(Ln.Z.Header,{closable:!1,open:V==null?void 0:V.some(function(me){return me.length}),children:V.map(function(me,Ee){return me.length?(0,t.jsx)(I.Z,{items:me,replaceable:!0,onChange:function(Cn){return $(Ee,Cn.fileList)}},Ee):null})}),xn=se.variant==="aigc"?pn:We,Xe=V.map(function(me){return me.filter(function(Ee){return Ee.status==="done"})}),yn=V.some(function(me){return me.some(function(Ee){return Ee.status==="uploading"})}),_e=function(Ee){if(!(p!=null&&p.length))return;var hn=Ee.type||"",Cn=Ee.name||"",In=function(Gn){return Gn?Gn.split(",").some(function(Nn){var _n=Nn.trim();if(!_n)return!1;if(_n.startsWith("."))return Cn.toLowerCase().endsWith(_n.toLowerCase());if(_n.includes("*")){if(_n==="*/*")return!0;var Un=_n.split("/"),Fn=T()(Un,1),Rn=Fn[0],En=hn.split("/"),Dn=T()(En,1),Hn=Dn[0];return Rn===Hn}return hn===_n}):!0},Tn=p.findIndex(function(Mn){return In(Mn.accept)});if(Tn===-1)return;var On=p[Tn],Bn=V[Tn]||[];if(On.maxCount&&Bn.length>=On.maxCount||!On.multiple&&Bn.length>0)return;if(On.beforeUpload){var wn=On.beforeUpload(Ee,[Ee]);if(wn===!1||wn===Ze.Z.LIST_IGNORE)return;if(wn instanceof Promise){wn.then(function(Mn){if(!(Mn===!1||Mn===Ze.Z.LIST_IGNORE)){var Gn=Mn&&Ne()(Mn)==="object"?Mn:Ee;Kn(Gn)}}).catch(function(Mn){console.error("beforeUpload promise rejected:",Mn)});return}if(wn&&Ne()(wn)==="object"){Kn(wn);return}}Kn(Ee);function Kn(Mn){var Gn=function(){var En=Cn.match(/\.([^.]+)$/);if(En)return En[1].toLowerCase();var Dn=hn.match(/\/([^/+]+)/);return Dn?Dn[1].toLowerCase():"bin"},Nn=Date.now(),_n={uid:"paste_".concat(Nn,"_").concat(Math.random().toString(36).slice(2,11)),name:Cn||"pasted-".concat(Nn,".").concat(Gn()),size:Mn.size,type:hn,status:"uploading",percent:0,originFileObj:Mn},Un=function(En){ce(function(Dn){var Hn=Ye()(Dn);return Hn[Tn]=(Hn[Tn]||[]).map(function(Xn){return Xn.uid===_n.uid?h()(h()({},Xn),En):Xn}),Hn})};if(ce(function(Rn){var En=Ye()(Rn),Dn=En[Tn]||[];if(!On.multiple)En[Tn]=[_n];else{if(On.maxCount&&Dn.length>=On.maxCount)return Rn;En[Tn]=[].concat(Ye()(Dn),[_n])}return En}),hn&&hn.startsWith("image/")){var Fn=new FileReader;Fn.onload=function(Rn){var En,Dn=(En=Rn.target)===null||En===void 0?void 0:En.result;typeof Dn=="string"&&Un({thumbUrl:Dn,url:Dn})},Fn.readAsDataURL(Mn)}On.customRequest({file:Mn,onSuccess:function(En){Un({status:"done",response:En,percent:100})},onError:function(En){Un({status:"error",error:En})},onProgress:function(En){Un({percent:En.percent})}},{defaultRequest:function(){}})}},Le=(0,S.useMemo)(function(){var me;return(me=p==null?void 0:p.some(function(Ee,hn){if(Ee.required){var Cn=V[hn]||[];return Cn.length===0}return!1}))!==null&&me!==void 0?me:!1},[p,V]),Ie=Le;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(qe,{}),(0,t.jsxs)("div",{className:B()("".concat(rn,"-wrapper"),re()(re()({},"".concat(rn,"-wrapper-focus"),F&&se.enableFocusExpand),"".concat(rn,"-wrapper-blur"),!F&&se.enableFocusExpand)),children:[Fe.quickInput&&(0,t.jsx)("div",{className:B()("".concat(rn,"-wrapper-header")),children:Fe.quickInput}),se.beforeUI,(0,t.jsx)(Ln.Z,{placeholder:se.placeholder,enableFocusExpand:se.enableFocusExpand,value:oe,onChange:pe,maxLength:se.maxLength,disabled:yn||r.disabled,sendDisabled:Ie,scalable:se==null?void 0:se.zoomable,header:xn,prefix:(0,t.jsxs)(t.Fragment,{children:[An,se==null?void 0:se.morePrefixActions]}),onSubmit:tn()($e()().mark(function me(){var Ee;return $e()().wrap(function(Cn){for(;;)switch(Cn.prev=Cn.next){case 0:return Cn.next=2,(se.beforeSubmit||function(){return Promise.resolve(!0)})();case 2:if(Ee=Cn.sent,Ee){Cn.next=5;break}return Cn.abrupt("return");case 5:se.onSubmit({query:oe,fileList:Xe}),pe(""),ce(E);case 8:case"end":return Cn.stop()}},me)})),onCancel:function(){Ae==null||Ae(),r.setLoading(!1)},onFocus:function(){return k(!0)},onBlur:function(){return k(!1)},onPasteFile:_e,loading:r.loading}),se.afterUI]})]})}),dn=e(69637),Je=e(10325),jn,bn=(0,m.vJ)(jn||(jn=n()([`
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


`])),function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls}),Sn=(0,S.forwardRef)(function(j,Z){var w=(0,M.TQ)(function(de){return de.messages}),U=(0,g.wv)(),oe=U.getPrefixCls,pe=oe("chat-anywhere"),r=(0,M.TQ)(function(de){return de.uiConfig}),p=(0,S.useState)(!1),E=T()(p,2),N=E[0],H=E[1],F=(0,ye.G)();(0,dn.Z)(function(){H(!0)},300);var k=B()("".concat(pe,"-chat"),re()({},"".concat(pe,"-chat-hide"),!N)),q=!(w!=null&&w.length);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(bn,{}),(0,t.jsxs)("div",{className:k,children:[(0,t.jsx)(Ue.Z.List,{smooth:!!F.loading,style:{height:0,flex:q?0:1},ref:Z.chatRef,items:w}),q?(0,t.jsx)("div",{className:"".concat(k,"-welcome"),children:r==null?void 0:r.welcome}):null,(0,t.jsx)("div",{className:"".concat(k,"-sender"),style:r!=null&&r.disclaimer?{marginBottom:16}:{},children:(0,t.jsx)(on,{ref:Z.inputRef})}),(r==null?void 0:r.disclaimer)&&(0,t.jsx)(Je.Z,{style:{position:"absolute",bottom:0,width:"100%"},desc:r==null?void 0:r.disclaimer})]})]})}),fn,a=(0,m.vJ)(fn||(fn=n()([`
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

`])),function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls});function ke(){var j=(0,g.wv)(),Z=j.getPrefixCls,w=Z("chat-anywhere-header"),U=(0,M.TQ)(function(E){return E.uiConfig}),oe=(0,he.x)(),pe=oe.sessionListShow,r=oe.setSessionListShow,p=L();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{}),(0,t.jsxs)("div",{className:w,children:[p&&(0,t.jsx)(le.Z,{style:{marginLeft:12},bordered:!1,onClick:function(){return r(!pe)},icon:pe?(0,t.jsx)(Oe.Z,{}):(0,t.jsx)(C.Z,{})}),U.header]})]})}var nn=e(83962),mn=S.forwardRef(function(Z,w){var U=(0,G.y)(),oe=(0,ye.G)(),pe=(0,he.x)();return S.useImperativeHandle(w,function(){return h()(h()(h()({},U),oe),pe)}),null}),o=["cardConfig"],ae=(0,S.forwardRef)(function(j,Z){var w,U=(0,S.useState)(0),oe=T()(U,2),pe=oe[0],r=oe[1],p=j.cardConfig,E=y()(j,o),N=(0,S.useRef)(null),H=(0,S.useRef)(null),F=(0,S.useRef)(null);return S.useImperativeHandle(Z,function(){return h()(h()(h()(h()({},N.current),H.current),F.current),{},{reload:function(){r(function(q){return q+1})}})}),(0,S.createElement)(M.vi,h()(h()({},E),{},{key:pe}),(0,t.jsxs)(nn.xy,{cardConfig:p,children:[(0,t.jsx)(c,{top:(w=E.uiConfig)!==null&&w!==void 0&&w.header?(0,t.jsx)(ke,{}):null,left:E.onSessionKeyChange?(0,t.jsx)(Q,{}):null,right:(0,t.jsx)(Sn,{ref:{chatRef:N,inputRef:H}})}),(0,t.jsx)(mn,{ref:F})]}))})},9368:function(an,X,e){"use strict";e.d(X,{Z:function(){return Ln}});var ne=e(97857),h=e.n(ne),R=e(19632),y=e.n(R),b=e(9783),T=e.n(b),S=e(5574),A=e.n(S),B=e(13769),g=e.n(B),x=e(93967),P=e.n(x),M=e(67294),u=e(21317),n=e(85893),m=M.createContext(null),O=function(ye){var Me=ye.children,qe=M.useContext(m),ln=qe.prefixCls;return(0,n.jsx)("div",{className:P()("".concat(ln,"-group-title")),children:Me&&(0,n.jsx)(u.default.Text,{children:Me})})},l=O,t=e(30339),_=e(54604),c=e(45617),L=e(7654),ie=e(64057),le=e(21403),d=e(42532),he=["prefixCls","info","className","direction","onClick","active","selectable","selected","onSelect","menu"],G=["key"],Y={};function te(I){var ye=(0,M.useState)(Y[I]),Me=A()(ye,2),qe=Me[0],ln=Me[1];return[qe,function(Qe){for(var cn in Y)Y[cn]=!1;Y[I]=Qe,ln(Qe)}]}var ve=M.memo(function(I){var ye,Me=te(I.info.key),qe=A()(Me,2),ln=qe[0],Qe=qe[1],cn=(0,M.useState)(!1),un=A()(cn,2),en=un[0],gn=un[1],on=I.prefixCls,dn=I.info,Je=I.className,jn=I.direction,bn=I.onClick,Sn=I.active,fn=I.selectable,a=I.selected,ke=I.onSelect,nn=I.menu,mn=g()(I,he),o=(0,t.Z)(mn,{aria:!0,data:!0,attr:!0}),ae=(0,M.useRef)(null),j=(0,d.Z)(ae),Z=A()(j,1),w=Z[0],U=dn.disabled,oe=P()(Je,"".concat(on,"-item"),T()({},"".concat(on,"-item-active"),Sn&&!U),T()({},"".concat(on,"-item-disabled"),U),T()({},"".concat(on,"-item-timeline"),dn.timeline||fn)),pe=function(){if(fn)return ke==null?void 0:ke(dn.key,!a);if(!U&&bn)return bn(dn)};return(0,n.jsxs)("li",h()(h()({ref:ae},o),{},{className:oe,onClick:pe,children:[w&&dn.icon&&(0,n.jsx)("div",{className:"".concat(on,"-icon"),children:dn.icon}),w&&(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"".concat(on,"-content"),children:[(dn.timeline||fn)&&(0,n.jsx)("div",{className:"".concat(on,"-timeline"),children:fn?(0,n.jsx)("div",{className:"".concat(on,"-timeline-checkbox"),onClick:function(p){return p.stopPropagation()},children:(0,n.jsx)(c.Z,{checked:a,onChange:function(){return ke==null?void 0:ke(dn.key,!a)}})}):(0,n.jsx)("div",{className:"".concat(on,"-timeline-dot")})}),(0,n.jsx)(Oe,{editable:ln,setEditable:Qe,prefixCls:on,info:dn,onEdit:nn==null||(ye=nn.find(function(r){return r.key==="edit"}))===null||ye===void 0?void 0:ye.onEdit}),nn&&!U&&!fn&&(0,n.jsx)(L.Z,{styles:{body:{padding:4}},trigger:["click"],open:en,onOpenChange:gn,content:(0,n.jsx)("div",{className:"".concat(on,"-menu-popover"),children:nn.map(function(r){var p=r.key,E=g()(r,G),N=h()(h()({},E),{},{onClick:function(F){if(p==="edit")Qe(!0);else{var k;(k=E.onClick)===null||k===void 0||k.call(E,dn)}gn(!1)}});return(0,n.jsx)(Be,h()(h()({},N),{},{info:dn}),p)})}),placement:"bottom",children:(0,n.jsx)(ie.Z,{bordered:!1,icon:(0,n.jsx)(_.Z,{}),disabled:U,className:"".concat(on,"-menu-icon"),onClick:function(p){return p.stopPropagation()}})})]}),dn.desc&&(0,n.jsx)("div",{className:"".concat(on,"-desc"),style:dn.timeline||fn?{marginLeft:16}:{},children:dn.desc})]})]}))});function Oe(I){var ye=I.editable,Me=I.prefixCls,qe=I.info,ln=I.setEditable,Qe=I.onEdit,cn=(0,M.useState)(qe.label),un=A()(cn,2),en=un[0],gn=un[1],on=(0,M.useState)(qe.label),dn=A()(on,2),Je=dn[0],jn=dn[1];return qe.label!==Je&&(jn(qe.label),gn(qe.label)),ye?(0,n.jsx)(C,{prefixCls:Me,value:en,onBlur:function(Sn){var fn;if(Sn===en)return ln(!1);(fn=Qe(Sn,qe))===null||fn===void 0||fn.then(function(){gn(Sn)}).catch(function(){gn(en)}).finally(function(){ln(!1)})},setEditable:ln}):(0,n.jsx)("div",{className:"".concat(Me,"-label"),children:en})}function C(I){var ye=I.prefixCls,Me=I.value,qe=I.onBlur,ln=I.setEditable,Qe=(0,M.useState)(Me),cn=A()(Qe,2),un=cn[0],en=cn[1],gn=(0,M.useRef)();return(0,M.useEffect)(function(){gn.current.focus()},[]),(0,M.useEffect)(function(){en(Me)},[Me]),(0,n.jsx)("input",{ref:gn,className:"".concat(ye,"-label-edit"),value:un,onClick:function(dn){return dn.stopPropagation()},onChange:function(dn){return en(dn.target.value)},onBlur:function(){return qe(un)}})}function Be(I){var ye=I.label,Me=I.icon,qe=I.danger,ln=I.info,Qe=I.disabled,cn=function(en){var gn;Qe||(en.stopPropagation(),(gn=I.onClick)===null||gn===void 0||gn.call(I,ln))};return Me&&ye?(0,n.jsx)(le.Z,{disabled:Qe,icon:Me,danger:qe,type:"text",onClick:cn,children:ye}):Me?(0,n.jsx)(ie.Z,{disabled:Qe,icon:Me,danger:qe,bordered:!1,onClick:cn}):ye?(0,n.jsx)(le.Z,{disabled:Qe,danger:qe,type:"text",onClick:cn,children:ye}):null}var Q=ve,xe=e(60869),ue=e(56044),De=e(52677),re=e.n(De),Ue="__ungrouped",we=function(ye){var Me=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],qe=M.useMemo(function(){if(!ye)return[!1,void 0,void 0];var en={sort:void 0,title:void 0};return re()(ye)==="object"&&(en=h()(h()({},en),ye)),[!0,en.sort,en.title]},[ye]),ln=A()(qe,3),Qe=ln[0],cn=ln[1],un=ln[2];return M.useMemo(function(){if(!Qe){var en=[{name:Ue,data:Me,title:void 0}];return[en,Qe]}var gn=Me.reduce(function(Je,jn){var bn=jn.group||Ue;return Je[bn]||(Je[bn]=[]),Je[bn].push(jn),Je},{}),on=cn?Object.keys(gn).sort(cn):Object.keys(gn),dn=on.map(function(Je){return{name:Je===Ue?void 0:Je,title:un,data:gn[Je]}});return[dn,Qe]},[Me,ye])},Ye=we,Ge=e(68400),Ne=e.n(Ge),vn=e(9053),$e,sn=(0,vn.vJ)($e||($e=Ne()([`
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
}`])),function(I){return I.theme.prefixCls},function(I){return I.theme.paddingXXS},function(I){return I.theme.prefixCls},function(I){return I.theme.paddingXL},function(I){return I.theme.prefixCls},function(I){return I.theme.colorTextSecondary},function(I){return I.theme.colorBgBase},function(I){return I.theme.colorBorder},function(I){return I.theme.colorTextSecondary},function(I){return I.theme.borderRadiusLG},function(I){return I.theme.colorBorder},function(I){return I.theme.colorFillTertiary},function(I){return I.theme.colorFillTertiary},function(I){return I.theme.prefixCls},function(I){return I.theme.prefixCls},function(I){return I.theme.colorText},function(I){return I.theme.prefixCls},function(I){return I.theme.colorTextDisabled},function(I){return I.theme.prefixCls},function(I){return I.theme.prefixCls},function(I){return I.theme.colorFillTertiary},function(I){return I.theme.colorText},function(I){return I.theme.colorText},function(I){return I.theme.fontFamily},function(I){return I.theme.fontSizeXL},function(I){return I.theme.controlHeightLG},function(I){return I.theme.controlHeightLG},function(I){return I.theme.paddingXS}),tn=["prefixCls","rootClassName","items","activeKey","defaultActiveKey","onActiveChange","selectable","selectedKeys","onSelectChange","menu","styles","classNames","groupable","className","style"],Ze=function(ye){var Me=ye.prefixCls,qe=ye.rootClassName,ln=ye.items,Qe=ye.activeKey,cn=ye.defaultActiveKey,un=ye.onActiveChange,en=ye.selectable,gn=ye.selectedKeys,on=ye.onSelectChange,dn=ye.menu,Je=ye.styles,jn=Je===void 0?{}:Je,bn=ye.classNames,Sn=bn===void 0?{}:bn,fn=ye.groupable,a=ye.className,ke=ye.style,nn=g()(ye,tn),mn=(0,t.Z)(nn,{attr:!0,aria:!0,data:!0}),o=(0,xe.Z)(cn,{value:Qe}),ae=A()(o,2),j=ae[0],Z=ae[1],w=Ye(fn,ln),U=A()(w,2),oe=U[0],pe=U[1],r=(0,ue.wv)(),p=r.direction,E=r.getPrefixCls,N=E("conversations"),H=P()(N,a,qe,T()({},"".concat(N,"-rtl"),p==="rtl")),F=M.useRef(un);F.current=un;var k=M.useCallback(function(ce){var Ce;Z(ce.key),(Ce=F.current)===null||Ce===void 0||Ce.call(F,ce.key)},[Z]),q=M.useRef(gn);q.current=gn;var de=M.useRef(on);de.current=on;var V=M.useCallback(function(ce,Ce){if(de.current){var Fe=q.current||[],Ke=Ce?[].concat(y()(Fe),[ce]):Fe.filter(function(He){return He!==ce});de.current(Ke)}},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(sn,{}),(0,n.jsx)("ul",h()(h()({},mn),{},{style:ke,className:H,children:oe.map(function(ce,Ce){var Fe=ce.data.map(function(He,rn){var Ae=en!=null?en:He.selectable,se=Ae?gn?gn.includes(He.key):He.selected:!1,$=on?V:He.onSelect;return(0,n.jsx)(Q,{info:He,prefixCls:N,direction:p,className:P()(Sn.item),style:jn.item,menu:dn,active:j===He.key,selectable:Ae,selected:se,onSelect:$,onClick:k},He.key||"key-".concat(rn))});if(pe){var Ke;return(0,n.jsxs)("li",{children:[(0,n.jsx)(m.Provider,{value:{prefixCls:N},children:((Ke=ce.title)===null||Ke===void 0?void 0:Ke.call(ce,ce.name,{components:{GroupTitle:l}}))||(0,n.jsx)(l,{children:ce.name},ce.name)}),(0,n.jsx)("ul",{className:"".concat(N,"-list"),children:Fe})]},ce.name||"key-".concat(Ce))}return Fe})}))]})},Ln=Ze},24963:function(an,X,e){"use strict";e.r(X),e.d(X,{Audios:function(){return Be},DeepThink:function(){return y},DeepThinking:function(){return y},Files:function(){return u},Footer:function(){return he},FooterActions:function(){return d.p4},FooterCount:function(){return d.hw},Images:function(){return _},Interrupted:function(){return Y},Text:function(){return le},Videos:function(){return Oe}});var ne=e(67294),h=e(14082),R=e(85893);function y(Q){return(0,R.jsx)(h.Z,{defaultOpen:Q.data.defaultOpen!==void 0?Q.data.defaultOpen:!0,title:Q.data.title,loading:Q.data.loading,content:Q.data.content,className:Q.data.className,open:Q.data.open,autoCloseOnFinish:Q.data.autoCloseOnFinish,maxHeight:Q.data.maxHeight})}var b=e(68400),T=e.n(b),S=e(23345),A=e(50993),B=e(9053),g=e(56044),x=e(6411),P,M=(0,B.vJ)(P||(P=T()([`
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
`])),function(Q){return Q.theme.prefixCls},function(Q){return Q.theme.prefixCls},function(Q){return Q.theme.borderRadius},function(Q){return Q.theme.colorWhite},function(Q){return Q.theme.motionDurationSlow},function(Q){return Q.theme.prefixCls},function(Q){return Q.theme.prefixCls});function u(Q){var xe=(0,g.wv)(),ue=xe.getPrefixCls,De=ue("bubble-files");return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(M,{}),(0,R.jsx)(S.Z,{className:De,children:Q.data.map(function(re,Ue){var we={name:re.name||re.filename,size:re.size||re.bytes,url:re.url};return(0,R.jsxs)("div",{className:"".concat(De,"-file"),children:[(0,R.jsx)(A.Z.FileCard,{item:we}),we.url&&(0,R.jsx)("div",{className:"".concat(De,"-download"),onClick:function(){window.open(we.url,"_blank")},children:(0,R.jsx)(x.Z,{})})]},Ue)})})]})}var n=e(16494),m=e(55839),O,l=(0,B.vJ)(O||(O=T()([`
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
`])),function(Q){return Q.theme.prefixCls},function(Q){return Q.theme.prefixCls},function(Q){return Q.theme.prefixCls},function(Q){return Q.theme.prefixCls});function t(Q){var xe=(0,g.wv)(),ue=xe.getPrefixCls,De=ue("bubble-image");return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(l,{}),(0,R.jsx)("div",{className:"".concat(De),children:(0,R.jsx)(n.Z,{fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",src:Q.url,width:56,height:56,preview:{transitionName:""}})})]})}function _(Q){return(0,R.jsx)(m.ZP,{locale:{Image:{preview:""}},children:(0,R.jsx)(S.Z,{children:Q.data.map(function(xe,ue){return(0,R.jsx)(t,{url:xe.url},ue)})})})}var c=e(97857),L=e.n(c),ie=e(66109);function le(Q){var xe=Q.data.msgStatus==="generating";return(0,R.jsx)(ie.Z,L()(L()({cursor:xe},Q.data),{},{typing:Q.data.msgStatus==="generating"?Q.data.typing:!1}))}var d=e(67369);function he(Q){return(0,R.jsx)(d.ZP,L()({},Q.data))}var G=e(10146);function Y(Q){return(0,R.jsx)(G.Z,L()({},Q.data))}var te=e(51794),ve;function Oe(Q){var xe=(0,g.wv)().getPrefixCls("bubble-video");return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(C,{}),(0,R.jsx)(S.Z,{children:Q.data.map(function(ue,De){return(0,R.jsx)(te.Z,{className:xe,src:ue.src,poster:ue.poster,controls:!0},De)})})]})}var C=(0,B.vJ)(ve||(ve=T()([`
.`,`-bubble-video {
  max-width: 256px;
  max-height: 144px;
  border-radius: 8px;
  border: 1px solid `,`;
  overflow: hidden;
}
`])),function(Q){return Q.theme.prefixCls},function(Q){return Q.theme.colorBorderSecondary});function Be(){return(0,R.jsx)("div",{children:"Audio"})}},55031:function(an,X,e){"use strict";e.d(X,{Z:function(){return ie}});var ne=e(56044),h=e(31382),R=e(55839),y=e(16494),b=e(33948),T=e(52253),S=e(56137),A=e(1948),B=e(61763),g=e(77900),x=e(40443),P=e(33119),M=e(4356),u=e(72816),n=e(77382),m=e(72167),O=e(74398),l=e(55094),t=e(61401),_=e(85893),c={Click:{name:"\u70B9\u51FB",icon:(0,_.jsx)(b.Z,{})},Swipe:{name:"\u6ED1\u52A8",icon:(0,_.jsx)(T.Z,{})},Type:{name:"\u8F93\u5165",icon:(0,_.jsx)(S.Z,{})},Back:{name:"\u8FD4\u56DE",icon:(0,_.jsx)(A.Z,{})},Home:{name:"\u4E3B\u9875",icon:(0,_.jsx)(B.Z,{})},Done:{name:"\u5B8C\u6210",icon:(0,_.jsx)(g.Z,{})},Wait:{name:"\u7B49\u5F85",icon:(0,_.jsx)(x.Z,{spin:!0})},click:{name:"\u70B9\u51FB",icon:(0,_.jsx)(b.Z,{})},"right click":{name:"\u53F3\u952E\u70B9\u51FB",icon:(0,_.jsx)(b.Z,{})},"open app":{name:"\u6253\u5F00\u5E94\u7528",icon:(0,_.jsx)(P.Z,{})},computer_double_click:{name:"\u53CC\u51FB",icon:(0,_.jsx)(M.Z,{})},hotkey:{name:"\u5FEB\u6377\u952E",icon:(0,_.jsx)(u.Z,{})},presskey:{name:"\u6309\u952E",icon:(0,_.jsx)(n.Z,{})},scroll:{name:"\u6EDA\u52A8",icon:(0,_.jsx)(T.Z,{})},drag:{name:"\u62D6\u62FD",icon:(0,_.jsx)(m.Z,{})},type_with_clear_enter_pos:{name:"\u8F93\u5165\u5E76\u6E05\u9664",icon:(0,_.jsx)(S.Z,{})},triple_click:{name:"\u4E09\u51FB",icon:(0,_.jsx)(O.Z,{})},drag_end:{name:"\u62D6\u62FD\u7ED3\u675F",icon:(0,_.jsx)(m.Z,{})},type:{name:"\u8F93\u5165",icon:(0,_.jsx)(S.Z,{})},hscroll:{name:"\u6C34\u5E73\u6EDA\u52A8",icon:(0,_.jsx)(l.Z,{})},done:{name:"\u5B8C\u6210",icon:(0,_.jsx)(g.Z,{})},wait:{name:"\u7B49\u5F85",icon:(0,_.jsx)(x.Z,{spin:!0})},call_user:{name:"\u547C\u53EB\u7528\u6237",icon:(0,_.jsx)(t.Z,{})}},L=c;function ie(le){var d,he,G=(0,ne.wv)(),Y=G.getPrefixCls,te=Y("operate-card");return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"".concat(te,"-device-action-time"),children:le.time}),(0,_.jsx)(h.Z,{header:{className:"".concat(te,"-device-action"),icon:(0,_.jsx)("div",{className:"".concat(te,"-device-action-icon"),children:(d=L[le.action])===null||d===void 0?void 0:d.icon}),title:(0,_.jsxs)("div",{className:"".concat(te,"-device-action-content"),children:[(0,_.jsxs)("div",{className:"".concat(te,"-device-action-description"),children:[(0,_.jsx)("span",{children:le.actionName||((he=L[le.action])===null||he===void 0?void 0:he.name)}),(0,_.jsx)("span",{children:le.description})]}),(0,_.jsx)("div",{className:"".concat(te,"-device-action-image"),children:(0,_.jsx)(R.ZP,{locale:{Image:{preview:""}},children:(0,_.jsx)(y.Z,{src:le.image,alt:le.description,width:"100%",height:"100%"})})})]})}})]})}},10325:function(an,X,e){"use strict";e.d(X,{Z:function(){return B}});var ne=e(67294),h=e(68400),R=e.n(h),y=e(9053),b,T=(0,y.vJ)(b||(b=R()([`
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
`])),function(g){return g.theme.prefixCls},function(g){return g.theme.colorTextTertiary},function(g){return g.theme.prefixCls}),S=e(56044),A=e(85893);function B(g){var x=g.desc,P=x===void 0?"AI can also make mistakes, so please check carefully and use it with caution":x,M=(0,S.wv)(),u=M.getPrefixCls,n=u("disclaimer");return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(T,{}),(0,A.jsxs)("div",{className:n,style:g.style,children:[P,g.afterLink&&(0,A.jsx)("a",{className:"".concat(n,"-after-link"),href:g.afterLink.href,target:"_blank",children:g.afterLink.text})]})]})}},80115:function(an,X,e){"use strict";e.d(X,{Z:function(){return h}});var ne=e(85893);function h(){return(0,ne.jsx)("iframe",{srcDoc:`<html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>`})}},2534:function(an,X,e){"use strict";e.d(X,{Z:function(){return O}});var ne=e(67294),h=e(68400),R=e.n(h),y=e(9053),b,T=(0,y.vJ)(b||(b=R()([`
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

`])),function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.colorText},function(l){return l.theme.colorSuccess},function(l){return l.theme.colorBgBase},function(l){return l.theme.prefixCls}),S=e(56044),A=e(55839),B=e(16494),g=e(89034),x=e(36374),P=e(85893);function M(){for(var l=arguments.length,t=new Array(l),_=0;_<l;_++)t[_]=arguments[_];return t.filter(Boolean).join(" ")}var u=function(t){var _=t.speed,c=_===void 0?1:_,L=t.backgroundColor,ie=L===void 0?"#b6a9f8":L,le=t.colors,d=le===void 0?["#c979ee","#ef788c","#eb7fc6","#6d67c8"]:le,he=t.ringColors,G=he===void 0?["white","blue","magenta","violet","lightyellow"]:he,Y=t.className,te=Y===void 0?"":Y,ve=(0,ne.useRef)(null);return(0,ne.useEffect)(function(){if(CSS&&CSS.registerProperty)try{CSS.registerProperty({name:"--a",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--l",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--x",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--y",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--o",syntax:"<number>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--value",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--width-ratio",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--scale",syntax:"<number>",inherits:!0,initialValue:"0"})}catch(Oe){}},[]),(0,ne.useEffect)(function(){var Oe=ve.current;if(Oe){var C=function(){var xe=Oe.getBoundingClientRect(),ue=Math.min(xe.width,xe.height);Oe.style.setProperty("--actual-size","".concat(ue,"px"))};C();var Be=new ResizeObserver(C);return Be.observe(Oe),function(){Be.disconnect()}}},[]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("style",{children:`
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
          --duration: calc(8s / `.concat(c,`);
          --ai-duration: calc(5.5s / `).concat(c,`);
          
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
          background: `).concat(ie,`;
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
            `).concat(G.join(", "),`
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
      `)}),(0,P.jsxs)("div",{ref:ve,className:M("fluid-background-container",te),children:[(0,P.jsxs)("div",{className:"fluid-inner",children:[(0,P.jsx)("div",{className:"c c4",style:{"--i":0}}),(0,P.jsx)("div",{className:"c c1",style:{"--i":1}}),(0,P.jsx)("div",{className:"c c2",style:{"--i":2}}),(0,P.jsx)("div",{className:"c c3",style:{"--i":3}}),(0,P.jsx)("div",{className:"rings"})]}),(0,P.jsx)("div",{className:"glass"})]})]})},n=u,m=function(t){var _=(0,S.wv)(),c=_.getPrefixCls,L=c("image-generator"),ie=t.block,le=t.skeletonText,d=t.width,he=d===void 0?320:d,G=t.height,Y=G===void 0?320:G,te=t.src,ve=t.loadingText,Oe=ve===void 0?"Painting...":ve,C=t.doneText,Be=C===void 0?"Paint Completed":C,Q=t.skeleton||(0,P.jsxs)("div",{className:"".concat(L,"-default-skeleton"),style:{width:"100%",height:"100%"},children:[(0,P.jsx)("div",{className:"".concat(L,"-default-skeleton-bg"),children:(0,P.jsx)(n,{})}),(0,P.jsxs)("div",{className:"".concat(L,"-default-skeleton-content"),children:[(0,P.jsx)("img",{className:"".concat(L,"-default-skeleton-icon"),src:"https://img.alicdn.com/imgextra/i2/O1CN01M1X8yM1MWUC7u3Go5_!!6000000001442-54-tps-72-72.apng"}),le&&(0,P.jsx)("div",{className:"".concat(L,"-default-skeleton-text"),children:le})]})]}),xe=!te,ue=ie?{aspectRatio:"".concat(he,"/").concat(Y)}:{width:he,height:Y};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{}),(0,P.jsxs)("div",{className:L,children:[(0,P.jsxs)("div",{className:"".concat(L,"-text"),children:[xe?(0,P.jsx)(x.Z,{}):(0,P.jsx)(g.Z,{className:"".concat(L,"-text-success")}),xe?(0,P.jsx)("span",{style:{paddingLeft:20},children:Oe}):Be]}),(0,P.jsx)("div",{className:"".concat(L,"-wrapper"),style:ue,children:xe?Q:(0,P.jsx)(A.ZP,{locale:{Image:{preview:""}},children:(0,P.jsx)(B.Z,{width:"100%",height:"100%",src:te})})})]})]})},O=m},66109:function(an,X,e){"use strict";e.d(X,{Z:function(){return mn}});var ne=e(19632),h=e.n(ne),R=e(97857),y=e.n(R),b=e(67294),T=e(13769),S=e.n(T),A=e(55729),B=e(68400),g=e.n(B),x=e(9053),P,M=(0,x.vJ)(P||(P=g()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.colorBorder},function(o){return o.theme.colorFillQuaternary},function(o){return o.theme.colorText},function(o){return o.theme.borderRadiusSM},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.borderRadiusSM},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.colorBgBase},function(o){return o.theme.prefixCls},function(o){return o.theme.colorFillSecondary},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.colorSuccess},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.colorFillQuaternary},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.colorTextSecondary},function(o){return o.theme.colorFillSecondary},function(o){return o.theme.motionEaseOut},function(o){return o.theme.colorWhite},function(o){return o.theme.colorPrimary});function u(o){var ae=o.cursor,j=o.content,Z=o.animation,w=(0,b.useMemo)(function(){return Z?"":ae?ae==="dot"?" :dot:":ae==="underline"?" :underline:":" :dot:":""},[ae,j]);return j+w}var n=e(85893),m=["content","cursor","animation"];function O(o){var ae=o.content,j=o.cursor,Z=o.animation,w=S()(o,m),U=u({cursor:j,content:ae,animation:Z}),oe=(0,b.useMemo)(function(){if(Z)return{hasNextChunk:Z&&j,enableAnimation:Z&&j}},[j,Z]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(M,{}),(0,n.jsx)(A.Z,y()(y()({},w),{},{content:U,streaming:oe}))]})}var l=e(5574),t=e.n(l),_=function(ae){var j=ae.content,Z=ae.typing,w=(0,b.useState)(0),U=t()(w,2),oe=U[0],pe=U[1],r=(0,b.useRef)();return(0,b.useEffect)(function(){return Z?r.current=setInterval(function(){pe(function(p){return p+1})},typeof Z=="number"?Z:5):r.current&&clearInterval(r.current),function(){return clearInterval(r.current)}},[Z]),Z?j.slice(0,oe):j},c=_,L=e(56044),ie=e(93967),le=e.n(ie),d=function(){return null},he=e(87427),G=e(96643),Y=e(6411),te=e(97634),ve=e(89698),Oe=e(39536),C={javascript:"js",typescript:"ts",python:"py",ruby:"rb",rust:"rs",kotlin:"kt",csharp:"cs",markdown:"md",yaml:"yml",shell:"sh",bash:"sh",zsh:"sh",mermaid:"mmd",jsx:"jsx",tsx:"tsx"},Be=function(ae){var j,Z=ae.className,w=ae.children,U=(Z==null||(j=Z.match(/language-(\w+)/))===null||j===void 0?void 0:j[1])||"";return typeof w!="string"?null:U==="mermaid"?(0,n.jsx)(he.Z,{header:(0,n.jsx)(Q,{lang:"mermaid",content:w}),children:w}):(0,n.jsx)(G.Z,{lang:U,header:(0,n.jsx)(Q,{lang:U,content:w}),children:w})};function Q(o){var ae=o.lang,j=o.content,Z=(0,b.useState)(!1),w=t()(Z,2),U=w[0],oe=w[1],pe=(0,b.useRef)(),r=(0,L.wv)(),p=r.getPrefixCls,E=p("code-header"),N=(0,b.useCallback)(function(){var F=C[ae]||ae||"txt",k=new Blob([j],{type:"text/plain;charset=utf-8"}),q=URL.createObjectURL(k),de=document.createElement("a");de.href=q,de.download="code.".concat(F),de.click(),URL.revokeObjectURL(q)},[ae,j]),H=(0,b.useCallback)(function(){(0,Oe.J)(j).then(function(){clearTimeout(pe.current),oe(!0),pe.current=setTimeout(function(){return oe(!1)},2e3)}).catch(function(){console.warn("Copy failed")})},[j]);return(0,n.jsxs)("div",{className:E,children:[(0,n.jsx)("div",{className:"".concat(E,"-lang"),children:ae}),(0,n.jsxs)("div",{className:"".concat(E,"-actions"),children:[(0,n.jsx)(Y.Z,{className:"".concat(E,"-download"),onClick:N}),U?(0,n.jsx)(te.Z,{className:"".concat(E,"-copied")}):(0,n.jsx)(ve.Z,{className:"".concat(E,"-icon"),onClick:H})]})]})}var xe=Be;function ue(o){return(0,n.jsx)("a",{href:o.src,target:"_blank",rel:"noopener noreferrer",children:o.src})}var De=e(55839),re=e(16494),Ue=e(85576),we=e(36231),Ye=e(89102);function Ge(o){try{var ae=o.src,j=new URL(ae),Z=j.pathname,w=Z.endsWith(".mp4"),U=Z.endsWith(".mp3")||Z.endsWith(".wav");return U?(0,n.jsx)("audio",y()(y()({src:o.src},o),{},{controls:!0})):w?(0,n.jsx)(vn,y()({src:o.src},o)):(0,n.jsx)(Ne,y()({src:o.src},o))}catch(oe){return null}}function Ne(o){return(0,n.jsx)(De.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(re.Z,y()({src:o.src},o))})}function vn(o){var ae=o.src,j=(0,b.useState)(!1),Z=t()(j,2),w=Z[0],U=Z[1],oe=(0,L.wv)(),pe=oe.getPrefixCls,r=pe("markdown-video");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:r,children:(0,n.jsx)("div",{className:"".concat(r,"-poster"),onClick:function(){return U(!0)},children:(0,n.jsx)(we.Z,{className:"".concat(r,"-play")})})}),(0,n.jsx)(Ue.Z,{closeIcon:(0,n.jsx)("a",{children:(0,n.jsx)(Ye.Z,{style:{fontSize:20}})}),centered:!0,transitionName:"",footer:null,width:500,title:"",styles:{content:{padding:0}},open:w,destroyOnHidden:!0,onCancel:function(){return U(!1)},children:(0,n.jsx)("video",{controls:!0,autoPlay:!0,style:{display:"block",width:"100%"},children:(0,n.jsx)("source",{src:ae,type:"video/mp4"})})})]})}function $e(o){var ae=(0,L.wv)().getPrefixCls("markdown");return(0,n.jsx)("div",{className:ae,style:{fontSize:o.baseFontSize,lineHeight:o.baseLineHeight},children:o.content})}var sn=e(79427),tn=e(55241),Ze,Ln=(0,x.vJ)(Ze||(Ze=g()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.colorTextSecondary},function(o){return o.theme.colorFillSecondary},function(o){return o.theme.motionEaseOut},function(o){return o.theme.colorWhite},function(o){return o.theme.colorPrimary});function I(o){var ae=(0,L.wv)(),j=ae.getPrefixCls,Z=j("markdown-citation"),w=o["data-text"],U=o["data-url"],oe=o["data-title"],pe=o["data-content"],r=pe||oe,p=(0,n.jsx)("sup",{className:Z,children:w});return r&&(p=(0,n.jsx)(tn.Z,{title:oe,content:U?(0,n.jsx)("a",{href:U,rel:"noreferrer",target:"_blank",children:U}):pe,children:p})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ln,{}),p]})}function ye(o){var ae,j=((ae=o.citationsData[o["data-text"]])===null||ae===void 0?void 0:ae.render)||I;return(0,n.jsx)(j,y()({},o))}var Me=[],qe={};function ln(o){var ae=o.citations,j=ae===void 0?Me:ae,Z=o.citationsMap,w=Z===void 0?qe:Z,U=(0,b.useMemo)(function(){var p=y()({},w);return j.forEach(function(E,N){var H=N+1;p[H]=E}),[p,function(){return function(N){return(0,n.jsx)(ye,y()(y()({},N),{},{citationsData:p}))}}()]},[j,w]),oe=t()(U,2),pe=oe[0],r=oe[1];return{CitationComponent:r,citationsData:pe,citationsDataCount:Object.keys(pe).length}}var Qe=e(30861);function cn(o){return{name:"citation",level:"inline",tokenizer:function(j){var Z=j.match(/^\[([^\]]+)\](?!\()/);if(Z){var w=Z[0].trim(),U=w==null?void 0:w.replace(/^\[([^\]]+)\]/g,"$1");if(o[U])return{type:"citation",raw:w,text:w==null?void 0:w.replace(/^\[([^\]]+)\]/g,"$1"),renderType:"component"}}},renderer:function(j){if(o&&Object.keys(o).length===0)return null;var Z=j.text,w=o==null?void 0:o[Z];return w?'<citation data-text="'.concat(Z,'" data-url="').concat(w.url,'" data-title="').concat(w.title,'" data-content="').concat(w.content,'"></citation>'):j.raw}}}var un,en=(0,x.vJ)(un||(un=g()([`
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
`])),function(o){var ae=o.theme;return ae.colorPrimary});function gn(){var o=(0,L.wv)(),ae=o.getPrefixCls,j="markdown-cursor-underline";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(en,{}),(0,n.jsx)("span",{className:le()(j,ae("markdown-cursor"))})]})}var on=e(36374),dn=function(ae){var j=ae["data-type"];return j==="dot"?(0,n.jsx)(on.Z,{}):j==="underline"?(0,n.jsx)(gn,{}):null};function Je(){var o={cursors:{dot:"dot",underline:"underline"}},ae=Object.keys(o.cursors).map(function(w){return w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|"),j=new RegExp(":(".concat(ae,"):")),Z=new RegExp("^".concat(j.source));return{name:"cursor",level:"inline",start:function(U){var oe;return(oe=U.match(j))===null||oe===void 0?void 0:oe.index},tokenizer:function(U,oe){var pe=Z.exec(U);if(pe){var r=pe[1],p=o.cursors[r];if(p)return{type:"cursor",raw:pe[0],name:r,cursor:p}}},renderer:function(U){var oe='<custom-cursor data-type="'.concat(U.name,'"></custom-cursor>');return oe}}}var jn=e(85018),bn=["href"];function Sn(o){return o["data-footnote-ref"]===""?(0,n.jsx)(fn,y()({},o)):o.children==="\u21A9"&&o["data-footnote-backref"]===""?null:(0,n.jsx)("a",y()({},o))}function fn(o){var ae=(0,L.wv)(),j=ae.getPrefixCls,Z=j("markdown-footnote"),w=o.href,U=S()(o,bn);return(0,n.jsx)("a",y()(y()({},U),{},{className:Z,onClick:function(){try{var pe=o.id.split("-"),r=t()(pe,3),p=r[0],E=r[1],N=r[2],H=document.querySelector("#footnote-".concat(N)).querySelector("a").getAttribute("href");window.open(H,"_blank")}catch(F){}}}))}var a={ALLOWED_TAGS:[]};function ke(){try{return new RegExp("(?<=a)b"),!0}catch(o){return!1}}var nn=ke(),mn=(0,b.memo)(function(o){var ae=o.baseFontSize||14,j=o.baseLineHeight||1.7,Z=c({content:o.content,typing:o.typing&&!o.animation}),w=(0,L.wv)().getPrefixCls("markdown"),U=o.raw,oe=U===void 0?!1:U,pe=o.allowHtml,r=pe===void 0?!1:pe,p=ln({citations:o.citations,citationsMap:o.citationsMap}),E=p.citationsData,N=p.citationsDataCount,H=p.CitationComponent,F=(0,b.useMemo)(function(){return y()({code:xe,style:d,script:d,img:o.disableImage?ue:Ge,citation:H,"custom-cursor":dn,a:Sn},o.components)},[o.disableImage,H,o.components]),k=(0,b.useMemo)(function(){return{ADD_TAGS:["custom-cursor","citation"]}},[]),q=(0,b.useMemo)(function(){var rn=(0,Qe.Z)();rn.push(Je()),N>0&&rn.push(cn(E));var Ae=(0,jn.Z)({sectionClass:"".concat(w,"-footnotes")});return rn.push.apply(rn,h()(Ae.extensions)),{extensions:rn,walkTokens:Ae.walkTokens}},[N,E]),de=q.extensions,V=q.walkTokens,ce=(0,b.useMemo)(function(){return y()({extensions:de,walkTokens:V},!r&&{renderer:{html:function(Ae){var se=Ae.text||Ae.raw||"";return se.replace(/</g,"&lt;").replace(/>/g,"&gt;")}}})},[de,r]),Ce=Z||"",Fe=(0,n.jsx)($e,{content:Ce,baseFontSize:ae,baseLineHeight:j}),Ke=(0,b.useCallback)(function(){for(var rn=arguments.length,Ae=new Array(rn),se=0;se<rn;se++)Ae[se]=arguments[se];return console.error(Ae),(0,n.jsx)($e,{content:Ce,baseFontSize:ae,baseLineHeight:j})},[Ce,ae,j]),He=(0,b.useMemo)(function(){return{fontSize:ae,lineHeight:j}},[ae,j]);return oe||!nn?Fe:(0,n.jsx)(sn.SV,{fallbackRender:Ke,children:(0,n.jsx)(O,{dompurifyConfig:k,cursor:o.cursor,animation:o.animation,components:F,style:He,openLinksInNewTab:!0,className:le()(w,o.className),content:Ce,config:ce})})})},36374:function(an,X,e){"use strict";e.d(X,{Z:function(){return g}});var ne=e(68400),h=e.n(ne),R=e(56044),y=e(9053),b=e(93967),T=e.n(b),S=e(85893),A,B=(0,y.vJ)(A||(A=h()([`
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
`])),function(x){return x.theme.prefixCls},function(x){return x.theme.colorText},function(x){return x.theme.colorText});function g(){var x=(0,R.wv)(),P=x.getPrefixCls,M=P("markdown-cursor-dot");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(B,{}),(0,S.jsxs)("span",{className:T()(M,P("markdown-cursor")),children:[(0,S.jsx)("span",{style:{opacity:0,marginLeft:"-.75em"},children:"_"}),(0,S.jsx)("span",{className:"".concat(M,"-dot1")}),(0,S.jsx)("span",{className:"".concat(M,"-dot2")})]})]})}},12181:function(an,X,e){"use strict";e.d(X,{Z:function(){return L}});var ne=e(5574),h=e.n(ne),R=e(15009),y=e.n(R),b=e(99289),T=e.n(b),S=e(68400),A=e.n(S),B=e(41469),g=e(2093),x=e(9361),P=e(96486),M=e.n(P),u=e(67294),n=e(56044),m=e(9053),O=e(85893),l,t=(0,m.vJ)(l||(l=A()([`
.`,`-mermaid {
  &-preview img {
    background: `,`;
  }
}
`])),function(ie){return ie.theme.prefixCls},function(ie){return ie.theme.colorBgBase}),_,c=function(){var ie=T()(y()().mark(function le(){return y()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:if(!_){he.next=2;break}return he.abrupt("return",_);case 2:return _=Promise.resolve().then(e.bind(e,76637)).then(function(G){return G.default}),he.abrupt("return",_);case 4:case"end":return he.stop()}},le)}));return function(){return ie.apply(this,arguments)}}();function L(ie){var le=ie.content,d=ie.width,he=ie.height,G=(0,n.wv)(),Y=G.theme,te=G.getPrefixCls,ve=te("mermaid"),Oe=(0,u.useMemo)(function(){return{theme:(Y==null?void 0:Y.algorithm)===x.Z.darkAlgorithm?"dark":"default",securityLevel:"loose",startOnLoad:!1}},[Y==null?void 0:Y.algorithm,Y==null?void 0:Y.token.fontFamily]),C=(0,u.useState)(""),Be=h()(C,2),Q=Be[0],xe=Be[1],ue=(0,u.useState)(),De=h()(ue,2),re=De[0],Ue=De[1],we=(0,u.useId)(),Ye=(0,P.kebabCase)("mermaid-".concat(we));return(0,g.Z)(T()(y()().mark(function Ge(){var Ne,vn,$e,sn;return y()().wrap(function(Ze){for(;;)switch(Ze.prev=Ze.next){case 0:return Ze.prev=0,Ze.next=3,c();case 3:if(Ne=Ze.sent,Ne){Ze.next=7;break}return xe(le),Ze.abrupt("return");case 7:return Ze.next=9,Ne.parse(le);case 9:if(vn=Ze.sent,!vn){Ze.next=19;break}return Ne.initialize(Oe),Ze.next=14,Ne.render(Ye,le);case 14:$e=Ze.sent,sn=$e.svg,xe(sn),Ze.next=20;break;case 19:throw new Error("Invalid Mermaid syntax");case 20:Ze.next=26;break;case 22:Ze.prev=22,Ze.t0=Ze.catch(0),Q||console.error("Mermaid parse error: ",Ze.t0),xe(Q||"");case 26:case"end":return Ze.stop()}},Ge,null,[[0,22]])})),[le,Oe]),(0,u.useEffect)(function(){if(Q){var Ge=new Blob([Q],{type:"image/svg+xml"}),Ne=URL.createObjectURL(Ge);return Ue(Ne),function(){URL.revokeObjectURL(Ne)}}},[Q]),re?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(t,{}),(0,O.jsx)(B.Z,{className:ve,src:re,alt:"mermaid",width:d,height:he,preview:{rootClassName:"".concat(ve,"-preview")}})]}):null}},31382:function(an,X,e){"use strict";e.d(X,{Z:function(){return _}});var ne=e(9783),h=e.n(ne),R=e(5574),y=e.n(R),b=e(67294),T=e(56044),S=e(68400),A=e.n(S),B=e(9053),g,x=(0,B.vJ)(g||(g=A()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.borderRadiusLG},function(c){return c.theme.colorFillTertiary},function(c){return c.theme.colorText},function(c){return c.theme.colorTextTertiary},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorTextTertiary},function(c){return c.theme.colorText},function(c){return c.theme.colorTextTertiary},function(c){return c.theme.colorText},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorText},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorTextTertiary},function(c){return c.theme.colorText},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorBgBase},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorPrimary},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorFillTertiary},function(c){return c.theme.colorFillTertiary},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorTextTertiary}),P=e(93967),M=e.n(P),u=e(28387),n=e(9838),m=e(64057),O=e(85893);function l(c){var L=(0,T.wv)(),ie=L.getPrefixCls,le=ie("operate-card");return(0,O.jsx)(O.Fragment,{children:(0,O.jsx)("div",{className:"".concat(le,"-line-body"),children:c.children})})}function t(c){var L,ie=(0,T.wv)(),le=ie.getPrefixCls,d=le("operate-card"),he=(0,b.useState)(((L=c.body)===null||L===void 0?void 0:L.defaultOpen)||!1),G=y()(he,2),Y=G[0],te=G[1];return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(x,{}),(0,O.jsxs)("div",{className:d,children:[(0,O.jsxs)("div",{className:M()("".concat(d,"-header"),c.header.className,h()({},"".concat(d,"-header-has-body"),c.body)),onClick:function(){c.body&&te(!Y)},children:[(0,O.jsx)("div",{className:"".concat(d,"-header-icon"),children:c.header.icon}),typeof c.header.title=="string"?(0,O.jsx)("div",{className:"".concat(d,"-header-title"),children:c.header.title}):c.header.title,c.header.description&&(0,O.jsx)("div",{className:"".concat(d,"-header-description"),children:c.header.description}),c.body&&(0,O.jsx)(m.Z,{size:"small",bordered:!1,className:"".concat(d,"-header-arrow"),icon:Y?(0,O.jsx)(u.Z,{}):(0,O.jsx)(n.Z,{})})]}),c.body&&Y&&(0,O.jsx)("div",{className:"".concat(d,"-body"),children:c.body.children})]})]})}t.LineBody=l;var _=t},85762:function(an,X,e){"use strict";e.d(X,{Z:function(){return l}});var ne=e(5574),h=e.n(ne),R=e(56044),y=e(31382),b=e(37303),T=e(64057),S=e(28387),A=e(9838),B=e(48095),g=e(50104),x=e(55839),P=e(16494),M=e(86250),u=e(67294),n=e(85893);function m(t){var _=t.images,c=(0,R.wv)(),L=c.getPrefixCls,ie=L("operate-card");return(0,n.jsx)(x.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(P.Z.PreviewGroup,{children:_.map(function(le,d){return(0,n.jsx)(P.Z,{src:le,width:44,height:44},d)})})})}function O(t){var _=t.item,c=(0,u.useState)(!1),L=h()(c,2),ie=L[0],le=L[1],d=(0,R.wv)(),he=d.getPrefixCls,G=he("operate-card");return(0,n.jsxs)("div",{className:"".concat(G,"-rag-item"),children:[(0,n.jsxs)("div",{className:"".concat(G,"-rag-item-title"),onClick:function(){le(!ie)},children:[(0,n.jsx)("span",{children:_.title}),(0,n.jsx)("span",{style:{flex:1}}),_.score?(0,n.jsxs)(b.Z,{color:"mauve",size:"small",className:"".concat(G,"-rag-item-score"),children:["\u5F97\u5206 ",(0,n.jsx)("b",{children:_.score})]}):null,(0,n.jsx)(T.Z,{bordered:!1,size:"small",icon:ie?(0,n.jsx)(S.Z,{}):(0,n.jsx)(A.Z,{})})]}),ie&&(0,n.jsxs)("div",{className:"".concat(G,"-rag-item-content"),children:[(0,n.jsx)("div",{className:"".concat(G,"-rag-item-content-text"),children:_.content}),_.images&&(0,n.jsx)("div",{className:"".concat(G,"-rag-item-images"),children:(0,n.jsx)(m,{images:_.images})}),_.link?(0,n.jsx)("a",{onClick:function(){window.open(_.link,"_blank")},className:"".concat(G,"-rag-item-footer"),href:_.link,target:"_blank",children:_.footer}):(0,n.jsx)("div",{className:"".concat(G,"-rag-item-footer"),children:_.footer})]})]})}function l(t){var _=t.title,c=_===void 0?"\u77E5\u8BC6\u5E93\u68C0\u7D22":_,L=t.subTitle,ie=t.defaultOpen,le=ie===void 0?!0:ie,d=t.placeholder,he=d===void 0?"\u672A\u67E5\u8BE2\u5230\u4E0E\u63D0\u95EE\u76F8\u5173\u77E5\u8BC6\u5E93":d,G=t.images,Y=t.query,te=t.filters,ve=(0,R.wv)(),Oe=ve.getPrefixCls,C=Oe("operate-card"),Be=(0,n.jsxs)(y.Z.LineBody,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"\u68C0\u7D22 Query"}),(0,n.jsx)("div",{className:"".concat(C,"-rag-group-content"),children:Y})]}),G!=null&&G.length?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"\u68C0\u7D22\u56FE\u7247"}),(0,n.jsx)("div",{className:"".concat(C,"-rag-group-content ").concat(C,"-rag-group-content-images"),children:(0,n.jsx)(m,{images:G})})]}):null,te?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"\u8FC7\u6EE4\u6761\u4EF6"}),(0,n.jsx)("div",{className:"".concat(C,"-rag-group-content"),children:te})]}):null,t.list.length?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"Output"}),t.list.map(function(Q,xe){return(0,n.jsx)(O,{item:Q},xe)})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"".concat(C,"-rag-group-title"),children:"Output"}),(0,n.jsxs)(M.Z,{align:"center",justify:"center",gap:8,className:"".concat(C,"-rag-empty-placeholder"),children:[(0,n.jsx)(B.Z,{}),(0,n.jsx)("span",{children:he})]})]})]});return(0,n.jsx)(y.Z,{header:{icon:(0,n.jsx)(g.Z,{}),title:c,description:L},body:{defaultOpen:le,children:(0,n.jsx)("div",{className:"".concat(C,"-rag-children"),children:Be})}})}},79323:function(an,X,e){"use strict";e.d(X,{Z:function(){return T}});var ne=e(56044),h=e(31382),R=e(40443),y=e(33593),b=e(85893);function T(S){var A=(0,ne.wv)(),B=A.getPrefixCls,g=S.defaultOpen,x=g===void 0?!0:g,P=S.loading,M=P===void 0?!1:P,u=B("operate-card");return(0,b.jsx)(h.Z,{header:{icon:M?(0,b.jsx)(R.Z,{spin:!0}):(0,b.jsx)(y.Z,{}),title:S.title,description:S.subTitle},body:{defaultOpen:M?x:!1,children:(0,b.jsx)(h.Z.LineBody,{children:(0,b.jsx)("div",{className:"".concat(u,"-thinking"),children:S.content})})}},M.toString())}},6874:function(an,X,e){"use strict";e.d(X,{Z:function(){return x}});var ne=e(9783),h=e.n(ne),R=e(56044),y=e(31382),b=e(41775),T=e(77900),S=e(40443),A=e(93967),B=e.n(A),g=e(85893);function x(P){var M=(0,R.wv)(),u=M.getPrefixCls,n=u("operate-card"),m=P.title,O=m===void 0?"Task List":m,l=P.list.filter(function(t){return t.status==="done"}).length;return(0,g.jsx)(y.Z,{header:{icon:(0,g.jsx)(b.Z,{}),title:O,description:"\xB7 ".concat(l?l+" of ":""," ").concat(P.list.length)},body:{defaultOpen:P.defaultOpen,children:(0,g.jsx)("div",{className:"".concat(n,"-todo-list"),children:P.list.map(function(t){return(0,g.jsxs)("div",{className:B()(h()(h()({},"".concat(n,"-todo-list-item"),!0),"".concat(n,"-todo-list-item-").concat(t.status),!0)),children:[(0,g.jsx)("div",{className:"".concat(n,"-todo-list-item-icon"),children:{done:(0,g.jsx)(T.Z,{}),todo:(0,g.jsx)(T.Z,{}),running:(0,g.jsx)(S.Z,{spin:!0})}[t.status]}),(0,g.jsx)("div",{className:"".concat(n,"-todo-list-item-title"),style:{textDecoration:t.status==="done"?"line-through":"none"},children:t.title})]},t.title)})})}})}},85786:function(an,X,e){"use strict";e.d(X,{Z:function(){return m}});var ne=e(5574),h=e.n(ne),R=e(56044),y=e(31382),b=e(97634),T=e(89698),S=e(40443),A=e(78598),B=e(33811),g=e(64057),x=e(4146),P=e(39536),M=e(67294),u=e(85893);function n(O){var l=(0,R.wv)(),t=l.getPrefixCls,_=t("operate-card"),c=typeof O.content=="string"?O.content:JSON.stringify(O.content),L=(0,M.useState)(!1),ie=h()(L,2),le=ie[0],d=ie[1],he=(0,M.useRef)(null);return(0,u.jsx)("div",{className:"".concat(_,"-tool-call-block"),children:(0,u.jsx)(B.Z,{title:O.title,extra:(0,u.jsx)(g.Z,{size:"small",style:{marginRight:"-6px"},icon:le?(0,u.jsx)(b.Z,{}):(0,u.jsx)(T.Z,{}),bordered:!1,onClick:function(){(0,P.J)(c).then(function(){clearTimeout(he.current),d(!0),he.current=setTimeout(function(){d(!1)},2e3)}).catch(function(){console.warn("Copy failed")})}}),children:(0,u.jsx)(x.ZP,{language:"json",value:c,readOnly:!0})})})}function m(O){var l=O.title,t=l===void 0?"Call Tool":l,_=O.subTitle,c=O.defaultOpen,L=c===void 0?!0:c,ie=O.loading,le=ie===void 0?!1:ie;return(0,u.jsx)(y.Z,{header:{icon:le?(0,u.jsx)(S.Z,{spin:!0}):(0,u.jsx)(A.Z,{}),title:t,description:_},body:{defaultOpen:L,children:(0,u.jsxs)(y.Z.LineBody,{children:[(0,u.jsx)(n,{title:"Input",content:O.input}),(0,u.jsx)(n,{title:"Output",content:O.output})]})}})}},69610:function(an,X,e){"use strict";e.d(X,{Z:function(){return B}});var ne=e(9783),h=e.n(ne),R=e(56044),y=e(31382),b=e(9229),T=e(93967),S=e.n(T),A=e(85893);function B(g){var x=(0,R.wv)(),P=x.getPrefixCls,M=P("operate-card"),u=g.title,n=u===void 0?"\u8054\u7F51\u641C\u7D22":u,m=g.subTitle;return(0,A.jsx)(y.Z,{header:{icon:(0,A.jsx)(b.Z,{}),title:n,description:m},body:{defaultOpen:!0,children:(0,A.jsx)(y.Z.LineBody,{children:g.list.map(function(O){return(0,A.jsxs)("div",{className:S()(h()({},"".concat(M,"-web-search-item"),!0)),onClick:function(){window.open(O.link,"_blank")},children:[(0,A.jsx)("img",{className:"".concat(M,"-web-search-item-icon"),src:O.icon,alt:O.title}),(0,A.jsx)("div",{className:"".concat(M,"-web-search-item-title"),children:O.title}),O.subTitle&&(0,A.jsx)("div",{className:"".concat(M,"-web-search-item-subTitle"),children:O.subTitle})]},O.title)})})}})}},56809:function(an,X,e){"use strict";e.d(X,{B4:function(){return h.Z},BI:function(){return ne.Z},Sn:function(){return b.Z},fz:function(){return y.Z},x4:function(){return R.Z}});var ne=e(79323),h=e(6874),R=e(85786),y=e(69610),b=e(85762)},83962:function(an,X,e){"use strict";e.d(X,{HJ:function(){return A},NR:function(){return T},xy:function(){return S}});var ne=e(97857),h=e.n(ne),R=e(67294),y=e(24963),b=e(85893),T=(0,R.createContext)(void 0),S=function(g){return(0,b.jsx)(T.Provider,{value:g.cardConfig,children:g.children})},A=function(){var g=R.useContext(T);return R.useMemo(function(){return h()(h()({},y),g)},[g])}},92049:function(an,X,e){"use strict";e.d(X,{R:function(){return y},bN:function(){return b}});var ne=e(67294),h=e(85893),R=(0,ne.createContext)(void 0),y=function(S){return(0,h.jsx)(R.Provider,{value:S,children:S.children})},b=function(){var S=ne.useContext(R);return S||{}}},56044:function(an,X,e){"use strict";e.d(X,{wv:function(){return S}});var ne=e(21766),h=e(67294),R=e(83962),y=e(92049),b=e(85893),T=function(B){var g=B.children,x=B.cardConfig,P=B.markdown;return(0,b.jsx)(y.R,{markdown:P,children:(0,b.jsx)(R.xy,{cardConfig:x,children:g})})};function S(){var A=h.useContext(ne.ZP.ConfigContext);return A}X.ZP=T},44294:function(an,X,e){"use strict";e.d(X,{Z:function(){return M},a:function(){return g}});var ne=e(97857),h=e.n(ne),R=e(24772),y=e(83622),b=e(93967),T=e.n(b),S=e(29372),A=e(67294),B=e(85893),g=A.createContext({}),x=function(){return{height:0}},P=function(n){return{height:n.scrollHeight}};function M(u){var n=u.title,m=u.onOpenChange,O=u.open,l=u.children,t=u.className,_=u.style,c=u.classNames,L=c===void 0?{}:c,ie=u.styles,le=ie===void 0?{}:ie,d=u.closable,he=u.forceRender,G=A.useContext(g),Y=G.prefixCls,te="".concat(Y,"-header");return(0,B.jsx)(S.ZP,{motionEnter:!0,motionLeave:!0,motionName:"".concat(te,"-motion"),leavedClassName:"".concat(te,"-motion-hidden"),onEnterStart:x,onEnterActive:P,onLeaveStart:P,onLeaveActive:x,visible:O,forceRender:he,children:function(Oe){var C=Oe.className,Be=Oe.style;return(0,B.jsxs)("div",{className:T()(te,C,t),style:h()(h()({},Be),_),children:[(d!==!1||n)&&(0,B.jsxs)("div",{className:T()("".concat(te,"-header"),L.header),style:h()({},le.header),children:[(0,B.jsx)("div",{className:"".concat(te,"-title"),children:n}),d!==!1&&(0,B.jsx)("div",{className:"".concat(te,"-close"),children:(0,B.jsx)(y.ZP,{type:"text",icon:(0,B.jsx)(R.Z,{}),size:"small",onClick:function(){m==null||m(!O)}})})]}),l&&(0,B.jsx)("div",{className:T()("".concat(te,"-content"),L.content),style:h()({},le.content),children:l})]})}})}},66672:function(an,X,e){"use strict";e.d(X,{Z:function(){return pe}});var ne=e(19632),h=e.n(ne),R=e(97857),y=e.n(R),b=e(9783),T=e.n(b),S=e(5574),A=e.n(S),B=e(13769),g=e.n(B),x=e(48045),P=e(86250),M=e(93967),u=e.n(M),n=e(56790),m=e(30339),O=e(94787),l=e(67294),t=e(11154),_=e(83204);function c(r,p){return(0,l.useImperativeHandle)(r,function(){var E=p(),N=E.nativeElement;return new Proxy(N,{get:function(F,k){return E[k]?E[k]:Reflect.get(F,k)}})})}var L=e(56044),ie=e(44294),le=e(64057),d=e(85893),he=["className","action","onClick"],G=l.createContext(null);function Y(r){var p=r.className,E=r.action,N=r.onClick,H=g()(r,he),F=l.useContext(G),k=F.prefixCls,q=F.disabled,de=F[E],V=q||H.disabled||F["".concat(E,"Disabled")]||!1;return(0,d.jsx)(le.Z,y()(y()({bordered:!1},H),{},{disabled:V,onClick:function(Ce){V||(de&&de(),N&&N(Ce))},className:u()(k,p,T()({},"".concat(k,"-disabled"),V))}))}var te=l.forwardRef(Y),ve=e(69291);function Oe(r,p){return(0,d.jsx)(te,y()(y()({icon:(0,d.jsx)(ve.Z,{})},r),{},{action:"onClear",ref:p}))}var C=l.forwardRef(Oe),Be=(0,l.memo)(function(r){var p=r.className;return(0,d.jsxs)("svg",{color:"currentColor",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:p,children:[(0,d.jsx)("title",{children:"Stop Loading"}),(0,d.jsx)("rect",{fill:"currentColor",height:"250",rx:"24",ry:"24",width:"250",x:"375",y:"375"})]})}),Q=Be,xe=e(67055),ue=["className","loading"];function De(r,p){var E=l.useContext(G),N=E.prefixCls,H=r.className,F=r.loading,k=g()(r,ue),q=(0,d.jsx)(te,y()(y()({icon:(0,d.jsx)(Q,{className:"".concat(N,"-loading-icon")}),type:"primary",variant:"text"},k),{},{className:u()(H,"".concat(N,"-loading-button")),action:"onCancel",ref:p}));return typeof r.loading=="string"?(0,d.jsx)(xe.Z,{title:r.loading,children:q}):q}var re=l.forwardRef(De),Ue=e(43103);function we(r,p){return(0,d.jsx)(te,y()(y()({icon:(0,d.jsx)(Ue.Z,{}),type:"primary"},r),{},{action:"onSend",ref:p}))}var Ye=l.forwardRef(we),Ge=e(36763),Ne=e(21474),vn=1e3,$e=4,sn=140,tn=sn/2,Ze=250,Ln=500,I=.8;function ye(r){var p=r.className;return(0,d.jsxs)("svg",{color:"currentColor",viewBox:"0 0 ".concat(vn," ").concat(vn),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:p,children:[(0,d.jsx)("title",{children:"Speech Recording"}),Array.from({length:$e}).map(function(E,N){var H=(vn-sn*$e)/($e-1),F=N*(H+sn),k=vn/2-Ze/2,q=vn/2-Ln/2;return(0,d.jsxs)("rect",{fill:"currentColor",rx:tn,ry:tn,height:Ze,width:sn,x:F,y:k,children:[(0,d.jsx)("animate",{attributeName:"height",values:"".concat(Ze,"; ").concat(Ln,"; ").concat(Ze),keyTimes:"0; 0.5; 1",dur:"".concat(I,"s"),begin:"".concat(I/$e*N,"s"),repeatCount:"indefinite"}),(0,d.jsx)("animate",{attributeName:"y",values:"".concat(k,"; ").concat(q,"; ").concat(k),keyTimes:"0; 0.5; 1",dur:"".concat(I,"s"),begin:"".concat(I/$e*N,"s"),repeatCount:"indefinite"})]},N)})]})}function Me(r,p){var E=l.useContext(G),N=E.speechRecording,H=E.onSpeechDisabled,F=E.prefixCls,k=null;return N?k=(0,d.jsx)(ye,{className:"".concat(F,"-recording-icon")}):H?k=(0,d.jsx)(Ge.Z,{}):k=(0,d.jsx)(Ne.Z,{}),(0,d.jsx)(te,y()(y()({icon:k,variant:"text"},r),{},{action:"onSpeech",ref:p}))}var qe=l.forwardRef(Me),ln=e(68400),Qe=e.n(ln),cn=e(9053),un,en=(0,cn.vJ)(un||(un=Qe()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.colorBgBase},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.motionDurationSlow},function(r){return r.theme.lineWidth},function(r){return r.theme.colorPrimaryHover},function(r){return r.theme.lineWidth},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorBgContainerDisabled},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.paddingXS},function(r){return r.theme.colorTextTertiary},function(r){return"var(--".concat(r.theme.prefixCls,"-color-fill-disable)")},function(r){return r.theme.controlHeight},function(r){return r.theme.controlHeight},function(r){return r.theme.prefixCls}),gn=en,on=e(52677),dn=e.n(on),Je;!Je&&typeof window!="undefined"&&(Je=window.SpeechRecognition||window.webkitSpeechRecognition);function jn(r,p){var E=(0,n.zX)(r),N=l.useMemo(function(){return dn()(p)==="object"?[p.recording,p.onRecordingChange,typeof p.recording=="boolean"]:[void 0,void 0,!1]},[p]),H=A()(N,3),F=H[0],k=H[1],q=H[2],de=l.useState(null),V=A()(de,2),ce=V[0],Ce=V[1];l.useEffect(function(){if(typeof navigator!="undefined"&&"permissions"in navigator){var We=null;return navigator.permissions.query({name:"microphone"}).then(function(xn){Ce(xn.state),xn.onchange=function(){Ce(this.state)},We=xn}),function(){We&&(We.onchange=null)}}},[]);var Fe=Je&&ce!=="denied",Ke=l.useRef(null),He=(0,n.C8)(!1,{value:F}),rn=A()(He,2),Ae=rn[0],se=rn[1],$=l.useRef(!1),An=function(){if(Fe&&!Ke.current){var xn=new Je;xn.onstart=function(){se(!0)},xn.onend=function(){se(!1)},xn.onresult=function(Xe){if(!$.current){var yn,_e=(yn=Xe.results)===null||yn===void 0||(yn=yn[0])===null||yn===void 0||(yn=yn[0])===null||yn===void 0?void 0:yn.transcript;E(_e)}$.current=!1},Ke.current=xn}},pn=(0,n.zX)(function(We){We&&!Ae||($.current=We,q?k==null||k(!Ae):(An(),Ke.current&&(Ae?(Ke.current.stop(),k==null||k(!1)):(Ke.current.start(),k==null||k(!0)))))});return[Fe,pn,Ae]}var bn=e(89102),Sn,fn=(0,cn.vJ)(Sn||(Sn=Qe()([`
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

`])),function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.colorTextSecondary},function(r){return r.theme.colorPrimary},function(r){return r.theme.colorPrimary},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorFillTertiary},function(r){return r.theme.colorTextSecondary});function a(r){var p=(0,L.wv)(),E=p.getPrefixCls,N=E("sender-mode-select"),H=r.value,F=r.onChange,k=(0,l.useMemo)(function(){var de=r.options.find(function(V){return V.value===H})||{};return de},[r.value]),q=(0,d.jsx)(bn.Z,{onClick:function(){return F(void 0)},style:{cursor:"pointer",fontSize:20}});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(fn,{}),(0,d.jsxs)("div",{className:N,style:r.style,children:[(0,d.jsx)("div",{className:"".concat(N,"-options ").concat(H?"".concat(N,"-hide"):""),children:r.options.map(function(de){var V=(0,d.jsx)(ke,y()({onClick:function(){return F(de.value)},className:"".concat(N,"-option")},de),de.value);return V})}),(0,d.jsx)("div",{className:"".concat(N,"-display ").concat(H?"":"".concat(N,"-hide")),children:(0,d.jsxs)("div",{className:"".concat(N,"-display-flex"),children:[(0,d.jsx)(ke,y()(y()({},k),{},{label:(k==null?void 0:k.selectedLabel)||(k==null?void 0:k.label),className:"".concat(N,"-display-label")})),r.desc&&(0,d.jsx)("div",{className:"".concat(N,"-display-desc"),children:r.desc}),r.closeTip?(0,d.jsx)(xe.Z,{title:r.closeTip,children:q}):q]})})]})]})}function ke(r){var p=(0,d.jsxs)("div",{className:r.className,onClick:r.onClick,children:[r.icon,r.label]});return r.tooltip?(0,d.jsx)(xe.Z,{title:r.tooltip,placement:"topLeft",children:p}):p}var nn=e(85441),mn=e(32485),o,ae=(0,cn.vJ)(o||(o=Qe()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorFillTertiary});function j(r){var p=r.leftChildren,E=r.rightChildren,N=r.children,H=(0,L.wv)().getPrefixCls("sender-before-ui-container"),F=(0,l.useMemo)(function(){return p?(0,d.jsx)("div",{className:"".concat(H,"-left"),children:p}):null},[p]),k=(0,l.useMemo)(function(){return E?(0,d.jsx)("div",{className:"".concat(H,"-right"),children:E}):null},[E]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ae,{}),(0,d.jsx)("div",{className:H,children:(0,d.jsx)("div",{className:"".concat(H,"-content"),children:(0,d.jsx)("div",{className:"".concat(H,"-content-children"),children:N||(0,d.jsxs)(d.Fragment,{children:[F,k]})})})})]})}var Z=["styles","classNames","className","rootClassName","style","defaultValue","value","readOnly","enableFocusExpand","sendDisabled","submitType","onSubmit","loading","onCancel","onChange","onFocus","onBlur","actions","onKeyPress","onKeyDown","disabled","header","onPaste","allowSpeech","onPasteFile","components","initialRows","scalable"];function w(r,p,E){return(0,O.Z)(r,p)||E}var U=l.forwardRef(function(r,p){var E=r,N=E.styles,H=N===void 0?{}:N,F=E.classNames,k=F===void 0?{}:F,q=E.className,de=E.rootClassName,V=E.style,ce=E.defaultValue,Ce=E.value,Fe=E.readOnly,Ke=E.enableFocusExpand,He=Ke===void 0?!1:Ke,rn=E.sendDisabled,Ae=rn===void 0?!1:rn,se=E.submitType,$=se===void 0?"enter":se,An=E.onSubmit,pn=E.loading,We=E.onCancel,xn=E.onChange,Xe=E.onFocus,yn=E.onBlur,_e=E.actions,Le=E.onKeyPress,Ie=E.onKeyDown,me=E.disabled,Ee=E.header,hn=E.onPaste,Cn=E.allowSpeech,In=E.onPasteFile,Tn=E.components,On=E.initialRows,Bn=On===void 0?2:On,wn=E.scalable,Kn=g()(E,Z),Mn=wn,Gn=(0,l.useState)(Mn?!1:void 0),Nn=A()(Gn,2),_n=Nn[0],Un=Nn[1],Fn=(0,l.useState)(!1),Rn=A()(Fn,2),En=Rn[0],Dn=Rn[1],Hn=l.useMemo(function(){return _n?{maxRows:5,minRows:5}:{maxRows:5,minRows:Bn}},[Mn,_n]),Xn=(0,L.wv)(),ut=Xn.direction,gt=Xn.getPrefixCls,Zn=gt("sender"),Vn=l.useRef(null),et=l.useRef(null);c(p,function(){var ee,K;return{nativeElement:Vn.current,focus:(ee=et.current)===null||ee===void 0?void 0:ee.focus,blur:(K=et.current)===null||K===void 0?void 0:K.blur}}),(0,t.Z)(Vn,{onFocus:function(K){Dn(!0),Xe==null||Xe()},onBlur:function(){Vn.current&&!Vn.current.contains(document.activeElement)&&(Dn(!1),yn==null||yn())}}),(0,_.Z)("click",function(ee){Dn(!0),Xe==null||Xe()},{target:Vn});var dt="".concat(Zn,"-input"),pt=u()(Zn,q,de,T()(T()(T()(T()({},"".concat(Zn,"-rtl"),ut==="rtl"),"".concat(Zn,"-disabled"),me),"".concat(Zn,"-focus"),En&&He),"".concat(Zn,"-blur"),!En&&He)),xt="".concat(Zn,"-actions-btn"),nt="".concat(Zn,"-actions-list"),Ct=(0,n.C8)(ce||"",{value:Ce}),ft=A()(Ct,2),$n=ft[0],yt=ft[1],ot=function(K,W){yt(K),xn&&xn(K,W)},bt=jn(function(ee){ot("".concat($n," ").concat(ee))},Cn),st=A()(bt,3),jt=st[0],vt=st[1],Et=st[2],St=w(Tn,["input"],x.Z.TextArea),Pt=(0,m.Z)(Kn,{attr:!0,aria:!0,data:!0}),At=y()(y()({},Pt),{},{ref:et}),it=function(){!J.onSendDisabled&&An&&!pn&&An($n)},Tt=function(){ot("")},lt=l.useRef(!1),Lt=function(){lt.current=!0},s=function(){lt.current=!1},f=function(K){var W=K.key==="Enter"&&!lt.current;switch($){case"enter":W&&!K.shiftKey&&(K.preventDefault(),it());break;case"shiftEnter":W&&K.shiftKey&&(K.preventDefault(),it());break}Le&&Le(K)},i=function(K){var W;if(!In){hn==null||hn(K);return}var fe=Array.from(((W=K.clipboardData)===null||W===void 0?void 0:W.files)||[]);if(fe.length===0){var Pe,be=Array.from(((Pe=K.clipboardData)===null||Pe===void 0?void 0:Pe.items)||[]);fe=be.filter(function(ge){return ge.kind==="file"}).map(function(ge){return ge.getAsFile()}).filter(function(ge){return ge!==null})}fe.length>0?(fe.forEach(function(ge){return In(ge)}),K.preventDefault()):hn==null||hn(K)},v=function(K){var W,fe;K.target!==((W=Vn.current)===null||W===void 0?void 0:W.querySelector(".".concat(dt)))&&K.preventDefault(),(fe=et.current)===null||fe===void 0||fe.focus()},D=l.useMemo(function(){var ee=Array.isArray(r.prefix)?h()(r.prefix):[r.prefix];return Mn&&ee.push((0,d.jsx)(le.Z,{onClick:function(){return Un(!_n)},bordered:!1,icon:_n?(0,d.jsx)(nn.Z,{}):(0,d.jsx)(mn.Z,{})},"zoom")),ee},[r.prefix,Mn,_n,Cn]),z=(0,d.jsx)(P.Z,{className:"".concat(nt,"-presets"),children:pn?(0,d.jsx)(re,{loading:pn,disabled:!!me}):(0,d.jsx)(Ye,{disabled:!!me})});typeof _e=="function"?z=_e(z,{components:{SendButton:Ye,ClearButton:C,LoadingButton:re}}):_e&&(z=_e);var J={prefixCls:xt,onSend:it,onSendDisabled:!$n||!$n.trim()||Ae,onClear:Tt,onClearDisabled:!$n,onCancel:We,onCancelDisabled:!pn,onSpeech:function(){return vt(!1)},onSpeechDisabled:!jt,speechRecording:Et,disabled:!!me};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(gn,{}),(0,d.jsxs)("div",{ref:Vn,className:pt,style:V,children:[Ee&&(0,d.jsx)(ie.a.Provider,{value:{prefixCls:Zn,focus:En,enableFocusExpand:He},children:Ee}),(0,d.jsxs)("div",{className:"".concat(Zn,"-content"),children:[(0,d.jsx)(St,y()(y()({},At),{},{disabled:!!me,style:H.input,className:u()(dt,k.input),autoSize:Hn,value:$n.slice(0,r.maxLength||Number.MAX_SAFE_INTEGER),onChange:function(K){ot(K.target.value,K),vt(!0)},onPressEnter:f,onCompositionStart:Lt,onCompositionEnd:s,onKeyDown:Ie,onPaste:i,variant:"borderless",readOnly:Fe})),(0,d.jsxs)("div",{className:"".concat(Zn,"-content-bottom"),children:[D.length>0&&(0,d.jsx)("div",{className:u()("".concat(Zn,"-prefix"),k.prefix),style:H.prefix,children:(0,d.jsxs)(P.Z,{gap:8,children:[Cn&&(0,d.jsx)(G.Provider,{value:J,children:(0,d.jsx)(qe,{})}),D]})}),(0,d.jsxs)("div",{className:u()(nt,k.actions),style:H.actions,children:[r.maxLength?(0,d.jsxs)("div",{className:"".concat(nt,"-length"),children:[$n.length,"/",r.maxLength]}):null,(0,d.jsx)(G.Provider,{value:J,children:z})]})]})]})]})]})}),oe=U;oe.Header=ie.Z,oe.ModeSelect=a,oe.BeforeUIContainer=j;var pe=oe},70770:function(an,X,e){"use strict";e.d(X,{Z:function(){return O}});var ne=e(89034),h=e(36674),R=e(9343),y=e(48095),b=e(97634),T=e(56044),S=e(68400),A=e.n(S),B=e(9053),g,x=(0,B.vJ)(g||(g=A()([`
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
`])),function(l){return l.theme.prefixCls},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorSuccessBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorSuccess},function(l){return l.theme.colorErrorBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorError},function(l){return l.theme.colorWarningBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorWarning},function(l){return l.theme.colorFillTertiary},function(l){return l.theme.prefixCls},function(l){return l.theme.colorInfo},function(l){return l.theme.colorText},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBgBase},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBgBase},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorText}),P=e(93967),M=e.n(P),u=e(21403),n=e(85893);function m(l){var t=(0,T.wv)(),_=t.getPrefixCls,c=_("status-card"),L=l.icon||{success:(0,n.jsx)(ne.Z,{}),error:(0,n.jsx)(h.Z,{}),warning:(0,n.jsx)(R.Z,{}),info:(0,n.jsx)(y.Z,{})}[l.status];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{}),(0,n.jsxs)("div",{className:M()(c,"".concat(c,"-").concat(l.status)),children:[(0,n.jsxs)("div",{className:"".concat(c,"-header"),children:[(0,n.jsxs)("div",{className:"".concat(c,"-header-top"),children:[(0,n.jsx)("div",{className:"".concat(c,"-header-icon"),children:L}),(0,n.jsx)("div",{className:"".concat(c,"-header-title"),children:l.title})]}),l.description&&(0,n.jsx)("div",{className:"".concat(c,"-header-description"),children:l.description})]}),l.children&&(0,n.jsx)("div",{className:"".concat(c,"-body"),children:l.children})]})]})}m.HITL=function(l){var t=l.title,_=t===void 0?"\u9700\u8981\u7528\u6237\u4EBA\u5DE5\u5E72\u9884":t,c=l.description,L=l.waitButtonText,ie=L===void 0?"\u6211\u5DF2\u5B8C\u6210\uFF0C\u7EE7\u7EED\u4EFB\u52A1":L,le=l.doneButtonText,d=le===void 0?"\u7528\u6237\u5DF2\u786E\u8BA4":le,he=(0,T.wv)(),G=he.getPrefixCls,Y=G("status-card"),te=l.actions!==void 0?l.actions:l.done?(0,n.jsx)(u.Z,{onClick:l.onDone,type:"primary",disabled:!0,icon:(0,n.jsx)(b.Z,{}),children:d}):(0,n.jsx)(u.Z,{onClick:l.onDone,type:"primary",children:ie});return(0,n.jsx)(m,{status:l.done?"success":"info",title:_,children:c||te?(0,n.jsxs)("div",{className:"".concat(Y,"-HITL"),children:[c&&(0,n.jsx)("div",{className:"".concat(Y,"-HITL-desc"),children:c}),(0,n.jsx)("div",{className:"".concat(Y,"-HITL-button"),children:te})]}):null})},m.Statistic=function(l){var t=(0,T.wv)(),_=t.getPrefixCls,c=_("status-card");return(0,n.jsx)("div",{className:"".concat(c,"-statistic"),children:l.values.map(function(L){return(0,n.jsxs)("div",{className:"".concat(c,"-statistic-item"),children:[(0,n.jsx)("div",{className:"".concat(c,"-statistic-item-title"),children:L.title}),(0,n.jsx)("div",{className:"".concat(c,"-statistic-item-value"),children:L.value})]})})})};var O=m},7354:function(an,X,e){"use strict";var ne=e(15009),h=e.n(ne),R=e(9783),y=e.n(R),b=e(97857),T=e.n(b),S=e(77262),A=e.n(S),B=e(93938),g=e.n(B),x=`

`,P=`
`,M=":",u=function(t){return(t!=null?t:"").trim()!==""};function n(){var l="";return new TransformStream({transform:function(_,c){l+=_;var L=l.split(x);L.slice(0,-1).forEach(function(ie){u(ie)&&c.enqueue(ie)}),l=L[L.length-1]},flush:function(_){u(l)&&_.enqueue(l)}})}function m(){return new TransformStream({transform:function(t,_){var c=t.split(P),L=c.reduce(function(ie,le){var d=le.indexOf(M);if(d===-1)throw new Error('The key-value separator "'.concat(M,'" is not found in the sse line chunk!'));var he=le.slice(0,d);if(!u(he))return ie;var G=le.slice(d+1);return T()(T()({},ie),{},y()({},he,G))},{});Object.keys(L).length!==0&&_.enqueue(L)}})}function O(l,t){var _=l.readableStream,c=l.transformStream;if(!(_ instanceof ReadableStream))throw new Error("The options.readableStream must be an instance of ReadableStream.");var L=new TextDecoderStream,ie=c?_.pipeThrough(L).pipeThrough(c):_.pipeThrough(L).pipeThrough(n()).pipeThrough(m());return ie[Symbol.asyncIterator]=g()(h()().mark(function le(){var d,he,G,Y;return h()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:d=this.getReader();case 1:return ve.next=4,A()(d.read());case 4:if(he=ve.sent,G=he.done,Y=he.value,!G){ve.next=9;break}return ve.abrupt("break",15);case 9:if(Y){ve.next=11;break}return ve.abrupt("continue",1);case 11:return ve.next=13,t!=null&&t.openaiCompatible?T()(T()({},Y),{},{data:Y.data.slice(1)}):Y;case 13:ve.next=1;break;case 15:case"end":return ve.stop()}},le,this)})),ie}X.Z=O},39536:function(an,X,e){"use strict";e.d(X,{J:function(){return b}});var ne=e(15009),h=e.n(ne),R=e(99289),y=e.n(R);function b(S){return T.apply(this,arguments)}function T(){return T=y()(h()().mark(function S(A){var B;return h()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(!(window.isSecureContext&&navigator.clipboard)){x.next=4;break}return x.next=3,navigator.clipboard.writeText(A);case 3:return x.abrupt("return");case 4:B=document.createElement("textarea"),B.value=A,B.style.cssText="position:fixed;left:-9999px",document.body.appendChild(B),B.select();try{document.execCommand("copy",!0)}finally{document.body.removeChild(B)}case 10:case"end":return x.stop()}},S)})),T.apply(this,arguments)}},32116:function(an,X,e){"use strict";e.d(X,{Z:function(){return ne}});function ne(h){return new Promise(function(R){return setTimeout(R,h)})}},66366:function(an,X,e){"use strict";e.d(X,{Z:function(){return h}});var ne={i8:"1.1.54"},h=ne.i8},57657:function(an,X,e){"use strict";e.r(X);var ne=e(5574),h=e.n(ne),R=e(9053),y=e(67294),b=e(85893),T=function(){var B=(0,y.useState)({x:0,y:0}),g=h()(B,2),x=g[0],P=g[1],M=(0,y.useState)(!1),u=h()(M,2),n=u[0],m=u[1],O=(0,y.useRef)(null),l=S(),t=l.styles,_=l.cx;(0,y.useEffect)(function(){var G=function(te){if(O.current){var ve=O.current.getBoundingClientRect();P({x:te.clientX-ve.left,y:te.clientY-ve.top})}};return window.addEventListener("mousemove",G),function(){return window.removeEventListener("mousemove",G)}},[]),(0,y.useEffect)(function(){var G=setInterval(function(){m(!0),setTimeout(function(){return m(!1)},150)},5e3);return function(){return clearInterval(G)}},[]);var c=function(){var Y=32,te=32,ve=x.x-Y,Oe=x.y-te,C=6,Be=6,Q=Math.sqrt(ve*ve+Oe*Oe),xe=50;if(Q===0)return{x:0,y:0};var ue=Math.min(Q/xe,1),De=ve/Q*C*ue,re=Oe/Q*Be*ue;return{x:Math.max(-C,Math.min(C,De)),y:Math.max(-Be,Math.min(Be,re))}},L=function(Y){var te=32,ve=x.x-te,Oe=400;if(Math.abs(ve)<Oe)return 1;var C=Math.abs(ve)-Oe,Be=32-Oe,Q=Math.min(C/Be,1);return ve>Oe?Y?1-Q*.5:1:ve<-Oe?Y?1:1-Q*.5:1},ie=c(),le=c(),d=L(!0),he=L(!1);return(0,b.jsxs)("div",{ref:O,className:t.container,children:[(0,b.jsx)("div",{className:_(t.eye,t.leftEye,n?t.blinkingEye:""),style:{transform:"translate(".concat(ie.x,"px, ").concat(ie.y,"px) ").concat(n?"scaleY(0.1)":"scaleY(".concat(d,")"))}}),(0,b.jsx)("div",{className:_(t.eye,t.rightEye,n?t.blinkingEye:""),style:{transform:"translate(".concat(le.x,"px, ").concat(le.y,"px) ").concat(n?"scaleY(0.1)":"scaleY(".concat(he,")"))}})]})};X.default=T;var S=(0,R.kc)(function(A){var B=A.css,g=A.token;return{container:{width:64,height:64,backgroundColor:"black",borderRadius:12,position:"relative",cursor:"pointer",overflow:"hidden",boxShadow:"15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)"},eye:{width:6,height:12,backgroundColor:"white",borderRadius:99,position:"absolute",top:16,transition:"transform 0.1s ease-out"},leftEye:{left:22},rightEye:{left:36},blinkingEye:{transition:"transform 0.05s ease-out"}}})},31295:function(an,X,e){"use strict";e.d(X,{Z:function(){return B}});var ne=e(68400),h=e.n(ne),R=e(67294),y=e(9053),b=e(56044),T=e(85893),S,A=(0,y.vJ)(S||(S=h()([`
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
`])),function(g){return g.theme.prefixCls},function(g){return g.theme.colorText},function(g){return g.theme.colorTextSecondary});function B(g){var x=(0,b.wv)(),P=x.getPrefixCls,M=P("welcome"),u=typeof g.logo=="string"?(0,T.jsx)("img",{className:M+"-logo",src:g.logo}):g.logo;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(A,{}),(0,T.jsxs)("div",{className:M,style:g.style,children:[u,(0,T.jsxs)("div",{children:[(0,T.jsx)("div",{className:M+"-title",children:g.title}),(0,T.jsx)("div",{className:M+"-desc",children:g.desc})]})]})]})}},64437:function(an,X,e){"use strict";e.d(X,{Z:function(){return M}});var ne=e(97857),h=e.n(ne),R=e(67294),y=e(68997),b=e(56044),T=e(38850),S=e(68400),A=e.n(S),B=e(9053),g,x=(0,B.vJ)(g||(g=A()([`
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
`])),function(n){return n.theme.prefixCls},function(n){var m=n.theme;return m.colorText},function(n){var m=n.theme;return m.colorTextSecondary},function(n){var m=n.theme;return m.colorFillQuaternary},function(n){var m=n.theme;return m.colorText},function(n){var m=n.theme;return m.colorFillTertiary}),P=e(85893);function M(n){var m=n.greeting,O=n.avatar,l=n.description,t=n.prompts,_=n.onClick,c=(0,b.wv)().getPrefixCls("welcome-prompts");return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(x,{}),(0,P.jsxs)("div",{className:c,children:[O&&(typeof O=="string"?(0,P.jsx)(y.Z,{src:O,shape:"square",size:64}):O),m&&(0,P.jsx)("div",{className:"".concat(c,"-greeting"),children:m}),l&&(0,P.jsx)("div",{className:"".concat(c,"-description"),children:l}),(t==null?void 0:t.length)>0&&(0,P.jsx)("div",{className:"".concat(c,"-prompts"),children:t.map(function(L){var ie=typeof L=="string"?{label:L,value:L}:h()(h()({},L),{},{label:L.label||L.value,value:L.value});return(0,P.jsx)(u,{prompt:ie,prefixCls:c,onClick:_},ie.value)})})]})]})}function u(n){var m=n.prefixCls;return(0,P.jsxs)("div",{className:"".concat(m,"-prompt"),onClick:function(){var l;return(l=n.onClick)===null||l===void 0?void 0:l.call(n,n.prompt.value)},children:[(0,P.jsx)("img",{className:"".concat(m,"-prompt-icon"),src:"https://img.alicdn.com/imgextra/i3/O1CN01822qqr1PVyaK7MYtn_!!6000000001847-2-tps-40-40.png",alt:""}),(0,P.jsx)("span",{className:"".concat(m,"-prompt-label"),children:n.prompt.label}),(0,P.jsx)(T.Z,{})]})}},43601:function(an,X,e){"use strict";e.r(X),e.d(X,{AIGC:function(){return xe.Z},Accordion:function(){return t.Z},AgentScopeRuntimeWebUI:function(){return n.Z},AssetsPreview:function(){return ue.Z},Attachments:function(){return c.Z},Bubble:function(){return L.Z},ChatAnywhere:function(){return A.ZP},ChatInput:function(){return ve.Z},ConfigProvider:function(){return ne.ZP},Conversations:function(){return ie.Z},CustomCardsContext:function(){return R.NR},CustomCardsProvider:function(){return R.xy},DeepThink:function(){return _.Z},DeepThinking:function(){return _.Z},DefaultCards:function(){return u},DeviceAction:function(){return le.Z},Disclaimer:function(){return d.Z},GenerativeUISandbox:function(){return De.Z},HistoryPanel:function(){return ie.Z},ImageGenerator:function(){return he.Z},Markdown:function(){return Q.Z},Mermaid:function(){return G.Z},OperateCard:function(){return Y.Z},Process:function(){return t.Z},Rag:function(){return te.Sn},Sender:function(){return ve.Z},SparkChatProvider:function(){return y.ZP},StatusCard:function(){return Oe.Z},Stream:function(){return T.Z},Thinking:function(){return te.BI},TodoList:function(){return te.B4},ToolCall:function(){return te.x4},WebSearch:function(){return te.fz},Welcome:function(){return Be.Z},WelcomePrompts:function(){return re.Z},createCard:function(){return S.L},sleep:function(){return C.Z},useChatAnywhere:function(){return B.TQ},useCustomCardsContext:function(){return R.HJ},useGlobalContext:function(){return b.bN},useInput:function(){return g.G},useMessages:function(){return x.y},useProviderContext:function(){return y.wv},useSessionList:function(){return P.x},uuid:function(){return M.Z},version:function(){return h.Z}});var ne=e(55839),h=e(66366),R=e(83962),y=e(56044),b=e(92049),T=e(7354),S=e(50130),A=e(29041),B=e(76289),g=e(37254),x=e(4421),P=e(61316),M=e(88773),u=e(24963),n=e(35825),m=e(22863),O={};for(var l in m)["default","ConfigProvider","version","CustomCardsContext","CustomCardsProvider","SparkChatProvider","useCustomCardsContext","useGlobalContext","useProviderContext","Stream","createCard","ChatAnywhere","useChatAnywhere","useInput","useMessages","useSessionList","uuid","DefaultCards","AgentScopeRuntimeWebUI","Accordion","Process","DeepThink","DeepThinking","Attachments","Bubble","Conversations","HistoryPanel","DeviceAction","Disclaimer","ImageGenerator","Mermaid","OperateCard","ChatInput","Sender","StatusCard","sleep","Welcome","Markdown","AIGC","AssetsPreview","GenerativeUISandbox","WelcomePrompts"].indexOf(l)<0&&(O[l]=function(Ue){return m[Ue]}.bind(0,l));e.d(X,O);var t=e(487),_=e(14082),c=e(50993),L=e(52471),ie=e(9368),le=e(55031),d=e(10325),he=e(2534),G=e(12181),Y=e(31382),te=e(56809),ve=e(66672),Oe=e(70770),C=e(32116),Be=e(31295),Q=e(66109),xe=e(86578),ue=e(34487),De=e(80115),re=e(64437)}}]);
