(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1997],{86578:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return ve}});var w=e(97857),x=e.n(w),P=e(9783),E=e.n(P),A=e(13769),b=e.n(A),j=e(67294),y=e(93967),D=e.n(y),f=e(56044),v=e(93164),I=e(36417),a=e(44294),h=e(12624),s=e(82484),d=e(68400),M=e.n(d),l=e(9053),n,_=(0,l.vJ)(n||(n=M()([`
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
`])),function($){return $.theme.prefixCls},function($){return $.theme.prefixCls},function($){return $.theme.prefixCls},function($){return $.theme.prefixCls},function($){return $.theme.borderRadius},function($){return $.theme.colorBorderSecondary},function($){return $.theme.colorBgBase},function($){return $.theme.colorText}),m=e(85893),Q=["className","icon"],re=s.Z.Dragger,ne=function(Ce){var Fe=Ce.className,$e=Ce.icon,qe=b()(Ce,Q),nn=(0,f.wv)(),We=nn.getPrefixCls,B=We("media-upload");return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(_,{}),(0,m.jsx)(re,x()(x()({showUploadList:!1,className:D()(B,Fe)},qe),{},{children:(0,m.jsxs)("div",{className:D()("".concat(B,"-thumbnail")),children:[(0,m.jsx)("div",{className:D()("".concat(B,"-thumbnail-gradient"))}),$e||(0,m.jsx)(h.Z,{className:D()("".concat(B,"-thumbnail-icon"))})]})}))]})},C=ne,he,V=(0,l.vJ)(he||(he=M()([`
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
`])),function($){return $.theme.prefixCls},function($){return $.theme.colorText},function($){return $.theme.colorTextTertiary}),z=function(Ce){var Fe=Ce.className,$e=Ce.title,qe=Ce.description,nn=(0,f.wv)(),We=nn.getPrefixCls,B=We("media-info"),oe=!!$e||!!qe;return oe?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(V,{}),(0,m.jsxs)("div",{className:D()(B,Fe),children:[$e&&(0,m.jsx)("div",{className:D()("".concat(B,"-title")),children:$e}),qe&&(0,m.jsx)("div",{className:D()("".concat(B,"-description")),children:qe})]})]}):null},H=z,te,ye=(0,l.vJ)(te||(te=M()([`
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
`])),function($){return $.theme.prefixCls},function($){return $.theme.colorBorderSecondary},function($){return $.theme.prefixCls},function($){return $.theme.prefixCls},function($){return $.theme.prefixCls},function($){return $.theme.prefixCls}),g=["title","description","maxCount"],Pe=function(Ce){var Fe=Ce.className,$e=Ce.onUpload,qe=$e===void 0?[]:$e,nn=Ce.attachedFiles,We=nn===void 0?[[]]:nn,B=Ce.onFileChange,oe=(0,f.wv)(),Ze=oe.getPrefixCls,L=(0,j.useContext)(a.a),q=L.focus,X=L.enableFocusExpand,Te=Ze("aigc-sender-header"),Ue=(0,j.useMemo)(function(){return We.flat().length>0?!0:qe.length<=0?!1:!!(q||!X)},[qe,We,X,q]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(ye,{}),(0,m.jsx)(v.Z.Header,{closable:!1,open:Ue,children:(0,m.jsx)("div",{className:D()(Te,Fe),tabIndex:0,children:qe==null?void 0:qe.map(function(Ee,Ae){var en=Ee.title,ze=Ee.description,Je=Ee.maxCount,rn=Je===void 0?1:Je,Ye=b()(Ee,g),Oe=We[Ae]||[];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(C,x()({className:D()(E()({},"".concat(Te,"-upload-hidden"),Oe.length>=rn)),maxCount:rn,fileList:Oe,onChange:function(t){Ee.beforeUpload&&t.file.status&&B(Ae,t.fileList),Ee.beforeUpload||B(Ae,t.fileList)},showUploadList:!1},Ye),"upload-".concat(Ae)),Oe.length>0&&(0,m.jsx)(I.Z,{items:Oe,onChange:function(t){return B(Ae,t.fileList)}},"attachments-".concat(Ae)),rn===1&&(0,m.jsx)(H,{title:en,description:ze},"info-".concat(Ae))]})})})})]})},U=Pe,ve={SenderHeader:U,Info:H,Upload:C}},487:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return ye}});var w=e(9783),x=e.n(w),P=e(97857),E=e.n(P),A=e(5574),b=e.n(A),j=e(67294),y=e(93967),D=e.n(y),f=e(56044),v=e(85893);function I(g){var Pe=(0,f.wv)(),U=Pe.getPrefixCls,ve=U("accordion-content-body");return(0,v.jsxs)("div",{className:ve,children:[g.headerLeft||g.headerRight?(0,v.jsxs)("div",{className:"".concat(ve,"-header"),children:[g.headerLeft,(0,v.jsx)("div",{style:{flex:1}}),g.headerRight]}):null,(0,v.jsx)("div",{className:"".concat(ve,"-body"),children:g.children})]})}var a=e(9361);function h(g){var Pe=(0,f.wv)(),U=Pe.theme,ve=Pe.getPrefixCls,$=(U==null?void 0:U.algorithm)===a.Z.darkAlgorithm,Ce=ve("accordion-soft-light-title");return(0,v.jsx)("div",{className:Ce,style:$?{}:{color:"rgba(38, 36, 76, 0.88)"},children:g.children})}var s=e(68400),d=e.n(s),M=e(9053),l,n=(0,M.vJ)(l||(l=d()([`
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
`])),function(g){return g.theme.prefixCls},function(g){return g.theme.colorSuccess},function(g){return g.theme.prefixCls},function(g){return g.theme.colorError},function(g){return g.theme.colorTextSecondary},function(g){return g.theme.colorBgBase},function(g){return g.theme.borderRadiusLG},function(g){return g.theme.colorBorderSecondary},function(g){return g.theme.colorBorder},function(g){return g.theme.colorBorderSecondary},function(g){return g.theme.colorBgBase},function(g){return g.theme.colorText},function(g){return g.theme.prefixCls},function(g){return g.theme.prefixCls},function(g){return g.theme.prefixCls},function(g){return g.theme.prefixCls},function(g){return g.theme.prefixCls},function(g){return g.theme.colorFillTertiary},function(g){return g.theme.prefixCls},function(g){return g.theme.colorTextSecondary},function(g){return g.theme.colorBorderSecondary},function(g){return g.theme.prefixCls},function(g){return g.theme.prefixCls},function(g){return g.theme.colorBorderSecondary},function(g){return g.theme.colorBorderSecondary},function(g){return g.theme.colorFillTertiary},function(g){return g.theme.colorText},function(g){return g.theme.colorBgBase}),_=e(40443),m=e(89034),Q=e(9343),re=e(36674),ne=e(9838),C=e(28387),he=e(16592);function V(g){var Pe=(0,f.wv)(),U=Pe.getPrefixCls,ve=U("accordion-group"),$=j.useState(g.defaultOpen),Ce=b()($,2),Fe=Ce[0],$e=Ce[1],qe=g.open!==void 0?g.open:Fe,nn=g.inline?"close":qe?"open":"close",We=(0,j.useMemo)(function(){if(g.icon)return g.icon;if(g.status==="generating")return(0,v.jsx)(_.Z,{className:"".concat(ve,"-icon-loading"),spin:!0});if(g.status==="finished")return(0,v.jsx)(m.Z,{className:"".concat(ve,"-icon-success")});if(g.status==="interrupted")return(0,v.jsx)(Q.Z,{});if(g.status==="error")return(0,v.jsx)(re.Z,{className:"".concat(ve,"-icon-error")})},[g.status,g.icon]),B=(0,j.useMemo)(function(){return g.steps?g.steps.map(function(oe,Ze){var L=Ze===0,q=Ze===g.steps.length-1;return(0,v.jsx)(V,E()(E()({},oe),{},{isFirst:L,isLast:q}),oe.id||Ze)}):g.children},[g.steps,g.children]);return(0,v.jsxs)("div",{className:D()("".concat(ve),"".concat(ve,"-").concat(nn)),children:[(0,v.jsxs)("div",{className:D()("".concat(ve,"-header"),"".concat(ve,"-header-").concat(nn)),onClick:function(){return B&&g.open===void 0&&$e(!Fe)},children:[We?(0,v.jsx)("div",{className:D()("".concat(ve,"-header-icon"),x()(x()(x()({},"".concat(ve,"-header-icon-line"),g.iconLine),"".concat(ve,"-header-icon-first"),g.isFirst),"".concat(ve,"-header-icon-last"),g.isLast&&nn==="close"||g.level)),children:We}):null,(0,v.jsx)("div",{children:g.title}),B&&(0,v.jsx)("div",{className:D()("".concat(ve,"-header-arrow")),children:qe?(0,v.jsx)(C.Z,{}):(0,v.jsx)(ne.Z,{})}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{style:{flex:1}}),g.rightChildren]})]}),(0,v.jsx)(H,{prefixCls:ve,stateOpen:qe,status:nn,inline:g.inline,content:B,bodyStyle:g.bodyStyle,level:g.level})]})}var z={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function H(g){var Pe=(0,j.useRef)(null);if(!g.content)return null;var U=g.prefixCls,ve=g.stateOpen,$=g.inline,Ce=g.bodyStyle,Fe=g.level;return(0,v.jsx)(he.ZP,{nodeRef:Pe,in:ve,timeout:300,children:function(qe){return(0,v.jsx)("div",{style:E()(E()(E()({},Ce),Fe?{marginTop:0}:{}),{},{transition:"opacity ".concat(300,"ms ease-in-out")},z[qe]),className:D()("".concat(U,"-body"),"".concat(U,"-body-").concat(ve?"open":"close"),x()({},"".concat(U,"-body-inline"),$)),children:g.content})}})}function te(g){var Pe=g.level,U=Pe===void 0?1:Pe,ve=g.isFirst,$=ve===void 0?!0:ve,Ce=g.isLast,Fe=Ce===void 0?!0:Ce;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n,{}),(0,v.jsx)(V,E()(E()({},g),{},{level:U,isFirst:$,isLast:Fe}))]})}te.BodyContent=I,te.SoftLightTitle=h;var ye=te},14082:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return j}});var w=e(487),x=e(56044),P=e(9361),E=e(93967),A=e.n(E),b=e(85893);function j(y){var D=(0,x.wv)(),f=D.theme,v=D.getPrefixCls,I=v("accordion-deep-thinking"),a=(f==null?void 0:f.algorithm)===P.Z.darkAlgorithm,h=(0,b.jsx)("img",{style:{display:"block",width:16,height:16,filter:a?"invert(1)  brightness(100%) saturate(0%)":""},src:"https://img.alicdn.com/imgextra/i2/O1CN01QZgWRv1I4JM0BAZ9O_!!6000000000839-54-tps-56-56.apng"}),s=y.title||"Deep thinking";y.loading&&(s+="...");var d=y.loading?(0,b.jsx)(w.Z.SoftLightTitle,{children:s}):s,M=y.maxHeight?{maxHeight:y.maxHeight,overflowY:"auto"}:{},l=y.defaultOpen!==void 0?y.defaultOpen:y.autoCloseOnFinish&&!y.loading?!1:void 0;return(0,b.jsx)(w.Z,{title:d,status:y.loading?"generating":"finished",icon:y.loading?h:null,defaultOpen:l,open:y.open,bodyStyle:M,inline:!0,children:(0,b.jsx)("div",{className:A()(I,y.className),children:y.content||"..."})})}},74823:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return An}});var w=e(97857),x=e.n(w),P=e(9783),E=e.n(P),A=e(56044),b=e(68400),j=e.n(b),y=e(9053),D,f=(0,y.vJ)(D||(D=j()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.colorBgBase},function(r){return r.theme.prefixCls},function(r){return r.theme.colorBgBase},function(r){return r.theme.prefixCls},function(r){return r.theme.colorFillTertiary},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls}),v=e(93967),I=e.n(v),a=e(17909),h=e(59214),s=e(67294),d=e(81759),M=e(49131),l=e(17300),n=e(85893),_=(0,h.kr)(void 0);function m(r){try{var p=(0,h.Sz)(_,r);return p}catch(o){return{}}}function Q(r){var p=r.children,o=(0,a.Z)(),u=(0,s.useMemo)(function(){var le=r.options.theme||{};return x()(x()({},r.options),{},{theme:x()(x()({},le),{},{narrowMode:!o.lg||le.narrowMode})})},[r.options,o.lg]),T=(0,s.useMemo)(function(){var le=u.theme.colorPrimary,me=u.theme.colorBgBase,J=u.theme.colorTextBase,ce=u.theme.darkMode;if(le||ce){var ue=(0,d.Z)((0,M.Z)({primaryHex:le,bgBaseHex:me,textBaseHex:J,darkMode:ce}));return ue}},[u.theme.colorPrimary,u.theme.colorBgBase,u.theme.colorTextBase,u.theme.darkMode]),R=(0,n.jsx)(_.Provider,{value:u,children:p});if(T){var se=u.theme.prefix||"agentscope-runtime-webui";return(0,n.jsx)(l.ZP,x()(x()({},T),{},{style:{height:"100%"},prefix:se,prefixCls:se,children:R}))}return R}var re=null,ne=e(15009),C=e.n(ne),he=e(99289),V=e.n(he),z=e(5574),H=e.n(z),te=e(93164),ye=e(10325),g=e(79785),Pe=(0,h.kr)({loading:!1,setLoading:function(){},getLoading:function(){return!1},disabled:!1,setDisabled:function(){},getDisabled:function(){return!1}});function U(r){var p=(0,g.Z)(!1),o=H()(p,3),u=o[0],T=o[1],R=o[2],se=(0,g.Z)(!1),le=H()(se,3),me=le[0],J=le[1],ce=le[2];return(0,n.jsx)(Pe.Provider,{value:{loading:u,setLoading:T,getLoading:R,disabled:me,setDisabled:J,getDisabled:ce},children:r.children})}var ve=function(p){return(0,h.Sz)(Pe,p)},$=e(82484),Ce=e(64057),Fe=e(81644),$e=e(36417);function qe(r){var p=(0,g.Z)([]),o=H()(p,3),u=o[0],T=o[1],R=o[2];if(r!=null&&r.customRequest){var se=(0,n.jsx)($.Z,{customRequest:r.customRequest,fileList:u,showUploadList:!1,onChange:function(J){T(J.fileList)},children:(0,n.jsx)(Ce.Z,{icon:(0,n.jsx)(Fe.Z,{}),bordered:!1})}),le=(0,n.jsx)(te.Z.Header,{closable:!1,open:(u==null?void 0:u.length)>0,children:(0,n.jsx)($e.Z,{items:u,onChange:function(J){return T(J.fileList)}})});return{fileList:u,getFileList:R,setFileList:T,uploadIconButton:se,uploadFileListHeader:le}}else return{enabled:!1}}function nn(r){var p=(0,g.Z)(""),o=H()(p,3),u=o[0],T=o[1],R=o[2],se=(0,A.wv)().getPrefixCls("chat-anywhere-input"),le=m(function(wn){return wn.sender}),me=ve(function(wn){return wn}),J=le||{},ce=J.placeholder,ue=ce===void 0?"":ce,_e=J.disclaimer,be=_e===void 0?"":_e,Ne=J.maxLength,Qe=J.beforeSubmit,Ke=Qe===void 0?function(){return Promise.resolve(!0)}:Qe,Me=J.beforeUI,He=J.afterUI,Cn=J.scalable,Pn=Cn===void 0?!0:Cn,Le=J.attachments,Ve=qe(Le),vn=Ve.getFileList,En=Ve.setFileList,Mn=Ve.uploadIconButton,ot=Ve.uploadFileListHeader,Ie=(0,s.useCallback)(V()(C()().mark(function wn(){var it;return C()().wrap(function(Dn){for(;;)switch(Dn.prev=Dn.next){case 0:return Dn.next=2,Ke();case 2:if(it=Dn.sent,it){Dn.next=5;break}return Dn.abrupt("return");case 5:r.onSubmit({query:R(),fileList:(vn==null?void 0:vn())||[]}),T(""),En&&En([]);case 8:case"end":return Dn.stop()}},wn)})),[]),lt=(0,s.useCallback)(function(){r.onCancel()},[]);return(0,n.jsxs)("div",{className:se,children:[(0,n.jsxs)("div",{className:"".concat(se,"-wrapper"),children:[Me,(0,n.jsx)(te.Z,{loading:me.loading,disabled:me.disabled,scalable:Pn,placeholder:ue,value:u,prefix:(0,n.jsx)(n.Fragment,{children:Mn}),header:ot,onChange:T,maxLength:Ne,onSubmit:Ie,onCancel:lt}),He]}),be?(0,n.jsx)(ye.Z,{desc:be}):(0,n.jsx)("div",{className:"".concat(se,"-blank")})]})}var We=e(9146),B=e(19632),oe=e.n(B),Ze=(0,h.kr)({messages:[],setMessages:function(){},getMessages:function(){return[]}});function L(r){var p=(0,g.Z)([]),o=H()(p,3),u=o[0],T=o[1],R=o[2],se={messages:u,setMessages:T,getMessages:R};return(0,n.jsx)(Ze.Provider,{value:se,children:r.children})}var q=function(){var p=(0,h.Sz)(Ze,function(me){return{setMessages:me.setMessages,getMessages:me.getMessages}}),o=p.setMessages,u=p.getMessages,T=s.useCallback(function(){o([])},[]),R=s.useCallback(function(me){return u().find(function(J){return J.id===me})},[]),se=s.useCallback(function(me){o(function(J){return J.filter(function(ce){return ce.id!==me.id})})},[]),le=s.useCallback(function(me){o(function(J){var ce=J.findIndex(function(_e){return _e.id===me.id});if(ce>-1){var ue=x()(x()({},J[ce]),me);return[].concat(oe()(J.slice(0,ce)),[ue],oe()(J.slice(ce+1)))}else return[].concat(oe()(J),[me])})},[]);return{getMessages:u,removeAllMessages:T,getMessage:R,removeMessage:se,updateMessage:le}},X=e(78234),Te=e(73935),Ue=e(2093),Ee=(0,h.kr)({sessions:[],setSessions:function(){},getSessions:function(){return[]},currentSessionId:void 0,setCurrentSessionId:function(){},getCurrentSessionId:function(){return""}});function Ae(r){var p=m(function(_e){return _e.session}),o=(0,g.Z)([]),u=H()(o,3),T=u[0],R=u[1],se=u[2],le=(0,g.Z)(void 0),me=H()(le,3),J=me[0],ce=me[1],ue=me[2];return(0,X.Z)(V()(C()().mark(function _e(){var be,Ne;return C()().wrap(function(Ke){for(;;)switch(Ke.prev=Ke.next){case 0:return Ke.next=2,p.api.getSessionList();case 2:Ne=Ke.sent,R(Ne),ce(Ne==null||(be=Ne[0])===null||be===void 0?void 0:be.id);case 5:case"end":return Ke.stop()}},_e)}))),(0,n.jsx)(Ee.Provider,{value:{sessions:T,setSessions:R,getSessions:se,currentSessionId:J,setCurrentSessionId:ce,getCurrentSessionId:ue},children:r.children})}var en=function(){var p=(0,h.Sz)(Ee,function(be){return be}),o=p.setSessions,u=p.getSessions,T=p.getCurrentSessionId,R=p.setCurrentSessionId,se=p.currentSessionId,le=m(function(be){return be.session}),me=(0,h.Sz)(Ze,function(be){return be.setMessages}),J=s.useCallback(function(){var be=V()(C()().mark(function Ne(Qe){var Ke;return C()().wrap(function(He){for(;;)switch(He.prev=He.next){case 0:return He.next=2,le.api.removeSession(Qe);case 2:Ke=He.sent,me([]),R(void 0),o(Ke);case 6:case"end":return He.stop()}},Ne)}));return function(Ne){return be.apply(this,arguments)}}(),[]),ce=s.useCallback(function(){var be=V()(C()().mark(function Ne(Qe){var Ke;return C()().wrap(function(He){for(;;)switch(He.prev=He.next){case 0:if(!Qe.id){He.next=6;break}return He.next=3,le.api.updateSession(Qe);case 3:He.t0=He.sent,He.next=9;break;case 6:return He.next=8,le.api.createSession(Qe);case 8:He.t0=He.sent;case 9:return Ke=He.t0,o(Ke),He.abrupt("return",Qe);case 12:case"end":return He.stop()}},Ne)}));return function(Ne){return be.apply(this,arguments)}}(),[]),ue=s.useCallback(function(){var be=V()(C()().mark(function Ne(Qe){var Ke;return C()().wrap(function(He){for(;;)switch(He.prev=He.next){case 0:return He.next=2,ce({name:(Qe==null?void 0:Qe.name)||"",messages:[]});case 2:return Ke=He.sent,R(Ke.id),me(Ke.messages),He.abrupt("return",Ke.id);case 6:case"end":return He.stop()}},Ne)}));return function(Ne){return be.apply(this,arguments)}}(),[]),_e=s.useCallback(function(be){R(be)},[]);return(0,Ue.Z)(V()(C()().mark(function be(){var Ne,Qe;return C()().wrap(function(Me){for(;;)switch(Me.prev=Me.next){case 0:return Te.flushSync(function(){me([])}),Me.next=3,le.api.getSession(se);case 3:if(Me.t2=Ne=Me.sent,Me.t1=Me.t2===null,Me.t1){Me.next=7;break}Me.t1=Ne===void 0;case 7:if(!Me.t1){Me.next=11;break}Me.t3=void 0,Me.next=12;break;case 11:Me.t3=Ne.messages;case 12:if(Me.t0=Me.t3,Me.t0){Me.next=15;break}Me.t0=[];case 15:Qe=Me.t0,me(Qe);case 17:case"end":return Me.stop()}},be)})),[se]),{changeCurrentSessionId:_e,getCurrentSessionId:T,getSessions:u,removeSession:J,updateSession:ce,createSession:ue}},ze=e(13769),Je=e.n(ze),rn=e(68997),Ye,Oe=(0,y.vJ)(Ye||(Ye=j()([`
.`,`-chat-anywhere-welcome-default {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

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
    margin-top: -10px;
  }
  
  &-prompts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }

  &-prompt {
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: `,`;
    color: `,`;
    font-size: 14px;
    padding: 10px 16px;
    border-radius: 8px;
    cursor: pointer;
    gap: 20px;
    

    &:hover {
      background-color: `,`;
    }
    
  }
}
`])),function(r){return r.theme.prefixCls},function(r){var p=r.theme;return p.colorText},function(r){var p=r.theme;return p.colorTextSecondary},function(r){var p=r.theme;return p.colorFillQuaternary},function(r){var p=r.theme;return p.colorText},function(r){var p=r.theme;return p.colorFillTertiary}),cn=e(38850),t=["render"];function Se(r){var p=m(function(J){return J.welcome}),o=(0,A.wv)().getPrefixCls("chat-anywhere-welcome-default");if(!p)return null;var u=p.render,T=Je()(p,t);if(u)return p.render({greeting:p.greeting,avatar:p.avatar,description:p.description,prompts:p.prompts,onSubmit:r.onSubmit});var R=T.greeting,se=T.avatar,le=T.prompts,me=T.description;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Oe,{}),(0,n.jsxs)("div",{className:o,children:[se&&(0,n.jsx)(rn.Z,{src:se,shape:"square",size:72}),R&&(0,n.jsx)("div",{className:"".concat(o,"-greeting"),children:R}),me&&(0,n.jsx)("div",{className:"".concat(o,"-description"),children:me}),(le==null?void 0:le.length)>0&&(0,n.jsx)("div",{className:"".concat(o,"-prompts"),children:le.map(function(J){var ce=typeof J=="string"?{label:J,value:J}:x()(x()({},J),{},{label:J.label||J.value,value:J.value});return(0,n.jsx)(we,{prompt:ce,onSubmit:r.onSubmit},ce.value)})})]})]})}function we(r){var p=(0,A.wv)().getPrefixCls("chat-anywhere-welcome-default");return(0,n.jsxs)("div",{className:"".concat(p,"-prompt"),onClick:function(){return r.onSubmit({query:r.prompt.value})},children:[(0,n.jsx)("span",{children:r.prompt.label}),(0,n.jsx)(cn.Z,{})]})}function ke(r){var p=(0,h.Sz)(Pe,function(R){return R.loading}),o=(0,h.Sz)(Ze,function(R){return R.messages}),u=(0,A.wv)().getPrefixCls("chat-anywhere-message-list"),T=(0,h.Sz)(Ee,function(R){return R.currentSessionId});return o.length===0?(0,n.jsx)("div",{className:I()(u,"".concat(u,"-welcome")),children:(0,n.jsx)(Se,{onSubmit:r.onSubmit})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(We.Z.List,{smooth:p,classNames:{wrapper:u},items:o},T)})}var S,xe=(0,y.vJ)(S||(S=j()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls}),de=e(32116);function fe(r){(0,s.useEffect)(function(){return document.addEventListener(r.type,r.callback),function(){document.removeEventListener(r.type,r.callback)}},[])}var ge=function(p){var o=p.type,u=p.data;document.dispatchEvent(new CustomEvent(o,{detail:u}))},ie=e(88773),c=e(12444),N=e.n(c),F=e(72004),Y=e.n(F),Z=function(r){return r.Created="created",r.InProgress="in_progress",r.Completed="completed",r.Canceled="canceled",r.Failed="failed",r.Rejected="rejected",r.Unknown="unknown",r}({}),i=function(r){return r.ASSISTANT="assistant",r.USER="user",r.SYSTEM="system",r}({}),k=function(r){return r.MESSAGE="message",r.REASONING="reasoning",r.PLUGIN_CALL="plugin_call",r.PLUGIN_CALL_OUTPUT="plugin_call_output",r.FUNCTION_CALL="function_call",r.FUNCTION_CALL_OUTPUT="function_call_output",r.COMPONENT_CALL="component_call",r.COMPONENT_CALL_OUTPUT="component_call_output",r.MCP_LIST_TOOLS="mcp_list_tools",r.MCP_APPROVAL_REQUEST="mcp_approval_request",r.MCP_CALL="mcp_call",r.MCP_CALL_OUTPUT="mcp_call_output",r.MCP_APPROVAL_RESPONSE="mcp_approval_response",r.HEARTBEAT="heartbeat",r.ERROR="error",r}({}),O=function(r){return r.TEXT="text",r.DATA="data",r.IMAGE="image",r.AUDIO="audio",r.FILE="file",r}({}),K=function(){function r(p){var o,u=this;N()(this,r),E()(this,"data",void 0);var T=[this.buildTextContent(p.query)];(o=p.fileList)!==null&&o!==void 0&&o.length&&p.fileList.forEach(function(R){u.isImageFile(R)?T.push(u.buildImageContent(R)):T.push(u.buildFileContent(R))}),this.data={input:[{role:"user",type:k.MESSAGE,content:T}]}}return Y()(r,[{key:"isImageFile",value:function(o){return o.type.indexOf("image/")===0}},{key:"buildImageContent",value:function(o){var u;return{type:O.IMAGE,image_url:(u=o.response)===null||u===void 0?void 0:u.url,status:Z.Created}}},{key:"buildTextContent",value:function(o){return{type:O.TEXT,text:o,status:Z.Created}}},{key:"buildFileContent",value:function(o){var u;return{type:O.FILE,file_url:(u=o.response)===null||u===void 0?void 0:u.url,file_name:o.name,file_size:o.size,status:Z.Created}}}],[{key:"getHistoryMessages",value:function(o){return o.reduce(function(u,T){var R;return(R=T.cards)!==null&&R!==void 0&&R.length?u.concat(T.cards[0].data.input||T.cards[0].data.output):u},[])}}]),r}(),G=K;function pe(r){var p=r.currentQARef,o=q(),u=o.updateMessage,T=o.getMessages,R=o.removeMessage,se=(0,s.useCallback)(function(ce){return p.current.abortController=new AbortController,p.current.request={id:(0,ie.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new G(ce).data}]},Te.flushSync(function(){u(p.current.request)}),p.current.request},[p,u]),le=(0,s.useCallback)(function(){return p.current.response={id:(0,ie.Z)(),role:"assistant",cards:[],msgStatus:"generating"},u(p.current.response),p.current.response},[p,u]),me=(0,s.useCallback)(function(){return G.getHistoryMessages(T())},[T]),J=(0,s.useCallback)(function(ce){Te.flushSync(function(){R({id:ce})})},[R]);return{createRequestMessage:se,createResponseMessage:le,getHistoryMessages:me,updateMessage:u,removeMessageById:J,getMessages:T}}var ae=e(44987),De=e.n(ae),tn=e(7354),an=e(64599),un=e.n(an),sn=e(93513),Re=function(){function r(p){var o=p.id,u=p.status,T=p.created_at;N()(this,r),E()(this,"data",void 0),this.data={id:o,output:[],object:"response",status:u||Z.Created,created_at:T||Date.now()}}return Y()(r,[{key:"handleResponse",value:function(o){this.data=(0,sn.produce)(this.data,function(u){o.output||(o.output=[]),Object.assign(u,o)})}},{key:"handleMessage",value:function(o){this.data=(0,sn.produce)(this.data,function(u){u.output||(u.output=[]);var T=u.output.findIndex(function(se){return se.id===o.id});if(T>=0){var R=u.output[T].content;Object.assign(u.output[T],o),(!o.content||o.content.length===0)&&(u.output[T].content=R)}else u.output.push(o)})}},{key:"handleContent",value:function(o){this.data=(0,sn.produce)(this.data,function(u){var T=u.output.find(function(se){return se.id===o.msg_id});if(!T){console.warn("Message not found for content:",o.msg_id);return}if(T.content||(T.content=[]),o.delta){var R=T.content[T.content.length-1];R&&R.delta?o.type===O.TEXT&&R.type===O.TEXT?R.text+=o.text:o.type===O.IMAGE?R.image_url=o.image_url:(o.type,O.DATA):T.content.push(o)}else T.content.length>0?Object.assign(T.content[T.content.length-1],o):T.content.push(o)})}},{key:"handleError",value:function(o){this.data=(0,sn.produce)(this.data,function(u){u.status=Z.Failed,u.output.push({status:Z.Failed,type:k.ERROR,content:[],id:(0,ie.Z)(),role:"assistant",code:o.code,message:typeof o.message=="string"?o.message:JSON.stringify(o.message)})})}},{key:"handle",value:function(o){return o.object==="response"?this.handleResponse(o):o.object==="message"?this.handleMessage(o):o.object==="content"?this.handleContent(o):this.handleError(o),this.data}},{key:"cancel",value:function(){return this.data=(0,sn.produce)(this.data,function(o){r.maybeGenerating(o)&&(o.status=Z.Canceled),o.output.forEach(function(u){r.maybeGenerating(u)&&(u.status=Z.Canceled,u.content.forEach(function(T){r.maybeGenerating(T)&&(T.status=Z.Canceled)}))})}),this.data}}],[{key:"mergeToolMessages",value:function(o){var u=new Map,T=[],R=un()(o),se;try{var le=function(){var J,ce,ue=se.value;if(r.maybeToolInput(ue)&&(J=ue.content)!==null&&J!==void 0&&J.length){var _e=ue.content[0],be=_e.data.call_id||_e.data.name;u.set(be,_e),T.push(ue)}else if(r.maybeToolOutput(ue)&&(ce=ue.content)!==null&&ce!==void 0&&ce.length){var Ne=ue.content[0],Qe=Ne.data.call_id||Ne.data.name,Ke=u.get(Qe);Ke&&(T=T.map(function(Me){if(!r.maybeToolInput(Me))return Me;var He=Me.content[0],Cn=He.data.call_id||He.data.name;return Cn===Qe?x()(x()({},ue),{},{content:[].concat(oe()(Me.content),[Ne])}):Me}))}else T.push(ue)};for(R.s();!(se=R.n()).done;)le()}catch(me){R.e(me)}finally{R.f()}return T}},{key:"maybeToolOutput",value:function(o){return[k.FUNCTION_CALL_OUTPUT,k.PLUGIN_CALL_OUTPUT,k.COMPONENT_CALL_OUTPUT,k.MCP_CALL_OUTPUT].includes(o.type)}},{key:"maybeToolInput",value:function(o){return[k.FUNCTION_CALL,k.PLUGIN_CALL,k.COMPONENT_CALL,k.MCP_CALL].includes(o.type)}},{key:"maybeGenerating",value:function(o){return[Z.InProgress,Z.Created].includes(o.status)}},{key:"maybeDone",value:function(o){return[Z.Completed,Z.Canceled,Z.Failed].includes(o.status)}}]),r}(),Be=Re;function ln(r){var p=r.currentQARef,o=r.updateMessage,u=r.getCurrentSessionId,T=r.onFinish,R=m(function(J){return J.api}),se=(0,s.useRef)(R);(0,s.useEffect)(function(){se.current=R},[R]);var le=(0,s.useCallback)(function(){var J=V()(C()().mark(function ce(ue){var _e,be,Ne,Qe,Ke,Me,He,Cn;return C()().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:_e=new Be({id:"",status:Z.Created,created_at:0}),be=!1,Ne=!1,Le.prev=3,Ke=De()(ue);case 5:return Le.next=7,Ke.next();case 7:if(!(be=!(Me=Le.sent).done)){Le.next=17;break}return He=Me.value,Cn=_e.handle(He),p.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Cn}],o(p.current.response),Le.next=14,(0,de.Z)(100);case 14:be=!1,Le.next=5;break;case 17:Le.next=23;break;case 19:Le.prev=19,Le.t0=Le.catch(3),Ne=!0,Qe=Le.t0;case 23:if(Le.prev=23,Le.prev=24,!(be&&Ke.return!=null)){Le.next=28;break}return Le.next=28,Ke.return();case 28:if(Le.prev=28,!Ne){Le.next=31;break}throw Qe;case 31:return Le.finish(28);case 32:return Le.finish(23);case 33:case"end":return Le.stop()}},ce,null,[[3,19,23,33],[24,,28,32]])}));return function(ce){return J.apply(this,arguments)}}(),[]),me=(0,s.useCallback)(function(){var J=V()(C()().mark(function ce(ue){var _e,be,Ne,Qe,Ke,Me,He,Cn,Pn,Le,Ve,vn,En,Mn;return C()().wrap(function(Ie){for(;;)switch(Ie.prev=Ie.next){case 0:if(_e=se.current,Ie.prev=1,!_e.fetch){Ie.next=8;break}return Ie.next=5,_e.fetch({input:ue});case 5:Ie.t0=Ie.sent,Ie.next=11;break;case 8:return Ie.next=10,fetch(_e.baseURL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(_e.token||"")},body:JSON.stringify({input:ue,session_id:u(),stream:!0})});case 10:Ie.t0=Ie.sent;case 11:be=Ie.t0,Ie.next=16;break;case 14:Ie.prev=14,Ie.t1=Ie.catch(1);case 16:if(!(be&&be.body&&be.ok)){Ie.next=61;break}Ne=new Be({id:"",status:Z.Created,created_at:0}),Ie.prev=18,Qe=!1,Ke=!1,Ie.prev=21,He=De()((0,tn.Z)({readableStream:be.body}));case 23:return Ie.next=25,He.next();case 25:if(!(Qe=!(Cn=Ie.sent).done)){Ie.next=40;break}if(Pn=Cn.value,((Le=p.current.response)===null||Le===void 0?void 0:Le.msgStatus)!=="interrupted"){Ie.next=32;break}return(vn=p.current.abortController)===null||vn===void 0||vn.abort(),p.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Ne.cancel()}],o(p.current.response),Ie.abrupt("break",40);case 32:if(En=JSON.parse(Pn.data),Mn=Ne.handle(En),!(Mn.status!==Z.Failed&&!((Ve=Mn.output)!==null&&Ve!==void 0&&(Ve=Ve[0])!==null&&Ve!==void 0&&(Ve=Ve.content)!==null&&Ve!==void 0&&Ve.length))){Ie.next=36;break}return Ie.abrupt("continue",37);case 36:p.current.response&&(p.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Mn}],Mn.status===Z.Completed||Mn.status===Z.Failed?T():o(p.current.response));case 37:Qe=!1,Ie.next=23;break;case 40:Ie.next=46;break;case 42:Ie.prev=42,Ie.t2=Ie.catch(21),Ke=!0,Me=Ie.t2;case 46:if(Ie.prev=46,Ie.prev=47,!(Qe&&He.return!=null)){Ie.next=51;break}return Ie.next=51,He.return();case 51:if(Ie.prev=51,!Ke){Ie.next=54;break}throw Me;case 54:return Ie.finish(51);case 55:return Ie.finish(46);case 56:Ie.next=61;break;case 58:Ie.prev=58,Ie.t3=Ie.catch(18),console.error(Ie.t3);case 61:case"end":return Ie.stop()}},ce,null,[[1,14],[18,58],[21,42,46,56],[47,,51,55]])}));return function(ce){return J.apply(this,arguments)}}(),[u,p,o,T]);return{request:me,mockRequest:le}}function dn(){var r=en(),p=r.createSession,o=r.updateSession,u=r.getCurrentSessionId,T=(0,s.useCallback)(function(){var le=V()(C()().mark(function me(J){return C()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:if(u()){ue.next=3;break}return ue.next=3,p({name:J});case 3:case"end":return ue.stop()}},me)}));return function(me){return le.apply(this,arguments)}}(),[u,p]),R=(0,s.useCallback)(function(){var le=V()(C()().mark(function me(J,ce){return C()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:if(ce.length!==0){_e.next=3;break}return _e.next=3,o({id:u(),name:J});case 3:case"end":return _e.stop()}},me)}));return function(me,J){return le.apply(this,arguments)}}(),[u,o]),se=(0,s.useCallback)(function(){var le=V()(C()().mark(function me(J){return C()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,o({id:u(),messages:J});case 2:case"end":return ue.stop()}},me)}));return function(me){return le.apply(this,arguments)}}(),[u,o]);return{ensureSession:T,updateSessionName:R,syncSessionMessages:se,getCurrentSessionId:u}}function gn(){var r=(0,h.Sz)(Pe,function(ue){return ue.setLoading}),p=(0,h.Sz)(Ee,function(ue){return ue.currentSessionId}),o=(0,s.useRef)({}),u=pe({currentQARef:o}),T=dn(),R=(0,s.useCallback)(function(){var ue=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished";o.current.response&&(o.current.response.msgStatus=ue,r(!1),Te.flushSync(function(){u.updateMessage(o.current.response)}),T.syncSessionMessages(u.getMessages()))},[r,u,T]),se=ln({currentQARef:o,updateMessage:u.updateMessage,getCurrentSessionId:T.getCurrentSessionId,onFinish:function(){return R("finished")}}),le=se.request,me=(0,s.useCallback)(function(){var ue=V()(C()().mark(function _e(be){var Ne,Qe;return C()().wrap(function(Me){for(;;)switch(Me.prev=Me.next){case 0:return Me.next=2,T.ensureSession(be.query);case 2:if(Ne=u.getMessages(),!T.getCurrentSessionId()){Me.next=6;break}return Me.next=6,T.updateSessionName(be.query,Ne);case 6:return u.createRequestMessage(be),r(!0),Me.next=10,(0,de.Z)(100);case 10:return u.createResponseMessage(),Qe=u.getHistoryMessages(),Me.next=14,T.syncSessionMessages(u.getMessages());case 14:return Me.next=16,le(Qe);case 16:case"end":return Me.stop()}},_e)}));return function(_e){return ue.apply(this,arguments)}}(),[u,T,le]),J=(0,s.useCallback)(function(){R("interrupted")},[R]),ce=(0,s.useCallback)(function(){var ue=V()(C()().mark(function _e(be){var Ne;return C()().wrap(function(Ke){for(;;)switch(Ke.prev=Ke.next){case 0:return r(!0),u.removeMessageById(be),o.current.abortController=new AbortController,u.createResponseMessage(),Ne=u.getHistoryMessages(),Ke.next=7,le(Ne);case 7:case"end":return Ke.stop()}},_e)}));return function(_e){return ue.apply(this,arguments)}}(),[u,le]);return(0,s.useEffect)(function(){o.current={request:void 0,response:void 0,abortController:void 0}},[p]),fe({type:"handleReplace",callback:function(){var ue=V()(C()().mark(function be(Ne){return C()().wrap(function(Ke){for(;;)switch(Ke.prev=Ke.next){case 0:return Ke.next=2,ce(Ne.detail.id);case 2:case"end":return Ke.stop()}},be)}));function _e(be){return ue.apply(this,arguments)}return _e}()}),{handleSubmit:me,handleCancel:J}}function mn(){var r=(0,A.wv)().getPrefixCls("chat-anywhere-chat"),p=gn(),o=p.handleSubmit,u=p.handleCancel;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(xe,{}),(0,n.jsxs)("div",{className:r,children:[(0,n.jsx)(ke,{onSubmit:o}),(0,n.jsx)(nn,{onCancel:u,onSubmit:o})]})]})}var xn=e(21403),pn=e(67392),hn=e(13660),fn=e(12624),ee=e(50287),je=e(9368),Xe=(0,s.createContext)({collapsed:!1,toggleCollapsed:function(){}});function on(r){var p=(0,s.useState)(!1),o=H()(p,2),u=o[0],T=o[1],R=(0,s.useCallback)(function(){T(function(se){return!se})},[]);return(0,n.jsx)(Xe.Provider,{value:{collapsed:u,toggleCollapsed:R},children:r.children})}function Ln(){var r=(0,s.useContext)(Xe),p=r.collapsed,o=(0,A.wv)().getPrefixCls("chat-anywhere-sessions"),u=m(function(T){var R;return(R=T.theme)===null||R===void 0?void 0:R.leftHeader})||{};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"".concat(o),children:[s.isValidElement(u)?u:(0,n.jsx)(jn,{}),(0,n.jsxs)("div",{className:"".concat(o,"-content"),style:{display:p?"none":"flex"},children:[(0,n.jsx)(bn,{}),(0,n.jsx)(Tn,{})]})]})})}function jn(r){var p=r.className,o=m(function(be){var Ne;return(Ne=be.theme)===null||Ne===void 0?void 0:Ne.leftHeader})||{},u=(0,A.wv)().getPrefixCls("chat-anywhere-sessions"),T=(0,s.useContext)(Xe),R=T.toggleCollapsed,se=T.collapsed,le=m(function(be){return be.session.multiple}),me=o,J=me.logo,ce=J===void 0?"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png":J,ue=me.title,_e=ue===void 0?"Runtime WebUI":ue;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:I()("".concat(u,"-header"),p),children:[(0,n.jsxs)("div",{className:"".concat(u,"-header-left"),children:[(0,n.jsx)("img",{src:ce,alt:"logo",height:32}),(0,n.jsx)("span",{children:_e})]}),le&&(0,n.jsx)(Ce.Z,{className:"".concat(u,"-header-collapse"),bordered:!1,icon:se?(0,n.jsx)(hn.Z,{}):(0,n.jsx)(pn.Z,{}),onClick:R})]})})}function bn(r){var p=(0,h.Sz)(Pe,function(le){return le.loading}),o=en(),u=o.createSession,T=(0,A.wv)().getPrefixCls("chat-anywhere-sessions"),R=(0,s.useContext)(Xe),se=R.toggleCollapsed;return(0,n.jsx)("div",{className:"".concat(T,"-adder"),style:r.style,children:(0,n.jsx)(xn.Z,{block:!0,type:"primary",icon:(0,n.jsx)(fn.Z,{}),disabled:p,onClick:V()(C()().mark(function le(){return C()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,u();case 2:r.narrowMode&&se();case 3:case"end":return J.stop()}},le)})),children:"New Chat"})})}function Tn(r){var p=(0,A.wv)().getPrefixCls("chat-anywhere-sessions"),o=(0,h.Sz)(Ee,function(ce){return ce.sessions}),u=en(),T=u.changeCurrentSessionId,R=u.removeSession,se=(0,h.Sz)(Ee,function(ce){return ce.currentSessionId}),le=(0,s.useContext)(Xe),me=le.toggleCollapsed,J=(0,s.useMemo)(function(){return o.map(function(ce){return{key:ce.id,label:ce.name||"New Chat"}})},[o]);return(0,n.jsx)("div",{className:"".concat(p,"-list"),style:r.style,children:(0,n.jsx)(je.Z,{items:J,menu:[{key:"delete",icon:(0,n.jsx)(ee.Z,{}),danger:!0,onClick:function(){var ce=V()(C()().mark(function _e(be){return C()().wrap(function(Qe){for(;;)switch(Qe.prev=Qe.next){case 0:return Qe.next=2,R({id:be.key});case 2:return Qe.abrupt("return",Qe.sent);case 3:case"end":return Qe.stop()}},_e)}));function ue(_e){return ce.apply(this,arguments)}return ue}()}],activeKey:se,onActiveChange:function(ue){T(ue),r.narrowMode&&me()}})})}var Sn,Bn=(0,y.vJ)(Sn||(Sn=j()([`

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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls}),Zn=e(85265);function $n(){var r=(0,A.wv)().getPrefixCls("chat-anywhere"),p=m(function(le){return le.theme}),o=p.narrowMode,u=p.rightHeader,T=(0,s.useContext)(Xe),R=T.toggleCollapsed,se=T.collapsed;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Bn,{}),(0,n.jsxs)("div",{className:"".concat(r,"-layout-right-header"),children:[o?(0,n.jsx)(jn,{className:"".concat(r,"-default-header-inner")}):null,u&&(0,n.jsx)("div",{className:"".concat(r,"-default-header-right"),children:u})]}),o&&(0,n.jsx)(Zn.Z,{width:"80vw",styles:{body:{padding:0}},open:se,onClose:R,title:null,closable:!1,placement:"left",children:(0,n.jsxs)("div",{className:"".concat(r,"-sessions"),children:[(0,n.jsx)(Tn,{narrowMode:!0}),(0,n.jsx)(bn,{narrowMode:!0})]})})]})}function Kn(r,p){var o=q(),u=(0,h.Sz)(Pe,function(T){return T.setDisabled});return s.useImperativeHandle(p,function(){return{messages:o,input:{setDisabled:u}}},[]),null}var Jn=(0,s.forwardRef)(Kn);function Xn(r,p){var o=r.className,u=(0,A.wv)().getPrefixCls("chat-anywhere-layout"),T=m(function(ce){return ce.theme.narrowMode}),R=m(function(ce){return{session:ce.session}}),se=R.session,le=(0,s.useContext)(Xe),me=le.collapsed,J=!T&&se&&se.multiple;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{}),(0,n.jsxs)("div",{className:I()("".concat(u),o),children:[J&&(0,n.jsx)("div",{className:I()("".concat(u,"-left"),E()({},"".concat(u,"-left-collapsed"),me)),children:(0,n.jsx)(Ln,{})}),(0,n.jsxs)("div",{className:I()("".concat(u,"-right"),E()({},"".concat(u,"-right-has-header"),!0)),children:[(0,n.jsx)($n,{}),(0,n.jsx)(mn,{})]})]}),(0,n.jsx)(Jn,{ref:p})]})}var Yn=(0,s.forwardRef)(Xn);function Rn(r){var p=(0,s.useMemo)(function(){return r.data.input[0].content.reduce(function(o,u){if(u.type===O.TEXT&&o.push({code:"Text",data:{content:u.text,raw:!0}}),u.type===O.IMAGE){var T=o.find(function(se){return se.code==="Image"});T?T.data.push({url:u.image_url}):o.push({code:"Images",data:[{url:u.image_url}]})}if(u.type===O.FILE){var R=o.find(function(se){return se.code==="Files"});R?R.data.push({url:u.file_url,name:u.file_name,size:u.file_size}):o.push({code:"Files",data:[{url:u.file_url,name:u.file_name,size:u.file_size}]})}return o},[])},[r.data.input]);return(0,n.jsx)(We.Z,{role:"user",cards:p})}var Vn=e(82679),Fn=s.memo(function(r){var p,o=r.data;return(p=o.content)!==null&&p!==void 0&&p.length?(0,n.jsx)(n.Fragment,{children:o.content.map(function(u,T){switch(u.type){case O.TEXT:return(0,n.jsx)(Vn.Z,{content:u.text,cursor:u.status===Z.InProgress},T);default:return(0,n.jsx)("div",{children:JSON.stringify(u)},T)}})}):null}),On=Fn,qn=e(85786),et=s.memo(function(r){var p,o,u=r.data,T=m(function(be){return be.customToolRenderConfig})||{};if(!((p=u.content)!==null&&p!==void 0&&p.length))return null;var R=u.content,se=!((o=R[1])!==null&&o!==void 0&&o.data)||u.status===Z.InProgress,le=R[0].data.name,me="".concat(R[0].data.server_label?R[0].data.server_label+" / ":""),J="".concat(me).concat(le);if(T[le]){var ce=T[le];return(0,n.jsx)(ce,{data:u})}else{var ue,_e;return(0,n.jsx)(qn.Z,{loading:se,defaultOpen:!1,title:J,input:(ue=R[0])===null||ue===void 0||(ue=ue.data)===null||ue===void 0?void 0:ue.arguments,output:(_e=R[1])===null||_e===void 0||(_e=_e.data)===null||_e===void 0?void 0:_e.output})}}),Wn=et,Nn=e(79323);function kn(r){var p,o=r.data;if(o.status===Z.Created)return null;var u=o==null||(p=o.content)===null||p===void 0?void 0:p[0];return u?(0,n.jsx)(Nn.Z,{loading:o.status===Z.InProgress,title:"Thinking",content:u.text}):null}function zn(r){var p=r.data;return(0,n.jsx)(We.Z.Interrupted,{type:"error",title:p.code,desc:p.message})}var Qn=e(89698),nt=e(60227),tt=e(82286),yn=e(39693),_n=e.n(yn);function In(r){return!r.input_tokens||!r.output_tokens?null:(0,n.jsx)(We.Z.Footer.Count,{data:[["Input",r.input_tokens],["Output",r.output_tokens]]})}function Hn(r){var p,o,u=m(function(R){var se;return(se=R.actions)===null||se===void 0?void 0:se.list})||[{icon:(0,n.jsx)(Qn.Z,{}),onClick:function(){(0,tt.JG)(JSON.stringify(r.data))}}],T=_n()([].concat(oe()(u.map(function(R){var se=R;return R.onClick&&(se.onClick=function(){R.onClick(r)}),R.render&&(se.children=R.render(r)),se})),[r.isLast?{icon:(0,n.jsx)(nt.Z,{}),onClick:function(){ge({type:"handleReplace",data:r})}}:null]));return Be.maybeDone(r.data)?(0,n.jsx)(We.Z.Footer,{left:(0,n.jsx)(We.Z.Footer.Actions,{data:T}),right:(0,n.jsx)(In,{input_tokens:(p=r.data.usage)===null||p===void 0?void 0:p.input_tokens,output_tokens:(o=r.data.usage)===null||o===void 0?void 0:o.output_tokens})}):null}function rt(r){var p=(0,s.useMemo)(function(){return Be.mergeToolMessages(r.data.output)},[r.data.output]);return!(p!=null&&p.length)&&Be.maybeGenerating(r.data)?(0,n.jsx)(We.Z.Spin,{}):(0,n.jsxs)(n.Fragment,{children:[p.map(function(o){switch(o.type){case k.MESSAGE:return(0,n.jsx)(On,{data:o},o.id);case k.PLUGIN_CALL:case k.PLUGIN_CALL_OUTPUT:case k.MCP_CALL:case k.MCP_CALL_OUTPUT:return(0,n.jsx)(Wn,{data:o},o.id);case k.REASONING:return(0,n.jsx)(kn,{data:o},o.id);case k.ERROR:return(0,n.jsx)(zn,{data:o},o.id);case k.HEARTBEAT:return null;default:return console.warn("[WIP] Unknown message type: ".concat(o.type)),null}}),r.data.error&&(0,n.jsx)(zn,{data:r.data.error}),(0,n.jsx)(Hn,x()({},r))]})}var at=e(83962);function Un(r){var p=r.options,o=r.cards,u=r.children,T=[[Q,{options:p}],[at.xy,{cardConfig:o}],[Ae,{}],[L,{}],[U,{}],[on,{}]];return T.reduceRight(function(R,se){var le=H()(se,2),me=le[0],J=le[1];return(0,n.jsx)(me,x()(x()({},J),{},{children:R}))},u)}var st=Un;function Gn(r,p){var o=r.options,u=o===void 0?{}:o,T=(0,s.useMemo)(function(){var R=x()({AgentScopeRuntimeRequestCard:Rn,AgentScopeRuntimeResponseCard:rt},u.cards);return R},[u.cards]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(st,{options:u,cards:T,children:(0,n.jsx)(Yn,{ref:p})})})}var An=(0,s.forwardRef)(Gn)},57551:function(){},22863:function(Ge,W,e){"use strict";e.r(W);var w=e(57551),x=e.n(w),P={};for(var E in w)E!=="default"&&(P[E]=function(A){return w[A]}.bind(0,E));e.d(W,P)},36417:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return cn}});var w=e(9783),x=e.n(w),P=e(97857),E=e.n(P),A=e(5574),b=e.n(A),j=e(13769),y=e.n(j),D=e(93967),f=e.n(D),v=e(67294),I=e(56044),a=e(56790),h=e(73935),s=v.createContext(null),d=e(85893);function M(t){var Se=t.getDropContainer,we=t.className,ke=t.prefixCls,S=t.children,xe=v.useContext(s),de=xe.disabled,fe=v.useState(),ge=b()(fe,2),ie=ge[0],c=ge[1],N=v.useState(null),F=b()(N,2),Y=F[0],Z=F[1];v.useEffect(function(){var O=Se==null?void 0:Se();ie!==O&&c(O)},[Se]),v.useEffect(function(){if(ie){var O=function(){Z(!0)},K=function(De){De.preventDefault()},G=function(De){De.relatedTarget||Z(!1)},pe=function(De){Z(!1),De.preventDefault()};return document.addEventListener("dragenter",O),document.addEventListener("dragover",K),document.addEventListener("dragleave",G),document.addEventListener("drop",pe),function(){document.removeEventListener("dragenter",O),document.removeEventListener("dragover",K),document.removeEventListener("dragleave",G),document.removeEventListener("drop",pe)}}},[!!ie]);var i=Se&&ie&&!de;if(!i)return null;var k="".concat(ke,"-drop-area");return(0,h.createPortal)((0,d.jsx)("div",{className:f()(k,we,x()({},"".concat(k,"-on-body"),ie.tagName==="BODY")),style:{display:Y?"block":"none"},children:S}),ie)}var l=e(53033),n=e(52861),_=e(83622),m=e(29372),Q=e(64599),re=e.n(Q),ne=function(Se){return Se.indexOf("image/")===0},C=200;function he(t){return new Promise(function(Se){if(!t||!t.type||!ne(t.type)){Se("");return}var we=new Image;if(we.onload=function(){var xe=we.width,de=we.height,fe=xe/de,ge=fe>1?C:C*fe,ie=fe>1?C/fe:C,c=document.createElement("canvas");c.width=ge,c.height=ie,c.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(ge,"px; height: ").concat(ie,"px; z-index: 9999; display: none;"),document.body.appendChild(c);var N=c.getContext("2d");N.drawImage(we,0,0,ge,ie);var F=c.toDataURL();document.body.removeChild(c),window.URL.revokeObjectURL(we.src),Se(F)},we.crossOrigin="anonymous",t.type.startsWith("image/svg+xml")){var ke=new FileReader;ke.onload=function(){ke.result&&typeof ke.result=="string"&&(we.src=ke.result)},ke.readAsDataURL(t)}else if(t.type.startsWith("image/gif")){var S=new FileReader;S.onload=function(){S.result&&Se(S.result)},S.readAsDataURL(t)}else we.src=window.URL.createObjectURL(t)})}var V=e(9361),z=e(38703);function H(t){var Se=t.percent,we=V.Z.useToken(),ke=we.token;return(0,d.jsx)(z.Z,{type:"circle",percent:Se,size:40,strokeColor:"#FFF",trailColor:"rgba(255, 255, 255, 0.3)",format:function(xe){return(0,d.jsxs)("span",{style:{color:"#FFF"},children:[(xe||0).toFixed(0),"%"]})}})}var te=e(68400),ye=e.n(te),g=e(9053),Pe,U=(0,g.vJ)(Pe||(Pe=ye()([`
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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.colorBgContainer},function(t){return t.theme.lineWidth},function(t){return t.theme.colorBorderSecondary},function(t){return t.theme.paddingXS},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.fontSize},function(t){return t.theme.colorText},function(t){return t.theme.prefixCls},function(t){return t.theme.colorTextQuaternary},function(t){return t.theme.fontSizeSM},function(t){return t.theme.prefixCls},function(t){return t.theme.opacityLoading},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.lineWidth},function(t){return t.theme.prefixCls},function(t){return t.theme.paddingXXS},function(t){return t.theme.prefixCls},function(t){return t.theme.colorText},function(t){return t.theme.colorBgContainer},function(t){return t.theme.lineWidth},function(t){return t.theme.colorBorder},function(t){return t.theme.colorError},function(t){return t.theme.prefixCls},function(t){return t.theme.colorError},function(t){return t.theme.paddingSM},function(t){return t.theme.prefixCls},function(t){return t.theme.colorPrimary}),ve=e(89102),$="\xA0",Ce="#8c8c8c",Fe=["png","jpg","jpeg","gif","bmp","webp","svg"],$e=function(Se){var we=Se.url;return(0,d.jsx)("img",{src:we,width:32,height:32})},qe=[{icon:(0,d.jsx)($e,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01cVtZXI23tPVhiZoPJ_!!6000000007313-55-tps-40-40.svg"}),color:"#22b35e",ext:["xlsx","xls"]},{icon:(0,d.jsx)($e,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01uDnnuz1XMNEjgFMul_!!6000000002909-55-tps-40-40.svg"}),color:Ce,ext:Fe},{icon:(0,d.jsx)($e,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01PaXli01DDPAO68fsI_!!6000000000182-55-tps-40-40.svg"}),color:Ce,ext:["md","mdx"]},{icon:(0,d.jsx)($e,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01mB5PzD27fuIWK661W_!!6000000007825-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["pdf"]},{icon:(0,d.jsx)($e,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01a8j7Jv1nW1QyFme7k_!!6000000005096-55-tps-40-40.svg"}),color:"#ff6e31",ext:["ppt","pptx"]},{icon:(0,d.jsx)($e,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01XaNi8P1UkhQXoQdUL_!!6000000002556-55-tps-40-40.svg"}),color:"#1677ff",ext:["doc","docx"]},{icon:(0,d.jsx)($e,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),color:"#fab714",ext:["zip","rar","7z","tar","gz"]},{icon:(0,d.jsx)($e,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01zTTe0q1Xg4GkZgJol_!!6000000002952-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["mp4","avi","mov","wmv","flv","mkv"]},{icon:(0,d.jsx)($e,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01qOBdXG1UpHO6f3Vvc_!!6000000002566-55-tps-40-40.svg"}),color:"#8c8c8c",ext:["mp3","wav","flac","ape","aac","ogg"]}];function nn(t,Se){return Se.some(function(we){return t.toLowerCase()===".".concat(we)})}function We(t){for(var Se=t,we=["B","KB","MB","GB","TB","PB","EB"],ke=0;Se>=1024&&ke<we.length-1;)Se/=1024,ke++;return"".concat(Se.toFixed(0)," ").concat(we[ke])}function B(t,Se){var we=(0,I.wv)(),ke=we.getPrefixCls,S=t.item,xe=t.onRemove,de=t.className,fe=t.style,ge=v.useContext(s),ie=ge||{},c=ie.disabled,N=S.name,F=S.size,Y=S.percent,Z=S.status,i=Z===void 0?"done":Z,k=S.description,O=ke("attachment"),K="".concat(O,"-list-card"),G=v.useMemo(function(){var ee=N||"",je=ee.match(/^(.*)\.[^.]+$/);return je?[je[1],ee.slice(je[1].length)]:[ee,""]},[N]),pe=b()(G,2),ae=pe[0],De=pe[1],tn=v.useMemo(function(){return nn(De,Fe)},[De]),an=v.useMemo(function(){return k||(i==="uploading"?"".concat(Y||0,"%"):i==="error"?S.response||$:F?We(F):$)},[i,Y]),un=v.useMemo(function(){var ee=re()(qe),je;try{for(ee.s();!(je=ee.n()).done;){var Xe=je.value,on=Xe.ext,Ln=Xe.icon,jn=Xe.color;if(nn(De,on))return[Ln,jn]}}catch(bn){ee.e(bn)}finally{ee.f()}return[(0,d.jsx)($e,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"},"defaultIcon"),Ce]},[De]),sn=b()(un,2),Re=sn[0],Be=sn[1],ln=v.useState(),dn=b()(ln,2),gn=dn[0],mn=dn[1];v.useEffect(function(){if(S.originFileObj){var ee=!0;return he(S.originFileObj).then(function(je){ee&&mn(je)}),function(){ee=!1}}mn(void 0)},[S.originFileObj]);var xn=null,pn=S.thumbUrl||S.url||gn,hn=t.renderType||"default",fn=tn&&(S.originFileObj||pn)&&hn==="default";return fn?xn=(0,d.jsxs)(d.Fragment,{children:[pn&&(0,d.jsx)("img",{alt:"preview",src:pn}),i!=="done"&&(0,d.jsxs)("div",{className:"".concat(K,"-img-mask"),children:[i==="uploading"&&Y!==void 0&&(0,d.jsx)(H,{percent:Y,prefixCls:K}),i==="error"&&(0,d.jsx)("div",{className:"".concat(K,"-desc"),children:(0,d.jsx)("div",{className:"".concat(K,"-ellipsis-prefix"),children:an})})]})]}):xn=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"".concat(K,"-icon"),style:{color:Be},children:Re}),(0,d.jsxs)("div",{className:"".concat(K,"-content"),children:[(0,d.jsxs)("div",{className:"".concat(K,"-name"),children:[ae!=null?ae:$,De]}),(0,d.jsx)("div",{className:"".concat(K,"-desc"),children:(0,d.jsx)("div",{className:"".concat(K,"-ellipsis-prefix"),children:an})})]})]}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(U,{}),(0,d.jsxs)("div",{className:f()(K,x()(x()(x()(x()(x()({},"".concat(K,"-status-").concat(i),i),"".concat(K,"-type-preview"),fn),"".concat(K,"-type-overview"),!fn),"".concat(K,"-type-").concat(hn),!0),"".concat(K,"-hoverable"),!c&&xe),de),style:fe,ref:Se,children:[xn,(0,d.jsx)("button",{style:{opacity:!c&&xe?1:0},className:"".concat(K,"-remove"),onClick:function(){!c&&xe&&xe(S)},children:(0,d.jsx)(ve.Z,{})})]})]})}var oe=v.forwardRef(B),Ze=1;function L(t){var Se=t.prefixCls,we=t.items,ke=t.onRemove,S=t.overflow,xe=t.listClassName,de=t.listStyle,fe=t.itemClassName,ge=t.itemStyle,ie="".concat(Se,"-list"),c=v.useRef(null),N=v.useState(!1),F=b()(N,2),Y=F[0],Z=F[1];v.useEffect(function(){return Z(!0),function(){Z(!1)}},[]);var i=v.useState(!1),k=b()(i,2),O=k[0],K=k[1],G=v.useState(!1),pe=b()(G,2),ae=pe[0],De=pe[1],tn=function(){var Be=c.current;Be&&(S==="scrollX"?(K(Math.abs(Be.scrollLeft)>=Ze),De(Be.scrollWidth-Be.clientWidth-Math.abs(Be.scrollLeft)>=Ze)):S==="scrollY"&&(K(Be.scrollTop!==0),De(Be.scrollHeight-Be.clientHeight!==Be.scrollTop)))};v.useEffect(function(){tn()},[S]);var an=function(Be){var ln=c.current;ln&&ln.scrollTo({left:ln.scrollLeft+Be*ln.clientWidth,behavior:"smooth"})},un=function(){an(-1)},sn=function(){an(1)};return(0,d.jsxs)("div",{className:f()(ie,x()(x()(x()({},"".concat(ie,"-overflow-").concat(t.overflow),S),"".concat(ie,"-overflow-ping-start"),O),"".concat(ie,"-overflow-ping-end"),ae),xe),ref:c,onScroll:tn,style:de,children:[(0,d.jsx)(m.V4,{keys:we.map(function(Re){return{key:Re.uid,item:Re}}),motionName:"".concat(ie,"-card-motion"),component:!1,motionAppear:Y,motionLeave:!0,motionEnter:!0,children:function(Be){var ln=Be.key,dn=Be.item,gn=Be.className,mn=Be.style;return(0,d.jsx)(oe,{prefixCls:Se,item:dn,onRemove:ke,className:f()(gn,fe),style:E()(E()({},mn),ge),renderType:t.renderType},ln)}}),S==="scrollX"&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(_.ZP,{size:"small",shape:"circle",className:"".concat(ie,"-prev-btn"),icon:(0,d.jsx)(l.Z,{}),onClick:un}),(0,d.jsx)(_.ZP,{size:"small",shape:"circle",className:"".concat(ie,"-next-btn"),icon:(0,d.jsx)(n.Z,{}),onClick:sn})]})]})}var q=e(86250),X=e(21317),Te=e(82484);function Ue(t,Se){var we=t.prefixCls,ke=t.placeholder,S=ke===void 0?{}:ke,xe=t.upload,de=t.className,fe=t.style,ge="".concat(we,"-placeholder"),ie=S||{},c=v.useContext(s),N=c.disabled,F=v.useState(!1),Y=b()(F,2),Z=Y[0],i=Y[1],k=function(){i(!0)},O=function(ae){ae.currentTarget.contains(ae.relatedTarget)||i(!1)},K=function(){i(!1)},G=v.isValidElement(S)?S:(0,d.jsxs)(q.Z,{align:"center",justify:"center",vertical:!0,className:"".concat(ge,"-inner"),children:[(0,d.jsx)(X.Z.Text,{className:"".concat(ge,"-icon"),children:ie.icon}),(0,d.jsx)(X.Z.Title,{className:"".concat(ge,"-title"),level:5,children:ie.title}),(0,d.jsx)(X.Z.Text,{className:"".concat(ge,"-description"),type:"secondary",children:ie.description})]});return(0,d.jsx)("div",{className:f()(ge,x()(x()({},"".concat(ge,"-drag-in"),Z),"".concat(ge,"-disabled"),N),de),onDragEnter:k,onDragLeave:O,onDrop:K,"aria-hidden":N,style:fe,children:(0,d.jsx)(Te.Z.Dragger,E()(E()({showUploadList:!1},xe),{},{ref:Se,style:{padding:0,border:0,background:"transparent"},children:G}))})}var Ee=v.forwardRef(Ue);function Ae(t,Se){var we=t.children,ke=t.upload,S=t.rootClassName,xe=v.useRef(null);return v.useImperativeHandle(Se,function(){return xe.current}),(0,d.jsx)(Te.Z,E()(E()({},ke),{},{showUploadList:!1,rootClassName:S,ref:xe,children:we}))}var en=v.forwardRef(Ae),ze,Je=(0,g.vJ)(ze||(ze=ye()([`
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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.zIndexPopupBase},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.lineWidthBold},function(t){return t.theme.padding},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.colorPrimaryHover},function(t){return t.theme.prefixCls},function(t){return t.theme.paddingXXS},function(t){return t.theme.fontSizeHeading2},function(t){return t.theme.prefixCls},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.colorText},function(t){return t.theme.padding},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSizeHeading2},function(t){return t.theme.boxShadowTertiary},function(t){return t.theme.padding},function(t){return t.theme.padding},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls}),rn=["prefixCls","rootClassName","rootStyle","className","style","items","children","getDropContainer","placeholder","onChange","overflow","disabled","classNames","styles"];function Ye(t,Se){var we=t.prefixCls,ke=t.rootClassName,S=t.rootStyle,xe=t.className,de=t.style,fe=t.items,ge=t.children,ie=t.getDropContainer,c=t.placeholder,N=t.onChange,F=t.overflow,Y=t.disabled,Z=t.classNames,i=Z===void 0?{}:Z,k=t.styles,O=k===void 0?{}:k,K=y()(t,rn),G=(0,I.wv)(),pe=G.direction,ae=G.getPrefixCls,De=ae("attachment"),tn=v.useRef(null),an=v.useRef(null);v.useImperativeHandle(Se,function(){return{nativeElement:tn.current,upload:function(fn){var ee,je=(ee=an.current)===null||ee===void 0||(ee=ee.nativeElement)===null||ee===void 0?void 0:ee.querySelector('input[type="file"]');if(je){var Xe=new DataTransfer;Xe.items.add(fn),je.files=Xe.files,je.dispatchEvent(new Event("change",{bubbles:!0}))}}}});var un=(0,a.C8)([],{value:fe}),sn=b()(un,2),Re=sn[0],Be=sn[1],ln=(0,a.zX)(function(hn){Be(hn.fileList),N==null||N(hn)}),dn=E()(E()({},K),{},{fileList:Re,onChange:ln}),gn=function(fn){var ee=Re.filter(function(je){return je.uid!==fn.uid});ln({file:fn,fileList:ee})},mn,xn=function(fn,ee,je){var Xe=typeof c=="function"?c(fn):c;return(0,d.jsx)(Ee,{placeholder:Xe,upload:dn,prefixCls:De,className:f()(i.placeholder),style:E()(E()({},O.placeholder),ee==null?void 0:ee.style),ref:je})};if(ge)mn=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(en,{upload:dn,rootClassName:ke,ref:an,children:ge}),(0,d.jsx)(M,{getDropContainer:ie,prefixCls:De,className:f()(ke),children:xn("drop")})]});else{var pn=Re.length>0;mn=(0,d.jsxs)("div",{className:f()(De,x()({},"".concat(De,"-rtl"),pe==="rtl"),xe,ke),style:E()(E()({},S),de),dir:pe||"ltr",ref:tn,children:[(0,d.jsx)(L,{prefixCls:De,items:Re,onRemove:gn,overflow:F,upload:dn,listClassName:f()(i.list),listStyle:E()(E()({},O.list),!pn&&{display:"none"}),itemClassName:f()(i.item),itemStyle:E()({},O.item),renderType:t.renderType}),xn("inline",pn?{style:{display:"none"}}:{},an)]})}return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Je,{}),(0,d.jsx)(s.Provider,{value:{disabled:Y},children:mn})]})}var Oe=v.forwardRef(Ye);Oe.FileCard=oe;var cn=Oe},50130:function(Ge,W,e){"use strict";e.d(W,{L:function(){return I},Z:function(){return v}});var w=e(97857),x=e.n(w),P=e(13769),E=e.n(P),A=e(67294),b=e(83962),j=e(76289),y=e(85893),D=["component"],f=A.memo(function(a){var h=(0,b.HJ)(),s=(0,j.TQ)(function(n){return n.onInput}),d=(0,A.useMemo)(function(){if(a.component)return a.component;var n=h;return(n==null?void 0:n[a.code])||function(){return"".concat(a.code," not found")}},[]);if(typeof d=="function"){var M=a.component,l=E()(a,D);return(0,y.jsx)(d,x()(x()({},l),{},{context:{onInput:s}}))}else return d});function v(a){var h=a.cards;return h!=null&&h.length?h.map(function(s,d){var M=(0,y.jsx)(f,x()({index:d,id:a.id,isLast:a.isLast},s),(s==null?void 0:s.id)||d+s.code);return s.code==="Text"?(0,y.jsx)("div",{className:a.className,children:M},d):M}):null}function I(a,h){return{code:a,data:h}}},67369:function(Ge,W,e){"use strict";e.d(W,{p4:function(){return I},hw:function(){return a},ZP:function(){return v}});var w=e(67294),x=e(56044),P=e(64057),E=e(68400),A=e.n(E),b=e(9053),j,y=(0,b.vJ)(j||(j=A()([`
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
`])),function(h){return h.theme.prefixCls},function(h){return h.theme.prefixCls},function(h){return h.theme.colorText},function(h){return h.theme.prefixCls},function(h){return h.theme.colorTextTertiary},function(h){return h.theme.colorBorder}),D=y,f=e(85893);function v(h){var s=(0,x.wv)(),d=s.getPrefixCls,M=d("bubble-footer"),l=h.left,n=h.right;return l&&!l.type||n&&!n.type?null:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(D,{}),(0,f.jsxs)("div",{className:M,children:[(0,f.jsx)("div",{className:"".concat(M,"-left"),children:h.left}),(0,f.jsx)("div",{className:"".concat(M,"-right"),children:h.right})]})]})}function I(h){var s=(0,x.wv)(),d=s.getPrefixCls,M=d("bubble-footer-actions");return(0,f.jsx)("div",{className:M,children:h.data.map(function(l,n){return l.children?w.cloneElement(l.children,{key:n}):(0,f.jsx)(P.Z,{bordered:!1,icon:l.icon,size:"small",onClick:l.onClick},n)})})}function a(h){var s=(0,x.wv)(),d=s.getPrefixCls,M=d("bubble-footer-count");return(0,f.jsx)("div",{className:M,children:h.data.map(function(l){return(0,f.jsxs)("div",{className:"".concat(M,"-item"),children:[l[0],"\uFF1A",l[1]]},l[0])})})}v.Actions=I,v.Count=a},10146:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return f}});var w=e(68400),x=e.n(w),P=e(9053),E=e(56044),A=e(9343),b=e(36674),j=e(85893),y,D=(0,P.vJ)(y||(y=x()([`
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

`])),function(v){return v.theme.prefixCls},function(v){return v.theme.colorFillSecondary},function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls},function(v){return v.theme.colorText},function(v){return v.theme.colorError});function f(v){var I=v.title,a=I===void 0?"Answers have stopped":I,h=v.type,s=h===void 0?"interrupted":h,d=v.desc,M=(0,E.wv)(),l=M.getPrefixCls,n=l("interrupted");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(D,{}),(0,j.jsxs)("div",{className:"".concat(n),children:[(0,j.jsxs)("div",{className:"".concat(n,"-header"),children:[(0,j.jsx)("div",{className:"".concat(n,"-icon-wrapper"),children:s==="interrupted"?(0,j.jsx)(A.Z,{className:"".concat(n,"-header-interrupted")}):(0,j.jsx)(b.Z,{className:"".concat(n,"-header-error")})}),(0,j.jsx)("span",{children:a})]}),d&&(0,j.jsx)("div",{className:"".concat(n,"-desc"),children:d})]})]})}},9146:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return We}});var w=e(97857),x=e.n(w),P=e(93967),E=e.n(P),A=e(67294),b=e(68400),j=e.n(b),y=e(9053),D,f=(0,y.vJ)(D||(D=j()([`
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
`])),function(B){return B.theme.prefixCls},function(B){return B.theme.prefixCls},function(B){return B.theme.colorText},function(B){return B.theme.fontSize},function(B){return B.theme.lineHeight},function(B){return B.theme.prefixCls},function(B){return B.theme.borderRadiusLG},function(B){return B.theme.colorPrimaryBg},function(B){return B.theme.prefixCls},function(B){return B.theme.colorText},function(B){return B.theme.colorText},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorTextTertiary},function(B){return B.theme.colorTextTertiary},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorTextSecondary},function(B){return B.theme.colorTextSecondary},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorBgBase}),v=e(56044),I=e(82679),a=e(50130),h=e(85893);function s(){var B=(0,v.wv)(),oe=B.getPrefixCls,Ze=oe("bubble-loading");return(0,h.jsxs)("div",{className:Ze,children:[(0,h.jsx)("div",{className:"".concat(Ze,"-dot1")}),(0,h.jsx)("div",{className:"".concat(Ze,"-dot2")}),(0,h.jsx)("div",{className:"".concat(Ze,"-dot3")}),(0,h.jsx)("div",{className:"".concat(Ze,"-text"),children:"-"})]})}var d=e(9783),M=e.n(d),l=e(68997),n=function(oe){var Ze=oe.avatar,L=oe.msgStatus,q=oe.isAssistant,X=oe.prefixCls,Te=oe.className,Ue=oe.style,Ee=A.isValidElement(Ze)?Ze:(0,h.jsx)(l.Z,x()({},Ze));return(0,h.jsx)("div",{className:E()("".concat(X,"-avatar"),M()({},"".concat(X,"-avatar-loading"),q&&L==="generating"),Te),style:Ue,children:Ee})},_=n,m=A.createContext({}),Q=function(oe){var Ze=oe.isLast,L=oe.className,q=oe.rootClassName,X=oe.style,Te=oe.classNames,Ue=Te===void 0?{}:Te,Ee=oe.styles,Ae=Ee===void 0?{}:Ee,en=oe.avatar,ze=oe.content,Je=ze===void 0?"":ze,rn=oe.cards,Ye=oe.msgStatus,Oe=oe.id,cn=oe.role,t=oe.variant,Se={assistant:"start",user:"end"}[cn]||"start",we=(0,v.wv)(),ke=we.getPrefixCls,S=ke("bubble"),xe=E()(S,q,L,"".concat(S,"-").concat(Se)),de,fe=!(Je!=null&&Je.length)&&!(rn!=null&&rn.length);oe.msgStatus==="generating"&&fe?de=(0,h.jsx)(s,{}):de=Je?(0,h.jsx)(I.Z,{content:Je,cursor:oe.msgStatus==="generating"}):null;var ge=Se==="assistant"||Se==="start",ie="".concat(S,"-content-").concat(t||(ge?"borderless":"filled")),c=(0,h.jsxs)("div",{style:!ge&&de?{flexDirection:"column-reverse"}:{},className:"".concat(S,"-content-wrapper"),children:[(0,h.jsx)(a.Z,{cards:rn,id:Oe,isLast:Ze,className:E()("".concat(S,"-content"),"".concat(S,"-content-wrapper-card"),ie,Ue.content)}),de&&(0,h.jsx)("div",{style:x()({},Ae.content),className:E()("".concat(S,"-content"),"".concat(S,"-content-wrapper-card"),ie,Ue.content),children:de})]});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{}),(0,h.jsxs)("div",{style:X,className:xe,id:Oe,"data-role":cn,children:[en&&(0,h.jsx)(_,{avatar:en,msgStatus:Ye,isAssistant:ge,prefixCls:S,className:Ue.avatar,style:Ae.avatar}),c]})]})},re=A.memo(Q),ne=e(13769),C=e.n(ne),he=e(5574),V=e.n(he),z=e(80322),H=e(64057),te=e(25109),ye=function(oe,Ze){var L=(0,v.wv)(),q=L.getPrefixCls,X=(0,z.a)(),Te=X.isAtBottom,Ue=X.scrollToBottom;A.useImperativeHandle(Ze,function(){return{scrollToBottom:function(Ae){function en(ze){return Ae.apply(this,arguments)}return en.toString=function(){return Ae.toString()},en}(function(Ae){Ae=Ae||{animation:"instant"},Ue(Ae)})}});var Ee=q("bubble-list-scroll-to-bottom");return(0,h.jsx)("div",{className:E()(Ee,"".concat(Ee,"-").concat(Te?"hide":"show")),children:(0,h.jsx)(H.Z,{icon:(0,h.jsx)(te.Z,{}),shape:"circle",onClick:function(){return Ue({animation:"instant"})}})})},g=A.forwardRef(ye),Pe,U=(0,y.vJ)(Pe||(Pe=j()([`
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
`])),function(B){return B.theme.prefixCls},function(B){return B.theme.prefixCls},function(B){return B.theme.prefixCls},function(B){return B.theme.colorPrimaryBorder},function(B){return B.theme.colorPrimaryBg},function(B){return B.theme.colorPrimary}),ve=e(78234),$=["key"],Ce=function(oe,Ze){var L,q,X=oe.items,Te=X===void 0?[]:X,Ue=oe.smooth,Ee=Ue===void 0?!0:Ue,Ae=(0,A.useState)(!1),en=V()(Ae,2),ze=en[0],Je=en[1],rn=A.useRef(),Ye=(0,v.wv)(),Oe=Ye.getPrefixCls,cn=Oe("bubble-list");A.useImperativeHandle(Ze,function(){return{scrollToBottom:function(){rn.current.scrollToBottom()}}}),(0,ve.Z)(function(){Je(!0)});var t=ze&&Ee?"smooth":"instant";return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(U,{}),(0,h.jsxs)(z.h,{id:oe.id,className:E()("".concat(cn,"-wrapper"),(L=oe.classNames)===null||L===void 0?void 0:L.wrapper),resize:t,initial:"instant",style:oe.style,children:[(0,h.jsx)(z.h.Content,{className:E()("".concat(cn),(q=oe.classNames)===null||q===void 0?void 0:q.list),children:oe.children?oe.children:Te.map(function(Se,we){var ke=Se.key,S=C()(Se,$),xe=we===Te.length-1;return(0,A.createElement)(re,x()(x()({},S),{},{isLast:xe,key:S.id||ke}))})}),(0,h.jsx)(g,{ref:rn})]})]})},Fe=A.forwardRef(Ce),$e=Fe,qe=e(67369),nn=e(10146);re.List=$e,re.Spin=s,re.Footer=qe.ZP,re.Interrupted=nn.Z;var We=re},76289:function(Ge,W,e){"use strict";e.d(W,{TQ:function(){return h},vi:function(){return I}});var w=e(97857),x=e.n(w),P=e(13769),E=e.n(P),A=e(5574),b=e.n(A),j=e(67294),y=e(79785),D=e(59214),f=e(85893),v=["children"];function I(s){var d=(0,y.Z)([]),M=b()(d,3),l=M[0],n=M[1],_=M[2],m=(0,y.Z)("0"),Q=b()(m,3),re=Q[0],ne=Q[1],C=Q[2],he=(0,y.Z)(0),V=b()(he,3),z=V[0],H=V[1],te=V[2],ye=(0,y.Z)([]),g=b()(ye,3),Pe=g[0],U=g[1],ve=g[2],$=(0,y.Z)(!1),Ce=b()($,3),Fe=Ce[0],$e=Ce[1],qe=Ce[2],nn=(0,y.Z)(!1),We=b()(nn,3),B=We[0],oe=We[1],Ze=We[2],L=(0,y.Z)(!0),q=b()(L,3),X=q[0],Te=q[1],Ue=q[2],Ee=s.children,Ae=E()(s,v),en=x()({sessionList:l,setSessionList:n,getSessionList:_,currentSessionKey:re,setCurrentSessionKey:ne,getCurrentSessionKey:C,messages:Pe,setMessages:U,getMessages:ve,loading:Fe,setLoading:$e,getLoading:qe,disabled:B,setDisabled:oe,getDisabled:Ze,sessionListShow:X,setSessionListShow:Te,getSessionListShow:Ue,currentRegenerateIndex:z,setCurrentRegenerateIndex:H,getCurrentRegenerateIndex:te},Ae);return(0,f.jsx)(a.Provider,{value:en,children:Ee})}var a=(0,D.kr)(void 0);function h(s){try{var d=(0,D.Sz)(a,s);return d}catch(M){return{}}}},37254:function(Ge,W,e){"use strict";e.d(W,{G:function(){return x}});var w=e(76289);function x(){var P=(0,w.TQ)(function(f){return{loading:f.loading,getLoading:f.getLoading,disabled:f.disabled,getDisabled:f.getDisabled,setLoading:f.setLoading,setDisabled:f.setDisabled}}),E=P.loading,A=P.disabled,b=P.setLoading,j=P.setDisabled,y=P.getLoading,D=P.getDisabled;return{loading:E,disabled:A,setLoading:b,setDisabled:j,getLoading:y,getDisabled:D}}},4421:function(Ge,W,e){"use strict";e.d(W,{y:function(){return j}});var w=e(19632),x=e.n(w),P=e(97857),E=e.n(P),A=e(67294),b=e(76289);function j(){var y=(0,b.TQ)(function(d){return{messages:d.messages,setMessages:d.setMessages,getMessages:d.getMessages}}),D=y.messages,f=y.setMessages,v=y.getMessages,I=A.useCallback(function(){var d,M=((d=arguments.length<=0?void 0:arguments[0])===null||d===void 0?void 0:d.id)||(arguments.length<=0?void 0:arguments[0]),l=(arguments.length<=1?void 0:arguments[1])||(arguments.length<=0?void 0:arguments[0]);f==null||f(function(n){var _=n.findIndex(function(Q){return Q.id===M});if(_>-1){var m=E()(E()({},n[_]),l);return[].concat(x()(n.slice(0,_)),[m],x()(n.slice(_+1)))}else return[].concat(x()(n),[l])})},[]),a=A.useCallback(function(d){f(function(M){return M.filter(function(l){return l.id!==d.id})})},[]),h=A.useCallback(function(){f([])},[]),s=A.useCallback(function(d){return v().find(function(M){return M.id===d})},[]);return{messages:D,getMessage:s,setMessages:f,getMessages:v,updateMessage:I,removeMessage:a,removeAllMessages:h}}},61316:function(Ge,W,e){"use strict";e.d(W,{x:function(){return D}});var w=e(97857),x=e.n(w),P=e(19632),E=e.n(P),A=e(67294),b=e(76289),j=e(88773),y=e(73935);function D(){var f=(0,b.TQ)(function(z){return{getCurrentSessionKey:z.getCurrentSessionKey,currentRegenerateIndex:z.currentRegenerateIndex,setCurrentRegenerateIndex:z.setCurrentRegenerateIndex,getCurrentRegenerateIndex:z.getCurrentRegenerateIndex,sessionListShow:z.sessionListShow,setSessionListShow:z.setSessionListShow,sessionList:z.sessionList,setSessionList:z.setSessionList,currentSessionKey:z.currentSessionKey,setCurrentSessionKey:z.setCurrentSessionKey,getSessionList:z.getSessionList}}),v=f.getCurrentSessionKey,I=f.sessionList,a=f.setSessionList,h=f.currentSessionKey,s=f.setCurrentSessionKey,d=f.sessionListShow,M=f.setSessionListShow,l=f.currentRegenerateIndex,n=f.setCurrentRegenerateIndex,_=f.getCurrentRegenerateIndex,m=f.getSessionList,Q=A.useCallback(function(){var z=(0,j.Z)(),H={label:Date.now().toString(),key:z,messages:[[]]};return y.flushSync(function(){a(function(te){var ye=[].concat(E()(te),[H]);return ye}),s(z)}),z},[]),re=A.useCallback(function(z){a(function(H){var te=H.filter(function(ye){return ye.key!==z});return te})},[]),ne=A.useCallback(function(z){var H=v(),te=_();a(function(ye){return ye.map(function(g){return g.key===H?(g.messages[te]=z,x()({},g)):g})})},[]),C=A.useCallback(function(z,H){var te;return(te=m().find(function(ye){return ye.key===z}))===null||te===void 0?void 0:te.messages[H]},[]),he=A.useCallback(function(){return{sessionList:m(),currentSessionKey:v(),currentRegenerateIndex:_()}},[]),V=A.useCallback(function(z){var H=z.sessionList,te=z.currentSessionKey,ye=z.currentRegenerateIndex;a(H),s(te),n(ye)},[]);return{currentRegenerateIndex:l,setCurrentRegenerateIndex:n,getCurrentRegenerateIndex:_,sessionList:I,setSessionList:a,getSessionList:m,currentSessionKey:h,setCurrentSessionKey:s,sessionListShow:d,setSessionListShow:M,createSession:Q,deleteSession:re,updateSessionMessages:ne,getMessagesBySession:C,getSession:he,updateSession:V}}},96857:function(Ge,W,e){"use strict";e.d(W,{ZP:function(){return ke}});var w=e(97857),x=e.n(w),P=e(13769),E=e.n(P),A=e(5574),b=e.n(A),j=e(67294),y=e(93967),D=e.n(y),f=e(56044),v=e(85265),I=e(17909),a=e(76289),h=e(68400),s=e.n(h),d=e(9053),M,l=(0,d.vJ)(M||(M=s()([`

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
`])),function(S){return S.theme.prefixCls},function(S){return S.theme.fontFamily},function(S){return S.theme.colorBgBase},function(S){return S.theme.colorBgBase},function(S){return S.theme.colorBgBase},function(S){return S.theme.colorFillTertiary}),n=e(85893);function _(S){var xe=(0,a.TQ)(function(F){return{sessionListShow:F.sessionListShow,setSessionListShow:F.setSessionListShow}}),de=xe.sessionListShow,fe=xe.setSessionListShow,ge=(0,f.wv)(),ie=ge.getPrefixCls,c=ie("chat-anywhere-layout"),N=Q();return(0,j.useEffect)(function(){fe(!N)},[N]),S.left?N?(0,n.jsx)(v.Z,{width:"80vw",styles:{body:{padding:0}},open:de,onClose:function(){fe(!1)},title:null,closable:!1,placement:"left",children:(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:S.left})}):(0,n.jsx)("div",{className:D()("".concat(c,"-left"),de?"":"".concat(c,"-left-hide")),children:S.left}):null}function m(S){var xe=(0,f.wv)(),de=xe.getPrefixCls,fe=de("chat-anywhere-layout"),ge=(0,a.TQ)(function(ie){return ie.uiConfig});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{}),(0,n.jsx)("div",{className:fe,children:(0,n.jsxs)("div",{className:"".concat(fe,"-main"),children:[(0,n.jsx)(_,x()({},S)),(0,n.jsxs)("div",{className:"".concat(fe,"-right"),style:{background:ge==null?void 0:ge.background},children:[S.top,S.right]})]})})]})}var Q=function(){var xe=(0,I.Z)(),de=(0,a.TQ)(function(fe){return fe.uiConfig});return!xe.md||(de==null?void 0:de.narrowScreen)},re=e(9368),ne=e(64057),C=e(21403),he=e(61316),V=e(4421),z,H=(0,d.vJ)(z||(z=s()([`
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

`])),function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls}),te=e(50287),ye=e(67392),g=e(13660),Pe=e(12624);function U(){var S=(0,f.wv)(),xe=S.getPrefixCls,de=xe("chat-anywhere-session-list"),fe=(0,a.TQ)(function(ge){return ge.sessionListShow});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(H,{}),(0,n.jsxs)("div",{className:D()("".concat(de),fe?"":"".concat(de,"-hide")),children:[(0,n.jsx)($,{}),(0,n.jsx)(ve,{})]})]})}function ve(){var S=(0,f.wv)(),xe=S.getPrefixCls,de=xe("chat-anywhere-session-list"),fe=(0,he.x)(),ge=fe.currentSessionKey,ie=fe.setCurrentSessionKey,c=fe.currentRegenerateIndex,N=fe.sessionList,F=fe.getMessagesBySession,Y=fe.setSessionListShow,Z=(0,V.y)(),i=Z.setMessages,k=(0,a.TQ)(function(G){return G.getLoading}),O=(0,a.TQ)(function(G){return G.onSessionKeyChange}),K=Q();return(0,j.useEffect)(function(){var G=F(ge,c);i(G)},[ge,c]),(0,n.jsx)("div",{className:"".concat(de,"-session"),children:(0,n.jsx)(re.Z,{menu:[{key:"delete",icon:(0,n.jsx)(te.Z,{}),danger:!0,onClick:function(pe){}}],activeKey:ge,items:N,onActiveChange:function(pe){k()||(K&&Y(!1),requestIdleCallback(function(){ie(pe),O(pe)}))}})})}function $(){var S=(0,f.wv)(),xe=S.getPrefixCls,de=xe("chat-anywhere-session-list"),fe=(0,he.x)(),ge=fe.currentSessionKey,ie=fe.setCurrentSessionKey,c=fe.deleteSession,N=fe.createSession,F=fe.sessionList,Y=fe.sessionListShow,Z=fe.setSessionListShow,i=(0,a.TQ)(function(O){return O.uiConfig}),k=Q();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(de,"-logo"),children:[i==null?void 0:i.logo,(0,n.jsx)(ne.Z,{bordered:!1,onClick:function(){return Z(!Y)},icon:Y?(0,n.jsx)(ye.Z,{}):(0,n.jsx)(g.Z,{})})]}),(0,n.jsx)("div",{className:"".concat(de,"-adder"),children:(0,n.jsx)(C.Z,{type:"primary",block:!0,icon:(0,n.jsx)(Pe.Z,{}),onClick:function(){k&&Z(!1),N()},children:"New Session"})})]})}var Ce=e(9783),Fe=e.n(Ce),$e=e(9146),qe=e(15009),nn=e.n(qe),We=e(99289),B=e.n(We),oe=e(93164),Ze=e(36417),L=e(37254),q=e(82484),X,Te=(0,d.vJ)(X||(X=s()([`
.`,`-chat-anywhere-sender-wrapper {
  position: relative;

  &-header {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
  }
}

`])),function(S){return S.theme.prefixCls}),Ue=e(86578),Ee=(0,j.forwardRef)(function(S,xe){var de=j.useState(""),fe=b()(de,2),ge=fe[0],ie=fe[1],c=(0,L.G)(),N=(0,a.TQ)(function(ee){return ee.onUpload.map(function(je){return x()(x()({},je),{},{disabled:je.disabled||c.disabled})})}),F=new Array((N==null?void 0:N.length)||0).fill([]),Y=(0,j.useState)(!1),Z=b()(Y,2),i=Z[0],k=Z[1],O=j.useState(F),K=b()(O,2),G=K[0],pe=K[1],ae=(0,j.useRef)(F);(0,j.useEffect)(function(){pe(F)},[F.length]),(0,j.useEffect)(function(){ae.current=G},[G]);var De=(0,a.TQ)(function(ee){return ee.uiConfig}),tn=(0,f.wv)(),an=tn.getPrefixCls,un=an("chat-anywhere-sender"),sn=(0,a.TQ)(function(ee){return ee.onStop}),Re=(0,a.TQ)(function(ee){var je={beforeUI:void 0,afterUI:void 0,morePrefixActions:void 0,maxLength:void 0,zoomable:!0,beforeSubmit:function(){return Promise.resolve(!0)},header:[],enableFocusExpand:!1,variant:"default",hide:!1};return x()(x()({},je),ee.onInput)});if(j.useImperativeHandle(xe,function(){return{setInputContent:function(je,Xe){ie(je),pe(Xe||[[]])},getAttachedFiles:function(){return ae.current}}},[]),(0,j.useEffect)(function(){c.setDisabled(Re.disabled)},[Re.disabled]),Re.hide)return null;var Be=function(){var ee=B()(nn()().mark(function je(Xe,on){return nn()().wrap(function(jn){for(;;)switch(jn.prev=jn.next){case 0:pe(function(bn){return bn.map(function(Tn,Sn){return Sn===Xe?on:Tn})});case 1:case"end":return jn.stop()}},je)}));return function(Xe,on){return ee.apply(this,arguments)}}(),ln=Re.variant!=="aigc"&&N!==null&&N!==void 0&&N.length?N.map(function(ee,je){return(0,j.createElement)(q.Z,x()(x()({},ee),{},{fileList:G[je],key:je,onChange:function(on){ee.beforeUpload&&on.file.status&&Be(je,on.fileList),ee.beforeUpload||Be(je,on.fileList)},showUploadList:!1}),(0,n.jsx)(ne.Z,{icon:ee.icon,bordered:!1}))}):[],dn=(0,n.jsx)(Ue.Z.SenderHeader,{onUpload:N,attachedFiles:G,onFileChange:Be}),gn=(0,n.jsx)(oe.Z.Header,{closable:!1,open:G==null?void 0:G.some(function(ee){return ee.length}),children:G.map(function(ee,je){return ee.length?(0,n.jsx)(Ze.Z,{items:ee,onChange:function(on){return Be(je,on.fileList)}},je):null})}),mn=Re.variant==="aigc"?dn:gn,xn=G.map(function(ee){return ee.filter(function(je){return je.status==="done"})}),pn=G.some(function(ee){return ee.some(function(je){return je.status==="uploading"})}),hn=(0,j.useMemo)(function(){var ee;return(ee=N==null?void 0:N.some(function(je,Xe){if(je.required){var on=G[Xe]||[];return on.length===0}return!1}))!==null&&ee!==void 0?ee:!1},[N,G]),fn=hn;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Te,{}),(0,n.jsxs)("div",{className:D()("".concat(un,"-wrapper"),Fe()(Fe()({},"".concat(un,"-wrapper-focus"),i&&Re.enableFocusExpand),"".concat(un,"-wrapper-blur"),!i&&Re.enableFocusExpand)),children:[De.quickInput&&(0,n.jsx)("div",{className:D()("".concat(un,"-wrapper-header")),children:De.quickInput}),Re.beforeUI,(0,n.jsx)(oe.Z,{placeholder:Re.placeholder,enableFocusExpand:Re.enableFocusExpand,value:ge,onChange:ie,maxLength:Re.maxLength,disabled:pn||c.disabled,sendDisabled:fn,scalable:Re==null?void 0:Re.zoomable,header:mn,prefix:(0,n.jsxs)(n.Fragment,{children:[ln,Re==null?void 0:Re.morePrefixActions]}),onSubmit:B()(nn()().mark(function ee(){var je;return nn()().wrap(function(on){for(;;)switch(on.prev=on.next){case 0:return on.next=2,(Re.beforeSubmit||function(){return Promise.resolve(!0)})();case 2:if(je=on.sent,je){on.next=5;break}return on.abrupt("return");case 5:Re.onSubmit({query:ge,fileList:xn}),ie(""),pe(F);case 8:case"end":return on.stop()}},ee)})),onCancel:function(){sn==null||sn(),c.setLoading(!1)},onFocus:function(){return k(!0)},onBlur:function(){return k(!1)},loading:c.loading}),Re.afterUI]})]})}),Ae=e(69637),en=e(10325),ze,Je=(0,d.vJ)(ze||(ze=s()([`
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


`])),function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls}),rn=(0,j.forwardRef)(function(S,xe){var de=(0,a.TQ)(function(O){return O.messages}),fe=(0,f.wv)(),ge=fe.getPrefixCls,ie=ge("chat-anywhere"),c=(0,a.TQ)(function(O){return O.uiConfig}),N=(0,j.useState)(!1),F=b()(N,2),Y=F[0],Z=F[1];(0,Ae.Z)(function(){Z(!0)},300);var i=D()("".concat(ie,"-chat"),Fe()({},"".concat(ie,"-chat-hide"),!Y)),k=!(de!=null&&de.length);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Je,{}),(0,n.jsxs)("div",{className:i,children:[(0,n.jsx)($e.Z.List,{style:{height:0,flex:k?0:1},ref:xe.chatRef,items:de}),k?(0,n.jsx)("div",{className:"".concat(i,"-welcome"),children:c==null?void 0:c.welcome}):null,(0,n.jsx)("div",{className:"".concat(i,"-sender"),style:c!=null&&c.disclaimer?{marginBottom:16}:{},children:(0,n.jsx)(Ee,{ref:xe.inputRef})}),(c==null?void 0:c.disclaimer)&&(0,n.jsx)(en.Z,{style:{position:"absolute",bottom:0,width:"100%"},desc:c==null?void 0:c.disclaimer})]})]})}),Ye,Oe=(0,d.vJ)(Ye||(Ye=s()([`
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

`])),function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls},function(S){return S.theme.prefixCls});function cn(){var S=(0,f.wv)(),xe=S.getPrefixCls,de=xe("chat-anywhere-header"),fe=(0,a.TQ)(function(F){return F.uiConfig}),ge=(0,he.x)(),ie=ge.sessionListShow,c=ge.setSessionListShow,N=Q();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Oe,{}),(0,n.jsxs)("div",{className:de,children:[N&&(0,n.jsx)(ne.Z,{style:{marginLeft:12},bordered:!1,onClick:function(){return c(!ie)},icon:ie?(0,n.jsx)(ye.Z,{}):(0,n.jsx)(g.Z,{})}),fe.header]})]})}var t=e(83962),Se=j.forwardRef(function(xe,de){var fe=(0,V.y)(),ge=(0,L.G)(),ie=(0,he.x)();return j.useImperativeHandle(de,function(){return x()(x()(x()({},fe),ge),ie)}),null}),we=["cardConfig"],ke=(0,j.forwardRef)(function(S,xe){var de,fe=(0,j.useState)(0),ge=b()(fe,2),ie=ge[0],c=ge[1],N=S.cardConfig,F=E()(S,we),Y=(0,j.useRef)(null),Z=(0,j.useRef)(null),i=(0,j.useRef)(null);return j.useImperativeHandle(xe,function(){return x()(x()(x()(x()({},Y.current),Z.current),i.current),{},{reload:function(){c(function(O){return O+1})}})}),(0,j.createElement)(a.vi,x()(x()({},F),{},{key:ie}),(0,n.jsxs)(t.xy,{cardConfig:N,children:[(0,n.jsx)(m,{top:(de=F.uiConfig)!==null&&de!==void 0&&de.header?(0,n.jsx)(cn,{}):null,left:F.onSessionKeyChange?(0,n.jsx)(U,{}):null,right:(0,n.jsx)(rn,{ref:{chatRef:Y,inputRef:Z}})}),(0,n.jsx)(Se,{ref:i})]}))})},9368:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return Ze}});var w=e(97857),x=e.n(w),P=e(9783),E=e.n(P),A=e(5574),b=e.n(A),j=e(13769),y=e.n(j),D=e(93967),f=e.n(D),v=e(67294),I=e(21317),a=e(85893),h=v.createContext(null),s=function(q){var X=q.children,Te=v.useContext(h),Ue=Te.prefixCls;return(0,a.jsx)("div",{className:f()("".concat(Ue,"-group-title")),children:X&&(0,a.jsx)(I.Z.Text,{children:X})})},d=s,M=e(30339),l=e(54604),n=e(7654),_=e(64057),m=e(21403),Q=["prefixCls","info","className","direction","onClick","active","menu"],re=["key"],ne={};function C(L){var q=(0,v.useState)(ne[L]),X=b()(q,2),Te=X[0],Ue=X[1];return[Te,function(Ee){for(var Ae in ne)ne[Ae]=!1;ne[L]=Ee,Ue(Ee)}]}var he=function(q){var X,Te=C(q.info.key),Ue=b()(Te,2),Ee=Ue[0],Ae=Ue[1],en=(0,v.useState)(!1),ze=b()(en,2),Je=ze[0],rn=ze[1],Ye=q.prefixCls,Oe=q.info,cn=q.className,t=q.direction,Se=q.onClick,we=q.active,ke=q.menu,S=y()(q,Q),xe=(0,M.Z)(S,{aria:!0,data:!0,attr:!0}),de=Oe.disabled,fe=f()(cn,"".concat(Ye,"-item"),E()({},"".concat(Ye,"-item-active"),we&&!de),E()({},"".concat(Ye,"-item-disabled"),de),E()({},"".concat(Ye,"-item-timeline"),Oe.timeline)),ge=function(){!de&&Se&&Se(Oe)};return(0,a.jsxs)("li",x()(x()({},xe),{},{className:fe,onClick:ge,children:[(0,a.jsxs)("div",{className:"".concat(Ye,"-content"),children:[Oe.icon&&(0,a.jsx)("div",{className:"".concat(Ye,"-icon"),children:Oe.icon}),Oe.timeline&&(0,a.jsx)("div",{className:"".concat(Ye,"-timeline")}),(0,a.jsx)(V,{editable:Ee,setEditable:Ae,prefixCls:Ye,info:Oe,onEdit:ke==null||(X=ke.find(function(ie){return ie.key==="edit"}))===null||X===void 0?void 0:X.onEdit}),ke&&!de&&(0,a.jsx)(n.Z,{styles:{body:{padding:4}},trigger:["click"],open:Je,onOpenChange:rn,content:(0,a.jsx)("div",{className:"".concat(Ye,"-menu-popover"),children:ke.map(function(ie){var c=ie.key,N=y()(ie,re),F=x()(x()({},N),{},{onClick:function(Z){if(c==="edit")Ae(!0);else{var i;(i=N.onClick)===null||i===void 0||i.call(N,Oe)}rn(!1)}});return(0,a.jsx)(H,x()(x()({},F),{},{info:Oe}),c)})}),placement:"bottom",children:(0,a.jsx)(_.Z,{bordered:!1,icon:(0,a.jsx)(l.Z,{}),disabled:de,className:"".concat(Ye,"-menu-icon"),onClick:function(c){return c.stopPropagation()}})})]}),Oe.desc&&(0,a.jsx)("div",{className:"".concat(Ye,"-desc"),style:Oe.timeline?{marginLeft:16}:{},children:Oe.desc})]}))};function V(L){var q=L.editable,X=L.prefixCls,Te=L.info,Ue=L.setEditable,Ee=L.onEdit,Ae=(0,v.useState)(Te.label),en=b()(Ae,2),ze=en[0],Je=en[1];return(0,v.useEffect)(function(){Je(Te.label)},[Te.label]),q?(0,a.jsx)(z,{prefixCls:X,value:ze,onBlur:function(Ye){var Oe;if(Ye===ze)return Ue(!1);(Oe=Ee(Ye,Te))===null||Oe===void 0||Oe.then(function(){Je(Ye)}).catch(function(){Je(ze)}).finally(function(){Ue(!1)})},setEditable:Ue}):(0,a.jsx)("div",{className:"".concat(X,"-label"),children:ze})}function z(L){var q=L.prefixCls,X=L.value,Te=L.onBlur,Ue=L.setEditable,Ee=(0,v.useState)(X),Ae=b()(Ee,2),en=Ae[0],ze=Ae[1],Je=(0,v.useRef)();return(0,v.useEffect)(function(){Je.current.focus()},[]),(0,v.useEffect)(function(){ze(X)},[X]),(0,a.jsx)("input",{ref:Je,className:"".concat(q,"-label-edit"),value:en,onChange:function(Ye){return ze(Ye.target.value)},onBlur:function(){return Te(en)}})}function H(L){var q=L.label,X=L.icon,Te=L.danger,Ue=L.info,Ee=L.disabled,Ae=function(ze){var Je;Ee||(ze.stopPropagation(),(Je=L.onClick)===null||Je===void 0||Je.call(L,Ue))};return X&&q?(0,a.jsx)(m.Z,{disabled:Ee,icon:X,danger:Te,type:"text",onClick:Ae,children:q}):X?(0,a.jsx)(_.Z,{disabled:Ee,icon:X,danger:Te,bordered:!1,onClick:Ae}):q?(0,a.jsx)(m.Z,{disabled:Ee,danger:Te,type:"text",onClick:Ae,children:q}):null}var te=he,ye=e(60869),g=e(56044),Pe=e(52677),U=e.n(Pe),ve="__ungrouped",$=function(q){var X=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],Te=v.useMemo(function(){if(!q)return[!1,void 0,void 0];var ze={sort:void 0,title:void 0};return U()(q)==="object"&&(ze=x()(x()({},ze),q)),[!0,ze.sort,ze.title]},[q]),Ue=b()(Te,3),Ee=Ue[0],Ae=Ue[1],en=Ue[2];return v.useMemo(function(){if(!Ee){var ze=[{name:ve,data:X,title:void 0}];return[ze,Ee]}var Je=X.reduce(function(Oe,cn){var t=cn.group||ve;return Oe[t]||(Oe[t]=[]),Oe[t].push(cn),Oe},{}),rn=Ae?Object.keys(Je).sort(Ae):Object.keys(Je),Ye=rn.map(function(Oe){return{name:Oe===ve?void 0:Oe,title:en,data:Je[Oe]}});return[Ye,Ee]},[X,q])},Ce=$,Fe=e(68400),$e=e.n(Fe),qe=e(9053),nn,We=(0,qe.vJ)(nn||(nn=$e()([`
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
}`])),function(L){return L.theme.prefixCls},function(L){return L.theme.paddingXXS},function(L){return L.theme.prefixCls},function(L){return L.theme.paddingXL},function(L){return L.theme.prefixCls},function(L){return L.theme.colorTextSecondary},function(L){return L.theme.colorBgBase},function(L){return L.theme.colorBorder},function(L){return L.theme.colorTextSecondary},function(L){return L.theme.borderRadiusLG},function(L){return L.theme.colorBorder},function(L){return L.theme.colorFillTertiary},function(L){return L.theme.colorFillTertiary},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.colorText},function(L){return L.theme.prefixCls},function(L){return L.theme.colorTextDisabled},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.colorFillTertiary},function(L){return L.theme.colorText},function(L){return L.theme.colorText},function(L){return L.theme.fontFamily},function(L){return L.theme.fontSizeXL},function(L){return L.theme.controlHeightLG},function(L){return L.theme.controlHeightLG},function(L){return L.theme.paddingXS}),B=["prefixCls","rootClassName","items","activeKey","defaultActiveKey","onActiveChange","menu","styles","classNames","groupable","className","style"],oe=function(q){var X=q.prefixCls,Te=q.rootClassName,Ue=q.items,Ee=q.activeKey,Ae=q.defaultActiveKey,en=q.onActiveChange,ze=q.menu,Je=q.styles,rn=Je===void 0?{}:Je,Ye=q.classNames,Oe=Ye===void 0?{}:Ye,cn=q.groupable,t=q.className,Se=q.style,we=y()(q,B),ke=(0,M.Z)(we,{attr:!0,aria:!0,data:!0}),S=(0,ye.Z)(Ae,{value:Ee}),xe=b()(S,2),de=xe[0],fe=xe[1],ge=Ce(cn,Ue),ie=b()(ge,2),c=ie[0],N=ie[1],F=(0,g.wv)(),Y=F.direction,Z=F.getPrefixCls,i=Z("conversations"),k=f()(i,t,Te,E()({},"".concat(i,"-rtl"),Y==="rtl")),O=function(G){fe(G.key),en&&en(G.key)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(We,{}),(0,a.jsx)("ul",x()(x()({},ke),{},{style:Se,className:k,children:c.map(function(K,G){var pe=K.data.map(function(De,tn){return(0,a.jsx)(te,{info:De,prefixCls:i,direction:Y,className:f()(Oe.item),style:rn.item,menu:ze,active:de===De.key,onClick:O},De.key||"key-".concat(tn))});if(N){var ae;return(0,a.jsxs)("li",{children:[(0,a.jsx)(h.Provider,{value:{prefixCls:i},children:((ae=K.title)===null||ae===void 0?void 0:ae.call(K,K.name,{components:{GroupTitle:d}}))||(0,a.jsx)(d,{children:K.name},K.name)}),(0,a.jsx)("ul",{className:"".concat(i,"-list"),children:pe})]},K.name||"key-".concat(G))}return pe})}))]})},Ze=oe},24963:function(Ge,W,e){"use strict";e.r(W),e.d(W,{Audios:function(){return Pe},DeepThink:function(){return E},DeepThinking:function(){return E},Files:function(){return h},Footer:function(){return he},FooterActions:function(){return C.p4},FooterCount:function(){return C.hw},Images:function(){return _},Interrupted:function(){return z},Text:function(){return ne},Videos:function(){return ye}});var w=e(67294),x=e(14082),P=e(85893);function E(U){return(0,P.jsx)(x.Z,{defaultOpen:U.data.defaultOpen!==void 0?U.data.defaultOpen:!0,title:U.data.title,loading:U.data.loading,content:U.data.content,className:U.data.className,open:U.data.open,autoCloseOnFinish:U.data.autoCloseOnFinish,maxHeight:U.data.maxHeight})}var A=e(68400),b=e.n(A),j=e(23345),y=e(36417),D=e(9053),f=e(56044),v=e(6411),I,a=(0,D.vJ)(I||(I=b()([`
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
`])),function(U){return U.theme.prefixCls},function(U){return U.theme.prefixCls},function(U){return U.theme.borderRadius},function(U){return U.theme.colorWhite},function(U){return U.theme.motionDurationSlow},function(U){return U.theme.prefixCls},function(U){return U.theme.prefixCls});function h(U){var ve=(0,f.wv)(),$=ve.getPrefixCls,Ce=$("bubble-files");return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(a,{}),(0,P.jsx)(j.Z,{className:Ce,children:U.data.map(function(Fe,$e){var qe={name:Fe.name||Fe.filename,size:Fe.size||Fe.bytes,url:Fe.url};return(0,P.jsxs)("div",{className:"".concat(Ce,"-file"),children:[(0,P.jsx)(y.Z.FileCard,{item:qe}),qe.url&&(0,P.jsx)("div",{className:"".concat(Ce,"-download"),onClick:function(){window.open(qe.url,"_blank")},children:(0,P.jsx)(v.Z,{})})]},$e)})})]})}var s=e(13811),d=e(55839),M,l=(0,D.vJ)(M||(M=b()([`
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
`])),function(U){return U.theme.prefixCls},function(U){return U.theme.prefixCls},function(U){return U.theme.prefixCls},function(U){return U.theme.prefixCls});function n(U){var ve=(0,f.wv)(),$=ve.getPrefixCls,Ce=$("bubble-image");return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(l,{}),(0,P.jsx)("div",{className:"".concat(Ce),children:(0,P.jsx)(s.Z,{fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",src:U.url,width:56,height:56,preview:{transitionName:""}})})]})}function _(U){return(0,P.jsx)(d.ZP,{locale:{Image:{preview:""}},children:(0,P.jsx)(j.Z,{children:U.data.map(function(ve,$){return(0,P.jsx)(n,{url:ve.url},$)})})})}var m=e(97857),Q=e.n(m),re=e(82679);function ne(U){var ve=U.data.msgStatus==="generating";return(0,P.jsx)(re.Z,Q()(Q()({cursor:ve},U.data),{},{typing:U.data.msgStatus==="generating"?U.data.typing:!1}))}var C=e(67369);function he(U){return(0,P.jsx)(C.ZP,Q()({},U.data))}var V=e(10146);function z(U){return(0,P.jsx)(V.Z,Q()({},U.data))}var H=e(86422),te;function ye(U){var ve=(0,f.wv)().getPrefixCls("bubble-video");return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{}),(0,P.jsx)(j.Z,{children:U.data.map(function($,Ce){return(0,P.jsx)(H.Z,{className:ve,src:$.src,poster:$.poster,controls:!0},Ce)})})]})}var g=(0,D.vJ)(te||(te=b()([`
.`,`-bubble-video {
  max-width: 256px;
  max-height: 144px;
  border-radius: 8px;
  border: 1px solid `,`;
  overflow: hidden;
}
`])),function(U){return U.theme.prefixCls},function(U){return U.theme.colorBorderSecondary});function Pe(){return(0,P.jsx)("div",{children:"Audio"})}},55031:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return re}});var w=e(56044),x=e(31382),P=e(55839),E=e(13811),A=e(33948),b=e(52253),j=e(56137),y=e(1948),D=e(61763),f=e(77900),v=e(40443),I=e(33119),a=e(4356),h=e(72816),s=e(77382),d=e(72167),M=e(74398),l=e(55094),n=e(61401),_=e(85893),m={Click:{name:"\u70B9\u51FB",icon:(0,_.jsx)(A.Z,{})},Swipe:{name:"\u6ED1\u52A8",icon:(0,_.jsx)(b.Z,{})},Type:{name:"\u8F93\u5165",icon:(0,_.jsx)(j.Z,{})},Back:{name:"\u8FD4\u56DE",icon:(0,_.jsx)(y.Z,{})},Home:{name:"\u4E3B\u9875",icon:(0,_.jsx)(D.Z,{})},Done:{name:"\u5B8C\u6210",icon:(0,_.jsx)(f.Z,{})},Wait:{name:"\u7B49\u5F85",icon:(0,_.jsx)(v.Z,{spin:!0})},click:{name:"\u70B9\u51FB",icon:(0,_.jsx)(A.Z,{})},"right click":{name:"\u53F3\u952E\u70B9\u51FB",icon:(0,_.jsx)(A.Z,{})},"open app":{name:"\u6253\u5F00\u5E94\u7528",icon:(0,_.jsx)(I.Z,{})},computer_double_click:{name:"\u53CC\u51FB",icon:(0,_.jsx)(a.Z,{})},hotkey:{name:"\u5FEB\u6377\u952E",icon:(0,_.jsx)(h.Z,{})},presskey:{name:"\u6309\u952E",icon:(0,_.jsx)(s.Z,{})},scroll:{name:"\u6EDA\u52A8",icon:(0,_.jsx)(b.Z,{})},drag:{name:"\u62D6\u62FD",icon:(0,_.jsx)(d.Z,{})},type_with_clear_enter_pos:{name:"\u8F93\u5165\u5E76\u6E05\u9664",icon:(0,_.jsx)(j.Z,{})},triple_click:{name:"\u4E09\u51FB",icon:(0,_.jsx)(M.Z,{})},drag_end:{name:"\u62D6\u62FD\u7ED3\u675F",icon:(0,_.jsx)(d.Z,{})},type:{name:"\u8F93\u5165",icon:(0,_.jsx)(j.Z,{})},hscroll:{name:"\u6C34\u5E73\u6EDA\u52A8",icon:(0,_.jsx)(l.Z,{})},done:{name:"\u5B8C\u6210",icon:(0,_.jsx)(f.Z,{})},wait:{name:"\u7B49\u5F85",icon:(0,_.jsx)(v.Z,{spin:!0})},call_user:{name:"\u547C\u53EB\u7528\u6237",icon:(0,_.jsx)(n.Z,{})}},Q=m;function re(ne){var C,he,V=(0,w.wv)(),z=V.getPrefixCls,H=z("operate-card");return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"".concat(H,"-device-action-time"),children:ne.time}),(0,_.jsx)(x.Z,{header:{className:"".concat(H,"-device-action"),icon:(0,_.jsx)("div",{className:"".concat(H,"-device-action-icon"),children:(C=Q[ne.action])===null||C===void 0?void 0:C.icon}),title:(0,_.jsxs)("div",{className:"".concat(H,"-device-action-content"),children:[(0,_.jsxs)("div",{className:"".concat(H,"-device-action-description"),children:[(0,_.jsx)("span",{children:ne.actionName||((he=Q[ne.action])===null||he===void 0?void 0:he.name)}),(0,_.jsx)("span",{children:ne.description})]}),(0,_.jsx)("div",{className:"".concat(H,"-device-action-image"),children:(0,_.jsx)(P.ZP,{locale:{Image:{preview:""}},children:(0,_.jsx)(E.Z,{src:ne.image,alt:ne.description,width:"100%",height:"100%"})})})]})}})]})}},10325:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return D}});var w=e(67294),x=e(68400),P=e.n(x),E=e(9053),A,b=(0,E.vJ)(A||(A=P()([`
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
`])),function(f){return f.theme.prefixCls},function(f){return f.theme.colorTextTertiary},function(f){return f.theme.prefixCls}),j=e(56044),y=e(85893);function D(f){var v=f.desc,I=v===void 0?"AI can also make mistakes, so please check carefully and use it with caution":v,a=(0,j.wv)(),h=a.getPrefixCls,s=h("disclaimer");return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(b,{}),(0,y.jsxs)("div",{className:s,style:f.style,children:[I,f.afterLink&&(0,y.jsx)("a",{className:"".concat(s,"-after-link"),href:f.afterLink.href,target:"_blank",children:f.afterLink.text})]})]})}},28446:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return h}});var w=e(67294),x=e(68400),P=e.n(x),E=e(9053),A,b=(0,E.vJ)(A||(A=P()([`
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
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(0deg);
      width: 100vmax;
      height: 100vmax;
      object-fit: cover;
      animation: `,`spin 6s linear infinite;
      pointer-events: none;
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
`])),function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.colorText},function(s){return s.theme.colorSuccess},function(s){return s.theme.prefixCls},function(s){return s.theme.colorBgBase},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls}),j=e(56044),y=e(55839),D=e(13811),f=e(89034),v=e(36374),I=e(85893),a=function(d){var M=(0,j.wv)(),l=M.getPrefixCls,n=l("image-generator"),_=d.block,m=d.skeletonText,Q=d.width,re=Q===void 0?320:Q,ne=d.height,C=ne===void 0?320:ne,he=d.src,V=d.loadingText,z=V===void 0?"Painting...":V,H=d.doneText,te=H===void 0?"Paint Completed":H,ye=d.skeleton||(0,I.jsxs)("div",{className:"".concat(n,"-default-skeleton"),style:{width:"100%",height:"100%"},children:[(0,I.jsx)("img",{className:"".concat(n,"-default-skeleton-bg"),src:"https://img.alicdn.com/imgextra/i2/O1CN01jwLfwV1hPiHfJjQXM_!!6000000004270-2-tps-1155-763.png",alt:""}),(0,I.jsxs)("div",{className:"".concat(n,"-default-skeleton-content"),children:[(0,I.jsx)("img",{className:"".concat(n,"-default-skeleton-icon"),src:"https://img.alicdn.com/imgextra/i2/O1CN01M1X8yM1MWUC7u3Go5_!!6000000001442-54-tps-72-72.apng"}),m&&(0,I.jsx)("div",{className:"".concat(n,"-default-skeleton-text"),children:m})]})]}),g=!he,Pe=_?{aspectRatio:"".concat(re,"/").concat(C)}:{width:re,height:C};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(b,{}),(0,I.jsxs)("div",{className:n,children:[(0,I.jsxs)("div",{className:"".concat(n,"-text"),children:[g?(0,I.jsx)(v.Z,{}):(0,I.jsx)(f.Z,{className:"".concat(n,"-text-success")}),g?(0,I.jsx)("span",{style:{paddingLeft:20},children:z}):te]}),(0,I.jsx)("div",{className:"".concat(n,"-wrapper"),style:Pe,children:g?ye:(0,I.jsx)(y.ZP,{locale:{Image:{preview:""}},children:(0,I.jsx)(D.Z,{width:"100%",height:"100%",src:he})})})]})]})},h=a},82679:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return ie}});var w=e(67294),x=e(97857),P=e.n(x),E=e(13769),A=e.n(E),b=e(44768),j=e(68400),y=e.n(j),D=e(9053),f,v=(0,D.vJ)(f||(f=y()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.colorBorder},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorText},function(c){return c.theme.borderRadiusSM},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls});function I(c){var N=c.cursor,F=c.content,Y=(0,w.useMemo)(function(){return N?N==="dot"?" :dot:":N==="underline"?" :underline:":" :dot:":""},[N,F]);return F+Y}var a=e(85893),h=["content","cursor"];function s(c){var N=c.content,F=c.cursor,Y=A()(c,h),Z=I({cursor:F,content:N});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{}),(0,a.jsx)(b.Z,P()(P()({},Y),{},{content:Z}))]})}var d=e(5574),M=e.n(d),l=function(N){var F=N.content,Y=N.typing,Z=(0,w.useState)(0),i=M()(Z,2),k=i[0],O=i[1],K=(0,w.useRef)();return(0,w.useEffect)(function(){return Y?K.current=setInterval(function(){O(function(G){return G+1})},typeof Y=="number"?Y:5):K.current&&clearInterval(K.current),function(){return clearInterval(K.current)}},[Y]),Y?F.slice(0,k):F},n=l,_=e(56044),m=e(93967),Q=e.n(m),re=function(){return null},ne=e(4146),C=e(12181),he=e(9361),V=e(97634),z=e(89698),H,te,ye,g,Pe=Object.keys(ne.xO),U=function(N){var F=/\n/g,Y=N.match(F);return Y?Y.length:1},ve=function(N){if(!N)return{};var F=N.props,Y=F.children,Z=F.className;if(!Y)return{};var i=Array.isArray(Y)?Y[0]:Y,k=(Z==null?void 0:Z.replace("language-",""))||"txt",O=U(i)<=1&&i.length<=32;return{content:i,isSingleLine:O,lang:k}},$=function(N){var F=N.children,Y=N.enableMermaid,Z=ve(F),i=Ce(),k=i.styles,O=i.cx,K=(0,_.wv)(),G=K.getPrefixCls,pe=K.theme,ae=(pe==null?void 0:pe.algorithm)===he.Z.darkAlgorithm,De=(0,w.useState)(!1),tn=M()(De,2),an=tn[0],un=tn[1],sn=Z.content,Re=sn===void 0?"":sn,Be=Z.lang,ln=Be===void 0?"":Be,dn=(0,w.useMemo)(function(){return Re.replace(/ :(dot|underline):/g,"")},[Re]);return dn?ln==="mermaid"?(0,a.jsx)(C.Z,{content:dn,width:"50%"}):Pe.indexOf(ln)===-1?(0,a.jsx)("pre",{children:(0,a.jsx)("code",{children:dn})}):(0,a.jsxs)("div",{className:k.container,children:[(0,a.jsxs)("div",{className:k.header,children:[(0,a.jsx)("div",{className:k.lang,children:ln}),an?(0,a.jsx)(V.Z,{className:k.copied}):(0,a.jsx)(z.Z,{className:k.icon,onClick:function(){navigator.clipboard.writeText(dn),un(!0),setTimeout(function(){un(!1)},1e3)}})]}),(0,a.jsx)(ne.ZP,{value:dn,language:ln,theme:ae?"dark":"light",readOnly:!0})]}):null},Ce=(0,D.kc)(function(c){var N=c.css,F=c.token;return{copied:N(H||(H=y()([`
    color: `,`;
    cursor: pointer;
    font-size: 16px;
  `])),F.colorSuccess),container:N(te||(te=y()([`
    border: 1px solid `,`;
    border-radius: 6px;
    overflow: hidden;
    font-size: 0.8571428571428571em;
    margin: 1em 0;
  `])),F.colorBorderSecondary),header:N(ye||(ye=y()([`
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
  `])),F.colorFillSecondary),icon:N(g||(g=y()([`
    fontsize: 16px;
    cursor: pointer;
  `]))),lang:{textTransform:"capitalize"}}}),Fe=$;function $e(c){return(0,a.jsx)("a",{href:c.src,target:"_blank",rel:"noopener noreferrer",children:c.src})}var qe=e(55839),nn=e(13811),We=e(85576),B=e(36231),oe=e(89102);function Ze(c){try{var N=c.src,F=new URL(N),Y=F.pathname,Z=Y.endsWith(".mp4"),i=Y.endsWith(".mp3")||Y.endsWith(".wav");return i?(0,a.jsx)("audio",P()(P()({src:c.src},c),{},{controls:!0})):Z?(0,a.jsx)(q,P()({src:c.src},c)):(0,a.jsx)(L,P()({src:c.src},c))}catch(k){return null}}function L(c){return(0,a.jsx)(qe.ZP,{locale:{Image:{preview:""}},children:(0,a.jsx)(nn.Z,P()({src:c.src},c))})}function q(c){var N=c.src,F=(0,w.useState)(!1),Y=M()(F,2),Z=Y[0],i=Y[1],k=(0,_.wv)(),O=k.getPrefixCls,K=O("markdown-video");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:K,children:(0,a.jsx)("div",{className:"".concat(K,"-poster"),onClick:function(){return i(!0)},children:(0,a.jsx)(B.Z,{className:"".concat(K,"-play")})})}),(0,a.jsx)(We.Z,{closeIcon:(0,a.jsx)("a",{children:(0,a.jsx)(oe.Z,{style:{fontSize:20}})}),centered:!0,transitionName:"",footer:null,width:500,title:"",styles:{content:{padding:0}},open:Z,destroyOnHidden:!0,onCancel:function(){return i(!1)},children:(0,a.jsx)("video",{controls:!0,autoPlay:!0,style:{display:"block",width:"100%"},children:(0,a.jsx)("source",{src:N,type:"video/mp4"})})})]})}function X(c){var N=(0,_.wv)().getPrefixCls("markdown");return(0,a.jsx)("div",{className:N,style:{fontSize:c.baseFontSize,lineHeight:c.baseLineHeight},children:c.content})}var Te=e(79427),Ue=e(55241),Ee,Ae=(0,D.vJ)(Ee||(Ee=y()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.motionEaseOut},function(c){return c.theme.colorWhite},function(c){return c.theme.colorPrimary});function en(c){var N=(0,_.wv)(),F=N.getPrefixCls,Y=F("markdown-citation"),Z=c["data-text"],i=c["data-url"],k=c["data-title"],O=c["data-content"],K=O||k,G=(0,a.jsx)("sup",{className:Y,children:Z});return K&&(G=(0,a.jsx)(Ue.Z,{title:k,content:i?(0,a.jsx)("a",{href:i,rel:"noreferrer",target:"_blank",children:i}):O,children:G})),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Ae,{}),G]})}function ze(c){var N,F=((N=c.citationsData[c["data-text"]])===null||N===void 0?void 0:N.render)||en;return(0,a.jsx)(F,P()({},c))}var Je=[],rn={};function Ye(c){var N=c.citations,F=N===void 0?Je:N,Y=c.citationsMap,Z=Y===void 0?rn:Y,i=(0,w.useMemo)(function(){var G=P()({},Z);return F.forEach(function(pe,ae){var De=ae+1;G[De]=pe}),[G,function(){return function(ae){return(0,a.jsx)(ze,P()(P()({},ae),{},{citationsData:G}))}}()]},[F,Z]),k=M()(i,2),O=k[0],K=k[1];return{CitationComponent:K,citationsData:O,citationsDataCount:Object.keys(O).length}}var Oe=e(30861);function cn(c){return{name:"citation",level:"inline",tokenizer:function(F){var Y=F.match(/^\[([^\]]+)\](?!\()/);if(Y){var Z=Y[0].trim(),i=Z==null?void 0:Z.replace(/^\[([^\]]+)\]/g,"$1");if(c[i])return{type:"citation",raw:Z,text:Z==null?void 0:Z.replace(/^\[([^\]]+)\]/g,"$1"),renderType:"component"}}},renderer:function(F){if(c&&Object.keys(c).length===0)return null;var Y=F.text,Z=c==null?void 0:c[Y];return Z?'<citation data-text="'.concat(Y,'" data-url="').concat(Z.url,'" data-title="').concat(Z.title,'" data-content="').concat(Z.content,'"></citation>'):F.raw}}}var t,Se=(0,D.vJ)(t||(t=y()([`
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
`])),function(c){var N=c.theme;return N.colorPrimary});function we(){var c=(0,_.wv)(),N=c.getPrefixCls,F="markdown-cursor-underline";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Se,{}),(0,a.jsx)("span",{className:Q()(F,N("markdown-cursor"))})]})}var ke=e(36374),S=function(N){var F=N["data-type"];return F==="dot"?(0,a.jsx)(ke.Z,{}):F==="underline"?(0,a.jsx)(we,{}):null};function xe(){var c={cursors:{dot:"dot",underline:"underline"}},N=Object.keys(c.cursors).map(function(Z){return Z.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|"),F=new RegExp(":(".concat(N,"):")),Y=new RegExp("^".concat(F.source));return{name:"cursor",level:"inline",start:function(i){var k;return(k=i.match(F))===null||k===void 0?void 0:k.index},tokenizer:function(i,k){var O=Y.exec(i);if(O){var K=O[1],G=c.cursors[K];if(G)return{type:"cursor",raw:O[0],name:K,cursor:G}}},renderer:function(i){var k='<custom-cursor data-type="'.concat(i.name,'"></custom-cursor>');return k}}}var de={ALLOWED_TAGS:[]};function fe(){try{return new RegExp("(?<=a)b"),!0}catch(c){return!1}}var ge=fe(),ie=(0,w.memo)(function(c){var N=c.baseFontSize||14,F=c.baseLineHeight||1.7,Y=n({content:c.content,typing:c.typing}),Z=(0,_.wv)().getPrefixCls("markdown"),i=c.raw,k=i===void 0?!1:i,O=c.allowHtml,K=O===void 0?!0:O,G=Ye({citations:c.citations,citationsMap:c.citationsMap}),pe=G.citationsData,ae=G.citationsDataCount,De=G.CitationComponent,tn=(0,w.useMemo)(function(){return{pre:Fe,style:re,script:re,img:c.disableImage?$e:Ze,citation:De,"custom-cursor":S}},[c.disableImage,De]),an=(0,w.useMemo)(function(){return K?{ADD_TAGS:["custom-cursor","citation"]}:de},[K]),un=(0,w.useMemo)(function(){var Be=(0,Oe.Z)();return Be.push(xe()),ae>0&&Be.push(cn(pe)),Be},[ae,pe]),sn=(0,w.useMemo)(function(){return{extensions:un}},[un]),Re=(0,a.jsx)(X,{content:Y||"",baseFontSize:N,baseLineHeight:F});return k||!ge?Re:(0,a.jsx)(Te.SV,{fallback:Re,children:(0,a.jsx)(s,{dompurifyConfig:an,cursor:c.cursor,components:tn,style:{fontSize:N,lineHeight:F},openLinksInNewTab:!0,className:Q()(Z,c.className),content:Y||"",config:sn})})})},36374:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return f}});var w=e(68400),x=e.n(w),P=e(56044),E=e(9053),A=e(93967),b=e.n(A),j=e(85893),y,D=(0,E.vJ)(y||(y=x()([`
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
`])),function(v){return v.theme.prefixCls},function(v){return v.theme.colorText},function(v){return v.theme.colorText});function f(){var v=(0,P.wv)(),I=v.getPrefixCls,a=I("markdown-cursor-dot");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(D,{}),(0,j.jsxs)("span",{className:b()(a,I("markdown-cursor")),children:[(0,j.jsx)("span",{style:{opacity:0,marginLeft:"-.75em"},children:"_"}),(0,j.jsx)("span",{className:"".concat(a,"-dot1")}),(0,j.jsx)("span",{className:"".concat(a,"-dot2")})]})]})}},12181:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return Q}});var w=e(5574),x=e.n(w),P=e(15009),E=e.n(P),A=e(99289),b=e.n(A),j=e(68400),y=e.n(j),D=e(41469),f=e(2093),v=e(9361),I=e(96486),a=e.n(I),h=e(67294),s=e(56044),d=e(9053),M=e(85893),l,n=(0,d.vJ)(l||(l=y()([`
.`,`-mermaid {
  &-preview img {
    background: `,`;
  }
}
`])),function(re){return re.theme.prefixCls},function(re){return re.theme.colorBgBase}),_,m=function(){var re=b()(E()().mark(function ne(){return E()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:if(!_){he.next=2;break}return he.abrupt("return",_);case 2:return _=e.e(6637).then(e.bind(e,76637)).then(function(V){return V.default}),he.abrupt("return",_);case 4:case"end":return he.stop()}},ne)}));return function(){return re.apply(this,arguments)}}();function Q(re){var ne=re.content,C=re.width,he=re.height,V=(0,s.wv)(),z=V.theme,H=V.getPrefixCls,te=H("mermaid"),ye=(0,h.useMemo)(function(){return{theme:(z==null?void 0:z.algorithm)===v.Z.darkAlgorithm?"dark":"default",securityLevel:"loose",startOnLoad:!1}},[z==null?void 0:z.algorithm,z==null?void 0:z.token.fontFamily]),g=(0,h.useState)(""),Pe=x()(g,2),U=Pe[0],ve=Pe[1],$=(0,h.useState)(),Ce=x()($,2),Fe=Ce[0],$e=Ce[1],qe=(0,h.useId)(),nn=(0,I.kebabCase)("mermaid-".concat(qe));return(0,f.Z)(b()(E()().mark(function We(){var B,oe,Ze,L;return E()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.prev=0,X.next=3,m();case 3:if(B=X.sent,B){X.next=7;break}return ve(ne),X.abrupt("return");case 7:return X.next=9,B.parse(ne);case 9:if(oe=X.sent,!oe){X.next=19;break}return B.initialize(ye),X.next=14,B.render(nn,ne);case 14:Ze=X.sent,L=Ze.svg,ve(L),X.next=20;break;case 19:throw new Error("Invalid Mermaid syntax");case 20:X.next=26;break;case 22:X.prev=22,X.t0=X.catch(0),U||console.error("Mermaid parse error: ",X.t0),ve(U||"");case 26:case"end":return X.stop()}},We,null,[[0,22]])})),[ne,ye]),(0,h.useEffect)(function(){if(U){var We=new Blob([U],{type:"image/svg+xml"}),B=URL.createObjectURL(We);return $e(B),function(){URL.revokeObjectURL(B)}}},[U]),Fe?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(n,{}),(0,M.jsx)(D.Z,{className:te,src:Fe,alt:"mermaid",width:C,height:he,preview:{rootClassName:"".concat(te,"-preview")}})]}):null}},31382:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return _}});var w=e(9783),x=e.n(w),P=e(5574),E=e.n(P),A=e(67294),b=e(56044),j=e(68400),y=e.n(j),D=e(9053),f,v=(0,D.vJ)(f||(f=y()([`
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

  &-rag-item {
    margin-left: 16px;

    &-title {
      font-size: 12px;
      color: `,`;
      line-height: 20px;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-content {
      padding: 8px;
      border-radius: 6px;
      background-color: `,`;
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
`])),function(m){return m.theme.prefixCls},function(m){return m.theme.borderRadiusLG},function(m){return m.theme.colorFillTertiary},function(m){return m.theme.colorText},function(m){return m.theme.colorTextTertiary},function(m){return m.theme.prefixCls},function(m){return m.theme.prefixCls},function(m){return m.theme.colorBorderSecondary},function(m){return m.theme.colorTextTertiary},function(m){return m.theme.colorText},function(m){return m.theme.colorTextTertiary},function(m){return m.theme.colorText},function(m){return m.theme.colorBorderSecondary},function(m){return m.theme.colorTextSecondary},function(m){return m.theme.colorText},function(m){return m.theme.colorBorderSecondary},function(m){return m.theme.colorTextTertiary},function(m){return m.theme.colorText},function(m){return m.theme.colorTextSecondary},function(m){return m.theme.colorBorderSecondary},function(m){return m.theme.colorText},function(m){return m.theme.colorFillTertiary},function(m){return m.theme.colorFillQuaternary},function(m){return m.theme.colorTextTertiary}),I=e(93967),a=e.n(I),h=e(28387),s=e(9838),d=e(64057),M=e(85893);function l(m){var Q=(0,b.wv)(),re=Q.getPrefixCls,ne=re("operate-card");return(0,M.jsx)(M.Fragment,{children:(0,M.jsx)("div",{className:"".concat(ne,"-line-body"),children:m.children})})}function n(m){var Q,re=(0,b.wv)(),ne=re.getPrefixCls,C=ne("operate-card"),he=(0,A.useState)(((Q=m.body)===null||Q===void 0?void 0:Q.defaultOpen)||!1),V=E()(he,2),z=V[0],H=V[1];return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(v,{}),(0,M.jsxs)("div",{className:C,children:[(0,M.jsxs)("div",{className:a()("".concat(C,"-header"),m.header.className,x()({},"".concat(C,"-header-has-body"),m.body)),onClick:function(){m.body&&H(!z)},children:[(0,M.jsx)("div",{className:"".concat(C,"-header-icon"),children:m.header.icon}),typeof m.header.title=="string"?(0,M.jsx)("div",{className:"".concat(C,"-header-title"),children:m.header.title}):m.header.title,m.header.description&&(0,M.jsx)("div",{className:"".concat(C,"-header-description"),children:m.header.description}),m.body&&(0,M.jsx)(d.Z,{size:"small",bordered:!1,className:"".concat(C,"-header-arrow"),icon:z?(0,M.jsx)(h.Z,{}):(0,M.jsx)(s.Z,{})})]}),m.body&&z&&(0,M.jsx)("div",{className:"".concat(C,"-body"),children:m.body.children})]})]})}n.LineBody=l;var _=n},85762:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return f}});var w=e(56044),x=e(31382),P=e(82679),E=e(37303),A=e(50104),b=e(55839),j=e(13811),y=e(85893);function D(v){var I=v.images,a=(0,w.wv)(),h=a.getPrefixCls,s=h("operate-card");return(0,y.jsx)(b.ZP,{locale:{Image:{preview:""}},children:(0,y.jsx)(j.Z.PreviewGroup,{children:(0,y.jsx)("div",{className:"".concat(s,"-rag-item-images"),children:I.map(function(d,M){return(0,y.jsx)(j.Z,{src:d},M)})})})})}function f(v){var I=(0,w.wv)(),a=I.getPrefixCls,h=a("operate-card"),s=v.title,d=s===void 0?"\u77E5\u8BC6\u5E93\u68C0\u7D22":s,M=v.subTitle,l=v.defaultOpen,n=l===void 0?!0:l;return(0,y.jsx)(x.Z,{header:{icon:(0,y.jsx)(A.Z,{}),title:d,description:M},body:{defaultOpen:n,children:(0,y.jsx)(x.Z.LineBody,{children:v.list.map(function(_,m){return(0,y.jsxs)("div",{className:"".concat(h,"-rag-item"),children:[(0,y.jsxs)("div",{className:"".concat(h,"-rag-item-title"),children:[(0,y.jsx)("span",{children:_.title}),_.score&&(0,y.jsx)(E.Z,{color:"blue",children:_.score})]}),(0,y.jsxs)("div",{className:"".concat(h,"-rag-item-content"),children:[(0,y.jsx)(P.Z,{content:_.content}),_.images&&(0,y.jsx)(D,{images:_.images}),_.link?(0,y.jsx)("a",{onClick:function(){window.open(_.link,"_blank")},className:"".concat(h,"-rag-item-footer"),href:_.link,target:"_blank",children:_.footer}):(0,y.jsx)("div",{className:"".concat(h,"-rag-item-footer"),children:_.footer})]})]},m)})})}})}},79323:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return b}});var w=e(56044),x=e(31382),P=e(40443),E=e(33593),A=e(85893);function b(j){var y=(0,w.wv)(),D=y.getPrefixCls,f=j.defaultOpen,v=f===void 0?!0:f,I=j.loading,a=I===void 0?!1:I,h=D("operate-card");return(0,A.jsx)(x.Z,{header:{icon:a?(0,A.jsx)(P.Z,{spin:!0}):(0,A.jsx)(E.Z,{}),title:j.title,description:j.subTitle},body:{defaultOpen:v,children:(0,A.jsx)(x.Z.LineBody,{children:(0,A.jsx)("div",{className:"".concat(h,"-thinking"),children:j.content})})}})}},6874:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return v}});var w=e(9783),x=e.n(w),P=e(56044),E=e(31382),A=e(41775),b=e(77900),j=e(40443),y=e(93967),D=e.n(y),f=e(85893);function v(I){var a=(0,P.wv)(),h=a.getPrefixCls,s=h("operate-card"),d=I.title,M=d===void 0?"Task List":d,l=I.list.filter(function(n){return n.status==="done"}).length;return(0,f.jsx)(E.Z,{header:{icon:(0,f.jsx)(A.Z,{}),title:M,description:"\xB7 ".concat(l?l+" of ":""," ").concat(I.list.length)},body:{defaultOpen:I.defaultOpen,children:(0,f.jsx)("div",{className:"".concat(s,"-todo-list"),children:I.list.map(function(n){return(0,f.jsxs)("div",{className:D()(x()(x()({},"".concat(s,"-todo-list-item"),!0),"".concat(s,"-todo-list-item-").concat(n.status),!0)),children:[(0,f.jsx)("div",{className:"".concat(s,"-todo-list-item-icon"),children:{done:(0,f.jsx)(b.Z,{}),todo:(0,f.jsx)(b.Z,{}),running:(0,f.jsx)(j.Z,{spin:!0})}[n.status]}),(0,f.jsx)("div",{className:"".concat(s,"-todo-list-item-title"),style:{textDecoration:n.status==="done"?"line-through":"none"},children:n.title})]},n.title)})})}})}},85786:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return s}});var w=e(5574),x=e.n(w),P=e(56044),E=e(31382),A=e(97634),b=e(89698),j=e(40443),y=e(78598),D=e(33811),f=e(64057),v=e(4146),I=e(67294),a=e(85893);function h(d){var M=(0,P.wv)(),l=M.getPrefixCls,n=l("operate-card"),_=typeof d.content=="string"?d.content:JSON.stringify(d.content),m=(0,I.useState)(!1),Q=x()(m,2),re=Q[0],ne=Q[1],C=(0,I.useRef)(null);return(0,a.jsx)("div",{className:"".concat(n,"-tool-call-block"),children:(0,a.jsx)(D.Z,{title:d.title,extra:(0,a.jsx)(f.Z,{size:"small",style:{marginRight:"-6px"},icon:re?(0,a.jsx)(A.Z,{}):(0,a.jsx)(b.Z,{}),bordered:!1,onClick:function(){clearTimeout(C.current),navigator.clipboard.writeText(_),ne(!0),C.current=setTimeout(function(){ne(!1)},2e3)}}),children:(0,a.jsx)(v.ZP,{language:"json",value:_,readOnly:!0})})})}function s(d){var M=d.title,l=M===void 0?"Call Tool":M,n=d.subTitle,_=d.defaultOpen,m=_===void 0?!0:_,Q=d.loading,re=Q===void 0?!1:Q;return(0,a.jsx)(E.Z,{header:{icon:re?(0,a.jsx)(j.Z,{spin:!0}):(0,a.jsx)(y.Z,{}),title:l,description:n},body:{defaultOpen:m,children:(0,a.jsxs)(E.Z.LineBody,{children:[(0,a.jsx)(h,{title:"Input",content:d.input}),(0,a.jsx)(h,{title:"Output",content:d.output})]})}})}},69610:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return D}});var w=e(9783),x=e.n(w),P=e(56044),E=e(31382),A=e(9229),b=e(93967),j=e.n(b),y=e(85893);function D(f){var v=(0,P.wv)(),I=v.getPrefixCls,a=I("operate-card"),h=f.title,s=h===void 0?"\u8054\u7F51\u641C\u7D22":h,d=f.subTitle;return(0,y.jsx)(E.Z,{header:{icon:(0,y.jsx)(A.Z,{}),title:s,description:d},body:{defaultOpen:!0,children:(0,y.jsx)(E.Z.LineBody,{children:f.list.map(function(M){return(0,y.jsxs)("div",{className:j()(x()({},"".concat(a,"-web-search-item"),!0)),onClick:function(){window.open(M.link,"_blank")},children:[(0,y.jsx)("img",{className:"".concat(a,"-web-search-item-icon"),src:M.icon,alt:M.title}),(0,y.jsx)("div",{className:"".concat(a,"-web-search-item-title"),children:M.title}),M.subTitle&&(0,y.jsx)("div",{className:"".concat(a,"-web-search-item-subTitle"),children:M.subTitle})]},M.title)})})}})}},56809:function(Ge,W,e){"use strict";e.d(W,{B4:function(){return x.Z},BI:function(){return w.Z},Sn:function(){return A.Z},fz:function(){return E.Z},x4:function(){return P.Z}});var w=e(79323),x=e(6874),P=e(85786),E=e(69610),A=e(85762)},83962:function(Ge,W,e){"use strict";e.d(W,{HJ:function(){return y},NR:function(){return b},xy:function(){return j}});var w=e(97857),x=e.n(w),P=e(67294),E=e(24963),A=e(85893),b=(0,P.createContext)(void 0),j=function(f){return(0,A.jsx)(b.Provider,{value:f.cardConfig,children:f.children})},y=function(){var f=P.useContext(b);return P.useMemo(function(){return x()(x()({},E),f)},[f])}},92049:function(Ge,W,e){"use strict";e.d(W,{R:function(){return E},bN:function(){return A}});var w=e(67294),x=e(85893),P=(0,w.createContext)(void 0),E=function(j){return(0,x.jsx)(P.Provider,{value:j,children:j.children})},A=function(){var j=w.useContext(P);return j||{}}},56044:function(Ge,W,e){"use strict";e.d(W,{wv:function(){return j}});var w=e(17300),x=e(67294),P=e(83962),E=e(92049),A=e(85893),b=function(D){var f=D.children,v=D.cardConfig,I=D.markdown;return(0,A.jsx)(E.R,{markdown:I,children:(0,A.jsx)(P.xy,{cardConfig:v,children:f})})};function j(){var y=x.useContext(w.ZP.ConfigContext);return y}W.ZP=b},44294:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return a},a:function(){return f}});var w=e(97857),x=e.n(w),P=e(24772),E=e(83622),A=e(93967),b=e.n(A),j=e(29372),y=e(67294),D=e(85893),f=y.createContext({}),v=function(){return{height:0}},I=function(s){return{height:s.scrollHeight}};function a(h){var s=h.title,d=h.onOpenChange,M=h.open,l=h.children,n=h.className,_=h.style,m=h.classNames,Q=m===void 0?{}:m,re=h.styles,ne=re===void 0?{}:re,C=h.closable,he=h.forceRender,V=y.useContext(f),z=V.prefixCls,H="".concat(z,"-header");return(0,D.jsx)(j.ZP,{motionEnter:!0,motionLeave:!0,motionName:"".concat(H,"-motion"),leavedClassName:"".concat(H,"-motion-hidden"),onEnterStart:v,onEnterActive:I,onLeaveStart:I,onLeaveActive:v,visible:M,forceRender:he,children:function(ye){var g=ye.className,Pe=ye.style;return(0,D.jsxs)("div",{className:b()(H,g,n),style:x()(x()({},Pe),_),children:[(C!==!1||s)&&(0,D.jsxs)("div",{className:b()("".concat(H,"-header"),Q.header),style:x()({},ne.header),children:[(0,D.jsx)("div",{className:"".concat(H,"-title"),children:s}),C!==!1&&(0,D.jsx)("div",{className:"".concat(H,"-close"),children:(0,D.jsx)(E.ZP,{type:"text",icon:(0,D.jsx)(P.Z,{}),size:"small",onClick:function(){d==null||d(!M)}})})]}),l&&(0,D.jsx)("div",{className:b()("".concat(H,"-content"),Q.content),style:x()({},ne.content),children:l})]})}})}},93164:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return Z}});var w=e(19632),x=e.n(w),P=e(97857),E=e.n(P),A=e(9783),b=e.n(A),j=e(5574),y=e.n(j),D=e(13769),f=e.n(D),v=e(48045),I=e(86250),a=e(93967),h=e.n(a),s=e(56790),d=e(30339),M=e(94787),l=e(67294),n=e(11154),_=e(83204);function m(i,k){return(0,l.useImperativeHandle)(i,function(){var O=k(),K=O.nativeElement;return new Proxy(K,{get:function(pe,ae){return O[ae]?O[ae]:Reflect.get(pe,ae)}})})}var Q=e(56044),re=e(44294),ne=e(64057),C=e(85893),he=["className","action","onClick"],V=l.createContext(null);function z(i){var k=i.className,O=i.action,K=i.onClick,G=f()(i,he),pe=l.useContext(V),ae=pe.prefixCls,De=pe.disabled,tn=pe[O],an=De||G.disabled||pe["".concat(O,"Disabled")]||!1;return(0,C.jsx)(ne.Z,E()(E()({bordered:!1,disabled:an},G),{},{onClick:function(sn){an||(tn&&tn(),K&&K(sn))},className:h()(ae,k,b()({},"".concat(ae,"-disabled"),an))}))}var H=l.forwardRef(z),te=e(69291);function ye(i,k){return(0,C.jsx)(H,E()(E()({icon:(0,C.jsx)(te.Z,{})},i),{},{action:"onClear",ref:k}))}var g=l.forwardRef(ye),Pe=(0,l.memo)(function(i){var k=i.className;return(0,C.jsxs)("svg",{color:"currentColor",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:k,children:[(0,C.jsx)("title",{children:"Stop Loading"}),(0,C.jsx)("rect",{fill:"currentColor",height:"250",rx:"24",ry:"24",width:"250",x:"375",y:"375"})]})}),U=Pe;function ve(i,k){var O=l.useContext(V),K=O.prefixCls,G=i.className;return(0,C.jsx)(H,E()(E()({icon:(0,C.jsx)(U,{className:"".concat(K,"-loading-icon")}),type:"primary",variant:"text"},i),{},{className:h()(G,"".concat(K,"-loading-button")),action:"onCancel",ref:k}))}var $=l.forwardRef(ve),Ce=e(43103);function Fe(i,k){return(0,C.jsx)(H,E()(E()({icon:(0,C.jsx)(Ce.Z,{}),type:"primary"},i),{},{action:"onSend",ref:k}))}var $e=l.forwardRef(Fe),qe=e(36763),nn=e(21474),We=1e3,B=4,oe=140,Ze=oe/2,L=250,q=500,X=.8;function Te(i){var k=i.className;return(0,C.jsxs)("svg",{color:"currentColor",viewBox:"0 0 ".concat(We," ").concat(We),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:k,children:[(0,C.jsx)("title",{children:"Speech Recording"}),Array.from({length:B}).map(function(O,K){var G=(We-oe*B)/(B-1),pe=K*(G+oe),ae=We/2-L/2,De=We/2-q/2;return(0,C.jsxs)("rect",{fill:"currentColor",rx:Ze,ry:Ze,height:L,width:oe,x:pe,y:ae,children:[(0,C.jsx)("animate",{attributeName:"height",values:"".concat(L,"; ").concat(q,"; ").concat(L),keyTimes:"0; 0.5; 1",dur:"".concat(X,"s"),begin:"".concat(X/B*K,"s"),repeatCount:"indefinite"}),(0,C.jsx)("animate",{attributeName:"y",values:"".concat(ae,"; ").concat(De,"; ").concat(ae),keyTimes:"0; 0.5; 1",dur:"".concat(X,"s"),begin:"".concat(X/B*K,"s"),repeatCount:"indefinite"})]},K)})]})}function Ue(i,k){var O=l.useContext(V),K=O.speechRecording,G=O.onSpeechDisabled,pe=O.prefixCls,ae=null;return K?ae=(0,C.jsx)(Te,{className:"".concat(pe,"-recording-icon")}):G?ae=(0,C.jsx)(qe.Z,{}):ae=(0,C.jsx)(nn.Z,{}),(0,C.jsx)(H,E()(E()({icon:ae,variant:"text"},i),{},{action:"onSpeech",ref:k}))}var Ee=l.forwardRef(Ue),Ae=e(68400),en=e.n(Ae),ze=e(9053),Je,rn=(0,ze.vJ)(Je||(Je=en()([`
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
    flex: 1;
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
`])),function(i){return i.theme.prefixCls},function(i){return i.theme.colorBgBase},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.motionDurationSlow},function(i){return i.theme.lineWidth},function(i){return i.theme.colorPrimaryHover},function(i){return i.theme.lineWidth},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.colorBgContainerDisabled},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.paddingXS},function(i){return i.theme.colorTextTertiary},function(i){return"var(--".concat(i.theme.prefixCls,"-color-fill-disable)")},function(i){return i.theme.controlHeight},function(i){return i.theme.controlHeight},function(i){return i.theme.prefixCls}),Ye=rn,Oe=e(52677),cn=e.n(Oe),t;!t&&typeof window!="undefined"&&(t=window.SpeechRecognition||window.webkitSpeechRecognition);function Se(i,k){var O=(0,s.zX)(i),K=l.useMemo(function(){return cn()(k)==="object"?[k.recording,k.onRecordingChange,typeof k.recording=="boolean"]:[void 0,void 0,!1]},[k]),G=y()(K,3),pe=G[0],ae=G[1],De=G[2],tn=l.useState(null),an=y()(tn,2),un=an[0],sn=an[1];l.useEffect(function(){if(typeof navigator!="undefined"&&"permissions"in navigator){var fn=null;return navigator.permissions.query({name:"microphone"}).then(function(ee){sn(ee.state),ee.onchange=function(){sn(this.state)},fn=ee}),function(){fn&&(fn.onchange=null)}}},[]);var Re=t&&un!=="denied",Be=l.useRef(null),ln=(0,s.C8)(!1,{value:pe}),dn=y()(ln,2),gn=dn[0],mn=dn[1],xn=l.useRef(!1),pn=function(){if(Re&&!Be.current){var ee=new t;ee.onstart=function(){mn(!0)},ee.onend=function(){mn(!1)},ee.onresult=function(je){if(!xn.current){var Xe,on=(Xe=je.results)===null||Xe===void 0||(Xe=Xe[0])===null||Xe===void 0||(Xe=Xe[0])===null||Xe===void 0?void 0:Xe.transcript;O(on)}xn.current=!1},Be.current=ee}},hn=(0,s.zX)(function(fn){fn&&!gn||(xn.current=fn,De?ae==null||ae(!gn):(pn(),Be.current&&(gn?(Be.current.stop(),ae==null||ae(!1)):(Be.current.start(),ae==null||ae(!0)))))});return[Re,hn,gn]}var we=e(89102),ke=e(67055),S,xe=(0,ze.vJ)(S||(S=en()([`
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

`])),function(i){return i.theme.prefixCls},function(i){return i.theme.borderRadius},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.colorPrimary},function(i){return i.theme.colorPrimary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorFillTertiary},function(i){return i.theme.colorTextSecondary});function de(i){var k=(0,Q.wv)(),O=k.getPrefixCls,K=O("sender-mode-select"),G=i.value,pe=i.onChange,ae=(0,l.useMemo)(function(){var tn=i.options.find(function(an){return an.value===G})||{};return tn},[i.value]),De=(0,C.jsx)(we.Z,{onClick:function(){return pe(void 0)},style:{cursor:"pointer",fontSize:20}});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(xe,{}),(0,C.jsxs)("div",{className:K,style:i.style,children:[(0,C.jsx)("div",{className:"".concat(K,"-options ").concat(G?"".concat(K,"-hide"):""),children:i.options.map(function(tn){var an=(0,C.jsx)(fe,E()({onClick:function(){return pe(tn.value)},className:"".concat(K,"-option")},tn),tn.value);return an})}),(0,C.jsx)("div",{className:"".concat(K,"-display ").concat(G?"":"".concat(K,"-hide")),children:(0,C.jsxs)("div",{className:"".concat(K,"-display-flex"),children:[(0,C.jsx)(fe,E()(E()({},ae),{},{label:(ae==null?void 0:ae.selectedLabel)||(ae==null?void 0:ae.label),className:"".concat(K,"-display-label")})),i.desc&&(0,C.jsx)("div",{className:"".concat(K,"-display-desc"),children:i.desc}),i.closeTip?(0,C.jsx)(ke.Z,{title:i.closeTip,children:De}):De]})})]})]})}function fe(i){var k=(0,C.jsxs)("div",{className:i.className,onClick:i.onClick,children:[i.icon,i.label]});return i.tooltip?(0,C.jsx)(ke.Z,{title:i.tooltip,placement:"topLeft",children:k}):k}var ge=e(85441),ie=e(32485),c=["styles","classNames","className","rootClassName","style","defaultValue","value","readOnly","enableFocusExpand","sendDisabled","submitType","onSubmit","loading","onCancel","onChange","onFocus","onBlur","actions","onKeyPress","onKeyDown","disabled","header","onPaste","allowSpeech","onPasteFile","components","initialRows","scalable"];function N(i,k,O){return(0,M.Z)(i,k)||O}var F=l.forwardRef(function(i,k){var O=i,K=O.styles,G=K===void 0?{}:K,pe=O.classNames,ae=pe===void 0?{}:pe,De=O.className,tn=O.rootClassName,an=O.style,un=O.defaultValue,sn=O.value,Re=O.readOnly,Be=O.enableFocusExpand,ln=Be===void 0?!1:Be,dn=O.sendDisabled,gn=dn===void 0?!1:dn,mn=O.submitType,xn=mn===void 0?"enter":mn,pn=O.onSubmit,hn=O.loading,fn=O.onCancel,ee=O.onChange,je=O.onFocus,Xe=O.onBlur,on=O.actions,Ln=O.onKeyPress,jn=O.onKeyDown,bn=O.disabled,Tn=O.header,Sn=O.onPaste,Bn=O.allowSpeech,Zn=O.onPasteFile,$n=O.components,Kn=O.initialRows,Jn=Kn===void 0?2:Kn,Xn=O.scalable,Yn=f()(O,c),Rn=Xn,Vn=(0,l.useState)(Rn?!1:void 0),Fn=y()(Vn,2),On=Fn[0],qn=Fn[1],et=(0,l.useState)(!1),Wn=y()(et,2),Nn=Wn[0],kn=Wn[1],zn=l.useMemo(function(){return On?{maxRows:10,minRows:10}:{maxRows:10,minRows:Jn}},[Rn,On]),Qn=(0,Q.wv)(),nt=Qn.direction,tt=Qn.getPrefixCls,yn=tt("sender"),_n=l.useRef(null),In=l.useRef(null);m(k,function(){var Le,Ve;return{nativeElement:_n.current,focus:(Le=In.current)===null||Le===void 0?void 0:Le.focus,blur:(Ve=In.current)===null||Ve===void 0?void 0:Ve.blur}}),(0,n.Z)(_n,{onFocus:function(Ve){kn(!0),je==null||je()},onBlur:function(){_n.current.contains(document.activeElement)||(kn(!1),Xe==null||Xe())}}),(0,_.Z)("click",function(Le){kn(!0),je==null||je()},{target:_n});var Hn="".concat(yn,"-input"),rt=h()(yn,De,tn,b()(b()(b()(b()({},"".concat(yn,"-rtl"),nt==="rtl"),"".concat(yn,"-disabled"),bn),"".concat(yn,"-focus"),Nn&&ln),"".concat(yn,"-blur"),!Nn&&ln)),at="".concat(yn,"-actions-btn"),Un="".concat(yn,"-actions-list"),st=(0,s.C8)(un||"",{value:sn}),Gn=y()(st,2),An=Gn[0],r=Gn[1],p=function(Ve,vn){r(Ve),ee&&ee(Ve,vn)},o=Se(function(Le){p("".concat(An," ").concat(Le))},Bn),u=y()(o,3),T=u[0],R=u[1],se=u[2],le=N($n,["input"],v.Z.TextArea),me=(0,d.Z)(Yn,{attr:!0,aria:!0,data:!0}),J=E()(E()({},me),{},{ref:In}),ce=function(){!Pn.onSendDisabled&&pn&&!hn&&pn(An)},ue=function(){p("")},_e=l.useRef(!1),be=function(){_e.current=!0},Ne=function(){_e.current=!1},Qe=function(Ve){var vn=Ve.key==="Enter"&&!_e.current;switch(xn){case"enter":vn&&!Ve.shiftKey&&(Ve.preventDefault(),ce());break;case"shiftEnter":vn&&Ve.shiftKey&&(Ve.preventDefault(),ce());break}Ln&&Ln(Ve)},Ke=function(Ve){var vn,En=(vn=Ve.clipboardData)===null||vn===void 0?void 0:vn.files[0];En&&Zn&&(Zn(En),Ve.preventDefault()),Sn==null||Sn(Ve)},Me=function(Ve){var vn,En;Ve.target!==((vn=_n.current)===null||vn===void 0?void 0:vn.querySelector(".".concat(Hn)))&&Ve.preventDefault(),(En=In.current)===null||En===void 0||En.focus()},He=l.useMemo(function(){var Le=Array.isArray(i.prefix)?x()(i.prefix):[i.prefix];return Rn&&Le.push((0,C.jsx)(ne.Z,{onClick:function(){return qn(!On)},bordered:!1,icon:On?(0,C.jsx)(ge.Z,{}):(0,C.jsx)(ie.Z,{})},"zoom")),Le},[i.prefix,Rn,On,Bn]),Cn=(0,C.jsx)(I.Z,{className:"".concat(Un,"-presets"),children:hn?(0,C.jsx)($,{}):(0,C.jsx)($e,{})});typeof on=="function"?Cn=on(Cn,{components:{SendButton:$e,ClearButton:g,LoadingButton:$}}):on&&(Cn=on);var Pn={prefixCls:at,onSend:ce,onSendDisabled:!An||gn,onClear:ue,onClearDisabled:!An,onCancel:fn,onCancelDisabled:!hn,onSpeech:function(){return R(!1)},onSpeechDisabled:!T,speechRecording:se,disabled:bn};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Ye,{}),(0,C.jsxs)("div",{ref:_n,className:rt,style:an,children:[Tn&&(0,C.jsx)(re.a.Provider,{value:{prefixCls:yn,focus:Nn,enableFocusExpand:ln},children:Tn}),(0,C.jsxs)("div",{className:"".concat(yn,"-content"),children:[(0,C.jsx)(le,E()(E()({},J),{},{disabled:bn,style:G.input,className:h()(Hn,ae.input),autoSize:zn,value:An.slice(0,i.maxLength||Number.MAX_SAFE_INTEGER),onChange:function(Ve){p(Ve.target.value,Ve),R(!0)},onPressEnter:Qe,onCompositionStart:be,onCompositionEnd:Ne,onKeyDown:jn,onPaste:Ke,variant:"borderless",readOnly:Re})),(0,C.jsxs)("div",{className:"".concat(yn,"-content-bottom"),children:[He.length>0&&(0,C.jsx)("div",{className:h()("".concat(yn,"-prefix"),ae.prefix),style:G.prefix,children:(0,C.jsxs)(I.Z,{gap:8,children:[Bn&&(0,C.jsx)(V.Provider,{value:Pn,children:(0,C.jsx)(Ee,{})}),He]})}),(0,C.jsxs)("div",{className:h()(Un,ae.actions),style:G.actions,children:[i.maxLength?(0,C.jsxs)("div",{className:"".concat(Un,"-length"),children:[An.length,"/",i.maxLength]}):null,(0,C.jsx)(V.Provider,{value:Pn,children:Cn})]})]})]})]})]})}),Y=F;Y.Header=re.Z,Y.ModeSelect=de;var Z=Y},70770:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return M}});var w=e(89034),x=e(36674),P=e(9343),E=e(48095),A=e(97634),b=e(56044),j=e(68400),y=e.n(j),D=e(9053),f,v=(0,D.vJ)(f||(f=y()([`
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
`])),function(l){return l.theme.prefixCls},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorSuccessBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorSuccess},function(l){return l.theme.colorErrorBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorError},function(l){return l.theme.colorWarningBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorWarning},function(l){return l.theme.colorFillTertiary},function(l){return l.theme.prefixCls},function(l){return l.theme.colorInfo},function(l){return l.theme.colorText},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBgBase},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBgBase},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorText}),I=e(93967),a=e.n(I),h=e(21403),s=e(85893);function d(l){var n=(0,b.wv)(),_=n.getPrefixCls,m=_("status-card"),Q=l.icon||{success:(0,s.jsx)(w.Z,{}),error:(0,s.jsx)(x.Z,{}),warning:(0,s.jsx)(P.Z,{}),info:(0,s.jsx)(E.Z,{})}[l.status];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{}),(0,s.jsxs)("div",{className:a()(m,"".concat(m,"-").concat(l.status)),children:[(0,s.jsxs)("div",{className:"".concat(m,"-header"),children:[(0,s.jsxs)("div",{className:"".concat(m,"-header-top"),children:[(0,s.jsx)("div",{className:"".concat(m,"-header-icon"),children:Q}),(0,s.jsx)("div",{className:"".concat(m,"-header-title"),children:l.title})]}),l.description&&(0,s.jsx)("div",{className:"".concat(m,"-header-description"),children:l.description})]}),l.children&&(0,s.jsx)("div",{className:"".concat(m,"-body"),children:l.children})]})]})}d.HITL=function(l){var n=l.title,_=n===void 0?"\u9700\u8981\u7528\u6237\u4EBA\u5DE5\u5E72\u9884":n,m=l.description,Q=l.waitButtonText,re=Q===void 0?"\u6211\u5DF2\u5B8C\u6210\uFF0C\u7EE7\u7EED\u4EFB\u52A1":Q,ne=l.doneButtonText,C=ne===void 0?"\u7528\u6237\u5DF2\u786E\u8BA4":ne,he=(0,b.wv)(),V=he.getPrefixCls,z=V("status-card"),H=l.done?(0,s.jsx)(h.Z,{onClick:l.onDone,type:"primary",disabled:!0,icon:(0,s.jsx)(A.Z,{}),children:C}):(0,s.jsx)(h.Z,{onClick:l.onDone,type:"primary",children:re});return(0,s.jsx)(d,{status:"info",title:_,children:(0,s.jsxs)("div",{className:"".concat(z,"-HITL"),children:[m&&(0,s.jsx)("div",{className:"".concat(z,"-HITL-desc"),children:m}),(0,s.jsx)("div",{className:"".concat(z,"-HITL-button"),children:H})]})})},d.Statistic=function(l){var n=(0,b.wv)(),_=n.getPrefixCls,m=_("status-card");return(0,s.jsx)("div",{className:"".concat(m,"-statistic"),children:l.values.map(function(Q){return(0,s.jsxs)("div",{className:"".concat(m,"-statistic-item"),children:[(0,s.jsx)("div",{className:"".concat(m,"-statistic-item-title"),children:Q.title}),(0,s.jsx)("div",{className:"".concat(m,"-statistic-item-value"),children:Q.value})]})})})};var M=d},7354:function(Ge,W,e){"use strict";var w=e(15009),x=e.n(w),P=e(9783),E=e.n(P),A=e(97857),b=e.n(A),j=e(77262),y=e.n(j),D=e(93938),f=e.n(D),v=`

`,I=`
`,a=":",h=function(n){return(n!=null?n:"").trim()!==""};function s(){var l="";return new TransformStream({transform:function(_,m){l+=_;var Q=l.split(v);Q.slice(0,-1).forEach(function(re){h(re)&&m.enqueue(re)}),l=Q[Q.length-1]},flush:function(_){h(l)&&_.enqueue(l)}})}function d(){return new TransformStream({transform:function(n,_){var m=n.split(I),Q=m.reduce(function(re,ne){var C=ne.indexOf(a);if(C===-1)throw new Error('The key-value separator "'.concat(a,'" is not found in the sse line chunk!'));var he=ne.slice(0,C);if(!h(he))return re;var V=ne.slice(C+1);return b()(b()({},re),{},E()({},he,V))},{});Object.keys(Q).length!==0&&_.enqueue(Q)}})}function M(l,n){var _=l.readableStream,m=l.transformStream;if(!(_ instanceof ReadableStream))throw new Error("The options.readableStream must be an instance of ReadableStream.");var Q=new TextDecoderStream,re=m?_.pipeThrough(Q).pipeThrough(m):_.pipeThrough(Q).pipeThrough(s()).pipeThrough(d());return re[Symbol.asyncIterator]=f()(x()().mark(function ne(){var C,he,V,z;return x()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:C=this.getReader();case 1:return te.next=4,y()(C.read());case 4:if(he=te.sent,V=he.done,z=he.value,!V){te.next=9;break}return te.abrupt("break",15);case 9:if(z){te.next=11;break}return te.abrupt("continue",1);case 11:return te.next=13,n!=null&&n.openaiCompatible?b()(b()({},z),{},{data:z.data.slice(1)}):z;case 13:te.next=1;break;case 15:case"end":return te.stop()}},ne,this)})),re}W.Z=M},32116:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return w}});function w(x){return new Promise(function(P){return setTimeout(P,x)})}},66366:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return x}});var w={i8:"1.1.43"},x=w.i8},57657:function(Ge,W,e){"use strict";e.r(W);var w=e(5574),x=e.n(w),P=e(9053),E=e(67294),A=e(85893),b=function(){var D=(0,E.useState)({x:0,y:0}),f=x()(D,2),v=f[0],I=f[1],a=(0,E.useState)(!1),h=x()(a,2),s=h[0],d=h[1],M=(0,E.useRef)(null),l=j(),n=l.styles,_=l.cx;(0,E.useEffect)(function(){var V=function(H){if(M.current){var te=M.current.getBoundingClientRect();I({x:H.clientX-te.left,y:H.clientY-te.top})}};return window.addEventListener("mousemove",V),function(){return window.removeEventListener("mousemove",V)}},[]),(0,E.useEffect)(function(){var V=setInterval(function(){d(!0),setTimeout(function(){return d(!1)},150)},5e3);return function(){return clearInterval(V)}},[]);var m=function(){var z=32,H=32,te=v.x-z,ye=v.y-H,g=6,Pe=6,U=Math.sqrt(te*te+ye*ye),ve=50;if(U===0)return{x:0,y:0};var $=Math.min(U/ve,1),Ce=te/U*g*$,Fe=ye/U*Pe*$;return{x:Math.max(-g,Math.min(g,Ce)),y:Math.max(-Pe,Math.min(Pe,Fe))}},Q=function(z){var H=32,te=v.x-H,ye=400;if(Math.abs(te)<ye)return 1;var g=Math.abs(te)-ye,Pe=32-ye,U=Math.min(g/Pe,1);return te>ye?z?1-U*.5:1:te<-ye?z?1:1-U*.5:1},re=m(),ne=m(),C=Q(!0),he=Q(!1);return(0,A.jsxs)("div",{ref:M,className:n.container,children:[(0,A.jsx)("div",{className:_(n.eye,n.leftEye,s?n.blinkingEye:""),style:{transform:"translate(".concat(re.x,"px, ").concat(re.y,"px) ").concat(s?"scaleY(0.1)":"scaleY(".concat(C,")"))}}),(0,A.jsx)("div",{className:_(n.eye,n.rightEye,s?n.blinkingEye:""),style:{transform:"translate(".concat(ne.x,"px, ").concat(ne.y,"px) ").concat(s?"scaleY(0.1)":"scaleY(".concat(he,")"))}})]})};W.default=b;var j=(0,P.kc)(function(y){var D=y.css,f=y.token;return{container:{width:64,height:64,backgroundColor:"black",borderRadius:12,position:"relative",cursor:"pointer",overflow:"hidden",boxShadow:"15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)"},eye:{width:6,height:12,backgroundColor:"white",borderRadius:99,position:"absolute",top:16,transition:"transform 0.1s ease-out"},leftEye:{left:22},rightEye:{left:36},blinkingEye:{transition:"transform 0.05s ease-out"}}})},31295:function(Ge,W,e){"use strict";e.d(W,{Z:function(){return D}});var w=e(68400),x=e.n(w),P=e(67294),E=e(9053),A=e(56044),b=e(85893),j,y=(0,E.vJ)(j||(j=x()([`
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
`])),function(f){return f.theme.prefixCls},function(f){return f.theme.colorText},function(f){return f.theme.colorTextSecondary});function D(f){var v=(0,A.wv)(),I=v.getPrefixCls,a=I("welcome"),h=typeof f.logo=="string"?(0,b.jsx)("img",{className:a+"-logo",src:f.logo}):f.logo;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(y,{}),(0,b.jsxs)("div",{className:a,style:f.style,children:[h,(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:a+"-title",children:f.title}),(0,b.jsx)("div",{className:a+"-desc",children:f.desc})]})]})]})}},43601:function(Ge,W,e){"use strict";e.r(W),e.d(W,{AIGC:function(){return ve.Z},Accordion:function(){return n.Z},AgentScopeRuntimeWebUI:function(){return s.Z},Attachments:function(){return m.Z},Bubble:function(){return Q.Z},ChatAnywhere:function(){return y.ZP},ChatInput:function(){return te.Z},ConfigProvider:function(){return w.ZP},Conversations:function(){return re.Z},CustomCardsContext:function(){return P.NR},CustomCardsProvider:function(){return P.xy},DeepThink:function(){return _.Z},DeepThinking:function(){return _.Z},DefaultCards:function(){return h},DeviceAction:function(){return ne.Z},Disclaimer:function(){return C.Z},HistoryPanel:function(){return re.Z},ImageGenerator:function(){return he.Z},Markdown:function(){return U.Z},Mermaid:function(){return V.Z},OperateCard:function(){return z.Z},Process:function(){return n.Z},Rag:function(){return H.Sn},Sender:function(){return te.Z},SparkChatProvider:function(){return E.ZP},StatusCard:function(){return ye.Z},Stream:function(){return b.Z},Thinking:function(){return H.BI},TodoList:function(){return H.B4},ToolCall:function(){return H.x4},WebSearch:function(){return H.fz},Welcome:function(){return Pe.Z},createCard:function(){return j.L},sleep:function(){return g.Z},useChatAnywhere:function(){return D.TQ},useCustomCardsContext:function(){return P.HJ},useGlobalContext:function(){return A.bN},useInput:function(){return f.G},useMessages:function(){return v.y},useProviderContext:function(){return E.wv},useSessionList:function(){return I.x},uuid:function(){return a.Z},version:function(){return x.Z}});var w=e(55839),x=e(66366),P=e(83962),E=e(56044),A=e(92049),b=e(7354),j=e(50130),y=e(96857),D=e(76289),f=e(37254),v=e(4421),I=e(61316),a=e(88773),h=e(24963),s=e(74823),d=e(22863),M={};for(var l in d)["default","ConfigProvider","version","CustomCardsContext","CustomCardsProvider","SparkChatProvider","useCustomCardsContext","useGlobalContext","useProviderContext","Stream","createCard","ChatAnywhere","useChatAnywhere","useInput","useMessages","useSessionList","uuid","DefaultCards","AgentScopeRuntimeWebUI","Accordion","Process","DeepThink","DeepThinking","Attachments","Bubble","Conversations","HistoryPanel","DeviceAction","Disclaimer","ImageGenerator","Mermaid","OperateCard","ChatInput","Sender","StatusCard","sleep","Welcome","Markdown","AIGC"].indexOf(l)<0&&(M[l]=function($){return d[$]}.bind(0,l));e.d(W,M);var n=e(487),_=e(14082),m=e(36417),Q=e(9146),re=e(9368),ne=e(55031),C=e(10325),he=e(28446),V=e(12181),z=e(31382),H=e(56809),te=e(93164),ye=e(70770),g=e(32116),Pe=e(31295),U=e(82679),ve=e(86578)}}]);
