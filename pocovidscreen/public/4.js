(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{18:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(73),r=a(17);function l(e){var t,a=Object(n.a)(e,{root:null,rootMargin:"0px",threshold:.45});e.current&&a&&a.intersectionRatio>=.45&&(t=e.current.querySelectorAll(".fadeIn"),r.b.to(t,.67,{opacity:1,y:-30,stagger:{amount:.6},ease:"power4.out"}))}},19:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(27),c=a(18);t.a=function(e){var t=Object(n.useRef)(null);return Object(c.a)(t),r.a.createElement("div",{className:"text row mb-5",ref:t},r.a.createElement("div",{className:"col-8 col-lg-8 col-xl-6 offset-lg-1"},r.a.createElement(l.a,{title:e.title,subtitle:e.subtitle,text:e.text})))}},27:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,e.subtitle&&r.a.createElement("p",{className:"fadeIn mb-0"},e.subtitle),r.a.createElement("h2",{className:"fadeIn mb-4"},e.title)),r.a.createElement("p",{className:"fadeIn"},e.text))}},7:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(6),c=function(){return r.a.createElement("footer",{className:"app-footer pt-5"},r.a.createElement("div",{className:"container mb-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-lg-5 mb-5 mb-md-0"},r.a.createElement("h2",{className:"mb-1"},l.a.appTitle),r.a.createElement("p",null,"POCUS image analysis through AI to screen COVID-19 and pneumonia or healthy people.")),r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",{className:"mb-4"},"Legal"),r.a.createElement("ul",{className:"app-footer-links"},r.a.createElement("li",null,r.a.createElement("a",{href:""},"Data privacy")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"Terms of service")))),r.a.createElement("div",{className:"col offset-1"},r.a.createElement("h3",{className:"mb-4"},"Handy links"),r.a.createElement("ul",{className:"app-footer-links"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://arxiv.org/abs/2004.12084",title:"Read our scientific article",target:"_blank"},"Scientific article")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/jannisborn/covid19_pocus_ultrasound",target:"_blank",title:"Find out how we achieved this"},"GitHub repository")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://devpost.com/software/automatic-detection-of-covid-19-from-pocus-ultrasound-data",target:"_blank",title:"Read our DevPost"},"DevPost")))))))),r.a.createElement("div",{className:"copyright py-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col"},"© Copyright ",(new Date).getFullYear()),r.a.createElement("div",{className:"col text-right"},"A ",r.a.createElement("a",{href:"https://www.codevscovid19.org/",target:"_blank",title:"Visit the official event page"},"#CodeVsCovid19"),", ",r.a.createElement("a",{href:"https://euvsvirus.org/",target:"_blank",title:"Visit the official event page"},"#EUvsVirus"),"  project")))))};function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}t.a=function(e){var t=e.className,a=i(e,["className"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"app-main"},r.a.createElement("div",{className:t},a.children)),r.a.createElement(c,null))}},73:function(e,t,a){"use strict";var n=a(0);t.a=function(e,t){var a=Object(n.useState)(null),r=a[0],l=a[1];return Object(n.useEffect)((function(){if(e.current&&"function"==typeof IntersectionObserver){var a=new IntersectionObserver((function(e){l(e[0])}),t);return a.observe(e.current),function(){l(null),a.disconnect()}}return function(){}}),[e.current,t.threshold,t.root,t.rootMargin]),r}},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a(19),i=a(14);t.default=function(e){Object(i.h)();return r.a.createElement(l.a,null,r.a.createElement("div",{className:"container spacer"},r.a.createElement(c.a,{title:"Thanks for training the AI",text:"We really appreciate your donation."}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-10 offset-lg-1"},r.a.createElement("a",{href:"/train",title:"Train the AI again",className:"button primary round w-100 text-uppercase mt-4 d-block text-center"},"Train the AI again")))))}}}]);
//# sourceMappingURL=4.js.map