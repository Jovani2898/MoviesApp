import React, {StrictMode, useEffect, useMemo} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {useAppDispatch} from './src/hooks/redux';
import {Navigation} from './src/navigation/Navigation';
import {updateConfiguration} from './src/redux/actions/movies';
import {persistor, store} from './src/redux/store';
import {useMovies} from './src/hooks/useMovies';
import {Platform, SafeAreaView, StatusBar} from 'react-native';

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

  const Wrapper = useMemo(
    () => (Platform.OS === 'android' ? SafeAreaProvider : SafeAreaView),
    [],
  );

  return (
    <>
      <StatusBar />
      <Wrapper style={{flex: 1}}>
        <Navigation />
      </Wrapper>
    </>
  );
};

const AppWithProvider = () => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);

export default AppWithProvider;
