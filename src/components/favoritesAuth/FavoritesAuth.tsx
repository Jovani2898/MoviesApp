import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppSelector} from '../../hooks/redux';
import {
  AUTH_SCREEN,
  RootNavigationParamList,
} from '../../navigation/navigation.constants';

export const FavoritesAuth = ({movieId}) => {
  const {navigate} = useNavigation<RootNavigationParamList>();
  const favorites = useAppSelector(state => state.favorites.data);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const value = favorites.find(item => item.id === movieId);
    if (value !== null) {
      setIsFavorite(true);
    }
  }, [favorites, movieId]);

  const onRedirect = () => {
    navigate(AUTH_SCREEN);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onRedirect} style={styles.button}>
        {isFavorite ? (
          <Icon name="bookmark-o" size={20} />
        ) : (
          <Icon name="bookmark" size={20} />
        )}
      </TouchableOpacity>
    </View>
  );
};
