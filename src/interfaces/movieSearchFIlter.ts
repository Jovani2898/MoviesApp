import {IGenre} from './genre';

export interface IMovieSearchFilter {
  title: string | null;
  year: number | null;
  rating: number;
  genres: IGenre[];
  genreIsSelected: boolean;
}
