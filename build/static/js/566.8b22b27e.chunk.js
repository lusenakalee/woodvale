"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[566],{6988:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(2791),i={backdrop:"Modal_backdrop__5zCZI",modal:"Modal_modal__R70HS","slide-down":"Modal_slide-down__uWUnH"},r=n(4164),o=n(184);function s(e){return(0,o.jsx)("div",{className:i.backdrop})}function l(e){return(0,o.jsx)("div",{className:i.modal,children:(0,o.jsx)("div",{className:i.content,children:e.children})})}var d=document.getElementById("overlays");var c=function(e){return(0,o.jsxs)(a.Fragment,{children:[r.createPortal((0,o.jsx)(s,{}),d),r.createPortal((0,o.jsx)(l,{children:e.children}),d)]})}},566:function(e,t,n){n.r(t);var a=n(4165),i=n(5861),r=n(9439),o=n(2791),s=n(6988),l=n(7689),d=n(8127),c=n(184);t.default=function(){var e=(0,l.V4)("resident-detail").resident,t=(0,l.s0)(),n=(0,l.HJ)(),u=(0,o.useState)(""),m=(0,r.Z)(u,2),f=m[0],p=m[1],h="submitting"===n.state,x=(0,o.useState)(null),b=(0,r.Z)(x,2),v=b[0],w=b[1],g=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(i){var r,o,s;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i.preventDefault(),r=(0,d.getAuthToken)(),(o=new FormData).append("file",v),o.append("description",f),n.prev=5,n.next=8,fetch("https://woodvale-test-2.onrender.com/resident/upload/".concat(e.id),{method:"POST",headers:{Authorization:"Bearer "+r},body:o});case 8:400===(s=n.sent).status&&window.alert("Only PDF or Image attachments are allowed!!"),s.ok?window.confirm("File uploaded successfully")&&t(".."):window.alert("failed to upload"),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(5),window.alert("Network error",n.t0);case 16:case"end":return n.stop()}}),n,null,[[5,13]])})));return function(e){return n.apply(this,arguments)}}();return(0,c.jsx)(s.Z,{children:(0,c.jsx)("form",{onSubmit:g,children:(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)("label",{htmlFor:"formFileMultiple",className:"form-label",children:(0,c.jsx)("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Resident attachment"})}),(0,c.jsx)("input",{name:"file",className:"form-control mt-1 text-sm leading-6 text-gray-600 ",type:"file",id:"formFileMultiple",onChange:function(e){w(e.target.files[0])},required:!0}),(0,c.jsx)("input",{type:"text",name:"description",placeholder:"Description",required:!0,value:f,onChange:function(e){p(e.target.value)}}),(0,c.jsx)("br",{}),(0,c.jsxs)("div",{className:"space-x-4",children:[(0,c.jsx)("button",{className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",type:"submit",disabled:h,children:h?"Submitting":"Submit"}),(0,c.jsx)("button",{onClick:function(){t("..")},type:"button",className:"text-sm font-semibold leading-6 text-gray-900",children:"Cancel"})]})]})})})}}}]);
//# sourceMappingURL=566.8b22b27e.chunk.js.map