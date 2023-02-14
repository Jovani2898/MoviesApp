import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {useAppDispatch} from './src/hooks/redux';
import {Navigation} from './src/navigation/Navigation';
import {updateConfiguration} from './src/redux/actions/movies';
import {persistor, store} from './src/redux/store';
import {useMovies} from './src/hooks/useMovies';

const App = () => {
  const dispatch = useAppDispatch();

  const {fetchConfiguration} = useMovies();

  useEffect(() => {
    fetchConfiguration().then(res => {
      dispatch(updateConfiguration(res));
    });
  }, [dispatch, fetchConfiguration]); //this is the same as below

  // useEffect(() => {
  //   const fetchConfiguration = async () => {
  //     const response = await fetch(
  //       'https://api.themoviedb.org/3/configuration?api_key=eaec283d031b691056914c24ed9aa5e6',
  //     ).then(res => res.json());
  //     dispatch(updateConfiguration(response));
  //   };
  //   fetchConfiguration();
  // }, [dispatch]);

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

const AppWithProvider = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

export default AppWithProvider;
