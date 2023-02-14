import React from 'react';
import RNCheckBox from '@react-native-community/checkbox';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {styles} from './styles';

interface ICheckBox {
  selected: boolean;
  onSelect: (value: boolean) => void;
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export const CheckBox = (props: ICheckBox) => {
  const {selected, onSelect, title, containerStyle} = props;

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => {
        onSelect(!selected);
      }}>
      <RNCheckBox value={selected} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
