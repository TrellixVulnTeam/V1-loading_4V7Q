(this.webpackJsonpcode=this.webpackJsonpcode||[]).push([[0],{75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(68),c=a.n(s),r=a(57),l=a(80),o=a(81),d=a(79),j=(a(75),a(2)),b=function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsxs)("div",{className:"header-inner",children:[Object(j.jsx)("div",{className:"logo",children:"Shreyas Sreedhar"}),Object(j.jsxs)("nav",{className:"nav",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.behance.net/shreyas-sreedhar",children:"Behance"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.github.com/shreyas-sreedhar",children:"Github"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/shreyas-sreedhar",children:"Linkedin"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://medium.com/@shreyas.sreedhar",children:"Blog"})})]}),Object(j.jsx)("div",{className:"contact",children:Object(j.jsx)("a",{href:"/docs/Shreyas S Sreedhar - Resume.pdf",children:"Resume"})}),Object(j.jsxs)("div",{className:"hamburger-menu",children:[Object(j.jsx)("span",{}),Object(j.jsx)("span",{})]})]})})},h=a(69),m={animate:{transition:{delayChildren:.4,staggerChildren:.1}}},u={initial:{y:400},animate:{y:0,transition:{ease:[.6,.01,-.05,.95],duration:1}}},O=function(e){var t=e.title,a=e.disabled;return Object(j.jsx)(d.a.span,{className:"row-title",variants:a?null:m,initial:"initial",animate:"animate",children:Object(h.a)(t).map((function(e){return Object(j.jsx)(d.a.span,{className:"row-letter",variants:a?null:u,children:e})}))})},x=function(e){var t=e.title;return Object(j.jsxs)("div",{className:"banner-row",children:[Object(j.jsx)("div",{className:"row-col",children:Object(j.jsx)(O,{title:t})}),Object(j.jsx)(d.a.div,{initial:{opacity:0,y:80},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:1,delay:.4},className:"row-col",children:Object(j.jsx)("span",{className:"row-message",children:"Currently building the V2. of my portfolio Website. Please access the links on the top of the website to view my works."})})]})},g=function(e){var t=e.title;return Object(j.jsxs)("div",{className:"banner-row center",children:[Object(j.jsxs)(d.a.div,{initial:{scale:0},animate:{scale:1},transition:{ease:[.6,.01,-.05,.95],duration:1,delay:1},className:"scroll",children:[Object(j.jsx)(d.a.span,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:1,delay:1.8},children:"Coming"}),Object(j.jsx)(d.a.span,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:1,delay:1.8},children:"Soon"})]}),Object(j.jsx)(O,{title:t})]})},v=function(e){var t=e.title,a=e.playMarquee;return Object(j.jsx)("div",{className:"banner-row marquee  ".concat(a&&"animate"),children:Object(j.jsxs)(d.a.div,{initial:{y:310},animate:{y:0},transition:{ease:[.6,.01,-.05,.9],duration:1},className:"marquee__inner",children:[Object(j.jsx)(O,{title:t,disabled:!0}),Object(j.jsx)(O,{title:t}),Object(j.jsx)(O,{title:t,disabled:!0}),Object(j.jsx)(O,{title:t,disabled:!0})]})})},y=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){setTimeout((function(){n(!0)}),2e3)}),[]),Object(j.jsxs)(d.a.div,{className:"banner",variants:m,children:[Object(j.jsx)(x,{title:"Under"}),Object(j.jsx)(v,{title:"Construction",playMarquee:a}),Object(j.jsx)(g,{title:"Work"})]})},p=function(e){var t=e.src,a=e.fallback,i=e.type,n=void 0===i?"image/webp":i,s=e.alt;return Object(j.jsxs)("picture",{children:[Object(j.jsx)("source",{srcSet:t,type:n}),Object(j.jsx)("img",{src:a,alt:s})]})},f={show:{transition:{staggerChildren:.35}}},w={hidden:{opacity:0,y:200},show:{opacity:1,y:0,transition:{ease:[.6,.01,-.05,.95],duration:1.6}},exit:{opacity:0,y:-200,transition:{ease:"easeInOut",duration:.8}}},N={hidden:{opacity:0,y:200},show:{opacity:1,y:0,transition:{ease:[.6,.01,-.05,.95],duration:1.6}}},S=function(e){var t=e.posX,a=e.posY,i=e.variants,n=e.id;return Object(j.jsx)(d.a.div,{variants:i,className:"image-block ".concat(n),style:{top:"".concat(a,"vh"),left:"".concat(t,"vw ")},children:Object(j.jsx)(p,{src:"/V1-loading"+"/images/".concat(n,".jpg"),fallback:"/V1-loading"+"/images/".concat(n,".jpg"),alt:n})})},k=function(e){var t=e.setLoading;return Object(j.jsx)(d.a.div,{className:"loader",children:Object(j.jsxs)(d.a.div,{variants:f,onAnimationComplete:function(){return t(!1)},initial:"hidden",animate:"show",exit:"exit",className:"loader-inner",children:[Object(j.jsx)(S,{variants:w,id:"image-1"}),Object(j.jsx)(d.a.div,{variants:N,className:"transition-image",children:Object(j.jsx)(d.a.img,{layoutId:"main-image-1",src:"/V1-loading/images/image-2.jpg"})}),Object(j.jsx)(S,{variants:w,id:"image-3"}),Object(j.jsx)(S,{variants:w,id:"image-4"}),Object(j.jsx)(S,{variants:w,id:"image-5"})]})})};var C=function(){var e=Object(i.useState)(!0),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){a?document.querySelector("body").classList.add("loading"):document.querySelector("body").classList.remove("loading")}),[a]),Object(j.jsx)(l.a,{type:"crossfade",children:Object(j.jsx)(o.a,{children:a?Object(j.jsx)(d.a.div,{children:Object(j.jsx)(k,{setLoading:n})},"loader"):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(y,{}),!a&&Object(j.jsx)("div",{className:"transition-image final",children:Object(j.jsx)(d.a.img,{transition:{ease:[.6,.01,-.05,.9],duration:1.6},src:"/V1-loading/images/image-2.jpg",layoutId:"main-image-1"})})]})})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,82)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),s(e),c(e)}))};c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),I()}},[[77,1,2]]]);
//# sourceMappingURL=main.259a5de4.chunk.js.map