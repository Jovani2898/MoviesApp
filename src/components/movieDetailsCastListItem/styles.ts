import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRightWidth: 1,
    paddingTop: 8,
    maxWidth: 200,
    width: 200,
  },
  image: {
    height: 70,
    width: 60,
    borderRadius: 6,
  },
  descriptionContainer: {alignItems: 'center', flexDirection: 'column'},
  name: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 14,
  },
  character: {
    paddingHorizontal: 12,
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  gender: {
    paddingHorizontal: 12,
    fontSize: 14,
    maxWidth: '80%',
    textAlign: 'center',
    marginTop: 4,
  },
  proficiency: {
    paddingHorizontal: 12,
    fontSize: 14,
    maxWidth: '80%',
    textAlign: 'center',
    marginTop: 4,
  },
});
