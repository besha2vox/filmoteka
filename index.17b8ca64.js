function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired76b;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired76b=i),i.register("oGzBH",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(e!==t)throw new TypeError("Private static access of wrong provenance")}})),i.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}}));var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,o){return a.default(e,t),a.default(o,"get"),l.default(e,o)};var a=r(i("oGzBH")),l=r(i("iaRLo"));function r(e){return e&&e.__esModule?e:{default:e}}class c{async basicFetch(e){return await fetch(e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>{console.log("error",e)}))}async fetchTrendingMovies(){const t=`${e(s)(c,c,d)}${e(s)(c,c,p)}?api_key=${e(s)(c,c,u)}&page=${this.pageToFetch}`;return await this.basicFetch(t)}async fetchSearchMoviesByID(t){const o=`${e(s)(c,c,d)}${e(s)(c,c,m)}${t}?api_key=${e(s)(c,c,u)}`;return await this.basicFetch(o)}async fetchIDMoviesByKeyWord(t){const o=`${e(s)(c,c,d)}${e(s)(c,c,v)}?api_key=${e(s)(c,c,u)}&page=${this.pageToFetch}&query=${t}`;return await this.basicFetch(o)}resetPage(){this._pageToFetch=0}get queryToFetch(){return this._queryToFetch}set queryToFetch(e){this._queryToFetch=e}get pageToFetch(){return this._pageToFetch}set pageToFetch(e){this._pageToFetch=e}constructor(){this._queryToFetch="",this._pageToFetch=1}}var d={writable:!0,value:"https://api.themoviedb.org/3/"},u={writable:!0,value:"9cca312caffd11f4ae9f11244d585025"},p={writable:!0,value:"trending/all/day"},m={writable:!0,value:"movie/"},v={writable:!0,value:"search/movie"},_={};Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o;return e};function h({id:e,poster_path:t,title:o,name:n,release_date:i,first_air_date:s,genre_ids:a}){if(!i&&!s)return;const l=i||s;return`<li class="films-list__item">\n    <article class="films-card" id=${e}>\n    <div class="img-wrapper">\n      <img width="395" src=${`https://image.tmdb.org/t/p/original${t}`} alt=${o||n} />\n      </div>\n      <h2 class="films-card__title">${o||n}</h2>\n      <p class="films-card__genre">${a.join(",")} | ${l.split("-")[0]}</p>\n    </article>\n  </li>`}function f({poster_path:e,genres:t,vote_average:o,vote_count:n,popularity:i,original_title:s,title:a,overview:l}){return`<div class="modal-movie">\n  <button type="button" class="modal-movie__close">\n  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n  <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n  </svg>\n  </button>\n    <div class="modal__img-wrapper">\n      <img width="375" src="${`https://image.tmdb.org/t/p/original${e}`}" alt="${a}" />\n    </div>\n    <div class="modal-movie__descr">      \n      <div class="modal-movie__info-weapper">\n      <h2 class="modal-movie__title">${a}</h2>  \n\n      <ul class="modal-movie__list list">\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Vote / Votes </p>\n       <p class="modal-movie__value">\n         <span class="modal-movie__value--accent">${o}</span> / ${n}\n       </p>\n      </li>\n\n      <li class="modal-movie__item">\n       <p class="modal-movie__key">Popularity </p>\n       <p class="modal-movie__value">${i}</p>\n      </li>\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Original Title </p>\n       <p class="modal-movie__value modal-movie__value--uppercase">${s}</p>\n      </li>\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Genre </p>\n       <p class="modal-movie__value">${t.map((e=>e.name)).join(", ")}</p>\n      </li>\n      \n      </ul>  \n\n        <div class="modal-movie__about-wrapper">\n        <p class="modal-movie__about">About</p>\n        <p class="modal-movie__overview">${l}</p>\n        </div>\n        <div class="modal-movie__button-wrapper">\n          <button class="modal-movie__btn">add to Watched</button>\n          <button class="modal-movie__btn">add to queue</button>\n        </div>\n      </div>\n    </div>\n  </div>`}const g={movies:document.querySelector(".films-list"),pagination:document.querySelector(".pagination-list")},w=new c,b=new class{onClose(){}open(e){document.body.insertAdjacentHTML("beforeend",`<div class="backdrop">${e}</div>`),document.body.style.overflow="hidden",this.elem=document.querySelector(".backdrop"),this.closeIcon=document.querySelector(".modal-movie__close"),this.elem.addEventListener("click",this.onbackDropClose),this.closeIcon.addEventListener("click",this.onCloseClick),this.onShow()}close(){document.querySelector(".backdrop").remove(),document.body.style.overflow="",console.log("this.onClose();",this.onClose),this.onClose()}constructor({onShow:t,onClose:o}){e(_)(this,"onbackDropClose",(e=>{e.target.classList.contains("backdrop")&&this.close()})),e(_)(this,"onCloseClick",(e=>{this.close()})),this.onShow=t,this.onClose=o,this.elem=null,this.closeIcon=null}}({onShow(){window.addEventListener("keyup",y)},onClose(){window.removeEventListener("keyup",y)}});function y(e){console.log(e.code),"Escape"===e.code&&b.close()}g.movies.addEventListener("click",(async function(e){const t=e.target.closest(".films-card");if(!t)return;const o=f(await w.fetchSearchMoviesByID(t.id));b.open(o)})),async function(){const e=(await w.fetchTrendingMovies()).results.map(h).join("");g.movies.innerHTML=e}();
//# sourceMappingURL=index.17b8ca64.js.map
