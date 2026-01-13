(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1997],{86578:function($e,F,e){"use strict";e.d(F,{Z:function(){return ce}});var z=e(97857),h=e.n(z),D=e(9783),g=e.n(D),E=e(13769),j=e.n(E),b=e(67294),A=e(93967),k=e.n(A),f=e(56044),v=e(66672),_=e(36417),y=e(44294),c=e(12624),t=e(41154),x=e(68400),B=e.n(x),s=e(9053),n,T=(0,s.vJ)(n||(n=B()([`
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
`])),function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls},function(S){return S.theme.borderRadius},function(S){return S.theme.colorBorderSecondary},function(S){return S.theme.colorBgBase},function(S){return S.theme.colorText}),u=e(85893),P=["className","icon"],ee=t.Z.Dragger,$=function(ie){var pe=ie.className,De=ie.icon,We=j()(ie,P),Qe=(0,f.wv)(),Je=Qe.getPrefixCls,R=Je("media-upload");return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(T,{}),(0,u.jsx)(ee,h()(h()({showUploadList:!1,className:k()(R,pe)},We),{},{children:(0,u.jsxs)("div",{className:k()("".concat(R,"-thumbnail")),children:[(0,u.jsx)("div",{className:k()("".concat(R,"-thumbnail-gradient"))}),De||(0,u.jsx)(c.Z,{className:k()("".concat(R,"-thumbnail-icon"))})]})}))]})},d=$,ne,J=(0,s.vJ)(ne||(ne=B()([`
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
`])),function(S){return S.theme.prefixCls},function(S){return S.theme.colorText},function(S){return S.theme.colorTextTertiary}),Z=function(ie){var pe=ie.className,De=ie.title,We=ie.description,Qe=(0,f.wv)(),Je=Qe.getPrefixCls,R=Je("media-info"),de=!!De||!!We;return de?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(J,{}),(0,u.jsxs)("div",{className:k()(R,pe),children:[De&&(0,u.jsx)("div",{className:k()("".concat(R,"-title")),children:De}),We&&(0,u.jsx)("div",{className:k()("".concat(R,"-description")),children:We})]})]}):null},G=Z,ae,Ce=(0,s.vJ)(ae||(ae=B()([`
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
`])),function(S){return S.theme.prefixCls},function(S){return S.theme.colorBorderSecondary},function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls}),p=["title","description","maxCount"],Me=function(ie){var pe=ie.className,De=ie.onUpload,We=De===void 0?[]:De,Qe=ie.attachedFiles,Je=Qe===void 0?[[]]:Qe,R=ie.onFileChange,de=(0,f.wv)(),Se=de.getPrefixCls,O=(0,b.useContext)(y.a),Y=O.focus,Q=O.enableFocusExpand,_e=Se("aigc-sender-header"),Re=(0,b.useMemo)(function(){return Je.flat().length>0?!0:We.length<=0?!1:!!(Y||!Q)},[We,Je,Q,Y]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(Ce,{}),(0,u.jsx)(v.Z.Header,{closable:!1,open:Re,children:(0,u.jsx)("div",{className:k()(_e,pe),tabIndex:0,children:We==null?void 0:We.map(function(Le,Ee){var ke=Le.title,Oe=Le.description,Ke=Le.maxCount,He=Ke===void 0?1:Ke,ze=j()(Le,p),Ie=Je[Ee]||[];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d,h()({className:k()(g()({},"".concat(_e,"-upload-hidden"),Ie.length>=He)),maxCount:He,fileList:Ie,onChange:function(r){Le.beforeUpload&&r.file.status&&R(Ee,r.fileList),Le.beforeUpload||R(Ee,r.fileList)},showUploadList:!1},ze),"upload-".concat(Ee)),Ie.length>0&&(0,u.jsx)(_.Z,{items:Ie,onChange:function(r){return R(Ee,r.fileList)}},"attachments-".concat(Ee)),He===1&&(0,u.jsx)(G,{title:ke,description:Oe},"info-".concat(Ee))]})})})})]})},w=Me,ce={SenderHeader:w,Info:G,Upload:d}},487:function($e,F,e){"use strict";e.d(F,{Z:function(){return Ce}});var z=e(9783),h=e.n(z),D=e(97857),g=e.n(D),E=e(5574),j=e.n(E),b=e(67294),A=e(93967),k=e.n(A),f=e(56044),v=e(85893);function _(p){var Me=(0,f.wv)(),w=Me.getPrefixCls,ce=w("accordion-content-body");return(0,v.jsxs)("div",{className:ce,children:[p.headerLeft||p.headerRight?(0,v.jsxs)("div",{className:"".concat(ce,"-header"),children:[p.headerLeft,(0,v.jsx)("div",{style:{flex:1}}),p.headerRight]}):null,(0,v.jsx)("div",{className:"".concat(ce,"-body"),children:p.children})]})}var y=e(9361);function c(p){var Me=(0,f.wv)(),w=Me.theme,ce=Me.getPrefixCls,S=(w==null?void 0:w.algorithm)===y.Z.darkAlgorithm,ie=ce("accordion-soft-light-title");return(0,v.jsx)("div",{className:ie,style:S?{}:{color:"rgba(38, 36, 76, 0.88)"},children:p.children})}var t=e(68400),x=e.n(t),B=e(9053),s,n=(0,B.vJ)(s||(s=x()([`
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
`])),function(p){return p.theme.prefixCls},function(p){return p.theme.colorSuccess},function(p){return p.theme.prefixCls},function(p){return p.theme.colorError},function(p){return p.theme.colorTextSecondary},function(p){return p.theme.colorBgBase},function(p){return p.theme.borderRadiusLG},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorBorder},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorBgBase},function(p){return p.theme.colorText},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.colorFillTertiary},function(p){return p.theme.prefixCls},function(p){return p.theme.colorTextSecondary},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorFillTertiary},function(p){return p.theme.colorText},function(p){return p.theme.colorBgBase}),T=e(40443),u=e(89034),P=e(9343),ee=e(36674),$=e(9838),d=e(28387),ne=e(16592);function J(p){var Me=(0,f.wv)(),w=Me.getPrefixCls,ce=w("accordion-group"),S=b.useState(p.defaultOpen),ie=j()(S,2),pe=ie[0],De=ie[1],We=p.open!==void 0?p.open:pe,Qe=p.inline?"close":We?"open":"close",Je=(0,b.useMemo)(function(){if(p.icon)return p.icon;if(p.status==="generating")return(0,v.jsx)(T.Z,{className:"".concat(ce,"-icon-loading"),spin:!0});if(p.status==="finished")return(0,v.jsx)(u.Z,{className:"".concat(ce,"-icon-success")});if(p.status==="interrupted")return(0,v.jsx)(P.Z,{});if(p.status==="error")return(0,v.jsx)(ee.Z,{className:"".concat(ce,"-icon-error")})},[p.status,p.icon]),R=(0,b.useMemo)(function(){return p.steps?p.steps.map(function(de,Se){var O=Se===0,Y=Se===p.steps.length-1;return(0,v.jsx)(J,g()(g()({},de),{},{isFirst:O,isLast:Y}),de.id||Se)}):p.children},[p.steps,p.children]);return(0,v.jsxs)("div",{className:k()("".concat(ce),"".concat(ce,"-").concat(Qe)),children:[(0,v.jsxs)("div",{className:k()("".concat(ce,"-header"),"".concat(ce,"-header-").concat(Qe)),onClick:function(){return R&&p.open===void 0&&De(!pe)},children:[Je?(0,v.jsx)("div",{className:k()("".concat(ce,"-header-icon"),h()(h()(h()({},"".concat(ce,"-header-icon-line"),p.iconLine),"".concat(ce,"-header-icon-first"),p.isFirst),"".concat(ce,"-header-icon-last"),p.isLast&&Qe==="close"||p.level)),children:Je}):null,(0,v.jsx)("div",{children:p.title}),R&&(0,v.jsx)("div",{className:k()("".concat(ce,"-header-arrow")),children:We?(0,v.jsx)(d.Z,{}):(0,v.jsx)($.Z,{})}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{style:{flex:1}}),p.rightChildren]})]}),(0,v.jsx)(G,{prefixCls:ce,stateOpen:We,status:Qe,inline:p.inline,content:R,bodyStyle:p.bodyStyle,level:p.level})]})}var Z={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function G(p){var Me=(0,b.useRef)(null);if(!p.content)return null;var w=p.prefixCls,ce=p.stateOpen,S=p.inline,ie=p.bodyStyle,pe=p.level;return(0,v.jsx)(ne.ZP,{nodeRef:Me,in:ce,timeout:300,children:function(We){return(0,v.jsx)("div",{style:g()(g()(g()({},ie),pe?{marginTop:0}:{}),{},{transition:"opacity ".concat(300,"ms ease-in-out")},Z[We]),className:k()("".concat(w,"-body"),"".concat(w,"-body-").concat(ce?"open":"close"),h()({},"".concat(w,"-body-inline"),S)),children:p.content})}})}function ae(p){var Me=p.level,w=Me===void 0?1:Me,ce=p.isFirst,S=ce===void 0?!0:ce,ie=p.isLast,pe=ie===void 0?!0:ie;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n,{}),(0,v.jsx)(J,g()(g()({},p),{},{level:w,isFirst:S,isLast:pe}))]})}ae.BodyContent=_,ae.SoftLightTitle=c;var Ce=ae},14082:function($e,F,e){"use strict";e.d(F,{Z:function(){return b}});var z=e(487),h=e(56044),D=e(9361),g=e(93967),E=e.n(g),j=e(85893);function b(A){var k=(0,h.wv)(),f=k.theme,v=k.getPrefixCls,_=v("accordion-deep-thinking"),y=(f==null?void 0:f.algorithm)===D.Z.darkAlgorithm,c=(0,j.jsx)("img",{style:{display:"block",width:16,height:16,filter:y?"invert(1)  brightness(100%) saturate(0%)":""},src:"https://img.alicdn.com/imgextra/i2/O1CN01QZgWRv1I4JM0BAZ9O_!!6000000000839-54-tps-56-56.apng"}),t=A.title||"Deep thinking";A.loading&&(t+="...");var x=A.loading?(0,j.jsx)(z.Z.SoftLightTitle,{children:t}):t,B=A.maxHeight?{maxHeight:A.maxHeight,overflowY:"auto"}:{},s=A.defaultOpen!==void 0?A.defaultOpen:A.autoCloseOnFinish&&!A.loading?!1:void 0;return(0,j.jsx)(z.Z,{title:x,status:A.loading?"generating":"finished",icon:A.loading?c:null,defaultOpen:s,open:A.open,bodyStyle:B,inline:!0,children:(0,j.jsx)("div",{className:E()(_,A.className),children:A.content||"..."})})}},74823:function($e,F,e){"use strict";e.d(F,{Z:function(){return it}});var z=e(97857),h=e.n(z),D=e(9783),g=e.n(D),E=e(56044),j=e(68400),b=e.n(j),A=e(9053),k,f=(0,A.vJ)(k||(k=b()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.colorBgBase},function(a){return a.theme.prefixCls},function(a){return a.theme.colorBgBase},function(a){return a.theme.prefixCls},function(a){return a.theme.colorFillTertiary},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),v=e(93967),_=e.n(v),y=e(17909),c=e(59214),t=e(67294),x=e(81759),B=e(49131),s=e(21766),n=e(85893),T=(0,c.kr)(void 0);function u(a){try{var C=(0,c.Sz)(T,a);return C}catch(l){return{}}}function P(a){var C=a.children,l=(0,y.Z)(),m=(0,t.useMemo)(function(){var se=a.options.theme||{};return h()(h()({},a.options),{},{theme:h()(h()({},se),{},{narrowMode:!l.lg||se.narrowMode})})},[a.options,l.lg]),L=(0,t.useMemo)(function(){var se=m.theme.colorPrimary,q=m.theme.colorBgBase,re=m.theme.colorTextBase,ue=m.theme.darkMode;if(se||ue){var le=(0,x.Z)((0,B.Z)({primaryHex:se,bgBaseHex:q,textBaseHex:re,darkMode:ue}));return le}},[m.theme.colorPrimary,m.theme.colorBgBase,m.theme.colorTextBase,m.theme.darkMode]),U=(0,n.jsx)(T.Provider,{value:m,children:C});if(L){var xe=m.theme.prefix||"agentscope-runtime-webui";return(0,n.jsx)(s.ZP,h()(h()({},L),{},{style:{height:"100%"},prefix:xe,prefixCls:xe,children:U}))}return U}var ee=null,$=e(15009),d=e.n($),ne=e(99289),J=e.n(ne),Z=e(5574),G=e.n(Z),ae=e(66672),Ce=e(10325),p=e(79785),Me=(0,c.kr)({loading:!1,setLoading:function(){},getLoading:function(){return!1},disabled:!1,setDisabled:function(){},getDisabled:function(){return!1}});function w(a){var C=(0,p.Z)(!1),l=G()(C,3),m=l[0],L=l[1],U=l[2],xe=(0,p.Z)(!1),se=G()(xe,3),q=se[0],re=se[1],ue=se[2];return(0,n.jsx)(Me.Provider,{value:{loading:m,setLoading:L,getLoading:U,disabled:q,setDisabled:re,getDisabled:ue},children:a.children})}var ce=function(C){return(0,c.Sz)(Me,C)},S=e(13769),ie=e.n(S),pe=e(41154),De=e(64057),We=e(81644),Qe=e(36417),Je=["trigger"];function R(a,C){var l=(0,p.Z)([]),m=G()(l,3),L=m[0],U=m[1],xe=m[2],se=a||{},q=se.trigger,re=ie()(se,Je);if(re!=null&&re.customRequest){var ue=(0,n.jsx)(pe.Z,h()(h()({fileList:L,showUploadList:!1,onChange:function(je){U(je.fileList)}},re),{},{disabled:C==null?void 0:C.disabled,children:q?t.createElement(q,{disabled:C==null?void 0:C.disabled}):(0,n.jsx)(De.Z,{disabled:C==null?void 0:C.disabled,icon:(0,n.jsx)(We.Z,{}),bordered:!1})})),le=(0,n.jsx)(ae.Z.Header,{closable:!1,open:(L==null?void 0:L.length)>0,children:(0,n.jsx)(Qe.Z,{items:L,onChange:function(je){return U(je.fileList)}})});return{fileList:L,getFileList:xe,setFileList:U,uploadIconButton:ue,uploadFileListHeader:le}}else return{enabled:!1}}function de(a){var C=(0,p.Z)(""),l=G()(C,3),m=l[0],L=l[1],U=l[2],xe=(0,E.wv)().getPrefixCls("chat-anywhere-input"),se=u(function(rt){return rt.sender}),q=ce(function(rt){return rt}),re=se||{},ue=re.placeholder,le=ue===void 0?"":ue,Te=re.disclaimer,je=Te===void 0?"":Te,Fe=re.maxLength,Ye=re.beforeSubmit,Ne=Ye===void 0?function(){return Promise.resolve(!0)}:Ye,Be=re.beforeUI,en=re.afterUI,kn=re.scalable,zn=kn===void 0?!0:kn,ln=re.attachments,un=R(ln,{disabled:q.disabled}),on=un.getFileList,Mn=un.setFileList,jn=un.uploadIconButton,Gn=un.uploadFileListHeader,tt=(0,t.useCallback)(J()(d()().mark(function rt(){var Ze,ot;return d()().wrap(function(qn){for(;;)switch(qn.prev=qn.next){case 0:return qn.next=2,Ne();case 2:if(Ze=qn.sent,Ze){qn.next=5;break}return qn.abrupt("return");case 5:ot=((on==null?void 0:on())||[]).filter(function(mt){var ft;return(ft=mt.response)===null||ft===void 0?void 0:ft.url}),a.onSubmit({query:U(),fileList:ot}),L(""),Mn&&Mn([]);case 9:case"end":return qn.stop()}},rt)})),[]),On=(0,t.useCallback)(function(){a.onCancel()},[]);return(0,n.jsxs)("div",{className:xe,children:[(0,n.jsxs)("div",{className:"".concat(xe,"-wrapper"),children:[Be,(0,n.jsx)(ae.Z,{loading:q.loading,disabled:q.disabled,scalable:zn,placeholder:le,value:m,prefix:(0,n.jsx)(n.Fragment,{children:jn}),header:Gn,onChange:L,maxLength:Fe,onSubmit:tt,onCancel:On}),en]}),je?(0,n.jsx)(Ce.Z,{desc:je}):(0,n.jsx)("div",{className:"".concat(xe,"-blank")})]})}var Se=e(9146),O=e(19632),Y=e.n(O),Q=(0,c.kr)({messages:[],setMessages:function(){},getMessages:function(){return[]}});function _e(a){var C=(0,p.Z)([]),l=G()(C,3),m=l[0],L=l[1],U=l[2],xe={messages:m,setMessages:L,getMessages:U};return(0,n.jsx)(Q.Provider,{value:xe,children:a.children})}var Re=function(){var C=(0,c.Sz)(Q,function(q){return{setMessages:q.setMessages,getMessages:q.getMessages}}),l=C.setMessages,m=C.getMessages,L=t.useCallback(function(){l([])},[]),U=t.useCallback(function(q){return m().find(function(re){return re.id===q})},[]),xe=t.useCallback(function(q){l(function(re){return re.filter(function(ue){return ue.id!==q.id})})},[]),se=t.useCallback(function(q){l(function(re){var ue=re.findIndex(function(Te){return Te.id===q.id});if(ue>-1){var le=h()(h()({},re[ue]),q);return[].concat(Y()(re.slice(0,ue)),[le],Y()(re.slice(ue+1)))}else return[].concat(Y()(re),[q])})},[]);return{getMessages:m,removeAllMessages:L,getMessage:U,removeMessage:xe,updateMessage:se}},Le=e(78234),Ee=e(73935),ke=e(2093),Oe=(0,c.kr)({sessions:[],setSessions:function(){},getSessions:function(){return[]},currentSessionId:void 0,setCurrentSessionId:function(){},getCurrentSessionId:function(){return""}});function Ke(a){var C=u(function(Te){return Te.session}),l=(0,p.Z)([]),m=G()(l,3),L=m[0],U=m[1],xe=m[2],se=(0,p.Z)(void 0),q=G()(se,3),re=q[0],ue=q[1],le=q[2];return(0,Le.Z)(J()(d()().mark(function Te(){var je,Fe;return d()().wrap(function(Ne){for(;;)switch(Ne.prev=Ne.next){case 0:return Ne.next=2,C.api.getSessionList();case 2:Fe=Ne.sent,U(Fe),ue(Fe==null||(je=Fe[0])===null||je===void 0?void 0:je.id);case 5:case"end":return Ne.stop()}},Te)}))),(0,n.jsx)(Oe.Provider,{value:{sessions:L,setSessions:U,getSessions:xe,currentSessionId:re,setCurrentSessionId:ue,getCurrentSessionId:le},children:a.children})}var He=function(){var C=(0,c.Sz)(Oe,function(je){return je}),l=C.setSessions,m=C.getSessions,L=C.getCurrentSessionId,U=C.setCurrentSessionId,xe=C.currentSessionId,se=u(function(je){return je.session}),q=(0,c.Sz)(Q,function(je){return je.setMessages}),re=t.useCallback(function(){var je=J()(d()().mark(function Fe(Ye){var Ne;return d()().wrap(function(en){for(;;)switch(en.prev=en.next){case 0:return en.next=2,se.api.removeSession(Ye);case 2:Ne=en.sent,q([]),U(void 0),l(Ne);case 6:case"end":return en.stop()}},Fe)}));return function(Fe){return je.apply(this,arguments)}}(),[]),ue=t.useCallback(function(){var je=J()(d()().mark(function Fe(Ye){var Ne;return d()().wrap(function(en){for(;;)switch(en.prev=en.next){case 0:if(!Ye.id){en.next=6;break}return en.next=3,se.api.updateSession(Ye);case 3:en.t0=en.sent,en.next=9;break;case 6:return en.next=8,se.api.createSession(Ye);case 8:en.t0=en.sent;case 9:return Ne=en.t0,l(Ne),en.abrupt("return",Ye);case 12:case"end":return en.stop()}},Fe)}));return function(Fe){return je.apply(this,arguments)}}(),[]),le=t.useCallback(function(){var je=J()(d()().mark(function Fe(Ye){var Ne;return d()().wrap(function(en){for(;;)switch(en.prev=en.next){case 0:return en.next=2,ue({name:(Ye==null?void 0:Ye.name)||"",messages:[]});case 2:return Ne=en.sent,U(Ne.id),q(Ne.messages),en.abrupt("return",Ne.id);case 6:case"end":return en.stop()}},Fe)}));return function(Fe){return je.apply(this,arguments)}}(),[]),Te=t.useCallback(function(je){U(je)},[]);return(0,ke.Z)(J()(d()().mark(function je(){var Fe,Ye;return d()().wrap(function(Be){for(;;)switch(Be.prev=Be.next){case 0:return Ee.flushSync(function(){q([])}),Be.next=3,se.api.getSession(xe);case 3:if(Be.t2=Fe=Be.sent,Be.t1=Be.t2===null,Be.t1){Be.next=7;break}Be.t1=Fe===void 0;case 7:if(!Be.t1){Be.next=11;break}Be.t3=void 0,Be.next=12;break;case 11:Be.t3=Fe.messages;case 12:if(Be.t0=Be.t3,Be.t0){Be.next=15;break}Be.t0=[];case 15:Ye=Be.t0,q(Ye);case 17:case"end":return Be.stop()}},je)})),[xe]),{changeCurrentSessionId:Te,getCurrentSessionId:L,getSessions:m,removeSession:re,updateSession:ue,createSession:le}},ze=e(68997),Ie,dn=(0,A.vJ)(Ie||(Ie=b()([`
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
`])),function(a){return a.theme.prefixCls},function(a){var C=a.theme;return C.colorText},function(a){var C=a.theme;return C.colorTextSecondary},function(a){var C=a.theme;return C.colorFillQuaternary},function(a){var C=a.theme;return C.colorText},function(a){var C=a.theme;return C.colorFillTertiary}),r=e(38850),ye=["render"];function Ae(a){var C=u(function(re){return re.welcome}),l=(0,E.wv)().getPrefixCls("chat-anywhere-welcome-default");if(!C)return null;var m=C.render,L=ie()(C,ye);if(m)return C.render({greeting:C.greeting,avatar:C.avatar,description:C.description,prompts:C.prompts,onSubmit:a.onSubmit});var U=L.greeting,xe=L.avatar,se=L.prompts,q=L.description;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(dn,{}),(0,n.jsxs)("div",{className:l,children:[xe&&(0,n.jsx)(ze.Z,{src:xe,shape:"square",size:64}),U&&(0,n.jsx)("div",{className:"".concat(l,"-greeting"),children:U}),q&&(0,n.jsx)("div",{className:"".concat(l,"-description"),children:q}),(se==null?void 0:se.length)>0&&(0,n.jsx)("div",{className:"".concat(l,"-prompts"),children:se.map(function(re){var ue=typeof re=="string"?{label:re,value:re}:h()(h()({},re),{},{label:re.label||re.value,value:re.value});return(0,n.jsx)(Pe,{prompt:ue,onSubmit:a.onSubmit},ue.value)})})]})]})}function Pe(a){var C=(0,E.wv)().getPrefixCls("chat-anywhere-welcome-default");return(0,n.jsxs)("div",{className:"".concat(C,"-prompt"),onClick:function(){return a.onSubmit({query:a.prompt.value})},children:[(0,n.jsx)("img",{className:"".concat(C,"-prompt-icon"),src:"https://img.alicdn.com/imgextra/i3/O1CN01822qqr1PVyaK7MYtn_!!6000000001847-2-tps-40-40.png",alt:""}),(0,n.jsx)("span",{className:"".concat(C,"-prompt-label"),children:a.prompt.label}),(0,n.jsx)(r.Z,{})]})}function ge(a){var C=(0,c.Sz)(Me,function(U){return U.loading}),l=(0,c.Sz)(Q,function(U){return U.messages}),m=(0,E.wv)().getPrefixCls("chat-anywhere-message-list"),L=(0,c.Sz)(Oe,function(U){return U.currentSessionId});return l.length===0?(0,n.jsx)("div",{className:_()(m,"".concat(m,"-welcome")),children:(0,n.jsx)(Ae,{onSubmit:a.onSubmit})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Se.Z.List,{smooth:C,classNames:{wrapper:m},items:l},L)})}var tn,sn=(0,A.vJ)(tn||(tn=b()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),cn=e(32116);function o(a){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];(0,t.useEffect)(function(){return document.addEventListener(a.type,a.callback),function(){document.removeEventListener(a.type,a.callback)}},C)}var H=function(C){var l=C.type,m=C.data;document.dispatchEvent(new CustomEvent(l,{detail:m}))},X=e(88773),fe=e(12444),ve=e.n(fe),M=e(72004),oe=e.n(M),N=function(a){return a.Created="created",a.InProgress="in_progress",a.Completed="completed",a.Canceled="canceled",a.Failed="failed",a.Rejected="rejected",a.Unknown="unknown",a}({}),V=function(a){return a.ASSISTANT="assistant",a.USER="user",a.SYSTEM="system",a}({}),W=function(a){return a.MESSAGE="message",a.REASONING="reasoning",a.PLUGIN_CALL="plugin_call",a.PLUGIN_CALL_OUTPUT="plugin_call_output",a.FUNCTION_CALL="function_call",a.FUNCTION_CALL_OUTPUT="function_call_output",a.COMPONENT_CALL="component_call",a.COMPONENT_CALL_OUTPUT="component_call_output",a.MCP_LIST_TOOLS="mcp_list_tools",a.MCP_APPROVAL_REQUEST="mcp_approval_request",a.MCP_CALL="mcp_call",a.MCP_CALL_OUTPUT="mcp_call_output",a.MCP_APPROVAL_RESPONSE="mcp_approval_response",a.HEARTBEAT="heartbeat",a.ERROR="error",a}({}),i=function(a){return a.TEXT="text",a.DATA="data",a.IMAGE="image",a.AUDIO="audio",a.FILE="file",a.REFUSAL="refusal",a}({}),K=function(){function a(C){var l,m=this;ve()(this,a),g()(this,"data",void 0);var L=[this.buildTextContent(C.query)];(l=C.fileList)!==null&&l!==void 0&&l.length&&C.fileList.forEach(function(U){m.isImageFile(U)?L.push(m.buildImageContent(U)):L.push(m.buildFileContent(U))}),this.data={input:[{role:"user",type:W.MESSAGE,content:L}]}}return oe()(a,[{key:"isImageFile",value:function(l){return l.type.indexOf("image/")===0}},{key:"buildImageContent",value:function(l){var m;return{type:i.IMAGE,image_url:(m=l.response)===null||m===void 0?void 0:m.url,status:N.Created}}},{key:"buildTextContent",value:function(l){return{type:i.TEXT,text:l,status:N.Created}}},{key:"buildFileContent",value:function(l){var m;return{type:i.FILE,file_url:(m=l.response)===null||m===void 0?void 0:m.url,file_name:l.name,file_size:l.size,status:N.Created}}}],[{key:"getHistoryMessages",value:function(l){return l.reduce(function(m,L){var U;return(U=L.cards)!==null&&U!==void 0&&U.length?m.concat(L.cards[0].data.input||L.cards[0].data.output):m},[])}}]),a}(),I=K;function te(a){var C=a.currentQARef,l=Re(),m=l.updateMessage,L=l.getMessages,U=l.removeMessage,xe=(0,t.useCallback)(function(ue){return C.current.abortController=new AbortController,C.current.request={id:(0,X.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new I(ue).data}]},Ee.flushSync(function(){m(C.current.request)}),C.current.request},[C,m]),se=(0,t.useCallback)(function(){return C.current.response={id:(0,X.Z)(),role:"assistant",cards:[],msgStatus:"generating"},m(C.current.response),C.current.response},[C,m]),q=(0,t.useCallback)(function(){return I.getHistoryMessages(L())},[L]),re=(0,t.useCallback)(function(ue){Ee.flushSync(function(){U({id:ue})})},[U]);return{createRequestMessage:xe,createResponseMessage:se,getHistoryMessages:q,updateMessage:m,removeMessageById:re,getMessages:L}}var he=e(44987),we=e.n(he),me=e(7354),an=e(64599),Ge=e.n(an),Xe=e(93513),be=function(){function a(C){var l=C.id,m=C.status,L=C.created_at;ve()(this,a),g()(this,"data",void 0),this.data={id:l,output:[],object:"response",status:m||N.Created,created_at:L||Date.now()}}return oe()(a,[{key:"handleResponse",value:function(l){this.data=(0,Xe.produce)(this.data,function(m){l.output||(l.output=[]),Object.assign(m,l)})}},{key:"handleMessage",value:function(l){this.data=(0,Xe.produce)(this.data,function(m){m.output||(m.output=[]);var L=m.output.findIndex(function(xe){return xe.id===l.id});if(L>=0){var U=m.output[L].content;Object.assign(m.output[L],l),(!l.content||l.content.length===0)&&(m.output[L].content=U)}else m.output.push(l)})}},{key:"handleContent",value:function(l){this.data=(0,Xe.produce)(this.data,function(m){var L=m.output.find(function(xe){return xe.id===l.msg_id});if(!L){console.warn("Message not found for content:",l.msg_id);return}if(L.content||(L.content=[]),l.delta){var U=L.content[L.content.length-1];U&&U.delta?l.type===i.TEXT&&U.type===i.TEXT?U.text+=l.text:l.type===i.IMAGE?U.image_url=l.image_url:l.type===i.DATA&&(U.data=l.data):L.content.push(l)}else L.content.length>0?Object.assign(L.content[L.content.length-1],l):L.content.push(l)})}},{key:"handleError",value:function(l){this.data=(0,Xe.produce)(this.data,function(m){m.status=N.Failed,m.output.push({status:N.Failed,type:W.ERROR,content:[],id:(0,X.Z)(),role:"assistant",code:l.code,message:typeof l.message=="string"?l.message:JSON.stringify(l.message)})})}},{key:"handle",value:function(l){if(l.object==="response")this.handleResponse(l);else if(l.object==="message"){if(l.type===W.HEARTBEAT)return this.data;this.handleMessage(l)}else l.object==="content"?this.handleContent(l):this.handleError(l);return this.data}},{key:"cancel",value:function(){return this.data=(0,Xe.produce)(this.data,function(l){a.maybeGenerating(l)&&(l.status=N.Canceled),l.output.forEach(function(m){a.maybeGenerating(m)&&(m.status=N.Canceled,m.content.forEach(function(L){a.maybeGenerating(L)&&(L.status=N.Canceled)}))})}),this.data}}],[{key:"mergeToolMessages",value:function(l){var m=new Map,L=[],U=Ge()(l),xe;try{var se=function(){var re,ue,le=xe.value;if(a.maybeToolInput(le)&&(re=le.content)!==null&&re!==void 0&&re.length){var Te=le.content[0],je=Te.data.call_id||Te.data.name;m.set(je,Te),L.push(le)}else if(a.maybeToolOutput(le)&&(ue=le.content)!==null&&ue!==void 0&&ue.length){var Fe=le.content[0],Ye=Fe.data.call_id||Fe.data.name,Ne=m.get(Ye);Ne&&(L=L.map(function(Be){if(!a.maybeToolInput(Be))return Be;var en=Be.content[0],kn=en.data.call_id||en.data.name;return kn===Ye?h()(h()({},le),{},{content:[].concat(Y()(Be.content),[Fe])}):Be}))}else L.push(le)};for(U.s();!(xe=U.n()).done;)se()}catch(q){U.e(q)}finally{U.f()}return L}},{key:"maybeToolOutput",value:function(l){return[W.FUNCTION_CALL_OUTPUT,W.PLUGIN_CALL_OUTPUT,W.COMPONENT_CALL_OUTPUT,W.MCP_CALL_OUTPUT].includes(l.type)}},{key:"maybeToolInput",value:function(l){return[W.FUNCTION_CALL,W.PLUGIN_CALL,W.COMPONENT_CALL,W.MCP_CALL].includes(l.type)}},{key:"maybeGenerating",value:function(l){return[N.InProgress,N.Created].includes(l.status)}},{key:"maybeDone",value:function(l){return[N.Completed,N.Canceled,N.Failed].includes(l.status)}}]),a}(),nn=be;function Cn(a){var C=a.currentQARef,l=a.updateMessage,m=a.getCurrentSessionId,L=a.onFinish,U=u(function(re){return re.api}),xe=(0,t.useRef)(U);(0,t.useEffect)(function(){xe.current=U},[U]);var se=(0,t.useCallback)(function(){var re=J()(d()().mark(function ue(le){var Te,je,Fe,Ye,Ne,Be,en,kn;return d()().wrap(function(ln){for(;;)switch(ln.prev=ln.next){case 0:Te=new nn({id:"",status:N.Created,created_at:0}),je=!1,Fe=!1,ln.prev=3,Ne=we()(le);case 5:return ln.next=7,Ne.next();case 7:if(!(je=!(Be=ln.sent).done)){ln.next=17;break}return en=Be.value,kn=Te.handle(en),C.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:kn}],l(C.current.response),ln.next=14,(0,cn.Z)(100);case 14:je=!1,ln.next=5;break;case 17:ln.next=23;break;case 19:ln.prev=19,ln.t0=ln.catch(3),Fe=!0,Ye=ln.t0;case 23:if(ln.prev=23,ln.prev=24,!(je&&Ne.return!=null)){ln.next=28;break}return ln.next=28,Ne.return();case 28:if(ln.prev=28,!Fe){ln.next=31;break}throw Ye;case 31:return ln.finish(28);case 32:return ln.finish(23);case 33:case"end":return ln.stop()}},ue,null,[[3,19,23,33],[24,,28,32]])}));return function(ue){return re.apply(this,arguments)}}(),[]),q=(0,t.useCallback)(function(){var re=J()(d()().mark(function ue(le,Te){var je,Fe,Ye,Ne,Be,en,kn,zn,ln,un,on,Mn,jn,Gn,tt,On;return d()().wrap(function(Ze){for(;;)switch(Ze.prev=Ze.next){case 0:if(je=xe.current,Fe=je.enableHistoryMessages,Ye=Fe===void 0?!1:Fe,Ze.prev=2,!je.fetch){Ze.next=9;break}return Ze.next=6,je.fetch({input:le,biz_params:Te});case 6:Ze.t0=Ze.sent,Ze.next=12;break;case 9:return Ze.next=11,fetch(je.baseURL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(je.token||"")},body:JSON.stringify({input:Ye?le:le.slice(-1),session_id:m(),stream:!0,biz_params:Te})});case 11:Ze.t0=Ze.sent;case 12:Ne=Ze.t0,Ze.next=17;break;case 15:Ze.prev=15,Ze.t1=Ze.catch(2);case 17:if(!(Ne&&Ne.body)){Ze.next=65;break}if(Be=new nn({id:"",status:N.Created,created_at:0}),Ne.ok){Ze.next=22;break}return Ne.json().then(function(ot){var vt=Be.handle({object:"message",type:W.ERROR,content:[],id:"error",role:"assistant",status:N.Failed,code:Ne.status,message:JSON.stringify(ot)});C.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:vt}],L()}),Ze.abrupt("return");case 22:Ze.prev=22,en=!1,kn=!1,Ze.prev=25,ln=we()((0,me.Z)({readableStream:Ne.body}));case 27:return Ze.next=29,ln.next();case 29:if(!(en=!(un=Ze.sent).done)){Ze.next=44;break}if(on=un.value,((Mn=C.current.response)===null||Mn===void 0?void 0:Mn.msgStatus)!=="interrupted"){Ze.next=36;break}return(Gn=C.current.abortController)===null||Gn===void 0||Gn.abort(),C.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Be.cancel()}],l(C.current.response),Ze.abrupt("break",44);case 36:if(tt=JSON.parse(on.data),On=Be.handle(tt),!(On.status!==N.Failed&&!((jn=On.output)!==null&&jn!==void 0&&(jn=jn[0])!==null&&jn!==void 0&&(jn=jn.content)!==null&&jn!==void 0&&jn.length))){Ze.next=40;break}return Ze.abrupt("continue",41);case 40:C.current.response&&(C.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:On}],On.status===N.Completed||On.status===N.Failed?L():l(C.current.response));case 41:en=!1,Ze.next=27;break;case 44:Ze.next=50;break;case 46:Ze.prev=46,Ze.t2=Ze.catch(25),kn=!0,zn=Ze.t2;case 50:if(Ze.prev=50,Ze.prev=51,!(en&&ln.return!=null)){Ze.next=55;break}return Ze.next=55,ln.return();case 55:if(Ze.prev=55,!kn){Ze.next=58;break}throw zn;case 58:return Ze.finish(55);case 59:return Ze.finish(50);case 60:Ze.next=65;break;case 62:Ze.prev=62,Ze.t3=Ze.catch(22),console.error(Ze.t3);case 65:case"end":return Ze.stop()}},ue,null,[[2,15],[22,62],[25,46,50,60],[51,,55,59]])}));return function(ue,le){return re.apply(this,arguments)}}(),[m,C,l,L]);return{request:q,mockRequest:se}}function En(){var a=He(),C=a.createSession,l=a.updateSession,m=a.getCurrentSessionId,L=(0,t.useCallback)(function(){var se=J()(d()().mark(function q(re){return d()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:if(m()){le.next=3;break}return le.next=3,C({name:re});case 3:case"end":return le.stop()}},q)}));return function(q){return se.apply(this,arguments)}}(),[m,C]),U=(0,t.useCallback)(function(){var se=J()(d()().mark(function q(re,ue){return d()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:if(ue.length!==0){Te.next=3;break}return Te.next=3,l({id:m(),name:re});case 3:case"end":return Te.stop()}},q)}));return function(q,re){return se.apply(this,arguments)}}(),[m,l]),xe=(0,t.useCallback)(function(){var se=J()(d()().mark(function q(re){return d()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:return le.next=2,l({id:m(),messages:re});case 2:case"end":return le.stop()}},q)}));return function(q){return se.apply(this,arguments)}}(),[m,l]);return{ensureSession:L,updateSessionName:U,syncSessionMessages:xe,getCurrentSessionId:m}}function Ln(){var a=(0,c.Sz)(Me,function(le){return le.setLoading}),C=(0,c.Sz)(Oe,function(le){return le.currentSessionId}),l=(0,t.useRef)({}),m=te({currentQARef:l}),L=En(),U=(0,t.useCallback)(function(){var le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished";l.current.response&&(l.current.response.msgStatus=le,a(!1),Ee.flushSync(function(){m.updateMessage(l.current.response)}),L.syncSessionMessages(m.getMessages()))},[a,m,L]),xe=Cn({currentQARef:l,updateMessage:m.updateMessage,getCurrentSessionId:L.getCurrentSessionId,onFinish:function(){return U("finished")}}),se=xe.request,q=(0,t.useCallback)(function(){var le=J()(d()().mark(function Te(je){var Fe,Ye;return d()().wrap(function(Be){for(;;)switch(Be.prev=Be.next){case 0:return Be.next=2,L.ensureSession(je.query);case 2:if(Fe=m.getMessages(),!L.getCurrentSessionId()){Be.next=6;break}return Be.next=6,L.updateSessionName(je.query,Fe);case 6:return m.createRequestMessage(je),a(!0),Be.next=10,(0,cn.Z)(100);case 10:return m.createResponseMessage(),Ye=m.getHistoryMessages(),Be.next=14,L.syncSessionMessages(m.getMessages());case 14:return Be.next=16,se(Ye,je.biz_params);case 16:case"end":return Be.stop()}},Te)}));return function(Te){return le.apply(this,arguments)}}(),[m,L,se]),re=(0,t.useCallback)(function(){U("interrupted")},[U]),ue=(0,t.useCallback)(function(){var le=J()(d()().mark(function Te(je){var Fe;return d()().wrap(function(Ne){for(;;)switch(Ne.prev=Ne.next){case 0:return a(!0),m.removeMessageById(je),l.current.abortController=new AbortController,m.createResponseMessage(),Fe=m.getHistoryMessages(),Ne.next=7,se(Fe);case 7:case"end":return Ne.stop()}},Te)}));return function(Te){return le.apply(this,arguments)}}(),[m,se]);return(0,t.useEffect)(function(){l.current={request:void 0,response:void 0,abortController:void 0}},[C]),o({type:"handleReplace",callback:function(){var le=J()(d()().mark(function je(Fe){return d()().wrap(function(Ne){for(;;)switch(Ne.prev=Ne.next){case 0:return Ne.next=2,ue(Fe.detail.id);case 2:case"end":return Ne.stop()}},je)}));function Te(je){return le.apply(this,arguments)}return Te}()}),o({type:"handleSubmit",callback:function(){var le=J()(d()().mark(function je(Fe){return d()().wrap(function(Ne){for(;;)switch(Ne.prev=Ne.next){case 0:return Ne.next=2,q(Fe.detail);case 2:case"end":return Ne.stop()}},je)}));function Te(je){return le.apply(this,arguments)}return Te}()},[q]),{handleSubmit:q,handleCancel:re}}function Tn(){var a=(0,E.wv)().getPrefixCls("chat-anywhere-chat"),C=Ln(),l=C.handleSubmit,m=C.handleCancel;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(sn,{}),(0,n.jsxs)("div",{className:a,children:[(0,n.jsx)(ge,{onSubmit:l}),(0,n.jsx)(de,{onCancel:m,onSubmit:l})]})]})}var yn=e(21403),bn=e(67392),Ve=e(13660),rn=e(12624),hn=e(50287),xn=e(9368),gn=(0,t.createContext)({collapsed:!1,toggleCollapsed:function(){}});function In(a){var C=(0,t.useState)(!1),l=G()(C,2),m=l[0],L=l[1],U=(0,t.useCallback)(function(){L(function(xe){return!xe})},[]);return(0,n.jsx)(gn.Provider,{value:{collapsed:m,toggleCollapsed:U},children:a.children})}function Pn(){var a=(0,t.useContext)(gn),C=a.collapsed,l=(0,E.wv)().getPrefixCls("chat-anywhere-sessions"),m=u(function(L){var U;return(U=L.theme)===null||U===void 0?void 0:U.leftHeader})||{};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"".concat(l),children:[t.isValidElement(m)?m:(0,n.jsx)(wn,{}),(0,n.jsxs)("div",{className:"".concat(l,"-content"),style:{display:C?"none":"flex"},children:[(0,n.jsx)(Xn,{}),(0,n.jsx)(et,{})]})]})})}function wn(a){var C=a.className,l=u(function(je){var Fe;return(Fe=je.theme)===null||Fe===void 0?void 0:Fe.leftHeader})||{},m=(0,E.wv)().getPrefixCls("chat-anywhere-sessions"),L=(0,t.useContext)(gn),U=L.toggleCollapsed,xe=L.collapsed,se=u(function(je){return je.session.multiple}),q=l,re=q.logo,ue=re===void 0?"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png":re,le=q.title,Te=le===void 0?"Runtime WebUI":le;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:_()("".concat(m,"-header"),C),children:[(0,n.jsxs)("div",{className:"".concat(m,"-header-left"),children:[ue&&(0,n.jsx)("img",{src:ue,alt:"logo",height:32}),(0,n.jsx)("span",{children:Te})]}),se&&(0,n.jsx)(De.Z,{className:"".concat(m,"-header-collapse"),bordered:!1,icon:xe?(0,n.jsx)(Ve.Z,{}):(0,n.jsx)(bn.Z,{}),onClick:U})]})})}function Xn(a){var C=(0,c.Sz)(Me,function(se){return se.loading}),l=He(),m=l.createSession,L=(0,E.wv)().getPrefixCls("chat-anywhere-sessions"),U=(0,t.useContext)(gn),xe=U.toggleCollapsed;return(0,n.jsx)("div",{className:"".concat(L,"-adder"),style:a.style,children:(0,n.jsx)(yn.Z,{block:!0,type:"primary",icon:(0,n.jsx)(rn.Z,{}),disabled:C,onClick:J()(d()().mark(function se(){return d()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return re.next=2,m();case 2:a.narrowMode&&xe();case 3:case"end":return re.stop()}},se)})),children:"New Chat"})})}function et(a){var C=(0,E.wv)().getPrefixCls("chat-anywhere-sessions"),l=(0,c.Sz)(Oe,function(ue){return ue.sessions}),m=He(),L=m.changeCurrentSessionId,U=m.removeSession,xe=(0,c.Sz)(Oe,function(ue){return ue.currentSessionId}),se=(0,t.useContext)(gn),q=se.toggleCollapsed,re=(0,t.useMemo)(function(){return l.map(function(ue){return{key:ue.id,label:ue.name||"New Chat"}})},[l]);return(0,n.jsx)("div",{className:"".concat(C,"-list"),style:a.style,children:(0,n.jsx)(xn.Z,{items:re,menu:[{key:"delete",icon:(0,n.jsx)(hn.Z,{}),danger:!0,onClick:function(){var ue=J()(d()().mark(function Te(je){return d()().wrap(function(Ye){for(;;)switch(Ye.prev=Ye.next){case 0:return Ye.next=2,U({id:je.key});case 2:return Ye.abrupt("return",Ye.sent);case 3:case"end":return Ye.stop()}},Te)}));function le(Te){return ue.apply(this,arguments)}return le}()}],activeKey:xe,onActiveChange:function(le){L(le),a.narrowMode&&q()}})})}var $n,qe=(0,A.vJ)($n||($n=b()([`

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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),Ue=e(85265);function vn(){var a=(0,E.wv)().getPrefixCls("chat-anywhere"),C=u(function(se){return se.theme}),l=C.narrowMode,m=C.rightHeader,L=(0,t.useContext)(gn),U=L.toggleCollapsed,xe=L.collapsed;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(qe,{}),(0,n.jsxs)("div",{className:"".concat(a,"-layout-right-header"),children:[l?(0,n.jsx)(wn,{className:"".concat(a,"-default-header-inner")}):null,m&&(0,n.jsx)("div",{className:"".concat(a,"-default-header-right"),children:m})]}),l&&(0,n.jsx)(Ue.Z,{width:"80vw",styles:{body:{padding:0}},open:xe,onClose:U,title:null,closable:!1,placement:"left",children:(0,n.jsxs)("div",{className:"".concat(a,"-sessions"),children:[(0,n.jsx)(et,{narrowMode:!0}),(0,n.jsx)(Xn,{narrowMode:!0})]})})]})}function fn(a,C){var l=Re(),m=(0,c.Sz)(Me,function(L){return L.setDisabled});return t.useImperativeHandle(C,function(){return{messages:l,input:{setDisabled:m,submit:function(U){var xe=U.query,se=U.fileList,q=U.biz_params;H({type:"handleSubmit",data:{query:xe,fileList:se,biz_params:q}})}}}},[]),null}var Yn=(0,t.forwardRef)(fn);function pn(a,C){var l=a.className,m=(0,E.wv)().getPrefixCls("chat-anywhere-layout"),L=u(function(Te){return Te.theme.narrowMode}),U=u(function(Te){return Te.theme.background}),xe=u(function(Te){return Te.theme.rightHeader}),se=u(function(Te){return{session:Te.session}}),q=se.session,re=(0,t.useContext)(gn),ue=re.collapsed,le=!L&&q&&q.multiple;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{}),(0,n.jsxs)("div",{className:_()("".concat(m),l),children:[le&&(0,n.jsx)("div",{className:_()("".concat(m,"-left"),g()({},"".concat(m,"-left-collapsed"),ue)),children:(0,n.jsx)(Pn,{})}),(0,n.jsxs)("div",{className:_()("".concat(m,"-right"),g()({},"".concat(m,"-right-has-header"),!!xe)),style:{background:U},children:[!!xe&&(0,n.jsx)(vn,{}),(0,n.jsx)(Tn,{})]})]}),(0,n.jsx)(Yn,{ref:C})]})}var Dn=(0,t.forwardRef)(pn);function Jn(a){var C=(0,t.useMemo)(function(){return a.data.input[0].content.reduce(function(l,m){if(m.type===i.TEXT&&l.push({code:"Text",data:{content:m.text,raw:!0}}),m.type===i.IMAGE){var L=l.find(function(xe){return xe.code==="Image"});L?L.data.push({url:m.image_url}):l.push({code:"Images",data:[{url:m.image_url}]})}if(m.type===i.FILE){var U=l.find(function(xe){return xe.code==="Files"});U?U.data.push({url:m.file_url,name:m.file_name,size:m.file_size}):l.push({code:"Files",data:[{url:m.file_url,name:m.file_name,size:m.file_size}]})}return l},[])},[a.data.input]);return(0,n.jsx)(Se.Z,{role:"user",cards:C})}var Bn=e(66109),Kn=t.memo(function(a){var C,l=a.data;return(C=l.content)!==null&&C!==void 0&&C.length?(0,n.jsx)(n.Fragment,{children:l.content.map(function(m,L){switch(m.type){case i.TEXT:return(0,n.jsx)(Bn.Z,{content:m.text,cursor:m.status===N.InProgress},L);case i.REFUSAL:return(0,n.jsx)(Bn.Z,{raw:!0,content:m.refusal},L);default:return(0,n.jsx)("div",{children:JSON.stringify(m)},L)}})}):null}),Sn=Kn,Zn=e(85786),Un=t.memo(function(a){var C,l=a.data,m=u(function(Te){return Te.customToolRenderConfig})||{};if(!((C=l.content)!==null&&C!==void 0&&C.length))return null;var L=l.content,U=l.status===N.InProgress,xe=L[0].data.name,se="".concat(L[0].data.server_label?L[0].data.server_label+" / ":""),q="".concat(se).concat(xe);if(m[xe]){var re=m[xe];return(0,n.jsx)(re,{data:l})}else{var ue,le;return(0,n.jsx)(Zn.Z,{loading:U,defaultOpen:!1,title:q==="undefined"?"":q,input:(ue=L[0])===null||ue===void 0||(ue=ue.data)===null||ue===void 0?void 0:ue.arguments,output:(le=L[1])===null||le===void 0||(le=le.data)===null||le===void 0?void 0:le.output})}}),Rn=Un,Fn=e(79323);function Qn(a){var C,l=a.data;if(l.status===N.Created)return null;var m=l==null||(C=l.content)===null||C===void 0?void 0:C[0];return m?(0,n.jsx)(Fn.Z,{loading:l.status===N.InProgress,title:"Thinking",content:m.text}):null}function An(a){var C=a.data;return(0,n.jsx)(Se.Z.Interrupted,{type:"error",title:C.code,desc:C.message})}var mn=e(89698),_n=e(60227),Wn=e(82286),Vn=e(67055),lt=e(39693),Nn=e.n(lt);function Hn(a){return!a.input_tokens||!a.output_tokens?null:(0,n.jsx)(Se.Z.Footer.Count,{data:[["Input",a.input_tokens],["Output",a.output_tokens]]})}function nt(a){var C,l,m,L=u(function(se){var q;return(q=se.actions)===null||q===void 0?void 0:q.list})||[{icon:(0,n.jsx)(mn.Z,{}),onClick:function(){(0,Wn.JG)(JSON.stringify(a.data))}}],U=(C=u(function(se){var q;return(q=se.actions)===null||q===void 0?void 0:q.replace}))!==null&&C!==void 0?C:!0,xe=Nn()([].concat(Y()(L.map(function(se){var q=se;return se.render&&(q.children=t.createElement(se.render,{data:a})),h()(h()({},q),{},{onClick:function(){var ue;(ue=se.onClick)===null||ue===void 0||ue.call(se,a)}})})),[U&&a.isLast?{icon:(0,n.jsx)(Vn.Z,{title:"\u91CD\u65B0\u751F\u6210",children:(0,n.jsx)(_n.Z,{})}),onClick:function(){H({type:"handleReplace",data:a})}}:null]));return nn.maybeDone(a.data)?(0,n.jsx)(Se.Z.Footer,{left:(0,n.jsx)(Se.Z.Footer.Actions,{data:xe}),right:(0,n.jsx)(Hn,{input_tokens:(l=a.data.usage)===null||l===void 0?void 0:l.input_tokens,output_tokens:(m=a.data.usage)===null||m===void 0?void 0:m.output_tokens})}):null}function st(a){var C=(0,t.useMemo)(function(){return nn.mergeToolMessages(a.data.output)},[a.data.output]);return!(C!=null&&C.length)&&nn.maybeGenerating(a.data)?(0,n.jsx)(Se.Z.Spin,{}):(0,n.jsxs)(n.Fragment,{children:[C.map(function(l){switch(l.type){case W.MESSAGE:return(0,n.jsx)(Sn,{data:l},l.id);case W.PLUGIN_CALL:case W.PLUGIN_CALL_OUTPUT:case W.MCP_CALL:case W.MCP_CALL_OUTPUT:return(0,n.jsx)(Rn,{data:l},l.id);case W.REASONING:return(0,n.jsx)(Qn,{data:l},l.id);case W.ERROR:return(0,n.jsx)(An,{data:l},l.id);case W.HEARTBEAT:return null;default:return console.warn("[WIP] Unknown message type: ".concat(l.type)),null}}),a.data.error&&(0,n.jsx)(An,{data:a.data.error}),(0,n.jsx)(nt,h()({},a))]})}var ct=e(83962);function ut(a){var C=a.options,l=a.cards,m=a.children,L=[[P,{options:C}],[ct.xy,{cardConfig:l}],[Ke,{}],[_e,{}],[w,{}],[In,{}]];return L.reduceRight(function(U,xe){var se=G()(xe,2),q=se[0],re=se[1];return(0,n.jsx)(q,h()(h()({},re),{},{children:U}))},m)}var at=ut;function dt(a,C){var l=a.options,m=l===void 0?{}:l,L=(0,t.useMemo)(function(){var U=h()({AgentScopeRuntimeRequestCard:Jn,AgentScopeRuntimeResponseCard:st},m.cards);return U},[m.cards]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(at,{options:m,cards:L,children:(0,n.jsx)(Dn,{ref:C})})})}var it=(0,t.forwardRef)(dt)},57551:function(){},22863:function($e,F,e){"use strict";e.r(F);var z=e(57551),h=e.n(z),D={};for(var g in z)g!=="default"&&(D[g]=function(E){return z[E]}.bind(0,g));e.d(F,D)},34487:function($e,F,e){"use strict";e.d(F,{Z:function(){return ce}});var z=e(97857),h=e.n(z),D=e(5574),g=e.n(D),E=e(56044),j=e(68400),b=e.n(j),A=e(9053),k,f=(0,A.vJ)(k||(k=b()([`
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
`])),function(S){return S.theme.prefixCls},function(S){return S.theme.colorBgLayout},function(S){return S.theme.colorBgLayout},function(S){return S.theme.colorFillTertiary},function(S){return S.theme.colorBgBase},function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls},function(S){return S.theme.colorBgBase},function(S){return S.theme.colorBorderSecondary},function(S){return S.theme.colorText},function(S){return S.theme.colorBorderSecondary},function(S){return S.theme.colorPrimary}),v=e(93967),_=e.n(v),y=e(55839),c=e(16494),t=e(85893);function x(S){var ie=(0,E.wv)().getPrefixCls("assets-preview-image");return(0,t.jsx)("div",{className:ie,style:{aspectRatio:"".concat(S.width,"/").concat(S.height)},children:(0,t.jsx)(y.ZP,{locale:{Image:{preview:""}},children:(0,t.jsx)(c.Z,{src:S.src,width:"100%",height:"100%"})})})}function B(S){return(0,t.jsx)(c.Z.PreviewGroup,{children:S.children})}var s=e(9783),n=e.n(s),T=e(13769),u=e.n(T),P=e(67294),ee=e(63701),$=e(62321),d=e(32485),ne=e(64057),J=["width","height","poster","src"];function Z(S){var ie=(0,E.wv)().getPrefixCls("assets-preview-video"),pe=S.width,De=S.height,We=S.poster,Qe=S.src,Je=u()(S,J),R=(0,P.useRef)(null),de=(0,P.useState)(!1),Se=g()(de,2),O=Se[0],Y=Se[1],Q=(0,P.useState)(0),_e=g()(Q,2),Re=_e[0],Le=_e[1],Ee=(0,P.useState)(0),ke=g()(Ee,2),Oe=ke[0],Ke=ke[1],He=(0,P.useCallback)(function(Ae){var Pe=Math.floor(Ae/60),ge=Math.floor(Ae%60);return"".concat(Pe.toString().padStart(2,"0"),":").concat(ge.toString().padStart(2,"0"))},[]),ze=(0,P.useCallback)(function(){var Ae=R.current;Ae&&(Ae.paused?(Ae.play(),Y(!0)):(Ae.pause(),Y(!1)))},[]),Ie=(0,P.useCallback)(function(){R.current&&Le(R.current.duration)},[]),dn=(0,P.useCallback)(function(){Y(!1),Ke(0)},[]),r=(0,P.useCallback)(function(){R.current&&Ke(R.current.currentTime)},[]),ye=(0,P.useCallback)(function(Ae){Ae.stopPropagation();var Pe=R.current;Pe&&(Pe.requestFullscreen?Pe.requestFullscreen():Pe.webkitRequestFullscreen?Pe.webkitRequestFullscreen():Pe.msRequestFullscreen&&Pe.msRequestFullscreen())},[]);return(0,t.jsxs)("div",{className:ie,style:{aspectRatio:"".concat(pe,"/").concat(De)},children:[(0,t.jsx)("video",h()(h()({},Je),{},{ref:R,src:Qe,poster:We,preload:"metadata",onLoadedMetadata:Ie,onTimeUpdate:r,onEnded:dn})),(0,t.jsxs)("div",{className:_()("".concat(ie,"-overlay"),n()({},"".concat(ie,"-overlay-playing"),1)),onClick:ze,children:[(0,t.jsx)("div",{className:"".concat(ie,"-play-btn"),children:O?(0,t.jsx)(ee.Z,{}):(0,t.jsx)($.Z,{})}),(0,t.jsx)("div",{className:"".concat(ie,"-enlarge"),onClick:ye,children:(0,t.jsx)(ne.Z,{bordered:!1,size:"small",icon:(0,t.jsx)(d.Z,{})})})]}),(0,t.jsx)("div",{className:"".concat(ie,"-duration"),children:He(Re-Oe)})]})}var G=e(20399),ae=e(80162);function Ce(S){var ie=(0,E.wv)().getPrefixCls("assets-preview-audio"),pe=(0,P.useRef)(null),De=(0,P.useState)(!1),We=g()(De,2),Qe=We[0],Je=We[1],R=(0,P.useState)(!1),de=g()(R,2),Se=de[0],O=de[1],Y=(0,P.useState)(0),Q=g()(Y,2),_e=Q[0],Re=Q[1],Le=(0,P.useState)(0),Ee=g()(Le,2),ke=Ee[0],Oe=Ee[1],Ke=(0,P.useCallback)(function(r){if(isNaN(r))return"00:00";var ye=Math.floor(r/60),Ae=Math.floor(r%60);return"".concat(ye.toString().padStart(2,"0"),":").concat(Ae.toString().padStart(2,"0"))},[]),He=(0,P.useCallback)(function(){pe.current&&(Qe?pe.current.pause():pe.current.play(),Je(!Qe))},[Qe]),ze=(0,P.useCallback)(function(){O(!Se),pe.current&&(pe.current.muted=Se)},[Se]),Ie=(0,P.useCallback)(function(r){if(pe.current&&ke){var ye=r.currentTarget.getBoundingClientRect(),Ae=r.clientX-ye.left,Pe=Ae/ye.width,ge=Pe*ke;pe.current.currentTime=ge,Re(ge)}},[ke]);(0,P.useEffect)(function(){var r=pe.current;if(r){var ye=function(){return Re(r.currentTime)},Ae=function(){return Oe(r.duration)},Pe=function(){return Je(!1)};return r.addEventListener("timeupdate",ye),r.addEventListener("loadedmetadata",Ae),r.addEventListener("ended",Pe),function(){r.removeEventListener("timeupdate",ye),r.removeEventListener("loadedmetadata",Ae),r.removeEventListener("ended",Pe)}}},[]);var dn=ke?_e/ke*100:0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("audio",{ref:pe,src:S.src,muted:Se}),(0,t.jsxs)("div",{className:ie,children:[(0,t.jsx)(ne.Z,{size:"small",type:"text",onClick:He,icon:Qe?(0,t.jsx)(ee.Z,{}):(0,t.jsx)($.Z,{})}),(0,t.jsx)(ne.Z,{size:"small",type:"text",onClick:ze,icon:Se?(0,t.jsx)(G.Z,{}):(0,t.jsx)(ae.Z,{})}),(0,t.jsx)("div",{className:"".concat(ie,"-time"),children:Ke(_e)}),(0,t.jsx)("div",{className:"".concat(ie,"-progress"),onClick:Ie,children:(0,t.jsx)("div",{className:"".concat(ie,"-progress-bar"),style:{width:"".concat(dn,"%")}})}),(0,t.jsx)("div",{className:"".concat(ie,"-time"),children:Ke(ke)})]})]})}var p=e(16138),Me=e(83202);function w(S){var ie,pe=(0,E.wv)().getPrefixCls("assets-preview"),De=(0,P.useRef)(null),We=S.height,Qe=We===void 0?144:We,Je=(0,P.useState)(0),R=g()(Je,2),de=R[0],Se=R[1],O=(0,P.useRef)(0),Y=(0,P.useState)(0),Q=g()(Y,2),_e=Q[0],Re=Q[1],Le=(0,P.useDeferredValue)(_e),Ee=(0,P.useCallback)(function(He){Re(He.target.scrollLeft)},[]);(0,P.useEffect)(function(){Se(Qe/2-12)},[Qe]),(0,P.useEffect)(function(){De.current&&S.type!=="audio"&&(O.current=De.current.scrollWidth-De.current.clientWidth)},[]);var ke=(0,P.useCallback)(function(He){var ze=200;De.current.scrollLeft=De.current.scrollLeft+ze*(He==="left"?-1:1)},[]),Oe={image:x,video:Z,audio:Ce}[S.type],Ke=S.data.map(function(He,ze){return(0,t.jsx)(Oe,h()({},He),ze)});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f,{}),(0,t.jsxs)("div",{className:_()("".concat(pe),S.className),children:[(0,t.jsx)("div",{className:_()("".concat(pe,"-container"),(ie=S.classNames)===null||ie===void 0?void 0:ie.container),style:S.type!=="audio"?{height:Qe}:{flexDirection:"column"},onScroll:Ee,ref:De,children:S.type==="image"?(0,t.jsx)(B,{children:Ke}):Ke}),de&&S.type!=="audio"?(0,t.jsxs)(t.Fragment,{children:[Le>50&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:_()("".concat(pe,"-left-edge"))}),(0,t.jsx)(ne.Z,{onClick:function(){return ke("left")},style:{top:de},className:_()("".concat(pe,"-left-arrow"),"".concat(pe,"-arrow")),size:"small",shape:"circle",icon:(0,t.jsx)(p.Z,{})})]}),Le<O.current-50&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:_()("".concat(pe,"-right-edge"))}),(0,t.jsx)(ne.Z,{onClick:function(){return ke("right")},style:{top:de},className:_()("".concat(pe,"-right-arrow"),"".concat(pe,"-arrow")),size:"small",shape:"circle",icon:(0,t.jsx)(Me.Z,{})})]})]}):null]})]})}var ce=w},36417:function($e,F,e){"use strict";e.d(F,{Z:function(){return dn}});var z=e(9783),h=e.n(z),D=e(97857),g=e.n(D),E=e(5574),j=e.n(E),b=e(13769),A=e.n(b),k=e(93967),f=e.n(k),v=e(67294),_=e(56044),y=e(56790),c=e(73935),t=v.createContext(null),x=e(85893);function B(r){var ye=r.getDropContainer,Ae=r.className,Pe=r.prefixCls,ge=r.children,tn=v.useContext(t),sn=tn.disabled,cn=v.useState(),o=j()(cn,2),H=o[0],X=o[1],fe=v.useState(null),ve=j()(fe,2),M=ve[0],oe=ve[1];v.useEffect(function(){var W=ye==null?void 0:ye();H!==W&&X(W)},[ye]),v.useEffect(function(){if(H){var W=function(){oe(!0)},i=function(he){he.preventDefault()},K=function(he){he.relatedTarget||oe(!1)},I=function(he){oe(!1),he.preventDefault()};return document.addEventListener("dragenter",W),document.addEventListener("dragover",i),document.addEventListener("dragleave",K),document.addEventListener("drop",I),function(){document.removeEventListener("dragenter",W),document.removeEventListener("dragover",i),document.removeEventListener("dragleave",K),document.removeEventListener("drop",I)}}},[!!H]);var N=ye&&H&&!sn;if(!N)return null;var V="".concat(Pe,"-drop-area");return(0,c.createPortal)((0,x.jsx)("div",{className:f()(V,Ae,h()({},"".concat(V,"-on-body"),H.tagName==="BODY")),style:{display:M?"block":"none"},children:ge}),H)}var s=e(53033),n=e(52861),T=e(83622),u=e(29372),P=e(64599),ee=e.n(P),$=function(ye){return ye.indexOf("image/")===0},d=200;function ne(r){return new Promise(function(ye){if(!r||!r.type||!$(r.type)){ye("");return}var Ae=new Image;if(Ae.onload=function(){var tn=Ae.width,sn=Ae.height,cn=tn/sn,o=cn>1?d:d*cn,H=cn>1?d/cn:d,X=document.createElement("canvas");X.width=o,X.height=H,X.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(o,"px; height: ").concat(H,"px; z-index: 9999; display: none;"),document.body.appendChild(X);var fe=X.getContext("2d");fe.drawImage(Ae,0,0,o,H);var ve=X.toDataURL();document.body.removeChild(X),window.URL.revokeObjectURL(Ae.src),ye(ve)},Ae.crossOrigin="anonymous",r.type.startsWith("image/svg+xml")){var Pe=new FileReader;Pe.onload=function(){Pe.result&&typeof Pe.result=="string"&&(Ae.src=Pe.result)},Pe.readAsDataURL(r)}else if(r.type.startsWith("image/gif")){var ge=new FileReader;ge.onload=function(){ge.result&&ye(ge.result)},ge.readAsDataURL(r)}else Ae.src=window.URL.createObjectURL(r)})}var J=e(9361),Z=e(38703);function G(r){var ye=r.percent,Ae=J.Z.useToken(),Pe=Ae.token;return(0,x.jsx)(Z.Z,{type:"circle",percent:ye,size:40,strokeColor:"#FFF",trailColor:"rgba(255, 255, 255, 0.3)",format:function(tn){return(0,x.jsxs)("span",{style:{color:"#FFF"},children:[(tn||0).toFixed(0),"%"]})}})}var ae=e(68400),Ce=e.n(ae),p=e(9053),Me,w=(0,p.vJ)(Me||(Me=Ce()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.colorBgContainer},function(r){return r.theme.lineWidth},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.paddingXS},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.fontSize},function(r){return r.theme.colorText},function(r){return r.theme.prefixCls},function(r){return r.theme.colorTextQuaternary},function(r){return r.theme.fontSizeSM},function(r){return r.theme.prefixCls},function(r){return r.theme.opacityLoading},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.lineWidth},function(r){return r.theme.prefixCls},function(r){return r.theme.paddingXXS},function(r){return r.theme.prefixCls},function(r){return r.theme.colorText},function(r){return r.theme.colorBgContainer},function(r){return r.theme.lineWidth},function(r){return r.theme.colorBorder},function(r){return r.theme.colorError},function(r){return r.theme.prefixCls},function(r){return r.theme.colorError},function(r){return r.theme.paddingSM},function(r){return r.theme.prefixCls},function(r){return r.theme.colorPrimary}),ce=e(89102),S="\xA0",ie="#8c8c8c",pe=["png","jpg","jpeg","gif","bmp","webp","svg"],De=function(ye){var Ae=ye.url;return(0,x.jsx)("img",{src:Ae,width:32,height:32})},We=[{icon:(0,x.jsx)(De,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01cVtZXI23tPVhiZoPJ_!!6000000007313-55-tps-40-40.svg"}),color:"#22b35e",ext:["xlsx","xls"]},{icon:(0,x.jsx)(De,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01uDnnuz1XMNEjgFMul_!!6000000002909-55-tps-40-40.svg"}),color:ie,ext:pe},{icon:(0,x.jsx)(De,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01PaXli01DDPAO68fsI_!!6000000000182-55-tps-40-40.svg"}),color:ie,ext:["md","mdx"]},{icon:(0,x.jsx)(De,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01mB5PzD27fuIWK661W_!!6000000007825-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["pdf"]},{icon:(0,x.jsx)(De,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01a8j7Jv1nW1QyFme7k_!!6000000005096-55-tps-40-40.svg"}),color:"#ff6e31",ext:["ppt","pptx"]},{icon:(0,x.jsx)(De,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01XaNi8P1UkhQXoQdUL_!!6000000002556-55-tps-40-40.svg"}),color:"#1677ff",ext:["doc","docx"]},{icon:(0,x.jsx)(De,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),color:"#fab714",ext:["zip","rar","7z","tar","gz"]},{icon:(0,x.jsx)(De,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01zTTe0q1Xg4GkZgJol_!!6000000002952-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["mp4","avi","mov","wmv","flv","mkv"]},{icon:(0,x.jsx)(De,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01qOBdXG1UpHO6f3Vvc_!!6000000002566-55-tps-40-40.svg"}),color:"#8c8c8c",ext:["mp3","wav","flac","ape","aac","ogg"]}];function Qe(r,ye){return ye.some(function(Ae){return r.toLowerCase()===".".concat(Ae)})}function Je(r){for(var ye=r,Ae=["B","KB","MB","GB","TB","PB","EB"],Pe=0;ye>=1024&&Pe<Ae.length-1;)ye/=1024,Pe++;return"".concat(ye.toFixed(0)," ").concat(Ae[Pe])}function R(r,ye){var Ae=(0,_.wv)(),Pe=Ae.getPrefixCls,ge=r.item,tn=r.onRemove,sn=r.className,cn=r.style,o=v.useContext(t),H=o||{},X=H.disabled,fe=ge.name,ve=ge.size,M=ge.percent,oe=ge.status,N=oe===void 0?"done":oe,V=ge.description,W=Pe("attachment"),i="".concat(W,"-list-card"),K=v.useMemo(function(){var rn=fe||"",hn=rn.match(/^(.*)\.[^.]+$/);return hn?[hn[1],rn.slice(hn[1].length)]:[rn,""]},[fe]),I=j()(K,2),te=I[0],he=I[1],we=v.useMemo(function(){return Qe(he,pe)},[he]),me=v.useMemo(function(){return V||(N==="uploading"?"".concat(M||0,"%"):N==="error"?ge.response||S:ve?Je(ve):S)},[N,M]),an=v.useMemo(function(){var rn=ee()(We),hn;try{for(rn.s();!(hn=rn.n()).done;){var xn=hn.value,gn=xn.ext,In=xn.icon,Pn=xn.color;if(Qe(he,gn))return[In,Pn]}}catch(wn){rn.e(wn)}finally{rn.f()}return[(0,x.jsx)(De,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"},"defaultIcon"),ie]},[he]),Ge=j()(an,2),Xe=Ge[0],be=Ge[1],nn=v.useState(),Cn=j()(nn,2),En=Cn[0],Ln=Cn[1];v.useEffect(function(){if(ge.originFileObj){var rn=!0;return ne(ge.originFileObj).then(function(hn){rn&&Ln(hn)}),function(){rn=!1}}Ln(void 0)},[ge.originFileObj]);var Tn=null,yn=ge.thumbUrl||ge.url||En,bn=r.renderType||"default",Ve=we&&(ge.originFileObj||yn)&&bn==="default";return Ve?Tn=(0,x.jsxs)(x.Fragment,{children:[yn&&(0,x.jsx)("img",{alt:"preview",src:yn}),N!=="done"&&(0,x.jsxs)("div",{className:"".concat(i,"-img-mask"),children:[N==="uploading"&&M!==void 0&&(0,x.jsx)(G,{percent:M,prefixCls:i}),N==="error"&&(0,x.jsx)("div",{className:"".concat(i,"-desc"),children:(0,x.jsx)("div",{className:"".concat(i,"-ellipsis-prefix"),children:me})})]})]}):Tn=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"".concat(i,"-icon"),style:{color:be},children:Xe}),(0,x.jsxs)("div",{className:"".concat(i,"-content"),children:[(0,x.jsxs)("div",{className:"".concat(i,"-name"),children:[te!=null?te:S,he]}),(0,x.jsx)("div",{className:"".concat(i,"-desc"),children:(0,x.jsx)("div",{className:"".concat(i,"-ellipsis-prefix"),children:me})})]})]}),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(w,{}),(0,x.jsxs)("div",{className:f()(i,h()(h()(h()(h()(h()({},"".concat(i,"-status-").concat(N),N),"".concat(i,"-type-preview"),Ve),"".concat(i,"-type-overview"),!Ve),"".concat(i,"-type-").concat(bn),!0),"".concat(i,"-hoverable"),!X&&tn),sn),style:cn,ref:ye,children:[Tn,(0,x.jsx)("button",{style:{opacity:!X&&tn?1:0},className:"".concat(i,"-remove"),onClick:function(){!X&&tn&&tn(ge)},children:(0,x.jsx)(ce.Z,{})})]})]})}var de=v.forwardRef(R),Se=1;function O(r){var ye=r.prefixCls,Ae=r.items,Pe=r.onRemove,ge=r.overflow,tn=r.listClassName,sn=r.listStyle,cn=r.itemClassName,o=r.itemStyle,H="".concat(ye,"-list"),X=v.useRef(null),fe=v.useState(!1),ve=j()(fe,2),M=ve[0],oe=ve[1];v.useEffect(function(){return oe(!0),function(){oe(!1)}},[]);var N=v.useState(!1),V=j()(N,2),W=V[0],i=V[1],K=v.useState(!1),I=j()(K,2),te=I[0],he=I[1],we=function(){var be=X.current;be&&(ge==="scrollX"?(i(Math.abs(be.scrollLeft)>=Se),he(be.scrollWidth-be.clientWidth-Math.abs(be.scrollLeft)>=Se)):ge==="scrollY"&&(i(be.scrollTop!==0),he(be.scrollHeight-be.clientHeight!==be.scrollTop)))};v.useEffect(function(){we()},[ge]);var me=function(be){var nn=X.current;nn&&nn.scrollTo({left:nn.scrollLeft+be*nn.clientWidth,behavior:"smooth"})},an=function(){me(-1)},Ge=function(){me(1)};return(0,x.jsxs)("div",{className:f()(H,h()(h()(h()({},"".concat(H,"-overflow-").concat(r.overflow),ge),"".concat(H,"-overflow-ping-start"),W),"".concat(H,"-overflow-ping-end"),te),tn),ref:X,onScroll:we,style:sn,children:[(0,x.jsx)(u.V4,{keys:Ae.map(function(Xe){return{key:Xe.uid,item:Xe}}),motionName:"".concat(H,"-card-motion"),component:!1,motionAppear:M,motionLeave:!0,motionEnter:!0,children:function(be){var nn=be.key,Cn=be.item,En=be.className,Ln=be.style;return(0,x.jsx)(de,{prefixCls:ye,item:Cn,onRemove:Pe,className:f()(En,cn),style:g()(g()({},Ln),o),renderType:r.renderType},nn)}}),ge==="scrollX"&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(T.ZP,{size:"small",shape:"circle",className:"".concat(H,"-prev-btn"),icon:(0,x.jsx)(s.Z,{}),onClick:an}),(0,x.jsx)(T.ZP,{size:"small",shape:"circle",className:"".concat(H,"-next-btn"),icon:(0,x.jsx)(n.Z,{}),onClick:Ge})]})]})}var Y=e(86250),Q=e(21317),_e=e(41154);function Re(r,ye){var Ae=r.prefixCls,Pe=r.placeholder,ge=Pe===void 0?{}:Pe,tn=r.upload,sn=r.className,cn=r.style,o="".concat(Ae,"-placeholder"),H=ge||{},X=v.useContext(t),fe=X.disabled,ve=v.useState(!1),M=j()(ve,2),oe=M[0],N=M[1],V=function(){N(!0)},W=function(te){te.currentTarget.contains(te.relatedTarget)||N(!1)},i=function(){N(!1)},K=v.isValidElement(ge)?ge:(0,x.jsxs)(Y.Z,{align:"center",justify:"center",vertical:!0,className:"".concat(o,"-inner"),children:[(0,x.jsx)(Q.default.Text,{className:"".concat(o,"-icon"),children:H.icon}),(0,x.jsx)(Q.default.Title,{className:"".concat(o,"-title"),level:5,children:H.title}),(0,x.jsx)(Q.default.Text,{className:"".concat(o,"-description"),type:"secondary",children:H.description})]});return(0,x.jsx)("div",{className:f()(o,h()(h()({},"".concat(o,"-drag-in"),oe),"".concat(o,"-disabled"),fe),sn),onDragEnter:V,onDragLeave:W,onDrop:i,"aria-hidden":fe,style:cn,children:(0,x.jsx)(_e.Z.Dragger,g()(g()({showUploadList:!1},tn),{},{ref:ye,style:{padding:0,border:0,background:"transparent"},children:K}))})}var Le=v.forwardRef(Re);function Ee(r,ye){var Ae=r.children,Pe=r.upload,ge=r.rootClassName,tn=v.useRef(null);return v.useImperativeHandle(ye,function(){return tn.current}),(0,x.jsx)(_e.Z,g()(g()({},Pe),{},{showUploadList:!1,rootClassName:ge,ref:tn,children:Ae}))}var ke=v.forwardRef(Ee),Oe,Ke=(0,p.vJ)(Oe||(Oe=Ce()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.zIndexPopupBase},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.lineWidthBold},function(r){return r.theme.padding},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorPrimaryHover},function(r){return r.theme.prefixCls},function(r){return r.theme.paddingXXS},function(r){return r.theme.fontSizeHeading2},function(r){return r.theme.prefixCls},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.colorText},function(r){return r.theme.padding},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSizeHeading2},function(r){return r.theme.boxShadowTertiary},function(r){return r.theme.padding},function(r){return r.theme.padding},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls}),He=["prefixCls","rootClassName","rootStyle","className","style","items","children","getDropContainer","placeholder","onChange","overflow","disabled","classNames","styles"];function ze(r,ye){var Ae=r.prefixCls,Pe=r.rootClassName,ge=r.rootStyle,tn=r.className,sn=r.style,cn=r.items,o=r.children,H=r.getDropContainer,X=r.placeholder,fe=r.onChange,ve=r.overflow,M=r.disabled,oe=r.classNames,N=oe===void 0?{}:oe,V=r.styles,W=V===void 0?{}:V,i=A()(r,He),K=(0,_.wv)(),I=K.direction,te=K.getPrefixCls,he=te("attachment"),we=v.useRef(null),me=v.useRef(null);v.useImperativeHandle(ye,function(){return{nativeElement:we.current,upload:function(Ve){var rn,hn=(rn=me.current)===null||rn===void 0||(rn=rn.nativeElement)===null||rn===void 0?void 0:rn.querySelector('input[type="file"]');if(hn){var xn=new DataTransfer;xn.items.add(Ve),hn.files=xn.files,hn.dispatchEvent(new Event("change",{bubbles:!0}))}}}});var an=(0,y.C8)([],{value:cn}),Ge=j()(an,2),Xe=Ge[0],be=Ge[1],nn=(0,y.zX)(function(bn){be(bn.fileList),fe==null||fe(bn)}),Cn=g()(g()({},i),{},{fileList:Xe,onChange:nn}),En=function(Ve){var rn=Xe.filter(function(hn){return hn.uid!==Ve.uid});nn({file:Ve,fileList:rn})},Ln,Tn=function(Ve,rn,hn){var xn=typeof X=="function"?X(Ve):X;return(0,x.jsx)(Le,{placeholder:xn,upload:Cn,prefixCls:he,className:f()(N.placeholder),style:g()(g()({},W.placeholder),rn==null?void 0:rn.style),ref:hn})};if(o)Ln=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(ke,{upload:Cn,rootClassName:Pe,ref:me,children:o}),(0,x.jsx)(B,{getDropContainer:H,prefixCls:he,className:f()(Pe),children:Tn("drop")})]});else{var yn=Xe.length>0;Ln=(0,x.jsxs)("div",{className:f()(he,h()({},"".concat(he,"-rtl"),I==="rtl"),tn,Pe),style:g()(g()({},ge),sn),dir:I||"ltr",ref:we,children:[(0,x.jsx)(O,{prefixCls:he,items:Xe,onRemove:En,overflow:ve,upload:Cn,listClassName:f()(N.list),listStyle:g()(g()({},W.list),!yn&&{display:"none"}),itemClassName:f()(N.item),itemStyle:g()({},W.item),renderType:r.renderType}),Tn("inline",yn?{style:{display:"none"}}:{},me)]})}return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Ke,{}),(0,x.jsx)(t.Provider,{value:{disabled:M},children:Ln})]})}var Ie=v.forwardRef(ze);Ie.FileCard=de;var dn=Ie},50130:function($e,F,e){"use strict";e.d(F,{L:function(){return _},Z:function(){return v}});var z=e(97857),h=e.n(z),D=e(13769),g=e.n(D),E=e(67294),j=e(83962),b=e(76289),A=e(85893),k=["component"],f=E.memo(function(y){var c=(0,j.HJ)(),t=(0,b.TQ)(function(n){return n.onInput}),x=(0,E.useMemo)(function(){if(y.component)return y.component;var n=c;return(n==null?void 0:n[y.code])||function(){return"".concat(y.code," not found")}},[]);if(typeof x=="function"){var B=y.component,s=g()(y,k);return(0,A.jsx)(x,h()(h()({},s),{},{context:{onInput:t}}))}else return x});function v(y){var c=y.cards;return c!=null&&c.length?c.map(function(t,x){var B=(0,A.jsx)(f,h()({index:x,id:y.id,isLast:y.isLast},t),(t==null?void 0:t.id)||x+t.code);return t.code==="Text"?(0,A.jsx)("div",{className:y.className,children:B},x):B}):null}function _(y,c){return{code:y,data:c}}},67369:function($e,F,e){"use strict";e.d(F,{p4:function(){return _},hw:function(){return y},ZP:function(){return v}});var z=e(67294),h=e(56044),D=e(64057),g=e(68400),E=e.n(g),j=e(9053),b,A=(0,j.vJ)(b||(b=E()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorText},function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextTertiary},function(c){return c.theme.colorBorder}),k=A,f=e(85893);function v(c){var t=(0,h.wv)(),x=t.getPrefixCls,B=x("bubble-footer"),s=c.left,n=c.right;return s&&!s.type||n&&!n.type?null:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(k,{}),(0,f.jsxs)("div",{className:B,children:[(0,f.jsx)("div",{className:"".concat(B,"-left"),children:c.left}),(0,f.jsx)("div",{className:"".concat(B,"-right"),children:c.right})]})]})}function _(c){var t=(0,h.wv)(),x=t.getPrefixCls,B=x("bubble-footer-actions");return(0,f.jsx)("div",{className:B,children:c.data.map(function(s,n){return s.children?z.cloneElement(s.children,{key:n}):(0,f.jsx)(D.Z,{bordered:!1,icon:s.icon,size:"small",onClick:s.onClick},n)})})}function y(c){var t=(0,h.wv)(),x=t.getPrefixCls,B=x("bubble-footer-count");return(0,f.jsx)("div",{className:B,children:c.data.map(function(s){return(0,f.jsxs)("div",{className:"".concat(B,"-item"),children:[s[0],"\uFF1A",s[1]]},s[0])})})}v.Actions=_,v.Count=y},10146:function($e,F,e){"use strict";e.d(F,{Z:function(){return f}});var z=e(68400),h=e.n(z),D=e(9053),g=e(56044),E=e(9343),j=e(36674),b=e(85893),A,k=(0,D.vJ)(A||(A=h()([`
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

`])),function(v){return v.theme.prefixCls},function(v){return v.theme.colorFillSecondary},function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls},function(v){return v.theme.colorText},function(v){return v.theme.colorError});function f(v){var _=v.title,y=_===void 0?"Answers have stopped":_,c=v.type,t=c===void 0?"interrupted":c,x=v.desc,B=(0,g.wv)(),s=B.getPrefixCls,n=s("interrupted");return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(k,{}),(0,b.jsxs)("div",{className:"".concat(n),children:[(0,b.jsxs)("div",{className:"".concat(n,"-header"),children:[(0,b.jsx)("div",{className:"".concat(n,"-icon-wrapper"),children:t==="interrupted"?(0,b.jsx)(E.Z,{className:"".concat(n,"-header-interrupted")}):(0,b.jsx)(j.Z,{className:"".concat(n,"-header-error")})}),(0,b.jsx)("span",{children:y})]}),x&&(0,b.jsx)("div",{className:"".concat(n,"-desc"),children:x})]})]})}},9146:function($e,F,e){"use strict";e.d(F,{Z:function(){return Je}});var z=e(97857),h=e.n(z),D=e(93967),g=e.n(D),E=e(67294),j=e(68400),b=e.n(j),A=e(9053),k,f=(0,A.vJ)(k||(k=b()([`
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
`])),function(R){return R.theme.prefixCls},function(R){return R.theme.prefixCls},function(R){return R.theme.colorText},function(R){return R.theme.fontSize},function(R){return R.theme.lineHeight},function(R){return R.theme.prefixCls},function(R){return R.theme.borderRadiusLG},function(R){return R.theme.colorPrimaryBg},function(R){return R.theme.prefixCls},function(R){return R.theme.colorText},function(R){return R.theme.colorText},function(R){return R.theme.colorBgBase},function(R){return R.theme.colorBgBase},function(R){return R.theme.colorTextTertiary},function(R){return R.theme.colorTextTertiary},function(R){return R.theme.colorBgBase},function(R){return R.theme.colorBgBase},function(R){return R.theme.colorTextSecondary},function(R){return R.theme.colorTextSecondary},function(R){return R.theme.colorBgBase},function(R){return R.theme.colorBgBase}),v=e(56044),_=e(66109),y=e(50130),c=e(85893);function t(){var R=(0,v.wv)(),de=R.getPrefixCls,Se=de("bubble-loading");return(0,c.jsxs)("div",{className:Se,children:[(0,c.jsx)("div",{className:"".concat(Se,"-dot1")}),(0,c.jsx)("div",{className:"".concat(Se,"-dot2")}),(0,c.jsx)("div",{className:"".concat(Se,"-dot3")}),(0,c.jsx)("div",{className:"".concat(Se,"-text"),children:"-"})]})}var x=e(9783),B=e.n(x),s=e(68997),n=function(de){var Se=de.avatar,O=de.msgStatus,Y=de.isAssistant,Q=de.prefixCls,_e=de.className,Re=de.style,Le=E.isValidElement(Se)?Se:(0,c.jsx)(s.Z,h()({},Se));return(0,c.jsx)("div",{className:g()("".concat(Q,"-avatar"),B()({},"".concat(Q,"-avatar-loading"),Y&&O==="generating"),_e),style:Re,children:Le})},T=n,u=E.createContext({}),P=function(de){var Se=de.isLast,O=de.className,Y=de.rootClassName,Q=de.style,_e=de.classNames,Re=_e===void 0?{}:_e,Le=de.styles,Ee=Le===void 0?{}:Le,ke=de.avatar,Oe=de.content,Ke=Oe===void 0?"":Oe,He=de.cards,ze=de.msgStatus,Ie=de.id,dn=de.role,r=de.variant,ye={assistant:"start",user:"end"}[dn]||"start",Ae=(0,v.wv)(),Pe=Ae.getPrefixCls,ge=Pe("bubble"),tn=g()(ge,Y,O,"".concat(ge,"-").concat(ye)),sn,cn=!(Ke!=null&&Ke.length)&&!(He!=null&&He.length);de.msgStatus==="generating"&&cn?sn=(0,c.jsx)(t,{}):sn=Ke?(0,c.jsx)(_.Z,{content:Ke,cursor:de.msgStatus==="generating"}):null;var o=ye==="assistant"||ye==="start",H="".concat(ge,"-content-").concat(r||(o?"borderless":"filled")),X=(0,c.jsxs)("div",{style:!o&&sn?{flexDirection:"column-reverse"}:{},className:"".concat(ge,"-content-wrapper"),children:[(0,c.jsx)(y.Z,{cards:He,id:Ie,isLast:Se,className:g()("".concat(ge,"-content"),"".concat(ge,"-content-wrapper-card"),H,Re.content)}),sn&&(0,c.jsx)("div",{style:h()({},Ee.content),className:g()("".concat(ge,"-content"),"".concat(ge,"-content-wrapper-card"),H,Re.content),children:sn})]});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(f,{}),(0,c.jsxs)("div",{style:Q,className:tn,id:Ie,"data-role":dn,children:[ke&&(0,c.jsx)(T,{avatar:ke,msgStatus:ze,isAssistant:o,prefixCls:ge,className:Re.avatar,style:Ee.avatar}),X]})]})},ee=E.memo(P),$=e(13769),d=e.n($),ne=e(5574),J=e.n(ne),Z=e(80322),G=e(64057),ae=e(25109),Ce=function(de,Se){var O=(0,v.wv)(),Y=O.getPrefixCls,Q=(0,Z.a)(),_e=Q.isAtBottom,Re=Q.scrollToBottom;E.useImperativeHandle(Se,function(){return{scrollToBottom:function(Ee){function ke(Oe){return Ee.apply(this,arguments)}return ke.toString=function(){return Ee.toString()},ke}(function(Ee){Ee=Ee||{animation:"instant"},Re(Ee)})}});var Le=Y("bubble-list-scroll-to-bottom");return(0,c.jsx)("div",{className:g()(Le,"".concat(Le,"-").concat(_e?"hide":"show")),children:(0,c.jsx)(G.Z,{icon:(0,c.jsx)(ae.Z,{}),shape:"circle",onClick:function(){return Re({animation:"instant"})}})})},p=E.forwardRef(Ce),Me,w=(0,A.vJ)(Me||(Me=b()([`
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
`])),function(R){return R.theme.prefixCls},function(R){return R.theme.prefixCls},function(R){return R.theme.prefixCls},function(R){return R.theme.colorPrimaryBorder},function(R){return R.theme.colorPrimaryBg},function(R){return R.theme.colorPrimary}),ce=e(78234),S=["key"],ie=function(de,Se){var O,Y,Q=de.items,_e=Q===void 0?[]:Q,Re=de.smooth,Le=Re===void 0?!0:Re,Ee=(0,E.useState)(!1),ke=J()(Ee,2),Oe=ke[0],Ke=ke[1],He=E.useRef(),ze=(0,v.wv)(),Ie=ze.getPrefixCls,dn=Ie("bubble-list");E.useImperativeHandle(Se,function(){return{scrollToBottom:function(){He.current.scrollToBottom()}}}),(0,ce.Z)(function(){Ke(!0)});var r=Oe&&Le?"smooth":"instant";return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(w,{}),(0,c.jsxs)(Z.h,{id:de.id,className:g()("".concat(dn,"-wrapper"),(O=de.classNames)===null||O===void 0?void 0:O.wrapper),resize:r,initial:"instant",style:de.style,children:[(0,c.jsx)(Z.h.Content,{className:g()("".concat(dn),(Y=de.classNames)===null||Y===void 0?void 0:Y.list),children:de.children?de.children:_e.map(function(ye,Ae){var Pe=ye.key,ge=d()(ye,S),tn=Ae===_e.length-1;return(0,E.createElement)(ee,h()(h()({},ge),{},{isLast:tn,key:ge.id||Pe}))})}),(0,c.jsx)(p,{ref:He})]})]})},pe=E.forwardRef(ie),De=pe,We=e(67369),Qe=e(10146);ee.List=De,ee.Spin=t,ee.Footer=We.ZP,ee.Interrupted=Qe.Z;var Je=ee},76289:function($e,F,e){"use strict";e.d(F,{TQ:function(){return c},vi:function(){return _}});var z=e(97857),h=e.n(z),D=e(13769),g=e.n(D),E=e(5574),j=e.n(E),b=e(67294),A=e(79785),k=e(59214),f=e(85893),v=["children"];function _(t){var x=(0,A.Z)([]),B=j()(x,3),s=B[0],n=B[1],T=B[2],u=(0,A.Z)("0"),P=j()(u,3),ee=P[0],$=P[1],d=P[2],ne=(0,A.Z)(0),J=j()(ne,3),Z=J[0],G=J[1],ae=J[2],Ce=(0,A.Z)([]),p=j()(Ce,3),Me=p[0],w=p[1],ce=p[2],S=(0,A.Z)(!1),ie=j()(S,3),pe=ie[0],De=ie[1],We=ie[2],Qe=(0,A.Z)(!1),Je=j()(Qe,3),R=Je[0],de=Je[1],Se=Je[2],O=(0,A.Z)(!0),Y=j()(O,3),Q=Y[0],_e=Y[1],Re=Y[2],Le=t.children,Ee=g()(t,v),ke=h()({sessionList:s,setSessionList:n,getSessionList:T,currentSessionKey:ee,setCurrentSessionKey:$,getCurrentSessionKey:d,messages:Me,setMessages:w,getMessages:ce,loading:pe,setLoading:De,getLoading:We,disabled:R,setDisabled:de,getDisabled:Se,sessionListShow:Q,setSessionListShow:_e,getSessionListShow:Re,currentRegenerateIndex:Z,setCurrentRegenerateIndex:G,getCurrentRegenerateIndex:ae},Ee);return(0,f.jsx)(y.Provider,{value:ke,children:Le})}var y=(0,k.kr)(void 0);function c(t){try{var x=(0,k.Sz)(y,t);return x}catch(B){return{}}}},37254:function($e,F,e){"use strict";e.d(F,{G:function(){return h}});var z=e(76289);function h(){var D=(0,z.TQ)(function(f){return{loading:f.loading,getLoading:f.getLoading,disabled:f.disabled,getDisabled:f.getDisabled,setLoading:f.setLoading,setDisabled:f.setDisabled}}),g=D.loading,E=D.disabled,j=D.setLoading,b=D.setDisabled,A=D.getLoading,k=D.getDisabled;return{loading:g,disabled:E,setLoading:j,setDisabled:b,getLoading:A,getDisabled:k}}},4421:function($e,F,e){"use strict";e.d(F,{y:function(){return b}});var z=e(19632),h=e.n(z),D=e(97857),g=e.n(D),E=e(67294),j=e(76289);function b(){var A=(0,j.TQ)(function(x){return{messages:x.messages,setMessages:x.setMessages,getMessages:x.getMessages}}),k=A.messages,f=A.setMessages,v=A.getMessages,_=E.useCallback(function(){var x,B=((x=arguments.length<=0?void 0:arguments[0])===null||x===void 0?void 0:x.id)||(arguments.length<=0?void 0:arguments[0]),s=(arguments.length<=1?void 0:arguments[1])||(arguments.length<=0?void 0:arguments[0]);f==null||f(function(n){var T=n.findIndex(function(P){return P.id===B});if(T>-1){var u=g()(g()({},n[T]),s);return[].concat(h()(n.slice(0,T)),[u],h()(n.slice(T+1)))}else return[].concat(h()(n),[s])})},[]),y=E.useCallback(function(x){f(function(B){return B.filter(function(s){return s.id!==x.id})})},[]),c=E.useCallback(function(){f([])},[]),t=E.useCallback(function(x){return v().find(function(B){return B.id===x})},[]);return{messages:k,getMessage:t,setMessages:f,getMessages:v,updateMessage:_,removeMessage:y,removeAllMessages:c}}},61316:function($e,F,e){"use strict";e.d(F,{x:function(){return k}});var z=e(97857),h=e.n(z),D=e(19632),g=e.n(D),E=e(67294),j=e(76289),b=e(88773),A=e(73935);function k(){var f=(0,j.TQ)(function(Z){return{getCurrentSessionKey:Z.getCurrentSessionKey,currentRegenerateIndex:Z.currentRegenerateIndex,setCurrentRegenerateIndex:Z.setCurrentRegenerateIndex,getCurrentRegenerateIndex:Z.getCurrentRegenerateIndex,sessionListShow:Z.sessionListShow,setSessionListShow:Z.setSessionListShow,sessionList:Z.sessionList,setSessionList:Z.setSessionList,currentSessionKey:Z.currentSessionKey,setCurrentSessionKey:Z.setCurrentSessionKey,getSessionList:Z.getSessionList}}),v=f.getCurrentSessionKey,_=f.sessionList,y=f.setSessionList,c=f.currentSessionKey,t=f.setCurrentSessionKey,x=f.sessionListShow,B=f.setSessionListShow,s=f.currentRegenerateIndex,n=f.setCurrentRegenerateIndex,T=f.getCurrentRegenerateIndex,u=f.getSessionList,P=E.useCallback(function(){var Z=(0,b.Z)(),G={label:Date.now().toString(),key:Z,messages:[[]]};return A.flushSync(function(){y(function(ae){var Ce=[].concat(g()(ae),[G]);return Ce}),t(Z)}),Z},[]),ee=E.useCallback(function(Z){y(function(G){var ae=G.filter(function(Ce){return Ce.key!==Z});return ae})},[]),$=E.useCallback(function(Z){var G=v(),ae=T();y(function(Ce){return Ce.map(function(p){return p.key===G?(p.messages[ae]=Z,h()({},p)):p})})},[]),d=E.useCallback(function(Z,G){var ae;return(ae=u().find(function(Ce){return Ce.key===Z}))===null||ae===void 0?void 0:ae.messages[G]},[]),ne=E.useCallback(function(){return{sessionList:u(),currentSessionKey:v(),currentRegenerateIndex:T()}},[]),J=E.useCallback(function(Z){var G=Z.sessionList,ae=Z.currentSessionKey,Ce=Z.currentRegenerateIndex;y(G),t(ae),n(Ce)},[]);return{currentRegenerateIndex:s,setCurrentRegenerateIndex:n,getCurrentRegenerateIndex:T,sessionList:_,setSessionList:y,getSessionList:u,currentSessionKey:c,setCurrentSessionKey:t,sessionListShow:x,setSessionListShow:B,createSession:P,deleteSession:ee,updateSessionMessages:$,getMessagesBySession:d,getSession:ne,updateSession:J}}},29041:function($e,F,e){"use strict";e.d(F,{ZP:function(){return ve}});var z=e(97857),h=e.n(z),D=e(13769),g=e.n(D),E=e(5574),j=e.n(E),b=e(67294),A=e(93967),k=e.n(A),f=e(56044),v=e(85265),_=e(17909),y=e(76289),c=e(68400),t=e.n(c),x=e(9053),B,s=(0,x.vJ)(B||(B=t()([`

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
`])),function(M){return M.theme.prefixCls},function(M){return M.theme.fontFamily},function(M){return M.theme.colorBgBase},function(M){return M.theme.colorBgBase},function(M){return M.theme.colorBgBase},function(M){return M.theme.colorFillTertiary}),n=e(85893);function T(M){var oe=(0,y.TQ)(function(te){return{sessionListShow:te.sessionListShow,setSessionListShow:te.setSessionListShow}}),N=oe.sessionListShow,V=oe.setSessionListShow,W=(0,f.wv)(),i=W.getPrefixCls,K=i("chat-anywhere-layout"),I=P();return(0,b.useEffect)(function(){V(!I)},[I]),M.left?I?(0,n.jsx)(v.Z,{width:"80vw",styles:{body:{padding:0}},open:N,onClose:function(){V(!1)},title:null,closable:!1,placement:"left",children:(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:M.left})}):(0,n.jsx)("div",{className:k()("".concat(K,"-left"),N?"":"".concat(K,"-left-hide")),children:M.left}):null}function u(M){var oe=(0,f.wv)(),N=oe.getPrefixCls,V=N("chat-anywhere-layout"),W=(0,y.TQ)(function(i){return i.uiConfig});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{}),(0,n.jsx)("div",{className:V,children:(0,n.jsxs)("div",{className:"".concat(V,"-main"),children:[(0,n.jsx)(T,h()({},M)),(0,n.jsxs)("div",{className:"".concat(V,"-right"),style:{background:W==null?void 0:W.background},children:[M.top,M.right]})]})})]})}var P=function(){var oe=(0,_.Z)(),N=(0,y.TQ)(function(V){return V.uiConfig});return!oe.md||(N==null?void 0:N.narrowScreen)},ee=e(9368),$=e(64057),d=e(21403),ne=e(61316),J=e(4421),Z,G=(0,x.vJ)(Z||(Z=t()([`
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

`])),function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls}),ae=e(50287),Ce=e(67392),p=e(13660),Me=e(12624);function w(){var M=(0,f.wv)(),oe=M.getPrefixCls,N=oe("chat-anywhere-session-list"),V=(0,y.TQ)(function(W){return W.sessionListShow});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(G,{}),(0,n.jsxs)("div",{className:k()("".concat(N),V?"":"".concat(N,"-hide")),children:[(0,n.jsx)(S,{}),(0,n.jsx)(ce,{})]})]})}function ce(){var M=(0,f.wv)(),oe=M.getPrefixCls,N=oe("chat-anywhere-session-list"),V=(0,ne.x)(),W=V.currentSessionKey,i=V.setCurrentSessionKey,K=V.currentRegenerateIndex,I=V.sessionList,te=V.getMessagesBySession,he=V.setSessionListShow,we=(0,J.y)(),me=we.setMessages,an=(0,y.TQ)(function(be){return be.getLoading}),Ge=(0,y.TQ)(function(be){return be.onSessionKeyChange}),Xe=P();return(0,b.useEffect)(function(){var be=te(W,K);me(be)},[W,K]),(0,n.jsx)("div",{className:"".concat(N,"-session"),children:(0,n.jsx)(ee.Z,{menu:[{key:"delete",icon:(0,n.jsx)(ae.Z,{}),danger:!0,onClick:function(nn){}}],activeKey:W,items:I,onActiveChange:function(nn){an()||(Xe&&he(!1),requestIdleCallback(function(){i(nn),Ge(nn)}))}})})}function S(){var M=(0,f.wv)(),oe=M.getPrefixCls,N=oe("chat-anywhere-session-list"),V=(0,ne.x)(),W=V.currentSessionKey,i=V.setCurrentSessionKey,K=V.deleteSession,I=V.createSession,te=V.sessionList,he=V.sessionListShow,we=V.setSessionListShow,me=(0,y.TQ)(function(Ge){return Ge.uiConfig}),an=P();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(N,"-logo"),children:[me==null?void 0:me.logo,(0,n.jsx)($.Z,{bordered:!1,onClick:function(){return we(!he)},icon:he?(0,n.jsx)(Ce.Z,{}):(0,n.jsx)(p.Z,{})})]}),(0,n.jsx)("div",{className:"".concat(N,"-adder"),children:(0,n.jsx)(d.Z,{type:"primary",block:!0,icon:(0,n.jsx)(Me.Z,{}),onClick:function(){an&&we(!1),I()},children:"New Session"})})]})}var ie=e(9783),pe=e.n(ie),De=e(9146),We=e(19632),Qe=e.n(We),Je=e(52677),R=e.n(Je),de=e(15009),Se=e.n(de),O=e(99289),Y=e.n(O),Q=e(41154),_e=e(66672),Re=e(36417),Le=e(37254),Ee,ke=(0,x.vJ)(Ee||(Ee=t()([`
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
`])),function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls}),Oe=e(86578),Ke=e(7654),He=e(92053),ze=e(86250),Ie=["trigger"];function dn(M){var oe=M.uploadPropsList,N=(0,f.wv)(),V=N.getPrefixCls,W=V("chat-anywhere-sender"),i=(0,b.useState)(!1),K=j()(i,2),I=K[0],te=K[1],he=(0,b.useRef)([]),we=(0,b.useMemo)(function(){return oe.map(function(an,Ge){return(0,n.jsx)("div",{onClick:function(){var be;(be=he.current[Ge])===null||be===void 0||be.click(),te(!1)},children:an.trigger},Ge)})},[oe]),me=(0,b.useMemo)(function(){return oe.map(function(an,Ge){var Xe=an.trigger,be=g()(an,Ie);return(0,n.jsx)(Q.Z,h()(h()({},be),{},{children:(0,n.jsx)("div",{ref:function(Cn){return he.current[Ge]=Cn}})}),Ge)})},[oe]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ke.Z,{placement:"bottomLeft",open:I,onOpenChange:te,content:(0,n.jsx)(ze.Z,{vertical:!0,children:we}),trigger:"click",styles:{body:{padding:4}},children:(0,n.jsx)($.Z,{icon:(0,n.jsx)(He.Z,{}),bordered:!1})}),(0,n.jsx)("div",{className:"".concat(W,"-upload-hidden-nodes"),children:me})]})}var r=(0,b.forwardRef)(function(M,oe){var N=b.useState(""),V=j()(N,2),W=V[0],i=V[1],K=(0,Le.G)(),I=(0,y.TQ)(function(qe){return qe.onUpload.map(function(Ue){return h()(h()({},Ue),{},{disabled:Ue.disabled||K.disabled})})}),te=new Array((I==null?void 0:I.length)||0).fill([]),he=(0,b.useState)(!1),we=j()(he,2),me=we[0],an=we[1],Ge=b.useState(te),Xe=j()(Ge,2),be=Xe[0],nn=Xe[1],Cn=(0,b.useRef)(te);(0,b.useEffect)(function(){nn(te)},[te.length]),(0,b.useEffect)(function(){Cn.current=be},[be]);var En=(0,y.TQ)(function(qe){return qe.uiConfig}),Ln=(0,f.wv)(),Tn=Ln.getPrefixCls,yn=Tn("chat-anywhere-sender"),bn=(0,y.TQ)(function(qe){return qe.onStop}),Ve=(0,y.TQ)(function(qe){var Ue={beforeUI:void 0,afterUI:void 0,morePrefixActions:void 0,maxLength:void 0,zoomable:!0,beforeSubmit:function(){return Promise.resolve(!0)},header:[],enableFocusExpand:!1,variant:"default",hide:!1};return h()(h()({},Ue),qe.onInput)});if(b.useImperativeHandle(oe,function(){return{setInputContent:function(Ue,vn){i(Ue),nn(vn||[[]])},getAttachedFiles:function(){return Cn.current}}},[]),(0,b.useEffect)(function(){K.setDisabled(Ve.disabled)},[Ve.disabled]),Ve.hide)return null;var rn=function(){var qe=Y()(Se()().mark(function Ue(vn,fn){return Se()().wrap(function(pn){for(;;)switch(pn.prev=pn.next){case 0:nn(function(Dn){return Dn.map(function(Jn,Bn){return Bn===vn?fn:Jn})});case 1:case"end":return pn.stop()}},Ue)}));return function(vn,fn){return qe.apply(this,arguments)}}(),hn=(0,b.useMemo)(function(){if(Ve.variant==="aigc"||!(I!=null&&I.length))return[];var qe=I.map(function(Ue,vn){var fn;return Ue.trigger?fn=Ue.trigger:(Ue.title||Ue.description)&&I.length>1?fn=(0,n.jsxs)(d.Z,{type:"text",icon:Ue.icon,children:[Ue.title&&(0,n.jsx)("span",{children:Ue.title}),Ue.description&&(0,n.jsx)("span",{style:{fontSize:"0.8em",opacity:.8},children:Ue.description})]}):fn=(0,n.jsx)($.Z,{icon:Ue.icon,bordered:!1}),h()(h()({},Ue),{},{fileList:be[vn],key:vn,onChange:function(pn){Ue.beforeUpload&&pn.file.status&&rn(vn,pn.fileList),Ue.beforeUpload||rn(vn,pn.fileList)},showUploadList:!1,trigger:fn})});return qe.length===1?(0,n.jsx)(Q.Z,h()(h()({},qe[0]),{},{children:qe[0].trigger})):(0,n.jsx)(dn,{uploadPropsList:qe})},[Ve.variant,I,be]),xn=(0,n.jsx)(Oe.Z.SenderHeader,{onUpload:I,attachedFiles:be,onFileChange:rn}),gn=(0,n.jsx)(_e.Z.Header,{closable:!1,open:be==null?void 0:be.some(function(qe){return qe.length}),children:be.map(function(qe,Ue){return qe.length?(0,n.jsx)(Re.Z,{items:qe,onChange:function(fn){return rn(Ue,fn.fileList)}},Ue):null})}),In=Ve.variant==="aigc"?xn:gn,Pn=be.map(function(qe){return qe.filter(function(Ue){return Ue.status==="done"})}),wn=be.some(function(qe){return qe.some(function(Ue){return Ue.status==="uploading"})}),Xn=function(Ue){if(!(I!=null&&I.length))return;var vn=Ue.type||"",fn=Ue.name||"",Yn=function(Zn){return Zn?Zn.split(",").some(function(Un){var Rn=Un.trim();if(!Rn)return!1;if(Rn.startsWith("."))return fn.toLowerCase().endsWith(Rn.toLowerCase());if(Rn.includes("*")){if(Rn==="*/*")return!0;var Fn=Rn.split("/"),Qn=j()(Fn,1),An=Qn[0],mn=vn.split("/"),_n=j()(mn,1),Wn=_n[0];return An===Wn}return vn===Rn}):!0},pn=I.findIndex(function(Sn){return Yn(Sn.accept)});if(pn===-1)return;var Dn=I[pn],Jn=be[pn]||[];if(Dn.maxCount&&Jn.length>=Dn.maxCount||!Dn.multiple&&Jn.length>0)return;if(Dn.beforeUpload){var Bn=Dn.beforeUpload(Ue,[Ue]);if(Bn===!1||Bn===Q.Z.LIST_IGNORE)return;if(Bn instanceof Promise){Bn.then(function(Sn){if(!(Sn===!1||Sn===Q.Z.LIST_IGNORE)){var Zn=Sn&&R()(Sn)==="object"?Sn:Ue;Kn(Zn)}}).catch(function(Sn){console.error("beforeUpload promise rejected:",Sn)});return}if(Bn&&R()(Bn)==="object"){Kn(Bn);return}}Kn(Ue);function Kn(Sn){var Zn=function(){var mn=fn.match(/\.([^.]+)$/);if(mn)return mn[1].toLowerCase();var _n=vn.match(/\/([^/+]+)/);return _n?_n[1].toLowerCase():"bin"},Un=Date.now(),Rn={uid:"paste_".concat(Un,"_").concat(Math.random().toString(36).slice(2,11)),name:fn||"pasted-".concat(Un,".").concat(Zn()),size:Sn.size,type:vn,status:"uploading",percent:0,originFileObj:Sn},Fn=function(mn){nn(function(_n){var Wn=Qe()(_n);return Wn[pn]=(Wn[pn]||[]).map(function(Vn){return Vn.uid===Rn.uid?h()(h()({},Vn),mn):Vn}),Wn})};if(nn(function(An){var mn=Qe()(An),_n=mn[pn]||[];if(!Dn.multiple)mn[pn]=[Rn];else{if(Dn.maxCount&&_n.length>=Dn.maxCount)return An;mn[pn]=[].concat(Qe()(_n),[Rn])}return mn}),vn&&vn.startsWith("image/")){var Qn=new FileReader;Qn.onload=function(An){var mn,_n=(mn=An.target)===null||mn===void 0?void 0:mn.result;typeof _n=="string"&&Fn({thumbUrl:_n,url:_n})},Qn.readAsDataURL(Sn)}Dn.customRequest({file:Sn,onSuccess:function(mn){Fn({status:"done",response:mn,percent:100})},onError:function(mn){Fn({status:"error",error:mn})},onProgress:function(mn){Fn({percent:mn.percent})}},{defaultRequest:function(){}})}},et=(0,b.useMemo)(function(){var qe;return(qe=I==null?void 0:I.some(function(Ue,vn){if(Ue.required){var fn=be[vn]||[];return fn.length===0}return!1}))!==null&&qe!==void 0?qe:!1},[I,be]),$n=et;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ke,{}),(0,n.jsxs)("div",{className:k()("".concat(yn,"-wrapper"),pe()(pe()({},"".concat(yn,"-wrapper-focus"),me&&Ve.enableFocusExpand),"".concat(yn,"-wrapper-blur"),!me&&Ve.enableFocusExpand)),children:[En.quickInput&&(0,n.jsx)("div",{className:k()("".concat(yn,"-wrapper-header")),children:En.quickInput}),Ve.beforeUI,(0,n.jsx)(_e.Z,{placeholder:Ve.placeholder,enableFocusExpand:Ve.enableFocusExpand,value:W,onChange:i,maxLength:Ve.maxLength,disabled:wn||K.disabled,sendDisabled:$n,scalable:Ve==null?void 0:Ve.zoomable,header:In,prefix:(0,n.jsxs)(n.Fragment,{children:[hn,Ve==null?void 0:Ve.morePrefixActions]}),onSubmit:Y()(Se()().mark(function qe(){var Ue;return Se()().wrap(function(fn){for(;;)switch(fn.prev=fn.next){case 0:return fn.next=2,(Ve.beforeSubmit||function(){return Promise.resolve(!0)})();case 2:if(Ue=fn.sent,Ue){fn.next=5;break}return fn.abrupt("return");case 5:Ve.onSubmit({query:W,fileList:Pn}),i(""),nn(te);case 8:case"end":return fn.stop()}},qe)})),onCancel:function(){bn==null||bn(),K.setLoading(!1)},onFocus:function(){return an(!0)},onBlur:function(){return an(!1)},onPasteFile:Xn,loading:K.loading}),Ve.afterUI]})]})}),ye=e(69637),Ae=e(10325),Pe,ge=(0,x.vJ)(Pe||(Pe=t()([`
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


`])),function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls}),tn=(0,b.forwardRef)(function(M,oe){var N=(0,y.TQ)(function(Ge){return Ge.messages}),V=(0,f.wv)(),W=V.getPrefixCls,i=W("chat-anywhere"),K=(0,y.TQ)(function(Ge){return Ge.uiConfig}),I=(0,b.useState)(!1),te=j()(I,2),he=te[0],we=te[1];(0,ye.Z)(function(){we(!0)},300);var me=k()("".concat(i,"-chat"),pe()({},"".concat(i,"-chat-hide"),!he)),an=!(N!=null&&N.length);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ge,{}),(0,n.jsxs)("div",{className:me,children:[(0,n.jsx)(De.Z.List,{style:{height:0,flex:an?0:1},ref:oe.chatRef,items:N}),an?(0,n.jsx)("div",{className:"".concat(me,"-welcome"),children:K==null?void 0:K.welcome}):null,(0,n.jsx)("div",{className:"".concat(me,"-sender"),style:K!=null&&K.disclaimer?{marginBottom:16}:{},children:(0,n.jsx)(r,{ref:oe.inputRef})}),(K==null?void 0:K.disclaimer)&&(0,n.jsx)(Ae.Z,{style:{position:"absolute",bottom:0,width:"100%"},desc:K==null?void 0:K.disclaimer})]})]})}),sn,cn=(0,x.vJ)(sn||(sn=t()([`
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

`])),function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls});function o(){var M=(0,f.wv)(),oe=M.getPrefixCls,N=oe("chat-anywhere-header"),V=(0,y.TQ)(function(te){return te.uiConfig}),W=(0,ne.x)(),i=W.sessionListShow,K=W.setSessionListShow,I=P();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(cn,{}),(0,n.jsxs)("div",{className:N,children:[I&&(0,n.jsx)($.Z,{style:{marginLeft:12},bordered:!1,onClick:function(){return K(!i)},icon:i?(0,n.jsx)(Ce.Z,{}):(0,n.jsx)(p.Z,{})}),V.header]})]})}var H=e(83962),X=b.forwardRef(function(oe,N){var V=(0,J.y)(),W=(0,Le.G)(),i=(0,ne.x)();return b.useImperativeHandle(N,function(){return h()(h()(h()({},V),W),i)}),null}),fe=["cardConfig"],ve=(0,b.forwardRef)(function(M,oe){var N,V=(0,b.useState)(0),W=j()(V,2),i=W[0],K=W[1],I=M.cardConfig,te=g()(M,fe),he=(0,b.useRef)(null),we=(0,b.useRef)(null),me=(0,b.useRef)(null);return b.useImperativeHandle(oe,function(){return h()(h()(h()(h()({},he.current),we.current),me.current),{},{reload:function(){K(function(Ge){return Ge+1})}})}),(0,b.createElement)(y.vi,h()(h()({},te),{},{key:i}),(0,n.jsxs)(H.xy,{cardConfig:I,children:[(0,n.jsx)(u,{top:(N=te.uiConfig)!==null&&N!==void 0&&N.header?(0,n.jsx)(o,{}):null,left:te.onSessionKeyChange?(0,n.jsx)(w,{}):null,right:(0,n.jsx)(tn,{ref:{chatRef:he,inputRef:we}})}),(0,n.jsx)(X,{ref:me})]}))})},9368:function($e,F,e){"use strict";e.d(F,{Z:function(){return Se}});var z=e(97857),h=e.n(z),D=e(9783),g=e.n(D),E=e(5574),j=e.n(E),b=e(13769),A=e.n(b),k=e(93967),f=e.n(k),v=e(67294),_=e(21317),y=e(85893),c=v.createContext(null),t=function(Y){var Q=Y.children,_e=v.useContext(c),Re=_e.prefixCls;return(0,y.jsx)("div",{className:f()("".concat(Re,"-group-title")),children:Q&&(0,y.jsx)(_.default.Text,{children:Q})})},x=t,B=e(30339),s=e(54604),n=e(7654),T=e(64057),u=e(21403),P=["prefixCls","info","className","direction","onClick","active","menu"],ee=["key"],$={};function d(O){var Y=(0,v.useState)($[O]),Q=j()(Y,2),_e=Q[0],Re=Q[1];return[_e,function(Le){for(var Ee in $)$[Ee]=!1;$[O]=Le,Re(Le)}]}var ne=function(Y){var Q,_e=d(Y.info.key),Re=j()(_e,2),Le=Re[0],Ee=Re[1],ke=(0,v.useState)(!1),Oe=j()(ke,2),Ke=Oe[0],He=Oe[1],ze=Y.prefixCls,Ie=Y.info,dn=Y.className,r=Y.direction,ye=Y.onClick,Ae=Y.active,Pe=Y.menu,ge=A()(Y,P),tn=(0,B.Z)(ge,{aria:!0,data:!0,attr:!0}),sn=Ie.disabled,cn=f()(dn,"".concat(ze,"-item"),g()({},"".concat(ze,"-item-active"),Ae&&!sn),g()({},"".concat(ze,"-item-disabled"),sn),g()({},"".concat(ze,"-item-timeline"),Ie.timeline)),o=function(){!sn&&ye&&ye(Ie)};return(0,y.jsxs)("li",h()(h()({},tn),{},{className:cn,onClick:o,children:[(0,y.jsxs)("div",{className:"".concat(ze,"-content"),children:[Ie.icon&&(0,y.jsx)("div",{className:"".concat(ze,"-icon"),children:Ie.icon}),Ie.timeline&&(0,y.jsx)("div",{className:"".concat(ze,"-timeline")}),(0,y.jsx)(J,{editable:Le,setEditable:Ee,prefixCls:ze,info:Ie,onEdit:Pe==null||(Q=Pe.find(function(H){return H.key==="edit"}))===null||Q===void 0?void 0:Q.onEdit}),Pe&&!sn&&(0,y.jsx)(n.Z,{styles:{body:{padding:4}},trigger:["click"],open:Ke,onOpenChange:He,content:(0,y.jsx)("div",{className:"".concat(ze,"-menu-popover"),children:Pe.map(function(H){var X=H.key,fe=A()(H,ee),ve=h()(h()({},fe),{},{onClick:function(oe){if(X==="edit")Ee(!0);else{var N;(N=fe.onClick)===null||N===void 0||N.call(fe,Ie)}He(!1)}});return(0,y.jsx)(G,h()(h()({},ve),{},{info:Ie}),X)})}),placement:"bottom",children:(0,y.jsx)(T.Z,{bordered:!1,icon:(0,y.jsx)(s.Z,{}),disabled:sn,className:"".concat(ze,"-menu-icon"),onClick:function(X){return X.stopPropagation()}})})]}),Ie.desc&&(0,y.jsx)("div",{className:"".concat(ze,"-desc"),style:Ie.timeline?{marginLeft:16}:{},children:Ie.desc})]}))};function J(O){var Y=O.editable,Q=O.prefixCls,_e=O.info,Re=O.setEditable,Le=O.onEdit,Ee=(0,v.useState)(_e.label),ke=j()(Ee,2),Oe=ke[0],Ke=ke[1];return(0,v.useEffect)(function(){Ke(_e.label)},[_e.label]),Y?(0,y.jsx)(Z,{prefixCls:Q,value:Oe,onBlur:function(ze){var Ie;if(ze===Oe)return Re(!1);(Ie=Le(ze,_e))===null||Ie===void 0||Ie.then(function(){Ke(ze)}).catch(function(){Ke(Oe)}).finally(function(){Re(!1)})},setEditable:Re}):(0,y.jsx)("div",{className:"".concat(Q,"-label"),children:Oe})}function Z(O){var Y=O.prefixCls,Q=O.value,_e=O.onBlur,Re=O.setEditable,Le=(0,v.useState)(Q),Ee=j()(Le,2),ke=Ee[0],Oe=Ee[1],Ke=(0,v.useRef)();return(0,v.useEffect)(function(){Ke.current.focus()},[]),(0,v.useEffect)(function(){Oe(Q)},[Q]),(0,y.jsx)("input",{ref:Ke,className:"".concat(Y,"-label-edit"),value:ke,onChange:function(ze){return Oe(ze.target.value)},onBlur:function(){return _e(ke)}})}function G(O){var Y=O.label,Q=O.icon,_e=O.danger,Re=O.info,Le=O.disabled,Ee=function(Oe){var Ke;Le||(Oe.stopPropagation(),(Ke=O.onClick)===null||Ke===void 0||Ke.call(O,Re))};return Q&&Y?(0,y.jsx)(u.Z,{disabled:Le,icon:Q,danger:_e,type:"text",onClick:Ee,children:Y}):Q?(0,y.jsx)(T.Z,{disabled:Le,icon:Q,danger:_e,bordered:!1,onClick:Ee}):Y?(0,y.jsx)(u.Z,{disabled:Le,danger:_e,type:"text",onClick:Ee,children:Y}):null}var ae=ne,Ce=e(60869),p=e(56044),Me=e(52677),w=e.n(Me),ce="__ungrouped",S=function(Y){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],_e=v.useMemo(function(){if(!Y)return[!1,void 0,void 0];var Oe={sort:void 0,title:void 0};return w()(Y)==="object"&&(Oe=h()(h()({},Oe),Y)),[!0,Oe.sort,Oe.title]},[Y]),Re=j()(_e,3),Le=Re[0],Ee=Re[1],ke=Re[2];return v.useMemo(function(){if(!Le){var Oe=[{name:ce,data:Q,title:void 0}];return[Oe,Le]}var Ke=Q.reduce(function(Ie,dn){var r=dn.group||ce;return Ie[r]||(Ie[r]=[]),Ie[r].push(dn),Ie},{}),He=Ee?Object.keys(Ke).sort(Ee):Object.keys(Ke),ze=He.map(function(Ie){return{name:Ie===ce?void 0:Ie,title:ke,data:Ke[Ie]}});return[ze,Le]},[Q,Y])},ie=S,pe=e(68400),De=e.n(pe),We=e(9053),Qe,Je=(0,We.vJ)(Qe||(Qe=De()([`
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
}`])),function(O){return O.theme.prefixCls},function(O){return O.theme.paddingXXS},function(O){return O.theme.prefixCls},function(O){return O.theme.paddingXL},function(O){return O.theme.prefixCls},function(O){return O.theme.colorTextSecondary},function(O){return O.theme.colorBgBase},function(O){return O.theme.colorBorder},function(O){return O.theme.colorTextSecondary},function(O){return O.theme.borderRadiusLG},function(O){return O.theme.colorBorder},function(O){return O.theme.colorFillTertiary},function(O){return O.theme.colorFillTertiary},function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls},function(O){return O.theme.colorText},function(O){return O.theme.prefixCls},function(O){return O.theme.colorTextDisabled},function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls},function(O){return O.theme.colorFillTertiary},function(O){return O.theme.colorText},function(O){return O.theme.colorText},function(O){return O.theme.fontFamily},function(O){return O.theme.fontSizeXL},function(O){return O.theme.controlHeightLG},function(O){return O.theme.controlHeightLG},function(O){return O.theme.paddingXS}),R=["prefixCls","rootClassName","items","activeKey","defaultActiveKey","onActiveChange","menu","styles","classNames","groupable","className","style"],de=function(Y){var Q=Y.prefixCls,_e=Y.rootClassName,Re=Y.items,Le=Y.activeKey,Ee=Y.defaultActiveKey,ke=Y.onActiveChange,Oe=Y.menu,Ke=Y.styles,He=Ke===void 0?{}:Ke,ze=Y.classNames,Ie=ze===void 0?{}:ze,dn=Y.groupable,r=Y.className,ye=Y.style,Ae=A()(Y,R),Pe=(0,B.Z)(Ae,{attr:!0,aria:!0,data:!0}),ge=(0,Ce.Z)(Ee,{value:Le}),tn=j()(ge,2),sn=tn[0],cn=tn[1],o=ie(dn,Re),H=j()(o,2),X=H[0],fe=H[1],ve=(0,p.wv)(),M=ve.direction,oe=ve.getPrefixCls,N=oe("conversations"),V=f()(N,r,_e,g()({},"".concat(N,"-rtl"),M==="rtl")),W=function(K){cn(K.key),ke&&ke(K.key)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Je,{}),(0,y.jsx)("ul",h()(h()({},Pe),{},{style:ye,className:V,children:X.map(function(i,K){var I=i.data.map(function(he,we){return(0,y.jsx)(ae,{info:he,prefixCls:N,direction:M,className:f()(Ie.item),style:He.item,menu:Oe,active:sn===he.key,onClick:W},he.key||"key-".concat(we))});if(fe){var te;return(0,y.jsxs)("li",{children:[(0,y.jsx)(c.Provider,{value:{prefixCls:N},children:((te=i.title)===null||te===void 0?void 0:te.call(i,i.name,{components:{GroupTitle:x}}))||(0,y.jsx)(x,{children:i.name},i.name)}),(0,y.jsx)("ul",{className:"".concat(N,"-list"),children:I})]},i.name||"key-".concat(K))}return I})}))]})},Se=de},24963:function($e,F,e){"use strict";e.r(F),e.d(F,{Audios:function(){return Me},DeepThink:function(){return g},DeepThinking:function(){return g},Files:function(){return c},Footer:function(){return ne},FooterActions:function(){return d.p4},FooterCount:function(){return d.hw},Images:function(){return T},Interrupted:function(){return Z},Text:function(){return $},Videos:function(){return Ce}});var z=e(67294),h=e(14082),D=e(85893);function g(w){return(0,D.jsx)(h.Z,{defaultOpen:w.data.defaultOpen!==void 0?w.data.defaultOpen:!0,title:w.data.title,loading:w.data.loading,content:w.data.content,className:w.data.className,open:w.data.open,autoCloseOnFinish:w.data.autoCloseOnFinish,maxHeight:w.data.maxHeight})}var E=e(68400),j=e.n(E),b=e(23345),A=e(36417),k=e(9053),f=e(56044),v=e(6411),_,y=(0,k.vJ)(_||(_=j()([`
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
`])),function(w){return w.theme.prefixCls},function(w){return w.theme.prefixCls},function(w){return w.theme.borderRadius},function(w){return w.theme.colorWhite},function(w){return w.theme.motionDurationSlow},function(w){return w.theme.prefixCls},function(w){return w.theme.prefixCls});function c(w){var ce=(0,f.wv)(),S=ce.getPrefixCls,ie=S("bubble-files");return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(y,{}),(0,D.jsx)(b.Z,{className:ie,children:w.data.map(function(pe,De){var We={name:pe.name||pe.filename,size:pe.size||pe.bytes,url:pe.url};return(0,D.jsxs)("div",{className:"".concat(ie,"-file"),children:[(0,D.jsx)(A.Z.FileCard,{item:We}),We.url&&(0,D.jsx)("div",{className:"".concat(ie,"-download"),onClick:function(){window.open(We.url,"_blank")},children:(0,D.jsx)(v.Z,{})})]},De)})})]})}var t=e(16494),x=e(55839),B,s=(0,k.vJ)(B||(B=j()([`
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
`])),function(w){return w.theme.prefixCls},function(w){return w.theme.prefixCls},function(w){return w.theme.prefixCls},function(w){return w.theme.prefixCls});function n(w){var ce=(0,f.wv)(),S=ce.getPrefixCls,ie=S("bubble-image");return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(s,{}),(0,D.jsx)("div",{className:"".concat(ie),children:(0,D.jsx)(t.Z,{fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",src:w.url,width:56,height:56,preview:{transitionName:""}})})]})}function T(w){return(0,D.jsx)(x.ZP,{locale:{Image:{preview:""}},children:(0,D.jsx)(b.Z,{children:w.data.map(function(ce,S){return(0,D.jsx)(n,{url:ce.url},S)})})})}var u=e(97857),P=e.n(u),ee=e(66109);function $(w){var ce=w.data.msgStatus==="generating";return(0,D.jsx)(ee.Z,P()(P()({cursor:ce},w.data),{},{typing:w.data.msgStatus==="generating"?w.data.typing:!1}))}var d=e(67369);function ne(w){return(0,D.jsx)(d.ZP,P()({},w.data))}var J=e(10146);function Z(w){return(0,D.jsx)(J.Z,P()({},w.data))}var G=e(51794),ae;function Ce(w){var ce=(0,f.wv)().getPrefixCls("bubble-video");return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(p,{}),(0,D.jsx)(b.Z,{children:w.data.map(function(S,ie){return(0,D.jsx)(G.Z,{className:ce,src:S.src,poster:S.poster,controls:!0},ie)})})]})}var p=(0,k.vJ)(ae||(ae=j()([`
.`,`-bubble-video {
  max-width: 256px;
  max-height: 144px;
  border-radius: 8px;
  border: 1px solid `,`;
  overflow: hidden;
}
`])),function(w){return w.theme.prefixCls},function(w){return w.theme.colorBorderSecondary});function Me(){return(0,D.jsx)("div",{children:"Audio"})}},55031:function($e,F,e){"use strict";e.d(F,{Z:function(){return ee}});var z=e(56044),h=e(31382),D=e(55839),g=e(16494),E=e(33948),j=e(52253),b=e(56137),A=e(1948),k=e(61763),f=e(77900),v=e(40443),_=e(33119),y=e(4356),c=e(72816),t=e(77382),x=e(72167),B=e(74398),s=e(55094),n=e(61401),T=e(85893),u={Click:{name:"\u70B9\u51FB",icon:(0,T.jsx)(E.Z,{})},Swipe:{name:"\u6ED1\u52A8",icon:(0,T.jsx)(j.Z,{})},Type:{name:"\u8F93\u5165",icon:(0,T.jsx)(b.Z,{})},Back:{name:"\u8FD4\u56DE",icon:(0,T.jsx)(A.Z,{})},Home:{name:"\u4E3B\u9875",icon:(0,T.jsx)(k.Z,{})},Done:{name:"\u5B8C\u6210",icon:(0,T.jsx)(f.Z,{})},Wait:{name:"\u7B49\u5F85",icon:(0,T.jsx)(v.Z,{spin:!0})},click:{name:"\u70B9\u51FB",icon:(0,T.jsx)(E.Z,{})},"right click":{name:"\u53F3\u952E\u70B9\u51FB",icon:(0,T.jsx)(E.Z,{})},"open app":{name:"\u6253\u5F00\u5E94\u7528",icon:(0,T.jsx)(_.Z,{})},computer_double_click:{name:"\u53CC\u51FB",icon:(0,T.jsx)(y.Z,{})},hotkey:{name:"\u5FEB\u6377\u952E",icon:(0,T.jsx)(c.Z,{})},presskey:{name:"\u6309\u952E",icon:(0,T.jsx)(t.Z,{})},scroll:{name:"\u6EDA\u52A8",icon:(0,T.jsx)(j.Z,{})},drag:{name:"\u62D6\u62FD",icon:(0,T.jsx)(x.Z,{})},type_with_clear_enter_pos:{name:"\u8F93\u5165\u5E76\u6E05\u9664",icon:(0,T.jsx)(b.Z,{})},triple_click:{name:"\u4E09\u51FB",icon:(0,T.jsx)(B.Z,{})},drag_end:{name:"\u62D6\u62FD\u7ED3\u675F",icon:(0,T.jsx)(x.Z,{})},type:{name:"\u8F93\u5165",icon:(0,T.jsx)(b.Z,{})},hscroll:{name:"\u6C34\u5E73\u6EDA\u52A8",icon:(0,T.jsx)(s.Z,{})},done:{name:"\u5B8C\u6210",icon:(0,T.jsx)(f.Z,{})},wait:{name:"\u7B49\u5F85",icon:(0,T.jsx)(v.Z,{spin:!0})},call_user:{name:"\u547C\u53EB\u7528\u6237",icon:(0,T.jsx)(n.Z,{})}},P=u;function ee($){var d,ne,J=(0,z.wv)(),Z=J.getPrefixCls,G=Z("operate-card");return(0,T.jsxs)("div",{children:[(0,T.jsx)("div",{className:"".concat(G,"-device-action-time"),children:$.time}),(0,T.jsx)(h.Z,{header:{className:"".concat(G,"-device-action"),icon:(0,T.jsx)("div",{className:"".concat(G,"-device-action-icon"),children:(d=P[$.action])===null||d===void 0?void 0:d.icon}),title:(0,T.jsxs)("div",{className:"".concat(G,"-device-action-content"),children:[(0,T.jsxs)("div",{className:"".concat(G,"-device-action-description"),children:[(0,T.jsx)("span",{children:$.actionName||((ne=P[$.action])===null||ne===void 0?void 0:ne.name)}),(0,T.jsx)("span",{children:$.description})]}),(0,T.jsx)("div",{className:"".concat(G,"-device-action-image"),children:(0,T.jsx)(D.ZP,{locale:{Image:{preview:""}},children:(0,T.jsx)(g.Z,{src:$.image,alt:$.description,width:"100%",height:"100%"})})})]})}})]})}},10325:function($e,F,e){"use strict";e.d(F,{Z:function(){return k}});var z=e(67294),h=e(68400),D=e.n(h),g=e(9053),E,j=(0,g.vJ)(E||(E=D()([`
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
`])),function(f){return f.theme.prefixCls},function(f){return f.theme.colorTextTertiary},function(f){return f.theme.prefixCls}),b=e(56044),A=e(85893);function k(f){var v=f.desc,_=v===void 0?"AI can also make mistakes, so please check carefully and use it with caution":v,y=(0,b.wv)(),c=y.getPrefixCls,t=c("disclaimer");return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(j,{}),(0,A.jsxs)("div",{className:t,style:f.style,children:[_,f.afterLink&&(0,A.jsx)("a",{className:"".concat(t,"-after-link"),href:f.afterLink.href,target:"_blank",children:f.afterLink.text})]})]})}},80115:function($e,F,e){"use strict";e.d(F,{Z:function(){return h}});var z=e(85893);function h(){return(0,z.jsx)("iframe",{srcDoc:`<html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>`})}},2534:function($e,F,e){"use strict";e.d(F,{Z:function(){return B}});var z=e(67294),h=e(68400),D=e.n(h),g=e(9053),E,j=(0,g.vJ)(E||(E=D()([`
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

`])),function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.colorText},function(s){return s.theme.colorSuccess},function(s){return s.theme.colorBgBase},function(s){return s.theme.prefixCls}),b=e(56044),A=e(55839),k=e(16494),f=e(89034),v=e(36374),_=e(85893);function y(){for(var s=arguments.length,n=new Array(s),T=0;T<s;T++)n[T]=arguments[T];return n.filter(Boolean).join(" ")}var c=function(n){var T=n.speed,u=T===void 0?1:T,P=n.backgroundColor,ee=P===void 0?"#b6a9f8":P,$=n.colors,d=$===void 0?["#c979ee","#ef788c","#eb7fc6","#6d67c8"]:$,ne=n.ringColors,J=ne===void 0?["white","blue","magenta","violet","lightyellow"]:ne,Z=n.className,G=Z===void 0?"":Z,ae=(0,z.useRef)(null);return(0,z.useEffect)(function(){if(CSS&&CSS.registerProperty)try{CSS.registerProperty({name:"--a",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--l",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--x",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--y",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--o",syntax:"<number>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--value",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--width-ratio",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--scale",syntax:"<number>",inherits:!0,initialValue:"0"})}catch(Ce){}},[]),(0,z.useEffect)(function(){var Ce=ae.current;if(Ce){var p=function(){var ce=Ce.getBoundingClientRect(),S=Math.min(ce.width,ce.height);Ce.style.setProperty("--actual-size","".concat(S,"px"))};p();var Me=new ResizeObserver(p);return Me.observe(Ce),function(){Me.disconnect()}}},[]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("style",{children:`
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
          background: `).concat(ee,`;
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
            `).concat(J.join(", "),`
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
      `)}),(0,_.jsxs)("div",{ref:ae,className:y("fluid-background-container",G),children:[(0,_.jsxs)("div",{className:"fluid-inner",children:[(0,_.jsx)("div",{className:"c c4",style:{"--i":0}}),(0,_.jsx)("div",{className:"c c1",style:{"--i":1}}),(0,_.jsx)("div",{className:"c c2",style:{"--i":2}}),(0,_.jsx)("div",{className:"c c3",style:{"--i":3}}),(0,_.jsx)("div",{className:"rings"})]}),(0,_.jsx)("div",{className:"glass"})]})]})},t=c,x=function(n){var T=(0,b.wv)(),u=T.getPrefixCls,P=u("image-generator"),ee=n.block,$=n.skeletonText,d=n.width,ne=d===void 0?320:d,J=n.height,Z=J===void 0?320:J,G=n.src,ae=n.loadingText,Ce=ae===void 0?"Painting...":ae,p=n.doneText,Me=p===void 0?"Paint Completed":p,w=n.skeleton||(0,_.jsxs)("div",{className:"".concat(P,"-default-skeleton"),style:{width:"100%",height:"100%"},children:[(0,_.jsx)("div",{className:"".concat(P,"-default-skeleton-bg"),children:(0,_.jsx)(t,{})}),(0,_.jsxs)("div",{className:"".concat(P,"-default-skeleton-content"),children:[(0,_.jsx)("img",{className:"".concat(P,"-default-skeleton-icon"),src:"https://img.alicdn.com/imgextra/i2/O1CN01M1X8yM1MWUC7u3Go5_!!6000000001442-54-tps-72-72.apng"}),$&&(0,_.jsx)("div",{className:"".concat(P,"-default-skeleton-text"),children:$})]})]}),ce=!G,S=ee?{aspectRatio:"".concat(ne,"/").concat(Z)}:{width:ne,height:Z};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(j,{}),(0,_.jsxs)("div",{className:P,children:[(0,_.jsxs)("div",{className:"".concat(P,"-text"),children:[ce?(0,_.jsx)(v.Z,{}):(0,_.jsx)(f.Z,{className:"".concat(P,"-text-success")}),ce?(0,_.jsx)("span",{style:{paddingLeft:20},children:Ce}):Me]}),(0,_.jsx)("div",{className:"".concat(P,"-wrapper"),style:S,children:ce?w:(0,_.jsx)(A.ZP,{locale:{Image:{preview:""}},children:(0,_.jsx)(k.Z,{width:"100%",height:"100%",src:G})})})]})]})},B=x},66109:function($e,F,e){"use strict";e.d(F,{Z:function(){return cn}});var z=e(19632),h=e.n(z),D=e(97857),g=e.n(D),E=e(67294),j=e(13769),b=e.n(j),A=e(55729),k=e(68400),f=e.n(k),v=e(9053),_,y=(0,v.vJ)(_||(_=f()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.colorBorder},function(o){return o.theme.colorFillQuaternary},function(o){return o.theme.colorText},function(o){return o.theme.borderRadiusSM},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.borderRadiusSM},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.colorFillSecondary},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.colorSuccess},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.colorFillQuaternary},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.colorTextSecondary},function(o){return o.theme.colorFillSecondary},function(o){return o.theme.motionEaseOut},function(o){return o.theme.colorWhite},function(o){return o.theme.colorPrimary});function c(o){var H=o.cursor,X=o.content,fe=o.animation,ve=(0,E.useMemo)(function(){return fe?"":H?H==="dot"?" :dot:":H==="underline"?" :underline:":" :dot:":""},[H,X]);return X+ve}var t=e(85893),x=["content","cursor","animation"];function B(o){var H=o.content,X=o.cursor,fe=o.animation,ve=b()(o,x),M=c({cursor:X,content:H,animation:fe}),oe=(0,E.useMemo)(function(){if(fe)return{hasNextChunk:fe&&X,enableAnimation:fe&&X}},[X,fe]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y,{}),(0,t.jsx)(A.Z,g()(g()({},ve),{},{content:M,streaming:oe}))]})}var s=e(5574),n=e.n(s),T=function(H){var X=H.content,fe=H.typing,ve=(0,E.useState)(0),M=n()(ve,2),oe=M[0],N=M[1],V=(0,E.useRef)();return(0,E.useEffect)(function(){return fe?V.current=setInterval(function(){N(function(W){return W+1})},typeof fe=="number"?fe:5):V.current&&clearInterval(V.current),function(){return clearInterval(V.current)}},[fe]),fe?X.slice(0,oe):X},u=T,P=e(56044),ee=e(93967),$=e.n(ee),d=function(){return null},ne=e(87427),J=e(96643),Z=e(97634),G=e(89698),ae=function(H){var X,fe=H.className,ve=H.children,M=(fe==null||(X=fe.match(/language-(\w+)/))===null||X===void 0?void 0:X[1])||"";return typeof ve!="string"?null:M==="mermaid"?(0,t.jsx)(ne.Z,{header:(0,t.jsx)(Ce,{lang:"mermaid",content:ve}),children:ve}):(0,t.jsx)(J.Z,{lang:M,header:(0,t.jsx)(Ce,{lang:M,content:ve}),children:ve})};function Ce(o){var H=o.lang,X=o.content,fe=(0,E.useState)(!1),ve=n()(fe,2),M=ve[0],oe=ve[1],N=(0,P.wv)(),V=N.getPrefixCls,W=V("code-header");return(0,t.jsxs)("div",{className:W,children:[(0,t.jsx)("div",{className:"".concat(W,"-lang"),children:H}),M?(0,t.jsx)(Z.Z,{className:"".concat(W,"-copied")}):(0,t.jsx)(G.Z,{className:"".concat(W,"-icon"),onClick:function(){navigator.clipboard.writeText(X),oe(!0),setTimeout(function(){oe(!1)},1e3)}})]})}var p=ae;function Me(o){return(0,t.jsx)("a",{href:o.src,target:"_blank",rel:"noopener noreferrer",children:o.src})}var w=e(55839),ce=e(16494),S=e(85576),ie=e(36231),pe=e(89102);function De(o){try{var H=o.src,X=new URL(H),fe=X.pathname,ve=fe.endsWith(".mp4"),M=fe.endsWith(".mp3")||fe.endsWith(".wav");return M?(0,t.jsx)("audio",g()(g()({src:o.src},o),{},{controls:!0})):ve?(0,t.jsx)(Qe,g()({src:o.src},o)):(0,t.jsx)(We,g()({src:o.src},o))}catch(oe){return null}}function We(o){return(0,t.jsx)(w.ZP,{locale:{Image:{preview:""}},children:(0,t.jsx)(ce.Z,g()({src:o.src},o))})}function Qe(o){var H=o.src,X=(0,E.useState)(!1),fe=n()(X,2),ve=fe[0],M=fe[1],oe=(0,P.wv)(),N=oe.getPrefixCls,V=N("markdown-video");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:V,children:(0,t.jsx)("div",{className:"".concat(V,"-poster"),onClick:function(){return M(!0)},children:(0,t.jsx)(ie.Z,{className:"".concat(V,"-play")})})}),(0,t.jsx)(S.Z,{closeIcon:(0,t.jsx)("a",{children:(0,t.jsx)(pe.Z,{style:{fontSize:20}})}),centered:!0,transitionName:"",footer:null,width:500,title:"",styles:{content:{padding:0}},open:ve,destroyOnHidden:!0,onCancel:function(){return M(!1)},children:(0,t.jsx)("video",{controls:!0,autoPlay:!0,style:{display:"block",width:"100%"},children:(0,t.jsx)("source",{src:H,type:"video/mp4"})})})]})}function Je(o){var H=(0,P.wv)().getPrefixCls("markdown");return(0,t.jsx)("div",{className:H,style:{fontSize:o.baseFontSize,lineHeight:o.baseLineHeight},children:o.content})}var R=e(79427),de=e(55241),Se,O=(0,v.vJ)(Se||(Se=f()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.colorTextSecondary},function(o){return o.theme.colorFillSecondary},function(o){return o.theme.motionEaseOut},function(o){return o.theme.colorWhite},function(o){return o.theme.colorPrimary});function Y(o){var H=(0,P.wv)(),X=H.getPrefixCls,fe=X("markdown-citation"),ve=o["data-text"],M=o["data-url"],oe=o["data-title"],N=o["data-content"],V=N||oe,W=(0,t.jsx)("sup",{className:fe,children:ve});return V&&(W=(0,t.jsx)(de.Z,{title:oe,content:M?(0,t.jsx)("a",{href:M,rel:"noreferrer",target:"_blank",children:M}):N,children:W})),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O,{}),W]})}function Q(o){var H,X=((H=o.citationsData[o["data-text"]])===null||H===void 0?void 0:H.render)||Y;return(0,t.jsx)(X,g()({},o))}var _e=[],Re={};function Le(o){var H=o.citations,X=H===void 0?_e:H,fe=o.citationsMap,ve=fe===void 0?Re:fe,M=(0,E.useMemo)(function(){var W=g()({},ve);return X.forEach(function(i,K){var I=K+1;W[I]=i}),[W,function(){return function(K){return(0,t.jsx)(Q,g()(g()({},K),{},{citationsData:W}))}}()]},[X,ve]),oe=n()(M,2),N=oe[0],V=oe[1];return{CitationComponent:V,citationsData:N,citationsDataCount:Object.keys(N).length}}var Ee=e(30861);function ke(o){return{name:"citation",level:"inline",tokenizer:function(X){var fe=X.match(/^\[([^\]]+)\](?!\()/);if(fe){var ve=fe[0].trim(),M=ve==null?void 0:ve.replace(/^\[([^\]]+)\]/g,"$1");if(o[M])return{type:"citation",raw:ve,text:ve==null?void 0:ve.replace(/^\[([^\]]+)\]/g,"$1"),renderType:"component"}}},renderer:function(X){if(o&&Object.keys(o).length===0)return null;var fe=X.text,ve=o==null?void 0:o[fe];return ve?'<citation data-text="'.concat(fe,'" data-url="').concat(ve.url,'" data-title="').concat(ve.title,'" data-content="').concat(ve.content,'"></citation>'):X.raw}}}var Oe,Ke=(0,v.vJ)(Oe||(Oe=f()([`
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
`])),function(o){var H=o.theme;return H.colorPrimary});function He(){var o=(0,P.wv)(),H=o.getPrefixCls,X="markdown-cursor-underline";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Ke,{}),(0,t.jsx)("span",{className:$()(X,H("markdown-cursor"))})]})}var ze=e(36374),Ie=function(H){var X=H["data-type"];return X==="dot"?(0,t.jsx)(ze.Z,{}):X==="underline"?(0,t.jsx)(He,{}):null};function dn(){var o={cursors:{dot:"dot",underline:"underline"}},H=Object.keys(o.cursors).map(function(ve){return ve.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|"),X=new RegExp(":(".concat(H,"):")),fe=new RegExp("^".concat(X.source));return{name:"cursor",level:"inline",start:function(M){var oe;return(oe=M.match(X))===null||oe===void 0?void 0:oe.index},tokenizer:function(M,oe){var N=fe.exec(M);if(N){var V=N[1],W=o.cursors[V];if(W)return{type:"cursor",raw:N[0],name:V,cursor:W}}},renderer:function(M){var oe='<custom-cursor data-type="'.concat(M.name,'"></custom-cursor>');return oe}}}var r=e(85018),ye=["href"];function Ae(o){return o["data-footnote-ref"]===""?(0,t.jsx)(Pe,g()({},o)):o.children==="\u21A9"&&o["data-footnote-backref"]===""?null:(0,t.jsx)("a",g()({},o))}function Pe(o){var H=(0,P.wv)(),X=H.getPrefixCls,fe=X("markdown-footnote"),ve=o.href,M=b()(o,ye);return(0,t.jsx)("a",g()(g()({},M),{},{className:fe,onClick:function(){try{var N=o.id.split("-"),V=n()(N,3),W=V[0],i=V[1],K=V[2],I=document.querySelector("#footnote-".concat(K)).querySelector("a").getAttribute("href");window.open(I,"_blank")}catch(te){}}}))}var ge={ALLOWED_TAGS:[]};function tn(){try{return new RegExp("(?<=a)b"),!0}catch(o){return!1}}var sn=tn(),cn=(0,E.memo)(function(o){var H=o.baseFontSize||14,X=o.baseLineHeight||1.7,fe=u({content:o.content,typing:o.typing&&!o.animation}),ve=(0,P.wv)().getPrefixCls("markdown"),M=o.raw,oe=M===void 0?!1:M,N=o.allowHtml,V=N===void 0?!0:N,W=Le({citations:o.citations,citationsMap:o.citationsMap}),i=W.citationsData,K=W.citationsDataCount,I=W.CitationComponent,te=(0,E.useMemo)(function(){return g()({code:p,style:d,script:d,img:o.disableImage?Me:De,citation:I,"custom-cursor":Ie,a:Ae},o.components)},[o.disableImage,I,o.components]),he=(0,E.useMemo)(function(){return V?{ADD_TAGS:["custom-cursor","citation"]}:ge},[V]),we=(0,E.useMemo)(function(){var be=(0,Ee.Z)();be.push(dn()),K>0&&be.push(ke(i));var nn=(0,r.Z)({sectionClass:"".concat(ve,"-footnotes")});return be.push.apply(be,h()(nn.extensions)),{extensions:be,walkTokens:nn.walkTokens}},[K,i]),me=we.extensions,an=we.walkTokens,Ge=(0,E.useMemo)(function(){return{extensions:me,walkTokens:an}},[me]),Xe=(0,t.jsx)(Je,{content:fe||"",baseFontSize:H,baseLineHeight:X});return oe||!sn?Xe:(0,t.jsx)(R.SV,{fallback:Xe,children:(0,t.jsx)(B,{dompurifyConfig:he,cursor:o.cursor,animation:o.animation,components:te,style:{fontSize:H,lineHeight:X},openLinksInNewTab:!0,className:$()(ve,o.className),content:fe||"",config:Ge})})})},36374:function($e,F,e){"use strict";e.d(F,{Z:function(){return f}});var z=e(68400),h=e.n(z),D=e(56044),g=e(9053),E=e(93967),j=e.n(E),b=e(85893),A,k=(0,g.vJ)(A||(A=h()([`
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
`])),function(v){return v.theme.prefixCls},function(v){return v.theme.colorText},function(v){return v.theme.colorText});function f(){var v=(0,D.wv)(),_=v.getPrefixCls,y=_("markdown-cursor-dot");return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(k,{}),(0,b.jsxs)("span",{className:j()(y,_("markdown-cursor")),children:[(0,b.jsx)("span",{style:{opacity:0,marginLeft:"-.75em"},children:"_"}),(0,b.jsx)("span",{className:"".concat(y,"-dot1")}),(0,b.jsx)("span",{className:"".concat(y,"-dot2")})]})]})}},12181:function($e,F,e){"use strict";e.d(F,{Z:function(){return P}});var z=e(5574),h=e.n(z),D=e(15009),g=e.n(D),E=e(99289),j=e.n(E),b=e(68400),A=e.n(b),k=e(41469),f=e(2093),v=e(9361),_=e(96486),y=e.n(_),c=e(67294),t=e(56044),x=e(9053),B=e(85893),s,n=(0,x.vJ)(s||(s=A()([`
.`,`-mermaid {
  &-preview img {
    background: `,`;
  }
}
`])),function(ee){return ee.theme.prefixCls},function(ee){return ee.theme.colorBgBase}),T,u=function(){var ee=j()(g()().mark(function $(){return g()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:if(!T){ne.next=2;break}return ne.abrupt("return",T);case 2:return T=Promise.resolve().then(e.bind(e,76637)).then(function(J){return J.default}),ne.abrupt("return",T);case 4:case"end":return ne.stop()}},$)}));return function(){return ee.apply(this,arguments)}}();function P(ee){var $=ee.content,d=ee.width,ne=ee.height,J=(0,t.wv)(),Z=J.theme,G=J.getPrefixCls,ae=G("mermaid"),Ce=(0,c.useMemo)(function(){return{theme:(Z==null?void 0:Z.algorithm)===v.Z.darkAlgorithm?"dark":"default",securityLevel:"loose",startOnLoad:!1}},[Z==null?void 0:Z.algorithm,Z==null?void 0:Z.token.fontFamily]),p=(0,c.useState)(""),Me=h()(p,2),w=Me[0],ce=Me[1],S=(0,c.useState)(),ie=h()(S,2),pe=ie[0],De=ie[1],We=(0,c.useId)(),Qe=(0,_.kebabCase)("mermaid-".concat(We));return(0,f.Z)(j()(g()().mark(function Je(){var R,de,Se,O;return g()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.prev=0,Q.next=3,u();case 3:if(R=Q.sent,R){Q.next=7;break}return ce($),Q.abrupt("return");case 7:return Q.next=9,R.parse($);case 9:if(de=Q.sent,!de){Q.next=19;break}return R.initialize(Ce),Q.next=14,R.render(Qe,$);case 14:Se=Q.sent,O=Se.svg,ce(O),Q.next=20;break;case 19:throw new Error("Invalid Mermaid syntax");case 20:Q.next=26;break;case 22:Q.prev=22,Q.t0=Q.catch(0),w||console.error("Mermaid parse error: ",Q.t0),ce(w||"");case 26:case"end":return Q.stop()}},Je,null,[[0,22]])})),[$,Ce]),(0,c.useEffect)(function(){if(w){var Je=new Blob([w],{type:"image/svg+xml"}),R=URL.createObjectURL(Je);return De(R),function(){URL.revokeObjectURL(R)}}},[w]),pe?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(n,{}),(0,B.jsx)(k.Z,{className:ae,src:pe,alt:"mermaid",width:d,height:ne,preview:{rootClassName:"".concat(ae,"-preview")}})]}):null}},31382:function($e,F,e){"use strict";e.d(F,{Z:function(){return T}});var z=e(9783),h=e.n(z),D=e(5574),g=e.n(D),E=e(67294),j=e(56044),b=e(68400),A=e.n(b),k=e(9053),f,v=(0,k.vJ)(f||(f=A()([`
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

  &-rag-query {
    margin: 0 12px 8px 12px;
    line-height: 20px;
    font-size: 12px;
    color: `,`;

    &-title {
      font-weight: 500;
    }

    &-images {
      margin: 0 12px 8px 12px;
      display: flex;
      gap: 8px;
    }
  }

  &-rag-item {
    margin-left: 16px;

    &-title {
      font-size: 12px;
      color: `,`;
      line-height: 20px;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    &-content {
      padding: 8px;
      border-radius: 6px;
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
`])),function(u){return u.theme.prefixCls},function(u){return u.theme.borderRadiusLG},function(u){return u.theme.colorFillTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.prefixCls},function(u){return u.theme.prefixCls},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorText},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorBgBase},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorText},function(u){return u.theme.colorFillTertiary},function(u){return u.theme.colorFillQuaternary},function(u){return u.theme.colorTextTertiary}),_=e(93967),y=e.n(_),c=e(28387),t=e(9838),x=e(64057),B=e(85893);function s(u){var P=(0,j.wv)(),ee=P.getPrefixCls,$=ee("operate-card");return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)("div",{className:"".concat($,"-line-body"),children:u.children})})}function n(u){var P,ee=(0,j.wv)(),$=ee.getPrefixCls,d=$("operate-card"),ne=(0,E.useState)(((P=u.body)===null||P===void 0?void 0:P.defaultOpen)||!1),J=g()(ne,2),Z=J[0],G=J[1];return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(v,{}),(0,B.jsxs)("div",{className:d,children:[(0,B.jsxs)("div",{className:y()("".concat(d,"-header"),u.header.className,h()({},"".concat(d,"-header-has-body"),u.body)),onClick:function(){u.body&&G(!Z)},children:[(0,B.jsx)("div",{className:"".concat(d,"-header-icon"),children:u.header.icon}),typeof u.header.title=="string"?(0,B.jsx)("div",{className:"".concat(d,"-header-title"),children:u.header.title}):u.header.title,u.header.description&&(0,B.jsx)("div",{className:"".concat(d,"-header-description"),children:u.header.description}),u.body&&(0,B.jsx)(x.Z,{size:"small",bordered:!1,className:"".concat(d,"-header-arrow"),icon:Z?(0,B.jsx)(c.Z,{}):(0,B.jsx)(t.Z,{})})]}),u.body&&Z&&(0,B.jsx)("div",{className:"".concat(d,"-body"),children:u.body.children})]})]})}n.LineBody=s;var T=n},85762:function($e,F,e){"use strict";e.d(F,{Z:function(){return B}});var z=e(5574),h=e.n(z),D=e(56044),g=e(31382),E=e(64057),j=e(28387),b=e(9838),A=e(48095),k=e(50104),f=e(55839),v=e(16494),_=e(86250),y=e(67294),c=e(85893);function t(s){var n=s.images,T=(0,D.wv)(),u=T.getPrefixCls,P=u("operate-card");return(0,c.jsx)(f.ZP,{locale:{Image:{preview:""}},children:(0,c.jsx)(v.Z.PreviewGroup,{children:n.map(function(ee,$){return(0,c.jsx)(v.Z,{src:ee,width:44,height:44},$)})})})}function x(s){var n=s.item,T=(0,y.useState)(!1),u=h()(T,2),P=u[0],ee=u[1],$=(0,D.wv)(),d=$.getPrefixCls,ne=d("operate-card");return(0,c.jsxs)("div",{className:"".concat(ne,"-rag-item"),children:[(0,c.jsxs)("div",{className:"".concat(ne,"-rag-item-title"),onClick:function(){ee(!P)},children:[(0,c.jsx)("span",{children:n.title}),(0,c.jsx)("span",{style:{flex:1}}),n.score||null,(0,c.jsx)(E.Z,{bordered:!1,size:"small",icon:P?(0,c.jsx)(j.Z,{}):(0,c.jsx)(b.Z,{})})]}),P&&(0,c.jsxs)("div",{className:"".concat(ne,"-rag-item-content"),children:[(0,c.jsx)("div",{className:"".concat(ne,"-rag-item-content-text"),children:n.content}),n.images&&(0,c.jsx)("div",{className:"".concat(ne,"-rag-item-images"),children:(0,c.jsx)(t,{images:n.images})}),n.link?(0,c.jsx)("a",{onClick:function(){window.open(n.link,"_blank")},className:"".concat(ne,"-rag-item-footer"),href:n.link,target:"_blank",children:n.footer}):(0,c.jsx)("div",{className:"".concat(ne,"-rag-item-footer"),children:n.footer})]})]})}function B(s){var n=s.title,T=n===void 0?"\u77E5\u8BC6\u5E93\u68C0\u7D22":n,u=s.subTitle,P=s.defaultOpen,ee=P===void 0?!0:P,$=s.placeholder,d=$===void 0?"\u672A\u67E5\u8BE2\u5230\u4E0E\u63D0\u95EE\u76F8\u5173\u77E5\u8BC6\u5E93":$,ne=s.query,J=s.queryTitle,Z=J===void 0?"\u68C0\u7D22 Query\uFF1A":J,G=s.images,ae=(0,D.wv)(),Ce=ae.getPrefixCls,p=Ce("operate-card"),Me=s.list.length?(0,c.jsx)(g.Z.LineBody,{children:s.list.map(function(w,ce){return(0,c.jsx)(x,{item:w},ce)})}):(0,c.jsxs)(_.Z,{align:"center",justify:"center",gap:8,className:"".concat(p,"-rag-empty-placeholder"),children:[(0,c.jsx)(A.Z,{}),(0,c.jsx)("span",{children:d})]});return(0,c.jsx)(g.Z,{header:{icon:(0,c.jsx)(k.Z,{}),title:T,description:u},body:{defaultOpen:ee,children:(0,c.jsxs)(c.Fragment,{children:[ne?(0,c.jsxs)("div",{className:"".concat(p,"-rag-query"),children:[(0,c.jsx)("span",{className:"".concat(p,"-rag-query-title"),children:Z}),ne]}):null,G!=null&&G.length?(0,c.jsx)("div",{className:"".concat(p,"-rag-query-images"),children:(0,c.jsx)(t,{images:G})}):null,Me]})}})}},79323:function($e,F,e){"use strict";e.d(F,{Z:function(){return j}});var z=e(56044),h=e(31382),D=e(40443),g=e(33593),E=e(85893);function j(b){var A=(0,z.wv)(),k=A.getPrefixCls,f=b.defaultOpen,v=f===void 0?!0:f,_=b.loading,y=_===void 0?!1:_,c=k("operate-card");return(0,E.jsx)(h.Z,{header:{icon:y?(0,E.jsx)(D.Z,{spin:!0}):(0,E.jsx)(g.Z,{}),title:b.title,description:b.subTitle},body:{defaultOpen:y?v:!1,children:(0,E.jsx)(h.Z.LineBody,{children:(0,E.jsx)("div",{className:"".concat(c,"-thinking"),children:b.content})})}},y.toString())}},6874:function($e,F,e){"use strict";e.d(F,{Z:function(){return v}});var z=e(9783),h=e.n(z),D=e(56044),g=e(31382),E=e(41775),j=e(77900),b=e(40443),A=e(93967),k=e.n(A),f=e(85893);function v(_){var y=(0,D.wv)(),c=y.getPrefixCls,t=c("operate-card"),x=_.title,B=x===void 0?"Task List":x,s=_.list.filter(function(n){return n.status==="done"}).length;return(0,f.jsx)(g.Z,{header:{icon:(0,f.jsx)(E.Z,{}),title:B,description:"\xB7 ".concat(s?s+" of ":""," ").concat(_.list.length)},body:{defaultOpen:_.defaultOpen,children:(0,f.jsx)("div",{className:"".concat(t,"-todo-list"),children:_.list.map(function(n){return(0,f.jsxs)("div",{className:k()(h()(h()({},"".concat(t,"-todo-list-item"),!0),"".concat(t,"-todo-list-item-").concat(n.status),!0)),children:[(0,f.jsx)("div",{className:"".concat(t,"-todo-list-item-icon"),children:{done:(0,f.jsx)(j.Z,{}),todo:(0,f.jsx)(j.Z,{}),running:(0,f.jsx)(b.Z,{spin:!0})}[n.status]}),(0,f.jsx)("div",{className:"".concat(t,"-todo-list-item-title"),style:{textDecoration:n.status==="done"?"line-through":"none"},children:n.title})]},n.title)})})}})}},85786:function($e,F,e){"use strict";e.d(F,{Z:function(){return t}});var z=e(5574),h=e.n(z),D=e(56044),g=e(31382),E=e(97634),j=e(89698),b=e(40443),A=e(78598),k=e(33811),f=e(64057),v=e(4146),_=e(67294),y=e(85893);function c(x){var B=(0,D.wv)(),s=B.getPrefixCls,n=s("operate-card"),T=typeof x.content=="string"?x.content:JSON.stringify(x.content),u=(0,_.useState)(!1),P=h()(u,2),ee=P[0],$=P[1],d=(0,_.useRef)(null);return(0,y.jsx)("div",{className:"".concat(n,"-tool-call-block"),children:(0,y.jsx)(k.Z,{title:x.title,extra:(0,y.jsx)(f.Z,{size:"small",style:{marginRight:"-6px"},icon:ee?(0,y.jsx)(E.Z,{}):(0,y.jsx)(j.Z,{}),bordered:!1,onClick:function(){clearTimeout(d.current),navigator.clipboard.writeText(T),$(!0),d.current=setTimeout(function(){$(!1)},2e3)}}),children:(0,y.jsx)(v.ZP,{language:"json",value:T,readOnly:!0})})})}function t(x){var B=x.title,s=B===void 0?"Call Tool":B,n=x.subTitle,T=x.defaultOpen,u=T===void 0?!0:T,P=x.loading,ee=P===void 0?!1:P;return(0,y.jsx)(g.Z,{header:{icon:ee?(0,y.jsx)(b.Z,{spin:!0}):(0,y.jsx)(A.Z,{}),title:s,description:n},body:{defaultOpen:u,children:(0,y.jsxs)(g.Z.LineBody,{children:[(0,y.jsx)(c,{title:"Input",content:x.input}),(0,y.jsx)(c,{title:"Output",content:x.output})]})}})}},69610:function($e,F,e){"use strict";e.d(F,{Z:function(){return k}});var z=e(9783),h=e.n(z),D=e(56044),g=e(31382),E=e(9229),j=e(93967),b=e.n(j),A=e(85893);function k(f){var v=(0,D.wv)(),_=v.getPrefixCls,y=_("operate-card"),c=f.title,t=c===void 0?"\u8054\u7F51\u641C\u7D22":c,x=f.subTitle;return(0,A.jsx)(g.Z,{header:{icon:(0,A.jsx)(E.Z,{}),title:t,description:x},body:{defaultOpen:!0,children:(0,A.jsx)(g.Z.LineBody,{children:f.list.map(function(B){return(0,A.jsxs)("div",{className:b()(h()({},"".concat(y,"-web-search-item"),!0)),onClick:function(){window.open(B.link,"_blank")},children:[(0,A.jsx)("img",{className:"".concat(y,"-web-search-item-icon"),src:B.icon,alt:B.title}),(0,A.jsx)("div",{className:"".concat(y,"-web-search-item-title"),children:B.title}),B.subTitle&&(0,A.jsx)("div",{className:"".concat(y,"-web-search-item-subTitle"),children:B.subTitle})]},B.title)})})}})}},56809:function($e,F,e){"use strict";e.d(F,{B4:function(){return h.Z},BI:function(){return z.Z},Sn:function(){return E.Z},fz:function(){return g.Z},x4:function(){return D.Z}});var z=e(79323),h=e(6874),D=e(85786),g=e(69610),E=e(85762)},83962:function($e,F,e){"use strict";e.d(F,{HJ:function(){return A},NR:function(){return j},xy:function(){return b}});var z=e(97857),h=e.n(z),D=e(67294),g=e(24963),E=e(85893),j=(0,D.createContext)(void 0),b=function(f){return(0,E.jsx)(j.Provider,{value:f.cardConfig,children:f.children})},A=function(){var f=D.useContext(j);return D.useMemo(function(){return h()(h()({},g),f)},[f])}},92049:function($e,F,e){"use strict";e.d(F,{R:function(){return g},bN:function(){return E}});var z=e(67294),h=e(85893),D=(0,z.createContext)(void 0),g=function(b){return(0,h.jsx)(D.Provider,{value:b,children:b.children})},E=function(){var b=z.useContext(D);return b||{}}},56044:function($e,F,e){"use strict";e.d(F,{wv:function(){return b}});var z=e(21766),h=e(67294),D=e(83962),g=e(92049),E=e(85893),j=function(k){var f=k.children,v=k.cardConfig,_=k.markdown;return(0,E.jsx)(g.R,{markdown:_,children:(0,E.jsx)(D.xy,{cardConfig:v,children:f})})};function b(){var A=h.useContext(z.ZP.ConfigContext);return A}F.ZP=j},44294:function($e,F,e){"use strict";e.d(F,{Z:function(){return y},a:function(){return f}});var z=e(97857),h=e.n(z),D=e(24772),g=e(83622),E=e(93967),j=e.n(E),b=e(29372),A=e(67294),k=e(85893),f=A.createContext({}),v=function(){return{height:0}},_=function(t){return{height:t.scrollHeight}};function y(c){var t=c.title,x=c.onOpenChange,B=c.open,s=c.children,n=c.className,T=c.style,u=c.classNames,P=u===void 0?{}:u,ee=c.styles,$=ee===void 0?{}:ee,d=c.closable,ne=c.forceRender,J=A.useContext(f),Z=J.prefixCls,G="".concat(Z,"-header");return(0,k.jsx)(b.ZP,{motionEnter:!0,motionLeave:!0,motionName:"".concat(G,"-motion"),leavedClassName:"".concat(G,"-motion-hidden"),onEnterStart:v,onEnterActive:_,onLeaveStart:_,onLeaveActive:v,visible:B,forceRender:ne,children:function(Ce){var p=Ce.className,Me=Ce.style;return(0,k.jsxs)("div",{className:j()(G,p,n),style:h()(h()({},Me),T),children:[(d!==!1||t)&&(0,k.jsxs)("div",{className:j()("".concat(G,"-header"),P.header),style:h()({},$.header),children:[(0,k.jsx)("div",{className:"".concat(G,"-title"),children:t}),d!==!1&&(0,k.jsx)("div",{className:"".concat(G,"-close"),children:(0,k.jsx)(g.ZP,{type:"text",icon:(0,k.jsx)(D.Z,{}),size:"small",onClick:function(){x==null||x(!B)}})})]}),s&&(0,k.jsx)("div",{className:j()("".concat(G,"-content"),P.content),style:h()({},$.content),children:s})]})}})}},66672:function($e,F,e){"use strict";e.d(F,{Z:function(){return W}});var z=e(19632),h=e.n(z),D=e(97857),g=e.n(D),E=e(9783),j=e.n(E),b=e(5574),A=e.n(b),k=e(13769),f=e.n(k),v=e(48045),_=e(86250),y=e(93967),c=e.n(y),t=e(56790),x=e(30339),B=e(94787),s=e(67294),n=e(11154),T=e(83204);function u(i,K){return(0,s.useImperativeHandle)(i,function(){var I=K(),te=I.nativeElement;return new Proxy(te,{get:function(we,me){return I[me]?I[me]:Reflect.get(we,me)}})})}var P=e(56044),ee=e(44294),$=e(64057),d=e(85893),ne=["className","action","onClick"],J=s.createContext(null);function Z(i){var K=i.className,I=i.action,te=i.onClick,he=f()(i,ne),we=s.useContext(J),me=we.prefixCls,an=we.disabled,Ge=we[I],Xe=an||he.disabled||we["".concat(I,"Disabled")]||!1;return(0,d.jsx)($.Z,g()(g()({bordered:!1,disabled:Xe},he),{},{onClick:function(nn){Xe||(Ge&&Ge(),te&&te(nn))},className:c()(me,K,j()({},"".concat(me,"-disabled"),Xe))}))}var G=s.forwardRef(Z),ae=e(69291);function Ce(i,K){return(0,d.jsx)(G,g()(g()({icon:(0,d.jsx)(ae.Z,{})},i),{},{action:"onClear",ref:K}))}var p=s.forwardRef(Ce),Me=(0,s.memo)(function(i){var K=i.className;return(0,d.jsxs)("svg",{color:"currentColor",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:K,children:[(0,d.jsx)("title",{children:"Stop Loading"}),(0,d.jsx)("rect",{fill:"currentColor",height:"250",rx:"24",ry:"24",width:"250",x:"375",y:"375"})]})}),w=Me;function ce(i,K){var I=s.useContext(J),te=I.prefixCls,he=i.className;return(0,d.jsx)(G,g()(g()({icon:(0,d.jsx)(w,{className:"".concat(te,"-loading-icon")}),type:"primary",variant:"text"},i),{},{className:c()(he,"".concat(te,"-loading-button")),action:"onCancel",ref:K}))}var S=s.forwardRef(ce),ie=e(43103);function pe(i,K){return(0,d.jsx)(G,g()(g()({icon:(0,d.jsx)(ie.Z,{}),type:"primary"},i),{},{action:"onSend",ref:K}))}var De=s.forwardRef(pe),We=e(36763),Qe=e(21474),Je=1e3,R=4,de=140,Se=de/2,O=250,Y=500,Q=.8;function _e(i){var K=i.className;return(0,d.jsxs)("svg",{color:"currentColor",viewBox:"0 0 ".concat(Je," ").concat(Je),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:K,children:[(0,d.jsx)("title",{children:"Speech Recording"}),Array.from({length:R}).map(function(I,te){var he=(Je-de*R)/(R-1),we=te*(he+de),me=Je/2-O/2,an=Je/2-Y/2;return(0,d.jsxs)("rect",{fill:"currentColor",rx:Se,ry:Se,height:O,width:de,x:we,y:me,children:[(0,d.jsx)("animate",{attributeName:"height",values:"".concat(O,"; ").concat(Y,"; ").concat(O),keyTimes:"0; 0.5; 1",dur:"".concat(Q,"s"),begin:"".concat(Q/R*te,"s"),repeatCount:"indefinite"}),(0,d.jsx)("animate",{attributeName:"y",values:"".concat(me,"; ").concat(an,"; ").concat(me),keyTimes:"0; 0.5; 1",dur:"".concat(Q,"s"),begin:"".concat(Q/R*te,"s"),repeatCount:"indefinite"})]},te)})]})}function Re(i,K){var I=s.useContext(J),te=I.speechRecording,he=I.onSpeechDisabled,we=I.prefixCls,me=null;return te?me=(0,d.jsx)(_e,{className:"".concat(we,"-recording-icon")}):he?me=(0,d.jsx)(We.Z,{}):me=(0,d.jsx)(Qe.Z,{}),(0,d.jsx)(G,g()(g()({icon:me,variant:"text"},i),{},{action:"onSpeech",ref:K}))}var Le=s.forwardRef(Re),Ee=e(68400),ke=e.n(Ee),Oe=e(9053),Ke,He=(0,Oe.vJ)(Ke||(Ke=ke()([`
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
`])),function(i){return i.theme.prefixCls},function(i){return i.theme.colorBgBase},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.motionDurationSlow},function(i){return i.theme.lineWidth},function(i){return i.theme.colorPrimaryHover},function(i){return i.theme.lineWidth},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.colorBgContainerDisabled},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.paddingXS},function(i){return i.theme.colorTextTertiary},function(i){return"var(--".concat(i.theme.prefixCls,"-color-fill-disable)")},function(i){return i.theme.controlHeight},function(i){return i.theme.controlHeight},function(i){return i.theme.prefixCls}),ze=He,Ie=e(52677),dn=e.n(Ie),r;!r&&typeof window!="undefined"&&(r=window.SpeechRecognition||window.webkitSpeechRecognition);function ye(i,K){var I=(0,t.zX)(i),te=s.useMemo(function(){return dn()(K)==="object"?[K.recording,K.onRecordingChange,typeof K.recording=="boolean"]:[void 0,void 0,!1]},[K]),he=A()(te,3),we=he[0],me=he[1],an=he[2],Ge=s.useState(null),Xe=A()(Ge,2),be=Xe[0],nn=Xe[1];s.useEffect(function(){if(typeof navigator!="undefined"&&"permissions"in navigator){var xn=null;return navigator.permissions.query({name:"microphone"}).then(function(gn){nn(gn.state),gn.onchange=function(){nn(this.state)},xn=gn}),function(){xn&&(xn.onchange=null)}}},[]);var Cn=r&&be!=="denied",En=s.useRef(null),Ln=(0,t.C8)(!1,{value:we}),Tn=A()(Ln,2),yn=Tn[0],bn=Tn[1],Ve=s.useRef(!1),rn=function(){if(Cn&&!En.current){var gn=new r;gn.onstart=function(){bn(!0)},gn.onend=function(){bn(!1)},gn.onresult=function(In){if(!Ve.current){var Pn,wn=(Pn=In.results)===null||Pn===void 0||(Pn=Pn[0])===null||Pn===void 0||(Pn=Pn[0])===null||Pn===void 0?void 0:Pn.transcript;I(wn)}Ve.current=!1},En.current=gn}},hn=(0,t.zX)(function(xn){xn&&!yn||(Ve.current=xn,an?me==null||me(!yn):(rn(),En.current&&(yn?(En.current.stop(),me==null||me(!1)):(En.current.start(),me==null||me(!0)))))});return[Cn,hn,yn]}var Ae=e(89102),Pe=e(67055),ge,tn=(0,Oe.vJ)(ge||(ge=ke()([`
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

`])),function(i){return i.theme.prefixCls},function(i){return i.theme.borderRadius},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.colorPrimary},function(i){return i.theme.colorPrimary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorFillTertiary},function(i){return i.theme.colorTextSecondary});function sn(i){var K=(0,P.wv)(),I=K.getPrefixCls,te=I("sender-mode-select"),he=i.value,we=i.onChange,me=(0,s.useMemo)(function(){var Ge=i.options.find(function(Xe){return Xe.value===he})||{};return Ge},[i.value]),an=(0,d.jsx)(Ae.Z,{onClick:function(){return we(void 0)},style:{cursor:"pointer",fontSize:20}});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(tn,{}),(0,d.jsxs)("div",{className:te,style:i.style,children:[(0,d.jsx)("div",{className:"".concat(te,"-options ").concat(he?"".concat(te,"-hide"):""),children:i.options.map(function(Ge){var Xe=(0,d.jsx)(cn,g()({onClick:function(){return we(Ge.value)},className:"".concat(te,"-option")},Ge),Ge.value);return Xe})}),(0,d.jsx)("div",{className:"".concat(te,"-display ").concat(he?"":"".concat(te,"-hide")),children:(0,d.jsxs)("div",{className:"".concat(te,"-display-flex"),children:[(0,d.jsx)(cn,g()(g()({},me),{},{label:(me==null?void 0:me.selectedLabel)||(me==null?void 0:me.label),className:"".concat(te,"-display-label")})),i.desc&&(0,d.jsx)("div",{className:"".concat(te,"-display-desc"),children:i.desc}),i.closeTip?(0,d.jsx)(Pe.Z,{title:i.closeTip,children:an}):an]})})]})]})}function cn(i){var K=(0,d.jsxs)("div",{className:i.className,onClick:i.onClick,children:[i.icon,i.label]});return i.tooltip?(0,d.jsx)(Pe.Z,{title:i.tooltip,placement:"topLeft",children:K}):K}var o=e(85441),H=e(32485),X,fe=(0,Oe.vJ)(X||(X=ke()([`
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
`])),function(i){return i.theme.prefixCls},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorFillTertiary});function ve(i){var K=i.leftChildren,I=i.rightChildren,te=i.children,he=(0,P.wv)().getPrefixCls("sender-before-ui-container"),we=(0,s.useMemo)(function(){return K?(0,d.jsx)("div",{className:"".concat(he,"-left"),children:K}):null},[K]),me=(0,s.useMemo)(function(){return I?(0,d.jsx)("div",{className:"".concat(he,"-right"),children:I}):null},[I]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(fe,{}),(0,d.jsx)("div",{className:he,children:(0,d.jsx)("div",{className:"".concat(he,"-content"),children:(0,d.jsx)("div",{className:"".concat(he,"-content-children"),children:te||(0,d.jsxs)(d.Fragment,{children:[we,me]})})})})]})}var M=["styles","classNames","className","rootClassName","style","defaultValue","value","readOnly","enableFocusExpand","sendDisabled","submitType","onSubmit","loading","onCancel","onChange","onFocus","onBlur","actions","onKeyPress","onKeyDown","disabled","header","onPaste","allowSpeech","onPasteFile","components","initialRows","scalable"];function oe(i,K,I){return(0,B.Z)(i,K)||I}var N=s.forwardRef(function(i,K){var I=i,te=I.styles,he=te===void 0?{}:te,we=I.classNames,me=we===void 0?{}:we,an=I.className,Ge=I.rootClassName,Xe=I.style,be=I.defaultValue,nn=I.value,Cn=I.readOnly,En=I.enableFocusExpand,Ln=En===void 0?!1:En,Tn=I.sendDisabled,yn=Tn===void 0?!1:Tn,bn=I.submitType,Ve=bn===void 0?"enter":bn,rn=I.onSubmit,hn=I.loading,xn=I.onCancel,gn=I.onChange,In=I.onFocus,Pn=I.onBlur,wn=I.actions,Xn=I.onKeyPress,et=I.onKeyDown,$n=I.disabled,qe=I.header,Ue=I.onPaste,vn=I.allowSpeech,fn=I.onPasteFile,Yn=I.components,pn=I.initialRows,Dn=pn===void 0?2:pn,Jn=I.scalable,Bn=f()(I,M),Kn=Jn,Sn=(0,s.useState)(Kn?!1:void 0),Zn=A()(Sn,2),Un=Zn[0],Rn=Zn[1],Fn=(0,s.useState)(!1),Qn=A()(Fn,2),An=Qn[0],mn=Qn[1],_n=s.useMemo(function(){return Un?{maxRows:10,minRows:10}:{maxRows:10,minRows:Dn}},[Kn,Un]),Wn=(0,P.wv)(),Vn=Wn.direction,lt=Wn.getPrefixCls,Nn=lt("sender"),Hn=s.useRef(null),nt=s.useRef(null);u(K,function(){var un,on;return{nativeElement:Hn.current,focus:(un=nt.current)===null||un===void 0?void 0:un.focus,blur:(on=nt.current)===null||on===void 0?void 0:on.blur}}),(0,n.Z)(Hn,{onFocus:function(on){mn(!0),In==null||In()},onBlur:function(){Hn.current&&!Hn.current.contains(document.activeElement)&&(mn(!1),Pn==null||Pn())}}),(0,T.Z)("click",function(un){mn(!0),In==null||In()},{target:Hn});var st="".concat(Nn,"-input"),ct=c()(Nn,an,Ge,j()(j()(j()(j()({},"".concat(Nn,"-rtl"),Vn==="rtl"),"".concat(Nn,"-disabled"),$n),"".concat(Nn,"-focus"),An&&Ln),"".concat(Nn,"-blur"),!An&&Ln)),ut="".concat(Nn,"-actions-btn"),at="".concat(Nn,"-actions-list"),dt=(0,t.C8)(be||"",{value:nn}),it=A()(dt,2),a=it[0],C=it[1],l=function(on,Mn){C(on),gn&&gn(on,Mn)},m=ye(function(un){l("".concat(a," ").concat(un))},vn),L=A()(m,3),U=L[0],xe=L[1],se=L[2],q=oe(Yn,["input"],v.Z.TextArea),re=(0,x.Z)(Bn,{attr:!0,aria:!0,data:!0}),ue=g()(g()({},re),{},{ref:nt}),le=function(){!ln.onSendDisabled&&rn&&!hn&&rn(a)},Te=function(){l("")},je=s.useRef(!1),Fe=function(){je.current=!0},Ye=function(){je.current=!1},Ne=function(on){var Mn=on.key==="Enter"&&!je.current;switch(Ve){case"enter":Mn&&!on.shiftKey&&(on.preventDefault(),le());break;case"shiftEnter":Mn&&on.shiftKey&&(on.preventDefault(),le());break}Xn&&Xn(on)},Be=function(on){var Mn;if(!fn){Ue==null||Ue(on);return}var jn=Array.from(((Mn=on.clipboardData)===null||Mn===void 0?void 0:Mn.files)||[]);if(jn.length===0){var Gn,tt=Array.from(((Gn=on.clipboardData)===null||Gn===void 0?void 0:Gn.items)||[]);jn=tt.filter(function(On){return On.kind==="file"}).map(function(On){return On.getAsFile()}).filter(function(On){return On!==null})}jn.length>0?(jn.forEach(function(On){return fn(On)}),on.preventDefault()):Ue==null||Ue(on)},en=function(on){var Mn,jn;on.target!==((Mn=Hn.current)===null||Mn===void 0?void 0:Mn.querySelector(".".concat(st)))&&on.preventDefault(),(jn=nt.current)===null||jn===void 0||jn.focus()},kn=s.useMemo(function(){var un=Array.isArray(i.prefix)?h()(i.prefix):[i.prefix];return Kn&&un.push((0,d.jsx)($.Z,{onClick:function(){return Rn(!Un)},bordered:!1,icon:Un?(0,d.jsx)(o.Z,{}):(0,d.jsx)(H.Z,{})},"zoom")),un},[i.prefix,Kn,Un,vn]),zn=(0,d.jsx)(_.Z,{className:"".concat(at,"-presets"),children:hn?(0,d.jsx)(S,{}):(0,d.jsx)(De,{})});typeof wn=="function"?zn=wn(zn,{components:{SendButton:De,ClearButton:p,LoadingButton:S}}):wn&&(zn=wn);var ln={prefixCls:ut,onSend:le,onSendDisabled:!a||!a.trim()||yn,onClear:Te,onClearDisabled:!a,onCancel:xn,onCancelDisabled:!hn,onSpeech:function(){return xe(!1)},onSpeechDisabled:!U,speechRecording:se,disabled:$n};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ze,{}),(0,d.jsxs)("div",{ref:Hn,className:ct,style:Xe,children:[qe&&(0,d.jsx)(ee.a.Provider,{value:{prefixCls:Nn,focus:An,enableFocusExpand:Ln},children:qe}),(0,d.jsxs)("div",{className:"".concat(Nn,"-content"),children:[(0,d.jsx)(q,g()(g()({},ue),{},{disabled:$n,style:he.input,className:c()(st,me.input),autoSize:_n,value:a.slice(0,i.maxLength||Number.MAX_SAFE_INTEGER),onChange:function(on){l(on.target.value,on),xe(!0)},onPressEnter:Ne,onCompositionStart:Fe,onCompositionEnd:Ye,onKeyDown:et,onPaste:Be,variant:"borderless",readOnly:Cn})),(0,d.jsxs)("div",{className:"".concat(Nn,"-content-bottom"),children:[kn.length>0&&(0,d.jsx)("div",{className:c()("".concat(Nn,"-prefix"),me.prefix),style:he.prefix,children:(0,d.jsxs)(_.Z,{gap:8,children:[vn&&(0,d.jsx)(J.Provider,{value:ln,children:(0,d.jsx)(Le,{})}),kn]})}),(0,d.jsxs)("div",{className:c()(at,me.actions),style:he.actions,children:[i.maxLength?(0,d.jsxs)("div",{className:"".concat(at,"-length"),children:[a.length,"/",i.maxLength]}):null,(0,d.jsx)(J.Provider,{value:ln,children:zn})]})]})]})]})]})}),V=N;V.Header=ee.Z,V.ModeSelect=sn,V.BeforeUIContainer=ve;var W=V},70770:function($e,F,e){"use strict";e.d(F,{Z:function(){return B}});var z=e(89034),h=e(36674),D=e(9343),g=e(48095),E=e(97634),j=e(56044),b=e(68400),A=e.n(b),k=e(9053),f,v=(0,k.vJ)(f||(f=A()([`
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
    font-size: 20px;
  }


  &-header-title {
    font-size: 16px;
    color: `,`;
  }

  &-header {
    padding: 0 12px;
  }

  &-header-top {
    display: flex;
    align-items: center;
    margin: 8px 0;
    gap: 8px;
  }


  &-header-description {
    margin-top: -6px;
    margin-bottom: 8px;
    margin-left: 30px;
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
`])),function(s){return s.theme.prefixCls},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorSuccessBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorSuccess},function(s){return s.theme.colorErrorBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorError},function(s){return s.theme.colorWarningBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorWarning},function(s){return s.theme.colorFillTertiary},function(s){return s.theme.prefixCls},function(s){return s.theme.colorInfo},function(s){return s.theme.colorText},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorBgBase},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorBgBase},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorText}),_=e(93967),y=e.n(_),c=e(21403),t=e(85893);function x(s){var n=(0,j.wv)(),T=n.getPrefixCls,u=T("status-card"),P=s.icon||{success:(0,t.jsx)(z.Z,{}),error:(0,t.jsx)(h.Z,{}),warning:(0,t.jsx)(D.Z,{}),info:(0,t.jsx)(g.Z,{})}[s.status];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v,{}),(0,t.jsxs)("div",{className:y()(u,"".concat(u,"-").concat(s.status)),children:[(0,t.jsxs)("div",{className:"".concat(u,"-header"),children:[(0,t.jsxs)("div",{className:"".concat(u,"-header-top"),children:[(0,t.jsx)("div",{className:"".concat(u,"-header-icon"),children:P}),(0,t.jsx)("div",{className:"".concat(u,"-header-title"),children:s.title})]}),s.description&&(0,t.jsx)("div",{className:"".concat(u,"-header-description"),children:s.description})]}),s.children&&(0,t.jsx)("div",{className:"".concat(u,"-body"),children:s.children})]})]})}x.HITL=function(s){var n=s.title,T=n===void 0?"\u9700\u8981\u7528\u6237\u4EBA\u5DE5\u5E72\u9884":n,u=s.description,P=s.waitButtonText,ee=P===void 0?"\u6211\u5DF2\u5B8C\u6210\uFF0C\u7EE7\u7EED\u4EFB\u52A1":P,$=s.doneButtonText,d=$===void 0?"\u7528\u6237\u5DF2\u786E\u8BA4":$,ne=(0,j.wv)(),J=ne.getPrefixCls,Z=J("status-card"),G=s.done?(0,t.jsx)(c.Z,{onClick:s.onDone,type:"primary",disabled:!0,icon:(0,t.jsx)(E.Z,{}),children:d}):(0,t.jsx)(c.Z,{onClick:s.onDone,type:"primary",children:ee});return(0,t.jsx)(x,{status:"info",title:T,children:(0,t.jsxs)("div",{className:"".concat(Z,"-HITL"),children:[u&&(0,t.jsx)("div",{className:"".concat(Z,"-HITL-desc"),children:u}),(0,t.jsx)("div",{className:"".concat(Z,"-HITL-button"),children:G})]})})},x.Statistic=function(s){var n=(0,j.wv)(),T=n.getPrefixCls,u=T("status-card");return(0,t.jsx)("div",{className:"".concat(u,"-statistic"),children:s.values.map(function(P){return(0,t.jsxs)("div",{className:"".concat(u,"-statistic-item"),children:[(0,t.jsx)("div",{className:"".concat(u,"-statistic-item-title"),children:P.title}),(0,t.jsx)("div",{className:"".concat(u,"-statistic-item-value"),children:P.value})]})})})};var B=x},7354:function($e,F,e){"use strict";var z=e(15009),h=e.n(z),D=e(9783),g=e.n(D),E=e(97857),j=e.n(E),b=e(77262),A=e.n(b),k=e(93938),f=e.n(k),v=`

`,_=`
`,y=":",c=function(n){return(n!=null?n:"").trim()!==""};function t(){var s="";return new TransformStream({transform:function(T,u){s+=T;var P=s.split(v);P.slice(0,-1).forEach(function(ee){c(ee)&&u.enqueue(ee)}),s=P[P.length-1]},flush:function(T){c(s)&&T.enqueue(s)}})}function x(){return new TransformStream({transform:function(n,T){var u=n.split(_),P=u.reduce(function(ee,$){var d=$.indexOf(y);if(d===-1)throw new Error('The key-value separator "'.concat(y,'" is not found in the sse line chunk!'));var ne=$.slice(0,d);if(!c(ne))return ee;var J=$.slice(d+1);return j()(j()({},ee),{},g()({},ne,J))},{});Object.keys(P).length!==0&&T.enqueue(P)}})}function B(s,n){var T=s.readableStream,u=s.transformStream;if(!(T instanceof ReadableStream))throw new Error("The options.readableStream must be an instance of ReadableStream.");var P=new TextDecoderStream,ee=u?T.pipeThrough(P).pipeThrough(u):T.pipeThrough(P).pipeThrough(t()).pipeThrough(x());return ee[Symbol.asyncIterator]=f()(h()().mark(function $(){var d,ne,J,Z;return h()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:d=this.getReader();case 1:return ae.next=4,A()(d.read());case 4:if(ne=ae.sent,J=ne.done,Z=ne.value,!J){ae.next=9;break}return ae.abrupt("break",15);case 9:if(Z){ae.next=11;break}return ae.abrupt("continue",1);case 11:return ae.next=13,n!=null&&n.openaiCompatible?j()(j()({},Z),{},{data:Z.data.slice(1)}):Z;case 13:ae.next=1;break;case 15:case"end":return ae.stop()}},$,this)})),ee}F.Z=B},32116:function($e,F,e){"use strict";e.d(F,{Z:function(){return z}});function z(h){return new Promise(function(D){return setTimeout(D,h)})}},66366:function($e,F,e){"use strict";e.d(F,{Z:function(){return h}});var z={i8:"1.1.46"},h=z.i8},57657:function($e,F,e){"use strict";e.r(F);var z=e(5574),h=e.n(z),D=e(9053),g=e(67294),E=e(85893),j=function(){var k=(0,g.useState)({x:0,y:0}),f=h()(k,2),v=f[0],_=f[1],y=(0,g.useState)(!1),c=h()(y,2),t=c[0],x=c[1],B=(0,g.useRef)(null),s=b(),n=s.styles,T=s.cx;(0,g.useEffect)(function(){var J=function(G){if(B.current){var ae=B.current.getBoundingClientRect();_({x:G.clientX-ae.left,y:G.clientY-ae.top})}};return window.addEventListener("mousemove",J),function(){return window.removeEventListener("mousemove",J)}},[]),(0,g.useEffect)(function(){var J=setInterval(function(){x(!0),setTimeout(function(){return x(!1)},150)},5e3);return function(){return clearInterval(J)}},[]);var u=function(){var Z=32,G=32,ae=v.x-Z,Ce=v.y-G,p=6,Me=6,w=Math.sqrt(ae*ae+Ce*Ce),ce=50;if(w===0)return{x:0,y:0};var S=Math.min(w/ce,1),ie=ae/w*p*S,pe=Ce/w*Me*S;return{x:Math.max(-p,Math.min(p,ie)),y:Math.max(-Me,Math.min(Me,pe))}},P=function(Z){var G=32,ae=v.x-G,Ce=400;if(Math.abs(ae)<Ce)return 1;var p=Math.abs(ae)-Ce,Me=32-Ce,w=Math.min(p/Me,1);return ae>Ce?Z?1-w*.5:1:ae<-Ce?Z?1:1-w*.5:1},ee=u(),$=u(),d=P(!0),ne=P(!1);return(0,E.jsxs)("div",{ref:B,className:n.container,children:[(0,E.jsx)("div",{className:T(n.eye,n.leftEye,t?n.blinkingEye:""),style:{transform:"translate(".concat(ee.x,"px, ").concat(ee.y,"px) ").concat(t?"scaleY(0.1)":"scaleY(".concat(d,")"))}}),(0,E.jsx)("div",{className:T(n.eye,n.rightEye,t?n.blinkingEye:""),style:{transform:"translate(".concat($.x,"px, ").concat($.y,"px) ").concat(t?"scaleY(0.1)":"scaleY(".concat(ne,")"))}})]})};F.default=j;var b=(0,D.kc)(function(A){var k=A.css,f=A.token;return{container:{width:64,height:64,backgroundColor:"black",borderRadius:12,position:"relative",cursor:"pointer",overflow:"hidden",boxShadow:"15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)"},eye:{width:6,height:12,backgroundColor:"white",borderRadius:99,position:"absolute",top:16,transition:"transform 0.1s ease-out"},leftEye:{left:22},rightEye:{left:36},blinkingEye:{transition:"transform 0.05s ease-out"}}})},31295:function($e,F,e){"use strict";e.d(F,{Z:function(){return k}});var z=e(68400),h=e.n(z),D=e(67294),g=e(9053),E=e(56044),j=e(85893),b,A=(0,g.vJ)(b||(b=h()([`
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
`])),function(f){return f.theme.prefixCls},function(f){return f.theme.colorText},function(f){return f.theme.colorTextSecondary});function k(f){var v=(0,E.wv)(),_=v.getPrefixCls,y=_("welcome"),c=typeof f.logo=="string"?(0,j.jsx)("img",{className:y+"-logo",src:f.logo}):f.logo;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(A,{}),(0,j.jsxs)("div",{className:y,style:f.style,children:[c,(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:y+"-title",children:f.title}),(0,j.jsx)("div",{className:y+"-desc",children:f.desc})]})]})]})}},43601:function($e,F,e){"use strict";e.r(F),e.d(F,{AIGC:function(){return ce.Z},Accordion:function(){return n.Z},AgentScopeRuntimeWebUI:function(){return t.Z},AssetsPreview:function(){return S.Z},Attachments:function(){return u.Z},Bubble:function(){return P.Z},ChatAnywhere:function(){return A.ZP},ChatInput:function(){return ae.Z},ConfigProvider:function(){return z.ZP},Conversations:function(){return ee.Z},CustomCardsContext:function(){return D.NR},CustomCardsProvider:function(){return D.xy},DeepThink:function(){return T.Z},DeepThinking:function(){return T.Z},DefaultCards:function(){return c},DeviceAction:function(){return $.Z},Disclaimer:function(){return d.Z},GenerativeUISandbox:function(){return ie.Z},HistoryPanel:function(){return ee.Z},ImageGenerator:function(){return ne.Z},Markdown:function(){return w.Z},Mermaid:function(){return J.Z},OperateCard:function(){return Z.Z},Process:function(){return n.Z},Rag:function(){return G.Sn},Sender:function(){return ae.Z},SparkChatProvider:function(){return g.ZP},StatusCard:function(){return Ce.Z},Stream:function(){return j.Z},Thinking:function(){return G.BI},TodoList:function(){return G.B4},ToolCall:function(){return G.x4},WebSearch:function(){return G.fz},Welcome:function(){return Me.Z},createCard:function(){return b.L},sleep:function(){return p.Z},useChatAnywhere:function(){return k.TQ},useCustomCardsContext:function(){return D.HJ},useGlobalContext:function(){return E.bN},useInput:function(){return f.G},useMessages:function(){return v.y},useProviderContext:function(){return g.wv},useSessionList:function(){return _.x},uuid:function(){return y.Z},version:function(){return h.Z}});var z=e(55839),h=e(66366),D=e(83962),g=e(56044),E=e(92049),j=e(7354),b=e(50130),A=e(29041),k=e(76289),f=e(37254),v=e(4421),_=e(61316),y=e(88773),c=e(24963),t=e(74823),x=e(22863),B={};for(var s in x)["default","ConfigProvider","version","CustomCardsContext","CustomCardsProvider","SparkChatProvider","useCustomCardsContext","useGlobalContext","useProviderContext","Stream","createCard","ChatAnywhere","useChatAnywhere","useInput","useMessages","useSessionList","uuid","DefaultCards","AgentScopeRuntimeWebUI","Accordion","Process","DeepThink","DeepThinking","Attachments","Bubble","Conversations","HistoryPanel","DeviceAction","Disclaimer","ImageGenerator","Mermaid","OperateCard","ChatInput","Sender","StatusCard","sleep","Welcome","Markdown","AIGC","AssetsPreview","GenerativeUISandbox"].indexOf(s)<0&&(B[s]=function(pe){return x[pe]}.bind(0,s));e.d(F,B);var n=e(487),T=e(14082),u=e(36417),P=e(9146),ee=e(9368),$=e(55031),d=e(10325),ne=e(2534),J=e(12181),Z=e(31382),G=e(56809),ae=e(66672),Ce=e(70770),p=e(32116),Me=e(31295),w=e(66109),ce=e(86578),S=e(34487),ie=e(80115)}}]);
