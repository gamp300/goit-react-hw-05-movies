import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import MovieDetails from './components/MoviesDetails';

export const App = () => {
  return (
    <Router basename="/goit-react-hw-05-movies">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};
