import { useEffect, useState } from 'react';
import { getTrendMovies } from '../api/tmdb';
export default function HomePages() {
  const [movies, setMovies] = useState([]);
  // const apiKey = '3dfb8ea53b1e527a3b1bbcb7933a1d94';

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
              {el.original_title}
              {/* <img src={el.poster_path} alt="poster" /> */}
              <p>relise: {el.release_date}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
