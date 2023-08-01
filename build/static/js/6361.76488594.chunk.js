"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[6361],{6361:function(e,s,t){t.r(s),t.d(s,{action:function(){return p},default:function(){return u},loader:function(){return x}});var r=t(4165),n=t(5861),a=t(2791),d=t(8127),i=t(7689),m=t(2620),c=t(1087),l=t(184);var o=function(e){var s=e.record,t=(0,c.qd)();return(0,l.jsx)(a.Fragment,{children:(0,l.jsx)("div",{className:"pt-10",children:s?s.length<1?(0,l.jsx)("p",{children:"Nothing"}):(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,l.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Condition"}),(0,l.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.condition})]}),(0,l.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,l.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Allergies"}),(0,l.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.allergies})]}),(0,l.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,l.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Medications"}),(0,l.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.medications})]}),(0,l.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,l.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Immunization Records"}),(0,l.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.immunization_records})]}),(0,l.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,l.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Activity schedule"}),(0,l.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.activity_schedule})]}),(0,l.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,l.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Physician Contact"}),(0,l.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.physician_contact})]}),(0,l.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,l.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Feeding Method"}),(0,l.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.feeding_method})]}),(0,l.jsxs)("div",{className:" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[(0,l.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:(0,l.jsx)("button",{onClick:function(){window.confirm("Are you sure?")&&t(null,{method:"delete"})},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Delete"})}),(0,l.jsx)("dd",{children:(0,l.jsx)(c.rU,{to:"./edit",children:(0,l.jsx)("button",{className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Edit"})})})]})]}):(0,l.jsx)("p",{children:"This resident has no medical record."})})})};var u=function(){var e=(0,i.V4)("med-recs");return(0,l.jsx)(o,{record:e})};function x(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)((0,r.Z)().mark((function e(s){var t,n,a,i,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.request,t=s.params,n=t.id,a="https://woodvale-test-2.onrender.com/medical-records/"+n,i=(0,d.getAuthToken)(),e.next=6,fetch(a,{method:"get",headers:{Authorization:"Bearer "+i,"Access-Control-Allow-Origin":"*"}});case 6:if(404!==(c=e.sent).status){e.next=9;break}return e.abrupt("return",c);case 9:if(400!==c.status){e.next=11;break}return e.abrupt("return",c);case 11:if(c.ok){e.next=13;break}throw(0,m.AV)({message:"Server error"},{status:500});case 13:return e.next=15,c.json();case 15:return l=e.sent,e.abrupt("return",l);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)((0,r.Z)().mark((function e(s){var t,n,a,i,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.request,n=s.params,a=(0,d.getAuthToken)(),i=n.id,e.next=5,fetch("https://woodvale-test-2.onrender.com/medical-records/"+i,{method:t.method,headers:{Authorization:"Bearer "+a}});case 5:if(404!==(c=e.sent).status){e.next=8;break}return e.abrupt("return",c);case 8:if(c.ok){e.next=10;break}throw(0,m.AV)({message:"Could not delete medical record."},{status:500});case 10:return e.abrupt("return",(0,m.uX)("/login/residents/".concat(i,"/med-recs")));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=6361.76488594.chunk.js.map