import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FavoritesPage} from '../pages/favourites/Favorites';
import {FAVORITES, FavoritesStackParamList} from './navigation.constants';

const FavoritesStack = createStackNavigator<FavoritesStackParamList>();

export const FavoriteStackNavigation = () => (
  <FavoritesStack.Navigator>
    <FavoritesStack.Screen
      name={FAVORITES}
      component={FavoritesPage}
      options={{headerShown: false}}
    />
  </FavoritesStack.Navigator>
);
