import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FavoritesPage} from '../pages/favourites/Favorites';
import {MovieDetailsPage} from '../pages/movieDetails/MovieDetails';
import {AuthPage} from '../pages/authentication/auth/Auth';

const FavoritesStack = createStackNavigator();

export const FavoriteStackNavigation = () => (
  <FavoritesStack.Navigator>
    <FavoritesStack.Screen
      name="favorites"
      component={FavoritesPage}
      options={{headerShown: false}}
    />
    <FavoritesStack.Screen name="details" component={MovieDetailsPage} />
    <FavoritesStack.Screen
      name="auth"
      component={AuthPage}
      options={{presentation: 'modal', title: 'Authentication'}}
    />
  </FavoritesStack.Navigator>
);
