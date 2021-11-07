(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,n){},18:function(e,t,n){},2:function(e,t,n){e.exports={label:"ContactForm_label__3XAUF",fieldInput:"ContactForm_fieldInput__3sCKE"}},20:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),o=(n(17),n(18),n(11)),s=n(3),l=n(4),u=n(6),d=n(5),b=n(0),m=function(e){var t=e.title,n=void 0===t?"":t,a=e.children;return Object(b.jsxs)("div",{children:[n&&Object(b.jsx)("h2",{children:n}),a]})},h=n(9),j=n(2),f=n.n(j),O=n(21),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.randomNameId=Object(O.a)(),e.randomNumberId=Object(O.a)(),e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(b.jsxs)("label",{className:f.a.label,children:["Name:",Object(b.jsx)("input",{className:f.a.fieldInput,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.randomNameId,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(b.jsxs)("label",{className:f.a.label,children:["Number:",Object(b.jsx)("input",{className:f.a.fieldInput,type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,placeholder:"+380 (00) 000-00-00",id:this.randomNumberId,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(b.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=p,v=n(10),x=n.n(v),g=function(e){var t=e.id,n=e.name,a=e.number,r=e.onDeleteContact;return Object(b.jsxs)("li",{className:x.a.listItem,children:[Object(b.jsxs)("p",{children:[n,": ",a]})," ",Object(b.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"Delete"})]})},y=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsx)(g,{id:e.id,name:e.name,number:e.number,onDeleteContact:n},e.id)}))})},I=function(e){var t=e.value,n=e.onChange;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"})}),Object(b.jsx)("input",{type:"text",id:"filter",name:"filter",value:t,onChange:n})]})},N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.addContact=function(t){var n=t.name,a=t.number;if(e.isInContacts(n))alert("".concat(n," is already in contacts"));else{var r={id:Object(O.a)(),name:n,number:a};e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(o.a)(t))}}))}},e.isInContacts=function(t){return t=t.toLowerCase(),e.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)})).length>0},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.target.value})},e.getFilteredContacts=function(){var t=e.state.filter.toLowerCase();return e.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{title:"Phonebook",children:Object(b.jsx)(C,{options:this.state,onSubmit:this.addContact})}),Object(b.jsxs)(m,{title:"Contacts",children:[Object(b.jsx)(I,{onChange:this.changeFilter}),Object(b.jsx)(y,{contacts:this.getFilteredContacts(),onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component),S=N;i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.71a73bf0.chunk.js.map