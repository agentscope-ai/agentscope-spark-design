(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1997],{86578:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return ue}});var H=e(97857),d=e.n(H),S=e(9783),y=e.n(S),M=e(13769),P=e.n(M),j=e(67294),_=e(93967),I=e.n(_),v=e(56044),h=e(93164),N=e(36417),i=e(44294),c=e(12624),o=e(82484),m=e(68400),R=e.n(m),s=e(9053),n,L=(0,s.vJ)(n||(n=R()([`
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
`])),function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.borderRadius},function(V){return V.theme.colorBorderSecondary},function(V){return V.theme.colorBgBase},function(V){return V.theme.colorText}),u=e(85893),z=["className","icon"],ne=o.Z.Dragger,X=function(he){var Fe=he.className,We=he.icon,Xe=P()(he,z),an=(0,v.wv)(),tn=an.getPrefixCls,B=tn("media-upload");return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(L,{}),(0,u.jsx)(ne,d()(d()({showUploadList:!1,className:I()(B,Fe)},Xe),{},{children:(0,u.jsxs)("div",{className:I()("".concat(B,"-thumbnail")),children:[(0,u.jsx)("div",{className:I()("".concat(B,"-thumbnail-gradient"))}),We||(0,u.jsx)(c.Z,{className:I()("".concat(B,"-thumbnail-icon"))})]})}))]})},C=X,ie,J=(0,s.vJ)(ie||(ie=R()([`
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
`])),function(V){return V.theme.prefixCls},function(V){return V.theme.colorText},function(V){return V.theme.colorTextTertiary}),W=function(he){var Fe=he.className,We=he.title,Xe=he.description,an=(0,v.wv)(),tn=an.getPrefixCls,B=tn("media-info"),de=!!We||!!Xe;return de?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(J,{}),(0,u.jsxs)("div",{className:I()(B,Fe),children:[We&&(0,u.jsx)("div",{className:I()("".concat(B,"-title")),children:We}),Xe&&(0,u.jsx)("div",{className:I()("".concat(B,"-description")),children:Xe})]})]}):null},Q=W,ae,xe=(0,s.vJ)(ae||(ae=R()([`
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
`])),function(V){return V.theme.prefixCls},function(V){return V.theme.colorBorderSecondary},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls},function(V){return V.theme.prefixCls}),p=["title","description","maxCount"],pe=function(he){var Fe=he.className,We=he.onUpload,Xe=We===void 0?[]:We,an=he.attachedFiles,tn=an===void 0?[[]]:an,B=he.onFileChange,de=(0,v.wv)(),Pe=de.getPrefixCls,D=(0,j.useContext)(i.a),te=D.focus,$=D.enableFocusExpand,Ae=Pe("aigc-sender-header"),Oe=(0,j.useMemo)(function(){return tn.flat().length>0?!0:Xe.length<=0?!1:!!(te||!$)},[Xe,tn,$,te]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(xe,{}),(0,u.jsx)(h.Z.Header,{closable:!1,open:Oe,children:(0,u.jsx)("div",{className:I()(Ae,Fe),tabIndex:0,children:Xe==null?void 0:Xe.map(function(be,Ce){var qe=be.title,De=be.description,ze=be.maxCount,on=ze===void 0?1:ze,Ye=P()(be,p),Se=tn[Ce]||[];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(C,d()({className:I()(y()({},"".concat(Ae,"-upload-hidden"),Se.length>=on)),maxCount:on,fileList:Se,onChange:function(t){be.beforeUpload&&t.file.status&&B(Ce,t.fileList),be.beforeUpload||B(Ce,t.fileList)},showUploadList:!1},Ye),"upload-".concat(Ce)),Se.length>0&&(0,u.jsx)(N.Z,{items:Se,onChange:function(t){return B(Ce,t.fileList)}},"attachments-".concat(Ce)),on===1&&(0,u.jsx)(Q,{title:qe,description:De},"info-".concat(Ce))]})})})})]})},k=pe,ue={SenderHeader:k,Info:Q,Upload:C}},487:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return xe}});var H=e(9783),d=e.n(H),S=e(97857),y=e.n(S),M=e(5574),P=e.n(M),j=e(67294),_=e(93967),I=e.n(_),v=e(56044),h=e(85893);function N(p){var pe=(0,v.wv)(),k=pe.getPrefixCls,ue=k("accordion-content-body");return(0,h.jsxs)("div",{className:ue,children:[p.headerLeft||p.headerRight?(0,h.jsxs)("div",{className:"".concat(ue,"-header"),children:[p.headerLeft,(0,h.jsx)("div",{style:{flex:1}}),p.headerRight]}):null,(0,h.jsx)("div",{className:"".concat(ue,"-body"),children:p.children})]})}var i=e(9361);function c(p){var pe=(0,v.wv)(),k=pe.theme,ue=pe.getPrefixCls,V=(k==null?void 0:k.algorithm)===i.Z.darkAlgorithm,he=ue("accordion-soft-light-title");return(0,h.jsx)("div",{className:he,style:V?{}:{color:"rgba(38, 36, 76, 0.88)"},children:p.children})}var o=e(68400),m=e.n(o),R=e(9053),s,n=(0,R.vJ)(s||(s=m()([`
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
`])),function(p){return p.theme.prefixCls},function(p){return p.theme.colorSuccess},function(p){return p.theme.prefixCls},function(p){return p.theme.colorError},function(p){return p.theme.colorTextSecondary},function(p){return p.theme.colorBgBase},function(p){return p.theme.borderRadiusLG},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorBorder},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorBgBase},function(p){return p.theme.colorText},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.colorFillTertiary},function(p){return p.theme.prefixCls},function(p){return p.theme.colorTextSecondary},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.prefixCls},function(p){return p.theme.prefixCls},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorBorderSecondary},function(p){return p.theme.colorFillTertiary},function(p){return p.theme.colorText},function(p){return p.theme.colorBgBase}),L=e(40443),u=e(89034),z=e(9343),ne=e(36674),X=e(9838),C=e(28387),ie=e(16592);function J(p){var pe=(0,v.wv)(),k=pe.getPrefixCls,ue=k("accordion-group"),V=j.useState(p.defaultOpen),he=P()(V,2),Fe=he[0],We=he[1],Xe=p.open!==void 0?p.open:Fe,an=p.inline?"close":Xe?"open":"close",tn=(0,j.useMemo)(function(){if(p.icon)return p.icon;if(p.status==="generating")return(0,h.jsx)(L.Z,{className:"".concat(ue,"-icon-loading"),spin:!0});if(p.status==="finished")return(0,h.jsx)(u.Z,{className:"".concat(ue,"-icon-success")});if(p.status==="interrupted")return(0,h.jsx)(z.Z,{});if(p.status==="error")return(0,h.jsx)(ne.Z,{className:"".concat(ue,"-icon-error")})},[p.status,p.icon]),B=(0,j.useMemo)(function(){return p.steps?p.steps.map(function(de,Pe){var D=Pe===0,te=Pe===p.steps.length-1;return(0,h.jsx)(J,y()(y()({},de),{},{isFirst:D,isLast:te}),de.id||Pe)}):p.children},[p.steps,p.children]);return(0,h.jsxs)("div",{className:I()("".concat(ue),"".concat(ue,"-").concat(an)),children:[(0,h.jsxs)("div",{className:I()("".concat(ue,"-header"),"".concat(ue,"-header-").concat(an)),onClick:function(){return B&&p.open===void 0&&We(!Fe)},children:[tn?(0,h.jsx)("div",{className:I()("".concat(ue,"-header-icon"),d()(d()(d()({},"".concat(ue,"-header-icon-line"),p.iconLine),"".concat(ue,"-header-icon-first"),p.isFirst),"".concat(ue,"-header-icon-last"),p.isLast&&an==="close"||p.level)),children:tn}):null,(0,h.jsx)("div",{children:p.title}),B&&(0,h.jsx)("div",{className:I()("".concat(ue,"-header-arrow")),children:Xe?(0,h.jsx)(C.Z,{}):(0,h.jsx)(X.Z,{})}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{style:{flex:1}}),p.rightChildren]})]}),(0,h.jsx)(Q,{prefixCls:ue,stateOpen:Xe,status:an,inline:p.inline,content:B,bodyStyle:p.bodyStyle,level:p.level})]})}var W={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function Q(p){var pe=(0,j.useRef)(null);if(!p.content)return null;var k=p.prefixCls,ue=p.stateOpen,V=p.inline,he=p.bodyStyle,Fe=p.level;return(0,h.jsx)(ie.ZP,{nodeRef:pe,in:ue,timeout:300,children:function(Xe){return(0,h.jsx)("div",{style:y()(y()(y()({},he),Fe?{marginTop:0}:{}),{},{transition:"opacity ".concat(300,"ms ease-in-out")},W[Xe]),className:I()("".concat(k,"-body"),"".concat(k,"-body-").concat(ue?"open":"close"),d()({},"".concat(k,"-body-inline"),V)),children:p.content})}})}function ae(p){var pe=p.level,k=pe===void 0?1:pe,ue=p.isFirst,V=ue===void 0?!0:ue,he=p.isLast,Fe=he===void 0?!0:he;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n,{}),(0,h.jsx)(J,y()(y()({},p),{},{level:k,isFirst:V,isLast:Fe}))]})}ae.BodyContent=N,ae.SoftLightTitle=c;var xe=ae},14082:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return j}});var H=e(487),d=e(56044),S=e(9361),y=e(93967),M=e.n(y),P=e(85893);function j(_){var I=(0,d.wv)(),v=I.theme,h=I.getPrefixCls,N=h("accordion-deep-thinking"),i=(v==null?void 0:v.algorithm)===S.Z.darkAlgorithm,c=(0,P.jsx)("img",{style:{display:"block",width:16,height:16,filter:i?"invert(1)  brightness(100%) saturate(0%)":""},src:"https://img.alicdn.com/imgextra/i2/O1CN01QZgWRv1I4JM0BAZ9O_!!6000000000839-54-tps-56-56.apng"}),o=_.title||"Deep thinking";_.loading&&(o+="...");var m=_.loading?(0,P.jsx)(H.Z.SoftLightTitle,{children:o}):o,R=_.maxHeight?{maxHeight:_.maxHeight,overflowY:"auto"}:{},s=_.defaultOpen!==void 0?_.defaultOpen:_.autoCloseOnFinish&&!_.loading?!1:void 0;return(0,P.jsx)(H.Z,{title:m,status:_.loading?"generating":"finished",icon:_.loading?c:null,defaultOpen:s,open:_.open,bodyStyle:R,inline:!0,children:(0,P.jsx)("div",{className:M()(N,_.className),children:_.content||"..."})})}},74823:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return et}});var H=e(97857),d=e.n(H),S=e(9783),y=e.n(S),M=e(56044),P=e(68400),j=e.n(P),_=e(9053),I,v=(0,_.vJ)(I||(I=j()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.colorBgBase},function(a){return a.theme.prefixCls},function(a){return a.theme.colorBgBase},function(a){return a.theme.prefixCls},function(a){return a.theme.colorFillTertiary},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),h=e(93967),N=e.n(h),i=e(17909),c=e(59214),o=e(67294),m=e(81759),R=e(49131),s=e(21766),n=e(85893),L=(0,c.kr)(void 0);function u(a){try{var x=(0,c.Sz)(L,a);return x}catch(l){return{}}}function z(a){var x=a.children,l=(0,i.Z)(),f=(0,o.useMemo)(function(){var ee=a.options.theme||{};return d()(d()({},a.options),{},{theme:d()(d()({},ee),{},{narrowMode:!l.lg||ee.narrowMode})})},[a.options,l.lg]),T=(0,o.useMemo)(function(){var ee=f.theme.colorPrimary,re=f.theme.colorBgBase,Y=f.theme.colorTextBase,le=f.theme.darkMode;if(ee||le){var oe=(0,m.Z)((0,R.Z)({primaryHex:ee,bgBaseHex:re,textBaseHex:Y,darkMode:le}));return oe}},[f.theme.colorPrimary,f.theme.colorBgBase,f.theme.colorTextBase,f.theme.darkMode]),U=(0,n.jsx)(L.Provider,{value:f,children:x});if(T){var fe=f.theme.prefix||"agentscope-runtime-webui";return(0,n.jsx)(s.ZP,d()(d()({},T),{},{style:{height:"100%"},prefix:fe,prefixCls:fe,children:U}))}return U}var ne=null,X=e(15009),C=e.n(X),ie=e(99289),J=e.n(ie),W=e(5574),Q=e.n(W),ae=e(93164),xe=e(10325),p=e(79785),pe=(0,c.kr)({loading:!1,setLoading:function(){},getLoading:function(){return!1},disabled:!1,setDisabled:function(){},getDisabled:function(){return!1}});function k(a){var x=(0,p.Z)(!1),l=Q()(x,3),f=l[0],T=l[1],U=l[2],fe=(0,p.Z)(!1),ee=Q()(fe,3),re=ee[0],Y=ee[1],le=ee[2];return(0,n.jsx)(pe.Provider,{value:{loading:f,setLoading:T,getLoading:U,disabled:re,setDisabled:Y,getDisabled:le},children:a.children})}var ue=function(x){return(0,c.Sz)(pe,x)},V=e(13769),he=e.n(V),Fe=e(82484),We=e(64057),Xe=e(81644),an=e(36417),tn=["trigger"];function B(a,x){var l=(0,p.Z)([]),f=Q()(l,3),T=f[0],U=f[1],fe=f[2],ee=a||{},re=ee.trigger,Y=he()(ee,tn);if(Y!=null&&Y.customRequest){var le=(0,n.jsx)(Fe.Z,d()(d()({fileList:T,showUploadList:!1,onChange:function(ge){U(ge.fileList)}},Y),{},{disabled:x==null?void 0:x.disabled,children:re?o.createElement(re,{disabled:x==null?void 0:x.disabled}):(0,n.jsx)(We.Z,{disabled:x==null?void 0:x.disabled,icon:(0,n.jsx)(Xe.Z,{}),bordered:!1})})),oe=(0,n.jsx)(ae.Z.Header,{closable:!1,open:(T==null?void 0:T.length)>0,children:(0,n.jsx)(an.Z,{items:T,onChange:function(ge){return U(ge.fileList)}})});return{fileList:T,getFileList:fe,setFileList:U,uploadIconButton:le,uploadFileListHeader:oe}}else return{enabled:!1}}function de(a){var x=(0,p.Z)(""),l=Q()(x,3),f=l[0],T=l[1],U=l[2],fe=(0,M.wv)().getPrefixCls("chat-anywhere-input"),ee=u(function(nt){return nt.sender}),re=ue(function(nt){return nt}),Y=ee||{},le=Y.placeholder,oe=le===void 0?"":le,je=Y.disclaimer,ge=je===void 0?"":je,Te=Y.maxLength,He=Y.beforeSubmit,we=He===void 0?function(){return Promise.resolve(!0)}:He,ye=Y.beforeUI,Ze=Y.afterUI,cn=Y.scalable,ln=cn===void 0?!0:cn,Ge=Y.attachments,pn=B(Ge,{disabled:re.disabled}),Un=pn.getFileList,Xn=pn.setFileList,Dn=pn.uploadIconButton,ct=pn.uploadFileListHeader,_e=(0,o.useCallback)(J()(C()().mark(function nt(){var ut,dt;return C()().wrap(function(Yn){for(;;)switch(Yn.prev=Yn.next){case 0:return Yn.next=2,we();case 2:if(ut=Yn.sent,ut){Yn.next=5;break}return Yn.abrupt("return");case 5:dt=((Un==null?void 0:Un())||[]).filter(function(vt){var lt;return(lt=vt.response)===null||lt===void 0?void 0:lt.url}),a.onSubmit({query:U(),fileList:dt}),T(""),Xn&&Xn([]);case 9:case"end":return Yn.stop()}},nt)})),[]),ft=(0,o.useCallback)(function(){a.onCancel()},[]);return(0,n.jsxs)("div",{className:fe,children:[(0,n.jsxs)("div",{className:"".concat(fe,"-wrapper"),children:[ye,(0,n.jsx)(ae.Z,{loading:re.loading,disabled:re.disabled,scalable:ln,placeholder:oe,value:f,prefix:(0,n.jsx)(n.Fragment,{children:Dn}),header:ct,onChange:T,maxLength:Te,onSubmit:_e,onCancel:ft}),Ze]}),ge?(0,n.jsx)(xe.Z,{desc:ge}):(0,n.jsx)("div",{className:"".concat(fe,"-blank")})]})}var Pe=e(9146),D=e(19632),te=e.n(D),$=(0,c.kr)({messages:[],setMessages:function(){},getMessages:function(){return[]}});function Ae(a){var x=(0,p.Z)([]),l=Q()(x,3),f=l[0],T=l[1],U=l[2],fe={messages:f,setMessages:T,getMessages:U};return(0,n.jsx)($.Provider,{value:fe,children:a.children})}var Oe=function(){var x=(0,c.Sz)($,function(re){return{setMessages:re.setMessages,getMessages:re.getMessages}}),l=x.setMessages,f=x.getMessages,T=o.useCallback(function(){l([])},[]),U=o.useCallback(function(re){return f().find(function(Y){return Y.id===re})},[]),fe=o.useCallback(function(re){l(function(Y){return Y.filter(function(le){return le.id!==re.id})})},[]),ee=o.useCallback(function(re){l(function(Y){var le=Y.findIndex(function(je){return je.id===re.id});if(le>-1){var oe=d()(d()({},Y[le]),re);return[].concat(te()(Y.slice(0,le)),[oe],te()(Y.slice(le+1)))}else return[].concat(te()(Y),[re])})},[]);return{getMessages:f,removeAllMessages:T,getMessage:U,removeMessage:fe,updateMessage:ee}},be=e(78234),Ce=e(73935),qe=e(2093),De=(0,c.kr)({sessions:[],setSessions:function(){},getSessions:function(){return[]},currentSessionId:void 0,setCurrentSessionId:function(){},getCurrentSessionId:function(){return""}});function ze(a){var x=u(function(je){return je.session}),l=(0,p.Z)([]),f=Q()(l,3),T=f[0],U=f[1],fe=f[2],ee=(0,p.Z)(void 0),re=Q()(ee,3),Y=re[0],le=re[1],oe=re[2];return(0,be.Z)(J()(C()().mark(function je(){var ge,Te;return C()().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:return we.next=2,x.api.getSessionList();case 2:Te=we.sent,U(Te),le(Te==null||(ge=Te[0])===null||ge===void 0?void 0:ge.id);case 5:case"end":return we.stop()}},je)}))),(0,n.jsx)(De.Provider,{value:{sessions:T,setSessions:U,getSessions:fe,currentSessionId:Y,setCurrentSessionId:le,getCurrentSessionId:oe},children:a.children})}var on=function(){var x=(0,c.Sz)(De,function(ge){return ge}),l=x.setSessions,f=x.getSessions,T=x.getCurrentSessionId,U=x.setCurrentSessionId,fe=x.currentSessionId,ee=u(function(ge){return ge.session}),re=(0,c.Sz)($,function(ge){return ge.setMessages}),Y=o.useCallback(function(){var ge=J()(C()().mark(function Te(He){var we;return C()().wrap(function(Ze){for(;;)switch(Ze.prev=Ze.next){case 0:return Ze.next=2,ee.api.removeSession(He);case 2:we=Ze.sent,re([]),U(void 0),l(we);case 6:case"end":return Ze.stop()}},Te)}));return function(Te){return ge.apply(this,arguments)}}(),[]),le=o.useCallback(function(){var ge=J()(C()().mark(function Te(He){var we;return C()().wrap(function(Ze){for(;;)switch(Ze.prev=Ze.next){case 0:if(!He.id){Ze.next=6;break}return Ze.next=3,ee.api.updateSession(He);case 3:Ze.t0=Ze.sent,Ze.next=9;break;case 6:return Ze.next=8,ee.api.createSession(He);case 8:Ze.t0=Ze.sent;case 9:return we=Ze.t0,l(we),Ze.abrupt("return",He);case 12:case"end":return Ze.stop()}},Te)}));return function(Te){return ge.apply(this,arguments)}}(),[]),oe=o.useCallback(function(){var ge=J()(C()().mark(function Te(He){var we;return C()().wrap(function(Ze){for(;;)switch(Ze.prev=Ze.next){case 0:return Ze.next=2,le({name:(He==null?void 0:He.name)||"",messages:[]});case 2:return we=Ze.sent,U(we.id),re(we.messages),Ze.abrupt("return",we.id);case 6:case"end":return Ze.stop()}},Te)}));return function(Te){return ge.apply(this,arguments)}}(),[]),je=o.useCallback(function(ge){U(ge)},[]);return(0,qe.Z)(J()(C()().mark(function ge(){var Te,He;return C()().wrap(function(ye){for(;;)switch(ye.prev=ye.next){case 0:return Ce.flushSync(function(){re([])}),ye.next=3,ee.api.getSession(fe);case 3:if(ye.t2=Te=ye.sent,ye.t1=ye.t2===null,ye.t1){ye.next=7;break}ye.t1=Te===void 0;case 7:if(!ye.t1){ye.next=11;break}ye.t3=void 0,ye.next=12;break;case 11:ye.t3=Te.messages;case 12:if(ye.t0=ye.t3,ye.t0){ye.next=15;break}ye.t0=[];case 15:He=ye.t0,re(He);case 17:case"end":return ye.stop()}},ge)})),[fe]),{changeCurrentSessionId:je,getCurrentSessionId:T,getSessions:f,removeSession:Y,updateSession:le,createSession:oe}},Ye=e(68997),Se,xn=(0,_.vJ)(Se||(Se=j()([`
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
`])),function(a){return a.theme.prefixCls},function(a){var x=a.theme;return x.colorText},function(a){var x=a.theme;return x.colorTextSecondary},function(a){var x=a.theme;return x.colorFillQuaternary},function(a){var x=a.theme;return x.colorText},function(a){var x=a.theme;return x.colorFillTertiary}),t=e(38850),Ee=["render"];function Ne(a){var x=u(function(Y){return Y.welcome}),l=(0,M.wv)().getPrefixCls("chat-anywhere-welcome-default");if(!x)return null;var f=x.render,T=he()(x,Ee);if(f)return x.render({greeting:x.greeting,avatar:x.avatar,description:x.description,prompts:x.prompts,onSubmit:a.onSubmit});var U=T.greeting,fe=T.avatar,ee=T.prompts,re=T.description;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(xn,{}),(0,n.jsxs)("div",{className:l,children:[fe&&(0,n.jsx)(Ye.Z,{src:fe,shape:"square",size:64}),U&&(0,n.jsx)("div",{className:"".concat(l,"-greeting"),children:U}),re&&(0,n.jsx)("div",{className:"".concat(l,"-description"),children:re}),(ee==null?void 0:ee.length)>0&&(0,n.jsx)("div",{className:"".concat(l,"-prompts"),children:ee.map(function(Y){var le=typeof Y=="string"?{label:Y,value:Y}:d()(d()({},Y),{},{label:Y.label||Y.value,value:Y.value});return(0,n.jsx)(Me,{prompt:le,onSubmit:a.onSubmit},le.value)})})]})]})}function Me(a){var x=(0,M.wv)().getPrefixCls("chat-anywhere-welcome-default");return(0,n.jsxs)("div",{className:"".concat(x,"-prompt"),onClick:function(){return a.onSubmit({query:a.prompt.value})},children:[(0,n.jsx)("img",{className:"".concat(x,"-prompt-icon"),src:"https://img.alicdn.com/imgextra/i3/O1CN01822qqr1PVyaK7MYtn_!!6000000001847-2-tps-40-40.png",alt:""}),(0,n.jsx)("span",{className:"".concat(x,"-prompt-label"),children:a.prompt.label}),(0,n.jsx)(t.Z,{})]})}function ve(a){var x=(0,c.Sz)(pe,function(U){return U.loading}),l=(0,c.Sz)($,function(U){return U.messages}),f=(0,M.wv)().getPrefixCls("chat-anywhere-message-list"),T=(0,c.Sz)(De,function(U){return U.currentSessionId});return l.length===0?(0,n.jsx)("div",{className:N()(f,"".concat(f,"-welcome")),children:(0,n.jsx)(Ne,{onSubmit:a.onSubmit})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Pe.Z.List,{smooth:x,classNames:{wrapper:f},items:l},T)})}var en,sn=(0,_.vJ)(en||(en=j()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),un=e(32116);function nn(a){(0,o.useEffect)(function(){return document.addEventListener(a.type,a.callback),function(){document.removeEventListener(a.type,a.callback)}},[])}var Le=function(x){var l=x.type,f=x.data;document.dispatchEvent(new CustomEvent(l,{detail:f}))},g=e(88773),q=e(12444),se=e.n(q),E=e(72004),K=e.n(E),r=function(a){return a.Created="created",a.InProgress="in_progress",a.Completed="completed",a.Canceled="canceled",a.Failed="failed",a.Rejected="rejected",a.Unknown="unknown",a}({}),O=function(a){return a.ASSISTANT="assistant",a.USER="user",a.SYSTEM="system",a}({}),b=function(a){return a.MESSAGE="message",a.REASONING="reasoning",a.PLUGIN_CALL="plugin_call",a.PLUGIN_CALL_OUTPUT="plugin_call_output",a.FUNCTION_CALL="function_call",a.FUNCTION_CALL_OUTPUT="function_call_output",a.COMPONENT_CALL="component_call",a.COMPONENT_CALL_OUTPUT="component_call_output",a.MCP_LIST_TOOLS="mcp_list_tools",a.MCP_APPROVAL_REQUEST="mcp_approval_request",a.MCP_CALL="mcp_call",a.MCP_CALL_OUTPUT="mcp_call_output",a.MCP_APPROVAL_RESPONSE="mcp_approval_response",a.HEARTBEAT="heartbeat",a.ERROR="error",a}({}),A=function(a){return a.TEXT="text",a.DATA="data",a.IMAGE="image",a.AUDIO="audio",a.FILE="file",a.REFUSAL="refusal",a}({}),w=function(){function a(x){var l,f=this;se()(this,a),y()(this,"data",void 0);var T=[this.buildTextContent(x.query)];(l=x.fileList)!==null&&l!==void 0&&l.length&&x.fileList.forEach(function(U){f.isImageFile(U)?T.push(f.buildImageContent(U)):T.push(f.buildFileContent(U))}),this.data={input:[{role:"user",type:b.MESSAGE,content:T}]}}return K()(a,[{key:"isImageFile",value:function(l){return l.type.indexOf("image/")===0}},{key:"buildImageContent",value:function(l){var f;return{type:A.IMAGE,image_url:(f=l.response)===null||f===void 0?void 0:f.url,status:r.Created}}},{key:"buildTextContent",value:function(l){return{type:A.TEXT,text:l,status:r.Created}}},{key:"buildFileContent",value:function(l){var f;return{type:A.FILE,file_url:(f=l.response)===null||f===void 0?void 0:f.url,file_name:l.name,file_size:l.size,status:r.Created}}}],[{key:"getHistoryMessages",value:function(l){return l.reduce(function(f,T){var U;return(U=T.cards)!==null&&U!==void 0&&U.length?f.concat(T.cards[0].data.input||T.cards[0].data.output):f},[])}}]),a}(),G=w;function Z(a){var x=a.currentQARef,l=Oe(),f=l.updateMessage,T=l.getMessages,U=l.removeMessage,fe=(0,o.useCallback)(function(le){return x.current.abortController=new AbortController,x.current.request={id:(0,g.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new G(le).data}]},Ce.flushSync(function(){f(x.current.request)}),x.current.request},[x,f]),ee=(0,o.useCallback)(function(){return x.current.response={id:(0,g.Z)(),role:"assistant",cards:[],msgStatus:"generating"},f(x.current.response),x.current.response},[x,f]),re=(0,o.useCallback)(function(){return G.getHistoryMessages(T())},[T]),Y=(0,o.useCallback)(function(le){Ce.flushSync(function(){U({id:le})})},[U]);return{createRequestMessage:fe,createResponseMessage:ee,getHistoryMessages:re,updateMessage:f,removeMessageById:Y,getMessages:T}}var me=e(44987),Re=e.n(me),Ie=e(7354),rn=e(64599),Qe=e.n(rn),Ve=e(93513),ce=function(){function a(x){var l=x.id,f=x.status,T=x.created_at;se()(this,a),y()(this,"data",void 0),this.data={id:l,output:[],object:"response",status:f||r.Created,created_at:T||Date.now()}}return K()(a,[{key:"handleResponse",value:function(l){this.data=(0,Ve.produce)(this.data,function(f){l.output||(l.output=[]),Object.assign(f,l)})}},{key:"handleMessage",value:function(l){this.data=(0,Ve.produce)(this.data,function(f){f.output||(f.output=[]);var T=f.output.findIndex(function(fe){return fe.id===l.id});if(T>=0){var U=f.output[T].content;Object.assign(f.output[T],l),(!l.content||l.content.length===0)&&(f.output[T].content=U)}else f.output.push(l)})}},{key:"handleContent",value:function(l){this.data=(0,Ve.produce)(this.data,function(f){var T=f.output.find(function(fe){return fe.id===l.msg_id});if(!T){console.warn("Message not found for content:",l.msg_id);return}if(T.content||(T.content=[]),l.delta){var U=T.content[T.content.length-1];U&&U.delta?l.type===A.TEXT&&U.type===A.TEXT?U.text+=l.text:l.type===A.IMAGE?U.image_url=l.image_url:(l.type,A.DATA):T.content.push(l)}else T.content.length>0?Object.assign(T.content[T.content.length-1],l):T.content.push(l)})}},{key:"handleError",value:function(l){this.data=(0,Ve.produce)(this.data,function(f){f.status=r.Failed,f.output.push({status:r.Failed,type:b.ERROR,content:[],id:(0,g.Z)(),role:"assistant",code:l.code,message:typeof l.message=="string"?l.message:JSON.stringify(l.message)})})}},{key:"handle",value:function(l){if(l.object==="response")this.handleResponse(l);else if(l.object==="message"){if(l.type===b.HEARTBEAT)return this.data;this.handleMessage(l)}else l.object==="content"?this.handleContent(l):this.handleError(l);return this.data}},{key:"cancel",value:function(){return this.data=(0,Ve.produce)(this.data,function(l){a.maybeGenerating(l)&&(l.status=r.Canceled),l.output.forEach(function(f){a.maybeGenerating(f)&&(f.status=r.Canceled,f.content.forEach(function(T){a.maybeGenerating(T)&&(T.status=r.Canceled)}))})}),this.data}}],[{key:"mergeToolMessages",value:function(l){var f=new Map,T=[],U=Qe()(l),fe;try{var ee=function(){var Y,le,oe=fe.value;if(a.maybeToolInput(oe)&&(Y=oe.content)!==null&&Y!==void 0&&Y.length){var je=oe.content[0],ge=je.data.call_id||je.data.name;f.set(ge,je),T.push(oe)}else if(a.maybeToolOutput(oe)&&(le=oe.content)!==null&&le!==void 0&&le.length){var Te=oe.content[0],He=Te.data.call_id||Te.data.name,we=f.get(He);we&&(T=T.map(function(ye){if(!a.maybeToolInput(ye))return ye;var Ze=ye.content[0],cn=Ze.data.call_id||Ze.data.name;return cn===He?d()(d()({},oe),{},{content:[].concat(te()(ye.content),[Te])}):ye}))}else T.push(oe)};for(U.s();!(fe=U.n()).done;)ee()}catch(re){U.e(re)}finally{U.f()}return T}},{key:"maybeToolOutput",value:function(l){return[b.FUNCTION_CALL_OUTPUT,b.PLUGIN_CALL_OUTPUT,b.COMPONENT_CALL_OUTPUT,b.MCP_CALL_OUTPUT].includes(l.type)}},{key:"maybeToolInput",value:function(l){return[b.FUNCTION_CALL,b.PLUGIN_CALL,b.COMPONENT_CALL,b.MCP_CALL].includes(l.type)}},{key:"maybeGenerating",value:function(l){return[r.InProgress,r.Created].includes(l.status)}},{key:"maybeDone",value:function(l){return[r.Completed,r.Canceled,r.Failed].includes(l.status)}}]),a}(),$e=ce;function fn(a){var x=a.currentQARef,l=a.updateMessage,f=a.getCurrentSessionId,T=a.onFinish,U=u(function(Y){return Y.api}),fe=(0,o.useRef)(U);(0,o.useEffect)(function(){fe.current=U},[U]);var ee=(0,o.useCallback)(function(){var Y=J()(C()().mark(function le(oe){var je,ge,Te,He,we,ye,Ze,cn;return C()().wrap(function(Ge){for(;;)switch(Ge.prev=Ge.next){case 0:je=new $e({id:"",status:r.Created,created_at:0}),ge=!1,Te=!1,Ge.prev=3,we=Re()(oe);case 5:return Ge.next=7,we.next();case 7:if(!(ge=!(ye=Ge.sent).done)){Ge.next=17;break}return Ze=ye.value,cn=je.handle(Ze),x.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:cn}],l(x.current.response),Ge.next=14,(0,un.Z)(100);case 14:ge=!1,Ge.next=5;break;case 17:Ge.next=23;break;case 19:Ge.prev=19,Ge.t0=Ge.catch(3),Te=!0,He=Ge.t0;case 23:if(Ge.prev=23,Ge.prev=24,!(ge&&we.return!=null)){Ge.next=28;break}return Ge.next=28,we.return();case 28:if(Ge.prev=28,!Te){Ge.next=31;break}throw He;case 31:return Ge.finish(28);case 32:return Ge.finish(23);case 33:case"end":return Ge.stop()}},le,null,[[3,19,23,33],[24,,28,32]])}));return function(le){return Y.apply(this,arguments)}}(),[]),re=(0,o.useCallback)(function(){var Y=J()(C()().mark(function le(oe){var je,ge,Te,He,we,ye,Ze,cn,ln,Ge,pn,Un,Xn,Dn;return C()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:if(je=fe.current,_e.prev=1,!je.fetch){_e.next=8;break}return _e.next=5,je.fetch({input:oe});case 5:_e.t0=_e.sent,_e.next=11;break;case 8:return _e.next=10,fetch(je.baseURL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(je.token||"")},body:JSON.stringify({input:oe.slice(-1),session_id:f(),stream:!0})});case 10:_e.t0=_e.sent;case 11:ge=_e.t0,_e.next=16;break;case 14:_e.prev=14,_e.t1=_e.catch(1);case 16:if(!(ge&&ge.body&&ge.ok)){_e.next=61;break}Te=new $e({id:"",status:r.Created,created_at:0}),_e.prev=18,He=!1,we=!1,_e.prev=21,Ze=Re()((0,Ie.Z)({readableStream:ge.body}));case 23:return _e.next=25,Ze.next();case 25:if(!(He=!(cn=_e.sent).done)){_e.next=40;break}if(ln=cn.value,((Ge=x.current.response)===null||Ge===void 0?void 0:Ge.msgStatus)!=="interrupted"){_e.next=32;break}return(Un=x.current.abortController)===null||Un===void 0||Un.abort(),x.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Te.cancel()}],l(x.current.response),_e.abrupt("break",40);case 32:if(Xn=JSON.parse(ln.data),Dn=Te.handle(Xn),!(Dn.status!==r.Failed&&!((pn=Dn.output)!==null&&pn!==void 0&&(pn=pn[0])!==null&&pn!==void 0&&(pn=pn.content)!==null&&pn!==void 0&&pn.length))){_e.next=36;break}return _e.abrupt("continue",37);case 36:x.current.response&&(x.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Dn}],Dn.status===r.Completed||Dn.status===r.Failed?T():l(x.current.response));case 37:He=!1,_e.next=23;break;case 40:_e.next=46;break;case 42:_e.prev=42,_e.t2=_e.catch(21),we=!0,ye=_e.t2;case 46:if(_e.prev=46,_e.prev=47,!(He&&Ze.return!=null)){_e.next=51;break}return _e.next=51,Ze.return();case 51:if(_e.prev=51,!we){_e.next=54;break}throw ye;case 54:return _e.finish(51);case 55:return _e.finish(46);case 56:_e.next=61;break;case 58:_e.prev=58,_e.t3=_e.catch(18),console.error(_e.t3);case 61:case"end":return _e.stop()}},le,null,[[1,14],[18,58],[21,42,46,56],[47,,51,55]])}));return function(le){return Y.apply(this,arguments)}}(),[f,x,l,T]);return{request:re,mockRequest:ee}}function bn(){var a=on(),x=a.createSession,l=a.updateSession,f=a.getCurrentSessionId,T=(0,o.useCallback)(function(){var ee=J()(C()().mark(function re(Y){return C()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:if(f()){oe.next=3;break}return oe.next=3,x({name:Y});case 3:case"end":return oe.stop()}},re)}));return function(re){return ee.apply(this,arguments)}}(),[f,x]),U=(0,o.useCallback)(function(){var ee=J()(C()().mark(function re(Y,le){return C()().wrap(function(je){for(;;)switch(je.prev=je.next){case 0:if(le.length!==0){je.next=3;break}return je.next=3,l({id:f(),name:Y});case 3:case"end":return je.stop()}},re)}));return function(re,Y){return ee.apply(this,arguments)}}(),[f,l]),fe=(0,o.useCallback)(function(){var ee=J()(C()().mark(function re(Y){return C()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return oe.next=2,l({id:f(),messages:Y});case 2:case"end":return oe.stop()}},re)}));return function(re){return ee.apply(this,arguments)}}(),[f,l]);return{ensureSession:T,updateSessionName:U,syncSessionMessages:fe,getCurrentSessionId:f}}function Pn(){var a=(0,c.Sz)(pe,function(oe){return oe.setLoading}),x=(0,c.Sz)(De,function(oe){return oe.currentSessionId}),l=(0,o.useRef)({}),f=Z({currentQARef:l}),T=bn(),U=(0,o.useCallback)(function(){var oe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished";l.current.response&&(l.current.response.msgStatus=oe,a(!1),Ce.flushSync(function(){f.updateMessage(l.current.response)}),T.syncSessionMessages(f.getMessages()))},[a,f,T]),fe=fn({currentQARef:l,updateMessage:f.updateMessage,getCurrentSessionId:T.getCurrentSessionId,onFinish:function(){return U("finished")}}),ee=fe.request,re=(0,o.useCallback)(function(){var oe=J()(C()().mark(function je(ge){var Te,He;return C()().wrap(function(ye){for(;;)switch(ye.prev=ye.next){case 0:return ye.next=2,T.ensureSession(ge.query);case 2:if(Te=f.getMessages(),!T.getCurrentSessionId()){ye.next=6;break}return ye.next=6,T.updateSessionName(ge.query,Te);case 6:return f.createRequestMessage(ge),a(!0),ye.next=10,(0,un.Z)(100);case 10:return f.createResponseMessage(),He=f.getHistoryMessages(),ye.next=14,T.syncSessionMessages(f.getMessages());case 14:return ye.next=16,ee(He);case 16:case"end":return ye.stop()}},je)}));return function(je){return oe.apply(this,arguments)}}(),[f,T,ee]),Y=(0,o.useCallback)(function(){U("interrupted")},[U]),le=(0,o.useCallback)(function(){var oe=J()(C()().mark(function je(ge){var Te;return C()().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:return a(!0),f.removeMessageById(ge),l.current.abortController=new AbortController,f.createResponseMessage(),Te=f.getHistoryMessages(),we.next=7,ee(Te);case 7:case"end":return we.stop()}},je)}));return function(je){return oe.apply(this,arguments)}}(),[f,ee]);return(0,o.useEffect)(function(){l.current={request:void 0,response:void 0,abortController:void 0}},[x]),nn({type:"handleReplace",callback:function(){var oe=J()(C()().mark(function ge(Te){return C()().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:return we.next=2,le(Te.detail.id);case 2:case"end":return we.stop()}},ge)}));function je(ge){return oe.apply(this,arguments)}return je}()}),{handleSubmit:re,handleCancel:Y}}function On(){var a=(0,M.wv)().getPrefixCls("chat-anywhere-chat"),x=Pn(),l=x.handleSubmit,f=x.handleCancel;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(sn,{}),(0,n.jsxs)("div",{className:a,children:[(0,n.jsx)(ve,{onSubmit:l}),(0,n.jsx)(de,{onCancel:f,onSubmit:l})]})]})}var Sn=e(21403),Cn=e(67392),ke=e(13660),Ue=e(12624),dn=e(50287),mn=e(9368),_n=(0,o.createContext)({collapsed:!1,toggleCollapsed:function(){}});function Wn(a){var x=(0,o.useState)(!1),l=Q()(x,2),f=l[0],T=l[1],U=(0,o.useCallback)(function(){T(function(fe){return!fe})},[]);return(0,n.jsx)(_n.Provider,{value:{collapsed:f,toggleCollapsed:U},children:a.children})}function Gn(){var a=(0,o.useContext)(_n),x=a.collapsed,l=(0,M.wv)().getPrefixCls("chat-anywhere-sessions"),f=u(function(T){var U;return(U=T.theme)===null||U===void 0?void 0:U.leftHeader})||{};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"".concat(l),children:[o.isValidElement(f)?f:(0,n.jsx)(wn,{}),(0,n.jsxs)("div",{className:"".concat(l,"-content"),style:{display:x?"none":"flex"},children:[(0,n.jsx)($n,{}),(0,n.jsx)(Nn,{})]})]})})}function wn(a){var x=a.className,l=u(function(ge){var Te;return(Te=ge.theme)===null||Te===void 0?void 0:Te.leftHeader})||{},f=(0,M.wv)().getPrefixCls("chat-anywhere-sessions"),T=(0,o.useContext)(_n),U=T.toggleCollapsed,fe=T.collapsed,ee=u(function(ge){return ge.session.multiple}),re=l,Y=re.logo,le=Y===void 0?"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png":Y,oe=re.title,je=oe===void 0?"Runtime WebUI":oe;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:N()("".concat(f,"-header"),x),children:[(0,n.jsxs)("div",{className:"".concat(f,"-header-left"),children:[(0,n.jsx)("img",{src:le,alt:"logo",height:32}),(0,n.jsx)("span",{children:je})]}),ee&&(0,n.jsx)(We.Z,{className:"".concat(f,"-header-collapse"),bordered:!1,icon:fe?(0,n.jsx)(ke.Z,{}):(0,n.jsx)(Cn.Z,{}),onClick:U})]})})}function $n(a){var x=(0,c.Sz)(pe,function(ee){return ee.loading}),l=on(),f=l.createSession,T=(0,M.wv)().getPrefixCls("chat-anywhere-sessions"),U=(0,o.useContext)(_n),fe=U.toggleCollapsed;return(0,n.jsx)("div",{className:"".concat(T,"-adder"),style:a.style,children:(0,n.jsx)(Sn.Z,{block:!0,type:"primary",icon:(0,n.jsx)(Ue.Z,{}),disabled:x,onClick:J()(C()().mark(function ee(){return C()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,f();case 2:a.narrowMode&&fe();case 3:case"end":return Y.stop()}},ee)})),children:"New Chat"})})}function Nn(a){var x=(0,M.wv)().getPrefixCls("chat-anywhere-sessions"),l=(0,c.Sz)(De,function(le){return le.sessions}),f=on(),T=f.changeCurrentSessionId,U=f.removeSession,fe=(0,c.Sz)(De,function(le){return le.currentSessionId}),ee=(0,o.useContext)(_n),re=ee.toggleCollapsed,Y=(0,o.useMemo)(function(){return l.map(function(le){return{key:le.id,label:le.name||"New Chat"}})},[l]);return(0,n.jsx)("div",{className:"".concat(x,"-list"),style:a.style,children:(0,n.jsx)(mn.Z,{items:Y,menu:[{key:"delete",icon:(0,n.jsx)(dn.Z,{}),danger:!0,onClick:function(){var le=J()(C()().mark(function je(ge){return C()().wrap(function(He){for(;;)switch(He.prev=He.next){case 0:return He.next=2,U({id:ge.key});case 2:return He.abrupt("return",He.sent);case 3:case"end":return He.stop()}},je)}));function oe(je){return le.apply(this,arguments)}return oe}()}],activeKey:fe,onActiveChange:function(oe){T(oe),a.narrowMode&&re()}})})}var zn,Je=(0,_.vJ)(zn||(zn=j()([`

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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),Be=e(85265);function hn(){var a=(0,M.wv)().getPrefixCls("chat-anywhere"),x=u(function(ee){return ee.theme}),l=x.narrowMode,f=x.rightHeader,T=(0,o.useContext)(_n),U=T.toggleCollapsed,fe=T.collapsed;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Je,{}),(0,n.jsxs)("div",{className:"".concat(a,"-layout-right-header"),children:[l?(0,n.jsx)(wn,{className:"".concat(a,"-default-header-inner")}):null,f&&(0,n.jsx)("div",{className:"".concat(a,"-default-header-right"),children:f})]}),l&&(0,n.jsx)(Be.Z,{width:"80vw",styles:{body:{padding:0}},open:fe,onClose:U,title:null,closable:!1,placement:"left",children:(0,n.jsxs)("div",{className:"".concat(a,"-sessions"),children:[(0,n.jsx)(Nn,{narrowMode:!0}),(0,n.jsx)($n,{narrowMode:!0})]})})]})}function vn(a,x){var l=Oe(),f=(0,c.Sz)(pe,function(T){return T.setDisabled});return o.useImperativeHandle(x,function(){return{messages:l,input:{setDisabled:f}}},[]),null}var Jn=(0,o.forwardRef)(vn);function yn(a,x){var l=a.className,f=(0,M.wv)().getPrefixCls("chat-anywhere-layout"),T=u(function(oe){return oe.theme.narrowMode}),U=u(function(oe){return oe.theme.rightHeader}),fe=u(function(oe){return{session:oe.session}}),ee=fe.session,re=(0,o.useContext)(_n),Y=re.collapsed,le=!T&&ee&&ee.multiple;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{}),(0,n.jsxs)("div",{className:N()("".concat(f),l),children:[le&&(0,n.jsx)("div",{className:N()("".concat(f,"-left"),y()({},"".concat(f,"-left-collapsed"),Y)),children:(0,n.jsx)(Gn,{})}),(0,n.jsxs)("div",{className:N()("".concat(f,"-right"),y()({},"".concat(f,"-right-has-header"),!!U)),children:[!!U&&(0,n.jsx)(hn,{}),(0,n.jsx)(On,{})]})]}),(0,n.jsx)(Jn,{ref:x})]})}var An=(0,o.forwardRef)(yn);function Qn(a){var x=(0,o.useMemo)(function(){return a.data.input[0].content.reduce(function(l,f){if(f.type===A.TEXT&&l.push({code:"Text",data:{content:f.text,raw:!0}}),f.type===A.IMAGE){var T=l.find(function(fe){return fe.code==="Image"});T?T.data.push({url:f.image_url}):l.push({code:"Images",data:[{url:f.image_url}]})}if(f.type===A.FILE){var U=l.find(function(fe){return fe.code==="Files"});U?U.data.push({url:f.file_url,name:f.file_name,size:f.file_size}):l.push({code:"Files",data:[{url:f.file_url,name:f.file_name,size:f.file_size}]})}return l},[])},[a.data.input]);return(0,n.jsx)(Pe.Z,{role:"user",cards:x})}var Rn=e(82679),kn=o.memo(function(a){var x,l=a.data;return(x=l.content)!==null&&x!==void 0&&x.length?(0,n.jsx)(n.Fragment,{children:l.content.map(function(f,T){switch(f.type){case A.TEXT:return(0,n.jsx)(Rn.Z,{content:f.text,cursor:f.status===r.InProgress},T);case A.REFUSAL:return(0,n.jsx)(Rn.Z,{raw:!0,content:f.refusal},T);default:return(0,n.jsx)("div",{children:JSON.stringify(f)},T)}})}):null}),jn=kn,Zn=e(85786),Kn=o.memo(function(a){var x,l,f=a.data,T=u(function(ge){return ge.customToolRenderConfig})||{};if(!((x=f.content)!==null&&x!==void 0&&x.length))return null;var U=f.content,fe=!((l=U[1])!==null&&l!==void 0&&l.data)||f.status===r.InProgress,ee=U[0].data.name,re="".concat(U[0].data.server_label?U[0].data.server_label+" / ":""),Y="".concat(re).concat(ee);if(T[ee]){var le=T[ee];return(0,n.jsx)(le,{data:f})}else{var oe,je;return(0,n.jsx)(Zn.Z,{loading:fe,defaultOpen:!1,title:Y,input:(oe=U[0])===null||oe===void 0||(oe=oe.data)===null||oe===void 0?void 0:oe.arguments,output:(je=U[1])===null||je===void 0||(je=je.data)===null||je===void 0?void 0:je.output})}}),Ln=Kn,Bn=e(79323);function Hn(a){var x,l=a.data;if(l.status===r.Created)return null;var f=l==null||(x=l.content)===null||x===void 0?void 0:x[0];return f?(0,n.jsx)(Bn.Z,{loading:l.status===r.InProgress,title:"Thinking",content:f.text}):null}function Mn(a){var x=a.data;return(0,n.jsx)(Pe.Z.Interrupted,{type:"error",title:x.code,desc:x.message})}var gn=e(89698),Tn=e(60227),En=e(82286),In=e(67055),Vn=e(39693),tt=e.n(Vn);function at(a){return!a.input_tokens||!a.output_tokens?null:(0,n.jsx)(Pe.Z.Footer.Count,{data:[["Input",a.input_tokens],["Output",a.output_tokens]]})}function st(a){var x,l,f,T=u(function(ee){var re;return(re=ee.actions)===null||re===void 0?void 0:re.list})||[{icon:(0,n.jsx)(gn.Z,{}),onClick:function(){(0,En.JG)(JSON.stringify(a.data))}}],U=(x=u(function(ee){var re;return(re=ee.actions)===null||re===void 0?void 0:re.replace}))!==null&&x!==void 0?x:!0,fe=tt()([].concat(te()(T.map(function(ee){var re=ee;return ee.render&&(re.children=o.createElement(ee.render,{data:a})),d()(d()({},re),{},{onClick:function(){var le;(le=ee.onClick)===null||le===void 0||le.call(ee,a)}})})),[U&&a.isLast?{icon:(0,n.jsx)(In.Z,{title:"\u91CD\u65B0\u751F\u6210",children:(0,n.jsx)(Tn.Z,{})}),onClick:function(){Le({type:"handleReplace",data:a})}}:null]));return $e.maybeDone(a.data)?(0,n.jsx)(Pe.Z.Footer,{left:(0,n.jsx)(Pe.Z.Footer.Actions,{data:fe}),right:(0,n.jsx)(at,{input_tokens:(l=a.data.usage)===null||l===void 0?void 0:l.input_tokens,output_tokens:(f=a.data.usage)===null||f===void 0?void 0:f.output_tokens})}):null}function qn(a){var x=(0,o.useMemo)(function(){return $e.mergeToolMessages(a.data.output)},[a.data.output]);return!(x!=null&&x.length)&&$e.maybeGenerating(a.data)?(0,n.jsx)(Pe.Z.Spin,{}):(0,n.jsxs)(n.Fragment,{children:[x.map(function(l){switch(l.type){case b.MESSAGE:return(0,n.jsx)(jn,{data:l},l.id);case b.PLUGIN_CALL:case b.PLUGIN_CALL_OUTPUT:case b.MCP_CALL:case b.MCP_CALL_OUTPUT:return(0,n.jsx)(Ln,{data:l},l.id);case b.REASONING:return(0,n.jsx)(Hn,{data:l},l.id);case b.ERROR:return(0,n.jsx)(Mn,{data:l},l.id);case b.HEARTBEAT:return null;default:return console.warn("[WIP] Unknown message type: ".concat(l.type)),null}}),a.data.error&&(0,n.jsx)(Mn,{data:a.data.error}),(0,n.jsx)(st,d()({},a))]})}var ot=e(83962);function rt(a){var x=a.options,l=a.cards,f=a.children,T=[[z,{options:x}],[ot.xy,{cardConfig:l}],[ze,{}],[Ae,{}],[k,{}],[Wn,{}]];return T.reduceRight(function(U,fe){var ee=Q()(fe,2),re=ee[0],Y=ee[1];return(0,n.jsx)(re,d()(d()({},Y),{},{children:U}))},f)}var Fn=rt;function it(a,x){var l=a.options,f=l===void 0?{}:l,T=(0,o.useMemo)(function(){var U=d()({AgentScopeRuntimeRequestCard:Qn,AgentScopeRuntimeResponseCard:qn},f.cards);return U},[f.cards]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Fn,{options:f,cards:T,children:(0,n.jsx)(An,{ref:x})})})}var et=(0,o.forwardRef)(it)},57551:function(){},22863:function(Ke,F,e){"use strict";e.r(F);var H=e(57551),d=e.n(H),S={};for(var y in H)y!=="default"&&(S[y]=function(M){return H[M]}.bind(0,y));e.d(F,S)},36417:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return xn}});var H=e(9783),d=e.n(H),S=e(97857),y=e.n(S),M=e(5574),P=e.n(M),j=e(13769),_=e.n(j),I=e(93967),v=e.n(I),h=e(67294),N=e(56044),i=e(56790),c=e(73935),o=h.createContext(null),m=e(85893);function R(t){var Ee=t.getDropContainer,Ne=t.className,Me=t.prefixCls,ve=t.children,en=h.useContext(o),sn=en.disabled,un=h.useState(),nn=P()(un,2),Le=nn[0],g=nn[1],q=h.useState(null),se=P()(q,2),E=se[0],K=se[1];h.useEffect(function(){var b=Ee==null?void 0:Ee();Le!==b&&g(b)},[Ee]),h.useEffect(function(){if(Le){var b=function(){K(!0)},A=function(me){me.preventDefault()},w=function(me){me.relatedTarget||K(!1)},G=function(me){K(!1),me.preventDefault()};return document.addEventListener("dragenter",b),document.addEventListener("dragover",A),document.addEventListener("dragleave",w),document.addEventListener("drop",G),function(){document.removeEventListener("dragenter",b),document.removeEventListener("dragover",A),document.removeEventListener("dragleave",w),document.removeEventListener("drop",G)}}},[!!Le]);var r=Ee&&Le&&!sn;if(!r)return null;var O="".concat(Me,"-drop-area");return(0,c.createPortal)((0,m.jsx)("div",{className:v()(O,Ne,d()({},"".concat(O,"-on-body"),Le.tagName==="BODY")),style:{display:E?"block":"none"},children:ve}),Le)}var s=e(53033),n=e(52861),L=e(83622),u=e(29372),z=e(64599),ne=e.n(z),X=function(Ee){return Ee.indexOf("image/")===0},C=200;function ie(t){return new Promise(function(Ee){if(!t||!t.type||!X(t.type)){Ee("");return}var Ne=new Image;if(Ne.onload=function(){var en=Ne.width,sn=Ne.height,un=en/sn,nn=un>1?C:C*un,Le=un>1?C/un:C,g=document.createElement("canvas");g.width=nn,g.height=Le,g.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(nn,"px; height: ").concat(Le,"px; z-index: 9999; display: none;"),document.body.appendChild(g);var q=g.getContext("2d");q.drawImage(Ne,0,0,nn,Le);var se=g.toDataURL();document.body.removeChild(g),window.URL.revokeObjectURL(Ne.src),Ee(se)},Ne.crossOrigin="anonymous",t.type.startsWith("image/svg+xml")){var Me=new FileReader;Me.onload=function(){Me.result&&typeof Me.result=="string"&&(Ne.src=Me.result)},Me.readAsDataURL(t)}else if(t.type.startsWith("image/gif")){var ve=new FileReader;ve.onload=function(){ve.result&&Ee(ve.result)},ve.readAsDataURL(t)}else Ne.src=window.URL.createObjectURL(t)})}var J=e(9361),W=e(38703);function Q(t){var Ee=t.percent,Ne=J.Z.useToken(),Me=Ne.token;return(0,m.jsx)(W.Z,{type:"circle",percent:Ee,size:40,strokeColor:"#FFF",trailColor:"rgba(255, 255, 255, 0.3)",format:function(en){return(0,m.jsxs)("span",{style:{color:"#FFF"},children:[(en||0).toFixed(0),"%"]})}})}var ae=e(68400),xe=e.n(ae),p=e(9053),pe,k=(0,p.vJ)(pe||(pe=xe()([`
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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.colorBgContainer},function(t){return t.theme.lineWidth},function(t){return t.theme.colorBorderSecondary},function(t){return t.theme.paddingXS},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.fontSize},function(t){return t.theme.colorText},function(t){return t.theme.prefixCls},function(t){return t.theme.colorTextQuaternary},function(t){return t.theme.fontSizeSM},function(t){return t.theme.prefixCls},function(t){return t.theme.opacityLoading},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.lineWidth},function(t){return t.theme.prefixCls},function(t){return t.theme.paddingXXS},function(t){return t.theme.prefixCls},function(t){return t.theme.colorText},function(t){return t.theme.colorBgContainer},function(t){return t.theme.lineWidth},function(t){return t.theme.colorBorder},function(t){return t.theme.colorError},function(t){return t.theme.prefixCls},function(t){return t.theme.colorError},function(t){return t.theme.paddingSM},function(t){return t.theme.prefixCls},function(t){return t.theme.colorPrimary}),ue=e(89102),V="\xA0",he="#8c8c8c",Fe=["png","jpg","jpeg","gif","bmp","webp","svg"],We=function(Ee){var Ne=Ee.url;return(0,m.jsx)("img",{src:Ne,width:32,height:32})},Xe=[{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01cVtZXI23tPVhiZoPJ_!!6000000007313-55-tps-40-40.svg"}),color:"#22b35e",ext:["xlsx","xls"]},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01uDnnuz1XMNEjgFMul_!!6000000002909-55-tps-40-40.svg"}),color:he,ext:Fe},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01PaXli01DDPAO68fsI_!!6000000000182-55-tps-40-40.svg"}),color:he,ext:["md","mdx"]},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01mB5PzD27fuIWK661W_!!6000000007825-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["pdf"]},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01a8j7Jv1nW1QyFme7k_!!6000000005096-55-tps-40-40.svg"}),color:"#ff6e31",ext:["ppt","pptx"]},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01XaNi8P1UkhQXoQdUL_!!6000000002556-55-tps-40-40.svg"}),color:"#1677ff",ext:["doc","docx"]},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),color:"#fab714",ext:["zip","rar","7z","tar","gz"]},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01zTTe0q1Xg4GkZgJol_!!6000000002952-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["mp4","avi","mov","wmv","flv","mkv"]},{icon:(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01qOBdXG1UpHO6f3Vvc_!!6000000002566-55-tps-40-40.svg"}),color:"#8c8c8c",ext:["mp3","wav","flac","ape","aac","ogg"]}];function an(t,Ee){return Ee.some(function(Ne){return t.toLowerCase()===".".concat(Ne)})}function tn(t){for(var Ee=t,Ne=["B","KB","MB","GB","TB","PB","EB"],Me=0;Ee>=1024&&Me<Ne.length-1;)Ee/=1024,Me++;return"".concat(Ee.toFixed(0)," ").concat(Ne[Me])}function B(t,Ee){var Ne=(0,N.wv)(),Me=Ne.getPrefixCls,ve=t.item,en=t.onRemove,sn=t.className,un=t.style,nn=h.useContext(o),Le=nn||{},g=Le.disabled,q=ve.name,se=ve.size,E=ve.percent,K=ve.status,r=K===void 0?"done":K,O=ve.description,b=Me("attachment"),A="".concat(b,"-list-card"),w=h.useMemo(function(){var Ue=q||"",dn=Ue.match(/^(.*)\.[^.]+$/);return dn?[dn[1],Ue.slice(dn[1].length)]:[Ue,""]},[q]),G=P()(w,2),Z=G[0],me=G[1],Re=h.useMemo(function(){return an(me,Fe)},[me]),Ie=h.useMemo(function(){return O||(r==="uploading"?"".concat(E||0,"%"):r==="error"?ve.response||V:se?tn(se):V)},[r,E]),rn=h.useMemo(function(){var Ue=ne()(Xe),dn;try{for(Ue.s();!(dn=Ue.n()).done;){var mn=dn.value,_n=mn.ext,Wn=mn.icon,Gn=mn.color;if(an(me,_n))return[Wn,Gn]}}catch(wn){Ue.e(wn)}finally{Ue.f()}return[(0,m.jsx)(We,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"},"defaultIcon"),he]},[me]),Qe=P()(rn,2),Ve=Qe[0],ce=Qe[1],$e=h.useState(),fn=P()($e,2),bn=fn[0],Pn=fn[1];h.useEffect(function(){if(ve.originFileObj){var Ue=!0;return ie(ve.originFileObj).then(function(dn){Ue&&Pn(dn)}),function(){Ue=!1}}Pn(void 0)},[ve.originFileObj]);var On=null,Sn=ve.thumbUrl||ve.url||bn,Cn=t.renderType||"default",ke=Re&&(ve.originFileObj||Sn)&&Cn==="default";return ke?On=(0,m.jsxs)(m.Fragment,{children:[Sn&&(0,m.jsx)("img",{alt:"preview",src:Sn}),r!=="done"&&(0,m.jsxs)("div",{className:"".concat(A,"-img-mask"),children:[r==="uploading"&&E!==void 0&&(0,m.jsx)(Q,{percent:E,prefixCls:A}),r==="error"&&(0,m.jsx)("div",{className:"".concat(A,"-desc"),children:(0,m.jsx)("div",{className:"".concat(A,"-ellipsis-prefix"),children:Ie})})]})]}):On=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"".concat(A,"-icon"),style:{color:ce},children:Ve}),(0,m.jsxs)("div",{className:"".concat(A,"-content"),children:[(0,m.jsxs)("div",{className:"".concat(A,"-name"),children:[Z!=null?Z:V,me]}),(0,m.jsx)("div",{className:"".concat(A,"-desc"),children:(0,m.jsx)("div",{className:"".concat(A,"-ellipsis-prefix"),children:Ie})})]})]}),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(k,{}),(0,m.jsxs)("div",{className:v()(A,d()(d()(d()(d()(d()({},"".concat(A,"-status-").concat(r),r),"".concat(A,"-type-preview"),ke),"".concat(A,"-type-overview"),!ke),"".concat(A,"-type-").concat(Cn),!0),"".concat(A,"-hoverable"),!g&&en),sn),style:un,ref:Ee,children:[On,(0,m.jsx)("button",{style:{opacity:!g&&en?1:0},className:"".concat(A,"-remove"),onClick:function(){!g&&en&&en(ve)},children:(0,m.jsx)(ue.Z,{})})]})]})}var de=h.forwardRef(B),Pe=1;function D(t){var Ee=t.prefixCls,Ne=t.items,Me=t.onRemove,ve=t.overflow,en=t.listClassName,sn=t.listStyle,un=t.itemClassName,nn=t.itemStyle,Le="".concat(Ee,"-list"),g=h.useRef(null),q=h.useState(!1),se=P()(q,2),E=se[0],K=se[1];h.useEffect(function(){return K(!0),function(){K(!1)}},[]);var r=h.useState(!1),O=P()(r,2),b=O[0],A=O[1],w=h.useState(!1),G=P()(w,2),Z=G[0],me=G[1],Re=function(){var ce=g.current;ce&&(ve==="scrollX"?(A(Math.abs(ce.scrollLeft)>=Pe),me(ce.scrollWidth-ce.clientWidth-Math.abs(ce.scrollLeft)>=Pe)):ve==="scrollY"&&(A(ce.scrollTop!==0),me(ce.scrollHeight-ce.clientHeight!==ce.scrollTop)))};h.useEffect(function(){Re()},[ve]);var Ie=function(ce){var $e=g.current;$e&&$e.scrollTo({left:$e.scrollLeft+ce*$e.clientWidth,behavior:"smooth"})},rn=function(){Ie(-1)},Qe=function(){Ie(1)};return(0,m.jsxs)("div",{className:v()(Le,d()(d()(d()({},"".concat(Le,"-overflow-").concat(t.overflow),ve),"".concat(Le,"-overflow-ping-start"),b),"".concat(Le,"-overflow-ping-end"),Z),en),ref:g,onScroll:Re,style:sn,children:[(0,m.jsx)(u.V4,{keys:Ne.map(function(Ve){return{key:Ve.uid,item:Ve}}),motionName:"".concat(Le,"-card-motion"),component:!1,motionAppear:E,motionLeave:!0,motionEnter:!0,children:function(ce){var $e=ce.key,fn=ce.item,bn=ce.className,Pn=ce.style;return(0,m.jsx)(de,{prefixCls:Ee,item:fn,onRemove:Me,className:v()(bn,un),style:y()(y()({},Pn),nn),renderType:t.renderType},$e)}}),ve==="scrollX"&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(L.ZP,{size:"small",shape:"circle",className:"".concat(Le,"-prev-btn"),icon:(0,m.jsx)(s.Z,{}),onClick:rn}),(0,m.jsx)(L.ZP,{size:"small",shape:"circle",className:"".concat(Le,"-next-btn"),icon:(0,m.jsx)(n.Z,{}),onClick:Qe})]})]})}var te=e(86250),$=e(21317),Ae=e(82484);function Oe(t,Ee){var Ne=t.prefixCls,Me=t.placeholder,ve=Me===void 0?{}:Me,en=t.upload,sn=t.className,un=t.style,nn="".concat(Ne,"-placeholder"),Le=ve||{},g=h.useContext(o),q=g.disabled,se=h.useState(!1),E=P()(se,2),K=E[0],r=E[1],O=function(){r(!0)},b=function(Z){Z.currentTarget.contains(Z.relatedTarget)||r(!1)},A=function(){r(!1)},w=h.isValidElement(ve)?ve:(0,m.jsxs)(te.Z,{align:"center",justify:"center",vertical:!0,className:"".concat(nn,"-inner"),children:[(0,m.jsx)($.Z.Text,{className:"".concat(nn,"-icon"),children:Le.icon}),(0,m.jsx)($.Z.Title,{className:"".concat(nn,"-title"),level:5,children:Le.title}),(0,m.jsx)($.Z.Text,{className:"".concat(nn,"-description"),type:"secondary",children:Le.description})]});return(0,m.jsx)("div",{className:v()(nn,d()(d()({},"".concat(nn,"-drag-in"),K),"".concat(nn,"-disabled"),q),sn),onDragEnter:O,onDragLeave:b,onDrop:A,"aria-hidden":q,style:un,children:(0,m.jsx)(Ae.Z.Dragger,y()(y()({showUploadList:!1},en),{},{ref:Ee,style:{padding:0,border:0,background:"transparent"},children:w}))})}var be=h.forwardRef(Oe);function Ce(t,Ee){var Ne=t.children,Me=t.upload,ve=t.rootClassName,en=h.useRef(null);return h.useImperativeHandle(Ee,function(){return en.current}),(0,m.jsx)(Ae.Z,y()(y()({},Me),{},{showUploadList:!1,rootClassName:ve,ref:en,children:Ne}))}var qe=h.forwardRef(Ce),De,ze=(0,p.vJ)(De||(De=xe()([`
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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.zIndexPopupBase},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.lineWidthBold},function(t){return t.theme.padding},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.colorPrimaryHover},function(t){return t.theme.prefixCls},function(t){return t.theme.paddingXXS},function(t){return t.theme.fontSizeHeading2},function(t){return t.theme.prefixCls},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.colorText},function(t){return t.theme.padding},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSizeHeading2},function(t){return t.theme.boxShadowTertiary},function(t){return t.theme.padding},function(t){return t.theme.padding},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls}),on=["prefixCls","rootClassName","rootStyle","className","style","items","children","getDropContainer","placeholder","onChange","overflow","disabled","classNames","styles"];function Ye(t,Ee){var Ne=t.prefixCls,Me=t.rootClassName,ve=t.rootStyle,en=t.className,sn=t.style,un=t.items,nn=t.children,Le=t.getDropContainer,g=t.placeholder,q=t.onChange,se=t.overflow,E=t.disabled,K=t.classNames,r=K===void 0?{}:K,O=t.styles,b=O===void 0?{}:O,A=_()(t,on),w=(0,N.wv)(),G=w.direction,Z=w.getPrefixCls,me=Z("attachment"),Re=h.useRef(null),Ie=h.useRef(null);h.useImperativeHandle(Ee,function(){return{nativeElement:Re.current,upload:function(ke){var Ue,dn=(Ue=Ie.current)===null||Ue===void 0||(Ue=Ue.nativeElement)===null||Ue===void 0?void 0:Ue.querySelector('input[type="file"]');if(dn){var mn=new DataTransfer;mn.items.add(ke),dn.files=mn.files,dn.dispatchEvent(new Event("change",{bubbles:!0}))}}}});var rn=(0,i.C8)([],{value:un}),Qe=P()(rn,2),Ve=Qe[0],ce=Qe[1],$e=(0,i.zX)(function(Cn){ce(Cn.fileList),q==null||q(Cn)}),fn=y()(y()({},A),{},{fileList:Ve,onChange:$e}),bn=function(ke){var Ue=Ve.filter(function(dn){return dn.uid!==ke.uid});$e({file:ke,fileList:Ue})},Pn,On=function(ke,Ue,dn){var mn=typeof g=="function"?g(ke):g;return(0,m.jsx)(be,{placeholder:mn,upload:fn,prefixCls:me,className:v()(r.placeholder),style:y()(y()({},b.placeholder),Ue==null?void 0:Ue.style),ref:dn})};if(nn)Pn=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(qe,{upload:fn,rootClassName:Me,ref:Ie,children:nn}),(0,m.jsx)(R,{getDropContainer:Le,prefixCls:me,className:v()(Me),children:On("drop")})]});else{var Sn=Ve.length>0;Pn=(0,m.jsxs)("div",{className:v()(me,d()({},"".concat(me,"-rtl"),G==="rtl"),en,Me),style:y()(y()({},ve),sn),dir:G||"ltr",ref:Re,children:[(0,m.jsx)(D,{prefixCls:me,items:Ve,onRemove:bn,overflow:se,upload:fn,listClassName:v()(r.list),listStyle:y()(y()({},b.list),!Sn&&{display:"none"}),itemClassName:v()(r.item),itemStyle:y()({},b.item),renderType:t.renderType}),On("inline",Sn?{style:{display:"none"}}:{},Ie)]})}return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(ze,{}),(0,m.jsx)(o.Provider,{value:{disabled:E},children:Pn})]})}var Se=h.forwardRef(Ye);Se.FileCard=de;var xn=Se},50130:function(Ke,F,e){"use strict";e.d(F,{L:function(){return N},Z:function(){return h}});var H=e(97857),d=e.n(H),S=e(13769),y=e.n(S),M=e(67294),P=e(83962),j=e(76289),_=e(85893),I=["component"],v=M.memo(function(i){var c=(0,P.HJ)(),o=(0,j.TQ)(function(n){return n.onInput}),m=(0,M.useMemo)(function(){if(i.component)return i.component;var n=c;return(n==null?void 0:n[i.code])||function(){return"".concat(i.code," not found")}},[]);if(typeof m=="function"){var R=i.component,s=y()(i,I);return(0,_.jsx)(m,d()(d()({},s),{},{context:{onInput:o}}))}else return m});function h(i){var c=i.cards;return c!=null&&c.length?c.map(function(o,m){var R=(0,_.jsx)(v,d()({index:m,id:i.id,isLast:i.isLast},o),(o==null?void 0:o.id)||m+o.code);return o.code==="Text"?(0,_.jsx)("div",{className:i.className,children:R},m):R}):null}function N(i,c){return{code:i,data:c}}},67369:function(Ke,F,e){"use strict";e.d(F,{p4:function(){return N},hw:function(){return i},ZP:function(){return h}});var H=e(67294),d=e(56044),S=e(64057),y=e(68400),M=e.n(y),P=e(9053),j,_=(0,P.vJ)(j||(j=M()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorText},function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextTertiary},function(c){return c.theme.colorBorder}),I=_,v=e(85893);function h(c){var o=(0,d.wv)(),m=o.getPrefixCls,R=m("bubble-footer"),s=c.left,n=c.right;return s&&!s.type||n&&!n.type?null:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(I,{}),(0,v.jsxs)("div",{className:R,children:[(0,v.jsx)("div",{className:"".concat(R,"-left"),children:c.left}),(0,v.jsx)("div",{className:"".concat(R,"-right"),children:c.right})]})]})}function N(c){var o=(0,d.wv)(),m=o.getPrefixCls,R=m("bubble-footer-actions");return(0,v.jsx)("div",{className:R,children:c.data.map(function(s,n){return s.children?H.cloneElement(s.children,{key:n}):(0,v.jsx)(S.Z,{bordered:!1,icon:s.icon,size:"small",onClick:s.onClick},n)})})}function i(c){var o=(0,d.wv)(),m=o.getPrefixCls,R=m("bubble-footer-count");return(0,v.jsx)("div",{className:R,children:c.data.map(function(s){return(0,v.jsxs)("div",{className:"".concat(R,"-item"),children:[s[0],"\uFF1A",s[1]]},s[0])})})}h.Actions=N,h.Count=i},10146:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return v}});var H=e(68400),d=e.n(H),S=e(9053),y=e(56044),M=e(9343),P=e(36674),j=e(85893),_,I=(0,S.vJ)(_||(_=d()([`
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

`])),function(h){return h.theme.prefixCls},function(h){return h.theme.colorFillSecondary},function(h){return h.theme.prefixCls},function(h){return h.theme.prefixCls},function(h){return h.theme.colorText},function(h){return h.theme.colorError});function v(h){var N=h.title,i=N===void 0?"Answers have stopped":N,c=h.type,o=c===void 0?"interrupted":c,m=h.desc,R=(0,y.wv)(),s=R.getPrefixCls,n=s("interrupted");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(I,{}),(0,j.jsxs)("div",{className:"".concat(n),children:[(0,j.jsxs)("div",{className:"".concat(n,"-header"),children:[(0,j.jsx)("div",{className:"".concat(n,"-icon-wrapper"),children:o==="interrupted"?(0,j.jsx)(M.Z,{className:"".concat(n,"-header-interrupted")}):(0,j.jsx)(P.Z,{className:"".concat(n,"-header-error")})}),(0,j.jsx)("span",{children:i})]}),m&&(0,j.jsx)("div",{className:"".concat(n,"-desc"),children:m})]})]})}},9146:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return tn}});var H=e(97857),d=e.n(H),S=e(93967),y=e.n(S),M=e(67294),P=e(68400),j=e.n(P),_=e(9053),I,v=(0,_.vJ)(I||(I=j()([`
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
`])),function(B){return B.theme.prefixCls},function(B){return B.theme.prefixCls},function(B){return B.theme.colorText},function(B){return B.theme.fontSize},function(B){return B.theme.lineHeight},function(B){return B.theme.prefixCls},function(B){return B.theme.borderRadiusLG},function(B){return B.theme.colorPrimaryBg},function(B){return B.theme.prefixCls},function(B){return B.theme.colorText},function(B){return B.theme.colorText},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorTextTertiary},function(B){return B.theme.colorTextTertiary},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorTextSecondary},function(B){return B.theme.colorTextSecondary},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorBgBase}),h=e(56044),N=e(82679),i=e(50130),c=e(85893);function o(){var B=(0,h.wv)(),de=B.getPrefixCls,Pe=de("bubble-loading");return(0,c.jsxs)("div",{className:Pe,children:[(0,c.jsx)("div",{className:"".concat(Pe,"-dot1")}),(0,c.jsx)("div",{className:"".concat(Pe,"-dot2")}),(0,c.jsx)("div",{className:"".concat(Pe,"-dot3")}),(0,c.jsx)("div",{className:"".concat(Pe,"-text"),children:"-"})]})}var m=e(9783),R=e.n(m),s=e(68997),n=function(de){var Pe=de.avatar,D=de.msgStatus,te=de.isAssistant,$=de.prefixCls,Ae=de.className,Oe=de.style,be=M.isValidElement(Pe)?Pe:(0,c.jsx)(s.Z,d()({},Pe));return(0,c.jsx)("div",{className:y()("".concat($,"-avatar"),R()({},"".concat($,"-avatar-loading"),te&&D==="generating"),Ae),style:Oe,children:be})},L=n,u=M.createContext({}),z=function(de){var Pe=de.isLast,D=de.className,te=de.rootClassName,$=de.style,Ae=de.classNames,Oe=Ae===void 0?{}:Ae,be=de.styles,Ce=be===void 0?{}:be,qe=de.avatar,De=de.content,ze=De===void 0?"":De,on=de.cards,Ye=de.msgStatus,Se=de.id,xn=de.role,t=de.variant,Ee={assistant:"start",user:"end"}[xn]||"start",Ne=(0,h.wv)(),Me=Ne.getPrefixCls,ve=Me("bubble"),en=y()(ve,te,D,"".concat(ve,"-").concat(Ee)),sn,un=!(ze!=null&&ze.length)&&!(on!=null&&on.length);de.msgStatus==="generating"&&un?sn=(0,c.jsx)(o,{}):sn=ze?(0,c.jsx)(N.Z,{content:ze,cursor:de.msgStatus==="generating"}):null;var nn=Ee==="assistant"||Ee==="start",Le="".concat(ve,"-content-").concat(t||(nn?"borderless":"filled")),g=(0,c.jsxs)("div",{style:!nn&&sn?{flexDirection:"column-reverse"}:{},className:"".concat(ve,"-content-wrapper"),children:[(0,c.jsx)(i.Z,{cards:on,id:Se,isLast:Pe,className:y()("".concat(ve,"-content"),"".concat(ve,"-content-wrapper-card"),Le,Oe.content)}),sn&&(0,c.jsx)("div",{style:d()({},Ce.content),className:y()("".concat(ve,"-content"),"".concat(ve,"-content-wrapper-card"),Le,Oe.content),children:sn})]});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,{}),(0,c.jsxs)("div",{style:$,className:en,id:Se,"data-role":xn,children:[qe&&(0,c.jsx)(L,{avatar:qe,msgStatus:Ye,isAssistant:nn,prefixCls:ve,className:Oe.avatar,style:Ce.avatar}),g]})]})},ne=M.memo(z),X=e(13769),C=e.n(X),ie=e(5574),J=e.n(ie),W=e(80322),Q=e(64057),ae=e(25109),xe=function(de,Pe){var D=(0,h.wv)(),te=D.getPrefixCls,$=(0,W.a)(),Ae=$.isAtBottom,Oe=$.scrollToBottom;M.useImperativeHandle(Pe,function(){return{scrollToBottom:function(Ce){function qe(De){return Ce.apply(this,arguments)}return qe.toString=function(){return Ce.toString()},qe}(function(Ce){Ce=Ce||{animation:"instant"},Oe(Ce)})}});var be=te("bubble-list-scroll-to-bottom");return(0,c.jsx)("div",{className:y()(be,"".concat(be,"-").concat(Ae?"hide":"show")),children:(0,c.jsx)(Q.Z,{icon:(0,c.jsx)(ae.Z,{}),shape:"circle",onClick:function(){return Oe({animation:"instant"})}})})},p=M.forwardRef(xe),pe,k=(0,_.vJ)(pe||(pe=j()([`
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
`])),function(B){return B.theme.prefixCls},function(B){return B.theme.prefixCls},function(B){return B.theme.prefixCls},function(B){return B.theme.colorPrimaryBorder},function(B){return B.theme.colorPrimaryBg},function(B){return B.theme.colorPrimary}),ue=e(78234),V=["key"],he=function(de,Pe){var D,te,$=de.items,Ae=$===void 0?[]:$,Oe=de.smooth,be=Oe===void 0?!0:Oe,Ce=(0,M.useState)(!1),qe=J()(Ce,2),De=qe[0],ze=qe[1],on=M.useRef(),Ye=(0,h.wv)(),Se=Ye.getPrefixCls,xn=Se("bubble-list");M.useImperativeHandle(Pe,function(){return{scrollToBottom:function(){on.current.scrollToBottom()}}}),(0,ue.Z)(function(){ze(!0)});var t=De&&be?"smooth":"instant";return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(k,{}),(0,c.jsxs)(W.h,{id:de.id,className:y()("".concat(xn,"-wrapper"),(D=de.classNames)===null||D===void 0?void 0:D.wrapper),resize:t,initial:"instant",style:de.style,children:[(0,c.jsx)(W.h.Content,{className:y()("".concat(xn),(te=de.classNames)===null||te===void 0?void 0:te.list),children:de.children?de.children:Ae.map(function(Ee,Ne){var Me=Ee.key,ve=C()(Ee,V),en=Ne===Ae.length-1;return(0,M.createElement)(ne,d()(d()({},ve),{},{isLast:en,key:ve.id||Me}))})}),(0,c.jsx)(p,{ref:on})]})]})},Fe=M.forwardRef(he),We=Fe,Xe=e(67369),an=e(10146);ne.List=We,ne.Spin=o,ne.Footer=Xe.ZP,ne.Interrupted=an.Z;var tn=ne},76289:function(Ke,F,e){"use strict";e.d(F,{TQ:function(){return c},vi:function(){return N}});var H=e(97857),d=e.n(H),S=e(13769),y=e.n(S),M=e(5574),P=e.n(M),j=e(67294),_=e(79785),I=e(59214),v=e(85893),h=["children"];function N(o){var m=(0,_.Z)([]),R=P()(m,3),s=R[0],n=R[1],L=R[2],u=(0,_.Z)("0"),z=P()(u,3),ne=z[0],X=z[1],C=z[2],ie=(0,_.Z)(0),J=P()(ie,3),W=J[0],Q=J[1],ae=J[2],xe=(0,_.Z)([]),p=P()(xe,3),pe=p[0],k=p[1],ue=p[2],V=(0,_.Z)(!1),he=P()(V,3),Fe=he[0],We=he[1],Xe=he[2],an=(0,_.Z)(!1),tn=P()(an,3),B=tn[0],de=tn[1],Pe=tn[2],D=(0,_.Z)(!0),te=P()(D,3),$=te[0],Ae=te[1],Oe=te[2],be=o.children,Ce=y()(o,h),qe=d()({sessionList:s,setSessionList:n,getSessionList:L,currentSessionKey:ne,setCurrentSessionKey:X,getCurrentSessionKey:C,messages:pe,setMessages:k,getMessages:ue,loading:Fe,setLoading:We,getLoading:Xe,disabled:B,setDisabled:de,getDisabled:Pe,sessionListShow:$,setSessionListShow:Ae,getSessionListShow:Oe,currentRegenerateIndex:W,setCurrentRegenerateIndex:Q,getCurrentRegenerateIndex:ae},Ce);return(0,v.jsx)(i.Provider,{value:qe,children:be})}var i=(0,I.kr)(void 0);function c(o){try{var m=(0,I.Sz)(i,o);return m}catch(R){return{}}}},37254:function(Ke,F,e){"use strict";e.d(F,{G:function(){return d}});var H=e(76289);function d(){var S=(0,H.TQ)(function(v){return{loading:v.loading,getLoading:v.getLoading,disabled:v.disabled,getDisabled:v.getDisabled,setLoading:v.setLoading,setDisabled:v.setDisabled}}),y=S.loading,M=S.disabled,P=S.setLoading,j=S.setDisabled,_=S.getLoading,I=S.getDisabled;return{loading:y,disabled:M,setLoading:P,setDisabled:j,getLoading:_,getDisabled:I}}},4421:function(Ke,F,e){"use strict";e.d(F,{y:function(){return j}});var H=e(19632),d=e.n(H),S=e(97857),y=e.n(S),M=e(67294),P=e(76289);function j(){var _=(0,P.TQ)(function(m){return{messages:m.messages,setMessages:m.setMessages,getMessages:m.getMessages}}),I=_.messages,v=_.setMessages,h=_.getMessages,N=M.useCallback(function(){var m,R=((m=arguments.length<=0?void 0:arguments[0])===null||m===void 0?void 0:m.id)||(arguments.length<=0?void 0:arguments[0]),s=(arguments.length<=1?void 0:arguments[1])||(arguments.length<=0?void 0:arguments[0]);v==null||v(function(n){var L=n.findIndex(function(z){return z.id===R});if(L>-1){var u=y()(y()({},n[L]),s);return[].concat(d()(n.slice(0,L)),[u],d()(n.slice(L+1)))}else return[].concat(d()(n),[s])})},[]),i=M.useCallback(function(m){v(function(R){return R.filter(function(s){return s.id!==m.id})})},[]),c=M.useCallback(function(){v([])},[]),o=M.useCallback(function(m){return h().find(function(R){return R.id===m})},[]);return{messages:I,getMessage:o,setMessages:v,getMessages:h,updateMessage:N,removeMessage:i,removeAllMessages:c}}},61316:function(Ke,F,e){"use strict";e.d(F,{x:function(){return I}});var H=e(97857),d=e.n(H),S=e(19632),y=e.n(S),M=e(67294),P=e(76289),j=e(88773),_=e(73935);function I(){var v=(0,P.TQ)(function(W){return{getCurrentSessionKey:W.getCurrentSessionKey,currentRegenerateIndex:W.currentRegenerateIndex,setCurrentRegenerateIndex:W.setCurrentRegenerateIndex,getCurrentRegenerateIndex:W.getCurrentRegenerateIndex,sessionListShow:W.sessionListShow,setSessionListShow:W.setSessionListShow,sessionList:W.sessionList,setSessionList:W.setSessionList,currentSessionKey:W.currentSessionKey,setCurrentSessionKey:W.setCurrentSessionKey,getSessionList:W.getSessionList}}),h=v.getCurrentSessionKey,N=v.sessionList,i=v.setSessionList,c=v.currentSessionKey,o=v.setCurrentSessionKey,m=v.sessionListShow,R=v.setSessionListShow,s=v.currentRegenerateIndex,n=v.setCurrentRegenerateIndex,L=v.getCurrentRegenerateIndex,u=v.getSessionList,z=M.useCallback(function(){var W=(0,j.Z)(),Q={label:Date.now().toString(),key:W,messages:[[]]};return _.flushSync(function(){i(function(ae){var xe=[].concat(y()(ae),[Q]);return xe}),o(W)}),W},[]),ne=M.useCallback(function(W){i(function(Q){var ae=Q.filter(function(xe){return xe.key!==W});return ae})},[]),X=M.useCallback(function(W){var Q=h(),ae=L();i(function(xe){return xe.map(function(p){return p.key===Q?(p.messages[ae]=W,d()({},p)):p})})},[]),C=M.useCallback(function(W,Q){var ae;return(ae=u().find(function(xe){return xe.key===W}))===null||ae===void 0?void 0:ae.messages[Q]},[]),ie=M.useCallback(function(){return{sessionList:u(),currentSessionKey:h(),currentRegenerateIndex:L()}},[]),J=M.useCallback(function(W){var Q=W.sessionList,ae=W.currentSessionKey,xe=W.currentRegenerateIndex;i(Q),o(ae),n(xe)},[]);return{currentRegenerateIndex:s,setCurrentRegenerateIndex:n,getCurrentRegenerateIndex:L,sessionList:N,setSessionList:i,getSessionList:u,currentSessionKey:c,setCurrentSessionKey:o,sessionListShow:m,setSessionListShow:R,createSession:z,deleteSession:ne,updateSessionMessages:X,getMessagesBySession:C,getSession:ie,updateSession:J}}},29041:function(Ke,F,e){"use strict";e.d(F,{ZP:function(){return se}});var H=e(97857),d=e.n(H),S=e(13769),y=e.n(S),M=e(5574),P=e.n(M),j=e(67294),_=e(93967),I=e.n(_),v=e(56044),h=e(85265),N=e(17909),i=e(76289),c=e(68400),o=e.n(c),m=e(9053),R,s=(0,m.vJ)(R||(R=o()([`

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
`])),function(E){return E.theme.prefixCls},function(E){return E.theme.fontFamily},function(E){return E.theme.colorBgBase},function(E){return E.theme.colorBgBase},function(E){return E.theme.colorBgBase},function(E){return E.theme.colorFillTertiary}),n=e(85893);function L(E){var K=(0,i.TQ)(function(Z){return{sessionListShow:Z.sessionListShow,setSessionListShow:Z.setSessionListShow}}),r=K.sessionListShow,O=K.setSessionListShow,b=(0,v.wv)(),A=b.getPrefixCls,w=A("chat-anywhere-layout"),G=z();return(0,j.useEffect)(function(){O(!G)},[G]),E.left?G?(0,n.jsx)(h.Z,{width:"80vw",styles:{body:{padding:0}},open:r,onClose:function(){O(!1)},title:null,closable:!1,placement:"left",children:(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:E.left})}):(0,n.jsx)("div",{className:I()("".concat(w,"-left"),r?"":"".concat(w,"-left-hide")),children:E.left}):null}function u(E){var K=(0,v.wv)(),r=K.getPrefixCls,O=r("chat-anywhere-layout"),b=(0,i.TQ)(function(A){return A.uiConfig});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{}),(0,n.jsx)("div",{className:O,children:(0,n.jsxs)("div",{className:"".concat(O,"-main"),children:[(0,n.jsx)(L,d()({},E)),(0,n.jsxs)("div",{className:"".concat(O,"-right"),style:{background:b==null?void 0:b.background},children:[E.top,E.right]})]})})]})}var z=function(){var K=(0,N.Z)(),r=(0,i.TQ)(function(O){return O.uiConfig});return!K.md||(r==null?void 0:r.narrowScreen)},ne=e(9368),X=e(64057),C=e(21403),ie=e(61316),J=e(4421),W,Q=(0,m.vJ)(W||(W=o()([`
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

`])),function(E){return E.theme.prefixCls},function(E){return E.theme.prefixCls},function(E){return E.theme.prefixCls},function(E){return E.theme.prefixCls},function(E){return E.theme.prefixCls}),ae=e(50287),xe=e(67392),p=e(13660),pe=e(12624);function k(){var E=(0,v.wv)(),K=E.getPrefixCls,r=K("chat-anywhere-session-list"),O=(0,i.TQ)(function(b){return b.sessionListShow});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Q,{}),(0,n.jsxs)("div",{className:I()("".concat(r),O?"":"".concat(r,"-hide")),children:[(0,n.jsx)(V,{}),(0,n.jsx)(ue,{})]})]})}function ue(){var E=(0,v.wv)(),K=E.getPrefixCls,r=K("chat-anywhere-session-list"),O=(0,ie.x)(),b=O.currentSessionKey,A=O.setCurrentSessionKey,w=O.currentRegenerateIndex,G=O.sessionList,Z=O.getMessagesBySession,me=O.setSessionListShow,Re=(0,J.y)(),Ie=Re.setMessages,rn=(0,i.TQ)(function(ce){return ce.getLoading}),Qe=(0,i.TQ)(function(ce){return ce.onSessionKeyChange}),Ve=z();return(0,j.useEffect)(function(){var ce=Z(b,w);Ie(ce)},[b,w]),(0,n.jsx)("div",{className:"".concat(r,"-session"),children:(0,n.jsx)(ne.Z,{menu:[{key:"delete",icon:(0,n.jsx)(ae.Z,{}),danger:!0,onClick:function($e){}}],activeKey:b,items:G,onActiveChange:function($e){rn()||(Ve&&me(!1),requestIdleCallback(function(){A($e),Qe($e)}))}})})}function V(){var E=(0,v.wv)(),K=E.getPrefixCls,r=K("chat-anywhere-session-list"),O=(0,ie.x)(),b=O.currentSessionKey,A=O.setCurrentSessionKey,w=O.deleteSession,G=O.createSession,Z=O.sessionList,me=O.sessionListShow,Re=O.setSessionListShow,Ie=(0,i.TQ)(function(Qe){return Qe.uiConfig}),rn=z();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(r,"-logo"),children:[Ie==null?void 0:Ie.logo,(0,n.jsx)(X.Z,{bordered:!1,onClick:function(){return Re(!me)},icon:me?(0,n.jsx)(xe.Z,{}):(0,n.jsx)(p.Z,{})})]}),(0,n.jsx)("div",{className:"".concat(r,"-adder"),children:(0,n.jsx)(C.Z,{type:"primary",block:!0,icon:(0,n.jsx)(pe.Z,{}),onClick:function(){rn&&Re(!1),G()},children:"New Session"})})]})}var he=e(9783),Fe=e.n(he),We=e(9146),Xe=e(19632),an=e.n(Xe),tn=e(52677),B=e.n(tn),de=e(15009),Pe=e.n(de),D=e(99289),te=e.n(D),$=e(82484),Ae=e(93164),Oe=e(36417),be=e(37254),Ce,qe=(0,m.vJ)(Ce||(Ce=o()([`
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
`])),function(E){return E.theme.prefixCls},function(E){return E.theme.prefixCls}),De=e(86578),ze=e(7654),on=e(92053),Ye=e(86250),Se=["trigger"];function xn(E){var K=E.uploadPropsList,r=(0,v.wv)(),O=r.getPrefixCls,b=O("chat-anywhere-sender"),A=(0,j.useState)(!1),w=P()(A,2),G=w[0],Z=w[1],me=(0,j.useRef)([]),Re=(0,j.useMemo)(function(){return K.map(function(rn,Qe){return(0,n.jsx)("div",{onClick:function(){var ce;(ce=me.current[Qe])===null||ce===void 0||ce.click(),Z(!1)},children:rn.trigger},Qe)})},[K]),Ie=(0,j.useMemo)(function(){return K.map(function(rn,Qe){var Ve=rn.trigger,ce=y()(rn,Se);return(0,n.jsx)($.Z,d()(d()({},ce),{},{children:(0,n.jsx)("div",{ref:function(fn){return me.current[Qe]=fn}})}),Qe)})},[K]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ze.Z,{placement:"bottomLeft",open:G,onOpenChange:Z,content:(0,n.jsx)(Ye.Z,{vertical:!0,children:Re}),trigger:"click",styles:{body:{padding:4}},children:(0,n.jsx)(X.Z,{icon:(0,n.jsx)(on.Z,{}),bordered:!1})}),(0,n.jsx)("div",{className:"".concat(b,"-upload-hidden-nodes"),children:Ie})]})}var t=(0,j.forwardRef)(function(E,K){var r=j.useState(""),O=P()(r,2),b=O[0],A=O[1],w=(0,be.G)(),G=(0,i.TQ)(function(Je){return Je.onUpload.map(function(Be){return d()(d()({},Be),{},{disabled:Be.disabled||w.disabled})})}),Z=new Array((G==null?void 0:G.length)||0).fill([]),me=(0,j.useState)(!1),Re=P()(me,2),Ie=Re[0],rn=Re[1],Qe=j.useState(Z),Ve=P()(Qe,2),ce=Ve[0],$e=Ve[1],fn=(0,j.useRef)(Z);(0,j.useEffect)(function(){$e(Z)},[Z.length]),(0,j.useEffect)(function(){fn.current=ce},[ce]);var bn=(0,i.TQ)(function(Je){return Je.uiConfig}),Pn=(0,v.wv)(),On=Pn.getPrefixCls,Sn=On("chat-anywhere-sender"),Cn=(0,i.TQ)(function(Je){return Je.onStop}),ke=(0,i.TQ)(function(Je){var Be={beforeUI:void 0,afterUI:void 0,morePrefixActions:void 0,maxLength:void 0,zoomable:!0,beforeSubmit:function(){return Promise.resolve(!0)},header:[],enableFocusExpand:!1,variant:"default",hide:!1};return d()(d()({},Be),Je.onInput)});if(j.useImperativeHandle(K,function(){return{setInputContent:function(Be,hn){A(Be),$e(hn||[[]])},getAttachedFiles:function(){return fn.current}}},[]),(0,j.useEffect)(function(){w.setDisabled(ke.disabled)},[ke.disabled]),ke.hide)return null;var Ue=function(){var Je=te()(Pe()().mark(function Be(hn,vn){return Pe()().wrap(function(yn){for(;;)switch(yn.prev=yn.next){case 0:$e(function(An){return An.map(function(Qn,Rn){return Rn===hn?vn:Qn})});case 1:case"end":return yn.stop()}},Be)}));return function(hn,vn){return Je.apply(this,arguments)}}(),dn=(0,j.useMemo)(function(){if(ke.variant==="aigc"||!(G!=null&&G.length))return[];var Je=G.map(function(Be,hn){var vn;return Be.trigger?vn=Be.trigger:(Be.title||Be.description)&&G.length>1?vn=(0,n.jsxs)(C.Z,{type:"text",icon:Be.icon,children:[Be.title&&(0,n.jsx)("span",{children:Be.title}),Be.description&&(0,n.jsx)("span",{style:{fontSize:"0.8em",opacity:.8},children:Be.description})]}):vn=(0,n.jsx)(X.Z,{icon:Be.icon,bordered:!1}),d()(d()({},Be),{},{fileList:ce[hn],key:hn,onChange:function(yn){Be.beforeUpload&&yn.file.status&&Ue(hn,yn.fileList),Be.beforeUpload||Ue(hn,yn.fileList)},showUploadList:!1,trigger:vn})});return Je.length===1?(0,n.jsx)($.Z,d()(d()({},Je[0]),{},{children:Je[0].trigger})):(0,n.jsx)(xn,{uploadPropsList:Je})},[ke.variant,G,ce]),mn=(0,n.jsx)(De.Z.SenderHeader,{onUpload:G,attachedFiles:ce,onFileChange:Ue}),_n=(0,n.jsx)(Ae.Z.Header,{closable:!1,open:ce==null?void 0:ce.some(function(Je){return Je.length}),children:ce.map(function(Je,Be){return Je.length?(0,n.jsx)(Oe.Z,{items:Je,onChange:function(vn){return Ue(Be,vn.fileList)}},Be):null})}),Wn=ke.variant==="aigc"?mn:_n,Gn=ce.map(function(Je){return Je.filter(function(Be){return Be.status==="done"})}),wn=ce.some(function(Je){return Je.some(function(Be){return Be.status==="uploading"})}),$n=function(Be){if(!(G!=null&&G.length))return;var hn=Be.type||"",vn=Be.name||"",Jn=function(Zn){return Zn?Zn.split(",").some(function(Kn){var Ln=Kn.trim();if(!Ln)return!1;if(Ln.startsWith("."))return vn.toLowerCase().endsWith(Ln.toLowerCase());if(Ln.includes("*")){if(Ln==="*/*")return!0;var Bn=Ln.split("/"),Hn=P()(Bn,1),Mn=Hn[0],gn=hn.split("/"),Tn=P()(gn,1),En=Tn[0];return Mn===En}return hn===Ln}):!0},yn=G.findIndex(function(jn){return Jn(jn.accept)});if(yn===-1)return;var An=G[yn],Qn=ce[yn]||[];if(An.maxCount&&Qn.length>=An.maxCount||!An.multiple&&Qn.length>0)return;if(An.beforeUpload){var Rn=An.beforeUpload(Be,[Be]);if(Rn===!1||Rn===$.Z.LIST_IGNORE)return;if(Rn instanceof Promise){Rn.then(function(jn){if(!(jn===!1||jn===$.Z.LIST_IGNORE)){var Zn=jn&&B()(jn)==="object"?jn:Be;kn(Zn)}}).catch(function(jn){console.error("beforeUpload promise rejected:",jn)});return}if(Rn&&B()(Rn)==="object"){kn(Rn);return}}kn(Be);function kn(jn){var Zn=function(){var gn=vn.match(/\.([^.]+)$/);if(gn)return gn[1].toLowerCase();var Tn=hn.match(/\/([^/+]+)/);return Tn?Tn[1].toLowerCase():"bin"},Kn=Date.now(),Ln={uid:"paste_".concat(Kn,"_").concat(Math.random().toString(36).slice(2,11)),name:vn||"pasted-".concat(Kn,".").concat(Zn()),size:jn.size,type:hn,status:"uploading",percent:0,originFileObj:jn},Bn=function(gn){$e(function(Tn){var En=an()(Tn);return En[yn]=(En[yn]||[]).map(function(In){return In.uid===Ln.uid?d()(d()({},In),gn):In}),En})};if($e(function(Mn){var gn=an()(Mn),Tn=gn[yn]||[];if(!An.multiple)gn[yn]=[Ln];else{if(An.maxCount&&Tn.length>=An.maxCount)return Mn;gn[yn]=[].concat(an()(Tn),[Ln])}return gn}),hn&&hn.startsWith("image/")){var Hn=new FileReader;Hn.onload=function(Mn){var gn,Tn=(gn=Mn.target)===null||gn===void 0?void 0:gn.result;typeof Tn=="string"&&Bn({thumbUrl:Tn,url:Tn})},Hn.readAsDataURL(jn)}An.customRequest({file:jn,onSuccess:function(gn){Bn({status:"done",response:gn,percent:100})},onError:function(gn){Bn({status:"error",error:gn})},onProgress:function(gn){Bn({percent:gn.percent})}},{defaultRequest:function(){}})}},Nn=(0,j.useMemo)(function(){var Je;return(Je=G==null?void 0:G.some(function(Be,hn){if(Be.required){var vn=ce[hn]||[];return vn.length===0}return!1}))!==null&&Je!==void 0?Je:!1},[G,ce]),zn=Nn;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(qe,{}),(0,n.jsxs)("div",{className:I()("".concat(Sn,"-wrapper"),Fe()(Fe()({},"".concat(Sn,"-wrapper-focus"),Ie&&ke.enableFocusExpand),"".concat(Sn,"-wrapper-blur"),!Ie&&ke.enableFocusExpand)),children:[bn.quickInput&&(0,n.jsx)("div",{className:I()("".concat(Sn,"-wrapper-header")),children:bn.quickInput}),ke.beforeUI,(0,n.jsx)(Ae.Z,{placeholder:ke.placeholder,enableFocusExpand:ke.enableFocusExpand,value:b,onChange:A,maxLength:ke.maxLength,disabled:wn||w.disabled,sendDisabled:zn,scalable:ke==null?void 0:ke.zoomable,header:Wn,prefix:(0,n.jsxs)(n.Fragment,{children:[dn,ke==null?void 0:ke.morePrefixActions]}),onSubmit:te()(Pe()().mark(function Je(){var Be;return Pe()().wrap(function(vn){for(;;)switch(vn.prev=vn.next){case 0:return vn.next=2,(ke.beforeSubmit||function(){return Promise.resolve(!0)})();case 2:if(Be=vn.sent,Be){vn.next=5;break}return vn.abrupt("return");case 5:ke.onSubmit({query:b,fileList:Gn}),A(""),$e(Z);case 8:case"end":return vn.stop()}},Je)})),onCancel:function(){Cn==null||Cn(),w.setLoading(!1)},onFocus:function(){return rn(!0)},onBlur:function(){return rn(!1)},onPasteFile:$n,loading:w.loading}),ke.afterUI]})]})}),Ee=e(69637),Ne=e(10325),Me,ve=(0,m.vJ)(Me||(Me=o()([`
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


`])),function(E){return E.theme.prefixCls},function(E){return E.theme.prefixCls},function(E){return E.theme.prefixCls},function(E){return E.theme.prefixCls},function(E){return E.theme.prefixCls}),en=(0,j.forwardRef)(function(E,K){var r=(0,i.TQ)(function(Qe){return Qe.messages}),O=(0,v.wv)(),b=O.getPrefixCls,A=b("chat-anywhere"),w=(0,i.TQ)(function(Qe){return Qe.uiConfig}),G=(0,j.useState)(!1),Z=P()(G,2),me=Z[0],Re=Z[1];(0,Ee.Z)(function(){Re(!0)},300);var Ie=I()("".concat(A,"-chat"),Fe()({},"".concat(A,"-chat-hide"),!me)),rn=!(r!=null&&r.length);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ve,{}),(0,n.jsxs)("div",{className:Ie,children:[(0,n.jsx)(We.Z.List,{style:{height:0,flex:rn?0:1},ref:K.chatRef,items:r}),rn?(0,n.jsx)("div",{className:"".concat(Ie,"-welcome"),children:w==null?void 0:w.welcome}):null,(0,n.jsx)("div",{className:"".concat(Ie,"-sender"),style:w!=null&&w.disclaimer?{marginBottom:16}:{},children:(0,n.jsx)(t,{ref:K.inputRef})}),(w==null?void 0:w.disclaimer)&&(0,n.jsx)(Ne.Z,{style:{position:"absolute",bottom:0,width:"100%"},desc:w==null?void 0:w.disclaimer})]})]})}),sn,un=(0,m.vJ)(sn||(sn=o()([`
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

`])),function(E){return E.theme.prefixCls},function(E){return E.theme.prefixCls},function(E){return E.theme.prefixCls},function(E){return E.theme.prefixCls});function nn(){var E=(0,v.wv)(),K=E.getPrefixCls,r=K("chat-anywhere-header"),O=(0,i.TQ)(function(Z){return Z.uiConfig}),b=(0,ie.x)(),A=b.sessionListShow,w=b.setSessionListShow,G=z();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(un,{}),(0,n.jsxs)("div",{className:r,children:[G&&(0,n.jsx)(X.Z,{style:{marginLeft:12},bordered:!1,onClick:function(){return w(!A)},icon:A?(0,n.jsx)(xe.Z,{}):(0,n.jsx)(p.Z,{})}),O.header]})]})}var Le=e(83962),g=j.forwardRef(function(K,r){var O=(0,J.y)(),b=(0,be.G)(),A=(0,ie.x)();return j.useImperativeHandle(r,function(){return d()(d()(d()({},O),b),A)}),null}),q=["cardConfig"],se=(0,j.forwardRef)(function(E,K){var r,O=(0,j.useState)(0),b=P()(O,2),A=b[0],w=b[1],G=E.cardConfig,Z=y()(E,q),me=(0,j.useRef)(null),Re=(0,j.useRef)(null),Ie=(0,j.useRef)(null);return j.useImperativeHandle(K,function(){return d()(d()(d()(d()({},me.current),Re.current),Ie.current),{},{reload:function(){w(function(Qe){return Qe+1})}})}),(0,j.createElement)(i.vi,d()(d()({},Z),{},{key:A}),(0,n.jsxs)(Le.xy,{cardConfig:G,children:[(0,n.jsx)(u,{top:(r=Z.uiConfig)!==null&&r!==void 0&&r.header?(0,n.jsx)(nn,{}):null,left:Z.onSessionKeyChange?(0,n.jsx)(k,{}):null,right:(0,n.jsx)(en,{ref:{chatRef:me,inputRef:Re}})}),(0,n.jsx)(g,{ref:Ie})]}))})},9368:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return Pe}});var H=e(97857),d=e.n(H),S=e(9783),y=e.n(S),M=e(5574),P=e.n(M),j=e(13769),_=e.n(j),I=e(93967),v=e.n(I),h=e(67294),N=e(21317),i=e(85893),c=h.createContext(null),o=function(te){var $=te.children,Ae=h.useContext(c),Oe=Ae.prefixCls;return(0,i.jsx)("div",{className:v()("".concat(Oe,"-group-title")),children:$&&(0,i.jsx)(N.Z.Text,{children:$})})},m=o,R=e(30339),s=e(54604),n=e(7654),L=e(64057),u=e(21403),z=["prefixCls","info","className","direction","onClick","active","menu"],ne=["key"],X={};function C(D){var te=(0,h.useState)(X[D]),$=P()(te,2),Ae=$[0],Oe=$[1];return[Ae,function(be){for(var Ce in X)X[Ce]=!1;X[D]=be,Oe(be)}]}var ie=function(te){var $,Ae=C(te.info.key),Oe=P()(Ae,2),be=Oe[0],Ce=Oe[1],qe=(0,h.useState)(!1),De=P()(qe,2),ze=De[0],on=De[1],Ye=te.prefixCls,Se=te.info,xn=te.className,t=te.direction,Ee=te.onClick,Ne=te.active,Me=te.menu,ve=_()(te,z),en=(0,R.Z)(ve,{aria:!0,data:!0,attr:!0}),sn=Se.disabled,un=v()(xn,"".concat(Ye,"-item"),y()({},"".concat(Ye,"-item-active"),Ne&&!sn),y()({},"".concat(Ye,"-item-disabled"),sn),y()({},"".concat(Ye,"-item-timeline"),Se.timeline)),nn=function(){!sn&&Ee&&Ee(Se)};return(0,i.jsxs)("li",d()(d()({},en),{},{className:un,onClick:nn,children:[(0,i.jsxs)("div",{className:"".concat(Ye,"-content"),children:[Se.icon&&(0,i.jsx)("div",{className:"".concat(Ye,"-icon"),children:Se.icon}),Se.timeline&&(0,i.jsx)("div",{className:"".concat(Ye,"-timeline")}),(0,i.jsx)(J,{editable:be,setEditable:Ce,prefixCls:Ye,info:Se,onEdit:Me==null||($=Me.find(function(Le){return Le.key==="edit"}))===null||$===void 0?void 0:$.onEdit}),Me&&!sn&&(0,i.jsx)(n.Z,{styles:{body:{padding:4}},trigger:["click"],open:ze,onOpenChange:on,content:(0,i.jsx)("div",{className:"".concat(Ye,"-menu-popover"),children:Me.map(function(Le){var g=Le.key,q=_()(Le,ne),se=d()(d()({},q),{},{onClick:function(K){if(g==="edit")Ce(!0);else{var r;(r=q.onClick)===null||r===void 0||r.call(q,Se)}on(!1)}});return(0,i.jsx)(Q,d()(d()({},se),{},{info:Se}),g)})}),placement:"bottom",children:(0,i.jsx)(L.Z,{bordered:!1,icon:(0,i.jsx)(s.Z,{}),disabled:sn,className:"".concat(Ye,"-menu-icon"),onClick:function(g){return g.stopPropagation()}})})]}),Se.desc&&(0,i.jsx)("div",{className:"".concat(Ye,"-desc"),style:Se.timeline?{marginLeft:16}:{},children:Se.desc})]}))};function J(D){var te=D.editable,$=D.prefixCls,Ae=D.info,Oe=D.setEditable,be=D.onEdit,Ce=(0,h.useState)(Ae.label),qe=P()(Ce,2),De=qe[0],ze=qe[1];return(0,h.useEffect)(function(){ze(Ae.label)},[Ae.label]),te?(0,i.jsx)(W,{prefixCls:$,value:De,onBlur:function(Ye){var Se;if(Ye===De)return Oe(!1);(Se=be(Ye,Ae))===null||Se===void 0||Se.then(function(){ze(Ye)}).catch(function(){ze(De)}).finally(function(){Oe(!1)})},setEditable:Oe}):(0,i.jsx)("div",{className:"".concat($,"-label"),children:De})}function W(D){var te=D.prefixCls,$=D.value,Ae=D.onBlur,Oe=D.setEditable,be=(0,h.useState)($),Ce=P()(be,2),qe=Ce[0],De=Ce[1],ze=(0,h.useRef)();return(0,h.useEffect)(function(){ze.current.focus()},[]),(0,h.useEffect)(function(){De($)},[$]),(0,i.jsx)("input",{ref:ze,className:"".concat(te,"-label-edit"),value:qe,onChange:function(Ye){return De(Ye.target.value)},onBlur:function(){return Ae(qe)}})}function Q(D){var te=D.label,$=D.icon,Ae=D.danger,Oe=D.info,be=D.disabled,Ce=function(De){var ze;be||(De.stopPropagation(),(ze=D.onClick)===null||ze===void 0||ze.call(D,Oe))};return $&&te?(0,i.jsx)(u.Z,{disabled:be,icon:$,danger:Ae,type:"text",onClick:Ce,children:te}):$?(0,i.jsx)(L.Z,{disabled:be,icon:$,danger:Ae,bordered:!1,onClick:Ce}):te?(0,i.jsx)(u.Z,{disabled:be,danger:Ae,type:"text",onClick:Ce,children:te}):null}var ae=ie,xe=e(60869),p=e(56044),pe=e(52677),k=e.n(pe),ue="__ungrouped",V=function(te){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],Ae=h.useMemo(function(){if(!te)return[!1,void 0,void 0];var De={sort:void 0,title:void 0};return k()(te)==="object"&&(De=d()(d()({},De),te)),[!0,De.sort,De.title]},[te]),Oe=P()(Ae,3),be=Oe[0],Ce=Oe[1],qe=Oe[2];return h.useMemo(function(){if(!be){var De=[{name:ue,data:$,title:void 0}];return[De,be]}var ze=$.reduce(function(Se,xn){var t=xn.group||ue;return Se[t]||(Se[t]=[]),Se[t].push(xn),Se},{}),on=Ce?Object.keys(ze).sort(Ce):Object.keys(ze),Ye=on.map(function(Se){return{name:Se===ue?void 0:Se,title:qe,data:ze[Se]}});return[Ye,be]},[$,te])},he=V,Fe=e(68400),We=e.n(Fe),Xe=e(9053),an,tn=(0,Xe.vJ)(an||(an=We()([`
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
}`])),function(D){return D.theme.prefixCls},function(D){return D.theme.paddingXXS},function(D){return D.theme.prefixCls},function(D){return D.theme.paddingXL},function(D){return D.theme.prefixCls},function(D){return D.theme.colorTextSecondary},function(D){return D.theme.colorBgBase},function(D){return D.theme.colorBorder},function(D){return D.theme.colorTextSecondary},function(D){return D.theme.borderRadiusLG},function(D){return D.theme.colorBorder},function(D){return D.theme.colorFillTertiary},function(D){return D.theme.colorFillTertiary},function(D){return D.theme.prefixCls},function(D){return D.theme.prefixCls},function(D){return D.theme.colorText},function(D){return D.theme.prefixCls},function(D){return D.theme.colorTextDisabled},function(D){return D.theme.prefixCls},function(D){return D.theme.prefixCls},function(D){return D.theme.colorFillTertiary},function(D){return D.theme.colorText},function(D){return D.theme.colorText},function(D){return D.theme.fontFamily},function(D){return D.theme.fontSizeXL},function(D){return D.theme.controlHeightLG},function(D){return D.theme.controlHeightLG},function(D){return D.theme.paddingXS}),B=["prefixCls","rootClassName","items","activeKey","defaultActiveKey","onActiveChange","menu","styles","classNames","groupable","className","style"],de=function(te){var $=te.prefixCls,Ae=te.rootClassName,Oe=te.items,be=te.activeKey,Ce=te.defaultActiveKey,qe=te.onActiveChange,De=te.menu,ze=te.styles,on=ze===void 0?{}:ze,Ye=te.classNames,Se=Ye===void 0?{}:Ye,xn=te.groupable,t=te.className,Ee=te.style,Ne=_()(te,B),Me=(0,R.Z)(Ne,{attr:!0,aria:!0,data:!0}),ve=(0,xe.Z)(Ce,{value:be}),en=P()(ve,2),sn=en[0],un=en[1],nn=he(xn,Oe),Le=P()(nn,2),g=Le[0],q=Le[1],se=(0,p.wv)(),E=se.direction,K=se.getPrefixCls,r=K("conversations"),O=v()(r,t,Ae,y()({},"".concat(r,"-rtl"),E==="rtl")),b=function(w){un(w.key),qe&&qe(w.key)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(tn,{}),(0,i.jsx)("ul",d()(d()({},Me),{},{style:Ee,className:O,children:g.map(function(A,w){var G=A.data.map(function(me,Re){return(0,i.jsx)(ae,{info:me,prefixCls:r,direction:E,className:v()(Se.item),style:on.item,menu:De,active:sn===me.key,onClick:b},me.key||"key-".concat(Re))});if(q){var Z;return(0,i.jsxs)("li",{children:[(0,i.jsx)(c.Provider,{value:{prefixCls:r},children:((Z=A.title)===null||Z===void 0?void 0:Z.call(A,A.name,{components:{GroupTitle:m}}))||(0,i.jsx)(m,{children:A.name},A.name)}),(0,i.jsx)("ul",{className:"".concat(r,"-list"),children:G})]},A.name||"key-".concat(w))}return G})}))]})},Pe=de},24963:function(Ke,F,e){"use strict";e.r(F),e.d(F,{Audios:function(){return pe},DeepThink:function(){return y},DeepThinking:function(){return y},Files:function(){return c},Footer:function(){return ie},FooterActions:function(){return C.p4},FooterCount:function(){return C.hw},Images:function(){return L},Interrupted:function(){return W},Text:function(){return X},Videos:function(){return xe}});var H=e(67294),d=e(14082),S=e(85893);function y(k){return(0,S.jsx)(d.Z,{defaultOpen:k.data.defaultOpen!==void 0?k.data.defaultOpen:!0,title:k.data.title,loading:k.data.loading,content:k.data.content,className:k.data.className,open:k.data.open,autoCloseOnFinish:k.data.autoCloseOnFinish,maxHeight:k.data.maxHeight})}var M=e(68400),P=e.n(M),j=e(23345),_=e(36417),I=e(9053),v=e(56044),h=e(6411),N,i=(0,I.vJ)(N||(N=P()([`
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
`])),function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls},function(k){return k.theme.borderRadius},function(k){return k.theme.colorWhite},function(k){return k.theme.motionDurationSlow},function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls});function c(k){var ue=(0,v.wv)(),V=ue.getPrefixCls,he=V("bubble-files");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(i,{}),(0,S.jsx)(j.Z,{className:he,children:k.data.map(function(Fe,We){var Xe={name:Fe.name||Fe.filename,size:Fe.size||Fe.bytes,url:Fe.url};return(0,S.jsxs)("div",{className:"".concat(he,"-file"),children:[(0,S.jsx)(_.Z.FileCard,{item:Xe}),Xe.url&&(0,S.jsx)("div",{className:"".concat(he,"-download"),onClick:function(){window.open(Xe.url,"_blank")},children:(0,S.jsx)(h.Z,{})})]},We)})})]})}var o=e(13811),m=e(55839),R,s=(0,I.vJ)(R||(R=P()([`
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
`])),function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls});function n(k){var ue=(0,v.wv)(),V=ue.getPrefixCls,he=V("bubble-image");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(s,{}),(0,S.jsx)("div",{className:"".concat(he),children:(0,S.jsx)(o.Z,{fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",src:k.url,width:56,height:56,preview:{transitionName:""}})})]})}function L(k){return(0,S.jsx)(m.ZP,{locale:{Image:{preview:""}},children:(0,S.jsx)(j.Z,{children:k.data.map(function(ue,V){return(0,S.jsx)(n,{url:ue.url},V)})})})}var u=e(97857),z=e.n(u),ne=e(82679);function X(k){var ue=k.data.msgStatus==="generating";return(0,S.jsx)(ne.Z,z()(z()({cursor:ue},k.data),{},{typing:k.data.msgStatus==="generating"?k.data.typing:!1}))}var C=e(67369);function ie(k){return(0,S.jsx)(C.ZP,z()({},k.data))}var J=e(10146);function W(k){return(0,S.jsx)(J.Z,z()({},k.data))}var Q=e(51794),ae;function xe(k){var ue=(0,v.wv)().getPrefixCls("bubble-video");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(p,{}),(0,S.jsx)(j.Z,{children:k.data.map(function(V,he){return(0,S.jsx)(Q.Z,{className:ue,src:V.src,poster:V.poster,controls:!0},he)})})]})}var p=(0,I.vJ)(ae||(ae=P()([`
.`,`-bubble-video {
  max-width: 256px;
  max-height: 144px;
  border-radius: 8px;
  border: 1px solid `,`;
  overflow: hidden;
}
`])),function(k){return k.theme.prefixCls},function(k){return k.theme.colorBorderSecondary});function pe(){return(0,S.jsx)("div",{children:"Audio"})}},55031:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return ne}});var H=e(56044),d=e(31382),S=e(55839),y=e(13811),M=e(33948),P=e(52253),j=e(56137),_=e(1948),I=e(61763),v=e(77900),h=e(40443),N=e(33119),i=e(4356),c=e(72816),o=e(77382),m=e(72167),R=e(74398),s=e(55094),n=e(61401),L=e(85893),u={Click:{name:"\u70B9\u51FB",icon:(0,L.jsx)(M.Z,{})},Swipe:{name:"\u6ED1\u52A8",icon:(0,L.jsx)(P.Z,{})},Type:{name:"\u8F93\u5165",icon:(0,L.jsx)(j.Z,{})},Back:{name:"\u8FD4\u56DE",icon:(0,L.jsx)(_.Z,{})},Home:{name:"\u4E3B\u9875",icon:(0,L.jsx)(I.Z,{})},Done:{name:"\u5B8C\u6210",icon:(0,L.jsx)(v.Z,{})},Wait:{name:"\u7B49\u5F85",icon:(0,L.jsx)(h.Z,{spin:!0})},click:{name:"\u70B9\u51FB",icon:(0,L.jsx)(M.Z,{})},"right click":{name:"\u53F3\u952E\u70B9\u51FB",icon:(0,L.jsx)(M.Z,{})},"open app":{name:"\u6253\u5F00\u5E94\u7528",icon:(0,L.jsx)(N.Z,{})},computer_double_click:{name:"\u53CC\u51FB",icon:(0,L.jsx)(i.Z,{})},hotkey:{name:"\u5FEB\u6377\u952E",icon:(0,L.jsx)(c.Z,{})},presskey:{name:"\u6309\u952E",icon:(0,L.jsx)(o.Z,{})},scroll:{name:"\u6EDA\u52A8",icon:(0,L.jsx)(P.Z,{})},drag:{name:"\u62D6\u62FD",icon:(0,L.jsx)(m.Z,{})},type_with_clear_enter_pos:{name:"\u8F93\u5165\u5E76\u6E05\u9664",icon:(0,L.jsx)(j.Z,{})},triple_click:{name:"\u4E09\u51FB",icon:(0,L.jsx)(R.Z,{})},drag_end:{name:"\u62D6\u62FD\u7ED3\u675F",icon:(0,L.jsx)(m.Z,{})},type:{name:"\u8F93\u5165",icon:(0,L.jsx)(j.Z,{})},hscroll:{name:"\u6C34\u5E73\u6EDA\u52A8",icon:(0,L.jsx)(s.Z,{})},done:{name:"\u5B8C\u6210",icon:(0,L.jsx)(v.Z,{})},wait:{name:"\u7B49\u5F85",icon:(0,L.jsx)(h.Z,{spin:!0})},call_user:{name:"\u547C\u53EB\u7528\u6237",icon:(0,L.jsx)(n.Z,{})}},z=u;function ne(X){var C,ie,J=(0,H.wv)(),W=J.getPrefixCls,Q=W("operate-card");return(0,L.jsxs)("div",{children:[(0,L.jsx)("div",{className:"".concat(Q,"-device-action-time"),children:X.time}),(0,L.jsx)(d.Z,{header:{className:"".concat(Q,"-device-action"),icon:(0,L.jsx)("div",{className:"".concat(Q,"-device-action-icon"),children:(C=z[X.action])===null||C===void 0?void 0:C.icon}),title:(0,L.jsxs)("div",{className:"".concat(Q,"-device-action-content"),children:[(0,L.jsxs)("div",{className:"".concat(Q,"-device-action-description"),children:[(0,L.jsx)("span",{children:X.actionName||((ie=z[X.action])===null||ie===void 0?void 0:ie.name)}),(0,L.jsx)("span",{children:X.description})]}),(0,L.jsx)("div",{className:"".concat(Q,"-device-action-image"),children:(0,L.jsx)(S.ZP,{locale:{Image:{preview:""}},children:(0,L.jsx)(y.Z,{src:X.image,alt:X.description,width:"100%",height:"100%"})})})]})}})]})}},10325:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return I}});var H=e(67294),d=e(68400),S=e.n(d),y=e(9053),M,P=(0,y.vJ)(M||(M=S()([`
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
`])),function(v){return v.theme.prefixCls},function(v){return v.theme.colorTextTertiary},function(v){return v.theme.prefixCls}),j=e(56044),_=e(85893);function I(v){var h=v.desc,N=h===void 0?"AI can also make mistakes, so please check carefully and use it with caution":h,i=(0,j.wv)(),c=i.getPrefixCls,o=c("disclaimer");return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(P,{}),(0,_.jsxs)("div",{className:o,style:v.style,children:[N,v.afterLink&&(0,_.jsx)("a",{className:"".concat(o,"-after-link"),href:v.afterLink.href,target:"_blank",children:v.afterLink.text})]})]})}},80115:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return d}});var H=e(85893);function d(){return(0,H.jsx)("iframe",{srcDoc:`<html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>`})}},28446:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return c}});var H=e(67294),d=e(68400),S=e.n(d),y=e(9053),M,P=(0,y.vJ)(M||(M=S()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.colorText},function(o){return o.theme.colorSuccess},function(o){return o.theme.prefixCls},function(o){return o.theme.colorBgBase},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls}),j=e(56044),_=e(55839),I=e(13811),v=e(89034),h=e(36374),N=e(85893),i=function(m){var R=(0,j.wv)(),s=R.getPrefixCls,n=s("image-generator"),L=m.block,u=m.skeletonText,z=m.width,ne=z===void 0?320:z,X=m.height,C=X===void 0?320:X,ie=m.src,J=m.loadingText,W=J===void 0?"Painting...":J,Q=m.doneText,ae=Q===void 0?"Paint Completed":Q,xe=m.skeleton||(0,N.jsxs)("div",{className:"".concat(n,"-default-skeleton"),style:{width:"100%",height:"100%"},children:[(0,N.jsx)("div",{className:"".concat(n,"-default-skeleton-bg"),children:(0,N.jsx)("div",{className:"".concat(n,"-default-skeleton-bg-animate")})}),(0,N.jsxs)("div",{className:"".concat(n,"-default-skeleton-content"),children:[(0,N.jsx)("img",{className:"".concat(n,"-default-skeleton-icon"),src:"https://img.alicdn.com/imgextra/i2/O1CN01M1X8yM1MWUC7u3Go5_!!6000000001442-54-tps-72-72.apng"}),u&&(0,N.jsx)("div",{className:"".concat(n,"-default-skeleton-text"),children:u})]})]}),p=!ie,pe=L?{aspectRatio:"".concat(ne,"/").concat(C)}:{width:ne,height:C};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(P,{}),(0,N.jsxs)("div",{className:n,children:[(0,N.jsxs)("div",{className:"".concat(n,"-text"),children:[p?(0,N.jsx)(h.Z,{}):(0,N.jsx)(v.Z,{className:"".concat(n,"-text-success")}),p?(0,N.jsx)("span",{style:{paddingLeft:20},children:W}):ae]}),(0,N.jsx)("div",{className:"".concat(n,"-wrapper"),style:pe,children:p?xe:(0,N.jsx)(_.ZP,{locale:{Image:{preview:""}},children:(0,N.jsx)(I.Z,{width:"100%",height:"100%",src:ie})})})]})]})},c=i},82679:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return Le}});var H=e(97857),d=e.n(H),S=e(67294),y=e(13769),M=e.n(y),P=e(55729),j=e(68400),_=e.n(j),I=e(9053),v,h=(0,I.vJ)(v||(v=_()([`
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
`])),function(g){return g.theme.prefixCls},function(g){return g.theme.colorBorder},function(g){return g.theme.colorFillQuaternary},function(g){return g.theme.colorText},function(g){return g.theme.borderRadiusSM},function(g){return g.theme.colorBorderSecondary},function(g){return g.theme.colorFillQuaternary},function(g){return g.theme.colorBorderSecondary},function(g){return g.theme.colorBorderSecondary},function(g){return g.theme.colorFillQuaternary},function(g){return g.theme.colorBorderSecondary},function(g){return g.theme.prefixCls},function(g){return g.theme.prefixCls},function(g){return g.theme.prefixCls},function(g){return g.theme.prefixCls},function(g){return g.theme.prefixCls});function N(g){var q=g.cursor,se=g.content,E=g.animation,K=(0,S.useMemo)(function(){return E?"":q?q==="dot"?" :dot:":q==="underline"?" :underline:":" :dot:":""},[q,se]);return se+K}var i=e(85893),c=["content","cursor","animation"];function o(g){var q=g.content,se=g.cursor,E=g.animation,K=M()(g,c),r=N({cursor:se,content:q,animation:E}),O=(0,S.useMemo)(function(){if(E)return{hasNextChunk:E&&se,enableAnimation:E&&se}},[se,E]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h,{}),(0,i.jsx)(P.Z,d()(d()({},K),{},{content:r,streaming:O}))]})}var m=e(5574),R=e.n(m),s=function(q){var se=q.content,E=q.typing,K=(0,S.useState)(0),r=R()(K,2),O=r[0],b=r[1],A=(0,S.useRef)();return(0,S.useEffect)(function(){return E?A.current=setInterval(function(){b(function(w){return w+1})},typeof E=="number"?E:5):A.current&&clearInterval(A.current),function(){return clearInterval(A.current)}},[E]),E?se.slice(0,O):se},n=s,L=e(56044),u=e(93967),z=e.n(u),ne=function(){return null},X=e(4146),C=e(12181),ie=e(9361),J=e(97634),W=e(89698),Q,ae,xe,p,pe=Object.keys(X.xO),k=function(q){if(!q)return 1;var se=/\n/g,E=q.match(se);return E?E.length:1},ue=function(q){if(!q)return{};var se=q.props,E=se.children,K=se.className;if(!E)return{};var r=Array.isArray(E)?E[0]:E,O=(K==null?void 0:K.replace("language-",""))||"txt",b=k(r)<=1&&r.length<=32;return{content:r,isSingleLine:b,lang:O}},V=function(q){var se=q.children,E=q.enableMermaid,K=ue(se),r=he(),O=r.styles,b=r.cx,A=(0,L.wv)(),w=A.getPrefixCls,G=A.theme,Z=(G==null?void 0:G.algorithm)===ie.Z.darkAlgorithm,me=(0,S.useState)(!1),Re=R()(me,2),Ie=Re[0],rn=Re[1],Qe=K.content,Ve=Qe===void 0?"":Qe,ce=K.lang,$e=ce===void 0?"":ce,fn=(0,S.useMemo)(function(){return Ve.replace(/ :(dot|underline):/g,"")},[Ve]);return fn?$e==="mermaid"?(0,i.jsx)(C.Z,{content:fn,width:"50%"}):pe.indexOf($e)===-1?(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:fn})}):(0,i.jsxs)("div",{className:O.container,children:[(0,i.jsxs)("div",{className:O.header,children:[(0,i.jsx)("div",{className:O.lang,children:$e}),Ie?(0,i.jsx)(J.Z,{className:O.copied}):(0,i.jsx)(W.Z,{className:O.icon,onClick:function(){navigator.clipboard.writeText(fn),rn(!0),setTimeout(function(){rn(!1)},1e3)}})]}),(0,i.jsx)(X.ZP,{value:fn,language:$e,theme:Z?"dark":"light",readOnly:!0})]}):null},he=(0,I.kc)(function(g){var q=g.css,se=g.token;return{copied:q(Q||(Q=_()([`
    color: `,`;
    cursor: pointer;
    font-size: 16px;
  `])),se.colorSuccess),container:q(ae||(ae=_()([`
    border: 1px solid `,`;
    border-radius: 6px;
    overflow: hidden;
    font-size: 0.8571428571428571em;
    margin: 1em 0;
  `])),se.colorBorderSecondary),header:q(xe||(xe=_()([`
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
  `])),se.colorFillSecondary),icon:q(p||(p=_()([`
    fontsize: 16px;
    cursor: pointer;
  `]))),lang:{textTransform:"capitalize"}}}),Fe=V;function We(g){return(0,i.jsx)("a",{href:g.src,target:"_blank",rel:"noopener noreferrer",children:g.src})}var Xe=e(55839),an=e(13811),tn=e(85576),B=e(36231),de=e(89102);function Pe(g){try{var q=g.src,se=new URL(q),E=se.pathname,K=E.endsWith(".mp4"),r=E.endsWith(".mp3")||E.endsWith(".wav");return r?(0,i.jsx)("audio",d()(d()({src:g.src},g),{},{controls:!0})):K?(0,i.jsx)(te,d()({src:g.src},g)):(0,i.jsx)(D,d()({src:g.src},g))}catch(O){return null}}function D(g){return(0,i.jsx)(Xe.ZP,{locale:{Image:{preview:""}},children:(0,i.jsx)(an.Z,d()({src:g.src},g))})}function te(g){var q=g.src,se=(0,S.useState)(!1),E=R()(se,2),K=E[0],r=E[1],O=(0,L.wv)(),b=O.getPrefixCls,A=b("markdown-video");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:A,children:(0,i.jsx)("div",{className:"".concat(A,"-poster"),onClick:function(){return r(!0)},children:(0,i.jsx)(B.Z,{className:"".concat(A,"-play")})})}),(0,i.jsx)(tn.Z,{closeIcon:(0,i.jsx)("a",{children:(0,i.jsx)(de.Z,{style:{fontSize:20}})}),centered:!0,transitionName:"",footer:null,width:500,title:"",styles:{content:{padding:0}},open:K,destroyOnHidden:!0,onCancel:function(){return r(!1)},children:(0,i.jsx)("video",{controls:!0,autoPlay:!0,style:{display:"block",width:"100%"},children:(0,i.jsx)("source",{src:q,type:"video/mp4"})})})]})}function $(g){var q=(0,L.wv)().getPrefixCls("markdown");return(0,i.jsx)("div",{className:q,style:{fontSize:g.baseFontSize,lineHeight:g.baseLineHeight},children:g.content})}var Ae=e(79427),Oe=e(55241),be,Ce=(0,I.vJ)(be||(be=_()([`
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
`])),function(g){return g.theme.prefixCls},function(g){return g.theme.colorTextSecondary},function(g){return g.theme.colorFillSecondary},function(g){return g.theme.motionEaseOut},function(g){return g.theme.colorWhite},function(g){return g.theme.colorPrimary});function qe(g){var q=(0,L.wv)(),se=q.getPrefixCls,E=se("markdown-citation"),K=g["data-text"],r=g["data-url"],O=g["data-title"],b=g["data-content"],A=b||O,w=(0,i.jsx)("sup",{className:E,children:K});return A&&(w=(0,i.jsx)(Oe.Z,{title:O,content:r?(0,i.jsx)("a",{href:r,rel:"noreferrer",target:"_blank",children:r}):b,children:w})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ce,{}),w]})}function De(g){var q,se=((q=g.citationsData[g["data-text"]])===null||q===void 0?void 0:q.render)||qe;return(0,i.jsx)(se,d()({},g))}var ze=[],on={};function Ye(g){var q=g.citations,se=q===void 0?ze:q,E=g.citationsMap,K=E===void 0?on:E,r=(0,S.useMemo)(function(){var w=d()({},K);return se.forEach(function(G,Z){var me=Z+1;w[me]=G}),[w,function(){return function(Z){return(0,i.jsx)(De,d()(d()({},Z),{},{citationsData:w}))}}()]},[se,K]),O=R()(r,2),b=O[0],A=O[1];return{CitationComponent:A,citationsData:b,citationsDataCount:Object.keys(b).length}}var Se=e(30861);function xn(g){return{name:"citation",level:"inline",tokenizer:function(se){var E=se.match(/^\[([^\]]+)\](?!\()/);if(E){var K=E[0].trim(),r=K==null?void 0:K.replace(/^\[([^\]]+)\]/g,"$1");if(g[r])return{type:"citation",raw:K,text:K==null?void 0:K.replace(/^\[([^\]]+)\]/g,"$1"),renderType:"component"}}},renderer:function(se){if(g&&Object.keys(g).length===0)return null;var E=se.text,K=g==null?void 0:g[E];return K?'<citation data-text="'.concat(E,'" data-url="').concat(K.url,'" data-title="').concat(K.title,'" data-content="').concat(K.content,'"></citation>'):se.raw}}}var t,Ee=(0,I.vJ)(t||(t=_()([`
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
`])),function(g){var q=g.theme;return q.colorPrimary});function Ne(){var g=(0,L.wv)(),q=g.getPrefixCls,se="markdown-cursor-underline";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ee,{}),(0,i.jsx)("span",{className:z()(se,q("markdown-cursor"))})]})}var Me=e(36374),ve=function(q){var se=q["data-type"];return se==="dot"?(0,i.jsx)(Me.Z,{}):se==="underline"?(0,i.jsx)(Ne,{}):null};function en(){var g={cursors:{dot:"dot",underline:"underline"}},q=Object.keys(g.cursors).map(function(K){return K.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|"),se=new RegExp(":(".concat(q,"):")),E=new RegExp("^".concat(se.source));return{name:"cursor",level:"inline",start:function(r){var O;return(O=r.match(se))===null||O===void 0?void 0:O.index},tokenizer:function(r,O){var b=E.exec(r);if(b){var A=b[1],w=g.cursors[A];if(w)return{type:"cursor",raw:b[0],name:A,cursor:w}}},renderer:function(r){var O='<custom-cursor data-type="'.concat(r.name,'"></custom-cursor>');return O}}}var sn={ALLOWED_TAGS:[]};function un(){try{return new RegExp("(?<=a)b"),!0}catch(g){return!1}}var nn=un(),Le=(0,S.memo)(function(g){var q=g.baseFontSize||14,se=g.baseLineHeight||1.7,E=n({content:g.content,typing:g.typing&&!g.animation}),K=(0,L.wv)().getPrefixCls("markdown"),r=g.raw,O=r===void 0?!1:r,b=g.allowHtml,A=b===void 0?!0:b,w=Ye({citations:g.citations,citationsMap:g.citationsMap}),G=w.citationsData,Z=w.citationsDataCount,me=w.CitationComponent,Re=(0,S.useMemo)(function(){return d()({pre:Fe,style:ne,script:ne,img:g.disableImage?We:Pe,citation:me,"custom-cursor":ve},g.components)},[g.disableImage,me,g.components]),Ie=(0,S.useMemo)(function(){return A?{ADD_TAGS:["custom-cursor","citation"]}:sn},[A]),rn=(0,S.useMemo)(function(){var ce=(0,Se.Z)();return ce.push(en()),Z>0&&ce.push(xn(G)),ce},[Z,G]),Qe=(0,S.useMemo)(function(){return{extensions:rn}},[rn]),Ve=(0,i.jsx)($,{content:E||"",baseFontSize:q,baseLineHeight:se});return O||!nn?Ve:(0,i.jsx)(Ae.SV,{fallback:Ve,children:(0,i.jsx)(o,{dompurifyConfig:Ie,cursor:g.cursor,animation:g.animation,components:Re,style:{fontSize:q,lineHeight:se},openLinksInNewTab:!0,className:z()(K,g.className),content:E||"",config:Qe})})})},36374:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return v}});var H=e(68400),d=e.n(H),S=e(56044),y=e(9053),M=e(93967),P=e.n(M),j=e(85893),_,I=(0,y.vJ)(_||(_=d()([`
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
`])),function(h){return h.theme.prefixCls},function(h){return h.theme.colorText},function(h){return h.theme.colorText});function v(){var h=(0,S.wv)(),N=h.getPrefixCls,i=N("markdown-cursor-dot");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(I,{}),(0,j.jsxs)("span",{className:P()(i,N("markdown-cursor")),children:[(0,j.jsx)("span",{style:{opacity:0,marginLeft:"-.75em"},children:"_"}),(0,j.jsx)("span",{className:"".concat(i,"-dot1")}),(0,j.jsx)("span",{className:"".concat(i,"-dot2")})]})]})}},12181:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return z}});var H=e(5574),d=e.n(H),S=e(15009),y=e.n(S),M=e(99289),P=e.n(M),j=e(68400),_=e.n(j),I=e(41469),v=e(2093),h=e(9361),N=e(96486),i=e.n(N),c=e(67294),o=e(56044),m=e(9053),R=e(85893),s,n=(0,m.vJ)(s||(s=_()([`
.`,`-mermaid {
  &-preview img {
    background: `,`;
  }
}
`])),function(ne){return ne.theme.prefixCls},function(ne){return ne.theme.colorBgBase}),L,u=function(){var ne=P()(y()().mark(function X(){return y()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:if(!L){ie.next=2;break}return ie.abrupt("return",L);case 2:return L=e.e(6637).then(e.bind(e,76637)).then(function(J){return J.default}),ie.abrupt("return",L);case 4:case"end":return ie.stop()}},X)}));return function(){return ne.apply(this,arguments)}}();function z(ne){var X=ne.content,C=ne.width,ie=ne.height,J=(0,o.wv)(),W=J.theme,Q=J.getPrefixCls,ae=Q("mermaid"),xe=(0,c.useMemo)(function(){return{theme:(W==null?void 0:W.algorithm)===h.Z.darkAlgorithm?"dark":"default",securityLevel:"loose",startOnLoad:!1}},[W==null?void 0:W.algorithm,W==null?void 0:W.token.fontFamily]),p=(0,c.useState)(""),pe=d()(p,2),k=pe[0],ue=pe[1],V=(0,c.useState)(),he=d()(V,2),Fe=he[0],We=he[1],Xe=(0,c.useId)(),an=(0,N.kebabCase)("mermaid-".concat(Xe));return(0,v.Z)(P()(y()().mark(function tn(){var B,de,Pe,D;return y()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.prev=0,$.next=3,u();case 3:if(B=$.sent,B){$.next=7;break}return ue(X),$.abrupt("return");case 7:return $.next=9,B.parse(X);case 9:if(de=$.sent,!de){$.next=19;break}return B.initialize(xe),$.next=14,B.render(an,X);case 14:Pe=$.sent,D=Pe.svg,ue(D),$.next=20;break;case 19:throw new Error("Invalid Mermaid syntax");case 20:$.next=26;break;case 22:$.prev=22,$.t0=$.catch(0),k||console.error("Mermaid parse error: ",$.t0),ue(k||"");case 26:case"end":return $.stop()}},tn,null,[[0,22]])})),[X,xe]),(0,c.useEffect)(function(){if(k){var tn=new Blob([k],{type:"image/svg+xml"}),B=URL.createObjectURL(tn);return We(B),function(){URL.revokeObjectURL(B)}}},[k]),Fe?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(n,{}),(0,R.jsx)(I.Z,{className:ae,src:Fe,alt:"mermaid",width:C,height:ie,preview:{rootClassName:"".concat(ae,"-preview")}})]}):null}},31382:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return L}});var H=e(9783),d=e.n(H),S=e(5574),y=e.n(S),M=e(67294),P=e(56044),j=e(68400),_=e.n(j),I=e(9053),v,h=(0,I.vJ)(v||(v=_()([`
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
`])),function(u){return u.theme.prefixCls},function(u){return u.theme.borderRadiusLG},function(u){return u.theme.colorFillTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.prefixCls},function(u){return u.theme.prefixCls},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorText},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorTextTertiary},function(u){return u.theme.colorText},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.colorBgBase},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorTextSecondary},function(u){return u.theme.colorText},function(u){return u.theme.colorFillTertiary},function(u){return u.theme.colorFillQuaternary},function(u){return u.theme.colorTextTertiary}),N=e(93967),i=e.n(N),c=e(28387),o=e(9838),m=e(64057),R=e(85893);function s(u){var z=(0,P.wv)(),ne=z.getPrefixCls,X=ne("operate-card");return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)("div",{className:"".concat(X,"-line-body"),children:u.children})})}function n(u){var z,ne=(0,P.wv)(),X=ne.getPrefixCls,C=X("operate-card"),ie=(0,M.useState)(((z=u.body)===null||z===void 0?void 0:z.defaultOpen)||!1),J=y()(ie,2),W=J[0],Q=J[1];return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(h,{}),(0,R.jsxs)("div",{className:C,children:[(0,R.jsxs)("div",{className:i()("".concat(C,"-header"),u.header.className,d()({},"".concat(C,"-header-has-body"),u.body)),onClick:function(){u.body&&Q(!W)},children:[(0,R.jsx)("div",{className:"".concat(C,"-header-icon"),children:u.header.icon}),typeof u.header.title=="string"?(0,R.jsx)("div",{className:"".concat(C,"-header-title"),children:u.header.title}):u.header.title,u.header.description&&(0,R.jsx)("div",{className:"".concat(C,"-header-description"),children:u.header.description}),u.body&&(0,R.jsx)(m.Z,{size:"small",bordered:!1,className:"".concat(C,"-header-arrow"),icon:W?(0,R.jsx)(c.Z,{}):(0,R.jsx)(o.Z,{})})]}),u.body&&W&&(0,R.jsx)("div",{className:"".concat(C,"-body"),children:u.body.children})]})]})}n.LineBody=s;var L=n},85762:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return R}});var H=e(5574),d=e.n(H),S=e(56044),y=e(31382),M=e(64057),P=e(28387),j=e(9838),_=e(48095),I=e(50104),v=e(55839),h=e(13811),N=e(86250),i=e(67294),c=e(85893);function o(s){var n=s.images,L=(0,S.wv)(),u=L.getPrefixCls,z=u("operate-card");return(0,c.jsx)(v.ZP,{locale:{Image:{preview:""}},children:(0,c.jsx)(h.Z.PreviewGroup,{children:n.map(function(ne,X){return(0,c.jsx)(h.Z,{src:ne,width:44,height:44},X)})})})}function m(s){var n=s.item,L=(0,i.useState)(!1),u=d()(L,2),z=u[0],ne=u[1],X=(0,S.wv)(),C=X.getPrefixCls,ie=C("operate-card");return(0,c.jsxs)("div",{className:"".concat(ie,"-rag-item"),children:[(0,c.jsxs)("div",{className:"".concat(ie,"-rag-item-title"),onClick:function(){ne(!z)},children:[(0,c.jsx)("span",{children:n.title}),(0,c.jsx)("span",{style:{flex:1}}),n.score||null,(0,c.jsx)(M.Z,{bordered:!1,size:"small",icon:z?(0,c.jsx)(P.Z,{}):(0,c.jsx)(j.Z,{})})]}),z&&(0,c.jsxs)("div",{className:"".concat(ie,"-rag-item-content"),children:[(0,c.jsx)("div",{className:"".concat(ie,"-rag-item-content-text"),children:n.content}),n.images&&(0,c.jsx)("div",{className:"".concat(ie,"-rag-item-images"),children:(0,c.jsx)(o,{images:n.images})}),n.link?(0,c.jsx)("a",{onClick:function(){window.open(n.link,"_blank")},className:"".concat(ie,"-rag-item-footer"),href:n.link,target:"_blank",children:n.footer}):(0,c.jsx)("div",{className:"".concat(ie,"-rag-item-footer"),children:n.footer})]})]})}function R(s){var n=s.title,L=n===void 0?"\u77E5\u8BC6\u5E93\u68C0\u7D22":n,u=s.subTitle,z=s.defaultOpen,ne=z===void 0?!0:z,X=s.placeholder,C=X===void 0?"\u672A\u67E5\u8BE2\u5230\u4E0E\u63D0\u95EE\u76F8\u5173\u77E5\u8BC6\u5E93":X,ie=s.query,J=s.queryTitle,W=J===void 0?"\u68C0\u7D22 Query\uFF1A":J,Q=s.images,ae=(0,S.wv)(),xe=ae.getPrefixCls,p=xe("operate-card"),pe=s.list.length?(0,c.jsx)(y.Z.LineBody,{children:s.list.map(function(k,ue){return(0,c.jsx)(m,{item:k},ue)})}):(0,c.jsxs)(N.Z,{align:"center",justify:"center",gap:8,className:"".concat(p,"-rag-empty-placeholder"),children:[(0,c.jsx)(_.Z,{}),(0,c.jsx)("span",{children:C})]});return(0,c.jsx)(y.Z,{header:{icon:(0,c.jsx)(I.Z,{}),title:L,description:u},body:{defaultOpen:ne,children:(0,c.jsxs)(c.Fragment,{children:[ie?(0,c.jsxs)("div",{className:"".concat(p,"-rag-query"),children:[(0,c.jsx)("span",{className:"".concat(p,"-rag-query-title"),children:W}),ie]}):null,Q!=null&&Q.length?(0,c.jsx)("div",{className:"".concat(p,"-rag-query-images"),children:(0,c.jsx)(o,{images:Q})}):null,pe]})}})}},79323:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return P}});var H=e(56044),d=e(31382),S=e(40443),y=e(33593),M=e(85893);function P(j){var _=(0,H.wv)(),I=_.getPrefixCls,v=j.defaultOpen,h=v===void 0?!0:v,N=j.loading,i=N===void 0?!1:N,c=I("operate-card");return(0,M.jsx)(d.Z,{header:{icon:i?(0,M.jsx)(S.Z,{spin:!0}):(0,M.jsx)(y.Z,{}),title:j.title,description:j.subTitle},body:{defaultOpen:h,children:(0,M.jsx)(d.Z.LineBody,{children:(0,M.jsx)("div",{className:"".concat(c,"-thinking"),children:j.content})})}})}},6874:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return h}});var H=e(9783),d=e.n(H),S=e(56044),y=e(31382),M=e(41775),P=e(77900),j=e(40443),_=e(93967),I=e.n(_),v=e(85893);function h(N){var i=(0,S.wv)(),c=i.getPrefixCls,o=c("operate-card"),m=N.title,R=m===void 0?"Task List":m,s=N.list.filter(function(n){return n.status==="done"}).length;return(0,v.jsx)(y.Z,{header:{icon:(0,v.jsx)(M.Z,{}),title:R,description:"\xB7 ".concat(s?s+" of ":""," ").concat(N.list.length)},body:{defaultOpen:N.defaultOpen,children:(0,v.jsx)("div",{className:"".concat(o,"-todo-list"),children:N.list.map(function(n){return(0,v.jsxs)("div",{className:I()(d()(d()({},"".concat(o,"-todo-list-item"),!0),"".concat(o,"-todo-list-item-").concat(n.status),!0)),children:[(0,v.jsx)("div",{className:"".concat(o,"-todo-list-item-icon"),children:{done:(0,v.jsx)(P.Z,{}),todo:(0,v.jsx)(P.Z,{}),running:(0,v.jsx)(j.Z,{spin:!0})}[n.status]}),(0,v.jsx)("div",{className:"".concat(o,"-todo-list-item-title"),style:{textDecoration:n.status==="done"?"line-through":"none"},children:n.title})]},n.title)})})}})}},85786:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return o}});var H=e(5574),d=e.n(H),S=e(56044),y=e(31382),M=e(97634),P=e(89698),j=e(40443),_=e(78598),I=e(33811),v=e(64057),h=e(4146),N=e(67294),i=e(85893);function c(m){var R=(0,S.wv)(),s=R.getPrefixCls,n=s("operate-card"),L=typeof m.content=="string"?m.content:JSON.stringify(m.content),u=(0,N.useState)(!1),z=d()(u,2),ne=z[0],X=z[1],C=(0,N.useRef)(null);return(0,i.jsx)("div",{className:"".concat(n,"-tool-call-block"),children:(0,i.jsx)(I.Z,{title:m.title,extra:(0,i.jsx)(v.Z,{size:"small",style:{marginRight:"-6px"},icon:ne?(0,i.jsx)(M.Z,{}):(0,i.jsx)(P.Z,{}),bordered:!1,onClick:function(){clearTimeout(C.current),navigator.clipboard.writeText(L),X(!0),C.current=setTimeout(function(){X(!1)},2e3)}}),children:(0,i.jsx)(h.ZP,{language:"json",value:L,readOnly:!0})})})}function o(m){var R=m.title,s=R===void 0?"Call Tool":R,n=m.subTitle,L=m.defaultOpen,u=L===void 0?!0:L,z=m.loading,ne=z===void 0?!1:z;return(0,i.jsx)(y.Z,{header:{icon:ne?(0,i.jsx)(j.Z,{spin:!0}):(0,i.jsx)(_.Z,{}),title:s,description:n},body:{defaultOpen:u,children:(0,i.jsxs)(y.Z.LineBody,{children:[(0,i.jsx)(c,{title:"Input",content:m.input}),(0,i.jsx)(c,{title:"Output",content:m.output})]})}})}},69610:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return I}});var H=e(9783),d=e.n(H),S=e(56044),y=e(31382),M=e(9229),P=e(93967),j=e.n(P),_=e(85893);function I(v){var h=(0,S.wv)(),N=h.getPrefixCls,i=N("operate-card"),c=v.title,o=c===void 0?"\u8054\u7F51\u641C\u7D22":c,m=v.subTitle;return(0,_.jsx)(y.Z,{header:{icon:(0,_.jsx)(M.Z,{}),title:o,description:m},body:{defaultOpen:!0,children:(0,_.jsx)(y.Z.LineBody,{children:v.list.map(function(R){return(0,_.jsxs)("div",{className:j()(d()({},"".concat(i,"-web-search-item"),!0)),onClick:function(){window.open(R.link,"_blank")},children:[(0,_.jsx)("img",{className:"".concat(i,"-web-search-item-icon"),src:R.icon,alt:R.title}),(0,_.jsx)("div",{className:"".concat(i,"-web-search-item-title"),children:R.title}),R.subTitle&&(0,_.jsx)("div",{className:"".concat(i,"-web-search-item-subTitle"),children:R.subTitle})]},R.title)})})}})}},56809:function(Ke,F,e){"use strict";e.d(F,{B4:function(){return d.Z},BI:function(){return H.Z},Sn:function(){return M.Z},fz:function(){return y.Z},x4:function(){return S.Z}});var H=e(79323),d=e(6874),S=e(85786),y=e(69610),M=e(85762)},83962:function(Ke,F,e){"use strict";e.d(F,{HJ:function(){return _},NR:function(){return P},xy:function(){return j}});var H=e(97857),d=e.n(H),S=e(67294),y=e(24963),M=e(85893),P=(0,S.createContext)(void 0),j=function(v){return(0,M.jsx)(P.Provider,{value:v.cardConfig,children:v.children})},_=function(){var v=S.useContext(P);return S.useMemo(function(){return d()(d()({},y),v)},[v])}},92049:function(Ke,F,e){"use strict";e.d(F,{R:function(){return y},bN:function(){return M}});var H=e(67294),d=e(85893),S=(0,H.createContext)(void 0),y=function(j){return(0,d.jsx)(S.Provider,{value:j,children:j.children})},M=function(){var j=H.useContext(S);return j||{}}},56044:function(Ke,F,e){"use strict";e.d(F,{wv:function(){return j}});var H=e(21766),d=e(67294),S=e(83962),y=e(92049),M=e(85893),P=function(I){var v=I.children,h=I.cardConfig,N=I.markdown;return(0,M.jsx)(y.R,{markdown:N,children:(0,M.jsx)(S.xy,{cardConfig:h,children:v})})};function j(){var _=d.useContext(H.ZP.ConfigContext);return _}F.ZP=P},44294:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return i},a:function(){return v}});var H=e(97857),d=e.n(H),S=e(24772),y=e(83622),M=e(93967),P=e.n(M),j=e(29372),_=e(67294),I=e(85893),v=_.createContext({}),h=function(){return{height:0}},N=function(o){return{height:o.scrollHeight}};function i(c){var o=c.title,m=c.onOpenChange,R=c.open,s=c.children,n=c.className,L=c.style,u=c.classNames,z=u===void 0?{}:u,ne=c.styles,X=ne===void 0?{}:ne,C=c.closable,ie=c.forceRender,J=_.useContext(v),W=J.prefixCls,Q="".concat(W,"-header");return(0,I.jsx)(j.ZP,{motionEnter:!0,motionLeave:!0,motionName:"".concat(Q,"-motion"),leavedClassName:"".concat(Q,"-motion-hidden"),onEnterStart:h,onEnterActive:N,onLeaveStart:N,onLeaveActive:h,visible:R,forceRender:ie,children:function(xe){var p=xe.className,pe=xe.style;return(0,I.jsxs)("div",{className:P()(Q,p,n),style:d()(d()({},pe),L),children:[(C!==!1||o)&&(0,I.jsxs)("div",{className:P()("".concat(Q,"-header"),z.header),style:d()({},X.header),children:[(0,I.jsx)("div",{className:"".concat(Q,"-title"),children:o}),C!==!1&&(0,I.jsx)("div",{className:"".concat(Q,"-close"),children:(0,I.jsx)(y.ZP,{type:"text",icon:(0,I.jsx)(S.Z,{}),size:"small",onClick:function(){m==null||m(!R)}})})]}),s&&(0,I.jsx)("div",{className:P()("".concat(Q,"-content"),z.content),style:d()({},X.content),children:s})]})}})}},93164:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return K}});var H=e(19632),d=e.n(H),S=e(97857),y=e.n(S),M=e(9783),P=e.n(M),j=e(5574),_=e.n(j),I=e(13769),v=e.n(I),h=e(48045),N=e(86250),i=e(93967),c=e.n(i),o=e(56790),m=e(30339),R=e(94787),s=e(67294),n=e(11154),L=e(83204);function u(r,O){return(0,s.useImperativeHandle)(r,function(){var b=O(),A=b.nativeElement;return new Proxy(A,{get:function(G,Z){return b[Z]?b[Z]:Reflect.get(G,Z)}})})}var z=e(56044),ne=e(44294),X=e(64057),C=e(85893),ie=["className","action","onClick"],J=s.createContext(null);function W(r){var O=r.className,b=r.action,A=r.onClick,w=v()(r,ie),G=s.useContext(J),Z=G.prefixCls,me=G.disabled,Re=G[b],Ie=me||w.disabled||G["".concat(b,"Disabled")]||!1;return(0,C.jsx)(X.Z,y()(y()({bordered:!1,disabled:Ie},w),{},{onClick:function(Qe){Ie||(Re&&Re(),A&&A(Qe))},className:c()(Z,O,P()({},"".concat(Z,"-disabled"),Ie))}))}var Q=s.forwardRef(W),ae=e(69291);function xe(r,O){return(0,C.jsx)(Q,y()(y()({icon:(0,C.jsx)(ae.Z,{})},r),{},{action:"onClear",ref:O}))}var p=s.forwardRef(xe),pe=(0,s.memo)(function(r){var O=r.className;return(0,C.jsxs)("svg",{color:"currentColor",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:O,children:[(0,C.jsx)("title",{children:"Stop Loading"}),(0,C.jsx)("rect",{fill:"currentColor",height:"250",rx:"24",ry:"24",width:"250",x:"375",y:"375"})]})}),k=pe;function ue(r,O){var b=s.useContext(J),A=b.prefixCls,w=r.className;return(0,C.jsx)(Q,y()(y()({icon:(0,C.jsx)(k,{className:"".concat(A,"-loading-icon")}),type:"primary",variant:"text"},r),{},{className:c()(w,"".concat(A,"-loading-button")),action:"onCancel",ref:O}))}var V=s.forwardRef(ue),he=e(43103);function Fe(r,O){return(0,C.jsx)(Q,y()(y()({icon:(0,C.jsx)(he.Z,{}),type:"primary"},r),{},{action:"onSend",ref:O}))}var We=s.forwardRef(Fe),Xe=e(36763),an=e(21474),tn=1e3,B=4,de=140,Pe=de/2,D=250,te=500,$=.8;function Ae(r){var O=r.className;return(0,C.jsxs)("svg",{color:"currentColor",viewBox:"0 0 ".concat(tn," ").concat(tn),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:O,children:[(0,C.jsx)("title",{children:"Speech Recording"}),Array.from({length:B}).map(function(b,A){var w=(tn-de*B)/(B-1),G=A*(w+de),Z=tn/2-D/2,me=tn/2-te/2;return(0,C.jsxs)("rect",{fill:"currentColor",rx:Pe,ry:Pe,height:D,width:de,x:G,y:Z,children:[(0,C.jsx)("animate",{attributeName:"height",values:"".concat(D,"; ").concat(te,"; ").concat(D),keyTimes:"0; 0.5; 1",dur:"".concat($,"s"),begin:"".concat($/B*A,"s"),repeatCount:"indefinite"}),(0,C.jsx)("animate",{attributeName:"y",values:"".concat(Z,"; ").concat(me,"; ").concat(Z),keyTimes:"0; 0.5; 1",dur:"".concat($,"s"),begin:"".concat($/B*A,"s"),repeatCount:"indefinite"})]},A)})]})}function Oe(r,O){var b=s.useContext(J),A=b.speechRecording,w=b.onSpeechDisabled,G=b.prefixCls,Z=null;return A?Z=(0,C.jsx)(Ae,{className:"".concat(G,"-recording-icon")}):w?Z=(0,C.jsx)(Xe.Z,{}):Z=(0,C.jsx)(an.Z,{}),(0,C.jsx)(Q,y()(y()({icon:Z,variant:"text"},r),{},{action:"onSpeech",ref:O}))}var be=s.forwardRef(Oe),Ce=e(68400),qe=e.n(Ce),De=e(9053),ze,on=(0,De.vJ)(ze||(ze=qe()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.colorBgBase},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.motionDurationSlow},function(r){return r.theme.lineWidth},function(r){return r.theme.colorPrimaryHover},function(r){return r.theme.lineWidth},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorBgContainerDisabled},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.paddingXS},function(r){return r.theme.colorTextTertiary},function(r){return"var(--".concat(r.theme.prefixCls,"-color-fill-disable)")},function(r){return r.theme.controlHeight},function(r){return r.theme.controlHeight},function(r){return r.theme.prefixCls}),Ye=on,Se=e(52677),xn=e.n(Se),t;!t&&typeof window!="undefined"&&(t=window.SpeechRecognition||window.webkitSpeechRecognition);function Ee(r,O){var b=(0,o.zX)(r),A=s.useMemo(function(){return xn()(O)==="object"?[O.recording,O.onRecordingChange,typeof O.recording=="boolean"]:[void 0,void 0,!1]},[O]),w=_()(A,3),G=w[0],Z=w[1],me=w[2],Re=s.useState(null),Ie=_()(Re,2),rn=Ie[0],Qe=Ie[1];s.useEffect(function(){if(typeof navigator!="undefined"&&"permissions"in navigator){var ke=null;return navigator.permissions.query({name:"microphone"}).then(function(Ue){Qe(Ue.state),Ue.onchange=function(){Qe(this.state)},ke=Ue}),function(){ke&&(ke.onchange=null)}}},[]);var Ve=t&&rn!=="denied",ce=s.useRef(null),$e=(0,o.C8)(!1,{value:G}),fn=_()($e,2),bn=fn[0],Pn=fn[1],On=s.useRef(!1),Sn=function(){if(Ve&&!ce.current){var Ue=new t;Ue.onstart=function(){Pn(!0)},Ue.onend=function(){Pn(!1)},Ue.onresult=function(dn){if(!On.current){var mn,_n=(mn=dn.results)===null||mn===void 0||(mn=mn[0])===null||mn===void 0||(mn=mn[0])===null||mn===void 0?void 0:mn.transcript;b(_n)}On.current=!1},ce.current=Ue}},Cn=(0,o.zX)(function(ke){ke&&!bn||(On.current=ke,me?Z==null||Z(!bn):(Sn(),ce.current&&(bn?(ce.current.stop(),Z==null||Z(!1)):(ce.current.start(),Z==null||Z(!0)))))});return[Ve,Cn,bn]}var Ne=e(89102),Me=e(67055),ve,en=(0,De.vJ)(ve||(ve=qe()([`
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

`])),function(r){return r.theme.prefixCls},function(r){return r.theme.borderRadius},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.colorTextSecondary},function(r){return r.theme.colorPrimary},function(r){return r.theme.colorPrimary},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorFillTertiary},function(r){return r.theme.colorTextSecondary});function sn(r){var O=(0,z.wv)(),b=O.getPrefixCls,A=b("sender-mode-select"),w=r.value,G=r.onChange,Z=(0,s.useMemo)(function(){var Re=r.options.find(function(Ie){return Ie.value===w})||{};return Re},[r.value]),me=(0,C.jsx)(Ne.Z,{onClick:function(){return G(void 0)},style:{cursor:"pointer",fontSize:20}});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(en,{}),(0,C.jsxs)("div",{className:A,style:r.style,children:[(0,C.jsx)("div",{className:"".concat(A,"-options ").concat(w?"".concat(A,"-hide"):""),children:r.options.map(function(Re){var Ie=(0,C.jsx)(un,y()({onClick:function(){return G(Re.value)},className:"".concat(A,"-option")},Re),Re.value);return Ie})}),(0,C.jsx)("div",{className:"".concat(A,"-display ").concat(w?"":"".concat(A,"-hide")),children:(0,C.jsxs)("div",{className:"".concat(A,"-display-flex"),children:[(0,C.jsx)(un,y()(y()({},Z),{},{label:(Z==null?void 0:Z.selectedLabel)||(Z==null?void 0:Z.label),className:"".concat(A,"-display-label")})),r.desc&&(0,C.jsx)("div",{className:"".concat(A,"-display-desc"),children:r.desc}),r.closeTip?(0,C.jsx)(Me.Z,{title:r.closeTip,children:me}):me]})})]})]})}function un(r){var O=(0,C.jsxs)("div",{className:r.className,onClick:r.onClick,children:[r.icon,r.label]});return r.tooltip?(0,C.jsx)(Me.Z,{title:r.tooltip,placement:"topLeft",children:O}):O}var nn=e(85441),Le=e(32485),g=["styles","classNames","className","rootClassName","style","defaultValue","value","readOnly","enableFocusExpand","sendDisabled","submitType","onSubmit","loading","onCancel","onChange","onFocus","onBlur","actions","onKeyPress","onKeyDown","disabled","header","onPaste","allowSpeech","onPasteFile","components","initialRows","scalable"];function q(r,O,b){return(0,R.Z)(r,O)||b}var se=s.forwardRef(function(r,O){var b=r,A=b.styles,w=A===void 0?{}:A,G=b.classNames,Z=G===void 0?{}:G,me=b.className,Re=b.rootClassName,Ie=b.style,rn=b.defaultValue,Qe=b.value,Ve=b.readOnly,ce=b.enableFocusExpand,$e=ce===void 0?!1:ce,fn=b.sendDisabled,bn=fn===void 0?!1:fn,Pn=b.submitType,On=Pn===void 0?"enter":Pn,Sn=b.onSubmit,Cn=b.loading,ke=b.onCancel,Ue=b.onChange,dn=b.onFocus,mn=b.onBlur,_n=b.actions,Wn=b.onKeyPress,Gn=b.onKeyDown,wn=b.disabled,$n=b.header,Nn=b.onPaste,zn=b.allowSpeech,Je=b.onPasteFile,Be=b.components,hn=b.initialRows,vn=hn===void 0?2:hn,Jn=b.scalable,yn=v()(b,g),An=Jn,Qn=(0,s.useState)(An?!1:void 0),Rn=_()(Qn,2),kn=Rn[0],jn=Rn[1],Zn=(0,s.useState)(!1),Kn=_()(Zn,2),Ln=Kn[0],Bn=Kn[1],Hn=s.useMemo(function(){return kn?{maxRows:10,minRows:10}:{maxRows:10,minRows:vn}},[An,kn]),Mn=(0,z.wv)(),gn=Mn.direction,Tn=Mn.getPrefixCls,En=Tn("sender"),In=s.useRef(null),Vn=s.useRef(null);u(O,function(){var cn,ln;return{nativeElement:In.current,focus:(cn=Vn.current)===null||cn===void 0?void 0:cn.focus,blur:(ln=Vn.current)===null||ln===void 0?void 0:ln.blur}}),(0,n.Z)(In,{onFocus:function(ln){Bn(!0),dn==null||dn()},onBlur:function(){In.current&&!In.current.contains(document.activeElement)&&(Bn(!1),mn==null||mn())}}),(0,L.Z)("click",function(cn){Bn(!0),dn==null||dn()},{target:In});var tt="".concat(En,"-input"),at=c()(En,me,Re,P()(P()(P()(P()({},"".concat(En,"-rtl"),gn==="rtl"),"".concat(En,"-disabled"),wn),"".concat(En,"-focus"),Ln&&$e),"".concat(En,"-blur"),!Ln&&$e)),st="".concat(En,"-actions-btn"),qn="".concat(En,"-actions-list"),ot=(0,o.C8)(rn||"",{value:Qe}),rt=_()(ot,2),Fn=rt[0],it=rt[1],et=function(ln,Ge){it(ln),Ue&&Ue(ln,Ge)},a=Ee(function(cn){et("".concat(Fn," ").concat(cn))},zn),x=_()(a,3),l=x[0],f=x[1],T=x[2],U=q(Be,["input"],h.Z.TextArea),fe=(0,m.Z)(yn,{attr:!0,aria:!0,data:!0}),ee=y()(y()({},fe),{},{ref:Vn}),re=function(){!Ze.onSendDisabled&&Sn&&!Cn&&Sn(Fn)},Y=function(){et("")},le=s.useRef(!1),oe=function(){le.current=!0},je=function(){le.current=!1},ge=function(ln){var Ge=ln.key==="Enter"&&!le.current;switch(On){case"enter":Ge&&!ln.shiftKey&&(ln.preventDefault(),re());break;case"shiftEnter":Ge&&ln.shiftKey&&(ln.preventDefault(),re());break}Wn&&Wn(ln)},Te=function(ln){var Ge;if(!Je){Nn==null||Nn(ln);return}var pn=Array.from(((Ge=ln.clipboardData)===null||Ge===void 0?void 0:Ge.files)||[]);if(pn.length===0){var Un,Xn=Array.from(((Un=ln.clipboardData)===null||Un===void 0?void 0:Un.items)||[]);pn=Xn.filter(function(Dn){return Dn.kind==="file"}).map(function(Dn){return Dn.getAsFile()}).filter(function(Dn){return Dn!==null})}pn.length>0?(pn.forEach(function(Dn){return Je(Dn)}),ln.preventDefault()):Nn==null||Nn(ln)},He=function(ln){var Ge,pn;ln.target!==((Ge=In.current)===null||Ge===void 0?void 0:Ge.querySelector(".".concat(tt)))&&ln.preventDefault(),(pn=Vn.current)===null||pn===void 0||pn.focus()},we=s.useMemo(function(){var cn=Array.isArray(r.prefix)?d()(r.prefix):[r.prefix];return An&&cn.push((0,C.jsx)(X.Z,{onClick:function(){return jn(!kn)},bordered:!1,icon:kn?(0,C.jsx)(nn.Z,{}):(0,C.jsx)(Le.Z,{})},"zoom")),cn},[r.prefix,An,kn,zn]),ye=(0,C.jsx)(N.Z,{className:"".concat(qn,"-presets"),children:Cn?(0,C.jsx)(V,{}):(0,C.jsx)(We,{})});typeof _n=="function"?ye=_n(ye,{components:{SendButton:We,ClearButton:p,LoadingButton:V}}):_n&&(ye=_n);var Ze={prefixCls:st,onSend:re,onSendDisabled:!Fn||!Fn.trim()||bn,onClear:Y,onClearDisabled:!Fn,onCancel:ke,onCancelDisabled:!Cn,onSpeech:function(){return f(!1)},onSpeechDisabled:!l,speechRecording:T,disabled:wn};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Ye,{}),(0,C.jsxs)("div",{ref:In,className:at,style:Ie,children:[$n&&(0,C.jsx)(ne.a.Provider,{value:{prefixCls:En,focus:Ln,enableFocusExpand:$e},children:$n}),(0,C.jsxs)("div",{className:"".concat(En,"-content"),children:[(0,C.jsx)(U,y()(y()({},ee),{},{disabled:wn,style:w.input,className:c()(tt,Z.input),autoSize:Hn,value:Fn.slice(0,r.maxLength||Number.MAX_SAFE_INTEGER),onChange:function(ln){et(ln.target.value,ln),f(!0)},onPressEnter:ge,onCompositionStart:oe,onCompositionEnd:je,onKeyDown:Gn,onPaste:Te,variant:"borderless",readOnly:Ve})),(0,C.jsxs)("div",{className:"".concat(En,"-content-bottom"),children:[we.length>0&&(0,C.jsx)("div",{className:c()("".concat(En,"-prefix"),Z.prefix),style:w.prefix,children:(0,C.jsxs)(N.Z,{gap:8,children:[zn&&(0,C.jsx)(J.Provider,{value:Ze,children:(0,C.jsx)(be,{})}),we]})}),(0,C.jsxs)("div",{className:c()(qn,Z.actions),style:w.actions,children:[r.maxLength?(0,C.jsxs)("div",{className:"".concat(qn,"-length"),children:[Fn.length,"/",r.maxLength]}):null,(0,C.jsx)(J.Provider,{value:Ze,children:ye})]})]})]})]})]})}),E=se;E.Header=ne.Z,E.ModeSelect=sn;var K=E},70770:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return R}});var H=e(89034),d=e(36674),S=e(9343),y=e(48095),M=e(97634),P=e(56044),j=e(68400),_=e.n(j),I=e(9053),v,h=(0,I.vJ)(v||(v=_()([`
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
`])),function(s){return s.theme.prefixCls},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorSuccessBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorSuccess},function(s){return s.theme.colorErrorBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorError},function(s){return s.theme.colorWarningBg},function(s){return s.theme.prefixCls},function(s){return s.theme.colorWarning},function(s){return s.theme.colorFillTertiary},function(s){return s.theme.prefixCls},function(s){return s.theme.colorInfo},function(s){return s.theme.colorText},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorBgBase},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorBgBase},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorTextTertiary},function(s){return s.theme.colorText}),N=e(93967),i=e.n(N),c=e(21403),o=e(85893);function m(s){var n=(0,P.wv)(),L=n.getPrefixCls,u=L("status-card"),z=s.icon||{success:(0,o.jsx)(H.Z,{}),error:(0,o.jsx)(d.Z,{}),warning:(0,o.jsx)(S.Z,{}),info:(0,o.jsx)(y.Z,{})}[s.status];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h,{}),(0,o.jsxs)("div",{className:i()(u,"".concat(u,"-").concat(s.status)),children:[(0,o.jsxs)("div",{className:"".concat(u,"-header"),children:[(0,o.jsxs)("div",{className:"".concat(u,"-header-top"),children:[(0,o.jsx)("div",{className:"".concat(u,"-header-icon"),children:z}),(0,o.jsx)("div",{className:"".concat(u,"-header-title"),children:s.title})]}),s.description&&(0,o.jsx)("div",{className:"".concat(u,"-header-description"),children:s.description})]}),s.children&&(0,o.jsx)("div",{className:"".concat(u,"-body"),children:s.children})]})]})}m.HITL=function(s){var n=s.title,L=n===void 0?"\u9700\u8981\u7528\u6237\u4EBA\u5DE5\u5E72\u9884":n,u=s.description,z=s.waitButtonText,ne=z===void 0?"\u6211\u5DF2\u5B8C\u6210\uFF0C\u7EE7\u7EED\u4EFB\u52A1":z,X=s.doneButtonText,C=X===void 0?"\u7528\u6237\u5DF2\u786E\u8BA4":X,ie=(0,P.wv)(),J=ie.getPrefixCls,W=J("status-card"),Q=s.done?(0,o.jsx)(c.Z,{onClick:s.onDone,type:"primary",disabled:!0,icon:(0,o.jsx)(M.Z,{}),children:C}):(0,o.jsx)(c.Z,{onClick:s.onDone,type:"primary",children:ne});return(0,o.jsx)(m,{status:"info",title:L,children:(0,o.jsxs)("div",{className:"".concat(W,"-HITL"),children:[u&&(0,o.jsx)("div",{className:"".concat(W,"-HITL-desc"),children:u}),(0,o.jsx)("div",{className:"".concat(W,"-HITL-button"),children:Q})]})})},m.Statistic=function(s){var n=(0,P.wv)(),L=n.getPrefixCls,u=L("status-card");return(0,o.jsx)("div",{className:"".concat(u,"-statistic"),children:s.values.map(function(z){return(0,o.jsxs)("div",{className:"".concat(u,"-statistic-item"),children:[(0,o.jsx)("div",{className:"".concat(u,"-statistic-item-title"),children:z.title}),(0,o.jsx)("div",{className:"".concat(u,"-statistic-item-value"),children:z.value})]})})})};var R=m},7354:function(Ke,F,e){"use strict";var H=e(15009),d=e.n(H),S=e(9783),y=e.n(S),M=e(97857),P=e.n(M),j=e(77262),_=e.n(j),I=e(93938),v=e.n(I),h=`

`,N=`
`,i=":",c=function(n){return(n!=null?n:"").trim()!==""};function o(){var s="";return new TransformStream({transform:function(L,u){s+=L;var z=s.split(h);z.slice(0,-1).forEach(function(ne){c(ne)&&u.enqueue(ne)}),s=z[z.length-1]},flush:function(L){c(s)&&L.enqueue(s)}})}function m(){return new TransformStream({transform:function(n,L){var u=n.split(N),z=u.reduce(function(ne,X){var C=X.indexOf(i);if(C===-1)throw new Error('The key-value separator "'.concat(i,'" is not found in the sse line chunk!'));var ie=X.slice(0,C);if(!c(ie))return ne;var J=X.slice(C+1);return P()(P()({},ne),{},y()({},ie,J))},{});Object.keys(z).length!==0&&L.enqueue(z)}})}function R(s,n){var L=s.readableStream,u=s.transformStream;if(!(L instanceof ReadableStream))throw new Error("The options.readableStream must be an instance of ReadableStream.");var z=new TextDecoderStream,ne=u?L.pipeThrough(z).pipeThrough(u):L.pipeThrough(z).pipeThrough(o()).pipeThrough(m());return ne[Symbol.asyncIterator]=v()(d()().mark(function X(){var C,ie,J,W;return d()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:C=this.getReader();case 1:return ae.next=4,_()(C.read());case 4:if(ie=ae.sent,J=ie.done,W=ie.value,!J){ae.next=9;break}return ae.abrupt("break",15);case 9:if(W){ae.next=11;break}return ae.abrupt("continue",1);case 11:return ae.next=13,n!=null&&n.openaiCompatible?P()(P()({},W),{},{data:W.data.slice(1)}):W;case 13:ae.next=1;break;case 15:case"end":return ae.stop()}},X,this)})),ne}F.Z=R},32116:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return H}});function H(d){return new Promise(function(S){return setTimeout(S,d)})}},66366:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return d}});var H={i8:"1.1.45"},d=H.i8},57657:function(Ke,F,e){"use strict";e.r(F);var H=e(5574),d=e.n(H),S=e(9053),y=e(67294),M=e(85893),P=function(){var I=(0,y.useState)({x:0,y:0}),v=d()(I,2),h=v[0],N=v[1],i=(0,y.useState)(!1),c=d()(i,2),o=c[0],m=c[1],R=(0,y.useRef)(null),s=j(),n=s.styles,L=s.cx;(0,y.useEffect)(function(){var J=function(Q){if(R.current){var ae=R.current.getBoundingClientRect();N({x:Q.clientX-ae.left,y:Q.clientY-ae.top})}};return window.addEventListener("mousemove",J),function(){return window.removeEventListener("mousemove",J)}},[]),(0,y.useEffect)(function(){var J=setInterval(function(){m(!0),setTimeout(function(){return m(!1)},150)},5e3);return function(){return clearInterval(J)}},[]);var u=function(){var W=32,Q=32,ae=h.x-W,xe=h.y-Q,p=6,pe=6,k=Math.sqrt(ae*ae+xe*xe),ue=50;if(k===0)return{x:0,y:0};var V=Math.min(k/ue,1),he=ae/k*p*V,Fe=xe/k*pe*V;return{x:Math.max(-p,Math.min(p,he)),y:Math.max(-pe,Math.min(pe,Fe))}},z=function(W){var Q=32,ae=h.x-Q,xe=400;if(Math.abs(ae)<xe)return 1;var p=Math.abs(ae)-xe,pe=32-xe,k=Math.min(p/pe,1);return ae>xe?W?1-k*.5:1:ae<-xe?W?1:1-k*.5:1},ne=u(),X=u(),C=z(!0),ie=z(!1);return(0,M.jsxs)("div",{ref:R,className:n.container,children:[(0,M.jsx)("div",{className:L(n.eye,n.leftEye,o?n.blinkingEye:""),style:{transform:"translate(".concat(ne.x,"px, ").concat(ne.y,"px) ").concat(o?"scaleY(0.1)":"scaleY(".concat(C,")"))}}),(0,M.jsx)("div",{className:L(n.eye,n.rightEye,o?n.blinkingEye:""),style:{transform:"translate(".concat(X.x,"px, ").concat(X.y,"px) ").concat(o?"scaleY(0.1)":"scaleY(".concat(ie,")"))}})]})};F.default=P;var j=(0,S.kc)(function(_){var I=_.css,v=_.token;return{container:{width:64,height:64,backgroundColor:"black",borderRadius:12,position:"relative",cursor:"pointer",overflow:"hidden",boxShadow:"15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)"},eye:{width:6,height:12,backgroundColor:"white",borderRadius:99,position:"absolute",top:16,transition:"transform 0.1s ease-out"},leftEye:{left:22},rightEye:{left:36},blinkingEye:{transition:"transform 0.05s ease-out"}}})},31295:function(Ke,F,e){"use strict";e.d(F,{Z:function(){return I}});var H=e(68400),d=e.n(H),S=e(67294),y=e(9053),M=e(56044),P=e(85893),j,_=(0,y.vJ)(j||(j=d()([`
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
`])),function(v){return v.theme.prefixCls},function(v){return v.theme.colorText},function(v){return v.theme.colorTextSecondary});function I(v){var h=(0,M.wv)(),N=h.getPrefixCls,i=N("welcome"),c=typeof v.logo=="string"?(0,P.jsx)("img",{className:i+"-logo",src:v.logo}):v.logo;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(_,{}),(0,P.jsxs)("div",{className:i,style:v.style,children:[c,(0,P.jsxs)("div",{children:[(0,P.jsx)("div",{className:i+"-title",children:v.title}),(0,P.jsx)("div",{className:i+"-desc",children:v.desc})]})]})]})}},43601:function(Ke,F,e){"use strict";e.r(F),e.d(F,{AIGC:function(){return ue.Z},Accordion:function(){return n.Z},AgentScopeRuntimeWebUI:function(){return o.Z},Attachments:function(){return u.Z},Bubble:function(){return z.Z},ChatAnywhere:function(){return _.ZP},ChatInput:function(){return ae.Z},ConfigProvider:function(){return H.ZP},Conversations:function(){return ne.Z},CustomCardsContext:function(){return S.NR},CustomCardsProvider:function(){return S.xy},DeepThink:function(){return L.Z},DeepThinking:function(){return L.Z},DefaultCards:function(){return c},DeviceAction:function(){return X.Z},Disclaimer:function(){return C.Z},GenerativeUISandbox:function(){return V.Z},HistoryPanel:function(){return ne.Z},ImageGenerator:function(){return ie.Z},Markdown:function(){return k.Z},Mermaid:function(){return J.Z},OperateCard:function(){return W.Z},Process:function(){return n.Z},Rag:function(){return Q.Sn},Sender:function(){return ae.Z},SparkChatProvider:function(){return y.ZP},StatusCard:function(){return xe.Z},Stream:function(){return P.Z},Thinking:function(){return Q.BI},TodoList:function(){return Q.B4},ToolCall:function(){return Q.x4},WebSearch:function(){return Q.fz},Welcome:function(){return pe.Z},createCard:function(){return j.L},sleep:function(){return p.Z},useChatAnywhere:function(){return I.TQ},useCustomCardsContext:function(){return S.HJ},useGlobalContext:function(){return M.bN},useInput:function(){return v.G},useMessages:function(){return h.y},useProviderContext:function(){return y.wv},useSessionList:function(){return N.x},uuid:function(){return i.Z},version:function(){return d.Z}});var H=e(55839),d=e(66366),S=e(83962),y=e(56044),M=e(92049),P=e(7354),j=e(50130),_=e(29041),I=e(76289),v=e(37254),h=e(4421),N=e(61316),i=e(88773),c=e(24963),o=e(74823),m=e(22863),R={};for(var s in m)["default","ConfigProvider","version","CustomCardsContext","CustomCardsProvider","SparkChatProvider","useCustomCardsContext","useGlobalContext","useProviderContext","Stream","createCard","ChatAnywhere","useChatAnywhere","useInput","useMessages","useSessionList","uuid","DefaultCards","AgentScopeRuntimeWebUI","Accordion","Process","DeepThink","DeepThinking","Attachments","Bubble","Conversations","HistoryPanel","DeviceAction","Disclaimer","ImageGenerator","Mermaid","OperateCard","ChatInput","Sender","StatusCard","sleep","Welcome","Markdown","AIGC","GenerativeUISandbox"].indexOf(s)<0&&(R[s]=function(he){return m[he]}.bind(0,s));e.d(F,R);var n=e(487),L=e(14082),u=e(36417),z=e(9146),ne=e(9368),X=e(55031),C=e(10325),ie=e(28446),J=e(12181),W=e(31382),Q=e(56809),ae=e(93164),xe=e(70770),p=e(32116),pe=e(31295),k=e(82679),ue=e(86578),V=e(80115)}}]);
