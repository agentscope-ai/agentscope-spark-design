"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[5943],{58443:function(F,g,n){n.r(g);var j=n(48305),f=n.n(j),o=n(90895),l=n(38734),s=n(6944),h=n(90118),t=n(52676);g.default=function(){var d=o.Z.useForm(),i=f()(d,1),x=i[0],P=o.Z.useWatch("switch",x);return(0,t.jsxs)(o.Z,{layout:"vertical",form:x,children:[(0,t.jsx)(o.Z.Item,{label:"Your title",name:"input",tooltip:"One World, one dream.",children:(0,t.jsx)(l.Z,{placeholder:"Type here..."})}),(0,t.jsx)(o.Z.Item,{label:"Radio",name:"radio",required:!0,children:(0,t.jsxs)(s.ZP.Group,{children:[(0,t.jsx)(s.ZP,{value:"1",children:"Option 1"}),(0,t.jsx)(s.ZP,{value:"2",children:"Option 2"}),(0,t.jsx)(s.ZP,{value:"3",children:"Option 3"})]})}),(0,t.jsx)(o.Z.Item,{label:"Switch",name:"switch",required:!0,children:(0,t.jsx)(h.Z,{label:P?"Opening":"Closed"})})]})}},98181:function(F,g,n){n.r(g);var j=n(48305),f=n.n(j),o=n(90895),l=n(38734),s=n(6944),h=n(90118),t=n(52676);g.default=function(){var d=o.Z.useForm(),i=f()(d,1),x=i[0],P=o.Z.useWatch("switch",x);return(0,t.jsxs)(o.Z,{layout:"horizontal",form:x,labelCol:{flex:"100px"},children:[(0,t.jsx)(o.Z.Item,{label:"Your title",name:"input",tooltip:"One World, one dream.",children:(0,t.jsx)(l.Z,{placeholder:"Type here..."})}),(0,t.jsx)(o.Z.Item,{label:"Radio",name:"radio",required:!0,children:(0,t.jsxs)(s.ZP.Group,{children:[(0,t.jsx)(s.ZP,{value:"1",children:"Option 1"}),(0,t.jsx)(s.ZP,{value:"2",children:"Option 2"}),(0,t.jsx)(s.ZP,{value:"3",children:"Option 3"})]})}),(0,t.jsx)(o.Z.Item,{label:"Switch",name:"switch",required:!0,children:(0,t.jsx)(h.Z,{label:P?"Opening":"Closed"})})]})}},90895:function(F,g,n){n.d(g,{Z:function(){return b}});var j=n(31759),f=n.n(j),o=n(26068),l=n.n(o),s=n(67825),h=n.n(s),t=n(60213),d=n(62910),i=n(48290),x=n(85618),P=n(82187),I=n.n(P),c=n(75271),M=n(53649),O=n.n(M),a=n(30764),m,C=(0,a.Z)(m||(m=O()([`
.`,`-form {
  .`,`-required-mark {
    color: var(--`,`-color-error);
    line-height: 1;
    margin-top: 0;
    font-size: 16px;
  }
  
  .`,"-form-item .",`-form-item-label {
    text-align: left;
  }
}

.`,"-form-item .",`-form-item-label > label {
  font-weight: 500;
  white-space: normal;
  font-size: 13px;
  line-height: 20px;
  color: var(--`,`-color-text);
  gap: 4px;
}

.`,`-form-label-margin-small {
  .`,`-form-item-label > label {
    margin-right: 8px;
  }
}

