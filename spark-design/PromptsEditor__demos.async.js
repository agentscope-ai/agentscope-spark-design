"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[9850],{30871:function(Z,g,n){n.r(g),n.d(g,{default:function(){return P}});var E=n(48305),h=n.n(E),y=n(3074),s=n(75271),B=n(52676);function P(){var A=(0,s.useState)(`# \u89D2\u8272
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
- Prompt\uFF1A\u7B26\u5408\u8981\u6C42\u7684Prompt\u3002`),d=h()(A,2),T=d[0],D=d[1];return(0,B.jsx)(y.Z,{tipsText:!1,value:T,onChange:D,maxLength:5e3,variables:[{code:"city"},{code:"foo"},{code:"user"},{code:"\u6A21\u578B\u8F93\u5165"}]})}},3074:function(Z,g,n){n.d(g,{Z:function(){return ln}});var E=n(82092),h=n.n(E),y=n(15558),s=n.n(y),B=n(48305),P=n.n(B),A=n(53649),d=n.n(A),T=n(24884),D=n(99362),j=n(86112),V=n(18893),K=n(86137),U=n(72771),$=n(89728),z=n(82187),k=n.n(z),l=n(75271),H=n(25298),M=n.n(H),G=n(17069),O=n.n(G),J=n(21742),Y=n.n(J),Q=n(83136),X=n.n(Q),c=n(25451),w=function(r){Y()(t,r);var e=X()(t);function t(o){var a;return M()(this,t),a=e.call(this),a.name=o,a}return O()(t,[{key:"eq",value:function(a){return a.name===this.name}},{key:"toDOM",value:function(){var a=document.createElement("span");return a.setAttribute("aria-hidden","true"),a.className="cm-prompt-var",a.textContent="${".concat(this.name,"}"),a}},{key:"ignoreEvent",value:function(){return!1}}]),t}(c.l9),L=new c.Y1({regexp:/\$\{([\w\u4e00-\u9fa5]+)\}/g,decoration:function(e){return c.p.replace({widget:new w(e[1])})}}),q=c.lg.fromClass(function(){function r(e){M()(this,r),h()(this,"placeholders",void 0),this.placeholders=L.createDeco(e)}return O()(r,[{key:"update",value:function(t){this.placeholders=L.updateDeco(t,this.placeholders)}}]),r}(),{decorations:function(e){return e.placeholders},provide:function(e){return c.tk.atomicRanges.of(function(t){var o;return((o=t.plugin(e))===null||o===void 0?void 0:o.placeholders)||c.p.none})}}),_=[q],nn=n(26068),R=n.n(nn),tn=n(96594);function en(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,t=e.onCreate,o=e.createBtnText;return(0,tn.ys)({override:[function(a){var m,u=a.matchBefore(/\/(\w+)?/);return!u||u&&u.from===u.to&&!a.explicit?null:{from:(m=u==null?void 0:u.from)!==null&&m!==void 0?m:0,options:(t?[].concat(s()(r),[{label:"/NEW_VAR",boost:-99}]):r).map(function(p){return R()(R()({},p),{},{displayLabel:p.label==="/NEW_VAR"?o:p.label.slice(1),apply:function(v,x,f,C){if(x.label==="/NEW_VAR")return v.dispatch({changes:{from:f,to:C,insert:""}}),t==null?void 0:t();var F=x.label.slice(1),S="${".concat(F,"}");v.dispatch({changes:{from:f,to:C,insert:S}})}})})}}]})}var i=n(52676),N,I,on=(0,$.kc)(function(r){var e=r.css,t=r.token;return{onCreate:e(N||(N=d()([`
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
  `])),t.colorBorderSecondary,t.colorBgContainer),cm:e(I||(I=d()([`
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
  `])),t.colorTextSecondary,t.colorBlue,t.colorPurple,t.colorPurpleBg,t.colorBgContainer,t.colorText,t.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:t.colorBgBase,border:"1px solid ".concat(t.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:t.colorTextTertiary,backgroundColor:t.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),an={markdown:[(0,D.JH)()]},rn=[],un=function(e){var t=on(),o=t.styles,a=e.variables||rn,m=(0,l.useState)(!1),u=P()(m,2),p=u[0],b=u[1],v=e.onCreate,x=l.useContext(K.ZP.ConfigContext),f=x.theme.algorithm===U.Z.darkAlgorithm,C=e.createBtnText||"+ \u65B0\u589E\u53D8\u91CF",F=(0,l.useMemo)(function(){return f?j.Pc:j.Zp},[f]),S=(0,l.useMemo)(function(){return[].concat(s()(an.markdown),s()(_),[en(s()(a).map(function(W){return{label:"/".concat(W.code),info:W.label}})||[],{onCreate:v,createBtnText:C})])},[a]);(0,l.useEffect)(function(){return b(!0),function(){b(!1)}},[]);var sn=l.useMemo(function(){return e.tipsText===!1?(0,i.jsx)("div",{className:o.tips}):e.tipsText?e.tipsText:(0,i.jsxs)("div",{className:o.tips,children:['\u8F93\u5165/"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,i.jsx)(T.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[e.tipsText]);return p?(0,i.jsxs)("div",{className:o.root,children:[(0,i.jsx)(V.ZP,{className:k()(o.cm,h()({},o.onCreate,v)),extensions:S,value:e.value,theme:F,lang:"markdown",onChange:e.onChange,basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1}},F),(0,i.jsxs)("div",{className:o.footer,children:[sn,e.maxLength?(0,i.jsxs)("div",{children:[e.value.length,"/",e.maxLength]}):null]})]}):null},ln=(0,l.memo)(un)}}]);
