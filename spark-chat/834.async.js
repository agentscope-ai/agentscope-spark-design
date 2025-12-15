!(function(){"use strict";var ae=(yt,Z,k)=>new Promise((Q,R)=>{var q=r=>{try{_(k.next(r))}catch(v){R(v)}},F=r=>{try{_(k.throw(r))}catch(v){R(v)}},_=r=>r.done?Q(r.value):Promise.resolve(r.value).then(q,F);_((k=k.apply(yt,Z)).next())});(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[834],{26620:function(yt,Z,k){k.d(Z,{q:function(){return q}});var Q=k(35096),R=k(35584),q=(0,Q.eW)((F,_)=>{let r;return _==="sandbox"&&(r=(0,R.Ys)("#i"+F)),(_==="sandbox"?(0,R.Ys)(r.nodes()[0].contentDocument.body):(0,R.Ys)("body")).select(`[id="${F}"]`)},"getDiagramElement")},80834:function(yt,Z,k){var tt;k.d(Z,{Ee:function(){return Ie},J8:function(){return $},_$:function(){return Ae},oI:function(){return Oe}});var Q=k(26620),R=k(43663),q=k(23386),F=k(4284),_=k(99970),r=k(35096),v=function(){var e=(0,r.eW)(function(X,c,d,o){for(d=d||{},o=X.length;o--;d[X[o]]=c);return d},"o"),t=[1,2],s=[1,3],n=[1,4],i=[2,4],l=[1,9],u=[1,11],S=[1,16],p=[1,17],E=[1,18],T=[1,19],m=[1,33],M=[1,20],W=[1,21],A=[1,22],I=[1,23],N=[1,24],f=[1,26],O=[1,27],x=[1,28],G=[1,29],Y=[1,30],w=[1,31],V=[1,32],et=[1,35],Tt=[1,36],bt=[1,37],kt=[1,38],nt=[1,34],y=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],mt=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],se=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],It={trace:(0,r.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:"CLASSDEF_STYLEOPTS",44:"DEFAULT",45:"style",46:"STYLE_IDS",47:"STYLEDEF_STYLEOPTS",48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:"direction_tb",52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:(0,r.eW)(function(c,d,o,g,b,a,pt){var h=a.length-1;switch(b){case 3:return g.setRootDoc(a[h]),a[h];break;case 4:this.$=[];break;case 5:a[h]!="nl"&&(a[h-1].push(a[h]),this.$=a[h-1]);break;case 6:case 7:this.$=a[h];break;case 8:this.$="nl";break;case 12:this.$=a[h];break;case 13:const vt=a[h-1];vt.description=g.trimColon(a[h]),this.$=vt;break;case 14:this.$={stmt:"relation",state1:a[h-2],state2:a[h]};break;case 15:const Ct=g.trimColon(a[h]);this.$={stmt:"relation",state1:a[h-3],state2:a[h-1],description:Ct};break;case 19:this.$={stmt:"state",id:a[h-3],type:"default",description:"",doc:a[h-1]};break;case 20:var st=a[h],ot=a[h-2].trim();if(a[h].match(":")){var St=a[h].split(":");st=St[0],ot=[ot,St[1]]}this.$={stmt:"state",id:st,type:"default",description:ot};break;case 21:this.$={stmt:"state",id:a[h-3],type:"default",description:a[h-5],doc:a[h-1]};break;case 22:this.$={stmt:"state",id:a[h],type:"fork"};break;case 23:this.$={stmt:"state",id:a[h],type:"join"};break;case 24:this.$={stmt:"state",id:a[h],type:"choice"};break;case 25:this.$={stmt:"state",id:g.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:a[h-1].trim(),note:{position:a[h-2].trim(),text:a[h].trim()}};break;case 29:this.$=a[h].trim(),g.setAccTitle(this.$);break;case 30:case 31:this.$=a[h].trim(),g.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:a[h-3],url:a[h-2],tooltip:a[h-1]};break;case 33:this.$={stmt:"click",id:a[h-3],url:a[h-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:a[h-1].trim(),classes:a[h].trim()};break;case 36:this.$={stmt:"style",id:a[h-1].trim(),styleClass:a[h].trim()};break;case 37:this.$={stmt:"applyClass",id:a[h-1].trim(),styleClass:a[h].trim()};break;case 38:g.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:g.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:g.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:g.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:a[h].trim(),type:"default",description:""};break;case 46:this.$={stmt:"state",id:a[h-2].trim(),classes:[a[h].trim()],type:"default",description:""};break;case 47:this.$={stmt:"state",id:a[h-2].trim(),classes:[a[h].trim()],type:"default",description:""};break}},"anonymous"),table:[{3:1,4:t,5:s,6:n},{1:[3]},{3:5,4:t,5:s,6:n},{3:6,4:t,5:s,6:n},e([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],i,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:l,5:u,8:8,9:10,10:12,11:13,12:14,13:15,16:S,17:p,19:E,22:T,24:m,25:M,26:W,27:A,28:I,29:N,32:25,33:f,35:O,37:x,38:G,41:Y,45:w,48:V,51:et,52:Tt,53:bt,54:kt,57:nt},e(y,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:S,17:p,19:E,22:T,24:m,25:M,26:W,27:A,28:I,29:N,32:25,33:f,35:O,37:x,38:G,41:Y,45:w,48:V,51:et,52:Tt,53:bt,54:kt,57:nt},e(y,[2,7]),e(y,[2,8]),e(y,[2,9]),e(y,[2,10]),e(y,[2,11]),e(y,[2,12],{14:[1,40],15:[1,41]}),e(y,[2,16]),{18:[1,42]},e(y,[2,18],{20:[1,43]}),{23:[1,44]},e(y,[2,22]),e(y,[2,23]),e(y,[2,24]),e(y,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},e(y,[2,28]),{34:[1,49]},{36:[1,50]},e(y,[2,31]),{13:51,24:m,57:nt},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},e(mt,[2,44],{58:[1,56]}),e(mt,[2,45],{58:[1,57]}),e(y,[2,38]),e(y,[2,39]),e(y,[2,40]),e(y,[2,41]),e(y,[2,6]),e(y,[2,13]),{13:58,24:m,57:nt},e(y,[2,17]),e(se,i,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},e(y,[2,29]),e(y,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},e(y,[2,14],{14:[1,71]}),{4:l,5:u,8:8,9:10,10:12,11:13,12:14,13:15,16:S,17:p,19:E,21:[1,72],22:T,24:m,25:M,26:W,27:A,28:I,29:N,32:25,33:f,35:O,37:x,38:G,41:Y,45:w,48:V,51:et,52:Tt,53:bt,54:kt,57:nt},e(y,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},e(y,[2,34]),e(y,[2,35]),e(y,[2,36]),e(y,[2,37]),e(mt,[2,46]),e(mt,[2,47]),e(y,[2,15]),e(y,[2,19]),e(se,i,{7:78}),e(y,[2,26]),e(y,[2,27]),{5:[1,79]},{5:[1,80]},{4:l,5:u,8:8,9:10,10:12,11:13,12:14,13:15,16:S,17:p,19:E,21:[1,81],22:T,24:m,25:M,26:W,27:A,28:I,29:N,32:25,33:f,35:O,37:x,38:G,41:Y,45:w,48:V,51:et,52:Tt,53:bt,54:kt,57:nt},e(y,[2,32]),e(y,[2,33]),e(y,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:(0,r.eW)(function(c,d){if(d.recoverable)this.trace(c);else{var o=new Error(c);throw o.hash=d,o}},"parseError"),parse:(0,r.eW)(function(c){var d=this,o=[0],g=[],b=[null],a=[],pt=this.table,h="",st=0,ot=0,St=0,vt=2,Ct=1,we=a.slice.call(arguments,1),D=Object.create(this.lexer),it={yy:{}};for(var Nt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Nt)&&(it.yy[Nt]=this.yy[Nt]);D.setInput(c,it.yy),it.yy.lexer=D,it.yy.parser=this,typeof D.yylloc=="undefined"&&(D.yylloc={});var wt=D.yylloc;a.push(wt);var Pe=D.options&&D.options.ranges;typeof it.yy.parseError=="function"?this.parseError=it.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function We(P){o.length=o.length-2*P,b.length=b.length-P,a.length=a.length-P}(0,r.eW)(We,"popStack");function ie(){var P;return P=g.pop()||D.lex()||Ct,typeof P!="number"&&(P instanceof Array&&(g=P,P=g.pop()),P=d.symbols_[P]||P),P}(0,r.eW)(ie,"lex");for(var L,Pt,rt,B,Be,Wt,ct={},At,U,re,xt;;){if(rt=o[o.length-1],this.defaultActions[rt]?B=this.defaultActions[rt]:((L===null||typeof L=="undefined")&&(L=ie()),B=pt[rt]&&pt[rt][L]),typeof B=="undefined"||!B.length||!B[0]){var Bt="";xt=[];for(At in pt[rt])this.terminals_[At]&&At>vt&&xt.push("'"+this.terminals_[At]+"'");D.showPosition?Bt="Parse error on line "+(st+1)+`:
`+D.showPosition()+`
Expecting `+xt.join(", ")+", got '"+(this.terminals_[L]||L)+"'":Bt="Parse error on line "+(st+1)+": Unexpected "+(L==Ct?"end of input":"'"+(this.terminals_[L]||L)+"'"),this.parseError(Bt,{text:D.match,token:this.terminals_[L]||L,line:D.yylineno,loc:wt,expected:xt})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+rt+", token: "+L);switch(B[0]){case 1:o.push(L),b.push(D.yytext),a.push(D.yylloc),o.push(B[1]),L=null,Pt?(L=Pt,Pt=null):(ot=D.yyleng,h=D.yytext,st=D.yylineno,wt=D.yylloc,St>0&&St--);break;case 2:if(U=this.productions_[B[1]][1],ct.$=b[b.length-U],ct._$={first_line:a[a.length-(U||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(U||1)].first_column,last_column:a[a.length-1].last_column},Pe&&(ct._$.range=[a[a.length-(U||1)].range[0],a[a.length-1].range[1]]),Wt=this.performAction.apply(ct,[h,ot,st,it.yy,B[1],b,a].concat(we)),typeof Wt!="undefined")return Wt;U&&(o=o.slice(0,-1*U*2),b=b.slice(0,-1*U),a=a.slice(0,-1*U)),o.push(this.productions_[B[1]][0]),b.push(ct.$),a.push(ct._$),re=pt[o[o.length-2]][o[o.length-1]],o.push(re);break;case 3:return!0}}return!0},"parse")},Ne=function(){var X={EOF:1,parseError:(0,r.eW)(function(d,o){if(this.yy.parser)this.yy.parser.parseError(d,o);else throw new Error(d)},"parseError"),setInput:(0,r.eW)(function(c,d){return this.yy=d||this.yy||{},this._input=c,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,r.eW)(function(){var c=this._input[0];this.yytext+=c,this.yyleng++,this.offset++,this.match+=c,this.matched+=c;var d=c.match(/(?:\r\n?|\n).*/g);return d?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),c},"input"),unput:(0,r.eW)(function(c){var d=c.length,o=c.split(/(?:\r\n?|\n)/g);this._input=c+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var g=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var b=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===g.length?this.yylloc.first_column:0)+g[g.length-o.length].length-o[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[b[0],b[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},"unput"),more:(0,r.eW)(function(){return this._more=!0,this},"more"),reject:(0,r.eW)(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:(0,r.eW)(function(c){this.unput(this.match.slice(c))},"less"),pastInput:(0,r.eW)(function(){var c=this.matched.substr(0,this.matched.length-this.match.length);return(c.length>20?"...":"")+c.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,r.eW)(function(){var c=this.match;return c.length<20&&(c+=this._input.substr(0,20-c.length)),(c.substr(0,20)+(c.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,r.eW)(function(){var c=this.pastInput(),d=new Array(c.length+1).join("-");return c+this.upcomingInput()+`
`+d+"^"},"showPosition"),test_match:(0,r.eW)(function(c,d){var o,g,b;if(this.options.backtrack_lexer&&(b={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(b.yylloc.range=this.yylloc.range.slice(0))),g=c[0].match(/(?:\r\n?|\n).*/g),g&&(this.yylineno+=g.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:g?g[g.length-1].length-g[g.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+c[0].length},this.yytext+=c[0],this.match+=c[0],this.matches=c,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(c[0].length),this.matched+=c[0],o=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),o)return o;if(this._backtrack){for(var a in b)this[a]=b[a];return!1}return!1},"test_match"),next:(0,r.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var c,d,o,g;this._more||(this.yytext="",this.match="");for(var b=this._currentRules(),a=0;a<b.length;a++)if(o=this._input.match(this.rules[b[a]]),o&&(!d||o[0].length>d[0].length)){if(d=o,g=a,this.options.backtrack_lexer){if(c=this.test_match(o,b[a]),c!==!1)return c;if(this._backtrack){d=!1;continue}else return!1}else if(!this.options.flex)break}return d?(c=this.test_match(d,b[g]),c!==!1?c:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,r.eW)(function(){var d=this.next();return d||this.lex()},"lex"),begin:(0,r.eW)(function(d){this.conditionStack.push(d)},"begin"),popState:(0,r.eW)(function(){var d=this.conditionStack.length-1;return d>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,r.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,r.eW)(function(d){return d=this.conditionStack.length-1-Math.abs(d||0),d>=0?this.conditionStack[d]:"INITIAL"},"topState"),pushState:(0,r.eW)(function(d){this.begin(d)},"pushState"),stateStackSize:(0,r.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,r.eW)(function(d,o,g,b){var a=b;switch(g){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:return 51;case 5:return 52;case 6:return 53;case 7:return 54;case 8:break;case 9:break;case 10:return 5;case 11:break;case 12:break;case 13:break;case 14:break;case 15:return this.pushState("SCALE"),17;break;case 16:return 18;case 17:this.popState();break;case 18:return this.begin("acc_title"),33;break;case 19:return this.popState(),"acc_title_value";break;case 20:return this.begin("acc_descr"),35;break;case 21:return this.popState(),"acc_descr_value";break;case 22:this.begin("acc_descr_multiline");break;case 23:this.popState();break;case 24:return"acc_descr_multiline_value";case 25:return this.pushState("CLASSDEF"),41;break;case 26:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";break;case 27:return this.popState(),this.pushState("CLASSDEFID"),42;break;case 28:return this.popState(),43;break;case 29:return this.pushState("CLASS"),48;break;case 30:return this.popState(),this.pushState("CLASS_STYLE"),49;break;case 31:return this.popState(),50;break;case 32:return this.pushState("STYLE"),45;break;case 33:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;break;case 34:return this.popState(),47;break;case 35:return this.pushState("SCALE"),17;break;case 36:return 18;case 37:this.popState();break;case 38:this.pushState("STATE");break;case 39:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),25;break;case 40:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),26;break;case 41:return this.popState(),o.yytext=o.yytext.slice(0,-10).trim(),27;break;case 42:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),25;break;case 43:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),26;break;case 44:return this.popState(),o.yytext=o.yytext.slice(0,-10).trim(),27;break;case 45:return 51;case 46:return 52;case 47:return 53;case 48:return 54;case 49:this.pushState("STATE_STRING");break;case 50:return this.pushState("STATE_ID"),"AS";break;case 51:return this.popState(),"ID";break;case 52:this.popState();break;case 53:return"STATE_DESCR";case 54:return 19;case 55:this.popState();break;case 56:return this.popState(),this.pushState("struct"),20;break;case 57:break;case 58:return this.popState(),21;break;case 59:break;case 60:return this.begin("NOTE"),29;break;case 61:return this.popState(),this.pushState("NOTE_ID"),59;break;case 62:return this.popState(),this.pushState("NOTE_ID"),60;break;case 63:this.popState(),this.pushState("FLOATING_NOTE");break;case 64:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";break;case 65:break;case 66:return"NOTE_TEXT";case 67:return this.popState(),"ID";break;case 68:return this.popState(),this.pushState("NOTE_TEXT"),24;break;case 69:return this.popState(),o.yytext=o.yytext.substr(2).trim(),31;break;case 70:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),31;break;case 71:return 6;case 72:return 6;case 73:return 16;case 74:return 57;case 75:return 24;case 76:return o.yytext=o.yytext.trim(),14;break;case 77:return 15;case 78:return 28;case 79:return 58;case 80:return 5;case 81:return"INVALID"}},"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[12,13],inclusive:!1},struct:{rules:[12,13,25,29,32,38,45,46,47,48,57,58,59,60,74,75,76,77,78],inclusive:!1},FLOATING_NOTE_ID:{rules:[67],inclusive:!1},FLOATING_NOTE:{rules:[64,65,66],inclusive:!1},NOTE_TEXT:{rules:[69,70],inclusive:!1},NOTE_ID:{rules:[68],inclusive:!1},NOTE:{rules:[61,62,63],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[34],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[33],inclusive:!1},CLASS_STYLE:{rules:[31],inclusive:!1},CLASS:{rules:[30],inclusive:!1},CLASSDEFID:{rules:[28],inclusive:!1},CLASSDEF:{rules:[26,27],inclusive:!1},acc_descr_multiline:{rules:[23,24],inclusive:!1},acc_descr:{rules:[21],inclusive:!1},acc_title:{rules:[19],inclusive:!1},SCALE:{rules:[16,17,36,37],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[51],inclusive:!1},STATE_STRING:{rules:[52,53],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[12,13,39,40,41,42,43,44,49,50,54,55,56],inclusive:!1},ID:{rules:[12,13],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,18,20,22,25,29,32,35,38,56,60,71,72,73,74,75,76,77,79,80,81],inclusive:!0}}};return X}();It.lexer=Ne;function Dt(){this.yy={}}return(0,r.eW)(Dt,"Parser"),Dt.prototype=It,It.Parser=Dt,new Dt}();v.parser=v;var $=v,j="TB",K="TB",lt="dir",H="state",z="root",at="relation",ne="classDef",oe="style",ce="applyClass",ht="default",$t="divider",Mt="fill:none",Yt="fill: #333",Ft="c",Gt="text",Vt="normal",Lt="rect",Ot="rectWithTitle",le="stateStart",he="stateEnd",Ut="divider",jt="roundedWithTitle",ue="note",de="noteGroup",ut="statediagram",fe="state",pe=`${ut}-${fe}`,Kt="transition",Se="note",ye="note-edge",_e=`${Kt} ${ye}`,ge=`${ut}-${Se}`,Ee="cluster",Te=`${ut}-${Ee}`,be="cluster-alt",ke=`${ut}-${be}`,Ht="parent",zt="note",me="state",Rt="----",De=`${Rt}${zt}`,Jt=`${Rt}${Ht}`,Xt=(0,r.eW)((e,t=K)=>{if(!e.doc)return t;let s=t;for(const n of e.doc)n.stmt==="dir"&&(s=n.value);return s},"getDir"),ve=(0,r.eW)(function(e,t){return t.db.getClasses()},"getClasses"),Ce=(0,r.eW)(function(e,t,s,n){return ae(this,null,function*(){var T,m;r.cM.info("REF0:"),r.cM.info("Drawing state diagram (v2)",t);const{securityLevel:i,state:l,layout:u}=(0,_.nV)();n.db.extract(n.db.getRootDocV2());const S=n.db.getData(),p=(0,Q.q)(t,i);S.type=n.type,S.layoutAlgorithm=u,S.nodeSpacing=(l==null?void 0:l.nodeSpacing)||50,S.rankSpacing=(l==null?void 0:l.rankSpacing)||50,S.markers=["barb"],S.diagramId=t,yield(0,q.sY)(S,p);const E=8;try{(typeof n.db.getLinks=="function"?n.db.getLinks():new Map).forEach((W,A)=>{var Y;const I=typeof A=="string"?A:typeof(A==null?void 0:A.id)=="string"?A.id:"";if(!I){r.cM.warn("\u26A0\uFE0F Invalid or missing stateId from key:",JSON.stringify(A));return}const N=(Y=p.node())==null?void 0:Y.querySelectorAll("g");let f;if(N==null||N.forEach(w=>{var et;((et=w.textContent)==null?void 0:et.trim())===I&&(f=w)}),!f){r.cM.warn("\u26A0\uFE0F Could not find node matching text:",I);return}const O=f.parentNode;if(!O){r.cM.warn("\u26A0\uFE0F Node has no parent, cannot wrap:",I);return}const x=document.createElementNS("http://www.w3.org/2000/svg","a"),G=W.url.replace(/^"+|"+$/g,"");if(x.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",G),x.setAttribute("target","_blank"),W.tooltip){const w=W.tooltip.replace(/^"+|"+$/g,"");x.setAttribute("title",w)}O.replaceChild(x,f),x.appendChild(f),r.cM.info("\u{1F517} Wrapped node in <a> tag for:",I,W.url)})}catch(M){r.cM.error("\u274C Error injecting clickable links:",M)}F.w8.insertTitle(p,"statediagramTitleText",(T=l==null?void 0:l.titleTopMargin)!=null?T:25,n.db.getDiagramTitle()),(0,R.j)(p,E,ut,(m=l==null?void 0:l.useMaxWidth)!=null?m:!0)})},"draw"),Ae={getClasses:ve,draw:Ce,getDir:Xt},_t=new Map,J=0;function gt(e="",t=0,s="",n=Rt){const i=s!==null&&s.length>0?`${n}${s}`:"";return`${me}-${e}${i}-${t}`}(0,r.eW)(gt,"stateDomId");var xe=(0,r.eW)((e,t,s,n,i,l,u,S)=>{r.cM.trace("items",t),t.forEach(p=>{var E;switch(p.stmt){case H:ft(e,p,s,n,i,l,u,S);break;case ht:ft(e,p,s,n,i,l,u,S);break;case at:{ft(e,p.state1,s,n,i,l,u,S),ft(e,p.state2,s,n,i,l,u,S);const T={id:"edge"+J,start:p.state1.id,end:p.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Mt,labelStyle:"",label:_.SY.sanitizeText((E=p.description)!=null?E:"",(0,_.nV)()),arrowheadStyle:Yt,labelpos:Ft,labelType:Gt,thickness:Vt,classes:Kt,look:u};i.push(T),J++}break}})},"setupDoc"),Zt=(0,r.eW)((e,t=K)=>{let s=t;if(e.doc)for(const n of e.doc)n.stmt==="dir"&&(s=n.value);return s},"getDir");function dt(e,t,s){if(!t.id||t.id==="</join></fork>"||t.id==="</choice>")return;t.cssClasses&&(Array.isArray(t.cssCompiledStyles)||(t.cssCompiledStyles=[]),t.cssClasses.split(" ").forEach(i=>{var u;const l=s.get(i);l&&(t.cssCompiledStyles=[...(u=t.cssCompiledStyles)!=null?u:[],...l.styles])}));const n=e.find(i=>i.id===t.id);n?Object.assign(n,t):e.push(t)}(0,r.eW)(dt,"insertOrUpdateNode");function Qt(e){var t,s;return(s=(t=e==null?void 0:e.classes)==null?void 0:t.join(" "))!=null?s:""}(0,r.eW)(Qt,"getClassesFromDbInfo");function qt(e){var t;return(t=e==null?void 0:e.styles)!=null?t:[]}(0,r.eW)(qt,"getStylesFromDbInfo");var ft=(0,r.eW)((e,t,s,n,i,l,u,S)=>{var W,A,I;const p=t.id,E=s.get(p),T=Qt(E),m=qt(E),M=(0,_.nV)();if(r.cM.info("dataFetcher parsedItem",t,E,m),p!=="root"){let N=Lt;t.start===!0?N=le:t.start===!1&&(N=he),t.type!==ht&&(N=t.type),_t.get(p)||_t.set(p,{id:p,shape:N,description:_.SY.sanitizeText(p,M),cssClasses:`${T} ${pe}`,cssStyles:m});const f=_t.get(p);t.description&&(Array.isArray(f.description)?(f.shape=Ot,f.description.push(t.description)):(W=f.description)!=null&&W.length&&f.description.length>0?(f.shape=Ot,f.description===p?f.description=[t.description]:f.description=[f.description,t.description]):(f.shape=Lt,f.description=t.description),f.description=_.SY.sanitizeTextOrArray(f.description,M)),((A=f.description)==null?void 0:A.length)===1&&f.shape===Ot&&(f.type==="group"?f.shape=jt:f.shape=Lt),!f.type&&t.doc&&(r.cM.info("Setting cluster for XCX",p,Zt(t)),f.type="group",f.isGroup=!0,f.dir=Zt(t),f.shape=t.type===$t?Ut:jt,f.cssClasses=`${f.cssClasses} ${Te} ${l?ke:""}`);const O={labelStyle:"",shape:f.shape,label:f.description,cssClasses:f.cssClasses,cssCompiledStyles:[],cssStyles:f.cssStyles,id:p,dir:f.dir,domId:gt(p,J),type:f.type,isGroup:f.type==="group",padding:8,rx:10,ry:10,look:u};if(O.shape===Ut&&(O.label=""),e&&e.id!=="root"&&(r.cM.trace("Setting node ",p," to be child of its parent ",e.id),O.parentId=e.id),O.centerLabel=!0,t.note){const x={labelStyle:"",shape:ue,label:t.note.text,cssClasses:ge,cssStyles:[],cssCompiledStyles:[],id:p+De+"-"+J,domId:gt(p,J,zt),type:f.type,isGroup:f.type==="group",padding:(I=M.flowchart)==null?void 0:I.padding,look:u,position:t.note.position},G=p+Jt,Y={labelStyle:"",shape:de,label:t.note.text,cssClasses:f.cssClasses,cssStyles:[],id:p+Jt,domId:gt(p,J,Ht),type:"group",isGroup:!0,padding:16,look:u,position:t.note.position};J++,Y.id=G,x.parentId=G,dt(n,Y,S),dt(n,x,S),dt(n,O,S);let w=p,V=x.id;t.note.position==="left of"&&(w=x.id,V=p),i.push({id:w+"-"+V,start:w,end:V,arrowhead:"none",arrowTypeEnd:"",style:Mt,labelStyle:"",classes:_e,arrowheadStyle:Yt,labelpos:Ft,labelType:Gt,thickness:Vt,look:u})}else dt(n,O,S)}t.doc&&(r.cM.trace("Adding nodes children "),xe(t,t.doc,s,n,i,!l,u,S))},"dataFetcher"),Le=(0,r.eW)(()=>{_t.clear(),J=0},"reset"),C={START_NODE:"[*]",START_TYPE:"start",END_NODE:"[*]",END_TYPE:"end",COLOR_KEYWORD:"color",FILL_KEYWORD:"fill",BG_FILL:"bgFill",STYLECLASS_SEP:","},te=(0,r.eW)(()=>new Map,"newClassesList"),ee=(0,r.eW)(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),Et=(0,r.eW)(e=>JSON.parse(JSON.stringify(e)),"clone"),Oe=(tt=class{constructor(t){this.version=t,this.nodes=[],this.edges=[],this.rootDoc=[],this.classes=te(),this.documents={root:ee()},this.currentDocument=this.documents.root,this.startEndCount=0,this.dividerCnt=0,this.links=new Map,this.getAccTitle=_.eu,this.setAccTitle=_.GN,this.getAccDescription=_.Mx,this.setAccDescription=_.U$,this.setDiagramTitle=_.g2,this.getDiagramTitle=_.Kr,this.clear(),this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this)}extract(t){this.clear(!0);for(const i of Array.isArray(t)?t:t.doc)switch(i.stmt){case H:this.addState(i.id.trim(),i.type,i.doc,i.description,i.note);break;case at:this.addRelation(i.state1,i.state2,i.description);break;case ne:this.addStyleClass(i.id.trim(),i.classes);break;case oe:this.handleStyleDef(i);break;case ce:this.setCssClass(i.id.trim(),i.styleClass);break;case"click":this.addLink(i.id,i.url,i.tooltip);break}const s=this.getStates(),n=(0,_.nV)();Le(),ft(void 0,this.getRootDocV2(),s,this.nodes,this.edges,!0,n.look,this.classes);for(const i of this.nodes)if(Array.isArray(i.label)){if(i.description=i.label.slice(1),i.isGroup&&i.description.length>0)throw new Error(`Group nodes can only have label. Remove the additional description for node [${i.id}]`);i.label=i.label[0]}}handleStyleDef(t){const s=t.id.trim().split(","),n=t.styleClass.split(",");for(const i of s){let l=this.getState(i);if(!l){const u=i.trim();this.addState(u),l=this.getState(u)}l&&(l.styles=n.map(u=>{var S;return(S=u.replace(/;/g,""))==null?void 0:S.trim()}))}}setRootDoc(t){r.cM.info("Setting root doc",t),this.rootDoc=t,this.version===1?this.extract(t):this.extract(this.getRootDocV2())}docTranslator(t,s,n){if(s.stmt===at){this.docTranslator(t,s.state1,!0),this.docTranslator(t,s.state2,!1);return}if(s.stmt===H&&(s.id===C.START_NODE?(s.id=t.id+(n?"_start":"_end"),s.start=n):s.id=s.id.trim()),s.stmt!==z&&s.stmt!==H||!s.doc)return;const i=[];let l=[];for(const u of s.doc)if(u.type===$t){const S=Et(u);S.doc=Et(l),i.push(S),l=[]}else l.push(u);if(i.length>0&&l.length>0){const u={stmt:H,id:(0,F.Ox)(),type:"divider",doc:Et(l)};i.push(Et(u)),s.doc=i}s.doc.forEach(u=>this.docTranslator(s,u,!0))}getRootDocV2(){return this.docTranslator({id:z,stmt:z},{id:z,stmt:z,doc:this.rootDoc},!0),{id:z,doc:this.rootDoc}}addState(t,s=ht,n=void 0,i=void 0,l=void 0,u=void 0,S=void 0,p=void 0){const E=t==null?void 0:t.trim();if(!this.currentDocument.states.has(E))r.cM.info("Adding state ",E,i),this.currentDocument.states.set(E,{stmt:H,id:E,descriptions:[],type:s,doc:n,note:l,classes:[],styles:[],textStyles:[]});else{const T=this.currentDocument.states.get(E);if(!T)throw new Error(`State not found: ${E}`);T.doc||(T.doc=n),T.type||(T.type=s)}if(i&&(r.cM.info("Setting state description",E,i),(Array.isArray(i)?i:[i]).forEach(m=>this.addDescription(E,m.trim()))),l){const T=this.currentDocument.states.get(E);if(!T)throw new Error(`State not found: ${E}`);T.note=l,T.note.text=_.SY.sanitizeText(T.note.text,(0,_.nV)())}u&&(r.cM.info("Setting state classes",E,u),(Array.isArray(u)?u:[u]).forEach(m=>this.setCssClass(E,m.trim()))),S&&(r.cM.info("Setting state styles",E,S),(Array.isArray(S)?S:[S]).forEach(m=>this.setStyle(E,m.trim()))),p&&(r.cM.info("Setting state styles",E,S),(Array.isArray(p)?p:[p]).forEach(m=>this.setTextStyle(E,m.trim())))}clear(t){this.nodes=[],this.edges=[],this.documents={root:ee()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=te(),t||(this.links=new Map,(0,_.ZH)())}getState(t){return this.currentDocument.states.get(t)}getStates(){return this.currentDocument.states}logDocuments(){r.cM.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}addLink(t,s,n){this.links.set(t,{url:s,tooltip:n}),r.cM.warn("Adding link",t,s,n)}getLinks(){return this.links}startIdIfNeeded(t=""){return t===C.START_NODE?(this.startEndCount++,`${C.START_TYPE}${this.startEndCount}`):t}startTypeIfNeeded(t="",s=ht){return t===C.START_NODE?C.START_TYPE:s}endIdIfNeeded(t=""){return t===C.END_NODE?(this.startEndCount++,`${C.END_TYPE}${this.startEndCount}`):t}endTypeIfNeeded(t="",s=ht){return t===C.END_NODE?C.END_TYPE:s}addRelationObjs(t,s,n=""){const i=this.startIdIfNeeded(t.id.trim()),l=this.startTypeIfNeeded(t.id.trim(),t.type),u=this.startIdIfNeeded(s.id.trim()),S=this.startTypeIfNeeded(s.id.trim(),s.type);this.addState(i,l,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),this.addState(u,S,s.doc,s.description,s.note,s.classes,s.styles,s.textStyles),this.currentDocument.relations.push({id1:i,id2:u,relationTitle:_.SY.sanitizeText(n,(0,_.nV)())})}addRelation(t,s,n){if(typeof t=="object"&&typeof s=="object")this.addRelationObjs(t,s,n);else if(typeof t=="string"&&typeof s=="string"){const i=this.startIdIfNeeded(t.trim()),l=this.startTypeIfNeeded(t),u=this.endIdIfNeeded(s.trim()),S=this.endTypeIfNeeded(s);this.addState(i,l),this.addState(u,S),this.currentDocument.relations.push({id1:i,id2:u,relationTitle:n?_.SY.sanitizeText(n,(0,_.nV)()):void 0})}}addDescription(t,s){var l;const n=this.currentDocument.states.get(t),i=s.startsWith(":")?s.replace(":","").trim():s;(l=n==null?void 0:n.descriptions)==null||l.push(_.SY.sanitizeText(i,(0,_.nV)()))}cleanupLabel(t){return t.startsWith(":")?t.slice(2).trim():t.trim()}getDividerId(){return this.dividerCnt++,`divider-id-${this.dividerCnt}`}addStyleClass(t,s=""){this.classes.has(t)||this.classes.set(t,{id:t,styles:[],textStyles:[]});const n=this.classes.get(t);s&&n&&s.split(C.STYLECLASS_SEP).forEach(i=>{const l=i.replace(/([^;]*);/,"$1").trim();if(RegExp(C.COLOR_KEYWORD).exec(i)){const S=l.replace(C.FILL_KEYWORD,C.BG_FILL).replace(C.COLOR_KEYWORD,C.FILL_KEYWORD);n.textStyles.push(S)}n.styles.push(l)})}getClasses(){return this.classes}setCssClass(t,s){t.split(",").forEach(n=>{var l;let i=this.getState(n);if(!i){const u=n.trim();this.addState(u),i=this.getState(u)}(l=i==null?void 0:i.classes)==null||l.push(s)})}setStyle(t,s){var n,i;(i=(n=this.getState(t))==null?void 0:n.styles)==null||i.push(s)}setTextStyle(t,s){var n,i;(i=(n=this.getState(t))==null?void 0:n.textStyles)==null||i.push(s)}getDirectionStatement(){return this.rootDoc.find(t=>t.stmt===lt)}getDirection(){var t,s;return(s=(t=this.getDirectionStatement())==null?void 0:t.value)!=null?s:j}setDirection(t){const s=this.getDirectionStatement();s?s.value=t:this.rootDoc.unshift({stmt:lt,value:t})}trimColon(t){return t.startsWith(":")?t.slice(1).trim():t.trim()}getData(){const t=(0,_.nV)();return{nodes:this.nodes,edges:this.edges,other:{},config:t,direction:Xt(this.getRootDocV2())}}getConfig(){return(0,_.nV)().state}},(0,r.eW)(tt,"StateDB"),tt.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},tt),Re=(0,r.eW)(e=>`
defs #statediagram-barbEnd {
    fill: ${e.transitionColor};
    stroke: ${e.transitionColor};
  }
g.stateGroup text {
  fill: ${e.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${e.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${e.stateLabelColor};
}

g.stateGroup rect {
  fill: ${e.mainBkg};
  stroke: ${e.nodeBorder};
}

g.stateGroup line {
  stroke: ${e.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${e.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${e.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${e.noteBorderColor};
  fill: ${e.noteBkgColor};

  text {
    fill: ${e.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${e.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${e.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${e.edgeLabelBackground};
  p {
    background-color: ${e.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${e.edgeLabelBackground};
    fill: ${e.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${e.transitionLabelColor||e.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${e.transitionLabelColor||e.tertiaryTextColor};
}

.stateLabel text {
  fill: ${e.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${e.specialStateColor};
  stroke: ${e.specialStateColor};
}

.node .fork-join {
  fill: ${e.specialStateColor};
  stroke: ${e.specialStateColor};
}

.node circle.state-end {
  fill: ${e.innerEndBackground};
  stroke: ${e.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${e.compositeBackground||e.background};
  // stroke: ${e.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${e.stateBkg||e.mainBkg};
  stroke: ${e.stateBorder||e.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${e.mainBkg};
  stroke: ${e.stateBorder||e.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${e.lineColor};
}

.statediagram-cluster rect {
  fill: ${e.compositeTitleBackground};
  stroke: ${e.stateBorder||e.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${e.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${e.stateBorder||e.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${e.compositeBackground||e.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${e.altBackground?e.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${e.altBackground?e.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${e.noteBkgColor};
  stroke: ${e.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${e.noteBkgColor};
  stroke: ${e.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${e.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${e.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${e.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${e.lineColor};
  stroke: ${e.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${e.textColor};
}
`,"getStyles"),Ie=Re},43663:function(yt,Z,k){k.d(Z,{j:function(){return q}});var Q=k(99970),R=k(35096),q=(0,R.eW)((r,v,$,j)=>{r.attr("class",$);const{width:K,height:lt,x:H,y:z}=F(r,v);(0,Q.v2)(r,lt,K,j);const at=_(H,z,K,lt,v);r.attr("viewBox",at),R.cM.debug(`viewBox configured: ${at} with padding: ${v}`)},"setupViewPortForSVG"),F=(0,R.eW)((r,v)=>{var j;const $=((j=r.node())==null?void 0:j.getBBox())||{width:0,height:0,x:0,y:0};return{width:$.width+v*2,height:$.height+v*2,x:$.x,y:$.y}},"calculateDimensionsWithPadding"),_=(0,R.eW)((r,v,$,j,K)=>`${r-K} ${v-K} ${$} ${j}`,"createViewBox")}}]);
}());