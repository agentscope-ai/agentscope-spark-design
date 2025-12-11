(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[1561],{42414:function(l,u,e){"use strict";e.r(u);var m=e(15558),f=e.n(m),p=e(48305),v=e.n(p),b=e(31209),r=e(27485),y=e(55395),M=e(53713),j=e(18180),R=e(65122),E=e(54811),A=e(75271),o=e(52676),C=function(){var a=(0,A.useState)([]),D=v()(a,2),x=D[0],t=D[1],n=(0,b.getCommonConfig)(),T=n.antPrefix,O=[{title:"Title",dataIndex:"title",key:"title"},{title:"Content",dataIndex:"content",key:"content"},{title:"Switch",dataIndex:"switch",key:"switch",render:function(c,g){var s=g.key;return(0,o.jsx)(r.Z,{size:"small",checked:!x[s],onChange:function(){var _=f()(x);_[s]=!_[s],t(_)},label:x[s]?"Closed":"Opening"})}},{title:"Status",dataIndex:"status",key:"status",render:function(c,g){var s=g.status;return(0,o.jsxs)(R.Z,{align:"center",gap:4,children:[(0,o.jsx)(j.Z,{style:{color:"var(--".concat(T,"-color-success)"),fontSize:18}}),(0,o.jsx)("span",{children:s})]})}},{title:"Tags",key:"tags",dataIndex:"tags",render:function(c,g){var s=g.tags;return(0,o.jsx)(o.Fragment,{children:s.map(function(d){return(0,o.jsx)(y.Z,{color:"purple",bordered:!1,children:d.toUpperCase()},d)})})}},{title:"Operate",key:"operate",render:function(c){return(0,o.jsx)(E.Z,{size:"middle",children:(0,o.jsx)("a",{children:"Operate"})})}}],I=new Array(3).fill(0).map(function(h,c){return{key:c.toString(),title:"First Column Row ".concat(c+1),content:"Content Row ".concat(c+1),switch:"Switch Row ".concat(c+1),status:"Status Row ".concat(c+1),tags:["Tag".concat(c+1)]}});return(0,o.jsx)(M.Z,{columns:O,dataSource:I,pagination:{pageSize:10}})};u.default=C},62097:function(l,u,e){"use strict";e.r(u);var m=e(26068),f=e.n(m),p=e(15558),v=e.n(p),b=e(48305),r=e.n(b),y=e(31209),M=e(27485),j=e(55395),R=e(53713),E=e(18180),A=e(65122),o=e(54811),C=e(75271),i=e(52676),a=function(){var x=(0,C.useState)([]),t=r()(x,2),n=t[0],T=t[1],O=(0,y.getCommonConfig)(),I=O.antPrefix,h=[{title:"Title",dataIndex:"title",key:"title"},{title:"Content",dataIndex:"content",key:"content"},{title:"Switch",dataIndex:"switch",key:"switch",render:function(d,_){var P=_.key;return(0,i.jsx)(M.Z,{size:"small",checked:!n[P],onChange:function(){var k=v()(n);k[P]=!k[P],T(k)},label:n[P]?"Closed":"Opening"})}},{title:"Status",dataIndex:"status",key:"status",render:function(d,_){var P=_.status;return(0,i.jsxs)(A.Z,{align:"center",gap:4,children:[(0,i.jsx)(E.Z,{style:{color:"var(--".concat(I,"-color-success)"),fontSize:18}}),(0,i.jsx)("span",{children:P})]})}},{title:"Tags",key:"tags",dataIndex:"tags",render:function(d,_){var P=_.tags;return(0,i.jsx)(i.Fragment,{children:P.map(function(U){return(0,i.jsx)(j.Z,{color:"purple",bordered:!1,children:U.toUpperCase()},U)})})}},{title:"Operate",key:"operate",render:function(d){return(0,i.jsx)(o.Z,{size:"middle",children:(0,i.jsx)("a",{children:"Operate"})})}}],c=[{key:"1",title:"First Column Row 1",content:"Content Row 1",switch:"Switch Row 1",status:"Status Row 1",tags:["Tag1"]},{key:"2",title:"First Column Row 2",content:"Content Row 2",switch:"Switch Row 2",status:"Status Row 2",tags:["Tag2"]},{key:"3",title:"First Column Row 3",content:"Content Row 3",switch:"Switch Row 3",status:"Status Row 3",tags:["Tag3"]}],g={onChange:function(d,_){console.log("selectedRowKeys: ".concat(d),"selectedRows: ",_)}};return(0,i.jsx)(R.Z,{columns:h,dataSource:c,rowSelection:f()({type:"radio"},g),pagination:!1})};u.default=a},37482:function(l,u,e){"use strict";e.r(u);var m=e(26068),f=e.n(m),p=e(15558),v=e.n(p),b=e(48305),r=e.n(b),y=e(31209),M=e(27485),j=e(55395),R=e(53713),E=e(18180),A=e(65122),o=e(54811),C=e(75271),i=e(52676),a=function(){var x=(0,C.useState)([]),t=r()(x,2),n=t[0],T=t[1],O=(0,y.getCommonConfig)(),I=O.antPrefix,h=[{title:"Title",dataIndex:"title",key:"title"},{title:"Content",dataIndex:"content",key:"content"},{title:"Switch",dataIndex:"switch",key:"switch",render:function(d,_){var P=_.key;return(0,i.jsx)(M.Z,{size:"small",checked:!n[P],onChange:function(){var k=v()(n);k[P]=!k[P],T(k)},label:n[P]?"Closed":"Opening"})}},{title:"Status",dataIndex:"status",key:"status",render:function(d,_){var P=_.status;return(0,i.jsxs)(A.Z,{align:"center",gap:4,children:[(0,i.jsx)(E.Z,{style:{color:"var(--".concat(I,"-color-success)"),fontSize:18}}),(0,i.jsx)("span",{children:P})]})}},{title:"Tags",key:"tags",dataIndex:"tags",render:function(d,_){var P=_.tags;return(0,i.jsx)(i.Fragment,{children:P.map(function(U){return(0,i.jsx)(j.Z,{color:"purple",bordered:!1,children:U.toUpperCase()},U)})})}},{title:"Operate",key:"operate",render:function(d){return(0,i.jsx)(o.Z,{size:"middle",children:(0,i.jsx)("a",{children:"Operate"})})}}],c=[{key:"1",title:"First Column Row 1",content:"Content Row 1",switch:"Switch Row 1",status:"Status Row 1",tags:["Tag1"]},{key:"2",title:"First Column Row 2",content:"Content Row 2",switch:"Switch Row 2",status:"Status Row 2",tags:["Tag2"]},{key:"3",title:"First Column Row 3",content:"Content Row 3",switch:"Switch Row 3",status:"Status Row 3",tags:["Tag3"]}],g={onChange:function(d,_){console.log("selectedRowKeys: ".concat(d),"selectedRows: ",_)},getCheckboxProps:function(d){return{disabled:d.title==="First Column Row 2"}}};return(0,i.jsx)(R.Z,{columns:h,dataSource:c,rowSelection:f()({type:"checkbox"},g),pagination:!1})};u.default=a},31932:function(l,u,e){"use strict";e.r(u);var m=e(15558),f=e.n(m),p=e(48305),v=e.n(p),b=e(31209),r=e(27485),y=e(55395),M=e(53713),j=e(18180),R=e(65122),E=e(54811),A=e(75271),o=e(52676),C=function(){var a=(0,A.useState)([]),D=v()(a,2),x=D[0],t=D[1],n=(0,b.getCommonConfig)(),T=n.antPrefix,O=[{title:"Key",dataIndex:"key",key:"key",sorter:function(c,g){return Number(c.key)-Number(g.key)},sortDirections:["descend"]},{title:"Title",dataIndex:"title",key:"title"},{title:"Content",dataIndex:"content",key:"content"},{title:"Switch",dataIndex:"switch",key:"switch",render:function(c,g){var s=g.key;return(0,o.jsx)(r.Z,{size:"small",checked:!x[s],onChange:function(){var _=f()(x);_[s]=!_[s],t(_)},label:x[s]?"Closed":"Opening"})}},{title:"Status",dataIndex:"status",key:"status",render:function(c,g){var s=g.status;return(0,o.jsxs)(R.Z,{align:"center",gap:4,children:[(0,o.jsx)(j.Z,{style:{color:"var(--".concat(T,"-color-success)"),fontSize:18}}),(0,o.jsx)("span",{children:s})]})}},{title:"Tags",key:"tags",dataIndex:"tags",render:function(c,g){var s=g.tags;return(0,o.jsx)(o.Fragment,{children:s.map(function(d){return(0,o.jsx)(y.Z,{color:"purple",bordered:!1,children:d.toUpperCase()},d)})})}},{title:"Operate",key:"operate",render:function(c){return(0,o.jsx)(E.Z,{size:"middle",children:(0,o.jsx)("a",{children:"Operate"})})}}],I=[{key:"1",title:"First Column Row 1",content:"Content Row 1",switch:"Switch Row 1",status:"Status Row 1",tags:["Tag1"]},{key:"2",title:"First Column Row 2",content:"Content Row 2",switch:"Switch Row 2",status:"Status Row 2",tags:["Tag2"]},{key:"3",title:"First Column Row 3",content:"Content Row 3",switch:"Switch Row 3",status:"Status Row 3",tags:["Tag3"]}];return(0,o.jsx)(M.Z,{columns:O,dataSource:I,pagination:!1})};u.default=C},38250:function(l,u,e){"use strict";e.d(u,{X:function(){return b}});var m=e(53649),f=e.n(m),p=e(88974),v,b=(0,p.Z)(v||(v=f()([`
.`,`-pagination {
  color: var(--`,`-color-text) !important;
  font-weight: 500 !important;
  
  .`,`-pagination-total-text {
    font-weight: 500;
  }
  
  .`,`-select-selection-item {
    font-weight: 500;
  }
  
  .`,`-pagination-item-active {
    border-color: var(--`,`-color-border-secondary);
    border-radius: 8px;
    font-weight: 
    
    a {
      color: var(--`,`-color-text) !important;
    }
  }
  
  a {
    color: var(--`,`-color-text) !important;
    font-weight: 500 !important;
  }
  
  .`,`-pagination-jump-next {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .`,`-pagination-jump-prev {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.`,`-pagination {
  .`,`-pagination-prev,
  .`,`-pagination-next,
  .`,`-pagination-jump-prev,
  .`,`-pagination-jump-next {
    font-family: Montserrat;
    display: inline-block !important;
  }
}
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix})},27485:function(l,u,e){"use strict";e.d(u,{Z:function(){return i}});var m=e(26068),f=e.n(m),p=e(67825),v=e.n(p),b=e(65122),r=e(94872),y=e(31209),M=e(53649),j=e.n(M),R=e(88974),E,A=(0,R.Z)(E||(E=j()([`
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
`])),function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix}),o=e(52676),C=["label","className"],i=function(a){var D=A(),x=a.label,t=a.className,n=v()(a,C),T=(0,y.getCommonConfig)(),O=T.sparkPrefix;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsxs)(b.Z,{align:"center",gap:8,className:t,children:[(0,o.jsx)(r.Z,f()(f()({},n),{},{className:"".concat(O,"-switch")})),x&&(0,o.jsx)("span",{className:"".concat(O,"-switch-label"),children:x})]})]})}},53713:function(l,u,e){"use strict";e.d(u,{Z:function(){return x}});var m=e(26068),f=e.n(m),p=e(67825),v=e.n(p),b=e(31209),r=e(28173),y=e(9907),M=e(82187),j=e.n(M),R=e(38250),E=e(53649),A=e.n(E),o=e(88974),C,i=(0,o.Z)(C||(C=A()([`
.`,`-table-wrapper {
  .`,`-table-container {
    .`,`-table-thead > tr > th {
      padding: 8px 20px;
      font-weight: 400;
      color: var(--`,`-color-text-secondary);
    }
    
    /* \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u79FB\u9664\u8868\u5934\u5355\u5143\u683C\u7684\u5706\u89D2 */
    table > thead > tr:first-child > *:first-child {
      border-start-start-radius: 0;
    }
    
    table > thead > tr:first-child > *:last-child {
      border-start-end-radius: 0;
    }
    
    .`,"-table-thead > tr > th:not(:last-child):not(.","-table-selection-column):not(.",`-table-row-expand-icon-cell):not([colspan])::before {
      display: none !important;
    }
    
    .`,`-table-tbody > tr > td {
      padding: 16px 20px;
    }
    
    .`,`-table-tbody > tr {
      & > td:not(.`,`-table-selection-column):first-child,
      & > td.`,`-table-selection-column + td:not(
      .`,`-table-selection-column) {
        font-weight: 500;
      }
    }
  }
  
  .`,`-table-small {
    .`,`-table-tbody > tr > td {
      padding: 8px 20px;
    }
  }
  
  /* \u65E0 footer \u65F6 bordered \u8868\u683C\u6DFB\u52A0\u6574\u4F53\u5706\u89D2 */
  .`,"-table-bordered:not(:has(.",`-table-footer)) {

    .`,`-table-container {
      border-radius: var(--`,`-table-header-border-radius);
      /* \u6062\u590D\u8868\u5934\u5355\u5143\u683C\u7684\u5706\u89D2 - \u5DE6\u4E0A\u89D2\u548C\u53F3\u4E0A\u89D2 */
      table > thead > tr:first-child > *:first-child {
        border-start-start-radius: var(--`,`-table-header-border-radius);
      }
      
      table > thead > tr:first-child > *:last-child {
        border-start-end-radius: var(--`,`-table-header-border-radius);
      }

      table > tbody > tr:last-child > *:first-child {
        border-end-start-radius: var(--`,`-table-header-border-radius);
      }
      
      table > tbody > tr:last-child > *:last-child {
        border-end-end-radius: var(--`,`-table-header-border-radius);
        }
    }
  }

/* \u6709 footer \u65F6 bordered \u8868\u683C\u6DFB\u52A0\u6574\u4F53\u5706\u89D2 */
  .`,"-table-bordered:has(.",`-table-footer) {
    .`,`-table-container {
      /* \u6062\u590D\u8868\u5934\u5355\u5143\u683C\u7684\u5706\u89D2 - \u5DE6\u4E0A\u89D2\u548C\u53F3\u4E0A\u89D2 */
      table > thead > tr:first-child > *:first-child {
        border-start-start-radius: var(--`,`-table-header-border-radius);
      }
      
      table > thead > tr:first-child > *:last-child {
        border-start-end-radius: var(--`,`-table-header-border-radius);
      }
    }
  }
}
`])),function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),a=e(52676),D=["columns"];function x(t){var n,T=(0,b.getCommonConfig)(),O=T.sparkPrefix,I=t.columns,h=v()(t,D);I=(n=I)===null||n===void 0?void 0:n.map(function(s){return f()(f()({},s),{},{sortIcon:s.sortIcon||function(){return(0,a.jsx)(r.Z,{style:{fontSize:16,marginLeft:8}})}})});var c=i(),g=(0,R.X)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{}),(0,a.jsx)(g,{}),(0,a.jsx)(y.Z,f()({className:j()("".concat(O,"-table")),columns:I},h))]})}},55395:function(l,u,e){"use strict";e.d(u,{Z:function(){return t}});var m=e(26068),f=e.n(m),p=e(67825),v=e.n(p),b=e(31209),r=e(6815),y=e(82187),M=e.n(y),j=e(75271),R=e(53649),E=e.n(R),A=e(88974),o,C=(0,A.Z)(o||(o=E()([`
.`,`-tag {
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  .`,`-tag-close-icon {
    margin-left: 0;
  }
}

.`,`-tag-small {
  height: 20px;
  font-size: 12px;
  padding: 0 4px;
}

.`,`-tag-middle {
  height: 24px;
  font-size: 14px;
  padding: 0 6px;
}

.`,`-tag-purple {
  color: var(--`,`-color-purple);
  background: var(--`,`-color-purple-bg);

  .`,`-tag-close-icon {
    color: var(--`,`-color-purple);
  }
}

.`,`-tag-pink {
  color: var(--`,`-color-pink);
  background: var(--`,`-color-pink-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-pink);
  }
}

.`,`-tag-yellow {
  color: var(--`,`-color-yellow);
  background: var(--`,`-color-yellow-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-yellow);
  }
}

.`,`-tag-teal {
  color: var(--`,`-color-teal);
  background: var(--`,`-color-teal-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-teal);
  }
}

