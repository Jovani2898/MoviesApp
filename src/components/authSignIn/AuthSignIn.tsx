import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ISignInForm} from '../../interfaces/auth';
import {Button} from '../button/Button';
import {TextInput} from '../textInput/TextInput';
import {styles} from './styles';

interface IAuthSignIn {
  onSignUpPress: () => void;
  form: ISignInForm | null;
  setForm: (name: string, value: string) => void;
  onSignIn: (name: string) => void;
  signInError: string;
}

export const AuthSignIn = (props: IAuthSignIn) => {
  const {onSignUpPress, onSignIn, setForm, form, signInError} = props;
  const {setOptions} = useNavigation();

  useEffect(() => {
    setOptions({title: 'Sign in'});
  }, [setOptions]);

  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{signInError}</Text>
      <TextInput
        placeholder="Enter your email"
        value={form?.email || ''}
        onChange={({nativeEvent: {text}}) => {
          setForm('email', text);
        }}
        style={signInError ? styles.inputWithError : styles.input}
      />
      <TextInput
        placeholder="Enter your password"
        value={form?.password || ''}
        onChange={({nativeEvent: {text}}) => {
          setForm('password', text);
        }}
        style={signInError ? styles.inputWithError : styles.input}
        secureTextEntry={true} //for blur password
      />
      <Button
        text="Sign In"
        onPress={() => {
          onSignIn('signIn');
        }}
      />
      <Text style={styles.textHint}>Don't have an account?</Text>
      <TouchableOpacity onPress={onSignUpPress}>
        <Text style={styles.textButton}>Sign up here!</Text>
      </TouchableOpacity>
    </View>
  );
};
