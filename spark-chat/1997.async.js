(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1997],{86578:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return ce}});var H=e(97857),h=e.n(H),O=e(9783),g=e.n(O),E=e(13769),j=e.n(E),b=e(67294),A=e(93967),N=e.n(A),d=e(56044),f=e(66672),_=e(36417),y=e(44294),C=e(12624),t=e(41154),x=e(68400),I=e.n(x),s=e(9053),n,P=(0,s.vJ)(n||(n=I()([`
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
`])),function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.borderRadius},function(V){return V.theme.colorBorderSecondary},function(V){return V.theme.colorBgBase},function(V){return V.theme.colorText}),l=e(85893),S=["className","icon"],ee=t.Z.Dragger,Y=function(Ae){var z=Ae.className,Pe=Ae.icon,Le=j()(Ae,S),ze=(0,d.wv)(),ke=ze.getPrefixCls,R=ke("media-upload");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(P,{}),(0,l.jsx)(ee,h()(h()({showUploadList:!1,className:N()(R,z)},Le),{},{children:(0,l.jsxs)("div",{className:N()("".concat(R,"-thumbnail")),children:[(0,l.jsx)("div",{className:N()("".concat(R,"-thumbnail-gradient"))}),Pe||(0,l.jsx)(C.Z,{className:N()("".concat(R,"-thumbnail-icon"))})]})}))]})},u=Y,le,Z=(0,s.vJ)(le||(le=I()([`
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
`])),function(V){return V.theme.prefixCls},function(V){return V.theme.colorText},function(V){return V.theme.colorTextTertiary}),w=function(Ae){var z=Ae.className,Pe=Ae.title,Le=Ae.description,ze=(0,d.wv)(),ke=ze.getPrefixCls,R=ke("media-info"),ue=!!Pe||!!Le;return ue?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Z,{}),(0,l.jsxs)("div",{className:N()(R,z),children:[Pe&&(0,l.jsx)("div",{className:N()("".concat(R,"-title")),children:Pe}),Le&&(0,l.jsx)("div",{className:N()("".concat(R,"-description")),children:Le})]})]}):null},J=w,ae,Ce=(0,s.vJ)(ae||(ae=I()([`
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
`])),function(V){return V.theme.prefixCls},function(V){return V.theme.colorBorderSecondary},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls}),v=["title","description","maxCount"],Se=function(Ae){var z=Ae.className,Pe=Ae.onUpload,Le=Pe===void 0?[]:Pe,ze=Ae.attachedFiles,ke=ze===void 0?[[]]:ze,R=Ae.onFileChange,ue=(0,d.wv)(),Te=ue.getPrefixCls,T=(0,b.useContext)(y.a),K=T.focus,$=T.enableFocusExpand,De=Te("aigc-sender-header"),Be=(0,b.useMemo)(function(){return ke.flat().length>0?!0:Le.length<=0?!1:!!(K||!$)},[Le,ke,$,K]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Ce,{}),(0,l.jsx)(f.Z.Header,{closable:!1,open:Be,children:(0,l.jsx)("div",{className:N()(De,z),tabIndex:0,children:Le==null?void 0:Le.map(function(Me,je){var Ge=Me.title,Oe=Me.description,Ne=Me.maxCount,an=Ne===void 0?1:Ne,He=j()(Me,v),Re=ke[je]||[];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u,h()({className:N()(g()({},"".concat(De,"-upload-hidden"),Re.length>=an)),maxCount:an,fileList:Re,onChange:function(r){Me.beforeUpload&&r.file.status&&R(je,r.fileList),Me.beforeUpload||R(je,r.fileList)},showUploadList:!1},He),"upload-".concat(je)),Re.length>0&&(0,l.jsx)(_.Z,{items:Re,onChange:function(r){return R(je,r.fileList)}},"attachments-".concat(je)),an===1&&(0,l.jsx)(J,{title:Ge,description:Oe},"info-".concat(je))]})})})})]})},k=Se,ce={SenderHeader:k,Info:J,Upload:u}},487:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return Ce}});var H=e(9783),h=e.n(H),O=e(97857),g=e.n(O),E=e(5574),j=e.n(E),b=e(67294),A=e(93967),N=e.n(A),d=e(56044),f=e(85893);function _(v){var Se=(0,d.wv)(),k=Se.getPrefixCls,ce=k("accordion-content-body");return(0,f.jsxs)("div",{className:ce,children:[v.headerLeft||v.headerRight?(0,f.jsxs)("div",{className:"".concat(ce,"-header"),children:[v.headerLeft,(0,f.jsx)("div",{style:{flex:1}}),v.headerRight]}):null,(0,f.jsx)("div",{className:"".concat(ce,"-body"),children:v.children})]})}var y=e(9361);function C(v){var Se=(0,d.wv)(),k=Se.theme,ce=Se.getPrefixCls,V=(k==null?void 0:k.algorithm)===y.Z.darkAlgorithm,Ae=ce("accordion-soft-light-title");return(0,f.jsx)("div",{className:Ae,style:V?{}:{color:"rgba(38, 36, 76, 0.88)"},children:v.children})}var t=e(68400),x=e.n(t),I=e(9053),s,n=(0,I.vJ)(s||(s=x()([`
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
`])),function(v){return v.theme.prefixCls},function(v){return v.theme.colorSuccess},function(v){return v.theme.prefixCls},function(v){return v.theme.colorError},function(v){return v.theme.colorTextSecondary},function(v){return v.theme.colorBgBase},function(v){return v.theme.borderRadiusLG},function(v){return v.theme.colorBorderSecondary},function(v){return v.theme.colorBorder},function(v){return v.theme.colorBorderSecondary},function(v){return v.theme.colorBgBase},function(v){return v.theme.colorText},function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls},function(v){return v.theme.colorFillTertiary},function(v){return v.theme.prefixCls},function(v){return v.theme.colorTextSecondary},function(v){return v.theme.colorBorderSecondary},function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls},function(v){return v.theme.colorBorderSecondary},function(v){return v.theme.colorBorderSecondary},function(v){return v.theme.colorFillTertiary},function(v){return v.theme.colorText},function(v){return v.theme.colorBgBase}),P=e(40443),l=e(89034),S=e(9343),ee=e(36674),Y=e(9838),u=e(28387),le=e(16592);function Z(v){var Se=(0,d.wv)(),k=Se.getPrefixCls,ce=k("accordion-group"),V=b.useState(v.defaultOpen),Ae=j()(V,2),z=Ae[0],Pe=Ae[1],Le=v.open!==void 0?v.open:z,ze=v.inline?"close":Le?"open":"close",ke=(0,b.useMemo)(function(){if(v.icon)return v.icon;if(v.status==="generating")return(0,f.jsx)(P.Z,{className:"".concat(ce,"-icon-loading"),spin:!0});if(v.status==="finished")return(0,f.jsx)(l.Z,{className:"".concat(ce,"-icon-success")});if(v.status==="interrupted")return(0,f.jsx)(S.Z,{});if(v.status==="error")return(0,f.jsx)(ee.Z,{className:"".concat(ce,"-icon-error")})},[v.status,v.icon]),R=(0,b.useMemo)(function(){return v.steps?v.steps.map(function(ue,Te){var T=Te===0,K=Te===v.steps.length-1;return(0,f.jsx)(Z,g()(g()({},ue),{},{isFirst:T,isLast:K}),ue.id||Te)}):v.children},[v.steps,v.children]);return(0,f.jsxs)("div",{className:N()("".concat(ce),"".concat(ce,"-").concat(ze)),children:[(0,f.jsxs)("div",{className:N()("".concat(ce,"-header"),"".concat(ce,"-header-").concat(ze)),onClick:function(){return R&&v.open===void 0&&Pe(!z)},children:[ke?(0,f.jsx)("div",{className:N()("".concat(ce,"-header-icon"),h()(h()(h()({},"".concat(ce,"-header-icon-line"),v.iconLine),"".concat(ce,"-header-icon-first"),v.isFirst),"".concat(ce,"-header-icon-last"),v.isLast&&ze==="close"||v.level)),children:ke}):null,(0,f.jsx)("div",{children:v.title}),R&&(0,f.jsx)("div",{className:N()("".concat(ce,"-header-arrow")),children:Le?(0,f.jsx)(u.Z,{}):(0,f.jsx)(Y.Z,{})}),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{style:{flex:1}}),v.rightChildren]})]}),(0,f.jsx)(J,{prefixCls:ce,stateOpen:Le,status:ze,inline:v.inline,content:R,bodyStyle:v.bodyStyle,level:v.level})]})}var w={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function J(v){var Se=(0,b.useRef)(null);if(!v.content)return null;var k=v.prefixCls,ce=v.stateOpen,V=v.inline,Ae=v.bodyStyle,z=v.level;return(0,f.jsx)(le.ZP,{nodeRef:Se,in:ce,timeout:300,children:function(Le){return(0,f.jsx)("div",{style:g()(g()(g()({},Ae),z?{marginTop:0}:{}),{},{transition:"opacity ".concat(300,"ms ease-in-out")},w[Le]),className:N()("".concat(k,"-body"),"".concat(k,"-body-").concat(ce?"open":"close"),h()({},"".concat(k,"-body-inline"),V)),children:v.content})}})}function ae(v){var Se=v.level,k=Se===void 0?1:Se,ce=v.isFirst,V=ce===void 0?!0:ce,Ae=v.isLast,z=Ae===void 0?!0:Ae;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{}),(0,f.jsx)(Z,g()(g()({},v),{},{level:k,isFirst:V,isLast:z}))]})}ae.BodyContent=_,ae.SoftLightTitle=C;var Ce=ae},14082:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return b}});var H=e(487),h=e(56044),O=e(9361),g=e(93967),E=e.n(g),j=e(85893);function b(A){var N=(0,h.wv)(),d=N.theme,f=N.getPrefixCls,_=f("accordion-deep-thinking"),y=(d==null?void 0:d.algorithm)===O.Z.darkAlgorithm,C=(0,j.jsx)("img",{style:{display:"block",width:16,height:16,filter:y?"invert(1)  brightness(100%) saturate(0%)":""},src:"https://img.alicdn.com/imgextra/i2/O1CN01QZgWRv1I4JM0BAZ9O_!!6000000000839-54-tps-56-56.apng"}),t=A.title||"Deep thinking";A.loading&&(t+="...");var x=A.loading?(0,j.jsx)(H.Z.SoftLightTitle,{children:t}):t,I=A.maxHeight?{maxHeight:A.maxHeight,overflowY:"auto"}:{},s=A.defaultOpen!==void 0?A.defaultOpen:A.autoCloseOnFinish&&!A.loading?!1:void 0;return(0,j.jsx)(H.Z,{title:x,status:A.loading?"generating":"finished",icon:A.loading?C:null,defaultOpen:s,open:A.open,bodyStyle:I,inline:!0,children:(0,j.jsx)("div",{className:E()(_,A.className),children:A.content||"..."})})}},74823:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return it}});var H=e(97857),h=e.n(H),O=e(9783),g=e.n(O),E=e(56044),j=e(68400),b=e.n(j),A=e(9053),N,d=(0,A.vJ)(N||(N=b()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.colorBgBase},function(a){return a.theme.prefixCls},function(a){return a.theme.colorBgBase},function(a){return a.theme.prefixCls},function(a){return a.theme.colorFillTertiary},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),f=e(93967),_=e.n(f),y=e(17909),C=e(59214),t=e(67294),x=e(81759),I=e(49131),s=e(21766),n=e(85893),P=(0,C.kr)(void 0);function l(a){try{var p=(0,C.Sz)(P,a);return p}catch(c){return{}}}function S(a){var p=a.children,c=(0,y.Z)(),m=(0,t.useMemo)(function(){var se=a.options.theme||{};return h()(h()({},a.options),{},{theme:h()(h()({},se),{},{narrowMode:!c.lg||se.narrowMode})})},[a.options,c.lg]),L=(0,t.useMemo)(function(){var se=m.theme.colorPrimary,ne=m.theme.colorBgBase,re=m.theme.colorTextBase,de=m.theme.darkMode;if(se||de){var oe=(0,x.Z)((0,I.Z)({primaryHex:se,bgBaseHex:ne,textBaseHex:re,darkMode:de}));return oe}},[m.theme.colorPrimary,m.theme.colorBgBase,m.theme.colorTextBase,m.theme.darkMode]),U=(0,n.jsx)(P.Provider,{value:m,children:p});if(L){var xe=m.theme.prefix||"agentscope-runtime-webui";return(0,n.jsx)(s.ZP,h()(h()({},L),{},{style:{height:"100%"},prefix:xe,prefixCls:xe,children:U}))}return U}var ee=null,Y=e(15009),u=e.n(Y),le=e(99289),Z=e.n(le),w=e(5574),J=e.n(w),ae=e(66672),Ce=e(10325),v=e(79785),Se=(0,C.kr)({loading:!1,setLoading:function(){},getLoading:function(){return!1},disabled:!1,setDisabled:function(){},getDisabled:function(){return!1}});function k(a){var p=(0,v.Z)(!1),c=J()(p,3),m=c[0],L=c[1],U=c[2],xe=(0,v.Z)(!1),se=J()(xe,3),ne=se[0],re=se[1],de=se[2];return(0,n.jsx)(Se.Provider,{value:{loading:m,setLoading:L,getLoading:U,disabled:ne,setDisabled:re,getDisabled:de},children:a.children})}var ce=function(p){return(0,C.Sz)(Se,p)},V=e(13769),Ae=e.n(V),z=e(41154),Pe=e(64057),Le=e(81644),ze=e(36417),ke=["trigger"];function R(a,p){var c=(0,v.Z)([]),m=J()(c,3),L=m[0],U=m[1],xe=m[2],se=a||{},ne=se.trigger,re=Ae()(se,ke);if(re!=null&&re.customRequest){var de=(0,n.jsx)(z.Z,h()(h()({fileList:L,showUploadList:!1,onChange:function(be){U(be.fileList)}},re),{},{disabled:p==null?void 0:p.disabled,children:ne?t.createElement(ne,{disabled:p==null?void 0:p.disabled}):(0,n.jsx)(Pe.Z,{disabled:p==null?void 0:p.disabled,icon:(0,n.jsx)(Le.Z,{}),bordered:!1})})),oe=(0,n.jsx)(ae.Z.Header,{closable:!1,open:(L==null?void 0:L.length)>0,children:(0,n.jsx)(ze.Z,{items:L,onChange:function(be){return U(be.fileList)}})});return{fileList:L,getFileList:xe,setFileList:U,uploadIconButton:de,uploadFileListHeader:oe}}else return{enabled:!1}}function ue(a){var p=(0,v.Z)(""),c=J()(p,3),m=c[0],L=c[1],U=c[2],xe=(0,E.wv)().getPrefixCls("chat-anywhere-input"),se=l(function(Zn){return Zn.sender}),ne=ce(function(Zn){return Zn}),re=se||{},de=re.placeholder,oe=de===void 0?"":de,Ie=re.disclaimer,be=Ie===void 0?"":Ie,Qe=re.maxLength,qe=re.beforeSubmit,Ue=qe===void 0?function(){return Promise.resolve(!0)}:qe,we=re.beforeUI,rn=re.afterUI,Nn=re.scalable,Qn=Nn===void 0?!0:Nn,cn=re.attachments,dn=R(cn,{disabled:ne.disabled}),ln=dn.getFileList,Mn=dn.setFileList,En=dn.uploadIconButton,$n=dn.uploadFileListHeader,rt=(0,t.useCallback)(Z()(u()().mark(function Zn(){var dt,Fe;return u()().wrap(function(Jn){for(;;)switch(Jn.prev=Jn.next){case 0:return Jn.next=2,Ue();case 2:if(dt=Jn.sent,dt){Jn.next=5;break}return Jn.abrupt("return");case 5:Fe=((ln==null?void 0:ln())||[]).filter(function(mt){var ft;return(ft=mt.response)===null||ft===void 0?void 0:ft.url}),a.onSubmit({query:U(),fileList:Fe}),L(""),Mn&&Mn([]);case 9:case"end":return Jn.stop()}},Zn)})),[]),Un=(0,t.useCallback)(function(){a.onCancel()},[]);return(0,n.jsxs)("div",{className:xe,children:[(0,n.jsxs)("div",{className:"".concat(xe,"-wrapper"),children:[we,(0,n.jsx)(ae.Z,{loading:ne.loading,disabled:ne.disabled,scalable:Qn,placeholder:oe,value:m,prefix:(0,n.jsx)(n.Fragment,{children:En}),header:$n,onChange:L,maxLength:Qe,onSubmit:rt,onCancel:Un}),rn]}),be?(0,n.jsx)(Ce.Z,{desc:be}):(0,n.jsx)("div",{className:"".concat(xe,"-blank")})]})}var Te=e(9146),T=e(19632),K=e.n(T),$=(0,C.kr)({messages:[],setMessages:function(){},getMessages:function(){return[]}});function De(a){var p=(0,v.Z)([]),c=J()(p,3),m=c[0],L=c[1],U=c[2],xe={messages:m,setMessages:L,getMessages:U};return(0,n.jsx)($.Provider,{value:xe,children:a.children})}var Be=function(){var p=(0,C.Sz)($,function(ne){return{setMessages:ne.setMessages,getMessages:ne.getMessages}}),c=p.setMessages,m=p.getMessages,L=t.useCallback(function(){c([])},[]),U=t.useCallback(function(ne){return m().find(function(re){return re.id===ne})},[]),xe=t.useCallback(function(ne){c(function(re){return re.filter(function(de){return de.id!==ne.id})})},[]),se=t.useCallback(function(ne){c(function(re){var de=re.findIndex(function(Ie){return Ie.id===ne.id});if(de>-1){var oe=h()(h()({},re[de]),ne);return[].concat(K()(re.slice(0,de)),[oe],K()(re.slice(de+1)))}else return[].concat(K()(re),[ne])})},[]);return{getMessages:m,removeAllMessages:L,getMessage:U,removeMessage:xe,updateMessage:se}},Me=e(78234),je=e(73935),Ge=e(2093),Oe=(0,C.kr)({sessions:[],setSessions:function(){},getSessions:function(){return[]},currentSessionId:void 0,setCurrentSessionId:function(){},getCurrentSessionId:function(){return""}});function Ne(a){var p=l(function(Ie){return Ie.session}),c=(0,v.Z)([]),m=J()(c,3),L=m[0],U=m[1],xe=m[2],se=(0,v.Z)(void 0),ne=J()(se,3),re=ne[0],de=ne[1],oe=ne[2];return(0,Me.Z)(Z()(u()().mark(function Ie(){var be,Qe;return u()().wrap(function(Ue){for(;;)switch(Ue.prev=Ue.next){case 0:return Ue.next=2,p.api.getSessionList();case 2:Qe=Ue.sent,U(Qe),de(Qe==null||(be=Qe[0])===null||be===void 0?void 0:be.id);case 5:case"end":return Ue.stop()}},Ie)}))),(0,n.jsx)(Oe.Provider,{value:{sessions:L,setSessions:U,getSessions:xe,currentSessionId:re,setCurrentSessionId:de,getCurrentSessionId:oe},children:a.children})}var an=function(){var p=(0,C.Sz)(Oe,function(be){return be}),c=p.setSessions,m=p.getSessions,L=p.getCurrentSessionId,U=p.setCurrentSessionId,xe=p.currentSessionId,se=l(function(be){return be.session}),ne=(0,C.Sz)($,function(be){return be.setMessages}),re=t.useCallback(function(){var be=Z()(u()().mark(function Qe(qe){var Ue;return u()().wrap(function(rn){for(;;)switch(rn.prev=rn.next){case 0:return rn.next=2,se.api.removeSession(qe);case 2:Ue=rn.sent,ne([]),U(void 0),c(Ue);case 6:case"end":return rn.stop()}},Qe)}));return function(Qe){return be.apply(this,arguments)}}(),[]),de=t.useCallback(function(){var be=Z()(u()().mark(function Qe(qe){var Ue;return u()().wrap(function(rn){for(;;)switch(rn.prev=rn.next){case 0:if(!qe.id){rn.next=6;break}return rn.next=3,se.api.updateSession(qe);case 3:rn.t0=rn.sent,rn.next=9;break;case 6:return rn.next=8,se.api.createSession(qe);case 8:rn.t0=rn.sent;case 9:return Ue=rn.t0,c(Ue),rn.abrupt("return",qe);case 12:case"end":return rn.stop()}},Qe)}));return function(Qe){return be.apply(this,arguments)}}(),[]),oe=t.useCallback(function(){var be=Z()(u()().mark(function Qe(qe){var Ue;return u()().wrap(function(rn){for(;;)switch(rn.prev=rn.next){case 0:return rn.next=2,de({name:(qe==null?void 0:qe.name)||"",messages:[]});case 2:return Ue=rn.sent,U(Ue.id),ne(Ue.messages),rn.abrupt("return",Ue.id);case 6:case"end":return rn.stop()}},Qe)}));return function(Qe){return be.apply(this,arguments)}}(),[]),Ie=t.useCallback(function(be){U(be)},[]);return(0,Ge.Z)(Z()(u()().mark(function be(){var Qe,qe;return u()().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:return je.flushSync(function(){ne([])}),we.next=3,se.api.getSession(xe);case 3:if(we.t2=Qe=we.sent,we.t1=we.t2===null,we.t1){we.next=7;break}we.t1=Qe===void 0;case 7:if(!we.t1){we.next=11;break}we.t3=void 0,we.next=12;break;case 11:we.t3=Qe.messages;case 12:if(we.t0=we.t3,we.t0){we.next=15;break}we.t0=[];case 15:qe=we.t0,ne(qe);case 17:case"end":return we.stop()}},be)})),[xe]),{changeCurrentSessionId:Ie,getCurrentSessionId:L,getSessions:m,removeSession:re,updateSession:de,createSession:oe}},He=e(68997),Re,un=(0,A.vJ)(Re||(Re=b()([`
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
`])),function(a){return a.theme.prefixCls},function(a){var p=a.theme;return p.colorText},function(a){var p=a.theme;return p.colorTextSecondary},function(a){var p=a.theme;return p.colorFillQuaternary},function(a){var p=a.theme;return p.colorText},function(a){var p=a.theme;return p.colorFillTertiary}),r=e(38850),Ee=["render"];function ye(a){var p=l(function(re){return re.welcome}),c=(0,E.wv)().getPrefixCls("chat-anywhere-welcome-default");if(!p)return null;var m=p.render,L=Ae()(p,Ee);if(m)return p.render({greeting:p.greeting,avatar:p.avatar,description:p.description,prompts:p.prompts,onSubmit:a.onSubmit});var U=L.greeting,xe=L.avatar,se=L.prompts,ne=L.description;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(un,{}),(0,n.jsxs)("div",{className:c,children:[xe&&(0,n.jsx)(He.Z,{src:xe,shape:"square",size:64}),U&&(0,n.jsx)("div",{className:"".concat(c,"-greeting"),children:U}),ne&&(0,n.jsx)("div",{className:"".concat(c,"-description"),children:ne}),(se==null?void 0:se.length)>0&&(0,n.jsx)("div",{className:"".concat(c,"-prompts"),children:se.map(function(re){var de=typeof re=="string"?{label:re,value:re}:h()(h()({},re),{},{label:re.label||re.value,value:re.value});return(0,n.jsx)(_e,{prompt:de,onSubmit:a.onSubmit},de.value)})})]})]})}function _e(a){var p=(0,E.wv)().getPrefixCls("chat-anywhere-welcome-default");return(0,n.jsxs)("div",{className:"".concat(p,"-prompt"),onClick:function(){return a.onSubmit({query:a.prompt.value})},children:[(0,n.jsx)("img",{className:"".concat(p,"-prompt-icon"),src:"https://img.alicdn.com/imgextra/i3/O1CN01822qqr1PVyaK7MYtn_!!6000000001847-2-tps-40-40.png",alt:""}),(0,n.jsx)("span",{className:"".concat(p,"-prompt-label"),children:a.prompt.label}),(0,n.jsx)(r.Z,{})]})}function ge(a){var p=(0,C.Sz)(Se,function(U){return U.loading}),c=(0,C.Sz)($,function(U){return U.messages}),m=(0,E.wv)().getPrefixCls("chat-anywhere-message-list"),L=(0,C.Sz)(Oe,function(U){return U.currentSessionId});return c.length===0?(0,n.jsx)("div",{className:_()(m,"".concat(m,"-welcome")),children:(0,n.jsx)(ye,{onSubmit:a.onSubmit})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Te.Z.List,{smooth:p,classNames:{wrapper:m},items:c},L)})}var Xe,We=(0,A.vJ)(Xe||(Xe=b()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),en=e(32116);function o(a){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];(0,t.useEffect)(function(){return document.addEventListener(a.type,a.callback),function(){document.removeEventListener(a.type,a.callback)}},p)}var G=function(p){var c=p.type,m=p.data;document.dispatchEvent(new CustomEvent(c,{detail:m}))},X=e(88773),fe=e(12444),ve=e.n(fe),M=e(72004),ie=e.n(M),B=function(a){return a.Created="created",a.InProgress="in_progress",a.Completed="completed",a.Canceled="canceled",a.Failed="failed",a.Rejected="rejected",a.Unknown="unknown",a}({}),q=function(a){return a.ASSISTANT="assistant",a.USER="user",a.SYSTEM="system",a}({}),Q=function(a){return a.MESSAGE="message",a.REASONING="reasoning",a.PLUGIN_CALL="plugin_call",a.PLUGIN_CALL_OUTPUT="plugin_call_output",a.FUNCTION_CALL="function_call",a.FUNCTION_CALL_OUTPUT="function_call_output",a.COMPONENT_CALL="component_call",a.COMPONENT_CALL_OUTPUT="component_call_output",a.MCP_LIST_TOOLS="mcp_list_tools",a.MCP_APPROVAL_REQUEST="mcp_approval_request",a.MCP_CALL="mcp_call",a.MCP_CALL_OUTPUT="mcp_call_output",a.MCP_APPROVAL_RESPONSE="mcp_approval_response",a.HEARTBEAT="heartbeat",a.ERROR="error",a}({}),i=function(a){return a.TEXT="text",a.DATA="data",a.IMAGE="image",a.AUDIO="audio",a.FILE="file",a.REFUSAL="refusal",a}({}),F=function(){function a(p){var c,m=this;ve()(this,a),g()(this,"data",void 0);var L=[this.buildTextContent(p.query)];(c=p.fileList)!==null&&c!==void 0&&c.length&&p.fileList.forEach(function(U){m.isImageFile(U)?L.push(m.buildImageContent(U)):L.push(m.buildFileContent(U))}),this.data={input:[{role:"user",type:Q.MESSAGE,content:L}]}}return ie()(a,[{key:"isImageFile",value:function(c){return c.type.indexOf("image/")===0}},{key:"buildImageContent",value:function(c){var m;return{type:i.IMAGE,image_url:(m=c.response)===null||m===void 0?void 0:m.url,status:B.Created}}},{key:"buildTextContent",value:function(c){return{type:i.TEXT,text:c,status:B.Created}}},{key:"buildFileContent",value:function(c){var m;return{type:i.FILE,file_url:(m=c.response)===null||m===void 0?void 0:m.url,file_name:c.name,file_size:c.size,status:B.Created}}}],[{key:"getHistoryMessages",value:function(c){return c.reduce(function(m,L){var U;return(U=L.cards)!==null&&U!==void 0&&U.length?m.concat(L.cards[0].data.input||L.cards[0].data.output):m},[])}}]),a}(),D=F;function te(a){var p=a.currentQARef,c=Be(),m=c.updateMessage,L=c.getMessages,U=c.removeMessage,xe=(0,t.useCallback)(function(de){return p.current.abortController=new AbortController,p.current.request={id:(0,X.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new D(de).data}]},je.flushSync(function(){m(p.current.request)}),p.current.request},[p,m]),se=(0,t.useCallback)(function(){return p.current.response={id:(0,X.Z)(),role:"assistant",cards:[],msgStatus:"generating"},m(p.current.response),p.current.response},[p,m]),ne=(0,t.useCallback)(function(){return D.getHistoryMessages(L())},[L]),re=(0,t.useCallback)(function(de){je.flushSync(function(){U({id:de})})},[U]);return{createRequestMessage:xe,createResponseMessage:se,getHistoryMessages:ne,updateMessage:m,removeMessageById:re,getMessages:L}}var he=e(44987),Ze=e.n(he),me=e(7354),on=e(64599),$e=e.n(on),Ve=e(93513),pe=function(){function a(p){var c=p.id,m=p.status,L=p.created_at;ve()(this,a),g()(this,"data",void 0),this.data={id:c,output:[],object:"response",status:m||B.Created,created_at:L||Date.now()}}return ie()(a,[{key:"handleResponse",value:function(c){this.data=(0,Ve.produce)(this.data,function(m){c.output||(c.output=[]),Object.assign(m,c)})}},{key:"handleMessage",value:function(c){this.data=(0,Ve.produce)(this.data,function(m){m.output||(m.output=[]);var L=m.output.findIndex(function(xe){return xe.id===c.id});if(L>=0){var U=m.output[L].content;Object.assign(m.output[L],c),(!c.content||c.content.length===0)&&(m.output[L].content=U)}else m.output.push(c)})}},{key:"handleContent",value:function(c){this.data=(0,Ve.produce)(this.data,function(m){var L=m.output.find(function(xe){return xe.id===c.msg_id});if(!L){console.warn("Message not found for content:",c.msg_id);return}if(L.content||(L.content=[]),c.delta){var U=L.content[L.content.length-1];U&&U.delta?c.type===i.TEXT&&U.type===i.TEXT?U.text+=c.text:c.type===i.IMAGE?U.image_url=c.image_url:c.type===i.DATA&&(U.data=c.data):L.content.push(c)}else L.content.length>0?Object.assign(L.content[L.content.length-1],c):L.content.push(c)})}},{key:"handleError",value:function(c){this.data=(0,Ve.produce)(this.data,function(m){m.status=B.Failed,m.output.push({status:B.Failed,type:Q.ERROR,content:[],id:(0,X.Z)(),role:"assistant",code:c.code,message:typeof c.message=="string"?c.message:JSON.stringify(c.message)})})}},{key:"handle",value:function(c){if(c.object==="response")this.handleResponse(c);else if(c.object==="message"){if(c.type===Q.HEARTBEAT)return this.data;this.handleMessage(c)}else c.object==="content"?this.handleContent(c):this.handleError(c);return this.data}},{key:"cancel",value:function(){return this.data=(0,Ve.produce)(this.data,function(c){a.maybeGenerating(c)&&(c.status=B.Canceled),c.output.forEach(function(m){a.maybeGenerating(m)&&(m.status=B.Canceled,m.content.forEach(function(L){a.maybeGenerating(L)&&(L.status=B.Canceled)}))})}),this.data}}],[{key:"mergeToolMessages",value:function(c){var m=new Map,L=[],U=$e()(c),xe;try{var se=function(){var re,de,oe=xe.value;if(a.maybeToolInput(oe)&&(re=oe.content)!==null&&re!==void 0&&re.length){var Ie=oe.content[0],be=Ie.data.call_id||Ie.data.name;m.set(be,Ie),L.push(oe)}else if(a.maybeToolOutput(oe)&&(de=oe.content)!==null&&de!==void 0&&de.length){var Qe=oe.content[0],qe=Qe.data.call_id||Qe.data.name,Ue=m.get(qe);Ue&&(L=L.map(function(we){if(!a.maybeToolInput(we))return we;var rn=we.content[0],Nn=rn.data.call_id||rn.data.name;return Nn===qe?h()(h()({},oe),{},{content:[].concat(K()(we.content),[Qe])}):we}))}else L.push(oe)};for(U.s();!(xe=U.n()).done;)se()}catch(ne){U.e(ne)}finally{U.f()}return L}},{key:"maybeToolOutput",value:function(c){return[Q.FUNCTION_CALL_OUTPUT,Q.PLUGIN_CALL_OUTPUT,Q.COMPONENT_CALL_OUTPUT,Q.MCP_CALL_OUTPUT].includes(c.type)}},{key:"maybeToolInput",value:function(c){return[Q.FUNCTION_CALL,Q.PLUGIN_CALL,Q.COMPONENT_CALL,Q.MCP_CALL].includes(c.type)}},{key:"maybeGenerating",value:function(c){return[B.InProgress,B.Created].includes(c.status)}},{key:"maybeDone",value:function(c){return[B.Completed,B.Canceled,B.Failed].includes(c.status)}}]),a}(),Je=pe;function gn(a){var p=a.currentQARef,c=a.updateMessage,m=a.getCurrentSessionId,L=a.onFinish,U=l(function(re){return re.api}),xe=(0,t.useRef)(U);(0,t.useEffect)(function(){xe.current=U},[U]);var se=(0,t.useCallback)(function(){var re=Z()(u()().mark(function de(oe){var Ie,be,Qe,qe,Ue,we,rn,Nn;return u()().wrap(function(cn){for(;;)switch(cn.prev=cn.next){case 0:Ie=new Je({id:"",status:B.Created,created_at:0}),be=!1,Qe=!1,cn.prev=3,Ue=Ze()(oe);case 5:return cn.next=7,Ue.next();case 7:if(!(be=!(we=cn.sent).done)){cn.next=17;break}return rn=we.value,Nn=Ie.handle(rn),p.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Nn}],c(p.current.response),cn.next=14,(0,en.Z)(100);case 14:be=!1,cn.next=5;break;case 17:cn.next=23;break;case 19:cn.prev=19,cn.t0=cn.catch(3),Qe=!0,qe=cn.t0;case 23:if(cn.prev=23,cn.prev=24,!(be&&Ue.return!=null)){cn.next=28;break}return cn.next=28,Ue.return();case 28:if(cn.prev=28,!Qe){cn.next=31;break}throw qe;case 31:return cn.finish(28);case 32:return cn.finish(23);case 33:case"end":return cn.stop()}},de,null,[[3,19,23,33],[24,,28,32]])}));return function(de){return re.apply(this,arguments)}}(),[]),ne=(0,t.useCallback)(function(){var re=Z()(u()().mark(function de(oe,Ie){var be,Qe,qe,Ue,we,rn,Nn,Qn,cn,dn,ln,Mn,En,$n,rt,Un,Zn;return u()().wrap(function(Fe){for(;;)switch(Fe.prev=Fe.next){case 0:if(be=xe.current,Qe=be.enableHistoryMessages,qe=Qe===void 0?!1:Qe,Fe.prev=2,!be.fetch){Fe.next=9;break}return Fe.next=6,be.fetch({input:oe,biz_params:Ie});case 6:Fe.t0=Fe.sent,Fe.next=12;break;case 9:return Fe.next=11,fetch(be.baseURL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(be.token||"")},body:JSON.stringify({input:qe?oe:oe.slice(-1),session_id:m(),stream:!0,biz_params:Ie})});case 11:Fe.t0=Fe.sent;case 12:Ue=Fe.t0,Fe.next=17;break;case 15:Fe.prev=15,Fe.t1=Fe.catch(2);case 17:if(!(Ue&&Ue.body)){Fe.next=66;break}if(we=new Je({id:"",status:B.Created,created_at:0}),Ue.ok){Fe.next=22;break}return Ue.json().then(function(vt){var Jn=we.handle({object:"message",type:Q.ERROR,content:[],id:"error",role:"assistant",status:B.Failed,code:Ue.status,message:JSON.stringify(vt)});p.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Jn}],L()}),Fe.abrupt("return");case 22:Fe.prev=22,rn=!1,Nn=!1,Fe.prev=25,cn=Ze()((0,me.Z)({readableStream:Ue.body}));case 27:return Fe.next=29,cn.next();case 29:if(!(rn=!(dn=Fe.sent).done)){Fe.next=45;break}if(ln=dn.value,((Mn=p.current.response)===null||Mn===void 0?void 0:Mn.msgStatus)!=="interrupted"){Fe.next=36;break}return($n=p.current.abortController)===null||$n===void 0||$n.abort(),p.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:we.cancel()}],c(p.current.response),Fe.abrupt("break",45);case 36:if(rt=xe.current.responseParser||JSON.parse,Un=rt(ln.data),Zn=we.handle(Un),!(Zn.status!==B.Failed&&!((En=Zn.output)!==null&&En!==void 0&&(En=En[0])!==null&&En!==void 0&&(En=En.content)!==null&&En!==void 0&&En.length))){Fe.next=41;break}return Fe.abrupt("continue",42);case 41:p.current.response&&(p.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Zn}],Zn.status===B.Completed||Zn.status===B.Failed?L():c(p.current.response));case 42:rn=!1,Fe.next=27;break;case 45:Fe.next=51;break;case 47:Fe.prev=47,Fe.t2=Fe.catch(25),Nn=!0,Qn=Fe.t2;case 51:if(Fe.prev=51,Fe.prev=52,!(rn&&cn.return!=null)){Fe.next=56;break}return Fe.next=56,cn.return();case 56:if(Fe.prev=56,!Nn){Fe.next=59;break}throw Qn;case 59:return Fe.finish(56);case 60:return Fe.finish(51);case 61:Fe.next=66;break;case 63:Fe.prev=63,Fe.t3=Fe.catch(22),console.error(Fe.t3);case 66:case"end":return Fe.stop()}},de,null,[[2,15],[22,63],[25,47,51,61],[52,,56,60]])}));return function(de,oe){return re.apply(this,arguments)}}(),[m,p,c,L]);return{request:ne,mockRequest:se}}function xn(){var a=an(),p=a.createSession,c=a.updateSession,m=a.getCurrentSessionId,L=(0,t.useCallback)(function(){var se=Z()(u()().mark(function ne(re){return u()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:if(m()){oe.next=3;break}return oe.next=3,p({name:re});case 3:case"end":return oe.stop()}},ne)}));return function(ne){return se.apply(this,arguments)}}(),[m,p]),U=(0,t.useCallback)(function(){var se=Z()(u()().mark(function ne(re,de){return u()().wrap(function(Ie){for(;;)switch(Ie.prev=Ie.next){case 0:if(de.length!==0){Ie.next=3;break}return Ie.next=3,c({id:m(),name:re});case 3:case"end":return Ie.stop()}},ne)}));return function(ne,re){return se.apply(this,arguments)}}(),[m,c]),xe=(0,t.useCallback)(function(){var se=Z()(u()().mark(function ne(re){return u()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return oe.next=2,c({id:m(),messages:re});case 2:case"end":return oe.stop()}},ne)}));return function(ne){return se.apply(this,arguments)}}(),[m,c]);return{ensureSession:L,updateSessionName:U,syncSessionMessages:xe,getCurrentSessionId:m}}function Ln(){var a=(0,C.Sz)(Se,function(oe){return oe.setLoading}),p=(0,C.Sz)(Oe,function(oe){return oe.currentSessionId}),c=(0,t.useRef)({}),m=te({currentQARef:c}),L=xn(),U=(0,t.useCallback)(function(){var oe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished";c.current.response&&(c.current.response.msgStatus=oe,a(!1),je.flushSync(function(){m.updateMessage(c.current.response)}),L.syncSessionMessages(m.getMessages()))},[a,m,L]),xe=gn({currentQARef:c,updateMessage:m.updateMessage,getCurrentSessionId:L.getCurrentSessionId,onFinish:function(){return U("finished")}}),se=xe.request,ne=(0,t.useCallback)(function(){var oe=Z()(u()().mark(function Ie(be){var Qe,qe;return u()().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:return we.next=2,L.ensureSession(be.query);case 2:if(Qe=m.getMessages(),!L.getCurrentSessionId()){we.next=6;break}return we.next=6,L.updateSessionName(be.query,Qe);case 6:return m.createRequestMessage(be),a(!0),we.next=10,(0,en.Z)(100);case 10:return m.createResponseMessage(),qe=m.getHistoryMessages(),we.next=14,L.syncSessionMessages(m.getMessages());case 14:return we.next=16,se(qe,be.biz_params);case 16:case"end":return we.stop()}},Ie)}));return function(Ie){return oe.apply(this,arguments)}}(),[m,L,se]),re=(0,t.useCallback)(function(){U("interrupted")},[U]),de=(0,t.useCallback)(function(){var oe=Z()(u()().mark(function Ie(be){var Qe;return u()().wrap(function(Ue){for(;;)switch(Ue.prev=Ue.next){case 0:return a(!0),m.removeMessageById(be),c.current.abortController=new AbortController,m.createResponseMessage(),Qe=m.getHistoryMessages(),Ue.next=7,se(Qe);case 7:case"end":return Ue.stop()}},Ie)}));return function(Ie){return oe.apply(this,arguments)}}(),[m,se]);return(0,t.useEffect)(function(){c.current={request:void 0,response:void 0,abortController:void 0}},[p]),o({type:"handleReplace",callback:function(){var oe=Z()(u()().mark(function be(Qe){return u()().wrap(function(Ue){for(;;)switch(Ue.prev=Ue.next){case 0:return Ue.next=2,de(Qe.detail.id);case 2:case"end":return Ue.stop()}},be)}));function Ie(be){return oe.apply(this,arguments)}return Ie}()}),o({type:"handleSubmit",callback:function(){var oe=Z()(u()().mark(function be(Qe){return u()().wrap(function(Ue){for(;;)switch(Ue.prev=Ue.next){case 0:return Ue.next=2,ne(Qe.detail);case 2:case"end":return Ue.stop()}},be)}));function Ie(be){return oe.apply(this,arguments)}return Ie}()},[ne]),{handleSubmit:ne,handleCancel:re}}function Tn(){var a=(0,E.wv)().getPrefixCls("chat-anywhere-chat"),p=Ln(),c=p.handleSubmit,m=p.handleCancel;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(We,{}),(0,n.jsxs)("div",{className:a,children:[(0,n.jsx)(ge,{onSubmit:c}),(0,n.jsx)(ue,{onCancel:m,onSubmit:c})]})]})}var bn=e(21403),jn=e(67392),nn=e(13660),sn=e(12624),hn=e(50287),Cn=e(9368),pn=(0,t.createContext)({collapsed:!1,toggleCollapsed:function(){}});function Rn(a){var p=(0,t.useState)(!1),c=J()(p,2),m=c[0],L=c[1],U=(0,t.useCallback)(function(){L(function(xe){return!xe})},[]);return(0,n.jsx)(pn.Provider,{value:{collapsed:m,toggleCollapsed:U},children:a.children})}function Pn(){var a=(0,t.useContext)(pn),p=a.collapsed,c=(0,E.wv)().getPrefixCls("chat-anywhere-sessions"),m=l(function(L){var U;return(U=L.theme)===null||U===void 0?void 0:U.leftHeader})||{};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"".concat(c),children:[t.isValidElement(m)?m:(0,n.jsx)(kn,{}),(0,n.jsxs)("div",{className:"".concat(c,"-content"),style:{display:p?"none":"flex"},children:[(0,n.jsx)(Vn,{}),(0,n.jsx)(nt,{})]})]})})}function kn(a){var p=a.className,c=l(function(be){var Qe;return(Qe=be.theme)===null||Qe===void 0?void 0:Qe.leftHeader})||{},m=(0,E.wv)().getPrefixCls("chat-anywhere-sessions"),L=(0,t.useContext)(pn),U=L.toggleCollapsed,xe=L.collapsed,se=l(function(be){return be.session.multiple}),ne=c,re=ne.logo,de=re===void 0?"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png":re,oe=ne.title,Ie=oe===void 0?"Runtime WebUI":oe;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:_()("".concat(m,"-header"),p),children:[(0,n.jsxs)("div",{className:"".concat(m,"-header-left"),children:[de&&(0,n.jsx)("img",{src:de,alt:"logo",height:32}),(0,n.jsx)("span",{children:Ie})]}),se&&(0,n.jsx)(Pe.Z,{className:"".concat(m,"-header-collapse"),bordered:!1,icon:xe?(0,n.jsx)(nn.Z,{}):(0,n.jsx)(jn.Z,{}),onClick:U})]})})}function Vn(a){var p=(0,C.Sz)(Se,function(se){return se.loading}),c=an(),m=c.createSession,L=(0,E.wv)().getPrefixCls("chat-anywhere-sessions"),U=(0,t.useContext)(pn),xe=U.toggleCollapsed;return(0,n.jsx)("div",{className:"".concat(L,"-adder"),style:a.style,children:(0,n.jsx)(bn.Z,{block:!0,type:"primary",icon:(0,n.jsx)(sn.Z,{}),disabled:p,onClick:Z()(u()().mark(function se(){return u()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return re.next=2,m();case 2:a.narrowMode&&xe();case 3:case"end":return re.stop()}},se)})),children:"New Chat"})})}function nt(a){var p=(0,E.wv)().getPrefixCls("chat-anywhere-sessions"),c=(0,C.Sz)(Oe,function(de){return de.sessions}),m=an(),L=m.changeCurrentSessionId,U=m.removeSession,xe=(0,C.Sz)(Oe,function(de){return de.currentSessionId}),se=(0,t.useContext)(pn),ne=se.toggleCollapsed,re=(0,t.useMemo)(function(){return c.map(function(de){return{key:de.id,label:de.name||"New Chat"}})},[c]);return(0,n.jsx)("div",{className:"".concat(p,"-list"),style:a.style,children:(0,n.jsx)(Cn.Z,{items:re,menu:[{key:"delete",icon:(0,n.jsx)(hn.Z,{}),danger:!0,onClick:function(){var de=Z()(u()().mark(function Ie(be){return u()().wrap(function(qe){for(;;)switch(qe.prev=qe.next){case 0:return qe.next=2,U({id:be.key});case 2:return qe.abrupt("return",qe.sent);case 3:case"end":return qe.stop()}},Ie)}));function oe(Ie){return de.apply(this,arguments)}return oe}()}],activeKey:xe,onActiveChange:function(oe){L(oe),a.narrowMode&&ne()}})})}var Xn,tn=(0,A.vJ)(Xn||(Xn=b()([`

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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),Ke=e(85265);function vn(){var a=(0,E.wv)().getPrefixCls("chat-anywhere"),p=l(function(se){return se.theme}),c=p.narrowMode,m=p.rightHeader,L=(0,t.useContext)(pn),U=L.toggleCollapsed,xe=L.collapsed;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(tn,{}),(0,n.jsxs)("div",{className:"".concat(a,"-layout-right-header"),children:[c?(0,n.jsx)(kn,{className:"".concat(a,"-default-header-inner")}):null,m&&(0,n.jsx)("div",{className:"".concat(a,"-default-header-right"),children:m})]}),c&&(0,n.jsx)(Ke.Z,{width:"80vw",styles:{body:{padding:0}},open:xe,onClose:U,title:null,closable:!1,placement:"left",children:(0,n.jsxs)("div",{className:"".concat(a,"-sessions"),children:[(0,n.jsx)(nt,{narrowMode:!0}),(0,n.jsx)(Vn,{narrowMode:!0})]})})]})}function fn(a,p){var c=Be(),m=(0,C.Sz)(Se,function(L){return L.setDisabled});return t.useImperativeHandle(p,function(){return{messages:c,input:{setDisabled:m,submit:function(U){var xe=U.query,se=U.fileList,ne=U.biz_params;G({type:"handleSubmit",data:{query:xe,fileList:se,biz_params:ne}})}}}},[]),null}var qn=(0,t.forwardRef)(fn);function yn(a,p){var c=a.className,m=(0,E.wv)().getPrefixCls("chat-anywhere-layout"),L=l(function(Ie){return Ie.theme.narrowMode}),U=l(function(Ie){return Ie.theme.background}),xe=l(function(Ie){return Ie.theme.rightHeader}),se=l(function(Ie){return{session:Ie.session}}),ne=se.session,re=(0,t.useContext)(pn),de=re.collapsed,oe=!L&&ne&&ne.multiple;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{}),(0,n.jsxs)("div",{className:_()("".concat(m),c),children:[oe&&(0,n.jsx)("div",{className:_()("".concat(m,"-left"),g()({},"".concat(m,"-left-collapsed"),de)),children:(0,n.jsx)(Pn,{})}),(0,n.jsxs)("div",{className:_()("".concat(m,"-right"),g()({},"".concat(m,"-right-has-header"),!!xe)),style:{background:U},children:[!!xe&&(0,n.jsx)(vn,{}),(0,n.jsx)(Tn,{})]})]}),(0,n.jsx)(qn,{ref:p})]})}var On=(0,t.forwardRef)(yn);function Yn(a){var p=(0,t.useMemo)(function(){return a.data.input[0].content.reduce(function(c,m){if(m.type===i.TEXT&&c.push({code:"Text",data:{content:m.text,raw:!0}}),m.type===i.IMAGE){var L=c.find(function(xe){return xe.code==="Image"});L?L.data.push({url:m.image_url}):c.push({code:"Images",data:[{url:m.image_url}]})}if(m.type===i.FILE){var U=c.find(function(xe){return xe.code==="Files"});U?U.data.push({url:m.file_url,name:m.file_name,size:m.file_size}):c.push({code:"Files",data:[{url:m.file_url,name:m.file_name,size:m.file_size}]})}return c},[])},[a.data.input]);return(0,n.jsx)(Te.Z,{role:"user",cards:p})}var In=e(66109),Fn=t.memo(function(a){var p,c=a.data;return(p=c.content)!==null&&p!==void 0&&p.length?(0,n.jsx)(n.Fragment,{children:c.content.map(function(m,L){switch(m.type){case i.TEXT:return(0,n.jsx)(In.Z,{content:m.text,cursor:m.status===B.InProgress},L);case i.REFUSAL:return(0,n.jsx)(In.Z,{raw:!0,content:m.refusal},L);default:return(0,n.jsx)("div",{children:JSON.stringify(m)},L)}})}):null}),Sn=Fn,Kn=e(85786),wn=t.memo(function(a){var p,c=a.data,m=l(function(Ie){return Ie.customToolRenderConfig})||{};if(!((p=c.content)!==null&&p!==void 0&&p.length))return null;var L=c.content,U=c.status===B.InProgress,xe=L[0].data.name,se="".concat(L[0].data.server_label?L[0].data.server_label+" / ":""),ne="".concat(se).concat(xe);if(m[xe]){var re=m[xe];return(0,n.jsx)(re,{data:c})}else{var de,oe;return(0,n.jsx)(Kn.Z,{loading:U,defaultOpen:!1,title:ne==="undefined"?"":ne,input:(de=L[0])===null||de===void 0||(de=de.data)===null||de===void 0?void 0:de.arguments,output:(oe=L[1])===null||oe===void 0||(oe=oe.data)===null||oe===void 0?void 0:oe.output})}}),Dn=wn,Wn=e(79323);function Hn(a){var p,c=a.data;if(c.status===B.Created)return null;var m=c==null||(p=c.content)===null||p===void 0?void 0:p[0];return m?(0,n.jsx)(Wn.Z,{loading:c.status===B.InProgress,title:"Thinking",content:m.text}):null}function An(a){var p=a.data;return(0,n.jsx)(Te.Z.Interrupted,{type:"error",title:p.code,desc:p.message})}var mn=e(89698),_n=e(60227),zn=e(82286),et=e(67055),ot=e(39693),Bn=e.n(ot);function Gn(a){return!a.input_tokens||!a.output_tokens?null:(0,n.jsx)(Te.Z.Footer.Count,{data:[["Input",a.input_tokens],["Output",a.output_tokens]]})}function tt(a){var p,c,m,L=l(function(se){var ne;return(ne=se.actions)===null||ne===void 0?void 0:ne.list})||[{icon:(0,n.jsx)(mn.Z,{}),onClick:function(){(0,zn.JG)(JSON.stringify(a.data))}}],U=(p=l(function(se){var ne;return(ne=se.actions)===null||ne===void 0?void 0:ne.replace}))!==null&&p!==void 0?p:!0,xe=Bn()([].concat(K()(L.map(function(se){var ne=se;return se.render&&(ne.children=t.createElement(se.render,{data:a})),h()(h()({},ne),{},{onClick:function(){var de;(de=se.onClick)===null||de===void 0||de.call(se,a)}})})),[U&&a.isLast?{icon:(0,n.jsx)(et.Z,{title:"\u91CD\u65B0\u751F\u6210",children:(0,n.jsx)(_n.Z,{})}),onClick:function(){G({type:"handleReplace",data:a})}}:null]));return Je.maybeDone(a.data)?(0,n.jsx)(Te.Z.Footer,{left:(0,n.jsx)(Te.Z.Footer.Actions,{data:xe}),right:(0,n.jsx)(Gn,{input_tokens:(c=a.data.usage)===null||c===void 0?void 0:c.input_tokens,output_tokens:(m=a.data.usage)===null||m===void 0?void 0:m.output_tokens})}):null}function st(a){var p=(0,t.useMemo)(function(){return Je.mergeToolMessages(a.data.output)},[a.data.output]);return!(p!=null&&p.length)&&Je.maybeGenerating(a.data)?(0,n.jsx)(Te.Z.Spin,{}):(0,n.jsxs)(n.Fragment,{children:[p.map(function(c){switch(c.type){case Q.MESSAGE:return(0,n.jsx)(Sn,{data:c},c.id);case Q.PLUGIN_CALL:case Q.PLUGIN_CALL_OUTPUT:case Q.MCP_CALL:case Q.MCP_CALL_OUTPUT:return(0,n.jsx)(Dn,{data:c},c.id);case Q.REASONING:return(0,n.jsx)(Hn,{data:c},c.id);case Q.ERROR:return(0,n.jsx)(An,{data:c},c.id);case Q.HEARTBEAT:return null;default:return console.warn("[WIP] Unknown message type: ".concat(c.type)),null}}),a.data.error&&(0,n.jsx)(An,{data:a.data.error}),(0,n.jsx)(tt,h()({},a))]})}var lt=e(83962);function ct(a){var p=a.options,c=a.cards,m=a.children,L=[[S,{options:p}],[lt.xy,{cardConfig:c}],[Ne,{}],[De,{}],[k,{}],[Rn,{}]];return L.reduceRight(function(U,xe){var se=J()(xe,2),ne=se[0],re=se[1];return(0,n.jsx)(ne,h()(h()({},re),{},{children:U}))},m)}var at=ct;function ut(a,p){var c=a.options,m=c===void 0?{}:c,L=(0,t.useMemo)(function(){var U=h()({AgentScopeRuntimeRequestCard:Yn,AgentScopeRuntimeResponseCard:st},m.cards);return U},[m.cards]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(at,{options:m,cards:L,children:(0,n.jsx)(On,{ref:p})})})}var it=(0,t.forwardRef)(ut)},57551:function(){},22863:function(Ye,W,e){"use strict";e.r(W);var H=e(57551),h=e.n(H),O={};for(var g in H)g!=="default"&&(O[g]=function(E){return H[E]}.bind(0,g));e.d(W,O)},34487:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return Ae}});var H=e(97857),h=e.n(H),O=e(5574),g=e.n(O),E=e(56044),j=e(68400),b=e.n(j),A=e(9053),N,d=(0,A.vJ)(N||(N=b()([`
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
`])),function(z){return z.theme.prefixCls},function(z){return z.theme.colorBgLayout},function(z){return z.theme.colorBgLayout},function(z){return z.theme.colorFillTertiary},function(z){return z.theme.colorBgBase},function(z){return z.theme.prefixCls},function(z){return z.theme.prefixCls},function(z){return z.theme.colorBgBase},function(z){return z.theme.colorBorderSecondary},function(z){return z.theme.colorText},function(z){return z.theme.colorBorderSecondary},function(z){return z.theme.colorPrimary}),f=e(93967),_=e.n(f),y=e(55839),C=e(16494),t=e(85893);function x(z){var Pe=(0,E.wv)().getPrefixCls("assets-preview-image"),Le=z.width,ze=Le===void 0?1:Le,ke=z.height,R=ke===void 0?1:ke,ue=z.src;return(0,t.jsx)("div",{className:Pe,style:{aspectRatio:"".concat(ze,"/").concat(R)},children:(0,t.jsx)(y.ZP,{locale:{Image:{preview:""}},children:(0,t.jsx)(C.Z,{src:ue,width:"100%",height:"100%"})})})}function I(z){return(0,t.jsx)(C.Z.PreviewGroup,{children:z.children})}var s=e(9783),n=e.n(s),P=e(13769),l=e.n(P),S=e(67294),ee=e(63701),Y=e(62321),u=e(32485),le=e(64057),Z=["width","height","poster","src"];function w(z){var Pe=(0,E.wv)().getPrefixCls("assets-preview-video"),Le=z.width,ze=Le===void 0?1:Le,ke=z.height,R=ke===void 0?1:ke,ue=z.poster,Te=z.src,T=l()(z,Z),K=(0,S.useRef)(null),$=(0,S.useState)(!1),De=g()($,2),Be=De[0],Me=De[1],je=(0,S.useState)(0),Ge=g()(je,2),Oe=Ge[0],Ne=Ge[1],an=(0,S.useState)(0),He=g()(an,2),Re=He[0],un=He[1],r=(0,S.useCallback)(function(We){var en=Math.floor(We/60),o=Math.floor(We%60);return"".concat(en.toString().padStart(2,"0"),":").concat(o.toString().padStart(2,"0"))},[]),Ee=(0,S.useCallback)(function(){var We=K.current;We&&(We.paused?(We.play(),Me(!0)):(We.pause(),Me(!1)))},[]),ye=(0,S.useCallback)(function(){K.current&&Ne(K.current.duration)},[]),_e=(0,S.useCallback)(function(){Me(!1),un(0)},[]),ge=(0,S.useCallback)(function(){K.current&&un(K.current.currentTime)},[]),Xe=(0,S.useCallback)(function(We){We.stopPropagation();var en=K.current;en&&(en.requestFullscreen?en.requestFullscreen():en.webkitRequestFullscreen?en.webkitRequestFullscreen():en.msRequestFullscreen&&en.msRequestFullscreen())},[]);return(0,t.jsxs)("div",{className:Pe,style:{aspectRatio:"".concat(ze,"/").concat(R)},children:[(0,t.jsx)("video",h()(h()({},T),{},{ref:K,src:Te,poster:ue,preload:"metadata",onLoadedMetadata:ye,onTimeUpdate:ge,onEnded:_e})),(0,t.jsxs)("div",{className:_()("".concat(Pe,"-overlay"),n()({},"".concat(Pe,"-overlay-playing"),1)),onClick:Ee,children:[(0,t.jsx)("div",{className:"".concat(Pe,"-play-btn"),children:Be?(0,t.jsx)(ee.Z,{}):(0,t.jsx)(Y.Z,{})}),(0,t.jsx)("div",{className:"".concat(Pe,"-enlarge"),onClick:Xe,children:(0,t.jsx)(le.Z,{bordered:!1,size:"small",icon:(0,t.jsx)(u.Z,{})})})]}),(0,t.jsx)("div",{className:"".concat(Pe,"-duration"),children:r(Oe-Re)})]})}var J=e(20399),ae=e(80162);function Ce(z){var Pe=(0,E.wv)().getPrefixCls("assets-preview-audio"),Le=(0,S.useRef)(null),ze=(0,S.useState)(!1),ke=g()(ze,2),R=ke[0],ue=ke[1],Te=(0,S.useState)(!1),T=g()(Te,2),K=T[0],$=T[1],De=(0,S.useState)(0),Be=g()(De,2),Me=Be[0],je=Be[1],Ge=(0,S.useState)(0),Oe=g()(Ge,2),Ne=Oe[0],an=Oe[1],He=(0,S.useCallback)(function(ye){if(isNaN(ye))return"00:00";var _e=Math.floor(ye/60),ge=Math.floor(ye%60);return"".concat(_e.toString().padStart(2,"0"),":").concat(ge.toString().padStart(2,"0"))},[]),Re=(0,S.useCallback)(function(){Le.current&&(R?Le.current.pause():Le.current.play(),ue(!R))},[R]),un=(0,S.useCallback)(function(){$(!K),Le.current&&(Le.current.muted=K)},[K]),r=(0,S.useCallback)(function(ye){if(Le.current&&Ne){var _e=ye.currentTarget.getBoundingClientRect(),ge=ye.clientX-_e.left,Xe=ge/_e.width,We=Xe*Ne;Le.current.currentTime=We,je(We)}},[Ne]);(0,S.useEffect)(function(){var ye=Le.current;if(ye){var _e=function(){return je(ye.currentTime)},ge=function(){return an(ye.duration)},Xe=function(){return ue(!1)};return ye.addEventListener("timeupdate",_e),ye.addEventListener("loadedmetadata",ge),ye.addEventListener("ended",Xe),function(){ye.removeEventListener("timeupdate",_e),ye.removeEventListener("loadedmetadata",ge),ye.removeEventListener("ended",Xe)}}},[]);var Ee=Ne?Me/Ne*100:0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("audio",{ref:Le,src:z.src,muted:K}),(0,t.jsxs)("div",{className:Pe,children:[(0,t.jsx)(le.Z,{size:"small",type:"text",onClick:Re,icon:R?(0,t.jsx)(ee.Z,{}):(0,t.jsx)(Y.Z,{})}),(0,t.jsx)(le.Z,{size:"small",type:"text",onClick:un,icon:K?(0,t.jsx)(J.Z,{}):(0,t.jsx)(ae.Z,{})}),(0,t.jsx)("div",{className:"".concat(Pe,"-time"),children:He(Me)}),(0,t.jsx)("div",{className:"".concat(Pe,"-progress"),onClick:r,children:(0,t.jsx)("div",{className:"".concat(Pe,"-progress-bar"),style:{width:"".concat(Ee,"%")}})}),(0,t.jsx)("div",{className:"".concat(Pe,"-time"),children:He(Ne)})]})]})}var v=e(16138),Se=e(83202),k=e(90105),ce=e(82052);function V(z){var Pe,Le=(0,k.Z)(),ze=(0,E.wv)().getPrefixCls("assets-preview"),ke=(0,S.useRef)(null),R=z.height,ue=R===void 0?144:R,Te=(0,S.useState)(0),T=g()(Te,2),K=T[0],$=T[1],De=(0,S.useRef)(0),Be=(0,S.useState)(0),Me=g()(Be,2),je=Me[0],Ge=Me[1],Oe=(0,S.useDeferredValue)(je),Ne=(0,ce.Z)(ke),an=(0,S.useCallback)(function(r){Ge(r.target.scrollLeft)},[]);(0,S.useEffect)(function(){$(ue/2-12)},[ue]),(0,S.useEffect)(function(){ke.current&&z.type!=="audio"&&(De.current=ke.current.scrollWidth-ke.current.clientWidth),Le()},[z.data.length,Ne==null?void 0:Ne.width]);var He=(0,S.useCallback)(function(r){var Ee=200;ke.current.scrollLeft=ke.current.scrollLeft+Ee*(r==="left"?-1:1)},[]),Re={image:x,video:w,audio:Ce}[z.type],un=z.data.map(function(r,Ee){return(0,t.jsx)(Re,h()({},r),Ee)});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{}),(0,t.jsxs)("div",{className:_()("".concat(ze),z.className),children:[(0,t.jsx)("div",{className:_()("".concat(ze,"-container"),(Pe=z.classNames)===null||Pe===void 0?void 0:Pe.container),style:z.type!=="audio"?{height:ue}:{flexDirection:"column"},onScroll:an,ref:ke,children:z.type==="image"?(0,t.jsx)(I,{children:un}):un}),K&&z.type!=="audio"?(0,t.jsxs)(t.Fragment,{children:[Oe>50&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:_()("".concat(ze,"-left-edge"))}),(0,t.jsx)(le.Z,{onClick:function(){return He("left")},style:{top:K},className:_()("".concat(ze,"-left-arrow"),"".concat(ze,"-arrow")),size:"small",shape:"circle",icon:(0,t.jsx)(v.Z,{})})]}),Oe<De.current-50&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:_()("".concat(ze,"-right-edge"))}),(0,t.jsx)(le.Z,{onClick:function(){return He("right")},style:{top:K},className:_()("".concat(ze,"-right-arrow"),"".concat(ze,"-arrow")),size:"small",shape:"circle",icon:(0,t.jsx)(Se.Z,{})})]})]}):null]})]})}var Ae=V},36417:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return un}});var H=e(9783),h=e.n(H),O=e(97857),g=e.n(O),E=e(5574),j=e.n(E),b=e(13769),A=e.n(b),N=e(93967),d=e.n(N),f=e(67294),_=e(56044),y=e(56790),C=e(73935),t=f.createContext(null),x=e(85893);function I(r){var Ee=r.getDropContainer,ye=r.className,_e=r.prefixCls,ge=r.children,Xe=f.useContext(t),We=Xe.disabled,en=f.useState(),o=j()(en,2),G=o[0],X=o[1],fe=f.useState(null),ve=j()(fe,2),M=ve[0],ie=ve[1];f.useEffect(function(){var Q=Ee==null?void 0:Ee();G!==Q&&X(Q)},[Ee]),f.useEffect(function(){if(G){var Q=function(){ie(!0)},i=function(he){he.preventDefault()},F=function(he){he.relatedTarget||ie(!1)},D=function(he){ie(!1),he.preventDefault()};return document.addEventListener("dragenter",Q),document.addEventListener("dragover",i),document.addEventListener("dragleave",F),document.addEventListener("drop",D),function(){document.removeEventListener("dragenter",Q),document.removeEventListener("dragover",i),document.removeEventListener("dragleave",F),document.removeEventListener("drop",D)}}},[!!G]);var B=Ee&&G&&!We;if(!B)return null;var q="".concat(_e,"-drop-area");return(0,C.createPortal)((0,x.jsx)("div",{className:d()(q,ye,h()({},"".concat(q,"-on-body"),G.tagName==="BODY")),style:{display:M?"block":"none"},children:ge}),G)}var s=e(53033),n=e(52861),P=e(83622),l=e(29372),S=e(64599),ee=e.n(S),Y=function(Ee){return Ee.indexOf("image/")===0},u=200;function le(r){return new Promise(function(Ee){if(!r||!r.type||!Y(r.type)){Ee("");return}var ye=new Image;if(ye.onload=function(){var Xe=ye.width,We=ye.height,en=Xe/We,o=en>1?u:u*en,G=en>1?u/en:u,X=document.createElement("canvas");X.width=o,X.height=G,X.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(o,"px; height: ").concat(G,"px; z-index: 9999; display: none;"),document.body.appendChild(X);var fe=X.getContext("2d");fe.drawImage(ye,0,0,o,G);var ve=X.toDataURL();document.body.removeChild(X),window.URL.revokeObjectURL(ye.src),Ee(ve)},ye.crossOrigin="anonymous",r.type.startsWith("image/svg+xml")){var _e=new FileReader;_e.onload=function(){_e.result&&typeof _e.result=="string"&&(ye.src=_e.result)},_e.readAsDataURL(r)}else if(r.type.startsWith("image/gif")){var ge=new FileReader;ge.onload=function(){ge.result&&Ee(ge.result)},ge.readAsDataURL(r)}else ye.src=window.URL.createObjectURL(r)})}var Z=e(9361),w=e(38703);function J(r){var Ee=r.percent,ye=Z.Z.useToken(),_e=ye.token;return(0,x.jsx)(w.Z,{type:"circle",percent:Ee,size:40,strokeColor:"#FFF",trailColor:"rgba(255, 255, 255, 0.3)",format:function(Xe){return(0,x.jsxs)("span",{style:{color:"#FFF"},children:[(Xe||0).toFixed(0),"%"]})}})}var ae=e(68400),Ce=e.n(ae),v=e(9053),Se,k=(0,v.vJ)(Se||(Se=Ce()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.colorBgContainer},function(r){return r.theme.lineWidth},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.paddingXS},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.fontSize},function(r){return r.theme.colorText},function(r){return r.theme.prefixCls},function(r){return r.theme.colorTextQuaternary},function(r){return r.theme.fontSizeSM},function(r){return r.theme.prefixCls},function(r){return r.theme.opacityLoading},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.lineWidth},function(r){return r.theme.prefixCls},function(r){return r.theme.paddingXXS},function(r){return r.theme.prefixCls},function(r){return r.theme.colorText},function(r){return r.theme.colorBgContainer},function(r){return r.theme.lineWidth},function(r){return r.theme.colorBorder},function(r){return r.theme.colorError},function(r){return r.theme.prefixCls},function(r){return r.theme.colorError},function(r){return r.theme.paddingSM},function(r){return r.theme.prefixCls},function(r){return r.theme.colorPrimary}),ce=e(89102),V="\xA0",Ae="#8c8c8c",z=["png","jpg","jpeg","gif","bmp","webp","svg"],Pe=function(Ee){var ye=Ee.url;return(0,x.jsx)("img",{src:ye,width:32,height:32})},Le=[{icon:(0,x.jsx)(Pe,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01cVtZXI23tPVhiZoPJ_!!6000000007313-55-tps-40-40.svg"}),color:"#22b35e",ext:["xlsx","xls"]},{icon:(0,x.jsx)(Pe,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01uDnnuz1XMNEjgFMul_!!6000000002909-55-tps-40-40.svg"}),color:Ae,ext:z},{icon:(0,x.jsx)(Pe,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01PaXli01DDPAO68fsI_!!6000000000182-55-tps-40-40.svg"}),color:Ae,ext:["md","mdx"]},{icon:(0,x.jsx)(Pe,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01mB5PzD27fuIWK661W_!!6000000007825-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["pdf"]},{icon:(0,x.jsx)(Pe,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01a8j7Jv1nW1QyFme7k_!!6000000005096-55-tps-40-40.svg"}),color:"#ff6e31",ext:["ppt","pptx"]},{icon:(0,x.jsx)(Pe,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01XaNi8P1UkhQXoQdUL_!!6000000002556-55-tps-40-40.svg"}),color:"#1677ff",ext:["doc","docx"]},{icon:(0,x.jsx)(Pe,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),color:"#fab714",ext:["zip","rar","7z","tar","gz"]},{icon:(0,x.jsx)(Pe,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01zTTe0q1Xg4GkZgJol_!!6000000002952-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["mp4","avi","mov","wmv","flv","mkv"]},{icon:(0,x.jsx)(Pe,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01qOBdXG1UpHO6f3Vvc_!!6000000002566-55-tps-40-40.svg"}),color:"#8c8c8c",ext:["mp3","wav","flac","ape","aac","ogg"]}];function ze(r,Ee){return Ee.some(function(ye){return r.toLowerCase()===".".concat(ye)})}function ke(r){for(var Ee=r,ye=["B","KB","MB","GB","TB","PB","EB"],_e=0;Ee>=1024&&_e<ye.length-1;)Ee/=1024,_e++;return"".concat(Ee.toFixed(0)," ").concat(ye[_e])}function R(r,Ee){var ye=(0,_.wv)(),_e=ye.getPrefixCls,ge=r.item,Xe=r.onRemove,We=r.className,en=r.style,o=f.useContext(t),G=o||{},X=G.disabled,fe=ge.name,ve=ge.size,M=ge.percent,ie=ge.status,B=ie===void 0?"done":ie,q=ge.description,Q=_e("attachment"),i="".concat(Q,"-list-card"),F=f.useMemo(function(){var sn=fe||"",hn=sn.match(/^(.*)\.[^.]+$/);return hn?[hn[1],sn.slice(hn[1].length)]:[sn,""]},[fe]),D=j()(F,2),te=D[0],he=D[1],Ze=f.useMemo(function(){return ze(he,z)},[he]),me=f.useMemo(function(){return q||(B==="uploading"?"".concat(M||0,"%"):B==="error"?ge.response||V:ve?ke(ve):V)},[B,M]),on=f.useMemo(function(){var sn=ee()(Le),hn;try{for(sn.s();!(hn=sn.n()).done;){var Cn=hn.value,pn=Cn.ext,Rn=Cn.icon,Pn=Cn.color;if(ze(he,pn))return[Rn,Pn]}}catch(kn){sn.e(kn)}finally{sn.f()}return[(0,x.jsx)(Pe,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"},"defaultIcon"),Ae]},[he]),$e=j()(on,2),Ve=$e[0],pe=$e[1],Je=f.useState(),gn=j()(Je,2),xn=gn[0],Ln=gn[1];f.useEffect(function(){if(ge.originFileObj){var sn=!0;return le(ge.originFileObj).then(function(hn){sn&&Ln(hn)}),function(){sn=!1}}Ln(void 0)},[ge.originFileObj]);var Tn=null,bn=ge.thumbUrl||ge.url||xn,jn=r.renderType||"default",nn=Ze&&(ge.originFileObj||bn)&&jn==="default";return nn?Tn=(0,x.jsxs)(x.Fragment,{children:[bn&&(0,x.jsx)("img",{alt:"preview",src:bn}),B!=="done"&&(0,x.jsxs)("div",{className:"".concat(i,"-img-mask"),children:[B==="uploading"&&M!==void 0&&(0,x.jsx)(J,{percent:M,prefixCls:i}),B==="error"&&(0,x.jsx)("div",{className:"".concat(i,"-desc"),children:(0,x.jsx)("div",{className:"".concat(i,"-ellipsis-prefix"),children:me})})]})]}):Tn=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"".concat(i,"-icon"),style:{color:pe},children:Ve}),(0,x.jsxs)("div",{className:"".concat(i,"-content"),children:[(0,x.jsxs)("div",{className:"".concat(i,"-name"),children:[te!=null?te:V,he]}),(0,x.jsx)("div",{className:"".concat(i,"-desc"),children:(0,x.jsx)("div",{className:"".concat(i,"-ellipsis-prefix"),children:me})})]})]}),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(k,{}),(0,x.jsxs)("div",{className:d()(i,h()(h()(h()(h()(h()({},"".concat(i,"-status-").concat(B),B),"".concat(i,"-type-preview"),nn),"".concat(i,"-type-overview"),!nn),"".concat(i,"-type-").concat(jn),!0),"".concat(i,"-hoverable"),!X&&Xe),We),style:en,ref:Ee,children:[Tn,(0,x.jsx)("button",{style:{opacity:!X&&Xe?1:0},className:"".concat(i,"-remove"),onClick:function(){!X&&Xe&&Xe(ge)},children:(0,x.jsx)(ce.Z,{})})]})]})}var ue=f.forwardRef(R),Te=1;function T(r){var Ee=r.prefixCls,ye=r.items,_e=r.onRemove,ge=r.overflow,Xe=r.listClassName,We=r.listStyle,en=r.itemClassName,o=r.itemStyle,G="".concat(Ee,"-list"),X=f.useRef(null),fe=f.useState(!1),ve=j()(fe,2),M=ve[0],ie=ve[1];f.useEffect(function(){return ie(!0),function(){ie(!1)}},[]);var B=f.useState(!1),q=j()(B,2),Q=q[0],i=q[1],F=f.useState(!1),D=j()(F,2),te=D[0],he=D[1],Ze=function(){var pe=X.current;pe&&(ge==="scrollX"?(i(Math.abs(pe.scrollLeft)>=Te),he(pe.scrollWidth-pe.clientWidth-Math.abs(pe.scrollLeft)>=Te)):ge==="scrollY"&&(i(pe.scrollTop!==0),he(pe.scrollHeight-pe.clientHeight!==pe.scrollTop)))};f.useEffect(function(){Ze()},[ge]);var me=function(pe){var Je=X.current;Je&&Je.scrollTo({left:Je.scrollLeft+pe*Je.clientWidth,behavior:"smooth"})},on=function(){me(-1)},$e=function(){me(1)};return(0,x.jsxs)("div",{className:d()(G,h()(h()(h()({},"".concat(G,"-overflow-").concat(r.overflow),ge),"".concat(G,"-overflow-ping-start"),Q),"".concat(G,"-overflow-ping-end"),te),Xe),ref:X,onScroll:Ze,style:We,children:[(0,x.jsx)(l.V4,{keys:ye.map(function(Ve){return{key:Ve.uid,item:Ve}}),motionName:"".concat(G,"-card-motion"),component:!1,motionAppear:M,motionLeave:!0,motionEnter:!0,children:function(pe){var Je=pe.key,gn=pe.item,xn=pe.className,Ln=pe.style;return(0,x.jsx)(ue,{prefixCls:Ee,item:gn,onRemove:_e,className:d()(xn,en),style:g()(g()({},Ln),o),renderType:r.renderType},Je)}}),ge==="scrollX"&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(P.ZP,{size:"small",shape:"circle",className:"".concat(G,"-prev-btn"),icon:(0,x.jsx)(s.Z,{}),onClick:on}),(0,x.jsx)(P.ZP,{size:"small",shape:"circle",className:"".concat(G,"-next-btn"),icon:(0,x.jsx)(n.Z,{}),onClick:$e})]})]})}var K=e(86250),$=e(21317),De=e(41154);function Be(r,Ee){var ye=r.prefixCls,_e=r.placeholder,ge=_e===void 0?{}:_e,Xe=r.upload,We=r.className,en=r.style,o="".concat(ye,"-placeholder"),G=ge||{},X=f.useContext(t),fe=X.disabled,ve=f.useState(!1),M=j()(ve,2),ie=M[0],B=M[1],q=function(){B(!0)},Q=function(te){te.currentTarget.contains(te.relatedTarget)||B(!1)},i=function(){B(!1)},F=f.isValidElement(ge)?ge:(0,x.jsxs)(K.Z,{align:"center",justify:"center",vertical:!0,className:"".concat(o,"-inner"),children:[(0,x.jsx)($.default.Text,{className:"".concat(o,"-icon"),children:G.icon}),(0,x.jsx)($.default.Title,{className:"".concat(o,"-title"),level:5,children:G.title}),(0,x.jsx)($.default.Text,{className:"".concat(o,"-description"),type:"secondary",children:G.description})]});return(0,x.jsx)("div",{className:d()(o,h()(h()({},"".concat(o,"-drag-in"),ie),"".concat(o,"-disabled"),fe),We),onDragEnter:q,onDragLeave:Q,onDrop:i,"aria-hidden":fe,style:en,children:(0,x.jsx)(De.Z.Dragger,g()(g()({showUploadList:!1},Xe),{},{ref:Ee,style:{padding:0,border:0,background:"transparent"},children:F}))})}var Me=f.forwardRef(Be);function je(r,Ee){var ye=r.children,_e=r.upload,ge=r.rootClassName,Xe=f.useRef(null);return f.useImperativeHandle(Ee,function(){return Xe.current}),(0,x.jsx)(De.Z,g()(g()({},_e),{},{showUploadList:!1,rootClassName:ge,ref:Xe,children:ye}))}var Ge=f.forwardRef(je),Oe,Ne=(0,v.vJ)(Oe||(Oe=Ce()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.zIndexPopupBase},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.lineWidthBold},function(r){return r.theme.padding},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorPrimaryHover},function(r){return r.theme.prefixCls},function(r){return r.theme.paddingXXS},function(r){return r.theme.fontSizeHeading2},function(r){return r.theme.prefixCls},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.colorText},function(r){return r.theme.padding},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSize},function(r){return r.theme.lineHeight},function(r){return r.theme.paddingSM},function(r){return r.theme.paddingSM},function(r){return r.theme.fontSizeHeading2},function(r){return r.theme.boxShadowTertiary},function(r){return r.theme.padding},function(r){return r.theme.padding},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls}),an=["prefixCls","rootClassName","rootStyle","className","style","items","children","getDropContainer","placeholder","onChange","overflow","disabled","classNames","styles"];function He(r,Ee){var ye=r.prefixCls,_e=r.rootClassName,ge=r.rootStyle,Xe=r.className,We=r.style,en=r.items,o=r.children,G=r.getDropContainer,X=r.placeholder,fe=r.onChange,ve=r.overflow,M=r.disabled,ie=r.classNames,B=ie===void 0?{}:ie,q=r.styles,Q=q===void 0?{}:q,i=A()(r,an),F=(0,_.wv)(),D=F.direction,te=F.getPrefixCls,he=te("attachment"),Ze=f.useRef(null),me=f.useRef(null);f.useImperativeHandle(Ee,function(){return{nativeElement:Ze.current,upload:function(nn){var sn,hn=(sn=me.current)===null||sn===void 0||(sn=sn.nativeElement)===null||sn===void 0?void 0:sn.querySelector('input[type="file"]');if(hn){var Cn=new DataTransfer;Cn.items.add(nn),hn.files=Cn.files,hn.dispatchEvent(new Event("change",{bubbles:!0}))}}}});var on=(0,y.C8)([],{value:en}),$e=j()(on,2),Ve=$e[0],pe=$e[1],Je=(0,y.zX)(function(jn){pe(jn.fileList),fe==null||fe(jn)}),gn=g()(g()({},i),{},{fileList:Ve,onChange:Je}),xn=function(nn){var sn=Ve.filter(function(hn){return hn.uid!==nn.uid});Je({file:nn,fileList:sn})},Ln,Tn=function(nn,sn,hn){var Cn=typeof X=="function"?X(nn):X;return(0,x.jsx)(Me,{placeholder:Cn,upload:gn,prefixCls:he,className:d()(B.placeholder),style:g()(g()({},Q.placeholder),sn==null?void 0:sn.style),ref:hn})};if(o)Ln=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Ge,{upload:gn,rootClassName:_e,ref:me,children:o}),(0,x.jsx)(I,{getDropContainer:G,prefixCls:he,className:d()(_e),children:Tn("drop")})]});else{var bn=Ve.length>0;Ln=(0,x.jsxs)("div",{className:d()(he,h()({},"".concat(he,"-rtl"),D==="rtl"),Xe,_e),style:g()(g()({},ge),We),dir:D||"ltr",ref:Ze,children:[(0,x.jsx)(T,{prefixCls:he,items:Ve,onRemove:xn,overflow:ve,upload:gn,listClassName:d()(B.list),listStyle:g()(g()({},Q.list),!bn&&{display:"none"}),itemClassName:d()(B.item),itemStyle:g()({},Q.item),renderType:r.renderType}),Tn("inline",bn?{style:{display:"none"}}:{},me)]})}return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Ne,{}),(0,x.jsx)(t.Provider,{value:{disabled:M},children:Ln})]})}var Re=f.forwardRef(He);Re.FileCard=ue;var un=Re},50130:function(Ye,W,e){"use strict";e.d(W,{L:function(){return _},Z:function(){return f}});var H=e(97857),h=e.n(H),O=e(13769),g=e.n(O),E=e(67294),j=e(83962),b=e(76289),A=e(85893),N=["component"],d=E.memo(function(y){var C=(0,j.HJ)(),t=(0,b.TQ)(function(n){return n.onInput}),x=(0,E.useMemo)(function(){if(y.component)return y.component;var n=C;return(n==null?void 0:n[y.code])||function(){return"".concat(y.code," not found")}},[]);if(typeof x=="function"){var I=y.component,s=g()(y,N);return(0,A.jsx)(x,h()(h()({},s),{},{context:{onInput:t}}))}else return x});function f(y){var C=y.cards;return C!=null&&C.length?C.map(function(t,x){var I=(0,A.jsx)(d,h()({index:x,id:y.id,isLast:y.isLast},t),(t==null?void 0:t.id)||x+t.code);return t.code==="Text"?(0,A.jsx)("div",{className:y.className,children:I},x):I}):null}function _(y,C){return{code:y,data:C}}},67369:function(Ye,W,e){"use strict";e.d(W,{p4:function(){return _},hw:function(){return y},ZP:function(){return f}});var H=e(67294),h=e(56044),O=e(64057),g=e(68400),E=e.n(g),j=e(9053),b,A=(0,j.vJ)(b||(b=E()([`
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
`])),function(C){return C.theme.prefixCls},function(C){return C.theme.prefixCls},function(C){return C.theme.colorText},function(C){return C.theme.prefixCls},function(C){return C.theme.colorTextTertiary},function(C){return C.theme.colorBorder}),N=A,d=e(85893);function f(C){var t=(0,h.wv)(),x=t.getPrefixCls,I=x("bubble-footer"),s=C.left,n=C.right;return s&&!s.type||n&&!n.type?null:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(N,{}),(0,d.jsxs)("div",{className:I,children:[(0,d.jsx)("div",{className:"".concat(I,"-left"),children:C.left}),(0,d.jsx)("div",{className:"".concat(I,"-right"),children:C.right})]})]})}function _(C){var t=(0,h.wv)(),x=t.getPrefixCls,I=x("bubble-footer-actions");return(0,d.jsx)("div",{className:I,children:C.data.map(function(s,n){return s.children?H.cloneElement(s.children,{key:n}):(0,d.jsx)(O.Z,{bordered:!1,icon:s.icon,size:"small",onClick:s.onClick},n)})})}function y(C){var t=(0,h.wv)(),x=t.getPrefixCls,I=x("bubble-footer-count");return(0,d.jsx)("div",{className:I,children:C.data.map(function(s){return(0,d.jsxs)("div",{className:"".concat(I,"-item"),children:[s[0],"\uFF1A",s[1]]},s[0])})})}f.Actions=_,f.Count=y},10146:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return d}});var H=e(68400),h=e.n(H),O=e(9053),g=e(56044),E=e(9343),j=e(36674),b=e(85893),A,N=(0,O.vJ)(A||(A=h()([`
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

`])),function(f){return f.theme.prefixCls},function(f){return f.theme.colorFillSecondary},function(f){return f.theme.prefixCls},function(f){return f.theme.prefixCls},function(f){return f.theme.colorText},function(f){return f.theme.colorError});function d(f){var _=f.title,y=_===void 0?"Answers have stopped":_,C=f.type,t=C===void 0?"interrupted":C,x=f.desc,I=(0,g.wv)(),s=I.getPrefixCls,n=s("interrupted");return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(N,{}),(0,b.jsxs)("div",{className:"".concat(n),children:[(0,b.jsxs)("div",{className:"".concat(n,"-header"),children:[(0,b.jsx)("div",{className:"".concat(n,"-icon-wrapper"),children:t==="interrupted"?(0,b.jsx)(E.Z,{className:"".concat(n,"-header-interrupted")}):(0,b.jsx)(j.Z,{className:"".concat(n,"-header-error")})}),(0,b.jsx)("span",{children:y})]}),x&&(0,b.jsx)("div",{className:"".concat(n,"-desc"),children:x})]})]})}},9146:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return ke}});var H=e(97857),h=e.n(H),O=e(93967),g=e.n(O),E=e(67294),j=e(68400),b=e.n(j),A=e(9053),N,d=(0,A.vJ)(N||(N=b()([`
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
`])),function(R){return R.theme.prefixCls},function(R){return R.theme.prefixCls},function(R){return R.theme.colorText},function(R){return R.theme.fontSize},function(R){return R.theme.lineHeight},function(R){return R.theme.prefixCls},function(R){return R.theme.borderRadiusLG},function(R){return R.theme.colorPrimaryBg},function(R){return R.theme.prefixCls},function(R){return R.theme.colorText},function(R){return R.theme.colorText},function(R){return R.theme.colorBgBase},function(R){return R.theme.colorBgBase},function(R){return R.theme.colorTextTertiary},function(R){return R.theme.colorTextTertiary},function(R){return R.theme.colorBgBase},function(R){return R.theme.colorBgBase},function(R){return R.theme.colorTextSecondary},function(R){return R.theme.colorTextSecondary},function(R){return R.theme.colorBgBase},function(R){return R.theme.colorBgBase}),f=e(56044),_=e(66109),y=e(50130),C=e(85893);function t(){var R=(0,f.wv)(),ue=R.getPrefixCls,Te=ue("bubble-loading");return(0,C.jsxs)("div",{className:Te,children:[(0,C.jsx)("div",{className:"".concat(Te,"-dot1")}),(0,C.jsx)("div",{className:"".concat(Te,"-dot2")}),(0,C.jsx)("div",{className:"".concat(Te,"-dot3")}),(0,C.jsx)("div",{className:"".concat(Te,"-text"),children:"-"})]})}var x=e(9783),I=e.n(x),s=e(68997),n=function(ue){var Te=ue.avatar,T=ue.msgStatus,K=ue.isAssistant,$=ue.prefixCls,De=ue.className,Be=ue.style,Me=E.isValidElement(Te)?Te:(0,C.jsx)(s.Z,h()({},Te));return(0,C.jsx)("div",{className:g()("".concat($,"-avatar"),I()({},"".concat($,"-avatar-loading"),K&&T==="generating"),De),style:Be,children:Me})},P=n,l=E.createContext({}),S=function(ue){var Te=ue.isLast,T=ue.className,K=ue.rootClassName,$=ue.style,De=ue.classNames,Be=De===void 0?{}:De,Me=ue.styles,je=Me===void 0?{}:Me,Ge=ue.avatar,Oe=ue.content,Ne=Oe===void 0?"":Oe,an=ue.cards,He=ue.msgStatus,Re=ue.id,un=ue.role,r=ue.variant,Ee={assistant:"start",user:"end"}[un]||"start",ye=(0,f.wv)(),_e=ye.getPrefixCls,ge=_e("bubble"),Xe=g()(ge,K,T,"".concat(ge,"-").concat(Ee)),We,en=!(Ne!=null&&Ne.length)&&!(an!=null&&an.length);ue.msgStatus==="generating"&&en?We=(0,C.jsx)(t,{}):We=Ne?(0,C.jsx)(_.Z,{content:Ne,cursor:ue.msgStatus==="generating"}):null;var o=Ee==="assistant"||Ee==="start",G="".concat(ge,"-content-").concat(r||(o?"borderless":"filled")),X=(0,C.jsxs)("div",{style:!o&&We?{flexDirection:"column-reverse"}:{},className:"".concat(ge,"-content-wrapper"),children:[(0,C.jsx)(y.Z,{cards:an,id:Re,isLast:Te,className:g()("".concat(ge,"-content"),"".concat(ge,"-content-wrapper-card"),G,Be.content)}),We&&(0,C.jsx)("div",{style:h()({},je.content),className:g()("".concat(ge,"-content"),"".concat(ge,"-content-wrapper-card"),G,Be.content),children:We})]});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(d,{}),(0,C.jsxs)("div",{style:$,className:Xe,id:Re,"data-role":un,children:[Ge&&(0,C.jsx)(P,{avatar:Ge,msgStatus:He,isAssistant:o,prefixCls:ge,className:Be.avatar,style:je.avatar}),X]})]})},ee=E.memo(S),Y=e(13769),u=e.n(Y),le=e(5574),Z=e.n(le),w=e(80322),J=e(64057),ae=e(25109),Ce=function(ue,Te){var T=(0,f.wv)(),K=T.getPrefixCls,$=(0,w.a)(),De=$.isAtBottom,Be=$.scrollToBottom;E.useImperativeHandle(Te,function(){return{scrollToBottom:function(je){function Ge(Oe){return je.apply(this,arguments)}return Ge.toString=function(){return je.toString()},Ge}(function(je){je=je||{animation:"instant"},Be(je)})}});var Me=K("bubble-list-scroll-to-bottom");return(0,C.jsx)("div",{className:g()(Me,"".concat(Me,"-").concat(De?"hide":"show")),children:(0,C.jsx)(J.Z,{icon:(0,C.jsx)(ae.Z,{}),shape:"circle",onClick:function(){return Be({animation:"instant"})}})})},v=E.forwardRef(Ce),Se,k=(0,A.vJ)(Se||(Se=b()([`
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
`])),function(R){return R.theme.prefixCls},function(R){return R.theme.prefixCls},function(R){return R.theme.prefixCls},function(R){return R.theme.colorPrimaryBorder},function(R){return R.theme.colorPrimaryBg},function(R){return R.theme.colorPrimary}),ce=e(78234),V=["key"],Ae=function(ue,Te){var T,K,$=ue.items,De=$===void 0?[]:$,Be=ue.smooth,Me=Be===void 0?!0:Be,je=(0,E.useState)(!1),Ge=Z()(je,2),Oe=Ge[0],Ne=Ge[1],an=E.useRef(),He=(0,f.wv)(),Re=He.getPrefixCls,un=Re("bubble-list");E.useImperativeHandle(Te,function(){return{scrollToBottom:function(){an.current.scrollToBottom()}}}),(0,ce.Z)(function(){Ne(!0)});var r=Oe&&Me?"smooth":"instant";return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(k,{}),(0,C.jsxs)(w.h,{id:ue.id,className:g()("".concat(un,"-wrapper"),(T=ue.classNames)===null||T===void 0?void 0:T.wrapper),resize:r,initial:"instant",style:ue.style,children:[(0,C.jsx)(w.h.Content,{className:g()("".concat(un),(K=ue.classNames)===null||K===void 0?void 0:K.list),children:ue.children?ue.children:De.map(function(Ee,ye){var _e=Ee.key,ge=u()(Ee,V),Xe=ye===De.length-1;return(0,E.createElement)(ee,h()(h()({},ge),{},{isLast:Xe,key:ge.id||_e}))})}),(0,C.jsx)(v,{ref:an})]})]})},z=E.forwardRef(Ae),Pe=z,Le=e(67369),ze=e(10146);ee.List=Pe,ee.Spin=t,ee.Footer=Le.ZP,ee.Interrupted=ze.Z;var ke=ee},76289:function(Ye,W,e){"use strict";e.d(W,{TQ:function(){return C},vi:function(){return _}});var H=e(97857),h=e.n(H),O=e(13769),g=e.n(O),E=e(5574),j=e.n(E),b=e(67294),A=e(79785),N=e(59214),d=e(85893),f=["children"];function _(t){var x=(0,A.Z)([]),I=j()(x,3),s=I[0],n=I[1],P=I[2],l=(0,A.Z)("0"),S=j()(l,3),ee=S[0],Y=S[1],u=S[2],le=(0,A.Z)(0),Z=j()(le,3),w=Z[0],J=Z[1],ae=Z[2],Ce=(0,A.Z)([]),v=j()(Ce,3),Se=v[0],k=v[1],ce=v[2],V=(0,A.Z)(!1),Ae=j()(V,3),z=Ae[0],Pe=Ae[1],Le=Ae[2],ze=(0,A.Z)(!1),ke=j()(ze,3),R=ke[0],ue=ke[1],Te=ke[2],T=(0,A.Z)(!0),K=j()(T,3),$=K[0],De=K[1],Be=K[2],Me=t.children,je=g()(t,f),Ge=h()({sessionList:s,setSessionList:n,getSessionList:P,currentSessionKey:ee,setCurrentSessionKey:Y,getCurrentSessionKey:u,messages:Se,setMessages:k,getMessages:ce,loading:z,setLoading:Pe,getLoading:Le,disabled:R,setDisabled:ue,getDisabled:Te,sessionListShow:$,setSessionListShow:De,getSessionListShow:Be,currentRegenerateIndex:w,setCurrentRegenerateIndex:J,getCurrentRegenerateIndex:ae},je);return(0,d.jsx)(y.Provider,{value:Ge,children:Me})}var y=(0,N.kr)(void 0);function C(t){try{var x=(0,N.Sz)(y,t);return x}catch(I){return{}}}},37254:function(Ye,W,e){"use strict";e.d(W,{G:function(){return h}});var H=e(76289);function h(){var O=(0,H.TQ)(function(d){return{loading:d.loading,getLoading:d.getLoading,disabled:d.disabled,getDisabled:d.getDisabled,setLoading:d.setLoading,setDisabled:d.setDisabled}}),g=O.loading,E=O.disabled,j=O.setLoading,b=O.setDisabled,A=O.getLoading,N=O.getDisabled;return{loading:g,disabled:E,setLoading:j,setDisabled:b,getLoading:A,getDisabled:N}}},4421:function(Ye,W,e){"use strict";e.d(W,{y:function(){return b}});var H=e(19632),h=e.n(H),O=e(97857),g=e.n(O),E=e(67294),j=e(76289);function b(){var A=(0,j.TQ)(function(x){return{messages:x.messages,setMessages:x.setMessages,getMessages:x.getMessages}}),N=A.messages,d=A.setMessages,f=A.getMessages,_=E.useCallback(function(){var x,I=((x=arguments.length<=0?void 0:arguments[0])===null||x===void 0?void 0:x.id)||(arguments.length<=0?void 0:arguments[0]),s=(arguments.length<=1?void 0:arguments[1])||(arguments.length<=0?void 0:arguments[0]);d==null||d(function(n){var P=n.findIndex(function(S){return S.id===I});if(P>-1){var l=g()(g()({},n[P]),s);return[].concat(h()(n.slice(0,P)),[l],h()(n.slice(P+1)))}else return[].concat(h()(n),[s])})},[]),y=E.useCallback(function(x){d(function(I){return I.filter(function(s){return s.id!==x.id})})},[]),C=E.useCallback(function(){d([])},[]),t=E.useCallback(function(x){return f().find(function(I){return I.id===x})},[]);return{messages:N,getMessage:t,setMessages:d,getMessages:f,updateMessage:_,removeMessage:y,removeAllMessages:C}}},61316:function(Ye,W,e){"use strict";e.d(W,{x:function(){return N}});var H=e(97857),h=e.n(H),O=e(19632),g=e.n(O),E=e(67294),j=e(76289),b=e(88773),A=e(73935);function N(){var d=(0,j.TQ)(function(w){return{getCurrentSessionKey:w.getCurrentSessionKey,currentRegenerateIndex:w.currentRegenerateIndex,setCurrentRegenerateIndex:w.setCurrentRegenerateIndex,getCurrentRegenerateIndex:w.getCurrentRegenerateIndex,sessionListShow:w.sessionListShow,setSessionListShow:w.setSessionListShow,sessionList:w.sessionList,setSessionList:w.setSessionList,currentSessionKey:w.currentSessionKey,setCurrentSessionKey:w.setCurrentSessionKey,getSessionList:w.getSessionList}}),f=d.getCurrentSessionKey,_=d.sessionList,y=d.setSessionList,C=d.currentSessionKey,t=d.setCurrentSessionKey,x=d.sessionListShow,I=d.setSessionListShow,s=d.currentRegenerateIndex,n=d.setCurrentRegenerateIndex,P=d.getCurrentRegenerateIndex,l=d.getSessionList,S=E.useCallback(function(){var w=(0,b.Z)(),J={label:Date.now().toString(),key:w,messages:[[]]};return A.flushSync(function(){y(function(ae){var Ce=[].concat(g()(ae),[J]);return Ce}),t(w)}),w},[]),ee=E.useCallback(function(w){y(function(J){var ae=J.filter(function(Ce){return Ce.key!==w});return ae})},[]),Y=E.useCallback(function(w){var J=f(),ae=P();y(function(Ce){return Ce.map(function(v){return v.key===J?(v.messages[ae]=w,h()({},v)):v})})},[]),u=E.useCallback(function(w,J){var ae;return(ae=l().find(function(Ce){return Ce.key===w}))===null||ae===void 0?void 0:ae.messages[J]},[]),le=E.useCallback(function(){return{sessionList:l(),currentSessionKey:f(),currentRegenerateIndex:P()}},[]),Z=E.useCallback(function(w){var J=w.sessionList,ae=w.currentSessionKey,Ce=w.currentRegenerateIndex;y(J),t(ae),n(Ce)},[]);return{currentRegenerateIndex:s,setCurrentRegenerateIndex:n,getCurrentRegenerateIndex:P,sessionList:_,setSessionList:y,getSessionList:l,currentSessionKey:C,setCurrentSessionKey:t,sessionListShow:x,setSessionListShow:I,createSession:S,deleteSession:ee,updateSessionMessages:Y,getMessagesBySession:u,getSession:le,updateSession:Z}}},29041:function(Ye,W,e){"use strict";e.d(W,{ZP:function(){return ve}});var H=e(97857),h=e.n(H),O=e(13769),g=e.n(O),E=e(5574),j=e.n(E),b=e(67294),A=e(93967),N=e.n(A),d=e(56044),f=e(85265),_=e(17909),y=e(76289),C=e(68400),t=e.n(C),x=e(9053),I,s=(0,x.vJ)(I||(I=t()([`

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
`])),function(M){return M.theme.prefixCls},function(M){return M.theme.fontFamily},function(M){return M.theme.colorBgBase},function(M){return M.theme.colorBgBase},function(M){return M.theme.colorBgBase},function(M){return M.theme.colorFillTertiary}),n=e(85893);function P(M){var ie=(0,y.TQ)(function(te){return{sessionListShow:te.sessionListShow,setSessionListShow:te.setSessionListShow}}),B=ie.sessionListShow,q=ie.setSessionListShow,Q=(0,d.wv)(),i=Q.getPrefixCls,F=i("chat-anywhere-layout"),D=S();return(0,b.useEffect)(function(){q(!D)},[D]),M.left?D?(0,n.jsx)(f.Z,{width:"80vw",styles:{body:{padding:0}},open:B,onClose:function(){q(!1)},title:null,closable:!1,placement:"left",children:(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:M.left})}):(0,n.jsx)("div",{className:N()("".concat(F,"-left"),B?"":"".concat(F,"-left-hide")),children:M.left}):null}function l(M){var ie=(0,d.wv)(),B=ie.getPrefixCls,q=B("chat-anywhere-layout"),Q=(0,y.TQ)(function(i){return i.uiConfig});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{}),(0,n.jsx)("div",{className:q,children:(0,n.jsxs)("div",{className:"".concat(q,"-main"),children:[(0,n.jsx)(P,h()({},M)),(0,n.jsxs)("div",{className:"".concat(q,"-right"),style:{background:Q==null?void 0:Q.background},children:[M.top,M.right]})]})})]})}var S=function(){var ie=(0,_.Z)(),B=(0,y.TQ)(function(q){return q.uiConfig});return!ie.md||(B==null?void 0:B.narrowScreen)},ee=e(9368),Y=e(64057),u=e(21403),le=e(61316),Z=e(4421),w,J=(0,x.vJ)(w||(w=t()([`
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

`])),function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls}),ae=e(50287),Ce=e(67392),v=e(13660),Se=e(12624);function k(){var M=(0,d.wv)(),ie=M.getPrefixCls,B=ie("chat-anywhere-session-list"),q=(0,y.TQ)(function(Q){return Q.sessionListShow});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(J,{}),(0,n.jsxs)("div",{className:N()("".concat(B),q?"":"".concat(B,"-hide")),children:[(0,n.jsx)(V,{}),(0,n.jsx)(ce,{})]})]})}function ce(){var M=(0,d.wv)(),ie=M.getPrefixCls,B=ie("chat-anywhere-session-list"),q=(0,le.x)(),Q=q.currentSessionKey,i=q.setCurrentSessionKey,F=q.currentRegenerateIndex,D=q.sessionList,te=q.getMessagesBySession,he=q.setSessionListShow,Ze=(0,Z.y)(),me=Ze.setMessages,on=(0,y.TQ)(function(pe){return pe.getLoading}),$e=(0,y.TQ)(function(pe){return pe.onSessionKeyChange}),Ve=S();return(0,b.useEffect)(function(){var pe=te(Q,F);me(pe)},[Q,F]),(0,n.jsx)("div",{className:"".concat(B,"-session"),children:(0,n.jsx)(ee.Z,{menu:[{key:"delete",icon:(0,n.jsx)(ae.Z,{}),danger:!0,onClick:function(Je){}}],activeKey:Q,items:D,onActiveChange:function(Je){on()||(Ve&&he(!1),requestIdleCallback(function(){i(Je),$e(Je)}))}})})}function V(){var M=(0,d.wv)(),ie=M.getPrefixCls,B=ie("chat-anywhere-session-list"),q=(0,le.x)(),Q=q.currentSessionKey,i=q.setCurrentSessionKey,F=q.deleteSession,D=q.createSession,te=q.sessionList,he=q.sessionListShow,Ze=q.setSessionListShow,me=(0,y.TQ)(function($e){return $e.uiConfig}),on=S();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(B,"-logo"),children:[me==null?void 0:me.logo,(0,n.jsx)(Y.Z,{bordered:!1,onClick:function(){return Ze(!he)},icon:he?(0,n.jsx)(Ce.Z,{}):(0,n.jsx)(v.Z,{})})]}),(0,n.jsx)("div",{className:"".concat(B,"-adder"),children:(0,n.jsx)(u.Z,{type:"primary",block:!0,icon:(0,n.jsx)(Se.Z,{}),onClick:function(){on&&Ze(!1),D()},children:"New Session"})})]})}var Ae=e(9783),z=e.n(Ae),Pe=e(9146),Le=e(19632),ze=e.n(Le),ke=e(52677),R=e.n(ke),ue=e(15009),Te=e.n(ue),T=e(99289),K=e.n(T),$=e(41154),De=e(66672),Be=e(36417),Me=e(37254),je,Ge=(0,x.vJ)(je||(je=t()([`
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
`])),function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls}),Oe=e(86578),Ne=e(7654),an=e(92053),He=e(86250),Re=["trigger"];function un(M){var ie=M.uploadPropsList,B=(0,d.wv)(),q=B.getPrefixCls,Q=q("chat-anywhere-sender"),i=(0,b.useState)(!1),F=j()(i,2),D=F[0],te=F[1],he=(0,b.useRef)([]),Ze=(0,b.useMemo)(function(){return ie.map(function(on,$e){return(0,n.jsx)("div",{onClick:function(){var pe;(pe=he.current[$e])===null||pe===void 0||pe.click(),te(!1)},children:on.trigger},$e)})},[ie]),me=(0,b.useMemo)(function(){return ie.map(function(on,$e){var Ve=on.trigger,pe=g()(on,Re);return(0,n.jsx)($.Z,h()(h()({},pe),{},{children:(0,n.jsx)("div",{ref:function(gn){return he.current[$e]=gn}})}),$e)})},[ie]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ne.Z,{placement:"bottomLeft",open:D,onOpenChange:te,content:(0,n.jsx)(He.Z,{vertical:!0,children:Ze}),trigger:"click",styles:{body:{padding:4}},children:(0,n.jsx)(Y.Z,{icon:(0,n.jsx)(an.Z,{}),bordered:!1})}),(0,n.jsx)("div",{className:"".concat(Q,"-upload-hidden-nodes"),children:me})]})}var r=(0,b.forwardRef)(function(M,ie){var B=b.useState(""),q=j()(B,2),Q=q[0],i=q[1],F=(0,Me.G)(),D=(0,y.TQ)(function(tn){return tn.onUpload.map(function(Ke){return h()(h()({},Ke),{},{disabled:Ke.disabled||F.disabled})})}),te=new Array((D==null?void 0:D.length)||0).fill([]),he=(0,b.useState)(!1),Ze=j()(he,2),me=Ze[0],on=Ze[1],$e=b.useState(te),Ve=j()($e,2),pe=Ve[0],Je=Ve[1],gn=(0,b.useRef)(te);(0,b.useEffect)(function(){Je(te)},[te.length]),(0,b.useEffect)(function(){gn.current=pe},[pe]);var xn=(0,y.TQ)(function(tn){return tn.uiConfig}),Ln=(0,d.wv)(),Tn=Ln.getPrefixCls,bn=Tn("chat-anywhere-sender"),jn=(0,y.TQ)(function(tn){return tn.onStop}),nn=(0,y.TQ)(function(tn){var Ke={beforeUI:void 0,afterUI:void 0,morePrefixActions:void 0,maxLength:void 0,zoomable:!0,beforeSubmit:function(){return Promise.resolve(!0)},header:[],enableFocusExpand:!1,variant:"default",hide:!1};return h()(h()({},Ke),tn.onInput)});if(b.useImperativeHandle(ie,function(){return{setInputContent:function(Ke,vn){i(Ke),Je(vn||[[]])},getAttachedFiles:function(){return gn.current}}},[]),(0,b.useEffect)(function(){F.setDisabled(nn.disabled)},[nn.disabled]),nn.hide)return null;var sn=function(){var tn=K()(Te()().mark(function Ke(vn,fn){return Te()().wrap(function(yn){for(;;)switch(yn.prev=yn.next){case 0:Je(function(On){return On.map(function(Yn,In){return In===vn?fn:Yn})});case 1:case"end":return yn.stop()}},Ke)}));return function(vn,fn){return tn.apply(this,arguments)}}(),hn=(0,b.useMemo)(function(){if(nn.variant==="aigc"||!(D!=null&&D.length))return[];var tn=D.map(function(Ke,vn){var fn;return Ke.trigger?fn=Ke.trigger:(Ke.title||Ke.description)&&D.length>1?fn=(0,n.jsxs)(u.Z,{type:"text",icon:Ke.icon,children:[Ke.title&&(0,n.jsx)("span",{children:Ke.title}),Ke.description&&(0,n.jsx)("span",{style:{fontSize:"0.8em",opacity:.8},children:Ke.description})]}):fn=(0,n.jsx)(Y.Z,{icon:Ke.icon,bordered:!1}),h()(h()({},Ke),{},{fileList:pe[vn],key:vn,onChange:function(yn){Ke.beforeUpload&&yn.file.status&&sn(vn,yn.fileList),Ke.beforeUpload||sn(vn,yn.fileList)},showUploadList:!1,trigger:fn})});return tn.length===1?(0,n.jsx)($.Z,h()(h()({},tn[0]),{},{children:tn[0].trigger})):(0,n.jsx)(un,{uploadPropsList:tn})},[nn.variant,D,pe]),Cn=(0,n.jsx)(Oe.Z.SenderHeader,{onUpload:D,attachedFiles:pe,onFileChange:sn}),pn=(0,n.jsx)(De.Z.Header,{closable:!1,open:pe==null?void 0:pe.some(function(tn){return tn.length}),children:pe.map(function(tn,Ke){return tn.length?(0,n.jsx)(Be.Z,{items:tn,onChange:function(fn){return sn(Ke,fn.fileList)}},Ke):null})}),Rn=nn.variant==="aigc"?Cn:pn,Pn=pe.map(function(tn){return tn.filter(function(Ke){return Ke.status==="done"})}),kn=pe.some(function(tn){return tn.some(function(Ke){return Ke.status==="uploading"})}),Vn=function(Ke){if(!(D!=null&&D.length))return;var vn=Ke.type||"",fn=Ke.name||"",qn=function(Kn){return Kn?Kn.split(",").some(function(wn){var Dn=wn.trim();if(!Dn)return!1;if(Dn.startsWith("."))return fn.toLowerCase().endsWith(Dn.toLowerCase());if(Dn.includes("*")){if(Dn==="*/*")return!0;var Wn=Dn.split("/"),Hn=j()(Wn,1),An=Hn[0],mn=vn.split("/"),_n=j()(mn,1),zn=_n[0];return An===zn}return vn===Dn}):!0},yn=D.findIndex(function(Sn){return qn(Sn.accept)});if(yn===-1)return;var On=D[yn],Yn=pe[yn]||[];if(On.maxCount&&Yn.length>=On.maxCount||!On.multiple&&Yn.length>0)return;if(On.beforeUpload){var In=On.beforeUpload(Ke,[Ke]);if(In===!1||In===$.Z.LIST_IGNORE)return;if(In instanceof Promise){In.then(function(Sn){if(!(Sn===!1||Sn===$.Z.LIST_IGNORE)){var Kn=Sn&&R()(Sn)==="object"?Sn:Ke;Fn(Kn)}}).catch(function(Sn){console.error("beforeUpload promise rejected:",Sn)});return}if(In&&R()(In)==="object"){Fn(In);return}}Fn(Ke);function Fn(Sn){var Kn=function(){var mn=fn.match(/\.([^.]+)$/);if(mn)return mn[1].toLowerCase();var _n=vn.match(/\/([^/+]+)/);return _n?_n[1].toLowerCase():"bin"},wn=Date.now(),Dn={uid:"paste_".concat(wn,"_").concat(Math.random().toString(36).slice(2,11)),name:fn||"pasted-".concat(wn,".").concat(Kn()),size:Sn.size,type:vn,status:"uploading",percent:0,originFileObj:Sn},Wn=function(mn){Je(function(_n){var zn=ze()(_n);return zn[yn]=(zn[yn]||[]).map(function(et){return et.uid===Dn.uid?h()(h()({},et),mn):et}),zn})};if(Je(function(An){var mn=ze()(An),_n=mn[yn]||[];if(!On.multiple)mn[yn]=[Dn];else{if(On.maxCount&&_n.length>=On.maxCount)return An;mn[yn]=[].concat(ze()(_n),[Dn])}return mn}),vn&&vn.startsWith("image/")){var Hn=new FileReader;Hn.onload=function(An){var mn,_n=(mn=An.target)===null||mn===void 0?void 0:mn.result;typeof _n=="string"&&Wn({thumbUrl:_n,url:_n})},Hn.readAsDataURL(Sn)}On.customRequest({file:Sn,onSuccess:function(mn){Wn({status:"done",response:mn,percent:100})},onError:function(mn){Wn({status:"error",error:mn})},onProgress:function(mn){Wn({percent:mn.percent})}},{defaultRequest:function(){}})}},nt=(0,b.useMemo)(function(){var tn;return(tn=D==null?void 0:D.some(function(Ke,vn){if(Ke.required){var fn=pe[vn]||[];return fn.length===0}return!1}))!==null&&tn!==void 0?tn:!1},[D,pe]),Xn=nt;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ge,{}),(0,n.jsxs)("div",{className:N()("".concat(bn,"-wrapper"),z()(z()({},"".concat(bn,"-wrapper-focus"),me&&nn.enableFocusExpand),"".concat(bn,"-wrapper-blur"),!me&&nn.enableFocusExpand)),children:[xn.quickInput&&(0,n.jsx)("div",{className:N()("".concat(bn,"-wrapper-header")),children:xn.quickInput}),nn.beforeUI,(0,n.jsx)(De.Z,{placeholder:nn.placeholder,enableFocusExpand:nn.enableFocusExpand,value:Q,onChange:i,maxLength:nn.maxLength,disabled:kn||F.disabled,sendDisabled:Xn,scalable:nn==null?void 0:nn.zoomable,header:Rn,prefix:(0,n.jsxs)(n.Fragment,{children:[hn,nn==null?void 0:nn.morePrefixActions]}),onSubmit:K()(Te()().mark(function tn(){var Ke;return Te()().wrap(function(fn){for(;;)switch(fn.prev=fn.next){case 0:return fn.next=2,(nn.beforeSubmit||function(){return Promise.resolve(!0)})();case 2:if(Ke=fn.sent,Ke){fn.next=5;break}return fn.abrupt("return");case 5:nn.onSubmit({query:Q,fileList:Pn}),i(""),Je(te);case 8:case"end":return fn.stop()}},tn)})),onCancel:function(){jn==null||jn(),F.setLoading(!1)},onFocus:function(){return on(!0)},onBlur:function(){return on(!1)},onPasteFile:Vn,loading:F.loading}),nn.afterUI]})]})}),Ee=e(69637),ye=e(10325),_e,ge=(0,x.vJ)(_e||(_e=t()([`
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


`])),function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls}),Xe=(0,b.forwardRef)(function(M,ie){var B=(0,y.TQ)(function($e){return $e.messages}),q=(0,d.wv)(),Q=q.getPrefixCls,i=Q("chat-anywhere"),F=(0,y.TQ)(function($e){return $e.uiConfig}),D=(0,b.useState)(!1),te=j()(D,2),he=te[0],Ze=te[1];(0,Ee.Z)(function(){Ze(!0)},300);var me=N()("".concat(i,"-chat"),z()({},"".concat(i,"-chat-hide"),!he)),on=!(B!=null&&B.length);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ge,{}),(0,n.jsxs)("div",{className:me,children:[(0,n.jsx)(Pe.Z.List,{style:{height:0,flex:on?0:1},ref:ie.chatRef,items:B}),on?(0,n.jsx)("div",{className:"".concat(me,"-welcome"),children:F==null?void 0:F.welcome}):null,(0,n.jsx)("div",{className:"".concat(me,"-sender"),style:F!=null&&F.disclaimer?{marginBottom:16}:{},children:(0,n.jsx)(r,{ref:ie.inputRef})}),(F==null?void 0:F.disclaimer)&&(0,n.jsx)(ye.Z,{style:{position:"absolute",bottom:0,width:"100%"},desc:F==null?void 0:F.disclaimer})]})]})}),We,en=(0,x.vJ)(We||(We=t()([`
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

`])),function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls},function(M){return M.theme.prefixCls});function o(){var M=(0,d.wv)(),ie=M.getPrefixCls,B=ie("chat-anywhere-header"),q=(0,y.TQ)(function(te){return te.uiConfig}),Q=(0,le.x)(),i=Q.sessionListShow,F=Q.setSessionListShow,D=S();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(en,{}),(0,n.jsxs)("div",{className:B,children:[D&&(0,n.jsx)(Y.Z,{style:{marginLeft:12},bordered:!1,onClick:function(){return F(!i)},icon:i?(0,n.jsx)(Ce.Z,{}):(0,n.jsx)(v.Z,{})}),q.header]})]})}var G=e(83962),X=b.forwardRef(function(ie,B){var q=(0,Z.y)(),Q=(0,Me.G)(),i=(0,le.x)();return b.useImperativeHandle(B,function(){return h()(h()(h()({},q),Q),i)}),null}),fe=["cardConfig"],ve=(0,b.forwardRef)(function(M,ie){var B,q=(0,b.useState)(0),Q=j()(q,2),i=Q[0],F=Q[1],D=M.cardConfig,te=g()(M,fe),he=(0,b.useRef)(null),Ze=(0,b.useRef)(null),me=(0,b.useRef)(null);return b.useImperativeHandle(ie,function(){return h()(h()(h()(h()({},he.current),Ze.current),me.current),{},{reload:function(){F(function($e){return $e+1})}})}),(0,b.createElement)(y.vi,h()(h()({},te),{},{key:i}),(0,n.jsxs)(G.xy,{cardConfig:D,children:[(0,n.jsx)(l,{top:(B=te.uiConfig)!==null&&B!==void 0&&B.header?(0,n.jsx)(o,{}):null,left:te.onSessionKeyChange?(0,n.jsx)(k,{}):null,right:(0,n.jsx)(Xe,{ref:{chatRef:he,inputRef:Ze}})}),(0,n.jsx)(X,{ref:me})]}))})},9368:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return Te}});var H=e(97857),h=e.n(H),O=e(9783),g=e.n(O),E=e(5574),j=e.n(E),b=e(13769),A=e.n(b),N=e(93967),d=e.n(N),f=e(67294),_=e(21317),y=e(85893),C=f.createContext(null),t=function(K){var $=K.children,De=f.useContext(C),Be=De.prefixCls;return(0,y.jsx)("div",{className:d()("".concat(Be,"-group-title")),children:$&&(0,y.jsx)(_.default.Text,{children:$})})},x=t,I=e(30339),s=e(54604),n=e(7654),P=e(64057),l=e(21403),S=["prefixCls","info","className","direction","onClick","active","menu"],ee=["key"],Y={};function u(T){var K=(0,f.useState)(Y[T]),$=j()(K,2),De=$[0],Be=$[1];return[De,function(Me){for(var je in Y)Y[je]=!1;Y[T]=Me,Be(Me)}]}var le=function(K){var $,De=u(K.info.key),Be=j()(De,2),Me=Be[0],je=Be[1],Ge=(0,f.useState)(!1),Oe=j()(Ge,2),Ne=Oe[0],an=Oe[1],He=K.prefixCls,Re=K.info,un=K.className,r=K.direction,Ee=K.onClick,ye=K.active,_e=K.menu,ge=A()(K,S),Xe=(0,I.Z)(ge,{aria:!0,data:!0,attr:!0}),We=Re.disabled,en=d()(un,"".concat(He,"-item"),g()({},"".concat(He,"-item-active"),ye&&!We),g()({},"".concat(He,"-item-disabled"),We),g()({},"".concat(He,"-item-timeline"),Re.timeline)),o=function(){!We&&Ee&&Ee(Re)};return(0,y.jsxs)("li",h()(h()({},Xe),{},{className:en,onClick:o,children:[(0,y.jsxs)("div",{className:"".concat(He,"-content"),children:[Re.icon&&(0,y.jsx)("div",{className:"".concat(He,"-icon"),children:Re.icon}),Re.timeline&&(0,y.jsx)("div",{className:"".concat(He,"-timeline")}),(0,y.jsx)(Z,{editable:Me,setEditable:je,prefixCls:He,info:Re,onEdit:_e==null||($=_e.find(function(G){return G.key==="edit"}))===null||$===void 0?void 0:$.onEdit}),_e&&!We&&(0,y.jsx)(n.Z,{styles:{body:{padding:4}},trigger:["click"],open:Ne,onOpenChange:an,content:(0,y.jsx)("div",{className:"".concat(He,"-menu-popover"),children:_e.map(function(G){var X=G.key,fe=A()(G,ee),ve=h()(h()({},fe),{},{onClick:function(ie){if(X==="edit")je(!0);else{var B;(B=fe.onClick)===null||B===void 0||B.call(fe,Re)}an(!1)}});return(0,y.jsx)(J,h()(h()({},ve),{},{info:Re}),X)})}),placement:"bottom",children:(0,y.jsx)(P.Z,{bordered:!1,icon:(0,y.jsx)(s.Z,{}),disabled:We,className:"".concat(He,"-menu-icon"),onClick:function(X){return X.stopPropagation()}})})]}),Re.desc&&(0,y.jsx)("div",{className:"".concat(He,"-desc"),style:Re.timeline?{marginLeft:16}:{},children:Re.desc})]}))};function Z(T){var K=T.editable,$=T.prefixCls,De=T.info,Be=T.setEditable,Me=T.onEdit,je=(0,f.useState)(De.label),Ge=j()(je,2),Oe=Ge[0],Ne=Ge[1];return(0,f.useEffect)(function(){Ne(De.label)},[De.label]),K?(0,y.jsx)(w,{prefixCls:$,value:Oe,onBlur:function(He){var Re;if(He===Oe)return Be(!1);(Re=Me(He,De))===null||Re===void 0||Re.then(function(){Ne(He)}).catch(function(){Ne(Oe)}).finally(function(){Be(!1)})},setEditable:Be}):(0,y.jsx)("div",{className:"".concat($,"-label"),children:Oe})}function w(T){var K=T.prefixCls,$=T.value,De=T.onBlur,Be=T.setEditable,Me=(0,f.useState)($),je=j()(Me,2),Ge=je[0],Oe=je[1],Ne=(0,f.useRef)();return(0,f.useEffect)(function(){Ne.current.focus()},[]),(0,f.useEffect)(function(){Oe($)},[$]),(0,y.jsx)("input",{ref:Ne,className:"".concat(K,"-label-edit"),value:Ge,onChange:function(He){return Oe(He.target.value)},onBlur:function(){return De(Ge)}})}function J(T){var K=T.label,$=T.icon,De=T.danger,Be=T.info,Me=T.disabled,je=function(Oe){var Ne;Me||(Oe.stopPropagation(),(Ne=T.onClick)===null||Ne===void 0||Ne.call(T,Be))};return $&&K?(0,y.jsx)(l.Z,{disabled:Me,icon:$,danger:De,type:"text",onClick:je,children:K}):$?(0,y.jsx)(P.Z,{disabled:Me,icon:$,danger:De,bordered:!1,onClick:je}):K?(0,y.jsx)(l.Z,{disabled:Me,danger:De,type:"text",onClick:je,children:K}):null}var ae=le,Ce=e(60869),v=e(56044),Se=e(52677),k=e.n(Se),ce="__ungrouped",V=function(K){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],De=f.useMemo(function(){if(!K)return[!1,void 0,void 0];var Oe={sort:void 0,title:void 0};return k()(K)==="object"&&(Oe=h()(h()({},Oe),K)),[!0,Oe.sort,Oe.title]},[K]),Be=j()(De,3),Me=Be[0],je=Be[1],Ge=Be[2];return f.useMemo(function(){if(!Me){var Oe=[{name:ce,data:$,title:void 0}];return[Oe,Me]}var Ne=$.reduce(function(Re,un){var r=un.group||ce;return Re[r]||(Re[r]=[]),Re[r].push(un),Re},{}),an=je?Object.keys(Ne).sort(je):Object.keys(Ne),He=an.map(function(Re){return{name:Re===ce?void 0:Re,title:Ge,data:Ne[Re]}});return[He,Me]},[$,K])},Ae=V,z=e(68400),Pe=e.n(z),Le=e(9053),ze,ke=(0,Le.vJ)(ze||(ze=Pe()([`
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
}`])),function(T){return T.theme.prefixCls},function(T){return T.theme.paddingXXS},function(T){return T.theme.prefixCls},function(T){return T.theme.paddingXL},function(T){return T.theme.prefixCls},function(T){return T.theme.colorTextSecondary},function(T){return T.theme.colorBgBase},function(T){return T.theme.colorBorder},function(T){return T.theme.colorTextSecondary},function(T){return T.theme.borderRadiusLG},function(T){return T.theme.colorBorder},function(T){return T.theme.colorFillTertiary},function(T){return T.theme.colorFillTertiary},function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls},function(T){return T.theme.colorText},function(T){return T.theme.prefixCls},function(T){return T.theme.colorTextDisabled},function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls},function(T){return T.theme.colorFillTertiary},function(T){return T.theme.colorText},function(T){return T.theme.colorText},function(T){return T.theme.fontFamily},function(T){return T.theme.fontSizeXL},function(T){return T.theme.controlHeightLG},function(T){return T.theme.controlHeightLG},function(T){return T.theme.paddingXS}),R=["prefixCls","rootClassName","items","activeKey","defaultActiveKey","onActiveChange","menu","styles","classNames","groupable","className","style"],ue=function(K){var $=K.prefixCls,De=K.rootClassName,Be=K.items,Me=K.activeKey,je=K.defaultActiveKey,Ge=K.onActiveChange,Oe=K.menu,Ne=K.styles,an=Ne===void 0?{}:Ne,He=K.classNames,Re=He===void 0?{}:He,un=K.groupable,r=K.className,Ee=K.style,ye=A()(K,R),_e=(0,I.Z)(ye,{attr:!0,aria:!0,data:!0}),ge=(0,Ce.Z)(je,{value:Me}),Xe=j()(ge,2),We=Xe[0],en=Xe[1],o=Ae(un,Be),G=j()(o,2),X=G[0],fe=G[1],ve=(0,v.wv)(),M=ve.direction,ie=ve.getPrefixCls,B=ie("conversations"),q=d()(B,r,De,g()({},"".concat(B,"-rtl"),M==="rtl")),Q=function(F){en(F.key),Ge&&Ge(F.key)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(ke,{}),(0,y.jsx)("ul",h()(h()({},_e),{},{style:Ee,className:q,children:X.map(function(i,F){var D=i.data.map(function(he,Ze){return(0,y.jsx)(ae,{info:he,prefixCls:B,direction:M,className:d()(Re.item),style:an.item,menu:Oe,active:We===he.key,onClick:Q},he.key||"key-".concat(Ze))});if(fe){var te;return(0,y.jsxs)("li",{children:[(0,y.jsx)(C.Provider,{value:{prefixCls:B},children:((te=i.title)===null||te===void 0?void 0:te.call(i,i.name,{components:{GroupTitle:x}}))||(0,y.jsx)(x,{children:i.name},i.name)}),(0,y.jsx)("ul",{className:"".concat(B,"-list"),children:D})]},i.name||"key-".concat(F))}return D})}))]})},Te=ue},24963:function(Ye,W,e){"use strict";e.r(W),e.d(W,{Audios:function(){return Se},DeepThink:function(){return g},DeepThinking:function(){return g},Files:function(){return C},Footer:function(){return le},FooterActions:function(){return u.p4},FooterCount:function(){return u.hw},Images:function(){return P},Interrupted:function(){return w},Text:function(){return Y},Videos:function(){return Ce}});var H=e(67294),h=e(14082),O=e(85893);function g(k){return(0,O.jsx)(h.Z,{defaultOpen:k.data.defaultOpen!==void 0?k.data.defaultOpen:!0,title:k.data.title,loading:k.data.loading,content:k.data.content,className:k.data.className,open:k.data.open,autoCloseOnFinish:k.data.autoCloseOnFinish,maxHeight:k.data.maxHeight})}var E=e(68400),j=e.n(E),b=e(23345),A=e(36417),N=e(9053),d=e(56044),f=e(6411),_,y=(0,N.vJ)(_||(_=j()([`
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
`])),function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls},function(k){return k.theme.borderRadius},function(k){return k.theme.colorWhite},function(k){return k.theme.motionDurationSlow},function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls});function C(k){var ce=(0,d.wv)(),V=ce.getPrefixCls,Ae=V("bubble-files");return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(y,{}),(0,O.jsx)(b.Z,{className:Ae,children:k.data.map(function(z,Pe){var Le={name:z.name||z.filename,size:z.size||z.bytes,url:z.url};return(0,O.jsxs)("div",{className:"".concat(Ae,"-file"),children:[(0,O.jsx)(A.Z.FileCard,{item:Le}),Le.url&&(0,O.jsx)("div",{className:"".concat(Ae,"-download"),onClick:function(){window.open(Le.url,"_blank")},children:(0,O.jsx)(f.Z,{})})]},Pe)})})]})}var t=e(16494),x=e(55839),I,s=(0,N.vJ)(I||(I=j()([`
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
`])),function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls});function n(k){var ce=(0,d.wv)(),V=ce.getPrefixCls,Ae=V("bubble-image");return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(s,{}),(0,O.jsx)("div",{className:"".concat(Ae),children:(0,O.jsx)(t.Z,{fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",src:k.url,width:56,height:56,preview:{transitionName:""}})})]})}function P(k){return(0,O.jsx)(x.ZP,{locale:{Image:{preview:""}},children:(0,O.jsx)(b.Z,{children:k.data.map(function(ce,V){return(0,O.jsx)(n,{url:ce.url},V)})})})}var l=e(97857),S=e.n(l),ee=e(66109);function Y(k){var ce=k.data.msgStatus==="generating";return(0,O.jsx)(ee.Z,S()(S()({cursor:ce},k.data),{},{typing:k.data.msgStatus==="generating"?k.data.typing:!1}))}var u=e(67369);function le(k){return(0,O.jsx)(u.ZP,S()({},k.data))}var Z=e(10146);function w(k){return(0,O.jsx)(Z.Z,S()({},k.data))}var J=e(51794),ae;function Ce(k){var ce=(0,d.wv)().getPrefixCls("bubble-video");return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(v,{}),(0,O.jsx)(b.Z,{children:k.data.map(function(V,Ae){return(0,O.jsx)(J.Z,{className:ce,src:V.src,poster:V.poster,controls:!0},Ae)})})]})}var v=(0,N.vJ)(ae||(ae=j()([`
.`,`-bubble-video {
  max-width: 256px;
  max-height: 144px;
  border-radius: 8px;
  border: 1px solid `,`;
  overflow: hidden;
}
`])),function(k){return k.theme.prefixCls},function(k){return k.theme.colorBorderSecondary});function Se(){return(0,O.jsx)("div",{children:"Audio"})}},55031:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return ee}});var H=e(56044),h=e(31382),O=e(55839),g=e(16494),E=e(33948),j=e(52253),b=e(56137),A=e(1948),N=e(61763),d=e(77900),f=e(40443),_=e(33119),y=e(4356),C=e(72816),t=e(77382),x=e(72167),I=e(74398),s=e(55094),n=e(61401),P=e(85893),l={Click:{name:"\u70B9\u51FB",icon:(0,P.jsx)(E.Z,{})},Swipe:{name:"\u6ED1\u52A8",icon:(0,P.jsx)(j.Z,{})},Type:{name:"\u8F93\u5165",icon:(0,P.jsx)(b.Z,{})},Back:{name:"\u8FD4\u56DE",icon:(0,P.jsx)(A.Z,{})},Home:{name:"\u4E3B\u9875",icon:(0,P.jsx)(N.Z,{})},Done:{name:"\u5B8C\u6210",icon:(0,P.jsx)(d.Z,{})},Wait:{name:"\u7B49\u5F85",icon:(0,P.jsx)(f.Z,{spin:!0})},click:{name:"\u70B9\u51FB",icon:(0,P.jsx)(E.Z,{})},"right click":{name:"\u53F3\u952E\u70B9\u51FB",icon:(0,P.jsx)(E.Z,{})},"open app":{name:"\u6253\u5F00\u5E94\u7528",icon:(0,P.jsx)(_.Z,{})},computer_double_click:{name:"\u53CC\u51FB",icon:(0,P.jsx)(y.Z,{})},hotkey:{name:"\u5FEB\u6377\u952E",icon:(0,P.jsx)(C.Z,{})},presskey:{name:"\u6309\u952E",icon:(0,P.jsx)(t.Z,{})},scroll:{name:"\u6EDA\u52A8",icon:(0,P.jsx)(j.Z,{})},drag:{name:"\u62D6\u62FD",icon:(0,P.jsx)(x.Z,{})},type_with_clear_enter_pos:{name:"\u8F93\u5165\u5E76\u6E05\u9664",icon:(0,P.jsx)(b.Z,{})},triple_click:{name:"\u4E09\u51FB",icon:(0,P.jsx)(I.Z,{})},drag_end:{name:"\u62D6\u62FD\u7ED3\u675F",icon:(0,P.jsx)(x.Z,{})},type:{name:"\u8F93\u5165",icon:(0,P.jsx)(b.Z,{})},hscroll:{name:"\u6C34\u5E73\u6EDA\u52A8",icon:(0,P.jsx)(s.Z,{})},done:{name:"\u5B8C\u6210",icon:(0,P.jsx)(d.Z,{})},wait:{name:"\u7B49\u5F85",icon:(0,P.jsx)(f.Z,{spin:!0})},call_user:{name:"\u547C\u53EB\u7528\u6237",icon:(0,P.jsx)(n.Z,{})}},S=l;function ee(Y){var u,le,Z=(0,H.wv)(),w=Z.getPrefixCls,J=w("operate-card");return(0,P.jsxs)("div",{children:[(0,P.jsx)("div",{className:"".concat(J,"-device-action-time"),children:Y.time}),(0,P.jsx)(h.Z,{header:{className:"".concat(J,"-device-action"),icon:(0,P.jsx)("div",{className:"".concat(J,"-device-action-icon"),children:(u=S[Y.action])===null||u===void 0?void 0:u.icon}),title:(0,P.jsxs)("div",{className:"".concat(J,"-device-action-content"),children:[(0,P.jsxs)("div",{className:"".concat(J,"-device-action-description"),children:[(0,P.jsx)("span",{children:Y.actionName||((le=S[Y.action])===null||le===void 0?void 0:le.name)}),(0,P.jsx)("span",{children:Y.description})]}),(0,P.jsx)("div",{className:"".concat(J,"-device-action-image"),children:(0,P.jsx)(O.ZP,{locale:{Image:{preview:""}},children:(0,P.jsx)(g.Z,{src:Y.image,alt:Y.description,width:"100%",height:"100%"})})})]})}})]})}},10325:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return N}});var H=e(67294),h=e(68400),O=e.n(h),g=e(9053),E,j=(0,g.vJ)(E||(E=O()([`
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
`])),function(d){return d.theme.prefixCls},function(d){return d.theme.colorTextTertiary},function(d){return d.theme.prefixCls}),b=e(56044),A=e(85893);function N(d){var f=d.desc,_=f===void 0?"AI can also make mistakes, so please check carefully and use it with caution":f,y=(0,b.wv)(),C=y.getPrefixCls,t=C("disclaimer");return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(j,{}),(0,A.jsxs)("div",{className:t,style:d.style,children:[_,d.afterLink&&(0,A.jsx)("a",{className:"".concat(t,"-after-link"),href:d.afterLink.href,target:"_blank",children:d.afterLink.text})]})]})}},80115:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return h}});var H=e(85893);function h(){return(0,H.jsx)("iframe",{srcDoc:`<html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>`})}},2534:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return I}});var H=e(67294),h=e(68400),O=e.n(h),g=e(9053),E,j=(0,g.vJ)(E||(E=O()([`
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

`])),function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.colorText},function(s){return s.theme.colorSuccess},function(s){return s.theme.colorBgBase},function(s){return s.theme.prefixCls}),b=e(56044),A=e(55839),N=e(16494),d=e(89034),f=e(36374),_=e(85893);function y(){for(var s=arguments.length,n=new Array(s),P=0;P<s;P++)n[P]=arguments[P];return n.filter(Boolean).join(" ")}var C=function(n){var P=n.speed,l=P===void 0?1:P,S=n.backgroundColor,ee=S===void 0?"#b6a9f8":S,Y=n.colors,u=Y===void 0?["#c979ee","#ef788c","#eb7fc6","#6d67c8"]:Y,le=n.ringColors,Z=le===void 0?["white","blue","magenta","violet","lightyellow"]:le,w=n.className,J=w===void 0?"":w,ae=(0,H.useRef)(null);return(0,H.useEffect)(function(){if(CSS&&CSS.registerProperty)try{CSS.registerProperty({name:"--a",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--l",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--x",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--y",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--o",syntax:"<number>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--value",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--width-ratio",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--scale",syntax:"<number>",inherits:!0,initialValue:"0"})}catch(Ce){}},[]),(0,H.useEffect)(function(){var Ce=ae.current;if(Ce){var v=function(){var ce=Ce.getBoundingClientRect(),V=Math.min(ce.width,ce.height);Ce.style.setProperty("--actual-size","".concat(V,"px"))};v();var Se=new ResizeObserver(v);return Se.observe(Ce),function(){Se.disconnect()}}},[]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("style",{children:`
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
            `).concat(Z.join(", "),`
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
      `)}),(0,_.jsxs)("div",{ref:ae,className:y("fluid-background-container",J),children:[(0,_.jsxs)("div",{className:"fluid-inner",children:[(0,_.jsx)("div",{className:"c c4",style:{"--i":0}}),(0,_.jsx)("div",{className:"c c1",style:{"--i":1}}),(0,_.jsx)("div",{className:"c c2",style:{"--i":2}}),(0,_.jsx)("div",{className:"c c3",style:{"--i":3}}),(0,_.jsx)("div",{className:"rings"})]}),(0,_.jsx)("div",{className:"glass"})]})]})},t=C,x=function(n){var P=(0,b.wv)(),l=P.getPrefixCls,S=l("image-generator"),ee=n.block,Y=n.skeletonText,u=n.width,le=u===void 0?320:u,Z=n.height,w=Z===void 0?320:Z,J=n.src,ae=n.loadingText,Ce=ae===void 0?"Painting...":ae,v=n.doneText,Se=v===void 0?"Paint Completed":v,k=n.skeleton||(0,_.jsxs)("div",{className:"".concat(S,"-default-skeleton"),style:{width:"100%",height:"100%"},children:[(0,_.jsx)("div",{className:"".concat(S,"-default-skeleton-bg"),children:(0,_.jsx)(t,{})}),(0,_.jsxs)("div",{className:"".concat(S,"-default-skeleton-content"),children:[(0,_.jsx)("img",{className:"".concat(S,"-default-skeleton-icon"),src:"https://img.alicdn.com/imgextra/i2/O1CN01M1X8yM1MWUC7u3Go5_!!6000000001442-54-tps-72-72.apng"}),Y&&(0,_.jsx)("div",{className:"".concat(S,"-default-skeleton-text"),children:Y})]})]}),ce=!J,V=ee?{aspectRatio:"".concat(le,"/").concat(w)}:{width:le,height:w};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(j,{}),(0,_.jsxs)("div",{className:S,children:[(0,_.jsxs)("div",{className:"".concat(S,"-text"),children:[ce?(0,_.jsx)(f.Z,{}):(0,_.jsx)(d.Z,{className:"".concat(S,"-text-success")}),ce?(0,_.jsx)("span",{style:{paddingLeft:20},children:Ce}):Se]}),(0,_.jsx)("div",{className:"".concat(S,"-wrapper"),style:V,children:ce?k:(0,_.jsx)(A.ZP,{locale:{Image:{preview:""}},children:(0,_.jsx)(N.Z,{width:"100%",height:"100%",src:J})})})]})]})},I=x},66109:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return en}});var H=e(19632),h=e.n(H),O=e(97857),g=e.n(O),E=e(67294),j=e(13769),b=e.n(j),A=e(55729),N=e(68400),d=e.n(N),f=e(9053),_,y=(0,f.vJ)(_||(_=d()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.colorBorder},function(o){return o.theme.colorFillQuaternary},function(o){return o.theme.colorText},function(o){return o.theme.borderRadiusSM},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.borderRadiusSM},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.colorBgBase},function(o){return o.theme.prefixCls},function(o){return o.theme.colorFillSecondary},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.colorSuccess},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.colorFillQuaternary},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.colorTextSecondary},function(o){return o.theme.colorFillSecondary},function(o){return o.theme.motionEaseOut},function(o){return o.theme.colorWhite},function(o){return o.theme.colorPrimary});function C(o){var G=o.cursor,X=o.content,fe=o.animation,ve=(0,E.useMemo)(function(){return fe?"":G?G==="dot"?" :dot:":G==="underline"?" :underline:":" :dot:":""},[G,X]);return X+ve}var t=e(85893),x=["content","cursor","animation"];function I(o){var G=o.content,X=o.cursor,fe=o.animation,ve=b()(o,x),M=C({cursor:X,content:G,animation:fe}),ie=(0,E.useMemo)(function(){if(fe)return{hasNextChunk:fe&&X,enableAnimation:fe&&X}},[X,fe]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y,{}),(0,t.jsx)(A.Z,g()(g()({},ve),{},{content:M,streaming:ie}))]})}var s=e(5574),n=e.n(s),P=function(G){var X=G.content,fe=G.typing,ve=(0,E.useState)(0),M=n()(ve,2),ie=M[0],B=M[1],q=(0,E.useRef)();return(0,E.useEffect)(function(){return fe?q.current=setInterval(function(){B(function(Q){return Q+1})},typeof fe=="number"?fe:5):q.current&&clearInterval(q.current),function(){return clearInterval(q.current)}},[fe]),fe?X.slice(0,ie):X},l=P,S=e(56044),ee=e(93967),Y=e.n(ee),u=function(){return null},le=e(87427),Z=e(96643),w=e(97634),J=e(89698),ae=function(G){var X,fe=G.className,ve=G.children,M=(fe==null||(X=fe.match(/language-(\w+)/))===null||X===void 0?void 0:X[1])||"";return typeof ve!="string"?null:M==="mermaid"?(0,t.jsx)(le.Z,{header:(0,t.jsx)(Ce,{lang:"mermaid",content:ve}),children:ve}):(0,t.jsx)(Z.Z,{lang:M,header:(0,t.jsx)(Ce,{lang:M,content:ve}),children:ve})};function Ce(o){var G=o.lang,X=o.content,fe=(0,E.useState)(!1),ve=n()(fe,2),M=ve[0],ie=ve[1],B=(0,S.wv)(),q=B.getPrefixCls,Q=q("code-header");return(0,t.jsxs)("div",{className:Q,children:[(0,t.jsx)("div",{className:"".concat(Q,"-lang"),children:G}),M?(0,t.jsx)(w.Z,{className:"".concat(Q,"-copied")}):(0,t.jsx)(J.Z,{className:"".concat(Q,"-icon"),onClick:function(){navigator.clipboard.writeText(X),ie(!0),setTimeout(function(){ie(!1)},1e3)}})]})}var v=ae;function Se(o){return(0,t.jsx)("a",{href:o.src,target:"_blank",rel:"noopener noreferrer",children:o.src})}var k=e(55839),ce=e(16494),V=e(85576),Ae=e(36231),z=e(89102);function Pe(o){try{var G=o.src,X=new URL(G),fe=X.pathname,ve=fe.endsWith(".mp4"),M=fe.endsWith(".mp3")||fe.endsWith(".wav");return M?(0,t.jsx)("audio",g()(g()({src:o.src},o),{},{controls:!0})):ve?(0,t.jsx)(ze,g()({src:o.src},o)):(0,t.jsx)(Le,g()({src:o.src},o))}catch(ie){return null}}function Le(o){return(0,t.jsx)(k.ZP,{locale:{Image:{preview:""}},children:(0,t.jsx)(ce.Z,g()({src:o.src},o))})}function ze(o){var G=o.src,X=(0,E.useState)(!1),fe=n()(X,2),ve=fe[0],M=fe[1],ie=(0,S.wv)(),B=ie.getPrefixCls,q=B("markdown-video");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:q,children:(0,t.jsx)("div",{className:"".concat(q,"-poster"),onClick:function(){return M(!0)},children:(0,t.jsx)(Ae.Z,{className:"".concat(q,"-play")})})}),(0,t.jsx)(V.Z,{closeIcon:(0,t.jsx)("a",{children:(0,t.jsx)(z.Z,{style:{fontSize:20}})}),centered:!0,transitionName:"",footer:null,width:500,title:"",styles:{content:{padding:0}},open:ve,destroyOnHidden:!0,onCancel:function(){return M(!1)},children:(0,t.jsx)("video",{controls:!0,autoPlay:!0,style:{display:"block",width:"100%"},children:(0,t.jsx)("source",{src:G,type:"video/mp4"})})})]})}function ke(o){var G=(0,S.wv)().getPrefixCls("markdown");return(0,t.jsx)("div",{className:G,style:{fontSize:o.baseFontSize,lineHeight:o.baseLineHeight},children:o.content})}var R=e(79427),ue=e(55241),Te,T=(0,f.vJ)(Te||(Te=d()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.colorTextSecondary},function(o){return o.theme.colorFillSecondary},function(o){return o.theme.motionEaseOut},function(o){return o.theme.colorWhite},function(o){return o.theme.colorPrimary});function K(o){var G=(0,S.wv)(),X=G.getPrefixCls,fe=X("markdown-citation"),ve=o["data-text"],M=o["data-url"],ie=o["data-title"],B=o["data-content"],q=B||ie,Q=(0,t.jsx)("sup",{className:fe,children:ve});return q&&(Q=(0,t.jsx)(ue.Z,{title:ie,content:M?(0,t.jsx)("a",{href:M,rel:"noreferrer",target:"_blank",children:M}):B,children:Q})),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(T,{}),Q]})}function $(o){var G,X=((G=o.citationsData[o["data-text"]])===null||G===void 0?void 0:G.render)||K;return(0,t.jsx)(X,g()({},o))}var De=[],Be={};function Me(o){var G=o.citations,X=G===void 0?De:G,fe=o.citationsMap,ve=fe===void 0?Be:fe,M=(0,E.useMemo)(function(){var Q=g()({},ve);return X.forEach(function(i,F){var D=F+1;Q[D]=i}),[Q,function(){return function(F){return(0,t.jsx)($,g()(g()({},F),{},{citationsData:Q}))}}()]},[X,ve]),ie=n()(M,2),B=ie[0],q=ie[1];return{CitationComponent:q,citationsData:B,citationsDataCount:Object.keys(B).length}}var je=e(30861);function Ge(o){return{name:"citation",level:"inline",tokenizer:function(X){var fe=X.match(/^\[([^\]]+)\](?!\()/);if(fe){var ve=fe[0].trim(),M=ve==null?void 0:ve.replace(/^\[([^\]]+)\]/g,"$1");if(o[M])return{type:"citation",raw:ve,text:ve==null?void 0:ve.replace(/^\[([^\]]+)\]/g,"$1"),renderType:"component"}}},renderer:function(X){if(o&&Object.keys(o).length===0)return null;var fe=X.text,ve=o==null?void 0:o[fe];return ve?'<citation data-text="'.concat(fe,'" data-url="').concat(ve.url,'" data-title="').concat(ve.title,'" data-content="').concat(ve.content,'"></citation>'):X.raw}}}var Oe,Ne=(0,f.vJ)(Oe||(Oe=d()([`
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
`])),function(o){var G=o.theme;return G.colorPrimary});function an(){var o=(0,S.wv)(),G=o.getPrefixCls,X="markdown-cursor-underline";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Ne,{}),(0,t.jsx)("span",{className:Y()(X,G("markdown-cursor"))})]})}var He=e(36374),Re=function(G){var X=G["data-type"];return X==="dot"?(0,t.jsx)(He.Z,{}):X==="underline"?(0,t.jsx)(an,{}):null};function un(){var o={cursors:{dot:"dot",underline:"underline"}},G=Object.keys(o.cursors).map(function(ve){return ve.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|"),X=new RegExp(":(".concat(G,"):")),fe=new RegExp("^".concat(X.source));return{name:"cursor",level:"inline",start:function(M){var ie;return(ie=M.match(X))===null||ie===void 0?void 0:ie.index},tokenizer:function(M,ie){var B=fe.exec(M);if(B){var q=B[1],Q=o.cursors[q];if(Q)return{type:"cursor",raw:B[0],name:q,cursor:Q}}},renderer:function(M){var ie='<custom-cursor data-type="'.concat(M.name,'"></custom-cursor>');return ie}}}var r=e(85018),Ee=["href"];function ye(o){return o["data-footnote-ref"]===""?(0,t.jsx)(_e,g()({},o)):o.children==="\u21A9"&&o["data-footnote-backref"]===""?null:(0,t.jsx)("a",g()({},o))}function _e(o){var G=(0,S.wv)(),X=G.getPrefixCls,fe=X("markdown-footnote"),ve=o.href,M=b()(o,Ee);return(0,t.jsx)("a",g()(g()({},M),{},{className:fe,onClick:function(){try{var B=o.id.split("-"),q=n()(B,3),Q=q[0],i=q[1],F=q[2],D=document.querySelector("#footnote-".concat(F)).querySelector("a").getAttribute("href");window.open(D,"_blank")}catch(te){}}}))}var ge={ALLOWED_TAGS:[]};function Xe(){try{return new RegExp("(?<=a)b"),!0}catch(o){return!1}}var We=Xe(),en=(0,E.memo)(function(o){var G=o.baseFontSize||14,X=o.baseLineHeight||1.7,fe=l({content:o.content,typing:o.typing&&!o.animation}),ve=(0,S.wv)().getPrefixCls("markdown"),M=o.raw,ie=M===void 0?!1:M,B=o.allowHtml,q=B===void 0?!1:B,Q=Me({citations:o.citations,citationsMap:o.citationsMap}),i=Q.citationsData,F=Q.citationsDataCount,D=Q.CitationComponent,te=(0,E.useMemo)(function(){return g()({code:v,style:u,script:u,img:o.disableImage?Se:Pe,citation:D,"custom-cursor":Re,a:ye},o.components)},[o.disableImage,D,o.components]),he=(0,E.useMemo)(function(){return{ADD_TAGS:["custom-cursor","citation"]}},[]),Ze=(0,E.useMemo)(function(){var pe=(0,je.Z)();pe.push(un()),F>0&&pe.push(Ge(i));var Je=(0,r.Z)({sectionClass:"".concat(ve,"-footnotes")});return pe.push.apply(pe,h()(Je.extensions)),{extensions:pe,walkTokens:Je.walkTokens}},[F,i]),me=Ze.extensions,on=Ze.walkTokens,$e=(0,E.useMemo)(function(){return g()({extensions:me,walkTokens:on},!q&&{renderer:{html:function(Je){var gn=Je.text||Je.raw||"";return gn.replace(/</g,"&lt;").replace(/>/g,"&gt;")}}})},[me,q]),Ve=(0,t.jsx)(ke,{content:fe||"",baseFontSize:G,baseLineHeight:X});return ie||!We?Ve:(0,t.jsx)(R.SV,{fallbackRender:function(){for(var Je=arguments.length,gn=new Array(Je),xn=0;xn<Je;xn++)gn[xn]=arguments[xn];return console.error(gn),Ve},children:(0,t.jsx)(I,{dompurifyConfig:he,cursor:o.cursor,animation:o.animation,components:te,style:{fontSize:G,lineHeight:X},openLinksInNewTab:!0,className:Y()(ve,o.className),content:fe||"",config:$e})})})},36374:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return d}});var H=e(68400),h=e.n(H),O=e(56044),g=e(9053),E=e(93967),j=e.n(E),b=e(85893),A,N=(0,g.vJ)(A||(A=h()([`
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
`])),function(f){return f.theme.prefixCls},function(f){return f.theme.colorText},function(f){return f.theme.colorText});function d(){var f=(0,O.wv)(),_=f.getPrefixCls,y=_("markdown-cursor-dot");return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(N,{}),(0,b.jsxs)("span",{className:j()(y,_("markdown-cursor")),children:[(0,b.jsx)("span",{style:{opacity:0,marginLeft:"-.75em"},children:"_"}),(0,b.jsx)("span",{className:"".concat(y,"-dot1")}),(0,b.jsx)("span",{className:"".concat(y,"-dot2")})]})]})}},12181:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return S}});var H=e(5574),h=e.n(H),O=e(15009),g=e.n(O),E=e(99289),j=e.n(E),b=e(68400),A=e.n(b),N=e(41469),d=e(2093),f=e(9361),_=e(96486),y=e.n(_),C=e(67294),t=e(56044),x=e(9053),I=e(85893),s,n=(0,x.vJ)(s||(s=A()([`
.`,`-mermaid {
  &-preview img {
    background: `,`;
  }
}
`])),function(ee){return ee.theme.prefixCls},function(ee){return ee.theme.colorBgBase}),P,l=function(){var ee=j()(g()().mark(function Y(){return g()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:if(!P){le.next=2;break}return le.abrupt("return",P);case 2:return P=Promise.resolve().then(e.bind(e,76637)).then(function(Z){return Z.default}),le.abrupt("return",P);case 4:case"end":return le.stop()}},Y)}));return function(){return ee.apply(this,arguments)}}();function S(ee){var Y=ee.content,u=ee.width,le=ee.height,Z=(0,t.wv)(),w=Z.theme,J=Z.getPrefixCls,ae=J("mermaid"),Ce=(0,C.useMemo)(function(){return{theme:(w==null?void 0:w.algorithm)===f.Z.darkAlgorithm?"dark":"default",securityLevel:"loose",startOnLoad:!1}},[w==null?void 0:w.algorithm,w==null?void 0:w.token.fontFamily]),v=(0,C.useState)(""),Se=h()(v,2),k=Se[0],ce=Se[1],V=(0,C.useState)(),Ae=h()(V,2),z=Ae[0],Pe=Ae[1],Le=(0,C.useId)(),ze=(0,_.kebabCase)("mermaid-".concat(Le));return(0,d.Z)(j()(g()().mark(function ke(){var R,ue,Te,T;return g()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.prev=0,$.next=3,l();case 3:if(R=$.sent,R){$.next=7;break}return ce(Y),$.abrupt("return");case 7:return $.next=9,R.parse(Y);case 9:if(ue=$.sent,!ue){$.next=19;break}return R.initialize(Ce),$.next=14,R.render(ze,Y);case 14:Te=$.sent,T=Te.svg,ce(T),$.next=20;break;case 19:throw new Error("Invalid Mermaid syntax");case 20:$.next=26;break;case 22:$.prev=22,$.t0=$.catch(0),k||console.error("Mermaid parse error: ",$.t0),ce(k||"");case 26:case"end":return $.stop()}},ke,null,[[0,22]])})),[Y,Ce]),(0,C.useEffect)(function(){if(k){var ke=new Blob([k],{type:"image/svg+xml"}),R=URL.createObjectURL(ke);return Pe(R),function(){URL.revokeObjectURL(R)}}},[k]),z?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(n,{}),(0,I.jsx)(N.Z,{className:ae,src:z,alt:"mermaid",width:u,height:le,preview:{rootClassName:"".concat(ae,"-preview")}})]}):null}},31382:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return P}});var H=e(9783),h=e.n(H),O=e(5574),g=e.n(O),E=e(67294),j=e(56044),b=e(68400),A=e.n(b),N=e(9053),d,f=(0,N.vJ)(d||(d=A()([`
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
`])),function(l){return l.theme.prefixCls},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorFillTertiary},function(l){return l.theme.colorText},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorText},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorText},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorText},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorText},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBgBase},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.prefixCls},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorPrimary},function(l){return l.theme.colorTextSecondary},function(l){return l.theme.colorFillTertiary},function(l){return l.theme.colorFillTertiary},function(l){return l.theme.colorFillQuaternary},function(l){return l.theme.colorTextTertiary}),_=e(93967),y=e.n(_),C=e(28387),t=e(9838),x=e(64057),I=e(85893);function s(l){var S=(0,j.wv)(),ee=S.getPrefixCls,Y=ee("operate-card");return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("div",{className:"".concat(Y,"-line-body"),children:l.children})})}function n(l){var S,ee=(0,j.wv)(),Y=ee.getPrefixCls,u=Y("operate-card"),le=(0,E.useState)(((S=l.body)===null||S===void 0?void 0:S.defaultOpen)||!1),Z=g()(le,2),w=Z[0],J=Z[1];return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(f,{}),(0,I.jsxs)("div",{className:u,children:[(0,I.jsxs)("div",{className:y()("".concat(u,"-header"),l.header.className,h()({},"".concat(u,"-header-has-body"),l.body)),onClick:function(){l.body&&J(!w)},children:[(0,I.jsx)("div",{className:"".concat(u,"-header-icon"),children:l.header.icon}),typeof l.header.title=="string"?(0,I.jsx)("div",{className:"".concat(u,"-header-title"),children:l.header.title}):l.header.title,l.header.description&&(0,I.jsx)("div",{className:"".concat(u,"-header-description"),children:l.header.description}),l.body&&(0,I.jsx)(x.Z,{size:"small",bordered:!1,className:"".concat(u,"-header-arrow"),icon:w?(0,I.jsx)(C.Z,{}):(0,I.jsx)(t.Z,{})})]}),l.body&&w&&(0,I.jsx)("div",{className:"".concat(u,"-body"),children:l.body.children})]})]})}n.LineBody=s;var P=n},85762:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return s}});var H=e(5574),h=e.n(H),O=e(56044),g=e(31382),E=e(37303),j=e(64057),b=e(28387),A=e(9838),N=e(48095),d=e(50104),f=e(55839),_=e(16494),y=e(86250),C=e(67294),t=e(85893);function x(n){var P=n.images,l=(0,O.wv)(),S=l.getPrefixCls,ee=S("operate-card");return(0,t.jsx)(f.ZP,{locale:{Image:{preview:""}},children:(0,t.jsx)(_.Z.PreviewGroup,{children:P.map(function(Y,u){return(0,t.jsx)(_.Z,{src:Y,width:44,height:44},u)})})})}function I(n){var P=n.item,l=(0,C.useState)(!1),S=h()(l,2),ee=S[0],Y=S[1],u=(0,O.wv)(),le=u.getPrefixCls,Z=le("operate-card");return(0,t.jsxs)("div",{className:"".concat(Z,"-rag-item"),children:[(0,t.jsxs)("div",{className:"".concat(Z,"-rag-item-title"),onClick:function(){Y(!ee)},children:[(0,t.jsx)("span",{children:P.title}),(0,t.jsx)("span",{style:{flex:1}}),P.score?(0,t.jsxs)(E.Z,{color:"mauve",size:"small",className:"".concat(Z,"-rag-item-score"),children:["\u5F97\u5206 ",(0,t.jsx)("b",{children:P.score})]}):null,(0,t.jsx)(j.Z,{bordered:!1,size:"small",icon:ee?(0,t.jsx)(b.Z,{}):(0,t.jsx)(A.Z,{})})]}),ee&&(0,t.jsxs)("div",{className:"".concat(Z,"-rag-item-content"),children:[(0,t.jsx)("div",{className:"".concat(Z,"-rag-item-content-text"),children:P.content}),P.images&&(0,t.jsx)("div",{className:"".concat(Z,"-rag-item-images"),children:(0,t.jsx)(x,{images:P.images})}),P.link?(0,t.jsx)("a",{onClick:function(){window.open(P.link,"_blank")},className:"".concat(Z,"-rag-item-footer"),href:P.link,target:"_blank",children:P.footer}):(0,t.jsx)("div",{className:"".concat(Z,"-rag-item-footer"),children:P.footer})]})]})}function s(n){var P=n.title,l=P===void 0?"\u77E5\u8BC6\u5E93\u68C0\u7D22":P,S=n.subTitle,ee=n.defaultOpen,Y=ee===void 0?!0:ee,u=n.placeholder,le=u===void 0?"\u672A\u67E5\u8BE2\u5230\u4E0E\u63D0\u95EE\u76F8\u5173\u77E5\u8BC6\u5E93":u,Z=n.images,w=n.query,J=n.filters,ae=(0,O.wv)(),Ce=ae.getPrefixCls,v=Ce("operate-card"),Se=(0,t.jsxs)(g.Z.LineBody,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"".concat(v,"-rag-group-title"),children:"\u68C0\u7D22 Query"}),(0,t.jsx)("div",{className:"".concat(v,"-rag-group-content"),children:w})]}),Z!=null&&Z.length?(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"".concat(v,"-rag-group-title"),children:"\u68C0\u7D22\u56FE\u7247"}),(0,t.jsx)("div",{className:"".concat(v,"-rag-group-content ").concat(v,"-rag-group-content-images"),children:(0,t.jsx)(x,{images:Z})})]}):null,J?(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"".concat(v,"-rag-group-title"),children:"\u8FC7\u6EE4\u6761\u4EF6"}),(0,t.jsx)("div",{className:"".concat(v,"-rag-group-content"),children:J})]}):null,n.list.length?(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"".concat(v,"-rag-group-title"),children:"Output"}),n.list.map(function(k,ce){return(0,t.jsx)(I,{item:k},ce)})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"".concat(v,"-rag-group-title"),children:"Output"}),(0,t.jsxs)(y.Z,{align:"center",justify:"center",gap:8,className:"".concat(v,"-rag-empty-placeholder"),children:[(0,t.jsx)(N.Z,{}),(0,t.jsx)("span",{children:le})]})]})]});return(0,t.jsx)(g.Z,{header:{icon:(0,t.jsx)(d.Z,{}),title:l,description:S},body:{defaultOpen:Y,children:(0,t.jsx)("div",{className:"".concat(v,"-rag-children"),children:Se})}})}},79323:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return j}});var H=e(56044),h=e(31382),O=e(40443),g=e(33593),E=e(85893);function j(b){var A=(0,H.wv)(),N=A.getPrefixCls,d=b.defaultOpen,f=d===void 0?!0:d,_=b.loading,y=_===void 0?!1:_,C=N("operate-card");return(0,E.jsx)(h.Z,{header:{icon:y?(0,E.jsx)(O.Z,{spin:!0}):(0,E.jsx)(g.Z,{}),title:b.title,description:b.subTitle},body:{defaultOpen:y?f:!1,children:(0,E.jsx)(h.Z.LineBody,{children:(0,E.jsx)("div",{className:"".concat(C,"-thinking"),children:b.content})})}},y.toString())}},6874:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return f}});var H=e(9783),h=e.n(H),O=e(56044),g=e(31382),E=e(41775),j=e(77900),b=e(40443),A=e(93967),N=e.n(A),d=e(85893);function f(_){var y=(0,O.wv)(),C=y.getPrefixCls,t=C("operate-card"),x=_.title,I=x===void 0?"Task List":x,s=_.list.filter(function(n){return n.status==="done"}).length;return(0,d.jsx)(g.Z,{header:{icon:(0,d.jsx)(E.Z,{}),title:I,description:"\xB7 ".concat(s?s+" of ":""," ").concat(_.list.length)},body:{defaultOpen:_.defaultOpen,children:(0,d.jsx)("div",{className:"".concat(t,"-todo-list"),children:_.list.map(function(n){return(0,d.jsxs)("div",{className:N()(h()(h()({},"".concat(t,"-todo-list-item"),!0),"".concat(t,"-todo-list-item-").concat(n.status),!0)),children:[(0,d.jsx)("div",{className:"".concat(t,"-todo-list-item-icon"),children:{done:(0,d.jsx)(j.Z,{}),todo:(0,d.jsx)(j.Z,{}),running:(0,d.jsx)(b.Z,{spin:!0})}[n.status]}),(0,d.jsx)("div",{className:"".concat(t,"-todo-list-item-title"),style:{textDecoration:n.status==="done"?"line-through":"none"},children:n.title})]},n.title)})})}})}},85786:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return t}});var H=e(5574),h=e.n(H),O=e(56044),g=e(31382),E=e(97634),j=e(89698),b=e(40443),A=e(78598),N=e(33811),d=e(64057),f=e(4146),_=e(67294),y=e(85893);function C(x){var I=(0,O.wv)(),s=I.getPrefixCls,n=s("operate-card"),P=typeof x.content=="string"?x.content:JSON.stringify(x.content),l=(0,_.useState)(!1),S=h()(l,2),ee=S[0],Y=S[1],u=(0,_.useRef)(null);return(0,y.jsx)("div",{className:"".concat(n,"-tool-call-block"),children:(0,y.jsx)(N.Z,{title:x.title,extra:(0,y.jsx)(d.Z,{size:"small",style:{marginRight:"-6px"},icon:ee?(0,y.jsx)(E.Z,{}):(0,y.jsx)(j.Z,{}),bordered:!1,onClick:function(){clearTimeout(u.current),navigator.clipboard.writeText(P),Y(!0),u.current=setTimeout(function(){Y(!1)},2e3)}}),children:(0,y.jsx)(f.ZP,{language:"json",value:P,readOnly:!0})})})}function t(x){var I=x.title,s=I===void 0?"Call Tool":I,n=x.subTitle,P=x.defaultOpen,l=P===void 0?!0:P,S=x.loading,ee=S===void 0?!1:S;return(0,y.jsx)(g.Z,{header:{icon:ee?(0,y.jsx)(b.Z,{spin:!0}):(0,y.jsx)(A.Z,{}),title:s,description:n},body:{defaultOpen:l,children:(0,y.jsxs)(g.Z.LineBody,{children:[(0,y.jsx)(C,{title:"Input",content:x.input}),(0,y.jsx)(C,{title:"Output",content:x.output})]})}})}},69610:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return N}});var H=e(9783),h=e.n(H),O=e(56044),g=e(31382),E=e(9229),j=e(93967),b=e.n(j),A=e(85893);function N(d){var f=(0,O.wv)(),_=f.getPrefixCls,y=_("operate-card"),C=d.title,t=C===void 0?"\u8054\u7F51\u641C\u7D22":C,x=d.subTitle;return(0,A.jsx)(g.Z,{header:{icon:(0,A.jsx)(E.Z,{}),title:t,description:x},body:{defaultOpen:!0,children:(0,A.jsx)(g.Z.LineBody,{children:d.list.map(function(I){return(0,A.jsxs)("div",{className:b()(h()({},"".concat(y,"-web-search-item"),!0)),onClick:function(){window.open(I.link,"_blank")},children:[(0,A.jsx)("img",{className:"".concat(y,"-web-search-item-icon"),src:I.icon,alt:I.title}),(0,A.jsx)("div",{className:"".concat(y,"-web-search-item-title"),children:I.title}),I.subTitle&&(0,A.jsx)("div",{className:"".concat(y,"-web-search-item-subTitle"),children:I.subTitle})]},I.title)})})}})}},56809:function(Ye,W,e){"use strict";e.d(W,{B4:function(){return h.Z},BI:function(){return H.Z},Sn:function(){return E.Z},fz:function(){return g.Z},x4:function(){return O.Z}});var H=e(79323),h=e(6874),O=e(85786),g=e(69610),E=e(85762)},83962:function(Ye,W,e){"use strict";e.d(W,{HJ:function(){return A},NR:function(){return j},xy:function(){return b}});var H=e(97857),h=e.n(H),O=e(67294),g=e(24963),E=e(85893),j=(0,O.createContext)(void 0),b=function(d){return(0,E.jsx)(j.Provider,{value:d.cardConfig,children:d.children})},A=function(){var d=O.useContext(j);return O.useMemo(function(){return h()(h()({},g),d)},[d])}},92049:function(Ye,W,e){"use strict";e.d(W,{R:function(){return g},bN:function(){return E}});var H=e(67294),h=e(85893),O=(0,H.createContext)(void 0),g=function(b){return(0,h.jsx)(O.Provider,{value:b,children:b.children})},E=function(){var b=H.useContext(O);return b||{}}},56044:function(Ye,W,e){"use strict";e.d(W,{wv:function(){return b}});var H=e(21766),h=e(67294),O=e(83962),g=e(92049),E=e(85893),j=function(N){var d=N.children,f=N.cardConfig,_=N.markdown;return(0,E.jsx)(g.R,{markdown:_,children:(0,E.jsx)(O.xy,{cardConfig:f,children:d})})};function b(){var A=h.useContext(H.ZP.ConfigContext);return A}W.ZP=j},44294:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return y},a:function(){return d}});var H=e(97857),h=e.n(H),O=e(24772),g=e(83622),E=e(93967),j=e.n(E),b=e(29372),A=e(67294),N=e(85893),d=A.createContext({}),f=function(){return{height:0}},_=function(t){return{height:t.scrollHeight}};function y(C){var t=C.title,x=C.onOpenChange,I=C.open,s=C.children,n=C.className,P=C.style,l=C.classNames,S=l===void 0?{}:l,ee=C.styles,Y=ee===void 0?{}:ee,u=C.closable,le=C.forceRender,Z=A.useContext(d),w=Z.prefixCls,J="".concat(w,"-header");return(0,N.jsx)(b.ZP,{motionEnter:!0,motionLeave:!0,motionName:"".concat(J,"-motion"),leavedClassName:"".concat(J,"-motion-hidden"),onEnterStart:f,onEnterActive:_,onLeaveStart:_,onLeaveActive:f,visible:I,forceRender:le,children:function(Ce){var v=Ce.className,Se=Ce.style;return(0,N.jsxs)("div",{className:j()(J,v,n),style:h()(h()({},Se),P),children:[(u!==!1||t)&&(0,N.jsxs)("div",{className:j()("".concat(J,"-header"),S.header),style:h()({},Y.header),children:[(0,N.jsx)("div",{className:"".concat(J,"-title"),children:t}),u!==!1&&(0,N.jsx)("div",{className:"".concat(J,"-close"),children:(0,N.jsx)(g.ZP,{type:"text",icon:(0,N.jsx)(O.Z,{}),size:"small",onClick:function(){x==null||x(!I)}})})]}),s&&(0,N.jsx)("div",{className:j()("".concat(J,"-content"),S.content),style:h()({},Y.content),children:s})]})}})}},66672:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return Q}});var H=e(19632),h=e.n(H),O=e(97857),g=e.n(O),E=e(9783),j=e.n(E),b=e(5574),A=e.n(b),N=e(13769),d=e.n(N),f=e(48045),_=e(86250),y=e(93967),C=e.n(y),t=e(56790),x=e(30339),I=e(94787),s=e(67294),n=e(11154),P=e(83204);function l(i,F){return(0,s.useImperativeHandle)(i,function(){var D=F(),te=D.nativeElement;return new Proxy(te,{get:function(Ze,me){return D[me]?D[me]:Reflect.get(Ze,me)}})})}var S=e(56044),ee=e(44294),Y=e(64057),u=e(85893),le=["className","action","onClick"],Z=s.createContext(null);function w(i){var F=i.className,D=i.action,te=i.onClick,he=d()(i,le),Ze=s.useContext(Z),me=Ze.prefixCls,on=Ze.disabled,$e=Ze[D],Ve=on||he.disabled||Ze["".concat(D,"Disabled")]||!1;return(0,u.jsx)(Y.Z,g()(g()({bordered:!1,disabled:Ve},he),{},{onClick:function(Je){Ve||($e&&$e(),te&&te(Je))},className:C()(me,F,j()({},"".concat(me,"-disabled"),Ve))}))}var J=s.forwardRef(w),ae=e(69291);function Ce(i,F){return(0,u.jsx)(J,g()(g()({icon:(0,u.jsx)(ae.Z,{})},i),{},{action:"onClear",ref:F}))}var v=s.forwardRef(Ce),Se=(0,s.memo)(function(i){var F=i.className;return(0,u.jsxs)("svg",{color:"currentColor",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:F,children:[(0,u.jsx)("title",{children:"Stop Loading"}),(0,u.jsx)("rect",{fill:"currentColor",height:"250",rx:"24",ry:"24",width:"250",x:"375",y:"375"})]})}),k=Se;function ce(i,F){var D=s.useContext(Z),te=D.prefixCls,he=i.className;return(0,u.jsx)(J,g()(g()({icon:(0,u.jsx)(k,{className:"".concat(te,"-loading-icon")}),type:"primary",variant:"text"},i),{},{className:C()(he,"".concat(te,"-loading-button")),action:"onCancel",ref:F}))}var V=s.forwardRef(ce),Ae=e(43103);function z(i,F){return(0,u.jsx)(J,g()(g()({icon:(0,u.jsx)(Ae.Z,{}),type:"primary"},i),{},{action:"onSend",ref:F}))}var Pe=s.forwardRef(z),Le=e(36763),ze=e(21474),ke=1e3,R=4,ue=140,Te=ue/2,T=250,K=500,$=.8;function De(i){var F=i.className;return(0,u.jsxs)("svg",{color:"currentColor",viewBox:"0 0 ".concat(ke," ").concat(ke),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:F,children:[(0,u.jsx)("title",{children:"Speech Recording"}),Array.from({length:R}).map(function(D,te){var he=(ke-ue*R)/(R-1),Ze=te*(he+ue),me=ke/2-T/2,on=ke/2-K/2;return(0,u.jsxs)("rect",{fill:"currentColor",rx:Te,ry:Te,height:T,width:ue,x:Ze,y:me,children:[(0,u.jsx)("animate",{attributeName:"height",values:"".concat(T,"; ").concat(K,"; ").concat(T),keyTimes:"0; 0.5; 1",dur:"".concat($,"s"),begin:"".concat($/R*te,"s"),repeatCount:"indefinite"}),(0,u.jsx)("animate",{attributeName:"y",values:"".concat(me,"; ").concat(on,"; ").concat(me),keyTimes:"0; 0.5; 1",dur:"".concat($,"s"),begin:"".concat($/R*te,"s"),repeatCount:"indefinite"})]},te)})]})}function Be(i,F){var D=s.useContext(Z),te=D.speechRecording,he=D.onSpeechDisabled,Ze=D.prefixCls,me=null;return te?me=(0,u.jsx)(De,{className:"".concat(Ze,"-recording-icon")}):he?me=(0,u.jsx)(Le.Z,{}):me=(0,u.jsx)(ze.Z,{}),(0,u.jsx)(J,g()(g()({icon:me,variant:"text"},i),{},{action:"onSpeech",ref:F}))}var Me=s.forwardRef(Be),je=e(68400),Ge=e.n(je),Oe=e(9053),Ne,an=(0,Oe.vJ)(Ne||(Ne=Ge()([`
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
`])),function(i){return i.theme.prefixCls},function(i){return i.theme.colorBgBase},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.motionDurationSlow},function(i){return i.theme.lineWidth},function(i){return i.theme.colorPrimaryHover},function(i){return i.theme.lineWidth},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.colorBgContainerDisabled},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.paddingXS},function(i){return i.theme.colorTextTertiary},function(i){return"var(--".concat(i.theme.prefixCls,"-color-fill-disable)")},function(i){return i.theme.controlHeight},function(i){return i.theme.controlHeight},function(i){return i.theme.prefixCls}),He=an,Re=e(52677),un=e.n(Re),r;!r&&typeof window!="undefined"&&(r=window.SpeechRecognition||window.webkitSpeechRecognition);function Ee(i,F){var D=(0,t.zX)(i),te=s.useMemo(function(){return un()(F)==="object"?[F.recording,F.onRecordingChange,typeof F.recording=="boolean"]:[void 0,void 0,!1]},[F]),he=A()(te,3),Ze=he[0],me=he[1],on=he[2],$e=s.useState(null),Ve=A()($e,2),pe=Ve[0],Je=Ve[1];s.useEffect(function(){if(typeof navigator!="undefined"&&"permissions"in navigator){var Cn=null;return navigator.permissions.query({name:"microphone"}).then(function(pn){Je(pn.state),pn.onchange=function(){Je(this.state)},Cn=pn}),function(){Cn&&(Cn.onchange=null)}}},[]);var gn=r&&pe!=="denied",xn=s.useRef(null),Ln=(0,t.C8)(!1,{value:Ze}),Tn=A()(Ln,2),bn=Tn[0],jn=Tn[1],nn=s.useRef(!1),sn=function(){if(gn&&!xn.current){var pn=new r;pn.onstart=function(){jn(!0)},pn.onend=function(){jn(!1)},pn.onresult=function(Rn){if(!nn.current){var Pn,kn=(Pn=Rn.results)===null||Pn===void 0||(Pn=Pn[0])===null||Pn===void 0||(Pn=Pn[0])===null||Pn===void 0?void 0:Pn.transcript;D(kn)}nn.current=!1},xn.current=pn}},hn=(0,t.zX)(function(Cn){Cn&&!bn||(nn.current=Cn,on?me==null||me(!bn):(sn(),xn.current&&(bn?(xn.current.stop(),me==null||me(!1)):(xn.current.start(),me==null||me(!0)))))});return[gn,hn,bn]}var ye=e(89102),_e=e(67055),ge,Xe=(0,Oe.vJ)(ge||(ge=Ge()([`
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

`])),function(i){return i.theme.prefixCls},function(i){return i.theme.borderRadius},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.colorPrimary},function(i){return i.theme.colorPrimary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorFillTertiary},function(i){return i.theme.colorTextSecondary});function We(i){var F=(0,S.wv)(),D=F.getPrefixCls,te=D("sender-mode-select"),he=i.value,Ze=i.onChange,me=(0,s.useMemo)(function(){var $e=i.options.find(function(Ve){return Ve.value===he})||{};return $e},[i.value]),on=(0,u.jsx)(ye.Z,{onClick:function(){return Ze(void 0)},style:{cursor:"pointer",fontSize:20}});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(Xe,{}),(0,u.jsxs)("div",{className:te,style:i.style,children:[(0,u.jsx)("div",{className:"".concat(te,"-options ").concat(he?"".concat(te,"-hide"):""),children:i.options.map(function($e){var Ve=(0,u.jsx)(en,g()({onClick:function(){return Ze($e.value)},className:"".concat(te,"-option")},$e),$e.value);return Ve})}),(0,u.jsx)("div",{className:"".concat(te,"-display ").concat(he?"":"".concat(te,"-hide")),children:(0,u.jsxs)("div",{className:"".concat(te,"-display-flex"),children:[(0,u.jsx)(en,g()(g()({},me),{},{label:(me==null?void 0:me.selectedLabel)||(me==null?void 0:me.label),className:"".concat(te,"-display-label")})),i.desc&&(0,u.jsx)("div",{className:"".concat(te,"-display-desc"),children:i.desc}),i.closeTip?(0,u.jsx)(_e.Z,{title:i.closeTip,children:on}):on]})})]})]})}function en(i){var F=(0,u.jsxs)("div",{className:i.className,onClick:i.onClick,children:[i.icon,i.label]});return i.tooltip?(0,u.jsx)(_e.Z,{title:i.tooltip,placement:"topLeft",children:F}):F}var o=e(85441),G=e(32485),X,fe=(0,Oe.vJ)(X||(X=Ge()([`
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
`])),function(i){return i.theme.prefixCls},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorFillTertiary});function ve(i){var F=i.leftChildren,D=i.rightChildren,te=i.children,he=(0,S.wv)().getPrefixCls("sender-before-ui-container"),Ze=(0,s.useMemo)(function(){return F?(0,u.jsx)("div",{className:"".concat(he,"-left"),children:F}):null},[F]),me=(0,s.useMemo)(function(){return D?(0,u.jsx)("div",{className:"".concat(he,"-right"),children:D}):null},[D]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(fe,{}),(0,u.jsx)("div",{className:he,children:(0,u.jsx)("div",{className:"".concat(he,"-content"),children:(0,u.jsx)("div",{className:"".concat(he,"-content-children"),children:te||(0,u.jsxs)(u.Fragment,{children:[Ze,me]})})})})]})}var M=["styles","classNames","className","rootClassName","style","defaultValue","value","readOnly","enableFocusExpand","sendDisabled","submitType","onSubmit","loading","onCancel","onChange","onFocus","onBlur","actions","onKeyPress","onKeyDown","disabled","header","onPaste","allowSpeech","onPasteFile","components","initialRows","scalable"];function ie(i,F,D){return(0,I.Z)(i,F)||D}var B=s.forwardRef(function(i,F){var D=i,te=D.styles,he=te===void 0?{}:te,Ze=D.classNames,me=Ze===void 0?{}:Ze,on=D.className,$e=D.rootClassName,Ve=D.style,pe=D.defaultValue,Je=D.value,gn=D.readOnly,xn=D.enableFocusExpand,Ln=xn===void 0?!1:xn,Tn=D.sendDisabled,bn=Tn===void 0?!1:Tn,jn=D.submitType,nn=jn===void 0?"enter":jn,sn=D.onSubmit,hn=D.loading,Cn=D.onCancel,pn=D.onChange,Rn=D.onFocus,Pn=D.onBlur,kn=D.actions,Vn=D.onKeyPress,nt=D.onKeyDown,Xn=D.disabled,tn=D.header,Ke=D.onPaste,vn=D.allowSpeech,fn=D.onPasteFile,qn=D.components,yn=D.initialRows,On=yn===void 0?2:yn,Yn=D.scalable,In=d()(D,M),Fn=Yn,Sn=(0,s.useState)(Fn?!1:void 0),Kn=A()(Sn,2),wn=Kn[0],Dn=Kn[1],Wn=(0,s.useState)(!1),Hn=A()(Wn,2),An=Hn[0],mn=Hn[1],_n=s.useMemo(function(){return wn?{maxRows:10,minRows:10}:{maxRows:10,minRows:On}},[Fn,wn]),zn=(0,S.wv)(),et=zn.direction,ot=zn.getPrefixCls,Bn=ot("sender"),Gn=s.useRef(null),tt=s.useRef(null);l(F,function(){var dn,ln;return{nativeElement:Gn.current,focus:(dn=tt.current)===null||dn===void 0?void 0:dn.focus,blur:(ln=tt.current)===null||ln===void 0?void 0:ln.blur}}),(0,n.Z)(Gn,{onFocus:function(ln){mn(!0),Rn==null||Rn()},onBlur:function(){Gn.current&&!Gn.current.contains(document.activeElement)&&(mn(!1),Pn==null||Pn())}}),(0,P.Z)("click",function(dn){mn(!0),Rn==null||Rn()},{target:Gn});var st="".concat(Bn,"-input"),lt=C()(Bn,on,$e,j()(j()(j()(j()({},"".concat(Bn,"-rtl"),et==="rtl"),"".concat(Bn,"-disabled"),Xn),"".concat(Bn,"-focus"),An&&Ln),"".concat(Bn,"-blur"),!An&&Ln)),ct="".concat(Bn,"-actions-btn"),at="".concat(Bn,"-actions-list"),ut=(0,t.C8)(pe||"",{value:Je}),it=A()(ut,2),a=it[0],p=it[1],c=function(ln,Mn){p(ln),pn&&pn(ln,Mn)},m=Ee(function(dn){c("".concat(a," ").concat(dn))},vn),L=A()(m,3),U=L[0],xe=L[1],se=L[2],ne=ie(qn,["input"],f.Z.TextArea),re=(0,x.Z)(In,{attr:!0,aria:!0,data:!0}),de=g()(g()({},re),{},{ref:tt}),oe=function(){!cn.onSendDisabled&&sn&&!hn&&sn(a)},Ie=function(){c("")},be=s.useRef(!1),Qe=function(){be.current=!0},qe=function(){be.current=!1},Ue=function(ln){var Mn=ln.key==="Enter"&&!be.current;switch(nn){case"enter":Mn&&!ln.shiftKey&&(ln.preventDefault(),oe());break;case"shiftEnter":Mn&&ln.shiftKey&&(ln.preventDefault(),oe());break}Vn&&Vn(ln)},we=function(ln){var Mn;if(!fn){Ke==null||Ke(ln);return}var En=Array.from(((Mn=ln.clipboardData)===null||Mn===void 0?void 0:Mn.files)||[]);if(En.length===0){var $n,rt=Array.from((($n=ln.clipboardData)===null||$n===void 0?void 0:$n.items)||[]);En=rt.filter(function(Un){return Un.kind==="file"}).map(function(Un){return Un.getAsFile()}).filter(function(Un){return Un!==null})}En.length>0?(En.forEach(function(Un){return fn(Un)}),ln.preventDefault()):Ke==null||Ke(ln)},rn=function(ln){var Mn,En;ln.target!==((Mn=Gn.current)===null||Mn===void 0?void 0:Mn.querySelector(".".concat(st)))&&ln.preventDefault(),(En=tt.current)===null||En===void 0||En.focus()},Nn=s.useMemo(function(){var dn=Array.isArray(i.prefix)?h()(i.prefix):[i.prefix];return Fn&&dn.push((0,u.jsx)(Y.Z,{onClick:function(){return Dn(!wn)},bordered:!1,icon:wn?(0,u.jsx)(o.Z,{}):(0,u.jsx)(G.Z,{})},"zoom")),dn},[i.prefix,Fn,wn,vn]),Qn=(0,u.jsx)(_.Z,{className:"".concat(at,"-presets"),children:hn?(0,u.jsx)(V,{}):(0,u.jsx)(Pe,{})});typeof kn=="function"?Qn=kn(Qn,{components:{SendButton:Pe,ClearButton:v,LoadingButton:V}}):kn&&(Qn=kn);var cn={prefixCls:ct,onSend:oe,onSendDisabled:!a||!a.trim()||bn,onClear:Ie,onClearDisabled:!a,onCancel:Cn,onCancelDisabled:!hn,onSpeech:function(){return xe(!1)},onSpeechDisabled:!U,speechRecording:se,disabled:Xn};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(He,{}),(0,u.jsxs)("div",{ref:Gn,className:lt,style:Ve,children:[tn&&(0,u.jsx)(ee.a.Provider,{value:{prefixCls:Bn,focus:An,enableFocusExpand:Ln},children:tn}),(0,u.jsxs)("div",{className:"".concat(Bn,"-content"),children:[(0,u.jsx)(ne,g()(g()({},de),{},{disabled:Xn,style:he.input,className:C()(st,me.input),autoSize:_n,value:a.slice(0,i.maxLength||Number.MAX_SAFE_INTEGER),onChange:function(ln){c(ln.target.value,ln),xe(!0)},onPressEnter:Ue,onCompositionStart:Qe,onCompositionEnd:qe,onKeyDown:nt,onPaste:we,variant:"borderless",readOnly:gn})),(0,u.jsxs)("div",{className:"".concat(Bn,"-content-bottom"),children:[Nn.length>0&&(0,u.jsx)("div",{className:C()("".concat(Bn,"-prefix"),me.prefix),style:he.prefix,children:(0,u.jsxs)(_.Z,{gap:8,children:[vn&&(0,u.jsx)(Z.Provider,{value:cn,children:(0,u.jsx)(Me,{})}),Nn]})}),(0,u.jsxs)("div",{className:C()(at,me.actions),style:he.actions,children:[i.maxLength?(0,u.jsxs)("div",{className:"".concat(at,"-length"),children:[a.length,"/",i.maxLength]}):null,(0,u.jsx)(Z.Provider,{value:cn,children:Qn})]})]})]})]})]})}),q=B;q.Header=ee.Z,q.ModeSelect=We,q.BeforeUIContainer=ve;var Q=q},70770:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return I}});var H=e(89034),h=e(36674),O=e(9343),g=e(48095),E=e(97634),j=e(56044),b=e(68400),A=e.n(b),N=e(9053),d,f=(0,N.vJ)(d||(d=A()([`
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
`])),function(s){return s.theme.prefixCls},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorSuccessBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorSuccess},function(s){return s.theme.colorErrorBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorError},function(s){return s.theme.colorWarningBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorWarning},function(s){return s.theme.colorFillTertiary},function(s){return s.theme.prefixCls},function(s){return s.theme.colorInfo},function(s){return s.theme.colorText},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorBgBase},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorBgBase},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorText}),_=e(93967),y=e.n(_),C=e(21403),t=e(85893);function x(s){var n=(0,j.wv)(),P=n.getPrefixCls,l=P("status-card"),S=s.icon||{success:(0,t.jsx)(H.Z,{}),error:(0,t.jsx)(h.Z,{}),warning:(0,t.jsx)(O.Z,{}),info:(0,t.jsx)(g.Z,{})}[s.status];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f,{}),(0,t.jsxs)("div",{className:y()(l,"".concat(l,"-").concat(s.status)),children:[(0,t.jsxs)("div",{className:"".concat(l,"-header"),children:[(0,t.jsxs)("div",{className:"".concat(l,"-header-top"),children:[(0,t.jsx)("div",{className:"".concat(l,"-header-icon"),children:S}),(0,t.jsx)("div",{className:"".concat(l,"-header-title"),children:s.title})]}),s.description&&(0,t.jsx)("div",{className:"".concat(l,"-header-description"),children:s.description})]}),s.children&&(0,t.jsx)("div",{className:"".concat(l,"-body"),children:s.children})]})]})}x.HITL=function(s){var n=s.title,P=n===void 0?"\u9700\u8981\u7528\u6237\u4EBA\u5DE5\u5E72\u9884":n,l=s.description,S=s.waitButtonText,ee=S===void 0?"\u6211\u5DF2\u5B8C\u6210\uFF0C\u7EE7\u7EED\u4EFB\u52A1":S,Y=s.doneButtonText,u=Y===void 0?"\u7528\u6237\u5DF2\u786E\u8BA4":Y,le=(0,j.wv)(),Z=le.getPrefixCls,w=Z("status-card"),J=s.done?(0,t.jsx)(C.Z,{onClick:s.onDone,type:"primary",disabled:!0,icon:(0,t.jsx)(E.Z,{}),children:u}):(0,t.jsx)(C.Z,{onClick:s.onDone,type:"primary",children:ee});return(0,t.jsx)(x,{status:"info",title:P,children:(0,t.jsxs)("div",{className:"".concat(w,"-HITL"),children:[l&&(0,t.jsx)("div",{className:"".concat(w,"-HITL-desc"),children:l}),(0,t.jsx)("div",{className:"".concat(w,"-HITL-button"),children:J})]})})},x.Statistic=function(s){var n=(0,j.wv)(),P=n.getPrefixCls,l=P("status-card");return(0,t.jsx)("div",{className:"".concat(l,"-statistic"),children:s.values.map(function(S){return(0,t.jsxs)("div",{className:"".concat(l,"-statistic-item"),children:[(0,t.jsx)("div",{className:"".concat(l,"-statistic-item-title"),children:S.title}),(0,t.jsx)("div",{className:"".concat(l,"-statistic-item-value"),children:S.value})]})})})};var I=x},7354:function(Ye,W,e){"use strict";var H=e(15009),h=e.n(H),O=e(9783),g=e.n(O),E=e(97857),j=e.n(E),b=e(77262),A=e.n(b),N=e(93938),d=e.n(N),f=`

`,_=`
`,y=":",C=function(n){return(n!=null?n:"").trim()!==""};function t(){var s="";return new TransformStream({transform:function(P,l){s+=P;var S=s.split(f);S.slice(0,-1).forEach(function(ee){C(ee)&&l.enqueue(ee)}),s=S[S.length-1]},flush:function(P){C(s)&&P.enqueue(s)}})}function x(){return new TransformStream({transform:function(n,P){var l=n.split(_),S=l.reduce(function(ee,Y){var u=Y.indexOf(y);if(u===-1)throw new Error('The key-value separator "'.concat(y,'" is not found in the sse line chunk!'));var le=Y.slice(0,u);if(!C(le))return ee;var Z=Y.slice(u+1);return j()(j()({},ee),{},g()({},le,Z))},{});Object.keys(S).length!==0&&P.enqueue(S)}})}function I(s,n){var P=s.readableStream,l=s.transformStream;if(!(P instanceof ReadableStream))throw new Error("The options.readableStream must be an instance of ReadableStream.");var S=new TextDecoderStream,ee=l?P.pipeThrough(S).pipeThrough(l):P.pipeThrough(S).pipeThrough(t()).pipeThrough(x());return ee[Symbol.asyncIterator]=d()(h()().mark(function Y(){var u,le,Z,w;return h()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:u=this.getReader();case 1:return ae.next=4,A()(u.read());case 4:if(le=ae.sent,Z=le.done,w=le.value,!Z){ae.next=9;break}return ae.abrupt("break",15);case 9:if(w){ae.next=11;break}return ae.abrupt("continue",1);case 11:return ae.next=13,n!=null&&n.openaiCompatible?j()(j()({},w),{},{data:w.data.slice(1)}):w;case 13:ae.next=1;break;case 15:case"end":return ae.stop()}},Y,this)})),ee}W.Z=I},32116:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return H}});function H(h){return new Promise(function(O){return setTimeout(O,h)})}},66366:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return h}});var H={i8:"1.1.47"},h=H.i8},57657:function(Ye,W,e){"use strict";e.r(W);var H=e(5574),h=e.n(H),O=e(9053),g=e(67294),E=e(85893),j=function(){var N=(0,g.useState)({x:0,y:0}),d=h()(N,2),f=d[0],_=d[1],y=(0,g.useState)(!1),C=h()(y,2),t=C[0],x=C[1],I=(0,g.useRef)(null),s=b(),n=s.styles,P=s.cx;(0,g.useEffect)(function(){var Z=function(J){if(I.current){var ae=I.current.getBoundingClientRect();_({x:J.clientX-ae.left,y:J.clientY-ae.top})}};return window.addEventListener("mousemove",Z),function(){return window.removeEventListener("mousemove",Z)}},[]),(0,g.useEffect)(function(){var Z=setInterval(function(){x(!0),setTimeout(function(){return x(!1)},150)},5e3);return function(){return clearInterval(Z)}},[]);var l=function(){var w=32,J=32,ae=f.x-w,Ce=f.y-J,v=6,Se=6,k=Math.sqrt(ae*ae+Ce*Ce),ce=50;if(k===0)return{x:0,y:0};var V=Math.min(k/ce,1),Ae=ae/k*v*V,z=Ce/k*Se*V;return{x:Math.max(-v,Math.min(v,Ae)),y:Math.max(-Se,Math.min(Se,z))}},S=function(w){var J=32,ae=f.x-J,Ce=400;if(Math.abs(ae)<Ce)return 1;var v=Math.abs(ae)-Ce,Se=32-Ce,k=Math.min(v/Se,1);return ae>Ce?w?1-k*.5:1:ae<-Ce?w?1:1-k*.5:1},ee=l(),Y=l(),u=S(!0),le=S(!1);return(0,E.jsxs)("div",{ref:I,className:n.container,children:[(0,E.jsx)("div",{className:P(n.eye,n.leftEye,t?n.blinkingEye:""),style:{transform:"translate(".concat(ee.x,"px, ").concat(ee.y,"px) ").concat(t?"scaleY(0.1)":"scaleY(".concat(u,")"))}}),(0,E.jsx)("div",{className:P(n.eye,n.rightEye,t?n.blinkingEye:""),style:{transform:"translate(".concat(Y.x,"px, ").concat(Y.y,"px) ").concat(t?"scaleY(0.1)":"scaleY(".concat(le,")"))}})]})};W.default=j;var b=(0,O.kc)(function(A){var N=A.css,d=A.token;return{container:{width:64,height:64,backgroundColor:"black",borderRadius:12,position:"relative",cursor:"pointer",overflow:"hidden",boxShadow:"15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)"},eye:{width:6,height:12,backgroundColor:"white",borderRadius:99,position:"absolute",top:16,transition:"transform 0.1s ease-out"},leftEye:{left:22},rightEye:{left:36},blinkingEye:{transition:"transform 0.05s ease-out"}}})},31295:function(Ye,W,e){"use strict";e.d(W,{Z:function(){return N}});var H=e(68400),h=e.n(H),O=e(67294),g=e(9053),E=e(56044),j=e(85893),b,A=(0,g.vJ)(b||(b=h()([`
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
`])),function(d){return d.theme.prefixCls},function(d){return d.theme.colorText},function(d){return d.theme.colorTextSecondary});function N(d){var f=(0,E.wv)(),_=f.getPrefixCls,y=_("welcome"),C=typeof d.logo=="string"?(0,j.jsx)("img",{className:y+"-logo",src:d.logo}):d.logo;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(A,{}),(0,j.jsxs)("div",{className:y,style:d.style,children:[C,(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:y+"-title",children:d.title}),(0,j.jsx)("div",{className:y+"-desc",children:d.desc})]})]})]})}},43601:function(Ye,W,e){"use strict";e.r(W),e.d(W,{AIGC:function(){return ce.Z},Accordion:function(){return n.Z},AgentScopeRuntimeWebUI:function(){return t.Z},AssetsPreview:function(){return V.Z},Attachments:function(){return l.Z},Bubble:function(){return S.Z},ChatAnywhere:function(){return A.ZP},ChatInput:function(){return ae.Z},ConfigProvider:function(){return H.ZP},Conversations:function(){return ee.Z},CustomCardsContext:function(){return O.NR},CustomCardsProvider:function(){return O.xy},DeepThink:function(){return P.Z},DeepThinking:function(){return P.Z},DefaultCards:function(){return C},DeviceAction:function(){return Y.Z},Disclaimer:function(){return u.Z},GenerativeUISandbox:function(){return Ae.Z},HistoryPanel:function(){return ee.Z},ImageGenerator:function(){return le.Z},Markdown:function(){return k.Z},Mermaid:function(){return Z.Z},OperateCard:function(){return w.Z},Process:function(){return n.Z},Rag:function(){return J.Sn},Sender:function(){return ae.Z},SparkChatProvider:function(){return g.ZP},StatusCard:function(){return Ce.Z},Stream:function(){return j.Z},Thinking:function(){return J.BI},TodoList:function(){return J.B4},ToolCall:function(){return J.x4},WebSearch:function(){return J.fz},Welcome:function(){return Se.Z},createCard:function(){return b.L},sleep:function(){return v.Z},useChatAnywhere:function(){return N.TQ},useCustomCardsContext:function(){return O.HJ},useGlobalContext:function(){return E.bN},useInput:function(){return d.G},useMessages:function(){return f.y},useProviderContext:function(){return g.wv},useSessionList:function(){return _.x},uuid:function(){return y.Z},version:function(){return h.Z}});var H=e(55839),h=e(66366),O=e(83962),g=e(56044),E=e(92049),j=e(7354),b=e(50130),A=e(29041),N=e(76289),d=e(37254),f=e(4421),_=e(61316),y=e(88773),C=e(24963),t=e(74823),x=e(22863),I={};for(var s in x)["default","ConfigProvider","version","CustomCardsContext","CustomCardsProvider","SparkChatProvider","useCustomCardsContext","useGlobalContext","useProviderContext","Stream","createCard","ChatAnywhere","useChatAnywhere","useInput","useMessages","useSessionList","uuid","DefaultCards","AgentScopeRuntimeWebUI","Accordion","Process","DeepThink","DeepThinking","Attachments","Bubble","Conversations","HistoryPanel","DeviceAction","Disclaimer","ImageGenerator","Mermaid","OperateCard","ChatInput","Sender","StatusCard","sleep","Welcome","Markdown","AIGC","AssetsPreview","GenerativeUISandbox"].indexOf(s)<0&&(I[s]=function(z){return x[z]}.bind(0,s));e.d(W,I);var n=e(487),P=e(14082),l=e(36417),S=e(9146),ee=e(9368),Y=e(55031),u=e(10325),le=e(2534),Z=e(12181),w=e(31382),J=e(56809),ae=e(66672),Ce=e(70770),v=e(32116),Se=e(31295),k=e(66109),ce=e(86578),V=e(34487),Ae=e(80115)}}]);
