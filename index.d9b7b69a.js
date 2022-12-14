function e(e){return e&&e.__esModule?e.default:e}var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,i,t){i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t;return e};const t=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"},{id:10759,name:"Action & Adventure"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"}];function o({id:e,poster_path:i,title:o,name:n,release_date:s,first_air_date:a,genre_ids:l}){if(!s&&!a)return;const c=s||a;return`<li class="films-list__item"> \n    <article class="films-card" id=${e}>\n    <div class="img-wrapper">\n      <img width="395" src=${`https://image.tmdb.org/t/p/original${i}`} alt=${o||n} />\n      </div>\n      <h2 class="films-card__title">${o||n}</h2>\n      <p class="films-card__genre">${l.map((e=>t.find((i=>i.id===e)))).map((({name:e})=>e)).join(", ")} | ${c.split("-")[0]}</p>\n    </article>\n  </li>`}function n({poster_path:e,genres:i,vote_average:t,vote_count:o,popularity:n,original_title:s,title:a,overview:l}){return`<div class="modal">\n  <button type="button" class="modal__close">\n  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n  <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n  </svg>\n  </button>\n    <div class="modal__img-wrapper">\n      <img width="375" src="${`https://image.tmdb.org/t/p/original${e}`}" alt="${a}" />\n    </div>\n    <div class="modal-movie__descr">      \n      <div class="modal-movie__info-weapper">\n      <h2 class="modal-movie__title">${a}</h2>  \n\n      <ul class="modal-movie__list list">\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Vote / Votes </p>\n       <p class="modal-movie__value">\n         <span class="modal-movie__value--accent">${t}</span> / ${o}\n       </p>\n      </li>\n\n      <li class="modal-movie__item">\n       <p class="modal-movie__key">Popularity </p>\n       <p class="modal-movie__value">${n}</p>\n      </li>\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Original Title </p>\n       <p class="modal-movie__value modal-movie__value--uppercase">${s}</p>\n      </li>\n\n      <li class="modal-movie__item">\n      <p class="modal-movie__key">Genre </p>\n       <p class="modal-movie__value">${i.map((e=>e.name)).join(", ")}</p>\n      </li>\n      \n      </ul>  \n\n        <div class="modal-movie__about-wrapper">\n        <p class="modal-movie__about">About</p>\n        <p class="modal-movie__overview">${l}</p>\n        </div>\n        <div class="modal-movie__button-wrapper">\n          <button class="modal-movie__btn">add to Watched</button>\n          <button class="modal-movie__btn">add to queue</button>\n        </div>\n      </div>\n    </div>\n  </div>`}console.log("genres",t);const s={movies:document.querySelector(".films-list"),pagination:document.querySelector(".pagination-list")},a=new class{async basicFetch(e){return await fetch(e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>{console.log("error",e)}))}async fetchTrendingMovies(){const e=`${this.BASE_URL}${this.TRENDING_MOVIES}?api_key=${this.API_KEY}&page=${this.pageToFetch}`;return await this.basicFetch(e)}async fetchSearchMoviesByID(e){const i=`${this.BASE_URL}${this.MOVIE_BY_ID}${e}?api_key=${this.API_KEY}`;return await this.basicFetch(i)}async fetchIDMoviesByKeyWord(e){const i=`${this.BASE_URL}${this.MOVIE_BY_KEYWORD}?api_key=${this.API_KEY}&page=${this.pageToFetch}&query=${e}`;return await this.basicFetch(i)}resetPage(){this._pageToFetch=0}get queryToFetch(){return this._queryToFetch}set queryToFetch(e){this._queryToFetch=e}get pageToFetch(){return this._pageToFetch}set pageToFetch(e){this._pageToFetch=e}constructor(){this._queryToFetch="",this._pageToFetch=1,this.BASE_URL="https://api.themoviedb.org/3/",this.API_KEY="9cca312caffd11f4ae9f11244d585025",this.TRENDING_MOVIES="trending/all/day",this.MOVIE_BY_ID="movie/",this.MOVIE_BY_KEYWORD="search/movie"}},l=new class{onClose(){}open(e){document.body.insertAdjacentHTML("beforeend",`<div class="backdrop">${e}</div>`),document.body.style.overflow="hidden",this.elem=document.querySelector(".backdrop"),this.closeIcon=document.querySelector(".modal__close"),this.elem.addEventListener("click",this.onbackDropClose),this.closeIcon.addEventListener("click",this.onCloseClick),this.onShow()}close(){document.querySelector(".backdrop").remove(),document.body.style.overflow="",console.log("this.onClose();",this.onClose),this.onClose()}constructor({onShow:t,onClose:o}){e(i)(this,"onbackDropClose",(e=>{e.target.classList.contains("backdrop")&&this.close()})),e(i)(this,"onCloseClick",(e=>{this.close()})),this.onShow=t,this.onClose=o,this.elem=null,this.closeIcon=null}}({onShow(){window.addEventListener("keyup",c)},onClose(){window.removeEventListener("keyup",c)}});function c(e){console.log(e.code),"Escape"===e.code&&l.close()}s.movies.addEventListener("click",(async function(e){const i=e.target.closest(".films-card");if(!i)return;const t=n(await a.fetchSearchMoviesByID(i.id));l.open(t)})),async function(){const e=(await a.fetchTrendingMovies()).results.map(o).join("");s.movies.innerHTML=e}();
//# sourceMappingURL=index.d9b7b69a.js.map
