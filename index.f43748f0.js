function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o;return e};function o({id:e,poster_path:t,title:o,name:s,release_date:i,first_air_date:n,genre_ids:a}){if(!i&&!n)return;const l=i||n;return`<li class="films-list__item">\n    <article class="films-card" id=${e}>\n    <div class="img-wrapper">\n      <img width="395" src=${`https://image.tmdb.org/t/p/original${t}`} alt=${o||s} />\n      </div>\n      <h2 class="films-card__title">${o||s}</h2>\n      <p class="films-card__genre">${a.join(",")} | ${l.split("-")[0]}</p>\n    </article>\n  </li>`}function s({poster_path:e,genres:t,vote_average:o,vote_count:s,popularity:i,original_title:n,title:a,overview:l}){return`<div class="modal-movie">\n  <button type="button" class="modal__close">\n  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n  <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n  </svg>\n  </button>\n    <div class="modal__img-wrapper">\n      <img width="375" src="${`https://image.tmdb.org/t/p/original${e}`}" alt="${a}" />\n    </div>\n    <div class="modal-movie__descr">      \n      <div class="modal-movie__info-weapper">\n      <h2 class="modal-movie__title">${a}</h2>  \n\n      <ul class="modal-movie__list list">\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Vote / Votes </p>\n       <p class="modal-movie__value">\n         <span class="modal-movie__value--accent">${o}</span> / ${s}\n       </p>\n      </li>\n\n      <li class="modal-movie__item">\n       <p class="modal-movie__key">Popularity </p>\n       <p class="modal-movie__value">${i}</p>\n      </li>\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Original Title </p>\n       <p class="modal-movie__value modal-movie__value--uppercase">${n}</p>\n      </li>\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Genre </p>\n       <p class="modal-movie__value">${t.map((e=>e.name)).join(", ")}</p>\n      </li>\n      \n      </ul>  \n\n        <div class="modal-movie__about-wrapper">\n        <p class="modal-movie__about">About</p>\n        <p class="modal-movie__overview">${l}</p>\n        </div>\n        <div class="modal-movie__button-wrapper">\n          <button class="modal-movie__btn">add to Watched</button>\n          <button class="modal-movie__btn">add to queue</button>\n        </div>\n      </div>\n    </div>\n  </div>`}const i={movies:document.querySelector(".films-list"),pagination:document.querySelector(".pagination-list")},n=new class{async basicFetch(e){return await fetch(e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>{console.log("error",e)}))}async fetchTrendingMovies(){const e=`${this.BASE_URL}${this.TRENDING_MOVIES}?api_key=${this.API_KEY}&page=${this.pageToFetch}`;return await this.basicFetch(e)}async fetchSearchMoviesByID(e){const t=`${this.BASE_URL}${this.MOVIE_BY_ID}${e}?api_key=${this.API_KEY}`;return await this.basicFetch(t)}async fetchIDMoviesByKeyWord(e){const t=`${this.BASE_URL}${this.MOVIE_BY_KEYWORD}?api_key=${this.API_KEY}&page=${this.pageToFetch}&query=${e}`;return await this.basicFetch(t)}resetPage(){this._pageToFetch=0}get queryToFetch(){return this._queryToFetch}set queryToFetch(e){this._queryToFetch=e}get pageToFetch(){return this._pageToFetch}set pageToFetch(e){this._pageToFetch=e}constructor(){this._queryToFetch="",this._pageToFetch=1,this.BASE_URL="https://api.themoviedb.org/3/",this.API_KEY="9cca312caffd11f4ae9f11244d585025",this.TRENDING_MOVIES="trending/all/day",this.MOVIE_BY_ID="movie/",this.MOVIE_BY_KEYWORD="search/movie"}},a=new class{onClose(){}open(e){document.body.insertAdjacentHTML("beforeend",`<div class="backdrop">${e}</div>`),document.body.style.overflow="hidden",this.elem=document.querySelector(".backdrop"),this.closeIcon=document.querySelector(".modal__close"),this.elem.addEventListener("click",this.onbackDropClose),this.closeIcon.addEventListener("click",this.onCloseClick),this.onShow()}close(){document.querySelector(".backdrop").remove(),document.body.style.overflow="",console.log("this.onClose();",this.onClose),this.onClose()}constructor({onShow:o,onClose:s}){e(t)(this,"onbackDropClose",(e=>{e.target.classList.contains("backdrop")&&this.close()})),e(t)(this,"onCloseClick",(e=>{this.close()})),this.onShow=o,this.onClose=s,this.elem=null,this.closeIcon=null}}({onShow(){window.addEventListener("keyup",l)},onClose(){window.removeEventListener("keyup",l)}});function l(e){console.log(e.code),"Escape"===e.code&&a.close()}i.movies.addEventListener("click",(async function(e){const t=e.target.closest(".films-card");if(!t)return;const o=s(await n.fetchSearchMoviesByID(t.id));a.open(o)})),async function(){const e=(await n.fetchTrendingMovies()).results.map(o).join("");i.movies.innerHTML=e}();
//# sourceMappingURL=index.f43748f0.js.map
