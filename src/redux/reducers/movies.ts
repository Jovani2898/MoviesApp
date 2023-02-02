import {MoviesTypes} from '../types/movies';

const initialState = {
  configuration: null,
  topRatedMovies: {
    page: 1,
    data: [],
  },
  popularMovies: {
    page: 1,
    data: [],
  },
};

export const MoviesReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case MoviesTypes.UPDATE_CONFIGURATION:
      return {
        ...state,
        configuration: action.payload,
      };
    case MoviesTypes.SAVE_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: {
          page: state.topRatedMovies.page,
          data: [...state.topRatedMovies.data, ...action.payload],
        },
      };
    default:
      return state;
  }
};
