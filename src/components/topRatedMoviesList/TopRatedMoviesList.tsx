import React, {useEffect, useRef} from 'react';
import {FlatList} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {IMovie} from '../../interfaces/movie';
import {saveTopRatedMovies} from '../../redux/actions/movies';
import {TopRatedMoviesListItem} from '../topRatedMoviesListItem/TopRatedMoviesListItem';
import {styles} from './styles';

export const TopRatedMoviesList = () => {
  const dispatch = useAppDispatch();
  const {data: movieList, page} = useAppSelector(
    state => state.movie.topRatedMovies,
  );

  const {fetchTopRatedMovies} = useMovies();

  useEffect(() => {
    fetchTopRatedMovies(page).then(moviesResponse => {
      dispatch(saveTopRatedMovies(moviesResponse));
    });
  }, [dispatch, fetchTopRatedMovies, page]);

  const listRef = useRef<FlatList>(null);

  return (
    <FlatList
      ref={listRef}
      data={movieList}
      renderItem={({item}: {item: IMovie}) => (
        <TopRatedMoviesListItem key={item.id} item={item} />
      )}
      style={styles.list}
    />
  );
};
