import React, { useState } from 'react';
import { searchMovies } from '../Api';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const API_KEY = '022920c9bed48cfcb5dbfe94b7a0470f';

  const handleSearch = async () => {
    try {
      const results = await searchMovies(searchTerm, API_KEY);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
