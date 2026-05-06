(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[2806],{1646:function(Ft){(function(nt,M){Ft.exports=M()})(this,function(){"use strict";var nt,M,yt=1e3,P=6e4,n=36e5,st=864e5,Y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,N=31536e6,Q=2628e6,at=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,Z={years:N,months:Q,days:st,hours:n,minutes:P,seconds:yt,milliseconds:1,weeks:6048e5},b=function(E){return E instanceof pt},it=function(E,h,d){return new pt(E,d,h.$l)},ot=function(E){return M.p(E)+"s"},_t=function(E){return E<0},U=function(E){return _t(E)?Math.ceil(E):Math.floor(E)},wt=function(E){return Math.abs(E)},rt=function(E,h){return E?_t(E)?{negative:!0,format:""+wt(E)+h}:{negative:!1,format:""+E+h}:{negative:!1,format:""}},pt=function(){function E(d,S,A){var $=this;if(this.$d={},this.$l=A,d===void 0&&(this.$ms=0,this.parseFromMilliseconds()),S)return it(d*Z[ot(S)],this);if(typeof d=="number")return this.$ms=d,this.parseFromMilliseconds(),this;if(typeof d=="object")return Object.keys(d).forEach(function(K){$.$d[ot(K)]=d[K]}),this.calMilliseconds(),this;if(typeof d=="string"){var j=d.match(at);if(j){var z=j.slice(2).map(function(K){return K!=null?Number(K):0});return this.$d.years=z[0],this.$d.months=z[1],this.$d.weeks=z[2],this.$d.days=z[3],this.$d.hours=z[4],this.$d.minutes=z[5],this.$d.seconds=z[6],this.calMilliseconds(),this}}return this}var h=E.prototype;return h.calMilliseconds=function(){var d=this;this.$ms=Object.keys(this.$d).reduce(function(S,A){return S+(d.$d[A]||0)*Z[A]},0)},h.parseFromMilliseconds=function(){var d=this.$ms;this.$d.years=U(d/N),d%=N,this.$d.months=U(d/Q),d%=Q,this.$d.days=U(d/st),d%=st,this.$d.hours=U(d/n),d%=n,this.$d.minutes=U(d/P),d%=P,this.$d.seconds=U(d/yt),d%=yt,this.$d.milliseconds=d},h.toISOString=function(){var d=rt(this.$d.years,"Y"),S=rt(this.$d.months,"M"),A=+this.$d.days||0;this.$d.weeks&&(A+=7*this.$d.weeks);var $=rt(A,"D"),j=rt(this.$d.hours,"H"),z=rt(this.$d.minutes,"M"),K=this.$d.seconds||0;this.$d.milliseconds&&(K+=this.$d.milliseconds/1e3,K=Math.round(1e3*K)/1e3);var ct=rt(K,"S"),Wt=d.negative||S.negative||$.negative||j.negative||z.negative||ct.negative,Dt=j.format||z.format||ct.format?"T":"",mt=(Wt?"-":"")+"P"+d.format+S.format+$.format+Dt+j.format+z.format+ct.format;return mt==="P"||mt==="-P"?"P0D":mt},h.toJSON=function(){return this.toISOString()},h.format=function(d){var S=d||"YYYY-MM-DDTHH:mm:ss",A={Y:this.$d.years,YY:M.s(this.$d.years,2,"0"),YYYY:M.s(this.$d.years,4,"0"),M:this.$d.months,MM:M.s(this.$d.months,2,"0"),D:this.$d.days,DD:M.s(this.$d.days,2,"0"),H:this.$d.hours,HH:M.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:M.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:M.s(this.$d.seconds,2,"0"),SSS:M.s(this.$d.milliseconds,3,"0")};return S.replace(Y,function($,j){return j||String(A[$])})},h.as=function(d){return this.$ms/Z[ot(d)]},h.get=function(d){var S=this.$ms,A=ot(d);return A==="milliseconds"?S%=1e3:S=A==="weeks"?U(S/Z[A]):this.$d[A],S||0},h.add=function(d,S,A){var $;return $=S?d*Z[ot(S)]:b(d)?d.$ms:it(d,this).$ms,it(this.$ms+$*(A?-1:1),this)},h.subtract=function(d,S){return this.add(d,S,!0)},h.locale=function(d){var S=this.clone();return S.$l=d,S},h.clone=function(){return it(this.$ms,this)},h.humanize=function(d){return nt().add(this.$ms,"ms").locale(this.$l).fromNow(!d)},h.valueOf=function(){return this.asMilliseconds()},h.milliseconds=function(){return this.get("milliseconds")},h.asMilliseconds=function(){return this.as("milliseconds")},h.seconds=function(){return this.get("seconds")},h.asSeconds=function(){return this.as("seconds")},h.minutes=function(){return this.get("minutes")},h.asMinutes=function(){return this.as("minutes")},h.hours=function(){return this.get("hours")},h.asHours=function(){return this.as("hours")},h.days=function(){return this.get("days")},h.asDays=function(){return this.as("days")},h.weeks=function(){return this.get("weeks")},h.asWeeks=function(){return this.as("weeks")},h.months=function(){return this.get("months")},h.asMonths=function(){return this.as("months")},h.years=function(){return this.get("years")},h.asYears=function(){return this.as("years")},E}(),kt=function(E,h,d){return E.add(h.years()*d,"y").add(h.months()*d,"M").add(h.days()*d,"d").add(h.hours()*d,"h").add(h.minutes()*d,"m").add(h.seconds()*d,"s").add(h.milliseconds()*d,"ms")};return function(E,h,d){nt=d,M=d().$utils(),d.duration=function($,j){var z=d.locale();return it($,{$l:z},j)},d.isDuration=b;var S=h.prototype.add,A=h.prototype.subtract;h.prototype.add=function($,j){return b($)?kt(this,$,1):S.bind(this)($,j)},h.prototype.subtract=function($,j){return b($)?kt(this,$,-1):A.bind(this)($,j)}}})},59542:function(Ft){(function(nt,M){Ft.exports=M()})(this,function(){"use strict";var nt="day";return function(M,yt,P){var n=function(N){return N.add(4-N.isoWeekday(),nt)},st=yt.prototype;st.isoWeekYear=function(){return n(this).year()},st.isoWeek=function(N){if(!this.$utils().u(N))return this.add(7*(N-this.isoWeek()),nt);var Q,at,Z,b,it=n(this),ot=(Q=this.isoWeekYear(),at=this.$u,Z=(at?P.utc:P)().year(Q).startOf("year"),b=4-Z.isoWeekday(),Z.isoWeekday()>4&&(b+=7),Z.add(b,nt));return it.diff(ot,"week")+1},st.isoWeekday=function(N){return this.$utils().u(N)?this.day()||7:this.day(this.day()%7?N:N-7)};var Y=st.startOf;st.startOf=function(N,Q){var at=this.$utils(),Z=!!at.u(Q)||Q;return at.p(N)==="isoweek"?Z?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):Y.bind(this)(N,Q)}}})},52806:function(Ft,nt,M){"use strict";M.d(nt,{diagram:function(){return Ze}});var yt=M(82436),P=M(62227),n=M(35096),st=M(17967),Y=M(27484),N=M(59542),Q=M(10285),at=M(28734),Z=M(1646),b=M(989),it=function(){var t=(0,n.eW)(function(y,c,l,f){for(l=l||{},f=y.length;f--;l[y[f]]=c);return l},"o"),i=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],a=[1,26],r=[1,27],o=[1,28],k=[1,29],p=[1,30],L=[1,31],H=[1,32],ut=[1,33],O=[1,34],X=[1,9],dt=[1,10],q=[1,11],tt=[1,12],D=[1,13],Et=[1,14],Ct=[1,15],St=[1,16],It=[1,19],bt=[1,20],Mt=[1,21],Ot=[1,22],At=[1,23],Lt=[1,25],v=[1,35],x={trace:(0,n.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:(0,n.eW)(function(c,l,f,u,g,s,C){var e=s.length-1;switch(g){case 1:return s[e-1];case 2:this.$=[];break;case 3:s[e-1].push(s[e]),this.$=s[e-1];break;case 4:case 5:this.$=s[e];break;case 6:case 7:this.$=[];break;case 8:u.setWeekday("monday");break;case 9:u.setWeekday("tuesday");break;case 10:u.setWeekday("wednesday");break;case 11:u.setWeekday("thursday");break;case 12:u.setWeekday("friday");break;case 13:u.setWeekday("saturday");break;case 14:u.setWeekday("sunday");break;case 15:u.setWeekend("friday");break;case 16:u.setWeekend("saturday");break;case 17:u.setDateFormat(s[e].substr(11)),this.$=s[e].substr(11);break;case 18:u.enableInclusiveEndDates(),this.$=s[e].substr(18);break;case 19:u.TopAxis(),this.$=s[e].substr(8);break;case 20:u.setAxisFormat(s[e].substr(11)),this.$=s[e].substr(11);break;case 21:u.setTickInterval(s[e].substr(13)),this.$=s[e].substr(13);break;case 22:u.setExcludes(s[e].substr(9)),this.$=s[e].substr(9);break;case 23:u.setIncludes(s[e].substr(9)),this.$=s[e].substr(9);break;case 24:u.setTodayMarker(s[e].substr(12)),this.$=s[e].substr(12);break;case 27:u.setDiagramTitle(s[e].substr(6)),this.$=s[e].substr(6);break;case 28:this.$=s[e].trim(),u.setAccTitle(this.$);break;case 29:case 30:this.$=s[e].trim(),u.setAccDescription(this.$);break;case 31:u.addSection(s[e].substr(8)),this.$=s[e].substr(8);break;case 33:u.addTask(s[e-1],s[e]),this.$="task";break;case 34:this.$=s[e-1],u.setClickEvent(s[e-1],s[e],null);break;case 35:this.$=s[e-2],u.setClickEvent(s[e-2],s[e-1],s[e]);break;case 36:this.$=s[e-2],u.setClickEvent(s[e-2],s[e-1],null),u.setLink(s[e-2],s[e]);break;case 37:this.$=s[e-3],u.setClickEvent(s[e-3],s[e-2],s[e-1]),u.setLink(s[e-3],s[e]);break;case 38:this.$=s[e-2],u.setClickEvent(s[e-2],s[e],null),u.setLink(s[e-2],s[e-1]);break;case 39:this.$=s[e-3],u.setClickEvent(s[e-3],s[e-1],s[e]),u.setLink(s[e-3],s[e-2]);break;case 40:this.$=s[e-1],u.setLink(s[e-1],s[e]);break;case 41:case 47:this.$=s[e-1]+" "+s[e];break;case 42:case 43:case 45:this.$=s[e-2]+" "+s[e-1]+" "+s[e];break;case 44:case 46:this.$=s[e-3]+" "+s[e-2]+" "+s[e-1]+" "+s[e];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(i,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:a,13:r,14:o,15:k,16:p,17:L,18:H,19:18,20:ut,21:O,22:X,23:dt,24:q,25:tt,26:D,27:Et,28:Ct,29:St,30:It,31:bt,33:Mt,35:Ot,36:At,37:24,38:Lt,40:v},t(i,[2,7],{1:[2,1]}),t(i,[2,3]),{9:36,11:17,12:a,13:r,14:o,15:k,16:p,17:L,18:H,19:18,20:ut,21:O,22:X,23:dt,24:q,25:tt,26:D,27:Et,28:Ct,29:St,30:It,31:bt,33:Mt,35:Ot,36:At,37:24,38:Lt,40:v},t(i,[2,5]),t(i,[2,6]),t(i,[2,17]),t(i,[2,18]),t(i,[2,19]),t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),t(i,[2,23]),t(i,[2,24]),t(i,[2,25]),t(i,[2,26]),t(i,[2,27]),{32:[1,37]},{34:[1,38]},t(i,[2,30]),t(i,[2,31]),t(i,[2,32]),{39:[1,39]},t(i,[2,8]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),{41:[1,40],43:[1,41]},t(i,[2,4]),t(i,[2,28]),t(i,[2,29]),t(i,[2,33]),t(i,[2,34],{42:[1,42],43:[1,43]}),t(i,[2,40],{41:[1,44]}),t(i,[2,35],{43:[1,45]}),t(i,[2,36]),t(i,[2,38],{42:[1,46]}),t(i,[2,37]),t(i,[2,39])],defaultActions:{},parseError:(0,n.eW)(function(c,l){if(l.recoverable)this.trace(c);else{var f=new Error(c);throw f.hash=l,f}},"parseError"),parse:(0,n.eW)(function(c){var l=this,f=[0],u=[],g=[null],s=[],C=this.table,e="",m=0,I=0,w=0,W=2,R=1,F=s.slice.call(arguments,1),V=Object.create(this.lexer),ft={yy:{}};for(var zt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,zt)&&(ft.yy[zt]=this.yy[zt]);V.setInput(c,ft.yy),ft.yy.lexer=V,ft.yy.parser=this,typeof V.yylloc=="undefined"&&(V.yylloc={});var Kt=V.yylloc;s.push(Kt);var Je=V.options&&V.options.ranges;typeof ft.yy.parseError=="function"?this.parseError=ft.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Qe(J){f.length=f.length-2*J,g.length=g.length-J,s.length=s.length-J}(0,n.eW)(Qe,"popStack");function re(){var J;return J=u.pop()||V.lex()||R,typeof J!="number"&&(J instanceof Array&&(u=J,J=u.pop()),J=l.symbols_[J]||J),J}(0,n.eW)(re,"lex");for(var G,Ht,vt,et,qe,Xt,xt={},Yt,ht,ae,Rt;;){if(vt=f[f.length-1],this.defaultActions[vt]?et=this.defaultActions[vt]:((G===null||typeof G=="undefined")&&(G=re()),et=C[vt]&&C[vt][G]),typeof et=="undefined"||!et.length||!et[0]){var Gt="";Rt=[];for(Yt in C[vt])this.terminals_[Yt]&&Yt>W&&Rt.push("'"+this.terminals_[Yt]+"'");V.showPosition?Gt="Parse error on line "+(m+1)+`:
`+V.showPosition()+`
Expecting `+Rt.join(", ")+", got '"+(this.terminals_[G]||G)+"'":Gt="Parse error on line "+(m+1)+": Unexpected "+(G==R?"end of input":"'"+(this.terminals_[G]||G)+"'"),this.parseError(Gt,{text:V.match,token:this.terminals_[G]||G,line:V.yylineno,loc:Kt,expected:Rt})}if(et[0]instanceof Array&&et.length>1)throw new Error("Parse Error: multiple actions possible at state: "+vt+", token: "+G);switch(et[0]){case 1:f.push(G),g.push(V.yytext),s.push(V.yylloc),f.push(et[1]),G=null,Ht?(G=Ht,Ht=null):(I=V.yyleng,e=V.yytext,m=V.yylineno,Kt=V.yylloc,w>0&&w--);break;case 2:if(ht=this.productions_[et[1]][1],xt.$=g[g.length-ht],xt._$={first_line:s[s.length-(ht||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(ht||1)].first_column,last_column:s[s.length-1].last_column},Je&&(xt._$.range=[s[s.length-(ht||1)].range[0],s[s.length-1].range[1]]),Xt=this.performAction.apply(xt,[e,I,m,ft.yy,et[1],g,s].concat(F)),typeof Xt!="undefined")return Xt;ht&&(f=f.slice(0,-1*ht*2),g=g.slice(0,-1*ht),s=s.slice(0,-1*ht)),f.push(this.productions_[et[1]][0]),g.push(xt.$),s.push(xt._$),ae=C[f[f.length-2]][f[f.length-1]],f.push(ae);break;case 3:return!0}}return!0},"parse")},_=function(){var y={EOF:1,parseError:(0,n.eW)(function(l,f){if(this.yy.parser)this.yy.parser.parseError(l,f);else throw new Error(l)},"parseError"),setInput:(0,n.eW)(function(c,l){return this.yy=l||this.yy||{},this._input=c,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,n.eW)(function(){var c=this._input[0];this.yytext+=c,this.yyleng++,this.offset++,this.match+=c,this.matched+=c;var l=c.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),c},"input"),unput:(0,n.eW)(function(c){var l=c.length,f=c.split(/(?:\r\n?|\n)/g);this._input=c+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var g=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===u.length?this.yylloc.first_column:0)+u[u.length-f.length].length-f[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[g[0],g[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},"unput"),more:(0,n.eW)(function(){return this._more=!0,this},"more"),reject:(0,n.eW)(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:(0,n.eW)(function(c){this.unput(this.match.slice(c))},"less"),pastInput:(0,n.eW)(function(){var c=this.matched.substr(0,this.matched.length-this.match.length);return(c.length>20?"...":"")+c.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,n.eW)(function(){var c=this.match;return c.length<20&&(c+=this._input.substr(0,20-c.length)),(c.substr(0,20)+(c.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,n.eW)(function(){var c=this.pastInput(),l=new Array(c.length+1).join("-");return c+this.upcomingInput()+`
`+l+"^"},"showPosition"),test_match:(0,n.eW)(function(c,l){var f,u,g;if(this.options.backtrack_lexer&&(g={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(g.yylloc.range=this.yylloc.range.slice(0))),u=c[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+c[0].length},this.yytext+=c[0],this.match+=c[0],this.matches=c,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(c[0].length),this.matched+=c[0],f=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var s in g)this[s]=g[s];return!1}return!1},"test_match"),next:(0,n.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var c,l,f,u;this._more||(this.yytext="",this.match="");for(var g=this._currentRules(),s=0;s<g.length;s++)if(f=this._input.match(this.rules[g[s]]),f&&(!l||f[0].length>l[0].length)){if(l=f,u=s,this.options.backtrack_lexer){if(c=this.test_match(f,g[s]),c!==!1)return c;if(this._backtrack){l=!1;continue}else return!1}else if(!this.options.flex)break}return l?(c=this.test_match(l,g[u]),c!==!1?c:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,n.eW)(function(){var l=this.next();return l||this.lex()},"lex"),begin:(0,n.eW)(function(l){this.conditionStack.push(l)},"begin"),popState:(0,n.eW)(function(){var l=this.conditionStack.length-1;return l>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,n.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,n.eW)(function(l){return l=this.conditionStack.length-1-Math.abs(l||0),l>=0?this.conditionStack[l]:"INITIAL"},"topState"),pushState:(0,n.eW)(function(l){this.begin(l)},"pushState"),stateStackSize:(0,n.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,n.eW)(function(l,f,u,g){var s=g;switch(u){case 0:return this.begin("open_directive"),"open_directive";break;case 1:return this.begin("acc_title"),31;break;case 2:return this.popState(),"acc_title_value";break;case 3:return this.begin("acc_descr"),33;break;case 4:return this.popState(),"acc_descr_value";break;case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return y}();x.lexer=_;function T(){this.yy={}}return(0,n.eW)(T,"Parser"),T.prototype=x,x.Parser=T,new T}();it.parser=it;var ot=it;Y.extend(N),Y.extend(Q),Y.extend(at);var _t={friday:5,saturday:6},U="",wt="",rt=void 0,pt="",kt=[],E=[],h=new Map,d=[],S=[],A="",$="",j=["active","done","crit","milestone","vert"],z=[],K="",ct=!1,Wt=!1,Dt="sunday",mt="saturday",Vt=0,oe=(0,n.eW)(function(){d=[],S=[],A="",z=[],$t=0,Nt=void 0,Pt=void 0,B=[],U="",wt="",$="",rt=void 0,pt="",kt=[],E=[],ct=!1,Wt=!1,Vt=0,h=new Map,K="",(0,P.ZH)(),Dt="sunday",mt="saturday"},"clear"),ce=(0,n.eW)(function(t){K=t},"setDiagramId"),le=(0,n.eW)(function(t){wt=t},"setAxisFormat"),ue=(0,n.eW)(function(){return wt},"getAxisFormat"),de=(0,n.eW)(function(t){rt=t},"setTickInterval"),fe=(0,n.eW)(function(){return rt},"getTickInterval"),he=(0,n.eW)(function(t){pt=t},"setTodayMarker"),ke=(0,n.eW)(function(){return pt},"getTodayMarker"),me=(0,n.eW)(function(t){U=t},"setDateFormat"),ye=(0,n.eW)(function(){ct=!0},"enableInclusiveEndDates"),ge=(0,n.eW)(function(){return ct},"endDatesAreInclusive"),ve=(0,n.eW)(function(){Wt=!0},"enableTopAxis"),pe=(0,n.eW)(function(){return Wt},"topAxisEnabled"),Te=(0,n.eW)(function(t){$=t},"setDisplayMode"),be=(0,n.eW)(function(){return $},"getDisplayMode"),xe=(0,n.eW)(function(){return U},"getDateFormat"),_e=(0,n.eW)(function(t){kt=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),we=(0,n.eW)(function(){return kt},"getIncludes"),We=(0,n.eW)(function(t){E=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),De=(0,n.eW)(function(){return E},"getExcludes"),Ee=(0,n.eW)(function(){return h},"getLinks"),Ce=(0,n.eW)(function(t){A=t,d.push(t)},"addSection"),Se=(0,n.eW)(function(){return d},"getSections"),Ie=(0,n.eW)(function(){let t=ee();const i=10;let a=0;for(;!t&&a<i;)t=ee(),a++;return S=B,S},"getTasks"),Zt=(0,n.eW)(function(t,i,a,r){const o=t.format(i.trim()),k=t.format("YYYY-MM-DD");return r.includes(o)||r.includes(k)?!1:a.includes("weekends")&&(t.isoWeekday()===_t[mt]||t.isoWeekday()===_t[mt]+1)||a.includes(t.format("dddd").toLowerCase())?!0:a.includes(o)||a.includes(k)},"isInvalidDate"),Me=(0,n.eW)(function(t){Dt=t},"setWeekday"),Oe=(0,n.eW)(function(){return Dt},"getWeekday"),Ae=(0,n.eW)(function(t){mt=t},"setWeekend"),Jt=(0,n.eW)(function(t,i,a,r){if(!a.length||t.manualEndTime)return;let o;t.startTime instanceof Date?o=Y(t.startTime):o=Y(t.startTime,i,!0),o=o.add(1,"d");let k;t.endTime instanceof Date?k=Y(t.endTime):k=Y(t.endTime,i,!0);const[p,L]=Le(o,k,i,a,r);t.endTime=p.toDate(),t.renderEndTime=L},"checkTaskDates"),Le=(0,n.eW)(function(t,i,a,r,o){let k=!1,p=null;for(;t<=i;)k||(p=i.toDate()),k=Zt(t,a,r,o),k&&(i=i.add(1,"d")),t=t.add(1,"d");return[i,p]},"fixTaskDates"),Bt=(0,n.eW)(function(t,i,a){if(a=a.trim(),(0,n.eW)(L=>{const H=L.trim();return H==="x"||H==="X"},"isTimestampFormat")(i)&&/^\d+$/.test(a))return new Date(Number(a));const k=new RegExp("^after\\s+(?<ids>[\\d\\w- ]+)").exec(a);if(k!==null){let L=null;for(const ut of k.groups.ids.split(" ")){let O=gt(ut);O!==void 0&&(!L||O.endTime>L.endTime)&&(L=O)}if(L)return L.endTime;const H=new Date;return H.setHours(0,0,0,0),H}let p=Y(a,i.trim(),!0);if(p.isValid())return p.toDate();{n.cM.debug("Invalid date:"+a),n.cM.debug("With date format:"+i.trim());const L=new Date(a);if(L===void 0||isNaN(L.getTime())||L.getFullYear()<-1e4||L.getFullYear()>1e4)throw new Error("Invalid date:"+a);return L}},"getStartDate"),Qt=(0,n.eW)(function(t){const i=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return i!==null?[Number.parseFloat(i[1]),i[2]]:[NaN,"ms"]},"parseDuration"),qt=(0,n.eW)(function(t,i,a,r=!1){a=a.trim();const k=new RegExp("^until\\s+(?<ids>[\\d\\w- ]+)").exec(a);if(k!==null){let O=null;for(const dt of k.groups.ids.split(" ")){let q=gt(dt);q!==void 0&&(!O||q.startTime<O.startTime)&&(O=q)}if(O)return O.startTime;const X=new Date;return X.setHours(0,0,0,0),X}let p=Y(a,i.trim(),!0);if(p.isValid())return r&&(p=p.add(1,"d")),p.toDate();let L=Y(t);const[H,ut]=Qt(a);if(!Number.isNaN(H)){const O=L.add(H,ut);O.isValid()&&(L=O)}return L.toDate()},"getEndDate"),$t=0,Tt=(0,n.eW)(function(t){return t===void 0?($t=$t+1,"task"+$t):t},"parseId"),Fe=(0,n.eW)(function(t,i){let a;i.substr(0,1)===":"?a=i.substr(1,i.length):a=i;const r=a.split(","),o={};Ut(r,o,j);for(let p=0;p<r.length;p++)r[p]=r[p].trim();let k="";switch(r.length){case 1:o.id=Tt(),o.startTime=t.endTime,k=r[0];break;case 2:o.id=Tt(),o.startTime=Bt(void 0,U,r[0]),k=r[1];break;case 3:o.id=Tt(r[0]),o.startTime=Bt(void 0,U,r[1]),k=r[2];break;default:}return k&&(o.endTime=qt(o.startTime,U,k,ct),o.manualEndTime=Y(k,"YYYY-MM-DD",!0).isValid(),Jt(o,U,E,kt)),o},"compileData"),$e=(0,n.eW)(function(t,i){let a;i.substr(0,1)===":"?a=i.substr(1,i.length):a=i;const r=a.split(","),o={};Ut(r,o,j);for(let k=0;k<r.length;k++)r[k]=r[k].trim();switch(r.length){case 1:o.id=Tt(),o.startTime={type:"prevTaskEnd",id:t},o.endTime={data:r[0]};break;case 2:o.id=Tt(),o.startTime={type:"getStartDate",startData:r[0]},o.endTime={data:r[1]};break;case 3:o.id=Tt(r[0]),o.startTime={type:"getStartDate",startData:r[1]},o.endTime={data:r[2]};break;default:}return o},"parseData"),Nt,Pt,B=[],te={},Pe=(0,n.eW)(function(t,i){const a={section:A,type:A,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:i},task:t,classes:[]},r=$e(Pt,i);a.raw.startTime=r.startTime,a.raw.endTime=r.endTime,a.id=r.id,a.prevTaskId=Pt,a.active=r.active,a.done=r.done,a.crit=r.crit,a.milestone=r.milestone,a.vert=r.vert,a.order=Vt,Vt++;const o=B.push(a);Pt=a.id,te[a.id]=o-1},"addTask"),gt=(0,n.eW)(function(t){const i=te[t];return B[i]},"findTaskById"),Ye=(0,n.eW)(function(t,i){const a={section:A,type:A,description:t,task:t,classes:[]},r=Fe(Nt,i);a.startTime=r.startTime,a.endTime=r.endTime,a.id=r.id,a.active=r.active,a.done=r.done,a.crit=r.crit,a.milestone=r.milestone,a.vert=r.vert,Nt=a,S.push(a)},"addTaskOrg"),ee=(0,n.eW)(function(){const t=(0,n.eW)(function(a){const r=B[a];let o="";switch(B[a].raw.startTime.type){case"prevTaskEnd":{const k=gt(r.prevTaskId);r.startTime=k.endTime;break}case"getStartDate":o=Bt(void 0,U,B[a].raw.startTime.startData),o&&(B[a].startTime=o);break}return B[a].startTime&&(B[a].endTime=qt(B[a].startTime,U,B[a].raw.endTime.data,ct),B[a].endTime&&(B[a].processed=!0,B[a].manualEndTime=Y(B[a].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Jt(B[a],U,E,kt))),B[a].processed},"compileTask");let i=!0;for(const[a,r]of B.entries())t(a),i=i&&r.processed;return i},"compileTasks"),Re=(0,n.eW)(function(t,i){let a=i;(0,P.nV)().securityLevel!=="loose"&&(a=(0,st.N)(i)),t.split(",").forEach(function(r){gt(r)!==void 0&&(ie(r,()=>{window.open(a,"_self")}),h.set(r,a))}),se(t,"clickable")},"setLink"),se=(0,n.eW)(function(t,i){t.split(",").forEach(function(a){let r=gt(a);r!==void 0&&r.classes.push(i)})},"setClass"),Ve=(0,n.eW)(function(t,i,a){if((0,P.nV)().securityLevel!=="loose"||i===void 0)return;let r=[];if(typeof a=="string"){r=a.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let k=0;k<r.length;k++){let p=r[k].trim();p.startsWith('"')&&p.endsWith('"')&&(p=p.substr(1,p.length-2)),r[k]=p}}r.length===0&&r.push(t),gt(t)!==void 0&&ie(t,()=>{yt.w8.runFunc(i,...r)})},"setClickFun"),ie=(0,n.eW)(function(t,i){z.push(function(){const a=K?`${K}-${t}`:t,r=document.querySelector(`[id="${a}"]`);r!==null&&r.addEventListener("click",function(){i()})},function(){const a=K?`${K}-${t}`:t,r=document.querySelector(`[id="${a}-text"]`);r!==null&&r.addEventListener("click",function(){i()})})},"pushFun"),Be=(0,n.eW)(function(t,i,a){t.split(",").forEach(function(r){Ve(r,i,a)}),se(t,"clickable")},"setClickEvent"),Ne=(0,n.eW)(function(t){z.forEach(function(i){i(t)})},"bindFunctions"),Ue={getConfig:(0,n.eW)(()=>(0,P.nV)().gantt,"getConfig"),clear:oe,setDateFormat:me,getDateFormat:xe,enableInclusiveEndDates:ye,endDatesAreInclusive:ge,enableTopAxis:ve,topAxisEnabled:pe,setAxisFormat:le,getAxisFormat:ue,setTickInterval:de,getTickInterval:fe,setTodayMarker:he,getTodayMarker:ke,setAccTitle:P.GN,getAccTitle:P.eu,setDiagramTitle:P.g2,getDiagramTitle:P.Kr,setDiagramId:ce,setDisplayMode:Te,getDisplayMode:be,setAccDescription:P.U$,getAccDescription:P.Mx,addSection:Ce,getSections:Se,getTasks:Ie,addTask:Pe,findTaskById:gt,addTaskOrg:Ye,setIncludes:_e,getIncludes:we,setExcludes:We,getExcludes:De,setClickEvent:Be,setLink:Re,getLinks:Ee,bindFunctions:Ne,parseDuration:Qt,isInvalidDate:Zt,setWeekday:Me,getWeekday:Oe,setWeekend:Ae};function Ut(t,i,a){let r=!0;for(;r;)r=!1,a.forEach(function(o){const k="^\\s*"+o+"\\s*$",p=new RegExp(k);t[0].match(p)&&(i[o]=!0,t.shift(1),r=!0)})}(0,n.eW)(Ut,"getTaskTags"),Y.extend(Z);var je=(0,n.eW)(function(){n.cM.debug("Something is calling, setConf, remove the call")},"setConf"),ne={monday:b.Ox9,tuesday:b.YDX,wednesday:b.EFj,thursday:b.Igq,friday:b.y2j,saturday:b.LqH,sunday:b.Zyz},ze=(0,n.eW)((t,i)=>{let a=[...t].map(()=>-1/0),r=[...t].sort((k,p)=>k.startTime-p.startTime||k.order-p.order),o=0;for(const k of r)for(let p=0;p<a.length;p++)if(k.startTime>=a[p]){a[p]=k.endTime,k.order=p+i,p>o&&(o=p);break}return o},"getMaxIntersections"),lt,jt=1e4,Ke=(0,n.eW)(function(t,i,a,r){const o=(0,P.nV)().gantt;r.db.setDiagramId(i);const k=(0,P.nV)().securityLevel;let p;k==="sandbox"&&(p=(0,b.Ys)("#i"+i));const L=k==="sandbox"?(0,b.Ys)(p.nodes()[0].contentDocument.body):(0,b.Ys)("body"),H=k==="sandbox"?p.nodes()[0].contentDocument:document,ut=H.getElementById(i);lt=ut.parentElement.offsetWidth,lt===void 0&&(lt=1200),o.useWidth!==void 0&&(lt=o.useWidth);const O=r.db.getTasks();let X=[];for(const v of O)X.push(v.type);X=Lt(X);const dt={};let q=2*o.topPadding;if(r.db.getDisplayMode()==="compact"||o.displayMode==="compact"){const v={};for(const _ of O)v[_.section]===void 0?v[_.section]=[_]:v[_.section].push(_);let x=0;for(const _ of Object.keys(v)){const T=ze(v[_],x)+1;x+=T,q+=T*(o.barHeight+o.barGap),dt[_]=T}}else{q+=O.length*(o.barHeight+o.barGap);for(const v of X)dt[v]=O.filter(x=>x.type===v).length}ut.setAttribute("viewBox","0 0 "+lt+" "+q);const tt=L.select(`[id="${i}"]`),D=(0,b.Xf)().domain([(0,b.VV$)(O,function(v){return v.startTime}),(0,b.Fp7)(O,function(v){return v.endTime})]).rangeRound([0,lt-o.leftPadding-o.rightPadding]);function Et(v,x){const _=v.startTime,T=x.startTime;let y=0;return _>T?y=1:_<T&&(y=-1),y}(0,n.eW)(Et,"taskCompare"),O.sort(Et),Ct(O,lt,q),(0,P.v2)(tt,q,lt,o.useMaxWidth),tt.append("text").text(r.db.getDiagramTitle()).attr("x",lt/2).attr("y",o.titleTopMargin).attr("class","titleText");function Ct(v,x,_){const T=o.barHeight,y=T+o.barGap,c=o.topPadding,l=o.leftPadding,f=(0,b.BYU)().domain([0,X.length]).range(["#00B9FA","#F95002"]).interpolate(b.JHv);It(y,c,l,x,_,v,r.db.getExcludes(),r.db.getIncludes()),Mt(l,c,x,_),St(v,y,c,l,T,f,x,_),Ot(y,c,l,T,f),At(l,c,x,_)}(0,n.eW)(Ct,"makeGantt");function St(v,x,_,T,y,c,l){v.sort((e,m)=>e.vert===m.vert?0:e.vert?1:-1);const u=[...new Set(v.map(e=>e.order))].map(e=>v.find(m=>m.order===e));tt.append("g").selectAll("rect").data(u).enter().append("rect").attr("x",0).attr("y",function(e,m){return m=e.order,m*x+_-2}).attr("width",function(){return l-o.rightPadding/2}).attr("height",x).attr("class",function(e){for(const[m,I]of X.entries())if(e.type===I)return"section section"+m%o.numberSectionStyles;return"section section0"}).enter();const g=tt.append("g").selectAll("rect").data(v).enter(),s=r.db.getLinks();if(g.append("rect").attr("id",function(e){return i+"-"+e.id}).attr("rx",3).attr("ry",3).attr("x",function(e){return e.milestone?D(e.startTime)+T+.5*(D(e.endTime)-D(e.startTime))-.5*y:D(e.startTime)+T}).attr("y",function(e,m){return m=e.order,e.vert?o.gridLineStartPadding:m*x+_}).attr("width",function(e){return e.milestone?y:e.vert?.08*y:D(e.renderEndTime||e.endTime)-D(e.startTime)}).attr("height",function(e){return e.vert?O.length*(o.barHeight+o.barGap)+o.barHeight*2:y}).attr("transform-origin",function(e,m){return m=e.order,(D(e.startTime)+T+.5*(D(e.endTime)-D(e.startTime))).toString()+"px "+(m*x+_+.5*y).toString()+"px"}).attr("class",function(e){const m="task";let I="";e.classes.length>0&&(I=e.classes.join(" "));let w=0;for(const[R,F]of X.entries())e.type===F&&(w=R%o.numberSectionStyles);let W="";return e.active?e.crit?W+=" activeCrit":W=" active":e.done?e.crit?W=" doneCrit":W=" done":e.crit&&(W+=" crit"),W.length===0&&(W=" task"),e.milestone&&(W=" milestone "+W),e.vert&&(W=" vert "+W),W+=w,W+=" "+I,m+W}),g.append("text").attr("id",function(e){return i+"-"+e.id+"-text"}).text(function(e){return e.task}).attr("font-size",o.fontSize).attr("x",function(e){let m=D(e.startTime),I=D(e.renderEndTime||e.endTime);if(e.milestone&&(m+=.5*(D(e.endTime)-D(e.startTime))-.5*y,I=m+y),e.vert)return D(e.startTime)+T;const w=this.getBBox().width;return w>I-m?I+w+1.5*o.leftPadding>l?m+T-5:I+T+5:(I-m)/2+m+T}).attr("y",function(e,m){return e.vert?o.gridLineStartPadding+O.length*(o.barHeight+o.barGap)+60:(m=e.order,m*x+o.barHeight/2+(o.fontSize/2-2)+_)}).attr("text-height",y).attr("class",function(e){const m=D(e.startTime);let I=D(e.endTime);e.milestone&&(I=m+y);const w=this.getBBox().width;let W="";e.classes.length>0&&(W=e.classes.join(" "));let R=0;for(const[V,ft]of X.entries())e.type===ft&&(R=V%o.numberSectionStyles);let F="";return e.active&&(e.crit?F="activeCritText"+R:F="activeText"+R),e.done?e.crit?F=F+" doneCritText"+R:F=F+" doneText"+R:e.crit&&(F=F+" critText"+R),e.milestone&&(F+=" milestoneText"),e.vert&&(F+=" vertText"),w>I-m?I+w+1.5*o.leftPadding>l?W+" taskTextOutsideLeft taskTextOutside"+R+" "+F:W+" taskTextOutsideRight taskTextOutside"+R+" "+F+" width-"+w:W+" taskText taskText"+R+" "+F+" width-"+w}),(0,P.nV)().securityLevel==="sandbox"){let e;e=(0,b.Ys)("#i"+i);const m=e.nodes()[0].contentDocument;g.filter(function(I){return s.has(I.id)}).each(function(I){var w=m.querySelector("#"+CSS.escape(i+"-"+I.id)),W=m.querySelector("#"+CSS.escape(i+"-"+I.id+"-text"));const R=w.parentNode;var F=m.createElement("a");F.setAttribute("xlink:href",s.get(I.id)),F.setAttribute("target","_top"),R.appendChild(F),F.appendChild(w),F.appendChild(W)})}}(0,n.eW)(St,"drawRects");function It(v,x,_,T,y,c,l,f){if(l.length===0&&f.length===0)return;let u,g;for(const{startTime:w,endTime:W}of c)(u===void 0||w<u)&&(u=w),(g===void 0||W>g)&&(g=W);if(!u||!g)return;if(Y(g).diff(Y(u),"year")>5){n.cM.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const s=r.db.getDateFormat(),C=[];let e=null,m=Y(u);for(;m.valueOf()<=g;)r.db.isInvalidDate(m,s,l,f)?e?e.end=m:e={start:m,end:m}:e&&(C.push(e),e=null),m=m.add(1,"d");tt.append("g").selectAll("rect").data(C).enter().append("rect").attr("id",w=>i+"-exclude-"+w.start.format("YYYY-MM-DD")).attr("x",w=>D(w.start.startOf("day"))+_).attr("y",o.gridLineStartPadding).attr("width",w=>D(w.end.endOf("day"))-D(w.start.startOf("day"))).attr("height",y-x-o.gridLineStartPadding).attr("transform-origin",function(w,W){return(D(w.start)+_+.5*(D(w.end)-D(w.start))).toString()+"px "+(W*v+.5*y).toString()+"px"}).attr("class","exclude-range")}(0,n.eW)(It,"drawExcludeDays");function bt(v,x,_,T){if(_<=0||v>x)return 1/0;const y=x-v,c=Y.duration({[T!=null?T:"day"]:_}).asMilliseconds();return c<=0?1/0:Math.ceil(y/c)}(0,n.eW)(bt,"getEstimatedTickCount");function Mt(v,x,_,T){var s;const y=r.db.getDateFormat(),c=r.db.getAxisFormat();let l;c?l=c:y==="D"?l="%d":l=(s=o.axisFormat)!=null?s:"%Y-%m-%d";let f=(0,b.LLu)(D).tickSize(-T+x+o.gridLineStartPadding).tickFormat((0,b.i$Z)(l));const g=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval()||o.tickInterval);if(g!==null){const C=parseInt(g[1],10);if(isNaN(C)||C<=0)n.cM.warn(`Invalid tick interval value: "${g[1]}". Skipping custom tick interval.`);else{const e=g[2],m=r.db.getWeekday()||o.weekday,I=D.domain(),w=I[0],W=I[1],R=bt(w,W,C,e);if(R>jt)n.cM.warn(`The tick interval "${C}${e}" would generate ${R} ticks, which exceeds the maximum allowed (${jt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(e){case"millisecond":f.ticks(b.U8T.every(C));break;case"second":f.ticks(b.S1K.every(C));break;case"minute":f.ticks(b.Z_i.every(C));break;case"hour":f.ticks(b.WQD.every(C));break;case"day":f.ticks(b.rr1.every(C));break;case"week":f.ticks(ne[m].every(C));break;case"month":f.ticks(b.F0B.every(C));break}}}if(tt.append("g").attr("class","grid").attr("transform","translate("+v+", "+(T-50)+")").call(f).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),r.db.topAxisEnabled()||o.topAxis){let C=(0,b.F5q)(D).tickSize(-T+x+o.gridLineStartPadding).tickFormat((0,b.i$Z)(l));if(g!==null){const e=parseInt(g[1],10);if(isNaN(e)||e<=0)n.cM.warn(`Invalid tick interval value: "${g[1]}". Skipping custom tick interval.`);else{const m=g[2],I=r.db.getWeekday()||o.weekday,w=D.domain(),W=w[0],R=w[1];if(bt(W,R,e,m)<=jt)switch(m){case"millisecond":C.ticks(b.U8T.every(e));break;case"second":C.ticks(b.S1K.every(e));break;case"minute":C.ticks(b.Z_i.every(e));break;case"hour":C.ticks(b.WQD.every(e));break;case"day":C.ticks(b.rr1.every(e));break;case"week":C.ticks(ne[I].every(e));break;case"month":C.ticks(b.F0B.every(e));break}}}tt.append("g").attr("class","grid").attr("transform","translate("+v+", "+x+")").call(C).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(0,n.eW)(Mt,"makeGrid");function Ot(v,x){let _=0;const T=Object.keys(dt).map(y=>[y,dt[y]]);tt.append("g").selectAll("text").data(T).enter().append(function(y){const c=y[0].split(P.SY.lineBreakRegex),l=-(c.length-1)/2,f=H.createElementNS("http://www.w3.org/2000/svg","text");f.setAttribute("dy",l+"em");for(const[u,g]of c.entries()){const s=H.createElementNS("http://www.w3.org/2000/svg","tspan");s.setAttribute("alignment-baseline","central"),s.setAttribute("x","10"),u>0&&s.setAttribute("dy","1em"),s.textContent=g,f.appendChild(s)}return f}).attr("x",10).attr("y",function(y,c){if(c>0)for(let l=0;l<c;l++)return _+=T[c-1][1],y[1]*v/2+_*v+x;else return y[1]*v/2+x}).attr("font-size",o.sectionFontSize).attr("class",function(y){for(const[c,l]of X.entries())if(y[0]===l)return"sectionTitle sectionTitle"+c%o.numberSectionStyles;return"sectionTitle"})}(0,n.eW)(Ot,"vertLabels");function At(v,x,_,T){const y=r.db.getTodayMarker();if(y==="off")return;const c=tt.append("g").attr("class","today"),l=new Date,f=c.append("line");f.attr("x1",D(l)+v).attr("x2",D(l)+v).attr("y1",o.titleTopMargin).attr("y2",T-o.titleTopMargin).attr("class","today"),y!==""&&f.attr("style",y.replace(/,/g,";"))}(0,n.eW)(At,"drawToday");function Lt(v){const x={},_=[];for(let T=0,y=v.length;T<y;++T)Object.prototype.hasOwnProperty.call(x,v[T])||(x[v[T]]=!0,_.push(v[T]));return _}(0,n.eW)(Lt,"checkUnique")},"draw"),He={setConf:je,draw:Ke},Xe=(0,n.eW)(t=>`
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

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
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

  /* Done-crit task text outside the bar \u2014 same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
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
`,"getStyles"),Ge=Xe,Ze={parser:ot,db:Ue,renderer:He,styles:Ge}}}]);
