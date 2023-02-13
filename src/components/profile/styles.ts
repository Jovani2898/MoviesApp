import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  container: {
    paddingHorizontal: 12,
    paddingTop: 12,
    alignItems: 'center',
    flex: 1,
  },
  input: {
    marginBottom: 12,
    width: '100%',
  },
  textArea: {
    textAlignVertical: 'top',
  },
  button: {
    width: '100',
  },
});
