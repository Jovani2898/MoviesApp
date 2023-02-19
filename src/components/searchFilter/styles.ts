import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 2,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  singleFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  datePickerContainer: {
    marginBottom: 0,
    width: 200,
  },
  divider: {
    marginVertical: 8,
  },
  ratingContainer: {
    alignItems: 'center',
  },
  ratingStarsContainer: {
    width: 185,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingSliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  slider: {width: 180, height: 40},
  checkbox: {
    width: '33.33%',
    justifyContent: 'flex-start',
  },
  checkboxContainer: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButton: {
    backgroundColor: '#fff',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#000',
  },
  clearButtonTextStyle: {color: '#000'},
});
