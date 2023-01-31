import {IConfiguration} from '../interfaces/configuration';

export const useMovies = (configuration: IConfiguration | null) => {
  const fetchTopRatedMovies = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=eaec283d031b691056914c24ed9aa5e6',
    )
      .then(res => res.json)
      .then(res => res.results);
    return response;
  };
  const fetchSingleMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=eaec283d031b691056914c24ed9aa5e6`,
    ).then(res => res.json);
    return response;
  };
  const fetchMovieActors = async (movieId: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=eaec283d031b691056914c24ed9aa5e6`,
    ).then(res => res.json());
    return response;
  };
  const fetchMovieImages = async (imagePath: string, imageSize: string) => {
    const response = await fetch(
      configuration?.images.base_url + imageSize + imagePath,
    ).then(res => res.json);
    return response;
  };
  return {
    configuration,
    fetchTopRatedMovies,
    fetchSingleMovie,
    fetchMovieActors,
    fetchMovieImages,
  };
};
