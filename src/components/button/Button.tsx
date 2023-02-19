import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  ViewStyle,
  Text,
  TextStyle,
} from 'react-native';
import {styles} from './styles';

interface IButton {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button = (props: IButton) => {
  const {text, onPress, style: providedStyles, textStyle} = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, providedStyles]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};
