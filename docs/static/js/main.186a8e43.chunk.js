(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n(7),i=n.n(c),s=n(2),u=n(10),o=n(8),j=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),i=c[0],o=c[1];return Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),o(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(e){var t=e.target.value;o(t)}})})};j.protoTypes={setCategories:n.n(o).a.func.isRequired};var d=j,p=n(11),b=n(6),f=n.n(b),l=n(9),O=function(){var e=Object(l.a)(f.a.mark((function e(t){var n,r,a,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=3jL8tMd2bRZeauD997yq3eFpCFobbB63&q=".concat(t,"&limit=5"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,c=a.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.title,n=e.url;return Object(r.jsxs)("div",{className:"card animate__fadeInTopLeft",children:[Object(r.jsx)("img",{src:n}),Object(r.jsx)("p",{children:t})]})},x=function(e){var t=e.Category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){O(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=n.data,i=n.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{className:"animate__bounceOut",children:i&&"Cargando"}),Object(r.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(r.jsx)(h,Object(p.a)({},e),e.id)}))})]})},g=function(){var e=Object(a.useState)(["One punch"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GifExpertApp"}),Object(r.jsx)(d,{setCategories:c}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:n.map((function(e){return Object(r.jsx)(x,{Category:e},e)}))})]})};n(20);i.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.186a8e43.chunk.js.map