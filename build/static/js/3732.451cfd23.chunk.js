"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[3732,2922],{2922:function(e,t,r){r.r(t),r.d(t,{action:function(){return p},loader:function(){return m}});var s=r(4165),n=r(5861),a=r(2791),i=r(8127),o=r(7689),u=r(1087),c=r(2620),d=r(184);function m(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)((0,s.Z)().mark((function e(t){var r,n,a,o,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.request,r=t.params,"https://woodvale-test-2.onrender.com/activity/",n=(0,i.getAuthToken)(),a=r.id,e.next=6,fetch("https://woodvale-test-2.onrender.com/activity/"+a,{method:"get",headers:{Authorization:"Bearer "+n,"Access-Control-Allow-Origin":"*"}});case 6:if(400!==(o=e.sent).status){e.next=9;break}return e.abrupt("return",o);case 9:if(404!==o.status){e.next=11;break}return e.abrupt("return",o);case 11:if(o.ok){e.next=13;break}throw(0,c.AV)({message:"Wrong Url"},{status:500});case 13:return e.next=15,o.json();case 15:return u=e.sent,e.abrupt("return",u);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)((0,s.Z)().mark((function e(t){var r,n,a,o,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.request,n=t.params,a=(0,i.getAuthToken)(),o=n.id,e.next=5,fetch("https://woodvale-test-2.onrender.com/activity/"+o,{method:r.method,headers:{Authorization:"Bearer "+a}});case 5:if(400!==(u=e.sent).status){e.next=8;break}return e.abrupt("return",u);case 8:if(u.ok){e.next=10;break}throw(0,c.AV)({message:"Could not delete activity."},{status:500});case 10:return e.abrupt("return",(0,c.uX)("/login/activity"));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){var t=e.activity,r=(0,o.V4)("root"),s=(0,u.qd)(),n=(0,o.nA)();return(0,d.jsxs)(a.Fragment,{children:[n&&n.errors&&(0,d.jsx)("ul",{children:Object.values(n.errors).map((function(e){return(0,d.jsx)("li",{children:e},e)}))}),(0,d.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,d.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Event name"}),(0,d.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.name})]}),(0,d.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,d.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Event Date"}),(0,d.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.event_date})]}),(0,d.jsxs)("div",{className:"px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0",children:[(0,d.jsx)("dt",{className:"text-sm font-medium leading-6 text-gray-900",children:"Event Description"}),(0,d.jsx)("dd",{className:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.description})]}),r&&(0,d.jsxs)("div",{className:" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[(0,d.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:(0,d.jsx)("button",{onClick:function(){window.confirm("Are you sure?")&&s(null,{method:"delete"})},className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Delete"})}),(0,d.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0",children:(0,d.jsx)(u.rU,{to:"edit",children:(0,d.jsx)("button",{type:"submit",className:"px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Edit"})})})]})]})}},3732:function(e,t,r){r.r(t),r.d(t,{loader:function(){return d}});var s=r(4165),n=r(5861),a=(r(2791),r(2922)),i=r(8127),o=r(7689),u=r(2620),c=r(184);function d(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)((0,s.Z)().mark((function e(t){var r,n,a,o,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.request,r=t.params,"https://woodvale-test-2.onrender.com/activity/",n=(0,i.getAuthToken)(),a=r.id,e.next=6,fetch("https://woodvale-test-2.onrender.com/activity/"+a,{method:"get",headers:{Authorization:"Bearer "+n,"Access-Control-Allow-Origin":"*"}});case 6:if(400!==(o=e.sent).status){e.next=9;break}return e.abrupt("return",o);case 9:if(404!==o.status){e.next=11;break}return e.abrupt("return",o);case 11:if(o.ok){e.next=13;break}throw(0,u.AV)({message:"Wrong Url"},{status:500});case 13:return e.next=15,o.json();case 15:return c=e.sent,e.abrupt("return",c);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(){var e=(0,o.V4)("activity-detail");return(0,c.jsx)(a.default,{activity:e})}}}]);
//# sourceMappingURL=3732.451cfd23.chunk.js.map