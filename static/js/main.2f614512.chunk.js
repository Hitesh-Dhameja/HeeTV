(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{22:function(e,c,s){},23:function(e,c,s){},24:function(e,c,s){},26:function(e,c,s){},27:function(e,c,s){},33:function(e,c,s){},34:function(e,c,s){},35:function(e,c,s){},36:function(e,c,s){"use strict";s.r(c);var t=s(9),i=s.n(t),l=s(15),n=s.n(l),r=(s(22),s(23),s(24),s(2));var a=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(r.jsx)("img",{src:"https://cdn6.aptoide.com/imgs/c/0/0/c009d398556ab5ab9d124727b471e3c6_icon.png",alt:"logo",height:"80px",width:"120px"}),Object(r.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{class:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{class:"collapse navbar-collapse ownList",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{class:"navbar-nav mr-auto",children:[Object(r.jsx)("li",{class:"nav-item active ml-3",children:Object(r.jsxs)("a",{class:"nav-link",href:"/",children:["Home ",Object(r.jsx)("span",{class:"sr-only",children:"(current)"})]})}),Object(r.jsx)("li",{class:"nav-item ml-3",children:Object(r.jsx)("a",{class:"nav-link",href:"/",children:"Movie"})}),Object(r.jsx)("li",{class:"nav-item ml-3",children:Object(r.jsx)("a",{class:"nav-link",href:"/",children:"TV Show"})}),Object(r.jsx)("li",{class:"nav-item ml-3",children:Object(r.jsx)("a",{class:"nav-link",href:"/",children:"Pricing"})})]}),Object(r.jsxs)("form",{class:"form-inline my-2 my-lg-0",children:[Object(r.jsx)("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(r.jsx)("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]}),Object(r.jsx)("button",{type:"button",class:"btn btn-outline-warning ml-4",children:"SIGN IN"})]})]})})};s(26);var j=function(){return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)("h3",{children:"HeeTV"})}),Object(r.jsxs)("div",{className:"sub_heading",children:[Object(r.jsxs)("h1",{children:["Unlimited ",Object(r.jsx)("span",{children:"Movie"}),","]}),Object(r.jsx)("h1",{children:"TVs Shows, & more."})]}),Object(r.jsxs)("div",{className:"bottom",children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("span",{class:"badge badge-light",children:"PG 18"})}),Object(r.jsx)("li",{children:Object(r.jsx)("span",{class:"badge badge-light",children:"HD"})}),Object(r.jsx)("li",{children:Object(r.jsx)("p",{children:"Romance,Drama"})}),Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{class:"fas fa-calendar-alt"}),Object(r.jsx)("span",{children:"2021"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{class:"far fa-clock"}),Object(r.jsx)("span",{children:"128 min"})]})]}),Object(r.jsx)("div",{children:Object(r.jsxs)("button",{type:"button",class:"btn btn-outline-warning",children:[Object(r.jsx)("i",{class:"fas fa-play"}),"Watch Now"]})})]})]})},o=s(17),d=(s(27),s(16).a.initializeApp({apiKey:"".concat("AIzaSyCn7LiH3d8d1-95kbY0VJcCNksGEwiGNXM"),authDomain:"".concat("heetv-4ebf4.firebaseapp.com"),databaseURL:"".concat("https://heetv-4ebf4-default-rtdb.firebaseio.com"),storageBucket:"".concat("heetv-4ebf4.appspot.com")}).database());var b=function(e){var c=Object(t.useState)([]),s=Object(o.a)(c,2),i=s[0],l=s[1],n=e.title,a=e.movieType;Object(t.useEffect)((function(){j(a)}),[]);var j=function(e){d.ref("".concat("movies","/").concat(e)).on("value",(function(e){var c=e.val();c&&0!==c.length&&l((function(){return c}))}))};return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"row1",children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("div",{className:"row__posters",children:i.map((function(e){return Object(r.jsx)("img",{className:"row__poster row__posterLarge",src:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),alt:e.original_name})}))})]})})};s(33);var h=function(){return Object(r.jsx)("div",{style:{backgroundColor:"black"},children:Object(r.jsx)("section",{class:"pt-5 pb-5",children:Object(r.jsx)("div",{class:"container",children:Object(r.jsxs)("div",{class:"row",children:[Object(r.jsxs)("div",{class:"col-6 navMov",children:[Object(r.jsx)("h3",{class:"mb-3",children:"Online Streaming "}),Object(r.jsx)("br",{})]}),Object(r.jsx)(b,{title:"Netflix Originals",movieType:"netflix-originals"}),Object(r.jsx)("br",{}),Object(r.jsx)(b,{title:"Trending Now",movieType:"trending-now"}),Object(r.jsx)("br",{}),Object(r.jsx)(b,{title:"Top Rated",movieType:"top-rated"}),Object(r.jsx)("br",{}),Object(r.jsx)(b,{title:"Action Movies",movieType:"action-movies"}),Object(r.jsx)("br",{}),Object(r.jsx)(b,{title:"Horror Movies",movieType:"horror-movies"}),Object(r.jsx)("br",{}),Object(r.jsx)(b,{title:"Romance Movies",movieType:"romance-movies"}),Object(r.jsx)("br",{}),Object(r.jsx)(b,{title:"Documentaries Movies",movieType:"documentaries-movies"}),Object(r.jsx)("br",{})]})})})})};s(34);var x=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("section",{class:"services-area services-bg","data-background":"img/bg/services_bg.jpg",style:{backgroundImage:"url(https://themebeyond.com/html/movflx/img/bg/services_bg.jpg)"},children:Object(r.jsx)("div",{class:"container",children:Object(r.jsxs)("div",{class:"row align-items-center",children:[Object(r.jsx)("div",{class:"col-lg-6",children:Object(r.jsxs)("div",{class:"services-img-wrap",children:[Object(r.jsx)("img",{src:"https://themebeyond.com/html/movflx/img/images/services_img.jpg",alt:""}),Object(r.jsxs)("a",{href:"img/images/services_img.jpg",class:"download-btn",download:"",children:["Download ",Object(r.jsx)("img",{src:"https://themebeyond.com/html/movflx/fonts/download.svg",alt:""})]})]})}),Object(r.jsx)("div",{class:"col-lg-6",children:Object(r.jsxs)("div",{class:"services-content-wrap",children:[Object(r.jsxs)("div",{class:"section-title title-style-two mb-20",children:[Object(r.jsx)("span",{class:"sub-title",children:"Our Services"}),Object(r.jsx)("h2",{class:"title",children:"Download Your Shows Watch Offline."})]}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour."}),Object(r.jsx)("div",{class:"services-list",children:Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{class:"icon",children:Object(r.jsx)("i",{class:"fas fa-tv",style:{color:"goldenrod"}})}),Object(r.jsxs)("div",{class:"content",children:[Object(r.jsx)("h5",{children:"Enjoy on Your TV."}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor."})]})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("div",{class:"icon",children:Object(r.jsx)("i",{class:"fas fa-video",style:{color:"goldenrod"}})}),Object(r.jsxs)("div",{class:"content",children:[Object(r.jsx)("h5",{children:"Watch Everywhere."}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor."})]})]})]})})]})})]})})})})};s(35);var O=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("footer",{children:[Object(r.jsx)("div",{class:"footer-top-wrap bg-dark",children:Object(r.jsxs)("div",{class:"container",children:[Object(r.jsx)("div",{class:"footer-menu-wrap",children:Object(r.jsxs)("div",{class:"row align-items-center",children:[Object(r.jsx)("div",{class:"col-lg-3",children:Object(r.jsx)("div",{class:"footer-logo",children:Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("img",{src:"https://cdn6.aptoide.com/imgs/c/0/0/c009d398556ab5ab9d124727b471e3c6_icon.png",height:"80px",width:"120px",alt:""})})})}),Object(r.jsx)("div",{class:"col-lg-9",children:Object(r.jsx)("div",{class:"footer-menu",children:Object(r.jsxs)("nav",{children:[Object(r.jsxs)("ul",{class:"navigation",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:"Movie"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:"Tv Show"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:"Pricing"})})]}),Object(r.jsx)("div",{class:"footer-search",children:Object(r.jsxs)("form",{action:"#",children:[Object(r.jsx)("input",{type:"text",placeholder:"Find Favorite Movie"}),Object(r.jsx)("button",{children:Object(r.jsx)("i",{class:"fas fa-search"})})]})})]})})})]})}),Object(r.jsx)("div",{class:"footer-quick-link-wrap",children:Object(r.jsxs)("div",{class:"row align-items-center",children:[Object(r.jsx)("div",{class:"col-md-7",children:Object(r.jsx)("div",{class:"quick-link-list",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:"FAQ"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:"Help Center"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:"Terms of Use"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:"Privacy"})})]})})}),Object(r.jsx)("div",{class:"col-md-5",children:Object(r.jsx)("div",{class:"footer-social",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("i",{class:"fab fa-facebook-f"})})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("i",{class:"fab fa-twitter"})})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("i",{class:"fab fa-pinterest-p"})})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("i",{class:"fab fa-linkedin-in"})})})]})})})]})})]})}),Object(r.jsx)("div",{class:"copyright-wrap",children:Object(r.jsx)("div",{class:"container",children:Object(r.jsxs)("div",{class:"row",children:[Object(r.jsx)("div",{class:"col-lg-6 col-md-6",children:Object(r.jsx)("div",{class:"copyright-text",children:Object(r.jsxs)("p",{children:["Copyright \xa9 2021. All Rights Reserved By ",Object(r.jsx)("a",{href:"/",children:"HeeTV"})]})})}),Object(r.jsx)("div",{class:"col-lg-6 col-md-6",children:Object(r.jsx)("div",{class:"payment-method-img text-center text-md-right",children:Object(r.jsx)("img",{src:"https://themebeyond.com/html/movflx/img/images/card_img.png",alt:"img"})})})]})})})]})})};var m=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(a,{}),Object(r.jsx)(j,{}),Object(r.jsx)(h,{}),Object(r.jsx)(x,{}),Object(r.jsx)(O,{})]})};n.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.2f614512.chunk.js.map