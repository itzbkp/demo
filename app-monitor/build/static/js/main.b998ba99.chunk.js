(this["webpackJsonpapp-monitor"]=this["webpackJsonpapp-monitor"]||[]).push([[0],{81:function(t,e,n){"use strict";n.r(e);var a=n(4),o=n(0),r=n(16),c=n.n(r),i=n(14),s=n.n(i),u=n(26),d=n(46),l=n(12),p=n(13),h=n.n(p),f=n(29),b=n(102),g=n(101),j=n(103),x=n(97),m=n(15),O=n.n(m),w=n(25),v=n(104),k=n(99),S=n(100),Y=n(45),y=n.n(Y),T=Object(x.a)({root:{display:"inline-block",margin:"20px 32px",width:"336px","& a":{fontSize:"20px",fontWeight:"bold",color:"rgb(26 35 126)",textDecoration:"none","& svg":{color:"#000"}},"& strong":{color:"#000"},"& textarea":{"&::-webkit-scrollbar":{width:"7px",maxHeight:"72px"},"&::-webkit-scrollbar-thumb":{background:"rgba(0, 0, 0, 0.5)",borderRadius:"3.5px"},"&::-webkit-scrollbar-track":{background:"#fff"}}},hide:{display:"none"},headerRed:{backgroundColor:"rgb(245 205 210)"},headerBlue:{backgroundColor:"rgb(187 222 251)"},headerGreen:{backgroundColor:"rgb(204 254 144)"},subHeader:{}}),D=function(t){var e=t.host,n=t.container,r=t.port,c=t.token,i=t.setState,d=t.index,p=t.showAllLogs,f=T(),b=Object(o.useState)({console:"",lastLog:""}),g=Object(l.a)(b,2),j=g[0],x=g[1],m=Object(o.useState)({currentIndex:0,rows:0}),Y=Object(l.a)(m,2),D=Y[0],E=Y[1],H=Object(o.useState)(p),C=Object(l.a)(H,2),M=C[0],_=C[1],I=function(t){void 0!==t&&_(t),Object(u.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([window["".concat(e,"_").concat(n)]?O()("http://34.227.172.54:4000",{method:"GET",params:{host:e,container:n,token:c}}):Promise.resolve({data:""}),O()("http://34.227.172.54:4000/last",{method:"GET",params:{host:e,container:n,token:c}}),O()("http://34.227.172.54:4000/config",{method:"GET",params:{host:e,port:r}})]).then((function(t){var a,o=h()(t[1].data.replace(/.* \| /gm,"").replace(/\r\n/gm,"")),r="";o.isValid()&&o>h()().add(-5,"minutes")?(a="Running",r=f.headerBlue):(a="Stopped",r=f.headerRed),t[1].data.includes("Exporting Finished")&&(a="Finished",r=f.headerGreen),i({id:"".concat(e,"_").concat(n),state:t[1].data?a:void 0}),x(Object(w.a)(Object(w.a)({},j),{},{console:t[0].data,lastLog:r}));var c=t[2].data,s=c.currentIndex,u=c.rows;E(Object(w.a)(Object(w.a)({},D),{},{currentIndex:s,rows:u}))})).catch((function(){}));case 2:(a=document.getElementById("".concat(e,"_").concat(n)))&&(a.scrollTop=a.scrollHeight);case 4:case"end":return t.stop()}}),t)})))()},B=function(t){return function(){void 0!==t?(window["".concat(e,"_").concat(n)]=t,I(t)):(window["".concat(e,"_").concat(n)]=!window["".concat(e,"_").concat(n)],I(!M))}};return Object(o.useEffect)((function(){B(p)(),setInterval(I,1e4)}),[p]),Object(a.jsxs)(v.a,{className:f.root,children:[Object(a.jsx)(k.a,{title:Object(a.jsx)("a",{target:"blank",onClick:function(t){return t.stopPropagation()},href:"http://".concat(e,":").concat(r),children:"http://".concat(e,":").concat(r)}),className:j.lastLog,style:{cursor:"pointer"},onClick:B(),avatar:Object(a.jsx)("a",{target:"blank",onClick:function(t){return t.stopPropagation()},href:"http://".concat(e,":9000/#/containers/").concat(n,"/exec"),children:Object(a.jsx)(y.a,{})}),subheader:Object(a.jsx)("strong",{children:"#".concat(d," | ").concat(n," | ").concat(D.rows||0," | ").concat(D.currentIndex&&D.currentIndex+1)})}),M&&Object(a.jsx)(S.a,{children:Object(a.jsx)("textarea",{readOnly:!0,rows:"15",cols:"40",value:j.console,id:"".concat(e,"_").concat(n)})})]})},E=Object(x.a)({header:{backgroundColor:"white",marginTop:"-140px",paddingTop:"10px",paddingBottom:"24px",position:"fixed",width:"100%"},root:{backgroundColor:"#E0E0E0",borderRadius:"4px",marginTop:"140px",marginBottom:"40px",padding:"20px 36px 12px"},progress:{margin:"44px",marginTop:"60px"}}),H=function(t){var e=t.page,n=t.setActive,r=E(),c=window.configuration,i=c.servers,p=c.ports,x=c.containers,m=Object(o.useState)([]),w=Object(l.a)(m,2),v=w[0],k=w[1],S=Object(o.useState)([]),Y=Object(l.a)(S,2),y=Y[0],T=Y[1],H=Object(o.useState)(0),C=Object(l.a)(H,2),M=C[0],_=C[1],I=Object(o.useState)(0),B=Object(l.a)(I,2),R=B[0],P=B[1],A=Object(o.useState)(!1),F=Object(l.a)(A,2),G=F[0],L=F[1],N=Object(o.useState)(h()().format("YYYY-MM-DDTHH:mm")),J=Object(l.a)(N,2),z=J[0],K=J[1];Array.range=function(t,e){return Array.from({length:e-t},(function(e,n){return n+t}))};var V=function(t){y=[].concat(Object(d.a)(y.filter((function(e){return e.id!==t.id}))),[t]),T(y)},W=function(t){var e=t.target.value,n=h()(e).utcOffset("+00:00").format("YYYY-MM-DDTHH:mm");O()("http://34.227.172.54:4000/processed",{method:"POST",params:{StartDate:n,EndDate:h()().utcOffset("+00:00").endOf("day").format("YYYY-MM-DDTHH:mm")}}).then((function(t){P(t.data)})).catch((function(){})),K(h()(e).format("YYYY-MM-DDTHH:mm"))};Object(o.useEffect)((function(){var t=function(){var t=Object(u.a)(s.a.mark((function t(){var n,o,r,c,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],o=[],r=0,c=s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!sessionStorage["".concat(i[e],"_token")]){t.next=4;break}n.push({host:i[e],token:sessionStorage["".concat(i[e],"_token")]}),t.next=6;break;case 4:return t.next=6,O.a.post("http://34.227.172.54:4000",null,{params:{host:i[e]}}).then((function(t){sessionStorage["".concat(i[e],"_token")]=t.data.jwt,n.push({host:i[e],token:t.data.jwt})})).catch((function(){}));case 6:case"end":return t.stop()}}),t)})),u=6*(e-1);case 4:if(!(u<i.length&&u<6*e)){t.next=9;break}return t.delegateYield(c(u),"t0",6);case 6:u++,t.next=4;break;case 9:n.forEach((function(t,e){for(var n=0;n<x.length;n++)o.push(Object(a.jsx)(D,{index:++r,setState:V,host:t.host,port:p[n],container:x[n],token:t.token,showAllLogs:G},e.toString()+n))})),k(o);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();k([]),T([]),t(),q(),setInterval(q,3e3)}),[e,G]),Object(o.useEffect)((function(){W({target:{value:z}})}),[M]);var q=function(){O()("http://34.227.172.54:4000/processed",{method:"POST",params:{StartDate:"2020-11",EndDate:h()().utcOffset("+00:00").endOf("day").format("YYYY-MM-DDTHH:mm")}}).then((function(t){_(t.data)})).catch((function(){}))},Q=y.filter((function(t){return i.filter((function(t,n){return n<6*e&&n>=6*(e-1)})).includes(t.id.split("_")[0])})),U=Q.filter((function(t){return t.state})).length,X=Q.filter((function(t){return t.state&&t.state.toString().includes("Running")})).length,Z=Q.filter((function(t){return t.state&&t.state.toString().includes("Stopped")})).length,$=Q.filter((function(t){return t.state&&t.state.toString().includes("Finished")})).length;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:v.length&&r.header,id:"header",children:[Object(a.jsx)(f.a,{variant:"h4",gutterBottom:!0,align:"center",style:{cursor:"pointer"},onClick:function(){return L(!G)},children:"Portainer Service | Made By BKP"}),"Total Containers: ".concat(U," | Running: ").concat(X," | Finished: ").concat($," | Stopped: ").concat(Z),Object(a.jsxs)("div",{style:{marginTop:"8px",position:"absolute"},children:["Finished: ".concat(M," | "),Object(a.jsx)("input",{onChange:W,style:{width:"175px"},type:"datetime-local",value:z})," | ".concat(R)]}),Object(a.jsx)("div",{style:{float:"right",marginTop:"8px",marginRight:"32px"},children:Array.range(0,i.length%6?i.length/6+1:i.length/6).map((function(t){return Object(a.jsx)(b.a,{style:{marginRight:"10px"},variant:"contained",color:t===e-1?"primary":"default",onClick:n(t+1),children:t+1},t)}))})]}),v.length?Object(a.jsx)(g.a,{className:r.root,children:v}):Object(a.jsx)(j.a,{className:r.progress})]})},C=function(){var t=window.location.hash.replace("#","")||1;return Object(a.jsx)(o.Fragment,{children:Object(a.jsx)(H,{page:parseInt(t),setActive:function(t){return function(){window.location.hash=t,window.location.reload()}}})})};c.a.render(Object(a.jsx)(C,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.b998ba99.chunk.js.map