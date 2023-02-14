import {IConfiguration} from '../../interfaces/configuration';
import {IMovie} from '../../interfaces/movie';
import {MoviesTypes} from '../types/movies';

interface InitialState {
  configuration: IConfiguration | null;
  topRatedMovies: {page: number; data: IMovie[]; isLoading: boolean};
  popularMovies: {
    page: number;
    data: IMovie[];
    isLoading: boolean;
    filter: {
      year: number | null;
      rating: number;
      genres: {title: string; value: boolean}[];
    };
  };
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
    isLoading: false,
    filter: {year: null, rating: 5, genres: []},
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
    case MoviesTypes.SAVE_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          data: {...state.popularMovies.data, ...action.payload},
        },
      };
    case MoviesTypes.FETCH_MOVIE_GENRES:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          filter: {
            ...state.popularMovies.filter,
            genres: action.payload,
          },
        },
      };
    case MoviesTypes.SELECT_FILTER_GENRE:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          filter: {
            ...state.popularMovies.filter,
            genres: state.popularMovies.filter.genres.map(genre => {
              if (genre.title === action.payload.title) {
                genre.value = action.payload.value;
              }
              return genre;
            }),
          },
        },
      };
    case MoviesTypes.SEARCH_CHANGE_RATING:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          filter: {
            ...state.popularMovies.filter,
            rating: action.payload,
          },
        },
      };
    case MoviesTypes.SEARCH_CHANGE_YEAR:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          filter: {
            ...state.popularMovies.filter,
            year: action.payload,
          },
        },
      };
    default:
      return state;
  }
};
