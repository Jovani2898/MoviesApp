import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../../components/button/Button';
import {
  AUTH_SCREEN,
  RootNavigationParamList,
} from '../../../navigation/navigation.constants';
import {styles} from './styles';

export const PreAuthPage = () => {
  const {navigate} = useNavigation<RootNavigationParamList>();

  const onRedirect = () => {
    navigate(AUTH_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.hint}>
        Please Login or register {'\n'} in order to use this screen
      </Text>
      <Button text="Authenticate" onPress={onRedirect} style={styles.button} />
    </View>
  );
};
