"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4248],{73015:function(h,r,t){t.r(r);var u=t(48305),i=t.n(u),c=t(85085),f=t(75271),a=t(52676),l=function(){var d=(0,f.useState)(0),s=i()(d,2),p=s[0],m=s[1],_=function(e){console.log("onChange:",e),m(e)};return(0,a.jsx)("div",{style:{width:"50%"},children:(0,a.jsx)(c.Z,{current:p,onChange:_,items:[{title:"A Step"},{title:"B Step"}]})})};r.default=l},39237:function(h,r,t){t.r(r);var u=t(48305),i=t.n(u),c=t(85085),f=t(75271),a=t(52676),l=function(){var d=(0,f.useState)(0),s=i()(d,2),p=s[0],m=s[1],_=function(v){console.log("onChange:",v),m(v)},g="This is a description.";return(0,a.jsx)("div",{style:{width:"50%"},children:(0,a.jsx)(c.Z,{current:p,onChange:_,items:[{title:"A Step",description:g},{title:"B Step",description:g}]})})};r.default=l},93141:function(h,r,t){t.r(r);var u=t(48305),i=t.n(u),c=t(85085),f=t(75271),a=t(52676),l=function(){var d=(0,f.useState)(0),s=i()(d,2),p=s[0],m=s[1],_=function(e){console.log("onChange:",e),m(e)};return(0,a.jsx)("div",{style:{width:"50%"},children:(0,a.jsx)(c.Z,{current:p,onChange:_,direction:"vertical",items:[{title:"A Step"},{title:"B Step"}]})})};r.default=l},85085:function(h,r,t){t.d(r,{Z:function(){return O}});var u=t(26068),i=t.n(u),c=t(31209),f=t(71649),a=t(74472),l=t(82187),P=t.n(l),d=t(75271),s=t(53649),p=t.n(s),m=t(88974),_,g=(0,m.Z)(_||(_=p()([`
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
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),e=t(52676),v=function(o){var A=(0,c.getCommonConfig)(),C=A.sparkPrefix,D=g(),S=(0,d.useMemo)(function(){if(o.items)return o.items.map(function(E,M){var x=E.status;return!x&&o.current!==void 0&&(M<o.current?x="finish":M===o.current?x="process":x="wait"),x==="finish"?i()(i()({},E),{},{icon:(0,e.jsx)(f.Z,{className:"".concat(C,"-finish-icon")})}):E})},[o.items,o.current]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(D,{}),(0,e.jsx)(a.Z,i()(i()({},o),{},{items:S,className:P()("".concat(C,"-steps"),o.className)}))]})},O=v}}]);
