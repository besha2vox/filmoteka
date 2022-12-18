import { genresEn, genresUa, checkGenresLanguage } from '../data/genres';

export function galleryTemplate({
  id,
  poster_path,
  title,
  name,
  release_date,
  first_air_date,
  genre_ids,
}) {
  if (!release_date && !first_air_date) return;
  const url = `https://image.tmdb.org/t/p/original${poster_path}`;
  const date = release_date || first_air_date;
  const genres = checkGenresLanguage();
  const genresArray = genre_ids.map(id =>
    genres.find(genre => genre.id === id)
  );
  const genresNames = genresArray
    .map(({ name }) => name)
    .slice(0, 2)
    .join(', ');

  return `<li class="films-list__item"> 
    <article class="films-card" id=${id}>
    <div class="img-wrapper">
      <img width="395" src=${url} alt=${title || name} />
      </div>
      <h2 class="films-card__title">${title || name}</h2>
      <p class="films-card__genre">${genresNames} | ${date.split('-')[0]}</p>
    </article>
  </li>`;
}
