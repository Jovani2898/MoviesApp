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
        options={{tabBarIcon: () => <Icon name="home" size={20} />}}
      />
      <Tabs.Screen name="searchTab" component={SearchStackNavigation} />
      <Tabs.Screen name="favoritesTab" component={FavoriteStackNavigation} />
      <Tabs.Screen name="profileTab" component={ProfilePage} />
    </Tabs.Navigator>
  </NavigationContainer>
);
