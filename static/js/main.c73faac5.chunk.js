(this.webpackJsonprabblepop=this.webpackJsonprabblepop||[]).push([[0],{36:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var s=a(13),n=a.n(s),i=a(30),r=a.n(i),c=(a(36),a(18)),u=a(0),o=a.n(u),l=a(3),d=a(10),b=a(5),m=function(e){var t=e.action,a=e.onSelectAction;return Object(b.jsxs)("div",{className:"flex gap-2 hover:shadow hover:border-gray-400 py-2",onClick:function(){return a(t.destination)},children:[Object(b.jsx)("div",{className:"w-8 h-8 rounded-full overflow-hidden",children:Object(b.jsx)("img",{src:t.image,alt:""})}),Object(b.jsxs)("div",{className:"flex flex-col",children:[Object(b.jsx)("p",{className:"text-sm font-bold",children:t.user}),Object(b.jsx)("p",{className:"text-sm",children:t.text})]})]})},p=function(e){var t=e.text,a=e.bgColor,s=void 0===a?"black":a,n=e.textColor,i=void 0===n?"white":n,r=e.clickHandler,c=void 0===r?function(e){return e.preventDefault()}:r;return Object(b.jsx)("button",{onClick:c,className:"text-".concat(i," bg-").concat(s," px-2 rounded"),children:t})},j=function(e){var t=e.actions,a=e.onAddOption,s=e.onSelectAction;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"border-b border-gray-400 pb-2 flex justify-between",children:[Object(b.jsx)("p",{className:"uppercase text-green-800",children:"Actions"}),Object(b.jsx)(p,{text:"Add Option",bgColor:"green-800",clickHandler:a})]}),Object(b.jsx)("div",{className:"mt-4 flex flex-col gap-4",children:t.map((function(e,t){return Object(b.jsx)(m,{action:e,onSelectAction:s},t)}))})]})},f=function(e){var t=e.hideModal,a=e.onAddOption,n=Object(s.useState)(""),i=Object(d.a)(n,2),r=i[0],c=i[1],u=Object(s.useState)(""),o=Object(d.a)(u,2),l=o[0],m=o[1];return Object(b.jsx)("div",{className:"fixed z-10 left-0 top-0 w-full h-screen bg-black bg-opacity-40",children:Object(b.jsxs)("form",{action:"",className:"xl:w-3/6 lg:w-5/6 w-full mx-auto lg:mt-12 h-full rounded lg:h-5/6 bg-white flex flex-col items-center justify-evenly overflow-y-hidden",children:[Object(b.jsx)("h2",{className:"text-lg font-bold",children:"What happens next?"}),Object(b.jsx)("textarea",{value:r,onChange:function(e){return c(e.target.value)},placeholder:"What do you do?",className:"w-5/6 border border-gray-400 p-2"}),Object(b.jsx)("textarea",{value:l,onChange:function(e){return m(e.target.value)},placeholder:"What happens next?",className:"w-5/6 h-4/6 border border-gray-400 p-2"}),Object(b.jsxs)("div",{className:"flex gap-4 justify-end w-5/6",children:[Object(b.jsx)(p,{text:"Cancel",bgColor:"red-800",clickHandler:function(e){e.preventDefault(),t()}}),Object(b.jsx)(p,{text:"Add Option",bgColor:"green-800",clickHandler:function(e){e.preventDefault(),r&&l&&(a({text:r,body:l}),t())}})]})]})})},x=function(e){var t=e.text;return Object(b.jsx)("div",{className:"flex gap-2 flex-col",children:t.split("\\n").map((function(e,t){return Object(b.jsx)("p",{children:e},t)}))})},h=function(){return Object(b.jsxs)("nav",{className:"flex justify-between lg:px-40 px-8 bg-green-800 h-10 items-center",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{className:"font-bold text-white",children:"Rabblepop"})}),Object(b.jsxs)("div",{className:"flex gap-6",children:[Object(b.jsx)("ul",{children:Object(b.jsx)("li",{className:"text-white",children:"About"})}),Object(b.jsx)(p,{text:"Join",bgColor:"white",textColor:"red"})]})]})},g=function(e){var t=e.date;return Object(b.jsx)("p",{className:"text-sm",children:t})},O=function(e){var t=e.text;return Object(b.jsx)("h2",{className:"text-lg font-bold",children:t})},v=function(e){var t=e.img,a=e.userName;return Object(b.jsxs)("div",{className:"flex items-center gap-4",children:[Object(b.jsx)("div",{className:"w-8 h-8 rounded-full overflow-hidden",children:Object(b.jsx)("img",{src:t,alt:""})}),Object(b.jsxs)("p",{className:"text-sm",children:["Added by ",Object(b.jsx)("span",{className:"font-bold",children:a})]})]})},w=a.p+"static/media/profile.aa859487.jpg",N=a(31),y=a(15),k=Object(N.a)({apiKey:"AIzaSyBiStCyzLCDYHOKXsvNrgkv2aLPvCTSMWA",authDomain:"rabblepop-f7f9c.firebaseapp.com",projectId:"rabblepop-f7f9c",storageBucket:"rabblepop-f7f9c.appspot.com",messagingSenderId:"72504510117",appId:"1:72504510117:web:0f7d62e82e4640fa1eaf4c",measurementId:"G-2RY1809Y95"}),A=Object(y.f)(k);var C=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),a=(t[0],t[1]),n=Object(s.useState)("L4Aoe0aPLKtvHPICd9YD"),i=Object(d.a)(n,2),r=i[0],u=i[1],m=Object(s.useState)({user:"Zeki Mirza",createdAt:"21st March 2021",title:"[WP] The Chosen One is dead, killed while facing the Dark Lord. Grief and hatred together give rise to an unlikely pair of heroes who come together to defeat the evil now taking over the world unchecked. The Chosen One's parents are out for revenge, and there is no room for mercy anymore.",body:"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis vel eros donec ac odio tempor orci dapibus. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Facilisis magna etiam tempor orci eu. Sit amet purus gravida quis blandit turpis cursus. Erat nam at lectus urna duis convallis convallis tellus id. Nunc aliquet bibendum enim facilisis gravida neque convallis. Id porta nibh venenatis cras sed. Massa vitae tortor condimentum lacinia. Hac habitasse platea dictumst quisque sagittis purus. Dapibus ultrices in iaculis nunc sed augue lacus. Neque sodales ut etiam sit amet nisl. At tempor commodo ullamcorper a lacus vestibulum. Facilisis mauris sit amet massa vitae tortor. Volutpat commodo sed egestas egestas fringilla. Dui id ornare arcu odio ut. Eget sit amet tellus cras adipiscing enim eu turpis. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Vivamus arcu felis bibendum ut.\nSit amet facilisis magna etiam tempor. Id ornare arcu odio ut sem nulla pharetra diam. Volutpat lacus laoreet non curabitur. Facilisi etiam dignissim diam quis enim lobortis. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Quis auctor elit sed vulputate mi sit amet mauris commodo. Id eu nisl nunc mi ipsum faucibus. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Amet dictum sit amet justo donec enim diam. Et leo duis ut diam quam nulla porttitor massa.\nPharetra et ultrices neque ornare aenean euismod elementum. Morbi non arcu risus quis varius quam. Cursus turpis massa tincidunt dui ut. Tempor orci dapibus ultrices in iaculis. Nunc sed augue lacus viverra vitae. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Scelerisque in dictum non consectetur a erat. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Laoreet sit amet cursus sit amet dictum. Sagittis orci a scelerisque purus."}),p=Object(d.a)(m,2),N=p[0],k=p[1],C=Object(s.useState)([{text:"Do this",user:"Zeki",image:w},{text:"Do that",user:"Mazin",image:w},{text:"Another thing",user:"Eren",image:w}]),S=Object(d.a)(C,2),q=S[0],D=S[1],I=Object(s.useState)(!1),M=Object(d.a)(I,2),L=M[0],E=M[1],F=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(y.c)(A,"pages",t),e.next=3,Object(y.d)(a);case 3:return s=e.sent,e.abrupt("return",s.data());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],s=Object(y.b)(A,"pages",t,"actions"),e.next=4,Object(y.e)(s);case 4:return e.sent.forEach((function(e){return a.push(e.data())})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){Object(l.a)(o.a.mark((function e(){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,F(r);case 3:return t=e.sent,k(t),e.next=7,H(r);case 7:s=e.sent,D(s),a(!1);case 10:case"end":return e.stop()}}),e)})))()}),[r]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsxs)("div",{className:"xl:w-2/6 lg:w-3/6 w-full mx-auto h-full min-h-screen bg-gray-100 flex flex-col gap-4 px-8 pt-8 ",children:[Object(b.jsxs)("div",{className:"w-full flex items-center justify-between",children:[Object(b.jsx)(v,{userName:N.user,img:w}),Object(b.jsx)(g,{date:N.date})]}),Object(b.jsx)(O,{text:N.title}),Object(b.jsx)(x,{text:N.body}),Object(b.jsx)(j,{actions:q,onAddOption:function(){return E(!0)},onSelectAction:function(e){return u(e)}}),L&&Object(b.jsx)(f,{hideModal:function(){return E(!1)},onAddOption:function(e){var t=e.text,a=e.user,s=void 0===a?"Zeki Mirza":a,n=e.image,i=void 0===n?w:n,u=e.body;Object(l.a)(o.a.mark((function e(){var a,n,l,d,b,m,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(y.b)(A,"pages",r,"actions"),n=Object(y.b)(A,"pages"),e.next=4,Object(y.a)(a,{text:t,user:s,image:i});case 4:return l=e.sent,d=l.id,e.next=8,Object(y.a)(n,{title:t,user:s,body:u});case 8:return b=e.sent,m=b.id,p=Object(y.c)(A,"pages",r,"actions",d),e.next=13,Object(y.g)(p,{source:r,destination:m},{merge:!0});case 13:D([{text:t,user:s,image:i,source:r,destination:m}].concat(Object(c.a)(q)));case 14:case"end":return e.stop()}}),e)})))()}})]})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),S()}},[[40,1,2]]]);
//# sourceMappingURL=main.c73faac5.chunk.js.map