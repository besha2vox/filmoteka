!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequired76b;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequired76b=o),o.register("fvSW3",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(t!==e)throw new TypeError("Private static access of wrong provenance")}})),o.register("ffZzF",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){return e.get?e.get.call(t):e.value}}));var i={};function a(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,s,"next",t)}function s(t){a(i,r,o,c,s,"throw",t)}c(void 0)}))}};var c={},s=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?d:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function m(){}function y(){}function g(){}var _={};s(_,i,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(F([])));b&&b!==n&&r.call(b,i)&&(_=b);var k=g.prototype=m.prototype=Object.create(_);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function F(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=g,s(k,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(L.prototype),s(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(k),s(k,c,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=F,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:F(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(c);try{regeneratorRuntime=s}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=s:Function("r","regeneratorRuntime = r")(s)}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(t,e,n){return f.default(t,e),f.default(n,"get"),h.default(t,n)};var f=p(o("fvSW3")),h=p(o("ffZzF"));function p(t){return t&&t.__esModule?t:{default:t}}var d={};function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(t,e,n){e&&v(t.prototype,e);n&&v(t,n);return t};var m=function(){"use strict";function e(){t(u)(this,e),this._queryToFetch="",this._pageToFetch=1}return t(d)(e,[{key:"basicFetch",value:function(e){return t(i)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).catch((function(t){console.log("error",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),n)})))()}},{key:"fetchTrendingMovies",value:function(){var n=this;return t(i)(t(c).mark((function r(){var o;return t(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o="".concat(t(l)(e,e,y)).concat(t(l)(e,e,_),"?api_key=").concat(t(l)(e,e,g),"&page=").concat(n.pageToFetch),r.next=3,n.basicFetch(o);case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}}),r)})))()}},{key:"fetchSearchMoviesByID",value:function(n){var r=this;return t(i)(t(c).mark((function o(){var i;return t(c).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return i="".concat(t(l)(e,e,y)).concat(t(l)(e,e,w)).concat(n,"?api_key=").concat(t(l)(e,e,g)),o.next=3,r.basicFetch(i);case 3:return o.abrupt("return",o.sent);case 4:case"end":return o.stop()}}),o)})))()}},{key:"fetchIDMoviesByKeyWord",value:function(n){var r=this;return t(i)(t(c).mark((function o(){var i;return t(c).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return i="".concat(t(l)(e,e,y)).concat(t(l)(e,e,b),"?api_key=").concat(t(l)(e,e,g),"&page=").concat(r.pageToFetch,"&query=").concat(n),o.next=3,r.basicFetch(i);case 3:return o.abrupt("return",o.sent);case 4:case"end":return o.stop()}}),o)})))()}},{key:"resetPage",value:function(){this._pageToFetch=0}},{key:"queryToFetch",get:function(){return this._queryToFetch},set:function(t){this._queryToFetch=t}},{key:"pageToFetch",get:function(){return this._pageToFetch},set:function(t){this._pageToFetch=t}}]),e}(),y={writable:!0,value:"https://api.themoviedb.org/3/"},g={writable:!0,value:"9cca312caffd11f4ae9f11244d585025"},_={writable:!0,value:"trending/all/day"},w={writable:!0,value:"movie/"},b={writable:!0,value:"search/movie"},k={};Object.defineProperty(k,"__esModule",{value:!0}),k.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t};var x=function(){"use strict";function e(n){var r=n.onShow,o=n.onClose,i=this;t(u)(this,e),t(k)(this,"onbackDropClose",(function(t){t.target.classList.contains("backdrop")&&i.close()})),t(k)(this,"onCloseClick",(function(t){i.close()})),this.onShow=r,this.onClose=o,this.elem=null,this.closeIcon=null}return t(d)(e,[{key:"onClose",value:function(){}},{key:"open",value:function(t){document.body.insertAdjacentHTML("beforeend",'<div class="backdrop">'.concat(t,"</div>")),document.body.style.overflow="hidden",this.elem=document.querySelector(".backdrop"),this.closeIcon=document.querySelector(".modal-movie__close"),this.elem.addEventListener("click",this.onbackDropClose),this.closeIcon.addEventListener("click",this.onCloseClick),this.onShow()}},{key:"close",value:function(){document.querySelector(".backdrop").remove(),console.log("this.onClose();",this.onClose),this.onClose()}}]),e}();function L(t){var e=t.id,n=t.poster_path,r=t.title,o=t.name,i=t.release_date,a=t.first_air_date,c=t.genre_ids;if(i||a){var s="https://image.tmdb.org/t/p/original".concat(n),u=i||a,l=c.join(",");return'<li class="films-list__item">\n    <article class="films-card" id='.concat(e,'>\n    <div class="img-wrapper">\n      <img width="395" src=').concat(s," alt=").concat(r||o,' />\n      </div>\n      <h2 class="films-card__title">').concat(r||o,'</h2>\n      <p class="films-card__genre">').concat(l," | ").concat(u,"</p>\n    </article>\n  </li>")}}function E(t){var e=t.poster_path,n=t.genres,r=t.vote_average,o=t.vote_count,i=t.popularity,a=t.original_title,c=t.title,s=t.overview,u="https://image.tmdb.org/t/p/original".concat(e),l=n.map((function(t){return t.name})).join(", ");return'<div class="modal-movie">\n  <button type="button" class="modal-movie__close">\n  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n  <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n  </svg>\n  </button>\n    <div class="modal__img-wrapper">\n      <img width="375" src="'.concat(u,'" alt="').concat(c,'" />\n    </div>\n    <div class="modal-movie__descr">      \n      <div class="modal-movie__info-weapper">\n      <h2 class="modal-movie__title">').concat(c,'</h2>  \n\n      <ul class="modal-movie__list list">\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Vote / Votes </p>\n       <p class="modal-movie__value">\n         <span class="modal-movie__value--accent">').concat(r,"</span> / ").concat(o,'\n       </p>\n      </li>\n\n      <li class="modal-movie__item">\n       <p class="modal-movie__key">Popularity </p>\n       <p class="modal-movie__value">').concat(i,'</p>\n      </li>\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Original Title </p>\n       <p class="modal-movie__value modal-movie__value--uppercase">').concat(a,'</p>\n      </li>\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Genre </p>\n       <p class="modal-movie__value">').concat(l,'</p>\n      </li>\n      \n      </ul>  \n\n        <div class="modal-movie__about-wrapper">\n        <p class="modal-movie__about">About</p>\n        <p class="modal-movie__overview">').concat(s,'</p>\n        </div>\n        <div class="modal-movie__button-wrapper">\n          <button class="modal-movie__btn">add to Watched</button>\n          <button class="modal-movie__btn">add to queue</button>\n        </div>\n      </div>\n    </div>\n  </div>')}var T={movies:document.querySelector(".films-list"),pagination:document.querySelector(".pagination-list")},j=new m,O=new x({onShow:function(){window.addEventListener("keyup",P)},onClose:function(){window.removeEventListener("keyup",P)}});function F(){return(F=t(i)(t(c).mark((function e(){var n,r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.fetchTrendingMovies();case 2:n=t.sent,r=n.results.map(L).join(""),T.movies.innerHTML=r;case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function P(t){console.log(t.code),"Escape"===t.code&&O.close()}function M(){return(M=t(i)(t(c).mark((function e(n){var r,o,i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.target.closest(".films-card")){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,j.fetchSearchMoviesByID(r.id);case 5:o=t.sent,i=E(o),O.open(i);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}T.movies.addEventListener("click",(function(t){return M.apply(this,arguments)})),function(){F.apply(this,arguments)}()}();
//# sourceMappingURL=index.4710d047.js.map