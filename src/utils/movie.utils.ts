import {IMovie} from '../interfaces/movie';
import {IMovieSearchFilter} from '../interfaces/movieSearchFIlter';

export const filterMoviesByRating = (
  movies: IMovie[],
  filter: IMovieSearchFilter,
): IMovie[] => {
  let filteredMovies: IMovie[] = [];
  for (let index = 0; index < movies.length; index++) {
    const movie: IMovie = movies[index];

    if (movie.vote_average < 2) {
      movie.vote_average = 2;
    }

    //filter.rating its like a star in rating slider 2 vote_average = 1 star
    if (movie.vote_average >= filter.rating * 2) {
      filteredMovies.push(movie);
    }
  }
  return filteredMovies;
};
