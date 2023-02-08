import React, {useEffect, useRef} from 'react';
import {FlatList} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {IMovie} from '../../interfaces/movie';
import {
  loadMoreTopRatedMovies,
  loadMoreTopRatedMoviesFinished,
  saveTopRatedMovies,
} from '../../redux/actions/movies';
import {TopRatedMoviesListItem} from '../topRatedMoviesListItem/TopRatedMoviesListItem';
import TopRatedMoviesLoadMore from '../topRatedMoviesLoadMore/TopRatedMoviesLoadMore';
import {styles} from './styles';

export const TopRatedMoviesList = () => {
  const dispatch = useAppDispatch();
  const {data: movieList, page} = useAppSelector(
    state => state.movie.topRatedMovies,
  );
  //topRatedMovies: {data: movieList, page} = useAppSelector(state => state.movie);
  const {fetchTopRatedMovies} = useMovies();

  useEffect(() => {
    fetchTopRatedMovies(page).then(moviesResponse => {
      dispatch(saveTopRatedMovies(moviesResponse));
    });
  }, [page]);

  const loadMore = () => {
    dispatch(loadMoreTopRatedMovies());
    const timeout = setTimeout(() => {
      dispatch(loadMoreTopRatedMoviesFinished());
      clearTimeout(timeout);
    }, 1000);
  };

  const listRef = useRef<FlatList>(null);

  return (
    <FlatList
      ref={listRef}
      data={movieList}
      renderItem={({item}: {item: IMovie}) => (
        <TopRatedMoviesListItem item={item} key={item.id} />
      )}
      style={styles.list}
      ListFooterComponent={() => <TopRatedMoviesLoadMore onPress={loadMore} />}
    />
  );
};
