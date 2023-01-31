import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MovieDetailsPage} from '../pages/movieDetails/MovieDetails';
import {SearchPage} from '../pages/search/Search';

const SearchStack = createStackNavigator();

export const SearchStackNavigation = () => (
  <SearchStack.Navigator screenOptions={{headerShown: true}}>
    <SearchStack.Screen name="search" component={SearchPage} />
    <SearchStack.Screen name="details" component={MovieDetailsPage} />
  </SearchStack.Navigator>
);
