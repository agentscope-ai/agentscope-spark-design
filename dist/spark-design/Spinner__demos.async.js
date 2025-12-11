"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4949],{40562:function(M,a,n){n.r(a);var g=n(46387),c=n(80047),d=n(52676),p=function(){var x=c.Z.useToken(),i=x.token;return(0,d.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:i.colorBgBase},children:(0,d.jsx)(g.Z,{tip:(0,d.jsx)("span",{children:"No progress"})})})};a.default=p},96929:function(M,a,n){n.r(a);var g=n(48305),c=n.n(g),d=n(46387),p=n(15306),m=n(32102),x=n(80047),i=n(75271),s=n(52676),P=function(){var v=(0,i.useState)(0),h=c()(v,2),t=h[0],E=h[1],e=(0,i.useState)(!0),r=c()(e,2),_=r[0],u=r[1],l=(0,i.useRef)(null),y=x.Z.useToken(),f=y.token;return(0,i.useEffect)(function(){return function(){clearInterval(l.current),l.current=null}},[]),(0,i.useEffect)(function(){_?l.current=setInterval(function(){E(function(Q){return Q>=100?0:Q+1})},100):(clearInterval(l.current),l.current=null)},[_]),(0,s.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:f.colorBgBase},children:(0,s.jsx)(d.Z,{spinning:_,tip:_?(0,s.jsxs)("div",{children:[(0,s.jsxs)("span",{children:["File uploading",(0,s.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:t}),"% ..."]}),(0,s.jsx)(p.Z,{type:"link",onClick:function(){return u(!1)},children:"Cancel"}),(0,s.jsx)(m.Z,{percent:t,showInfo:!1})]}):void 0})})};a.default=P},48283:function(M,a,n){n.r(a);var g=n(48305),c=n.n(g),d=n(46387),p=n(15306),m=n(32102),x=n(80047),i=n(75271),s=n(52676),P=function(){var v=(0,i.useState)(0),h=c()(v,2),t=h[0],E=h[1],e=x.Z.useToken(),r=e.token;return(0,i.useEffect)(function(){var _=setInterval(function(){E(function(u){return u>=100?0:u+1})},100);return function(){return clearInterval(_)}},[]),(0,s.jsx)(d.Z,{tip:(0,s.jsxs)("div",{children:[(0,s.jsxs)("span",{children:["File uploading"," ",(0,s.jsx)("span",{style:{display:"inline-block",width:"24px"},children:t}),"% ..."]}),(0,s.jsx)(p.Z,{type:"link",children:"Cancel"}),(0,s.jsx)(m.Z,{percent:t,showInfo:!1})]}),children:(0,s.jsx)("div",{style:{width:"560px",height:"240px",background:"repeating-linear-gradient(135deg, ".concat(r.colorBorderSecondary," 0, ").concat(r.colorBorderSecondary," 1px, ").concat(r.colorBgBase," 1px, ").concat(r.colorBgBase," 15px)"),backgroundSize:"auto",backgroundPosition:"top left",backgroundRepeat:"no-repeat",overflow:"hidden",borderRadius:"6px",border:"1px solid ".concat(r.colorBorderSecondary)}})})};a.default=P},56160:function(M,a,n){n.r(a);var g=n(48305),c=n.n(g),d=n(46387),p=n(15306),m=n(32102),x=n(80047),i=n(75271),s=n(52676),P=`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;if(typeof document!="undefined"){var j=document.createElement("style");j.textContent=P,document.head.appendChild(j)}var v=function(){var t=(0,i.useState)(0),E=c()(t,2),e=E[0],r=E[1],_=(0,i.useState)(!0),u=c()(_,2),l=u[0],y=u[1],f=(0,i.useRef)(null),Q=x.Z.useToken(),o=Q.token;return(0,i.useEffect)(function(){return function(){clearInterval(f.current),f.current=null}},[]),(0,i.useEffect)(function(){l?f.current=setInterval(function(){r(function(O){return O>=100?0:O+1})},100):(clearInterval(f.current),f.current=null)},[l]),(0,s.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:o.colorBgBase},children:(0,s.jsx)(d.Z,{indicator:(0,s.jsx)("img",{src:"https://img.alicdn.com/imgextra/i4/O1CN01wnPSEe1fK6CJxV4Xa_!!6000000003987-55-tps-40-40.svg",style:{animation:"spin 1s linear infinite"}}),spinning:l,tip:l?(0,s.jsxs)("div",{children:[(0,s.jsxs)("span",{children:["File uploading",(0,s.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:e}),"% ..."]}),(0,s.jsx)(p.Z,{type:"link",onClick:function(){return y(!1)},children:"Cancel"}),(0,s.jsx)(m.Z,{percent:e,showInfo:!1})]}):void 0})})};a.default=v},46387:function(M,a,n){n.d(a,{Z:function(){return E}});var g=n(82092),c=n.n(g),d=n(31209),p=n(80047),m=n(32102),x=n(82187),i=n.n(x),s=n(53649),P=n.n(s),j=n(88974),v,h=(0,j.Z)(v||(v=P()([`
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.`,`-spinner {
  display: inline-block;
  
  .`,`-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    
    .`,`-default-indicator {
      width: 40px;
      height: 40px;
      animation: loading 1s linear infinite;
    }
  }
  
  .`,`-title {
    margin-top: 12px;
    font-weight: 400;
    font-size: 14px;
    color: var(--`,`-color-text);
  }
}

.`,`-spinner-overlay {
  position: relative;
  display: inline-block;
  
  .`,"-spinner-content.",`-spinning {
    position: relative;
    opacity: 0.3;
  }
  
  .`,`-spinner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 4;
  }
}

/* 
.`,`-spinner-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 4;
}

.`,`-indicator {
  margin-bottom: 8px;
}

.`,`-title {
  color: var(--`,`-color-text);
}
*/
`])),function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix}),t=n(52676),E=function(e){var r=e.indicator,_=e.spinning,u=_===void 0?!0:_,l=e.children,y=e.style,f=e.className,Q=(0,d.getCommonConfig)(),o=Q.sparkPrefix,O=p.Z.useToken(),D=h(),C=(0,t.jsxs)("svg",{className:"".concat(o,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,t.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,t.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,t.jsx)("g",{children:(0,t.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:O.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:O.token.colorPrimary,fillOpacity:"1"})})]})]}),k=e.tip||e.showProgress&&(0,t.jsxs)("div",{children:[(0,t.jsxs)("span",{children:["loading",e.percent!==void 0&&e.percent!==null&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:e.percent}),"%"]})]}),(0,t.jsx)(m.Z,{percent:e.percent,showInfo:!1})]})||null;return l?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D,{}),(0,t.jsxs)("div",{className:i()("".concat(o,"-spinner-overlay"),f),style:y,children:[(0,t.jsx)("div",{className:i()("".concat(o,"-spinner-content"),c()({},"".concat(o,"-spinning"),u)),children:l}),u&&(0,t.jsxs)("div",{className:"".concat(o,"-spinner"),children:[(0,t.jsx)("div",{className:"".concat(o,"-indicator"),children:r||C}),(0,t.jsx)("div",{className:"".concat(o,"-title"),children:k})]})]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D,{}),(0,t.jsx)("div",{className:i()("".concat(o,"-spinner"),f),style:y,children:u&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"".concat(o,"-indicator"),children:r||C}),(0,t.jsx)("div",{className:"".concat(o,"-title"),children:k})]})})]})}}}]);
