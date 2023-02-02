import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStackNavigation} from './HomeStack';
import {FavoriteStackNavigation} from './Favorites';
import {SearchStackNavigation} from './SearchStack';
import {ProfilePage} from '../pages/profile/Profile';

const Tabs = createBottomTabNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen name="homeTab" component={HomeStackNavigation} />
      <Tabs.Screen name="searchTab" component={SearchStackNavigation} />
      <Tabs.Screen name="favoritesTab" component={FavoriteStackNavigation} />
      <Tabs.Screen name="profileTab" component={ProfilePage} />
    </Tabs.Navigator>
  </NavigationContainer>
);
