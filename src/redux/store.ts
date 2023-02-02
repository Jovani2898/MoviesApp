import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {FavoritesReducer} from './reducers/favorites';
import {MoviesReducer} from './reducers/movies';
import {userReducer} from './reducers/user';

const createDebugger = require('redux-flipper').default;

export const store = createStore(
  combineReducers({
    user: userReducer,
    movie: MoviesReducer,
    favorites: FavoritesReducer,
  }),
  undefined,
  applyMiddleware(createDebugger([thunk])),
);

// * create types for useSelector and useDispatch to see store structure
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
