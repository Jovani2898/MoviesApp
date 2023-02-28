import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {IMovie} from '../../interfaces/movie';
import {triggerFavorite} from '../../redux/actions/favorites';
import {styles} from './styles';

interface IMovieDetailsHeaderFavorites {
  movie: IMovie;
}

export const MovieDetailsHeaderFavorites = (
  props: IMovieDetailsHeaderFavorites,
) => {
  const {movie} = props;

  const dispatch = useAppDispatch();

  const [isFavorite, setIsFavorite] = useState(false);

  const favorites = useAppSelector(state => state.favorites.data);

  const checkIfExists = useCallback(() => {
    for (let i = 0; i < favorites.length; i++) {
      const element: IMovie = favorites[i];

      if (element?.id === movie.id) {
        setIsFavorite(true);
        return;
      }
    }
    setIsFavorite(false);
  }, [favorites, movie?.id]);

  useEffect(() => {
    checkIfExists();
  }, [favorites, checkIfExists]);

  const handlePress = () => {
    dispatch(triggerFavorite(movie));
  };

  useEffect(() => {}, [favorites]);

  return (
    <TouchableOpacity onPress={handlePress}>
      {isFavorite === true ? (
        <Icon name="star" size={22} style={styles.icon} color="gold" />
      ) : (
        <Icon name="star-o" size={22} style={styles.icon} />
      )}
    </TouchableOpacity>
  );
};
