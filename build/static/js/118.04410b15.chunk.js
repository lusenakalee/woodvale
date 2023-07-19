"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[118],{118:function(e,s,t){t.r(s),t.d(s,{action:function(){return g},default:function(){return u},loader:function(){return x}});var n=t(4165),r=t(5861),a=t(2791),i=t(1087),c=t(184);var d=function(e){var s=e.carePlan,t=(0,i.qd)();return(0,c.jsx)(a.Fragment,{children:(0,c.jsx)("div",{className:"pt-10",children:s?s.length<1?(0,c.jsx)("p",{children:"Nothing"}):(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,c.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Dietary requirements"}),(0,c.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.dietary_requirements})]}),(0,c.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,c.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Mobility assistance"}),(0,c.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.mobility_assistance})]}),(0,c.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,c.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Medication administration"}),(0,c.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.medication_administration})]}),(0,c.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,c.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Personal hygiene"}),(0,c.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.personal_hygiene})]}),(0,c.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,c.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Activity schedule"}),(0,c.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.activity_schedule})]}),(0,c.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,c.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Instructions"}),(0,c.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.instructions})]}),(0,c.jsxs)("div",{className:" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[(0,c.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:(0,c.jsx)("button",{onClick:function(){window.confirm("Are you sure?")&&t(null,{method:"delete"})},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Delete"})}),(0,c.jsx)("dd",{children:(0,c.jsx)(i.rU,{to:"./edit",children:(0,c.jsx)("button",{className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Edit"})})})]})]}):(0,c.jsx)("p",{children:"This resident has no care plan."})})})},m=t(8127),l=t(7689),o=t(2620);var u=function(){var e=(0,l.V4)("care-plan");return(0,c.jsx)(d,{carePlan:e})};function x(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)((0,n.Z)().mark((function e(s){var t,r,a,i,c,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.request,t=s.params,r=t.id,a="https://homes-test.onrender.com/care-plan/"+r+"/plan",i=(0,m.getAuthToken)(),e.next=6,fetch(a,{method:"get",headers:{Authorization:"Bearer "+i,"Access-Control-Allow-Origin":"*"}});case 6:if(404!==(c=e.sent).status){e.next=9;break}return e.abrupt("return",c);case 9:if(400!==c.status){e.next=11;break}return e.abrupt("return",c);case 11:if(c.ok){e.next=13;break}throw(0,o.AV)({message:"Wrong Url"},{status:500});case 13:return e.next=15,c.json();case 15:return d=e.sent,e.abrupt("return",d);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)((0,n.Z)().mark((function e(s){var t,r,a,i,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.request,r=s.params,a=(0,m.getAuthToken)(),i=r.id,e.next=5,fetch("https://homes-test.onrender.com/care-plan/"+i,{method:t.method,headers:{Authorization:"Bearer "+a}});case 5:if(404!==(c=e.sent).status){e.next=8;break}return e.abrupt("return",c);case 8:if(c.ok){e.next=10;break}throw(0,o.AV)({message:"Could not delete care plan."},{status:500});case 10:return e.abrupt("return",(0,o.uX)("/login/residents/".concat(i,"/care-plan")));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=118.04410b15.chunk.js.map