"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[2104],{2104:function(e,t,r){r.r(t),r.d(t,{default:function(){return j},loader:function(){return p}});var n=r(4165),s=r(5861),i=r(2791),a=r(7689),l=r(2620),c=r(9439),o=r(1087),d=r(6418),u=r(7929),x=r(184);var h=function(e){var t=e.incidents;(0,o.qd)();var r=(0,i.useState)(1),n=(0,c.Z)(r,2),s=n[0],a=n[1],l=t.length,h=Math.ceil(l/10),f=10*(s-1),j=f+10,p=t.slice(f,j);return(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)("div",{children:(0,x.jsxs)(u.kC,{className:"space-x-0.5",justifyContent:"start",alignItems:"center",children:[(0,x.jsx)(u.Dx,{children:"Incidents"}),(0,x.jsx)(u.JO,{icon:d.Z,variant:"simple",tooltip:"Shows incidents"})]})}),(0,x.jsxs)(u.iA,{className:"mt-6",children:[(0,x.jsx)(u.ss,{children:(0,x.jsxs)(u.SC,{children:[(0,x.jsx)(u.xs,{children:"Incident Date"}),(0,x.jsx)(u.xs,{className:"text-left",children:"Person Reporting"}),(0,x.jsx)(u.xs,{className:"text-left",children:"Person notified"}),(0,x.jsx)(u.xs,{className:"text-left",children:"location"})]})}),(0,x.jsx)(u.RM,{children:p.map((function(e){return(0,x.jsxs)(u.SC,{children:[(0,x.jsx)(o.rU,{to:"./".concat(e.id),children:(0,x.jsx)(u.pj,{className:"hover:underline hover:text-indigo-600",children:e.incident_date})}),(0,x.jsx)(u.pj,{className:"text-left",children:e.person_reporting}),(0,x.jsx)(u.pj,{className:"text-left",children:e.person_notified}),(0,x.jsx)(u.pj,{className:"text-left",children:e.location})]},e.id)}))})]}),(0,x.jsxs)("ol",{className:"flex justify-center gap-1 text-xs font-medium mt-4",children:[s>1&&(0,x.jsx)("li",{children:(0,x.jsxs)("a",{href:"#",onClick:function(){return a((function(e){return e-1}))},className:"inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180",children:[(0,x.jsx)("span",{className:"sr-only",children:"Prev Page"}),(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor",children:(0,x.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})]})}),Array.from({length:h},(function(e,t){return t+1})).map((function(e){return(0,x.jsx)("li",{children:(0,x.jsx)("a",{href:"#",onClick:function(){return a(e)},className:"".concat(e===s?"block h-8 w-8 rounded border-blue-600 bg-indigo-600 text-center leading-8 text-white":"block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"),children:e})},e)})),s<h&&(0,x.jsx)("li",{children:(0,x.jsxs)("a",{href:"#",onClick:function(){return a((function(e){return e+1}))},className:"inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180",children:[(0,x.jsx)("span",{className:"sr-only",children:"Next Page"}),(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor",children:(0,x.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})})]})]})},f=r(8127);var j=function(){var e=(0,a.V4)("incidents");return(0,x.jsx)(i.Fragment,{children:(0,x.jsx)(h,{incidents:e})})};function p(e){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)((0,n.Z)().mark((function e(t){var r,s,i,a,c,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.request,r=t.params,s=r.id,i="https://woodvale-test-2.onrender.com/incident-reports/"+s+"/incidents",a=(0,f.getAuthToken)(),e.next=6,fetch(i,{method:"get",headers:{Authorization:"Bearer "+a,"Access-Control-Allow-Origin":"*"}});case 6:if(404!==(c=e.sent).status){e.next=9;break}return e.abrupt("return",c);case 9:if(400!==c.status){e.next=11;break}return e.abrupt("return",c);case 11:if(c.ok){e.next=13;break}throw(0,l.AV)({message:"Server error"},{status:500});case 13:return e.next=15,c.json();case 15:return o=e.sent,e.abrupt("return",o);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=2104.23561212.chunk.js.map