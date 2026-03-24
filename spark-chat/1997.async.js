(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1997],{86578:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return Ae}});var te=e(97857),m=e.n(te),I=e(9783),b=e.n(I),j=e(13769),R=e.n(j),S=e(67294),_=e(93967),N=e.n(_),x=e(56044),y=e(66672),T=e(50993),P=e(44294),g=e(12624),n=e(41154),v=e(68400),B=e.n(v),l=e(9053),s,p=(0,l.vJ)(s||(s=B()([`
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
`])),function(be){return be.theme.prefixCls},function(be){return be.theme.prefixCls},function(be){return be.theme.prefixCls},function(be){return be.theme.prefixCls},function(be){return be.theme.borderRadius},function(be){return be.theme.colorBorderSecondary},function(be){return be.theme.colorBgBase},function(be){return be.theme.colorText},function(be){return be.theme.colorText}),f=e(85893),A=["className","icon"],le=n.Z.Dragger,F=function(Z){var K=Z.className,Oe=Z.icon,ke=R()(Z,A),Fe=(0,x.wv)(),Ke=Fe.getPrefixCls,Re=Ke("media-upload");return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{}),(0,f.jsx)(le,m()(m()({showUploadList:!1,className:N()(Re,K)},ke),{},{children:(0,f.jsxs)("div",{className:N()("".concat(Re,"-thumbnail")),children:[(0,f.jsx)("div",{className:N()("".concat(Re,"-thumbnail-gradient"))}),(0,f.jsxs)("div",{className:N()("".concat(Re,"-thumbnail-content")),children:[Oe||(0,f.jsx)(g.Z,{className:N()("".concat(Re,"-thumbnail-icon"))}),Z.maxCount>1&&(0,f.jsxs)("div",{className:N()("".concat(Re,"-thumbnail-count")),children:[Z.fileList.length,"/",Z.maxCount]})]})]})}))]})},E=F,he,re=(0,l.vJ)(he||(he=B()([`
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
`])),function(be){return be.theme.prefixCls},function(be){return be.theme.colorText},function(be){return be.theme.colorTextTertiary}),X=function(Z){var K=Z.className,Oe=Z.title,ke=Z.description,Fe=(0,x.wv)(),Ke=Fe.getPrefixCls,Re=Ke("media-info"),dn=!!Oe||!!ke;return dn?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(re,{}),(0,f.jsxs)("div",{className:N()(Re,K),children:[Oe&&(0,f.jsx)("div",{className:N()("".concat(Re,"-title")),children:Oe}),ke&&(0,f.jsx)("div",{className:N()("".concat(Re,"-description")),children:ke})]})]}):null},se=X,ge,Ie=(0,l.vJ)(ge||(ge=B()([`
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
`])),function(be){return be.theme.prefixCls},function(be){return be.theme.colorBorderSecondary},function(be){return be.theme.prefixCls},function(be){return be.theme.prefixCls},function(be){return be.theme.prefixCls},function(be){return be.theme.prefixCls}),r=["title","description","maxCount"],Ze=function(Z){var K=Z.className,Oe=Z.onUpload,ke=Oe===void 0?[]:Oe,Fe=Z.attachedFiles,Ke=Fe===void 0?[[]]:Fe,Re=Z.onFileChange,dn=(0,x.wv)(),fn=dn.getPrefixCls,on=(0,S.useContext)(P.a),vn=on.focus,$e=on.enableFocusExpand,Rn=fn("aigc-sender-header"),U=(0,S.useMemo)(function(){return Ke.flat().length>0?!0:ke.length<=0?!1:!!(vn||!$e)},[ke,Ke,$e,vn]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Ie,{}),(0,f.jsx)(y.Z.Header,{closable:!1,open:U,children:(0,f.jsx)("div",{className:N()(Rn,K),tabIndex:0,children:ke==null?void 0:ke.map(function(Se,Ne){var Ye=Se.title,sn=Se.description,Qe=Se.maxCount,mn=Qe===void 0?1:Qe,cn=R()(Se,r),qe=Ke[Ne]||[];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(E,m()({className:N()(b()({},"".concat(Rn,"-upload-hidden"),qe.length>=mn)),maxCount:mn,fileList:qe,onChange:function(tn){Se.beforeUpload&&tn.file.status&&Re(Ne,tn.fileList),Se.beforeUpload||Re(Ne,tn.fileList)},showUploadList:!1},cn),"upload-".concat(Ne)),qe.length>0&&(0,f.jsx)(T.Z,{items:qe,onChange:function(tn){return Re(Ne,tn.fileList)}},"attachments-".concat(Ne)),mn===1&&(0,f.jsx)(se,{title:Ye,description:sn},"info-".concat(Ne))]})})})})]})},ye=Ze,Ae={SenderHeader:ye,Info:se,Upload:E}},487:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return Ie}});var te=e(9783),m=e.n(te),I=e(97857),b=e.n(I),j=e(5574),R=e.n(j),S=e(67294),_=e(93967),N=e.n(_),x=e(56044),y=e(85893);function T(r){var Ze=(0,x.wv)(),ye=Ze.getPrefixCls,Ae=ye("accordion-content-body");return(0,y.jsxs)("div",{className:Ae,children:[r.headerLeft||r.headerRight?(0,y.jsxs)("div",{className:"".concat(Ae,"-header"),children:[r.headerLeft,(0,y.jsx)("div",{style:{flex:1}}),r.headerRight]}):null,(0,y.jsx)("div",{className:"".concat(Ae,"-body"),children:r.children})]})}var P=e(9361);function g(r){var Ze=(0,x.wv)(),ye=Ze.theme,Ae=Ze.getPrefixCls,be=(ye==null?void 0:ye.algorithm)===P.Z.darkAlgorithm,Z=Ae("accordion-soft-light-title");return(0,y.jsx)("div",{className:Z,style:be?{}:{color:"rgba(38, 36, 76, 0.88)"},children:r.children})}var n=e(68400),v=e.n(n),B=e(9053),l,s=(0,B.vJ)(l||(l=v()([`
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
`])),function(r){return r.theme.prefixCls},function(r){return r.theme.colorSuccess},function(r){return r.theme.prefixCls},function(r){return r.theme.colorError},function(r){return r.theme.colorTextSecondary},function(r){return r.theme.colorBgBase},function(r){return r.theme.borderRadiusLG},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.colorBorder},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.colorBgBase},function(r){return r.theme.colorText},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorFillTertiary},function(r){return r.theme.prefixCls},function(r){return r.theme.colorTextSecondary},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.prefixCls},function(r){return r.theme.prefixCls},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.colorBorderSecondary},function(r){return r.theme.colorFillTertiary},function(r){return r.theme.colorText},function(r){return r.theme.colorBgBase}),p=e(40443),f=e(89034),A=e(9343),le=e(36674),F=e(9838),E=e(28387),he=e(16592);function re(r){var Ze=(0,x.wv)(),ye=Ze.getPrefixCls,Ae=ye("accordion-group"),be=S.useState(r.defaultOpen),Z=R()(be,2),K=Z[0],Oe=Z[1],ke=r.open!==void 0?r.open:K,Fe=r.inline?"close":ke?"open":"close",Ke=(0,S.useMemo)(function(){if(r.icon)return r.icon;if(r.status==="generating")return(0,y.jsx)(p.Z,{className:"".concat(Ae,"-icon-loading"),spin:!0});if(r.status==="finished")return(0,y.jsx)(f.Z,{className:"".concat(Ae,"-icon-success")});if(r.status==="interrupted")return(0,y.jsx)(A.Z,{});if(r.status==="error")return(0,y.jsx)(le.Z,{className:"".concat(Ae,"-icon-error")})},[r.status,r.icon]),Re=(0,S.useMemo)(function(){return r.steps?r.steps.map(function(dn,fn){var on=fn===0,vn=fn===r.steps.length-1;return(0,y.jsx)(re,b()(b()({},dn),{},{isFirst:on,isLast:vn}),dn.id||fn)}):r.children},[r.steps,r.children]);return(0,y.jsxs)("div",{className:N()("".concat(Ae),"".concat(Ae,"-").concat(Fe)),children:[(0,y.jsxs)("div",{className:N()("".concat(Ae,"-header"),"".concat(Ae,"-header-").concat(Fe)),onClick:function(){return Re&&r.open===void 0&&Oe(!K)},children:[Ke?(0,y.jsx)("div",{className:N()("".concat(Ae,"-header-icon"),m()(m()(m()({},"".concat(Ae,"-header-icon-line"),r.iconLine),"".concat(Ae,"-header-icon-first"),r.isFirst),"".concat(Ae,"-header-icon-last"),r.isLast&&Fe==="close"||r.level)),children:Ke}):null,(0,y.jsx)("div",{children:r.title}),Re&&(0,y.jsx)("div",{className:N()("".concat(Ae,"-header-arrow")),children:ke?(0,y.jsx)(E.Z,{}):(0,y.jsx)(F.Z,{})}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{style:{flex:1}}),r.rightChildren]})]}),(0,y.jsx)(se,{prefixCls:Ae,stateOpen:ke,status:Fe,inline:r.inline,content:Re,bodyStyle:r.bodyStyle,level:r.level})]})}var X={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function se(r){var Ze=(0,S.useRef)(null);if(!r.content)return null;var ye=r.prefixCls,Ae=r.stateOpen,be=r.inline,Z=r.bodyStyle,K=r.level;return(0,y.jsx)(he.ZP,{nodeRef:Ze,in:Ae,timeout:300,children:function(ke){return(0,y.jsx)("div",{style:b()(b()(b()({},Z),K?{marginTop:0}:{}),{},{transition:"opacity ".concat(300,"ms ease-in-out")},X[ke]),className:N()("".concat(ye,"-body"),"".concat(ye,"-body-").concat(Ae?"open":"close"),m()({},"".concat(ye,"-body-inline"),be)),children:r.content})}})}function ge(r){var Ze=r.level,ye=Ze===void 0?1:Ze,Ae=r.isFirst,be=Ae===void 0?!0:Ae,Z=r.isLast,K=Z===void 0?!0:Z;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{}),(0,y.jsx)(re,b()(b()({},r),{},{level:ye,isFirst:be,isLast:K}))]})}ge.BodyContent=T,ge.SoftLightTitle=g;var Ie=ge},14082:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return S}});var te=e(487),m=e(56044),I=e(9361),b=e(93967),j=e.n(b),R=e(85893);function S(_){var N=(0,m.wv)(),x=N.theme,y=N.getPrefixCls,T=y("accordion-deep-thinking"),P=(x==null?void 0:x.algorithm)===I.Z.darkAlgorithm,g=(0,R.jsx)("img",{style:{display:"block",width:16,height:16,filter:P?"invert(1)  brightness(100%) saturate(0%)":""},src:"https://img.alicdn.com/imgextra/i2/O1CN01QZgWRv1I4JM0BAZ9O_!!6000000000839-54-tps-56-56.apng"}),n=_.title||"Deep thinking";_.loading&&(n+="...");var v=_.loading?(0,R.jsx)(te.Z.SoftLightTitle,{children:n}):n,B=_.maxHeight?{maxHeight:_.maxHeight,overflowY:"auto"}:{},l=_.defaultOpen!==void 0?_.defaultOpen:_.autoCloseOnFinish&&!_.loading?!1:void 0;return(0,R.jsx)(te.Z,{title:v,status:_.loading?"generating":"finished",icon:_.loading?g:null,defaultOpen:l,open:_.open,bodyStyle:B,inline:!0,children:(0,R.jsx)("div",{className:j()(T,_.className),children:_.content||"..."})})}},51508:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return Bn}});var te=e(97857),m=e.n(te),I=e(9783),b=e.n(I),j=e(56044),R=e(68400),S=e.n(R),_=e(9053),N,x=(0,_.vJ)(N||(N=S()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.colorBgBase},function(a){return a.theme.prefixCls},function(a){return a.theme.colorBgBase},function(a){return a.theme.prefixCls},function(a){return a.theme.colorFillTertiary},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),y=e(93967),T=e.n(y),P=e(17909),g=e(59214),n=e(67294),v=e(81759),B=e(49131),l=e(21766),s=e(15009),p=e.n(s),f=e(19632),A=e.n(f),le=e(99289),F=e.n(le),E="agent-scope-runtime-webui-sessions",he="agent-scope-runtime-webui-session";function re(){return typeof window!="undefined"&&!!window.localStorage}function X(){return"".concat(Date.now(),"-").concat(Math.random().toString(36).slice(2,8))}function se(a,u){return{id:a.id||u||X(),name:a.name||"",messages:a.messages||[],generating:a.generating}}function ge(a){var u=a?E:he,i=[],d=function(){re()&&localStorage.setItem(u,JSON.stringify(i))},O=function(){if(re()){var k=localStorage.getItem(u);i=k?JSON.parse(k):[]}};return{getSessionList:function(){return F()(p()().mark(function k(){return p()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return O(),!a&&i.length>1&&(i=i.slice(0,1),d()),Q.abrupt("return",A()(i));case 3:case"end":return Q.stop()}},k)}))()},getSession:function(k){var ue=this;return F()(p()().mark(function Q(){var w;return p()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,ue.getSessionList();case 2:if(w=ie.sent,a){ie.next=5;break}return ie.abrupt("return",w[0]);case 5:return ie.abrupt("return",w.find(function(ve){return ve.id===k}));case 6:case"end":return ie.stop()}},Q)}))()},updateSession:function(k){var ue=this;return F()(p()().mark(function Q(){var w,q;return p()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:if(k.id){ve.next=2;break}return ve.abrupt("return",ue.createSession(k));case 2:return ve.next=4,ue.getSessionList();case 4:return w=ve.sent,q=w.findIndex(function(Be){return Be.id===k.id}),q>-1?w[q]=se(m()(m()({},w[q]),k),k.id):w.unshift(se(k)),i=a?w:w.slice(0,1),d(),ve.abrupt("return",A()(i));case 10:case"end":return ve.stop()}},Q)}))()},createSession:function(k){var ue=this;return F()(p()().mark(function Q(){var w,q;return p()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return ve.next=2,ue.getSessionList();case 2:return w=ve.sent,q=se(k),a?i=[q].concat(A()(w)):i=[q],d(),ve.abrupt("return",A()(i));case 7:case"end":return ve.stop()}},Q)}))()},removeSession:function(k){var ue=this;return F()(p()().mark(function Q(){var w;return p()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,ue.getSessionList();case 2:if(w=ie.sent,k.id){ie.next=5;break}return ie.abrupt("return",A()(w));case 5:return i=w.filter(function(ve){return ve.id!==k.id}),d(),ie.abrupt("return",A()(i));case 8:case"end":return ie.stop()}},Q)}))()}}}function Ie(a){return ge(a)}var r=e(85893),Ze=(0,g.createContext)(void 0);function ye(a){try{var u=(0,g.useContextSelector)(Ze,a);return u}catch(i){return{}}}function Ae(a){var u,i=a.children,d=(0,P.Z)(),O=(0,n.useMemo)(function(){var w,q=!!((w=a.options.session)!==null&&w!==void 0&&w.multiple);return Ie(q)},[(u=a.options.session)===null||u===void 0?void 0:u.multiple]),M=(0,n.useMemo)(function(){var w=a.options.theme||{},q=a.options.session||{},ie=!!q.multiple;return m()(m()({},a.options),{},{session:m()(m()({},q),{},{multiple:ie,api:q.api||O}),theme:m()(m()({},w),{},{narrowMode:!d.lg||w.narrowMode})})},[a.options,d.lg,O]),k=(0,n.useMemo)(function(){var w=M.theme.colorPrimary,q=M.theme.colorBgBase,ie=M.theme.colorTextBase,ve=M.theme.darkMode;if(w||ve){var Be=(0,v.Z)((0,B.Z)({primaryHex:w,bgBaseHex:q,textBaseHex:ie,darkMode:ve}));return Be}},[M.theme.colorPrimary,M.theme.colorBgBase,M.theme.colorTextBase,M.theme.darkMode]),ue=(0,r.jsx)(Ze.Provider,{value:M,children:i});if(k){var Q=M.theme.prefix||"agentscope-runtime-webui";return(0,r.jsx)(l.ZP,m()(m()({},k),{},{style:{height:"100%"},prefix:Q,prefixCls:Q,children:ue}))}return ue}var be=null,Z=e(5574),K=e.n(Z),Oe=e(66672),ke=e(10325),Fe=e(79785),Ke=(0,g.createContext)({loading:!1,setLoading:function(){},getLoading:function(){return!1},disabled:!1,setDisabled:function(){},getDisabled:function(){return!1}});function Re(a){var u=(0,Fe.Z)(!1),i=K()(u,3),d=i[0],O=i[1],M=i[2],k=(0,Fe.Z)(!1),ue=K()(k,3),Q=ue[0],w=ue[1],q=ue[2];return(0,r.jsx)(Ke.Provider,{value:{loading:d,setLoading:O,getLoading:M,disabled:Q,setDisabled:w,getDisabled:q},children:a.children})}var dn=function(u){return(0,g.useContextSelector)(Ke,u)},fn=e(13769),on=e.n(fn),vn=e(41154),$e=e(64057),Rn=e(81644),U=e(50993),Se=["trigger"];function Ne(a,u){var i=(0,n.useState)([]),d=K()(i,2),O=d[0],M=d[1],k=(0,n.useRef)([]);k.current=O;var ue=(0,n.useCallback)(function(){return k.current},[]),Q=a||{},w=Q.trigger,q=on()(Q,Se),ie=(0,n.useRef)(0),ve=(0,n.useCallback)(function(me){if(q!=null&&q.customRequest){var pe=me.type||"",ze=me.name||"";if(q.accept){var Me=q.accept.split(",").some(function(Ve){var Pn=Ve.trim();if(!Pn)return!1;if(Pn.startsWith("."))return ze.toLowerCase().endsWith(Pn.toLowerCase());if(Pn==="*/*")return!0;if(Pn.includes("*")){var wn=Pn.split("/"),Nn=K()(wn,1),Qn=Nn[0],Et=pe.split("/"),Sn=K()(Et,1),ft=Sn[0];return Qn===ft}return pe===Pn});if(!Me)return}if(!(q.maxCount&&k.current.length>=q.maxCount)){var _e=function(){var Pn=ze.match(/\.([^.]+)$/);if(Pn)return Pn[1].toLowerCase();var wn=pe.match(/\/([^/+]+)/);return wn?wn[1].toLowerCase():"bin"},yn="paste-".concat(Date.now(),"-").concat(ie.current++),Xn={uid:yn,name:ze||"pasted-".concat(Date.now(),".").concat(_e()),size:me.size,type:pe,status:"uploading",percent:0,originFileObj:me};if(M(function(Ve){return[].concat(A()(Ve),[Xn])}),pe.startsWith("image/")){var Mn=new FileReader;Mn.onload=function(Ve){var Pn,wn=(Pn=Ve.target)===null||Pn===void 0?void 0:Pn.result;typeof wn=="string"&&M(function(Nn){return Nn.map(function(Qn){return Qn.uid===yn?m()(m()({},Qn),{},{thumbUrl:wn}):Qn})})},Mn.readAsDataURL(me)}q.customRequest({file:me,filename:"file",action:"",method:"POST",onSuccess:function(Pn){M(function(wn){return wn.map(function(Nn){return Nn.uid===yn?m()(m()({},Nn),{},{status:"done",response:Pn,percent:100}):Nn})})},onError:function(Pn){M(function(wn){return wn.map(function(Nn){return Nn.uid===yn?m()(m()({},Nn),{},{status:"error",error:Pn}):Nn})})},onProgress:function(Pn){M(function(wn){return wn.map(function(Nn){return Nn.uid===yn?m()(m()({},Nn),{},{percent:Pn==null?void 0:Pn.percent}):Nn})})}},{defaultRequest:function(){}})}}},[q==null?void 0:q.customRequest,q==null?void 0:q.accept]);if(q!=null&&q.customRequest){var Be=(0,r.jsx)(vn.Z,m()(m()({fileList:O,showUploadList:!1,onChange:function(pe){M(pe.fileList)}},q),{},{disabled:u==null?void 0:u.disabled,children:w?n.createElement(w,{disabled:u==null?void 0:u.disabled}):(0,r.jsx)($e.Z,{disabled:u==null?void 0:u.disabled,icon:(0,r.jsx)(Rn.Z,{}),bordered:!1})})),Ce=(0,r.jsx)(Oe.Z.Header,{closable:!1,open:(O==null?void 0:O.length)>0,children:(0,r.jsx)(U.Z,{items:O,onChange:function(pe){return M(pe.fileList)}})});return{fileList:O,getFileList:ue,setFileList:M,handlePasteFile:ve,uploadIconButton:Be,uploadFileListHeader:Ce}}else return{enabled:!1,handlePasteFile:void 0}}function Ye(a){var u=(0,Fe.Z)(""),i=K()(u,3),d=i[0],O=i[1],M=i[2],k=(0,j.wv)().getPrefixCls("chat-anywhere-input"),ue=ye(function(vt){return vt.sender}),Q=dn(function(vt){return vt}),w=ue||{},q=w.placeholder,ie=q===void 0?"":q,ve=w.disclaimer,Be=ve===void 0?"":ve,Ce=w.maxLength,me=w.beforeSubmit,pe=me===void 0?function(){return Promise.resolve(!0)}:me,ze=w.beforeUI,Me=w.afterUI,_e=w.scalable,yn=_e===void 0?!0:_e,Xn=w.attachments,Mn=w.prefix,Ve=w.allowSpeech,Pn=Ne(Xn,{disabled:!!Q.disabled}),wn=Pn.getFileList,Nn=Pn.setFileList,Qn=Pn.handlePasteFile,Et=Pn.uploadIconButton,Sn=Pn.uploadFileListHeader,ft=(0,n.useCallback)(F()(p()().mark(function vt(){var wt,Ut;return p()().wrap(function(rt){for(;;)switch(rt.prev=rt.next){case 0:return rt.next=2,pe();case 2:if(wt=rt.sent,wt){rt.next=5;break}return rt.abrupt("return");case 5:Ut=((wn==null?void 0:wn())||[]).filter(function(Zt){var Bt;return(Bt=Zt.response)===null||Bt===void 0?void 0:Bt.url}),a.onSubmit({query:M(),fileList:Ut}),O(""),Nn&&Nn([]);case 9:case"end":return rt.stop()}},vt)})),[]),kt=(0,n.useCallback)(function(){a.onCancel()},[]);return(0,r.jsxs)("div",{className:k,children:[(0,r.jsxs)("div",{className:"".concat(k,"-wrapper"),children:[ze,(0,r.jsx)(Oe.Z,{loading:Q.loading,disabled:Q.disabled,scalable:yn,placeholder:ie,value:d,prefix:(0,r.jsxs)(r.Fragment,{children:[Et,Mn]}),header:Sn,onChange:O,maxLength:Ce,onSubmit:ft,onCancel:kt,allowSpeech:Ve,onPasteFile:Qn}),Me]}),Be?(0,r.jsx)(ke.Z,{desc:Be}):(0,r.jsx)("div",{className:"".concat(k,"-blank")})]})}var sn=e(52471),Qe=(0,g.createContext)({messages:[],setMessages:function(){},getMessages:function(){return[]}});function mn(a){var u=(0,Fe.Z)([]),i=K()(u,3),d=i[0],O=i[1],M=i[2],k={messages:d,setMessages:O,getMessages:M};return(0,r.jsx)(Qe.Provider,{value:k,children:a.children})}var cn=function(){var u=(0,g.useContextSelector)(Qe,function(Q){return{setMessages:Q.setMessages,getMessages:Q.getMessages}}),i=u.setMessages,d=u.getMessages,O=n.useCallback(function(){i([])},[]),M=n.useCallback(function(Q){return d().find(function(w){return w.id===Q})},[]),k=n.useCallback(function(Q){i(function(w){return w.filter(function(q){return q.id!==Q.id})})},[]),ue=n.useCallback(function(Q){i(function(w){var q=w.findIndex(function(ve){return ve.id===Q.id});if(q>-1){var ie=m()(m()({},w[q]),Q);return[].concat(A()(w.slice(0,q)),[ie],A()(w.slice(q+1)))}else return[].concat(A()(w),[Q])})},[]);return{getMessages:d,removeAllMessages:O,getMessage:M,removeMessage:k,updateMessage:ue}},qe=e(78234),un=e(73935),tn=e(2093);function ln(a){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];(0,n.useEffect)(function(){return document.addEventListener(a.type,a.callback),function(){document.removeEventListener(a.type,a.callback)}},u)}var Je=function(u){var i=u.type,d=u.data;document.dispatchEvent(new CustomEvent(i,{detail:d}))},En=(0,g.createContext)({sessions:[],setSessions:function(){},getSessions:function(){return[]},currentSessionId:void 0,setCurrentSessionId:function(){},getCurrentSessionId:function(){return""}});function Ln(a){var u=ye(function(ve){return ve.session}),i=(0,Fe.Z)([]),d=K()(i,3),O=d[0],M=d[1],k=d[2],ue=(0,Fe.Z)(void 0),Q=K()(ue,3),w=Q[0],q=Q[1],ie=Q[2];return(0,qe.Z)(F()(p()().mark(function ve(){var Be,Ce;return p()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return pe.next=2,u.api.getSessionList();case 2:Ce=pe.sent,M(Ce),q(Ce==null||(Be=Ce[0])===null||Be===void 0?void 0:Be.id);case 5:case"end":return pe.stop()}},ve)}))),(0,r.jsx)(En.Provider,{value:{sessions:O,setSessions:M,getSessions:k,currentSessionId:w,setCurrentSessionId:q,getCurrentSessionId:ie},children:a.children})}var _n=function(){var u=(0,g.useContextSelector)(En,function(O){return O.currentSessionId}),i=ye(function(O){return O.session}),d=(0,g.useContextSelector)(Qe,function(O){return O.setMessages});(0,tn.Z)(F()(p()().mark(function O(){var M,k;return p()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return un.flushSync(function(){d([])}),Q.next=3,i.api.getSession(u);case 3:M=Q.sent,k=(M==null?void 0:M.messages)||[],d(k.map(function(w){return m()(m()({},w),{},{history:!0})})),M!=null&&M.generating&&Je({type:"handleReconnect",data:{session_id:u}});case 7:case"end":return Q.stop()}},O)})),[u])},hn=function(){var u=(0,g.useContextSelector)(En,function(Be){return Be}),i=u.setSessions,d=u.getSessions,O=u.getCurrentSessionId,M=u.setCurrentSessionId,k=u.currentSessionId,ue=ye(function(Be){return Be.session}),Q=(0,g.useContextSelector)(Qe,function(Be){return Be.setMessages}),w=n.useCallback(function(){var Be=F()(p()().mark(function Ce(me){var pe;return p()().wrap(function(Me){for(;;)switch(Me.prev=Me.next){case 0:return Me.next=2,ue.api.removeSession(me);case 2:pe=Me.sent,Q([]),M(void 0),i(pe);case 6:case"end":return Me.stop()}},Ce)}));return function(Ce){return Be.apply(this,arguments)}}(),[]),q=n.useCallback(function(){var Be=F()(p()().mark(function Ce(me){var pe;return p()().wrap(function(Me){for(;;)switch(Me.prev=Me.next){case 0:if(!me.id){Me.next=6;break}return Me.next=3,ue.api.updateSession(me);case 3:Me.t0=Me.sent,Me.next=9;break;case 6:return Me.next=8,ue.api.createSession(me);case 8:Me.t0=Me.sent;case 9:return pe=Me.t0,i(pe),Me.abrupt("return",me);case 12:case"end":return Me.stop()}},Ce)}));return function(Ce){return Be.apply(this,arguments)}}(),[]),ie=n.useCallback(function(){var Be=F()(p()().mark(function Ce(me){var pe;return p()().wrap(function(Me){for(;;)switch(Me.prev=Me.next){case 0:return Me.next=2,q({name:(me==null?void 0:me.name)||"",messages:[]});case 2:return pe=Me.sent,M(pe.id),Q(pe.messages),Me.abrupt("return",pe.id);case 6:case"end":return Me.stop()}},Ce)}));return function(Ce){return Be.apply(this,arguments)}}(),[]),ve=n.useCallback(function(Be){M(Be)},[]);return{changeCurrentSessionId:ve,getCurrentSessionId:O,getSessions:d,removeSession:w,updateSession:q,createSession:ie}},o=e(64437),We=["render"];function en(a){var u=ye(function(Q){return Q.welcome});if(!u)return null;var i=u.render,d=on()(u,We);if(i)return u.render({greeting:u.greeting,avatar:u.avatar,description:u.description,prompts:u.prompts,onSubmit:a.onSubmit});var O=d.greeting,M=d.avatar,k=d.prompts,ue=d.description;return(0,r.jsx)(o.Z,{greeting:O,avatar:M,description:ue,prompts:k,onClick:function(w){return a.onSubmit({query:w})}})}function pn(a){var u=(0,g.useContextSelector)(Ke,function(M){return M.loading}),i=(0,g.useContextSelector)(Qe,function(M){return M.messages}),d=(0,j.wv)().getPrefixCls("chat-anywhere-message-list"),O=(0,g.useContextSelector)(En,function(M){return M.currentSessionId});return i.length===0?(0,r.jsx)("div",{className:T()(d,"".concat(d,"-welcome")),children:(0,r.jsx)(en,{onSubmit:a.onSubmit})}):(0,r.jsx)(sn.Z.List,{smooth:!!u,pagination:!0,classNames:{wrapper:d},items:i},O)}var c,ae=(0,_.vJ)(c||(c=S()([`
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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),L=e(32116),Y=e(88773),z=e(12444),W=e.n(z),oe=e(72004),je=e.n(oe),t=function(a){return a.Created="created",a.InProgress="in_progress",a.Completed="completed",a.Canceled="canceled",a.Failed="failed",a.Rejected="rejected",a.Unknown="unknown",a}({}),h=function(a){return a.ASSISTANT="assistant",a.USER="user",a.SYSTEM="system",a}({}),C=function(a){return a.MESSAGE="message",a.REASONING="reasoning",a.PLUGIN_CALL="plugin_call",a.PLUGIN_CALL_OUTPUT="plugin_call_output",a.FUNCTION_CALL="function_call",a.FUNCTION_CALL_OUTPUT="function_call_output",a.COMPONENT_CALL="component_call",a.COMPONENT_CALL_OUTPUT="component_call_output",a.MCP_LIST_TOOLS="mcp_list_tools",a.MCP_APPROVAL_REQUEST="mcp_approval_request",a.MCP_APPROVAL_RESPONSE="mcp_approval_response",a.MCP_CALL="mcp_call",a.MCP_CALL_OUTPUT="mcp_call_output",a.HEARTBEAT="heartbeat",a.ERROR="error",a}({}),D=function(a){return a.TEXT="text",a.DATA="data",a.IMAGE="image",a.AUDIO="audio",a.VIDEO="video",a.FILE="file",a.REFUSAL="refusal",a}({}),V=function(){function a(){W()(this,a),b()(this,"data",void 0)}return je()(a,[{key:"isImageFile",value:function(i){return i.type.indexOf("image/")===0}},{key:"isVideoFile",value:function(i){return i.type.indexOf("video/")===0}},{key:"isAudioFile",value:function(i){return i.type.indexOf("audio/")===0}},{key:"buildImageContent",value:function(i){var d;return{type:D.IMAGE,image_url:(d=i.response)===null||d===void 0?void 0:d.url,status:t.Created}}},{key:"buildTextContent",value:function(i){return{type:D.TEXT,text:i,status:t.Created}}},{key:"buildVideoContent",value:function(i){var d;return{type:D.VIDEO,video_url:(d=i.response)===null||d===void 0?void 0:d.url,status:t.Created}}},{key:"buildAudioContent",value:function(i){var d,O,M;return{type:D.AUDIO,audio_url:(d=i.response)===null||d===void 0?void 0:d.url,data:(O=i.response)===null||O===void 0?void 0:O.url,format:(M=i.type)===null||M===void 0?void 0:M.replace("audio/",""),status:t.Created}}},{key:"buildFileContent",value:function(i){var d;return{type:D.FILE,file_url:(d=i.response)===null||d===void 0?void 0:d.url,file_id:i.file_id,file_name:i.name,file_size:i.size,status:t.Created}}},{key:"handle",value:function(i){var d,O=this;this.data={input:[]};var M=[this.buildTextContent(i.query)];return(d=i.fileList)!==null&&d!==void 0&&d.length&&i.fileList.forEach(function(k){O.isImageFile(k)?M.push(O.buildImageContent(k)):O.isVideoFile(k)?M.push(O.buildVideoContent(k)):O.isAudioFile(k)?M.push(O.buildAudioContent(k)):M.push(O.buildFileContent(k))}),this.data={input:[{role:"user",type:C.MESSAGE,content:M}]},this.data}},{key:"handleApproval",value:function(i){return this.data={input:i},this.data}}],[{key:"getHistoryMessages",value:function(i){return i.reduce(function(d,O){var M;return(M=O.cards)!==null&&M!==void 0&&M.length?d.concat(O.cards[0].data.input||O.cards[0].data.output):d},[])}}]),a}(),$=V;function H(a){var u=a.currentQARef,i=cn(),d=i.updateMessage,O=i.getMessages,M=i.removeMessage,k=(0,n.useCallback)(function(ie){return u.current.abortController=new AbortController,u.current.request={id:(0,Y.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new $().handle(ie)}]},un.flushSync(function(){d(u.current.request)}),u.current.request},[u,d]),ue=(0,n.useCallback)(function(ie){return u.current.abortController=new AbortController,u.current.request={id:(0,Y.Z)(),role:"user",cards:[{code:"AgentScopeRuntimeRequestCard",data:new $().handleApproval(ie)}]},un.flushSync(function(){d(u.current.request)}),u.current.request},[u,d]),Q=(0,n.useCallback)(function(){return u.current.response={id:(0,Y.Z)(),role:"assistant",cards:[],msgStatus:"generating"},d(u.current.response),u.current.response},[u,d]),w=(0,n.useCallback)(function(){return $.getHistoryMessages(O())},[O]),q=(0,n.useCallback)(function(ie){un.flushSync(function(){M({id:ie})})},[M]);return{createRequestMessage:k,createApprovalMessage:ue,createResponseMessage:Q,getHistoryMessages:w,updateMessage:d,removeMessageById:q,getMessages:O}}var ne=e(44987),de=e.n(ne),G=e(7354),ce=e(64599),Pe=e.n(ce),Ue=e(93513),He=function(){function a(u){var i=u.id,d=u.status,O=u.created_at;W()(this,a),b()(this,"data",void 0),this.data={id:i,output:[],object:"response",status:d||t.Created,created_at:O||Date.now()}}return je()(a,[{key:"handleResponse",value:function(i){this.data=(0,Ue.produce)(this.data,function(d){i.output||(i.output=[]),Object.assign(d,i)})}},{key:"handleMessage",value:function(i){this.data=(0,Ue.produce)(this.data,function(d){d.output||(d.output=[]);var O=d.output.findIndex(function(k){return k.id===i.id});if(O>=0){var M=d.output[O].content;Object.assign(d.output[O],i),(!i.content||i.content.length===0)&&(d.output[O].content=M)}else d.output.push(i)})}},{key:"handleContent",value:function(i){this.data=(0,Ue.produce)(this.data,function(d){var O=d.output.find(function(k){return k.id===i.msg_id});if(!O){console.warn("Message not found for content:",i.msg_id);return}if(O.content||(O.content=[]),i.delta){var M=O.content[O.content.length-1];M&&M.delta?i.type===D.TEXT&&M.type===D.TEXT?M.text+=i.text:i.type===D.IMAGE?M.image_url=i.image_url:i.type===D.DATA&&(M.data=i.data):O.content.push(i)}else O.content.length>0?Object.assign(O.content[O.content.length-1],i):O.content.push(i)})}},{key:"handleError",value:function(i){this.data=(0,Ue.produce)(this.data,function(d){d.status=t.Failed,d.output.push({status:t.Failed,type:C.ERROR,content:[],id:(0,Y.Z)(),role:"assistant",code:i.code,message:typeof i.message=="string"?i.message:JSON.stringify(i.message)})})}},{key:"handle",value:function(i){if(i.object==="response")this.handleResponse(i);else if(i.object==="message"){if(i.type===C.HEARTBEAT)return this.data;this.handleMessage(i)}else i.object==="content"?this.handleContent(i):this.handleError(i);return this.data}},{key:"cancel",value:function(){return this.data=(0,Ue.produce)(this.data,function(i){a.maybeGenerating(i)&&(i.status=t.Canceled),i.output.forEach(function(d){a.maybeGenerating(d)&&(d.status=t.Canceled,d.content.forEach(function(O){a.maybeGenerating(O)&&(O.status=t.Canceled)}))})}),this.data}}],[{key:"mergeToolMessages",value:function(i){var d=new Map,O=[],M=Pe()(i),k;try{var ue=function(){var w,q,ie=k.value;if(a.maybeToolInput(ie)&&(w=ie.content)!==null&&w!==void 0&&w.length){var ve=ie.content[0],Be=ve.data.call_id||ve.data.name;d.set(Be,ve),O.push(ie)}else if(a.maybeToolOutput(ie)&&(q=ie.content)!==null&&q!==void 0&&q.length){var Ce=ie.content[0],me=Ce.data.call_id||Ce.data.name,pe=d.get(me);pe&&(O=O.map(function(ze){if(!a.maybeToolInput(ze))return ze;var Me=ze.content[0],_e=Me.data.call_id||Me.data.name;return _e===me?m()(m()({},ie),{},{content:[].concat(A()(ze.content),[Ce])}):ze}))}else O.push(ie)};for(M.s();!(k=M.n()).done;)ue()}catch(Q){M.e(Q)}finally{M.f()}return O}},{key:"maybeToolOutput",value:function(i){return[C.FUNCTION_CALL_OUTPUT,C.PLUGIN_CALL_OUTPUT,C.COMPONENT_CALL_OUTPUT,C.MCP_CALL_OUTPUT].includes(i.type)}},{key:"maybeToolInput",value:function(i){return[C.FUNCTION_CALL,C.PLUGIN_CALL,C.COMPONENT_CALL,C.MCP_CALL].includes(i.type)}},{key:"maybeGenerating",value:function(i){return[t.InProgress,t.Created].includes(i.status)}},{key:"maybeDone",value:function(i){return[t.Completed,t.Canceled,t.Failed].includes(i.status)}}]),a}(),Ge=He;function rn(a){var u=a.currentQARef,i=a.updateMessage,d=a.getCurrentSessionId,O=a.onFinish,M=ye(function(ie){return ie.api}),k=(0,n.useRef)(M);(0,n.useEffect)(function(){k.current=M},[M]);var ue=(0,n.useCallback)(function(){var ie=F()(p()().mark(function ve(Be){var Ce,me,pe,ze,Me,_e,yn,Xn;return p()().wrap(function(Ve){for(;;)switch(Ve.prev=Ve.next){case 0:Ce=new Ge({id:"",status:t.Created,created_at:0}),me=!1,pe=!1,Ve.prev=3,Me=de()(Be);case 5:return Ve.next=7,Me.next();case 7:if(!(me=!(_e=Ve.sent).done)){Ve.next=17;break}return yn=_e.value,Xn=Ce.handle(yn),u.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Xn}],i(u.current.response),Ve.next=14,(0,L.Z)(100);case 14:me=!1,Ve.next=5;break;case 17:Ve.next=23;break;case 19:Ve.prev=19,Ve.t0=Ve.catch(3),pe=!0,ze=Ve.t0;case 23:if(Ve.prev=23,Ve.prev=24,!(me&&Me.return!=null)){Ve.next=28;break}return Ve.next=28,Me.return();case 28:if(Ve.prev=28,!pe){Ve.next=31;break}throw ze;case 31:return Ve.finish(28);case 32:return Ve.finish(23);case 33:case"end":return Ve.stop()}},ve,null,[[3,19,23,33],[24,,28,32]])}));return function(ve){return ie.apply(this,arguments)}}(),[]),Q=(0,n.useCallback)(function(){var ie=F()(p()().mark(function ve(Be){var Ce,me,pe,ze,Me,_e,yn,Xn,Mn,Ve,Pn,wn,Nn,Qn;return p()().wrap(function(Sn){for(;;)switch(Sn.prev=Sn.next){case 0:if(Ce=k.current,me=new Ge({id:"",status:t.Created,created_at:0}),Be.ok){Sn.next=5;break}return Be.json().then(function(ft){var kt=me.handle({object:"message",type:C.ERROR,content:[],id:"error",role:"assistant",status:t.Failed,code:String(Be.status),message:JSON.stringify(ft)});u.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:kt}],O()}),Sn.abrupt("return");case 5:Sn.prev=5,pe=!1,ze=!1,Sn.prev=8,_e=de()((0,G.Z)({readableStream:Be.body}));case 10:return Sn.next=12,_e.next();case 12:if(!(pe=!(yn=Sn.sent).done)){Sn.next=29;break}if(Xn=yn.value,((Mn=u.current.response)===null||Mn===void 0?void 0:Mn.msgStatus)!=="interrupted"){Sn.next=20;break}return(Pn=u.current.abortController)===null||Pn===void 0||Pn.abort(),Ce.cancel&&Ce.cancel({session_id:d()}),u.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:me.cancel()}],i(u.current.response),Sn.abrupt("break",29);case 20:if(wn=k.current.responseParser||JSON.parse,Nn=wn(Xn.data),Qn=me.handle(Nn),!(Qn.status!==t.Failed&&!((Ve=Qn.output)!==null&&Ve!==void 0&&(Ve=Ve[0])!==null&&Ve!==void 0&&(Ve=Ve.content)!==null&&Ve!==void 0&&Ve.length))){Sn.next=25;break}return Sn.abrupt("continue",26);case 25:u.current.response&&(u.current.response.cards=[{code:"AgentScopeRuntimeResponseCard",data:Qn}],Qn.status===t.Completed||Qn.status===t.Failed?O():i(u.current.response));case 26:pe=!1,Sn.next=10;break;case 29:Sn.next=35;break;case 31:Sn.prev=31,Sn.t0=Sn.catch(8),ze=!0,Me=Sn.t0;case 35:if(Sn.prev=35,Sn.prev=36,!(pe&&_e.return!=null)){Sn.next=40;break}return Sn.next=40,_e.return();case 40:if(Sn.prev=40,!ze){Sn.next=43;break}throw Me;case 43:return Sn.finish(40);case 44:return Sn.finish(35);case 45:Sn.next=50;break;case 47:Sn.prev=47,Sn.t1=Sn.catch(5),console.error(Sn.t1);case 50:case"end":return Sn.stop()}},ve,null,[[5,47],[8,31,35,45],[36,,40,44]])}));return function(ve){return ie.apply(this,arguments)}}(),[d,u,i,O]),w=(0,n.useCallback)(function(){var ie=F()(p()().mark(function ve(Be,Ce){var me,pe,ze,Me,_e,yn;return p()().wrap(function(Mn){for(;;)switch(Mn.prev=Mn.next){case 0:if(pe=k.current,ze=pe.enableHistoryMessages,Me=ze===void 0?!1:ze,_e=(me=u.current.abortController)===null||me===void 0?void 0:me.signal,Mn.prev=3,!pe.fetch){Mn.next=10;break}return Mn.next=7,pe.fetch({input:Be,biz_params:Ce,signal:_e});case 7:Mn.t0=Mn.sent,Mn.next=13;break;case 10:return Mn.next=12,fetch(pe.baseURL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(pe.token||"")},body:JSON.stringify({input:Me?Be:Be.slice(-1),session_id:d(),stream:!0,biz_params:Ce}),signal:_e});case 12:Mn.t0=Mn.sent;case 13:yn=Mn.t0,Mn.next=18;break;case 16:Mn.prev=16,Mn.t1=Mn.catch(3);case 18:if(!(yn&&yn.body)){Mn.next=21;break}return Mn.next=21,Q(yn);case 21:case"end":return Mn.stop()}},ve,null,[[3,16]])}));return function(ve,Be){return ie.apply(this,arguments)}}(),[d,u,Q]),q=(0,n.useCallback)(function(){var ie=F()(p()().mark(function ve(Be){var Ce,me,pe,ze;return p()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:if(me=k.current,me.reconnect){_e.next=3;break}return _e.abrupt("return");case 3:return pe=(Ce=u.current.abortController)===null||Ce===void 0?void 0:Ce.signal,_e.prev=4,_e.next=7,me.reconnect({session_id:Be,signal:pe});case 7:ze=_e.sent,_e.next=12;break;case 10:_e.prev=10,_e.t0=_e.catch(4);case 12:if(!(ze&&ze.body)){_e.next=15;break}return _e.next=15,Q(ze);case 15:case"end":return _e.stop()}},ve,null,[[4,10]])}));return function(ve){return ie.apply(this,arguments)}}(),[u,Q]);return{request:w,reconnect:q,mockRequest:ue}}function Le(){var a=hn(),u=a.createSession,i=a.updateSession,d=a.getCurrentSessionId,O=(0,n.useCallback)(function(){var ue=F()(p()().mark(function Q(w){return p()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:if(d()){ie.next=3;break}return ie.next=3,u({name:w});case 3:case"end":return ie.stop()}},Q)}));return function(Q){return ue.apply(this,arguments)}}(),[d,u]),M=(0,n.useCallback)(function(){var ue=F()(p()().mark(function Q(w,q){return p()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:if(q.length!==0){ve.next=3;break}return ve.next=3,i({id:d(),name:w});case 3:case"end":return ve.stop()}},Q)}));return function(Q,w){return ue.apply(this,arguments)}}(),[d,i]),k=(0,n.useCallback)(function(){var ue=F()(p()().mark(function Q(w){return p()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,i({id:d(),messages:w});case 2:case"end":return ie.stop()}},Q)}));return function(Q){return ue.apply(this,arguments)}}(),[d,i]);return{ensureSession:O,updateSessionName:M,syncSessionMessages:k,getCurrentSessionId:d}}function fe(){var a=(0,g.useContextSelector)(Ke,function(Ce){return Ce.setLoading}),u=(0,g.useContextSelector)(En,function(Ce){return Ce.currentSessionId}),i=(0,n.useRef)({}),d=H({currentQARef:i}),O=Le(),M=(0,n.useCallback)(function(){var Ce=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished";i.current.response&&(i.current.response.msgStatus=Ce,a(!1),un.flushSync(function(){d.updateMessage(i.current.response)}),O.syncSessionMessages(d.getMessages()))},[a,d,O]),k=rn({currentQARef:i,updateMessage:d.updateMessage,getCurrentSessionId:O.getCurrentSessionId,onFinish:function(){return M("finished")}}),ue=k.request,Q=k.reconnect,w=(0,n.useCallback)(function(){var Ce=F()(p()().mark(function me(pe){var ze,Me;return p()().wrap(function(yn){for(;;)switch(yn.prev=yn.next){case 0:return yn.next=2,O.ensureSession(pe.query);case 2:if(ze=d.getMessages(),!O.getCurrentSessionId()){yn.next=6;break}return yn.next=6,O.updateSessionName(pe.query,ze);case 6:return d.createRequestMessage(pe),a(!0),yn.next=10,(0,L.Z)(100);case 10:return d.createResponseMessage(),Me=d.getHistoryMessages(),yn.next=14,O.syncSessionMessages(d.getMessages());case 14:return yn.next=16,ue(Me,pe.biz_params);case 16:case"end":return yn.stop()}},me)}));return function(me){return Ce.apply(this,arguments)}}(),[d,O,ue]),q=(0,n.useCallback)(function(){var Ce=F()(p()().mark(function me(pe){var ze,Me;return p()().wrap(function(yn){for(;;)switch(yn.prev=yn.next){case 0:return ze=pe.input,d.createApprovalMessage(ze),a(!0),yn.next=5,(0,L.Z)(100);case 5:return d.createResponseMessage(),Me=d.getHistoryMessages(),yn.next=9,O.syncSessionMessages(d.getMessages());case 9:return yn.next=11,ue(Me);case 11:case"end":return yn.stop()}},me)}));return function(me){return Ce.apply(this,arguments)}}(),[d,O,ue]),ie=(0,n.useCallback)(function(){M("interrupted")},[M]),ve=(0,n.useCallback)(function(){var Ce=F()(p()().mark(function me(pe){var ze;return p()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return a(!0),d.removeMessageById(pe),i.current.abortController=new AbortController,d.createResponseMessage(),ze=d.getHistoryMessages(),_e.next=7,ue(ze);case 7:case"end":return _e.stop()}},me)}));return function(me){return Ce.apply(this,arguments)}}(),[d,ue]),Be=(0,n.useCallback)(function(){var Ce=F()(p()().mark(function me(pe){return p()().wrap(function(Me){for(;;)switch(Me.prev=Me.next){case 0:return i.current.abortController=new AbortController,a(!0),d.createResponseMessage(),Me.next=5,Q(pe);case 5:case"end":return Me.stop()}},me)}));return function(me){return Ce.apply(this,arguments)}}(),[d,Q,a]);return(0,n.useEffect)(function(){var Ce;(Ce=i.current.abortController)===null||Ce===void 0||Ce.abort(),i.current={request:void 0,response:void 0,abortController:void 0}},[u]),ln({type:"handleReconnect",callback:function(){var Ce=F()(p()().mark(function pe(ze){return p()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,Be(ze.detail.session_id);case 2:case"end":return _e.stop()}},pe)}));function me(pe){return Ce.apply(this,arguments)}return me}()},[Be]),ln({type:"handleReplace",callback:function(){var Ce=F()(p()().mark(function pe(ze){return p()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,ve(ze.detail.id);case 2:case"end":return _e.stop()}},pe)}));function me(pe){return Ce.apply(this,arguments)}return me}()}),ln({type:"handleSubmit",callback:function(){var Ce=F()(p()().mark(function pe(ze){return p()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,w(ze.detail);case 2:case"end":return _e.stop()}},pe)}));function me(pe){return Ce.apply(this,arguments)}return me}()},[w]),ln({type:"handleApproval",callback:function(){var Ce=F()(p()().mark(function pe(ze){return p()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,q(ze.detail);case 2:case"end":return _e.stop()}},pe)}));function me(pe){return Ce.apply(this,arguments)}return me}()},[q]),{handleSubmit:w,handleCancel:ie}}function J(){var a=(0,j.wv)().getPrefixCls("chat-anywhere-chat"),u=fe(),i=u.handleSubmit,d=u.handleCancel;return _n(),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ae,{}),(0,r.jsxs)("div",{className:a,children:[(0,r.jsx)(pn,{onSubmit:i}),(0,r.jsx)(Ye,{onCancel:d,onSubmit:i})]})]})}var An=e(21403),xn=e(67392),Xe=e(13660),Cn=e(12624),nn=e(50287),jn=e(9368),Te=(0,n.createContext)({collapsed:!1,toggleCollapsed:function(){}});function De(a){var u=(0,n.useState)(!1),i=K()(u,2),d=i[0],O=i[1],M=(0,n.useCallback)(function(){O(function(ue){return!ue})},[]),k=(0,n.useMemo)(function(){return{collapsed:d,toggleCollapsed:M}},[d,M]);return(0,r.jsx)(Te.Provider,{value:k,children:a.children})}function we(){var a=(0,n.useContext)(Te),u=a.collapsed,i=(0,j.wv)().getPrefixCls("chat-anywhere-sessions"),d=ye(function(O){var M;return(M=O.theme)===null||M===void 0?void 0:M.leftHeader})||{};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"".concat(i),children:[n.isValidElement(d)?d:(0,r.jsx)(xe,{}),(0,r.jsxs)("div",{className:"".concat(i,"-content"),style:{display:u?"none":"flex"},children:[(0,r.jsx)(Ee,{}),(0,r.jsx)(gn,{})]})]})})}function xe(a){var u=a.className,i=ye(function(Be){var Ce;return(Ce=Be.theme)===null||Ce===void 0?void 0:Ce.leftHeader})||{},d=(0,j.wv)().getPrefixCls("chat-anywhere-sessions"),O=(0,n.useContext)(Te),M=O.toggleCollapsed,k=O.collapsed,ue=ye(function(Be){return Be.session.multiple}),Q=i,w=Q.logo,q=w===void 0?"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png":w,ie=Q.title,ve=ie===void 0?"Runtime WebUI":ie;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:T()("".concat(d,"-header"),u),children:[(0,r.jsxs)("div",{className:"".concat(d,"-header-left"),children:[q&&(0,r.jsx)("img",{src:q,alt:"logo",height:32}),(0,r.jsx)("span",{children:ve})]}),ue&&(0,r.jsx)($e.Z,{className:"".concat(d,"-header-collapse"),bordered:!1,icon:k?(0,r.jsx)(Xe.Z,{}):(0,r.jsx)(xn.Z,{}),onClick:M})]})})}function Ee(a){var u=(0,g.useContextSelector)(Ke,function(ue){return ue.loading}),i=hn(),d=i.createSession,O=(0,j.wv)().getPrefixCls("chat-anywhere-sessions"),M=(0,n.useContext)(Te),k=M.toggleCollapsed;return(0,r.jsx)("div",{className:"".concat(O,"-adder"),style:a.style,children:(0,r.jsx)(An.Z,{block:!0,type:"primary",icon:(0,r.jsx)(Cn.Z,{}),disabled:!!u,onClick:F()(p()().mark(function ue(){return p()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,d();case 2:a.narrowMode&&k();case 3:case"end":return w.stop()}},ue)})),children:"New Chat"})})}function gn(a){var u=(0,j.wv)().getPrefixCls("chat-anywhere-sessions"),i=(0,g.useContextSelector)(En,function(q){return q.sessions}),d=hn(),O=d.changeCurrentSessionId,M=d.removeSession,k=(0,g.useContextSelector)(En,function(q){return q.currentSessionId}),ue=(0,n.useContext)(Te),Q=ue.toggleCollapsed,w=(0,n.useMemo)(function(){return i.map(function(q){return{key:q.id,label:q.name||"New Chat"}})},[i]);return(0,r.jsx)("div",{className:"".concat(u,"-list"),style:a.style,children:(0,r.jsx)(jn.Z,{items:w,menu:[{key:"delete",icon:(0,r.jsx)(nn.Z,{}),danger:!0,onClick:function(){var q=F()(p()().mark(function ve(Be){return p()().wrap(function(me){for(;;)switch(me.prev=me.next){case 0:return me.next=2,M({id:Be.key});case 2:return me.abrupt("return",me.sent);case 3:case"end":return me.stop()}},ve)}));function ie(ve){return q.apply(this,arguments)}return ie}()}],activeKey:k,onActiveChange:function(ie){O(ie),a.narrowMode&&Q()}})})}var bn,Kn=(0,_.vJ)(bn||(bn=S()([`

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
`])),function(a){return a.theme.prefixCls},function(a){return a.theme.prefixCls}),On=e(85265);function kn(){var a=(0,j.wv)().getPrefixCls("chat-anywhere"),u=ye(function(ue){return ue.theme}),i=u.narrowMode,d=u.rightHeader,O=(0,n.useContext)(Te),M=O.toggleCollapsed,k=O.collapsed;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Kn,{}),(0,r.jsxs)("div",{className:"".concat(a,"-layout-right-header"),children:[i?(0,r.jsx)(xe,{className:"".concat(a,"-default-header-inner")}):null,d&&(0,r.jsx)("div",{className:"".concat(a,"-default-header-right"),children:d})]}),i&&(0,r.jsx)(On.Z,{width:"80vw",styles:{body:{padding:0}},open:k,onClose:M,title:null,closable:!1,placement:"left",children:(0,r.jsxs)("div",{className:"".concat(a,"-sessions"),children:[(0,r.jsx)(gn,{narrowMode:!0}),(0,r.jsx)(Ee,{narrowMode:!0})]})})]})}function Fn(a,u){var i=cn(),d=(0,g.useContextSelector)(Ke,function(O){return O.setDisabled});return n.useImperativeHandle(u,function(){return{messages:i,input:{setDisabled:d,submit:function(M){var k=M.query,ue=M.fileList,Q=M.biz_params;Je({type:"handleSubmit",data:{query:k,fileList:ue,biz_params:Q}})}}}},[]),null}var Wn=(0,n.forwardRef)(Fn);function Yn(a,u){var i=a.className,d=(0,j.wv)().getPrefixCls("chat-anywhere-layout"),O=ye(function(ve){return ve.theme.narrowMode}),M=ye(function(ve){return ve.theme.background}),k=ye(function(ve){return ve.theme.rightHeader}),ue=ye(function(ve){return{session:ve.session}}),Q=ue.session,w=(0,n.useContext)(Te),q=w.collapsed,ie=!O&&Q&&Q.multiple;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsxs)("div",{className:T()("".concat(d),i),children:[ie&&(0,r.jsx)("div",{className:T()("".concat(d,"-left"),b()({},"".concat(d,"-left-collapsed"),q)),children:(0,r.jsx)(we,{})}),(0,r.jsxs)("div",{className:T()("".concat(d,"-right"),b()({},"".concat(d,"-right-has-header"),!!k)),style:{background:M},children:[!!k&&(0,r.jsx)(kn,{}),(0,r.jsx)(J,{})]})]}),(0,r.jsx)(Wn,{ref:u})]})}var Dn=(0,n.forwardRef)(Yn);function Vn(a){var u=(0,n.useMemo)(function(){return a.data.input[0].content.reduce(function(i,d){if(d.type===D.TEXT&&i.push({code:"Text",data:{content:d.text,raw:!0}}),d.type===D.IMAGE){var O=i.find(function(Q){return Q.code==="Image"});O?O.data.push({url:d.image_url}):i.push({code:"Images",data:[{url:d.image_url}]})}if(d.type===D.VIDEO){var M=i.find(function(Q){return Q.code==="Videos"});M?M.data.push({src:d.video_url,poster:d.video_poster}):i.push({code:"Videos",data:[{src:d.video_url,poster:d.video_poster}]})}if(d.type===D.AUDIO){var k=i.find(function(Q){return Q.code==="Audios"});k?k.data.push({src:d.audio_url||d.data}):i.push({code:"Audios",data:[{src:d.audio_url||d.data}]})}if(d.type===D.FILE){var ue=i.find(function(Q){return Q.code==="Files"});ue?ue.data.push({url:d.file_url,name:d.file_name||d.fileName,size:d.file_size}):i.push({code:"Files",data:[{url:d.file_url,name:d.file_name||d.fileName,size:d.file_size}]})}return i},[])},[a.data.input]);return u!=null&&u.length?(0,r.jsx)(sn.Z,{role:"user",cards:u}):null}var zn=e(66109),In=n.memo(function(a){var u,i=a.data;return(u=i.content)!==null&&u!==void 0&&u.length?(0,r.jsx)(r.Fragment,{children:i.content.map(function(d,O){switch(d.type){case D.TEXT:return(0,r.jsx)(zn.Z,{content:d.text,cursor:d.status===t.InProgress},O);case D.REFUSAL:return(0,r.jsx)(zn.Z,{raw:!0,content:d.refusal},O);default:return(0,r.jsx)("div",{children:JSON.stringify(d)},O)}})}):null}),Hn=In,Gn=e(85786),Un=e(70770),Tn=e(86250),Zn=e(31912),et=e(7654),Jn=e(56290),mt,ht,$n,qn,tt,it,gt,pt,at=(0,_.kc)(function(a){var u=a.css,i=a.token;return{container:u(mt||(mt=S()([`
    width: 386px;
  `]))),title:u(ht||(ht=S()([`
    font-size: 14px;
    font-weight: 500;
    color: `,`;
    margin-bottom: 16px;
  `])),i.colorText),content:u($n||($n=S()([`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `]))),tabsContainer:u(qn||(qn=S()([`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `]))),tabItem:u(tt||(tt=S()([`
    padding: 0 8px;
    font-size: 14px;
    color: `,`;
    cursor: pointer;
    border: 1px solid `,`;
    background: `,`;
    transition: all 0.2s;
    user-select: none;
    border-radius: 4px;
  `])),i.colorText,i.colorBorderSecondary,i.colorBgContainer),tabItemSelected:u(it||(it=S()([`
    color: `,`;
    border-color: `,`;
    border: 1px solid `,`;
    position: relative;
    z-index: 1;
  `])),i.colorPrimary,i.colorPrimary,i.colorPrimary),textarea:u(gt||(gt=S()([`
    resize: none;
  `]))),actions:u(pt||(pt=S()([`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  `])))}});function Pt(){var a=(0,Jn.useTranslation)(),u=a.t;return[(u==null?void 0:u("cancelPopover.options.notNeeded"))||"\u4E0D\u9700\u8981",(u==null?void 0:u("cancelPopover.options.poorResult"))||"\u6548\u679C\u4E0D\u7406\u60F3",(u==null?void 0:u("cancelPopover.options.tooSlow"))||"\u7B49\u5F85\u65F6\u95F4\u4E45",(u==null?void 0:u("cancelPopover.options.wrongInput"))||"\u8F93\u5165\u9519\u8BEF"]}function xt(a){var u=a.options,i=(0,n.useState)(),d=K()(i,2),O=d[0],M=d[1],k=at(),ue=k.styles;return(0,r.jsx)("div",{className:ue.tabsContainer,children:u.map(function(Q){return(0,r.jsx)("div",{className:"".concat(ue.tabItem," ").concat(O===Q?ue.tabItemSelected:""),onClick:function(){M(Q),a.onSelect(Q)},children:Q},Q)})})}function nt(a){var u=(0,Jn.useTranslation)(),i=u.t,d=Pt(),O=a.options,M=O===void 0?d:O,k=a.onConfirm,ue=a.title,Q=ue===void 0?(i==null?void 0:i("cancelPopover.title"))||"\u53D6\u6D88\u539F\u56E0":ue,w=a.placeholder,q=w===void 0?(i==null?void 0:i("cancelPopover.placeholder"))||"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212":w,ie=(0,n.useState)(!1),ve=K()(ie,2),Be=ve[0],Ce=ve[1],me=at(),pe=me.styles,ze=(0,n.useState)(""),Me=K()(ze,2),_e=Me[0],yn=Me[1],Xn=function(){k==null||k(_e.trim())},Mn=(0,r.jsxs)("div",{className:pe.container,children:[(0,r.jsx)("div",{className:pe.title,children:Q}),(0,r.jsxs)("div",{className:pe.content,children:[(0,r.jsx)(xt,{options:M,onSelect:yn}),(0,r.jsx)(Zn.Z.TextArea,{className:pe.textarea,value:_e,onChange:function(Pn){return yn(Pn.target.value)},placeholder:q,rows:3}),(0,r.jsxs)(Tn.Z,{className:pe.actions,children:[(0,r.jsx)(An.Z,{size:"small",onClick:function(){return Ce(!1)},children:(i==null?void 0:i("cancelPopover.cancel"))||"\u53D6\u6D88"}),(0,r.jsx)(An.Z,{size:"small",type:"primary",onClick:function(){Ce(!1),Xn()},children:(i==null?void 0:i("cancelPopover.confirm"))||"\u786E\u8BA4"})]})]})]});return(0,r.jsx)(et.Z,{open:Be,onOpenChange:Ce,trigger:"click",content:Mn,children:(0,r.jsx)(An.Z,{size:"small",children:(i==null?void 0:i("approval.cancel"))||"\u53D6\u6D88\u6267\u884C"})})}var Ct,st=(0,_.kc)(function(a){var u=a.css,i=a.token;return{desc:u(Ct||(Ct=S()([`
    font-size: 12px;
    color: `,`;
  `])),i.colorTextTertiary)}});function At(a){var u=a.data,i=dn(function(me){return me}),d=st(),O=d.styles,M=(0,Jn.useTranslation)(),k=M.t,ue=(0,n.useState)("pending"),Q=K()(ue,2),w=Q[0],q=Q[1],ie=(k==null?void 0:k("approval.title"))||"\u4EBA\u5DE5\u5E72\u9884",ve=(0,n.useMemo)(function(){return w==="pending"?(k==null?void 0:k("approval.pending"))||"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C":w==="confirmed"?(k==null?void 0:k("approval.confirmed"))||"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1":(k==null?void 0:k("approval.canceled"))||"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1"},[w,k]),Be=(0,n.useCallback)(function(me,pe){var ze;q(me),i.setLoading(!1),i.setDisabled(!1);var Me=u,_e=(ze=Me.content[0])===null||ze===void 0||(ze=ze.data)===null||ze===void 0?void 0:ze.id,yn={type:C.MCP_APPROVAL_RESPONSE,role:h.USER,content:[{type:D.DATA,data:{approve:me==="confirmed",id:_e,approval_request_id:_e,reason:pe}}]};Je({type:"handleApproval",data:{input:[Me,yn]}})},[u]),Ce=(0,n.useMemo)(function(){return w==="pending"?(0,r.jsxs)(Tn.Z,{gap:8,children:[(0,r.jsx)(nt,{onConfirm:function(pe){return Be("canceled",pe)}}),(0,r.jsx)(An.Z,{size:"small",type:"primary",onClick:function(){return Be("confirmed")},children:(k==null?void 0:k("approval.confirm"))||"\u786E\u8BA4\u6267\u884C"})]}):null},[w,k]);return(0,n.useEffect)(function(){w==="pending"&&(i.setLoading((k==null?void 0:k("approval.taskRunning"))||"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1"),i.setDisabled(!0))},[w,k]),(0,r.jsx)(Un.Z.HITL,{done:w!=="pending",onDone:function(){},title:(0,r.jsxs)(Tn.Z,{gap:8,children:[ie,(0,r.jsx)("span",{className:O.desc,children:ve})]}),actions:Ce})}var lt=n.memo(function(a){var u,i=a.data,d=a.isApproval,O=d===void 0?!1:d,M=ye(function(me){return me.customToolRenderConfig})||{};if(!((u=i.content)!==null&&u!==void 0&&u.length))return null;var k=i.content,ue=i.status===t.InProgress,Q=k[0].data.name,w="".concat(k[0].data.server_label?k[0].data.server_label+" / ":""),q="".concat(w).concat(Q),ie;if(M[Q]){var ve=M[Q];ie=(0,r.jsx)(ve,{data:i})}else{var Be,Ce;ie=(0,r.jsx)(Gn.Z,{loading:ue,defaultOpen:!1,title:q==="undefined"?"":q,input:(Be=k[0])===null||Be===void 0||(Be=Be.data)===null||Be===void 0?void 0:Be.arguments,output:(Ce=k[1])===null||Ce===void 0||(Ce=Ce.data)===null||Ce===void 0?void 0:Ce.output})}return(0,r.jsxs)(r.Fragment,{children:[ie,O&&(0,r.jsx)(At,{data:i})]})}),yt=lt,bt=e(79323);function Tt(a){var u,i=a.data;if(i.status===t.Created)return null;var d=i==null||(u=i.content)===null||u===void 0?void 0:u[0];return d?(0,r.jsx)(bt.Z,{loading:i.status===t.InProgress,title:"Thinking",content:d.text}):null}function jt(a){var u=a.data;return(0,r.jsx)(sn.Z.Interrupted,{type:"error",title:u.code,desc:u.message})}var Lt=e(89698),Mt=e(60227),ct=e(67055),_t=e(39536),ut=e(39693),Ot=e.n(ut);function Rt(a){return!a.input_tokens||!a.output_tokens?null:(0,r.jsx)(sn.Z.Footer.Count,{data:[["Input",a.input_tokens],["Output",a.output_tokens]]})}function Dt(a){var u,i,d,O=(0,Jn.useTranslation)(),M=O.t,k=ye(function(w){var q;return(q=w.actions)===null||q===void 0?void 0:q.list})||[{icon:(0,r.jsx)(Lt.Z,{}),onClick:function(){(0,_t.J)(JSON.stringify(a.data))}}],ue=(u=ye(function(w){var q;return(q=w.actions)===null||q===void 0?void 0:q.replace}))!==null&&u!==void 0?u:!0,Q=Ot()([].concat(A()(k.map(function(w){var q=w;return w.render&&(q.children=n.createElement(w.render,{data:a})),m()(m()({},q),{},{onClick:function(){var ve;(ve=w.onClick)===null||ve===void 0||ve.call(w,a)}})})),[ue&&a.isLast?{icon:(0,r.jsx)(ct.Z,{title:(M==null?void 0:M("actions.regenerate"))||"\u91CD\u65B0\u751F\u6210",children:(0,r.jsx)(Mt.Z,{})}),onClick:function(){Je({type:"handleReplace",data:a})}}:null]));return Ge.maybeDone(a.data)?(0,r.jsx)(sn.Z.Footer,{left:(0,r.jsx)(sn.Z.Footer.Actions,{data:Q}),right:(0,r.jsx)(Rt,{input_tokens:(i=a.data.usage)===null||i===void 0?void 0:i.input_tokens,output_tokens:(d=a.data.usage)===null||d===void 0?void 0:d.output_tokens})}):null}function It(a){var u=(0,n.useMemo)(function(){return Ge.mergeToolMessages(a.data.output)},[a.data.output]);return!(u!=null&&u.length)&&Ge.maybeGenerating(a.data)?(0,r.jsx)(sn.Z.Spin,{}):(0,r.jsxs)(r.Fragment,{children:[u.map(function(i){switch(i.type){case C.MESSAGE:return(0,r.jsx)(Hn,{data:i},i.id);case C.PLUGIN_CALL:case C.PLUGIN_CALL_OUTPUT:case C.MCP_CALL:case C.MCP_CALL_OUTPUT:return(0,r.jsx)(yt,{data:i},i.id);case C.MCP_APPROVAL_REQUEST:return(0,r.jsx)(yt,{data:i,isApproval:!0},i.id);case C.REASONING:return(0,r.jsx)(Tt,{data:i},i.id);case C.ERROR:return(0,r.jsx)(jt,{data:i},i.id);case C.HEARTBEAT:return null;default:return console.warn("[WIP] Unknown message type: ".concat(i.type)),null}}),a.data.error&&(0,r.jsx)(jt,{data:a.data.error}),(0,r.jsx)(Dt,m()({},a))]})}var Nt=e(83962);function St(a){var u=a.options,i=a.cards,d=a.children,O=[[Jn.ChatAnywhereI18nContextProvider,{defaultLocale:u.theme.locale}],[Ae,{options:u}],[Nt.xy,{cardConfig:i}],[Ln,{}],[mn,{}],[Re,{}],[De,{}]];return O.reduceRight(function(M,k){var ue=K()(k,2),Q=ue[0],w=ue[1];return(0,r.jsx)(Q,m()(m()({},w),{},{children:M}))},d)}var ot=St;function dt(a,u){var i=a.options,d=i===void 0?{}:i,O=(0,n.useMemo)(function(){var M=m()({AgentScopeRuntimeRequestCard:Vn,AgentScopeRuntimeResponseCard:It},d.cards);return M},[d.cards]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(ot,{options:d,cards:O,children:(0,r.jsx)(Dn,{ref:u})})})}var Bn=(0,n.forwardRef)(dt)},56290:function(an,ee,e){"use strict";e.r(ee),e.d(ee,{ChatAnywhereI18nContextProvider:function(){return x},useChatAnywhereI18n:function(){return _},useTranslation:function(){return N}});var te=e(5574),m=e.n(te),I=e(59214),b=e(67294),j=e(85893),R={cn:{"approval.title":"\u4EBA\u5DE5\u5E72\u9884","approval.pending":"\u8BF7\u786E\u8BA4\u662F\u5426\u6267\u884C\u8BE5\u64CD\u4F5C","approval.confirmed":"\u786E\u8BA4\u6267\u884C\u4EFB\u52A1","approval.canceled":"\u53D6\u6D88\u6267\u884C\u4EFB\u52A1","approval.cancel":"\u53D6\u6D88\u6267\u884C","approval.confirm":"\u786E\u8BA4\u6267\u884C","approval.taskRunning":"\u5F53\u524D\u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u65E0\u6CD5\u53D1\u9001\u65B0\u7684\u4EFB\u52A1","cancelPopover.title":"\u53D6\u6D88\u539F\u56E0","cancelPopover.placeholder":"\u8BF7\u8F93\u5165\u539F\u56E0\uFF0C\u4EE5\u4FBF\u5927\u6A21\u578B\u505A\u8FDB\u4E00\u6B65\u89C4\u5212","cancelPopover.cancel":"\u53D6\u6D88","cancelPopover.confirm":"\u786E\u8BA4","cancelPopover.options.notNeeded":"\u4E0D\u9700\u8981","cancelPopover.options.poorResult":"\u6548\u679C\u4E0D\u7406\u60F3","cancelPopover.options.tooSlow":"\u7B49\u5F85\u65F6\u95F4\u4E45","cancelPopover.options.wrongInput":"\u8F93\u5165\u9519\u8BEF","common.save":"\u4FDD\u5B58","common.cancel":"\u53D6\u6D88","common.confirm":"\u786E\u8BA4","common.delete":"\u5220\u9664","common.edit":"\u7F16\u8F91","common.loading":"\u52A0\u8F7D\u4E2D...","common.saveSuccess":"\u4FDD\u5B58\u6210\u529F","common.saveFailed":"\u4FDD\u5B58\u5931\u8D25","actions.regenerate":"\u91CD\u65B0\u751F\u6210","messageImport.title":"Sessions \u6570\u636E\u5BFC\u5165","messageImport.placeholder":"\u8F93\u5165 JSON \u6570\u636E\u4EE5\u8986\u76D6\u5F53\u524D sessions","messageImport.saveToLocalStorage":"\u4FDD\u5B58\u5230 LocalStorage"},en:{"approval.title":"Human Intervention","approval.pending":"Please confirm whether to execute this operation","approval.confirmed":"Confirmed to execute task","approval.canceled":"Canceled task execution","approval.cancel":"Cancel","approval.confirm":"Confirm","approval.taskRunning":"A task is currently running, cannot send new task","cancelPopover.title":"Cancel Reason","cancelPopover.placeholder":"Please enter the reason for better AI planning","cancelPopover.cancel":"Cancel","cancelPopover.confirm":"Confirm","cancelPopover.options.notNeeded":"Not needed","cancelPopover.options.poorResult":"Poor result","cancelPopover.options.tooSlow":"Too slow","cancelPopover.options.wrongInput":"Wrong input","common.save":"Save","common.cancel":"Cancel","common.confirm":"Confirm","common.delete":"Delete","common.edit":"Edit","common.loading":"Loading...","common.saveSuccess":"Saved successfully","common.saveFailed":"Failed to save","actions.regenerate":"Regenerate","messageImport.title":"Import Sessions Data","messageImport.placeholder":"Enter JSON data to override current sessions","messageImport.saveToLocalStorage":"Save to LocalStorage"}},S=(0,I.createContext)(void 0);function _(y){try{var T=(0,I.useContextSelector)(S,y);return T}catch(P){return{}}}function N(){var y=_(function(g){return g==null?void 0:g.t}),T=_(function(g){return g==null?void 0:g.locale}),P=_(function(g){return g==null?void 0:g.setLocale});return{t:y,locale:T,setLocale:P}}function x(y){var T=y.children,P=y.defaultLocale,g=P===void 0?"en":P,n=(0,b.useState)(g),v=m()(n,2),B=v[0],l=v[1],s=(0,b.useCallback)(function(f,A){var le=R[B][f]||f;return A&&Object.entries(A).forEach(function(F){var E=m()(F,2),he=E[0],re=E[1];le=le.replace(new RegExp("\\{".concat(he,"\\}"),"g"),String(re))}),le},[B]),p=(0,b.useMemo)(function(){return{locale:B,setLocale:l,t:s,messages:R[B]}},[B,l,s]);return(0,j.jsx)(S.Provider,{value:p,children:T})}ee.default=S},57551:function(){},22863:function(an,ee,e){"use strict";e.r(ee);var te=e(57551),m=e.n(te),I={};for(var b in te)b!=="default"&&(I[b]=function(j){return te[j]}.bind(0,b));e.d(ee,I)},34487:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return Z}});var te=e(97857),m=e.n(te),I=e(5574),b=e.n(I),j=e(56044),R=e(68400),S=e.n(R),_=e(9053),N,x=(0,_.vJ)(N||(N=S()([`
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
`])),function(K){return K.theme.prefixCls},function(K){return K.theme.colorBgLayout},function(K){return K.theme.colorBgLayout},function(K){return K.theme.colorFillTertiary},function(K){return K.theme.colorBgBase},function(K){return K.theme.prefixCls},function(K){return K.theme.prefixCls},function(K){return K.theme.colorBgBase},function(K){return K.theme.colorBorderSecondary},function(K){return K.theme.colorText},function(K){return K.theme.colorBorderSecondary},function(K){return K.theme.colorPrimary}),y=e(93967),T=e.n(y),P=e(55839),g=e(16494),n=e(85893);function v(K){var Oe=(0,j.wv)().getPrefixCls("assets-preview-image"),ke=K.width,Fe=ke===void 0?1:ke,Ke=K.height,Re=Ke===void 0?1:Ke,dn=K.src;return(0,n.jsx)("div",{className:Oe,style:{aspectRatio:"".concat(Fe,"/").concat(Re)},children:(0,n.jsx)(P.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(g.Z,{src:dn,width:"100%",height:"100%"})})})}function B(K){return(0,n.jsx)(g.Z.PreviewGroup,{children:K.children})}var l=e(9783),s=e.n(l),p=e(13769),f=e.n(p),A=e(67294),le=e(63701),F=e(62321),E=e(32485),he=e(64057),re=["width","height","poster","src"];function X(K){var Oe=(0,j.wv)().getPrefixCls("assets-preview-video"),ke=K.width,Fe=ke===void 0?1:ke,Ke=K.height,Re=Ke===void 0?1:Ke,dn=K.poster,fn=K.src,on=f()(K,re),vn=(0,A.useRef)(null),$e=(0,A.useState)(!1),Rn=b()($e,2),U=Rn[0],Se=Rn[1],Ne=(0,A.useState)(0),Ye=b()(Ne,2),sn=Ye[0],Qe=Ye[1],mn=(0,A.useState)(0),cn=b()(mn,2),qe=cn[0],un=cn[1],tn=(0,A.useCallback)(function(hn){var o=Math.floor(hn/60),We=Math.floor(hn%60);return"".concat(o.toString().padStart(2,"0"),":").concat(We.toString().padStart(2,"0"))},[]),ln=(0,A.useCallback)(function(){var hn=vn.current;hn&&(hn.paused?(hn.play(),Se(!0)):(hn.pause(),Se(!1)))},[]),Je=(0,A.useCallback)(function(){vn.current&&Qe(vn.current.duration)},[]),En=(0,A.useCallback)(function(){Se(!1),un(0)},[]),Ln=(0,A.useCallback)(function(){vn.current&&un(vn.current.currentTime)},[]),_n=(0,A.useCallback)(function(hn){hn.stopPropagation();var o=vn.current;o&&(o.requestFullscreen?o.requestFullscreen():o.webkitRequestFullscreen?o.webkitRequestFullscreen():o.msRequestFullscreen&&o.msRequestFullscreen())},[]);return(0,n.jsxs)("div",{className:Oe,style:{aspectRatio:"".concat(Fe,"/").concat(Re)},children:[(0,n.jsx)("video",m()(m()({},on),{},{ref:vn,src:fn,poster:dn,preload:"metadata",onLoadedMetadata:Je,onTimeUpdate:Ln,onEnded:En})),(0,n.jsxs)("div",{className:T()("".concat(Oe,"-overlay"),s()({},"".concat(Oe,"-overlay-playing"),1)),onClick:ln,children:[(0,n.jsx)("div",{className:"".concat(Oe,"-play-btn"),children:U?(0,n.jsx)(le.Z,{}):(0,n.jsx)(F.Z,{})}),(0,n.jsx)("div",{className:"".concat(Oe,"-enlarge"),onClick:_n,children:(0,n.jsx)(he.Z,{bordered:!1,size:"small",icon:(0,n.jsx)(E.Z,{})})})]}),(0,n.jsx)("div",{className:"".concat(Oe,"-duration"),children:tn(sn-qe)})]})}var se=e(20399),ge=e(80162);function Ie(K){var Oe=(0,j.wv)().getPrefixCls("assets-preview-audio"),ke=(0,A.useRef)(null),Fe=(0,A.useState)(!1),Ke=b()(Fe,2),Re=Ke[0],dn=Ke[1],fn=(0,A.useState)(!1),on=b()(fn,2),vn=on[0],$e=on[1],Rn=(0,A.useState)(0),U=b()(Rn,2),Se=U[0],Ne=U[1],Ye=(0,A.useState)(0),sn=b()(Ye,2),Qe=sn[0],mn=sn[1],cn=(0,A.useCallback)(function(Je){if(isNaN(Je))return"00:00";var En=Math.floor(Je/60),Ln=Math.floor(Je%60);return"".concat(En.toString().padStart(2,"0"),":").concat(Ln.toString().padStart(2,"0"))},[]),qe=(0,A.useCallback)(function(){ke.current&&(Re?ke.current.pause():ke.current.play(),dn(!Re))},[Re]),un=(0,A.useCallback)(function(){$e(!vn),ke.current&&(ke.current.muted=vn)},[vn]),tn=(0,A.useCallback)(function(Je){if(ke.current&&Qe){var En=Je.currentTarget.getBoundingClientRect(),Ln=Je.clientX-En.left,_n=Ln/En.width,hn=_n*Qe;ke.current.currentTime=hn,Ne(hn)}},[Qe]);(0,A.useEffect)(function(){var Je=ke.current;if(Je){var En=function(){return Ne(Je.currentTime)},Ln=function(){return mn(Je.duration)},_n=function(){return dn(!1)};return Je.addEventListener("timeupdate",En),Je.addEventListener("loadedmetadata",Ln),Je.addEventListener("ended",_n),function(){Je.removeEventListener("timeupdate",En),Je.removeEventListener("loadedmetadata",Ln),Je.removeEventListener("ended",_n)}}},[]);var ln=Qe?Se/Qe*100:0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("audio",{ref:ke,src:K.src,muted:vn}),(0,n.jsxs)("div",{className:Oe,children:[(0,n.jsx)(he.Z,{size:"small",type:"text",onClick:qe,icon:Re?(0,n.jsx)(le.Z,{}):(0,n.jsx)(F.Z,{})}),(0,n.jsx)(he.Z,{size:"small",type:"text",onClick:un,icon:vn?(0,n.jsx)(se.Z,{}):(0,n.jsx)(ge.Z,{})}),(0,n.jsx)("div",{className:"".concat(Oe,"-time"),children:cn(Se)}),(0,n.jsx)("div",{className:"".concat(Oe,"-progress"),onClick:tn,children:(0,n.jsx)("div",{className:"".concat(Oe,"-progress-bar"),style:{width:"".concat(ln,"%")}})}),(0,n.jsx)("div",{className:"".concat(Oe,"-time"),children:cn(Qe)})]})]})}var r=e(16138),Ze=e(83202),ye=e(90105),Ae=e(82052);function be(K){var Oe,ke=(0,ye.Z)(),Fe=(0,j.wv)().getPrefixCls("assets-preview"),Ke=(0,A.useRef)(null),Re=K.height,dn=Re===void 0?144:Re,fn=dn/2-12,on=(0,A.useRef)(0),vn=(0,A.useState)(0),$e=b()(vn,2),Rn=$e[0],U=$e[1],Se=(0,A.useDeferredValue)(Rn),Ne=(0,Ae.Z)(Ke),Ye=(0,A.useCallback)(function(cn){U(cn.target.scrollLeft)},[]);(0,A.useEffect)(function(){Ke.current&&K.type!=="audio"&&(on.current=Ke.current.scrollWidth-Ke.current.clientWidth),ke()},[K.data.length,Ne==null?void 0:Ne.width]);var sn=(0,A.useCallback)(function(cn){var qe=200;Ke.current.scrollLeft=Ke.current.scrollLeft+qe*(cn==="left"?-1:1)},[]),Qe={image:v,video:X,audio:Ie}[K.type],mn=K.data.map(function(cn,qe){return(0,n.jsx)(Qe,m()({},cn),qe)});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{}),(0,n.jsxs)("div",{className:T()("".concat(Fe),K.className),children:[(0,n.jsx)("div",{className:T()("".concat(Fe,"-container"),(Oe=K.classNames)===null||Oe===void 0?void 0:Oe.container),style:K.type!=="audio"?{height:dn}:{flexDirection:"column"},onScroll:Ye,ref:Ke,children:K.type==="image"?(0,n.jsx)(B,{children:mn}):mn}),fn>0&&K.type!=="audio"?(0,n.jsxs)(n.Fragment,{children:[Se>50&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:T()("".concat(Fe,"-left-edge"))}),(0,n.jsx)(he.Z,{onClick:function(){return sn("left")},style:{top:fn},className:T()("".concat(Fe,"-left-arrow"),"".concat(Fe,"-arrow")),size:"small",shape:"circle",icon:(0,n.jsx)(r.Z,{})})]}),Se<on.current-50&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:T()("".concat(Fe,"-right-edge"))}),(0,n.jsx)(he.Z,{onClick:function(){return sn("right")},style:{top:fn},className:T()("".concat(Fe,"-right-arrow"),"".concat(Fe,"-arrow")),size:"small",shape:"circle",icon:(0,n.jsx)(Ze.Z,{})})]})]}):null]})]})}var Z=be},50993:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return hn}});var te=e(9783),m=e.n(te),I=e(97857),b=e.n(I),j=e(5574),R=e.n(j),S=e(13769),_=e.n(S),N=e(93967),x=e.n(N),y=e(67294),T=e(56044),P=e(56790),g=e(73935),n=y.createContext(null),v=e(85893);function B(o){var We=o.getDropContainer,en=o.className,pn=o.prefixCls,c=o.children,ae=y.useContext(n),L=ae.disabled,Y=y.useState(),z=R()(Y,2),W=z[0],oe=z[1],je=y.useState(null),t=R()(je,2),h=t[0],C=t[1];y.useEffect(function(){var $=We==null?void 0:We();W!==$&&oe($)},[We]),y.useEffect(function(){if(W){var $=function(){C(!0)},H=function(ce){ce.preventDefault()},ne=function(ce){ce.relatedTarget||C(!1)},de=function(ce){C(!1),ce.preventDefault()};return document.addEventListener("dragenter",$),document.addEventListener("dragover",H),document.addEventListener("dragleave",ne),document.addEventListener("drop",de),function(){document.removeEventListener("dragenter",$),document.removeEventListener("dragover",H),document.removeEventListener("dragleave",ne),document.removeEventListener("drop",de)}}},[!!W]);var D=We&&W&&!L;if(!D)return null;var V="".concat(pn,"-drop-area");return(0,g.createPortal)((0,v.jsx)("div",{className:x()(V,en,m()({},"".concat(V,"-on-body"),W.tagName==="BODY")),style:{display:h?"block":"none"},children:c}),W)}var l=e(53033),s=e(52861),p=e(83622),f=e(29372),A=e(64599),le=e.n(A),F=e(68400),E=e.n(F),he=e(9053),re,X=(0,he.vJ)(re||(re=E()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.borderRadius},function(o){return o.theme.colorBgContainer},function(o){return o.theme.lineWidth},function(o){return o.theme.colorBorderSecondary},function(o){return o.theme.paddingXS},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.fontSize},function(o){return o.theme.colorText},function(o){return o.theme.prefixCls},function(o){return o.theme.colorTextQuaternary},function(o){return o.theme.fontSizeSM},function(o){return o.theme.prefixCls},function(o){return o.theme.opacityLoading},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.colorWhite},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.borderRadius},function(o){return o.theme.lineWidth},function(o){return o.theme.prefixCls},function(o){return o.theme.paddingXXS},function(o){return o.theme.prefixCls},function(o){return o.theme.colorText},function(o){return o.theme.colorBgContainer},function(o){return o.theme.lineWidth},function(o){return o.theme.colorBorder},function(o){return o.theme.colorError},function(o){return o.theme.prefixCls},function(o){return o.theme.colorError},function(o){return o.theme.paddingSM},function(o){return o.theme.prefixCls},function(o){return o.theme.colorPrimary},function(o){return o.theme.prefixCls}),se=e(89102),ge=e(16494),Ie=function(We){return We.indexOf("image/")===0},r=200;function Ze(o){return new Promise(function(We){if(!o||!o.type||!Ie(o.type)){We("");return}var en=new Image;if(en.onload=function(){var ae=en.width,L=en.height,Y=ae/L,z=Y>1?r:r*Y,W=Y>1?r/Y:r,oe=document.createElement("canvas");oe.width=z,oe.height=W,oe.style.cssText="position: fixed; left: 0; top: 0; width: ".concat(z,"px; height: ").concat(W,"px; z-index: 9999; display: none;"),document.body.appendChild(oe);var je=oe.getContext("2d");je.drawImage(en,0,0,z,W);var t=oe.toDataURL();document.body.removeChild(oe),window.URL.revokeObjectURL(en.src),We(t)},en.crossOrigin="anonymous",o.type.startsWith("image/svg+xml")){var pn=new FileReader;pn.onload=function(){pn.result&&typeof pn.result=="string"&&(en.src=pn.result)},pn.readAsDataURL(o)}else if(o.type.startsWith("image/gif")){var c=new FileReader;c.onload=function(){c.result&&We(c.result)},c.readAsDataURL(o)}else en.src=window.URL.createObjectURL(o)})}var ye=e(9361),Ae=e(38703);function be(o){var We=o.percent,en=ye.Z.useToken(),pn=en.token;return(0,v.jsx)(Ae.Z,{type:"circle",percent:We,size:40,strokeColor:"#FFF",trailColor:"rgba(255, 255, 255, 0.3)",format:function(ae){return(0,v.jsxs)("span",{style:{color:"#FFF"},children:[(ae||0).toFixed(0),"%"]})}})}var Z=e(43974),K=e(60227),Oe="\xA0",ke="image/png,image/jpeg,image/jpg,image/gif,image/bmp,image/webp,image/svg+xml";function Fe(o,We){var en=(0,T.wv)(),pn=en.getPrefixCls,c=o.item,ae=o.onRemove,L=o.onReplace,Y=o.className,z=o.style,W=y.useContext(n),oe=W||{},je=oe.disabled,t=c.percent,h=c.status,C=h===void 0?"done":h,D=c.description,V=pn("attachment"),$="".concat(V,"-list-card"),H=y.useState(!1),ne=R()(H,2),de=ne[0],G=ne[1],ce=y.useRef(null),Pe=y.useMemo(function(){return{visible:de,onVisibleChange:G}},[de]),Ue=y.useMemo(function(){return D||(C==="uploading"?"".concat(t||0,"%"):C==="error"&&c.response||Oe)},[D,C,t,c.response]),He=y.useState(),Ge=R()(He,2),rn=Ge[0],Le=Ge[1];y.useEffect(function(){if(c.originFileObj){var xn=!0;return Ze(c.originFileObj).then(function(Xe){xn&&Le(Xe)}),function(){xn=!1}}Le(void 0)},[c.originFileObj]);var fe=c.thumbUrl||c.url||rn,J=function(Xe){var Cn;Xe.stopPropagation(),(Cn=ce.current)===null||Cn===void 0||Cn.click()},An=function(Xe){var Cn,nn=(Cn=Xe.target.files)===null||Cn===void 0?void 0:Cn[0];nn&&L&&L(c,nn),ce.current&&(ce.current.value="")};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(X,{}),(0,v.jsxs)("div",{className:x()($,m()(m()(m()({},"".concat($,"-status-").concat(C),C),"".concat($,"-type-preview"),!0),"".concat($,"-hoverable"),!je&&ae),Y),style:z,ref:We,children:[fe&&(0,v.jsx)("img",{alt:"preview",src:fe}),(0,v.jsx)(ge.Z,{src:fe,style:{display:"none"},preview:Pe}),C!=="done"&&(0,v.jsxs)("div",{className:"".concat($,"-img-mask"),children:[C==="uploading"&&t!==void 0&&(0,v.jsx)(be,{percent:t,prefixCls:$}),C==="error"&&(0,v.jsx)("div",{className:"".concat($,"-desc"),children:(0,v.jsx)("div",{className:"".concat($,"-ellipsis-prefix"),children:Ue})})]}),C==="done"&&(0,v.jsxs)("div",{className:"".concat($,"-img-hover-mask"),children:[(0,v.jsx)("button",{className:"".concat($,"-img-action"),onClick:function(Xe){Xe.stopPropagation(),G(!0)},children:(0,v.jsx)(Z.Z,{})}),L&&(0,v.jsx)("button",{className:"".concat($,"-img-action"),onClick:J,children:(0,v.jsx)(K.Z,{})})]}),(0,v.jsx)("input",{ref:ce,type:"file",accept:ke,style:{display:"none"},onChange:An}),(0,v.jsx)("button",{style:{opacity:!je&&ae?1:0},className:"".concat($,"-remove"),onClick:function(){!je&&ae&&ae(c)},children:(0,v.jsx)(se.Z,{})})]})]})}var Ke=y.forwardRef(Fe),Re="\xA0",dn="#8c8c8c",fn=["png","jpg","jpeg","gif","bmp","webp","svg"],on=function(We){var en=We.url;return(0,v.jsx)("img",{src:en,width:32,height:32})},vn=[{icon:(0,v.jsx)(on,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01cVtZXI23tPVhiZoPJ_!!6000000007313-55-tps-40-40.svg"}),color:"#22b35e",ext:["xlsx","xls"]},{icon:(0,v.jsx)(on,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01uDnnuz1XMNEjgFMul_!!6000000002909-55-tps-40-40.svg"}),color:dn,ext:fn},{icon:(0,v.jsx)(on,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01PaXli01DDPAO68fsI_!!6000000000182-55-tps-40-40.svg"}),color:dn,ext:["md","mdx"]},{icon:(0,v.jsx)(on,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01mB5PzD27fuIWK661W_!!6000000007825-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["pdf"]},{icon:(0,v.jsx)(on,{url:"https://gw.alicdn.com/imgextra/i3/O1CN01a8j7Jv1nW1QyFme7k_!!6000000005096-55-tps-40-40.svg"}),color:"#ff6e31",ext:["ppt","pptx"]},{icon:(0,v.jsx)(on,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01XaNi8P1UkhQXoQdUL_!!6000000002556-55-tps-40-40.svg"}),color:"#1677ff",ext:["doc","docx"]},{icon:(0,v.jsx)(on,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),color:"#fab714",ext:["zip","rar","7z","tar","gz"]},{icon:(0,v.jsx)(on,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01zTTe0q1Xg4GkZgJol_!!6000000002952-55-tps-40-40.svg"}),color:"#ff4d4f",ext:["mp4","avi","mov","wmv","flv","mkv"]},{icon:(0,v.jsx)(on,{url:"https://gw.alicdn.com/imgextra/i2/O1CN01qOBdXG1UpHO6f3Vvc_!!6000000002566-55-tps-40-40.svg"}),color:"#8c8c8c",ext:["mp3","wav","flac","ape","aac","ogg"]}];function $e(o,We){return We.some(function(en){return o.toLowerCase()===".".concat(en)})}function Rn(o){for(var We=o,en=["B","KB","MB","GB","TB","PB","EB"],pn=0;We>=1024&&pn<en.length-1;)We/=1024,pn++;return"".concat(We.toFixed(0)," ").concat(en[pn])}function U(o,We){var en=(0,T.wv)(),pn=en.getPrefixCls,c=o.item,ae=o.onRemove,L=o.onReplace,Y=o.className,z=o.style,W=y.useContext(n),oe=W||{},je=oe.disabled,t=c.name,h=c.size,C=c.percent,D=c.status,V=D===void 0?"done":D,$=c.description,H=pn("attachment"),ne="".concat(H,"-list-card"),de=y.useMemo(function(){var xn=t||"",Xe=xn.match(/^(.*)\.[^.]+$/);return Xe?[Xe[1],xn.slice(Xe[1].length)]:[xn,""]},[t]),G=R()(de,2),ce=G[0],Pe=G[1],Ue=y.useMemo(function(){return $e(Pe,fn)},[Pe]),He=o.renderType||"default",Ge=Ue&&(c.originFileObj||c.thumbUrl||c.url)&&He==="default";if(Ge)return(0,v.jsx)(Ke,{ref:We,item:c,onRemove:ae,onReplace:L,className:Y,style:z});var rn=function(){return $||(V==="uploading"?"".concat(C||0,"%"):V==="error"?c.response||Re:h?Rn(h):Re)}(),Le=function(){var xn=le()(vn),Xe;try{for(xn.s();!(Xe=xn.n()).done;){var Cn=Xe.value,nn=Cn.ext,jn=Cn.icon,Te=Cn.color;if($e(Pe,nn))return[jn,Te]}}catch(De){xn.e(De)}finally{xn.f()}return[(0,v.jsx)(on,{url:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"},"defaultIcon"),dn]}(),fe=R()(Le,2),J=fe[0],An=fe[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(X,{}),(0,v.jsxs)("div",{className:x()(ne,m()(m()(m()(m()({},"".concat(ne,"-status-").concat(V),V),"".concat(ne,"-type-overview"),!0),"".concat(ne,"-type-").concat(He),!0),"".concat(ne,"-hoverable"),!je&&ae),Y),style:z,ref:We,children:[(0,v.jsx)("div",{className:"".concat(ne,"-icon"),style:{color:An},children:J}),(0,v.jsxs)("div",{className:"".concat(ne,"-content"),children:[(0,v.jsxs)("div",{className:"".concat(ne,"-name"),children:[ce!=null?ce:Re,Pe]}),(0,v.jsx)("div",{className:"".concat(ne,"-desc"),children:(0,v.jsx)("div",{className:"".concat(ne,"-ellipsis-prefix"),children:rn})})]}),(0,v.jsx)("button",{style:{opacity:!je&&ae?1:0},className:"".concat(ne,"-remove"),onClick:function(){!je&&ae&&ae(c)},children:(0,v.jsx)(se.Z,{})})]})]})}var Se=y.forwardRef(U),Ne=1;function Ye(o){var We=o.prefixCls,en=o.items,pn=o.onRemove,c=o.onReplace,ae=o.overflow,L=o.listClassName,Y=o.listStyle,z=o.itemClassName,W=o.itemStyle,oe="".concat(We,"-list"),je=y.useRef(null),t=y.useState(!1),h=R()(t,2),C=h[0],D=h[1];y.useEffect(function(){return D(!0),function(){D(!1)}},[]);var V=y.useState(!1),$=R()(V,2),H=$[0],ne=$[1],de=y.useState(!1),G=R()(de,2),ce=G[0],Pe=G[1],Ue=function(){var fe=je.current;fe&&(ae==="scrollX"?(ne(Math.abs(fe.scrollLeft)>=Ne),Pe(fe.scrollWidth-fe.clientWidth-Math.abs(fe.scrollLeft)>=Ne)):ae==="scrollY"&&(ne(fe.scrollTop!==0),Pe(fe.scrollHeight-fe.clientHeight!==fe.scrollTop)))};y.useEffect(function(){Ue()},[ae]);var He=function(fe){var J=je.current;J&&J.scrollTo({left:J.scrollLeft+fe*J.clientWidth,behavior:"smooth"})},Ge=function(){He(-1)},rn=function(){He(1)};return(0,v.jsxs)("div",{className:x()(oe,m()(m()(m()({},"".concat(oe,"-overflow-").concat(o.overflow),ae),"".concat(oe,"-overflow-ping-start"),H),"".concat(oe,"-overflow-ping-end"),ce),L),ref:je,onScroll:Ue,style:Y,children:[(0,v.jsx)(f.V4,{keys:en.map(function(Le){return{key:Le.uid,item:Le}}),motionName:"".concat(oe,"-card-motion"),component:!1,motionAppear:C,motionLeave:!0,motionEnter:!0,children:function(fe){var J=fe.key,An=fe.item,xn=fe.className,Xe=fe.style;return(0,v.jsx)(Se,{prefixCls:We,item:An,onRemove:pn,onReplace:c,className:x()(xn,z),style:b()(b()({},Xe),W),renderType:o.renderType},J)}}),ae==="scrollX"&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.ZP,{size:"small",shape:"circle",className:"".concat(oe,"-prev-btn"),icon:(0,v.jsx)(l.Z,{}),onClick:Ge}),(0,v.jsx)(p.ZP,{size:"small",shape:"circle",className:"".concat(oe,"-next-btn"),icon:(0,v.jsx)(s.Z,{}),onClick:rn})]})]})}var sn=e(86250),Qe=e(21317),mn=e(41154);function cn(o,We){var en=o.prefixCls,pn=o.placeholder,c=pn===void 0?{}:pn,ae=o.upload,L=o.className,Y=o.style,z="".concat(en,"-placeholder"),W=c||{},oe=y.useContext(n),je=oe.disabled,t=y.useState(!1),h=R()(t,2),C=h[0],D=h[1],V=function(){D(!0)},$=function(G){G.currentTarget.contains(G.relatedTarget)||D(!1)},H=function(){D(!1)},ne=y.isValidElement(c)?c:(0,v.jsxs)(sn.Z,{align:"center",justify:"center",vertical:!0,className:"".concat(z,"-inner"),children:[(0,v.jsx)(Qe.default.Text,{className:"".concat(z,"-icon"),children:W.icon}),(0,v.jsx)(Qe.default.Title,{className:"".concat(z,"-title"),level:5,children:W.title}),(0,v.jsx)(Qe.default.Text,{className:"".concat(z,"-description"),type:"secondary",children:W.description})]});return(0,v.jsx)("div",{className:x()(z,m()(m()({},"".concat(z,"-drag-in"),C),"".concat(z,"-disabled"),je),L),onDragEnter:V,onDragLeave:$,onDrop:H,"aria-hidden":je,style:Y,children:(0,v.jsx)(mn.Z.Dragger,b()(b()({showUploadList:!1},ae),{},{ref:We,style:{padding:0,border:0,background:"transparent"},children:ne}))})}var qe=y.forwardRef(cn);function un(o,We){var en=o.children,pn=o.upload,c=o.rootClassName,ae=y.useRef(null);return y.useImperativeHandle(We,function(){return ae.current}),(0,v.jsx)(mn.Z,b()(b()({},pn),{},{showUploadList:!1,rootClassName:c,ref:ae,children:en}))}var tn=y.forwardRef(un),ln,Je=(0,he.vJ)(ln||(ln=E()([`
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
`])),function(o){return o.theme.prefixCls},function(o){return o.theme.zIndexPopupBase},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.borderRadius},function(o){return o.theme.lineWidthBold},function(o){return o.theme.padding},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.colorPrimaryHover},function(o){return o.theme.prefixCls},function(o){return o.theme.paddingXXS},function(o){return o.theme.fontSizeHeading2},function(o){return o.theme.prefixCls},function(o){return o.theme.fontSize},function(o){return o.theme.lineHeight},function(o){return o.theme.paddingSM},function(o){return o.theme.fontSize},function(o){return o.theme.lineHeight},function(o){return o.theme.colorText},function(o){return o.theme.padding},function(o){return o.theme.fontSize},function(o){return o.theme.lineHeight},function(o){return o.theme.paddingSM},function(o){return o.theme.paddingSM},function(o){return o.theme.fontSize},function(o){return o.theme.lineHeight},function(o){return o.theme.paddingSM},function(o){return o.theme.paddingSM},function(o){return o.theme.fontSize},function(o){return o.theme.lineHeight},function(o){return o.theme.paddingSM},function(o){return o.theme.paddingSM},function(o){return o.theme.fontSizeHeading2},function(o){return o.theme.boxShadowTertiary},function(o){return o.theme.padding},function(o){return o.theme.padding},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls},function(o){return o.theme.prefixCls}),En=["prefixCls","rootClassName","rootStyle","className","style","items","children","getDropContainer","placeholder","onChange","overflow","disabled","replaceable","classNames","styles"];function Ln(o,We){var en=o.prefixCls,pn=o.rootClassName,c=o.rootStyle,ae=o.className,L=o.style,Y=o.items,z=o.children,W=o.getDropContainer,oe=o.placeholder,je=o.onChange,t=o.overflow,h=o.disabled,C=o.replaceable,D=o.classNames,V=D===void 0?{}:D,$=o.styles,H=$===void 0?{}:$,ne=_()(o,En),de=(0,T.wv)(),G=de.direction,ce=de.getPrefixCls,Pe=ce("attachment"),Ue=y.useRef(null),He=y.useRef(null);y.useImperativeHandle(We,function(){return{nativeElement:Ue.current,upload:function(De){var we,xe=(we=He.current)===null||we===void 0||(we=we.nativeElement)===null||we===void 0?void 0:we.querySelector('input[type="file"]');if(xe){var Ee=new DataTransfer;Ee.items.add(De),xe.files=Ee.files,xe.dispatchEvent(new Event("change",{bubbles:!0}))}}}});var Ge=(0,P.C8)([],{value:Y}),rn=R()(Ge,2),Le=rn[0],fe=rn[1],J=(0,P.zX)(function(Te){fe(Te.fileList),je==null||je(Te)}),An=b()(b()({},ne),{},{fileList:Le,onChange:J}),xn=function(De){var we=Le.filter(function(xe){return xe.uid!==De.uid});J({file:De,fileList:we})},Xe=(0,P.zX)(function(Te,De){var we={uid:Te.uid,name:De.name,size:De.size,type:De.type,originFileObj:De,status:"done",percent:100},xe=Le.map(function(Ee){return Ee.uid===Te.uid?we:Ee});J({file:we,fileList:xe})}),Cn,nn=function(De,we,xe){var Ee=typeof oe=="function"?oe(De):oe;return(0,v.jsx)(qe,{placeholder:Ee,upload:An,prefixCls:Pe,className:x()(V.placeholder),style:b()(b()({},H.placeholder),we==null?void 0:we.style),ref:xe})};if(z)Cn=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(tn,{upload:An,rootClassName:pn,ref:He,children:z}),(0,v.jsx)(B,{getDropContainer:W,prefixCls:Pe,className:x()(pn),children:nn("drop")})]});else{var jn=Le.length>0;Cn=(0,v.jsxs)("div",{className:x()(Pe,m()({},"".concat(Pe,"-rtl"),G==="rtl"),ae,pn),style:b()(b()({},c),L),dir:G||"ltr",ref:Ue,children:[(0,v.jsx)(Ye,{prefixCls:Pe,items:Le,onRemove:xn,onReplace:C?Xe:void 0,overflow:t,upload:An,listClassName:x()(V.list),listStyle:b()(b()({},H.list),!jn&&{display:"none"}),itemClassName:x()(V.item),itemStyle:b()({},H.item),renderType:o.renderType}),nn("inline",jn?{style:{display:"none"}}:{},He)]})}return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Je,{}),(0,v.jsx)(n.Provider,{value:{disabled:h},children:Cn})]})}var _n=y.forwardRef(Ln);_n.FileCard=Se,_n.ImageCard=Ke;var hn=_n},50130:function(an,ee,e){"use strict";e.d(ee,{L:function(){return T},Z:function(){return y}});var te=e(97857),m=e.n(te),I=e(13769),b=e.n(I),j=e(67294),R=e(83962),S=e(76289),_=e(85893),N=["component"],x=j.memo(function(P){var g=(0,R.HJ)(),n=(0,S.TQ)(function(s){return s.onInput}),v=(0,j.useMemo)(function(){if(P.component)return P.component;var s=g;return(s==null?void 0:s[P.code])||function(){return"".concat(P.code," not found")}},[]);if(typeof v=="function"){var B=P.component,l=b()(P,N);return(0,_.jsx)(v,m()(m()({},l),{},{context:{onInput:n}}))}else return v});function y(P){var g=P.cards;return g!=null&&g.length?g.map(function(n,v){var B=(0,_.jsx)(x,m()({index:v,id:P.id,isLast:P.isLast},n),(n==null?void 0:n.id)||v+n.code);return n.code==="Text"?(0,_.jsx)("div",{className:P.className,children:B},v):B}):null}function T(P,g){return{code:P,data:g}}},67369:function(an,ee,e){"use strict";e.d(ee,{p4:function(){return T},hw:function(){return P},ZP:function(){return y}});var te=e(67294),m=e(56044),I=e(64057),b=e(68400),j=e.n(b),R=e(9053),S,_=(0,R.vJ)(S||(S=j()([`
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
`])),function(g){return g.theme.prefixCls},function(g){return g.theme.prefixCls},function(g){return g.theme.colorText},function(g){return g.theme.prefixCls},function(g){return g.theme.colorTextTertiary},function(g){return g.theme.colorBorder}),N=_,x=e(85893);function y(g){var n=(0,m.wv)(),v=n.getPrefixCls,B=v("bubble-footer"),l=g.left,s=g.right;return l&&!l.type||s&&!s.type?null:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(N,{}),(0,x.jsxs)("div",{className:B,children:[(0,x.jsx)("div",{className:"".concat(B,"-left"),children:g.left}),(0,x.jsx)("div",{className:"".concat(B,"-right"),children:g.right})]})]})}function T(g){var n=(0,m.wv)(),v=n.getPrefixCls,B=v("bubble-footer-actions");return(0,x.jsx)("div",{className:B,children:g.data.map(function(l,s){return l.children?te.cloneElement(l.children,{key:s}):(0,x.jsx)(I.Z,{bordered:!1,icon:l.icon,size:"small",onClick:l.onClick},s)})})}function P(g){var n=(0,m.wv)(),v=n.getPrefixCls,B=v("bubble-footer-count");return(0,x.jsx)("div",{className:B,children:g.data.map(function(l){return(0,x.jsxs)("div",{className:"".concat(B,"-item"),children:[l[0],"\uFF1A",l[1]]},l[0])})})}y.Actions=T,y.Count=P},10146:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return x}});var te=e(68400),m=e.n(te),I=e(9053),b=e(56044),j=e(9343),R=e(36674),S=e(85893),_,N=(0,I.vJ)(_||(_=m()([`
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

`])),function(y){return y.theme.prefixCls},function(y){return y.theme.colorFillSecondary},function(y){return y.theme.prefixCls},function(y){return y.theme.prefixCls},function(y){return y.theme.colorText},function(y){return y.theme.colorError});function x(y){var T=y.title,P=T===void 0?"Answers have stopped":T,g=y.type,n=g===void 0?"interrupted":g,v=y.desc,B=(0,b.wv)(),l=B.getPrefixCls,s=l("interrupted");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(N,{}),(0,S.jsxs)("div",{className:"".concat(s),children:[(0,S.jsxs)("div",{className:"".concat(s,"-header"),children:[(0,S.jsx)("div",{className:"".concat(s,"-icon-wrapper"),children:n==="interrupted"?(0,S.jsx)(j.Z,{className:"".concat(s,"-header-interrupted")}):(0,S.jsx)(R.Z,{className:"".concat(s,"-header-error")})}),(0,S.jsx)("span",{children:P})]}),v&&(0,S.jsx)("div",{className:"".concat(s,"-desc"),children:v})]})]})}},52471:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return je}});var te=e(97857),m=e.n(te),I=e(93967),b=e.n(I),j=e(67294),R=e(68400),S=e.n(R),_=e(9053),N,x=(0,_.vJ)(N||(N=S()([`
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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.colorText},function(t){return t.theme.fontSize},function(t){return t.theme.lineHeight},function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadiusLG},function(t){return t.theme.colorPrimaryBg},function(t){return t.theme.prefixCls},function(t){return t.theme.colorText},function(t){return t.theme.colorText},function(t){return t.theme.colorBgBase},function(t){return t.theme.colorBgBase},function(t){return t.theme.colorTextTertiary},function(t){return t.theme.colorTextTertiary},function(t){return t.theme.colorBgBase},function(t){return t.theme.colorBgBase},function(t){return t.theme.colorTextSecondary},function(t){return t.theme.colorTextSecondary},function(t){return t.theme.colorBgBase},function(t){return t.theme.colorBgBase}),y=e(56044),T=e(66109),P=e(50130),g=e(85893);function n(){var t=(0,y.wv)(),h=t.getPrefixCls,C=h("bubble-loading");return(0,g.jsxs)("div",{className:C,children:[(0,g.jsx)("div",{className:"".concat(C,"-dot1")}),(0,g.jsx)("div",{className:"".concat(C,"-dot2")}),(0,g.jsx)("div",{className:"".concat(C,"-dot3")}),(0,g.jsx)("div",{className:"".concat(C,"-text"),children:"-"})]})}var v=e(9783),B=e.n(v),l=e(68997),s=function(h){var C=h.avatar,D=h.msgStatus,V=h.isAssistant,$=h.prefixCls,H=h.className,ne=h.style,de=j.isValidElement(C)?C:(0,g.jsx)(l.Z,m()({},C));return(0,g.jsx)("div",{className:b()("".concat($,"-avatar"),B()({},"".concat($,"-avatar-loading"),V&&D==="generating"),H),style:ne,children:de})},p=s,f,A=(0,_.vJ)(f||(f=S()([`
.`,`-bubble-avatar {
  display: inline-flex;
  justify-content: center;
  align-self: flex-start;
  margin-right: 6px;

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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.colorFillSecondary},function(t){return t.theme.prefixCls},function(t){return t.theme.colorBorder},function(t){return t.theme.colorBorderSecondary},function(t){return t.theme.colorBorder},function(t){return t.theme.prefixCls}),le=j.createContext({}),F=function(h){var C=h.isLast,D=h.className,V=h.rootClassName,$=h.style,H=h.classNames,ne=H===void 0?{}:H,de=h.styles,G=de===void 0?{}:de,ce=h.avatar,Pe=h.content,Ue=Pe===void 0?"":Pe,He=h.cards,Ge=h.msgStatus,rn=h.id,Le=h.role,fe=h.variant,J={assistant:"start",user:"end"}[Le]||"start",An=(0,y.wv)(),xn=An.getPrefixCls,Xe=xn("bubble"),Cn=b()(Xe,V,D,"".concat(Xe,"-").concat(J)),nn,jn=!(Ue!=null&&Ue.length)&&!(He!=null&&He.length);h.msgStatus==="generating"&&jn?nn=(0,g.jsx)(n,{}):nn=Ue?(0,g.jsx)(T.Z,{content:Ue,cursor:h.msgStatus==="generating"}):null;var Te=J==="assistant"||J==="start",De="".concat(Xe,"-content-").concat(fe||(Te?"borderless":"filled")),we=(0,g.jsxs)("div",{style:!Te&&nn?{flexDirection:"column-reverse"}:{},className:"".concat(Xe,"-content-wrapper"),children:[(0,g.jsx)(P.Z,{cards:He,id:rn,isLast:C,className:b()("".concat(Xe,"-content"),"".concat(Xe,"-content-wrapper-card"),De,ne.content)}),nn&&(0,g.jsx)("div",{style:m()({},G.content),className:b()("".concat(Xe,"-content"),"".concat(Xe,"-content-wrapper-card"),De,ne.content),children:nn})]});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{}),(0,g.jsx)(A,{}),(0,g.jsxs)("div",{style:$,className:Cn,id:rn,"data-role":Le,children:[ce&&(0,g.jsx)(p,{avatar:ce,msgStatus:Ge,isAssistant:Te,prefixCls:Xe,className:ne.avatar,style:G.avatar}),we]})]})},E=j.memo(F),he=e(5574),re=e.n(he),X=e(13769),se=e.n(X),ge=e(52677),Ie=e.n(ge),r=e(15009),Ze=e.n(r),ye=e(99289),Ae=e.n(ye),be,Z,K;var Oe={damping:.7,stiffness:.05,mass:1.25},ke=70,Fe=1e3/60,Ke=350,Re=!1;(be=globalThis.document)===null||be===void 0||be.addEventListener("mousedown",function(){Re=!0}),(Z=globalThis.document)===null||Z===void 0||Z.addEventListener("mouseup",function(){Re=!1}),(K=globalThis.document)===null||K===void 0||K.addEventListener("click",function(){Re=!1});var dn=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},C=(0,j.useState)(!1),D=re()(C,2),V=D[0],$=D[1],H=(0,j.useState)(h.enabled!==!1&&h.initial!==!1),ne=re()(H,2),de=ne[0],G=ne[1],ce=(0,j.useState)(!1),Pe=re()(ce,2),Ue=Pe[0],He=Pe[1],Ge=(0,j.useRef)(null);Ge.current=h;var rn=(0,j.useCallback)(function(){var Te;if(!Re)return!1;var De=window.getSelection();if(!De||!De.rangeCount)return!1;var we=De.getRangeAt(0);return we.commonAncestorContainer.contains(nn.current)||((Te=nn.current)===null||Te===void 0?void 0:Te.contains(we.commonAncestorContainer))},[]),Le=(0,j.useCallback)(function(Te){J.isAtBottom=Te,G(Te)},[]),fe=(0,j.useCallback)(function(Te){J.escapedFromLock=Te,$(Te)},[]),J=(0,j.useMemo)(function(){var Te;return{escapedFromLock:V,isAtBottom:de,resizeDifference:0,accumulated:0,velocity:0,listeners:new Set,get scrollTop(){var De,we;return(De=(we=nn.current)===null||we===void 0?void 0:we.scrollTop)!==null&&De!==void 0?De:0},set scrollTop(De){nn.current&&(nn.current.scrollTop=De,J.ignoreScrollToTop=nn.current.scrollTop)},get targetScrollTop(){return!nn.current||!jn.current?0:nn.current.scrollHeight-1-nn.current.clientHeight},get calculatedTargetScrollTop(){var De;if(!nn.current||!jn.current)return 0;var we=this.targetScrollTop;if(!h.targetScrollTop)return we;if(((De=Te)===null||De===void 0?void 0:De.targetScrollTop)===we)return Te.calculatedScrollTop;var xe=Math.max(Math.min(h.targetScrollTop(we,{scrollElement:nn.current,contentElement:jn.current}),we),0);return Te={targetScrollTop:we,calculatedScrollTop:xe},requestAnimationFrame(function(){Te=void 0}),xe},get scrollDifference(){return this.calculatedTargetScrollTop-this.scrollTop},get isNearBottom(){return this.scrollDifference<=ke}}},[]),An=(0,j.useCallback)(function(){var Te,De=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};typeof De=="string"&&(De={animation:De}),De.preserveScrollPosition||Le(!0);var we=Date.now()+(Number(De.wait)||0),xe=vn(Ge.current,De.animation),Ee=De,gn=Ee.ignoreEscapes,bn=gn===void 0?!1:gn,Kn,On=J.calculatedTargetScrollTop;if(De.duration instanceof Promise)De.duration.finally(function(){Kn=Date.now()});else{var kn;Kn=we+((kn=De.duration)!==null&&kn!==void 0?kn:0)}var Fn=function(){var Wn=Ae()(Ze()().mark(function Yn(){var Dn;return Ze()().wrap(function(zn){for(;;)switch(zn.prev=zn.next){case 0:return Dn=new Promise(requestAnimationFrame).then(function(){var In;if(!J.isAtBottom)return J.animation=void 0,!1;var Hn=J.scrollTop,Gn=performance.now(),Un=(Gn-((In=J.lastTick)!==null&&In!==void 0?In:Gn))/Fe;if(J.animation||(J.animation={behavior:xe,promise:Dn,ignoreEscapes:bn}),J.animation.behavior===xe&&(J.lastTick=Gn),rn()||we>Date.now())return Fn();if(Hn<Math.min(On,J.calculatedTargetScrollTop)){var Tn;if(((Tn=J.animation)===null||Tn===void 0?void 0:Tn.behavior)===xe){if(xe==="instant")return J.scrollTop=J.calculatedTargetScrollTop,Fn();J.velocity=(xe.damping*J.velocity+xe.stiffness*J.scrollDifference)/xe.mass,J.accumulated+=J.velocity*Un,J.scrollTop+=J.accumulated,J.scrollTop!==Hn&&(J.accumulated=0)}return Fn()}return Kn>Date.now()?(On=J.calculatedTargetScrollTop,Fn()):(J.animation=void 0,J.scrollTop<J.calculatedTargetScrollTop?An({animation:vn(Ge.current,Ge.current.resize),ignoreEscapes:bn,duration:Math.max(0,Kn-Date.now())||void 0}):J.isAtBottom)}),zn.abrupt("return",Dn.then(function(In){return requestAnimationFrame(function(){J.animation||(J.lastTick=void 0,J.velocity=0)}),In}));case 2:case"end":return zn.stop()}},Yn)}));return function(){return Wn.apply(this,arguments)}}();return De.wait!==!0&&(J.animation=void 0),((Te=J.animation)===null||Te===void 0?void 0:Te.behavior)===xe?J.animation.promise:Fn()},[Le,rn,J]),xn=(0,j.useCallback)(function(){fe(!0),Le(!1)},[fe,Le]),Xe=(0,j.useCallback)(function(Te){var De=Te.target;if(De===nn.current){var we=J.scrollTop,xe=J.ignoreScrollToTop,Ee=J.lastScrollTop,gn=Ee===void 0?we:Ee;J.lastScrollTop=we,J.ignoreScrollToTop=void 0,xe&&xe>we&&(gn=xe),He(J.isNearBottom),setTimeout(function(){var bn;if(!(J.resizeDifference||we===xe)){if(rn()){fe(!0),Le(!1);return}var Kn=we>gn,On=we<gn;if((bn=J.animation)!==null&&bn!==void 0&&bn.ignoreEscapes){J.scrollTop=gn;return}On&&(fe(!0),Le(!1)),Kn&&fe(!1),!J.escapedFromLock&&J.isNearBottom&&Le(!0)}},1)}},[fe,Le,rn,J]),Cn=(0,j.useCallback)(function(Te){for(var De,we=Te.target,xe=Te.deltaY,Ee=we;!["scroll","auto"].includes(getComputedStyle(Ee).overflow);){if(!Ee.parentElement)return;Ee=Ee.parentElement}Ee===nn.current&&xe<0&&nn.current.scrollHeight>nn.current.clientHeight&&!((De=J.animation)!==null&&De!==void 0&&De.ignoreEscapes)&&(fe(!0),Le(!1))},[fe,Le,J]),nn=fn(function(Te){var De,we;(De=nn.current)===null||De===void 0||De.removeEventListener("scroll",Xe),(we=nn.current)===null||we===void 0||we.removeEventListener("wheel",Cn),Te==null||Te.addEventListener("scroll",Xe,{passive:!0}),Te==null||Te.addEventListener("wheel",Cn,{passive:!0})},[]),jn=fn(function(Te){var De,we;if((De=J.resizeObserver)===null||De===void 0||De.disconnect(),!!Te){var xe;J.resizeObserver=new ResizeObserver(function(Ee){var gn,bn=re()(Ee,1),Kn=bn[0],On=Kn.contentRect.height,kn=On-((gn=xe)!==null&&gn!==void 0?gn:On);if(J.resizeDifference=kn,J.scrollTop>J.targetScrollTop&&(J.scrollTop=J.targetScrollTop),He(J.isNearBottom),kn>=0){if(Ge.current.enabled!==!1){var Fn=vn(Ge.current,xe?Ge.current.resize:Ge.current.initial);An({animation:Fn,wait:!0,preserveScrollPosition:!0,duration:Fn==="instant"?void 0:Ke})}}else J.isNearBottom&&(fe(!1),Le(!0));xe=On,requestAnimationFrame(function(){setTimeout(function(){J.resizeDifference===kn&&(J.resizeDifference=0)},1)})}),(we=J.resizeObserver)===null||we===void 0||we.observe(Te)}},[]);return{contentRef:jn,scrollRef:nn,scrollToBottom:An,stopScroll:xn,isAtBottom:de||Ue,isNearBottom:Ue,escapedFromLock:V,state:J}};function fn(t,h){var C=(0,j.useCallback)(function(D){return C.current=D,t(D)},h);return C}var on=new Map;function vn(){for(var t=m()({},Oe),h=!1,C=arguments.length,D=new Array(C),V=0;V<C;V++)D[V]=arguments[V];for(var $=0,H=D;$<H.length;$++){var ne,de,G,ce=H[$];if(ce==="instant"){h=!0;continue}Ie()(ce)==="object"&&(h=!1,t.damping=(ne=ce.damping)!==null&&ne!==void 0?ne:t.damping,t.stiffness=(de=ce.stiffness)!==null&&de!==void 0?de:t.stiffness,t.mass=(G=ce.mass)!==null&&G!==void 0?G:t.mass)}var Pe=JSON.stringify(t);return on.has(Pe)||on.set(Pe,Object.freeze(t)),h?"instant":on.get(Pe)}var $e=["instance","children","resize","initial","mass","damping","stiffness","targetScrollTop","contextRef"],Rn=["children","scrollClassName"];var U=(0,j.createContext)(null),Se=typeof window!="undefined"?j.useLayoutEffect:j.useEffect;function Ne(t){var h=t.instance,C=t.children,D=t.resize,V=t.initial,$=t.mass,H=t.damping,ne=t.stiffness,de=t.targetScrollTop,G=t.contextRef,ce=se()(t,$e),Pe=(0,j.useRef)(null),Ue=j.useCallback(function(Te,De){var we,xe,Ee=(we=jn==null?void 0:jn.targetScrollTop)!==null&&we!==void 0?we:de;return(xe=Ee==null?void 0:Ee(Te,De))!==null&&xe!==void 0?xe:Te},[de]),He=ce.enabled,Ge=He===void 0?!0:He,rn=dn({enabled:Ge,mass:$,damping:H,stiffness:ne,resize:D,initial:V,targetScrollTop:Ue}),Le=h!=null?h:rn,fe=Le.scrollRef,J=Le.contentRef,An=Le.scrollToBottom,xn=Le.stopScroll,Xe=Le.isAtBottom,Cn=Le.escapedFromLock,nn=Le.state,jn=(0,j.useMemo)(function(){return{scrollToBottom:An,stopScroll:xn,scrollRef:fe,isAtBottom:Xe,escapedFromLock:Cn,contentRef:J,state:nn,get targetScrollTop(){return Pe.current},set targetScrollTop(Te){Pe.current=Te}}},[An,Xe,J,fe,xn,Cn,nn]);return(0,j.useImperativeHandle)(G,function(){return jn},[jn]),Se(function(){fe.current&&getComputedStyle(fe.current).overflow==="visible"&&(fe.current.style.overflow="auto")},[]),(0,g.jsx)(U.Provider,{value:jn,children:(0,g.jsx)("div",m()(m()({},ce),{},{children:typeof C=="function"?C(jn):C}))})}(function(t){function h(C){var D=C.children,V=C.scrollClassName,$=se()(C,Rn),H=Ye();return(0,g.jsx)("div",{ref:H.scrollRef,style:{height:"100%",width:"100%",scrollbarGutter:"stable both-edges"},className:V,children:(0,g.jsx)("div",m()(m()({},$),{},{ref:H.contentRef,children:typeof D=="function"?D(H):D}))})}t.Content=h})(Ne||(Ne={}));function Ye(){var t=(0,j.useContext)(U);if(!t)throw new Error("use-stick-to-bottom component context must be used within a StickToBottom component");return t}var sn=e(64057),Qe=e(25109),mn=function(h,C){var D=(0,y.wv)(),V=D.getPrefixCls,$=Ye(),H=$.isAtBottom,ne=$.scrollToBottom;j.useImperativeHandle(C,function(){return{scrollToBottom:function(G){function ce(Pe){return G.apply(this,arguments)}return ce.toString=function(){return G.toString()},ce}(function(G){G=G||{animation:"instant"},ne(G)})}});var de=V("bubble-list-scroll-to-bottom");return(0,g.jsx)("div",{className:b()(de,"".concat(de,"-").concat(H?"hide":"show")),children:(0,g.jsx)(sn.Z,{icon:(0,g.jsx)(Qe.Z,{}),shape:"circle",onClick:function(){return ne({animation:"instant"})}})})},cn=j.forwardRef(mn),qe,un=(0,_.vJ)(qe||(qe=S()([`
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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.colorPrimaryBorder},function(t){return t.theme.colorPrimaryBg},function(t){return t.theme.colorPrimary}),tn=e(42532),ln=e(45908),Je=e(78234),En=e(19632),Ln=e.n(En),_n=e(64599),hn=e.n(_n),o=e(73935),We=function(h,C){var D=(0,j.useState)(1),V=re()(D,2),$=V[0],H=V[1],ne=(0,j.useMemo)(function(){var de=[],G=[],ce=hn()(h),Pe;try{for(ce.s();!(Pe=ce.n()).done;){var Ue=Pe.value;Ue.history?de.push(Ue):G.push(Ue)}}catch(He){ce.e(He)}finally{ce.f()}return[].concat(Ln()(de.slice(-$*10)),G)},[h,$]);return C!=null&&C.enable?{items:ne,noMore:ne.length===h.length,loadMore:function(G){return new Promise(function(ce){setTimeout(function(){var Pe,Ue=G==null?void 0:G.current,He=(Pe=Ue==null?void 0:Ue.scrollHeight)!==null&&Pe!==void 0?Pe:0;if((0,o.flushSync)(function(){H($+1)}),Ue){var Ge=Ue.scrollHeight;Ue.scrollTop+=Ge-He}ce()},1e3)})}}:{items:h,noMore:!0,loadMore:function(G){return Promise.resolve()}}},en=e(57381),pn=["key"];function c(t){var h=t.items,C=t.paginationItems,D=t.noMore,V=t.loadMore,$=t.prefixCls,H=t.listClassName,ne=t.children,de=Ye(),G=de.scrollRef,ce=(0,j.useCallback)(function(){return V(G)},[V,G]);return(0,g.jsxs)(Ne.Content,{className:b()("".concat($),H),children:[D?null:(0,g.jsx)(ae,{handleLoadMore:ce}),ne||C.map(function(Pe,Ue){var He=Pe.key,Ge=se()(Pe,pn),rn=Ue===h.length-1;return(0,j.createElement)(E,m()(m()({},Ge),{},{isLast:rn,key:Ge.id||He}))})]})}function ae(t){var h=t.handleLoadMore,C=(0,j.useRef)(null),D=(0,tn.Z)(C),V=re()(D,1),$=V[0],H=(0,j.useState)(!1),ne=re()(H,2),de=ne[0],G=ne[1],ce=(0,ln.Z)($),Pe=(0,y.wv)(),Ue=Pe.getPrefixCls,He=Ue("bubble-list");return(0,j.useEffect)(function(){$&&ce===void 0||de||$&&(G(!0),h().finally(function(){G(!1)}))},[ce,$,de,h]),(0,g.jsx)("div",{ref:C,className:"".concat(He,"-load-more"),children:(0,g.jsx)(en.Z,{spinning:!0})})}var L=function(h,C){var D,V,$=h.items,H=$===void 0?[]:$,ne=h.smooth,de=ne===void 0?!0:ne,G=(0,j.useState)(!1),ce=re()(G,2),Pe=ce[0],Ue=ce[1],He=j.useRef(),Ge=(0,y.wv)(),rn=Ge.getPrefixCls,Le=rn("bubble-list");j.useImperativeHandle(C,function(){return{scrollToBottom:function(){He.current.scrollToBottom()}}}),(0,Je.Z)(function(){Ue(!0)});var fe=Pe&&de?"smooth":"instant",J=We(H,{enable:h.pagination}),An=J.items,xn=J.noMore,Xe=J.loadMore;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(un,{}),(0,g.jsxs)(Ne,{enabled:!!de||!Pe,id:h.id,className:b()("".concat(Le,"-wrapper"),(D=h.classNames)===null||D===void 0?void 0:D.wrapper),resize:fe,initial:"instant",style:h.style,children:[(0,g.jsx)(c,{items:H,paginationItems:An,noMore:xn,loadMore:Xe,prefixCls:Le,listClassName:(V=h.classNames)===null||V===void 0?void 0:V.list,children:h.children}),(0,g.jsx)(cn,{ref:He})]})]})},Y=j.forwardRef(L),z=Y,W=e(67369),oe=e(10146);E.List=z,E.Spin=n,E.Footer=W.ZP,E.Interrupted=oe.Z;var je=E},76289:function(an,ee,e){"use strict";e.d(ee,{TQ:function(){return g},vi:function(){return T}});var te=e(97857),m=e.n(te),I=e(13769),b=e.n(I),j=e(5574),R=e.n(j),S=e(67294),_=e(79785),N=e(59214),x=e(85893),y=["children"];function T(n){var v=(0,_.Z)([]),B=R()(v,3),l=B[0],s=B[1],p=B[2],f=(0,_.Z)("0"),A=R()(f,3),le=A[0],F=A[1],E=A[2],he=(0,_.Z)(0),re=R()(he,3),X=re[0],se=re[1],ge=re[2],Ie=(0,_.Z)([]),r=R()(Ie,3),Ze=r[0],ye=r[1],Ae=r[2],be=(0,_.Z)(!1),Z=R()(be,3),K=Z[0],Oe=Z[1],ke=Z[2],Fe=(0,_.Z)(!1),Ke=R()(Fe,3),Re=Ke[0],dn=Ke[1],fn=Ke[2],on=(0,_.Z)(!0),vn=R()(on,3),$e=vn[0],Rn=vn[1],U=vn[2],Se=n.children,Ne=b()(n,y),Ye=m()({sessionList:l,setSessionList:s,getSessionList:p,currentSessionKey:le,setCurrentSessionKey:F,getCurrentSessionKey:E,messages:Ze,setMessages:ye,getMessages:Ae,loading:K,setLoading:Oe,getLoading:ke,disabled:Re,setDisabled:dn,getDisabled:fn,sessionListShow:$e,setSessionListShow:Rn,getSessionListShow:U,currentRegenerateIndex:X,setCurrentRegenerateIndex:se,getCurrentRegenerateIndex:ge},Ne);return(0,x.jsx)(P.Provider,{value:Ye,children:Se})}var P=(0,N.createContext)(void 0);function g(n){try{var v=(0,N.useContextSelector)(P,n);return v}catch(B){return{}}}},37254:function(an,ee,e){"use strict";e.d(ee,{G:function(){return m}});var te=e(76289);function m(){var I=(0,te.TQ)(function(x){return{loading:x.loading,getLoading:x.getLoading,disabled:x.disabled,getDisabled:x.getDisabled,setLoading:x.setLoading,setDisabled:x.setDisabled}}),b=I.loading,j=I.disabled,R=I.setLoading,S=I.setDisabled,_=I.getLoading,N=I.getDisabled;return{loading:b,disabled:j,setLoading:R,setDisabled:S,getLoading:_,getDisabled:N}}},4421:function(an,ee,e){"use strict";e.d(ee,{y:function(){return S}});var te=e(19632),m=e.n(te),I=e(97857),b=e.n(I),j=e(67294),R=e(76289);function S(){var _=(0,R.TQ)(function(v){return{messages:v.messages,setMessages:v.setMessages,getMessages:v.getMessages}}),N=_.messages,x=_.setMessages,y=_.getMessages,T=j.useCallback(function(){var v,B=((v=arguments.length<=0?void 0:arguments[0])===null||v===void 0?void 0:v.id)||(arguments.length<=0?void 0:arguments[0]),l=(arguments.length<=1?void 0:arguments[1])||(arguments.length<=0?void 0:arguments[0]);x==null||x(function(s){var p=s.findIndex(function(A){return A.id===B});if(p>-1){var f=b()(b()({},s[p]),l);return[].concat(m()(s.slice(0,p)),[f],m()(s.slice(p+1)))}else return[].concat(m()(s),[l])})},[]),P=j.useCallback(function(v){x(function(B){return B.filter(function(l){return l.id!==v.id})})},[]),g=j.useCallback(function(){x([])},[]),n=j.useCallback(function(v){return y().find(function(B){return B.id===v})},[]);return{messages:N,getMessage:n,setMessages:x,getMessages:y,updateMessage:T,removeMessage:P,removeAllMessages:g}}},61316:function(an,ee,e){"use strict";e.d(ee,{x:function(){return N}});var te=e(97857),m=e.n(te),I=e(19632),b=e.n(I),j=e(67294),R=e(76289),S=e(88773),_=e(73935);function N(){var x=(0,R.TQ)(function(X){return{getCurrentSessionKey:X.getCurrentSessionKey,currentRegenerateIndex:X.currentRegenerateIndex,setCurrentRegenerateIndex:X.setCurrentRegenerateIndex,getCurrentRegenerateIndex:X.getCurrentRegenerateIndex,sessionListShow:X.sessionListShow,setSessionListShow:X.setSessionListShow,sessionList:X.sessionList,setSessionList:X.setSessionList,currentSessionKey:X.currentSessionKey,setCurrentSessionKey:X.setCurrentSessionKey,getSessionList:X.getSessionList}}),y=x.getCurrentSessionKey,T=x.sessionList,P=x.setSessionList,g=x.currentSessionKey,n=x.setCurrentSessionKey,v=x.sessionListShow,B=x.setSessionListShow,l=x.currentRegenerateIndex,s=x.setCurrentRegenerateIndex,p=x.getCurrentRegenerateIndex,f=x.getSessionList,A=j.useCallback(function(){var X=(0,S.Z)(),se={label:Date.now().toString(),key:X,messages:[[]]};return _.flushSync(function(){P(function(ge){var Ie=[].concat(b()(ge),[se]);return Ie}),n(X)}),X},[]),le=j.useCallback(function(X){P(function(se){var ge=se.filter(function(Ie){return Ie.key!==X});return ge})},[]),F=j.useCallback(function(X){var se=y(),ge=p();P(function(Ie){return Ie.map(function(r){return r.key===se?(r.messages[ge]=X,m()({},r)):r})})},[]),E=j.useCallback(function(X,se){var ge;return(ge=f().find(function(Ie){return Ie.key===X}))===null||ge===void 0?void 0:ge.messages[se]},[]),he=j.useCallback(function(){return{sessionList:f(),currentSessionKey:y(),currentRegenerateIndex:p()}},[]),re=j.useCallback(function(X){var se=X.sessionList,ge=X.currentSessionKey,Ie=X.currentRegenerateIndex;P(se),n(ge),s(Ie)},[]);return{currentRegenerateIndex:l,setCurrentRegenerateIndex:s,getCurrentRegenerateIndex:p,sessionList:T,setSessionList:P,getSessionList:f,currentSessionKey:g,setCurrentSessionKey:n,sessionListShow:v,setSessionListShow:B,createSession:A,deleteSession:le,updateSessionMessages:F,getMessagesBySession:E,getSession:he,updateSession:re}}},29041:function(an,ee,e){"use strict";e.d(ee,{ZP:function(){return ae}});var te=e(97857),m=e.n(te),I=e(13769),b=e.n(I),j=e(5574),R=e.n(j),S=e(67294),_=e(93967),N=e.n(_),x=e(56044),y=e(85265),T=e(17909),P=e(76289),g=e(68400),n=e.n(g),v=e(9053),B,l=(0,v.vJ)(B||(B=n()([`

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
`])),function(L){return L.theme.prefixCls},function(L){return L.theme.fontFamily},function(L){return L.theme.colorBgBase},function(L){return L.theme.colorBgBase},function(L){return L.theme.colorBgBase},function(L){return L.theme.colorFillTertiary}),s=e(85893);function p(L){var Y=(0,P.TQ)(function(C){return{sessionListShow:C.sessionListShow,setSessionListShow:C.setSessionListShow}}),z=Y.sessionListShow,W=Y.setSessionListShow,oe=(0,x.wv)(),je=oe.getPrefixCls,t=je("chat-anywhere-layout"),h=A();return(0,S.useEffect)(function(){W(!h)},[h]),L.left?h?(0,s.jsx)(y.Z,{width:"80vw",styles:{body:{padding:0}},open:z,onClose:function(){W(!1)},title:null,closable:!1,placement:"left",children:(0,s.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:L.left})}):(0,s.jsx)("div",{className:N()("".concat(t,"-left"),z?"":"".concat(t,"-left-hide")),children:L.left}):null}function f(L){var Y=(0,x.wv)(),z=Y.getPrefixCls,W=z("chat-anywhere-layout"),oe=(0,P.TQ)(function(je){return je.uiConfig});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{}),(0,s.jsx)("div",{className:W,children:(0,s.jsxs)("div",{className:"".concat(W,"-main"),children:[(0,s.jsx)(p,m()({},L)),(0,s.jsxs)("div",{className:"".concat(W,"-right"),style:{background:oe==null?void 0:oe.background},children:[L.top,L.right]})]})})]})}var A=function(){var Y=(0,T.Z)(),z=(0,P.TQ)(function(W){return W.uiConfig});return!Y.md||(z==null?void 0:z.narrowScreen)},le=e(9368),F=e(64057),E=e(21403),he=e(61316),re=e(4421),X,se=(0,v.vJ)(X||(X=n()([`
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

`])),function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls}),ge=e(50287),Ie=e(67392),r=e(13660),Ze=e(12624);function ye(){var L=(0,x.wv)(),Y=L.getPrefixCls,z=Y("chat-anywhere-session-list"),W=(0,P.TQ)(function(oe){return oe.sessionListShow});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(se,{}),(0,s.jsxs)("div",{className:N()("".concat(z),W?"":"".concat(z,"-hide")),children:[(0,s.jsx)(be,{}),(0,s.jsx)(Ae,{})]})]})}function Ae(){var L=(0,x.wv)(),Y=L.getPrefixCls,z=Y("chat-anywhere-session-list"),W=(0,he.x)(),oe=W.currentSessionKey,je=W.setCurrentSessionKey,t=W.currentRegenerateIndex,h=W.sessionList,C=W.getMessagesBySession,D=W.setSessionListShow,V=(0,re.y)(),$=V.setMessages,H=(0,P.TQ)(function(G){return G.getLoading}),ne=(0,P.TQ)(function(G){return G.onSessionKeyChange}),de=A();return(0,S.useEffect)(function(){var G=C(oe,t);$(G)},[oe,t]),(0,s.jsx)("div",{className:"".concat(z,"-session"),children:(0,s.jsx)(le.Z,{menu:[{key:"delete",icon:(0,s.jsx)(ge.Z,{}),danger:!0,onClick:function(ce){}}],activeKey:oe,items:h,onActiveChange:function(ce){H()||(de&&D(!1),requestIdleCallback(function(){je(ce),ne(ce)}))}})})}function be(){var L=(0,x.wv)(),Y=L.getPrefixCls,z=Y("chat-anywhere-session-list"),W=(0,he.x)(),oe=W.currentSessionKey,je=W.setCurrentSessionKey,t=W.deleteSession,h=W.createSession,C=W.sessionList,D=W.sessionListShow,V=W.setSessionListShow,$=(0,P.TQ)(function(ne){return ne.uiConfig}),H=A();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"".concat(z,"-logo"),children:[$==null?void 0:$.logo,(0,s.jsx)(F.Z,{bordered:!1,onClick:function(){return V(!D)},icon:D?(0,s.jsx)(Ie.Z,{}):(0,s.jsx)(r.Z,{})})]}),(0,s.jsx)("div",{className:"".concat(z,"-adder"),children:(0,s.jsx)(E.Z,{type:"primary",block:!0,icon:(0,s.jsx)(Ze.Z,{}),onClick:function(){H&&V(!1),h()},children:"New Session"})})]})}var Z=e(9783),K=e.n(Z),Oe=e(52471),ke=e(19632),Fe=e.n(ke),Ke=e(52677),Re=e.n(Ke),dn=e(15009),fn=e.n(dn),on=e(99289),vn=e.n(on),$e=e(41154),Rn=e(66672),U=e(50993),Se=e(37254),Ne,Ye=(0,v.vJ)(Ne||(Ne=n()([`
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
`])),function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls}),sn=e(86578),Qe=e(7654),mn=e(92053),cn=e(86250),qe=["trigger"];function un(L){var Y=L.uploadPropsList,z=(0,x.wv)(),W=z.getPrefixCls,oe=W("chat-anywhere-sender"),je=(0,S.useState)(!1),t=R()(je,2),h=t[0],C=t[1],D=(0,S.useRef)([]),V=(0,S.useMemo)(function(){return Y.map(function(H,ne){return(0,s.jsx)("div",{onClick:function(){var G;(G=D.current[ne])===null||G===void 0||G.click(),C(!1)},children:H.trigger},ne)})},[Y]),$=(0,S.useMemo)(function(){return Y.map(function(H,ne){var de=H.trigger,G=b()(H,qe);return(0,s.jsx)($e.Z,m()(m()({},G),{},{children:(0,s.jsx)("div",{ref:function(Pe){return D.current[ne]=Pe}})}),ne)})},[Y]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Qe.Z,{placement:"bottomLeft",open:h,onOpenChange:C,content:(0,s.jsx)(cn.Z,{vertical:!0,children:V}),trigger:"click",styles:{body:{padding:4}},children:(0,s.jsx)(F.Z,{icon:(0,s.jsx)(mn.Z,{}),bordered:!1})}),(0,s.jsx)("div",{className:"".concat(oe,"-upload-hidden-nodes"),children:$})]})}var tn=(0,S.forwardRef)(function(L,Y){var z=S.useState(""),W=R()(z,2),oe=W[0],je=W[1],t=(0,Se.G)(),h=(0,P.TQ)(function(xe){return xe.onUpload.map(function(Ee){return m()(m()({},Ee),{},{disabled:Ee.disabled||t.disabled})})}),C=new Array((h==null?void 0:h.length)||0).fill([]),D=(0,S.useState)(!1),V=R()(D,2),$=V[0],H=V[1],ne=S.useState(C),de=R()(ne,2),G=de[0],ce=de[1],Pe=(0,S.useRef)(C);(0,S.useEffect)(function(){ce(C)},[C.length]),(0,S.useEffect)(function(){Pe.current=G},[G]);var Ue=(0,P.TQ)(function(xe){return xe.uiConfig}),He=(0,x.wv)(),Ge=He.getPrefixCls,rn=Ge("chat-anywhere-sender"),Le=(0,P.TQ)(function(xe){return xe.onStop}),fe=(0,P.TQ)(function(xe){var Ee={beforeUI:void 0,afterUI:void 0,morePrefixActions:void 0,maxLength:void 0,zoomable:!0,beforeSubmit:function(){return Promise.resolve(!0)},header:[],enableFocusExpand:!1,variant:"default",hide:!1};return m()(m()({},Ee),xe.onInput)});if(S.useImperativeHandle(Y,function(){return{setInputContent:function(Ee,gn){je(Ee),ce(gn||[[]])},getAttachedFiles:function(){return Pe.current}}},[]),(0,S.useEffect)(function(){t.setDisabled(fe.disabled)},[fe.disabled]),fe.hide)return null;var J=function(){var xe=vn()(fn()().mark(function Ee(gn,bn){return fn()().wrap(function(On){for(;;)switch(On.prev=On.next){case 0:ce(function(kn){return kn.map(function(Fn,Wn){return Wn===gn?bn:Fn})});case 1:case"end":return On.stop()}},Ee)}));return function(gn,bn){return xe.apply(this,arguments)}}(),An=(0,S.useMemo)(function(){if(fe.variant==="aigc"||!(h!=null&&h.length))return[];var xe=h.map(function(Ee,gn){var bn;return Ee.trigger?bn=Ee.trigger:(Ee.title||Ee.description)&&h.length>1?bn=(0,s.jsxs)(E.Z,{type:"text",icon:Ee.icon,children:[Ee.title&&(0,s.jsx)("span",{children:Ee.title}),Ee.description&&(0,s.jsx)("span",{style:{fontSize:"0.8em",opacity:.8},children:Ee.description})]}):bn=(0,s.jsx)(F.Z,{icon:Ee.icon,bordered:!1}),m()(m()({},Ee),{},{fileList:G[gn],key:gn,onChange:function(On){Ee.beforeUpload&&On.file.status&&J(gn,On.fileList),Ee.beforeUpload||J(gn,On.fileList)},showUploadList:!1,trigger:bn})});return xe.length===1?(0,s.jsx)($e.Z,m()(m()({},xe[0]),{},{children:xe[0].trigger})):(0,s.jsx)(un,{uploadPropsList:xe})},[fe.variant,h,G]),xn=(0,s.jsx)(sn.Z.SenderHeader,{onUpload:h,attachedFiles:G,onFileChange:J}),Xe=(0,s.jsx)(Rn.Z.Header,{closable:!1,open:G==null?void 0:G.some(function(xe){return xe.length}),children:G.map(function(xe,Ee){return xe.length?(0,s.jsx)(U.Z,{items:xe,replaceable:!0,onChange:function(bn){return J(Ee,bn.fileList)}},Ee):null})}),Cn=fe.variant==="aigc"?xn:Xe,nn=G.map(function(xe){return xe.filter(function(Ee){return Ee.status==="done"})}),jn=G.some(function(xe){return xe.some(function(Ee){return Ee.status==="uploading"})}),Te=function(Ee){if(!(h!=null&&h.length))return;var gn=Ee.type||"",bn=Ee.name||"",Kn=function(Vn){return Vn?Vn.split(",").some(function(zn){var In=zn.trim();if(!In)return!1;if(In.startsWith("."))return bn.toLowerCase().endsWith(In.toLowerCase());if(In.includes("*")){if(In==="*/*")return!0;var Hn=In.split("/"),Gn=R()(Hn,1),Un=Gn[0],Tn=gn.split("/"),Zn=R()(Tn,1),et=Zn[0];return Un===et}return gn===In}):!0},On=h.findIndex(function(Dn){return Kn(Dn.accept)});if(On===-1)return;var kn=h[On],Fn=G[On]||[];if(kn.maxCount&&Fn.length>=kn.maxCount||!kn.multiple&&Fn.length>0)return;if(kn.beforeUpload){var Wn=kn.beforeUpload(Ee,[Ee]);if(Wn===!1||Wn===$e.Z.LIST_IGNORE)return;if(Wn instanceof Promise){Wn.then(function(Dn){if(!(Dn===!1||Dn===$e.Z.LIST_IGNORE)){var Vn=Dn&&Re()(Dn)==="object"?Dn:Ee;Yn(Vn)}}).catch(function(Dn){console.error("beforeUpload promise rejected:",Dn)});return}if(Wn&&Re()(Wn)==="object"){Yn(Wn);return}}Yn(Ee);function Yn(Dn){var Vn=function(){var Tn=bn.match(/\.([^.]+)$/);if(Tn)return Tn[1].toLowerCase();var Zn=gn.match(/\/([^/+]+)/);return Zn?Zn[1].toLowerCase():"bin"},zn=Date.now(),In={uid:"paste_".concat(zn,"_").concat(Math.random().toString(36).slice(2,11)),name:bn||"pasted-".concat(zn,".").concat(Vn()),size:Dn.size,type:gn,status:"uploading",percent:0,originFileObj:Dn},Hn=function(Tn){ce(function(Zn){var et=Fe()(Zn);return et[On]=(et[On]||[]).map(function(Jn){return Jn.uid===In.uid?m()(m()({},Jn),Tn):Jn}),et})};if(ce(function(Un){var Tn=Fe()(Un),Zn=Tn[On]||[];if(!kn.multiple)Tn[On]=[In];else{if(kn.maxCount&&Zn.length>=kn.maxCount)return Un;Tn[On]=[].concat(Fe()(Zn),[In])}return Tn}),gn&&gn.startsWith("image/")){var Gn=new FileReader;Gn.onload=function(Un){var Tn,Zn=(Tn=Un.target)===null||Tn===void 0?void 0:Tn.result;typeof Zn=="string"&&Hn({thumbUrl:Zn,url:Zn})},Gn.readAsDataURL(Dn)}kn.customRequest({file:Dn,onSuccess:function(Tn){Hn({status:"done",response:Tn,percent:100})},onError:function(Tn){Hn({status:"error",error:Tn})},onProgress:function(Tn){Hn({percent:Tn.percent})}},{defaultRequest:function(){}})}},De=(0,S.useMemo)(function(){var xe;return(xe=h==null?void 0:h.some(function(Ee,gn){if(Ee.required){var bn=G[gn]||[];return bn.length===0}return!1}))!==null&&xe!==void 0?xe:!1},[h,G]),we=De;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Ye,{}),(0,s.jsxs)("div",{className:N()("".concat(rn,"-wrapper"),K()(K()({},"".concat(rn,"-wrapper-focus"),$&&fe.enableFocusExpand),"".concat(rn,"-wrapper-blur"),!$&&fe.enableFocusExpand)),children:[Ue.quickInput&&(0,s.jsx)("div",{className:N()("".concat(rn,"-wrapper-header")),children:Ue.quickInput}),fe.beforeUI,(0,s.jsx)(Rn.Z,{placeholder:fe.placeholder,enableFocusExpand:fe.enableFocusExpand,value:oe,onChange:je,maxLength:fe.maxLength,disabled:jn||t.disabled,sendDisabled:we,scalable:fe==null?void 0:fe.zoomable,header:Cn,prefix:(0,s.jsxs)(s.Fragment,{children:[An,fe==null?void 0:fe.morePrefixActions]}),onSubmit:vn()(fn()().mark(function xe(){var Ee;return fn()().wrap(function(bn){for(;;)switch(bn.prev=bn.next){case 0:return bn.next=2,(fe.beforeSubmit||function(){return Promise.resolve(!0)})();case 2:if(Ee=bn.sent,Ee){bn.next=5;break}return bn.abrupt("return");case 5:fe.onSubmit({query:oe,fileList:nn}),je(""),ce(C);case 8:case"end":return bn.stop()}},xe)})),onCancel:function(){Le==null||Le(),t.setLoading(!1)},onFocus:function(){return H(!0)},onBlur:function(){return H(!1)},onPasteFile:Te,loading:t.loading}),fe.afterUI]})]})}),ln=e(69637),Je=e(10325),En,Ln=(0,v.vJ)(En||(En=n()([`
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


`])),function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls}),_n=(0,S.forwardRef)(function(L,Y){var z,W=(0,P.TQ)(function(G){return G.messages}),oe=(0,x.wv)(),je=oe.getPrefixCls,t=je("chat-anywhere"),h=(0,P.TQ)(function(G){return G.uiConfig}),C=(0,S.useState)(!1),D=R()(C,2),V=D[0],$=D[1],H=(0,Se.G)();(0,ln.Z)(function(){$(!0)},300);var ne=N()("".concat(t,"-chat"),K()({},"".concat(t,"-chat-hide"),!V)),de=!(W!=null&&W.length);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Ln,{}),(0,s.jsxs)("div",{className:ne,children:[(0,s.jsx)(Oe.Z.List,{pagination:h==null||(z=h.bubbleList)===null||z===void 0?void 0:z.pagination,smooth:!!H.loading,style:{height:0,flex:de?0:1},ref:Y.chatRef,items:W}),de?(0,s.jsx)("div",{className:"".concat(ne,"-welcome"),children:h==null?void 0:h.welcome}):null,(0,s.jsx)("div",{className:"".concat(ne,"-sender"),style:h!=null&&h.disclaimer?{marginBottom:16}:{},children:(0,s.jsx)(tn,{ref:Y.inputRef})}),(h==null?void 0:h.disclaimer)&&(0,s.jsx)(Je.Z,{style:{position:"absolute",bottom:0,width:"100%"},desc:h==null?void 0:h.disclaimer})]})]})}),hn,o=(0,v.vJ)(hn||(hn=n()([`
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

`])),function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls},function(L){return L.theme.prefixCls});function We(){var L=(0,x.wv)(),Y=L.getPrefixCls,z=Y("chat-anywhere-header"),W=(0,P.TQ)(function(C){return C.uiConfig}),oe=(0,he.x)(),je=oe.sessionListShow,t=oe.setSessionListShow,h=A();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{}),(0,s.jsxs)("div",{className:z,children:[h&&(0,s.jsx)(F.Z,{style:{marginLeft:12},bordered:!1,onClick:function(){return t(!je)},icon:je?(0,s.jsx)(Ie.Z,{}):(0,s.jsx)(r.Z,{})}),W.header]})]})}var en=e(83962),pn=S.forwardRef(function(Y,z){var W=(0,re.y)(),oe=(0,Se.G)(),je=(0,he.x)();return S.useImperativeHandle(z,function(){return m()(m()(m()({},W),oe),je)}),null}),c=["cardConfig"],ae=(0,S.forwardRef)(function(L,Y){var z,W=(0,S.useState)(0),oe=R()(W,2),je=oe[0],t=oe[1],h=L.cardConfig,C=b()(L,c),D=(0,S.useRef)(null),V=(0,S.useRef)(null),$=(0,S.useRef)(null);return S.useImperativeHandle(Y,function(){return m()(m()(m()(m()({},D.current),V.current),$.current),{},{reload:function(){t(function(ne){return ne+1})}})}),(0,S.createElement)(P.vi,m()(m()({},C),{},{key:je}),(0,s.jsxs)(en.xy,{cardConfig:h,children:[(0,s.jsx)(f,{top:(z=C.uiConfig)!==null&&z!==void 0&&z.header?(0,s.jsx)(We,{}):null,left:C.onSessionKeyChange?(0,s.jsx)(ye,{}):null,right:(0,s.jsx)(_n,{ref:{chatRef:D,inputRef:V}})}),(0,s.jsx)(pn,{ref:$})]}))})},9368:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return Rn}});var te=e(97857),m=e.n(te),I=e(19632),b=e.n(I),j=e(9783),R=e.n(j),S=e(5574),_=e.n(S),N=e(13769),x=e.n(N),y=e(93967),T=e.n(y),P=e(67294),g=e(21317),n=e(85893),v=P.createContext(null),B=function(Se){var Ne=Se.children,Ye=P.useContext(v),sn=Ye.prefixCls;return(0,n.jsx)("div",{className:T()("".concat(sn,"-group-title")),children:Ne&&(0,n.jsx)(g.default.Text,{children:Ne})})},l=B,s=e(30339),p=e(54604),f=e(45617),A=e(7654),le=e(64057),F=e(21403),E=e(42532),he=["prefixCls","info","className","direction","onClick","active","selectable","selected","onSelect","menu"],re=["key"],X={};function se(U){var Se=(0,P.useState)(X[U]),Ne=_()(Se,2),Ye=Ne[0],sn=Ne[1];return[Ye,function(Qe){for(var mn in X)X[mn]=!1;X[U]=Qe,sn(Qe)}]}var ge=P.memo(function(U){var Se,Ne=se(U.info.key),Ye=_()(Ne,2),sn=Ye[0],Qe=Ye[1],mn=(0,P.useState)(!1),cn=_()(mn,2),qe=cn[0],un=cn[1],tn=U.prefixCls,ln=U.info,Je=U.className,En=U.direction,Ln=U.onClick,_n=U.active,hn=U.selectable,o=U.selected,We=U.onSelect,en=U.menu,pn=x()(U,he),c=(0,s.Z)(pn,{aria:!0,data:!0,attr:!0}),ae=(0,P.useRef)(null),L=(0,E.Z)(ae),Y=_()(L,1),z=Y[0],W=ln.disabled,oe=T()(Je,"".concat(tn,"-item"),R()({},"".concat(tn,"-item-active"),_n&&!W),R()({},"".concat(tn,"-item-disabled"),W),R()({},"".concat(tn,"-item-timeline"),ln.timeline||hn)),je=function(){if(hn)return We==null?void 0:We(ln.key,!o);if(!W&&Ln)return Ln(ln)};return(0,n.jsxs)("li",m()(m()({ref:ae},c),{},{className:oe,onClick:je,children:[z&&ln.icon&&(0,n.jsx)("div",{className:"".concat(tn,"-icon"),children:ln.icon}),z&&(0,n.jsxs)("div",{className:"".concat(tn,"-content-wrapper"),children:[(0,n.jsxs)("div",{className:"".concat(tn,"-content"),children:[(ln.timeline||hn)&&(0,n.jsx)("div",{className:"".concat(tn,"-timeline"),children:hn?(0,n.jsx)("div",{className:"".concat(tn,"-timeline-checkbox"),onClick:function(h){return h.stopPropagation()},children:(0,n.jsx)(f.Z,{checked:o,onChange:function(){return We==null?void 0:We(ln.key,!o)}})}):(0,n.jsx)("div",{className:"".concat(tn,"-timeline-dot")})}),(0,n.jsx)(Ie,{editable:sn,setEditable:Qe,prefixCls:tn,info:ln,onEdit:en==null||(Se=en.find(function(t){return t.key==="edit"}))===null||Se===void 0?void 0:Se.onEdit}),en&&!W&&!hn&&(0,n.jsx)(A.Z,{styles:{body:{padding:4}},trigger:["click"],open:qe,onOpenChange:un,content:(0,n.jsx)("div",{className:"".concat(tn,"-menu-popover"),children:en.map(function(t){var h=t.key,C=x()(t,re),D=m()(m()({},C),{},{onClick:function($){if(h==="edit")Qe(!0);else{var H;(H=C.onClick)===null||H===void 0||H.call(C,ln)}un(!1)}});return(0,n.jsx)(Ze,m()(m()({},D),{},{info:ln}),h)})}),placement:"bottom",children:(0,n.jsx)(le.Z,{bordered:!1,icon:(0,n.jsx)(p.Z,{}),disabled:W,className:"".concat(tn,"-menu-icon"),onClick:function(h){return h.stopPropagation()}})})]}),ln.desc&&(0,n.jsx)("div",{className:"".concat(tn,"-desc"),style:ln.timeline||hn?{marginLeft:16}:{},children:ln.desc})]})]}))});function Ie(U){var Se=U.editable,Ne=U.prefixCls,Ye=U.info,sn=U.setEditable,Qe=U.onEdit,mn=(0,P.useState)(Ye.label),cn=_()(mn,2),qe=cn[0],un=cn[1],tn=(0,P.useState)(Ye.label),ln=_()(tn,2),Je=ln[0],En=ln[1];return Ye.label!==Je&&(En(Ye.label),un(Ye.label)),Se?(0,n.jsx)(r,{prefixCls:Ne,value:qe,onBlur:function(_n){var hn;if(_n===qe)return sn(!1);(hn=Qe(_n,Ye))===null||hn===void 0||hn.then(function(){un(_n)}).catch(function(){un(qe)}).finally(function(){sn(!1)})},setEditable:sn}):(0,n.jsx)("div",{className:"".concat(Ne,"-label"),children:qe})}function r(U){var Se=U.prefixCls,Ne=U.value,Ye=U.onBlur,sn=U.setEditable,Qe=(0,P.useState)(Ne),mn=_()(Qe,2),cn=mn[0],qe=mn[1],un=(0,P.useRef)();return(0,P.useEffect)(function(){un.current.focus()},[]),(0,P.useEffect)(function(){qe(Ne)},[Ne]),(0,n.jsx)("input",{ref:un,className:"".concat(Se,"-label-edit"),value:cn,onClick:function(ln){return ln.stopPropagation()},onChange:function(ln){return qe(ln.target.value)},onBlur:function(){return Ye(cn)}})}function Ze(U){var Se=U.label,Ne=U.icon,Ye=U.danger,sn=U.info,Qe=U.disabled,mn=function(qe){var un;Qe||(qe.stopPropagation(),(un=U.onClick)===null||un===void 0||un.call(U,sn))};return Ne&&Se?(0,n.jsx)(F.Z,{disabled:Qe,icon:Ne,danger:Ye,type:"text",onClick:mn,children:Se}):Ne?(0,n.jsx)(le.Z,{disabled:Qe,icon:Ne,danger:Ye,bordered:!1,onClick:mn}):Se?(0,n.jsx)(F.Z,{disabled:Qe,danger:Ye,type:"text",onClick:mn,children:Se}):null}var ye=ge,Ae=e(60869),be=e(56044),Z=e(52677),K=e.n(Z),Oe="__ungrouped",ke=function(Se){var Ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],Ye=P.useMemo(function(){if(!Se)return[!1,void 0,void 0];var qe={sort:void 0,title:void 0};return K()(Se)==="object"&&(qe=m()(m()({},qe),Se)),[!0,qe.sort,qe.title]},[Se]),sn=_()(Ye,3),Qe=sn[0],mn=sn[1],cn=sn[2];return P.useMemo(function(){if(!Qe){var qe=[{name:Oe,data:Ne,title:void 0}];return[qe,Qe]}var un=Ne.reduce(function(Je,En){var Ln=En.group||Oe;return Je[Ln]||(Je[Ln]=[]),Je[Ln].push(En),Je},{}),tn=mn?Object.keys(un).sort(mn):Object.keys(un),ln=tn.map(function(Je){return{name:Je===Oe?void 0:Je,title:cn,data:un[Je]}});return[ln,Qe]},[Ne,Se])},Fe=ke,Ke=e(68400),Re=e.n(Ke),dn=e(9053),fn,on=(0,dn.vJ)(fn||(fn=Re()([`
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
}`])),function(U){return U.theme.prefixCls},function(U){return U.theme.paddingXXS},function(U){return U.theme.prefixCls},function(U){return U.theme.paddingXL},function(U){return U.theme.prefixCls},function(U){return U.theme.colorTextSecondary},function(U){return U.theme.colorBgBase},function(U){return U.theme.colorBorder},function(U){return U.theme.colorTextSecondary},function(U){return U.theme.borderRadiusLG},function(U){return U.theme.colorBorder},function(U){return U.theme.colorFillTertiary},function(U){return U.theme.colorFillTertiary},function(U){return U.theme.prefixCls},function(U){return U.theme.prefixCls},function(U){return U.theme.colorText},function(U){return U.theme.prefixCls},function(U){return U.theme.colorTextDisabled},function(U){return U.theme.prefixCls},function(U){return U.theme.prefixCls},function(U){return U.theme.colorFillTertiary},function(U){return U.theme.colorText},function(U){return U.theme.colorText},function(U){return U.theme.fontFamily},function(U){return U.theme.fontSizeXL},function(U){return U.theme.controlHeightLG},function(U){return U.theme.controlHeightLG},function(U){return U.theme.paddingXS}),vn=["prefixCls","rootClassName","items","activeKey","defaultActiveKey","onActiveChange","selectable","selectedKeys","onSelectChange","menu","styles","classNames","groupable","className","style"],$e=function(Se){var Ne=Se.prefixCls,Ye=Se.rootClassName,sn=Se.items,Qe=Se.activeKey,mn=Se.defaultActiveKey,cn=Se.onActiveChange,qe=Se.selectable,un=Se.selectedKeys,tn=Se.onSelectChange,ln=Se.menu,Je=Se.styles,En=Je===void 0?{}:Je,Ln=Se.classNames,_n=Ln===void 0?{}:Ln,hn=Se.groupable,o=Se.className,We=Se.style,en=x()(Se,vn),pn=(0,s.Z)(en,{attr:!0,aria:!0,data:!0}),c=(0,Ae.Z)(mn,{value:Qe}),ae=_()(c,2),L=ae[0],Y=ae[1],z=Fe(hn,sn),W=_()(z,2),oe=W[0],je=W[1],t=(0,be.wv)(),h=t.direction,C=t.getPrefixCls,D=C("conversations"),V=T()(D,o,Ye,R()({},"".concat(D,"-rtl"),h==="rtl")),$=P.useRef(cn);$.current=cn;var H=P.useCallback(function(ce){var Pe;Y(ce.key),(Pe=$.current)===null||Pe===void 0||Pe.call($,ce.key)},[Y]),ne=P.useRef(un);ne.current=un;var de=P.useRef(tn);de.current=tn;var G=P.useCallback(function(ce,Pe){if(de.current){var Ue=ne.current||[],He=Pe?[].concat(b()(Ue),[ce]):Ue.filter(function(Ge){return Ge!==ce});de.current(He)}},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(on,{}),(0,n.jsx)("ul",m()(m()({},pn),{},{style:We,className:V,children:oe.map(function(ce,Pe){var Ue=ce.data.map(function(Ge,rn){var Le=qe!=null?qe:Ge.selectable,fe=Le?un?un.includes(Ge.key):Ge.selected:!1,J=tn?G:Ge.onSelect;return(0,n.jsx)(ye,{info:Ge,prefixCls:D,direction:h,className:T()(_n.item),style:En.item,menu:ln,active:L===Ge.key,selectable:Le,selected:fe,onSelect:J,onClick:H},Ge.key||"key-".concat(rn))});if(je){var He;return(0,n.jsxs)("li",{children:[(0,n.jsx)(v.Provider,{value:{prefixCls:D},children:((He=ce.title)===null||He===void 0?void 0:He.call(ce,ce.name,{components:{GroupTitle:l}}))||(0,n.jsx)(l,{children:ce.name},ce.name)}),(0,n.jsx)("ul",{className:"".concat(D,"-list"),children:Ue})]},ce.name||"key-".concat(Pe))}return Ue})}))]})},Rn=$e},24963:function(an,ee,e){"use strict";e.r(ee),e.d(ee,{Audios:function(){return Ae},DeepThink:function(){return b},DeepThinking:function(){return b},Files:function(){return g},Footer:function(){return he},FooterActions:function(){return E.p4},FooterCount:function(){return E.hw},Images:function(){return p},Interrupted:function(){return X},Text:function(){return F},Videos:function(){return Ie}});var te=e(67294),m=e(14082),I=e(85893);function b(Z){return(0,I.jsx)(m.Z,{defaultOpen:Z.data.defaultOpen!==void 0?Z.data.defaultOpen:!0,title:Z.data.title,loading:Z.data.loading,content:Z.data.content,className:Z.data.className,open:Z.data.open,autoCloseOnFinish:Z.data.autoCloseOnFinish,maxHeight:Z.data.maxHeight})}var j=e(68400),R=e.n(j),S=e(23345),_=e(50993),N=e(9053),x=e(56044),y=e(6411),T,P=(0,N.vJ)(T||(T=R()([`
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
`])),function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.borderRadius},function(Z){return Z.theme.colorWhite},function(Z){return Z.theme.motionDurationSlow},function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.prefixCls});function g(Z){var K=(0,x.wv)(),Oe=K.getPrefixCls,ke=Oe("bubble-files");return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(P,{}),(0,I.jsx)(S.Z,{className:ke,children:Z.data.map(function(Fe,Ke){var Re={name:Fe.name||Fe.filename,size:Fe.size||Fe.bytes,url:Fe.url};return(0,I.jsxs)("div",{className:"".concat(ke,"-file"),children:[(0,I.jsx)(_.Z.FileCard,{item:Re}),Re.url&&(0,I.jsx)("div",{className:"".concat(ke,"-download"),onClick:function(){window.open(Re.url,"_blank")},children:(0,I.jsx)(y.Z,{})})]},Ke)})})]})}var n=e(16494),v=e(55839),B,l=(0,N.vJ)(B||(B=R()([`
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
`])),function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.prefixCls});function s(Z){var K=(0,x.wv)(),Oe=K.getPrefixCls,ke=Oe("bubble-image");return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(l,{}),(0,I.jsx)("div",{className:"".concat(ke),children:(0,I.jsx)(n.Z,{fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==",src:Z.url,width:56,height:56,preview:{transitionName:""}})})]})}function p(Z){return(0,I.jsx)(v.ZP,{locale:{Image:{preview:""}},children:(0,I.jsx)(S.Z,{children:Z.data.map(function(K,Oe){return(0,I.jsx)(s,{url:K.url},Oe)})})})}var f=e(97857),A=e.n(f),le=e(66109);function F(Z){var K=Z.data.msgStatus==="generating";return(0,I.jsx)(le.Z,A()(A()({cursor:K},Z.data),{},{typing:Z.data.msgStatus==="generating"?Z.data.typing:!1}))}var E=e(67369);function he(Z){return(0,I.jsx)(E.ZP,A()({},Z.data))}var re=e(10146);function X(Z){return(0,I.jsx)(re.Z,A()({},Z.data))}var se=e(51794),ge;function Ie(Z){var K=(0,x.wv)().getPrefixCls("bubble-video");return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(r,{}),(0,I.jsx)(S.Z,{children:Z.data.map(function(Oe,ke){return(0,I.jsx)("div",{className:K,children:(0,I.jsx)(se.Z,{src:Oe.src,poster:Oe.poster,controls:!0})},ke)})})]})}var r=(0,N.vJ)(ge||(ge=R()([`
.`,`-bubble-video {
  width: 256px;
  height: 144px;
  border-radius: 8px;
  border: 1px solid `,`;
  overflow: hidden;
}
`])),function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.colorBorderSecondary}),Ze=e(11526),ye;function Ae(Z){var K=(0,x.wv)().getPrefixCls("bubble-audio");return(0,I.jsxs)(S.Z,{direction:"vertical",children:[(0,I.jsx)(be,{}),Z.data.map(function(Oe,ke){return(0,I.jsx)("div",{className:K,children:(0,I.jsx)(Ze.Z,{src:Oe.src})},ke)})]})}var be=(0,N.vJ)(ye||(ye=R()([`
.`,`-bubble-audio {
  background-color: `,`;
  border: 1px solid `,`;
  padding-right: 4px;
  border-radius: `,`px;
}
`])),function(Z){return Z.theme.prefixCls},function(Z){return Z.theme.colorBgBase},function(Z){return Z.theme.colorBorderSecondary},function(Z){return Z.theme.borderRadiusLG})},55031:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return le}});var te=e(56044),m=e(31382),I=e(55839),b=e(16494),j=e(33948),R=e(52253),S=e(56137),_=e(1948),N=e(61763),x=e(77900),y=e(40443),T=e(33119),P=e(4356),g=e(72816),n=e(77382),v=e(72167),B=e(74398),l=e(55094),s=e(61401),p=e(85893),f={Click:{name:"\u70B9\u51FB",icon:(0,p.jsx)(j.Z,{})},Swipe:{name:"\u6ED1\u52A8",icon:(0,p.jsx)(R.Z,{})},Type:{name:"\u8F93\u5165",icon:(0,p.jsx)(S.Z,{})},Back:{name:"\u8FD4\u56DE",icon:(0,p.jsx)(_.Z,{})},Home:{name:"\u4E3B\u9875",icon:(0,p.jsx)(N.Z,{})},Done:{name:"\u5B8C\u6210",icon:(0,p.jsx)(x.Z,{})},Wait:{name:"\u7B49\u5F85",icon:(0,p.jsx)(y.Z,{spin:!0})},click:{name:"\u70B9\u51FB",icon:(0,p.jsx)(j.Z,{})},"right click":{name:"\u53F3\u952E\u70B9\u51FB",icon:(0,p.jsx)(j.Z,{})},"open app":{name:"\u6253\u5F00\u5E94\u7528",icon:(0,p.jsx)(T.Z,{})},computer_double_click:{name:"\u53CC\u51FB",icon:(0,p.jsx)(P.Z,{})},hotkey:{name:"\u5FEB\u6377\u952E",icon:(0,p.jsx)(g.Z,{})},presskey:{name:"\u6309\u952E",icon:(0,p.jsx)(n.Z,{})},scroll:{name:"\u6EDA\u52A8",icon:(0,p.jsx)(R.Z,{})},drag:{name:"\u62D6\u62FD",icon:(0,p.jsx)(v.Z,{})},type_with_clear_enter_pos:{name:"\u8F93\u5165\u5E76\u6E05\u9664",icon:(0,p.jsx)(S.Z,{})},triple_click:{name:"\u4E09\u51FB",icon:(0,p.jsx)(B.Z,{})},drag_end:{name:"\u62D6\u62FD\u7ED3\u675F",icon:(0,p.jsx)(v.Z,{})},type:{name:"\u8F93\u5165",icon:(0,p.jsx)(S.Z,{})},hscroll:{name:"\u6C34\u5E73\u6EDA\u52A8",icon:(0,p.jsx)(l.Z,{})},done:{name:"\u5B8C\u6210",icon:(0,p.jsx)(x.Z,{})},wait:{name:"\u7B49\u5F85",icon:(0,p.jsx)(y.Z,{spin:!0})},call_user:{name:"\u547C\u53EB\u7528\u6237",icon:(0,p.jsx)(s.Z,{})}},A=f;function le(F){var E,he,re=(0,te.wv)(),X=re.getPrefixCls,se=X("operate-card");return(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:"".concat(se,"-device-action-time"),children:F.time}),(0,p.jsx)(m.Z,{header:{className:"".concat(se,"-device-action"),icon:(0,p.jsx)("div",{className:"".concat(se,"-device-action-icon"),children:(E=A[F.action])===null||E===void 0?void 0:E.icon}),title:(0,p.jsxs)("div",{className:"".concat(se,"-device-action-content"),children:[(0,p.jsxs)("div",{className:"".concat(se,"-device-action-description"),children:[(0,p.jsx)("span",{children:F.actionName||((he=A[F.action])===null||he===void 0?void 0:he.name)}),(0,p.jsx)("span",{children:F.description})]}),(0,p.jsx)("div",{className:"".concat(se,"-device-action-image"),children:(0,p.jsx)(I.ZP,{locale:{Image:{preview:""}},children:(0,p.jsx)(b.Z,{src:F.image,alt:F.description,width:"100%",height:"100%"})})})]})}})]})}},10325:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return N}});var te=e(67294),m=e(68400),I=e.n(m),b=e(9053),j,R=(0,b.vJ)(j||(j=I()([`
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
`])),function(x){return x.theme.prefixCls},function(x){return x.theme.colorTextTertiary},function(x){return x.theme.prefixCls}),S=e(56044),_=e(85893);function N(x){var y=x.desc,T=y===void 0?"AI can also make mistakes, so please check carefully and use it with caution":y,P=(0,S.wv)(),g=P.getPrefixCls,n=g("disclaimer");return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(R,{}),(0,_.jsxs)("div",{className:n,style:x.style,children:[T,x.afterLink&&(0,_.jsx)("a",{className:"".concat(n,"-after-link"),href:x.afterLink.href,target:"_blank",children:x.afterLink.text})]})]})}},80115:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return m}});var te=e(85893);function m(){return(0,te.jsx)("iframe",{srcDoc:`<html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>`})}},2534:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return B}});var te=e(67294),m=e(68400),I=e.n(m),b=e(9053),j,R=(0,b.vJ)(j||(j=I()([`
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

`])),function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.prefixCls},function(l){return l.theme.colorText},function(l){return l.theme.colorSuccess},function(l){return l.theme.colorBgBase},function(l){return l.theme.prefixCls}),S=e(56044),_=e(55839),N=e(16494),x=e(89034),y=e(36374),T=e(85893);function P(){for(var l=arguments.length,s=new Array(l),p=0;p<l;p++)s[p]=arguments[p];return s.filter(Boolean).join(" ")}var g=function(s){var p=s.speed,f=p===void 0?1:p,A=s.backgroundColor,le=A===void 0?"#b6a9f8":A,F=s.colors,E=F===void 0?["#c979ee","#ef788c","#eb7fc6","#6d67c8"]:F,he=s.ringColors,re=he===void 0?["white","blue","magenta","violet","lightyellow"]:he,X=s.className,se=X===void 0?"":X,ge=(0,te.useRef)(null);return(0,te.useEffect)(function(){if(CSS&&CSS.registerProperty)try{CSS.registerProperty({name:"--a",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--l",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--x",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--y",syntax:"<length>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--o",syntax:"<number>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:"--value",syntax:"<angle>",inherits:!0,initialValue:"0deg"}),CSS.registerProperty({name:"--width-ratio",syntax:"<number>",inherits:!0,initialValue:"0"}),CSS.registerProperty({name:"--scale",syntax:"<number>",inherits:!0,initialValue:"0"})}catch(Ie){}},[]),(0,te.useEffect)(function(){var Ie=ge.current;if(Ie){var r=function(){var Ae=Ie.getBoundingClientRect(),be=Math.min(Ae.width,Ae.height);Ie.style.setProperty("--actual-size","".concat(be,"px"))};r();var Ze=new ResizeObserver(r);return Ze.observe(Ie),function(){Ze.disconnect()}}},[]),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("style",{children:`
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
          --duration: calc(8s / `.concat(f,`);
          --ai-duration: calc(5.5s / `).concat(f,`);
          
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
          background: `).concat(le,`;
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
          background: radial-gradient(50% 50% at center, `).concat(E[0]||"#c979ee",", color-mix(in srgb, ").concat(E[0]||"#c979ee",`, transparent 30%));
          --x: calc(var(--s) * 0.04);
          width: calc(var(--s) * 0.6);
          animation-timing-function: cubic-bezier(0.12, 0.32, 0.68, 0.24);
        }

        .fluid-background-container .c2 {
          background: radial-gradient(50% 50% at center, `).concat(E[1]||"#ef788c",", color-mix(in srgb, ").concat(E[1]||"#ef788c",`, white 40%));
          width: calc(var(--s) * 0.55);
        }

        .fluid-background-container .c3 {
          background: radial-gradient(50% 50% at center, `).concat(E[2]||"#eb7fc6",`, transparent);
          width: calc(var(--s) * 0.2);
          opacity: 0.6;
          --x: calc(var(--s) * -0.04);
        }

        .fluid-background-container .c4 {
          background: `).concat(E[3]||"#6d67c8",`;
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
            `).concat(re.join(", "),`
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
      `)}),(0,T.jsxs)("div",{ref:ge,className:P("fluid-background-container",se),children:[(0,T.jsxs)("div",{className:"fluid-inner",children:[(0,T.jsx)("div",{className:"c c4",style:{"--i":0}}),(0,T.jsx)("div",{className:"c c1",style:{"--i":1}}),(0,T.jsx)("div",{className:"c c2",style:{"--i":2}}),(0,T.jsx)("div",{className:"c c3",style:{"--i":3}}),(0,T.jsx)("div",{className:"rings"})]}),(0,T.jsx)("div",{className:"glass"})]})]})},n=g,v=function(s){var p=(0,S.wv)(),f=p.getPrefixCls,A=f("image-generator"),le=s.block,F=s.skeletonText,E=s.width,he=E===void 0?320:E,re=s.height,X=re===void 0?320:re,se=s.src,ge=s.loadingText,Ie=ge===void 0?"Painting...":ge,r=s.doneText,Ze=r===void 0?"Paint Completed":r,ye=s.skeleton||(0,T.jsxs)("div",{className:"".concat(A,"-default-skeleton"),style:{width:"100%",height:"100%"},children:[(0,T.jsx)("div",{className:"".concat(A,"-default-skeleton-bg"),children:(0,T.jsx)(n,{})}),(0,T.jsxs)("div",{className:"".concat(A,"-default-skeleton-content"),children:[(0,T.jsx)("img",{className:"".concat(A,"-default-skeleton-icon"),src:"https://img.alicdn.com/imgextra/i2/O1CN01M1X8yM1MWUC7u3Go5_!!6000000001442-54-tps-72-72.apng"}),F&&(0,T.jsx)("div",{className:"".concat(A,"-default-skeleton-text"),children:F})]})]}),Ae=!se,be=le?{aspectRatio:"".concat(he,"/").concat(X)}:{width:he,height:X};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(R,{}),(0,T.jsxs)("div",{className:A,children:[(0,T.jsxs)("div",{className:"".concat(A,"-text"),children:[Ae?(0,T.jsx)(y.Z,{}):(0,T.jsx)(x.Z,{className:"".concat(A,"-text-success")}),Ae?(0,T.jsx)("span",{style:{paddingLeft:20},children:Ie}):Ze]}),(0,T.jsx)("div",{className:"".concat(A,"-wrapper"),style:be,children:Ae?ye:(0,T.jsx)(_.ZP,{locale:{Image:{preview:""}},children:(0,T.jsx)(N.Z,{width:"100%",height:"100%",src:se})})})]})]})},B=v},66109:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return pn}});var te=e(19632),m=e.n(te),I=e(97857),b=e.n(I),j=e(67294),R=e(13769),S=e.n(R),_=e(55729),N=e(68400),x=e.n(N),y=e(9053),T,P=(0,y.vJ)(T||(T=x()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.colorBorder},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorText},function(c){return c.theme.borderRadiusSM},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.borderRadiusSM},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorBgBase},function(c){return c.theme.prefixCls},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorSuccess},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.colorFillQuaternary},function(c){return c.theme.colorBorderSecondary},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.motionEaseOut},function(c){return c.theme.colorWhite},function(c){return c.theme.colorPrimary});function g(c){var ae=c.cursor,L=c.content,Y=c.animation,z=(0,j.useMemo)(function(){return Y?"":ae?ae==="dot"?" :dot:":ae==="underline"?" :underline:":" :dot:":""},[ae,L]);return L+z}var n=e(85893),v=["content","cursor","animation"];function B(c){var ae=c.content,L=c.cursor,Y=c.animation,z=S()(c,v),W=g({cursor:L,content:ae,animation:Y}),oe=(0,j.useMemo)(function(){if(Y)return{hasNextChunk:Y&&L,enableAnimation:Y&&L}},[L,Y]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P,{}),(0,n.jsx)(_.Z,b()(b()({},z),{},{content:W,streaming:oe}))]})}var l=e(5574),s=e.n(l),p=function(ae){var L=ae.content,Y=ae.typing,z=(0,j.useState)(0),W=s()(z,2),oe=W[0],je=W[1],t=(0,j.useRef)();return(0,j.useEffect)(function(){return Y?t.current=setInterval(function(){je(function(h){return h+1})},typeof Y=="number"?Y:5):t.current&&clearInterval(t.current),function(){return clearInterval(t.current)}},[Y]),Y?L.slice(0,oe):L},f=p,A=e(56044),le=e(93967),F=e.n(le),E=function(){return null},he=e(87427),re=e(96643),X=e(6411),se=e(97634),ge=e(89698),Ie=e(39536),r={javascript:"js",typescript:"ts",python:"py",ruby:"rb",rust:"rs",kotlin:"kt",csharp:"cs",markdown:"md",yaml:"yml",shell:"sh",bash:"sh",zsh:"sh",mermaid:"mmd",jsx:"jsx",tsx:"tsx"},Ze=function(ae){var L,Y=ae.className,z=ae.children,W=(Y==null||(L=Y.match(/language-(\w+)/))===null||L===void 0?void 0:L[1])||"";return typeof z!="string"?null:W==="mermaid"?(0,n.jsx)(he.Z,{header:(0,n.jsx)(ye,{lang:"mermaid",content:z}),children:z}):(0,n.jsx)(re.Z,{lang:W,header:(0,n.jsx)(ye,{lang:W,content:z}),children:z})};function ye(c){var ae=c.lang,L=c.content,Y=(0,j.useState)(!1),z=s()(Y,2),W=z[0],oe=z[1],je=(0,j.useRef)(),t=(0,A.wv)(),h=t.getPrefixCls,C=h("code-header"),D=(0,j.useCallback)(function(){var $=r[ae]||ae||"txt",H=new Blob([L],{type:"text/plain;charset=utf-8"}),ne=URL.createObjectURL(H),de=document.createElement("a");de.href=ne,de.download="code.".concat($),de.click(),URL.revokeObjectURL(ne)},[ae,L]),V=(0,j.useCallback)(function(){(0,Ie.J)(L).then(function(){clearTimeout(je.current),oe(!0),je.current=setTimeout(function(){return oe(!1)},2e3)}).catch(function(){console.warn("Copy failed")})},[L]);return(0,n.jsxs)("div",{className:C,children:[(0,n.jsx)("div",{className:"".concat(C,"-lang"),children:ae}),(0,n.jsxs)("div",{className:"".concat(C,"-actions"),children:[(0,n.jsx)(X.Z,{className:"".concat(C,"-download"),onClick:D}),W?(0,n.jsx)(se.Z,{className:"".concat(C,"-copied")}):(0,n.jsx)(ge.Z,{className:"".concat(C,"-icon"),onClick:V})]})]})}var Ae=Ze;function be(c){return(0,n.jsx)("a",{href:c.src,target:"_blank",rel:"noopener noreferrer",children:c.src})}var Z=e(55839),K=e(16494),Oe=e(85576),ke=e(36231),Fe=e(89102);function Ke(c){try{var ae=c.src,L=new URL(ae),Y=L.pathname,z=Y.endsWith(".mp4"),W=Y.endsWith(".mp3")||Y.endsWith(".wav");return W?(0,n.jsx)("audio",b()(b()({src:c.src},c),{},{controls:!0})):z?(0,n.jsx)(dn,b()({src:c.src},c)):(0,n.jsx)(Re,b()({src:c.src},c))}catch(oe){return null}}function Re(c){return(0,n.jsx)(Z.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(K.Z,b()({src:c.src},c))})}function dn(c){var ae=c.src,L=(0,j.useState)(!1),Y=s()(L,2),z=Y[0],W=Y[1],oe=(0,A.wv)(),je=oe.getPrefixCls,t=je("markdown-video");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:t,children:(0,n.jsx)("div",{className:"".concat(t,"-poster"),onClick:function(){return W(!0)},children:(0,n.jsx)(ke.Z,{className:"".concat(t,"-play")})})}),(0,n.jsx)(Oe.Z,{closeIcon:(0,n.jsx)("a",{children:(0,n.jsx)(Fe.Z,{style:{fontSize:20}})}),centered:!0,transitionName:"",footer:null,width:500,title:"",styles:{content:{padding:0}},open:z,destroyOnHidden:!0,onCancel:function(){return W(!1)},children:(0,n.jsx)("video",{controls:!0,autoPlay:!0,style:{display:"block",width:"100%"},children:(0,n.jsx)("source",{src:ae,type:"video/mp4"})})})]})}function fn(c){var ae=(0,A.wv)().getPrefixCls("markdown");return(0,n.jsx)("div",{className:ae,style:{fontSize:c.baseFontSize,lineHeight:c.baseLineHeight},children:c.content})}var on=e(79427),vn=e(55241),$e,Rn=(0,y.vJ)($e||($e=x()([`
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
`])),function(c){return c.theme.prefixCls},function(c){return c.theme.colorTextSecondary},function(c){return c.theme.colorFillSecondary},function(c){return c.theme.motionEaseOut},function(c){return c.theme.colorWhite},function(c){return c.theme.colorPrimary});function U(c){var ae=(0,A.wv)(),L=ae.getPrefixCls,Y=L("markdown-citation"),z=c["data-text"],W=c["data-url"],oe=c["data-title"],je=c["data-content"],t=je||oe,h=(0,n.jsx)("sup",{className:Y,children:z});return t&&(h=(0,n.jsx)(vn.Z,{title:oe,content:W?(0,n.jsx)("a",{href:W,rel:"noreferrer",target:"_blank",children:W}):je,children:h})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Rn,{}),h]})}function Se(c){var ae,L=((ae=c.citationsData[c["data-text"]])===null||ae===void 0?void 0:ae.render)||U;return(0,n.jsx)(L,b()({},c))}var Ne=[],Ye={};function sn(c){var ae=c.citations,L=ae===void 0?Ne:ae,Y=c.citationsMap,z=Y===void 0?Ye:Y,W=(0,j.useMemo)(function(){var h=b()({},z);return L.forEach(function(C,D){var V=D+1;h[V]=C}),[h,function(){return function(D){return(0,n.jsx)(Se,b()(b()({},D),{},{citationsData:h}))}}()]},[L,z]),oe=s()(W,2),je=oe[0],t=oe[1];return{CitationComponent:t,citationsData:je,citationsDataCount:Object.keys(je).length}}var Qe=e(30861);function mn(c){return{name:"citation",level:"inline",tokenizer:function(L){var Y=L.match(/^\[([^\]]+)\](?!\()/);if(Y){var z=Y[0].trim(),W=z==null?void 0:z.replace(/^\[([^\]]+)\]/g,"$1");if(c[W])return{type:"citation",raw:z,text:z==null?void 0:z.replace(/^\[([^\]]+)\]/g,"$1"),renderType:"component"}}},renderer:function(L){if(c&&Object.keys(c).length===0)return null;var Y=L.text,z=c==null?void 0:c[Y];return z?'<citation data-text="'.concat(Y,'" data-url="').concat(z.url,'" data-title="').concat(z.title,'" data-content="').concat(z.content,'"></citation>'):L.raw}}}var cn,qe=(0,y.vJ)(cn||(cn=x()([`
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
`])),function(c){var ae=c.theme;return ae.colorPrimary});function un(){var c=(0,A.wv)(),ae=c.getPrefixCls,L="markdown-cursor-underline";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(qe,{}),(0,n.jsx)("span",{className:F()(L,ae("markdown-cursor"))})]})}var tn=e(36374),ln=function(ae){var L=ae["data-type"];return L==="dot"?(0,n.jsx)(tn.Z,{}):L==="underline"?(0,n.jsx)(un,{}):null};function Je(){var c={cursors:{dot:"dot",underline:"underline"}},ae=Object.keys(c.cursors).map(function(z){return z.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|"),L=new RegExp(":(".concat(ae,"):")),Y=new RegExp("^".concat(L.source));return{name:"cursor",level:"inline",start:function(W){var oe;return(oe=W.match(L))===null||oe===void 0?void 0:oe.index},tokenizer:function(W,oe){var je=Y.exec(W);if(je){var t=je[1],h=c.cursors[t];if(h)return{type:"cursor",raw:je[0],name:t,cursor:h}}},renderer:function(W){var oe='<custom-cursor data-type="'.concat(W.name,'"></custom-cursor>');return oe}}}var En=e(85018),Ln=["href"];function _n(c){return c["data-footnote-ref"]===""?(0,n.jsx)(hn,b()({},c)):c.children==="\u21A9"&&c["data-footnote-backref"]===""?null:(0,n.jsx)("a",b()({},c))}function hn(c){var ae=(0,A.wv)(),L=ae.getPrefixCls,Y=L("markdown-footnote"),z=c.href,W=S()(c,Ln);return(0,n.jsx)("a",b()(b()({},W),{},{className:Y,onClick:function(){try{var je=c.id.split("-"),t=s()(je,3),h=t[0],C=t[1],D=t[2],V=document.querySelector("#footnote-".concat(D)).querySelector("a").getAttribute("href");window.open(V,"_blank")}catch($){}}}))}var o={ALLOWED_TAGS:[]};function We(){try{return new RegExp("(?<=a)b"),!0}catch(c){return!1}}var en=We(),pn=(0,j.memo)(function(c){var ae=c.baseFontSize||14,L=c.baseLineHeight||1.7,Y=f({content:c.content,typing:c.typing&&!c.animation}),z=(0,A.wv)().getPrefixCls("markdown"),W=c.raw,oe=W===void 0?!1:W,je=c.allowHtml,t=je===void 0?!1:je,h=sn({citations:c.citations,citationsMap:c.citationsMap}),C=h.citationsData,D=h.citationsDataCount,V=h.CitationComponent,$=(0,j.useMemo)(function(){return b()({code:Ae,style:E,script:E,img:c.disableImage?be:Ke,citation:V,"custom-cursor":ln,a:_n},c.components)},[c.disableImage,V,c.components]),H=(0,j.useMemo)(function(){return{ADD_TAGS:["custom-cursor","citation"]}},[]),ne=(0,j.useMemo)(function(){var rn=(0,Qe.Z)();rn.push(Je()),D>0&&rn.push(mn(C));var Le=(0,En.Z)({sectionClass:"".concat(z,"-footnotes")});return rn.push.apply(rn,m()(Le.extensions)),{extensions:rn,walkTokens:Le.walkTokens}},[D,C]),de=ne.extensions,G=ne.walkTokens,ce=(0,j.useMemo)(function(){return b()({extensions:de,walkTokens:G},!t&&{renderer:{html:function(Le){var fe=Le.text||Le.raw||"";return fe.replace(/</g,"&lt;").replace(/>/g,"&gt;")}}})},[de,t]),Pe=Y||"",Ue=(0,n.jsx)(fn,{content:Pe,baseFontSize:ae,baseLineHeight:L}),He=(0,j.useCallback)(function(){for(var rn=arguments.length,Le=new Array(rn),fe=0;fe<rn;fe++)Le[fe]=arguments[fe];return console.error(Le),(0,n.jsx)(fn,{content:Pe,baseFontSize:ae,baseLineHeight:L})},[Pe,ae,L]),Ge=(0,j.useMemo)(function(){return{fontSize:ae,lineHeight:L}},[ae,L]);return oe||!en?Ue:(0,n.jsx)(on.SV,{fallbackRender:He,children:(0,n.jsx)(B,{dompurifyConfig:H,cursor:c.cursor,animation:c.animation,components:$,style:Ge,openLinksInNewTab:!0,className:F()(z,c.className),content:Pe,config:ce})})})},36374:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return x}});var te=e(68400),m=e.n(te),I=e(56044),b=e(9053),j=e(93967),R=e.n(j),S=e(85893),_,N=(0,b.vJ)(_||(_=m()([`
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
`])),function(y){return y.theme.prefixCls},function(y){return y.theme.colorText},function(y){return y.theme.colorText});function x(){var y=(0,I.wv)(),T=y.getPrefixCls,P=T("markdown-cursor-dot");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(N,{}),(0,S.jsxs)("span",{className:R()(P,T("markdown-cursor")),children:[(0,S.jsx)("span",{style:{opacity:0,marginLeft:"-.75em"},children:"_"}),(0,S.jsx)("span",{className:"".concat(P,"-dot1")}),(0,S.jsx)("span",{className:"".concat(P,"-dot2")})]})]})}},12181:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return A}});var te=e(5574),m=e.n(te),I=e(15009),b=e.n(I),j=e(99289),R=e.n(j),S=e(68400),_=e.n(S),N=e(41469),x=e(2093),y=e(9361),T=e(96486),P=e.n(T),g=e(67294),n=e(56044),v=e(9053),B=e(85893),l,s=(0,v.vJ)(l||(l=_()([`
.`,`-mermaid {
  &-preview img {
    background: `,`;
  }
}
`])),function(le){return le.theme.prefixCls},function(le){return le.theme.colorBgBase}),p,f=function(){var le=R()(b()().mark(function F(){return b()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:if(!p){he.next=2;break}return he.abrupt("return",p);case 2:return p=Promise.resolve().then(e.bind(e,76637)).then(function(re){return re.default}),he.abrupt("return",p);case 4:case"end":return he.stop()}},F)}));return function(){return le.apply(this,arguments)}}();function A(le){var F=le.content,E=le.width,he=le.height,re=(0,n.wv)(),X=re.theme,se=re.getPrefixCls,ge=se("mermaid"),Ie=(0,g.useMemo)(function(){return{theme:(X==null?void 0:X.algorithm)===y.Z.darkAlgorithm?"dark":"default",securityLevel:"loose",startOnLoad:!1}},[X==null?void 0:X.algorithm,X==null?void 0:X.token.fontFamily]),r=(0,g.useState)(""),Ze=m()(r,2),ye=Ze[0],Ae=Ze[1],be=(0,g.useState)(),Z=m()(be,2),K=Z[0],Oe=Z[1],ke=(0,g.useId)(),Fe=(0,T.kebabCase)("mermaid-".concat(ke));return(0,x.Z)(R()(b()().mark(function Ke(){var Re,dn,fn,on;return b()().wrap(function($e){for(;;)switch($e.prev=$e.next){case 0:return $e.prev=0,$e.next=3,f();case 3:if(Re=$e.sent,Re){$e.next=7;break}return Ae(F),$e.abrupt("return");case 7:return $e.next=9,Re.parse(F);case 9:if(dn=$e.sent,!dn){$e.next=19;break}return Re.initialize(Ie),$e.next=14,Re.render(Fe,F);case 14:fn=$e.sent,on=fn.svg,Ae(on),$e.next=20;break;case 19:throw new Error("Invalid Mermaid syntax");case 20:$e.next=26;break;case 22:$e.prev=22,$e.t0=$e.catch(0),ye||console.error("Mermaid parse error: ",$e.t0),Ae(ye||"");case 26:case"end":return $e.stop()}},Ke,null,[[0,22]])})),[F,Ie]),(0,g.useEffect)(function(){if(ye){var Ke=new Blob([ye],{type:"image/svg+xml"}),Re=URL.createObjectURL(Ke);return Oe(Re),function(){URL.revokeObjectURL(Re)}}},[ye]),K?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(s,{}),(0,B.jsx)(N.Z,{className:ge,src:K,alt:"mermaid",width:E,height:he,preview:{rootClassName:"".concat(ge,"-preview")}})]}):null}},31382:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return p}});var te=e(9783),m=e.n(te),I=e(5574),b=e.n(I),j=e(67294),R=e(56044),S=e(68400),_=e.n(S),N=e(9053),x,y=(0,N.vJ)(x||(x=_()([`
.`,`-operate-card {
  width: 100%;

  &-simple-collapsed {
    width: auto;
    display: inline-flex;
    background-color: transparent;

    .`,`-operate-card-header {
      padding: 0;
      height: auto;
    }
  }
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
`])),function(f){return f.theme.prefixCls},function(f){return f.theme.prefixCls},function(f){return f.theme.borderRadiusLG},function(f){return f.theme.colorFillTertiary},function(f){return f.theme.colorText},function(f){return f.theme.colorTextTertiary},function(f){return f.theme.prefixCls},function(f){return f.theme.prefixCls},function(f){return f.theme.colorBorderSecondary},function(f){return f.theme.colorTextTertiary},function(f){return f.theme.colorText},function(f){return f.theme.colorTextTertiary},function(f){return f.theme.colorText},function(f){return f.theme.colorBorderSecondary},function(f){return f.theme.colorTextSecondary},function(f){return f.theme.colorText},function(f){return f.theme.colorBorderSecondary},function(f){return f.theme.colorTextTertiary},function(f){return f.theme.colorBorderSecondary},function(f){return f.theme.colorBgBase},function(f){return f.theme.colorFillSecondary},function(f){return f.theme.colorText},function(f){return f.theme.colorTextSecondary},function(f){return f.theme.colorBorderSecondary},function(f){return f.theme.colorBorderSecondary},function(f){return f.theme.colorBgBase},function(f){return f.theme.colorTextSecondary},function(f){return f.theme.prefixCls},function(f){return f.theme.colorTextSecondary},function(f){return f.theme.colorTextSecondary},function(f){return f.theme.colorPrimary},function(f){return f.theme.colorTextSecondary},function(f){return f.theme.colorFillTertiary},function(f){return f.theme.colorFillTertiary},function(f){return f.theme.colorFillQuaternary},function(f){return f.theme.colorTextTertiary}),T=e(93967),P=e.n(T),g=e(28387),n=e(9838),v=e(64057),B=e(85893);function l(f){var A=(0,R.wv)(),le=A.getPrefixCls,F=le("operate-card");return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)("div",{className:"".concat(F,"-line-body"),children:f.children})})}function s(f){var A,le=(0,R.wv)(),F=le.getPrefixCls,E=F("operate-card"),he=(0,j.useState)(((A=f.body)===null||A===void 0?void 0:A.defaultOpen)||!1),re=b()(he,2),X=re[0],se=re[1];return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(y,{}),(0,B.jsxs)("div",{className:P()(E,m()({},"".concat(E,"-simple-collapsed"),f.header.simple&&!X)),children:[(0,B.jsxs)("div",{className:P()("".concat(E,"-header"),f.header.className,m()({},"".concat(E,"-header-has-body"),f.body)),onClick:function(){f.body&&se(!X)},children:[(0,B.jsx)("div",{className:"".concat(E,"-header-icon"),children:f.header.icon}),typeof f.header.title=="string"?(0,B.jsx)("div",{className:"".concat(E,"-header-title"),children:f.header.title}):f.header.title,f.header.description&&(0,B.jsx)("div",{className:"".concat(E,"-header-description"),children:f.header.description}),f.body&&(0,B.jsx)(v.Z,{size:"small",bordered:!1,className:"".concat(E,"-header-arrow"),icon:X?(0,B.jsx)(g.Z,{}):(0,B.jsx)(n.Z,{})})]}),f.body&&X&&(0,B.jsx)("div",{className:"".concat(E,"-body"),children:f.body.children})]})]})}s.LineBody=l;var p=s},85762:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return l}});var te=e(5574),m=e.n(te),I=e(56044),b=e(31382),j=e(37303),R=e(64057),S=e(28387),_=e(9838),N=e(48095),x=e(50104),y=e(55839),T=e(16494),P=e(86250),g=e(67294),n=e(85893);function v(s){var p=s.images,f=(0,I.wv)(),A=f.getPrefixCls,le=A("operate-card");return(0,n.jsx)(y.ZP,{locale:{Image:{preview:""}},children:(0,n.jsx)(T.Z.PreviewGroup,{children:p.map(function(F,E){return(0,n.jsx)(T.Z,{src:F,width:44,height:44},E)})})})}function B(s){var p=s.item,f=(0,g.useState)(!1),A=m()(f,2),le=A[0],F=A[1],E=(0,I.wv)(),he=E.getPrefixCls,re=he("operate-card");return(0,n.jsxs)("div",{className:"".concat(re,"-rag-item"),children:[(0,n.jsxs)("div",{className:"".concat(re,"-rag-item-title"),onClick:function(){F(!le)},children:[(0,n.jsx)("span",{children:p.title}),(0,n.jsx)("span",{style:{flex:1}}),p.score?(0,n.jsxs)(j.Z,{color:"mauve",size:"small",className:"".concat(re,"-rag-item-score"),children:["\u5F97\u5206 ",(0,n.jsx)("b",{children:p.score})]}):null,(0,n.jsx)(R.Z,{bordered:!1,size:"small",icon:le?(0,n.jsx)(S.Z,{}):(0,n.jsx)(_.Z,{})})]}),le&&(0,n.jsxs)("div",{className:"".concat(re,"-rag-item-content"),children:[(0,n.jsx)("div",{className:"".concat(re,"-rag-item-content-text"),children:p.content}),p.images&&(0,n.jsx)("div",{className:"".concat(re,"-rag-item-images"),children:(0,n.jsx)(v,{images:p.images})}),p.link?(0,n.jsx)("a",{onClick:function(){window.open(p.link,"_blank")},className:"".concat(re,"-rag-item-footer"),href:p.link,target:"_blank",children:p.footer}):(0,n.jsx)("div",{className:"".concat(re,"-rag-item-footer"),children:p.footer})]})]})}function l(s){var p=s.title,f=p===void 0?"\u77E5\u8BC6\u5E93\u68C0\u7D22":p,A=s.subTitle,le=s.defaultOpen,F=le===void 0?!0:le,E=s.placeholder,he=E===void 0?"\u672A\u67E5\u8BE2\u5230\u4E0E\u63D0\u95EE\u76F8\u5173\u77E5\u8BC6\u5E93":E,re=s.images,X=s.query,se=s.filters,ge=(0,I.wv)(),Ie=ge.getPrefixCls,r=Ie("operate-card"),Ze=(0,n.jsxs)(b.Z.LineBody,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(r,"-rag-group-title"),children:"\u68C0\u7D22 Query"}),(0,n.jsx)("div",{className:"".concat(r,"-rag-group-content"),children:X})]}),re!=null&&re.length?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(r,"-rag-group-title"),children:"\u68C0\u7D22\u56FE\u7247"}),(0,n.jsx)("div",{className:"".concat(r,"-rag-group-content ").concat(r,"-rag-group-content-images"),children:(0,n.jsx)(v,{images:re})})]}):null,se?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(r,"-rag-group-title"),children:"\u8FC7\u6EE4\u6761\u4EF6"}),(0,n.jsx)("div",{className:"".concat(r,"-rag-group-content"),children:se})]}):null,s.list.length?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"".concat(r,"-rag-group-title"),children:"Output"}),s.list.map(function(ye,Ae){return(0,n.jsx)(B,{item:ye},Ae)})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"".concat(r,"-rag-group-title"),children:"Output"}),(0,n.jsxs)(P.Z,{align:"center",justify:"center",gap:8,className:"".concat(r,"-rag-empty-placeholder"),children:[(0,n.jsx)(N.Z,{}),(0,n.jsx)("span",{children:he})]})]})]});return(0,n.jsx)(b.Z,{header:{icon:(0,n.jsx)(x.Z,{}),title:f,description:A},body:{defaultOpen:F,children:(0,n.jsx)("div",{className:"".concat(r,"-rag-children"),children:Ze})}})}},79323:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return R}});var te=e(56044),m=e(31382),I=e(40443),b=e(33593),j=e(85893);function R(S){var _=(0,te.wv)(),N=_.getPrefixCls,x=S.defaultOpen,y=x===void 0?!0:x,T=S.loading,P=T===void 0?!1:T,g=N("operate-card");return(0,j.jsx)(m.Z,{header:{icon:P?(0,j.jsx)(I.Z,{spin:!0}):(0,j.jsx)(b.Z,{}),title:S.title,description:S.subTitle},body:{defaultOpen:P?y:!1,children:(0,j.jsx)(m.Z.LineBody,{children:(0,j.jsx)("div",{className:"".concat(g,"-thinking"),children:S.content})})}},P.toString())}},6874:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return y}});var te=e(9783),m=e.n(te),I=e(56044),b=e(31382),j=e(41775),R=e(77900),S=e(40443),_=e(93967),N=e.n(_),x=e(85893);function y(T){var P=(0,I.wv)(),g=P.getPrefixCls,n=g("operate-card"),v=T.title,B=v===void 0?"Task List":v,l=T.list.filter(function(s){return s.status==="done"}).length;return(0,x.jsx)(b.Z,{header:{icon:(0,x.jsx)(j.Z,{}),title:B,description:"\xB7 ".concat(l?l+" of ":""," ").concat(T.list.length)},body:{defaultOpen:T.defaultOpen,children:(0,x.jsx)("div",{className:"".concat(n,"-todo-list"),children:T.list.map(function(s){return(0,x.jsxs)("div",{className:N()(m()(m()({},"".concat(n,"-todo-list-item"),!0),"".concat(n,"-todo-list-item-").concat(s.status),!0)),children:[(0,x.jsx)("div",{className:"".concat(n,"-todo-list-item-icon"),children:{done:(0,x.jsx)(R.Z,{}),todo:(0,x.jsx)(R.Z,{}),running:(0,x.jsx)(S.Z,{spin:!0})}[s.status]}),(0,x.jsx)("div",{className:"".concat(n,"-todo-list-item-title"),style:{textDecoration:s.status==="done"?"line-through":"none"},children:s.title})]},s.title)})})}})}},85786:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return n}});var te=e(5574),m=e.n(te),I=e(56044),b=e(31382),j=e(97634),R=e(89698),S=e(40443),_=e(78598),N=e(64057),x=e(4146),y=e(39536),T=e(67294),P=e(85893);function g(v){var B=(0,I.wv)(),l=B.getPrefixCls,s=l("operate-card"),p=v.expandEnabled,f=p===void 0?!0:p,A=v.language,le=A===void 0?"json":A,F=typeof v.content=="string"?v.content:JSON.stringify(v.content),E=(0,T.useState)(!1),he=m()(E,2),re=he[0],X=he[1],se=(0,T.useState)(f!==!0),ge=m()(se,2),Ie=ge[0],r=ge[1],Ze=(0,T.useRef)(null);return(0,P.jsxs)("div",{className:"".concat(s,"-tool-call-block"),children:[(0,P.jsxs)("div",{className:"".concat(s,"-tool-call-block-header"),onClick:function(){f===!0&&r(function(Ae){return!Ae})},children:[(0,P.jsx)("span",{className:"".concat(s,"-tool-call-block-title"),children:v.title}),(0,P.jsx)("div",{className:"".concat(s,"-tool-call-block-extra"),onClick:function(Ae){return Ae.stopPropagation()},children:(0,P.jsx)(N.Z,{size:"small",style:{marginRight:"-6px"},icon:re?(0,P.jsx)(j.Z,{}):(0,P.jsx)(R.Z,{}),bordered:!1,onClick:function(){(0,y.J)(F).then(function(){clearTimeout(Ze.current),X(!0),Ze.current=setTimeout(function(){X(!1)},2e3)}).catch(function(){console.warn("Copy failed")})}})})]}),Ie&&(0,P.jsx)("div",{className:"".concat(s,"-tool-call-block-content"),children:(0,P.jsx)(x.ZP,{language:le,value:F,readOnly:!0,basicSetup:{lineNumbers:!1,foldGutter:!1}})})]})}function n(v){var B,l,s=v.title,p=s===void 0?"Call Tool":s,f=v.subTitle,A=v.defaultOpen,le=A===void 0?!0:A,F=v.loading,E=F===void 0?!1:F,he=v.simple,re=he===void 0?!1:he;return(0,P.jsx)(b.Z,{header:{icon:E?(0,P.jsx)(S.Z,{spin:!0}):(0,P.jsx)(_.Z,{}),title:p,description:f,simple:re},body:{defaultOpen:le,children:(0,P.jsxs)(b.Z.LineBody,{children:[(0,P.jsx)(g,{title:"Input",content:v.input,expandEnabled:!re,language:(B=v.inputBlock)===null||B===void 0?void 0:B.language}),(0,P.jsx)(g,{title:"Output",content:v.output,expandEnabled:!re,language:(l=v.outputBlock)===null||l===void 0?void 0:l.language})]})}})}},69610:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return N}});var te=e(9783),m=e.n(te),I=e(56044),b=e(31382),j=e(9229),R=e(93967),S=e.n(R),_=e(85893);function N(x){var y=(0,I.wv)(),T=y.getPrefixCls,P=T("operate-card"),g=x.title,n=g===void 0?"\u8054\u7F51\u641C\u7D22":g,v=x.subTitle;return(0,_.jsx)(b.Z,{header:{icon:(0,_.jsx)(j.Z,{}),title:n,description:v},body:{defaultOpen:!0,children:(0,_.jsx)(b.Z.LineBody,{children:x.list.map(function(B){return(0,_.jsxs)("div",{className:S()(m()({},"".concat(P,"-web-search-item"),!0)),onClick:function(){window.open(B.link,"_blank")},children:[(0,_.jsx)("img",{className:"".concat(P,"-web-search-item-icon"),src:B.icon,alt:B.title}),(0,_.jsx)("div",{className:"".concat(P,"-web-search-item-title"),children:B.title}),B.subTitle&&(0,_.jsx)("div",{className:"".concat(P,"-web-search-item-subTitle"),children:B.subTitle})]},B.title)})})}})}},56809:function(an,ee,e){"use strict";e.d(ee,{B4:function(){return m.Z},BI:function(){return te.Z},Sn:function(){return j.Z},fz:function(){return b.Z},x4:function(){return I.Z}});var te=e(79323),m=e(6874),I=e(85786),b=e(69610),j=e(85762)},83962:function(an,ee,e){"use strict";e.d(ee,{HJ:function(){return _},NR:function(){return R},xy:function(){return S}});var te=e(97857),m=e.n(te),I=e(67294),b=e(24963),j=e(85893),R=(0,I.createContext)(void 0),S=function(x){return(0,j.jsx)(R.Provider,{value:x.cardConfig,children:x.children})},_=function(){var x=I.useContext(R);return I.useMemo(function(){return m()(m()({},b),x)},[x])}},92049:function(an,ee,e){"use strict";e.d(ee,{R:function(){return b},bN:function(){return j}});var te=e(67294),m=e(85893),I=(0,te.createContext)(void 0),b=function(S){return(0,m.jsx)(I.Provider,{value:S,children:S.children})},j=function(){var S=te.useContext(I);return S||{}}},56044:function(an,ee,e){"use strict";e.d(ee,{wv:function(){return S}});var te=e(21766),m=e(67294),I=e(83962),b=e(92049),j=e(85893),R=function(N){var x=N.children,y=N.cardConfig,T=N.markdown;return(0,j.jsx)(b.R,{markdown:T,children:(0,j.jsx)(I.xy,{cardConfig:y,children:x})})};function S(){var _=m.useContext(te.ZP.ConfigContext);return _}ee.ZP=R},44294:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return P},a:function(){return x}});var te=e(97857),m=e.n(te),I=e(24772),b=e(83622),j=e(93967),R=e.n(j),S=e(29372),_=e(67294),N=e(85893),x=_.createContext({}),y=function(){return{height:0}},T=function(n){return{height:n.scrollHeight}};function P(g){var n=g.title,v=g.onOpenChange,B=g.open,l=g.children,s=g.className,p=g.style,f=g.classNames,A=f===void 0?{}:f,le=g.styles,F=le===void 0?{}:le,E=g.closable,he=g.forceRender,re=_.useContext(x),X=re.prefixCls,se="".concat(X,"-header");return(0,N.jsx)(S.ZP,{motionEnter:!0,motionLeave:!0,motionName:"".concat(se,"-motion"),leavedClassName:"".concat(se,"-motion-hidden"),onEnterStart:y,onEnterActive:T,onLeaveStart:T,onLeaveActive:y,visible:B,forceRender:he,children:function(Ie){var r=Ie.className,Ze=Ie.style;return(0,N.jsxs)("div",{className:R()(se,r,s),style:m()(m()({},Ze),p),children:[(E!==!1||n)&&(0,N.jsxs)("div",{className:R()("".concat(se,"-header"),A.header),style:m()({},F.header),children:[(0,N.jsx)("div",{className:"".concat(se,"-title"),children:n}),E!==!1&&(0,N.jsx)("div",{className:"".concat(se,"-close"),children:(0,N.jsx)(b.ZP,{type:"text",icon:(0,N.jsx)(I.Z,{}),size:"small",onClick:function(){v==null||v(!B)}})})]}),l&&(0,N.jsx)("div",{className:R()("".concat(se,"-content"),A.content),style:m()({},F.content),children:l})]})}})}},66672:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return je}});var te=e(19632),m=e.n(te),I=e(97857),b=e.n(I),j=e(9783),R=e.n(j),S=e(5574),_=e.n(S),N=e(13769),x=e.n(N),y=e(48045),T=e(86250),P=e(93967),g=e.n(P),n=e(56790),v=e(30339),B=e(94787),l=e(67294),s=e(11154),p=e(83204);function f(t,h){return(0,l.useImperativeHandle)(t,function(){var C=h(),D=C.nativeElement;return new Proxy(D,{get:function($,H){return C[H]?C[H]:Reflect.get($,H)}})})}var A=e(56044),le=e(44294),F=e(64057),E=e(85893),he=["className","action","onClick"],re=l.createContext(null);function X(t){var h=t.className,C=t.action,D=t.onClick,V=x()(t,he),$=l.useContext(re),H=$.prefixCls,ne=$.disabled,de=$[C],G=ne||V.disabled||$["".concat(C,"Disabled")]||!1;return(0,E.jsx)(F.Z,b()(b()({bordered:!1},V),{},{disabled:G,onClick:function(Pe){G||(de&&de(),D&&D(Pe))},className:g()(H,h,R()({},"".concat(H,"-disabled"),G))}))}var se=l.forwardRef(X),ge=e(69291);function Ie(t,h){return(0,E.jsx)(se,b()(b()({icon:(0,E.jsx)(ge.Z,{})},t),{},{action:"onClear",ref:h}))}var r=l.forwardRef(Ie),Ze=(0,l.memo)(function(t){var h=t.className;return(0,E.jsxs)("svg",{color:"currentColor",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:h,children:[(0,E.jsx)("title",{children:"Stop Loading"}),(0,E.jsx)("rect",{fill:"currentColor",height:"250",rx:"24",ry:"24",width:"250",x:"375",y:"375"})]})}),ye=Ze,Ae=e(67055),be=["className","loading"];function Z(t,h){var C=l.useContext(re),D=C.prefixCls,V=t.className,$=t.loading,H=x()(t,be),ne=(0,E.jsx)(se,b()(b()({icon:(0,E.jsx)(ye,{className:"".concat(D,"-loading-icon")}),type:"primary",variant:"text"},H),{},{className:g()(V,"".concat(D,"-loading-button")),action:"onCancel",ref:h}));return typeof t.loading=="string"?(0,E.jsx)(Ae.Z,{title:t.loading,children:ne}):ne}var K=l.forwardRef(Z),Oe=e(43103);function ke(t,h){return(0,E.jsx)(se,b()(b()({icon:(0,E.jsx)(Oe.Z,{}),type:"primary"},t),{},{action:"onSend",ref:h}))}var Fe=l.forwardRef(ke),Ke=e(36763),Re=e(21474),dn=1e3,fn=4,on=140,vn=on/2,$e=250,Rn=500,U=.8;function Se(t){var h=t.className;return(0,E.jsxs)("svg",{color:"currentColor",viewBox:"0 0 ".concat(dn," ").concat(dn),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:h,children:[(0,E.jsx)("title",{children:"Speech Recording"}),Array.from({length:fn}).map(function(C,D){var V=(dn-on*fn)/(fn-1),$=D*(V+on),H=dn/2-$e/2,ne=dn/2-Rn/2;return(0,E.jsxs)("rect",{fill:"currentColor",rx:vn,ry:vn,height:$e,width:on,x:$,y:H,children:[(0,E.jsx)("animate",{attributeName:"height",values:"".concat($e,"; ").concat(Rn,"; ").concat($e),keyTimes:"0; 0.5; 1",dur:"".concat(U,"s"),begin:"".concat(U/fn*D,"s"),repeatCount:"indefinite"}),(0,E.jsx)("animate",{attributeName:"y",values:"".concat(H,"; ").concat(ne,"; ").concat(H),keyTimes:"0; 0.5; 1",dur:"".concat(U,"s"),begin:"".concat(U/fn*D,"s"),repeatCount:"indefinite"})]},D)})]})}function Ne(t,h){var C=l.useContext(re),D=C.speechRecording,V=C.onSpeechDisabled,$=C.prefixCls,H=null;return D?H=(0,E.jsx)(Se,{className:"".concat($,"-recording-icon")}):V?H=(0,E.jsx)(Ke.Z,{}):H=(0,E.jsx)(Re.Z,{}),(0,E.jsx)(se,b()(b()({icon:H,variant:"text"},t),{},{action:"onSpeech",ref:h}))}var Ye=l.forwardRef(Ne),sn=e(68400),Qe=e.n(sn),mn=e(9053),cn,qe=(0,mn.vJ)(cn||(cn=Qe()([`
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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.colorBgBase},function(t){return t.theme.borderRadiusLG},function(t){return t.theme.colorBorderSecondary},function(t){return t.theme.motionDurationSlow},function(t){return t.theme.lineWidth},function(t){return t.theme.colorPrimaryHover},function(t){return t.theme.lineWidth},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.colorBgContainerDisabled},function(t){return t.theme.prefixCls},function(t){return t.theme.prefixCls},function(t){return t.theme.paddingXS},function(t){return t.theme.colorTextTertiary},function(t){return"var(--".concat(t.theme.prefixCls,"-color-fill-disable)")},function(t){return t.theme.controlHeight},function(t){return t.theme.controlHeight},function(t){return t.theme.prefixCls}),un=qe,tn=e(52677),ln=e.n(tn),Je;!Je&&typeof window!="undefined"&&(Je=window.SpeechRecognition||window.webkitSpeechRecognition);function En(t,h){var C=(0,n.zX)(t),D=l.useMemo(function(){return ln()(h)==="object"?[h.recording,h.onRecordingChange,typeof h.recording=="boolean"]:[void 0,void 0,!1]},[h]),V=_()(D,3),$=V[0],H=V[1],ne=V[2],de=l.useState(null),G=_()(de,2),ce=G[0],Pe=G[1];l.useEffect(function(){if(typeof navigator!="undefined"&&"permissions"in navigator){var Xe=null;return navigator.permissions.query({name:"microphone"}).then(function(Cn){Pe(Cn.state),Cn.onchange=function(){Pe(this.state)},Xe=Cn}),function(){Xe&&(Xe.onchange=null)}}},[]);var Ue=Je&&ce!=="denied",He=l.useRef(null),Ge=(0,n.C8)(!1,{value:$}),rn=_()(Ge,2),Le=rn[0],fe=rn[1],J=l.useRef(!1),An=function(){if(Ue&&!He.current){var Cn=new Je;Cn.onstart=function(){fe(!0)},Cn.onend=function(){fe(!1)},Cn.onresult=function(nn){if(!J.current){var jn,Te=(jn=nn.results)===null||jn===void 0||(jn=jn[0])===null||jn===void 0||(jn=jn[0])===null||jn===void 0?void 0:jn.transcript;C(Te)}J.current=!1},He.current=Cn}},xn=(0,n.zX)(function(Xe){Xe&&!Le||(J.current=Xe,ne?H==null||H(!Le):(An(),He.current&&(Le?(He.current.stop(),H==null||H(!1)):(He.current.start(),H==null||H(!0)))))});return[Ue,xn,Le]}var Ln=e(89102),_n,hn=(0,mn.vJ)(_n||(_n=Qe()([`
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

`])),function(t){return t.theme.prefixCls},function(t){return t.theme.borderRadius},function(t){return t.theme.colorBorderSecondary},function(t){return t.theme.colorTextSecondary},function(t){return t.theme.colorPrimary},function(t){return t.theme.colorPrimary},function(t){return t.theme.colorBorderSecondary},function(t){return t.theme.borderRadiusLG},function(t){return t.theme.borderRadiusLG},function(t){return t.theme.colorFillTertiary},function(t){return t.theme.colorTextSecondary});function o(t){var h=(0,A.wv)(),C=h.getPrefixCls,D=C("sender-mode-select"),V=t.value,$=t.onChange,H=(0,l.useMemo)(function(){var de=t.options.find(function(G){return G.value===V})||{};return de},[t.value]),ne=(0,E.jsx)(Ln.Z,{onClick:function(){return $(void 0)},style:{cursor:"pointer",fontSize:20}});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(hn,{}),(0,E.jsxs)("div",{className:D,style:t.style,children:[(0,E.jsx)("div",{className:"".concat(D,"-options ").concat(V?"".concat(D,"-hide"):""),children:t.options.map(function(de){var G=(0,E.jsx)(We,b()({onClick:function(){return $(de.value)},className:"".concat(D,"-option")},de),de.value);return G})}),(0,E.jsx)("div",{className:"".concat(D,"-display ").concat(V?"":"".concat(D,"-hide")),children:(0,E.jsxs)("div",{className:"".concat(D,"-display-flex"),children:[(0,E.jsx)(We,b()(b()({},H),{},{label:(H==null?void 0:H.selectedLabel)||(H==null?void 0:H.label),className:"".concat(D,"-display-label")})),t.desc&&(0,E.jsx)("div",{className:"".concat(D,"-display-desc"),children:t.desc}),t.closeTip?(0,E.jsx)(Ae.Z,{title:t.closeTip,children:ne}):ne]})})]})]})}function We(t){var h=(0,E.jsxs)("div",{className:t.className,onClick:t.onClick,children:[t.icon,t.label]});return t.tooltip?(0,E.jsx)(Ae.Z,{title:t.tooltip,placement:"topLeft",children:h}):h}var en=e(85441),pn=e(32485),c,ae=(0,mn.vJ)(c||(c=Qe()([`
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
`])),function(t){return t.theme.prefixCls},function(t){return t.theme.colorBorderSecondary},function(t){return t.theme.borderRadiusLG},function(t){return t.theme.borderRadiusLG},function(t){return t.theme.colorFillTertiary});function L(t){var h=t.leftChildren,C=t.rightChildren,D=t.children,V=(0,A.wv)().getPrefixCls("sender-before-ui-container"),$=(0,l.useMemo)(function(){return h?(0,E.jsx)("div",{className:"".concat(V,"-left"),children:h}):null},[h]),H=(0,l.useMemo)(function(){return C?(0,E.jsx)("div",{className:"".concat(V,"-right"),children:C}):null},[C]);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(ae,{}),(0,E.jsx)("div",{className:V,children:(0,E.jsx)("div",{className:"".concat(V,"-content"),children:(0,E.jsx)("div",{className:"".concat(V,"-content-children"),children:D||(0,E.jsxs)(E.Fragment,{children:[$,H]})})})})]})}var Y=["styles","classNames","className","rootClassName","style","defaultValue","value","readOnly","enableFocusExpand","sendDisabled","submitType","onSubmit","loading","onCancel","onChange","onFocus","onBlur","actions","onKeyPress","onKeyDown","disabled","header","onPaste","allowSpeech","onPasteFile","components","initialRows","scalable"];function z(t,h,C){return(0,B.Z)(t,h)||C}var W=l.forwardRef(function(t,h){var C=t,D=C.styles,V=D===void 0?{}:D,$=C.classNames,H=$===void 0?{}:$,ne=C.className,de=C.rootClassName,G=C.style,ce=C.defaultValue,Pe=C.value,Ue=C.readOnly,He=C.enableFocusExpand,Ge=He===void 0?!1:He,rn=C.sendDisabled,Le=rn===void 0?!1:rn,fe=C.submitType,J=fe===void 0?"enter":fe,An=C.onSubmit,xn=C.loading,Xe=C.onCancel,Cn=C.onChange,nn=C.onFocus,jn=C.onBlur,Te=C.actions,De=C.onKeyPress,we=C.onKeyDown,xe=C.disabled,Ee=C.header,gn=C.onPaste,bn=C.allowSpeech,Kn=C.onPasteFile,On=C.components,kn=C.initialRows,Fn=kn===void 0?2:kn,Wn=C.scalable,Yn=x()(C,Y),Dn=Wn,Vn=(0,l.useState)(Dn?!1:void 0),zn=_()(Vn,2),In=zn[0],Hn=zn[1],Gn=(0,l.useState)(!1),Un=_()(Gn,2),Tn=Un[0],Zn=Un[1],et=l.useMemo(function(){return In?{maxRows:5,minRows:5}:{maxRows:5,minRows:Fn}},[Dn,In]),Jn=(0,A.wv)(),mt=Jn.direction,ht=Jn.getPrefixCls,$n=ht("sender"),qn=l.useRef(null),tt=l.useRef(null);f(h,function(){var Bn,a;return{nativeElement:qn.current,focus:(Bn=tt.current)===null||Bn===void 0?void 0:Bn.focus,blur:(a=tt.current)===null||a===void 0?void 0:a.blur}}),(0,s.Z)(qn,{onFocus:function(a){Zn(!0),nn==null||nn()},onBlur:function(){qn.current&&!qn.current.contains(document.activeElement)&&(Zn(!1),jn==null||jn())}}),(0,p.Z)("click",function(Bn){Zn(!0),nn==null||nn()},{target:qn});var it="".concat($n,"-input"),gt=g()($n,ne,de,R()(R()(R()(R()({},"".concat($n,"-rtl"),mt==="rtl"),"".concat($n,"-disabled"),xe),"".concat($n,"-focus"),Tn&&Ge),"".concat($n,"-blur"),!Tn&&Ge)),pt="".concat($n,"-actions-btn"),at="".concat($n,"-actions-list"),Pt=(0,n.C8)(ce||"",{value:Pe}),xt=_()(Pt,2),nt=xt[0],Ct=xt[1],st=function(a,u){Ct(a),Cn&&Cn(a,u)},At=En(function(Bn){st("".concat(nt," ").concat(Bn))},bn),lt=_()(At,3),yt=lt[0],bt=lt[1],Tt=lt[2],jt=z(On,["input"],y.Z.TextArea),Lt=(0,v.Z)(Yn,{attr:!0,aria:!0,data:!0}),Mt=b()(b()({},Lt),{},{ref:tt}),ct=function(){!dt.onSendDisabled&&An&&!xn&&An(nt)},_t=function(){st("")},ut=l.useRef(!1),Ot=function(){ut.current=!0},Rt=function(){ut.current=!1},Dt=function(a){var u=a.key==="Enter"&&!ut.current;switch(J){case"enter":u&&!a.shiftKey&&(a.preventDefault(),ct());break;case"shiftEnter":u&&a.shiftKey&&(a.preventDefault(),ct());break}De&&De(a)},It=function(a){var u;if(!Kn){gn==null||gn(a);return}var i=Array.from(((u=a.clipboardData)===null||u===void 0?void 0:u.files)||[]);if(i.length===0){var d,O=Array.from(((d=a.clipboardData)===null||d===void 0?void 0:d.items)||[]);i=O.filter(function(M){return M.kind==="file"}).map(function(M){return M.getAsFile()}).filter(function(M){return M!==null})}i.length>0?(i.forEach(function(M){return Kn(M)}),a.preventDefault()):gn==null||gn(a)},Nt=function(a){var u,i;a.target!==((u=qn.current)===null||u===void 0?void 0:u.querySelector(".".concat(it)))&&a.preventDefault(),(i=tt.current)===null||i===void 0||i.focus()},St=l.useMemo(function(){var Bn=Array.isArray(t.prefix)?m()(t.prefix):[t.prefix];return Dn&&Bn.push((0,E.jsx)(F.Z,{onClick:function(){return Hn(!In)},bordered:!1,icon:In?(0,E.jsx)(en.Z,{}):(0,E.jsx)(pn.Z,{})},"zoom")),Bn},[t.prefix,Dn,In,bn]),ot=(0,E.jsx)(T.Z,{className:"".concat(at,"-presets"),children:xn?(0,E.jsx)(K,{loading:xn,disabled:!!xe}):(0,E.jsx)(Fe,{disabled:!!xe})});typeof Te=="function"?ot=Te(ot,{components:{SendButton:Fe,ClearButton:r,LoadingButton:K}}):Te&&(ot=Te);var dt={prefixCls:pt,onSend:ct,onSendDisabled:!nt||!nt.trim()||Le,onClear:_t,onClearDisabled:!nt,onCancel:Xe,onCancelDisabled:!xn,onSpeech:function(){return bt(!1)},onSpeechDisabled:!yt,speechRecording:Tt,disabled:!!xe};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(un,{}),(0,E.jsxs)("div",{ref:qn,className:gt,style:G,children:[Ee&&(0,E.jsx)(le.a.Provider,{value:{prefixCls:$n,focus:Tn,enableFocusExpand:Ge},children:Ee}),(0,E.jsxs)("div",{className:"".concat($n,"-content"),children:[(0,E.jsx)(jt,b()(b()({},Mt),{},{disabled:!!xe,style:V.input,className:g()(it,H.input),autoSize:et,value:nt.slice(0,t.maxLength||Number.MAX_SAFE_INTEGER),onChange:function(a){st(a.target.value,a),bt(!0)},onPressEnter:Dt,onCompositionStart:Ot,onCompositionEnd:Rt,onKeyDown:we,onPaste:It,variant:"borderless",readOnly:Ue})),(0,E.jsxs)("div",{className:"".concat($n,"-content-bottom"),children:[St.length>0&&(0,E.jsx)("div",{className:g()("".concat($n,"-prefix"),H.prefix),style:V.prefix,children:(0,E.jsxs)(T.Z,{gap:8,children:[bn&&(0,E.jsx)(re.Provider,{value:dt,children:(0,E.jsx)(Ye,{})}),St]})}),(0,E.jsxs)("div",{className:g()(at,H.actions),style:V.actions,children:[t.maxLength?(0,E.jsxs)("div",{className:"".concat(at,"-length"),children:[nt.length,"/",t.maxLength]}):null,(0,E.jsx)(re.Provider,{value:dt,children:ot})]})]})]})]})]})}),oe=W;oe.Header=le.Z,oe.ModeSelect=o,oe.BeforeUIContainer=L;var je=oe},70770:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return B}});var te=e(89034),m=e(36674),I=e(9343),b=e(48095),j=e(97634),R=e(56044),S=e(68400),_=e.n(S),N=e(9053),x,y=(0,N.vJ)(x||(x=_()([`
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
`])),function(l){return l.theme.prefixCls},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorSuccessBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorSuccess},function(l){return l.theme.colorErrorBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorError},function(l){return l.theme.colorWarningBg},function(l){return l.theme.prefixCls},function(l){return l.theme.colorWarning},function(l){return l.theme.colorFillTertiary},function(l){return l.theme.prefixCls},function(l){return l.theme.colorInfo},function(l){return l.theme.colorText},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBgBase},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorBorderSecondary},function(l){return l.theme.colorBgBase},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.borderRadiusLG},function(l){return l.theme.colorTextTertiary},function(l){return l.theme.colorText}),T=e(93967),P=e.n(T),g=e(21403),n=e(85893);function v(l){var s=(0,R.wv)(),p=s.getPrefixCls,f=p("status-card"),A=l.icon||{success:(0,n.jsx)(te.Z,{}),error:(0,n.jsx)(m.Z,{}),warning:(0,n.jsx)(I.Z,{}),info:(0,n.jsx)(b.Z,{})}[l.status];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{}),(0,n.jsxs)("div",{className:P()(f,"".concat(f,"-").concat(l.status)),children:[(0,n.jsxs)("div",{className:"".concat(f,"-header"),children:[(0,n.jsxs)("div",{className:"".concat(f,"-header-top"),children:[(0,n.jsx)("div",{className:"".concat(f,"-header-icon"),children:A}),(0,n.jsx)("div",{className:"".concat(f,"-header-title"),children:l.title})]}),l.description&&(0,n.jsx)("div",{className:"".concat(f,"-header-description"),children:l.description})]}),l.children&&(0,n.jsx)("div",{className:"".concat(f,"-body"),children:l.children})]})]})}v.HITL=function(l){var s=l.title,p=s===void 0?"\u9700\u8981\u7528\u6237\u4EBA\u5DE5\u5E72\u9884":s,f=l.description,A=l.waitButtonText,le=A===void 0?"\u6211\u5DF2\u5B8C\u6210\uFF0C\u7EE7\u7EED\u4EFB\u52A1":A,F=l.doneButtonText,E=F===void 0?"\u7528\u6237\u5DF2\u786E\u8BA4":F,he=(0,R.wv)(),re=he.getPrefixCls,X=re("status-card"),se=l.actions!==void 0?l.actions:l.done?(0,n.jsx)(g.Z,{onClick:l.onDone,type:"primary",disabled:!0,icon:(0,n.jsx)(j.Z,{}),children:E}):(0,n.jsx)(g.Z,{onClick:l.onDone,type:"primary",children:le});return(0,n.jsx)(v,{status:l.done?"success":"info",title:p,children:f||se?(0,n.jsxs)("div",{className:"".concat(X,"-HITL"),children:[f&&(0,n.jsx)("div",{className:"".concat(X,"-HITL-desc"),children:f}),(0,n.jsx)("div",{className:"".concat(X,"-HITL-button"),children:se})]}):null})},v.Statistic=function(l){var s=(0,R.wv)(),p=s.getPrefixCls,f=p("status-card");return(0,n.jsx)("div",{className:"".concat(f,"-statistic"),children:l.values.map(function(A){return(0,n.jsxs)("div",{className:"".concat(f,"-statistic-item"),children:[(0,n.jsx)("div",{className:"".concat(f,"-statistic-item-title"),children:A.title}),(0,n.jsx)("div",{className:"".concat(f,"-statistic-item-value"),children:A.value})]})})})};var B=v},7354:function(an,ee,e){"use strict";var te=e(15009),m=e.n(te),I=e(9783),b=e.n(I),j=e(97857),R=e.n(j),S=e(77262),_=e.n(S),N=e(93938),x=e.n(N),y=`

`,T=`
`,P=":",g=function(s){return(s!=null?s:"").trim()!==""};function n(){var l="";return new TransformStream({transform:function(p,f){l+=p;var A=l.split(y);A.slice(0,-1).forEach(function(le){g(le)&&f.enqueue(le)}),l=A[A.length-1]},flush:function(p){g(l)&&p.enqueue(l)}})}function v(){return new TransformStream({transform:function(s,p){var f=s.split(T),A=f.reduce(function(le,F){var E=F.indexOf(P);if(E===-1)throw new Error('The key-value separator "'.concat(P,'" is not found in the sse line chunk!'));var he=F.slice(0,E);if(!g(he))return le;var re=F.slice(E+1);return R()(R()({},le),{},b()({},he,re))},{});Object.keys(A).length!==0&&p.enqueue(A)}})}function B(l,s){var p=l.readableStream,f=l.transformStream;if(!(p instanceof ReadableStream))throw new Error("The options.readableStream must be an instance of ReadableStream.");var A=new TextDecoderStream,le=f?p.pipeThrough(A).pipeThrough(f):p.pipeThrough(A).pipeThrough(n()).pipeThrough(v());return le[Symbol.asyncIterator]=x()(m()().mark(function F(){var E,he,re,X;return m()().wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:E=this.getReader();case 1:return ge.next=4,_()(E.read());case 4:if(he=ge.sent,re=he.done,X=he.value,!re){ge.next=9;break}return ge.abrupt("break",15);case 9:if(X){ge.next=11;break}return ge.abrupt("continue",1);case 11:return ge.next=13,s!=null&&s.openaiCompatible?R()(R()({},X),{},{data:X.data.slice(1)}):X;case 13:ge.next=1;break;case 15:case"end":return ge.stop()}},F,this)})),le}ee.Z=B},39536:function(an,ee,e){"use strict";e.d(ee,{J:function(){return j}});var te=e(15009),m=e.n(te),I=e(99289),b=e.n(I);function j(S){return R.apply(this,arguments)}function R(){return R=b()(m()().mark(function S(_){var N;return m()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(!(window.isSecureContext&&navigator.clipboard)){y.next=4;break}return y.next=3,navigator.clipboard.writeText(_);case 3:return y.abrupt("return");case 4:N=document.createElement("textarea"),N.value=_,N.style.cssText="position:fixed;left:-9999px",document.body.appendChild(N),N.select();try{document.execCommand("copy",!0)}finally{document.body.removeChild(N)}case 10:case"end":return y.stop()}},S)})),R.apply(this,arguments)}},32116:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return te}});function te(m){return new Promise(function(I){return setTimeout(I,m)})}},66366:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return m}});var te={i8:"1.1.55"},m=te.i8},57657:function(an,ee,e){"use strict";e.r(ee);var te=e(5574),m=e.n(te),I=e(9053),b=e(67294),j=e(85893),R=function(){var N=(0,b.useState)({x:0,y:0}),x=m()(N,2),y=x[0],T=x[1],P=(0,b.useState)(!1),g=m()(P,2),n=g[0],v=g[1],B=(0,b.useRef)(null),l=S(),s=l.styles,p=l.cx;(0,b.useEffect)(function(){var re=function(se){if(B.current){var ge=B.current.getBoundingClientRect();T({x:se.clientX-ge.left,y:se.clientY-ge.top})}};return window.addEventListener("mousemove",re),function(){return window.removeEventListener("mousemove",re)}},[]),(0,b.useEffect)(function(){var re=setInterval(function(){v(!0),setTimeout(function(){return v(!1)},150)},5e3);return function(){return clearInterval(re)}},[]);var f=function(){var X=32,se=32,ge=y.x-X,Ie=y.y-se,r=6,Ze=6,ye=Math.sqrt(ge*ge+Ie*Ie),Ae=50;if(ye===0)return{x:0,y:0};var be=Math.min(ye/Ae,1),Z=ge/ye*r*be,K=Ie/ye*Ze*be;return{x:Math.max(-r,Math.min(r,Z)),y:Math.max(-Ze,Math.min(Ze,K))}},A=function(X){var se=32,ge=y.x-se,Ie=400;if(Math.abs(ge)<Ie)return 1;var r=Math.abs(ge)-Ie,Ze=32-Ie,ye=Math.min(r/Ze,1);return ge>Ie?X?1-ye*.5:1:ge<-Ie?X?1:1-ye*.5:1},le=f(),F=f(),E=A(!0),he=A(!1);return(0,j.jsxs)("div",{ref:B,className:s.container,children:[(0,j.jsx)("div",{className:p(s.eye,s.leftEye,n?s.blinkingEye:""),style:{transform:"translate(".concat(le.x,"px, ").concat(le.y,"px) ").concat(n?"scaleY(0.1)":"scaleY(".concat(E,")"))}}),(0,j.jsx)("div",{className:p(s.eye,s.rightEye,n?s.blinkingEye:""),style:{transform:"translate(".concat(F.x,"px, ").concat(F.y,"px) ").concat(n?"scaleY(0.1)":"scaleY(".concat(he,")"))}})]})};ee.default=R;var S=(0,I.kc)(function(_){var N=_.css,x=_.token;return{container:{width:64,height:64,backgroundColor:"black",borderRadius:12,position:"relative",cursor:"pointer",overflow:"hidden",boxShadow:"15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)"},eye:{width:6,height:12,backgroundColor:"white",borderRadius:99,position:"absolute",top:16,transition:"transform 0.1s ease-out"},leftEye:{left:22},rightEye:{left:36},blinkingEye:{transition:"transform 0.05s ease-out"}}})},31295:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return N}});var te=e(68400),m=e.n(te),I=e(67294),b=e(9053),j=e(56044),R=e(85893),S,_=(0,b.vJ)(S||(S=m()([`
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
`])),function(x){return x.theme.prefixCls},function(x){return x.theme.colorText},function(x){return x.theme.colorTextSecondary});function N(x){var y=(0,j.wv)(),T=y.getPrefixCls,P=T("welcome"),g=typeof x.logo=="string"?(0,R.jsx)("img",{className:P+"-logo",src:x.logo}):x.logo;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(_,{}),(0,R.jsxs)("div",{className:P,style:x.style,children:[g,(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{className:P+"-title",children:x.title}),(0,R.jsx)("div",{className:P+"-desc",children:x.desc})]})]})]})}},64437:function(an,ee,e){"use strict";e.d(ee,{Z:function(){return P}});var te=e(97857),m=e.n(te),I=e(67294),b=e(68997),j=e(56044),R=e(38850),S=e(68400),_=e.n(S),N=e(9053),x,y=(0,N.vJ)(x||(x=_()([`
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
`])),function(n){return n.theme.prefixCls},function(n){var v=n.theme;return v.colorText},function(n){var v=n.theme;return v.colorTextSecondary},function(n){var v=n.theme;return v.colorFillQuaternary},function(n){var v=n.theme;return v.colorText},function(n){var v=n.theme;return v.colorFillTertiary}),T=e(85893);function P(n){var v=n.greeting,B=n.avatar,l=n.description,s=n.prompts,p=n.onClick,f=(0,j.wv)().getPrefixCls("welcome-prompts");return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(y,{}),(0,T.jsxs)("div",{className:f,children:[B&&(typeof B=="string"?(0,T.jsx)(b.Z,{src:B,shape:"square",size:64}):B),v&&(0,T.jsx)("div",{className:"".concat(f,"-greeting"),children:v}),l&&(0,T.jsx)("div",{className:"".concat(f,"-description"),children:l}),(s==null?void 0:s.length)>0&&(0,T.jsx)("div",{className:"".concat(f,"-prompts"),children:s.map(function(A){var le=typeof A=="string"?{label:A,value:A}:m()(m()({},A),{},{label:A.label||A.value,value:A.value});return(0,T.jsx)(g,{prompt:le,prefixCls:f,onClick:p},le.value)})})]})]})}function g(n){var v=n.prefixCls;return(0,T.jsxs)("div",{className:"".concat(v,"-prompt"),onClick:function(){var l;return(l=n.onClick)===null||l===void 0?void 0:l.call(n,n.prompt.value)},children:[(0,T.jsx)("img",{className:"".concat(v,"-prompt-icon"),src:"https://img.alicdn.com/imgextra/i3/O1CN01822qqr1PVyaK7MYtn_!!6000000001847-2-tps-40-40.png",alt:""}),(0,T.jsx)("span",{className:"".concat(v,"-prompt-label"),children:n.prompt.label}),(0,T.jsx)(R.Z,{})]})}},43601:function(an,ee,e){"use strict";e.r(ee),e.d(ee,{AIGC:function(){return Ae.Z},Accordion:function(){return s.Z},AgentScopeRuntimeWebUI:function(){return n.Z},AssetsPreview:function(){return be.Z},Attachments:function(){return f.Z},Bubble:function(){return A.Z},ChatAnywhere:function(){return _.ZP},ChatInput:function(){return ge.Z},ConfigProvider:function(){return te.ZP},Conversations:function(){return le.Z},CustomCardsContext:function(){return I.NR},CustomCardsProvider:function(){return I.xy},DeepThink:function(){return p.Z},DeepThinking:function(){return p.Z},DefaultCards:function(){return g},DeviceAction:function(){return F.Z},Disclaimer:function(){return E.Z},GenerativeUISandbox:function(){return Z.Z},HistoryPanel:function(){return le.Z},ImageGenerator:function(){return he.Z},Markdown:function(){return ye.Z},Mermaid:function(){return re.Z},OperateCard:function(){return X.Z},Process:function(){return s.Z},Rag:function(){return se.Sn},Sender:function(){return ge.Z},SparkChatProvider:function(){return b.ZP},StatusCard:function(){return Ie.Z},Stream:function(){return R.Z},Thinking:function(){return se.BI},TodoList:function(){return se.B4},ToolCall:function(){return se.x4},WebSearch:function(){return se.fz},Welcome:function(){return Ze.Z},WelcomePrompts:function(){return K.Z},createCard:function(){return S.L},sleep:function(){return r.Z},useChatAnywhere:function(){return N.TQ},useCustomCardsContext:function(){return I.HJ},useGlobalContext:function(){return j.bN},useInput:function(){return x.G},useMessages:function(){return y.y},useProviderContext:function(){return b.wv},useSessionList:function(){return T.x},uuid:function(){return P.Z},version:function(){return m.Z}});var te=e(55839),m=e(66366),I=e(83962),b=e(56044),j=e(92049),R=e(7354),S=e(50130),_=e(29041),N=e(76289),x=e(37254),y=e(4421),T=e(61316),P=e(88773),g=e(24963),n=e(51508),v=e(22863),B={};for(var l in v)["default","ConfigProvider","version","CustomCardsContext","CustomCardsProvider","SparkChatProvider","useCustomCardsContext","useGlobalContext","useProviderContext","Stream","createCard","ChatAnywhere","useChatAnywhere","useInput","useMessages","useSessionList","uuid","DefaultCards","AgentScopeRuntimeWebUI","Accordion","Process","DeepThink","DeepThinking","Attachments","Bubble","Conversations","HistoryPanel","DeviceAction","Disclaimer","ImageGenerator","Mermaid","OperateCard","ChatInput","Sender","StatusCard","sleep","Welcome","Markdown","AIGC","AssetsPreview","GenerativeUISandbox","WelcomePrompts"].indexOf(l)<0&&(B[l]=function(Oe){return v[Oe]}.bind(0,l));e.d(ee,B);var s=e(487),p=e(14082),f=e(50993),A=e(52471),le=e(9368),F=e(55031),E=e(10325),he=e(2534),re=e(12181),X=e(31382),se=e(56809),ge=e(66672),Ie=e(70770),r=e(32116),Ze=e(31295),ye=e(66109),Ae=e(86578),be=e(34487),Z=e(80115),K=e(64437)}}]);
