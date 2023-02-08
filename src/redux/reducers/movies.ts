import {IConfiguration} from '../../interfaces/configuration';
import {IMovie} from '../../interfaces/movie';
import {MoviesTypes} from '../types/movies';

interface InitialState {
  configuration: IConfiguration | null;
  topRatedMovies: {page: number; data: IMovie[]; isLoading: boolean};
  popularMovies: {page: number; data: IMovie[]};
}

const initialState: InitialState = {
  configuration: null,
  topRatedMovies: {
    page: 1,
    data: [],
    isLoading: false,
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
          ...state.topRatedMovies,
          data: [...state.topRatedMovies.data, ...action.payload],
        },
      };
    case MoviesTypes.LOAD_MORE_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: {
          page: state.topRatedMovies.page + 1,
          data: state.topRatedMovies.data,
          isLoading: true,
        },
      };
    case MoviesTypes.LOAD_MORE_TOP_RATED_MOVIED_FINISHED:
      return {
        ...state,
        topRatedMovies: {
          ...state.topRatedMovies,
          isLoading: false,
        },
      };
    default:
      return state;
  }
};
