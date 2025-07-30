import { getMovieReview } from 'api/tmdb';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function ReviewPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const movieReview = async () => {
    console.log('movieReview start', movieId);
    const movieReviews = await getMovieReview(movieId);
    if (movieReviews) {
      console.log('movieReview', movieReviews);
      setReviews(movieReviews);
    }
  };

  useEffect(() => {
    if (movieId) movieReview();
  }, [movieId]);
  return (
    <div>
      <h1>Review</h1>
      <ul>
        {reviews.length > 0 &&
          reviews.map(el => (
            <li key={el.id}>
              <p>{el.author}</p>
              <p>{el.content}</p>
              <p>---------------</p>
            </li>
          ))}
      </ul>
      {reviews.length === 0 && <p>we dont have any review for this movie</p>}
    </div>
  );
}
