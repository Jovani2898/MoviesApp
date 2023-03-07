import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage} from '../pages/home/Home';
import {HOME, HomeStackParamList} from './navigation.constants';

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeStackNavigation = () => (
  <HomeStack.Navigator
    initialRouteName={HOME}
    screenOptions={{headerShown: false}}>
    <HomeStack.Screen name={HOME} component={HomePage} />
  </HomeStack.Navigator>
);
