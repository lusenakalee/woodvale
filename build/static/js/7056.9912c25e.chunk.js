"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[7056],{6988:function(e,t,s){s.d(t,{Z:function(){return c}});var n=s(2791),i={backdrop:"Modal_backdrop__5zCZI",modal:"Modal_modal__R70HS","slide-down":"Modal_slide-down__uWUnH"},a=s(4164),r=s(184);function o(e){return(0,r.jsx)("div",{className:i.backdrop})}function l(e){return(0,r.jsx)("div",{className:i.modal,children:(0,r.jsx)("div",{className:i.content,children:e.children})})}var d=document.getElementById("overlays");var c=function(e){return(0,r.jsxs)(n.Fragment,{children:[a.createPortal((0,r.jsx)(o,{}),d),a.createPortal((0,r.jsx)(l,{children:e.children}),d)]})}},3862:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var n=s(6988),i=s(7689),a=s(2791),r={_origin:"https://api.emailjs.com"},o=function(e,t,s){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},l=s(3144),d=s(5671),c=(0,l.Z)((function e(t){(0,d.Z)(this,e),this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"})),m=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,i){var a=new XMLHttpRequest;a.addEventListener("load",(function(e){var t=e.target,s=new c(t);200===s.status||"OK"===s.text?n(s):i(s)})),a.addEventListener("error",(function(e){var t=e.target;i(new c(t))})),a.open("POST",r._origin+e,!0),Object.keys(s).forEach((function(e){a.setRequestHeader(e,s[e])})),a.send(t)}))},u=function(e,t,s,n){var i=n||r._userID,a=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(s);o(i,e,t);var l=new FormData(a);return l.append("lib_version","3.11.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",i),m("/api/v1.0/email/send-form",l)},g=s(184);var f=function(){var e=(0,i.s0)();(0,i.nA)(),(0,i.HJ)().state;var t=(0,a.useRef)();return(0,g.jsx)(a.Fragment,{children:(0,g.jsx)(n.Z,{children:(0,g.jsxs)("form",{ref:t,onSubmit:function(e){e.preventDefault(),u("service_xdsx337","template_h0bx0qf",t.current,"FBkV-qTMZeXtxWnTa").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Demo request form"}),(0,g.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"You will receive an email shortly after filling tin this form with access logins to your demo account."})]}),(0,g.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,g.jsxs)("div",{className:"sm:col-span-3",children:[(0,g.jsx)("label",{htmlFor:"first-name",className:"block text-sm font-medium leading-6 text-gray-900",children:"First name"}),(0,g.jsx)("div",{className:"mt-2",children:(0,g.jsx)("input",{type:"text",name:"first-name",id:"first-name",autoComplete:"given-name",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,g.jsxs)("div",{className:"sm:col-span-3",children:[(0,g.jsx)("label",{htmlFor:"last-name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Last name"}),(0,g.jsx)("div",{className:"mt-2",children:(0,g.jsx)("input",{type:"text",name:"last-name",id:"last-name",autoComplete:"family-name",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,g.jsxs)("div",{className:"sm:col-span-4",children:[(0,g.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),(0,g.jsx)("div",{className:"mt-2",children:(0,g.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,g.jsxs)("div",{className:"sm:col-span-4",children:[(0,g.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:"Company/Institution (optional*)"}),(0,g.jsx)("div",{className:"mt-2",children:(0,g.jsx)("input",{id:"company",name:"company",type:"text",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]})]}),(0,g.jsxs)("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[(0,g.jsx)("button",{type:"button",onClick:function(){e("..")},className:"text-sm font-semibold leading-6 text-gray-900",children:"Cancel"}),(0,g.jsx)("button",{type:"submit",value:"Send",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Get Access"})]})]})})})}}}]);
//# sourceMappingURL=7056.9912c25e.chunk.js.map