.`,`-col {
  min-height: unset;
}
`])),function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),u=n(52676),T=["labelMarginRight"],y=["tooltip"],e=(0,c.forwardRef)(function(r,Z){var p=r.labelMarginRight,R=p===void 0?void 0:p,S=h()(r,T),W=(0,c.useRef)(null),L=(0,t.getCommonConfig)(),A=L.sparkPrefix,B=C();return(0,c.useImperativeHandle)(Z,function(){return W.current}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(B,{}),(0,u.jsx)(i.Z,l()(l()({},S),{},{className:I()(r.className,"".concat(A,"-form"),R==="small"&&"".concat(A,"-form-label-margin-small")),ref:W,requiredMark:function(K,U){return(0,u.jsxs)(u.Fragment,{children:[K,U.required&&(0,u.jsx)("span",{className:"".concat(A,"-required-mark"),children:"*"})]})}}))]})}),D=function(Z){var p=Z.tooltip,R=h()(Z,y),S=(0,u.jsx)(d.Z,{});function W(){if(p){var L=f()(p)==="object"&&!c.isValidElement(p)?l()(l()({},p),{},{icon:p.icon||S}):{title:p,icon:S};return L}}return(0,u.jsx)(i.Z.Item,l()(l()({},R),{},{tooltip:W(),labelCol:Z.labelCol||(Z.layout==="vertical"?{flex:"unset"}:void 0)}))},E=D;E.useStatus=x.Z.useStatus;var v=e;v.Item=E,v.List=i.Z.List,v.ErrorList=i.Z.ErrorList,v.Provider=i.Z.Provider,v.useForm=i.Z.useForm,v.useFormInstance=i.Z.useFormInstance,v.useWatch=i.Z.useWatch;var b=v},38734:function(F,g,n){n.d(g,{Z:function(){return y}});var j=n(26068),f=n.n(j),o=n(82092),l=n.n(o),s=n(67825),h=n.n(s),t=n(60213),d=n(92108),i=n(82187),x=n.n(i),P=n(75271),I=n(53649),c=n.n(I),M=n(30764),O,a=(0,M.Z)(O||(O=c()([`
.`,`-input-outlined,
.`,"-input-outlined.",`-input-disabled,
.`,`-input-outlined[disabled] {
  border-color: var(--`,`-color-border-secondary);
}

.`,`-input-outlined {
  background-color: var(--`,`-color-bg-base);
}

.`,`-input {
  font-weight: 400;
  border-radius: 6px;
  
  .`,`-input-show-count-suffix,
  .`,`-input-data-count-suffix {
    color: var(--`,`-color-text-tertiary);
  }
  
  &::placeholder {
    color: var(--`,`-color-text-tertiary);
  }
}

/* prefix\u95F4\u8DDD */
.`,`-input-affix-wrapper {
  .`,`-input-prefix {
    margin-inline-end: 8px;
    color: var(--`,`-color-text-tertiary);
  }
}

.`,"-input-affix-wrapper .",`-input-clear-icon {
  font-size: 15px;
}

.`,`-input-round {
  border-radius: 999px;
}

.`,`-text-area {
  border-color: var(--`,`-color-border-secondary);
}

.`,`-input-sm {
  height: 24px;
  font-size: 12px;
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),m=n(52676),C=["shape"],u=P.forwardRef(function(e,D){var E=e.shape,v=E===void 0?"default":E,b=h()(e,C),r=(0,t.getCommonConfig)(),Z=r.antPrefix,p=a();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p,{}),(0,m.jsx)(d.Z,f()(f()({},b),{},{className:x()(e.className,l()({},"".concat(Z,"-input-round"),v==="round")),ref:D}))]})}),T=P.forwardRef(function(e,D){var E=(0,t.getCommonConfig)(),v=E.antPrefix,b=a();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b,{}),(0,m.jsx)(d.Z.TextArea,f()(f()({},e),{},{className:x()("".concat(v,"-text-area"),e.className),ref:D}))]})});Object.assign(u,{TextArea:T,Search:d.Z.Search,Password:d.Z.Password,OTP:d.Z.OTP});var y=u},90118:function(F,g,n){n.d(g,{Z:function(){return O}});var j=n(26068),f=n.n(j),o=n(67825),l=n.n(o),s=n(90264),h=n(10616),t=n(60213),d=n(53649),i=n.n(d),x=n(30764),P,I=(0,x.Z)(P||(P=i()([`
.`,`-switch {
  background: var(--`,`-color-primary-bg);
  background-image: none !important;
  
  &.`,`-switch-checked {
    background: var(--`,`-color-primary);
  }
  
  &.`,`-switch-disabled {
    opacity: 1;
    background: var(--`,`-color-fill-disable);
    
    &.`,`-switch-checked {
      background: var(--`,`-color-primary-border-hover);
    }
  }
}

.`,`-switch-label {
  font-size: 14px;
  font-weight: 500;
}
`])),function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix}),c=n(52676),M=["label","className"],O=function(a){var m=I(),C=a.label,u=a.className,T=l()(a,M),y=(0,t.getCommonConfig)(),e=y.sparkPrefix;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m,{}),(0,c.jsxs)(s.Z,{align:"center",gap:8,className:u,children:[(0,c.jsx)(h.Z,f()(f()({},T),{},{className:"".concat(e,"-switch")})),C&&(0,c.jsx)("span",{className:"".concat(e,"-switch-label"),children:C})]})]})}}}]);
