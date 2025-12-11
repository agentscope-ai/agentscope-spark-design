(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[9850],{27756:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return y}});var p=t(48305),c=t.n(p),s=t(76087),a=t(75271),d=t(52676);function y(){var B=(0,a.useState)(`# \u89D2\u8272
\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684Prompt\u7F16\u5199\u5DE5\u7A0B\u5E08\uFF0C\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002

# \u6280\u80FD
1. \u4F60\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002
2. \u4F60\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002
3. \u4F60\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002


# \u4EFB\u52A1
\u6839\u636E\u8F93\u5165\u7684Prompt\u6A21\u677F\uFF0C\u751F\u6210\u7B26\u5408\u8981\u6C42\u7684Prompt\u3002

# \u8F93\u5165
- Prompt\u6A21\u677F\uFF1A\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684Prompt\u7F16\u5199\u5DE5\u7A0B\u5E08\uFF0C\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002

# \u8F93\u51FA
- Prompt\uFF1A\u7B26\u5408\u8981\u6C42\u7684Prompt\u3002`),v=c()(B,2),x=v[0],C=v[1];return(0,d.jsx)(s.Z,{tipsText:!1,value:x,onChange:C,maxLength:5e3,variables:[{code:"city"},{code:"foo"},{code:"user"},{code:"\u6A21\u578B\u8F93\u5165"}]})}},76087:function(e,o,t){"use strict";t.d(o,{Z:function(){return it}});var p=t(82092),c=t.n(p),s=t(15558),a=t.n(s),d=t(48305),y=t.n(d),B=t(53649),v=t.n(B),x=t(39982),C=t(19487),M=t(56664),Z=t(15222),z=t(45372),V=t(80047),K=t(85412),$=t(82187),H=t.n($),m=t(75271),G=t(25298),S=t.n(G),J=t(17069),R=t.n(J),Y=t(21742),Q=t.n(Y),X=t(83136),k=t.n(X),h=t(25451),w=function(l){Q()(n,l);var r=k()(n);function n(u){var i;return S()(this,n),i=r.call(this),i.name=u,i}return R()(n,[{key:"eq",value:function(i){return i.name==this.name}},{key:"toDOM",value:function(){var i=document.createElement("span");return i.setAttribute("aria-hidden","true"),i.className="cm-prompt-var",i.textContent="${".concat(this.name,"}"),i}},{key:"ignoreEvent",value:function(){return!1}}]),n}(h.l9),N=new h.Y1({regexp:/\$\{([\w\u4e00-\u9fa5]+)\}/g,decoration:function(r){return h.p.replace({widget:new w(r[1])})}}),_=h.lg.fromClass(function(){function l(r){S()(this,l),c()(this,"placeholders",void 0),this.placeholders=N.createDeco(r)}return R()(l,[{key:"update",value:function(n){this.placeholders=N.updateDeco(n,this.placeholders)}}]),l}(),{decorations:function(r){return r.placeholders},provide:function(r){return h.tk.atomicRanges.of(function(n){var u;return((u=n.plugin(r))===null||u===void 0?void 0:u.placeholders)||h.p.none})}}),q=[_],tt=t(26068),I=t.n(tt),et=t(14179);function nt(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,n=r.onCreate,u=r.createBtnText;return(0,et.ys)({override:[function(i){var E,f=i.matchBefore(/\/(\w+)?/);return!f||f&&f.from===f.to&&!i.explicit?null:{from:(E=f==null?void 0:f.from)!==null&&E!==void 0?E:0,options:(n?[].concat(a()(l),[{label:"/NEW_VAR",boost:-99}]):l).map(function(F){return I()(I()({},F),{},{displayLabel:F.label==="/NEW_VAR"?u:F.label.slice(1),apply:function(P,O,b,T){if(O.label==="/NEW_VAR")return P.dispatch({changes:{from:b,to:T,insert:""}}),n==null?void 0:n();var A=O.label.slice(1),D="${".concat(A,"}");P.dispatch({changes:{from:b,to:T,insert:D}})}})})}}]})}var g=t(52676),L,W,rt=(0,K.kc)(function(l){var r=l.css,n=l.token;return{onCreate:r(L||(L=v()([`
    .cm-tooltip li:last-of-type {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 40px;
      border-top: 1px solid `,`;
      border-radius: 0 !important;
      background-color: `,` !important;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 !important;
    }

    .cm-tooltip ul {
      margin-bottom: 40px !important;
    }

    .cm-tooltip li:first-of-type {
      border-top: none !important;
    }
  `])),n.colorBorderSecondary,n.colorBgContainer),cm:r(W||(W=v()([`
    .cm-line {
      color: `,`;
    }
    .cm-line span {
      color: `,`;
    }

    .cm-editor {
      position: absolute !important;
      background-color: transparent !important;

      top: 0;
      left: 8px;
      right: 0;
      bottom: 30px;
    }
    .cm-focused {
      outline: none;
    }

    .cm-content {
      width: 100%;
      padding: 8px 0;
      white-space: break-spaces;
    }

    .cm-line {
      line-height: 24px;
      height: auto !important;
    }

    .cm-prompt-var {
      font-size: inherit;
      color: `,` !important;
      background-color: `,` !important;
      line-height: 1.7;
      font-weight: 500;
      margin: 0 2px;
      height: 24px;
      display: inline-flex;
      padding: 0 4px;
      border-radius: 4px;
    }

    .cm-tooltip {
      position: relative;
      background-color: `,`;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0px 3px 12px 0px rgba(47, 49, 51, 0.12);
    }

    .cm-tooltip ul {
      max-height: 17em !important;
      display: flex;
      flex-direction: column;
    }

    .cm-tooltip li {
      margin: 4px 8px;
      height: 32px;
      padding: 0 12px !important;
      flex: 0 0 32px;
      display: flex;
      align-items: center;
    }

    .cm-tooltip-autocomplete ul li[aria-selected] {
      border-radius: 6px;
      font-weight: 600;
      color: `,`;
      background-color: `,`;
    }

    .cm-completionInfo-right {
      display: none;
    }

    .cm-completionIcon {
      display: none;
    }
  `])),n.colorTextSecondary,n.colorBlue,n.colorPurple,n.colorPurpleBg,n.colorBgContainer,n.colorText,n.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:n.colorBgBase,border:"1px solid ".concat(n.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:n.colorTextTertiary,backgroundColor:n.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),ot={markdown:[(0,C.JH)()]},at=[],ut=function(r){var n=rt(),u=n.styles,i=r.variables||at,E=(0,m.useState)(!1),f=y()(E,2),F=f[0],j=f[1],P=r.onCreate,O=m.useContext(z.ZP.ConfigContext),b=O.theme.algorithm===V.Z.darkAlgorithm,T=r.createBtnText||"+ \u65B0\u589E\u53D8\u91CF",A=(0,m.useMemo)(function(){return b?M.Pc:M.Zp},[b]),D=(0,m.useMemo)(function(){return[].concat(a()(ot.markdown),a()(q),[nt(a()(i).map(function(U){return{label:"/".concat(U.code),info:U.label}})||[],{onCreate:P,createBtnText:T})])},[i]);(0,m.useEffect)(function(){return j(!0),function(){j(!1)}},[]);var st=m.useMemo(function(){return r.tipsText===!1?(0,g.jsx)("div",{className:u.tips}):r.tipsText?r.tipsText:(0,g.jsxs)("div",{className:u.tips,children:['\u8F93\u5165/"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,g.jsx)(x.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[r.tipsText]);return F?(0,g.jsxs)("div",{className:u.root,children:[(0,g.jsx)(Z.ZP,{className:H()(u.cm,c()({},u.onCreate,P)),extensions:D,value:r.value,theme:A,lang:"markdown",onChange:r.onChange,basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1}},A),(0,g.jsxs)("div",{className:u.footer,children:[st,r.maxLength?(0,g.jsxs)("div",{children:[r.value.length,"/",r.maxLength]}):null]})]}):null},it=(0,m.memo)(ut)},62657:function(e){function o(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},83136:function(e,o,t){var p=t(38836),c=t(68919),s=t(75254);function a(d){var y=c();return function(){var v=p(d),x;if(y){var C=p(this).constructor;x=Reflect.construct(v,arguments,C)}else x=v.apply(this,arguments);return s(this,x)}}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},38836:function(e){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},e.exports.__esModule=!0,e.exports.default=e.exports,o(t)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},21742:function(e,o,t){var p=t(80038);function c(s,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(a&&a.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),a&&p(s,a)}e.exports=c,e.exports.__esModule=!0,e.exports.default=e.exports},68919:function(e){function o(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},75254:function(e,o,t){var p=t(31759).default,c=t(62657);function s(a,d){if(d&&(p(d)==="object"||typeof d=="function"))return d;if(d!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c(a)}e.exports=s,e.exports.__esModule=!0,e.exports.default=e.exports},80038:function(e){function o(t,p){return e.exports=o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,a){return s.__proto__=a,s},e.exports.__esModule=!0,e.exports.default=e.exports,o(t,p)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
