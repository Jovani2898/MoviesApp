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
