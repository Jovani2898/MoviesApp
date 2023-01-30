import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FavoritesPage} from '../pages/favourites/Favorites';
import {MovieDetailsPage} from '../pages/movieDetails/MovieDetails';

const FavoritesStack = createStackNavigator();

export const FavoriteStackNavigation = () => (
  <FavoritesStack.Navigator>
    <FavoritesStack.Screen name="favorites" component={FavoritesPage} />
    <FavoritesStack.Screen name="details" component={MovieDetailsPage} />
  </FavoritesStack.Navigator>
);
