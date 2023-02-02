import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider, useDispatch} from 'react-redux';
import {Navigation} from './src/navigation/Navigation';
import {updateConfiguration} from './src/redux/actions/movies';
import {store} from './src/redux/store';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchConfiguration = async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/configuration?api_key=eaec283d031b691056914c24ed9aa5e6',
      ).then(res => res.json());
      dispatch(updateConfiguration(response));
    };
    fetchConfiguration();
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

const AppWithProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithProvider;
