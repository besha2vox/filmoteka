//* Тренди ->
//* https://api.themoviedb.org/3/trending/all/day?api_key=9cca312caffd11f4ae9f11244d585025
//* Один фільм по id ->
//* https://api.themoviedb.org/3/movie/{movie_id}?api_key=9cca312caffd11f4ae9f11244d585025&language=en-US
//* Пошук за ключовими словами ->
//* https://api.themoviedb.org/3/search/movie?api_key=9cca312caffd11f4ae9f11244d585025&language=en-US&page=1

export class Fetch {
  static #BASE_URL = 'https://api.themoviedb.org/3/';
  static #API_KEY = '9cca312caffd11f4ae9f11244d585025';
  static #TRENDING_MOVIES = 'trending/all/day';
  static #MOVIE_BY_ID = 'movie/';
  static #MOVIE_BY_KEYWORD = 'search/movie';

  constructor() {
    this._queryToFetch = '';
    this._pageToFetch = 1;
  }

  async basicFetch(url) {
    return await fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  async fetchTrendingMovies() {
    const url = `${Fetch.#BASE_URL}${Fetch.#TRENDING_MOVIES}?api_key=${
      Fetch.#API_KEY
    }&page=${this.pageToFetch}`;
    return await this.basicFetch(url);
  }

  async fetchSearchMoviesByID(id) {
    const url = `${Fetch.#BASE_URL}${Fetch.#MOVIE_BY_ID}${id}?api_key=${
      Fetch.#API_KEY
    }`;
    return await this.basicFetch(url);
  }

  async fetchIDMoviesByKeyWord(keyword) {
    const url = `${Fetch.#BASE_URL}${Fetch.#MOVIE_BY_KEYWORD}?api_key=${
      Fetch.#API_KEY
    }&page=${this.pageToFetch}&query=${keyword}`;
    return await this.basicFetch(url);
  }

  resetPage() {
    this._pageToFetch = 0;
  }

  get queryToFetch() {
    return this._queryToFetch;
  }

  set queryToFetch(keyword) {
    this._queryToFetch = keyword;
  }

  get pageToFetch() {
    return this._pageToFetch;
  }

  set pageToFetch(num) {
    this._pageToFetch = num;
  }
}
