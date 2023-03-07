import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TabsNavigation} from './Tabs';
import {AuthPage} from '../pages/authentication/auth/Auth';
import {MovieDetailsPage} from '../pages/movieDetails/MovieDetails';
import Splash from '../screens/Splash';

const RootStack = createStackNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <RootStack.Navigator
      initialRouteName="splash"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name="splash"
        component={Splash}
        options={{presentation: 'card'}}
      />
      <RootStack.Screen name="default" component={TabsNavigation} />
      <RootStack.Screen
        name="details"
        component={MovieDetailsPage}
        options={{presentation: 'card', headerShown: true}}
      />
      <RootStack.Screen
        name="auth"
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
