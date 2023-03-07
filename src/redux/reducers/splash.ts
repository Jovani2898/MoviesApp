import {SPLASH_TYPES} from '../types/splash';

const initialState = {
  root: false,
};

export const SplashReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case SPLASH_TYPES.SPLASH_LOADING_FINISH:
      console.log(action.payload, 'payload');

      return {
        ...state,
        root: action.payload,
      };
    default:
      return state;
  }
};
