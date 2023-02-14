import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStackNavigation} from './HomeStack';
import {FavoriteStackNavigation} from './Favorites';
import {SearchStackNavigation} from './SearchStack';
import {ProfilePage} from '../pages/profile/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tabs = createBottomTabNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Tabs.Navigator screenOptions={{headerShown: false}}>
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
            <Icon
              name="search"
              size={20}
              color={focused ? '#4B56D2' : 'grey'}
            />
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
  </NavigationContainer>
);
