!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};function n(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,s,"next",e)}function s(e){n(i,o,a,c,s,"throw",e)}c(void 0)}))}};var r={},o=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,a=Object.create(o.prototype),i=new A(r||[]);return a._invoke=function(e,t,n){var r=h;return function(o,a){if(r===m)throw new Error("Generator is already running");if(r===f){if("throw"===o)throw a;return O()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=T(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=m;var s=l(e,t,n);if("normal"===s.type){if(r=n.done?f:d,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}(e,n,i),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",m="executing",f="completed",v={};function p(){}function g(){}function y(){}var _={};s(_,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(I([])));b&&b!==n&&r.call(b,a)&&(_=b);var E=y.prototype=p.prototype=Object.create(_);function k(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(o,a,i,c){var s=l(e[o],e,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function I(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}return g.prototype=y,s(E,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},k(L.prototype),s(L.prototype,i,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new L(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(E),s(E,c,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=I,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(r);try{regeneratorRuntime=o}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var i={};function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t,n){t&&c(e.prototype,t);n&&c(e,n);return e};var s=function(){"use strict";function n(){e(a)(this,n),this._queryToFetch="",this._pageToFetch=1,this.BASE_URL="https://api.themoviedb.org/3/",this.API_KEY="9cca312caffd11f4ae9f11244d585025",this.TRENDING_MOVIES="trending/all/",this.MOVIE_BY_ID="movie/",this.MOVIE_BY_KEYWORD="search/movie"}return e(i)(n,[{key:"basicFetch",value:function(n){return e(t)(e(r).mark((function t(){return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){console.log("error",e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),t)})))()}},{key:"fetchTrendingMovies",value:function(n){var o=this;return e(t)(e(r).mark((function t(){var a;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(o.BASE_URL).concat(o.TRENDING_MOVIES).concat(n,"?api_key=").concat(o.API_KEY,"&page=").concat(o.pageToFetch,"&language=").concat(o.getLanguage()),e.next=3,o.basicFetch(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),t)})))()}},{key:"fetchSearchMoviesByID",value:function(n){var o=this;return e(t)(e(r).mark((function t(){var a;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(o.BASE_URL).concat(o.MOVIE_BY_ID).concat(n,"?api_key=").concat(o.API_KEY,"&language=").concat(o.getLanguage()),e.next=3,o.basicFetch(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),t)})))()}},{key:"fetchIDMoviesByKeyWord",value:function(n){var o=this;return e(t)(e(r).mark((function t(){var a;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(o.BASE_URL).concat(o.MOVIE_BY_KEYWORD,"?api_key=").concat(o.API_KEY,"&page=").concat(o.pageToFetch,"&query=").concat(n,"&language=").concat(o.getLanguage()),e.next=3,o.basicFetch(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),t)})))()}},{key:"resetPage",value:function(){this._pageToFetch=0}},{key:"getLanguage",value:function(){return localStorage.getItem("lang")}},{key:"queryToFetch",get:function(){return this._queryToFetch},set:function(e){this._queryToFetch=e}},{key:"pageToFetch",get:function(){return this._pageToFetch},set:function(e){this._pageToFetch=e}}]),n}(),u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var l=function(){"use strict";function t(n){var r=n.onShow,o=n.onClose,i=this;e(a)(this,t),e(u)(this,"onbackDropClose",(function(e){e.target.classList.contains("backdrop")&&i.close()})),e(u)(this,"onCloseClick",(function(e){i.close()})),this.onShow=r,this.onClose=o,this.elem=null,this.closeIcon=null}return e(i)(t,[{key:"onClose",value:function(){}},{key:"open",value:function(e){document.body.insertAdjacentHTML("beforeend",'<div class="backdrop">'.concat(e,"</div>")),document.body.style.overflow="hidden",this.elem=document.querySelector(".backdrop"),this.closeIcon=document.querySelector(".modal__close"),this.elem.addEventListener("click",this.onbackDropClose),this.closeIcon.addEventListener("click",this.onCloseClick),this.onShow()}},{key:"close",value:function(){document.querySelector(".backdrop").remove(),document.body.style.overflow="",this.onClose()}}]),t}(),h=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"},{id:10759,name:"Action & Adventure"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"}],d=[{id:10762,name:"Дитячий"},{id:10763,name:"Новини"},{id:10764,name:"Реаліті-шоу"},{id:10765,name:"Науково фантастичний"},{id:10766,name:"Мильна опера"},{id:10767,name:"Ток-шоу"},{id:10768,name:"Політика та війна"},{id:28,name:"Бойовик"},{id:12,name:"Пригоди"},{id:16,name:"Мультфільм"},{id:35,name:"Комедія"},{id:80,name:"Кримінал"},{id:99,name:"Документальний"},{id:18,name:"Драма"},{id:10751,name:"Сімейний"},{id:14,name:"Фентезі"},{id:36,name:"Історичний"},{id:27,name:"Жахи"},{id:10402,name:"Музика"},{id:9648,name:"Детектив"},{id:10749,name:"Мелодрама"},{id:878,name:"Фантастика"},{id:10770,name:"Телефільм"},{id:53,name:"Трилер"},{id:10752,name:"Військовий"},{id:37,name:"Вестерн"},{id:10759,name:"Бойовик і пригоди"}];function m(){return"en-US"===localStorage.getItem("lang")?h:d}function f(e){var t=e.id,n=e.poster_path,r=e.title,o=e.name,a=e.release_date,i=e.first_air_date,c=e.genre_ids;if(a||i){var s="https://image.tmdb.org/t/p/original".concat(n),u=a||i,l=m(),h=c.map((function(e){return l.find((function(t){return t.id===e}))})).map((function(e){return e.name})).slice(0,2).join(", ");return'<li class="films-list__item"> \n    <article class="films-card" id='.concat(t,'>\n    <div class="img-wrapper">\n      <img width="395" src=').concat(s," alt=").concat(r||o,' />\n      </div>\n      <h2 class="films-card__title">').concat(r||o,'</h2>\n      <p class="films-card__genre">').concat(h," | ").concat(u.split("-")[0],"</p>\n    </article>\n  </li>")}}function v(e){var t=e.poster_path,n=e.vote_average,r=e.vote_count,o=e.popularity,a=e.original_title,i=e.original_name,c=e.title,s=e.name,u=e.overview,l=e.genre_ids,h="https://image.tmdb.org/t/p/original".concat(t),d=m(),f=l.map((function(e){return d.find((function(t){return t.id===e}))})).map((function(e){return e.name})).slice(0,2).join(", ");return'<div class="modal">\n  <button type="button" class="modal__close">\n  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n  <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n  </svg>\n  </button>\n    <div class="modal__img-wrapper">\n      <img width="375" src="'.concat(h,'" alt="').concat(c||s,'" />\n    </div>\n    <div class="modal-movie__descr">      \n      <div class="modal-movie__info-weapper">\n      <h2 class="modal-movie__title">').concat(c||s,'</h2>  \n\n      <ul class="modal-movie__list list">\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Vote / Votes </p>\n       <p class="modal-movie__value">\n         <span class="modal-movie__value--accent">').concat(n,"</span> / ").concat(r,'\n       </p>\n      </li>\n\n      <li class="modal-movie__item">\n       <p class="modal-movie__key">Popularity </p>\n       <p class="modal-movie__value">').concat(o,'</p>\n      </li>\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Original Title </p>\n       <p class="modal-movie__value modal-movie__value--uppercase">').concat(a||i,'</p>\n      </li>\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Genre </p>\n       <p class="modal-movie__value">').concat(f,'</p>\n      </li>\n      \n      </ul>  \n\n        <div class="modal-movie__about-wrapper">\n        <p class="modal-movie__about">About</p>\n        <p class="modal-movie__overview">').concat(u,'</p>\n        </div>\n        <div class="modal-movie__button-wrapper">\n          <button class="modal-movie__btn">add to Watched</button>\n          <button class="modal-movie__btn">add to queue</button>\n        </div>\n      </div>\n    </div>\n  </div>')}var p=function(){"use strict";function t(n){var r=this;e(a)(this,t),e(u)(this,"onThemeToggle",(function(){var e=r.getBoolean();e&&localStorage.setItem(r.THEME_STORAGE_KEY,r.Theme.DARK),e||localStorage.setItem(r.THEME_STORAGE_KEY,r.Theme.LIGHT),r.renderTheme()})),this.themeSwitcherEl=n,this.THEME_STORAGE_KEY="theme",this.Theme={LIGHT:"light-theme",DARK:"dark-theme"}}return e(i)(t,[{key:"renderTheme",value:function(){var e=this.getBoolean();e||(this.themeSwitcherEl.setAttribute("checked",!0),this.changeBodyClass(this.Theme.DARK,this.Theme.LIGHT)),e&&this.changeBodyClass(this.Theme.LIGHT,this.Theme.DARK)}},{key:"changeBodyClass",value:function(e,t){document.body.classList.add(e),document.body.classList.remove(t)}},{key:"getBoolean",value:function(){var e=localStorage.getItem(this.THEME_STORAGE_KEY);return e===this.Theme.LIGHT||!e}}]),t}(),g=function(){"use strict";function t(n){var r=n.switcher,o=n.checkbox,i=n.language,c=this;e(a)(this,t),e(u)(this,"onLanguageChange",(function(){var e=c.getBoolean();e&&localStorage.setItem(c.LANG_STORAGE_KEY,c.langs.EN),e||localStorage.setItem(c.LANG_STORAGE_KEY,c.langs.UA),c.renderLang()})),this.LANG_STORAGE_KEY="lang",this.element=r,this.checkbox=o,this.language=i,this.langs={UA:"uk-UK",EN:"en-US"}}return e(i)(t,[{key:"renderLang",value:function(){var e=this.getBoolean();e||(this.checkbox.setAttribute("checked",!0),this.changeSwitcherClass(this.langs.EN,this.langs.UA),this.language.innerHTML="EN",L()),e&&(this.changeSwitcherClass(this.langs.UA,this.langs.EN),this.language.innerHTML="UA",L())}},{key:"changeSwitcherClass",value:function(e,t){this.element.classList.add(e),this.element.classList.remove(t)}},{key:"getBoolean",value:function(){var e=localStorage.getItem(this.LANG_STORAGE_KEY);return e===this.langs.UA||!e}}]),t}(),y="movie-list",_={movies:document.querySelector(".films-list"),pagination:document.querySelector(".pagination-list"),themeSwitcher:document.querySelector(".theme-switch__toggle"),languageSwitcher:{switcher:document.querySelector(".language-switcher__label"),checkbox:document.querySelector(".language-switcher__checkbox"),language:document.querySelector(".language-switcher__lang")}},w=new s,b=new l({onShow:function(){window.addEventListener("keyup",S)},onClose:function(){window.removeEventListener("keyup",S)}}),E=new p(_.themeSwitcher),k=new g(_.languageSwitcher);function L(){return T.apply(this,arguments)}function T(){return(T=e(t)(e(r).mark((function t(){var n,o;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.fetchTrendingMovies("day");case 2:n=e.sent,o=n.results.map(f).join(""),A(JSON.stringify(n.results)),_.movies.innerHTML=o;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function S(e){"Escape"===e.code&&b.close()}function x(){return(x=e(t)(e(r).mark((function t(n){var o,a,i,c;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.target.closest(".films-card")){e.next=3;break}return e.abrupt("return");case 3:a=JSON.parse(localStorage.getItem(y)),i=a.find((function(e){return e.id===Number(o.id)})),c=v(i),b.open(c);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function A(e){localStorage.setItem(y,e)}_.languageSwitcher.switcher.addEventListener("change",k.onLanguageChange),_.themeSwitcher.addEventListener("change",E.onThemeToggle),_.movies.addEventListener("click",(function(e){return x.apply(this,arguments)})),k.renderLang(),E.renderTheme()}();
//# sourceMappingURL=index.7ee98e7d.js.map
