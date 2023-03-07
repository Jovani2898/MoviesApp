import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IMovie} from '../interfaces/movie';

export const SPLASH_SCREEN = 'Splash';
export const DETAILS_SCREEN = 'Details';
export const AUTH_SCREEN = 'Auth';
export const TABS_NAVIGATOR = 'TabsNavigator';

export const HOME_STACK = 'HomeStack';
export const SEARCH_STACK = 'SearchStack';
export const FAVORITES_STACK = 'FavoritesStack';

export const HOME = 'Home';
export const SEARCH = 'Search';
export const FAVORITES = 'Favorites';
export const PROFILE = 'Profile';

export type HomeStackParamList = {
  [HOME]: undefined;
};

export type SearchStackParamList = {
  [SEARCH]: undefined;
};

export type FavoritesStackParamList = {
  [FAVORITES]: undefined;
};

export type TabParamList = {
  [HOME_STACK]: NavigatorScreenParams<HomeStackParamList>;
  [SEARCH_STACK]: NavigatorScreenParams<SearchStackParamList>;
  [FAVORITES_STACK]: NavigatorScreenParams<FavoritesStackParamList>;
  [PROFILE]: undefined;
};

export type RootStackParamList = {
  [SPLASH_SCREEN]: undefined;
  [TABS_NAVIGATOR]: NavigatorScreenParams<TabParamList>;
  [DETAILS_SCREEN]: {movie: IMovie};
  [AUTH_SCREEN]: undefined;
};

export type RootNavigationParamList = StackNavigationProp<RootStackParamList>;

export type RootNavigationRouteProp = RouteProp<RootStackParamList, 'Details'>;
