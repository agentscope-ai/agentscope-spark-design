"use strict";(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1896],{53823:function(O,n,e){e.r(n);var y=e(9783),a=e.n(y),f=e(5574),c=e.n(f),r=e(67294),d=e(64057),i=e(31727),u=e(80954),l=e(93967),_=e.n(l),h=e(13888),E=e(85893),m=function(t){var s,g=t.title,p=t.startTime,P=t.data,D=t.thumbnail,T=t.finished,v=t.onFullscreen,M=t.className,C=(0,r.useState)(T?(s=P.result)===null||s===void 0?void 0:s.endTime:Date.now()),j=c()(C,2),x=j[0],R=j[1];(0,r.useEffect)(function(){var b;return T?R(P.result.endTime):b=setInterval(function(){R(Date.now())},1e3),function(){clearInterval(b)}},[T]);var k=(0,u.formatDuration)(p,x);return(0,E.jsxs)("div",{className:_()(i.default.container,M,a()({},i.default.thumbnail,D)),children:[(0,E.jsxs)("div",{className:i.default.leftContent,children:[(0,E.jsx)(h.Z,{style:{fontSize:20}}),(0,E.jsx)("span",{className:i.default.title,children:g})]}),(0,E.jsxs)("div",{className:i.default.rightContent,children:[(0,E.jsx)("span",{className:i.default.duration,children:k}),(0,E.jsx)(d.Z,{className:i.default.fullscreenBtn,iconType:"spark-fullscreen-line",onClick:v,bordered:!1})]})]})};n.default=m},63870:function(O,n,e){e.r(n);var y=e(67294),a=e(26831),f=e(11313),c=e(85893),r=function(i){var u=i.data,l=i.activeTab,_=i.onTabChange,h=(0,y.useMemo)(function(){var o,t,s=[];return(o=u.result)!==null&&o!==void 0&&o.content&&s.push({key:"report",label:"Report"}),Array.isArray(u.steps)&&u.steps.length>0&&s.push({key:"process",label:"Process"}),Array.isArray((t=u.site)===null||t===void 0?void 0:t.list)&&u.site.list.length>0&&s.push({key:"source",label:"Source"}),s},[u]),E=function(t){_==null||_(t)},m=function(){var t;(t=u.result)!==null&&t!==void 0&&t.fileKey};return(0,c.jsx)("div",{className:f.default.tabsContainer,children:(0,c.jsx)(a.Z,{type:"segmented",items:h,activeKey:l,onChange:E})})};n.default=r},92833:function(O,n,e){e.r(n),e.d(n,{default:function(){return E}});var y=e(5574),a=e.n(y),f=e(67294),c=e(63870),r={container:"DhJqBZZGyBUFTWYUWVrr",content:"YGI8_EBpY0s6Q1enCiRj"},d=e(69650),i=e(35947),u=e(6793),l=e(12880),_=e(85893),h=function(o){var t,s=o.data,g=o.viewIndex,p=(0,f.useState)("process"),P=a()(p,2),D=P[0],T=P[1];return(0,_.jsx)(l.default,{header:(0,_.jsx)(l.RightPanelHeader,{title:s.title,actions:null}),content:(0,_.jsxs)(l.RightPanelContent,{children:[(0,_.jsx)(c.default,{data:s,activeTab:D,onTabChange:T}),(0,_.jsxs)("div",{className:r.content,children:[D==="report"&&(0,_.jsx)(d.default,{data:s.result}),D==="process"&&(0,_.jsx)(i.default,{list:s.steps,viewIndex:g}),D==="source"&&(0,_.jsx)(u.default,{list:(t=s.site)===null||t===void 0?void 0:t.list})]})]})})},E=h},35947:function(O,n,e){e.r(n),e.d(n,{default:function(){return l}});var y=e(67294),a=e(82679),f={container:"jWkQUsoNHoQcd0Y9xCuA",siteListTitle:"fpCGEBBhpRkHH1MhAhy_",content:"avfVZz6xqomSRhkkzKJu"},c=e(14087),r=e(93967),d=e.n(r),i=e(85893),u=function(h){var E=h.list,m=(0,y.useRef)([]);return(0,y.useEffect)(function(){},[h.viewIndex]),(0,i.jsx)("div",{className:f.container,children:E.map(function(o,t){var s;return(0,i.jsx)("div",{ref:function(p){return m.current[t]=p},children:(s=o.list)===null||s===void 0?void 0:s.map(function(g){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{content:g.content,className:f.content}),Array.isArray(g.siteList)&&g.siteList.length>0&&(0,i.jsxs)("div",{className:d()(f.siteList),children:[(0,i.jsx)("div",{className:f.siteListTitle,children:"Research websites"}),(0,i.jsx)(c.default,{list:g.siteList})]})]})})},t)})})},l=u},6793:function(O,n,e){e.r(n),e.d(n,{default:function(){return d}});var y=e(67294),a={container:"ZEgzKan400M965TGGC7A",title:"RdeULr_geo5I9DTTNF_3",content:"r48DMjTLdeQcxZHk2JmU"},f=e(21657),c=e(85893),r=function(u){var l=u.list;return(0,c.jsxs)("div",{className:a.container,children:[(0,c.jsxs)("div",{className:a.title,children:["Searched ",l.length," web pages"]}),(0,c.jsx)("div",{className:a.content,children:(0,c.jsx)(f.default,{list:l})})]})},d=r},69650:function(O,n,e){e.r(n),e.d(n,{default:function(){return d}});var y=e(67294),a=e(82679),f={container:"yqxUIMWrbsUN_OoP_ynu"},c=e(85893),r=function(u){var l=u.data;return(0,c.jsx)(a.Z,{content:l.content,className:f.container})},d=r},78620:function(O,n,e){e.r(n);var y=e(67294),a=e(94678),f=e(62142),c=e(83202),r=e(85893),d=function(u){var l=u.count,_=u.onClick;return(0,r.jsxs)("div",{className:a.default.moreWrapper,onClick:_,children:[(0,r.jsxs)("div",{className:a.default.more,children:[(0,r.jsx)(f.Z,{className:a.default.linkIcon}),(0,r.jsxs)("span",{className:a.default.title,children:["Read More (",l,")"]})]}),(0,r.jsx)(c.Z,{className:a.default.rightIcon})]})};n.default=d},33026:function(O,n,e){e.r(n);var y=e(67294),a=e(94678),f=e(93967),c=e.n(f),r=e(85893),d=function(u){var l=u.data,_=u.type,h=_===void 0?"simple":_;return(0,r.jsx)("div",{className:c()(a.default.urlWrapper,a.default[h]),onClick:function(){l.url&&window.open(l.url,"_blank")},children:(0,r.jsxs)("div",{className:a.default.url,children:[(0,r.jsx)("div",{className:a.default.icon,children:l.icon&&(0,r.jsx)("img",{src:l.icon,className:a.default.iconImage,alt:""})}),(0,r.jsx)("span",{className:a.default.title,children:l.title}),(0,r.jsx)("span",{className:a.default.description,children:l.description})]})})};n.default=d},21657:function(O,n,e){e.r(n);var y=e(67294),a=e(99637),f=e(33026),c=e(85893),r=function(i){var u=i.list;return(0,c.jsx)("div",{className:a.default.container,children:(0,c.jsx)("div",{className:a.default.content,children:u.map(function(l){return(0,c.jsx)(f.default,{data:l,type:"detail"},l.title)})})})};n.default=r},14087:function(O,n,e){e.r(n),e.d(n,{default:function(){return h}});var y=e(5574),a=e.n(y),f=e(67294),c={container:"YDlD9ONDErI1kXhRXwr8",content:"wsloQI1yOkDZNiMUBoKd",collapseButton:"nFIjOlLVOIE8igXq835q"},r=e(33026),d=e(78620),i=e(21403),u=e(28387),l=e(85893),_=function(m){var o=m.list,t=(0,f.useState)(!1),s=a()(t,2),g=s[0],p=s[1],P=(0,f.useMemo)(function(){return o.length<=8||g?[o,0]:[o.slice(0,7),o.length-7]},[o,g]),D=a()(P,2),T=D[0],v=D[1];return(0,l.jsxs)("div",{className:c.container,children:[(0,l.jsxs)("div",{className:c.content,children:[T.map(function(M){return(0,l.jsx)(r.default,{data:M,type:"simple"},M.title)}),v>0&&(0,l.jsx)(d.default,{count:v,onClick:function(){return p(!0)}})]}),g&&(0,l.jsx)(i.Z,{size:"small",type:"textCompact",icon:(0,l.jsx)(u.Z,{}),onClick:function(){return p(!1)},className:c.collapseButton,children:"Collapse"})]})},h=_},32715:function(O,n,e){e.r(n),e.d(n,{default:function(){return l}});var y=e(67294),a=e(42119),f={loading:"CTzaNae5T8ERmU1ZYJC_","sps-steps-loading":"dmDHIb9NqvoLpGK8EOks",stepsContainer:"yqMJoDbhWzAp3NbvAmIS"},c=e(67055),r=e(40443),d=e(77900),i=e(85893),u=function(h){var E=h.list,m=E===void 0?[]:E,o=h.onStepClick;return(0,i.jsx)("div",{className:f.stepsContainer,children:(0,i.jsx)(a.Z,{direction:"vertical",size:"small",items:m.map(function(t,s){return{title:(0,i.jsx)(c.Z,{title:t.title,children:t.title}),status:t.status==="RUNNING"?"process":t.status==="FINISHED"?"finish":"wait",icon:t.status==="RUNNING"?(0,i.jsx)(r.Z,{className:f.loading}):(0,i.jsx)(d.Z,{}),onClick:function(){}}})})})},l=u},44330:function(O,n,e){e.r(n),e.d(n,{default:function(){return v}});var y=e(9783),a=e.n(y),f=e(97857),c=e.n(f),r=e(13769),d=e.n(r),i=e(5574),u=e.n(i),l=e(67294),_={container:"_7PF3b4vPU86zNALBGdh",content:"TvUFO96UUW401gfbwD9a",list:"Bbr6_mwChg7GsKaxxwGf",view:"aFyuSZQLteUQTY0Ly_xS",time:"bK0YvQZLFbMaET2jePwH",thumbnail:"T_Ly9ZdkuJAa1tdF5QOI",finished:"utYerX7oTQcWOUvVXWV_",header:"m8riF6607GM28LQ0egr2"},h=e(53823),E=e(32715),m=e(35947),o=e(93967),t=e.n(o),s=e(92833),g=e(73935),p=e(80034),P=e(85893),D=["steps","result"],T=function(C){var j,x=(0,p.default)(),R=u()(x,2),k=R[0],b=R[1],K=(0,l.useState)(0),N=u()(K,2),A=N[0],U=N[1],Z=(0,l.useMemo)(function(){return Date.now()},[]),L=(0,l.useMemo)(function(){var I,S=((I=C.data)===null||I===void 0?void 0:I.data)||{},W=S.steps,B=W===void 0?[]:W,z=S.result,G=d()(S,D);return c()({steps:B.map(function(w){return c()(c()({},w),{},{startTime:parseInt(w.startTime||"0"),endTime:parseInt(w.endTime||"0")})}),result:c()(c()({},z),{},{startTime:parseInt((z==null?void 0:z.startTime)||"0"),endTime:parseInt((z==null?void 0:z.endTime)||"0")})},G)},[(j=C.data)===null||j===void 0?void 0:j.data]),J=(0,l.useMemo)(function(){var I=Math.min(L.steps.reduce(function(S,W){return Math.min(S,W.startTime)},Number.MAX_SAFE_INTEGER),L.result.startTime||Number.MAX_SAFE_INTEGER);return I===Number.MAX_SAFE_INTEGER?Z:I},[L.steps,L.result,Z]),F=(0,l.useMemo)(function(){return C.data.msgStatus==="finished"},[C.data.msgStatus]);return(0,P.jsxs)("div",{className:t()(_.container,a()({},_.thumbnail,k)),children:[(0,P.jsx)(h.default,{className:_.header,title:L.title,startTime:J,data:L,finished:F,thumbnail:k,onFullscreen:function(){return b(!0)}}),(0,P.jsxs)("div",{className:_.content,children:[(0,P.jsx)("div",{className:_.list,children:(0,P.jsx)(E.default,{list:L.steps,onStepClick:U})}),(0,P.jsx)("div",{className:_.view,children:(0,P.jsx)(m.default,{list:L.steps,viewIndex:A})})]}),k&&g.createPortal((0,P.jsx)(s.default,{data:L}),document.getElementById("right-panel"))]})},v=T},80954:function(O,n,e){e.r(n),e.d(n,{formatDuration:function(){return y}});var y=function(f,c){var r=Math.floor((c-f)/1e3),d=Math.floor(r/3600),i=Math.floor(r%3600/60),u=r%60,l=i.toString().padStart(2,"0"),_=u.toString().padStart(2,"0");return d>0||i>0?"".concat(l," minutes ").concat(_," seconds"):"".concat(_," seconds")}},41929:function(O,n,e){e.r(n),e.d(n,{default:function(){return i}});var y=e(60227),a=e(89698),f=e(36855),c=e(28373),r=e(67369),d=e(85893);function i(){return(0,d.jsx)(r.p4,{data:[{icon:(0,d.jsx)(y.Z,{}),label:"",onClick:function(){}},{icon:(0,d.jsx)(a.Z,{}),label:"",onClick:function(){}},{icon:(0,d.jsx)(f.Z,{}),label:"",onClick:function(){}},{icon:(0,d.jsx)(c.Z,{}),label:"",onClick:function(){}}]})}},70175:function(O,n,e){e.r(n),e.d(n,{default:function(){return t}});var y=e(5574),a=e.n(y),f=e(8894),c=e(88584),r=e(36231),d=e(86277),i=e(4146),u=e(64057),l=e(21403),_=e(67294),h=e(73935),E=e(12880),m=e(80034),o=e(85893);function t(g){var p=(0,m.default)(),P=a()(p,2),D=P[0],T=P[1],v=g.data,M=(0,d.default)(),C=M.styles,j=(0,o.jsx)(i.ZP,{value:v.content,language:"html",readOnly:!0});return(0,o.jsxs)("div",{className:C.webDev,children:[(0,o.jsxs)("div",{className:C.header,children:[(0,o.jsxs)("div",{className:C.left,children:[(0,o.jsx)(f.Z,{style:{fontSize:20}}),(0,o.jsx)("span",{className:C.title,children:v.title})]}),D?null:(0,o.jsx)(u.Z,{onClick:function(){return T(!D)},bordered:!1,icon:(0,o.jsx)(c.Z,{})})]}),D?h.createPortal((0,o.jsx)(s,{code:j,title:v.title,loading:v.loading,content:v.content}),document.getElementById("right-panel")):(0,o.jsx)("div",{className:C.content,children:j})]})}function s(g){var p=g.code,P=g.title,D=g.loading,T=g.content,v=(0,_.useState)(!1),M=a()(v,2),C=M[0],j=M[1],x=(0,d.default)(),R=x.styles,k=C?(0,o.jsx)("iframe",{className:R.iframe,srcDoc:T}):p;return(0,o.jsx)(E.default,{header:(0,o.jsx)(E.RightPanelHeader,{title:P,actions:(0,o.jsx)(l.Z,{icon:(0,o.jsx)(r.Z,{}),type:"primaryLess",loading:D,onClick:function(){D||j(!C)},children:C?"Exit":"Preview"})}),content:(0,o.jsx)(E.RightPanelContent,{children:k})})}},86277:function(O,n,e){e.r(n);var y=e(9053);n.default=(0,y.kc)(function(a){var f=a.css,c=a.token;return{webDev:{width:"100%",backgroundColor:c.colorBgBase,border:"1px solid ".concat(c.colorBorderSecondary),borderRadius:c.borderRadius,overflow:"hidden"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",height:48,padding:"0 16px"},left:{display:"flex",alignItems:"center"},title:{fontFamily:"claude clone",fontSize:14,marginLeft:8,fontWeight:600},content:{},iframe:{border:0,display:"block",width:"100%",height:"100%"}}})},21896:function(O,n,e){e.r(n),e.d(n,{default:function(){return C}});var y=e(15009),a=e.n(y),f=e(99289),c=e.n(f),r=e(88773),d=e(96857),i=e(67294),u=e(81644),l=e(73935),_=e(83504),h=e(33737),E=e(28092),m=e(48291),o=e(47458),t=e(93513),s=e(92434),g=e(70175),p=e(44330),P=e(9053),D=(0,P.kc)(function(x){var R=x.css,k=x.token;return{container:{display:"flex",height:"100%",background:k.colorBgBase},chat:{height:"100%",transition:"width .3s ease-out"}}}),T=e(12880),v=e(41929),M=e(85893);function C(){var x=D(),R=x.styles,k=(0,i.useContext)(o.DemoContext),b=k.demoContext,K=k.setDemoContext,N=k.getDemoContext,A=(0,i.useRef)(),U=(0,i.useRef)({}),Z=(0,i.useCallback)(function(){var F=c()(a()().mark(function I(S){return a()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return A.current.setLoading(!0),K({initial:!1}),U.current.answer=void 0,U.current.query={id:(0,r.Z)(),cards:[{code:"Text",data:{content:S.query,msgStatus:"finished"}}],role:"user",msgStatus:"finished"},l.flushSync(function(){A.current.updateMessage(U.current.query)}),U.current.answer={id:(0,r.Z)(),role:"assistant",content:"",cards:[],msgStatus:"generating"},A.current.updateMessage(U.current.answer),B.next=9,(0,s.default)({getDemoContext:N,currentQA:U,ref:A});case 9:return B.next=11,j(100);case 11:L("finished"),A.current.setLoading(!1);case 13:case"end":return B.stop()}},I)}));return function(I){return F.apply(this,arguments)}}(),[]),L=(0,i.useCallback)(function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished",I=A.current.getMessages().find(function(W){return W.id===U.current.answer.id}),S=(0,t.produce)(I,function(W){W.msgStatus=F,(W.cards||[]).forEach(function(B){B.data.msgStatus=F,B.data.loading=!1}),W.cards.push({code:"Footer",data:{left:(0,M.jsx)(v.default,{})}})});A.current.updateMessage(S)},[]),J=(0,i.useCallback)(function(){},[]);return(0,M.jsxs)("div",{className:R.container,children:[(0,M.jsx)("div",{className:R.chat,style:{width:b.canvas?480:"100%"},children:(0,M.jsx)(d.ZP,{cardConfig:{WebDev:g.default,DeepResearch:p.default},uiConfig:{disclaimer:"AI can also make mistakes, so please check carefully and use it with caution",header:(0,M.jsx)(_.default,{chat:A}),welcome:(0,M.jsx)(h.default,{})},ref:A,onInput:{zoomable:!b.initial,morePrefixActions:(0,M.jsx)(E.default,{}),afterUI:(0,M.jsx)(m.default,{onSubmit:Z}),placeholder:"please type here",onSubmit:Z},onStop:J,onUpload:[{multiple:!1,icon:(0,M.jsx)(u.Z,{}),customRequest:function(I){I.onSuccess({url:URL.createObjectURL(I.file)})}}]})}),(0,M.jsx)(T.RightPanelPortal,{})]})}function j(x){return new Promise(function(R){return setTimeout(R,x)})}},83504:function(O,n,e){e.r(n),e.d(n,{default:function(){return l}});var y=e(88778),a=e(50537),f=e(64057),c=e(67294),r=e(18426),d=e(9441),i=e(86250),u=e(85893);function l(_){var h=(0,y.default)(),E=h.styles,m=(0,c.useContext)(d.ConfigProviderContext),o=m.dark,t=m.setDark;return(0,u.jsxs)("div",{className:E.header,children:[(0,u.jsx)(a.default,{size:"small"}),(0,u.jsx)(i.Z,{gap:8,children:(0,u.jsx)(f.Z,{bordered:!1,onClick:function(){return _.chat.current.removeAllMessages()},icon:(0,u.jsx)(r.Z,{})})})]})}},88778:function(O,n,e){e.r(n);var y=e(68400),a=e.n(y),f=e(9053),c;n.default=(0,f.kc)(function(r){var d=r.css,i=r.token;return{header:d(c||(c=a()([`
    width: 100%;
    height: 64px;
    padding: 0 24px 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `])))}})},50537:function(O,n,e){e.r(n),e.d(n,{default:function(){return E}});var y=e(97857),a=e.n(y),f=e(77512),c=e(67294),r=e(10749),d=e(9838),i=e(97634),u=e(47458),l=e(85893),_="https://gw.alicdn.com/imgextra/i1/O1CN01qYTgPn1Oaj6j7oc14_!!6000000001722-55-tps-24-25.svg",h=[{value:"chatgpt-4o",label:"ChatGPT 4o"},{value:"deepseek-r1",label:"DeepSeek R1"}];function E(o){var t=o.size,s=t===void 0?"large":t,g=(0,r.default)(),p=g.styles,P=g.cx,D=(0,c.useContext)(u.DemoContext),T=D.demoContext,v=D.setDemoContext,M=h.find(function(C){return C.value===T.model});return(0,l.jsx)("div",{children:(0,l.jsx)(f.Z,{menu:{items:h.map(function(C){return{key:C.value,label:(0,l.jsx)(m,a()(a()({},C),{},{onClick:function(){v({model:C.value})},selected:T.model===C.value}))}})},children:(0,l.jsxs)("div",{className:P(p.display,p[s]),children:[M==null?void 0:M.label,(0,l.jsx)(d.Z,{})]})})})}function m(o){var t=(0,r.default)(),s=t.styles;return(0,l.jsxs)("div",{onClick:function(){return o.onClick()},className:s.item,children:[(0,l.jsx)("div",{className:s.itemIcon,children:(0,l.jsx)("img",{src:_,width:14,height:14})}),(0,l.jsx)("div",{className:s.itemTitle,children:o.label}),o.selected&&(0,l.jsx)(i.Z,{})]})}},10749:function(O,n,e){e.r(n);var y=e(9053);n.default=(0,y.kc)(function(a){var f=a.css,c=a.token;return{display:{fontFamily:"claude clone",display:"flex",alignItems:"center",gap:8,cursor:"pointer",color:c.colorText},small:{fontSize:14,height:20,img:{width:20,height:20,padding:2.5,background:c.colorPrimaryBg,borderRadius:4}},large:{fontSize:20,height:40,img:{width:24,height:24}},item:{display:"flex",alignItems:"center",gap:8},itemIcon:{width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4},itemTitle:{fontFamily:"claude clone"}}})},28092:function(O,n,e){e.r(n),e.d(n,{default:function(){return E}});var y=e(97857),a=e.n(y),f=e(9783),c=e.n(f),r=e(21403),d=e(47458),i=e(67294),u=e(98839),l=e(29986),_=e(9053),h=e(85893);function E(){var t=(0,i.useContext)(d.DemoContext),s=t.demoContext,g=t.setDemoContext;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{icon:(0,h.jsx)(u.Z,{}),selected:s.enableThinking,onClick:function(){return g({enableThinking:!s.enableThinking})},children:"Deep Thinking"}),(0,h.jsx)(m,{selected:s.enableSearch,icon:(0,h.jsx)(l.Z,{}),onClick:function(){return g({enableSearch:!s.enableSearch})},children:"Web Search"})]})}function m(t){var s=o(),g=s.styles,p=s.cx;return(0,h.jsx)(r.Z,a()(a()({},t),{},{className:p(g.btn,c()({},g.selected,t.selected))}))}var o=(0,_.kc)(function(t){var s=t.token;return{btn:{gap:6},selected:{color:"".concat(s.colorPrimary," !important"),backgroundColor:"".concat(s.colorPrimaryBg," !important"),borderColor:"".concat(s.colorPrimaryBg," !important")}}})},3087:function(O,n,e){e.r(n),e.d(n,{default:function(){return o}});var y=e(68400),a=e.n(y),f=e(39146),c=e(9053),r=e(85893),d,i,u,l,_,h,E,m=[{prompt:"deep research on the topic of city pop"},{prompt:"deep research on the topic of city pop"},{prompt:"deep research on the topic of city pop"}];function o(s){var g=t(),p=g.styles;return(0,r.jsx)("div",{className:p.preset,children:m.map(function(P){return(0,r.jsxs)("div",{className:p.presetItem,onClick:function(){return s.onSubmit({query:P.prompt})},children:[(0,r.jsxs)("div",{className:p.children,children:[(0,r.jsx)("img",{width:24,height:24,src:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),(0,r.jsx)("div",{className:p.prompt,children:P.prompt}),(0,r.jsxs)("div",{className:p.skeletonContainer,children:[(0,r.jsx)("div",{className:p.skeletonLine}),(0,r.jsx)("div",{className:p.skeletonLine}),(0,r.jsx)("div",{className:p.skeletonShortLine})]})]}),(0,r.jsxs)("div",{className:p.content,children:[(0,r.jsx)("div",{className:p.title,children:P.prompt}),(0,r.jsx)(f.Z,{})]})]},P.prompt)})})}var t=(0,c.kc)(function(s){var g=s.token,p=s.css,P=s.cx,D=P(p(d||(d=a()([`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: `,`;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 48px;
    padding: 0 12px;
    border-top: 1px solid `,`;
    opacity: 0;
    transition: all 0.3s ease;
  `])),g.colorBgBase,g.colorBorderSecondary));return{preset:{marginTop:32,display:"flex",justifyContent:"center",gap:12},presetItem:p(i||(i=a()([`
      position: relative;
      display: flex;
      border: 1px solid `,`;
      border-radius: 8px;
      height: 200px;
      flex: 1;
      cursor: pointer;
      overflow: hidden;
      padding: 24px;
      background-color: `,`;
      &:hover {
        border-color: `,`;

        .`,` {
          opacity: 1;
        }
      }
    `])),g.colorBorderSecondary,g.colorFillTertiary,g.colorPrimary,D),children:{display:"flex",flexDirection:"column",gap:10,height:"100%",width:"100%",backgroundColor:g.colorBgBase,borderRadius:8,padding:"20px 12px"},prompt:p(u||(u=a()([`
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
      color: `,`;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    `])),g.colorText),content:D,title:p(l||(l=a()([`
      font-size: 14px;
      color: `,`;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `])),g.colorText),skeletonContainer:p(_||(_=a()([`
      display: flex;
      flex-direction: column;
      gap: 8px;
    `]))),skeletonLine:p(h||(h=a()([`
      width: 100%;
      height: 8px;
      background-color: `,`;
      border-radius: 99px;
    `])),g.colorFillTertiary),skeletonShortLine:p(E||(E=a()([`
      width: 50%;
      height: 8px;
      background-color: `,`;
      border-radius: 99px;
    `])),g.colorFillTertiary)}})},44018:function(O,n,e){e.r(n),e.d(n,{default:function(){return _}});var y=e(68400),a=e.n(y),f=e(39146),c=e(9053),r=e(85893),d,i,u,l=[{prompt:"write a landing page for a fruit shop",image:"https://gw.alicdn.com/imgextra/i1/O1CN01ObcQyY1vyQveMjl76_!!6000000006241-55-tps-390-200.svg"},{prompt:"write a portfolio website",image:"https://gw.alicdn.com/imgextra/i2/O1CN01NciUQw1tzgmhPLmfF_!!6000000005973-55-tps-390-200.svg"}];function _(E){var m=h(),o=m.styles;return(0,r.jsx)("div",{className:o.preset,children:l.map(function(t){return(0,r.jsxs)("div",{className:o.presetItem,onClick:function(){return E.onSubmit({query:t.prompt})},children:[(0,r.jsx)("img",{src:t.image,alt:t.prompt}),(0,r.jsxs)("div",{className:o.content,children:[(0,r.jsx)("div",{className:o.title,children:t.prompt}),(0,r.jsx)(f.Z,{})]})]},t.prompt)})})}var h=(0,c.kc)(function(E){var m=E.token,o=E.css,t=E.cx,s=t(o(d||(d=a()([`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: `,`;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 48px;
    border-top: 1px solid `,`;
    opacity: 0;
    transition: all 0.3s ease;
  `])),m.colorBgBase,m.colorBorderSecondary));return{preset:{marginTop:32,display:"flex",justifyContent:"center",gap:12},presetItem:o(i||(i=a()([`
      position: relative;
      display: flex;
      border: 1px solid `,`;
      border-radius: 8px;
      cursor: pointer;
      overflow: hidden;
      &:hover {
        border-color: `,`;

        .`,` {
          opacity: 1;
        }
      }
    `])),m.colorBorderSecondary,m.colorPrimary,s),content:s,title:o(u||(u=a()([`
      font-size: 14px;
      color: `,`;
    `])),m.colorText)}})},48291:function(O,n,e){e.r(n),e.d(n,{default:function(){return m}});var y=e(67294),a=e(47458),f=e(8894),c=e(13888),r=e(19458),d=e(55841),i=e(21403),u=e(9053),l=e(44018),_=e(3087),h=e(85893),E=[{icon:(0,h.jsx)(f.Z,{}),label:"Web Development",value:"WebDev",type:"mode"},{icon:(0,h.jsx)(c.Z,{}),label:"Deep Research",value:"DeepResearch",type:"mode"},{icon:(0,h.jsx)(r.Z,{}),label:"Write Article",value:"Write Article",type:"quick"},{icon:(0,h.jsx)(d.Z,{}),label:"Brainstorm",value:"Brainstorm",type:"quick"}];function m(t){var s=(0,y.useContext)(a.DemoContext),g=s.demoContext,p=s.setDemoContext,P=o(),D=P.styles;if(!g.initial)return null;var T=g.mode;return T==="WebDev"?(0,h.jsx)(l.default,{onSubmit:t.onSubmit}):T==="DeepResearch"?(0,h.jsx)(_.default,{onSubmit:t.onSubmit}):(0,h.jsx)("div",{className:D.preset,children:E.map(function(v){return(0,h.jsx)("div",{children:(0,h.jsx)(i.Z,{icon:v.icon,onClick:function(){v.type==="mode"?p({mode:v.value}):t.onSubmit({query:v.value})},children:v.label})},v.value)})})}var o=(0,u.kc)(function(t){var s=t.token;return{preset:{marginTop:32,display:"flex",justifyContent:"center",gap:12}}})},12880:function(O,n,e){e.r(n),e.d(n,{RightPanelContent:function(){return l},RightPanelHeader:function(){return _},RightPanelPortal:function(){return E},default:function(){return u},useRightPanel:function(){return h}});var y=e(67294),a=e(9053),f=(0,a.kc)(function(m){var o=m.css,t=m.token;return{rightPanel:{display:"flex",flexDirection:"column",height:"100%",borderLeft:"1px solid ".concat(t.colorBorderSecondary)},header:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px",height:64,background:t.colorFillTertiary},headerLeft:{display:"flex",alignItems:"center",gap:8},headerRight:{display:"flex",alignItems:"center",gap:8},title:{fontFamily:"claude clone",fontSize:16,marginLeft:8,fontWeight:600},content:{flex:1,overflow:"auto"}}}),c=e(47458),r=e(64057),d=e(89102),i=e(85893);function u(m){var o=f(),t=o.styles,s=(0,y.useContext)(c.DemoContext),g=s.demoContext,p=s.setDemoContext,P=s.getDemoContext,D=m.header,T=m.content;return(0,y.useEffect)(function(){return p({canvas:!0}),function(){p({canvas:!1})}},[]),(0,i.jsxs)("div",{className:t.rightPanel,children:[D,T]})}var l=function(o){var t=f(),s=t.styles;return(0,i.jsx)("div",{className:s.content,children:o.children})},_=function(o){var t=(0,y.useContext)(c.DemoContext),s=t.demoContext,g=t.setDemoContext,p=t.getDemoContext,P=f(),D=P.styles;return(0,i.jsxs)("div",{className:D.header,children:[(0,i.jsxs)("div",{className:D.headerLeft,children:[(0,i.jsx)(r.Z,{bordered:!1,icon:(0,i.jsx)(d.Z,{}),onClick:function(){g({canvas:!1})}}),(0,i.jsx)("span",{className:D.title,children:o.title})]}),(0,i.jsx)("div",{className:D.headerRight,children:o.actions})]})},h=function(){},E=function(){return(0,i.jsx)("div",{id:"right-panel",style:{flex:1,width:0}})}},33737:function(O,n,e){e.r(n),e.d(n,{default:function(){return i}});var y=e(68400),a=e.n(y),f=e(9053),c=e(50537),r=e(85893),d;function i(){var _=u(),h=_.styles;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{}),(0,r.jsxs)("div",{className:h.welcome,children:[(0,r.jsx)("div",{className:h.h1,children:"Welcome to LLMs Deep Research"}),(0,r.jsxs)("div",{className:h.h2,children:["Start with ",(0,r.jsx)(c.default,{size:"large"})]})]})]})}var u=(0,f.kc)(function(_){var h=_.css,E=_.token;return{welcome:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,marginTop:"calc(10vh + 80px + 64px)",marginBottom:20},h1:{fontFamily:"claude clone",fontSize:32,lineHeight:"48px",fontWeight:"500"},h2:{fontFamily:"claude clone",display:"flex",justifyContent:"center",alignItems:"center",gap:16,fontSize:20,lineHeight:"32px",color:E.colorTextSecondary}}}),l=(0,f.vJ)(d||(d=a()([`
.sps-chat-anywhere-chat-welcome {
  height: auto !important;  
}`])))},9441:function(O,n,e){e.r(n),e.d(n,{ConfigProviderContext:function(){return l},default:function(){return _}});var y=e(97857),a=e.n(y),f=e(5574),c=e.n(f),r=e(17300),d=e(72545),i=e(67294),u=e(85893),l=i.createContext(void 0);function _(h){var E=(0,i.useState)(!1),m=c()(E,2),o=m[0],t=m[1];return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(l.Provider,{value:{dark:o,setDark:t},children:(0,u.jsx)(r.ZP,a()(a()({},d.purpleTheme),{},{style:{height:"100%"},iconfont:"https://at.alicdn.com/t/a/font_4807885_6wjcpzayws6.js",prefix:"sps",prefixCls:"sps",children:h.children}))})})}},47458:function(O,n,e){e.r(n),e.d(n,{DemoContext:function(){return u},default:function(){return l}});var y=e(97857),a=e.n(y),f=e(5574),c=e.n(f),r=e(79785),d=e(67294),i=e(85893),u=d.createContext(void 0);function l(_){var h=(0,r.Z)({model:"chatgpt-4o",enableSearch:!1,enableThinking:!1,initial:!0,mode:"DeepResearch",canvas:!1}),E=c()(h,3),m=E[0],o=E[1],t=E[2];return(0,i.jsx)(u.Provider,{value:{demoContext:m,setDemoContext:function(g){o(function(p){return a()(a()({},p),g)})},getDemoContext:t},children:_.children})}},80034:function(O,n,e){e.r(n);var y=e(5574),a=e.n(y),f=e(67294),c=e(47458),r=e(45210),d={};function i(u){var l=(0,f.useRef)(u||Math.random().toString()),_=(0,f.useContext)(c.DemoContext),h=_.demoContext,E=(0,f.useState)(d[l.current]),m=a()(E,2),o=m[0],t=m[1];return(0,f.useEffect)(function(){d[l.current]=[o,t]},[o,t]),(0,r.Z)(function(){delete d[l.current]}),(0,f.useEffect)(function(){if(!h.canvas)for(var s in d)d[s][0]=!1,d[s][1](!1)},[h.canvas]),[o,function(s){for(var g in d)d[g][0]=!1,d[g][1](!1);d[l.current]=s,t(s)}]}n.default=i},11941:function(O,n,e){e.r(n),e.d(n,{default:function(){return E}});var y=e(15009),a=e.n(y),f=e(64599),c=e.n(f),r=e(97857),d=e.n(r),i=e(99289),u=e.n(i),l=e(93513),_=e(96181),h=e(43977);function E(t,s){return m.apply(this,arguments)}function m(){return m=u()(a()().mark(function t(s,g){var p,P,D,T,v;return a()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,(0,h.default)(1e3);case 2:return p=g.current.getMessages().find(function(j){return j.id===s.current.answer.id}),P=(0,l.produce)(p,function(j){j.cards.push({code:"Text",data:{content:"I am conducting in-depth research on the topic you provided.",msgStatus:"finished",className:"claude-clone-font"}}),j.cards.push({code:"DeepResearch",data:{data:{title:"loading...",steps:[]}}})}),g.current.updateMessage(P),C.next=7,(0,h.default)(100);case 7:D=c()(o()),C.prev=8,v=a()().mark(function j(){var x,R,k;return a()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return x=T.value,K.next=3,(0,h.default)(1e3);case 3:R=g.current.getMessages().find(function(N){return N.id===s.current.answer.id}),k=(0,l.produce)(R,function(N){N.cards[1].data.data=x}),g.current.updateMessage(k);case 6:case"end":return K.stop()}},j)}),D.s();case 11:if((T=D.n()).done){C.next=15;break}return C.delegateYield(v(),"t0",13);case 13:C.next=11;break;case 15:C.next=20;break;case 17:C.prev=17,C.t1=C.catch(8),D.e(C.t1);case 20:return C.prev=20,D.f(),C.finish(20);case 23:case"end":return C.stop()}},t,null,[[8,17,20,23]])})),m.apply(this,arguments)}function o(){var t=[{title:_.default.title,steps:[]},{title:_.default.title,steps:_.default.steps.map(function(s){return d()(d()({},s),{},{status:"RUNNING"})})},{title:_.default.title,steps:_.default.steps.map(function(s,g){return g>0?d()(d()({},s),{},{status:"RUNNING"}):d()(d()({},s),{},{status:"FINISHED"})})},{title:_.default.title,steps:_.default.steps.map(function(s,g){return g>1?d()(d()({},s),{},{status:"RUNNING"}):d()(d()({},s),{},{status:"FINISHED"})})},{title:_.default.title,steps:_.default.steps.map(function(s,g){return d()(d()({},s),{},{status:"FINISHED"})})},_.default];return t}},96181:function(O,n,e){e.r(n),n.default={title:"Free AI tool research",steps:[{title:"Exploring free AI tools",status:"FINISHED",startTime:"2024-01-15T09:00:00Z",endTime:"2024-01-15T10:30:00Z",list:[{content:`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.`,siteList:[{title:"City Pop - Wikipedia"},{title:"City Pop - Wikipedia"},{title:"City Pop - Wikipedia"},{title:"City Pop - Wikipedia"},{title:"City Pop - Wikipedia"},{title:"City Pop - Wikipedia"},{title:"City Pop - Wikipedia"},{title:"City Pop - Wikipedia"},{title:"City Pop - Wikipedia"},{title:"City Pop - Wikipedia"}]}]},{title:"Considering search strategies",status:"FINISHED",startTime:"2024-01-15T10:30:00Z",endTime:"2024-01-15T12:00:00Z",list:[{content:`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics.`,siteList:[{title:"City Pop - Wikipedia"}]}]},{title:"Optimizing discovery methods",status:"FINISHED",startTime:"2024-01-15T12:00:00Z",endTime:"2024-01-15T13:30:00Z",list:[{content:`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics.`}]}],site:{list:[{title:"City Pop - Wikipedia",description:"City Pop - Wikipedia"},{title:"City Pop - Wikipedia",description:"City Pop - Wikipedia"},{title:"City Pop - Wikipedia",description:"City Pop - Wikipedia"}]},result:{fileKey:"deep_research_ai_healthcare_20240115",startTime:"2024-01-15T09:00:00Z",endTime:"2024-01-15T15:00:00Z",status:"FINISHED",content:`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.

City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.

City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.

City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.

City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.

City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.`}}},92434:function(O,n,e){e.r(n),e.d(n,{default:function(){return l}});var y=e(15009),a=e.n(y),f=e(99289),c=e.n(f),r=e(54023),d=e(30525),i=e(11341),u=e(11941);function l(h){return _.apply(this,arguments)}function _(){return _=c()(a()().mark(function h(E){var m,o,t,s;return a()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(m=E.getDemoContext,o=E.currentQA,t=E.ref,s=m(),s.mode!=="WebDev"){p.next=6;break}return p.next=5,(0,i.default)(o,t);case 5:return p.abrupt("return",p.sent);case 6:if(s.mode!=="DeepResearch"){p.next=10;break}return p.next=9,(0,u.default)(o,t);case 9:return p.abrupt("return",p.sent);case 10:if(!s.enableThinking){p.next=14;break}return p.next=13,(0,r.default)(o,t);case 13:return p.abrupt("return",p.sent);case 14:return p.next=16,(0,d.default)(o,t);case 16:return p.abrupt("return",p.sent);case 17:case"end":return p.stop()}},h)})),_.apply(this,arguments)}},30525:function(O,n,e){e.r(n),e.d(n,{default:function(){return _}});var y=e(15009),a=e.n(y),f=e(64599),c=e.n(f),r=e(99289),d=e.n(r),i=e(93513),u=e(43977),l=function(){for(var m=`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.

City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.
`,o=[];m.length>0;){var t=Math.floor(Math.random()*100)+1,s=m.slice(0,t);m=m.slice(t),o.push(s)}return o};function _(E,m){return h.apply(this,arguments)}function h(){return h=d()(a()().mark(function E(m,o){var t,s,g;return a()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:t=c()(l()),P.prev=1,g=a()().mark(function D(){var T,v,M;return a()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return T=s.value,j.next=3,(0,u.default)(T.length*5);case 3:v=o.current.getMessages().find(function(x){return x.id===m.current.answer.id}),M=(0,i.produce)(v,function(x){x.cards.length===0?x.cards.push({code:"Text",data:{content:T,msgStatus:"generating",className:"claude-clone-font"}}):x.cards[0].data.content=x.cards[0].data.content+T}),o.current.updateMessage(M);case 6:case"end":return j.stop()}},D)}),t.s();case 4:if((s=t.n()).done){P.next=8;break}return P.delegateYield(g(),"t0",6);case 6:P.next=4;break;case 8:P.next=13;break;case 10:P.prev=10,P.t1=P.catch(1),t.e(P.t1);case 13:return P.prev=13,t.f(),P.finish(13);case 16:case"end":return P.stop()}},E,null,[[1,10,13,16]])})),h.apply(this,arguments)}},43977:function(O,n,e){e.r(n),e.d(n,{default:function(){return y}});function y(a){return new Promise(function(f){return setTimeout(f,a)})}},54023:function(O,n,e){e.r(n),e.d(n,{default:function(){return _}});var y=e(15009),a=e.n(y),f=e(64599),c=e.n(f),r=e(99289),d=e.n(r),i=e(93513),u=e(43977),l=function(){for(var m=`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.
  
City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.`,o=[];m.length>0;){var t=Math.floor(Math.random()*100)+1,s=m.slice(0,t);m=m.slice(t),o.push(s)}return o};function _(E,m){return h.apply(this,arguments)}function h(){return h=d()(a()().mark(function E(m,o){var t,s,g,p,P,D;return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:t=c()(l()),v.prev=1,g=a()().mark(function M(){var C,j,x;return a()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return C=s.value,k.next=3,(0,u.default)(C.length*5);case 3:j=o.current.getMessages().find(function(b){return b.id===m.current.answer.id}),x=(0,i.produce)(j,function(b){b.cards.length===0?b.cards.push({code:"DeepThink",data:{content:C,loading:!0,className:"claude-clone-font"}}):b.cards[0].data.content=b.cards[0].data.content+C}),o.current.updateMessage(x);case 6:case"end":return k.stop()}},M)}),t.s();case 4:if((s=t.n()).done){v.next=8;break}return v.delegateYield(g(),"t0",6);case 6:v.next=4;break;case 8:v.next=13;break;case 10:v.prev=10,v.t1=v.catch(1),t.e(v.t1);case 13:return v.prev=13,t.f(),v.finish(13);case 16:p=c()(l()),v.prev=17,D=a()().mark(function M(){var C,j,x;return a()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return C=P.value,k.next=3,(0,u.default)(C.length*5);case 3:j=o.current.getMessages().find(function(b){return b.id===m.current.answer.id}),x=(0,i.produce)(j,function(b){b.cards[0].data.loading=!1,b.cards[1]?b.cards[1].data.content=b.cards[1].data.content+C:b.cards.push({code:"Text",data:{content:C,msgStatus:"generating",className:"claude-clone-font"}})}),o.current.updateMessage(x);case 6:case"end":return k.stop()}},M)}),p.s();case 20:if((P=p.n()).done){v.next=24;break}return v.delegateYield(D(),"t2",22);case 22:v.next=20;break;case 24:v.next=29;break;case 26:v.prev=26,v.t3=v.catch(17),p.e(v.t3);case 29:return v.prev=29,p.f(),v.finish(29);case 32:case"end":return v.stop()}},E,null,[[1,10,13,16],[17,26,29,32]])})),h.apply(this,arguments)}},11341:function(O,n,e){e.r(n),e.d(n,{default:function(){return _}});var y=e(15009),a=e.n(y),f=e(64599),c=e.n(f),r=e(99289),d=e.n(r),i=e(93513),u=e(43977),l=e(62877);function _(m,o){return h.apply(this,arguments)}function h(){return h=d()(a()().mark(function m(o,t){var s,g,p,P,D;return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,u.default)(2e3);case 2:s=t.current.getMessages().find(function(M){return M.id===o.current.answer.id}),g=(0,i.produce)(s,function(M){M.cards.push({code:"Text",data:{content:"I am creating a document for your idea.",msgStatus:"finished",className:"claude-clone-font"}}),M.cards.push({code:"WebDev",data:{loading:!0,content:"",title:o.current.query.cards[0].data.content}})}),t.current.updateMessage(g),p=c()(E()),v.prev=6,D=a()().mark(function M(){var C,j,x;return a()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return C=P.value,k.next=3,(0,u.default)(C.length);case 3:j=t.current.getMessages().find(function(b){return b.id===o.current.answer.id}),x=(0,i.produce)(j,function(b){b.cards[1].data.content=b.cards[1].data.content+C}),t.current.updateMessage(x);case 6:case"end":return k.stop()}},M)}),p.s();case 9:if((P=p.n()).done){v.next=13;break}return v.delegateYield(D(),"t0",11);case 11:v.next=9;break;case 13:v.next=18;break;case 15:v.prev=15,v.t1=v.catch(6),p.e(v.t1);case 18:return v.prev=18,p.f(),v.finish(18);case 21:case"end":return v.stop()}},m,null,[[6,15,18,21]])})),h.apply(this,arguments)}function E(){for(var m=(0,l.default)(),o=[];m.length>0;){var t=Math.floor(Math.random()*100)+1,s=m.slice(0,t);m=m.slice(t),o.push(s)}return o}},62877:function(O,n,e){e.r(n),n.default=function(){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
        }
        
        header {
            background-color: #2c3e50;
            color: white;
            padding: 2rem 0;
            text-align: center;
        }
        
        nav {
            background-color: #34495e;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        nav ul {
            display: flex;
            justify-content: center;
            list-style: none;
        }
        
        nav ul li a {
            color: white;
            display: block;
            padding: 1rem 2rem;
            text-decoration: none;
            transition: background-color 0.3s;
        }
        
        nav ul li a:hover {
            background-color: #2c3e50;
        }
        
        section {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }
        
        .hero {
            text-align: center;
            padding: 6rem 2rem;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            color: #3498db;
        }
        
        .hero p {
            font-size: 1.5rem;
            max-width: 800px;
            margin: 0 auto 2rem;
        }
        
        .btn {
            display: inline-block;
            background-color: #3498db;
            color: white;
            padding: 0.8rem 1.8rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s;
            margin-top: 1rem;
        }
        
        .btn:hover {
            background-color: #2980b9;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #2c3e50;
            position: relative;
        }
        
        h2:after {
            content: '';
            display: block;
            width: 80px;
            height: 4px;
            background-color: #3498db;
            margin: 1rem auto;
        }
        
        .about-content {
            display: flex;
            align-items: center;
            gap: 4rem;
        }
        
        .about-img {
            flex: 1;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .about-img img {
            width: 100%;
            height: auto;
            display: block;
        }
        
        .about-text {
            flex: 1;
        }
        
        .about-text h3 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
            color: #2c3e50;
        }
        
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .skill {
            background-color: #ecf0f1;
            padding: 0.5rem 1.5rem;
            border-radius: 50px;
            font-weight: 500;
            color: #2c3e50;
        }
        
        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .project {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
        }
        
        .project:hover {
            transform: translateY(-10px);
        }
        
        .project img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .project-content {
            padding: 1.5rem;
        }
        
        .project-content h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: #2c3e50;
        }
        
        .project-content p {
            margin-bottom: 1rem;
            color: #7f8c8d;
        }
        
        .project-links {
            display: flex;
            gap: 1rem;
        }
        
        .project-links a {
            color: #3498db;
            text-decoration: none;
            font-weight: 500;
        }
        
        .project-links a:hover {
            text-decoration: underline;
        }
        
        .contact-content {
            display: flex;
            gap: 4rem;
        }
        
        .contact-info {
            flex: 1;
        }
        
        .contact-info p {
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
        }
        
        .contact-info i {
            margin-right: 1rem;
            color: #3498db;
            font-size: 1.2rem;
        }
        
        .contact-form {
            flex: 1;
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #2c3e50;
            font-weight: 500;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
        
        .form-group textarea {
            height: 150px;
            resize: vertical;
        }
        
        footer {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 4rem;
        }
        
        .social-links {
            margin: 1rem 0;
        }
        
        .social-links a {
            color: white;
            margin: 0 0.8rem;
            font-size: 1.5rem;
            transition: color 0.3s;
        }
        
        .social-links a:hover {
            color: #3498db;
        }
        
        @media (max-width: 768px) {
            .about-content,
            .contact-content {
                flex-direction: column;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 1.2rem;
            }
            
            .about-img,
            .about-text,
            .contact-info,
            .contact-form {
                flex: none;
                width: 100%;
            }
            
            nav ul {
                flex-direction: column;
            }
            
            nav ul li a {
                text-align: center;
            }
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <h1>John Doe</h1>
        <p>Full-Stack Developer & Designer</p>
    </header>
    
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    
    <section id="home" class="hero">
        <h1>Hi, I'm John Doe</h1>
        <p>A passionate full-stack developer creating amazing web experiences</p>
        <a href="#projects" class="btn">View My Work</a>
    </section>
    
    <section id="about">
        <h2>About Me</h2>
        <div class="about-content">
            <div class="about-img">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1d58bc3589?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="John Doe">
            </div>
            <div class="about-text">
                <h3>Who I Am</h3>
                <p>I'm a full-stack developer with over 5 years of experience building web applications and digital experiences. I specialize in JavaScript frameworks, responsive design, and creating intuitive user interfaces.</p>
                <p>My journey in web development started when I built my first website at the age of 16. Since then, I've worked with startups and established companies to bring their digital visions to life.</p>
                <p>When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies.</p>
                <div class="skills">
                    <span class="skill">HTML5</span>
                    <span class="skill">CSS3</span>
                    <span class="skill">JavaScript</span>
                    <span class="skill">React</span>
                    <span class="skill">Node.js</span>
                    <span class="skill">Python</span>
                    <span class="skill">MongoDB</span>
                    <span class="skill">UI/UX Design</span>
                </div>
            </div>
        </div>
    </section>
    
    <section id="projects">
        <h2>My Projects</h2>
        <div class="projects">
            <div class="project">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="E-Commerce Platform">
                <div class="project-content">
                    <h3>E-Commerce Platform</h3>
                    <p>A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.</p>
                    <div class="project-links">
                        <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="#"><i class="fab fa-github"></i> Source Code</a>
                    </div>
                </div>
            </div>
            <div class="project">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Task Management App">
                <div class="project-content">
                    <h3>Task Management App</h3>
                    <p>A collaborative task management application with real-time updates, team features, and progress tracking.</p>
                    <div class="project-links">
                        <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="#"><i class="fab fa-github"></i> Source Code</a>
                    </div>
                </div>
            </div>
            <div class="project">
                <img src="https://images.unsplash.com/photo-1542831371-29b0f74f6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Weather Dashboard">
                <div class="project-content">
                    <h3>Weather Dashboard</h3>
                    <p>A responsive weather application that displays current conditions, forecasts, and interactive maps.</p>
                    <div class="project-links">
                        <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="#"><i class="fab fa-github"></i> Source Code</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="contact">
        <h2>Contact Me</h2>
        <div class="contact-content">
            <div class="contact-info">
                <p><i class="fas fa-envelope"></i> john.doe@example.com</p>
                <p><i class="fas fa-phone"></i> +1 (555) 123-4567</p>
                <p><i class="fas fa-map-marker-alt"></i> San Francisco, CA</p>
                <p>I'm currently available for freelance work or full-time positions. If you have a project in mind or just want to connect, feel free to reach out!</p>
            </div>
            <div class="contact-form">
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" required></textarea>
                    </div>
                    <button type="submit" class="btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>
    
    <footer>
        <div class="social-links">
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-dribbble"></i></a>
        </div>
        <p>&copy; 2023 John Doe. All rights reserved.</p>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a, .btn').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            });
        });

        // Form submission
        const form = document.querySelector('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    <\/script>
</body>
</html>`}},31727:function(O,n,e){e.r(n),n.default={container:"a8Vh4JNg0Sk4JdMRT3EQ",leftContent:"wteHs2gewEgaqatEErBu",rightContent:"Io2GtxsdwFYBTU8gYqiq",icon:"UgpBjcFnCsPm7cnSjjIX",title:"wAJ33Mvw3c0lTYd9tZhP",duration:"VgBAGFYmU4mipddF6SHs",thumbnail:"_G3OQhDPAoCsczQ0oI5R",fullscreenBtn:"rLEcgNGIGKsMfvJutJFK"}},11313:function(O,n,e){e.r(n),n.default={tabsContainer:"HQDf5Top1WEvXrT3TrI7"}},94678:function(O,n,e){e.r(n),n.default={urlWrapper:"DCyouSvgucPTu9Pqx_wC",moreWrapper:"llvx4BniMYgEQ_S6cz1N",simple:"k9S6eqqFYzAv5LRTdrNk",description:"o6ciBwj7u90YXJg0ZfB5",detail:"iVG8SZaRsQTBhcbLpBg9",title:"ByyTCW2qebcQynju4GYx",url:"i1hg5gyjt0fsD1BZ_w9d",more:"l8PapybXc45xjNDOLG_M",icon:"Ci0RcxOLiAg37UKai7Br",iconImage:"fmlEUG5V1l86D1cQ7UeU",linkIcon:"smCYhSFAnMmtF1Zwv2ax",rightIcon:"Qp3B6Dl3WEgD892ROb9H"}},99637:function(O,n,e){e.r(n),n.default={container:"zCttU3iG3YnBvJcjbMSt",content:"uKWsuc9MNDM2Lwl4Rb8b"}}}]);
