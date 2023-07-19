"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[9321,8326],{8326:function(e,t,s){s.r(t),s.d(t,{action:function(){return m}});var i=s(4165),n=s(5861),a=s(2791),r=s(8127),l=s(7689),c=s(1087),o=s(2620),d=s(184);function m(e){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)((0,i.Z)().mark((function e(t){var s,n,a,l,c,d,m,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.request,n=t.params,a=s.method,e.next=4,s.formData();case 4:if(l=e.sent,c=(0,r.getAuthToken)(),d=n.id,m={dietary_requirements:l.get("diet"),mobility_assistance:l.get("mobility"),medication_administration:l.get("medication"),personal_hygiene:l.get("hygiene"),activity_schedule:l.get("activity"),instructions:l.get("instructions"),resident_id:d},"https://homes-test.onrender.com/care-plan","POST"!==a){e.next=18;break}return e.next=12,fetch("https://homes-test.onrender.com/care-plan",{method:a,headers:{"Content-Type":"application/json",Authorization:"Bearer "+c,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(m)});case 12:if(400!==(u=e.sent).status){e.next=15;break}return e.abrupt("return",u);case 15:if(u.ok){e.next=17;break}throw(0,o.AV)({message:"Failed to save the care plan"},{status:500});case 17:return e.abrupt("return",(0,o.uX)("/login/residents/".concat(d,"/care-plan")));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){var t=e.carePlan,s=e.method,i=(e.title,(0,l.s0)()),n=(0,l.HJ)(),r=(0,l.nA)(),o="submitting"===n.state;return(0,d.jsxs)(a.Fragment,{children:[r&&r.errors&&(0,d.jsx)("ul",{children:Object.values(r.errors).map((function(e){return(0,d.jsx)("li",{children:e},e)}))}),(0,d.jsx)(c.l0,{method:s,children:(0,d.jsxs)("div",{className:"space-y-12",children:[(0,d.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,d.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Kindly fill in correct details"}),(0,d.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,d.jsxs)("div",{className:"col-span-full",children:[(0,d.jsx)("label",{htmlFor:"diet",className:"block text-sm font-medium leading-6 text-gray-900",children:"Dietary requirements"}),(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)("textarea",{id:"diet",name:"diet",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:t?t.dietary_requirements:""})}),(0,d.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about the Dietary requirements."})]}),(0,d.jsxs)("div",{className:"col-span-full",children:[(0,d.jsx)("label",{htmlFor:"mobility",className:"block text-sm font-medium leading-6 text-gray-900",children:"Mobility assistance"}),(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)("textarea",{id:"mobility",name:"mobility",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:t?t.mobility_assistance:""})}),(0,d.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about the resident's mobility."})]}),(0,d.jsxs)("div",{className:"col-span-full",children:[(0,d.jsx)("label",{htmlFor:"medication",className:"block text-sm font-medium leading-6 text-gray-900",children:"Medication administration"}),(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)("textarea",{id:"medication",name:"medication",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:t?t.medication_administration:""})}),(0,d.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about the medication."})]}),(0,d.jsxs)("div",{className:"col-span-full",children:[(0,d.jsx)("label",{htmlFor:"hygiene",className:"block text-sm font-medium leading-6 text-gray-900",children:"Personal hygiene"}),(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)("textarea",{id:"hygiene",name:"hygiene",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:t?t.personal_hygiene:""})}),(0,d.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Describe the personal hygiene."})]}),(0,d.jsxs)("div",{className:"col-span-full",children:[(0,d.jsx)("label",{htmlFor:"activity",className:"block text-sm font-medium leading-6 text-gray-900",children:"Activity schedule"}),(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)("textarea",{id:"activity",name:"activity",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:t?t.activity_schedule:""})}),(0,d.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about resident's activity schedule."})]}),(0,d.jsxs)("div",{className:"col-span-full",children:[(0,d.jsx)("label",{htmlFor:"instructions",className:"block text-sm font-medium leading-6 text-gray-900",children:"Instructions"}),(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)("textarea",{id:"instructions",name:"instructions",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:t?t.instructions:""})}),(0,d.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about the instructons."})]})]})]}),(0,d.jsxs)("div",{className:"flex justify-between sm:col-span-4",children:[(0,d.jsx)("button",{onClick:function(){i("..")},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Back"}),(0,d.jsx)("button",{type:"submit",disabled:o,className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:o?"Submitting...":"Save"})]})]})})]})}},9321:function(e,t,s){s.r(t),s.d(t,{action:function(){return d}});var i=s(4165),n=s(5861),a=(s(2791),s(8326)),r=s(7689),l=s(2620),c=s(8127),o=s(184);function d(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)((0,i.Z)().mark((function e(t){var s,n,a,r,o,d,m,u,g;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.request,n=t.params,a=s.method,e.next=4,s.formData();case 4:if(r=e.sent,o=(0,c.getAuthToken)(),d=n.id,m={dietary_requirements:r.get("diet"),mobility_assistance:r.get("mobility"),medication_administration:r.get("medication"),personal_hygiene:r.get("hygiene"),activity_schedule:r.get("activity"),instructions:r.get("instructions")},u="https://homes-test.onrender.com/care-plan/"+d,"PATCH"!==a){e.next=18;break}return e.next=12,fetch(u,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(m)});case 12:if(400!==(g=e.sent).status){e.next=15;break}return e.abrupt("return",g);case 15:if(g.ok){e.next=17;break}throw(0,l.AV)({message:"Failed to update the care plan"},{status:500});case 17:return e.abrupt("return",(0,l.uX)("/login/residents/".concat(d,"/care-plan")));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(){var e=(0,r.V4)("care-plan");return(0,o.jsx)("main",{children:(0,o.jsx)("div",{className:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8",children:(0,o.jsx)(a.default,{carePlan:e,method:"patch",title:"Edit Care Plan"})})})}}}]);
//# sourceMappingURL=9321.477d3c3d.chunk.js.map