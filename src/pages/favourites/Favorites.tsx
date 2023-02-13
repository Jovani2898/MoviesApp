import React from 'react';
import {Text} from 'react-native';
import {useAppSelector} from '../../hooks/redux';
import {PreAuthPage} from '../authentication/preAuth/PreAuth';

export const FavoritesPage = () => {
  const loggedIn = useAppSelector(state => state.user.loggedIn);

  return !loggedIn ? <PreAuthPage /> : <Text> Favorites Page</Text>;
};
