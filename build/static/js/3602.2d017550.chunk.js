"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[3602],{3602:function(e,t,s){s.r(t),s.d(t,{action:function(){return L},default:function(){return k},loader:function(){return C},residentLoader:function(){return Z}});var r=s(4165),n=s(5861),a=s(2791),i=s(9439),l=s(8127),d=(s(7304),s(7689)),m=s(1087),c=s(1440),o=s(5987),x=["title","titleId"];var g=a.forwardRef((function(e,t){var s=e.title,r=e.titleId,n=(0,o.Z)(e,x);return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":r},n),s?a.createElement("title",{id:r},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"}))})),u=["title","titleId"];var h=a.forwardRef((function(e,t){var s=e.title,r=e.titleId,n=(0,o.Z)(e,u);return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":r},n),s?a.createElement("title",{id:r},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"}))})),p=s(5022),f=s(2175),y=s(9134),v=["title","titleId"];var b=a.forwardRef((function(e,t){var s=e.title,r=e.titleId,n=(0,o.Z)(e,v);return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":r},n),s?a.createElement("title",{id:r},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"}))})),j=s(184);var w=function(e){var t=e.resident,s=e.image,o=(0,a.useState)(!0),x=(0,i.Z)(o,2),u=(x[0],x[1],(0,a.useState)(!1)),v=(0,i.Z)(u,2),w=v[0],N=v[1],k=function(){N(!1)},Z=((0,a.useRef)(null),(0,d.V4)("root")),A=(0,m.qd)(),E=(0,a.useState)(null),_=(0,i.Z)(E,2),L=_[0],I=_[1],C=((0,d.s0)(),(0,d.HJ)()),M=((0,l.getAuthToken)(),C.state,function(){var e=(0,n.Z)((0,r.Z)().mark((function e(s){var n,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),k(),n=(0,l.getAuthToken)(),(a=new FormData).append("file",L),e.prev=5,e.next=8,fetch("https://woodvale-test-2.onrender.com/residents/".concat(t.id,"/upload"),{method:"POST",headers:{Authorization:"Bearer "+n},body:a});case 8:400===(i=e.sent).status&&window.alert("Only Image attachment are allowed!!"),i.ok?window.confirm("File uploaded successfully!"):window.alert("failed to upload"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),window.alert("Network error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}()),V=(0,a.useState)(""),R=(0,i.Z)(V,2);return R[0],R[1],(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(a.Fragment,{children:(0,j.jsx)("main",{children:(0,j.jsxs)("div",{className:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8",children:[(0,j.jsxs)("div",{className:"px-4 sm:px-0 flex  justify-between",children:[(0,j.jsxs)("div",{className:"flex gap-x-4",children:[s&&(0,j.jsx)("img",{className:"h-24 rounded-lg",src:s,alt:"Profile"}),(0,j.jsxs)("div",{className:"min-w-0 flex-auto pr-10",children:[(0,j.jsxs)("p",{className:"text-sm font-semibold leading-6 text-gray-900",children:[t.first_name,"'s Information"]}),(0,j.jsxs)("p",{className:"mt-1 truncate text-xs leading-5 text-gray-500",children:[" ","General details and Information."]}),(0,j.jsxs)("button",{type:"button",onClick:function(){N(!0)},className:"inline-flex opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,j.jsx)(c.Z,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Upload Picture"]}),w&&(0,j.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[(0,j.jsx)("div",{className:"fixed inset-0 bg-black opacity-50"}),(0,j.jsx)("div",{className:"relative z-10 bg-white rounded-md w-96",children:(0,j.jsxs)("form",{onSubmit:M,children:[(0,j.jsxs)("div",{className:"p-6",children:[(0,j.jsx)("h1",{className:"text-lg font-bold",children:"Profile Pic Upload"}),(0,j.jsxs)("div",{className:"mt-4",children:[(0,j.jsx)("label",{htmlFor:"formFileSm",className:"block font-semibold",children:"Upload Patient Image"}),(0,j.jsx)("input",{className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",id:"formFileSm",type:"file",name:"file",onChange:function(e){I(e.target.files[0])}})]})]}),(0,j.jsxs)("div",{className:"px-6 py-4 bg-gray-100 flex items-center justify-end gap-x-4",children:[(0,j.jsx)("button",{type:"button",onClick:k,className:"text-sm font-semibold text-gray-900",children:"Close"}),(0,j.jsx)("button",{type:"submit",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600",children:"Save changes"})]})]})})]})]})]}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"flex space-x-4 ",children:[(0,j.jsx)(m.rU,{to:"./logs",children:(0,j.jsx)("div",{children:(0,j.jsxs)("button",{type:"button",className:"inline-flex opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,j.jsx)(g,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"History"]})})}),(0,j.jsx)("div",{children:(0,j.jsx)(m.rU,{to:"./new-log",children:(0,j.jsxs)("button",{type:"button",className:"inline-flex  opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,j.jsx)(h,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Vital assessment"]})})}),(0,j.jsx)("div",{children:(0,j.jsx)(m.rU,{to:"./care-plan",children:(0,j.jsxs)("button",{type:"button",className:"inline-flex  opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,j.jsx)(p.Z,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Care Plan"]})})}),(0,j.jsx)("div",{children:(0,j.jsx)(m.rU,{to:"./med-recs",children:(0,j.jsxs)("button",{type:"button",className:"inline-flex  opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,j.jsx)(p.Z,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Medical Records"]})})}),(0,j.jsx)("div",{children:(0,j.jsx)(m.rU,{to:"./incident",children:(0,j.jsxs)("button",{type:"button",className:"inline-flex  opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,j.jsx)(f.Z,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Incident Report"]})})})]}),(0,j.jsx)("div",{className:"pt-4",children:(0,j.jsx)("div",{children:(0,j.jsx)(m.rU,{to:"./leaves",children:(0,j.jsxs)("button",{type:"button",className:"inline-flex  opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,j.jsx)(y.Z,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Leave application"]})})})})]})]}),(0,j.jsx)("div",{className:"mt-6 border-t border-gray-50",children:(0,j.jsxs)("dl",{className:"divide-y divide-gray-100",children:[(0,j.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,j.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Full name"}),(0,j.jsxs)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:[t.first_name," ",t.middle_name," ",t.last_name]})]}),(0,j.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,j.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Gender"}),(0,j.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.gender})]}),(0,j.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,j.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Date Registered"}),(0,j.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.date_registered})]}),(0,j.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,j.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Date Of Birth"}),(0,j.jsxs)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:[" ","Age: ",t.age,"years ",(0,j.jsx)("br",{})," ","  ","D.O.B:"," ",t.date_of_birth," "]})]}),(0,j.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,j.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Email address"}),(0,j.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.contact_email})]}),(0,j.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,j.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Phone Number"}),(0,j.jsxs)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:[t.contact_phone_no," "]})]}),(0,j.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,j.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Address"}),(0,j.jsxs)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:[" ",t.state," ",t.city," ",t.zip]})]}),(0,j.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,j.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Emergency contact name"}),(0,j.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.emergency_contact_name})]}),(0,j.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,j.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Emergency contact number/email"}),(0,j.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.emergency_contact_number})]}),(0,j.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,j.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Emergency contact 2 name"}),(0,j.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.emergency_contact_name_2})]}),(0,j.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,j.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Emergency contact 2 number/email"}),(0,j.jsxs)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:[" ",t.emergency_contact_number_2]})]}),(0,j.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,j.jsxs)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:["Resident registered by"," "]}),(0,j.jsxs)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:[t.registered_by?t.registered_by.first_name:"N/A"," ",t.registered_by?t.registered_by.last_name:"N/A"]})]}),(0,j.jsxs)("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[(0,j.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Attachments"}),(0,j.jsx)("dd",{className:"mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0",children:(0,j.jsx)("ul",{role:"list",className:"divide-y divide-gray-100 rounded-md border border-gray-200",children:(0,j.jsx)("li",{className:"flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6",children:(0,j.jsx)("div",{children:(0,j.jsx)("div",{children:(0,j.jsx)(m.rU,{to:"./attachment",children:(0,j.jsxs)("button",{type:"button",className:"inline-flex  opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,j.jsx)(b,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Attachments"]})})})})})})})]})]})}),Z&&(0,j.jsxs)("div",{className:" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[(0,j.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:(0,j.jsx)("button",{onClick:function(){window.confirm("Are you sure?")&&A(null,{method:"delete"})},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Delete"})}),(0,j.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0",children:(0,j.jsx)(m.rU,{to:"edit",children:(0,j.jsx)("button",{type:"submit",className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Edit"})})})]})]})})})})},N=s(2620);var k=function(){var e=(0,d.V4)("resident-detail"),t=e.resident,s=e.image;return(0,j.jsx)(a.Fragment,{children:(0,j.jsx)(w,{resident:t,image:s})})};function Z(e){return A.apply(this,arguments)}function A(){return(A=(0,n.Z)((0,r.Z)().mark((function e(t){var s,n,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://woodvale-test-2.onrender.com/residents/",s=(0,l.getAuthToken)(),n=t,e.next=5,fetch("https://woodvale-test-2.onrender.com/residents/"+n,{method:"get",headers:{Authorization:"Bearer "+s,"Access-Control-Allow-Origin":"*"}});case 5:if(404!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",a);case 8:if(a.ok){e.next=10;break}throw(0,N.AV)({message:"Wrong Url"},{status:500});case 10:return e.next=12,a.json();case 12:return i=e.sent,e.abrupt("return",i);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)((0,r.Z)().mark((function e(t){var s,n,a,i,d,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,l.getAuthToken)(),a=t,e.prev=2,e.next=5,fetch("https://woodvale-test-2.onrender.com/residents/img/".concat(a),{headers:{Authorization:"Bearer "+n}});case 5:if(!(i=e.sent).ok){e.next=15;break}return e.next=9,i.blob();case 9:return d=e.sent,m=URL.createObjectURL(d),s=m,e.abrupt("return",s);case 15:console.error("Error fetching image:",i.status);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),console.error("Error fetching image:",e.t0);case 21:case"end":return e.stop()}}),e,null,[[2,18]])})))).apply(this,arguments)}function L(e){return I.apply(this,arguments)}function I(){return(I=(0,n.Z)((0,r.Z)().mark((function e(t){var s,n,a,i,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.request,n=t.params,a=(0,l.getAuthToken)(),i=n.id,e.next=5,fetch("https://woodvale-test-2.onrender.com/residents/"+i,{method:s.method,headers:{Authorization:"Bearer "+a}});case 5:if(404!==(d=e.sent).status){e.next=8;break}return e.abrupt("return",d);case 8:if(d.ok){e.next=10;break}throw(0,N.AV)({message:"Could not delete resident."},{status:500});case 10:return e.abrupt("return",(0,N.uX)("/login/residents"));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return M.apply(this,arguments)}function M(){return(M=(0,n.Z)((0,r.Z)().mark((function e(t){var s,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.request,s=t.params,n=s.id,e.t0=N.PQ,e.next=5,Z(n);case 5:return e.t1=e.sent,e.next=8,E(n);case 8:return e.t2=e.sent,e.t3={resident:e.t1,image:e.t2},e.abrupt("return",(0,e.t0)(e.t3));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},9134:function(e,t,s){var r=s(5987),n=s(2791),a=["title","titleId"];var i=n.forwardRef((function(e,t){var s=e.title,i=e.titleId,l=(0,r.Z)(e,a);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":i},l),s?n.createElement("title",{id:i},s):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"}))}));t.Z=i},5022:function(e,t,s){var r=s(5987),n=s(2791),a=["title","titleId"];var i=n.forwardRef((function(e,t){var s=e.title,i=e.titleId,l=(0,r.Z)(e,a);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":i},l),s?n.createElement("title",{id:i},s):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"}))}));t.Z=i},2175:function(e,t,s){var r=s(5987),n=s(2791),a=["title","titleId"];var i=n.forwardRef((function(e,t){var s=e.title,i=e.titleId,l=(0,r.Z)(e,a);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":i},l),s?n.createElement("title",{id:i},s):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"}))}));t.Z=i},1440:function(e,t,s){var r=s(5987),n=s(2791),a=["title","titleId"];var i=n.forwardRef((function(e,t){var s=e.title,i=e.titleId,l=(0,r.Z)(e,a);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":i},l),s?n.createElement("title",{id:i},s):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"}))}));t.Z=i}}]);
//# sourceMappingURL=3602.2d017550.chunk.js.map