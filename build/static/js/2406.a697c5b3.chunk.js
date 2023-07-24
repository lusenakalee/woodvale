"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[2406],{2406:function(e,r,s){s.r(r),s.d(r,{default:function(){return x},loader:function(){return h}});var t=s(4165),n=s(5861),a=s(2791),c=s(7689),i=s(2620),o=s(9439),l=s(1087),m=s(8127),d=s(184);var u=function(e){var r=e.user,s=(0,m.getAuthToken)(),i=(0,c.nA)(),u=(0,a.useState)(""),x=(0,o.Z)(u,2),h=x[0],p=x[1];return(0,a.useEffect)((function(){var e=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var n,a,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://homes-test.onrender.com/upload/".concat(r.id),{headers:{Authorization:"Bearer "+s}});case 3:if(!(n=e.sent).ok){e.next=12;break}return e.next=7,n.blob();case 7:a=e.sent,c=URL.createObjectURL(a),p(c),e.next=13;break;case 12:console.error("Error fetching image:",n.status);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error("Error fetching image:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,d.jsxs)(a.Fragment,{children:[i&&i.errors&&(0,d.jsx)("ul",{children:Object.values(i.errors).map((function(e){return(0,d.jsx)("li",{children:e},e)}))}),(0,d.jsxs)("div",{className:"flex gap-x-4",children:[h&&(0,d.jsx)("img",{className:"h-12 w-12 flex-none rounded-full bg-gray-50",src:h,alt:"Profile"}),(0,d.jsxs)("div",{className:"min-w-0 flex-auto",children:[(0,d.jsxs)("p",{className:"text-sm font-semibold leading-6 text-gray-900",children:[r.first_name,"'s Information"]}),(0,d.jsxs)("p",{className:"mt-1 truncate text-xs leading-5 text-gray-500",children:[" ","General details and Information."]})]})]}),(0,d.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,d.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Full name"}),(0,d.jsxs)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:[r.first_name," ",r.last_name]})]}),(0,d.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,d.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Username"}),(0,d.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:r.username})]}),(0,d.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,d.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"User type"}),(0,d.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:!0===r.is_admin?"Admin":"Care Giver"})]}),(0,d.jsx)("div",{className:" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:(0,d.jsx)("dd",{children:(0,d.jsx)(l.rU,{to:"./edit",children:(0,d.jsx)("button",{className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Edit"})})})})]})};var x=function(){var e=(0,c.V4)("profile");return(0,d.jsx)(a.Fragment,{children:(0,d.jsx)("main",{children:(0,d.jsx)("div",{className:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8",children:(0,d.jsx)(u,{user:e})})})})};function h(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)((0,t.Z)().mark((function e(r){var s,n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.request,"https://homes-test.onrender.com/current_user",s=(0,m.getAuthToken)(),e.next=5,fetch("https://homes-test.onrender.com/current_user",{method:"get",headers:{Authorization:"Bearer "+s,"Access-Control-Allow-Origin":"*"}});case 5:if(400!==(n=e.sent).status){e.next=8;break}return e.abrupt("return",n);case 8:if(404!==n.status){e.next=10;break}return e.abrupt("return",n);case 10:if(n.ok){e.next=12;break}throw(0,i.AV)({message:"Server Error"},{status:500});case 12:return e.next=14,n.json();case 14:return a=e.sent,console.log(a),e.abrupt("return",a);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=2406.a697c5b3.chunk.js.map