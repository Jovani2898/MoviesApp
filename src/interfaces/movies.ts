import {IConfiguration} from './configuration';
import {IMovie} from './movie';
import {IMovieSearchFilter} from './movieSearchFIlter';

export interface IMovies {
  configuration: IConfiguration | null;
  topRatedMovies: {
    page: number;
    data: IMovie[];
    isLoading: boolean;
  };
  popularMovies: {
    page: number;
    data: IMovie[];
    searchResult: IMovie[] | null;
    isLoading: boolean;
    filter: IMovieSearchFilter;
  };
}
