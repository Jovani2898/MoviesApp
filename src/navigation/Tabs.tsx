import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ProfilePage} from '../pages/profile/Profile';
import {FavoriteStackNavigation} from './Favorites';
import {HomeStackNavigation} from './HomeStack';
import {
  FAVORITES_STACK,
  HOME_STACK,
  PROFILE,
  SEARCH_STACK,
  TabParamList,
} from './navigation.constants';
import {SearchStackNavigation} from './SearchStack';

const Tabs = createBottomTabNavigator<TabParamList>();

export const TabsNavigation = () => (
  <Tabs.Navigator
    initialRouteName={HOME_STACK}
    screenOptions={{headerShown: false, lazy: false}}>
    <Tabs.Screen
      name={HOME_STACK}
      component={HomeStackNavigation}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Icon name="home" size={20} color={focused ? '#4B56D2' : 'grey'} />
        ),
      }}
    />
    <Tabs.Screen
      name={SEARCH_STACK}
      component={SearchStackNavigation}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Icon name="search" size={20} color={focused ? '#4B56D2' : 'grey'} />
        ),
      }}
    />
    <Tabs.Screen
      name={FAVORITES_STACK}
      component={FavoriteStackNavigation}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Icon name="star" size={20} color={focused ? '#4B56D2' : 'grey'} />
        ),
      }}
    />
    <Tabs.Screen
      name={PROFILE}
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
