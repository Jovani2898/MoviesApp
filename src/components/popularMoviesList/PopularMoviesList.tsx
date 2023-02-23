import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {IMovie} from '../../interfaces/movie';
import {savePopularMovies} from '../../redux/actions/movies';
import PopularMoviesListItem from '../popularMoviesListItem/PopularMoviesListItem';

interface IPopularMoviesLIst {
  enableScroll: boolean;
}

export const PopularMoviesList = (props: IPopularMoviesLIst) => {
  const {enableScroll} = props;

  const [page] = useState(1);

  const {fetchPopularMovies} = useMovies();

  const dispatch = useAppDispatch();

  const {
    data: popularMovies,
    searchResult,
    filter,
  } = useAppSelector(state => state.movie.popularMovies);

  const [data, setData] = useState(popularMovies);

  useEffect(() => {
    if (searchResult === null) {
      setData(popularMovies);
    } else {
      setData(searchResult);
    }
  }, [searchResult, popularMovies, filter]);

  useEffect(() => {
    fetchPopularMovies(page).then(movieResponse => {
      dispatch(savePopularMovies(movieResponse));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <FlatList
      data={data}
      renderItem={({item}: {item: IMovie}) => (
        <PopularMoviesListItem item={item} />
      )}
      numColumns={3}
      scrollEnabled={enableScroll}
    />
  );
};
