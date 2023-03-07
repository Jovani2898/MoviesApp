import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FavoritesAuth} from '../../components/favoritesAuth/FavoritesAuth';
import {MovieDetails} from '../../components/movieDetails/MovieDetails';
import {MovieDetailsHeaderFavorites} from '../../components/movieDetailsHeaderFavorites/movieDetailsHeaderFavorites';
import {useAppSelector} from '../../hooks/redux';
import {IMovie} from '../../interfaces/movie';
import {
  RootNavigationParamList,
  RootNavigationRouteProp,
} from '../../navigation/navigation.constants';

export const MovieDetailsPage = () => {
  const {setOptions} = useNavigation<RootNavigationParamList>();
  const {params} = useRoute<RootNavigationRouteProp>();

  const movie: IMovie = params.movie;

  const loggedIn = useAppSelector(state => state.user.loggedIn);

  useEffect(() => {
    setOptions({
      title: movie.title,
      headerRight: () =>
        loggedIn ? (
          <MovieDetailsHeaderFavorites movie={movie} />
        ) : (
          <FavoritesAuth movieId={movie.id} />
        ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  return <MovieDetails movie={movie} />;
};
