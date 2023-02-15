import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {PopularMoviesLIst} from '../../components/popularMoviesList/PopularMoviesList';
import {SearchHeader} from '../../components/searchHeader/SearchHeader';
import {useAppDispatch} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {saveMovieGenres} from '../../redux/actions/movies';

export const SearchPage = () => {
  const {setOptions} = useNavigation();
  const [enableScroll, setEnableScroll] = useState(true);

  const {fetchMovieGenres} = useMovies();

  const dispatch = useAppDispatch();

  useEffect(() => {
    setOptions({
      header: () => <SearchHeader setEnableScroll={setEnableScroll} />,
    });

    fetchMovieGenres().then(
      (movieGenres: {title: string; value: boolean}[]) => {
        dispatch(saveMovieGenres(movieGenres));
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PopularMoviesLIst enableScroll={enableScroll} />
    </>
  );
};
