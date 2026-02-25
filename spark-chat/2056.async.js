(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[2056],{1646:function(Ot){(function(rt,I){Ot.exports=I()})(this,function(){"use strict";var rt,I,kt=1e3,P=6e4,n=36e5,st=864e5,Y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,N=31536e6,q=2628e6,at=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,Z={years:N,months:q,days:st,hours:n,minutes:P,seconds:kt,milliseconds:1,weeks:6048e5},T=function(E){return E instanceof pt},it=function(E,h,d){return new pt(E,d,h.$l)},ot=function(E){return I.p(E)+"s"},wt=function(E){return E<0},j=function(E){return wt(E)?Math.ceil(E):Math.floor(E)},Wt=function(E){return Math.abs(E)},nt=function(E,h){return E?wt(E)?{negative:!0,format:""+Wt(E)+h}:{negative:!1,format:""+E+h}:{negative:!1,format:""}},pt=function(){function E(d,S,F){var $=this;if(this.$d={},this.$l=F,d===void 0&&(this.$ms=0,this.parseFromMilliseconds()),S)return it(d*Z[ot(S)],this);if(typeof d=="number")return this.$ms=d,this.parseFromMilliseconds(),this;if(typeof d=="object")return Object.keys(d).forEach(function(K){$.$d[ot(K)]=d[K]}),this.calMilliseconds(),this;if(typeof d=="string"){var U=d.match(at);if(U){var z=U.slice(2).map(function(K){return K!=null?Number(K):0});return this.$d.years=z[0],this.$d.months=z[1],this.$d.weeks=z[2],this.$d.days=z[3],this.$d.hours=z[4],this.$d.minutes=z[5],this.$d.seconds=z[6],this.calMilliseconds(),this}}return this}var h=E.prototype;return h.calMilliseconds=function(){var d=this;this.$ms=Object.keys(this.$d).reduce(function(S,F){return S+(d.$d[F]||0)*Z[F]},0)},h.parseFromMilliseconds=function(){var d=this.$ms;this.$d.years=j(d/N),d%=N,this.$d.months=j(d/q),d%=q,this.$d.days=j(d/st),d%=st,this.$d.hours=j(d/n),d%=n,this.$d.minutes=j(d/P),d%=P,this.$d.seconds=j(d/kt),d%=kt,this.$d.milliseconds=d},h.toISOString=function(){var d=nt(this.$d.years,"Y"),S=nt(this.$d.months,"M"),F=+this.$d.days||0;this.$d.weeks&&(F+=7*this.$d.weeks);var $=nt(F,"D"),U=nt(this.$d.hours,"H"),z=nt(this.$d.minutes,"M"),K=this.$d.seconds||0;this.$d.milliseconds&&(K+=this.$d.milliseconds/1e3,K=Math.round(1e3*K)/1e3);var mt=nt(K,"S"),Dt=d.negative||S.negative||$.negative||U.negative||z.negative||mt.negative,bt=U.format||z.format||mt.format?"T":"",yt=(Dt?"-":"")+"P"+d.format+S.format+$.format+bt+U.format+z.format+mt.format;return yt==="P"||yt==="-P"?"P0D":yt},h.toJSON=function(){return this.toISOString()},h.format=function(d){var S=d||"YYYY-MM-DDTHH:mm:ss",F={Y:this.$d.years,YY:I.s(this.$d.years,2,"0"),YYYY:I.s(this.$d.years,4,"0"),M:this.$d.months,MM:I.s(this.$d.months,2,"0"),D:this.$d.days,DD:I.s(this.$d.days,2,"0"),H:this.$d.hours,HH:I.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:I.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:I.s(this.$d.seconds,2,"0"),SSS:I.s(this.$d.milliseconds,3,"0")};return S.replace(Y,function($,U){return U||String(F[$])})},h.as=function(d){return this.$ms/Z[ot(d)]},h.get=function(d){var S=this.$ms,F=ot(d);return F==="milliseconds"?S%=1e3:S=F==="weeks"?j(S/Z[F]):this.$d[F],S||0},h.add=function(d,S,F){var $;return $=S?d*Z[ot(S)]:T(d)?d.$ms:it(d,this).$ms,it(this.$ms+$*(F?-1:1),this)},h.subtract=function(d,S){return this.add(d,S,!0)},h.locale=function(d){var S=this.clone();return S.$l=d,S},h.clone=function(){return it(this.$ms,this)},h.humanize=function(d){return rt().add(this.$ms,"ms").locale(this.$l).fromNow(!d)},h.valueOf=function(){return this.asMilliseconds()},h.milliseconds=function(){return this.get("milliseconds")},h.asMilliseconds=function(){return this.as("milliseconds")},h.seconds=function(){return this.get("seconds")},h.asSeconds=function(){return this.as("seconds")},h.minutes=function(){return this.get("minutes")},h.asMinutes=function(){return this.as("minutes")},h.hours=function(){return this.get("hours")},h.asHours=function(){return this.as("hours")},h.days=function(){return this.get("days")},h.asDays=function(){return this.as("days")},h.weeks=function(){return this.get("weeks")},h.asWeeks=function(){return this.as("weeks")},h.months=function(){return this.get("months")},h.asMonths=function(){return this.as("months")},h.years=function(){return this.get("years")},h.asYears=function(){return this.as("years")},E}(),ht=function(E,h,d){return E.add(h.years()*d,"y").add(h.months()*d,"M").add(h.days()*d,"d").add(h.hours()*d,"h").add(h.minutes()*d,"m").add(h.seconds()*d,"s").add(h.milliseconds()*d,"ms")};return function(E,h,d){rt=d,I=d().$utils(),d.duration=function($,U){var z=d.locale();return it($,{$l:z},U)},d.isDuration=T;var S=h.prototype.add,F=h.prototype.subtract;h.prototype.add=function($,U){return T($)?ht(this,$,1):S.bind(this)($,U)},h.prototype.subtract=function($,U){return T($)?ht(this,$,-1):F.bind(this)($,U)}}})},59542:function(Ot){(function(rt,I){Ot.exports=I()})(this,function(){"use strict";var rt="day";return function(I,kt,P){var n=function(N){return N.add(4-N.isoWeekday(),rt)},st=kt.prototype;st.isoWeekYear=function(){return n(this).year()},st.isoWeek=function(N){if(!this.$utils().u(N))return this.add(7*(N-this.isoWeek()),rt);var q,at,Z,T,it=n(this),ot=(q=this.isoWeekYear(),at=this.$u,Z=(at?P.utc:P)().year(q).startOf("year"),T=4-Z.isoWeekday(),Z.isoWeekday()>4&&(T+=7),Z.add(T,rt));return it.diff(ot,"week")+1},st.isoWeekday=function(N){return this.$utils().u(N)?this.day()||7:this.day(this.day()%7?N:N-7)};var Y=st.startOf;st.startOf=function(N,q){var at=this.$utils(),Z=!!at.u(q)||q;return at.p(N)==="isoweek"?Z?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):Y.bind(this)(N,q)}}})},12056:function(Ot,rt,I){"use strict";I.d(rt,{diagram:function(){return Xe}});var kt=I(4284),P=I(99970),n=I(35096),st=I(17967),Y=I(27484),N=I(59542),q=I(10285),at=I(28734),Z=I(1646),T=I(35584),it=function(){var t=(0,n.eW)(function(y,c,l,f){for(l=l||{},f=y.length;f--;l[y[f]]=c);return l},"o"),i=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],r=[1,26],o=[1,27],a=[1,28],k=[1,29],p=[1,30],L=[1,31],H=[1,32],lt=[1,33],A=[1,34],X=[1,9],ut=[1,10],Q=[1,11],tt=[1,12],D=[1,13],Et=[1,14],Ct=[1,15],St=[1,16],Mt=[1,19],xt=[1,20],It=[1,21],At=[1,22],Ft=[1,23],Lt=[1,25],v=[1,35],x={trace:(0,n.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:(0,n.eW)(function(c,l,f,u,g,s,C){var e=s.length-1;switch(g){case 1:return s[e-1];case 2:this.$=[];break;case 3:s[e-1].push(s[e]),this.$=s[e-1];break;case 4:case 5:this.$=s[e];break;case 6:case 7:this.$=[];break;case 8:u.setWeekday("monday");break;case 9:u.setWeekday("tuesday");break;case 10:u.setWeekday("wednesday");break;case 11:u.setWeekday("thursday");break;case 12:u.setWeekday("friday");break;case 13:u.setWeekday("saturday");break;case 14:u.setWeekday("sunday");break;case 15:u.setWeekend("friday");break;case 16:u.setWeekend("saturday");break;case 17:u.setDateFormat(s[e].substr(11)),this.$=s[e].substr(11);break;case 18:u.enableInclusiveEndDates(),this.$=s[e].substr(18);break;case 19:u.TopAxis(),this.$=s[e].substr(8);break;case 20:u.setAxisFormat(s[e].substr(11)),this.$=s[e].substr(11);break;case 21:u.setTickInterval(s[e].substr(13)),this.$=s[e].substr(13);break;case 22:u.setExcludes(s[e].substr(9)),this.$=s[e].substr(9);break;case 23:u.setIncludes(s[e].substr(9)),this.$=s[e].substr(9);break;case 24:u.setTodayMarker(s[e].substr(12)),this.$=s[e].substr(12);break;case 27:u.setDiagramTitle(s[e].substr(6)),this.$=s[e].substr(6);break;case 28:this.$=s[e].trim(),u.setAccTitle(this.$);break;case 29:case 30:this.$=s[e].trim(),u.setAccDescription(this.$);break;case 31:u.addSection(s[e].substr(8)),this.$=s[e].substr(8);break;case 33:u.addTask(s[e-1],s[e]),this.$="task";break;case 34:this.$=s[e-1],u.setClickEvent(s[e-1],s[e],null);break;case 35:this.$=s[e-2],u.setClickEvent(s[e-2],s[e-1],s[e]);break;case 36:this.$=s[e-2],u.setClickEvent(s[e-2],s[e-1],null),u.setLink(s[e-2],s[e]);break;case 37:this.$=s[e-3],u.setClickEvent(s[e-3],s[e-2],s[e-1]),u.setLink(s[e-3],s[e]);break;case 38:this.$=s[e-2],u.setClickEvent(s[e-2],s[e],null),u.setLink(s[e-2],s[e-1]);break;case 39:this.$=s[e-3],u.setClickEvent(s[e-3],s[e-1],s[e]),u.setLink(s[e-3],s[e-2]);break;case 40:this.$=s[e-1],u.setLink(s[e-1],s[e]);break;case 41:case 47:this.$=s[e-1]+" "+s[e];break;case 42:case 43:case 45:this.$=s[e-2]+" "+s[e-1]+" "+s[e];break;case 44:case 46:this.$=s[e-3]+" "+s[e-2]+" "+s[e-1]+" "+s[e];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(i,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:r,13:o,14:a,15:k,16:p,17:L,18:H,19:18,20:lt,21:A,22:X,23:ut,24:Q,25:tt,26:D,27:Et,28:Ct,29:St,30:Mt,31:xt,33:It,35:At,36:Ft,37:24,38:Lt,40:v},t(i,[2,7],{1:[2,1]}),t(i,[2,3]),{9:36,11:17,12:r,13:o,14:a,15:k,16:p,17:L,18:H,19:18,20:lt,21:A,22:X,23:ut,24:Q,25:tt,26:D,27:Et,28:Ct,29:St,30:Mt,31:xt,33:It,35:At,36:Ft,37:24,38:Lt,40:v},t(i,[2,5]),t(i,[2,6]),t(i,[2,17]),t(i,[2,18]),t(i,[2,19]),t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),t(i,[2,23]),t(i,[2,24]),t(i,[2,25]),t(i,[2,26]),t(i,[2,27]),{32:[1,37]},{34:[1,38]},t(i,[2,30]),t(i,[2,31]),t(i,[2,32]),{39:[1,39]},t(i,[2,8]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),{41:[1,40],43:[1,41]},t(i,[2,4]),t(i,[2,28]),t(i,[2,29]),t(i,[2,33]),t(i,[2,34],{42:[1,42],43:[1,43]}),t(i,[2,40],{41:[1,44]}),t(i,[2,35],{43:[1,45]}),t(i,[2,36]),t(i,[2,38],{42:[1,46]}),t(i,[2,37]),t(i,[2,39])],defaultActions:{},parseError:(0,n.eW)(function(c,l){if(l.recoverable)this.trace(c);else{var f=new Error(c);throw f.hash=l,f}},"parseError"),parse:(0,n.eW)(function(c){var l=this,f=[0],u=[],g=[null],s=[],C=this.table,e="",m=0,M=0,w=0,W=2,V=1,O=s.slice.call(arguments,1),B=Object.create(this.lexer),dt={yy:{}};for(var Ut in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Ut)&&(dt.yy[Ut]=this.yy[Ut]);B.setInput(c,dt.yy),dt.yy.lexer=B,dt.yy.parser=this,typeof B.yylloc=="undefined"&&(B.yylloc={});var zt=B.yylloc;s.push(zt);var Ge=B.options&&B.options.ranges;typeof dt.yy.parseError=="function"?this.parseError=dt.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Ze(J){f.length=f.length-2*J,g.length=g.length-J,s.length=s.length-J}(0,n.eW)(Ze,"popStack");function re(){var J;return J=u.pop()||B.lex()||V,typeof J!="number"&&(J instanceof Array&&(u=J,J=u.pop()),J=l.symbols_[J]||J),J}(0,n.eW)(re,"lex");for(var G,Kt,vt,et,Je,Ht,_t={},Yt,ft,ne,Vt;;){if(vt=f[f.length-1],this.defaultActions[vt]?et=this.defaultActions[vt]:((G===null||typeof G=="undefined")&&(G=re()),et=C[vt]&&C[vt][G]),typeof et=="undefined"||!et.length||!et[0]){var Xt="";Vt=[];for(Yt in C[vt])this.terminals_[Yt]&&Yt>W&&Vt.push("'"+this.terminals_[Yt]+"'");B.showPosition?Xt="Parse error on line "+(m+1)+`:
`+B.showPosition()+`
Expecting `+Vt.join(", ")+", got '"+(this.terminals_[G]||G)+"'":Xt="Parse error on line "+(m+1)+": Unexpected "+(G==V?"end of input":"'"+(this.terminals_[G]||G)+"'"),this.parseError(Xt,{text:B.match,token:this.terminals_[G]||G,line:B.yylineno,loc:zt,expected:Vt})}if(et[0]instanceof Array&&et.length>1)throw new Error("Parse Error: multiple actions possible at state: "+vt+", token: "+G);switch(et[0]){case 1:f.push(G),g.push(B.yytext),s.push(B.yylloc),f.push(et[1]),G=null,Kt?(G=Kt,Kt=null):(M=B.yyleng,e=B.yytext,m=B.yylineno,zt=B.yylloc,w>0&&w--);break;case 2:if(ft=this.productions_[et[1]][1],_t.$=g[g.length-ft],_t._$={first_line:s[s.length-(ft||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(ft||1)].first_column,last_column:s[s.length-1].last_column},Ge&&(_t._$.range=[s[s.length-(ft||1)].range[0],s[s.length-1].range[1]]),Ht=this.performAction.apply(_t,[e,M,m,dt.yy,et[1],g,s].concat(O)),typeof Ht!="undefined")return Ht;ft&&(f=f.slice(0,-1*ft*2),g=g.slice(0,-1*ft),s=s.slice(0,-1*ft)),f.push(this.productions_[et[1]][0]),g.push(_t.$),s.push(_t._$),ne=C[f[f.length-2]][f[f.length-1]],f.push(ne);break;case 3:return!0}}return!0},"parse")},_=function(){var y={EOF:1,parseError:(0,n.eW)(function(l,f){if(this.yy.parser)this.yy.parser.parseError(l,f);else throw new Error(l)},"parseError"),setInput:(0,n.eW)(function(c,l){return this.yy=l||this.yy||{},this._input=c,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,n.eW)(function(){var c=this._input[0];this.yytext+=c,this.yyleng++,this.offset++,this.match+=c,this.matched+=c;var l=c.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),c},"input"),unput:(0,n.eW)(function(c){var l=c.length,f=c.split(/(?:\r\n?|\n)/g);this._input=c+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var g=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===u.length?this.yylloc.first_column:0)+u[u.length-f.length].length-f[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[g[0],g[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},"unput"),more:(0,n.eW)(function(){return this._more=!0,this},"more"),reject:(0,n.eW)(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:(0,n.eW)(function(c){this.unput(this.match.slice(c))},"less"),pastInput:(0,n.eW)(function(){var c=this.matched.substr(0,this.matched.length-this.match.length);return(c.length>20?"...":"")+c.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,n.eW)(function(){var c=this.match;return c.length<20&&(c+=this._input.substr(0,20-c.length)),(c.substr(0,20)+(c.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,n.eW)(function(){var c=this.pastInput(),l=new Array(c.length+1).join("-");return c+this.upcomingInput()+`
`+l+"^"},"showPosition"),test_match:(0,n.eW)(function(c,l){var f,u,g;if(this.options.backtrack_lexer&&(g={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(g.yylloc.range=this.yylloc.range.slice(0))),u=c[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+c[0].length},this.yytext+=c[0],this.match+=c[0],this.matches=c,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(c[0].length),this.matched+=c[0],f=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var s in g)this[s]=g[s];return!1}return!1},"test_match"),next:(0,n.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var c,l,f,u;this._more||(this.yytext="",this.match="");for(var g=this._currentRules(),s=0;s<g.length;s++)if(f=this._input.match(this.rules[g[s]]),f&&(!l||f[0].length>l[0].length)){if(l=f,u=s,this.options.backtrack_lexer){if(c=this.test_match(f,g[s]),c!==!1)return c;if(this._backtrack){l=!1;continue}else return!1}else if(!this.options.flex)break}return l?(c=this.test_match(l,g[u]),c!==!1?c:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,n.eW)(function(){var l=this.next();return l||this.lex()},"lex"),begin:(0,n.eW)(function(l){this.conditionStack.push(l)},"begin"),popState:(0,n.eW)(function(){var l=this.conditionStack.length-1;return l>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,n.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,n.eW)(function(l){return l=this.conditionStack.length-1-Math.abs(l||0),l>=0?this.conditionStack[l]:"INITIAL"},"topState"),pushState:(0,n.eW)(function(l){this.begin(l)},"pushState"),stateStackSize:(0,n.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,n.eW)(function(l,f,u,g){var s=g;switch(u){case 0:return this.begin("open_directive"),"open_directive";break;case 1:return this.begin("acc_title"),31;break;case 2:return this.popState(),"acc_title_value";break;case 3:return this.begin("acc_descr"),33;break;case 4:return this.popState(),"acc_descr_value";break;case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return y}();x.lexer=_;function b(){this.yy={}}return(0,n.eW)(b,"Parser"),b.prototype=x,x.Parser=b,new b}();it.parser=it;var ot=it;Y.extend(N),Y.extend(q),Y.extend(at);var wt={friday:5,saturday:6},j="",Wt="",nt=void 0,pt="",ht=[],E=[],h=new Map,d=[],S=[],F="",$="",U=["active","done","crit","milestone","vert"],z=[],K=!1,mt=!1,Dt="sunday",bt="saturday",yt=0,ae=(0,n.eW)(function(){d=[],S=[],F="",z=[],$t=0,Rt=void 0,Pt=void 0,R=[],j="",Wt="",$="",nt=void 0,pt="",ht=[],E=[],K=!1,mt=!1,yt=0,h=new Map,(0,P.ZH)(),Dt="sunday",bt="saturday"},"clear"),oe=(0,n.eW)(function(t){Wt=t},"setAxisFormat"),ce=(0,n.eW)(function(){return Wt},"getAxisFormat"),le=(0,n.eW)(function(t){nt=t},"setTickInterval"),ue=(0,n.eW)(function(){return nt},"getTickInterval"),de=(0,n.eW)(function(t){pt=t},"setTodayMarker"),fe=(0,n.eW)(function(){return pt},"getTodayMarker"),he=(0,n.eW)(function(t){j=t},"setDateFormat"),ke=(0,n.eW)(function(){K=!0},"enableInclusiveEndDates"),me=(0,n.eW)(function(){return K},"endDatesAreInclusive"),ye=(0,n.eW)(function(){mt=!0},"enableTopAxis"),ge=(0,n.eW)(function(){return mt},"topAxisEnabled"),ve=(0,n.eW)(function(t){$=t},"setDisplayMode"),pe=(0,n.eW)(function(){return $},"getDisplayMode"),be=(0,n.eW)(function(){return j},"getDateFormat"),Te=(0,n.eW)(function(t){ht=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),xe=(0,n.eW)(function(){return ht},"getIncludes"),_e=(0,n.eW)(function(t){E=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),we=(0,n.eW)(function(){return E},"getExcludes"),We=(0,n.eW)(function(){return h},"getLinks"),De=(0,n.eW)(function(t){F=t,d.push(t)},"addSection"),Ee=(0,n.eW)(function(){return d},"getSections"),Ce=(0,n.eW)(function(){let t=te();const i=10;let r=0;for(;!t&&r<i;)t=te(),r++;return S=R,S},"getTasks"),Gt=(0,n.eW)(function(t,i,r,o){const a=t.format(i.trim()),k=t.format("YYYY-MM-DD");return o.includes(a)||o.includes(k)?!1:r.includes("weekends")&&(t.isoWeekday()===wt[bt]||t.isoWeekday()===wt[bt]+1)||r.includes(t.format("dddd").toLowerCase())?!0:r.includes(a)||r.includes(k)},"isInvalidDate"),Se=(0,n.eW)(function(t){Dt=t},"setWeekday"),Me=(0,n.eW)(function(){return Dt},"getWeekday"),Ie=(0,n.eW)(function(t){bt=t},"setWeekend"),Zt=(0,n.eW)(function(t,i,r,o){if(!r.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=Y(t.startTime):a=Y(t.startTime,i,!0),a=a.add(1,"d");let k;t.endTime instanceof Date?k=Y(t.endTime):k=Y(t.endTime,i,!0);const[p,L]=Ae(a,k,i,r,o);t.endTime=p.toDate(),t.renderEndTime=L},"checkTaskDates"),Ae=(0,n.eW)(function(t,i,r,o,a){let k=!1,p=null;for(;t<=i;)k||(p=i.toDate()),k=Gt(t,r,o,a),k&&(i=i.add(1,"d")),t=t.add(1,"d");return[i,p]},"fixTaskDates"),Bt=(0,n.eW)(function(t,i,r){if(r=r.trim(),(0,n.eW)(L=>{const H=L.trim();return H==="x"||H==="X"},"isTimestampFormat")(i)&&/^\d+$/.test(r))return new Date(Number(r));const k=new RegExp("^after\\s+(?<ids>[\\d\\w- ]+)").exec(r);if(k!==null){let L=null;for(const lt of k.groups.ids.split(" ")){let A=gt(lt);A!==void 0&&(!L||A.endTime>L.endTime)&&(L=A)}if(L)return L.endTime;const H=new Date;return H.setHours(0,0,0,0),H}let p=Y(r,i.trim(),!0);if(p.isValid())return p.toDate();{n.cM.debug("Invalid date:"+r),n.cM.debug("With date format:"+i.trim());const L=new Date(r);if(L===void 0||isNaN(L.getTime())||L.getFullYear()<-1e4||L.getFullYear()>1e4)throw new Error("Invalid date:"+r);return L}},"getStartDate"),Jt=(0,n.eW)(function(t){const i=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return i!==null?[Number.parseFloat(i[1]),i[2]]:[NaN,"ms"]},"parseDuration"),qt=(0,n.eW)(function(t,i,r,o=!1){r=r.trim();const k=new RegExp("^until\\s+(?<ids>[\\d\\w- ]+)").exec(r);if(k!==null){let A=null;for(const ut of k.groups.ids.split(" ")){let Q=gt(ut);Q!==void 0&&(!A||Q.startTime<A.startTime)&&(A=Q)}if(A)return A.startTime;const X=new Date;return X.setHours(0,0,0,0),X}let p=Y(r,i.trim(),!0);if(p.isValid())return o&&(p=p.add(1,"d")),p.toDate();let L=Y(t);const[H,lt]=Jt(r);if(!Number.isNaN(H)){const A=L.add(H,lt);A.isValid()&&(L=A)}return L.toDate()},"getEndDate"),$t=0,Tt=(0,n.eW)(function(t){return t===void 0?($t=$t+1,"task"+$t):t},"parseId"),Fe=(0,n.eW)(function(t,i){let r;i.substr(0,1)===":"?r=i.substr(1,i.length):r=i;const o=r.split(","),a={};Nt(o,a,U);for(let p=0;p<o.length;p++)o[p]=o[p].trim();let k="";switch(o.length){case 1:a.id=Tt(),a.startTime=t.endTime,k=o[0];break;case 2:a.id=Tt(),a.startTime=Bt(void 0,j,o[0]),k=o[1];break;case 3:a.id=Tt(o[0]),a.startTime=Bt(void 0,j,o[1]),k=o[2];break;default:}return k&&(a.endTime=qt(a.startTime,j,k,K),a.manualEndTime=Y(k,"YYYY-MM-DD",!0).isValid(),Zt(a,j,E,ht)),a},"compileData"),Le=(0,n.eW)(function(t,i){let r;i.substr(0,1)===":"?r=i.substr(1,i.length):r=i;const o=r.split(","),a={};Nt(o,a,U);for(let k=0;k<o.length;k++)o[k]=o[k].trim();switch(o.length){case 1:a.id=Tt(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:o[0]};break;case 2:a.id=Tt(),a.startTime={type:"getStartDate",startData:o[0]},a.endTime={data:o[1]};break;case 3:a.id=Tt(o[0]),a.startTime={type:"getStartDate",startData:o[1]},a.endTime={data:o[2]};break;default:}return a},"parseData"),Rt,Pt,R=[],Qt={},Oe=(0,n.eW)(function(t,i){const r={section:F,type:F,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:i},task:t,classes:[]},o=Le(Pt,i);r.raw.startTime=o.startTime,r.raw.endTime=o.endTime,r.id=o.id,r.prevTaskId=Pt,r.active=o.active,r.done=o.done,r.crit=o.crit,r.milestone=o.milestone,r.vert=o.vert,r.order=yt,yt++;const a=R.push(r);Pt=r.id,Qt[r.id]=a-1},"addTask"),gt=(0,n.eW)(function(t){const i=Qt[t];return R[i]},"findTaskById"),$e=(0,n.eW)(function(t,i){const r={section:F,type:F,description:t,task:t,classes:[]},o=Fe(Rt,i);r.startTime=o.startTime,r.endTime=o.endTime,r.id=o.id,r.active=o.active,r.done=o.done,r.crit=o.crit,r.milestone=o.milestone,r.vert=o.vert,Rt=r,S.push(r)},"addTaskOrg"),te=(0,n.eW)(function(){const t=(0,n.eW)(function(r){const o=R[r];let a="";switch(R[r].raw.startTime.type){case"prevTaskEnd":{const k=gt(o.prevTaskId);o.startTime=k.endTime;break}case"getStartDate":a=Bt(void 0,j,R[r].raw.startTime.startData),a&&(R[r].startTime=a);break}return R[r].startTime&&(R[r].endTime=qt(R[r].startTime,j,R[r].raw.endTime.data,K),R[r].endTime&&(R[r].processed=!0,R[r].manualEndTime=Y(R[r].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Zt(R[r],j,E,ht))),R[r].processed},"compileTask");let i=!0;for(const[r,o]of R.entries())t(r),i=i&&o.processed;return i},"compileTasks"),Pe=(0,n.eW)(function(t,i){let r=i;(0,P.nV)().securityLevel!=="loose"&&(r=(0,st.N)(i)),t.split(",").forEach(function(o){gt(o)!==void 0&&(se(o,()=>{window.open(r,"_self")}),h.set(o,r))}),ee(t,"clickable")},"setLink"),ee=(0,n.eW)(function(t,i){t.split(",").forEach(function(r){let o=gt(r);o!==void 0&&o.classes.push(i)})},"setClass"),Ye=(0,n.eW)(function(t,i,r){if((0,P.nV)().securityLevel!=="loose"||i===void 0)return;let o=[];if(typeof r=="string"){o=r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let k=0;k<o.length;k++){let p=o[k].trim();p.startsWith('"')&&p.endsWith('"')&&(p=p.substr(1,p.length-2)),o[k]=p}}o.length===0&&o.push(t),gt(t)!==void 0&&se(t,()=>{kt.w8.runFunc(i,...o)})},"setClickFun"),se=(0,n.eW)(function(t,i){z.push(function(){const r=document.querySelector(`[id="${t}"]`);r!==null&&r.addEventListener("click",function(){i()})},function(){const r=document.querySelector(`[id="${t}-text"]`);r!==null&&r.addEventListener("click",function(){i()})})},"pushFun"),Ve=(0,n.eW)(function(t,i,r){t.split(",").forEach(function(o){Ye(o,i,r)}),ee(t,"clickable")},"setClickEvent"),Be=(0,n.eW)(function(t){z.forEach(function(i){i(t)})},"bindFunctions"),Re={getConfig:(0,n.eW)(()=>(0,P.nV)().gantt,"getConfig"),clear:ae,setDateFormat:he,getDateFormat:be,enableInclusiveEndDates:ke,endDatesAreInclusive:me,enableTopAxis:ye,topAxisEnabled:ge,setAxisFormat:oe,getAxisFormat:ce,setTickInterval:le,getTickInterval:ue,setTodayMarker:de,getTodayMarker:fe,setAccTitle:P.GN,getAccTitle:P.eu,setDiagramTitle:P.g2,getDiagramTitle:P.Kr,setDisplayMode:ve,getDisplayMode:pe,setAccDescription:P.U$,getAccDescription:P.Mx,addSection:De,getSections:Ee,getTasks:Ce,addTask:Oe,findTaskById:gt,addTaskOrg:$e,setIncludes:Te,getIncludes:xe,setExcludes:_e,getExcludes:we,setClickEvent:Ve,setLink:Pe,getLinks:We,bindFunctions:Be,parseDuration:Jt,isInvalidDate:Gt,setWeekday:Se,getWeekday:Me,setWeekend:Ie};function Nt(t,i,r){let o=!0;for(;o;)o=!1,r.forEach(function(a){const k="^\\s*"+a+"\\s*$",p=new RegExp(k);t[0].match(p)&&(i[a]=!0,t.shift(1),o=!0)})}(0,n.eW)(Nt,"getTaskTags"),Y.extend(Z);var Ne=(0,n.eW)(function(){n.cM.debug("Something is calling, setConf, remove the call")},"setConf"),ie={monday:T.Ox9,tuesday:T.YDX,wednesday:T.EFj,thursday:T.Igq,friday:T.y2j,saturday:T.LqH,sunday:T.Zyz},je=(0,n.eW)((t,i)=>{let r=[...t].map(()=>-1/0),o=[...t].sort((k,p)=>k.startTime-p.startTime||k.order-p.order),a=0;for(const k of o)for(let p=0;p<r.length;p++)if(k.startTime>=r[p]){r[p]=k.endTime,k.order=p+i,p>a&&(a=p);break}return a},"getMaxIntersections"),ct,jt=1e4,Ue=(0,n.eW)(function(t,i,r,o){const a=(0,P.nV)().gantt,k=(0,P.nV)().securityLevel;let p;k==="sandbox"&&(p=(0,T.Ys)("#i"+i));const L=k==="sandbox"?(0,T.Ys)(p.nodes()[0].contentDocument.body):(0,T.Ys)("body"),H=k==="sandbox"?p.nodes()[0].contentDocument:document,lt=H.getElementById(i);ct=lt.parentElement.offsetWidth,ct===void 0&&(ct=1200),a.useWidth!==void 0&&(ct=a.useWidth);const A=o.db.getTasks();let X=[];for(const v of A)X.push(v.type);X=Lt(X);const ut={};let Q=2*a.topPadding;if(o.db.getDisplayMode()==="compact"||a.displayMode==="compact"){const v={};for(const _ of A)v[_.section]===void 0?v[_.section]=[_]:v[_.section].push(_);let x=0;for(const _ of Object.keys(v)){const b=je(v[_],x)+1;x+=b,Q+=b*(a.barHeight+a.barGap),ut[_]=b}}else{Q+=A.length*(a.barHeight+a.barGap);for(const v of X)ut[v]=A.filter(x=>x.type===v).length}lt.setAttribute("viewBox","0 0 "+ct+" "+Q);const tt=L.select(`[id="${i}"]`),D=(0,T.Xf)().domain([(0,T.VV$)(A,function(v){return v.startTime}),(0,T.Fp7)(A,function(v){return v.endTime})]).rangeRound([0,ct-a.leftPadding-a.rightPadding]);function Et(v,x){const _=v.startTime,b=x.startTime;let y=0;return _>b?y=1:_<b&&(y=-1),y}(0,n.eW)(Et,"taskCompare"),A.sort(Et),Ct(A,ct,Q),(0,P.v2)(tt,Q,ct,a.useMaxWidth),tt.append("text").text(o.db.getDiagramTitle()).attr("x",ct/2).attr("y",a.titleTopMargin).attr("class","titleText");function Ct(v,x,_){const b=a.barHeight,y=b+a.barGap,c=a.topPadding,l=a.leftPadding,f=(0,T.BYU)().domain([0,X.length]).range(["#00B9FA","#F95002"]).interpolate(T.JHv);Mt(y,c,l,x,_,v,o.db.getExcludes(),o.db.getIncludes()),It(l,c,x,_),St(v,y,c,l,b,f,x,_),At(y,c,l,b,f),Ft(l,c,x,_)}(0,n.eW)(Ct,"makeGantt");function St(v,x,_,b,y,c,l){v.sort((e,m)=>e.vert===m.vert?0:e.vert?1:-1);const u=[...new Set(v.map(e=>e.order))].map(e=>v.find(m=>m.order===e));tt.append("g").selectAll("rect").data(u).enter().append("rect").attr("x",0).attr("y",function(e,m){return m=e.order,m*x+_-2}).attr("width",function(){return l-a.rightPadding/2}).attr("height",x).attr("class",function(e){for(const[m,M]of X.entries())if(e.type===M)return"section section"+m%a.numberSectionStyles;return"section section0"}).enter();const g=tt.append("g").selectAll("rect").data(v).enter(),s=o.db.getLinks();if(g.append("rect").attr("id",function(e){return e.id}).attr("rx",3).attr("ry",3).attr("x",function(e){return e.milestone?D(e.startTime)+b+.5*(D(e.endTime)-D(e.startTime))-.5*y:D(e.startTime)+b}).attr("y",function(e,m){return m=e.order,e.vert?a.gridLineStartPadding:m*x+_}).attr("width",function(e){return e.milestone?y:e.vert?.08*y:D(e.renderEndTime||e.endTime)-D(e.startTime)}).attr("height",function(e){return e.vert?A.length*(a.barHeight+a.barGap)+a.barHeight*2:y}).attr("transform-origin",function(e,m){return m=e.order,(D(e.startTime)+b+.5*(D(e.endTime)-D(e.startTime))).toString()+"px "+(m*x+_+.5*y).toString()+"px"}).attr("class",function(e){const m="task";let M="";e.classes.length>0&&(M=e.classes.join(" "));let w=0;for(const[V,O]of X.entries())e.type===O&&(w=V%a.numberSectionStyles);let W="";return e.active?e.crit?W+=" activeCrit":W=" active":e.done?e.crit?W=" doneCrit":W=" done":e.crit&&(W+=" crit"),W.length===0&&(W=" task"),e.milestone&&(W=" milestone "+W),e.vert&&(W=" vert "+W),W+=w,W+=" "+M,m+W}),g.append("text").attr("id",function(e){return e.id+"-text"}).text(function(e){return e.task}).attr("font-size",a.fontSize).attr("x",function(e){let m=D(e.startTime),M=D(e.renderEndTime||e.endTime);if(e.milestone&&(m+=.5*(D(e.endTime)-D(e.startTime))-.5*y,M=m+y),e.vert)return D(e.startTime)+b;const w=this.getBBox().width;return w>M-m?M+w+1.5*a.leftPadding>l?m+b-5:M+b+5:(M-m)/2+m+b}).attr("y",function(e,m){return e.vert?a.gridLineStartPadding+A.length*(a.barHeight+a.barGap)+60:(m=e.order,m*x+a.barHeight/2+(a.fontSize/2-2)+_)}).attr("text-height",y).attr("class",function(e){const m=D(e.startTime);let M=D(e.endTime);e.milestone&&(M=m+y);const w=this.getBBox().width;let W="";e.classes.length>0&&(W=e.classes.join(" "));let V=0;for(const[B,dt]of X.entries())e.type===dt&&(V=B%a.numberSectionStyles);let O="";return e.active&&(e.crit?O="activeCritText"+V:O="activeText"+V),e.done?e.crit?O=O+" doneCritText"+V:O=O+" doneText"+V:e.crit&&(O=O+" critText"+V),e.milestone&&(O+=" milestoneText"),e.vert&&(O+=" vertText"),w>M-m?M+w+1.5*a.leftPadding>l?W+" taskTextOutsideLeft taskTextOutside"+V+" "+O:W+" taskTextOutsideRight taskTextOutside"+V+" "+O+" width-"+w:W+" taskText taskText"+V+" "+O+" width-"+w}),(0,P.nV)().securityLevel==="sandbox"){let e;e=(0,T.Ys)("#i"+i);const m=e.nodes()[0].contentDocument;g.filter(function(M){return s.has(M.id)}).each(function(M){var w=m.querySelector("#"+M.id),W=m.querySelector("#"+M.id+"-text");const V=w.parentNode;var O=m.createElement("a");O.setAttribute("xlink:href",s.get(M.id)),O.setAttribute("target","_top"),V.appendChild(O),O.appendChild(w),O.appendChild(W)})}}(0,n.eW)(St,"drawRects");function Mt(v,x,_,b,y,c,l,f){if(l.length===0&&f.length===0)return;let u,g;for(const{startTime:w,endTime:W}of c)(u===void 0||w<u)&&(u=w),(g===void 0||W>g)&&(g=W);if(!u||!g)return;if(Y(g).diff(Y(u),"year")>5){n.cM.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const s=o.db.getDateFormat(),C=[];let e=null,m=Y(u);for(;m.valueOf()<=g;)o.db.isInvalidDate(m,s,l,f)?e?e.end=m:e={start:m,end:m}:e&&(C.push(e),e=null),m=m.add(1,"d");tt.append("g").selectAll("rect").data(C).enter().append("rect").attr("id",w=>"exclude-"+w.start.format("YYYY-MM-DD")).attr("x",w=>D(w.start.startOf("day"))+_).attr("y",a.gridLineStartPadding).attr("width",w=>D(w.end.endOf("day"))-D(w.start.startOf("day"))).attr("height",y-x-a.gridLineStartPadding).attr("transform-origin",function(w,W){return(D(w.start)+_+.5*(D(w.end)-D(w.start))).toString()+"px "+(W*v+.5*y).toString()+"px"}).attr("class","exclude-range")}(0,n.eW)(Mt,"drawExcludeDays");function xt(v,x,_,b){if(_<=0||v>x)return 1/0;const y=x-v,c=Y.duration({[b!=null?b:"day"]:_}).asMilliseconds();return c<=0?1/0:Math.ceil(y/c)}(0,n.eW)(xt,"getEstimatedTickCount");function It(v,x,_,b){var s;const y=o.db.getDateFormat(),c=o.db.getAxisFormat();let l;c?l=c:y==="D"?l="%d":l=(s=a.axisFormat)!=null?s:"%Y-%m-%d";let f=(0,T.LLu)(D).tickSize(-b+x+a.gridLineStartPadding).tickFormat((0,T.i$Z)(l));const g=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(o.db.getTickInterval()||a.tickInterval);if(g!==null){const C=parseInt(g[1],10);if(isNaN(C)||C<=0)n.cM.warn(`Invalid tick interval value: "${g[1]}". Skipping custom tick interval.`);else{const e=g[2],m=o.db.getWeekday()||a.weekday,M=D.domain(),w=M[0],W=M[1],V=xt(w,W,C,e);if(V>jt)n.cM.warn(`The tick interval "${C}${e}" would generate ${V} ticks, which exceeds the maximum allowed (${jt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(e){case"millisecond":f.ticks(T.U8T.every(C));break;case"second":f.ticks(T.S1K.every(C));break;case"minute":f.ticks(T.Z_i.every(C));break;case"hour":f.ticks(T.WQD.every(C));break;case"day":f.ticks(T.rr1.every(C));break;case"week":f.ticks(ie[m].every(C));break;case"month":f.ticks(T.F0B.every(C));break}}}if(tt.append("g").attr("class","grid").attr("transform","translate("+v+", "+(b-50)+")").call(f).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),o.db.topAxisEnabled()||a.topAxis){let C=(0,T.F5q)(D).tickSize(-b+x+a.gridLineStartPadding).tickFormat((0,T.i$Z)(l));if(g!==null){const e=parseInt(g[1],10);if(isNaN(e)||e<=0)n.cM.warn(`Invalid tick interval value: "${g[1]}". Skipping custom tick interval.`);else{const m=g[2],M=o.db.getWeekday()||a.weekday,w=D.domain(),W=w[0],V=w[1];if(xt(W,V,e,m)<=jt)switch(m){case"millisecond":C.ticks(T.U8T.every(e));break;case"second":C.ticks(T.S1K.every(e));break;case"minute":C.ticks(T.Z_i.every(e));break;case"hour":C.ticks(T.WQD.every(e));break;case"day":C.ticks(T.rr1.every(e));break;case"week":C.ticks(ie[M].every(e));break;case"month":C.ticks(T.F0B.every(e));break}}}tt.append("g").attr("class","grid").attr("transform","translate("+v+", "+x+")").call(C).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(0,n.eW)(It,"makeGrid");function At(v,x){let _=0;const b=Object.keys(ut).map(y=>[y,ut[y]]);tt.append("g").selectAll("text").data(b).enter().append(function(y){const c=y[0].split(P.SY.lineBreakRegex),l=-(c.length-1)/2,f=H.createElementNS("http://www.w3.org/2000/svg","text");f.setAttribute("dy",l+"em");for(const[u,g]of c.entries()){const s=H.createElementNS("http://www.w3.org/2000/svg","tspan");s.setAttribute("alignment-baseline","central"),s.setAttribute("x","10"),u>0&&s.setAttribute("dy","1em"),s.textContent=g,f.appendChild(s)}return f}).attr("x",10).attr("y",function(y,c){if(c>0)for(let l=0;l<c;l++)return _+=b[c-1][1],y[1]*v/2+_*v+x;else return y[1]*v/2+x}).attr("font-size",a.sectionFontSize).attr("class",function(y){for(const[c,l]of X.entries())if(y[0]===l)return"sectionTitle sectionTitle"+c%a.numberSectionStyles;return"sectionTitle"})}(0,n.eW)(At,"vertLabels");function Ft(v,x,_,b){const y=o.db.getTodayMarker();if(y==="off")return;const c=tt.append("g").attr("class","today"),l=new Date,f=c.append("line");f.attr("x1",D(l)+v).attr("x2",D(l)+v).attr("y1",a.titleTopMargin).attr("y2",b-a.titleTopMargin).attr("class","today"),y!==""&&f.attr("style",y.replace(/,/g,";"))}(0,n.eW)(Ft,"drawToday");function Lt(v){const x={},_=[];for(let b=0,y=v.length;b<y;++b)Object.prototype.hasOwnProperty.call(x,v[b])||(x[v[b]]=!0,_.push(v[b]));return _}(0,n.eW)(Lt,"checkUnique")},"draw"),ze={setConf:Ne,draw:Ue},Ke=(0,n.eW)(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),He=Ke,Xe={parser:ot,db:Re,renderer:ze,styles:He}}}]);
