import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {MovieDetails} from '../../components/movieDetails/MovieDetails';
import {IMovie} from '../../interfaces/movie';

export const MovieDetailsPage = () => {
  const {setOptions} = useNavigation();
  const {params} = useRoute();

  const movie: IMovie = params?.item;

  useEffect(() => {
    setOptions({title: movie.title});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MovieDetails movie={movie} />;
};
