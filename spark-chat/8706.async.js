"use strict";(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[8706],{22896:function(m,n,e){e.r(n),e.d(n,{default:function(){return o}});var b=e(21054),a=e(9053),f=e(85893),d=(0,a.kc)(function(s){var i=s.token,t=s.css;return{label:{marginBottom:6,fontSize:12,color:i.colorTextSecondary}}});function o(s){var i=d(),t=i.styles,g=s.isList?(0,f.jsx)(b.Z.List,{name:s.name,children:s.children}):(0,f.jsx)(b.Z.Item,{name:s.name,normalize:s.normalize,children:s.children});return(0,f.jsxs)("div",{children:[s.label&&(0,f.jsx)("div",{className:t.label,children:s.label}),g]})}},24546:function(m,n,e){e.r(n);var b=e(5574),a=e.n(b),f=e(67294),d=e(21054),o=e(96074),s=e(51663),i=e(48045),t=e(13457),g=e(86250),c=e(9053),v=e(31108),y=e(64057),h=e(21403),p=e(12624),l=e(50287),u=e(22896),x=e(74503),r=e(85893),C=(0,c.kc)(function(k){var P=k.token,D=k.css;return{container:{height:"100%",display:"flex",flexDirection:"column"},form:{height:0,flex:1,padding:"8px 16px 16px 16px",overflow:"auto"},actions:{padding:16,display:"flex",borderTop:"1px solid ".concat(P.colorBorderSecondary),justifyContent:"flex-end",gap:16}}}),E=function(P){var D=P.value,M=P.onChange,S=C(),L=S.styles,I=d.Z.useForm(),T=a()(I,1),O=T[0],N=function(){O.validateFields().then(function(W){M(W)})},B=function(){O.setFieldsValue(x.default)};return(0,r.jsxs)("div",{className:L.container,children:[(0,r.jsxs)(d.Z,{className:L.form,form:O,layout:"vertical",initialValues:D,children:[(0,r.jsx)(o.Z,{orientation:"left",children:"Theme"}),(0,r.jsx)(u.default,{name:["theme","colorPrimary"],label:"colorPrimary",normalize:function(W){return W.toHexString()},children:(0,r.jsx)(s.Z,{})}),(0,r.jsx)(u.default,{name:["theme","colorBgBase"],label:"colorBgBase",normalize:function(W){return W.toHexString()},children:(0,r.jsx)(s.Z,{})}),(0,r.jsx)(u.default,{name:["theme","colorTextBase"],label:"colorTextBase",normalize:function(W){return W.toHexString()},children:(0,r.jsx)(s.Z,{})}),(0,r.jsx)(u.default,{name:["theme","darkMode"],label:"darkMode",children:(0,r.jsx)(v.Z,{})}),(0,r.jsx)(u.default,{name:["theme","leftHeader","logo"],label:"leftHeader.logo",children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(u.default,{name:["theme","leftHeader","title"],label:"leftHeader.title",children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(o.Z,{orientation:"left",children:"Sender"}),(0,r.jsx)(u.default,{name:["sender","disclaimer"],label:"disclaimer",children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(u.default,{name:["sender","attachments"],label:"attachments",children:(0,r.jsx)(v.Z,{})}),(0,r.jsx)(u.default,{name:["sender","maxLength"],label:"maxLength",children:(0,r.jsx)(t.Z,{min:1e3})}),(0,r.jsx)(o.Z,{orientation:"left",children:"Welcome"}),(0,r.jsx)(u.default,{name:["welcome","greeting"],label:"greeting",children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(u.default,{name:["welcome","description"],label:"description",children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(u.default,{name:["welcome","avatar"],label:"avatar",children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(u.default,{name:["welcome","prompts"],isList:!0,label:"prompts",children:function(W,z){var J=z.add,ee=z.remove;return(0,r.jsx)("div",{children:W.map(function(Y){return(0,r.jsxs)(g.Z,{gap:6,children:[(0,r.jsx)(d.Z.Item,{style:{flex:1},name:[Y.name,"value"],children:(0,r.jsx)(i.Z,{})},Y.key),(0,r.jsx)(y.Z,{icon:(0,r.jsx)(p.Z,{}),onClick:function(){return J({})}}),(0,r.jsx)(y.Z,{icon:(0,r.jsx)(l.Z,{}),onClick:function(){return ee(Y.name)}})]},Y.key)})})}}),(0,r.jsx)(o.Z,{orientation:"left",children:"API"}),(0,r.jsx)(u.default,{name:["api","baseURL"],label:"baseURL",children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(u.default,{name:["api","token"],label:"token",children:(0,r.jsx)(i.Z,{})})]}),(0,r.jsxs)("div",{className:L.actions,children:[(0,r.jsx)(h.Z,{onClick:B,children:"Reset"}),(0,r.jsx)(h.Z,{type:"primary",onClick:N,children:"Save & Copy"})]})]})};n.default=E},74503:function(m,n,e){e.r(n),n.default=function(){return{theme:{colorPrimary:"#615CED",darkMode:!0,prefix:"agentscope-runtime-webui",leftHeader:{logo:"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png",title:"Runtime WebUI"}},sender:{attachments:!0,maxLength:1e4,disclaimer:"AI can also make mistakes, so please check carefully and use it with caution"},welcome:{greeting:"Hello, how can I help you today?",description:"I am a helpful assistant that can help you with your questions.",avatar:"https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png",prompts:[{value:"Hello"},{value:"How are you?"},{value:"What can you do?"}]},api:{baseURL:"",token:""}}}},21122:function(m,n,e){e.r(n),e.d(n,{default:function(){return g}});var b=e(5574),a=e.n(b),f=e(87697),d=e(64057),o=e(45286),s=e(67294),i=e(24546),t=e(85893);function g(c){var v=(0,s.useState)(!1),y=a()(v,2),h=y[0],p=y[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.Z,{onClick:function(){return p(!0)},icon:(0,t.jsx)(f.Z,{}),bordered:!1}),(0,t.jsx)(o.Z,{destroyOnHidden:!0,open:h,onClose:function(){return p(!1)},styles:{body:{padding:0},header:{padding:8}},children:(0,t.jsx)(i.default,{value:c.value,onChange:function(u){p(!1),c.onChange(u)}})})]})}},46989:function(m,n,e){e.r(n),e.d(n,{default:function(){return y}});var b=e(97857),a=e.n(b),f=e(5574),d=e.n(f),o=e(74823),s=e(21122),i=e(67294),t=e(10431),g=e(74503),c=e(51283),v=e(85893);function y(){var h=(0,i.useRef)(null);window.chatRef=h;var p=(0,c.Z)("agent-scope-runtime-webui-options",{defaultValue:(0,g.default)(),listenStorageChange:!0}),l=d()(p,2),u=l[0],x=l[1],r=(0,i.useMemo)(function(){var C=(0,v.jsx)(s.default,{value:u,onChange:function(k){x(function(P){return a()(a()({},P),k)})}});return a()(a()({},u),{},{customToolRenderConfig:{},session:{multiple:!0,api:t.default},sender:a()(a()({},u.sender),{},{attachments:u.sender.attachments?{customRequest:function(k){k.onProgress({percent:100}),k.onSuccess({url:URL.createObjectURL(k.file)})}}:void 0}),theme:a()(a()({},u.theme),{},{rightHeader:C})})},[u]);return(0,v.jsx)("div",{style:{height:"100dvh"},children:(0,v.jsx)(o.Z,{ref:h,options:r})})}},10431:function(m,n,e){e.r(n);var b=e(97857),a=e.n(b),f=e(15009),d=e.n(f),o=e(19632),s=e.n(o),i=e(99289),t=e.n(i),g=e(12444),c=e.n(g),v=e(72004),y=e.n(v),h=e(9783),p=e.n(h),l=function(){function u(){c()(this,u),p()(this,"lsKey",void 0),p()(this,"sessionList",void 0),this.lsKey="agent-scope-runtime-webui-sessions",this.sessionList=[]}return y()(u,[{key:"getSessionList",value:function(){var x=t()(d()().mark(function C(){return d()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return this.sessionList=JSON.parse(localStorage.getItem(this.lsKey)||"[]"),k.abrupt("return",s()(this.sessionList));case 2:case"end":return k.stop()}},C,this)}));function r(){return x.apply(this,arguments)}return r}()},{key:"getSession",value:function(){var x=t()(d()().mark(function C(E){return d()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.abrupt("return",this.sessionList.find(function(D){return D.id===E}));case 1:case"end":return P.stop()}},C,this)}));function r(C){return x.apply(this,arguments)}return r}()},{key:"updateSession",value:function(){var x=t()(d()().mark(function C(E){var k;return d()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return k=this.sessionList.findIndex(function(M){return M.id===E.id}),k>-1&&(this.sessionList[k]=a()(a()({},this.sessionList[k]),E),localStorage.setItem(this.lsKey,JSON.stringify(this.sessionList))),D.abrupt("return",s()(this.sessionList));case 3:case"end":return D.stop()}},C,this)}));function r(C){return x.apply(this,arguments)}return r}()},{key:"createSession",value:function(){var x=t()(d()().mark(function C(E){return d()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return E.id=Date.now().toString(),this.sessionList.unshift(E),localStorage.setItem(this.lsKey,JSON.stringify(this.sessionList)),P.abrupt("return",s()(this.sessionList));case 4:case"end":return P.stop()}},C,this)}));function r(C){return x.apply(this,arguments)}return r}()},{key:"removeSession",value:function(){var x=t()(d()().mark(function C(E){return d()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return this.sessionList=this.sessionList.filter(function(D){return D.id!==E.id}),localStorage.setItem(this.lsKey,JSON.stringify(this.sessionList)),P.abrupt("return",s()(this.sessionList));case 3:case"end":return P.stop()}},C,this)}));function r(C){return x.apply(this,arguments)}return r}()}]),u}();n.default=new l},29772:function(m,n,e){e.r(n);var b=e(97857),a=e.n(b),f=e(19632),d=e.n(f),o=e(68400),s=e.n(o),i=e(70833),t=e(9053),g=e(55682),c=e(85893),v,y=(0,t.vJ)(v||(v=s()([`
  .user-flow-node {
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    background-color: var(--sps-color-fill);
    border-radius: 8px;
    padding: 10px 16px 24px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    box-sizing: content-box;
  }

  .user-flow-node-name {
    font-size: 16px;
    font-weight: bold;
    color: var(--sps-color-text);
    margin-bottom: 4px;
  }

  .user-flow-node-metric {
    font-size: 12px;
    color: var(--sps-color-text);
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
  }

  .user-flow-node-metric--value {
    font-weight: bold;
  }
`]))),h={nodes:[{id:"node-0",name:"\u9875\u9762-0",layerName:"\u5C42\u7EA70",measure:{name:"DAU",value:175e8,formattedValue:175,formattedUnit:"\u4E07"},relatedMeasures:[{name:"MAU",value:1e6,formattedValue:100,formattedUnit:"\u4E07"}],compareMeasures:[],style:{stroke:"#F5A623"}},{id:"node-1",name:"\u9875\u97621",layerName:"\u5C42\u7EA70",measure:{name:"DAU",value:55e8,formattedValue:55,formattedUnit:"\u4E07"},relatedMeasures:[{name:"MAU",value:5e5,formattedValue:50,formattedUnit:"\u4E07"}],compareMeasures:[],style:{stroke:"#F5A623"}},{id:"node-2",name:"\u9875\u97622",layerName:"\u5C42\u7EA70",measure:{name:"DAU",value:1e9,formattedValue:10,formattedUnit:"\u4E07"},relatedMeasures:[{name:"MAU",value:1e5,formattedValue:10,formattedUnit:"\u4E07"}],compareMeasures:[],style:{stroke:"#F5A623"}},{id:"node-3",name:"\u9875\u97623",layerName:"\u5C42\u7EA70",measure:{name:"DAU",value:9e8,formattedValue:9,formattedUnit:"\u4E07"},relatedMeasures:[{name:"MAU",value:5e4,formattedValue:5,formattedUnit:"\u4E07"}],compareMeasures:[],style:{stroke:"#F5A623"}},{id:"node-4",name:"\u9875\u97624",layerName:"\u5C42\u7EA70",measure:{name:"DAU",value:57e8,formattedValue:57,formattedUnit:"\u4E07"},relatedMeasures:[{name:"MAU",value:6e4,formattedValue:6,formattedUnit:"\u4E07"}],compareMeasures:[],style:{stroke:"#F5A623"}},{id:"node-5",name:"\u9875\u97625",layerName:"\u5C42\u7EA71",measure:{name:"DAU",value:24e9,formattedValue:240,formattedUnit:"\u4E07"},relatedMeasures:[{name:"MAU",value:16e5,formattedValue:160,formattedUnit:"\u4E07"}],compareMeasures:[],style:{stroke:"#4A90E2"}},{id:"node-6",name:"\u9875\u97626",layerName:"\u5C42\u7EA71",measure:{name:"DAU",value:66e8,formattedValue:66,formattedUnit:"\u4E07"},relatedMeasures:[{name:"MAU",value:11e4,formattedValue:11,formattedUnit:"\u4E07"}],compareMeasures:[],style:{stroke:"#4A90E2"}},{id:"node-7",name:"\u9875\u97627",layerName:"\u5C42\u7EA72",measure:{name:"DAU",value:5e9,formattedValue:50,formattedUnit:"\u4E07"},relatedMeasures:[{name:"MAU",value:5e5,formattedValue:50,formattedUnit:"\u4E07"}],compareMeasures:[],style:{stroke:"#7ED321"}},{id:"node-8",name:"\u9875\u97628",layerName:"\u5C42\u7EA72",measure:{name:"DAU",value:5e9,formattedValue:50,formattedUnit:"\u4E07"},relatedMeasures:[{name:"MAU",value:5e5,formattedValue:50,formattedUnit:"\u4E07"}],compareMeasures:[],style:{stroke:"#7ED321"}},{id:"node-9",name:"\u9875\u97629",layerName:"\u5C42\u7EA72",measure:{name:"DAU",value:9e10,formattedValue:90,formattedUnit:"\u4E07"},relatedMeasures:[{name:"MAU",value:5e5,formattedValue:50,formattedUnit:"\u4E07"}],compareMeasures:[],style:{stroke:"#7ED321"}},{id:"node-10",name:"\u9875\u976210",layerName:"\u5C42\u7EA72",measure:{name:"DAU",value:1e11,formattedValue:100,formattedUnit:"\u4E07"},relatedMeasures:[{name:"MAU",value:1e5,formattedValue:10,formattedUnit:"\u4E07"}],compareMeasures:[],style:{stroke:"#7ED321"}},{id:"node-11",name:"\u9875\u976211",layerName:"\u5C42\u7EA72",measure:{name:"DAU",value:1e9,formattedValue:10,formattedUnit:"\u4E07"},relatedMeasures:[{name:"MAU",value:9e4,formattedValue:9,formattedUnit:"\u4E07"}],compareMeasures:[],style:{stroke:"#7ED321"}},{id:"node-12",name:"\u9875\u976212",layerName:"\u5C42\u7EA72",measure:{name:"DAU",value:6e8,formattedValue:6,formattedUnit:"\u4E07"},relatedMeasures:[{name:"MAU",value:1e4,formattedValue:1,formattedUnit:"\u4E07"}],compareMeasures:[],style:{stroke:"#7ED321"}}],edges:[{id:"edge-0",source:"node-0",target:"node-5",measure:{name:"DAU",value:175e8,formattedValue:175,formattedUnit:"\u4E07"}},{id:"edge-1",source:"node-1",target:"node-5",measure:{name:"DAU",value:55e8,formattedValue:55,formattedUnit:"\u4E07"}},{id:"edge-2",source:"node-2",target:"node-5",measure:{name:"DAU",value:1e9,formattedValue:10,formattedUnit:"\u4E07"}},{id:"edge-3",source:"node-3",target:"node-6",measure:{name:"DAU",value:9e8,formattedValue:9,formattedUnit:"\u4E07"}},{id:"edge-4",source:"node-5",target:"node-7",measure:{name:"DAU",value:5e9,formattedValue:50,formattedUnit:"\u4E07"}},{id:"edge-5",source:"node-5",target:"node-8",measure:{name:"DAU",value:5e9,formattedValue:50,formattedUnit:"\u4E07"}},{id:"edge-6",source:"node-5",target:"node-9",measure:{name:"DAU",value:9e9,formattedValue:90,formattedUnit:"\u4E07"}},{id:"edge-7",source:"node-5",target:"node-10",measure:{name:"DAU",value:5e9,formattedValue:50,formattedUnit:"\u4E07"}},{id:"edge-8",source:"node-6",target:"node-11",measure:{name:"DAU",value:1e9,formattedValue:10,formattedUnit:"\u4E07"}},{id:"edge-9",source:"node-4",target:"node-6",measure:{name:"DAU",value:57e8,formattedValue:57,formattedUnit:"\u4E07"}},{id:"edge-11",source:"node-6",target:"node-12",measure:{name:"DAU",value:6e8,formattedValue:6,formattedUnit:"\u4E07"}},{id:"edge-12",source:"node-6",target:"node-10",measure:{name:"DAU",value:5e9,formattedValue:50,formattedUnit:"\u4E07"}}]},p=function(x){var r=x.data,C=[{name:"DAU",value:r.measure.formattedValue+r.measure.formattedUnit},{name:"MAU",value:r.relatedMeasures[0].formattedValue+r.relatedMeasures[0].formattedUnit}];return(0,c.jsxs)("div",{className:"user-flow-node",children:[(0,c.jsx)("div",{className:"user-flow-node-name",children:r.name}),C.map(function(E){return(0,c.jsxs)("div",{className:"user-flow-node-metric",children:[(0,c.jsx)("div",{className:"user-flow-node-metric-name",children:E.name}),(0,c.jsx)("div",{className:"user-flow-node-metric-value",children:E.value})]},E.name)})]})},l=function(x){var r=["node-5","node-6"],C=function(k){return x.nodes.find(function(P){return P.id===k})};return x.edges.forEach(function(E){E.data||(E.data={});var k=r.includes(E.source);E.data.type=k?"split":"proportion",E.data.ratio=E.measure.value/C(k?E.source:E.target).measure.value}),x};n.default=function(u){var x={autoFit:"view",padding:8,data:l(h),node:{style:{component:function(C){return(0,c.jsx)(p,{data:C})},size:[160,90]}},edge:{style:{stroke:function(C){return C.data.type==="split"?"l(0) 0:#F04864 0.5:#7EC2F3 1:#1890FF":"l(0) 0:#1890FF 0.5:#7EC2F3 1:#F04864"},labelText:function(C){var E=C.data,k=E.type,P=E.ratio,D=k==="split"?"\u5206\u6D41":"\u5360\u6BD4";return"".concat(D," ").concat((Number(P)*100).toFixed(2),"%")},labelBackground:!0}},transforms:function(C){return[].concat(d()(C),[{type:"map-edge-line-width",key:"map-edge-line-width",value:function(k){return k.data.ratio},minValue:0,maxValue:1,minLineWidth:1,maxLineWidth:32}])},layout:{type:"dagre",nodesep:40,ranksep:200}};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(y,{}),(0,c.jsx)(g.Z,{title:u.data.page,style:{maxWidth:"100%",minWidth:"450px"},children:(0,c.jsx)("div",{style:{height:"400px"},children:(0,c.jsx)(i.FlowDirectionGraph,a()({},x))})})]})}},10333:function(m,n,e){e.r(n);var b=e(5574),a=e.n(b),f=e(67294),d=e(55682),o=e(34041),s=e(21403),i=e(86250),t=e(4421),g=e(88773),c=e(85893);function v(y){console.log(y);var h=(0,t.y)()||{},p=h.updateMessage,l=(0,f.useState)(y.data.pages[0]),u=a()(l,2),x=u[0],r=u[1];return(0,c.jsx)(d.Z,{title:"Please select a page",children:(0,c.jsxs)(i.Z,{gap:8,children:[(0,c.jsx)(o.default,{value:x,onChange:r,options:y.data.pages.map(function(C){return{label:C,value:C}})}),(0,c.jsx)(s.Z,{onClick:function(){p({id:(0,g.Z)(),role:"assistant",cards:[{code:"PagePVChartCard",data:{page:x}}]})},children:"OK"}),(0,c.jsx)(s.Z,{onClick:function(){var E,k;(E=y.context.onInput)===null||E===void 0||(k=E.onSubmit)===null||k===void 0||k.call(E,{query:x})},children:"Send"})]})})}n.default=v},79122:function(m,n,e){e.r(n),e.d(n,{default:function(){return Z}});var b=e(5574),a=e.n(b),f=e(19632),d=e.n(f),o=e(15009),s=e.n(o),i=e(99289),t=e.n(i),g=e(97857),c=e.n(g),v=e(68400),y=e.n(v),h=e(44987),p=e.n(h),l=e(67294),u=e(73935),x=e(4393),r=e(86250),C=e(53531),E=e(48045),k=e(21403),P=e(78234),D=e(39693),M=e.n(D),S=e(50130),L=e(67369),I=e(88773),T=e(7354),O=e(29041),N=e(31295),B=e(76289),H=e(60227),W=e(98839),z=e(81644),J=e(18081),ee=e(17738),Y=e(99387),V=e(9053),j=e(85893),X,_=(0,V.vJ)(X||(X=y()([`
.sps-chat-anywhere-chat-welcome {
  height: auto !important;
}
`])));function Z(){var U=(0,l.useRef)();window.ref=U;var ie=(0,Y.useDemoContext)(),q=ie.demoContext,ae=ie.getDemoContext,pe=ie.setDemoContext,A=(0,l.useRef)({});(0,P.Z)(function(){U.current.updateSession(ee.default.get())});var Q=(0,l.useCallback)(function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished",K=arguments.length>1?arguments[1]:void 0;A.current.answer.msgStatus=w,A.current.answer.cards=A.current.answer.cards.map(function(G){return G.code==="Text"?(0,S.L)("Text",c()(c()({},G.data),{},{msgStatus:w})):G.code==="DeepThink"?(0,S.L)("DeepThink",c()(c()({},G.data),{},{loading:!1})):G}),w==="interrupted"&&A.current.answer.cards.push((0,S.L)("Interrupted",{})),A.current.answer.cards.push((0,S.L)("Footer",{left:(0,j.jsx)(L.p4,{data:[{icon:(0,j.jsx)(H.Z,{}),label:"\u91CD\u65B0\u751F\u6210",onClick:function(){be(A.current.answer)}}]}),right:K?(0,j.jsx)(L.hw,{data:[["\u8F93\u5165tokens",K.prompt_tokens],["\u8F93\u51FAtokens",K.completion_tokens]]}):null})),U.current.setLoading(!1),u.flushSync(function(){U.current.updateMessage(A.current.answer)}),me()},[q]),me=(0,l.useCallback)(t()(s()().mark(function w(){return s()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:u.flushSync(function(){U.current.updateSessionMessages(U.current.getMessages())}),ee.default.set(U.current.getSession());case 2:case"end":return G.stop()}},w)})),[q]),ye=(0,l.useCallback)(function(){var w=t()(s()().mark(function K(G){var re,te,$,oe,le,ne,F,se,Pe,ge,he,fe,ce;return s()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return A.current.answer={id:(0,I.Z)(),cards:[],content:"",role:"assistant",msgStatus:"generating"},U.current.updateMessage(A.current.answer),A.current.abortController=new AbortController,re=G.map(function(ve){return c()(c()({},ve),{},{content:ve.content||(ve.cards||[]).reduce(function(Se,Ce){return Se+(Ce.code==="Text"?Ce.data.content:"")},"")})}),R.next=6,fetch("https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(ae().apikey)},body:JSON.stringify({model:ae().model,enable_thinking:ae().enable_thinking,messages:re,stream:!0,stream_options:{include_usage:!0}}),signal:A.current.abortController.signal});case 6:if(te=R.sent,te.status===200){R.next=9;break}return R.abrupt("return");case 9:$="",oe="",le=!1,ne=!1,R.prev=13,se=p()((0,T.Z)({readableStream:te.body},{openaiCompatible:!0}));case 15:return R.next=17,se.next();case 17:if(!(le=!(Pe=R.sent).done)){R.next=36;break}if(ge=Pe.value,A.current.answer.msgStatus!=="interrupted"){R.next=22;break}return A.current.abortController.abort(),R.abrupt("break",36);case 22:if(ge.data!=="[DONE]"){R.next=25;break}return Q("finished"),R.abrupt("break",36);case 25:if(ce=JSON.parse(ge.data),!ce.usage){R.next=29;break}return Q("finished",ce.usage),R.abrupt("break",36);case 29:$+=((he=ce.choices[0])===null||he===void 0?void 0:he.delta.content)||"",oe+=((fe=ce.choices[0])===null||fe===void 0?void 0:fe.delta.reasoning_content)||"",A.current.answer.cards=M()([oe&&(0,S.L)("DeepThink",{content:oe,loading:!$}),$&&(0,S.L)("Text",{content:$,animation:!0,msgStatus:"generating"})]),U.current.updateMessage(A.current.answer);case 33:le=!1,R.next=15;break;case 36:R.next=42;break;case 38:R.prev=38,R.t0=R.catch(13),ne=!0,F=R.t0;case 42:if(R.prev=42,R.prev=43,!(le&&se.return!=null)){R.next=47;break}return R.next=47,se.return();case 47:if(R.prev=47,!ne){R.next=50;break}throw F;case 50:return R.finish(47);case 51:return R.finish(42);case 52:case"end":return R.stop()}},K,null,[[13,38,42,52],[43,,47,51]])}));return function(K){return w.apply(this,arguments)}}(),[q]),ke=(0,l.useCallback)(function(){var w=t()(s()().mark(function K(G){var re,te,$,oe;return s()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:if(ae().apikey){ne.next=3;break}return document.dispatchEvent(new CustomEvent("settingOpen")),ne.abrupt("return");case 3:Me(),A.current.answer=void 0,A.current.query={id:(0,I.Z)(),cards:[{code:"Text",data:{content:G.query,msgStatus:"finished"}}],role:"user",msgStatus:"finished"},(re=G.fileList)!==null&&re!==void 0&&re.length&&(te=[],$=[],oe=G.fileList.reduce(function(F,se){return[].concat(d()(F),d()(se))},[]),oe.forEach(function(F){F.type.startsWith("image")?te.push(F):$.push(F)}),te.length&&A.current.query.cards.push((0,S.L)("Images",te.map(function(F){return F.response}))),$.length&&A.current.query.cards.push((0,S.L)("Files",$.map(function(F){return{filename:F.name,bytes:F.size}})))),U.current.setLoading(!0),u.flushSync(function(){U.current.updateMessage(A.current.query)}),U.current.scrollToBottom(),ye(U.current.getMessages());case 11:case"end":return ne.stop()}},K)}));return function(K){return w.apply(this,arguments)}}(),[q]),Ee=(0,l.useCallback)(function(){Q("interrupted")},[q]),Me=(0,l.useCallback)(function(){try{A.current.answer.cards=A.current.answer.cards.filter(function(w){return w.code!=="Footer"}),U.current.updateMessage(A.current.answer)}catch(w){}},[q]),be=(0,l.useCallback)(function(w){u.flushSync(function(){U.current.removeMessage(w)});var K=U.current.getMessages();ye(K)},[q]),de=q.enable_thinking,De=(0,l.useState)([]),xe=a()(De,2),Te=xe[0],Oe=xe[1];return(0,j.jsxs)("div",{style:{height:"100vh"},children:[(0,j.jsx)(_,{}),(0,j.jsx)(O.ZP,{cardConfig:{MyCard:ue},uiConfig:{welcome:(0,j.jsx)(N.Z,{style:{marginTop:"calc(50vh - 128px)"},title:"Nice to meet you!",desc:"How can I help you today?"}),disclaimer:"AI can also make mistakes, so please check and use it carefully",header:(0,j.jsx)(J.default,{}),logo:(0,j.jsx)("div",{style:{fontFamily:"Montserrat",fontWeight:"bold"},children:"Spark Chat"}),quickInput:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(k.Z,{size:"small",onClick:function(){u.flushSync(function(){U.current.updateMessage({id:(0,I.Z)(),cards:[{code:"MyCard",data:[["MyCard",1e4]]}],role:"assistant",msgStatus:"finished"})}),U.current.scrollToBottom()},children:"quickInput"}),(0,j.jsx)(k.Z,{size:"small",onClick:function(){},children:"test case A"}),(0,j.jsx)(k.Z,{size:"small",children:"test case B"})]})},ref:U,onInput:{morePrefixActions:(0,j.jsx)(j.Fragment,{children:de!==void 0?(0,j.jsx)(k.Z,{type:"text",color:de?"primary":"default",variant:de?"filled":"text",icon:(0,j.jsx)(W.Z,{}),style:{padding:"0 6px",gap:6},onClick:function(){return pe({enable_thinking:!de})},children:"DeepThink"}):null}),onSubmit:ke,maxLength:1e5,beforeSubmit:function(){return Promise.resolve(!0)},zoomable:!0},onStop:Ee,onRegenerate:be,onSessionKeyChange:function(K){A.current.answer=void 0,A.current.query=void 0,ee.default.set({currentSessionKey:K})},onUpload:[{multiple:!1,icon:(0,j.jsx)(z.Z,{}),customRequest:function(K){K.onSuccess({url:URL.createObjectURL(K.file)})}},{multiple:!1,icon:(0,j.jsx)(z.Z,{}),customRequest:function(K){K.onSuccess({url:URL.createObjectURL(K.file)})}}]})]})}function ue(U){var ie=(0,B.TQ)(function(Q){return Q.onInput}),q=(0,l.useState)(""),ae=a()(q,2),pe=ae[0],A=ae[1];return(0,j.jsx)("div",{children:(0,j.jsxs)(x.Z,{title:"my card",size:"small",children:[(0,j.jsx)(r.Z,{gap:32,children:U.data.map(function(Q){return(0,j.jsx)(C.Z,{title:Q[0],value:Q[1]},Q[0])})}),(0,j.jsx)("br",{}),(0,j.jsxs)(r.Z,{gap:8,children:[(0,j.jsx)(E.Z,{placeholder:"\u8BF7\u8F93\u5165",onChange:function(me){return A(me.target.value)}})," ",(0,j.jsx)(k.Z,{onClick:function(){ie.onSubmit({query:pe})},children:"\u63D0\u4EA4"})]})]})})}},99387:function(m,n,e){e.r(n),e.d(n,{DemoContext:function(){return t},DemoContextProvider:function(){return g},useDemoContext:function(){return c}});var b=e(97857),a=e.n(b),f=e(5574),d=e.n(f),o=e(67294),s=e(79785),i=e(85893),t=o.createContext(void 0),g=function(y){var h=(0,s.Z)({model:"qwen-turbo",apikey:localStorage.getItem("apikey")||"",theme:localStorage.getItem("theme")||"carbon",enable_thinking:void 0}),p=d()(h,3),l=p[0],u=p[1],x=p[2];return(0,i.jsx)(t.Provider,{value:{demoContext:l,getDemoContext:x,setDemoContext:function(C){return u(function(E){var k=a()(a()({},E),C);return k.model==="qwen3-32b"&&k.enable_thinking===void 0&&(k.enable_thinking=!0),k.model!=="qwen3-32b"&&(k.enable_thinking=void 0),localStorage.setItem("apikey",k.apikey),localStorage.setItem("theme",k.theme),k})}},children:y.children})},c=function(){return o.useContext(t)}},82512:function(m,n,e){e.r(n),e.d(n,{default:function(){return c}});var b=e(67294),a=e(77577),f=e(85418),d=e(83622),o=e(99387),s=e(9838),i=e(85893),t=[{key:"qwen-turbo",label:(0,i.jsx)(g,{name:"Qwen-Turbo"})},{key:"qwen-max",label:(0,i.jsx)(g,{name:"Qwen-Max"})},{key:"qwq-plus",label:(0,i.jsx)(g,{name:"Qwen-QwQ-Plus"})},{key:"qwen3-32b",label:(0,i.jsx)(g,{name:"Qwen3-32B"})}];function g(v){var y=v.name,h=y===void 0?"":y,p=v.size,l=p===void 0?12:p,u=v.arrow,x=u===void 0?!1:u,r=(0,a.default)(),C=r.styles;return(0,i.jsxs)("div",{className:C.model,children:[(0,i.jsx)("img",{src:"https://img.alicdn.com/imgextra/i4/O1CN01SdyYTH1Kfz6skC36o_!!6000000001192-2-tps-96-96.png",className:C.modelLogo}),(0,i.jsx)("div",{className:C.modelName,style:{fontSize:l},children:h}),x&&(0,i.jsx)(s.Z,{})]})}function c(){var v=(0,o.useDemoContext)(),y=v.demoContext,h=v.setDemoContext,p=t.find(function(l){return l.key===y.model});return(0,i.jsx)(f.Z,{menu:{items:t,selectable:!0,onSelect:function(u){var x=u.key;h({model:x})}},children:(0,i.jsx)(d.ZP,{type:"text",style:{padding:"0 6px"},children:p!=null&&p.label?b.cloneElement(p.label,{size:16,arrow:!0}):null})})}},33588:function(m,n,e){e.r(n),e.d(n,{default:function(){return u}});var b=e(15009),a=e.n(b),f=e(99289),d=e.n(f),o=e(5574),s=e.n(o),i=e(67294),t=e(9966),g=e(64057),c=e(45286),v=e(21403),y=e(31912),h=e(99387),p=e(87697),l=e(85893);function u(){var r=t.Z.useForm(),C=s()(r,1),E=C[0],k=(0,i.useState)(!1),P=s()(k,2),D=P[0],M=P[1],S=(0,h.useDemoContext)(),L=S.getDemoContext,I=S.setDemoContext;return(0,i.useEffect)(function(){var T=function(){return M(!0)};return document.addEventListener("settingOpen",T),function(){document.removeEventListener("settingOpen",T)}},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.Z,{icon:(0,l.jsx)(p.Z,{}),onClick:function(){return M(!0)}}),(0,l.jsx)(c.Z,{title:"Setting",afterOpenChange:function(){E.setFieldsValue({apikey:L().apikey})},onClose:function(){return M(!1)},open:D,footer:(0,l.jsx)(v.Z,{type:"primary",onClick:d()(a()().mark(function T(){var O;return a()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,E.validateFields();case 2:O=B.sent,I({apikey:O.apikey}),M(!1);case 5:case"end":return B.stop()}},T)})),children:"Save"}),children:(0,l.jsxs)(t.Z,{form:E,children:[(0,l.jsx)(t.Z.Item,{name:"apikey",label:"API Key",rules:[{required:!0}],children:(0,l.jsx)(y.Z,{})}),(0,l.jsx)("a",{target:"_blank",href:"https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key",children:"How to get apikey? "})]})})]})}function x(r){var C=r.value,E=r.onChange;return _jsxs(Flex,{gap:8,align:"center",children:[_jsx(Radio.Group,{options:[{label:"Carbon",value:"carbon"},{label:"Purple",value:"purple"}],value:C,onChange:function(P){return E(P.target.value)}}),_jsx(ColorPicker,{value:C,onChange:function(P){return E(P.toCssString())}})]})}},18081:function(m,n,e){e.r(n),e.d(n,{default:function(){return o}});var b=e(82512),a=e(33588),f=e(77577),d=e(85893);function o(){var s=(0,f.default)(),i=s.styles;return(0,d.jsxs)("div",{className:i.header,children:[(0,d.jsx)(b.default,{}),(0,d.jsx)("div",{style:{flex:1}}),(0,d.jsx)(a.default,{})]})}},77577:function(m,n,e){e.r(n);var b=e(68400),a=e.n(b),f=e(9053),d,o,s,i;n.default=(0,f.kc)(function(t){var g=t.css,c=t.token;return{header:g(d||(d=a()([`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px 0 12px;
    width: 100%;
  `]))),model:g(o||(o=a()([`
    height: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  `]))),modelLogo:g(s||(s=a()([`
    width: 20px;
    height: 20px;
    background-color: `,`;
    border-radius: 6px;
  `])),c.colorBgBase),modelName:g(i||(i=a()([`
    font-weight: 500;
    line-height: 20px;
    color: `,`;
  `])),c.colorText)}})},17738:function(m,n,e){e.r(n);var b=e(97857),a=e.n(b),f={get:function(){var o=localStorage.getItem("chat-anywhere-session");return o?JSON.parse(o):{sessionList:[{label:Date.now().toString(),key:"9ed1150f-6046-4917-a124-6e85ba1ea933",messages:[[]]}],currentSessionKey:"9ed1150f-6046-4917-a124-6e85ba1ea933",currentRegenerateIndex:0}},set:function(o){var s=f.get()||{};localStorage.setItem("chat-anywhere-session",JSON.stringify(a()(a()({},s),o)))}};n.default=f},9212:function(m,n,e){e.r(n);var b=e(9783),a=e.n(b),f=e(5574),d=e.n(f),o=e(67294),s=e(64057),i=e(27646),t=e(16500),g=e(93967),c=e.n(g),v=e(13888),y=e(85893),h=function(l){var u,x=l.title,r=l.startTime,C=l.data,E=l.thumbnail,k=l.finished,P=l.onFullscreen,D=l.className,M=(0,o.useState)(k?(u=C.result)===null||u===void 0?void 0:u.endTime:Date.now()),S=d()(M,2),L=S[0],I=S[1];(0,o.useEffect)(function(){var O;return k?I(C.result.endTime):O=setInterval(function(){I(Date.now())},1e3),function(){clearInterval(O)}},[k]);var T=(0,t.formatDuration)(r,L);return(0,y.jsxs)("div",{className:c()(i.default.container,D,a()({},i.default.thumbnail,E)),children:[(0,y.jsxs)("div",{className:i.default.leftContent,children:[(0,y.jsx)(v.Z,{style:{fontSize:20}}),(0,y.jsx)("span",{className:i.default.title,children:x})]}),(0,y.jsxs)("div",{className:i.default.rightContent,children:[(0,y.jsx)("span",{className:i.default.duration,children:T}),(0,y.jsx)(s.Z,{className:i.default.fullscreenBtn,iconType:"spark-fullscreen-line",onClick:P,bordered:!1})]})]})};n.default=h},14358:function(m,n,e){e.r(n);var b=e(67294),a=e(26831),f=e(78499),d=e(85893),o=function(i){var t=i.data,g=i.activeTab,c=i.onTabChange,v=(0,b.useMemo)(function(){var p,l,u=[];return(p=t.result)!==null&&p!==void 0&&p.content&&u.push({key:"report",label:"Report"}),Array.isArray(t.steps)&&t.steps.length>0&&u.push({key:"process",label:"Process"}),Array.isArray((l=t.site)===null||l===void 0?void 0:l.list)&&t.site.list.length>0&&u.push({key:"source",label:"Source"}),u},[t]),y=function(l){c==null||c(l)},h=function(){var l;(l=t.result)!==null&&l!==void 0&&l.fileKey};return(0,d.jsx)("div",{className:f.default.tabsContainer,children:(0,d.jsx)(a.Z,{type:"segmented",items:v,activeKey:g,onChange:y})})};n.default=o},95639:function(m,n,e){e.r(n),e.d(n,{default:function(){return y}});var b=e(5574),a=e.n(b),f=e(67294),d=e(14358),o={container:"ufws3oMoFmALwjJ8M1W8",content:"RdbCkwzismA_YLaMsq_A"},s=e(14074),i=e(61889),t=e(78328),g=e(33331),c=e(85893),v=function(p){var l,u=p.data,x=p.viewIndex,r=(0,f.useState)("process"),C=a()(r,2),E=C[0],k=C[1];return(0,c.jsx)(g.default,{header:(0,c.jsx)(g.RightPanelHeader,{title:u.title,actions:null}),content:(0,c.jsxs)(g.RightPanelContent,{children:[(0,c.jsx)(d.default,{data:u,activeTab:E,onTabChange:k}),(0,c.jsxs)("div",{className:o.content,children:[E==="report"&&(0,c.jsx)(s.default,{data:u.result}),E==="process"&&(0,c.jsx)(i.default,{list:u.steps,viewIndex:x}),E==="source"&&(0,c.jsx)(t.default,{list:(l=u.site)===null||l===void 0?void 0:l.list})]})]})})},y=v},61889:function(m,n,e){e.r(n),e.d(n,{default:function(){return g}});var b=e(67294),a=e(82679),f={container:"tB7sEO03UwE8oAkSAVyK",siteListTitle:"PhWS9JaVX0wBTcMZVv8D",content:"MA_GYuDB0LM190oODwg4"},d=e(43050),o=e(93967),s=e.n(o),i=e(85893),t=function(v){var y=v.list,h=(0,b.useRef)([]);return(0,b.useEffect)(function(){},[v.viewIndex]),(0,i.jsx)("div",{className:f.container,children:y.map(function(p,l){var u;return(0,i.jsx)("div",{ref:function(r){return h.current[l]=r},children:(u=p.list)===null||u===void 0?void 0:u.map(function(x){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{content:x.content,className:f.content}),Array.isArray(x.siteList)&&x.siteList.length>0&&(0,i.jsxs)("div",{className:s()(f.siteList),children:[(0,i.jsx)("div",{className:f.siteListTitle,children:"Research websites"}),(0,i.jsx)(d.default,{list:x.siteList})]})]})})},l)})})},g=t},78328:function(m,n,e){e.r(n),e.d(n,{default:function(){return s}});var b=e(67294),a={container:"X5NIjNOwr4ku1R6PDsXs",title:"iVErpSCwzrcpZoIOWfdG",content:"GgNo9xarYR2oufvNIqcU"},f=e(37050),d=e(85893),o=function(t){var g=t.list;return(0,d.jsxs)("div",{className:a.container,children:[(0,d.jsxs)("div",{className:a.title,children:["Searched ",g.length," web pages"]}),(0,d.jsx)("div",{className:a.content,children:(0,d.jsx)(f.default,{list:g})})]})},s=o},14074:function(m,n,e){e.r(n),e.d(n,{default:function(){return s}});var b=e(67294),a=e(82679),f={container:"G0FucIJl_SM6O1PhP4G4"},d=e(85893),o=function(t){var g=t.data;return(0,d.jsx)(a.Z,{content:g.content,className:f.container})},s=o},2126:function(m,n,e){e.r(n);var b=e(67294),a=e(71460),f=e(62142),d=e(83202),o=e(85893),s=function(t){var g=t.count,c=t.onClick;return(0,o.jsxs)("div",{className:a.default.moreWrapper,onClick:c,children:[(0,o.jsxs)("div",{className:a.default.more,children:[(0,o.jsx)(f.Z,{className:a.default.linkIcon}),(0,o.jsxs)("span",{className:a.default.title,children:["Read More (",g,")"]})]}),(0,o.jsx)(d.Z,{className:a.default.rightIcon})]})};n.default=s},70260:function(m,n,e){e.r(n);var b=e(67294),a=e(71460),f=e(93967),d=e.n(f),o=e(85893),s=function(t){var g=t.data,c=t.type,v=c===void 0?"simple":c;return(0,o.jsx)("div",{className:d()(a.default.urlWrapper,a.default[v]),onClick:function(){g.url&&window.open(g.url,"_blank")},children:(0,o.jsxs)("div",{className:a.default.url,children:[(0,o.jsx)("div",{className:a.default.icon,children:g.icon&&(0,o.jsx)("img",{src:g.icon,className:a.default.iconImage,alt:""})}),(0,o.jsx)("span",{className:a.default.title,children:g.title}),(0,o.jsx)("span",{className:a.default.description,children:g.description})]})})};n.default=s},37050:function(m,n,e){e.r(n);var b=e(67294),a=e(39914),f=e(70260),d=e(85893),o=function(i){var t=i.list;return(0,d.jsx)("div",{className:a.default.container,children:(0,d.jsx)("div",{className:a.default.content,children:t.map(function(g){return(0,d.jsx)(f.default,{data:g,type:"detail"},g.title)})})})};n.default=o},43050:function(m,n,e){e.r(n),e.d(n,{default:function(){return v}});var b=e(5574),a=e.n(b),f=e(67294),d={container:"tXJ3yFZ1XkEW4iZD78eO",content:"ycDUiLEwUBAhwl0lbZeH",collapseButton:"yq2PG6sfnv4SUsDe65CY"},o=e(70260),s=e(2126),i=e(21403),t=e(28387),g=e(85893),c=function(h){var p=h.list,l=(0,f.useState)(!1),u=a()(l,2),x=u[0],r=u[1],C=(0,f.useMemo)(function(){return p.length<=8||x?[p,0]:[p.slice(0,7),p.length-7]},[p,x]),E=a()(C,2),k=E[0],P=E[1];return(0,g.jsxs)("div",{className:d.container,children:[(0,g.jsxs)("div",{className:d.content,children:[k.map(function(D){return(0,g.jsx)(o.default,{data:D,type:"simple"},D.title)}),P>0&&(0,g.jsx)(s.default,{count:P,onClick:function(){return r(!0)}})]}),x&&(0,g.jsx)(i.Z,{size:"small",type:"textCompact",icon:(0,g.jsx)(t.Z,{}),onClick:function(){return r(!1)},className:d.collapseButton,children:"Collapse"})]})},v=c},2196:function(m,n,e){e.r(n),e.d(n,{default:function(){return g}});var b=e(67294),a=e(42119),f={loading:"bA12hcXTs8DqYrdpnbwA","sps-steps-loading":"AjbdrZYgAbrKvf8lM8QU",stepsContainer:"BN21aDAF7Fwl9lu9HnaH"},d=e(67055),o=e(40443),s=e(77900),i=e(85893),t=function(v){var y=v.list,h=y===void 0?[]:y,p=v.onStepClick;return(0,i.jsx)("div",{className:f.stepsContainer,children:(0,i.jsx)(a.Z,{direction:"vertical",size:"small",items:h.map(function(l,u){return{title:(0,i.jsx)(d.Z,{title:l.title,children:l.title}),status:l.status==="RUNNING"?"process":l.status==="FINISHED"?"finish":"wait",icon:l.status==="RUNNING"?(0,i.jsx)(o.Z,{className:f.loading}):(0,i.jsx)(s.Z,{}),onClick:function(){}}})})})},g=t},10447:function(m,n,e){e.r(n),e.d(n,{default:function(){return P}});var b=e(9783),a=e.n(b),f=e(97857),d=e.n(f),o=e(13769),s=e.n(o),i=e(5574),t=e.n(i),g=e(67294),c={container:"XIeL2YwmWL4MmHOuQtuO",content:"dXDQeobpRzke1xJiHOpH",list:"NKS46qSwz2kQWN4OctVw",view:"Wosm6Mld9f8qG2uv2tpP",time:"CkOhOZ1WApMC6YYmxxkm",thumbnail:"xIBcDW1Rw_sF7rh569Av",finished:"OS2saoCRFdggfVfQEzz_",header:"TJff9gIqUQpyjdFY098D"},v=e(9212),y=e(2196),h=e(61889),p=e(93967),l=e.n(p),u=e(95639),x=e(73935),r=e(23630),C=e(85893),E=["steps","result"],k=function(M){var S,L=(0,r.default)(),I=t()(L,2),T=I[0],O=I[1],N=(0,g.useState)(0),B=t()(N,2),H=B[0],W=B[1],z=(0,g.useMemo)(function(){return Date.now()},[]),J=(0,g.useMemo)(function(){var V,j=((V=M.data)===null||V===void 0?void 0:V.data)||{},X=j.steps,_=X===void 0?[]:X,Z=j.result,ue=s()(j,E);return d()({steps:_.map(function(U){return d()(d()({},U),{},{startTime:parseInt(U.startTime||"0"),endTime:parseInt(U.endTime||"0")})}),result:d()(d()({},Z),{},{startTime:parseInt((Z==null?void 0:Z.startTime)||"0"),endTime:parseInt((Z==null?void 0:Z.endTime)||"0")})},ue)},[(S=M.data)===null||S===void 0?void 0:S.data]),ee=(0,g.useMemo)(function(){var V=Math.min(J.steps.reduce(function(j,X){return Math.min(j,X.startTime)},Number.MAX_SAFE_INTEGER),J.result.startTime||Number.MAX_SAFE_INTEGER);return V===Number.MAX_SAFE_INTEGER?z:V},[J.steps,J.result,z]),Y=(0,g.useMemo)(function(){return M.data.msgStatus==="finished"},[M.data.msgStatus]);return(0,C.jsxs)("div",{className:l()(c.container,a()({},c.thumbnail,T)),children:[(0,C.jsx)(v.default,{className:c.header,title:J.title,startTime:ee,data:J,finished:Y,thumbnail:T,onFullscreen:function(){return O(!0)}}),(0,C.jsxs)("div",{className:c.content,children:[(0,C.jsx)("div",{className:c.list,children:(0,C.jsx)(y.default,{list:J.steps,onStepClick:W})}),(0,C.jsx)("div",{className:c.view,children:(0,C.jsx)(h.default,{list:J.steps,viewIndex:H})})]}),T&&x.createPortal((0,C.jsx)(u.default,{data:J}),document.getElementById("right-panel"))]})},P=k},16500:function(m,n,e){e.r(n),e.d(n,{formatDuration:function(){return b}});var b=function(f,d){var o=Math.floor((d-f)/1e3),s=Math.floor(o/3600),i=Math.floor(o%3600/60),t=o%60,g=i.toString().padStart(2,"0"),c=t.toString().padStart(2,"0");return s>0||i>0?"".concat(g," minutes ").concat(c," seconds"):"".concat(c," seconds")}},23681:function(m,n,e){e.r(n),e.d(n,{default:function(){return i}});var b=e(60227),a=e(89698),f=e(36855),d=e(28373),o=e(67369),s=e(85893);function i(){return(0,s.jsx)(o.p4,{data:[{icon:(0,s.jsx)(b.Z,{}),label:"",onClick:function(){}},{icon:(0,s.jsx)(a.Z,{}),label:"",onClick:function(){}},{icon:(0,s.jsx)(f.Z,{}),label:"",onClick:function(){}},{icon:(0,s.jsx)(d.Z,{}),label:"",onClick:function(){}}]})}},48911:function(m,n,e){e.r(n),e.d(n,{default:function(){return l}});var b=e(5574),a=e.n(b),f=e(8894),d=e(88584),o=e(36231),s=e(88180),i=e(4146),t=e(64057),g=e(21403),c=e(67294),v=e(73935),y=e(33331),h=e(23630),p=e(85893);function l(x){var r=(0,h.default)(),C=a()(r,2),E=C[0],k=C[1],P=x.data,D=(0,s.default)(),M=D.styles,S=(0,p.jsx)(i.ZP,{value:P.content,language:"html",readOnly:!0});return(0,p.jsxs)("div",{className:M.webDev,children:[(0,p.jsxs)("div",{className:M.header,children:[(0,p.jsxs)("div",{className:M.left,children:[(0,p.jsx)(f.Z,{style:{fontSize:20}}),(0,p.jsx)("span",{className:M.title,children:P.title})]}),E?null:(0,p.jsx)(t.Z,{onClick:function(){return k(!E)},bordered:!1,icon:(0,p.jsx)(d.Z,{})})]}),E?v.createPortal((0,p.jsx)(u,{code:S,title:P.title,loading:P.loading,content:P.content}),document.getElementById("right-panel")):(0,p.jsx)("div",{className:M.content,children:S})]})}function u(x){var r=x.code,C=x.title,E=x.loading,k=x.content,P=(0,c.useState)(!1),D=a()(P,2),M=D[0],S=D[1],L=(0,s.default)(),I=L.styles,T=M?(0,p.jsx)("iframe",{className:I.iframe,srcDoc:k}):r;return(0,p.jsx)(y.default,{header:(0,p.jsx)(y.RightPanelHeader,{title:C,actions:(0,p.jsx)(g.Z,{icon:(0,p.jsx)(o.Z,{}),type:"primaryLess",loading:E,onClick:function(){E||S(!M)},children:M?"Exit":"Preview"})}),content:(0,p.jsx)(y.RightPanelContent,{children:T})})}},88180:function(m,n,e){e.r(n);var b=e(9053);n.default=(0,b.kc)(function(a){var f=a.css,d=a.token;return{webDev:{width:"100%",backgroundColor:d.colorBgBase,border:"1px solid ".concat(d.colorBorderSecondary),borderRadius:d.borderRadius,overflow:"hidden"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",height:48,padding:"0 16px"},left:{display:"flex",alignItems:"center"},title:{fontFamily:"claude clone",fontSize:14,marginLeft:8,fontWeight:600},content:{},iframe:{border:0,display:"block",width:"100%",height:"100%"}}})},35922:function(m,n,e){e.r(n),n.default="data:application/octet-stream;base64,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"},77333:function(m,n,e){e.r(n),e.d(n,{default:function(){return S}});var b=e(15009),a=e.n(b),f=e(99289),d=e.n(f),o=e(88773),s=e(29041),i=e(67294),t=e(81644),g=e(73935),c=e(47103),v=e(48775),y=e(22059),h=e(95233),p=e(23089),l=e(7715),u=e(93513),x=e(13021),r=e(48911),C=e(10447),E=e(9053),k=(0,E.kc)(function(I){var T=I.css,O=I.token;return{container:{display:"flex",height:"100%",background:O.colorBgBase},chat:{height:"100%",transition:"width .3s ease-out"}}}),P=e(33331),D=e(23681),M=e(85893);function S(){var I=k(),T=I.styles,O=(0,i.useContext)(l.DemoContext),N=O.demoContext,B=O.setDemoContext,H=O.getDemoContext,W=(0,i.useRef)(),z=(0,i.useRef)({}),J=(0,i.useCallback)(function(){var V=d()(a()().mark(function j(X){return a()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return W.current.setLoading(!0),B({initial:!1}),z.current.answer=void 0,z.current.query={id:(0,o.Z)(),cards:[{code:"Text",data:{content:X.query,msgStatus:"finished"}}],role:"user",msgStatus:"finished"},g.flushSync(function(){W.current.updateMessage(z.current.query)}),z.current.answer={id:(0,o.Z)(),role:"assistant",content:"",cards:[],msgStatus:"generating"},W.current.updateMessage(z.current.answer),Z.next=9,(0,x.default)({getDemoContext:H,currentQA:z,ref:W});case 9:return Z.next=11,L(100);case 11:ee("finished"),W.current.setLoading(!1);case 13:case"end":return Z.stop()}},j)}));return function(j){return V.apply(this,arguments)}}(),[]),ee=(0,i.useCallback)(function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"finished",j=W.current.getMessages().find(function(_){return _.id===z.current.answer.id}),X=(0,u.produce)(j,function(_){_.msgStatus=V,(_.cards||[]).forEach(function(Z){Z.data.msgStatus=V,Z.data.loading=!1}),_.cards.push({code:"Footer",data:{left:(0,M.jsx)(D.default,{})}})});W.current.updateMessage(X)},[]),Y=(0,i.useCallback)(function(){},[]);return(0,M.jsxs)("div",{className:T.container,children:[(0,M.jsx)("div",{className:T.chat,style:{width:N.canvas?480:"100%"},children:(0,M.jsx)(s.ZP,{cardConfig:{WebDev:r.default,DeepResearch:C.default},uiConfig:{disclaimer:"AI can also make mistakes, so please check carefully and use it with caution",header:(0,M.jsx)(c.default,{chat:W}),welcome:(0,M.jsx)(v.default,{})},ref:W,onInput:{zoomable:!N.initial,morePrefixActions:(0,M.jsx)(h.default,{}),beforeUI:(0,M.jsx)(y.default,{}),afterUI:(0,M.jsx)(p.default,{onSubmit:J}),placeholder:"please type here",onSubmit:J},onStop:Y,onUpload:[{multiple:!1,icon:(0,M.jsx)(t.Z,{}),customRequest:function(j){j.onSuccess({url:URL.createObjectURL(j.file)})}}]})}),(0,M.jsx)(P.RightPanelPortal,{})]})}function L(I){return new Promise(function(T){return setTimeout(T,I)})}},47103:function(m,n,e){e.r(n),e.d(n,{default:function(){return g}});var b=e(2350),a=e(31079),f=e(64057),d=e(67294),o=e(18426),s=e(49331),i=e(86250),t=e(85893);function g(c){var v=(0,b.default)(),y=v.styles,h=(0,d.useContext)(s.ConfigProviderContext),p=h.dark,l=h.setDark;return(0,t.jsxs)("div",{className:y.header,children:[(0,t.jsx)(a.default,{size:"small"}),(0,t.jsx)(i.Z,{gap:8,children:(0,t.jsx)(f.Z,{bordered:!1,onClick:function(){return c.chat.current.removeAllMessages()},icon:(0,t.jsx)(o.Z,{})})})]})}},2350:function(m,n,e){e.r(n);var b=e(68400),a=e.n(b),f=e(9053),d;n.default=(0,f.kc)(function(o){var s=o.css,i=o.token;return{header:s(d||(d=a()([`
    width: 100%;
    height: 64px;
    padding: 0 24px 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `])))}})},22059:function(m,n,e){e.r(n),e.d(n,{default:function(){return i}});var b=e(8894),a=e(13888),f=e(93164),d=e(67294),o=e(7715),s=e(85893);function i(){var t=(0,d.useContext)(o.DemoContext),g=t.demoContext,c=t.setDemoContext;return g.initial&&!g.mode?null:(0,s.jsx)(f.Z.ModeSelect,{options:[{icon:(0,s.jsx)(b.Z,{}),label:"Web Development",value:"WebDev"},{icon:(0,s.jsx)(a.Z,{}),label:"Deep Research",value:"DeepResearch"}],value:g.mode,onChange:function(y){return c({mode:y})}})}},31079:function(m,n,e){e.r(n),e.d(n,{default:function(){return y}});var b=e(97857),a=e.n(b),f=e(77512),d=e(67294),o=e(85136),s=e(9838),i=e(97634),t=e(7715),g=e(85893),c="https://gw.alicdn.com/imgextra/i1/O1CN01qYTgPn1Oaj6j7oc14_!!6000000001722-55-tps-24-25.svg",v=[{value:"claude-3.5-sonnet",label:"Claude 3.5 Sonnet"},{value:"claude-4.1-Opus",label:"Claude 4.1 Opus"}];function y(p){var l=p.size,u=l===void 0?"large":l,x=(0,o.default)(),r=x.styles,C=x.cx,E=(0,d.useContext)(t.DemoContext),k=E.demoContext,P=E.setDemoContext,D=v.find(function(M){return M.value===k.model});return(0,g.jsx)("div",{children:(0,g.jsx)(f.Z,{menu:{items:v.map(function(M){return{key:M.value,label:(0,g.jsx)(h,a()(a()({},M),{},{onClick:function(){P({model:M.value})},selected:k.model===M.value}))}})},children:(0,g.jsxs)("div",{className:C(r.display,r[u]),children:[(0,g.jsx)("img",{src:c}),D==null?void 0:D.label,(0,g.jsx)(s.Z,{})]})})})}function h(p){var l=(0,o.default)(),u=l.styles;return(0,g.jsxs)("div",{onClick:function(){return p.onClick()},className:u.item,children:[(0,g.jsx)("div",{className:u.itemIcon,children:(0,g.jsx)("img",{src:c,width:14,height:14})}),(0,g.jsx)("div",{className:u.itemTitle,children:p.label}),p.selected&&(0,g.jsx)(i.Z,{})]})}},85136:function(m,n,e){e.r(n);var b=e(9053);n.default=(0,b.kc)(function(a){var f=a.css,d=a.token;return{display:{fontFamily:"claude clone",display:"flex",alignItems:"center",gap:8,cursor:"pointer",color:d.colorText},small:{fontSize:14,height:20,img:{width:20,height:20,padding:2.5,background:d.colorPrimaryBg,borderRadius:4}},large:{fontSize:20,height:40,img:{width:24,height:24}},item:{display:"flex",alignItems:"center",gap:8},itemIcon:{width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4},itemTitle:{fontFamily:"claude clone"}}})},95233:function(m,n,e){e.r(n),e.d(n,{default:function(){return y}});var b=e(97857),a=e.n(b),f=e(9783),d=e.n(f),o=e(21403),s=e(7715),i=e(67294),t=e(98839),g=e(29986),c=e(9053),v=e(85893);function y(){var l=(0,i.useContext)(s.DemoContext),u=l.demoContext,x=l.setDemoContext;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{icon:(0,v.jsx)(t.Z,{}),selected:u.enableThinking,onClick:function(){return x({enableThinking:!u.enableThinking})},children:"Deep Thinking"}),(0,v.jsx)(h,{selected:u.enableSearch,icon:(0,v.jsx)(g.Z,{}),onClick:function(){return x({enableSearch:!u.enableSearch})},children:"Web Search"})]})}function h(l){var u=p(),x=u.styles,r=u.cx;return(0,v.jsx)(o.Z,a()(a()({},l),{},{className:r(x.btn,d()({},x.selected,l.selected))}))}var p=(0,c.kc)(function(l){var u=l.token;return{btn:{gap:6},selected:{color:"".concat(u.colorPrimary," !important"),backgroundColor:"".concat(u.colorPrimaryBg," !important"),borderColor:"".concat(u.colorPrimaryBg," !important")}}})},93822:function(m,n,e){e.r(n),e.d(n,{default:function(){return p}});var b=e(68400),a=e.n(b),f=e(39146),d=e(9053),o=e(85893),s,i,t,g,c,v,y,h=[{prompt:"deep research on the topic of city pop"},{prompt:"deep research on the topic of city pop"},{prompt:"deep research on the topic of city pop"}];function p(u){var x=l(),r=x.styles;return(0,o.jsx)("div",{className:r.preset,children:h.map(function(C){return(0,o.jsxs)("div",{className:r.presetItem,onClick:function(){return u.onSubmit({query:C.prompt})},children:[(0,o.jsxs)("div",{className:r.children,children:[(0,o.jsx)("img",{width:24,height:24,src:"https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg"}),(0,o.jsx)("div",{className:r.prompt,children:C.prompt}),(0,o.jsxs)("div",{className:r.skeletonContainer,children:[(0,o.jsx)("div",{className:r.skeletonLine}),(0,o.jsx)("div",{className:r.skeletonLine}),(0,o.jsx)("div",{className:r.skeletonShortLine})]})]}),(0,o.jsxs)("div",{className:r.content,children:[(0,o.jsx)("div",{className:r.title,children:C.prompt}),(0,o.jsx)(f.Z,{})]})]},C.prompt)})})}var l=(0,d.kc)(function(u){var x=u.token,r=u.css,C=u.cx,E=C(r(s||(s=a()([`
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
  `])),x.colorBgBase,x.colorBorderSecondary));return{preset:{marginTop:32,display:"flex",justifyContent:"center",gap:12},presetItem:r(i||(i=a()([`
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
    `])),x.colorBorderSecondary,x.colorFillTertiary,x.colorPrimary,E),children:{display:"flex",flexDirection:"column",gap:10,height:"100%",width:"100%",backgroundColor:x.colorBgBase,borderRadius:8,padding:"20px 12px"},prompt:r(t||(t=a()([`
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
      color: `,`;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    `])),x.colorText),content:E,title:r(g||(g=a()([`
      font-size: 14px;
      color: `,`;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `])),x.colorText),skeletonContainer:r(c||(c=a()([`
      display: flex;
      flex-direction: column;
      gap: 8px;
    `]))),skeletonLine:r(v||(v=a()([`
      width: 100%;
      height: 8px;
      background-color: `,`;
      border-radius: 99px;
    `])),x.colorFillTertiary),skeletonShortLine:r(y||(y=a()([`
      width: 50%;
      height: 8px;
      background-color: `,`;
      border-radius: 99px;
    `])),x.colorFillTertiary)}})},50571:function(m,n,e){e.r(n),e.d(n,{default:function(){return c}});var b=e(68400),a=e.n(b),f=e(39146),d=e(9053),o=e(85893),s,i,t,g=[{prompt:"write a landing page for a fruit shop",image:"https://gw.alicdn.com/imgextra/i1/O1CN01ObcQyY1vyQveMjl76_!!6000000006241-55-tps-390-200.svg"},{prompt:"write a portfolio website",image:"https://gw.alicdn.com/imgextra/i2/O1CN01NciUQw1tzgmhPLmfF_!!6000000005973-55-tps-390-200.svg"}];function c(y){var h=v(),p=h.styles;return(0,o.jsx)("div",{className:p.preset,children:g.map(function(l){return(0,o.jsxs)("div",{className:p.presetItem,onClick:function(){return y.onSubmit({query:l.prompt})},children:[(0,o.jsx)("img",{src:l.image,alt:l.prompt}),(0,o.jsxs)("div",{className:p.content,children:[(0,o.jsx)("div",{className:p.title,children:l.prompt}),(0,o.jsx)(f.Z,{})]})]},l.prompt)})})}var v=(0,d.kc)(function(y){var h=y.token,p=y.css,l=y.cx,u=l(p(s||(s=a()([`
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
  `])),h.colorBgBase,h.colorBorderSecondary));return{preset:{marginTop:32,display:"flex",justifyContent:"center",gap:12},presetItem:p(i||(i=a()([`
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
    `])),h.colorBorderSecondary,h.colorPrimary,u),content:u,title:p(t||(t=a()([`
      font-size: 14px;
      color: `,`;
    `])),h.colorText)}})},23089:function(m,n,e){e.r(n),e.d(n,{default:function(){return h}});var b=e(67294),a=e(7715),f=e(8894),d=e(13888),o=e(19458),s=e(55841),i=e(21403),t=e(9053),g=e(50571),c=e(93822),v=e(85893),y=[{icon:(0,v.jsx)(f.Z,{}),label:"Web Development",value:"WebDev",type:"mode"},{icon:(0,v.jsx)(d.Z,{}),label:"Deep Research",value:"DeepResearch",type:"mode"},{icon:(0,v.jsx)(o.Z,{}),label:"Write Article",value:"Write Article",type:"quick"},{icon:(0,v.jsx)(s.Z,{}),label:"Brainstorm",value:"Brainstorm",type:"quick"}];function h(l){var u=(0,b.useContext)(a.DemoContext),x=u.demoContext,r=u.setDemoContext,C=p(),E=C.styles;if(!x.initial)return null;var k=x.mode;return k==="WebDev"?(0,v.jsx)(g.default,{onSubmit:l.onSubmit}):k==="DeepResearch"?(0,v.jsx)(c.default,{onSubmit:l.onSubmit}):(0,v.jsx)("div",{className:E.preset,children:y.map(function(P){return(0,v.jsx)("div",{children:(0,v.jsx)(i.Z,{icon:P.icon,onClick:function(){P.type==="mode"?r({mode:P.value}):l.onSubmit({query:P.value})},children:P.label})},P.value)})})}var p=(0,t.kc)(function(l){var u=l.token;return{preset:{marginTop:32,display:"flex",justifyContent:"center",gap:12}}})},33331:function(m,n,e){e.r(n),e.d(n,{RightPanelContent:function(){return g},RightPanelHeader:function(){return c},RightPanelPortal:function(){return y},default:function(){return t},useRightPanel:function(){return v}});var b=e(67294),a=e(9053),f=(0,a.kc)(function(h){var p=h.css,l=h.token;return{rightPanel:{display:"flex",flexDirection:"column",height:"100%",borderLeft:"1px solid ".concat(l.colorBorderSecondary)},header:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px",height:64,background:l.colorFillTertiary},headerLeft:{display:"flex",alignItems:"center",gap:8},headerRight:{display:"flex",alignItems:"center",gap:8},title:{fontFamily:"claude clone",fontSize:16,marginLeft:8,fontWeight:600},content:{flex:1,overflow:"auto"}}}),d=e(7715),o=e(64057),s=e(89102),i=e(85893);function t(h){var p=f(),l=p.styles,u=(0,b.useContext)(d.DemoContext),x=u.demoContext,r=u.setDemoContext,C=u.getDemoContext,E=h.header,k=h.content;return(0,b.useEffect)(function(){return r({canvas:!0}),function(){r({canvas:!1})}},[]),(0,i.jsxs)("div",{className:l.rightPanel,children:[E,k]})}var g=function(p){var l=f(),u=l.styles;return(0,i.jsx)("div",{className:u.content,children:p.children})},c=function(p){var l=(0,b.useContext)(d.DemoContext),u=l.demoContext,x=l.setDemoContext,r=l.getDemoContext,C=f(),E=C.styles;return(0,i.jsxs)("div",{className:E.header,children:[(0,i.jsxs)("div",{className:E.headerLeft,children:[(0,i.jsx)(o.Z,{bordered:!1,icon:(0,i.jsx)(s.Z,{}),onClick:function(){x({canvas:!1})}}),(0,i.jsx)("span",{className:E.title,children:p.title})]}),(0,i.jsx)("div",{className:E.headerRight,children:p.actions})]})},v=function(){},y=function(){return(0,i.jsx)("div",{id:"right-panel",style:{flex:1,width:0}})}},48775:function(m,n,e){e.r(n),e.d(n,{default:function(){return i}});var b=e(68400),a=e.n(b),f=e(9053),d=e(31079),o=e(85893),s;function i(){var c=t(),v=c.styles;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,{}),(0,o.jsxs)("div",{className:v.welcome,children:[(0,o.jsx)("div",{className:v.h1,children:"Welcome to LLMs Experience"}),(0,o.jsxs)("div",{className:v.h2,children:["Start with ",(0,o.jsx)(d.default,{size:"large"})]})]})]})}var t=(0,f.kc)(function(c){var v=c.css,y=c.token;return{welcome:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,marginTop:"calc(10vh + 80px + 64px)",marginBottom:20},h1:{fontFamily:"claude clone",fontSize:32,lineHeight:"48px",fontWeight:"500"},h2:{fontFamily:"claude clone",display:"flex",justifyContent:"center",alignItems:"center",gap:16,fontSize:20,lineHeight:"32px",color:y.colorTextSecondary}}}),g=(0,f.vJ)(s||(s=a()([`
.sps-chat-anywhere-chat-welcome {
  height: auto !important;  
}`])))},49331:function(m,n,e){e.r(n),e.d(n,{ConfigProviderContext:function(){return g},default:function(){return c}});var b=e(97857),a=e.n(b),f=e(5574),d=e.n(f),o=e(21766),s=e(36238),i=e(67294),t=e(85893),g=i.createContext(void 0);function c(v){var y=(0,i.useState)(!1),h=d()(y,2),p=h[0],l=h[1],u=p?s.darkTheme:s.lightTheme;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(g.Provider,{value:{dark:p,setDark:l},children:(0,t.jsx)(o.ZP,a()(a()({},u),{},{style:{height:"100%"},iconfont:"https://at.alicdn.com/t/a/font_4807885_6wjcpzayws6.js",prefix:"sps",prefixCls:"sps",children:v.children}))})})}},7715:function(m,n,e){e.r(n),e.d(n,{DemoContext:function(){return t},default:function(){return g}});var b=e(97857),a=e.n(b),f=e(5574),d=e.n(f),o=e(79785),s=e(67294),i=e(85893),t=s.createContext(void 0);function g(c){var v=(0,o.Z)({model:"claude-3.5-sonnet",enableSearch:!1,enableThinking:!1,initial:!0,mode:void 0,canvas:!1}),y=d()(v,3),h=y[0],p=y[1],l=y[2];return(0,i.jsx)(t.Provider,{value:{demoContext:h,setDemoContext:function(x){p(function(r){return a()(a()({},r),x)})},getDemoContext:l},children:c.children})}},36238:function(m,n,e){e.r(n),e.d(n,{darkTheme:function(){return d},lightTheme:function(){return o}});var b=e(81759),a={borderRadiusXS:4,borderRadiusSM:6,borderRadius:8,borderRadiusLG:12,borderRadiusXL:16,borderRadiusFull:999,wireframe:!1,colorPrimaryBg:"rgba(239, 237, 229, 1)",colorPrimaryBgHover:"rgba(239, 237, 229, 1)",colorPrimaryBorder:"rgba(186, 90, 59, 1)",colorPrimaryBorderHover:"rgba(194, 98, 66, 1)",colorPrimaryHover:"rgba(194, 98, 66, 1)",colorPrimary:"rgba(208, 110, 78, 1)",colorPrimaryActive:"rgba(194, 98, 66, 1)",colorPrimaryTextHover:"rgba(186, 90, 59, 1)",colorPrimaryText:"rgba(186, 90, 59, 1)",colorPrimaryTextActive:"rgba(186, 90, 59, 1)",colorTextBase:"rgba(26, 26, 29, 1)",colorBgBase:"rgba(255, 255, 255, 1)",colorText:"rgba(20, 20, 19, 0.88)",colorTextSecondary:"rgba(20, 20, 19, 0.65)",colorTextTertiary:"rgba(20, 20, 19, 0.45)",colorTextQuaternary:"rgba(20, 20, 19, 0.25)",colorBorder:"rgba(193, 192, 187, 1)",colorBorderSecondary:"rgba(234, 233, 231, 1)",colorFill:"rgba(43, 27, 0, 0.12)",colorFillSecondary:"rgba(43, 27, 0, 0.08)",colorFillTertiary:"rgba(43, 27, 0, 0.03)",colorFillQuaternary:"rgba(43, 27, 0, 0.02)",colorBgContainer:"rgba(255, 255, 255, 1)",colorBgElevated:"rgba(255, 255, 255, 1)",colorBgLayout:"rgba(249, 248, 244, 1)",colorBgSpotlight:"rgba(20, 20, 19, 0.85)",colorBgMask:"rgba(0, 0, 0, 0.45)",colorInfo:"rgba(11, 131, 241, 1)",colorInfoHover:"rgba(94, 188, 255, 1)",colorInfoBorder:"rgba(135, 209, 255, 1)",colorInfoText:"rgba(11, 131, 241, 1)",colorInfoBg:"rgba(230, 247, 255, 1)",colorInfoBgHover:"rgba(176, 227, 255, 1)",colorInfoBorderHover:"rgba(94, 188, 255, 1)",colorSuccess:"rgba(91, 185, 139, 1)",colorSuccessHover:"rgba(171, 212, 190, 1)",colorSuccessBg:"rgba(235, 250, 240, 1)",colorSuccessBgHover:"rgba(223, 237, 228, 1)",colorSuccessBorder:"rgba(211, 224, 217, 1)",colorSuccessBorderHover:"rgba(171, 212, 190, 1)",colorWarning:"rgba(250, 173, 20, 1)",colorWarningHover:"rgba(255, 214, 102, 1)",colorWarningBg:"rgba(255, 251, 230, 1)",colorWarningBgHover:"rgba(255, 241, 184, 1)",colorWarningBorder:"rgba(255, 229, 143, 1)",colorWarningBorderHover:"rgba(255, 214, 102, 1)",colorError:"rgba(255, 77, 79, 1)",colorErrorHover:"rgba(255, 120, 117, 1)",colorErrorBg:"rgba(255, 242, 240, 1)",colorErrorBgHover:"rgba(255, 241, 240, 1)",colorErrorBorder:"rgba(255, 204, 199, 1)",colorErrorBorderHover:"rgba(255, 163, 158, 1)",colorLink:"rgba(0, 77, 255, 1)",boxShadow:"0px 4px 6px 0px rgba(0, 0, 0, 0.08)",boxShadowSecondary:"0px 12px 24px -16px rgba(0, 0, 0, 0.06), 0px 8px 40px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.04)",colorTextWhite:"rgba(255, 255, 255, 1)",colorFillDisable:"rgba(235, 235, 232, 1)",colorPurple:"rgba(97, 92, 237, 1)",colorPurpleHover:"rgba(97, 92, 237, 1)",colorPurpleBg:"rgba(226, 222, 255, 0.8)",colorPink:"rgba(236, 72, 153, 1)",colorPinkHover:"rgba(236, 72, 153, 1)",colorPinkBg:"rgba(251, 220, 239, 0.8)",colorYellow:"rgba(234, 179, 8, 1)",colorYellowHover:"rgba(234, 179, 8, 1)",colorYellowBg:"rgba(255, 250, 184, 0.8)",colorOrange:"rgba(250, 129, 37, 1)",colorOrangeHover:"rgba(250, 129, 37, 1)",colorOrangeBg:"rgba(255, 232, 201, 0.8)",colorTeal:"rgba(20, 184, 166, 1)",colorTealHover:"rgba(20, 184, 166, 1)",colorTealBg:"rgba(200, 244, 233, 0.8)",colorBlue:"rgba(0, 144, 255, 1)",colorBlueHover:"rgba(0, 144, 255, 1)",colorBlueBg:"rgba(194, 229, 255, 0.8)",colorMauve:"rgba(142, 140, 153, 1)",colorMauveHover:"rgba(142, 140, 153, 1)",colorMauveBg:"rgba(239, 240, 243, 0.8)",boxShadowTertiary:"0px 12px 32px -16px rgba(0, 0, 0, 0.24), 0px 12px 60px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.04)",boxShadowTertiaryLeft:"-12px 0px 32px -16px rgba(0, 0, 0, 0.24), -12px 0px 60px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.04)",boxShadowInput:"0px 12px 24px -16px rgba(54, 54, 73, 0.04), 0px 12px 40px 0px rgba(51, 51, 71, 0.08), 0px 0px 1px 0px rgba(44, 44, 54, 0.02)"},f={borderRadiusXS:4,borderRadiusSM:6,borderRadius:8,borderRadiusLG:12,borderRadiusXL:16,borderRadiusFull:999,wireframe:!1,colorPrimaryBg:"rgba(41, 35, 29, 1)",colorPrimaryBgHover:"rgba(70, 60, 50, 1)",colorPrimaryBorder:"rgba(133, 80, 40, 1)",colorPrimaryBorderHover:"rgba(146, 102, 52, 1)",colorPrimaryHover:"rgba(156, 88, 57, 1)",colorPrimary:"rgba(156, 88, 57, 1)",colorPrimaryActive:"rgba(146, 102, 52, 1)",colorPrimaryTextHover:"rgba(133, 80, 40, 1)",colorPrimaryText:"rgba(160, 96, 63, 1)",colorPrimaryTextActive:"rgba(133, 80, 40, 1)",colorTextBase:"rgba(230, 230, 230, 1)",colorBgBase:"rgba(15, 13, 12, 1)",colorText:"rgba(230, 230, 230, 0.9)",colorTextSecondary:"rgba(180, 180, 180, 0.8)",colorTextTertiary:"rgba(255, 255, 255, 0.6)",colorTextQuaternary:"rgba(255, 255, 255, 0.3)",colorBorder:"rgba(82, 76, 73, 1)",colorBorderSecondary:"rgba(50, 46, 43, 1)",colorFill:"rgba(82, 79, 74, 0.32)",colorFillSecondary:"rgba(83, 79, 72, 0.24)",colorFillTertiary:"rgba(50, 50, 50, 0.26)",colorFillQuaternary:"rgba(67, 64, 59, 0.12)",colorBgContainer:"rgba(52, 50, 47, 1)",colorBgElevated:"rgba(47, 42, 39, 1)",colorBgLayout:"rgba(26, 26, 24, 1)",colorBgSpotlight:"rgba(10, 10, 10, 0.85)",colorBgMask:"rgba(0, 0, 0, 0.6)",colorInfo:"rgba(11, 131, 241, 1)",colorInfoHover:"rgba(94, 188, 255, 1)",colorInfoBorder:"rgba(57, 144, 201, 1)",colorInfoText:"rgba(11, 131, 241, 1)",colorInfoBg:"rgba(17, 34, 51, 1)",colorInfoBgHover:"rgba(38, 72, 102, 1)",colorInfoBorderHover:"rgba(94, 188, 255, 1)",colorSuccess:"rgba(91, 185, 139, 1)",colorSuccessHover:"rgba(116, 164, 124, 1)",colorSuccessBg:"rgba(41, 54, 49, 1)",colorSuccessBgHover:"rgba(63, 81, 71, 1)",colorSuccessBorder:"rgba(115, 163, 119, 1)",colorSuccessBorderHover:"rgba(171, 212, 190, 1)",colorWarning:"rgba(250, 173, 20, 1)",colorWarningHover:"rgba(255, 140, 40, 1)",colorWarningBg:"rgba(45, 35, 26, 1)",colorWarningBgHover:"rgba(77, 59, 35, 1)",colorWarningBorder:"rgba(255, 166, 40, 1)",colorWarningBorderHover:"rgba(255, 214, 102, 1)",colorError:"rgba(255, 77, 79, 1)",colorErrorHover:"rgba(238, 101, 78, 1)",colorErrorBg:"rgba(43, 11, 8, 1)",colorErrorBgHover:"rgba(74, 42, 40, 1)",colorErrorBorder:"rgba(238, 91, 78, 1)",colorErrorBorderHover:"rgba(255, 163, 158, 1)",colorLink:"rgba(77, 125, 255, 1)",colorTextWhite:"rgba(255, 255, 255, 1)",colorFillDisable:"rgba(90, 90, 90, 1)",colorPurple:"rgba(97, 92, 237, 1)",colorPurpleHover:"rgba(97, 92, 237, 1)",colorPurpleBg:"rgba(60, 53, 85, 1)",colorPink:"rgba(236, 72, 153, 1)",colorPinkHover:"rgba(236, 72, 153, 1)",colorPinkBg:"rgba(74, 42, 58, 1)",colorYellow:"rgba(234, 179, 8, 1)",colorYellowHover:"rgba(234, 179, 8, 1)",colorYellowBg:"rgba(77, 71, 32, 1)",colorOrange:"rgba(250, 129, 37, 1)",colorOrangeHover:"rgba(250, 129, 37, 1)",colorOrangeBg:"rgba(255, 232, 201, 0.8)",colorTeal:"rgba(20, 184, 166, 1)",colorTealHover:"rgba(20, 184, 166, 1)",colorTealBg:"rgba(42, 70, 64, 1)",colorBlue:"rgba(0, 144, 255, 1)",colorBlueHover:"rgba(0, 144, 255, 1)",colorBlueBg:"rgba(42, 59, 78, 0.8)",colorMauve:"rgba(142, 140, 153, 1)",colorMauveHover:"rgba(142, 140, 153, 1)",colorMauveBg:"rgba(46, 46, 50, 0.8)",boxShadow:"0px 4px 6px 0px rgba(255, 255, 255, 0.08)",boxShadowSecondary:"0px 12px 24px -16px rgba(255, 255, 255, 0.04), 0px 8px 40px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.03)",boxShadowTertiary:"0px 12px 32px -16px rgba(255, 255, 255, 0.16), 0px 12px 60px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.04)",boxShadowTertiaryLeft:"-12px 0px 32px -16px rgba(255, 255, 255, 0.16), -12px 0px 60px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.04)",boxShadowInput:"0px 12px 24px -16px rgba(254, 254, 255, 0.04), 0px 12px 40px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.02)"},d=(0,b.Z)(f,!0),o=(0,b.Z)(a,!1)},23630:function(m,n,e){e.r(n);var b=e(5574),a=e.n(b),f=e(67294),d=e(7715),o=e(45210),s={};function i(t){var g=(0,f.useRef)(t||Math.random().toString()),c=(0,f.useContext)(d.DemoContext),v=c.demoContext,y=(0,f.useState)(s[g.current]),h=a()(y,2),p=h[0],l=h[1];return(0,f.useEffect)(function(){s[g.current]=[p,l]},[p,l]),(0,o.Z)(function(){delete s[g.current]}),(0,f.useEffect)(function(){if(!v.canvas)for(var u in s)s[u][0]=!1,s[u][1](!1)},[v.canvas]),[p,function(u){for(var x in s)s[x][0]=!1,s[x][1](!1);s[g.current]=u,l(u)}]}n.default=i},30383:function(m,n,e){e.r(n),e.d(n,{default:function(){return y}});var b=e(15009),a=e.n(b),f=e(64599),d=e.n(f),o=e(97857),s=e.n(o),i=e(99289),t=e.n(i),g=e(93513),c=e(28262),v=e(34226);function y(l,u){return h.apply(this,arguments)}function h(){return h=t()(a()().mark(function l(u,x){var r,C,E,k,P;return a()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,(0,v.default)(1e3);case 2:return r=x.current.getMessages().find(function(S){return S.id===u.current.answer.id}),C=(0,g.produce)(r,function(S){S.cards.push({code:"Text",data:{content:"I am conducting in-depth research on the topic you provided.",msgStatus:"finished",className:"claude-clone-font"}}),S.cards.push({code:"DeepResearch",data:{data:{title:"loading...",steps:[]}}})}),x.current.updateMessage(C),M.next=7,(0,v.default)(100);case 7:E=d()(p()),M.prev=8,P=a()().mark(function S(){var L,I,T;return a()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return L=k.value,N.next=3,(0,v.default)(1e3);case 3:I=x.current.getMessages().find(function(B){return B.id===u.current.answer.id}),T=(0,g.produce)(I,function(B){B.cards[1].data.data=L}),x.current.updateMessage(T);case 6:case"end":return N.stop()}},S)}),E.s();case 11:if((k=E.n()).done){M.next=15;break}return M.delegateYield(P(),"t0",13);case 13:M.next=11;break;case 15:M.next=20;break;case 17:M.prev=17,M.t1=M.catch(8),E.e(M.t1);case 20:return M.prev=20,E.f(),M.finish(20);case 23:case"end":return M.stop()}},l,null,[[8,17,20,23]])})),h.apply(this,arguments)}function p(){var l=[{title:c.default.title,steps:[]},{title:c.default.title,steps:c.default.steps.map(function(u){return s()(s()({},u),{},{status:"RUNNING"})})},{title:c.default.title,steps:c.default.steps.map(function(u,x){return x>0?s()(s()({},u),{},{status:"RUNNING"}):s()(s()({},u),{},{status:"FINISHED"})})},{title:c.default.title,steps:c.default.steps.map(function(u,x){return x>1?s()(s()({},u),{},{status:"RUNNING"}):s()(s()({},u),{},{status:"FINISHED"})})},{title:c.default.title,steps:c.default.steps.map(function(u,x){return s()(s()({},u),{},{status:"FINISHED"})})},c.default];return l}},28262:function(m,n,e){e.r(n),n.default={title:"Free AI tool research",steps:[{title:"Exploring free AI tools",status:"FINISHED",startTime:"2024-01-15T09:00:00Z",endTime:"2024-01-15T10:30:00Z",list:[{content:`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
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
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.`}}},13021:function(m,n,e){e.r(n),e.d(n,{default:function(){return g}});var b=e(15009),a=e.n(b),f=e(99289),d=e.n(f),o=e(75397),s=e(67379),i=e(50123),t=e(30383);function g(v){return c.apply(this,arguments)}function c(){return c=d()(a()().mark(function v(y){var h,p,l,u;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(h=y.getDemoContext,p=y.currentQA,l=y.ref,u=h(),u.mode!=="WebDev"){r.next=6;break}return r.next=5,(0,i.default)(p,l);case 5:return r.abrupt("return",r.sent);case 6:if(u.mode!=="DeepResearch"){r.next=10;break}return r.next=9,(0,t.default)(p,l);case 9:return r.abrupt("return",r.sent);case 10:if(!u.enableThinking){r.next=14;break}return r.next=13,(0,o.default)(p,l);case 13:return r.abrupt("return",r.sent);case 14:return r.next=16,(0,s.default)(p,l);case 16:return r.abrupt("return",r.sent);case 17:case"end":return r.stop()}},v)})),c.apply(this,arguments)}},67379:function(m,n,e){e.r(n),e.d(n,{default:function(){return c}});var b=e(15009),a=e.n(b),f=e(64599),d=e.n(f),o=e(99289),s=e.n(o),i=e(93513),t=e(34226),g=function(){for(var h=`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.

City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.
`,p=[];h.length>0;){var l=Math.floor(Math.random()*100)+1,u=h.slice(0,l);h=h.slice(l),p.push(u)}return p};function c(y,h){return v.apply(this,arguments)}function v(){return v=s()(a()().mark(function y(h,p){var l,u,x;return a()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:l=d()(g()),C.prev=1,x=a()().mark(function E(){var k,P,D;return a()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return k=u.value,S.next=3,(0,t.default)(k.length*5);case 3:P=p.current.getMessages().find(function(L){return L.id===h.current.answer.id}),D=(0,i.produce)(P,function(L){L.cards.length===0?L.cards.push({code:"Text",data:{content:k,msgStatus:"generating",className:"claude-clone-font"}}):L.cards[0].data.content=L.cards[0].data.content+k}),p.current.updateMessage(D);case 6:case"end":return S.stop()}},E)}),l.s();case 4:if((u=l.n()).done){C.next=8;break}return C.delegateYield(x(),"t0",6);case 6:C.next=4;break;case 8:C.next=13;break;case 10:C.prev=10,C.t1=C.catch(1),l.e(C.t1);case 13:return C.prev=13,l.f(),C.finish(13);case 16:case"end":return C.stop()}},y,null,[[1,10,13,16]])})),v.apply(this,arguments)}},34226:function(m,n,e){e.r(n),e.d(n,{default:function(){return b}});function b(a){return new Promise(function(f){return setTimeout(f,a)})}},75397:function(m,n,e){e.r(n),e.d(n,{default:function(){return c}});var b=e(15009),a=e.n(b),f=e(64599),d=e.n(f),o=e(99289),s=e.n(o),i=e(93513),t=e(34226),g=function(){for(var h=`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.
  
City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.`,p=[];h.length>0;){var l=Math.floor(Math.random()*100)+1,u=h.slice(0,l);h=h.slice(l),p.push(u)}return p};function c(y,h){return v.apply(this,arguments)}function v(){return v=s()(a()().mark(function y(h,p){var l,u,x,r,C,E;return a()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:l=d()(g()),P.prev=1,x=a()().mark(function D(){var M,S,L;return a()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return M=u.value,T.next=3,(0,t.default)(M.length*5);case 3:S=p.current.getMessages().find(function(O){return O.id===h.current.answer.id}),L=(0,i.produce)(S,function(O){O.cards.length===0?O.cards.push({code:"DeepThink",data:{content:M,loading:!0,className:"claude-clone-font"}}):O.cards[0].data.content=O.cards[0].data.content+M}),p.current.updateMessage(L);case 6:case"end":return T.stop()}},D)}),l.s();case 4:if((u=l.n()).done){P.next=8;break}return P.delegateYield(x(),"t0",6);case 6:P.next=4;break;case 8:P.next=13;break;case 10:P.prev=10,P.t1=P.catch(1),l.e(P.t1);case 13:return P.prev=13,l.f(),P.finish(13);case 16:r=d()(g()),P.prev=17,E=a()().mark(function D(){var M,S,L;return a()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return M=C.value,T.next=3,(0,t.default)(M.length*5);case 3:S=p.current.getMessages().find(function(O){return O.id===h.current.answer.id}),L=(0,i.produce)(S,function(O){O.cards[0].data.loading=!1,O.cards[1]?O.cards[1].data.content=O.cards[1].data.content+M:O.cards.push({code:"Text",data:{content:M,msgStatus:"generating",className:"claude-clone-font"}})}),p.current.updateMessage(L);case 6:case"end":return T.stop()}},D)}),r.s();case 20:if((C=r.n()).done){P.next=24;break}return P.delegateYield(E(),"t2",22);case 22:P.next=20;break;case 24:P.next=29;break;case 26:P.prev=26,P.t3=P.catch(17),r.e(P.t3);case 29:return P.prev=29,r.f(),P.finish(29);case 32:case"end":return P.stop()}},y,null,[[1,10,13,16],[17,26,29,32]])})),v.apply(this,arguments)}},50123:function(m,n,e){e.r(n),e.d(n,{default:function(){return c}});var b=e(15009),a=e.n(b),f=e(64599),d=e.n(f),o=e(99289),s=e.n(o),i=e(93513),t=e(34226),g=e(19791);function c(h,p){return v.apply(this,arguments)}function v(){return v=s()(a()().mark(function h(p,l){var u,x,r,C,E;return a()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,t.default)(2e3);case 2:u=l.current.getMessages().find(function(D){return D.id===p.current.answer.id}),x=(0,i.produce)(u,function(D){D.cards.push({code:"Text",data:{content:"I am creating a document for your idea.",msgStatus:"finished",className:"claude-clone-font"}}),D.cards.push({code:"WebDev",data:{loading:!0,content:"",title:p.current.query.cards[0].data.content}})}),l.current.updateMessage(x),r=d()(y()),P.prev=6,E=a()().mark(function D(){var M,S,L;return a()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return M=C.value,T.next=3,(0,t.default)(M.length);case 3:S=l.current.getMessages().find(function(O){return O.id===p.current.answer.id}),L=(0,i.produce)(S,function(O){O.cards[1].data.content=O.cards[1].data.content+M}),l.current.updateMessage(L);case 6:case"end":return T.stop()}},D)}),r.s();case 9:if((C=r.n()).done){P.next=13;break}return P.delegateYield(E(),"t0",11);case 11:P.next=9;break;case 13:P.next=18;break;case 15:P.prev=15,P.t1=P.catch(6),r.e(P.t1);case 18:return P.prev=18,r.f(),P.finish(18);case 21:case"end":return P.stop()}},h,null,[[6,15,18,21]])})),v.apply(this,arguments)}function y(){for(var h=(0,g.default)(),p=[];h.length>0;){var l=Math.floor(Math.random()*100)+1,u=h.slice(0,l);h=h.slice(l),p.push(u)}return p}},19791:function(m,n,e){e.r(n),n.default=function(){return`<!DOCTYPE html>
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
</html>`}},23995:function(m,n,e){e.r(n),e.d(n,{default:function(){return f}});var b=e(9053),a=e(85893);function f(o){var s=o.children,i=d(),t=i.styles;return(0,a.jsxs)("div",{className:t.container,children:[(0,a.jsx)("video",{src:"https://cloud.video.taobao.com/vod/F7ULxg_UaBXJe9XRA2IVhiyjjYRZ10ythvs6iv-yoJg.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:t.video}),s]})}var d=(0,b.kc)(function(o){var s=o.token;return{container:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",width:"100%",height:"100%",padding:70},video:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:-1}}})},40248:function(m,n,e){e.r(n),e.d(n,{default:function(){return v}});var b=e(15009),a=e.n(b),f=e(99289),d=e.n(f),o=e(5574),s=e.n(o),i=e(67294),t=e(93164),g=e(9053),c=e(85893);function v(h){var p=y(),l=p.styles,u=i.useState(""),x=s()(u,2),r=x[0],C=x[1];return(0,c.jsx)(t.Z,{loading:h.loading,className:l.container,value:r,onChange:C,onSubmit:d()(a()().mark(function E(){return a()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:h.onSubmit(r),C("");case 2:case"end":return P.stop()}},E)})),placeholder:"Search what you want to know"})}var y=(0,g.kc)(function(h){var p=h.css,l=h.token;return{container:{}}})},4454:function(m,n,e){e.r(n),e.d(n,{default:function(){return g}});var b=e(68400),a=e.n(b),f=e(83962),d=e(9146),o=e(9053),s=e(85893),i,t;function g(v){var y=v.messages,h=c(),p=h.styles;return(0,s.jsx)(f.xy,{cardConfig:{},children:(0,s.jsx)(d.Z.List,{classNames:{wrapper:p.wrapper,list:p.list},items:y})})}var c=(0,o.kc)(function(v){var y=v.css,h=v.token;return{wrapper:y(i||(i=a()([`
    height: 0;
    flex: 1;
    
  `]))),list:y(t||(t=a()([`
  `])))}})},90879:function(m,n,e){e.r(n),e.d(n,{default:function(){return k}});var b=e(68400),a=e.n(b),f=e(19632),d=e.n(f),o=e(5574),s=e.n(o),i=e(9053),t=e(67369),g=e(88773),c=e(16288),v=e(4454),y=e(40248),h=e(67294),p=e(89698),l=e(60227),u=e(36855),x=e(28373),r=e(85893),C,E;function k(){var M=P(),S=M.styles,L=(0,h.useState)([{role:"user",content:"what is citypop",id:"1"},{role:"assistant",cards:[{code:"DeepThink",data:{content:'City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period. City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s. Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist. Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.'}},{code:"Text",data:{content:'City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period. City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s. Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist. Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.'}},{code:"Footer",data:{left:(0,r.jsx)(t.p4,{data:[{icon:(0,r.jsx)(p.Z,{}),onClick:function(){}},{icon:(0,r.jsx)(l.Z,{}),onClick:function(){}},{icon:(0,r.jsx)(u.Z,{}),onClick:function(){}},{icon:(0,r.jsx)(x.Z,{}),onClick:function(){}}]})}}],id:"2"}]),I=s()(L,2),T=I[0],O=I[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D,{}),(0,r.jsx)(c.Vaso,{className:S.container,radius:20,depth:.5,dispersion:0,blur:10,children:(0,r.jsxs)("div",{className:S.chat,children:[(0,r.jsx)(v.default,{messages:T}),(0,r.jsx)(y.default,{onSubmit:function(){O(function(B){return[].concat(d()(B),[{role:"user",content:"what is citypop",id:(0,g.Z)()}])}),setTimeout(function(){O(function(B){return[].concat(d()(B),[{role:"assistant",id:(0,g.Z)(),content:'City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period. City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s. Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist. Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.'}])})},1e3)},loading:!1})]})})]})}var P=(0,i.kc)(function(M){var S=M.token,L=M.css,I=M.prefixCls;return{container:L(C||(C=a()([`
      width: 100%;
      height: 100%;
      border: 1px solid rgba(200, 196, 191, .5);
      border-radius: 20px;
      overflow: hidden;
    `]))),chat:{display:"flex",flexDirection:"column",maxWidth:800,margin:"0 auto",padding:"20px 0",height:"100%"}}}),D=(0,i.vJ)(E||(E=a()([`
  .ant-bubble-content-filled {
    border: 1px solid rgba(200, 196, 191, .5);
    background-color: rgba(200, 196, 191, .1) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;
  }

  .ant-accordion-deep-thinking {
    border-color:  rgba(200, 196, 191, .5) !important;
  }

  .ant-accordion-group-header-close {
    border: 1px solid rgba(200, 196, 191, .5) !important;
    background-color: rgba(200, 196, 191, .1) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;


  }

  .ant-accordion-group-icon-success {
    color: #fff !important;
  }

  .ant-sender {
    background-color: rgba(54, 53, 52, 0.3) !important;
    border-color: rgba(200, 196, 191, .5) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;
    
  }

  .ant-sender textarea::placeholder,
  .ant-sender textarea {
   color: rgba(231, 231, 237, .88) !important;
  }

  .ant-sender-actions-list .ant-btn {
    background-color: rgba(200, 196, 191, .3) !important;
    border-color: rgba(200, 196, 191, .5) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;


  }

  .ant-bubble-list-scroll-to-bottom .ant-btn {
    background-color: rgba(200, 196, 191, .3) !important;
    border-color: rgba(200, 196, 191, .5) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;



    &:hover {
      color: #fff !important;
      background-color: rgba(200, 196, 191, .5) !important;
      border-color: rgba(200, 196, 191, .5) !important;
    }
  }

  .ant-bubble-footer-left .ant-btn {
    border-color: rgba(200, 196, 191, .5) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;
  }

`])))},36598:function(m,n,e){e.r(n),e.d(n,{default:function(){return s}});var b=e(5574),a=e.n(b),f=e(9053),d=e(67294),o=e(85893);function s(t){var g=i(),c=g.styles,v=(0,d.useState)(0),y=a()(v,2),h=y[0],p=y[1];return(0,d.useEffect)(function(){p(1)},[]),(0,o.jsxs)("div",{className:c.block,style:{opacity:h},children:[(0,o.jsxs)("div",{className:c.header,"data-anchor":t.title,children:[(0,o.jsx)("div",{className:c.icon,children:t.icon}),(0,o.jsx)("div",{className:c.title,children:t.title})]}),(0,o.jsx)("div",{className:c.content,children:t.children})]})}var i=(0,f.kc)(function(t){var g=t.css,c=t.token;return{block:{marginTop:24,marginBottom:48,transition:"opacity 1s ease-in-out"},header:{display:"flex",alignItems:"center",gap:8,color:c.colorText,marginBottom:12},icon:{fontSize:24},title:{fontSize:18,textTransform:"capitalize"},content:{}}})},52022:function(m,n,e){e.r(n),e.d(n,{default:function(){return o}});var b=e(82679),a=e(36598),f=e(23211),d=e(85893);function o(s){return console.log(s),(0,d.jsx)(a.default,{title:"answer",icon:(0,d.jsx)(f.Z,{}),children:(0,d.jsx)(b.Z,{cursor:s.loading,content:s.content,baseLineHeight:1.8571428571428572})})}},28212:function(m,n,e){e.r(n),e.d(n,{default:function(){return f}});var b=e(14082),a=e(85893);function f(d){var o=d.loading,s=d.content;return(0,a.jsx)(b.Z,{defaultOpen:!0,content:s,loading:o,title:o?"Deep thinking":"Completed deep thinking",className:"perplexcity-deep-thinking"})}},17560:function(m,n,e){e.r(n),e.d(n,{default:function(){return s}});var b=e(11289),a=e(9053),f=e(36598),d=e(13811),o=e(85893);function s(t){var g=t.images,c=i(),v=c.styles;return(0,o.jsx)(f.default,{title:"images",icon:(0,o.jsx)(b.Z,{}),children:(0,o.jsx)("div",{className:v.images,children:(0,o.jsx)(d.Z.PreviewGroup,{children:g.map(function(y,h){return(0,o.jsx)(d.Z,{src:y,style:{width:180.55172413793102,height:136,borderRadius:12,overflow:"hidden"}},h)})})})})}var i=(0,a.kc)(function(t){var g=t.css,c=t.token;return{images:{display:"flex",gap:12,padding:12,overflow:"auto",backgroundColor:c.colorFillSecondary,borderRadius:c.borderRadius,"&::-webkit-scrollbar":{display:"none"},".sps-image-mask":{borderRadius:12}}}})},42733:function(m,n,e){e.r(n),e.d(n,{default:function(){return s}});var b=e(29986),a=e(38850),f=e(36598),d=e(9053),o=e(85893);function s(t){var g=i(),c=g.styles;return(0,o.jsx)(f.default,{title:"related",icon:(0,o.jsx)(b.Z,{}),children:(0,o.jsx)("div",{className:c.related,children:t.related.map(function(v,y){return(0,o.jsxs)("div",{className:c.item,children:[(0,o.jsx)(a.Z,{className:c.icon}),v]},y)})})})}var i=(0,d.kc)(function(t){var g=t.css,c=t.token;return{related:{display:"flex",flexDirection:"column",gap:8},item:{height:24,gap:8,display:"flex",alignItems:"center",cursor:"pointer",color:c.colorTextTertiary,"&:hover":{color:c.colorText}},icon:{fontSize:20,color:c.colorPrimary}}})},96298:function(m,n,e){e.r(n),e.d(n,{default:function(){return g}});var b=e(97857),a=e.n(b),f=e(82679),d=e(36598),o=e(54446),s=e(9053),i=e(85893);function t(v){var y=c(),h=y.styles;return(0,i.jsxs)("div",{className:h.item,children:[(0,i.jsx)("img",{className:h.logo,src:v.logo}),(0,i.jsxs)("div",{className:h.content,children:[(0,i.jsx)("div",{className:h.title,children:v.title}),(0,i.jsx)("a",{className:h.url,href:v.url,target:"_blank",children:v.url})]})]})}function g(v){var y=c(),h=y.styles;return(0,i.jsx)(d.default,{title:"sources",icon:(0,i.jsx)(o.Z,{}),children:(0,i.jsx)("div",{className:h.sources,children:v.sources.map(function(p,l){return(0,i.jsxs)("div",{className:h.source,children:[(0,i.jsx)(t,a()({},p)),(0,i.jsx)(f.Z,{content:p.content,baseLineHeight:1.8571428571428572})]},l)})})})}var c=(0,s.kc)(function(v){var y=v.css,h=v.token;return{item:{display:"flex",alignItems:"center",gap:8,marginBottom:8},logo:{width:32,height:32,borderRadius:32},content:{},source:{},sources:{display:"flex",flexDirection:"column",gap:24},title:{fontSize:12,lineHeight:"20px",color:h.colorText},url:{fontSize:12,lineHeight:"20px",color:h.colorTextTertiary,textDecoration:"none","&:hover":{color:h.colorText}}}})},86956:function(m,n,e){e.r(n),e.d(n,{default:function(){return i}});var b=e(5574),a=e.n(b),f=e(67294),d=e(7441),o=e(26367),s=e(85893);function i(t){var g=(0,f.useState)([]),c=a()(g,2),v=c[0],y=c[1],h=(0,d.default)(),p=h.styles,l=(0,f.useRef)(null);return(0,f.useEffect)(function(){var u,x=(u=t.contentRef)===null||u===void 0||(u=u.current)===null||u===void 0?void 0:u.querySelectorAll("[data-anchor]");if(x!=null&&x.length){var r=Array.from(x);y(r)}},[t.data]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:p.content,ref:l,children:t.children}),v.length?(0,s.jsx)(o.Scrollspy,{sectionRefs:v,rootSelector:"#perplexcity-bubble-list>div",children:function(x){var r=x.currentElementIndexInViewport;return console.log(r),(0,s.jsx)("div",{children:"..."})}}):null]})}},39095:function(m,n,e){e.r(n),e.d(n,{default:function(){return E}});var b=e(97857),a=e.n(b),f=e(7441),d=e(17560),o=e(52022),s=e(42733),i=e(96298),t=e(67294),g=Object.defineProperty,c=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,h=(k,P,D)=>P in k?g(k,P,{enumerable:!0,configurable:!0,writable:!0,value:D}):k[P]=D,p=(k,P)=>{for(var D in P||(P={}))v.call(P,D)&&h(k,D,P[D]);if(c)for(var D of c(P))y.call(P,D)&&h(k,D,P[D]);return k};const l=k=>t.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",fill:"none",width:32,height:32},k),t.createElement("defs",null,t.createElement("clipPath",{id:"Logo_svg__a"},t.createElement("rect",{width:32,height:32,rx:8}))),t.createElement("g",{clipPath:"url(#Logo_svg__a)"},t.createElement("rect",{width:32,height:32,rx:8,fill:"var(--sps-color-text-base)"}),t.createElement("rect",{x:11,y:8,width:3,height:6,rx:1.5,fill:"var(--sps-color-bg-layout)"}),t.createElement("rect",{x:18,y:8,width:3,height:6,rx:1.5,fill:"var(--sps-color-bg-layout)"})));var u="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI4Ii8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI4IiBmaWxsPSJ2YXIoLS1zcHMtY29sb3ItdGV4dC1iYXNlKSIvPjxyZWN0IHg9IjExIiB5PSI4IiB3aWR0aD0iMyIgaGVpZ2h0PSI2IiByeD0iMS41IiBmaWxsPSJ2YXIoLS1zcHMtY29sb3ItYmctbGF5b3V0KSIvPjxyZWN0IHg9IjE4IiB5PSI4IiB3aWR0aD0iMyIgaGVpZ2h0PSI2IiByeD0iMS41IiBmaWxsPSJ2YXIoLS1zcHMtY29sb3ItYmctbGF5b3V0KSIvPjwvZz48L3N2Zz4=",x=e(28212),r=e(86956),C=e(85893);function E(k){var P=k.data,D=P.deepThinking,M=P.images,S=P.content,L=P.sources,I=P.related,T=(0,f.default)(),O=T.styles;return(0,C.jsxs)("div",{className:O.container,children:[(0,C.jsx)("div",{className:O.avatar,children:(0,C.jsx)(l,{})}),(0,C.jsxs)(r.default,{data:k.data,children:[D&&(0,C.jsx)(x.default,a()({},D)),M&&(0,C.jsx)(d.default,{images:M}),S&&(0,C.jsx)(o.default,a()({},S)),L&&(0,C.jsx)(i.default,{sources:L}),I&&(0,C.jsx)(s.default,{related:I})]})]})}},7441:function(m,n,e){e.r(n);var b=e(68400),a=e.n(b),f=e(9053),d;n.default=(0,f.kc)(function(o){var s=o.css,i=o.token;return{container:s(d||(d=a()([`
    width: 100%;
    display: flex;
    gap: 12px;
  `]))),content:{width:0,flex:1},avatar:{width:32,height:32,borderRadius:8,overflow:"hidden"}}})},6736:function(m,n,e){e.r(n),e.d(n,{default:function(){return g}});var b=e(29626),a=e(68400),f=e.n(a),d=e(9053),o,s=(0,d.kc)(function(c){var v=c.css,y=c.token;return{container:v(o||(o=f()([`
    width: 100%;
    display: flex;
    gap: 12px;
  `]))),avatar:{backgroundColor:y.colorPrimary},content:{width:0,flex:1,lineHeight:"32px",fontSize:20,fontWeight:500,color:y.colorText},hr:{marginTop:20,borderBottom:"1px dashed ".concat(y.colorBorder)}}}),i=e(88926),t=e(85893);function g(c){var v=s(),y=v.styles;return(0,t.jsxs)("div",{className:y.container,children:[(0,t.jsx)(b.Z,{className:y.avatar,size:32,icon:(0,t.jsx)(i.Z,{style:{fontSize:20}})}),(0,t.jsxs)("div",{className:y.content,children:[c.data.content,(0,t.jsx)("div",{className:y.hr})]})]})}},41298:function(m,n,e){e.r(n),e.d(n,{default:function(){return u}});var b=e(15009),a=e.n(b),f=e(99289),d=e.n(f),o=e(5574),s=e.n(o),i=e(10325),t=e(67294),g=e(89872),c=e(9053),v=(0,c.kc)(function(x){var r=x.css,C=x.token;return{container:{height:"100%",background:C.colorBgLayout},chat:{display:"flex",flexDirection:"column",height:"100%"},disclaimer:{margin:"auto 0 0 0"}}}),y=e(28585),h=e(74459),p=e(76748),l=e(85893);function u(){var x=v(),r=x.styles,C=(0,t.useState)([]),E=s()(C,2),k=E[0],P=E[1],D=(0,t.useState)(!1),M=s()(D,2),S=M[0],L=M[1];return(0,l.jsx)("div",{className:r.container,children:(0,l.jsxs)("div",{className:r.chat,children:[k.length?(0,l.jsx)(h.default,{messages:k}):(0,l.jsx)(g.default,{}),(0,l.jsx)(y.default,{loading:S,onSubmit:function(){var I=d()(a()().mark(function T(O){return a()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return L(!0),P([{role:"user",cards:[{code:"Query",data:{content:"What is CityPop?"}}]},{role:"assistant",msgStatus:"generating",cards:[{code:"Answer",data:{deepThinking:{loading:!0,content:"..."}}}]}]),B.next=4,(0,p.default)({messages:k,setMessages:P});case 4:L(!1);case 5:case"end":return B.stop()}},T)}));return function(T){return I.apply(this,arguments)}}()}),(0,l.jsx)("div",{className:r.disclaimer,children:(0,l.jsx)(i.Z,{})})]})})}},76748:function(m,n,e){e.r(n),e.d(n,{default:function(){return v}});var b=e(15009),a=e.n(b),f=e(64599),d=e.n(f),o=e(99289),s=e.n(o),i=e(93513),t={deepThinking:{loading:!1,content:`Okay, the user is asking about "citypop." Let me start by recalling what I know about that term. I remember that City Pop is a genre of music, but I need to make sure I'm accurate.

First, when did City Pop originate? I think it was in Japan during the late 1970s and 1980s. That makes sense because Japan's economy was booming then, leading to a vibrant urban culture. The genre probably blends Western styles like funk, jazz, and disco with Japanese pop elements. Artists like Tatsuro Yamashita and Mariya Takeuchi come to mind. Oh, and there's that song "Plastic Love" by Mariya Takeuchi that went viral online recently, which might have sparked renewed interest.

I should also mention the themes of City Pop songs\u2014they often reflect city life, romance, and leisure, fitting the upbeat and cosmopolitan vibe of the time. The visual style associated with it includes retro anime and vibrant cityscapes, which adds to its aesthetic appeal. It's interesting how the internet, especially platforms like YouTube and Spotify, helped revive this genre internationally. Maybe I should note that connection between modern digital culture and the resurgence of City Pop.

Wait, are there any subgenres or key characteristics I should highlight? The use of synthesizers, smooth vocals, and lush production are typical. Also, City Pop was influenced by yacht rock and soft rock from the West. It's important to link it to Japan's economic bubble era, as that context explains the music's optimistic and luxurious feel.

I need to ensure I don't confuse it with other Japanese genres like J-pop or Enka. City Pop is distinct in its fusion with Western sounds. Including notable albums, like Tatsuro Yamashita's "For You" or Anri's "Timely!!", could be helpful. Oh, and the connection to future funk and vaporwave genres that sample City Pop tracks is a good point for its modern influence.`},images:["https://gw.alicdn.com/imgextra/i3/O1CN01zgK3yS1FAm7uKIHWc_!!6000000000447-0-tps-1232-928.jpg","https://gw.alicdn.com/imgextra/i2/O1CN01Vasr7w1PzHxyioPPm_!!6000000001911-0-tps-1232-928.jpg","https://gw.alicdn.com/imgextra/i4/O1CN01M98Xnc26huPmyBon2_!!6000000007694-0-tps-1232-928.jpg","https://gw.alicdn.com/imgextra/i1/O1CN01EJ1oqo1J01Hx71bgB_!!6000000000965-0-tps-1232-928.jpg","https://gw.alicdn.com/imgextra/i3/O1CN01zgK3yS1FAm7uKIHWc_!!6000000000447-0-tps-1232-928.jpg","https://gw.alicdn.com/imgextra/i2/O1CN01Vasr7w1PzHxyioPPm_!!6000000001911-0-tps-1232-928.jpg","https://gw.alicdn.com/imgextra/i4/O1CN01M98Xnc26huPmyBon2_!!6000000007694-0-tps-1232-928.jpg","https://gw.alicdn.com/imgextra/i1/O1CN01EJ1oqo1J01Hx71bgB_!!6000000000965-0-tps-1232-928.jpg"],content:{content:`City Pop (\u30B7\u30C6\u30A3\u30FC\u30DD\u30C3\u30D7) is a subgenre of Japanese pop music that emerged in the late 1970s and peaked in popularity during the 1980s. It is characterized by its fusion of various musical styles, including funk, disco, R&B, soft rock, and boogie, often reflecting the urban and sophisticated lifestyle of city dwellers. The genre is known for its polished production, catchy melodies, and nostalgic themes, often evoking a sense of escapism and leisure associated with the vibrant city life.
## Key Features of City Pop

- Musical Influences: City Pop draws heavily from Western music trends of the time, particularly adult-oriented genres like funk and disco. It incorporates elements of jazz, lounge music, and even tropical sounds.
- Cultural Context: The genre developed during a period of rapid economic growth in Japan, which influenced its themes of urban sophistication and leisure. It served as a soundtrack for the cosmopolitan lifestyle of the era.
- Aesthetic: City Pop is often associated with vibrant and colorful artwork, featuring themes of summer, beaches, and urban nightlife. The cover art typically reflects a retro-futuristic vision, with bright colors and nostalgic imagery.
`,loading:!1},sources:[{title:"City Pop",logo:"https://gw.alicdn.com/imgextra/i3/O1CN0134H6gj1MP9sJ1T17L_!!6000000001426-55-tps-32-32.svg",url:"https://en.wikipedia.org/wiki/City_Pop",content:`## City pop

City Pop (\u30B7\u30C6\u30A3\u30FC\u30DD\u30C3\u30D7) is a subgenre of Japanese pop music that emerged in the late 1970s and peaked in popularity during the 1980s. It is characterized by its fusion of various musical styles, including funk, disco, R&B, soft rock, and boogie, often reflecting the urban and sophisticated lifestyle of city dwellers. The genre is known for its polished production, catchy melodies, and nostalgic themes, often evoking a sense of escapism and leisure associated with the vibrant city life.`},{title:"City Pop",logo:"https://gw.alicdn.com/imgextra/i3/O1CN0134H6gj1MP9sJ1T17L_!!6000000001426-55-tps-32-32.svg",url:"https://en.wikipedia.org/wiki/City_Pop",content:`## City pop

City Pop (\u30B7\u30C6\u30A3\u30FC\u30DD\u30C3\u30D7) is a subgenre of Japanese pop music that emerged in the late 1970s and peaked in popularity during the 1980s. It is characterized by its fusion of various musical styles, including funk, disco, R&B, soft rock, and boogie, often reflecting the urban and sophisticated lifestyle of city dwellers. The genre is known for its polished production, catchy melodies, and nostalgic themes, often evoking a sense of escapism and leisure associated with the vibrant city life.`}],related:["How did Japan's economic boom influence the development of City Pop?","What are the key characteristics of City Pop music?","How did Japan's economic boom influence the development of City Pop?","What are the key characteristics of City Pop music?"]},g=[{deepThinking:{loading:!0,content:t.deepThinking.content.slice(0,20)}},{deepThinking:{loading:!0,content:t.deepThinking.content.slice(0,40)}},{deepThinking:{loading:!0,content:t.deepThinking.content.slice(0,60)}},{deepThinking:{loading:!0,content:t.deepThinking.content.slice(0,80)}},{deepThinking:{loading:!0,content:t.deepThinking.content.slice(0,100)}},{deepThinking:{loading:!0,content:t.deepThinking.content.slice(0,120)}},{deepThinking:t.deepThinking},{deepThinking:t.deepThinking,images:t.images.slice(0,1)},{deepThinking:t.deepThinking,images:t.images.slice(0,2)},{deepThinking:t.deepThinking,images:t.images.slice(0,3)},{deepThinking:t.deepThinking,images:t.images.slice(0,4)},{deepThinking:t.deepThinking,images:t.images},{deepThinking:t.deepThinking,images:t.images,content:{loading:!0,content:t.content.content.slice(0,20)}},{deepThinking:t.deepThinking,images:t.images,content:{loading:!0,content:t.content.content.slice(0,40)}},{deepThinking:t.deepThinking,images:t.images,content:{loading:!0,content:t.content.content.slice(0,60)}},{deepThinking:t.deepThinking,images:t.images,content:{loading:!0,content:t.content.content.slice(0,80)}},{deepThinking:t.deepThinking,images:t.images,content:t.content},{deepThinking:t.deepThinking,images:t.images,content:t.content,sources:t.sources.slice(0,1)},{deepThinking:t.deepThinking,images:t.images,content:t.content,sources:t.sources},{deepThinking:t.deepThinking,images:t.images,content:t.content,sources:t.sources,related:t.related}];function c(h){return new Promise(function(p){return setTimeout(p,h)})}function v(h){return y.apply(this,arguments)}function y(){return y=s()(a()().mark(function h(p){var l,u,x,r,C;return a()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return l=p.messages,u=p.setMessages,k.next=3,c(500);case 3:x=d()(g),k.prev=4,C=a()().mark(function P(){var D;return a()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return D=r.value,S.next=3,c(1e3);case 3:u(function(L){var I=L[0],T=L[1];return[I,(0,i.produce)(T,function(O){O.cards[0].data=D})]});case 4:case"end":return S.stop()}},P)}),x.s();case 7:if((r=x.n()).done){k.next=11;break}return k.delegateYield(C(),"t0",9);case 9:k.next=7;break;case 11:k.next=16;break;case 13:k.prev=13,k.t1=k.catch(4),x.e(k.t1);case 16:return k.prev=16,x.f(),k.finish(16);case 19:return k.next=21,c(100);case 21:case"end":return k.stop()}},h,null,[[4,13,16,19]])})),y.apply(this,arguments)}},28585:function(m,n,e){e.r(n),e.d(n,{default:function(){return y}});var b=e(15009),a=e.n(b),f=e(99289),d=e.n(f),o=e(5574),s=e.n(o),i=e(67294),t=e(93164),g=e(9053),c=(0,g.kc)(function(h){var p=h.css,l=h.token;return{container:{width:"800px !important",margin:"0 auto"}}}),v=e(85893);function y(h){var p=c(),l=p.styles,u=i.useState(""),x=s()(u,2),r=x[0],C=x[1];return(0,v.jsx)(t.Z,{loading:h.loading,className:l.container,value:r,onChange:C,onSubmit:d()(a()().mark(function E(){return a()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:h.onSubmit(r),C("");case 2:case"end":return P.stop()}},E)})),placeholder:"Search what you want to know"})}},74459:function(m,n,e){e.r(n),e.d(n,{default:function(){return y}});var b=e(83962),a=e(9146),f=e(68400),d=e.n(f),o=e(9053),s,i,t=(0,o.kc)(function(h){var p=h.css,l=h.token;return{wrapper:p(s||(s=d()([`
    height: 0;
    flex: 1;
    width: 844px;
    margin: 0 auto;
    left: -22px;
    > div::-webkit-scrollbar {
      width: 0;
    }
  `]))),list:p(i||(i=d()([`
    padding: 16px 0 0 0 !important;
  `])))}}),g=e(6736),c=e(39095),v=e(85893);function y(h){var p=h.messages,l=t(),u=l.styles;return(0,v.jsx)(b.xy,{cardConfig:{Query:g.default,Answer:c.default},children:(0,v.jsx)(a.Z.List,{id:"perplexcity-bubble-list",classNames:{wrapper:u.wrapper,list:u.list},items:p})})}},89872:function(m,n,e){e.r(n),e.d(n,{default:function(){return i}});var b=e(68400),a=e.n(b),f=e(57657),d=e(9053),o=e(85893),s;function i(){var c=t(),v=c.styles;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,{}),(0,o.jsx)("div",{className:v.welcome,children:(0,o.jsx)(f.default,{})})]})}var t=(0,d.kc)(function(c){var v=c.css,y=c.token;return{welcome:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,marginTop:"calc(10vh + 80px + 64px)",marginBottom:32}}}),g=(0,d.vJ)(s||(s=a()([`
.sps-chat-anywhere-chat-welcome {
  height: auto !important;  
}`])))},70539:function(m,n,e){e.r(n),e.d(n,{ConfigProviderContext:function(){return g},default:function(){return c}});var b=e(97857),a=e.n(b),f=e(5574),d=e.n(f),o=e(21766),s=e(75960),i=e(67294),t=e(85893),g=i.createContext(void 0);function c(v){var y=(0,i.useState)(!0),h=d()(y,2),p=h[0],l=h[1],u=p?s.darkTheme:s.lightTheme;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(g.Provider,{value:{dark:p,setDark:l},children:(0,t.jsx)(o.ZP,a()(a()({},u),{},{style:{height:"100%"},iconfont:"https://at.alicdn.com/t/a/font_4807885_6wjcpzayws6.js",prefix:"sps",prefixCls:"sps",children:v.children}))})})}},18531:function(m,n,e){e.r(n),e.d(n,{DemoContext:function(){return t},default:function(){return g}});var b=e(97857),a=e.n(b),f=e(5574),d=e.n(f),o=e(79785),s=e(67294),i=e(85893),t=s.createContext(void 0);function g(c){var v=(0,o.Z)({model:"claude-3.5-sonnet",enableSearch:!1,enableThinking:!1,initial:!0,mode:void 0,canvas:!1}),y=d()(v,3),h=y[0],p=y[1],l=y[2];return(0,i.jsx)(t.Provider,{value:{demoContext:h,setDemoContext:function(x){p(function(r){return a()(a()({},r),x)})},getDemoContext:l},children:c.children})}},75960:function(m,n,e){e.r(n),e.d(n,{darkTheme:function(){return d},lightTheme:function(){return o}});var b=e(81759),a={borderRadiusXS:4,borderRadiusSM:6,borderRadius:8,borderRadiusLG:12,borderRadiusXL:16,borderRadiusFull:999,wireframe:!1,colorPrimaryBg:"rgba(239, 237, 229, 1)",colorPrimaryBgHover:"rgba(239, 237, 229, 1)",colorPrimaryBorder:"rgba(186, 90, 59, 1)",colorPrimaryBorderHover:"rgba(194, 98, 66, 1)",colorPrimaryHover:"rgba(194, 98, 66, 1)",colorPrimary:"rgba(208, 110, 78, 1)",colorPrimaryActive:"rgba(194, 98, 66, 1)",colorPrimaryTextHover:"rgba(186, 90, 59, 1)",colorPrimaryText:"rgba(186, 90, 59, 1)",colorPrimaryTextActive:"rgba(186, 90, 59, 1)",colorTextBase:"rgba(26, 26, 29, 1)",colorBgBase:"rgba(255, 255, 255, 1)",colorText:"rgba(20, 20, 19, 0.88)",colorTextSecondary:"rgba(20, 20, 19, 0.65)",colorTextTertiary:"rgba(20, 20, 19, 0.45)",colorTextQuaternary:"rgba(20, 20, 19, 0.25)",colorBorder:"rgba(193, 192, 187, 1)",colorBorderSecondary:"rgba(234, 233, 231, 1)",colorFill:"rgba(43, 27, 0, 0.12)",colorFillSecondary:"rgba(43, 27, 0, 0.08)",colorFillTertiary:"rgba(43, 27, 0, 0.03)",colorFillQuaternary:"rgba(43, 27, 0, 0.02)",colorBgContainer:"rgba(255, 255, 255, 1)",colorBgElevated:"rgba(255, 255, 255, 1)",colorBgLayout:"rgba(249, 248, 244, 1)",colorBgSpotlight:"rgba(20, 20, 19, 0.85)",colorBgMask:"rgba(0, 0, 0, 0.45)",colorInfo:"rgba(11, 131, 241, 1)",colorInfoHover:"rgba(94, 188, 255, 1)",colorInfoBorder:"rgba(135, 209, 255, 1)",colorInfoText:"rgba(11, 131, 241, 1)",colorInfoBg:"rgba(230, 247, 255, 1)",colorInfoBgHover:"rgba(176, 227, 255, 1)",colorInfoBorderHover:"rgba(94, 188, 255, 1)",colorSuccess:"rgba(91, 185, 139, 1)",colorSuccessHover:"rgba(171, 212, 190, 1)",colorSuccessBg:"rgba(235, 250, 240, 1)",colorSuccessBgHover:"rgba(223, 237, 228, 1)",colorSuccessBorder:"rgba(211, 224, 217, 1)",colorSuccessBorderHover:"rgba(171, 212, 190, 1)",colorWarning:"rgba(250, 173, 20, 1)",colorWarningHover:"rgba(255, 214, 102, 1)",colorWarningBg:"rgba(255, 251, 230, 1)",colorWarningBgHover:"rgba(255, 241, 184, 1)",colorWarningBorder:"rgba(255, 229, 143, 1)",colorWarningBorderHover:"rgba(255, 214, 102, 1)",colorError:"rgba(255, 77, 79, 1)",colorErrorHover:"rgba(255, 120, 117, 1)",colorErrorBg:"rgba(255, 242, 240, 1)",colorErrorBgHover:"rgba(255, 241, 240, 1)",colorErrorBorder:"rgba(255, 204, 199, 1)",colorErrorBorderHover:"rgba(255, 163, 158, 1)",colorLink:"rgba(0, 77, 255, 1)",boxShadow:"0px 4px 6px 0px rgba(0, 0, 0, 0.08)",boxShadowSecondary:"0px 12px 24px -16px rgba(0, 0, 0, 0.06), 0px 8px 40px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.04)",colorTextWhite:"rgba(255, 255, 255, 1)",colorFillDisable:"rgba(235, 235, 232, 1)",colorPurple:"rgba(97, 92, 237, 1)",colorPurpleHover:"rgba(97, 92, 237, 1)",colorPurpleBg:"rgba(226, 222, 255, 0.8)",colorPink:"rgba(236, 72, 153, 1)",colorPinkHover:"rgba(236, 72, 153, 1)",colorPinkBg:"rgba(251, 220, 239, 0.8)",colorYellow:"rgba(234, 179, 8, 1)",colorYellowHover:"rgba(234, 179, 8, 1)",colorYellowBg:"rgba(255, 250, 184, 0.8)",colorOrange:"rgba(250, 129, 37, 1)",colorOrangeHover:"rgba(250, 129, 37, 1)",colorOrangeBg:"rgba(255, 232, 201, 0.8)",colorTeal:"rgba(20, 184, 166, 1)",colorTealHover:"rgba(20, 184, 166, 1)",colorTealBg:"rgba(200, 244, 233, 0.8)",colorBlue:"rgba(0, 144, 255, 1)",colorBlueHover:"rgba(0, 144, 255, 1)",colorBlueBg:"rgba(194, 229, 255, 0.8)",colorMauve:"rgba(142, 140, 153, 1)",colorMauveHover:"rgba(142, 140, 153, 1)",colorMauveBg:"rgba(239, 240, 243, 0.8)",boxShadowTertiary:"0px 12px 32px -16px rgba(0, 0, 0, 0.24), 0px 12px 60px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.04)",boxShadowTertiaryLeft:"-12px 0px 32px -16px rgba(0, 0, 0, 0.24), -12px 0px 60px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.04)",boxShadowInput:"0px 12px 24px -16px rgba(54, 54, 73, 0.04), 0px 12px 40px 0px rgba(51, 51, 71, 0.08), 0px 0px 1px 0px rgba(44, 44, 54, 0.02)"},f={borderRadiusXS:4,borderRadiusSM:6,borderRadius:8,borderRadiusLG:12,borderRadiusXL:16,borderRadiusFull:999,wireframe:!1,colorPrimaryBg:"rgba(41, 35, 29, 1)",colorPrimaryBgHover:"rgba(70, 60, 50, 1)",colorPrimaryBorder:"rgba(133, 80, 40, 1)",colorPrimaryBorderHover:"rgba(146, 102, 52, 1)",colorPrimaryHover:"rgba(156, 88, 57, 1)",colorPrimary:"rgba(156, 88, 57, 1)",colorPrimaryActive:"rgba(146, 102, 52, 1)",colorPrimaryTextHover:"rgba(133, 80, 40, 1)",colorPrimaryText:"rgba(160, 96, 63, 1)",colorPrimaryTextActive:"rgba(133, 80, 40, 1)",colorTextBase:"rgba(230, 230, 230, 1)",colorBgBase:"rgba(15, 13, 12, 1)",colorText:"rgba(230, 230, 230, 0.9)",colorTextSecondary:"rgba(180, 180, 180, 0.8)",colorTextTertiary:"rgba(255, 255, 255, 0.6)",colorTextQuaternary:"rgba(255, 255, 255, 0.3)",colorBorder:"rgba(82, 76, 73, 1)",colorBorderSecondary:"rgba(50, 46, 43, 1)",colorFill:"rgba(82, 79, 74, 0.32)",colorFillSecondary:"rgba(83, 79, 72, 0.24)",colorFillTertiary:"rgba(50, 50, 50, 0.26)",colorFillQuaternary:"rgba(67, 64, 59, 0.12)",colorBgContainer:"rgba(52, 50, 47, 1)",colorBgElevated:"rgba(47, 42, 39, 1)",colorBgLayout:"rgba(26, 26, 24, 1)",colorBgSpotlight:"rgba(10, 10, 10, 0.85)",colorBgMask:"rgba(0, 0, 0, 0.6)",colorInfo:"rgba(11, 131, 241, 1)",colorInfoHover:"rgba(94, 188, 255, 1)",colorInfoBorder:"rgba(57, 144, 201, 1)",colorInfoText:"rgba(11, 131, 241, 1)",colorInfoBg:"rgba(17, 34, 51, 1)",colorInfoBgHover:"rgba(38, 72, 102, 1)",colorInfoBorderHover:"rgba(94, 188, 255, 1)",colorSuccess:"rgba(91, 185, 139, 1)",colorSuccessHover:"rgba(116, 164, 124, 1)",colorSuccessBg:"rgba(41, 54, 49, 1)",colorSuccessBgHover:"rgba(63, 81, 71, 1)",colorSuccessBorder:"rgba(115, 163, 119, 1)",colorSuccessBorderHover:"rgba(171, 212, 190, 1)",colorWarning:"rgba(250, 173, 20, 1)",colorWarningHover:"rgba(255, 140, 40, 1)",colorWarningBg:"rgba(45, 35, 26, 1)",colorWarningBgHover:"rgba(77, 59, 35, 1)",colorWarningBorder:"rgba(255, 166, 40, 1)",colorWarningBorderHover:"rgba(255, 214, 102, 1)",colorError:"rgba(255, 77, 79, 1)",colorErrorHover:"rgba(238, 101, 78, 1)",colorErrorBg:"rgba(43, 11, 8, 1)",colorErrorBgHover:"rgba(74, 42, 40, 1)",colorErrorBorder:"rgba(238, 91, 78, 1)",colorErrorBorderHover:"rgba(255, 163, 158, 1)",colorLink:"rgba(77, 125, 255, 1)",colorTextWhite:"rgba(255, 255, 255, 1)",colorFillDisable:"rgba(90, 90, 90, 1)",colorPurple:"rgba(97, 92, 237, 1)",colorPurpleHover:"rgba(97, 92, 237, 1)",colorPurpleBg:"rgba(60, 53, 85, 1)",colorPink:"rgba(236, 72, 153, 1)",colorPinkHover:"rgba(236, 72, 153, 1)",colorPinkBg:"rgba(74, 42, 58, 1)",colorYellow:"rgba(234, 179, 8, 1)",colorYellowHover:"rgba(234, 179, 8, 1)",colorYellowBg:"rgba(77, 71, 32, 1)",colorOrange:"rgba(250, 129, 37, 1)",colorOrangeHover:"rgba(250, 129, 37, 1)",colorOrangeBg:"rgba(255, 232, 201, 0.8)",colorTeal:"rgba(20, 184, 166, 1)",colorTealHover:"rgba(20, 184, 166, 1)",colorTealBg:"rgba(42, 70, 64, 1)",colorBlue:"rgba(0, 144, 255, 1)",colorBlueHover:"rgba(0, 144, 255, 1)",colorBlueBg:"rgba(42, 59, 78, 0.8)",colorMauve:"rgba(142, 140, 153, 1)",colorMauveHover:"rgba(142, 140, 153, 1)",colorMauveBg:"rgba(46, 46, 50, 0.8)",boxShadow:"0px 4px 6px 0px rgba(255, 255, 255, 0.08)",boxShadowSecondary:"0px 12px 24px -16px rgba(255, 255, 255, 0.04), 0px 8px 40px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.03)",boxShadowTertiary:"0px 12px 32px -16px rgba(255, 255, 255, 0.16), 0px 12px 60px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.04)",boxShadowTertiaryLeft:"-12px 0px 32px -16px rgba(255, 255, 255, 0.16), -12px 0px 60px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.04)",boxShadowInput:"0px 12px 24px -16px rgba(254, 254, 255, 0.04), 0px 12px 40px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.02)"},d=(0,b.Z)(f,!0),o=(0,b.Z)(a,!1)},27646:function(m,n,e){e.r(n),n.default={container:"rdClPJKK6krNdAKrayo6",leftContent:"k4k6kmgtB8ZNyrdG55QZ",rightContent:"XXOwciCprQWuAnNCLvTn",icon:"CexBsNjvlDInJWZxxToN",title:"i5grgM3P5m0nnJTQects",duration:"wNBC8jGxRM2OjxpI97gt",thumbnail:"YfrCXzqTyngz6a4YLCC3",fullscreenBtn:"ATj6FDKF36UqZtobOx6c"}},78499:function(m,n,e){e.r(n),n.default={tabsContainer:"mFvDHp2mftcmOSv8Idt0"}},71460:function(m,n,e){e.r(n),n.default={urlWrapper:"wYcT3qwVmJQC5uHJI3zK",moreWrapper:"HykrAXEjCY_ZxcQ8EAaw",simple:"cwknv4q0ykcywGx6sRnr",description:"tJ2OB0MGLj4Emrp7RnNI",detail:"uccPh0HrwtIOQRktydem",title:"OLOIn54JLHA_eZKTea39",url:"ZrTRGYVvg8vbJiMpoVeg",more:"DXPRprkG8IVT2arUyoIZ",icon:"okjPHB7YI0UMELSpff71",iconImage:"GySxot1HnfceTJDwEzRc",linkIcon:"_Qtt7v2ENM2eE1UGJkyQ",rightIcon:"L416r3gTpZQZCwX2sI5S"}},39914:function(m,n,e){e.r(n),n.default={container:"O5yEZdOEOcYwaeBlNyP7",content:"sDAyutlTwy0SiSNLXtXY"}},95285:function(m,n){n.Z=`import Demo from '../starter';


export default Demo`},4413:function(m,n){n.Z=`import { Form, Input, InputNumber, Space, ColorPicker, Flex } from 'antd';
import { createStyles } from 'antd-style';


interface FormItemProps {
  name: string | string[];
  label: string;
  isList?: boolean;
  children: any;
  normalize?: (value: any) => any;
}


const useStyles = createStyles(({ token, css }) => ({
  label: {
    marginBottom: 6,
    fontSize: 12,
    color: token.colorTextSecondary,
  },

}));

export default function FormItem(props: FormItemProps) {
  const { styles } = useStyles();


  const node = props.isList ?
    <Form.List name={props.name}>{props.children}</Form.List> :
    <Form.Item name={props.name} normalize={props.normalize}>{props.children}</Form.Item>;


  return <div>
    {props.label && <div className={styles.label}>{props.label}</div>}
    {node}
  </div>

}`},27069:function(m,n){n.Z=`import React, { useEffect } from 'react';
import { Form, Input, ColorPicker, Flex, Splitter, Divider, InputNumber } from 'antd';
import { createStyles } from 'antd-style';
import { Button, IconButton, Switch } from '@agentscope-ai/design'
import { SparkDeleteLine, SparkPlusLine } from '@agentscope-ai/icons';
import FormItem from './FormItem';
import defaultConfig from './defaultConfig';

const useStyles = createStyles(({ token, css }) => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  form: {
    height: 0,
    flex: 1,
    padding: '8px 16px 16px 16px',
    overflow: 'auto',
  },
  actions: {
    padding: 16,
    display: 'flex',
    borderTop: \`1px solid \${token.colorBorderSecondary}\`,
    justifyContent: 'flex-end',
    gap: 16,
  }

}));

interface OptionsEditorProps {
  value?: any;
  onChange?: any;
}

const OptionsEditor: React.FC<OptionsEditorProps> = ({
  value,
  onChange,
}) => {
  const { styles } = useStyles();
  const [form] = Form.useForm();


  const handleSave = () => {
    form.validateFields().then((values) => {
      onChange(values);
    });
  };

  const handleReset = () => {
    form.setFieldsValue(defaultConfig);
  };

  return (
    <div className={styles.container}>
      <Form
        className={styles.form}
        form={form}
        layout="vertical"
        initialValues={value}
      >


        <Divider orientation="left">Theme</Divider>

        <FormItem name={['theme', 'colorPrimary']} label="colorPrimary" normalize={value => value.toHexString()}>
          <ColorPicker />
        </FormItem>

        <FormItem name={['theme', 'colorBgBase']} label="colorBgBase" normalize={value => value.toHexString()}>
          <ColorPicker />
        </FormItem>

        <FormItem name={['theme', 'colorTextBase']} label="colorTextBase" normalize={value => value.toHexString()}>
          <ColorPicker />
        </FormItem>

        <FormItem name={['theme', 'darkMode']} label="darkMode" >
          <Switch />
        </FormItem>

        <FormItem name={['theme', 'leftHeader', 'logo']} label="leftHeader.logo" >
          <Input />
        </FormItem>

        <FormItem name={['theme', 'leftHeader', 'title']} label="leftHeader.title" >
          <Input />
        </FormItem>

        <Divider orientation="left">Sender</Divider>


        <FormItem name={['sender', 'disclaimer']} label="disclaimer" >
          <Input />
        </FormItem>


        <FormItem name={['sender', 'attachments']} label="attachments" >
          <Switch />
        </FormItem>


        <FormItem name={['sender', 'maxLength']} label="maxLength" >
          <InputNumber min={1000} />
        </FormItem>

        <Divider orientation="left">Welcome</Divider>


        <FormItem name={['welcome', 'greeting']} label="greeting" >
          <Input />
        </FormItem>

        <FormItem name={['welcome', 'description']} label="description" >
          <Input />
        </FormItem>

        <FormItem name={['welcome', 'avatar']} label="avatar" >
          <Input />
        </FormItem>


        <FormItem name={['welcome', 'prompts']} isList label="prompts" >
          {(fields, { add, remove }) => {
            return <div>
              {fields.map(field => {
                return <Flex key={field.key} gap={6}>
                  <Form.Item style={{ flex: 1 }} key={field.key} name={[field.name, 'value']}>
                    <Input />
                  </Form.Item>
                  <IconButton icon={<SparkPlusLine />} onClick={() => add({})}></IconButton>
                  <IconButton icon={<SparkDeleteLine />} onClick={() => remove(field.name)}></IconButton>
                </Flex>
              })}
            </div>
          }}
        </FormItem>


        <Divider orientation="left">API</Divider>

        <FormItem name={['api', 'baseURL']} label="baseURL" >
          <Input />
        </FormItem>

        <FormItem name={['api', 'token']} label="token" >
          <Input />
        </FormItem>
      </Form>

      <div className={styles.actions}>
        <Button onClick={handleReset}>Reset</Button>
        <Button type="primary" onClick={handleSave}>
          Save & Copy
        </Button>
      </div>
    </div>
  );
};

export default OptionsEditor;

`},65975:function(m,n){n.Z=`export default () => {
  return {
    theme: {
      colorPrimary: '#615CED',
      darkMode: true,
      prefix: 'agentscope-runtime-webui',
      leftHeader: {
        logo: 'https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png',
        title: 'Runtime WebUI',
      },
    },
    sender: {
      // @ts-ignore
      attachments: true,
      maxLength: 10000,
      disclaimer:
        'AI can also make mistakes, so please check carefully and use it with caution',
    },

    welcome: {
      greeting: 'Hello, how can I help you today?',
      description:
        'I am a helpful assistant that can help you with your questions.',
      avatar:
        'https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png',
      prompts: [
        {
          value: 'Hello',
        },
        {
          value: 'How are you?',
        },
        {
          value: 'What can you do?',
        },
      ],
    },
    api: {
      baseURL: '',
      token: '',
    },
  };
};
`},36499:function(m,n){n.Z=`import { SparkSettingLine } from "@agentscope-ai/icons";
import { IconButton, Drawer } from "@agentscope-ai/design";
import { useState } from "react";
import OptionsEditor from "./OptionsEditor";

interface OptionsPanelProps {
  value?: any;
  onChange?: any;
}

export default function OptionsPanel(props: OptionsPanelProps) {
  const [open, setOpen] = useState(false);

  return <>
    <IconButton onClick={() => setOpen(true)} icon={<SparkSettingLine />} bordered={false} />
    <Drawer
      destroyOnHidden
      open={open}
      onClose={() => setOpen(false)}
      styles={{ body: { padding: 0 }, header: { padding: 8 } }}>
      <OptionsEditor value={props.value} onChange={v => {
        setOpen(false);
        props.onChange(v);
      }} />
    </Drawer>
  </>
}`},5914:function(m,n){n.Z=`import { AgentScopeRuntimeWebUI, IAgentScopeRuntimeWebUIRef } from '@agentscope-ai/chat';
import OptionsPanel from './OptionsPanel';
import { useMemo, useRef, useState } from 'react';
import sessionApi from './sessionApi';
import defaultConfig from './OptionsPanel/defaultConfig';
import { useLocalStorageState } from 'ahooks';
import Weather from './Weather';

export default function () {

  const chatRef = useRef<IAgentScopeRuntimeWebUIRef>(null);
  // @ts-ignore
  window.chatRef = chatRef;

  const [optionsConfig, setOptionsConfig] = useLocalStorageState('agent-scope-runtime-webui-options', {
    defaultValue: defaultConfig(),
    listenStorageChange: true,
  });

  const options = useMemo(() => {
    const rightHeader = <OptionsPanel value={optionsConfig} onChange={v => {
      setOptionsConfig(prev => ({
        ...prev,
        ...v,
      }));
    }} />;

    return {
      ...optionsConfig,
      customToolRenderConfig: {
        // 'weather search mock': Weather,
      },
      session: {
        multiple: true,
        api: sessionApi,
      },
      sender: {
        ...optionsConfig.sender,
        attachments: optionsConfig.sender.attachments ? {
          customRequest(options) {
            // \u6A21\u62DF\u4E0A\u4F20\u8FDB\u5EA6
            options.onProgress({
              percent: 100,
            });
            // \u5F53\u524D\u662F\u4E00\u4E2A mock \u7684\u4E0A\u4F20\u884C\u4E3A
            // \u5B9E\u9645\u60C5\u51B5\u9700\u8981\u5177\u4F53\u5B9E\u73B0\u4E00\u4E2A\u6587\u4EF6\u4E0A\u4F20\u670D\u52A1\uFF0C\u5C06\u6587\u4EF6\u8F6C\u5316\u4E3A url
            options.onSuccess({
              url: URL.createObjectURL(options.file as Blob)
            });
          }
        } : undefined,
      },
      theme: {
        ...optionsConfig.theme,
        rightHeader,
      },
    };
  }, [optionsConfig]);

  return <div style={{ height: '100dvh' }}>
    <AgentScopeRuntimeWebUI
      ref={chatRef}
      options={options}
    />
  </div>;
}`},38563:function(m,n){n.Z=`import { IAgentScopeRuntimeWebUISessionAPI } from '@agentscope-ai/chat';
import { IAgentScopeRuntimeWebUISession } from '../../core/types/ISessions';

class SessionApi implements IAgentScopeRuntimeWebUISessionAPI {
  private lsKey: string;
  private sessionList: IAgentScopeRuntimeWebUISession[];

  constructor() {
    this.lsKey = 'agent-scope-runtime-webui-sessions';
    this.sessionList = [];
  }

  async getSessionList() {
    this.sessionList = JSON.parse(localStorage.getItem(this.lsKey) || '[]');
    return [...this.sessionList];
  }

  async getSession(sessionId) {
    return this.sessionList.find((session) => session.id === sessionId);
  }

  async updateSession(session) {
    const index = this.sessionList.findIndex((item) => item.id === session.id);
    if (index > -1) {
      this.sessionList[index] = {
        ...this.sessionList[index],
        ...session,
      };
      localStorage.setItem(this.lsKey, JSON.stringify(this.sessionList));
    }

    return [...this.sessionList];
  }

  async createSession(session) {
    session.id = Date.now().toString();
    this.sessionList.unshift(session);
    localStorage.setItem(this.lsKey, JSON.stringify(this.sessionList));
    return [...this.sessionList];
  }

  async removeSession(session) {
    this.sessionList = this.sessionList.filter(
      (item) => item.id !== session.id,
    );
    localStorage.setItem(this.lsKey, JSON.stringify(this.sessionList));
    return [...this.sessionList];
  }
}

export default new SessionApi();
`},45411:function(m,n){n.Z=`import { FlowDirectionGraph, type FlowDirectionGraphOptions } from '@ant-design/graphs';
import { createGlobalStyle } from 'antd-style';
import { Card } from '@agentscope-ai/design'

const Style = createGlobalStyle\`
  .user-flow-node {
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    background-color: var(--sps-color-fill);
    border-radius: 8px;
    padding: 10px 16px 24px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    box-sizing: content-box;
  }

  .user-flow-node-name {
    font-size: 16px;
    font-weight: bold;
    color: var(--sps-color-text);
    margin-bottom: 4px;
  }

  .user-flow-node-metric {
    font-size: 12px;
    color: var(--sps-color-text);
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
  }

  .user-flow-node-metric--value {
    font-weight: bold;
  }
\`

const data = {
  nodes: [
    {
      id: 'node-0',
      name: '\u9875\u9762-0',
      layerName: '\u5C42\u7EA70',
      measure: {
        name: 'DAU',
        value: 17500000000,
        formattedValue: 175,
        formattedUnit: '\u4E07',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 1000000,
          formattedValue: 100,
          formattedUnit: '\u4E07',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#F5A623',
      },
    },
    {
      id: 'node-1',
      name: '\u9875\u97621',
      layerName: '\u5C42\u7EA70',
      measure: {
        name: 'DAU',
        value: 5500000000,
        formattedValue: 55,
        formattedUnit: '\u4E07',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 500000,
          formattedValue: 50,
          formattedUnit: '\u4E07',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#F5A623',
      },
    },
    {
      id: 'node-2',
      name: '\u9875\u97622',
      layerName: '\u5C42\u7EA70',
      measure: {
        name: 'DAU',
        value: 1000000000,
        formattedValue: 10,
        formattedUnit: '\u4E07',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 100000,
          formattedValue: 10,
          formattedUnit: '\u4E07',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#F5A623',
      },
    },
    {
      id: 'node-3',
      name: '\u9875\u97623',
      layerName: '\u5C42\u7EA70',
      measure: {
        name: 'DAU',
        value: 900000000,
        formattedValue: 9,
        formattedUnit: '\u4E07',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 50000,
          formattedValue: 5,
          formattedUnit: '\u4E07',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#F5A623',
      },
    },
    {
      id: 'node-4',
      name: '\u9875\u97624',
      layerName: '\u5C42\u7EA70',
      measure: {
        name: 'DAU',
        value: 5700000000,
        formattedValue: 57,
        formattedUnit: '\u4E07',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 60000,
          formattedValue: 6,
          formattedUnit: '\u4E07',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#F5A623',
      },
    },
    {
      id: 'node-5',
      name: '\u9875\u97625',
      layerName: '\u5C42\u7EA71',
      measure: {
        name: 'DAU',
        value: 24000000000,
        formattedValue: 240,
        formattedUnit: '\u4E07',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 1600000,
          formattedValue: 160,
          formattedUnit: '\u4E07',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#4A90E2',
      },
    },
    {
      id: 'node-6',
      name: '\u9875\u97626',
      layerName: '\u5C42\u7EA71',
      measure: {
        name: 'DAU',
        value: 6600000000,
        formattedValue: 66,
        formattedUnit: '\u4E07',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 110000,
          formattedValue: 11,
          formattedUnit: '\u4E07',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#4A90E2',
      },
    },
    {
      id: 'node-7',
      name: '\u9875\u97627',
      layerName: '\u5C42\u7EA72',
      measure: {
        name: 'DAU',
        value: 5000000000,
        formattedValue: 50,
        formattedUnit: '\u4E07',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 500000,
          formattedValue: 50,
          formattedUnit: '\u4E07',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#7ED321',
      },
    },
    {
      id: 'node-8',
      name: '\u9875\u97628',
      layerName: '\u5C42\u7EA72',
      measure: {
        name: 'DAU',
        value: 5000000000,
        formattedValue: 50,
        formattedUnit: '\u4E07',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 500000,
          formattedValue: 50,
          formattedUnit: '\u4E07',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#7ED321',
      },
    },
    {
      id: 'node-9',
      name: '\u9875\u97629',
      layerName: '\u5C42\u7EA72',
      measure: {
        name: 'DAU',
        value: 90000000000,
        formattedValue: 90,
        formattedUnit: '\u4E07',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 500000,
          formattedValue: 50,
          formattedUnit: '\u4E07',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#7ED321',
      },
    },
    {
      id: 'node-10',
      name: '\u9875\u976210',
      layerName: '\u5C42\u7EA72',
      measure: {
        name: 'DAU',
        value: 100000000000,
        formattedValue: 100,
        formattedUnit: '\u4E07',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 100000,
          formattedValue: 10,
          formattedUnit: '\u4E07',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#7ED321',
      },
    },
    {
      id: 'node-11',
      name: '\u9875\u976211',
      layerName: '\u5C42\u7EA72',
      measure: {
        name: 'DAU',
        value: 1000000000,
        formattedValue: 10,
        formattedUnit: '\u4E07',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 90000,
          formattedValue: 9,
          formattedUnit: '\u4E07',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#7ED321',
      },
    },
    {
      id: 'node-12',
      name: '\u9875\u976212',
      layerName: '\u5C42\u7EA72',
      measure: {
        name: 'DAU',
        value: 600000000,
        formattedValue: 6,
        formattedUnit: '\u4E07',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 10000,
          formattedValue: 1,
          formattedUnit: '\u4E07',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#7ED321',
      },
    },
  ],
  edges: [
    {
      id: 'edge-0',
      source: 'node-0',
      target: 'node-5',
      measure: {
        name: 'DAU',
        value: 17500000000,
        formattedValue: 175,
        formattedUnit: '\u4E07',
      },
    },
    {
      id: 'edge-1',
      source: 'node-1',
      target: 'node-5',
      measure: {
        name: 'DAU',
        value: 5500000000,
        formattedValue: 55,
        formattedUnit: '\u4E07',
      },
    },
    {
      id: 'edge-2',
      source: 'node-2',
      target: 'node-5',
      measure: {
        name: 'DAU',
        value: 1000000000,
        formattedValue: 10,
        formattedUnit: '\u4E07',
      },
    },
    {
      id: 'edge-3',
      source: 'node-3',
      target: 'node-6',
      measure: {
        name: 'DAU',
        value: 900000000,
        formattedValue: 9,
        formattedUnit: '\u4E07',
      },
    },
    {
      id: 'edge-4',
      source: 'node-5',
      target: 'node-7',
      measure: {
        name: 'DAU',
        value: 5000000000,
        formattedValue: 50,
        formattedUnit: '\u4E07',
      },
    },
    {
      id: 'edge-5',
      source: 'node-5',
      target: 'node-8',
      measure: {
        name: 'DAU',
        value: 5000000000,
        formattedValue: 50,
        formattedUnit: '\u4E07',
      },
    },
    {
      id: 'edge-6',
      source: 'node-5',
      target: 'node-9',
      measure: {
        name: 'DAU',
        value: 9000000000,
        formattedValue: 90,
        formattedUnit: '\u4E07',
      },
    },
    {
      id: 'edge-7',
      source: 'node-5',
      target: 'node-10',
      measure: {
        name: 'DAU',
        value: 5000000000,
        formattedValue: 50,
        formattedUnit: '\u4E07',
      },
    },
    {
      id: 'edge-8',
      source: 'node-6',
      target: 'node-11',
      measure: {
        name: 'DAU',
        value: 1000000000,
        formattedValue: 10,
        formattedUnit: '\u4E07',
      },
    },
    {
      id: 'edge-9',
      source: 'node-4',
      target: 'node-6',
      measure: {
        name: 'DAU',
        value: 5700000000,
        formattedValue: 57,
        formattedUnit: '\u4E07',
      },
    },
    {
      id: 'edge-11',
      source: 'node-6',
      target: 'node-12',
      measure: {
        name: 'DAU',
        value: 600000000,
        formattedValue: 6,
        formattedUnit: '\u4E07',
      },
    },
    {
      id: 'edge-12',
      source: 'node-6',
      target: 'node-10',
      measure: {
        name: 'DAU',
        value: 5000000000,
        formattedValue: 50,
        formattedUnit: '\u4E07',
      },
    },
  ],
};


const UserFlowNode = ({ data }) => {
  const metrics = [
    { name: 'DAU', value: data.measure.formattedValue + data.measure.formattedUnit },
    { name: 'MAU', value: data.relatedMeasures[0].formattedValue + data.relatedMeasures[0].formattedUnit },
  ];

  return (
    <div className="user-flow-node">
      <div className="user-flow-node-name">{data.name}</div>
      {metrics.map((metric) => (
        <div className="user-flow-node-metric" key={metric.name}>
          <div className="user-flow-node-metric-name">{metric.name}</div>
          <div className="user-flow-node-metric-value">{metric.value}</div>
        </div>
      ))}
    </div>
  );
};

const transformData = (data) => {
  const REF_NODE_IDS = ['node-5', 'node-6'];
  const findNodeById = (id) => data.nodes.find((node) => node.id === id);
  data.edges.forEach((edge) => {
    edge.data ||= {};
    const isSplit = REF_NODE_IDS.includes(edge.source);
    edge.data.type = isSplit ? 'split' : 'proportion';
    edge.data.ratio = edge.measure.value / findNodeById(isSplit ? edge.source : edge.target).measure.value;
  });
  return data;
};

export default (props: { data: { page: string } }) => {
  const options: FlowDirectionGraphOptions = {
    autoFit: 'view',
    padding: 8,
    data: transformData(data),
    node: {
      style: {
        component: (data) => <UserFlowNode data={data} />,
        size: [160, 90],
      },
    },
    edge: {
      style: {
        stroke: (d) =>
          d.data.type === 'split' ? 'l(0) 0:#F04864 0.5:#7EC2F3 1:#1890FF' : 'l(0) 0:#1890FF 0.5:#7EC2F3 1:#F04864',
        labelText: (d) => {
          const { type, ratio } = d.data;
          const text = type === 'split' ? '\u5206\u6D41' : '\u5360\u6BD4';
          return \`\${text} \${(Number(ratio) * 100).toFixed(2)}%\`;
        },
        labelBackground: true,
      },
    },
    transforms: (prev) => [
      ...prev,
      {
        type: 'map-edge-line-width',
        key: 'map-edge-line-width',
        value: (d) => d.data.ratio,
        minValue: 0,
        maxValue: 1,
        minLineWidth: 1,
        maxLineWidth: 32,
      },
    ],
    layout: {
      type: 'dagre',
      nodesep: 40,
      ranksep: 200,
    },
  };

  return <>
    <Style />
    <Card title={props.data.page} style={{ maxWidth: '100%', minWidth: '450px' }}>
      <div style={{ height: '400px' }}>
        <FlowDirectionGraph {...options} />
      </div>
    </Card>
  </>
};`},57190:function(m,n){n.Z=`import React, { useState } from 'react';
import { Button, Card, Select } from '@agentscope-ai/design'
import { Flex } from 'antd';
import { useMessages, uuid } from '@agentscope-ai/chat';


interface ISelectPageCardContext {
  data: {
    pages: string[];
  }
  context: {
    onInput: {
      onSubmit: (data: { query: string }) => void;
    };
  }
}

function SelectPageCard(props: ISelectPageCardContext) {
  console.log(props);
  const { updateMessage } = useMessages() || {};
  const [page, setPage] = useState<string>(props.data.pages[0]);

  return <Card title='Please select a page'>
    <Flex gap={8}>
      <Select value={page} onChange={setPage} options={props.data.pages.map(page => ({ label: page, value: page }))} />
      <Button onClick={() => {
        updateMessage({
          id: uuid(),
          role: 'assistant',
          cards: [{
            code: 'PagePVChartCard',
            data: {
              page,
            }
          }]
        });
      }}>OK</Button>
      <Button onClick={() => {
        props.context.onInput?.onSubmit?.({
          query: page,
        });
      }}>Send</Button>
    </Flex>
  </Card>;
}


export default SelectPageCard;`},48796:function(m,n){n.Z=`import { ChatAnywhere, ChatAnywhereRef, DefaultCards, sleep, TMessage, uuid } from '@agentscope-ai/chat';
import SelectPageCard from "./SelectPageCard";
import PagePVChartCard from "./PagePVChartCard";
import { useCallback, useEffect, useRef } from 'react';
import { useAsyncEffect } from 'ahooks';

export default function () {
  const ref = useRef<ChatAnywhereRef>();

  useAsyncEffect(async () => {
    ref.current.updateMessage({
      id: uuid(),
      role: 'user',
      content: 'I want to View page PV data',
    });

    await sleep(100);

    ref.current.updateMessage({
      id: uuid(),
      role: 'assistant',
      cards: [{
        code: 'SelectPageCard',
        data: {
          pages: ['https://foo.com/page1', 'https://foo.com/page2', 'https://foo.com/page3'],
        }
      }]
    })

  }, []);


  const onSubmit = useCallback(async (data) => {
    ref.current.updateMessage({
      id: uuid(),
      role: 'user',
      content: data.query,
    });
    await sleep(100);

    ref.current.updateMessage({
      id: uuid(),
      role: 'assistant',
      cards: [{
        code: 'PagePVChartCard',
        data: {
          page: data.query,
        }
      }]
    });

  }, []);

  const onStop = useCallback(async () => {

  }, []);

  return <ChatAnywhere
    ref={ref}
    cardConfig={{
      SelectPageCard,
      PagePVChartCard,
    }}
    uiConfig={{}}
    onInput={{
      onSubmit,
    }}
    onStop={onStop}
  >

  </ChatAnywhere>
}`},87508:function(m,n){n.Z=`import { Bubble, CustomCardsProvider } from "@agentscope-ai/chat";
import SelectPageCard from "./SelectPageCard";
import PagePVChartCard from "./PagePVChartCard";

export default function () {
  return <CustomCardsProvider cardConfig={{
    SelectPageCard: SelectPageCard,
    PagePVChartCard: PagePVChartCard,
  }}>
    <Bubble.List
      items={[{
        id: '0',
        role: 'user',
        content: 'I want to View page PV data',
      }, {
        id: '1',
        role: 'assistant',
        cards: [{
          code: 'SelectPageCard',
          data: {
            pages: ['https://foo.com/page1', 'https://foo.com/page2', 'https://foo.com/page3'],
          }
        }],
      }, {
        id: '2',
        role: 'assistant',
        cards: [{
          code: 'PagePVChartCard',
          data: {
            page: 'https://foo.com/page1',
          }
        }]
      }]}
    >
    </Bubble.List>
  </CustomCardsProvider>
}`},96794:function(m,n){n.Z=`import React, { useCallback, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Card, Flex, Statistic, UploadFile, Input } from 'antd';
import { Button } from '@agentscope-ai/design';
import { useMount } from 'ahooks';
import compact from 'lodash/compact';

import {
  ChatAnywhere,
  ChatAnywhereRef,
  uuid,
  Stream,
  TMessage,
  createCard,
  DefaultCards,
  Welcome,
  useChatAnywhere
} from '@agentscope-ai/chat';
import { SparkAttachmentLine, SparkDeepThinkLine, SparkReplaceLine } from '@agentscope-ai/icons';

import Header from '../Header';
import sessionLocalStorage from '../sessionLocalStorage';
import { useDemoContext } from '../DemoContext';

import { createGlobalStyle } from 'antd-style';

const Style = createGlobalStyle\`
.sps-chat-anywhere-chat-welcome {
  height: auto !important;
}
\`

export default function () {
  const ref = useRef<ChatAnywhereRef>();
  // @ts-ignore
  window.ref = ref;

  const { demoContext, getDemoContext, setDemoContext } = useDemoContext();

  const currentQA = useRef<{
    query?: TMessage,
    answer?: TMessage,
    abortController?: AbortController;
  }>({});


  useMount(() => {
    ref.current.updateSession(
      sessionLocalStorage.get()
    );
  })


  const onFinish = useCallback((status: 'finished' | 'interrupted' = 'finished', usage?: any) => {
    currentQA.current.answer.msgStatus = status;
    currentQA.current.answer.cards = currentQA.current.answer.cards.map(item => {
      if (item.code === 'Text') {
        return createCard('Text', {
          ...item.data,
          msgStatus: status,
        });
      } else if (item.code === 'DeepThink') {
        return createCard('DeepThink', {
          ...item.data,
          loading: false,
        });
      } else {
        return item;
      }
    });

    if (status === 'interrupted') {
      currentQA.current.answer.cards.push(
        createCard('Interrupted', {})
      );
    }

    currentQA.current.answer.cards.push(
      createCard('Footer', {
        left: <DefaultCards.FooterActions data={[
          {
            icon: <SparkReplaceLine />, label: '\u91CD\u65B0\u751F\u6210', onClick: () => {
              onRegenerate(currentQA.current.answer);
            }
          },
        ]} />,
        right: usage ? <DefaultCards.FooterCount data={[['\u8F93\u5165tokens', usage.prompt_tokens], ['\u8F93\u51FAtokens', usage.completion_tokens]]} ></DefaultCards.FooterCount> : null

      })
    )
    ref.current.setLoading(false);
    ReactDOM.flushSync(() => {
      ref.current.updateMessage(currentQA.current.answer);
    });

    saveToLocalStorage();
  }, [demoContext]);

  const saveToLocalStorage = useCallback(async () => {
    // \u5C06\u5F53\u524D\u7684\u6D88\u606F\u5217\u8868\u540C\u6B65\u5230\u5F53\u524D session \u4E2D
    ReactDOM.flushSync(() => {
      ref.current.updateSessionMessages(ref.current.getMessages());
    });

    sessionLocalStorage.set(ref.current.getSession());
  }, [demoContext]);

  const chat = useCallback(async (messages: TMessage[]) => {

    currentQA.current.answer = {
      id: uuid(),
      cards: [],
      content: '',
      role: 'assistant',
      msgStatus: 'generating',
    }

    ref.current.updateMessage(currentQA.current.answer);

    currentQA.current.abortController = new AbortController();

    const requestMessages = messages.map(msg => {
      return {
        ...msg,
        content: msg.content || (msg.cards || []).reduce((p, c) => { return p + (c.code === 'Text' ? c.data.content : '') }, '')
      };
    });


    const response = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${getDemoContext().apikey}\`
      },
      body: JSON.stringify({
        model: getDemoContext().model,
        enable_thinking: getDemoContext().enable_thinking,
        messages: requestMessages,
        stream: true,
        stream_options: {
          include_usage: true,

        },
      }),
      signal: currentQA.current.abortController.signal
    });


    if (response.status !== 200) return;

    let content = '';
    let reasoning_content = '';
    for await (const chunk of Stream({
      readableStream: response.body,
    }, {
      openaiCompatible: true,
    })) {

      if (currentQA.current.answer.msgStatus === 'interrupted') {
        currentQA.current.abortController.abort();
        break;
      }

      if (chunk.data === '[DONE]') {
        onFinish('finished')
        break;
      }

      const data = JSON.parse(chunk.data);
      if (data.usage) {
        onFinish('finished', data.usage);
        break;
      }

      content += data.choices[0]?.delta.content || '';
      reasoning_content += data.choices[0]?.delta.reasoning_content || '';

      currentQA.current.answer.cards = compact([
        reasoning_content && createCard('DeepThink', {
          content: reasoning_content,
          loading: !content,
        }),
        content && createCard('Text', {
          content: content,
          animation: true,
          msgStatus: 'generating'
        })
      ])


      ref.current.updateMessage(currentQA.current.answer);
    }
  }, [demoContext]);

  const onInput = useCallback(async (data: { query: string; fileList?: UploadFile[][] }) => {
    if (!getDemoContext().apikey) {
      document.dispatchEvent(new CustomEvent('settingOpen'));
      return;
    }

    clearFooter();
    currentQA.current.answer = undefined;
    currentQA.current.query = {
      id: uuid(),
      cards: [{
        code: 'Text',
        data: {
          content: data.query,
          msgStatus: 'finished',
          // raw: true,
        }
      }],
      role: 'user',
      msgStatus: 'finished',
    };

    if (data.fileList?.length) {
      const images = [];
      const files = [];
      // @ts-ignore
      const allFileList = data.fileList.reduce((p, c) => [...p, ...c], [])
      allFileList.forEach(file => {
        if (file.type.startsWith('image')) {
          images.push(file)
        } else {
          files.push(file)
        }
      })

      if (images.length) {
        currentQA.current.query.cards.push(createCard('Images', images.map(item => {
          return item.response
        })))
      }

      if (files.length) {
        currentQA.current.query.cards.push(
          createCard('Files', files.map(item => {
            return {
              filename: item.name,
              bytes: item.size
            }
          }))
        )
      }
    }

    ref.current.setLoading(true);


    ReactDOM.flushSync(() => {
      ref.current.updateMessage(currentQA.current.query);
    });

    ref.current.scrollToBottom();
    chat(ref.current.getMessages());
  }, [demoContext]);

  const onStop = useCallback(() => {
    onFinish('interrupted');
  }, [demoContext]);

  const clearFooter = useCallback(() => {
    try {
      currentQA.current.answer.cards = currentQA.current.answer.cards.filter(item => item.code !== 'Footer');
      ref.current.updateMessage(currentQA.current.answer);
    } catch (error) {
    }
  }, [demoContext]);

  const onRegenerate = useCallback((msg: Partial<TMessage>) => {
    ReactDOM.flushSync(() => {
      ref.current.removeMessage(msg);
    });
    const messages = ref.current.getMessages();
    chat(messages);
  }, [demoContext]);

  const enable_thinking = demoContext.enable_thinking;

  const [onUpload, setOnUpload] = useState([]);

  return <div style={{ height: '100vh' }}>
    <Style />
    <ChatAnywhere
      cardConfig={{ MyCard }}
      uiConfig={{
        welcome: <Welcome
          style={{ marginTop: 'calc(50vh - 128px)' }}
          title="Nice to meet you!"
          desc="How can I help you today?"
        />,
        disclaimer: 'AI can also make mistakes, so please check and use it carefully',
        header: <Header />,
        logo: <div style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>Spark Chat</div>,
        quickInput: <>
          <Button size="small" onClick={() => {
            ReactDOM.flushSync(() => {
              ref.current.updateMessage({
                id: uuid(),
                cards: [
                  {
                    code: 'MyCard',
                    data: [
                      ['MyCard', 10000]
                    ],
                  },
                ],
                role: 'assistant',
                msgStatus: 'finished',
              })

            })
            ref.current.scrollToBottom();
          }}>quickInput</Button>
          <Button size="small" onClick={() => {

          }}>test case A</Button>
          <Button size="small">test case B</Button>
        </>
      }}
      ref={ref}
      onInput={{
        morePrefixActions: <>
          {
            enable_thinking !== undefined ?
              <Button type="text" color={enable_thinking ? 'primary' : 'default'} variant={enable_thinking ? 'filled' : 'text'} icon={<SparkDeepThinkLine />} style={{ padding: '0 6px', gap: 6 }} onClick={() => setDemoContext({ enable_thinking: !enable_thinking })}>DeepThink</Button>
              : null
          }
        </>,
        onSubmit: onInput,
        maxLength: 100000,
        beforeSubmit: () => Promise.resolve(true),
        zoomable: true,
      }}
      onStop={onStop}
      onRegenerate={onRegenerate}
      onSessionKeyChange={(currentSessionKey) => {
        currentQA.current.answer = undefined;
        currentQA.current.query = undefined;
        sessionLocalStorage.set({ currentSessionKey });
      }}
      onUpload={[{
        multiple: false,
        icon: <SparkAttachmentLine />,
        customRequest(options) {
          options.onSuccess({
            url: URL.createObjectURL(options.file as Blob)
          });
        }
      }, {
        multiple: false,
        icon: <SparkAttachmentLine />,
        customRequest(options) {
          options.onSuccess({
            url: URL.createObjectURL(options.file as Blob)
          });
        }
      }]}
    ></ChatAnywhere>
  </div>
}


function MyCard(props) {
  const onInput = useChatAnywhere(v => v.onInput);

  const [v, sv] = useState('');
  return <div><Card title="my card" size="small" >
    <Flex gap={32}>
      {props.data.map((item) => {
        return <Statistic title={item[0]} value={item[1]} key={item[0]} />
      })}
    </Flex>
    <br />
    <Flex gap={8}>
      <Input placeholder="\u8BF7\u8F93\u5165" onChange={e => sv(e.target.value)} /> <Button onClick={() => {
        onInput.onSubmit({ query: v });
      }}>\u63D0\u4EA4</Button>
    </Flex>
  </Card></div>;
}`},39250:function(m,n){n.Z=`import { useSetState } from 'ahooks';
import { SetState } from 'ahooks/lib/useSetState';
import React, { useState } from 'react';
import { useGetState } from 'ahooks';


type TContext = {
  model: string
  apikey: string
  theme: 'purple' | 'carbon' | string
  enable_thinking?: boolean;
}

export const DemoContext = React.createContext<{
  demoContext: TContext,
  setDemoContext: SetState<TContext>,
  getDemoContext: () => TContext
}>(undefined);

export const DemoContextProvider = function (props: { children: React.ReactNode }) {
  const [demoContext, setDemoContext, getDemoContext] = useGetState<TContext>({
    model: 'qwen-turbo',
    apikey: localStorage.getItem('apikey') || '',
    theme: localStorage.getItem('theme') || 'carbon',
    enable_thinking: undefined,
  });


  return <DemoContext.Provider value={{
    demoContext, getDemoContext, setDemoContext: data => {
      return setDemoContext((state) => {
        const nextState = {
          ...state,
          ...data,
        }

        if (nextState.model === 'qwen3-32b' && nextState.enable_thinking === undefined) {
          nextState.enable_thinking = true
        }

        if (nextState.model !== 'qwen3-32b') {
          nextState.enable_thinking = undefined;
        }

        localStorage.setItem('apikey', nextState.apikey);
        localStorage.setItem('theme', nextState.theme);
        return nextState
      });
    }
  }}>
    {props.children}
  </DemoContext.Provider>
};


export const useDemoContext = function () {
  return React.useContext(DemoContext);
};


`},35753:function(m,n){n.Z=`import React from "react";
import useStyle from './style';
import { Dropdown, Button } from 'antd';
import { useDemoContext } from '../DemoContext';
import { SparkDownLine } from "@agentscope-ai/icons";

const items = [
  {
    key: 'qwen-turbo',
    label: <Model name="Qwen-Turbo" />
  },
  {
    key: 'qwen-max',
    label: <Model name="Qwen-Max" />
  },
  {
    key: 'qwq-plus',
    label: <Model name="Qwen-QwQ-Plus" />
  },
  {
    key: 'qwen3-32b',
    label: <Model name="Qwen3-32B" />
  },
];

function Model(props: {
  name?: string;
  size?: number;
  arrow?: boolean
}) {
  const { name = '', size = 12, arrow = false } = props;
  const { styles } = useStyle();
  return <div className={styles.model}>
    <img src="https://img.alicdn.com/imgextra/i4/O1CN01SdyYTH1Kfz6skC36o_!!6000000001192-2-tps-96-96.png" className={styles.modelLogo} />
    <div className={styles.modelName} style={{ fontSize: size }} >{name}</div>
    {
      arrow && <SparkDownLine />
    }
  </div>
}

export default function () {
  const { demoContext, setDemoContext } = useDemoContext();

  const current = items.find(item => item.key === demoContext.model);

  return <Dropdown
    menu={{
      items,
      selectable: true,
      onSelect: ({ key }) => {
        setDemoContext({
          model: key,
        });
      }
    }}
  >
    <Button type="text" style={{ padding: '0 6px' }}>
      {current?.label ? React.cloneElement(current.label, { size: 16, arrow: true }) : null}
    </Button>
  </Dropdown>
}`},21367:function(m,n){n.Z=`import React, { useEffect, useState } from "react";
import { Drawer, Button, Form, Input, IconButton } from '@agentscope-ai/design';
import { ColorPicker, Flex, Radio } from "antd";
import { useDemoContext } from "../DemoContext";
import { SparkSettingLine } from "@agentscope-ai/icons";


export default function () {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const { getDemoContext, setDemoContext } = useDemoContext();

  useEffect(() => {
    const settingOpen = () => setOpen(true);
    document.addEventListener('settingOpen', settingOpen);
    return () => {
      document.removeEventListener('settingOpen', settingOpen);
    }
  }, [])


  return <>
    <IconButton icon={<SparkSettingLine />} onClick={() => setOpen(true)} />

    <Drawer title="Setting"
      afterOpenChange={() => {
        form.setFieldsValue({
          apikey: getDemoContext().apikey,
        })
      }}

      onClose={() => setOpen(false)} open={open} footer={<Button type="primary" onClick={async () => {
        const values = await form.validateFields();
        setDemoContext({
          apikey: values.apikey,
        })
        setOpen(false);
      }}>Save</Button>}>
      <Form
        form={form}
      >
        <Form.Item name="apikey" label="API Key" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <a target="_blank" href="https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key">How to get apikey? </a>
      </Form>
    </Drawer>
  </>
}


function ThemeInput({ value, onChange }) {
  return <Flex gap={8} align="center">
    <Radio.Group options={[
      { label: 'Carbon', value: 'carbon' },
      { label: 'Purple', value: 'purple' },
    ]} value={value} onChange={e => onChange(e.target.value)} />
    <ColorPicker value={value} onChange={e => {
      return onChange(e.toCssString());
    }} /></Flex>
}`},90073:function(m,n){n.Z=`import ModelSelect from "./ModelSelect";
import Setting from "./Setting";
import useStyle from "./style";

export default function () {
  const { styles } = useStyle();
  return <div className={styles.header}>
    <ModelSelect />
    <div style={{ flex: 1 }} />
    <Setting />
  </div>
}`},78630:function(m,n){n.Z=`import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  header: css\`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px 0 12px;
    width: 100%;
  \`,
  model: css\`
    height: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  \`,
  modelLogo: css\`
    width: 20px;
    height: 20px;
    background-color: \${token.colorBgBase};
    border-radius: 6px;
  \`,
  modelName: css\`
    font-weight: 500;
    line-height: 20px;
    color: \${token.colorText};
  \`,
}));
`},81895:function(m,n){n.Z=`import React from 'react';
import { DemoContextProvider } from './DemoContext';
import Chat from './Chat';
import { ConfigProvider, carbonTheme } from '@agentscope-ai/design';


export default function () {
  return <div style={{ height: '100vh' }} >
    <ConfigProvider {...carbonTheme}
      prefix='sps'
      prefixCls="sps">
      <DemoContextProvider>
        <Chat />
      </DemoContextProvider>
    </ConfigProvider>
  </div>
}

`},70011:function(m,n){n.Z=`const sessionLocalStorage = {
  get() {
    const localStorageDataString = localStorage.getItem(
      'chat-anywhere-session',
    );

    if (localStorageDataString) {
      return JSON.parse(localStorageDataString);
    } else {
      return {
        sessionList: [
          {
            label: Date.now().toString(),
            key: '9ed1150f-6046-4917-a124-6e85ba1ea933',
            messages: [[]],
          },
        ],
        currentSessionKey: '9ed1150f-6046-4917-a124-6e85ba1ea933',
        currentRegenerateIndex: 0,
      };
    }
  },
  set(data) {
    const beforeData = sessionLocalStorage.get() || {};
    
    localStorage.setItem(
      'chat-anywhere-session',
      JSON.stringify({
        ...beforeData,
        ...data,
      }),
    );
  },
};

export default sessionLocalStorage;
`},95401:function(m,n){n.Z=`.container {
  height: 48px;
  background: var(--sps-color-bg-base);
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
}

.leftContent {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rightContent {
  display: flex;
  align-items: center;
  gap: 16px;
}

.icon {
  color: var(--sps-color-text);
  font-size: 20px !important;
}

.title {
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: var(--sps-color-text);
  font-family: 'claude clone';
}

.duration {
  font-size: 12px;
  line-height: 20px;
  color: var(--sps-color-text-tertiary);
  font-family: 'claude clone';
}

.thumbnail {
  .fullscreenBtn {
    display: none;
  }
}`},80516:function(m,n){n.Z=`import React, { useEffect, useState } from 'react';
import { IconFont, IconButton } from '@agentscope-ai/design';
import styles from './Chat.module.less';
import { formatDuration } from '../lib/time';
import { IParseData } from '../type';
import classNames from 'classnames';
import { SparkPaperLine } from '@agentscope-ai/icons';

interface IProps {
  /**
   * \u5F00\u59CB\u65F6\u95F4
   */
  startTime: number;
  /**
   * \u6570\u636E
   */
  data: IParseData;
  /**
   * \u6807\u9898
   */
  title: string;
  /**
   * \u7F29\u7565\u6A21\u5F0F
   */
  thumbnail: boolean;
  /**
   * \u662F\u5426\u5B8C\u6210
   */
  finished: boolean;
  /**
   * \u5168\u5C4F
   */
  onFullscreen: () => void;
  /**
   * \u81EA\u5B9A\u4E49\u6837\u5F0F
   */
  className?: string;
}

const ChatHeader: React.FC<IProps> = (props) => {
  const { title, startTime, data, thumbnail, finished, onFullscreen, className } = props;
  const [endTime, setEndTime] = useState(finished ? data.result?.endTime : Date.now());

  useEffect(() => {
    let clock;

    if (!finished) {
      clock = setInterval(() => {
        setEndTime(Date.now());
      }, 1000);
    } else {
      setEndTime(data.result.endTime);
    }

    return () => {
      clearInterval(clock);
    };
  }, [finished]);

  const durationText = formatDuration(startTime, endTime);

  return (
    <div
      className={classNames(styles.container, className, {
        [styles.thumbnail]: thumbnail,
      })}
    >
      <div className={styles.leftContent}>
        <SparkPaperLine style={{ fontSize: 20 }} />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.rightContent}>
        <span className={styles.duration}>{durationText}</span>
        <IconButton
          className={styles.fullscreenBtn}
          iconType="spark-fullscreen-line"
          onClick={onFullscreen}
          bordered={false}
        />
      </div>
    </div>
  );
};

export default ChatHeader;
`},49166:function(m,n){n.Z=`

.tabsContainer {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  
}
`},35414:function(m,n){n.Z=`import React, { useMemo, useState } from 'react';
import { Button, IconButton, Tabs } from '@agentscope-ai/design';
import styles from './Preview.module.less';
import { IParseData } from '../type';

interface ViewProps {
  data: IParseData;
  /** \u8FD4\u56DE\u6309\u94AE\u70B9\u51FB\u56DE\u8C03 */
  activeTab: string;
  onTabChange?: (key: string) => void;
}

const PreviewHeader: React.FC<ViewProps> = ({ data, activeTab, onTabChange }) => {
  const items = useMemo(() => {
    const list = [];

    if (data.result?.content) {
      list.push({
        key: 'report',
        label: 'Report',
      });
    }

    if (Array.isArray(data.steps) && data.steps.length > 0) {
      list.push({
        key: 'process',
        label: 'Process',
      });
    }

    if (Array.isArray(data.site?.list) && data.site.list.length > 0) {
      list.push({
        key: 'source',
        label: 'Source',
      });
    }

    return list;
  }, [data]);

  const handleTabChange = (key: string) => {
    onTabChange?.(key);
  };

  const handleExport = () => {
    if (!data.result?.fileKey) {
      return;
    }
  };

  return (
    <div className={styles.tabsContainer}>
      <Tabs type="segmented" items={items} activeKey={activeTab} onChange={handleTabChange} />
    </div>
  );
};

export default PreviewHeader;
`},63720:function(m,n){n.Z=`import React, { useState } from 'react';
import { IParseData } from '../type';
import PreviewHeader from '../Header/Preview';
import styles from './index.module.less';
import Result from '../Result';
import Process from '../Process';
import ResearchSource from '../ResearchSource';
import RightPanel, { RightPanelContent, RightPanelHeader } from '../../../components/RightPanel';

interface IProps {
  data: IParseData;
  viewIndex?: number;
}

const Preview: React.FC<IProps> = (props) => {
  const { data, viewIndex } = props;
  const [activeTab, setActiveTab] = useState<string>('process');

  return <RightPanel
    header={<RightPanelHeader title={data.title} actions={null} />}
    content={<RightPanelContent>
      <PreviewHeader
        data={data}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className={styles.content}>
        {activeTab === 'report' && <Result data={data.result} />}
        {activeTab === 'process' && <Process list={data.steps} viewIndex={viewIndex} />}
        {activeTab === 'source' && <ResearchSource list={data.site?.list} />}
      </div>
    </RightPanelContent>}
  >
  </RightPanel>
};

export default Preview;
`},92930:function(m,n){n.Z=`import React, { useEffect, useRef } from 'react';
import { Markdown } from '@agentscope-ai/chat';
import { IStep } from '../type';
import styles from './index.module.less';
import SiteList from '../SiteList';
import classNames from 'classnames';

interface IProps {
  list: IStep[];
  viewIndex?: number;
}

const Process: React.FC<IProps> = (props) => {
  const { list } = props;
  const viewRefList = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // if (props.viewIndex !== undefined) {
    //   viewRefList.current[props.viewIndex]?.scrollIntoView({ behavior: 'smooth' });
    // }
  }, [props.viewIndex]);

  return (
    <div className={styles.container}>
      {list.map((d, index) => (
        <div key={index} ref={(el) => (viewRefList.current[index] = el)}>
          {d.list?.map((item) => (
            <>
              <Markdown content={item.content} className={styles.content} />
              {Array.isArray(item.siteList) && item.siteList.length > 0 && (
                <div className={classNames(styles.siteList)}>
                  <div className={styles.siteListTitle}>Research websites</div>
                  <SiteList list={item.siteList} />
                </div>
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Process;
`},25780:function(m,n){n.Z=`import React from 'react';
import { IUrl } from '../type';
import styles from './index.module.less';
import SiteDetailList from '../SiteList/Detail';

interface IProps {
  list: IUrl[];
}

const ResearchSource: React.FC<IProps> = (props) => {
  const { list } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>Searched {list.length} web pages</div>
      <div className={styles.content}>
        <SiteDetailList list={list} />
      </div>
    </div>
  );
};

export default ResearchSource;
`},38788:function(m,n){n.Z=`import React from 'react';
import { Markdown } from '@agentscope-ai/chat';
import { IResult } from '../type';
import styles from './index.module.less';

interface IProps {
  data: IResult;
}

const Result: React.FC<IProps> = (props) => {
  const { data } = props;
  return <Markdown content={data.content} className={styles.container} />
};

export default Result;
`},66322:function(m,n){n.Z=`import React from 'react';
import styles from './index.module.less';
import { SparkLinkLine, SparkRightLine } from '@agentscope-ai/icons';

interface IProps {
  count: number;
  onClick: () => void;
}

const More: React.FC<IProps> = ({ count, onClick }) => {
  return (
    <div className={styles.moreWrapper} onClick={onClick}>
      <div className={styles.more}>
        <SparkLinkLine className={styles.linkIcon} />
        <span className={styles.title}>Read More ({count})</span>
      </div>
      <SparkRightLine className={styles.rightIcon} />
    </div>
  );
};

export default More;
`},1330:function(m,n){n.Z=`.urlWrapper {
  cursor: pointer;
}

.urlWrapper,
.moreWrapper {
  position: relative;
  padding: 4px 8px;
  flex-grow: 0;
  align-self: inherit;
  background: var(--sps-color-fill-tertiary);
  border-radius: 99px;
}

.urlWrapper.simple {
  .description {
    display: none;
  }
}

.urlWrapper.detail {
  .title {
    font-weight: 500;
  }
}

.url,
.more {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  flex: 0 0 auto;
  width: 16px;
  height: 16px;
  border: 1px solid var(--sps-color-border-secondary);
  border-radius: 99px;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}

.iconImage {
  width: 8px;
  height: 8px;
  object-fit: contain;
}

.title {
  font-size: 12px;
  line-height: 20px;
  color: var(--sps-color-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'claude clone';
}

.more {
  .title {
    font-weight: 500;
  }
}

.description {
  color: var(--sps-color-text-secondary);
  font-size: 12px;
  line-height: 20px;
}

.moreWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.linkIcon {
  color: var(--sps-color-text);
}

.rightIcon {
  color: var(--sps-color-text-secondary);
}`},3519:function(m,n){n.Z=`import React from 'react';
import { IUrl } from '../type';
import styles from './index.module.less';
import classNames from 'classnames';

interface ISiteItemProps {
  data: IUrl;
  type: 'detail' | 'simple';
}

const SiteItem: React.FC<ISiteItemProps> = ({ data, type = 'simple' }) => {
  return (
    <div
      className={classNames(styles.urlWrapper, styles[type])}
      onClick={() => {
        if (data.url) {
          window.open(data.url, '_blank');
        }
      }}
    >
      <div className={styles.url}>
        <div className={styles.icon}>
          {data.icon && <img src={data.icon} className={styles.iconImage} alt="" />}
        </div>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.description}>{data.description}</span>
      </div>
    </div>
  );
};

export default SiteItem;
`},97867:function(m,n){n.Z=`.container {
  position: relative;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}`},4621:function(m,n){n.Z=`import React from 'react';
import { IUrl } from '../type';
import styles from './Detail.module.less';
import SiteItem from '../SiteItem';

interface IProps {
  list: IUrl[];
}

const SiteDetailList: React.FC<IProps> = ({ list }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {list.map((item) => (
          <SiteItem key={item.title} data={item} type="detail" />
        ))}
      </div>
    </div>
  );
};

export default SiteDetailList;
`},3109:function(m,n){n.Z=`import React, { useMemo, useState } from 'react';
import { IUrl } from '../type';
import styles from './index.module.less';
import SiteItem from '../SiteItem';
import More from '../SiteItem/More';
import { Button } from '@agentscope-ai/design';
import { SparkUpLine } from '@agentscope-ai/icons';

interface IProps {
  list: IUrl[];
}

const SiteList: React.FC<IProps> = ({ list }) => {
  const [expand, setExpand] = useState(false);

  const [currentList, restCount] = useMemo(() => {
    if (list.length <= 8 || expand) {
      return [list, 0];
    }

    return [list.slice(0, 7), list.length - 7];
  }, [list, expand]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {currentList.map((item) => (
          <SiteItem key={item.title} data={item} type="simple" />
        ))}
        {restCount > 0 && <More count={restCount} onClick={() => setExpand(true)} />}
      </div>
      {expand && (
        <Button
          size="small"
          type="textCompact"
          icon={<SparkUpLine />}
          onClick={() => setExpand(false)}
          className={styles.collapseButton}
        >
          Collapse
        </Button>
      )}
    </div>
  );
};

export default SiteList;
`},36144:function(m,n){n.Z=`import React from 'react';
import { Steps } from 'antd';
import { IStep } from '../type';
import styles from './index.module.less';
import { Tooltip } from '@agentscope-ai/design';
import { SparkCheckCircleLine, SparkLoadingLine } from '@agentscope-ai/icons';

interface StepsProps {
  // \u6B65\u9AA4\u5217\u8868
  list?: IStep[];
  onStepClick?: (index: number) => void;
}

const StepsList: React.FC<StepsProps> = ({ list = [], onStepClick }) => {
  return (
    <div className={styles.stepsContainer}>
      <Steps
        direction="vertical"
        size="small"
        items={list.map((step, index) => ({
          title: <Tooltip title={step.title}>{step.title}</Tooltip>,
          status:
            step.status === 'RUNNING' ? 'process' : step.status === 'FINISHED' ? 'finish' : 'wait',
          icon: step.status === 'RUNNING' ? <SparkLoadingLine className={styles.loading} /> : <SparkCheckCircleLine />,
          onClick: () => {
            // onStepClick?.(index);
          },
        }))}
      />
    </div>
  );
};

export default StepsList;
`},17812:function(m,n){n.Z=`import React, { useMemo, useState } from 'react';
import { IData, IParseData } from './type';
import styles from './index.module.less';
import ChatHeader from './Header/Chat';
import StepsList from './Steps';
import Process from './Process';
import classNames from 'classnames';
import Preview from './Preview';
import ReactDOM from 'react-dom';
import useFullscreen from '../../hooks/useFullscreen';

interface IProps {
  data: IData;
}

const DeepResearch: React.FC<IProps> = (props) => {
  const [preview, setPreview] = useFullscreen();
  const [viewIndex, setViewIndex] = useState(0);

  const cardCreateTime = useMemo(() => {
    return Date.now();
  }, []);

  const data: IParseData = useMemo(() => {
    const { steps = [], result, ...rest } = props.data?.data || {};

    return {
      steps: steps.map((step) => {
        return {
          ...step,
          startTime: parseInt(step.startTime || \`0\`),
          endTime: parseInt(step.endTime || \`0\`),
        };
      }),
      result: {
        ...result,
        startTime: parseInt(result?.startTime || \`0\`),
        endTime: parseInt(result?.endTime || \`0\`),
      },
      ...rest,
    };
  }, [props.data?.data]);

  const startTime = useMemo(() => {
    const time = Math.min(
      data.steps.reduce((acc, step) => {
        return Math.min(acc, step.startTime);
      }, Number.MAX_SAFE_INTEGER),
      data.result.startTime || Number.MAX_SAFE_INTEGER,
    );

    return time === Number.MAX_SAFE_INTEGER ? cardCreateTime : time;
  }, [data.steps, data.result, cardCreateTime]);

  const finished = useMemo(() => {
    return props.data.msgStatus === 'finished';
  }, [props.data.msgStatus]);

  return (
    <div
      className={classNames(styles.container, {
        [styles.thumbnail]: preview,
      })}
    >
      <ChatHeader
        className={styles.header}
        title={data.title}
        startTime={startTime}
        data={data}
        finished={finished}
        thumbnail={preview}
        onFullscreen={() => setPreview(true)}
      />
      <div className={styles.content}>
        <div className={styles.list}>
          <StepsList list={data.steps} onStepClick={setViewIndex} />
        </div>
        <div className={styles.view}>
          <Process list={data.steps} viewIndex={viewIndex} />
        </div>
      </div>
      {
        preview && ReactDOM.createPortal(<Preview data={data} />, document.getElementById('right-panel'))
      }
    </div>
  );
};

export default DeepResearch;
`},42153:function(m,n){n.Z=`export const formatDuration = (start: number, end: number) => {
  const durationInSeconds = Math.floor((end - start) / 1000);
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;

  const paddedMinutes = minutes.toString().padStart(2, '0');
  const paddedSeconds = seconds.toString().padStart(2, '0');

  if (hours > 0) {
    return \`\${paddedMinutes} minutes \${paddedSeconds} seconds\`;
  } else if (minutes > 0) {
    return \`\${paddedMinutes} minutes \${paddedSeconds} seconds\`;
  } else {
    return \`\${paddedSeconds} seconds\`;
  }
};
`},49756:function(m,n){n.Z=`import { SparkCopyLine, SparkReplaceLine, SparkThumbsDownLine, SparkThumbsUpLine } from "@agentscope-ai/icons";
import { DefaultCards } from "@agentscope-ai/chat";

export default function () {
  return <DefaultCards.FooterActions data={[
    {
      icon: <SparkReplaceLine />, label: '', onClick: () => { }
    },
    {
      icon: <SparkCopyLine />, label: '', onClick: () => { }
    },
    {
      icon: <SparkThumbsUpLine />, label: '', onClick: () => { }
    },
    {
      icon: <SparkThumbsDownLine />, label: '', onClick: () => { }
    }
  ]} />
}`},43167:function(m,n){n.Z=`import { SparkCode01Line, SparkExitFullscreenLine, SparkFullscreenLine, SparkPlayCircleFill } from '@agentscope-ai/icons';
import useStyle from './style';
import { IconButton, CodeBlock, Button } from '@agentscope-ai/design';
import { ReactNode, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import RightPanel, { RightPanelContent, RightPanelHeader } from '../../components/RightPanel';
import useFullscreen from '../../hooks/useFullscreen';


export default function (props: { data: { title: string, content: string, loading?: boolean } }) {
  const [fullscreen, setFullscreen] = useFullscreen();
  const data = props.data;
  const { styles } = useStyle();

  const code = <CodeBlock value={data.content} language="html" readOnly />
  return <div className={styles.webDev}>
    <div className={styles.header}>
      <div className={styles.left}>
        <SparkCode01Line style={{ fontSize: 20 }} />
        <span className={styles.title}>
          {data.title}
        </span>
      </div>
      {
        fullscreen ?
          null :
          <IconButton onClick={() => setFullscreen(!fullscreen)} bordered={false} icon={<SparkFullscreenLine />} />
      }
    </div>

    {
      fullscreen ?
        ReactDOM.createPortal(<RightPanelWebDev code={code} title={data.title} loading={data.loading} content={data.content} />, document.getElementById('right-panel')) :
        <div className={styles.content}>
          {code}
        </div>
    }
  </div>
}

function RightPanelWebDev({ code, title, loading, content }: { code: ReactNode, title: string, loading?: boolean, content: string }) {
  const [preview, setPreview] = useState(false);
  const { styles } = useStyle();

  const contentNode = preview ? <iframe className={styles.iframe} srcDoc={content} /> : code;

  return <RightPanel
    header={<RightPanelHeader title={title} actions={
      <Button
        icon={<SparkPlayCircleFill />}
        type="primaryLess" loading={loading} onClick={() => {
          if (loading) return;
          setPreview(!preview);
        }}>{
          preview ? 'Exit' : 'Preview'
        }</Button>
    } />}
    content={<RightPanelContent>{contentNode}</RightPanelContent>}>
  </RightPanel>
}`},35625:function(m,n){n.Z=`import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  webDev: {
    width: '100%',
    backgroundColor: token.colorBgBase,
    border: \`1px solid \${token.colorBorderSecondary}\`,
    borderRadius: token.borderRadius,
    overflow: 'hidden',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
    padding: '0 16px',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'claude clone',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: 600,
  },

  content: {},

  iframe: {
    border: 0,
    display: 'block',
    width: '100%',
    height: '100%',
  },
}));
`},69573:function(m,n){n.Z="export default `data:application/octet-stream;base64,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`;\n"},8980:function(m,n){n.Z=`import { ChatAnywhere, ChatAnywhereRef, DefaultCards, TMessage, uuid } from '@agentscope-ai/chat';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { SparkAttachmentLine, SparkCopyLine, SparkReplaceLine, SparkThumbsDownLine, SparkThumbsUpLine } from '@agentscope-ai/icons';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Welcome from '../Welcome';
import ModeSelect from '../ModeSelect';
import OptionsSelect from '../OptionsSelect';
import PresetSelect from '../PresetSelect';
import { DemoContext } from '../../context/DemoProvider';
import { produce } from 'immer';
import mock from '../../mock';
import WebDev from '../../cards/WebDev';
import DeepResearch from '../../cards/DeepResearch';
import useStyle from './style';
import { RightPanelPortal } from '../RightPanel';
import Footer from '../../cards/Footer';

export default function Claude() {
  const { styles } = useStyle()
  const { demoContext, setDemoContext, getDemoContext } = useContext(DemoContext)
  const ref = useRef<ChatAnywhereRef>();
  const currentQA = useRef<{
    query?: Partial<TMessage> & { id: string },
    answer?: Partial<TMessage> & { id: string },
  }>({});


  const onSubmit = useCallback(async (data) => {
    ref.current.setLoading(true);

    setDemoContext({ initial: false });
    currentQA.current.answer = undefined;
    currentQA.current.query = {
      id: uuid(),
      cards: [{
        code: 'Text',
        data: {
          content: data.query,
          msgStatus: 'finished',
        }
      }],
      role: 'user',
      msgStatus: 'finished',
    };
    ReactDOM.flushSync(() => {
      ref.current.updateMessage(currentQA.current.query);
    });


    currentQA.current.answer = {
      id: uuid(),
      role: 'assistant',
      content: '',
      cards: [],
      msgStatus: 'generating',
    }

    ref.current.updateMessage(currentQA.current.answer);

    await mock({ getDemoContext, currentQA, ref });
    await sleep(100);

    onFinish('finished');
    ref.current.setLoading(false);
  }, []);

  const onFinish = useCallback((status: 'finished' | 'interrupted' = 'finished') => {
    const prevMessage = ref.current
      .getMessages()
      .find((item) => item.id === currentQA.current.answer.id);

    const nextMessage = produce(prevMessage, (draft) => {
      draft.msgStatus = status;
      (draft.cards || []).forEach(item => {
        item.data.msgStatus = status;
        item.data.loading = false;
      });


      draft.cards.push({
        code: 'Footer',
        data: {
          left: <Footer />
        }
      })
    });

    ref.current.updateMessage(nextMessage);

  }, []);

  const onStop = useCallback(() => { }, []);

  return <div className={styles.container}>
    <div className={styles.chat} style={{ width: demoContext.canvas ? 480 : '100%' }}>
      <ChatAnywhere
        cardConfig={{ WebDev, DeepResearch }}
        uiConfig={{
          disclaimer: 'AI can also make mistakes, so please check carefully and use it with caution',
          header: <Header chat={ref} />,
          welcome: <Welcome />,
        }}
        ref={ref}
        onInput={{
          zoomable: !demoContext.initial,
          morePrefixActions: <OptionsSelect />,
          beforeUI: <ModeSelect />,
          afterUI: <PresetSelect onSubmit={onSubmit} />,
          placeholder: 'please type here',
          onSubmit: onSubmit
        }}
        onStop={onStop}
        onUpload={[{
          multiple: false,
          icon: <SparkAttachmentLine />,
          customRequest(options) {
            options.onSuccess({
              url: URL.createObjectURL(options.file as Blob)
            });
          }
        }]}
      ></ChatAnywhere>
    </div>
    <RightPanelPortal />
  </div>
}



function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}`},80885:function(m,n){n.Z=`import useStyle from './style';
import ModelSelect from '../ModelSelect';
import { IconButton } from '@agentscope-ai/design';
import { useContext } from 'react';
import { SparkClearLine, SparkMoonLine, SparkReplaceLine, SparkSunLine } from '@agentscope-ai/icons';
import { ConfigProviderContext } from '../../context/ConfigProvider';
import { ChatAnywhereRef } from '@agentscope-ai/chat';
import { Flex } from 'antd';

export default function (props: { chat: { current: ChatAnywhereRef } }) {
  const { styles } = useStyle();

  const { dark, setDark } = useContext(ConfigProviderContext);

  return <div className={styles.header}>
    <ModelSelect size='small' />
    <Flex gap={8}>
      <IconButton
        bordered={false}
        onClick={() => props.chat.current.removeAllMessages()}
        icon={<SparkClearLine />}
      />
      {/* <IconButton
        bordered={false}
        onClick={() => setDark(!dark)}
        icon={!dark ? <SparkSunLine /> : <SparkMoonLine />}
      /> */}
    </Flex>
  </div>
}`},18103:function(m,n){n.Z=`import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  header: css\`
    width: 100%;
    height: 64px;
    padding: 0 24px 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  \`,
}));`},47820:function(m,n){n.Z=`import { SparkCode01Fill, SparkCode01Line, SparkPaperLine } from "@agentscope-ai/icons";
import { ChatInput } from "@agentscope-ai/chat";
import { useContext } from "react";
import { DemoContext } from "../../context/DemoProvider";

export default function () {
  const { demoContext, setDemoContext } = useContext(DemoContext);
  if (demoContext.initial && !demoContext.mode) return null;

  return <ChatInput.ModeSelect options={[
    {
      icon: <SparkCode01Line />,
      label: 'Web Development',
      value: 'WebDev',
    },
    {
      icon: <SparkPaperLine />,
      label: 'Deep Research',
      value: 'DeepResearch',
    },
  ]}
    value={demoContext.mode}
    onChange={mode => setDemoContext({ mode })}
  />
}`},41845:function(m,n){n.Z=`import { Dropdown } from '@agentscope-ai/design';
import React, { useContext } from 'react';
import useStyle from './styles';
import { SparkDownLine, SparkTrueLine } from '@agentscope-ai/icons';
import { DemoContext } from '../../context/DemoProvider';


const defaultImage =
  'https://gw.alicdn.com/imgextra/i1/O1CN01qYTgPn1Oaj6j7oc14_!!6000000001722-55-tps-24-25.svg';


const MODEL_OPTIONS = [
  {
    value: 'claude-3.5-sonnet',
    label: 'Claude 3.5 Sonnet',

  },
  {
    value: 'claude-4.1-Opus',
    label: 'Claude 4.1 Opus',

  },
];

export default function SimpleModelSelect(props: { size: 'small' | 'large' }) {
  const { size = 'large' } = props;
  const { styles, cx } = useStyle();
  const { demoContext, setDemoContext } = useContext(DemoContext);
  const selectedModel = MODEL_OPTIONS.find((item) => item.value === demoContext.model);

  return (
    <div>
      <Dropdown
        menu={{
          items: MODEL_OPTIONS.map(item => ({
            key: item.value,
            label: <Item {...item} onClick={() => {
              setDemoContext({ model: item.value })
            }} selected={demoContext.model === item.value} />,
          }))
        }}
      >
        <div className={cx(styles.display, styles[size])}>
          <img src={defaultImage} />
          {selectedModel?.label}
          <SparkDownLine />
        </div>
      </Dropdown>
    </div>
  );
}

interface ItemProps {
  value: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}


function Item(props: ItemProps) {
  const { styles } = useStyle();

  return (
    <div onClick={() => props.onClick()} className={styles.item}>
      <div className={styles.itemIcon}>
        <img src={defaultImage} width={14} height={14} />
      </div>


      <div className={styles.itemTitle}>{props.label}</div>
      {props.selected && <SparkTrueLine />}
    </div>
  );
}

`},41129:function(m,n){n.Z=`import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  display: {
    fontFamily: 'claude clone',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    color: token.colorText,
  },

  small: {
    fontSize: 14,
    height: 20,

    img: {
      width: 20,
      height: 20,
      padding: 2.5,
      background: token.colorPrimaryBg,
      borderRadius: 4,
    },
  },
  large: {
    fontSize: 20,
    height: 40,

    img: {
      width: 24,
      height: 24,
    },
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  itemIcon: {
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  itemTitle: {
    fontFamily: 'claude clone',
  },
}));
`},60062:function(m,n){n.Z=`import { Button, ButtonProps } from '@agentscope-ai/design'
import { DemoContext } from '../../context/DemoProvider'
import { useContext } from 'react'
import { SparkDeepSearchLine, SparkDeepThinkLine } from '@agentscope-ai/icons'
import { createStyles } from 'antd-style'

export default function () {
  const { demoContext, setDemoContext } = useContext(DemoContext)

  return <>
    <OptionButton
      icon={<SparkDeepThinkLine />}
      selected={demoContext.enableThinking}
      onClick={() => setDemoContext({ enableThinking: !demoContext.enableThinking })}>Deep Thinking</OptionButton>
    <OptionButton
      selected={demoContext.enableSearch}
      icon={<SparkDeepSearchLine />}
      onClick={() => setDemoContext({ enableSearch: !demoContext.enableSearch })}>Web Search</OptionButton>
  </>
}

function OptionButton(props: ButtonProps & { selected: boolean }) {
  const { styles, cx } = useStyle();

  return <Button {...props}
    className={
      cx(styles.btn, {
        [styles.selected]: props.selected,
      })
    } />
}

const useStyle = createStyles(({ token }) => {
  return {
    btn: {
      gap: 6,

    },
    selected: {
      color: \`\${token.colorPrimary} !important\`,
      backgroundColor: \`\${token.colorPrimaryBg} !important\`,
      borderColor: \`\${token.colorPrimaryBg} !important\`,
    }
  }
});`},42038:function(m,n){n.Z=`import { SparkUpperrightArrowLine } from "@agentscope-ai/icons"
import { Skeleton } from "antd"
import { createStyles } from "antd-style"


const OPTIONS = [
  {
    prompt: 'deep research on the topic of city pop',
  },
  {
    prompt: 'deep research on the topic of city pop',
  },
  {
    prompt: 'deep research on the topic of city pop',
  },
]

export default function (props: { onSubmit: (data: { query: string }) => void }) {
  const { styles } = useStyle()

  return <div className={styles.preset}>
    {OPTIONS.map(item => (
      <div key={item.prompt} className={styles.presetItem} onClick={() => props.onSubmit({ query: item.prompt })}>
        <div className={styles.children}>
          <img width={24} height={24} src="https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg" />
          <div className={styles.prompt}>{item.prompt}</div>
          <div className={styles.skeletonContainer}>
            <div className={styles.skeletonLine} />
            <div className={styles.skeletonLine} />
            <div className={styles.skeletonShortLine} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{item.prompt}</div>
          <SparkUpperrightArrowLine />
        </div>
      </div>
    ))}
  </div>
}

const useStyle = createStyles(({ token, css, cx }) => {
  const content = cx(css\`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: \${token.colorBgBase};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 48px;
    padding: 0 12px;
    border-top: 1px solid \${token.colorBorderSecondary};
    opacity: 0;
    transition: all 0.3s ease;
  \`);


  return {
    preset: {
      marginTop: 32,
      display: 'flex',
      justifyContent: 'center',
      gap: 12,
    },
    presetItem: css\`
      position: relative;
      display: flex;
      border: 1px solid \${token.colorBorderSecondary};
      border-radius: 8px;
      height: 200px;
      flex: 1;
      cursor: pointer;
      overflow: hidden;
      padding: 24px;
      background-color: \${token.colorFillTertiary};
      &:hover {
        border-color: \${token.colorPrimary};

        .\${content} {
          opacity: 1;
        }
      }
    \`,
    children: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      height: '100%',
      width: '100%',
      backgroundColor: token.colorBgBase,
      borderRadius: 8,
      padding: '20px 12px',
    },
    prompt: css\`
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
      color: \${token.colorText};
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    \`,
    content,
    title: css\`
      font-size: 14px;
      color: \${token.colorText};
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    \`,
    skeletonContainer: css\`
      display: flex;
      flex-direction: column;
      gap: 8px;
    \`,
    skeletonLine: css\`
      width: 100%;
      height: 8px;
      background-color: \${token.colorFillTertiary};
      border-radius: 99px;
    \`,
    skeletonShortLine: css\`
      width: 50%;
      height: 8px;
      background-color: \${token.colorFillTertiary};
      border-radius: 99px;
    \`,
  }
})`},43659:function(m,n){n.Z=`import { SparkUpperrightArrowLine } from "@agentscope-ai/icons"
import { createStyles } from "antd-style"


const WEB_DEV_PRESET_OPTIONS = [
  {
    prompt: 'write a landing page for a fruit shop',
    image: 'https://gw.alicdn.com/imgextra/i1/O1CN01ObcQyY1vyQveMjl76_!!6000000006241-55-tps-390-200.svg',

  },
  {
    prompt: 'write a portfolio website',
    image: 'https://gw.alicdn.com/imgextra/i2/O1CN01NciUQw1tzgmhPLmfF_!!6000000005973-55-tps-390-200.svg',
  }
]

export default function (props: { onSubmit: (data: { query: string }) => void }) {
  const { styles } = useStyle()

  return <div className={styles.preset}>
    {WEB_DEV_PRESET_OPTIONS.map(item => (
      <div key={item.prompt} className={styles.presetItem} onClick={() => props.onSubmit({ query: item.prompt })}>
        <img src={item.image} alt={item.prompt} />
        <div className={styles.content}>
          <div className={styles.title}>{item.prompt}</div>
          <SparkUpperrightArrowLine />
        </div>
      </div>
    ))}
  </div>
}

const useStyle = createStyles(({ token, css, cx }) => {
  const content = cx(css\`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: \${token.colorBgBase};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 48px;
    border-top: 1px solid \${token.colorBorderSecondary};
    opacity: 0;
    transition: all 0.3s ease;
  \`);


  return {
    preset: {
      marginTop: 32,
      display: 'flex',
      justifyContent: 'center',
      gap: 12,
    },
    presetItem: css\`
      position: relative;
      display: flex;
      border: 1px solid \${token.colorBorderSecondary};
      border-radius: 8px;
      cursor: pointer;
      overflow: hidden;
      &:hover {
        border-color: \${token.colorPrimary};

        .\${content} {
          opacity: 1;
        }
      }
    \`,
    content,
    title: css\`
      font-size: 14px;
      color: \${token.colorText};
    \`,
  }
})`},13434:function(m,n){n.Z=`import { useContext } from "react";
import { DemoContext } from "../../context/DemoProvider";
import { SparkAiEditLine, SparkCode01Line, SparkEffciencyLine, SparkPaperLine } from "@agentscope-ai/icons";
import { Button } from "@agentscope-ai/design";
import { createStyles } from "antd-style";
import { ChatAnywhereRef } from "@agentscope-ai/chat";
import WebDevPreset from "./WebDevPreset";
import DeepResearchPreset from "./DeepResearchPreset";

const PRESET_OPTIONS = [
  {
    icon: <SparkCode01Line />,
    label: 'Web Development',
    value: 'WebDev',
    type: 'mode',
  },
  {
    icon: <SparkPaperLine />,
    label: 'Deep Research',
    value: 'DeepResearch',
    type: 'mode',
  },
  {
    icon: <SparkAiEditLine />,
    label: 'Write Article',
    value: 'Write Article',
    type: 'quick',
  },

  {
    icon: <SparkEffciencyLine />,
    label: 'Brainstorm',
    value: 'Brainstorm',
    type: 'quick',
  },
]

export default function (props: { onSubmit: (data: { query: string }) => void }) {
  const { demoContext, setDemoContext } = useContext(DemoContext);
  const { styles } = useStyle()

  if (!demoContext.initial) return null;

  const mode = demoContext.mode;

  if (mode === 'WebDev') return <WebDevPreset onSubmit={props.onSubmit} />;
  if (mode === 'DeepResearch') return <DeepResearchPreset onSubmit={props.onSubmit} />;


  return <div className={styles.preset}>
    {PRESET_OPTIONS.map(item => (
      <div key={item.value}>
        <Button icon={item.icon} onClick={() => {
          if (item.type === 'mode') {
            setDemoContext({ mode: item.value })
          } else {
            props.onSubmit({ query: item.value })
          }
        }}>{item.label}</Button>
      </div>
    ))}
  </div>
}


const useStyle = createStyles(({ token }) => {
  return {
    preset: {
      marginTop: 32,
      display: 'flex',
      justifyContent: 'center',
      gap: 12,
    }
  }
})`},72595:function(m,n){n.Z=`import { ReactNode, useContext, useEffect } from "react"
import useStyle from "./style"
import { DemoContext } from "../../context/DemoProvider";
import { IconButton } from "@agentscope-ai/design";
import { SparkFalseLine } from "@agentscope-ai/icons";

export default function RightPanel(props: { header: ReactNode, content: ReactNode }) {
  const { styles } = useStyle();
  const { demoContext, setDemoContext, getDemoContext } = useContext(DemoContext)
  const { header, content } = props;

  useEffect(() => {
    setDemoContext({ canvas: true });
    return () => {
      setDemoContext({ canvas: false });
    }
  }, []);

  return <div className={styles.rightPanel}>
    {header}
    {content}
  </div>
}

export const RightPanelContent = (props: { children: ReactNode }) => {
  const { styles } = useStyle();
  return <div className={styles.content}>
    {props.children}
  </div>
}

export const RightPanelHeader = (props: { title: string, actions: ReactNode }) => {
  const { demoContext, setDemoContext, getDemoContext } = useContext(DemoContext)
  const { styles } = useStyle();
  return <div className={styles.header}>
    <div className={styles.headerLeft}>
      <IconButton bordered={false} icon={<SparkFalseLine />} onClick={() => {
        setDemoContext({ canvas: false });
      }} />
      <span className={styles.title}>{props.title}</span>
    </div>
    <div className={styles.headerRight}>
      {props.actions}

    </div>

  </div>
}

export const useRightPanel = () => { }

export const RightPanelPortal = () => {
  return <div id="right-panel" style={{ flex: 1, width: 0 }}>

  </div>
} `},51966:function(m,n){n.Z=`import { createGlobalStyle, createStyles } from 'antd-style';
import ModelSelect from '../ModelSelect';

export default function () {
  const { styles } = useStyle();

  return <>
    <Style />
    <div className={styles.welcome}>
      <div className={styles.h1}>Welcome to LLMs Experience</div>
      <div className={styles.h2}>Start with <ModelSelect size="large" /></div>
    </div>
  </>
}

const useStyle = createStyles(({ css, token }) => ({
  welcome: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    marginTop: 'calc(10vh + 80px + 64px)',
    marginBottom: 20,

  },
  h1: {
    fontFamily: 'claude clone',
    fontSize: 32,
    lineHeight: '48px',
    fontWeight: '500',
  },
  h2: {
    fontFamily: 'claude clone',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    fontSize: 20,
    lineHeight: '32px',
    color: token.colorTextSecondary,
  },
}));



const Style = createGlobalStyle\`
.sps-chat-anywhere-chat-welcome {
  height: auto !important;  
}\`



`},40047:function(m,n){n.Z=`import { ConfigProvider } from '@agentscope-ai/design';
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';
import React from 'react';


export const ConfigProviderContext = React.createContext<{
  dark?: boolean;
  setDark: (dark: boolean) => void;
}>(undefined);

export default function (props) {
  const [dark, setDark] = useState(false);
  const currentTheme = dark ? darkTheme : lightTheme;

  return <>
    <ConfigProviderContext.Provider value={{
      dark,
      setDark,
    }}>
      <ConfigProvider
        {...currentTheme}
        style={{ height: '100%' }}
        iconfont='https://at.alicdn.com/t/a/font_4807885_6wjcpzayws6.js'
        prefix='sps'
        prefixCls="sps"
      >
        {props.children}
      </ConfigProvider>
    </ConfigProviderContext.Provider>
  </>;
}`},81677:function(m,n){n.Z=`import { useGetState } from 'ahooks';
import React, { useState } from 'react';


type TContext = {
  model: string;
  enableSearch: boolean;
  enableThinking: boolean;
  mode?: string;
  initial?: boolean;
  canvas: boolean;
}

export const DemoContext = React.createContext<{
  demoContext: TContext,
  setDemoContext: (data: Partial<TContext>) => void,
  getDemoContext: () => TContext
}>(undefined);




export default function (props: { children: React.ReactNode }) {
  const [demoContext, setDemoContext, getDemoContext] = useGetState<TContext>({
    model: 'claude-3.5-sonnet',
    enableSearch: false,
    enableThinking: false,
    initial: true,
    mode: undefined,
    canvas: false,
  });


  return <DemoContext.Provider value={{
    demoContext, setDemoContext(data) {
      setDemoContext(v => {
        return { ...v, ...data }
      })
    }, getDemoContext
  }}>
    {props.children}
  </DemoContext.Provider>
}`},27528:function(m,n){n.Z=`import { generateThemeByToken } from '@agentscope-ai/design';

const lightTokens = {
  borderRadiusXS: 4,
  borderRadiusSM: 6,
  borderRadius: 8,
  borderRadiusLG: 12,
  borderRadiusXL: 16,
  borderRadiusFull: 999,
  wireframe: false,
  colorPrimaryBg: 'rgba(239, 237, 229, 1)',
  colorPrimaryBgHover: 'rgba(239, 237, 229, 1)',
  colorPrimaryBorder: 'rgba(186, 90, 59, 1)',
  colorPrimaryBorderHover: 'rgba(194, 98, 66, 1)',
  colorPrimaryHover: 'rgba(194, 98, 66, 1)',
  colorPrimary: 'rgba(208, 110, 78, 1)',
  colorPrimaryActive: 'rgba(194, 98, 66, 1)',
  colorPrimaryTextHover: 'rgba(186, 90, 59, 1)',
  colorPrimaryText: 'rgba(186, 90, 59, 1)',
  colorPrimaryTextActive: 'rgba(186, 90, 59, 1)',
  colorTextBase: 'rgba(26, 26, 29, 1)',
  colorBgBase: 'rgba(255, 255, 255, 1)',
  colorText: 'rgba(20, 20, 19, 0.88)',
  colorTextSecondary: 'rgba(20, 20, 19, 0.65)',
  colorTextTertiary: 'rgba(20, 20, 19, 0.45)',
  colorTextQuaternary: 'rgba(20, 20, 19, 0.25)',
  colorBorder: 'rgba(193, 192, 187, 1)',
  colorBorderSecondary: 'rgba(234, 233, 231, 1)',
  colorFill: 'rgba(43, 27, 0, 0.12)',
  colorFillSecondary: 'rgba(43, 27, 0, 0.08)',
  colorFillTertiary: 'rgba(43, 27, 0, 0.03)',
  colorFillQuaternary: 'rgba(43, 27, 0, 0.02)',
  colorBgContainer: 'rgba(255, 255, 255, 1)',
  colorBgElevated: 'rgba(255, 255, 255, 1)',
  colorBgLayout: 'rgba(249, 248, 244, 1)',
  colorBgSpotlight: 'rgba(20, 20, 19, 0.85)',
  colorBgMask: 'rgba(0, 0, 0, 0.45)',
  colorInfo: 'rgba(11, 131, 241, 1)',
  colorInfoHover: 'rgba(94, 188, 255, 1)',
  colorInfoBorder: 'rgba(135, 209, 255, 1)',
  colorInfoText: 'rgba(11, 131, 241, 1)',
  colorInfoBg: 'rgba(230, 247, 255, 1)',
  colorInfoBgHover: 'rgba(176, 227, 255, 1)',
  colorInfoBorderHover: 'rgba(94, 188, 255, 1)',
  colorSuccess: 'rgba(91, 185, 139, 1)',
  colorSuccessHover: 'rgba(171, 212, 190, 1)',
  colorSuccessBg: 'rgba(235, 250, 240, 1)',
  colorSuccessBgHover: 'rgba(223, 237, 228, 1)',
  colorSuccessBorder: 'rgba(211, 224, 217, 1)',
  colorSuccessBorderHover: 'rgba(171, 212, 190, 1)',
  colorWarning: 'rgba(250, 173, 20, 1)',
  colorWarningHover: 'rgba(255, 214, 102, 1)',
  colorWarningBg: 'rgba(255, 251, 230, 1)',
  colorWarningBgHover: 'rgba(255, 241, 184, 1)',
  colorWarningBorder: 'rgba(255, 229, 143, 1)',
  colorWarningBorderHover: 'rgba(255, 214, 102, 1)',
  colorError: 'rgba(255, 77, 79, 1)',
  colorErrorHover: 'rgba(255, 120, 117, 1)',
  colorErrorBg: 'rgba(255, 242, 240, 1)',
  colorErrorBgHover: 'rgba(255, 241, 240, 1)',
  colorErrorBorder: 'rgba(255, 204, 199, 1)',
  colorErrorBorderHover: 'rgba(255, 163, 158, 1)',
  colorLink: 'rgba(0, 77, 255, 1)',
  boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.08)',
  boxShadowSecondary:
    '0px 12px 24px -16px rgba(0, 0, 0, 0.06), 0px 8px 40px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.04)',
  colorTextWhite: 'rgba(255, 255, 255, 1)',
  colorFillDisable: 'rgba(235, 235, 232, 1)',
  colorPurple: 'rgba(97, 92, 237, 1)',
  colorPurpleHover: 'rgba(97, 92, 237, 1)',
  colorPurpleBg: 'rgba(226, 222, 255, 0.8)',
  colorPink: 'rgba(236, 72, 153, 1)',
  colorPinkHover: 'rgba(236, 72, 153, 1)',
  colorPinkBg: 'rgba(251, 220, 239, 0.8)',
  colorYellow: 'rgba(234, 179, 8, 1)',
  colorYellowHover: 'rgba(234, 179, 8, 1)',
  colorYellowBg: 'rgba(255, 250, 184, 0.8)',
  colorOrange: 'rgba(250, 129, 37, 1)',
  colorOrangeHover: 'rgba(250, 129, 37, 1)',
  colorOrangeBg: 'rgba(255, 232, 201, 0.8)',
  colorTeal: 'rgba(20, 184, 166, 1)',
  colorTealHover: 'rgba(20, 184, 166, 1)',
  colorTealBg: 'rgba(200, 244, 233, 0.8)',
  colorBlue: 'rgba(0, 144, 255, 1)',
  colorBlueHover: 'rgba(0, 144, 255, 1)',
  colorBlueBg: 'rgba(194, 229, 255, 0.8)',
  colorMauve: 'rgba(142, 140, 153, 1)',
  colorMauveHover: 'rgba(142, 140, 153, 1)',
  colorMauveBg: 'rgba(239, 240, 243, 0.8)',
  boxShadowTertiary:
    '0px 12px 32px -16px rgba(0, 0, 0, 0.24), 0px 12px 60px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.04)',
  boxShadowTertiaryLeft:
    '-12px 0px 32px -16px rgba(0, 0, 0, 0.24), -12px 0px 60px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.04)',
  boxShadowInput:
    '0px 12px 24px -16px rgba(54, 54, 73, 0.04), 0px 12px 40px 0px rgba(51, 51, 71, 0.08), 0px 0px 1px 0px rgba(44, 44, 54, 0.02)',
};
const darkTokens = {
  borderRadiusXS: 4,
  borderRadiusSM: 6,
  borderRadius: 8,
  borderRadiusLG: 12,
  borderRadiusXL: 16,
  borderRadiusFull: 999,
  wireframe: false,
  colorPrimaryBg: 'rgba(41, 35, 29, 1)',
  colorPrimaryBgHover: 'rgba(70, 60, 50, 1)',
  colorPrimaryBorder: 'rgba(133, 80, 40, 1)',
  colorPrimaryBorderHover: 'rgba(146, 102, 52, 1)',
  colorPrimaryHover: 'rgba(156, 88, 57, 1)',
  colorPrimary: 'rgba(156, 88, 57, 1)',
  colorPrimaryActive: 'rgba(146, 102, 52, 1)',
  colorPrimaryTextHover: 'rgba(133, 80, 40, 1)',
  colorPrimaryText: 'rgba(160, 96, 63, 1)',
  colorPrimaryTextActive: 'rgba(133, 80, 40, 1)',
  colorTextBase: 'rgba(230, 230, 230, 1)',
  colorBgBase: 'rgba(15, 13, 12, 1)',
  colorText: 'rgba(230, 230, 230, 0.9)',
  colorTextSecondary: 'rgba(180, 180, 180, 0.8)',
  colorTextTertiary: 'rgba(255, 255, 255, 0.6)',
  colorTextQuaternary: 'rgba(255, 255, 255, 0.3)',
  colorBorder: 'rgba(82, 76, 73, 1)',
  colorBorderSecondary: 'rgba(50, 46, 43, 1)',
  colorFill: 'rgba(82, 79, 74, 0.32)',
  colorFillSecondary: 'rgba(83, 79, 72, 0.24)',
  colorFillTertiary: 'rgba(50, 50, 50, 0.26)',
  colorFillQuaternary: 'rgba(67, 64, 59, 0.12)',
  colorBgContainer: 'rgba(52, 50, 47, 1)',
  colorBgElevated: 'rgba(47, 42, 39, 1)',
  colorBgLayout: 'rgba(26, 26, 24, 1)',
  colorBgSpotlight: 'rgba(10, 10, 10, 0.85)',
  colorBgMask: 'rgba(0, 0, 0, 0.6)',
  colorInfo: 'rgba(11, 131, 241, 1)',
  colorInfoHover: 'rgba(94, 188, 255, 1)',
  colorInfoBorder: 'rgba(57, 144, 201, 1)',
  colorInfoText: 'rgba(11, 131, 241, 1)',
  colorInfoBg: 'rgba(17, 34, 51, 1)',
  colorInfoBgHover: 'rgba(38, 72, 102, 1)',
  colorInfoBorderHover: 'rgba(94, 188, 255, 1)',
  colorSuccess: 'rgba(91, 185, 139, 1)',
  colorSuccessHover: 'rgba(116, 164, 124, 1)',
  colorSuccessBg: 'rgba(41, 54, 49, 1)',
  colorSuccessBgHover: 'rgba(63, 81, 71, 1)',
  colorSuccessBorder: 'rgba(115, 163, 119, 1)',
  colorSuccessBorderHover: 'rgba(171, 212, 190, 1)',
  colorWarning: 'rgba(250, 173, 20, 1)',
  colorWarningHover: 'rgba(255, 140, 40, 1)',
  colorWarningBg: 'rgba(45, 35, 26, 1)',
  colorWarningBgHover: 'rgba(77, 59, 35, 1)',
  colorWarningBorder: 'rgba(255, 166, 40, 1)',
  colorWarningBorderHover: 'rgba(255, 214, 102, 1)',
  colorError: 'rgba(255, 77, 79, 1)',
  colorErrorHover: 'rgba(238, 101, 78, 1)',
  colorErrorBg: 'rgba(43, 11, 8, 1)',
  colorErrorBgHover: 'rgba(74, 42, 40, 1)',
  colorErrorBorder: 'rgba(238, 91, 78, 1)',
  colorErrorBorderHover: 'rgba(255, 163, 158, 1)',
  colorLink: 'rgba(77, 125, 255, 1)',
  colorTextWhite: 'rgba(255, 255, 255, 1)',
  colorFillDisable: 'rgba(90, 90, 90, 1)',
  colorPurple: 'rgba(97, 92, 237, 1)',
  colorPurpleHover: 'rgba(97, 92, 237, 1)',
  colorPurpleBg: 'rgba(60, 53, 85, 1)',
  colorPink: 'rgba(236, 72, 153, 1)',
  colorPinkHover: 'rgba(236, 72, 153, 1)',
  colorPinkBg: 'rgba(74, 42, 58, 1)',
  colorYellow: 'rgba(234, 179, 8, 1)',
  colorYellowHover: 'rgba(234, 179, 8, 1)',
  colorYellowBg: 'rgba(77, 71, 32, 1)',
  colorOrange: 'rgba(250, 129, 37, 1)',
  colorOrangeHover: 'rgba(250, 129, 37, 1)',
  colorOrangeBg: 'rgba(255, 232, 201, 0.8)',
  colorTeal: 'rgba(20, 184, 166, 1)',
  colorTealHover: 'rgba(20, 184, 166, 1)',
  colorTealBg: 'rgba(42, 70, 64, 1)',
  colorBlue: 'rgba(0, 144, 255, 1)',
  colorBlueHover: 'rgba(0, 144, 255, 1)',
  colorBlueBg: 'rgba(42, 59, 78, 0.8)',
  colorMauve: 'rgba(142, 140, 153, 1)',
  colorMauveHover: 'rgba(142, 140, 153, 1)',
  colorMauveBg: 'rgba(46, 46, 50, 0.8)',
  boxShadow: '0px 4px 6px 0px rgba(255, 255, 255, 0.08)',
  boxShadowSecondary:
    '0px 12px 24px -16px rgba(255, 255, 255, 0.04), 0px 8px 40px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.03)',
  boxShadowTertiary:
    '0px 12px 32px -16px rgba(255, 255, 255, 0.16), 0px 12px 60px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.04)',
  boxShadowTertiaryLeft:
    '-12px 0px 32px -16px rgba(255, 255, 255, 0.16), -12px 0px 60px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.04)',
  boxShadowInput:
    '0px 12px 24px -16px rgba(254, 254, 255, 0.04), 0px 12px 40px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.02)',
};

// @ts-ignore
export const darkTheme = generateThemeByToken(darkTokens, true);
// @ts-ignore
export const lightTheme = generateThemeByToken(lightTokens, false);
`},61553:function(m,n){n.Z=`import { useContext, useEffect, useRef, useState } from "react";
import { DemoContext } from "../context/DemoProvider";
import { useUnmount } from 'ahooks';

const fullScreenMap = {};
function useFullscreen(id?: string) {

  const idRef = useRef(id || Math.random().toString());
  const { demoContext } = useContext(DemoContext)
  const [fullscreen, setFullscreen] = useState(fullScreenMap[idRef.current]);


  useEffect(() => {
    fullScreenMap[idRef.current] = [fullscreen, setFullscreen];
  }, [fullscreen, setFullscreen])


  useUnmount(() => {
    delete fullScreenMap[idRef.current];
  })


  useEffect(() => {
    if (!demoContext.canvas) {
      for (const key in fullScreenMap) {
        fullScreenMap[key][0] = false;
        fullScreenMap[key][1](false);
      }
    }
  }, [demoContext.canvas])

  return [fullscreen, (value) => {
    for (const key in fullScreenMap) {
      fullScreenMap[key][0] = false;
      fullScreenMap[key][1](false);
    }

    fullScreenMap[idRef.current] = value;
    setFullscreen(value);
  }]
}


export default useFullscreen;`},3491:function(m,n){n.Z=`import Chat from './components/Chat';
import ConfigProvider from './context/ConfigProvider';
import DemoProvider from './context/DemoProvider';
import Style from './style';

export default function () {

  return <ConfigProvider>
    <Style />
    <DemoProvider>
      <Chat />
    </DemoProvider>
  </ConfigProvider>
}`},55397:function(m,n){n.Z=`import { produce } from 'immer';
import deepResearchContent from './deepResearchContent';
import sleep from './sleep';

export default async function (currentQA, chatRef) {
  await sleep(1000);

  const prevMessage = chatRef.current
    .getMessages()
    .find((item) => item.id === currentQA.current.answer.id);

  const nextMessage = produce(prevMessage, (draft) => {
    draft.cards.push({
      code: 'Text',
      data: {
        content: 'I am conducting in-depth research on the topic you provided.',
        msgStatus: 'finished',
        className: 'claude-clone-font',
      },
    });

    draft.cards.push({
      code: 'DeepResearch',
      data: {
        data: {
          title: 'loading...',
          steps: [],
        },
      },
    });
  });

  chatRef.current.updateMessage(nextMessage);
  await sleep(100);

  for (const chunk of mock()) {
    await sleep(1000);

    const prevMessage = chatRef.current
      .getMessages()
      .find((item) => item.id === currentQA.current.answer.id);

    const nextMessage = produce(prevMessage, (draft) => {
      draft.cards[1].data.data = chunk;
    });

    chatRef.current.updateMessage(nextMessage);
  }
}

function mock() {
  const steps = [
    {
      title: deepResearchContent.title,
      steps: [],
    },
    {
      title: deepResearchContent.title,
      steps: deepResearchContent.steps.map((item) => ({
        ...item,
        status: 'RUNNING',
      })),
    },
    {
      title: deepResearchContent.title,
      steps: deepResearchContent.steps.map((item, index) => {
        if (index > 0) return { ...item, status: 'RUNNING' };
        return { ...item, status: 'FINISHED' };
      }),
    },
    {
      title: deepResearchContent.title,
      steps: deepResearchContent.steps.map((item, index) => {
        if (index > 1) return { ...item, status: 'RUNNING' };
        return { ...item, status: 'FINISHED' };
      }),
    },
    {
      title: deepResearchContent.title,
      steps: deepResearchContent.steps.map((item, index) => {
        return { ...item, status: 'FINISHED' };
      }),
    },
    deepResearchContent,
  ];

  return steps;
}
`},90108:function(m,n){n.Z=`export default {
  title: 'Free AI tool research',
  steps: [
    {
      title: 'Exploring free AI tools',
      status: 'FINISHED',
      startTime: '2024-01-15T09:00:00Z',
      endTime: '2024-01-15T10:30:00Z',
      list: [
        {
          content: \`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.\`,
          siteList: [
            {
              title: 'City Pop - Wikipedia',
            },
            {
              title: 'City Pop - Wikipedia',
            },
            {
              title: 'City Pop - Wikipedia',
            },
            {
              title: 'City Pop - Wikipedia',
            },
            {
              title: 'City Pop - Wikipedia',
            },
            {
              title: 'City Pop - Wikipedia',
            },
            {
              title: 'City Pop - Wikipedia',
            },
            {
              title: 'City Pop - Wikipedia',
            },
            {
              title: 'City Pop - Wikipedia',
            },
            {
              title: 'City Pop - Wikipedia',
            },
          ],
        },
      ],
    },
    {
      title: 'Considering search strategies',
      status: 'FINISHED',
      startTime: '2024-01-15T10:30:00Z',
      endTime: '2024-01-15T12:00:00Z',
      list: [
        {
          content: \`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics.\`,
          siteList: [
            {
              title: 'City Pop - Wikipedia',
            },
          ],
        },
      ],
    },
    {
      title: 'Optimizing discovery methods',
      status: 'FINISHED',
      startTime: '2024-01-15T12:00:00Z',
      endTime: '2024-01-15T13:30:00Z',
      list: [
        {
          content: \`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics.\`,
        },
      ],
    },
  ],
  site: {
    list: [
      {
        title: 'City Pop - Wikipedia',
        description: 'City Pop - Wikipedia',
      },
      {
        title: 'City Pop - Wikipedia',
        description: 'City Pop - Wikipedia',
      },
      {
        title: 'City Pop - Wikipedia',
        description: 'City Pop - Wikipedia',
      },
    ],
  },
  result: {
    fileKey: 'deep_research_ai_healthcare_20240115',
    startTime: '2024-01-15T09:00:00Z',
    endTime: '2024-01-15T15:00:00Z',
    status: 'FINISHED',
    content: \`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
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
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.\`,
  },
};
`},63390:function(m,n){n.Z=`import thinkingAnswer from "./thinkingAnswer";
import normalAnswer from "./normalAnswer";
import webDevAnswer from "./webDevAnswer";
import deepResearchAnswer from "./deepResearchAnswer";

export default async function ({ getDemoContext, currentQA, ref }) {
  const context = getDemoContext();
  if (context.mode === 'WebDev') return await webDevAnswer(currentQA, ref);
  if (context.mode === 'DeepResearch') return await deepResearchAnswer(currentQA, ref);
  if (context.enableThinking) return await thinkingAnswer(currentQA, ref);
  return await normalAnswer(currentQA, ref);
}`},78063:function(m,n){n.Z=`import { produce } from 'immer';
import sleep from './sleep';

const mock = () => {
  let text = \`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.

City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.
\`;

  const res = [];

  while (text.length > 0) {
    const step = Math.floor(Math.random() * 100) + 1;
    const chunk = text.slice(0, step);
    text = text.slice(step);
    res.push(chunk);
  }

  return res;
};

export default async function (currentQA, chatRef) {
  for (const chunk of mock()) {
    await sleep(chunk.length * 5);

    const prevMessage = chatRef.current
      .getMessages()
      .find((item) => item.id === currentQA.current.answer.id);

    const nextMessage = produce(prevMessage, (draft) => {
      if (draft.cards.length === 0) {
        draft.cards.push({
          code: 'Text',
          data: {
            content: chunk,
            msgStatus: 'generating',
            className: 'claude-clone-font',
          },
        });
      } else {
        draft.cards[0].data.content = draft.cards[0].data.content + chunk;
      }
    });

    chatRef.current.updateMessage(nextMessage);
  }
}
`},17885:function(m,n){n.Z=`export default function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
`},52765:function(m,n){n.Z=`import { produce } from 'immer';
import sleep from './sleep';

const mock = () => {
  let text = \`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.
  
City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.\`;

  const res = [];

  while (text.length > 0) {
    const step = Math.floor(Math.random() * 100) + 1;
    const chunk = text.slice(0, step);
    text = text.slice(step);
    res.push(chunk);
  }

  return res;
};

export default async function (currentQA, chatRef) {
  for (const chunk of mock()) {
    await sleep(chunk.length * 5);

    const prevMessage = chatRef.current
      .getMessages()
      .find((item) => item.id === currentQA.current.answer.id);

    const nextMessage = produce(prevMessage, (draft) => {
      if (draft.cards.length === 0) {
        draft.cards.push({
          code: 'DeepThink',
          data: {
            content: chunk,
            loading: true,
            className: 'claude-clone-font',
          },
        });
      } else {
        draft.cards[0].data.content = draft.cards[0].data.content + chunk;
      }
    });

    chatRef.current.updateMessage(nextMessage);
  }

  for (const chunk of mock()) {
    await sleep(chunk.length * 5);

    const prevMessage = chatRef.current
      .getMessages()
      .find((item) => item.id === currentQA.current.answer.id);

    const nextMessage = produce(prevMessage, (draft) => {
      draft.cards[0].data.loading = false;
      if (!draft.cards[1]) {
        draft.cards.push({
          code: 'Text',
          data: {
            content: chunk,
            msgStatus: 'generating',
            className: 'claude-clone-font',
          },
        });
      } else {
        draft.cards[1].data.content = draft.cards[1].data.content + chunk;
      }
    });

    chatRef.current.updateMessage(nextMessage);
  }
}
`},66293:function(m,n){n.Z=`import { produce } from 'immer';
import sleep from './sleep';
import webDevContent from './webDevContent';

export default async function (currentQA, chatRef) {
  await sleep(2000);

  const prevMessage = chatRef.current
    .getMessages()
    .find((item) => item.id === currentQA.current.answer.id);

  const nextMessage = produce(prevMessage, (draft) => {
    draft.cards.push({
      code: 'Text',
      data: {
        content: 'I am creating a document for your idea.',
        msgStatus: 'finished',
        className: 'claude-clone-font',
      },
    });
    draft.cards.push({
      code: 'WebDev',
      data: {
        loading: true,
        content: '',
        title: currentQA.current.query.cards[0].data.content,
      },
    });
  });

  chatRef.current.updateMessage(nextMessage);

  for (const chunk of mock()) {
    await sleep(chunk.length);

    const prevMessage = chatRef.current
      .getMessages()
      .find((item) => item.id === currentQA.current.answer.id);

    const nextMessage = produce(prevMessage, (draft) => {
      draft.cards[1].data.content = draft.cards[1].data.content + chunk;
    });

    chatRef.current.updateMessage(nextMessage);
  }
}

function mock() {
  let text = webDevContent();
  const res = [];

  while (text.length > 0) {
    const step = Math.floor(Math.random() * 100) + 1;
    const chunk = text.slice(0, step);
    text = text.slice(step);
    res.push(chunk);
  }

  return res;
}
`},13993:function(m,n){n.Z=`export default () => \`<!DOCTYPE html>
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
</html>\`;
`},38136:function(m,n){n.Z=`import { createStyles } from "antd-style";

export default function Background({ children }: { children: React.ReactNode }) {
  const { styles } = useStyles();
  return <div className={styles.container}>
    <video src="https://cloud.video.taobao.com/vod/F7ULxg_UaBXJe9XRA2IVhiyjjYRZ10ythvs6iv-yoJg.mp4" autoPlay loop muted playsInline className={styles.video} />
    {children}
  </div>;
}


const useStyles = createStyles(({ token }) => {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: '100%',
      height: '100%',
      padding: 70,
    },
    video: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1,
    },
  };
});`},24235:function(m,n){n.Z=`import React from 'react';
import { ChatInput } from '@agentscope-ai/chat';
import { createStyles } from 'antd-style';

export default function (props: { onSubmit: (content: string) => void, loading: boolean }) {
  const { styles } = useStyle()
  const [content, setContent] = React.useState('');


  return <ChatInput
    loading={props.loading}
    className={styles.container}
    value={content}
    onChange={setContent}
    onSubmit={async () => {
      props.onSubmit(content);
      setContent('');
    }}
    placeholder='Search what you want to know'
  ></ChatInput>
}


const useStyle = createStyles(({ css, token }) => ({
  container: {
  },
}));`},66878:function(m,n){n.Z=`import { Bubble, CustomCardsProvider } from "@agentscope-ai/chat";
import { createStyles } from "antd-style";

export default function ({ messages }) {
  const { styles } = useStyle();

  return <CustomCardsProvider
    cardConfig={{
    }}>
    <Bubble.List
      classNames={{
        wrapper: styles.wrapper,
        list: styles.list
      }}
      // @ts-ignore
      items={messages}
    />
  </CustomCardsProvider>
}

const useStyle = createStyles(({ css, token }) => ({
  wrapper: css\`
    height: 0;
    flex: 1;
    
  \`,

  list: css\`
  \`
}));`},59469:function(m,n){n.Z=`import { createStyles, createGlobalStyle } from "antd-style";
import { Bubble, ChatAnywhere, ChatAnywhereRef, CustomCardsProvider, DefaultCards, Disclaimer, TMessage, uuid } from '@agentscope-ai/chat';
import { Vaso } from 'vaso'
import MessageList from "./MessageList";
import Input from "./Input";
import { useState } from "react";
import { SparkCopyLine, SparkReplaceLine, SparkThumbsDownLine, SparkThumbsUpLine } from "@agentscope-ai/icons";

export default function () {
  const { styles } = useStyles();
  const [messages, setMessages] = useState<TMessage[]>([
    {
      role: 'user',
      content: 'what is citypop',
      id: '1',
    },
    {
      role: 'assistant',
      cards: [
        {
          code: 'DeepThink',
          data: {
            content: 'City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period. City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s. Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist. Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.'
          }
        },
        {
          code: 'Text',
          data: {
            content: 'City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period. City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s. Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist. Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.'
          },
        },
        {
          code: 'Footer',
          data: {
            left: <DefaultCards.FooterActions data={[
              {
                icon: <SparkCopyLine />, onClick: () => { }
              },
              {
                icon: <SparkReplaceLine />, onClick: () => { }
              },
              {
                icon: <SparkThumbsUpLine />, onClick: () => { }
              },
              {
                icon: <SparkThumbsDownLine />, onClick: () => { }
              },
            ]} />,
          }
        }
      ],
      id: '2',
    },
  ]);
  return <>
    <Style />
    <Vaso className={styles.container} radius={20} depth={0.5} dispersion={0} blur={10}>
      <div className={styles.chat}>
        <MessageList messages={messages} />
        <Input onSubmit={() => {

          setMessages(v => [...v, {
            role: 'user',
            content: 'what is citypop',
            id: uuid(),
          }])

          setTimeout(() => {
            setMessages(v => [...v, {
              role: 'assistant',
              id: uuid(),
              content: 'City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period. City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s. Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist. Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.'
            }])
          }, 1000);

        }} loading={false} />
      </div>
    </Vaso>
  </>
}

const useStyles = createStyles(({ token, css, prefixCls }) => {

  return {
    container: css\`
      width: 100%;
      height: 100%;
      border: 1px solid rgba(200, 196, 191, .5);
      border-radius: 20px;
      overflow: hidden;
    \`,

    chat: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 800,
      margin: '0 auto',
      padding: '20px 0',
      height: '100%',
    },
  };
});

const Style = createGlobalStyle\`
  .ant-bubble-content-filled {
    border: 1px solid rgba(200, 196, 191, .5);
    background-color: rgba(200, 196, 191, .1) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;
  }

  .ant-accordion-deep-thinking {
    border-color:  rgba(200, 196, 191, .5) !important;
  }

  .ant-accordion-group-header-close {
    border: 1px solid rgba(200, 196, 191, .5) !important;
    background-color: rgba(200, 196, 191, .1) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;


  }

  .ant-accordion-group-icon-success {
    color: #fff !important;
  }

  .ant-sender {
    background-color: rgba(54, 53, 52, 0.3) !important;
    border-color: rgba(200, 196, 191, .5) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;
    
  }

  .ant-sender textarea::placeholder,
  .ant-sender textarea {
   color: rgba(231, 231, 237, .88) !important;
  }

  .ant-sender-actions-list .ant-btn {
    background-color: rgba(200, 196, 191, .3) !important;
    border-color: rgba(200, 196, 191, .5) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;


  }

  .ant-bubble-list-scroll-to-bottom .ant-btn {
    background-color: rgba(200, 196, 191, .3) !important;
    border-color: rgba(200, 196, 191, .5) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;



    &:hover {
      color: #fff !important;
      background-color: rgba(200, 196, 191, .5) !important;
      border-color: rgba(200, 196, 191, .5) !important;
    }
  }

  .ant-bubble-footer-left .ant-btn {
    border-color: rgba(200, 196, 191, .5) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;
  }

\`;`},37917:function(m,n){n.Z=`import { createStyles } from "antd-style";
import Background from "./Background";
import Chat from "./Chat";
import { ConfigProvider, carbonDarkTheme } from '@agentscope-ai/design';

carbonDarkTheme.theme.token.borderRadius = 20;
carbonDarkTheme.theme.token.borderRadiusLG = 20;
carbonDarkTheme.theme.token.borderRadiusSM = 20;

export default function LiquidGlass() {
  const { styles } = useStyles();
  return <ConfigProvider
    {...carbonDarkTheme}
  >
    <div className={styles.container}>
      <Background>
        <Chat />
      </Background>
    </div>
  </ConfigProvider>;
}


const useStyles = createStyles(({ token }) => {
  return {
    container: {
      width: '100vw',
      height: '100vh',
    },
  };
});`},1269:function(m,n){n.Z=`import { createStyles } from 'antd-style';
import { useEffect, useState } from 'react';

export default function (props: { icon: React.ReactNode, title: string, children: React.ReactNode }) {
  const { styles } = useStyle();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  
  return <div className={styles.block} style={{ opacity }}>
    <div className={styles.header} data-anchor={props.title}>
      <div className={styles.icon}>{props.icon}</div>
      <div className={styles.title}>{props.title}</div>
    </div>

    <div className={styles.content}>
      {props.children}
    </div>
  </div>
}

const useStyle = createStyles(({ css, token }) => ({
  block: {
    marginTop: 24,
    marginBottom: 48,
    transition: 'opacity 1s ease-in-out',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: token.colorText,
    marginBottom: 12,
  },
  icon: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
  content: {

  },
}));`},57879:function(m,n){n.Z=`import { Markdown } from "@agentscope-ai/chat";
import Block from "./Block";
import { SparkMessageLine } from "@agentscope-ai/icons";

export default function (props: { content: string, loading: boolean }) {
  console.log(props)
  return <Block
    title="answer"
    icon={<SparkMessageLine />}
  >
    <Markdown cursor={props.loading} content={props.content} baseLineHeight={1.8571428571428572}>
    </Markdown>
  </Block>
}`},90165:function(m,n){n.Z=`import { DeepThinking } from "@agentscope-ai/chat";

export default function ({ loading, content }) {
  return <DeepThinking
    defaultOpen
    content={content}
    loading={loading}
    title={loading ? 'Deep thinking' : 'Completed deep thinking'}
    className="perplexcity-deep-thinking"
  />

}`},74811:function(m,n){n.Z=`import { SparkPictureLine } from "@agentscope-ai/icons";
import { createStyles } from "antd-style";
import Block from "./Block";
import { Image } from "antd";

export default function ({ images }: { images: string[] }) {
  const { styles } = useStyle();

  return <Block
    title="images"
    icon={<SparkPictureLine />}
  >
    <div className={styles.images}>

      <Image.PreviewGroup>
        {images.map((image, index) => (
          <Image src={image} key={index} style={{ width: 180.55172413793102, height: 136, borderRadius: 12, overflow: 'hidden' }} />
        ))}
      </Image.PreviewGroup>

    </div>
  </Block>
}


const useStyle = createStyles(({ css, token }) => ({
  images: {
    display: 'flex',
    gap: 12,
    padding: 12,
    overflow: 'auto',
    backgroundColor: token.colorFillSecondary,
    borderRadius: token.borderRadius,

    '&::-webkit-scrollbar': {
      display: 'none',
    },

    '.sps-image-mask': {
      borderRadius: 12
    }
  },

}));`},8905:function(m,n){n.Z=`import { SparkDeepSearchLine, SparkRightArrowLine } from "@agentscope-ai/icons";
import Block from "./Block";
import { createStyles } from "antd-style";

export default function (props: { related: string[] }) {
  const { styles } = useStyle();
  
  return <Block
    title="related"
    icon={<SparkDeepSearchLine />}
  >
    <div className={styles.related}>
      {props.related.map((item, index) => (
        <div className={styles.item} key={index}>
          <SparkRightArrowLine className={styles.icon} />
          {item}
        </div>
      ))}
    </div>
  </Block>
}


const useStyle = createStyles(({ css, token }) => ({
  related: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  item: {
    height: 24,
    gap: 8,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: token.colorTextTertiary,
    '&:hover': {
      color: token.colorText,
    }
  },
  icon: {
    fontSize: 20,
    color: token.colorPrimary,
  },
}));`},47413:function(m,n){n.Z=`import { Markdown } from "@agentscope-ai/chat";
import Block from "./Block";
import { SparkPageSearchLine } from "@agentscope-ai/icons";
import { createStyles } from "antd-style";

interface IItem {
  title: string;
  url: string;
  logo: string,
  content: string,
}

function Item(props: IItem) {
  const { styles } = useStyle();

  return <div className={styles.item}>
    <img className={styles.logo} src={props.logo} />

    <div className={styles.content}>
      <div className={styles.title}>{props.title}</div>
      <a className={styles.url} href={props.url} target="_blank" >{props.url}</a>
    </div>
  </div>
}

export default function (props: { sources: IItem[] }) {
  const { styles } = useStyle();

  return <Block
    title="sources"
    icon={<SparkPageSearchLine />}
  >

    <div className={styles.sources}>
      {
        props.sources.map((item, index) => (
          <div className={styles.source} key={index}>
            <Item  {...item} />
            <Markdown content={item.content} baseLineHeight={1.8571428571428572}>
            </Markdown>
          </div>
        ))
      }
    </div>
  </Block>
}


const useStyle = createStyles(({ css, token }) => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  content: {

  },
  source: {},
  sources: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  title: {
    fontSize: 12,
    lineHeight: '20px',
    color: token.colorText,
  },
  url: {
    fontSize: 12,
    lineHeight: '20px',
    color: token.colorTextTertiary,
    textDecoration: 'none',
    '&:hover': {
      color: token.colorText,
    }
  },
}));`},75634:function(m,n){n.Z=`import { RefObject, useEffect, useRef, useState } from "react";
import useStyle from './style';
import { Scrollspy } from '@makotot/ghostui';


export default function (props) {
  const [sectionRefs, setSectionRefs] = useState<RefObject<HTMLElement>[]>([]);
  const { styles } = useStyle();
  const contentRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const refs = props.contentRef?.current?.querySelectorAll('[data-anchor]');

    if (refs?.length) {
      const refsArray = Array.from(refs);
      setSectionRefs(refsArray as any);
    }

  }, [props.data]);


  return <>
    <div className={styles.content} ref={contentRef}>
      {props.children}
    </div>

    {
      sectionRefs.length ? <Scrollspy sectionRefs={sectionRefs} rootSelector="#perplexcity-bubble-list>div" >
        {
          ({ currentElementIndexInViewport }) => {
            console.log(currentElementIndexInViewport);
            return <div>...</div>
          }
        }
      </Scrollspy> : null
    }
  </>

}`},80564:function(m,n){n.Z=`import useStyle from './style';
import Images from './Images';
import Content from './Content';
import Related from './Related';
import Sources from './Sources';
// @ts-ignore
import { ReactComponent as Logo } from './Logo.svg';
import DeepThinking from './DeepThinking';
import TOC from './TOC';


export default function (props) {
  const { deepThinking, images, content, sources, related } = props.data;
  const { styles } = useStyle();


  return <div className={styles.container}>
    <div className={styles.avatar}>
      <Logo />
    </div>

    <TOC data={props.data}>
      {
        deepThinking && <DeepThinking {...deepThinking} />
      }
      {
        images && <Images images={images} />
      }
      {
        content && <Content {...content} />
      }
      {
        sources && <Sources sources={sources} />
      }
      {
        related && <Related related={related} />
      }
    </TOC>
  </div>
}`},59004:function(m,n){n.Z=`import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  container: css\`
    width: 100%;
    display: flex;
    gap: 12px;
  \`,

  content: {
    width: 0,
    flex: 1,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 8,
    overflow: 'hidden'
  },
}));
`},96092:function(m,n){n.Z=`import { Avatar } from '@agentscope-ai/design';
import useStyle from './style';
import { SparkUserLine } from '@agentscope-ai/icons';

export default function (props) {


  const { styles } = useStyle();
  return <div className={styles.container}>
    <Avatar className={styles.avatar} size={32} icon={<SparkUserLine style={{ fontSize: 20 }} />} />

    <div className={styles.content}>
      {props.data.content}
      <div className={styles.hr} />
    </div>
  </div>
}`},31497:function(m,n){n.Z=`import { Disclaimer } from '@agentscope-ai/chat';
import { useState } from 'react';
import Welcome from '../Welcome';
import useStyle from './style';
import Input from '../Input';
import MessagesList from '../MessagesList';
import mock from './mock';

export default function Claude() {
  const { styles } = useStyle()
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);


  return <div className={styles.container}>
    <div className={styles.chat}>
      {
        messages.length ? <MessagesList messages={messages} /> : <Welcome />
      }
      <Input loading={loading} onSubmit={async (content) => {


        setLoading(true);

        setMessages([{
          role: 'user',
          cards: [
            { code: 'Query', data: { content: 'What is CityPop?' } }
          ]
        }, {
          role: 'assistant',
          msgStatus: 'generating',
          cards: [{
            code: 'Answer',
            data: {
              deepThinking: {
                loading: true,
                content: '...'
              }
            },
          }],
        }]);

        await mock({ messages, setMessages });

        setLoading(false);
      }} />
      <div className={styles.disclaimer}>
        <Disclaimer />
      </div>
    </div>
  </div>
}

`},69172:function(m,n){n.Z=`import { produce } from 'immer';

const data = {
  deepThinking: {
    loading: false,
    content: \`Okay, the user is asking about "citypop." Let me start by recalling what I know about that term. I remember that City Pop is a genre of music, but I need to make sure I'm accurate.

First, when did City Pop originate? I think it was in Japan during the late 1970s and 1980s. That makes sense because Japan's economy was booming then, leading to a vibrant urban culture. The genre probably blends Western styles like funk, jazz, and disco with Japanese pop elements. Artists like Tatsuro Yamashita and Mariya Takeuchi come to mind. Oh, and there's that song "Plastic Love" by Mariya Takeuchi that went viral online recently, which might have sparked renewed interest.

I should also mention the themes of City Pop songs\u2014they often reflect city life, romance, and leisure, fitting the upbeat and cosmopolitan vibe of the time. The visual style associated with it includes retro anime and vibrant cityscapes, which adds to its aesthetic appeal. It's interesting how the internet, especially platforms like YouTube and Spotify, helped revive this genre internationally. Maybe I should note that connection between modern digital culture and the resurgence of City Pop.

Wait, are there any subgenres or key characteristics I should highlight? The use of synthesizers, smooth vocals, and lush production are typical. Also, City Pop was influenced by yacht rock and soft rock from the West. It's important to link it to Japan's economic bubble era, as that context explains the music's optimistic and luxurious feel.

I need to ensure I don't confuse it with other Japanese genres like J-pop or Enka. City Pop is distinct in its fusion with Western sounds. Including notable albums, like Tatsuro Yamashita's "For You" or Anri's "Timely!!", could be helpful. Oh, and the connection to future funk and vaporwave genres that sample City Pop tracks is a good point for its modern influence.\`,
  },
  images: [
    'https://gw.alicdn.com/imgextra/i3/O1CN01zgK3yS1FAm7uKIHWc_!!6000000000447-0-tps-1232-928.jpg',
    'https://gw.alicdn.com/imgextra/i2/O1CN01Vasr7w1PzHxyioPPm_!!6000000001911-0-tps-1232-928.jpg',
    'https://gw.alicdn.com/imgextra/i4/O1CN01M98Xnc26huPmyBon2_!!6000000007694-0-tps-1232-928.jpg',
    'https://gw.alicdn.com/imgextra/i1/O1CN01EJ1oqo1J01Hx71bgB_!!6000000000965-0-tps-1232-928.jpg',
    'https://gw.alicdn.com/imgextra/i3/O1CN01zgK3yS1FAm7uKIHWc_!!6000000000447-0-tps-1232-928.jpg',
    'https://gw.alicdn.com/imgextra/i2/O1CN01Vasr7w1PzHxyioPPm_!!6000000001911-0-tps-1232-928.jpg',
    'https://gw.alicdn.com/imgextra/i4/O1CN01M98Xnc26huPmyBon2_!!6000000007694-0-tps-1232-928.jpg',
    'https://gw.alicdn.com/imgextra/i1/O1CN01EJ1oqo1J01Hx71bgB_!!6000000000965-0-tps-1232-928.jpg',
  ],
  content: {
    content: \`City Pop (\u30B7\u30C6\u30A3\u30FC\u30DD\u30C3\u30D7) is a subgenre of Japanese pop music that emerged in the late 1970s and peaked in popularity during the 1980s. It is characterized by its fusion of various musical styles, including funk, disco, R&B, soft rock, and boogie, often reflecting the urban and sophisticated lifestyle of city dwellers. The genre is known for its polished production, catchy melodies, and nostalgic themes, often evoking a sense of escapism and leisure associated with the vibrant city life.
## Key Features of City Pop

- Musical Influences: City Pop draws heavily from Western music trends of the time, particularly adult-oriented genres like funk and disco. It incorporates elements of jazz, lounge music, and even tropical sounds.
- Cultural Context: The genre developed during a period of rapid economic growth in Japan, which influenced its themes of urban sophistication and leisure. It served as a soundtrack for the cosmopolitan lifestyle of the era.
- Aesthetic: City Pop is often associated with vibrant and colorful artwork, featuring themes of summer, beaches, and urban nightlife. The cover art typically reflects a retro-futuristic vision, with bright colors and nostalgic imagery.
\`,
    loading: false,
  },
  sources: [
    {
      title: 'City Pop',
      logo: 'https://gw.alicdn.com/imgextra/i3/O1CN0134H6gj1MP9sJ1T17L_!!6000000001426-55-tps-32-32.svg',
      url: 'https://en.wikipedia.org/wiki/City_Pop',
      content: \`## City pop

City Pop (\u30B7\u30C6\u30A3\u30FC\u30DD\u30C3\u30D7) is a subgenre of Japanese pop music that emerged in the late 1970s and peaked in popularity during the 1980s. It is characterized by its fusion of various musical styles, including funk, disco, R&B, soft rock, and boogie, often reflecting the urban and sophisticated lifestyle of city dwellers. The genre is known for its polished production, catchy melodies, and nostalgic themes, often evoking a sense of escapism and leisure associated with the vibrant city life.\`,
    },
    {
      title: 'City Pop',
      logo: 'https://gw.alicdn.com/imgextra/i3/O1CN0134H6gj1MP9sJ1T17L_!!6000000001426-55-tps-32-32.svg',
      url: 'https://en.wikipedia.org/wiki/City_Pop',
      content: \`## City pop

City Pop (\u30B7\u30C6\u30A3\u30FC\u30DD\u30C3\u30D7) is a subgenre of Japanese pop music that emerged in the late 1970s and peaked in popularity during the 1980s. It is characterized by its fusion of various musical styles, including funk, disco, R&B, soft rock, and boogie, often reflecting the urban and sophisticated lifestyle of city dwellers. The genre is known for its polished production, catchy melodies, and nostalgic themes, often evoking a sense of escapism and leisure associated with the vibrant city life.\`,
    },
  ],
  related: [
    \`How did Japan's economic boom influence the development of City Pop?\`,
    \`What are the key characteristics of City Pop music?\`,
    \`How did Japan's economic boom influence the development of City Pop?\`,
    \`What are the key characteristics of City Pop music?\`,
  ],
};

const mock = [
  {
    deepThinking: {
      loading: true,
      content: data.deepThinking.content.slice(0, 20),
    },
  },

  {
    deepThinking: {
      loading: true,
      content: data.deepThinking.content.slice(0, 40),
    },
  },
  {
    deepThinking: {
      loading: true,
      content: data.deepThinking.content.slice(0, 60),
    },
  },
  {
    deepThinking: {
      loading: true,
      content: data.deepThinking.content.slice(0, 80),
    },
  },
  {
    deepThinking: {
      loading: true,
      content: data.deepThinking.content.slice(0, 100),
    },
  },
  {
    deepThinking: {
      loading: true,
      content: data.deepThinking.content.slice(0, 120),
    },
  },
  {
    deepThinking: data.deepThinking,
  },

  {
    deepThinking: data.deepThinking,
    images: data.images.slice(0, 1),
  },
  {
    deepThinking: data.deepThinking,
    images: data.images.slice(0, 2),
  },
  {
    deepThinking: data.deepThinking,
    images: data.images.slice(0, 3),
  },

  {
    deepThinking: data.deepThinking,
    images: data.images.slice(0, 4),
  },

  {
    deepThinking: data.deepThinking,
    images: data.images,
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: {
      loading: true,
      content: data.content.content.slice(0, 20),
    },
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: {
      loading: true,
      content: data.content.content.slice(0, 40),
    },
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: {
      loading: true,
      content: data.content.content.slice(0, 60),
    },
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: {
      loading: true,
      content: data.content.content.slice(0, 80),
    },
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: data.content,
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: data.content,
    sources: data.sources.slice(0, 1),
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: data.content,
    sources: data.sources,
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: data.content,
    sources: data.sources,
    related: data.related,
  },
];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function ({
  messages,
  setMessages,
}: {
  messages: any[];
  setMessages: (messages: any[]) => void;
}) {
  await sleep(500);

  for (const chunk of mock) {
    await sleep(1000);
    setMessages((list) => {
      const query = list[0];
      const answer = list[1];

      return [
        query,
        produce(answer, (draft) => {
          draft.cards[0].data = chunk;
        }),
      ];
    });
  }

  await sleep(100);
}
`},50767:function(m,n){n.Z=`import React from 'react';
import { ChatInput } from '@agentscope-ai/chat';
import useStyle from './style';

export default function (props: { onSubmit: (content: string) => void, loading: boolean }) {
  const { styles } = useStyle()
  const [content, setContent] = React.useState('');


  return <ChatInput
    loading={props.loading}
    className={styles.container}
    value={content}
    onChange={setContent}
    onSubmit={async () => {
      props.onSubmit(content);
      setContent('');
    }}
    placeholder='Search what you want to know'
  ></ChatInput>
}


`},87543:function(m,n){n.Z=`import { Bubble, CustomCardsProvider } from '@agentscope-ai/chat';
import useStyle from './style';
import Query from '../../cards/Query';
import Answer from "../../cards/Answer";

export default function ({ messages }) {
  const { styles } = useStyle();

  return <CustomCardsProvider
    cardConfig={{
      Query,
      Answer
    }}>
    <Bubble.List
      id="perplexcity-bubble-list"
      classNames={{
        wrapper: styles.wrapper,
        list: styles.list
      }}
      // @ts-ignore
      items={messages}
    />
  </CustomCardsProvider>
}`},69858:function(m,n){n.Z=`import EyeFollower from '@agentscope-ai/chat/Welcome/demo/EyeFollower';
import { createGlobalStyle, createStyles } from 'antd-style';

export default function () {
  const { styles } = useStyle();

  return <>
    <Style />
    <div className={styles.welcome}>
      <EyeFollower />
    </div>
  </>
}

const useStyle = createStyles(({ css, token }) => ({
  welcome: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    marginTop: 'calc(10vh + 80px + 64px)',
    marginBottom: 32,

  },
}));



const Style = createGlobalStyle\`
.sps-chat-anywhere-chat-welcome {
  height: auto !important;  
}\`



`},80818:function(m,n){n.Z=`import { ConfigProvider } from '@agentscope-ai/design';
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';
import React from 'react';


export const ConfigProviderContext = React.createContext<{
  dark?: boolean;
  setDark: (dark: boolean) => void;
}>(undefined);

export default function (props) {
  const [dark, setDark] = useState(true);
  const currentTheme = dark ? darkTheme : lightTheme;

  return <>
    <ConfigProviderContext.Provider value={{
      dark,
      setDark,
    }}>
      <ConfigProvider
        {...currentTheme}
        style={{ height: '100%' }}
        iconfont='https://at.alicdn.com/t/a/font_4807885_6wjcpzayws6.js'
        prefix='sps'
        prefixCls="sps"
      >
        {props.children}
      </ConfigProvider>
    </ConfigProviderContext.Provider>
  </>;
}`},41355:function(m,n){n.Z=`import { useGetState } from 'ahooks';
import React, { useState } from 'react';


type TContext = {
  model: string;
  enableSearch: boolean;
  enableThinking: boolean;
  mode?: string;
  initial?: boolean;
  canvas: boolean;
}

export const DemoContext = React.createContext<{
  demoContext: TContext,
  setDemoContext: (data: Partial<TContext>) => void,
  getDemoContext: () => TContext
}>(undefined);




export default function (props: { children: React.ReactNode }) {
  const [demoContext, setDemoContext, getDemoContext] = useGetState<TContext>({
    model: 'claude-3.5-sonnet',
    enableSearch: false,
    enableThinking: false,
    initial: true,
    mode: undefined,
    canvas: false,
  });


  return <DemoContext.Provider value={{
    demoContext, setDemoContext(data) {
      setDemoContext(v => {
        return { ...v, ...data }
      })
    }, getDemoContext
  }}>
    {props.children}
  </DemoContext.Provider>
}`},34313:function(m,n){n.Z=`import { generateThemeByToken } from '@agentscope-ai/design';

const lightTokens = {
  borderRadiusXS: 4,
  borderRadiusSM: 6,
  borderRadius: 8,
  borderRadiusLG: 12,
  borderRadiusXL: 16,
  borderRadiusFull: 999,
  wireframe: false,
  colorPrimaryBg: 'rgba(239, 237, 229, 1)',
  colorPrimaryBgHover: 'rgba(239, 237, 229, 1)',
  colorPrimaryBorder: 'rgba(186, 90, 59, 1)',
  colorPrimaryBorderHover: 'rgba(194, 98, 66, 1)',
  colorPrimaryHover: 'rgba(194, 98, 66, 1)',
  colorPrimary: 'rgba(208, 110, 78, 1)',
  colorPrimaryActive: 'rgba(194, 98, 66, 1)',
  colorPrimaryTextHover: 'rgba(186, 90, 59, 1)',
  colorPrimaryText: 'rgba(186, 90, 59, 1)',
  colorPrimaryTextActive: 'rgba(186, 90, 59, 1)',
  colorTextBase: 'rgba(26, 26, 29, 1)',
  colorBgBase: 'rgba(255, 255, 255, 1)',
  colorText: 'rgba(20, 20, 19, 0.88)',
  colorTextSecondary: 'rgba(20, 20, 19, 0.65)',
  colorTextTertiary: 'rgba(20, 20, 19, 0.45)',
  colorTextQuaternary: 'rgba(20, 20, 19, 0.25)',
  colorBorder: 'rgba(193, 192, 187, 1)',
  colorBorderSecondary: 'rgba(234, 233, 231, 1)',
  colorFill: 'rgba(43, 27, 0, 0.12)',
  colorFillSecondary: 'rgba(43, 27, 0, 0.08)',
  colorFillTertiary: 'rgba(43, 27, 0, 0.03)',
  colorFillQuaternary: 'rgba(43, 27, 0, 0.02)',
  colorBgContainer: 'rgba(255, 255, 255, 1)',
  colorBgElevated: 'rgba(255, 255, 255, 1)',
  colorBgLayout: 'rgba(249, 248, 244, 1)',
  colorBgSpotlight: 'rgba(20, 20, 19, 0.85)',
  colorBgMask: 'rgba(0, 0, 0, 0.45)',
  colorInfo: 'rgba(11, 131, 241, 1)',
  colorInfoHover: 'rgba(94, 188, 255, 1)',
  colorInfoBorder: 'rgba(135, 209, 255, 1)',
  colorInfoText: 'rgba(11, 131, 241, 1)',
  colorInfoBg: 'rgba(230, 247, 255, 1)',
  colorInfoBgHover: 'rgba(176, 227, 255, 1)',
  colorInfoBorderHover: 'rgba(94, 188, 255, 1)',
  colorSuccess: 'rgba(91, 185, 139, 1)',
  colorSuccessHover: 'rgba(171, 212, 190, 1)',
  colorSuccessBg: 'rgba(235, 250, 240, 1)',
  colorSuccessBgHover: 'rgba(223, 237, 228, 1)',
  colorSuccessBorder: 'rgba(211, 224, 217, 1)',
  colorSuccessBorderHover: 'rgba(171, 212, 190, 1)',
  colorWarning: 'rgba(250, 173, 20, 1)',
  colorWarningHover: 'rgba(255, 214, 102, 1)',
  colorWarningBg: 'rgba(255, 251, 230, 1)',
  colorWarningBgHover: 'rgba(255, 241, 184, 1)',
  colorWarningBorder: 'rgba(255, 229, 143, 1)',
  colorWarningBorderHover: 'rgba(255, 214, 102, 1)',
  colorError: 'rgba(255, 77, 79, 1)',
  colorErrorHover: 'rgba(255, 120, 117, 1)',
  colorErrorBg: 'rgba(255, 242, 240, 1)',
  colorErrorBgHover: 'rgba(255, 241, 240, 1)',
  colorErrorBorder: 'rgba(255, 204, 199, 1)',
  colorErrorBorderHover: 'rgba(255, 163, 158, 1)',
  colorLink: 'rgba(0, 77, 255, 1)',
  boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.08)',
  boxShadowSecondary:
    '0px 12px 24px -16px rgba(0, 0, 0, 0.06), 0px 8px 40px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.04)',
  colorTextWhite: 'rgba(255, 255, 255, 1)',
  colorFillDisable: 'rgba(235, 235, 232, 1)',
  colorPurple: 'rgba(97, 92, 237, 1)',
  colorPurpleHover: 'rgba(97, 92, 237, 1)',
  colorPurpleBg: 'rgba(226, 222, 255, 0.8)',
  colorPink: 'rgba(236, 72, 153, 1)',
  colorPinkHover: 'rgba(236, 72, 153, 1)',
  colorPinkBg: 'rgba(251, 220, 239, 0.8)',
  colorYellow: 'rgba(234, 179, 8, 1)',
  colorYellowHover: 'rgba(234, 179, 8, 1)',
  colorYellowBg: 'rgba(255, 250, 184, 0.8)',
  colorOrange: 'rgba(250, 129, 37, 1)',
  colorOrangeHover: 'rgba(250, 129, 37, 1)',
  colorOrangeBg: 'rgba(255, 232, 201, 0.8)',
  colorTeal: 'rgba(20, 184, 166, 1)',
  colorTealHover: 'rgba(20, 184, 166, 1)',
  colorTealBg: 'rgba(200, 244, 233, 0.8)',
  colorBlue: 'rgba(0, 144, 255, 1)',
  colorBlueHover: 'rgba(0, 144, 255, 1)',
  colorBlueBg: 'rgba(194, 229, 255, 0.8)',
  colorMauve: 'rgba(142, 140, 153, 1)',
  colorMauveHover: 'rgba(142, 140, 153, 1)',
  colorMauveBg: 'rgba(239, 240, 243, 0.8)',
  boxShadowTertiary:
    '0px 12px 32px -16px rgba(0, 0, 0, 0.24), 0px 12px 60px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.04)',
  boxShadowTertiaryLeft:
    '-12px 0px 32px -16px rgba(0, 0, 0, 0.24), -12px 0px 60px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.04)',
  boxShadowInput:
    '0px 12px 24px -16px rgba(54, 54, 73, 0.04), 0px 12px 40px 0px rgba(51, 51, 71, 0.08), 0px 0px 1px 0px rgba(44, 44, 54, 0.02)',
};
const darkTokens = {
  borderRadiusXS: 4,
  borderRadiusSM: 6,
  borderRadius: 8,
  borderRadiusLG: 12,
  borderRadiusXL: 16,
  borderRadiusFull: 999,
  wireframe: false,
  colorPrimaryBg: 'rgba(41, 35, 29, 1)',
  colorPrimaryBgHover: 'rgba(70, 60, 50, 1)',
  colorPrimaryBorder: 'rgba(133, 80, 40, 1)',
  colorPrimaryBorderHover: 'rgba(146, 102, 52, 1)',
  colorPrimaryHover: 'rgba(156, 88, 57, 1)',
  colorPrimary: 'rgba(156, 88, 57, 1)',
  colorPrimaryActive: 'rgba(146, 102, 52, 1)',
  colorPrimaryTextHover: 'rgba(133, 80, 40, 1)',
  colorPrimaryText: 'rgba(160, 96, 63, 1)',
  colorPrimaryTextActive: 'rgba(133, 80, 40, 1)',
  colorTextBase: 'rgba(230, 230, 230, 1)',
  colorBgBase: 'rgba(15, 13, 12, 1)',
  colorText: 'rgba(230, 230, 230, 0.9)',
  colorTextSecondary: 'rgba(180, 180, 180, 0.8)',
  colorTextTertiary: 'rgba(255, 255, 255, 0.6)',
  colorTextQuaternary: 'rgba(255, 255, 255, 0.3)',
  colorBorder: 'rgba(82, 76, 73, 1)',
  colorBorderSecondary: 'rgba(50, 46, 43, 1)',
  colorFill: 'rgba(82, 79, 74, 0.32)',
  colorFillSecondary: 'rgba(83, 79, 72, 0.24)',
  colorFillTertiary: 'rgba(50, 50, 50, 0.26)',
  colorFillQuaternary: 'rgba(67, 64, 59, 0.12)',
  colorBgContainer: 'rgba(52, 50, 47, 1)',
  colorBgElevated: 'rgba(47, 42, 39, 1)',
  colorBgLayout: 'rgba(26, 26, 24, 1)',
  colorBgSpotlight: 'rgba(10, 10, 10, 0.85)',
  colorBgMask: 'rgba(0, 0, 0, 0.6)',
  colorInfo: 'rgba(11, 131, 241, 1)',
  colorInfoHover: 'rgba(94, 188, 255, 1)',
  colorInfoBorder: 'rgba(57, 144, 201, 1)',
  colorInfoText: 'rgba(11, 131, 241, 1)',
  colorInfoBg: 'rgba(17, 34, 51, 1)',
  colorInfoBgHover: 'rgba(38, 72, 102, 1)',
  colorInfoBorderHover: 'rgba(94, 188, 255, 1)',
  colorSuccess: 'rgba(91, 185, 139, 1)',
  colorSuccessHover: 'rgba(116, 164, 124, 1)',
  colorSuccessBg: 'rgba(41, 54, 49, 1)',
  colorSuccessBgHover: 'rgba(63, 81, 71, 1)',
  colorSuccessBorder: 'rgba(115, 163, 119, 1)',
  colorSuccessBorderHover: 'rgba(171, 212, 190, 1)',
  colorWarning: 'rgba(250, 173, 20, 1)',
  colorWarningHover: 'rgba(255, 140, 40, 1)',
  colorWarningBg: 'rgba(45, 35, 26, 1)',
  colorWarningBgHover: 'rgba(77, 59, 35, 1)',
  colorWarningBorder: 'rgba(255, 166, 40, 1)',
  colorWarningBorderHover: 'rgba(255, 214, 102, 1)',
  colorError: 'rgba(255, 77, 79, 1)',
  colorErrorHover: 'rgba(238, 101, 78, 1)',
  colorErrorBg: 'rgba(43, 11, 8, 1)',
  colorErrorBgHover: 'rgba(74, 42, 40, 1)',
  colorErrorBorder: 'rgba(238, 91, 78, 1)',
  colorErrorBorderHover: 'rgba(255, 163, 158, 1)',
  colorLink: 'rgba(77, 125, 255, 1)',
  colorTextWhite: 'rgba(255, 255, 255, 1)',
  colorFillDisable: 'rgba(90, 90, 90, 1)',
  colorPurple: 'rgba(97, 92, 237, 1)',
  colorPurpleHover: 'rgba(97, 92, 237, 1)',
  colorPurpleBg: 'rgba(60, 53, 85, 1)',
  colorPink: 'rgba(236, 72, 153, 1)',
  colorPinkHover: 'rgba(236, 72, 153, 1)',
  colorPinkBg: 'rgba(74, 42, 58, 1)',
  colorYellow: 'rgba(234, 179, 8, 1)',
  colorYellowHover: 'rgba(234, 179, 8, 1)',
  colorYellowBg: 'rgba(77, 71, 32, 1)',
  colorOrange: 'rgba(250, 129, 37, 1)',
  colorOrangeHover: 'rgba(250, 129, 37, 1)',
  colorOrangeBg: 'rgba(255, 232, 201, 0.8)',
  colorTeal: 'rgba(20, 184, 166, 1)',
  colorTealHover: 'rgba(20, 184, 166, 1)',
  colorTealBg: 'rgba(42, 70, 64, 1)',
  colorBlue: 'rgba(0, 144, 255, 1)',
  colorBlueHover: 'rgba(0, 144, 255, 1)',
  colorBlueBg: 'rgba(42, 59, 78, 0.8)',
  colorMauve: 'rgba(142, 140, 153, 1)',
  colorMauveHover: 'rgba(142, 140, 153, 1)',
  colorMauveBg: 'rgba(46, 46, 50, 0.8)',
  boxShadow: '0px 4px 6px 0px rgba(255, 255, 255, 0.08)',
  boxShadowSecondary:
    '0px 12px 24px -16px rgba(255, 255, 255, 0.04), 0px 8px 40px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.03)',
  boxShadowTertiary:
    '0px 12px 32px -16px rgba(255, 255, 255, 0.16), 0px 12px 60px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.04)',
  boxShadowTertiaryLeft:
    '-12px 0px 32px -16px rgba(255, 255, 255, 0.16), -12px 0px 60px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.04)',
  boxShadowInput:
    '0px 12px 24px -16px rgba(254, 254, 255, 0.04), 0px 12px 40px 0px rgba(255, 255, 255, 0.08), 0px 0px 1px 0px rgba(255, 255, 255, 0.02)',
};

// @ts-ignore
export const darkTheme = generateThemeByToken(darkTokens, true);
// @ts-ignore
export const lightTheme = generateThemeByToken(lightTokens, false);
`},54804:function(m,n){n.Z=`import Chat from './components/Chat';
import ConfigProvider from './context/ConfigProvider';
import DemoProvider from './context/DemoProvider';
import Style from './style';

export default function () {

  return <ConfigProvider>
    <Style />
    <DemoProvider>
      <Chat />
    </DemoProvider>
  </ConfigProvider>
}`}}]);
