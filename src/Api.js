export const getTrendingMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=022920c9bed48cfcb5dbfe94b7a0470f`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const searchMovies = async query => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=022920c9bed48cfcb5dbfe94b7a0470f&query=${query}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=022920c9bed48cfcb5dbfe94b7a0470f`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const getMovieCast = async (movieId, apiKey) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
    );
    const data = await response.json();
    return data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
};

export const getMovieReviews = async (movieId, apiKey) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};

export const getActorDetails = async (actorId, apiKey) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching actor details:', error);
    throw error;
  }
};
