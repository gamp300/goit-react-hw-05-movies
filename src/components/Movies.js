import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Links, List } from './Main.Styled';
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

  const handleKeyDown = async event => {
    if (event.key === 'Enter') {
      await handleSearch();
    }
  };

  return (
    <Container>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Links>
      <h2>Search Movies</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(movie => (
          <List key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </List>
        ))}
      </ul>
    </Container>
  );
};

export default Movies;
