"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4248],{48676:function(v,r,e){e.r(r);var u=e(48305),i=e.n(u),c=e(10650),p=e(75271),a=e(52676),d=function(){var f=(0,p.useState)(0),s=i()(f,2),l=s[0],m=s[1],_=function(t){console.log("onChange:",t),m(t)};return(0,a.jsx)("div",{style:{width:"50%"},children:(0,a.jsx)(c.Z,{current:l,onChange:_,items:[{title:"A Step"},{title:"B Step"}]})})};r.default=d},52273:function(v,r,e){e.r(r);var u=e(48305),i=e.n(u),c=e(10650),p=e(75271),a=e(52676),d=function(){var f=(0,p.useState)(0),s=i()(f,2),l=s[0],m=s[1],_=function(h){console.log("onChange:",h),m(h)},g="This is a description.";return(0,a.jsx)("div",{style:{width:"50%"},children:(0,a.jsx)(c.Z,{current:l,onChange:_,items:[{title:"A Step",description:g},{title:"B Step",description:g}]})})};r.default=d},10843:function(v,r,e){e.r(r);var u=e(48305),i=e.n(u),c=e(10650),p=e(75271),a=e(52676),d=function(){var f=(0,p.useState)(0),s=i()(f,2),l=s[0],m=s[1],_=function(t){console.log("onChange:",t),m(t)};return(0,a.jsx)("div",{style:{width:"50%"},children:(0,a.jsx)(c.Z,{current:l,onChange:_,direction:"vertical",items:[{title:"A Step"},{title:"B Step"}]})})};r.default=d},10650:function(v,r,e){e.d(r,{Z:function(){return O}});var u=e(26068),i=e.n(u),c=e(51886),p=e(71649),a=e(74472),d=e(82187),P=e.n(d),f=e(75271),s=e(53649),l=e.n(s),m=e(75469),_,g=(0,m.Z)(_||(_=l()([`
.`,`-steps {
  .`,`-steps-item-container {
    display: flex;
    flex-direction: row;
  }
  
  .`,"-steps-item:not(.","-steps-item-active):not(.",`-steps-item-process) {
    .`,`-steps-item-container {
      &:hover {
        .`,`-steps-item-icon {
          border-color: transparent !important;
        }
      }
    }
  }
  
  .`,`-steps-item-icon {
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--`,`-color-border-secondary);
  }

  .`,`-steps-item-process {
    .`,`-steps-item-icon {
      border-color: transparent !important;
    }
  }
  
  .`,`-steps-item-finish {
    .`,`-steps-item-icon {
      height: 20px !important;
    }
    
    .`,`-steps-icon {
      max-width: 20px;
      max-height: 20px;
      font-size: 20px !important;
      line-height: 20px !important;
      top: -0.5px !important;
      
      .`,`-finish-icon {
        background-color: var(--`,`-color-primary-bg);
        border-radius: 50%;
        font-size: 20px !important;
        width: 20px;
        height: 20px;
        color: var(--`,`-color-primary);
      }
    }
  }
  
  .`,`-steps-item-title {
    padding-inline-end: 8px;
    line-height: 20px;
    color: var(--`,`-color-text) !important;
    font-size: 14px;
    font-weight: 500;
    
    &::after {
      background-color: var(--`,`-color-border-secondary) !important;
      height: 1px;
      background: var(--`,`-color-border-secondary);
    }
  }
  
  .`,`-steps-item-description {
    font-size: 12px;
    line-height: 20px;
    color: var(--`,`-color-text-tertiary) !important;
  }
  
  .`,`-steps-item-wait {
    .`,`-steps-item-icon {
      background-color: var(--`,`-color-primary-bg);
    }
  }
  
  &.`,"-steps-horizontal:not(.",`-steps-label-vertical) {
    .`,`-steps-item {
      padding-inline-start: 8px;
    }
  }
}

.`,`-steps-vertical {
  display: flex;
  min-height: 182px;
  align-items: center;
  justify-content: center;
  
  .`,`-steps-item {
    .`,`-steps-item-icon {
      margin-inline-end: 9px !important;
    }
  }
  
  .`,`-steps-item-tail::after {
    width: 1px !important;
    background-color: var(--`,`-color-border-secondary) !important;
  }
}
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),t=e(52676),h=function(o){var A=(0,c.getCommonConfig)(),C=A.sparkPrefix,D=g(),S=(0,f.useMemo)(function(){if(o.items)return o.items.map(function(E,M){var x=E.status;return!x&&o.current!==void 0&&(M<o.current?x="finish":M===o.current?x="process":x="wait"),x==="finish"?i()(i()({},E),{},{icon:(0,t.jsx)(p.Z,{className:"".concat(C,"-finish-icon")})}):E})},[o.items,o.current]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D,{}),(0,t.jsx)(a.Z,i()(i()({},o),{},{items:S,className:P()("".concat(C,"-steps"),o.className)}))]})},O=h}}]);
