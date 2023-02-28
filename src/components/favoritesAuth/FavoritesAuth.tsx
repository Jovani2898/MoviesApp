import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const FavoritesAuth = () => {
  const {navigate} = useNavigation();

  const onRedirect = () => {
    navigate('auth');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onRedirect}>
        <Text style={styles.text}>
          to add a movie to Favorites, please SignIn or SignUp
        </Text>
      </TouchableOpacity>
    </View>
  );
};
