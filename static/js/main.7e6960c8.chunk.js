(this["webpackJsonpbrandonrowe-portfolio-v2"]=this["webpackJsonpbrandonrowe-portfolio-v2"]||[]).push([[0],{19:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(2),r=n.n(i),a=n(12),o=n.n(a),s=(n(19),function(e){var t=e.className,n=void 0===t?"":t,i=e.backgroundVideo,r=e.children;return Object(c.jsxs)("section",{className:"hero-component ".concat(n).trim(),children:[i&&Object(c.jsx)("video",{className:"background-video",src:i,autoPlay:!0,loop:!0,muted:!0}),r]})}),l=n(13),u=function(e){var t=e.className,n=void 0===t?"":t,i=e.links,r=void 0===i?[]:i,a=e.size,o=void 0===a?"lg":a;return Object(c.jsx)("div",{className:"links-component ".concat(n),children:r.map((function(e){var t=e.component,n=e.link,i=e.key,r=e.title;return Object(c.jsx)("span",{className:r?"text-link":"",children:Object(c.jsxs)("a",{href:n,target:"_blank",rel:"noreferrer",children:[r?"".concat(r," "):"",Object(c.jsx)(l.a,{icon:t,size:o})]})},i)}))})},d=n.p+"static/media/Portfolio_Video.c2f4fb6e.mp4",f=n(9),h=n(5),j=n.p+"static/media/AMC_Image.a5527002.png",b={personalLinks:[{component:f.b,link:"https://www.linkedin.com/in/brandonhrowe/",key:"linkedin"},{component:f.a,link:"https://github.com/brandonhrowe",key:"github"},{component:f.c,link:"https://medium.com/@brandon.h.rowe",key:"medium"},{component:h.a,link:"mailto:brandonhrowe@gmail.com?subject=Greetings!",key:"email"}],projects:[{title:"AMC Networks",description:"AMC Sites blah blah blah.",image:j,links:[{component:h.b,link:"https://www.amc.com/",key:"amc",title:"AMC"},{component:h.b,link:"https://www.bbcamerica.com/",key:"bbca",title:"BBC America"},{component:h.b,link:"https://www.ifc.com/",key:"ifc",title:"IFC"},{component:h.b,link:"https://www.sundancetv.com/",key:"sundance",title:"SundanceTV"},{component:h.b,link:"https://www.wetv.com/",key:"wetv",title:"WEtv"}]}]},m=b.personalLinks,p=function(){return Object(c.jsx)(s,{backgroundVideo:d,className:"home",children:Object(c.jsxs)("div",{className:"home-content grid-left grid-v-center",children:[Object(c.jsx)("h1",{children:"Brandon Rowe"}),Object(c.jsx)("h3",{children:"Fullstack Software Engineer"}),Object(c.jsx)(u,{links:m,className:"icons-mobile-primary icons-desktop-secondary"})]})})},v=n.p+"static/media/Rowe_Headshot_300x285.04d4f569.jpg",O=function(){return Object(c.jsx)(s,{className:"about-me",children:Object(c.jsxs)("div",{className:"grid-h-center grid-v-center about-me-content",children:[Object(c.jsx)("img",{src:v,alt:"Brandon Rowe Headshot",title:"Yes, it is I: Brandon Rowe",className:"headshot"}),Object(c.jsxs)("div",{className:"about-me-text",children:[Object(c.jsx)("h1",{children:"About Me"}),Object(c.jsxs)("p",{children:["I am a Fullstack Software Engineer, located in Brooklyn, NY. I specialize in JavaScript and the NERD stack (Node, Express, React, Postgres Databases), with additional experience in Python and Django.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"I have several years of experience in the world of Film/Television Post-Production, working with clients such as HBO, Netflix, and IFC. In addition to programming, my interests include film, reading, and photography. I also teach workshops in analog film processing."]})]})]})})},x=n(3),g=function(e){var t=e.title,n=e.description,i=e.links,r=e.image,a=e.children,o=e.className,s=void 0===o?"":o;return Object(c.jsxs)("div",{className:"card-component ".concat(s),style:{backgroundImage:r?"url(".concat(r,")"):""},children:[Object(c.jsxs)("div",{className:"card-text",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)("p",{children:n}),Object(c.jsx)(u,{links:i,className:"card-links"})]}),a]})},k=n(4),w=n.n(k),N=n(6),y=n(7),L=function(e){var t=e.children,n=void 0===t?[]:t,r=e.startFrom,a=void 0===r?0:r,o=e.className,s=void 0===o?"":o,l=Object(i.useState)(n),u=Object(y.a)(l,2),d=u[0],f=u[1],h=Object(i.useState)(a),j=Object(y.a)(h,2),b=(j[0],j[1]),m=Object(i.useState)(!1),p=Object(y.a)(m,2),v=p[0],O=p[1],x=Object(i.useState)(null),g=Object(y.a)(x,2),k=g[0],L=g[1],C=Math.floor(d.length/2),A=Object(i.useRef)(null),F=Object(i.useRef)(null);Object(i.useEffect)((function(){var e=function(){var e=Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(C);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();W(),e().then((function(){setInterval((function(){M()}),1e4),O(!0)}))}),[]),Object(i.useEffect)((function(){W()}),[a]),Object(i.useEffect)((function(){"left"===k?R():"right"===k&&T()}),[k]);var M=function(){L((function(e){return["right","left"].includes(e)?e:"right"}))},S=function(){var e=Object(N.a)(w.a.mark((function e(){var t,n,c=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=c.length>0&&void 0!==c[0]?c[0]:1,n=0;case 2:if(!(n<t)){e.next=8;break}return e.next=5,f((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[];if(e.length){var n=e[e.length-1];t=[].concat(n).concat(e.slice(0,e.length-1))}return t}));case 5:n++,e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(N.a)(w.a.mark((function e(){var t,n,c=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=c.length>0&&void 0!==c[0]?c[0]:1,n=0;case 2:if(!(n<t)){e.next=8;break}return e.next=5,f((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[];if(e.length){var n=e[0];t=[].concat(e.slice(1)).concat(n)}return t}));case 5:n++,e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Math.min(Math.max(a,C,0),n.length),t=A.current;if(t){var c=t.querySelectorAll(".slide"),i=c&&c.length&&c[e];i&&function(e){var t=e.parentNode,n=e.offsetLeft;t.scrollLeft=Math.max(n,0)}(i)}},B=function(e,t){var n=e.childNodes;return[].find.call(n,(function(n){return n.offsetLeft>=(t||e.scrollLeft)}))},E=function(e,t){var n=e.childNodes;return[].find.call(n,(function(n){return n.offsetLeft+n.clientWidth>t.clientWidth+e.scrollLeft}))},R=function(){var e=Object(N.a)(w.a.mark((function e(){var t,n,c,i,r,a,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!A){e.next=14;break}if(t=A.current,n=F.current,!(c=(c=B(t)||{}).previousElementSibling||null)){e.next=14;break}return i=B(t,c.offsetLeft+c.offsetWidth-n.clientWidth),r=0,i&&(a=t.children[0].offsetLeft,r=i.offsetLeft-a),o=r+2*t.clientWidth,e.next=11,S();case 11:P({element:t,to:o,duration:1,iconChange:0,hideAnimation:!0}),r+=t.clientWidth,setTimeout((function(){P({element:t,to:r,duration:350,iconChange:-1})}),1);case 14:setTimeout((function(){L(null)}),1e3);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(N.a)(w.a.mark((function e(){var t,n,c,i,r,a,o,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!A){e.next=12;break}return t=A.current,n=F.current,c=E(t,n),i=Object(y.a)(t.children,1),r=i[0],a=0,c&&(o=r.offsetLeft,a=Math.min(c.offsetLeft-o,t.scrollLeft-t.clientWidth)+r.clientWidth*C),s=Math.max(a-2*r.clientWidth,0),e.next=9,I();case 9:P({element:t,to:s,duration:1,iconChange:0,hideAnimation:!0}),a-=r.clientWidth,setTimeout((function(){P({element:t,to:a,duration:350,iconChange:1})}),1);case 12:setTimeout((function(){L(null)}),1e3);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){var t=e.element,c=e.to,i=e.duration,r=e.scrollDirection,a=void 0===r?"scrollLeft":r,o=e.iconChange,s=e.hideAnimation;O(!s),t[a]=c;var l=t[a],u=c-l;b((function(e){return Math.min(Math.max(e+o,0),n.length-1)}));window.requestAnimationFrame(function e(n){var c=D(n+=16.666666666666668,l,u,i);t[a]=c,n<i&&window.requestAnimationFrame(e.bind(null,n))}.bind(null,0))},D=function(e,t,n,c){return(e/=c/2)<1?n/2*e*e+t:-n/2*((e-=1)*(e-2)-1)+t};return Object(c.jsxs)("div",{className:"carousel-component ".concat(s),ref:F,children:[Object(c.jsx)("div",{onClick:function(){L((function(e){return["right","left"].includes(e)?e:"left"}))},className:"carousel-nav nav-left",children:"Left Arrow"}),Object(c.jsx)("div",{className:"viewport-wrapper",children:Object(c.jsx)("div",{className:"carousel-viewport ".concat(v?"":"no-scroll-animation"),draggable:!1,onDragStart:function(e){return e.preventDefault(),e.cancelable},ref:A,children:d.map((function(e,t){return Object(c.jsx)("div",{className:"slide",draggable:!1,children:e},"slide_".concat(e.key||t))}))},"viewport")}),Object(c.jsx)("div",{onClick:M,className:"carousel-nav nav-right",children:"Right Arrow"})]})},C=b.projects,A=function(){return Object(c.jsxs)(s,{className:"projects-hero",children:[Object(c.jsx)("h1",{className:"grid-top grid-h-center",children:"Projects"}),Object(c.jsxs)(L,{className:"grid-bottom grid-h-center",children:[Object(c.jsx)(g,Object(x.a)({},Object(x.a)(Object(x.a)({},C[0]),{},{title:"One"}))),Object(c.jsx)(g,Object(x.a)({},Object(x.a)(Object(x.a)({},C[0]),{},{title:"Two"}))),Object(c.jsx)(g,Object(x.a)({},Object(x.a)(Object(x.a)({},C[0]),{},{title:"Three"}))),Object(c.jsx)(g,Object(x.a)({},Object(x.a)(Object(x.a)({},C[0]),{},{title:"Four"}))),Object(c.jsx)(g,Object(x.a)({},Object(x.a)(Object(x.a)({},C[0]),{},{title:"Five"})))]})]})},F=function(){return Object(c.jsx)("h6",{className:"copyright",children:"\xa9 Brandon Rowe"})},M=b.personalLinks,S=function(){return Object(c.jsxs)("footer",{children:[Object(c.jsx)(u,{links:M,size:"2x"}),Object(c.jsx)(F,{})]})},I=(n(26),function(){return Object(c.jsxs)("div",{id:"app",children:[Object(c.jsx)(p,{}),Object(c.jsx)(O,{}),Object(c.jsx)(A,{}),Object(c.jsx)(S,{})]})}),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),W()}},[[27,1,2]]]);
//# sourceMappingURL=main.7e6960c8.chunk.js.map