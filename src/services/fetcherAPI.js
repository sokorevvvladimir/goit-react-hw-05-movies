import Axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'a4bc470e2c9f83a606b7ff9bda48baef';
let page = 1;

const fetchPopularMovies = async () => {
  const response = await Axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY}&page=${page}`
  );

  return response;
};

const fetchMoviesById = async id => {
  const response = await fetchPopularMovies();
  const movies = response.data.results;
  const result = movies.find(movie => movie.id === Number(id));
  return result;
};

const fetchGenres = async () => {
  const response = await Axios.get(
    `${BASE_URL}genre/movie/list?api_key=${KEY}`
  );
  return response;
};

// const fetchMoviesById = async searchQuery => {
//   const response = await Axios.get(
//     `${BASE_URL}/search/movie?api_key=${KEY}&query=${searchQuery}`
//   );

//   return response;
// };

export { fetchPopularMovies, fetchMoviesById, fetchGenres };
