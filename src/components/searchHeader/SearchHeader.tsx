import React, {Dispatch, SetStateAction, useRef, useState} from 'react';
import {Animated, Keyboard, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useMovies} from '../../hooks/useMovies';
import {
  searchChangeTitle,
  searchSaveResult,
  searchStartLoading,
} from '../../redux/actions/movies';
import {SearchFilter} from '../searchFilter/SearchFilter';
import {TextInput} from '../textInput/TextInput';
import {styles} from './styles';

interface ISearchHeader {
  setEnableScroll: Dispatch<SetStateAction<boolean>>;
}

export const SearchHeader = (props: ISearchHeader) => {
  const {setEnableScroll} = props;

  const [showFilters, setShowFilters] = useState(false);

  const slideAnimation = useRef(new Animated.Value(1)).current;

  const dispatch = useAppDispatch();

  const filter = useAppSelector(state => state.movie.popularMovies.filter);

  const {searchMovies} = useMovies();

  const triggerAnimation = () => {
    Keyboard.dismiss();
    setShowFilters(state => {
      if (!state) {
        // setEnableScroll(false);
        Animated.spring(slideAnimation, {
          toValue: 0,
          useNativeDriver: false,
          bounciness: 0,
        }).start();
      } else {
        // setEnableScroll(true);
        Animated.spring(slideAnimation, {
          toValue: 1,
          useNativeDriver: false,
        }).start();
      }
      return !state;
    });
  };

  const submitSearch = async () => {
    if (showFilters) {
      triggerAnimation();
    }
    dispatch(searchStartLoading());
    await searchMovies(filter).then(searchResult => {
      dispatch(searchSaveResult(searchResult));
    });
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="Search by movie name"
          style={styles.input}
          value={filter.title}
          onChange={({nativeEvent: {text}}) => {
            if (text.length === 0) {
              dispatch(searchChangeTitle(null));
            } else {
              dispatch(searchChangeTitle(text));
            }
          }}
          onSubmit={submitSearch}
        />

        <TouchableOpacity style={styles.filter} onPress={triggerAnimation}>
          <Icon name="filter" size={24} />
        </TouchableOpacity>
      </View>

      <Animated.View
        style={{
          bottom: Animated.multiply(slideAnimation, 350),
          opacity: Animated.subtract(1.03, slideAnimation),
        }}>
        <SearchFilter triggerFilter={triggerAnimation} />
      </Animated.View>
    </>
  );
};
