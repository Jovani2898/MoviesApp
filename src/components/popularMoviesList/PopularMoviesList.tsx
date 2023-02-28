import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React, {memo, useEffect, useState} from 'react';
import {Dimensions, FlatList, StatusBar} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {IMovie} from '../../interfaces/movie';
import {savePopularMovies} from '../../redux/actions/movies';
import {Loader} from '../loader/Loader';
import {PopularMovieIsEmpty} from '../popularMovieIsEmpty/PopularMovieIsEmpty';
import {PopularMoviesListItem} from '../popularMoviesListItem/PopularMoviesListItem';

interface IPopularMoviesLIst {
  enableScroll: boolean;
}

export const PopularMoviesList = memo((props: IPopularMoviesLIst) => {
  const {enableScroll} = props;

  const [page, setPage] = useState(1);

  const {fetchPopularMovies} = useMovies();

  const dispatch = useAppDispatch();

  const windowHeight = Dimensions.get('window').height;
  const bottomTabHeight = useBottomTabBarHeight();
  const statusBarHeight = StatusBar?.currentHeight || 0;

  const {
    data: popularMovies,
    searchResult,
    filter,
    isLoading,
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
    <>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}: {item: IMovie}) => (
          <PopularMoviesListItem item={item} />
        )}
        numColumns={3}
        scrollEnabled={enableScroll}
        ListEmptyComponent={PopularMovieIsEmpty}
        onMomentumScrollEnd={event => {
          const offsetFromListStart = event.nativeEvent.contentOffset.y;
          const screenHeight = windowHeight - bottomTabHeight - statusBarHeight;

          if (offsetFromListStart >= (screenHeight / 2) * page) {
            setPage(currentPage => currentPage + 1);
          }
        }}
      />
      {isLoading === true ? <Loader /> : null}
    </>
  );
});
