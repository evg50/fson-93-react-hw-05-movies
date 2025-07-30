import { getMovie } from 'api/tmdb';
import { useEffect, useState } from 'react';
import {
  useSearchParams,
  useNavigate,
  useParams,
  Link,
  Outlet,
} from 'react-router-dom';

export default function MovieDetailsPage() {
  const [movieInfo, setMovieInfo] = useState();
  // const [SearchParams, useSearchParams] = useSearchParams();

  //end importn
  let { movieId } = useParams(); //retrive id  from Url
  // console.log(movieId);
  // http request  to take {} movie
  useEffect(() => {
    // fn getMovie
    if (!movieId) return;
    movieDetails();
  }, [movieId]);

  const movieDetails = async () => {
    // if (!movieId) return;
    const myMovie = await getMovie(movieId);
    if (myMovie) {
      // console.log('myMovie', myMovie);
      setMovieInfo(myMovie);
    }
  };

  return (
    <div>
      <h1>Movie Detail COMPONENT</h1>

      {movieInfo && (
        <div>
          <p>title:{movieInfo.title}</p>
          <p>popularity: {movieInfo.popularity}</p>
          <p>description: {movieInfo.overview}</p>
          <p>release date: {movieInfo.release_date}</p>
          {movieInfo.genres.length > 0 && (
            <p>
              genres:{' '}
              {movieInfo.genres.map(el => (
                <span key={el.id}>{el.name} </span>
              ))}
            </p>
          )}

          {/* <p>budget: {movieInfo.budget}</p> */}
          <p>Additional information</p>
          <Link to={`/fson-93-react-hw-05-movies/movies/${movieId}/cast`}>
            Cast{' '}
          </Link>
          <Link to={`/fson-93-react-hw-05-movies/movies/${movieId}/review`}>
            Review
          </Link>
          <Outlet />
        </div>
      )}
    </div>
  );
}
