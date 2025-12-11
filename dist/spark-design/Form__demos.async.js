"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[5943],{21116:function(W,g,n){n.r(g);var h=n(48305),f=n.n(h),o=n(94577),j=n(65627),l=n(57239),s=n(27485),r=n(52676);g.default=function(){var d=o.Z.useForm(),i=f()(d,1),v=i[0],P=o.Z.useWatch("switch",v);return(0,r.jsxs)(o.Z,{layout:"vertical",form:v,children:[(0,r.jsx)(o.Z.Item,{label:"Your title",name:"input",tooltip:"One World, one dream.",children:(0,r.jsx)(j.Z,{placeholder:"Type here..."})}),(0,r.jsx)(o.Z.Item,{label:"Radio",name:"radio",required:!0,children:(0,r.jsxs)(l.ZP.Group,{children:[(0,r.jsx)(l.ZP,{value:"1",children:"Option 1"}),(0,r.jsx)(l.ZP,{value:"2",children:"Option 2"}),(0,r.jsx)(l.ZP,{value:"3",children:"Option 3"})]})}),(0,r.jsx)(o.Z.Item,{label:"Switch",name:"switch",required:!0,children:(0,r.jsx)(s.Z,{label:P?"Opening":"Closed"})})]})}},68656:function(W,g,n){n.r(g);var h=n(48305),f=n.n(h),o=n(94577),j=n(65627),l=n(57239),s=n(27485),r=n(52676);g.default=function(){var d=o.Z.useForm(),i=f()(d,1),v=i[0],P=o.Z.useWatch("switch",v);return(0,r.jsxs)(o.Z,{layout:"horizontal",form:v,labelCol:{flex:"100px"},children:[(0,r.jsx)(o.Z.Item,{label:"Your title",name:"input",tooltip:"One World, one dream.",children:(0,r.jsx)(j.Z,{placeholder:"Type here..."})}),(0,r.jsx)(o.Z.Item,{label:"Radio",name:"radio",required:!0,children:(0,r.jsxs)(l.ZP.Group,{children:[(0,r.jsx)(l.ZP,{value:"1",children:"Option 1"}),(0,r.jsx)(l.ZP,{value:"2",children:"Option 2"}),(0,r.jsx)(l.ZP,{value:"3",children:"Option 3"})]})}),(0,r.jsx)(o.Z.Item,{label:"Switch",name:"switch",required:!0,children:(0,r.jsx)(s.Z,{label:P?"Opening":"Closed"})})]})}},94577:function(W,g,n){n.d(g,{Z:function(){return b}});var h=n(31759),f=n.n(h),o=n(67825),j=n.n(o),l=n(26068),s=n.n(l),r=n(31209),d=n(62910),i=n(94592),v=n(71416),P=n(82187),I=n.n(P),c=n(75271),M=n(53649),E=n.n(M),a=n(88974),m,O=(0,a.Z)(m||(m=E()([`
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
`])),function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),u=n(52676),T=["tooltip"],y=(0,c.forwardRef)(function(t,Z){var p=t.labelMarginRight,D=p===void 0?void 0:p,F=(0,c.useRef)(null),L=(0,r.getCommonConfig)(),S=L.sparkPrefix,R=O();return(0,c.useImperativeHandle)(Z,function(){return F.current}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(R,{}),(0,u.jsx)(i.Z,s()(s()({},t),{},{className:I()(t.className,"".concat(S,"-form"),D==="small"&&"".concat(S,"-form-label-margin-small")),ref:F,requiredMark:function(A,U){return(0,u.jsxs)(u.Fragment,{children:[A,U.required&&(0,u.jsx)("span",{className:"".concat(S,"-required-mark"),children:"*"})]})}}))]})}),e=function(Z){var p=Z.tooltip,D=j()(Z,T),F=(0,u.jsx)(d.Z,{});function L(){if(p){var S=f()(p)==="object"&&!c.isValidElement(p)?s()(s()({},p),{},{icon:p.icon||F}):{title:p,icon:F};return S}}return(0,u.jsx)(i.Z.Item,s()(s()({},D),{},{tooltip:L(),labelCol:Z.labelCol||(Z.layout==="vertical"?{flex:"unset"}:void 0)}))},C=e;C.useStatus=v.Z.useStatus;var x=y;x.Item=C,x.List=i.Z.List,x.ErrorList=i.Z.ErrorList,x.Provider=i.Z.Provider,x.useForm=i.Z.useForm,x.useFormInstance=i.Z.useFormInstance,x.useWatch=i.Z.useWatch;var b=x},65627:function(W,g,n){n.d(g,{Z:function(){return y}});var h=n(26068),f=n.n(h),o=n(82092),j=n.n(o),l=n(67825),s=n.n(l),r=n(31209),d=n(50239),i=n(82187),v=n.n(i),P=n(75271),I=n(53649),c=n.n(I),M=n(88974),E,a=(0,M.Z)(E||(E=c()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),m=n(52676),O=["shape"],u=P.forwardRef(function(e,C){var x=e.shape,b=x===void 0?"default":x,t=s()(e,O),Z=(0,r.getCommonConfig)(),p=Z.antPrefix,D=a();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(D,{}),(0,m.jsx)(d.Z,f()(f()({},t),{},{className:v()(e.className,j()({},"".concat(p,"-input-round"),b==="round")),ref:C}))]})}),T=P.forwardRef(function(e,C){var x=(0,r.getCommonConfig)(),b=x.antPrefix,t=a();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t,{}),(0,m.jsx)(d.Z.TextArea,f()(f()({},e),{},{className:v()("".concat(b,"-text-area"),e.className),ref:C}))]})});Object.assign(u,{TextArea:T,Search:d.Z.Search,Password:d.Z.Password,OTP:d.Z.OTP});var y=u},27485:function(W,g,n){n.d(g,{Z:function(){return E}});var h=n(26068),f=n.n(h),o=n(67825),j=n.n(o),l=n(65122),s=n(94872),r=n(31209),d=n(53649),i=n.n(d),v=n(88974),P,I=(0,v.Z)(P||(P=i()([`
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
`])),function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix}),c=n(52676),M=["label","className"],E=function(a){var m=I(),O=a.label,u=a.className,T=j()(a,M),y=(0,r.getCommonConfig)(),e=y.sparkPrefix;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m,{}),(0,c.jsxs)(l.Z,{align:"center",gap:8,className:u,children:[(0,c.jsx)(s.Z,f()(f()({},T),{},{className:"".concat(e,"-switch")})),O&&(0,c.jsx)("span",{className:"".concat(e,"-switch-label"),children:O})]})]})}}}]);
