(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{73:function(n,t,e){"use strict";e.r(t);var r,i,c,a,o,s=e(0),d=e(11),j=e.n(d),l=e(41),u=e(26),b=e(46),x=e(44),p=e.n(x),h=e(50),m=e(111),O=e(102),f=e(19),v=e(20),g=v.a.div(r||(r=Object(f.a)(["\n    display:flex;\n    justify-content:space-between;\n    flex-direction:column;\n    width:100%;\n    border:1px solid lightblue;\n    border-radius:20px;\n    height:100%;\n\n    button{\n        border-radius:0 0 20px 20px;\n    }\n\n    img{\n        max-height:250px;\n        object-fit:cover;\n        border-radius:20px 20px 0 0;\n    }\n\n    div{\n        font-family:Arial, Helvetica, sans-serif;\n        padding:1rem;\n        height:100%;\n    }\n"]))),C=e(4),w=function(n){var t=n.item,e=n.handleAddToCart;return Object(C.jsxs)(g,{children:[Object(C.jsx)("img",{src:t.image,alt:t.title}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:t.title}),Object(C.jsx)("p",{children:t.description}),Object(C.jsx)("h3",{children:t.price})]}),Object(C.jsx)(O.a,{onClick:function(){return e(t)},children:"Add to Cart"})]})},y=v.a.div(i||(i=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n  border-bottom: 1px solid lightblue;\n  padding-bottom: 20px;\n  div {\n    flex: 1;\n  }\n  .information,\n  .buttons {\n    display: flex;\n    justify-content: space-between;\n  }\n  img {\n    max-width: 80px;\n    object-fit: cover;\n    margin-left: 40px;\n  }\n"]))),k=function(n){var t=n.item,e=n.addToCart,r=n.removeFromCart;return Object(C.jsx)("div",{children:Object(C.jsxs)(y,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:t.title}),Object(C.jsxs)("div",{className:"information",children:[Object(C.jsxs)("p",{children:["Price: $",t.price]}),Object(C.jsxs)("p",{children:["Total: $",(t.price*t.amount).toFixed(2)]})]}),Object(C.jsxs)("div",{className:"buttons",children:[Object(C.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return r(t.id)},children:"-"}),Object(C.jsx)("p",{children:t.amount}),Object(C.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return e(t)},children:"+"})]})]}),Object(C.jsx)("img",{src:t.image,alt:t.title})]})})},T=v.a.aside(c||(c=Object(f.a)(["\n    font-family:arial;\n    width:500px;\n    padding:20px\n"]))),F=function(n){var t,e=n.cartItems,r=n.addToCart,i=n.removeFromCart;return Object(C.jsxs)(T,{children:[Object(C.jsx)("h2",{children:"Your shopping cart"}),0===e.length?Object(C.jsx)("p",{children:"No items in cart"}):null,e.map((function(n){return Object(C.jsx)(k,{item:n,addToCart:r,removeFromCart:i},n.id)})),Object(C.jsxs)("h2",{children:["Total: $",(t=e,t.reduce((function(n,t){return n+t.amount*t.price}),0)).toFixed(2)]})]})},A=e(109),z=e(106),E=e(108),I=e(107),N=e(105),S=v.a.div(a||(a=Object(f.a)(["\n    margin:40px;\n\n"]))),$=Object(v.a)(N.a)(o||(o=Object(f.a)(["\n    position:fixed;\n    z-index:100;\n    right:20px;\n    top:20px;\n"]))),H=e(112),J=function(){var n=Object(h.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://fakestoreapi.com/products");case 2:return n.next=4,n.sent.json();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();var B=function(){var n=Object(s.useState)(!1),t=Object(b.a)(n,2),e=t[0],r=t[1],i=Object(s.useState)([]),c=Object(b.a)(i,2),a=c[0],o=c[1],d=Object(m.a)("products",J),j=d.data,x=d.isLoading,p=d.error;console.log(j);var h,O=function(n){o((function(t){return t.find((function(t){return t.id===n.id}))?t.map((function(t){return t.id===n.id?Object(u.a)(Object(u.a)({},t),{},{amount:t.amount+1}):t})):[].concat(Object(l.a)(t),[Object(u.a)(Object(u.a)({},n),{},{amount:1})])}))};return x?Object(C.jsx)(z.a,{}):p?Object(C.jsx)("div",{children:"Something went wrong ..."}):Object(C.jsxs)(S,{children:[Object(C.jsx)(A.a,{anchor:"right",open:e,onClose:function(){return r(!1)},children:Object(C.jsx)(F,{cartItems:a,addToCart:O,removeFromCart:function(n){o((function(t){return t.reduce((function(t,e){return e.id===n?1===e.amount?t:[].concat(Object(l.a)(t),[Object(u.a)(Object(u.a)({},e),{},{amount:e.amount-1})]):[].concat(Object(l.a)(t),[e])}),[])}))}})}),Object(C.jsxs)($,{onClick:function(){return r(!0)},children:[Object(C.jsx)(I.a,{badgeContent:(h=a,h.reduce((function(n,t){return n+t.amount}),0)),color:"error"}),Object(C.jsx)(H.a,{})]}),Object(C.jsx)(E.a,{container:!0,spacing:3,children:null===j||void 0===j?void 0:j.map((function(n){return Object(C.jsx)(E.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(w,{item:n,handleAddToCart:O})},n.id)}))})]})},L=e(110),P=e(54),Y=new L.a;j.a.render(Object(C.jsx)(P.a,{client:Y,children:Object(C.jsx)(B,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.6c1ccf8c.chunk.js.map