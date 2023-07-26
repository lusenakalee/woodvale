"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[3986],{3986:function(e,s,t){t.r(s),t.d(s,{action:function(){return u}});var a=t(4165),r=t(5861),n=t(9439),i=t(2791),l=t(7689),d=t(1087),o=t(2620),m=t(8127),c=t(184);function u(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)((0,a.Z)().mark((function e(s){var t,r,n,i,l,d,c,u,g;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.request,r=s.params,e.next=3,t.formData();case 3:if(n=e.sent,i=t.method,l=(0,m.getAuthToken)(),d={username:n.get("username"),password1:n.get("password1"),password2:n.get("password2"),first_name:n.get("first_name"),last_name:n.get("last_name"),is_admin:n.get("is-admin")},"POST"!==i){e.next=20;break}return e.next=10,fetch("https://homes-test.onrender.com/user",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+l},body:JSON.stringify(d)});case 10:if(409!==(c=e.sent).status){e.next=13;break}return e.abrupt("return",c);case 13:if(417!==c.status){e.next=15;break}return e.abrupt("return",c);case 15:if(c.ok){e.next=17;break}throw(0,o.AV)({message:"Could not register user"},{status:500});case 17:case 30:return e.abrupt("return",(0,o.uX)("/login/team"));case 20:return u=r.id,e.next=23,fetch("https://homes-test.onrender.com/user/"+u,{method:"PATCH",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+l},body:JSON.stringify(d)});case 23:if(409!==(g=e.sent).status){e.next=26;break}return e.abrupt("return",g);case 26:if(417!==g.status){e.next=28;break}return e.abrupt("return",g);case 28:if(g.ok){e.next=30;break}throw(0,o.AV)({message:"Could not update user"},{status:500});case 31:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.default=function(e){var s=e.method,t=e.user,a=(e.title,(0,l.s0)()),r=(0,l.HJ)(),o=(0,i.useState)(null),m=(0,n.Z)(o,2),u=m[0],g=m[1],x=(0,l.nA)(),p=function(e){g(e.target.value)},f="submitting"===r.state;return(0,c.jsx)(i.Fragment,{children:(0,c.jsx)(d.l0,{method:s,children:(0,c.jsxs)("div",{className:"space-y-12",children:[(0,c.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,c.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Kindly fill in correct details"}),x&&x.errors&&(0,c.jsx)("ul",{children:Object.values(x.errors).map((function(e){return(0,c.jsx)("li",{children:e},e)}))}),x&&x.message&&(0,c.jsx)("p",{children:x.message}),(0,c.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{htmlFor:"first-name",className:"block text-sm font-medium leading-6 text-gray-900",children:"First name"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("input",{type:"text",name:"first_name",id:"first-name",autoComplete:"given-name",required:!0,defaultValue:t?t.first_name:" ",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{htmlFor:"last_name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Last name"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("input",{type:"text",name:"last_name",id:"last_name",autoComplete:"family-name",required:!0,defaultValue:t?t.last_name:" ",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium leading-6 text-gray-900",children:"Set user name"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("input",{type:"email",name:"username",id:"username",required:!0,autoComplete:"family-name",defaultValue:t?t.username:" ",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{htmlFor:"password1",className:"block text-sm font-medium leading-6 text-gray-900",children:"Set password"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("input",{type:"text",required:!0,name:"password1",id:"password1",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{htmlFor:"password2",className:"block text-sm font-medium leading-6 text-gray-900",children:"Confirm password"}),(0,c.jsx)("div",{className:"mt-2",children:(0,c.jsx)("input",{type:"text",name:"password2",required:!0,id:"password2",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]})]}),(0,c.jsx)("div",{className:"mt-10 space-y-10 space-x-5",children:(0,c.jsxs)("fieldset",{className:"mt-10 space-y-10 space-x-5",children:[(0,c.jsx)("legend",{className:"text-sm font-semibold leading-6 text-gray-900",children:"Is the user you are adding an Admin?"}),(0,c.jsxs)("label",{children:[(0,c.jsx)("input",{type:"radio",name:"is-admin",value:"true",checked:"true"===u,onChange:p}),"True"]}),(0,c.jsxs)("label",{children:[(0,c.jsx)("input",{type:"radio",name:"is-admin",value:"false",checked:"false"===u,onChange:p}),"False"]})]})})]}),(0,c.jsxs)("div",{className:"flex justify-between sm:col-span-4",children:[(0,c.jsx)("button",{onClick:function(){a("..")},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Back"}),(0,c.jsx)("button",{type:"submit",disabled:f,className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:f?"Submitting...":"Save"})]})]})})})}}}]);
//# sourceMappingURL=3986.287395a6.chunk.js.map