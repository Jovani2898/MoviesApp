import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {PopularMoviesList} from '../../components/popularMoviesList/PopularMoviesList';
import {SearchHeader} from '../../components/searchHeader/SearchHeader';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {IGenre} from '../../interfaces/genre';
import {saveMovieGenres} from '../../redux/actions/movies';

export const SearchPage = () => {
  const {setOptions} = useNavigation();
  const [enableScroll, setEnableScroll] = useState(true);

  const {fetchMovieGenres} = useMovies();

  const dispatch = useAppDispatch();

  const genres = useAppSelector(
    state => state.movie.popularMovies.filter.genres,
  );

  useEffect(() => {
    setOptions({
      header: () => <SearchHeader setEnableScroll={setEnableScroll} />,
    });

    if (genres.length === 0) {
      fetchMovieGenres().then((movieGenres: IGenre[]) => {
        dispatch(saveMovieGenres(movieGenres));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PopularMoviesList enableScroll={enableScroll} />
    </>
  );
};
