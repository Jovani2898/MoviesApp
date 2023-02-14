import {IConfiguration} from '../../interfaces/configuration';
import {IMovie} from '../../interfaces/movie';
import {MoviesTypes} from '../types/movies';

export const updateConfiguration = (configuration: IConfiguration) => ({
  type: MoviesTypes.UPDATE_CONFIGURATION,
  payload: configuration,
});

export const saveTopRatedMovies = (movies: IMovie[]) => ({
  type: MoviesTypes.SAVE_TOP_RATED_MOVIES,
  payload: movies,
});

export const loadMoreTopRatedMovies = () => ({
  type: MoviesTypes.LOAD_MORE_TOP_RATED_MOVIES,
  payload: null,
});

export const loadMoreTopRatedMoviesFinished = () => ({
  type: MoviesTypes.LOAD_MORE_TOP_RATED_MOVIED_FINISHED,
  payload: null,
});

export const savePopularMovies = (movies: IMovie[]) => ({
  type: MoviesTypes.SAVE_POPULAR_MOVIES,
  payload: movies,
});

export const saveMovieGenres = (
  moviesGenres: {title: string; value: boolean}[],
) => ({
  type: MoviesTypes.FETCH_MOVIE_GENRES,
  payload: moviesGenres,
});

export const selectMovieGenre = (moviesGenre: string, value: boolean) => ({
  type: MoviesTypes.SELECT_FILTER_GENRE,
  payload: {title: moviesGenre, value},
});

export const searchChangeRating = (rating: number) => ({
  type: MoviesTypes.SEARCH_CHANGE_RATING,
  payload: rating,
});

export const searchChangeYear = (year: number) => ({
  type: MoviesTypes.SEARCH_CHANGE_YEAR,
  payload: year,
});
