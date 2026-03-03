"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[2387],{18729:function(b,A,o){o.d(A,{Z:function(){return x}});var D=o(26068),a=o.n(D),y="rgba(0,0,0,0)",C=2,M=4,d=6,T=8,i=12,l=999,t="normal 12px/20px inherit",h="500 12px/20px inherit",v="normal 12px/20px Menlo, monospace",N="500 13px/20px inherit",F="normal 14px/24px inherit",m="500 14px/24px inherit",j="normal 14px/24px Menlo, monospace",f="normal 16px/28px inherit",u="500 16px/28px inherit",c="500 18px/32px inherit",p="500 20px/36px inherit",g="500 24px/44px inherit",E="500 32px/48px inherit";function x(e,P){return{theme:{cssVar:!0,hashed:!1,darkMode:P,token:a()({borderRadiusXS:C,borderRadiusSM:M,borderRadius:d,borderRadiusLG:T,borderRadiusXL:i,borderRadiusFull:l,footnoteRegular:t,footnoteMedium:h,footnoteSystemMonospace:v,bodyFormTitle:N,bodyRegular:F,bodyMedium:m,bodyCode:j,h5Regular:f,h5Medium:u,h4Medium:c,h3Medium:p,h2Medium:g,h1Medium:E},e),components:{Alert:{colorErrorBorder:y,colorInfoBorder:y,colorSuccessBorder:y,colorWarningBorder:y,colorInfoBg:e.colorInfoBg,borderRadiusLG:0,defaultPadding:"8px 20px",fontSize:12,lineHeight:"20px"},Badge:{colorError:e.colorPrimary,indicatorHeight:16,textFontSize:10},Breadcrumb:{separatorMargin:4,lastItemColor:e.colorText},Button:{contentFontSizeSM:12,defaultHoverBg:e.colorFillSecondary,defaultHoverBorderColor:e.colorBorderSecondary,defaultHoverColor:e.colorText,defaultActiveBg:e.colorFillSecondary,defaultActiveBorderColor:e.colorBorderSecondary,defaultActiveColor:e.colorText,defaultGhostColor:e.colorText,defaultGhostBorderColor:"transparent",dangerShadow:"none",defaultShadow:"none",primaryShadow:"none"},DatePicker:{paddingInline:8,colorBgBase:e.colorBgBase,colorBgContainerDisabled:e.colorFillTertiary},Dropdown:{paddingBlock:4,controlPaddingHorizontal:8,controlItemBgHover:e.colorFillTertiary},Progress:{remainingColor:e.colorPrimaryBg,defaultColor:e.colorPrimary},Input:{colorBgBase:e.colorBgBase,colorBgContainerDisabled:e.colorFillTertiary},InputNumber:{colorBgBase:e.colorBgBase,colorBgContainerDisabled:e.colorFillTertiary},Select:{colorBgBase:e.colorBgBase,selectorBg:e.colorBgBase,colorBgContainerDisabled:e.colorFillTertiary},Skeleton:{paragraphLiHeight:24,paragraphMarginTop:16,blockRadius:8},Slider:{railBg:e.colorPrimaryBg,railHoverBg:e.colorPrimaryBgHover,trackBg:e.colorPrimary,trackHoverBg:e.colorPrimary,handleColor:e.colorPrimary,railSize:8,handleSize:12,handleSizeHover:12},Segmented:{itemSelectedBg:e.colorBgBase,trackPadding:4,controlHeight:40,controlHeightLG:42,itemHoverBg:"unset"},Steps:{iconSize:20,iconFontSize:12,titleLineHeight:20},Modal:{headerBg:e.colorBgBase,contentBg:e.colorBgBase,titleFontSize:16,controlHeight:20},Tooltip:{sizePopupArrow:0},Popover:{sizePopupArrow:0},Table:{cellPaddingInline:20},Form:{itemMarginBottom:20},Collapse:{contentPadding:"8px 12px",headerPadding:"4px 12px"},Descriptions:{colonMarginRight:10,verticalLabelPaddingBottom:4,verticalContentPaddingBottom:24},Switch:{handleBg:e.colorBgContainer,trackHeight:24,handleSize:20,trackHeightSM:20,handleSizeSM:16,trackMinWidth:44,trackMinWidthSM:32}}},checkbox:{style:{fontWeight:"500"}},radio:{style:{fontWeight:"500"}}}}},23636:function(b,A,o){o.d(A,{ZP:function(){return Qr}});var D=o(26068),a=o.n(D),y=o(48305),C=o.n(y),M=o(67825),d=o.n(M),T=o(53649),i=o.n(T),l=o(30764),t=o(75271),h,v=(0,l.Z)(h||(h=i()([`
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
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),N=null,F,m=(0,l.Z)(F||(F=i()([`
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
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),j=null,f,u=(0,l.Z)(f||(f=i()([`
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
.`,"-btn-primary.","-btn-variant-solid:not(:disabled):not(.","-btn-background-ghost):not(.",`-btn-disabled):hover {
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

/* Keep white text color for primaryLess buttons */
.spark-button-primaryLess.`,`-btn-primary {
  color: var(--`,`-color-text-white);
}
.spark-button-primaryLess.`,"-btn-primary.","-btn-variant-solid:not(:disabled):not(.",`-btn-disabled):hover {
  color: var(--`,`-color-text-white);
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),c=null,p,g=(0,l.Z)(p||(p=i()([`
.`,`-cascader-dropdown {
  .`,`-cascader-menu-item:hover {
    background: var(--`,`-color-fill-tertiary);
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),E=null,x,e=(0,l.Z)(x||(x=i()([`
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
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),P=null,n,s=(0,l.Z)(n||(n=i()([`
/* \u53D6\u6D88\u6240\u6709button\u7684boxShadow */
.`,`-float-btn {
  box-shadow: var(--`,`-box-shadow);
  
  &.`,`-float-btn-default {
    border: 1px solid var(--`,`-color-border-secondary);
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),H=null,B,R=(0,l.Z)(B||(B=i()([`
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
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),K=null,L,k=(0,l.Z)(L||(L=i()([`
.`,`-input-outlined,
.`,"-input-outlined.",`-input-disabled {
  border-color: var(--`,`-color-border-secondary);
}

.`,`-input-sm {
  font-size: 12px;
  height: 24px;
}

.`,"-input-search.","-input-group-wrapper.",`-input-group-wrapper-outlined {
  border: 1px solid var(--`,`-color-border-secondary);
  border-radius: var(--`,`-border-radius);
  transition: all 0.2s;

  .`,`-input-wrapper {
    .`,`-input-affix-wrapper {
      border: none;
      box-shadow: none;

      &.`,`-input-affix-wrapper-focused,
      &:focus-within {
        border: none;
        box-shadow: none;
      }
    }

    .`,"-input-group-addon .",`-input-search-button {
      border: none;
      box-shadow: none;
    }
  }

  &:hover {
    border-color: var(--`,`-color-primary);
  }

  &:has(.`,`-input-affix-wrapper-focused),
  &:has(.`,`-input-affix-wrapper:focus-within) {
    border-color: var(--`,`-color-primary);
    box-shadow: 0 0 0 2px rgba(var(--`,`-color-primary-rgb, 22, 119, 255), 0.1);
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),Q=null,I,U=(0,l.Z)(I||(I=i()([`
.`,`-message-notice-content {
  border: 1px solid var(--`,`-color-border-secondary);
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix}),J=null,W,sr=(0,l.Z)(W||(W=i()([`
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
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),yr=null,Y,dr=(0,l.Z)(Y||(Y=i()([`
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
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),Ir=null,V,G=(0,l.Z)(V||(V=i()([`
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
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),qr=null,hr,Or=(0,l.Z)(hr||(hr=i()([`
.`,`-segmented {
  .`,`-segmented-item-selected {
    box-shadow: none;
  }
  
  .`,`-segmented-thumb {
    box-shadow: none !important;
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),rn=null,Sr,jr=(0,l.Z)(Sr||(Sr=i()([`
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
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),nn=null,Fr,Rr=(0,l.Z)(Fr||(Fr=i()([`
.`,`-slider {
  margin-left: 0;
  margin-right: 0;

  /* \u7AEF\u70B9\u9632\u6EA2\u51FA\uFF1A\u6E10\u53D8 translateX \u907F\u514D\u6296\u52A8 */
  &.`,"-slider-horizontal:not(.",`-slider-reverse) {
    .`,`-slider-handle {
      &[style*='left: 0%'], &[style*='left:0%'] { transform: translateX(0%) !important; }
      &[style*='left: 1%'], &[style*='left:1%'] { transform: translateX(-25%) !important; }
      &[style*='left: 2%'], &[style*='left:2%'] { transform: translateX(-50%) !important; }
      &[style*='left: 98%'], &[style*='left:98%'] { transform: translateX(-50%) !important; }
      &[style*='left: 99%'], &[style*='left:99%'] { transform: translateX(-75%) !important; }
      &[style*='left: 100%'], &[style*='left:100%'] { transform: translateX(-100%) !important; }
    }
  }

  &.`,"-slider-horizontal.",`-slider-reverse {
    .`,`-slider-handle {
      &[style*='right: 0%'], &[style*='right:0%'] { transform: translateX(0%) !important; }
      &[style*='right: 1%'], &[style*='right:1%'] { transform: translateX(25%) !important; }
      &[style*='right: 2%'], &[style*='right:2%'] { transform: translateX(50%) !important; }
      &[style*='right: 98%'], &[style*='right:98%'] { transform: translateX(50%) !important; }
      &[style*='right: 99%'], &[style*='right:99%'] { transform: translateX(75%) !important; }
      &[style*='right: 100%'], &[style*='right:100%'] { transform: translateX(100%) !important; }
    }
  }

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
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),on=null,Er,Lr=(0,l.Z)(Er||(Er=i()([`
.`,`-table-cell {
  border-radius: 0;
}
.`,"-table-wrapper .","-table .",`-table-header {
  border-radius: 0;
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),en=null,_r,kr=(0,l.Z)(_r||(_r=i()([`
.`,`-tooltip {
  .`,`-tooltip-inner {
    border: 1px solid var(--`,`-color-border-secondary);
    box-shadow: var(--`,`-box-shadow);
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),tn=null,Cr,Wr=(0,l.Z)(Cr||(Cr=i()([`
.`,"-tree .",`-tree-treenode {
  margin-bottom: 8px;
}

.`,"-tree .",`-tree-treenode:last-child {
  margin-bottom: 0;
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),an=null,Tr,Zr=(0,l.Z)(Tr||(Tr=i()([`
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
`]))),zr=function(){var $=Zr(),nr=v(),_=m(),or=u(),er=g(),tr=e(),fr=s(),ar=R(),xr=k(),O=U(),pr=sr(),ir=dr(),lr=G(),gr=Or(),br=jr(),cr=Rr(),ur=Lr(),vr=kr(),mr=Wr();return function(){return t.createElement(t.Fragment,null,t.createElement($),t.createElement(nr),t.createElement(_),t.createElement(or),t.createElement(er),t.createElement(tr),t.createElement(fr),t.createElement(ar),t.createElement(xr),t.createElement(O),t.createElement(pr),t.createElement(ir),t.createElement(lr),t.createElement(gr),t.createElement(br),t.createElement(cr),t.createElement(ur),t.createElement(vr),t.createElement(mr))}},ln=null,Xr=o(40965),Hr=o(72771),Nr=o(86212),Z=o(86137),wr=o(43988),Kr=o(98286),Ur=o(85467),Yr=o(82187),Ar=o.n(Yr),q=o(60213),w=o(52676),Gr=["prefix","prefixCls","iconfont","children"];function $r(){var r=zr();return(0,w.jsx)(r,{})}var Dr={};function rr(r){var $,nr=r.prefix,_=nr===void 0?"":nr,or=r.prefixCls,er=or===void 0?"":or,tr=r.iconfont,fr=tr===void 0?"https://at.alicdn.com/t/a/font_4807885_xobxpcpwk4i.js":tr,ar=r.children,xr=ar===void 0?void 0:ar,O=d()(r,Gr),pr=(0,t.useState)(!1),ir=C()(pr,2),lr=ir[0],gr=ir[1],br=(0,t.useState)((($=r.locale)===null||$===void 0?void 0:$.locale)||"defaultKey"),cr=C()(br,2),ur=cr[0],vr=cr[1],mr=(0,q.getCommonConfig)(),Mr=mr.antPrefix,Jr=(0,t.useContext)(Kr.E_),Vr=Jr.theme,z=(0,t.useMemo)(function(){return er||(_?"".concat(_,"-ant"):Mr)},[er,_]),Pr=(0,Ur.Z)(r.theme||Dr,Vr||Dr,{prefixCls:z}),Br=(0,t.useMemo)(function(){var S=a()(a()({},Pr),{},{algorithm:Pr.darkMode?Hr.Z.darkAlgorithm:void 0});return S},[Pr]);return(0,t.useLayoutEffect)(function(){var S={antPrefix:z,configProviderProps:a()(a()({},O),{},{prefixCls:z}),iconfont:fr};_.length&&(S=a()(a()({},S),{},{sparkPrefix:"".concat(_,"-").concat(q.DEFAULT_SPARK_PREFIX),prefix:_}),console.log("debug","".concat(_,"-").concat(q.DEFAULT_SPARK_PREFIX))),(0,q.setCommonConfig)(a()(a()({},S),{},{isDarkMode:function(){try{return(O.theme.algorithm||Br.algorithm)===Hr.Z.darkAlgorithm}catch(X){return!1}}()})),gr(!0),Nr.ZP.config({top:24})},[]),(0,t.useLayoutEffect)(function(){Z.ZP.config({holderRender:function(X){return(0,w.jsx)(Z.ZP,a()(a()({},O),{},{prefixCls:z,theme:Br,wave:{disabled:!0},children:(0,w.jsx)(wr.Z,{className:Ar()("spark"),style:a()({},r.style),children:X},ur)}))}})},[O,z,lr]),(0,t.useLayoutEffect)(function(){var S,X;Xr.Z.updateLocale(((S=r.locale)===null||S===void 0?void 0:S.locale)||"zh-cn"),vr(((X=r.locale)===null||X===void 0?void 0:X.locale)||"defaultKey")},[r.locale]),(0,w.jsx)(Z.ZP,a()(a()({},O),{},{theme:Br,prefixCls:z,wave:{disabled:!0},children:(0,w.jsx)(wr.Z,{className:Ar()("spark",r.className),style:a()({},r.style),children:lr?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)($r,{}),xr]}):null},ur)}))}rr.ConfigContext=Z.ZP.ConfigContext,rr.config=function(r){Z.ZP.config(r)},rr.useConfig=Z.ZP.useConfig;var Qr=rr},19743:function(b,A,o){o.d(A,{Z:function(){return P}});var D=o(26068),a=o.n(D),y=o(82092),C=o.n(y),M=o(67825),d=o.n(M),T=o(60213),i=o(14679),l=o(56652),t=o(82187),h=o.n(t),v=o(60823),N=o(75271),F=o(53649),m=o.n(F),j=o(30764),f,u=(0,j.Z)(f||(f=m()([`
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
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),c=o(52676),p=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],g=function(s){var H=s.onOk,B=s.onCancel,R=s.okText,K=R===void 0?"\u786E\u5B9A":R,L=s.okButtonProps,k=s.cancelText,Q=k===void 0?"\u53D6\u6D88":k,I=s.cancelButtonProps,U=s.info,J=s.footer,W=d()(s,p),sr=u(),yr=(0,T.getCommonConfig)(),Y=yr.antPrefix,dr=function(V){if(B)B();else{var G;(G=W.onClose)===null||G===void 0||G.call(W,V)}};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(sr,{}),(0,c.jsx)(P,a()(a()({},W),{},{footer:J||(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"".concat(Y,"-drawer-footer-info"),children:U}),(0,c.jsxs)("div",{className:"".concat(Y,"-drawer-footer-buttons"),children:[(0,c.jsx)(v.Z,a()(a()({onClick:dr},I),{},{children:Q})),(0,c.jsx)(v.Z,a()(a()({type:"primary",onClick:H},L),{},{children:K}))]})]})}))]})},E=g,x=["children","className","style","showDivider"],e=function(s){var H=s.children,B=s.className,R=s.style,K=s.showDivider,L=K===void 0?!0:K,k=d()(s,x),Q=u(),I=(0,T.getCommonConfig)(),U=I.sparkPrefix,J=I.antPrefix;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(Q,{}),(0,c.jsx)(l.Z,a()(a()({closeIcon:(0,c.jsx)(i.Z,{size:24}),className:h()("".concat(U,"-drawer"),B,C()({},"".concat(J,"-show-divider"),L)),style:a()({},R)},k),{},{children:H}))]})};Object.assign(e,{Confirm:E});var P=e},39971:function(b,A,o){var D=o(48305),a=o.n(D),y=o(67825),C=o.n(y),M=o(26068),d=o.n(M),T=o(58911),i=o(88602),l=o(99090),t=o(62910),h=o(86212),v=o(52676),N=["content"],F={success:{type:"success",icon:(0,v.jsx)(T.Z,{})},warning:{type:"warning",icon:(0,v.jsx)(i.Z,{})},error:{type:"error",icon:(0,v.jsx)(l.Z,{})},info:{type:"info",icon:(0,v.jsx)(t.Z,{})}},m=function(u,c){var p,g;typeof c=="string"?g={content:c}:g=d()({},c);var E=g,x=E.content,e=C()(E,N);h.ZP.open(d()({type:u,content:x,icon:u==="loading"||(p=F[u])===null||p===void 0?void 0:p.icon},e))},j=function(u){var c=h.ZP.useMessage(u),p=a()(c,2),g=p[0],E=p[1],x=function(n,s){var H,B;typeof s=="string"?B={content:s,type:n}:B=d()(d()({},s),{},{type:n}),g[n](d()(d()({},B),{},{icon:(H=F[n])===null||H===void 0?void 0:H.icon}))},e=d()(d()({},g),{},{success:function(n){return x("success",n)},warning:function(n){return x("warning",n)},error:function(n){return x("error",n)},info:function(n){return x("info",n)},loading:function(n){return x("loading",n)}});return[e,E]};A.Z=d()(d()({},h.ZP),{},{success:function(u){return m("success",u)},warning:function(u){return m("warning",u)},error:function(u){return m("error",u)},info:function(u){return m("info",u)},loading:function(u){return m("loading",u)},useMessage:j})},23577:function(b){b.exports=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"#202041","colorPrimaryBgHover":"#202041","colorPrimaryBorder":"#2B2A55","colorPrimaryBorderHover":"#373476","colorPrimaryHover":"#857DE3","colorPrimary":"#5551CC","colorPrimaryActive":"#4643A1","colorPrimaryTextHover":"#857DE3","colorPrimaryText":"#5551CC","colorPrimaryTextActive":"#4643A1","colorTextBase":"#E7E7ED","colorBgBase":"#000000","colorText":"rgba(231, 231, 237, 0.88)","colorTextSecondary":"rgba(231, 231, 237, 0.65)","colorTextTertiary":"rgba(231, 231, 237, 0.45)","colorTextQuaternary":"rgba(231, 231, 237, 0.25)","colorBorder":"rgba(71, 71, 97, 0.8)","colorBorderSecondary":"rgba(56, 56, 76, 0.8)","colorFill":"rgba(231, 231, 237, 0.18)","colorFillSecondary":"rgba(231, 231, 237, 0.12)","colorFillTertiary":"rgba(231, 231, 237, 0.08)","colorFillQuaternary":"rgba(231, 231, 237, 0.04)","colorBgContainer":"#0F0F14","colorBgElevated":"#0F0F14","colorBgLayout":"#0F0F14","colorBgSpotlight":"rgba(71, 71, 97, 0.85)","colorBgMask":"rgba(5, 5, 8, 0.8)","colorInfo":"#0B83F1","colorInfoHover":"rgba(42, 114, 165, 1)","colorInfoBorder":"rgba(135, 209, 255, 0.2)","colorInfoText":"#0B83F1","colorInfoBg":"rgba(27, 73, 115, 0.25)","colorInfoBgHover":"rgba(27, 73, 115, 0.32)","colorInfoBorderHover":"rgba(94, 188, 255, 0.2)","colorSuccess":"#5BB98B","colorSuccessHover":"rgba(87, 141, 112, 1)","colorSuccessBg":"rgba(0, 50, 26, 0.25)","colorSuccessBgHover":"rgba(0, 50, 26, 0.32)","colorSuccessBorder":"rgba(211, 224, 217, 0.2)","colorSuccessBorderHover":"rgba(171, 212, 190, 0.2)","colorWarning":"#FAAD14","colorWarningHover":"rgba(170, 136, 43, 1)","colorWarningBg":"rgba(129, 116, 49, 0.25)","colorWarningBgHover":"rgba(129, 116, 49, 0.32)","colorWarningBorder":"rgba(255, 229, 143, 0.2)","colorWarningBorderHover":"rgba(255, 214, 102, 0.2)","colorError":"#FF4D4F","colorErrorHover":"rgba(165, 50, 48, 1)","colorErrorBg":"rgba(129, 46, 46, 0.25)","colorErrorBgHover":"rgba(129, 46, 46, 0.32)","colorErrorBorder":"rgba(255, 204, 199, 0.2)","colorErrorBorderHover":"rgba(255, 163, 158, 0.2)","colorLink":"#5551CC","boxShadow":"0px 4px 6px 0px rgba(255, 255, 255, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(255, 255, 255, 0.04),0px 8px 40px 0px rgba(255, 255, 255, 0.06),0px 0px 1px 0px rgba(255, 255, 255, 0.02)","colorTextWhite":"#fff","colorTextOnPrimary":"#fff","colorFillDisable":"#8D8C98","colorPurple":"#5551CC","colorPurpleHover":"#8383F0","colorPurpleBg":"rgba(226, 222, 255, 0.2)","colorPink":"#EC4899","colorPinkHover":"#E494BC","colorPinkBg":"rgba(251, 220, 239, 0.2)","colorYellow":"#EAB308","colorYellowHover":"#DBBE62","colorYellowBg":"rgba(255, 250, 184, 0.2)","colorOrange":"#FA8125","colorOrangeHover":"#F7A25F","colorOrangeBg":"rgba(255, 232, 201, 0.2)","colorTeal":"#14B8A6","colorTealHover":"#7BC7BE","colorTealBg":"rgba(200, 244, 233, 0.2)","colorBlue":"#0090FF","colorBlueHover":"#83BFED","colorBlueBg":"rgba(194, 229, 255, 0.2)","colorMauve":"#8E8C99","colorMauveHover":"#BBB8CA","colorMauveBg":"rgba(239, 240, 243, 0.2)","colorSlate":"#2C3A50","colorSlateHover":"#354252","colorSlateBg":"#232B36","colorLavender":"#A77BFF","colorLavenderHover":"#BFA5F3","colorLavenderBg":"rgba(150, 143, 167, 0.48)","boxShadowTertiary":"0px 12px 32px -16px rgba(255, 255, 255, 0.16),0px 12px 60px 0px rgba(255, 255, 255, 0.08),0px 0px 1px 0px rgba(255, 255, 255, 0.02)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(255, 255, 255, 0.16),-12px 0px 60px 0px rgba(255, 255, 255, 0.08),0px 0px 1px 0px rgba(255, 255, 255, 0.02);","boxShadowInput":"0px 12px 24px -16px rgba(255, 255, 255, 0.08),0px 12px 40px 0px rgba(255, 255, 255, 0.16),0px 0px 1px 0px rgba(255, 255, 255, 0.04)"}')},19888:function(b){b.exports=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"rgba(97, 92, 237, 0.08)","colorPrimaryBgHover":"#F2F0FF","colorPrimaryBorder":"#E2DEFF","colorPrimaryBorderHover":"#BCB5FF","colorPrimaryHover":"#9189FA","colorPrimary":"#615CED","colorPrimaryActive":"#4444C7","colorPrimaryTextHover":"#9189FA","colorPrimaryText":"#615CED","colorPrimaryTextActive":"#4444C7","colorTextBase":"#26244c","colorBgBase":"#FFFFFF","colorText":"rgba(38, 36, 76, 0.88)","colorTextSecondary":"rgba(38, 36, 76, 0.65)","colorTextTertiary":"rgba(38, 36, 76, 0.45)","colorTextQuaternary":"rgba(38, 36, 76, 0.25)","colorBorder":"#cdd0dc","colorBorderSecondary":"#e6e8ee","colorFill":"#cdd0dc5c","colorFillSecondary":"#cdd0dc33","colorFillTertiary":"#cdd0dc26","colorFillQuaternary":"#cdd0dc1a","colorBgContainer":"#FFFFFF","colorBgElevated":"#FFFFFF","colorBgLayout":"#f9fafd","colorBgSpotlight":"rgba(38, 36, 76, 0.85)","colorBgMask":"rgba(20, 19, 39, 0.45)","colorInfo":"#0B83F1","colorInfoHover":"#5EBCFF","colorInfoBorder":"#87D1FF","colorInfoText":"#0B83F1","colorInfoBg":"#E6F7FF","colorInfoBgHover":"#B0E3FF","colorInfoBorderHover":"#5EBCFF","colorSuccess":"#5BB98B","colorSuccessHover":"#ABD4BE","colorSuccessBg":"#EBFAF0","colorSuccessBgHover":"#DFEDE4","colorSuccessBorder":"#D3E0D9","colorSuccessBorderHover":"#ABD4BE","colorWarning":"#FAAD14","colorWarningHover":"#FFD666","colorWarningBg":"#FFFBE6","colorWarningBgHover":"#FFF1B8","colorWarningBorder":"#FFE58F","colorWarningBorderHover":"#FFD666","colorError":"#FF4D4F","colorErrorHover":"#FF7875","colorErrorBg":"#FFF2F0","colorErrorBgHover":"#FFF1F0","colorErrorBorder":"#FFCCC7","colorErrorBorderHover":"#FFA39E","colorLink":"#615CED","boxShadow":"0px 4px 6px 0px rgba(0, 0, 0, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(0, 0, 0, 0.06),0px 8px 40px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","colorTextWhite":"#ffffff","colorTextOnPrimary":"#ffffff","colorFillDisable":"#DBDAE7","colorPurple":"#615CED","colorPurpleHover":"#8080FF","colorPurpleBg":"rgba(226, 222, 255, 0.8)","colorPink":"#EC4899","colorPinkHover":"#E593BC","colorPinkBg":"rgba(251, 220, 239, 0.8)","colorYellow":"#EAB308","colorYellowHover":"#F1D372","colorYellowBg":"rgba(255, 250, 184, 0.8)","colorOrange":"#FA8125","colorOrangeHover":"#E88C45","colorOrangeBg":"rgba(255, 232, 201, 0.8)","colorTeal":"#14B8A6","colorTealHover":"#5FB3A9","colorTealBg":"rgba(200, 244, 233, 0.8)","colorBlue":"#0090FF","colorBlueHover":"#72BCF5","colorBlueBg":"rgba(194, 229, 255, 0.8)","colorMauve":"#8E8C99","colorMauveHover":"#C0BFC8","colorMauveBg":"rgba(239, 240, 243, 0.8)","colorSlate":"#1E293B","colorSlateHover":"#475569","colorSlateBg":"#E2E8F0","colorLavender":"#A77BFF","colorLavenderHover":"#BB99FF","colorLavenderBg":"rgba(226, 212, 255, 0.8)","boxShadowTertiary":"0px 12px 32px -16px rgba(0, 0, 0, 0.24),0px 12px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(0, 0, 0, 0.24),-12px 0px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(54, 54, 73, 0.04),0px 12px 40px 0px rgba(51, 51, 71, 0.08),0px 0px 1px 0px rgba(44, 44, 54, 0.02)"}')},44719:function(b){b.exports=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"#181818","colorPrimaryBgHover":"#2E2E2E","colorPrimaryBorder":"#323232","colorPrimaryBorderHover":"#2C2C2C","colorPrimaryHover":"#DFDFDF","colorPrimary":"#E4E4E4","colorPrimaryActive":"#7E7E7E","colorPrimaryTextHover":"#909090","colorPrimaryText":"#676767","colorPrimaryTextActive":"#959595","colorTextBase":"#E7E7ED","colorBgBase":"#0A0A0B","colorText":"#E7E7EDC7","colorTextSecondary":"#E7E7EDA6","colorTextTertiary":"#E7E7ED73","colorTextQuaternary":"#E7E7ED40","colorBorder":"#5B5B5BCC","colorBorderSecondary":"#323232CC","colorFill":"#E7E7ED2E","colorFillSecondary":"#E7E7ED1F","colorFillTertiary":"#E7E7ED14","colorFillQuaternary":"#E7E7ED0A","colorBgContainer":"#121212","colorBgElevated":"#212121","colorBgLayout":"#141414","colorBgSpotlight":"#525252D9","colorBgMask":"#050508CC","colorInfo":"#0B83F1","colorInfoHover":"#5EBCFF","colorInfoBorder":"#3990C9","colorInfoText":"#0B83F1","colorInfoBg":"#112233","colorInfoBgHover":"#264866","colorInfoBorderHover":"#5EBCFF","colorSuccess":"#5BB98B","colorSuccessHover":"#74A47C","colorSuccessBg":"#293631","colorSuccessBgHover":"#3F5147","colorSuccessBorder":"#73A377","colorSuccessBorderHover":"#ABD4BE","colorWarning":"#FAAD14","colorWarningHover":"#FF8C28","colorWarningBg":"#2D231A","colorWarningBgHover":"#4D3B23","colorWarningBorder":"#FFA628","colorWarningBorderHover":"#FFD666","colorError":"#FF4D4F","colorErrorHover":"#EE654E","colorErrorBg":"#2B0B08","colorErrorBgHover":"#4A2A28","colorErrorBorder":"#EE5B4E","colorErrorBorderHover":"#FFA39E","colorLink":"#4D7DFF","boxShadow":"0px 4px 6px 0px rgba(255, 255, 255, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(255, 255, 255, 0.06),0px 8px 40px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","colorTextWhite":"#ffffff","colorTextBlack":"#000000","colorTextOnPrimary":"#ffffff","colorFillDisable":"#898989","colorPurple":"#615CED","colorPurpleHover":"#8383F0","colorPurpleBg":"#6964877A","colorPink":"#EC4899","colorPinkHover":"#E494BC","colorPinkBg":"#53424D7A","colorYellow":"#EAB308","colorYellowHover":"#DBBE62","colorYellowBg":"#9585527A","colorOrange":"#FA8125","colorOrangeHover":"#F7A25F","colorOrangeBg":"#6F58417A","colorTeal":"#14B8A6","colorTealHover":"#7BC7BE","colorTealBg":"#4658547A","colorBlue":"#0090FF","colorBlueHover":"#83BFED","colorBlueBg":"#5E76897A","colorMauve":"#8E8C99","colorMauveHover":"#BBB8CA","colorMauveBg":"#5859647A","colorSlate":"#2C3A50","colorSlateHover":"#354252","colorSlateBg":"#232B36","colorLavender":"#A77BFF","colorLavenderHover":"#BFA5F3","colorLavenderBg":"rgba(150, 143, 167, 0.48)","boxShadowTertiary":"0px 12px 32px -16px rgba(255, 255, 255, 0.24),0px 12px 60px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(255, 255, 255, 0.24),-12px 0px 60px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(255, 255, 255, 0.08),0px 12px 40px 0px rgba(255, 255, 255, 0.16),0px 0px 1px 0px rgba(255, 255, 255, 0.04)"}')},57249:function(b){b.exports=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"rgba(244, 244, 247, 1)","colorPrimaryBgHover":"rgba(239, 239, 244, 1)","colorPrimaryBorder":"rgba(62, 63, 66, 1)","colorPrimaryBorderHover":"rgba(130, 132, 137, 1)","colorPrimaryHover":"rgba(38, 38, 41, 1)","colorPrimary":"rgba(26, 26, 29, 1)","colorPrimaryActive":"rgba(0, 0, 0, 1)","colorPrimaryTextHover":"rgba(38, 38, 41, 1)","colorPrimaryText":"rgba(26, 26, 29, 1)","colorPrimaryTextActive":"rgba(0, 0, 0, 1)","colorTextBase":"rgba(26, 26, 29, 1)","colorBgBase":"rgba(255, 255, 255, 1)","colorText":"rgba(26, 26, 29, 0.88)","colorTextSecondary":"rgba(26, 26, 29, 0.65)","colorTextTertiary":"rgba(26, 26, 29, 0.45)","colorTextQuaternary":"rgba(26, 26, 29, 0.25)","colorBorder":"rgba(187, 187, 193, 1)","colorBorderSecondary":"rgba(234, 234, 234, 1)","colorFill":"rgba(0, 0, 43, 0.06)","colorFillSecondary":"rgba(0, 0, 85, 0.03)","colorFillTertiary":"rgba(205, 208, 220, 0.15)","colorFillQuaternary":"rgba(205, 208, 220, 0.1)","colorBgContainer":"rgba(255, 255, 255, 1)","colorBgElevated":"rgba(255, 255, 255, 1)","colorBgLayout":"rgba(250, 250, 251, 1)","colorBgSpotlight":"rgba(26, 26, 29, 0.85)","colorBgMask":"rgba(0, 0, 0, 0.45)","colorInfo":"rgba(11, 131, 241, 1)","colorInfoHover":"rgba(94, 188, 255, 1)","colorInfoBorder":"rgba(135, 209, 255, 1)","colorInfoText":"rgba(11, 131, 241, 1)","colorInfoBg":"rgba(230, 247, 255, 1)","colorInfoBgHover":"rgba(176, 227, 255, 1)","colorInfoBorderHover":"rgba(94, 188, 255, 1)","colorSuccess":"rgba(91, 185, 139, 1)","colorSuccessHover":"rgba(171, 212, 190, 1)","colorSuccessBg":"rgba(235, 250, 240, 1)","colorSuccessBgHover":"rgba(223, 237, 228, 1)","colorSuccessBorder":"rgba(211, 224, 217, 1)","colorSuccessBorderHover":"rgba(171, 212, 190, 1)","colorWarning":"rgba(250, 173, 20, 1)","colorWarningHover":"rgba(255, 214, 102, 1)","colorWarningBg":"rgba(255, 251, 230, 1)","colorWarningBgHover":"rgba(255, 241, 184, 1)","colorWarningBorder":"rgba(255, 229, 143, 1)","colorWarningBorderHover":"rgba(255, 214, 102, 1)","colorError":"rgba(255, 77, 79, 1)","colorErrorHover":"rgba(255, 120, 117, 1)","colorErrorBg":"rgba(255, 242, 240, 1)","colorErrorBgHover":"rgba(255, 241, 240, 1)","colorErrorBorder":"rgba(255, 204, 199, 1)","colorErrorBorderHover":"rgba(255, 163, 158, 1)","colorLink":"rgba(0, 77, 255, 1)","boxShadow":"0px 4px 6px 0px rgba(0, 0, 0, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(0, 0, 0, 0.06),0px 8px 40px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","colorTextWhite":"#ffffff","colorTextOnPrimary":"#ffffff","colorFillDisable":"rgba(232, 232, 235, 1)","colorPurple":"rgba(97, 92, 237, 1)","colorPurpleHover":"#8080FF","colorPurpleBg":"rgba(226, 222, 255, 0.8)","colorPink":"rgba(236, 72, 153, 1)","colorPinkHover":"#E593BC","colorPinkBg":"rgba(251, 220, 239, 0.8)","colorYellow":"rgba(234, 179, 8, 1)","colorYellowHover":"#F1D372","colorYellowBg":"rgba(255, 250, 184, 0.8)","colorOrange":"rgba(250, 129, 37, 1)","colorOrangeHover":"#E88C45","colorOrangeBg":"rgba(255, 232, 201, 0.8)","colorTeal":"rgba(20, 184, 166, 1)","colorTealHover":"#5FB3A9","colorTealBg":"rgba(200, 244, 233, 0.8)","colorBlue":"rgba(0, 144, 255, 1)","colorBlueHover":"#72BCF5","colorBlueBg":"rgba(194, 229, 255, 0.8)","colorMauve":"rgba(142, 140, 153, 1)","colorMauveHover":"#C0BFC8","colorMauveBg":"rgba(239, 240, 243, 0.8)","colorSlate":"#2C3A50","colorSlateHover":"#354252","colorSlateBg":"#232B36","boxShadowTertiary":"0px 12px 32px -16px rgba(0, 0, 0, 0.24),0px 12px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(0, 0, 0, 0.24),-12px 0px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(54, 54, 73, 0.04),0px 12px 40px 0px rgba(51, 51, 71, 0.08),0px 0px 1px 0px rgba(44, 44, 54, 0.02)"}')}}]);
