import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface IScrollToTopButton {
  onPress: () => void;
}

export const ScrollToTopButton = (props: IScrollToTopButton) => {
  const {onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>UP</Text>
    </TouchableOpacity>
  );
};
