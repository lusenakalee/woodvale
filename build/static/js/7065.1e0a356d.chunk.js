"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[7065],{6988:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(2791),s={backdrop:"Modal_backdrop__b7dRO",modal:"Modal_modal__wqjFJ","slide-down":"Modal_slide-down__+S91a"},o=n(4164),a=n(184);function i(e){return(0,a.jsx)("div",{className:s.backdrop})}function c(e){return(0,a.jsx)("div",{className:s.modal,children:(0,a.jsx)("div",{className:s.content,children:e.children})})}var l=document.getElementById("overlays");var u=function(e){return(0,a.jsxs)(r.Fragment,{children:[o.createPortal((0,a.jsx)(i,{}),l),o.createPortal((0,a.jsx)(c,{children:e.children}),l)]})}},7065:function(e,t,n){n.r(t),n.d(t,{action:function(){return h}});var r=n(4165),s=n(5861),o=n(2791),a=n(7689),i=n(1087),c=n(2620),l=n(6988),u=n(8127),d=n(184);function h(e){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)((0,r.Z)().mark((function e(t){var n,s,o,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.request,n=t.params,"https://homes-test.onrender.com/leave-records/cancel/",s=(0,u.getAuthToken)(),o=n.leaveId,a=n.id,e.next=7,fetch("https://homes-test.onrender.com/leave-records/cancel/"+o,{method:"post",headers:{Authorization:"Bearer "+s,"Access-Control-Allow-Origin":"*"}});case 7:if(400!==(i=e.sent).status){e.next=10;break}return e.abrupt("return",i);case 10:if(404!==i.status){e.next=12;break}return e.abrupt("return",i);case 12:if(i.ok){e.next=14;break}throw(0,c.AV)({message:"Something went wrong!!"},{status:500});case 14:return e.abrupt("return",(0,c.uX)("/login/residents/".concat(a,"/leaves/").concat(o)));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(){var e=(0,a.s0)(),t=(0,a.nA)(),n="submitting"===(0,a.HJ)().state;return(0,d.jsx)(o.Fragment,{children:(0,d.jsxs)(l.Z,{children:[t&&t.errors&&(0,d.jsx)("ul",{children:Object.values(t.errors).map((function(e){return(0,d.jsx)("li",{children:e},e)}))}),t&&t.message&&(0,d.jsx)("p",{children:t.message}),(0,d.jsxs)(i.l0,{method:"post",children:[(0,d.jsx)("p",{children:"Are you sure you want to cancel this resident's return?"}),(0,d.jsxs)("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[(0,d.jsx)("button",{type:"button",onClick:function(){e("..")},className:"text-sm font-semibold leading-6 text-gray-900",children:"No"}),(0,d.jsx)("button",{type:"submit",disabled:n,className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:n?"Rejecting":"Yes"})]})]})]})})}}}]);
//# sourceMappingURL=7065.1e0a356d.chunk.js.map