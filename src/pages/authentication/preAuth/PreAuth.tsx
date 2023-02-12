import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../../components/button/Button';
import {styles} from './styles';

export const PreAuthPage = () => {
  const {navigate} = useNavigation();

  const onRedirect = () => {
    navigate('auth');
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
