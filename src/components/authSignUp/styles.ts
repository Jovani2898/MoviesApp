import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {width: 300, marginBottom: 12},
  textHint: {textAlign: 'center', marginTop: 12},
  textButton: {
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  textArea: {textAlignVertical: 'top'},
  errorMessage: {color: 'red', paddingVertical: 6},
  signUpInputError: {
    width: 300,
    marginBottom: 12,
    borderEndWidth: 1,
    borderColor: 'red',
  },
});
