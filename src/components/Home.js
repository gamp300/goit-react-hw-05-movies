import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../Api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = '022920c9bed48cfcb5dbfe94b7a0470f';

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies(API_KEY);
        setMovies(trendingMovies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
