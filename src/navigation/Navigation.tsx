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
    <Tabs.Navigator>
      <Tabs.Screen name="home" component={HomeStackNavigation} />
      <Tabs.Screen name="search" component={SearchStackNavigation} />
      <Tabs.Screen name="favorites" component={FavoriteStackNavigation} />
      <Tabs.Screen name="profile" component={ProfilePage} />
    </Tabs.Navigator>
  </NavigationContainer>
);
