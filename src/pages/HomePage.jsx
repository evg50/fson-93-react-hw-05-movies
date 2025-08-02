import { useEffect, useState } from 'react';
import { getTrendMovies } from '../api/tmdb';
import { Link, useLocation } from 'react-router-dom';
export default function HomePages() {
  const [movies, setMovies] = useState([]);
  // const apiKey = '3dfb8ea53b1e527a3b1bbcb7933a1d94';
  const location = useLocation();
  // console.log('location in HomePage', location);
  useEffect(() => {
    handleTrend();
  }, []); // load trend movies one times after mounting
  const handleTrend = async () => {
    try {
      const moviesList = await getTrendMovies();
      // console.log('handler', movies.length);
      if (moviesList.length > 0 && moviesList) {
        // console.log(moviesList);
        setMovies(moviesList);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h1>Trend COMPONENT</h1>
      <ul>
        {movies.length > 0 &&
          movies.map(el => (
            <li key={el.id}>
              <Link
                state={{ from: location }}
                to={`/fson-93-react-hw-05-movies/movies/${el.id}`}
              >
                {el.original_title}
              </Link>

              {/* <img src={el.poster_path} alt="poster" /> */}
              <p>relise: {el.release_date}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
