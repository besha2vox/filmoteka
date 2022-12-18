export const genresEn = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
  {
    id: 10759,
    name: 'Action & Adventure',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 10762,
    name: 'Kids',
  },
  {
    id: 10763,
    name: 'News',
  },
  {
    id: 10764,
    name: 'Reality',
  },
  {
    id: 10765,
    name: 'Sci-Fi & Fantasy',
  },
  {
    id: 10766,
    name: 'Soap',
  },
  {
    id: 10767,
    name: 'Talk',
  },
  {
    id: 10768,
    name: 'War & Politics',
  },
];

export const genresUa = [
  {
    id: 10762,
    name: 'Дитячий',
  },
  {
    id: 10763,
    name: 'Новини',
  },
  {
    id: 10764,
    name: 'Реаліті-шоу',
  },
  {
    id: 10765,
    name: 'Науково фантастичний',
  },
  {
    id: 10766,
    name: 'Мильна опера',
  },
  {
    id: 10767,
    name: 'Ток-шоу',
  },
  {
    id: 10768,
    name: 'Політика та війна',
  },
  {
    id: 28,
    name: 'Бойовик',
  },
  {
    id: 12,
    name: 'Пригоди',
  },
  {
    id: 16,
    name: 'Мультфільм',
  },
  {
    id: 35,
    name: 'Комедія',
  },
  {
    id: 80,
    name: 'Кримінал',
  },
  {
    id: 99,
    name: 'Документальний',
  },
  {
    id: 18,
    name: 'Драма',
  },
  {
    id: 10751,
    name: 'Сімейний',
  },
  {
    id: 14,
    name: 'Фентезі',
  },
  {
    id: 36,
    name: 'Історичний',
  },
  {
    id: 27,
    name: 'Жахи',
  },
  {
    id: 10402,
    name: 'Музика',
  },
  {
    id: 9648,
    name: 'Детектив',
  },
  {
    id: 10749,
    name: 'Мелодрама',
  },
  {
    id: 878,
    name: 'Фантастика',
  },
  {
    id: 10770,
    name: 'Телефільм',
  },
  {
    id: 53,
    name: 'Трилер',
  },
  {
    id: 10752,
    name: 'Військовий',
  },
  {
    id: 37,
    name: 'Вестерн',
  },
  {
    id: 10759,
    name: 'Бойовик і пригоди',
  },
];

export function checkGenresLanguage() {
  const language = localStorage.getItem('lang');

  if (language === 'en-US') return genresEn;

  return genresUa;
}
