import {IConfiguration} from './configuration';
import {IMovie} from './movie';

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
  };
}
