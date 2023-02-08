import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IScrollToTopButton {
  onPress: () => void;
}

export const ScrollToTopButton = (props: IScrollToTopButton) => {
  const {onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="arrow-up" size={20} color={'#20262E'} />
    </TouchableOpacity>
  );
};
