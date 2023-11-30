const key = "5e2fa37a7b850e90efed961784822173";

const requests = {
  landingMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  ratedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  trendingMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=2`,
};

export default requests;

export const imageBaseUrl = "https://image.tmdb.org/t/p/original";
export const rowimageBaseUrl = "https://image.tmdb.org/t/p/w500";
