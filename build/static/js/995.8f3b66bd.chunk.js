"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[995,8326],{8326:function(e,t,s){s.r(t),s.d(t,{action:function(){return m}});var i=s(4165),a=s(5861),n=s(2791),r=s(8127),l=s(7689),c=s(1087),d=s(2620),o=s(184);function m(e){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,i.Z)().mark((function e(t){var s,a,n,l,c,o,m,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.request,a=t.params,n=s.method,e.next=4,s.formData();case 4:if(l=e.sent,c=(0,r.getAuthToken)(),o=a.id,m={dietary_requirements:l.get("diet"),mobility_assistance:l.get("mobility"),medication_administration:l.get("medication"),personal_hygiene:l.get("hygiene"),activity_schedule:l.get("activity"),instructions:l.get("instructions"),resident_id:o},"https://woodvale-test-2.onrender.com/care-plan","POST"!==n){e.next=18;break}return e.next=12,fetch("https://woodvale-test-2.onrender.com/care-plan",{method:n,headers:{"Content-Type":"application/json",Authorization:"Bearer "+c,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(m)});case 12:if(400!==(u=e.sent).status){e.next=15;break}return e.abrupt("return",u);case 15:if(u.ok){e.next=17;break}throw(0,d.AV)({message:"Failed to save the care plan"},{status:500});case 17:return e.abrupt("return",(0,d.uX)("/login/residents/".concat(o,"/care-plan")));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){var t=e.carePlan,s=e.method,i=(e.title,(0,l.s0)()),a=(0,l.HJ)(),r=(0,l.nA)(),d="submitting"===a.state;return(0,o.jsxs)(n.Fragment,{children:[r&&r.errors&&(0,o.jsx)("ul",{children:Object.values(r.errors).map((function(e){return(0,o.jsx)("li",{children:e},e)}))}),r&&r.message&&(0,o.jsx)("p",{children:r.message}),(0,o.jsx)(c.l0,{method:s,children:(0,o.jsxs)("div",{className:"space-y-12",children:[(0,o.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,o.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Kindly fill in correct details"}),(0,o.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,o.jsxs)("div",{className:"col-span-full",children:[(0,o.jsx)("label",{htmlFor:"diet",className:"block text-sm font-medium leading-6 text-gray-900",children:"Dietary requirements"}),(0,o.jsx)("div",{className:"mt-2",children:(0,o.jsx)("textarea",{id:"diet",name:"diet",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:t?t.dietary_requirements:""})}),(0,o.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about the Dietary requirements."})]}),(0,o.jsxs)("div",{className:"col-span-full",children:[(0,o.jsx)("label",{htmlFor:"mobility",className:"block text-sm font-medium leading-6 text-gray-900",children:"Mobility assistance"}),(0,o.jsx)("div",{className:"mt-2",children:(0,o.jsx)("textarea",{id:"mobility",name:"mobility",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:t?t.mobility_assistance:""})}),(0,o.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about the resident's mobility."})]}),(0,o.jsxs)("div",{className:"col-span-full",children:[(0,o.jsx)("label",{htmlFor:"medication",className:"block text-sm font-medium leading-6 text-gray-900",children:"Medication administration"}),(0,o.jsx)("div",{className:"mt-2",children:(0,o.jsx)("textarea",{id:"medication",name:"medication",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:t?t.medication_administration:""})}),(0,o.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about the medication."})]}),(0,o.jsxs)("div",{className:"col-span-full",children:[(0,o.jsx)("label",{htmlFor:"hygiene",className:"block text-sm font-medium leading-6 text-gray-900",children:"Personal hygiene"}),(0,o.jsx)("div",{className:"mt-2",children:(0,o.jsx)("textarea",{id:"hygiene",name:"hygiene",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:t?t.personal_hygiene:""})}),(0,o.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Describe the personal hygiene."})]}),(0,o.jsxs)("div",{className:"col-span-full",children:[(0,o.jsx)("label",{htmlFor:"activity",className:"block text-sm font-medium leading-6 text-gray-900",children:"Activity schedule"}),(0,o.jsx)("div",{className:"mt-2",children:(0,o.jsx)("textarea",{id:"activity",name:"activity",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:t?t.activity_schedule:""})}),(0,o.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about resident's activity schedule."})]}),(0,o.jsxs)("div",{className:"col-span-full",children:[(0,o.jsx)("label",{htmlFor:"instructions",className:"block text-sm font-medium leading-6 text-gray-900",children:"Instructions"}),(0,o.jsx)("div",{className:"mt-2",children:(0,o.jsx)("textarea",{id:"instructions",name:"instructions",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:t?t.instructions:""})}),(0,o.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about the instructons."})]})]})]}),(0,o.jsxs)("div",{className:"flex justify-between sm:col-span-4",children:[(0,o.jsx)("button",{onClick:function(){i("..")},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Back"}),(0,o.jsx)("button",{type:"submit",disabled:d,className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:d?"Submitting...":"Save"})]})]})})]})}},995:function(e,t,s){s.r(t);s(2791);var i=s(8326),a=s(184);t.default=function(){return(0,a.jsx)("main",{children:(0,a.jsx)("div",{className:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8",children:(0,a.jsx)(i.default,{method:"post",title:"New Care Plan"})})})}}}]);
//# sourceMappingURL=995.8f3b66bd.chunk.js.map