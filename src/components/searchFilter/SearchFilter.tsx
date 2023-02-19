import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  Keyboard,
} from 'react-native';
import {DatePicker} from '../datePicker/DatePicker';
import {Divider} from '../divider/Divider';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CheckBox} from '../checkBox/CheckBox';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {
  searchChangeRating,
  searchChangeYear,
  searchFilterClear,
  searchSaveResult,
  selectMovieGenre,
} from '../../redux/actions/movies';
import {Button} from '../button/Button';
import {useMovies} from '../../hooks/useMovies';

interface ISearchFilter {
  style?: StyleProp<ViewStyle>;
  triggerFilter: () => void;
}

export const SearchFilter = (props: ISearchFilter) => {
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);
  const {searchMovies} = useMovies();

  const dispatch = useAppDispatch();

  const filter = useAppSelector(state => state.movie.popularMovies.filter);

  const handleSearch = async () => {
    Keyboard.dismiss();
    props.triggerFilter();
    await searchMovies(filter).then(searchResult => {
      dispatch(searchSaveResult(searchResult));
    });
  };

  const handleClear = async () => {
    Keyboard.dismiss();
    dispatch(searchFilterClear());
    props.triggerFilter();
  };

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.singleFilter}>
        <Text>Movie year: </Text>
        <DatePicker
          mode="date"
          modal
          onConfirm={date => {
            dispatch(searchChangeYear(date.getFullYear()));
          }}
          onCancel={() => setDatePickerIsOpen(false)}
          date={filter.year}
          title="Select movie year"
          isOpen={datePickerIsOpen}
          onPress={() => setDatePickerIsOpen(true)}
          containerStyle={styles.datePickerContainer}
        />
      </View>
      <Divider style={styles.divider} />
      <View style={[styles.singleFilter]}>
        <Text>Choose movie rating:</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingStarsContainer}>
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
          </View>
          <View style={styles.ratingSliderContainer}>
            <TouchableOpacity
              onPress={() => {
                if (filter.rating > 1) {
                  dispatch(searchChangeRating(filter.rating - 1));
                }
              }}>
              <Icon name="minus" />
            </TouchableOpacity>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={5}
              value={filter.rating}
              disabled={false}
              step={1}
            />
            <TouchableOpacity
              onPress={() => {
                if (filter.rating < 5) {
                  dispatch(searchChangeRating(filter.rating + 1));
                }
              }}>
              <Icon name="plus" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={[styles.singleFilter, styles.checkboxContainer]}>
        {filter.genres?.map(
          (genre: {title: string; value: boolean; id: number}) => (
            <CheckBox
              key={genre.title}
              title={genre.title}
              selected={genre.value}
              containerStyle={styles.checkbox}
              onSelect={(value: boolean) => {
                dispatch(selectMovieGenre(genre.title, value));
              }}
            />
          ),
        )}
      </View>
      <Divider style={styles.divider} />
      <View style={styles.buttonContainer}>
        <Button
          text="Clear"
          style={styles.clearButton}
          textStyle={styles.clearButtonTextStyle}
          onPress={handleClear}
        />
        <Button text="Search" onPress={handleSearch} />
      </View>
    </View>
  );
};
