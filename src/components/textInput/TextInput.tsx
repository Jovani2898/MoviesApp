import React from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInputChangeEventData,
  TextStyle,
  ViewStyle,
  TextInput as RNTextInput,
} from 'react-native';
import {styles} from './styles';

interface ITextInput {
  style?: StyleProp<ViewStyle | TextStyle>;
  placeholder: string;
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  multiline?: boolean;
  numberOfLines?: number;
  secureTextEntry?: boolean;
}

export const TextInput = (props: ITextInput) => {
  const {
    style: providedStyle,
    placeholder,
    value,
    onChange,
    multiline,
    numberOfLines,
    secureTextEntry,
  } = props;
  return (
    <RNTextInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      multiline={multiline}
      numberOfLines={numberOfLines}
      secureTextEntry={secureTextEntry}
      style={[styles.input, providedStyle]}
    />
  );
};
