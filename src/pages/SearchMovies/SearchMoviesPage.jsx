import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchMovies } from '../../api/tmdb';

export default function SearchMoviesPage() {
  const [searchMovie, setSearchMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [moviesArr, setMoviesArr] = useState([]);
  // Http request
  const getMovie = async query => {
    if (!query) {
      return;
    }
    // console.log('query=', query);
    const movies = await searchMovies(query);
    if (movies && movies.length > 0) {
      // console.log(movies);

      setMoviesArr(movies);
    }
  };

  useEffect(() => {
    console.log('work useEffect');
    const query = searchParams.get('query');
    if (!query) return;
    getMovie(query);
  }, [searchParams]);

  const handleSearch = e => {
    e.preventDefault();
    // after set SearchParams
    // console.log(searchMovie);
    if (searchMovie) {
      setSearchParams({ query: searchMovie });
      getMovie(); //
    }
  };
  // fn hancle click for details movie
  const handleMovie = e => {
    console.log(e.target.id);
    const idMovie = e.target.id;
    navigate(`/movies/${idMovie}`);
    // setSearchParams({ query: e.target.id });
  };
  return (
    <div>
      SearchMoviesPage
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={e => setSearchMovie(e.target.value)}
          name="searchInput"
          value={searchMovie}
        />
        <button type="submit">search</button>
      </form>
      <ul onClick={handleMovie}>
        {moviesArr.length > 0 &&
          moviesArr.map(el => (
            <li key={el.id} id={el.id}>
              {el.original_title}
              {/* <img src={el.poster_path} alt="poster" /> */}
              <p>relise: {el.release_date}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
