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
  movieGenres: {title: string; value: boolean; id: number}[],
) => ({
  type: MoviesTypes.FETCH_MOVIE_GENRES,
  payload: movieGenres,
});

export const selectMovieGenre = (movieGenre: string, value: boolean) => ({
  type: MoviesTypes.SELECT_FILTER_GENRE,
  payload: {title: movieGenre, value},
});

export const searchChangeRating = (rating: number) => ({
  type: MoviesTypes.SEARCH_CHANGE_RATING,
  payload: rating,
});

export const searchChangeYear = (year: number) => ({
  type: MoviesTypes.SEARCH_CHANGE_YEAR,
  payload: year,
});

export const searchChangeTitle = (title: string | null) => ({
  type: MoviesTypes.SEARCH_CHANGE_TITLE,
  payload: title,
});

export const searchSaveResult = (movies: IMovie[]) => ({
  type: MoviesTypes.SEARCH_SAVE_SEARCH_RESULT,
  payload: movies,
});

export const searchFilterClear = () => ({
  type: MoviesTypes.SEARCH_FILTER_CLEAR,
  payload: null,
});

export const searchStartLoading = () => ({
  type: MoviesTypes.SEARCH_START_LOADING,
  payload: null,
});
