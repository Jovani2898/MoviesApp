import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FavoritesList} from '../../components/favoritesList/FavoritesList';
import {FavoritesPageHeader} from '../../components/favoritesPageHeader/FavoritesPageHeader';
import {useAppSelector} from '../../hooks/redux';
import {PreAuthPage} from '../authentication/preAuth/PreAuth';

export const FavoritesPage = () => {
  const loggedIn = useAppSelector(state => state.user.loggedIn);
  const {setOptions} = useNavigation();

  useEffect(() => {
    if (loggedIn === true) {
      setOptions({headerShown: true, headerRight: FavoritesPageHeader});
    } else {
      setOptions({headerShown: false});
    }
  }, [loggedIn, setOptions]);

  return !loggedIn ? <PreAuthPage /> : <FavoritesList />;
};
