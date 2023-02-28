import {IFavorites} from '../../interfaces/favorites';
import {FAVORITES_TYPES} from '../types/favorites';

const initialState: IFavorites = {
  data: [],
};

export const FavoritesReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case FAVORITES_TYPES.TRIGGER_FAVORITE:
      let isFavorite = false;
      for (let i = 0; i < state.data.length; i++) {
        const element = state.data[i];
        if (element.id === action.payload.id) {
          isFavorite = true;
          break;
        }
      }
      return isFavorite === true
        ? {
            data: [
              ...state.data.filter(
                favorite => favorite.id !== action.payload.id,
              ),
            ],
          }
        : {data: [...state.data, action.payload]};
    case FAVORITES_TYPES.CLEAR_FAVORITE:
      return {data: []};
    default:
      return state;
  }
};
