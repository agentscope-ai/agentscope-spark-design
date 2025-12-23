(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1997],{86578:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return ce}});var G=e(97857),d=e.n(G),S=e(9783),y=e.n(S),M=e(13769),b=e.n(M),E=e(67294),_=e(93967),I=e.n(_),v=e(56044),h=e(93164),B=e(36417),i=e(44294),c=e(12624),o=e(82484),m=e(68400),R=e.n(m),s=e(9053),n,L=(0,s.vJ)(n||(n=R()([`
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
`])),function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.borderRadius},function(V){return V.theme.colorBorderSecondary},function(V){return V.theme.colorBgBase},function(V){return V.theme.colorText}),u=e(85893),W=["className","icon"],q=o.Z.Dragger,J=function(me){var Fe=me.className,We=me.icon,He=b()(me,W),rn=(0,v.wv)(),en=rn.getPrefixCls,k=en("media-upload");return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(L,{}),(0,u.jsx)(q,d()(d()({showUploadList:!1,className:I()(k,Fe)},He),{},{children:(0,u.jsxs)("div",{className:I()("".concat(k,"-thumbnail")),children:[(0,u.jsx)("div",{className:I()("".concat(k,"-thumbnail-gradient"))}),We||(0,u.jsx)(c.Z,{className:I()("".concat(k,"-thumbnail-icon"))})]})}))]})},C=J,se,$=(0,s.vJ)(se||(se=R()([`
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
`])),function(V){return V.theme.prefixCls},function(V){return V.theme.colorText},function(V){return V.theme.colorTextTertiary}),F=function(me){var Fe=me.className,We=me.title,He=me.description,rn=(0,v.wv)(),en=rn.getPrefixCls,k=en("media-info"),ue=!!We||!!He;return ue?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)($,{}),(0,u.jsxs)("div",{className:I()(k,Fe),children:[We&&(0,u.jsx)("div",{className:I()("".concat(k,"-title")),children:We}),He&&(0,u.jsx)("div",{className:I()("".concat(k,"-description")),children:He})]})]}):null},z=F,ae,ge=(0,s.vJ)(ae||(ae=R()([`
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
`])),function(V){return V.theme.prefixCls},function(V){return V.theme.colorBorderSecondary},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls}),x=["title","description","maxCount"],pe=function(me){var Fe=me.className,We=me.onUpload,He=We===void 0?[]:We,rn=me.attachedFiles,en=rn===void 0?[[]]:rn,k=me.onFileChange,ue=(0,v.wv)(),be=ue.getPrefixCls,D=(0,E.useContext)(i.a),ee=D.focus,X=D.enableFocusExpand,Oe=be("aigc-sender-header"),Ae=(0,E.useMemo)(function(){return en.flat().length>0?!0:He.length<=0?!1:!!(ee||!X)},[He,en,X,ee]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(ge,{}),(0,u.jsx)(h.Z.Header,{closable:!1,open:Ae,children:(0,u.jsx)("div",{className:I()(Oe,Fe),tabIndex:0,children:He==null?void 0:He.map(function(Pe,Ce){var Ye=Pe.title,De=Pe.description,ze=Pe.maxCount,sn=ze===void 0?1:ze,Xe=b()(Pe,x),Se=en[Ce]||[];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(C,d()({className:I()(y()({},"".concat(Oe,"-upload-hidden"),Se.length>=sn)),maxCount:sn,fileList:Se,onChange:function(t){Pe.beforeUpload&&t.file.status&&k(Ce,t.fileList),Pe.beforeUpload||k(Ce,t.fileList)},showUploadList:!1},Xe),"upload-".concat(Ce)),Se.length>0&&(0,u.jsx)(B.Z,{items:Se,onChange:function(t){return k(Ce,t.fileList)}},"attachments-".concat(Ce)),sn===1&&(0,u.jsx)(z,{title:Ye,description:De},"info-".concat(Ce))]})})})})]})},N=pe,ce={SenderHeader:N,Info:z,Upload:C}},487:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return ge}});var G=e(9783),d=e.n(G),S=e(97857),y=e.n(S),M=e(5574),b=e.n(M),E=e(67294),_=e(93967),I=e.n(_),v=e(56044),h=e(85893);function B(x){var pe=(0,v.wv)(),N=pe.getPrefixCls,ce=N("accordion-content-body");return(0,h.jsxs)("div",{className:ce,children:[x.headerLeft||x.headerRight?(0,h.jsxs)("div",{className:"".concat(ce,"-header"),children:[x.headerLeft,(0,h.jsx)("div",{style:{flex:1}}),x.headerRight]}):null,(0,h.jsx)("div",{className:"".concat(ce,"-body"),children:x.children})]})}var i=e(9361);function c(x){var pe=(0,v.wv)(),N=pe.theme,ce=pe.getPrefixCls,V=(N==null?void 0:N.algorithm)===i.Z.darkAlgorithm,me=ce("accordion-soft-light-title");return(0,h.jsx)("div",{className:me,style:V?{}:{color:"rgba(38, 36, 76, 0.88)"},children:x.children})}var o=e(68400),m=e.n(o),R=e(9053),s,n=(0,R.vJ)(s||(s=m()([`
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
`])),function(x){return x.theme.prefixCls},function(x){return x.theme.colorSuccess},function(x){return x.theme.prefixCls},function(x){return x.theme.colorError},function(x){return x.theme.colorTextSecondary},function(x){return x.theme.colorBgBase},function(x){return x.theme.borderRadiusLG},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.colorBorder},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.colorBgBase},function(x){return x.theme.colorText},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.colorFillTertiary},function(x){return x.theme.prefixCls},function(x){return x.theme.colorTextSecondary},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.colorFillTertiary},function(x){return x.theme.colorText},function(x){return x.theme.colorBgBase}),L=e(40443),u=e(89034),W=e(9343),q=e(36674),J=e(9838),C=e(28387),se=e(16592);function $(x){var pe=(0,v.wv)(),N=pe.getPrefixCls,ce=N("accordion-group"),V=E.useState(x.defaultOpen),me=b()(V,2),Fe=me[0],We=me[1],He=x.open!==void 0?x.open:Fe,rn=x.inline?"close":He?"open":"close",en=(0,E.useMemo)(function(){if(x.icon)return x.icon;if(x.status==="generating")return(0,h.jsx)(L.Z,{className:"".concat(ce,"-icon-loading"),spin:!0});if(x.status==="finished")return(0,h.jsx)(u.Z,{className:"".concat(ce,"-icon-success")});if(x.status==="interrupted")return(0,h.jsx)(W.Z,{});if(x.status==="error")return(0,h.jsx)(q.Z,{className:"".concat(ce,"-icon-error")})},[x.status,x.icon]),k=(0,E.useMemo)(function(){return x.steps?x.steps.map(function(ue,be){var D=be===0,ee=be===x.steps.length-1;return(0,h.jsx)($,y()(y()({},ue),{},{isFirst:D,isLast:ee}),ue.id||be)}):x.children},[x.steps,x.children]);return(0,h.jsxs)("div",{className:I()("".concat(ce),"".concat(ce,"-").concat(rn)),children:[(0,h.jsxs)("div",{className:I()("".concat(ce,"-header"),"".concat(ce,"-header-").concat(rn)),onClick:function(){return k&&x.open===void 0&&We(!Fe)},children:[en?(0,h.jsx)("div",{className:I()("".concat(ce,"-header-icon"),d()(d()(d()({},"".concat(ce,"-header-icon-line"),x.iconLine),"".concat(ce,"-header-icon-first"),x.isFirst),"".concat(ce,"-header-icon-last"),x.isLast&&rn==="close"||x.level)),children:en}):null,(0,h.jsx)("div",{children:x.title}),k&&(0,h.jsx)("div",{className:I()("".concat(ce,"-header-arrow")),children:He?(0,h.jsx)(C.Z,{}):(0,h.jsx)(J.Z,{})}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{style:{flex:1}}),x.rightChildren]})]}),(0,h.jsx)(z,{prefixCls:ce,stateOpen:He,status:rn,inline:x.inline,content:k,bodyStyle:x.bodyStyle,level:x.level})]})}var F={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function z(x){var pe=(0,E.useRef)(null);if(!x.content)return null;var N=x.prefixCls,ce=x.stateOpen,V=x.inline,me=x.bodyStyle,Fe=x.level;return(0,h.jsx)(se.ZP,{nodeRef:pe,in:ce,timeout:300,children:function(He){return(0,h.jsx)("div",{style:y()(y()(y()({},me),Fe?{marginTop:0}:{}),{},{transition:"opacity ".concat(300,"ms ease-in-out")},F[He]),className:I()("".concat(N,"-body"),"".concat(N,"-body-").concat(ce?"open":"close"),d()({},"".concat(N,"-body-inline"),V)),children:x.content})}})}function ae(x){var pe=x.level,N=pe===void 0?1:pe,ce=x.isFirst,V=ce===void 0?!0:ce,me=x.isLast,Fe=me===void 0?!0:me;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n,{}),(0,h.jsx)($,y()(y()({},x),{},{level:N,isFirst:V,isLast:Fe}))]})}ae.BodyContent=B,ae.SoftLightTitle=c;var ge=ae},14082:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return E}});var G=e(487),d=e(56044),S=e(9361),y=e(93967),M=e.n(y),b=e(85893);function E(_){var I=(0,d.wv)(),v=I.theme,h=I.getPrefixCls,B=h("accordion-deep-thinking"),i=(v==null?void 0:v.algorithm)===S.Z.darkAlgorithm,c=(0,b.jsx)("img",{style:{display:"block",width:16,height:16,filter:i?"invert(1)  brightness(100%) saturate(0%)":""},src:"https://img.alicdn.com/imgextra/i2/O1CN01QZgWRv1I4JM0BAZ9O_!!6000000000839-54-tps-56-56.apng"}),o=_.title||"Deep thinking";_.loading&&(o+="...");var m=_.loading?(0,b.jsx)(G.Z.SoftLightTitle,{children:o}):o,R=_.maxHeight?{maxHeight:_.maxHeight,overflowY:"auto"}:{},s=_.defaultOpen!==void 0?_.defaultOpen:_.autoCloseOnFinish&&!_.loading?!1:void 0;return(0,b.jsx)(G.Z,{title:m,status:_.loading?"generating":"finished",icon:_.loading?c:null,defaultOpen:s,open:_.open,bodyStyle:R,inline:!0,children:(0,b.jsx)("div",{className:M()(B,_.className),children:_.content||"..."})})}},74823:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return et}});var G=e(97857),d=e.n(G),S=e(9783),y=e.n(S),M=e(56044),b=e(68400),E=e.n(b),_=e(9053),I,v=(0,_.vJ)(I||(I=E()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.colorBgBase},function(a){return a.theme.prefixCls},function(a){return a.theme.colorBgBase},function(a){return a.theme.prefixCls},function(a){return a.theme.colorFillTertiary},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),h=e(93967),B=e.n(h),i=e(17909),c=e(59214),o=e(67294),m=e(81759),R=e(49131),s=e(17300),n=e(85893),L=(0,c.kr)(void 0);function u(a){try{var g=(0,c.Sz)(L,a);return g}catch(l){return{}}}function W(a){var g=a.children,l=(0,i.Z)(),f=(0,o.useMemo)(function(){var te=a.options.theme||{};return d()(d()({},a.options),{},{theme:d()(d()({},te),{},{narrowMode:!l.lg||te.narrowMode})})},[a.options,l.lg]),T=(0,o.useMemo)(function(){var te=f.theme.colorPrimary,re=f.theme.colorBgBase,Y=f.theme.colorTextBase,ie=f.theme.darkMode;if(te||ie){var le=(0,m.Z)((0,R.Z)({primaryHex:te,bgBaseHex:re,textBaseHex:Y,darkMode:ie}));return le}},[f.theme.colorPrimary,f.theme.colorBgBase,f.theme.colorTextBase,f.theme.darkMode]),U=(0,n.jsx)(L.Provider,{value:f,children:g});if(T){var de=f.theme.prefix||"agentscope-runtime-webui";return(0,n.jsx)(s.ZP,d()(d()({},T),{},{style:{height:"100%"},prefix:de,prefixCls:de,children:U}))}return U}var q=null,J=e(15009),C=e.n(J),se=e(99289),$=e.n(se),F=e(5574),z=e.n(F),ae=e(93164),ge=e(10325),x=e(79785),pe=(0,c.kr)({loading:!1,setLoading:function(){},getLoading:function(){return!1},disabled:!1,setDisabled:function(){},getDisabled:function(){return!1}});function N(a){var g=(0,x.Z)(!1),l=z()(g,3),f=l[0],T=l[1],U=l[2],de=(0,x.Z)(!1),te=z()(de,3),re=te[0],Y=te[1],ie=te[2];return(0,n.jsx)(pe.Provider,{value:{loading:f,setLoading:T,getLoading:U,disabled:re,setDisabled:Y,getDisabled:ie},children:a.children})}var ce=function(g){return(0,c.Sz)(pe,g)},V=e(13769),me=e.n(V),Fe=e(82484),We=e(64057),He=e(81644),rn=e(36417),en=["trigger"];function k(a,g){var l=(0,x.Z)([]),f=z()(l,3),T=f[0],U=f[1],de=f[2],te=a||{},re=te.trigger,Y=me()(te,en);if(Y!=null&&Y.customRequest){var ie=(0,n.jsx)(Fe.Z,d()(d()({fileList:T,showUploadList:!1,onChange:function(he){U(he.fileList)}},Y),{},{disabled:g==null?void 0:g.disabled,children:re?o.createElement(re,{disabled:g==null?void 0:g.disabled}):(0,n.jsx)(We.Z,{disabled:g==null?void 0:g.disabled,icon:(0,n.jsx)(He.Z,{}),bordered:!1})})),le=(0,n.jsx)(ae.Z.Header,{closable:!1,open:(T==null?void 0:T.length)>0,children:(0,n.jsx)(rn.Z,{items:T,onChange:function(he){return U(he.fileList)}})});return{fileList:T,getFileList:de,setFileList:U,uploadIconButton:ie,uploadFileListHeader:le}}else return{enabled:!1}}function ue(a){var g=(0,x.Z)(""),l=z()(g,3),f=l[0],T=l[1],U=l[2],de=(0,M.wv)().getPrefixCls("chat-anywhere-input"),te=u(function(nt){return nt.sender}),re=ce(function(nt){return nt}),Y=te||{},ie=Y.placeholder,le=ie===void 0?"":ie,je=Y.disclaimer,he=je===void 0?"":je,Te=Y.maxLength,Qe=Y.beforeSubmit,we=Qe===void 0?function(){return Promise.resolve(!0)}:Qe,ye=Y.beforeUI,Ze=Y.afterUI,ln=Y.scalable,on=ln===void 0?!0:ln,Ge=Y.attachments,pn=k(Ge,{disabled:re.disabled}),Nn=pn.getFileList,Xn=pn.setFileList,Dn=pn.uploadIconButton,ct=pn.uploadFileListHeader,_e=(0,o.useCallback)($()(C()().mark(function nt(){var ut,dt;return C()().wrap(function(Yn){for(;;)switch(Yn.prev=Yn.next){case 0:return Yn.next=2,we();case 2:if(ut=Yn.sent,ut){Yn.next=5;break}return Yn.abrupt("return");case 5:dt=((Nn==null?void 0:Nn())||[]).filter(function(vt){var lt;return(lt=vt.response)===null||lt===void 0?void 0:lt.url}),a.onSubmit({query:U(),fileList:dt}),T(""),Xn&&Xn([]);case 9:case"end":return Yn.stop()}},nt)})),[]),ft=(0,o.useCallback)(function(){a.onCancel()},[]);return(0,n.jsxs)("div",{className:de,children:[(0,n.jsxs)("div",{className:"".concat(de,"-wrapper"),children:[ye,(0,n.jsx)(ae.Z,{loading:re.loading,disabled:re.disabled,scalable:on,placeholder:le,value:f,prefix:(0,n.jsx)(n.Fragment,{children:Dn}),header:ct,onChange:T,maxLength:Te,onSubmit:_e,onCancel:ft}),Ze]}),he?(0,n.jsx)(ge.Z,{desc:he}):(0,n.jsx)("div",{className:"".concat(de,"-blank")})]})}var be=e(9146),D=e(19632),ee=e.n(D),X=(0,c.kr)({messages:[],setMessages:function(){},getMessages:function(){return[]}});function Oe(a){var g=(0,x.Z)([]),l=z()(g,3),f=l[0],T=l[1],U=l[2],de={messages:f,setMessages:T,getMessages:U};return(0,n.jsx)(X.Provider,{value:de,children:a.children})}var Ae=function(){var g=(0,c.Sz)(X,function(re){return{setMessages:re.setMessages,getMessages:re.getMessages}}),l=g.setMessages,f=g.getMessages,T=o.useCallback(function(){l([])},[]),U=o.useCallback(function(re){return f().find(function(Y){return Y.id===re})},[]),de=o.useCallback(function(re){l(function(Y){return Y.filter(function(ie){return ie.id!==re.id})})},[]),te=o.useCallback(function(re){l(function(Y){var ie=Y.findIndex(function(je){return je.id===re.id});if(ie>-1){var le=d()(d()({},Y[ie]),re);return[].concat(ee()(Y.slice(0,ie)),[le],ee()(Y.slice(ie+1)))}else return[].concat(ee()(Y),[re])})},[]);return{getMessages:f,removeAllMessages:T,getMessage:U,removeMessage:de,updateMessage:te}},Pe=e(78234),Ce=e(73935),Ye=e(2093),De=(0,c.kr)({sessions:[],setSessions:function(){},getSessions:function(){return[]},currentSessionId:void 0,setCurrentSessionId:function(){},getCurrentSessionId:function(){return""}});function ze(a){var g=u(function(je){return je.session}),l=(0,x.Z)([]),f=z()(l,3),T=f[0],U=f[1],de=f[2],te=(0,x.Z)(void 0),re=z()(te,3),Y=re[0],ie=re[1],le=re[2];return(0,Pe.Z)($()(C()().mark(function je(){var he,Te;return C()().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:return we.next=2,g.api.getSessionList();case 2:Te=we.sent,U(Te),ie(Te==null||(he=Te[0])===null||he===void 0?void 0:he.id);case 5:case"end":return we.stop()}},je)}))),(0,n.jsx)(De.Provider,{value:{sessions:T,setSessions:U,getSessions:de,currentSessionId:Y,setCurrentSessionId:ie,getCurrentSessionId:le},children:a.children})}var sn=function(){var g=(0,c.Sz)(De,function(he){return he}),l=g.setSessions,f=g.getSessions,T=g.getCurrentSessionId,U=g.setCurrentSessionId,de=g.currentSessionId,te=u(function(he){return he.session}),re=(0,c.Sz)(X,function(he){return he.setMessages}),Y=o.useCallback(function(){var he=$()(C()().mark(function Te(Qe){var we;return C()().wrap(function(Ze){for(;;)switch(Ze.prev=Ze.next){case 0:return Ze.next=2,te.api.removeSession(Qe);case 2:we=Ze.sent,re([]),U(void 0),l(we);case 6:case"end":return Ze.stop()}},Te)}));return function(Te){return he.apply(this,arguments)}}(),[]),ie=o.useCallback(function(){var he=$()(C()().mark(function Te(Qe){var we;return C()().wrap(function(Ze){for(;;)switch(Ze.prev=Ze.next){case 0:if(!Qe.id){Ze.next=6;break}return Ze.next=3,te.api.updateSession(Qe);case 3:Ze.t0=Ze.sent,Ze.next=9;break;case 6:return Ze.next=8,te.api.createSession(Qe);case 8:Ze.t0=Ze.sent;case 9:return we=Ze.t0,l(we),Ze.abrupt("return",Qe);case 12:case"end":return Ze.stop()}},Te)}));return function(Te){return he.apply(this,arguments)}}(),[]),le=o.useCallback(function(){var he=$()(C()().mark(function Te(Qe){var we;return C()().wrap(function(Ze){for(;;)switch(Ze.prev=Ze.next){case 0:return Ze.next=2,ie({name:(Qe==null?void 0:Qe.name)||"",messages:[]});case 2:return we=Ze.sent,U(we.id),re(we.messages),Ze.abrupt("return",we.id);case 6:case"end":return Ze.stop()}},Te)}));return function(Te){return he.apply(this,arguments)}}(),[]),je=o.useCallback(function(he){U(he)},[]);return(0,Ye.Z)($()(C()().mark(function he(){var Te,Qe;return C()().wrap(function(ye){for(;;)switch(ye.prev=ye.next){case 0:return Ce.flushSync(function(){re([])}),ye.next=3,te.api.getSession(de);case 3:if(ye.t2=Te=ye.sent,ye.t1=ye.t2===null,ye.t1){ye.next=7;break}ye.t1=Te===void 0;case 7:if(!ye.t1){ye.next=11;break}ye.t3=void 0,ye.next=12;break;case 11:ye.t3=Te.messages;case 12:if(ye.t0=ye.t3,ye.t0){ye.next=15;break}ye.t0=[];case 15:Qe=ye.t0,re(Qe);case 17:case"end":return ye.stop()}},he)})),[de]),{changeCurrentSessionId:je,getCurrentSessionId:T,getSessions:f,removeSession:Y,updateSession:ie,createSession:le}},Xe=e(68997),Se,xn=(0,_.vJ)(Se||(Se=E()([`
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
`])),function(a){return a.theme.prefixCls},function(a){var g=a.theme;return g.colorText},function(a){var g=a.theme;return g.colorTextSecondary},function(a){var g=a.theme;return g.colorFillQuaternary},function(a){var g=a.theme;return g.colorText},function(a){var g=a.theme;return g.colorFillTertiary}),t=e(38850),Ee=["render"];function Ie(a){var g=u(function(Y){return Y.welcome}),l=(0,M.wv)().getPrefixCls("chat-anywhere-welcome-default");if(!g)return null;var f=g.render,T=me()(g,Ee);if(f)return g.render({greeting:g.greeting,avatar:g.avatar,description:g.description,prompts:g.prompts,onSubmit:a.onSubmit});var U=T.greeting,de=T.avatar,te=T.prompts,re=T.description;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(xn,{}),(0,n.jsxs)("div",{className:l,children:[de&&(0,n.jsx)(Xe.Z,{src:de,shape:"square",size:64}),U&&(0,n.jsx)("div",{className:"".concat(l,"-greeting"),children:U}),re&&(0,n.jsx)("div",{className:"".concat(l,"-description"),children:re}),(te==null?void 0:te.length)>0&&(0,n.jsx)("div",{className:"".concat(l,"-prompts"),children:te.map(function(Y){var ie=typeof Y=="string"?{label:Y,value:Y}:d()(d()({},Y),{},{label:Y.label||Y.value,value:Y.value});return(0,n.jsx)(Me,{prompt:ie,onSubmit:a.onSubmit},ie.value)})})]})]})}function Me(a){var g=(0,M.wv)().getPrefixCls("chat-anywhere-welcome-default");return(0,n.jsxs)("div",{className:"".concat(g,"-prompt"),onClick:function(){return a.onSubmit({query:a.prompt.value})},children:[(0,n.jsx)("img",{className:"".concat(g,"-prompt-icon"),src:"https://img.alicdn.com/imgextra/i3/O1CN01822qqr1PVyaK7MYtn_!!6000000001847-2-tps-40-40.png",alt:""}),(0,n.jsx)("span",{className:"".concat(g,"-prompt-label"),children:a.prompt.label}),(0,n.jsx)(t.Z,{})]})}function fe(a){var g=(0,c.Sz)(pe,function(U){return U.loading}),l=(0,c.Sz)(X,function(U){return U.messages}),f=(0,M.wv)().getPrefixCls("chat-anywhere-message-list"),T=(0,c.Sz)(De,function(U){return U.currentSessionId});return l.length===0?(0,n.jsx)("div",{className:B()(f,"".concat(f,"-welcome")),children:(0,n.jsx)(Ie,{onSubmit:a.onSubmit})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(be.Z.List,{smooth:g,classNames:{wrapper:f},items:l},T)})}var Ve,an=(0,_.vJ)(Ve||(Ve=E()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),cn=e(32116);function qe(a){(0,o.useEffect)(function(){return document.addEventListener(a.type,a.callback),function(){document.removeEventListener(a.type,a.callback)}},[])}var Le=function(g){var l=g.type,f=g.data;document.dispatchEvent(new CustomEvent(l,{detail:f}))},p=e(88773),ne=e(12444),oe=e.n(ne),P=e(72004),Q=e.n(P),r=function(a){return a.Created="created",a.InProgress="in_progress",a.Completed="completed",a.Canceled="canceled",a.Failed="failed",a.Rejected="rejected",a.Unknown="unknown",a}({}),O=function(a){return a.ASSISTANT="assistant",a.USER="user",a.SYSTEM="system",a}({}),j=function(a){return a.MESSAGE="message",a.REASONING="reasoning",a.PLUGIN_CALL="plugin_call",a.PLUGIN_CALL_OUTPUT="plugin_call_output",a.FUNCTION_CALL="function_call",a.FUNCTION_CALL_OUTPUT="function_call_output",a.COMPONENT_CALL="component_call",a.COMPONENT_CALL_OUTPUT="component_call_output",a.MCP_LIST_TOOLS="mcp_list_tools",a.MCP_APPROVAL_REQUEST="mcp_approval_request",a.MCP_CALL="mcp_call",a.MCP_CALL_OUTPUT="mcp_call_output",a.MCP_APPROVAL_RESPONSE="mcp_approval_response",a.HEARTBEAT="heartbeat",a.ERROR="error",a}({}),A=function(a){return a.TEXT="text",a.DATA="data",a.IMAGE="image",a.AUDIO="audio",a.FILE="file",a}({}),w=function(){function a(g){var l,f=this;oe()(this,a),y()(this,"data",void 0);var T=[this.buildTextContent(g.query)];(l=g.fileList)!==null&&l!==void 0&&l.length&&g.fileList.forEach(function(U){f.isImageFile(U)?T.push(f.buildImageContent(U)):T.push(f.buildFileContent(U))}),this.data={input:[{role:"user",type:j.MESSAGE,content:T}]}}return Q()(a,[{key:"isImageFile",value:function(l){return l.type.indexOf("image/")===0}},{key:"buildImageContent",value:function(l){var f;return{type:A.IMAGE,image_url:(f=l.response)===null||f===void 0?void 0:f.url,status:r.Created}}},{key:"buildTextContent",value:function(l){return{type:A.TEXT,text:l,status:r.Created}}},{key:"buildFileContent",value:function(l){var f;return{type:A.FILE,file_url:(f=l.response)===null||f===void 0?void 0:f.url,file_name:l.name,file_size:l.size,status:r.Created}}}],[{key:"getHistoryMessages",value:function(l){return l.reduce(function(f,T){var U;return(U=T.cards)!==null&&U!==void 0&&U.length?f.concat(T.cards[0].data.input||T.cards[0].data.output):f},[])}}]),a}(),H=w;function K(a){var g=a.currentQARef,l=Ae(),f=l.updateMessage,T=l.getMessages,U=l.removeMessage,de=(0,o.useCallback)(function(ie){return g.current.abortController=new AbortController,g.current.request={id:(0,p.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new H(ie).data}]},Ce.flushSync(function(){f(g.current.request)}),g.current.request},[g,f]),te=(0,o.useCallback)(function(){return g.current.response={id:(0,p.Z)(),role:"assistant",cards:[],msgStatus:"generating"},f(g.current.response),g.current.response},[g,f]),re=(0,o.useCallback)(function(){return H.getHistoryMessages(T())},[T]),Y=(0,o.useCallback)(function(ie){Ce.flushSync(function(){U({id:ie})})},[U]);return{createRequestMessage:de,createResponseMessage:te,getHistoryMessages:re,updateMessage:f,removeMessageById:Y,getMessages:T}}var xe=e(44987),Be=e.n(xe),Ne=e(7354),un=e(64599),tn=e.n(un),nn=e(93513),ve=function(){function a(g){var l=g.id,f=g.status,T=g.created_at;oe()(this,a),y()(this,"data",void 0),this.data={id:l,output:[],object:"response",status:f||r.Created,created_at:T||Date.now()}}return Q()(a,[{key:"handleResponse",value:function(l){this.data=(0,nn.produce)(this.data,function(f){l.output||(l.output=[]),Object.assign(f,l)})}},{key:"handleMessage",value:function(l){this.data=(0,nn.produce)(this.data,function(f){f.output||(f.output=[]);var T=f.output.findIndex(function(de){return de.id===l.id});if(T>=0){var U=f.output[T].content;Object.assign(f.output[T],l),(!l.content||l.content.length===0)&&(f.output[T].content=U)}else f.output.push(l)})}},{key:"handleContent",value:function(l){this.data=(0,nn.produce)(this.data,function(f){var T=f.output.find(function(de){return de.id===l.msg_id});if(!T){console.warn("Message not found for content:",l.msg_id);return}if(T.content||(T.content=[]),l.delta){var U=T.content[T.content.length-1];U&&U.delta?l.type===A.TEXT&&U.type===A.TEXT?U.text+=l.text:l.type===A.IMAGE?U.image_url=l.image_url:(l.type,A.DATA):T.content.push(l)}else T.content.length>0?Object.assign(T.content[T.content.length-1],l):T.content.push(l)})}},{key:"handleError",value:function(l){this.data=(0,nn.produce)(this.data,function(f){f.status=r.Failed,f.output.push({status:r.Failed,type:j.ERROR,content:[],id:(0,p.Z)(),role:"assistant",code:l.code,message:typeof l.message=="string"?l.message:JSON.stringify(l.message)})})}},{key:"handle",value:function(l){if(l.object==="response")this.handleResponse(l);else if(l.object==="message"){if(l.type===j.HEARTBEAT)return this.data;this.handleMessage(l)}else l.object==="content"?this.handleContent(l):this.handleError(l);return this.data}},{key:"cancel",value:function(){return this.data=(0,nn.produce)(this.data,function(l){a.maybeGenerating(l)&&(l.status=r.Canceled),l.output.forEach(function(f){a.maybeGenerating(f)&&(f.status=r.Canceled,f.content.forEach(function(T){a.maybeGenerating(T)&&(T.status=r.Canceled)}))})}),this.data}}],[{key:"mergeToolMessages",value:function(l){var f=new Map,T=[],U=tn()(l),de;try{var te=function(){var Y,ie,le=de.value;if(a.maybeToolInput(le)&&(Y=le.content)!==null&&Y!==void 0&&Y.length){var je=le.content[0],he=je.data.call_id||je.data.name;f.set(he,je),T.push(le)}else if(a.maybeToolOutput(le)&&(ie=le.content)!==null&&ie!==void 0&&ie.length){var Te=le.content[0],Qe=Te.data.call_id||Te.data.name,we=f.get(Qe);we&&(T=T.map(function(ye){if(!a.maybeToolInput(ye))return ye;var Ze=ye.content[0],ln=Ze.data.call_id||Ze.data.name;return ln===Qe?d()(d()({},le),{},{content:[].concat(ee()(ye.content),[Te])}):ye}))}else T.push(le)};for(U.s();!(de=U.n()).done;)te()}catch(re){U.e(re)}finally{U.f()}return T}},{key:"maybeToolOutput",value:function(l){return[j.FUNCTION_CALL_OUTPUT,j.PLUGIN_CALL_OUTPUT,j.COMPONENT_CALL_OUTPUT,j.MCP_CALL_OUTPUT].includes(l.type)}},{key:"maybeToolInput",value:function(l){return[j.FUNCTION_CALL,j.PLUGIN_CALL,j.COMPONENT_CALL,j.MCP_CALL].includes(l.type)}},{key:"maybeGenerating",value:function(l){return[r.InProgress,r.Created].includes(l.status)}},{key:"maybeDone",value:function(l){return[r.Completed,r.Canceled,r.Failed].includes(l.status)}}]),a}(),$e=ve;function hn(a){var g=a.currentQARef,l=a.updateMessage,f=a.getCurrentSessionId,T=a.onFinish,U=u(function(Y){return Y.api}),de=(0,o.useRef)(U);(0,o.useEffect)(function(){de.current=U},[U]);var te=(0,o.useCallback)(function(){var Y=$()(C()().mark(function ie(le){var je,he,Te,Qe,we,ye,Ze,ln;return C()().wrap(function(Ge){for(;;)switch(Ge.prev=Ge.next){case 0:je=new $e({id:"",status:r.Created,created_at:0}),he=!1,Te=!1,Ge.prev=3,we=Be()(le);case 5:return Ge.next=7,we.next();case 7:if(!(he=!(ye=Ge.sent).done)){Ge.next=17;break}return Ze=ye.value,ln=je.handle(Ze),g.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:ln}],l(g.current.response),Ge.next=14,(0,cn.Z)(100);case 14:he=!1,Ge.next=5;break;case 17:Ge.next=23;break;case 19:Ge.prev=19,Ge.t0=Ge.catch(3),Te=!0,Qe=Ge.t0;case 23:if(Ge.prev=23,Ge.prev=24,!(he&&we.return!=null)){Ge.next=28;break}return Ge.next=28,we.return();case 28:if(Ge.prev=28,!Te){Ge.next=31;break}throw Qe;case 31:return Ge.finish(28);case 32:return Ge.finish(23);case 33:case"end":return Ge.stop()}},ie,null,[[3,19,23,33],[24,,28,32]])}));return function(ie){return Y.apply(this,arguments)}}(),[]),re=(0,o.useCallback)(function(){var Y=$()(C()().mark(function ie(le){var je,he,Te,Qe,we,ye,Ze,ln,on,Ge,pn,Nn,Xn,Dn;return C()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:if(je=de.current,_e.prev=1,!je.fetch){_e.next=8;break}return _e.next=5,je.fetch({input:le});case 5:_e.t0=_e.sent,_e.next=11;break;case 8:return _e.next=10,fetch(je.baseURL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(je.token||"")},body:JSON.stringify({input:le.slice(-1),session_id:f(),stream:!0})});case 10:_e.t0=_e.sent;case 11:he=_e.t0,_e.next=16;break;case 14:_e.prev=14,_e.t1=_e.catch(1);case 16:if(!(he&&he.body&&he.ok)){_e.next=61;break}Te=new $e({id:"",status:r.Created,created_at:0}),_e.prev=18,Qe=!1,we=!1,_e.prev=21,Ze=Be()((0,Ne.Z)({readableStream:he.body}));case 23:return _e.next=25,Ze.next();case 25:if(!(Qe=!(ln=_e.sent).done)){_e.next=40;break}if(on=ln.value,((Ge=g.current.response)===null||Ge===void 0?void 0:Ge.msgStatus)!=="interrupted"){_e.next=32;break}return(Nn=g.current.abortController)===null||Nn===void 0||Nn.abort(),g.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Te.cancel()}],l(g.current.response),_e.abrupt("break",40);case 32:if(Xn=JSON.parse(on.data),Dn=Te.handle(Xn),!(Dn.status!==r.Failed&&!((pn=Dn.output)!==null&&pn!==void 0&&(pn=pn[0])!==null&&pn!==void 0&&(pn=pn.content)!==null&&pn!==void 0&&pn.length))){_e.next=36;break}return _e.abrupt("continue",37);case 36:g.current.response&&(g.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Dn}],Dn.status===r.Completed||Dn.status===r.Failed?T():l(g.current.response));case 37:Qe=!1,_e.next=23;break;case 40:_e.next=46;break;case 42:_e.prev=42,_e.t2=_e.catch(21),we=!0,ye=_e.t2;case 46:if(_e.prev=46,_e.prev=47,!(Qe&&Ze.return!=null)){_e.next=51;break}return _e.next=51,Ze.return();case 51:if(_e.prev=51,!we){_e.next=54;break}throw ye;case 54:return _e.finish(51);case 55:return _e.finish(46);case 56:_e.next=61;break;case 58:_e.prev=58,_e.t3=_e.catch(18),console.error(_e.t3);case 61:case"end":return _e.stop()}},ie,null,[[1,14],[18,58],[21,42,46,56],[47,,51,55]])}));return function(ie){return Y.apply(this,arguments)}}(),[f,g,l,T]);return{request:re,mockRequest:te}}function jn(){var a=sn(),g=a.createSession,l=a.updateSession,f=a.getCurrentSessionId,T=(0,o.useCallback)(function(){var te=$()(C()().mark(function re(Y){return C()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:if(f()){le.next=3;break}return le.next=3,g({name:Y});case 3:case"end":return le.stop()}},re)}));return function(re){return te.apply(this,arguments)}}(),[f,g]),U=(0,o.useCallback)(function(){var te=$()(C()().mark(function re(Y,ie){return C()().wrap(function(je){for(;;)switch(je.prev=je.next){case 0:if(ie.length!==0){je.next=3;break}return je.next=3,l({id:f(),name:Y});case 3:case"end":return je.stop()}},re)}));return function(re,Y){return te.apply(this,arguments)}}(),[f,l]),de=(0,o.useCallback)(function(){var te=$()(C()().mark(function re(Y){return C()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:return le.next=2,l({id:f(),messages:Y});case 2:case"end":return le.stop()}},re)}));return function(re){return te.apply(this,arguments)}}(),[f,l]);return{ensureSession:T,updateSessionName:U,syncSessionMessages:de,getCurrentSessionId:f}}function bn(){var a=(0,c.Sz)(pe,function(le){return le.setLoading}),g=(0,c.Sz)(De,function(le){return le.currentSessionId}),l=(0,o.useRef)({}),f=K({currentQARef:l}),T=jn(),U=(0,o.useCallback)(function(){var le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished";l.current.response&&(l.current.response.msgStatus=le,a(!1),Ce.flushSync(function(){f.updateMessage(l.current.response)}),T.syncSessionMessages(f.getMessages()))},[a,f,T]),de=hn({currentQARef:l,updateMessage:f.updateMessage,getCurrentSessionId:T.getCurrentSessionId,onFinish:function(){return U("finished")}}),te=de.request,re=(0,o.useCallback)(function(){var le=$()(C()().mark(function je(he){var Te,Qe;return C()().wrap(function(ye){for(;;)switch(ye.prev=ye.next){case 0:return ye.next=2,T.ensureSession(he.query);case 2:if(Te=f.getMessages(),!T.getCurrentSessionId()){ye.next=6;break}return ye.next=6,T.updateSessionName(he.query,Te);case 6:return f.createRequestMessage(he),a(!0),ye.next=10,(0,cn.Z)(100);case 10:return f.createResponseMessage(),Qe=f.getHistoryMessages(),ye.next=14,T.syncSessionMessages(f.getMessages());case 14:return ye.next=16,te(Qe);case 16:case"end":return ye.stop()}},je)}));return function(je){return le.apply(this,arguments)}}(),[f,T,te]),Y=(0,o.useCallback)(function(){U("interrupted")},[U]),ie=(0,o.useCallback)(function(){var le=$()(C()().mark(function je(he){var Te;return C()().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:return a(!0),f.removeMessageById(he),l.current.abortController=new AbortController,f.createResponseMessage(),Te=f.getHistoryMessages(),we.next=7,te(Te);case 7:case"end":return we.stop()}},je)}));return function(je){return le.apply(this,arguments)}}(),[f,te]);return(0,o.useEffect)(function(){l.current={request:void 0,response:void 0,abortController:void 0}},[g]),qe({type:"handleReplace",callback:function(){var le=$()(C()().mark(function he(Te){return C()().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:return we.next=2,ie(Te.detail.id);case 2:case"end":return we.stop()}},he)}));function je(he){return le.apply(this,arguments)}return je}()}),{handleSubmit:re,handleCancel:Y}}function On(){var a=(0,M.wv)().getPrefixCls("chat-anywhere-chat"),g=bn(),l=g.handleSubmit,f=g.handleCancel;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(an,{}),(0,n.jsxs)("div",{className:a,children:[(0,n.jsx)(fe,{onSubmit:l}),(0,n.jsx)(ue,{onCancel:f,onSubmit:l})]})]})}var Pn=e(21403),Cn=e(67392),ke=e(13660),Ue=e(12624),dn=e(50287),vn=e(9368),Sn=(0,o.createContext)({collapsed:!1,toggleCollapsed:function(){}});function Wn(a){var g=(0,o.useState)(!1),l=z()(g,2),f=l[0],T=l[1],U=(0,o.useCallback)(function(){T(function(de){return!de})},[]);return(0,n.jsx)(Sn.Provider,{value:{collapsed:f,toggleCollapsed:U},children:a.children})}function Hn(){var a=(0,o.useContext)(Sn),g=a.collapsed,l=(0,M.wv)().getPrefixCls("chat-anywhere-sessions"),f=u(function(T){var U;return(U=T.theme)===null||U===void 0?void 0:U.leftHeader})||{};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"".concat(l),children:[o.isValidElement(f)?f:(0,n.jsx)(kn,{}),(0,n.jsxs)("div",{className:"".concat(l,"-content"),style:{display:g?"none":"flex"},children:[(0,n.jsx)($n,{}),(0,n.jsx)(Bn,{})]})]})})}function kn(a){var g=a.className,l=u(function(he){var Te;return(Te=he.theme)===null||Te===void 0?void 0:Te.leftHeader})||{},f=(0,M.wv)().getPrefixCls("chat-anywhere-sessions"),T=(0,o.useContext)(Sn),U=T.toggleCollapsed,de=T.collapsed,te=u(function(he){return he.session.multiple}),re=l,Y=re.logo,ie=Y===void 0?"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png":Y,le=re.title,je=le===void 0?"Runtime WebUI":le;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:B()("".concat(f,"-header"),g),children:[(0,n.jsxs)("div",{className:"".concat(f,"-header-left"),children:[(0,n.jsx)("img",{src:ie,alt:"logo",height:32}),(0,n.jsx)("span",{children:je})]}),te&&(0,n.jsx)(We.Z,{className:"".concat(f,"-header-collapse"),bordered:!1,icon:de?(0,n.jsx)(ke.Z,{}):(0,n.jsx)(Cn.Z,{}),onClick:U})]})})}function $n(a){var g=(0,c.Sz)(pe,function(te){return te.loading}),l=sn(),f=l.createSession,T=(0,M.wv)().getPrefixCls("chat-anywhere-sessions"),U=(0,o.useContext)(Sn),de=U.toggleCollapsed;return(0,n.jsx)("div",{className:"".concat(T,"-adder"),style:a.style,children:(0,n.jsx)(Pn.Z,{block:!0,type:"primary",icon:(0,n.jsx)(Ue.Z,{}),disabled:g,onClick:$()(C()().mark(function te(){return C()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,f();case 2:a.narrowMode&&de();case 3:case"end":return Y.stop()}},te)})),children:"New Chat"})})}function Bn(a){var g=(0,M.wv)().getPrefixCls("chat-anywhere-sessions"),l=(0,c.Sz)(De,function(ie){return ie.sessions}),f=sn(),T=f.changeCurrentSessionId,U=f.removeSession,de=(0,c.Sz)(De,function(ie){return ie.currentSessionId}),te=(0,o.useContext)(Sn),re=te.toggleCollapsed,Y=(0,o.useMemo)(function(){return l.map(function(ie){return{key:ie.id,label:ie.name||"New Chat"}})},[l]);return(0,n.jsx)("div",{className:"".concat(g,"-list"),style:a.style,children:(0,n.jsx)(vn.Z,{items:Y,menu:[{key:"delete",icon:(0,n.jsx)(dn.Z,{}),danger:!0,onClick:function(){var ie=$()(C()().mark(function je(he){return C()().wrap(function(Qe){for(;;)switch(Qe.prev=Qe.next){case 0:return Qe.next=2,U({id:he.key});case 2:return Qe.abrupt("return",Qe.sent);case 3:case"end":return Qe.stop()}},je)}));function le(je){return ie.apply(this,arguments)}return le}()}],activeKey:de,onActiveChange:function(le){T(le),a.narrowMode&&re()}})})}var zn,Je=(0,_.vJ)(zn||(zn=E()([`

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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),Re=e(85265);function mn(){var a=(0,M.wv)().getPrefixCls("chat-anywhere"),g=u(function(te){return te.theme}),l=g.narrowMode,f=g.rightHeader,T=(0,o.useContext)(Sn),U=T.toggleCollapsed,de=T.collapsed;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Je,{}),(0,n.jsxs)("div",{className:"".concat(a,"-layout-right-header"),children:[l?(0,n.jsx)(kn,{className:"".concat(a,"-default-header-inner")}):null,f&&(0,n.jsx)("div",{className:"".concat(a,"-default-header-right"),children:f})]}),l&&(0,n.jsx)(Re.Z,{width:"80vw",styles:{body:{padding:0}},open:de,onClose:U,title:null,closable:!1,placement:"left",children:(0,n.jsxs)("div",{className:"".concat(a,"-sessions"),children:[(0,n.jsx)(Bn,{narrowMode:!0}),(0,n.jsx)($n,{narrowMode:!0})]})})]})}function fn(a,g){var l=Ae(),f=(0,c.Sz)(pe,function(T){return T.setDisabled});return o.useImperativeHandle(g,function(){return{messages:l,input:{setDisabled:f}}},[]),null}var Jn=(0,o.forwardRef)(fn);function yn(a,g){var l=a.className,f=(0,M.wv)().getPrefixCls("chat-anywhere-layout"),T=u(function(ie){return ie.theme.narrowMode}),U=u(function(ie){return{session:ie.session}}),de=U.session,te=(0,o.useContext)(Sn),re=te.collapsed,Y=!T&&de&&de.multiple;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{}),(0,n.jsxs)("div",{className:B()("".concat(f),l),children:[Y&&(0,n.jsx)("div",{className:B()("".concat(f,"-left"),y()({},"".concat(f,"-left-collapsed"),re)),children:(0,n.jsx)(Hn,{})}),(0,n.jsxs)("div",{className:B()("".concat(f,"-right"),y()({},"".concat(f,"-right-has-header"),!0)),children:[(0,n.jsx)(mn,{}),(0,n.jsx)(On,{})]})]}),(0,n.jsx)(Jn,{ref:g})]})}var _n=(0,o.forwardRef)(yn);function Qn(a){var g=(0,o.useMemo)(function(){return a.data.input[0].content.reduce(function(l,f){if(f.type===A.TEXT&&l.push({code:"Text",data:{content:f.text,raw:!0}}),f.type===A.IMAGE){var T=l.find(function(de){return de.code==="Image"});T?T.data.push({url:f.image_url}):l.push({code:"Images",data:[{url:f.image_url}]})}if(f.type===A.FILE){var U=l.find(function(de){return de.code==="Files"});U?U.data.push({url:f.file_url,name:f.file_name,size:f.file_size}):l.push({code:"Files",data:[{url:f.file_url,name:f.file_name,size:f.file_size}]})}return l},[])},[a.data.input]);return(0,n.jsx)(be.Z,{role:"user",cards:g})}var Un=e(82679),wn=o.memo(function(a){var g,l=a.data;return(g=l.content)!==null&&g!==void 0&&g.length?(0,n.jsx)(n.Fragment,{children:l.content.map(function(f,T){switch(f.type){case A.TEXT:return(0,n.jsx)(Un.Z,{content:f.text,cursor:f.status===r.InProgress},T);default:return(0,n.jsx)("div",{children:JSON.stringify(f)},T)}})}):null}),An=wn,Zn=e(85786),Kn=o.memo(function(a){var g,l,f=a.data,T=u(function(he){return he.customToolRenderConfig})||{};if(!((g=f.content)!==null&&g!==void 0&&g.length))return null;var U=f.content,de=!((l=U[1])!==null&&l!==void 0&&l.data)||f.status===r.InProgress,te=U[0].data.name,re="".concat(U[0].data.server_label?U[0].data.server_label+" / ":""),Y="".concat(re).concat(te);if(T[te]){var ie=T[te];return(0,n.jsx)(ie,{data:f})}else{var le,je;return(0,n.jsx)(Zn.Z,{loading:de,defaultOpen:!1,title:Y,input:(le=U[0])===null||le===void 0||(le=le.data)===null||le===void 0?void 0:le.arguments,output:(je=U[1])===null||je===void 0||(je=je.data)===null||je===void 0?void 0:je.output})}}),Ln=Kn,In=e(79323);function Gn(a){var g,l=a.data;if(l.status===r.Created)return null;var f=l==null||(g=l.content)===null||g===void 0?void 0:g[0];return f?(0,n.jsx)(In.Z,{loading:l.status===r.InProgress,title:"Thinking",content:f.text}):null}function Mn(a){var g=a.data;return(0,n.jsx)(be.Z.Interrupted,{type:"error",title:g.code,desc:g.message})}var gn=e(89698),Tn=e(60227),En=e(82286),Rn=e(67055),Vn=e(39693),tt=e.n(Vn);function at(a){return!a.input_tokens||!a.output_tokens?null:(0,n.jsx)(be.Z.Footer.Count,{data:[["Input",a.input_tokens],["Output",a.output_tokens]]})}function st(a){var g,l,f,T=u(function(te){var re;return(re=te.actions)===null||re===void 0?void 0:re.list})||[{icon:(0,n.jsx)(gn.Z,{}),onClick:function(){(0,En.JG)(JSON.stringify(a.data))}}],U=(g=u(function(te){var re;return(re=te.actions)===null||re===void 0?void 0:re.replace}))!==null&&g!==void 0?g:!0,de=tt()([].concat(ee()(T.map(function(te){var re=te;return te.render&&(re.children=o.createElement(te.render,{data:a})),d()(d()({},re),{},{onClick:function(){var ie;(ie=te.onClick)===null||ie===void 0||ie.call(te,a)}})})),[U&&a.isLast?{icon:(0,n.jsx)(Rn.Z,{title:"\u91CD\u65B0\u751F\u6210",children:(0,n.jsx)(Tn.Z,{})}),onClick:function(){Le({type:"handleReplace",data:a})}}:null]));return $e.maybeDone(a.data)?(0,n.jsx)(be.Z.Footer,{left:(0,n.jsx)(be.Z.Footer.Actions,{data:de}),right:(0,n.jsx)(at,{input_tokens:(l=a.data.usage)===null||l===void 0?void 0:l.input_tokens,output_tokens:(f=a.data.usage)===null||f===void 0?void 0:f.output_tokens})}):null}function qn(a){var g=(0,o.useMemo)(function(){return $e.mergeToolMessages(a.data.output)},[a.data.output]);return!(g!=null&&g.length)&&$e.maybeGenerating(a.data)?(0,n.jsx)(be.Z.Spin,{}):(0,n.jsxs)(n.Fragment,{children:[g.map(function(l){switch(l.type){case j.MESSAGE:return(0,n.jsx)(An,{data:l},l.id);case j.PLUGIN_CALL:case j.PLUGIN_CALL_OUTPUT:case j.MCP_CALL:case j.MCP_CALL_OUTPUT:return(0,n.jsx)(Ln,{data:l},l.id);case j.REASONING:return(0,n.jsx)(Gn,{data:l},l.id);case j.ERROR:return(0,n.jsx)(Mn,{data:l},l.id);case j.HEARTBEAT:return null;default:return console.warn("[WIP] Unknown message type: ".concat(l.type)),null}}),a.data.error&&(0,n.jsx)(Mn,{data:a.data.error}),(0,n.jsx)(st,d()({},a))]})}var ot=e(83962);function rt(a){var g=a.options,l=a.cards,f=a.children,T=[[W,{options:g}],[ot.xy,{cardConfig:l}],[ze,{}],[Oe,{}],[N,{}],[Wn,{}]];return T.reduceRight(function(U,de){var te=z()(de,2),re=te[0],Y=te[1];return(0,n.jsx)(re,d()(d()({},Y),{},{children:U}))},f)}var Fn=rt;function it(a,g){var l=a.options,f=l===void 0?{}:l,T=(0,o.useMemo)(function(){var U=d()({AgentScopeRuntimeRequestCard:Qn,AgentScopeRuntimeResponseCard:qn},f.cards);return U},[f.cards]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Fn,{options:f,cards:T,children:(0,n.jsx)(_n,{ref:g})})})}var et=(0,o.forwardRef)(it)},57551:function(){},22863:function(Ke,Z,e){"use strict";e.r(Z);var G=e(57551),d=e.n(G),S={};for(var y in G)y!=="default"&&(S[y]=function(M){return G[M]}.bind(0,y));e.d(Z,S)},36417:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return xn}});var G=e(9783),d=e.n(G),S=e(97857),y=e.n(S),M=e(5574),b=e.n(M),E=e(13769),_=e.n(E),I=e(93967),v=e.n(I),h=e(67294),B=e(56044),i=e(56790),c=e(73935),o=h.createContext(null),m=e(85893);function R(t){var Ee=t.getDropContainer,Ie=t.className,Me=t.prefixCls,fe=t.children,Ve=h.useContext(o),an=Ve.disabled,cn=h.useState(),qe=b()(cn,2),Le=qe[0],p=qe[1],ne=h.useState(null),oe=b()(ne,2),P=oe[0],Q=oe[1];h.useEffect(function(){var j=Ee==null?void 0:Ee();Le!==j&&p(j)},[Ee]),h.useEffect(function(){if(Le){var j=function(){Q(!0)},A=function(xe){xe.preventDefault()},w=function(xe){xe.relatedTarget||Q(!1)},H=function(xe){Q(!1),xe.preventDefault()};return document.addEventListener("dragenter",j),document.addEventListener("dragover",A),document.addEventListener("dragleave",w),document.addEventListener("drop",H),function(){document.removeEventListener("dragenter",j),document.removeEventListener("dragover",A),document.removeEventListener("dragleave",w),document.removeEventListener("drop",H)}}},[!!Le]);var r=Ee&&Le&&!an;if(!r)return null;var O="".concat(Me,"-drop-area");return(0,c.createPortal)((0,m.jsx)("div",{className:v()(O,Ie,d()({},"".concat(O,"-on-body"),Le.tagName==="BODY")),style:{display:P?"block":"none"},children:fe}),Le)}var s=e(53033),n=e(52861),L=e(83622),u=e(29372),W=e(64599),q=e.n(W),J=function(Ee){return Ee.indexOf("image/")===0},C=200;function se(t){return new Promise(function(Ee){if(!t||!t.type||!J(t.type)){Ee("");return}var Ie=new Image;if(Ie.onload=function(){var Ve=Ie.width,an=Ie.height,cn=Ve/an,qe=cn>1?C:C*cn,Le=cn>1?C/cn:C,p=document.createElement("canvas");p.width=qe,p.height=Le,p.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(qe,"px; height: ").concat(Le,"px; z-index: 9999; display: none;"),document.body.appendChild(p);var ne=p.getContext("2d");ne.drawImage(Ie,0,0,qe,Le);var oe=p.toDataURL();document.body.removeChild(p),window.URL.revokeObjectURL(Ie.src),Ee(oe)},Ie.crossOrigin="anonymous",t.type.startsWith("image/svg+xml")){var Me=new FileReader;Me.onload=function(){Me.result&&typeof Me.result=="string"&&(Ie.src=Me.result)},Me.readAsDataURL(t)}else if(t.type.startsWith("image/gif")){var fe=new FileReader;fe.onload=function(){fe.result&&Ee(fe.result)},fe.readAsDataURL(t)}else Ie.src=window.URL.createObjectURL(t)})}var $=e(9361),F=e(38703);function z(t){var Ee=t.percent,Ie=$.Z.useToken(),Me=Ie.token;return(0,m.jsx)(F.Z,{type:"circle",percent:Ee,size:40,strokeColor:"#FFF",trailColor:"rgba(255, 255, 255, 0.3)",format:function(Ve){return(0,m.jsxs)("span",{style:{color:"#FFF"},children:[(Ve||0).toFixed(0),"%"]})}})}var ae=e(68400),ge=e.n(ae),x=e(9053),pe,N=(0,x.vJ)(pe||(pe=ge()([`
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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.colorBgContainer},function(t){return t.theme.lineWidth},function(t){return t.theme.colorBorderSecondary},function(t){return t.theme.paddingXS},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.fontSize},function(t){return t.theme.colorText},function(t){return t.theme.prefixCls},function(t){return t.theme.colorTextQuaternary},function(t){return t.theme.fontSizeSM},function(t){return t.theme.prefixCls},function(t){return t.theme.opacityLoading},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.lineWidth},function(t){return t.theme.prefixCls},function(t){return t.theme.paddingXXS},function(t){return t.theme.prefixCls},function(t){return t.theme.colorText},function(t){return t.theme.colorBgContainer},function(t){return t.theme.lineWidth},function(t){return t.theme.colorBorder},function(t){return t.theme.colorError},function(t){return t.theme.prefixCls},function(t){return t.theme.colorError},function(t){return t.theme.paddingSM},function(t){return t.theme.prefixCls},function(t){return t.theme.colorPrimary}),ce=e(89102),V="\xA0",me="#8c8c8c",Fe=["png","jpg","jpeg","gif","bmp","webp","svg"],We=function(Ee){var Ie=Ee.url;return(0,m.jsx)("img",{src:Ie,width:32,height:32})},He=[{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01cVtZXI23tPVhiZoPJ_!!6000000007313-55-tps-40-40.svg"}),color:"#22b35e",ext:["xlsx","xls"]},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01uDnnuz1XMNEjgFMul_!!6000000002909-55-tps-40-40.svg"}),color:me,ext:Fe},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01PaXli01DDPAO68fsI_!!6000000000182-55-tps-40-40.svg"}),color:me,ext:["md","mdx"]},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01mB5PzD27fuIWK661W_!!6000000007825-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["pdf"]},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01a8j7Jv1nW1QyFme7k_!!6000000005096-55-tps-40-40.svg"}),color:"#ff6e31",ext:["ppt","pptx"]},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01XaNi8P1UkhQXoQdUL_!!6000000002556-55-tps-40-40.svg"}),color:"#1677ff",ext:["doc","docx"]},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),color:"#fab714",ext:["zip","rar","7z","tar","gz"]},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01zTTe0q1Xg4GkZgJol_!!6000000002952-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["mp4","avi","mov","wmv","flv","mkv"]},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01qOBdXG1UpHO6f3Vvc_!!6000000002566-55-tps-40-40.svg"}),color:"#8c8c8c",ext:["mp3","wav","flac","ape","aac","ogg"]}];function rn(t,Ee){return Ee.some(function(Ie){return t.toLowerCase()===".".concat(Ie)})}function en(t){for(var Ee=t,Ie=["B","KB","MB","GB","TB","PB","EB"],Me=0;Ee>=1024&&Me<Ie.length-1;)Ee/=1024,Me++;return"".concat(Ee.toFixed(0)," ").concat(Ie[Me])}function k(t,Ee){var Ie=(0,B.wv)(),Me=Ie.getPrefixCls,fe=t.item,Ve=t.onRemove,an=t.className,cn=t.style,qe=h.useContext(o),Le=qe||{},p=Le.disabled,ne=fe.name,oe=fe.size,P=fe.percent,Q=fe.status,r=Q===void 0?"done":Q,O=fe.description,j=Me("attachment"),A="".concat(j,"-list-card"),w=h.useMemo(function(){var Ue=ne||"",dn=Ue.match(/^(.*)\.[^.]+$/);return dn?[dn[1],Ue.slice(dn[1].length)]:[Ue,""]},[ne]),H=b()(w,2),K=H[0],xe=H[1],Be=h.useMemo(function(){return rn(xe,Fe)},[xe]),Ne=h.useMemo(function(){return O||(r==="uploading"?"".concat(P||0,"%"):r==="error"?fe.response||V:oe?en(oe):V)},[r,P]),un=h.useMemo(function(){var Ue=q()(He),dn;try{for(Ue.s();!(dn=Ue.n()).done;){var vn=dn.value,Sn=vn.ext,Wn=vn.icon,Hn=vn.color;if(rn(xe,Sn))return[Wn,Hn]}}catch(kn){Ue.e(kn)}finally{Ue.f()}return[(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"},"defaultIcon"),me]},[xe]),tn=b()(un,2),nn=tn[0],ve=tn[1],$e=h.useState(),hn=b()($e,2),jn=hn[0],bn=hn[1];h.useEffect(function(){if(fe.originFileObj){var Ue=!0;return se(fe.originFileObj).then(function(dn){Ue&&bn(dn)}),function(){Ue=!1}}bn(void 0)},[fe.originFileObj]);var On=null,Pn=fe.thumbUrl||fe.url||jn,Cn=t.renderType||"default",ke=Be&&(fe.originFileObj||Pn)&&Cn==="default";return ke?On=(0,m.jsxs)(m.Fragment,{children:[Pn&&(0,m.jsx)("img",{alt:"preview",src:Pn}),r!=="done"&&(0,m.jsxs)("div",{className:"".concat(A,"-img-mask"),children:[r==="uploading"&&P!==void 0&&(0,m.jsx)(z,{percent:P,prefixCls:A}),r==="error"&&(0,m.jsx)("div",{className:"".concat(A,"-desc"),children:(0,m.jsx)("div",{className:"".concat(A,"-ellipsis-prefix"),children:Ne})})]})]}):On=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"".concat(A,"-icon"),style:{color:ve},children:nn}),(0,m.jsxs)("div",{className:"".concat(A,"-content"),children:[(0,m.jsxs)("div",{className:"".concat(A,"-name"),children:[K!=null?K:V,xe]}),(0,m.jsx)("div",{className:"".concat(A,"-desc"),children:(0,m.jsx)("div",{className:"".concat(A,"-ellipsis-prefix"),children:Ne})})]})]}),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(N,{}),(0,m.jsxs)("div",{className:v()(A,d()(d()(d()(d()(d()({},"".concat(A,"-status-").concat(r),r),"".concat(A,"-type-preview"),ke),"".concat(A,"-type-overview"),!ke),"".concat(A,"-type-").concat(Cn),!0),"".concat(A,"-hoverable"),!p&&Ve),an),style:cn,ref:Ee,children:[On,(0,m.jsx)("button",{style:{opacity:!p&&Ve?1:0},className:"".concat(A,"-remove"),onClick:function(){!p&&Ve&&Ve(fe)},children:(0,m.jsx)(ce.Z,{})})]})]})}var ue=h.forwardRef(k),be=1;function D(t){var Ee=t.prefixCls,Ie=t.items,Me=t.onRemove,fe=t.overflow,Ve=t.listClassName,an=t.listStyle,cn=t.itemClassName,qe=t.itemStyle,Le="".concat(Ee,"-list"),p=h.useRef(null),ne=h.useState(!1),oe=b()(ne,2),P=oe[0],Q=oe[1];h.useEffect(function(){return Q(!0),function(){Q(!1)}},[]);var r=h.useState(!1),O=b()(r,2),j=O[0],A=O[1],w=h.useState(!1),H=b()(w,2),K=H[0],xe=H[1],Be=function(){var ve=p.current;ve&&(fe==="scrollX"?(A(Math.abs(ve.scrollLeft)>=be),xe(ve.scrollWidth-ve.clientWidth-Math.abs(ve.scrollLeft)>=be)):fe==="scrollY"&&(A(ve.scrollTop!==0),xe(ve.scrollHeight-ve.clientHeight!==ve.scrollTop)))};h.useEffect(function(){Be()},[fe]);var Ne=function(ve){var $e=p.current;$e&&$e.scrollTo({left:$e.scrollLeft+ve*$e.clientWidth,behavior:"smooth"})},un=function(){Ne(-1)},tn=function(){Ne(1)};return(0,m.jsxs)("div",{className:v()(Le,d()(d()(d()({},"".concat(Le,"-overflow-").concat(t.overflow),fe),"".concat(Le,"-overflow-ping-start"),j),"".concat(Le,"-overflow-ping-end"),K),Ve),ref:p,onScroll:Be,style:an,children:[(0,m.jsx)(u.V4,{keys:Ie.map(function(nn){return{key:nn.uid,item:nn}}),motionName:"".concat(Le,"-card-motion"),component:!1,motionAppear:P,motionLeave:!0,motionEnter:!0,children:function(ve){var $e=ve.key,hn=ve.item,jn=ve.className,bn=ve.style;return(0,m.jsx)(ue,{prefixCls:Ee,item:hn,onRemove:Me,className:v()(jn,cn),style:y()(y()({},bn),qe),renderType:t.renderType},$e)}}),fe==="scrollX"&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(L.ZP,{size:"small",shape:"circle",className:"".concat(Le,"-prev-btn"),icon:(0,m.jsx)(s.Z,{}),onClick:un}),(0,m.jsx)(L.ZP,{size:"small",shape:"circle",className:"".concat(Le,"-next-btn"),icon:(0,m.jsx)(n.Z,{}),onClick:tn})]})]})}var ee=e(86250),X=e(21317),Oe=e(82484);function Ae(t,Ee){var Ie=t.prefixCls,Me=t.placeholder,fe=Me===void 0?{}:Me,Ve=t.upload,an=t.className,cn=t.style,qe="".concat(Ie,"-placeholder"),Le=fe||{},p=h.useContext(o),ne=p.disabled,oe=h.useState(!1),P=b()(oe,2),Q=P[0],r=P[1],O=function(){r(!0)},j=function(K){K.currentTarget.contains(K.relatedTarget)||r(!1)},A=function(){r(!1)},w=h.isValidElement(fe)?fe:(0,m.jsxs)(ee.Z,{align:"center",justify:"center",vertical:!0,className:"".concat(qe,"-inner"),children:[(0,m.jsx)(X.Z.Text,{className:"".concat(qe,"-icon"),children:Le.icon}),(0,m.jsx)(X.Z.Title,{className:"".concat(qe,"-title"),level:5,children:Le.title}),(0,m.jsx)(X.Z.Text,{className:"".concat(qe,"-description"),type:"secondary",children:Le.description})]});return(0,m.jsx)("div",{className:v()(qe,d()(d()({},"".concat(qe,"-drag-in"),Q),"".concat(qe,"-disabled"),ne),an),onDragEnter:O,onDragLeave:j,onDrop:A,"aria-hidden":ne,style:cn,children:(0,m.jsx)(Oe.Z.Dragger,y()(y()({showUploadList:!1},Ve),{},{ref:Ee,style:{padding:0,border:0,background:"transparent"},children:w}))})}var Pe=h.forwardRef(Ae);function Ce(t,Ee){var Ie=t.children,Me=t.upload,fe=t.rootClassName,Ve=h.useRef(null);return h.useImperativeHandle(Ee,function(){return Ve.current}),(0,m.jsx)(Oe.Z,y()(y()({},Me),{},{showUploadList:!1,rootClassName:fe,ref:Ve,children:Ie}))}var Ye=h.forwardRef(Ce),De,ze=(0,x.vJ)(De||(De=ge()([`
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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.zIndexPopupBase},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.lineWidthBold},function(t){return t.theme.padding},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.colorPrimaryHover},function(t){return t.theme.prefixCls},function(t){return t.theme.paddingXXS},function(t){return t.theme.fontSizeHeading2},function(t){return t.theme.prefixCls},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.colorText},function(t){return t.theme.padding},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSizeHeading2},function(t){return t.theme.boxShadowTertiary},function(t){return t.theme.padding},function(t){return t.theme.padding},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls}),sn=["prefixCls","rootClassName","rootStyle","className","style","items","children","getDropContainer","placeholder","onChange","overflow","disabled","classNames","styles"];function Xe(t,Ee){var Ie=t.prefixCls,Me=t.rootClassName,fe=t.rootStyle,Ve=t.className,an=t.style,cn=t.items,qe=t.children,Le=t.getDropContainer,p=t.placeholder,ne=t.onChange,oe=t.overflow,P=t.disabled,Q=t.classNames,r=Q===void 0?{}:Q,O=t.styles,j=O===void 0?{}:O,A=_()(t,sn),w=(0,B.wv)(),H=w.direction,K=w.getPrefixCls,xe=K("attachment"),Be=h.useRef(null),Ne=h.useRef(null);h.useImperativeHandle(Ee,function(){return{nativeElement:Be.current,upload:function(ke){var Ue,dn=(Ue=Ne.current)===null||Ue===void 0||(Ue=Ue.nativeElement)===null||Ue===void 0?void 0:Ue.querySelector('input[type="file"]');if(dn){var vn=new DataTransfer;vn.items.add(ke),dn.files=vn.files,dn.dispatchEvent(new Event("change",{bubbles:!0}))}}}});var un=(0,i.C8)([],{value:cn}),tn=b()(un,2),nn=tn[0],ve=tn[1],$e=(0,i.zX)(function(Cn){ve(Cn.fileList),ne==null||ne(Cn)}),hn=y()(y()({},A),{},{fileList:nn,onChange:$e}),jn=function(ke){var Ue=nn.filter(function(dn){return dn.uid!==ke.uid});$e({file:ke,fileList:Ue})},bn,On=function(ke,Ue,dn){var vn=typeof p=="function"?p(ke):p;return(0,m.jsx)(Pe,{placeholder:vn,upload:hn,prefixCls:xe,className:v()(r.placeholder),style:y()(y()({},j.placeholder),Ue==null?void 0:Ue.style),ref:dn})};if(qe)bn=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Ye,{upload:hn,rootClassName:Me,ref:Ne,children:qe}),(0,m.jsx)(R,{getDropContainer:Le,prefixCls:xe,className:v()(Me),children:On("drop")})]});else{var Pn=nn.length>0;bn=(0,m.jsxs)("div",{className:v()(xe,d()({},"".concat(xe,"-rtl"),H==="rtl"),Ve,Me),style:y()(y()({},fe),an),dir:H||"ltr",ref:Be,children:[(0,m.jsx)(D,{prefixCls:xe,items:nn,onRemove:jn,overflow:oe,upload:hn,listClassName:v()(r.list),listStyle:y()(y()({},j.list),!Pn&&{display:"none"}),itemClassName:v()(r.item),itemStyle:y()({},j.item),renderType:t.renderType}),On("inline",Pn?{style:{display:"none"}}:{},Ne)]})}return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(ze,{}),(0,m.jsx)(o.Provider,{value:{disabled:P},children:bn})]})}var Se=h.forwardRef(Xe);Se.FileCard=ue;var xn=Se},50130:function(Ke,Z,e){"use strict";e.d(Z,{L:function(){return B},Z:function(){return h}});var G=e(97857),d=e.n(G),S=e(13769),y=e.n(S),M=e(67294),b=e(83962),E=e(76289),_=e(85893),I=["component"],v=M.memo(function(i){var c=(0,b.HJ)(),o=(0,E.TQ)(function(n){return n.onInput}),m=(0,M.useMemo)(function(){if(i.component)return i.component;var n=c;return(n==null?void 0:n[i.code])||function(){return"".concat(i.code," not found")}},[]);if(typeof m=="function"){var R=i.component,s=y()(i,I);return(0,_.jsx)(m,d()(d()({},s),{},{context:{onInput:o}}))}else return m});function h(i){var c=i.cards;return c!=null&&c.length?c.map(function(o,m){var R=(0,_.jsx)(v,d()({index:m,id:i.id,isLast:i.isLast},o),(o==null?void 0:o.id)||m+o.code);return o.code==="Text"?(0,_.jsx)("div",{className:i.className,children:R},m):R}):null}function B(i,c){return{code:i,data:c}}},67369:function(Ke,Z,e){"use strict";e.d(Z,{p4:function(){return B},hw:function(){return i},ZP:function(){return h}});var G=e(67294),d=e(56044),S=e(64057),y=e(68400),M=e.n(y),b=e(9053),E,_=(0,b.vJ)(E||(E=M()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorText},function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextTertiary},function(c){return c.theme.colorBorder}),I=_,v=e(85893);function h(c){var o=(0,d.wv)(),m=o.getPrefixCls,R=m("bubble-footer"),s=c.left,n=c.right;return s&&!s.type||n&&!n.type?null:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(I,{}),(0,v.jsxs)("div",{className:R,children:[(0,v.jsx)("div",{className:"".concat(R,"-left"),children:c.left}),(0,v.jsx)("div",{className:"".concat(R,"-right"),children:c.right})]})]})}function B(c){var o=(0,d.wv)(),m=o.getPrefixCls,R=m("bubble-footer-actions");return(0,v.jsx)("div",{className:R,children:c.data.map(function(s,n){return s.children?G.cloneElement(s.children,{key:n}):(0,v.jsx)(S.Z,{bordered:!1,icon:s.icon,size:"small",onClick:s.onClick},n)})})}function i(c){var o=(0,d.wv)(),m=o.getPrefixCls,R=m("bubble-footer-count");return(0,v.jsx)("div",{className:R,children:c.data.map(function(s){return(0,v.jsxs)("div",{className:"".concat(R,"-item"),children:[s[0],"\uFF1A",s[1]]},s[0])})})}h.Actions=B,h.Count=i},10146:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return v}});var G=e(68400),d=e.n(G),S=e(9053),y=e(56044),M=e(9343),b=e(36674),E=e(85893),_,I=(0,S.vJ)(_||(_=d()([`
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

`])),function(h){return h.theme.prefixCls},function(h){return h.theme.colorFillSecondary},function(h){return h.theme.prefixCls},function(h){return h.theme.prefixCls},function(h){return h.theme.colorText},function(h){return h.theme.colorError});function v(h){var B=h.title,i=B===void 0?"Answers have stopped":B,c=h.type,o=c===void 0?"interrupted":c,m=h.desc,R=(0,y.wv)(),s=R.getPrefixCls,n=s("interrupted");return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(I,{}),(0,E.jsxs)("div",{className:"".concat(n),children:[(0,E.jsxs)("div",{className:"".concat(n,"-header"),children:[(0,E.jsx)("div",{className:"".concat(n,"-icon-wrapper"),children:o==="interrupted"?(0,E.jsx)(M.Z,{className:"".concat(n,"-header-interrupted")}):(0,E.jsx)(b.Z,{className:"".concat(n,"-header-error")})}),(0,E.jsx)("span",{children:i})]}),m&&(0,E.jsx)("div",{className:"".concat(n,"-desc"),children:m})]})]})}},9146:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return en}});var G=e(97857),d=e.n(G),S=e(93967),y=e.n(S),M=e(67294),b=e(68400),E=e.n(b),_=e(9053),I,v=(0,_.vJ)(I||(I=E()([`
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
`])),function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls},function(k){return k.theme.colorText},function(k){return k.theme.fontSize},function(k){return k.theme.lineHeight},function(k){return k.theme.prefixCls},function(k){return k.theme.borderRadiusLG},function(k){return k.theme.colorPrimaryBg},function(k){return k.theme.prefixCls},function(k){return k.theme.colorText},function(k){return k.theme.colorText},function(k){return k.theme.colorBgBase},function(k){return k.theme.colorBgBase},function(k){return k.theme.colorTextTertiary},function(k){return k.theme.colorTextTertiary},function(k){return k.theme.colorBgBase},function(k){return k.theme.colorBgBase},function(k){return k.theme.colorTextSecondary},function(k){return k.theme.colorTextSecondary},function(k){return k.theme.colorBgBase},function(k){return k.theme.colorBgBase}),h=e(56044),B=e(82679),i=e(50130),c=e(85893);function o(){var k=(0,h.wv)(),ue=k.getPrefixCls,be=ue("bubble-loading");return(0,c.jsxs)("div",{className:be,children:[(0,c.jsx)("div",{className:"".concat(be,"-dot1")}),(0,c.jsx)("div",{className:"".concat(be,"-dot2")}),(0,c.jsx)("div",{className:"".concat(be,"-dot3")}),(0,c.jsx)("div",{className:"".concat(be,"-text"),children:"-"})]})}var m=e(9783),R=e.n(m),s=e(68997),n=function(ue){var be=ue.avatar,D=ue.msgStatus,ee=ue.isAssistant,X=ue.prefixCls,Oe=ue.className,Ae=ue.style,Pe=M.isValidElement(be)?be:(0,c.jsx)(s.Z,d()({},be));return(0,c.jsx)("div",{className:y()("".concat(X,"-avatar"),R()({},"".concat(X,"-avatar-loading"),ee&&D==="generating"),Oe),style:Ae,children:Pe})},L=n,u=M.createContext({}),W=function(ue){var be=ue.isLast,D=ue.className,ee=ue.rootClassName,X=ue.style,Oe=ue.classNames,Ae=Oe===void 0?{}:Oe,Pe=ue.styles,Ce=Pe===void 0?{}:Pe,Ye=ue.avatar,De=ue.content,ze=De===void 0?"":De,sn=ue.cards,Xe=ue.msgStatus,Se=ue.id,xn=ue.role,t=ue.variant,Ee={assistant:"start",user:"end"}[xn]||"start",Ie=(0,h.wv)(),Me=Ie.getPrefixCls,fe=Me("bubble"),Ve=y()(fe,ee,D,"".concat(fe,"-").concat(Ee)),an,cn=!(ze!=null&&ze.length)&&!(sn!=null&&sn.length);ue.msgStatus==="generating"&&cn?an=(0,c.jsx)(o,{}):an=ze?(0,c.jsx)(B.Z,{content:ze,cursor:ue.msgStatus==="generating"}):null;var qe=Ee==="assistant"||Ee==="start",Le="".concat(fe,"-content-").concat(t||(qe?"borderless":"filled")),p=(0,c.jsxs)("div",{style:!qe&&an?{flexDirection:"column-reverse"}:{},className:"".concat(fe,"-content-wrapper"),children:[(0,c.jsx)(i.Z,{cards:sn,id:Se,isLast:be,className:y()("".concat(fe,"-content"),"".concat(fe,"-content-wrapper-card"),Le,Ae.content)}),an&&(0,c.jsx)("div",{style:d()({},Ce.content),className:y()("".concat(fe,"-content"),"".concat(fe,"-content-wrapper-card"),Le,Ae.content),children:an})]});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,{}),(0,c.jsxs)("div",{style:X,className:Ve,id:Se,"data-role":xn,children:[Ye&&(0,c.jsx)(L,{avatar:Ye,msgStatus:Xe,isAssistant:qe,prefixCls:fe,className:Ae.avatar,style:Ce.avatar}),p]})]})},q=M.memo(W),J=e(13769),C=e.n(J),se=e(5574),$=e.n(se),F=e(80322),z=e(64057),ae=e(25109),ge=function(ue,be){var D=(0,h.wv)(),ee=D.getPrefixCls,X=(0,F.a)(),Oe=X.isAtBottom,Ae=X.scrollToBottom;M.useImperativeHandle(be,function(){return{scrollToBottom:function(Ce){function Ye(De){return Ce.apply(this,arguments)}return Ye.toString=function(){return Ce.toString()},Ye}(function(Ce){Ce=Ce||{animation:"instant"},Ae(Ce)})}});var Pe=ee("bubble-list-scroll-to-bottom");return(0,c.jsx)("div",{className:y()(Pe,"".concat(Pe,"-").concat(Oe?"hide":"show")),children:(0,c.jsx)(z.Z,{icon:(0,c.jsx)(ae.Z,{}),shape:"circle",onClick:function(){return Ae({animation:"instant"})}})})},x=M.forwardRef(ge),pe,N=(0,_.vJ)(pe||(pe=E()([`
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
`])),function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls},function(k){return k.theme.colorPrimaryBorder},function(k){return k.theme.colorPrimaryBg},function(k){return k.theme.colorPrimary}),ce=e(78234),V=["key"],me=function(ue,be){var D,ee,X=ue.items,Oe=X===void 0?[]:X,Ae=ue.smooth,Pe=Ae===void 0?!0:Ae,Ce=(0,M.useState)(!1),Ye=$()(Ce,2),De=Ye[0],ze=Ye[1],sn=M.useRef(),Xe=(0,h.wv)(),Se=Xe.getPrefixCls,xn=Se("bubble-list");M.useImperativeHandle(be,function(){return{scrollToBottom:function(){sn.current.scrollToBottom()}}}),(0,ce.Z)(function(){ze(!0)});var t=De&&Pe?"smooth":"instant";return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(N,{}),(0,c.jsxs)(F.h,{id:ue.id,className:y()("".concat(xn,"-wrapper"),(D=ue.classNames)===null||D===void 0?void 0:D.wrapper),resize:t,initial:"instant",style:ue.style,children:[(0,c.jsx)(F.h.Content,{className:y()("".concat(xn),(ee=ue.classNames)===null||ee===void 0?void 0:ee.list),children:ue.children?ue.children:Oe.map(function(Ee,Ie){var Me=Ee.key,fe=C()(Ee,V),Ve=Ie===Oe.length-1;return(0,M.createElement)(q,d()(d()({},fe),{},{isLast:Ve,key:fe.id||Me}))})}),(0,c.jsx)(x,{ref:sn})]})]})},Fe=M.forwardRef(me),We=Fe,He=e(67369),rn=e(10146);q.List=We,q.Spin=o,q.Footer=He.ZP,q.Interrupted=rn.Z;var en=q},76289:function(Ke,Z,e){"use strict";e.d(Z,{TQ:function(){return c},vi:function(){return B}});var G=e(97857),d=e.n(G),S=e(13769),y=e.n(S),M=e(5574),b=e.n(M),E=e(67294),_=e(79785),I=e(59214),v=e(85893),h=["children"];function B(o){var m=(0,_.Z)([]),R=b()(m,3),s=R[0],n=R[1],L=R[2],u=(0,_.Z)("0"),W=b()(u,3),q=W[0],J=W[1],C=W[2],se=(0,_.Z)(0),$=b()(se,3),F=$[0],z=$[1],ae=$[2],ge=(0,_.Z)([]),x=b()(ge,3),pe=x[0],N=x[1],ce=x[2],V=(0,_.Z)(!1),me=b()(V,3),Fe=me[0],We=me[1],He=me[2],rn=(0,_.Z)(!1),en=b()(rn,3),k=en[0],ue=en[1],be=en[2],D=(0,_.Z)(!0),ee=b()(D,3),X=ee[0],Oe=ee[1],Ae=ee[2],Pe=o.children,Ce=y()(o,h),Ye=d()({sessionList:s,setSessionList:n,getSessionList:L,currentSessionKey:q,setCurrentSessionKey:J,getCurrentSessionKey:C,messages:pe,setMessages:N,getMessages:ce,loading:Fe,setLoading:We,getLoading:He,disabled:k,setDisabled:ue,getDisabled:be,sessionListShow:X,setSessionListShow:Oe,getSessionListShow:Ae,currentRegenerateIndex:F,setCurrentRegenerateIndex:z,getCurrentRegenerateIndex:ae},Ce);return(0,v.jsx)(i.Provider,{value:Ye,children:Pe})}var i=(0,I.kr)(void 0);function c(o){try{var m=(0,I.Sz)(i,o);return m}catch(R){return{}}}},37254:function(Ke,Z,e){"use strict";e.d(Z,{G:function(){return d}});var G=e(76289);function d(){var S=(0,G.TQ)(function(v){return{loading:v.loading,getLoading:v.getLoading,disabled:v.disabled,getDisabled:v.getDisabled,setLoading:v.setLoading,setDisabled:v.setDisabled}}),y=S.loading,M=S.disabled,b=S.setLoading,E=S.setDisabled,_=S.getLoading,I=S.getDisabled;return{loading:y,disabled:M,setLoading:b,setDisabled:E,getLoading:_,getDisabled:I}}},4421:function(Ke,Z,e){"use strict";e.d(Z,{y:function(){return E}});var G=e(19632),d=e.n(G),S=e(97857),y=e.n(S),M=e(67294),b=e(76289);function E(){var _=(0,b.TQ)(function(m){return{messages:m.messages,setMessages:m.setMessages,getMessages:m.getMessages}}),I=_.messages,v=_.setMessages,h=_.getMessages,B=M.useCallback(function(){var m,R=((m=arguments.length<=0?void 0:arguments[0])===null||m===void 0?void 0:m.id)||(arguments.length<=0?void 0:arguments[0]),s=(arguments.length<=1?void 0:arguments[1])||(arguments.length<=0?void 0:arguments[0]);v==null||v(function(n){var L=n.findIndex(function(W){return W.id===R});if(L>-1){var u=y()(y()({},n[L]),s);return[].concat(d()(n.slice(0,L)),[u],d()(n.slice(L+1)))}else return[].concat(d()(n),[s])})},[]),i=M.useCallback(function(m){v(function(R){return R.filter(function(s){return s.id!==m.id})})},[]),c=M.useCallback(function(){v([])},[]),o=M.useCallback(function(m){return h().find(function(R){return R.id===m})},[]);return{messages:I,getMessage:o,setMessages:v,getMessages:h,updateMessage:B,removeMessage:i,removeAllMessages:c}}},61316:function(Ke,Z,e){"use strict";e.d(Z,{x:function(){return I}});var G=e(97857),d=e.n(G),S=e(19632),y=e.n(S),M=e(67294),b=e(76289),E=e(88773),_=e(73935);function I(){var v=(0,b.TQ)(function(F){return{getCurrentSessionKey:F.getCurrentSessionKey,currentRegenerateIndex:F.currentRegenerateIndex,setCurrentRegenerateIndex:F.setCurrentRegenerateIndex,getCurrentRegenerateIndex:F.getCurrentRegenerateIndex,sessionListShow:F.sessionListShow,setSessionListShow:F.setSessionListShow,sessionList:F.sessionList,setSessionList:F.setSessionList,currentSessionKey:F.currentSessionKey,setCurrentSessionKey:F.setCurrentSessionKey,getSessionList:F.getSessionList}}),h=v.getCurrentSessionKey,B=v.sessionList,i=v.setSessionList,c=v.currentSessionKey,o=v.setCurrentSessionKey,m=v.sessionListShow,R=v.setSessionListShow,s=v.currentRegenerateIndex,n=v.setCurrentRegenerateIndex,L=v.getCurrentRegenerateIndex,u=v.getSessionList,W=M.useCallback(function(){var F=(0,E.Z)(),z={label:Date.now().toString(),key:F,messages:[[]]};return _.flushSync(function(){i(function(ae){var ge=[].concat(y()(ae),[z]);return ge}),o(F)}),F},[]),q=M.useCallback(function(F){i(function(z){var ae=z.filter(function(ge){return ge.key!==F});return ae})},[]),J=M.useCallback(function(F){var z=h(),ae=L();i(function(ge){return ge.map(function(x){return x.key===z?(x.messages[ae]=F,d()({},x)):x})})},[]),C=M.useCallback(function(F,z){var ae;return(ae=u().find(function(ge){return ge.key===F}))===null||ae===void 0?void 0:ae.messages[z]},[]),se=M.useCallback(function(){return{sessionList:u(),currentSessionKey:h(),currentRegenerateIndex:L()}},[]),$=M.useCallback(function(F){var z=F.sessionList,ae=F.currentSessionKey,ge=F.currentRegenerateIndex;i(z),o(ae),n(ge)},[]);return{currentRegenerateIndex:s,setCurrentRegenerateIndex:n,getCurrentRegenerateIndex:L,sessionList:B,setSessionList:i,getSessionList:u,currentSessionKey:c,setCurrentSessionKey:o,sessionListShow:m,setSessionListShow:R,createSession:W,deleteSession:q,updateSessionMessages:J,getMessagesBySession:C,getSession:se,updateSession:$}}},29041:function(Ke,Z,e){"use strict";e.d(Z,{ZP:function(){return oe}});var G=e(97857),d=e.n(G),S=e(13769),y=e.n(S),M=e(5574),b=e.n(M),E=e(67294),_=e(93967),I=e.n(_),v=e(56044),h=e(85265),B=e(17909),i=e(76289),c=e(68400),o=e.n(c),m=e(9053),R,s=(0,m.vJ)(R||(R=o()([`

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
`])),function(P){return P.theme.prefixCls},function(P){return P.theme.fontFamily},function(P){return P.theme.colorBgBase},function(P){return P.theme.colorBgBase},function(P){return P.theme.colorBgBase},function(P){return P.theme.colorFillTertiary}),n=e(85893);function L(P){var Q=(0,i.TQ)(function(K){return{sessionListShow:K.sessionListShow,setSessionListShow:K.setSessionListShow}}),r=Q.sessionListShow,O=Q.setSessionListShow,j=(0,v.wv)(),A=j.getPrefixCls,w=A("chat-anywhere-layout"),H=W();return(0,E.useEffect)(function(){O(!H)},[H]),P.left?H?(0,n.jsx)(h.Z,{width:"80vw",styles:{body:{padding:0}},open:r,onClose:function(){O(!1)},title:null,closable:!1,placement:"left",children:(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:P.left})}):(0,n.jsx)("div",{className:I()("".concat(w,"-left"),r?"":"".concat(w,"-left-hide")),children:P.left}):null}function u(P){var Q=(0,v.wv)(),r=Q.getPrefixCls,O=r("chat-anywhere-layout"),j=(0,i.TQ)(function(A){return A.uiConfig});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{}),(0,n.jsx)("div",{className:O,children:(0,n.jsxs)("div",{className:"".concat(O,"-main"),children:[(0,n.jsx)(L,d()({},P)),(0,n.jsxs)("div",{className:"".concat(O,"-right"),style:{background:j==null?void 0:j.background},children:[P.top,P.right]})]})})]})}var W=function(){var Q=(0,B.Z)(),r=(0,i.TQ)(function(O){return O.uiConfig});return!Q.md||(r==null?void 0:r.narrowScreen)},q=e(9368),J=e(64057),C=e(21403),se=e(61316),$=e(4421),F,z=(0,m.vJ)(F||(F=o()([`
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

`])),function(P){return P.theme.prefixCls},function(P){return P.theme.prefixCls},function(P){return P.theme.prefixCls},function(P){return P.theme.prefixCls},function(P){return P.theme.prefixCls}),ae=e(50287),ge=e(67392),x=e(13660),pe=e(12624);function N(){var P=(0,v.wv)(),Q=P.getPrefixCls,r=Q("chat-anywhere-session-list"),O=(0,i.TQ)(function(j){return j.sessionListShow});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(z,{}),(0,n.jsxs)("div",{className:I()("".concat(r),O?"":"".concat(r,"-hide")),children:[(0,n.jsx)(V,{}),(0,n.jsx)(ce,{})]})]})}function ce(){var P=(0,v.wv)(),Q=P.getPrefixCls,r=Q("chat-anywhere-session-list"),O=(0,se.x)(),j=O.currentSessionKey,A=O.setCurrentSessionKey,w=O.currentRegenerateIndex,H=O.sessionList,K=O.getMessagesBySession,xe=O.setSessionListShow,Be=(0,$.y)(),Ne=Be.setMessages,un=(0,i.TQ)(function(ve){return ve.getLoading}),tn=(0,i.TQ)(function(ve){return ve.onSessionKeyChange}),nn=W();return(0,E.useEffect)(function(){var ve=K(j,w);Ne(ve)},[j,w]),(0,n.jsx)("div",{className:"".concat(r,"-session"),children:(0,n.jsx)(q.Z,{menu:[{key:"delete",icon:(0,n.jsx)(ae.Z,{}),danger:!0,onClick:function($e){}}],activeKey:j,items:H,onActiveChange:function($e){un()||(nn&&xe(!1),requestIdleCallback(function(){A($e),tn($e)}))}})})}function V(){var P=(0,v.wv)(),Q=P.getPrefixCls,r=Q("chat-anywhere-session-list"),O=(0,se.x)(),j=O.currentSessionKey,A=O.setCurrentSessionKey,w=O.deleteSession,H=O.createSession,K=O.sessionList,xe=O.sessionListShow,Be=O.setSessionListShow,Ne=(0,i.TQ)(function(tn){return tn.uiConfig}),un=W();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(r,"-logo"),children:[Ne==null?void 0:Ne.logo,(0,n.jsx)(J.Z,{bordered:!1,onClick:function(){return Be(!xe)},icon:xe?(0,n.jsx)(ge.Z,{}):(0,n.jsx)(x.Z,{})})]}),(0,n.jsx)("div",{className:"".concat(r,"-adder"),children:(0,n.jsx)(C.Z,{type:"primary",block:!0,icon:(0,n.jsx)(pe.Z,{}),onClick:function(){un&&Be(!1),H()},children:"New Session"})})]})}var me=e(9783),Fe=e.n(me),We=e(9146),He=e(19632),rn=e.n(He),en=e(52677),k=e.n(en),ue=e(15009),be=e.n(ue),D=e(99289),ee=e.n(D),X=e(93164),Oe=e(36417),Ae=e(37254),Pe=e(82484),Ce,Ye=(0,m.vJ)(Ce||(Ce=o()([`
.`,`-chat-anywhere-sender-wrapper {
  position: relative;

  &-header {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
  }
}

`])),function(P){return P.theme.prefixCls}),De=e(86578),ze=e(7654),sn=e(92053),Xe=e(79785),Se=e(86250);function xn(P){var Q=P.nodes,r=(0,Xe.Z)(!1),O=b()(r,3),j=O[0],A=O[1],w=O[2];return(0,E.useEffect)(function(){var H=function(){w()&&A(!1)};return document.addEventListener("click",H,!0),function(){document.removeEventListener("click",H,!0)}},[]),(0,n.jsx)(ze.Z,{placement:"bottomLeft",open:j,onOpenChange:A,content:(0,n.jsx)(Se.Z,{vertical:!0,children:Q}),trigger:"click",styles:{body:{padding:4}},children:(0,n.jsx)(J.Z,{icon:(0,n.jsx)(sn.Z,{}),bordered:!1})})}var t=(0,E.forwardRef)(function(P,Q){var r=E.useState(""),O=b()(r,2),j=O[0],A=O[1],w=(0,Ae.G)(),H=(0,i.TQ)(function(Je){return Je.onUpload.map(function(Re){return d()(d()({},Re),{},{disabled:Re.disabled||w.disabled})})}),K=new Array((H==null?void 0:H.length)||0).fill([]),xe=(0,E.useState)(!1),Be=b()(xe,2),Ne=Be[0],un=Be[1],tn=E.useState(K),nn=b()(tn,2),ve=nn[0],$e=nn[1],hn=(0,E.useRef)(K);(0,E.useEffect)(function(){$e(K)},[K.length]),(0,E.useEffect)(function(){hn.current=ve},[ve]);var jn=(0,i.TQ)(function(Je){return Je.uiConfig}),bn=(0,v.wv)(),On=bn.getPrefixCls,Pn=On("chat-anywhere-sender"),Cn=(0,i.TQ)(function(Je){return Je.onStop}),ke=(0,i.TQ)(function(Je){var Re={beforeUI:void 0,afterUI:void 0,morePrefixActions:void 0,maxLength:void 0,zoomable:!0,beforeSubmit:function(){return Promise.resolve(!0)},header:[],enableFocusExpand:!1,variant:"default",hide:!1};return d()(d()({},Re),Je.onInput)});if(E.useImperativeHandle(Q,function(){return{setInputContent:function(Re,mn){A(Re),$e(mn||[[]])},getAttachedFiles:function(){return hn.current}}},[]),(0,E.useEffect)(function(){w.setDisabled(ke.disabled)},[ke.disabled]),ke.hide)return null;var Ue=function(){var Je=ee()(be()().mark(function Re(mn,fn){return be()().wrap(function(yn){for(;;)switch(yn.prev=yn.next){case 0:$e(function(_n){return _n.map(function(Qn,Un){return Un===mn?fn:Qn})});case 1:case"end":return yn.stop()}},Re)}));return function(mn,fn){return Je.apply(this,arguments)}}(),dn=(0,E.useMemo)(function(){if(ke.variant==="aigc"||!(H!=null&&H.length))return[];var Je=H.map(function(Re,mn){var fn;return Re.trigger?fn=Re.trigger:(Re.title||Re.description)&&H.length>1?fn=(0,n.jsxs)(C.Z,{type:"text",icon:Re.icon,children:[Re.title&&(0,n.jsx)("span",{children:Re.title}),Re.description&&(0,n.jsx)("span",{style:{fontSize:"0.8em",opacity:.8},children:Re.description})]}):fn=(0,n.jsx)(J.Z,{icon:Re.icon,bordered:!1}),(0,E.createElement)(Pe.Z,d()(d()({},Re),{},{fileList:ve[mn],key:mn,onChange:function(yn){Re.beforeUpload&&yn.file.status&&Ue(mn,yn.fileList),Re.beforeUpload||Ue(mn,yn.fileList)},showUploadList:!1}),fn)});return Je.length===1?Je:(0,n.jsx)(xn,{nodes:Je})},[ke.variant,H,ve]),vn=(0,n.jsx)(De.Z.SenderHeader,{onUpload:H,attachedFiles:ve,onFileChange:Ue}),Sn=(0,n.jsx)(X.Z.Header,{closable:!1,open:ve==null?void 0:ve.some(function(Je){return Je.length}),children:ve.map(function(Je,Re){return Je.length?(0,n.jsx)(Oe.Z,{items:Je,onChange:function(fn){return Ue(Re,fn.fileList)}},Re):null})}),Wn=ke.variant==="aigc"?vn:Sn,Hn=ve.map(function(Je){return Je.filter(function(Re){return Re.status==="done"})}),kn=ve.some(function(Je){return Je.some(function(Re){return Re.status==="uploading"})}),$n=function(Re){if(!(H!=null&&H.length))return;var mn=Re.type||"",fn=Re.name||"",Jn=function(Zn){return Zn?Zn.split(",").some(function(Kn){var Ln=Kn.trim();if(!Ln)return!1;if(Ln.startsWith("."))return fn.toLowerCase().endsWith(Ln.toLowerCase());if(Ln.includes("*")){if(Ln==="*/*")return!0;var In=Ln.split("/"),Gn=b()(In,1),Mn=Gn[0],gn=mn.split("/"),Tn=b()(gn,1),En=Tn[0];return Mn===En}return mn===Ln}):!0},yn=H.findIndex(function(An){return Jn(An.accept)});if(yn===-1)return;var _n=H[yn],Qn=ve[yn]||[];if(_n.maxCount&&Qn.length>=_n.maxCount||!_n.multiple&&Qn.length>0)return;if(_n.beforeUpload){var Un=_n.beforeUpload(Re,[Re]);if(Un===!1)return;if(Un instanceof Promise){Un.then(function(An){if(An!==!1){var Zn=An&&k()(An)==="object"?An:Re;wn(Zn)}}).catch(function(An){console.error("beforeUpload promise rejected:",An)});return}}wn(Re);function wn(An){var Zn=function(){var gn=fn.match(/\.([^.]+)$/);if(gn)return gn[1].toLowerCase();var Tn=mn.match(/\/([^/+]+)/);return Tn?Tn[1].toLowerCase():"bin"},Kn=Date.now(),Ln={uid:"paste_".concat(Kn,"_").concat(Math.random().toString(36).slice(2,11)),name:fn||"pasted-".concat(Kn,".").concat(Zn()),size:An.size,type:mn,status:"uploading",percent:0,originFileObj:An},In=function(gn){$e(function(Tn){var En=rn()(Tn);return En[yn]=(En[yn]||[]).map(function(Rn){return Rn.uid===Ln.uid?d()(d()({},Rn),gn):Rn}),En})};if($e(function(Mn){var gn=rn()(Mn),Tn=gn[yn]||[];if(!_n.multiple)gn[yn]=[Ln];else{if(_n.maxCount&&Tn.length>=_n.maxCount)return Mn;gn[yn]=[].concat(rn()(Tn),[Ln])}return gn}),mn&&mn.startsWith("image/")){var Gn=new FileReader;Gn.onload=function(Mn){var gn,Tn=(gn=Mn.target)===null||gn===void 0?void 0:gn.result;typeof Tn=="string"&&In({thumbUrl:Tn,url:Tn})},Gn.readAsDataURL(An)}_n.customRequest({file:An,onSuccess:function(gn){In({status:"done",response:gn,percent:100})},onError:function(gn){In({status:"error",error:gn})},onProgress:function(gn){In({percent:gn.percent})}},{defaultRequest:function(){}})}},Bn=(0,E.useMemo)(function(){var Je;return(Je=H==null?void 0:H.some(function(Re,mn){if(Re.required){var fn=ve[mn]||[];return fn.length===0}return!1}))!==null&&Je!==void 0?Je:!1},[H,ve]),zn=Bn;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ye,{}),(0,n.jsxs)("div",{className:I()("".concat(Pn,"-wrapper"),Fe()(Fe()({},"".concat(Pn,"-wrapper-focus"),Ne&&ke.enableFocusExpand),"".concat(Pn,"-wrapper-blur"),!Ne&&ke.enableFocusExpand)),children:[jn.quickInput&&(0,n.jsx)("div",{className:I()("".concat(Pn,"-wrapper-header")),children:jn.quickInput}),ke.beforeUI,(0,n.jsx)(X.Z,{placeholder:ke.placeholder,enableFocusExpand:ke.enableFocusExpand,value:j,onChange:A,maxLength:ke.maxLength,disabled:kn||w.disabled,sendDisabled:zn,scalable:ke==null?void 0:ke.zoomable,header:Wn,prefix:(0,n.jsxs)(n.Fragment,{children:[dn,ke==null?void 0:ke.morePrefixActions]}),onSubmit:ee()(be()().mark(function Je(){var Re;return be()().wrap(function(fn){for(;;)switch(fn.prev=fn.next){case 0:return fn.next=2,(ke.beforeSubmit||function(){return Promise.resolve(!0)})();case 2:if(Re=fn.sent,Re){fn.next=5;break}return fn.abrupt("return");case 5:ke.onSubmit({query:j,fileList:Hn}),A(""),$e(K);case 8:case"end":return fn.stop()}},Je)})),onCancel:function(){Cn==null||Cn(),w.setLoading(!1)},onFocus:function(){return un(!0)},onBlur:function(){return un(!1)},onPasteFile:$n,loading:w.loading}),ke.afterUI]})]})}),Ee=e(69637),Ie=e(10325),Me,fe=(0,m.vJ)(Me||(Me=o()([`
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


`])),function(P){return P.theme.prefixCls},function(P){return P.theme.prefixCls},function(P){return P.theme.prefixCls},function(P){return P.theme.prefixCls},function(P){return P.theme.prefixCls}),Ve=(0,E.forwardRef)(function(P,Q){var r=(0,i.TQ)(function(tn){return tn.messages}),O=(0,v.wv)(),j=O.getPrefixCls,A=j("chat-anywhere"),w=(0,i.TQ)(function(tn){return tn.uiConfig}),H=(0,E.useState)(!1),K=b()(H,2),xe=K[0],Be=K[1];(0,Ee.Z)(function(){Be(!0)},300);var Ne=I()("".concat(A,"-chat"),Fe()({},"".concat(A,"-chat-hide"),!xe)),un=!(r!=null&&r.length);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(fe,{}),(0,n.jsxs)("div",{className:Ne,children:[(0,n.jsx)(We.Z.List,{style:{height:0,flex:un?0:1},ref:Q.chatRef,items:r}),un?(0,n.jsx)("div",{className:"".concat(Ne,"-welcome"),children:w==null?void 0:w.welcome}):null,(0,n.jsx)("div",{className:"".concat(Ne,"-sender"),style:w!=null&&w.disclaimer?{marginBottom:16}:{},children:(0,n.jsx)(t,{ref:Q.inputRef})}),(w==null?void 0:w.disclaimer)&&(0,n.jsx)(Ie.Z,{style:{position:"absolute",bottom:0,width:"100%"},desc:w==null?void 0:w.disclaimer})]})]})}),an,cn=(0,m.vJ)(an||(an=o()([`
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

`])),function(P){return P.theme.prefixCls},function(P){return P.theme.prefixCls},function(P){return P.theme.prefixCls},function(P){return P.theme.prefixCls});function qe(){var P=(0,v.wv)(),Q=P.getPrefixCls,r=Q("chat-anywhere-header"),O=(0,i.TQ)(function(K){return K.uiConfig}),j=(0,se.x)(),A=j.sessionListShow,w=j.setSessionListShow,H=W();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(cn,{}),(0,n.jsxs)("div",{className:r,children:[H&&(0,n.jsx)(J.Z,{style:{marginLeft:12},bordered:!1,onClick:function(){return w(!A)},icon:A?(0,n.jsx)(ge.Z,{}):(0,n.jsx)(x.Z,{})}),O.header]})]})}var Le=e(83962),p=E.forwardRef(function(Q,r){var O=(0,$.y)(),j=(0,Ae.G)(),A=(0,se.x)();return E.useImperativeHandle(r,function(){return d()(d()(d()({},O),j),A)}),null}),ne=["cardConfig"],oe=(0,E.forwardRef)(function(P,Q){var r,O=(0,E.useState)(0),j=b()(O,2),A=j[0],w=j[1],H=P.cardConfig,K=y()(P,ne),xe=(0,E.useRef)(null),Be=(0,E.useRef)(null),Ne=(0,E.useRef)(null);return E.useImperativeHandle(Q,function(){return d()(d()(d()(d()({},xe.current),Be.current),Ne.current),{},{reload:function(){w(function(tn){return tn+1})}})}),(0,E.createElement)(i.vi,d()(d()({},K),{},{key:A}),(0,n.jsxs)(Le.xy,{cardConfig:H,children:[(0,n.jsx)(u,{top:(r=K.uiConfig)!==null&&r!==void 0&&r.header?(0,n.jsx)(qe,{}):null,left:K.onSessionKeyChange?(0,n.jsx)(N,{}):null,right:(0,n.jsx)(Ve,{ref:{chatRef:xe,inputRef:Be}})}),(0,n.jsx)(p,{ref:Ne})]}))})},9368:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return be}});var G=e(97857),d=e.n(G),S=e(9783),y=e.n(S),M=e(5574),b=e.n(M),E=e(13769),_=e.n(E),I=e(93967),v=e.n(I),h=e(67294),B=e(21317),i=e(85893),c=h.createContext(null),o=function(ee){var X=ee.children,Oe=h.useContext(c),Ae=Oe.prefixCls;return(0,i.jsx)("div",{className:v()("".concat(Ae,"-group-title")),children:X&&(0,i.jsx)(B.Z.Text,{children:X})})},m=o,R=e(30339),s=e(54604),n=e(7654),L=e(64057),u=e(21403),W=["prefixCls","info","className","direction","onClick","active","menu"],q=["key"],J={};function C(D){var ee=(0,h.useState)(J[D]),X=b()(ee,2),Oe=X[0],Ae=X[1];return[Oe,function(Pe){for(var Ce in J)J[Ce]=!1;J[D]=Pe,Ae(Pe)}]}var se=function(ee){var X,Oe=C(ee.info.key),Ae=b()(Oe,2),Pe=Ae[0],Ce=Ae[1],Ye=(0,h.useState)(!1),De=b()(Ye,2),ze=De[0],sn=De[1],Xe=ee.prefixCls,Se=ee.info,xn=ee.className,t=ee.direction,Ee=ee.onClick,Ie=ee.active,Me=ee.menu,fe=_()(ee,W),Ve=(0,R.Z)(fe,{aria:!0,data:!0,attr:!0}),an=Se.disabled,cn=v()(xn,"".concat(Xe,"-item"),y()({},"".concat(Xe,"-item-active"),Ie&&!an),y()({},"".concat(Xe,"-item-disabled"),an),y()({},"".concat(Xe,"-item-timeline"),Se.timeline)),qe=function(){!an&&Ee&&Ee(Se)};return(0,i.jsxs)("li",d()(d()({},Ve),{},{className:cn,onClick:qe,children:[(0,i.jsxs)("div",{className:"".concat(Xe,"-content"),children:[Se.icon&&(0,i.jsx)("div",{className:"".concat(Xe,"-icon"),children:Se.icon}),Se.timeline&&(0,i.jsx)("div",{className:"".concat(Xe,"-timeline")}),(0,i.jsx)($,{editable:Pe,setEditable:Ce,prefixCls:Xe,info:Se,onEdit:Me==null||(X=Me.find(function(Le){return Le.key==="edit"}))===null||X===void 0?void 0:X.onEdit}),Me&&!an&&(0,i.jsx)(n.Z,{styles:{body:{padding:4}},trigger:["click"],open:ze,onOpenChange:sn,content:(0,i.jsx)("div",{className:"".concat(Xe,"-menu-popover"),children:Me.map(function(Le){var p=Le.key,ne=_()(Le,q),oe=d()(d()({},ne),{},{onClick:function(Q){if(p==="edit")Ce(!0);else{var r;(r=ne.onClick)===null||r===void 0||r.call(ne,Se)}sn(!1)}});return(0,i.jsx)(z,d()(d()({},oe),{},{info:Se}),p)})}),placement:"bottom",children:(0,i.jsx)(L.Z,{bordered:!1,icon:(0,i.jsx)(s.Z,{}),disabled:an,className:"".concat(Xe,"-menu-icon"),onClick:function(p){return p.stopPropagation()}})})]}),Se.desc&&(0,i.jsx)("div",{className:"".concat(Xe,"-desc"),style:Se.timeline?{marginLeft:16}:{},children:Se.desc})]}))};function $(D){var ee=D.editable,X=D.prefixCls,Oe=D.info,Ae=D.setEditable,Pe=D.onEdit,Ce=(0,h.useState)(Oe.label),Ye=b()(Ce,2),De=Ye[0],ze=Ye[1];return(0,h.useEffect)(function(){ze(Oe.label)},[Oe.label]),ee?(0,i.jsx)(F,{prefixCls:X,value:De,onBlur:function(Xe){var Se;if(Xe===De)return Ae(!1);(Se=Pe(Xe,Oe))===null||Se===void 0||Se.then(function(){ze(Xe)}).catch(function(){ze(De)}).finally(function(){Ae(!1)})},setEditable:Ae}):(0,i.jsx)("div",{className:"".concat(X,"-label"),children:De})}function F(D){var ee=D.prefixCls,X=D.value,Oe=D.onBlur,Ae=D.setEditable,Pe=(0,h.useState)(X),Ce=b()(Pe,2),Ye=Ce[0],De=Ce[1],ze=(0,h.useRef)();return(0,h.useEffect)(function(){ze.current.focus()},[]),(0,h.useEffect)(function(){De(X)},[X]),(0,i.jsx)("input",{ref:ze,className:"".concat(ee,"-label-edit"),value:Ye,onChange:function(Xe){return De(Xe.target.value)},onBlur:function(){return Oe(Ye)}})}function z(D){var ee=D.label,X=D.icon,Oe=D.danger,Ae=D.info,Pe=D.disabled,Ce=function(De){var ze;Pe||(De.stopPropagation(),(ze=D.onClick)===null||ze===void 0||ze.call(D,Ae))};return X&&ee?(0,i.jsx)(u.Z,{disabled:Pe,icon:X,danger:Oe,type:"text",onClick:Ce,children:ee}):X?(0,i.jsx)(L.Z,{disabled:Pe,icon:X,danger:Oe,bordered:!1,onClick:Ce}):ee?(0,i.jsx)(u.Z,{disabled:Pe,danger:Oe,type:"text",onClick:Ce,children:ee}):null}var ae=se,ge=e(60869),x=e(56044),pe=e(52677),N=e.n(pe),ce="__ungrouped",V=function(ee){var X=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],Oe=h.useMemo(function(){if(!ee)return[!1,void 0,void 0];var De={sort:void 0,title:void 0};return N()(ee)==="object"&&(De=d()(d()({},De),ee)),[!0,De.sort,De.title]},[ee]),Ae=b()(Oe,3),Pe=Ae[0],Ce=Ae[1],Ye=Ae[2];return h.useMemo(function(){if(!Pe){var De=[{name:ce,data:X,title:void 0}];return[De,Pe]}var ze=X.reduce(function(Se,xn){var t=xn.group||ce;return Se[t]||(Se[t]=[]),Se[t].push(xn),Se},{}),sn=Ce?Object.keys(ze).sort(Ce):Object.keys(ze),Xe=sn.map(function(Se){return{name:Se===ce?void 0:Se,title:Ye,data:ze[Se]}});return[Xe,Pe]},[X,ee])},me=V,Fe=e(68400),We=e.n(Fe),He=e(9053),rn,en=(0,He.vJ)(rn||(rn=We()([`
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
}`])),function(D){return D.theme.prefixCls},function(D){return D.theme.paddingXXS},function(D){return D.theme.prefixCls},function(D){return D.theme.paddingXL},function(D){return D.theme.prefixCls},function(D){return D.theme.colorTextSecondary},function(D){return D.theme.colorBgBase},function(D){return D.theme.colorBorder},function(D){return D.theme.colorTextSecondary},function(D){return D.theme.borderRadiusLG},function(D){return D.theme.colorBorder},function(D){return D.theme.colorFillTertiary},function(D){return D.theme.colorFillTertiary},function(D){return D.theme.prefixCls},function(D){return D.theme.prefixCls},function(D){return D.theme.colorText},function(D){return D.theme.prefixCls},function(D){return D.theme.colorTextDisabled},function(D){return D.theme.prefixCls},function(D){return D.theme.prefixCls},function(D){return D.theme.colorFillTertiary},function(D){return D.theme.colorText},function(D){return D.theme.colorText},function(D){return D.theme.fontFamily},function(D){return D.theme.fontSizeXL},function(D){return D.theme.controlHeightLG},function(D){return D.theme.controlHeightLG},function(D){return D.theme.paddingXS}),k=["prefixCls","rootClassName","items","activeKey","defaultActiveKey","onActiveChange","menu","styles","classNames","groupable","className","style"],ue=function(ee){var X=ee.prefixCls,Oe=ee.rootClassName,Ae=ee.items,Pe=ee.activeKey,Ce=ee.defaultActiveKey,Ye=ee.onActiveChange,De=ee.menu,ze=ee.styles,sn=ze===void 0?{}:ze,Xe=ee.classNames,Se=Xe===void 0?{}:Xe,xn=ee.groupable,t=ee.className,Ee=ee.style,Ie=_()(ee,k),Me=(0,R.Z)(Ie,{attr:!0,aria:!0,data:!0}),fe=(0,ge.Z)(Ce,{value:Pe}),Ve=b()(fe,2),an=Ve[0],cn=Ve[1],qe=me(xn,Ae),Le=b()(qe,2),p=Le[0],ne=Le[1],oe=(0,x.wv)(),P=oe.direction,Q=oe.getPrefixCls,r=Q("conversations"),O=v()(r,t,Oe,y()({},"".concat(r,"-rtl"),P==="rtl")),j=function(w){cn(w.key),Ye&&Ye(w.key)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(en,{}),(0,i.jsx)("ul",d()(d()({},Me),{},{style:Ee,className:O,children:p.map(function(A,w){var H=A.data.map(function(xe,Be){return(0,i.jsx)(ae,{info:xe,prefixCls:r,direction:P,className:v()(Se.item),style:sn.item,menu:De,active:an===xe.key,onClick:j},xe.key||"key-".concat(Be))});if(ne){var K;return(0,i.jsxs)("li",{children:[(0,i.jsx)(c.Provider,{value:{prefixCls:r},children:((K=A.title)===null||K===void 0?void 0:K.call(A,A.name,{components:{GroupTitle:m}}))||(0,i.jsx)(m,{children:A.name},A.name)}),(0,i.jsx)("ul",{className:"".concat(r,"-list"),children:H})]},A.name||"key-".concat(w))}return H})}))]})},be=ue},24963:function(Ke,Z,e){"use strict";e.r(Z),e.d(Z,{Audios:function(){return pe},DeepThink:function(){return y},DeepThinking:function(){return y},Files:function(){return c},Footer:function(){return se},FooterActions:function(){return C.p4},FooterCount:function(){return C.hw},Images:function(){return L},Interrupted:function(){return F},Text:function(){return J},Videos:function(){return ge}});var G=e(67294),d=e(14082),S=e(85893);function y(N){return(0,S.jsx)(d.Z,{defaultOpen:N.data.defaultOpen!==void 0?N.data.defaultOpen:!0,title:N.data.title,loading:N.data.loading,content:N.data.content,className:N.data.className,open:N.data.open,autoCloseOnFinish:N.data.autoCloseOnFinish,maxHeight:N.data.maxHeight})}var M=e(68400),b=e.n(M),E=e(23345),_=e(36417),I=e(9053),v=e(56044),h=e(6411),B,i=(0,I.vJ)(B||(B=b()([`
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
`])),function(N){return N.theme.prefixCls},function(N){return N.theme.prefixCls},function(N){return N.theme.borderRadius},function(N){return N.theme.colorWhite},function(N){return N.theme.motionDurationSlow},function(N){return N.theme.prefixCls},function(N){return N.theme.prefixCls});function c(N){var ce=(0,v.wv)(),V=ce.getPrefixCls,me=V("bubble-files");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(i,{}),(0,S.jsx)(E.Z,{className:me,children:N.data.map(function(Fe,We){var He={name:Fe.name||Fe.filename,size:Fe.size||Fe.bytes,url:Fe.url};return(0,S.jsxs)("div",{className:"".concat(me,"-file"),children:[(0,S.jsx)(_.Z.FileCard,{item:He}),He.url&&(0,S.jsx)("div",{className:"".concat(me,"-download"),onClick:function(){window.open(He.url,"_blank")},children:(0,S.jsx)(h.Z,{})})]},We)})})]})}var o=e(13811),m=e(55839),R,s=(0,I.vJ)(R||(R=b()([`
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
`])),function(N){return N.theme.prefixCls},function(N){return N.theme.prefixCls},function(N){return N.theme.prefixCls},function(N){return N.theme.prefixCls});function n(N){var ce=(0,v.wv)(),V=ce.getPrefixCls,me=V("bubble-image");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(s,{}),(0,S.jsx)("div",{className:"".concat(me),children:(0,S.jsx)(o.Z,{fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",src:N.url,width:56,height:56,preview:{transitionName:""}})})]})}function L(N){return(0,S.jsx)(m.ZP,{locale:{Image:{preview:""}},children:(0,S.jsx)(E.Z,{children:N.data.map(function(ce,V){return(0,S.jsx)(n,{url:ce.url},V)})})})}var u=e(97857),W=e.n(u),q=e(82679);function J(N){var ce=N.data.msgStatus==="generating";return(0,S.jsx)(q.Z,W()(W()({cursor:ce},N.data),{},{typing:N.data.msgStatus==="generating"?N.data.typing:!1}))}var C=e(67369);function se(N){return(0,S.jsx)(C.ZP,W()({},N.data))}var $=e(10146);function F(N){return(0,S.jsx)($.Z,W()({},N.data))}var z=e(86422),ae;function ge(N){var ce=(0,v.wv)().getPrefixCls("bubble-video");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(x,{}),(0,S.jsx)(E.Z,{children:N.data.map(function(V,me){return(0,S.jsx)(z.Z,{className:ce,src:V.src,poster:V.poster,controls:!0},me)})})]})}var x=(0,I.vJ)(ae||(ae=b()([`
.`,`-bubble-video {
  max-width: 256px;
  max-height: 144px;
  border-radius: 8px;
  border: 1px solid `,`;
  overflow: hidden;
}
`])),function(N){return N.theme.prefixCls},function(N){return N.theme.colorBorderSecondary});function pe(){return(0,S.jsx)("div",{children:"Audio"})}},55031:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return q}});var G=e(56044),d=e(31382),S=e(55839),y=e(13811),M=e(33948),b=e(52253),E=e(56137),_=e(1948),I=e(61763),v=e(77900),h=e(40443),B=e(33119),i=e(4356),c=e(72816),o=e(77382),m=e(72167),R=e(74398),s=e(55094),n=e(61401),L=e(85893),u={Click:{name:"\u70B9\u51FB",icon:(0,L.jsx)(M.Z,{})},Swipe:{name:"\u6ED1\u52A8",icon:(0,L.jsx)(b.Z,{})},Type:{name:"\u8F93\u5165",icon:(0,L.jsx)(E.Z,{})},Back:{name:"\u8FD4\u56DE",icon:(0,L.jsx)(_.Z,{})},Home:{name:"\u4E3B\u9875",icon:(0,L.jsx)(I.Z,{})},Done:{name:"\u5B8C\u6210",icon:(0,L.jsx)(v.Z,{})},Wait:{name:"\u7B49\u5F85",icon:(0,L.jsx)(h.Z,{spin:!0})},click:{name:"\u70B9\u51FB",icon:(0,L.jsx)(M.Z,{})},"right click":{name:"\u53F3\u952E\u70B9\u51FB",icon:(0,L.jsx)(M.Z,{})},"open app":{name:"\u6253\u5F00\u5E94\u7528",icon:(0,L.jsx)(B.Z,{})},computer_double_click:{name:"\u53CC\u51FB",icon:(0,L.jsx)(i.Z,{})},hotkey:{name:"\u5FEB\u6377\u952E",icon:(0,L.jsx)(c.Z,{})},presskey:{name:"\u6309\u952E",icon:(0,L.jsx)(o.Z,{})},scroll:{name:"\u6EDA\u52A8",icon:(0,L.jsx)(b.Z,{})},drag:{name:"\u62D6\u62FD",icon:(0,L.jsx)(m.Z,{})},type_with_clear_enter_pos:{name:"\u8F93\u5165\u5E76\u6E05\u9664",icon:(0,L.jsx)(E.Z,{})},triple_click:{name:"\u4E09\u51FB",icon:(0,L.jsx)(R.Z,{})},drag_end:{name:"\u62D6\u62FD\u7ED3\u675F",icon:(0,L.jsx)(m.Z,{})},type:{name:"\u8F93\u5165",icon:(0,L.jsx)(E.Z,{})},hscroll:{name:"\u6C34\u5E73\u6EDA\u52A8",icon:(0,L.jsx)(s.Z,{})},done:{name:"\u5B8C\u6210",icon:(0,L.jsx)(v.Z,{})},wait:{name:"\u7B49\u5F85",icon:(0,L.jsx)(h.Z,{spin:!0})},call_user:{name:"\u547C\u53EB\u7528\u6237",icon:(0,L.jsx)(n.Z,{})}},W=u;function q(J){var C,se,$=(0,G.wv)(),F=$.getPrefixCls,z=F("operate-card");return(0,L.jsxs)("div",{children:[(0,L.jsx)("div",{className:"".concat(z,"-device-action-time"),children:J.time}),(0,L.jsx)(d.Z,{header:{className:"".concat(z,"-device-action"),icon:(0,L.jsx)("div",{className:"".concat(z,"-device-action-icon"),children:(C=W[J.action])===null||C===void 0?void 0:C.icon}),title:(0,L.jsxs)("div",{className:"".concat(z,"-device-action-content"),children:[(0,L.jsxs)("div",{className:"".concat(z,"-device-action-description"),children:[(0,L.jsx)("span",{children:J.actionName||((se=W[J.action])===null||se===void 0?void 0:se.name)}),(0,L.jsx)("span",{children:J.description})]}),(0,L.jsx)("div",{className:"".concat(z,"-device-action-image"),children:(0,L.jsx)(S.ZP,{locale:{Image:{preview:""}},children:(0,L.jsx)(y.Z,{src:J.image,alt:J.description,width:"100%",height:"100%"})})})]})}})]})}},10325:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return I}});var G=e(67294),d=e(68400),S=e.n(d),y=e(9053),M,b=(0,y.vJ)(M||(M=S()([`
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
`])),function(v){return v.theme.prefixCls},function(v){return v.theme.colorTextTertiary},function(v){return v.theme.prefixCls}),E=e(56044),_=e(85893);function I(v){var h=v.desc,B=h===void 0?"AI can also make mistakes, so please check carefully and use it with caution":h,i=(0,E.wv)(),c=i.getPrefixCls,o=c("disclaimer");return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(b,{}),(0,_.jsxs)("div",{className:o,style:v.style,children:[B,v.afterLink&&(0,_.jsx)("a",{className:"".concat(o,"-after-link"),href:v.afterLink.href,target:"_blank",children:v.afterLink.text})]})]})}},80115:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return d}});var G=e(85893);function d(){return(0,G.jsx)("iframe",{srcDoc:`<html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>`})}},28446:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return c}});var G=e(67294),d=e(68400),S=e.n(d),y=e(9053),M,b=(0,y.vJ)(M||(M=S()([`
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
      

      &-animate {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 250%;
        height: 250%;
        transform: translate(-50%, -50%) rotate(0deg);
        animation: `,`spin 6s linear infinite;
        background: radial-gradient(103.37% 63.46% at 108.3% 0%, rgba(122, 239, 214, 0.60) 0%, rgba(122, 239, 214, 0.00) 100%), radial-gradient(176.66% 108.46% at -9.16% 114.87%, #938CD4 0%, #E4E2FD 100%), #E4E2FD;
      }
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

@keyframes `,`spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.colorText},function(o){return o.theme.colorSuccess},function(o){return o.theme.prefixCls},function(o){return o.theme.colorBgBase},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls}),E=e(56044),_=e(55839),I=e(13811),v=e(89034),h=e(36374),B=e(85893),i=function(m){var R=(0,E.wv)(),s=R.getPrefixCls,n=s("image-generator"),L=m.block,u=m.skeletonText,W=m.width,q=W===void 0?320:W,J=m.height,C=J===void 0?320:J,se=m.src,$=m.loadingText,F=$===void 0?"Painting...":$,z=m.doneText,ae=z===void 0?"Paint Completed":z,ge=m.skeleton||(0,B.jsxs)("div",{className:"".concat(n,"-default-skeleton"),style:{width:"100%",height:"100%"},children:[(0,B.jsx)("div",{className:"".concat(n,"-default-skeleton-bg"),children:(0,B.jsx)("div",{className:"".concat(n,"-default-skeleton-bg-animate")})}),(0,B.jsxs)("div",{className:"".concat(n,"-default-skeleton-content"),children:[(0,B.jsx)("img",{className:"".concat(n,"-default-skeleton-icon"),src:"https://img.alicdn.com/imgextra/i2/O1CN01M1X8yM1MWUC7u3Go5_!!6000000001442-54-tps-72-72.apng"}),u&&(0,B.jsx)("div",{className:"".concat(n,"-default-skeleton-text"),children:u})]})]}),x=!se,pe=L?{aspectRatio:"".concat(q,"/").concat(C)}:{width:q,height:C};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(b,{}),(0,B.jsxs)("div",{className:n,children:[(0,B.jsxs)("div",{className:"".concat(n,"-text"),children:[x?(0,B.jsx)(h.Z,{}):(0,B.jsx)(v.Z,{className:"".concat(n,"-text-success")}),x?(0,B.jsx)("span",{style:{paddingLeft:20},children:F}):ae]}),(0,B.jsx)("div",{className:"".concat(n,"-wrapper"),style:pe,children:x?ge:(0,B.jsx)(_.ZP,{locale:{Image:{preview:""}},children:(0,B.jsx)(I.Z,{width:"100%",height:"100%",src:se})})})]})]})},c=i},82679:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return Le}});var G=e(97857),d=e.n(G),S=e(67294),y=e(13769),M=e.n(y),b=e(44768),E=e(68400),_=e.n(E),I=e(9053),v,h=(0,I.vJ)(v||(v=_()([`
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

  pre {
    background-color: `,`;
    padding: 4px 10px;
    border: 1px solid `,`;
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
`])),function(p){return p.theme.prefixCls},function(p){return p.theme.colorBorder},function(p){return p.theme.colorFillQuaternary},function(p){return p.theme.colorText},function(p){return p.theme.borderRadiusSM},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorFillQuaternary},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorFillQuaternary},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls});function B(p){var ne=p.cursor,oe=p.content,P=(0,S.useMemo)(function(){return ne?ne==="dot"?" :dot:":ne==="underline"?" :underline:":" :dot:":""},[ne,oe]);return oe+P}var i=e(85893),c=["content","cursor"];function o(p){var ne=p.content,oe=p.cursor,P=M()(p,c),Q=B({cursor:oe,content:ne});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h,{}),(0,i.jsx)(b.Z,d()(d()({},P),{},{content:Q}))]})}var m=e(5574),R=e.n(m),s=function(ne){var oe=ne.content,P=ne.typing,Q=(0,S.useState)(0),r=R()(Q,2),O=r[0],j=r[1],A=(0,S.useRef)();return(0,S.useEffect)(function(){return P?A.current=setInterval(function(){j(function(w){return w+1})},typeof P=="number"?P:5):A.current&&clearInterval(A.current),function(){return clearInterval(A.current)}},[P]),P?oe.slice(0,O):oe},n=s,L=e(56044),u=e(93967),W=e.n(u),q=function(){return null},J=e(4146),C=e(12181),se=e(9361),$=e(97634),F=e(89698),z,ae,ge,x,pe=Object.keys(J.xO),N=function(ne){var oe=/\n/g,P=ne.match(oe);return P?P.length:1},ce=function(ne){if(!ne)return{};var oe=ne.props,P=oe.children,Q=oe.className;if(!P)return{};var r=Array.isArray(P)?P[0]:P,O=(Q==null?void 0:Q.replace("language-",""))||"txt",j=N(r)<=1&&r.length<=32;return{content:r,isSingleLine:j,lang:O}},V=function(ne){var oe=ne.children,P=ne.enableMermaid,Q=ce(oe),r=me(),O=r.styles,j=r.cx,A=(0,L.wv)(),w=A.getPrefixCls,H=A.theme,K=(H==null?void 0:H.algorithm)===se.Z.darkAlgorithm,xe=(0,S.useState)(!1),Be=R()(xe,2),Ne=Be[0],un=Be[1],tn=Q.content,nn=tn===void 0?"":tn,ve=Q.lang,$e=ve===void 0?"":ve,hn=(0,S.useMemo)(function(){return nn.replace(/ :(dot|underline):/g,"")},[nn]);return hn?$e==="mermaid"?(0,i.jsx)(C.Z,{content:hn,width:"50%"}):pe.indexOf($e)===-1?(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:hn})}):(0,i.jsxs)("div",{className:O.container,children:[(0,i.jsxs)("div",{className:O.header,children:[(0,i.jsx)("div",{className:O.lang,children:$e}),Ne?(0,i.jsx)($.Z,{className:O.copied}):(0,i.jsx)(F.Z,{className:O.icon,onClick:function(){navigator.clipboard.writeText(hn),un(!0),setTimeout(function(){un(!1)},1e3)}})]}),(0,i.jsx)(J.ZP,{value:hn,language:$e,theme:K?"dark":"light",readOnly:!0})]}):null},me=(0,I.kc)(function(p){var ne=p.css,oe=p.token;return{copied:ne(z||(z=_()([`
    color: `,`;
    cursor: pointer;
    font-size: 16px;
  `])),oe.colorSuccess),container:ne(ae||(ae=_()([`
    border: 1px solid `,`;
    border-radius: 6px;
    overflow: hidden;
    font-size: 0.8571428571428571em;
    margin: 1em 0;
  `])),oe.colorBorderSecondary),header:ne(ge||(ge=_()([`
    display: flex;
    justify-content: space-between;
    background: `,`;
    height: 28px;
    line-height: 28px;
    border-radius: 4px 4px 0 0;
    align-items: center;
    user-select: none;
    position: relative;
    padding: 0 12px;
  `])),oe.colorFillSecondary),icon:ne(x||(x=_()([`
    fontsize: 16px;
    cursor: pointer;
  `]))),lang:{textTransform:"capitalize"}}}),Fe=V;function We(p){return(0,i.jsx)("a",{href:p.src,target:"_blank",rel:"noopener noreferrer",children:p.src})}var He=e(55839),rn=e(13811),en=e(85576),k=e(36231),ue=e(89102);function be(p){try{var ne=p.src,oe=new URL(ne),P=oe.pathname,Q=P.endsWith(".mp4"),r=P.endsWith(".mp3")||P.endsWith(".wav");return r?(0,i.jsx)("audio",d()(d()({src:p.src},p),{},{controls:!0})):Q?(0,i.jsx)(ee,d()({src:p.src},p)):(0,i.jsx)(D,d()({src:p.src},p))}catch(O){return null}}function D(p){return(0,i.jsx)(He.ZP,{locale:{Image:{preview:""}},children:(0,i.jsx)(rn.Z,d()({src:p.src},p))})}function ee(p){var ne=p.src,oe=(0,S.useState)(!1),P=R()(oe,2),Q=P[0],r=P[1],O=(0,L.wv)(),j=O.getPrefixCls,A=j("markdown-video");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:A,children:(0,i.jsx)("div",{className:"".concat(A,"-poster"),onClick:function(){return r(!0)},children:(0,i.jsx)(k.Z,{className:"".concat(A,"-play")})})}),(0,i.jsx)(en.Z,{closeIcon:(0,i.jsx)("a",{children:(0,i.jsx)(ue.Z,{style:{fontSize:20}})}),centered:!0,transitionName:"",footer:null,width:500,title:"",styles:{content:{padding:0}},open:Q,destroyOnHidden:!0,onCancel:function(){return r(!1)},children:(0,i.jsx)("video",{controls:!0,autoPlay:!0,style:{display:"block",width:"100%"},children:(0,i.jsx)("source",{src:ne,type:"video/mp4"})})})]})}function X(p){var ne=(0,L.wv)().getPrefixCls("markdown");return(0,i.jsx)("div",{className:ne,style:{fontSize:p.baseFontSize,lineHeight:p.baseLineHeight},children:p.content})}var Oe=e(79427),Ae=e(55241),Pe,Ce=(0,I.vJ)(Pe||(Pe=_()([`
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
`])),function(p){return p.theme.prefixCls},function(p){return p.theme.colorTextSecondary},function(p){return p.theme.colorFillSecondary},function(p){return p.theme.motionEaseOut},function(p){return p.theme.colorWhite},function(p){return p.theme.colorPrimary});function Ye(p){var ne=(0,L.wv)(),oe=ne.getPrefixCls,P=oe("markdown-citation"),Q=p["data-text"],r=p["data-url"],O=p["data-title"],j=p["data-content"],A=j||O,w=(0,i.jsx)("sup",{className:P,children:Q});return A&&(w=(0,i.jsx)(Ae.Z,{title:O,content:r?(0,i.jsx)("a",{href:r,rel:"noreferrer",target:"_blank",children:r}):j,children:w})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ce,{}),w]})}function De(p){var ne,oe=((ne=p.citationsData[p["data-text"]])===null||ne===void 0?void 0:ne.render)||Ye;return(0,i.jsx)(oe,d()({},p))}var ze=[],sn={};function Xe(p){var ne=p.citations,oe=ne===void 0?ze:ne,P=p.citationsMap,Q=P===void 0?sn:P,r=(0,S.useMemo)(function(){var w=d()({},Q);return oe.forEach(function(H,K){var xe=K+1;w[xe]=H}),[w,function(){return function(K){return(0,i.jsx)(De,d()(d()({},K),{},{citationsData:w}))}}()]},[oe,Q]),O=R()(r,2),j=O[0],A=O[1];return{CitationComponent:A,citationsData:j,citationsDataCount:Object.keys(j).length}}var Se=e(30861);function xn(p){return{name:"citation",level:"inline",tokenizer:function(oe){var P=oe.match(/^\[([^\]]+)\](?!\()/);if(P){var Q=P[0].trim(),r=Q==null?void 0:Q.replace(/^\[([^\]]+)\]/g,"$1");if(p[r])return{type:"citation",raw:Q,text:Q==null?void 0:Q.replace(/^\[([^\]]+)\]/g,"$1"),renderType:"component"}}},renderer:function(oe){if(p&&Object.keys(p).length===0)return null;var P=oe.text,Q=p==null?void 0:p[P];return Q?'<citation data-text="'.concat(P,'" data-url="').concat(Q.url,'" data-title="').concat(Q.title,'" data-content="').concat(Q.content,'"></citation>'):oe.raw}}}var t,Ee=(0,I.vJ)(t||(t=_()([`
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
`])),function(p){var ne=p.theme;return ne.colorPrimary});function Ie(){var p=(0,L.wv)(),ne=p.getPrefixCls,oe="markdown-cursor-underline";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ee,{}),(0,i.jsx)("span",{className:W()(oe,ne("markdown-cursor"))})]})}var Me=e(36374),fe=function(ne){var oe=ne["data-type"];return oe==="dot"?(0,i.jsx)(Me.Z,{}):oe==="underline"?(0,i.jsx)(Ie,{}):null};function Ve(){var p={cursors:{dot:"dot",underline:"underline"}},ne=Object.keys(p.cursors).map(function(Q){return Q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|"),oe=new RegExp(":(".concat(ne,"):")),P=new RegExp("^".concat(oe.source));return{name:"cursor",level:"inline",start:function(r){var O;return(O=r.match(oe))===null||O===void 0?void 0:O.index},tokenizer:function(r,O){var j=P.exec(r);if(j){var A=j[1],w=p.cursors[A];if(w)return{type:"cursor",raw:j[0],name:A,cursor:w}}},renderer:function(r){var O='<custom-cursor data-type="'.concat(r.name,'"></custom-cursor>');return O}}}var an={ALLOWED_TAGS:[]};function cn(){try{return new RegExp("(?<=a)b"),!0}catch(p){return!1}}var qe=cn(),Le=(0,S.memo)(function(p){var ne=p.baseFontSize||14,oe=p.baseLineHeight||1.7,P=n({content:p.content,typing:p.typing}),Q=(0,L.wv)().getPrefixCls("markdown"),r=p.raw,O=r===void 0?!1:r,j=p.allowHtml,A=j===void 0?!0:j,w=Xe({citations:p.citations,citationsMap:p.citationsMap}),H=w.citationsData,K=w.citationsDataCount,xe=w.CitationComponent,Be=(0,S.useMemo)(function(){return d()({pre:Fe,style:q,script:q,img:p.disableImage?We:be,citation:xe,"custom-cursor":fe},p.components)},[p.disableImage,xe,p.components]),Ne=(0,S.useMemo)(function(){return A?{ADD_TAGS:["custom-cursor","citation"]}:an},[A]),un=(0,S.useMemo)(function(){var ve=(0,Se.Z)();return ve.push(Ve()),K>0&&ve.push(xn(H)),ve},[K,H]),tn=(0,S.useMemo)(function(){return{extensions:un}},[un]),nn=(0,i.jsx)(X,{content:P||"",baseFontSize:ne,baseLineHeight:oe});return O||!qe?nn:(0,i.jsx)(Oe.SV,{fallback:nn,children:(0,i.jsx)(o,{dompurifyConfig:Ne,cursor:p.cursor,components:Be,style:{fontSize:ne,lineHeight:oe},openLinksInNewTab:!0,className:W()(Q,p.className),content:P||"",config:tn})})})},36374:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return v}});var G=e(68400),d=e.n(G),S=e(56044),y=e(9053),M=e(93967),b=e.n(M),E=e(85893),_,I=(0,y.vJ)(_||(_=d()([`
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
`])),function(h){return h.theme.prefixCls},function(h){return h.theme.colorText},function(h){return h.theme.colorText});function v(){var h=(0,S.wv)(),B=h.getPrefixCls,i=B("markdown-cursor-dot");return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(I,{}),(0,E.jsxs)("span",{className:b()(i,B("markdown-cursor")),children:[(0,E.jsx)("span",{style:{opacity:0,marginLeft:"-.75em"},children:"_"}),(0,E.jsx)("span",{className:"".concat(i,"-dot1")}),(0,E.jsx)("span",{className:"".concat(i,"-dot2")})]})]})}},12181:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return W}});var G=e(5574),d=e.n(G),S=e(15009),y=e.n(S),M=e(99289),b=e.n(M),E=e(68400),_=e.n(E),I=e(41469),v=e(2093),h=e(9361),B=e(96486),i=e.n(B),c=e(67294),o=e(56044),m=e(9053),R=e(85893),s,n=(0,m.vJ)(s||(s=_()([`
.`,`-mermaid {
  &-preview img {
    background: `,`;
  }
}
`])),function(q){return q.theme.prefixCls},function(q){return q.theme.colorBgBase}),L,u=function(){var q=b()(y()().mark(function J(){return y()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:if(!L){se.next=2;break}return se.abrupt("return",L);case 2:return L=e.e(6637).then(e.bind(e,76637)).then(function($){return $.default}),se.abrupt("return",L);case 4:case"end":return se.stop()}},J)}));return function(){return q.apply(this,arguments)}}();function W(q){var J=q.content,C=q.width,se=q.height,$=(0,o.wv)(),F=$.theme,z=$.getPrefixCls,ae=z("mermaid"),ge=(0,c.useMemo)(function(){return{theme:(F==null?void 0:F.algorithm)===h.Z.darkAlgorithm?"dark":"default",securityLevel:"loose",startOnLoad:!1}},[F==null?void 0:F.algorithm,F==null?void 0:F.token.fontFamily]),x=(0,c.useState)(""),pe=d()(x,2),N=pe[0],ce=pe[1],V=(0,c.useState)(),me=d()(V,2),Fe=me[0],We=me[1],He=(0,c.useId)(),rn=(0,B.kebabCase)("mermaid-".concat(He));return(0,v.Z)(b()(y()().mark(function en(){var k,ue,be,D;return y()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.prev=0,X.next=3,u();case 3:if(k=X.sent,k){X.next=7;break}return ce(J),X.abrupt("return");case 7:return X.next=9,k.parse(J);case 9:if(ue=X.sent,!ue){X.next=19;break}return k.initialize(ge),X.next=14,k.render(rn,J);case 14:be=X.sent,D=be.svg,ce(D),X.next=20;break;case 19:throw new Error("Invalid Mermaid syntax");case 20:X.next=26;break;case 22:X.prev=22,X.t0=X.catch(0),N||console.error("Mermaid parse error: ",X.t0),ce(N||"");case 26:case"end":return X.stop()}},en,null,[[0,22]])})),[J,ge]),(0,c.useEffect)(function(){if(N){var en=new Blob([N],{type:"image/svg+xml"}),k=URL.createObjectURL(en);return We(k),function(){URL.revokeObjectURL(k)}}},[N]),Fe?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(n,{}),(0,R.jsx)(I.Z,{className:ae,src:Fe,alt:"mermaid",width:C,height:se,preview:{rootClassName:"".concat(ae,"-preview")}})]}):null}},31382:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return L}});var G=e(9783),d=e.n(G),S=e(5574),y=e.n(S),M=e(67294),b=e(56044),E=e(68400),_=e.n(E),I=e(9053),v,h=(0,I.vJ)(v||(v=_()([`
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
`])),function(u){return u.theme.prefixCls},function(u){return u.theme.borderRadiusLG},function(u){return u.theme.colorFillTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.prefixCls},function(u){return u.theme.prefixCls},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorText},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorBgBase},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorText},function(u){return u.theme.colorFillTertiary},function(u){return u.theme.colorFillQuaternary},function(u){return u.theme.colorTextTertiary}),B=e(93967),i=e.n(B),c=e(28387),o=e(9838),m=e(64057),R=e(85893);function s(u){var W=(0,b.wv)(),q=W.getPrefixCls,J=q("operate-card");return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)("div",{className:"".concat(J,"-line-body"),children:u.children})})}function n(u){var W,q=(0,b.wv)(),J=q.getPrefixCls,C=J("operate-card"),se=(0,M.useState)(((W=u.body)===null||W===void 0?void 0:W.defaultOpen)||!1),$=y()(se,2),F=$[0],z=$[1];return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(h,{}),(0,R.jsxs)("div",{className:C,children:[(0,R.jsxs)("div",{className:i()("".concat(C,"-header"),u.header.className,d()({},"".concat(C,"-header-has-body"),u.body)),onClick:function(){u.body&&z(!F)},children:[(0,R.jsx)("div",{className:"".concat(C,"-header-icon"),children:u.header.icon}),typeof u.header.title=="string"?(0,R.jsx)("div",{className:"".concat(C,"-header-title"),children:u.header.title}):u.header.title,u.header.description&&(0,R.jsx)("div",{className:"".concat(C,"-header-description"),children:u.header.description}),u.body&&(0,R.jsx)(m.Z,{size:"small",bordered:!1,className:"".concat(C,"-header-arrow"),icon:F?(0,R.jsx)(c.Z,{}):(0,R.jsx)(o.Z,{})})]}),u.body&&F&&(0,R.jsx)("div",{className:"".concat(C,"-body"),children:u.body.children})]})]})}n.LineBody=s;var L=n},85762:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return R}});var G=e(5574),d=e.n(G),S=e(56044),y=e(31382),M=e(64057),b=e(28387),E=e(9838),_=e(48095),I=e(50104),v=e(55839),h=e(13811),B=e(86250),i=e(67294),c=e(85893);function o(s){var n=s.images,L=(0,S.wv)(),u=L.getPrefixCls,W=u("operate-card");return(0,c.jsx)(v.ZP,{locale:{Image:{preview:""}},children:(0,c.jsx)(h.Z.PreviewGroup,{children:n.map(function(q,J){return(0,c.jsx)(h.Z,{src:q,width:44,height:44},J)})})})}function m(s){var n=s.item,L=(0,i.useState)(!1),u=d()(L,2),W=u[0],q=u[1],J=(0,S.wv)(),C=J.getPrefixCls,se=C("operate-card");return(0,c.jsxs)("div",{className:"".concat(se,"-rag-item"),children:[(0,c.jsxs)("div",{className:"".concat(se,"-rag-item-title"),onClick:function(){q(!W)},children:[(0,c.jsx)("span",{children:n.title}),(0,c.jsx)("span",{style:{flex:1}}),n.score||null,(0,c.jsx)(M.Z,{bordered:!1,size:"small",icon:W?(0,c.jsx)(b.Z,{}):(0,c.jsx)(E.Z,{})})]}),W&&(0,c.jsxs)("div",{className:"".concat(se,"-rag-item-content"),children:[(0,c.jsx)("div",{className:"".concat(se,"-rag-item-content-text"),children:n.content}),n.images&&(0,c.jsx)("div",{className:"".concat(se,"-rag-item-images"),children:(0,c.jsx)(o,{images:n.images})}),n.link?(0,c.jsx)("a",{onClick:function(){window.open(n.link,"_blank")},className:"".concat(se,"-rag-item-footer"),href:n.link,target:"_blank",children:n.footer}):(0,c.jsx)("div",{className:"".concat(se,"-rag-item-footer"),children:n.footer})]})]})}function R(s){var n=s.title,L=n===void 0?"\u77E5\u8BC6\u5E93\u68C0\u7D22":n,u=s.subTitle,W=s.defaultOpen,q=W===void 0?!0:W,J=s.placeholder,C=J===void 0?"\u672A\u67E5\u8BE2\u5230\u4E0E\u63D0\u95EE\u76F8\u5173\u77E5\u8BC6\u5E93":J,se=s.query,$=s.queryTitle,F=$===void 0?"\u68C0\u7D22 Query\uFF1A":$,z=s.images,ae=(0,S.wv)(),ge=ae.getPrefixCls,x=ge("operate-card"),pe=s.list.length?(0,c.jsx)(y.Z.LineBody,{children:s.list.map(function(N,ce){return(0,c.jsx)(m,{item:N},ce)})}):(0,c.jsxs)(B.Z,{align:"center",justify:"center",gap:8,className:"".concat(x,"-rag-empty-placeholder"),children:[(0,c.jsx)(_.Z,{}),(0,c.jsx)("span",{children:C})]});return(0,c.jsx)(y.Z,{header:{icon:(0,c.jsx)(I.Z,{}),title:L,description:u},body:{defaultOpen:q,children:(0,c.jsxs)(c.Fragment,{children:[se?(0,c.jsxs)("div",{className:"".concat(x,"-rag-query"),children:[(0,c.jsx)("span",{className:"".concat(x,"-rag-query-title"),children:F}),se]}):null,z!=null&&z.length?(0,c.jsx)("div",{className:"".concat(x,"-rag-query-images"),children:(0,c.jsx)(o,{images:z})}):null,pe]})}})}},79323:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return b}});var G=e(56044),d=e(31382),S=e(40443),y=e(33593),M=e(85893);function b(E){var _=(0,G.wv)(),I=_.getPrefixCls,v=E.defaultOpen,h=v===void 0?!0:v,B=E.loading,i=B===void 0?!1:B,c=I("operate-card");return(0,M.jsx)(d.Z,{header:{icon:i?(0,M.jsx)(S.Z,{spin:!0}):(0,M.jsx)(y.Z,{}),title:E.title,description:E.subTitle},body:{defaultOpen:h,children:(0,M.jsx)(d.Z.LineBody,{children:(0,M.jsx)("div",{className:"".concat(c,"-thinking"),children:E.content})})}})}},6874:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return h}});var G=e(9783),d=e.n(G),S=e(56044),y=e(31382),M=e(41775),b=e(77900),E=e(40443),_=e(93967),I=e.n(_),v=e(85893);function h(B){var i=(0,S.wv)(),c=i.getPrefixCls,o=c("operate-card"),m=B.title,R=m===void 0?"Task List":m,s=B.list.filter(function(n){return n.status==="done"}).length;return(0,v.jsx)(y.Z,{header:{icon:(0,v.jsx)(M.Z,{}),title:R,description:"\xB7 ".concat(s?s+" of ":""," ").concat(B.list.length)},body:{defaultOpen:B.defaultOpen,children:(0,v.jsx)("div",{className:"".concat(o,"-todo-list"),children:B.list.map(function(n){return(0,v.jsxs)("div",{className:I()(d()(d()({},"".concat(o,"-todo-list-item"),!0),"".concat(o,"-todo-list-item-").concat(n.status),!0)),children:[(0,v.jsx)("div",{className:"".concat(o,"-todo-list-item-icon"),children:{done:(0,v.jsx)(b.Z,{}),todo:(0,v.jsx)(b.Z,{}),running:(0,v.jsx)(E.Z,{spin:!0})}[n.status]}),(0,v.jsx)("div",{className:"".concat(o,"-todo-list-item-title"),style:{textDecoration:n.status==="done"?"line-through":"none"},children:n.title})]},n.title)})})}})}},85786:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return o}});var G=e(5574),d=e.n(G),S=e(56044),y=e(31382),M=e(97634),b=e(89698),E=e(40443),_=e(78598),I=e(33811),v=e(64057),h=e(4146),B=e(67294),i=e(85893);function c(m){var R=(0,S.wv)(),s=R.getPrefixCls,n=s("operate-card"),L=typeof m.content=="string"?m.content:JSON.stringify(m.content),u=(0,B.useState)(!1),W=d()(u,2),q=W[0],J=W[1],C=(0,B.useRef)(null);return(0,i.jsx)("div",{className:"".concat(n,"-tool-call-block"),children:(0,i.jsx)(I.Z,{title:m.title,extra:(0,i.jsx)(v.Z,{size:"small",style:{marginRight:"-6px"},icon:q?(0,i.jsx)(M.Z,{}):(0,i.jsx)(b.Z,{}),bordered:!1,onClick:function(){clearTimeout(C.current),navigator.clipboard.writeText(L),J(!0),C.current=setTimeout(function(){J(!1)},2e3)}}),children:(0,i.jsx)(h.ZP,{language:"json",value:L,readOnly:!0})})})}function o(m){var R=m.title,s=R===void 0?"Call Tool":R,n=m.subTitle,L=m.defaultOpen,u=L===void 0?!0:L,W=m.loading,q=W===void 0?!1:W;return(0,i.jsx)(y.Z,{header:{icon:q?(0,i.jsx)(E.Z,{spin:!0}):(0,i.jsx)(_.Z,{}),title:s,description:n},body:{defaultOpen:u,children:(0,i.jsxs)(y.Z.LineBody,{children:[(0,i.jsx)(c,{title:"Input",content:m.input}),(0,i.jsx)(c,{title:"Output",content:m.output})]})}})}},69610:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return I}});var G=e(9783),d=e.n(G),S=e(56044),y=e(31382),M=e(9229),b=e(93967),E=e.n(b),_=e(85893);function I(v){var h=(0,S.wv)(),B=h.getPrefixCls,i=B("operate-card"),c=v.title,o=c===void 0?"\u8054\u7F51\u641C\u7D22":c,m=v.subTitle;return(0,_.jsx)(y.Z,{header:{icon:(0,_.jsx)(M.Z,{}),title:o,description:m},body:{defaultOpen:!0,children:(0,_.jsx)(y.Z.LineBody,{children:v.list.map(function(R){return(0,_.jsxs)("div",{className:E()(d()({},"".concat(i,"-web-search-item"),!0)),onClick:function(){window.open(R.link,"_blank")},children:[(0,_.jsx)("img",{className:"".concat(i,"-web-search-item-icon"),src:R.icon,alt:R.title}),(0,_.jsx)("div",{className:"".concat(i,"-web-search-item-title"),children:R.title}),R.subTitle&&(0,_.jsx)("div",{className:"".concat(i,"-web-search-item-subTitle"),children:R.subTitle})]},R.title)})})}})}},56809:function(Ke,Z,e){"use strict";e.d(Z,{B4:function(){return d.Z},BI:function(){return G.Z},Sn:function(){return M.Z},fz:function(){return y.Z},x4:function(){return S.Z}});var G=e(79323),d=e(6874),S=e(85786),y=e(69610),M=e(85762)},83962:function(Ke,Z,e){"use strict";e.d(Z,{HJ:function(){return _},NR:function(){return b},xy:function(){return E}});var G=e(97857),d=e.n(G),S=e(67294),y=e(24963),M=e(85893),b=(0,S.createContext)(void 0),E=function(v){return(0,M.jsx)(b.Provider,{value:v.cardConfig,children:v.children})},_=function(){var v=S.useContext(b);return S.useMemo(function(){return d()(d()({},y),v)},[v])}},92049:function(Ke,Z,e){"use strict";e.d(Z,{R:function(){return y},bN:function(){return M}});var G=e(67294),d=e(85893),S=(0,G.createContext)(void 0),y=function(E){return(0,d.jsx)(S.Provider,{value:E,children:E.children})},M=function(){var E=G.useContext(S);return E||{}}},56044:function(Ke,Z,e){"use strict";e.d(Z,{wv:function(){return E}});var G=e(17300),d=e(67294),S=e(83962),y=e(92049),M=e(85893),b=function(I){var v=I.children,h=I.cardConfig,B=I.markdown;return(0,M.jsx)(y.R,{markdown:B,children:(0,M.jsx)(S.xy,{cardConfig:h,children:v})})};function E(){var _=d.useContext(G.ZP.ConfigContext);return _}Z.ZP=b},44294:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return i},a:function(){return v}});var G=e(97857),d=e.n(G),S=e(24772),y=e(83622),M=e(93967),b=e.n(M),E=e(29372),_=e(67294),I=e(85893),v=_.createContext({}),h=function(){return{height:0}},B=function(o){return{height:o.scrollHeight}};function i(c){var o=c.title,m=c.onOpenChange,R=c.open,s=c.children,n=c.className,L=c.style,u=c.classNames,W=u===void 0?{}:u,q=c.styles,J=q===void 0?{}:q,C=c.closable,se=c.forceRender,$=_.useContext(v),F=$.prefixCls,z="".concat(F,"-header");return(0,I.jsx)(E.ZP,{motionEnter:!0,motionLeave:!0,motionName:"".concat(z,"-motion"),leavedClassName:"".concat(z,"-motion-hidden"),onEnterStart:h,onEnterActive:B,onLeaveStart:B,onLeaveActive:h,visible:R,forceRender:se,children:function(ge){var x=ge.className,pe=ge.style;return(0,I.jsxs)("div",{className:b()(z,x,n),style:d()(d()({},pe),L),children:[(C!==!1||o)&&(0,I.jsxs)("div",{className:b()("".concat(z,"-header"),W.header),style:d()({},J.header),children:[(0,I.jsx)("div",{className:"".concat(z,"-title"),children:o}),C!==!1&&(0,I.jsx)("div",{className:"".concat(z,"-close"),children:(0,I.jsx)(y.ZP,{type:"text",icon:(0,I.jsx)(S.Z,{}),size:"small",onClick:function(){m==null||m(!R)}})})]}),s&&(0,I.jsx)("div",{className:b()("".concat(z,"-content"),W.content),style:d()({},J.content),children:s})]})}})}},93164:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return Q}});var G=e(19632),d=e.n(G),S=e(97857),y=e.n(S),M=e(9783),b=e.n(M),E=e(5574),_=e.n(E),I=e(13769),v=e.n(I),h=e(48045),B=e(86250),i=e(93967),c=e.n(i),o=e(56790),m=e(30339),R=e(94787),s=e(67294),n=e(11154),L=e(83204);function u(r,O){return(0,s.useImperativeHandle)(r,function(){var j=O(),A=j.nativeElement;return new Proxy(A,{get:function(H,K){return j[K]?j[K]:Reflect.get(H,K)}})})}var W=e(56044),q=e(44294),J=e(64057),C=e(85893),se=["className","action","onClick"],$=s.createContext(null);function F(r){var O=r.className,j=r.action,A=r.onClick,w=v()(r,se),H=s.useContext($),K=H.prefixCls,xe=H.disabled,Be=H[j],Ne=xe||w.disabled||H["".concat(j,"Disabled")]||!1;return(0,C.jsx)(J.Z,y()(y()({bordered:!1,disabled:Ne},w),{},{onClick:function(tn){Ne||(Be&&Be(),A&&A(tn))},className:c()(K,O,b()({},"".concat(K,"-disabled"),Ne))}))}var z=s.forwardRef(F),ae=e(69291);function ge(r,O){return(0,C.jsx)(z,y()(y()({icon:(0,C.jsx)(ae.Z,{})},r),{},{action:"onClear",ref:O}))}var x=s.forwardRef(ge),pe=(0,s.memo)(function(r){var O=r.className;return(0,C.jsxs)("svg",{color:"currentColor",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:O,children:[(0,C.jsx)("title",{children:"Stop Loading"}),(0,C.jsx)("rect",{fill:"currentColor",height:"250",rx:"24",ry:"24",width:"250",x:"375",y:"375"})]})}),N=pe;function ce(r,O){var j=s.useContext($),A=j.prefixCls,w=r.className;return(0,C.jsx)(z,y()(y()({icon:(0,C.jsx)(N,{className:"".concat(A,"-loading-icon")}),type:"primary",variant:"text"},r),{},{className:c()(w,"".concat(A,"-loading-button")),action:"onCancel",ref:O}))}var V=s.forwardRef(ce),me=e(43103);function Fe(r,O){return(0,C.jsx)(z,y()(y()({icon:(0,C.jsx)(me.Z,{}),type:"primary"},r),{},{action:"onSend",ref:O}))}var We=s.forwardRef(Fe),He=e(36763),rn=e(21474),en=1e3,k=4,ue=140,be=ue/2,D=250,ee=500,X=.8;function Oe(r){var O=r.className;return(0,C.jsxs)("svg",{color:"currentColor",viewBox:"0 0 ".concat(en," ").concat(en),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:O,children:[(0,C.jsx)("title",{children:"Speech Recording"}),Array.from({length:k}).map(function(j,A){var w=(en-ue*k)/(k-1),H=A*(w+ue),K=en/2-D/2,xe=en/2-ee/2;return(0,C.jsxs)("rect",{fill:"currentColor",rx:be,ry:be,height:D,width:ue,x:H,y:K,children:[(0,C.jsx)("animate",{attributeName:"height",values:"".concat(D,"; ").concat(ee,"; ").concat(D),keyTimes:"0; 0.5; 1",dur:"".concat(X,"s"),begin:"".concat(X/k*A,"s"),repeatCount:"indefinite"}),(0,C.jsx)("animate",{attributeName:"y",values:"".concat(K,"; ").concat(xe,"; ").concat(K),keyTimes:"0; 0.5; 1",dur:"".concat(X,"s"),begin:"".concat(X/k*A,"s"),repeatCount:"indefinite"})]},A)})]})}function Ae(r,O){var j=s.useContext($),A=j.speechRecording,w=j.onSpeechDisabled,H=j.prefixCls,K=null;return A?K=(0,C.jsx)(Oe,{className:"".concat(H,"-recording-icon")}):w?K=(0,C.jsx)(He.Z,{}):K=(0,C.jsx)(rn.Z,{}),(0,C.jsx)(z,y()(y()({icon:K,variant:"text"},r),{},{action:"onSpeech",ref:O}))}var Pe=s.forwardRef(Ae),Ce=e(68400),Ye=e.n(Ce),De=e(9053),ze,sn=(0,De.vJ)(ze||(ze=Ye()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.colorBgBase},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.motionDurationSlow},function(r){return r.theme.lineWidth},function(r){return r.theme.colorPrimaryHover},function(r){return r.theme.lineWidth},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorBgContainerDisabled},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.paddingXS},function(r){return r.theme.colorTextTertiary},function(r){return"var(--".concat(r.theme.prefixCls,"-color-fill-disable)")},function(r){return r.theme.controlHeight},function(r){return r.theme.controlHeight},function(r){return r.theme.prefixCls}),Xe=sn,Se=e(52677),xn=e.n(Se),t;!t&&typeof window!="undefined"&&(t=window.SpeechRecognition||window.webkitSpeechRecognition);function Ee(r,O){var j=(0,o.zX)(r),A=s.useMemo(function(){return xn()(O)==="object"?[O.recording,O.onRecordingChange,typeof O.recording=="boolean"]:[void 0,void 0,!1]},[O]),w=_()(A,3),H=w[0],K=w[1],xe=w[2],Be=s.useState(null),Ne=_()(Be,2),un=Ne[0],tn=Ne[1];s.useEffect(function(){if(typeof navigator!="undefined"&&"permissions"in navigator){var ke=null;return navigator.permissions.query({name:"microphone"}).then(function(Ue){tn(Ue.state),Ue.onchange=function(){tn(this.state)},ke=Ue}),function(){ke&&(ke.onchange=null)}}},[]);var nn=t&&un!=="denied",ve=s.useRef(null),$e=(0,o.C8)(!1,{value:H}),hn=_()($e,2),jn=hn[0],bn=hn[1],On=s.useRef(!1),Pn=function(){if(nn&&!ve.current){var Ue=new t;Ue.onstart=function(){bn(!0)},Ue.onend=function(){bn(!1)},Ue.onresult=function(dn){if(!On.current){var vn,Sn=(vn=dn.results)===null||vn===void 0||(vn=vn[0])===null||vn===void 0||(vn=vn[0])===null||vn===void 0?void 0:vn.transcript;j(Sn)}On.current=!1},ve.current=Ue}},Cn=(0,o.zX)(function(ke){ke&&!jn||(On.current=ke,xe?K==null||K(!jn):(Pn(),ve.current&&(jn?(ve.current.stop(),K==null||K(!1)):(ve.current.start(),K==null||K(!0)))))});return[nn,Cn,jn]}var Ie=e(89102),Me=e(67055),fe,Ve=(0,De.vJ)(fe||(fe=Ye()([`
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

`])),function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.colorTextSecondary},function(r){return r.theme.colorPrimary},function(r){return r.theme.colorPrimary},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorFillTertiary},function(r){return r.theme.colorTextSecondary});function an(r){var O=(0,W.wv)(),j=O.getPrefixCls,A=j("sender-mode-select"),w=r.value,H=r.onChange,K=(0,s.useMemo)(function(){var Be=r.options.find(function(Ne){return Ne.value===w})||{};return Be},[r.value]),xe=(0,C.jsx)(Ie.Z,{onClick:function(){return H(void 0)},style:{cursor:"pointer",fontSize:20}});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Ve,{}),(0,C.jsxs)("div",{className:A,style:r.style,children:[(0,C.jsx)("div",{className:"".concat(A,"-options ").concat(w?"".concat(A,"-hide"):""),children:r.options.map(function(Be){var Ne=(0,C.jsx)(cn,y()({onClick:function(){return H(Be.value)},className:"".concat(A,"-option")},Be),Be.value);return Ne})}),(0,C.jsx)("div",{className:"".concat(A,"-display ").concat(w?"":"".concat(A,"-hide")),children:(0,C.jsxs)("div",{className:"".concat(A,"-display-flex"),children:[(0,C.jsx)(cn,y()(y()({},K),{},{label:(K==null?void 0:K.selectedLabel)||(K==null?void 0:K.label),className:"".concat(A,"-display-label")})),r.desc&&(0,C.jsx)("div",{className:"".concat(A,"-display-desc"),children:r.desc}),r.closeTip?(0,C.jsx)(Me.Z,{title:r.closeTip,children:xe}):xe]})})]})]})}function cn(r){var O=(0,C.jsxs)("div",{className:r.className,onClick:r.onClick,children:[r.icon,r.label]});return r.tooltip?(0,C.jsx)(Me.Z,{title:r.tooltip,placement:"topLeft",children:O}):O}var qe=e(85441),Le=e(32485),p=["styles","classNames","className","rootClassName","style","defaultValue","value","readOnly","enableFocusExpand","sendDisabled","submitType","onSubmit","loading","onCancel","onChange","onFocus","onBlur","actions","onKeyPress","onKeyDown","disabled","header","onPaste","allowSpeech","onPasteFile","components","initialRows","scalable"];function ne(r,O,j){return(0,R.Z)(r,O)||j}var oe=s.forwardRef(function(r,O){var j=r,A=j.styles,w=A===void 0?{}:A,H=j.classNames,K=H===void 0?{}:H,xe=j.className,Be=j.rootClassName,Ne=j.style,un=j.defaultValue,tn=j.value,nn=j.readOnly,ve=j.enableFocusExpand,$e=ve===void 0?!1:ve,hn=j.sendDisabled,jn=hn===void 0?!1:hn,bn=j.submitType,On=bn===void 0?"enter":bn,Pn=j.onSubmit,Cn=j.loading,ke=j.onCancel,Ue=j.onChange,dn=j.onFocus,vn=j.onBlur,Sn=j.actions,Wn=j.onKeyPress,Hn=j.onKeyDown,kn=j.disabled,$n=j.header,Bn=j.onPaste,zn=j.allowSpeech,Je=j.onPasteFile,Re=j.components,mn=j.initialRows,fn=mn===void 0?2:mn,Jn=j.scalable,yn=v()(j,p),_n=Jn,Qn=(0,s.useState)(_n?!1:void 0),Un=_()(Qn,2),wn=Un[0],An=Un[1],Zn=(0,s.useState)(!1),Kn=_()(Zn,2),Ln=Kn[0],In=Kn[1],Gn=s.useMemo(function(){return wn?{maxRows:10,minRows:10}:{maxRows:10,minRows:fn}},[_n,wn]),Mn=(0,W.wv)(),gn=Mn.direction,Tn=Mn.getPrefixCls,En=Tn("sender"),Rn=s.useRef(null),Vn=s.useRef(null);u(O,function(){var ln,on;return{nativeElement:Rn.current,focus:(ln=Vn.current)===null||ln===void 0?void 0:ln.focus,blur:(on=Vn.current)===null||on===void 0?void 0:on.blur}}),(0,n.Z)(Rn,{onFocus:function(on){In(!0),dn==null||dn()},onBlur:function(){Rn.current&&!Rn.current.contains(document.activeElement)&&(In(!1),vn==null||vn())}}),(0,L.Z)("click",function(ln){In(!0),dn==null||dn()},{target:Rn});var tt="".concat(En,"-input"),at=c()(En,xe,Be,b()(b()(b()(b()({},"".concat(En,"-rtl"),gn==="rtl"),"".concat(En,"-disabled"),kn),"".concat(En,"-focus"),Ln&&$e),"".concat(En,"-blur"),!Ln&&$e)),st="".concat(En,"-actions-btn"),qn="".concat(En,"-actions-list"),ot=(0,o.C8)(un||"",{value:tn}),rt=_()(ot,2),Fn=rt[0],it=rt[1],et=function(on,Ge){it(on),Ue&&Ue(on,Ge)},a=Ee(function(ln){et("".concat(Fn," ").concat(ln))},zn),g=_()(a,3),l=g[0],f=g[1],T=g[2],U=ne(Re,["input"],h.Z.TextArea),de=(0,m.Z)(yn,{attr:!0,aria:!0,data:!0}),te=y()(y()({},de),{},{ref:Vn}),re=function(){!Ze.onSendDisabled&&Pn&&!Cn&&Pn(Fn)},Y=function(){et("")},ie=s.useRef(!1),le=function(){ie.current=!0},je=function(){ie.current=!1},he=function(on){var Ge=on.key==="Enter"&&!ie.current;switch(On){case"enter":Ge&&!on.shiftKey&&(on.preventDefault(),re());break;case"shiftEnter":Ge&&on.shiftKey&&(on.preventDefault(),re());break}Wn&&Wn(on)},Te=function(on){var Ge;if(!Je){Bn==null||Bn(on);return}var pn=Array.from(((Ge=on.clipboardData)===null||Ge===void 0?void 0:Ge.files)||[]);if(pn.length===0){var Nn,Xn=Array.from(((Nn=on.clipboardData)===null||Nn===void 0?void 0:Nn.items)||[]);pn=Xn.filter(function(Dn){return Dn.kind==="file"}).map(function(Dn){return Dn.getAsFile()}).filter(function(Dn){return Dn!==null})}pn.length>0?(pn.forEach(function(Dn){return Je(Dn)}),on.preventDefault()):Bn==null||Bn(on)},Qe=function(on){var Ge,pn;on.target!==((Ge=Rn.current)===null||Ge===void 0?void 0:Ge.querySelector(".".concat(tt)))&&on.preventDefault(),(pn=Vn.current)===null||pn===void 0||pn.focus()},we=s.useMemo(function(){var ln=Array.isArray(r.prefix)?d()(r.prefix):[r.prefix];return _n&&ln.push((0,C.jsx)(J.Z,{onClick:function(){return An(!wn)},bordered:!1,icon:wn?(0,C.jsx)(qe.Z,{}):(0,C.jsx)(Le.Z,{})},"zoom")),ln},[r.prefix,_n,wn,zn]),ye=(0,C.jsx)(B.Z,{className:"".concat(qn,"-presets"),children:Cn?(0,C.jsx)(V,{}):(0,C.jsx)(We,{})});typeof Sn=="function"?ye=Sn(ye,{components:{SendButton:We,ClearButton:x,LoadingButton:V}}):Sn&&(ye=Sn);var Ze={prefixCls:st,onSend:re,onSendDisabled:!Fn||!Fn.trim()||jn,onClear:Y,onClearDisabled:!Fn,onCancel:ke,onCancelDisabled:!Cn,onSpeech:function(){return f(!1)},onSpeechDisabled:!l,speechRecording:T,disabled:kn};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Xe,{}),(0,C.jsxs)("div",{ref:Rn,className:at,style:Ne,children:[$n&&(0,C.jsx)(q.a.Provider,{value:{prefixCls:En,focus:Ln,enableFocusExpand:$e},children:$n}),(0,C.jsxs)("div",{className:"".concat(En,"-content"),children:[(0,C.jsx)(U,y()(y()({},te),{},{disabled:kn,style:w.input,className:c()(tt,K.input),autoSize:Gn,value:Fn.slice(0,r.maxLength||Number.MAX_SAFE_INTEGER),onChange:function(on){et(on.target.value,on),f(!0)},onPressEnter:he,onCompositionStart:le,onCompositionEnd:je,onKeyDown:Hn,onPaste:Te,variant:"borderless",readOnly:nn})),(0,C.jsxs)("div",{className:"".concat(En,"-content-bottom"),children:[we.length>0&&(0,C.jsx)("div",{className:c()("".concat(En,"-prefix"),K.prefix),style:w.prefix,children:(0,C.jsxs)(B.Z,{gap:8,children:[zn&&(0,C.jsx)($.Provider,{value:Ze,children:(0,C.jsx)(Pe,{})}),we]})}),(0,C.jsxs)("div",{className:c()(qn,K.actions),style:w.actions,children:[r.maxLength?(0,C.jsxs)("div",{className:"".concat(qn,"-length"),children:[Fn.length,"/",r.maxLength]}):null,(0,C.jsx)($.Provider,{value:Ze,children:ye})]})]})]})]})]})}),P=oe;P.Header=q.Z,P.ModeSelect=an;var Q=P},70770:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return R}});var G=e(89034),d=e(36674),S=e(9343),y=e(48095),M=e(97634),b=e(56044),E=e(68400),_=e.n(E),I=e(9053),v,h=(0,I.vJ)(v||(v=_()([`
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
`])),function(s){return s.theme.prefixCls},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorSuccessBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorSuccess},function(s){return s.theme.colorErrorBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorError},function(s){return s.theme.colorWarningBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorWarning},function(s){return s.theme.colorFillTertiary},function(s){return s.theme.prefixCls},function(s){return s.theme.colorInfo},function(s){return s.theme.colorText},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorBgBase},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorBgBase},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorText}),B=e(93967),i=e.n(B),c=e(21403),o=e(85893);function m(s){var n=(0,b.wv)(),L=n.getPrefixCls,u=L("status-card"),W=s.icon||{success:(0,o.jsx)(G.Z,{}),error:(0,o.jsx)(d.Z,{}),warning:(0,o.jsx)(S.Z,{}),info:(0,o.jsx)(y.Z,{})}[s.status];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h,{}),(0,o.jsxs)("div",{className:i()(u,"".concat(u,"-").concat(s.status)),children:[(0,o.jsxs)("div",{className:"".concat(u,"-header"),children:[(0,o.jsxs)("div",{className:"".concat(u,"-header-top"),children:[(0,o.jsx)("div",{className:"".concat(u,"-header-icon"),children:W}),(0,o.jsx)("div",{className:"".concat(u,"-header-title"),children:s.title})]}),s.description&&(0,o.jsx)("div",{className:"".concat(u,"-header-description"),children:s.description})]}),s.children&&(0,o.jsx)("div",{className:"".concat(u,"-body"),children:s.children})]})]})}m.HITL=function(s){var n=s.title,L=n===void 0?"\u9700\u8981\u7528\u6237\u4EBA\u5DE5\u5E72\u9884":n,u=s.description,W=s.waitButtonText,q=W===void 0?"\u6211\u5DF2\u5B8C\u6210\uFF0C\u7EE7\u7EED\u4EFB\u52A1":W,J=s.doneButtonText,C=J===void 0?"\u7528\u6237\u5DF2\u786E\u8BA4":J,se=(0,b.wv)(),$=se.getPrefixCls,F=$("status-card"),z=s.done?(0,o.jsx)(c.Z,{onClick:s.onDone,type:"primary",disabled:!0,icon:(0,o.jsx)(M.Z,{}),children:C}):(0,o.jsx)(c.Z,{onClick:s.onDone,type:"primary",children:q});return(0,o.jsx)(m,{status:"info",title:L,children:(0,o.jsxs)("div",{className:"".concat(F,"-HITL"),children:[u&&(0,o.jsx)("div",{className:"".concat(F,"-HITL-desc"),children:u}),(0,o.jsx)("div",{className:"".concat(F,"-HITL-button"),children:z})]})})},m.Statistic=function(s){var n=(0,b.wv)(),L=n.getPrefixCls,u=L("status-card");return(0,o.jsx)("div",{className:"".concat(u,"-statistic"),children:s.values.map(function(W){return(0,o.jsxs)("div",{className:"".concat(u,"-statistic-item"),children:[(0,o.jsx)("div",{className:"".concat(u,"-statistic-item-title"),children:W.title}),(0,o.jsx)("div",{className:"".concat(u,"-statistic-item-value"),children:W.value})]})})})};var R=m},7354:function(Ke,Z,e){"use strict";var G=e(15009),d=e.n(G),S=e(9783),y=e.n(S),M=e(97857),b=e.n(M),E=e(77262),_=e.n(E),I=e(93938),v=e.n(I),h=`

`,B=`
`,i=":",c=function(n){return(n!=null?n:"").trim()!==""};function o(){var s="";return new TransformStream({transform:function(L,u){s+=L;var W=s.split(h);W.slice(0,-1).forEach(function(q){c(q)&&u.enqueue(q)}),s=W[W.length-1]},flush:function(L){c(s)&&L.enqueue(s)}})}function m(){return new TransformStream({transform:function(n,L){var u=n.split(B),W=u.reduce(function(q,J){var C=J.indexOf(i);if(C===-1)throw new Error('The key-value separator "'.concat(i,'" is not found in the sse line chunk!'));var se=J.slice(0,C);if(!c(se))return q;var $=J.slice(C+1);return b()(b()({},q),{},y()({},se,$))},{});Object.keys(W).length!==0&&L.enqueue(W)}})}function R(s,n){var L=s.readableStream,u=s.transformStream;if(!(L instanceof ReadableStream))throw new Error("The options.readableStream must be an instance of ReadableStream.");var W=new TextDecoderStream,q=u?L.pipeThrough(W).pipeThrough(u):L.pipeThrough(W).pipeThrough(o()).pipeThrough(m());return q[Symbol.asyncIterator]=v()(d()().mark(function J(){var C,se,$,F;return d()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:C=this.getReader();case 1:return ae.next=4,_()(C.read());case 4:if(se=ae.sent,$=se.done,F=se.value,!$){ae.next=9;break}return ae.abrupt("break",15);case 9:if(F){ae.next=11;break}return ae.abrupt("continue",1);case 11:return ae.next=13,n!=null&&n.openaiCompatible?b()(b()({},F),{},{data:F.data.slice(1)}):F;case 13:ae.next=1;break;case 15:case"end":return ae.stop()}},J,this)})),q}Z.Z=R},32116:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return G}});function G(d){return new Promise(function(S){return setTimeout(S,d)})}},66366:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return d}});var G={i8:"1.1.45"},d=G.i8},57657:function(Ke,Z,e){"use strict";e.r(Z);var G=e(5574),d=e.n(G),S=e(9053),y=e(67294),M=e(85893),b=function(){var I=(0,y.useState)({x:0,y:0}),v=d()(I,2),h=v[0],B=v[1],i=(0,y.useState)(!1),c=d()(i,2),o=c[0],m=c[1],R=(0,y.useRef)(null),s=E(),n=s.styles,L=s.cx;(0,y.useEffect)(function(){var $=function(z){if(R.current){var ae=R.current.getBoundingClientRect();B({x:z.clientX-ae.left,y:z.clientY-ae.top})}};return window.addEventListener("mousemove",$),function(){return window.removeEventListener("mousemove",$)}},[]),(0,y.useEffect)(function(){var $=setInterval(function(){m(!0),setTimeout(function(){return m(!1)},150)},5e3);return function(){return clearInterval($)}},[]);var u=function(){var F=32,z=32,ae=h.x-F,ge=h.y-z,x=6,pe=6,N=Math.sqrt(ae*ae+ge*ge),ce=50;if(N===0)return{x:0,y:0};var V=Math.min(N/ce,1),me=ae/N*x*V,Fe=ge/N*pe*V;return{x:Math.max(-x,Math.min(x,me)),y:Math.max(-pe,Math.min(pe,Fe))}},W=function(F){var z=32,ae=h.x-z,ge=400;if(Math.abs(ae)<ge)return 1;var x=Math.abs(ae)-ge,pe=32-ge,N=Math.min(x/pe,1);return ae>ge?F?1-N*.5:1:ae<-ge?F?1:1-N*.5:1},q=u(),J=u(),C=W(!0),se=W(!1);return(0,M.jsxs)("div",{ref:R,className:n.container,children:[(0,M.jsx)("div",{className:L(n.eye,n.leftEye,o?n.blinkingEye:""),style:{transform:"translate(".concat(q.x,"px, ").concat(q.y,"px) ").concat(o?"scaleY(0.1)":"scaleY(".concat(C,")"))}}),(0,M.jsx)("div",{className:L(n.eye,n.rightEye,o?n.blinkingEye:""),style:{transform:"translate(".concat(J.x,"px, ").concat(J.y,"px) ").concat(o?"scaleY(0.1)":"scaleY(".concat(se,")"))}})]})};Z.default=b;var E=(0,S.kc)(function(_){var I=_.css,v=_.token;return{container:{width:64,height:64,backgroundColor:"black",borderRadius:12,position:"relative",cursor:"pointer",overflow:"hidden",boxShadow:"15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)"},eye:{width:6,height:12,backgroundColor:"white",borderRadius:99,position:"absolute",top:16,transition:"transform 0.1s ease-out"},leftEye:{left:22},rightEye:{left:36},blinkingEye:{transition:"transform 0.05s ease-out"}}})},31295:function(Ke,Z,e){"use strict";e.d(Z,{Z:function(){return I}});var G=e(68400),d=e.n(G),S=e(67294),y=e(9053),M=e(56044),b=e(85893),E,_=(0,y.vJ)(E||(E=d()([`
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
`])),function(v){return v.theme.prefixCls},function(v){return v.theme.colorText},function(v){return v.theme.colorTextSecondary});function I(v){var h=(0,M.wv)(),B=h.getPrefixCls,i=B("welcome"),c=typeof v.logo=="string"?(0,b.jsx)("img",{className:i+"-logo",src:v.logo}):v.logo;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_,{}),(0,b.jsxs)("div",{className:i,style:v.style,children:[c,(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:i+"-title",children:v.title}),(0,b.jsx)("div",{className:i+"-desc",children:v.desc})]})]})]})}},43601:function(Ke,Z,e){"use strict";e.r(Z),e.d(Z,{AIGC:function(){return ce.Z},Accordion:function(){return n.Z},AgentScopeRuntimeWebUI:function(){return o.Z},Attachments:function(){return u.Z},Bubble:function(){return W.Z},ChatAnywhere:function(){return _.ZP},ChatInput:function(){return ae.Z},ConfigProvider:function(){return G.ZP},Conversations:function(){return q.Z},CustomCardsContext:function(){return S.NR},CustomCardsProvider:function(){return S.xy},DeepThink:function(){return L.Z},DeepThinking:function(){return L.Z},DefaultCards:function(){return c},DeviceAction:function(){return J.Z},Disclaimer:function(){return C.Z},GenerativeUISandbox:function(){return V.Z},HistoryPanel:function(){return q.Z},ImageGenerator:function(){return se.Z},Markdown:function(){return N.Z},Mermaid:function(){return $.Z},OperateCard:function(){return F.Z},Process:function(){return n.Z},Rag:function(){return z.Sn},Sender:function(){return ae.Z},SparkChatProvider:function(){return y.ZP},StatusCard:function(){return ge.Z},Stream:function(){return b.Z},Thinking:function(){return z.BI},TodoList:function(){return z.B4},ToolCall:function(){return z.x4},WebSearch:function(){return z.fz},Welcome:function(){return pe.Z},createCard:function(){return E.L},sleep:function(){return x.Z},useChatAnywhere:function(){return I.TQ},useCustomCardsContext:function(){return S.HJ},useGlobalContext:function(){return M.bN},useInput:function(){return v.G},useMessages:function(){return h.y},useProviderContext:function(){return y.wv},useSessionList:function(){return B.x},uuid:function(){return i.Z},version:function(){return d.Z}});var G=e(55839),d=e(66366),S=e(83962),y=e(56044),M=e(92049),b=e(7354),E=e(50130),_=e(29041),I=e(76289),v=e(37254),h=e(4421),B=e(61316),i=e(88773),c=e(24963),o=e(74823),m=e(22863),R={};for(var s in m)["default","ConfigProvider","version","CustomCardsContext","CustomCardsProvider","SparkChatProvider","useCustomCardsContext","useGlobalContext","useProviderContext","Stream","createCard","ChatAnywhere","useChatAnywhere","useInput","useMessages","useSessionList","uuid","DefaultCards","AgentScopeRuntimeWebUI","Accordion","Process","DeepThink","DeepThinking","Attachments","Bubble","Conversations","HistoryPanel","DeviceAction","Disclaimer","ImageGenerator","Mermaid","OperateCard","ChatInput","Sender","StatusCard","sleep","Welcome","Markdown","AIGC","GenerativeUISandbox"].indexOf(s)<0&&(R[s]=function(me){return m[me]}.bind(0,s));e.d(Z,R);var n=e(487),L=e(14082),u=e(36417),W=e(9146),q=e(9368),J=e(55031),C=e(10325),se=e(28446),$=e(12181),F=e(31382),z=e(56809),ae=e(93164),ge=e(70770),x=e(32116),pe=e(31295),N=e(82679),ce=e(86578),V=e(80115)}}]);
