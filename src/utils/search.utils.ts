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

export const filterIsEmptyV2 = (filter: IMovieSearchFilter) => {
  let isEmpty = true;
  if (filter?.title !== null && filter?.title?.length > 0) {
    isEmpty = false;
    return isEmpty;
  } else if (filter.year !== null) {
    isEmpty = false;
    return isEmpty;
  } else if (filter.rating > 0) {
    isEmpty = false;
    return isEmpty;
  } else if (filter.genreIsSelected) {
    isEmpty = false;
    return isEmpty;
  }
  return isEmpty;
};
