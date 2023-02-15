import React, {Dispatch, SetStateAction, useRef, useState} from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchFilter} from '../searchFilter/SearchFilter';
import {TextInput} from '../textInput/TextInput';
import {styles} from './styles';

interface ISearchHeader {
  setEnableScroll: Dispatch<SetStateAction<boolean>>;
}

export const SearchHeader = (props: ISearchHeader) => {
  const {setEnableScroll} = props;

  const [, setShowFilters] = useState(false);

  const slideAnimation = useRef(new Animated.Value(1)).current;

  const triggerAnimations = () => {
    setShowFilters(state => {
      if (!state) {
        setEnableScroll(false);
        Animated.spring(slideAnimation, {
          toValue: 0,
          useNativeDriver: false,
          bounciness: 0,
        }).start();
      } else {
        setEnableScroll(true),
          Animated.spring(slideAnimation, {
            toValue: 1,
            useNativeDriver: false,
          }).start();
      }
      return !state;
    });
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput placeholder="Search by movie name" style={styles.input} />

        <TouchableOpacity style={styles.filer} onPress={triggerAnimations}>
          <Icon name="filter" size={24} />
        </TouchableOpacity>
      </View>

      <Animated.View
        style={{
          bottom: Animated.multiply(slideAnimation, 350),
          opacity: Animated.subtract(1.03, slideAnimation),
        }}>
        <SearchFilter />
      </Animated.View>
    </>
  );
};
