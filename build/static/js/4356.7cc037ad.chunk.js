"use strict";(self.webpackChunkwoodvale=self.webpackChunkwoodvale||[]).push([[4356],{4356:function(e,r,t){t.r(r),t.d(r,{default:function(){return p},loader:function(){return j}});var s=t(4165),n=t(5861),a=t(2791),i=t(8127),c=t(7689),l=t(2620),o=t(1087),u=t(6418),d=t(7929),x=t(184);var h=function(e){var r=e.leaves;return(0,o.qd)(),(0,x.jsxs)(a.Fragment,{children:[(0,x.jsx)("div",{children:(0,x.jsxs)(d.kC,{className:"space-x-0.5",justifyContent:"start",alignItems:"center",children:[(0,x.jsx)(d.Dx,{children:"Leave Applications"}),(0,x.jsx)(d.JO,{icon:u.Z,variant:"simple",tooltip:"Shows applied leaves"})]})}),(0,x.jsxs)(d.iA,{className:"mt-6",children:[(0,x.jsx)(d.ss,{children:(0,x.jsxs)(d.SC,{children:[(0,x.jsx)(d.xs,{children:"Leave Date"}),(0,x.jsx)(d.xs,{className:"text-right",children:"Duration(Days)"}),(0,x.jsx)(d.xs,{className:"text-right",children:"Approval Status"}),(0,x.jsx)(d.xs,{className:"text-right",children:"Person responsible"})]})}),(0,x.jsx)(d.RM,{children:r.map((function(e){return(0,x.jsxs)(d.SC,{children:[(0,x.jsx)(o.rU,{to:"./".concat(e.id),children:(0,x.jsx)(d.pj,{children:e.leave_date})}),(0,x.jsx)(d.pj,{className:"text-right",children:e.duration}),(0,x.jsx)(d.pj,{className:"text-right",children:!0===e.approved?"Approved":"Not Approved"}),(0,x.jsx)(d.pj,{className:"text-right",children:e.person_responsible})]},e.id)}))})]})]})};var p=function(){var e=(0,c.V4)("leaves");return(0,x.jsx)(h,{leaves:e})};function j(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)((0,s.Z)().mark((function e(r){var t,n,a,c,o,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.request,t=r.params,n=t.id,a="/leave-records/"+n,c=(0,i.getAuthToken)(),e.next=6,fetch(a,{method:"get",headers:{Authorization:"Bearer "+c,"Access-Control-Allow-Origin":"*"}});case 6:if(404!==(o=e.sent).status){e.next=9;break}return e.abrupt("return",o);case 9:if(400!==o.status){e.next=11;break}return e.abrupt("return",o);case 11:if(o.ok){e.next=13;break}throw(0,l.AV)({message:"Wrong Url"},{status:500});case 13:return e.next=15,o.json();case 15:return u=e.sent,e.abrupt("return",u);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=4356.7cc037ad.chunk.js.map