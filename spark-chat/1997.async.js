(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1997],{86578:function(on,J,e){"use strict";e.d(J,{Z:function(){return xe}});var q=e(97857),h=e.n(q),D=e(9783),x=e.n(D),b=e(13769),M=e.n(b),E=e(67294),L=e(93967),k=e.n(L),g=e(56044),C=e(66672),A=e(36417),P=e(44294),m=e(12624),n=e(41154),v=e(68400),I=e.n(v),i=e(9053),t,O=(0,i.vJ)(t||(t=I()([`
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
`])),function(oe){return oe.theme.prefixCls},function(oe){return oe.theme.prefixCls},function(oe){return oe.theme.prefixCls},function(oe){return oe.theme.prefixCls},function(oe){return oe.theme.borderRadius},function(oe){return oe.theme.colorBorderSecondary},function(oe){return oe.theme.colorBgBase},function(oe){return oe.theme.colorText}),l=e(85893),T=["className","icon"],se=n.Z.Dragger,ae=function(_e){var Y=_e.className,Oe=_e.icon,ke=M()(_e,T),Je=(0,g.wv)(),Xe=Je.getPrefixCls,we=Xe("media-upload");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(O,{}),(0,l.jsx)(se,h()(h()({showUploadList:!1,className:k()(we,Y)},ke),{},{children:(0,l.jsxs)("div",{className:k()("".concat(we,"-thumbnail")),children:[(0,l.jsx)("div",{className:k()("".concat(we,"-thumbnail-gradient"))}),Oe||(0,l.jsx)(m.Z,{className:k()("".concat(we,"-thumbnail-icon"))})]})}))]})},u=ae,ge,W=(0,i.vJ)(ge||(ge=I()([`
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
`])),function(oe){return oe.theme.prefixCls},function(oe){return oe.theme.colorText},function(oe){return oe.theme.colorTextTertiary}),X=function(_e){var Y=_e.className,Oe=_e.title,ke=_e.description,Je=(0,g.wv)(),Xe=Je.getPrefixCls,we=Xe("media-info"),mn=!!Oe||!!ke;return mn?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(W,{}),(0,l.jsxs)("div",{className:k()(we,Y),children:[Oe&&(0,l.jsx)("div",{className:k()("".concat(we,"-title")),children:Oe}),ke&&(0,l.jsx)("div",{className:k()("".concat(we,"-description")),children:ke})]})]}):null},ee=X,ue,De=(0,i.vJ)(ue||(ue=I()([`
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
`])),function(oe){return oe.theme.prefixCls},function(oe){return oe.theme.colorBorderSecondary},function(oe){return oe.theme.prefixCls},function(oe){return oe.theme.prefixCls},function(oe){return oe.theme.prefixCls},function(oe){return oe.theme.prefixCls}),p=["title","description","maxCount"],Be=function(_e){var Y=_e.className,Oe=_e.onUpload,ke=Oe===void 0?[]:Oe,Je=_e.attachedFiles,Xe=Je===void 0?[[]]:Je,we=_e.onFileChange,mn=(0,g.wv)(),qe=mn.getPrefixCls,Cn=(0,E.useContext)(P.a),en=Cn.focus,Ze=Cn.enableFocusExpand,Tn=qe("aigc-sender-header"),_=(0,E.useMemo)(function(){return Xe.flat().length>0?!0:ke.length<=0?!1:!!(en||!Ze)},[ke,Xe,Ze,en]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(De,{}),(0,l.jsx)(C.Z.Header,{closable:!1,open:_,children:(0,l.jsx)("div",{className:k()(Tn,Y),tabIndex:0,children:ke==null?void 0:ke.map(function(je,Ie){var nn=je.title,an=je.description,tn=je.maxCount,sn=tn===void 0?1:tn,fn=M()(je,p),Ve=Xe[Ie]||[];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u,h()({className:k()(x()({},"".concat(Tn,"-upload-hidden"),Ve.length>=sn)),maxCount:sn,fileList:Ve,onChange:function(a){je.beforeUpload&&a.file.status&&we(Ie,a.fileList),je.beforeUpload||we(Ie,a.fileList)},showUploadList:!1},fn),"upload-".concat(Ie)),Ve.length>0&&(0,l.jsx)(A.Z,{items:Ve,onChange:function(a){return we(Ie,a.fileList)}},"attachments-".concat(Ie)),sn===1&&(0,l.jsx)(ee,{title:nn,description:an},"info-".concat(Ie))]})})})})]})},K=Be,xe={SenderHeader:K,Info:ee,Upload:u}},487:function(on,J,e){"use strict";e.d(J,{Z:function(){return De}});var q=e(9783),h=e.n(q),D=e(97857),x=e.n(D),b=e(5574),M=e.n(b),E=e(67294),L=e(93967),k=e.n(L),g=e(56044),C=e(85893);function A(p){var Be=(0,g.wv)(),K=Be.getPrefixCls,xe=K("accordion-content-body");return(0,C.jsxs)("div",{className:xe,children:[p.headerLeft||p.headerRight?(0,C.jsxs)("div",{className:"".concat(xe,"-header"),children:[p.headerLeft,(0,C.jsx)("div",{style:{flex:1}}),p.headerRight]}):null,(0,C.jsx)("div",{className:"".concat(xe,"-body"),children:p.children})]})}var P=e(9361);function m(p){var Be=(0,g.wv)(),K=Be.theme,xe=Be.getPrefixCls,oe=(K==null?void 0:K.algorithm)===P.Z.darkAlgorithm,_e=xe("accordion-soft-light-title");return(0,C.jsx)("div",{className:_e,style:oe?{}:{color:"rgba(38, 36, 76, 0.88)"},children:p.children})}var n=e(68400),v=e.n(n),I=e(9053),i,t=(0,I.vJ)(i||(i=v()([`
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
`])),function(p){return p.theme.prefixCls},function(p){return p.theme.colorSuccess},function(p){return p.theme.prefixCls},function(p){return p.theme.colorError},function(p){return p.theme.colorTextSecondary},function(p){return p.theme.colorBgBase},function(p){return p.theme.borderRadiusLG},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorBorder},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorBgBase},function(p){return p.theme.colorText},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.colorFillTertiary},function(p){return p.theme.prefixCls},function(p){return p.theme.colorTextSecondary},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorFillTertiary},function(p){return p.theme.colorText},function(p){return p.theme.colorBgBase}),O=e(40443),l=e(89034),T=e(9343),se=e(36674),ae=e(9838),u=e(28387),ge=e(16592);function W(p){var Be=(0,g.wv)(),K=Be.getPrefixCls,xe=K("accordion-group"),oe=E.useState(p.defaultOpen),_e=M()(oe,2),Y=_e[0],Oe=_e[1],ke=p.open!==void 0?p.open:Y,Je=p.inline?"close":ke?"open":"close",Xe=(0,E.useMemo)(function(){if(p.icon)return p.icon;if(p.status==="generating")return(0,C.jsx)(O.Z,{className:"".concat(xe,"-icon-loading"),spin:!0});if(p.status==="finished")return(0,C.jsx)(l.Z,{className:"".concat(xe,"-icon-success")});if(p.status==="interrupted")return(0,C.jsx)(T.Z,{});if(p.status==="error")return(0,C.jsx)(se.Z,{className:"".concat(xe,"-icon-error")})},[p.status,p.icon]),we=(0,E.useMemo)(function(){return p.steps?p.steps.map(function(mn,qe){var Cn=qe===0,en=qe===p.steps.length-1;return(0,C.jsx)(W,x()(x()({},mn),{},{isFirst:Cn,isLast:en}),mn.id||qe)}):p.children},[p.steps,p.children]);return(0,C.jsxs)("div",{className:k()("".concat(xe),"".concat(xe,"-").concat(Je)),children:[(0,C.jsxs)("div",{className:k()("".concat(xe,"-header"),"".concat(xe,"-header-").concat(Je)),onClick:function(){return we&&p.open===void 0&&Oe(!Y)},children:[Xe?(0,C.jsx)("div",{className:k()("".concat(xe,"-header-icon"),h()(h()(h()({},"".concat(xe,"-header-icon-line"),p.iconLine),"".concat(xe,"-header-icon-first"),p.isFirst),"".concat(xe,"-header-icon-last"),p.isLast&&Je==="close"||p.level)),children:Xe}):null,(0,C.jsx)("div",{children:p.title}),we&&(0,C.jsx)("div",{className:k()("".concat(xe,"-header-arrow")),children:ke?(0,C.jsx)(u.Z,{}):(0,C.jsx)(ae.Z,{})}),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("span",{style:{flex:1}}),p.rightChildren]})]}),(0,C.jsx)(ee,{prefixCls:xe,stateOpen:ke,status:Je,inline:p.inline,content:we,bodyStyle:p.bodyStyle,level:p.level})]})}var X={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function ee(p){var Be=(0,E.useRef)(null);if(!p.content)return null;var K=p.prefixCls,xe=p.stateOpen,oe=p.inline,_e=p.bodyStyle,Y=p.level;return(0,C.jsx)(ge.ZP,{nodeRef:Be,in:xe,timeout:300,children:function(ke){return(0,C.jsx)("div",{style:x()(x()(x()({},_e),Y?{marginTop:0}:{}),{},{transition:"opacity ".concat(300,"ms ease-in-out")},X[ke]),className:k()("".concat(K,"-body"),"".concat(K,"-body-").concat(xe?"open":"close"),h()({},"".concat(K,"-body-inline"),oe)),children:p.content})}})}function ue(p){var Be=p.level,K=Be===void 0?1:Be,xe=p.isFirst,oe=xe===void 0?!0:xe,_e=p.isLast,Y=_e===void 0?!0:_e;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(t,{}),(0,C.jsx)(W,x()(x()({},p),{},{level:K,isFirst:oe,isLast:Y}))]})}ue.BodyContent=A,ue.SoftLightTitle=m;var De=ue},14082:function(on,J,e){"use strict";e.d(J,{Z:function(){return E}});var q=e(487),h=e(56044),D=e(9361),x=e(93967),b=e.n(x),M=e(85893);function E(L){var k=(0,h.wv)(),g=k.theme,C=k.getPrefixCls,A=C("accordion-deep-thinking"),P=(g==null?void 0:g.algorithm)===D.Z.darkAlgorithm,m=(0,M.jsx)("img",{style:{display:"block",width:16,height:16,filter:P?"invert(1)  brightness(100%) saturate(0%)":""},src:"https://img.alicdn.com/imgextra/i2/O1CN01QZgWRv1I4JM0BAZ9O_!!6000000000839-54-tps-56-56.apng"}),n=L.title||"Deep thinking";L.loading&&(n+="...");var v=L.loading?(0,M.jsx)(q.Z.SoftLightTitle,{children:n}):n,I=L.maxHeight?{maxHeight:L.maxHeight,overflowY:"auto"}:{},i=L.defaultOpen!==void 0?L.defaultOpen:L.autoCloseOnFinish&&!L.loading?!1:void 0;return(0,M.jsx)(q.Z,{title:v,status:L.loading?"generating":"finished",icon:L.loading?m:null,defaultOpen:i,open:L.open,bodyStyle:I,inline:!0,children:(0,M.jsx)("div",{className:b()(A,L.className),children:L.content||"..."})})}},35825:function(on,J,e){"use strict";e.d(J,{Z:function(){return Lt}});var q=e(97857),h=e.n(q),D=e(9783),x=e.n(D),b=e(56044),M=e(68400),E=e.n(M),L=e(9053),k,g=(0,L.vJ)(k||(k=E()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.colorBgBase},function(o){return o.theme.prefixCls},function(o){return o.theme.colorBgBase},function(o){return o.theme.prefixCls},function(o){return o.theme.colorFillTertiary},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls}),C=e(93967),A=e.n(C),P=e(17909),m=e(59214),n=e(67294),v=e(81759),I=e(49131),i=e(21766),t=e(85893),O=(0,m.createContext)(void 0);function l(o){try{var d=(0,m.useContextSelector)(O,o);return d}catch(s){return{}}}function T(o){var d=o.children,s=(0,P.Z)(),f=(0,n.useMemo)(function(){var V=o.options.theme||{};return h()(h()({},o.options),{},{theme:h()(h()({},V),{},{narrowMode:!s.lg||V.narrowMode})})},[o.options,s.lg]),R=(0,n.useMemo)(function(){var V=f.theme.colorPrimary,U=f.theme.colorBgBase,F=f.theme.colorTextBase,ce=f.theme.darkMode;if(V||ce){var Pe=(0,v.Z)((0,I.Z)({primaryHex:V,bgBaseHex:U,textBaseHex:F,darkMode:ce}));return Pe}},[f.theme.colorPrimary,f.theme.colorBgBase,f.theme.colorTextBase,f.theme.darkMode]),Z=(0,t.jsx)(O.Provider,{value:f,children:d});if(R){var G=f.theme.prefix||"agentscope-runtime-webui";return(0,t.jsx)(i.ZP,h()(h()({},R),{},{style:{height:"100%"},prefix:G,prefixCls:G,children:Z}))}return Z}var se=null,ae=e(15009),u=e.n(ae),ge=e(99289),W=e.n(ge),X=e(5574),ee=e.n(X),ue=e(66672),De=e(10325),p=e(79785),Be=(0,m.createContext)({loading:!1,setLoading:function(){},getLoading:function(){return!1},disabled:!1,setDisabled:function(){},getDisabled:function(){return!1}});function K(o){var d=(0,p.Z)(!1),s=ee()(d,3),f=s[0],R=s[1],Z=s[2],G=(0,p.Z)(!1),V=ee()(G,3),U=V[0],F=V[1],ce=V[2];return(0,t.jsx)(Be.Provider,{value:{loading:f,setLoading:R,getLoading:Z,disabled:U,setDisabled:F,getDisabled:ce},children:o.children})}var xe=function(d){return(0,m.useContextSelector)(Be,d)},oe=e(13769),_e=e.n(oe),Y=e(41154),Oe=e(64057),ke=e(81644),Je=e(36417),Xe=["trigger"];function we(o,d){var s=(0,p.Z)([]),f=ee()(s,3),R=f[0],Z=f[1],G=f[2],V=o||{},U=V.trigger,F=_e()(V,Xe);if(F!=null&&F.customRequest){var ce=(0,t.jsx)(Y.Z,h()(h()({fileList:R,showUploadList:!1,onChange:function(me){Z(me.fileList)}},F),{},{disabled:d==null?void 0:d.disabled,children:U?n.createElement(U,{disabled:d==null?void 0:d.disabled}):(0,t.jsx)(Oe.Z,{disabled:d==null?void 0:d.disabled,icon:(0,t.jsx)(ke.Z,{}),bordered:!1})})),Pe=(0,t.jsx)(ue.Z.Header,{closable:!1,open:(R==null?void 0:R.length)>0,children:(0,t.jsx)(Je.Z,{items:R,onChange:function(me){return Z(me.fileList)}})});return{fileList:R,getFileList:G,setFileList:Z,uploadIconButton:ce,uploadFileListHeader:Pe}}else return{enabled:!1}}function mn(o){var d=(0,p.Z)(""),s=ee()(d,3),f=s[0],R=s[1],Z=s[2],G=(0,b.wv)().getPrefixCls("chat-anywhere-input"),V=l(function(qn){return qn.sender}),U=xe(function(qn){return qn}),F=V||{},ce=F.placeholder,Pe=ce===void 0?"":ce,ye=F.disclaimer,me=ye===void 0?"":ye,be=F.maxLength,Ne=F.beforeSubmit,Ye=Ne===void 0?function(){return Promise.resolve(!0)}:Ne,Ee=F.beforeUI,Le=F.afterUI,kn=F.scalable,Wn=kn===void 0?!0:kn,Sn=F.attachments,Vn=we(Sn,{disabled:!!U.disabled}),zn=Vn.getFileList,nt=Vn.setFileList,ht=Vn.uploadIconButton,it=Vn.uploadFileListHeader,Gn=(0,n.useCallback)(W()(u()().mark(function qn(){var ct,Yn;return u()().wrap(function(We){for(;;)switch(We.prev=We.next){case 0:return We.next=2,Ye();case 2:if(ct=We.sent,ct){We.next=5;break}return We.abrupt("return");case 5:Yn=((zn==null?void 0:zn())||[]).filter(function(Mt){var ut;return(ut=Mt.response)===null||ut===void 0?void 0:ut.url}),o.onSubmit({query:Z(),fileList:Yn}),R(""),nt&&nt([]);case 9:case"end":return We.stop()}},qn)})),[]),lt=(0,n.useCallback)(function(){o.onCancel()},[]);return(0,t.jsxs)("div",{className:G,children:[(0,t.jsxs)("div",{className:"".concat(G,"-wrapper"),children:[Ee,(0,t.jsx)(ue.Z,{loading:U.loading,disabled:U.disabled,scalable:Wn,placeholder:Pe,value:f,prefix:(0,t.jsx)(t.Fragment,{children:ht}),header:it,onChange:R,maxLength:be,onSubmit:Gn,onCancel:lt}),Le]}),me?(0,t.jsx)(De.Z,{desc:me}):(0,t.jsx)("div",{className:"".concat(G,"-blank")})]})}var qe=e(52471),Cn=e(19632),en=e.n(Cn),Ze=(0,m.createContext)({messages:[],setMessages:function(){},getMessages:function(){return[]}});function Tn(o){var d=(0,p.Z)([]),s=ee()(d,3),f=s[0],R=s[1],Z=s[2],G={messages:f,setMessages:R,getMessages:Z};return(0,t.jsx)(Ze.Provider,{value:G,children:o.children})}var _=function(){var d=(0,m.useContextSelector)(Ze,function(U){return{setMessages:U.setMessages,getMessages:U.getMessages}}),s=d.setMessages,f=d.getMessages,R=n.useCallback(function(){s([])},[]),Z=n.useCallback(function(U){return f().find(function(F){return F.id===U})},[]),G=n.useCallback(function(U){s(function(F){return F.filter(function(ce){return ce.id!==U.id})})},[]),V=n.useCallback(function(U){s(function(F){var ce=F.findIndex(function(ye){return ye.id===U.id});if(ce>-1){var Pe=h()(h()({},F[ce]),U);return[].concat(en()(F.slice(0,ce)),[Pe],en()(F.slice(ce+1)))}else return[].concat(en()(F),[U])})},[]);return{getMessages:f,removeAllMessages:R,getMessage:Z,removeMessage:G,updateMessage:V}},je=e(78234),Ie=e(73935),nn=e(2093),an=(0,m.createContext)({sessions:[],setSessions:function(){},getSessions:function(){return[]},currentSessionId:void 0,setCurrentSessionId:function(){},getCurrentSessionId:function(){return""}});function tn(o){var d=l(function(ye){return ye.session}),s=(0,p.Z)([]),f=ee()(s,3),R=f[0],Z=f[1],G=f[2],V=(0,p.Z)(void 0),U=ee()(V,3),F=U[0],ce=U[1],Pe=U[2];return(0,je.Z)(W()(u()().mark(function ye(){var me,be;return u()().wrap(function(Ye){for(;;)switch(Ye.prev=Ye.next){case 0:return Ye.next=2,d.api.getSessionList();case 2:be=Ye.sent,Z(be),ce(be==null||(me=be[0])===null||me===void 0?void 0:me.id);case 5:case"end":return Ye.stop()}},ye)}))),(0,t.jsx)(an.Provider,{value:{sessions:R,setSessions:Z,getSessions:G,currentSessionId:F,setCurrentSessionId:ce,getCurrentSessionId:Pe},children:o.children})}var sn=function(){var d=(0,m.useContextSelector)(an,function(me){return me}),s=d.setSessions,f=d.getSessions,R=d.getCurrentSessionId,Z=d.setCurrentSessionId,G=d.currentSessionId,V=l(function(me){return me.session}),U=(0,m.useContextSelector)(Ze,function(me){return me.setMessages}),F=n.useCallback(function(){var me=W()(u()().mark(function be(Ne){var Ye;return u()().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:return Le.next=2,V.api.removeSession(Ne);case 2:Ye=Le.sent,U([]),Z(void 0),s(Ye);case 6:case"end":return Le.stop()}},be)}));return function(be){return me.apply(this,arguments)}}(),[]),ce=n.useCallback(function(){var me=W()(u()().mark(function be(Ne){var Ye;return u()().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:if(!Ne.id){Le.next=6;break}return Le.next=3,V.api.updateSession(Ne);case 3:Le.t0=Le.sent,Le.next=9;break;case 6:return Le.next=8,V.api.createSession(Ne);case 8:Le.t0=Le.sent;case 9:return Ye=Le.t0,s(Ye),Le.abrupt("return",Ne);case 12:case"end":return Le.stop()}},be)}));return function(be){return me.apply(this,arguments)}}(),[]),Pe=n.useCallback(function(){var me=W()(u()().mark(function be(Ne){var Ye;return u()().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:return Le.next=2,ce({name:(Ne==null?void 0:Ne.name)||"",messages:[]});case 2:return Ye=Le.sent,Z(Ye.id),U(Ye.messages),Le.abrupt("return",Ye.id);case 6:case"end":return Le.stop()}},be)}));return function(be){return me.apply(this,arguments)}}(),[]),ye=n.useCallback(function(me){Z(me)},[]);return(0,nn.Z)(W()(u()().mark(function me(){var be,Ne;return u()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:return Ie.flushSync(function(){U([])}),Ee.next=3,V.api.getSession(G);case 3:if(Ee.t2=be=Ee.sent,Ee.t1=Ee.t2===null,Ee.t1){Ee.next=7;break}Ee.t1=be===void 0;case 7:if(!Ee.t1){Ee.next=11;break}Ee.t3=void 0,Ee.next=12;break;case 11:Ee.t3=be.messages;case 12:if(Ee.t0=Ee.t3,Ee.t0){Ee.next=15;break}Ee.t0=[];case 15:Ne=Ee.t0,U(Ne.map(function(Le){return h()(h()({},Le),{},{history:!0})}));case 17:case"end":return Ee.stop()}},me)})),[G]),{changeCurrentSessionId:ye,getCurrentSessionId:R,getSessions:f,removeSession:F,updateSession:ce,createSession:Pe}},fn=e(64437),Ve=["render"];function gn(o){var d=l(function(U){return U.welcome});if(!d)return null;var s=d.render,f=_e()(d,Ve);if(s)return d.render({greeting:d.greeting,avatar:d.avatar,description:d.description,prompts:d.prompts,onSubmit:o.onSubmit});var R=f.greeting,Z=f.avatar,G=f.prompts,V=f.description;return(0,t.jsx)(fn.Z,{greeting:R,avatar:Z,description:V,prompts:G,onClick:function(F){return o.onSubmit({query:F})}})}function a(o){var d=(0,m.useContextSelector)(Be,function(Z){return Z.loading}),s=(0,m.useContextSelector)(Ze,function(Z){return Z.messages}),f=(0,b.wv)().getPrefixCls("chat-anywhere-message-list"),R=(0,m.useContextSelector)(an,function(Z){return Z.currentSessionId});return s.length===0?(0,t.jsx)("div",{className:A()(f,"".concat(f,"-welcome")),children:(0,t.jsx)(gn,{onSubmit:o.onSubmit})}):(0,t.jsx)(qe.Z.List,{smooth:!!d,pagination:!0,classNames:{wrapper:f},items:s},R)}var Ce,pe=(0,L.vJ)(Ce||(Ce=E()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls}),Fe=e(32116);function Te(o){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];(0,n.useEffect)(function(){return document.addEventListener(o.type,o.callback),function(){document.removeEventListener(o.type,o.callback)}},d)}var rn=function(d){var s=d.type,f=d.data;document.dispatchEvent(new CustomEvent(s,{detail:f}))},ze=e(88773),pn=e(12444),ln=e.n(pn),cn=e(72004),c=e.n(cn),H=function(o){return o.Created="created",o.InProgress="in_progress",o.Completed="completed",o.Canceled="canceled",o.Failed="failed",o.Rejected="rejected",o.Unknown="unknown",o}({}),de=function(o){return o.ASSISTANT="assistant",o.USER="user",o.SYSTEM="system",o}({}),j=function(o){return o.MESSAGE="message",o.REASONING="reasoning",o.PLUGIN_CALL="plugin_call",o.PLUGIN_CALL_OUTPUT="plugin_call_output",o.FUNCTION_CALL="function_call",o.FUNCTION_CALL_OUTPUT="function_call_output",o.COMPONENT_CALL="component_call",o.COMPONENT_CALL_OUTPUT="component_call_output",o.MCP_LIST_TOOLS="mcp_list_tools",o.MCP_APPROVAL_REQUEST="mcp_approval_request",o.MCP_APPROVAL_RESPONSE="mcp_approval_response",o.MCP_CALL="mcp_call",o.MCP_CALL_OUTPUT="mcp_call_output",o.HEARTBEAT="heartbeat",o.ERROR="error",o}({}),w=function(o){return o.TEXT="text",o.DATA="data",o.IMAGE="image",o.AUDIO="audio",o.FILE="file",o.REFUSAL="refusal",o}({}),$=function(){function o(){ln()(this,o),x()(this,"data",void 0)}return c()(o,[{key:"isImageFile",value:function(s){return s.type.indexOf("image/")===0}},{key:"buildImageContent",value:function(s){var f;return{type:w.IMAGE,image_url:(f=s.response)===null||f===void 0?void 0:f.url,status:H.Created}}},{key:"buildTextContent",value:function(s){return{type:w.TEXT,text:s,status:H.Created}}},{key:"buildFileContent",value:function(s){var f;return{type:w.FILE,file_url:(f=s.response)===null||f===void 0?void 0:f.url,file_id:s.file_id,file_name:s.name,file_size:s.size,status:H.Created}}},{key:"handle",value:function(s){var f,R=this;this.data={input:[]};var Z=[this.buildTextContent(s.query)];return(f=s.fileList)!==null&&f!==void 0&&f.length&&s.fileList.forEach(function(G){R.isImageFile(G)?Z.push(R.buildImageContent(G)):Z.push(R.buildFileContent(G))}),this.data={input:[{role:"user",type:j.MESSAGE,content:Z}]},this.data}},{key:"handleApproval",value:function(s){return this.data={input:s},this.data}}],[{key:"getHistoryMessages",value:function(s){return s.reduce(function(f,R){var Z;return(Z=R.cards)!==null&&Z!==void 0&&Z.length?f.concat(R.cards[0].data.input||R.cards[0].data.output):f},[])}}]),o}(),ne=$;function he(o){var d=o.currentQARef,s=_(),f=s.updateMessage,R=s.getMessages,Z=s.removeMessage,G=(0,n.useCallback)(function(Pe){return d.current.abortController=new AbortController,d.current.request={id:(0,ze.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new ne().handle(Pe)}]},Ie.flushSync(function(){f(d.current.request)}),d.current.request},[d,f]),V=(0,n.useCallback)(function(Pe){return d.current.abortController=new AbortController,d.current.request={id:(0,ze.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new ne().handleApproval(Pe)}]},Ie.flushSync(function(){f(d.current.request)}),d.current.request},[d,f]),U=(0,n.useCallback)(function(){return d.current.response={id:(0,ze.Z)(),role:"assistant",cards:[],msgStatus:"generating"},f(d.current.response),d.current.response},[d,f]),F=(0,n.useCallback)(function(){return ne.getHistoryMessages(R())},[R]),ce=(0,n.useCallback)(function(Pe){Ie.flushSync(function(){Z({id:Pe})})},[Z]);return{createRequestMessage:G,createApprovalMessage:V,createResponseMessage:U,getHistoryMessages:F,updateMessage:f,removeMessageById:ce,getMessages:R}}var ie=e(44987),r=e.n(ie),y=e(7354),S=e(64599),B=e.n(S),te=e(93513),re=function(){function o(d){var s=d.id,f=d.status,R=d.created_at;ln()(this,o),x()(this,"data",void 0),this.data={id:s,output:[],object:"response",status:f||H.Created,created_at:R||Date.now()}}return c()(o,[{key:"handleResponse",value:function(s){this.data=(0,te.produce)(this.data,function(f){s.output||(s.output=[]),Object.assign(f,s)})}},{key:"handleMessage",value:function(s){this.data=(0,te.produce)(this.data,function(f){f.output||(f.output=[]);var R=f.output.findIndex(function(G){return G.id===s.id});if(R>=0){var Z=f.output[R].content;Object.assign(f.output[R],s),(!s.content||s.content.length===0)&&(f.output[R].content=Z)}else f.output.push(s)})}},{key:"handleContent",value:function(s){this.data=(0,te.produce)(this.data,function(f){var R=f.output.find(function(G){return G.id===s.msg_id});if(!R){console.warn("Message not found for content:",s.msg_id);return}if(R.content||(R.content=[]),s.delta){var Z=R.content[R.content.length-1];Z&&Z.delta?s.type===w.TEXT&&Z.type===w.TEXT?Z.text+=s.text:s.type===w.IMAGE?Z.image_url=s.image_url:s.type===w.DATA&&(Z.data=s.data):R.content.push(s)}else R.content.length>0?Object.assign(R.content[R.content.length-1],s):R.content.push(s)})}},{key:"handleError",value:function(s){this.data=(0,te.produce)(this.data,function(f){f.status=H.Failed,f.output.push({status:H.Failed,type:j.ERROR,content:[],id:(0,ze.Z)(),role:"assistant",code:s.code,message:typeof s.message=="string"?s.message:JSON.stringify(s.message)})})}},{key:"handle",value:function(s){if(s.object==="response")this.handleResponse(s);else if(s.object==="message"){if(s.type===j.HEARTBEAT)return this.data;this.handleMessage(s)}else s.object==="content"?this.handleContent(s):this.handleError(s);return this.data}},{key:"cancel",value:function(){return this.data=(0,te.produce)(this.data,function(s){o.maybeGenerating(s)&&(s.status=H.Canceled),s.output.forEach(function(f){o.maybeGenerating(f)&&(f.status=H.Canceled,f.content.forEach(function(R){o.maybeGenerating(R)&&(R.status=H.Canceled)}))})}),this.data}}],[{key:"mergeToolMessages",value:function(s){var f=new Map,R=[],Z=B()(s),G;try{var V=function(){var F,ce,Pe=G.value;if(o.maybeToolInput(Pe)&&(F=Pe.content)!==null&&F!==void 0&&F.length){var ye=Pe.content[0],me=ye.data.call_id||ye.data.name;f.set(me,ye),R.push(Pe)}else if(o.maybeToolOutput(Pe)&&(ce=Pe.content)!==null&&ce!==void 0&&ce.length){var be=Pe.content[0],Ne=be.data.call_id||be.data.name,Ye=f.get(Ne);Ye&&(R=R.map(function(Ee){if(!o.maybeToolInput(Ee))return Ee;var Le=Ee.content[0],kn=Le.data.call_id||Le.data.name;return kn===Ne?h()(h()({},Pe),{},{content:[].concat(en()(Ee.content),[be])}):Ee}))}else R.push(Pe)};for(Z.s();!(G=Z.n()).done;)V()}catch(U){Z.e(U)}finally{Z.f()}return R}},{key:"maybeToolOutput",value:function(s){return[j.FUNCTION_CALL_OUTPUT,j.PLUGIN_CALL_OUTPUT,j.COMPONENT_CALL_OUTPUT,j.MCP_CALL_OUTPUT].includes(s.type)}},{key:"maybeToolInput",value:function(s){return[j.FUNCTION_CALL,j.PLUGIN_CALL,j.COMPONENT_CALL,j.MCP_CALL].includes(s.type)}},{key:"maybeGenerating",value:function(s){return[H.InProgress,H.Created].includes(s.status)}},{key:"maybeDone",value:function(s){return[H.Completed,H.Canceled,H.Failed].includes(s.status)}}]),o}(),z=re;function fe(o){var d=o.currentQARef,s=o.updateMessage,f=o.getCurrentSessionId,R=o.onFinish,Z=l(function(F){return F.api}),G=(0,n.useRef)(Z);(0,n.useEffect)(function(){G.current=Z},[Z]);var V=(0,n.useCallback)(function(){var F=W()(u()().mark(function ce(Pe){var ye,me,be,Ne,Ye,Ee,Le,kn;return u()().wrap(function(Sn){for(;;)switch(Sn.prev=Sn.next){case 0:ye=new z({id:"",status:H.Created,created_at:0}),me=!1,be=!1,Sn.prev=3,Ye=r()(Pe);case 5:return Sn.next=7,Ye.next();case 7:if(!(me=!(Ee=Sn.sent).done)){Sn.next=17;break}return Le=Ee.value,kn=ye.handle(Le),d.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:kn}],s(d.current.response),Sn.next=14,(0,Fe.Z)(100);case 14:me=!1,Sn.next=5;break;case 17:Sn.next=23;break;case 19:Sn.prev=19,Sn.t0=Sn.catch(3),be=!0,Ne=Sn.t0;case 23:if(Sn.prev=23,Sn.prev=24,!(me&&Ye.return!=null)){Sn.next=28;break}return Sn.next=28,Ye.return();case 28:if(Sn.prev=28,!be){Sn.next=31;break}throw Ne;case 31:return Sn.finish(28);case 32:return Sn.finish(23);case 33:case"end":return Sn.stop()}},ce,null,[[3,19,23,33],[24,,28,32]])}));return function(ce){return F.apply(this,arguments)}}(),[]),U=(0,n.useCallback)(function(){var F=W()(u()().mark(function ce(Pe,ye){var me,be,Ne,Ye,Ee,Le,kn,Wn,Sn,Vn,zn,nt,ht,it,Gn,lt,qn,ct,Yn;return u()().wrap(function(We){for(;;)switch(We.prev=We.next){case 0:if(be=G.current,Ne=be.enableHistoryMessages,Ye=Ne===void 0?!1:Ne,Ee=(me=d.current.abortController)===null||me===void 0?void 0:me.signal,We.prev=3,!be.fetch){We.next=10;break}return We.next=7,be.fetch({input:Pe,biz_params:ye,signal:Ee});case 7:We.t0=We.sent,We.next=13;break;case 10:return We.next=12,fetch(be.baseURL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(be.token||"")},body:JSON.stringify({input:Ye?Pe:Pe.slice(-1),session_id:f(),stream:!0,biz_params:ye}),signal:Ee});case 12:We.t0=We.sent;case 13:Le=We.t0,We.next=18;break;case 16:We.prev=16,We.t1=We.catch(3);case 18:if(!(Le&&Le.body)){We.next=68;break}if(kn=new z({id:"",status:H.Created,created_at:0}),Le.ok){We.next=23;break}return Le.json().then(function(Mt){var ut=kn.handle({object:"message",type:j.ERROR,content:[],id:"error",role:"assistant",status:H.Failed,code:Le.status,message:JSON.stringify(Mt)});d.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:ut}],R()}),We.abrupt("return");case 23:We.prev=23,Wn=!1,Sn=!1,We.prev=26,zn=r()((0,y.Z)({readableStream:Le.body}));case 28:return We.next=30,zn.next();case 30:if(!(Wn=!(nt=We.sent).done)){We.next=47;break}if(ht=nt.value,((it=d.current.response)===null||it===void 0?void 0:it.msgStatus)!=="interrupted"){We.next=38;break}return(lt=d.current.abortController)===null||lt===void 0||lt.abort(),be.cancel&&be.cancel({session_id:f()}),d.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:kn.cancel()}],s(d.current.response),We.abrupt("break",47);case 38:if(qn=G.current.responseParser||JSON.parse,ct=qn(ht.data),Yn=kn.handle(ct),!(Yn.status!==H.Failed&&!((Gn=Yn.output)!==null&&Gn!==void 0&&(Gn=Gn[0])!==null&&Gn!==void 0&&(Gn=Gn.content)!==null&&Gn!==void 0&&Gn.length))){We.next=43;break}return We.abrupt("continue",44);case 43:d.current.response&&(d.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Yn}],Yn.status===H.Completed||Yn.status===H.Failed?R():s(d.current.response));case 44:Wn=!1,We.next=28;break;case 47:We.next=53;break;case 49:We.prev=49,We.t2=We.catch(26),Sn=!0,Vn=We.t2;case 53:if(We.prev=53,We.prev=54,!(Wn&&zn.return!=null)){We.next=58;break}return We.next=58,zn.return();case 58:if(We.prev=58,!Sn){We.next=61;break}throw Vn;case 61:return We.finish(58);case 62:return We.finish(53);case 63:We.next=68;break;case 65:We.prev=65,We.t3=We.catch(23),console.error(We.t3);case 68:case"end":return We.stop()}},ce,null,[[3,16],[23,65],[26,49,53,63],[54,,58,62]])}));return function(ce,Pe){return F.apply(this,arguments)}}(),[f,d,s,R]);return{request:U,mockRequest:V}}function ve(){var o=sn(),d=o.createSession,s=o.updateSession,f=o.getCurrentSessionId,R=(0,n.useCallback)(function(){var V=W()(u()().mark(function U(F){return u()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:if(f()){Pe.next=3;break}return Pe.next=3,d({name:F});case 3:case"end":return Pe.stop()}},U)}));return function(U){return V.apply(this,arguments)}}(),[f,d]),Z=(0,n.useCallback)(function(){var V=W()(u()().mark(function U(F,ce){return u()().wrap(function(ye){for(;;)switch(ye.prev=ye.next){case 0:if(ce.length!==0){ye.next=3;break}return ye.next=3,s({id:f(),name:F});case 3:case"end":return ye.stop()}},U)}));return function(U,F){return V.apply(this,arguments)}}(),[f,s]),G=(0,n.useCallback)(function(){var V=W()(u()().mark(function U(F){return u()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:return Pe.next=2,s({id:f(),messages:F});case 2:case"end":return Pe.stop()}},U)}));return function(U){return V.apply(this,arguments)}}(),[f,s]);return{ensureSession:R,updateSessionName:Z,syncSessionMessages:G,getCurrentSessionId:f}}function Q(){var o=(0,m.useContextSelector)(Be,function(ye){return ye.setLoading}),d=(0,m.useContextSelector)(an,function(ye){return ye.currentSessionId}),s=(0,n.useRef)({}),f=he({currentQARef:s}),R=ve(),Z=(0,n.useCallback)(function(){var ye=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished";s.current.response&&(s.current.response.msgStatus=ye,o(!1),Ie.flushSync(function(){f.updateMessage(s.current.response)}),R.syncSessionMessages(f.getMessages()))},[o,f,R]),G=fe({currentQARef:s,updateMessage:f.updateMessage,getCurrentSessionId:R.getCurrentSessionId,onFinish:function(){return Z("finished")}}),V=G.request,U=(0,n.useCallback)(function(){var ye=W()(u()().mark(function me(be){var Ne,Ye;return u()().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:return Le.next=2,R.ensureSession(be.query);case 2:if(Ne=f.getMessages(),!R.getCurrentSessionId()){Le.next=6;break}return Le.next=6,R.updateSessionName(be.query,Ne);case 6:return f.createRequestMessage(be),o(!0),Le.next=10,(0,Fe.Z)(100);case 10:return f.createResponseMessage(),Ye=f.getHistoryMessages(),Le.next=14,R.syncSessionMessages(f.getMessages());case 14:return Le.next=16,V(Ye,be.biz_params);case 16:case"end":return Le.stop()}},me)}));return function(me){return ye.apply(this,arguments)}}(),[f,R,V]),F=(0,n.useCallback)(function(){var ye=W()(u()().mark(function me(be){var Ne,Ye;return u()().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:return Ne=be.input,f.createApprovalMessage(Ne),o(!0),Le.next=5,(0,Fe.Z)(100);case 5:return f.createResponseMessage(),Ye=f.getHistoryMessages(),Le.next=9,R.syncSessionMessages(f.getMessages());case 9:return Le.next=11,V(Ye);case 11:case"end":return Le.stop()}},me)}));return function(me){return ye.apply(this,arguments)}}(),[f,R,V]),ce=(0,n.useCallback)(function(){Z("interrupted")},[Z]),Pe=(0,n.useCallback)(function(){var ye=W()(u()().mark(function me(be){var Ne;return u()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:return o(!0),f.removeMessageById(be),s.current.abortController=new AbortController,f.createResponseMessage(),Ne=f.getHistoryMessages(),Ee.next=7,V(Ne);case 7:case"end":return Ee.stop()}},me)}));return function(me){return ye.apply(this,arguments)}}(),[f,V]);return(0,n.useEffect)(function(){s.current={request:void 0,response:void 0,abortController:void 0}},[d]),Te({type:"handleReplace",callback:function(){var ye=W()(u()().mark(function be(Ne){return u()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:return Ee.next=2,Pe(Ne.detail.id);case 2:case"end":return Ee.stop()}},be)}));function me(be){return ye.apply(this,arguments)}return me}()}),Te({type:"handleSubmit",callback:function(){var ye=W()(u()().mark(function be(Ne){return u()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:return Ee.next=2,U(Ne.detail);case 2:case"end":return Ee.stop()}},be)}));function me(be){return ye.apply(this,arguments)}return me}()},[U]),Te({type:"handleApproval",callback:function(){var ye=W()(u()().mark(function be(Ne){return u()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:return Ee.next=2,F(Ne.detail);case 2:case"end":return Ee.stop()}},be)}));function me(be){return ye.apply(this,arguments)}return me}()},[F]),{handleSubmit:U,handleCancel:ce}}function le(){var o=(0,b.wv)().getPrefixCls("chat-anywhere-chat"),d=Q(),s=d.handleSubmit,f=d.handleCancel;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(pe,{}),(0,t.jsxs)("div",{className:o,children:[(0,t.jsx)(a,{onSubmit:s}),(0,t.jsx)(mn,{onCancel:f,onSubmit:s})]})]})}var Me=e(21403),Ge=e(67392),He=e(13660),Ke=e(12624),un=e(50287),Ue=e(9368),Ae=(0,n.createContext)({collapsed:!1,toggleCollapsed:function(){}});function N(o){var d=(0,n.useState)(!1),s=ee()(d,2),f=s[0],R=s[1],Z=(0,n.useCallback)(function(){R(function(V){return!V})},[]),G=(0,n.useMemo)(function(){return{collapsed:f,toggleCollapsed:Z}},[f,Z]);return(0,t.jsx)(Ae.Provider,{value:G,children:o.children})}function yn(){var o=(0,n.useContext)(Ae),d=o.collapsed,s=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),f=l(function(R){var Z;return(Z=R.theme)===null||Z===void 0?void 0:Z.leftHeader})||{};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"".concat(s),children:[n.isValidElement(f)?f:(0,t.jsx)(Pn,{}),(0,t.jsxs)("div",{className:"".concat(s,"-content"),style:{display:d?"none":"flex"},children:[(0,t.jsx)(bn,{}),(0,t.jsx)(Ln,{})]})]})})}function Pn(o){var d=o.className,s=l(function(me){var be;return(be=me.theme)===null||be===void 0?void 0:be.leftHeader})||{},f=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),R=(0,n.useContext)(Ae),Z=R.toggleCollapsed,G=R.collapsed,V=l(function(me){return me.session.multiple}),U=s,F=U.logo,ce=F===void 0?"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png":F,Pe=U.title,ye=Pe===void 0?"Runtime WebUI":Pe;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:A()("".concat(f,"-header"),d),children:[(0,t.jsxs)("div",{className:"".concat(f,"-header-left"),children:[ce&&(0,t.jsx)("img",{src:ce,alt:"logo",height:32}),(0,t.jsx)("span",{children:ye})]}),V&&(0,t.jsx)(Oe.Z,{className:"".concat(f,"-header-collapse"),bordered:!1,icon:G?(0,t.jsx)(He.Z,{}):(0,t.jsx)(Ge.Z,{}),onClick:Z})]})})}function bn(o){var d=(0,m.useContextSelector)(Be,function(V){return V.loading}),s=sn(),f=s.createSession,R=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),Z=(0,n.useContext)(Ae),G=Z.toggleCollapsed;return(0,t.jsx)("div",{className:"".concat(R,"-adder"),style:o.style,children:(0,t.jsx)(Me.Z,{block:!0,type:"primary",icon:(0,t.jsx)(Ke.Z,{}),disabled:!!d,onClick:W()(u()().mark(function V(){return u()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,f();case 2:o.narrowMode&&G();case 3:case"end":return F.stop()}},V)})),children:"New Chat"})})}function Ln(o){var d=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),s=(0,m.useContextSelector)(an,function(ce){return ce.sessions}),f=sn(),R=f.changeCurrentSessionId,Z=f.removeSession,G=(0,m.useContextSelector)(an,function(ce){return ce.currentSessionId}),V=(0,n.useContext)(Ae),U=V.toggleCollapsed,F=(0,n.useMemo)(function(){return s.map(function(ce){return{key:ce.id,label:ce.name||"New Chat"}})},[s]);return(0,t.jsx)("div",{className:"".concat(d,"-list"),style:o.style,children:(0,t.jsx)(Ue.Z,{items:F,menu:[{key:"delete",icon:(0,t.jsx)(un.Z,{}),danger:!0,onClick:function(){var ce=W()(u()().mark(function ye(me){return u()().wrap(function(Ne){for(;;)switch(Ne.prev=Ne.next){case 0:return Ne.next=2,Z({id:me.key});case 2:return Ne.abrupt("return",Ne.sent);case 3:case"end":return Ne.stop()}},ye)}));function Pe(ye){return ce.apply(this,arguments)}return Pe}()}],activeKey:G,onActiveChange:function(Pe){R(Pe),o.narrowMode&&U()}})})}var vn,jn=(0,L.vJ)(vn||(vn=E()([`

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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls}),Qe=e(85265);function $e(){var o=(0,b.wv)().getPrefixCls("chat-anywhere"),d=l(function(V){return V.theme}),s=d.narrowMode,f=d.rightHeader,R=(0,n.useContext)(Ae),Z=R.toggleCollapsed,G=R.collapsed;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(jn,{}),(0,t.jsxs)("div",{className:"".concat(o,"-layout-right-header"),children:[s?(0,t.jsx)(Pn,{className:"".concat(o,"-default-header-inner")}):null,f&&(0,t.jsx)("div",{className:"".concat(o,"-default-header-right"),children:f})]}),s&&(0,t.jsx)(Qe.Z,{width:"80vw",styles:{body:{padding:0}},open:G,onClose:Z,title:null,closable:!1,placement:"left",children:(0,t.jsxs)("div",{className:"".concat(o,"-sessions"),children:[(0,t.jsx)(Ln,{narrowMode:!0}),(0,t.jsx)(bn,{narrowMode:!0})]})})]})}function dn(o,d){var s=_(),f=(0,m.useContextSelector)(Be,function(R){return R.setDisabled});return n.useImperativeHandle(d,function(){return{messages:s,input:{setDisabled:f,submit:function(Z){var G=Z.query,V=Z.fileList,U=Z.biz_params;rn({type:"handleSubmit",data:{query:G,fileList:V,biz_params:U}})}}}},[]),null}var Se=(0,n.forwardRef)(dn);function Re(o,d){var s=o.className,f=(0,b.wv)().getPrefixCls("chat-anywhere-layout"),R=l(function(ye){return ye.theme.narrowMode}),Z=l(function(ye){return ye.theme.background}),G=l(function(ye){return ye.theme.rightHeader}),V=l(function(ye){return{session:ye.session}}),U=V.session,F=(0,n.useContext)(Ae),ce=F.collapsed,Pe=!R&&U&&U.multiple;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g,{}),(0,t.jsxs)("div",{className:A()("".concat(f),s),children:[Pe&&(0,t.jsx)("div",{className:A()("".concat(f,"-left"),x()({},"".concat(f,"-left-collapsed"),ce)),children:(0,t.jsx)(yn,{})}),(0,t.jsxs)("div",{className:A()("".concat(f,"-right"),x()({},"".concat(f,"-right-has-header"),!!G)),style:{background:Z},children:[!!G&&(0,t.jsx)($e,{}),(0,t.jsx)(le,{})]})]}),(0,t.jsx)(Se,{ref:d})]})}var hn=(0,n.forwardRef)(Re);function xn(o){var d=(0,n.useMemo)(function(){return o.data.input[0].content.reduce(function(s,f){if(f.type===w.TEXT&&s.push({code:"Text",data:{content:f.text,raw:!0}}),f.type===w.IMAGE){var R=s.find(function(G){return G.code==="Image"});R?R.data.push({url:f.image_url}):s.push({code:"Images",data:[{url:f.image_url}]})}if(f.type===w.FILE){var Z=s.find(function(G){return G.code==="Files"});Z?Z.data.push({url:f.file_url,name:f.file_name,size:f.file_size}):s.push({code:"Files",data:[{url:f.file_url,name:f.file_name,size:f.file_size}]})}return s},[])},[o.data.input]);return d!=null&&d.length?(0,t.jsx)(qe.Z,{role:"user",cards:d}):null}var _n=e(66109),An=n.memo(function(o){var d,s=o.data;return(d=s.content)!==null&&d!==void 0&&d.length?(0,t.jsx)(t.Fragment,{children:s.content.map(function(f,R){switch(f.type){case w.TEXT:return(0,t.jsx)(_n.Z,{content:f.text,cursor:f.status===H.InProgress},R);case w.REFUSAL:return(0,t.jsx)(_n.Z,{raw:!0,content:f.refusal},R);default:return(0,t.jsx)("div",{children:JSON.stringify(f)},R)}})}):null}),Rn=An,Bn=e(85786),wn=e(70770),Kn=e(86250),Mn=e(31912),Qn=e(7654),Nn=e(56290),On,Un,Fn,Dn,En,In,Hn,Jn,dt=(0,L.kc)(function(o){var d=o.css,s=o.token;return{container:d(On||(On=E()([`
    width: 386px;
  `]))),title:d(Un||(Un=E()([`
    font-size: 14px;
    font-weight: 500;
    color: `,`;
    margin-bottom: 16px;
  `])),s.colorText),content:d(Fn||(Fn=E()([`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `]))),tabsContainer:d(Dn||(Dn=E()([`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `]))),tabItem:d(En||(En=E()([`
    padding: 0 8px;
    font-size: 14px;
    color: `,`;
    cursor: pointer;
    border: 1px solid `,`;
    background: `,`;
    transition: all 0.2s;
    user-select: none;
    border-radius: 4px;
  `])),s.colorText,s.colorBorderSecondary,s.colorBgContainer),tabItemSelected:d(In||(In=E()([`
    color: `,`;
    border-color: `,`;
    border: 1px solid `,`;
    position: relative;
    z-index: 1;
  `])),s.colorPrimary,s.colorPrimary,s.colorPrimary),textarea:d(Hn||(Hn=E()([`
    resize: none;
  `]))),actions:d(Jn||(Jn=E()([`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  `])))}});function gt(){var o=(0,Nn.useTranslation)(),d=o.t;return[(d==null?void 0:d("cancelPopover.options.notNeeded"))||"\u4E0D\u9700\u8981",(d==null?void 0:d("cancelPopover.options.poorResult"))||"\u6548\u679C\u4E0D\u7406\u60F3",(d==null?void 0:d("cancelPopover.options.tooSlow"))||"\u7B49\u5F85\u65F6\u95F4\u4E45",(d==null?void 0:d("cancelPopover.options.wrongInput"))||"\u8F93\u5165\u9519\u8BEF"]}function Zn(o){var d=o.options,s=(0,n.useState)(),f=ee()(s,2),R=f[0],Z=f[1],G=dt(),V=G.styles;return(0,t.jsx)("div",{className:V.tabsContainer,children:d.map(function(U){return(0,t.jsx)("div",{className:"".concat(V.tabItem," ").concat(R===U?V.tabItemSelected:""),onClick:function(){Z(U),o.onSelect(U)},children:U},U)})})}function Xn(o){var d=(0,Nn.useTranslation)(),s=d.t,f=gt(),R=o.options,Z=R===void 0?f:R,G=o.onConfirm,V=o.title,U=V===void 0?(s==null?void 0:s("cancelPopover.title"))||"\u53D6\u6D88\u539F\u56E0":V,F=o.placeholder,ce=F===void 0?(s==null?void 0:s("cancelPopover.placeholder"))||"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212":F,Pe=(0,n.useState)(!1),ye=ee()(Pe,2),me=ye[0],be=ye[1],Ne=dt(),Ye=Ne.styles,Ee=(0,n.useState)(""),Le=ee()(Ee,2),kn=Le[0],Wn=Le[1],Sn=function(){G==null||G(kn.trim())},Vn=(0,t.jsxs)("div",{className:Ye.container,children:[(0,t.jsx)("div",{className:Ye.title,children:U}),(0,t.jsxs)("div",{className:Ye.content,children:[(0,t.jsx)(Zn,{options:Z,onSelect:Wn}),(0,t.jsx)(Mn.Z.TextArea,{className:Ye.textarea,value:kn,onChange:function(nt){return Wn(nt.target.value)},placeholder:ce,rows:3}),(0,t.jsxs)(Kn.Z,{className:Ye.actions,children:[(0,t.jsx)(Me.Z,{size:"small",onClick:function(){return be(!1)},children:(s==null?void 0:s("cancelPopover.cancel"))||"\u53D6\u6D88"}),(0,t.jsx)(Me.Z,{size:"small",type:"primary",onClick:function(){be(!1),Sn()},children:(s==null?void 0:s("cancelPopover.confirm"))||"\u786E\u8BA4"})]})]})]});return(0,t.jsx)(Qn.Z,{open:me,onOpenChange:be,trigger:"click",content:Vn,children:(0,t.jsx)(Me.Z,{size:"small",children:(s==null?void 0:s("approval.cancel"))||"\u53D6\u6D88\u6267\u884C"})})}var et,ft=(0,L.kc)(function(o){var d=o.css,s=o.token;return{desc:d(et||(et=E()([`
    font-size: 12px;
    color: `,`;
  `])),s.colorTextTertiary)}});function pt(o){var d=o.data,s=xe(function(Ne){return Ne}),f=ft(),R=f.styles,Z=(0,Nn.useTranslation)(),G=Z.t,V=(0,n.useState)("pending"),U=ee()(V,2),F=U[0],ce=U[1],Pe=(G==null?void 0:G("approval.title"))||"\u4EBA\u5DE5\u5E72\u9884",ye=(0,n.useMemo)(function(){return F==="pending"?(G==null?void 0:G("approval.pending"))||"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C":F==="confirmed"?(G==null?void 0:G("approval.confirmed"))||"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1":(G==null?void 0:G("approval.canceled"))||"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1"},[F,G]),me=(0,n.useCallback)(function(Ne,Ye){var Ee;ce(Ne),s.setLoading(!1),s.setDisabled(!1);var Le=d,kn=(Ee=Le.content[0])===null||Ee===void 0||(Ee=Ee.data)===null||Ee===void 0?void 0:Ee.id,Wn={type:j.MCP_APPROVAL_RESPONSE,role:de.USER,content:[{type:w.DATA,data:{approve:Ne==="confirmed",id:kn,approval_request_id:kn,reason:Ye}}]};rn({type:"handleApproval",data:{input:[Le,Wn]}})},[d]),be=(0,n.useMemo)(function(){return F==="pending"?(0,t.jsxs)(Kn.Z,{gap:8,children:[(0,t.jsx)(Xn,{onConfirm:function(Ye){return me("canceled",Ye)}}),(0,t.jsx)(Me.Z,{size:"small",type:"primary",onClick:function(){return me("confirmed")},children:(G==null?void 0:G("approval.confirm"))||"\u786E\u8BA4\u6267\u884C"})]}):null},[F,G]);return(0,n.useEffect)(function(){F==="pending"&&(s.setLoading((G==null?void 0:G("approval.taskRunning"))||"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1"),s.setDisabled(!0))},[F,G]),(0,t.jsx)(wn.Z.HITL,{done:F!=="pending",onDone:function(){},title:(0,t.jsxs)(Kn.Z,{gap:8,children:[Pe,(0,t.jsx)("span",{className:R.desc,children:ye})]}),actions:be})}var xt=n.memo(function(o){var d,s=o.data,f=o.isApproval,R=f===void 0?!1:f,Z=l(function(Ne){return Ne.customToolRenderConfig})||{};if(!((d=s.content)!==null&&d!==void 0&&d.length))return null;var G=s.content,V=s.status===H.InProgress,U=G[0].data.name,F="".concat(G[0].data.server_label?G[0].data.server_label+" / ":""),ce="".concat(F).concat(U),Pe;if(Z[U]){var ye=Z[U];Pe=(0,t.jsx)(ye,{data:s})}else{var me,be;Pe=(0,t.jsx)(Bn.Z,{loading:V,defaultOpen:!1,title:ce==="undefined"?"":ce,input:(me=G[0])===null||me===void 0||(me=me.data)===null||me===void 0?void 0:me.arguments,output:(be=G[1])===null||be===void 0||(be=be.data)===null||be===void 0?void 0:be.output})}return(0,t.jsxs)(t.Fragment,{children:[Pe,R&&(0,t.jsx)(pt,{data:s})]})}),tt=xt,Ct=e(79323);function vt(o){var d,s=o.data;if(s.status===H.Created)return null;var f=s==null||(d=s.content)===null||d===void 0?void 0:d[0];return f?(0,t.jsx)(Ct.Z,{loading:s.status===H.InProgress,title:"Thinking",content:f.text}):null}function $n(o){var d=o.data;return(0,t.jsx)(qe.Z.Interrupted,{type:"error",title:d.code,desc:d.message})}var yt=e(89698),rt=e(60227),bt=e(82286),at=e(67055),jt=e(39693),mt=e.n(jt);function Et(o){return!o.input_tokens||!o.output_tokens?null:(0,t.jsx)(qe.Z.Footer.Count,{data:[["Input",o.input_tokens],["Output",o.output_tokens]]})}function St(o){var d,s,f,R=(0,Nn.useTranslation)(),Z=R.t,G=l(function(F){var ce;return(ce=F.actions)===null||ce===void 0?void 0:ce.list})||[{icon:(0,t.jsx)(yt.Z,{}),onClick:function(){(0,bt.JG)(JSON.stringify(o.data))}}],V=(d=l(function(F){var ce;return(ce=F.actions)===null||ce===void 0?void 0:ce.replace}))!==null&&d!==void 0?d:!0,U=mt()([].concat(en()(G.map(function(F){var ce=F;return F.render&&(ce.children=n.createElement(F.render,{data:o})),h()(h()({},ce),{},{onClick:function(){var ye;(ye=F.onClick)===null||ye===void 0||ye.call(F,o)}})})),[V&&o.isLast?{icon:(0,t.jsx)(at.Z,{title:(Z==null?void 0:Z("actions.regenerate"))||"\u91CD\u65B0\u751F\u6210",children:(0,t.jsx)(rt.Z,{})}),onClick:function(){rn({type:"handleReplace",data:o})}}:null]));return z.maybeDone(o.data)?(0,t.jsx)(qe.Z.Footer,{left:(0,t.jsx)(qe.Z.Footer.Actions,{data:U}),right:(0,t.jsx)(Et,{input_tokens:(s=o.data.usage)===null||s===void 0?void 0:s.input_tokens,output_tokens:(f=o.data.usage)===null||f===void 0?void 0:f.output_tokens})}):null}function Pt(o){var d=(0,n.useMemo)(function(){return z.mergeToolMessages(o.data.output)},[o.data.output]);return!(d!=null&&d.length)&&z.maybeGenerating(o.data)?(0,t.jsx)(qe.Z.Spin,{}):(0,t.jsxs)(t.Fragment,{children:[d.map(function(s){switch(s.type){case j.MESSAGE:return(0,t.jsx)(Rn,{data:s},s.id);case j.PLUGIN_CALL:case j.PLUGIN_CALL_OUTPUT:case j.MCP_CALL:case j.MCP_CALL_OUTPUT:return(0,t.jsx)(tt,{data:s},s.id);case j.MCP_APPROVAL_REQUEST:return(0,t.jsx)(tt,{data:s,isApproval:!0},s.id);case j.REASONING:return(0,t.jsx)(vt,{data:s},s.id);case j.ERROR:return(0,t.jsx)($n,{data:s},s.id);case j.HEARTBEAT:return null;default:return console.warn("[WIP] Unknown message type: ".concat(s.type)),null}}),o.data.error&&(0,t.jsx)($n,{data:o.data.error}),(0,t.jsx)(St,h()({},o))]})}var At=e(83962);function ot(o){var d=o.options,s=o.cards,f=o.children,R=[[Nn.ChatAnywhereI18nContextProvider,{defaultLocale:d.theme.locale}],[T,{options:d}],[At.xy,{cardConfig:s}],[tn,{}],[Tn,{}],[K,{}],[N,{}]];return R.reduceRight(function(Z,G){var V=ee()(G,2),U=V[0],F=V[1];return(0,t.jsx)(U,h()(h()({},F),{},{children:Z}))},f)}var Tt=ot;function st(o,d){var s=o.options,f=s===void 0?{}:s,R=(0,n.useMemo)(function(){var Z=h()({AgentScopeRuntimeRequestCard:xn,AgentScopeRuntimeResponseCard:Pt},f.cards);return Z},[f.cards]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Tt,{options:f,cards:R,children:(0,t.jsx)(hn,{ref:d})})})}var Lt=(0,n.forwardRef)(st)},56290:function(on,J,e){"use strict";e.r(J),e.d(J,{ChatAnywhereI18nContextProvider:function(){return g},useChatAnywhereI18n:function(){return L},useTranslation:function(){return k}});var q=e(5574),h=e.n(q),D=e(59214),x=e(67294),b=e(85893),M={cn:{"approval.title":"\u4EBA\u5DE5\u5E72\u9884","approval.pending":"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C","approval.confirmed":"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1","approval.canceled":"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1","approval.cancel":"\u53D6\u6D88\u6267\u884C","approval.confirm":"\u786E\u8BA4\u6267\u884C","approval.taskRunning":"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1","cancelPopover.title":"\u53D6\u6D88\u539F\u56E0","cancelPopover.placeholder":"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212","cancelPopover.cancel":"\u53D6\u6D88","cancelPopover.confirm":"\u786E\u8BA4","cancelPopover.options.notNeeded":"\u4E0D\u9700\u8981","cancelPopover.options.poorResult":"\u6548\u679C\u4E0D\u7406\u60F3","cancelPopover.options.tooSlow":"\u7B49\u5F85\u65F6\u95F4\u4E45","cancelPopover.options.wrongInput":"\u8F93\u5165\u9519\u8BEF","common.save":"\u4FDD\u5B58","common.cancel":"\u53D6\u6D88","common.confirm":"\u786E\u8BA4","common.delete":"\u5220\u9664","common.edit":"\u7F16\u8F91","common.loading":"\u52A0\u8F7D\u4E2D...","common.saveSuccess":"\u4FDD\u5B58\u6210\u529F","common.saveFailed":"\u4FDD\u5B58\u5931\u8D25","actions.regenerate":"\u91CD\u65B0\u751F\u6210","messageImport.title":"Sessions \u6570\u636E\u5BFC\u5165","messageImport.placeholder":"\u8F93\u5165 JSON \u6570\u636E\u4EE5\u8986\u76D6\u5F53\u524D sessions","messageImport.saveToLocalStorage":"\u4FDD\u5B58\u5230 LocalStorage"},en:{"approval.title":"Human Intervention","approval.pending":"Please confirm whether to execute this operation","approval.confirmed":"Confirmed to execute task","approval.canceled":"Canceled task execution","approval.cancel":"Cancel","approval.confirm":"Confirm","approval.taskRunning":"A task is currently running, cannot send new task","cancelPopover.title":"Cancel Reason","cancelPopover.placeholder":"Please enter the reason for better AI planning","cancelPopover.cancel":"Cancel","cancelPopover.confirm":"Confirm","cancelPopover.options.notNeeded":"Not needed","cancelPopover.options.poorResult":"Poor result","cancelPopover.options.tooSlow":"Too slow","cancelPopover.options.wrongInput":"Wrong input","common.save":"Save","common.cancel":"Cancel","common.confirm":"Confirm","common.delete":"Delete","common.edit":"Edit","common.loading":"Loading...","common.saveSuccess":"Saved successfully","common.saveFailed":"Failed to save","actions.regenerate":"Regenerate","messageImport.title":"Import Sessions Data","messageImport.placeholder":"Enter JSON data to override current sessions","messageImport.saveToLocalStorage":"Save to LocalStorage"}},E=(0,D.createContext)(void 0);function L(C){try{var A=(0,D.useContextSelector)(E,C);return A}catch(P){return{}}}function k(){var C=L(function(m){return m==null?void 0:m.t}),A=L(function(m){return m==null?void 0:m.locale}),P=L(function(m){return m==null?void 0:m.setLocale});return{t:C,locale:A,setLocale:P}}function g(C){var A=C.children,P=C.defaultLocale,m=P===void 0?"en":P,n=(0,x.useState)(m),v=h()(n,2),I=v[0],i=v[1],t=(0,x.useCallback)(function(l,T){var se=M[I][l]||l;return T&&Object.entries(T).forEach(function(ae){var u=h()(ae,2),ge=u[0],W=u[1];se=se.replace(new RegExp("\\{".concat(ge,"\\}"),"g"),String(W))}),se},[I]),O=(0,x.useMemo)(function(){return{locale:I,setLocale:i,t,messages:M[I]}},[I,i,t]);return(0,b.jsx)(E.Provider,{value:O,children:A})}J.default=E},57551:function(){},22863:function(on,J,e){"use strict";e.r(J);var q=e(57551),h=e.n(q),D={};for(var x in q)x!=="default"&&(D[x]=function(b){return q[b]}.bind(0,x));e.d(J,D)},34487:function(on,J,e){"use strict";e.d(J,{Z:function(){return _e}});var q=e(97857),h=e.n(q),D=e(5574),x=e.n(D),b=e(56044),M=e(68400),E=e.n(M),L=e(9053),k,g=(0,L.vJ)(k||(k=E()([`
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
`])),function(Y){return Y.theme.prefixCls},function(Y){return Y.theme.colorBgLayout},function(Y){return Y.theme.colorBgLayout},function(Y){return Y.theme.colorFillTertiary},function(Y){return Y.theme.colorBgBase},function(Y){return Y.theme.prefixCls},function(Y){return Y.theme.prefixCls},function(Y){return Y.theme.colorBgBase},function(Y){return Y.theme.colorBorderSecondary},function(Y){return Y.theme.colorText},function(Y){return Y.theme.colorBorderSecondary},function(Y){return Y.theme.colorPrimary}),C=e(93967),A=e.n(C),P=e(55839),m=e(16494),n=e(85893);function v(Y){var Oe=(0,b.wv)().getPrefixCls("assets-preview-image"),ke=Y.width,Je=ke===void 0?1:ke,Xe=Y.height,we=Xe===void 0?1:Xe,mn=Y.src;return(0,n.jsx)("div",{className:Oe,style:{aspectRatio:"".concat(Je,"/").concat(we)},children:(0,n.jsx)(P.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(m.Z,{src:mn,width:"100%",height:"100%"})})})}function I(Y){return(0,n.jsx)(m.Z.PreviewGroup,{children:Y.children})}var i=e(9783),t=e.n(i),O=e(13769),l=e.n(O),T=e(67294),se=e(63701),ae=e(62321),u=e(32485),ge=e(64057),W=["width","height","poster","src"];function X(Y){var Oe=(0,b.wv)().getPrefixCls("assets-preview-video"),ke=Y.width,Je=ke===void 0?1:ke,Xe=Y.height,we=Xe===void 0?1:Xe,mn=Y.poster,qe=Y.src,Cn=l()(Y,W),en=(0,T.useRef)(null),Ze=(0,T.useState)(!1),Tn=x()(Ze,2),_=Tn[0],je=Tn[1],Ie=(0,T.useState)(0),nn=x()(Ie,2),an=nn[0],tn=nn[1],sn=(0,T.useState)(0),fn=x()(sn,2),Ve=fn[0],gn=fn[1],a=(0,T.useCallback)(function(ze){var pn=Math.floor(ze/60),ln=Math.floor(ze%60);return"".concat(pn.toString().padStart(2,"0"),":").concat(ln.toString().padStart(2,"0"))},[]),Ce=(0,T.useCallback)(function(){var ze=en.current;ze&&(ze.paused?(ze.play(),je(!0)):(ze.pause(),je(!1)))},[]),pe=(0,T.useCallback)(function(){en.current&&tn(en.current.duration)},[]),Fe=(0,T.useCallback)(function(){je(!1),gn(0)},[]),Te=(0,T.useCallback)(function(){en.current&&gn(en.current.currentTime)},[]),rn=(0,T.useCallback)(function(ze){ze.stopPropagation();var pn=en.current;pn&&(pn.requestFullscreen?pn.requestFullscreen():pn.webkitRequestFullscreen?pn.webkitRequestFullscreen():pn.msRequestFullscreen&&pn.msRequestFullscreen())},[]);return(0,n.jsxs)("div",{className:Oe,style:{aspectRatio:"".concat(Je,"/").concat(we)},children:[(0,n.jsx)("video",h()(h()({},Cn),{},{ref:en,src:qe,poster:mn,preload:"metadata",onLoadedMetadata:pe,onTimeUpdate:Te,onEnded:Fe})),(0,n.jsxs)("div",{className:A()("".concat(Oe,"-overlay"),t()({},"".concat(Oe,"-overlay-playing"),1)),onClick:Ce,children:[(0,n.jsx)("div",{className:"".concat(Oe,"-play-btn"),children:_?(0,n.jsx)(se.Z,{}):(0,n.jsx)(ae.Z,{})}),(0,n.jsx)("div",{className:"".concat(Oe,"-enlarge"),onClick:rn,children:(0,n.jsx)(ge.Z,{bordered:!1,size:"small",icon:(0,n.jsx)(u.Z,{})})})]}),(0,n.jsx)("div",{className:"".concat(Oe,"-duration"),children:a(an-Ve)})]})}var ee=e(20399),ue=e(80162);function De(Y){var Oe=(0,b.wv)().getPrefixCls("assets-preview-audio"),ke=(0,T.useRef)(null),Je=(0,T.useState)(!1),Xe=x()(Je,2),we=Xe[0],mn=Xe[1],qe=(0,T.useState)(!1),Cn=x()(qe,2),en=Cn[0],Ze=Cn[1],Tn=(0,T.useState)(0),_=x()(Tn,2),je=_[0],Ie=_[1],nn=(0,T.useState)(0),an=x()(nn,2),tn=an[0],sn=an[1],fn=(0,T.useCallback)(function(pe){if(isNaN(pe))return"00:00";var Fe=Math.floor(pe/60),Te=Math.floor(pe%60);return"".concat(Fe.toString().padStart(2,"0"),":").concat(Te.toString().padStart(2,"0"))},[]),Ve=(0,T.useCallback)(function(){ke.current&&(we?ke.current.pause():ke.current.play(),mn(!we))},[we]),gn=(0,T.useCallback)(function(){Ze(!en),ke.current&&(ke.current.muted=en)},[en]),a=(0,T.useCallback)(function(pe){if(ke.current&&tn){var Fe=pe.currentTarget.getBoundingClientRect(),Te=pe.clientX-Fe.left,rn=Te/Fe.width,ze=rn*tn;ke.current.currentTime=ze,Ie(ze)}},[tn]);(0,T.useEffect)(function(){var pe=ke.current;if(pe){var Fe=function(){return Ie(pe.currentTime)},Te=function(){return sn(pe.duration)},rn=function(){return mn(!1)};return pe.addEventListener("timeupdate",Fe),pe.addEventListener("loadedmetadata",Te),pe.addEventListener("ended",rn),function(){pe.removeEventListener("timeupdate",Fe),pe.removeEventListener("loadedmetadata",Te),pe.removeEventListener("ended",rn)}}},[]);var Ce=tn?je/tn*100:0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("audio",{ref:ke,src:Y.src,muted:en}),(0,n.jsxs)("div",{className:Oe,children:[(0,n.jsx)(ge.Z,{size:"small",type:"text",onClick:Ve,icon:we?(0,n.jsx)(se.Z,{}):(0,n.jsx)(ae.Z,{})}),(0,n.jsx)(ge.Z,{size:"small",type:"text",onClick:gn,icon:en?(0,n.jsx)(ee.Z,{}):(0,n.jsx)(ue.Z,{})}),(0,n.jsx)("div",{className:"".concat(Oe,"-time"),children:fn(je)}),(0,n.jsx)("div",{className:"".concat(Oe,"-progress"),onClick:a,children:(0,n.jsx)("div",{className:"".concat(Oe,"-progress-bar"),style:{width:"".concat(Ce,"%")}})}),(0,n.jsx)("div",{className:"".concat(Oe,"-time"),children:fn(tn)})]})]})}var p=e(16138),Be=e(83202),K=e(90105),xe=e(82052);function oe(Y){var Oe,ke=(0,K.Z)(),Je=(0,b.wv)().getPrefixCls("assets-preview"),Xe=(0,T.useRef)(null),we=Y.height,mn=we===void 0?144:we,qe=mn/2-12,Cn=(0,T.useRef)(0),en=(0,T.useState)(0),Ze=x()(en,2),Tn=Ze[0],_=Ze[1],je=(0,T.useDeferredValue)(Tn),Ie=(0,xe.Z)(Xe),nn=(0,T.useCallback)(function(fn){_(fn.target.scrollLeft)},[]);(0,T.useEffect)(function(){Xe.current&&Y.type!=="audio"&&(Cn.current=Xe.current.scrollWidth-Xe.current.clientWidth),ke()},[Y.data.length,Ie==null?void 0:Ie.width]);var an=(0,T.useCallback)(function(fn){var Ve=200;Xe.current.scrollLeft=Xe.current.scrollLeft+Ve*(fn==="left"?-1:1)},[]),tn={image:v,video:X,audio:De}[Y.type],sn=Y.data.map(function(fn,Ve){return(0,n.jsx)(tn,h()({},fn),Ve)});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{}),(0,n.jsxs)("div",{className:A()("".concat(Je),Y.className),children:[(0,n.jsx)("div",{className:A()("".concat(Je,"-container"),(Oe=Y.classNames)===null||Oe===void 0?void 0:Oe.container),style:Y.type!=="audio"?{height:mn}:{flexDirection:"column"},onScroll:nn,ref:Xe,children:Y.type==="image"?(0,n.jsx)(I,{children:sn}):sn}),qe>0&&Y.type!=="audio"?(0,n.jsxs)(n.Fragment,{children:[je>50&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:A()("".concat(Je,"-left-edge"))}),(0,n.jsx)(ge.Z,{onClick:function(){return an("left")},style:{top:qe},className:A()("".concat(Je,"-left-arrow"),"".concat(Je,"-arrow")),size:"small",shape:"circle",icon:(0,n.jsx)(p.Z,{})})]}),je<Cn.current-50&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:A()("".concat(Je,"-right-edge"))}),(0,n.jsx)(ge.Z,{onClick:function(){return an("right")},style:{top:qe},className:A()("".concat(Je,"-right-arrow"),"".concat(Je,"-arrow")),size:"small",shape:"circle",icon:(0,n.jsx)(Be.Z,{})})]})]}):null]})]})}var _e=oe},36417:function(on,J,e){"use strict";e.d(J,{Z:function(){return gn}});var q=e(9783),h=e.n(q),D=e(97857),x=e.n(D),b=e(5574),M=e.n(b),E=e(13769),L=e.n(E),k=e(93967),g=e.n(k),C=e(67294),A=e(56044),P=e(56790),m=e(73935),n=C.createContext(null),v=e(85893);function I(a){var Ce=a.getDropContainer,pe=a.className,Fe=a.prefixCls,Te=a.children,rn=C.useContext(n),ze=rn.disabled,pn=C.useState(),ln=M()(pn,2),cn=ln[0],c=ln[1],H=C.useState(null),de=M()(H,2),j=de[0],w=de[1];C.useEffect(function(){var he=Ce==null?void 0:Ce();cn!==he&&c(he)},[Ce]),C.useEffect(function(){if(cn){var he=function(){w(!0)},ie=function(B){B.preventDefault()},r=function(B){B.relatedTarget||w(!1)},y=function(B){w(!1),B.preventDefault()};return document.addEventListener("dragenter",he),document.addEventListener("dragover",ie),document.addEventListener("dragleave",r),document.addEventListener("drop",y),function(){document.removeEventListener("dragenter",he),document.removeEventListener("dragover",ie),document.removeEventListener("dragleave",r),document.removeEventListener("drop",y)}}},[!!cn]);var $=Ce&&cn&&!ze;if(!$)return null;var ne="".concat(Fe,"-drop-area");return(0,m.createPortal)((0,v.jsx)("div",{className:g()(ne,pe,h()({},"".concat(ne,"-on-body"),cn.tagName==="BODY")),style:{display:j?"block":"none"},children:Te}),cn)}var i=e(53033),t=e(52861),O=e(83622),l=e(29372),T=e(64599),se=e.n(T),ae=function(Ce){return Ce.indexOf("image/")===0},u=200;function ge(a){return new Promise(function(Ce){if(!a||!a.type||!ae(a.type)){Ce("");return}var pe=new Image;if(pe.onload=function(){var rn=pe.width,ze=pe.height,pn=rn/ze,ln=pn>1?u:u*pn,cn=pn>1?u/pn:u,c=document.createElement("canvas");c.width=ln,c.height=cn,c.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(ln,"px; height: ").concat(cn,"px; z-index: 9999; display: none;"),document.body.appendChild(c);var H=c.getContext("2d");H.drawImage(pe,0,0,ln,cn);var de=c.toDataURL();document.body.removeChild(c),window.URL.revokeObjectURL(pe.src),Ce(de)},pe.crossOrigin="anonymous",a.type.startsWith("image/svg+xml")){var Fe=new FileReader;Fe.onload=function(){Fe.result&&typeof Fe.result=="string"&&(pe.src=Fe.result)},Fe.readAsDataURL(a)}else if(a.type.startsWith("image/gif")){var Te=new FileReader;Te.onload=function(){Te.result&&Ce(Te.result)},Te.readAsDataURL(a)}else pe.src=window.URL.createObjectURL(a)})}var W=e(9361),X=e(38703);function ee(a){var Ce=a.percent,pe=W.Z.useToken(),Fe=pe.token;return(0,v.jsx)(X.Z,{type:"circle",percent:Ce,size:40,strokeColor:"#FFF",trailColor:"rgba(255, 255, 255, 0.3)",format:function(rn){return(0,v.jsxs)("span",{style:{color:"#FFF"},children:[(rn||0).toFixed(0),"%"]})}})}var ue=e(68400),De=e.n(ue),p=e(9053),Be,K=(0,p.vJ)(Be||(Be=De()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.borderRadius},function(a){return a.theme.colorBgContainer},function(a){return a.theme.lineWidth},function(a){return a.theme.colorBorderSecondary},function(a){return a.theme.paddingXS},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.fontSize},function(a){return a.theme.colorText},function(a){return a.theme.prefixCls},function(a){return a.theme.colorTextQuaternary},function(a){return a.theme.fontSizeSM},function(a){return a.theme.prefixCls},function(a){return a.theme.opacityLoading},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.borderRadius},function(a){return a.theme.lineWidth},function(a){return a.theme.prefixCls},function(a){return a.theme.paddingXXS},function(a){return a.theme.prefixCls},function(a){return a.theme.colorText},function(a){return a.theme.colorBgContainer},function(a){return a.theme.lineWidth},function(a){return a.theme.colorBorder},function(a){return a.theme.colorError},function(a){return a.theme.prefixCls},function(a){return a.theme.colorError},function(a){return a.theme.paddingSM},function(a){return a.theme.prefixCls},function(a){return a.theme.colorPrimary}),xe=e(89102),oe="\xA0",_e="#8c8c8c",Y=["png","jpg","jpeg","gif","bmp","webp","svg"],Oe=function(Ce){var pe=Ce.url;return(0,v.jsx)("img",{src:pe,width:32,height:32})},ke=[{icon:(0,v.jsx)(Oe,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01cVtZXI23tPVhiZoPJ_!!6000000007313-55-tps-40-40.svg"}),color:"#22b35e",ext:["xlsx","xls"]},{icon:(0,v.jsx)(Oe,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01uDnnuz1XMNEjgFMul_!!6000000002909-55-tps-40-40.svg"}),color:_e,ext:Y},{icon:(0,v.jsx)(Oe,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01PaXli01DDPAO68fsI_!!6000000000182-55-tps-40-40.svg"}),color:_e,ext:["md","mdx"]},{icon:(0,v.jsx)(Oe,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01mB5PzD27fuIWK661W_!!6000000007825-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["pdf"]},{icon:(0,v.jsx)(Oe,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01a8j7Jv1nW1QyFme7k_!!6000000005096-55-tps-40-40.svg"}),color:"#ff6e31",ext:["ppt","pptx"]},{icon:(0,v.jsx)(Oe,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01XaNi8P1UkhQXoQdUL_!!6000000002556-55-tps-40-40.svg"}),color:"#1677ff",ext:["doc","docx"]},{icon:(0,v.jsx)(Oe,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),color:"#fab714",ext:["zip","rar","7z","tar","gz"]},{icon:(0,v.jsx)(Oe,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01zTTe0q1Xg4GkZgJol_!!6000000002952-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["mp4","avi","mov","wmv","flv","mkv"]},{icon:(0,v.jsx)(Oe,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01qOBdXG1UpHO6f3Vvc_!!6000000002566-55-tps-40-40.svg"}),color:"#8c8c8c",ext:["mp3","wav","flac","ape","aac","ogg"]}];function Je(a,Ce){return Ce.some(function(pe){return a.toLowerCase()===".".concat(pe)})}function Xe(a){for(var Ce=a,pe=["B","KB","MB","GB","TB","PB","EB"],Fe=0;Ce>=1024&&Fe<pe.length-1;)Ce/=1024,Fe++;return"".concat(Ce.toFixed(0)," ").concat(pe[Fe])}function we(a,Ce){var pe=(0,A.wv)(),Fe=pe.getPrefixCls,Te=a.item,rn=a.onRemove,ze=a.className,pn=a.style,ln=C.useContext(n),cn=ln||{},c=cn.disabled,H=Te.name,de=Te.size,j=Te.percent,w=Te.status,$=w===void 0?"done":w,ne=Te.description,he=Fe("attachment"),ie="".concat(he,"-list-card"),r=C.useMemo(function(){var N=H||"",yn=N.match(/^(.*)\.[^.]+$/);return yn?[yn[1],N.slice(yn[1].length)]:[N,""]},[H]),y=M()(r,2),S=y[0],B=y[1],te=C.useMemo(function(){return Je(B,Y)},[B]),re=C.useMemo(function(){return ne||($==="uploading"?"".concat(j||0,"%"):$==="error"?Te.response||oe:de?Xe(de):oe)},[$,j]),z=C.useMemo(function(){var N=se()(ke),yn;try{for(N.s();!(yn=N.n()).done;){var Pn=yn.value,bn=Pn.ext,Ln=Pn.icon,vn=Pn.color;if(Je(B,bn))return[Ln,vn]}}catch(jn){N.e(jn)}finally{N.f()}return[(0,v.jsx)(Oe,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"},"defaultIcon"),_e]},[B]),fe=M()(z,2),ve=fe[0],Q=fe[1],le=C.useState(),Me=M()(le,2),Ge=Me[0],He=Me[1];C.useEffect(function(){if(Te.originFileObj){var N=!0;return ge(Te.originFileObj).then(function(yn){N&&He(yn)}),function(){N=!1}}He(void 0)},[Te.originFileObj]);var Ke=null,un=Te.thumbUrl||Te.url||Ge,Ue=a.renderType||"default",Ae=te&&(Te.originFileObj||un)&&Ue==="default";return Ae?Ke=(0,v.jsxs)(v.Fragment,{children:[un&&(0,v.jsx)("img",{alt:"preview",src:un}),$!=="done"&&(0,v.jsxs)("div",{className:"".concat(ie,"-img-mask"),children:[$==="uploading"&&j!==void 0&&(0,v.jsx)(ee,{percent:j,prefixCls:ie}),$==="error"&&(0,v.jsx)("div",{className:"".concat(ie,"-desc"),children:(0,v.jsx)("div",{className:"".concat(ie,"-ellipsis-prefix"),children:re})})]})]}):Ke=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"".concat(ie,"-icon"),style:{color:Q},children:ve}),(0,v.jsxs)("div",{className:"".concat(ie,"-content"),children:[(0,v.jsxs)("div",{className:"".concat(ie,"-name"),children:[S!=null?S:oe,B]}),(0,v.jsx)("div",{className:"".concat(ie,"-desc"),children:(0,v.jsx)("div",{className:"".concat(ie,"-ellipsis-prefix"),children:re})})]})]}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(K,{}),(0,v.jsxs)("div",{className:g()(ie,h()(h()(h()(h()(h()({},"".concat(ie,"-status-").concat($),$),"".concat(ie,"-type-preview"),Ae),"".concat(ie,"-type-overview"),!Ae),"".concat(ie,"-type-").concat(Ue),!0),"".concat(ie,"-hoverable"),!c&&rn),ze),style:pn,ref:Ce,children:[Ke,(0,v.jsx)("button",{style:{opacity:!c&&rn?1:0},className:"".concat(ie,"-remove"),onClick:function(){!c&&rn&&rn(Te)},children:(0,v.jsx)(xe.Z,{})})]})]})}var mn=C.forwardRef(we),qe=1;function Cn(a){var Ce=a.prefixCls,pe=a.items,Fe=a.onRemove,Te=a.overflow,rn=a.listClassName,ze=a.listStyle,pn=a.itemClassName,ln=a.itemStyle,cn="".concat(Ce,"-list"),c=C.useRef(null),H=C.useState(!1),de=M()(H,2),j=de[0],w=de[1];C.useEffect(function(){return w(!0),function(){w(!1)}},[]);var $=C.useState(!1),ne=M()($,2),he=ne[0],ie=ne[1],r=C.useState(!1),y=M()(r,2),S=y[0],B=y[1],te=function(){var Q=c.current;Q&&(Te==="scrollX"?(ie(Math.abs(Q.scrollLeft)>=qe),B(Q.scrollWidth-Q.clientWidth-Math.abs(Q.scrollLeft)>=qe)):Te==="scrollY"&&(ie(Q.scrollTop!==0),B(Q.scrollHeight-Q.clientHeight!==Q.scrollTop)))};C.useEffect(function(){te()},[Te]);var re=function(Q){var le=c.current;le&&le.scrollTo({left:le.scrollLeft+Q*le.clientWidth,behavior:"smooth"})},z=function(){re(-1)},fe=function(){re(1)};return(0,v.jsxs)("div",{className:g()(cn,h()(h()(h()({},"".concat(cn,"-overflow-").concat(a.overflow),Te),"".concat(cn,"-overflow-ping-start"),he),"".concat(cn,"-overflow-ping-end"),S),rn),ref:c,onScroll:te,style:ze,children:[(0,v.jsx)(l.V4,{keys:pe.map(function(ve){return{key:ve.uid,item:ve}}),motionName:"".concat(cn,"-card-motion"),component:!1,motionAppear:j,motionLeave:!0,motionEnter:!0,children:function(Q){var le=Q.key,Me=Q.item,Ge=Q.className,He=Q.style;return(0,v.jsx)(mn,{prefixCls:Ce,item:Me,onRemove:Fe,className:g()(Ge,pn),style:x()(x()({},He),ln),renderType:a.renderType},le)}}),Te==="scrollX"&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(O.ZP,{size:"small",shape:"circle",className:"".concat(cn,"-prev-btn"),icon:(0,v.jsx)(i.Z,{}),onClick:z}),(0,v.jsx)(O.ZP,{size:"small",shape:"circle",className:"".concat(cn,"-next-btn"),icon:(0,v.jsx)(t.Z,{}),onClick:fe})]})]})}var en=e(86250),Ze=e(21317),Tn=e(41154);function _(a,Ce){var pe=a.prefixCls,Fe=a.placeholder,Te=Fe===void 0?{}:Fe,rn=a.upload,ze=a.className,pn=a.style,ln="".concat(pe,"-placeholder"),cn=Te||{},c=C.useContext(n),H=c.disabled,de=C.useState(!1),j=M()(de,2),w=j[0],$=j[1],ne=function(){$(!0)},he=function(S){S.currentTarget.contains(S.relatedTarget)||$(!1)},ie=function(){$(!1)},r=C.isValidElement(Te)?Te:(0,v.jsxs)(en.Z,{align:"center",justify:"center",vertical:!0,className:"".concat(ln,"-inner"),children:[(0,v.jsx)(Ze.default.Text,{className:"".concat(ln,"-icon"),children:cn.icon}),(0,v.jsx)(Ze.default.Title,{className:"".concat(ln,"-title"),level:5,children:cn.title}),(0,v.jsx)(Ze.default.Text,{className:"".concat(ln,"-description"),type:"secondary",children:cn.description})]});return(0,v.jsx)("div",{className:g()(ln,h()(h()({},"".concat(ln,"-drag-in"),w),"".concat(ln,"-disabled"),H),ze),onDragEnter:ne,onDragLeave:he,onDrop:ie,"aria-hidden":H,style:pn,children:(0,v.jsx)(Tn.Z.Dragger,x()(x()({showUploadList:!1},rn),{},{ref:Ce,style:{padding:0,border:0,background:"transparent"},children:r}))})}var je=C.forwardRef(_);function Ie(a,Ce){var pe=a.children,Fe=a.upload,Te=a.rootClassName,rn=C.useRef(null);return C.useImperativeHandle(Ce,function(){return rn.current}),(0,v.jsx)(Tn.Z,x()(x()({},Fe),{},{showUploadList:!1,rootClassName:Te,ref:rn,children:pe}))}var nn=C.forwardRef(Ie),an,tn=(0,p.vJ)(an||(an=De()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.zIndexPopupBase},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.borderRadius},function(a){return a.theme.lineWidthBold},function(a){return a.theme.padding},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.colorPrimaryHover},function(a){return a.theme.prefixCls},function(a){return a.theme.paddingXXS},function(a){return a.theme.fontSizeHeading2},function(a){return a.theme.prefixCls},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.paddingSM},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.colorText},function(a){return a.theme.padding},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.paddingSM},function(a){return a.theme.paddingSM},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.paddingSM},function(a){return a.theme.paddingSM},function(a){return a.theme.fontSize},function(a){return a.theme.lineHeight},function(a){return a.theme.paddingSM},function(a){return a.theme.paddingSM},function(a){return a.theme.fontSizeHeading2},function(a){return a.theme.boxShadowTertiary},function(a){return a.theme.padding},function(a){return a.theme.padding},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),sn=["prefixCls","rootClassName","rootStyle","className","style","items","children","getDropContainer","placeholder","onChange","overflow","disabled","classNames","styles"];function fn(a,Ce){var pe=a.prefixCls,Fe=a.rootClassName,Te=a.rootStyle,rn=a.className,ze=a.style,pn=a.items,ln=a.children,cn=a.getDropContainer,c=a.placeholder,H=a.onChange,de=a.overflow,j=a.disabled,w=a.classNames,$=w===void 0?{}:w,ne=a.styles,he=ne===void 0?{}:ne,ie=L()(a,sn),r=(0,A.wv)(),y=r.direction,S=r.getPrefixCls,B=S("attachment"),te=C.useRef(null),re=C.useRef(null);C.useImperativeHandle(Ce,function(){return{nativeElement:te.current,upload:function(Ae){var N,yn=(N=re.current)===null||N===void 0||(N=N.nativeElement)===null||N===void 0?void 0:N.querySelector('input[type="file"]');if(yn){var Pn=new DataTransfer;Pn.items.add(Ae),yn.files=Pn.files,yn.dispatchEvent(new Event("change",{bubbles:!0}))}}}});var z=(0,P.C8)([],{value:pn}),fe=M()(z,2),ve=fe[0],Q=fe[1],le=(0,P.zX)(function(Ue){Q(Ue.fileList),H==null||H(Ue)}),Me=x()(x()({},ie),{},{fileList:ve,onChange:le}),Ge=function(Ae){var N=ve.filter(function(yn){return yn.uid!==Ae.uid});le({file:Ae,fileList:N})},He,Ke=function(Ae,N,yn){var Pn=typeof c=="function"?c(Ae):c;return(0,v.jsx)(je,{placeholder:Pn,upload:Me,prefixCls:B,className:g()($.placeholder),style:x()(x()({},he.placeholder),N==null?void 0:N.style),ref:yn})};if(ln)He=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(nn,{upload:Me,rootClassName:Fe,ref:re,children:ln}),(0,v.jsx)(I,{getDropContainer:cn,prefixCls:B,className:g()(Fe),children:Ke("drop")})]});else{var un=ve.length>0;He=(0,v.jsxs)("div",{className:g()(B,h()({},"".concat(B,"-rtl"),y==="rtl"),rn,Fe),style:x()(x()({},Te),ze),dir:y||"ltr",ref:te,children:[(0,v.jsx)(Cn,{prefixCls:B,items:ve,onRemove:Ge,overflow:de,upload:Me,listClassName:g()($.list),listStyle:x()(x()({},he.list),!un&&{display:"none"}),itemClassName:g()($.item),itemStyle:x()({},he.item),renderType:a.renderType}),Ke("inline",un?{style:{display:"none"}}:{},re)]})}return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(tn,{}),(0,v.jsx)(n.Provider,{value:{disabled:j},children:He})]})}var Ve=C.forwardRef(fn);Ve.FileCard=mn;var gn=Ve},50130:function(on,J,e){"use strict";e.d(J,{L:function(){return A},Z:function(){return C}});var q=e(97857),h=e.n(q),D=e(13769),x=e.n(D),b=e(67294),M=e(83962),E=e(76289),L=e(85893),k=["component"],g=b.memo(function(P){var m=(0,M.HJ)(),n=(0,E.TQ)(function(t){return t.onInput}),v=(0,b.useMemo)(function(){if(P.component)return P.component;var t=m;return(t==null?void 0:t[P.code])||function(){return"".concat(P.code," not found")}},[]);if(typeof v=="function"){var I=P.component,i=x()(P,k);return(0,L.jsx)(v,h()(h()({},i),{},{context:{onInput:n}}))}else return v});function C(P){var m=P.cards;return m!=null&&m.length?m.map(function(n,v){var I=(0,L.jsx)(g,h()({index:v,id:P.id,isLast:P.isLast},n),(n==null?void 0:n.id)||v+n.code);return n.code==="Text"?(0,L.jsx)("div",{className:P.className,children:I},v):I}):null}function A(P,m){return{code:P,data:m}}},67369:function(on,J,e){"use strict";e.d(J,{p4:function(){return A},hw:function(){return P},ZP:function(){return C}});var q=e(67294),h=e(56044),D=e(64057),x=e(68400),b=e.n(x),M=e(9053),E,L=(0,M.vJ)(E||(E=b()([`
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
`])),function(m){return m.theme.prefixCls},function(m){return m.theme.prefixCls},function(m){return m.theme.colorText},function(m){return m.theme.prefixCls},function(m){return m.theme.colorTextTertiary},function(m){return m.theme.colorBorder}),k=L,g=e(85893);function C(m){var n=(0,h.wv)(),v=n.getPrefixCls,I=v("bubble-footer"),i=m.left,t=m.right;return i&&!i.type||t&&!t.type?null:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(k,{}),(0,g.jsxs)("div",{className:I,children:[(0,g.jsx)("div",{className:"".concat(I,"-left"),children:m.left}),(0,g.jsx)("div",{className:"".concat(I,"-right"),children:m.right})]})]})}function A(m){var n=(0,h.wv)(),v=n.getPrefixCls,I=v("bubble-footer-actions");return(0,g.jsx)("div",{className:I,children:m.data.map(function(i,t){return i.children?q.cloneElement(i.children,{key:t}):(0,g.jsx)(D.Z,{bordered:!1,icon:i.icon,size:"small",onClick:i.onClick},t)})})}function P(m){var n=(0,h.wv)(),v=n.getPrefixCls,I=v("bubble-footer-count");return(0,g.jsx)("div",{className:I,children:m.data.map(function(i){return(0,g.jsxs)("div",{className:"".concat(I,"-item"),children:[i[0],"\uFF1A",i[1]]},i[0])})})}C.Actions=A,C.Count=P},10146:function(on,J,e){"use strict";e.d(J,{Z:function(){return g}});var q=e(68400),h=e.n(q),D=e(9053),x=e(56044),b=e(9343),M=e(36674),E=e(85893),L,k=(0,D.vJ)(L||(L=h()([`
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

`])),function(C){return C.theme.prefixCls},function(C){return C.theme.colorFillSecondary},function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.colorText},function(C){return C.theme.colorError});function g(C){var A=C.title,P=A===void 0?"Answers have stopped":A,m=C.type,n=m===void 0?"interrupted":m,v=C.desc,I=(0,x.wv)(),i=I.getPrefixCls,t=i("interrupted");return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(k,{}),(0,E.jsxs)("div",{className:"".concat(t),children:[(0,E.jsxs)("div",{className:"".concat(t,"-header"),children:[(0,E.jsx)("div",{className:"".concat(t,"-icon-wrapper"),children:n==="interrupted"?(0,E.jsx)(b.Z,{className:"".concat(t,"-header-interrupted")}):(0,E.jsx)(M.Z,{className:"".concat(t,"-header-error")})}),(0,E.jsx)("span",{children:P})]}),v&&(0,E.jsx)("div",{className:"".concat(t,"-desc"),children:v})]})]})}},52471:function(on,J,e){"use strict";e.d(J,{Z:function(){return ie}});var q=e(97857),h=e.n(q),D=e(93967),x=e.n(D),b=e(67294),M=e(68400),E=e.n(M),L=e(9053),k,g=(0,L.vJ)(k||(k=E()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorText},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorPrimaryBg},function(r){return r.theme.prefixCls},function(r){return r.theme.colorText},function(r){return r.theme.colorText},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorTextTertiary},function(r){return r.theme.colorTextTertiary},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorTextSecondary},function(r){return r.theme.colorTextSecondary},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorBgBase}),C=e(56044),A=e(66109),P=e(50130),m=e(85893);function n(){var r=(0,C.wv)(),y=r.getPrefixCls,S=y("bubble-loading");return(0,m.jsxs)("div",{className:S,children:[(0,m.jsx)("div",{className:"".concat(S,"-dot1")}),(0,m.jsx)("div",{className:"".concat(S,"-dot2")}),(0,m.jsx)("div",{className:"".concat(S,"-dot3")}),(0,m.jsx)("div",{className:"".concat(S,"-text"),children:"-"})]})}var v=e(9783),I=e.n(v),i=e(68997),t=function(y){var S=y.avatar,B=y.msgStatus,te=y.isAssistant,re=y.prefixCls,z=y.className,fe=y.style,ve=b.isValidElement(S)?S:(0,m.jsx)(i.Z,h()({},S));return(0,m.jsx)("div",{className:x()("".concat(re,"-avatar"),I()({},"".concat(re,"-avatar-loading"),te&&B==="generating"),z),style:fe,children:ve})},O=t,l,T=(0,L.vJ)(l||(l=E()([`
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

`])),function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls}),se=b.createContext({}),ae=function(y){var S=y.isLast,B=y.className,te=y.rootClassName,re=y.style,z=y.classNames,fe=z===void 0?{}:z,ve=y.styles,Q=ve===void 0?{}:ve,le=y.avatar,Me=y.content,Ge=Me===void 0?"":Me,He=y.cards,Ke=y.msgStatus,un=y.id,Ue=y.role,Ae=y.variant,N={assistant:"start",user:"end"}[Ue]||"start",yn=(0,C.wv)(),Pn=yn.getPrefixCls,bn=Pn("bubble"),Ln=x()(bn,te,B,"".concat(bn,"-").concat(N)),vn,jn=!(Ge!=null&&Ge.length)&&!(He!=null&&He.length);y.msgStatus==="generating"&&jn?vn=(0,m.jsx)(n,{}):vn=Ge?(0,m.jsx)(A.Z,{content:Ge,cursor:y.msgStatus==="generating"}):null;var Qe=N==="assistant"||N==="start",$e="".concat(bn,"-content-").concat(Ae||(Qe?"borderless":"filled")),dn=(0,m.jsxs)("div",{style:!Qe&&vn?{flexDirection:"column-reverse"}:{},className:"".concat(bn,"-content-wrapper"),children:[(0,m.jsx)(P.Z,{cards:He,id:un,isLast:S,className:x()("".concat(bn,"-content"),"".concat(bn,"-content-wrapper-card"),$e,fe.content)}),vn&&(0,m.jsx)("div",{style:h()({},Q.content),className:x()("".concat(bn,"-content"),"".concat(bn,"-content-wrapper-card"),$e,fe.content),children:vn})]});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g,{}),(0,m.jsx)(T,{}),(0,m.jsxs)("div",{style:re,className:Ln,id:un,"data-role":Ue,children:[le&&(0,m.jsx)(O,{avatar:le,msgStatus:Ke,isAssistant:Qe,prefixCls:bn,className:fe.avatar,style:Q.avatar}),dn]})]})},u=b.memo(ae),ge=e(5574),W=e.n(ge),X=e(13769),ee=e.n(X),ue=e(52677),De=e.n(ue),p=e(15009),Be=e.n(p),K=e(99289),xe=e.n(K),oe,_e,Y;var Oe={damping:.7,stiffness:.05,mass:1.25},ke=70,Je=1e3/60,Xe=350,we=!1;(oe=globalThis.document)===null||oe===void 0||oe.addEventListener("mousedown",function(){we=!0}),(_e=globalThis.document)===null||_e===void 0||_e.addEventListener("mouseup",function(){we=!1}),(Y=globalThis.document)===null||Y===void 0||Y.addEventListener("click",function(){we=!1});var mn=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},S=(0,b.useState)(!1),B=W()(S,2),te=B[0],re=B[1],z=(0,b.useState)(y.enabled!==!1&&y.initial!==!1),fe=W()(z,2),ve=fe[0],Q=fe[1],le=(0,b.useState)(!1),Me=W()(le,2),Ge=Me[0],He=Me[1],Ke=(0,b.useRef)(null);Ke.current=y;var un=(0,b.useCallback)(function(){var Qe;if(!we)return!1;var $e=window.getSelection();if(!$e||!$e.rangeCount)return!1;var dn=$e.getRangeAt(0);return dn.commonAncestorContainer.contains(vn.current)||((Qe=vn.current)===null||Qe===void 0?void 0:Qe.contains(dn.commonAncestorContainer))},[]),Ue=(0,b.useCallback)(function(Qe){N.isAtBottom=Qe,Q(Qe)},[]),Ae=(0,b.useCallback)(function(Qe){N.escapedFromLock=Qe,re(Qe)},[]),N=(0,b.useMemo)(function(){var Qe;return{escapedFromLock:te,isAtBottom:ve,resizeDifference:0,accumulated:0,velocity:0,listeners:new Set,get scrollTop(){var $e,dn;return($e=(dn=vn.current)===null||dn===void 0?void 0:dn.scrollTop)!==null&&$e!==void 0?$e:0},set scrollTop($e){vn.current&&(vn.current.scrollTop=$e,N.ignoreScrollToTop=vn.current.scrollTop)},get targetScrollTop(){return!vn.current||!jn.current?0:vn.current.scrollHeight-1-vn.current.clientHeight},get calculatedTargetScrollTop(){var $e;if(!vn.current||!jn.current)return 0;var dn=this.targetScrollTop;if(!y.targetScrollTop)return dn;if((($e=Qe)===null||$e===void 0?void 0:$e.targetScrollTop)===dn)return Qe.calculatedScrollTop;var Se=Math.max(Math.min(y.targetScrollTop(dn,{scrollElement:vn.current,contentElement:jn.current}),dn),0);return Qe={targetScrollTop:dn,calculatedScrollTop:Se},requestAnimationFrame(function(){Qe=void 0}),Se},get scrollDifference(){return this.calculatedTargetScrollTop-this.scrollTop},get isNearBottom(){return this.scrollDifference<=ke}}},[]),yn=(0,b.useCallback)(function(){var Qe,$e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};typeof $e=="string"&&($e={animation:$e}),$e.preserveScrollPosition||Ue(!0);var dn=Date.now()+(Number($e.wait)||0),Se=en(Ke.current,$e.animation),Re=$e,hn=Re.ignoreEscapes,xn=hn===void 0?!1:hn,_n,An=N.calculatedTargetScrollTop;if($e.duration instanceof Promise)$e.duration.finally(function(){_n=Date.now()});else{var Rn;_n=dn+((Rn=$e.duration)!==null&&Rn!==void 0?Rn:0)}var Bn=function(){var wn=xe()(Be()().mark(function Kn(){var Mn;return Be()().wrap(function(Nn){for(;;)switch(Nn.prev=Nn.next){case 0:return Mn=new Promise(requestAnimationFrame).then(function(){var On;if(!N.isAtBottom)return N.animation=void 0,!1;var Un=N.scrollTop,Fn=performance.now(),Dn=(Fn-((On=N.lastTick)!==null&&On!==void 0?On:Fn))/Je;if(N.animation||(N.animation={behavior:Se,promise:Mn,ignoreEscapes:xn}),N.animation.behavior===Se&&(N.lastTick=Fn),un()||dn>Date.now())return Bn();if(Un<Math.min(An,N.calculatedTargetScrollTop)){var En;if(((En=N.animation)===null||En===void 0?void 0:En.behavior)===Se){if(Se==="instant")return N.scrollTop=N.calculatedTargetScrollTop,Bn();N.velocity=(Se.damping*N.velocity+Se.stiffness*N.scrollDifference)/Se.mass,N.accumulated+=N.velocity*Dn,N.scrollTop+=N.accumulated,N.scrollTop!==Un&&(N.accumulated=0)}return Bn()}return _n>Date.now()?(An=N.calculatedTargetScrollTop,Bn()):(N.animation=void 0,N.scrollTop<N.calculatedTargetScrollTop?yn({animation:en(Ke.current,Ke.current.resize),ignoreEscapes:xn,duration:Math.max(0,_n-Date.now())||void 0}):N.isAtBottom)}),Nn.abrupt("return",Mn.then(function(On){return requestAnimationFrame(function(){N.animation||(N.lastTick=void 0,N.velocity=0)}),On}));case 2:case"end":return Nn.stop()}},Kn)}));return function(){return wn.apply(this,arguments)}}();return $e.wait!==!0&&(N.animation=void 0),((Qe=N.animation)===null||Qe===void 0?void 0:Qe.behavior)===Se?N.animation.promise:Bn()},[Ue,un,N]),Pn=(0,b.useCallback)(function(){Ae(!0),Ue(!1)},[Ae,Ue]),bn=(0,b.useCallback)(function(Qe){var $e=Qe.target;if($e===vn.current){var dn=N.scrollTop,Se=N.ignoreScrollToTop,Re=N.lastScrollTop,hn=Re===void 0?dn:Re;N.lastScrollTop=dn,N.ignoreScrollToTop=void 0,Se&&Se>dn&&(hn=Se),He(N.isNearBottom),setTimeout(function(){var xn;if(!(N.resizeDifference||dn===Se)){if(un()){Ae(!0),Ue(!1);return}var _n=dn>hn,An=dn<hn;if((xn=N.animation)!==null&&xn!==void 0&&xn.ignoreEscapes){N.scrollTop=hn;return}An&&(Ae(!0),Ue(!1)),_n&&Ae(!1),!N.escapedFromLock&&N.isNearBottom&&Ue(!0)}},1)}},[Ae,Ue,un,N]),Ln=(0,b.useCallback)(function(Qe){for(var $e,dn=Qe.target,Se=Qe.deltaY,Re=dn;!["scroll","auto"].includes(getComputedStyle(Re).overflow);){if(!Re.parentElement)return;Re=Re.parentElement}Re===vn.current&&Se<0&&vn.current.scrollHeight>vn.current.clientHeight&&!(($e=N.animation)!==null&&$e!==void 0&&$e.ignoreEscapes)&&(Ae(!0),Ue(!1))},[Ae,Ue,N]),vn=qe(function(Qe){var $e,dn;($e=vn.current)===null||$e===void 0||$e.removeEventListener("scroll",bn),(dn=vn.current)===null||dn===void 0||dn.removeEventListener("wheel",Ln),Qe==null||Qe.addEventListener("scroll",bn,{passive:!0}),Qe==null||Qe.addEventListener("wheel",Ln,{passive:!0})},[]),jn=qe(function(Qe){var $e,dn;if(($e=N.resizeObserver)===null||$e===void 0||$e.disconnect(),!!Qe){var Se;N.resizeObserver=new ResizeObserver(function(Re){var hn,xn=W()(Re,1),_n=xn[0],An=_n.contentRect.height,Rn=An-((hn=Se)!==null&&hn!==void 0?hn:An);if(N.resizeDifference=Rn,N.scrollTop>N.targetScrollTop&&(N.scrollTop=N.targetScrollTop),He(N.isNearBottom),Rn>=0){if(Ke.current.enabled!==!1){var Bn=en(Ke.current,Se?Ke.current.resize:Ke.current.initial);yn({animation:Bn,wait:!0,preserveScrollPosition:!0,duration:Bn==="instant"?void 0:Xe})}}else N.isNearBottom&&(Ae(!1),Ue(!0));Se=An,requestAnimationFrame(function(){setTimeout(function(){N.resizeDifference===Rn&&(N.resizeDifference=0)},1)})}),(dn=N.resizeObserver)===null||dn===void 0||dn.observe(Qe)}},[]);return{contentRef:jn,scrollRef:vn,scrollToBottom:yn,stopScroll:Pn,isAtBottom:ve||Ge,isNearBottom:Ge,escapedFromLock:te,state:N}};function qe(r,y){var S=(0,b.useCallback)(function(B){return S.current=B,r(B)},y);return S}var Cn=new Map;function en(){for(var r=h()({},Oe),y=!1,S=arguments.length,B=new Array(S),te=0;te<S;te++)B[te]=arguments[te];for(var re=0,z=B;re<z.length;re++){var fe,ve,Q,le=z[re];if(le==="instant"){y=!0;continue}De()(le)==="object"&&(y=!1,r.damping=(fe=le.damping)!==null&&fe!==void 0?fe:r.damping,r.stiffness=(ve=le.stiffness)!==null&&ve!==void 0?ve:r.stiffness,r.mass=(Q=le.mass)!==null&&Q!==void 0?Q:r.mass)}var Me=JSON.stringify(r);return Cn.has(Me)||Cn.set(Me,Object.freeze(r)),y?"instant":Cn.get(Me)}var Ze=["instance","children","resize","initial","mass","damping","stiffness","targetScrollTop","contextRef"],Tn=["children","scrollClassName"];var _=(0,b.createContext)(null),je=typeof window!="undefined"?b.useLayoutEffect:b.useEffect;function Ie(r){var y=r.instance,S=r.children,B=r.resize,te=r.initial,re=r.mass,z=r.damping,fe=r.stiffness,ve=r.targetScrollTop,Q=r.contextRef,le=ee()(r,Ze),Me=(0,b.useRef)(null),Ge=b.useCallback(function(Qe,$e){var dn,Se,Re=(dn=jn==null?void 0:jn.targetScrollTop)!==null&&dn!==void 0?dn:ve;return(Se=Re==null?void 0:Re(Qe,$e))!==null&&Se!==void 0?Se:Qe},[ve]),He=le.enabled,Ke=He===void 0?!0:He,un=mn({enabled:Ke,mass:re,damping:z,stiffness:fe,resize:B,initial:te,targetScrollTop:Ge}),Ue=y!=null?y:un,Ae=Ue.scrollRef,N=Ue.contentRef,yn=Ue.scrollToBottom,Pn=Ue.stopScroll,bn=Ue.isAtBottom,Ln=Ue.escapedFromLock,vn=Ue.state,jn=(0,b.useMemo)(function(){return{scrollToBottom:yn,stopScroll:Pn,scrollRef:Ae,isAtBottom:bn,escapedFromLock:Ln,contentRef:N,state:vn,get targetScrollTop(){return Me.current},set targetScrollTop(Qe){Me.current=Qe}}},[yn,bn,N,Ae,Pn,Ln,vn]);return(0,b.useImperativeHandle)(Q,function(){return jn},[jn]),je(function(){Ae.current&&getComputedStyle(Ae.current).overflow==="visible"&&(Ae.current.style.overflow="auto")},[]),(0,m.jsx)(_.Provider,{value:jn,children:(0,m.jsx)("div",h()(h()({},le),{},{children:typeof S=="function"?S(jn):S}))})}(function(r){function y(S){var B=S.children,te=S.scrollClassName,re=ee()(S,Tn),z=nn();return(0,m.jsx)("div",{ref:z.scrollRef,style:{height:"100%",width:"100%",scrollbarGutter:"stable both-edges"},className:te,children:(0,m.jsx)("div",h()(h()({},re),{},{ref:z.contentRef,children:typeof B=="function"?B(z):B}))})}r.Content=y})(Ie||(Ie={}));function nn(){var r=(0,b.useContext)(_);if(!r)throw new Error("use-stick-to-bottom component context must be used within a StickToBottom component");return r}var an=e(64057),tn=e(25109),sn=function(y,S){var B=(0,C.wv)(),te=B.getPrefixCls,re=nn(),z=re.isAtBottom,fe=re.scrollToBottom;b.useImperativeHandle(S,function(){return{scrollToBottom:function(Q){function le(Me){return Q.apply(this,arguments)}return le.toString=function(){return Q.toString()},le}(function(Q){Q=Q||{animation:"instant"},fe(Q)})}});var ve=te("bubble-list-scroll-to-bottom");return(0,m.jsx)("div",{className:x()(ve,"".concat(ve,"-").concat(z?"hide":"show")),children:(0,m.jsx)(an.Z,{icon:(0,m.jsx)(tn.Z,{}),shape:"circle",onClick:function(){return fe({animation:"instant"})}})})},fn=b.forwardRef(sn),Ve,gn=(0,L.vJ)(Ve||(Ve=E()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorPrimaryBorder},function(r){return r.theme.colorPrimaryBg},function(r){return r.theme.colorPrimary}),a=e(42532),Ce=e(45908),pe=e(78234),Fe=e(19632),Te=e.n(Fe),rn=e(64599),ze=e.n(rn),pn=e(73935),ln=function(y,S){var B=(0,b.useState)(1),te=W()(B,2),re=te[0],z=te[1],fe=(0,b.useMemo)(function(){var ve=[],Q=[],le=ze()(y),Me;try{for(le.s();!(Me=le.n()).done;){var Ge=Me.value;Ge.history?ve.push(Ge):Q.push(Ge)}}catch(He){le.e(He)}finally{le.f()}return[].concat(Te()(ve.slice(-re*10)),Q)},[y,re]);return S!=null&&S.enable?{items:fe,noMore:fe.length===y.length,loadMore:function(Q){return new Promise(function(le){setTimeout(function(){var Me,Ge=Q==null?void 0:Q.current,He=(Me=Ge==null?void 0:Ge.scrollHeight)!==null&&Me!==void 0?Me:0;if((0,pn.flushSync)(function(){z(re+1)}),Ge){var Ke=Ge.scrollHeight;Ge.scrollTop+=Ke-He}le()},1e3)})}}:{items:y,noMore:!0,loadMore:function(Q){return Promise.resolve()}}},cn=e(57381),c=["key"];function H(r){var y=r.items,S=r.paginationItems,B=r.noMore,te=r.loadMore,re=r.prefixCls,z=r.listClassName,fe=r.children,ve=nn(),Q=ve.scrollRef,le=(0,b.useCallback)(function(){return te(Q)},[te,Q]);return(0,m.jsxs)(Ie.Content,{className:x()("".concat(re),z),children:[B?null:(0,m.jsx)(de,{handleLoadMore:le}),fe||S.map(function(Me,Ge){var He=Me.key,Ke=ee()(Me,c),un=Ge===y.length-1;return(0,b.createElement)(u,h()(h()({},Ke),{},{isLast:un,key:Ke.id||He}))})]})}function de(r){var y=r.handleLoadMore,S=(0,b.useRef)(null),B=(0,a.Z)(S),te=W()(B,1),re=te[0],z=(0,b.useState)(!1),fe=W()(z,2),ve=fe[0],Q=fe[1],le=(0,Ce.Z)(re),Me=(0,C.wv)(),Ge=Me.getPrefixCls,He=Ge("bubble-list");return(0,b.useEffect)(function(){re&&le===void 0||ve||re&&(Q(!0),y().finally(function(){Q(!1)}))},[le,re,ve,y]),(0,m.jsx)("div",{ref:S,className:"".concat(He,"-load-more"),children:(0,m.jsx)(cn.Z,{spinning:!0})})}var j=function(y,S){var B,te,re=y.items,z=re===void 0?[]:re,fe=y.smooth,ve=fe===void 0?!0:fe,Q=(0,b.useState)(!1),le=W()(Q,2),Me=le[0],Ge=le[1],He=b.useRef(),Ke=(0,C.wv)(),un=Ke.getPrefixCls,Ue=un("bubble-list");b.useImperativeHandle(S,function(){return{scrollToBottom:function(){He.current.scrollToBottom()}}}),(0,pe.Z)(function(){Ge(!0)});var Ae=Me&&ve?"smooth":"instant",N=ln(z,{enable:y.pagination}),yn=N.items,Pn=N.noMore,bn=N.loadMore;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(gn,{}),(0,m.jsxs)(Ie,{enabled:!!ve||!Me,id:y.id,className:x()("".concat(Ue,"-wrapper"),(B=y.classNames)===null||B===void 0?void 0:B.wrapper),resize:Ae,initial:"instant",style:y.style,children:[(0,m.jsx)(H,{items:z,paginationItems:yn,noMore:Pn,loadMore:bn,prefixCls:Ue,listClassName:(te=y.classNames)===null||te===void 0?void 0:te.list,children:y.children}),(0,m.jsx)(fn,{ref:He})]})]})},w=b.forwardRef(j),$=w,ne=e(67369),he=e(10146);u.List=$,u.Spin=n,u.Footer=ne.ZP,u.Interrupted=he.Z;var ie=u},76289:function(on,J,e){"use strict";e.d(J,{TQ:function(){return m},vi:function(){return A}});var q=e(97857),h=e.n(q),D=e(13769),x=e.n(D),b=e(5574),M=e.n(b),E=e(67294),L=e(79785),k=e(59214),g=e(85893),C=["children"];function A(n){var v=(0,L.Z)([]),I=M()(v,3),i=I[0],t=I[1],O=I[2],l=(0,L.Z)("0"),T=M()(l,3),se=T[0],ae=T[1],u=T[2],ge=(0,L.Z)(0),W=M()(ge,3),X=W[0],ee=W[1],ue=W[2],De=(0,L.Z)([]),p=M()(De,3),Be=p[0],K=p[1],xe=p[2],oe=(0,L.Z)(!1),_e=M()(oe,3),Y=_e[0],Oe=_e[1],ke=_e[2],Je=(0,L.Z)(!1),Xe=M()(Je,3),we=Xe[0],mn=Xe[1],qe=Xe[2],Cn=(0,L.Z)(!0),en=M()(Cn,3),Ze=en[0],Tn=en[1],_=en[2],je=n.children,Ie=x()(n,C),nn=h()({sessionList:i,setSessionList:t,getSessionList:O,currentSessionKey:se,setCurrentSessionKey:ae,getCurrentSessionKey:u,messages:Be,setMessages:K,getMessages:xe,loading:Y,setLoading:Oe,getLoading:ke,disabled:we,setDisabled:mn,getDisabled:qe,sessionListShow:Ze,setSessionListShow:Tn,getSessionListShow:_,currentRegenerateIndex:X,setCurrentRegenerateIndex:ee,getCurrentRegenerateIndex:ue},Ie);return(0,g.jsx)(P.Provider,{value:nn,children:je})}var P=(0,k.createContext)(void 0);function m(n){try{var v=(0,k.useContextSelector)(P,n);return v}catch(I){return{}}}},37254:function(on,J,e){"use strict";e.d(J,{G:function(){return h}});var q=e(76289);function h(){var D=(0,q.TQ)(function(g){return{loading:g.loading,getLoading:g.getLoading,disabled:g.disabled,getDisabled:g.getDisabled,setLoading:g.setLoading,setDisabled:g.setDisabled}}),x=D.loading,b=D.disabled,M=D.setLoading,E=D.setDisabled,L=D.getLoading,k=D.getDisabled;return{loading:x,disabled:b,setLoading:M,setDisabled:E,getLoading:L,getDisabled:k}}},4421:function(on,J,e){"use strict";e.d(J,{y:function(){return E}});var q=e(19632),h=e.n(q),D=e(97857),x=e.n(D),b=e(67294),M=e(76289);function E(){var L=(0,M.TQ)(function(v){return{messages:v.messages,setMessages:v.setMessages,getMessages:v.getMessages}}),k=L.messages,g=L.setMessages,C=L.getMessages,A=b.useCallback(function(){var v,I=((v=arguments.length<=0?void 0:arguments[0])===null||v===void 0?void 0:v.id)||(arguments.length<=0?void 0:arguments[0]),i=(arguments.length<=1?void 0:arguments[1])||(arguments.length<=0?void 0:arguments[0]);g==null||g(function(t){var O=t.findIndex(function(T){return T.id===I});if(O>-1){var l=x()(x()({},t[O]),i);return[].concat(h()(t.slice(0,O)),[l],h()(t.slice(O+1)))}else return[].concat(h()(t),[i])})},[]),P=b.useCallback(function(v){g(function(I){return I.filter(function(i){return i.id!==v.id})})},[]),m=b.useCallback(function(){g([])},[]),n=b.useCallback(function(v){return C().find(function(I){return I.id===v})},[]);return{messages:k,getMessage:n,setMessages:g,getMessages:C,updateMessage:A,removeMessage:P,removeAllMessages:m}}},61316:function(on,J,e){"use strict";e.d(J,{x:function(){return k}});var q=e(97857),h=e.n(q),D=e(19632),x=e.n(D),b=e(67294),M=e(76289),E=e(88773),L=e(73935);function k(){var g=(0,M.TQ)(function(X){return{getCurrentSessionKey:X.getCurrentSessionKey,currentRegenerateIndex:X.currentRegenerateIndex,setCurrentRegenerateIndex:X.setCurrentRegenerateIndex,getCurrentRegenerateIndex:X.getCurrentRegenerateIndex,sessionListShow:X.sessionListShow,setSessionListShow:X.setSessionListShow,sessionList:X.sessionList,setSessionList:X.setSessionList,currentSessionKey:X.currentSessionKey,setCurrentSessionKey:X.setCurrentSessionKey,getSessionList:X.getSessionList}}),C=g.getCurrentSessionKey,A=g.sessionList,P=g.setSessionList,m=g.currentSessionKey,n=g.setCurrentSessionKey,v=g.sessionListShow,I=g.setSessionListShow,i=g.currentRegenerateIndex,t=g.setCurrentRegenerateIndex,O=g.getCurrentRegenerateIndex,l=g.getSessionList,T=b.useCallback(function(){var X=(0,E.Z)(),ee={label:Date.now().toString(),key:X,messages:[[]]};return L.flushSync(function(){P(function(ue){var De=[].concat(x()(ue),[ee]);return De}),n(X)}),X},[]),se=b.useCallback(function(X){P(function(ee){var ue=ee.filter(function(De){return De.key!==X});return ue})},[]),ae=b.useCallback(function(X){var ee=C(),ue=O();P(function(De){return De.map(function(p){return p.key===ee?(p.messages[ue]=X,h()({},p)):p})})},[]),u=b.useCallback(function(X,ee){var ue;return(ue=l().find(function(De){return De.key===X}))===null||ue===void 0?void 0:ue.messages[ee]},[]),ge=b.useCallback(function(){return{sessionList:l(),currentSessionKey:C(),currentRegenerateIndex:O()}},[]),W=b.useCallback(function(X){var ee=X.sessionList,ue=X.currentSessionKey,De=X.currentRegenerateIndex;P(ee),n(ue),t(De)},[]);return{currentRegenerateIndex:i,setCurrentRegenerateIndex:t,getCurrentRegenerateIndex:O,sessionList:A,setSessionList:P,getSessionList:l,currentSessionKey:m,setCurrentSessionKey:n,sessionListShow:v,setSessionListShow:I,createSession:T,deleteSession:se,updateSessionMessages:ae,getMessagesBySession:u,getSession:ge,updateSession:W}}},29041:function(on,J,e){"use strict";e.d(J,{ZP:function(){return de}});var q=e(97857),h=e.n(q),D=e(13769),x=e.n(D),b=e(5574),M=e.n(b),E=e(67294),L=e(93967),k=e.n(L),g=e(56044),C=e(85265),A=e(17909),P=e(76289),m=e(68400),n=e.n(m),v=e(9053),I,i=(0,v.vJ)(I||(I=n()([`

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
`])),function(j){return j.theme.prefixCls},function(j){return j.theme.fontFamily},function(j){return j.theme.colorBgBase},function(j){return j.theme.colorBgBase},function(j){return j.theme.colorBgBase},function(j){return j.theme.colorFillTertiary}),t=e(85893);function O(j){var w=(0,P.TQ)(function(S){return{sessionListShow:S.sessionListShow,setSessionListShow:S.setSessionListShow}}),$=w.sessionListShow,ne=w.setSessionListShow,he=(0,g.wv)(),ie=he.getPrefixCls,r=ie("chat-anywhere-layout"),y=T();return(0,E.useEffect)(function(){ne(!y)},[y]),j.left?y?(0,t.jsx)(C.Z,{width:"80vw",styles:{body:{padding:0}},open:$,onClose:function(){ne(!1)},title:null,closable:!1,placement:"left",children:(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:j.left})}):(0,t.jsx)("div",{className:k()("".concat(r,"-left"),$?"":"".concat(r,"-left-hide")),children:j.left}):null}function l(j){var w=(0,g.wv)(),$=w.getPrefixCls,ne=$("chat-anywhere-layout"),he=(0,P.TQ)(function(ie){return ie.uiConfig});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{}),(0,t.jsx)("div",{className:ne,children:(0,t.jsxs)("div",{className:"".concat(ne,"-main"),children:[(0,t.jsx)(O,h()({},j)),(0,t.jsxs)("div",{className:"".concat(ne,"-right"),style:{background:he==null?void 0:he.background},children:[j.top,j.right]})]})})]})}var T=function(){var w=(0,A.Z)(),$=(0,P.TQ)(function(ne){return ne.uiConfig});return!w.md||($==null?void 0:$.narrowScreen)},se=e(9368),ae=e(64057),u=e(21403),ge=e(61316),W=e(4421),X,ee=(0,v.vJ)(X||(X=n()([`
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

`])),function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls}),ue=e(50287),De=e(67392),p=e(13660),Be=e(12624);function K(){var j=(0,g.wv)(),w=j.getPrefixCls,$=w("chat-anywhere-session-list"),ne=(0,P.TQ)(function(he){return he.sessionListShow});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ee,{}),(0,t.jsxs)("div",{className:k()("".concat($),ne?"":"".concat($,"-hide")),children:[(0,t.jsx)(oe,{}),(0,t.jsx)(xe,{})]})]})}function xe(){var j=(0,g.wv)(),w=j.getPrefixCls,$=w("chat-anywhere-session-list"),ne=(0,ge.x)(),he=ne.currentSessionKey,ie=ne.setCurrentSessionKey,r=ne.currentRegenerateIndex,y=ne.sessionList,S=ne.getMessagesBySession,B=ne.setSessionListShow,te=(0,W.y)(),re=te.setMessages,z=(0,P.TQ)(function(Q){return Q.getLoading}),fe=(0,P.TQ)(function(Q){return Q.onSessionKeyChange}),ve=T();return(0,E.useEffect)(function(){var Q=S(he,r);re(Q)},[he,r]),(0,t.jsx)("div",{className:"".concat($,"-session"),children:(0,t.jsx)(se.Z,{menu:[{key:"delete",icon:(0,t.jsx)(ue.Z,{}),danger:!0,onClick:function(le){}}],activeKey:he,items:y,onActiveChange:function(le){z()||(ve&&B(!1),requestIdleCallback(function(){ie(le),fe(le)}))}})})}function oe(){var j=(0,g.wv)(),w=j.getPrefixCls,$=w("chat-anywhere-session-list"),ne=(0,ge.x)(),he=ne.currentSessionKey,ie=ne.setCurrentSessionKey,r=ne.deleteSession,y=ne.createSession,S=ne.sessionList,B=ne.sessionListShow,te=ne.setSessionListShow,re=(0,P.TQ)(function(fe){return fe.uiConfig}),z=T();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"".concat($,"-logo"),children:[re==null?void 0:re.logo,(0,t.jsx)(ae.Z,{bordered:!1,onClick:function(){return te(!B)},icon:B?(0,t.jsx)(De.Z,{}):(0,t.jsx)(p.Z,{})})]}),(0,t.jsx)("div",{className:"".concat($,"-adder"),children:(0,t.jsx)(u.Z,{type:"primary",block:!0,icon:(0,t.jsx)(Be.Z,{}),onClick:function(){z&&te(!1),y()},children:"New Session"})})]})}var _e=e(9783),Y=e.n(_e),Oe=e(52471),ke=e(19632),Je=e.n(ke),Xe=e(52677),we=e.n(Xe),mn=e(15009),qe=e.n(mn),Cn=e(99289),en=e.n(Cn),Ze=e(41154),Tn=e(66672),_=e(36417),je=e(37254),Ie,nn=(0,v.vJ)(Ie||(Ie=n()([`
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
`])),function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls}),an=e(86578),tn=e(7654),sn=e(92053),fn=e(86250),Ve=["trigger"];function gn(j){var w=j.uploadPropsList,$=(0,g.wv)(),ne=$.getPrefixCls,he=ne("chat-anywhere-sender"),ie=(0,E.useState)(!1),r=M()(ie,2),y=r[0],S=r[1],B=(0,E.useRef)([]),te=(0,E.useMemo)(function(){return w.map(function(z,fe){return(0,t.jsx)("div",{onClick:function(){var Q;(Q=B.current[fe])===null||Q===void 0||Q.click(),S(!1)},children:z.trigger},fe)})},[w]),re=(0,E.useMemo)(function(){return w.map(function(z,fe){var ve=z.trigger,Q=x()(z,Ve);return(0,t.jsx)(Ze.Z,h()(h()({},Q),{},{children:(0,t.jsx)("div",{ref:function(Me){return B.current[fe]=Me}})}),fe)})},[w]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tn.Z,{placement:"bottomLeft",open:y,onOpenChange:S,content:(0,t.jsx)(fn.Z,{vertical:!0,children:te}),trigger:"click",styles:{body:{padding:4}},children:(0,t.jsx)(ae.Z,{icon:(0,t.jsx)(sn.Z,{}),bordered:!1})}),(0,t.jsx)("div",{className:"".concat(he,"-upload-hidden-nodes"),children:re})]})}var a=(0,E.forwardRef)(function(j,w){var $=E.useState(""),ne=M()($,2),he=ne[0],ie=ne[1],r=(0,je.G)(),y=(0,P.TQ)(function(Se){return Se.onUpload.map(function(Re){return h()(h()({},Re),{},{disabled:Re.disabled||r.disabled})})}),S=new Array((y==null?void 0:y.length)||0).fill([]),B=(0,E.useState)(!1),te=M()(B,2),re=te[0],z=te[1],fe=E.useState(S),ve=M()(fe,2),Q=ve[0],le=ve[1],Me=(0,E.useRef)(S);(0,E.useEffect)(function(){le(S)},[S.length]),(0,E.useEffect)(function(){Me.current=Q},[Q]);var Ge=(0,P.TQ)(function(Se){return Se.uiConfig}),He=(0,g.wv)(),Ke=He.getPrefixCls,un=Ke("chat-anywhere-sender"),Ue=(0,P.TQ)(function(Se){return Se.onStop}),Ae=(0,P.TQ)(function(Se){var Re={beforeUI:void 0,afterUI:void 0,morePrefixActions:void 0,maxLength:void 0,zoomable:!0,beforeSubmit:function(){return Promise.resolve(!0)},header:[],enableFocusExpand:!1,variant:"default",hide:!1};return h()(h()({},Re),Se.onInput)});if(E.useImperativeHandle(w,function(){return{setInputContent:function(Re,hn){ie(Re),le(hn||[[]])},getAttachedFiles:function(){return Me.current}}},[]),(0,E.useEffect)(function(){r.setDisabled(Ae.disabled)},[Ae.disabled]),Ae.hide)return null;var N=function(){var Se=en()(qe()().mark(function Re(hn,xn){return qe()().wrap(function(An){for(;;)switch(An.prev=An.next){case 0:le(function(Rn){return Rn.map(function(Bn,wn){return wn===hn?xn:Bn})});case 1:case"end":return An.stop()}},Re)}));return function(hn,xn){return Se.apply(this,arguments)}}(),yn=(0,E.useMemo)(function(){if(Ae.variant==="aigc"||!(y!=null&&y.length))return[];var Se=y.map(function(Re,hn){var xn;return Re.trigger?xn=Re.trigger:(Re.title||Re.description)&&y.length>1?xn=(0,t.jsxs)(u.Z,{type:"text",icon:Re.icon,children:[Re.title&&(0,t.jsx)("span",{children:Re.title}),Re.description&&(0,t.jsx)("span",{style:{fontSize:"0.8em",opacity:.8},children:Re.description})]}):xn=(0,t.jsx)(ae.Z,{icon:Re.icon,bordered:!1}),h()(h()({},Re),{},{fileList:Q[hn],key:hn,onChange:function(An){Re.beforeUpload&&An.file.status&&N(hn,An.fileList),Re.beforeUpload||N(hn,An.fileList)},showUploadList:!1,trigger:xn})});return Se.length===1?(0,t.jsx)(Ze.Z,h()(h()({},Se[0]),{},{children:Se[0].trigger})):(0,t.jsx)(gn,{uploadPropsList:Se})},[Ae.variant,y,Q]),Pn=(0,t.jsx)(an.Z.SenderHeader,{onUpload:y,attachedFiles:Q,onFileChange:N}),bn=(0,t.jsx)(Tn.Z.Header,{closable:!1,open:Q==null?void 0:Q.some(function(Se){return Se.length}),children:Q.map(function(Se,Re){return Se.length?(0,t.jsx)(_.Z,{items:Se,onChange:function(xn){return N(Re,xn.fileList)}},Re):null})}),Ln=Ae.variant==="aigc"?Pn:bn,vn=Q.map(function(Se){return Se.filter(function(Re){return Re.status==="done"})}),jn=Q.some(function(Se){return Se.some(function(Re){return Re.status==="uploading"})}),Qe=function(Re){if(!(y!=null&&y.length))return;var hn=Re.type||"",xn=Re.name||"",_n=function(Qn){return Qn?Qn.split(",").some(function(Nn){var On=Nn.trim();if(!On)return!1;if(On.startsWith("."))return xn.toLowerCase().endsWith(On.toLowerCase());if(On.includes("*")){if(On==="*/*")return!0;var Un=On.split("/"),Fn=M()(Un,1),Dn=Fn[0],En=hn.split("/"),In=M()(En,1),Hn=In[0];return Dn===Hn}return hn===On}):!0},An=y.findIndex(function(Mn){return _n(Mn.accept)});if(An===-1)return;var Rn=y[An],Bn=Q[An]||[];if(Rn.maxCount&&Bn.length>=Rn.maxCount||!Rn.multiple&&Bn.length>0)return;if(Rn.beforeUpload){var wn=Rn.beforeUpload(Re,[Re]);if(wn===!1||wn===Ze.Z.LIST_IGNORE)return;if(wn instanceof Promise){wn.then(function(Mn){if(!(Mn===!1||Mn===Ze.Z.LIST_IGNORE)){var Qn=Mn&&we()(Mn)==="object"?Mn:Re;Kn(Qn)}}).catch(function(Mn){console.error("beforeUpload promise rejected:",Mn)});return}if(wn&&we()(wn)==="object"){Kn(wn);return}}Kn(Re);function Kn(Mn){var Qn=function(){var En=xn.match(/\.([^.]+)$/);if(En)return En[1].toLowerCase();var In=hn.match(/\/([^/+]+)/);return In?In[1].toLowerCase():"bin"},Nn=Date.now(),On={uid:"paste_".concat(Nn,"_").concat(Math.random().toString(36).slice(2,11)),name:xn||"pasted-".concat(Nn,".").concat(Qn()),size:Mn.size,type:hn,status:"uploading",percent:0,originFileObj:Mn},Un=function(En){le(function(In){var Hn=Je()(In);return Hn[An]=(Hn[An]||[]).map(function(Jn){return Jn.uid===On.uid?h()(h()({},Jn),En):Jn}),Hn})};if(le(function(Dn){var En=Je()(Dn),In=En[An]||[];if(!Rn.multiple)En[An]=[On];else{if(Rn.maxCount&&In.length>=Rn.maxCount)return Dn;En[An]=[].concat(Je()(In),[On])}return En}),hn&&hn.startsWith("image/")){var Fn=new FileReader;Fn.onload=function(Dn){var En,In=(En=Dn.target)===null||En===void 0?void 0:En.result;typeof In=="string"&&Un({thumbUrl:In,url:In})},Fn.readAsDataURL(Mn)}Rn.customRequest({file:Mn,onSuccess:function(En){Un({status:"done",response:En,percent:100})},onError:function(En){Un({status:"error",error:En})},onProgress:function(En){Un({percent:En.percent})}},{defaultRequest:function(){}})}},$e=(0,E.useMemo)(function(){var Se;return(Se=y==null?void 0:y.some(function(Re,hn){if(Re.required){var xn=Q[hn]||[];return xn.length===0}return!1}))!==null&&Se!==void 0?Se:!1},[y,Q]),dn=$e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nn,{}),(0,t.jsxs)("div",{className:k()("".concat(un,"-wrapper"),Y()(Y()({},"".concat(un,"-wrapper-focus"),re&&Ae.enableFocusExpand),"".concat(un,"-wrapper-blur"),!re&&Ae.enableFocusExpand)),children:[Ge.quickInput&&(0,t.jsx)("div",{className:k()("".concat(un,"-wrapper-header")),children:Ge.quickInput}),Ae.beforeUI,(0,t.jsx)(Tn.Z,{placeholder:Ae.placeholder,enableFocusExpand:Ae.enableFocusExpand,value:he,onChange:ie,maxLength:Ae.maxLength,disabled:jn||r.disabled,sendDisabled:dn,scalable:Ae==null?void 0:Ae.zoomable,header:Ln,prefix:(0,t.jsxs)(t.Fragment,{children:[yn,Ae==null?void 0:Ae.morePrefixActions]}),onSubmit:en()(qe()().mark(function Se(){var Re;return qe()().wrap(function(xn){for(;;)switch(xn.prev=xn.next){case 0:return xn.next=2,(Ae.beforeSubmit||function(){return Promise.resolve(!0)})();case 2:if(Re=xn.sent,Re){xn.next=5;break}return xn.abrupt("return");case 5:Ae.onSubmit({query:he,fileList:vn}),ie(""),le(S);case 8:case"end":return xn.stop()}},Se)})),onCancel:function(){Ue==null||Ue(),r.setLoading(!1)},onFocus:function(){return z(!0)},onBlur:function(){return z(!1)},onPasteFile:Qe,loading:r.loading}),Ae.afterUI]})]})}),Ce=e(69637),pe=e(10325),Fe,Te=(0,v.vJ)(Fe||(Fe=n()([`
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


`])),function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls}),rn=(0,E.forwardRef)(function(j,w){var $=(0,P.TQ)(function(ve){return ve.messages}),ne=(0,g.wv)(),he=ne.getPrefixCls,ie=he("chat-anywhere"),r=(0,P.TQ)(function(ve){return ve.uiConfig}),y=(0,E.useState)(!1),S=M()(y,2),B=S[0],te=S[1],re=(0,je.G)();(0,Ce.Z)(function(){te(!0)},300);var z=k()("".concat(ie,"-chat"),Y()({},"".concat(ie,"-chat-hide"),!B)),fe=!($!=null&&$.length);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Te,{}),(0,t.jsxs)("div",{className:z,children:[(0,t.jsx)(Oe.Z.List,{smooth:!!re.loading,style:{height:0,flex:fe?0:1},ref:w.chatRef,items:$}),fe?(0,t.jsx)("div",{className:"".concat(z,"-welcome"),children:r==null?void 0:r.welcome}):null,(0,t.jsx)("div",{className:"".concat(z,"-sender"),style:r!=null&&r.disclaimer?{marginBottom:16}:{},children:(0,t.jsx)(a,{ref:w.inputRef})}),(r==null?void 0:r.disclaimer)&&(0,t.jsx)(pe.Z,{style:{position:"absolute",bottom:0,width:"100%"},desc:r==null?void 0:r.disclaimer})]})]})}),ze,pn=(0,v.vJ)(ze||(ze=n()([`
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

`])),function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls},function(j){return j.theme.prefixCls});function ln(){var j=(0,g.wv)(),w=j.getPrefixCls,$=w("chat-anywhere-header"),ne=(0,P.TQ)(function(S){return S.uiConfig}),he=(0,ge.x)(),ie=he.sessionListShow,r=he.setSessionListShow,y=T();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(pn,{}),(0,t.jsxs)("div",{className:$,children:[y&&(0,t.jsx)(ae.Z,{style:{marginLeft:12},bordered:!1,onClick:function(){return r(!ie)},icon:ie?(0,t.jsx)(De.Z,{}):(0,t.jsx)(p.Z,{})}),ne.header]})]})}var cn=e(83962),c=E.forwardRef(function(w,$){var ne=(0,W.y)(),he=(0,je.G)(),ie=(0,ge.x)();return E.useImperativeHandle($,function(){return h()(h()(h()({},ne),he),ie)}),null}),H=["cardConfig"],de=(0,E.forwardRef)(function(j,w){var $,ne=(0,E.useState)(0),he=M()(ne,2),ie=he[0],r=he[1],y=j.cardConfig,S=x()(j,H),B=(0,E.useRef)(null),te=(0,E.useRef)(null),re=(0,E.useRef)(null);return E.useImperativeHandle(w,function(){return h()(h()(h()(h()({},B.current),te.current),re.current),{},{reload:function(){r(function(fe){return fe+1})}})}),(0,E.createElement)(P.vi,h()(h()({},S),{},{key:ie}),(0,t.jsxs)(cn.xy,{cardConfig:y,children:[(0,t.jsx)(l,{top:($=S.uiConfig)!==null&&$!==void 0&&$.header?(0,t.jsx)(ln,{}):null,left:S.onSessionKeyChange?(0,t.jsx)(K,{}):null,right:(0,t.jsx)(rn,{ref:{chatRef:B,inputRef:te}})}),(0,t.jsx)(c,{ref:re})]}))})},9368:function(on,J,e){"use strict";e.d(J,{Z:function(){return Tn}});var q=e(97857),h=e.n(q),D=e(19632),x=e.n(D),b=e(9783),M=e.n(b),E=e(5574),L=e.n(E),k=e(13769),g=e.n(k),C=e(93967),A=e.n(C),P=e(67294),m=e(21317),n=e(85893),v=P.createContext(null),I=function(je){var Ie=je.children,nn=P.useContext(v),an=nn.prefixCls;return(0,n.jsx)("div",{className:A()("".concat(an,"-group-title")),children:Ie&&(0,n.jsx)(m.default.Text,{children:Ie})})},i=I,t=e(30339),O=e(54604),l=e(45617),T=e(7654),se=e(64057),ae=e(21403),u=e(42532),ge=["prefixCls","info","className","direction","onClick","active","selectable","selected","onSelect","menu"],W=["key"],X={};function ee(_){var je=(0,P.useState)(X[_]),Ie=L()(je,2),nn=Ie[0],an=Ie[1];return[nn,function(tn){for(var sn in X)X[sn]=!1;X[_]=tn,an(tn)}]}var ue=P.memo(function(_){var je,Ie=ee(_.info.key),nn=L()(Ie,2),an=nn[0],tn=nn[1],sn=(0,P.useState)(!1),fn=L()(sn,2),Ve=fn[0],gn=fn[1],a=_.prefixCls,Ce=_.info,pe=_.className,Fe=_.direction,Te=_.onClick,rn=_.active,ze=_.selectable,pn=_.selected,ln=_.onSelect,cn=_.menu,c=g()(_,ge),H=(0,t.Z)(c,{aria:!0,data:!0,attr:!0}),de=(0,P.useRef)(null),j=(0,u.Z)(de),w=L()(j,1),$=w[0],ne=Ce.disabled,he=A()(pe,"".concat(a,"-item"),M()({},"".concat(a,"-item-active"),rn&&!ne),M()({},"".concat(a,"-item-disabled"),ne),M()({},"".concat(a,"-item-timeline"),Ce.timeline||ze)),ie=function(){if(ze)return ln==null?void 0:ln(Ce.key,!pn);if(!ne&&Te)return Te(Ce)};return(0,n.jsxs)("li",h()(h()({ref:de},H),{},{className:he,onClick:ie,children:[$&&(0,n.jsxs)("div",{className:"".concat(a,"-content"),children:[Ce.icon&&(0,n.jsx)("div",{className:"".concat(a,"-icon"),children:Ce.icon}),(Ce.timeline||ze)&&(0,n.jsx)("div",{className:"".concat(a,"-timeline"),children:ze?(0,n.jsx)("div",{className:"".concat(a,"-timeline-checkbox"),onClick:function(y){return y.stopPropagation()},children:(0,n.jsx)(l.Z,{checked:pn,onChange:function(){return ln==null?void 0:ln(Ce.key,!pn)}})}):(0,n.jsx)("div",{className:"".concat(a,"-timeline-dot")})}),(0,n.jsx)(De,{editable:an,setEditable:tn,prefixCls:a,info:Ce,onEdit:cn==null||(je=cn.find(function(r){return r.key==="edit"}))===null||je===void 0?void 0:je.onEdit}),cn&&!ne&&!ze&&(0,n.jsx)(T.Z,{styles:{body:{padding:4}},trigger:["click"],open:Ve,onOpenChange:gn,content:(0,n.jsx)("div",{className:"".concat(a,"-menu-popover"),children:cn.map(function(r){var y=r.key,S=g()(r,W),B=h()(h()({},S),{},{onClick:function(re){if(y==="edit")tn(!0);else{var z;(z=S.onClick)===null||z===void 0||z.call(S,Ce)}gn(!1)}});return(0,n.jsx)(Be,h()(h()({},B),{},{info:Ce}),y)})}),placement:"bottom",children:(0,n.jsx)(se.Z,{bordered:!1,icon:(0,n.jsx)(O.Z,{}),disabled:ne,className:"".concat(a,"-menu-icon"),onClick:function(y){return y.stopPropagation()}})})]}),$&&Ce.desc&&(0,n.jsx)("div",{className:"".concat(a,"-desc"),style:Ce.timeline||ze?{marginLeft:16}:{},children:Ce.desc})]}))});function De(_){var je=_.editable,Ie=_.prefixCls,nn=_.info,an=_.setEditable,tn=_.onEdit,sn=(0,P.useState)(nn.label),fn=L()(sn,2),Ve=fn[0],gn=fn[1],a=(0,P.useState)(nn.label),Ce=L()(a,2),pe=Ce[0],Fe=Ce[1];return nn.label!==pe&&(Fe(nn.label),gn(nn.label)),je?(0,n.jsx)(p,{prefixCls:Ie,value:Ve,onBlur:function(rn){var ze;if(rn===Ve)return an(!1);(ze=tn(rn,nn))===null||ze===void 0||ze.then(function(){gn(rn)}).catch(function(){gn(Ve)}).finally(function(){an(!1)})},setEditable:an}):(0,n.jsx)("div",{className:"".concat(Ie,"-label"),children:Ve})}function p(_){var je=_.prefixCls,Ie=_.value,nn=_.onBlur,an=_.setEditable,tn=(0,P.useState)(Ie),sn=L()(tn,2),fn=sn[0],Ve=sn[1],gn=(0,P.useRef)();return(0,P.useEffect)(function(){gn.current.focus()},[]),(0,P.useEffect)(function(){Ve(Ie)},[Ie]),(0,n.jsx)("input",{ref:gn,className:"".concat(je,"-label-edit"),value:fn,onClick:function(Ce){return Ce.stopPropagation()},onChange:function(Ce){return Ve(Ce.target.value)},onBlur:function(){return nn(fn)}})}function Be(_){var je=_.label,Ie=_.icon,nn=_.danger,an=_.info,tn=_.disabled,sn=function(Ve){var gn;tn||(Ve.stopPropagation(),(gn=_.onClick)===null||gn===void 0||gn.call(_,an))};return Ie&&je?(0,n.jsx)(ae.Z,{disabled:tn,icon:Ie,danger:nn,type:"text",onClick:sn,children:je}):Ie?(0,n.jsx)(se.Z,{disabled:tn,icon:Ie,danger:nn,bordered:!1,onClick:sn}):je?(0,n.jsx)(ae.Z,{disabled:tn,danger:nn,type:"text",onClick:sn,children:je}):null}var K=ue,xe=e(60869),oe=e(56044),_e=e(52677),Y=e.n(_e),Oe="__ungrouped",ke=function(je){var Ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],nn=P.useMemo(function(){if(!je)return[!1,void 0,void 0];var Ve={sort:void 0,title:void 0};return Y()(je)==="object"&&(Ve=h()(h()({},Ve),je)),[!0,Ve.sort,Ve.title]},[je]),an=L()(nn,3),tn=an[0],sn=an[1],fn=an[2];return P.useMemo(function(){if(!tn){var Ve=[{name:Oe,data:Ie,title:void 0}];return[Ve,tn]}var gn=Ie.reduce(function(pe,Fe){var Te=Fe.group||Oe;return pe[Te]||(pe[Te]=[]),pe[Te].push(Fe),pe},{}),a=sn?Object.keys(gn).sort(sn):Object.keys(gn),Ce=a.map(function(pe){return{name:pe===Oe?void 0:pe,title:fn,data:gn[pe]}});return[Ce,tn]},[Ie,je])},Je=ke,Xe=e(68400),we=e.n(Xe),mn=e(9053),qe,Cn=(0,mn.vJ)(qe||(qe=we()([`
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
}`])),function(_){return _.theme.prefixCls},function(_){return _.theme.paddingXXS},function(_){return _.theme.prefixCls},function(_){return _.theme.paddingXL},function(_){return _.theme.prefixCls},function(_){return _.theme.colorTextSecondary},function(_){return _.theme.colorBgBase},function(_){return _.theme.colorBorder},function(_){return _.theme.colorTextSecondary},function(_){return _.theme.borderRadiusLG},function(_){return _.theme.colorBorder},function(_){return _.theme.colorFillTertiary},function(_){return _.theme.colorFillTertiary},function(_){return _.theme.prefixCls},function(_){return _.theme.prefixCls},function(_){return _.theme.colorText},function(_){return _.theme.prefixCls},function(_){return _.theme.colorTextDisabled},function(_){return _.theme.prefixCls},function(_){return _.theme.prefixCls},function(_){return _.theme.colorFillTertiary},function(_){return _.theme.colorText},function(_){return _.theme.colorText},function(_){return _.theme.fontFamily},function(_){return _.theme.fontSizeXL},function(_){return _.theme.controlHeightLG},function(_){return _.theme.controlHeightLG},function(_){return _.theme.paddingXS}),en=["prefixCls","rootClassName","items","activeKey","defaultActiveKey","onActiveChange","selectable","selectedKeys","onSelectChange","menu","styles","classNames","groupable","className","style"],Ze=function(je){var Ie=je.prefixCls,nn=je.rootClassName,an=je.items,tn=je.activeKey,sn=je.defaultActiveKey,fn=je.onActiveChange,Ve=je.selectable,gn=je.selectedKeys,a=je.onSelectChange,Ce=je.menu,pe=je.styles,Fe=pe===void 0?{}:pe,Te=je.classNames,rn=Te===void 0?{}:Te,ze=je.groupable,pn=je.className,ln=je.style,cn=g()(je,en),c=(0,t.Z)(cn,{attr:!0,aria:!0,data:!0}),H=(0,xe.Z)(sn,{value:tn}),de=L()(H,2),j=de[0],w=de[1],$=Je(ze,an),ne=L()($,2),he=ne[0],ie=ne[1],r=(0,oe.wv)(),y=r.direction,S=r.getPrefixCls,B=S("conversations"),te=A()(B,pn,nn,M()({},"".concat(B,"-rtl"),y==="rtl")),re=P.useRef(fn);re.current=fn;var z=P.useCallback(function(le){var Me;w(le.key),(Me=re.current)===null||Me===void 0||Me.call(re,le.key)},[w]),fe=P.useRef(gn);fe.current=gn;var ve=P.useRef(a);ve.current=a;var Q=P.useCallback(function(le,Me){if(ve.current){var Ge=fe.current||[],He=Me?[].concat(x()(Ge),[le]):Ge.filter(function(Ke){return Ke!==le});ve.current(He)}},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Cn,{}),(0,n.jsx)("ul",h()(h()({},c),{},{style:ln,className:te,children:he.map(function(le,Me){var Ge=le.data.map(function(Ke,un){var Ue=Ve!=null?Ve:Ke.selectable,Ae=Ue?gn?gn.includes(Ke.key):Ke.selected:!1,N=a?Q:Ke.onSelect;return(0,n.jsx)(K,{info:Ke,prefixCls:B,direction:y,className:A()(rn.item),style:Fe.item,menu:Ce,active:j===Ke.key,selectable:Ue,selected:Ae,onSelect:N,onClick:z},Ke.key||"key-".concat(un))});if(ie){var He;return(0,n.jsxs)("li",{children:[(0,n.jsx)(v.Provider,{value:{prefixCls:B},children:((He=le.title)===null||He===void 0?void 0:He.call(le,le.name,{components:{GroupTitle:i}}))||(0,n.jsx)(i,{children:le.name},le.name)}),(0,n.jsx)("ul",{className:"".concat(B,"-list"),children:Ge})]},le.name||"key-".concat(Me))}return Ge})}))]})},Tn=Ze},24963:function(on,J,e){"use strict";e.r(J),e.d(J,{Audios:function(){return Be},DeepThink:function(){return x},DeepThinking:function(){return x},Files:function(){return m},Footer:function(){return ge},FooterActions:function(){return u.p4},FooterCount:function(){return u.hw},Images:function(){return O},Interrupted:function(){return X},Text:function(){return ae},Videos:function(){return De}});var q=e(67294),h=e(14082),D=e(85893);function x(K){return(0,D.jsx)(h.Z,{defaultOpen:K.data.defaultOpen!==void 0?K.data.defaultOpen:!0,title:K.data.title,loading:K.data.loading,content:K.data.content,className:K.data.className,open:K.data.open,autoCloseOnFinish:K.data.autoCloseOnFinish,maxHeight:K.data.maxHeight})}var b=e(68400),M=e.n(b),E=e(23345),L=e(36417),k=e(9053),g=e(56044),C=e(6411),A,P=(0,k.vJ)(A||(A=M()([`
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
`])),function(K){return K.theme.prefixCls},function(K){return K.theme.prefixCls},function(K){return K.theme.borderRadius},function(K){return K.theme.colorWhite},function(K){return K.theme.motionDurationSlow},function(K){return K.theme.prefixCls},function(K){return K.theme.prefixCls});function m(K){var xe=(0,g.wv)(),oe=xe.getPrefixCls,_e=oe("bubble-files");return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(P,{}),(0,D.jsx)(E.Z,{className:_e,children:K.data.map(function(Y,Oe){var ke={name:Y.name||Y.filename,size:Y.size||Y.bytes,url:Y.url};return(0,D.jsxs)("div",{className:"".concat(_e,"-file"),children:[(0,D.jsx)(L.Z.FileCard,{item:ke}),ke.url&&(0,D.jsx)("div",{className:"".concat(_e,"-download"),onClick:function(){window.open(ke.url,"_blank")},children:(0,D.jsx)(C.Z,{})})]},Oe)})})]})}var n=e(16494),v=e(55839),I,i=(0,k.vJ)(I||(I=M()([`
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
`])),function(K){return K.theme.prefixCls},function(K){return K.theme.prefixCls},function(K){return K.theme.prefixCls},function(K){return K.theme.prefixCls});function t(K){var xe=(0,g.wv)(),oe=xe.getPrefixCls,_e=oe("bubble-image");return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(i,{}),(0,D.jsx)("div",{className:"".concat(_e),children:(0,D.jsx)(n.Z,{fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",src:K.url,width:56,height:56,preview:{transitionName:""}})})]})}function O(K){return(0,D.jsx)(v.ZP,{locale:{Image:{preview:""}},children:(0,D.jsx)(E.Z,{children:K.data.map(function(xe,oe){return(0,D.jsx)(t,{url:xe.url},oe)})})})}var l=e(97857),T=e.n(l),se=e(66109);function ae(K){var xe=K.data.msgStatus==="generating";return(0,D.jsx)(se.Z,T()(T()({cursor:xe},K.data),{},{typing:K.data.msgStatus==="generating"?K.data.typing:!1}))}var u=e(67369);function ge(K){return(0,D.jsx)(u.ZP,T()({},K.data))}var W=e(10146);function X(K){return(0,D.jsx)(W.Z,T()({},K.data))}var ee=e(51794),ue;function De(K){var xe=(0,g.wv)().getPrefixCls("bubble-video");return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(p,{}),(0,D.jsx)(E.Z,{children:K.data.map(function(oe,_e){return(0,D.jsx)(ee.Z,{className:xe,src:oe.src,poster:oe.poster,controls:!0},_e)})})]})}var p=(0,k.vJ)(ue||(ue=M()([`
.`,`-bubble-video {
  max-width: 256px;
  max-height: 144px;
  border-radius: 8px;
  border: 1px solid `,`;
  overflow: hidden;
}
`])),function(K){return K.theme.prefixCls},function(K){return K.theme.colorBorderSecondary});function Be(){return(0,D.jsx)("div",{children:"Audio"})}},55031:function(on,J,e){"use strict";e.d(J,{Z:function(){return se}});var q=e(56044),h=e(31382),D=e(55839),x=e(16494),b=e(33948),M=e(52253),E=e(56137),L=e(1948),k=e(61763),g=e(77900),C=e(40443),A=e(33119),P=e(4356),m=e(72816),n=e(77382),v=e(72167),I=e(74398),i=e(55094),t=e(61401),O=e(85893),l={Click:{name:"\u70B9\u51FB",icon:(0,O.jsx)(b.Z,{})},Swipe:{name:"\u6ED1\u52A8",icon:(0,O.jsx)(M.Z,{})},Type:{name:"\u8F93\u5165",icon:(0,O.jsx)(E.Z,{})},Back:{name:"\u8FD4\u56DE",icon:(0,O.jsx)(L.Z,{})},Home:{name:"\u4E3B\u9875",icon:(0,O.jsx)(k.Z,{})},Done:{name:"\u5B8C\u6210",icon:(0,O.jsx)(g.Z,{})},Wait:{name:"\u7B49\u5F85",icon:(0,O.jsx)(C.Z,{spin:!0})},click:{name:"\u70B9\u51FB",icon:(0,O.jsx)(b.Z,{})},"right click":{name:"\u53F3\u952E\u70B9\u51FB",icon:(0,O.jsx)(b.Z,{})},"open app":{name:"\u6253\u5F00\u5E94\u7528",icon:(0,O.jsx)(A.Z,{})},computer_double_click:{name:"\u53CC\u51FB",icon:(0,O.jsx)(P.Z,{})},hotkey:{name:"\u5FEB\u6377\u952E",icon:(0,O.jsx)(m.Z,{})},presskey:{name:"\u6309\u952E",icon:(0,O.jsx)(n.Z,{})},scroll:{name:"\u6EDA\u52A8",icon:(0,O.jsx)(M.Z,{})},drag:{name:"\u62D6\u62FD",icon:(0,O.jsx)(v.Z,{})},type_with_clear_enter_pos:{name:"\u8F93\u5165\u5E76\u6E05\u9664",icon:(0,O.jsx)(E.Z,{})},triple_click:{name:"\u4E09\u51FB",icon:(0,O.jsx)(I.Z,{})},drag_end:{name:"\u62D6\u62FD\u7ED3\u675F",icon:(0,O.jsx)(v.Z,{})},type:{name:"\u8F93\u5165",icon:(0,O.jsx)(E.Z,{})},hscroll:{name:"\u6C34\u5E73\u6EDA\u52A8",icon:(0,O.jsx)(i.Z,{})},done:{name:"\u5B8C\u6210",icon:(0,O.jsx)(g.Z,{})},wait:{name:"\u7B49\u5F85",icon:(0,O.jsx)(C.Z,{spin:!0})},call_user:{name:"\u547C\u53EB\u7528\u6237",icon:(0,O.jsx)(t.Z,{})}},T=l;function se(ae){var u,ge,W=(0,q.wv)(),X=W.getPrefixCls,ee=X("operate-card");return(0,O.jsxs)("div",{children:[(0,O.jsx)("div",{className:"".concat(ee,"-device-action-time"),children:ae.time}),(0,O.jsx)(h.Z,{header:{className:"".concat(ee,"-device-action"),icon:(0,O.jsx)("div",{className:"".concat(ee,"-device-action-icon"),children:(u=T[ae.action])===null||u===void 0?void 0:u.icon}),title:(0,O.jsxs)("div",{className:"".concat(ee,"-device-action-content"),children:[(0,O.jsxs)("div",{className:"".concat(ee,"-device-action-description"),children:[(0,O.jsx)("span",{children:ae.actionName||((ge=T[ae.action])===null||ge===void 0?void 0:ge.name)}),(0,O.jsx)("span",{children:ae.description})]}),(0,O.jsx)("div",{className:"".concat(ee,"-device-action-image"),children:(0,O.jsx)(D.ZP,{locale:{Image:{preview:""}},children:(0,O.jsx)(x.Z,{src:ae.image,alt:ae.description,width:"100%",height:"100%"})})})]})}})]})}},10325:function(on,J,e){"use strict";e.d(J,{Z:function(){return k}});var q=e(67294),h=e(68400),D=e.n(h),x=e(9053),b,M=(0,x.vJ)(b||(b=D()([`
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
`])),function(g){return g.theme.prefixCls},function(g){return g.theme.colorTextTertiary},function(g){return g.theme.prefixCls}),E=e(56044),L=e(85893);function k(g){var C=g.desc,A=C===void 0?"AI can also make mistakes, so please check carefully and use it with caution":C,P=(0,E.wv)(),m=P.getPrefixCls,n=m("disclaimer");return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(M,{}),(0,L.jsxs)("div",{className:n,style:g.style,children:[A,g.afterLink&&(0,L.jsx)("a",{className:"".concat(n,"-after-link"),href:g.afterLink.href,target:"_blank",children:g.afterLink.text})]})]})}},80115:function(on,J,e){"use strict";e.d(J,{Z:function(){return h}});var q=e(85893);function h(){return(0,q.jsx)("iframe",{srcDoc:`<html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>`})}},2534:function(on,J,e){"use strict";e.d(J,{Z:function(){return I}});var q=e(67294),h=e(68400),D=e.n(h),x=e(9053),b,M=(0,x.vJ)(b||(b=D()([`
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

`])),function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.colorText},function(i){return i.theme.colorSuccess},function(i){return i.theme.colorBgBase},function(i){return i.theme.prefixCls}),E=e(56044),L=e(55839),k=e(16494),g=e(89034),C=e(36374),A=e(85893);function P(){for(var i=arguments.length,t=new Array(i),O=0;O<i;O++)t[O]=arguments[O];return t.filter(Boolean).join(" ")}var m=function(t){var O=t.speed,l=O===void 0?1:O,T=t.backgroundColor,se=T===void 0?"#b6a9f8":T,ae=t.colors,u=ae===void 0?["#c979ee","#ef788c","#eb7fc6","#6d67c8"]:ae,ge=t.ringColors,W=ge===void 0?["white","blue","magenta","violet","lightyellow"]:ge,X=t.className,ee=X===void 0?"":X,ue=(0,q.useRef)(null);return(0,q.useEffect)(function(){if(CSS&&CSS.registerProperty)try{CSS.registerProperty({name:"--a",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--l",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--x",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--y",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--o",syntax:"<number>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--value",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--width-ratio",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--scale",syntax:"<number>",inherits:!0,initialValue:"0"})}catch(De){}},[]),(0,q.useEffect)(function(){var De=ue.current;if(De){var p=function(){var xe=De.getBoundingClientRect(),oe=Math.min(xe.width,xe.height);De.style.setProperty("--actual-size","".concat(oe,"px"))};p();var Be=new ResizeObserver(p);return Be.observe(De),function(){Be.disconnect()}}},[]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("style",{children:`
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
          background: `).concat(se,`;
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
          background: radial-gradient(50% 50% at center, `).concat(u[0]||"#c979ee",", color-mix(in srgb, ").concat(u[0]||"#c979ee",`, transparent 30%));
          --x: calc(var(--s) * 0.04);
          width: calc(var(--s) * 0.6);
          animation-timing-function: cubic-bezier(0.12, 0.32, 0.68, 0.24);
        }

        .fluid-background-container .c2 {
          background: radial-gradient(50% 50% at center, `).concat(u[1]||"#ef788c",", color-mix(in srgb, ").concat(u[1]||"#ef788c",`, white 40%));
          width: calc(var(--s) * 0.55);
        }

        .fluid-background-container .c3 {
          background: radial-gradient(50% 50% at center, `).concat(u[2]||"#eb7fc6",`, transparent);
          width: calc(var(--s) * 0.2);
          opacity: 0.6;
          --x: calc(var(--s) * -0.04);
        }

        .fluid-background-container .c4 {
          background: `).concat(u[3]||"#6d67c8",`;
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
            `).concat(W.join(", "),`
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
      `)}),(0,A.jsxs)("div",{ref:ue,className:P("fluid-background-container",ee),children:[(0,A.jsxs)("div",{className:"fluid-inner",children:[(0,A.jsx)("div",{className:"c c4",style:{"--i":0}}),(0,A.jsx)("div",{className:"c c1",style:{"--i":1}}),(0,A.jsx)("div",{className:"c c2",style:{"--i":2}}),(0,A.jsx)("div",{className:"c c3",style:{"--i":3}}),(0,A.jsx)("div",{className:"rings"})]}),(0,A.jsx)("div",{className:"glass"})]})]})},n=m,v=function(t){var O=(0,E.wv)(),l=O.getPrefixCls,T=l("image-generator"),se=t.block,ae=t.skeletonText,u=t.width,ge=u===void 0?320:u,W=t.height,X=W===void 0?320:W,ee=t.src,ue=t.loadingText,De=ue===void 0?"Painting...":ue,p=t.doneText,Be=p===void 0?"Paint Completed":p,K=t.skeleton||(0,A.jsxs)("div",{className:"".concat(T,"-default-skeleton"),style:{width:"100%",height:"100%"},children:[(0,A.jsx)("div",{className:"".concat(T,"-default-skeleton-bg"),children:(0,A.jsx)(n,{})}),(0,A.jsxs)("div",{className:"".concat(T,"-default-skeleton-content"),children:[(0,A.jsx)("img",{className:"".concat(T,"-default-skeleton-icon"),src:"https://img.alicdn.com/imgextra/i2/O1CN01M1X8yM1MWUC7u3Go5_!!6000000001442-54-tps-72-72.apng"}),ae&&(0,A.jsx)("div",{className:"".concat(T,"-default-skeleton-text"),children:ae})]})]}),xe=!ee,oe=se?{aspectRatio:"".concat(ge,"/").concat(X)}:{width:ge,height:X};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(M,{}),(0,A.jsxs)("div",{className:T,children:[(0,A.jsxs)("div",{className:"".concat(T,"-text"),children:[xe?(0,A.jsx)(C.Z,{}):(0,A.jsx)(g.Z,{className:"".concat(T,"-text-success")}),xe?(0,A.jsx)("span",{style:{paddingLeft:20},children:De}):Be]}),(0,A.jsx)("div",{className:"".concat(T,"-wrapper"),style:oe,children:xe?K:(0,A.jsx)(L.ZP,{locale:{Image:{preview:""}},children:(0,A.jsx)(k.Z,{width:"100%",height:"100%",src:ee})})})]})]})},I=v},66109:function(on,J,e){"use strict";e.d(J,{Z:function(){return cn}});var q=e(19632),h=e.n(q),D=e(97857),x=e.n(D),b=e(67294),M=e(13769),E=e.n(M),L=e(55729),k=e(68400),g=e.n(k),C=e(9053),A,P=(0,C.vJ)(A||(A=g()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.colorBorder},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorText},function(c){return c.theme.borderRadiusSM},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.borderRadiusSM},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorBgBase},function(c){return c.theme.prefixCls},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorSuccess},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.motionEaseOut},function(c){return c.theme.colorWhite},function(c){return c.theme.colorPrimary});function m(c){var H=c.cursor,de=c.content,j=c.animation,w=(0,b.useMemo)(function(){return j?"":H?H==="dot"?" :dot:":H==="underline"?" :underline:":" :dot:":""},[H,de]);return de+w}var n=e(85893),v=["content","cursor","animation"];function I(c){var H=c.content,de=c.cursor,j=c.animation,w=E()(c,v),$=m({cursor:de,content:H,animation:j}),ne=(0,b.useMemo)(function(){if(j)return{hasNextChunk:j&&de,enableAnimation:j&&de}},[de,j]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P,{}),(0,n.jsx)(L.Z,x()(x()({},w),{},{content:$,streaming:ne}))]})}var i=e(5574),t=e.n(i),O=function(H){var de=H.content,j=H.typing,w=(0,b.useState)(0),$=t()(w,2),ne=$[0],he=$[1],ie=(0,b.useRef)();return(0,b.useEffect)(function(){return j?ie.current=setInterval(function(){he(function(r){return r+1})},typeof j=="number"?j:5):ie.current&&clearInterval(ie.current),function(){return clearInterval(ie.current)}},[j]),j?de.slice(0,ne):de},l=O,T=e(56044),se=e(93967),ae=e.n(se),u=function(){return null},ge=e(87427),W=e(96643),X=e(6411),ee=e(97634),ue=e(89698),De={javascript:"js",typescript:"ts",python:"py",ruby:"rb",rust:"rs",kotlin:"kt",csharp:"cs",markdown:"md",yaml:"yml",shell:"sh",bash:"sh",zsh:"sh",mermaid:"mmd",jsx:"jsx",tsx:"tsx"},p=function(H){var de,j=H.className,w=H.children,$=(j==null||(de=j.match(/language-(\w+)/))===null||de===void 0?void 0:de[1])||"";return typeof w!="string"?null:$==="mermaid"?(0,n.jsx)(ge.Z,{header:(0,n.jsx)(Be,{lang:"mermaid",content:w}),children:w}):(0,n.jsx)(W.Z,{lang:$,header:(0,n.jsx)(Be,{lang:$,content:w}),children:w})};function Be(c){var H=c.lang,de=c.content,j=(0,b.useState)(!1),w=t()(j,2),$=w[0],ne=w[1],he=(0,T.wv)(),ie=he.getPrefixCls,r=ie("code-header"),y=(0,b.useCallback)(function(){var S=De[H]||H||"txt",B=new Blob([de],{type:"text/plain;charset=utf-8"}),te=URL.createObjectURL(B),re=document.createElement("a");re.href=te,re.download="code.".concat(S),re.click(),URL.revokeObjectURL(te)},[H,de]);return(0,n.jsxs)("div",{className:r,children:[(0,n.jsx)("div",{className:"".concat(r,"-lang"),children:H}),(0,n.jsxs)("div",{className:"".concat(r,"-actions"),children:[(0,n.jsx)(X.Z,{className:"".concat(r,"-download"),onClick:y}),$?(0,n.jsx)(ee.Z,{className:"".concat(r,"-copied")}):(0,n.jsx)(ue.Z,{className:"".concat(r,"-icon"),onClick:function(){navigator.clipboard.writeText(de),ne(!0),setTimeout(function(){ne(!1)},1e3)}})]})]})}var K=p;function xe(c){return(0,n.jsx)("a",{href:c.src,target:"_blank",rel:"noopener noreferrer",children:c.src})}var oe=e(55839),_e=e(16494),Y=e(85576),Oe=e(36231),ke=e(89102);function Je(c){try{var H=c.src,de=new URL(H),j=de.pathname,w=j.endsWith(".mp4"),$=j.endsWith(".mp3")||j.endsWith(".wav");return $?(0,n.jsx)("audio",x()(x()({src:c.src},c),{},{controls:!0})):w?(0,n.jsx)(we,x()({src:c.src},c)):(0,n.jsx)(Xe,x()({src:c.src},c))}catch(ne){return null}}function Xe(c){return(0,n.jsx)(oe.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(_e.Z,x()({src:c.src},c))})}function we(c){var H=c.src,de=(0,b.useState)(!1),j=t()(de,2),w=j[0],$=j[1],ne=(0,T.wv)(),he=ne.getPrefixCls,ie=he("markdown-video");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:ie,children:(0,n.jsx)("div",{className:"".concat(ie,"-poster"),onClick:function(){return $(!0)},children:(0,n.jsx)(Oe.Z,{className:"".concat(ie,"-play")})})}),(0,n.jsx)(Y.Z,{closeIcon:(0,n.jsx)("a",{children:(0,n.jsx)(ke.Z,{style:{fontSize:20}})}),centered:!0,transitionName:"",footer:null,width:500,title:"",styles:{content:{padding:0}},open:w,destroyOnHidden:!0,onCancel:function(){return $(!1)},children:(0,n.jsx)("video",{controls:!0,autoPlay:!0,style:{display:"block",width:"100%"},children:(0,n.jsx)("source",{src:H,type:"video/mp4"})})})]})}function mn(c){var H=(0,T.wv)().getPrefixCls("markdown");return(0,n.jsx)("div",{className:H,style:{fontSize:c.baseFontSize,lineHeight:c.baseLineHeight},children:c.content})}var qe=e(79427),Cn=e(55241),en,Ze=(0,C.vJ)(en||(en=g()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.motionEaseOut},function(c){return c.theme.colorWhite},function(c){return c.theme.colorPrimary});function Tn(c){var H=(0,T.wv)(),de=H.getPrefixCls,j=de("markdown-citation"),w=c["data-text"],$=c["data-url"],ne=c["data-title"],he=c["data-content"],ie=he||ne,r=(0,n.jsx)("sup",{className:j,children:w});return ie&&(r=(0,n.jsx)(Cn.Z,{title:ne,content:$?(0,n.jsx)("a",{href:$,rel:"noreferrer",target:"_blank",children:$}):he,children:r})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ze,{}),r]})}function _(c){var H,de=((H=c.citationsData[c["data-text"]])===null||H===void 0?void 0:H.render)||Tn;return(0,n.jsx)(de,x()({},c))}var je=[],Ie={};function nn(c){var H=c.citations,de=H===void 0?je:H,j=c.citationsMap,w=j===void 0?Ie:j,$=(0,b.useMemo)(function(){var r=x()({},w);return de.forEach(function(y,S){var B=S+1;r[B]=y}),[r,function(){return function(S){return(0,n.jsx)(_,x()(x()({},S),{},{citationsData:r}))}}()]},[de,w]),ne=t()($,2),he=ne[0],ie=ne[1];return{CitationComponent:ie,citationsData:he,citationsDataCount:Object.keys(he).length}}var an=e(30861);function tn(c){return{name:"citation",level:"inline",tokenizer:function(de){var j=de.match(/^\[([^\]]+)\](?!\()/);if(j){var w=j[0].trim(),$=w==null?void 0:w.replace(/^\[([^\]]+)\]/g,"$1");if(c[$])return{type:"citation",raw:w,text:w==null?void 0:w.replace(/^\[([^\]]+)\]/g,"$1"),renderType:"component"}}},renderer:function(de){if(c&&Object.keys(c).length===0)return null;var j=de.text,w=c==null?void 0:c[j];return w?'<citation data-text="'.concat(j,'" data-url="').concat(w.url,'" data-title="').concat(w.title,'" data-content="').concat(w.content,'"></citation>'):de.raw}}}var sn,fn=(0,C.vJ)(sn||(sn=g()([`
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
`])),function(c){var H=c.theme;return H.colorPrimary});function Ve(){var c=(0,T.wv)(),H=c.getPrefixCls,de="markdown-cursor-underline";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(fn,{}),(0,n.jsx)("span",{className:ae()(de,H("markdown-cursor"))})]})}var gn=e(36374),a=function(H){var de=H["data-type"];return de==="dot"?(0,n.jsx)(gn.Z,{}):de==="underline"?(0,n.jsx)(Ve,{}):null};function Ce(){var c={cursors:{dot:"dot",underline:"underline"}},H=Object.keys(c.cursors).map(function(w){return w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|"),de=new RegExp(":(".concat(H,"):")),j=new RegExp("^".concat(de.source));return{name:"cursor",level:"inline",start:function($){var ne;return(ne=$.match(de))===null||ne===void 0?void 0:ne.index},tokenizer:function($,ne){var he=j.exec($);if(he){var ie=he[1],r=c.cursors[ie];if(r)return{type:"cursor",raw:he[0],name:ie,cursor:r}}},renderer:function($){var ne='<custom-cursor data-type="'.concat($.name,'"></custom-cursor>');return ne}}}var pe=e(85018),Fe=["href"];function Te(c){return c["data-footnote-ref"]===""?(0,n.jsx)(rn,x()({},c)):c.children==="\u21A9"&&c["data-footnote-backref"]===""?null:(0,n.jsx)("a",x()({},c))}function rn(c){var H=(0,T.wv)(),de=H.getPrefixCls,j=de("markdown-footnote"),w=c.href,$=E()(c,Fe);return(0,n.jsx)("a",x()(x()({},$),{},{className:j,onClick:function(){try{var he=c.id.split("-"),ie=t()(he,3),r=ie[0],y=ie[1],S=ie[2],B=document.querySelector("#footnote-".concat(S)).querySelector("a").getAttribute("href");window.open(B,"_blank")}catch(te){}}}))}var ze={ALLOWED_TAGS:[]};function pn(){try{return new RegExp("(?<=a)b"),!0}catch(c){return!1}}var ln=pn(),cn=(0,b.memo)(function(c){var H=c.baseFontSize||14,de=c.baseLineHeight||1.7,j=l({content:c.content,typing:c.typing&&!c.animation}),w=(0,T.wv)().getPrefixCls("markdown"),$=c.raw,ne=$===void 0?!1:$,he=c.allowHtml,ie=he===void 0?!1:he,r=nn({citations:c.citations,citationsMap:c.citationsMap}),y=r.citationsData,S=r.citationsDataCount,B=r.CitationComponent,te=(0,b.useMemo)(function(){return x()({code:K,style:u,script:u,img:c.disableImage?xe:Je,citation:B,"custom-cursor":a,a:Te},c.components)},[c.disableImage,B,c.components]),re=(0,b.useMemo)(function(){return{ADD_TAGS:["custom-cursor","citation"]}},[]),z=(0,b.useMemo)(function(){var Ke=(0,an.Z)();Ke.push(Ce()),S>0&&Ke.push(tn(y));var un=(0,pe.Z)({sectionClass:"".concat(w,"-footnotes")});return Ke.push.apply(Ke,h()(un.extensions)),{extensions:Ke,walkTokens:un.walkTokens}},[S,y]),fe=z.extensions,ve=z.walkTokens,Q=(0,b.useMemo)(function(){return x()({extensions:fe,walkTokens:ve},!ie&&{renderer:{html:function(un){var Ue=un.text||un.raw||"";return Ue.replace(/</g,"&lt;").replace(/>/g,"&gt;")}}})},[fe,ie]),le=j||"",Me=(0,n.jsx)(mn,{content:le,baseFontSize:H,baseLineHeight:de}),Ge=(0,b.useCallback)(function(){for(var Ke=arguments.length,un=new Array(Ke),Ue=0;Ue<Ke;Ue++)un[Ue]=arguments[Ue];return console.error(un),(0,n.jsx)(mn,{content:le,baseFontSize:H,baseLineHeight:de})},[le,H,de]),He=(0,b.useMemo)(function(){return{fontSize:H,lineHeight:de}},[H,de]);return ne||!ln?Me:(0,n.jsx)(qe.SV,{fallbackRender:Ge,children:(0,n.jsx)(I,{dompurifyConfig:re,cursor:c.cursor,animation:c.animation,components:te,style:He,openLinksInNewTab:!0,className:ae()(w,c.className),content:le,config:Q})})})},36374:function(on,J,e){"use strict";e.d(J,{Z:function(){return g}});var q=e(68400),h=e.n(q),D=e(56044),x=e(9053),b=e(93967),M=e.n(b),E=e(85893),L,k=(0,x.vJ)(L||(L=h()([`
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
`])),function(C){return C.theme.prefixCls},function(C){return C.theme.colorText},function(C){return C.theme.colorText});function g(){var C=(0,D.wv)(),A=C.getPrefixCls,P=A("markdown-cursor-dot");return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(k,{}),(0,E.jsxs)("span",{className:M()(P,A("markdown-cursor")),children:[(0,E.jsx)("span",{style:{opacity:0,marginLeft:"-.75em"},children:"_"}),(0,E.jsx)("span",{className:"".concat(P,"-dot1")}),(0,E.jsx)("span",{className:"".concat(P,"-dot2")})]})]})}},12181:function(on,J,e){"use strict";e.d(J,{Z:function(){return T}});var q=e(5574),h=e.n(q),D=e(15009),x=e.n(D),b=e(99289),M=e.n(b),E=e(68400),L=e.n(E),k=e(41469),g=e(2093),C=e(9361),A=e(96486),P=e.n(A),m=e(67294),n=e(56044),v=e(9053),I=e(85893),i,t=(0,v.vJ)(i||(i=L()([`
.`,`-mermaid {
  &-preview img {
    background: `,`;
  }
}
`])),function(se){return se.theme.prefixCls},function(se){return se.theme.colorBgBase}),O,l=function(){var se=M()(x()().mark(function ae(){return x()().wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:if(!O){ge.next=2;break}return ge.abrupt("return",O);case 2:return O=Promise.resolve().then(e.bind(e,76637)).then(function(W){return W.default}),ge.abrupt("return",O);case 4:case"end":return ge.stop()}},ae)}));return function(){return se.apply(this,arguments)}}();function T(se){var ae=se.content,u=se.width,ge=se.height,W=(0,n.wv)(),X=W.theme,ee=W.getPrefixCls,ue=ee("mermaid"),De=(0,m.useMemo)(function(){return{theme:(X==null?void 0:X.algorithm)===C.Z.darkAlgorithm?"dark":"default",securityLevel:"loose",startOnLoad:!1}},[X==null?void 0:X.algorithm,X==null?void 0:X.token.fontFamily]),p=(0,m.useState)(""),Be=h()(p,2),K=Be[0],xe=Be[1],oe=(0,m.useState)(),_e=h()(oe,2),Y=_e[0],Oe=_e[1],ke=(0,m.useId)(),Je=(0,A.kebabCase)("mermaid-".concat(ke));return(0,g.Z)(M()(x()().mark(function Xe(){var we,mn,qe,Cn;return x()().wrap(function(Ze){for(;;)switch(Ze.prev=Ze.next){case 0:return Ze.prev=0,Ze.next=3,l();case 3:if(we=Ze.sent,we){Ze.next=7;break}return xe(ae),Ze.abrupt("return");case 7:return Ze.next=9,we.parse(ae);case 9:if(mn=Ze.sent,!mn){Ze.next=19;break}return we.initialize(De),Ze.next=14,we.render(Je,ae);case 14:qe=Ze.sent,Cn=qe.svg,xe(Cn),Ze.next=20;break;case 19:throw new Error("Invalid Mermaid syntax");case 20:Ze.next=26;break;case 22:Ze.prev=22,Ze.t0=Ze.catch(0),K||console.error("Mermaid parse error: ",Ze.t0),xe(K||"");case 26:case"end":return Ze.stop()}},Xe,null,[[0,22]])})),[ae,De]),(0,m.useEffect)(function(){if(K){var Xe=new Blob([K],{type:"image/svg+xml"}),we=URL.createObjectURL(Xe);return Oe(we),function(){URL.revokeObjectURL(we)}}},[K]),Y?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(t,{}),(0,I.jsx)(k.Z,{className:ue,src:Y,alt:"mermaid",width:u,height:ge,preview:{rootClassName:"".concat(ue,"-preview")}})]}):null}},31382:function(on,J,e){"use strict";e.d(J,{Z:function(){return O}});var q=e(9783),h=e.n(q),D=e(5574),x=e.n(D),b=e(67294),M=e(56044),E=e(68400),L=e.n(E),k=e(9053),g,C=(0,k.vJ)(g||(g=L()([`
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
`])),function(l){return l.theme.prefixCls},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorFillTertiary},function(l){return l.theme.colorText},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorText},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorText},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorText},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorText},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBgBase},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.prefixCls},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorPrimary},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorFillTertiary},function(l){return l.theme.colorFillTertiary},function(l){return l.theme.colorFillQuaternary},function(l){return l.theme.colorTextTertiary}),A=e(93967),P=e.n(A),m=e(28387),n=e(9838),v=e(64057),I=e(85893);function i(l){var T=(0,M.wv)(),se=T.getPrefixCls,ae=se("operate-card");return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("div",{className:"".concat(ae,"-line-body"),children:l.children})})}function t(l){var T,se=(0,M.wv)(),ae=se.getPrefixCls,u=ae("operate-card"),ge=(0,b.useState)(((T=l.body)===null||T===void 0?void 0:T.defaultOpen)||!1),W=x()(ge,2),X=W[0],ee=W[1];return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(C,{}),(0,I.jsxs)("div",{className:u,children:[(0,I.jsxs)("div",{className:P()("".concat(u,"-header"),l.header.className,h()({},"".concat(u,"-header-has-body"),l.body)),onClick:function(){l.body&&ee(!X)},children:[(0,I.jsx)("div",{className:"".concat(u,"-header-icon"),children:l.header.icon}),typeof l.header.title=="string"?(0,I.jsx)("div",{className:"".concat(u,"-header-title"),children:l.header.title}):l.header.title,l.header.description&&(0,I.jsx)("div",{className:"".concat(u,"-header-description"),children:l.header.description}),l.body&&(0,I.jsx)(v.Z,{size:"small",bordered:!1,className:"".concat(u,"-header-arrow"),icon:X?(0,I.jsx)(m.Z,{}):(0,I.jsx)(n.Z,{})})]}),l.body&&X&&(0,I.jsx)("div",{className:"".concat(u,"-body"),children:l.body.children})]})]})}t.LineBody=i;var O=t},85762:function(on,J,e){"use strict";e.d(J,{Z:function(){return i}});var q=e(5574),h=e.n(q),D=e(56044),x=e(31382),b=e(37303),M=e(64057),E=e(28387),L=e(9838),k=e(48095),g=e(50104),C=e(55839),A=e(16494),P=e(86250),m=e(67294),n=e(85893);function v(t){var O=t.images,l=(0,D.wv)(),T=l.getPrefixCls,se=T("operate-card");return(0,n.jsx)(C.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(A.Z.PreviewGroup,{children:O.map(function(ae,u){return(0,n.jsx)(A.Z,{src:ae,width:44,height:44},u)})})})}function I(t){var O=t.item,l=(0,m.useState)(!1),T=h()(l,2),se=T[0],ae=T[1],u=(0,D.wv)(),ge=u.getPrefixCls,W=ge("operate-card");return(0,n.jsxs)("div",{className:"".concat(W,"-rag-item"),children:[(0,n.jsxs)("div",{className:"".concat(W,"-rag-item-title"),onClick:function(){ae(!se)},children:[(0,n.jsx)("span",{children:O.title}),(0,n.jsx)("span",{style:{flex:1}}),O.score?(0,n.jsxs)(b.Z,{color:"mauve",size:"small",className:"".concat(W,"-rag-item-score"),children:["\u5F97\u5206 ",(0,n.jsx)("b",{children:O.score})]}):null,(0,n.jsx)(M.Z,{bordered:!1,size:"small",icon:se?(0,n.jsx)(E.Z,{}):(0,n.jsx)(L.Z,{})})]}),se&&(0,n.jsxs)("div",{className:"".concat(W,"-rag-item-content"),children:[(0,n.jsx)("div",{className:"".concat(W,"-rag-item-content-text"),children:O.content}),O.images&&(0,n.jsx)("div",{className:"".concat(W,"-rag-item-images"),children:(0,n.jsx)(v,{images:O.images})}),O.link?(0,n.jsx)("a",{onClick:function(){window.open(O.link,"_blank")},className:"".concat(W,"-rag-item-footer"),href:O.link,target:"_blank",children:O.footer}):(0,n.jsx)("div",{className:"".concat(W,"-rag-item-footer"),children:O.footer})]})]})}function i(t){var O=t.title,l=O===void 0?"\u77E5\u8BC6\u5E93\u68C0\u7D22":O,T=t.subTitle,se=t.defaultOpen,ae=se===void 0?!0:se,u=t.placeholder,ge=u===void 0?"\u672A\u67E5\u8BE2\u5230\u4E0E\u63D0\u95EE\u76F8\u5173\u77E5\u8BC6\u5E93":u,W=t.images,X=t.query,ee=t.filters,ue=(0,D.wv)(),De=ue.getPrefixCls,p=De("operate-card"),Be=(0,n.jsxs)(x.Z.LineBody,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(p,"-rag-group-title"),children:"\u68C0\u7D22 Query"}),(0,n.jsx)("div",{className:"".concat(p,"-rag-group-content"),children:X})]}),W!=null&&W.length?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(p,"-rag-group-title"),children:"\u68C0\u7D22\u56FE\u7247"}),(0,n.jsx)("div",{className:"".concat(p,"-rag-group-content ").concat(p,"-rag-group-content-images"),children:(0,n.jsx)(v,{images:W})})]}):null,ee?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(p,"-rag-group-title"),children:"\u8FC7\u6EE4\u6761\u4EF6"}),(0,n.jsx)("div",{className:"".concat(p,"-rag-group-content"),children:ee})]}):null,t.list.length?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(p,"-rag-group-title"),children:"Output"}),t.list.map(function(K,xe){return(0,n.jsx)(I,{item:K},xe)})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"".concat(p,"-rag-group-title"),children:"Output"}),(0,n.jsxs)(P.Z,{align:"center",justify:"center",gap:8,className:"".concat(p,"-rag-empty-placeholder"),children:[(0,n.jsx)(k.Z,{}),(0,n.jsx)("span",{children:ge})]})]})]});return(0,n.jsx)(x.Z,{header:{icon:(0,n.jsx)(g.Z,{}),title:l,description:T},body:{defaultOpen:ae,children:(0,n.jsx)("div",{className:"".concat(p,"-rag-children"),children:Be})}})}},79323:function(on,J,e){"use strict";e.d(J,{Z:function(){return M}});var q=e(56044),h=e(31382),D=e(40443),x=e(33593),b=e(85893);function M(E){var L=(0,q.wv)(),k=L.getPrefixCls,g=E.defaultOpen,C=g===void 0?!0:g,A=E.loading,P=A===void 0?!1:A,m=k("operate-card");return(0,b.jsx)(h.Z,{header:{icon:P?(0,b.jsx)(D.Z,{spin:!0}):(0,b.jsx)(x.Z,{}),title:E.title,description:E.subTitle},body:{defaultOpen:P?C:!1,children:(0,b.jsx)(h.Z.LineBody,{children:(0,b.jsx)("div",{className:"".concat(m,"-thinking"),children:E.content})})}},P.toString())}},6874:function(on,J,e){"use strict";e.d(J,{Z:function(){return C}});var q=e(9783),h=e.n(q),D=e(56044),x=e(31382),b=e(41775),M=e(77900),E=e(40443),L=e(93967),k=e.n(L),g=e(85893);function C(A){var P=(0,D.wv)(),m=P.getPrefixCls,n=m("operate-card"),v=A.title,I=v===void 0?"Task List":v,i=A.list.filter(function(t){return t.status==="done"}).length;return(0,g.jsx)(x.Z,{header:{icon:(0,g.jsx)(b.Z,{}),title:I,description:"\xB7 ".concat(i?i+" of ":""," ").concat(A.list.length)},body:{defaultOpen:A.defaultOpen,children:(0,g.jsx)("div",{className:"".concat(n,"-todo-list"),children:A.list.map(function(t){return(0,g.jsxs)("div",{className:k()(h()(h()({},"".concat(n,"-todo-list-item"),!0),"".concat(n,"-todo-list-item-").concat(t.status),!0)),children:[(0,g.jsx)("div",{className:"".concat(n,"-todo-list-item-icon"),children:{done:(0,g.jsx)(M.Z,{}),todo:(0,g.jsx)(M.Z,{}),running:(0,g.jsx)(E.Z,{spin:!0})}[t.status]}),(0,g.jsx)("div",{className:"".concat(n,"-todo-list-item-title"),style:{textDecoration:t.status==="done"?"line-through":"none"},children:t.title})]},t.title)})})}})}},85786:function(on,J,e){"use strict";e.d(J,{Z:function(){return n}});var q=e(5574),h=e.n(q),D=e(56044),x=e(31382),b=e(97634),M=e(89698),E=e(40443),L=e(78598),k=e(33811),g=e(64057),C=e(4146),A=e(67294),P=e(85893);function m(v){var I=(0,D.wv)(),i=I.getPrefixCls,t=i("operate-card"),O=typeof v.content=="string"?v.content:JSON.stringify(v.content),l=(0,A.useState)(!1),T=h()(l,2),se=T[0],ae=T[1],u=(0,A.useRef)(null);return(0,P.jsx)("div",{className:"".concat(t,"-tool-call-block"),children:(0,P.jsx)(k.Z,{title:v.title,extra:(0,P.jsx)(g.Z,{size:"small",style:{marginRight:"-6px"},icon:se?(0,P.jsx)(b.Z,{}):(0,P.jsx)(M.Z,{}),bordered:!1,onClick:function(){clearTimeout(u.current),navigator.clipboard.writeText(O),ae(!0),u.current=setTimeout(function(){ae(!1)},2e3)}}),children:(0,P.jsx)(C.ZP,{language:"json",value:O,readOnly:!0})})})}function n(v){var I=v.title,i=I===void 0?"Call Tool":I,t=v.subTitle,O=v.defaultOpen,l=O===void 0?!0:O,T=v.loading,se=T===void 0?!1:T;return(0,P.jsx)(x.Z,{header:{icon:se?(0,P.jsx)(E.Z,{spin:!0}):(0,P.jsx)(L.Z,{}),title:i,description:t},body:{defaultOpen:l,children:(0,P.jsxs)(x.Z.LineBody,{children:[(0,P.jsx)(m,{title:"Input",content:v.input}),(0,P.jsx)(m,{title:"Output",content:v.output})]})}})}},69610:function(on,J,e){"use strict";e.d(J,{Z:function(){return k}});var q=e(9783),h=e.n(q),D=e(56044),x=e(31382),b=e(9229),M=e(93967),E=e.n(M),L=e(85893);function k(g){var C=(0,D.wv)(),A=C.getPrefixCls,P=A("operate-card"),m=g.title,n=m===void 0?"\u8054\u7F51\u641C\u7D22":m,v=g.subTitle;return(0,L.jsx)(x.Z,{header:{icon:(0,L.jsx)(b.Z,{}),title:n,description:v},body:{defaultOpen:!0,children:(0,L.jsx)(x.Z.LineBody,{children:g.list.map(function(I){return(0,L.jsxs)("div",{className:E()(h()({},"".concat(P,"-web-search-item"),!0)),onClick:function(){window.open(I.link,"_blank")},children:[(0,L.jsx)("img",{className:"".concat(P,"-web-search-item-icon"),src:I.icon,alt:I.title}),(0,L.jsx)("div",{className:"".concat(P,"-web-search-item-title"),children:I.title}),I.subTitle&&(0,L.jsx)("div",{className:"".concat(P,"-web-search-item-subTitle"),children:I.subTitle})]},I.title)})})}})}},56809:function(on,J,e){"use strict";e.d(J,{B4:function(){return h.Z},BI:function(){return q.Z},Sn:function(){return b.Z},fz:function(){return x.Z},x4:function(){return D.Z}});var q=e(79323),h=e(6874),D=e(85786),x=e(69610),b=e(85762)},83962:function(on,J,e){"use strict";e.d(J,{HJ:function(){return L},NR:function(){return M},xy:function(){return E}});var q=e(97857),h=e.n(q),D=e(67294),x=e(24963),b=e(85893),M=(0,D.createContext)(void 0),E=function(g){return(0,b.jsx)(M.Provider,{value:g.cardConfig,children:g.children})},L=function(){var g=D.useContext(M);return D.useMemo(function(){return h()(h()({},x),g)},[g])}},92049:function(on,J,e){"use strict";e.d(J,{R:function(){return x},bN:function(){return b}});var q=e(67294),h=e(85893),D=(0,q.createContext)(void 0),x=function(E){return(0,h.jsx)(D.Provider,{value:E,children:E.children})},b=function(){var E=q.useContext(D);return E||{}}},56044:function(on,J,e){"use strict";e.d(J,{wv:function(){return E}});var q=e(21766),h=e(67294),D=e(83962),x=e(92049),b=e(85893),M=function(k){var g=k.children,C=k.cardConfig,A=k.markdown;return(0,b.jsx)(x.R,{markdown:A,children:(0,b.jsx)(D.xy,{cardConfig:C,children:g})})};function E(){var L=h.useContext(q.ZP.ConfigContext);return L}J.ZP=M},44294:function(on,J,e){"use strict";e.d(J,{Z:function(){return P},a:function(){return g}});var q=e(97857),h=e.n(q),D=e(24772),x=e(83622),b=e(93967),M=e.n(b),E=e(29372),L=e(67294),k=e(85893),g=L.createContext({}),C=function(){return{height:0}},A=function(n){return{height:n.scrollHeight}};function P(m){var n=m.title,v=m.onOpenChange,I=m.open,i=m.children,t=m.className,O=m.style,l=m.classNames,T=l===void 0?{}:l,se=m.styles,ae=se===void 0?{}:se,u=m.closable,ge=m.forceRender,W=L.useContext(g),X=W.prefixCls,ee="".concat(X,"-header");return(0,k.jsx)(E.ZP,{motionEnter:!0,motionLeave:!0,motionName:"".concat(ee,"-motion"),leavedClassName:"".concat(ee,"-motion-hidden"),onEnterStart:C,onEnterActive:A,onLeaveStart:A,onLeaveActive:C,visible:I,forceRender:ge,children:function(De){var p=De.className,Be=De.style;return(0,k.jsxs)("div",{className:M()(ee,p,t),style:h()(h()({},Be),O),children:[(u!==!1||n)&&(0,k.jsxs)("div",{className:M()("".concat(ee,"-header"),T.header),style:h()({},ae.header),children:[(0,k.jsx)("div",{className:"".concat(ee,"-title"),children:n}),u!==!1&&(0,k.jsx)("div",{className:"".concat(ee,"-close"),children:(0,k.jsx)(x.ZP,{type:"text",icon:(0,k.jsx)(D.Z,{}),size:"small",onClick:function(){v==null||v(!I)}})})]}),i&&(0,k.jsx)("div",{className:M()("".concat(ee,"-content"),T.content),style:h()({},ae.content),children:i})]})}})}},66672:function(on,J,e){"use strict";e.d(J,{Z:function(){return ie}});var q=e(19632),h=e.n(q),D=e(97857),x=e.n(D),b=e(9783),M=e.n(b),E=e(5574),L=e.n(E),k=e(13769),g=e.n(k),C=e(48045),A=e(86250),P=e(93967),m=e.n(P),n=e(56790),v=e(30339),I=e(94787),i=e(67294),t=e(11154),O=e(83204);function l(r,y){return(0,i.useImperativeHandle)(r,function(){var S=y(),B=S.nativeElement;return new Proxy(B,{get:function(re,z){return S[z]?S[z]:Reflect.get(re,z)}})})}var T=e(56044),se=e(44294),ae=e(64057),u=e(85893),ge=["className","action","onClick"],W=i.createContext(null);function X(r){var y=r.className,S=r.action,B=r.onClick,te=g()(r,ge),re=i.useContext(W),z=re.prefixCls,fe=re.disabled,ve=re[S],Q=fe||te.disabled||re["".concat(S,"Disabled")]||!1;return(0,u.jsx)(ae.Z,x()(x()({bordered:!1,disabled:Q},te),{},{onClick:function(Me){Q||(ve&&ve(),B&&B(Me))},className:m()(z,y,M()({},"".concat(z,"-disabled"),Q))}))}var ee=i.forwardRef(X),ue=e(69291);function De(r,y){return(0,u.jsx)(ee,x()(x()({icon:(0,u.jsx)(ue.Z,{})},r),{},{action:"onClear",ref:y}))}var p=i.forwardRef(De),Be=(0,i.memo)(function(r){var y=r.className;return(0,u.jsxs)("svg",{color:"currentColor",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:y,children:[(0,u.jsx)("title",{children:"Stop Loading"}),(0,u.jsx)("rect",{fill:"currentColor",height:"250",rx:"24",ry:"24",width:"250",x:"375",y:"375"})]})}),K=Be,xe=e(67055),oe=["className","loading"];function _e(r,y){var S=i.useContext(W),B=S.prefixCls,te=r.className,re=r.loading,z=g()(r,oe),fe=(0,u.jsx)(ee,x()(x()({icon:(0,u.jsx)(K,{className:"".concat(B,"-loading-icon")}),type:"primary",variant:"text"},z),{},{className:m()(te,"".concat(B,"-loading-button")),action:"onCancel",ref:y}));return typeof r.loading=="string"?(0,u.jsx)(xe.Z,{title:r.loading,children:fe}):fe}var Y=i.forwardRef(_e),Oe=e(43103);function ke(r,y){return(0,u.jsx)(ee,x()(x()({icon:(0,u.jsx)(Oe.Z,{}),type:"primary"},r),{},{action:"onSend",ref:y}))}var Je=i.forwardRef(ke),Xe=e(36763),we=e(21474),mn=1e3,qe=4,Cn=140,en=Cn/2,Ze=250,Tn=500,_=.8;function je(r){var y=r.className;return(0,u.jsxs)("svg",{color:"currentColor",viewBox:"0 0 ".concat(mn," ").concat(mn),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:y,children:[(0,u.jsx)("title",{children:"Speech Recording"}),Array.from({length:qe}).map(function(S,B){var te=(mn-Cn*qe)/(qe-1),re=B*(te+Cn),z=mn/2-Ze/2,fe=mn/2-Tn/2;return(0,u.jsxs)("rect",{fill:"currentColor",rx:en,ry:en,height:Ze,width:Cn,x:re,y:z,children:[(0,u.jsx)("animate",{attributeName:"height",values:"".concat(Ze,"; ").concat(Tn,"; ").concat(Ze),keyTimes:"0; 0.5; 1",dur:"".concat(_,"s"),begin:"".concat(_/qe*B,"s"),repeatCount:"indefinite"}),(0,u.jsx)("animate",{attributeName:"y",values:"".concat(z,"; ").concat(fe,"; ").concat(z),keyTimes:"0; 0.5; 1",dur:"".concat(_,"s"),begin:"".concat(_/qe*B,"s"),repeatCount:"indefinite"})]},B)})]})}function Ie(r,y){var S=i.useContext(W),B=S.speechRecording,te=S.onSpeechDisabled,re=S.prefixCls,z=null;return B?z=(0,u.jsx)(je,{className:"".concat(re,"-recording-icon")}):te?z=(0,u.jsx)(Xe.Z,{}):z=(0,u.jsx)(we.Z,{}),(0,u.jsx)(ee,x()(x()({icon:z,variant:"text"},r),{},{action:"onSpeech",ref:y}))}var nn=i.forwardRef(Ie),an=e(68400),tn=e.n(an),sn=e(9053),fn,Ve=(0,sn.vJ)(fn||(fn=tn()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.colorBgBase},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.motionDurationSlow},function(r){return r.theme.lineWidth},function(r){return r.theme.colorPrimaryHover},function(r){return r.theme.lineWidth},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorBgContainerDisabled},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.paddingXS},function(r){return r.theme.colorTextTertiary},function(r){return"var(--".concat(r.theme.prefixCls,"-color-fill-disable)")},function(r){return r.theme.controlHeight},function(r){return r.theme.controlHeight},function(r){return r.theme.prefixCls}),gn=Ve,a=e(52677),Ce=e.n(a),pe;!pe&&typeof window!="undefined"&&(pe=window.SpeechRecognition||window.webkitSpeechRecognition);function Fe(r,y){var S=(0,n.zX)(r),B=i.useMemo(function(){return Ce()(y)==="object"?[y.recording,y.onRecordingChange,typeof y.recording=="boolean"]:[void 0,void 0,!1]},[y]),te=L()(B,3),re=te[0],z=te[1],fe=te[2],ve=i.useState(null),Q=L()(ve,2),le=Q[0],Me=Q[1];i.useEffect(function(){if(typeof navigator!="undefined"&&"permissions"in navigator){var bn=null;return navigator.permissions.query({name:"microphone"}).then(function(Ln){Me(Ln.state),Ln.onchange=function(){Me(this.state)},bn=Ln}),function(){bn&&(bn.onchange=null)}}},[]);var Ge=pe&&le!=="denied",He=i.useRef(null),Ke=(0,n.C8)(!1,{value:re}),un=L()(Ke,2),Ue=un[0],Ae=un[1],N=i.useRef(!1),yn=function(){if(Ge&&!He.current){var Ln=new pe;Ln.onstart=function(){Ae(!0)},Ln.onend=function(){Ae(!1)},Ln.onresult=function(vn){if(!N.current){var jn,Qe=(jn=vn.results)===null||jn===void 0||(jn=jn[0])===null||jn===void 0||(jn=jn[0])===null||jn===void 0?void 0:jn.transcript;S(Qe)}N.current=!1},He.current=Ln}},Pn=(0,n.zX)(function(bn){bn&&!Ue||(N.current=bn,fe?z==null||z(!Ue):(yn(),He.current&&(Ue?(He.current.stop(),z==null||z(!1)):(He.current.start(),z==null||z(!0)))))});return[Ge,Pn,Ue]}var Te=e(89102),rn,ze=(0,sn.vJ)(rn||(rn=tn()([`
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

`])),function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.colorTextSecondary},function(r){return r.theme.colorPrimary},function(r){return r.theme.colorPrimary},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorFillTertiary},function(r){return r.theme.colorTextSecondary});function pn(r){var y=(0,T.wv)(),S=y.getPrefixCls,B=S("sender-mode-select"),te=r.value,re=r.onChange,z=(0,i.useMemo)(function(){var ve=r.options.find(function(Q){return Q.value===te})||{};return ve},[r.value]),fe=(0,u.jsx)(Te.Z,{onClick:function(){return re(void 0)},style:{cursor:"pointer",fontSize:20}});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(ze,{}),(0,u.jsxs)("div",{className:B,style:r.style,children:[(0,u.jsx)("div",{className:"".concat(B,"-options ").concat(te?"".concat(B,"-hide"):""),children:r.options.map(function(ve){var Q=(0,u.jsx)(ln,x()({onClick:function(){return re(ve.value)},className:"".concat(B,"-option")},ve),ve.value);return Q})}),(0,u.jsx)("div",{className:"".concat(B,"-display ").concat(te?"":"".concat(B,"-hide")),children:(0,u.jsxs)("div",{className:"".concat(B,"-display-flex"),children:[(0,u.jsx)(ln,x()(x()({},z),{},{label:(z==null?void 0:z.selectedLabel)||(z==null?void 0:z.label),className:"".concat(B,"-display-label")})),r.desc&&(0,u.jsx)("div",{className:"".concat(B,"-display-desc"),children:r.desc}),r.closeTip?(0,u.jsx)(xe.Z,{title:r.closeTip,children:fe}):fe]})})]})]})}function ln(r){var y=(0,u.jsxs)("div",{className:r.className,onClick:r.onClick,children:[r.icon,r.label]});return r.tooltip?(0,u.jsx)(xe.Z,{title:r.tooltip,placement:"topLeft",children:y}):y}var cn=e(85441),c=e(32485),H,de=(0,sn.vJ)(H||(H=tn()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorFillTertiary});function j(r){var y=r.leftChildren,S=r.rightChildren,B=r.children,te=(0,T.wv)().getPrefixCls("sender-before-ui-container"),re=(0,i.useMemo)(function(){return y?(0,u.jsx)("div",{className:"".concat(te,"-left"),children:y}):null},[y]),z=(0,i.useMemo)(function(){return S?(0,u.jsx)("div",{className:"".concat(te,"-right"),children:S}):null},[S]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(de,{}),(0,u.jsx)("div",{className:te,children:(0,u.jsx)("div",{className:"".concat(te,"-content"),children:(0,u.jsx)("div",{className:"".concat(te,"-content-children"),children:B||(0,u.jsxs)(u.Fragment,{children:[re,z]})})})})]})}var w=["styles","classNames","className","rootClassName","style","defaultValue","value","readOnly","enableFocusExpand","sendDisabled","submitType","onSubmit","loading","onCancel","onChange","onFocus","onBlur","actions","onKeyPress","onKeyDown","disabled","header","onPaste","allowSpeech","onPasteFile","components","initialRows","scalable"];function $(r,y,S){return(0,I.Z)(r,y)||S}var ne=i.forwardRef(function(r,y){var S=r,B=S.styles,te=B===void 0?{}:B,re=S.classNames,z=re===void 0?{}:re,fe=S.className,ve=S.rootClassName,Q=S.style,le=S.defaultValue,Me=S.value,Ge=S.readOnly,He=S.enableFocusExpand,Ke=He===void 0?!1:He,un=S.sendDisabled,Ue=un===void 0?!1:un,Ae=S.submitType,N=Ae===void 0?"enter":Ae,yn=S.onSubmit,Pn=S.loading,bn=S.onCancel,Ln=S.onChange,vn=S.onFocus,jn=S.onBlur,Qe=S.actions,$e=S.onKeyPress,dn=S.onKeyDown,Se=S.disabled,Re=S.header,hn=S.onPaste,xn=S.allowSpeech,_n=S.onPasteFile,An=S.components,Rn=S.initialRows,Bn=Rn===void 0?2:Rn,wn=S.scalable,Kn=g()(S,w),Mn=wn,Qn=(0,i.useState)(Mn?!1:void 0),Nn=L()(Qn,2),On=Nn[0],Un=Nn[1],Fn=(0,i.useState)(!1),Dn=L()(Fn,2),En=Dn[0],In=Dn[1],Hn=i.useMemo(function(){return On?{maxRows:5,minRows:5}:{maxRows:5,minRows:Bn}},[Mn,On]),Jn=(0,T.wv)(),dt=Jn.direction,gt=Jn.getPrefixCls,Zn=gt("sender"),Xn=i.useRef(null),et=i.useRef(null);l(y,function(){var V,U;return{nativeElement:Xn.current,focus:(V=et.current)===null||V===void 0?void 0:V.focus,blur:(U=et.current)===null||U===void 0?void 0:U.blur}}),(0,t.Z)(Xn,{onFocus:function(U){In(!0),vn==null||vn()},onBlur:function(){Xn.current&&!Xn.current.contains(document.activeElement)&&(In(!1),jn==null||jn())}}),(0,O.Z)("click",function(V){In(!0),vn==null||vn()},{target:Xn});var ft="".concat(Zn,"-input"),pt=m()(Zn,fe,ve,M()(M()(M()(M()({},"".concat(Zn,"-rtl"),dt==="rtl"),"".concat(Zn,"-disabled"),Se),"".concat(Zn,"-focus"),En&&Ke),"".concat(Zn,"-blur"),!En&&Ke)),xt="".concat(Zn,"-actions-btn"),tt="".concat(Zn,"-actions-list"),Ct=(0,n.C8)(le||"",{value:Me}),vt=L()(Ct,2),$n=vt[0],yt=vt[1],rt=function(U,F){yt(U),Ln&&Ln(U,F)},bt=Fe(function(V){rt("".concat($n," ").concat(V))},xn),at=L()(bt,3),jt=at[0],mt=at[1],Et=at[2],St=$(An,["input"],C.Z.TextArea),Pt=(0,v.Z)(Kn,{attr:!0,aria:!0,data:!0}),At=x()(x()({},Pt),{},{ref:et}),ot=function(){!G.onSendDisabled&&yn&&!Pn&&yn($n)},Tt=function(){rt("")},st=i.useRef(!1),Lt=function(){st.current=!0},o=function(){st.current=!1},d=function(U){var F=U.key==="Enter"&&!st.current;switch(N){case"enter":F&&!U.shiftKey&&(U.preventDefault(),ot());break;case"shiftEnter":F&&U.shiftKey&&(U.preventDefault(),ot());break}$e&&$e(U)},s=function(U){var F;if(!_n){hn==null||hn(U);return}var ce=Array.from(((F=U.clipboardData)===null||F===void 0?void 0:F.files)||[]);if(ce.length===0){var Pe,ye=Array.from(((Pe=U.clipboardData)===null||Pe===void 0?void 0:Pe.items)||[]);ce=ye.filter(function(me){return me.kind==="file"}).map(function(me){return me.getAsFile()}).filter(function(me){return me!==null})}ce.length>0?(ce.forEach(function(me){return _n(me)}),U.preventDefault()):hn==null||hn(U)},f=function(U){var F,ce;U.target!==((F=Xn.current)===null||F===void 0?void 0:F.querySelector(".".concat(ft)))&&U.preventDefault(),(ce=et.current)===null||ce===void 0||ce.focus()},R=i.useMemo(function(){var V=Array.isArray(r.prefix)?h()(r.prefix):[r.prefix];return Mn&&V.push((0,u.jsx)(ae.Z,{onClick:function(){return Un(!On)},bordered:!1,icon:On?(0,u.jsx)(cn.Z,{}):(0,u.jsx)(c.Z,{})},"zoom")),V},[r.prefix,Mn,On,xn]),Z=(0,u.jsx)(A.Z,{className:"".concat(tt,"-presets"),children:Pn?(0,u.jsx)(Y,{loading:Pn,disabled:!!Se}):(0,u.jsx)(Je,{disabled:!!Se})});typeof Qe=="function"?Z=Qe(Z,{components:{SendButton:Je,ClearButton:p,LoadingButton:Y}}):Qe&&(Z=Qe);var G={prefixCls:xt,onSend:ot,onSendDisabled:!$n||!$n.trim()||Ue,onClear:Tt,onClearDisabled:!$n,onCancel:bn,onCancelDisabled:!Pn,onSpeech:function(){return mt(!1)},onSpeechDisabled:!jt,speechRecording:Et,disabled:!!Se};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(gn,{}),(0,u.jsxs)("div",{ref:Xn,className:pt,style:Q,children:[Re&&(0,u.jsx)(se.a.Provider,{value:{prefixCls:Zn,focus:En,enableFocusExpand:Ke},children:Re}),(0,u.jsxs)("div",{className:"".concat(Zn,"-content"),children:[(0,u.jsx)(St,x()(x()({},At),{},{disabled:!!Se,style:te.input,className:m()(ft,z.input),autoSize:Hn,value:$n.slice(0,r.maxLength||Number.MAX_SAFE_INTEGER),onChange:function(U){rt(U.target.value,U),mt(!0)},onPressEnter:d,onCompositionStart:Lt,onCompositionEnd:o,onKeyDown:dn,onPaste:s,variant:"borderless",readOnly:Ge})),(0,u.jsxs)("div",{className:"".concat(Zn,"-content-bottom"),children:[R.length>0&&(0,u.jsx)("div",{className:m()("".concat(Zn,"-prefix"),z.prefix),style:te.prefix,children:(0,u.jsxs)(A.Z,{gap:8,children:[xn&&(0,u.jsx)(W.Provider,{value:G,children:(0,u.jsx)(nn,{})}),R]})}),(0,u.jsxs)("div",{className:m()(tt,z.actions),style:te.actions,children:[r.maxLength?(0,u.jsxs)("div",{className:"".concat(tt,"-length"),children:[$n.length,"/",r.maxLength]}):null,(0,u.jsx)(W.Provider,{value:G,children:Z})]})]})]})]})]})}),he=ne;he.Header=se.Z,he.ModeSelect=pn,he.BeforeUIContainer=j;var ie=he},70770:function(on,J,e){"use strict";e.d(J,{Z:function(){return I}});var q=e(89034),h=e(36674),D=e(9343),x=e(48095),b=e(97634),M=e(56044),E=e(68400),L=e.n(E),k=e(9053),g,C=(0,k.vJ)(g||(g=L()([`
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
`])),function(i){return i.theme.prefixCls},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorSuccessBg},function(i){return i.theme.prefixCls},function(i){return i.theme.colorSuccess},function(i){return i.theme.colorErrorBg},function(i){return i.theme.prefixCls},function(i){return i.theme.colorError},function(i){return i.theme.colorWarningBg},function(i){return i.theme.prefixCls},function(i){return i.theme.colorWarning},function(i){return i.theme.colorFillTertiary},function(i){return i.theme.prefixCls},function(i){return i.theme.colorInfo},function(i){return i.theme.colorText},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorBgBase},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorBgBase},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorText}),A=e(93967),P=e.n(A),m=e(21403),n=e(85893);function v(i){var t=(0,M.wv)(),O=t.getPrefixCls,l=O("status-card"),T=i.icon||{success:(0,n.jsx)(q.Z,{}),error:(0,n.jsx)(h.Z,{}),warning:(0,n.jsx)(D.Z,{}),info:(0,n.jsx)(x.Z,{})}[i.status];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C,{}),(0,n.jsxs)("div",{className:P()(l,"".concat(l,"-").concat(i.status)),children:[(0,n.jsxs)("div",{className:"".concat(l,"-header"),children:[(0,n.jsxs)("div",{className:"".concat(l,"-header-top"),children:[(0,n.jsx)("div",{className:"".concat(l,"-header-icon"),children:T}),(0,n.jsx)("div",{className:"".concat(l,"-header-title"),children:i.title})]}),i.description&&(0,n.jsx)("div",{className:"".concat(l,"-header-description"),children:i.description})]}),i.children&&(0,n.jsx)("div",{className:"".concat(l,"-body"),children:i.children})]})]})}v.HITL=function(i){var t=i.title,O=t===void 0?"\u9700\u8981\u7528\u6237\u4EBA\u5DE5\u5E72\u9884":t,l=i.description,T=i.waitButtonText,se=T===void 0?"\u6211\u5DF2\u5B8C\u6210\uFF0C\u7EE7\u7EED\u4EFB\u52A1":T,ae=i.doneButtonText,u=ae===void 0?"\u7528\u6237\u5DF2\u786E\u8BA4":ae,ge=(0,M.wv)(),W=ge.getPrefixCls,X=W("status-card"),ee=i.actions!==void 0?i.actions:i.done?(0,n.jsx)(m.Z,{onClick:i.onDone,type:"primary",disabled:!0,icon:(0,n.jsx)(b.Z,{}),children:u}):(0,n.jsx)(m.Z,{onClick:i.onDone,type:"primary",children:se});return(0,n.jsx)(v,{status:i.done?"success":"info",title:O,children:l||ee?(0,n.jsxs)("div",{className:"".concat(X,"-HITL"),children:[l&&(0,n.jsx)("div",{className:"".concat(X,"-HITL-desc"),children:l}),(0,n.jsx)("div",{className:"".concat(X,"-HITL-button"),children:ee})]}):null})},v.Statistic=function(i){var t=(0,M.wv)(),O=t.getPrefixCls,l=O("status-card");return(0,n.jsx)("div",{className:"".concat(l,"-statistic"),children:i.values.map(function(T){return(0,n.jsxs)("div",{className:"".concat(l,"-statistic-item"),children:[(0,n.jsx)("div",{className:"".concat(l,"-statistic-item-title"),children:T.title}),(0,n.jsx)("div",{className:"".concat(l,"-statistic-item-value"),children:T.value})]})})})};var I=v},7354:function(on,J,e){"use strict";var q=e(15009),h=e.n(q),D=e(9783),x=e.n(D),b=e(97857),M=e.n(b),E=e(77262),L=e.n(E),k=e(93938),g=e.n(k),C=`

`,A=`
`,P=":",m=function(t){return(t!=null?t:"").trim()!==""};function n(){var i="";return new TransformStream({transform:function(O,l){i+=O;var T=i.split(C);T.slice(0,-1).forEach(function(se){m(se)&&l.enqueue(se)}),i=T[T.length-1]},flush:function(O){m(i)&&O.enqueue(i)}})}function v(){return new TransformStream({transform:function(t,O){var l=t.split(A),T=l.reduce(function(se,ae){var u=ae.indexOf(P);if(u===-1)throw new Error('The key-value separator "'.concat(P,'" is not found in the sse line chunk!'));var ge=ae.slice(0,u);if(!m(ge))return se;var W=ae.slice(u+1);return M()(M()({},se),{},x()({},ge,W))},{});Object.keys(T).length!==0&&O.enqueue(T)}})}function I(i,t){var O=i.readableStream,l=i.transformStream;if(!(O instanceof ReadableStream))throw new Error("The options.readableStream must be an instance of ReadableStream.");var T=new TextDecoderStream,se=l?O.pipeThrough(T).pipeThrough(l):O.pipeThrough(T).pipeThrough(n()).pipeThrough(v());return se[Symbol.asyncIterator]=g()(h()().mark(function ae(){var u,ge,W,X;return h()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:u=this.getReader();case 1:return ue.next=4,L()(u.read());case 4:if(ge=ue.sent,W=ge.done,X=ge.value,!W){ue.next=9;break}return ue.abrupt("break",15);case 9:if(X){ue.next=11;break}return ue.abrupt("continue",1);case 11:return ue.next=13,t!=null&&t.openaiCompatible?M()(M()({},X),{},{data:X.data.slice(1)}):X;case 13:ue.next=1;break;case 15:case"end":return ue.stop()}},ae,this)})),se}J.Z=I},32116:function(on,J,e){"use strict";e.d(J,{Z:function(){return q}});function q(h){return new Promise(function(D){return setTimeout(D,h)})}},66366:function(on,J,e){"use strict";e.d(J,{Z:function(){return h}});var q={i8:"1.1.52"},h=q.i8},57657:function(on,J,e){"use strict";e.r(J);var q=e(5574),h=e.n(q),D=e(9053),x=e(67294),b=e(85893),M=function(){var k=(0,x.useState)({x:0,y:0}),g=h()(k,2),C=g[0],A=g[1],P=(0,x.useState)(!1),m=h()(P,2),n=m[0],v=m[1],I=(0,x.useRef)(null),i=E(),t=i.styles,O=i.cx;(0,x.useEffect)(function(){var W=function(ee){if(I.current){var ue=I.current.getBoundingClientRect();A({x:ee.clientX-ue.left,y:ee.clientY-ue.top})}};return window.addEventListener("mousemove",W),function(){return window.removeEventListener("mousemove",W)}},[]),(0,x.useEffect)(function(){var W=setInterval(function(){v(!0),setTimeout(function(){return v(!1)},150)},5e3);return function(){return clearInterval(W)}},[]);var l=function(){var X=32,ee=32,ue=C.x-X,De=C.y-ee,p=6,Be=6,K=Math.sqrt(ue*ue+De*De),xe=50;if(K===0)return{x:0,y:0};var oe=Math.min(K/xe,1),_e=ue/K*p*oe,Y=De/K*Be*oe;return{x:Math.max(-p,Math.min(p,_e)),y:Math.max(-Be,Math.min(Be,Y))}},T=function(X){var ee=32,ue=C.x-ee,De=400;if(Math.abs(ue)<De)return 1;var p=Math.abs(ue)-De,Be=32-De,K=Math.min(p/Be,1);return ue>De?X?1-K*.5:1:ue<-De?X?1:1-K*.5:1},se=l(),ae=l(),u=T(!0),ge=T(!1);return(0,b.jsxs)("div",{ref:I,className:t.container,children:[(0,b.jsx)("div",{className:O(t.eye,t.leftEye,n?t.blinkingEye:""),style:{transform:"translate(".concat(se.x,"px, ").concat(se.y,"px) ").concat(n?"scaleY(0.1)":"scaleY(".concat(u,")"))}}),(0,b.jsx)("div",{className:O(t.eye,t.rightEye,n?t.blinkingEye:""),style:{transform:"translate(".concat(ae.x,"px, ").concat(ae.y,"px) ").concat(n?"scaleY(0.1)":"scaleY(".concat(ge,")"))}})]})};J.default=M;var E=(0,D.kc)(function(L){var k=L.css,g=L.token;return{container:{width:64,height:64,backgroundColor:"black",borderRadius:12,position:"relative",cursor:"pointer",overflow:"hidden",boxShadow:"15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)"},eye:{width:6,height:12,backgroundColor:"white",borderRadius:99,position:"absolute",top:16,transition:"transform 0.1s ease-out"},leftEye:{left:22},rightEye:{left:36},blinkingEye:{transition:"transform 0.05s ease-out"}}})},31295:function(on,J,e){"use strict";e.d(J,{Z:function(){return k}});var q=e(68400),h=e.n(q),D=e(67294),x=e(9053),b=e(56044),M=e(85893),E,L=(0,x.vJ)(E||(E=h()([`
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
`])),function(g){return g.theme.prefixCls},function(g){return g.theme.colorText},function(g){return g.theme.colorTextSecondary});function k(g){var C=(0,b.wv)(),A=C.getPrefixCls,P=A("welcome"),m=typeof g.logo=="string"?(0,M.jsx)("img",{className:P+"-logo",src:g.logo}):g.logo;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(L,{}),(0,M.jsxs)("div",{className:P,style:g.style,children:[m,(0,M.jsxs)("div",{children:[(0,M.jsx)("div",{className:P+"-title",children:g.title}),(0,M.jsx)("div",{className:P+"-desc",children:g.desc})]})]})]})}},64437:function(on,J,e){"use strict";e.d(J,{Z:function(){return P}});var q=e(97857),h=e.n(q),D=e(67294),x=e(68997),b=e(56044),M=e(38850),E=e(68400),L=e.n(E),k=e(9053),g,C=(0,k.vJ)(g||(g=L()([`
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
`])),function(n){return n.theme.prefixCls},function(n){var v=n.theme;return v.colorText},function(n){var v=n.theme;return v.colorTextSecondary},function(n){var v=n.theme;return v.colorFillQuaternary},function(n){var v=n.theme;return v.colorText},function(n){var v=n.theme;return v.colorFillTertiary}),A=e(85893);function P(n){var v=n.greeting,I=n.avatar,i=n.description,t=n.prompts,O=n.onClick,l=(0,b.wv)().getPrefixCls("welcome-prompts");return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(C,{}),(0,A.jsxs)("div",{className:l,children:[I&&(typeof I=="string"?(0,A.jsx)(x.Z,{src:I,shape:"square",size:64}):I),v&&(0,A.jsx)("div",{className:"".concat(l,"-greeting"),children:v}),i&&(0,A.jsx)("div",{className:"".concat(l,"-description"),children:i}),(t==null?void 0:t.length)>0&&(0,A.jsx)("div",{className:"".concat(l,"-prompts"),children:t.map(function(T){var se=typeof T=="string"?{label:T,value:T}:h()(h()({},T),{},{label:T.label||T.value,value:T.value});return(0,A.jsx)(m,{prompt:se,prefixCls:l,onClick:O},se.value)})})]})]})}function m(n){var v=n.prefixCls;return(0,A.jsxs)("div",{className:"".concat(v,"-prompt"),onClick:function(){var i;return(i=n.onClick)===null||i===void 0?void 0:i.call(n,n.prompt.value)},children:[(0,A.jsx)("img",{className:"".concat(v,"-prompt-icon"),src:"https://img.alicdn.com/imgextra/i3/O1CN01822qqr1PVyaK7MYtn_!!6000000001847-2-tps-40-40.png",alt:""}),(0,A.jsx)("span",{className:"".concat(v,"-prompt-label"),children:n.prompt.label}),(0,A.jsx)(M.Z,{})]})}},43601:function(on,J,e){"use strict";e.r(J),e.d(J,{AIGC:function(){return xe.Z},Accordion:function(){return t.Z},AgentScopeRuntimeWebUI:function(){return n.Z},AssetsPreview:function(){return oe.Z},Attachments:function(){return l.Z},Bubble:function(){return T.Z},ChatAnywhere:function(){return L.ZP},ChatInput:function(){return ue.Z},ConfigProvider:function(){return q.ZP},Conversations:function(){return se.Z},CustomCardsContext:function(){return D.NR},CustomCardsProvider:function(){return D.xy},DeepThink:function(){return O.Z},DeepThinking:function(){return O.Z},DefaultCards:function(){return m},DeviceAction:function(){return ae.Z},Disclaimer:function(){return u.Z},GenerativeUISandbox:function(){return _e.Z},HistoryPanel:function(){return se.Z},ImageGenerator:function(){return ge.Z},Markdown:function(){return K.Z},Mermaid:function(){return W.Z},OperateCard:function(){return X.Z},Process:function(){return t.Z},Rag:function(){return ee.Sn},Sender:function(){return ue.Z},SparkChatProvider:function(){return x.ZP},StatusCard:function(){return De.Z},Stream:function(){return M.Z},Thinking:function(){return ee.BI},TodoList:function(){return ee.B4},ToolCall:function(){return ee.x4},WebSearch:function(){return ee.fz},Welcome:function(){return Be.Z},WelcomePrompts:function(){return Y.Z},createCard:function(){return E.L},sleep:function(){return p.Z},useChatAnywhere:function(){return k.TQ},useCustomCardsContext:function(){return D.HJ},useGlobalContext:function(){return b.bN},useInput:function(){return g.G},useMessages:function(){return C.y},useProviderContext:function(){return x.wv},useSessionList:function(){return A.x},uuid:function(){return P.Z},version:function(){return h.Z}});var q=e(55839),h=e(66366),D=e(83962),x=e(56044),b=e(92049),M=e(7354),E=e(50130),L=e(29041),k=e(76289),g=e(37254),C=e(4421),A=e(61316),P=e(88773),m=e(24963),n=e(35825),v=e(22863),I={};for(var i in v)["default","ConfigProvider","version","CustomCardsContext","CustomCardsProvider","SparkChatProvider","useCustomCardsContext","useGlobalContext","useProviderContext","Stream","createCard","ChatAnywhere","useChatAnywhere","useInput","useMessages","useSessionList","uuid","DefaultCards","AgentScopeRuntimeWebUI","Accordion","Process","DeepThink","DeepThinking","Attachments","Bubble","Conversations","HistoryPanel","DeviceAction","Disclaimer","ImageGenerator","Mermaid","OperateCard","ChatInput","Sender","StatusCard","sleep","Welcome","Markdown","AIGC","AssetsPreview","GenerativeUISandbox","WelcomePrompts"].indexOf(i)<0&&(I[i]=function(Oe){return v[Oe]}.bind(0,i));e.d(J,I);var t=e(487),O=e(14082),l=e(36417),T=e(52471),se=e(9368),ae=e(55031),u=e(10325),ge=e(2534),W=e(12181),X=e(31382),ee=e(56809),ue=e(66672),De=e(70770),p=e(32116),Be=e(31295),K=e(66109),xe=e(86578),oe=e(34487),_e=e(80115),Y=e(64437)}}]);
