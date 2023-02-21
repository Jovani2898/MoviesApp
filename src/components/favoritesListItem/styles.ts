import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 8,
    height: 162,
  },
  imageButton: {
    flex: 0.3,
  },
  image: {aspectRatio: 6 / 9},
  textContainer: {
    flex: 0.7,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 6,
  },
  title: {
    flex: 0.2,
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    paddingBottom: 2,
  },
  overview: {
    fontSize: 14,
  },
  overviewScroll: {
    flex: 0.8,
  },
});
