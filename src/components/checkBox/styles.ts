import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Platform.OS === 'android' ? 0 : 6,
  },
  text: {
    paddingLeft: Platform.OS === 'android' ? 0 : 6,
  },
});
