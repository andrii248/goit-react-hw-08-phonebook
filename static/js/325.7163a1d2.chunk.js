"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[325],{2325:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a="ContactList_list__csErn",s=n(3661),r=n(885),i="ContactItem_item__gxreB",o="ContactItem_btn__1h5dG",c=n(184),l=function(e){var t=e.item,n=(0,s.Nt)(),a=(0,r.Z)(n,2),l=a[0],u=a[1].isLoading;return(0,c.jsxs)("div",{className:i,children:[t.name,": ",t.number,(0,c.jsx)("button",{className:o,type:"button",onClick:function(){return l(t.id)},disabled:u,children:"Delete"})]})},u=n(5048),d=n(6895),m=n(7967),h=function(){var e=(0,s.wY)(),t=e.data,n=e.isLoading,r=(0,u.v9)(d.zK);var i=function(){if(""===r)return t;var e=r.toLocaleLowerCase();return t.filter((function(t){return t.name.toLocaleLowerCase().includes(e)}))}();return n?(0,c.jsx)(m.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}):t?(0,c.jsx)("ul",{className:a,children:t&&i.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(l,{item:e})},e.id)}))}):void 0},_="Filter_label__vEd1E",b=function(){var e=(0,u.I0)(),t=(0,u.v9)(d.zK);return(0,c.jsxs)("label",{className:_,children:["Search contact by name",(0,c.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){e((0,d.MI)(t.target.value))}})]})},f=n(2791),x="ContactForm_form__dhl+T",v="ContactForm_label__-cVXI",p=n(5206);function C(){var e=(0,s.wY)().data,t=(0,s.Tn)(),n=(0,r.Z)(t,2),a=n[0],i=n[1],o=i.isLoading,l=i.isSuccess,u=(0,f.useState)(""),d=(0,r.Z)(u,2),h=d[0],_=d[1],b=(0,f.useState)(""),C=(0,r.Z)(b,2),j=C[0],w=C[1],g=function(e){var t=e.currentTarget,n=t.name,a=t.value;"name"===n&&w(a),"number"===n&&_(a)},L=function(){w(""),_("")};return(0,c.jsxs)("form",{className:x,onSubmit:function(t){t.preventDefault(),e.some((function(e){return e.name.toLocaleLowerCase()===j.toLowerCase()}))?p.Am.error("Contact ".concat(j," already exists in your ContactList")):(l&&a({name:j,number:h}),a({name:j,number:h}),L())},children:[(0,c.jsxs)("label",{className:v,children:["Name",(0,c.jsx)("input",{onChange:g,type:"text",name:"name",value:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,c.jsxs)("label",{className:v,children:["Phone",(0,c.jsx)("input",{onChange:g,type:"tel",name:"number",value:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,c.jsx)("button",{type:"submit",disabled:o,children:o?(0,c.jsx)(m.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}):"Add new contact"})]})}var j="ContactsView_contacts__6E96v",w="ContactsView_list__GsDLS";function g(){return(0,c.jsxs)("main",{className:j,children:[(0,c.jsxs)("div",{className:w,children:[(0,c.jsx)(b,{}),(0,c.jsx)(h,{})]}),(0,c.jsx)(C,{})]})}}}]);
//# sourceMappingURL=325.7163a1d2.chunk.js.map