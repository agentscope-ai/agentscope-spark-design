"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4248],{89671:function(v,e,t){t.r(e);var p=t(48305),r=t.n(p),f=t(52849),d=t(75271),a=t(52676),_=function(){var x=(0,d.useState)(0),s=r()(x,2),u=s[0],l=s[1],c=function(i){console.log("onChange:",i),l(i)};return(0,a.jsx)("div",{style:{width:"50%"},children:(0,a.jsx)(f.Z,{current:u,onChange:c,items:[{title:"A Step"},{title:"B Step"}]})})};e.default=_},19593:function(v,e,t){t.r(e);var p=t(48305),r=t.n(p),f=t(52849),d=t(75271),a=t(52676),_=function(){var x=(0,d.useState)(0),s=r()(x,2),u=s[0],l=s[1],c=function(g){console.log("onChange:",g),l(g)},m="This is a description.";return(0,a.jsx)("div",{style:{width:"50%"},children:(0,a.jsx)(f.Z,{current:u,onChange:c,items:[{title:"A Step",description:m},{title:"B Step",description:m}]})})};e.default=_},47129:function(v,e,t){t.r(e);var p=t(48305),r=t.n(p),f=t(52849),d=t(90264),a=t(75271),_=t(52676),P=function(){var s=(0,a.useState)(0),u=r()(s,2),l=u[0],c=u[1],m=function(g){console.log("onChange:",g),c(g)};return(0,_.jsx)(d.Z,{style:{width:"50%"},align:"center",justify:"center",children:(0,_.jsx)(f.Z,{current:l,onChange:m,direction:"vertical",items:[{title:"A Step"},{title:"B Step Extra"}]})})};e.default=P},52849:function(v,e,t){t.d(e,{Z:function(){return O}});var p=t(26068),r=t.n(p),f=t(60213),d=t(68278),a=t(98852),_=t(82187),P=t.n(_),x=t(75271),s=t(53649),u=t.n(s),l=t(30764),c,m=(0,l.Z)(c||(c=u()([`
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
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),i=t(52676),g=function(o){var D=(0,f.getCommonConfig)(),C=D.sparkPrefix,A=m(),S=(0,x.useMemo)(function(){if(o.items)return o.items.map(function(E,M){var h=E.status;return!h&&o.current!==void 0&&(M<o.current?h="finish":M===o.current?h="process":h="wait"),h==="finish"?r()(r()({},E),{},{icon:(0,i.jsx)(d.Z,{className:"".concat(C,"-finish-icon")})}):E})},[o.items,o.current]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(A,{}),(0,i.jsx)(a.Z,r()(r()({},o),{},{items:S,className:P()("".concat(C,"-steps"),o.className)}))]})},O=g}}]);
