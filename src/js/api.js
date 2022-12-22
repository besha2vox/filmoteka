//* Тренди ->
//* https://api.themoviedb.org/3/trending/all/day?api_key=9cca312caffd11f4ae9f11244d585025
//* Один фільм по id ->
//* https://api.themoviedb.org/3/movie/{movie_id}?api_key=9cca312caffd11f4ae9f11244d585025&language=en-US
//* Пошук за ключовими словами ->
//* https://api.themoviedb.org/3/search/movie?api_key=9cca312caffd11f4ae9f11244d585025&language=en-US&page=1

export class Fetch {
  constructor() {
    this.queryToFetch = '';
    this.pageToFetch = 1;

    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.API_KEY = '9cca312caffd11f4ae9f11244d585025';
    this.TRENDING_MOVIES = 'trending/all/';
    this.MOVIE_BY_ID = 'movie/';
    this.MOVIE_BY_KEYWORD = 'search/movie';
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

  async fetchTrendingMovies(tranding) {
    const url = `${this.BASE_URL}${this.TRENDING_MOVIES}${tranding}?api_key=${
      this.API_KEY
    }&page=${this.pageToFetch}&language=${this.getLanguage()}`;

    return await this.basicFetch(url);
  }

  async fetchSearchMoviesByID(id) {
    const url = `${this.BASE_URL}${this.MOVIE_BY_ID}${id}?api_key=${
      this.API_KEY
    }&language=${this.getLanguage()}`;
    return await this.basicFetch(url);
  }

  async fetchIDMoviesByKeyWord(keyword) {
    const url = `${this.BASE_URL}${this.MOVIE_BY_KEYWORD}?api_key=${
      this.API_KEY
    }&page=${this.pageToFetch}&query=${keyword}&language=${this.getLanguage()}`;
    return await this.basicFetch(url);
  }

  async fetchTreilerById(id) {
    const url = `${this.BASE_URL}movie/${id}/videos?api_key=${this.API_KEY}`;
    return await this.basicFetch(url);
  }

  resetPage() {
    this.pageToFetch = 1;
  }

  incrementPage() {
    this.pageToFetch += 1;
  }

  decrementPage() {
    if (this.pageToFetch <= 1) return;
    this.pageToFetch -= 1;
  }

  getLanguage() {
    return localStorage.getItem('lang');
  }
}
