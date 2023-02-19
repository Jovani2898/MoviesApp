import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage} from '../pages/home/Home';

const HomeStack = createStackNavigator();

export const HomeStackNavigation = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name="home" component={HomePage} />
  </HomeStack.Navigator>
);
