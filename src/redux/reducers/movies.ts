import {MoviesTypes} from '../types/movies';
import {IGenre} from '../../interfaces/genre';
import {IMovies} from '../../interfaces/movies';

const initialState: IMovies = {
  configuration: null,
  topRatedMovies: {
    page: 1,
    data: [],
    isLoading: false,
  },
  popularMovies: {
    page: 1,
    data: [],
    searchResult: null,
    isLoading: false,
    filter: {
      year: null,
      rating: 0,
      genres: [],
      title: null,
      genreIsSelected: false,
    },
    scrollIsEnabled: true,
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
          data: [...state.popularMovies.data, ...action.payload],
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
            genreIsSelected: !!state.popularMovies.filter.genres.find(
              genre => genre.value === true,
            ),
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
    case MoviesTypes.SEARCH_CHANGE_TITLE:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          filter: {
            ...state.popularMovies.filter,
            title: action.payload,
          },
        },
      };
    case MoviesTypes.SEARCH_SAVE_SEARCH_RESULT:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          searchResult: action.payload,
          isLoading: false,
        },
      };
    case MoviesTypes.SEARCH_FILTER_CLEAR:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          filter: {
            title: null,
            year: null,
            rating: 0,
            genres: state.popularMovies.filter.genres.map((genre: IGenre) => {
              genre.value = false;
              return genre;
            }),
          },
          searchResult: null,
        },
      };
    case MoviesTypes.SEARCH_START_LOADING:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          isLoading: true,
        },
      };
    case MoviesTypes.TRIGGER_SCROLL_ENABLED:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          scrollIsEnabled: action.payload,
        },
      };
    default:
      return state;
  }
};
