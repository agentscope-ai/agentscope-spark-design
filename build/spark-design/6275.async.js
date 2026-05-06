"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[6275],{49327:function(V,P,t){t.d(P,{Z:function(){return G}});var D=t(26068),l=t.n(D),y=t(60213),b=t(90264),d=t(75271),e=t(60823),w=t(53649),A=t.n(w),z=t(30764),k,M=(0,z.Z)(k||(k=A()([`
.`,`-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.`,`-empty-texture,
.`,`-empty-image {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
}

.`,`-empty-image svg {
  margin-top: 16.875%;
  width: 33.75%;
  height: 33.75%;
}

.`,`-empty-texture svg {
  width: 100%;
  height: 100%;
}

.`,`-empty-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--`,`-color-text);
}

.`,`-empty-description {
  font-size: 12px;
  line-height: 20px;
  color: var(--`,`-color-text-secondary);
  text-align: center;
  width: 100%;
}
`])),function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix}),B=t(90228),u=t.n(B),R=t(48305),p=t.n(R),c=t(87999),F=t.n(c),i=t(52676);function L(a){return a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var n=new Map,r=new Map;function h(a){return Z.apply(this,arguments)}function Z(){return Z=F()(u()().mark(function a(o){var g,f,m;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(g=n.get(o),g===void 0){v.next=3;break}return v.abrupt("return",g);case 3:if(f=r.get(o),!f){v.next=6;break}return v.abrupt("return",f);case 6:return m=F()(u()().mark(function U(){var E,j;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch(o);case 2:if(E=s.sent,E.ok){s.next=5;break}throw new Error("HTTP ".concat(E.status));case 5:return s.next=7,E.text();case 7:return j=s.sent,n.set(o,j),s.abrupt("return",j);case 10:case"end":return s.stop()}},U)}))().finally(function(){r.delete(o)}),r.set(o,m),v.abrupt("return",m);case 9:case"end":return v.stop()}},a)})),Z.apply(this,arguments)}function W(a,o){var g=a;return Object.keys(o).forEach(function(f){g=g.replace(new RegExp(L(f),"g"),o[f])}),g}function N(a){var o=a.svgUrl,g=a.tokenMap,f=g===void 0?{}:g,m=a.className,C=a.size,v=o.includes(".svg"),U=(0,d.useState)(function(){return n.get(o)||""}),E=p()(U,2),j=E[0],x=E[1],s=(0,d.useRef)(!0);if((0,d.useEffect)(function(){return s.current=!0,function(){s.current=!1}},[]),(0,d.useEffect)(function(){if(v){var H=n.get(o);if(H){x(H);return}h(o).then(function(Q){s.current&&x(Q)}).catch(function(Q){console.warn("[SparkDesign][Empty][Illustrate] load svg failed:",o,Q)})}},[o]),!v)return(0,i.jsx)("img",{src:o,className:m,style:{width:C,height:C}});if(!j)return null;var X=W(j,f);return(0,i.jsx)("div",{className:m,dangerouslySetInnerHTML:{__html:X},style:{width:C,height:C}})}var I={url:"https://gw.alicdn.com/imgextra/i3/O1CN01r3f3Si24iFTRz9Bho_!!6000000007424-55-tps-320-320.svg",tokenMap:{"#CDD0DC":"color-border"}},S={noData:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01mWN5tE1MAxb2z7LwA_!!6000000001395-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#BCB5FF":"color-primary-border-hover","#FFFFFF":"color-bg-base","#615CED":"color-primary","#1ACDD0DC":"color-fill-quaternary","#CDD0DC":"color-border"}},networkError:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01su6GHG1RupL5K5TOQ_!!6000000002172-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},404:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01GE0jXZ1xpqjvMjCZh_!!6000000006493-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#26CDD0DC":"color-fill-tertiary","#CDD0DC":"color-border","#F3F0FF":"color-primary-bg","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},arrears:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01xN8uYv1Dz2MLvrFAF_!!6000000000286-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#F3F0FF":"color-primary-bg","#615CED":"color-primary"}},desktopOnly:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01ZzNku41rshVhRVh9x_!!6000000005687-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},noAudio:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01fTQ6vi1GXxnIrmizf_!!6000000000633-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#615CED":"color-primary","#E6E8EE":"color-border-secondary"}},noImage:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01zQAH9A1oJUD9XDtmi_!!6000000005204-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noVideo:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01kqss5i1JuoOrJ8fNV_!!6000000001089-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noAccess:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01RwpRz91oGHREFlmdY_!!6000000005197-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}},error:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01TlQR4c1L3nn4DkG2z_!!6000000001244-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noChat:{url:"https://img.alicdn.com/imgextra/i3/O1CN014KyRst1w9QT51V8Yx_!!6000000006265-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#615CED":"color-primary","#CDD0DC":"color-border"}},noModel:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01BSPmLi1iaXGByjbne_!!6000000004429-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#5CCDD0DC":"color-fill","#615CED":"color-primary"}},noApp:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01stSIP31fzmEtpppWc_!!6000000004078-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#33CDD0DC":"color-fill-secondary","#615CED":"color-primary"}},success:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01sGzZ5B1Bx5RQAjUe5_!!6000000000011-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#5BB98B":"color-success","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},failed:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01Fd1Gmx1QNYxQ8hj0H_!!6000000001964-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FF7875":"color-error-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},inProgress:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01w2RXic1LADKqVxH56_!!6000000001258-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#9189FA":"color-primary-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},stayTuned:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01W2Kbyc26dmqmatyoB_!!6000000007685-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}}},$=function(o){var g=o.imageStyle,f=o.title,m=o.description,C=m===void 0?"No Data":m,v=o.children,U=o.texture,E=U===void 0?!0:U,j=o.size,x=j===void 0?320:j,s=o.autoFit,X=s===void 0?!0:s,H=o.okText,Q=o.okType,rn=Q===void 0?"primary":Q,tn=o.okButtonProps,en=o.onOk,Y=o.type||"noData",J=(0,y.getCommonConfig)(),K=J.sparkPrefix,on=J.isDarkMode,_=J.antPrefix,an=o.image||S[Y].url,cn=(0,d.useMemo)(function(){var O,T=l()({},(O=S[Y])===null||O===void 0?void 0:O.tokenMap);return T&&Object.keys(T).forEach(function(nn){T[nn]="var(--".concat(_,"-").concat(T[nn],")")}),T},[Y]),ln=(0,d.useMemo)(function(){var O=l()({},I.tokenMap);return Object.keys(O).forEach(function(T){O[T]="var(--".concat(_,"-").concat(O[T],")")}),O},[on]),un=M(),q=typeof x=="string"?parseFloat(x.replace(/px/i,"")):x!=null?x:0,sn=X?{maxWidth:"100%",aspectRatio:"1 / 1",width:x,height:"auto"}:{width:x,height:x};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(un,{}),(0,i.jsxs)("div",{className:"".concat(K,"-empty ").concat(o.className||""),style:l()(l()({},sn),g),children:[E&&(0,i.jsx)(N,{size:X?"100%":x,svgUrl:I.url,tokenMap:ln,className:"".concat(K,"-empty-texture")}),(0,i.jsx)(N,{size:X?"100%":x,svgUrl:an,tokenMap:cn,className:"".concat(K,"-empty-image")}),(0,i.jsxs)(b.Z,{vertical:!0,align:"center",style:{marginTop:"52.5%"},children:[f&&(0,i.jsx)("div",{className:"".concat(K,"-empty-title"),style:{marginBottom:C?.025*q:0},children:f}),C&&(0,i.jsx)("div",{className:"".concat(K,"-empty-description"),children:C}),!!H&&(0,i.jsx)("div",{style:{marginTop:.05*q},children:(0,i.jsx)(e.Z,l()(l()({type:rn,onClick:en},tn),{},{children:H}))}),!!v&&(0,i.jsx)("div",{style:{marginTop:.05*q},children:v})]})]})]})},G=$},47525:function(V,P,t){t.d(P,{X:function(){return d}});var D=t(53649),l=t.n(D),y=t(30764),b,d=(0,y.Z)(b||(b=l()([`
.`,`-pagination {
  color: var(--`,`-color-text);
  font-weight: 500;

  a {
    color: var(--`,`-color-text);
    font-weight: 500;
  }
  
  .`,"-pagination-total-text, .",`-select-selection-item {
    font-weight: 500;
  }
  .`,`-pagination-item-active {
    border-color: var(--`,`-color-border-secondary);
    border-radius: 8px;
      a {
        color: var(--`,`-color-text);
        font-weight: 500;
      }
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix})},90118:function(V,P,t){t.d(P,{Z:function(){return p}});var D=t(26068),l=t.n(D),y=t(67825),b=t.n(y),d=t(90264),e=t(10616),w=t(60213),A=t(53649),z=t.n(A),k=t(30764),M,B=(0,k.Z)(M||(M=z()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix}),u=t(52676),R=["label","className"],p=function(c){var F=B(),i=c.label,L=c.className,n=b()(c,R),r=(0,w.getCommonConfig)(),h=r.sparkPrefix;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(F,{}),(0,u.jsxs)(d.Z,{align:"center",gap:8,className:L,children:[(0,u.jsx)(e.Z,l()(l()({},n),{},{className:"".concat(h,"-switch")})),i&&(0,u.jsx)("span",{className:"".concat(h,"-switch-label"),children:i})]})]})}},18762:function(V,P,t){t.d(P,{Z:function(){return n}});var D=t(26068),l=t.n(D),y=t(67825),b=t.n(y),d=t(60213),e=t(2004),w=t(63267),A=t(90264),z=t(82187),k=t.n(z),M=t(47525),B=t(53649),u=t.n(B),R=t(30764),p,c=(0,R.Z)(p||(p=u()([`
.`,`-table-wrapper {

  .`,`-table-tbody {
    .`,"-table-row > .",`-table-cell-row-hover {
      background: var(--`,`-color-bg-layout);
    }
    .`,"-table-row.","-table-row-selected > .",`-table-cell {
      background: var(--`,`-color-primary-bg-hover);
    }
  }

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
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),F=t(49327),i=t(52676),L=["columns"];function n(r){var h,Z=(0,d.getCommonConfig)(),W=Z.sparkPrefix,N=r.columns,I=b()(r,L);N=(h=N)===null||h===void 0?void 0:h.map(function(G){return l()(l()({},G),{},{sortIcon:G.sortIcon||function(){return(0,i.jsx)(e.Z,{style:{fontSize:16,marginLeft:8}})}})});var S=c(),$=(0,M.X)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(S,{}),(0,i.jsx)($,{}),(0,i.jsx)(w.Z,l()({className:k()("".concat(W,"-table")),columns:N,locale:{emptyText:(0,i.jsx)(A.Z,{vertical:!0,align:"center",children:(0,i.jsx)(F.Z,{type:"noData"})})}},I))]})}},96295:function(V,P,t){t.d(P,{Z:function(){return L}});var D=t(26068),l=t.n(D),y=t(67825),b=t.n(y),d=t(60213),e=t(40753),w=t(82187),A=t.n(w),z=t(75271),k=t(53649),M=t.n(k),B=t(30764),u,R=(0,B.Z)(u||(u=M()([`
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
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),p=t(52676),c=["children","className","bordered","color","size"],F=function(n){return n.Purple="purple",n.Pink="pink",n.Yellow="yellow",n.Teal="teal",n.Blue="blue",n.Mauve="mauve",n.Transparent="transparent",n.Success="success",n.Error="error",n.Warning="warning",n.Info="info",n}(F||{}),i=(0,z.forwardRef)(function(n,r){var h=n.children,Z=n.className,W=n.bordered,N=W===void 0?!1:W,I=n.color,S=I===void 0?"mauve":I,$=n.size,G=$===void 0?"middle":$,a=b()(n,c),o=R(),g=(0,d.getCommonConfig)(),f=g.sparkPrefix,m=Object.values(F).includes(S);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{}),(0,p.jsx)(e.Z,l()(l()({className:A()("".concat(f,"-tag ").concat(f,"-tag-").concat(S," ").concat(f,"-tag-").concat(G),Z),bordered:N,color:m?void 0:S},a),{},{ref:r,children:h}))]})}),L=i}}]);
