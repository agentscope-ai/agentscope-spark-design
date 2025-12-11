"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[1629],{30172:function(B,H,o){o.d(H,{Z:function(){return g}});var D=o(26068),a=o.n(D),y="rgba(0,0,0,0)",C=2,A=4,d=6,_=8,i=12,c=999,t="normal 12px/20px inherit",b="500 12px/20px inherit",v="normal 12px/20px Menlo, monospace",M="500 13px/20px inherit",S="normal 14px/24px inherit",P="500 14px/24px inherit",x="normal 14px/24px Menlo, monospace",f="normal 16px/28px inherit",u="500 16px/28px inherit",l="500 18px/32px inherit",p="500 20px/36px inherit",m="500 24px/44px inherit",h="500 32px/48px inherit";function g(n,E){return{theme:{cssVar:!0,hashed:!1,darkMode:E,token:a()({borderRadiusXS:C,borderRadiusSM:A,borderRadius:d,borderRadiusLG:_,borderRadiusXL:i,borderRadiusFull:c,footnoteRegular:t,footnoteMedium:b,footnoteSystemMonospace:v,bodyFormTitle:M,bodyRegular:S,bodyMedium:P,bodyCode:x,h5Regular:f,h5Medium:u,h4Medium:l,h3Medium:p,h2Medium:m,h1Medium:h},n),components:{Alert:{colorErrorBorder:y,colorInfoBorder:y,colorSuccessBorder:y,colorWarningBorder:y,colorInfoBg:n.colorInfoBg,borderRadiusLG:0,defaultPadding:"8px 20px",fontSize:12,lineHeight:"20px"},Badge:{colorError:n.colorPrimary,indicatorHeight:16,textFontSize:10},Breadcrumb:{separatorMargin:4,lastItemColor:n.colorText},Button:{contentFontSizeSM:12,defaultHoverBg:n.colorFillSecondary,defaultHoverBorderColor:n.colorBorderSecondary,defaultHoverColor:n.colorText,defaultActiveBg:n.colorFillSecondary,defaultActiveBorderColor:n.colorBorderSecondary,defaultActiveColor:n.colorText,defaultGhostColor:n.colorText,defaultGhostBorderColor:"transparent",dangerShadow:"none",defaultShadow:"none",primaryShadow:"none"},DatePicker:{paddingInline:8,colorBgBase:n.colorBgBase,colorBgContainerDisabled:n.colorFillTertiary},Dropdown:{paddingBlock:4,controlPaddingHorizontal:8,controlItemBgHover:n.colorFillTertiary},Progress:{remainingColor:n.colorPrimaryBg,defaultColor:n.colorPrimary},Input:{colorBgBase:n.colorBgBase,colorBgContainerDisabled:n.colorFillTertiary},InputNumber:{colorBgBase:n.colorBgBase,colorBgContainerDisabled:n.colorFillTertiary},Select:{colorBgBase:n.colorBgBase,selectorBg:n.colorBgBase,colorBgContainerDisabled:n.colorFillTertiary},Skeleton:{paragraphLiHeight:24,paragraphMarginTop:16,blockRadius:8},Slider:{railBg:n.colorPrimaryBg,railHoverBg:n.colorPrimaryBgHover,trackBg:n.colorPrimary,trackHoverBg:n.colorPrimary,handleColor:n.colorPrimary,railSize:8,handleSize:12,handleSizeHover:12},Segmented:{itemSelectedBg:n.colorBgBase,trackPadding:4,controlHeight:40,controlHeightLG:42,itemHoverBg:"unset"},Steps:{iconSize:20,iconFontSize:12,titleLineHeight:20},Modal:{headerBg:n.colorBgBase,contentBg:n.colorBgBase,titleFontSize:16,controlHeight:20},Tooltip:{sizePopupArrow:0},Popover:{sizePopupArrow:0},Table:{cellPaddingInline:20},Form:{itemMarginBottom:20},Collapse:{contentPadding:"8px 12px",headerPadding:"4px 12px"},Descriptions:{colonMarginRight:10,verticalLabelPaddingBottom:4,verticalContentPaddingBottom:24},Switch:{handleBg:n.colorBgContainer,trackHeight:24,handleSize:20,trackHeightSM:20,handleSizeSM:16,trackMinWidth:44,trackMinWidthSM:32}}},checkbox:{style:{fontWeight:"500"}},radio:{style:{fontWeight:"500"}}}}},4287:function(B,H,o){o.d(H,{ZP:function(){return Ur}});var D=o(26068),a=o.n(D),y=o(48305),C=o.n(y),A=o(67825),d=o.n(A),_=o(53649),i=o.n(_),c=o(88974),t=o(75271),b,v=(0,c.Z)(b||(b=i()([`
.`,`-alert {
  .`,`-alert-close-icon {
    font-size: 16px;
    
    .anticon-close {
      color: var(--`,`-color-text);
    }
  }

  .`,`-alert-icon {
    font-size: 15px;
  }

  &.`,`-alert-with-description {
    .`,`-alert-icon {
      display: inline-block;
      line-height: 24px;
      font-size: 15px;
    }
  }
 
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),M=null,S,P=(0,c.Z)(S||(S=i()([`
.`,`-breadcrumb {
  .`,`-breadcrumb-link {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: var(--`,`-color-text-secondary);
  }
  
  li:last-child {
    color: var(--`,`-color-text);
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),x=null,f,u=(0,c.Z)(f||(f=i()([`
/* \u53D6\u6D88\u6240\u6709button\u7684boxShadow */
button[type="button"].`,`-btn {
  font-weight: 500;
  padding-inline: 11px;
  
  span[data-spark-icon] {
    /* @agentscope-ai/icons\u7684\u7279\u6B8A\u903B\u8F91 */
    font-size: 20px;
  }
  
  &.`,`-btn-sm {
    padding-inline: 7px;
    
    span[data-spark-icon] {
      /* @agentscope-ai/icons\u7684\u7279\u6B8A\u903B\u8F91 */
      font-size: 16px;
    }
  }
  
  &.`,`-btn-lg {
    span[data-spark-icon] {
      /* @agentscope-ai/icons\u7684\u7279\u6B8A\u903B\u8F91 */
      font-size: 24px;
    }
  }
}

.`,`-btn-default {
  border-color: var(--`,`-color-border-secondary);
}

.`,`-btn-textCompact:hover {
  color: var(--`,`-color-text-tertiary) !important;
}

.`,"-btn.","-btn-default.","-btn-dangerous:not(:disabled):not(.",`-btn-disabled) {
  border-color: transparent;
  background-color: var(--`,`-color-error-bg);
  color: var(--`,`-color-error);
  
  &:hover {
    background-color: var(--`,`-color-error-bg-hover);
    border-color: transparent;
    color: var(--`,`-color-error-hover);
  }
}

.`,"-btn-color-dangerous.",`-btn-variant-solid:disabled,
.`,"-btn-color-dangerous.","-btn-variant-solid.",`-btn-disabled {
  border-color: transparent;
  background-color: var(--`,`-color-fill-disable);
  color: var(--`,`-color-text-white);
}

.`,`-btn-primary {
  color: var(--`,`-color-text-on-primary);
}
.`,"-btn-primary.","-btn-variant-solid:not(:disabled):not(.",`-btn-disabled):hover {
  color: var(--`,`-color-text-on-primary);
}

.`,`-btn-primary:disabled {
  background: var(--`,`-color-fill-disable);
  color: var(--`,`-color-text-white);
  border-color: transparent;
}

.`,`-btn-default:disabled {
  background: var(--`,`-color-bg-base);
  color: var(--`,`-color-text-tertiary);
  border-color: var(--`,`-color-border-secondary);
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),l=null,p,m=(0,c.Z)(p||(p=i()([`
.`,"-dropdown .",`-dropdown-menu {
  box-shadow: var(--`,`-box-shadow);
  border: 1px solid var(--`,`-color-border-secondary);
  
  .`,"-dropdown-menu-item.","-dropdown-menu-item-active.","-dropdown-menu-item-danger:not(.",`-dropdown-menu-item-disabled) {
    color: var(--`,`-color-error);
    background-color: var(--`,`-color-error-bg-hover);
  }

  .`,`-dropdown-menu-item:hover {
    background-color: var(--`,`-color-fill-tertiary);
  }
  
  .`,`-dropdown-menu-title-content {
    text-align: left;
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),h=null,g,n=(0,c.Z)(g||(g=i()([`
/* \u53D6\u6D88\u6240\u6709button\u7684boxShadow */
.`,`-float-btn {
  box-shadow: var(--`,`-box-shadow);
  
  &.`,`-float-btn-default {
    border: 1px solid var(--`,`-color-border-secondary);
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),E=null,e,s=(0,c.Z)(e||(e=i()([`
.`,`-input-number {
  background-color: var(--`,`-color-bg-base);
}

.`,`-input-number-disabled {
  background-color: var(--`,`-color-fill-tertiary) !important;
}

.`,`-input-number-outlined,
.`,"-input-number-outlined.",`-input-number-disabled {
  border-color: var(--`,`-color-border-secondary);
}

.`,`-input-number-sm {
  font-size: 12px;
  height: 24px;
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),I=null,F,R=(0,c.Z)(F||(F=i()([`
.`,`-message-notice-content {
  border: 1px solid var(--`,`-color-border-secondary);
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix}),K=null,W,Z=(0,c.Z)(W||(W=i()([`
.`,`-notification {
  .`,`-notification-notice-wrapper {
    box-shadow: var(--`,`-box-shadow-secondary);
    border: 1px solid var(--`,`-color-border-secondary);
    
    .`,`-notification {
      .`,`-notification-notice-message {
        font-size: 16px;
        font-weight: 500;
      }
      
      .`,`-notification-notice-description {
        font-size: 14px;
        font-weight: normal;
        line-height: 24px;
        color: var(--`,`-color-text-secondary);
        margin-left: 32px;
      }
      
      .`,`-notification-notice-with-icon {
        .`,`-notification-notice-icon {
          display: flex;
          align-items: center;
          height: 24px;
        }
        
        .`,`-notification-notice-message {
          margin-inline-start: 32px;
        }
      }
      
      .`,`-notification-notice-close {
        color: var(--`,`-color-text);
      }
    }
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),Q=null,j,Y=(0,c.Z)(j||(j=i()([`
.`,`-popover {
  .`,`-popover-inner {
    max-width: 500px;
    padding: 12px 16px;
    box-shadow: var(--`,`-box-shadow);
    border: 1px solid var(--`,`-color-border-secondary);
    
    .`,`-popover-title {
      margin-bottom: 4px;
    }
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),J=null,N,sr=(0,c.Z)(N||(N=i()([`
.`,`-radio-button-wrapper {
  .`,`-wave {
    display: none !important;
  }
}

.`,`-radio-wrapper {
  .`,`-radio-inner {
    border-color: var(--`,`-color-border-secondary);
  }
  
  .`,`-radio-disabled {
    .`,`-radio-inner {
      border-color: var(--`,`-color-border-secondary);
    }
    
    &.`,`-radio-checked {
      .`,`-radio-inner {
        background-color: var(--`,`-color-border-secondary);
        
        &::after {
          background-color: var(--`,`-color-bg-base);
        }
      }
    }
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),Pr=null,X,dr=(0,c.Z)(X||(X=i()([`
.`,`-segmented {
  .`,`-segmented-item-selected {
    box-shadow: none;
  }
  
  .`,`-segmented-thumb {
    box-shadow: none !important;
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),Dr=null,V,G=(0,c.Z)(V||(V=i()([`
.`,`-select-dropdown {
  border: 1px solid var(--`,`-color-border-secondary);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.08);
  border-radius: var(--`,`-border-radius);

  .`,`-select-item-option-active,
  .`,"-select-item-option-active:not(.",`-select-item-option-disabled) {
    background-color: var(--`,`-color-fill-tertiary);
  }
}

.`,"-select-outlined:not(.","-select-customize-input) .",`-select-selector {
  border-color: var(--`,`-color-border-secondary);
}

.`,"-select .",`-select-arrow {
  color: var(--`,`-color-text-secondary);
}

.`,"-select-outlined.",`-select-multiple {
  .`,`-select-selection-item {
    border-radius: 4px;
    background-color: var(--`,`-color-mauve-bg);
  }
}

.`,`-select-selection-overflow {
  color: var(--`,`-color-mauve);
  
  .`,`-select-selection-item-remove {
    .anticon-close {
      font-size: 14px;
      color: var(--`,`-color-mauve);
    }
  }
}

.`,"-select-disabled.","-select-multiple .","-select-selection-overflow .",`-select-selection-item {
  color: var(--`,`-color-mauve);
}

.`,"-select .",`-select-selection-placeholder {
  color: var(--`,`-color-text-tertiary);
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),$r=null,Br,Ar=(0,c.Z)(Br||(Br=i()([`
.`,`-slider {
  .`,`-slider-rail {
    border-radius: 8px;
  }
  
  .`,`-slider-track {
    border-radius: 8px;
  }
}

.`,`-slider-tooltip {
  .`,`-tooltip-inner {
    background: var(--`,`-color-bg-spotlight);
  }
}

/* \u5DE6\u53F3\u4E24\u4FA7\u7684mark\u5BF9\u9F50 */
.`,`-slider-mark-text {
  &:first-child {
    transform: translateX(0%) !important;
  }
  
  &:last-child {
    transform: translateX(-100%) !important;
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),Qr=null,yr,wr=(0,c.Z)(yr||(yr=i()([`
.`,`-table-cell {
  border-radius: 0;
}
`])),function(r){return r.antPrefix}),Jr=null,Sr,Mr=(0,c.Z)(Sr||(Sr=i()([`
.`,`-tooltip {
  .`,`-tooltip-inner {
    border: 1px solid var(--`,`-color-border-secondary);
    box-shadow: var(--`,`-box-shadow);
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),Vr=null,hr,Ir=(0,c.Z)(hr||(hr=i()([`
.`,"-tree .",`-tree-treenode {
  margin-bottom: 8px;
}

.`,"-tree .",`-tree-treenode:last-child {
  margin-bottom: 0;
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),qr=null,Er,Or=(0,c.Z)(Er||(Er=i()([`
  /* \u5B9A\u4E49\u52A8\u753B\u5173\u952E\u5E27 */
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(32px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* animate-in \u52A8\u753B\u7C7B */
  .animate-in {
    opacity: 0;
    transform: translateY(32px);
    animation: fadeInUp 0.4s ease forwards;
  }
`]))),jr=function(){var $=Or(),or=v(),w=P(),er=u(),nr=m(),tr=n(),fr=s(),ar=R(),xr=Z(),L=Y(),gr=sr(),lr=dr(),ir=G(),pr=Ar(),vr=wr(),cr=Mr(),ur=Ir();return function(){return t.createElement(t.Fragment,null,t.createElement($),t.createElement(or),t.createElement(w),t.createElement(er),t.createElement(nr),t.createElement(tr),t.createElement(fr),t.createElement(ar),t.createElement(xr),t.createElement(L),t.createElement(gr),t.createElement(lr),t.createElement(ir),t.createElement(pr),t.createElement(vr),t.createElement(cr),t.createElement(ur))}},ro=null,Lr=o(1615),Fr=o(80047),Rr=o(82090),k=o(45372),Cr=o(74308),Wr=o(9134),Zr=o(96957),Nr=o(82187),_r=o.n(Nr),q=o(31209),O=o(52676),kr=["prefix","prefixCls","iconfont","children"];function zr(){var r=jr();return(0,O.jsx)(r,{})}var Tr={};function rr(r){var $,or=r.prefix,w=or===void 0?"":or,er=r.prefixCls,nr=er===void 0?"":er,tr=r.iconfont,fr=tr===void 0?"https://at.alicdn.com/t/a/font_4807885_xobxpcpwk4i.js":tr,ar=r.children,xr=ar===void 0?void 0:ar,L=d()(r,kr),gr=(0,t.useState)(!1),lr=C()(gr,2),ir=lr[0],pr=lr[1],vr=(0,t.useState)((($=r.locale)===null||$===void 0?void 0:$.locale)||"defaultKey"),cr=C()(vr,2),ur=cr[0],Hr=cr[1],Kr=(0,q.getCommonConfig)(),Yr=Kr.antPrefix,Xr=(0,t.useContext)(Wr.E_),Gr=Xr.theme,z=(0,t.useMemo)(function(){return nr||(w?"".concat(w,"-ant"):Yr)},[nr,w]),mr=(0,Zr.Z)(r.theme||Tr,Gr||Tr,{prefixCls:z}),br=(0,t.useMemo)(function(){var T=a()(a()({},mr),{},{algorithm:mr.darkMode?Fr.Z.darkAlgorithm:void 0});return T},[mr]);return(0,t.useLayoutEffect)(function(){var T={antPrefix:z,configProviderProps:a()(a()({},L),{},{prefixCls:z}),iconfont:fr};w.length&&(T=a()(a()({},T),{},{sparkPrefix:"".concat(w,"-").concat(q.DEFAULT_SPARK_PREFIX),prefix:w}),console.log("debug","".concat(w,"-").concat(q.DEFAULT_SPARK_PREFIX))),(0,q.setCommonConfig)(a()(a()({},T),{},{isDarkMode:function(){try{return(L.theme.algorithm||br.algorithm)===Fr.Z.darkAlgorithm}catch(U){return!1}}()})),pr(!0),Rr.ZP.config({top:24})},[]),(0,t.useLayoutEffect)(function(){k.ZP.config({holderRender:function(U){return(0,O.jsx)(k.ZP,a()(a()({},L),{},{prefixCls:z,theme:br,wave:{disabled:!0},children:(0,O.jsx)(Cr.Z,{className:_r()("spark"),style:a()({},r.style),children:U},ur)}))}})},[L,z,ir]),(0,t.useLayoutEffect)(function(){var T,U;Lr.Z.updateLocale(((T=r.locale)===null||T===void 0?void 0:T.locale)||"zh-cn"),Hr(((U=r.locale)===null||U===void 0?void 0:U.locale)||"defaultKey")},[r.locale]),(0,O.jsx)(k.ZP,a()(a()({},L),{},{theme:br,prefixCls:z,wave:{disabled:!0},children:(0,O.jsx)(Cr.Z,{className:_r()("spark",r.className),style:a()({},r.style),children:ir?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(zr,{}),xr]}):null},ur)}))}rr.ConfigContext=k.ZP.ConfigContext,rr.config=function(r){k.ZP.config(r)},rr.useConfig=k.ZP.useConfig;var Ur=rr},15201:function(B,H,o){o.d(H,{Z:function(){return E}});var D=o(26068),a=o.n(D),y=o(82092),C=o.n(y),A=o(67825),d=o.n(A),_=o(31209),i=o(94042),c=o(10178),t=o(82187),b=o.n(t),v=o(15306),M=o(75271),S=o(53649),P=o.n(S),x=o(88974),f,u=(0,x.Z)(f||(f=P()([`
.`,`-drawer {
  .`,`-drawer-header {
    padding: 16px 20px;
    border-bottom: none;
    
    .`,`-drawer-header-title {
      display: flex;
      flex-direction: row-reverse;
      
      .`,`-drawer-title {
        font-size: 16px;
        font-weight: 500;
        line-height: 28px;
        color: var(--`,`-color-text);
      }
      
      .`,`-drawer-close {
        width: 32px;
        height: 32px;
      }
    }
  }
  
  .`,`-drawer-body {
    --`,`-padding-lg: 20px;
  }
  
  .`,`-drawer-footer {
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: none;
    
    .`,`-drawer-footer-info {
      font-size: 14px;
      line-height: 24px;
      color: var(--`,`-color-text-tertiary);
    }
    
    .`,`-drawer-footer-buttons {
      display: flex;
      gap: 12px;
    }
  }
  
  .`,`-drawer-close {
    color: var(--`,`-color-text);
    margin: 0;
  }
}

.`,"-drawer.",`-show-divider {
  .`,`-drawer-header {
    border-bottom: 1px solid var(--`,`-color-border-secondary);
  }
  
  .`,`-drawer-footer {
    border-top: 1px solid var(--`,`-color-border-secondary);
  }
}
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),l=o(52676),p=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],m=function(s){var I=s.onOk,F=s.onCancel,R=s.okText,K=R===void 0?"\u786E\u5B9A":R,W=s.okButtonProps,Z=s.cancelText,Q=Z===void 0?"\u53D6\u6D88":Z,j=s.cancelButtonProps,Y=s.info,J=s.footer,N=d()(s,p),sr=u(),Pr=(0,_.getCommonConfig)(),X=Pr.antPrefix,dr=function(V){if(F)F();else{var G;(G=N.onClose)===null||G===void 0||G.call(N,V)}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(sr,{}),(0,l.jsx)(E,a()(a()({},N),{},{footer:J||(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"".concat(X,"-drawer-footer-info"),children:Y}),(0,l.jsxs)("div",{className:"".concat(X,"-drawer-footer-buttons"),children:[(0,l.jsx)(v.Z,a()(a()({onClick:dr},j),{},{children:Q})),(0,l.jsx)(v.Z,a()(a()({type:"primary",onClick:I},W),{},{children:K}))]})]})}))]})},h=m,g=["children","className","style","showDivider"],n=function(s){var I=s.children,F=s.className,R=s.style,K=s.showDivider,W=K===void 0?!0:K,Z=d()(s,g),Q=u(),j=(0,_.getCommonConfig)(),Y=j.sparkPrefix,J=j.antPrefix;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Q,{}),(0,l.jsx)(c.Z,a()(a()({closeIcon:(0,l.jsx)(i.Z,{size:24}),className:b()("".concat(Y,"-drawer"),F,C()({},"".concat(J,"-show-divider"),W)),style:a()({},R)},Z),{},{children:I}))]})};Object.assign(n,{Confirm:h});var E=n},33185:function(B,H,o){var D=o(48305),a=o.n(D),y=o(67825),C=o.n(y),A=o(26068),d=o.n(A),_=o(58911),i=o(88602),c=o(99090),t=o(62910),b=o(82090),v=o(52676),M=["content"],S={success:{type:"success",icon:(0,v.jsx)(_.Z,{})},warning:{type:"warning",icon:(0,v.jsx)(i.Z,{})},error:{type:"error",icon:(0,v.jsx)(c.Z,{})},info:{type:"info",icon:(0,v.jsx)(t.Z,{})}},P=function(u,l){var p,m;typeof l=="string"?m={content:l}:m=d()({},l);var h=m,g=h.content,n=C()(h,M);b.ZP.open(d()({type:u,content:g,icon:u==="loading"||(p=S[u])===null||p===void 0?void 0:p.icon},n))},x=function(u){var l=b.ZP.useMessage(u),p=a()(l,2),m=p[0],h=p[1],g=function(e,s){var I,F;typeof s=="string"?F={content:s,type:e}:F=d()(d()({},s),{},{type:e}),m[e](d()(d()({},F),{},{icon:(I=S[e])===null||I===void 0?void 0:I.icon}))},n=d()(d()({},m),{},{success:function(e){return g("success",e)},warning:function(e){return g("warning",e)},error:function(e){return g("error",e)},info:function(e){return g("info",e)},loading:function(e){return g("loading",e)}});return[n,h]};H.Z=d()(d()({},b.ZP),{},{success:function(u){return P("success",u)},warning:function(u){return P("warning",u)},error:function(u){return P("error",u)},info:function(u){return P("info",u)},loading:function(u){return P("loading",u)},useMessage:x})},1615:function(B,H,o){o.d(H,{Z:function(){return P}});var D=o(31759),a=o.n(D),y=o(16483),C=o.n(y),A=o(26068),d=o.n(A),_=JSON.parse('{"components.commonComponents.AlertDialog.Prompt":"Prompt","components.commonComponents.Pagination.PreviousPage":"Previous Page","components.commonComponents.Pagination.Items":"Items","components.commonComponents.Pagination.Page":"Page","components.commonComponents.Pagination.NextPage":"Next page","components.commonComponents.SlateEditor.TheNumberOfWordsCannot":"The number of words cannot exceed {wordLimit}.","components.commonComponents.SlateEditor.EnterHere":"Enter here","components.SlateEditor.utils.constant.Paragraph":"Paragraph","components.SlateEditor.utils.constant.Variable":"Variable","components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect":"The selection range is incorrect.","components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn":"[{wrapTagName}] cannot be placed in [{tagName}]","components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn":"[{wrapTagName}] cannot be nested in [{tagName}]]","components.SlateEditor.utils.withEditor.YouCanEnterAMaximum":"You can enter a maximum of {maxLen} characters.","components.commonComponents.Image.Preview":"Preview"}'),i=JSON.parse('{"components.commonComponents.AlertDialog.Prompt":"\u63D0\u793A","components.commonComponents.Pagination.PreviousPage":"\u4E0A\u4E00\u9875","components.commonComponents.Pagination.Items":"\u6761","components.commonComponents.Pagination.Page":"\u9875","components.commonComponents.Pagination.NextPage":"\u4E0B\u4E00\u9875","components.commonComponents.SlateEditor.TheNumberOfWordsCannot":"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57","components.commonComponents.SlateEditor.EnterHere":"\u5728\u8FD9\u91CC\u8F93\u5165","components.SlateEditor.utils.constant.Paragraph":"\u6BB5\u843D","components.SlateEditor.utils.constant.Variable":"\u53D8\u91CF","components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect":"\u5212\u9009\u8303\u56F4\u6709\u8BEF","components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn":"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185","components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn":"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011","components.SlateEditor.utils.withEditor.YouCanEnterAMaximum":"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57","components.commonComponents.Image.Preview":"\u9884\u89C8"}'),c={"en-US":d()({},_),"zh-CN":d()({},i)},t="zh-cn",b;function v(x){t=x,C().locale(t||"zh-cn")}var M=function(f,u){var l=t==="zh-cn"?"zh-CN":"en-US",p=c[l][f.id]||f.defaultString||"",m=p.replace(/\{(\w+)\}/g,function(h,g){return u[g]||h});return m};function S(x,f){return b||v(t),typeof x=="string"?M({id:x},f):(a()(x)==="object"&&x.dm&&(x.defaultMessage=x.dm),M({id:x.id,defaultString:x.dm},f))}var P={intl:b,get:S,updateLocale:v,language:t}},23577:function(B){B.exports=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"#202041","colorPrimaryBgHover":"#202041","colorPrimaryBorder":"#2B2A55","colorPrimaryBorderHover":"#373476","colorPrimaryHover":"#857DE3","colorPrimary":"#5551CC","colorPrimaryActive":"#4643A1","colorPrimaryTextHover":"#857DE3","colorPrimaryText":"#5551CC","colorPrimaryTextActive":"#4643A1","colorTextBase":"#E7E7ED","colorBgBase":"#000000","colorText":"rgba(231, 231, 237, 0.88)","colorTextSecondary":"rgba(231, 231, 237, 0.65)","colorTextTertiary":"rgba(231, 231, 237, 0.45)","colorTextQuaternary":"rgba(231, 231, 237, 0.25)","colorBorder":"rgba(71, 71, 97, 0.8)","colorBorderSecondary":"rgba(56, 56, 76, 0.8)","colorFill":"rgba(231, 231, 237, 0.18)","colorFillSecondary":"rgba(231, 231, 237, 0.12)","colorFillTertiary":"rgba(231, 231, 237, 0.08)","colorFillQuaternary":"rgba(231, 231, 237, 0.04)","colorBgContainer":"#0F0F14","colorBgElevated":"#0F0F14","colorBgLayout":"#0F0F14","colorBgSpotlight":"rgba(71, 71, 97, 0.85)","colorBgMask":"rgba(5, 5, 8, 0.8)","colorInfo":"#0B83F1","colorInfoHover":"rgba(42, 114, 165, 1)","colorInfoBorder":"rgba(135, 209, 255, 0.2)","colorInfoText":"#0B83F1","colorInfoBg":"rgba(27, 73, 115, 0.25)","colorInfoBgHover":"rgba(27, 73, 115, 0.32)","colorInfoBorderHover":"rgba(94, 188, 255, 0.2)","colorSuccess":"#5BB98B","colorSuccessHover":"rgba(87, 141, 112, 1)","colorSuccessBg":"rgba(0, 50, 26, 0.25)","colorSuccessBgHover":"rgba(0, 50, 26, 0.32)","colorSuccessBorder":"rgba(211, 224, 217, 0.2)","colorSuccessBorderHover":"rgba(171, 212, 190, 0.2)","colorWarning":"#FAAD14","colorWarningHover":"rgba(170, 136, 43, 1)","colorWarningBg":"rgba(129, 116, 49, 0.25)","colorWarningBgHover":"rgba(129, 116, 49, 0.32)","colorWarningBorder":"rgba(255, 229, 143, 0.2)","colorWarningBorderHover":"rgba(255, 214, 102, 0.2)","colorError":"#FF4D4F","colorErrorHover":"rgba(165, 50, 48, 1)","colorErrorBg":"rgba(129, 46, 46, 0.25)","colorErrorBgHover":"rgba(129, 46, 46, 0.32)","colorErrorBorder":"rgba(255, 204, 199, 0.2)","colorErrorBorderHover":"rgba(255, 163, 158, 0.2)","colorLink":"#5551CC","boxShadow":"0px 4px 6px 0px rgba(255, 255, 255, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(255, 255, 255, 0.04),0px 8px 40px 0px rgba(255, 255, 255, 0.06),0px 0px 1px 0px rgba(255, 255, 255, 0.02)","colorTextWhite":"#fff","colorTextOnPrimary":"#fff","colorFillDisable":"#8D8C98","colorPurple":"#5551CC","colorPurpleHover":"#8383F0","colorPurpleBg":"rgba(226, 222, 255, 0.2)","colorPink":"#EC4899","colorPinkHover":"#E494BC","colorPinkBg":"rgba(251, 220, 239, 0.2)","colorYellow":"#EAB308","colorYellowHover":"#DBBE62","colorYellowBg":"rgba(255, 250, 184, 0.2)","colorOrange":"#FA8125","colorOrangeHover":"#F7A25F","colorOrangeBg":"rgba(255, 232, 201, 0.2)","colorTeal":"#14B8A6","colorTealHover":"#7BC7BE","colorTealBg":"rgba(200, 244, 233, 0.2)","colorBlue":"#0090FF","colorBlueHover":"#83BFED","colorBlueBg":"rgba(194, 229, 255, 0.2)","colorMauve":"#8E8C99","colorMauveHover":"#BBB8CA","colorMauveBg":"rgba(239, 240, 243, 0.2)","colorSlate":"#2C3A50","colorSlateHover":"#354252","colorSlateBg":"#232B36","colorLavender":"#A77BFF","colorLavenderHover":"#BFA5F3","colorLavenderBg":"rgba(150, 143, 167, 0.48)","boxShadowTertiary":"0px 12px 32px -16px rgba(255, 255, 255, 0.16),0px 12px 60px 0px rgba(255, 255, 255, 0.08),0px 0px 1px 0px rgba(255, 255, 255, 0.02)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(255, 255, 255, 0.16),-12px 0px 60px 0px rgba(255, 255, 255, 0.08),0px 0px 1px 0px rgba(255, 255, 255, 0.02);","boxShadowInput":"0px 12px 24px -16px rgba(255, 255, 255, 0.08),0px 12px 40px 0px rgba(255, 255, 255, 0.16),0px 0px 1px 0px rgba(255, 255, 255, 0.04)"}')},19888:function(B){B.exports=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"rgba(97, 92, 237, 0.08)","colorPrimaryBgHover":"#F2F0FF","colorPrimaryBorder":"#E2DEFF","colorPrimaryBorderHover":"#BCB5FF","colorPrimaryHover":"#9189FA","colorPrimary":"#615CED","colorPrimaryActive":"#4444C7","colorPrimaryTextHover":"#9189FA","colorPrimaryText":"#615CED","colorPrimaryTextActive":"#4444C7","colorTextBase":"#26244c","colorBgBase":"#FFFFFF","colorText":"rgba(38, 36, 76, 0.88)","colorTextSecondary":"rgba(38, 36, 76, 0.65)","colorTextTertiary":"rgba(38, 36, 76, 0.45)","colorTextQuaternary":"rgba(38, 36, 76, 0.25)","colorBorder":"#cdd0dc","colorBorderSecondary":"#e6e8ee","colorFill":"#cdd0dc5c","colorFillSecondary":"#cdd0dc33","colorFillTertiary":"#cdd0dc26","colorFillQuaternary":"#cdd0dc1a","colorBgContainer":"#FFFFFF","colorBgElevated":"#FFFFFF","colorBgLayout":"#f9fafd","colorBgSpotlight":"rgba(38, 36, 76, 0.85)","colorBgMask":"rgba(20, 19, 39, 0.45)","colorInfo":"#0B83F1","colorInfoHover":"#5EBCFF","colorInfoBorder":"#87D1FF","colorInfoText":"#0B83F1","colorInfoBg":"#E6F7FF","colorInfoBgHover":"#B0E3FF","colorInfoBorderHover":"#5EBCFF","colorSuccess":"#5BB98B","colorSuccessHover":"#ABD4BE","colorSuccessBg":"#EBFAF0","colorSuccessBgHover":"#DFEDE4","colorSuccessBorder":"#D3E0D9","colorSuccessBorderHover":"#ABD4BE","colorWarning":"#FAAD14","colorWarningHover":"#FFD666","colorWarningBg":"#FFFBE6","colorWarningBgHover":"#FFF1B8","colorWarningBorder":"#FFE58F","colorWarningBorderHover":"#FFD666","colorError":"#FF4D4F","colorErrorHover":"#FF7875","colorErrorBg":"#FFF2F0","colorErrorBgHover":"#FFF1F0","colorErrorBorder":"#FFCCC7","colorErrorBorderHover":"#FFA39E","colorLink":"#615CED","boxShadow":"0px 4px 6px 0px rgba(0, 0, 0, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(0, 0, 0, 0.06),0px 8px 40px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","colorTextWhite":"#ffffff","colorTextOnPrimary":"#ffffff","colorFillDisable":"#DBDAE7","colorPurple":"#615CED","colorPurpleHover":"#8080FF","colorPurpleBg":"rgba(226, 222, 255, 0.8)","colorPink":"#EC4899","colorPinkHover":"#E593BC","colorPinkBg":"rgba(251, 220, 239, 0.8)","colorYellow":"#EAB308","colorYellowHover":"#F1D372","colorYellowBg":"rgba(255, 250, 184, 0.8)","colorOrange":"#FA8125","colorOrangeHover":"#E88C45","colorOrangeBg":"rgba(255, 232, 201, 0.8)","colorTeal":"#14B8A6","colorTealHover":"#5FB3A9","colorTealBg":"rgba(200, 244, 233, 0.8)","colorBlue":"#0090FF","colorBlueHover":"#72BCF5","colorBlueBg":"rgba(194, 229, 255, 0.8)","colorMauve":"#8E8C99","colorMauveHover":"#C0BFC8","colorMauveBg":"rgba(239, 240, 243, 0.8)","colorSlate":"#1E293B","colorSlateHover":"#475569","colorSlateBg":"#E2E8F0","colorLavender":"#A77BFF","colorLavenderHover":"#BB99FF","colorLavenderBg":"rgba(226, 212, 255, 0.8)","boxShadowTertiary":"0px 12px 32px -16px rgba(0, 0, 0, 0.24),0px 12px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(0, 0, 0, 0.24),-12px 0px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(54, 54, 73, 0.04),0px 12px 40px 0px rgba(51, 51, 71, 0.08),0px 0px 1px 0px rgba(44, 44, 54, 0.02)"}')},44719:function(B){B.exports=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"#181818","colorPrimaryBgHover":"#2E2E2E","colorPrimaryBorder":"#323232","colorPrimaryBorderHover":"#2C2C2C","colorPrimaryHover":"#DFDFDF","colorPrimary":"#E4E4E4","colorPrimaryActive":"#7E7E7E","colorPrimaryTextHover":"#909090","colorPrimaryText":"#676767","colorPrimaryTextActive":"#959595","colorTextBase":"#E7E7ED","colorBgBase":"#0A0A0B","colorText":"#E7E7EDC7","colorTextSecondary":"#E7E7EDA6","colorTextTertiary":"#E7E7ED73","colorTextQuaternary":"#E7E7ED40","colorBorder":"#5B5B5BCC","colorBorderSecondary":"#323232CC","colorFill":"#E7E7ED2E","colorFillSecondary":"#E7E7ED1F","colorFillTertiary":"#E7E7ED14","colorFillQuaternary":"#E7E7ED0A","colorBgContainer":"#121212","colorBgElevated":"#212121","colorBgLayout":"#141414","colorBgSpotlight":"#525252D9","colorBgMask":"#050508CC","colorInfo":"#0B83F1","colorInfoHover":"#5EBCFF","colorInfoBorder":"#3990C9","colorInfoText":"#0B83F1","colorInfoBg":"#112233","colorInfoBgHover":"#264866","colorInfoBorderHover":"#5EBCFF","colorSuccess":"#5BB98B","colorSuccessHover":"#74A47C","colorSuccessBg":"#293631","colorSuccessBgHover":"#3F5147","colorSuccessBorder":"#73A377","colorSuccessBorderHover":"#ABD4BE","colorWarning":"#FAAD14","colorWarningHover":"#FF8C28","colorWarningBg":"#2D231A","colorWarningBgHover":"#4D3B23","colorWarningBorder":"#FFA628","colorWarningBorderHover":"#FFD666","colorError":"#FF4D4F","colorErrorHover":"#EE654E","colorErrorBg":"#2B0B08","colorErrorBgHover":"#4A2A28","colorErrorBorder":"#EE5B4E","colorErrorBorderHover":"#FFA39E","colorLink":"#4D7DFF","boxShadow":"0px 4px 6px 0px rgba(255, 255, 255, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(255, 255, 255, 0.06),0px 8px 40px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","colorTextWhite":"#ffffff","colorTextOnPrimary":"#000000","colorFillDisable":"#898989","colorPurple":"#615CED","colorPurpleHover":"#8383F0","colorPurpleBg":"#6964877A","colorPink":"#EC4899","colorPinkHover":"#E494BC","colorPinkBg":"#53424D7A","colorYellow":"#EAB308","colorYellowHover":"#DBBE62","colorYellowBg":"#9585527A","colorOrange":"#FA8125","colorOrangeHover":"#F7A25F","colorOrangeBg":"#6F58417A","colorTeal":"#14B8A6","colorTealHover":"#7BC7BE","colorTealBg":"#4658547A","colorBlue":"#0090FF","colorBlueHover":"#83BFED","colorBlueBg":"#5E76897A","colorMauve":"#8E8C99","colorMauveHover":"#BBB8CA","colorMauveBg":"#5859647A","colorSlate":"#2C3A50","colorSlateHover":"#354252","colorSlateBg":"#232B36","colorLavender":"#A77BFF","colorLavenderHover":"#BFA5F3","colorLavenderBg":"rgba(150, 143, 167, 0.48)","boxShadowTertiary":"0px 12px 32px -16px rgba(255, 255, 255, 0.24),0px 12px 60px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(255, 255, 255, 0.24),-12px 0px 60px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(255, 255, 255, 0.08),0px 12px 40px 0px rgba(255, 255, 255, 0.16),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","colorTextBlack":"#000000"}')},57249:function(B){B.exports=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"rgba(244, 244, 247, 1)","colorPrimaryBgHover":"rgba(239, 239, 244, 1)","colorPrimaryBorder":"rgba(62, 63, 66, 1)","colorPrimaryBorderHover":"rgba(130, 132, 137, 1)","colorPrimaryHover":"rgba(38, 38, 41, 1)","colorPrimary":"rgba(26, 26, 29, 1)","colorPrimaryActive":"rgba(0, 0, 0, 1)","colorPrimaryTextHover":"rgba(38, 38, 41, 1)","colorPrimaryText":"rgba(26, 26, 29, 1)","colorPrimaryTextActive":"rgba(0, 0, 0, 1)","colorTextBase":"rgba(26, 26, 29, 1)","colorBgBase":"rgba(255, 255, 255, 1)","colorText":"rgba(26, 26, 29, 0.88)","colorTextSecondary":"rgba(26, 26, 29, 0.65)","colorTextTertiary":"rgba(26, 26, 29, 0.45)","colorTextQuaternary":"rgba(26, 26, 29, 0.25)","colorBorder":"rgba(187, 187, 193, 1)","colorBorderSecondary":"rgba(234, 234, 234, 1)","colorFill":"rgba(0, 0, 43, 0.06)","colorFillSecondary":"rgba(0, 0, 85, 0.03)","colorFillTertiary":"rgba(205, 208, 220, 0.15)","colorFillQuaternary":"rgba(205, 208, 220, 0.1)","colorBgContainer":"rgba(255, 255, 255, 1)","colorBgElevated":"rgba(255, 255, 255, 1)","colorBgLayout":"rgba(250, 250, 251, 1)","colorBgSpotlight":"rgba(26, 26, 29, 0.85)","colorBgMask":"rgba(0, 0, 0, 0.45)","colorInfo":"rgba(11, 131, 241, 1)","colorInfoHover":"rgba(94, 188, 255, 1)","colorInfoBorder":"rgba(135, 209, 255, 1)","colorInfoText":"rgba(11, 131, 241, 1)","colorInfoBg":"rgba(230, 247, 255, 1)","colorInfoBgHover":"rgba(176, 227, 255, 1)","colorInfoBorderHover":"rgba(94, 188, 255, 1)","colorSuccess":"rgba(91, 185, 139, 1)","colorSuccessHover":"rgba(171, 212, 190, 1)","colorSuccessBg":"rgba(235, 250, 240, 1)","colorSuccessBgHover":"rgba(223, 237, 228, 1)","colorSuccessBorder":"rgba(211, 224, 217, 1)","colorSuccessBorderHover":"rgba(171, 212, 190, 1)","colorWarning":"rgba(250, 173, 20, 1)","colorWarningHover":"rgba(255, 214, 102, 1)","colorWarningBg":"rgba(255, 251, 230, 1)","colorWarningBgHover":"rgba(255, 241, 184, 1)","colorWarningBorder":"rgba(255, 229, 143, 1)","colorWarningBorderHover":"rgba(255, 214, 102, 1)","colorError":"rgba(255, 77, 79, 1)","colorErrorHover":"rgba(255, 120, 117, 1)","colorErrorBg":"rgba(255, 242, 240, 1)","colorErrorBgHover":"rgba(255, 241, 240, 1)","colorErrorBorder":"rgba(255, 204, 199, 1)","colorErrorBorderHover":"rgba(255, 163, 158, 1)","colorLink":"rgba(0, 77, 255, 1)","boxShadow":"0px 4px 6px 0px rgba(0, 0, 0, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(0, 0, 0, 0.06),0px 8px 40px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","colorTextWhite":"#ffffff","colorTextOnPrimary":"#ffffff","colorFillDisable":"rgba(232, 232, 235, 1)","colorPurple":"rgba(97, 92, 237, 1)","colorPurpleHover":"#8080FF","colorPurpleBg":"rgba(226, 222, 255, 0.8)","colorPink":"rgba(236, 72, 153, 1)","colorPinkHover":"#E593BC","colorPinkBg":"rgba(251, 220, 239, 0.8)","colorYellow":"rgba(234, 179, 8, 1)","colorYellowHover":"#F1D372","colorYellowBg":"rgba(255, 250, 184, 0.8)","colorOrange":"rgba(250, 129, 37, 1)","colorOrangeHover":"#E88C45","colorOrangeBg":"rgba(255, 232, 201, 0.8)","colorTeal":"rgba(20, 184, 166, 1)","colorTealHover":"#5FB3A9","colorTealBg":"rgba(200, 244, 233, 0.8)","colorBlue":"rgba(0, 144, 255, 1)","colorBlueHover":"#72BCF5","colorBlueBg":"rgba(194, 229, 255, 0.8)","colorMauve":"rgba(142, 140, 153, 1)","colorMauveHover":"#C0BFC8","colorMauveBg":"rgba(239, 240, 243, 0.8)","colorSlate":"#2C3A50","colorSlateHover":"#354252","colorSlateBg":"#232B36","boxShadowTertiary":"0px 12px 32px -16px rgba(0, 0, 0, 0.24),0px 12px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(0, 0, 0, 0.24),-12px 0px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(54, 54, 73, 0.04),0px 12px 40px 0px rgba(51, 51, 71, 0.08),0px 0px 1px 0px rgba(44, 44, 54, 0.02)"}')}}]);
