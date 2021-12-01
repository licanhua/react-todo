(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{39:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(21),a=n.n(r),s=(n(39),n(48)),i=n(49),l=n(31),u=n(47),d=n(53),j=n(10),b=function(e){return e.todo},O=function(e){return e.filter},f=n(17),p=Object(f.b)({name:"filter",initialState:{showOption:"all",filter:""},reducers:{setShowOption:function(e,t){var n=t.payload;e.showOption=n},setFilter:function(e,t){var n=t.payload;e.filter=n}}}),h=p.actions,x=h.setShowOption,m=h.setFilter,v=p.reducer,g=n(1),w=function(){var e=Object(j.c)(O).showOption,t=Object(j.b)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(u.a,{children:[{name:"all",value:"all"},{name:"active",value:"active"},{name:"completed",value:"completed"}].map((function(n,o){return Object(g.jsx)(d.a,{id:"radio-".concat(o),type:"radio",variant:"outline-success",name:"radio",value:n.value,checked:e===n.value,onChange:function(e){return t(x(e.currentTarget.value))},children:n.name},o)}))})})},T=n(51),D=function(){var e=Object(j.c)(O).filter,t=Object(j.b)();return Object(g.jsx)(s.a,{className:"mt-2 mb-2",children:Object(g.jsxs)(i.a,{className:"align-items-end",children:[Object(g.jsx)(l.a,{sm:1}),Object(g.jsx)(l.a,{children:Object(g.jsx)(T.a.Control,{value:e,type:"text",placeholder:"type filter string here",onChange:function(e){t(m(e.target.value))}})}),Object(g.jsx)(l.a,{children:Object(g.jsx)(w,{})})]})})},y=n(15),S=n(3),k={todos:[]},C=Object(f.b)({name:"todos",initialState:k,reducers:{addToDo:function(e,t){var n=t.payload,o=0===e.todos.length?1:e.todos[e.todos.length-1].id+1;e.todos.push({id:o,todo:n,completed:!1})},deleteToDo:function(e,t){var n=t.payload;e.todos=e.todos.filter((function(e){return e.id!==n}))},toggleToDo:function(e,t){var n=t.payload;e.todos=e.todos.map((function(e){return e.id===n?Object(S.a)(Object(S.a)({},e),{},{completed:!e.completed}):e}))},loadToDos:function(e){return k},loadToDosSuccess:function(e,t){var n=t.payload;e.todos=n},loadToDosError:function(e){return k},saveToDos:function(e){}}}),N=C.actions,F=N.addToDo,E=N.deleteToDo,I=N.toggleToDo,J=N.loadToDos,P=N.loadToDosError,A=N.loadToDosSuccess,L=N.saveToDos,B=C.reducer,z=function(){var e=Object(o.useState)(""),t=Object(y.a)(e,2),n=t[0],c=t[1],r=Object(j.b)();return Object(g.jsx)(s.a,{className:"mt-2 mb-2",children:Object(g.jsx)(T.a.Control,{size:"lg",type:"text",placeholder:"Add todo here",value:n,onChange:function(e){c(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(""!==n&&r(F(n)),c(""))}})})},K=n(52),M=n(50),q=function(e){var t=e.todo,n=Object(j.b)();return Object(g.jsx)(K.a.Item,{as:"li",children:Object(g.jsxs)(i.a,{children:[Object(g.jsxs)(l.a,{onClick:function(){return n(I(t.id))},children:[t.completed&&Object(g.jsx)("p",{className:"text-decoration-line-through",children:t.todo}),!t.completed&&Object(g.jsx)("p",{children:t.todo})]}),Object(g.jsx)(l.a,{sm:1,children:Object(g.jsx)(M.a,{onClick:function(){return n(E(t.id))}})})]})},t.id)},G=function(){var e=Object(j.c)(O),t=e.filter,n=e.showOption,o=Object(j.c)(b).todos,c=t.toLowerCase(),r=o.filter((function(e){return!("completed"===n&&!e.completed)&&(("active"!==n||!e.completed)&&(""===t||e.todo.toLowerCase().includes(c)))}));return Object(g.jsx)(K.a,{as:"ul",children:r.map((function(e){return Object(g.jsx)(q,{todo:e},e.id)}))})};var H=function(){var e=Object(j.b)();return Object(o.useEffect)((function(){e(J())}),[e]),Object(g.jsx)(s.a,{children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(l.a,{lg:"2",xl:"3"}),Object(g.jsx)(l.a,{className:"bg-info",children:Object(g.jsxs)(s.a,{className:"m-2",children:[Object(g.jsx)("h1",{className:"text-center",children:"ToDo App"}),Object(g.jsx)(z,{}),Object(g.jsx)(D,{}),Object(g.jsx)(G,{})]})}),Object(g.jsx)(l.a,{lg:"2",xl:"3"})]})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),r(e),a(e)}))},R=n(33),U=n(34),V=n(16),W=n.n(V),X=n(14),Y="todos",Z={loadToDos:function(){return new Promise((function(e,t){var n=localStorage.getItem(Y);n?Array.isArray(JSON.parse(n))?e(JSON.parse(n)):t({message:"Something went wrong"}):e([])}))},saveToDos:function(e){return new Promise((function(t){localStorage.setItem(Y,JSON.stringify(e)),t()}))}},$=W.a.mark(ne),_=W.a.mark(oe),ee=W.a.mark(ce),te=W.a.mark(re);function ne(){var e;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(X.b)(Z.loadToDos);case 3:return e=t.sent,t.next=6,Object(X.c)(A(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(X.c)(P());case 12:case"end":return t.stop()}}),$,null,[[0,8]])}function oe(){var e;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(X.d)(b);case 2:return e=t.sent,t.next=5,Object(X.b)(Z.saveToDos,e.todos);case 5:case"end":return t.stop()}}),_)}function ce(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.c)(L());case 2:case"end":return e.stop()}}),ee)}function re(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.a)([Object(X.e)(J,ne),Object(X.e)(L,oe),Object(X.e)(E,ce),Object(X.e)(F,ce),Object(X.e)(I,ce)]);case 2:case"end":return e.stop()}}),te)}var ae=n(12),se=Object(ae.b)({todo:B,filter:v}),ie=Object(U.a)(),le=Object(f.a)({reducer:se,middleware:function(e){return[ie].concat(Object(R.a)(e({thunk:!1})))},devTools:!1});ie.run(re);var ue=le;n(45);a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(j.a,{store:ue,children:Object(g.jsx)(H,{})})}),document.getElementById("root")),Q()}},[[46,1,2]]]);
//# sourceMappingURL=main.799e48fc.chunk.js.map