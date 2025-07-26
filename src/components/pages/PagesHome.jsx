import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../api/tmdb';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingMovies()
      .then(setMovies)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Trending Today</h1>
      <ul className="space-y-2">
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              className="text-blue-600 hover:underline"
            >
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
