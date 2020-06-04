export const API_KEY = '56d683041d5d1a0178e72b4a2ffc8e86';
export const BASE_URL = 'https://api.themoviedb.org/3/';

export const IMG_PATH = 'https://image.tmdb.org/t/p/';
export const imagePath = {
  original: `${IMG_PATH}original`,
  w500: `${IMG_PATH}w500`,
  w780: `${IMG_PATH}w780`,
  empty: 'https://ssl.pstatic.net/static/movie/2012/06/dft_img77x96_1.png',
};
export const YOUTUBE_PATH = 'https://www.youtube.com/watch?v=';
export const getYoutubeThumbnail = key =>
  `http://i.ytimg.com/vi/${key}/sddefault.jpg`;

export const AROUND_NOW_PLAYING = 'AROUND_NOW_PLAYING';
export const AROUND_POPULAR = 'AROUND_POPULAR';
export const AROUND_TOP_RATED = 'AROUND_TOP_RATED';
export const AROUND_UPCOMING = 'AROUND_UPCOMING';

export const language = 'language=en-US';

export const aroundQueries = {
  [AROUND_NOW_PLAYING]: 'movie/now_playing',
  [AROUND_POPULAR]: 'movie/popular',
  [AROUND_TOP_RATED]: 'movie/top_rated',
  [AROUND_UPCOMING]: 'movie/upcoming',
};

export const aroundList = [
  { text: 'Now Playing', state: 'prev', type: AROUND_NOW_PLAYING },
  { text: 'Popular', state: 'cur', type: AROUND_POPULAR },
  { text: 'Top Rated', state: 'next', type: AROUND_TOP_RATED },
  { text: 'Upcoming', state: 'none', type: AROUND_UPCOMING },
];
