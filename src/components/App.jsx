/* eslint-disable no-unused-vars */

import { Routes, Route, Link, useParams } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import SearchMoviesPage from '../pages/SearchMovies/SearchMoviesPage';
import MovieDetailsPage from 'pages/MovieDetails/MovieDetailsPage';
import CastPage from 'pages/Cast/CastPage';
import ReviewPage from 'pages/Review/ReviewPage';
export const App = () => {
  // const location = useLocation();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <nav>
        <Link
          // state={{ from: location }}
          to="/fson-93-react-hw-05-movies/"
        >
          Home{' '}
        </Link>
        <Link
          // state={{ from: location }}
          to="/fson-93-react-hw-05-movies/movies/"
        >
          {' '}
          Movies{' '}
        </Link>
        {/* <Link to="/about">About</Link>
        <Link to="/products">Products</Link> */}
      </nav>

      <Routes>
        {/* <Route path="/" element={<Test />} /> */}
        <Route path="/fson-93-react-hw-05-movies/" element={<HomePage />} />
        <Route
          path="/fson-93-react-hw-05-movies/movies/"
          element={<SearchMoviesPage />}
        />
        <Route
          path="/fson-93-react-hw-05-movies/movies/:movieId"
          element={<MovieDetailsPage />}
        >
          <Route
            path="/fson-93-react-hw-05-movies/movies/:movieId/cast"
            element={<CastPage />}
          />
          <Route
            path="/fson-93-react-hw-05-movies/movies/:movieId/review"
            element={<ReviewPage />}
          />
        </Route>
      </Routes>
    </div>
  );
};
