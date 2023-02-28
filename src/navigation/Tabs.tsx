import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ProfilePage} from '../pages/profile/Profile';
import {FavoriteStackNavigation} from './Favorites';
import {HomeStackNavigation} from './HomeStack';
import {SearchStackNavigation} from './SearchStack';

const Tabs = createBottomTabNavigator();

export const TabsNavigation = () => (
  <Tabs.Navigator screenOptions={{headerShown: false, lazy: false}}>
    <Tabs.Screen
      name="homeTab"
      component={HomeStackNavigation}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Icon name="home" size={20} color={focused ? '#4B56D2' : 'grey'} />
        ),
      }}
    />
    <Tabs.Screen
      name="searchTab"
      component={SearchStackNavigation}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Icon name="search" size={20} color={focused ? '#4B56D2' : 'grey'} />
        ),
      }}
    />
    <Tabs.Screen
      name="favoritesTab"
      component={FavoriteStackNavigation}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Icon name="star" size={20} color={focused ? '#4B56D2' : 'grey'} />
        ),
      }}
    />
    <Tabs.Screen
      name="profileTab"
      component={ProfilePage}
      options={{
        headerShown: false,
        title: 'Profile',
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Icon name="user" size={20} color={focused ? '#4B56D2' : 'grey'} />
        ),
      }}
    />
  </Tabs.Navigator>
);
