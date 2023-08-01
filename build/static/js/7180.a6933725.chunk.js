"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[7180,8216],{8216:function(e,t,n){n.r(t),n.d(t,{action:function(){return m}});var s=n(4165),i=n(5861),a=n(2791),r=n(8127),o=n(7689),d=n(1087),c=n(2620),l=n(184);function m(e){return g.apply(this,arguments)}function g(){return(g=(0,i.Z)((0,s.Z)().mark((function e(t){var n,i,a,o,d,l,m,g,u,x,f,p;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.request,i=t.params,a=n.method,e.next=4,n.formData();case 4:if(o=e.sent,d=(0,r.getAuthToken)(),l=i.id,m=i.incidentId,g={incident_date:o.get("incident_date"),description:o.get("description"),actions_taken:o.get("actions_taken"),location:o.get("location"),person_reporting:o.get("person_reporting"),person_notified:o.get("person_notified"),witnesses:o.get("witnesses"),antecedent:o.get("antecedent"),resident_id:l},u={incident_date:o.get("incident_date"),description:o.get("description"),actions_taken:o.get("actions_taken"),location:o.get("location"),person_reporting:o.get("person_reporting"),person_notified:o.get("person_notified"),witnesses:o.get("witnesses"),antecedent:o.get("antecedent")},x="https://homes-test.onrender.com/incident-reports","POST"!==a){e.next=22;break}return e.next=14,fetch(x,{method:a,headers:{"Content-Type":"application/json",Authorization:"Bearer "+d,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(g)});case 14:if(400!==(f=e.sent).status){e.next=17;break}return e.abrupt("return",f);case 17:if(f.ok){e.next=19;break}throw(0,c.AV)({message:"Failed to save the incident"},{status:500});case 19:case 30:return e.abrupt("return",(0,c.uX)("/login/residents/".concat(l,"/incident")));case 22:return x="/incident-reports/".concat(m),e.next=25,fetch(x,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+d,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(u)});case 25:if(400!==(p=e.sent).status){e.next=28;break}return e.abrupt("return",p);case 28:if(p.ok){e.next=30;break}throw(0,c.AV)({message:"Failed to update the incident"},{status:500});case 31:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){var t=e.method,n=e.incident,s=(0,o.s0)(),i=(0,o.HJ)(),r=(0,o.nA)(),c="submitting"===i.state;return(0,l.jsxs)(a.Fragment,{children:[r&&r.errors&&(0,l.jsx)("ul",{children:Object.values(r.errors).map((function(e){return(0,l.jsx)("li",{children:e},e)}))}),r&&r.message&&(0,l.jsx)("p",{children:r.message}),(0,l.jsxs)(d.l0,{method:t,children:[(0,l.jsxs)("div",{className:"sm:col-span-3",children:[(0,l.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Incident Date"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("input",{id:"incident_date",name:"incident_date",type:"date",defaultValue:n?n.incident_date:"",required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"})})]}),(0,l.jsxs)("div",{className:"col-span-full",children:[(0,l.jsx)("label",{htmlFor:"about",className:"block text-sm font-medium leading-6 text-gray-900",children:"Incident description"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("textarea",{id:"about",name:"description",required:!0,rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:n?n.description:""})}),(0,l.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about the Incident."})]}),(0,l.jsxs)("div",{className:"col-span-full",children:[(0,l.jsx)("label",{htmlFor:"actions_taken",className:"block text-sm font-medium leading-6 text-gray-900",children:"Actions Taken"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("textarea",{id:"actions_taken",name:"actions_taken",required:!0,rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:n?n.actions_taken:""})}),(0,l.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences about the Incident."})]}),(0,l.jsxs)("div",{className:"sm:col-span-3",children:[(0,l.jsx)("label",{htmlFor:"location",className:"block text-sm font-medium leading-6 text-gray-900",children:"Location of Incident"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("input",{type:"text",name:"location",defaultValue:n?n.location:"",id:"location",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,l.jsxs)("div",{className:"sm:col-span-3",children:[(0,l.jsx)("label",{htmlFor:"person_reporting",className:"block text-sm font-medium leading-6 text-gray-900",children:"Person reporting"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("input",{required:!0,type:"text",name:"person_reporting",defaultValue:n?n.person_reporting:"",id:"person_reporting",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,l.jsxs)("div",{className:"sm:col-span-3",children:[(0,l.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Person notified"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsxs)("select",{id:"person_notified",defaultValue:n?n.person_notified:"",name:"person_notified",autoComplete:"person_notified",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",children:[(0,l.jsx)("option",{children:"911"}),(0,l.jsx)("option",{children:"Case Manager"}),(0,l.jsx)("option",{children:"MD"}),(0,l.jsx)("option",{children:"Family"})]})})]}),(0,l.jsxs)("div",{className:"col-span-full",children:[(0,l.jsx)("label",{htmlFor:"witnesses",className:"block text-sm font-medium leading-6 text-gray-900",children:"Witnesses"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("textarea",{id:"witnesses",name:"witnesses",required:!0,rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:n?n.witnesses:""})})]}),(0,l.jsxs)("div",{className:"col-span-full",children:[(0,l.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Antecedent"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("textarea",{id:"antecedent",name:"antecedent",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:n?n.antecedent:""})})]}),(0,l.jsxs)("div",{className:"flex justify-between py-5 sm:col-span-4",children:[(0,l.jsx)("button",{onClick:function(){s("..")},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Back"}),(0,l.jsx)("button",{type:"submit",disabled:c,className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:c?"Submitting...":"Save"})]})]})]})}},7180:function(e,t,n){n.r(t);n(2791);var s=n(8216),i=n(7689),a=n(184);t.default=function(){var e=(0,i.V4)("incident");return(0,a.jsx)(s.default,{method:"patch",incident:e})}}}]);
//# sourceMappingURL=7180.a6933725.chunk.js.map