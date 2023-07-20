"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[8216],{8216:function(e,n,s){s.r(n),s.d(n,{action:function(){return m}});var t=s(4165),i=s(5861),r=s(2791),a=s(8127),o=s(7689),l=s(1087),d=s(2620),c=s(184);function m(e){return g.apply(this,arguments)}function g(){return(g=(0,i.Z)((0,t.Z)().mark((function e(n){var s,i,r,o,l,c,m,g;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.request,i=n.params,r=s.method,e.next=4,s.formData();case 4:if(o=e.sent,l=(0,a.getAuthToken)(),c=i.id,m={incident_date:o.get("incident_date"),description:o.get("description"),actions_taken:o.get("actions_taken"),location:o.get("location"),person_reporting:o.get("person_reporting"),person_notified:o.get("person_notified"),witnesses:o.get("witnesses"),antecedent:o.get("antecedent"),resident_id:c},"https://woodvale-test-2.onrender.com/incident-reports","POST"!==r){e.next=18;break}return e.next=12,fetch("https://woodvale-test-2.onrender.com/incident-reports",{method:r,headers:{"Content-Type":"application/json",Authorization:"Bearer "+l,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(m)});case 12:if(400!==(g=e.sent).status){e.next=15;break}return e.abrupt("return",g);case 15:if(g.ok){e.next=17;break}throw(0,d.AV)({message:"Failed to save the incident"},{status:500});case 17:return e.abrupt("return",(0,d.uX)("/login/residents/".concat(c,"/incident")));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.default=function(e){var n=e.method,s=e.incident,t=(0,o.s0)(),i=(0,o.HJ)(),a=(0,o.nA)(),d="submitting"===i.state;return(0,c.jsxs)(r.Fragment,{children:[a&&a.errors&&(0,c.jsx)("ul",{children:Object.values(a.errors).map((function(e){return(0,c.jsx)("li",{children:e},e)}))}),a&&a.message&&(0,c.jsx)("p",{children:a.message}),(0,c.jsxs)(l.l0,{method:n,children:[(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Incident Date"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("input",{id:"incident_date",name:"incident_date",type:"date",defaultValue:s?s.incident_date:"",required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"})})]}),(0,c.jsxs)("div",{className:"col-span-full",children:[(0,c.jsx)("label",{htmlFor:"about",className:"block text-sm font-medium leading-6 text-gray-900",children:"Incident description"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("textarea",{id:"about",name:"description",required:!0,rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:s?s.description:""})}),(0,c.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about the Incident."})]}),(0,c.jsxs)("div",{className:"col-span-full",children:[(0,c.jsx)("label",{htmlFor:"actions_taken",className:"block text-sm font-medium leading-6 text-gray-900",children:"Actions Taken"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("textarea",{id:"actions_taken",name:"actions_taken",required:!0,rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:s?s.actions_taken:""})}),(0,c.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about the Incident."})]}),(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{htmlFor:"location",className:"block text-sm font-medium leading-6 text-gray-900",children:"Location of Incident"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("input",{type:"text",name:"location",defaultValue:s?s.location:"",id:"location",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{htmlFor:"person_reporting",className:"block text-sm font-medium leading-6 text-gray-900",children:"Person reporting"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("input",{required:!0,type:"text",name:"person_reporting",defaultValue:s?s.person_reporting:"",id:"person_reporting",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Person notified"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsxs)("select",{id:"person_notified",defaultValue:s?s.person_notified:"",name:"person_notified",autoComplete:"person_notified",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",children:[(0,c.jsx)("option",{children:"911"}),(0,c.jsx)("option",{children:"Case Manager"}),(0,c.jsx)("option",{children:"MD"}),(0,c.jsx)("option",{children:"Family"})]})})]}),(0,c.jsxs)("div",{className:"col-span-full",children:[(0,c.jsx)("label",{htmlFor:"witnesses",className:"block text-sm font-medium leading-6 text-gray-900",children:"Witnesses"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("textarea",{id:"witnesses",name:"witnesses",required:!0,rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:s?s.witnesses:""})})]}),(0,c.jsxs)("div",{className:"col-span-full",children:[(0,c.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Antecedent"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("textarea",{id:"antecedent",name:"antecedent",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:s?s.antecedent:""})})]}),(0,c.jsxs)("div",{className:"flex justify-between py-5 sm:col-span-4",children:[(0,c.jsx)("button",{onClick:function(){t("..")},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Back"}),(0,c.jsx)("button",{type:"submit",disabled:d,className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:d?"Submitting...":"Save"})]})]})]})}}}]);
//# sourceMappingURL=8216.276feb61.chunk.js.map