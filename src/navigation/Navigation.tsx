import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TabsNavigation} from './Tabs';
import {AuthPage} from '../pages/authentication/auth/Auth';
import {MovieDetailsPage} from '../pages/movieDetails/MovieDetails';
import Splash from '../screens/Splash';
import {
  AUTH_SCREEN,
  DETAILS_SCREEN,
  RootStackParamList,
  SPLASH_SCREEN,
  TABS_NAVIGATOR,
} from './navigation.constants';

const RootStack = createStackNavigator<RootStackParamList>();

export const Navigation = () => (
  <NavigationContainer>
    <RootStack.Navigator
      initialRouteName={SPLASH_SCREEN}
      screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name={SPLASH_SCREEN}
        component={Splash}
        options={{presentation: 'card'}}
      />
      <RootStack.Screen name={TABS_NAVIGATOR} component={TabsNavigation} />
      <RootStack.Screen
        name={DETAILS_SCREEN}
        component={MovieDetailsPage}
        options={{presentation: 'card', headerShown: true}}
      />
      <RootStack.Screen
        name={AUTH_SCREEN}
        component={AuthPage}
        options={{
          presentation: 'modal',
          title: 'Authentication',
          headerShown: true,
        }}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);
