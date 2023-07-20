"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[4862],{4862:function(e,s,r){r.r(s),r.d(s,{default:function(){return j},loader:function(){return g}});var t=r(4165),n=r(5861),a=r(2791),i=r(7689),l=r(2620),c=r(9439),h=r(1087),u=r(6418),x=r(9479),m=r(7929),o=r(184);var d=function(e){var s=e.users,r=(0,a.useState)([]),t=(0,c.Z)(r,2),n=t[0],i=t[1],l=s.filter((function(e){return n.includes(e.first_name)||0===n.length}));return(0,o.jsxs)(a.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsxs)(m.kC,{className:"space-x-0.5",justifyContent:"start",alignItems:"center",children:[(0,o.jsx)(m.Dx,{children:"Staff"}),(0,o.jsx)(m.JO,{icon:u.Z,variant:"simple",tooltip:"Shows general staff information"}),(0,o.jsx)(m.Dx,{})]})}),(0,o.jsxs)("div",{className:"flex space-x-2",children:[(0,o.jsx)(m.NU,{className:"max-w-full sm:max-w-xs",onValueChange:i,placeholder:"Search by name...",children:s.map((function(e){return(0,o.jsx)(m.wn,{value:e.first_name,children:e.first_name},e.first_name)}))}),(0,o.jsxs)(m.Ph,{className:"max-w-full sm:max-w-xs",defaultValue:"all",children:[(0,o.jsx)(m.Ql,{value:"all",children:"All"}),(0,o.jsx)(m.Ql,{value:"first_name",children:"First Name"}),(0,o.jsx)(m.Ql,{value:"last_name",children:"Last Name"}),(0,o.jsx)(m.Ql,{value:"username",children:"Username"})]}),(0,o.jsxs)("button",{type:"button",className:"inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,o.jsx)(x.Z,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Export"]})]}),(0,o.jsxs)(m.iA,{className:"mt-6",children:[(0,o.jsx)(m.ss,{children:(0,o.jsxs)(m.SC,{children:[(0,o.jsx)(m.xs,{children:"First Name"}),(0,o.jsx)(m.xs,{className:"text-right",children:"Last Name"}),(0,o.jsx)(m.xs,{className:"text-right",children:"Username"}),(0,o.jsx)(m.xs,{className:"text-right",children:"User Type"})]})}),(0,o.jsx)(m.RM,{children:l.map((function(e){return(0,o.jsxs)(m.SC,{className:"hover:bg-white",children:[(0,o.jsx)(m.pj,{className:"w-auto hover:text-indigo-600 hover:underline",children:(0,o.jsx)(h.rU,{to:"./".concat(e.id),children:e.first_name})}),(0,o.jsx)(m.pj,{className:"text-right",children:e.last_name}),(0,o.jsx)(m.pj,{className:"text-right",children:e.username}),(0,o.jsx)(m.pj,{className:"text-right",children:!0===e.is_admin?"Admin":"User"})]},e.id)}))})]})]})},f=r(8127);var j=function(){var e=(0,i.V4)("users");return(0,o.jsx)(a.Fragment,{children:(0,o.jsx)(d,{users:e})})};function g(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)((0,t.Z)().mark((function e(){var s,r,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(0,f.getAuthToken)(),e.next=3,fetch("https://homes-test.onrender.com/user",{method:"GET",headers:{Authorization:"Bearer "+s,"Access-Control-Allow-Origin":"*"}});case 3:if(400!==(r=e.sent).status){e.next=6;break}throw(0,l.AV)({message:"Only the admin can view users"},{status:400});case 6:if(r.ok){e.next=10;break}throw(0,l.AV)({message:"Cant get users"},{status:500});case 10:return e.next=12,r.json();case 12:return n=e.sent,e.abrupt("return",n);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=4862.c435fd3f.chunk.js.map