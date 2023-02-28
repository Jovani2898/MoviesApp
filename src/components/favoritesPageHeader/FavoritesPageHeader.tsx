import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppDispatch} from '../../hooks/redux';
import {clearFavorite} from '../../redux/actions/favorites';
import {styles} from './styles';

export const FavoritesPageHeader = () => {
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(clearFavorite());
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon name="trash" size={20} style={styles.icon} />
    </TouchableOpacity>
  );
};
