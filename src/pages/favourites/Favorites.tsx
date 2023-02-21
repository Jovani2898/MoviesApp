import React from 'react';
import {FavoritesList} from '../../components/favoritesList/FavoritesList';
import {useAppSelector} from '../../hooks/redux';
import {PreAuthPage} from '../authentication/preAuth/PreAuth';

export const FavoritesPage = () => {
  const loggedIn = useAppSelector(state => state.user.loggedIn);

  return !loggedIn ? <PreAuthPage /> : <FavoritesList />;
};
