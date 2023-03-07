import {SPLASH_TYPES} from '../types/splash';

export const SplashLoadingFinish = (payload: boolean) => ({
  type: SPLASH_TYPES.SPLASH_LOADING_FINISH,
  payload,
});
