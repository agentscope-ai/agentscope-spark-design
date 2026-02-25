"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[9491],{68548:function(T,l,e){e.r(l);var v=e(95726),p=e(8749),h=e(90264),u=e(52676);l.default=function(){return(0,u.jsx)(v.Z,{listType:"picture-card",beforeUpload:function(){return v.Z.LIST_IGNORE},children:(0,u.jsxs)(h.Z,{vertical:!0,gap:8,align:"center",children:[(0,u.jsx)(p.Z,{style:{fontSize:"24px"}}),"Upload"]})})}},18706:function(T,l,e){e.r(l);var v=e(26068),p=e.n(v),h=e(95726),u=e(60213),E=e(39971),t=e(8749),g=e(52676),b=h.Z.Dragger,j=(0,u.getCommonConfig)(),c=j.antPrefix,D={name:"file",multiple:!0,action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",onChange:function(_){var s=_.file.status;s!=="uploading"&&console.log(_.file,_.fileList),s==="done"?E.Z.success("".concat(_.file.name," file uploaded successfully.")):s==="error"&&E.Z.error("".concat(_.file.name," file upload failed."))},onDrop:function(_){console.log("Dropped files",_.dataTransfer.files)}};l.default=function(){return(0,g.jsxs)(b,p()(p()({},D),{},{children:[(0,g.jsx)("div",{className:"".concat(c,"-upload-icon"),children:(0,g.jsx)(t.Z,{style:{fontSize:"24px"}})}),(0,g.jsx)("p",{className:"".concat(c,"-upload-text"),children:"Click or drag file to this area"}),(0,g.jsx)("p",{className:"".concat(c,"-upload-hint"),children:"I am a description of upload things"})]}))}},18460:function(T,l,e){e.r(l);var v=e(26068),p=e.n(v),h=e(48305),u=e.n(h),E=e(60213),t=e(46763),g=e(95726),b=e(14679),j=e(47330),c=e(52676),D=(0,E.getCommonConfig)(),f=D.sparkPrefix,_={epub:[".epub"],excel:[".xls",".xlsx",".xlsm",".xlsb"],html:[".html",".htm"],image:[".jpg",".jpeg",".png",".gif",".bmp",".webp",".svg"],md:[".md",".markdown"],mobi:[".mobi"],pdf:[".pdf"],ppt:[".ppt",".pptx",".pps",".ppsx"],txt:[".txt"],web:[".web"],word:[".doc",".docx"]},s=function(r){for(var m=Object.entries(_),n=0,o=m;n<o.length;n++){var x=u()(o[n],2),d=x[0],O=x[1];if(O.some(function(P){return r.endsWith(P)}))return d}return"common"},M=[{uid:"0",name:"1.pdf",status:"done",response:"good"},{uid:"-1",name:"2.pdf",status:"uploading",percent:60},{uid:"-2",name:"3.pdf",status:"error",response:"Server Error 500"}],C={showUploadList:{showRemoveIcon:function(r){return r.status!=="removed"},removeIcon:function(r){return r.status==="uploading"?(0,c.jsx)(b.Z,{style:{fontSize:"20px"}}):(0,c.jsx)(j.Z,{style:{fontSize:"20px"}})}},iconRender:function(r){var m=r.status==="error"||r.status==="removed",n=s(r.name||""),o={};return m&&(o={filter:"grayscale(1)",opacity:.4}),(0,c.jsx)(t.Z,{type:n,style:o})},progress:{size:{width:134,height:4},showInfo:!1}};l.default=function(){return(0,c.jsx)(g.Z,p()({className:"".concat(f,"-custom-uploaded"),action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",defaultFileList:M},C))}},39971:function(T,l,e){var v=e(48305),p=e.n(v),h=e(67825),u=e.n(h),E=e(26068),t=e.n(E),g=e(58911),b=e(88602),j=e(99090),c=e(62910),D=e(86212),f=e(52676),_=["content"],s={success:{type:"success",icon:(0,f.jsx)(g.Z,{})},warning:{type:"warning",icon:(0,f.jsx)(b.Z,{})},error:{type:"error",icon:(0,f.jsx)(j.Z,{})},info:{type:"info",icon:(0,f.jsx)(c.Z,{})}},M=function(r,m){var n,o;typeof m=="string"?o={content:m}:o=t()({},m);var x=o,d=x.content,O=u()(x,_);D.ZP.open(t()({type:r,content:d,icon:r==="loading"||(n=s[r])===null||n===void 0?void 0:n.icon},O))},C=function(r){var m=D.ZP.useMessage(r),n=p()(m,2),o=n[0],x=n[1],d=function(a,y){var I,L;typeof y=="string"?L={content:y,type:a}:L=t()(t()({},y),{},{type:a}),o[a](t()(t()({},L),{},{icon:(I=s[a])===null||I===void 0?void 0:I.icon}))},O=t()(t()({},o),{},{success:function(a){return d("success",a)},warning:function(a){return d("warning",a)},error:function(a){return d("error",a)},info:function(a){return d("info",a)},loading:function(a){return d("loading",a)}});return[O,x]};l.Z=t()(t()({},D.ZP),{},{success:function(r){return M("success",r)},warning:function(r){return M("warning",r)},error:function(r){return M("error",r)},info:function(r){return M("info",r)},loading:function(r){return M("loading",r)},useMessage:C})},95726:function(T,l,e){e.d(l,{Z:function(){return m}});var v=e(26068),p=e.n(v),h=e(67825),u=e.n(h),E=e(60213),t=e(84240),g=e(82187),b=e.n(g),j=e(53649),c=e.n(j),D=e(30764),f,_=(0,D.Z)(f||(f=c()([`
.`,"-upload.",`-upload-wrapper {
  .`,"-upload.",`-upload-select {
    border: var(--`,"-line-width) dashed var(--",`-color-border-secondary);
    background-color: var(--`,`-color-fill-tertiary);
  }
  
  .`,`-upload-drag {
    border: var(--`,"-line-width) dashed var(--",`-color-border-secondary);
    background-color: var(--`,`-color-fill-tertiary);
    
    .`,`-upload-btn {
      padding: 32px 48px;
    }
    
    .`,`-upload-drag-container {
      text-align: center;
      
      .`,`-upload-icon {
        display: inline-grid;
        place-items: center;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: var(--`,`-color-bg-base);
      }
      
      .`,`-upload-text {
        margin-top: 8px;
        margin-bottom: 0;
        color: var(--`,`-color-text);
        font-weight: 500;
        line-height: 24px;
      }
      
      .`,`-upload-hint {
        margin-top: 4px;
        margin-bottom: 0;
        color: var(--`,`-color-text-secondary);
        line-height: 20px;
      }
    }
  }
}

.`,"-upload.",`-custom-uploaded {
  .`,`-upload-list {
    &:first-child {
      margin-top: 0;
      width: 242px;
    }
    
    .`,`-upload-list-item {
      display: flex;
      align-items: center;
      height: 60px;
      padding: 9px 12px;
      margin-top: 20px;
      border-color: var(--`,`-color-border-secondary);
      border-style: solid;
      
      .`,`-upload-list-item-thumbnail {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
      }
      
      .`,`-upload-list-item-name {
        width: 150px;
        color: var(--`,`-color-text);
        line-height: 24px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .`,`-upload-list-item-actions {
        .`,`-btn {
          width: 32px;
          height: 32px;
          color: var(--`,`-color-text-tertiary);
        }
      }
      
      .`,`-upload-list-item-progress {
        bottom: 6px;
        padding-left: 48px;
        
        .`,`-progress {
          display: flex;
          align-items: center;
          height: 20px;
        }
      }
      
      &.`,`-upload-list-item-error {
        border-color: var(--`,`-color-border-secondary);
        
        .`,`-upload-list-item-name {
          color: var(--`,`-color-error);
        }
        
        .`,`-btn-icon .anticon {
          color: var(--`,`-color-text-tertiary);
        }
      }
    }
  }
}
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),s=e(52676),M=["className"],C=["className"],i=function(o){var x=o.className,d=u()(o,M),O=(0,E.getCommonConfig)(),P=O.sparkPrefix,a=_();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{}),(0,s.jsx)(t.Z,p()({className:b()("".concat(P,"-upload"),x)},d))]})},r=function(o){var x=o.className,d=u()(o,C),O=(0,E.getCommonConfig)(),P=O.sparkPrefix,a=_();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{}),(0,s.jsx)(t.Z.Dragger,p()({className:b()("".concat(P,"-upload"),x)},d))]})};i.Dragger=r,i.LIST_IGNORE=t.Z.LIST_IGNORE;var m=i}}]);
