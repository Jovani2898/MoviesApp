import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  input: {width: 200, marginBottom: 12},
  errorMessage: {color: 'red', paddingVertical: 6},
  inputWithError: {
    width: 200,
    marginBottom: 12,
    borderEndWidth: 1,
    borderColor: 'red',
  },
  textHint: {textAlign: 'center', marginTop: 12},
  textButton: {
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
    marginTop: -2,
  },
});
