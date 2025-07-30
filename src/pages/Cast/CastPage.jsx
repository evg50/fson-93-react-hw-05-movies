import { getMovieCredential } from 'api/tmdb';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CastPage() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  const movieCredential = async () => {
    // console.log('movieCredential start', movieId);
    const movieCast = await getMovieCredential(movieId);
    if (movieCast.length > 0) {
      console.log('movieCast', movieCast);
      setCast(movieCast);
    }
  };

  useEffect(() => {
    movieCredential();
  }, []);

  return (
    <div>
      <h1>Cast</h1>
      <ul>
        {cast &&
          cast.length > 0 &&
          cast.map(el => (
            <li key={el.id}>
              {el.name}
              {el.id}
            </li>
          ))}
      </ul>
    </div>
  );
}
