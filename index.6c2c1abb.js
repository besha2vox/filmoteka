!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}};var r={},o=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(t,e,n){var r=h;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?v:f,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",v="completed",d={};function m(){}function y(){}function _(){}var g={};s(g,i,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(I([])));b&&b!==n&&r.call(b,i)&&(g=b);var k=_.prototype=m.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,x(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function I(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return y.prototype=_,s(k,"constructor",_),s(_,"constructor",y),y.displayName=s(_,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},E(L.prototype),s(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),s(k,c,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(r);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var a={};function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t,e,n){e&&c(t.prototype,e);n&&c(t,n);return t};var s=function(){"use strict";function n(){t(i)(this,n),this._queryToFetch="",this._pageToFetch=1,this.BASE_URL="https://api.themoviedb.org/3/",this.API_KEY="9cca312caffd11f4ae9f11244d585025",this.TRENDING_MOVIES="trending/all/day",this.MOVIE_BY_ID="movie/",this.MOVIE_BY_KEYWORD="search/movie"}return t(a)(n,[{key:"basicFetch",value:function(n){return t(e)(t(r).mark((function e(){return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).catch((function(t){console.log("error",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))()}},{key:"fetchTrendingMovies",value:function(){var n=this;return t(e)(t(r).mark((function e(){var o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="".concat(n.BASE_URL).concat(n.TRENDING_MOVIES,"?api_key=").concat(n.API_KEY,"&page=").concat(n.pageToFetch),t.next=3,n.basicFetch(o);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),e)})))()}},{key:"fetchSearchMoviesByID",value:function(n){var o=this;return t(e)(t(r).mark((function e(){var i;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i="".concat(o.BASE_URL).concat(o.MOVIE_BY_ID).concat(n,"?api_key=").concat(o.API_KEY),t.next=3,o.basicFetch(i);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),e)})))()}},{key:"fetchIDMoviesByKeyWord",value:function(n){var o=this;return t(e)(t(r).mark((function e(){var i;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i="".concat(o.BASE_URL).concat(o.MOVIE_BY_KEYWORD,"?api_key=").concat(o.API_KEY,"&page=").concat(o.pageToFetch,"&query=").concat(n),t.next=3,o.basicFetch(i);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),e)})))()}},{key:"resetPage",value:function(){this._pageToFetch=0}},{key:"queryToFetch",get:function(){return this._queryToFetch},set:function(t){this._queryToFetch=t}},{key:"pageToFetch",get:function(){return this._pageToFetch},set:function(t){this._pageToFetch=t}}]),n}(),u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t};var l=function(){"use strict";function e(n){var r=n.onShow,o=n.onClose,a=this;t(i)(this,e),t(u)(this,"onbackDropClose",(function(t){t.target.classList.contains("backdrop")&&a.close()})),t(u)(this,"onCloseClick",(function(t){a.close()})),this.onShow=r,this.onClose=o,this.elem=null,this.closeIcon=null}return t(a)(e,[{key:"onClose",value:function(){}},{key:"open",value:function(t){document.body.insertAdjacentHTML("beforeend",'<div class="backdrop">'.concat(t,"</div>")),document.body.style.overflow="hidden",this.elem=document.querySelector(".backdrop"),this.closeIcon=document.querySelector(".modal__close"),this.elem.addEventListener("click",this.onbackDropClose),this.closeIcon.addEventListener("click",this.onCloseClick),this.onShow()}},{key:"close",value:function(){document.querySelector(".backdrop").remove(),document.body.style.overflow="",console.log("this.onClose();",this.onClose),this.onClose()}}]),e}();function h(t){var e=t.id,n=t.poster_path,r=t.title,o=t.name,i=t.release_date,a=t.first_air_date,c=t.genre_ids;if(i||a){var s="https://image.tmdb.org/t/p/original".concat(n),u=i||a,l=c.join(",");return'<li class="films-list__item">\n    <article class="films-card" id='.concat(e,'>\n    <div class="img-wrapper">\n      <img width="395" src=').concat(s," alt=").concat(r||o,' />\n      </div>\n      <h2 class="films-card__title">').concat(r||o,'</h2>\n      <p class="films-card__genre">').concat(l," | ").concat(u.split("-")[0],"</p>\n    </article>\n  </li>")}}function f(t){var e=t.poster_path,n=t.genres,r=t.vote_average,o=t.vote_count,i=t.popularity,a=t.original_title,c=t.title,s=t.overview,u="https://image.tmdb.org/t/p/original".concat(e),l=n.map((function(t){return t.name})).join(", ");return'<div class="modal-movie">\n  <button type="button" class="modal__close">\n  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n  <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n  </svg>\n  </button>\n    <div class="modal__img-wrapper">\n      <img width="375" src="'.concat(u,'" alt="').concat(c,'" />\n    </div>\n    <div class="modal-movie__descr">      \n      <div class="modal-movie__info-weapper">\n      <h2 class="modal-movie__title">').concat(c,'</h2>  \n\n      <ul class="modal-movie__list list">\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Vote / Votes </p>\n       <p class="modal-movie__value">\n         <span class="modal-movie__value--accent">').concat(r,"</span> / ").concat(o,'\n       </p>\n      </li>\n\n      <li class="modal-movie__item">\n       <p class="modal-movie__key">Popularity </p>\n       <p class="modal-movie__value">').concat(i,'</p>\n      </li>\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Original Title </p>\n       <p class="modal-movie__value modal-movie__value--uppercase">').concat(a,'</p>\n      </li>\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Genre </p>\n       <p class="modal-movie__value">').concat(l,'</p>\n      </li>\n      \n      </ul>  \n\n        <div class="modal-movie__about-wrapper">\n        <p class="modal-movie__about">About</p>\n        <p class="modal-movie__overview">').concat(s,'</p>\n        </div>\n        <div class="modal-movie__button-wrapper">\n          <button class="modal-movie__btn">add to Watched</button>\n          <button class="modal-movie__btn">add to queue</button>\n        </div>\n      </div>\n    </div>\n  </div>')}var p={movies:document.querySelector(".films-list"),pagination:document.querySelector(".pagination-list")},v=new s,d=new l({onShow:function(){window.addEventListener("keyup",y)},onClose:function(){window.removeEventListener("keyup",y)}});function m(){return(m=t(e)(t(r).mark((function e(){var n,o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.fetchTrendingMovies();case 2:n=t.sent,o=n.results.map(h).join(""),p.movies.innerHTML=o;case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function y(t){console.log(t.code),"Escape"===t.code&&d.close()}function _(){return(_=t(e)(t(r).mark((function e(n){var o,i,a;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=n.target.closest(".films-card")){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,v.fetchSearchMoviesByID(o.id);case 5:i=t.sent,a=f(i),d.open(a);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}p.movies.addEventListener("click",(function(t){return _.apply(this,arguments)})),function(){m.apply(this,arguments)}()}();
//# sourceMappingURL=index.6c2c1abb.js.map