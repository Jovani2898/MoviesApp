import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ISignUpForm} from '../../interfaces/auth';
import {Button} from '../button/Button';
import {DatePicker} from '../datePicker/DatePicker';
import {TextInput} from '../textInput/TextInput';
import {styles} from './styles';

interface IAuthSignUp {
  onSignInPress: () => void;
  form: ISignUpForm | null;
  setForm: (name: string, value: string | Date) => void;
  onSignUp: (name: string) => void;
}

export const AuthSignUp = (props: IAuthSignUp) => {
  const {onSignInPress, form, setForm, onSignUp} = props;
  const {setOptions} = useNavigation();

  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    setOptions({title: 'Sign up'});
  }, [setOptions]);

  const triggerDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDatePick = (date: Date) => {
    setForm('birthDate', date);
    setShowDatePicker(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your email"
        value={form?.email || ''}
        onChange={({nativeEvent: {text}}) => {
          setForm('email', text);
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter your password"
        value={form?.password || ''}
        onChange={({nativeEvent: {text}}) => {
          setForm('password', text);
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter your firstName"
        value={form?.firstName || ''}
        onChange={({nativeEvent: {text}}) => {
          setForm('firstName', text);
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter your lastName"
        value={form?.lastName || ''}
        onChange={({nativeEvent: {text}}) => {
          setForm('lastName', text);
        }}
        style={styles.input}
      />
      <DatePicker
        date={form?.birthDate || null}
        mode="date"
        modal
        onPress={triggerDatePicker}
        onConfirm={handleDatePick}
        onCancel={triggerDatePicker}
        isOpen={showDatePicker}
        title="Please select your Birth date"
      />
      <TextInput
        placeholder="About me "
        value={form?.aboutMe || ''}
        onChange={({nativeEvent: {text}}) => {
          setForm('aboutMe', text);
        }}
        multiline
        numberOfLines={4}
        style={[styles.input, styles.textArea]}
      />
      <Button
        text="Sign Up"
        onPress={() => {
          onSignUp('signUp');
        }}
      />
      <Text style={styles.textHint}>Already have an account?</Text>

      <TouchableOpacity onPress={onSignInPress}>
        <Text style={styles.textButton}>Sign In here!</Text>
      </TouchableOpacity>
    </View>
  );
};
