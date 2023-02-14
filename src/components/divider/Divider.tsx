import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {styles} from './styles';

interface IDivider {
  style?: StyleProp<ViewStyle>;
}

export const Divider = (props: IDivider) => {
  return <View style={[styles.divider, props.style]} />;
};
