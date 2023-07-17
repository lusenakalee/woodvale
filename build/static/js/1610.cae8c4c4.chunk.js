"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[1610],{1610:function(e,t,s){s.r(t),s.d(t,{action:function(){return p},default:function(){return u},loader:function(){return x}});var r=s(4165),a=s(5861),n=s(2791),d=s(7689),i=s(2620),m=s(1087),c=s(184);var l=function(e){var t=e.leave,s=(0,m.qd)();return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,c.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Status"}),(0,c.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:!0===t.approved?"Approved":"Not Approved"})]}),(0,c.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,c.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Contact Person"}),(0,c.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.contact})]}),(0,c.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,c.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Person responsible"}),(0,c.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.person_responsible})]}),(0,c.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,c.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Leave Date"}),(0,c.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.leave_date})]}),(0,c.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,c.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Return Date"}),(0,c.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.return_date})]}),(0,c.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,c.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Has the resident returned?"}),(0,c.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:!0===t.return_date?"Returned":"Not Yet"})]}),(0,c.jsxs)("div",{className:" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[(0,c.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:(0,c.jsx)("button",{onClick:function(){window.confirm("Are you sure?")&&s(null,{method:"delete"})},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Delete"})}),(0,c.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0",children:(0,c.jsx)(m.rU,{to:"edit",children:(0,c.jsx)("button",{type:"submit",className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Edit"})})})]})]})},o=s(8127);var u=function(){var e=(0,d.V4)("leave");return(0,c.jsx)(n.Fragment,{children:(0,c.jsx)(l,{leave:e})})};function x(e){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)((0,r.Z)().mark((function e(t){var s,a,n,d,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.request,s=t.params,"/leave-records/leave/",a=(0,o.getAuthToken)(),n=s.leaveId,e.next=6,fetch("/leave-records/leave/"+n,{method:"get",headers:{Authorization:"Bearer "+a,"Access-Control-Allow-Origin":"*"}});case 6:if(400!==(d=e.sent).status){e.next=9;break}return e.abrupt("return",d);case 9:if(404!==d.status){e.next=11;break}return e.abrupt("return",d);case 11:if(d.ok){e.next=13;break}throw(0,i.AV)({message:"Wrong Url"},{status:500});case 13:return e.next=15,d.json();case 15:return m=e.sent,console.log(m),e.abrupt("return",m);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function e(t){var s,a,n,d,m,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.request,a=t.params,n=(0,o.getAuthToken)(),d=a.leaveId,m=a.id,e.next=6,fetch("/leave-records/"+d,{method:s.method,headers:{Authorization:"Bearer "+n}});case 6:if(404!==(c=e.sent).status){e.next=9;break}return e.abrupt("return",c);case 9:if(400!==c.status){e.next=11;break}return e.abrupt("return",c);case 11:if(c.ok){e.next=13;break}throw(0,i.AV)({message:"Could not delete incident."},{status:500});case 13:return e.abrupt("return",(0,i.uX)("/login/residents/".concat(m,"/leaves")));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=1610.cae8c4c4.chunk.js.map