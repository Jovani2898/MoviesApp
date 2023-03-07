import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {SplashLoadingFinish} from '../redux/actions/splash';

const Splash = () => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();
  const selectRootNav = useAppSelector(state => state.splash.root);

  useEffect(() => {
    setTimeout(() => {
      dispatch(SplashLoadingFinish(true)); //We will change the state here to true in 5000 milliseconds
    }, 5000);
  }, [dispatch]);

  console.log(selectRootNav);

  useEffect(() => {
    if (selectRootNav) {
      navigation.navigate('default');
    }
  }, [navigation, selectRootNav]);

  //Когда selectRootNav становиться True, через 5000 милисикунд то мы переходим на "default"

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../screens/assets/myMovieApp.json')}
        autoPlay
        loop={false}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;
