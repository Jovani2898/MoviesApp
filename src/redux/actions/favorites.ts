import {IMovie} from '../../interfaces/movie';
import {FAVORITES_TYPES} from '../types/favorites';

export const addFavorite = (movie: IMovie) => ({
  type: FAVORITES_TYPES.ADD_FAVORITE,
  payload: movie,
});

export const removeFavorite = (movieId: string) => ({
  type: FAVORITES_TYPES.REMOVE_FAVORITE,
  payload: movieId,
});

export const clearFavorite = () => ({
  type: FAVORITES_TYPES.CLEAR_FAVORITE,
  payload: null,
});
