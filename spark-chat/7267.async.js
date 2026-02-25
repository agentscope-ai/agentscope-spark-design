!(function(){"use strict";var j=(A,D,r)=>new Promise((v,u)=>{var o=l=>{try{i(r.next(l))}catch(p){u(p)}},a=l=>{try{i(r.throw(l))}catch(p){u(p)}},i=l=>l.done?v(l.value):Promise.resolve(l.value).then(o,a);i((r=r.apply(A,D)).next())});(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[7267],{25925:function(A,D,r){r.d(D,{A:function(){return u}});var v=r(35096);function u(o,a){var i,l,p;o.accDescr&&((i=a.setAccDescription)==null||i.call(a,o.accDescr)),o.accTitle&&((l=a.setAccTitle)==null||l.call(a,o.accTitle)),o.title&&((p=a.setDiagramTitle)==null||p.call(a,o.title))}(0,v.eW)(u,"populateCommonDb")},87267:function(A,D,r){r.d(D,{diagram:function(){return re}});var v=r(88674),u=r(25925),o=r(4284),a=r(99970),i=r(35096),l=r(12491),p=r(35584),y=a.vZ.pie,x={sections:new Map,showData:!1,config:y},m=x.sections,S=x.showData,z=structuredClone(y),J=(0,i.eW)(()=>structuredClone(z),"getConfig"),V=(0,i.eW)(()=>{m=new Map,S=x.showData,(0,a.ZH)()},"clear"),Z=(0,i.eW)(({label:e,value:n})=>{if(n<0)throw new Error(`"${e}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);m.has(e)||(m.set(e,n),i.cM.debug(`added new section: ${e}, with value: ${n}`))},"addSection"),H=(0,i.eW)(()=>m,"getSections"),X=(0,i.eW)(e=>{S=e},"setShowData"),Y=(0,i.eW)(()=>S,"getShowData"),R={getConfig:J,clear:V,setDiagramTitle:a.g2,getDiagramTitle:a.Kr,setAccTitle:a.GN,getAccTitle:a.eu,setAccDescription:a.U$,getAccDescription:a.Mx,addSection:Z,getSections:H,setShowData:X,getShowData:Y},b=(0,i.eW)((e,n)=>{(0,u.A)(e,n),n.setShowData(e.showData),e.sections.map(n.addSection)},"populateDb"),Q={parse:(0,i.eW)(e=>j(this,null,function*(){const n=yield(0,l.Qc)("pie",e);i.cM.debug(n),b(n,R)}),"parse")},q=(0,i.eW)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),ee=q,te=(0,i.eW)(e=>{const n=[...e.values()].reduce((s,_)=>s+_,0),B=[...e.entries()].map(([s,_])=>({label:s,value:_})).filter(s=>s.value/n*100>=1).sort((s,_)=>_.value-s.value);return(0,p.ve8)().value(s=>s.value)(B)},"createPieArcs"),ae=(0,i.eW)((e,n,B,k)=>{i.cM.debug(`rendering pie chart
`+e);const s=k.db,_=(0,a.nV)(),I=(0,o.Rb)(s.getConfig(),_.pie),L=40,d=18,E=4,g=450,W=g,M=(0,v.P)(n),h=M.append("g");h.attr("transform","translate("+W/2+","+g/2+")");const{themeVariables:c}=_;let[C]=(0,o.VG)(c.pieOuterStrokeWidth);C!=null||(C=2);const U=I.textPosition,T=Math.min(W,g)/2-L,ne=(0,p.Nb1)().innerRadius(0).outerRadius(T),se=(0,p.Nb1)().innerRadius(T*U).outerRadius(T*U);h.append("circle").attr("cx",0).attr("cy",0).attr("r",T+C/2).attr("class","pieOuterCircle");const w=s.getSections(),ce=te(w),le=[c.pie1,c.pie2,c.pie3,c.pie4,c.pie5,c.pie6,c.pie7,c.pie8,c.pie9,c.pie10,c.pie11,c.pie12];let P=0;w.forEach(t=>{P+=t});const G=ce.filter(t=>(t.data.value/P*100).toFixed(0)!=="0"),O=(0,p.PKp)(le);h.selectAll("mySlices").data(G).enter().append("path").attr("d",ne).attr("fill",t=>O(t.data.label)).attr("class","pieCircle"),h.selectAll("mySlices").data(G).enter().append("text").text(t=>(t.data.value/P*100).toFixed(0)+"%").attr("transform",t=>"translate("+se.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),h.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-(g-50)/2).attr("class","pieTitleText");const K=[...w.entries()].map(([t,f])=>({label:t,value:f})),$=h.selectAll(".legend").data(K).enter().append("g").attr("class","legend").attr("transform",(t,f)=>{const N=d+E,pe=N*K.length/2,_e=12*d,ue=f*N-pe;return"translate("+_e+","+ue+")"});$.append("rect").attr("width",d).attr("height",d).style("fill",t=>O(t.label)).style("stroke",t=>O(t.label)),$.append("text").attr("x",d+E).attr("y",d-E).text(t=>s.getShowData()?`${t.label} [${t.value}]`:t.label);const oe=Math.max(...$.selectAll("text").nodes().map(t=>{var f;return(f=t==null?void 0:t.getBoundingClientRect().width)!=null?f:0})),F=W+L+d+E+oe;M.attr("viewBox",`0 0 ${F} ${g}`),(0,a.v2)(M,g,F,I.useMaxWidth)},"draw"),ie={draw:ae},re={parser:Q,db:R,renderer:ie,styles:ee}}}]);
}());