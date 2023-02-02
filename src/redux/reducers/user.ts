import {IUser} from '../../interfaces/user';

const initialState: IUser = {
  loggedIn: false,
  data: null,
};

export const userReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    default:
      return state;
  }
};
