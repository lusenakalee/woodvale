"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[566],{6988:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(2791),i={backdrop:"Modal_backdrop__5zCZI",modal:"Modal_modal__R70HS","slide-down":"Modal_slide-down__uWUnH"},s=n(4164),r=n(184);function o(e){return(0,r.jsx)("div",{className:i.backdrop})}function l(e){return(0,r.jsx)("div",{className:i.modal,children:(0,r.jsx)("div",{className:i.content,children:e.children})})}var d=document.getElementById("overlays");var c=function(e){return(0,r.jsxs)(a.Fragment,{children:[s.createPortal((0,r.jsx)(o,{}),d),s.createPortal((0,r.jsx)(l,{children:e.children}),d)]})}},566:function(e,t,n){n.r(t);var a=n(4165),i=n(5861),s=n(9439),r=n(2791),o=n(6988),l=n(7689),d=n(8127),c=n(184);t.default=function(){var e=(0,l.V4)("resident-detail").resident,t=(0,l.s0)(),n=(0,l.HJ)(),u=(0,r.useState)(""),m=(0,s.Z)(u,2),f=m[0],p=m[1],h="submitting"===n.state,x=(0,r.useState)(null),b=(0,s.Z)(x,2),v=b[0],g=b[1],w=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(i){var s,r,o,l;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i.preventDefault(),s=(0,d.getAuthToken)(),(r=new FormData).append("file",v),r.append("description",f),n.prev=5,n.next=8,fetch("https://homes-test.onrender.com/resident/upload/".concat(e.id),{method:"POST",headers:{Authorization:"Bearer "+s},body:r});case 8:if(!(o=n.sent).ok){n.next=14;break}window.confirm("File uploaded successfully")&&t(".."),n.next=22;break;case 14:if(400!==o.status){n.next=21;break}return n.next=17,o.json();case 17:l=n.sent,window.alert(l.message),n.next=22;break;case 21:window.alert("Failed to upload");case 22:n.next=27;break;case 24:n.prev=24,n.t0=n.catch(5),window.alert("Network error",n.t0);case 27:case"end":return n.stop()}}),n,null,[[5,24]])})));return function(e){return n.apply(this,arguments)}}();return(0,c.jsx)(o.Z,{children:(0,c.jsx)("form",{onSubmit:w,children:(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)("label",{htmlFor:"formFileMultiple",className:"form-label",children:(0,c.jsx)("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Resident attachment"})}),(0,c.jsx)("input",{name:"file",className:"form-control mt-1 text-sm leading-6 text-gray-600 ",type:"file",id:"formFileMultiple",onChange:function(e){g(e.target.files[0])},required:!0}),(0,c.jsx)("input",{type:"text",name:"description",placeholder:"Description",required:!0,onChange:function(e){p(e.target.value)}}),(0,c.jsx)("br",{}),(0,c.jsxs)("div",{className:"space-x-4",children:[(0,c.jsx)("button",{className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",type:"submit",disabled:h,children:h?"Submitting":"Submit"}),(0,c.jsx)("button",{onClick:function(){t("..")},type:"button",className:"text-sm font-semibold leading-6 text-gray-900",children:"Cancel"})]})]})})})}}}]);
//# sourceMappingURL=566.2e31bb08.chunk.js.map