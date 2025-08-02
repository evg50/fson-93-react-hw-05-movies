import { useEffect, useState } from 'react';
import {
  useSearchParams,
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom';
import { searchMovies } from '../../api/tmdb';

export default function SearchMoviesPage() {
  const [searchMovie, setSearchMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  // const navigate = useNavigate();
  const [moviesArr, setMoviesArr] = useState([]);
  const location = useLocation();
  console.log('location in searchMoviePage', location);
  // Http request
  const getMovie = async query => {
    if (!query) {
      return;
    }
    // console.log('query=', query);
    const movies = await searchMovies(query);
    if (movies && movies.length > 0) {
      //movies arr
      console.log(movies);

      setMoviesArr(movies);
    }
  };

  useEffect(() => {
    // console.log('work useEffect');
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
    }
  };
  // fn hancle click for details movie
  // const handleMovie = e => {
  //   console.log(e.target.id);
  //   const idMovie = e.target.id;
  //   navigate(`/fson-93-react-hw-05-movies/movies/${idMovie}`);
  // };
  return (
    <div>
      <h1>Search COMPONENT </h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={e => setSearchMovie(e.target.value)}
          name="searchInput"
          value={searchMovie}
        />
        <button type="submit">Search</button>
      </form>
      {/* <ul onClick={handleMovie}> */}
      <ul>
        {moviesArr.length > 0 &&
          moviesArr.map(el => (
            <li key={el.id} id={el.id}>
              <Link
                state={{ from: location }}
                to={`/fson-93-react-hw-05-movies/movies/${el.id}`}
              >
                {el.original_title}
              </Link>

              {/* <p>id: {el.id}</p> */}
              {/* <img src={el.poster_path} alt="poster" /> */}
              {/* <p>relise: {el.release_date}</p> */}
            </li>
          ))}
      </ul>
    </div>
  );
}
