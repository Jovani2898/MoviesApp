import {IFavorites} from '../../interfaces/favorites';
import {IMovie} from '../../interfaces/movie';
import {FAVORITES_TYPES} from '../types/favorites';

const initialState: IFavorites = {
  data: [],
};

export const FavoritesReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case FAVORITES_TYPES.ADD_FAVORITE:
      return {data: [...state.data, action.payload]};
    case FAVORITES_TYPES.REMOVE_FAVORITE:
      return {
        data: state.data.filter((movie: IMovie) => movie.id !== action.payload),
      };
    case FAVORITES_TYPES.CLEAR_FAVORITE:
      return {data: []};
    default:
      return state;
  }
};
