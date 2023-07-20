"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[3260],{3260:function(e,t,r){r.r(t),r.d(t,{default:function(){return j},loader:function(){return p}});var s=r(4165),a=r(5861),n=r(2791),i=r(8127),l=r(7689),o=r(2620),c=r(1087),d=r(6418),h=r(7810),x=r(9479),u=r(7929),m=r(184);var g=function(e){var t=e.logs,r=(0,l.V4)("resident-detail").resident,s=((0,l.V4)("root").healthData,t.map((function(e){return{date:e.creation_date,"Heart Rate":e.heart_rate,"Blood Pressure":e.blood_pressure,Weight:e.weight}})));return(0,m.jsxs)(n.Fragment,{children:[(0,m.jsx)("div",{className:"py-4",children:(0,m.jsxs)(u.Zb,{children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"font-bold text-lg",children:[r.first_name,"  ",r.last_name," Vitals records"]}),(0,m.jsxs)(u.Dx,{children:["  ","  ","Blood pressure, Heart Rate, and Weight Comparison"]})]}),(0,m.jsx)(u.wW,{className:"mt-6",data:s,index:"date",categories:["Heart Rate","Blood Pressure","Weight"],colors:["emerald","gray","indigo"],yAxisWidth:40})]})}),(0,m.jsx)("div",{children:(0,m.jsxs)(u.kC,{className:"space-x-0.5",justifyContent:"start",alignItems:"center",children:[(0,m.jsx)(u.Dx,{children:"Logs"}),(0,m.jsx)(u.JO,{icon:d.Z,variant:"simple",tooltip:"Shows log history"})]})}),(0,m.jsxs)("div",{className:"flex space-x-2",children:[(0,m.jsx)(u.NU,{className:"max-w-full sm:max-w-xs",placeholder:"Search date...",children:t.map((function(e){return(0,m.jsx)(u.wn,{value:e.creation_date,children:e.creation_date},e.creation_date)}))}),(0,m.jsxs)(u.Ph,{className:"max-w-full sm:max-w-xs",defaultValue:"all",children:[(0,m.jsx)(u.Ql,{value:"all",children:"All "}),(0,m.jsx)(u.Ql,{value:"creation_date",children:"creation date"})]}),(0,m.jsx)(c.rU,{to:"..",children:(0,m.jsxs)("button",{type:"button",className:"inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,m.jsx)(h.Z,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Back to Resident"]})}),(0,m.jsxs)("button",{type:"button",className:"inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,m.jsx)(x.Z,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Export"]})]}),(0,m.jsxs)(u.iA,{className:"mt-6",children:[(0,m.jsx)(u.ss,{children:(0,m.jsxs)(u.SC,{children:[(0,m.jsx)(u.xs,{children:"Creation Date"}),(0,m.jsx)(u.xs,{className:"text-right",children:"B.P"}),(0,m.jsx)(u.xs,{className:"text-right",children:"Heart Rate"}),(0,m.jsx)(u.xs,{className:"text-right",children:"Weight"}),(0,m.jsx)(u.xs,{className:"text-right",children:"Voiding"})]})}),(0,m.jsx)(u.RM,{children:t.map((function(e){return(0,m.jsxs)(u.SC,{className:"hover:bg-white",children:[(0,m.jsx)(c.rU,{to:"./".concat(e.id),children:(0,m.jsx)(u.pj,{className:"w-auto hover:text-indigo-600 hover:underline",children:e.creation_date})}),(0,m.jsx)(u.pj,{className:"text-right",children:e.blood_pressure}),(0,m.jsx)(u.pj,{className:"text-right",children:e.heart_rate}),(0,m.jsx)(u.pj,{className:"text-right",children:e.weight}),(0,m.jsx)(u.pj,{className:"text-right",children:e.voiding})]},e.id)}))})]})]})};var j=function(){var e=(0,l.V4)("logs");return(0,m.jsx)(n.Fragment,{children:(0,m.jsx)(g,{logs:e})})};function p(e){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,s.Z)().mark((function e(t){var r,a,n,l,c,d;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.request,r=t.params,a=r.id,n="https://woodvale-test-2.onrender.com/daily-records/"+a,l=(0,i.getAuthToken)(),e.next=6,fetch(n,{method:"get",headers:{Authorization:"Bearer "+l,"Access-Control-Allow-Origin":"*"}});case 6:if(404!==(c=e.sent).status){e.next=9;break}return e.abrupt("return",c);case 9:if(400!==c.status){e.next=11;break}return e.abrupt("return",c);case 11:if(c.ok){e.next=13;break}throw(0,o.AV)({message:"Wrong Url"},{status:500});case 13:return e.next=15,c.json();case 15:return d=e.sent,console.log(d),e.abrupt("return",d);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7810:function(e,t,r){var s=r(5987),a=r(2791),n=["title","titleId"];var i=a.forwardRef((function(e,t){var r=e.title,i=e.titleId,l=(0,s.Z)(e,n);return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":i},l),r?a.createElement("title",{id:i},r):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}))}));t.Z=i}}]);
//# sourceMappingURL=3260.cde67e3e.chunk.js.map