"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[9606],{6988:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(2791),s={backdrop:"Modal_backdrop__5zCZI",modal:"Modal_modal__R70HS","slide-down":"Modal_slide-down__uWUnH"},o=n(4164),a=n(184);function i(e){return(0,a.jsx)("div",{className:s.backdrop})}function c(e){return(0,a.jsx)("div",{className:s.modal,children:(0,a.jsx)("div",{className:s.content,children:e.children})})}var l=document.getElementById("overlays");var u=function(e){return(0,a.jsxs)(r.Fragment,{children:[o.createPortal((0,a.jsx)(i,{}),l),o.createPortal((0,a.jsx)(c,{children:e.children}),l)]})}},9606:function(e,t,n){n.r(t),n.d(t,{leaveApproveAction:function(){return p}});var r=n(4165),s=n(5861),o=n(2791),a=n(6988),i=n(7689),c=n(1087),l=n(2620),u=n(8127),d=n(184);function p(e){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)((0,r.Z)().mark((function e(t){var n,s,o,a,i,c,d,p,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.request,s=t.params,o="https://woodvale-test-2.onrender.com/leave-records/approve/",a=(0,u.getAuthToken)(),i=s.leaveId,e.next=6,n.formData();case 6:return c=e.sent,d=s.id,p={approval_comment:c.get("approve")},e.next=11,fetch(o+i,{method:"post",headers:{Authorization:"Bearer "+a,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(p)});case 11:if(400!==(m=e.sent).status){e.next=14;break}return e.abrupt("return",m);case 14:if(404!==m.status){e.next=16;break}return e.abrupt("return",m);case 16:if(m.ok){e.next=18;break}throw(0,l.AV)({message:"Something went wrong!!"},{status:500});case 18:return e.abrupt("return",(0,l.uX)("/login/residents/".concat(d,"/leaves/").concat(i)));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(){var e=(0,i.s0)(),t=(0,i.nA)(),n="submitting"===(0,i.HJ)().state;return(0,d.jsx)(o.Fragment,{children:(0,d.jsxs)(a.Z,{children:[t&&t.errors&&(0,d.jsx)("ul",{children:Object.values(t.errors).map((function(e){return(0,d.jsx)("li",{children:e},e)}))}),t&&t.message&&(0,d.jsx)("p",{children:t.message}),(0,d.jsxs)(c.l0,{method:"post",children:[(0,d.jsx)("p",{children:"Are you sure you want to approve this leave"}),(0,d.jsxs)("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[(0,d.jsx)("button",{type:"button",onClick:function(){e("..")},className:"text-sm font-semibold leading-6 text-gray-900",children:"No"}),(0,d.jsx)("button",{type:"submit",disabled:n,className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:n?"Rejecting":"Yes"})]})]})]})})}}}]);
//# sourceMappingURL=9606.3c38ec17.chunk.js.map