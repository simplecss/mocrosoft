!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/app",e(0)}([function(t,e,n){"use strict";var i=n(1)["default"],o=n(3),a=i(o);document.addEventListener("DOMContentLoaded",function(){a["default"].init()})},function(t,e,n){t.exports=n(2)},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t){return t&&t.__esModule?t:{"default":t}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){return{container:document.querySelector("#body-container"),pages:document.querySelectorAll(".js-page"),steps:document.querySelectorAll(".js-step"),navLinks:document.querySelectorAll(".js-nav"),tutorialNavLinks:document.querySelectorAll(".js-tutorial-nav")}}function e(t){t.classList.add("fixed-header")}function n(t,e){var i=t-e>0?t-e:0;document.body.scrollTop=i,i&&setTimeout(function(){n(i,e)},20)}function i(t){var e=document.body.scrollTop,i=e;t&&(i=20*e/t),n(e,i)}function o(t,e){e&&t&&[].forEach.call(t,function(t){t.id===e?(t.classList.remove("invisible"),t.classList.add("visible"),i(200)):(t.classList.remove("visible"),t.classList.add("invisible")),setTimeout(function(){t.classList.add("transition")},1e3)})}function a(t,e){e&&t&&[].forEach.call(t,function(t){t.getAttribute("href")==="#"+e?(t.classList.add("active"),t.parentNode.classList.add("active")):(t.parentNode.classList.remove("active"),t.classList.remove("active"))})}function s(t,e){var n=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],i=void 0;n?window.location.hash="#/page-"+n:(n=window.location.hash.replace("#/page-",""),i=[].filter.call(e,function(t){return n===t.id}),0==i.length&&(n="home")),o(e,n),a(t,n)}function r(t,e){var n=arguments.length<=2||void 0===arguments[2]?!1:arguments[2];n||(n=e[0].id),o(e,n),a(t,n)}function c(t,e,n){t&&[].forEach.call(t,function(i){i.addEventListener("click",function(o){o.preventDefault();var a=i.getAttribute("href").substr(1),s=[].filter.call(e,function(t){return a===t.id});1==s.length&&n(t,e,a)})})}function u(n){var i=t();e(i.container),s(i.navLinks,i.pages),r(i.tutorialNavLinks,i.steps),c(i.navLinks,i.pages,s),c(i.tutorialNavLinks,i.steps,r)}return{init:u}}();e["default"]=n,t.exports=e["default"]}]);
//# sourceMappingURL=local.js.map