(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1997],{86578:function(ze,F,e){"use strict";e.d(F,{Z:function(){return de}});var $=e(97857),m=e.n($),N=e(9783),g=e.n(N),b=e(13769),M=e.n(b),y=e(67294),j=e(93967),D=e.n(j),h=e(56044),u=e(66672),E=e(50993),f=e(44294),r=e(12624),n=e(41154),a=e(68400),A=e.n(a),l=e(9053),o,O=(0,l.vJ)(o||(o=A()([`
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
`])),function(X){return X.theme.prefixCls},function(X){return X.theme.prefixCls},function(X){return X.theme.prefixCls},function(X){return X.theme.prefixCls},function(X){return X.theme.borderRadius},function(X){return X.theme.colorBorderSecondary},function(X){return X.theme.colorBgBase},function(X){return X.theme.colorText},function(X){return X.theme.colorText}),i=e(85893),L=["className","icon"],ne=n.Z.Dragger,K=function(se){var k=se.className,re=se.icon,ce=M()(se,L),Ge=(0,h.wv)(),_e=Ge.getPrefixCls,Ke=_e("media-upload");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(O,{}),(0,i.jsx)(ne,m()(m()({showUploadList:!1,className:D()(Ke,k)},ce),{},{children:(0,i.jsxs)("div",{className:D()("".concat(Ke,"-thumbnail")),children:[(0,i.jsx)("div",{className:D()("".concat(Ke,"-thumbnail-gradient"))}),(0,i.jsxs)("div",{className:D()("".concat(Ke,"-thumbnail-content")),children:[re||(0,i.jsx)(r.Z,{className:D()("".concat(Ke,"-thumbnail-icon"))}),se.maxCount>1&&(0,i.jsxs)("div",{className:D()("".concat(Ke,"-thumbnail-count")),children:[se.fileList.length,"/",se.maxCount]})]})]})}))]})},z=K,oe,Q=(0,l.vJ)(oe||(oe=A()([`
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
`])),function(X){return X.theme.prefixCls},function(X){return X.theme.colorText},function(X){return X.theme.colorTextTertiary}),C=function(se){var k=se.className,re=se.title,ce=se.description,Ge=(0,h.wv)(),_e=Ge.getPrefixCls,Ke=_e("media-info"),mn=!!re||!!ce;return mn?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Q,{}),(0,i.jsxs)("div",{className:D()(Ke,k),children:[re&&(0,i.jsx)("div",{className:D()("".concat(Ke,"-title")),children:re}),ce&&(0,i.jsx)("div",{className:D()("".concat(Ke,"-description")),children:ce})]})]}):null},w=C,V,Ce=(0,l.vJ)(V||(V=A()([`
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
`])),function(X){return X.theme.prefixCls},function(X){return X.theme.colorBorderSecondary},function(X){return X.theme.prefixCls},function(X){return X.theme.prefixCls},function(X){return X.theme.prefixCls},function(X){return X.theme.prefixCls}),x=["title","description","maxCount"],p=function(se){var k=se.className,re=se.onUpload,ce=re===void 0?[]:re,Ge=se.attachedFiles,_e=Ge===void 0?[[]]:Ge,Ke=se.onFileChange,mn=(0,h.wv)(),hn=mn.getPrefixCls,vn=(0,y.useContext)(f.a),nn=vn.focus,Ne=vn.enableFocusExpand,Cn=hn("aigc-sender-header"),U=(0,y.useMemo)(function(){return _e.flat().length>0?!0:ce.length<=0?!1:!!(nn||!Ne)},[ce,_e,Ne,nn]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ce,{}),(0,i.jsx)(u.Z.Header,{closable:!1,open:U,children:(0,i.jsx)("div",{className:D()(Cn,k),tabIndex:0,children:ce==null?void 0:ce.map(function(be,Ue){var Je=be.title,B=be.description,W=be.maxCount,Pe=W===void 0?1:W,xe=M()(be,x),fe=_e[Ue]||[];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(z,m()({className:D()(g()({},"".concat(Cn,"-upload-hidden"),fe.length>=Pe)),maxCount:Pe,fileList:fe,onChange:function(Me){be.beforeUpload&&Me.file.status&&Ke(Ue,Me.fileList),be.beforeUpload||Ke(Ue,Me.fileList)},showUploadList:!1},xe),"upload-".concat(Ue)),fe.length>0&&(0,i.jsx)(E.Z,{items:fe,onChange:function(Me){return Ke(Ue,Me.fileList)}},"attachments-".concat(Ue)),Pe===1&&(0,i.jsx)(w,{title:Je,description:B},"info-".concat(Ue))]})})})})]})},pe=p,de={SenderHeader:pe,Info:w,Upload:z}},487:function(ze,F,e){"use strict";e.d(F,{Z:function(){return Ce}});var $=e(9783),m=e.n($),N=e(97857),g=e.n(N),b=e(5574),M=e.n(b),y=e(67294),j=e(93967),D=e.n(j),h=e(56044),u=e(85893);function E(x){var p=(0,h.wv)(),pe=p.getPrefixCls,de=pe("accordion-content-body");return(0,u.jsxs)("div",{className:de,children:[x.headerLeft||x.headerRight?(0,u.jsxs)("div",{className:"".concat(de,"-header"),children:[x.headerLeft,(0,u.jsx)("div",{style:{flex:1}}),x.headerRight]}):null,(0,u.jsx)("div",{className:"".concat(de,"-body"),children:x.children})]})}var f=e(9361);function r(x){var p=(0,h.wv)(),pe=p.theme,de=p.getPrefixCls,X=(pe==null?void 0:pe.algorithm)===f.Z.darkAlgorithm,se=de("accordion-soft-light-title");return(0,u.jsx)("div",{className:se,style:X?{}:{color:"rgba(38, 36, 76, 0.88)"},children:x.children})}var n=e(68400),a=e.n(n),A=e(9053),l,o=(0,A.vJ)(l||(l=a()([`
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
`])),function(x){return x.theme.prefixCls},function(x){return x.theme.colorSuccess},function(x){return x.theme.prefixCls},function(x){return x.theme.colorError},function(x){return x.theme.colorTextSecondary},function(x){return x.theme.colorBgBase},function(x){return x.theme.borderRadiusLG},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.colorBorder},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.colorBgBase},function(x){return x.theme.colorText},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.colorFillTertiary},function(x){return x.theme.prefixCls},function(x){return x.theme.colorTextSecondary},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.prefixCls},function(x){return x.theme.prefixCls},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.colorBorderSecondary},function(x){return x.theme.colorFillTertiary},function(x){return x.theme.colorText},function(x){return x.theme.colorBgBase}),O=e(40443),i=e(89034),L=e(9343),ne=e(36674),K=e(9838),z=e(28387),oe=e(16592);function Q(x){var p=(0,h.wv)(),pe=p.getPrefixCls,de=pe("accordion-group"),X=y.useState(x.defaultOpen),se=M()(X,2),k=se[0],re=se[1],ce=x.open!==void 0?x.open:k,Ge=x.inline?"close":ce?"open":"close",_e=(0,y.useMemo)(function(){if(x.icon)return x.icon;if(x.status==="generating")return(0,u.jsx)(O.Z,{className:"".concat(de,"-icon-loading"),spin:!0});if(x.status==="finished")return(0,u.jsx)(i.Z,{className:"".concat(de,"-icon-success")});if(x.status==="interrupted")return(0,u.jsx)(L.Z,{});if(x.status==="error")return(0,u.jsx)(ne.Z,{className:"".concat(de,"-icon-error")})},[x.status,x.icon]),Ke=(0,y.useMemo)(function(){return x.steps?x.steps.map(function(mn,hn){var vn=hn===0,nn=hn===x.steps.length-1;return(0,u.jsx)(Q,g()(g()({},mn),{},{isFirst:vn,isLast:nn}),mn.id||hn)}):x.children},[x.steps,x.children]);return(0,u.jsxs)("div",{className:D()("".concat(de),"".concat(de,"-").concat(Ge)),children:[(0,u.jsxs)("div",{className:D()("".concat(de,"-header"),"".concat(de,"-header-").concat(Ge)),onClick:function(){return Ke&&x.open===void 0&&re(!k)},children:[_e?(0,u.jsx)("div",{className:D()("".concat(de,"-header-icon"),m()(m()(m()({},"".concat(de,"-header-icon-line"),x.iconLine),"".concat(de,"-header-icon-first"),x.isFirst),"".concat(de,"-header-icon-last"),x.isLast&&Ge==="close"||x.level)),children:_e}):null,(0,u.jsx)("div",{children:x.title}),Ke&&(0,u.jsx)("div",{className:D()("".concat(de,"-header-arrow")),children:ce?(0,u.jsx)(z.Z,{}):(0,u.jsx)(K.Z,{})}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{style:{flex:1}}),x.rightChildren]})]}),(0,u.jsx)(w,{prefixCls:de,stateOpen:ce,status:Ge,inline:x.inline,content:Ke,bodyStyle:x.bodyStyle,level:x.level})]})}var C={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function w(x){var p=(0,y.useRef)(null);if(!x.content)return null;var pe=x.prefixCls,de=x.stateOpen,X=x.inline,se=x.bodyStyle,k=x.level;return(0,u.jsx)(oe.ZP,{nodeRef:p,in:de,timeout:300,children:function(ce){return(0,u.jsx)("div",{style:g()(g()(g()({},se),k?{marginTop:0}:{}),{},{transition:"opacity ".concat(300,"ms ease-in-out")},C[ce]),className:D()("".concat(pe,"-body"),"".concat(pe,"-body-").concat(de?"open":"close"),m()({},"".concat(pe,"-body-inline"),X)),children:x.content})}})}function V(x){var p=x.level,pe=p===void 0?1:p,de=x.isFirst,X=de===void 0?!0:de,se=x.isLast,k=se===void 0?!0:se;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{}),(0,u.jsx)(Q,g()(g()({},x),{},{level:pe,isFirst:X,isLast:k}))]})}V.BodyContent=E,V.SoftLightTitle=r;var Ce=V},14082:function(ze,F,e){"use strict";e.d(F,{Z:function(){return y}});var $=e(487),m=e(56044),N=e(9361),g=e(93967),b=e.n(g),M=e(85893);function y(j){var D=(0,m.wv)(),h=D.theme,u=D.getPrefixCls,E=u("accordion-deep-thinking"),f=(h==null?void 0:h.algorithm)===N.Z.darkAlgorithm,r=(0,M.jsx)("img",{style:{display:"block",width:16,height:16,filter:f?"invert(1)  brightness(100%) saturate(0%)":""},src:"https://img.alicdn.com/imgextra/i2/O1CN01QZgWRv1I4JM0BAZ9O_!!6000000000839-54-tps-56-56.apng"}),n=j.title||"Deep thinking";j.loading&&(n+="...");var a=j.loading?(0,M.jsx)($.Z.SoftLightTitle,{children:n}):n,A=j.maxHeight?{maxHeight:j.maxHeight,overflowY:"auto"}:{},l=j.defaultOpen!==void 0?j.defaultOpen:j.autoCloseOnFinish&&!j.loading?!1:void 0;return(0,M.jsx)($.Z,{title:a,status:j.loading?"generating":"finished",icon:j.loading?r:null,defaultOpen:l,open:j.open,bodyStyle:A,inline:!0,children:(0,M.jsx)("div",{className:b()(E,j.className),children:j.content||"..."})})}},13224:function(ze,F,e){"use strict";e.d(F,{Z:function(){return lt}});var $=e(97857),m=e.n($),N=e(9783),g=e.n(N),b=e(56044),M=e(68400),y=e.n(M),j=e(9053),D,h=(0,j.vJ)(D||(D=y()([`
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
`])),function(d){return d.theme.prefixCls},function(d){return d.theme.colorBgBase},function(d){return d.theme.prefixCls},function(d){return d.theme.colorBgBase},function(d){return d.theme.prefixCls},function(d){return d.theme.colorFillTertiary},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls}),u=e(93967),E=e.n(u),f=e(7906),r=e(67294),n=e(15009),a=e.n(n),A=e(99289),l=e.n(A),o=e(5574),O=e.n(o),i=e(66672),L=e(10325),ne=e(79785),K=e(16423),z=e(19632),oe=e.n(z),Q=e(13769),C=e.n(Q),w=e(41154),V=e(64057),Ce=e(81644),x=e(50993),p=e(85893),pe=["trigger"];function de(d,P){var v=(0,r.useState)([]),_=O()(v,2),R=_[0],Z=_[1],J=(0,r.useRef)([]);J.current=R;var Te=(0,r.useCallback)(function(){return J.current},[]),Ee=d||{},le=Ee.trigger,ye=C()(Ee,pe),ke=(0,r.useRef)(0),Qe=(0,r.useCallback)(function(je){if(ye!=null&&ye.customRequest){var Ae=je.type||"",we=je.name||"";if(ye.accept){var on=ye.accept.split(",").some(function(Le){var ln=Le.trim();if(!ln)return!1;if(ln.startsWith("."))return we.toLowerCase().endsWith(ln.toLowerCase());if(ln==="*/*")return!0;if(ln.includes("*")){var fn=ln.split("/"),jn=O()(fn,1),Un=jn[0],Hn=Ae.split("/"),Zn=O()(Hn,1),st=Zn[0];return Un===st}return Ae===ln});if(!on)return}if(!(ye.maxCount&&J.current.length>=ye.maxCount)){var ie=function(){var ln=we.match(/\.([^.]+)$/);if(ln)return ln[1].toLowerCase();var fn=Ae.match(/\/([^/+]+)/);return fn?fn[1].toLowerCase():"bin"},te="paste-".concat(Date.now(),"-").concat(ke.current++),yn={uid:te,name:we||"pasted-".concat(Date.now(),".").concat(ie()),size:je.size,type:Ae,status:"uploading",percent:0,originFileObj:je};if(Z(function(Le){return[].concat(oe()(Le),[yn])}),Ae.startsWith("image/")){var an=new FileReader;an.onload=function(Le){var ln,fn=(ln=Le.target)===null||ln===void 0?void 0:ln.result;typeof fn=="string"&&Z(function(jn){return jn.map(function(Un){return Un.uid===te?m()(m()({},Un),{},{thumbUrl:fn}):Un})})},an.readAsDataURL(je)}ye.customRequest({file:je,filename:"file",action:"",method:"POST",onSuccess:function(ln){Z(function(fn){return fn.map(function(jn){return jn.uid===te?m()(m()({},jn),{},{status:"done",response:ln,percent:100}):jn})})},onError:function(ln){Z(function(fn){return fn.map(function(jn){return jn.uid===te?m()(m()({},jn),{},{status:"error",error:ln}):jn})})},onProgress:function(ln){Z(function(fn){return fn.map(function(jn){return jn.uid===te?m()(m()({},jn),{},{percent:ln==null?void 0:ln.percent}):jn})})}},{defaultRequest:function(){}})}}},[ye==null?void 0:ye.customRequest,ye==null?void 0:ye.accept]);if(ye!=null&&ye.customRequest){var dn=(0,p.jsx)(w.Z,m()(m()({fileList:R,showUploadList:!1,onChange:function(Ae){Z(Ae.fileList)}},ye),{},{disabled:P==null?void 0:P.disabled,children:le?r.createElement(le,{disabled:P==null?void 0:P.disabled}):(0,p.jsx)(V.Z,{disabled:P==null?void 0:P.disabled,icon:(0,p.jsx)(Ce.Z,{}),bordered:!1})})),Se=(0,p.jsx)(i.Z.Header,{closable:!1,open:(R==null?void 0:R.length)>0,children:(0,p.jsx)(x.Z,{items:R,onChange:function(Ae){return Z(Ae.fileList)}})});return{fileList:R,getFileList:Te,setFileList:Z,handlePasteFile:Qe,uploadIconButton:dn,uploadFileListHeader:Se}}else return{enabled:!1,handlePasteFile:void 0}}function X(d){var P=(0,ne.Z)(""),v=O()(P,3),_=v[0],R=v[1],Z=v[2],J=(0,b.wv)().getPrefixCls("chat-anywhere-input"),Te=(0,f.Uk)(function(qe){return qe.sender}),Ee=(0,K.vB)(function(qe){return qe}),le=Te||{},ye=le.placeholder,ke=ye===void 0?"":ye,Qe=le.disclaimer,dn=Qe===void 0?"":Qe,Se=le.maxLength,je=le.beforeSubmit,Ae=je===void 0?function(){return Promise.resolve(!0)}:je,we=le.beforeUI,on=le.afterUI,ie=le.attachments,te=le.prefix,yn=le.allowSpeech,an=le.suggestions,Le=de(ie,{disabled:!!Ee.disabled}),ln=Le.getFileList,fn=Le.setFileList,jn=Le.handlePasteFile,Un=Le.uploadIconButton,Hn=Le.uploadFileListHeader,Zn=(0,r.useCallback)(l()(a()().mark(function qe(){var ft,ct;return a()().wrap(function(at){for(;;)switch(at.prev=at.next){case 0:return at.next=2,Ae();case 2:if(ft=at.sent,ft){at.next=5;break}return at.abrupt("return");case 5:ct=((ln==null?void 0:ln())||[]).filter(function(yt){var _t;return(_t=yt.response)===null||_t===void 0?void 0:_t.url}),d.onSubmit({query:Z(),fileList:ct}),R(""),fn&&fn([]);case 9:case"end":return at.stop()}},qe)})),[]),st=(0,r.useCallback)(function(){d.onCancel()},[]);return(0,p.jsxs)("div",{className:J,children:[(0,p.jsxs)("div",{className:"".concat(J,"-wrapper"),children:[we,(0,p.jsx)(i.Z,{loading:Ee.loading,disabled:Ee.disabled,placeholder:ke,value:_,prefix:(0,p.jsxs)(p.Fragment,{children:[Un,te]}),header:Hn,onChange:R,maxLength:Se,onSubmit:Zn,onCancel:st,allowSpeech:yn,onPasteFile:jn,suggestions:an}),on]}),dn?(0,p.jsx)(L.Z,{desc:dn}):(0,p.jsx)("div",{className:"".concat(J,"-blank")})]})}var se=e(50867),k=e(45953),re=e(59214),ce=e(68870),Ge=e(64437),_e=["render"];function Ke(d){var P=(0,f.Uk)(function(Ee){return Ee.welcome});if(!P)return null;var v=P.render,_=C()(P,_e);if(v)return P.render({greeting:P.greeting,avatar:P.avatar,description:P.description,prompts:P.prompts,onSubmit:d.onSubmit});var R=_.greeting,Z=_.avatar,J=_.prompts,Te=_.description;return(0,p.jsx)(Ge.Z,{greeting:R,avatar:Z,description:Te,prompts:J,onClick:function(le){return d.onSubmit({query:le})}})}function mn(d){var P,v=(0,re.useContextSelector)(k.ar,function(le){return le.messages}),_=r.useMemo(function(){return oe()(v||[]).reverse()},[v]),R=(0,b.wv)().getPrefixCls("chat-anywhere-message-list"),Z=(0,re.useContextSelector)(ce.Af,function(le){return le.currentSessionId}),J=(0,f.Uk)(function(le){var ye;return(ye=le.theme)===null||ye===void 0?void 0:ye.bubbleList}),Te=r.useRef(null),Ee=r.useRef(_.length);return r.useEffect(function(){if(_.length>Ee.current){var le;(le=Te.current)===null||le===void 0||le.scrollToBottom()}Ee.current=_.length},[_.length]),_.length===0?(0,p.jsx)("div",{className:E()(R,"".concat(R,"-welcome")),children:(0,p.jsx)(Ke,{onSubmit:d.onSubmit})}):(0,p.jsx)(se.Z.List,{ref:Te,pagination:(P=J==null?void 0:J.pagination)!==null&&P!==void 0?P:!0,order:"desc",classNames:{wrapper:R},items:_},Z)}var hn,vn=(0,j.vJ)(hn||(hn=y()([`
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
`])),function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls}),nn=e(32116),Ne=e(31119),Cn=e(88773),U=e(73935),be=e(12444),Ue=e.n(be),Je=e(72004),B=e.n(Je),W=function(d){return d.Created="created",d.InProgress="in_progress",d.Completed="completed",d.Canceled="canceled",d.Failed="failed",d.Rejected="rejected",d.Unknown="unknown",d}({}),Pe=function(d){return d.ASSISTANT="assistant",d.USER="user",d.SYSTEM="system",d}({}),xe=function(d){return d.MESSAGE="message",d.REASONING="reasoning",d.PLUGIN_CALL="plugin_call",d.PLUGIN_CALL_OUTPUT="plugin_call_output",d.FUNCTION_CALL="function_call",d.FUNCTION_CALL_OUTPUT="function_call_output",d.COMPONENT_CALL="component_call",d.COMPONENT_CALL_OUTPUT="component_call_output",d.MCP_LIST_TOOLS="mcp_list_tools",d.MCP_APPROVAL_REQUEST="mcp_approval_request",d.MCP_APPROVAL_RESPONSE="mcp_approval_response",d.MCP_CALL="mcp_call",d.MCP_CALL_OUTPUT="mcp_call_output",d.HEARTBEAT="heartbeat",d.ERROR="error",d}({}),fe=function(d){return d.TEXT="text",d.DATA="data",d.IMAGE="image",d.AUDIO="audio",d.VIDEO="video",d.FILE="file",d.REFUSAL="refusal",d}({}),Ie=function(){function d(){Ue()(this,d),g()(this,"data",void 0)}return B()(d,[{key:"isImageFile",value:function(v){return v.type.indexOf("image/")===0}},{key:"isVideoFile",value:function(v){return v.type.indexOf("video/")===0}},{key:"isAudioFile",value:function(v){return v.type.indexOf("audio/")===0}},{key:"buildImageContent",value:function(v){var _;return{type:fe.IMAGE,image_url:(_=v.response)===null||_===void 0?void 0:_.url,status:W.Created}}},{key:"buildTextContent",value:function(v){return{type:fe.TEXT,text:v,status:W.Created}}},{key:"buildVideoContent",value:function(v){var _;return{type:fe.VIDEO,video_url:(_=v.response)===null||_===void 0?void 0:_.url,status:W.Created}}},{key:"buildAudioContent",value:function(v){var _,R,Z;return{type:fe.AUDIO,audio_url:(_=v.response)===null||_===void 0?void 0:_.url,data:(R=v.response)===null||R===void 0?void 0:R.url,format:(Z=v.type)===null||Z===void 0?void 0:Z.replace("audio/",""),status:W.Created}}},{key:"buildFileContent",value:function(v){var _;return{type:fe.FILE,file_url:(_=v.response)===null||_===void 0?void 0:_.url,file_id:v.file_id,file_name:v.name,file_size:v.size,status:W.Created}}},{key:"handle",value:function(v){var _,R=this;this.data={input:[]};var Z=[this.buildTextContent(v.query)];return(_=v.fileList)!==null&&_!==void 0&&_.length&&v.fileList.forEach(function(J){R.isImageFile(J)?Z.push(R.buildImageContent(J)):R.isVideoFile(J)?Z.push(R.buildVideoContent(J)):R.isAudioFile(J)?Z.push(R.buildAudioContent(J)):Z.push(R.buildFileContent(J))}),this.data={input:[{role:"user",type:xe.MESSAGE,content:Z}]},this.data}},{key:"handleApproval",value:function(v){return this.data={input:v},this.data}}],[{key:"getHistoryMessages",value:function(v){return v.reduce(function(_,R){var Z;return(Z=R.cards)!==null&&Z!==void 0&&Z.length?_.concat(R.cards[0].data.input||R.cards[0].data.output):_},[])}}]),d}(),Me=Ie;function Ze(d){var P=d.currentQARef,v=(0,k.De)(),_=v.updateMessage,R=v.getMessages,Z=v.removeMessage,J=(0,r.useCallback)(function(ke){return P.current.abortController=new AbortController,P.current.request={id:(0,Cn.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new Me().handle(ke)}]},U.flushSync(function(){_(P.current.request)}),P.current.request},[P,_]),Te=(0,r.useCallback)(function(ke){return P.current.abortController=new AbortController,P.current.request={id:(0,Cn.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new Me().handleApproval(ke)}]},U.flushSync(function(){_(P.current.request)}),P.current.request},[P,_]),Ee=(0,r.useCallback)(function(){return P.current.response={id:(0,Cn.Z)(),role:"assistant",cards:[],msgStatus:"generating"},_(P.current.response),P.current.response},[P,_]),le=(0,r.useCallback)(function(){return Me.getHistoryMessages(R())},[R]),ye=(0,r.useCallback)(function(ke){U.flushSync(function(){Z({id:ke})})},[Z]);return{createRequestMessage:J,createApprovalMessage:Te,createResponseMessage:Ee,getHistoryMessages:le,updateMessage:_,removeMessageById:ye,getMessages:R}}var Oe=e(44987),Xe=e.n(Oe),Ve=e(7354),cn=e(64599),Be=e.n(cn),t=e(93513),Re=function(){function d(P){var v=P.id,_=P.status,R=P.created_at;Ue()(this,d),g()(this,"data",void 0),this.data={id:v,output:[],object:"response",status:_||W.Created,created_at:R||Date.now()}}return B()(d,[{key:"handleResponse",value:function(v){this.data=(0,t.produce)(this.data,function(_){v.output||(v.output=[]),Object.assign(_,v)})}},{key:"handleMessage",value:function(v){this.data=(0,t.produce)(this.data,function(_){_.output||(_.output=[]);var R=_.output.findIndex(function(J){return J.id===v.id});if(R>=0){var Z=_.output[R].content;Object.assign(_.output[R],v),(!v.content||v.content.length===0)&&(_.output[R].content=Z)}else _.output.push(v)})}},{key:"handleContent",value:function(v){this.data=(0,t.produce)(this.data,function(_){var R=_.output.find(function(J){return J.id===v.msg_id});if(!R){console.warn("Message not found for content:",v.msg_id);return}if(R.content||(R.content=[]),v.delta){var Z=R.content[R.content.length-1];Z&&Z.delta?v.type===fe.TEXT&&Z.type===fe.TEXT?Z.text+=v.text:v.type===fe.IMAGE?Z.image_url=v.image_url:v.type===fe.DATA&&(Z.data=v.data):R.content.push(v)}else R.content.length>0?Object.assign(R.content[R.content.length-1],v):R.content.push(v)})}},{key:"handleError",value:function(v){this.data=(0,t.produce)(this.data,function(_){_.status=W.Failed,_.output.push({status:W.Failed,type:xe.ERROR,content:[],id:(0,Cn.Z)(),role:"assistant",code:v.code,message:typeof v.message=="string"?v.message:JSON.stringify(v.message)})})}},{key:"handle",value:function(v){if(v.object==="response")this.handleResponse(v);else if(v.object==="message"){if(v.type===xe.HEARTBEAT)return this.data;this.handleMessage(v)}else v.object==="content"?this.handleContent(v):this.handleError(v);return this.data}},{key:"cancel",value:function(){return this.data=(0,t.produce)(this.data,function(v){d.maybeGenerating(v)&&(v.status=W.Canceled),v.output.forEach(function(_){d.maybeGenerating(_)&&(_.status=W.Canceled,_.content.forEach(function(R){d.maybeGenerating(R)&&(R.status=W.Canceled)}))})}),this.data}}],[{key:"mergeToolMessages",value:function(v){var _=new Map,R=[],Z=Be()(v),J;try{var Te=function(){var le,ye,ke=J.value;if(d.maybeToolInput(ke)&&(le=ke.content)!==null&&le!==void 0&&le.length){var Qe=ke.content[0],dn=Qe.data.call_id||Qe.data.name;_.set(dn,Qe),R.push(ke)}else if(d.maybeToolOutput(ke)&&(ye=ke.content)!==null&&ye!==void 0&&ye.length){var Se=ke.content[0],je=Se.data.call_id||Se.data.name,Ae=_.get(je);Ae&&(R=R.map(function(we){if(!d.maybeToolInput(we))return we;var on=we.content[0],ie=on.data.call_id||on.data.name;return ie===je?m()(m()({},ke),{},{content:[].concat(oe()(we.content),[Se])}):we}))}else R.push(ke)};for(Z.s();!(J=Z.n()).done;)Te()}catch(Ee){Z.e(Ee)}finally{Z.f()}return R}},{key:"maybeToolOutput",value:function(v){return[xe.FUNCTION_CALL_OUTPUT,xe.PLUGIN_CALL_OUTPUT,xe.COMPONENT_CALL_OUTPUT,xe.MCP_CALL_OUTPUT].includes(v.type)}},{key:"maybeToolInput",value:function(v){return[xe.FUNCTION_CALL,xe.PLUGIN_CALL,xe.COMPONENT_CALL,xe.MCP_CALL].includes(v.type)}},{key:"maybeGenerating",value:function(v){return[W.InProgress,W.Created].includes(v.status)}},{key:"maybeDone",value:function(v){return[W.Completed,W.Canceled,W.Failed].includes(v.status)}}]),d}(),We=Re;function tn(d){var P=d.currentQARef,v=d.updateMessage,_=d.getCurrentSessionId,R=d.onFinish,Z=(0,f.Uk)(function(ke){return ke.api}),J=(0,r.useRef)(Z);(0,r.useEffect)(function(){J.current=Z},[Z]);var Te=(0,r.useCallback)(function(){var ke=l()(a()().mark(function Qe(dn){var Se,je,Ae,we,on,ie,te,yn;return a()().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:Se=new We({id:"",status:W.Created,created_at:0}),je=!1,Ae=!1,Le.prev=3,on=Xe()(dn);case 5:return Le.next=7,on.next();case 7:if(!(je=!(ie=Le.sent).done)){Le.next=17;break}return te=ie.value,yn=Se.handle(te),P.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:yn}],v(P.current.response),Le.next=14,(0,nn.Z)(100);case 14:je=!1,Le.next=5;break;case 17:Le.next=23;break;case 19:Le.prev=19,Le.t0=Le.catch(3),Ae=!0,we=Le.t0;case 23:if(Le.prev=23,Le.prev=24,!(je&&on.return!=null)){Le.next=28;break}return Le.next=28,on.return();case 28:if(Le.prev=28,!Ae){Le.next=31;break}throw we;case 31:return Le.finish(28);case 32:return Le.finish(23);case 33:case"end":return Le.stop()}},Qe,null,[[3,19,23,33],[24,,28,32]])}));return function(Qe){return ke.apply(this,arguments)}}(),[]),Ee=(0,r.useCallback)(function(){var ke=l()(a()().mark(function Qe(dn){var Se,je,Ae,we,on,ie,te,yn,an,Le,ln,fn,jn,Un,Hn,Zn;return a()().wrap(function(qe){for(;;)switch(qe.prev=qe.next){case 0:if(Se=J.current,je=new We({id:"",status:W.Created,created_at:0}),dn.ok){qe.next=15;break}return qe.prev=3,qe.next=6,dn.json();case 6:Ae=qe.sent,we=je.handle({object:"message",type:xe.ERROR,content:[],id:"error",role:"assistant",status:W.Failed,code:String(dn.status),message:JSON.stringify(Ae)}),P.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:we}],qe.next=13;break;case 11:qe.prev=11,qe.t0=qe.catch(3);case 13:return R(),qe.abrupt("return");case 15:qe.prev=15,on=!1,ie=!1,qe.prev=18,yn=Xe()((0,Ve.Z)({readableStream:dn.body}));case 20:return qe.next=22,yn.next();case 22:if(!(on=!(an=qe.sent).done)){qe.next=39;break}if(Le=an.value,((ln=P.current.response)===null||ln===void 0?void 0:ln.msgStatus)!=="interrupted"){qe.next=30;break}return(jn=P.current.abortController)===null||jn===void 0||jn.abort(),Se.cancel&&Se.cancel({session_id:_()}),P.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:je.cancel()}],v(P.current.response),qe.abrupt("break",39);case 30:if(Un=J.current.responseParser||JSON.parse,Hn=Un(Le.data),Zn=je.handle(Hn),!(Zn.status!==W.Failed&&!((fn=Zn.output)!==null&&fn!==void 0&&(fn=fn[0])!==null&&fn!==void 0&&(fn=fn.content)!==null&&fn!==void 0&&fn.length))){qe.next=35;break}return qe.abrupt("continue",36);case 35:P.current.response&&(P.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Zn}],Zn.status===W.Completed||Zn.status===W.Failed?R():v(P.current.response));case 36:on=!1,qe.next=20;break;case 39:qe.next=45;break;case 41:qe.prev=41,qe.t1=qe.catch(18),ie=!0,te=qe.t1;case 45:if(qe.prev=45,qe.prev=46,!(on&&yn.return!=null)){qe.next=50;break}return qe.next=50,yn.return();case 50:if(qe.prev=50,!ie){qe.next=53;break}throw te;case 53:return qe.finish(50);case 54:return qe.finish(45);case 55:qe.next=60;break;case 57:qe.prev=57,qe.t2=qe.catch(15),console.error(qe.t2);case 60:case"end":return qe.stop()}},Qe,null,[[3,11],[15,57],[18,41,45,55],[46,,50,54]])}));return function(Qe){return ke.apply(this,arguments)}}(),[_,P,v,R]),le=(0,r.useCallback)(function(){var ke=l()(a()().mark(function Qe(dn,Se){var je,Ae,we,on,ie,te;return a()().wrap(function(an){for(;;)switch(an.prev=an.next){case 0:if(Ae=J.current,we=Ae.enableHistoryMessages,on=we===void 0?!1:we,ie=(je=P.current.abortController)===null||je===void 0?void 0:je.signal,an.prev=3,!Ae.fetch){an.next=10;break}return an.next=7,Ae.fetch({input:dn,biz_params:Se,signal:ie});case 7:an.t0=an.sent,an.next=13;break;case 10:return an.next=12,fetch(Ae.baseURL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(Ae.token||"")},body:JSON.stringify({input:on?dn:dn.slice(-1),session_id:_(),stream:!0,biz_params:Se}),signal:ie});case 12:an.t0=an.sent;case 13:te=an.t0,an.next=18;break;case 16:an.prev=16,an.t1=an.catch(3);case 18:if(!(te&&te.body)){an.next=21;break}return an.next=21,Ee(te);case 21:case"end":return an.stop()}},Qe,null,[[3,16]])}));return function(Qe,dn){return ke.apply(this,arguments)}}(),[_,P,Ee]),ye=(0,r.useCallback)(function(){var ke=l()(a()().mark(function Qe(dn){var Se,je,Ae,we;return a()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:if(je=J.current,je.reconnect){ie.next=3;break}return ie.abrupt("return");case 3:return Ae=(Se=P.current.abortController)===null||Se===void 0?void 0:Se.signal,ie.prev=4,ie.next=7,je.reconnect({session_id:dn,signal:Ae});case 7:we=ie.sent,ie.next=12;break;case 10:ie.prev=10,ie.t0=ie.catch(4);case 12:if(!(we&&we.body)){ie.next=15;break}return ie.next=15,Ee(we);case 15:case"end":return ie.stop()}},Qe,null,[[4,10]])}));return function(Qe){return ke.apply(this,arguments)}}(),[P,Ee]);return{request:le,reconnect:ye,mockRequest:Te}}function c(){var d=(0,ce.Ct)(),P=d.createSession,v=d.updateSession,_=d.getCurrentSessionId,R=(0,r.useCallback)(function(){var Te=l()(a()().mark(function Ee(le){return a()().wrap(function(ke){for(;;)switch(ke.prev=ke.next){case 0:if(_()){ke.next=3;break}return ke.next=3,P({name:le});case 3:case"end":return ke.stop()}},Ee)}));return function(Ee){return Te.apply(this,arguments)}}(),[_,P]),Z=(0,r.useCallback)(function(){var Te=l()(a()().mark(function Ee(le,ye){return a()().wrap(function(Qe){for(;;)switch(Qe.prev=Qe.next){case 0:if(ye.length!==0){Qe.next=3;break}return Qe.next=3,v({id:_(),name:le});case 3:case"end":return Qe.stop()}},Ee)}));return function(Ee,le){return Te.apply(this,arguments)}}(),[_,v]),J=(0,r.useCallback)(function(){var Te=l()(a()().mark(function Ee(le){return a()().wrap(function(ke){for(;;)switch(ke.prev=ke.next){case 0:return ke.next=2,v({id:_(),messages:le});case 2:case"end":return ke.stop()}},Ee)}));return function(Ee){return Te.apply(this,arguments)}}(),[_,v]);return{ensureSession:R,updateSessionName:Z,syncSessionMessages:J,getCurrentSessionId:_}}function q(){var d=(0,re.useContextSelector)(K.jK,function(Se){return Se.setLoading}),P=(0,re.useContextSelector)(ce.Af,function(Se){return Se.currentSessionId}),v=(0,r.useRef)({}),_=Ze({currentQARef:v}),R=c(),Z=(0,r.useCallback)(function(){var Se=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished";v.current.response&&(v.current.response.msgStatus=Se,d(!1),U.flushSync(function(){_.updateMessage(v.current.response)}),R.syncSessionMessages(_.getMessages()))},[d,_,R]),J=tn({currentQARef:v,updateMessage:_.updateMessage,getCurrentSessionId:R.getCurrentSessionId,onFinish:function(){return Z("finished")}}),Te=J.request,Ee=J.reconnect,le=(0,r.useCallback)(function(){var Se=l()(a()().mark(function je(Ae){var we,on;return a()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.next=2,R.ensureSession(Ae.query);case 2:if(we=_.getMessages(),!R.getCurrentSessionId()){te.next=6;break}return te.next=6,R.updateSessionName(Ae.query,we);case 6:return _.createRequestMessage(Ae),d(!0),te.next=10,(0,nn.Z)(100);case 10:return _.createResponseMessage(),on=_.getHistoryMessages(),te.next=14,R.syncSessionMessages(_.getMessages());case 14:return te.next=16,Te(on,Ae.biz_params);case 16:case"end":return te.stop()}},je)}));return function(je){return Se.apply(this,arguments)}}(),[_,R,Te]),ye=(0,r.useCallback)(function(){var Se=l()(a()().mark(function je(Ae){var we,on;return a()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return we=Ae.input,_.createApprovalMessage(we),d(!0),te.next=5,(0,nn.Z)(100);case 5:return _.createResponseMessage(),on=_.getHistoryMessages(),te.next=9,R.syncSessionMessages(_.getMessages());case 9:return te.next=11,Te(on);case 11:case"end":return te.stop()}},je)}));return function(je){return Se.apply(this,arguments)}}(),[_,R,Te]),ke=(0,r.useCallback)(function(){Z("interrupted")},[Z]),Qe=(0,r.useCallback)(function(){var Se=l()(a()().mark(function je(Ae){var we;return a()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return d(!0),_.removeMessageById(Ae),v.current.abortController=new AbortController,_.createResponseMessage(),we=_.getHistoryMessages(),ie.next=7,Te(we);case 7:case"end":return ie.stop()}},je)}));return function(je){return Se.apply(this,arguments)}}(),[_,Te]),dn=(0,r.useCallback)(function(){var Se=l()(a()().mark(function je(Ae){var we,on;return a()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return v.current.abortController=new AbortController,d(!0),_.createResponseMessage(),te.next=5,Ee(Ae);case 5:((we=v.current.response)===null||we===void 0?void 0:we.msgStatus)==="generating"&&(d(!1),(on=v.current.response)!==null&&on!==void 0&&on.id&&_.removeMessageById(v.current.response.id),v.current.response=void 0);case 6:case"end":return te.stop()}},je)}));return function(je){return Se.apply(this,arguments)}}(),[_,Ee,d]);return(0,r.useEffect)(function(){var Se;(Se=v.current.abortController)===null||Se===void 0||Se.abort(),v.current={request:void 0,response:void 0,abortController:void 0}},[P]),(0,Ne.Z)({type:"handleReconnect",callback:function(){var Se=l()(a()().mark(function Ae(we){return a()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,dn(we.detail.session_id);case 2:case"end":return ie.stop()}},Ae)}));function je(Ae){return Se.apply(this,arguments)}return je}()},[dn]),(0,Ne.Z)({type:"handleReplace",callback:function(){var Se=l()(a()().mark(function Ae(we){return a()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,Qe(we.detail.id);case 2:case"end":return ie.stop()}},Ae)}));function je(Ae){return Se.apply(this,arguments)}return je}()}),(0,Ne.Z)({type:"handleSubmit",callback:function(){var Se=l()(a()().mark(function Ae(we){return a()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,le(we.detail);case 2:case"end":return ie.stop()}},Ae)}));function je(Ae){return Se.apply(this,arguments)}return je}()},[le]),(0,Ne.Z)({type:"handleApproval",callback:function(){var Se=l()(a()().mark(function Ae(we){return a()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,ye(we.detail);case 2:case"end":return ie.stop()}},Ae)}));function je(Ae){return Se.apply(this,arguments)}return je}()},[ye]),{handleSubmit:le,handleCancel:ke}}function T(){var d=(0,b.wv)().getPrefixCls("chat-anywhere-chat"),P=q(),v=P.handleSubmit,_=P.handleCancel;return(0,ce.Kt)(),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(vn,{}),(0,p.jsxs)("div",{className:d,children:[(0,p.jsx)(mn,{onSubmit:v}),(0,p.jsx)(X,{onCancel:_,onSubmit:v})]})]})}var H=e(21403),I=e(67392),G=e(13660),Y=e(12624),ge=e(50287),ve=e(9368),s=(0,r.createContext)({collapsed:!1,toggleCollapsed:function(){}});function S(d){var P=(0,r.useState)(!1),v=O()(P,2),_=v[0],R=v[1],Z=(0,r.useCallback)(function(){R(function(Te){return!Te})},[]),J=(0,r.useMemo)(function(){return{collapsed:_,toggleCollapsed:Z}},[_,Z]);return(0,p.jsx)(s.Provider,{value:J,children:d.children})}function ee(){var d=(0,r.useContext)(s),P=d.collapsed,v=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),_=(0,f.Uk)(function(R){var Z;return(Z=R.theme)===null||Z===void 0?void 0:Z.leftHeader})||{};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"".concat(v),children:[r.isValidElement(_)?_:(0,p.jsx)(me,{}),(0,p.jsxs)("div",{className:"".concat(v,"-content"),style:{display:P?"none":"flex"},children:[(0,p.jsx)(ue,{}),(0,p.jsx)(De,{})]})]})})}function me(d){var P=d.className,v=(0,f.Uk)(function(dn){var Se;return(Se=dn.theme)===null||Se===void 0?void 0:Se.leftHeader})||{},_=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),R=(0,r.useContext)(s),Z=R.toggleCollapsed,J=R.collapsed,Te=(0,f.Uk)(function(dn){return dn.session.multiple}),Ee=v,le=Ee.logo,ye=le===void 0?"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png":le,ke=Ee.title,Qe=ke===void 0?"Runtime WebUI":ke;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:E()("".concat(_,"-header"),P),children:[(0,p.jsxs)("div",{className:"".concat(_,"-header-left"),children:[ye&&(0,p.jsx)("img",{src:ye,alt:"logo",height:32}),(0,p.jsx)("span",{children:Qe})]}),Te&&(0,p.jsx)(V.Z,{className:"".concat(_,"-header-collapse"),bordered:!1,icon:J?(0,p.jsx)(G.Z,{}):(0,p.jsx)(I.Z,{}),onClick:Z})]})})}function ue(d){var P=(0,re.useContextSelector)(K.jK,function(Te){return Te.loading}),v=(0,ce.Ct)(),_=v.createSession,R=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),Z=(0,r.useContext)(s),J=Z.toggleCollapsed;return(0,p.jsx)("div",{className:"".concat(R,"-adder"),style:d.style,children:(0,p.jsx)(H.Z,{block:!0,type:"primary",icon:(0,p.jsx)(Y.Z,{}),disabled:!!P,onClick:l()(a()().mark(function Te(){return a()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:return le.next=2,_();case 2:d.narrowMode&&J();case 3:case"end":return le.stop()}},Te)})),children:"New Chat"})})}function De(d){var P=(0,b.wv)().getPrefixCls("chat-anywhere-sessions"),v=(0,re.useContextSelector)(ce.Af,function(ye){return ye.sessions}),_=(0,ce.Ct)(),R=_.changeCurrentSessionId,Z=_.removeSession,J=(0,re.useContextSelector)(ce.Af,function(ye){return ye.currentSessionId}),Te=(0,r.useContext)(s),Ee=Te.toggleCollapsed,le=(0,r.useMemo)(function(){return v.map(function(ye){return{key:ye.id,label:ye.name||"New Chat"}})},[v]);return(0,p.jsx)("div",{className:"".concat(P,"-list"),style:d.style,children:(0,p.jsx)(ve.Z,{items:le,menu:[{key:"delete",icon:(0,p.jsx)(ge.Z,{}),danger:!0,onClick:function(){var ye=l()(a()().mark(function Qe(dn){return a()().wrap(function(je){for(;;)switch(je.prev=je.next){case 0:return je.next=2,Z({id:dn.key});case 2:return je.abrupt("return",je.sent);case 3:case"end":return je.stop()}},Qe)}));function ke(Qe){return ye.apply(this,arguments)}return ke}()}],activeKey:J,onActiveChange:function(ke){R(ke),d.narrowMode&&Ee()}})})}var ae,$e=(0,j.vJ)(ae||(ae=y()([`

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
`])),function(d){return d.theme.prefixCls},function(d){return d.theme.prefixCls}),Fe=e(85265);function he(){var d=(0,b.wv)().getPrefixCls("chat-anywhere"),P=(0,f.Uk)(function(Te){return Te.theme}),v=P.narrowMode,_=P.rightHeader,R=(0,r.useContext)(s),Z=R.toggleCollapsed,J=R.collapsed;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)($e,{}),(0,p.jsxs)("div",{className:"".concat(d,"-layout-right-header"),children:[v?(0,p.jsx)(me,{className:"".concat(d,"-default-header-inner")}):null,_&&(0,p.jsx)("div",{className:"".concat(d,"-default-header-right"),children:_})]}),v&&(0,p.jsx)(Fe.Z,{width:"80vw",styles:{body:{padding:0}},open:J,onClose:Z,title:null,closable:!1,placement:"left",children:(0,p.jsxs)("div",{className:"".concat(d,"-sessions"),children:[(0,p.jsx)(De,{narrowMode:!0}),(0,p.jsx)(ue,{narrowMode:!0})]})})]})}function Ye(d,P){var v=(0,k.De)(),_=(0,re.useContextSelector)(K.jK,function(R){return R.setDisabled});return r.useImperativeHandle(P,function(){return{messages:v,input:{setDisabled:_,submit:function(Z){var J=Z.query,Te=Z.fileList,Ee=Z.biz_params;(0,Ne.j)({type:"handleSubmit",data:{query:J,fileList:Te,biz_params:Ee}})}}}},[]),null}var Pn=(0,r.forwardRef)(Ye);function En(d,P){var v=d.className,_=(0,b.wv)().getPrefixCls("chat-anywhere-layout"),R=(0,f.Uk)(function(Qe){return Qe.theme.narrowMode}),Z=(0,f.Uk)(function(Qe){return Qe.theme.background}),J=(0,f.Uk)(function(Qe){return Qe.theme.rightHeader}),Te=(0,f.Uk)(function(Qe){return{session:Qe.session}}),Ee=Te.session,le=(0,r.useContext)(s),ye=le.collapsed,ke=!R&&Ee&&Ee.multiple&&!Ee.hideBuiltInSessionList;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h,{}),(0,p.jsxs)("div",{className:E()("".concat(_),v),children:[ke&&(0,p.jsx)("div",{className:E()("".concat(_,"-left"),g()({},"".concat(_,"-left-collapsed"),ye)),children:(0,p.jsx)(ee,{})}),(0,p.jsxs)("div",{className:E()("".concat(_,"-right"),g()({},"".concat(_,"-right-has-header"),!!J)),style:{background:Z},children:[!!J&&(0,p.jsx)(he,{}),(0,p.jsx)(T,{})]})]}),(0,p.jsx)(Pn,{ref:P})]})}var gn=(0,r.forwardRef)(En);function Sn(d){var P=(0,r.useMemo)(function(){return d.data.input[0].content.reduce(function(v,_){if(_.type===fe.TEXT&&v.push({code:"Text",data:{content:_.text,raw:!0}}),_.type===fe.IMAGE){var R=v.find(function(Ee){return Ee.code==="Image"});R?R.data.push({url:_.image_url}):v.push({code:"Images",data:[{url:_.image_url}]})}if(_.type===fe.VIDEO){var Z=v.find(function(Ee){return Ee.code==="Videos"});Z?Z.data.push({src:_.video_url,poster:_.video_poster}):v.push({code:"Videos",data:[{src:_.video_url,poster:_.video_poster}]})}if(_.type===fe.AUDIO){var J=v.find(function(Ee){return Ee.code==="Audios"});J?J.data.push({src:_.audio_url||_.data}):v.push({code:"Audios",data:[{src:_.audio_url||_.data}]})}if(_.type===fe.FILE){var Te=v.find(function(Ee){return Ee.code==="Files"});Te?Te.data.push({url:_.file_url,name:_.file_name||_.fileName,size:_.file_size}):v.push({code:"Files",data:[{url:_.file_url,name:_.file_name||_.fileName,size:_.file_size}]})}return v},[])},[d.data.input]);return P!=null&&P.length?(0,p.jsx)(se.Z,{role:"user",cards:P}):null}var un=e(66109),en=e(18755),sn=e(60747),Dn=e(18946),An=e(14617),Mn=r.memo(function(d){var P,v=d.data,_=(0,f.Uk)(function(Z){var J;return(J=Z.api)===null||J===void 0?void 0:J.replaceMediaURL}),R=r.useCallback(function(Z){return Z&&((_==null?void 0:_(Z))||Z)},[_]);return(P=v.content)!==null&&P!==void 0&&P.length?(0,p.jsx)(p.Fragment,{children:v.content.map(function(Z,J){switch(Z.type){case fe.TEXT:return(0,p.jsx)(un.Z,{content:Z.text,cursor:Z.status===W.InProgress},J);case fe.REFUSAL:return(0,p.jsx)(un.Z,{raw:!0,content:Z.refusal},J);case fe.IMAGE:return(0,p.jsx)(en.Z,{data:[{url:R(Z.image_url)}]},J);case fe.VIDEO:return(0,p.jsx)(sn.Z,{data:[{src:R(Z.video_url),poster:R(Z.video_poster)}]},J);case fe.FILE:return(0,p.jsx)(Dn.Z,{data:[{url:R(Z.file_url),name:Z.file_name||Z.fileName||Z.file_id,size:Z.file_size}]},J);case fe.AUDIO:return(0,p.jsx)(An.Z,{data:[{src:R(Z.audio_url||Z.data)}]},J);default:return(0,p.jsx)("div",{children:JSON.stringify(Z)},J)}})}):null}),_n=Mn,In=e(85786),zn=e(70770),pn=e(86250),Rn=e(31912),Tn=e(7654),wn=e(56290),Kn,rn,He,Ln,xn,Xn,kn,Wn,Vn=(0,j.kc)(function(d){var P=d.css,v=d.token;return{container:P(Kn||(Kn=y()([`
    width: 386px;
  `]))),title:P(rn||(rn=y()([`
    font-size: 14px;
    font-weight: 500;
    color: `,`;
    margin-bottom: 16px;
  `])),v.colorText),content:P(He||(He=y()([`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `]))),tabsContainer:P(Ln||(Ln=y()([`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `]))),tabItem:P(xn||(xn=y()([`
    padding: 0 8px;
    font-size: 14px;
    color: `,`;
    cursor: pointer;
    border: 1px solid `,`;
    background: `,`;
    transition: all 0.2s;
    user-select: none;
    border-radius: 4px;
  `])),v.colorText,v.colorBorderSecondary,v.colorBgContainer),tabItemSelected:P(Xn||(Xn=y()([`
    color: `,`;
    border-color: `,`;
    border: 1px solid `,`;
    position: relative;
    z-index: 1;
  `])),v.colorPrimary,v.colorPrimary,v.colorPrimary),textarea:P(kn||(kn=y()([`
    resize: none;
  `]))),actions:P(Wn||(Wn=y()([`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  `])))}});function Qn(){var d=(0,wn.useTranslation)(),P=d.t;return[(P==null?void 0:P("cancelPopover.options.notNeeded"))||"\u4E0D\u9700\u8981",(P==null?void 0:P("cancelPopover.options.poorResult"))||"\u6548\u679C\u4E0D\u7406\u60F3",(P==null?void 0:P("cancelPopover.options.tooSlow"))||"\u7B49\u5F85\u65F6\u95F4\u4E45",(P==null?void 0:P("cancelPopover.options.wrongInput"))||"\u8F93\u5165\u9519\u8BEF"]}function et(d){var P=d.options,v=(0,r.useState)(),_=O()(v,2),R=_[0],Z=_[1],J=Vn(),Te=J.styles;return(0,p.jsx)("div",{className:Te.tabsContainer,children:P.map(function(Ee){return(0,p.jsx)("div",{className:"".concat(Te.tabItem," ").concat(R===Ee?Te.tabItemSelected:""),onClick:function(){Z(Ee),d.onSelect(Ee)},children:Ee},Ee)})})}function Bn(d){var P=(0,wn.useTranslation)(),v=P.t,_=Qn(),R=d.options,Z=R===void 0?_:R,J=d.onConfirm,Te=d.title,Ee=Te===void 0?(v==null?void 0:v("cancelPopover.title"))||"\u53D6\u6D88\u539F\u56E0":Te,le=d.placeholder,ye=le===void 0?(v==null?void 0:v("cancelPopover.placeholder"))||"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212":le,ke=(0,r.useState)(!1),Qe=O()(ke,2),dn=Qe[0],Se=Qe[1],je=Vn(),Ae=je.styles,we=(0,r.useState)(""),on=O()(we,2),ie=on[0],te=on[1],yn=function(){J==null||J(ie.trim())},an=(0,p.jsxs)("div",{className:Ae.container,children:[(0,p.jsx)("div",{className:Ae.title,children:Ee}),(0,p.jsxs)("div",{className:Ae.content,children:[(0,p.jsx)(et,{options:Z,onSelect:te}),(0,p.jsx)(Rn.Z.TextArea,{className:Ae.textarea,value:ie,onChange:function(ln){return te(ln.target.value)},placeholder:ye,rows:3}),(0,p.jsxs)(pn.Z,{className:Ae.actions,children:[(0,p.jsx)(H.Z,{size:"small",onClick:function(){return Se(!1)},children:(v==null?void 0:v("cancelPopover.cancel"))||"\u53D6\u6D88"}),(0,p.jsx)(H.Z,{size:"small",type:"primary",onClick:function(){Se(!1),yn()},children:(v==null?void 0:v("cancelPopover.confirm"))||"\u786E\u8BA4"})]})]})]});return(0,p.jsx)(Tn.Z,{open:dn,onOpenChange:Se,trigger:"click",content:an,children:(0,p.jsx)(H.Z,{size:"small",children:(v==null?void 0:v("approval.cancel"))||"\u53D6\u6D88\u6267\u884C"})})}var $n,nt=(0,j.kc)(function(d){var P=d.css,v=d.token;return{desc:P($n||($n=y()([`
    font-size: 12px;
    color: `,`;
  `])),v.colorTextTertiary)}});function Fn(d){var P=d.data,v=(0,K.vB)(function(je){return je}),_=nt(),R=_.styles,Z=(0,wn.useTranslation)(),J=Z.t,Te=(0,r.useState)("pending"),Ee=O()(Te,2),le=Ee[0],ye=Ee[1],ke=(J==null?void 0:J("approval.title"))||"\u4EBA\u5DE5\u5E72\u9884",Qe=(0,r.useMemo)(function(){return le==="pending"?(J==null?void 0:J("approval.pending"))||"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C":le==="confirmed"?(J==null?void 0:J("approval.confirmed"))||"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1":(J==null?void 0:J("approval.canceled"))||"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1"},[le,J]),dn=(0,r.useCallback)(function(je,Ae){var we;ye(je),v.setLoading(!1),v.setDisabled(!1);var on=P,ie=(we=on.content[0])===null||we===void 0||(we=we.data)===null||we===void 0?void 0:we.id,te={type:xe.MCP_APPROVAL_RESPONSE,role:Pe.USER,content:[{type:fe.DATA,data:{approve:je==="confirmed",id:ie,approval_request_id:ie,reason:Ae}}]};(0,Ne.j)({type:"handleApproval",data:{input:[on,te]}})},[P]),Se=(0,r.useMemo)(function(){return le==="pending"?(0,p.jsxs)(pn.Z,{gap:8,children:[(0,p.jsx)(Bn,{onConfirm:function(Ae){return dn("canceled",Ae)}}),(0,p.jsx)(H.Z,{size:"small",type:"primary",onClick:function(){return dn("confirmed")},children:(J==null?void 0:J("approval.confirm"))||"\u786E\u8BA4\u6267\u884C"})]}):null},[le,J]);return(0,r.useEffect)(function(){le==="pending"&&(v.setLoading((J==null?void 0:J("approval.taskRunning"))||"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1"),v.setDisabled(!0))},[le,J]),(0,p.jsx)(zn.Z.HITL,{done:le!=="pending",onDone:function(){},title:(0,p.jsxs)(pn.Z,{gap:8,children:[ke,(0,p.jsx)("span",{className:R.desc,children:Qe})]}),actions:Se})}var Jn=r.memo(function(d){var P,v=d.data,_=d.isApproval,R=_===void 0?!1:_,Z=(0,f.Uk)(function(je){return je.customToolRenderConfig})||{};if(!((P=v.content)!==null&&P!==void 0&&P.length))return null;var J=v.content,Te=v.status===W.InProgress,Ee=J[0].data.name,le="".concat(J[0].data.server_label?J[0].data.server_label+" / ":""),ye="".concat(le).concat(Ee),ke;if(Z[Ee]){var Qe=Z[Ee];ke=(0,p.jsx)(Qe,{data:v})}else{var dn,Se;ke=(0,p.jsx)(In.Z,{loading:Te,defaultOpen:!1,title:ye==="undefined"?"":ye,input:(dn=J[0])===null||dn===void 0||(dn=dn.data)===null||dn===void 0?void 0:dn.arguments,output:(Se=J[1])===null||Se===void 0||(Se=Se.data)===null||Se===void 0?void 0:Se.output})}return(0,p.jsxs)(p.Fragment,{children:[ke,R&&(0,p.jsx)(Fn,{data:v})]})}),Yn=Jn,On=e(79323);function bn(d){var P,v=d.data;if(v.status===W.Created)return null;var _=v==null||(P=v.content)===null||P===void 0?void 0:P[0];return _?(0,p.jsx)(On.Z,{loading:v.status===W.InProgress,title:"Thinking",content:_.text}):null}function Nn(d){var P=d.data;return(0,p.jsx)(se.Z.Interrupted,{type:"error",title:P.code,desc:P.message})}var qn=e(89698),rt=e(60227),mt=e(67055),ot=e(39536),ht=e(39693),ut=e.n(ht);function Gn(d){return!d.input_tokens||!d.output_tokens?null:(0,p.jsx)(se.Z.Footer.Count,{data:[["Input",d.input_tokens],["Output",d.output_tokens]]})}function gt(d){var P,v,_,R=(0,wn.useTranslation)(),Z=R.t,J=(0,f.Uk)(function(le){var ye;return(ye=le.actions)===null||ye===void 0?void 0:ye.list})||[{icon:(0,p.jsx)(qn.Z,{}),onClick:function(){(0,ot.J)(JSON.stringify(d.data))}}],Te=(P=(0,f.Uk)(function(le){var ye;return(ye=le.actions)===null||ye===void 0?void 0:ye.replace}))!==null&&P!==void 0?P:!0,Ee=ut()([].concat(oe()(J.map(function(le){var ye=le;return le.render&&(ye.children=r.createElement(le.render,{data:d})),m()(m()({},ye),{},{onClick:function(){var Qe;(Qe=le.onClick)===null||Qe===void 0||Qe.call(le,d)}})})),[Te&&d.isLast?{icon:(0,p.jsx)(mt.Z,{title:(Z==null?void 0:Z("actions.regenerate"))||"\u91CD\u65B0\u751F\u6210",children:(0,p.jsx)(rt.Z,{})}),onClick:function(){(0,Ne.j)({type:"handleReplace",data:d})}}:null]));return We.maybeDone(d.data)?(0,p.jsx)(se.Z.Footer,{left:(0,p.jsx)(se.Z.Footer.Actions,{data:Ee}),right:(0,p.jsx)(Gn,{input_tokens:(v=d.data.usage)===null||v===void 0?void 0:v.input_tokens,output_tokens:(_=d.data.usage)===null||_===void 0?void 0:_.output_tokens})}):null}var tt=e(68997);function pt(d){var P=(0,f.Uk)(function(R){return R.welcome.avatar}),v=(0,f.Uk)(function(R){return R.welcome.nick}),_=(0,r.useMemo)(function(){return We.mergeToolMessages(d.data.output)},[d.data.output]);return!(_!=null&&_.length)&&We.maybeGenerating(d.data)?(0,p.jsx)(se.Z.Spin,{}):(0,p.jsxs)(p.Fragment,{children:[P&&(0,p.jsxs)(pn.Z,{align:"center",gap:8,style:{marginBottom:8},children:[(0,p.jsx)(tt.Z,{src:P}),v&&(0,p.jsx)("span",{children:v})]}),_.map(function(R){switch(R.type){case xe.MESSAGE:return(0,p.jsx)(_n,{data:R},R.id);case xe.PLUGIN_CALL:case xe.PLUGIN_CALL_OUTPUT:case xe.MCP_CALL:case xe.MCP_CALL_OUTPUT:return(0,p.jsx)(Yn,{data:R},R.id);case xe.MCP_APPROVAL_REQUEST:return(0,p.jsx)(Yn,{data:R,isApproval:!0},R.id);case xe.REASONING:return(0,p.jsx)(bn,{data:R},R.id);case xe.ERROR:return(0,p.jsx)(Nn,{data:R},R.id);case xe.HEARTBEAT:return null;default:return console.warn("[WIP] Unknown message type: ".concat(R.type)),null}}),d.data.error&&(0,p.jsx)(Nn,{data:d.data.error}),(0,p.jsx)(gt,m()({},d))]})}var it=e(83962);function xt(d){var P=d.options,v=d.cards,_=d.children,R=[[wn.ChatAnywhereI18nContextProvider,{defaultLocale:P.theme.locale}],[f.zn,{options:P}],[it.xy,{cardConfig:v}],[ce.c_,{}],[k.ep,{}],[K.YQ,{}],[S,{}]];return R.reduceRight(function(Z,J){var Te=O()(J,2),Ee=Te[0],le=Te[1];return(0,p.jsx)(Ee,m()(m()({},le),{},{children:Z}))},_)}var dt=xt;function Ct(d,P){var v=d.options,_=v===void 0?{}:v,R=(0,r.useMemo)(function(){var Z=m()({AgentScopeRuntimeRequestCard:Sn,AgentScopeRuntimeResponseCard:pt},_.cards);return Z},[_.cards]);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(dt,{options:_,cards:R,children:(0,p.jsx)(gn,{ref:P})})})}var lt=(0,r.forwardRef)(Ct)},56290:function(ze,F,e){"use strict";e.r(F),e.d(F,{ChatAnywhereI18nContextProvider:function(){return h},useChatAnywhereI18n:function(){return j},useTranslation:function(){return D}});var $=e(5574),m=e.n($),N=e(59214),g=e(67294),b=e(85893),M={cn:{"approval.title":"\u4EBA\u5DE5\u5E72\u9884","approval.pending":"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C","approval.confirmed":"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1","approval.canceled":"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1","approval.cancel":"\u53D6\u6D88\u6267\u884C","approval.confirm":"\u786E\u8BA4\u6267\u884C","approval.taskRunning":"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1","cancelPopover.title":"\u53D6\u6D88\u539F\u56E0","cancelPopover.placeholder":"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212","cancelPopover.cancel":"\u53D6\u6D88","cancelPopover.confirm":"\u786E\u8BA4","cancelPopover.options.notNeeded":"\u4E0D\u9700\u8981","cancelPopover.options.poorResult":"\u6548\u679C\u4E0D\u7406\u60F3","cancelPopover.options.tooSlow":"\u7B49\u5F85\u65F6\u95F4\u4E45","cancelPopover.options.wrongInput":"\u8F93\u5165\u9519\u8BEF","common.save":"\u4FDD\u5B58","common.cancel":"\u53D6\u6D88","common.confirm":"\u786E\u8BA4","common.delete":"\u5220\u9664","common.edit":"\u7F16\u8F91","common.loading":"\u52A0\u8F7D\u4E2D...","common.saveSuccess":"\u4FDD\u5B58\u6210\u529F","common.saveFailed":"\u4FDD\u5B58\u5931\u8D25","actions.regenerate":"\u91CD\u65B0\u751F\u6210","messageImport.title":"Sessions \u6570\u636E\u5BFC\u5165","messageImport.placeholder":"\u8F93\u5165 JSON \u6570\u636E\u4EE5\u8986\u76D6\u5F53\u524D sessions","messageImport.saveToLocalStorage":"\u4FDD\u5B58\u5230 LocalStorage"},en:{"approval.title":"Human Intervention","approval.pending":"Please confirm whether to execute this operation","approval.confirmed":"Confirmed to execute task","approval.canceled":"Canceled task execution","approval.cancel":"Cancel","approval.confirm":"Confirm","approval.taskRunning":"A task is currently running, cannot send new task","cancelPopover.title":"Cancel Reason","cancelPopover.placeholder":"Please enter the reason for better AI planning","cancelPopover.cancel":"Cancel","cancelPopover.confirm":"Confirm","cancelPopover.options.notNeeded":"Not needed","cancelPopover.options.poorResult":"Poor result","cancelPopover.options.tooSlow":"Too slow","cancelPopover.options.wrongInput":"Wrong input","common.save":"Save","common.cancel":"Cancel","common.confirm":"Confirm","common.delete":"Delete","common.edit":"Edit","common.loading":"Loading...","common.saveSuccess":"Saved successfully","common.saveFailed":"Failed to save","actions.regenerate":"Regenerate","messageImport.title":"Import Sessions Data","messageImport.placeholder":"Enter JSON data to override current sessions","messageImport.saveToLocalStorage":"Save to LocalStorage"}},y=(0,N.createContext)(void 0);function j(u){try{var E=(0,N.useContextSelector)(y,u);return E}catch(f){return{}}}function D(){var u=j(function(r){return r==null?void 0:r.t}),E=j(function(r){return r==null?void 0:r.locale}),f=j(function(r){return r==null?void 0:r.setLocale});return{t:u,locale:E,setLocale:f}}function h(u){var E=u.children,f=u.defaultLocale,r=f===void 0?"en":f,n=(0,g.useState)(r),a=m()(n,2),A=a[0],l=a[1],o=(0,g.useCallback)(function(i,L){var ne=M[A][i]||i;return L&&Object.entries(L).forEach(function(K){var z=m()(K,2),oe=z[0],Q=z[1];ne=ne.replace(new RegExp("\\{".concat(oe,"\\}"),"g"),String(Q))}),ne},[A]),O=(0,g.useMemo)(function(){return{locale:A,setLocale:l,t:o,messages:M[A]}},[A,l,o]);return(0,b.jsx)(y.Provider,{value:O,children:E})}F.default=y},16423:function(ze,F,e){"use strict";e.d(F,{YQ:function(){return D},jK:function(){return j},vB:function(){return h}});var $=e(5574),m=e.n($),N=e(59214),g=e(79785),b=e(67294),M=e(68870),y=e(85893),j=(0,N.createContext)({loading:!1,setLoading:function(){},getLoading:function(){return!1},disabled:!1,setDisabled:function(){},getDisabled:function(){return!1}});function D(u){var E=(0,N.useContextSelector)(M.Af,function(C){return C.currentSessionId}),f=(0,N.useContextSelector)(M.Af,function(C){return C.getCurrentSessionId}),r=(0,g.Z)(!1),n=m()(r,3),a=n[0],A=n[1],l=n[2],o=(0,g.Z)(!1),O=m()(o,3),i=O[0],L=O[1],ne=O[2],K=(0,b.useRef)({}),z=(0,b.useRef)(void 0),oe=(0,b.useCallback)(function(C){var w=f();w&&(K.current[w]||(K.current[w]={loading:!1,disabled:!1}),K.current[w].loading=C),A(C)},[f,A]),Q=(0,b.useCallback)(function(C){var w=f();w&&(K.current[w]||(K.current[w]={loading:!1,disabled:!1}),K.current[w].disabled=C),L(C)},[f,L]);return(0,b.useEffect)(function(){var C,w;z.current&&z.current!==E&&K.current[z.current]&&(K.current[z.current].loading=!1,K.current[z.current].disabled=!1);var V=E?K.current[E]:void 0;A((C=V==null?void 0:V.loading)!==null&&C!==void 0?C:!1),L((w=V==null?void 0:V.disabled)!==null&&w!==void 0?w:!1),z.current=E},[E]),(0,y.jsx)(j.Provider,{value:{loading:a,setLoading:oe,getLoading:l,disabled:i,setDisabled:Q,getDisabled:ne},children:u.children})}var h=function(E){return(0,N.useContextSelector)(j,E)}},45953:function(ze,F,e){"use strict";e.d(F,{De:function(){return f},ar:function(){return u},ep:function(){return E}});var $=e(19632),m=e.n($),N=e(97857),g=e.n(N),b=e(5574),M=e.n(b),y=e(79785),j=e(67294),D=e(59214),h=e(85893),u=(0,D.createContext)({messages:[],setMessages:function(){},getMessages:function(){return[]}});function E(r){var n=(0,y.Z)([]),a=M()(n,3),A=a[0],l=a[1],o=a[2],O={messages:A,setMessages:l,getMessages:o};return(0,h.jsx)(u.Provider,{value:O,children:r.children})}var f=function(){var n=(0,D.useContextSelector)(u,function(L){return{setMessages:L.setMessages,getMessages:L.getMessages}}),a=n.setMessages,A=n.getMessages,l=j.useCallback(function(){a([])},[]),o=j.useCallback(function(L){return A().find(function(ne){return ne.id===L})},[]),O=j.useCallback(function(L){a(function(ne){return ne.filter(function(K){return K.id!==L.id})})},[]),i=j.useCallback(function(L){a(function(ne){var K=ne.findIndex(function(oe){return oe.id===L.id});if(K>-1){var z=g()(g()({},ne[K]),L);return[].concat(m()(ne.slice(0,K)),[z],m()(ne.slice(K+1)))}else return[].concat(m()(ne),[L])})},[]);return{getMessages:A,removeAllMessages:l,getMessage:o,removeMessage:O,updateMessage:i}}},7906:function(ze,F,e){"use strict";e.d(F,{zn:function(){return z},Uk:function(){return K}});var $=e(97857),m=e.n($),N=e(17909),g=e(59214),b=e(67294),M=e(81759),y=e(49131),j=e(21766),D=e(15009),h=e.n(D),u=e(19632),E=e.n(u),f=e(99289),r=e.n(f),n="agent-scope-runtime-webui-sessions",a="agent-scope-runtime-webui-session";function A(){return typeof window!="undefined"&&!!window.localStorage}function l(){return"".concat(Date.now(),"-").concat(Math.random().toString(36).slice(2,8))}function o(Q,C){return{id:Q.id||C||l(),name:Q.name||"",messages:Q.messages||[],generating:Q.generating}}function O(Q){var C=Q?n:a,w=[],V=function(){A()&&localStorage.setItem(C,JSON.stringify(w))},Ce=function(){if(A()){var p=localStorage.getItem(C);w=p?JSON.parse(p):[]}};return{getSessionList:function(){return r()(h()().mark(function p(){return h()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return Ce(),Q||(w.length===0?(w=[o({})],V()):w.length>1&&(w=w.slice(0,1),V())),de.abrupt("return",E()(w));case 3:case"end":return de.stop()}},p)}))()},getSession:function(p){var pe=this;return r()(h()().mark(function de(){var X;return h()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,pe.getSessionList();case 2:if(X=k.sent,Q){k.next=5;break}return k.abrupt("return",X[0]);case 5:return k.abrupt("return",X.find(function(re){return re.id===p}));case 6:case"end":return k.stop()}},de)}))()},updateSession:function(p){var pe=this;return r()(h()().mark(function de(){var X,se;return h()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:if(p.id){re.next=2;break}return re.abrupt("return",pe.createSession(p));case 2:return re.next=4,pe.getSessionList();case 4:return X=re.sent,se=X.findIndex(function(ce){return ce.id===p.id}),se>-1?X[se]=o(m()(m()({},X[se]),p),p.id):X.unshift(o(p)),w=Q?X:X.slice(0,1),V(),re.abrupt("return",E()(w));case 10:case"end":return re.stop()}},de)}))()},createSession:function(p){var pe=this;return r()(h()().mark(function de(){var X,se;return h()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return re.next=2,pe.getSessionList();case 2:return X=re.sent,se=o(p),Q?w=[se].concat(E()(X)):w=[se],V(),re.abrupt("return",E()(w));case 7:case"end":return re.stop()}},de)}))()},removeSession:function(p){var pe=this;return r()(h()().mark(function de(){var X;return h()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,pe.getSessionList();case 2:if(X=k.sent,p.id){k.next=5;break}return k.abrupt("return",E()(X));case 5:return w=X.filter(function(re){return re.id!==p.id}),V(),k.abrupt("return",E()(w));case 8:case"end":return k.stop()}},de)}))()}}}function i(Q){return O(Q)}var L=e(85893),ne=(0,g.createContext)(void 0);function K(Q){try{var C=(0,g.useContextSelector)(ne,Q);return C}catch(w){return{}}}function z(Q){var C,w=Q.children,V=(0,N.Z)(),Ce=(0,b.useMemo)(function(){var X,se=!!((X=Q.options.session)!==null&&X!==void 0&&X.multiple);return i(se)},[(C=Q.options.session)===null||C===void 0?void 0:C.multiple]),x=(0,b.useMemo)(function(){var X=Q.options.theme||{},se=Q.options.session||{},k=!!se.multiple;return m()(m()({},Q.options),{},{session:m()(m()({},se),{},{multiple:k,api:se.api||Ce}),theme:m()(m()({},X),{},{narrowMode:!V.lg||X.narrowMode})})},[Q.options,V.lg,Ce]),p=(0,b.useMemo)(function(){var X=x.theme.colorPrimary,se=x.theme.colorBgBase,k=x.theme.colorTextBase,re=x.theme.darkMode;if(X||re){var ce=(0,M.Z)((0,y.Z)({primaryHex:X,bgBaseHex:se,textBaseHex:k,darkMode:re}));return ce}},[x.theme.colorPrimary,x.theme.colorBgBase,x.theme.colorTextBase,x.theme.darkMode]),pe=(0,L.jsx)(ne.Provider,{value:x,children:w});if(p){var de=x.theme.prefix||"agentscope-runtime-webui";return(0,L.jsx)(j.ZP,m()(m()({},p),{},{style:{height:"100%"},prefix:de,prefixCls:de,children:pe}))}return pe}var oe=null},68870:function(ze,F,e){"use strict";e.d(F,{Af:function(){return o},Ct:function(){return ne},Kt:function(){return i},_Q:function(){return L},c_:function(){return O}});var $=e(97857),m=e.n($),N=e(15009),g=e.n(N),b=e(99289),M=e.n(b),y=e(5574),j=e.n(y),D=e(59214),h=e(79785),u=e(78234),E=e(67294),f=e(45953),r=e(7906),n=e(73935),a=e(2093),A=e(31119),l=e(85893),o=(0,D.createContext)({sessions:[],setSessions:function(){},getSessions:function(){return[]},currentSessionId:void 0,setCurrentSessionId:function(){},getCurrentSessionId:function(){return""}});function O(K){var z=(0,r.Uk)(function(X){return X.session}),oe=(0,h.Z)([]),Q=j()(oe,3),C=Q[0],w=Q[1],V=Q[2],Ce=(0,h.Z)(void 0),x=j()(Ce,3),p=x[0],pe=x[1],de=x[2];return(0,u.Z)(M()(g()().mark(function X(){var se,k;return g()().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:return ce.next=2,z.api.getSessionList();case 2:k=ce.sent,w(k),pe(k==null||(se=k[0])===null||se===void 0?void 0:se.id);case 5:case"end":return ce.stop()}},X)}))),(0,l.jsx)(o.Provider,{value:{sessions:C,setSessions:w,getSessions:V,currentSessionId:p,setCurrentSessionId:pe,getCurrentSessionId:de},children:K.children})}var i=function(){var z=(0,D.useContextSelector)(o,function(C){return C.currentSessionId}),oe=(0,r.Uk)(function(C){return C.session}),Q=(0,D.useContextSelector)(f.ar,function(C){return C.setMessages});(0,a.Z)(M()(g()().mark(function C(){var w,V;return g()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return n.flushSync(function(){Q([])}),x.next=3,oe.api.getSession(z);case 3:w=x.sent,V=(w==null?void 0:w.messages)||[],Q(V.map(function(p){return m()(m()({},p),{},{history:!0})})),w!=null&&w.generating&&(0,A.j)({type:"handleReconnect",data:{session_id:z}});case 7:case"end":return x.stop()}},C)})),[z])},L=function(){return(0,D.useContextSelector)(o,function(z){return z})},ne=function(){var z=(0,D.useContextSelector)(o,function(se){return se}),oe=z.setSessions,Q=z.getSessions,C=z.getCurrentSessionId,w=z.setCurrentSessionId,V=z.currentSessionId,Ce=(0,r.Uk)(function(se){return se.session}),x=(0,D.useContextSelector)(f.ar,function(se){return se.setMessages}),p=E.useCallback(function(){var se=M()(g()().mark(function k(re){var ce;return g()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,Ce.api.removeSession(re);case 2:ce=_e.sent,x([]),w(void 0),oe(ce);case 6:case"end":return _e.stop()}},k)}));return function(k){return se.apply(this,arguments)}}(),[]),pe=E.useCallback(function(){var se=M()(g()().mark(function k(re){var ce;return g()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:if(!re.id){_e.next=6;break}return _e.next=3,Ce.api.updateSession(re);case 3:_e.t0=_e.sent,_e.next=9;break;case 6:return _e.next=8,Ce.api.createSession(re);case 8:_e.t0=_e.sent;case 9:return ce=_e.t0,oe(ce),_e.abrupt("return",re);case 12:case"end":return _e.stop()}},k)}));return function(k){return se.apply(this,arguments)}}(),[]),de=E.useCallback(function(){var se=M()(g()().mark(function k(re){var ce;return g()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,pe({name:(re==null?void 0:re.name)||"",messages:[]});case 2:return ce=_e.sent,w(ce.id),x(ce.messages),_e.abrupt("return",ce.id);case 6:case"end":return _e.stop()}},k)}));return function(k){return se.apply(this,arguments)}}(),[]),X=E.useCallback(function(se){w(se)},[]);return{changeCurrentSessionId:X,getCurrentSessionId:C,getSessions:Q,removeSession:p,updateSession:pe,createSession:de}}},31119:function(ze,F,e){"use strict";e.d(F,{Z:function(){return m},j:function(){return N}});var $=e(67294);function m(g){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];(0,$.useEffect)(function(){return document.addEventListener(g.type,g.callback),function(){document.removeEventListener(g.type,g.callback)}},b)}var N=function(b){var M=b.type,y=b.data;document.dispatchEvent(new CustomEvent(M,{detail:y}))}},57551:function(){},22863:function(ze,F,e){"use strict";e.r(F);var $=e(57551),m=e.n($),N={};for(var g in $)g!=="default"&&(N[g]=function(b){return $[b]}.bind(0,g));e.d(F,N)},34487:function(ze,F,e){"use strict";e.d(F,{Z:function(){return se}});var $=e(97857),m=e.n($),N=e(5574),g=e.n(N),b=e(56044),M=e(68400),y=e.n(M),j=e(9053),D,h=(0,j.vJ)(D||(D=y()([`
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
`])),function(k){return k.theme.prefixCls},function(k){return k.theme.colorBgLayout},function(k){return k.theme.colorBgLayout},function(k){return k.theme.colorFillTertiary},function(k){return k.theme.colorBgBase},function(k){return k.theme.prefixCls},function(k){return k.theme.prefixCls},function(k){return k.theme.colorBgBase},function(k){return k.theme.colorBorderSecondary},function(k){return k.theme.colorText},function(k){return k.theme.colorBorderSecondary},function(k){return k.theme.colorPrimary}),u=e(93967),E=e.n(u),f=e(55839),r=e(16494),n=e(85893);function a(k){var re=(0,b.wv)().getPrefixCls("assets-preview-image"),ce=k.width,Ge=ce===void 0?1:ce,_e=k.height,Ke=_e===void 0?1:_e,mn=k.src;return(0,n.jsx)("div",{className:re,style:{aspectRatio:"".concat(Ge,"/").concat(Ke)},children:(0,n.jsx)(f.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(r.Z,{src:mn,width:"100%",height:"100%"})})})}function A(k){return(0,n.jsx)(r.Z.PreviewGroup,{children:k.children})}var l=e(9783),o=e.n(l),O=e(13769),i=e.n(O),L=e(67294),ne=e(63701),K=e(62321),z=e(32485),oe=e(64057),Q=["width","height","poster","src"];function C(k){var re=(0,b.wv)().getPrefixCls("assets-preview-video"),ce=k.width,Ge=ce===void 0?1:ce,_e=k.height,Ke=_e===void 0?1:_e,mn=k.poster,hn=k.src,vn=i()(k,Q),nn=(0,L.useRef)(null),Ne=(0,L.useState)(!1),Cn=g()(Ne,2),U=Cn[0],be=Cn[1],Ue=(0,L.useState)(0),Je=g()(Ue,2),B=Je[0],W=Je[1],Pe=(0,L.useState)(0),xe=g()(Pe,2),fe=xe[0],Ie=xe[1],Me=(0,L.useCallback)(function(Be){var t=Math.floor(Be/60),Re=Math.floor(Be%60);return"".concat(t.toString().padStart(2,"0"),":").concat(Re.toString().padStart(2,"0"))},[]),Ze=(0,L.useCallback)(function(){var Be=nn.current;Be&&(Be.paused?(Be.play(),be(!0)):(Be.pause(),be(!1)))},[]),Oe=(0,L.useCallback)(function(){nn.current&&W(nn.current.duration)},[]),Xe=(0,L.useCallback)(function(){be(!1),Ie(0)},[]),Ve=(0,L.useCallback)(function(){nn.current&&Ie(nn.current.currentTime)},[]),cn=(0,L.useCallback)(function(Be){Be.stopPropagation();var t=nn.current;t&&(t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen())},[]);return(0,n.jsxs)("div",{className:re,style:{aspectRatio:"".concat(Ge,"/").concat(Ke)},children:[(0,n.jsx)("video",m()(m()({},vn),{},{ref:nn,src:hn,poster:mn,preload:"metadata",onLoadedMetadata:Oe,onTimeUpdate:Ve,onEnded:Xe})),(0,n.jsxs)("div",{className:E()("".concat(re,"-overlay"),o()({},"".concat(re,"-overlay-playing"),1)),onClick:Ze,children:[(0,n.jsx)("div",{className:"".concat(re,"-play-btn"),children:U?(0,n.jsx)(ne.Z,{}):(0,n.jsx)(K.Z,{})}),(0,n.jsx)("div",{className:"".concat(re,"-enlarge"),onClick:cn,children:(0,n.jsx)(oe.Z,{bordered:!1,size:"small",icon:(0,n.jsx)(z.Z,{})})})]}),(0,n.jsx)("div",{className:"".concat(re,"-duration"),children:Me(B-fe)})]})}var w=e(20399),V=e(80162);function Ce(k){var re=(0,b.wv)().getPrefixCls("assets-preview-audio"),ce=(0,L.useRef)(null),Ge=(0,L.useState)(!1),_e=g()(Ge,2),Ke=_e[0],mn=_e[1],hn=(0,L.useState)(!1),vn=g()(hn,2),nn=vn[0],Ne=vn[1],Cn=(0,L.useState)(0),U=g()(Cn,2),be=U[0],Ue=U[1],Je=(0,L.useState)(0),B=g()(Je,2),W=B[0],Pe=B[1],xe=(0,L.useCallback)(function(Oe){if(isNaN(Oe))return"00:00";var Xe=Math.floor(Oe/60),Ve=Math.floor(Oe%60);return"".concat(Xe.toString().padStart(2,"0"),":").concat(Ve.toString().padStart(2,"0"))},[]),fe=(0,L.useCallback)(function(){ce.current&&(Ke?ce.current.pause():ce.current.play(),mn(!Ke))},[Ke]),Ie=(0,L.useCallback)(function(){Ne(!nn),ce.current&&(ce.current.muted=nn)},[nn]),Me=(0,L.useCallback)(function(Oe){if(ce.current&&W){var Xe=Oe.currentTarget.getBoundingClientRect(),Ve=Oe.clientX-Xe.left,cn=Ve/Xe.width,Be=cn*W;ce.current.currentTime=Be,Ue(Be)}},[W]);(0,L.useEffect)(function(){var Oe=ce.current;if(Oe){var Xe=function(){return Ue(Oe.currentTime)},Ve=function(){return Pe(Oe.duration)},cn=function(){return mn(!1)};return Oe.addEventListener("timeupdate",Xe),Oe.addEventListener("loadedmetadata",Ve),Oe.addEventListener("ended",cn),function(){Oe.removeEventListener("timeupdate",Xe),Oe.removeEventListener("loadedmetadata",Ve),Oe.removeEventListener("ended",cn)}}},[]);var Ze=W?be/W*100:0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("audio",{ref:ce,src:k.src,muted:nn}),(0,n.jsxs)("div",{className:re,children:[(0,n.jsx)(oe.Z,{size:"small",type:"text",onClick:fe,icon:Ke?(0,n.jsx)(ne.Z,{}):(0,n.jsx)(K.Z,{})}),(0,n.jsx)(oe.Z,{size:"small",type:"text",onClick:Ie,icon:nn?(0,n.jsx)(w.Z,{}):(0,n.jsx)(V.Z,{})}),(0,n.jsx)("div",{className:"".concat(re,"-time"),children:xe(be)}),(0,n.jsx)("div",{className:"".concat(re,"-progress"),onClick:Me,children:(0,n.jsx)("div",{className:"".concat(re,"-progress-bar"),style:{width:"".concat(Ze,"%")}})}),(0,n.jsx)("div",{className:"".concat(re,"-time"),children:xe(W)})]})]})}var x=e(16138),p=e(83202),pe=e(90105),de=e(82052);function X(k){var re,ce=(0,pe.Z)(),Ge=(0,b.wv)().getPrefixCls("assets-preview"),_e=(0,L.useRef)(null),Ke=k.height,mn=Ke===void 0?144:Ke,hn=mn/2-12,vn=(0,L.useRef)(0),nn=(0,L.useState)(0),Ne=g()(nn,2),Cn=Ne[0],U=Ne[1],be=(0,L.useDeferredValue)(Cn),Ue=(0,de.Z)(_e),Je=(0,L.useCallback)(function(xe){U(xe.target.scrollLeft)},[]);(0,L.useEffect)(function(){_e.current&&k.type!=="audio"&&(vn.current=_e.current.scrollWidth-_e.current.clientWidth),ce()},[k.data.length,Ue==null?void 0:Ue.width]);var B=(0,L.useCallback)(function(xe){var fe=200;_e.current.scrollLeft=_e.current.scrollLeft+fe*(xe==="left"?-1:1)},[]),W={image:a,video:C,audio:Ce}[k.type],Pe=k.data.map(function(xe,fe){return(0,n.jsx)(W,m()({},xe),fe)});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{}),(0,n.jsxs)("div",{className:E()("".concat(Ge),k.className),children:[(0,n.jsx)("div",{className:E()("".concat(Ge,"-container"),(re=k.classNames)===null||re===void 0?void 0:re.container),style:k.type!=="audio"?{height:mn}:{flexDirection:"column"},onScroll:Je,ref:_e,children:k.type==="image"?(0,n.jsx)(A,{children:Pe}):Pe}),hn>0&&k.type!=="audio"?(0,n.jsxs)(n.Fragment,{children:[be>50&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:E()("".concat(Ge,"-left-edge"))}),(0,n.jsx)(oe.Z,{onClick:function(){return B("left")},style:{top:hn},className:E()("".concat(Ge,"-left-arrow"),"".concat(Ge,"-arrow")),size:"small",shape:"circle",icon:(0,n.jsx)(x.Z,{})})]}),be<vn.current-50&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:E()("".concat(Ge,"-right-edge"))}),(0,n.jsx)(oe.Z,{onClick:function(){return B("right")},style:{top:hn},className:E()("".concat(Ge,"-right-arrow"),"".concat(Ge,"-arrow")),size:"small",shape:"circle",icon:(0,n.jsx)(p.Z,{})})]})]}):null]})]})}var se=X},50993:function(ze,F,e){"use strict";e.d(F,{Z:function(){return Be}});var $=e(9783),m=e.n($),N=e(97857),g=e.n(N),b=e(5574),M=e.n(b),y=e(13769),j=e.n(y),D=e(93967),h=e.n(D),u=e(67294),E=e(56044),f=e(56790),r=e(73935),n=u.createContext(null),a=e(85893);function A(t){var Re=t.getDropContainer,We=t.className,tn=t.prefixCls,c=t.children,q=u.useContext(n),T=q.disabled,H=u.useState(),I=M()(H,2),G=I[0],Y=I[1],ge=u.useState(null),ve=M()(ge,2),s=ve[0],S=ve[1];u.useEffect(function(){var ue=Re==null?void 0:Re();G!==ue&&Y(ue)},[Re]),u.useEffect(function(){if(G){var ue=function(){S(!0)},De=function(he){he.preventDefault()},ae=function(he){he.relatedTarget||S(!1)},$e=function(he){S(!1),he.preventDefault()};return document.addEventListener("dragenter",ue),document.addEventListener("dragover",De),document.addEventListener("dragleave",ae),document.addEventListener("drop",$e),function(){document.removeEventListener("dragenter",ue),document.removeEventListener("dragover",De),document.removeEventListener("dragleave",ae),document.removeEventListener("drop",$e)}}},[!!G]);var ee=Re&&G&&!T;if(!ee)return null;var me="".concat(tn,"-drop-area");return(0,r.createPortal)((0,a.jsx)("div",{className:h()(me,We,m()({},"".concat(me,"-on-body"),G.tagName==="BODY")),style:{display:s?"block":"none"},children:c}),G)}var l=e(53033),o=e(52861),O=e(83622),i=e(29372),L=e(64599),ne=e.n(L),K=e(68400),z=e.n(K),oe=e(9053),Q,C=(0,oe.vJ)(Q||(Q=z()([`
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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.colorBgContainer},function(t){return t.theme.lineWidth},function(t){return t.theme.colorBorderSecondary},function(t){return t.theme.paddingXS},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.fontSize},function(t){return t.theme.colorText},function(t){return t.theme.prefixCls},function(t){return t.theme.colorTextQuaternary},function(t){return t.theme.fontSizeSM},function(t){return t.theme.prefixCls},function(t){return t.theme.opacityLoading},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.colorWhite},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.lineWidth},function(t){return t.theme.prefixCls},function(t){return t.theme.paddingXXS},function(t){return t.theme.prefixCls},function(t){return t.theme.colorText},function(t){return t.theme.colorBgContainer},function(t){return t.theme.lineWidth},function(t){return t.theme.colorBorder},function(t){return t.theme.colorError},function(t){return t.theme.prefixCls},function(t){return t.theme.colorError},function(t){return t.theme.paddingSM},function(t){return t.theme.prefixCls},function(t){return t.theme.colorPrimary},function(t){return t.theme.prefixCls}),w=e(89102),V=e(16494),Ce=function(Re){return Re.indexOf("image/")===0},x=200;function p(t){return new Promise(function(Re){if(!t||!t.type||!Ce(t.type)){Re("");return}var We=new Image;if(We.onload=function(){var q=We.width,T=We.height,H=q/T,I=H>1?x:x*H,G=H>1?x/H:x,Y=document.createElement("canvas");Y.width=I,Y.height=G,Y.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(I,"px; height: ").concat(G,"px; z-index: 9999; display: none;"),document.body.appendChild(Y);var ge=Y.getContext("2d");ge.drawImage(We,0,0,I,G);var ve=Y.toDataURL();document.body.removeChild(Y),window.URL.revokeObjectURL(We.src),Re(ve)},We.crossOrigin="anonymous",t.type.startsWith("image/svg+xml")){var tn=new FileReader;tn.onload=function(){tn.result&&typeof tn.result=="string"&&(We.src=tn.result)},tn.readAsDataURL(t)}else if(t.type.startsWith("image/gif")){var c=new FileReader;c.onload=function(){c.result&&Re(c.result)},c.readAsDataURL(t)}else We.src=window.URL.createObjectURL(t)})}var pe=e(9361),de=e(38703);function X(t){var Re=t.percent,We=pe.Z.useToken(),tn=We.token;return(0,a.jsx)(de.Z,{type:"circle",percent:Re,size:40,strokeColor:"#FFF",trailColor:"rgba(255, 255, 255, 0.3)",format:function(q){return(0,a.jsxs)("span",{style:{color:"#FFF"},children:[(q||0).toFixed(0),"%"]})}})}var se=e(43974),k=e(60227),re="\xA0",ce="image/png,image/jpeg,image/jpg,image/gif,image/bmp,image/webp,image/svg+xml";function Ge(t,Re){var We=(0,E.wv)(),tn=We.getPrefixCls,c=t.item,q=t.onRemove,T=t.onReplace,H=t.className,I=t.style,G=u.useContext(n),Y=G||{},ge=Y.disabled,ve=c.percent,s=c.status,S=s===void 0?"done":s,ee=c.description,me=tn("attachment"),ue="".concat(me,"-list-card"),De=u.useState(!1),ae=M()(De,2),$e=ae[0],Fe=ae[1],he=u.useRef(null),Ye=u.useMemo(function(){return{visible:$e,onVisibleChange:Fe}},[$e]),Pn=u.useMemo(function(){return ee||(S==="uploading"?"".concat(ve||0,"%"):S==="error"&&c.response||re)},[ee,S,ve,c.response]),En=u.useState(),gn=M()(En,2),Sn=gn[0],un=gn[1];u.useEffect(function(){if(c.originFileObj){var An=!0;return p(c.originFileObj).then(function(Mn){An&&un(Mn)}),function(){An=!1}}un(void 0)},[c.originFileObj]);var en=c.thumbUrl||c.url||Sn,sn=function(Mn){var _n;Mn.stopPropagation(),(_n=he.current)===null||_n===void 0||_n.click()},Dn=function(Mn){var _n,In=(_n=Mn.target.files)===null||_n===void 0?void 0:_n[0];In&&T&&T(c,In),he.current&&(he.current.value="")};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{}),(0,a.jsxs)("div",{className:h()(ue,m()(m()(m()({},"".concat(ue,"-status-").concat(S),S),"".concat(ue,"-type-preview"),!0),"".concat(ue,"-hoverable"),!ge&&q),H),style:I,ref:Re,children:[en&&(0,a.jsx)("img",{alt:"preview",src:en}),(0,a.jsx)(V.Z,{src:en,style:{display:"none"},preview:Ye}),S!=="done"&&(0,a.jsxs)("div",{className:"".concat(ue,"-img-mask"),children:[S==="uploading"&&ve!==void 0&&(0,a.jsx)(X,{percent:ve,prefixCls:ue}),S==="error"&&(0,a.jsx)("div",{className:"".concat(ue,"-desc"),children:(0,a.jsx)("div",{className:"".concat(ue,"-ellipsis-prefix"),children:Pn})})]}),S==="done"&&(0,a.jsxs)("div",{className:"".concat(ue,"-img-hover-mask"),children:[(0,a.jsx)("button",{className:"".concat(ue,"-img-action"),onClick:function(Mn){Mn.stopPropagation(),Fe(!0)},children:(0,a.jsx)(se.Z,{})}),T&&(0,a.jsx)("button",{className:"".concat(ue,"-img-action"),onClick:sn,children:(0,a.jsx)(k.Z,{})})]}),(0,a.jsx)("input",{ref:he,type:"file",accept:ce,style:{display:"none"},onChange:Dn}),(0,a.jsx)("button",{style:{opacity:!ge&&q?1:0},className:"".concat(ue,"-remove"),onClick:function(){!ge&&q&&q(c)},children:(0,a.jsx)(w.Z,{})})]})]})}var _e=u.forwardRef(Ge),Ke="\xA0",mn="#8c8c8c",hn=["png","jpg","jpeg","gif","bmp","webp","svg"],vn=function(Re){var We=Re.url;return(0,a.jsx)("img",{src:We,width:32,height:32})},nn=[{icon:(0,a.jsx)(vn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01cVtZXI23tPVhiZoPJ_!!6000000007313-55-tps-40-40.svg"}),color:"#22b35e",ext:["xlsx","xls"]},{icon:(0,a.jsx)(vn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01uDnnuz1XMNEjgFMul_!!6000000002909-55-tps-40-40.svg"}),color:mn,ext:hn},{icon:(0,a.jsx)(vn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01PaXli01DDPAO68fsI_!!6000000000182-55-tps-40-40.svg"}),color:mn,ext:["md","mdx"]},{icon:(0,a.jsx)(vn,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01mB5PzD27fuIWK661W_!!6000000007825-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["pdf"]},{icon:(0,a.jsx)(vn,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01a8j7Jv1nW1QyFme7k_!!6000000005096-55-tps-40-40.svg"}),color:"#ff6e31",ext:["ppt","pptx"]},{icon:(0,a.jsx)(vn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01XaNi8P1UkhQXoQdUL_!!6000000002556-55-tps-40-40.svg"}),color:"#1677ff",ext:["doc","docx"]},{icon:(0,a.jsx)(vn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),color:"#fab714",ext:["zip","rar","7z","tar","gz"]},{icon:(0,a.jsx)(vn,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01zTTe0q1Xg4GkZgJol_!!6000000002952-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["mp4","avi","mov","wmv","flv","mkv"]},{icon:(0,a.jsx)(vn,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01qOBdXG1UpHO6f3Vvc_!!6000000002566-55-tps-40-40.svg"}),color:"#8c8c8c",ext:["mp3","wav","flac","ape","aac","ogg"]}];function Ne(t,Re){return Re.some(function(We){return t.toLowerCase()===".".concat(We)})}function Cn(t){for(var Re=t,We=["B","KB","MB","GB","TB","PB","EB"],tn=0;Re>=1024&&tn<We.length-1;)Re/=1024,tn++;return"".concat(Re.toFixed(0)," ").concat(We[tn])}function U(t,Re){var We=(0,E.wv)(),tn=We.getPrefixCls,c=t.item,q=t.onRemove,T=t.onReplace,H=t.className,I=t.style,G=u.useContext(n),Y=G||{},ge=Y.disabled,ve=c.name,s=c.size,S=c.percent,ee=c.status,me=ee===void 0?"done":ee,ue=c.description,De=tn("attachment"),ae="".concat(De,"-list-card"),$e=u.useMemo(function(){var An=ve||"",Mn=An.match(/^(.*)\.[^.]+$/);return Mn?[Mn[1],An.slice(Mn[1].length)]:[An,""]},[ve]),Fe=M()($e,2),he=Fe[0],Ye=Fe[1],Pn=u.useMemo(function(){return Ne(Ye,hn)},[Ye]),En=t.renderType||"default",gn=Pn&&(c.originFileObj||c.thumbUrl||c.url)&&En==="default";if(gn)return(0,a.jsx)(_e,{ref:Re,item:c,onRemove:q,onReplace:T,className:H,style:I});var Sn=function(){return ue||(me==="uploading"?"".concat(S||0,"%"):me==="error"?c.response||Ke:s?Cn(s):Ke)}(),un=function(){var An=ne()(nn),Mn;try{for(An.s();!(Mn=An.n()).done;){var _n=Mn.value,In=_n.ext,zn=_n.icon,pn=_n.color;if(Ne(Ye,In))return[zn,pn]}}catch(Rn){An.e(Rn)}finally{An.f()}return[(0,a.jsx)(vn,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"},"defaultIcon"),mn]}(),en=M()(un,2),sn=en[0],Dn=en[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{}),(0,a.jsxs)("div",{className:h()(ae,m()(m()(m()(m()({},"".concat(ae,"-status-").concat(me),me),"".concat(ae,"-type-overview"),!0),"".concat(ae,"-type-").concat(En),!0),"".concat(ae,"-hoverable"),!ge&&q),H),style:I,ref:Re,children:[(0,a.jsx)("div",{className:"".concat(ae,"-icon"),style:{color:Dn},children:sn}),(0,a.jsxs)("div",{className:"".concat(ae,"-content"),children:[(0,a.jsxs)("div",{className:"".concat(ae,"-name"),children:[he!=null?he:Ke,Ye]}),(0,a.jsx)("div",{className:"".concat(ae,"-desc"),children:(0,a.jsx)("div",{className:"".concat(ae,"-ellipsis-prefix"),children:Sn})})]}),(0,a.jsx)("button",{style:{opacity:!ge&&q?1:0},className:"".concat(ae,"-remove"),onClick:function(){!ge&&q&&q(c)},children:(0,a.jsx)(w.Z,{})})]})]})}var be=u.forwardRef(U),Ue=1;function Je(t){var Re=t.prefixCls,We=t.items,tn=t.onRemove,c=t.onReplace,q=t.overflow,T=t.listClassName,H=t.listStyle,I=t.itemClassName,G=t.itemStyle,Y="".concat(Re,"-list"),ge=u.useRef(null),ve=u.useState(!1),s=M()(ve,2),S=s[0],ee=s[1];u.useEffect(function(){return ee(!0),function(){ee(!1)}},[]);var me=u.useState(!1),ue=M()(me,2),De=ue[0],ae=ue[1],$e=u.useState(!1),Fe=M()($e,2),he=Fe[0],Ye=Fe[1],Pn=function(){var en=ge.current;en&&(q==="scrollX"?(ae(Math.abs(en.scrollLeft)>=Ue),Ye(en.scrollWidth-en.clientWidth-Math.abs(en.scrollLeft)>=Ue)):q==="scrollY"&&(ae(en.scrollTop!==0),Ye(en.scrollHeight-en.clientHeight!==en.scrollTop)))};u.useEffect(function(){Pn()},[q]);var En=function(en){var sn=ge.current;sn&&sn.scrollTo({left:sn.scrollLeft+en*sn.clientWidth,behavior:"smooth"})},gn=function(){En(-1)},Sn=function(){En(1)};return(0,a.jsxs)("div",{className:h()(Y,m()(m()(m()({},"".concat(Y,"-overflow-").concat(t.overflow),q),"".concat(Y,"-overflow-ping-start"),De),"".concat(Y,"-overflow-ping-end"),he),T),ref:ge,onScroll:Pn,style:H,children:[(0,a.jsx)(i.V4,{keys:We.map(function(un){return{key:un.uid,item:un}}),motionName:"".concat(Y,"-card-motion"),component:!1,motionAppear:S,motionLeave:!0,motionEnter:!0,children:function(en){var sn=en.key,Dn=en.item,An=en.className,Mn=en.style;return(0,a.jsx)(be,{prefixCls:Re,item:Dn,onRemove:tn,onReplace:c,className:h()(An,I),style:g()(g()({},Mn),G),renderType:t.renderType},sn)}}),q==="scrollX"&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(O.ZP,{size:"small",shape:"circle",className:"".concat(Y,"-prev-btn"),icon:(0,a.jsx)(l.Z,{}),onClick:gn}),(0,a.jsx)(O.ZP,{size:"small",shape:"circle",className:"".concat(Y,"-next-btn"),icon:(0,a.jsx)(o.Z,{}),onClick:Sn})]})]})}var B=e(86250),W=e(21317),Pe=e(41154);function xe(t,Re){var We=t.prefixCls,tn=t.placeholder,c=tn===void 0?{}:tn,q=t.upload,T=t.className,H=t.style,I="".concat(We,"-placeholder"),G=c||{},Y=u.useContext(n),ge=Y.disabled,ve=u.useState(!1),s=M()(ve,2),S=s[0],ee=s[1],me=function(){ee(!0)},ue=function(Fe){Fe.currentTarget.contains(Fe.relatedTarget)||ee(!1)},De=function(){ee(!1)},ae=u.isValidElement(c)?c:(0,a.jsxs)(B.Z,{align:"center",justify:"center",vertical:!0,className:"".concat(I,"-inner"),children:[(0,a.jsx)(W.default.Text,{className:"".concat(I,"-icon"),children:G.icon}),(0,a.jsx)(W.default.Title,{className:"".concat(I,"-title"),level:5,children:G.title}),(0,a.jsx)(W.default.Text,{className:"".concat(I,"-description"),type:"secondary",children:G.description})]});return(0,a.jsx)("div",{className:h()(I,m()(m()({},"".concat(I,"-drag-in"),S),"".concat(I,"-disabled"),ge),T),onDragEnter:me,onDragLeave:ue,onDrop:De,"aria-hidden":ge,style:H,children:(0,a.jsx)(Pe.Z.Dragger,g()(g()({showUploadList:!1},q),{},{ref:Re,style:{padding:0,border:0,background:"transparent"},children:ae}))})}var fe=u.forwardRef(xe);function Ie(t,Re){var We=t.children,tn=t.upload,c=t.rootClassName,q=u.useRef(null);return u.useImperativeHandle(Re,function(){return q.current}),(0,a.jsx)(Pe.Z,g()(g()({},tn),{},{showUploadList:!1,rootClassName:c,ref:q,children:We}))}var Me=u.forwardRef(Ie),Ze,Oe=(0,oe.vJ)(Ze||(Ze=z()([`
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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.zIndexPopupBase},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.lineWidthBold},function(t){return t.theme.padding},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.colorPrimaryHover},function(t){return t.theme.prefixCls},function(t){return t.theme.paddingXXS},function(t){return t.theme.fontSizeHeading2},function(t){return t.theme.prefixCls},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.colorText},function(t){return t.theme.padding},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.paddingSM},function(t){return t.theme.paddingSM},function(t){return t.theme.fontSizeHeading2},function(t){return t.theme.boxShadowTertiary},function(t){return t.theme.padding},function(t){return t.theme.padding},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls}),Xe=["prefixCls","rootClassName","rootStyle","className","style","items","children","getDropContainer","placeholder","onChange","overflow","disabled","replaceable","classNames","styles"];function Ve(t,Re){var We=t.prefixCls,tn=t.rootClassName,c=t.rootStyle,q=t.className,T=t.style,H=t.items,I=t.children,G=t.getDropContainer,Y=t.placeholder,ge=t.onChange,ve=t.overflow,s=t.disabled,S=t.replaceable,ee=t.classNames,me=ee===void 0?{}:ee,ue=t.styles,De=ue===void 0?{}:ue,ae=j()(t,Xe),$e=(0,E.wv)(),Fe=$e.direction,he=$e.getPrefixCls,Ye=he("attachment"),Pn=u.useRef(null),En=u.useRef(null);u.useImperativeHandle(Re,function(){return{nativeElement:Pn.current,upload:function(Rn){var Tn,wn=(Tn=En.current)===null||Tn===void 0||(Tn=Tn.nativeElement)===null||Tn===void 0?void 0:Tn.querySelector('input[type="file"]');if(wn){var Kn=new DataTransfer;Kn.items.add(Rn),wn.files=Kn.files,wn.dispatchEvent(new Event("change",{bubbles:!0}))}}}});var gn=(0,f.C8)([],{value:H}),Sn=M()(gn,2),un=Sn[0],en=Sn[1],sn=(0,f.zX)(function(pn){en(pn.fileList),ge==null||ge(pn)}),Dn=g()(g()({},ae),{},{fileList:un,onChange:sn}),An=function(Rn){var Tn=un.filter(function(wn){return wn.uid!==Rn.uid});sn({file:Rn,fileList:Tn})},Mn=(0,f.zX)(function(pn,Rn){var Tn={uid:pn.uid,name:Rn.name,size:Rn.size,type:Rn.type,originFileObj:Rn,status:"done",percent:100},wn=un.map(function(Kn){return Kn.uid===pn.uid?Tn:Kn});sn({file:Tn,fileList:wn})}),_n,In=function(Rn,Tn,wn){var Kn=typeof Y=="function"?Y(Rn):Y;return(0,a.jsx)(fe,{placeholder:Kn,upload:Dn,prefixCls:Ye,className:h()(me.placeholder),style:g()(g()({},De.placeholder),Tn==null?void 0:Tn.style),ref:wn})};if(I)_n=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Me,{upload:Dn,rootClassName:tn,ref:En,children:I}),(0,a.jsx)(A,{getDropContainer:G,prefixCls:Ye,className:h()(tn),children:In("drop")})]});else{var zn=un.length>0;_n=(0,a.jsxs)("div",{className:h()(Ye,m()({},"".concat(Ye,"-rtl"),Fe==="rtl"),q,tn),style:g()(g()({},c),T),dir:Fe||"ltr",ref:Pn,children:[(0,a.jsx)(Je,{prefixCls:Ye,items:un,onRemove:An,onReplace:S?Mn:void 0,overflow:ve,upload:Dn,listClassName:h()(me.list),listStyle:g()(g()({},De.list),!zn&&{display:"none"}),itemClassName:h()(me.item),itemStyle:g()({},De.item),renderType:t.renderType}),In("inline",zn?{style:{display:"none"}}:{},En)]})}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Oe,{}),(0,a.jsx)(n.Provider,{value:{disabled:s},children:_n})]})}var cn=u.forwardRef(Ve);cn.FileCard=be,cn.ImageCard=_e;var Be=cn},50130:function(ze,F,e){"use strict";e.d(F,{L:function(){return E},Z:function(){return u}});var $=e(97857),m=e.n($),N=e(13769),g=e.n(N),b=e(67294),M=e(83962),y=e(76289),j=e(85893),D=["component"],h=b.memo(function(f){var r=(0,M.HJ)(),n=(0,y.TQ)(function(o){return o.onInput}),a=(0,b.useMemo)(function(){if(f.component)return f.component;var o=r;return(o==null?void 0:o[f.code])||function(){return"".concat(f.code," not found")}},[]);if(typeof a=="function"){var A=f.component,l=g()(f,D);return(0,j.jsx)(a,m()(m()({},l),{},{context:{onInput:n}}))}else return a});function u(f){var r=f.cards;return r!=null&&r.length?r.map(function(n,a){var A=(0,j.jsx)(h,m()({index:a,id:f.id,isLast:f.isLast},n),(n==null?void 0:n.id)||a+n.code);return n.code==="Text"?(0,j.jsx)("div",{className:f.className,children:A},a):A}):null}function E(f,r){return{code:f,data:r}}},67369:function(ze,F,e){"use strict";e.d(F,{p4:function(){return E},hw:function(){return f},ZP:function(){return u}});var $=e(67294),m=e(56044),N=e(64057),g=e(68400),b=e.n(g),M=e(9053),y,j=(0,M.vJ)(y||(y=b()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorText},function(r){return r.theme.prefixCls},function(r){return r.theme.colorTextTertiary},function(r){return r.theme.colorBorder}),D=j,h=e(85893);function u(r){var n=(0,m.wv)(),a=n.getPrefixCls,A=a("bubble-footer"),l=r.left,o=r.right;return l&&!l.type||o&&!o.type?null:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(D,{}),(0,h.jsxs)("div",{className:A,children:[(0,h.jsx)("div",{className:"".concat(A,"-left"),children:r.left}),(0,h.jsx)("div",{className:"".concat(A,"-right"),children:r.right})]})]})}function E(r){var n=(0,m.wv)(),a=n.getPrefixCls,A=a("bubble-footer-actions");return(0,h.jsx)("div",{className:A,children:r.data.map(function(l,o){return l.children?$.cloneElement(l.children,{key:o}):(0,h.jsx)(N.Z,{bordered:!1,icon:l.icon,size:"small",onClick:l.onClick},o)})})}function f(r){var n=(0,m.wv)(),a=n.getPrefixCls,A=a("bubble-footer-count");return(0,h.jsx)("div",{className:A,children:r.data.map(function(l){return(0,h.jsxs)("div",{className:"".concat(A,"-item"),children:[l[0],"\uFF1A",l[1]]},l[0])})})}u.Actions=E,u.Count=f},10146:function(ze,F,e){"use strict";e.d(F,{Z:function(){return h}});var $=e(68400),m=e.n($),N=e(9053),g=e(56044),b=e(9343),M=e(36674),y=e(85893),j,D=(0,N.vJ)(j||(j=m()([`
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

`])),function(u){return u.theme.prefixCls},function(u){return u.theme.colorFillSecondary},function(u){return u.theme.prefixCls},function(u){return u.theme.prefixCls},function(u){return u.theme.colorText},function(u){return u.theme.colorError});function h(u){var E=u.title,f=E===void 0?"Answers have stopped":E,r=u.type,n=r===void 0?"interrupted":r,a=u.desc,A=(0,g.wv)(),l=A.getPrefixCls,o=l("interrupted");return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(D,{}),(0,y.jsxs)("div",{className:"".concat(o),children:[(0,y.jsxs)("div",{className:"".concat(o,"-header"),children:[(0,y.jsx)("div",{className:"".concat(o,"-icon-wrapper"),children:n==="interrupted"?(0,y.jsx)(b.Z,{className:"".concat(o,"-header-interrupted")}):(0,y.jsx)(M.Z,{className:"".concat(o,"-header-error")})}),(0,y.jsx)("span",{children:f})]}),a&&(0,y.jsx)("div",{className:"".concat(o,"-desc"),children:a})]})]})}},50867:function(ze,F,e){"use strict";e.d(F,{Z:function(){return Je}});var $=e(97857),m=e.n($),N=e(93967),g=e.n(N),b=e(67294),M=e(68400),y=e.n(M),j=e(9053),D,h=(0,j.vJ)(D||(D=y()([`
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
`])),function(B){return B.theme.prefixCls},function(B){return B.theme.prefixCls},function(B){return B.theme.colorText},function(B){return B.theme.fontSize},function(B){return B.theme.lineHeight},function(B){return B.theme.prefixCls},function(B){return B.theme.borderRadiusLG},function(B){return B.theme.colorPrimaryBg},function(B){return B.theme.prefixCls},function(B){return B.theme.colorText},function(B){return B.theme.colorText},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorTextTertiary},function(B){return B.theme.colorTextTertiary},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorTextSecondary},function(B){return B.theme.colorTextSecondary},function(B){return B.theme.colorBgBase},function(B){return B.theme.colorBgBase}),u=e(56044),E=e(66109),f=e(50130),r=e(85893);function n(){var B=(0,u.wv)(),W=B.getPrefixCls,Pe=W("bubble-loading");return(0,r.jsxs)("div",{className:Pe,children:[(0,r.jsx)("div",{className:"".concat(Pe,"-dot1")}),(0,r.jsx)("div",{className:"".concat(Pe,"-dot2")}),(0,r.jsx)("div",{className:"".concat(Pe,"-dot3")}),(0,r.jsx)("div",{className:"".concat(Pe,"-text"),children:"-"})]})}var a=e(9783),A=e.n(a),l=e(68997),o=function(W){var Pe=W.avatar,xe=W.msgStatus,fe=W.isAssistant,Ie=W.prefixCls,Me=W.className,Ze=W.style,Oe=b.isValidElement(Pe)?Pe:(0,r.jsx)(l.Z,m()({},Pe));return(0,r.jsx)("div",{className:g()("".concat(Ie,"-avatar"),A()({},"".concat(Ie,"-avatar-loading"),fe&&xe==="generating"),Me),style:Ze,children:Oe})},O=o,i,L=(0,j.vJ)(i||(i=y()([`
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
`])),function(B){return B.theme.prefixCls},function(B){return B.theme.prefixCls},function(B){return B.theme.colorFillSecondary},function(B){return B.theme.prefixCls},function(B){return B.theme.colorBorder},function(B){return B.theme.colorBorderSecondary},function(B){return B.theme.colorBorder},function(B){return B.theme.prefixCls}),ne=b.createContext({}),K=function(W){var Pe=W.isLast,xe=W.className,fe=W.rootClassName,Ie=W.style,Me=W.classNames,Ze=Me===void 0?{}:Me,Oe=W.styles,Xe=Oe===void 0?{}:Oe,Ve=W.avatar,cn=W.content,Be=cn===void 0?"":cn,t=W.cards,Re=W.msgStatus,We=W.id,tn=W.role,c=W.variant,q={assistant:"start",user:"end"}[tn]||"start",T=(0,u.wv)(),H=T.getPrefixCls,I=H("bubble"),G=g()(I,fe,xe,"".concat(I,"-").concat(q)),Y,ge=!(Be!=null&&Be.length)&&!(t!=null&&t.length);W.msgStatus==="generating"&&ge?Y=(0,r.jsx)(n,{}):Y=Be?(0,r.jsx)(E.Z,{content:Be,cursor:W.msgStatus==="generating"}):null;var ve=q==="assistant"||q==="start",s="".concat(I,"-content-").concat(c||(ve?"borderless":"filled")),S=(0,r.jsxs)("div",{style:!ve&&Y?{flexDirection:"column-reverse"}:{},className:"".concat(I,"-content-wrapper"),children:[Ve&&(0,r.jsx)(O,{avatar:Ve,msgStatus:Re,isAssistant:ve,prefixCls:I,className:Ze.avatar,style:Xe.avatar}),(0,r.jsx)(f.Z,{cards:t,id:We,isLast:Pe,className:g()("".concat(I,"-content"),"".concat(I,"-content-wrapper-card"),s,Ze.content)}),Y&&(0,r.jsx)("div",{style:m()({},Xe.content),className:g()("".concat(I,"-content"),"".concat(I,"-content-wrapper-card"),s,Ze.content),children:Y})]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{}),(0,r.jsx)(L,{}),(0,r.jsx)("div",{style:Ie,className:G,id:We,"data-role":tn,children:S})]})},z=b.memo(K),oe=e(5574),Q=e.n(oe),C=e(13769),w=e.n(C),V=e(64057),Ce=e(25109),x=function(W){var Pe=W.visible,xe=W.onClick,fe=(0,u.wv)(),Ie=fe.getPrefixCls,Me=Ie("bubble-list-scroll-to-bottom");return(0,r.jsx)("div",{className:g()(Me,"".concat(Me,"-").concat(Pe?"show":"hide")),children:(0,r.jsx)(V.Z,{icon:(0,r.jsx)(Ce.Z,{}),shape:"circle",onClick:xe})})},p=x,pe,de=(0,j.vJ)(pe||(pe=y()([`
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
`])),function(B){return B.theme.prefixCls},function(B){return B.theme.prefixCls},function(B){return B.theme.prefixCls},function(B){return B.theme.prefixCls},function(B){return B.theme.prefixCls},function(B){return B.theme.colorPrimaryBorder},function(B){return B.theme.colorPrimaryBg},function(B){return B.theme.colorPrimary}),X=e(42532),se=e(45908),k=e(19632),re=e.n(k),ce=e(64599),Ge=e.n(ce),_e=e(73935),Ke=function(W,Pe){var xe=(0,b.useState)(1),fe=Q()(xe,2),Ie=fe[0],Me=fe[1],Ze=(Pe==null?void 0:Pe.order)||"asc",Oe=(0,b.useMemo)(function(){var Xe=[],Ve=[],cn=Ge()(W),Be;try{for(cn.s();!(Be=cn.n()).done;){var t=Be.value;t.history?Xe.push(t):Ve.push(t)}}catch(Re){cn.e(Re)}finally{cn.f()}return Ze==="desc"?[].concat(Ve,re()(Xe.slice(0,Ie*10))):[].concat(re()(Xe.slice(-Ie*10)),Ve)},[W,Ie,Ze]);return Pe!=null&&Pe.enable?{items:Oe,noMore:Oe.length===W.length,loadMore:function(Ve){return new Promise(function(cn){setTimeout(function(){var Be,t=Ve==null?void 0:Ve.current,Re=(Be=t==null?void 0:t.scrollHeight)!==null&&Be!==void 0?Be:0;if((0,_e.flushSync)(function(){Me(function(tn){return tn+1})}),t){var We=t.scrollHeight;t.scrollTop+=We-Re}cn()},1e3)})}}:{items:W,noMore:!0,loadMore:function(Ve){return Promise.resolve()}}},mn=e(57381),hn=["key"];function vn(B){var W=B.order,Pe=B.paginationItems,xe=B.noMore,fe=B.loadMore,Ie=B.scrollRef,Me=B.children,Ze=(0,b.useCallback)(function(){return fe(Ie)},[fe,Ie]);return(0,r.jsxs)(r.Fragment,{children:[W==="asc"&&!xe?(0,r.jsx)(nn,{handleLoadMore:Ze}):null,Me||Pe.map(function(Oe,Xe){var Ve=Oe.key,cn=w()(Oe,hn),Be=Xe===Pe.length-1;return(0,b.createElement)(z,m()(m()({},cn),{},{isLast:Be,key:cn.id||Ve||Xe}))}),W==="desc"&&!xe?(0,r.jsx)(nn,{handleLoadMore:Ze}):null]})}function nn(B){var W=B.handleLoadMore,Pe=(0,b.useRef)(null),xe=(0,X.Z)(Pe),fe=Q()(xe,1),Ie=fe[0],Me=(0,b.useState)(!1),Ze=Q()(Me,2),Oe=Ze[0],Xe=Ze[1],Ve=(0,se.Z)(Ie),cn=(0,u.wv)(),Be=cn.getPrefixCls,t=Be("bubble-list");return(0,b.useEffect)(function(){Ie&&Ve===void 0||Oe||Ie&&(Xe(!0),W().finally(function(){Xe(!1)}))},[Ve,Ie,Oe,W]),(0,r.jsx)("div",{ref:Pe,className:"".concat(t,"-load-more"),children:(0,r.jsx)(mn.Z,{spinning:!0})})}var Ne=function(W,Pe){var xe,fe,Ie=W.items,Me=Ie===void 0?[]:Ie,Ze=W.order,Oe=Ze===void 0?"asc":Ze,Xe=(0,b.useState)(!1),Ve=Q()(Xe,2),cn=Ve[0],Be=Ve[1],t=b.useRef(null),Re=b.useRef(!0),We=(0,u.wv)(),tn=We.getPrefixCls,c=tn("bubble-list"),q=Oe==="desc",T=(0,b.useCallback)(function(){var S=t.current;return S?q?S.scrollTop<=2:S.scrollHeight-S.clientHeight-S.scrollTop<=2:!0},[q]),H=(0,b.useCallback)(function(){var S=t.current;if(!S)return!1;var ee=S.scrollHeight-S.clientHeight>2;return ee?q?S.scrollTop<=-10:S.scrollHeight-S.clientHeight-S.scrollTop>10:!1},[q]),I=(0,b.useCallback)(function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"auto",ee=t.current;ee&&(q?ee.scrollTop=0:ee.scrollTo({top:ee.scrollHeight,behavior:S}),Re.current=!0,Be(!1))},[q]),G=(0,b.useCallback)(function(){var S=t.current,ee=T();Re.current=ee,Be(H())},[T,H]);b.useImperativeHandle(Pe,function(){return{scrollToBottom:function(S){function ee(){return S.apply(this,arguments)}return ee.toString=function(){return S.toString()},ee}(function(){I("auto")})}},[I]);var Y=Ke(Me,{enable:W.pagination,order:Oe}),ge=Y.items,ve=Y.noMore,s=Y.loadMore;return(0,b.useEffect)(function(){I("auto")},[Me.length,I]),(0,b.useEffect)(function(){var S=t.current},[Me.length,Oe]),(0,b.useEffect)(function(){requestAnimationFrame(function(){var S=T();Re.current=S,Be(H())})},[T,H,Oe]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(de,{}),(0,r.jsxs)("div",{id:W.id,className:g()("".concat(c,"-wrapper"),W.className,(xe=W.classNames)===null||xe===void 0?void 0:xe.wrapper),style:W.style,children:[(0,r.jsxs)("div",{className:g()("".concat(c,"-scroll"),"".concat(c),"".concat(c,"-order-").concat(Oe),(fe=W.classNames)===null||fe===void 0?void 0:fe.list),ref:t,onScroll:G,children:[Oe==="desc"&&(0,r.jsx)("div",{className:"".concat(c,"-order-desc-short")}),(0,r.jsx)(vn,{order:Oe,paginationItems:ge,noMore:ve,loadMore:s,scrollRef:t,children:W.children})]}),(0,r.jsx)(p,{visible:cn,onClick:function(){return I("auto")}})]})]})},Cn=b.forwardRef(Ne),U=Cn,be=e(67369),Ue=e(10146);z.List=U,z.Spin=n,z.Footer=be.ZP,z.Interrupted=Ue.Z;var Je=z},76289:function(ze,F,e){"use strict";e.d(F,{TQ:function(){return r},vi:function(){return E}});var $=e(97857),m=e.n($),N=e(13769),g=e.n(N),b=e(5574),M=e.n(b),y=e(67294),j=e(79785),D=e(59214),h=e(85893),u=["children"];function E(n){var a=(0,j.Z)([]),A=M()(a,3),l=A[0],o=A[1],O=A[2],i=(0,j.Z)("0"),L=M()(i,3),ne=L[0],K=L[1],z=L[2],oe=(0,j.Z)(0),Q=M()(oe,3),C=Q[0],w=Q[1],V=Q[2],Ce=(0,j.Z)([]),x=M()(Ce,3),p=x[0],pe=x[1],de=x[2],X=(0,j.Z)(!1),se=M()(X,3),k=se[0],re=se[1],ce=se[2],Ge=(0,j.Z)(!1),_e=M()(Ge,3),Ke=_e[0],mn=_e[1],hn=_e[2],vn=(0,j.Z)(!0),nn=M()(vn,3),Ne=nn[0],Cn=nn[1],U=nn[2],be=n.children,Ue=g()(n,u),Je=m()({sessionList:l,setSessionList:o,getSessionList:O,currentSessionKey:ne,setCurrentSessionKey:K,getCurrentSessionKey:z,messages:p,setMessages:pe,getMessages:de,loading:k,setLoading:re,getLoading:ce,disabled:Ke,setDisabled:mn,getDisabled:hn,sessionListShow:Ne,setSessionListShow:Cn,getSessionListShow:U,currentRegenerateIndex:C,setCurrentRegenerateIndex:w,getCurrentRegenerateIndex:V},Ue);return(0,h.jsx)(f.Provider,{value:Je,children:be})}var f=(0,D.createContext)(void 0);function r(n){try{var a=(0,D.useContextSelector)(f,n);return a}catch(A){return{}}}},37254:function(ze,F,e){"use strict";e.d(F,{G:function(){return m}});var $=e(76289);function m(){var N=(0,$.TQ)(function(h){return{loading:h.loading,getLoading:h.getLoading,disabled:h.disabled,getDisabled:h.getDisabled,setLoading:h.setLoading,setDisabled:h.setDisabled}}),g=N.loading,b=N.disabled,M=N.setLoading,y=N.setDisabled,j=N.getLoading,D=N.getDisabled;return{loading:g,disabled:b,setLoading:M,setDisabled:y,getLoading:j,getDisabled:D}}},4421:function(ze,F,e){"use strict";e.d(F,{y:function(){return y}});var $=e(19632),m=e.n($),N=e(97857),g=e.n(N),b=e(67294),M=e(76289);function y(){var j=(0,M.TQ)(function(a){return{messages:a.messages,setMessages:a.setMessages,getMessages:a.getMessages}}),D=j.messages,h=j.setMessages,u=j.getMessages,E=b.useCallback(function(){var a,A=((a=arguments.length<=0?void 0:arguments[0])===null||a===void 0?void 0:a.id)||(arguments.length<=0?void 0:arguments[0]),l=(arguments.length<=1?void 0:arguments[1])||(arguments.length<=0?void 0:arguments[0]);h==null||h(function(o){var O=o.findIndex(function(L){return L.id===A});if(O>-1){var i=g()(g()({},o[O]),l);return[].concat(m()(o.slice(0,O)),[i],m()(o.slice(O+1)))}else return[].concat(m()(o),[l])})},[]),f=b.useCallback(function(a){h(function(A){return A.filter(function(l){return l.id!==a.id})})},[]),r=b.useCallback(function(){h([])},[]),n=b.useCallback(function(a){return u().find(function(A){return A.id===a})},[]);return{messages:D,getMessage:n,setMessages:h,getMessages:u,updateMessage:E,removeMessage:f,removeAllMessages:r}}},61316:function(ze,F,e){"use strict";e.d(F,{x:function(){return D}});var $=e(97857),m=e.n($),N=e(19632),g=e.n(N),b=e(67294),M=e(76289),y=e(88773),j=e(73935);function D(){var h=(0,M.TQ)(function(C){return{getCurrentSessionKey:C.getCurrentSessionKey,currentRegenerateIndex:C.currentRegenerateIndex,setCurrentRegenerateIndex:C.setCurrentRegenerateIndex,getCurrentRegenerateIndex:C.getCurrentRegenerateIndex,sessionListShow:C.sessionListShow,setSessionListShow:C.setSessionListShow,sessionList:C.sessionList,setSessionList:C.setSessionList,currentSessionKey:C.currentSessionKey,setCurrentSessionKey:C.setCurrentSessionKey,getSessionList:C.getSessionList}}),u=h.getCurrentSessionKey,E=h.sessionList,f=h.setSessionList,r=h.currentSessionKey,n=h.setCurrentSessionKey,a=h.sessionListShow,A=h.setSessionListShow,l=h.currentRegenerateIndex,o=h.setCurrentRegenerateIndex,O=h.getCurrentRegenerateIndex,i=h.getSessionList,L=b.useCallback(function(){var C=(0,y.Z)(),w={label:Date.now().toString(),key:C,messages:[[]]};return j.flushSync(function(){f(function(V){var Ce=[].concat(g()(V),[w]);return Ce}),n(C)}),C},[]),ne=b.useCallback(function(C){f(function(w){var V=w.filter(function(Ce){return Ce.key!==C});return V})},[]),K=b.useCallback(function(C){var w=u(),V=O();f(function(Ce){return Ce.map(function(x){return x.key===w?(x.messages[V]=C,m()({},x)):x})})},[]),z=b.useCallback(function(C,w){var V;return(V=i().find(function(Ce){return Ce.key===C}))===null||V===void 0?void 0:V.messages[w]},[]),oe=b.useCallback(function(){return{sessionList:i(),currentSessionKey:u(),currentRegenerateIndex:O()}},[]),Q=b.useCallback(function(C){var w=C.sessionList,V=C.currentSessionKey,Ce=C.currentRegenerateIndex;f(w),n(V),o(Ce)},[]);return{currentRegenerateIndex:l,setCurrentRegenerateIndex:o,getCurrentRegenerateIndex:O,sessionList:E,setSessionList:f,getSessionList:i,currentSessionKey:r,setCurrentSessionKey:n,sessionListShow:a,setSessionListShow:A,createSession:L,deleteSession:ne,updateSessionMessages:K,getMessagesBySession:z,getSession:oe,updateSession:Q}}},29041:function(ze,F,e){"use strict";e.d(F,{ZP:function(){return q}});var $=e(97857),m=e.n($),N=e(13769),g=e.n(N),b=e(5574),M=e.n(b),y=e(67294),j=e(93967),D=e.n(j),h=e(56044),u=e(85265),E=e(17909),f=e(76289),r=e(68400),n=e.n(r),a=e(9053),A,l=(0,a.vJ)(A||(A=n()([`

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
`])),function(T){return T.theme.prefixCls},function(T){return T.theme.fontFamily},function(T){return T.theme.colorBgBase},function(T){return T.theme.colorBgBase},function(T){return T.theme.colorBgBase},function(T){return T.theme.colorFillTertiary}),o=e(85893);function O(T){var H=(0,f.TQ)(function(S){return{sessionListShow:S.sessionListShow,setSessionListShow:S.setSessionListShow}}),I=H.sessionListShow,G=H.setSessionListShow,Y=(0,h.wv)(),ge=Y.getPrefixCls,ve=ge("chat-anywhere-layout"),s=L();return(0,y.useEffect)(function(){G(!s)},[s]),T.left?s?(0,o.jsx)(u.Z,{width:"80vw",styles:{body:{padding:0}},open:I,onClose:function(){G(!1)},title:null,closable:!1,placement:"left",children:(0,o.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:T.left})}):(0,o.jsx)("div",{className:D()("".concat(ve,"-left"),I?"":"".concat(ve,"-left-hide")),children:T.left}):null}function i(T){var H=(0,h.wv)(),I=H.getPrefixCls,G=I("chat-anywhere-layout"),Y=(0,f.TQ)(function(ge){return ge.uiConfig});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{}),(0,o.jsx)("div",{className:G,children:(0,o.jsxs)("div",{className:"".concat(G,"-main"),children:[(0,o.jsx)(O,m()({},T)),(0,o.jsxs)("div",{className:"".concat(G,"-right"),style:{background:Y==null?void 0:Y.background},children:[T.top,T.right]})]})})]})}var L=function(){var H=(0,E.Z)(),I=(0,f.TQ)(function(G){return G.uiConfig});return!H.md||(I==null?void 0:I.narrowScreen)},ne=e(9368),K=e(64057),z=e(21403),oe=e(61316),Q=e(4421),C,w=(0,a.vJ)(C||(C=n()([`
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

`])),function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls}),V=e(50287),Ce=e(67392),x=e(13660),p=e(12624);function pe(){var T=(0,h.wv)(),H=T.getPrefixCls,I=H("chat-anywhere-session-list"),G=(0,f.TQ)(function(Y){return Y.sessionListShow});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w,{}),(0,o.jsxs)("div",{className:D()("".concat(I),G?"":"".concat(I,"-hide")),children:[(0,o.jsx)(X,{}),(0,o.jsx)(de,{})]})]})}function de(){var T=(0,h.wv)(),H=T.getPrefixCls,I=H("chat-anywhere-session-list"),G=(0,oe.x)(),Y=G.currentSessionKey,ge=G.setCurrentSessionKey,ve=G.currentRegenerateIndex,s=G.sessionList,S=G.getMessagesBySession,ee=G.setSessionListShow,me=(0,Q.y)(),ue=me.setMessages,De=(0,f.TQ)(function(Fe){return Fe.getLoading}),ae=(0,f.TQ)(function(Fe){return Fe.onSessionKeyChange}),$e=L();return(0,y.useEffect)(function(){var Fe=S(Y,ve);ue(Fe)},[Y,ve]),(0,o.jsx)("div",{className:"".concat(I,"-session"),children:(0,o.jsx)(ne.Z,{menu:[{key:"delete",icon:(0,o.jsx)(V.Z,{}),danger:!0,onClick:function(he){}}],activeKey:Y,items:s,onActiveChange:function(he){De()||($e&&ee(!1),requestIdleCallback(function(){ge(he),ae(he)}))}})})}function X(){var T=(0,h.wv)(),H=T.getPrefixCls,I=H("chat-anywhere-session-list"),G=(0,oe.x)(),Y=G.currentSessionKey,ge=G.setCurrentSessionKey,ve=G.deleteSession,s=G.createSession,S=G.sessionList,ee=G.sessionListShow,me=G.setSessionListShow,ue=(0,f.TQ)(function(ae){return ae.uiConfig}),De=L();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"".concat(I,"-logo"),children:[ue==null?void 0:ue.logo,(0,o.jsx)(K.Z,{bordered:!1,onClick:function(){return me(!ee)},icon:ee?(0,o.jsx)(Ce.Z,{}):(0,o.jsx)(x.Z,{})})]}),(0,o.jsx)("div",{className:"".concat(I,"-adder"),children:(0,o.jsx)(z.Z,{type:"primary",block:!0,icon:(0,o.jsx)(p.Z,{}),onClick:function(){De&&me(!1),s()},children:"New Session"})})]})}var se=e(9783),k=e.n(se),re=e(19632),ce=e.n(re),Ge=e(50867),_e=e(52677),Ke=e.n(_e),mn=e(15009),hn=e.n(mn),vn=e(99289),nn=e.n(vn),Ne=e(41154),Cn=e(66672),U=e(50993),be=e(37254),Ue,Je=(0,a.vJ)(Ue||(Ue=n()([`
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
`])),function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls}),B=e(86578),W=e(7654),Pe=e(92053),xe=e(86250),fe=["trigger"];function Ie(T){var H=T.uploadPropsList,I=(0,h.wv)(),G=I.getPrefixCls,Y=G("chat-anywhere-sender"),ge=(0,y.useState)(!1),ve=M()(ge,2),s=ve[0],S=ve[1],ee=(0,y.useRef)([]),me=(0,y.useMemo)(function(){return H.map(function(De,ae){return(0,o.jsx)("div",{onClick:function(){var Fe;(Fe=ee.current[ae])===null||Fe===void 0||Fe.click(),S(!1)},children:De.trigger},ae)})},[H]),ue=(0,y.useMemo)(function(){return H.map(function(De,ae){var $e=De.trigger,Fe=g()(De,fe);return(0,o.jsx)(Ne.Z,m()(m()({},Fe),{},{children:(0,o.jsx)("div",{ref:function(Ye){return ee.current[ae]=Ye}})}),ae)})},[H]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(W.Z,{placement:"bottomLeft",open:s,onOpenChange:S,content:(0,o.jsx)(xe.Z,{vertical:!0,children:me}),trigger:"click",styles:{body:{padding:4}},children:(0,o.jsx)(K.Z,{icon:(0,o.jsx)(Pe.Z,{}),bordered:!1})}),(0,o.jsx)("div",{className:"".concat(Y,"-upload-hidden-nodes"),children:ue})]})}var Me=(0,y.forwardRef)(function(T,H){var I,G=y.useState(""),Y=M()(G,2),ge=Y[0],ve=Y[1],s=(0,be.G)(),S=(0,f.TQ)(function(rn){return rn.onUpload.map(function(He){return m()(m()({},He),{},{disabled:He.disabled||s.disabled})})}),ee=new Array((S==null?void 0:S.length)||0).fill([]),me=(0,y.useState)(!1),ue=M()(me,2),De=ue[0],ae=ue[1],$e=y.useState(ee),Fe=M()($e,2),he=Fe[0],Ye=Fe[1],Pn=(0,y.useRef)(ee);(0,y.useEffect)(function(){Ye(ee)},[ee.length]),(0,y.useEffect)(function(){Pn.current=he},[he]);var En=(0,f.TQ)(function(rn){return rn.uiConfig}),gn=(0,h.wv)(),Sn=gn.getPrefixCls,un=Sn("chat-anywhere-sender"),en=(0,f.TQ)(function(rn){return rn.onStop}),sn=(0,f.TQ)(function(rn){var He={beforeUI:void 0,afterUI:void 0,morePrefixActions:void 0,maxLength:void 0,suggestions:void 0,beforeSubmit:function(){return Promise.resolve(!0)},header:[],enableFocusExpand:!1,variant:"default",hide:!1};return m()(m()({},He),rn.onInput)});if(y.useImperativeHandle(H,function(){return{setInputContent:function(He,Ln){ve(He),Ye(Ln||[[]])},getAttachedFiles:function(){return Pn.current}}},[]),(0,y.useEffect)(function(){s.setDisabled(sn.disabled)},[sn.disabled]),sn.hide)return null;var Dn=function(){var rn=nn()(hn()().mark(function He(Ln,xn){return hn()().wrap(function(kn){for(;;)switch(kn.prev=kn.next){case 0:Ye(function(Wn){return Wn.map(function(Vn,Qn){return Qn===Ln?xn:Vn})});case 1:case"end":return kn.stop()}},He)}));return function(Ln,xn){return rn.apply(this,arguments)}}(),An=(0,y.useMemo)(function(){if(sn.variant==="aigc"||!(S!=null&&S.length))return[];var rn=S.map(function(He,Ln){var xn;return He.trigger?xn=He.trigger:(He.title||He.description)&&S.length>1?xn=(0,o.jsxs)(z.Z,{type:"text",icon:He.icon,children:[He.title&&(0,o.jsx)("span",{children:He.title}),He.description&&(0,o.jsx)("span",{style:{fontSize:"0.8em",opacity:.8},children:He.description})]}):xn=(0,o.jsx)(K.Z,{icon:He.icon,bordered:!1}),m()(m()({},He),{},{fileList:he[Ln],key:Ln,onChange:function(kn){He.beforeUpload&&kn.file.status&&Dn(Ln,kn.fileList),He.beforeUpload||Dn(Ln,kn.fileList)},showUploadList:!1,trigger:xn})});return rn.length===1?(0,o.jsx)(Ne.Z,m()(m()({},rn[0]),{},{children:rn[0].trigger})):(0,o.jsx)(Ie,{uploadPropsList:rn})},[sn.variant,S,he]),Mn=(0,o.jsx)(B.Z.SenderHeader,{onUpload:S,attachedFiles:he,onFileChange:Dn}),_n=(0,o.jsx)(Cn.Z.Header,{closable:!1,open:he==null?void 0:he.some(function(rn){return rn.length}),children:he.map(function(rn,He){return rn.length?(0,o.jsx)(U.Z,{items:rn,replaceable:!0,onChange:function(xn){return Dn(He,xn.fileList)}},He):null})}),In=sn.variant==="aigc"?Mn:_n,zn=he.map(function(rn){return rn.filter(function(He){return He.status==="done"})}),pn=he.some(function(rn){return rn.some(function(He){return He.status==="uploading"})}),Rn=zn.some(function(rn){return rn.length>0}),Tn=function(He){if(!(S!=null&&S.length))return;var Ln=He.type||"",xn=He.name||"",Xn=function($n){return $n?$n.split(",").some(function(nt){var Fn=nt.trim();if(!Fn)return!1;if(Fn.startsWith("."))return xn.toLowerCase().endsWith(Fn.toLowerCase());if(Fn.includes("*")){if(Fn==="*/*")return!0;var Jn=Fn.split("/"),Yn=M()(Jn,1),On=Yn[0],bn=Ln.split("/"),Nn=M()(bn,1),qn=Nn[0];return On===qn}return Ln===Fn}):!0},kn=S.findIndex(function(Bn){return Xn(Bn.accept)});if(kn===-1)return;var Wn=S[kn],Vn=he[kn]||[];if(Wn.maxCount&&Vn.length>=Wn.maxCount||!Wn.multiple&&Vn.length>0)return;if(Wn.beforeUpload){var Qn=Wn.beforeUpload(He,[He]);if(Qn===!1||Qn===Ne.Z.LIST_IGNORE)return;if(Qn instanceof Promise){Qn.then(function(Bn){if(!(Bn===!1||Bn===Ne.Z.LIST_IGNORE)){var $n=Bn&&Ke()(Bn)==="object"?Bn:He;et($n)}}).catch(function(Bn){console.error("beforeUpload promise rejected:",Bn)});return}if(Qn&&Ke()(Qn)==="object"){et(Qn);return}}et(He);function et(Bn){var $n=function(){var bn=xn.match(/\.([^.]+)$/);if(bn)return bn[1].toLowerCase();var Nn=Ln.match(/\/([^/+]+)/);return Nn?Nn[1].toLowerCase():"bin"},nt=Date.now(),Fn={uid:"paste_".concat(nt,"_").concat(Math.random().toString(36).slice(2,11)),name:xn||"pasted-".concat(nt,".").concat($n()),size:Bn.size,type:Ln,status:"uploading",percent:0,originFileObj:Bn},Jn=function(bn){Ye(function(Nn){var qn=ce()(Nn);return qn[kn]=(qn[kn]||[]).map(function(rt){return rt.uid===Fn.uid?m()(m()({},rt),bn):rt}),qn})};if(Ye(function(On){var bn=ce()(On),Nn=bn[kn]||[];if(!Wn.multiple)bn[kn]=[Fn];else{if(Wn.maxCount&&Nn.length>=Wn.maxCount)return On;bn[kn]=[].concat(ce()(Nn),[Fn])}return bn}),Ln&&Ln.startsWith("image/")){var Yn=new FileReader;Yn.onload=function(On){var bn,Nn=(bn=On.target)===null||bn===void 0?void 0:bn.result;typeof Nn=="string"&&Jn({thumbUrl:Nn,url:Nn})},Yn.readAsDataURL(Bn)}Wn.customRequest({file:Bn,onSuccess:function(bn){Jn({status:"done",response:bn,percent:100})},onError:function(bn){Jn({status:"error",error:bn})},onProgress:function(bn){Jn({percent:bn.percent})}},{defaultRequest:function(){}})}},wn=(0,y.useMemo)(function(){var rn;return(rn=S==null?void 0:S.some(function(He,Ln){if(He.required){var xn=he[Ln]||[];return xn.length===0}return!1}))!==null&&rn!==void 0?rn:!1},[S,he]),Kn=wn;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Je,{}),(0,o.jsxs)("div",{className:D()("".concat(un,"-wrapper"),k()(k()({},"".concat(un,"-wrapper-focus"),De&&sn.enableFocusExpand),"".concat(un,"-wrapper-blur"),!De&&sn.enableFocusExpand)),children:[En.quickInput&&(0,o.jsx)("div",{className:D()("".concat(un,"-wrapper-header")),children:En.quickInput}),sn.beforeUI,(0,o.jsx)(Cn.Z,{suggestions:sn.suggestions,placeholder:sn.placeholder,enableFocusExpand:sn.enableFocusExpand,value:ge,onChange:ve,maxLength:sn.maxLength,disabled:pn||s.disabled,sendDisabled:Kn,allowEmptySubmit:((I=sn.allowEmptySubmit)!==null&&I!==void 0?I:!0)&&Rn,header:In,prefix:(0,o.jsxs)(o.Fragment,{children:[An,sn==null?void 0:sn.morePrefixActions]}),onSubmit:nn()(hn()().mark(function rn(){var He;return hn()().wrap(function(xn){for(;;)switch(xn.prev=xn.next){case 0:return xn.next=2,(sn.beforeSubmit||function(){return Promise.resolve(!0)})();case 2:if(He=xn.sent,He){xn.next=5;break}return xn.abrupt("return");case 5:sn.onSubmit({query:ge,fileList:zn}),ve(""),Ye(ee);case 8:case"end":return xn.stop()}},rn)})),onCancel:function(){en==null||en(),s.setLoading(!1)},onFocus:function(){return ae(!0)},onBlur:function(){return ae(!1)},onPasteFile:Tn,loading:s.loading}),sn.afterUI]})]})}),Ze=e(69637),Oe=e(10325),Xe,Ve=(0,a.vJ)(Xe||(Xe=n()([`
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


`])),function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls}),cn=(0,y.forwardRef)(function(T,H){var I,G=(0,f.TQ)(function(he){return he.messages}),Y=ce()(G||[]).reverse(),ge=(0,h.wv)(),ve=ge.getPrefixCls,s=ve("chat-anywhere"),S=(0,f.TQ)(function(he){return he.uiConfig}),ee=(0,y.useState)(!1),me=M()(ee,2),ue=me[0],De=me[1],ae=y.useRef(Y.length);y.useEffect(function(){if(Y.length>ae.current){var he,Ye;H==null||(he=H.chatRef)===null||he===void 0||(he=he.current)===null||he===void 0||(Ye=he.scrollToBottom)===null||Ye===void 0||Ye.call(he)}ae.current=Y.length},[Y.length,H]),(0,Ze.Z)(function(){De(!0)},300);var $e=D()("".concat(s,"-chat"),k()({},"".concat(s,"-chat-hide"),!ue)),Fe=Y.length===0;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Ve,{}),(0,o.jsxs)("div",{className:$e,children:[(0,o.jsx)(Ge.Z.List,{pagination:S==null||(I=S.bubbleList)===null||I===void 0?void 0:I.pagination,order:"desc",style:{height:0,flex:Fe?0:1},ref:H.chatRef,items:Y}),Fe?(0,o.jsx)("div",{className:"".concat($e,"-welcome"),children:S==null?void 0:S.welcome}):null,(0,o.jsx)("div",{className:"".concat($e,"-sender"),style:S!=null&&S.disclaimer?{marginBottom:16}:{},children:(0,o.jsx)(Me,{ref:H.inputRef})}),(S==null?void 0:S.disclaimer)&&(0,o.jsx)(Oe.Z,{style:{position:"absolute",bottom:0,width:"100%"},desc:S==null?void 0:S.disclaimer})]})]})}),Be,t=(0,a.vJ)(Be||(Be=n()([`
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

`])),function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls},function(T){return T.theme.prefixCls});function Re(){var T=(0,h.wv)(),H=T.getPrefixCls,I=H("chat-anywhere-header"),G=(0,f.TQ)(function(S){return S.uiConfig}),Y=(0,oe.x)(),ge=Y.sessionListShow,ve=Y.setSessionListShow,s=L();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{}),(0,o.jsxs)("div",{className:I,children:[s&&(0,o.jsx)(K.Z,{style:{marginLeft:12},bordered:!1,onClick:function(){return ve(!ge)},icon:ge?(0,o.jsx)(Ce.Z,{}):(0,o.jsx)(x.Z,{})}),G.header]})]})}var We=e(83962),tn=y.forwardRef(function(H,I){var G=(0,Q.y)(),Y=(0,be.G)(),ge=(0,oe.x)();return y.useImperativeHandle(I,function(){return m()(m()(m()({},G),Y),ge)}),null}),c=["cardConfig"],q=(0,y.forwardRef)(function(T,H){var I,G=(0,y.useState)(0),Y=M()(G,2),ge=Y[0],ve=Y[1],s=T.cardConfig,S=g()(T,c),ee=(0,y.useRef)(null),me=(0,y.useRef)(null),ue=(0,y.useRef)(null);return y.useImperativeHandle(H,function(){return m()(m()(m()(m()({},ee.current),me.current),ue.current),{},{reload:function(){ve(function(ae){return ae+1})}})}),(0,y.createElement)(f.vi,m()(m()({},S),{},{key:ge}),(0,o.jsxs)(We.xy,{cardConfig:s,children:[(0,o.jsx)(i,{top:(I=S.uiConfig)!==null&&I!==void 0&&I.header?(0,o.jsx)(Re,{}):null,left:S.onSessionKeyChange?(0,o.jsx)(pe,{}):null,right:(0,o.jsx)(cn,{ref:{chatRef:ee,inputRef:me}})}),(0,o.jsx)(tn,{ref:ue})]}))})},9368:function(ze,F,e){"use strict";e.d(F,{Z:function(){return Cn}});var $=e(97857),m=e.n($),N=e(19632),g=e.n(N),b=e(9783),M=e.n(b),y=e(5574),j=e.n(y),D=e(13769),h=e.n(D),u=e(93967),E=e.n(u),f=e(67294),r=e(21317),n=e(85893),a=f.createContext(null),A=function(be){var Ue=be.children,Je=f.useContext(a),B=Je.prefixCls;return(0,n.jsx)("div",{className:E()("".concat(B,"-group-title")),children:Ue&&(0,n.jsx)(r.default.Text,{children:Ue})})},l=A,o=e(30339),O=e(54604),i=e(45617),L=e(7654),ne=e(64057),K=e(21403),z=e(42532),oe=["prefixCls","info","className","direction","onClick","active","selectable","selected","onSelect","menu"],Q=["key"],C={};function w(U){var be=(0,f.useState)(C[U]),Ue=j()(be,2),Je=Ue[0],B=Ue[1];return[Je,function(W){for(var Pe in C)C[Pe]=!1;C[U]=W,B(W)}]}var V=f.memo(function(U){var be,Ue=w(U.info.key),Je=j()(Ue,2),B=Je[0],W=Je[1],Pe=(0,f.useState)(!1),xe=j()(Pe,2),fe=xe[0],Ie=xe[1],Me=U.prefixCls,Ze=U.info,Oe=U.className,Xe=U.direction,Ve=U.onClick,cn=U.active,Be=U.selectable,t=U.selected,Re=U.onSelect,We=U.menu,tn=h()(U,oe),c=(0,o.Z)(tn,{aria:!0,data:!0,attr:!0}),q=(0,f.useRef)(null),T=(0,z.Z)(q),H=j()(T,1),I=H[0],G=Ze.disabled,Y=E()(Oe,"".concat(Me,"-item"),M()({},"".concat(Me,"-item-active"),cn&&!G),M()({},"".concat(Me,"-item-disabled"),G),M()({},"".concat(Me,"-item-timeline"),Ze.timeline||Be)),ge=function(){if(Be)return Re==null?void 0:Re(Ze.key,!t);if(!G&&Ve)return Ve(Ze)};return(0,n.jsxs)("li",m()(m()({ref:q},c),{},{className:Y,onClick:ge,children:[I&&Ze.icon&&(0,n.jsx)("div",{className:"".concat(Me,"-icon"),children:Ze.icon}),I&&(0,n.jsxs)("div",{className:"".concat(Me,"-content-wrapper"),children:[(0,n.jsxs)("div",{className:"".concat(Me,"-content"),children:[(Ze.timeline||Be)&&(0,n.jsx)("div",{className:"".concat(Me,"-timeline"),children:Be?(0,n.jsx)("div",{className:"".concat(Me,"-timeline-checkbox"),onClick:function(s){return s.stopPropagation()},children:(0,n.jsx)(i.Z,{checked:t,onChange:function(){return Re==null?void 0:Re(Ze.key,!t)}})}):(0,n.jsx)("div",{className:"".concat(Me,"-timeline-dot")})}),(0,n.jsx)(Ce,{editable:B,setEditable:W,prefixCls:Me,info:Ze,onEdit:We==null||(be=We.find(function(ve){return ve.key==="edit"}))===null||be===void 0?void 0:be.onEdit}),We&&!G&&!Be&&(0,n.jsx)(L.Z,{styles:{body:{padding:4}},trigger:["click"],open:fe,onOpenChange:Ie,content:(0,n.jsx)("div",{className:"".concat(Me,"-menu-popover"),children:We.map(function(ve){var s=ve.key,S=h()(ve,Q),ee=m()(m()({},S),{},{onClick:function(ue){if(s==="edit")W(!0);else{var De;(De=S.onClick)===null||De===void 0||De.call(S,Ze)}Ie(!1)}});return(0,n.jsx)(p,m()(m()({},ee),{},{info:Ze}),s)})}),placement:"bottom",children:(0,n.jsx)(ne.Z,{bordered:!1,icon:(0,n.jsx)(O.Z,{}),disabled:G,className:"".concat(Me,"-menu-icon"),onClick:function(s){return s.stopPropagation()}})})]}),Ze.desc&&(0,n.jsx)("div",{className:"".concat(Me,"-desc"),style:Ze.timeline||Be?{marginLeft:16}:{},children:Ze.desc})]})]}))});function Ce(U){var be=U.editable,Ue=U.prefixCls,Je=U.info,B=U.setEditable,W=U.onEdit,Pe=(0,f.useState)(Je.label),xe=j()(Pe,2),fe=xe[0],Ie=xe[1],Me=(0,f.useState)(Je.label),Ze=j()(Me,2),Oe=Ze[0],Xe=Ze[1];return Je.label!==Oe&&(Xe(Je.label),Ie(Je.label)),be?(0,n.jsx)(x,{prefixCls:Ue,value:fe,onBlur:function(cn){var Be;if(cn===fe)return B(!1);(Be=W(cn,Je))===null||Be===void 0||Be.then(function(){Ie(cn)}).catch(function(){Ie(fe)}).finally(function(){B(!1)})},setEditable:B}):(0,n.jsx)("div",{className:"".concat(Ue,"-label"),children:fe})}function x(U){var be=U.prefixCls,Ue=U.value,Je=U.onBlur,B=U.setEditable,W=(0,f.useState)(Ue),Pe=j()(W,2),xe=Pe[0],fe=Pe[1],Ie=(0,f.useRef)();return(0,f.useEffect)(function(){Ie.current.focus()},[]),(0,f.useEffect)(function(){fe(Ue)},[Ue]),(0,n.jsx)("input",{ref:Ie,className:"".concat(be,"-label-edit"),value:xe,onClick:function(Ze){return Ze.stopPropagation()},onChange:function(Ze){return fe(Ze.target.value)},onBlur:function(){return Je(xe)}})}function p(U){var be=U.label,Ue=U.icon,Je=U.danger,B=U.info,W=U.disabled,Pe=function(fe){var Ie;W||(fe.stopPropagation(),(Ie=U.onClick)===null||Ie===void 0||Ie.call(U,B))};return Ue&&be?(0,n.jsx)(K.Z,{disabled:W,icon:Ue,danger:Je,type:"text",onClick:Pe,children:be}):Ue?(0,n.jsx)(ne.Z,{disabled:W,icon:Ue,danger:Je,bordered:!1,onClick:Pe}):be?(0,n.jsx)(K.Z,{disabled:W,danger:Je,type:"text",onClick:Pe,children:be}):null}var pe=V,de=e(60869),X=e(56044),se=e(52677),k=e.n(se),re="__ungrouped",ce=function(be){var Ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],Je=f.useMemo(function(){if(!be)return[!1,void 0,void 0];var fe={sort:void 0,title:void 0};return k()(be)==="object"&&(fe=m()(m()({},fe),be)),[!0,fe.sort,fe.title]},[be]),B=j()(Je,3),W=B[0],Pe=B[1],xe=B[2];return f.useMemo(function(){if(!W){var fe=[{name:re,data:Ue,title:void 0}];return[fe,W]}var Ie=Ue.reduce(function(Oe,Xe){var Ve=Xe.group||re;return Oe[Ve]||(Oe[Ve]=[]),Oe[Ve].push(Xe),Oe},{}),Me=Pe?Object.keys(Ie).sort(Pe):Object.keys(Ie),Ze=Me.map(function(Oe){return{name:Oe===re?void 0:Oe,title:xe,data:Ie[Oe]}});return[Ze,W]},[Ue,be])},Ge=ce,_e=e(68400),Ke=e.n(_e),mn=e(9053),hn,vn=(0,mn.vJ)(hn||(hn=Ke()([`
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
}`])),function(U){return U.theme.prefixCls},function(U){return U.theme.paddingXXS},function(U){return U.theme.prefixCls},function(U){return U.theme.paddingXL},function(U){return U.theme.prefixCls},function(U){return U.theme.colorTextSecondary},function(U){return U.theme.colorBgBase},function(U){return U.theme.colorBorder},function(U){return U.theme.colorTextSecondary},function(U){return U.theme.borderRadiusLG},function(U){return U.theme.colorBorder},function(U){return U.theme.colorFillTertiary},function(U){return U.theme.colorFillTertiary},function(U){return U.theme.prefixCls},function(U){return U.theme.prefixCls},function(U){return U.theme.colorText},function(U){return U.theme.prefixCls},function(U){return U.theme.colorTextDisabled},function(U){return U.theme.prefixCls},function(U){return U.theme.prefixCls},function(U){return U.theme.colorFillTertiary},function(U){return U.theme.colorText},function(U){return U.theme.colorText},function(U){return U.theme.fontFamily},function(U){return U.theme.fontSizeXL},function(U){return U.theme.controlHeightLG},function(U){return U.theme.controlHeightLG},function(U){return U.theme.paddingXS}),nn=["prefixCls","rootClassName","items","activeKey","defaultActiveKey","onActiveChange","selectable","selectedKeys","onSelectChange","menu","styles","classNames","groupable","className","style"],Ne=function(be){var Ue=be.prefixCls,Je=be.rootClassName,B=be.items,W=be.activeKey,Pe=be.defaultActiveKey,xe=be.onActiveChange,fe=be.selectable,Ie=be.selectedKeys,Me=be.onSelectChange,Ze=be.menu,Oe=be.styles,Xe=Oe===void 0?{}:Oe,Ve=be.classNames,cn=Ve===void 0?{}:Ve,Be=be.groupable,t=be.className,Re=be.style,We=h()(be,nn),tn=(0,o.Z)(We,{attr:!0,aria:!0,data:!0}),c=(0,de.Z)(Pe,{value:W}),q=j()(c,2),T=q[0],H=q[1],I=Ge(Be,B),G=j()(I,2),Y=G[0],ge=G[1],ve=(0,X.wv)(),s=ve.direction,S=ve.getPrefixCls,ee=S("conversations"),me=E()(ee,t,Je,M()({},"".concat(ee,"-rtl"),s==="rtl")),ue=f.useRef(xe);ue.current=xe;var De=f.useCallback(function(he){var Ye;H(he.key),(Ye=ue.current)===null||Ye===void 0||Ye.call(ue,he.key)},[H]),ae=f.useRef(Ie);ae.current=Ie;var $e=f.useRef(Me);$e.current=Me;var Fe=f.useCallback(function(he,Ye){if($e.current){var Pn=ae.current||[],En=Ye?[].concat(g()(Pn),[he]):Pn.filter(function(gn){return gn!==he});$e.current(En)}},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(vn,{}),(0,n.jsx)("ul",m()(m()({},tn),{},{style:Re,className:me,children:Y.map(function(he,Ye){var Pn=he.data.map(function(gn,Sn){var un=fe!=null?fe:gn.selectable,en=un?Ie?Ie.includes(gn.key):gn.selected:!1,sn=Me?Fe:gn.onSelect;return(0,n.jsx)(pe,{info:gn,prefixCls:ee,direction:s,className:E()(cn.item),style:Xe.item,menu:Ze,active:T===gn.key,selectable:un,selected:en,onSelect:sn,onClick:De},gn.key||"key-".concat(Sn))});if(ge){var En;return(0,n.jsxs)("li",{children:[(0,n.jsx)(a.Provider,{value:{prefixCls:ee},children:((En=he.title)===null||En===void 0?void 0:En.call(he,he.name,{components:{GroupTitle:l}}))||(0,n.jsx)(l,{children:he.name},he.name)}),(0,n.jsx)("ul",{className:"".concat(ee,"-list"),children:Pn})]},he.name||"key-".concat(Ye))}return Pn})}))]})},Cn=Ne},14617:function(ze,F,e){"use strict";e.d(F,{Z:function(){return D}});var $=e(68400),m=e.n($),N=e(23345),g=e(11526),b=e(9053),M=e(56044),y=e(85893),j;function D(u){var E=(0,M.wv)().getPrefixCls("bubble-audio");return(0,y.jsxs)(N.Z,{direction:"vertical",children:[(0,y.jsx)(h,{}),u.data.map(function(f,r){return(0,y.jsx)("div",{className:E,children:(0,y.jsx)(g.Z,{src:f.src})},r)})]})}var h=(0,b.vJ)(j||(j=m()([`
.`,`-bubble-audio {
  background-color: `,`;
  border: 1px solid `,`;
  padding-right: 4px;
  border-radius: `,`px;
}
`])),function(u){return u.theme.prefixCls},function(u){return u.theme.colorBgBase},function(u){return u.theme.colorBorderSecondary},function(u){return u.theme.borderRadiusLG})},18946:function(ze,F,e){"use strict";e.d(F,{Z:function(){return E}});var $=e(68400),m=e.n($),N=e(23345),g=e(67294),b=e(50993),M=e(9053),y=e(56044),j=e(6411),D=e(85893),h,u=(0,M.vJ)(h||(h=m()([`
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
`])),function(f){return f.theme.prefixCls},function(f){return f.theme.prefixCls},function(f){return f.theme.borderRadius},function(f){return f.theme.colorWhite},function(f){return f.theme.motionDurationSlow},function(f){return f.theme.prefixCls},function(f){return f.theme.prefixCls});function E(f){var r=(0,y.wv)(),n=r.getPrefixCls,a=n("bubble-files");return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{}),(0,D.jsx)(N.Z,{className:a,children:f.data.map(function(A,l){var o={name:A.name||A.filename,size:A.size||A.bytes,url:A.url};return(0,D.jsxs)("div",{className:"".concat(a,"-file"),children:[(0,D.jsx)(b.Z.FileCard,{item:o}),o.url&&(0,D.jsx)("div",{className:"".concat(a,"-download"),onClick:function(){window.open(o.url,"_blank")},children:(0,D.jsx)(j.Z,{})})]},l)})})]})}},18755:function(ze,F,e){"use strict";e.d(F,{Z:function(){return E}});var $=e(68400),m=e.n($),N=e(9053),g=e(56044),b=e(16494),M=e(55839),y=e(23345),j=e(85893),D,h=(0,N.vJ)(D||(D=m()([`
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
`])),function(f){return f.theme.prefixCls},function(f){return f.theme.prefixCls},function(f){return f.theme.prefixCls},function(f){return f.theme.prefixCls});function u(f){var r=(0,g.wv)(),n=r.getPrefixCls,a=n("bubble-image");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h,{}),(0,j.jsx)("div",{className:"".concat(a),children:(0,j.jsx)(b.Z,{fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",src:f.url,width:56,height:56,preview:{transitionName:""}})})]})}function E(f){return(0,j.jsx)(M.ZP,{locale:{Image:{preview:""}},children:(0,j.jsx)(y.Z,{children:f.data.map(function(r,n){return(0,j.jsx)(u,{url:r.url},n)})})})}},60747:function(ze,F,e){"use strict";e.d(F,{Z:function(){return D}});var $=e(68400),m=e.n($),N=e(23345),g=e(51794),b=e(9053),M=e(56044),y=e(85893),j;function D(u){var E=(0,M.wv)().getPrefixCls("bubble-video");return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h,{}),(0,y.jsx)(N.Z,{children:u.data.map(function(f,r){return(0,y.jsx)("div",{className:E,children:(0,y.jsx)(g.Z,{src:f.src,poster:f.poster,controls:!0})},r)})})]})}var h=(0,b.vJ)(j||(j=m()([`
.`,`-bubble-video {
  width: 256px;
  height: 144px;
  border-radius: 8px;
  border: 1px solid `,`;
  overflow: hidden;
}
`])),function(u){return u.theme.prefixCls},function(u){return u.theme.colorBorderSecondary})},73420:function(ze,F,e){"use strict";e.r(F),e.d(F,{Audios:function(){return a.Z},DeepThink:function(){return g},DeepThinking:function(){return g},Files:function(){return b.Z},Footer:function(){return E},FooterActions:function(){return u.p4},FooterCount:function(){return u.hw},Images:function(){return M.Z},Interrupted:function(){return r},Text:function(){return h},Videos:function(){return n.Z}});var $=e(67294),m=e(14082),N=e(85893);function g(A){return(0,N.jsx)(m.Z,{defaultOpen:A.data.defaultOpen!==void 0?A.data.defaultOpen:!0,title:A.data.title,loading:A.data.loading,content:A.data.content,className:A.data.className,open:A.data.open,autoCloseOnFinish:A.data.autoCloseOnFinish,maxHeight:A.data.maxHeight})}var b=e(18946),M=e(18755),y=e(97857),j=e.n(y),D=e(66109);function h(A){var l=A.data.msgStatus==="generating";return(0,N.jsx)(D.Z,j()(j()({cursor:l},A.data),{},{typing:A.data.msgStatus==="generating"?A.data.typing:!1}))}var u=e(67369);function E(A){return(0,N.jsx)(u.ZP,j()({},A.data))}var f=e(10146);function r(A){return(0,N.jsx)(f.Z,j()({},A.data))}var n=e(60747),a=e(14617)},55031:function(ze,F,e){"use strict";e.d(F,{Z:function(){return ne}});var $=e(56044),m=e(31382),N=e(55839),g=e(16494),b=e(33948),M=e(52253),y=e(56137),j=e(1948),D=e(61763),h=e(77900),u=e(40443),E=e(33119),f=e(4356),r=e(72816),n=e(77382),a=e(72167),A=e(74398),l=e(55094),o=e(61401),O=e(85893),i={Click:{name:"\u70B9\u51FB",icon:(0,O.jsx)(b.Z,{})},Swipe:{name:"\u6ED1\u52A8",icon:(0,O.jsx)(M.Z,{})},Type:{name:"\u8F93\u5165",icon:(0,O.jsx)(y.Z,{})},Back:{name:"\u8FD4\u56DE",icon:(0,O.jsx)(j.Z,{})},Home:{name:"\u4E3B\u9875",icon:(0,O.jsx)(D.Z,{})},Done:{name:"\u5B8C\u6210",icon:(0,O.jsx)(h.Z,{})},Wait:{name:"\u7B49\u5F85",icon:(0,O.jsx)(u.Z,{spin:!0})},click:{name:"\u70B9\u51FB",icon:(0,O.jsx)(b.Z,{})},"right click":{name:"\u53F3\u952E\u70B9\u51FB",icon:(0,O.jsx)(b.Z,{})},"open app":{name:"\u6253\u5F00\u5E94\u7528",icon:(0,O.jsx)(E.Z,{})},computer_double_click:{name:"\u53CC\u51FB",icon:(0,O.jsx)(f.Z,{})},hotkey:{name:"\u5FEB\u6377\u952E",icon:(0,O.jsx)(r.Z,{})},presskey:{name:"\u6309\u952E",icon:(0,O.jsx)(n.Z,{})},scroll:{name:"\u6EDA\u52A8",icon:(0,O.jsx)(M.Z,{})},drag:{name:"\u62D6\u62FD",icon:(0,O.jsx)(a.Z,{})},type_with_clear_enter_pos:{name:"\u8F93\u5165\u5E76\u6E05\u9664",icon:(0,O.jsx)(y.Z,{})},triple_click:{name:"\u4E09\u51FB",icon:(0,O.jsx)(A.Z,{})},drag_end:{name:"\u62D6\u62FD\u7ED3\u675F",icon:(0,O.jsx)(a.Z,{})},type:{name:"\u8F93\u5165",icon:(0,O.jsx)(y.Z,{})},hscroll:{name:"\u6C34\u5E73\u6EDA\u52A8",icon:(0,O.jsx)(l.Z,{})},done:{name:"\u5B8C\u6210",icon:(0,O.jsx)(h.Z,{})},wait:{name:"\u7B49\u5F85",icon:(0,O.jsx)(u.Z,{spin:!0})},call_user:{name:"\u547C\u53EB\u7528\u6237",icon:(0,O.jsx)(o.Z,{})}},L=i;function ne(K){var z,oe,Q=(0,$.wv)(),C=Q.getPrefixCls,w=C("operate-card");return(0,O.jsxs)("div",{children:[(0,O.jsx)("div",{className:"".concat(w,"-device-action-time"),children:K.time}),(0,O.jsx)(m.Z,{header:{className:"".concat(w,"-device-action"),icon:(0,O.jsx)("div",{className:"".concat(w,"-device-action-icon"),children:(z=L[K.action])===null||z===void 0?void 0:z.icon}),title:(0,O.jsxs)("div",{className:"".concat(w,"-device-action-content"),children:[(0,O.jsxs)("div",{className:"".concat(w,"-device-action-description"),children:[(0,O.jsx)("span",{children:K.actionName||((oe=L[K.action])===null||oe===void 0?void 0:oe.name)}),(0,O.jsx)("span",{children:K.description})]}),(0,O.jsx)("div",{className:"".concat(w,"-device-action-image"),children:(0,O.jsx)(N.ZP,{locale:{Image:{preview:""}},children:(0,O.jsx)(g.Z,{src:K.image,alt:K.description,width:"100%",height:"100%"})})})]})}})]})}},10325:function(ze,F,e){"use strict";e.d(F,{Z:function(){return D}});var $=e(67294),m=e(68400),N=e.n(m),g=e(9053),b,M=(0,g.vJ)(b||(b=N()([`
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
`])),function(h){return h.theme.prefixCls},function(h){return h.theme.colorTextTertiary},function(h){return h.theme.prefixCls}),y=e(56044),j=e(85893);function D(h){var u=h.desc,E=u===void 0?"AI can also make mistakes, so please check carefully and use it with caution":u,f=(0,y.wv)(),r=f.getPrefixCls,n=r("disclaimer");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(M,{}),(0,j.jsxs)("div",{className:n,style:h.style,children:[E,h.afterLink&&(0,j.jsx)("a",{className:"".concat(n,"-after-link"),href:h.afterLink.href,target:"_blank",children:h.afterLink.text})]})]})}},80115:function(ze,F,e){"use strict";e.d(F,{Z:function(){return m}});var $=e(85893);function m(){return(0,$.jsx)("iframe",{srcDoc:`<html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>`})}},2534:function(ze,F,e){"use strict";e.d(F,{Z:function(){return A}});var $=e(67294),m=e(68400),N=e.n(m),g=e(9053),b,M=(0,g.vJ)(b||(b=N()([`
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

`])),function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.colorText},function(l){return l.theme.colorSuccess},function(l){return l.theme.colorBgBase},function(l){return l.theme.prefixCls}),y=e(56044),j=e(55839),D=e(16494),h=e(89034),u=e(36374),E=e(85893);function f(){for(var l=arguments.length,o=new Array(l),O=0;O<l;O++)o[O]=arguments[O];return o.filter(Boolean).join(" ")}var r=function(o){var O=o.speed,i=O===void 0?1:O,L=o.backgroundColor,ne=L===void 0?"#b6a9f8":L,K=o.colors,z=K===void 0?["#c979ee","#ef788c","#eb7fc6","#6d67c8"]:K,oe=o.ringColors,Q=oe===void 0?["white","blue","magenta","violet","lightyellow"]:oe,C=o.className,w=C===void 0?"":C,V=(0,$.useRef)(null);return(0,$.useEffect)(function(){if(CSS&&CSS.registerProperty)try{CSS.registerProperty({name:"--a",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--l",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--x",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--y",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--o",syntax:"<number>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--value",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--width-ratio",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--scale",syntax:"<number>",inherits:!0,initialValue:"0"})}catch(Ce){}},[]),(0,$.useEffect)(function(){var Ce=V.current;if(Ce){var x=function(){var de=Ce.getBoundingClientRect(),X=Math.min(de.width,de.height);Ce.style.setProperty("--actual-size","".concat(X,"px"))};x();var p=new ResizeObserver(x);return p.observe(Ce),function(){p.disconnect()}}},[]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("style",{children:`
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
          background: `).concat(ne,`;
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
          background: radial-gradient(50% 50% at center, `).concat(z[0]||"#c979ee",", color-mix(in srgb, ").concat(z[0]||"#c979ee",`, transparent 30%));
          --x: calc(var(--s) * 0.04);
          width: calc(var(--s) * 0.6);
          animation-timing-function: cubic-bezier(0.12, 0.32, 0.68, 0.24);
        }

        .fluid-background-container .c2 {
          background: radial-gradient(50% 50% at center, `).concat(z[1]||"#ef788c",", color-mix(in srgb, ").concat(z[1]||"#ef788c",`, white 40%));
          width: calc(var(--s) * 0.55);
        }

        .fluid-background-container .c3 {
          background: radial-gradient(50% 50% at center, `).concat(z[2]||"#eb7fc6",`, transparent);
          width: calc(var(--s) * 0.2);
          opacity: 0.6;
          --x: calc(var(--s) * -0.04);
        }

        .fluid-background-container .c4 {
          background: `).concat(z[3]||"#6d67c8",`;
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
      `)}),(0,E.jsxs)("div",{ref:V,className:f("fluid-background-container",w),children:[(0,E.jsxs)("div",{className:"fluid-inner",children:[(0,E.jsx)("div",{className:"c c4",style:{"--i":0}}),(0,E.jsx)("div",{className:"c c1",style:{"--i":1}}),(0,E.jsx)("div",{className:"c c2",style:{"--i":2}}),(0,E.jsx)("div",{className:"c c3",style:{"--i":3}}),(0,E.jsx)("div",{className:"rings"})]}),(0,E.jsx)("div",{className:"glass"})]})]})},n=r,a=function(o){var O=(0,y.wv)(),i=O.getPrefixCls,L=i("image-generator"),ne=o.block,K=o.skeletonText,z=o.width,oe=z===void 0?320:z,Q=o.height,C=Q===void 0?320:Q,w=o.src,V=o.loadingText,Ce=V===void 0?"Painting...":V,x=o.doneText,p=x===void 0?"Paint Completed":x,pe=o.skeleton||(0,E.jsxs)("div",{className:"".concat(L,"-default-skeleton"),style:{width:"100%",height:"100%"},children:[(0,E.jsx)("div",{className:"".concat(L,"-default-skeleton-bg"),children:(0,E.jsx)(n,{})}),(0,E.jsxs)("div",{className:"".concat(L,"-default-skeleton-content"),children:[(0,E.jsx)("img",{className:"".concat(L,"-default-skeleton-icon"),src:"https://img.alicdn.com/imgextra/i2/O1CN01M1X8yM1MWUC7u3Go5_!!6000000001442-54-tps-72-72.apng"}),K&&(0,E.jsx)("div",{className:"".concat(L,"-default-skeleton-text"),children:K})]})]}),de=!w,X=ne?{aspectRatio:"".concat(oe,"/").concat(C)}:{width:oe,height:C};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(M,{}),(0,E.jsxs)("div",{className:L,children:[(0,E.jsxs)("div",{className:"".concat(L,"-text"),children:[de?(0,E.jsx)(u.Z,{}):(0,E.jsx)(h.Z,{className:"".concat(L,"-text-success")}),de?(0,E.jsx)("span",{style:{paddingLeft:20},children:Ce}):p]}),(0,E.jsx)("div",{className:"".concat(L,"-wrapper"),style:X,children:de?pe:(0,E.jsx)(j.ZP,{locale:{Image:{preview:""}},children:(0,E.jsx)(D.Z,{width:"100%",height:"100%",src:w})})})]})]})},A=a},66109:function(ze,F,e){"use strict";e.d(F,{Z:function(){return tn}});var $=e(19632),m=e.n($),N=e(97857),g=e.n(N),b=e(67294),M=e(13769),y=e.n(M),j=e(55729),D=e(68400),h=e.n(D),u=e(9053),E,f=(0,u.vJ)(E||(E=h()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.colorBorder},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorText},function(c){return c.theme.borderRadiusSM},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.borderRadiusSM},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorBgBase},function(c){return c.theme.prefixCls},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorSuccess},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.motionEaseOut},function(c){return c.theme.colorWhite},function(c){return c.theme.colorPrimary});function r(c){var q=c.cursor,T=c.content,H=c.animation,I=(0,b.useMemo)(function(){return H?"":q?q==="dot"?" :dot:":q==="underline"?" :underline:":" :dot:":""},[q,T]);return T+I}var n=e(85893),a=["content","cursor","animation"];function A(c){var q=c.content,T=c.cursor,H=c.animation,I=y()(c,a),G=r({cursor:T,content:q,animation:H}),Y=(0,b.useMemo)(function(){if(H)return{hasNextChunk:H&&T,enableAnimation:H&&T}},[T,H]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{}),(0,n.jsx)(j.Z,g()(g()({},I),{},{content:G,streaming:Y}))]})}var l=e(5574),o=e.n(l),O=function(q){var T=q.content,H=q.typing,I=(0,b.useState)(0),G=o()(I,2),Y=G[0],ge=G[1],ve=(0,b.useRef)();return(0,b.useEffect)(function(){return H?ve.current=setInterval(function(){ge(function(s){return s+1})},typeof H=="number"?H:5):ve.current&&clearInterval(ve.current),function(){return clearInterval(ve.current)}},[H]),H?T.slice(0,Y):T},i=O,L=e(56044),ne=e(93967),K=e.n(ne),z=function(){return null},oe=e(87427),Q=e(96643),C=e(6411),w=e(97634),V=e(89698),Ce=e(39536),x={javascript:"js",typescript:"ts",python:"py",ruby:"rb",rust:"rs",kotlin:"kt",csharp:"cs",markdown:"md",yaml:"yml",shell:"sh",bash:"sh",zsh:"sh",mermaid:"mmd",jsx:"jsx",tsx:"tsx"},p=function(q){var T,H=q.className,I=q.children,G=(H==null||(T=H.match(/language-(\w+)/))===null||T===void 0?void 0:T[1])||"";return typeof I!="string"?null:G==="mermaid"?(0,n.jsx)(oe.Z,{header:(0,n.jsx)(pe,{lang:"mermaid",content:I}),children:I}):(0,n.jsx)(Q.Z,{lang:G,header:(0,n.jsx)(pe,{lang:G,content:I}),children:I})};function pe(c){var q=c.lang,T=c.content,H=(0,b.useState)(!1),I=o()(H,2),G=I[0],Y=I[1],ge=(0,b.useRef)(),ve=(0,L.wv)(),s=ve.getPrefixCls,S=s("code-header"),ee=(0,b.useCallback)(function(){var ue=x[q]||q||"txt",De=new Blob([T],{type:"text/plain;charset=utf-8"}),ae=URL.createObjectURL(De),$e=document.createElement("a");$e.href=ae,$e.download="code.".concat(ue),$e.click(),URL.revokeObjectURL(ae)},[q,T]),me=(0,b.useCallback)(function(){(0,Ce.J)(T).then(function(){clearTimeout(ge.current),Y(!0),ge.current=setTimeout(function(){return Y(!1)},2e3)}).catch(function(){console.warn("Copy failed")})},[T]);return(0,n.jsxs)("div",{className:S,children:[(0,n.jsx)("div",{className:"".concat(S,"-lang"),children:q}),(0,n.jsxs)("div",{className:"".concat(S,"-actions"),children:[(0,n.jsx)(C.Z,{className:"".concat(S,"-download"),onClick:ee}),G?(0,n.jsx)(w.Z,{className:"".concat(S,"-copied")}):(0,n.jsx)(V.Z,{className:"".concat(S,"-icon"),onClick:me})]})]})}var de=p;function X(c){return(0,n.jsx)("a",{href:c.src,target:"_blank",rel:"noopener noreferrer",children:c.src})}var se=e(55839),k=e(16494),re=e(85576),ce=e(36231),Ge=e(89102);function _e(c){try{var q=c.src,T=new URL(q),H=T.pathname,I=H.endsWith(".mp4"),G=H.endsWith(".mp3")||H.endsWith(".wav");return G?(0,n.jsx)("audio",g()(g()({src:c.src},c),{},{controls:!0})):I?(0,n.jsx)(mn,g()({src:c.src},c)):(0,n.jsx)(Ke,g()({src:c.src},c))}catch(Y){return null}}function Ke(c){return(0,n.jsx)(se.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(k.Z,g()({src:c.src},c))})}function mn(c){var q=c.src,T=(0,b.useState)(!1),H=o()(T,2),I=H[0],G=H[1],Y=(0,L.wv)(),ge=Y.getPrefixCls,ve=ge("markdown-video");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:ve,children:(0,n.jsx)("div",{className:"".concat(ve,"-poster"),onClick:function(){return G(!0)},children:(0,n.jsx)(ce.Z,{className:"".concat(ve,"-play")})})}),(0,n.jsx)(re.Z,{closeIcon:(0,n.jsx)("a",{children:(0,n.jsx)(Ge.Z,{style:{fontSize:20}})}),centered:!0,transitionName:"",footer:null,width:500,title:"",styles:{content:{padding:0}},open:I,destroyOnHidden:!0,onCancel:function(){return G(!1)},children:(0,n.jsx)("video",{controls:!0,autoPlay:!0,style:{display:"block",width:"100%"},children:(0,n.jsx)("source",{src:q,type:"video/mp4"})})})]})}function hn(c){var q=(0,L.wv)().getPrefixCls("markdown");return(0,n.jsx)("div",{className:q,style:{fontSize:c.baseFontSize,lineHeight:c.baseLineHeight},children:c.content})}var vn=e(79427),nn=e(55241),Ne,Cn=(0,u.vJ)(Ne||(Ne=h()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.motionEaseOut},function(c){return c.theme.colorWhite},function(c){return c.theme.colorPrimary});function U(c){var q=(0,L.wv)(),T=q.getPrefixCls,H=T("markdown-citation"),I=c["data-text"],G=c["data-url"],Y=c["data-title"],ge=c["data-content"],ve=ge||Y,s=(0,n.jsx)("sup",{className:H,children:I});return ve&&(s=(0,n.jsx)(nn.Z,{title:Y,content:G?(0,n.jsx)("a",{href:G,rel:"noreferrer",target:"_blank",children:G}):ge,children:s})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Cn,{}),s]})}function be(c){var q,T=((q=c.citationsData[c["data-text"]])===null||q===void 0?void 0:q.render)||U;return(0,n.jsx)(T,g()({},c))}var Ue=[],Je={};function B(c){var q=c.citations,T=q===void 0?Ue:q,H=c.citationsMap,I=H===void 0?Je:H,G=(0,b.useMemo)(function(){var s=g()({},I);return T.forEach(function(S,ee){var me=ee+1;s[me]=S}),[s,function(){return function(ee){return(0,n.jsx)(be,g()(g()({},ee),{},{citationsData:s}))}}()]},[T,I]),Y=o()(G,2),ge=Y[0],ve=Y[1];return{CitationComponent:ve,citationsData:ge,citationsDataCount:Object.keys(ge).length}}var W=e(30861);function Pe(c){return{name:"citation",level:"inline",tokenizer:function(T){var H=T.match(/^\[([^\]]+)\](?!\()/);if(H){var I=H[0].trim(),G=I==null?void 0:I.replace(/^\[([^\]]+)\]/g,"$1");if(c[G])return{type:"citation",raw:I,text:I==null?void 0:I.replace(/^\[([^\]]+)\]/g,"$1"),renderType:"component"}}},renderer:function(T){if(c&&Object.keys(c).length===0)return null;var H=T.text,I=c==null?void 0:c[H];return I?'<citation data-text="'.concat(H,'" data-url="').concat(I.url,'" data-title="').concat(I.title,'" data-content="').concat(I.content,'"></citation>'):T.raw}}}var xe,fe=(0,u.vJ)(xe||(xe=h()([`
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
`])),function(c){var q=c.theme;return q.colorPrimary});function Ie(){var c=(0,L.wv)(),q=c.getPrefixCls,T="markdown-cursor-underline";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(fe,{}),(0,n.jsx)("span",{className:K()(T,q("markdown-cursor"))})]})}var Me=e(36374),Ze=function(q){var T=q["data-type"];return T==="dot"?(0,n.jsx)(Me.Z,{}):T==="underline"?(0,n.jsx)(Ie,{}):null};function Oe(){var c={cursors:{dot:"dot",underline:"underline"}},q=Object.keys(c.cursors).map(function(I){return I.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|"),T=new RegExp(":(".concat(q,"):")),H=new RegExp("^".concat(T.source));return{name:"cursor",level:"inline",start:function(G){var Y;return(Y=G.match(T))===null||Y===void 0?void 0:Y.index},tokenizer:function(G,Y){var ge=H.exec(G);if(ge){var ve=ge[1],s=c.cursors[ve];if(s)return{type:"cursor",raw:ge[0],name:ve,cursor:s}}},renderer:function(G){var Y='<custom-cursor data-type="'.concat(G.name,'"></custom-cursor>');return Y}}}var Xe=e(85018),Ve=["href"];function cn(c){return c["data-footnote-ref"]===""?(0,n.jsx)(Be,g()({},c)):c.children==="\u21A9"&&c["data-footnote-backref"]===""?null:(0,n.jsx)("a",g()({},c))}function Be(c){var q=(0,L.wv)(),T=q.getPrefixCls,H=T("markdown-footnote"),I=c.href,G=y()(c,Ve);return(0,n.jsx)("a",g()(g()({},G),{},{className:H,onClick:function(){try{var ge=c.id.split("-"),ve=o()(ge,3),s=ve[0],S=ve[1],ee=ve[2],me=document.querySelector("#footnote-".concat(ee)).querySelector("a").getAttribute("href");window.open(me,"_blank")}catch(ue){}}}))}var t={ALLOWED_TAGS:[]};function Re(){try{return new RegExp("(?<=a)b"),!0}catch(c){return!1}}var We=Re(),tn=(0,b.memo)(function(c){var q=c.baseFontSize||14,T=c.baseLineHeight||1.7,H=i({content:c.content,typing:c.typing&&!c.animation}),I=(0,L.wv)().getPrefixCls("markdown"),G=c.raw,Y=G===void 0?!1:G,ge=c.allowHtml,ve=ge===void 0?!1:ge,s=B({citations:c.citations,citationsMap:c.citationsMap}),S=s.citationsData,ee=s.citationsDataCount,me=s.CitationComponent,ue=(0,b.useMemo)(function(){return g()({code:de,style:z,script:z,img:c.disableImage?X:_e,citation:me,"custom-cursor":Ze,a:cn},c.components)},[c.disableImage,me,c.components]),De=(0,b.useMemo)(function(){return{ADD_TAGS:["custom-cursor","citation"]}},[]),ae=(0,b.useMemo)(function(){var Sn=(0,W.Z)();Sn.push(Oe()),ee>0&&Sn.push(Pe(S));var un=(0,Xe.Z)({sectionClass:"".concat(I,"-footnotes")});return Sn.push.apply(Sn,m()(un.extensions)),{extensions:Sn,walkTokens:un.walkTokens}},[ee,S]),$e=ae.extensions,Fe=ae.walkTokens,he=(0,b.useMemo)(function(){return g()({extensions:$e,walkTokens:Fe},!ve&&{renderer:{html:function(un){var en=un.text||un.raw||"";return en.replace(/</g,"&lt;").replace(/>/g,"&gt;")}}})},[$e,ve]),Ye=H||"",Pn=(0,n.jsx)(hn,{content:Ye,baseFontSize:q,baseLineHeight:T}),En=(0,b.useCallback)(function(){for(var Sn=arguments.length,un=new Array(Sn),en=0;en<Sn;en++)un[en]=arguments[en];return console.error(un),(0,n.jsx)(hn,{content:Ye,baseFontSize:q,baseLineHeight:T})},[Ye,q,T]),gn=(0,b.useMemo)(function(){return{fontSize:q,lineHeight:T}},[q,T]);return Y||!We?Pn:(0,n.jsx)(vn.SV,{fallbackRender:En,children:(0,n.jsx)(A,{dompurifyConfig:De,cursor:c.cursor,animation:c.animation,components:ue,style:gn,openLinksInNewTab:!0,className:K()(I,c.className),content:Ye,config:he})})})},36374:function(ze,F,e){"use strict";e.d(F,{Z:function(){return h}});var $=e(68400),m=e.n($),N=e(56044),g=e(9053),b=e(93967),M=e.n(b),y=e(85893),j,D=(0,g.vJ)(j||(j=m()([`
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
`])),function(u){return u.theme.prefixCls},function(u){return u.theme.colorText},function(u){return u.theme.colorText});function h(){var u=(0,N.wv)(),E=u.getPrefixCls,f=E("markdown-cursor-dot");return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(D,{}),(0,y.jsxs)("span",{className:M()(f,E("markdown-cursor")),children:[(0,y.jsx)("span",{style:{opacity:0,marginLeft:"-.75em"},children:"_"}),(0,y.jsx)("span",{className:"".concat(f,"-dot1")}),(0,y.jsx)("span",{className:"".concat(f,"-dot2")})]})]})}},12181:function(ze,F,e){"use strict";e.d(F,{Z:function(){return L}});var $=e(5574),m=e.n($),N=e(15009),g=e.n(N),b=e(99289),M=e.n(b),y=e(68400),j=e.n(y),D=e(41469),h=e(2093),u=e(9361),E=e(96486),f=e.n(E),r=e(67294),n=e(56044),a=e(9053),A=e(85893),l,o=(0,a.vJ)(l||(l=j()([`
.`,`-mermaid {
  &-preview img {
    background: `,`;
  }
}
`])),function(ne){return ne.theme.prefixCls},function(ne){return ne.theme.colorBgBase}),O,i=function(){var ne=M()(g()().mark(function K(){return g()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:if(!O){oe.next=2;break}return oe.abrupt("return",O);case 2:return O=Promise.resolve().then(e.bind(e,76637)).then(function(Q){return Q.default}),oe.abrupt("return",O);case 4:case"end":return oe.stop()}},K)}));return function(){return ne.apply(this,arguments)}}();function L(ne){var K=ne.content,z=ne.width,oe=ne.height,Q=(0,n.wv)(),C=Q.theme,w=Q.getPrefixCls,V=w("mermaid"),Ce=(0,r.useMemo)(function(){return{theme:(C==null?void 0:C.algorithm)===u.Z.darkAlgorithm?"dark":"default",securityLevel:"loose",startOnLoad:!1}},[C==null?void 0:C.algorithm,C==null?void 0:C.token.fontFamily]),x=(0,r.useState)(""),p=m()(x,2),pe=p[0],de=p[1],X=(0,r.useState)(),se=m()(X,2),k=se[0],re=se[1],ce=(0,r.useId)(),Ge=(0,E.kebabCase)("mermaid-".concat(ce));return(0,h.Z)(M()(g()().mark(function _e(){var Ke,mn,hn,vn;return g()().wrap(function(Ne){for(;;)switch(Ne.prev=Ne.next){case 0:return Ne.prev=0,Ne.next=3,i();case 3:if(Ke=Ne.sent,Ke){Ne.next=7;break}return de(K),Ne.abrupt("return");case 7:return Ne.next=9,Ke.parse(K);case 9:if(mn=Ne.sent,!mn){Ne.next=19;break}return Ke.initialize(Ce),Ne.next=14,Ke.render(Ge,K);case 14:hn=Ne.sent,vn=hn.svg,de(vn),Ne.next=20;break;case 19:throw new Error("Invalid Mermaid syntax");case 20:Ne.next=26;break;case 22:Ne.prev=22,Ne.t0=Ne.catch(0),pe||console.error("Mermaid parse error: ",Ne.t0),de(pe||"");case 26:case"end":return Ne.stop()}},_e,null,[[0,22]])})),[K,Ce]),(0,r.useEffect)(function(){if(pe){var _e=new Blob([pe],{type:"image/svg+xml"}),Ke=URL.createObjectURL(_e);return re(Ke),function(){URL.revokeObjectURL(Ke)}}},[pe]),k?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(o,{}),(0,A.jsx)(D.Z,{className:V,src:k,alt:"mermaid",width:z,height:oe,preview:{rootClassName:"".concat(V,"-preview")}})]}):null}},31382:function(ze,F,e){"use strict";e.d(F,{Z:function(){return O}});var $=e(9783),m=e.n($),N=e(5574),g=e.n(N),b=e(67294),M=e(56044),y=e(68400),j=e.n(y),D=e(9053),h,u=(0,D.vJ)(h||(h=j()([`
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
`])),function(i){return i.theme.prefixCls},function(i){return i.theme.borderRadiusLG},function(i){return i.theme.colorFillTertiary},function(i){return i.theme.colorFillTertiary},function(i){return i.theme.colorText},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.prefixCls},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorText},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorText},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.colorText},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorTextTertiary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorBgBase},function(i){return i.theme.colorFillSecondary},function(i){return i.theme.colorText},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorBorderSecondary},function(i){return i.theme.colorBgBase},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.prefixCls},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.colorPrimary},function(i){return i.theme.colorTextSecondary},function(i){return i.theme.colorFillTertiary},function(i){return i.theme.colorFillTertiary},function(i){return i.theme.colorFillQuaternary},function(i){return i.theme.colorTextTertiary}),E=e(93967),f=e.n(E),r=e(28387),n=e(9838),a=e(64057),A=e(85893);function l(i){var L=(0,M.wv)(),ne=L.getPrefixCls,K=ne("operate-card");return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)("div",{className:"".concat(K,"-line-body"),children:i.children})})}function o(i){var L,ne=(0,M.wv)(),K=ne.getPrefixCls,z=K("operate-card"),oe=(0,b.useState)(((L=i.body)===null||L===void 0?void 0:L.defaultOpen)||!1),Q=g()(oe,2),C=Q[0],w=Q[1];return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(u,{}),(0,A.jsxs)("div",{className:f()(z,m()({},"".concat(z,"-collapsed"),C&&i.body)),children:[(0,A.jsxs)("div",{className:f()("".concat(z,"-header"),i.header.className,m()({},"".concat(z,"-header-has-body"),i.body)),onClick:function(){i.body&&w(!C)},children:[(0,A.jsx)("div",{className:"".concat(z,"-header-icon"),children:i.header.icon}),typeof i.header.title=="string"?(0,A.jsx)("div",{className:"".concat(z,"-header-title"),children:i.header.title}):i.header.title,i.header.description&&(0,A.jsx)("div",{className:"".concat(z,"-header-description"),children:i.header.description}),i.body&&(0,A.jsx)(a.Z,{size:"small",bordered:!1,className:"".concat(z,"-header-arrow"),icon:C?(0,A.jsx)(r.Z,{}):(0,A.jsx)(n.Z,{})})]}),i.body&&C&&(0,A.jsx)("div",{className:"".concat(z,"-body"),children:i.body.children})]})]})}o.LineBody=l;var O=o},85762:function(ze,F,e){"use strict";e.d(F,{Z:function(){return l}});var $=e(5574),m=e.n($),N=e(56044),g=e(31382),b=e(37303),M=e(64057),y=e(28387),j=e(9838),D=e(48095),h=e(50104),u=e(55839),E=e(16494),f=e(86250),r=e(67294),n=e(85893);function a(o){var O=o.images,i=(0,N.wv)(),L=i.getPrefixCls,ne=L("operate-card");return(0,n.jsx)(u.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(E.Z.PreviewGroup,{children:O.map(function(K,z){return(0,n.jsx)(E.Z,{src:K,width:44,height:44},z)})})})}function A(o){var O=o.item,i=(0,r.useState)(!1),L=m()(i,2),ne=L[0],K=L[1],z=(0,N.wv)(),oe=z.getPrefixCls,Q=oe("operate-card");return(0,n.jsxs)("div",{className:"".concat(Q,"-rag-item"),children:[(0,n.jsxs)("div",{className:"".concat(Q,"-rag-item-title"),onClick:function(){K(!ne)},children:[(0,n.jsx)("span",{className:"".concat(Q,"-rag-item-title-text"),title:O.title,children:O.title}),O.score?(0,n.jsxs)(b.Z,{color:"mauve",size:"small",className:"".concat(Q,"-rag-item-score"),children:["\u5F97\u5206 ",(0,n.jsx)("b",{children:O.score})]}):null,(0,n.jsx)(M.Z,{bordered:!1,size:"small",icon:ne?(0,n.jsx)(y.Z,{}):(0,n.jsx)(j.Z,{})})]}),ne&&(0,n.jsxs)("div",{className:"".concat(Q,"-rag-item-content"),children:[(0,n.jsx)("div",{className:"".concat(Q,"-rag-item-content-text"),children:O.content}),O.images&&(0,n.jsx)("div",{className:"".concat(Q,"-rag-item-images"),children:(0,n.jsx)(a,{images:O.images})}),O.link?(0,n.jsx)("a",{onClick:function(){window.open(O.link,"_blank")},className:"".concat(Q,"-rag-item-footer"),href:O.link,target:"_blank",children:O.footer}):(0,n.jsx)("div",{className:"".concat(Q,"-rag-item-footer"),children:O.footer})]})]})}function l(o){var O=o.title,i=O===void 0?"\u77E5\u8BC6\u5E93\u68C0\u7D22":O,L=o.subTitle,ne=o.defaultOpen,K=ne===void 0?!0:ne,z=o.placeholder,oe=z===void 0?"\u672A\u67E5\u8BE2\u5230\u4E0E\u63D0\u95EE\u76F8\u5173\u77E5\u8BC6\u5E93":z,Q=o.images,C=o.query,w=o.filters,V=(0,N.wv)(),Ce=V.getPrefixCls,x=Ce("operate-card"),p=(0,n.jsxs)(g.Z.LineBody,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(x,"-rag-group-title"),children:"\u68C0\u7D22 Query"}),(0,n.jsx)("div",{className:"".concat(x,"-rag-group-content"),children:C})]}),Q!=null&&Q.length?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(x,"-rag-group-title"),children:"\u68C0\u7D22\u56FE\u7247"}),(0,n.jsx)("div",{className:"".concat(x,"-rag-group-content ").concat(x,"-rag-group-content-images"),children:(0,n.jsx)(a,{images:Q})})]}):null,w?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(x,"-rag-group-title"),children:"\u8FC7\u6EE4\u6761\u4EF6"}),(0,n.jsx)("div",{className:"".concat(x,"-rag-group-content"),children:w})]}):null,o.list.length?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(x,"-rag-group-title"),children:"Output"}),o.list.map(function(pe,de){return(0,n.jsx)(A,{item:pe},de)})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"".concat(x,"-rag-group-title"),children:"Output"}),(0,n.jsxs)(f.Z,{align:"center",justify:"center",gap:8,className:"".concat(x,"-rag-empty-placeholder"),children:[(0,n.jsx)(D.Z,{}),(0,n.jsx)("span",{children:oe})]})]})]});return(0,n.jsx)(g.Z,{header:{icon:(0,n.jsx)(h.Z,{}),title:i,description:L},body:{defaultOpen:K,children:(0,n.jsx)("div",{className:"".concat(x,"-rag-children"),children:p})}})}},79323:function(ze,F,e){"use strict";e.d(F,{Z:function(){return M}});var $=e(56044),m=e(31382),N=e(40443),g=e(33593),b=e(85893);function M(y){var j=(0,$.wv)(),D=j.getPrefixCls,h=y.defaultOpen,u=h===void 0?!0:h,E=y.loading,f=E===void 0?!1:E,r=D("operate-card");return(0,b.jsx)(m.Z,{header:{icon:f?(0,b.jsx)(N.Z,{spin:!0}):(0,b.jsx)(g.Z,{}),title:y.title,description:y.subTitle},body:{defaultOpen:f?u:!1,children:(0,b.jsx)(m.Z.LineBody,{children:(0,b.jsx)("div",{className:"".concat(r,"-thinking"),children:y.content})})}},f.toString())}},6874:function(ze,F,e){"use strict";e.d(F,{Z:function(){return u}});var $=e(9783),m=e.n($),N=e(56044),g=e(31382),b=e(41775),M=e(77900),y=e(40443),j=e(93967),D=e.n(j),h=e(85893);function u(E){var f=(0,N.wv)(),r=f.getPrefixCls,n=r("operate-card"),a=E.title,A=a===void 0?"Task List":a,l=E.list.filter(function(o){return o.status==="done"}).length;return(0,h.jsx)(g.Z,{header:{icon:(0,h.jsx)(b.Z,{}),title:A,description:"\xB7 ".concat(l?l+" of ":""," ").concat(E.list.length)},body:{defaultOpen:E.defaultOpen,children:(0,h.jsx)("div",{className:"".concat(n,"-todo-list"),children:E.list.map(function(o){return(0,h.jsxs)("div",{className:D()(m()(m()({},"".concat(n,"-todo-list-item"),!0),"".concat(n,"-todo-list-item-").concat(o.status),!0)),children:[(0,h.jsx)("div",{className:"".concat(n,"-todo-list-item-icon"),children:{done:(0,h.jsx)(M.Z,{}),todo:(0,h.jsx)(M.Z,{}),running:(0,h.jsx)(y.Z,{spin:!0})}[o.status]}),(0,h.jsx)("div",{className:"".concat(n,"-todo-list-item-title"),style:{textDecoration:o.status==="done"?"line-through":"none"},children:o.title})]},o.title)})})}})}},85786:function(ze,F,e){"use strict";e.d(F,{Z:function(){return n}});var $=e(5574),m=e.n($),N=e(56044),g=e(31382),b=e(97634),M=e(89698),y=e(40443),j=e(78598),D=e(64057),h=e(4146),u=e(39536),E=e(67294),f=e(85893);function r(a){var A=(0,N.wv)(),l=A.getPrefixCls,o=l("operate-card"),O=a.expandEnabled,i=O===void 0?!1:O,L=a.language,ne=L===void 0?"json":L,K=typeof a.content=="string"?a.content:JSON.stringify(a.content),z=(0,E.useState)(!1),oe=m()(z,2),Q=oe[0],C=oe[1],w=(0,E.useState)(i!==!0),V=m()(w,2),Ce=V[0],x=V[1],p=(0,E.useRef)(null);return(0,f.jsxs)("div",{className:"".concat(o,"-tool-call-block"),children:[(0,f.jsxs)("div",{className:"".concat(o,"-tool-call-block-header"),onClick:function(){i===!0&&x(function(de){return!de})},children:[(0,f.jsx)("span",{className:"".concat(o,"-tool-call-block-title"),children:a.title}),(0,f.jsx)("div",{className:"".concat(o,"-tool-call-block-extra"),onClick:function(de){return de.stopPropagation()},children:(0,f.jsx)(D.Z,{size:"small",style:{marginRight:"-6px"},icon:Q?(0,f.jsx)(b.Z,{}):(0,f.jsx)(M.Z,{}),bordered:!1,onClick:function(){(0,u.J)(K).then(function(){clearTimeout(p.current),C(!0),p.current=setTimeout(function(){C(!1)},2e3)}).catch(function(){console.warn("Copy failed")})}})})]}),Ce&&(0,f.jsx)("div",{className:"".concat(o,"-tool-call-block-content"),children:(0,f.jsx)(h.ZP,{language:ne,value:K,readOnly:!0,basicSetup:{lineNumbers:!1,foldGutter:!1}})})]})}function n(a){var A,l,o=a.title,O=o===void 0?"Call Tool":o,i=a.subTitle,L=a.defaultOpen,ne=L===void 0?!0:L,K=a.loading,z=K===void 0?!1:K;return(0,f.jsx)(g.Z,{header:{icon:z?(0,f.jsx)(y.Z,{spin:!0}):(0,f.jsx)(j.Z,{}),title:O,description:i},body:{defaultOpen:ne,children:(0,f.jsxs)(g.Z.LineBody,{children:[(0,f.jsx)(r,{title:"Input",content:a.input,language:(A=a.inputBlock)===null||A===void 0?void 0:A.language}),(0,f.jsx)(r,{title:"Output",content:a.output,language:(l=a.outputBlock)===null||l===void 0?void 0:l.language})]})}})}},69610:function(ze,F,e){"use strict";e.d(F,{Z:function(){return D}});var $=e(9783),m=e.n($),N=e(56044),g=e(31382),b=e(9229),M=e(93967),y=e.n(M),j=e(85893);function D(h){var u=(0,N.wv)(),E=u.getPrefixCls,f=E("operate-card"),r=h.title,n=r===void 0?"\u8054\u7F51\u641C\u7D22":r,a=h.subTitle;return(0,j.jsx)(g.Z,{header:{icon:(0,j.jsx)(b.Z,{}),title:n,description:a},body:{defaultOpen:!0,children:(0,j.jsx)(g.Z.LineBody,{children:h.list.map(function(A){return(0,j.jsxs)("div",{className:y()(m()({},"".concat(f,"-web-search-item"),!0)),onClick:function(){window.open(A.link,"_blank")},children:[(0,j.jsx)("img",{className:"".concat(f,"-web-search-item-icon"),src:A.icon,alt:A.title}),(0,j.jsx)("div",{className:"".concat(f,"-web-search-item-title"),children:A.title}),A.subTitle&&(0,j.jsx)("div",{className:"".concat(f,"-web-search-item-subTitle"),children:A.subTitle})]},A.title)})})}})}},56809:function(ze,F,e){"use strict";e.d(F,{B4:function(){return m.Z},BI:function(){return $.Z},Sn:function(){return b.Z},fz:function(){return g.Z},x4:function(){return N.Z}});var $=e(79323),m=e(6874),N=e(85786),g=e(69610),b=e(85762)},83962:function(ze,F,e){"use strict";e.d(F,{HJ:function(){return j},NR:function(){return M},xy:function(){return y}});var $=e(97857),m=e.n($),N=e(67294),g=e(73420),b=e(85893),M=(0,N.createContext)(void 0),y=function(h){return(0,b.jsx)(M.Provider,{value:h.cardConfig,children:h.children})},j=function(){var h=N.useContext(M);return N.useMemo(function(){return m()(m()({},g),h)},[h])}},92049:function(ze,F,e){"use strict";e.d(F,{R:function(){return g},bN:function(){return b}});var $=e(67294),m=e(85893),N=(0,$.createContext)(void 0),g=function(y){return(0,m.jsx)(N.Provider,{value:y,children:y.children})},b=function(){var y=$.useContext(N);return y||{}}},56044:function(ze,F,e){"use strict";e.d(F,{wv:function(){return y}});var $=e(21766),m=e(67294),N=e(83962),g=e(92049),b=e(85893),M=function(D){var h=D.children,u=D.cardConfig,E=D.markdown;return(0,b.jsx)(g.R,{markdown:E,children:(0,b.jsx)(N.xy,{cardConfig:u,children:h})})};function y(){var j=m.useContext($.ZP.ConfigContext);return j}F.ZP=M},44294:function(ze,F,e){"use strict";e.d(F,{Z:function(){return f},a:function(){return h}});var $=e(97857),m=e.n($),N=e(24772),g=e(83622),b=e(93967),M=e.n(b),y=e(29372),j=e(67294),D=e(85893),h=j.createContext({}),u=function(){return{height:0}},E=function(n){return{height:n.scrollHeight}};function f(r){var n=r.title,a=r.onOpenChange,A=r.open,l=r.children,o=r.className,O=r.style,i=r.classNames,L=i===void 0?{}:i,ne=r.styles,K=ne===void 0?{}:ne,z=r.closable,oe=r.forceRender,Q=j.useContext(h),C=Q.prefixCls,w="".concat(C,"-header");return(0,D.jsx)(y.ZP,{motionEnter:!0,motionLeave:!0,motionName:"".concat(w,"-motion"),leavedClassName:"".concat(w,"-motion-hidden"),onEnterStart:u,onEnterActive:E,onLeaveStart:E,onLeaveActive:u,visible:A,forceRender:oe,children:function(Ce){var x=Ce.className,p=Ce.style;return(0,D.jsxs)("div",{className:M()(w,x,o),style:m()(m()({},p),O),children:[(z!==!1||n)&&(0,D.jsxs)("div",{className:M()("".concat(w,"-header"),L.header),style:m()({},K.header),children:[(0,D.jsx)("div",{className:"".concat(w,"-title"),children:n}),z!==!1&&(0,D.jsx)("div",{className:"".concat(w,"-close"),children:(0,D.jsx)(g.ZP,{type:"text",icon:(0,D.jsx)(N.Z,{}),size:"small",onClick:function(){a==null||a(!A)}})})]}),l&&(0,D.jsx)("div",{className:M()("".concat(w,"-content"),L.content),style:m()({},K.content),children:l})]})}})}},66672:function(ze,F,e){"use strict";e.d(F,{Z:function(){return ve}});var $=e(19632),m=e.n($),N=e(97857),g=e.n(N),b=e(52677),M=e.n(b),y=e(9783),j=e.n(y),D=e(5574),h=e.n(D),u=e(13769),E=e.n(u),f=e(48045),r=e(86250),n=e(3296),a=e(93967),A=e.n(a),l=e(56790),o=e(30339),O=e(94787),i=e(67294),L=e(11154),ne=e(83204);function K(s,S){return(0,i.useImperativeHandle)(s,function(){var ee=S(),me=ee.nativeElement;return new Proxy(me,{get:function(De,ae){return ee[ae]?ee[ae]:Reflect.get(De,ae)}})})}var z=e(56044),oe=e(44294),Q=e(64057),C=e(85893),w=["className","action","onClick"],V=i.createContext(null);function Ce(s){var S=s.className,ee=s.action,me=s.onClick,ue=E()(s,w),De=i.useContext(V),ae=De.prefixCls,$e=De.disabled,Fe=De[ee],he=$e||ue.disabled||De["".concat(ee,"Disabled")]||!1;return(0,C.jsx)(Q.Z,g()(g()({bordered:!1},ue),{},{disabled:he,onClick:function(Pn){he||(Fe&&Fe(),me&&me(Pn))},className:A()(ae,S,j()({},"".concat(ae,"-disabled"),he))}))}var x=i.forwardRef(Ce),p=e(69291);function pe(s,S){return(0,C.jsx)(x,g()(g()({icon:(0,C.jsx)(p.Z,{})},s),{},{action:"onClear",ref:S}))}var de=i.forwardRef(pe),X=(0,i.memo)(function(s){var S=s.className;return(0,C.jsxs)("svg",{color:"currentColor",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:S,children:[(0,C.jsx)("title",{children:"Stop Loading"}),(0,C.jsx)("rect",{fill:"currentColor",height:"250",rx:"24",ry:"24",width:"250",x:"375",y:"375"})]})}),se=X,k=e(67055),re=["className","loading"];function ce(s,S){var ee=i.useContext(V),me=ee.prefixCls,ue=s.className,De=s.loading,ae=E()(s,re),$e=(0,C.jsx)(x,g()(g()({icon:(0,C.jsx)(se,{className:"".concat(me,"-loading-icon")}),type:"primary",variant:"text"},ae),{},{className:A()(ue,"".concat(me,"-loading-button")),action:"onCancel",ref:S}));return typeof s.loading=="string"?(0,C.jsx)(k.Z,{title:s.loading,children:$e}):$e}var Ge=i.forwardRef(ce),_e=e(43103);function Ke(s,S){return(0,C.jsx)(x,g()(g()({icon:(0,C.jsx)(_e.Z,{}),type:"primary"},s),{},{action:"onSend",ref:S}))}var mn=i.forwardRef(Ke),hn=e(36763),vn=e(21474),nn=1e3,Ne=4,Cn=140,U=Cn/2,be=250,Ue=500,Je=.8;function B(s){var S=s.className;return(0,C.jsxs)("svg",{color:"currentColor",viewBox:"0 0 ".concat(nn," ").concat(nn),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:S,children:[(0,C.jsx)("title",{children:"Speech Recording"}),Array.from({length:Ne}).map(function(ee,me){var ue=(nn-Cn*Ne)/(Ne-1),De=me*(ue+Cn),ae=nn/2-be/2,$e=nn/2-Ue/2;return(0,C.jsxs)("rect",{fill:"currentColor",rx:U,ry:U,height:be,width:Cn,x:De,y:ae,children:[(0,C.jsx)("animate",{attributeName:"height",values:"".concat(be,"; ").concat(Ue,"; ").concat(be),keyTimes:"0; 0.5; 1",dur:"".concat(Je,"s"),begin:"".concat(Je/Ne*me,"s"),repeatCount:"indefinite"}),(0,C.jsx)("animate",{attributeName:"y",values:"".concat(ae,"; ").concat($e,"; ").concat(ae),keyTimes:"0; 0.5; 1",dur:"".concat(Je,"s"),begin:"".concat(Je/Ne*me,"s"),repeatCount:"indefinite"})]},me)})]})}function W(s,S){var ee=i.useContext(V),me=ee.speechRecording,ue=ee.onSpeechDisabled,De=ee.prefixCls,ae=null;return me?ae=(0,C.jsx)(B,{className:"".concat(De,"-recording-icon")}):ue?ae=(0,C.jsx)(hn.Z,{}):ae=(0,C.jsx)(vn.Z,{}),(0,C.jsx)(x,g()(g()({icon:ae,variant:"text"},s),{},{action:"onSpeech",ref:S}))}var Pe=i.forwardRef(W),xe=e(68400),fe=e.n(xe),Ie=e(9053),Me,Ze=(0,Ie.vJ)(Me||(Me=fe()([`
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
`])),function(s){return s.theme.prefixCls},function(s){return s.theme.colorBgBase},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.motionDurationSlow},function(s){return s.theme.lineWidth},function(s){return s.theme.colorPrimaryHover},function(s){return s.theme.lineWidth},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.colorBgContainerDisabled},function(s){return s.theme.prefixCls},function(s){return s.theme.prefixCls},function(s){return s.theme.paddingXS},function(s){return s.theme.colorTextTertiary},function(s){return"var(--".concat(s.theme.prefixCls,"-color-fill-disable)")},function(s){return s.theme.controlHeight},function(s){return s.theme.controlHeight},function(s){return s.theme.prefixCls}),Oe=Ze,Xe;!Xe&&typeof window!="undefined"&&(Xe=window.SpeechRecognition||window.webkitSpeechRecognition);function Ve(s,S){var ee=(0,l.zX)(s),me=i.useMemo(function(){return M()(S)==="object"?[S.recording,S.onRecordingChange,typeof S.recording=="boolean"]:[void 0,void 0,!1]},[S]),ue=h()(me,3),De=ue[0],ae=ue[1],$e=ue[2],Fe=i.useState(null),he=h()(Fe,2),Ye=he[0],Pn=he[1];i.useEffect(function(){if(typeof navigator!="undefined"&&"permissions"in navigator){var _n=null;return navigator.permissions.query({name:"microphone"}).then(function(In){Pn(In.state),In.onchange=function(){Pn(this.state)},_n=In}),function(){_n&&(_n.onchange=null)}}},[]);var En=Xe&&Ye!=="denied",gn=i.useRef(null),Sn=(0,l.C8)(!1,{value:De}),un=h()(Sn,2),en=un[0],sn=un[1],Dn=i.useRef(!1),An=function(){if(En&&!gn.current){var In=new Xe;In.onstart=function(){sn(!0)},In.onend=function(){sn(!1)},In.onresult=function(zn){if(!Dn.current){var pn,Rn=(pn=zn.results)===null||pn===void 0||(pn=pn[0])===null||pn===void 0||(pn=pn[0])===null||pn===void 0?void 0:pn.transcript;ee(Rn)}Dn.current=!1},gn.current=In}},Mn=(0,l.zX)(function(_n){_n&&!en||(Dn.current=_n,$e?ae==null||ae(!en):(An(),gn.current&&(en?(gn.current.stop(),ae==null||ae(!1)):(gn.current.start(),ae==null||ae(!0)))))});return[En,Mn,en]}var cn=e(89102),Be,t=(0,Ie.vJ)(Be||(Be=fe()([`
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

`])),function(s){return s.theme.prefixCls},function(s){return s.theme.borderRadius},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.colorTextSecondary},function(s){return s.theme.colorPrimary},function(s){return s.theme.colorPrimary},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorFillTertiary},function(s){return s.theme.colorTextSecondary});function Re(s){var S=(0,z.wv)(),ee=S.getPrefixCls,me=ee("sender-mode-select"),ue=s.value,De=s.onChange,ae=(0,i.useMemo)(function(){var Fe=s.options.find(function(he){return he.value===ue})||{};return Fe},[s.value]),$e=(0,C.jsx)(cn.Z,{onClick:function(){return De(void 0)},style:{cursor:"pointer",fontSize:20}});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(t,{}),(0,C.jsxs)("div",{className:me,style:s.style,children:[(0,C.jsx)("div",{className:"".concat(me,"-options ").concat(ue?"".concat(me,"-hide"):""),children:s.options.map(function(Fe){var he=(0,C.jsx)(We,g()({onClick:function(){return De(Fe.value)},className:"".concat(me,"-option")},Fe),Fe.value);return he})}),(0,C.jsx)("div",{className:"".concat(me,"-display ").concat(ue?"":"".concat(me,"-hide")),children:(0,C.jsxs)("div",{className:"".concat(me,"-display-flex"),children:[(0,C.jsx)(We,g()(g()({},ae),{},{label:(ae==null?void 0:ae.selectedLabel)||(ae==null?void 0:ae.label),className:"".concat(me,"-display-label")})),s.desc&&(0,C.jsx)("div",{className:"".concat(me,"-display-desc"),children:s.desc}),s.closeTip?(0,C.jsx)(k.Z,{title:s.closeTip,children:$e}):$e]})})]})]})}function We(s){var S=(0,C.jsxs)("div",{className:s.className,onClick:s.onClick,children:[s.icon,s.label]});return s.tooltip?(0,C.jsx)(k.Z,{title:s.tooltip,placement:"topLeft",children:S}):S}var tn,c=(0,Ie.vJ)(tn||(tn=fe()([`
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
`])),function(s){return s.theme.prefixCls},function(s){return s.theme.colorBorderSecondary},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.borderRadiusLG},function(s){return s.theme.colorFillTertiary});function q(s){var S=s.leftChildren,ee=s.rightChildren,me=s.children,ue=(0,z.wv)().getPrefixCls("sender-before-ui-container"),De=(0,i.useMemo)(function(){return S?(0,C.jsx)("div",{className:"".concat(ue,"-left"),children:S}):null},[S]),ae=(0,i.useMemo)(function(){return ee?(0,C.jsx)("div",{className:"".concat(ue,"-right"),children:ee}):null},[ee]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(c,{}),(0,C.jsx)("div",{className:ue,children:(0,C.jsx)("div",{className:"".concat(ue,"-content"),children:(0,C.jsx)("div",{className:"".concat(ue,"-content-children"),children:me||(0,C.jsxs)(C.Fragment,{children:[De,ae]})})})})]})}var T=["styles","classNames","className","rootClassName","style","defaultValue","value","readOnly","enableFocusExpand","sendDisabled","allowEmptySubmit","submitType","onSubmit","loading","onCancel","onChange","onFocus","onBlur","actions","onKeyPress","onKeyDown","suggestions","disabled","header","onPaste","allowSpeech","onPasteFile","components"];function H(s,S,ee){return(0,O.Z)(s,S)||ee}function I(s){if(!s.startsWith("/"))return null;var S=s.slice(1);return S?/\s/.test(S)?null:S.trim().toLowerCase():""}function G(s,S){return!Array.isArray(s)||s.length===0||S===null||S===""?s:s.filter(function(ee){var me=typeof ee.value=="string"?ee.value.toLowerCase():"",ue=typeof ee.label=="string"||typeof ee.label=="number"?String(ee.label).toLowerCase():"";return me.includes(S)||ue.includes(S)})}var Y=i.forwardRef(function(s,S){var ee=s.styles,me=ee===void 0?{}:ee,ue=s.classNames,De=ue===void 0?{}:ue,ae=s.className,$e=s.rootClassName,Fe=s.style,he=s.defaultValue,Ye=s.value,Pn=s.readOnly,En=s.enableFocusExpand,gn=En===void 0?!1:En,Sn=s.sendDisabled,un=Sn===void 0?!1:Sn,en=s.allowEmptySubmit,sn=en===void 0?!1:en,Dn=s.submitType,An=Dn===void 0?"enter":Dn,Mn=s.onSubmit,_n=s.loading,In=s.onCancel,zn=s.onChange,pn=s.onFocus,Rn=s.onBlur,Tn=s.actions,wn=s.onKeyPress,Kn=s.onKeyDown,rn=s.suggestions,He=s.disabled,Ln=s.header,xn=s.onPaste,Xn=s.allowSpeech,kn=s.onPasteFile,Wn=s.components,Vn=E()(s,T),Qn=(0,i.useState)(!1),et=h()(Qn,2),Bn=et[0],$n=et[1],nt=i.useMemo(function(){return{maxRows:5,minRows:2}},[]),Fn=(0,z.wv)(),Jn=Fn.direction,Yn=Fn.getPrefixCls,On=Yn("sender"),bn=i.useRef(null),Nn=i.useRef(null);K(S,function(){var ie,te;return{nativeElement:bn.current,focus:(ie=Nn.current)===null||ie===void 0?void 0:ie.focus,blur:(te=Nn.current)===null||te===void 0?void 0:te.blur}}),(0,L.Z)(bn,{onFocus:function(te){$n(!0),pn==null||pn()},onBlur:function(){bn.current&&!bn.current.contains(document.activeElement)&&($n(!1),Rn==null||Rn())}}),(0,ne.Z)("click",function(ie){$n(!0),pn==null||pn()},{target:bn});var qn="".concat(On,"-input"),rt=A()(On,ae,$e,j()(j()(j()(j()({},"".concat(On,"-rtl"),Jn==="rtl"),"".concat(On,"-disabled"),He),"".concat(On,"-focus"),Bn&&gn),"".concat(On,"-blur"),!Bn&&gn)),mt="".concat(On,"-actions-btn"),ot="".concat(On,"-actions-list"),ht=(0,l.C8)(he||"",{value:Ye}),ut=h()(ht,2),Gn=ut[0],gt=ut[1],tt=function(te,yn){gt(te),zn&&zn(te,yn)},pt=Ve(function(ie){tt("".concat(Gn," ").concat(ie))},Xn),it=h()(pt,3),xt=it[0],dt=it[1],Ct=it[2],lt=Array.isArray(rn)&&rn.length>0,d=i.useMemo(function(){return I(Gn)},[Gn]),P=i.useMemo(function(){return G(rn,d)},[rn,d]),v=Array.isArray(P)&&P.length>0,_=i.useCallback(function(ie,te){if(ie!=null&&ie.length)for(var yn=0,an=ie;yn<an.length;yn++){var Le=an[yn];if(!(!Le||M()(Le)!=="object")){if(Le.label===te&&typeof Le.value=="string")return Le.value;var ln=_(Le.children,te);if(ln)return ln}}},[]),R=H(Wn,["input"],f.Z.TextArea),Z=(0,o.Z)(Vn,{attr:!0,aria:!0,data:!0}),J=g()(g()({},Z),{},{ref:Nn}),Te=function(){!we.onSendDisabled&&Mn&&!_n&&Mn(Gn)},Ee=function(){tt("")},le=i.useRef(!1),ye=i.useRef(!1),ke=function(){le.current=!0},Qe=function(te){if(le.current=!1,s.maxLength){var yn=te.target.value;yn.length>s.maxLength&&tt(yn.slice(0,s.maxLength))}},dn=function(te){var yn=!le.current&&!ye.current;switch(An){case"enter":yn&&!te.shiftKey&&(te.preventDefault(),Te());break;case"shiftEnter":yn&&te.shiftKey&&(te.preventDefault(),Te());break}},Se=function(te){var yn;if(!kn){xn==null||xn(te);return}var an=Array.from(((yn=te.clipboardData)===null||yn===void 0?void 0:yn.files)||[]);if(an.length===0){var Le,ln=Array.from(((Le=te.clipboardData)===null||Le===void 0?void 0:Le.items)||[]);an=ln.filter(function(fn){return fn.kind==="file"}).map(function(fn){return fn.getAsFile()}).filter(function(fn){return fn!==null})}an.length>0?(an.forEach(function(fn){return kn(fn)}),te.preventDefault()):xn==null||xn(te)},je=i.useMemo(function(){var ie=Array.isArray(s.prefix)?m()(s.prefix):[s.prefix];return ie.filter(function(te){return te!=null})},[s.prefix]),Ae=(0,C.jsx)(r.Z,{className:"".concat(ot,"-presets"),children:_n?(0,C.jsx)(Ge,{loading:_n,disabled:!!He}):(0,C.jsx)(mn,{disabled:!!He})});typeof Tn=="function"?Ae=Tn(Ae,{components:{SendButton:mn,ClearButton:de,LoadingButton:Ge}}):Tn&&(Ae=Tn);var we={prefixCls:mt,onSend:Te,onSendDisabled:(!Gn||!Gn.trim())&&!sn||un,onClear:Ee,onClearDisabled:!Gn,onCancel:In,onCancelDisabled:!_n,onSpeech:function(){return dt(!1)},onSpeechDisabled:!xt,speechRecording:Ct,disabled:!!He},on=function(te){return ye.current=!!(te!=null&&te.open),(0,C.jsx)(R,g()(g()({},J),{},{disabled:!!He,style:me.input,className:A()(qn,De.input),autoSize:nt,value:Gn.slice(0,s.maxLength||Number.MAX_SAFE_INTEGER),onChange:function(an){var Le=an.target.value;if(s.maxLength&&!le.current&&Le.length>s.maxLength&&(Le=Le.slice(0,s.maxLength)),tt(Le,an),lt){var ln=I(Le),fn=G(rn,ln),jn=Array.isArray(fn)&&fn.length>0;if(ln!==null&&jn){var Un;te==null||(Un=te.onTrigger)===null||Un===void 0||Un.call(te,!0)}else{var Hn;te==null||(Hn=te.onTrigger)===null||Hn===void 0||Hn.call(te,!1)}}dt(!0)},onKeyPress:wn,onPressEnter:dn,onCompositionStart:ke,onCompositionEnd:Qe,onKeyDown:function(an){var Le;if(an.key==="Enter"&&te!==null&&te!==void 0&&te.open&&lt){var ln,fn,jn=(ln=bn.current)===null||ln===void 0?void 0:ln.ownerDocument,Un=jn==null?void 0:jn.querySelector('[role="menuitemcheckbox"][aria-checked="true"]'),Hn=jn==null?void 0:jn.querySelector('[role="menuitem"][aria-current="true"]'),Zn=Un instanceof HTMLElement&&Un||Hn instanceof HTMLElement&&Hn||null,st=Zn==null?void 0:Zn.getAttribute("data-path-key"),qe=Zn==null||(fn=Zn.getAttribute("title"))===null||fn===void 0?void 0:fn.trim(),ft=qe?_(rn,qe):void 0,ct=ft||st;if(ct){var vt;an.preventDefault(),an.stopPropagation(),tt("/".concat(ct," ")),(vt=te.onTrigger)===null||vt===void 0||vt.call(te,!1);return}}te==null||(Le=te.onKeyDown)===null||Le===void 0||Le.call(te,an),Kn==null||Kn(an)},onPaste:Se,variant:"borderless",readOnly:Pn}))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Oe,{}),(0,C.jsxs)("div",{ref:bn,className:rt,style:Fe,children:[Ln&&(0,C.jsx)(oe.a.Provider,{value:{prefixCls:On,focus:Bn,enableFocusExpand:gn},children:Ln}),(0,C.jsxs)("div",{className:"".concat(On,"-content"),children:[lt?(0,C.jsx)(n.Z,{items:P,onSelect:function(te){tt("/".concat(te," "))},children:function(te){return on(te)}}):on(),(0,C.jsxs)("div",{className:"".concat(On,"-content-bottom"),children:[je.length>0&&(0,C.jsx)("div",{className:A()("".concat(On,"-prefix"),De.prefix),style:me.prefix,children:(0,C.jsxs)(r.Z,{gap:8,children:[Xn&&(0,C.jsx)(V.Provider,{value:we,children:(0,C.jsx)(Pe,{})}),je]})}),(0,C.jsxs)("div",{className:A()(ot,De.actions),style:me.actions,children:[s.maxLength?(0,C.jsxs)("div",{className:"".concat(ot,"-length"),children:[Math.min(Gn.length,s.maxLength),"/",s.maxLength]}):null,(0,C.jsx)(V.Provider,{value:we,children:Ae})]})]})]})]})]})}),ge=Y;ge.Header=oe.Z,ge.ModeSelect=Re,ge.BeforeUIContainer=q;var ve=ge},70770:function(ze,F,e){"use strict";e.d(F,{Z:function(){return A}});var $=e(89034),m=e(36674),N=e(9343),g=e(48095),b=e(97634),M=e(56044),y=e(68400),j=e.n(y),D=e(9053),h,u=(0,D.vJ)(h||(h=j()([`
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
`])),function(l){return l.theme.prefixCls},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorSuccessBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorSuccess},function(l){return l.theme.colorErrorBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorError},function(l){return l.theme.colorWarningBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorWarning},function(l){return l.theme.colorFillTertiary},function(l){return l.theme.prefixCls},function(l){return l.theme.colorInfo},function(l){return l.theme.colorText},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBgBase},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBgBase},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorText}),E=e(93967),f=e.n(E),r=e(21403),n=e(85893);function a(l){var o=(0,M.wv)(),O=o.getPrefixCls,i=O("status-card"),L=l.icon||{success:(0,n.jsx)($.Z,{}),error:(0,n.jsx)(m.Z,{}),warning:(0,n.jsx)(N.Z,{}),info:(0,n.jsx)(g.Z,{})}[l.status];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u,{}),(0,n.jsxs)("div",{className:f()(i,"".concat(i,"-").concat(l.status)),children:[(0,n.jsxs)("div",{className:"".concat(i,"-header"),children:[(0,n.jsxs)("div",{className:"".concat(i,"-header-top"),children:[(0,n.jsx)("div",{className:"".concat(i,"-header-icon"),children:L}),(0,n.jsx)("div",{className:"".concat(i,"-header-title"),children:l.title})]}),l.description&&(0,n.jsx)("div",{className:"".concat(i,"-header-description"),children:l.description})]}),l.children&&(0,n.jsx)("div",{className:"".concat(i,"-body"),children:l.children})]})]})}a.HITL=function(l){var o=l.title,O=o===void 0?"\u9700\u8981\u7528\u6237\u4EBA\u5DE5\u5E72\u9884":o,i=l.description,L=l.waitButtonText,ne=L===void 0?"\u6211\u5DF2\u5B8C\u6210\uFF0C\u7EE7\u7EED\u4EFB\u52A1":L,K=l.doneButtonText,z=K===void 0?"\u7528\u6237\u5DF2\u786E\u8BA4":K,oe=(0,M.wv)(),Q=oe.getPrefixCls,C=Q("status-card"),w=l.actions!==void 0?l.actions:l.done?(0,n.jsx)(r.Z,{onClick:l.onDone,type:"primary",disabled:!0,icon:(0,n.jsx)(b.Z,{}),children:z}):(0,n.jsx)(r.Z,{onClick:l.onDone,type:"primary",children:ne});return(0,n.jsx)(a,{status:l.done?"success":"info",title:O,children:i||w?(0,n.jsxs)("div",{className:"".concat(C,"-HITL"),children:[i&&(0,n.jsx)("div",{className:"".concat(C,"-HITL-desc"),children:i}),(0,n.jsx)("div",{className:"".concat(C,"-HITL-button"),children:w})]}):null})},a.Statistic=function(l){var o=(0,M.wv)(),O=o.getPrefixCls,i=O("status-card");return(0,n.jsx)("div",{className:"".concat(i,"-statistic"),children:l.values.map(function(L){return(0,n.jsxs)("div",{className:"".concat(i,"-statistic-item"),children:[(0,n.jsx)("div",{className:"".concat(i,"-statistic-item-title"),children:L.title}),(0,n.jsx)("div",{className:"".concat(i,"-statistic-item-value"),children:L.value})]})})})};var A=a},7354:function(ze,F,e){"use strict";var $=e(15009),m=e.n($),N=e(9783),g=e.n(N),b=e(97857),M=e.n(b),y=e(77262),j=e.n(y),D=e(93938),h=e.n(D),u=`

`,E=`
`,f=":",r=function(o){return(o!=null?o:"").trim()!==""};function n(){var l="";return new TransformStream({transform:function(O,i){l+=O;var L=l.split(u);L.slice(0,-1).forEach(function(ne){r(ne)&&i.enqueue(ne)}),l=L[L.length-1]},flush:function(O){r(l)&&O.enqueue(l)}})}function a(){return new TransformStream({transform:function(o,O){var i=o.split(E),L=i.reduce(function(ne,K){var z=K.indexOf(f);if(z===-1)throw new Error('The key-value separator "'.concat(f,'" is not found in the sse line chunk!'));var oe=K.slice(0,z);if(!r(oe))return ne;var Q=K.slice(z+1);return M()(M()({},ne),{},g()({},oe,Q))},{});Object.keys(L).length!==0&&O.enqueue(L)}})}function A(l,o){var O=l.readableStream,i=l.transformStream;if(!(O instanceof ReadableStream))throw new Error("The options.readableStream must be an instance of ReadableStream.");var L=new TextDecoderStream,ne=i?O.pipeThrough(L).pipeThrough(i):O.pipeThrough(L).pipeThrough(n()).pipeThrough(a());return ne[Symbol.asyncIterator]=h()(m()().mark(function K(){var z,oe,Q,C;return m()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:z=this.getReader();case 1:return V.next=4,j()(z.read());case 4:if(oe=V.sent,Q=oe.done,C=oe.value,!Q){V.next=9;break}return V.abrupt("break",15);case 9:if(C){V.next=11;break}return V.abrupt("continue",1);case 11:return V.next=13,o!=null&&o.openaiCompatible?M()(M()({},C),{},{data:C.data.slice(1)}):C;case 13:V.next=1;break;case 15:case"end":return V.stop()}},K,this)})),ne}F.Z=A},39536:function(ze,F,e){"use strict";e.d(F,{J:function(){return b}});var $=e(15009),m=e.n($),N=e(99289),g=e.n(N);function b(y){return M.apply(this,arguments)}function M(){return M=g()(m()().mark(function y(j){var D;return m()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!(window.isSecureContext&&navigator.clipboard)){u.next=4;break}return u.next=3,navigator.clipboard.writeText(j);case 3:return u.abrupt("return");case 4:D=document.createElement("textarea"),D.value=j,D.style.cssText="position:fixed;left:-9999px",document.body.appendChild(D),D.select();try{document.execCommand("copy",!0)}finally{document.body.removeChild(D)}case 10:case"end":return u.stop()}},y)})),M.apply(this,arguments)}},32116:function(ze,F,e){"use strict";e.d(F,{Z:function(){return $}});function $(m){return new Promise(function(N){return setTimeout(N,m)})}},66366:function(ze,F,e){"use strict";e.d(F,{Z:function(){return m}});var $={i8:"1.1.60"},m=$.i8},57657:function(ze,F,e){"use strict";e.r(F);var $=e(5574),m=e.n($),N=e(9053),g=e(67294),b=e(85893),M=function(){var D=(0,g.useState)({x:0,y:0}),h=m()(D,2),u=h[0],E=h[1],f=(0,g.useState)(!1),r=m()(f,2),n=r[0],a=r[1],A=(0,g.useRef)(null),l=y(),o=l.styles,O=l.cx;(0,g.useEffect)(function(){var Q=function(w){if(A.current){var V=A.current.getBoundingClientRect();E({x:w.clientX-V.left,y:w.clientY-V.top})}};return window.addEventListener("mousemove",Q),function(){return window.removeEventListener("mousemove",Q)}},[]),(0,g.useEffect)(function(){var Q=setInterval(function(){a(!0),setTimeout(function(){return a(!1)},150)},5e3);return function(){return clearInterval(Q)}},[]);var i=function(){var C=32,w=32,V=u.x-C,Ce=u.y-w,x=6,p=6,pe=Math.sqrt(V*V+Ce*Ce),de=50;if(pe===0)return{x:0,y:0};var X=Math.min(pe/de,1),se=V/pe*x*X,k=Ce/pe*p*X;return{x:Math.max(-x,Math.min(x,se)),y:Math.max(-p,Math.min(p,k))}},L=function(C){var w=32,V=u.x-w,Ce=400;if(Math.abs(V)<Ce)return 1;var x=Math.abs(V)-Ce,p=32-Ce,pe=Math.min(x/p,1);return V>Ce?C?1-pe*.5:1:V<-Ce?C?1:1-pe*.5:1},ne=i(),K=i(),z=L(!0),oe=L(!1);return(0,b.jsxs)("div",{ref:A,className:o.container,children:[(0,b.jsx)("div",{className:O(o.eye,o.leftEye,n?o.blinkingEye:""),style:{transform:"translate(".concat(ne.x,"px, ").concat(ne.y,"px) ").concat(n?"scaleY(0.1)":"scaleY(".concat(z,")"))}}),(0,b.jsx)("div",{className:O(o.eye,o.rightEye,n?o.blinkingEye:""),style:{transform:"translate(".concat(K.x,"px, ").concat(K.y,"px) ").concat(n?"scaleY(0.1)":"scaleY(".concat(oe,")"))}})]})};F.default=M;var y=(0,N.kc)(function(j){var D=j.css,h=j.token;return{container:{width:64,height:64,backgroundColor:"black",borderRadius:12,position:"relative",cursor:"pointer",overflow:"hidden",boxShadow:"15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)"},eye:{width:6,height:12,backgroundColor:"white",borderRadius:99,position:"absolute",top:16,transition:"transform 0.1s ease-out"},leftEye:{left:22},rightEye:{left:36},blinkingEye:{transition:"transform 0.05s ease-out"}}})},31295:function(ze,F,e){"use strict";e.d(F,{Z:function(){return D}});var $=e(68400),m=e.n($),N=e(67294),g=e(9053),b=e(56044),M=e(85893),y,j=(0,g.vJ)(y||(y=m()([`
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
`])),function(h){return h.theme.prefixCls},function(h){return h.theme.colorText},function(h){return h.theme.colorTextSecondary});function D(h){var u=(0,b.wv)(),E=u.getPrefixCls,f=E("welcome"),r=typeof h.logo=="string"?(0,M.jsx)("img",{className:f+"-logo",src:h.logo}):h.logo;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(j,{}),(0,M.jsxs)("div",{className:f,style:h.style,children:[r,(0,M.jsxs)("div",{children:[(0,M.jsx)("div",{className:f+"-title",children:h.title}),(0,M.jsx)("div",{className:f+"-desc",children:h.desc})]})]})]})}},64437:function(ze,F,e){"use strict";e.d(F,{Z:function(){return f}});var $=e(97857),m=e.n($),N=e(67294),g=e(68997),b=e(56044),M=e(38850),y=e(68400),j=e.n(y),D=e(9053),h,u=(0,D.vJ)(h||(h=j()([`
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
`])),function(n){return n.theme.prefixCls},function(n){var a=n.theme;return a.colorText},function(n){var a=n.theme;return a.colorTextSecondary},function(n){var a=n.theme;return a.colorFillQuaternary},function(n){var a=n.theme;return a.colorText},function(n){var a=n.theme;return a.colorFillTertiary}),E=e(85893);function f(n){var a=n.greeting,A=n.avatar,l=n.description,o=n.prompts,O=n.onClick,i=(0,b.wv)().getPrefixCls("welcome-prompts");return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{}),(0,E.jsxs)("div",{className:i,children:[A&&(typeof A=="string"?(0,E.jsx)(g.Z,{src:A,shape:"square",size:64}):A),a&&(0,E.jsx)("div",{className:"".concat(i,"-greeting"),children:a}),l&&(0,E.jsx)("div",{className:"".concat(i,"-description"),children:l}),(o==null?void 0:o.length)>0&&(0,E.jsx)("div",{className:"".concat(i,"-prompts"),children:o.map(function(L){var ne=typeof L=="string"?{label:L,value:L}:m()(m()({},L),{},{label:L.label||L.value,value:L.value});return(0,E.jsx)(r,{prompt:ne,prefixCls:i,onClick:O},ne.value)})})]})]})}function r(n){var a=n.prefixCls;return(0,E.jsxs)("div",{className:"".concat(a,"-prompt"),onClick:function(){var l;return(l=n.onClick)===null||l===void 0?void 0:l.call(n,n.prompt.value)},children:[(0,E.jsx)("img",{className:"".concat(a,"-prompt-icon"),src:"https://img.alicdn.com/imgextra/i3/O1CN01822qqr1PVyaK7MYtn_!!6000000001847-2-tps-40-40.png",alt:""}),(0,E.jsx)("span",{className:"".concat(a,"-prompt-label"),children:n.prompt.label}),(0,E.jsx)(M.Z,{})]})}},43601:function(ze,F,e){"use strict";e.r(F),e.d(F,{AIGC:function(){return se.Z},Accordion:function(){return i.Z},AgentScopeRuntimeWebUI:function(){return n.Z},AssetsPreview:function(){return k.Z},Attachments:function(){return ne.Z},Bubble:function(){return K.Z},ChatAnywhere:function(){return j.ZP},ChatAnywhereInputContext:function(){return O.jK},ChatAnywhereSessionsContext:function(){return o.Af},ChatInput:function(){return x.Z},ConfigProvider:function(){return $.ZP},Conversations:function(){return z.Z},CustomCardsContext:function(){return N.NR},CustomCardsProvider:function(){return N.xy},DeepThink:function(){return L.Z},DeepThinking:function(){return L.Z},DefaultCards:function(){return r},DeviceAction:function(){return oe.Z},Disclaimer:function(){return Q.Z},GenerativeUISandbox:function(){return re.Z},HistoryPanel:function(){return z.Z},ImageGenerator:function(){return C.Z},Markdown:function(){return X.Z},Mermaid:function(){return w.Z},OperateCard:function(){return V.Z},Process:function(){return i.Z},Rag:function(){return Ce.Sn},Sender:function(){return x.Z},SparkChatProvider:function(){return g.ZP},StatusCard:function(){return p.Z},Stream:function(){return M.Z},Thinking:function(){return Ce.BI},TodoList:function(){return Ce.B4},ToolCall:function(){return Ce.x4},WebSearch:function(){return Ce.fz},Welcome:function(){return de.Z},WelcomePrompts:function(){return ce.Z},createCard:function(){return y.L},sleep:function(){return pe.Z},useChatAnywhere:function(){return D.TQ},useChatAnywhereInput:function(){return O.vB},useChatAnywhereSessions:function(){return o.Ct},useChatAnywhereSessionsState:function(){return o._Q},useCustomCardsContext:function(){return N.HJ},useGlobalContext:function(){return b.bN},useInput:function(){return h.G},useMessages:function(){return u.y},useProviderContext:function(){return g.wv},useSessionList:function(){return E.x},uuid:function(){return f.Z},version:function(){return m.Z}});var $=e(55839),m=e(66366),N=e(83962),g=e(56044),b=e(92049),M=e(7354),y=e(50130),j=e(29041),D=e(76289),h=e(37254),u=e(4421),E=e(61316),f=e(88773),r=e(73420),n=e(13224),a=e(22863),A={};for(var l in a)["default","ConfigProvider","version","CustomCardsContext","CustomCardsProvider","SparkChatProvider","useCustomCardsContext","useGlobalContext","useProviderContext","Stream","createCard","ChatAnywhere","useChatAnywhere","useInput","useMessages","useSessionList","uuid","DefaultCards","AgentScopeRuntimeWebUI","useChatAnywhereSessions","useChatAnywhereSessionsState","ChatAnywhereSessionsContext","ChatAnywhereInputContext","useChatAnywhereInput","Accordion","Process","DeepThink","DeepThinking","Attachments","Bubble","Conversations","HistoryPanel","DeviceAction","Disclaimer","ImageGenerator","Mermaid","OperateCard","ChatInput","Sender","StatusCard","sleep","Welcome","Markdown","AIGC","AssetsPreview","GenerativeUISandbox","WelcomePrompts"].indexOf(l)<0&&(A[l]=function(Ge){return a[Ge]}.bind(0,l));e.d(F,A);var o=e(68870),O=e(16423),i=e(487),L=e(14082),ne=e(50993),K=e(50867),z=e(9368),oe=e(55031),Q=e(10325),C=e(2534),w=e(12181),V=e(31382),Ce=e(56809),x=e(66672),p=e(70770),pe=e(32116),de=e(31295),X=e(66109),se=e(86578),k=e(34487),re=e(80115),ce=e(64437)}}]);
