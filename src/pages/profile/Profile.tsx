import React from 'react';
import {Profile} from '../../components/profile/Profile';
import {useAppSelector} from '../../hooks/redux';
import {PreAuthPage} from '../authentication/preAuth/PreAuth';

export const ProfilePage = () => {
  const loggedIn = useAppSelector(state => state.user.loggedIn);
  return !loggedIn ? <PreAuthPage /> : <Profile />;
};
