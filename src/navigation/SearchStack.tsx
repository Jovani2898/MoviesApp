import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchPage} from '../pages/search/Search';

const SearchStack = createStackNavigator();

export const SearchStackNavigation = () => (
  <SearchStack.Navigator screenOptions={{headerShown: true}}>
    <SearchStack.Screen name="search" component={SearchPage} />
  </SearchStack.Navigator>
);
