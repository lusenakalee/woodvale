"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[9935],{9935:function(e,t,s){s.r(t),s.d(t,{action:function(){return f}});var r,n=s(4165),a=s(5861),i=s(9439),l=s(2791),o=s(7689),d=s(1087),c=s(2620),m=s(8127),u=s(1440),g=s(2644),x=s(184);function f(e){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,n.Z)().mark((function e(t){var s,a,i,l,o,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.request,t.params,e.next=3,s.formData();case 3:return a=e.sent,i=s.method,l=(0,m.getAuthToken)(),o={username:a.get("username"),password1:a.get("password1"),password2:a.get("password2"),first_name:a.get("first_name"),last_name:a.get("last_name")},e.next=9,fetch("https://woodvale-test-2.onrender.com/user/"+r,{method:i,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+l},body:JSON.stringify(o)});case 9:if(400!==(d=e.sent).status){e.next=12;break}return e.abrupt("return",d);case 12:if(409!==d.status){e.next=14;break}return e.abrupt("return",d);case 14:if(417!==d.status){e.next=16;break}return e.abrupt("return",d);case 16:if(d.ok){e.next=18;break}throw(0,c.AV)({message:"Could edit user"},{status:500});case 18:return e.abrupt("return",(0,c.uX)("/login/profile"));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){var t=e.method,s=e.user,c=(e.title,(0,o.s0)()),f=(0,o.HJ)(),p=(0,l.useState)(null),h=(0,i.Z)(p,2),b=h[0],y=h[1],w=(0,o.nA)(),j=(0,l.useState)(""),v=(0,i.Z)(j,2),N=v[0],k=v[1],C=(0,m.getAuthToken)(),Z=(0,l.useState)(!1),A=(0,i.Z)(Z,2),F=A[0],S=A[1],_=function(){S(!1)};r=s.id;var O="submitting"===f.state,q=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),_(),r=(0,m.getAuthToken)(),(a=new FormData).append("file",b),e.prev=5,e.next=8,fetch("https://woodvale-test-2.onrender.com/".concat(s.id,"/upload"),{method:"POST",headers:{Authorization:"Bearer "+r},body:a});case 8:400===(i=e.sent).status&&window.alert("Only Image attachment are allowed!!"),i.ok?window.confirm("File uploaded successfully"):window.alert("failed to upload"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),window.alert("Network error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://woodvale-test-2.onrender.com/upload/".concat(s.id),{headers:{Authorization:"Bearer "+C}});case 3:if(!(t=e.sent).ok){e.next=12;break}return e.next=7,t.blob();case 7:r=e.sent,a=URL.createObjectURL(r),k(a),e.next=13;break;case 12:console.error("Error fetching image:",t.status);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error("Error fetching image:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,x.jsx)(l.Fragment,{children:(0,x.jsx)("main",{children:(0,x.jsxs)("div",{className:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8",children:[(0,x.jsx)("div",{children:(0,x.jsxs)("button",{type:"button",onClick:function(){S(!0)},className:"inline-flex opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,x.jsx)(u.Z,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Upload Picture"]})}),F&&(0,x.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[(0,x.jsx)("div",{className:"fixed inset-0 bg-black opacity-50"}),(0,x.jsx)("div",{className:"relative z-10 bg-white rounded-md w-96",children:(0,x.jsxs)("form",{onSubmit:q,children:[(0,x.jsxs)("div",{className:"p-6",children:[(0,x.jsx)("h1",{className:"text-lg font-bold",children:"Profile Pic Upload"}),(0,x.jsxs)("div",{className:"mt-4",children:[(0,x.jsx)("label",{htmlFor:"formFileSm",className:"block font-semibold",children:"Upload Your Image"}),(0,x.jsx)("input",{className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",id:"formFileSm",type:"file",name:"file",onChange:function(e){y(e.target.files[0])}})]})]}),(0,x.jsxs)("div",{className:"px-6 py-4 bg-gray-100 flex items-center justify-end gap-x-4",children:[(0,x.jsx)("button",{type:"button",onClick:_,className:"text-sm font-semibold text-gray-900",children:"Close"}),(0,x.jsx)("button",{type:"submit",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600",children:"Upload"})]})]})})]}),(0,x.jsx)(d.l0,{method:t,children:(0,x.jsxs)("div",{className:"space-y-12",children:[(0,x.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,x.jsxs)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:["Kindly fill in correct details",w&&w.errors&&(0,x.jsx)("ul",{children:Object.values(w.errors).map((function(e){return(0,x.jsx)("li",{children:e},e)}))}),w&&w.message&&(0,x.jsx)("p",{children:w.message})]}),N&&(0,x.jsx)("img",{src:N,alt:g,className:"h-24 rounded-lg"}),(0,x.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,x.jsxs)("div",{className:"sm:col-span-3",children:[(0,x.jsx)("label",{htmlFor:"first-name",className:"block text-sm font-medium leading-6 text-gray-900",children:"First name"}),(0,x.jsx)("div",{className:"mt-2",children:(0,x.jsx)("input",{type:"text",name:"first_name",id:"first-name",autoComplete:"given-name",required:!0,defaultValue:s?s.first_name:" ",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,x.jsxs)("div",{className:"sm:col-span-3",children:[(0,x.jsx)("label",{htmlFor:"last_name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Last name"}),(0,x.jsx)("div",{className:"mt-2",children:(0,x.jsx)("input",{type:"text",name:"last_name",id:"last_name",autoComplete:"family-name",required:!0,defaultValue:s?s.last_name:" ",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,x.jsxs)("div",{className:"sm:col-span-3",children:[(0,x.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium leading-6 text-gray-900",children:"Set user name"}),(0,x.jsx)("div",{className:"mt-2",children:(0,x.jsx)("input",{type:"email",name:"username",id:"username",required:!0,autoComplete:"family-name",defaultValue:s?s.username:" ",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,x.jsxs)("div",{className:"sm:col-span-3",children:[(0,x.jsx)("label",{htmlFor:"password1",className:"block text-sm font-medium leading-6 text-gray-900",children:"Set password"}),(0,x.jsx)("div",{className:"mt-2",children:(0,x.jsx)("input",{type:"text",required:!0,name:"password1",id:"password1",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,x.jsxs)("div",{className:"sm:col-span-3",children:[(0,x.jsx)("label",{htmlFor:"password2",className:"block text-sm font-medium leading-6 text-gray-900",children:"Confirm password"}),(0,x.jsx)("div",{className:"mt-2",children:(0,x.jsx)("input",{type:"text",name:"password2",required:!0,id:"password2",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]})]})]}),(0,x.jsxs)("div",{className:"flex justify-between sm:col-span-4",children:[(0,x.jsx)("button",{onClick:function(){c("..")},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Back"}),(0,x.jsx)("button",{type:"submit",disabled:O,className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:O?"Submitting...":"Save"})]})]})})]})})})}},1440:function(e,t,s){var r=s(5987),n=s(2791),a=["title","titleId"];var i=n.forwardRef((function(e,t){var s=e.title,i=e.titleId,l=(0,r.Z)(e,a);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":i},l),s?n.createElement("title",{id:i},s):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"}))}));t.Z=i}}]);
//# sourceMappingURL=9935.5645d524.chunk.js.map