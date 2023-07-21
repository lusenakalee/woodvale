"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[8047],{8047:function(e,s,t){t.r(s),t.d(s,{default:function(){return g},loader:function(){return f}});var a=t(4165),n=t(5861),r=t(2791),l=t(9439),i=t(1087),c=t(6418),x=t(9479),d=t(7929),o=t(184);function h(e){var s=e.residentsList,t=(0,r.useState)([]),a=(0,l.Z)(t,2),n=a[0],h=a[1],u=s.filter((function(e){return n.includes(e.first_name)||0===n.length}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsxs)(d.kC,{className:"space-x-0.5",justifyContent:"start",alignItems:"center",children:[(0,o.jsx)(d.Dx,{children:"Residents"}),(0,o.jsx)(d.JO,{icon:c.Z,variant:"simple",tooltip:"Shows general employee information"})]})}),(0,o.jsxs)("div",{className:"flex space-x-2",children:[(0,o.jsx)(d.NU,{className:"max-w-full sm:max-w-xs",onValueChange:h,placeholder:"Select resident...",children:s.map((function(e){return(0,o.jsx)(d.wn,{value:e.first_name,label:"".concat(e.first_name," ").concat(e.last_name)},e.first_name)}))}),(0,o.jsxs)(d.Ph,{className:"max-w-full sm:max-w-xs",defaultValue:"all",children:[(0,o.jsx)(d.Ql,{value:"all",children:"All"}),(0,o.jsx)(d.Ql,{value:"first_name",children:"First Name"}),(0,o.jsx)(d.Ql,{value:"last_name",children:"Last Name"}),(0,o.jsx)(d.Ql,{value:"age",children:"Age"})]}),(0,o.jsxs)("button",{type:"button",className:"inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:[(0,o.jsx)(x.Z,{className:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Export"]})]}),(0,o.jsxs)(d.iA,{className:"mt-6 table w-full",children:[(0,o.jsx)(d.ss,{children:(0,o.jsxs)(d.SC,{children:[(0,o.jsx)(d.xs,{className:"w-auto",children:"First Name"}),(0,o.jsx)(d.xs,{className:"w-auto text-right",children:"Last Name"}),(0,o.jsx)(d.xs,{className:"w-auto text-right",children:"Age"}),(0,o.jsx)(d.xs,{className:"w-auto text-right",children:"Date Registered"}),(0,o.jsx)(d.xs,{className:"w-auto text-right",children:"Gender"})]})}),(0,o.jsx)(d.RM,{children:u.map((function(e){return(0,o.jsxs)(d.SC,{className:"hover:bg-white",children:[(0,o.jsx)(d.pj,{className:"w-auto hover:text-indigo-600 hover:underline",children:(0,o.jsx)(i.rU,{to:"./".concat(e.id),children:e.first_name})}),(0,o.jsx)(d.pj,{className:"w-auto text-right",children:e.last_name}),(0,o.jsx)(d.pj,{className:"w-auto text-right",children:e.age}),(0,o.jsx)(d.pj,{className:"w-auto text-right",children:e.date_registered}),(0,o.jsx)(d.pj,{className:"w-auto text-right",children:e.gender})]},e.id)}))})]})]})}var u=t(8127),m=t(7689),j=t(2620);var g=function(){var e=(0,m.V4)("all-residents");return(0,o.jsx)(r.Fragment,{children:(0,o.jsx)("main",{children:(0,o.jsx)("div",{className:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8",children:(0,o.jsx)(h,{residentsList:e})})})})};function f(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)((0,a.Z)().mark((function e(){var s,t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(0,u.getAuthToken)(),e.next=3,fetch("https://homes-test.onrender.com/residents",{method:"GET",headers:{Authorization:"Bearer "+s,"Access-Control-Allow-Origin":"*"}});case 3:if((t=e.sent).ok){e.next=8;break}throw(0,j.AV)({message:"Cant get residents"},{status:500});case 8:return e.next=10,t.json();case 10:return n=e.sent,e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=8047.fd3b7944.chunk.js.map