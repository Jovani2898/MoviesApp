import React, {memo} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';

export const Loader = memo(() => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.loader} size="large" color={'#0000ff'} />
    </View>
  );
});
