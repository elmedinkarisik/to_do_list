(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{53:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),a=n(20),i=n.n(a),s=(n(53),n(37)),r=n(85),d=n(88),j=n(87),l=n(86),u=(n(54),n(82)),p=n(83),b=n(84),f=n(89),m=(n(55),n(12));var h=function(t){return Object(m.jsx)(u.a,{className:"todo__list",children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(b.a,{}),Object(m.jsx)(f.a,{primary:t.text,secondary:"Deadline"})]})})},O=n(33),x=O.a.initializeApp({apiKey:"AIzaSyA40aMMwp68MG8CzHp3_Fzi6wpqcNWhMY8",authDomain:"to-do-list-3b02f.firebaseapp.com",projectId:"to-do-list-3b02f",storageBucket:"to-do-list-3b02f.appspot.com",messagingSenderId:"782955114750",appId:"1:782955114750:web:0bca022c514f93443075af"}).firestore();var g=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],o=e[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),u=i[0],p=i[1];return Object(c.useEffect)((function(){x.collection("todos").orderBy("timestamp","desc").onSnapshot((function(t){o(t.docs.map((function(t){return t.data().todo})))}))}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"To-Do List Web-App"}),Object(m.jsxs)("form",{children:[Object(m.jsxs)(r.a,{children:[Object(m.jsx)(d.a,{children:"Write a To-Do"}),Object(m.jsx)(j.a,{value:u,onChange:function(t){return p(t.target.value)}})]}),Object(m.jsx)(l.a,{disabled:!u,type:"submit",onClick:function(t){t.preventDefault(),x.collection("todos").add({todo:u,timestamp:O.a.firestore.FieldValue.serverTimestamp()}),p("")},variant:"contained",color:"primary",children:"Add Item"})]}),Object(m.jsx)("ul",{children:n.map((function(t){return Object(m.jsx)(h,{text:t})}))})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),a(t),i(t)}))};i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),v()}},[[66,1,2]]]);
//# sourceMappingURL=main.459ea7cd.chunk.js.map