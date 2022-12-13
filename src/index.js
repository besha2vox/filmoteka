import { Fetch } from './js/api';
import { Modal } from './js/modal';
import { galleryTemplate } from './js/templates/gallery-template';
import { modalTemplate } from './js/templates/modal-template';

const refs = {
  movies: document.querySelector('.films-list'),
  pagination: document.querySelector('.pagination-list'),
};

const api = new Fetch();
const modal = new Modal({
  onShow() {
    window.addEventListener('keyup', onEscClose);
  },
  onClose() {
    window.removeEventListener('keyup', onEscClose);
  },
});

refs.movies.addEventListener('click', onMovieClick);

getTranding();

async function getTranding() {
  const movies = await api.fetchTrendingMovies();
  const template = movies.results.map(galleryTemplate).join('');

  refs.movies.innerHTML = template;
  //   refs.pagination.innerHTML = ;
}

function onEscClose(e) {
  console.log(e.code);
  if (e.code !== 'Escape') return;
  modal.close();
}

async function onMovieClick(e) {
  const article = e.target.closest('.films-card');
  if (!article) return;

  const movie = await api.fetchSearchMoviesByID(article.id);
  const markup = modalTemplate(movie);
  modal.open(markup);
}
