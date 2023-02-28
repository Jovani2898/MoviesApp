import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const FavoritesEmpty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No favorites added yet!</Text>
    </View>
  );
};