.`,`-tag-blue {
  color: var(--`,`-color-blue);
  background: var(--`,`-color-blue-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-blue);
}
}

.`,`-tag-mauve {
  color: var(--`,`-color-mauve);
  background: var(--`,`-color-mauve-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-mauve);
  }
}

.`,`-tag-success {
  color: var(--`,`-color-success);
  background: var(--`,`-color-success-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-success);
  }
}

.`,`-tag-error {
  color: var(--`,`-color-error);
  background: var(--`,`-color-error-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-error);
  }
}

.`,`-tag-warning {
  color: var(--`,`-color-warning);
  background: var(--`,`-color-warning-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-warning);
  }
}

.`,`-tag-info {
  color: var(--`,`-color-info);
  background: var(--`,`-color-info-bg);
  .`,`-tag-close-icon {
    color: var(--`,`-color-info);
  }
}

.`,`-tag-transparent {
  color: var(--`,`-color-text-tertiary);
  background: transparent;
  border-color: var(--`,`-color-border-secondary);
}
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),i=e(52676),a=["children","className","bordered","color","size"],D=function(n){return n.Purple="purple",n.Pink="pink",n.Yellow="yellow",n.Teal="teal",n.Blue="blue",n.Mauve="mauve",n.Transparent="transparent",n.Success="success",n.Error="error",n.Warning="warning",n.Info="info",n}(D||{}),x=(0,j.forwardRef)(function(n,T){var O=n.children,I=n.className,h=n.bordered,c=h===void 0?!1:h,g=n.color,s=g===void 0?"mauve":g,d=n.size,_=d===void 0?"middle":d,P=v()(n,a),U=C(),k=(0,b.getCommonConfig)(),L=k.sparkPrefix,S=Object.values(D).includes(s);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(U,{}),(0,i.jsx)(r.Z,f()(f()({className:M()("".concat(L,"-tag ").concat(L,"-tag-").concat(s," ").concat(L,"-tag-").concat(_),I),bordered:c,color:S?void 0:s},P),{},{ref:T,children:O}))]})}),t=x},38498:function(l,u,e){var m=e(78770);function f(p){if(Array.isArray(p))return m(p)}l.exports=f,l.exports.__esModule=!0,l.exports.default=l.exports},9e4:function(l){function u(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}l.exports=u,l.exports.__esModule=!0,l.exports.default=l.exports},91162:function(l){function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}l.exports=u,l.exports.__esModule=!0,l.exports.default=l.exports},15558:function(l,u,e){var m=e(38498),f=e(9e4),p=e(31479),v=e(91162);function b(r){return m(r)||f(r)||p(r)||v()}l.exports=b,l.exports.__esModule=!0,l.exports.default=l.exports}}]);
