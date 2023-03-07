import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {FavoritesReducer} from './reducers/favorites';
import {MoviesReducer} from './reducers/movies';
import {UserReducer} from './reducers/user';
import {persistReducer, persistStore} from 'redux-persist';
import {SplashReducer} from './reducers/splash';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['movie', 'splash'],
};

const createDebugger = require('redux-flipper').default;

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: UserReducer,
    movie: MoviesReducer,
    favorites: FavoritesReducer,
    splash: SplashReducer,
  }),
);

export const store = createStore(
  persistedReducer,
  undefined,
  applyMiddleware(createDebugger([thunk])),
);

export const persistor = persistStore(store);

// * create types for useSelector and useDispatch to see store structure
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
