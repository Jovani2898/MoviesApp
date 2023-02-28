import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {width: '100%', flexDirection: 'column'},
  image: {height: 80, width: 80},
  descriptionContainer: {marginLeft: 40},
  name: {fontSize: 16},
  country: {fontSize: 14},
  companyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    paddingHorizontal: 40,
    paddingVertical: 12,
  },
  text: {
    margin: 10,
  },
  defaultImage: {},
  divider: {
    height: 2,
    backgroundColor: 'lightgrey',
  },
});
