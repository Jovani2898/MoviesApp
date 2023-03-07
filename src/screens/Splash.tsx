import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {SplashLoadingFinish} from '../redux/actions/splash';
import {
  HOME,
  HOME_STACK,
  RootNavigationParamList,
  TABS_NAVIGATOR,
} from '../navigation/navigation.constants';

const Splash = () => {
  const {navigate} = useNavigation<RootNavigationParamList>();

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
      navigate(TABS_NAVIGATOR, {
        screen: HOME_STACK,
        params: {screen: HOME},
      });
    }
  }, [navigate, selectRootNav]);

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

/*
Argument of type 'string' is not assignable to parameter of type '{ key: string; params?: undefined; merge?: boolean | undefined; } | { name: "Splash"; key?: string | undefined; params: undefined; merge?: boolean | undefined; } | { key: string; params?: BottomTabNavigationProp<{ ...; }, "HomeStack" | ... 2 more ... | "Profile", undefined> | undefined; merge?: boolean | undefined; ...'.ts(2345)
*/
