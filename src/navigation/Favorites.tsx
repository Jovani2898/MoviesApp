import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FavoritesPage} from '../pages/favourites/Favorites';

const FavoritesStack = createStackNavigator();

export const FavoriteStackNavigation = () => (
  <FavoritesStack.Navigator>
    <FavoritesStack.Screen
      name="favorites"
      component={FavoritesPage}
      options={{headerShown: false}}
    />
  </FavoritesStack.Navigator>
);
