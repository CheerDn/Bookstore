!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(0),i=n(6),o=n(9),a=Math.max,u=Math.min;t.exports=function(t,e,n){var c,l,s,f,v,d,p=0,h=!1,b=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=c,r=l;return c=l=void 0,p=e,f=t.apply(r,n)}function m(t){return p=t,v=setTimeout(x,e),h?y(t):f}function w(t){var n=t-d;return void 0===d||n>=e||n<0||b&&t-p>=s}function x(){var t=i();if(w(t))return j(t);v=setTimeout(x,function(t){var n=e-(t-d);return b?u(n,s-(t-p)):n}(t))}function j(t){return v=void 0,g&&c?y(t):(c=l=void 0,f)}function T(){var t=i(),n=w(t);if(c=arguments,l=this,d=t,n){if(void 0===v)return m(d);if(b)return clearTimeout(v),v=setTimeout(x,e),y(d)}return void 0===v&&(v=setTimeout(x,e)),f}return e=o(e)||0,r(n)&&(h=!!n.leading,s=(b="maxWait"in n)?a(o(n.maxWait)||0,e):s,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==v&&clearTimeout(v),p=0,c=d=l=v=void 0},T.flush=function(){return void 0===v?f:j(i())},T}},function(t,e,n){var r=n(7),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},function(t,e,n){var r=n(2).Symbol;t.exports=r},function(t,e,n){var r=n(1),i=n(0);t.exports=function(t,e,n){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(t,e,{leading:o,maxWait:e,trailing:a})}},function(t,e,n){},function(t,e,n){var r=n(2);t.exports=function(){return r.Date.now()}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(8))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(0),i=n(10),o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=u.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):a.test(t)?NaN:+t}},function(t,e,n){var r=n(11),i=n(14);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==r(t)}},function(t,e,n){var r=n(3),i=n(12),o=n(13),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):o(t)}},function(t,e,n){var r=n(3),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var i=a.call(t);return r&&(e?t[u]=n:delete t[u]),i}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){"use strict";n.r(e);n(5);var r=n(4),i=n.n(r),o=n(1),a=n.n(o);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.thresholdPercent=n,this.itemsToReveal=e,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=i()(this.calCaller,200).bind(this),this.events()}var e,n,r;return e=t,(n=[{key:"events",value:function(){var t=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",a()((function(){t.browserHeight=window.innerHeight}),300))}},{key:"calCaller",value:function(){var t=this;this.itemsToReveal.forEach((function(e){0==e.isRevealed&&t.calculateIfScrolledTo(e)}))}},{key:"calculateIfScrolledTo",value:function(t){window.scrollY+this.browserHeight>t.offsetTop&&t.getBoundingClientRect().top/this.browserHeight*100<this.thresholdPercent&&(t.classList.add("reveal-item--is-visible"),t.isRevealed=!0,t.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle))}},{key:"hideInitially",value:function(){this.itemsToReveal.forEach((function(t){t.classList.add("reveal-item"),t.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}}])&&u(e.prototype,n),r&&u(e,r),t}();$(document).ready((function(){$('a[href～="#gallery"]').on("click",(function(t){t.preventDefault()})),$(".nav__hamburger").click((function(){$(".nav").toggleClass("change")})),lightbox.option({resizeDuration:200,wrapAround:!0}),new c(document.querySelectorAll(".gallery__img--row-one"),75),new c(document.querySelectorAll(".gallery__img--row-two"),75),$(".writers-accordion").click((function(t){"button"===t.target.id.split("-")[0]&&($("#book-1").attr("src","assets/images/writers/"+t.target.id.split("-")[1]+"-book1.jpg"),$("#book-2").attr("src","assets/images/writers/"+t.target.id.split("-")[1]+"-book2.jpg"))}))}))}]);