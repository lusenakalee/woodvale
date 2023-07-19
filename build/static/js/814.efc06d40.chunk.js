"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[814,4226],{4226:function(e,t,n){n.r(t),n.d(t,{action:function(){return g}});var s=n(4165),i=n(5861),a=n(9439),o=n(2791),r=n(8127),l=n(7689),d=n(1087),c=n(2620),m=n(184);function g(e){return u.apply(this,arguments)}function u(){return(u=(0,i.Z)((0,s.Z)().mark((function e(t){var n,i,a,o,l,d,m,g;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.request,i=t.params,a=n.method,e.next=4,n.formData();case 4:if(o=e.sent,l=(0,r.getAuthToken)(),d=i.id,m={bowel_movement:o.get("bowel_movement"),behavior:o.get("behavior"),voiding:o.get("voiding"),continence_type:o.get("continent"),incontinence_type:o.get("incontinent"),catheter_output:o.get("catheter"),heart_rate:o.get("heart_rate"),blood_pressure:o.get("blood_pressure"),locomotion:o.get("locomotion"),pain_description:o.get("pain_description"),weight:o.get("weight"),pain_noted:o.get("pain_noted"),mood:o.get("mood"),walk_location:o.get("walk"),shower:o.get("shower"),resident_id:d},"https://homes-test.onrender.com/daily-records","POST"!==a){e.next=18;break}return e.next=12,fetch("https://homes-test.onrender.com/daily-records",{method:a,headers:{"Content-Type":"application/json",Authorization:"Bearer "+l,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(m)});case 12:if(400!==(g=e.sent).status){e.next=15;break}return e.abrupt("return",g);case 15:if(g.ok){e.next=17;break}throw(0,c.AV)({message:"Failed to save the daily log."},{status:500});case 17:return e.abrupt("return",(0,c.uX)("/login/residents/".concat(d,"/logs")));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){var t=e.method,n=(e.title,e.log),s=(0,l.s0)(),i=(0,l.HJ)(),r=((0,l.nA)(),"submitting"===i.state),c=(0,o.useState)(!1),g=(0,a.Z)(c,2),u=g[0],x=g[1],h=(0,o.useState)(""),p=(0,a.Z)(h,2),f=p[0],b=p[1],y=(0,o.useState)(""),j=(0,a.Z)(y,2),v=j[0],N=j[1],w=(0,o.useState)(""),k=(0,a.Z)(w,2),_=k[0],C=k[1],V=(0,o.useState)(""),S=(0,a.Z)(V,2),B=(S[0],S[1]);return(0,m.jsx)(o.Fragment,{children:(0,m.jsxs)(d.l0,{method:t,children:[(0,m.jsxs)("div",{className:"space-y-12",children:[(0,m.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,m.jsx)("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Vital signs and daily checks"}),(0,m.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Fill in correct information ."}),(0,m.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,m.jsxs)("div",{className:"sm:col-span-2 sm:col-start-1",children:[(0,m.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Heart Rate(B.P.M)"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("input",{defaultValue:n?n.heart_rate:"",type:"number",name:"heart_rate",id:"heart_rate",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,m.jsxs)("div",{className:"sm:col-span-2",children:[(0,m.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Weight(Kgs)"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("input",{defaultValue:n?n.weight:"",type:"number",name:"weight",id:"weight",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,m.jsxs)("div",{className:"sm:col-span-2",children:[(0,m.jsx)("label",{htmlFor:"Height",className:"block text-sm font-medium leading-6 text-gray-900",children:"Blood Pressure(mmHg)"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("input",{defaultValue:n?n.blood_pressure:"",type:"number",name:"blood_pressure",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,m.jsxs)("div",{className:"sm:col-span-3",children:[(0,m.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Bowel Movement"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsxs)("select",{defaultValue:n?n.bowel_movement:"",id:"bowel_movement",name:"bowel_movement",autoComplete:"bowel_movement",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",children:[(0,m.jsx)("option",{children:"Liquid"}),(0,m.jsx)("option",{children:"Loose"}),(0,m.jsx)("option",{children:"Soft"}),(0,m.jsx)("option",{children:"Soft"}),(0,m.jsx)("option",{children:"Hard"}),(0,m.jsx)("option",{children:"Formed"})]})})]}),(0,m.jsxs)("div",{className:"sm:col-span-3",children:[(0,m.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Voiding"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsxs)("select",{id:"voiding",name:"voiding",defaultValue:n?n.voiding:"",value:f,onChange:function(e){b(e.target.value),N(""),C(""),B("")},className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",children:[(0,m.jsx)("option",{value:"",children:"Select an option"}),(0,m.jsx)("option",{value:"continent",children:"Continent"}),(0,m.jsx)("option",{value:"incontinent",children:"Incontinent"}),(0,m.jsx)("option",{value:"catheter",children:"Catheter"})]})}),"continent"===f&&(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsxs)("select",{id:"ContinentOptions",name:"continent",defaultValue:n?n.continence_type:"",autoComplete:"ContinentOptions",value:v,onChange:function(e){N(e.target.value)},className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",children:[(0,m.jsx)("option",{value:"",children:"Select a continent option"}),(0,m.jsx)("option",{value:"Toilet",children:"Toilet"}),(0,m.jsx)("option",{value:"Bedside",children:"Bedside"}),(0,m.jsx)("option",{value:"Commode",children:"Commode"})]})}),"incontinent"===f&&(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsxs)("select",{id:"IncontinentOptions",name:"incontinent",defaultValue:n?n.incontinence_type:"",autoComplete:"IncontinentOptions",value:_,onChange:function(e){C(e.target.value)},className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",children:[(0,m.jsx)("option",{value:"",children:"Select an incontinent option"}),(0,m.jsx)("option",{value:"Brief",children:"Brief"}),(0,m.jsx)("option",{value:"PullUp",children:"Pull Up"}),(0,m.jsx)("option",{value:"Pericare",children:"Pericare"})]})}),"catheter"===f&&(0,m.jsxs)("div",{className:"mt-2",children:[(0,m.jsx)("label",{className:"block text-sm  leading-6 text-gray-900",children:"Type in the catheter output in cc"}),(0,m.jsx)("input",{type:"number",id:"CatheterInput",name:"catheter",defaultValue:n?n.catheter_output:"",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"})]})]})]})]}),(0,m.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,m.jsx)("h2",{className:"text-base font-semibold leading-7 text-gray-900"}),(0,m.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Kindly fill in brief descriptions in the fields below."}),(0,m.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,m.jsxs)("div",{className:"col-span-full",children:[(0,m.jsx)("label",{htmlFor:"behavior",className:"block text-sm font-medium leading-6 text-gray-900",children:"Behavior"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("textarea",{id:"behavior",defaultValue:n?n.behavior:"",name:"behavior",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),(0,m.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write a few sentences to describe behavior."})]}),(0,m.jsxs)("div",{className:"col-span-full",children:[(0,m.jsx)("label",{htmlFor:"Locomotion",className:"block text-sm font-medium leading-6 text-gray-900",children:"Locomotion"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("textarea",{id:"Locomotion",name:"locomotion",defaultValue:n?n.locomotion:"",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),(0,m.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Briefly describe Locomotion in the room and outside."})]}),(0,m.jsxs)("div",{className:"col-span-full",children:[(0,m.jsx)("label",{htmlFor:"Mood",className:"block text-sm font-medium leading-6 text-gray-900",children:"Mood"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("textarea",{id:"mood",name:"mood",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:n?n.mood:""})}),(0,m.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Briefly describe Resident's Mood ."})]}),(0,m.jsx)("div",{className:"mt-6 space-y-6",children:(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"mt-6 space-y-6",children:(0,m.jsxs)("div",{className:"relative flex gap-x-3",children:[(0,m.jsx)("div",{className:"flex h-6 items-center",children:(0,m.jsx)("input",{id:"pain_noted",name:"pain_noted",type:"checkbox",value:u?"true":"false",className:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",checked:u,onChange:function(e){return x(e.target.checked)},defaultValue:n?n.pain_noted:""})}),(0,m.jsxs)("div",{className:"text-sm leading-6",children:[(0,m.jsx)("label",{htmlFor:"Pain",className:"font-medium text-gray-900",children:"Pain"}),(0,m.jsx)("p",{className:"text-gray-500",children:"Check the box if there are any reports of pain."})]})]})}),u&&(0,m.jsxs)("div",{className:"col-span-full",children:[(0,m.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Pain Description (Optional)"}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("textarea",{id:"pain_description",name:"pain_description",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:n?n.pain_description:""})}),(0,m.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Briefly describe Resident's Pain."})]})]})})]})]})]}),(0,m.jsxs)("div",{className:"flex justify-between py-5 sm:col-span-4",children:[(0,m.jsx)("button",{onClick:function(){s("..")},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Back"}),(0,m.jsx)("button",{type:"submit",disabled:r,className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:r?"Submitting...":"Save"})]})]})})}},814:function(e,t,n){n.r(t);n(2791);var s=n(4226),i=n(184);t.default=function(){return(0,i.jsx)(s.default,{method:"post"})}}}]);
//# sourceMappingURL=814.efc06d40.chunk.js.map