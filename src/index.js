import { Fetch } from './js/api';
import { Modal } from './js/modal';
import { galleryTemplate } from './js/templates/gallery-template';
import { modalTemplate } from './js/templates/modal-template';
import { ThemeSwitcher } from './js/theme-switcher';
import { LanguageSwitcher } from './js/language-switcher';

const MOVIE_STORAGE_KEY = 'movie-list';

const refs = {
  movies: document.querySelector('.films-list'),
  pagination: document.querySelector('.pagination-list'),
  themeSwitcher: document.querySelector('.theme-switch__toggle'),
  languageSwitcher: {
    switcher: document.querySelector('.language-switcher__label'),
    checkbox: document.querySelector('.language-switcher__checkbox'),
    language: document.querySelector('.language-switcher__lang'),
  },
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
const themeSwitcher = new ThemeSwitcher(refs.themeSwitcher);
const languageSwitcher = new LanguageSwitcher(refs.languageSwitcher);

refs.languageSwitcher.switcher.addEventListener(
  'change',
  languageSwitcher.onLanguageChange
);
refs.themeSwitcher.addEventListener('change', themeSwitcher.onThemeToggle);
refs.movies.addEventListener('click', onMovieClick);

languageSwitcher.renderLang();
themeSwitcher.renderTheme();
// getTranding();

export async function getTranding() {
  const movies = await api.fetchTrendingMovies('day');
  const template = movies.results.map(galleryTemplate).join('');
  setMovieLocalStorage(JSON.stringify(movies.results));

  refs.movies.innerHTML = template;
  // refs.pagination.innerHTML = ;
}

function onEscClose(e) {
  if (e.code !== 'Escape') return;
  modal.close();
}

async function onMovieClick(e) {
  const article = e.target.closest('.films-card');
  if (!article) return;

  // const movie = await api.fetchSearchMoviesByID(article.id);
  const movies = JSON.parse(localStorage.getItem(MOVIE_STORAGE_KEY));
  const movie = movies.find(movie => {
    return movie.id === Number(article.id);
  });

  const markup = modalTemplate(movie);
  modal.open(markup);
}

function setMovieLocalStorage(movies) {
  localStorage.setItem(MOVIE_STORAGE_KEY, movies);
}
