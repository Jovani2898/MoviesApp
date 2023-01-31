import {applyMiddleware, combineReducers, createStore} from 'redux';
import createDebugger from 'redux-flipper';
import {MoviesReducer} from './reducers/movies';
import {userReducer} from './reducers/user';

export const store = createStore(
  combineReducers({user: userReducer, movies: MoviesReducer}),
  undefined,
  applyMiddleware(createDebugger()),
);
