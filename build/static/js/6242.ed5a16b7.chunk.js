"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[6242,9935],{9935:function(e,t,s){s.r(t),s.d(t,{action:function(){return p}});var r,n=s(4165),a=s(5861),i=s(9439),o=s(2791),l=s(7689),d=s(1087),c=s(2620),m=s(8127),u=s(1440),g=s(2644),f=s(9085),x=(s(5462),s(184));function p(e){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,n.Z)().mark((function e(t){var s,a,i,o,l,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.request,t.params,e.next=3,s.formData();case 3:return a=e.sent,i=s.method,o=(0,m.getAuthToken)(),l={username:a.get("username"),password1:a.get("password1"),password2:a.get("password2"),first_name:a.get("first_name"),last_name:a.get("last_name")},e.next=9,fetch("https://woodvale-test-2.onrender.com/user/"+r,{method:i,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+o},body:JSON.stringify(l)});case 9:if(400!==(d=e.sent).status){e.next=12;break}return e.abrupt("return",d);case 12:if(409!==d.status){e.next=14;break}return e.abrupt("return",d);case 14:if(417!==d.status){e.next=16;break}return e.abrupt("return",d);case 16:if(d.ok){e.next=18;break}throw(0,c.AV)({message:"Could edit user"},{status:500});case 18:return e.abrupt("return",(0,c.uX)("/login/profile"));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){var t=e.method,s=e.user,c=(e.title,(0,l.s0)()),p=(0,l.HJ)(),h=(0,o.useState)(null),b=(0,i.Z)(h,2),y=b[0],w=b[1],v=(0,l.nA)(),j=(0,o.useState)(""),N=(0,i.Z)(j,2),k=N[0],C=N[1],Z=(0,m.getAuthToken)();v&&v.errors&&Object.values(v.errors).forEach((function(e){f.Am.error(e)}));var A=(0,o.useState)(!1),S=(0,i.Z)(A,2),F=S[0],_=S[1],O=function(){_(!1)};r=s.id;var E="submitting"===p.state,q=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(),r=(0,m.getAuthToken)(),(a=new FormData).append("file",y),e.prev=5,e.next=8,fetch("https://woodvale-test-2.onrender.com/".concat(s.id,"/upload"),{method:"POST",headers:{Authorization:"Bearer "+r},body:a});case 8:400===(i=e.sent).status&&window.alert("Only Image attachment are allowed!!"),i.ok?window.confirm("File uploaded successfully"):window.alert("failed to upload"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),window.alert("Network error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://woodvale-test-2.onrender.com/upload/".concat(s.id),{headers:{Authorization:"Bearer "+Z}});case 3:if(!(t=e.sent).ok){e.next=12;break}return e.next=7,t.blob();case 7:r=e.sent,a=URL.createObjectURL(r),C(a),e.next=13;break;case 12:console.error("Error fetching image:",t.status);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error("Error fetching image:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[s]),(0,x.jsx)(o.Fragment,{children:(0,x.jsxs)("main",{children:[(0,x.jsx)(f.Ix,{}),(0,x.jsxs)("div",{className:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8",children:[(0,x.jsx)("div",{children:(0,x.jsxs)("button",{type:"button",onClick:function(){_(!0)},className:"inline-flex opacity-80 items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,x.jsx)(u.Z,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Upload Picture"]})}),F&&(0,x.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[(0,x.jsx)("div",{className:"fixed inset-0 bg-black opacity-50"}),(0,x.jsx)("div",{className:"relative z-10 bg-white rounded-md w-96",children:(0,x.jsxs)("form",{onSubmit:q,children:[(0,x.jsxs)("div",{className:"p-6",children:[(0,x.jsx)("h1",{className:"text-lg font-bold",children:"Profile Pic Upload"}),(0,x.jsxs)("div",{className:"mt-4",children:[(0,x.jsx)("label",{htmlFor:"formFileSm",className:"block font-semibold",children:"Upload Your Image"}),(0,x.jsx)("input",{className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm",id:"formFileSm",type:"file",name:"file",onChange:function(e){w(e.target.files[0])}})]})]}),(0,x.jsxs)("div",{className:"px-6 py-4 bg-gray-100 flex items-center justify-end gap-x-4",children:[(0,x.jsx)("button",{type:"button",onClick:O,className:"text-sm font-semibold text-gray-900",children:"Close"}),(0,x.jsx)("button",{type:"submit",disabled:E,className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600",children:E?"Uploading...":"Save"})]})]})})]}),(0,x.jsx)(d.l0,{method:t,children:(0,x.jsxs)("div",{className:"space-y-12",children:[(0,x.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,x.jsxs)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:["Kindly fill in correct details",v&&v.errors&&(0,x.jsx)("ul",{children:Object.values(v.errors).map((function(e){return(0,x.jsx)("li",{children:e},e)}))}),v&&v.message&&(0,x.jsx)("p",{children:v.message})]}),k&&(0,x.jsx)("img",{src:k,alt:g,className:"h-24 rounded-lg"}),(0,x.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,x.jsxs)("div",{className:"sm:col-span-3",children:[(0,x.jsx)("label",{htmlFor:"first-name",className:"block text-sm font-medium leading-6 text-gray-900",children:"First name"}),(0,x.jsx)("div",{className:"mt-2",children:(0,x.jsx)("input",{type:"text",name:"first_name",id:"first-name",autoComplete:"given-name",required:!0,defaultValue:s?s.first_name:" ",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,x.jsxs)("div",{className:"sm:col-span-3",children:[(0,x.jsx)("label",{htmlFor:"last_name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Last name"}),(0,x.jsx)("div",{className:"mt-2",children:(0,x.jsx)("input",{type:"text",name:"last_name",id:"last_name",autoComplete:"family-name",required:!0,defaultValue:s?s.last_name:" ",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,x.jsxs)("div",{className:"sm:col-span-3",children:[(0,x.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium leading-6 text-gray-900",children:"Set user name"}),(0,x.jsx)("div",{className:"mt-2",children:(0,x.jsx)("input",{type:"email",name:"username",id:"username",required:!0,autoComplete:"family-name",defaultValue:s?s.username:" ",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,x.jsxs)("div",{className:"sm:col-span-3",children:[(0,x.jsx)("label",{htmlFor:"password1",className:"block text-sm font-medium leading-6 text-gray-900",children:"Set password"}),(0,x.jsx)("div",{className:"mt-2",children:(0,x.jsx)("input",{type:"text",required:!0,name:"password1",id:"password1",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,x.jsxs)("div",{className:"sm:col-span-3",children:[(0,x.jsx)("label",{htmlFor:"password2",className:"block text-sm font-medium leading-6 text-gray-900",children:"Confirm password"}),(0,x.jsx)("div",{className:"mt-2",children:(0,x.jsx)("input",{type:"text",name:"password2",required:!0,id:"password2",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]})]})]}),v&&v.message&&(0,x.jsx)("p",{children:v.message}),(0,x.jsxs)("div",{className:"flex justify-between sm:col-span-4",children:[(0,x.jsx)("button",{onClick:function(){c("..")},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Back"}),(0,x.jsx)("button",{type:"submit",disabled:E,className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:E?"Submitting...":"Save"})]})]})})]})]})})}},6242:function(e,t,s){s.r(t);s(2791);var r=s(9935),n=s(7689),a=s(184);t.default=function(){var e=(0,n.V4)("profile");return(0,a.jsx)(r.default,{user:e,method:"patch"})}},5462:function(){},1440:function(e,t,s){var r=s(5987),n=s(2791),a=["title","titleId"];var i=n.forwardRef((function(e,t){var s=e.title,i=e.titleId,o=(0,r.Z)(e,a);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":i},o),s?n.createElement("title",{id:i},s):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"}))}));t.Z=i}}]);
//# sourceMappingURL=6242.ed5a16b7.chunk.js.map