import {IMovieSearchFilter} from '../interfaces/movieSearchFIlter';

export const filterIsEmpty = (filter: IMovieSearchFilter) => {
  let isEmpty = false;
  if (filter.title === null || filter?.title?.length === 0) {
    isEmpty = true;
  }
  return isEmpty;
};
