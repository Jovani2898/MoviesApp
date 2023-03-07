import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchPage} from '../pages/search/Search';
import {SEARCH, SearchStackParamList} from './navigation.constants';

const SearchStack = createStackNavigator<SearchStackParamList>();

export const SearchStackNavigation = () => (
  <SearchStack.Navigator screenOptions={{headerShown: true}}>
    <SearchStack.Screen name={SEARCH} component={SearchPage} />
  </SearchStack.Navigator>
);
