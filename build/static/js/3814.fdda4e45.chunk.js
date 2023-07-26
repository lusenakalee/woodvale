"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[3814,4049],{4049:function(e,s,t){t.r(s),t.d(s,{action:function(){return m}});var i=t(4165),n=t(5861),r=t(2791),a=t(8127),l=t(7689),o=t(1087),d=t(2620),c=t(184);function m(e){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)((0,i.Z)().mark((function e(s){var t,n,r,l,o,c,m,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.request,n=s.params,r=t.method,e.next=4,t.formData();case 4:if(l=e.sent,o=(0,a.getAuthToken)(),c=n.id,m={condition:l.get("condition"),allergies:l.get("allergies"),medications:l.get("medication"),feeding_method:l.get("feeding_method"),immunization_records:l.get("immunization_records"),physician_contact:l.get("physician_contact"),resident_id:c},"https://homes-test.onrender.com/medical-records","POST"!==r){e.next=18;break}return e.next=12,fetch("https://homes-test.onrender.com/medical-records",{method:r,headers:{"Content-Type":"application/json",Authorization:"Bearer "+o,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(m)});case 12:if(400!==(u=e.sent).status){e.next=15;break}return e.abrupt("return",u);case 15:if(u.ok){e.next=17;break}throw(0,d.AV)({message:"Failed to save the medical record."},{status:500});case 17:return e.abrupt("return",(0,d.uX)("/login/residents/".concat(c,"/med-recs")));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.default=function(e){e.record;var s=e.method,t=(e.title,(0,l.s0)()),i=(0,l.HJ)(),n=(0,l.nA)(),a="submitting"===i.state;return(0,c.jsxs)(r.Fragment,{children:[n&&n.errors&&(0,c.jsx)("ul",{children:Object.values(n.errors).map((function(e){return(0,c.jsx)("li",{children:e},e)}))}),n&&n.message&&(0,c.jsx)("p",{children:n.message}),(0,c.jsxs)(o.l0,{method:s,children:[(0,c.jsxs)("div",{className:"col-span-full",children:[(0,c.jsx)("label",{htmlFor:"condition",className:"block text-sm font-medium leading-6 text-gray-900",children:"Condition"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("textarea",{id:"condition",required:!0,name:"condition",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:""})}),(0,c.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write about the resident's condition."})]}),(0,c.jsxs)("div",{className:"col-span-full",children:[(0,c.jsx)("label",{htmlFor:"allergies",className:"block text-sm font-medium leading-6 text-gray-900",children:"allergies"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("textarea",{id:"allergies",required:!0,name:"allergies",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:""})}),(0,c.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write about the resident's allergies."})]}),(0,c.jsxs)("div",{className:"col-span-full",children:[(0,c.jsx)("label",{htmlFor:"medication",className:"block text-sm font-medium leading-6 text-gray-900",children:"medication"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("textarea",{id:"medication",required:!0,name:"medication",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:""})}),(0,c.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write about the resident's medication."})]}),(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{htmlFor:"feeding_method",className:"block text-sm font-medium leading-6 text-gray-900",children:"Feeding method"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsxs)("select",{id:"feeding_method",name:"feeding_method",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",children:[(0,c.jsx)("option",{children:"Dependent"}),(0,c.jsx)("option",{children:"Independent"})]})})]}),(0,c.jsxs)("div",{className:"col-span-full",children:[(0,c.jsx)("label",{htmlFor:"immunization_records",className:"block text-sm font-medium leading-6 text-gray-900",children:"Immunization records"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("textarea",{id:"immunization_records",required:!0,name:"immunization_records",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:""})}),(0,c.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write about the resident's medication."})]}),(0,c.jsxs)("div",{className:"sm:col-span-4 pt-10",children:[(0,c.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"physician contact"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("input",{id:"physician_contact",name:"physician_contact",autoComplete:"physician_contact",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,c.jsx)("div",{className:" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:(0,c.jsxs)("div",{className:"flex justify-between sm:col-span-4",children:[(0,c.jsx)("button",{onClick:function(){t("..")},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Back"}),(0,c.jsx)("button",{type:"submit",disabled:a,className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:a?"Submitting...":"Save"})]})})]})]})}},3814:function(e,s,t){t.r(s);t(2791);var i=t(4049),n=t(184);s.default=function(){return(0,n.jsx)("main",{children:(0,n.jsx)("div",{className:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8",children:(0,n.jsx)(i.default,{method:"post",title:"New Care Plan"})})})}}}]);
//# sourceMappingURL=3814.fdda4e45.chunk.js.map