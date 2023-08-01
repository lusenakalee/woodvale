"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[3260],{3260:function(e,t,r){r.r(t),r.d(t,{default:function(){return w},loader:function(){return b}});var n=r(4165),s=r(5861),a=r(2791),i=r(8127),l=r(7689),o=r(2620),c=r(9439),d=r(1087),h=r(6418),u=r(7810),x=r(9479),m=r(7929),g=r(1025),f=r.n(g),j=r(184);var p=function(e){var t=e.logs,r=(0,l.V4)("resident-detail").resident,n=(0,a.useState)([]),s=(0,c.Z)(n,2),i=s[0],o=s[1],g=t.filter((function(e){return i.includes(e.creation_date)||0===i.length})),p=((0,l.V4)("root").healthData,t.map((function(e){return{date:e.creation_date,"Heart Rate":e.heart_rate,"Blood Pressure":e.blood_pressure,Weight:e.weight}}))),w=(0,a.useState)(1),b=(0,c.Z)(w,2),v=b[0],y=b[1],N=g.length,k=Math.ceil(N/10),C=10*(v-1),R=C+10,_=g.slice(C,R);return(0,j.jsxs)(a.Fragment,{children:[(0,j.jsx)("div",{className:"py-4",children:(0,j.jsxs)(m.Zb,{children:[(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"font-bold text-lg",children:[r.first_name,"  ",r.last_name," Vitals records"]}),(0,j.jsxs)(m.Dx,{children:[" ","  ","Blood pressure, Heart Rate, and Weight Comparison"]})]}),(0,j.jsx)(m.wW,{className:"mt-6",data:p,index:"date",categories:["Heart Rate","Blood Pressure","Weight"],colors:["emerald","gray","indigo"],yAxisWidth:40})]})}),(0,j.jsx)("div",{children:(0,j.jsxs)(m.kC,{className:"space-x-0.5",justifyContent:"start",alignItems:"center",children:[(0,j.jsx)(m.Dx,{children:"Logs"}),(0,j.jsx)(m.JO,{icon:h.Z,variant:"simple",tooltip:"Shows log history"})]})}),(0,j.jsxs)("div",{className:"flex space-x-2",children:[(0,j.jsx)(m.NU,{className:"max-w-full sm:max-w-xs",onValueChange:o,placeholder:"Search date...",children:t.map((function(e){return(0,j.jsx)(m.wn,{value:e.creation_date,children:e.creation_date},e.creation_date)}))}),(0,j.jsx)(d.rU,{to:"..",children:(0,j.jsxs)("button",{type:"button",className:"inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,j.jsx)(u.Z,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Back to Resident"]})}),(0,j.jsxs)("button",{type:"button",onClick:function(){var e=f().unparse(g),t=new Blob([e],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(t),n=document.createElement("a");n.setAttribute("href",r),n.setAttribute("download","logs.csv"),n.style.visibility="hidden",document.body.appendChild(n),n.click(),document.body.removeChild(n)},className:"inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,j.jsx)(x.Z,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Export"]})]}),(0,j.jsxs)(m.iA,{className:"mt-6 pb-24",children:[(0,j.jsx)(m.ss,{children:(0,j.jsxs)(m.SC,{children:[(0,j.jsx)(m.xs,{children:"Creation Date"}),(0,j.jsx)(m.xs,{className:"text-left",children:"B.P"}),(0,j.jsx)(m.xs,{className:"text-left",children:"Heart Rate"}),(0,j.jsx)(m.xs,{className:"text-left",children:"Weight"}),(0,j.jsx)(m.xs,{className:"text-left",children:"Voiding"})]})}),(0,j.jsx)(m.RM,{children:_.map((function(e){return(0,j.jsxs)(m.SC,{className:"hover:bg-white",children:[(0,j.jsx)(d.rU,{to:"./".concat(e.id),children:(0,j.jsx)(m.pj,{className:"w-auto hover:text-indigo-600 hover:underline",children:e.creation_date})}),(0,j.jsx)(m.pj,{className:"text-left",children:e.blood_pressure}),(0,j.jsx)(m.pj,{className:"text-left",children:e.heart_rate}),(0,j.jsx)(m.pj,{className:"text-left",children:e.weight}),(0,j.jsx)(m.pj,{className:"text-left",children:e.voiding})]},e.id)}))})]}),(0,j.jsxs)("ol",{className:"flex justify-center pb-24 gap-1 text-xs font-medium mt-4",children:[v>1&&(0,j.jsx)("li",{children:(0,j.jsxs)("a",{href:"#",onClick:function(){return y((function(e){return e-1}))},className:"inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180",children:[(0,j.jsx)("span",{className:"sr-only",children:"Prev Page"}),(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor",children:(0,j.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})]})}),Array.from({length:k},(function(e,t){return t+1})).map((function(e){return(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"#",onClick:function(){return y(e)},className:"".concat(e===v?"block h-8 w-8 rounded border-blue-600 bg-indigo-600 text-center leading-8 text-white":"block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"),children:e})},e)})),v<k&&(0,j.jsx)("li",{children:(0,j.jsxs)("a",{href:"#",onClick:function(){return y((function(e){return e+1}))},className:"inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180",children:[(0,j.jsx)("span",{className:"sr-only",children:"Next Page"}),(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor",children:(0,j.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})})]})]})};var w=function(){var e=(0,l.V4)("logs");return(0,j.jsx)(a.Fragment,{children:(0,j.jsx)(p,{logs:e})})};function b(e){return v.apply(this,arguments)}function v(){return(v=(0,s.Z)((0,n.Z)().mark((function e(t){var r,s,a,l,c,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.request,r=t.params,s=r.id,a="https://woodvale-test-2.onrender.com/daily-records/"+s,l=(0,i.getAuthToken)(),e.next=6,fetch(a,{method:"get",headers:{Authorization:"Bearer "+l,"Access-Control-Allow-Origin":"*"}});case 6:if(404!==(c=e.sent).status){e.next=9;break}return e.abrupt("return",c);case 9:if(400!==c.status){e.next=11;break}return e.abrupt("return",c);case 11:if(c.ok){e.next=13;break}throw(0,o.AV)({message:"Server error"},{status:500});case 13:return e.next=15,c.json();case 15:return d=e.sent,e.abrupt("return",d);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7810:function(e,t,r){var n=r(5987),s=r(2791),a=["title","titleId"];var i=s.forwardRef((function(e,t){var r=e.title,i=e.titleId,l=(0,n.Z)(e,a);return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":i},l),r?s.createElement("title",{id:i},r):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}))}));t.Z=i}}]);
//# sourceMappingURL=3260.655afa67.chunk.js.map