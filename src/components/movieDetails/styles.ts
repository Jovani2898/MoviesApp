import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  posterContainer: {
    flexDirection: 'column',
    flex: 0.4,
  },
  posterImage: {
    aspectRatio: 6 / 9,
  },
  infoContainer: {
    flexDirection: 'column',
    marginTop: 4,
    alignItems: 'center',
  },
  segment: {
    flexDirection: 'row',
  },
  overviewContainer: {
    paddingHorizontal: 8,
    flex: 0.6,
    alignItems: 'center',
  },
  overview: {
    textAlign: 'justify',
  },
  divider: {
    marginTop: 12,
  },
  releaseDate: {
    marginTop: 8,
    fontSize: 17,
    textAlign: 'center',
  },
  subInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,
    width: '100%',
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
    alignSelf: 'flex-start',
  },
  genre: {
    backgroundColor: '#4B56D2',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    color: '#fff',
  },
  originalLanguageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalLanguage: {
    marginLeft: 3,
  },
  m18: {
    marginLeft: 8,
  },
});
