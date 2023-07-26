"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[814,4226],{4226:function(e,t,s){s.r(t),s.d(t,{action:function(){return g}});var n=s(4165),i=s(5861),a=s(9439),r=s(2791),o=s(8127),l=s(7689),d=s(1087),c=s(2620),m=s(184);function g(e){return u.apply(this,arguments)}function u(){return(u=(0,i.Z)((0,n.Z)().mark((function e(t){var s,i,a,r,l,d,m,g;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.request,i=t.params,a=s.method,e.next=4,s.formData();case 4:if(r=e.sent,l=(0,o.getAuthToken)(),d=i.id,m={bowel_movement:r.get("bowel_movement"),behavior:r.get("behavior"),voiding:r.get("voiding"),continence_type:r.get("continent"),incontinence_type:r.get("incontinent"),catheter_output:r.get("catheter"),heart_rate:r.get("heart_rate"),blood_pressure:r.get("blood_pressure"),locomotion:r.get("locomotion"),pain_description:r.get("pain_description"),weight:r.get("weight"),pain_noted:r.get("pain_noted"),mood:r.get("mood"),walk_location:r.get("walk"),shower:r.get("shower"),resident_id:d},"https://homes-test.onrender.com/daily-records","POST"!==a){e.next=18;break}return e.next=12,fetch("https://homes-test.onrender.com/daily-records",{method:a,headers:{"Content-Type":"application/json",Authorization:"Bearer "+l,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(m)});case 12:if(400!==(g=e.sent).status){e.next=15;break}return e.abrupt("return",g);case 15:if(g.ok){e.next=17;break}throw(0,c.AV)({message:"Failed to save the daily log."},{status:500});case 17:return e.abrupt("return",(0,c.uX)("/login/residents/".concat(d,"/logs")));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){var t=e.method,s=(e.title,e.log),n=(0,l.s0)(),i=(0,l.HJ)(),o=(0,l.nA)(),c="submitting"===i.state,g=(0,r.useState)(!1),u=(0,a.Z)(g,2),x=u[0],h=u[1],p=(0,r.useState)(""),f=(0,a.Z)(p,2),b=f[0],y=f[1],j=(0,r.useState)(""),v=(0,a.Z)(j,2),N=v[0],w=v[1],k=(0,r.useState)(""),_=(0,a.Z)(k,2),C=_[0],V=_[1],S=(0,r.useState)(""),B=(0,a.Z)(S,2),P=(B[0],B[1]);return(0,m.jsxs)(r.Fragment,{children:[o&&o.errors&&(0,m.jsx)("ul",{children:Object.values(o.errors).map((function(e){return(0,m.jsx)("li",{children:e},e)}))}),o&&o.message&&(0,m.jsx)("p",{children:o.message}),(0,m.jsxs)(d.l0,{method:t,children:[(0,m.jsxs)("div",{className:"space-y-12",children:[(0,m.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,m.jsx)("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Vital signs and daily checks"}),(0,m.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Fill in correct information ."}),(0,m.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,m.jsxs)("div",{className:"sm:col-span-2 sm:col-start-1",children:[(0,m.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Heart Rate(B.P.M)"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("input",{defaultValue:s?s.heart_rate:"",type:"number",name:"heart_rate",id:"heart_rate",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,m.jsxs)("div",{className:"sm:col-span-2",children:[(0,m.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Weight(Kgs)"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("input",{defaultValue:s?s.weight:"",type:"number",name:"weight",id:"weight",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,m.jsxs)("div",{className:"sm:col-span-2",children:[(0,m.jsx)("label",{htmlFor:"Height",className:"block text-sm font-medium leading-6 text-gray-900",children:"Blood Pressure(mmHg)"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("input",{defaultValue:s?s.blood_pressure:"",type:"number",name:"blood_pressure",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,m.jsxs)("div",{className:"sm:col-span-3",children:[(0,m.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Bowel Movement"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsxs)("select",{defaultValue:s?s.bowel_movement:"",id:"bowel_movement",name:"bowel_movement",autoComplete:"bowel_movement",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",children:[(0,m.jsx)("option",{children:"Liquid"}),(0,m.jsx)("option",{children:"Loose"}),(0,m.jsx)("option",{children:"Soft"}),(0,m.jsx)("option",{children:"Soft"}),(0,m.jsx)("option",{children:"Hard"}),(0,m.jsx)("option",{children:"Formed"})]})})]}),(0,m.jsxs)("div",{className:"sm:col-span-3",children:[(0,m.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Voiding"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsxs)("select",{id:"voiding",name:"voiding",defaultValue:s?s.voiding:"",value:b,onChange:function(e){y(e.target.value),w(""),V(""),P("")},className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",children:[(0,m.jsx)("option",{value:"",children:"Select an option"}),(0,m.jsx)("option",{value:"continent",children:"Continent"}),(0,m.jsx)("option",{value:"incontinent",children:"Incontinent"}),(0,m.jsx)("option",{value:"catheter",children:"Catheter"})]})}),"continent"===b&&(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsxs)("select",{id:"ContinentOptions",name:"continent",defaultValue:s?s.continence_type:"",autoComplete:"ContinentOptions",value:N,onChange:function(e){w(e.target.value)},className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",children:[(0,m.jsx)("option",{value:"",children:"Select a continent option"}),(0,m.jsx)("option",{value:"Toilet",children:"Toilet"}),(0,m.jsx)("option",{value:"Bedside",children:"Bedside"}),(0,m.jsx)("option",{value:"Commode",children:"Commode"})]})}),"incontinent"===b&&(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsxs)("select",{id:"IncontinentOptions",name:"incontinent",defaultValue:s?s.incontinence_type:"",autoComplete:"IncontinentOptions",value:C,onChange:function(e){V(e.target.value)},className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",children:[(0,m.jsx)("option",{value:"",children:"Select an incontinent option"}),(0,m.jsx)("option",{value:"Brief",children:"Brief"}),(0,m.jsx)("option",{value:"PullUp",children:"Pull Up"}),(0,m.jsx)("option",{value:"Pericare",children:"Pericare"})]})}),"catheter"===b&&(0,m.jsxs)("div",{className:"mt-2",children:[(0,m.jsx)("label",{className:"block text-sm  leading-6 text-gray-900",children:"Type in the catheter output in cc"}),(0,m.jsx)("input",{type:"number",id:"CatheterInput",name:"catheter",defaultValue:s?s.catheter_output:"",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"})]})]})]})]}),(0,m.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,m.jsx)("h2",{className:"text-base font-semibold leading-7 text-gray-900"}),(0,m.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Kindly fill in brief descriptions in the fields below."}),(0,m.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,m.jsxs)("div",{className:"col-span-full",children:[(0,m.jsx)("label",{htmlFor:"behavior",className:"block text-sm font-medium leading-6 text-gray-900",children:"Behavior"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("textarea",{id:"behavior",defaultValue:s?s.behavior:"",name:"behavior",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),(0,m.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences to describe behavior."})]}),(0,m.jsxs)("div",{className:"col-span-full",children:[(0,m.jsx)("label",{htmlFor:"Locomotion",className:"block text-sm font-medium leading-6 text-gray-900",children:"Locomotion"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("textarea",{id:"Locomotion",name:"locomotion",defaultValue:s?s.locomotion:"",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),(0,m.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Briefly describe Locomotion in the room and outside."})]}),(0,m.jsxs)("div",{className:"col-span-full",children:[(0,m.jsx)("label",{htmlFor:"Mood",className:"block text-sm font-medium leading-6 text-gray-900",children:"Mood"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("textarea",{id:"mood",name:"mood",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:s?s.mood:""})}),(0,m.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Briefly describe Resident's Mood ."})]}),(0,m.jsx)("div",{className:"mt-6 space-y-6",children:(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"mt-6 space-y-6",children:(0,m.jsxs)("div",{className:"relative flex gap-x-3",children:[(0,m.jsx)("div",{className:"flex h-6 items-center",children:(0,m.jsx)("input",{id:"pain_noted",name:"pain_noted",type:"checkbox",value:x?"true":"false",className:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",checked:x,onChange:function(e){return h(e.target.checked)},defaultValue:s?s.pain_noted:""})}),(0,m.jsxs)("div",{className:"text-sm leading-6",children:[(0,m.jsx)("label",{htmlFor:"Pain",className:"font-medium text-gray-900",children:"Pain"}),(0,m.jsx)("p",{className:"text-gray-500",children:"Check the box if there are any reports of pain."})]})]})}),x&&(0,m.jsxs)("div",{className:"col-span-full",children:[(0,m.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Pain Description (Optional)"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("textarea",{id:"pain_description",name:"pain_description",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:s?s.pain_description:""})}),(0,m.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Briefly describe Resident's Pain."})]})]})})]})]})]}),(0,m.jsxs)("div",{className:"flex justify-between py-5 sm:col-span-4",children:[(0,m.jsx)("button",{onClick:function(){n("..")},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Back"}),(0,m.jsx)("button",{type:"submit",disabled:c,className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:c?"Submitting...":"Save"})]})]})]})}},814:function(e,t,s){s.r(t);s(2791);var n=s(4226),i=s(184);t.default=function(){return(0,i.jsx)(n.default,{method:"post"})}}}]);
//# sourceMappingURL=814.50959ace.chunk.js.map