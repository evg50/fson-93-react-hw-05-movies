const API_KEY = '3dfb8ea53b1e527a3b1bbcb7933a1d94';
const BASE_URL = 'https://api.themoviedb.org/3';

function handleResponse(res) {
  if (!res.ok) {
    throw new Error(`TMDb API error: ${res.status}`);
  }
  return res.json();
}

// Популярные фильмы
export async function fetchTrendingMovies() {
  const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return handleResponse(res).then(data => data.results);
}

// Поиск фильмов по ключевому слову
export async function searchMovies(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&language=en-US&page=1&include_adult=false`
  );
  return handleResponse(res).then(data => data.results);
}

// Детальная информация о фильме
export async function fetchMovieById(movieId) {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return handleResponse(res);
}

// Актёрский состав фильма
export async function fetchMovieCredits(movieId) {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return handleResponse(res).then(data => data.cast);
}

// Отзывы к фильму
export async function fetchMovieReviews(movieId) {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return handleResponse(res).then(data => data.results);
}
