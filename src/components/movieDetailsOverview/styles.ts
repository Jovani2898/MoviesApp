import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  imageContainer: {
    flexDirection: 'column',
    flex: 0.4,
  },
  image: {
    aspectRatio: 6 / 9,
  },
  releaseDate: {
    marginTop: 8,
    fontSize: 17,
    textAlign: 'center',
  },
  descriptionContainer: {
    paddingHorizontal: 8,
    flex: 0.6,
    alignItems: 'center',
  },
  description: {
    textAlign: 'justify',
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
    width: '90%',
    justifyContent: 'space-evenly',
  },
  genre: {
    backgroundColor: '#4B56D2',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    color: '#fff',
    marginTop: 4,
  },
  additionalInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,
    width: '100%',
  },
  languageContainer: {flexDirection: 'row', alignItems: 'center'},
  language: {
    marginLeft: 3,
  },
});
