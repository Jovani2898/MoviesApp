import {IConfiguration} from '../../interfaces/configuration';
import {IMovie} from '../../interfaces/movie';
import {MoviesTypes} from '../types/movies';

interface InitialState {
  configuration: IConfiguration | null;
  topRatedMovies: {page: number; data: IMovie[]};
  popularMovies: {page: number; data: IMovie[]};
}

const initialState: InitialState = {
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
    case MoviesTypes.LOAD_MORE_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: {
          page: state.topRatedMovies.page + 1,
          data: state.topRatedMovies.data,
        },
      };
    default:
      return state;
  }
};
