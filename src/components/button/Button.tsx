import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle, Text} from 'react-native';
import {styles} from './styles';

interface IButton {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Button = (props: IButton) => {
  const {text, onPress, style: providedStyles} = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, providedStyles]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
