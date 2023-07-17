"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[1634,8216],{8216:function(e,t,n){n.r(t),n.d(t,{action:function(){return m}});var s=n(4165),i=n(5861),a=n(2791),r=n(8127),o=n(7689),l=n(1087),d=n(2620),c=n(184);function m(e){return u.apply(this,arguments)}function u(){return(u=(0,i.Z)((0,s.Z)().mark((function e(t){var n,i,a,o,l,c,m,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.request,i=t.params,a=n.method,e.next=4,n.formData();case 4:if(o=e.sent,l=(0,r.getAuthToken)(),c=i.id,m={incident_date:o.get("incident_date"),description:o.get("description"),actions_taken:o.get("actions_taken"),location:o.get("location"),person_reporting:o.get("person_reporting"),person_notified:o.get("person_notified"),witnesses:o.get("witnesses"),antecedent:o.get("antecedent"),resident_id:c},"https://homes-test.onrender.com/incident-reports","POST"!==a){e.next=18;break}return e.next=12,fetch("https://homes-test.onrender.com/incident-reports",{method:a,headers:{"Content-Type":"application/json",Authorization:"Bearer "+l,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(m)});case 12:if(400!==(u=e.sent).status){e.next=15;break}return e.abrupt("return",u);case 15:if(u.ok){e.next=17;break}throw(0,d.AV)({message:"Failed to save the incident"},{status:500});case 17:return e.abrupt("return",(0,d.uX)("/login/residents/".concat(c,"/incident")));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){var t=e.method,n=e.incident,s=(0,o.s0)(),i=(0,o.HJ)(),r=((0,o.nA)(),"submitting"===i.state);return(0,c.jsx)(a.Fragment,{children:(0,c.jsxs)(l.l0,{method:t,children:[(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Incident Date"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("input",{id:"incident_date",name:"incident_date",type:"date",defaultValue:n?n.incident_date:"",required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"})})]}),(0,c.jsxs)("div",{className:"col-span-full",children:[(0,c.jsx)("label",{htmlFor:"about",className:"block text-sm font-medium leading-6 text-gray-900",children:"Incident description"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("textarea",{id:"about",name:"description",required:!0,rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:n?n.description:""})}),(0,c.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about the Incident."})]}),(0,c.jsxs)("div",{className:"col-span-full",children:[(0,c.jsx)("label",{htmlFor:"actions_taken",className:"block text-sm font-medium leading-6 text-gray-900",children:"Actions Taken"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("textarea",{id:"actions_taken",name:"actions_taken",required:!0,rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:n?n.actions_taken:""})}),(0,c.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about the Incident."})]}),(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{htmlFor:"location",className:"block text-sm font-medium leading-6 text-gray-900",children:"Location of Incident"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("input",{type:"text",name:"location",defaultValue:n?n.location:"",id:"location",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{htmlFor:"person_reporting",className:"block text-sm font-medium leading-6 text-gray-900",children:"Person reporting"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("input",{required:!0,type:"text",name:"person_reporting",defaultValue:n?n.person_reporting:"",id:"person_reporting",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Person notified"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsxs)("select",{id:"person_notified",defaultValue:n?n.person_notified:"",name:"person_notified",autoComplete:"person_notified",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",children:[(0,c.jsx)("option",{children:"911"}),(0,c.jsx)("option",{children:"Case Manager"}),(0,c.jsx)("option",{children:"MD"}),(0,c.jsx)("option",{children:"Family"})]})})]}),(0,c.jsxs)("div",{className:"col-span-full",children:[(0,c.jsx)("label",{htmlFor:"witnesses",className:"block text-sm font-medium leading-6 text-gray-900",children:"Witnesses"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("textarea",{id:"witnesses",name:"witnesses",required:!0,rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:n?n.witnesses:""})})]}),(0,c.jsxs)("div",{className:"col-span-full",children:[(0,c.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Antecedent"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("textarea",{id:"antecedent",name:"antecedent",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:n?n.antecedent:""})})]}),(0,c.jsxs)("div",{className:"flex justify-between py-5 sm:col-span-4",children:[(0,c.jsx)("button",{onClick:function(){s("..")},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Back"}),(0,c.jsx)("button",{type:"submit",disabled:r,className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:r?"Submitting...":"Save"})]})]})})}},1634:function(e,t,n){n.r(t);var s=n(2791),i=n(8216),a=n(184);t.default=function(){return(0,a.jsx)(s.Fragment,{children:(0,a.jsx)(i.default,{method:"post"})})}}}]);
//# sourceMappingURL=1634.83eefb00.chunk.js.map