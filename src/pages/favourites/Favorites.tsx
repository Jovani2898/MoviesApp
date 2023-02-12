import React from 'react';
import {Text} from 'react-native';
import {useAppSelector} from '../../hooks/redux';
import {AuthPage} from '../authentication/auth/Auth';

export const FavoritesPage = () => {
  const loggedIn = useAppSelector(state => state.user.loggedIn);

  return !loggedIn ? AuthPage : <Text> Favorites Page</Text>;
};
