import { checkGenresLanguage } from '../data/genres';

export function modalTemplate({
  poster_path,
  // genres,
  vote_average,
  vote_count,
  popularity,
  original_title,
  original_name,
  title,
  name,
  overview,
  genre_ids,
}) {
  const url = `https://image.tmdb.org/t/p/original${poster_path}`;
  // const genresNames = genres.map(genre => genre.name).join(', ');

  const genres = checkGenresLanguage();
  const genresArray = genre_ids.map(genreId =>
    genres.find(genre => genre.id === genreId)
  );
  const genresNames = genresArray
    .map(({ name }) => name)
    .slice(0, 2)
    .join(', ');

  const isUkrainian = localStorage.getItem('lang') === 'uk-UK';

  return `<div class="modal-movie">
    <img class="poster" width="375" src="${url}" alt="${title || name}" />
    <div class="modal-movie__descr">   
      
      <div class="modal-movie__info-weapper">
      <h2 class="modal-movie__title">${title || name}</h2>  

      <ul class="modal-movie__list list">

      <li class="modal-movie__item">
      <p class="modal-movie__key">${
        isUkrainian ? 'Оцінка / Оцінок' : 'Vote / Votes'
      } </p>
       <p class="modal-movie__value">
         <span class="modal-movie__value--accent">${vote_average}</span> / ${vote_count}
       </p>
      </li>

      <li class="modal-movie__item">
       <p class="modal-movie__key">${
         isUkrainian ? 'Популярність' : 'Popularity'
       } </p>
       <p class="modal-movie__value">${popularity}</p>
      </li>

      <li class="modal-movie__item">
      <p class="modal-movie__key">${
        isUkrainian ? 'Оригінальна назва' : 'Original Title'
      }  </p>
       <p class="modal-movie__value modal-movie__value--uppercase">${
         original_title || original_name
       }</p>
      </li>

      <li class="modal-movie__item">
      <p class="modal-movie__key">${isUkrainian ? 'Жанр' : 'Genre'}  </p>
       <p class="modal-movie__value">${genresNames}</p>
      </li>
      
      </ul>  

        <div class="modal-movie__about-wrapper">
        <p class="modal-movie__about">${
          isUkrainian ? 'Про що фільм' : 'About'
        }</p>
        <p class="modal-movie__overview">${overview}</p>
        </div>
        
        <div class="trailer-wrapper"></div>

        <div class="modal-movie__button-wrapper">
          <button class="modal-movie__btn">${
            isUkrainian ? 'Додати в переглянуті' : 'add to Watched'
          } </button>
          <button class="modal-movie__btn">${
            isUkrainian ? 'Додати в чергу' : 'add to queue'
          } </button>
        </div>
      </div>
    </div>
  </div>`;
}
