import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  Container,
  Links,
  List,
  ToggleContainer,
  MovieContainer,
  PosterContainer,
  DetailsContainer,
} from './Main.Styled';
import {
  getMovieDetails,
  getMovieCast,
  getActorDetails,
  getMovieReviews,
} from '../Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [reviews, setReviews] = useState([]);
  const API_KEY = '022920c9bed48cfcb5dbfe94b7a0470f';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId, API_KEY);
        setMovie(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    const fetchMovieCast = async () => {
      try {
        const castData = await getMovieCast(movieId, API_KEY);
        setCast(castData);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchMovieDetails();
    fetchMovieCast();
  }, [movieId]);

  const handleToggleCast = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const handleToggleReviews = async () => {
    try {
      if (!showReviews) {
        const reviewsData = await getMovieReviews(movieId, API_KEY);
        setReviews(reviewsData);
      } else {
        setReviews([]);
      }
      setShowReviews(!showReviews);
      setShowCast(false);
    } catch (error) {
      console.error('Error toggling reviews:', error);
    }
  };

  const handleActorClick = async actorId => {
    try {
      const actorDetails = await getActorDetails(actorId, API_KEY);
      console.log(actorDetails);
    } catch (error) {
      console.error('Error fetching actor details:', error);
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Links>
      <MovieContainer>
        <PosterContainer>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
        </PosterContainer>
        <DetailsContainer>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map(genre => (
              <List key={genre.id}>{genre.name}</List>
            ))}
          </ul>
          <ToggleContainer>
            <p onClick={handleToggleCast}>
              {showCast ? 'Hide Cast' : 'Show Cast'}
            </p>
            <p onClick={handleToggleReviews}>
              {showReviews ? 'Hide Reviews' : 'Show Reviews'}
            </p>
          </ToggleContainer>
        </DetailsContainer>
      </MovieContainer>
      <div>
        {showCast && (
          <div>
            <h3>Cast</h3>
            <List>
              {cast.map(actor => (
                <li key={actor.id} onClick={() => handleActorClick(actor.id)}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                    style={{
                      width: '50px',
                      height: 'auto',
                      marginRight: '10px',
                    }}
                  />
                  {actor.name}
                </li>
              ))}
            </List>
          </div>
        )}
        {showReviews && (
          <div>
            <h3>Reviews</h3>
            <List>
              {reviews.map(review => (
                <li key={review.id}>
                  <p>{review.author}</p>
                  <p>{review.content}</p>
                </li>
              ))}
            </List>
          </div>
        )}
      </div>
    </Container>
  );
};

export default MovieDetails;
