import { useState, useEffect } from 'react';
import {
  Link,
  useSearchParams,
  // useNavigate,
  useLocation,
} from 'react-router-dom';
import { searchMovies } from '../api/tmdb';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  // Для сохранения параметров в URL (чтобы по reload сохранить поиск)
  const [searchParams, setSearchParams] = useSearchParams();
  // const navigate = useNavigate();
  const location = useLocation();

  // При загрузке компонента — если есть query в URL, запускаем поиск
  const queryParam = searchParams.get('query');

  useEffect(() => {
    if (queryParam) {
      setQuery(queryParam);
      performSearch(queryParam);
    }
  }, [queryParam]);

  async function performSearch(q) {
    try {
      const movies = await searchMovies(q);
      setResults(movies);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResults([]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    // обновляем URL
    setSearchParams({ query });
    performSearch(query);
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Search Movies</h1>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          value={query}
          placeholder="Enter movie name"
          onChange={e => setQuery(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-600 mb-4">Error: {error}</p>}

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {results.length === 0 && !error && (
          <p>No results found. Try searching for something.</p>
        )}
        {results.map(movie => (
          <li
            key={movie.id}
            className="bg-white shadow rounded overflow-hidden"
          >
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }} // для возврата назад на страницу поиска
              className="block"
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : 'https://via.placeholder.com/500x750?text=No+Image'
                }
                alt={movie.title}
                className="w-full h-auto"
              />
              <div className="p-2">
                <h3 className="text-sm font-semibold">{movie.title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
