import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage} from '../pages/home/Home';
import {MovieDetailsPage} from '../pages/movieDetails/MovieDetails';

const HomeStack = createStackNavigator();

export const HomeStackNavigation = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="home" component={HomePage} />
    <HomeStack.Screen name="details" component={MovieDetailsPage} />
  </HomeStack.Navigator>
);
