import {UserTypes} from '../types/user';

export const userSignUp = (payload: any) => ({
  type: UserTypes.USER_SIGN_UP,
  payload,
});

export const userSignIn = (payload: any) => ({
  type: UserTypes.USER_SIGN_IN,
  payload,
});

export const userLogOut = () => ({
  type: UserTypes.USER_LOG_OUT,
  payload: null,
});
