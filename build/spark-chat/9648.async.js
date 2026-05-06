!(function(){"use strict";var ot=Object.defineProperty;var b=Object.getOwnPropertySymbols;var it=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable;var B=($,p,c)=>p in $?ot($,p,{enumerable:!0,configurable:!0,writable:!0,value:c}):$[p]=c,O=($,p)=>{for(var c in p||(p={}))it.call(p,c)&&B($,c,p[c]);if(b)for(var c of b(p))ct.call(p,c)&&B($,c,p[c]);return $};var S=($,p,c)=>new Promise((A,M)=>{var g=v=>{try{o(c.next(v))}catch(x){M(x)}},u=v=>{try{o(c.throw(v))}catch(x){M(x)}},o=v=>v.done?A(v.value):Promise.resolve(v.value).then(g,u);o((c=c.apply($,p)).next())});(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[9648],{25925:function($,p,c){c.d(p,{A:function(){return M}});var A=c(35096);function M(g,u){var o,v,x;g.accDescr&&((o=u.setAccDescription)==null||o.call(u,g.accDescr)),g.accTitle&&((v=u.setAccTitle)==null||v.call(u,g.accTitle)),g.title&&((x=u.setDiagramTitle)==null||x.call(u,g.title))}(0,A.eW)(M,"populateCommonDb")},89648:function($,p,c){c.d(p,{diagram:function(){return nt}});var A=c(22971),M=c(25925),g=c(82436),u=c(62227),o=c(35096),v=c(12491),x={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},T={axes:[],curves:[],options:x},y=structuredClone(T),F=u.vZ.radar,U=(0,o.eW)(()=>(0,g.Rb)(O(O({},F),(0,u.iE)().radar)),"getConfig"),D=(0,o.eW)(()=>y.axes,"getAxes"),G=(0,o.eW)(()=>y.curves,"getCurves"),j=(0,o.eW)(()=>y.options,"getOptions"),K=(0,o.eW)(a=>{y.axes=a.map(t=>{var e;return{name:t.name,label:(e=t.label)!=null?e:t.name}})},"setAxes"),z=(0,o.eW)(a=>{y.curves=a.map(t=>{var e;return{name:t.name,label:(e=t.label)!=null?e:t.name,entries:H(t.entries)}})},"setCurves"),H=(0,o.eW)(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=D();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(n=>{var s;return((s=n.axis)==null?void 0:s.$refText)===e.name});if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),V=(0,o.eW)(a=>{var e,r,n,s,l,i,d,h,_,m;const t=a.reduce((C,f)=>(C[f.name]=f,C),{});y.options={showLegend:(r=(e=t.showLegend)==null?void 0:e.value)!=null?r:x.showLegend,ticks:(s=(n=t.ticks)==null?void 0:n.value)!=null?s:x.ticks,max:(i=(l=t.max)==null?void 0:l.value)!=null?i:x.max,min:(h=(d=t.min)==null?void 0:d.value)!=null?h:x.min,graticule:(m=(_=t.graticule)==null?void 0:_.value)!=null?m:x.graticule}},"setOptions"),X=(0,o.eW)(()=>{(0,u.ZH)(),y=structuredClone(T)},"clear"),W={getAxes:D,getCurves:G,getOptions:j,setAxes:K,setCurves:z,setOptions:V,getConfig:U,clear:X,setAccTitle:u.GN,getAccTitle:u.eu,setDiagramTitle:u.g2,getDiagramTitle:u.Kr,getAccDescription:u.Mx,setAccDescription:u.U$},N=(0,o.eW)(a=>{(0,M.A)(a,W);const{axes:t,curves:e,options:r}=a;W.setAxes(t),W.setCurves(e),W.setOptions(r)},"populate"),Q={parse:(0,o.eW)(a=>S(this,null,function*(){const t=yield(0,v.Qc)("radar",a);o.cM.debug(t),N(t)}),"parse")},Z=(0,o.eW)((a,t,e,r)=>{var w;const n=r.db,s=n.getAxes(),l=n.getCurves(),i=n.getOptions(),d=n.getConfig(),h=n.getDiagramTitle(),_=(0,A.P)(t),m=J(_,d),C=(w=i.max)!=null?w:Math.max(...l.map(L=>Math.max(...L.entries))),f=i.min,E=Math.min(d.width,d.height)/2;Y(m,s,E,i.ticks,i.graticule),q(m,s,E,d),P(m,s,l,f,C,i.graticule,d),I(m,l,i.showLegend,d),m.append("text").attr("class","radarTitle").text(h).attr("x",0).attr("y",-d.height/2-d.marginTop)},"draw"),J=(0,o.eW)((a,t)=>{var s;const e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,n={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return(0,u.v2)(a,r,e,(s=t.useMaxWidth)!=null?s:!0),a.attr("viewBox",`0 0 ${e} ${r}`),a.append("g").attr("transform",`translate(${n.x}, ${n.y})`)},"drawFrame"),Y=(0,o.eW)((a,t,e,r,n)=>{if(n==="circle")for(let s=0;s<r;s++){const l=e*(s+1)/r;a.append("circle").attr("r",l).attr("class","radarGraticule")}else if(n==="polygon"){const s=t.length;for(let l=0;l<r;l++){const i=e*(l+1)/r,d=t.map((h,_)=>{const m=2*_*Math.PI/s-Math.PI/2,C=i*Math.cos(m),f=i*Math.sin(m);return`${C},${f}`}).join(" ");a.append("polygon").attr("points",d).attr("class","radarGraticule")}}},"drawGraticule"),q=(0,o.eW)((a,t,e,r)=>{const n=t.length;for(let s=0;s<n;s++){const l=t[s].label,i=2*s*Math.PI/n-Math.PI/2;a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*Math.cos(i)).attr("y2",e*r.axisScaleFactor*Math.sin(i)).attr("class","radarAxisLine"),a.append("text").text(l).attr("x",e*r.axisLabelFactor*Math.cos(i)).attr("y",e*r.axisLabelFactor*Math.sin(i)).attr("class","radarAxisLabel")}},"drawAxes");function P(a,t,e,r,n,s,l){const i=t.length,d=Math.min(l.width,l.height)/2;e.forEach((h,_)=>{if(h.entries.length!==i)return;const m=h.entries.map((C,f)=>{const E=2*Math.PI*f/i-Math.PI/2,w=R(C,r,n,d),L=w*Math.cos(E),st=w*Math.sin(E);return{x:L,y:st}});s==="circle"?a.append("path").attr("d",k(m,l.curveTension)).attr("class",`radarCurve-${_}`):s==="polygon"&&a.append("polygon").attr("points",m.map(C=>`${C.x},${C.y}`).join(" ")).attr("class",`radarCurve-${_}`)})}(0,o.eW)(P,"drawCurves");function R(a,t,e,r){const n=Math.min(Math.max(a,t),e);return r*(n-t)/(e-t)}(0,o.eW)(R,"relativeRadius");function k(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let n=0;n<e;n++){const s=a[(n-1+e)%e],l=a[n],i=a[(n+1)%e],d=a[(n+2)%e],h={x:l.x+(i.x-s.x)*t,y:l.y+(i.y-s.y)*t},_={x:i.x-(d.x-l.x)*t,y:i.y-(d.y-l.y)*t};r+=` C${h.x},${h.y} ${_.x},${_.y} ${i.x},${i.y}`}return`${r} Z`}(0,o.eW)(k,"closedRoundCurve");function I(a,t,e,r){if(!e)return;const n=(r.width/2+r.marginRight)*3/4,s=-(r.height/2+r.marginTop)*3/4,l=20;t.forEach((i,d)=>{const h=a.append("g").attr("transform",`translate(${n}, ${s+d*l})`);h.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${d}`),h.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(i.label)})}(0,o.eW)(I,"drawLegend");var tt={draw:Z},et=(0,o.eW)((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const n=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${n};
			fill: ${n};
			fill-opacity: ${t.curveOpacity};
			stroke: ${n};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${n};
			fill-opacity: ${t.curveOpacity};
			stroke: ${n};
		}
		`}return e},"genIndexStyles"),at=(0,o.eW)(a=>{const t=(0,u.xN)(),e=(0,u.iE)(),r=(0,g.Rb)(t,e.themeVariables),n=(0,g.Rb)(r.radar,a);return{themeVariables:r,radarOptions:n}},"buildRadarStyleOptions"),rt=(0,o.eW)(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=at(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${et(t,e)}
	`},"styles"),nt={parser:Q,db:W,renderer:tt,styles:rt}}}]);
}());