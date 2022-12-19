import { Fetch } from './api';
import { trailerTemplate } from './templates/iframe-trailer';

const MOVIE_STORAGE_KEY = 'movie';

const api = new Fetch();

async function searchTrailer(id) {
  const trailers = await api.fetchTreilerById(id);

  if (!trailers || !trailers.results[0]) return '';

  const trailer = trailers.results.find(video => video.type === 'Trailer');

  return await trailerTemplate(trailer.key);
}

export async function renderTrailer(id) {
  const element = document.querySelector('.trailer-wrapper');
  const template = await searchTrailer(id);

  element.innerHTML = template;
}
