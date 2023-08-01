"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[6614],{2948:function(e,r,t){var n=t(9439),s=t(2791),a=t(6418),l=t(1087),i=t(7929),c=t(184);r.Z=function(e){var r=e.leaves,t=e.title,o=(0,s.useState)(1),d=(0,n.Z)(o,2),x=d[0],h=d[1],u=r.length,p=Math.ceil(u/10),j=10*(x-1),m=j+10,f=r.slice(j,m);return(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)("div",{children:(0,c.jsxs)(i.kC,{className:"space-x-0.5",justifyContent:"start",alignItems:"center",children:[(0,c.jsx)(i.Dx,{children:t}),(0,c.jsx)(i.JO,{icon:a.Z,variant:"simple",tooltip:"Shows applied leaves"})]})}),(0,c.jsxs)(i.iA,{className:"mt-6",children:[(0,c.jsx)(i.ss,{children:(0,c.jsxs)(i.SC,{children:[(0,c.jsx)(i.xs,{children:"Resident Name"}),(0,c.jsx)(i.xs,{children:"Leave Date"}),(0,c.jsx)(i.xs,{children:"Return Date"}),(0,c.jsx)(i.xs,{className:"text-right",children:"Approval Status"}),(0,c.jsx)(i.xs,{className:"text-right",children:"Person responsible"}),(0,c.jsx)(i.xs,{className:"text-right",children:"Contact"})]})}),(0,c.jsx)(i.RM,{children:f.map((function(e){return(0,c.jsxs)(i.SC,{children:[(0,c.jsx)(l.rU,{to:"/login/residents/".concat(e.resident_id,"/leaves/").concat(e.id),children:(0,c.jsxs)(i.pj,{children:[e.resident.first_name," ",e.resident.last_name]})}),(0,c.jsx)(i.pj,{children:e.leave_date}),(0,c.jsx)(i.pj,{children:e.return_date}),(0,c.jsx)(i.pj,{className:"text-right",children:e.approval_status}),(0,c.jsx)(i.pj,{className:"text-right",children:e.person_responsible}),(0,c.jsx)(i.pj,{className:"text-right",children:e.contact})]},e.id)}))})]}),(0,c.jsxs)("ol",{className:"flex justify-center gap-1 text-xs font-medium mt-4",children:[x>1&&(0,c.jsx)("li",{children:(0,c.jsxs)("a",{href:"#",onClick:function(){return h((function(e){return e-1}))},className:"inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180",children:[(0,c.jsx)("span",{className:"sr-only",children:"Prev Page"}),(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})]})}),Array.from({length:p},(function(e,r){return r+1})).map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#",onClick:function(){return h(e)},className:"".concat(e===x?"block h-8 w-8 rounded border-blue-600 bg-indigo-600 text-center leading-8 text-white":"block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"),children:e})},e)})),x<p&&(0,c.jsx)("li",{children:(0,c.jsxs)("a",{href:"#",onClick:function(){return h((function(e){return e+1}))},className:"inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180",children:[(0,c.jsx)("span",{className:"sr-only",children:"Next Page"}),(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3",viewBox:"0 0 20 20",fill:"currentColor",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})})]})]})}},6614:function(e,r,t){t.r(r),t.d(r,{loader:function(){return x}});var n=t(4165),s=t(5861),a=t(2791),l=t(7689),i=t(2620),c=t(8127),o=t(2948),d=t(184);function x(){return h.apply(this,arguments)}function h(){return(h=(0,s.Z)((0,n.Z)().mark((function e(){var r,t,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://homes-test.onrender.com/leave-records/approved",r=(0,c.getAuthToken)(),e.next=4,fetch("https://homes-test.onrender.com/leave-records/approved",{method:"get",headers:{Authorization:"Bearer "+r,"Access-Control-Allow-Origin":"*"}});case 4:if(404!==(t=e.sent).status){e.next=7;break}return e.abrupt("return",t);case 7:if(400!==t.status){e.next=9;break}return e.abrupt("return",t);case 9:if(t.ok){e.next=11;break}throw(0,i.AV)({message:"Server error"},{status:500});case 11:return e.next=13,t.json();case 13:return s=e.sent,e.abrupt("return",s);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.default=function(){var e=(0,l.f_)();return(0,d.jsx)(a.Fragment,{children:(0,d.jsx)("main",{children:(0,d.jsx)("div",{className:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8",children:(0,d.jsx)(o.Z,{title:"Approved Leaves",leaves:e})})})})}}}]);
//# sourceMappingURL=6614.cba71087.chunk.js.map