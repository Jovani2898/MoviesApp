import {Platform, StyleSheet} from 'react-native';
Platform;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 3,
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    borderRadius: 4,
    paddingVertical: Platform.OS === 'android' ? 0 : 8,
  },
  filter: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
