import {IMovie} from '../../interfaces/movie';
import {FAVORITES_TYPES} from '../types/favorites';

export const triggerFavorite = (movie: IMovie) => ({
  type: FAVORITES_TYPES.TRIGGER_FAVORITE,
  payload: movie,
});

export const existFavorite = (movieId: string) => ({
  type: FAVORITES_TYPES.EXIST_IN_FAVORITE,
  payload: movieId,
});

export const clearFavorite = () => ({
  type: FAVORITES_TYPES.CLEAR_FAVORITE,
  payload: null,
});
