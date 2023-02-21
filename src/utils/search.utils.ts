import {IMovieSearchFilter} from '../interfaces/movieSearchFIlter';

export const filterIsEmpty = (filter: IMovieSearchFilter) => {
  let isEmpty = false;
  if (
    (filter.title === null || filter?.title?.length === 0) &&
    filter.genres.every(item => item.value === false) &&
    filter.year === null
  ) {
    isEmpty = true;
  }
  return isEmpty;
};
