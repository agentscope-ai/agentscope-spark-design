!(function(){"use strict";var H=(S,m,r)=>new Promise((v,_)=>{var o=s=>{try{i(r.next(s))}catch(p){_(p)}},a=s=>{try{i(r.throw(s))}catch(p){_(p)}},i=s=>s.done?v(s.value):Promise.resolve(s.value).then(o,a);i((r=r.apply(S,m)).next())});(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[8403],{25925:function(S,m,r){r.d(m,{A:function(){return _}});var v=r(35096);function _(o,a){var i,s,p;o.accDescr&&((i=a.setAccDescription)==null||i.call(a,o.accDescr)),o.accTitle&&((s=a.setAccTitle)==null||s.call(a,o.accTitle)),o.title&&((p=a.setDiagramTitle)==null||p.call(a,o.title))}(0,v.eW)(_,"populateCommonDb")},68403:function(S,m,r){r.d(m,{diagram:function(){return lt}});var v=r(22971),_=r(25925),o=r(82436),a=r(62227),i=r(35096),s=r(12491),p=r(989),y=a.vZ.pie,w={sections:new Map,showData:!1,config:y},C=w.sections,W=w.showData,Q=structuredClone(y),Z=(0,i.eW)(()=>structuredClone(Q),"getConfig"),J=(0,i.eW)(()=>{C=new Map,W=w.showData,(0,a.ZH)()},"clear"),b=(0,i.eW)(({label:t,value:n})=>{if(n<0)throw new Error(`"${t}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);C.has(t)||(C.set(t,n),i.cM.debug(`added new section: ${t}, with value: ${n}`))},"addSection"),Y=(0,i.eW)(()=>C,"getSections"),q=(0,i.eW)(t=>{W=t},"setShowData"),tt=(0,i.eW)(()=>W,"getShowData"),R={getConfig:Z,clear:J,setDiagramTitle:a.g2,getDiagramTitle:a.Kr,setAccTitle:a.GN,getAccTitle:a.eu,setAccDescription:a.U$,getAccDescription:a.Mx,addSection:b,getSections:Y,setShowData:q,getShowData:tt},et=(0,i.eW)((t,n)=>{(0,_.A)(t,n),n.setShowData(t.showData),t.sections.map(n.addSection)},"populateDb"),at={parse:(0,i.eW)(t=>H(this,null,function*(){const n=yield(0,s.Qc)("pie",t);i.cM.debug(n),et(n,R)}),"parse")},it=(0,i.eW)(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),rt=it,nt=(0,i.eW)(t=>{const n=[...t.values()].reduce((l,u)=>l+u,0),B=[...t.entries()].map(([l,u])=>({label:l,value:u})).filter(l=>l.value/n*100>=1);return(0,p.ve8)().value(l=>l.value).sort(null)(B)},"createPieArcs"),ct=(0,i.eW)((t,n,B,k)=>{var z,V;i.cM.debug(`rendering pie chart
`+t);const l=k.db,u=(0,a.nV)(),L=(0,o.Rb)(l.getConfig(),u.pie),I=40,d=18,E=4,h=450,D=h,M=(0,v.P)(n),g=M.append("g");g.attr("transform","translate("+D/2+","+h/2+")");const{themeVariables:c}=u;let[x]=(0,o.VG)(c.pieOuterStrokeWidth);x!=null||(x=2);const U=L.textPosition,A=Math.min(D,h)/2-I,ot=(0,p.Nb1)().innerRadius(0).outerRadius(A),pt=(0,p.Nb1)().innerRadius(A*U).outerRadius(A*U);g.append("circle").attr("cx",0).attr("cy",0).attr("r",A+x/2).attr("class","pieOuterCircle");const T=l.getSections(),_t=nt(T),dt=[c.pie1,c.pie2,c.pie3,c.pie4,c.pie5,c.pie6,c.pie7,c.pie8,c.pie9,c.pie10,c.pie11,c.pie12];let P=0;T.forEach(e=>{P+=e});const G=_t.filter(e=>(e.data.value/P*100).toFixed(0)!=="0"),O=(0,p.PKp)(dt).domain([...T.keys()]);g.selectAll("mySlices").data(G).enter().append("path").attr("d",ot).attr("fill",e=>O(e.data.label)).attr("class","pieCircle"),g.selectAll("mySlices").data(G).enter().append("text").text(e=>(e.data.value/P*100).toFixed(0)+"%").attr("transform",e=>"translate("+pt.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const ut=g.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-(h-50)/2).attr("class","pieTitleText"),F=[...T.entries()].map(([e,f])=>({label:e,value:f})),$=g.selectAll(".legend").data(F).enter().append("g").attr("class","legend").attr("transform",(e,f)=>{const X=d+E,vt=X*F.length/2,Dt=12*d,Ct=f*X-vt;return"translate("+Dt+","+Ct+")"});$.append("rect").attr("width",d).attr("height",d).style("fill",e=>O(e.label)).style("stroke",e=>O(e.label)),$.append("text").attr("x",d+E).attr("y",d-E).text(e=>l.getShowData()?`${e.label} [${e.value}]`:e.label);const ht=Math.max(...$.selectAll("text").nodes().map(e=>{var f;return(f=e==null?void 0:e.getBoundingClientRect().width)!=null?f:0})),gt=D+I+d+E+ht,K=(V=(z=ut.node())==null?void 0:z.getBoundingClientRect().width)!=null?V:0,ft=D/2-K/2,mt=D/2+K/2,N=Math.min(0,ft),j=Math.max(gt,mt)-N;M.attr("viewBox",`${N} 0 ${j} ${h}`),(0,a.v2)(M,h,j,L.useMaxWidth)},"draw"),st={draw:ct},lt={parser:at,db:R,renderer:st,styles:rt}}}]);
}());