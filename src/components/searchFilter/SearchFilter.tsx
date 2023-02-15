import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {
  searchChangeRating,
  searchChangeYear,
  selectMovieGenre,
} from '../../redux/actions/movies';
import {Button} from '../button/Button';
import {CheckBox} from '../checkBox/CheckBox';
import {DatePicker} from '../datePicker/DatePicker';
import {Divider} from '../divider/Divider';
import {styles} from './styles';

interface ISearchFilter {
  style?: StyleProp<ViewStyle>;
}

export const SearchFilter = (props: ISearchFilter) => {
  const [datePickerisOpen, setDatePickerisOpen] = useState(false);

  const dispatch = useAppDispatch();

  const {genres, rating, year} = useAppSelector(
    state => state.movie.popularMovies.filter,
  );

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.singleFilter}>
        <Text> Movies Year: </Text>

        <DatePicker
          mode="date"
          modal
          onConfirm={date => {
            dispatch(searchChangeYear(date.getFullYear()));
          }}
          onCancel={() => setDatePickerisOpen(false)}
          date={year}
          title="Select movie year"
          isOpen={datePickerisOpen}
          onPress={() => setDatePickerisOpen(true)}
          containerStyle={styles.datePickerContainer}
        />
      </View>
      <Divider style={styles.divider} />
      <View style={[styles.singleFilter]}>
        <Text> Choose Movie Rating:</Text>
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
                if (rating > 1) {
                  dispatch(searchChangeRating(rating - 1));
                }
              }}>
              <Icon name="minus" />
            </TouchableOpacity>
            <Slider
              minimumValue={1}
              maximumValue={5}
              value={rating}
              disabled={false}
              step={1}
            />
            <TouchableOpacity
              onPress={() => {
                if (rating < 5) {
                  dispatch(searchChangeRating(rating + 1));
                }
              }}>
              <Icon name="plus" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={[styles.singleFilter, styles.checkboxContainer]}>
        {genres?.map((genre: {title: string; value: boolean}) => (
          <CheckBox
            title={genre.title}
            selected={genre.value}
            containerStyle={styles.checkbox}
            onSelect={(value: boolean) => {
              console.log(value);
              dispatch(selectMovieGenre(genre.title, value));
            }}
          />
        ))}
      </View>
      <Divider style={styles.divider} />
      <View style={styles.buttonContainer}>
        <Button text="Search" onPress={() => {}} />
      </View>
    </View>
  );
};
