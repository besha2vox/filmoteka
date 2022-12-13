export function modalTemplate({
  poster_path,
  genres,
  vote_average,
  vote_count,
  popularity,
  original_title,
  title,
  overview,
}) {
  const url = `https://image.tmdb.org/t/p/original${poster_path}`;
  const genresNames = genres.map(genre => genre.name).join(', ');

  return `<div class="modal-movie">
  <button type="button" class="modal__close">
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 8L22 22" stroke="black" stroke-width="2"/>
  <path d="M8 22L22 8" stroke="black" stroke-width="2"/>
  </svg>
  </button>
    <div class="modal__img-wrapper">
      <img width="375" src="${url}" alt="${title}" />
    </div>
    <div class="modal-movie__descr">      
      <div class="modal-movie__info-weapper">
      <h2 class="modal-movie__title">${title}</h2>  

      <ul class="modal-movie__list list">

      <li class="modal-movie__item">
      <p class="modal-movie__key">Vote / Votes </p>
       <p class="modal-movie__value">
         <span class="modal-movie__value--accent">${vote_average}</span> / ${vote_count}
       </p>
      </li>

      <li class="modal-movie__item">
       <p class="modal-movie__key">Popularity </p>
       <p class="modal-movie__value">${popularity}</p>
      </li>

      <li class="modal-movie__item">
      <p class="modal-movie__key">Original Title </p>
       <p class="modal-movie__value modal-movie__value--uppercase">${original_title}</p>
      </li>

      <li class="modal-movie__item">
      <p class="modal-movie__key">Genre </p>
       <p class="modal-movie__value">${genresNames}</p>
      </li>
      
      </ul>  

        <div class="modal-movie__about-wrapper">
        <p class="modal-movie__about">About</p>
        <p class="modal-movie__overview">${overview}</p>
        </div>
        <div class="modal-movie__button-wrapper">
          <button class="modal-movie__btn">add to Watched</button>
          <button class="modal-movie__btn">add to queue</button>
        </div>
      </div>
    </div>
  </div>`;
}
