import {IUser} from '../../interfaces/user';
import {UserTypes} from '../types/user';

const initialState: IUser = {
  loggedIn: false,
  data: null,
};

export const userReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case UserTypes.USER_SIGN_IN:
    case UserTypes.USER_SIGN_UP:
      return {
        loggedIn: true,
        data: action.payload,
      };
    case UserTypes.USER_LOG_OUT:
      return {
        loggedIn: false,
        data: null,
      };
    case UserTypes.USER_UPDATE_PROFILE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
