(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1997],{86578:function($e,K,e){"use strict";e.d(K,{Z:function(){return de}});var F=e(97857),m=e.n(F),N=e(9783),g=e.n(N),b=e(13769),M=e.n(b),y=e(67294),j=e(93967),T=e.n(j),h=e(56044),f=e(66672),E=e(50993),v=e(44294),r=e(12624),n=e(41154),a=e(68400),S=e.n(a),l=e(9053),s,A=(0,l.vJ)(s||(s=S()([`
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

    &-content {
      line-height: 1;
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
`])),function(H){return H.theme.prefixCls},function(H){return H.theme.prefixCls},function(H){return H.theme.prefixCls},function(H){return H.theme.prefixCls},function(H){return H.theme.borderRadius},function(H){return H.theme.colorBorderSecondary},function(H){return H.theme.colorBgBase},function(H){return H.theme.colorText},function(H){return H.theme.colorText}),i=e(85893),L=["className","icon"],q=n.Z.Dragger,Z=function(ae){var k=ae.className,oe=ae.icon,ue=M()(ae,L),Ye=(0,h.wv)(),xe=Ye.getPrefixCls,Fe=xe("media-upload");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(A,{}),(0,i.jsx)(q,m()(m()({showUploadList:!1,className:T()(Fe,k)},ue),{},{children:(0,i.jsxs)("div",{className:T()("".concat(Fe,"-thumbnail")),children:[(0,i.jsx)("div",{className:T()("".concat(Fe,"-thumbnail-gradient"))}),(0,i.jsxs)("div",{className:T()("".concat(Fe,"-thumbnail-content")),children:[oe||(0,i.jsx)(r.Z,{className:T()("".concat(Fe,"-thumbnail-icon"))}),ae.maxCount>1&&(0,i.jsxs)("div",{className:T()("".concat(Fe,"-thumbnail-count")),children:[ae.fileList.length,"/",ae.maxCount]})]})]})}))]})},W=Z,re,z=(0,l.vJ)(re||(re=S()([`
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
`])),function(H){return H.theme.prefixCls},function(H){return H.theme.colorText},function(H){return H.theme.colorTextTertiary}),C=function(ae){var k=ae.className,oe=ae.title,ue=ae.description,Ye=(0,h.wv)(),xe=Ye.getPrefixCls,Fe=xe("media-info"),Xe=!!oe||!!ue;return Xe?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(z,{}),(0,i.jsxs)("div",{className:T()(Fe,k),children:[oe&&(0,i.jsx)("div",{className:T()("".concat(Fe,"-title")),children:oe}),ue&&(0,i.jsx)("div",{className:T()("".concat(Fe,"-description")),children:ue})]})]}):null},w=C,G,_e=(0,l.vJ)(G||(G=S()([`
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
    max-width: 100%;
    overflow-x: auto;
  }

  .`,`-attachment-list {
    padding: 0;
  }

  .`,`-attachment-list-card-type-preview {
    width: 100px;
    height: 64px;
  }
}
`])),function(H){return H.theme.prefixCls},function(H){return H.theme.colorBorderSecondary},function(H){return H.theme.prefixCls},function(H){return H.theme.prefixCls},function(H){return H.theme.prefixCls},function(H){return H.theme.prefixCls}),x=["title","description","maxCount"],p=function(ae){var k=ae.className,oe=ae.onUpload,ue=oe===void 0?[]:oe,Ye=ae.attachedFiles,xe=Ye===void 0?[[]]:Ye,Fe=ae.onFileChange,Xe=(0,h.wv)(),pn=Xe.getPrefixCls,hn=(0,y.useContext)(v.a),un=hn.focus,D=hn.enableFocusExpand,Pe=pn("aigc-sender-header"),I=(0,y.useMemo)(function(){return xe.flat().length>0?!0:ue.length<=0?!1:!!(un||!D)},[ue,xe,D,un]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_e,{}),(0,i.jsx)(f.Z.Header,{closable:!1,open:I,children:(0,i.jsx)("div",{className:T()(Pe,k),tabIndex:0,children:ue==null?void 0:ue.map(function(ee,be){var ke=ee.title,He=ee.description,Re=ee.maxCount,ze=Re===void 0?1:Re,fe=M()(ee,x),We=xe[be]||[];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(W,m()({className:T()(g()({},"".concat(Pe,"-upload-hidden"),We.length>=ze)),maxCount:ze,fileList:We,onChange:function(Ce){ee.beforeUpload&&Ce.file.status&&Fe(be,Ce.fileList),ee.beforeUpload||Fe(be,Ce.fileList)},showUploadList:!1},fe),"upload-".concat(be)),We.length>0&&(0,i.jsx)(E.Z,{items:We,onChange:function(Ce){return Fe(be,Ce.fileList)}},"attachments-".concat(be)),ze===1&&(0,i.jsx)(w,{title:ke,description:He},"info-".concat(be))]})})})})]})},pe=p,de={SenderHeader:pe,Info:w,Upload:W}},487:function($e,K,e){"use strict";e.d(K,{Z:function(){return _e}});var F=e(9783),m=e.n(F),N=e(97857),g=e.n(N),b=e(5574),M=e.n(b),y=e(67294),j=e(93967),T=e.n(j),h=e(56044),f=e(85893);function E(x){var p=(0,h.wv)(),pe=p.getPrefixCls,de=pe("accordion-content-body");return(0,f.jsxs)("div",{className:de,children:[x.headerLeft||x.headerRight?(0,f.jsxs)("div",{className:"".concat(de,"-header"),children:[x.headerLeft,(0,f.jsx)("div",{style:{flex:1}}),x.headerRight]}):null,(0,f.jsx)("div",{className:"".concat(de,"-body"),children:x.children})]})}var v=e(9361);function r(x){var p=(0,h.wv)(),pe=p.theme,de=p.getPrefixCls,H=(pe==null?void 0:pe.algorithm)===v.Z.darkAlgorithm,ae=de("accordion-soft-light-title");return(0,f.jsx)("div",{className:ae,style:H?{}:{color:"rgba(38, 36, 76, 0.88)"},children:x.children})}var n=e(68400),a=e.n(n),S=e(9053),l,s=(0,S.vJ)(l||(l=a()([`
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
`])),function(x){return x.theme.prefixCls},function(x){return x.theme.colorSuccess},function(x){return x.theme.prefixCls},function(x){return x.theme.colorError},function(x){return x.theme.colorTextSecondary},function(x){return x.theme.colorBgBase},function(x){return x.theme.borderRadiusLG},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.colorBorder},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.colorBgBase},function(x){return x.theme.colorText},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.colorFillTertiary},function(x){return x.theme.prefixCls},function(x){return x.theme.colorTextSecondary},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.colorFillTertiary},function(x){return x.theme.colorText},function(x){return x.theme.colorBgBase}),A=e(40443),i=e(89034),L=e(9343),q=e(36674),Z=e(9838),W=e(28387),re=e(16592);function z(x){var p=(0,h.wv)(),pe=p.getPrefixCls,de=pe("accordion-group"),H=y.useState(x.defaultOpen),ae=M()(H,2),k=ae[0],oe=ae[1],ue=x.open!==void 0?x.open:k,Ye=x.inline?"close":ue?"open":"close",xe=(0,y.useMemo)(function(){if(x.icon)return x.icon;if(x.status==="generating")return(0,f.jsx)(A.Z,{className:"".concat(de,"-icon-loading"),spin:!0});if(x.status==="finished")return(0,f.jsx)(i.Z,{className:"".concat(de,"-icon-success")});if(x.status==="interrupted")return(0,f.jsx)(L.Z,{});if(x.status==="error")return(0,f.jsx)(q.Z,{className:"".concat(de,"-icon-error")})},[x.status,x.icon]),Fe=(0,y.useMemo)(function(){return x.steps?x.steps.map(function(Xe,pn){var hn=pn===0,un=pn===x.steps.length-1;return(0,f.jsx)(z,g()(g()({},Xe),{},{isFirst:hn,isLast:un}),Xe.id||pn)}):x.children},[x.steps,x.children]);return(0,f.jsxs)("div",{className:T()("".concat(de),"".concat(de,"-").concat(Ye)),children:[(0,f.jsxs)("div",{className:T()("".concat(de,"-header"),"".concat(de,"-header-").concat(Ye)),onClick:function(){return Fe&&x.open===void 0&&oe(!k)},children:[xe?(0,f.jsx)("div",{className:T()("".concat(de,"-header-icon"),m()(m()(m()({},"".concat(de,"-header-icon-line"),x.iconLine),"".concat(de,"-header-icon-first"),x.isFirst),"".concat(de,"-header-icon-last"),x.isLast&&Ye==="close"||x.level)),children:xe}):null,(0,f.jsx)("div",{children:x.title}),Fe&&(0,f.jsx)("div",{className:T()("".concat(de,"-header-arrow")),children:ue?(0,f.jsx)(W.Z,{}):(0,f.jsx)(Z.Z,{})}),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{style:{flex:1}}),x.rightChildren]})]}),(0,f.jsx)(w,{prefixCls:de,stateOpen:ue,status:Ye,inline:x.inline,content:Fe,bodyStyle:x.bodyStyle,level:x.level})]})}var C={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function w(x){var p=(0,y.useRef)(null);if(!x.content)return null;var pe=x.prefixCls,de=x.stateOpen,H=x.inline,ae=x.bodyStyle,k=x.level;return(0,f.jsx)(re.ZP,{nodeRef:p,in:de,timeout:300,children:function(ue){return(0,f.jsx)("div",{style:g()(g()(g()({},ae),k?{marginTop:0}:{}),{},{transition:"opacity ".concat(300,"ms ease-in-out")},C[ue]),className:T()("".concat(pe,"-body"),"".concat(pe,"-body-").concat(de?"open":"close"),m()({},"".concat(pe,"-body-inline"),H)),children:x.content})}})}function G(x){var p=x.level,pe=p===void 0?1:p,de=x.isFirst,H=de===void 0?!0:de,ae=x.isLast,k=ae===void 0?!0:ae;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{}),(0,f.jsx)(z,g()(g()({},x),{},{level:pe,isFirst:H,isLast:k}))]})}G.BodyContent=E,G.SoftLightTitle=r;var _e=G},14082:function($e,K,e){"use strict";e.d(K,{Z:function(){return y}});var F=e(487),m=e(56044),N=e(9361),g=e(93967),b=e.n(g),M=e(85893);function y(j){var T=(0,m.wv)(),h=T.theme,f=T.getPrefixCls,E=f("accordion-deep-thinking"),v=(h==null?void 0:h.algorithm)===N.Z.darkAlgorithm,r=(0,M.jsx)("img",{style:{display:"block",width:16,height:16,filter:v?"invert(1)  brightness(100%) saturate(0%)":""},src:"https://img.alicdn.com/imgextra/i2/O1CN01QZgWRv1I4JM0BAZ9O_!!6000000000839-54-tps-56-56.apng"}),n=j.title||"Deep thinking";j.loading&&(n+="...");var a=j.loading?(0,M.jsx)(F.Z.SoftLightTitle,{children:n}):n,S=j.maxHeight?{maxHeight:j.maxHeight,overflowY:"auto"}:{},l=j.defaultOpen!==void 0?j.defaultOpen:j.autoCloseOnFinish&&!j.loading?!1:void 0;return(0,M.jsx)(F.Z,{title:a,status:j.loading?"generating":"finished",icon:j.loading?r:null,defaultOpen:l,open:j.open,bodyStyle:S,inline:!0,children:(0,M.jsx)("div",{className:b()(E,j.className),children:j.content||"..."})})}},13224:function($e,K,e){"use strict";e.d(K,{Z:function(){return ft}});var F=e(97857),m=e.n(F),N=e(9783),g=e.n(N),b=e(56044),M=e(68400),y=e.n(M),j=e(9053),T,h=(0,j.vJ)(T||(T=y()([`
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
  .`,"-chat-anywhere-message-list .",`-bubble-list-scroll::before {
    content: ' ';
    display: block;
    height: 54px;
    flex: 0 0 54px;
  }

  .`,"-chat-anywhere-message-list .","-bubble-list-scroll.",`-bubble-list-order-desc {
    &::before {
      height: 16px;
      flex: 0 0 16px;
    }

    &::after {
      height: 27px;
      flex: 0 0 27px;
    }
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
`])),function(d){return d.theme.prefixCls},function(d){return d.theme.colorBgBase},function(d){return d.theme.prefixCls},function(d){return d.theme.colorBgBase},function(d){return d.theme.prefixCls},function(d){return d.theme.colorFillTertiary},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls}),f=e(93967),E=e.n(f),v=e(7906),r=e(67294),n=e(15009),a=e.n(n),S=e(99289),l=e.n(S),s=e(5574),A=e.n(s),i=e(66672),L=e(10325),q=e(79785),Z=e(16423),W=e(19632),re=e.n(W),z=e(13769),C=e.n(z),w=e(41154),G=e(64057),_e=e(81644),x=e(50993),p=e(85893),pe=["trigger"];function de(d,P){var u=(0,r.useState)([]),_=A()(u,2),R=_[0],B=_[1],$=(0,r.useRef)([]);$.current=R;var Oe=(0,r.useCallback)(function(){return $.current},[]),ye=d||{},ge=ye.trigger,Ee=C()(ye,pe),Le=(0,r.useRef)(0),Ke=(0,r.useCallback)(function(je){if(Ee!=null&&Ee.customRequest){var Ie=je.type||"",me=je.name||"";if(Ee.accept){var se=Ee.accept.split(",").some(function(Ze){var mn=Ze.trim();if(!mn)return!1;if(mn.startsWith("."))return me.toLowerCase().endsWith(mn.toLowerCase());if(mn==="*/*")return!0;if(mn.includes("*")){var En=mn.split("/"),Ln=A()(En,1),zn=Ln[0],at=Ie.split("/"),Gn=A()(at,1),lt=Gn[0];return zn===lt}return Ie===mn});if(!se)return}if(!(Ee.maxCount&&$.current.length>=Ee.maxCount)){var he=function(){var mn=me.match(/\.([^.]+)$/);if(mn)return mn[1].toLowerCase();var En=Ie.match(/\/([^/+]+)/);return En?En[1].toLowerCase():"bin"},Ne="paste-".concat(Date.now(),"-").concat(Le.current++),yn={uid:Ne,name:me||"pasted-".concat(Date.now(),".").concat(he()),size:je.size,type:Ie,status:"uploading",percent:0,originFileObj:je};if(B(function(Ze){return[].concat(re()(Ze),[yn])}),Ie.startsWith("image/")){var vn=new FileReader;vn.onload=function(Ze){var mn,En=(mn=Ze.target)===null||mn===void 0?void 0:mn.result;typeof En=="string"&&B(function(Ln){return Ln.map(function(zn){return zn.uid===Ne?m()(m()({},zn),{},{thumbUrl:En}):zn})})},vn.readAsDataURL(je)}Ee.customRequest({file:je,filename:"file",action:"",method:"POST",onSuccess:function(mn){B(function(En){return En.map(function(Ln){return Ln.uid===Ne?m()(m()({},Ln),{},{status:"done",response:mn,percent:100}):Ln})})},onError:function(mn){B(function(En){return En.map(function(Ln){return Ln.uid===Ne?m()(m()({},Ln),{},{status:"error",error:mn}):Ln})})},onProgress:function(mn){B(function(En){return En.map(function(Ln){return Ln.uid===Ne?m()(m()({},Ln),{},{percent:mn==null?void 0:mn.percent}):Ln})})}},{defaultRequest:function(){}})}}},[Ee==null?void 0:Ee.customRequest,Ee==null?void 0:Ee.accept]);if(Ee!=null&&Ee.customRequest){var ln=(0,p.jsx)(w.Z,m()(m()({fileList:R,showUploadList:!1,onChange:function(Ie){B(Ie.fileList)}},Ee),{},{disabled:P==null?void 0:P.disabled,children:ge?r.createElement(ge,{disabled:P==null?void 0:P.disabled}):(0,p.jsx)(G.Z,{disabled:P==null?void 0:P.disabled,icon:(0,p.jsx)(_e.Z,{}),bordered:!1})})),Te=(0,p.jsx)(i.Z.Header,{closable:!1,open:(R==null?void 0:R.length)>0,children:(0,p.jsx)(x.Z,{items:R,onChange:function(Ie){return B(Ie.fileList)}})});return{fileList:R,getFileList:Oe,setFileList:B,handlePasteFile:Ke,uploadIconButton:ln,uploadFileListHeader:Te}}else return{enabled:!1,handlePasteFile:void 0}}function H(d){var P=(0,q.Z)(""),u=A()(P,3),_=u[0],R=u[1],B=u[2],$=(0,b.wv)().getPrefixCls("chat-anywhere-input"),Oe=(0,v.Uk)(function(tn){return tn.sender}),ye=(0,Z.vB)(function(tn){return tn}),ge=Oe||{},Ee=ge.placeholder,Le=Ee===void 0?"":Ee,Ke=ge.disclaimer,ln=Ke===void 0?"":Ke,Te=ge.maxLength,je=ge.beforeSubmit,Ie=je===void 0?function(){return Promise.resolve(!0)}:je,me=ge.beforeUI,se=ge.afterUI,he=ge.attachments,Ne=ge.prefix,yn=ge.allowSpeech,vn=ge.suggestions,Ze=de(he,{disabled:!!ye.disabled}),mn=Ze.getFileList,En=Ze.setFileList,Ln=Ze.handlePasteFile,zn=Ze.uploadIconButton,at=Ze.uploadFileListHeader,Gn=(0,r.useCallback)(l()(a()().mark(function tn(){var ct,yt;return a()().wrap(function(it){for(;;)switch(it.prev=it.next){case 0:return it.next=2,Ie();case 2:if(ct=it.sent,ct){it.next=5;break}return it.abrupt("return");case 5:yt=((mn==null?void 0:mn())||[]).filter(function(bt){var _t;return(_t=bt.response)===null||_t===void 0?void 0:_t.url}),d.onSubmit({query:B(),fileList:yt}),R(""),En&&En([]);case 9:case"end":return it.stop()}},tn)})),[]),lt=(0,r.useCallback)(function(){d.onCancel()},[]);return(0,p.jsxs)("div",{className:$,children:[(0,p.jsxs)("div",{className:"".concat($,"-wrapper"),children:[me,(0,p.jsx)(i.Z,{loading:ye.loading,disabled:ye.disabled,placeholder:Le,value:_,prefix:(0,p.jsxs)(p.Fragment,{children:[zn,Ne]}),header:at,onChange:R,maxLength:Te,onSubmit:Gn,onCancel:lt,allowSpeech:yn,onPasteFile:Ln,suggestions:vn}),se]}),ln?(0,p.jsx)(L.Z,{desc:ln}):(0,p.jsx)("div",{className:"".concat($,"-blank")})]})}var ae=e(46624),k=e(45953),oe=e(59214),ue=e(68870),Ye=e(64437),xe=["render"];function Fe(d){var P=(0,v.Uk)(function(ye){return ye.welcome});if(!P)return null;var u=P.render,_=C()(P,xe);if(u)return P.render({greeting:P.greeting,avatar:P.avatar,description:P.description,prompts:P.prompts,onSubmit:d.onSubmit});var R=_.greeting,B=_.avatar,$=_.prompts,Oe=_.description;return(0,p.jsx)(Ye.Z,{greeting:R,avatar:B,description:Oe,prompts:$,onClick:function(ge){return d.onSubmit({query:ge})}})}var Xe=e(73935),pn=10;function hn(d,P){var u=(0,r.useState)(pn),_=A()(u,2),R=_[0],B=_[1];(0,r.useEffect)(function(){B(pn)},[P]);var $=(0,r.useMemo)(function(){return d.filter(function(Ke){return Ke.history})},[d]),Oe=(0,r.useMemo)(function(){return d.filter(function(Ke){return!Ke.history})},[d]),ye=$.slice(0,R),ge=R>=$.length,Ee=(0,r.useMemo)(function(){return[].concat(re()(Oe),re()(ye))},[Oe,ye]),Le=(0,r.useCallback)(function(){return new Promise(function(Ke){setTimeout(function(){(0,Xe.flushSync)(function(){B(function(ln){return ln+pn})}),Ke()},300)})},[]);return{visibleMessages:Ee,noMore:ge,loadMore:Le}}function un(d){var P=(0,oe.useContextSelector)(k.ar,function(Le){return Le.messages}),u=r.useMemo(function(){return re()(P||[]).reverse()},[P]),_=(0,b.wv)().getPrefixCls("chat-anywhere-message-list"),R=(0,oe.useContextSelector)(ue.Af,function(Le){return Le.currentSessionId}),B=r.useRef(null),$=r.useRef(u.length),Oe=hn(u,R),ye=Oe.visibleMessages,ge=Oe.noMore,Ee=Oe.loadMore;return r.useEffect(function(){if(u.length>$.current){var Le;(Le=B.current)===null||Le===void 0||Le.scrollToBottom()}$.current=u.length},[u.length]),u.length===0?(0,p.jsx)("div",{className:E()(_,"".concat(_,"-welcome")),children:(0,p.jsx)(Fe,{onSubmit:d.onSubmit})}):(0,p.jsx)(ae.Z.List,{ref:B,onLoadMore:ge?void 0:Ee,noMore:ge,order:"desc",classNames:{wrapper:_},items:ye},R)}var D,Pe=(0,j.vJ)(D||(D=y()([`
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



.`,"-chat-anywhere-message-list .",`-bubble-list-scroll::-webkit-scrollbar {
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

.`,"-chat-anywhere-message-list .",`-bubble-list-wrapper {
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
`])),function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls}),I=e(32116),ee=e(31119),be=e(88773),ke=e(12444),He=e.n(ke),Re=e(72004),ze=e.n(Re),fe=function(d){return d.Created="created",d.InProgress="in_progress",d.Completed="completed",d.Canceled="canceled",d.Failed="failed",d.Rejected="rejected",d.Unknown="unknown",d}({}),We=function(d){return d.ASSISTANT="assistant",d.USER="user",d.SYSTEM="system",d}({}),Se=function(d){return d.MESSAGE="message",d.REASONING="reasoning",d.PLUGIN_CALL="plugin_call",d.PLUGIN_CALL_OUTPUT="plugin_call_output",d.FUNCTION_CALL="function_call",d.FUNCTION_CALL_OUTPUT="function_call_output",d.COMPONENT_CALL="component_call",d.COMPONENT_CALL_OUTPUT="component_call_output",d.MCP_LIST_TOOLS="mcp_list_tools",d.MCP_APPROVAL_REQUEST="mcp_approval_request",d.MCP_APPROVAL_RESPONSE="mcp_approval_response",d.MCP_CALL="mcp_call",d.MCP_CALL_OUTPUT="mcp_call_output",d.HEARTBEAT="heartbeat",d.ERROR="error",d}({}),Ce=function(d){return d.TEXT="text",d.DATA="data",d.IMAGE="image",d.AUDIO="audio",d.VIDEO="video",d.FILE="file",d.REFUSAL="refusal",d}({}),Ge=function(){function d(){He()(this,d),g()(this,"data",void 0)}return ze()(d,[{key:"isImageFile",value:function(u){return u.type.indexOf("image/")===0}},{key:"isVideoFile",value:function(u){return u.type.indexOf("video/")===0}},{key:"isAudioFile",value:function(u){return u.type.indexOf("audio/")===0}},{key:"buildImageContent",value:function(u){var _;return{type:Ce.IMAGE,image_url:(_=u.response)===null||_===void 0?void 0:_.url,status:fe.Created}}},{key:"buildTextContent",value:function(u){return{type:Ce.TEXT,text:u,status:fe.Created}}},{key:"buildVideoContent",value:function(u){var _;return{type:Ce.VIDEO,video_url:(_=u.response)===null||_===void 0?void 0:_.url,status:fe.Created}}},{key:"buildAudioContent",value:function(u){var _,R,B;return{type:Ce.AUDIO,audio_url:(_=u.response)===null||_===void 0?void 0:_.url,data:(R=u.response)===null||R===void 0?void 0:R.url,format:(B=u.type)===null||B===void 0?void 0:B.replace("audio/",""),status:fe.Created}}},{key:"buildFileContent",value:function(u){var _;return{type:Ce.FILE,file_url:(_=u.response)===null||_===void 0?void 0:_.url,file_id:u.file_id,file_name:u.name,file_size:u.size,status:fe.Created}}},{key:"handle",value:function(u){var _,R=this;this.data={input:[]};var B=[this.buildTextContent(u.query)];return(_=u.fileList)!==null&&_!==void 0&&_.length&&u.fileList.forEach(function($){R.isImageFile($)?B.push(R.buildImageContent($)):R.isVideoFile($)?B.push(R.buildVideoContent($)):R.isAudioFile($)?B.push(R.buildAudioContent($)):B.push(R.buildFileContent($))}),this.data={input:[{role:"user",type:Se.MESSAGE,content:B}]},this.data}},{key:"handleApproval",value:function(u){return this.data={input:u},this.data}}],[{key:"getHistoryMessages",value:function(u){return u.reduce(function(_,R){var B;return(B=R.cards)!==null&&B!==void 0&&B.length?_.concat(R.cards[0].data.input||R.cards[0].data.output):_},[])}}]),d}(),we=Ge;function dn(d){var P=d.currentQARef,u=(0,k.De)(),_=u.updateMessage,R=u.getMessages,B=u.removeMessage,$=(0,r.useCallback)(function(Le){return P.current.abortController=new AbortController,P.current.request={id:(0,be.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new we().handle(Le)}]},Xe.flushSync(function(){_(P.current.request)}),P.current.request},[P,_]),Oe=(0,r.useCallback)(function(Le){return P.current.abortController=new AbortController,P.current.request={id:(0,be.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new we().handleApproval(Le)}]},Xe.flushSync(function(){_(P.current.request)}),P.current.request},[P,_]),ye=(0,r.useCallback)(function(){return P.current.response={id:(0,be.Z)(),role:"assistant",cards:[],msgStatus:"generating"},_(P.current.response),P.current.response},[P,_]),ge=(0,r.useCallback)(function(){return we.getHistoryMessages(R())},[R]),Ee=(0,r.useCallback)(function(Le){Xe.flushSync(function(){B({id:Le})})},[B]);return{createRequestMessage:$,createApprovalMessage:Oe,createResponseMessage:ye,getHistoryMessages:ge,updateMessage:_,removeMessageById:Ee,getMessages:R}}var bn=e(44987),Pn=e.n(bn),Ve=e(7354),t=e(64599),Ue=e.n(t),De=e(93513),an=function(){function d(P){var u=P.id,_=P.status,R=P.created_at;He()(this,d),g()(this,"data",void 0),this.data={id:u,output:[],object:"response",status:_||fe.Created,created_at:R||Date.now()}}return ze()(d,[{key:"handleResponse",value:function(u){this.data=(0,De.produce)(this.data,function(_){u.output||(u.output=[]),Object.assign(_,u)})}},{key:"handleMessage",value:function(u){this.data=(0,De.produce)(this.data,function(_){_.output||(_.output=[]);var R=_.output.findIndex(function($){return $.id===u.id});if(R>=0){var B=_.output[R].content;Object.assign(_.output[R],u),(!u.content||u.content.length===0)&&(_.output[R].content=B)}else _.output.push(u)})}},{key:"handleContent",value:function(u){this.data=(0,De.produce)(this.data,function(_){var R=_.output.find(function($){return $.id===u.msg_id});if(!R){console.warn("Message not found for content:",u.msg_id);return}if(R.content||(R.content=[]),u.delta){var B=R.content[R.content.length-1];B&&B.delta?u.type===Ce.TEXT&&B.type===Ce.TEXT?B.text+=u.text:u.type===Ce.IMAGE?B.image_url=u.image_url:u.type===Ce.DATA&&(B.data=u.data):R.content.push(u)}else R.content.length>0?Object.assign(R.content[R.content.length-1],u):R.content.push(u)})}},{key:"handleError",value:function(u){this.data=(0,De.produce)(this.data,function(_){_.status=fe.Failed,_.output.push({status:fe.Failed,type:Se.ERROR,content:[],id:(0,be.Z)(),role:"assistant",code:u.code,message:typeof u.message=="string"?u.message:JSON.stringify(u.message)})})}},{key:"handle",value:function(u){if(u.object==="response")this.handleResponse(u);else if(u.object==="message"){if(u.type===Se.HEARTBEAT)return this.data;this.handleMessage(u)}else u.object==="content"?this.handleContent(u):this.handleError(u);return this.data}},{key:"cancel",value:function(){return this.data=(0,De.produce)(this.data,function(u){d.maybeGenerating(u)&&(u.status=fe.Canceled),u.output.forEach(function(_){d.maybeGenerating(_)&&(_.status=fe.Canceled,_.content.forEach(function(R){d.maybeGenerating(R)&&(R.status=fe.Canceled)}))})}),this.data}}],[{key:"mergeToolMessages",value:function(u){var _=new Map,R=[],B=Ue()(u),$;try{var Oe=function(){var ge,Ee,Le=$.value;if(d.maybeToolInput(Le)&&(ge=Le.content)!==null&&ge!==void 0&&ge.length){var Ke=Le.content[0],ln=Ke.data.call_id||Ke.data.name;_.set(ln,Ke),R.push(Le)}else if(d.maybeToolOutput(Le)&&(Ee=Le.content)!==null&&Ee!==void 0&&Ee.length){var Te=Le.content[0],je=Te.data.call_id||Te.data.name,Ie=_.get(je);Ie&&(R=R.map(function(me){if(!d.maybeToolInput(me))return me;var se=me.content[0],he=se.data.call_id||se.data.name;return he===je?m()(m()({},Le),{},{content:[].concat(re()(me.content),[Te])}):me}))}else R.push(Le)};for(B.s();!($=B.n()).done;)Oe()}catch(ye){B.e(ye)}finally{B.f()}return R}},{key:"maybeToolOutput",value:function(u){return[Se.FUNCTION_CALL_OUTPUT,Se.PLUGIN_CALL_OUTPUT,Se.COMPONENT_CALL_OUTPUT,Se.MCP_CALL_OUTPUT].includes(u.type)}},{key:"maybeToolInput",value:function(u){return[Se.FUNCTION_CALL,Se.PLUGIN_CALL,Se.COMPONENT_CALL,Se.MCP_CALL].includes(u.type)}},{key:"maybeGenerating",value:function(u){return[fe.InProgress,fe.Created].includes(u.status)}},{key:"maybeDone",value:function(u){return[fe.Completed,fe.Canceled,fe.Failed].includes(u.status)}}]),d}(),c=an;function te(d){var P=d.currentQARef,u=d.updateMessage,_=d.getCurrentSessionId,R=d.onFinish,B=(0,v.Uk)(function(Le){return Le.api}),$=(0,r.useRef)(B);(0,r.useEffect)(function(){$.current=B},[B]);var Oe=(0,r.useCallback)(function(){var Le=l()(a()().mark(function Ke(ln){var Te,je,Ie,me,se,he,Ne,yn;return a()().wrap(function(Ze){for(;;)switch(Ze.prev=Ze.next){case 0:Te=new c({id:"",status:fe.Created,created_at:0}),je=!1,Ie=!1,Ze.prev=3,se=Pn()(ln);case 5:return Ze.next=7,se.next();case 7:if(!(je=!(he=Ze.sent).done)){Ze.next=17;break}return Ne=he.value,yn=Te.handle(Ne),P.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:yn}],u(P.current.response),Ze.next=14,(0,I.Z)(100);case 14:je=!1,Ze.next=5;break;case 17:Ze.next=23;break;case 19:Ze.prev=19,Ze.t0=Ze.catch(3),Ie=!0,me=Ze.t0;case 23:if(Ze.prev=23,Ze.prev=24,!(je&&se.return!=null)){Ze.next=28;break}return Ze.next=28,se.return();case 28:if(Ze.prev=28,!Ie){Ze.next=31;break}throw me;case 31:return Ze.finish(28);case 32:return Ze.finish(23);case 33:case"end":return Ze.stop()}},Ke,null,[[3,19,23,33],[24,,28,32]])}));return function(Ke){return Le.apply(this,arguments)}}(),[]),ye=(0,r.useCallback)(function(){var Le=l()(a()().mark(function Ke(ln){var Te,je,Ie,me,se,he,Ne,yn,vn,Ze,mn,En,Ln,zn,at,Gn;return a()().wrap(function(tn){for(;;)switch(tn.prev=tn.next){case 0:if(Te=$.current,je=new c({id:"",status:fe.Created,created_at:0}),ln.ok){tn.next=15;break}return tn.prev=3,tn.next=6,ln.json();case 6:Ie=tn.sent,me=je.handle({object:"message",type:Se.ERROR,content:[],id:"error",role:"assistant",status:fe.Failed,code:String(ln.status),message:JSON.stringify(Ie)}),P.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:me}],tn.next=13;break;case 11:tn.prev=11,tn.t0=tn.catch(3);case 13:return R(),tn.abrupt("return");case 15:tn.prev=15,se=!1,he=!1,tn.prev=18,yn=Pn()((0,Ve.Z)({readableStream:ln.body}));case 20:return tn.next=22,yn.next();case 22:if(!(se=!(vn=tn.sent).done)){tn.next=39;break}if(Ze=vn.value,((mn=P.current.response)===null||mn===void 0?void 0:mn.msgStatus)!=="interrupted"){tn.next=30;break}return(Ln=P.current.abortController)===null||Ln===void 0||Ln.abort(),Te.cancel&&Te.cancel({session_id:_()}),P.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:je.cancel()}],u(P.current.response),tn.abrupt("break",39);case 30:if(zn=$.current.responseParser||JSON.parse,at=zn(Ze.data),Gn=je.handle(at),!(Gn.status!==fe.Failed&&!((En=Gn.output)!==null&&En!==void 0&&(En=En[0])!==null&&En!==void 0&&(En=En.content)!==null&&En!==void 0&&En.length))){tn.next=35;break}return tn.abrupt("continue",36);case 35:P.current.response&&(P.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Gn}],Gn.status===fe.Completed||Gn.status===fe.Failed?R():u(P.current.response));case 36:se=!1,tn.next=20;break;case 39:tn.next=45;break;case 41:tn.prev=41,tn.t1=tn.catch(18),he=!0,Ne=tn.t1;case 45:if(tn.prev=45,tn.prev=46,!(se&&yn.return!=null)){tn.next=50;break}return tn.next=50,yn.return();case 50:if(tn.prev=50,!he){tn.next=53;break}throw Ne;case 53:return tn.finish(50);case 54:return tn.finish(45);case 55:tn.next=60;break;case 57:tn.prev=57,tn.t2=tn.catch(15),console.error(tn.t2);case 60:case"end":return tn.stop()}},Ke,null,[[3,11],[15,57],[18,41,45,55],[46,,50,54]])}));return function(Ke){return Le.apply(this,arguments)}}(),[_,P,u,R]),ge=(0,r.useCallback)(function(){var Le=l()(a()().mark(function Ke(ln,Te){var je,Ie,me,se,he,Ne;return a()().wrap(function(vn){for(;;)switch(vn.prev=vn.next){case 0:if(Ie=$.current,me=Ie.enableHistoryMessages,se=me===void 0?!1:me,he=(je=P.current.abortController)===null||je===void 0?void 0:je.signal,vn.prev=3,!Ie.fetch){vn.next=10;break}return vn.next=7,Ie.fetch({input:ln,biz_params:Te,signal:he});case 7:vn.t0=vn.sent,vn.next=13;break;case 10:return vn.next=12,fetch(Ie.baseURL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(Ie.token||"")},body:JSON.stringify({input:se?ln:ln.slice(-1),session_id:_(),stream:!0,biz_params:Te}),signal:he});case 12:vn.t0=vn.sent;case 13:Ne=vn.t0,vn.next=18;break;case 16:vn.prev=16,vn.t1=vn.catch(3);case 18:if(!(Ne&&Ne.body)){vn.next=21;break}return vn.next=21,ye(Ne);case 21:case"end":return vn.stop()}},Ke,null,[[3,16]])}));return function(Ke,ln){return Le.apply(this,arguments)}}(),[_,P,ye]),Ee=(0,r.useCallback)(function(){var Le=l()(a()().mark(function Ke(ln){var Te,je,Ie,me;return a()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:if(je=$.current,je.reconnect){he.next=3;break}return he.abrupt("return");case 3:return Ie=(Te=P.current.abortController)===null||Te===void 0?void 0:Te.signal,he.prev=4,he.next=7,je.reconnect({session_id:ln,signal:Ie});case 7:me=he.sent,he.next=12;break;case 10:he.prev=10,he.t0=he.catch(4);case 12:if(!(me&&me.body)){he.next=15;break}return he.next=15,ye(me);case 15:case"end":return he.stop()}},Ke,null,[[4,10]])}));return function(Ke){return Le.apply(this,arguments)}}(),[P,ye]);return{request:ge,reconnect:Ee,mockRequest:Oe}}function ve(){var d=(0,ue.Ct)(),P=d.createSession,u=d.updateSession,_=d.getCurrentSessionId,R=(0,r.useCallback)(function(){var Oe=l()(a()().mark(function ye(ge){return a()().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:if(_()){Le.next=3;break}return Le.next=3,P({name:ge});case 3:case"end":return Le.stop()}},ye)}));return function(ye){return Oe.apply(this,arguments)}}(),[_,P]),B=(0,r.useCallback)(function(){var Oe=l()(a()().mark(function ye(ge,Ee){return a()().wrap(function(Ke){for(;;)switch(Ke.prev=Ke.next){case 0:if(Ee.length!==0){Ke.next=3;break}return Ke.next=3,u({id:_(),name:ge});case 3:case"end":return Ke.stop()}},ye)}));return function(ye,ge){return Oe.apply(this,arguments)}}(),[_,u]),$=(0,r.useCallback)(function(){var Oe=l()(a()().mark(function ye(ge){return a()().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:return Le.next=2,u({id:_(),messages:ge});case 2:case"end":return Le.stop()}},ye)}));return function(ye){return Oe.apply(this,arguments)}}(),[_,u]);return{ensureSession:R,updateSessionName:B,syncSessionMessages:$,getCurrentSessionId:_}}function J(){var d=(0,oe.useContextSelector)(Z.jK,function(Te){return Te.setLoading}),P=(0,oe.useContextSelector)(ue.Af,function(Te){return Te.currentSessionId}),u=(0,r.useRef)({}),_=dn({currentQARef:u}),R=ve(),B=(0,r.useCallback)(function(){var Te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished";u.current.response&&(u.current.response.msgStatus=Te,d(!1),Xe.flushSync(function(){_.updateMessage(u.current.response)}),R.syncSessionMessages(_.getMessages()))},[d,_,R]),$=te({currentQARef:u,updateMessage:_.updateMessage,getCurrentSessionId:R.getCurrentSessionId,onFinish:function(){return B("finished")}}),Oe=$.request,ye=$.reconnect,ge=(0,r.useCallback)(function(){var Te=l()(a()().mark(function je(Ie){var me,se;return a()().wrap(function(Ne){for(;;)switch(Ne.prev=Ne.next){case 0:return Ne.next=2,R.ensureSession(Ie.query);case 2:if(me=_.getMessages(),!R.getCurrentSessionId()){Ne.next=6;break}return Ne.next=6,R.updateSessionName(Ie.query,me);case 6:return _.createRequestMessage(Ie),d(!0),Ne.next=10,(0,I.Z)(100);case 10:return _.createResponseMessage(),se=_.getHistoryMessages(),Ne.next=14,R.syncSessionMessages(_.getMessages());case 14:return Ne.next=16,Oe(se,Ie.biz_params);case 16:case"end":return Ne.stop()}},je)}));return function(je){return Te.apply(this,arguments)}}(),[_,R,Oe]),Ee=(0,r.useCallback)(function(){var Te=l()(a()().mark(function je(Ie){var me,se;return a()().wrap(function(Ne){for(;;)switch(Ne.prev=Ne.next){case 0:return me=Ie.input,_.createApprovalMessage(me),d(!0),Ne.next=5,(0,I.Z)(100);case 5:return _.createResponseMessage(),se=_.getHistoryMessages(),Ne.next=9,R.syncSessionMessages(_.getMessages());case 9:return Ne.next=11,Oe(se);case 11:case"end":return Ne.stop()}},je)}));return function(je){return Te.apply(this,arguments)}}(),[_,R,Oe]),Le=(0,r.useCallback)(function(){B("interrupted")},[B]),Ke=(0,r.useCallback)(function(){var Te=l()(a()().mark(function je(Ie){var me;return a()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return d(!0),_.removeMessageById(Ie),u.current.abortController=new AbortController,_.createResponseMessage(),me=_.getHistoryMessages(),he.next=7,Oe(me);case 7:case"end":return he.stop()}},je)}));return function(je){return Te.apply(this,arguments)}}(),[_,Oe]),ln=(0,r.useCallback)(function(){var Te=l()(a()().mark(function je(Ie){var me,se;return a()().wrap(function(Ne){for(;;)switch(Ne.prev=Ne.next){case 0:return u.current.abortController=new AbortController,d(!0),_.createResponseMessage(),Ne.next=5,ye(Ie);case 5:((me=u.current.response)===null||me===void 0?void 0:me.msgStatus)==="generating"&&(d(!1),(se=u.current.response)!==null&&se!==void 0&&se.id&&_.removeMessageById(u.current.response.id),u.current.response=void 0);case 6:case"end":return Ne.stop()}},je)}));return function(je){return Te.apply(this,arguments)}}(),[_,ye,d]);return(0,r.useEffect)(function(){var Te;(Te=u.current.abortController)===null||Te===void 0||Te.abort(),u.current={request:void 0,response:void 0,abortController:void 0}},[P]),(0,ee.Z)({type:"handleReconnect",callback:function(){var Te=l()(a()().mark(function Ie(me){return a()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return he.next=2,ln(me.detail.session_id);case 2:case"end":return he.stop()}},Ie)}));function je(Ie){return Te.apply(this,arguments)}return je}()},[ln]),(0,ee.Z)({type:"handleReplace",callback:function(){var Te=l()(a()().mark(function Ie(me){return a()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return he.next=2,Ke(me.detail.id);case 2:case"end":return he.stop()}},Ie)}));function je(Ie){return Te.apply(this,arguments)}return je}()}),(0,ee.Z)({type:"handleSubmit",callback:function(){var Te=l()(a()().mark(function Ie(me){return a()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return he.next=2,ge(me.detail);case 2:case"end":return he.stop()}},Ie)}));function je(Ie){return Te.apply(this,arguments)}return je}()},[ge]),(0,ee.Z)({type:"handleApproval",callback:function(){var Te=l()(a()().mark(function Ie(me){return a()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return he.next=2,Ee(me.detail);case 2:case"end":return he.stop()}},Ie)}));function je(Ie){return Te.apply(this,arguments)}return je}()},[Ee]),{handleSubmit:ge,handleCancel:Le}}function V(){var d=(0,b.wv)().getPrefixCls("chat-anywhere-chat"),P=J(),u=P.handleSubmit,_=P.handleCancel;return(0,ue.Kt)(),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Pe,{}),(0,p.jsxs)("div",{className:d,children:[(0,p.jsx)(un,{onSubmit:u}),(0,p.jsx)(H,{onCancel:_,onSubmit:u})]})]})}var O=e(21403),ce=e(67392),ne=e(13660),Y=e(12624),o=e(50287),Q=e(9368),X=(0,r.createContext)({collapsed:!1,toggleCollapsed:function(){}});function ie(d){var P=(0,r.useState)(!1),u=A()(P,2),_=u[0],R=u[1],B=(0,r.useCallback)(function(){R(function(Oe){return!Oe})},[]),$=(0,r.useMemo)(function(){return{collapsed:_,toggleCollapsed:B}},[_,B]);return(0,p.jsx)(X.Provider,{value:$,children:d.children})}function U(){var d=(0,r.useContext)(X),P=d.collapsed,u=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),_=(0,v.Uk)(function(R){var B;return(B=R.theme)===null||B===void 0?void 0:B.leftHeader})||{};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"".concat(u),children:[r.isValidElement(_)?_:(0,p.jsx)(Ae,{}),(0,p.jsxs)("div",{className:"".concat(u,"-content"),style:{display:P?"none":"flex"},children:[(0,p.jsx)(le,{}),(0,p.jsx)(Be,{})]})]})})}function Ae(d){var P=d.className,u=(0,v.Uk)(function(ln){var Te;return(Te=ln.theme)===null||Te===void 0?void 0:Te.leftHeader})||{},_=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),R=(0,r.useContext)(X),B=R.toggleCollapsed,$=R.collapsed,Oe=(0,v.Uk)(function(ln){return ln.session.multiple}),ye=u,ge=ye.logo,Ee=ge===void 0?"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png":ge,Le=ye.title,Ke=Le===void 0?"Runtime WebUI":Le;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:E()("".concat(_,"-header"),P),children:[(0,p.jsxs)("div",{className:"".concat(_,"-header-left"),children:[Ee&&(0,p.jsx)("img",{src:Ee,alt:"logo",height:32}),(0,p.jsx)("span",{children:Ke})]}),Oe&&(0,p.jsx)(G.Z,{className:"".concat(_,"-header-collapse"),bordered:!1,icon:$?(0,p.jsx)(ne.Z,{}):(0,p.jsx)(ce.Z,{}),onClick:B})]})})}function le(d){var P=(0,oe.useContextSelector)(Z.jK,function(Oe){return Oe.loading}),u=(0,ue.Ct)(),_=u.createSession,R=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),B=(0,r.useContext)(X),$=B.toggleCollapsed;return(0,p.jsx)("div",{className:"".concat(R,"-adder"),style:d.style,children:(0,p.jsx)(O.Z,{block:!0,type:"primary",icon:(0,p.jsx)(Y.Z,{}),disabled:!!P,onClick:l()(a()().mark(function Oe(){return a()().wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:return ge.next=2,_();case 2:d.narrowMode&&$();case 3:case"end":return ge.stop()}},Oe)})),children:"New Chat"})})}function Be(d){var P=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),u=(0,oe.useContextSelector)(ue.Af,function(Ee){return Ee.sessions}),_=(0,ue.Ct)(),R=_.changeCurrentSessionId,B=_.removeSession,$=(0,oe.useContextSelector)(ue.Af,function(Ee){return Ee.currentSessionId}),Oe=(0,r.useContext)(X),ye=Oe.toggleCollapsed,ge=(0,r.useMemo)(function(){return u.map(function(Ee){return{key:Ee.id,label:Ee.name||"New Chat"}})},[u]);return(0,p.jsx)("div",{className:"".concat(P,"-list"),style:d.style,children:(0,p.jsx)(Q.Z,{items:ge,menu:[{key:"delete",icon:(0,p.jsx)(o.Z,{}),danger:!0,onClick:function(){var Ee=l()(a()().mark(function Ke(ln){return a()().wrap(function(je){for(;;)switch(je.prev=je.next){case 0:return je.next=2,B({id:ln.key});case 2:return je.abrupt("return",je.sent);case 3:case"end":return je.stop()}},Ke)}));function Le(Ke){return Ee.apply(this,arguments)}return Le}()}],activeKey:$,onActiveChange:function(Le){R(Le),d.narrowMode&&ye()}})})}var Qe,Me=(0,j.vJ)(Qe||(Qe=y()([`

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
`])),function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls}),on=e(85265);function sn(){var d=(0,b.wv)().getPrefixCls("chat-anywhere"),P=(0,v.Uk)(function(Oe){return Oe.theme}),u=P.narrowMode,_=P.rightHeader,R=(0,r.useContext)(X),B=R.toggleCollapsed,$=R.collapsed;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Me,{}),(0,p.jsxs)("div",{className:"".concat(d,"-layout-right-header"),children:[u?(0,p.jsx)(Ae,{className:"".concat(d,"-default-header-inner")}):null,_&&(0,p.jsx)("div",{className:"".concat(d,"-default-header-right"),children:_})]}),u&&(0,p.jsx)(on.Z,{width:"80vw",styles:{body:{padding:0}},open:$,onClose:B,title:null,closable:!1,placement:"left",children:(0,p.jsxs)("div",{className:"".concat(d,"-sessions"),children:[(0,p.jsx)(Be,{narrowMode:!0}),(0,p.jsx)(le,{narrowMode:!0})]})})]})}function Je(d,P){var u=(0,k.De)(),_=(0,oe.useContextSelector)(Z.jK,function(R){return R.setDisabled});return r.useImperativeHandle(P,function(){return{messages:u,input:{setDisabled:_,submit:function(B){var $=B.query,Oe=B.fileList,ye=B.biz_params;(0,ee.j)({type:"handleSubmit",data:{query:$,fileList:Oe,biz_params:ye}})}}}},[]),null}var fn=(0,r.forwardRef)(Je);function Cn(d,P){var u=d.className,_=(0,b.wv)().getPrefixCls("chat-anywhere-layout"),R=(0,v.Uk)(function(Ke){return Ke.theme.narrowMode}),B=(0,v.Uk)(function(Ke){return Ke.theme.background}),$=(0,v.Uk)(function(Ke){return Ke.theme.rightHeader}),Oe=(0,v.Uk)(function(Ke){return{session:Ke.session}}),ye=Oe.session,ge=(0,r.useContext)(X),Ee=ge.collapsed,Le=!R&&ye&&ye.multiple&&!ye.hideBuiltInSessionList;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h,{}),(0,p.jsxs)("div",{className:E()("".concat(_),u),children:[Le&&(0,p.jsx)("div",{className:E()("".concat(_,"-left"),g()({},"".concat(_,"-left-collapsed"),Ee)),children:(0,p.jsx)(U,{})}),(0,p.jsxs)("div",{className:E()("".concat(_,"-right"),g()({},"".concat(_,"-right-has-header"),!!$)),style:{background:B},children:[!!$&&(0,p.jsx)(sn,{}),(0,p.jsx)(V,{})]})]}),(0,p.jsx)(fn,{ref:P})]})}var cn=(0,r.forwardRef)(Cn);function qe(d){var P=(0,r.useMemo)(function(){return d.data.input[0].content.reduce(function(u,_){if(_.type===Ce.TEXT&&u.push({code:"Text",data:{content:_.text,raw:!0}}),_.type===Ce.IMAGE){var R=u.find(function(ye){return ye.code==="Image"});R?R.data.push({url:_.image_url}):u.push({code:"Images",data:[{url:_.image_url}]})}if(_.type===Ce.VIDEO){var B=u.find(function(ye){return ye.code==="Videos"});B?B.data.push({src:_.video_url,poster:_.video_poster}):u.push({code:"Videos",data:[{src:_.video_url,poster:_.video_poster}]})}if(_.type===Ce.AUDIO){var $=u.find(function(ye){return ye.code==="Audios"});$?$.data.push({src:_.audio_url||_.data}):u.push({code:"Audios",data:[{src:_.audio_url||_.data}]})}if(_.type===Ce.FILE){var Oe=u.find(function(ye){return ye.code==="Files"});Oe?Oe.data.push({url:_.file_url,name:_.file_name||_.fileName,size:_.file_size}):u.push({code:"Files",data:[{url:_.file_url,name:_.file_name||_.fileName,size:_.file_size}]})}return u},[])},[d.data.input]);return P!=null&&P.length?(0,p.jsx)(ae.Z,{role:"user",cards:P}):null}var Sn=e(66109),Rn=e(18755),jn=e(60747),en=e(18946),xn=e(14617),In=r.memo(function(d){var P,u=d.data,_=(0,v.Uk)(function(B){var $;return($=B.api)===null||$===void 0?void 0:$.replaceMediaURL}),R=r.useCallback(function(B){return B&&((_==null?void 0:_(B))||B)},[_]);return(P=u.content)!==null&&P!==void 0&&P.length?(0,p.jsx)(p.Fragment,{children:u.content.map(function(B,$){switch(B.type){case Ce.TEXT:return(0,p.jsx)(Sn.Z,{content:B.text,cursor:B.status===fe.InProgress},$);case Ce.REFUSAL:return(0,p.jsx)(Sn.Z,{raw:!0,content:B.refusal},$);case Ce.IMAGE:return(0,p.jsx)(Rn.Z,{data:[{url:R(B.image_url)}]},$);case Ce.VIDEO:return(0,p.jsx)(jn.Z,{data:[{src:R(B.video_url),poster:R(B.video_poster)}]},$);case Ce.FILE:return(0,p.jsx)(en.Z,{data:[{url:R(B.file_url),name:B.file_name||B.fileName||B.file_id,size:B.file_size}]},$);case Ce.AUDIO:return(0,p.jsx)(xn.Z,{data:[{src:R(B.audio_url||B.data)}]},$);default:return(0,p.jsx)("div",{children:JSON.stringify(B)},$)}})}):null}),$n=In,_n=e(85786),On=e(70770),gn=e(86250),wn=e(31912),Un=e(7654),kn=e(56290),Jn,Zn,nn,rn,Mn,An,nt,Bn,Kn=(0,j.kc)(function(d){var P=d.css,u=d.token;return{container:P(Jn||(Jn=y()([`
    width: 386px;
  `]))),title:P(Zn||(Zn=y()([`
    font-size: 14px;
    font-weight: 500;
    color: `,`;
    margin-bottom: 16px;
  `])),u.colorText),content:P(nn||(nn=y()([`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `]))),tabsContainer:P(rn||(rn=y()([`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `]))),tabItem:P(Mn||(Mn=y()([`
    padding: 0 8px;
    font-size: 14px;
    color: `,`;
    cursor: pointer;
    border: 1px solid `,`;
    background: `,`;
    transition: all 0.2s;
    user-select: none;
    border-radius: 4px;
  `])),u.colorText,u.colorBorderSecondary,u.colorBgContainer),tabItemSelected:P(An||(An=y()([`
    color: `,`;
    border-color: `,`;
    border: 1px solid `,`;
    position: relative;
    z-index: 1;
  `])),u.colorPrimary,u.colorPrimary,u.colorPrimary),textarea:P(nt||(nt=y()([`
    resize: none;
  `]))),actions:P(Bn||(Bn=y()([`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  `])))}});function Yn(){var d=(0,kn.useTranslation)(),P=d.t;return[(P==null?void 0:P("cancelPopover.options.notNeeded"))||"\u4E0D\u9700\u8981",(P==null?void 0:P("cancelPopover.options.poorResult"))||"\u6548\u679C\u4E0D\u7406\u60F3",(P==null?void 0:P("cancelPopover.options.tooSlow"))||"\u7B49\u5F85\u65F6\u95F4\u4E45",(P==null?void 0:P("cancelPopover.options.wrongInput"))||"\u8F93\u5165\u9519\u8BEF"]}function Hn(d){var P=d.options,u=(0,r.useState)(),_=A()(u,2),R=_[0],B=_[1],$=Kn(),Oe=$.styles;return(0,p.jsx)("div",{className:Oe.tabsContainer,children:P.map(function(ye){return(0,p.jsx)("div",{className:"".concat(Oe.tabItem," ").concat(R===ye?Oe.tabItemSelected:""),onClick:function(){B(ye),d.onSelect(ye)},children:ye},ye)})})}function ot(d){var P=(0,kn.useTranslation)(),u=P.t,_=Yn(),R=d.options,B=R===void 0?_:R,$=d.onConfirm,Oe=d.title,ye=Oe===void 0?(u==null?void 0:u("cancelPopover.title"))||"\u53D6\u6D88\u539F\u56E0":Oe,ge=d.placeholder,Ee=ge===void 0?(u==null?void 0:u("cancelPopover.placeholder"))||"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212":ge,Le=(0,r.useState)(!1),Ke=A()(Le,2),ln=Ke[0],Te=Ke[1],je=Kn(),Ie=je.styles,me=(0,r.useState)(""),se=A()(me,2),he=se[0],Ne=se[1],yn=function(){$==null||$(he.trim())},vn=(0,p.jsxs)("div",{className:Ie.container,children:[(0,p.jsx)("div",{className:Ie.title,children:ye}),(0,p.jsxs)("div",{className:Ie.content,children:[(0,p.jsx)(Hn,{options:B,onSelect:Ne}),(0,p.jsx)(wn.Z.TextArea,{className:Ie.textarea,value:he,onChange:function(mn){return Ne(mn.target.value)},placeholder:Ee,rows:3}),(0,p.jsxs)(gn.Z,{className:Ie.actions,children:[(0,p.jsx)(O.Z,{size:"small",onClick:function(){return Te(!1)},children:(u==null?void 0:u("cancelPopover.cancel"))||"\u53D6\u6D88"}),(0,p.jsx)(O.Z,{size:"small",type:"primary",onClick:function(){Te(!1),yn()},children:(u==null?void 0:u("cancelPopover.confirm"))||"\u786E\u8BA4"})]})]})]});return(0,p.jsx)(Un.Z,{open:ln,onOpenChange:Te,trigger:"click",content:vn,children:(0,p.jsx)(O.Z,{size:"small",children:(u==null?void 0:u("approval.cancel"))||"\u53D6\u6D88\u6267\u884C"})})}var Nn,qn=(0,j.kc)(function(d){var P=d.css,u=d.token;return{desc:P(Nn||(Nn=y()([`
    font-size: 12px;
    color: `,`;
  `])),u.colorTextTertiary)}});function tt(d){var P=d.data,u=(0,Z.vB)(function(je){return je}),_=qn(),R=_.styles,B=(0,kn.useTranslation)(),$=B.t,Oe=(0,r.useState)("pending"),ye=A()(Oe,2),ge=ye[0],Ee=ye[1],Le=($==null?void 0:$("approval.title"))||"\u4EBA\u5DE5\u5E72\u9884",Ke=(0,r.useMemo)(function(){return ge==="pending"?($==null?void 0:$("approval.pending"))||"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C":ge==="confirmed"?($==null?void 0:$("approval.confirmed"))||"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1":($==null?void 0:$("approval.canceled"))||"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1"},[ge,$]),ln=(0,r.useCallback)(function(je,Ie){var me;Ee(je),u.setLoading(!1),u.setDisabled(!1);var se=P,he=(me=se.content[0])===null||me===void 0||(me=me.data)===null||me===void 0?void 0:me.id,Ne={type:Se.MCP_APPROVAL_RESPONSE,role:We.USER,content:[{type:Ce.DATA,data:{approve:je==="confirmed",id:he,approval_request_id:he,reason:Ie}}]};(0,ee.j)({type:"handleApproval",data:{input:[se,Ne]}})},[P]),Te=(0,r.useMemo)(function(){return ge==="pending"?(0,p.jsxs)(gn.Z,{gap:8,children:[(0,p.jsx)(ot,{onConfirm:function(Ie){return ln("canceled",Ie)}}),(0,p.jsx)(O.Z,{size:"small",type:"primary",onClick:function(){return ln("confirmed")},children:($==null?void 0:$("approval.confirm"))||"\u786E\u8BA4\u6267\u884C"})]}):null},[ge,$]);return(0,r.useEffect)(function(){ge==="pending"&&(u.setLoading(($==null?void 0:$("approval.taskRunning"))||"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1"),u.setDisabled(!0))},[ge,$]),(0,p.jsx)(On.Z.HITL,{done:ge!=="pending",onDone:function(){},title:(0,p.jsxs)(gn.Z,{gap:8,children:[Le,(0,p.jsx)("span",{className:R.desc,children:Ke})]}),actions:Te})}var Tn=r.memo(function(d){var P,u=d.data,_=d.isApproval,R=_===void 0?!1:_,B=(0,v.Uk)(function(je){return je.customToolRenderConfig})||{};if(!((P=u.content)!==null&&P!==void 0&&P.length))return null;var $=u.content,Oe=u.status===fe.InProgress,ye=$[0].data.name,ge="".concat($[0].data.server_label?$[0].data.server_label+" / ":""),Ee="".concat(ge).concat(ye),Le;if(B[ye]){var Ke=B[ye];Le=(0,p.jsx)(Ke,{data:u})}else{var ln,Te;Le=(0,p.jsx)(_n.Z,{loading:Oe,defaultOpen:!1,title:Ee==="undefined"?"":Ee,input:(ln=$[0])===null||ln===void 0||(ln=ln.data)===null||ln===void 0?void 0:ln.arguments,output:(Te=$[1])===null||Te===void 0||(Te=Te.data)===null||Te===void 0?void 0:Te.output})}return(0,p.jsxs)(p.Fragment,{children:[Le,R&&(0,p.jsx)(tt,{data:u})]})}),Wn=Tn,et=e(79323);function Qn(d){var P,u=d.data;if(u.status===fe.Created)return null;var _=u==null||(P=u.content)===null||P===void 0?void 0:P[0];return _?(0,p.jsx)(et.Z,{loading:u.status===fe.InProgress,title:"Thinking",content:_.text}):null}function Dn(d){var P=d.data;return(0,p.jsx)(ae.Z.Interrupted,{type:"error",title:P.code,desc:P.message})}var Fn=e(89698),Xn=e(60227),st=e(67055),vt=e(39536),Vn=e(39693),gt=e.n(Vn);function rt(d){return!d.input_tokens||!d.output_tokens?null:(0,p.jsx)(ae.Z.Footer.Count,{data:[["Input",d.input_tokens],["Output",d.output_tokens]]})}function pt(d){var P,u,_,R=(0,kn.useTranslation)(),B=R.t,$=(0,v.Uk)(function(ge){var Ee;return(Ee=ge.actions)===null||Ee===void 0?void 0:Ee.list})||[{icon:(0,p.jsx)(Fn.Z,{}),onClick:function(){(0,vt.J)(JSON.stringify(d.data))}}],Oe=(P=(0,v.Uk)(function(ge){var Ee;return(Ee=ge.actions)===null||Ee===void 0?void 0:Ee.replace}))!==null&&P!==void 0?P:!0,ye=gt()([].concat(re()($.map(function(ge){var Ee=ge;return ge.render&&(Ee.children=r.createElement(ge.render,{data:d})),m()(m()({},Ee),{},{onClick:function(){var Ke;(Ke=ge.onClick)===null||Ke===void 0||Ke.call(ge,d)}})})),[Oe&&d.isLast?{icon:(0,p.jsx)(st.Z,{title:(B==null?void 0:B("actions.regenerate"))||"\u91CD\u65B0\u751F\u6210",children:(0,p.jsx)(Xn.Z,{})}),onClick:function(){(0,ee.j)({type:"handleReplace",data:d})}}:null]));return c.maybeDone(d.data)?(0,p.jsx)(ae.Z.Footer,{left:(0,p.jsx)(ae.Z.Footer.Actions,{data:ye}),right:(0,p.jsx)(rt,{input_tokens:(u=d.data.usage)===null||u===void 0?void 0:u.input_tokens,output_tokens:(_=d.data.usage)===null||_===void 0?void 0:_.output_tokens})}):null}var ut=e(68997);function xt(d){var P=(0,v.Uk)(function(R){return R.welcome.avatar}),u=(0,v.Uk)(function(R){return R.welcome.nick}),_=(0,r.useMemo)(function(){return c.mergeToolMessages(d.data.output)},[d.data.output]);return!(_!=null&&_.length)&&c.maybeGenerating(d.data)?(0,p.jsx)(ae.Z.Spin,{}):(0,p.jsxs)(p.Fragment,{children:[P&&(0,p.jsxs)(gn.Z,{align:"center",gap:8,style:{marginBottom:8},children:[(0,p.jsx)(ut.Z,{src:P}),u&&(0,p.jsx)("span",{children:u})]}),_.map(function(R){switch(R.type){case Se.MESSAGE:return(0,p.jsx)($n,{data:R},R.id);case Se.PLUGIN_CALL:case Se.PLUGIN_CALL_OUTPUT:case Se.MCP_CALL:case Se.MCP_CALL_OUTPUT:return(0,p.jsx)(Wn,{data:R},R.id);case Se.MCP_APPROVAL_REQUEST:return(0,p.jsx)(Wn,{data:R,isApproval:!0},R.id);case Se.REASONING:return(0,p.jsx)(Qn,{data:R},R.id);case Se.ERROR:return(0,p.jsx)(Dn,{data:R},R.id);case Se.HEARTBEAT:return null;default:return console.warn("[WIP] Unknown message type: ".concat(R.type)),null}}),d.data.error&&(0,p.jsx)(Dn,{data:d.data.error}),(0,p.jsx)(pt,m()({},d))]})}var mt=e(83962);function Ct(d){var P=d.options,u=d.cards,_=d.children,R=[[kn.ChatAnywhereI18nContextProvider,{defaultLocale:P.theme.locale}],[v.zn,{options:P}],[mt.xy,{cardConfig:u}],[ue.c_,{}],[k.ep,{}],[Z.YQ,{}],[ie,{}]];return R.reduceRight(function(B,$){var Oe=A()($,2),ye=Oe[0],ge=Oe[1];return(0,p.jsx)(ye,m()(m()({},ge),{},{children:B}))},_)}var dt=Ct;function ht(d,P){var u=d.options,_=u===void 0?{}:u,R=(0,r.useMemo)(function(){var B=m()({AgentScopeRuntimeRequestCard:qe,AgentScopeRuntimeResponseCard:xt},_.cards);return B},[_.cards]);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(dt,{options:_,cards:R,children:(0,p.jsx)(cn,{ref:P})})})}var ft=(0,r.forwardRef)(ht)},56290:function($e,K,e){"use strict";e.r(K),e.d(K,{ChatAnywhereI18nContextProvider:function(){return h},useChatAnywhereI18n:function(){return j},useTranslation:function(){return T}});var F=e(5574),m=e.n(F),N=e(59214),g=e(67294),b=e(85893),M={cn:{"approval.title":"\u4EBA\u5DE5\u5E72\u9884","approval.pending":"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C","approval.confirmed":"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1","approval.canceled":"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1","approval.cancel":"\u53D6\u6D88\u6267\u884C","approval.confirm":"\u786E\u8BA4\u6267\u884C","approval.taskRunning":"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1","cancelPopover.title":"\u53D6\u6D88\u539F\u56E0","cancelPopover.placeholder":"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212","cancelPopover.cancel":"\u53D6\u6D88","cancelPopover.confirm":"\u786E\u8BA4","cancelPopover.options.notNeeded":"\u4E0D\u9700\u8981","cancelPopover.options.poorResult":"\u6548\u679C\u4E0D\u7406\u60F3","cancelPopover.options.tooSlow":"\u7B49\u5F85\u65F6\u95F4\u4E45","cancelPopover.options.wrongInput":"\u8F93\u5165\u9519\u8BEF","common.save":"\u4FDD\u5B58","common.cancel":"\u53D6\u6D88","common.confirm":"\u786E\u8BA4","common.delete":"\u5220\u9664","common.edit":"\u7F16\u8F91","common.loading":"\u52A0\u8F7D\u4E2D...","common.saveSuccess":"\u4FDD\u5B58\u6210\u529F","common.saveFailed":"\u4FDD\u5B58\u5931\u8D25","actions.regenerate":"\u91CD\u65B0\u751F\u6210","messageImport.title":"Sessions \u6570\u636E\u5BFC\u5165","messageImport.placeholder":"\u8F93\u5165 JSON \u6570\u636E\u4EE5\u8986\u76D6\u5F53\u524D sessions","messageImport.saveToLocalStorage":"\u4FDD\u5B58\u5230 LocalStorage"},en:{"approval.title":"Human Intervention","approval.pending":"Please confirm whether to execute this operation","approval.confirmed":"Confirmed to execute task","approval.canceled":"Canceled task execution","approval.cancel":"Cancel","approval.confirm":"Confirm","approval.taskRunning":"A task is currently running, cannot send new task","cancelPopover.title":"Cancel Reason","cancelPopover.placeholder":"Please enter the reason for better AI planning","cancelPopover.cancel":"Cancel","cancelPopover.confirm":"Confirm","cancelPopover.options.notNeeded":"Not needed","cancelPopover.options.poorResult":"Poor result","cancelPopover.options.tooSlow":"Too slow","cancelPopover.options.wrongInput":"Wrong input","common.save":"Save","common.cancel":"Cancel","common.confirm":"Confirm","common.delete":"Delete","common.edit":"Edit","common.loading":"Loading...","common.saveSuccess":"Saved successfully","common.saveFailed":"Failed to save","actions.regenerate":"Regenerate","messageImport.title":"Import Sessions Data","messageImport.placeholder":"Enter JSON data to override current sessions","messageImport.saveToLocalStorage":"Save to LocalStorage"}},y=(0,N.createContext)(void 0);function j(f){try{var E=(0,N.useContextSelector)(y,f);return E}catch(v){return{}}}function T(){var f=j(function(r){return r==null?void 0:r.t}),E=j(function(r){return r==null?void 0:r.locale}),v=j(function(r){return r==null?void 0:r.setLocale});return{t:f,locale:E,setLocale:v}}function h(f){var E=f.children,v=f.defaultLocale,r=v===void 0?"en":v,n=(0,g.useState)(r),a=m()(n,2),S=a[0],l=a[1],s=(0,g.useCallback)(function(i,L){var q=M[S][i]||i;return L&&Object.entries(L).forEach(function(Z){var W=m()(Z,2),re=W[0],z=W[1];q=q.replace(new RegExp("\\{".concat(re,"\\}"),"g"),String(z))}),q},[S]),A=(0,g.useMemo)(function(){return{locale:S,setLocale:l,t:s,messages:M[S]}},[S,l,s]);return(0,b.jsx)(y.Provider,{value:A,children:E})}K.default=y},16423:function($e,K,e){"use strict";e.d(K,{YQ:function(){return T},jK:function(){return j},vB:function(){return h}});var F=e(5574),m=e.n(F),N=e(59214),g=e(79785),b=e(67294),M=e(68870),y=e(85893),j=(0,N.createContext)({loading:!1,setLoading:function(){},getLoading:function(){return!1},disabled:!1,setDisabled:function(){},getDisabled:function(){return!1}});function T(f){var E=(0,N.useContextSelector)(M.Af,function(C){return C.currentSessionId}),v=(0,N.useContextSelector)(M.Af,function(C){return C.getCurrentSessionId}),r=(0,g.Z)(!1),n=m()(r,3),a=n[0],S=n[1],l=n[2],s=(0,g.Z)(!1),A=m()(s,3),i=A[0],L=A[1],q=A[2],Z=(0,b.useRef)({}),W=(0,b.useRef)(void 0),re=(0,b.useCallback)(function(C){var w=v();w&&(Z.current[w]||(Z.current[w]={loading:!1,disabled:!1}),Z.current[w].loading=C),S(C)},[v,S]),z=(0,b.useCallback)(function(C){var w=v();w&&(Z.current[w]||(Z.current[w]={loading:!1,disabled:!1}),Z.current[w].disabled=C),L(C)},[v,L]);return(0,b.useEffect)(function(){var C,w;W.current&&W.current!==E&&Z.current[W.current]&&(Z.current[W.current].loading=!1,Z.current[W.current].disabled=!1);var G=E?Z.current[E]:void 0;S((C=G==null?void 0:G.loading)!==null&&C!==void 0?C:!1),L((w=G==null?void 0:G.disabled)!==null&&w!==void 0?w:!1),W.current=E},[E]),(0,y.jsx)(j.Provider,{value:{loading:a,setLoading:re,getLoading:l,disabled:i,setDisabled:z,getDisabled:q},children:f.children})}var h=function(E){return(0,N.useContextSelector)(j,E)}},45953:function($e,K,e){"use strict";e.d(K,{De:function(){return v},ar:function(){return f},ep:function(){return E}});var F=e(19632),m=e.n(F),N=e(97857),g=e.n(N),b=e(5574),M=e.n(b),y=e(79785),j=e(67294),T=e(59214),h=e(85893),f=(0,T.createContext)({messages:[],setMessages:function(){},getMessages:function(){return[]}});function E(r){var n=(0,y.Z)([]),a=M()(n,3),S=a[0],l=a[1],s=a[2],A={messages:S,setMessages:l,getMessages:s};return(0,h.jsx)(f.Provider,{value:A,children:r.children})}var v=function(){var n=(0,T.useContextSelector)(f,function(L){return{setMessages:L.setMessages,getMessages:L.getMessages}}),a=n.setMessages,S=n.getMessages,l=j.useCallback(function(){a([])},[]),s=j.useCallback(function(L){return S().find(function(q){return q.id===L})},[]),A=j.useCallback(function(L){a(function(q){return q.filter(function(Z){return Z.id!==L.id})})},[]),i=j.useCallback(function(L){a(function(q){var Z=q.findIndex(function(re){return re.id===L.id});if(Z>-1){var W=g()(g()({},q[Z]),L);return[].concat(m()(q.slice(0,Z)),[W],m()(q.slice(Z+1)))}else return[].concat(m()(q),[L])})},[]);return{getMessages:S,removeAllMessages:l,getMessage:s,removeMessage:A,updateMessage:i}}},7906:function($e,K,e){"use strict";e.d(K,{zn:function(){return W},Uk:function(){return Z}});var F=e(97857),m=e.n(F),N=e(17909),g=e(59214),b=e(67294),M=e(81759),y=e(49131),j=e(21766),T=e(15009),h=e.n(T),f=e(19632),E=e.n(f),v=e(99289),r=e.n(v),n="agent-scope-runtime-webui-sessions",a="agent-scope-runtime-webui-session";function S(){return typeof window!="undefined"&&!!window.localStorage}function l(){return"".concat(Date.now(),"-").concat(Math.random().toString(36).slice(2,8))}function s(z,C){return{id:z.id||C||l(),name:z.name||"",messages:z.messages||[],generating:z.generating}}function A(z){var C=z?n:a,w=[],G=function(){S()&&localStorage.setItem(C,JSON.stringify(w))},_e=function(){if(S()){var p=localStorage.getItem(C);w=p?JSON.parse(p):[]}};return{getSessionList:function(){return r()(h()().mark(function p(){return h()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return _e(),z||(w.length===0?(w=[s({})],G()):w.length>1&&(w=w.slice(0,1),G())),de.abrupt("return",E()(w));case 3:case"end":return de.stop()}},p)}))()},getSession:function(p){var pe=this;return r()(h()().mark(function de(){var H;return h()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,pe.getSessionList();case 2:if(H=k.sent,z){k.next=5;break}return k.abrupt("return",H[0]);case 5:return k.abrupt("return",H.find(function(oe){return oe.id===p}));case 6:case"end":return k.stop()}},de)}))()},updateSession:function(p){var pe=this;return r()(h()().mark(function de(){var H,ae;return h()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:if(p.id){oe.next=2;break}return oe.abrupt("return",pe.createSession(p));case 2:return oe.next=4,pe.getSessionList();case 4:return H=oe.sent,ae=H.findIndex(function(ue){return ue.id===p.id}),ae>-1?H[ae]=s(m()(m()({},H[ae]),p),p.id):H.unshift(s(p)),w=z?H:H.slice(0,1),G(),oe.abrupt("return",E()(w));case 10:case"end":return oe.stop()}},de)}))()},createSession:function(p){var pe=this;return r()(h()().mark(function de(){var H,ae;return h()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return oe.next=2,pe.getSessionList();case 2:return H=oe.sent,ae=s(p),z?w=[ae].concat(E()(H)):w=[ae],G(),oe.abrupt("return",E()(w));case 7:case"end":return oe.stop()}},de)}))()},removeSession:function(p){var pe=this;return r()(h()().mark(function de(){var H;return h()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,pe.getSessionList();case 2:if(H=k.sent,p.id){k.next=5;break}return k.abrupt("return",E()(H));case 5:return w=H.filter(function(oe){return oe.id!==p.id}),G(),k.abrupt("return",E()(w));case 8:case"end":return k.stop()}},de)}))()}}}function i(z){return A(z)}var L=e(85893),q=(0,g.createContext)(void 0);function Z(z){try{var C=(0,g.useContextSelector)(q,z);return C}catch(w){return{}}}function W(z){var C,w=z.children,G=(0,N.Z)(),_e=(0,b.useMemo)(function(){var H,ae=!!((H=z.options.session)!==null&&H!==void 0&&H.multiple);return i(ae)},[(C=z.options.session)===null||C===void 0?void 0:C.multiple]),x=(0,b.useMemo)(function(){var H=z.options.theme||{},ae=z.options.session||{},k=!!ae.multiple;return m()(m()({},z.options),{},{session:m()(m()({},ae),{},{multiple:k,api:ae.api||_e}),theme:m()(m()({},H),{},{narrowMode:!G.lg||H.narrowMode})})},[z.options,G.lg,_e]),p=(0,b.useMemo)(function(){var H=x.theme.colorPrimary,ae=x.theme.colorBgBase,k=x.theme.colorTextBase,oe=x.theme.darkMode;if(H||oe){var ue=(0,M.Z)((0,y.Z)({primaryHex:H,bgBaseHex:ae,textBaseHex:k,darkMode:oe}));return ue}},[x.theme.colorPrimary,x.theme.colorBgBase,x.theme.colorTextBase,x.theme.darkMode]),pe=(0,L.jsx)(q.Provider,{value:x,children:w});if(p){var de=x.theme.prefix||"agentscope-runtime-webui";return(0,L.jsx)(j.ZP,m()(m()({},p),{},{style:{height:"100%"},prefix:de,prefixCls:de,children:pe}))}return pe}var re=null},68870:function($e,K,e){"use strict";e.d(K,{Af:function(){return s},Ct:function(){return q},Kt:function(){return i},_Q:function(){return L},c_:function(){return A}});var F=e(97857),m=e.n(F),N=e(15009),g=e.n(N),b=e(99289),M=e.n(b),y=e(5574),j=e.n(y),T=e(59214),h=e(79785),f=e(78234),E=e(67294),v=e(45953),r=e(7906),n=e(73935),a=e(2093),S=e(31119),l=e(85893),s=(0,T.createContext)({sessions:[],setSessions:function(){},getSessions:function(){return[]},currentSessionId:void 0,setCurrentSessionId:function(){},getCurrentSessionId:function(){return""}});function A(Z){var W=(0,r.Uk)(function(H){return H.session}),re=(0,h.Z)([]),z=j()(re,3),C=z[0],w=z[1],G=z[2],_e=(0,h.Z)(void 0),x=j()(_e,3),p=x[0],pe=x[1],de=x[2];return(0,f.Z)(M()(g()().mark(function H(){var ae,k;return g()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,W.api.getSessionList();case 2:k=ue.sent,w(k),pe(k==null||(ae=k[0])===null||ae===void 0?void 0:ae.id);case 5:case"end":return ue.stop()}},H)}))),(0,l.jsx)(s.Provider,{value:{sessions:C,setSessions:w,getSessions:G,currentSessionId:p,setCurrentSessionId:pe,getCurrentSessionId:de},children:Z.children})}var i=function(){var W=(0,T.useContextSelector)(s,function(C){return C.currentSessionId}),re=(0,r.Uk)(function(C){return C.session}),z=(0,T.useContextSelector)(v.ar,function(C){return C.setMessages});(0,a.Z)(M()(g()().mark(function C(){var w,G;return g()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return n.flushSync(function(){z([])}),x.next=3,re.api.getSession(W);case 3:w=x.sent,G=(w==null?void 0:w.messages)||[],z(G.map(function(p){return m()(m()({},p),{},{history:!0})})),w!=null&&w.generating&&(0,S.j)({type:"handleReconnect",data:{session_id:W}});case 7:case"end":return x.stop()}},C)})),[W])},L=function(){return(0,T.useContextSelector)(s,function(W){return W})},q=function(){var W=(0,T.useContextSelector)(s,function(ae){return ae}),re=W.setSessions,z=W.getSessions,C=W.getCurrentSessionId,w=W.setCurrentSessionId,G=W.currentSessionId,_e=(0,r.Uk)(function(ae){return ae.session}),x=(0,T.useContextSelector)(v.ar,function(ae){return ae.setMessages}),p=E.useCallback(function(){var ae=M()(g()().mark(function k(oe){var ue;return g()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,_e.api.removeSession(oe);case 2:ue=xe.sent,x([]),w(void 0),re(ue);case 6:case"end":return xe.stop()}},k)}));return function(k){return ae.apply(this,arguments)}}(),[]),pe=E.useCallback(function(){var ae=M()(g()().mark(function k(oe){var ue;return g()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:if(!oe.id){xe.next=6;break}return xe.next=3,_e.api.updateSession(oe);case 3:xe.t0=xe.sent,xe.next=9;break;case 6:return xe.next=8,_e.api.createSession(oe);case 8:xe.t0=xe.sent;case 9:return ue=xe.t0,re(ue),xe.abrupt("return",oe);case 12:case"end":return xe.stop()}},k)}));return function(k){return ae.apply(this,arguments)}}(),[]),de=E.useCallback(function(){var ae=M()(g()().mark(function k(oe){var ue;return g()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,pe({name:(oe==null?void 0:oe.name)||"",messages:[]});case 2:return ue=xe.sent,w(ue.id),x(ue.messages),xe.abrupt("return",ue.id);case 6:case"end":return xe.stop()}},k)}));return function(k){return ae.apply(this,arguments)}}(),[]),H=E.useCallback(function(ae){w(ae)},[]);return{changeCurrentSessionId:H,getCurrentSessionId:C,getSessions:z,removeSession:p,updateSession:pe,createSession:de}}},31119:function($e,K,e){"use strict";e.d(K,{Z:function(){return m},j:function(){return N}});var F=e(67294);function m(g){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];(0,F.useEffect)(function(){return document.addEventListener(g.type,g.callback),function(){document.removeEventListener(g.type,g.callback)}},b)}var N=function(b){var M=b.type,y=b.data;document.dispatchEvent(new CustomEvent(M,{detail:y}))}},57551:function(){},22863:function($e,K,e){"use strict";e.r(K);var F=e(57551),m=e.n(F),N={};for(var g in F)g!=="default"&&(N[g]=function(b){return F[b]}.bind(0,g));e.d(K,N)},34487:function($e,K,e){"use strict";e.d(K,{Z:function(){return ae}});var F=e(97857),m=e.n(F),N=e(5574),g=e.n(N),b=e(56044),M=e(68400),y=e.n(M),j=e(9053),T,h=(0,j.vJ)(T||(T=y()([`
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
`])),function(k){return k.theme.prefixCls},function(k){return k.theme.colorBgLayout},function(k){return k.theme.colorBgLayout},function(k){return k.theme.colorFillTertiary},function(k){return k.theme.colorBgBase},function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls},function(k){return k.theme.colorBgBase},function(k){return k.theme.colorBorderSecondary},function(k){return k.theme.colorText},function(k){return k.theme.colorBorderSecondary},function(k){return k.theme.colorPrimary}),f=e(93967),E=e.n(f),v=e(55839),r=e(16494),n=e(85893);function a(k){var oe=(0,b.wv)().getPrefixCls("assets-preview-image"),ue=k.width,Ye=ue===void 0?1:ue,xe=k.height,Fe=xe===void 0?1:xe,Xe=k.src;return(0,n.jsx)("div",{className:oe,style:{aspectRatio:"".concat(Ye,"/").concat(Fe)},children:(0,n.jsx)(v.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(r.Z,{src:Xe,width:"100%",height:"100%"})})})}function S(k){return(0,n.jsx)(r.Z.PreviewGroup,{children:k.children})}var l=e(9783),s=e.n(l),A=e(13769),i=e.n(A),L=e(67294),q=e(63701),Z=e(62321),W=e(32485),re=e(64057),z=["width","height","poster","src"];function C(k){var oe=(0,b.wv)().getPrefixCls("assets-preview-video"),ue=k.width,Ye=ue===void 0?1:ue,xe=k.height,Fe=xe===void 0?1:xe,Xe=k.poster,pn=k.src,hn=i()(k,z),un=(0,L.useRef)(null),D=(0,L.useState)(!1),Pe=g()(D,2),I=Pe[0],ee=Pe[1],be=(0,L.useState)(0),ke=g()(be,2),He=ke[0],Re=ke[1],ze=(0,L.useState)(0),fe=g()(ze,2),We=fe[0],Se=fe[1],Ce=(0,L.useCallback)(function(Ve){var t=Math.floor(Ve/60),Ue=Math.floor(Ve%60);return"".concat(t.toString().padStart(2,"0"),":").concat(Ue.toString().padStart(2,"0"))},[]),Ge=(0,L.useCallback)(function(){var Ve=un.current;Ve&&(Ve.paused?(Ve.play(),ee(!0)):(Ve.pause(),ee(!1)))},[]),we=(0,L.useCallback)(function(){un.current&&Re(un.current.duration)},[]),dn=(0,L.useCallback)(function(){ee(!1),Se(0)},[]),bn=(0,L.useCallback)(function(){un.current&&Se(un.current.currentTime)},[]),Pn=(0,L.useCallback)(function(Ve){Ve.stopPropagation();var t=un.current;t&&(t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen())},[]);return(0,n.jsxs)("div",{className:oe,style:{aspectRatio:"".concat(Ye,"/").concat(Fe)},children:[(0,n.jsx)("video",m()(m()({},hn),{},{ref:un,src:pn,poster:Xe,preload:"metadata",onLoadedMetadata:we,onTimeUpdate:bn,onEnded:dn})),(0,n.jsxs)("div",{className:E()("".concat(oe,"-overlay"),s()({},"".concat(oe,"-overlay-playing"),1)),onClick:Ge,children:[(0,n.jsx)("div",{className:"".concat(oe,"-play-btn"),children:I?(0,n.jsx)(q.Z,{}):(0,n.jsx)(Z.Z,{})}),(0,n.jsx)("div",{className:"".concat(oe,"-enlarge"),onClick:Pn,children:(0,n.jsx)(re.Z,{bordered:!1,size:"small",icon:(0,n.jsx)(W.Z,{})})})]}),(0,n.jsx)("div",{className:"".concat(oe,"-duration"),children:Ce(He-We)})]})}var w=e(20399),G=e(80162);function _e(k){var oe=(0,b.wv)().getPrefixCls("assets-preview-audio"),ue=(0,L.useRef)(null),Ye=(0,L.useState)(!1),xe=g()(Ye,2),Fe=xe[0],Xe=xe[1],pn=(0,L.useState)(!1),hn=g()(pn,2),un=hn[0],D=hn[1],Pe=(0,L.useState)(0),I=g()(Pe,2),ee=I[0],be=I[1],ke=(0,L.useState)(0),He=g()(ke,2),Re=He[0],ze=He[1],fe=(0,L.useCallback)(function(we){if(isNaN(we))return"00:00";var dn=Math.floor(we/60),bn=Math.floor(we%60);return"".concat(dn.toString().padStart(2,"0"),":").concat(bn.toString().padStart(2,"0"))},[]),We=(0,L.useCallback)(function(){ue.current&&(Fe?ue.current.pause():ue.current.play(),Xe(!Fe))},[Fe]),Se=(0,L.useCallback)(function(){D(!un),ue.current&&(ue.current.muted=un)},[un]),Ce=(0,L.useCallback)(function(we){if(ue.current&&Re){var dn=we.currentTarget.getBoundingClientRect(),bn=we.clientX-dn.left,Pn=bn/dn.width,Ve=Pn*Re;ue.current.currentTime=Ve,be(Ve)}},[Re]);(0,L.useEffect)(function(){var we=ue.current;if(we){var dn=function(){return be(we.currentTime)},bn=function(){return ze(we.duration)},Pn=function(){return Xe(!1)};return we.addEventListener("timeupdate",dn),we.addEventListener("loadedmetadata",bn),we.addEventListener("ended",Pn),function(){we.removeEventListener("timeupdate",dn),we.removeEventListener("loadedmetadata",bn),we.removeEventListener("ended",Pn)}}},[]);var Ge=Re?ee/Re*100:0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("audio",{ref:ue,src:k.src,muted:un}),(0,n.jsxs)("div",{className:oe,children:[(0,n.jsx)(re.Z,{size:"small",type:"text",onClick:We,icon:Fe?(0,n.jsx)(q.Z,{}):(0,n.jsx)(Z.Z,{})}),(0,n.jsx)(re.Z,{size:"small",type:"text",onClick:Se,icon:un?(0,n.jsx)(w.Z,{}):(0,n.jsx)(G.Z,{})}),(0,n.jsx)("div",{className:"".concat(oe,"-time"),children:fe(ee)}),(0,n.jsx)("div",{className:"".concat(oe,"-progress"),onClick:Ce,children:(0,n.jsx)("div",{className:"".concat(oe,"-progress-bar"),style:{width:"".concat(Ge,"%")}})}),(0,n.jsx)("div",{className:"".concat(oe,"-time"),children:fe(Re)})]})]})}var x=e(16138),p=e(83202),pe=e(90105),de=e(82052);function H(k){var oe,ue=(0,pe.Z)(),Ye=(0,b.wv)().getPrefixCls("assets-preview"),xe=(0,L.useRef)(null),Fe=k.height,Xe=Fe===void 0?144:Fe,pn=Xe/2-12,hn=(0,L.useRef)(0),un=(0,L.useState)(0),D=g()(un,2),Pe=D[0],I=D[1],ee=(0,L.useDeferredValue)(Pe),be=(0,de.Z)(xe),ke=(0,L.useCallback)(function(fe){I(fe.target.scrollLeft)},[]);(0,L.useEffect)(function(){xe.current&&k.type!=="audio"&&(hn.current=xe.current.scrollWidth-xe.current.clientWidth),ue()},[k.data.length,be==null?void 0:be.width]);var He=(0,L.useCallback)(function(fe){var We=200;xe.current.scrollLeft=xe.current.scrollLeft+We*(fe==="left"?-1:1)},[]),Re={image:a,video:C,audio:_e}[k.type],ze=k.data.map(function(fe,We){return(0,n.jsx)(Re,m()({},fe),We)});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{}),(0,n.jsxs)("div",{className:E()("".concat(Ye),k.className),children:[(0,n.jsx)("div",{className:E()("".concat(Ye,"-container"),(oe=k.classNames)===null||oe===void 0?void 0:oe.container),style:k.type!=="audio"?{height:Xe}:{flexDirection:"column"},onScroll:ke,ref:xe,children:k.type==="image"?(0,n.jsx)(S,{children:ze}):ze}),pn>0&&k.type!=="audio"?(0,n.jsxs)(n.Fragment,{children:[ee>50&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:E()("".concat(Ye,"-left-edge"))}),(0,n.jsx)(re.Z,{onClick:function(){return He("left")},style:{top:pn},className:E()("".concat(Ye,"-left-arrow"),"".concat(Ye,"-arrow")),size:"small",shape:"circle",icon:(0,n.jsx)(x.Z,{})})]}),ee<hn.current-50&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:E()("".concat(Ye,"-right-edge"))}),(0,n.jsx)(re.Z,{onClick:function(){return He("right")},style:{top:pn},className:E()("".concat(Ye,"-right-arrow"),"".concat(Ye,"-arrow")),size:"small",shape:"circle",icon:(0,n.jsx)(p.Z,{})})]})]}):null]})]})}var ae=H},50993:function($e,K,e){"use strict";e.d(K,{Z:function(){return Ve}});var F=e(9783),m=e.n(F),N=e(97857),g=e.n(N),b=e(5574),M=e.n(b),y=e(13769),j=e.n(y),T=e(93967),h=e.n(T),f=e(67294),E=e(56044),v=e(56790),r=e(73935),n=f.createContext(null),a=e(85893);function S(t){var Ue=t.getDropContainer,De=t.className,an=t.prefixCls,c=t.children,te=f.useContext(n),ve=te.disabled,J=f.useState(),V=M()(J,2),O=V[0],ce=V[1],ne=f.useState(null),Y=M()(ne,2),o=Y[0],Q=Y[1];f.useEffect(function(){var U=Ue==null?void 0:Ue();O!==U&&ce(U)},[Ue]),f.useEffect(function(){if(O){var U=function(){Q(!0)},Ae=function(Me){Me.preventDefault()},le=function(Me){Me.relatedTarget||Q(!1)},Be=function(Me){Q(!1),Me.preventDefault()};return document.addEventListener("dragenter",U),document.addEventListener("dragover",Ae),document.addEventListener("dragleave",le),document.addEventListener("drop",Be),function(){document.removeEventListener("dragenter",U),document.removeEventListener("dragover",Ae),document.removeEventListener("dragleave",le),document.removeEventListener("drop",Be)}}},[!!O]);var X=Ue&&O&&!ve;if(!X)return null;var ie="".concat(an,"-drop-area");return(0,r.createPortal)((0,a.jsx)("div",{className:h()(ie,De,m()({},"".concat(ie,"-on-body"),O.tagName==="BODY")),style:{display:o?"block":"none"},children:c}),O)}var l=e(53033),s=e(52861),A=e(83622),i=e(29372),L=e(64599),q=e.n(L),Z=e(68400),W=e.n(Z),re=e(9053),z,C=(0,re.vJ)(z||(z=W()([`
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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.colorBgContainer},function(t){return t.theme.lineWidth},function(t){return t.theme.colorBorderSecondary},function(t){return t.theme.paddingXS},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.fontSize},function(t){return t.theme.colorText},function(t){return t.theme.prefixCls},function(t){return t.theme.colorTextQuaternary},function(t){return t.theme.fontSizeSM},function(t){return t.theme.prefixCls},function(t){return t.theme.opacityLoading},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.colorWhite},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.lineWidth},function(t){return t.theme.prefixCls},function(t){return t.theme.paddingXXS},function(t){return t.theme.prefixCls},function(t){return t.theme.colorText},function(t){return t.theme.colorBgContainer},function(t){return t.theme.lineWidth},function(t){return t.theme.colorBorder},function(t){return t.theme.colorError},function(t){return t.theme.prefixCls},function(t){return t.theme.colorError},function(t){return t.theme.paddingSM},function(t){return t.theme.prefixCls},function(t){return t.theme.colorPrimary},function(t){return t.theme.prefixCls}),w=e(89102),G=e(16494),_e=function(Ue){return Ue.indexOf("image/")===0},x=200;function p(t){return new Promise(function(Ue){if(!t||!t.type||!_e(t.type)){Ue("");return}var De=new Image;if(De.onload=function(){var te=De.width,ve=De.height,J=te/ve,V=J>1?x:x*J,O=J>1?x/J:x,ce=document.createElement("canvas");ce.width=V,ce.height=O,ce.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(V,"px; height: ").concat(O,"px; z-index: 9999; display: none;"),document.body.appendChild(ce);var ne=ce.getContext("2d");ne.drawImage(De,0,0,V,O);var Y=ce.toDataURL();document.body.removeChild(ce),window.URL.revokeObjectURL(De.src),Ue(Y)},De.crossOrigin="anonymous",t.type.startsWith("image/svg+xml")){var an=new FileReader;an.onload=function(){an.result&&typeof an.result=="string"&&(De.src=an.result)},an.readAsDataURL(t)}else if(t.type.startsWith("image/gif")){var c=new FileReader;c.onload=function(){c.result&&Ue(c.result)},c.readAsDataURL(t)}else De.src=window.URL.createObjectURL(t)})}var pe=e(9361),de=e(38703);function H(t){var Ue=t.percent,De=pe.Z.useToken(),an=De.token;return(0,a.jsx)(de.Z,{type:"circle",percent:Ue,size:40,strokeColor:"#FFF",trailColor:"rgba(255, 255, 255, 0.3)",format:function(te){return(0,a.jsxs)("span",{style:{color:"#FFF"},children:[(te||0).toFixed(0),"%"]})}})}var ae=e(43974),k=e(60227),oe="\xA0",ue="image/png,image/jpeg,image/jpg,image/gif,image/bmp,image/webp,image/svg+xml";function Ye(t,Ue){var De=(0,E.wv)(),an=De.getPrefixCls,c=t.item,te=t.onRemove,ve=t.onReplace,J=t.className,V=t.style,O=f.useContext(n),ce=O||{},ne=ce.disabled,Y=c.percent,o=c.status,Q=o===void 0?"done":o,X=c.description,ie=an("attachment"),U="".concat(ie,"-list-card"),Ae=f.useState(!1),le=M()(Ae,2),Be=le[0],Qe=le[1],Me=f.useRef(null),on=f.useMemo(function(){return{visible:Be,onVisibleChange:Qe}},[Be]),sn=f.useMemo(function(){return X||(Q==="uploading"?"".concat(Y||0,"%"):Q==="error"&&c.response||oe)},[X,Q,Y,c.response]),Je=f.useState(),fn=M()(Je,2),Cn=fn[0],cn=fn[1];f.useEffect(function(){if(c.originFileObj){var jn=!0;return p(c.originFileObj).then(function(en){jn&&cn(en)}),function(){jn=!1}}cn(void 0)},[c.originFileObj]);var qe=c.thumbUrl||c.url||Cn,Sn=function(en){var xn;en.stopPropagation(),(xn=Me.current)===null||xn===void 0||xn.click()},Rn=function(en){var xn,In=(xn=en.target.files)===null||xn===void 0?void 0:xn[0];In&&ve&&ve(c,In),Me.current&&(Me.current.value="")};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{}),(0,a.jsxs)("div",{className:h()(U,m()(m()(m()({},"".concat(U,"-status-").concat(Q),Q),"".concat(U,"-type-preview"),!0),"".concat(U,"-hoverable"),!ne&&te),J),style:V,ref:Ue,children:[qe&&(0,a.jsx)("img",{alt:"preview",src:qe}),(0,a.jsx)(G.Z,{src:qe,style:{display:"none"},preview:on}),Q!=="done"&&(0,a.jsxs)("div",{className:"".concat(U,"-img-mask"),children:[Q==="uploading"&&Y!==void 0&&(0,a.jsx)(H,{percent:Y,prefixCls:U}),Q==="error"&&(0,a.jsx)("div",{className:"".concat(U,"-desc"),children:(0,a.jsx)("div",{className:"".concat(U,"-ellipsis-prefix"),children:sn})})]}),Q==="done"&&(0,a.jsxs)("div",{className:"".concat(U,"-img-hover-mask"),children:[(0,a.jsx)("button",{className:"".concat(U,"-img-action"),onClick:function(en){en.stopPropagation(),Qe(!0)},children:(0,a.jsx)(ae.Z,{})}),ve&&(0,a.jsx)("button",{className:"".concat(U,"-img-action"),onClick:Sn,children:(0,a.jsx)(k.Z,{})})]}),(0,a.jsx)("input",{ref:Me,type:"file",accept:ue,style:{display:"none"},onChange:Rn}),(0,a.jsx)("button",{style:{opacity:!ne&&te?1:0},className:"".concat(U,"-remove"),onClick:function(){!ne&&te&&te(c)},children:(0,a.jsx)(w.Z,{})})]})]})}var xe=f.forwardRef(Ye),Fe="\xA0",Xe="#8c8c8c",pn=["png","jpg","jpeg","gif","bmp","webp","svg"],hn=function(Ue){var De=Ue.url;return(0,a.jsx)("img",{src:De,width:32,height:32})},un=[{icon:(0,a.jsx)(hn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01cVtZXI23tPVhiZoPJ_!!6000000007313-55-tps-40-40.svg"}),color:"#22b35e",ext:["xlsx","xls"]},{icon:(0,a.jsx)(hn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01uDnnuz1XMNEjgFMul_!!6000000002909-55-tps-40-40.svg"}),color:Xe,ext:pn},{icon:(0,a.jsx)(hn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01PaXli01DDPAO68fsI_!!6000000000182-55-tps-40-40.svg"}),color:Xe,ext:["md","mdx"]},{icon:(0,a.jsx)(hn,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01mB5PzD27fuIWK661W_!!6000000007825-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["pdf"]},{icon:(0,a.jsx)(hn,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01a8j7Jv1nW1QyFme7k_!!6000000005096-55-tps-40-40.svg"}),color:"#ff6e31",ext:["ppt","pptx"]},{icon:(0,a.jsx)(hn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01XaNi8P1UkhQXoQdUL_!!6000000002556-55-tps-40-40.svg"}),color:"#1677ff",ext:["doc","docx"]},{icon:(0,a.jsx)(hn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),color:"#fab714",ext:["zip","rar","7z","tar","gz"]},{icon:(0,a.jsx)(hn,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01zTTe0q1Xg4GkZgJol_!!6000000002952-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["mp4","avi","mov","wmv","flv","mkv"]},{icon:(0,a.jsx)(hn,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01qOBdXG1UpHO6f3Vvc_!!6000000002566-55-tps-40-40.svg"}),color:"#8c8c8c",ext:["mp3","wav","flac","ape","aac","ogg"]}];function D(t,Ue){return Ue.some(function(De){return t.toLowerCase()===".".concat(De)})}function Pe(t){for(var Ue=t,De=["B","KB","MB","GB","TB","PB","EB"],an=0;Ue>=1024&&an<De.length-1;)Ue/=1024,an++;return"".concat(Ue.toFixed(0)," ").concat(De[an])}function I(t,Ue){var De=(0,E.wv)(),an=De.getPrefixCls,c=t.item,te=t.onRemove,ve=t.onReplace,J=t.className,V=t.style,O=f.useContext(n),ce=O||{},ne=ce.disabled,Y=c.name,o=c.size,Q=c.percent,X=c.status,ie=X===void 0?"done":X,U=c.description,Ae=an("attachment"),le="".concat(Ae,"-list-card"),Be=f.useMemo(function(){var jn=Y||"",en=jn.match(/^(.*)\.[^.]+$/);return en?[en[1],jn.slice(en[1].length)]:[jn,""]},[Y]),Qe=M()(Be,2),Me=Qe[0],on=Qe[1],sn=f.useMemo(function(){return D(on,pn)},[on]),Je=t.renderType||"default",fn=sn&&(c.originFileObj||c.thumbUrl||c.url)&&Je==="default";if(fn)return(0,a.jsx)(xe,{ref:Ue,item:c,onRemove:te,onReplace:ve,className:J,style:V});var Cn=function(){return U||(ie==="uploading"?"".concat(Q||0,"%"):ie==="error"?c.response||Fe:o?Pe(o):Fe)}(),cn=function(){var jn=q()(un),en;try{for(jn.s();!(en=jn.n()).done;){var xn=en.value,In=xn.ext,$n=xn.icon,_n=xn.color;if(D(on,In))return[$n,_n]}}catch(On){jn.e(On)}finally{jn.f()}return[(0,a.jsx)(hn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"},"defaultIcon"),Xe]}(),qe=M()(cn,2),Sn=qe[0],Rn=qe[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{}),(0,a.jsxs)("div",{className:h()(le,m()(m()(m()(m()({},"".concat(le,"-status-").concat(ie),ie),"".concat(le,"-type-overview"),!0),"".concat(le,"-type-").concat(Je),!0),"".concat(le,"-hoverable"),!ne&&te),J),style:V,ref:Ue,children:[(0,a.jsx)("div",{className:"".concat(le,"-icon"),style:{color:Rn},children:Sn}),(0,a.jsxs)("div",{className:"".concat(le,"-content"),children:[(0,a.jsxs)("div",{className:"".concat(le,"-name"),children:[Me!=null?Me:Fe,on]}),(0,a.jsx)("div",{className:"".concat(le,"-desc"),children:(0,a.jsx)("div",{className:"".concat(le,"-ellipsis-prefix"),children:Cn})})]}),(0,a.jsx)("button",{style:{opacity:!ne&&te?1:0},className:"".concat(le,"-remove"),onClick:function(){!ne&&te&&te(c)},children:(0,a.jsx)(w.Z,{})})]})]})}var ee=f.forwardRef(I),be=1;function ke(t){var Ue=t.prefixCls,De=t.items,an=t.onRemove,c=t.onReplace,te=t.overflow,ve=t.listClassName,J=t.listStyle,V=t.itemClassName,O=t.itemStyle,ce="".concat(Ue,"-list"),ne=f.useRef(null),Y=f.useState(!1),o=M()(Y,2),Q=o[0],X=o[1];f.useEffect(function(){return X(!0),function(){X(!1)}},[]);var ie=f.useState(!1),U=M()(ie,2),Ae=U[0],le=U[1],Be=f.useState(!1),Qe=M()(Be,2),Me=Qe[0],on=Qe[1],sn=function(){var qe=ne.current;qe&&(te==="scrollX"?(le(Math.abs(qe.scrollLeft)>=be),on(qe.scrollWidth-qe.clientWidth-Math.abs(qe.scrollLeft)>=be)):te==="scrollY"&&(le(qe.scrollTop!==0),on(qe.scrollHeight-qe.clientHeight!==qe.scrollTop)))};f.useEffect(function(){sn()},[te]);var Je=function(qe){var Sn=ne.current;Sn&&Sn.scrollTo({left:Sn.scrollLeft+qe*Sn.clientWidth,behavior:"smooth"})},fn=function(){Je(-1)},Cn=function(){Je(1)};return(0,a.jsxs)("div",{className:h()(ce,m()(m()(m()({},"".concat(ce,"-overflow-").concat(t.overflow),te),"".concat(ce,"-overflow-ping-start"),Ae),"".concat(ce,"-overflow-ping-end"),Me),ve),ref:ne,onScroll:sn,style:J,children:[(0,a.jsx)(i.V4,{keys:De.map(function(cn){return{key:cn.uid,item:cn}}),motionName:"".concat(ce,"-card-motion"),component:!1,motionAppear:Q,motionLeave:!0,motionEnter:!0,children:function(qe){var Sn=qe.key,Rn=qe.item,jn=qe.className,en=qe.style;return(0,a.jsx)(ee,{prefixCls:Ue,item:Rn,onRemove:an,onReplace:c,className:h()(jn,V),style:g()(g()({},en),O),renderType:t.renderType},Sn)}}),te==="scrollX"&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A.ZP,{size:"small",shape:"circle",className:"".concat(ce,"-prev-btn"),icon:(0,a.jsx)(l.Z,{}),onClick:fn}),(0,a.jsx)(A.ZP,{size:"small",shape:"circle",className:"".concat(ce,"-next-btn"),icon:(0,a.jsx)(s.Z,{}),onClick:Cn})]})]})}var He=e(86250),Re=e(21317),ze=e(41154);function fe(t,Ue){var De=t.prefixCls,an=t.placeholder,c=an===void 0?{}:an,te=t.upload,ve=t.className,J=t.style,V="".concat(De,"-placeholder"),O=c||{},ce=f.useContext(n),ne=ce.disabled,Y=f.useState(!1),o=M()(Y,2),Q=o[0],X=o[1],ie=function(){X(!0)},U=function(Qe){Qe.currentTarget.contains(Qe.relatedTarget)||X(!1)},Ae=function(){X(!1)},le=f.isValidElement(c)?c:(0,a.jsxs)(He.Z,{align:"center",justify:"center",vertical:!0,className:"".concat(V,"-inner"),children:[(0,a.jsx)(Re.default.Text,{className:"".concat(V,"-icon"),children:O.icon}),(0,a.jsx)(Re.default.Title,{className:"".concat(V,"-title"),level:5,children:O.title}),(0,a.jsx)(Re.default.Text,{className:"".concat(V,"-description"),type:"secondary",children:O.description})]});return(0,a.jsx)("div",{className:h()(V,m()(m()({},"".concat(V,"-drag-in"),Q),"".concat(V,"-disabled"),ne),ve),onDragEnter:ie,onDragLeave:U,onDrop:Ae,"aria-hidden":ne,style:J,children:(0,a.jsx)(ze.Z.Dragger,g()(g()({showUploadList:!1},te),{},{ref:Ue,style:{padding:0,border:0,background:"transparent"},children:le}))})}var We=f.forwardRef(fe);function Se(t,Ue){var De=t.children,an=t.upload,c=t.rootClassName,te=f.useRef(null);return f.useImperativeHandle(Ue,function(){return te.current}),(0,a.jsx)(ze.Z,g()(g()({},an),{},{showUploadList:!1,rootClassName:c,ref:te,children:De}))}var Ce=f.forwardRef(Se),Ge,we=(0,re.vJ)(Ge||(Ge=W()([`
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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.zIndexPopupBase},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.lineWidthBold},function(t){return t.theme.padding},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.colorPrimaryHover},function(t){return t.theme.prefixCls},function(t){return t.theme.paddingXXS},function(t){return t.theme.fontSizeHeading2},function(t){return t.theme.prefixCls},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.colorText},function(t){return t.theme.padding},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSizeHeading2},function(t){return t.theme.boxShadowTertiary},function(t){return t.theme.padding},function(t){return t.theme.padding},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls}),dn=["prefixCls","rootClassName","rootStyle","className","style","items","children","getDropContainer","placeholder","onChange","overflow","disabled","replaceable","classNames","styles"];function bn(t,Ue){var De=t.prefixCls,an=t.rootClassName,c=t.rootStyle,te=t.className,ve=t.style,J=t.items,V=t.children,O=t.getDropContainer,ce=t.placeholder,ne=t.onChange,Y=t.overflow,o=t.disabled,Q=t.replaceable,X=t.classNames,ie=X===void 0?{}:X,U=t.styles,Ae=U===void 0?{}:U,le=j()(t,dn),Be=(0,E.wv)(),Qe=Be.direction,Me=Be.getPrefixCls,on=Me("attachment"),sn=f.useRef(null),Je=f.useRef(null);f.useImperativeHandle(Ue,function(){return{nativeElement:sn.current,upload:function(On){var gn,wn=(gn=Je.current)===null||gn===void 0||(gn=gn.nativeElement)===null||gn===void 0?void 0:gn.querySelector('input[type="file"]');if(wn){var Un=new DataTransfer;Un.items.add(On),wn.files=Un.files,wn.dispatchEvent(new Event("change",{bubbles:!0}))}}}});var fn=(0,v.C8)([],{value:J}),Cn=M()(fn,2),cn=Cn[0],qe=Cn[1],Sn=(0,v.zX)(function(_n){qe(_n.fileList),ne==null||ne(_n)}),Rn=g()(g()({},le),{},{fileList:cn,onChange:Sn}),jn=function(On){var gn=cn.filter(function(wn){return wn.uid!==On.uid});Sn({file:On,fileList:gn})},en=(0,v.zX)(function(_n,On){var gn={uid:_n.uid,name:On.name,size:On.size,type:On.type,originFileObj:On,status:"done",percent:100},wn=cn.map(function(Un){return Un.uid===_n.uid?gn:Un});Sn({file:gn,fileList:wn})}),xn,In=function(On,gn,wn){var Un=typeof ce=="function"?ce(On):ce;return(0,a.jsx)(We,{placeholder:Un,upload:Rn,prefixCls:on,className:h()(ie.placeholder),style:g()(g()({},Ae.placeholder),gn==null?void 0:gn.style),ref:wn})};if(V)xn=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Ce,{upload:Rn,rootClassName:an,ref:Je,children:V}),(0,a.jsx)(S,{getDropContainer:O,prefixCls:on,className:h()(an),children:In("drop")})]});else{var $n=cn.length>0;xn=(0,a.jsxs)("div",{className:h()(on,m()({},"".concat(on,"-rtl"),Qe==="rtl"),te,an),style:g()(g()({},c),ve),dir:Qe||"ltr",ref:sn,children:[(0,a.jsx)(ke,{prefixCls:on,items:cn,onRemove:jn,onReplace:Q?en:void 0,overflow:Y,upload:Rn,listClassName:h()(ie.list),listStyle:g()(g()({},Ae.list),!$n&&{display:"none"}),itemClassName:h()(ie.item),itemStyle:g()({},Ae.item),renderType:t.renderType}),In("inline",$n?{style:{display:"none"}}:{},Je)]})}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(we,{}),(0,a.jsx)(n.Provider,{value:{disabled:o},children:xn})]})}var Pn=f.forwardRef(bn);Pn.FileCard=ee,Pn.ImageCard=xe;var Ve=Pn},50130:function($e,K,e){"use strict";e.d(K,{L:function(){return E},Z:function(){return f}});var F=e(97857),m=e.n(F),N=e(13769),g=e.n(N),b=e(67294),M=e(83962),y=e(76289),j=e(85893),T=["component"],h=b.memo(function(v){var r=(0,M.HJ)(),n=(0,y.TQ)(function(s){return s.onInput}),a=(0,b.useMemo)(function(){if(v.component)return v.component;var s=r;return(s==null?void 0:s[v.code])||function(){return"".concat(v.code," not found")}},[]);if(typeof a=="function"){var S=v.component,l=g()(v,T);return(0,j.jsx)(a,m()(m()({},l),{},{context:{onInput:n}}))}else return a});function f(v){var r=v.cards;return r!=null&&r.length?r.map(function(n,a){var S=(0,j.jsx)(h,m()({index:a,id:v.id,isLast:v.isLast},n),(n==null?void 0:n.id)||a+n.code);return n.code==="Text"?(0,j.jsx)("div",{className:v.className,children:S},a):S}):null}function E(v,r){return{code:v,data:r}}},67369:function($e,K,e){"use strict";e.d(K,{p4:function(){return E},hw:function(){return v},ZP:function(){return f}});var F=e(67294),m=e(56044),N=e(64057),g=e(68400),b=e.n(g),M=e(9053),y,j=(0,M.vJ)(y||(y=b()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorText},function(r){return r.theme.prefixCls},function(r){return r.theme.colorTextTertiary},function(r){return r.theme.colorBorder}),T=j,h=e(85893);function f(r){var n=(0,m.wv)(),a=n.getPrefixCls,S=a("bubble-footer"),l=r.left,s=r.right;return l&&!l.type||s&&!s.type?null:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(T,{}),(0,h.jsxs)("div",{className:S,children:[(0,h.jsx)("div",{className:"".concat(S,"-left"),children:r.left}),(0,h.jsx)("div",{className:"".concat(S,"-right"),children:r.right})]})]})}function E(r){var n=(0,m.wv)(),a=n.getPrefixCls,S=a("bubble-footer-actions");return(0,h.jsx)("div",{className:S,children:r.data.map(function(l,s){return l.children?F.cloneElement(l.children,{key:s}):(0,h.jsx)(N.Z,{bordered:!1,icon:l.icon,size:"small",onClick:l.onClick},s)})})}function v(r){var n=(0,m.wv)(),a=n.getPrefixCls,S=a("bubble-footer-count");return(0,h.jsx)("div",{className:S,children:r.data.map(function(l){return(0,h.jsxs)("div",{className:"".concat(S,"-item"),children:[l[0],"\uFF1A",l[1]]},l[0])})})}f.Actions=E,f.Count=v},10146:function($e,K,e){"use strict";e.d(K,{Z:function(){return h}});var F=e(68400),m=e.n(F),N=e(9053),g=e(56044),b=e(9343),M=e(36674),y=e(85893),j,T=(0,N.vJ)(j||(j=m()([`
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

`])),function(f){return f.theme.prefixCls},function(f){return f.theme.colorFillSecondary},function(f){return f.theme.prefixCls},function(f){return f.theme.prefixCls},function(f){return f.theme.colorText},function(f){return f.theme.colorError});function h(f){var E=f.title,v=E===void 0?"Answers have stopped":E,r=f.type,n=r===void 0?"interrupted":r,a=f.desc,S=(0,g.wv)(),l=S.getPrefixCls,s=l("interrupted");return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(T,{}),(0,y.jsxs)("div",{className:"".concat(s),children:[(0,y.jsxs)("div",{className:"".concat(s,"-header"),children:[(0,y.jsx)("div",{className:"".concat(s,"-icon-wrapper"),children:n==="interrupted"?(0,y.jsx)(b.Z,{className:"".concat(s,"-header-interrupted")}):(0,y.jsx)(M.Z,{className:"".concat(s,"-header-error")})}),(0,y.jsx)("span",{children:v})]}),a&&(0,y.jsx)("div",{className:"".concat(s,"-desc"),children:a})]})]})}},46624:function($e,K,e){"use strict";e.d(K,{Z:function(){return un}});var F=e(97857),m=e.n(F),N=e(93967),g=e.n(N),b=e(67294),M=e(68400),y=e.n(M),j=e(9053),T,h=(0,j.vJ)(T||(T=y()([`
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
    gap: 4px;
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
`])),function(D){return D.theme.prefixCls},function(D){return D.theme.prefixCls},function(D){return D.theme.colorText},function(D){return D.theme.fontSize},function(D){return D.theme.lineHeight},function(D){return D.theme.prefixCls},function(D){return D.theme.borderRadiusLG},function(D){return D.theme.colorPrimaryBg},function(D){return D.theme.prefixCls},function(D){return D.theme.colorText},function(D){return D.theme.colorText},function(D){return D.theme.colorBgBase},function(D){return D.theme.colorBgBase},function(D){return D.theme.colorTextTertiary},function(D){return D.theme.colorTextTertiary},function(D){return D.theme.colorBgBase},function(D){return D.theme.colorBgBase},function(D){return D.theme.colorTextSecondary},function(D){return D.theme.colorTextSecondary},function(D){return D.theme.colorBgBase},function(D){return D.theme.colorBgBase}),f=e(56044),E=e(66109),v=e(50130),r=e(85893);function n(){var D=(0,f.wv)(),Pe=D.getPrefixCls,I=Pe("bubble-loading");return(0,r.jsxs)("div",{className:I,children:[(0,r.jsx)("div",{className:"".concat(I,"-dot1")}),(0,r.jsx)("div",{className:"".concat(I,"-dot2")}),(0,r.jsx)("div",{className:"".concat(I,"-dot3")}),(0,r.jsx)("div",{className:"".concat(I,"-text"),children:"-"})]})}var a=e(9783),S=e.n(a),l=e(68997),s=function(Pe){var I=Pe.avatar,ee=Pe.msgStatus,be=Pe.isAssistant,ke=Pe.prefixCls,He=Pe.className,Re=Pe.style,ze=b.isValidElement(I)?I:(0,r.jsx)(l.Z,m()({},I));return(0,r.jsx)("div",{className:g()("".concat(ke,"-avatar"),S()({},"".concat(ke,"-avatar-loading"),be&&ee==="generating"),He),style:Re,children:ze})},A=s,i,L=(0,j.vJ)(i||(i=y()([`
.`,`-bubble-avatar {
  display: inline-flex;
  justify-content: center;
  align-self: flex-start;
  margin-bottom: 8px;

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
`])),function(D){return D.theme.prefixCls},function(D){return D.theme.prefixCls},function(D){return D.theme.colorFillSecondary},function(D){return D.theme.prefixCls},function(D){return D.theme.colorBorder},function(D){return D.theme.colorBorderSecondary},function(D){return D.theme.colorBorder},function(D){return D.theme.prefixCls}),q=b.createContext({}),Z=function(Pe){var I=Pe.isLast,ee=Pe.className,be=Pe.rootClassName,ke=Pe.style,He=Pe.classNames,Re=He===void 0?{}:He,ze=Pe.styles,fe=ze===void 0?{}:ze,We=Pe.avatar,Se=Pe.content,Ce=Se===void 0?"":Se,Ge=Pe.cards,we=Pe.msgStatus,dn=Pe.id,bn=Pe.role,Pn=Pe.variant,Ve={assistant:"start",user:"end"}[bn]||"start",t=(0,f.wv)(),Ue=t.getPrefixCls,De=Ue("bubble"),an=g()(De,be,ee,"".concat(De,"-").concat(Ve)),c,te=!(Ce!=null&&Ce.length)&&!(Ge!=null&&Ge.length);Pe.msgStatus==="generating"&&te?c=(0,r.jsx)(n,{}):c=Ce?(0,r.jsx)(E.Z,{content:Ce,cursor:Pe.msgStatus==="generating"}):null;var ve=Ve==="assistant"||Ve==="start",J="".concat(De,"-content-").concat(Pn||(ve?"borderless":"filled")),V=(0,r.jsxs)("div",{style:!ve&&c?{flexDirection:"column-reverse"}:{},className:"".concat(De,"-content-wrapper"),children:[We&&(0,r.jsx)(A,{avatar:We,msgStatus:we,isAssistant:ve,prefixCls:De,className:Re.avatar,style:fe.avatar}),(0,r.jsx)(v.Z,{cards:Ge,id:dn,isLast:I,className:g()("".concat(De,"-content"),"".concat(De,"-content-wrapper-card"),J,Re.content)}),c&&(0,r.jsx)("div",{style:m()({},fe.content),className:g()("".concat(De,"-content"),"".concat(De,"-content-wrapper-card"),J,Re.content),children:c})]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{}),(0,r.jsx)(L,{}),(0,r.jsx)("div",{style:ke,className:an,id:dn,"data-role":bn,children:V})]})},W=b.memo(Z),re=e(5574),z=e.n(re),C=e(13769),w=e.n(C),G=e(64057),_e=e(25109),x=function(Pe){var I=Pe.visible,ee=Pe.onClick,be=(0,f.wv)(),ke=be.getPrefixCls,He=ke("bubble-list-scroll-to-bottom");return(0,r.jsx)("div",{className:g()(He,"".concat(He,"-").concat(I?"show":"hide")),children:(0,r.jsx)(G.Z,{icon:(0,r.jsx)(_e.Z,{}),shape:"circle",onClick:ee})})},p=x,pe,de=(0,j.vJ)(pe||(pe=y()([`
.`,`-bubble-list-wrapper {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.`,`-bubble-list-scroll {
  height: 100%;
  width: 100%;
  overflow: auto;
  scrollbar-gutter: stable both-edges;
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

  &-order-desc {
    flex-direction: column-reverse;

    &::before {
      display: block;
      content: ' ';
      height: 16px;
      flex: 0 0 16px;
    }

    &::after {
      height: 0;
      flex: 0 0 0;
    }
  }

  &-order-desc-short {
    height: 0;
    flex: 1;
  }
}

.`,`-bubble-list-load-more {
  display: flex;
  padding: 16px 0;
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
`])),function(D){return D.theme.prefixCls},function(D){return D.theme.prefixCls},function(D){return D.theme.prefixCls},function(D){return D.theme.prefixCls},function(D){return D.theme.prefixCls},function(D){return D.theme.colorPrimaryBorder},function(D){return D.theme.colorPrimaryBg},function(D){return D.theme.colorPrimary}),H=e(42532),ae=e(45908),k=e(57381),oe=["key"];function ue(D){var Pe=D.order,I=D.paginationItems,ee=D.noMore,be=D.loadMore,ke=D.scrollRef,He=D.children,Re=D.onLoadMoreStart,ze=D.onLoadMoreEnd,fe=(0,b.useCallback)(function(){return be(ke)},[be,ke]),We=(0,b.useMemo)(function(){return ee?null:(0,r.jsx)(Ye,{handleLoadMore:fe,onLoadMoreStart:Re,onLoadMoreEnd:ze})},[fe,Re,ze,ee]);return(0,r.jsxs)(r.Fragment,{children:[Pe==="asc"&&!ee?We:null,He||I.map(function(Se,Ce){var Ge=Se.key,we=w()(Se,oe),dn=Ce===I.length-1;return(0,b.createElement)(W,m()(m()({},we),{},{isLast:dn,key:we.id||Ge||Ce}))}),Pe==="desc"&&!ee?We:null]})}function Ye(D){var Pe=D.handleLoadMore,I=D.onLoadMoreStart,ee=D.onLoadMoreEnd,be=(0,b.useRef)(null),ke=(0,H.Z)(be),He=z()(ke,1),Re=He[0],ze=(0,b.useRef)(!1),fe=(0,b.useRef)(!0),We=(0,b.useRef)(Re),Se=(0,ae.Z)(Re),Ce=(0,f.wv)(),Ge=Ce.getPrefixCls,we=Ge("bubble-list");(0,b.useEffect)(function(){We.current=Re},[Re]),(0,b.useEffect)(function(){return function(){fe.current=!1}},[]);var dn=(0,b.useCallback)(function(){!fe.current||ze.current||(ze.current=!0,I==null||I(),Pe().finally(function(){ze.current=!1,ee==null||ee(),requestAnimationFrame(function(){fe.current&&We.current&&dn()})}))},[Pe,I,ee]);return(0,b.useEffect)(function(){!Re&&Se===void 0||ze.current||Re&&dn()},[Se,Re,dn]),(0,r.jsx)("div",{ref:be,className:"".concat(we,"-load-more"),children:(0,r.jsx)(k.Z,{spinning:!0})})}var xe=function(Pe,I){var ee,be,ke,He=Pe.items,Re=He===void 0?[]:He,ze=Pe.order,fe=ze===void 0?"asc":ze,We=(0,b.useState)(!1),Se=z()(We,2),Ce=Se[0],Ge=Se[1],we=b.useRef(null),dn=b.useRef(!0),bn=(0,f.wv)(),Pn=bn.getPrefixCls,Ve=Pn("bubble-list"),t=fe==="desc",Ue=(0,b.useCallback)(function(){var J=we.current;return J?t?J.scrollTop<=2:J.scrollHeight-J.clientHeight-J.scrollTop<=2:!0},[t]),De=(0,b.useCallback)(function(){var J=we.current;if(!J)return!1;var V=J.scrollHeight-J.clientHeight>2;return V?t?J.scrollTop<=-10:J.scrollHeight-J.clientHeight-J.scrollTop>10:!1},[t]),an=(0,b.useCallback)(function(){var J=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"auto",V=we.current;V&&(t?V.scrollTop=0:V.scrollTo({top:V.scrollHeight,behavior:J}),dn.current=!0,Ge(!1))},[t]),c=(0,b.useCallback)(function(){var J=we.current,V=Ue();dn.current=V,Ge(De())},[Ue,De]);b.useImperativeHandle(I,function(){return{scrollToBottom:function(J){function V(){return J.apply(this,arguments)}return V.toString=function(){return J.toString()},V}(function(){an("auto")})}},[an]);var te=(ee=Pe.noMore)!==null&&ee!==void 0?ee:!0,ve=(0,b.useCallback)(function(J){var V,O;return(V=(O=Pe.onLoadMore)===null||O===void 0?void 0:O.call(Pe))!==null&&V!==void 0?V:Promise.resolve()},[Pe.onLoadMore]);return(0,b.useEffect)(function(){var J=we.current},[Re.length,fe]),(0,b.useEffect)(function(){requestAnimationFrame(function(){var J=Ue();dn.current=J,Ge(De())})},[Ue,De,fe]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(de,{}),(0,r.jsxs)("div",{id:Pe.id,className:g()("".concat(Ve,"-wrapper"),Pe.className,(be=Pe.classNames)===null||be===void 0?void 0:be.wrapper),style:Pe.style,children:[(0,r.jsxs)("div",{className:g()("".concat(Ve,"-scroll"),"".concat(Ve),"".concat(Ve,"-order-").concat(fe),(ke=Pe.classNames)===null||ke===void 0?void 0:ke.list),ref:we,onScroll:c,children:[fe==="desc"&&(0,r.jsx)("div",{className:"".concat(Ve,"-order-desc-short")}),(0,r.jsx)(ue,{order:fe,paginationItems:Re,noMore:te,loadMore:ve,scrollRef:we,children:Pe.children})]}),(0,r.jsx)(p,{visible:Ce,onClick:function(){return an("auto")}})]})]})},Fe=b.forwardRef(xe),Xe=Fe,pn=e(67369),hn=e(10146);W.List=Xe,W.Spin=n,W.Footer=pn.ZP,W.Interrupted=hn.Z;var un=W},76289:function($e,K,e){"use strict";e.d(K,{TQ:function(){return r},vi:function(){return E}});var F=e(97857),m=e.n(F),N=e(13769),g=e.n(N),b=e(5574),M=e.n(b),y=e(67294),j=e(79785),T=e(59214),h=e(85893),f=["children"];function E(n){var a=(0,j.Z)([]),S=M()(a,3),l=S[0],s=S[1],A=S[2],i=(0,j.Z)("0"),L=M()(i,3),q=L[0],Z=L[1],W=L[2],re=(0,j.Z)(0),z=M()(re,3),C=z[0],w=z[1],G=z[2],_e=(0,j.Z)([]),x=M()(_e,3),p=x[0],pe=x[1],de=x[2],H=(0,j.Z)(!1),ae=M()(H,3),k=ae[0],oe=ae[1],ue=ae[2],Ye=(0,j.Z)(!1),xe=M()(Ye,3),Fe=xe[0],Xe=xe[1],pn=xe[2],hn=(0,j.Z)(!0),un=M()(hn,3),D=un[0],Pe=un[1],I=un[2],ee=n.children,be=g()(n,f),ke=m()({sessionList:l,setSessionList:s,getSessionList:A,currentSessionKey:q,setCurrentSessionKey:Z,getCurrentSessionKey:W,messages:p,setMessages:pe,getMessages:de,loading:k,setLoading:oe,getLoading:ue,disabled:Fe,setDisabled:Xe,getDisabled:pn,sessionListShow:D,setSessionListShow:Pe,getSessionListShow:I,currentRegenerateIndex:C,setCurrentRegenerateIndex:w,getCurrentRegenerateIndex:G},be);return(0,h.jsx)(v.Provider,{value:ke,children:ee})}var v=(0,T.createContext)(void 0);function r(n){try{var a=(0,T.useContextSelector)(v,n);return a}catch(S){return{}}}},37254:function($e,K,e){"use strict";e.d(K,{G:function(){return m}});var F=e(76289);function m(){var N=(0,F.TQ)(function(h){return{loading:h.loading,getLoading:h.getLoading,disabled:h.disabled,getDisabled:h.getDisabled,setLoading:h.setLoading,setDisabled:h.setDisabled}}),g=N.loading,b=N.disabled,M=N.setLoading,y=N.setDisabled,j=N.getLoading,T=N.getDisabled;return{loading:g,disabled:b,setLoading:M,setDisabled:y,getLoading:j,getDisabled:T}}},4421:function($e,K,e){"use strict";e.d(K,{y:function(){return y}});var F=e(19632),m=e.n(F),N=e(97857),g=e.n(N),b=e(67294),M=e(76289);function y(){var j=(0,M.TQ)(function(a){return{messages:a.messages,setMessages:a.setMessages,getMessages:a.getMessages}}),T=j.messages,h=j.setMessages,f=j.getMessages,E=b.useCallback(function(){var a,S=((a=arguments.length<=0?void 0:arguments[0])===null||a===void 0?void 0:a.id)||(arguments.length<=0?void 0:arguments[0]),l=(arguments.length<=1?void 0:arguments[1])||(arguments.length<=0?void 0:arguments[0]);h==null||h(function(s){var A=s.findIndex(function(L){return L.id===S});if(A>-1){var i=g()(g()({},s[A]),l);return[].concat(m()(s.slice(0,A)),[i],m()(s.slice(A+1)))}else return[].concat(m()(s),[l])})},[]),v=b.useCallback(function(a){h(function(S){return S.filter(function(l){return l.id!==a.id})})},[]),r=b.useCallback(function(){h([])},[]),n=b.useCallback(function(a){return f().find(function(S){return S.id===a})},[]);return{messages:T,getMessage:n,setMessages:h,getMessages:f,updateMessage:E,removeMessage:v,removeAllMessages:r}}},61316:function($e,K,e){"use strict";e.d(K,{x:function(){return T}});var F=e(97857),m=e.n(F),N=e(19632),g=e.n(N),b=e(67294),M=e(76289),y=e(88773),j=e(73935);function T(){var h=(0,M.TQ)(function(C){return{getCurrentSessionKey:C.getCurrentSessionKey,currentRegenerateIndex:C.currentRegenerateIndex,setCurrentRegenerateIndex:C.setCurrentRegenerateIndex,getCurrentRegenerateIndex:C.getCurrentRegenerateIndex,sessionListShow:C.sessionListShow,setSessionListShow:C.setSessionListShow,sessionList:C.sessionList,setSessionList:C.setSessionList,currentSessionKey:C.currentSessionKey,setCurrentSessionKey:C.setCurrentSessionKey,getSessionList:C.getSessionList}}),f=h.getCurrentSessionKey,E=h.sessionList,v=h.setSessionList,r=h.currentSessionKey,n=h.setCurrentSessionKey,a=h.sessionListShow,S=h.setSessionListShow,l=h.currentRegenerateIndex,s=h.setCurrentRegenerateIndex,A=h.getCurrentRegenerateIndex,i=h.getSessionList,L=b.useCallback(function(){var C=(0,y.Z)(),w={label:Date.now().toString(),key:C,messages:[[]]};return j.flushSync(function(){v(function(G){var _e=[].concat(g()(G),[w]);return _e}),n(C)}),C},[]),q=b.useCallback(function(C){v(function(w){var G=w.filter(function(_e){return _e.key!==C});return G})},[]),Z=b.useCallback(function(C){var w=f(),G=A();v(function(_e){return _e.map(function(x){return x.key===w?(x.messages[G]=C,m()({},x)):x})})},[]),W=b.useCallback(function(C,w){var G;return(G=i().find(function(_e){return _e.key===C}))===null||G===void 0?void 0:G.messages[w]},[]),re=b.useCallback(function(){return{sessionList:i(),currentSessionKey:f(),currentRegenerateIndex:A()}},[]),z=b.useCallback(function(C){var w=C.sessionList,G=C.currentSessionKey,_e=C.currentRegenerateIndex;v(w),n(G),s(_e)},[]);return{currentRegenerateIndex:l,setCurrentRegenerateIndex:s,getCurrentRegenerateIndex:A,sessionList:E,setSessionList:v,getSessionList:i,currentSessionKey:r,setCurrentSessionKey:n,sessionListShow:a,setSessionListShow:S,createSession:L,deleteSession:q,updateSessionMessages:Z,getMessagesBySession:W,getSession:re,updateSession:z}}},29041:function($e,K,e){"use strict";e.d(K,{ZP:function(){return V}});var F=e(97857),m=e.n(F),N=e(13769),g=e.n(N),b=e(5574),M=e.n(b),y=e(67294),j=e(93967),T=e.n(j),h=e(56044),f=e(85265),E=e(17909),v=e(76289),r=e(68400),n=e.n(r),a=e(9053),S,l=(0,a.vJ)(S||(S=n()([`

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
`])),function(O){return O.theme.prefixCls},function(O){return O.theme.fontFamily},function(O){return O.theme.colorBgBase},function(O){return O.theme.colorBgBase},function(O){return O.theme.colorBgBase},function(O){return O.theme.colorFillTertiary}),s=e(85893);function A(O){var ce=(0,v.TQ)(function(U){return{sessionListShow:U.sessionListShow,setSessionListShow:U.setSessionListShow}}),ne=ce.sessionListShow,Y=ce.setSessionListShow,o=(0,h.wv)(),Q=o.getPrefixCls,X=Q("chat-anywhere-layout"),ie=L();return(0,y.useEffect)(function(){Y(!ie)},[ie]),O.left?ie?(0,s.jsx)(f.Z,{width:"80vw",styles:{body:{padding:0}},open:ne,onClose:function(){Y(!1)},title:null,closable:!1,placement:"left",children:(0,s.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:O.left})}):(0,s.jsx)("div",{className:T()("".concat(X,"-left"),ne?"":"".concat(X,"-left-hide")),children:O.left}):null}function i(O){var ce=(0,h.wv)(),ne=ce.getPrefixCls,Y=ne("chat-anywhere-layout"),o=(0,v.TQ)(function(Q){return Q.uiConfig});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{}),(0,s.jsx)("div",{className:Y,children:(0,s.jsxs)("div",{className:"".concat(Y,"-main"),children:[(0,s.jsx)(A,m()({},O)),(0,s.jsxs)("div",{className:"".concat(Y,"-right"),style:{background:o==null?void 0:o.background},children:[O.top,O.right]})]})})]})}var L=function(){var ce=(0,E.Z)(),ne=(0,v.TQ)(function(Y){return Y.uiConfig});return!ce.md||(ne==null?void 0:ne.narrowScreen)},q=e(9368),Z=e(64057),W=e(21403),re=e(61316),z=e(4421),C,w=(0,a.vJ)(C||(C=n()([`
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

`])),function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls}),G=e(50287),_e=e(67392),x=e(13660),p=e(12624);function pe(){var O=(0,h.wv)(),ce=O.getPrefixCls,ne=ce("chat-anywhere-session-list"),Y=(0,v.TQ)(function(o){return o.sessionListShow});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w,{}),(0,s.jsxs)("div",{className:T()("".concat(ne),Y?"":"".concat(ne,"-hide")),children:[(0,s.jsx)(H,{}),(0,s.jsx)(de,{})]})]})}function de(){var O=(0,h.wv)(),ce=O.getPrefixCls,ne=ce("chat-anywhere-session-list"),Y=(0,re.x)(),o=Y.currentSessionKey,Q=Y.setCurrentSessionKey,X=Y.currentRegenerateIndex,ie=Y.sessionList,U=Y.getMessagesBySession,Ae=Y.setSessionListShow,le=(0,z.y)(),Be=le.setMessages,Qe=(0,v.TQ)(function(sn){return sn.getLoading}),Me=(0,v.TQ)(function(sn){return sn.onSessionKeyChange}),on=L();return(0,y.useEffect)(function(){var sn=U(o,X);Be((sn||[]).map(function(Je){return m()(m()({},Je),{},{history:!0})}))},[o,X]),(0,s.jsx)("div",{className:"".concat(ne,"-session"),children:(0,s.jsx)(q.Z,{menu:[{key:"delete",icon:(0,s.jsx)(G.Z,{}),danger:!0,onClick:function(Je){}}],activeKey:o,items:ie,onActiveChange:function(Je){Qe()||(on&&Ae(!1),requestIdleCallback(function(){Q(Je),Me(Je)}))}})})}function H(){var O=(0,h.wv)(),ce=O.getPrefixCls,ne=ce("chat-anywhere-session-list"),Y=(0,re.x)(),o=Y.currentSessionKey,Q=Y.setCurrentSessionKey,X=Y.deleteSession,ie=Y.createSession,U=Y.sessionList,Ae=Y.sessionListShow,le=Y.setSessionListShow,Be=(0,v.TQ)(function(Me){return Me.uiConfig}),Qe=L();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"".concat(ne,"-logo"),children:[Be==null?void 0:Be.logo,(0,s.jsx)(Z.Z,{bordered:!1,onClick:function(){return le(!Ae)},icon:Ae?(0,s.jsx)(_e.Z,{}):(0,s.jsx)(x.Z,{})})]}),(0,s.jsx)("div",{className:"".concat(ne,"-adder"),children:(0,s.jsx)(W.Z,{type:"primary",block:!0,icon:(0,s.jsx)(p.Z,{}),onClick:function(){Qe&&le(!1),ie()},children:"New Session"})})]})}var ae=e(9783),k=e.n(ae),oe=e(15009),ue=e.n(oe),Ye=e(99289),xe=e.n(Ye),Fe=e(19632),Xe=e.n(Fe),pn=e(46624),hn=e(52677),un=e.n(hn),D=e(41154),Pe=e(66672),I=e(50993),ee=e(37254),be,ke=(0,a.vJ)(be||(be=n()([`
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
`])),function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls}),He=e(86578),Re=e(7654),ze=e(92053),fe=e(86250),We=["trigger"];function Se(O){var ce=O.uploadPropsList,ne=(0,h.wv)(),Y=ne.getPrefixCls,o=Y("chat-anywhere-sender"),Q=(0,y.useState)(!1),X=M()(Q,2),ie=X[0],U=X[1],Ae=(0,y.useRef)([]),le=(0,y.useMemo)(function(){return ce.map(function(Qe,Me){return(0,s.jsx)("div",{onClick:function(){var sn;(sn=Ae.current[Me])===null||sn===void 0||sn.click(),U(!1)},children:Qe.trigger},Me)})},[ce]),Be=(0,y.useMemo)(function(){return ce.map(function(Qe,Me){var on=Qe.trigger,sn=g()(Qe,We);return(0,s.jsx)(D.Z,m()(m()({},sn),{},{children:(0,s.jsx)("div",{ref:function(fn){return Ae.current[Me]=fn}})}),Me)})},[ce]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Re.Z,{placement:"bottomLeft",open:ie,onOpenChange:U,content:(0,s.jsx)(fe.Z,{vertical:!0,children:le}),trigger:"click",styles:{body:{padding:4}},children:(0,s.jsx)(Z.Z,{icon:(0,s.jsx)(ze.Z,{}),bordered:!1})}),(0,s.jsx)("div",{className:"".concat(o,"-upload-hidden-nodes"),children:Be})]})}var Ce=(0,y.forwardRef)(function(O,ce){var ne,Y=y.useState(""),o=M()(Y,2),Q=o[0],X=o[1],ie=(0,ee.G)(),U=(0,v.TQ)(function(nn){return nn.onUpload.map(function(rn){return m()(m()({},rn),{},{disabled:rn.disabled||ie.disabled})})}),Ae=new Array((U==null?void 0:U.length)||0).fill([]),le=(0,y.useState)(!1),Be=M()(le,2),Qe=Be[0],Me=Be[1],on=y.useState(Ae),sn=M()(on,2),Je=sn[0],fn=sn[1],Cn=(0,y.useRef)(Ae);(0,y.useEffect)(function(){fn(Ae)},[Ae.length]),(0,y.useEffect)(function(){Cn.current=Je},[Je]);var cn=(0,v.TQ)(function(nn){return nn.uiConfig}),qe=(0,h.wv)(),Sn=qe.getPrefixCls,Rn=Sn("chat-anywhere-sender"),jn=(0,v.TQ)(function(nn){return nn.onStop}),en=(0,v.TQ)(function(nn){var rn={beforeUI:void 0,afterUI:void 0,morePrefixActions:void 0,maxLength:void 0,suggestions:void 0,beforeSubmit:function(){return Promise.resolve(!0)},header:[],enableFocusExpand:!1,variant:"default",hide:!1,onChange:function(){}};return m()(m()({},rn),nn.onInput)});if((0,y.useEffect)(function(){en.onChange({query:Q,fileList:Je})},[Q,Je]),y.useImperativeHandle(ce,function(){return{setInputContent:function(rn,Mn){X(rn),fn(Mn||[[]])},getAttachedFiles:function(){return Cn.current}}},[]),(0,y.useEffect)(function(){ie.setDisabled(en.disabled)},[en.disabled]),en.hide)return null;var xn=function(){var nn=xe()(ue()().mark(function rn(Mn,An){return ue()().wrap(function(Bn){for(;;)switch(Bn.prev=Bn.next){case 0:fn(function(Kn){return Kn.map(function(Yn,Hn){return Hn===Mn?An:Yn})});case 1:case"end":return Bn.stop()}},rn)}));return function(Mn,An){return nn.apply(this,arguments)}}(),In=(0,y.useMemo)(function(){if(en.variant==="aigc"||!(U!=null&&U.length))return[];var nn=U.map(function(rn,Mn){var An;return rn.trigger?An=rn.trigger:(rn.title||rn.description)&&U.length>1?An=(0,s.jsxs)(W.Z,{type:"text",icon:rn.icon,children:[rn.title&&(0,s.jsx)("span",{children:rn.title}),rn.description&&(0,s.jsx)("span",{style:{fontSize:"0.8em",opacity:.8},children:rn.description})]}):An=(0,s.jsx)(Z.Z,{icon:rn.icon,bordered:!1}),m()(m()({},rn),{},{fileList:Je[Mn],key:Mn,onChange:function(Bn){rn.beforeUpload&&Bn.file.status&&xn(Mn,Bn.fileList),rn.beforeUpload||xn(Mn,Bn.fileList)},showUploadList:!1,trigger:An})});return nn.length===1?(0,s.jsx)(D.Z,m()(m()({},nn[0]),{},{children:nn[0].trigger})):(0,s.jsx)(Se,{uploadPropsList:nn})},[en.variant,U,Je]),$n=(0,s.jsx)(He.Z.SenderHeader,{onUpload:U,attachedFiles:Je,onFileChange:xn}),_n=(0,s.jsx)(Pe.Z.Header,{closable:!1,open:Je==null?void 0:Je.some(function(nn){return nn.length}),children:Je.map(function(nn,rn){return nn.length?(0,s.jsx)(I.Z,{items:nn,replaceable:!0,onChange:function(An){return xn(rn,An.fileList)}},rn):null})}),On=en.variant==="aigc"?$n:_n,gn=Je.map(function(nn){return nn.filter(function(rn){return rn.status==="done"})}),wn=Je.some(function(nn){return nn.some(function(rn){return rn.status==="uploading"})}),Un=gn.some(function(nn){return nn.length>0}),kn=function(rn){if(!(U!=null&&U.length))return;var Mn=rn.type||"",An=rn.name||"",nt=function(qn){return qn?qn.split(",").some(function(tt){var Tn=tt.trim();if(!Tn)return!1;if(Tn.startsWith("."))return An.toLowerCase().endsWith(Tn.toLowerCase());if(Tn.includes("*")){if(Tn==="*/*")return!0;var Wn=Tn.split("/"),et=M()(Wn,1),Qn=et[0],Dn=Mn.split("/"),Fn=M()(Dn,1),Xn=Fn[0];return Qn===Xn}return Mn===Tn}):!0},Bn=U.findIndex(function(Nn){return nt(Nn.accept)});if(Bn===-1)return;var Kn=U[Bn],Yn=Je[Bn]||[];if(Kn.maxCount&&Yn.length>=Kn.maxCount||!Kn.multiple&&Yn.length>0)return;if(Kn.beforeUpload){var Hn=Kn.beforeUpload(rn,[rn]);if(Hn===!1||Hn===D.Z.LIST_IGNORE)return;if(Hn instanceof Promise){Hn.then(function(Nn){if(!(Nn===!1||Nn===D.Z.LIST_IGNORE)){var qn=Nn&&un()(Nn)==="object"?Nn:rn;ot(qn)}}).catch(function(Nn){console.error("beforeUpload promise rejected:",Nn)});return}if(Hn&&un()(Hn)==="object"){ot(Hn);return}}ot(rn);function ot(Nn){var qn=function(){var Dn=An.match(/\.([^.]+)$/);if(Dn)return Dn[1].toLowerCase();var Fn=Mn.match(/\/([^/+]+)/);return Fn?Fn[1].toLowerCase():"bin"},tt=Date.now(),Tn={uid:"paste_".concat(tt,"_").concat(Math.random().toString(36).slice(2,11)),name:An||"pasted-".concat(tt,".").concat(qn()),size:Nn.size,type:Mn,status:"uploading",percent:0,originFileObj:Nn},Wn=function(Dn){fn(function(Fn){var Xn=Xe()(Fn);return Xn[Bn]=(Xn[Bn]||[]).map(function(st){return st.uid===Tn.uid?m()(m()({},st),Dn):st}),Xn})};if(fn(function(Qn){var Dn=Xe()(Qn),Fn=Dn[Bn]||[];if(!Kn.multiple)Dn[Bn]=[Tn];else{if(Kn.maxCount&&Fn.length>=Kn.maxCount)return Qn;Dn[Bn]=[].concat(Xe()(Fn),[Tn])}return Dn}),Mn&&Mn.startsWith("image/")){var et=new FileReader;et.onload=function(Qn){var Dn,Fn=(Dn=Qn.target)===null||Dn===void 0?void 0:Dn.result;typeof Fn=="string"&&Wn({thumbUrl:Fn,url:Fn})},et.readAsDataURL(Nn)}Kn.customRequest({file:Nn,onSuccess:function(Dn){Wn({status:"done",response:Dn,percent:100})},onError:function(Dn){Wn({status:"error",error:Dn})},onProgress:function(Dn){Wn({percent:Dn.percent})}},{defaultRequest:function(){}})}},Jn=(0,y.useMemo)(function(){var nn;return(nn=U==null?void 0:U.some(function(rn,Mn){if(rn.required){var An=Je[Mn]||[];return An.length===0}return!1}))!==null&&nn!==void 0?nn:!1},[U,Je]),Zn=Jn;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ke,{}),(0,s.jsxs)("div",{className:T()("".concat(Rn,"-wrapper"),k()(k()({},"".concat(Rn,"-wrapper-focus"),Qe&&en.enableFocusExpand),"".concat(Rn,"-wrapper-blur"),!Qe&&en.enableFocusExpand)),children:[cn.quickInput&&(0,s.jsx)("div",{className:T()("".concat(Rn,"-wrapper-header")),children:cn.quickInput}),en.beforeUI,(0,s.jsx)(Pe.Z,{suggestions:en.suggestions,placeholder:en.placeholder,enableFocusExpand:en.enableFocusExpand,value:Q,onChange:X,maxLength:en.maxLength,disabled:wn||ie.disabled,sendDisabled:Zn,allowEmptySubmit:((ne=en.allowEmptySubmit)!==null&&ne!==void 0?ne:!0)&&Un,header:On,footer:en.footer,prefix:(0,s.jsxs)(s.Fragment,{children:[In,en==null?void 0:en.morePrefixActions]}),onSubmit:xe()(ue()().mark(function nn(){var rn;return ue()().wrap(function(An){for(;;)switch(An.prev=An.next){case 0:return An.next=2,(en.beforeSubmit||function(){return Promise.resolve(!0)})();case 2:if(rn=An.sent,rn){An.next=5;break}return An.abrupt("return");case 5:en.onSubmit({query:Q,fileList:gn}),X(""),fn(Ae);case 8:case"end":return An.stop()}},nn)})),onCancel:function(){jn==null||jn(),ie.setLoading(!1)},onFocus:function(){return Me(!0)},onBlur:function(){return Me(!1)},onPasteFile:kn,loading:ie.loading}),en.afterUI]})]})}),Ge=e(69637),we=e(10325),dn,bn=(0,a.vJ)(dn||(dn=n()([`
.`,`-chat-anywhere-chat {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  opacity: 1;

  .`,`-bubble-list-wrapper {
    position: relative;
  }

  .`,`-bubble-list {
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


`])),function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls}),Pn=e(73935),Ve=10;function t(O,ce){var ne=(0,y.useMemo)(function(){return Xe()(O||[]).reverse()},[O]),Y=(0,y.useState)(Ve),o=M()(Y,2),Q=o[0],X=o[1];(0,y.useEffect)(function(){X(Ve)},[ce]);var ie=(0,y.useMemo)(function(){return ne.filter(function(Me){return Me.history})},[ne]),U=(0,y.useMemo)(function(){return ne.filter(function(Me){return!Me.history})},[ne]),Ae=ie.slice(0,Q),le=Q>=ie.length,Be=(0,y.useMemo)(function(){return[].concat(Xe()(U),Xe()(Ae))},[U,Ae]),Qe=(0,y.useCallback)(function(){return new Promise(function(Me){setTimeout(function(){(0,Pn.flushSync)(function(){return X(function(on){return on+Ve})}),Me()},300)})},[]);return{visibleMessages:Be,noMore:le,loadMore:Qe}}var Ue=(0,y.forwardRef)(function(O,ce){var ne=(0,v.TQ)(function(gn){return gn.messages}),Y=(0,v.TQ)(function(gn){return gn.setMessages}),o=(0,v.TQ)(function(gn){return gn.onLoadMore}),Q=(0,h.wv)(),X=Q.getPrefixCls,ie=X("chat-anywhere"),U=(0,v.TQ)(function(gn){return gn.uiConfig}),Ae=(0,v.TQ)(function(gn){return gn.currentSessionKey}),le=(0,y.useState)(!1),Be=M()(le,2),Qe=Be[0],Me=Be[1],on=(0,y.useState)(!1),sn=M()(on,2),Je=sn[0],fn=sn[1],Cn=(0,y.useRef)(!1),cn=typeof o=="function",qe=t(cn?[]:ne!=null?ne:[],Ae),Sn=qe.visibleMessages,Rn=qe.noMore,jn=qe.loadMore;(0,y.useEffect)(function(){fn(!1),Cn.current=!1},[Ae]),(0,Ge.Z)(function(){Me(!0)},300);var en=(0,y.useCallback)(xe()(ue()().mark(function gn(){var wn,Un,kn;return ue()().wrap(function(Zn){for(;;)switch(Zn.prev=Zn.next){case 0:if(!(!o||Cn.current)){Zn.next=2;break}return Zn.abrupt("return");case 2:return Cn.current=!0,Zn.prev=3,Zn.next=6,o();case 6:kn=Zn.sent,kn!=null&&(wn=kn.messages)!==null&&wn!==void 0&&wn.length&&Y(function(nn){return[].concat(Xe()(kn.messages),Xe()(nn))}),fn((Un=kn==null?void 0:kn.noMore)!==null&&Un!==void 0?Un:!1);case 9:return Zn.prev=9,Cn.current=!1,Zn.finish(9);case 12:case"end":return Zn.stop()}},gn,null,[[3,,9,12]])})),[o,Y]),xn=cn?Xe()(ne||[]).reverse():Sn,In=cn?Je:Rn,$n=cn?en:jn,_n=T()("".concat(ie,"-chat"),k()({},"".concat(ie,"-chat-hide"),!Qe)),On=(ne||[]).length===0;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(bn,{}),(0,s.jsxs)("div",{className:_n,children:[(0,s.jsx)(pn.Z.List,{onLoadMore:In?void 0:$n,noMore:In,order:"desc",style:{height:0,flex:On?0:1},ref:ce.chatRef,items:xn}),On?(0,s.jsx)("div",{className:"".concat(_n,"-welcome"),children:U==null?void 0:U.welcome}):null,(0,s.jsx)("div",{className:"".concat(_n,"-sender"),style:U!=null&&U.disclaimer?{marginBottom:16}:{},children:(0,s.jsx)(Ce,{ref:ce.inputRef})}),(U==null?void 0:U.disclaimer)&&(0,s.jsx)(we.Z,{style:{position:"absolute",bottom:0,width:"100%"},desc:U==null?void 0:U.disclaimer})]})]})}),De,an=(0,a.vJ)(De||(De=n()([`
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

  &.`,`-bubble-list-order-desc {
    &::before {
      content: ' ';
      height: 16px;
      flex: 0 0 0;
    }

    &::after {
      height: 24px;
      flex: 0 0 24px;
    }
  }
}

`])),function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls},function(O){return O.theme.prefixCls});function c(){var O=(0,h.wv)(),ce=O.getPrefixCls,ne=ce("chat-anywhere-header"),Y=(0,v.TQ)(function(U){return U.uiConfig}),o=(0,re.x)(),Q=o.sessionListShow,X=o.setSessionListShow,ie=L();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(an,{}),(0,s.jsxs)("div",{className:ne,children:[ie&&(0,s.jsx)(Z.Z,{style:{marginLeft:12},bordered:!1,onClick:function(){return X(!Q)},icon:Q?(0,s.jsx)(_e.Z,{}):(0,s.jsx)(x.Z,{})}),Y.header]})]})}var te=e(83962),ve=y.forwardRef(function(ce,ne){var Y=(0,z.y)(),o=(0,ee.G)(),Q=(0,re.x)();return y.useImperativeHandle(ne,function(){return m()(m()(m()({},Y),o),Q)}),null}),J=["cardConfig"],V=(0,y.forwardRef)(function(O,ce){var ne,Y=(0,y.useState)(0),o=M()(Y,2),Q=o[0],X=o[1],ie=O.cardConfig,U=g()(O,J),Ae=(0,y.useRef)(null),le=(0,y.useRef)(null),Be=(0,y.useRef)(null);return y.useImperativeHandle(ce,function(){return m()(m()(m()(m()({},Ae.current),le.current),Be.current),{},{reload:function(){X(function(Me){return Me+1})}})}),(0,y.createElement)(v.vi,m()(m()({},U),{},{key:Q}),(0,s.jsxs)(te.xy,{cardConfig:ie,children:[(0,s.jsx)(i,{top:(ne=U.uiConfig)!==null&&ne!==void 0&&ne.header?(0,s.jsx)(c,{}):null,left:U.onSessionKeyChange?(0,s.jsx)(pe,{}):null,right:(0,s.jsx)(Ue,{ref:{chatRef:Ae,inputRef:le}})}),(0,s.jsx)(ve,{ref:Be})]}))})},9368:function($e,K,e){"use strict";e.d(K,{Z:function(){return Pe}});var F=e(97857),m=e.n(F),N=e(19632),g=e.n(N),b=e(9783),M=e.n(b),y=e(5574),j=e.n(y),T=e(13769),h=e.n(T),f=e(93967),E=e.n(f),v=e(67294),r=e(21317),n=e(85893),a=v.createContext(null),S=function(ee){var be=ee.children,ke=v.useContext(a),He=ke.prefixCls;return(0,n.jsx)("div",{className:E()("".concat(He,"-group-title")),children:be&&(0,n.jsx)(r.default.Text,{children:be})})},l=S,s=e(30339),A=e(54604),i=e(45617),L=e(7654),q=e(64057),Z=e(21403),W=e(42532),re=["prefixCls","info","className","direction","onClick","active","selectable","selected","onSelect","menu"],z=["key"],C={};function w(I){var ee=(0,v.useState)(C[I]),be=j()(ee,2),ke=be[0],He=be[1];return[ke,function(Re){for(var ze in C)C[ze]=!1;C[I]=Re,He(Re)}]}var G=v.memo(function(I){var ee,be=w(I.info.key),ke=j()(be,2),He=ke[0],Re=ke[1],ze=(0,v.useState)(!1),fe=j()(ze,2),We=fe[0],Se=fe[1],Ce=I.prefixCls,Ge=I.info,we=I.className,dn=I.direction,bn=I.onClick,Pn=I.active,Ve=I.selectable,t=I.selected,Ue=I.onSelect,De=I.menu,an=h()(I,re),c=(0,s.Z)(an,{aria:!0,data:!0,attr:!0}),te=(0,v.useRef)(null),ve=(0,W.Z)(te),J=j()(ve,1),V=J[0],O=Ge.disabled,ce=E()(we,"".concat(Ce,"-item"),M()({},"".concat(Ce,"-item-active"),Pn&&!O),M()({},"".concat(Ce,"-item-disabled"),O),M()({},"".concat(Ce,"-item-timeline"),Ge.timeline||Ve)),ne=function(){if(Ve)return Ue==null?void 0:Ue(Ge.key,!t);if(!O&&bn)return bn(Ge)};return(0,n.jsxs)("li",m()(m()({ref:te},c),{},{className:ce,onClick:ne,children:[V&&Ge.icon&&(0,n.jsx)("div",{className:"".concat(Ce,"-icon"),children:Ge.icon}),V&&(0,n.jsxs)("div",{className:"".concat(Ce,"-content-wrapper"),children:[(0,n.jsxs)("div",{className:"".concat(Ce,"-content"),children:[(Ge.timeline||Ve)&&(0,n.jsx)("div",{className:"".concat(Ce,"-timeline"),children:Ve?(0,n.jsx)("div",{className:"".concat(Ce,"-timeline-checkbox"),onClick:function(o){return o.stopPropagation()},children:(0,n.jsx)(i.Z,{checked:t,onChange:function(){return Ue==null?void 0:Ue(Ge.key,!t)}})}):(0,n.jsx)("div",{className:"".concat(Ce,"-timeline-dot")})}),(0,n.jsx)(_e,{editable:He,setEditable:Re,prefixCls:Ce,info:Ge,onEdit:De==null||(ee=De.find(function(Y){return Y.key==="edit"}))===null||ee===void 0?void 0:ee.onEdit}),De&&!O&&!Ve&&(0,n.jsx)(L.Z,{styles:{body:{padding:4}},trigger:["click"],open:We,onOpenChange:Se,content:(0,n.jsx)("div",{className:"".concat(Ce,"-menu-popover"),children:De.map(function(Y){var o=Y.key,Q=h()(Y,z),X=m()(m()({},Q),{},{onClick:function(U){if(o==="edit")Re(!0);else{var Ae;(Ae=Q.onClick)===null||Ae===void 0||Ae.call(Q,Ge)}Se(!1)}});return(0,n.jsx)(p,m()(m()({},X),{},{info:Ge}),o)})}),placement:"bottom",children:(0,n.jsx)(q.Z,{bordered:!1,icon:(0,n.jsx)(A.Z,{}),disabled:O,className:"".concat(Ce,"-menu-icon"),onClick:function(o){return o.stopPropagation()}})})]}),Ge.desc&&(0,n.jsx)("div",{className:"".concat(Ce,"-desc"),style:Ge.timeline||Ve?{marginLeft:16}:{},children:Ge.desc})]})]}))});function _e(I){var ee=I.editable,be=I.prefixCls,ke=I.info,He=I.setEditable,Re=I.onEdit,ze=(0,v.useState)(ke.label),fe=j()(ze,2),We=fe[0],Se=fe[1],Ce=(0,v.useState)(ke.label),Ge=j()(Ce,2),we=Ge[0],dn=Ge[1];return ke.label!==we&&(dn(ke.label),Se(ke.label)),ee?(0,n.jsx)(x,{prefixCls:be,value:We,onBlur:function(Pn){var Ve;if(Pn===We)return He(!1);(Ve=Re(Pn,ke))===null||Ve===void 0||Ve.then(function(){Se(Pn)}).catch(function(){Se(We)}).finally(function(){He(!1)})},setEditable:He}):(0,n.jsx)("div",{className:"".concat(be,"-label"),children:We})}function x(I){var ee=I.prefixCls,be=I.value,ke=I.onBlur,He=I.setEditable,Re=(0,v.useState)(be),ze=j()(Re,2),fe=ze[0],We=ze[1],Se=(0,v.useRef)();return(0,v.useEffect)(function(){Se.current.focus()},[]),(0,v.useEffect)(function(){We(be)},[be]),(0,n.jsx)("input",{ref:Se,className:"".concat(ee,"-label-edit"),value:fe,onClick:function(Ge){return Ge.stopPropagation()},onChange:function(Ge){return We(Ge.target.value)},onBlur:function(){return ke(fe)}})}function p(I){var ee=I.label,be=I.icon,ke=I.danger,He=I.info,Re=I.disabled,ze=function(We){var Se;Re||(We.stopPropagation(),(Se=I.onClick)===null||Se===void 0||Se.call(I,He))};return be&&ee?(0,n.jsx)(Z.Z,{disabled:Re,icon:be,danger:ke,type:"text",onClick:ze,children:ee}):be?(0,n.jsx)(q.Z,{disabled:Re,icon:be,danger:ke,bordered:!1,onClick:ze}):ee?(0,n.jsx)(Z.Z,{disabled:Re,danger:ke,type:"text",onClick:ze,children:ee}):null}var pe=G,de=e(60869),H=e(56044),ae=e(52677),k=e.n(ae),oe="__ungrouped",ue=function(ee){var be=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],ke=v.useMemo(function(){if(!ee)return[!1,void 0,void 0];var We={sort:void 0,title:void 0};return k()(ee)==="object"&&(We=m()(m()({},We),ee)),[!0,We.sort,We.title]},[ee]),He=j()(ke,3),Re=He[0],ze=He[1],fe=He[2];return v.useMemo(function(){if(!Re){var We=[{name:oe,data:be,title:void 0}];return[We,Re]}var Se=be.reduce(function(we,dn){var bn=dn.group||oe;return we[bn]||(we[bn]=[]),we[bn].push(dn),we},{}),Ce=ze?Object.keys(Se).sort(ze):Object.keys(Se),Ge=Ce.map(function(we){return{name:we===oe?void 0:we,title:fe,data:Se[we]}});return[Ge,Re]},[be,ee])},Ye=ue,xe=e(68400),Fe=e.n(xe),Xe=e(9053),pn,hn=(0,Xe.vJ)(pn||(pn=Fe()([`
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
}`])),function(I){return I.theme.prefixCls},function(I){return I.theme.paddingXXS},function(I){return I.theme.prefixCls},function(I){return I.theme.paddingXL},function(I){return I.theme.prefixCls},function(I){return I.theme.colorTextSecondary},function(I){return I.theme.colorBgBase},function(I){return I.theme.colorBorder},function(I){return I.theme.colorTextSecondary},function(I){return I.theme.borderRadiusLG},function(I){return I.theme.colorBorder},function(I){return I.theme.colorFillTertiary},function(I){return I.theme.colorFillTertiary},function(I){return I.theme.prefixCls},function(I){return I.theme.prefixCls},function(I){return I.theme.colorText},function(I){return I.theme.prefixCls},function(I){return I.theme.colorTextDisabled},function(I){return I.theme.prefixCls},function(I){return I.theme.prefixCls},function(I){return I.theme.colorFillTertiary},function(I){return I.theme.colorText},function(I){return I.theme.colorText},function(I){return I.theme.fontFamily},function(I){return I.theme.fontSizeXL},function(I){return I.theme.controlHeightLG},function(I){return I.theme.controlHeightLG},function(I){return I.theme.paddingXS}),un=["prefixCls","rootClassName","items","activeKey","defaultActiveKey","onActiveChange","selectable","selectedKeys","onSelectChange","menu","styles","classNames","groupable","className","style"],D=function(ee){var be=ee.prefixCls,ke=ee.rootClassName,He=ee.items,Re=ee.activeKey,ze=ee.defaultActiveKey,fe=ee.onActiveChange,We=ee.selectable,Se=ee.selectedKeys,Ce=ee.onSelectChange,Ge=ee.menu,we=ee.styles,dn=we===void 0?{}:we,bn=ee.classNames,Pn=bn===void 0?{}:bn,Ve=ee.groupable,t=ee.className,Ue=ee.style,De=h()(ee,un),an=(0,s.Z)(De,{attr:!0,aria:!0,data:!0}),c=(0,de.Z)(ze,{value:Re}),te=j()(c,2),ve=te[0],J=te[1],V=Ye(Ve,He),O=j()(V,2),ce=O[0],ne=O[1],Y=(0,H.wv)(),o=Y.direction,Q=Y.getPrefixCls,X=Q("conversations"),ie=E()(X,t,ke,M()({},"".concat(X,"-rtl"),o==="rtl")),U=v.useRef(fe);U.current=fe;var Ae=v.useCallback(function(Me){var on;J(Me.key),(on=U.current)===null||on===void 0||on.call(U,Me.key)},[J]),le=v.useRef(Se);le.current=Se;var Be=v.useRef(Ce);Be.current=Ce;var Qe=v.useCallback(function(Me,on){if(Be.current){var sn=le.current||[],Je=on?[].concat(g()(sn),[Me]):sn.filter(function(fn){return fn!==Me});Be.current(Je)}},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(hn,{}),(0,n.jsx)("ul",m()(m()({},an),{},{style:Ue,className:ie,children:ce.map(function(Me,on){var sn=Me.data.map(function(fn,Cn){var cn=We!=null?We:fn.selectable,qe=cn?Se?Se.includes(fn.key):fn.selected:!1,Sn=Ce?Qe:fn.onSelect;return(0,n.jsx)(pe,{info:fn,prefixCls:X,direction:o,className:E()(Pn.item),style:dn.item,menu:Ge,active:ve===fn.key,selectable:cn,selected:qe,onSelect:Sn,onClick:Ae},fn.key||"key-".concat(Cn))});if(ne){var Je;return(0,n.jsxs)("li",{children:[(0,n.jsx)(a.Provider,{value:{prefixCls:X},children:((Je=Me.title)===null||Je===void 0?void 0:Je.call(Me,Me.name,{components:{GroupTitle:l}}))||(0,n.jsx)(l,{children:Me.name},Me.name)}),(0,n.jsx)("ul",{className:"".concat(X,"-list"),children:sn})]},Me.name||"key-".concat(on))}return sn})}))]})},Pe=D},14617:function($e,K,e){"use strict";e.d(K,{Z:function(){return T}});var F=e(68400),m=e.n(F),N=e(23345),g=e(11526),b=e(9053),M=e(56044),y=e(85893),j;function T(f){var E=(0,M.wv)().getPrefixCls("bubble-audio");return(0,y.jsxs)(N.Z,{direction:"vertical",children:[(0,y.jsx)(h,{}),f.data.map(function(v,r){return(0,y.jsx)("div",{className:E,children:(0,y.jsx)(g.Z,{src:v.src})},r)})]})}var h=(0,b.vJ)(j||(j=m()([`
.`,`-bubble-audio {
  background-color: `,`;
  border: 1px solid `,`;
  padding-right: 4px;
  border-radius: `,`px;
}
`])),function(f){return f.theme.prefixCls},function(f){return f.theme.colorBgBase},function(f){return f.theme.colorBorderSecondary},function(f){return f.theme.borderRadiusLG})},18946:function($e,K,e){"use strict";e.d(K,{Z:function(){return E}});var F=e(68400),m=e.n(F),N=e(23345),g=e(67294),b=e(50993),M=e(9053),y=e(56044),j=e(6411),T=e(85893),h,f=(0,M.vJ)(h||(h=m()([`
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
`])),function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls},function(v){return v.theme.borderRadius},function(v){return v.theme.colorWhite},function(v){return v.theme.motionDurationSlow},function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls});function E(v){var r=(0,y.wv)(),n=r.getPrefixCls,a=n("bubble-files");return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(f,{}),(0,T.jsx)(N.Z,{className:a,children:v.data.map(function(S,l){var s={name:S.name||S.filename,size:S.size||S.bytes,url:S.url};return(0,T.jsxs)("div",{className:"".concat(a,"-file"),children:[(0,T.jsx)(b.Z.FileCard,{item:s}),s.url&&(0,T.jsx)("div",{className:"".concat(a,"-download"),onClick:function(){window.open(s.url,"_blank")},children:(0,T.jsx)(j.Z,{})})]},l)})})]})}},18755:function($e,K,e){"use strict";e.d(K,{Z:function(){return E}});var F=e(68400),m=e.n(F),N=e(9053),g=e(56044),b=e(16494),M=e(55839),y=e(23345),j=e(85893),T,h=(0,N.vJ)(T||(T=m()([`
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
`])),function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls},function(v){return v.theme.prefixCls});function f(v){var r=(0,g.wv)(),n=r.getPrefixCls,a=n("bubble-image");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h,{}),(0,j.jsx)("div",{className:"".concat(a),children:(0,j.jsx)(b.Z,{fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",src:v.url,width:56,height:56,preview:{transitionName:""}})})]})}function E(v){return(0,j.jsx)(M.ZP,{locale:{Image:{preview:""}},children:(0,j.jsx)(y.Z,{children:v.data.map(function(r,n){return(0,j.jsx)(f,{url:r.url},n)})})})}},60747:function($e,K,e){"use strict";e.d(K,{Z:function(){return T}});var F=e(68400),m=e.n(F),N=e(23345),g=e(51794),b=e(9053),M=e(56044),y=e(85893),j;function T(f){var E=(0,M.wv)().getPrefixCls("bubble-video");return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h,{}),(0,y.jsx)(N.Z,{children:f.data.map(function(v,r){return(0,y.jsx)("div",{className:E,children:(0,y.jsx)(g.Z,{src:v.src,poster:v.poster,controls:!0})},r)})})]})}var h=(0,b.vJ)(j||(j=m()([`
.`,`-bubble-video {
  width: 256px;
  height: 144px;
  border-radius: 8px;
  border: 1px solid `,`;
  overflow: hidden;
}
`])),function(f){return f.theme.prefixCls},function(f){return f.theme.colorBorderSecondary})},73420:function($e,K,e){"use strict";e.r(K),e.d(K,{Audios:function(){return a.Z},DeepThink:function(){return g},DeepThinking:function(){return g},Files:function(){return b.Z},Footer:function(){return E},FooterActions:function(){return f.p4},FooterCount:function(){return f.hw},Images:function(){return M.Z},Interrupted:function(){return r},Text:function(){return h},Videos:function(){return n.Z}});var F=e(67294),m=e(14082),N=e(85893);function g(S){return(0,N.jsx)(m.Z,{defaultOpen:S.data.defaultOpen!==void 0?S.data.defaultOpen:!0,title:S.data.title,loading:S.data.loading,content:S.data.content,className:S.data.className,open:S.data.open,autoCloseOnFinish:S.data.autoCloseOnFinish,maxHeight:S.data.maxHeight})}var b=e(18946),M=e(18755),y=e(97857),j=e.n(y),T=e(66109);function h(S){var l=S.data.msgStatus==="generating";return(0,N.jsx)(T.Z,j()(j()({cursor:l},S.data),{},{typing:S.data.msgStatus==="generating"?S.data.typing:!1}))}var f=e(67369);function E(S){return(0,N.jsx)(f.ZP,j()({},S.data))}var v=e(10146);function r(S){return(0,N.jsx)(v.Z,j()({},S.data))}var n=e(60747),a=e(14617)},55031:function($e,K,e){"use strict";e.d(K,{Z:function(){return q}});var F=e(56044),m=e(31382),N=e(55839),g=e(16494),b=e(33948),M=e(52253),y=e(56137),j=e(1948),T=e(61763),h=e(77900),f=e(40443),E=e(33119),v=e(4356),r=e(72816),n=e(77382),a=e(72167),S=e(74398),l=e(55094),s=e(61401),A=e(85893),i={Click:{name:"\u70B9\u51FB",icon:(0,A.jsx)(b.Z,{})},Swipe:{name:"\u6ED1\u52A8",icon:(0,A.jsx)(M.Z,{})},Type:{name:"\u8F93\u5165",icon:(0,A.jsx)(y.Z,{})},Back:{name:"\u8FD4\u56DE",icon:(0,A.jsx)(j.Z,{})},Home:{name:"\u4E3B\u9875",icon:(0,A.jsx)(T.Z,{})},Done:{name:"\u5B8C\u6210",icon:(0,A.jsx)(h.Z,{})},Wait:{name:"\u7B49\u5F85",icon:(0,A.jsx)(f.Z,{spin:!0})},click:{name:"\u70B9\u51FB",icon:(0,A.jsx)(b.Z,{})},"right click":{name:"\u53F3\u952E\u70B9\u51FB",icon:(0,A.jsx)(b.Z,{})},"open app":{name:"\u6253\u5F00\u5E94\u7528",icon:(0,A.jsx)(E.Z,{})},computer_double_click:{name:"\u53CC\u51FB",icon:(0,A.jsx)(v.Z,{})},hotkey:{name:"\u5FEB\u6377\u952E",icon:(0,A.jsx)(r.Z,{})},presskey:{name:"\u6309\u952E",icon:(0,A.jsx)(n.Z,{})},scroll:{name:"\u6EDA\u52A8",icon:(0,A.jsx)(M.Z,{})},drag:{name:"\u62D6\u62FD",icon:(0,A.jsx)(a.Z,{})},type_with_clear_enter_pos:{name:"\u8F93\u5165\u5E76\u6E05\u9664",icon:(0,A.jsx)(y.Z,{})},triple_click:{name:"\u4E09\u51FB",icon:(0,A.jsx)(S.Z,{})},drag_end:{name:"\u62D6\u62FD\u7ED3\u675F",icon:(0,A.jsx)(a.Z,{})},type:{name:"\u8F93\u5165",icon:(0,A.jsx)(y.Z,{})},hscroll:{name:"\u6C34\u5E73\u6EDA\u52A8",icon:(0,A.jsx)(l.Z,{})},done:{name:"\u5B8C\u6210",icon:(0,A.jsx)(h.Z,{})},wait:{name:"\u7B49\u5F85",icon:(0,A.jsx)(f.Z,{spin:!0})},call_user:{name:"\u547C\u53EB\u7528\u6237",icon:(0,A.jsx)(s.Z,{})}},L=i;function q(Z){var W,re,z=(0,F.wv)(),C=z.getPrefixCls,w=C("operate-card");return(0,A.jsxs)("div",{children:[(0,A.jsx)("div",{className:"".concat(w,"-device-action-time"),children:Z.time}),(0,A.jsx)(m.Z,{header:{className:"".concat(w,"-device-action"),icon:(0,A.jsx)("div",{className:"".concat(w,"-device-action-icon"),children:(W=L[Z.action])===null||W===void 0?void 0:W.icon}),title:(0,A.jsxs)("div",{className:"".concat(w,"-device-action-content"),children:[(0,A.jsxs)("div",{className:"".concat(w,"-device-action-description"),children:[(0,A.jsx)("span",{children:Z.actionName||((re=L[Z.action])===null||re===void 0?void 0:re.name)}),(0,A.jsx)("span",{children:Z.description})]}),(0,A.jsx)("div",{className:"".concat(w,"-device-action-image"),children:(0,A.jsx)(N.ZP,{locale:{Image:{preview:""}},children:(0,A.jsx)(g.Z,{src:Z.image,alt:Z.description,width:"100%",height:"100%"})})})]})}})]})}},10325:function($e,K,e){"use strict";e.d(K,{Z:function(){return T}});var F=e(67294),m=e(68400),N=e.n(m),g=e(9053),b,M=(0,g.vJ)(b||(b=N()([`
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
`])),function(h){return h.theme.prefixCls},function(h){return h.theme.colorTextTertiary},function(h){return h.theme.prefixCls}),y=e(56044),j=e(85893);function T(h){var f=h.desc,E=f===void 0?"AI can also make mistakes, so please check carefully and use it with caution":f,v=(0,y.wv)(),r=v.getPrefixCls,n=r("disclaimer");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(M,{}),(0,j.jsxs)("div",{className:n,style:h.style,children:[E,h.afterLink&&(0,j.jsx)("a",{className:"".concat(n,"-after-link"),href:h.afterLink.href,target:"_blank",children:h.afterLink.text})]})]})}},80115:function($e,K,e){"use strict";e.d(K,{Z:function(){return m}});var F=e(85893);function m(){return(0,F.jsx)("iframe",{srcDoc:`<html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>`})}},2534:function($e,K,e){"use strict";e.d(K,{Z:function(){return S}});var F=e(67294),m=e(68400),N=e.n(m),g=e(9053),b,M=(0,g.vJ)(b||(b=N()([`
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

`])),function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.colorText},function(l){return l.theme.colorSuccess},function(l){return l.theme.colorBgBase},function(l){return l.theme.prefixCls}),y=e(56044),j=e(55839),T=e(16494),h=e(89034),f=e(36374),E=e(85893);function v(){for(var l=arguments.length,s=new Array(l),A=0;A<l;A++)s[A]=arguments[A];return s.filter(Boolean).join(" ")}var r=function(s){var A=s.speed,i=A===void 0?1:A,L=s.backgroundColor,q=L===void 0?"#b6a9f8":L,Z=s.colors,W=Z===void 0?["#c979ee","#ef788c","#eb7fc6","#6d67c8"]:Z,re=s.ringColors,z=re===void 0?["white","blue","magenta","violet","lightyellow"]:re,C=s.className,w=C===void 0?"":C,G=(0,F.useRef)(null);return(0,F.useEffect)(function(){if(CSS&&CSS.registerProperty)try{CSS.registerProperty({name:"--a",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--l",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--x",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--y",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--o",syntax:"<number>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--value",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--width-ratio",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--scale",syntax:"<number>",inherits:!0,initialValue:"0"})}catch(_e){}},[]),(0,F.useEffect)(function(){var _e=G.current;if(_e){var x=function(){var de=_e.getBoundingClientRect(),H=Math.min(de.width,de.height);_e.style.setProperty("--actual-size","".concat(H,"px"))};x();var p=new ResizeObserver(x);return p.observe(_e),function(){p.disconnect()}}},[]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("style",{children:`
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
          --duration: calc(8s / `.concat(i,`);
          --ai-duration: calc(5.5s / `).concat(i,`);
          
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
          background: radial-gradient(50% 50% at center, `).concat(W[0]||"#c979ee",", color-mix(in srgb, ").concat(W[0]||"#c979ee",`, transparent 30%));
          --x: calc(var(--s) * 0.04);
          width: calc(var(--s) * 0.6);
          animation-timing-function: cubic-bezier(0.12, 0.32, 0.68, 0.24);
        }

        .fluid-background-container .c2 {
          background: radial-gradient(50% 50% at center, `).concat(W[1]||"#ef788c",", color-mix(in srgb, ").concat(W[1]||"#ef788c",`, white 40%));
          width: calc(var(--s) * 0.55);
        }

        .fluid-background-container .c3 {
          background: radial-gradient(50% 50% at center, `).concat(W[2]||"#eb7fc6",`, transparent);
          width: calc(var(--s) * 0.2);
          opacity: 0.6;
          --x: calc(var(--s) * -0.04);
        }

        .fluid-background-container .c4 {
          background: `).concat(W[3]||"#6d67c8",`;
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
            `).concat(z.join(", "),`
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
      `)}),(0,E.jsxs)("div",{ref:G,className:v("fluid-background-container",w),children:[(0,E.jsxs)("div",{className:"fluid-inner",children:[(0,E.jsx)("div",{className:"c c4",style:{"--i":0}}),(0,E.jsx)("div",{className:"c c1",style:{"--i":1}}),(0,E.jsx)("div",{className:"c c2",style:{"--i":2}}),(0,E.jsx)("div",{className:"c c3",style:{"--i":3}}),(0,E.jsx)("div",{className:"rings"})]}),(0,E.jsx)("div",{className:"glass"})]})]})},n=r,a=function(s){var A=(0,y.wv)(),i=A.getPrefixCls,L=i("image-generator"),q=s.block,Z=s.skeletonText,W=s.width,re=W===void 0?320:W,z=s.height,C=z===void 0?320:z,w=s.src,G=s.loadingText,_e=G===void 0?"Painting...":G,x=s.doneText,p=x===void 0?"Paint Completed":x,pe=s.skeleton||(0,E.jsxs)("div",{className:"".concat(L,"-default-skeleton"),style:{width:"100%",height:"100%"},children:[(0,E.jsx)("div",{className:"".concat(L,"-default-skeleton-bg"),children:(0,E.jsx)(n,{})}),(0,E.jsxs)("div",{className:"".concat(L,"-default-skeleton-content"),children:[(0,E.jsx)("img",{className:"".concat(L,"-default-skeleton-icon"),src:"https://img.alicdn.com/imgextra/i2/O1CN01M1X8yM1MWUC7u3Go5_!!6000000001442-54-tps-72-72.apng"}),Z&&(0,E.jsx)("div",{className:"".concat(L,"-default-skeleton-text"),children:Z})]})]}),de=!w,H=q?{aspectRatio:"".concat(re,"/").concat(C)}:{width:re,height:C};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(M,{}),(0,E.jsxs)("div",{className:L,children:[(0,E.jsxs)("div",{className:"".concat(L,"-text"),children:[de?(0,E.jsx)(f.Z,{}):(0,E.jsx)(h.Z,{className:"".concat(L,"-text-success")}),de?(0,E.jsx)("span",{style:{paddingLeft:20},children:_e}):p]}),(0,E.jsx)("div",{className:"".concat(L,"-wrapper"),style:H,children:de?pe:(0,E.jsx)(j.ZP,{locale:{Image:{preview:""}},children:(0,E.jsx)(T.Z,{width:"100%",height:"100%",src:w})})})]})]})},S=a},66109:function($e,K,e){"use strict";e.d(K,{Z:function(){return an}});var F=e(19632),m=e.n(F),N=e(97857),g=e.n(N),b=e(67294),M=e(13769),y=e.n(M),j=e(55729),T=e(68400),h=e.n(T),f=e(9053),E,v=(0,f.vJ)(E||(E=h()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.colorBorder},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorText},function(c){return c.theme.borderRadiusSM},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.borderRadiusSM},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorBgBase},function(c){return c.theme.prefixCls},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorSuccess},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.motionEaseOut},function(c){return c.theme.colorWhite},function(c){return c.theme.colorPrimary});function r(c){var te=c.cursor,ve=c.content,J=c.animation,V=(0,b.useMemo)(function(){return J?"":te?te==="dot"?" :dot:":te==="underline"?" :underline:":" :dot:":""},[te,ve]);return ve+V}var n=e(85893),a=["content","cursor","animation"];function S(c){var te=c.content,ve=c.cursor,J=c.animation,V=y()(c,a),O=r({cursor:ve,content:te,animation:J}),ce=(0,b.useMemo)(function(){if(J)return{hasNextChunk:J&&ve,enableAnimation:J&&ve}},[ve,J]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{}),(0,n.jsx)(j.Z,g()(g()({},V),{},{content:O,streaming:ce}))]})}var l=e(5574),s=e.n(l),A=function(te){var ve=te.content,J=te.typing,V=(0,b.useState)(0),O=s()(V,2),ce=O[0],ne=O[1],Y=(0,b.useRef)();return(0,b.useEffect)(function(){return J?Y.current=setInterval(function(){ne(function(o){return o+1})},typeof J=="number"?J:5):Y.current&&clearInterval(Y.current),function(){return clearInterval(Y.current)}},[J]),J?ve.slice(0,ce):ve},i=A,L=e(56044),q=e(93967),Z=e.n(q),W=function(){return null},re=e(87427),z=e(96643),C=e(6411),w=e(97634),G=e(89698),_e=e(39536),x={javascript:"js",typescript:"ts",python:"py",ruby:"rb",rust:"rs",kotlin:"kt",csharp:"cs",markdown:"md",yaml:"yml",shell:"sh",bash:"sh",zsh:"sh",mermaid:"mmd",jsx:"jsx",tsx:"tsx"},p=function(te){var ve,J=te.className,V=te.children,O=(J==null||(ve=J.match(/language-(\w+)/))===null||ve===void 0?void 0:ve[1])||"";return typeof V!="string"?null:O==="mermaid"?(0,n.jsx)(re.Z,{header:(0,n.jsx)(pe,{lang:"mermaid",content:V}),children:V}):(0,n.jsx)(z.Z,{lang:O,header:(0,n.jsx)(pe,{lang:O,content:V}),children:V})};function pe(c){var te=c.lang,ve=c.content,J=(0,b.useState)(!1),V=s()(J,2),O=V[0],ce=V[1],ne=(0,b.useRef)(),Y=(0,L.wv)(),o=Y.getPrefixCls,Q=o("code-header"),X=(0,b.useCallback)(function(){var U=x[te]||te||"txt",Ae=new Blob([ve],{type:"text/plain;charset=utf-8"}),le=URL.createObjectURL(Ae),Be=document.createElement("a");Be.href=le,Be.download="code.".concat(U),Be.click(),URL.revokeObjectURL(le)},[te,ve]),ie=(0,b.useCallback)(function(){(0,_e.J)(ve).then(function(){clearTimeout(ne.current),ce(!0),ne.current=setTimeout(function(){return ce(!1)},2e3)}).catch(function(){console.warn("Copy failed")})},[ve]);return(0,n.jsxs)("div",{className:Q,children:[(0,n.jsx)("div",{className:"".concat(Q,"-lang"),children:te}),(0,n.jsxs)("div",{className:"".concat(Q,"-actions"),children:[(0,n.jsx)(C.Z,{className:"".concat(Q,"-download"),onClick:X}),O?(0,n.jsx)(w.Z,{className:"".concat(Q,"-copied")}):(0,n.jsx)(G.Z,{className:"".concat(Q,"-icon"),onClick:ie})]})]})}var de=p;function H(c){return(0,n.jsx)("a",{href:c.src,target:"_blank",rel:"noopener noreferrer",children:c.src})}var ae=e(55839),k=e(16494),oe=e(85576),ue=e(36231),Ye=e(89102);function xe(c){try{var te=c.src,ve=new URL(te),J=ve.pathname,V=J.endsWith(".mp4"),O=J.endsWith(".mp3")||J.endsWith(".wav");return O?(0,n.jsx)("audio",g()(g()({src:c.src},c),{},{controls:!0})):V?(0,n.jsx)(Xe,g()({src:c.src},c)):(0,n.jsx)(Fe,g()({src:c.src},c))}catch(ce){return null}}function Fe(c){return(0,n.jsx)(ae.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(k.Z,g()({src:c.src},c))})}function Xe(c){var te=c.src,ve=(0,b.useState)(!1),J=s()(ve,2),V=J[0],O=J[1],ce=(0,L.wv)(),ne=ce.getPrefixCls,Y=ne("markdown-video");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:Y,children:(0,n.jsx)("div",{className:"".concat(Y,"-poster"),onClick:function(){return O(!0)},children:(0,n.jsx)(ue.Z,{className:"".concat(Y,"-play")})})}),(0,n.jsx)(oe.Z,{closeIcon:(0,n.jsx)("a",{children:(0,n.jsx)(Ye.Z,{style:{fontSize:20}})}),centered:!0,transitionName:"",footer:null,width:500,title:"",styles:{content:{padding:0}},open:V,destroyOnHidden:!0,onCancel:function(){return O(!1)},children:(0,n.jsx)("video",{controls:!0,autoPlay:!0,style:{display:"block",width:"100%"},children:(0,n.jsx)("source",{src:te,type:"video/mp4"})})})]})}function pn(c){var te=(0,L.wv)().getPrefixCls("markdown");return(0,n.jsx)("div",{className:te,style:{fontSize:c.baseFontSize,lineHeight:c.baseLineHeight},children:c.content})}var hn=e(79427),un=e(55241),D,Pe=(0,f.vJ)(D||(D=h()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.motionEaseOut},function(c){return c.theme.colorWhite},function(c){return c.theme.colorPrimary});function I(c){var te=(0,L.wv)(),ve=te.getPrefixCls,J=ve("markdown-citation"),V=c["data-text"],O=c["data-url"],ce=c["data-title"],ne=c["data-content"],Y=ne||ce,o=(0,n.jsx)("sup",{className:J,children:V});return Y&&(o=(0,n.jsx)(un.Z,{title:ce,content:O?(0,n.jsx)("a",{href:O,rel:"noreferrer",target:"_blank",children:O}):ne,children:o})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Pe,{}),o]})}function ee(c){var te,ve=((te=c.citationsData[c["data-text"]])===null||te===void 0?void 0:te.render)||I;return(0,n.jsx)(ve,g()({},c))}var be=[],ke={};function He(c){var te=c.citations,ve=te===void 0?be:te,J=c.citationsMap,V=J===void 0?ke:J,O=(0,b.useMemo)(function(){var o=g()({},V);return ve.forEach(function(Q,X){var ie=X+1;o[ie]=Q}),[o,function(){return function(X){return(0,n.jsx)(ee,g()(g()({},X),{},{citationsData:o}))}}()]},[ve,V]),ce=s()(O,2),ne=ce[0],Y=ce[1];return{CitationComponent:Y,citationsData:ne,citationsDataCount:Object.keys(ne).length}}var Re=e(30861);function ze(c){return{name:"citation",level:"inline",tokenizer:function(ve){var J=ve.match(/^\[([^\]]+)\](?!\()/);if(J){var V=J[0].trim(),O=V==null?void 0:V.replace(/^\[([^\]]+)\]/g,"$1");if(c[O])return{type:"citation",raw:V,text:V==null?void 0:V.replace(/^\[([^\]]+)\]/g,"$1"),renderType:"component"}}},renderer:function(ve){if(c&&Object.keys(c).length===0)return null;var J=ve.text,V=c==null?void 0:c[J];return V?'<citation data-text="'.concat(J,'" data-url="').concat(V.url,'" data-title="').concat(V.title,'" data-content="').concat(V.content,'"></citation>'):ve.raw}}}var fe,We=(0,f.vJ)(fe||(fe=h()([`
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
`])),function(c){var te=c.theme;return te.colorPrimary});function Se(){var c=(0,L.wv)(),te=c.getPrefixCls,ve="markdown-cursor-underline";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(We,{}),(0,n.jsx)("span",{className:Z()(ve,te("markdown-cursor"))})]})}var Ce=e(36374),Ge=function(te){var ve=te["data-type"];return ve==="dot"?(0,n.jsx)(Ce.Z,{}):ve==="underline"?(0,n.jsx)(Se,{}):null};function we(){var c={cursors:{dot:"dot",underline:"underline"}},te=Object.keys(c.cursors).map(function(V){return V.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|"),ve=new RegExp(":(".concat(te,"):")),J=new RegExp("^".concat(ve.source));return{name:"cursor",level:"inline",start:function(O){var ce;return(ce=O.match(ve))===null||ce===void 0?void 0:ce.index},tokenizer:function(O,ce){var ne=J.exec(O);if(ne){var Y=ne[1],o=c.cursors[Y];if(o)return{type:"cursor",raw:ne[0],name:Y,cursor:o}}},renderer:function(O){var ce='<custom-cursor data-type="'.concat(O.name,'"></custom-cursor>');return ce}}}var dn=e(85018),bn=["href"];function Pn(c){return c["data-footnote-ref"]===""?(0,n.jsx)(Ve,g()({},c)):c.children==="\u21A9"&&c["data-footnote-backref"]===""?null:(0,n.jsx)("a",g()({},c))}function Ve(c){var te=(0,L.wv)(),ve=te.getPrefixCls,J=ve("markdown-footnote"),V=c.href,O=y()(c,bn);return(0,n.jsx)("a",g()(g()({},O),{},{className:J,onClick:function(){try{var ne=c.id.split("-"),Y=s()(ne,3),o=Y[0],Q=Y[1],X=Y[2],ie=document.querySelector("#footnote-".concat(X)).querySelector("a").getAttribute("href");window.open(ie,"_blank")}catch(U){}}}))}var t={ALLOWED_TAGS:[]};function Ue(){try{return new RegExp("(?<=a)b"),!0}catch(c){return!1}}var De=Ue(),an=(0,b.memo)(function(c){var te=c.baseFontSize||14,ve=c.baseLineHeight||1.7,J=i({content:c.content,typing:c.typing&&!c.animation}),V=(0,L.wv)().getPrefixCls("markdown"),O=c.raw,ce=O===void 0?!1:O,ne=c.allowHtml,Y=ne===void 0?!1:ne,o=He({citations:c.citations,citationsMap:c.citationsMap}),Q=o.citationsData,X=o.citationsDataCount,ie=o.CitationComponent,U=(0,b.useMemo)(function(){return g()({code:de,style:W,script:W,img:c.disableImage?H:xe,citation:ie,"custom-cursor":Ge,a:Pn},c.components)},[c.disableImage,ie,c.components]),Ae=(0,b.useMemo)(function(){return{ADD_TAGS:["custom-cursor","citation"]}},[]),le=(0,b.useMemo)(function(){var Cn=(0,Re.Z)();Cn.push(we()),X>0&&Cn.push(ze(Q));var cn=(0,dn.Z)({sectionClass:"".concat(V,"-footnotes")});return Cn.push.apply(Cn,m()(cn.extensions)),{extensions:Cn,walkTokens:cn.walkTokens}},[X,Q]),Be=le.extensions,Qe=le.walkTokens,Me=(0,b.useMemo)(function(){return g()({extensions:Be,walkTokens:Qe},!Y&&{renderer:{html:function(cn){var qe=cn.text||cn.raw||"";return qe.replace(/</g,"&lt;").replace(/>/g,"&gt;")}}})},[Be,Y]),on=J||"",sn=(0,n.jsx)(pn,{content:on,baseFontSize:te,baseLineHeight:ve}),Je=(0,b.useCallback)(function(){for(var Cn=arguments.length,cn=new Array(Cn),qe=0;qe<Cn;qe++)cn[qe]=arguments[qe];return console.error(cn),(0,n.jsx)(pn,{content:on,baseFontSize:te,baseLineHeight:ve})},[on,te,ve]),fn=(0,b.useMemo)(function(){return{fontSize:te,lineHeight:ve}},[te,ve]);return ce||!De?sn:(0,n.jsx)(hn.SV,{fallbackRender:Je,children:(0,n.jsx)(S,{dompurifyConfig:Ae,cursor:c.cursor,animation:c.animation,components:U,style:fn,openLinksInNewTab:!0,className:Z()(V,c.className),content:on,config:Me})})})},36374:function($e,K,e){"use strict";e.d(K,{Z:function(){return h}});var F=e(68400),m=e.n(F),N=e(56044),g=e(9053),b=e(93967),M=e.n(b),y=e(85893),j,T=(0,g.vJ)(j||(j=m()([`
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
`])),function(f){return f.theme.prefixCls},function(f){return f.theme.colorText},function(f){return f.theme.colorText});function h(){var f=(0,N.wv)(),E=f.getPrefixCls,v=E("markdown-cursor-dot");return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(T,{}),(0,y.jsxs)("span",{className:M()(v,E("markdown-cursor")),children:[(0,y.jsx)("span",{style:{opacity:0,marginLeft:"-.75em"},children:"_"}),(0,y.jsx)("span",{className:"".concat(v,"-dot1")}),(0,y.jsx)("span",{className:"".concat(v,"-dot2")})]})]})}},12181:function($e,K,e){"use strict";e.d(K,{Z:function(){return L}});var F=e(5574),m=e.n(F),N=e(15009),g=e.n(N),b=e(99289),M=e.n(b),y=e(68400),j=e.n(y),T=e(41469),h=e(2093),f=e(9361),E=e(96486),v=e.n(E),r=e(67294),n=e(56044),a=e(9053),S=e(85893),l,s=(0,a.vJ)(l||(l=j()([`
.`,`-mermaid {
  &-preview img {
    background: `,`;
  }
}
`])),function(q){return q.theme.prefixCls},function(q){return q.theme.colorBgBase}),A,i=function(){var q=M()(g()().mark(function Z(){return g()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:if(!A){re.next=2;break}return re.abrupt("return",A);case 2:return A=Promise.resolve().then(e.bind(e,76637)).then(function(z){return z.default}),re.abrupt("return",A);case 4:case"end":return re.stop()}},Z)}));return function(){return q.apply(this,arguments)}}();function L(q){var Z=q.content,W=q.width,re=q.height,z=(0,n.wv)(),C=z.theme,w=z.getPrefixCls,G=w("mermaid"),_e=(0,r.useMemo)(function(){return{theme:(C==null?void 0:C.algorithm)===f.Z.darkAlgorithm?"dark":"default",securityLevel:"loose",startOnLoad:!1}},[C==null?void 0:C.algorithm,C==null?void 0:C.token.fontFamily]),x=(0,r.useState)(""),p=m()(x,2),pe=p[0],de=p[1],H=(0,r.useState)(),ae=m()(H,2),k=ae[0],oe=ae[1],ue=(0,r.useId)(),Ye=(0,E.kebabCase)("mermaid-".concat(ue));return(0,h.Z)(M()(g()().mark(function xe(){var Fe,Xe,pn,hn;return g()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.prev=0,D.next=3,i();case 3:if(Fe=D.sent,Fe){D.next=7;break}return de(Z),D.abrupt("return");case 7:return D.next=9,Fe.parse(Z);case 9:if(Xe=D.sent,!Xe){D.next=19;break}return Fe.initialize(_e),D.next=14,Fe.render(Ye,Z);case 14:pn=D.sent,hn=pn.svg,de(hn),D.next=20;break;case 19:throw new Error("Invalid Mermaid syntax");case 20:D.next=26;break;case 22:D.prev=22,D.t0=D.catch(0),pe||console.error("Mermaid parse error: ",D.t0),de(pe||"");case 26:case"end":return D.stop()}},xe,null,[[0,22]])})),[Z,_e]),(0,r.useEffect)(function(){if(pe){var xe=new Blob([pe],{type:"image/svg+xml"}),Fe=URL.createObjectURL(xe);return oe(Fe),function(){URL.revokeObjectURL(Fe)}}},[pe]),k?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(s,{}),(0,S.jsx)(T.Z,{className:G,src:k,alt:"mermaid",width:W,height:re,preview:{rootClassName:"".concat(G,"-preview")}})]}):null}},31382:function($e,K,e){"use strict";e.d(K,{Z:function(){return A}});var F=e(9783),m=e.n(F),N=e(5574),g=e.n(N),b=e(67294),M=e(56044),y=e(68400),j=e.n(y),T=e(9053),h,f=(0,T.vJ)(h||(h=j()([`
.`,`-operate-card {
  width: 100%;
  border-radius: `,`px;
  overflow: hidden;
  
  &-collapsed {
    background-color: `,`;
  }

  &:hover {
    background-color: `,`;
  }

  &-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 12px;
    height: 28px;
    line-height: 28px;

    &-icon {
      font-size: 16px;
    }

    &-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
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
      opacity: 0;
    }

    &-has-body {
      cursor: pointer;
    }


  }

  &-collapsed {
    .`,`-operate-card-header-arrow {
      opacity: 1;
    }
  }


  &:hover {
    .`,`-operate-card-header-arrow {
      opacity: 1;
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
    margin: 0 12px 8px 20px;
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

      &-text {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
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
`])),function(i){return i.theme.prefixCls},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorFillTertiary},function(i){return i.theme.colorFillTertiary},function(i){return i.theme.colorText},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorText},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorText},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.colorText},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorBgBase},function(i){return i.theme.colorFillSecondary},function(i){return i.theme.colorText},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorBgBase},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.prefixCls},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.colorPrimary},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.colorFillTertiary},function(i){return i.theme.colorFillTertiary},function(i){return i.theme.colorFillQuaternary},function(i){return i.theme.colorTextTertiary}),E=e(93967),v=e.n(E),r=e(28387),n=e(9838),a=e(64057),S=e(85893);function l(i){var L=(0,M.wv)(),q=L.getPrefixCls,Z=q("operate-card");return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)("div",{className:"".concat(Z,"-line-body"),children:i.children})})}function s(i){var L,q=(0,M.wv)(),Z=q.getPrefixCls,W=Z("operate-card"),re=(0,b.useState)(((L=i.body)===null||L===void 0?void 0:L.defaultOpen)||!1),z=g()(re,2),C=z[0],w=z[1];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(f,{}),(0,S.jsxs)("div",{className:v()(W,m()({},"".concat(W,"-collapsed"),C&&i.body)),children:[(0,S.jsxs)("div",{className:v()("".concat(W,"-header"),i.header.className,m()({},"".concat(W,"-header-has-body"),i.body)),onClick:function(){i.body&&w(!C)},children:[(0,S.jsx)("div",{className:"".concat(W,"-header-icon"),children:i.header.icon}),typeof i.header.title=="string"?(0,S.jsx)("div",{className:"".concat(W,"-header-title"),children:i.header.title}):i.header.title,i.header.description&&(0,S.jsx)("div",{className:"".concat(W,"-header-description"),children:i.header.description}),i.body&&(0,S.jsx)(a.Z,{size:"small",bordered:!1,className:"".concat(W,"-header-arrow"),icon:C?(0,S.jsx)(r.Z,{}):(0,S.jsx)(n.Z,{})})]}),i.body&&C&&(0,S.jsx)("div",{className:"".concat(W,"-body"),children:i.body.children})]})]})}s.LineBody=l;var A=s},85762:function($e,K,e){"use strict";e.d(K,{Z:function(){return l}});var F=e(5574),m=e.n(F),N=e(56044),g=e(31382),b=e(37303),M=e(64057),y=e(28387),j=e(9838),T=e(48095),h=e(50104),f=e(55839),E=e(16494),v=e(86250),r=e(67294),n=e(85893);function a(s){var A=s.images,i=(0,N.wv)(),L=i.getPrefixCls,q=L("operate-card");return(0,n.jsx)(f.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(E.Z.PreviewGroup,{children:A.map(function(Z,W){return(0,n.jsx)(E.Z,{src:Z,width:44,height:44},W)})})})}function S(s){var A=s.item,i=(0,r.useState)(!1),L=m()(i,2),q=L[0],Z=L[1],W=(0,N.wv)(),re=W.getPrefixCls,z=re("operate-card");return(0,n.jsxs)("div",{className:"".concat(z,"-rag-item"),children:[(0,n.jsxs)("div",{className:"".concat(z,"-rag-item-title"),onClick:function(){Z(!q)},children:[(0,n.jsx)("span",{className:"".concat(z,"-rag-item-title-text"),title:A.title,children:A.title}),A.score?(0,n.jsxs)(b.Z,{color:"mauve",size:"small",className:"".concat(z,"-rag-item-score"),children:["\u5F97\u5206 ",(0,n.jsx)("b",{children:A.score})]}):null,(0,n.jsx)(M.Z,{bordered:!1,size:"small",icon:q?(0,n.jsx)(y.Z,{}):(0,n.jsx)(j.Z,{})})]}),q&&(0,n.jsxs)("div",{className:"".concat(z,"-rag-item-content"),children:[(0,n.jsx)("div",{className:"".concat(z,"-rag-item-content-text"),children:A.content}),A.images&&(0,n.jsx)("div",{className:"".concat(z,"-rag-item-images"),children:(0,n.jsx)(a,{images:A.images})}),A.link?(0,n.jsx)("a",{onClick:function(){window.open(A.link,"_blank")},className:"".concat(z,"-rag-item-footer"),href:A.link,target:"_blank",children:A.footer}):(0,n.jsx)("div",{className:"".concat(z,"-rag-item-footer"),children:A.footer})]})]})}function l(s){var A=s.title,i=A===void 0?"\u77E5\u8BC6\u5E93\u68C0\u7D22":A,L=s.subTitle,q=s.defaultOpen,Z=q===void 0?!0:q,W=s.placeholder,re=W===void 0?"\u672A\u67E5\u8BE2\u5230\u4E0E\u63D0\u95EE\u76F8\u5173\u77E5\u8BC6\u5E93":W,z=s.images,C=s.query,w=s.filters,G=(0,N.wv)(),_e=G.getPrefixCls,x=_e("operate-card"),p=(0,n.jsxs)(g.Z.LineBody,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(x,"-rag-group-title"),children:"\u68C0\u7D22 Query"}),(0,n.jsx)("div",{className:"".concat(x,"-rag-group-content"),children:C})]}),z!=null&&z.length?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(x,"-rag-group-title"),children:"\u68C0\u7D22\u56FE\u7247"}),(0,n.jsx)("div",{className:"".concat(x,"-rag-group-content ").concat(x,"-rag-group-content-images"),children:(0,n.jsx)(a,{images:z})})]}):null,w?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(x,"-rag-group-title"),children:"\u8FC7\u6EE4\u6761\u4EF6"}),(0,n.jsx)("div",{className:"".concat(x,"-rag-group-content"),children:w})]}):null,s.list.length?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(x,"-rag-group-title"),children:"Output"}),s.list.map(function(pe,de){return(0,n.jsx)(S,{item:pe},de)})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"".concat(x,"-rag-group-title"),children:"Output"}),(0,n.jsxs)(v.Z,{align:"center",justify:"center",gap:8,className:"".concat(x,"-rag-empty-placeholder"),children:[(0,n.jsx)(T.Z,{}),(0,n.jsx)("span",{children:re})]})]})]});return(0,n.jsx)(g.Z,{header:{icon:(0,n.jsx)(h.Z,{}),title:i,description:L},body:{defaultOpen:Z,children:(0,n.jsx)("div",{className:"".concat(x,"-rag-children"),children:p})}})}},79323:function($e,K,e){"use strict";e.d(K,{Z:function(){return M}});var F=e(56044),m=e(31382),N=e(40443),g=e(33593),b=e(85893);function M(y){var j=(0,F.wv)(),T=j.getPrefixCls,h=y.defaultOpen,f=h===void 0?!0:h,E=y.loading,v=E===void 0?!1:E,r=T("operate-card");return(0,b.jsx)(m.Z,{header:{icon:v?(0,b.jsx)(N.Z,{spin:!0}):(0,b.jsx)(g.Z,{}),title:y.title,description:y.subTitle},body:{defaultOpen:v?f:!1,children:(0,b.jsx)(m.Z.LineBody,{children:(0,b.jsx)("div",{className:"".concat(r,"-thinking"),children:y.content})})}},v.toString())}},6874:function($e,K,e){"use strict";e.d(K,{Z:function(){return f}});var F=e(9783),m=e.n(F),N=e(56044),g=e(31382),b=e(41775),M=e(77900),y=e(40443),j=e(93967),T=e.n(j),h=e(85893);function f(E){var v=(0,N.wv)(),r=v.getPrefixCls,n=r("operate-card"),a=E.title,S=a===void 0?"Task List":a,l=E.list.filter(function(s){return s.status==="done"}).length;return(0,h.jsx)(g.Z,{header:{icon:(0,h.jsx)(b.Z,{}),title:S,description:"\xB7 ".concat(l?l+" of ":""," ").concat(E.list.length)},body:{defaultOpen:E.defaultOpen,children:(0,h.jsx)("div",{className:"".concat(n,"-todo-list"),children:E.list.map(function(s){return(0,h.jsxs)("div",{className:T()(m()(m()({},"".concat(n,"-todo-list-item"),!0),"".concat(n,"-todo-list-item-").concat(s.status),!0)),children:[(0,h.jsx)("div",{className:"".concat(n,"-todo-list-item-icon"),children:{done:(0,h.jsx)(M.Z,{}),todo:(0,h.jsx)(M.Z,{}),running:(0,h.jsx)(y.Z,{spin:!0})}[s.status]}),(0,h.jsx)("div",{className:"".concat(n,"-todo-list-item-title"),style:{textDecoration:s.status==="done"?"line-through":"none"},children:s.title})]},s.title)})})}})}},85786:function($e,K,e){"use strict";e.d(K,{Z:function(){return n}});var F=e(5574),m=e.n(F),N=e(56044),g=e(31382),b=e(97634),M=e(89698),y=e(40443),j=e(78598),T=e(64057),h=e(4146),f=e(39536),E=e(67294),v=e(85893);function r(a){var S=(0,N.wv)(),l=S.getPrefixCls,s=l("operate-card"),A=a.expandEnabled,i=A===void 0?!1:A,L=a.language,q=L===void 0?"json":L,Z=typeof a.content=="string"?a.content:JSON.stringify(a.content),W=(0,E.useState)(!1),re=m()(W,2),z=re[0],C=re[1],w=(0,E.useState)(i!==!0),G=m()(w,2),_e=G[0],x=G[1],p=(0,E.useRef)(null);return(0,v.jsxs)("div",{className:"".concat(s,"-tool-call-block"),children:[(0,v.jsxs)("div",{className:"".concat(s,"-tool-call-block-header"),onClick:function(){i===!0&&x(function(de){return!de})},children:[(0,v.jsx)("span",{className:"".concat(s,"-tool-call-block-title"),children:a.title}),(0,v.jsx)("div",{className:"".concat(s,"-tool-call-block-extra"),onClick:function(de){return de.stopPropagation()},children:(0,v.jsx)(T.Z,{size:"small",style:{marginRight:"-6px"},icon:z?(0,v.jsx)(b.Z,{}):(0,v.jsx)(M.Z,{}),bordered:!1,onClick:function(){(0,f.J)(Z).then(function(){clearTimeout(p.current),C(!0),p.current=setTimeout(function(){C(!1)},2e3)}).catch(function(){console.warn("Copy failed")})}})})]}),_e&&(0,v.jsx)("div",{className:"".concat(s,"-tool-call-block-content"),children:(0,v.jsx)(h.ZP,{language:q,value:Z,readOnly:!0,basicSetup:{lineNumbers:!1,foldGutter:!1}})})]})}function n(a){var S,l,s=a.title,A=s===void 0?"Call Tool":s,i=a.subTitle,L=a.defaultOpen,q=L===void 0?!0:L,Z=a.loading,W=Z===void 0?!1:Z;return(0,v.jsx)(g.Z,{header:{icon:W?(0,v.jsx)(y.Z,{spin:!0}):(0,v.jsx)(j.Z,{}),title:A,description:i},body:{defaultOpen:q,children:(0,v.jsxs)(g.Z.LineBody,{children:[(0,v.jsx)(r,{title:"Input",content:a.input,language:(S=a.inputBlock)===null||S===void 0?void 0:S.language}),(0,v.jsx)(r,{title:"Output",content:a.output,language:(l=a.outputBlock)===null||l===void 0?void 0:l.language})]})}})}},69610:function($e,K,e){"use strict";e.d(K,{Z:function(){return T}});var F=e(9783),m=e.n(F),N=e(56044),g=e(31382),b=e(9229),M=e(93967),y=e.n(M),j=e(85893);function T(h){var f=(0,N.wv)(),E=f.getPrefixCls,v=E("operate-card"),r=h.title,n=r===void 0?"\u8054\u7F51\u641C\u7D22":r,a=h.subTitle;return(0,j.jsx)(g.Z,{header:{icon:(0,j.jsx)(b.Z,{}),title:n,description:a},body:{defaultOpen:!0,children:(0,j.jsx)(g.Z.LineBody,{children:h.list.map(function(S){return(0,j.jsxs)("div",{className:y()(m()({},"".concat(v,"-web-search-item"),!0)),onClick:function(){window.open(S.link,"_blank")},children:[(0,j.jsx)("img",{className:"".concat(v,"-web-search-item-icon"),src:S.icon,alt:S.title}),(0,j.jsx)("div",{className:"".concat(v,"-web-search-item-title"),children:S.title}),S.subTitle&&(0,j.jsx)("div",{className:"".concat(v,"-web-search-item-subTitle"),children:S.subTitle})]},S.title)})})}})}},56809:function($e,K,e){"use strict";e.d(K,{B4:function(){return m.Z},BI:function(){return F.Z},Sn:function(){return b.Z},fz:function(){return g.Z},x4:function(){return N.Z}});var F=e(79323),m=e(6874),N=e(85786),g=e(69610),b=e(85762)},83962:function($e,K,e){"use strict";e.d(K,{HJ:function(){return j},NR:function(){return M},xy:function(){return y}});var F=e(97857),m=e.n(F),N=e(67294),g=e(73420),b=e(85893),M=(0,N.createContext)(void 0),y=function(h){return(0,b.jsx)(M.Provider,{value:h.cardConfig,children:h.children})},j=function(){var h=N.useContext(M);return N.useMemo(function(){return m()(m()({},g),h)},[h])}},92049:function($e,K,e){"use strict";e.d(K,{R:function(){return g},bN:function(){return b}});var F=e(67294),m=e(85893),N=(0,F.createContext)(void 0),g=function(y){return(0,m.jsx)(N.Provider,{value:y,children:y.children})},b=function(){var y=F.useContext(N);return y||{}}},56044:function($e,K,e){"use strict";e.d(K,{wv:function(){return y}});var F=e(21766),m=e(67294),N=e(83962),g=e(92049),b=e(85893),M=function(T){var h=T.children,f=T.cardConfig,E=T.markdown;return(0,b.jsx)(g.R,{markdown:E,children:(0,b.jsx)(N.xy,{cardConfig:f,children:h})})};function y(){var j=m.useContext(F.ZP.ConfigContext);return j}K.ZP=M},44294:function($e,K,e){"use strict";e.d(K,{Z:function(){return v},a:function(){return h}});var F=e(97857),m=e.n(F),N=e(24772),g=e(83622),b=e(93967),M=e.n(b),y=e(29372),j=e(67294),T=e(85893),h=j.createContext({}),f=function(){return{height:0}},E=function(n){return{height:n.scrollHeight}};function v(r){var n=r.title,a=r.onOpenChange,S=r.open,l=r.children,s=r.className,A=r.style,i=r.classNames,L=i===void 0?{}:i,q=r.styles,Z=q===void 0?{}:q,W=r.closable,re=r.forceRender,z=j.useContext(h),C=z.prefixCls,w="".concat(C,"-header");return(0,T.jsx)(y.ZP,{motionEnter:!0,motionLeave:!0,motionName:"".concat(w,"-motion"),leavedClassName:"".concat(w,"-motion-hidden"),onEnterStart:f,onEnterActive:E,onLeaveStart:E,onLeaveActive:f,visible:S,forceRender:re,children:function(_e){var x=_e.className,p=_e.style;return(0,T.jsxs)("div",{className:M()(w,x,s),style:m()(m()({},p),A),children:[(W!==!1||n)&&(0,T.jsxs)("div",{className:M()("".concat(w,"-header"),L.header),style:m()({},Z.header),children:[(0,T.jsx)("div",{className:"".concat(w,"-title"),children:n}),W!==!1&&(0,T.jsx)("div",{className:"".concat(w,"-close"),children:(0,T.jsx)(g.ZP,{type:"text",icon:(0,T.jsx)(N.Z,{}),size:"small",onClick:function(){a==null||a(!S)}})})]}),l&&(0,T.jsx)("div",{className:M()("".concat(w,"-content"),L.content),style:m()({},Z.content),children:l})]})}})}},66672:function($e,K,e){"use strict";e.d(K,{Z:function(){return Y}});var F=e(19632),m=e.n(F),N=e(97857),g=e.n(N),b=e(52677),M=e.n(b),y=e(9783),j=e.n(y),T=e(5574),h=e.n(T),f=e(13769),E=e.n(f),v=e(48045),r=e(86250),n=e(3296),a=e(93967),S=e.n(a),l=e(56790),s=e(30339),A=e(94787),i=e(67294),L=e(11154),q=e(83204);function Z(o,Q){return(0,i.useImperativeHandle)(o,function(){var X=Q(),ie=X.nativeElement;return new Proxy(ie,{get:function(Ae,le){return X[le]?X[le]:Reflect.get(Ae,le)}})})}var W=e(56044),re=e(44294),z=e(64057),C=e(85893),w=["className","action","onClick"],G=i.createContext(null);function _e(o){var Q=o.className,X=o.action,ie=o.onClick,U=E()(o,w),Ae=i.useContext(G),le=Ae.prefixCls,Be=Ae.disabled,Qe=Ae[X],Me=Be||U.disabled||Ae["".concat(X,"Disabled")]||!1;return(0,C.jsx)(z.Z,g()(g()({bordered:!1},U),{},{disabled:Me,onClick:function(sn){Me||(Qe&&Qe(),ie&&ie(sn))},className:S()(le,Q,j()({},"".concat(le,"-disabled"),Me))}))}var x=i.forwardRef(_e),p=e(69291);function pe(o,Q){return(0,C.jsx)(x,g()(g()({icon:(0,C.jsx)(p.Z,{})},o),{},{action:"onClear",ref:Q}))}var de=i.forwardRef(pe),H=(0,i.memo)(function(o){var Q=o.className;return(0,C.jsxs)("svg",{color:"currentColor",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:Q,children:[(0,C.jsx)("title",{children:"Stop Loading"}),(0,C.jsx)("rect",{fill:"currentColor",height:"250",rx:"24",ry:"24",width:"250",x:"375",y:"375"})]})}),ae=H,k=e(67055),oe=["className","loading"];function ue(o,Q){var X=i.useContext(G),ie=X.prefixCls,U=o.className,Ae=o.loading,le=E()(o,oe),Be=(0,C.jsx)(x,g()(g()({icon:(0,C.jsx)(ae,{className:"".concat(ie,"-loading-icon")}),type:"primary",variant:"text"},le),{},{className:S()(U,"".concat(ie,"-loading-button")),action:"onCancel",ref:Q}));return typeof o.loading=="string"?(0,C.jsx)(k.Z,{title:o.loading,children:Be}):Be}var Ye=i.forwardRef(ue),xe=e(43103);function Fe(o,Q){return(0,C.jsx)(x,g()(g()({icon:(0,C.jsx)(xe.Z,{}),type:"primary"},o),{},{action:"onSend",ref:Q}))}var Xe=i.forwardRef(Fe),pn=e(36763),hn=e(21474),un=1e3,D=4,Pe=140,I=Pe/2,ee=250,be=500,ke=.8;function He(o){var Q=o.className;return(0,C.jsxs)("svg",{color:"currentColor",viewBox:"0 0 ".concat(un," ").concat(un),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:Q,children:[(0,C.jsx)("title",{children:"Speech Recording"}),Array.from({length:D}).map(function(X,ie){var U=(un-Pe*D)/(D-1),Ae=ie*(U+Pe),le=un/2-ee/2,Be=un/2-be/2;return(0,C.jsxs)("rect",{fill:"currentColor",rx:I,ry:I,height:ee,width:Pe,x:Ae,y:le,children:[(0,C.jsx)("animate",{attributeName:"height",values:"".concat(ee,"; ").concat(be,"; ").concat(ee),keyTimes:"0; 0.5; 1",dur:"".concat(ke,"s"),begin:"".concat(ke/D*ie,"s"),repeatCount:"indefinite"}),(0,C.jsx)("animate",{attributeName:"y",values:"".concat(le,"; ").concat(Be,"; ").concat(le),keyTimes:"0; 0.5; 1",dur:"".concat(ke,"s"),begin:"".concat(ke/D*ie,"s"),repeatCount:"indefinite"})]},ie)})]})}function Re(o,Q){var X=i.useContext(G),ie=X.speechRecording,U=X.onSpeechDisabled,Ae=X.prefixCls,le=null;return ie?le=(0,C.jsx)(He,{className:"".concat(Ae,"-recording-icon")}):U?le=(0,C.jsx)(pn.Z,{}):le=(0,C.jsx)(hn.Z,{}),(0,C.jsx)(x,g()(g()({icon:le,variant:"text"},o),{},{action:"onSpeech",ref:Q}))}var ze=i.forwardRef(Re),fe=e(68400),We=e.n(fe),Se=e(9053),Ce,Ge=(0,Se.vJ)(Ce||(Ce=We()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.colorBgBase},function(o){return o.theme.borderRadiusLG},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.motionDurationSlow},function(o){return o.theme.lineWidth},function(o){return o.theme.colorPrimaryHover},function(o){return o.theme.lineWidth},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.colorBgContainerDisabled},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.paddingXS},function(o){return o.theme.colorTextTertiary},function(o){return"var(--".concat(o.theme.prefixCls,"-color-fill-disable)")},function(o){return o.theme.controlHeight},function(o){return o.theme.controlHeight},function(o){return o.theme.prefixCls}),we=Ge,dn;!dn&&typeof window!="undefined"&&(dn=window.SpeechRecognition||window.webkitSpeechRecognition);function bn(o,Q){var X=(0,l.zX)(o),ie=i.useMemo(function(){return M()(Q)==="object"?[Q.recording,Q.onRecordingChange,typeof Q.recording=="boolean"]:[void 0,void 0,!1]},[Q]),U=h()(ie,3),Ae=U[0],le=U[1],Be=U[2],Qe=i.useState(null),Me=h()(Qe,2),on=Me[0],sn=Me[1];i.useEffect(function(){if(typeof navigator!="undefined"&&"permissions"in navigator){var xn=null;return navigator.permissions.query({name:"microphone"}).then(function(In){sn(In.state),In.onchange=function(){sn(this.state)},xn=In}),function(){xn&&(xn.onchange=null)}}},[]);var Je=dn&&on!=="denied",fn=i.useRef(null),Cn=(0,l.C8)(!1,{value:Ae}),cn=h()(Cn,2),qe=cn[0],Sn=cn[1],Rn=i.useRef(!1),jn=function(){if(Je&&!fn.current){var In=new dn;In.onstart=function(){Sn(!0)},In.onend=function(){Sn(!1)},In.onresult=function($n){if(!Rn.current){var _n,On=(_n=$n.results)===null||_n===void 0||(_n=_n[0])===null||_n===void 0||(_n=_n[0])===null||_n===void 0?void 0:_n.transcript;X(On)}Rn.current=!1},fn.current=In}},en=(0,l.zX)(function(xn){xn&&!qe||(Rn.current=xn,Be?le==null||le(!qe):(jn(),fn.current&&(qe?(fn.current.stop(),le==null||le(!1)):(fn.current.start(),le==null||le(!0)))))});return[Je,en,qe]}var Pn=e(89102),Ve,t=(0,Se.vJ)(Ve||(Ve=We()([`
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

`])),function(o){return o.theme.prefixCls},function(o){return o.theme.borderRadius},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.colorTextSecondary},function(o){return o.theme.colorPrimary},function(o){return o.theme.colorPrimary},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.borderRadiusLG},function(o){return o.theme.borderRadiusLG},function(o){return o.theme.colorFillTertiary},function(o){return o.theme.colorTextSecondary});function Ue(o){var Q=(0,W.wv)(),X=Q.getPrefixCls,ie=X("sender-mode-select"),U=o.value,Ae=o.onChange,le=(0,i.useMemo)(function(){var Qe=o.options.find(function(Me){return Me.value===U})||{};return Qe},[o.value]),Be=(0,C.jsx)(Pn.Z,{onClick:function(){return Ae(void 0)},style:{cursor:"pointer",fontSize:20}});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(t,{}),(0,C.jsxs)("div",{className:ie,style:o.style,children:[(0,C.jsx)("div",{className:"".concat(ie,"-options ").concat(U?"".concat(ie,"-hide"):""),children:o.options.map(function(Qe){var Me=(0,C.jsx)(De,g()({onClick:function(){return Ae(Qe.value)},className:"".concat(ie,"-option")},Qe),Qe.value);return Me})}),(0,C.jsx)("div",{className:"".concat(ie,"-display ").concat(U?"":"".concat(ie,"-hide")),children:(0,C.jsxs)("div",{className:"".concat(ie,"-display-flex"),children:[(0,C.jsx)(De,g()(g()({},le),{},{label:(le==null?void 0:le.selectedLabel)||(le==null?void 0:le.label),className:"".concat(ie,"-display-label")})),o.desc&&(0,C.jsx)("div",{className:"".concat(ie,"-display-desc"),children:o.desc}),o.closeTip?(0,C.jsx)(k.Z,{title:o.closeTip,children:Be}):Be]})})]})]})}function De(o){var Q=(0,C.jsxs)("div",{className:o.className,onClick:o.onClick,children:[o.icon,o.label]});return o.tooltip?(0,C.jsx)(k.Z,{title:o.tooltip,placement:"topLeft",children:Q}):Q}var an,c=(0,Se.vJ)(an||(an=We()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.borderRadiusLG},function(o){return o.theme.borderRadiusLG},function(o){return o.theme.colorFillTertiary});function te(o){var Q=o.leftChildren,X=o.rightChildren,ie=o.children,U=(0,W.wv)().getPrefixCls("sender-before-ui-container"),Ae=(0,i.useMemo)(function(){return Q?(0,C.jsx)("div",{className:"".concat(U,"-left"),children:Q}):null},[Q]),le=(0,i.useMemo)(function(){return X?(0,C.jsx)("div",{className:"".concat(U,"-right"),children:X}):null},[X]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(c,{}),(0,C.jsx)("div",{className:U,children:(0,C.jsx)("div",{className:"".concat(U,"-content"),children:(0,C.jsx)("div",{className:"".concat(U,"-content-children"),children:ie||(0,C.jsxs)(C.Fragment,{children:[Ae,le]})})})})]})}var ve=["styles","classNames","className","rootClassName","style","defaultValue","value","readOnly","enableFocusExpand","sendDisabled","allowEmptySubmit","submitType","onSubmit","loading","onCancel","onChange","onFocus","onBlur","actions","onKeyPress","onKeyDown","suggestions","disabled","header","onPaste","allowSpeech","onPasteFile","components"];function J(o,Q,X){return(0,A.Z)(o,Q)||X}function V(o){if(!o.startsWith("/"))return null;var Q=o.slice(1);return Q?/\s/.test(Q)?null:Q.trim().toLowerCase():""}function O(o,Q){return!Array.isArray(o)||o.length===0||Q===null||Q===""?o:o.filter(function(X){var ie=typeof X.value=="string"?X.value.toLowerCase():"",U=typeof X.label=="string"||typeof X.label=="number"?String(X.label).toLowerCase():"";return ie.includes(Q)||U.includes(Q)})}var ce=i.forwardRef(function(o,Q){var X=o.styles,ie=X===void 0?{}:X,U=o.classNames,Ae=U===void 0?{}:U,le=o.className,Be=o.rootClassName,Qe=o.style,Me=o.defaultValue,on=o.value,sn=o.readOnly,Je=o.enableFocusExpand,fn=Je===void 0?!1:Je,Cn=o.sendDisabled,cn=Cn===void 0?!1:Cn,qe=o.allowEmptySubmit,Sn=qe===void 0?!1:qe,Rn=o.submitType,jn=Rn===void 0?"enter":Rn,en=o.onSubmit,xn=o.loading,In=o.onCancel,$n=o.onChange,_n=o.onFocus,On=o.onBlur,gn=o.actions,wn=o.onKeyPress,Un=o.onKeyDown,kn=o.suggestions,Jn=o.disabled,Zn=o.header,nn=o.onPaste,rn=o.allowSpeech,Mn=o.onPasteFile,An=o.components,nt=E()(o,ve),Bn=(0,i.useState)(!1),Kn=h()(Bn,2),Yn=Kn[0],Hn=Kn[1],ot=i.useMemo(function(){return{maxRows:5,minRows:2}},[]),Nn=(0,W.wv)(),qn=Nn.direction,tt=Nn.getPrefixCls,Tn=tt("sender"),Wn=i.useRef(null),et=i.useRef(null);Z(Q,function(){var me,se;return{nativeElement:Wn.current,focus:(me=et.current)===null||me===void 0?void 0:me.focus,blur:(se=et.current)===null||se===void 0?void 0:se.blur}}),(0,L.Z)(Wn,{onFocus:function(se){Hn(!0),_n==null||_n()},onBlur:function(){Wn.current&&!Wn.current.contains(document.activeElement)&&(Hn(!1),On==null||On())}}),(0,q.Z)("click",function(me){Hn(!0),_n==null||_n()},{target:Wn});var Qn="".concat(Tn,"-input"),Dn=S()(Tn,le,Be,j()(j()(j()(j()({},"".concat(Tn,"-rtl"),qn==="rtl"),"".concat(Tn,"-disabled"),Jn),"".concat(Tn,"-focus"),Yn&&fn),"".concat(Tn,"-blur"),!Yn&&fn)),Fn="".concat(Tn,"-actions-btn"),Xn="".concat(Tn,"-actions-list"),st=(0,l.C8)(Me||"",{value:on}),vt=h()(st,2),Vn=vt[0],gt=vt[1],rt=function(se,he){gt(se),$n&&$n(se,he)},pt=bn(function(me){rt("".concat(Vn," ").concat(me))},rn),ut=h()(pt,3),xt=ut[0],mt=ut[1],Ct=ut[2],dt=Array.isArray(kn)&&kn.length>0,ht=i.useMemo(function(){return V(Vn)},[Vn]),ft=i.useMemo(function(){return O(kn,ht)},[kn,ht]),d=Array.isArray(ft)&&ft.length>0,P=i.useCallback(function(me,se){if(me!=null&&me.length)for(var he=0,Ne=me;he<Ne.length;he++){var yn=Ne[he];if(!(!yn||M()(yn)!=="object")){if(yn.label===se&&typeof yn.value=="string")return yn.value;var vn=P(yn.children,se);if(vn)return vn}}},[]),u=J(An,["input"],v.Z.TextArea),_=(0,s.Z)(nt,{attr:!0,aria:!0,data:!0}),R=g()(g()({},_),{},{ref:et}),B=function(){!je.onSendDisabled&&en&&!xn&&en(Vn)},$=function(){rt("")},Oe=i.useRef(!1),ye=i.useRef(!1),ge=function(){Oe.current=!0},Ee=function(se){if(Oe.current=!1,o.maxLength){var he=se.target.value;he.length>o.maxLength&&rt(he.slice(0,o.maxLength))}},Le=function(se){var he=!Oe.current&&!ye.current;switch(jn){case"enter":he&&!se.shiftKey&&(se.preventDefault(),B());break;case"shiftEnter":he&&se.shiftKey&&(se.preventDefault(),B());break}},Ke=function(se){var he;if(!Mn){nn==null||nn(se);return}var Ne=Array.from(((he=se.clipboardData)===null||he===void 0?void 0:he.files)||[]);if(Ne.length===0){var yn,vn=Array.from(((yn=se.clipboardData)===null||yn===void 0?void 0:yn.items)||[]);Ne=vn.filter(function(Ze){return Ze.kind==="file"}).map(function(Ze){return Ze.getAsFile()}).filter(function(Ze){return Ze!==null})}Ne.length>0?(Ne.forEach(function(Ze){return Mn(Ze)}),se.preventDefault()):nn==null||nn(se)},ln=i.useMemo(function(){var me=Array.isArray(o.prefix)?m()(o.prefix):[o.prefix];return me.filter(function(se){return se!=null})},[o.prefix]),Te=(0,C.jsx)(r.Z,{className:"".concat(Xn,"-presets"),children:xn?(0,C.jsx)(Ye,{loading:xn,disabled:!!Jn}):(0,C.jsx)(Xe,{disabled:!!Jn})});typeof gn=="function"?Te=gn(Te,{components:{SendButton:Xe,ClearButton:de,LoadingButton:Ye}}):gn&&(Te=gn);var je={prefixCls:Fn,onSend:B,onSendDisabled:(!Vn||!Vn.trim())&&!Sn||cn,onClear:$,onClearDisabled:!Vn,onCancel:In,onCancelDisabled:!xn,onSpeech:function(){return mt(!1)},onSpeechDisabled:!xt,speechRecording:Ct,disabled:!!Jn},Ie=function(se){return ye.current=!!(se!=null&&se.open),(0,C.jsx)(u,g()(g()({},R),{},{disabled:!!Jn,style:ie.input,className:S()(Qn,Ae.input),autoSize:ot,value:Vn.slice(0,o.maxLength||Number.MAX_SAFE_INTEGER),onChange:function(Ne){var yn=Ne.target.value;if(o.maxLength&&!Oe.current&&yn.length>o.maxLength&&(yn=yn.slice(0,o.maxLength)),rt(yn,Ne),dt){var vn=V(yn),Ze=O(kn,vn),mn=Array.isArray(Ze)&&Ze.length>0;if(vn!==null&&mn){var En;se==null||(En=se.onTrigger)===null||En===void 0||En.call(se,!0)}else{var Ln;se==null||(Ln=se.onTrigger)===null||Ln===void 0||Ln.call(se,!1)}}mt(!0)},onKeyPress:wn,onPressEnter:Le,onCompositionStart:ge,onCompositionEnd:Ee,onKeyDown:function(Ne){var yn;if(Ne.key==="Enter"&&se!==null&&se!==void 0&&se.open&&dt){var vn,Ze,mn=(vn=Wn.current)===null||vn===void 0?void 0:vn.ownerDocument,En=mn==null?void 0:mn.querySelector('[role="menuitemcheckbox"][aria-checked="true"]'),Ln=mn==null?void 0:mn.querySelector('[role="menuitem"][aria-current="true"]'),zn=En instanceof HTMLElement&&En||Ln instanceof HTMLElement&&Ln||null,at=zn==null?void 0:zn.getAttribute("data-path-key"),Gn=zn==null||(Ze=zn.getAttribute("title"))===null||Ze===void 0?void 0:Ze.trim(),lt=Gn?P(kn,Gn):void 0,tn=lt||at;if(tn){var ct;Ne.preventDefault(),Ne.stopPropagation(),rt("/".concat(tn," ")),(ct=se.onTrigger)===null||ct===void 0||ct.call(se,!1);return}}se==null||(yn=se.onKeyDown)===null||yn===void 0||yn.call(se,Ne),Un==null||Un(Ne)},onPaste:Ke,variant:"borderless",readOnly:sn}))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(we,{}),(0,C.jsxs)("div",{ref:Wn,className:Dn,style:Qe,children:[Zn&&(0,C.jsx)(re.a.Provider,{value:{prefixCls:Tn,focus:Yn,enableFocusExpand:fn},children:Zn}),(0,C.jsxs)("div",{className:"".concat(Tn,"-content"),children:[dt?(0,C.jsx)(n.Z,{items:ft,onSelect:function(se){rt("/".concat(se," "))},children:function(se){return Ie(se)}}):Ie(),(0,C.jsxs)("div",{className:"".concat(Tn,"-content-bottom"),children:[ln.length>0&&(0,C.jsx)("div",{className:S()("".concat(Tn,"-prefix"),Ae.prefix),style:ie.prefix,children:(0,C.jsxs)(r.Z,{gap:8,children:[rn&&(0,C.jsx)(G.Provider,{value:je,children:(0,C.jsx)(ze,{})}),ln]})}),(0,C.jsxs)("div",{className:S()(Xn,Ae.actions),style:ie.actions,children:[o.maxLength?(0,C.jsxs)("div",{className:"".concat(Xn,"-length"),children:[Math.min(Vn.length,o.maxLength),"/",o.maxLength]}):null,(0,C.jsx)(G.Provider,{value:je,children:Te})]})]}),o.footer]})]})]})}),ne=ce;ne.Header=re.Z,ne.ModeSelect=Ue,ne.BeforeUIContainer=te;var Y=ne},70770:function($e,K,e){"use strict";e.d(K,{Z:function(){return S}});var F=e(89034),m=e(36674),N=e(9343),g=e(48095),b=e(97634),M=e(56044),y=e(68400),j=e.n(y),T=e(9053),h,f=(0,T.vJ)(h||(h=j()([`
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
`])),function(l){return l.theme.prefixCls},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorSuccessBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorSuccess},function(l){return l.theme.colorErrorBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorError},function(l){return l.theme.colorWarningBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorWarning},function(l){return l.theme.colorFillTertiary},function(l){return l.theme.prefixCls},function(l){return l.theme.colorInfo},function(l){return l.theme.colorText},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBgBase},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBgBase},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorText}),E=e(93967),v=e.n(E),r=e(21403),n=e(85893);function a(l){var s=(0,M.wv)(),A=s.getPrefixCls,i=A("status-card"),L=l.icon||{success:(0,n.jsx)(F.Z,{}),error:(0,n.jsx)(m.Z,{}),warning:(0,n.jsx)(N.Z,{}),info:(0,n.jsx)(g.Z,{})}[l.status];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{}),(0,n.jsxs)("div",{className:v()(i,"".concat(i,"-").concat(l.status)),children:[(0,n.jsxs)("div",{className:"".concat(i,"-header"),children:[(0,n.jsxs)("div",{className:"".concat(i,"-header-top"),children:[(0,n.jsx)("div",{className:"".concat(i,"-header-icon"),children:L}),(0,n.jsx)("div",{className:"".concat(i,"-header-title"),children:l.title})]}),l.description&&(0,n.jsx)("div",{className:"".concat(i,"-header-description"),children:l.description})]}),l.children&&(0,n.jsx)("div",{className:"".concat(i,"-body"),children:l.children})]})]})}a.HITL=function(l){var s=l.title,A=s===void 0?"\u9700\u8981\u7528\u6237\u4EBA\u5DE5\u5E72\u9884":s,i=l.description,L=l.waitButtonText,q=L===void 0?"\u6211\u5DF2\u5B8C\u6210\uFF0C\u7EE7\u7EED\u4EFB\u52A1":L,Z=l.doneButtonText,W=Z===void 0?"\u7528\u6237\u5DF2\u786E\u8BA4":Z,re=(0,M.wv)(),z=re.getPrefixCls,C=z("status-card"),w=l.actions!==void 0?l.actions:l.done?(0,n.jsx)(r.Z,{onClick:l.onDone,type:"primary",disabled:!0,icon:(0,n.jsx)(b.Z,{}),children:W}):(0,n.jsx)(r.Z,{onClick:l.onDone,type:"primary",children:q});return(0,n.jsx)(a,{status:l.done?"success":"info",title:A,children:i||w?(0,n.jsxs)("div",{className:"".concat(C,"-HITL"),children:[i&&(0,n.jsx)("div",{className:"".concat(C,"-HITL-desc"),children:i}),(0,n.jsx)("div",{className:"".concat(C,"-HITL-button"),children:w})]}):null})},a.Statistic=function(l){var s=(0,M.wv)(),A=s.getPrefixCls,i=A("status-card");return(0,n.jsx)("div",{className:"".concat(i,"-statistic"),children:l.values.map(function(L){return(0,n.jsxs)("div",{className:"".concat(i,"-statistic-item"),children:[(0,n.jsx)("div",{className:"".concat(i,"-statistic-item-title"),children:L.title}),(0,n.jsx)("div",{className:"".concat(i,"-statistic-item-value"),children:L.value})]})})})};var S=a},7354:function($e,K,e){"use strict";var F=e(15009),m=e.n(F),N=e(9783),g=e.n(N),b=e(97857),M=e.n(b),y=e(77262),j=e.n(y),T=e(93938),h=e.n(T),f=`

`,E=`
`,v=":",r=function(s){return(s!=null?s:"").trim()!==""};function n(){var l="";return new TransformStream({transform:function(A,i){l+=A;var L=l.split(f);L.slice(0,-1).forEach(function(q){r(q)&&i.enqueue(q)}),l=L[L.length-1]},flush:function(A){r(l)&&A.enqueue(l)}})}function a(){return new TransformStream({transform:function(s,A){var i=s.split(E),L=i.reduce(function(q,Z){var W=Z.indexOf(v);if(W===-1)throw new Error('The key-value separator "'.concat(v,'" is not found in the sse line chunk!'));var re=Z.slice(0,W);if(!r(re))return q;var z=Z.slice(W+1);return M()(M()({},q),{},g()({},re,z))},{});Object.keys(L).length!==0&&A.enqueue(L)}})}function S(l,s){var A=l.readableStream,i=l.transformStream;if(!(A instanceof ReadableStream))throw new Error("The options.readableStream must be an instance of ReadableStream.");var L=new TextDecoderStream,q=i?A.pipeThrough(L).pipeThrough(i):A.pipeThrough(L).pipeThrough(n()).pipeThrough(a());return q[Symbol.asyncIterator]=h()(m()().mark(function Z(){var W,re,z,C;return m()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:W=this.getReader();case 1:return G.next=4,j()(W.read());case 4:if(re=G.sent,z=re.done,C=re.value,!z){G.next=9;break}return G.abrupt("break",15);case 9:if(C){G.next=11;break}return G.abrupt("continue",1);case 11:return G.next=13,s!=null&&s.openaiCompatible?M()(M()({},C),{},{data:C.data.slice(1)}):C;case 13:G.next=1;break;case 15:case"end":return G.stop()}},Z,this)})),q}K.Z=S},39536:function($e,K,e){"use strict";e.d(K,{J:function(){return b}});var F=e(15009),m=e.n(F),N=e(99289),g=e.n(N);function b(y){return M.apply(this,arguments)}function M(){return M=g()(m()().mark(function y(j){var T;return m()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(!(window.isSecureContext&&navigator.clipboard)){f.next=4;break}return f.next=3,navigator.clipboard.writeText(j);case 3:return f.abrupt("return");case 4:T=document.createElement("textarea"),T.value=j,T.style.cssText="position:fixed;left:-9999px",document.body.appendChild(T),T.select();try{document.execCommand("copy",!0)}finally{document.body.removeChild(T)}case 10:case"end":return f.stop()}},y)})),M.apply(this,arguments)}},32116:function($e,K,e){"use strict";e.d(K,{Z:function(){return F}});function F(m){return new Promise(function(N){return setTimeout(N,m)})}},66366:function($e,K,e){"use strict";e.d(K,{Z:function(){return m}});var F={i8:"1.1.61"},m=F.i8},57657:function($e,K,e){"use strict";e.r(K);var F=e(5574),m=e.n(F),N=e(9053),g=e(67294),b=e(85893),M=function(){var T=(0,g.useState)({x:0,y:0}),h=m()(T,2),f=h[0],E=h[1],v=(0,g.useState)(!1),r=m()(v,2),n=r[0],a=r[1],S=(0,g.useRef)(null),l=y(),s=l.styles,A=l.cx;(0,g.useEffect)(function(){var z=function(w){if(S.current){var G=S.current.getBoundingClientRect();E({x:w.clientX-G.left,y:w.clientY-G.top})}};return window.addEventListener("mousemove",z),function(){return window.removeEventListener("mousemove",z)}},[]),(0,g.useEffect)(function(){var z=setInterval(function(){a(!0),setTimeout(function(){return a(!1)},150)},5e3);return function(){return clearInterval(z)}},[]);var i=function(){var C=32,w=32,G=f.x-C,_e=f.y-w,x=6,p=6,pe=Math.sqrt(G*G+_e*_e),de=50;if(pe===0)return{x:0,y:0};var H=Math.min(pe/de,1),ae=G/pe*x*H,k=_e/pe*p*H;return{x:Math.max(-x,Math.min(x,ae)),y:Math.max(-p,Math.min(p,k))}},L=function(C){var w=32,G=f.x-w,_e=400;if(Math.abs(G)<_e)return 1;var x=Math.abs(G)-_e,p=32-_e,pe=Math.min(x/p,1);return G>_e?C?1-pe*.5:1:G<-_e?C?1:1-pe*.5:1},q=i(),Z=i(),W=L(!0),re=L(!1);return(0,b.jsxs)("div",{ref:S,className:s.container,children:[(0,b.jsx)("div",{className:A(s.eye,s.leftEye,n?s.blinkingEye:""),style:{transform:"translate(".concat(q.x,"px, ").concat(q.y,"px) ").concat(n?"scaleY(0.1)":"scaleY(".concat(W,")"))}}),(0,b.jsx)("div",{className:A(s.eye,s.rightEye,n?s.blinkingEye:""),style:{transform:"translate(".concat(Z.x,"px, ").concat(Z.y,"px) ").concat(n?"scaleY(0.1)":"scaleY(".concat(re,")"))}})]})};K.default=M;var y=(0,N.kc)(function(j){var T=j.css,h=j.token;return{container:{width:64,height:64,backgroundColor:"black",borderRadius:12,position:"relative",cursor:"pointer",overflow:"hidden",boxShadow:"15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)"},eye:{width:6,height:12,backgroundColor:"white",borderRadius:99,position:"absolute",top:16,transition:"transform 0.1s ease-out"},leftEye:{left:22},rightEye:{left:36},blinkingEye:{transition:"transform 0.05s ease-out"}}})},31295:function($e,K,e){"use strict";e.d(K,{Z:function(){return T}});var F=e(68400),m=e.n(F),N=e(67294),g=e(9053),b=e(56044),M=e(85893),y,j=(0,g.vJ)(y||(y=m()([`
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
`])),function(h){return h.theme.prefixCls},function(h){return h.theme.colorText},function(h){return h.theme.colorTextSecondary});function T(h){var f=(0,b.wv)(),E=f.getPrefixCls,v=E("welcome"),r=typeof h.logo=="string"?(0,M.jsx)("img",{className:v+"-logo",src:h.logo}):h.logo;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(j,{}),(0,M.jsxs)("div",{className:v,style:h.style,children:[r,(0,M.jsxs)("div",{children:[(0,M.jsx)("div",{className:v+"-title",children:h.title}),(0,M.jsx)("div",{className:v+"-desc",children:h.desc})]})]})]})}},64437:function($e,K,e){"use strict";e.d(K,{Z:function(){return v}});var F=e(97857),m=e.n(F),N=e(67294),g=e(68997),b=e(56044),M=e(38850),y=e(68400),j=e.n(y),T=e(9053),h,f=(0,T.vJ)(h||(h=j()([`
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
`])),function(n){return n.theme.prefixCls},function(n){var a=n.theme;return a.colorText},function(n){var a=n.theme;return a.colorTextSecondary},function(n){var a=n.theme;return a.colorFillQuaternary},function(n){var a=n.theme;return a.colorText},function(n){var a=n.theme;return a.colorFillTertiary}),E=e(85893);function v(n){var a=n.greeting,S=n.avatar,l=n.description,s=n.prompts,A=n.onClick,i=(0,b.wv)().getPrefixCls("welcome-prompts");return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{}),(0,E.jsxs)("div",{className:i,children:[S&&(typeof S=="string"?(0,E.jsx)(g.Z,{src:S,shape:"square",size:64}):S),a&&(0,E.jsx)("div",{className:"".concat(i,"-greeting"),children:a}),l&&(0,E.jsx)("div",{className:"".concat(i,"-description"),children:l}),(s==null?void 0:s.length)>0&&(0,E.jsx)("div",{className:"".concat(i,"-prompts"),children:s.map(function(L){var q=typeof L=="string"?{label:L,value:L}:m()(m()({},L),{},{label:L.label||L.value,value:L.value});return(0,E.jsx)(r,{prompt:q,prefixCls:i,onClick:A},q.value)})})]})]})}function r(n){var a=n.prefixCls;return(0,E.jsxs)("div",{className:"".concat(a,"-prompt"),onClick:function(){var l;return(l=n.onClick)===null||l===void 0?void 0:l.call(n,n.prompt.value)},children:[(0,E.jsx)("img",{className:"".concat(a,"-prompt-icon"),src:"https://img.alicdn.com/imgextra/i3/O1CN01822qqr1PVyaK7MYtn_!!6000000001847-2-tps-40-40.png",alt:""}),(0,E.jsx)("span",{className:"".concat(a,"-prompt-label"),children:n.prompt.label}),(0,E.jsx)(M.Z,{})]})}},43601:function($e,K,e){"use strict";e.r(K),e.d(K,{AIGC:function(){return ae.Z},Accordion:function(){return i.Z},AgentScopeRuntimeWebUI:function(){return n.Z},AssetsPreview:function(){return k.Z},Attachments:function(){return q.Z},Bubble:function(){return Z.Z},ChatAnywhere:function(){return j.ZP},ChatAnywhereInputContext:function(){return A.jK},ChatAnywhereSessionsContext:function(){return s.Af},ChatInput:function(){return x.Z},ConfigProvider:function(){return F.ZP},Conversations:function(){return W.Z},CustomCardsContext:function(){return N.NR},CustomCardsProvider:function(){return N.xy},DeepThink:function(){return L.Z},DeepThinking:function(){return L.Z},DefaultCards:function(){return r},DeviceAction:function(){return re.Z},Disclaimer:function(){return z.Z},GenerativeUISandbox:function(){return oe.Z},HistoryPanel:function(){return W.Z},ImageGenerator:function(){return C.Z},Markdown:function(){return H.Z},Mermaid:function(){return w.Z},OperateCard:function(){return G.Z},Process:function(){return i.Z},Rag:function(){return _e.Sn},Sender:function(){return x.Z},SparkChatProvider:function(){return g.ZP},StatusCard:function(){return p.Z},Stream:function(){return M.Z},Thinking:function(){return _e.BI},TodoList:function(){return _e.B4},ToolCall:function(){return _e.x4},WebSearch:function(){return _e.fz},Welcome:function(){return de.Z},WelcomePrompts:function(){return ue.Z},createCard:function(){return y.L},sleep:function(){return pe.Z},useChatAnywhere:function(){return T.TQ},useChatAnywhereInput:function(){return A.vB},useChatAnywhereSessions:function(){return s.Ct},useChatAnywhereSessionsState:function(){return s._Q},useCustomCardsContext:function(){return N.HJ},useGlobalContext:function(){return b.bN},useInput:function(){return h.G},useMessages:function(){return f.y},useProviderContext:function(){return g.wv},useSessionList:function(){return E.x},uuid:function(){return v.Z},version:function(){return m.Z}});var F=e(55839),m=e(66366),N=e(83962),g=e(56044),b=e(92049),M=e(7354),y=e(50130),j=e(29041),T=e(76289),h=e(37254),f=e(4421),E=e(61316),v=e(88773),r=e(73420),n=e(13224),a=e(22863),S={};for(var l in a)["default","ConfigProvider","version","CustomCardsContext","CustomCardsProvider","SparkChatProvider","useCustomCardsContext","useGlobalContext","useProviderContext","Stream","createCard","ChatAnywhere","useChatAnywhere","useInput","useMessages","useSessionList","uuid","DefaultCards","AgentScopeRuntimeWebUI","useChatAnywhereSessions","useChatAnywhereSessionsState","ChatAnywhereSessionsContext","ChatAnywhereInputContext","useChatAnywhereInput","Accordion","Process","DeepThink","DeepThinking","Attachments","Bubble","Conversations","HistoryPanel","DeviceAction","Disclaimer","ImageGenerator","Mermaid","OperateCard","ChatInput","Sender","StatusCard","sleep","Welcome","Markdown","AIGC","AssetsPreview","GenerativeUISandbox","WelcomePrompts"].indexOf(l)<0&&(S[l]=function(Ye){return a[Ye]}.bind(0,l));e.d(K,S);var s=e(68870),A=e(16423),i=e(487),L=e(14082),q=e(50993),Z=e(46624),W=e(9368),re=e(55031),z=e(10325),C=e(2534),w=e(12181),G=e(31382),_e=e(56809),x=e(66672),p=e(70770),pe=e(32116),de=e(31295),H=e(66109),ae=e(86578),k=e(34487),oe=e(80115),ue=e(64437)}}]);
