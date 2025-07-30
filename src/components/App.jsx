/* eslint-disable no-unused-vars */

import { Routes, Route, Link, useParams } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import SearchMoviesPage from '../pages/SearchMovies/SearchMoviesPage';
import MovieDetailsPage from 'pages/MovieDetails/MovieDetailsPage';
export const App = () => {
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
      {/* <nav>
        <Link to="/">Test</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <div>Now showing product with id - {productId}</div>
      React */}
      <Routes>
        {/* <Route path="/" element={<Test />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/" element={<SearchMoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
};
