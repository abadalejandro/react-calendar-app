(this["webpackJsonpreact-calendar-app"]=this["webpackJsonpreact-calendar-app"]||[]).push([[0],{123:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n(8),o=n.n(c),s=n(29),i=n(61),l=n(62),u=n(5),d="[ui] Open Modal",j="[ui] Close Modal",b="[event] Logout Event",m="[event] Set Active Event",p="[event] Add New Event",v="[event] Clear Active Event",f="[event] Event updated",O="[event] Event deleted",h="[event] Event Loaded",g="[auth] Finish checking login state",x="[auth] Login",y="[auth] Logout",E={modalOpen:!1},w=n(66),N={events:[],activeEvent:null},k={checking:!0,uid:null,name:null},S=[i.a],C=Object(l.composeWithDevTools)(s.applyMiddleware.apply(void 0,S)),P=Object(s.combineReducers)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case j:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},auth:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case x:return Object(u.a)(Object(u.a)(Object(u.a)({},t),null===(e=n.payload)||void 0===e?void 0:e.user),{},{checking:!1});case g:return Object(u.a)(Object(u.a)({},t),{},{checking:!1});case y:return{checking:!1,uid:null,name:null};default:return t}},calendar:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case m:return Object(u.a)(Object(u.a)({},n),{},{activeEvent:null===(e=a.payload)||void 0===e?void 0:e.event});case p:return Object(u.a)(Object(u.a)({},n),{},{events:[null===(t=a.payload)||void 0===t?void 0:t.event].concat(Object(w.a)(n.events))});case v:return Object(u.a)(Object(u.a)({},n),{},{activeEvent:null});case f:return Object(u.a)(Object(u.a)({},n),{},{events:n.events.map((function(e){var t,n;return e.id===(null===(t=a.payload)||void 0===t?void 0:t.event.id)?null===(n=a.payload)||void 0===n?void 0:n.event:e}))});case O:return Object(u.a)(Object(u.a)({},n),{},{events:n.events.filter((function(e){var t;return e.id!==(null===(t=n.activeEvent)||void 0===t?void 0:t.id)})),activeEvent:null});case h:return Object(u.a)(Object(u.a)({},n),{},{events:a.payload});case b:return Object(u.a)({},N);default:return n}}}),T=Object(s.createStore)(P,C),D=n(9),A=n(33),R=n(10),M=n(15),I=n(24),L=function(e){var t=Object(r.useState)(e),n=Object(M.a)(t,2),a=n[0],c=n[1];return[a,function(e){var t=e.target,n=t.name,r=t.value;c(Object(u.a)(Object(u.a)({},a),{},Object(I.a)({},n,r)))},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)}]},G=n(12),q=n.n(G),F=n(18),U="https://backend-reactjs-calendar.herokuapp.com/api";!function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE"}(a||(a={}));var H=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.GET,r="".concat(U,"/").concat(e);return n===a.GET?fetch(r):fetch(r,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.GET,r="".concat(U,"/").concat(e),c=localStorage.getItem("token")||"";return n===a.GET?fetch(r,{method:n,headers:{"x-token":c}}):fetch(r,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},V=n(19),B=n.n(V),W=n(17),_=n.n(W),z=function(e){return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{start:_()(e.start).toDate(),end:_()(e.end).toDate()})}))},K=function(e){return function(){var t=Object(F.a)(q.a.mark((function t(n,r){var c,o,s,i,l;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth,o=c.uid,s=c.name,t.prev=1,t.next=4,J("events",e,a.POST);case 4:return i=t.sent,t.next=7,i.json();case 7:(l=t.sent).ok&&(e.id=l.event.id,e.user={_id:o,name:s},n(Q(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()},Q=function(e){return{type:p,payload:{event:e}}},X=function(){return{type:v}},Y=function(e){return function(){var t=Object(F.a)(q.a.mark((function t(n){var r,c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J("events/".concat(e.id),e,a.PUT);case 3:return r=t.sent,t.next=6,r.json();case 6:(c=t.sent).ok?n(Z(e)):B.a.fire("Error",c.msg,"error"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},Z=function(e){return{type:f,payload:{event:e}}},$=function(){return{type:O}},ee=function(e){return{type:h,payload:e}},te=function(){return{type:g}},ne=function(e){return{type:x,payload:{user:e}}},ae=function(){return function(e){localStorage.clear(),e({type:b}),e(re())}},re=function(){return{type:y}},ce=(n(88),n(2)),oe={loginEmail:"ale@gmail.com",loginPassword:"123456"},se={registerName:"",registerEmail:"",registerPassword:"",registerRepeatPassword:""},ie=function(){var e=Object(D.b)(),t=L(oe),n=Object(M.a)(t,2),r=n[0],c=n[1],o=L(se),s=Object(M.a)(o,2),i=s[0],l=s[1];return Object(ce.jsx)("div",{className:"container login-container",children:Object(ce.jsxs)("div",{className:"row",children:[Object(ce.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ce.jsx)("h3",{children:"Login"}),Object(ce.jsxs)("form",{onSubmit:function(t){var n,c;t.preventDefault(),e((n=r.loginEmail,c=r.loginPassword,function(){var e=Object(F.a)(q.a.mark((function e(t){var r,o;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth/loginUser",{email:n,password:c},a.POST);case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime().toString()),t(ne({uid:o.uid,name:o.name}))):B.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ce.jsx)("div",{className:"form-group",children:Object(ce.jsx)("input",{type:"text",autoComplete:"false",className:"form-control",placeholder:"Email",name:"loginEmail",value:r.loginEmail,onChange:c})}),Object(ce.jsx)("div",{className:"form-group",children:Object(ce.jsx)("input",{type:"password",autoComplete:"false",className:"form-control",placeholder:"Password",name:"loginPassword",value:r.loginPassword,onChange:c})}),Object(ce.jsx)("div",{className:"form-group",children:Object(ce.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(ce.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ce.jsx)("h3",{children:"Register"}),Object(ce.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),i.registerPassword!==i.registerRepeatPassword)return B.a.fire("Error","Passwords must be equals","error");var n,r,c;e((n=i.registerEmail,r=i.registerPassword,c=i.registerName,function(){var e=Object(F.a)(q.a.mark((function e(t){var o,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth/newUser",{email:n,password:r,name:c},a.POST);case 2:return o=e.sent,e.next=5,o.json();case 5:(s=e.sent).ok?(localStorage.setItem("token",s.token),localStorage.setItem("token-init-date",(new Date).getTime().toString()),t(ne({uid:s.uid,name:s.name}))):B.a.fire("Error",s.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ce.jsx)("div",{className:"form-group",children:Object(ce.jsx)("input",{type:"text",autoComplete:"false",className:"form-control",placeholder:"Name",onChange:l,value:i.registerName,name:"registerName"})}),Object(ce.jsx)("div",{className:"form-group",children:Object(ce.jsx)("input",{type:"email",autoComplete:"false",className:"form-control",placeholder:"Email",onChange:l,value:i.registerEmail,name:"registerEmail"})}),Object(ce.jsx)("div",{className:"form-group",children:Object(ce.jsx)("input",{type:"password",autoComplete:"false",className:"form-control",placeholder:"Password",onChange:l,value:i.registerPassword,name:"registerPassword"})}),Object(ce.jsx)("div",{className:"form-group",children:Object(ce.jsx)("input",{type:"password",autoComplete:"false",className:"form-control",placeholder:"Repeat password",onChange:l,value:i.registerRepeatPassword,name:"registerRepeatPassword"})}),Object(ce.jsx)("div",{className:"form-group",children:Object(ce.jsx)("input",{type:"submit",className:"btnSubmit",value:"Create account"})})]})]})]})})},le=n(51),ue=(n(90),function(){var e=Object(D.c)((function(e){return e.auth})).name,t=Object(D.b)();return Object(ce.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ce.jsx)("span",{className:"navbar-brand",children:e}),Object(ce.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(ae())},children:[Object(ce.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(ce.jsx)("span",{children:" Exit"})]})]})}),de={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},je=function(e){var t=e.event,n=t.title,a=t.user;return Object(ce.jsxs)("div",{children:[Object(ce.jsx)("strong",{children:n}),Object(ce.jsxs)("span",{children:[" - ",a.name]})]})},be=(n(91),n(46)),me=n.n(be),pe=n(48),ve=n.n(pe),fe=function(){return{type:d}},Oe={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ve.a.setAppElement("#root");var he=_()().minutes(0).seconds(0).add(1,"hours"),ge=he.clone().add(1,"hours"),xe={id:null,title:"",notes:"",start:he.toDate(),end:ge.toDate()},ye=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.ui})).modalOpen,n=Object(D.c)((function(e){return e.calendar})).activeEvent,a=Object(r.useState)(he.toDate()),c=Object(M.a)(a,2),o=c[0],s=c[1],i=Object(r.useState)(ge.toDate()),l=Object(M.a)(i,2),d=l[0],b=l[1],m=Object(r.useState)(!0),p=Object(M.a)(m,2),v=p[0],f=p[1],O=Object(r.useState)(xe),h=Object(M.a)(O,2),g=h[0],x=h[1],y=g.notes,E=g.title,w=g.start,N=g.end;Object(r.useEffect)((function(){x(n||xe)}),[n,x]);var k=function(e){var t=e.target;x(Object(u.a)(Object(u.a)({},g),{},Object(I.a)({},t.name,t.value)))},S=function(){e({type:j}),x(xe),e(X())},C=function(){var t=Object(F.a)(q.a.mark((function t(a){var r,c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),r=_()(o),c=_()(d),!r.isSameOrAfter(c)){t.next=7;break}return t.next=6,B.a.fire("Error","End date must be grater than Start date","error");case 6:return t.abrupt("return",t.sent);case 7:if(!(E.trim().length<2)){t.next=9;break}return t.abrupt("return",f(!1));case 9:e(n?Y(g):K(g)),f(!0),S();case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(ce.jsxs)(ve.a,{isOpen:t,onRequestClose:S,closeTimeoutMS:200,style:Oe,className:"modal",overlayClassName:"modal-background",children:[Object(ce.jsxs)("h1",{children:[" ",n?"Edit event":"New event"]}),Object(ce.jsx)("hr",{}),Object(ce.jsxs)("form",{className:"container",onSubmit:C,children:[Object(ce.jsxs)("div",{className:"form-group",children:[Object(ce.jsx)("label",{children:"Start date and time"}),Object(ce.jsx)(me.a,{onChange:function(e){s(e),x(Object(u.a)(Object(u.a)({},g),{},{start:e}))},value:w,className:"form-control",format:"y-MM-dd hh:mm a",amPmArialLabel:"Select AM/PM"})]}),Object(ce.jsxs)("div",{className:"form-group",children:[Object(ce.jsx)("label",{children:"End date and time"}),Object(ce.jsx)(me.a,{onChange:function(e){b(e),x(Object(u.a)(Object(u.a)({},g),{},{end:e}))},value:N,minDate:w,className:"form-control",format:"y-MM-dd hh:mm a",amPmArialLabel:"Select AM/PM"})]}),Object(ce.jsx)("hr",{}),Object(ce.jsxs)("div",{className:"form-group",children:[Object(ce.jsx)("label",{children:"Title and Notes"}),Object(ce.jsx)("input",{type:"text",className:"form-control ".concat(!v&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:E,onChange:k,autoComplete:"off"}),Object(ce.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(ce.jsxs)("div",{className:"form-group",children:[Object(ce.jsx)("textarea",{className:"form-control",placeholder:"Notas",name:"notes",value:y,onChange:k}),Object(ce.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(ce.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ce.jsx)("i",{className:"far fa-save"}),Object(ce.jsx)("span",{children:" Guardar"})]})]})]})},Ee=function(){var e=Object(D.b)();return Object(ce.jsx)("button",{onClick:function(t){e(X()),e(fe())},className:"btn btn-primary fab",children:Object(ce.jsx)("i",{className:"fas fa-plus"})})},we=function(){var e=Object(D.b)();return Object(ce.jsxs)("button",{onClick:function(t){e(function(){var e=Object(F.a)(q.a.mark((function e(t,n){var r,c,o;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().calendar.activeEvent.id,e.prev=1,e.next=4,J("events/".concat(r),{},a.DELETE);case 4:return c=e.sent,e.next=7,c.json();case 7:(o=e.sent).ok?t($()):B.a.fire("Error",o.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},className:"btn btn-danger fab-danger",children:[Object(ce.jsx)("i",{className:"fas fa-trash"}),Object(ce.jsx)("span",{children:" Delete Event"})]})};_.a.locale("es");var Ne=Object(le.b)(_.a),ke=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.calendar})),n=t.events,a=t.activeEvent,c=Object(D.c)((function(e){return e.auth})).uid,o=Object(r.useState)(localStorage.getItem("lastView")||"month"),s=Object(M.a)(o,2),i=s[0],l=s[1];Object(r.useEffect)((function(){e(function(){var e=Object(F.a)(q.a.mark((function e(t){var n,a,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=z(a.events),t(ee(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(ce.jsxs)("div",{className:"calendar-screen",children:[Object(ce.jsx)(ue,{}),Object(ce.jsx)(le.a,{localizer:Ne,events:n,startAccessor:"start",endAccessor:"end",popup:!0,view:i,popupOffset:30,onSelectSlot:function(t){e(X())},selectable:!0,eventPropGetter:function(e,t,n,a){var r;return{className:"ale",style:{backgroundColor:c===(null===(r=e.user)||void 0===r?void 0:r._id)?"#367cf7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},messages:de,onDoubleClickEvent:function(t){e(fe())},onSelectEvent:function(t){e({type:m,payload:{event:t}})},onView:function(e){l(e),localStorage.setItem("lastView",e)},components:{event:je}}),Object(ce.jsx)(Ee,{}),a&&Object(ce.jsx)(we,{}),Object(ce.jsx)(ye,{})]})},Se=n(36),Ce=n(1),Pe=n.n(Ce),Te=function(e){var t=e.isAuthenticated,n=e.component,a=Object(Se.a)(e,["isAuthenticated","component"]);return Object(ce.jsx)(R.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(ce.jsx)(R.a,{to:"/"}):Object(ce.jsx)(n,Object(u.a)({},e))}}))};Te.prototype={isAuthenticated:Pe.a.bool.isRequired,component:Pe.a.func.isRequired};var De=function(e){var t=e.isAuthenticated,n=e.component,a=Object(Se.a)(e,["isAuthenticated","component"]);return Object(ce.jsx)(R.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(ce.jsx)(n,Object(u.a)({},e)):Object(ce.jsx)(R.a,{to:"/login"})}}))};De.prototype={isAuthenticated:Pe.a.bool.isRequired,component:Pe.a.func.isRequired};var Ae=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.auth})),n=t.checking,a=t.uid;return Object(r.useEffect)((function(){e(function(){var e=Object(F.a)(q.a.mark((function e(t){var n,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("auth/renewToken");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime().toString()),t(ne({uid:a.uid,name:a.name}))):t(te());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(ce.jsx)("h5",{children:"Wait..."}):Object(ce.jsx)(A.a,{children:Object(ce.jsx)("div",{children:Object(ce.jsxs)(R.d,{children:[Object(ce.jsx)(Te,{exact:!0,path:"/login",component:ie,isAuthenticated:!!a}),Object(ce.jsx)(De,{exact:!0,path:"/",component:ke,isAuthenticated:!!a}),Object(ce.jsx)(R.a,{to:"/"})]})})})},Re=function(){return Object(ce.jsx)(D.a,{store:T,children:Object(ce.jsx)(Ae,{})})},Me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};n(123);o.a.render(Object(ce.jsx)(Re,{}),document.getElementById("root")),Me()},88:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.6c63347a.chunk.js.map